import{b as r,j as e,bl as i}from"./vendor-react-core-B-R9HE-Z.js";import{P as W}from"./PythonFileLoader-DZ61U3Y_.js";import{F as H}from"./FAQTemplate-16IfroqC.js";import{P as G}from"./PlainTextPrint-C6NaUtnE.js";import{T as Q}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const X=`"""
=============================================================================
TOPIC 6: DATA PREPROCESSING CONCEPT & PIPELINE ARCHITECTURE
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B - MAKAUT Aligned)
=============================================================================

This simulation demonstrates:
1. End-to-end Data Preprocessing Lifecycle:
   - Data Quality Auditing (Completeness, Uniqueness, Validity, Anomaly detection)
   - Data Cleaning (Handling missing values, deduplication, noise filtering)
   - Feature Scaling (Min-Max Normalization, Z-Score Standardization)
   - Categorical Encoding (One-Hot Encoding, Ordinal Mapping)
2. Strict Data Leakage Prevention:
   - Separate Fit (on Train) and Transform (on Train & Test)
   - Comparison of Leaky vs Non-Leaky Model Pipelines
3. Mathematical verification on realistic West Bengal industrial & urban telemetry:
   - WBSEDCL Smart Meter & Electricity Consumption Telemetry (Bidhannagar / Rajarhat)
   - Kolkata Metro AFC Smart Card Tap-in Data
   - North 24 Parganas Healthcare Telemetry
=============================================================================
"""

import math
import copy
from typing import List, Dict, Any, Tuple, Optional, Union

# =============================================================================
# 1. SYNTHETIC RAW DATASET WITH REALISTIC ANOMALIES & DIRT
# =============================================================================

def get_raw_wbsedcl_consumer_dataset() -> List[Dict[str, Any]]:
    """
    Returns a dirty raw dataset representing consumer electricity profiles
    and smart meter telemetry from Bidhannagar, Rajarhat, and Barrackpore.
    
    Contains deliberate data defects:
    - Missing numerical readings (None / missing values)
    - Missing or inconsistent categorical entries ('kolkata', 'Kolkata', 'KOLKATA', None)
    - Extreme electrical spike outliers (e.g. 9999.0 kWh due to sensor fault)
    - Duplicate customer audit records
    - Inconsistent data types (strings representing numbers)
    """
    return [
        {
            "consumer_id": "WB-BDN-101",
            "region": "Bidhannagar",
            "sanctioned_load_kw": 5.0,
            "monthly_consumption_kwh": 320.5,
            "voltage_fluctuation_pct": 2.1,
            "meter_type": "Smart_IoT",
            "bill_status": "Paid",
            "complaints_count": 0,
            "target_tampering_risk": 0
        },
        {
            "consumer_id": "WB-RJH-102",
            "region": "Rajarhat",
            "sanctioned_load_kw": 3.0,
            "monthly_consumption_kwh": None,  # MISSING VALUE
            "voltage_fluctuation_pct": 8.4,
            "meter_type": "Smart_IoT",
            "bill_status": "Overdue",
            "complaints_count": 2,
            "target_tampering_risk": 1
        },
        {
            "consumer_id": "WB-BKP-103",
            "region": "barrackpore",          # INCONSISTENT CASING
            "sanctioned_load_kw": 4.5,
            "monthly_consumption_kwh": 9999.0, # SENSOR SPIKE OUTLIER
            "voltage_fluctuation_pct": 3.2,
            "meter_type": "Electromechanical",
            "bill_status": "Paid",
            "complaints_count": 1,
            "target_tampering_risk": 0
        },
        {
            "consumer_id": "WB-BDN-101",      # DUPLICATE RECORD
            "region": "Bidhannagar",
            "sanctioned_load_kw": 5.0,
            "monthly_consumption_kwh": 320.5,
            "voltage_fluctuation_pct": 2.1,
            "meter_type": "Smart_IoT",
            "bill_status": "Paid",
            "complaints_count": 0,
            "target_tampering_risk": 0
        },
        {
            "consumer_id": "WB-HOW-104",
            "region": "Howrah",
            "sanctioned_load_kw": "6.0",       # STRING TYPE MISMATCH
            "monthly_consumption_kwh": 410.0,
            "voltage_fluctuation_pct": None,   # MISSING VALUE
            "meter_type": "Electronic",
            "bill_status": "Overdue",
            "complaints_count": 4,
            "target_tampering_risk": 1
        },
        {
            "consumer_id": "WB-KOL-105",
            "region": "Kolkata",
            "sanctioned_load_kw": 2.5,
            "monthly_consumption_kwh": 185.0,
            "voltage_fluctuation_pct": 1.5,
            "meter_type": None,                # MISSING CATEGORICAL
            "bill_status": "Paid",
            "complaints_count": 0,
            "target_tampering_risk": 0
        },
        {
            "consumer_id": "WB-RJH-106",
            "region": "Rajarhat",
            "sanctioned_load_kw": 7.5,
            "monthly_consumption_kwh": 550.0,
            "voltage_fluctuation_pct": 4.0,
            "meter_type": "Smart_IoT",
            "bill_status": "Pending",
            "complaints_count": 1,
            "target_tampering_risk": 0
        },
        {
            "consumer_id": "WB-BKP-107",
            "region": "Barrackpore",
            "sanctioned_load_kw": 1.5,
            "monthly_consumption_kwh": 95.0,
            "voltage_fluctuation_pct": 2.8,
            "meter_type": "Electromechanical",
            "bill_status": "Overdue",
            "complaints_count": 3,
            "target_tampering_risk": 1
        }
    ]


# =============================================================================
# 2. STAGE 1: DATA QUALITY AUDITOR & PROFILER
# =============================================================================

class DataQualityAuditor:
    """
    Profiles raw data against standard empirical Data Quality dimensions:
    1. Completeness: Proportion of non-null observations.
    2. Uniqueness: Proportion of distinct entities/records.
    3. Consistency: Uniform casing, types, and domain bounds.
    4. Validity: Conformity with expected business domain constraints.
    """
    def __init__(self, key_field: str = "consumer_id"):
        self.key_field = key_field

    def audit(self, records: List[Dict[str, Any]]) -> Dict[str, Any]:
        n_total = len(records)
        if n_total == 0:
            return {"error": "Empty dataset provided"}

        all_keys = list(records[0].keys())
        field_completeness = {}
        missing_count_per_field = {}
        
        for k in all_keys:
            missing_count = sum(1 for r in records if r.get(k) is None or str(r.get(k)).strip() == "")
            missing_count_per_field[k] = missing_count
            field_completeness[k] = round((n_total - missing_count) / n_total * 100, 2)

        # Uniqueness of identifier
        ids = [r.get(self.key_field) for r in records if r.get(self.key_field) is not None]
        unique_ids = set(ids)
        duplicate_count = len(ids) - len(unique_ids)
        uniqueness_pct = round(len(unique_ids) / len(ids) * 100, 2) if ids else 0.0

        # Overall dataset health score
        avg_completeness = sum(field_completeness.values()) / len(field_completeness)
        health_score = round(0.6 * avg_completeness + 0.4 * uniqueness_pct, 1)

        return {
            "total_records": n_total,
            "duplicate_records": duplicate_count,
            "uniqueness_percentage": uniqueness_pct,
            "field_completeness_pct": field_completeness,
            "missing_count_per_field": missing_count_per_field,
            "overall_health_score": health_score
        }


# =============================================================================
# 3. STAGE 2: CLEANING TRANSFORMER (DEDUPLICATION, IMPUTATION, OUTLIERS)
# =============================================================================

class DataCleaningTransformer:
    """
    Applies standard deterministic cleaning rules:
    - Eviction of duplicate rows by primary identifier
    - Casing and whitespace normalization
    - Numeric type enforcement
    - Mean/Median imputation for missing values
    - Mode imputation for categorical values
    - Outlier capping using IQR (Interquartile Range)
    """
    def __init__(self, key_field: str = "consumer_id"):
        self.key_field = key_field
        self.learned_imputation_stats: Dict[str, Any] = {}
        self.learned_iqr_bounds: Dict[str, Tuple[float, float]] = {}

    def fit(self, records: List[Dict[str, Any]], numeric_cols: List[str], cat_cols: List[str]) -> "DataCleaningTransformer":
        """Learns statistical parameters strictly from the training data."""
        # 1. Learn median/mean for numeric columns
        for col in numeric_cols:
            vals = []
            for r in records:
                v = r.get(col)
                if v is not None:
                    try:
                        vals.append(float(v))
                    except (ValueError, TypeError):
                        pass
            if vals:
                sorted_vals = sorted(vals)
                n = len(sorted_vals)
                median_val = sorted_vals[n // 2] if n % 2 != 0 else (sorted_vals[n // 2 - 1] + sorted_vals[n // 2]) / 2.0
                mean_val = sum(vals) / n
                self.learned_imputation_stats[col] = {"median": median_val, "mean": mean_val}

                # Learn IQR bounds
                q1 = sorted_vals[int(0.25 * n)]
                q3 = sorted_vals[int(0.75 * n)]
                iqr = q3 - q1
                lower_bound = q1 - 1.5 * iqr
                upper_bound = q3 + 1.5 * iqr
                self.learned_iqr_bounds[col] = (lower_bound, upper_bound)
            else:
                self.learned_imputation_stats[col] = {"median": 0.0, "mean": 0.0}
                self.learned_iqr_bounds[col] = (0.0, 1000.0)

        # 2. Learn mode for categorical columns
        for col in cat_cols:
            freq: Dict[str, int] = {}
            for r in records:
                v = r.get(col)
                if v is not None and str(v).strip():
                    norm_v = str(v).strip().title()
                    freq[norm_v] = freq.get(norm_v, 0) + 1
            mode_val = max(freq.items(), key=lambda x: x[1])[0] if freq else "Unknown"
            self.learned_imputation_stats[col] = {"mode": mode_val}

        return self

    def transform(self, records: List[Dict[str, Any]], numeric_cols: List[str], cat_cols: List[str]) -> List[Dict[str, Any]]:
        """Applies the learned cleaning parameters without looking ahead."""
        cleaned = []
        seen_keys = set()

        for r in records:
            # Deduplication
            kid = r.get(self.key_field)
            if kid in seen_keys:
                continue
            seen_keys.add(kid)

            row = copy.deepcopy(r)

            # Clean and normalize categorical fields
            for col in cat_cols:
                v = row.get(col)
                if v is None or str(v).strip() == "":
                    row[col] = self.learned_imputation_stats.get(col, {}).get("mode", "Standard")
                else:
                    row[col] = str(v).strip().title()

            # Clean numeric fields: cast, impute, cap outliers
            for col in numeric_cols:
                v = row.get(col)
                val_num = None
                if v is not None:
                    try:
                        val_num = float(v)
                    except (ValueError, TypeError):
                        val_num = None

                if val_num is None:
                    val_num = self.learned_imputation_stats.get(col, {}).get("median", 0.0)

                # Cap outliers using learned IQR bounds
                if col in self.learned_iqr_bounds:
                    low, high = self.learned_iqr_bounds[col]
                    val_num = max(low, min(val_num, high))

                row[col] = round(val_num, 2)

            cleaned.append(row)

        return cleaned


# =============================================================================
# 4. STAGE 3: FEATURE SCALING TRANSFORMERS (MIN-MAX & STANDARDIZATION)
# =============================================================================

class FeatureScalingTransformer:
    """
    Standard statistical scalers:
    - Min-Max Scaling: x_norm = (x - x_min) / (x_max - x_min) -> [0, 1]
    - Z-Score Standardization: z = (x - mu) / sigma -> N(0, 1)
    """
    def __init__(self, method: str = "minmax"):
        self.method = method
        self.stats: Dict[str, Dict[str, float]] = {}

    def fit(self, records: List[Dict[str, Any]], columns: List[str]) -> "FeatureScalingTransformer":
        for col in columns:
            vals = [float(r[col]) for r in records if col in r and r[col] is not None]
            if not vals:
                self.stats[col] = {"min": 0.0, "max": 1.0, "mean": 0.0, "std": 1.0}
                continue

            vmin = min(vals)
            vmax = max(vals)
            vmean = sum(vals) / len(vals)
            variance = sum((x - vmean) ** 2 for x in vals) / len(vals)
            vstd = math.sqrt(variance) if variance > 1e-9 else 1.0

            self.stats[col] = {
                "min": vmin,
                "max": vmax if vmax > vmin else vmin + 1.0,
                "mean": vmean,
                "std": vstd
            }
        return self

    def transform(self, records: List[Dict[str, Any]], columns: List[str]) -> List[Dict[str, Any]]:
        scaled = []
        for r in records:
            row = copy.deepcopy(r)
            for col in columns:
                if col in row and col in self.stats:
                    v = float(row[col])
                    st = self.stats[col]
                    if self.method == "minmax":
                        scaled_val = (v - st["min"]) / (st["max"] - st["min"])
                    elif self.method == "standard":
                        scaled_val = (v - st["mean"]) / st["std"]
                    else:
                        scaled_val = v
                    row[f"{col}_scaled"] = round(scaled_val, 4)
            scaled.append(row)
        return scaled


# =============================================================================
# 5. STAGE 4: CATEGORICAL ONE-HOT & ORDINAL ENCODERS
# =============================================================================

class CategoricalEncodingTransformer:
    """
    Transforms non-numeric categorical attributes into ML-compatible numerical matrices:
    - One-Hot Encoding for nominal variables without intrinsic rank
    - Ordinal Encoding for ranked variables
    """
    def __init__(self, one_hot_cols: List[str], ordinal_mappings: Dict[str, Dict[str, int]] = None):
        self.one_hot_cols = one_hot_cols
        self.ordinal_mappings = ordinal_mappings or {}
        self.learned_categories: Dict[str, List[str]] = {}

    def fit(self, records: List[Dict[str, Any]]) -> "CategoricalEncodingTransformer":
        for col in self.one_hot_cols:
            cats = sorted(list(set(str(r[col]) for r in records if col in r and r[col] is not None)))
            self.learned_categories[col] = cats
        return self

    def transform(self, records: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
        encoded = []
        for r in records:
            row = copy.deepcopy(r)
            # One-Hot Encoding
            for col in self.one_hot_cols:
                val = str(row.get(col, ""))
                for cat in self.learned_categories.get(col, []):
                    feature_name = f"{col}_{cat.replace(' ', '_').lower()}"
                    row[feature_name] = 1 if val == cat else 0

            # Ordinal Encoding
            for col, mapping in self.ordinal_mappings.items():
                if col in row:
                    val = str(row[col])
                    row[f"{col}_ord"] = mapping.get(val, 0)

            encoded.append(row)
        return encoded


# =============================================================================
# 6. STAGE 5: COMPOSITE PREPROCESSING PIPELINE (WITH ANTI-LEAKAGE PROOF)
# =============================================================================

class MachineLearningPreprocessingPipeline:
    """
    Orchestrates the complete sequential flow:
    Audit -> Clean & Impute -> Scale Features -> Encode Categoricals -> Feature Vector Packing
    
    Adheres strictly to the Scikit-Learn .fit() / .transform() paradigm:
    NEVER leaks test data distributions into training statistics!
    """
    def __init__(self):
        self.cleaner = DataCleaningTransformer(key_field="consumer_id")
        self.scaler = FeatureScalingTransformer(method="minmax")
        self.encoder = CategoricalEncodingTransformer(
            one_hot_cols=["meter_type", "region"],
            ordinal_mappings={"bill_status": {"Paid": 0, "Pending": 1, "Overdue": 2}}
        )
        self.numeric_cols = ["sanctioned_load_kw", "monthly_consumption_kwh", "voltage_fluctuation_pct", "complaints_count"]
        self.cat_cols = ["region", "meter_type", "bill_status"]
        self.is_fitted = False

    def fit(self, train_records: List[Dict[str, Any]]) -> "MachineLearningPreprocessingPipeline":
        """Fits all transformers strictly on the training partition."""
        self.cleaner.fit(train_records, self.numeric_cols, self.cat_cols)
        clean_train = self.cleaner.transform(train_records, self.numeric_cols, self.cat_cols)
        
        self.scaler.fit(clean_train, self.numeric_cols)
        scaled_train = self.scaler.transform(clean_train, self.numeric_cols)
        
        self.encoder.fit(scaled_train)
        self.is_fitted = True
        return self

    def transform(self, records: List[Dict[str, Any]]) -> Tuple[List[List[float]], List[str]]:
        """Transforms unseen records using parameters learned during fit()."""
        if not self.is_fitted:
            raise RuntimeError("Pipeline must be fitted on training data before calling transform()!")

        clean_data = self.cleaner.transform(records, self.numeric_cols, self.cat_cols)
        scaled_data = self.scaler.transform(clean_data, self.numeric_cols)
        encoded_data = self.encoder.transform(scaled_data)

        # Assemble uniform numerical design matrix X
        feature_names = [f"{col}_scaled" for col in self.numeric_cols]
        feature_names.append("bill_status_ord")
        for col in self.encoder.one_hot_cols:
            for cat in self.encoder.learned_categories.get(col, []):
                feature_names.append(f"{col}_{cat.replace(' ', '_').lower()}")

        X_matrix = []
        for r in encoded_data:
            vector = [float(r.get(fn, 0.0)) for fn in feature_names]
            X_matrix.append(vector)

        return X_matrix, feature_names


# =============================================================================
# 7. DEMONSTRATION & VERIFICATION DRIVER
# =============================================================================

def run_topic6_preprocessing_lab():
    print("=" * 80)
    print("TOPIC 6: DATA PREPROCESSING CONCEPT - LABORATORY SIMULATION")
    print("Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal")
    print("Course: BCAC701B - Introduction to Machine Learning")
    print("=" * 80)

    # 1. Load Raw Dataset
    raw_data = get_raw_wbsedcl_consumer_dataset()
    print(f"\\n[STEP 1] Ingested Raw Dataset: {len(raw_data)} records containing intentional defects.")
    print("Sample raw record (Consumer WB-BKP-103 with sensor spike outlier):")
    print(f"  {raw_data[2]}")

    # 2. Stage 1: Data Quality Audit
    auditor = DataQualityAuditor(key_field="consumer_id")
    audit_report = auditor.audit(raw_data)
    print("\\n[STEP 2] Data Quality Audit Report (GIGO Prevention):")
    print(f"  - Total Ingested Rows: {audit_report['total_records']}")
    print(f"  - Duplicate Records Identified: {audit_report['duplicate_records']}")
    print(f"  - Identity Uniqueness: {audit_report['uniqueness_percentage']}%")
    print(f"  - Overall Dataset Health Index: {audit_report['overall_health_score']} / 100")
    print("  - Field Completeness:")
    for field, pct in audit_report['field_completeness_pct'].items():
        missing = audit_report['missing_count_per_field'][field]
        print(f"    * {field:25s}: {pct:6.1f}% complete ({missing} missing)")

    # 3. Partitioning: Train vs Test (Preventing Data Leakage)
    print("\\n[STEP 3] Splitting into Train (60%) and Test (40%) to Verify Anti-Leakage Protocol:")
    train_raw = raw_data[:5]
    test_raw = raw_data[5:]
    print(f"  - Train Partition: {len(train_raw)} records")
    print(f"  - Test Partition:  {len(test_raw)} records")

    # 4. Fit & Transform via Pipeline
    pipeline = MachineLearningPreprocessingPipeline()
    print("\\n[STEP 4] Fitting Pipeline Strictly on Training Split (Learning Scaler min/max, Imputation medians)...")
    pipeline.fit(train_raw)

    print("\\n  Learned Imputation Parameters on Train Split:")
    for col, stat in pipeline.cleaner.learned_imputation_stats.items():
        print(f"    * {col:25s}: {stat}")

    print("\\n  Learned Scaling Bounds on Train Split:")
    for col, st in pipeline.scaler.stats.items():
        print(f"    * {col:25s}: Min={st['min']}, Max={st['max']}, Mean={st['mean']:.2f}")

    # 5. Transform Train and Test
    X_train, feature_cols = pipeline.transform(train_raw)
    X_test, _ = pipeline.transform(test_raw)

    print(f"\\n[STEP 5] Production-Ready Feature Matrices Generated:")
    print(f"  - Number of Engineered Feature Dimensions: {len(feature_cols)}")
    print(f"  - Feature Column Manifest:")
    for i, fc in enumerate(feature_cols):
        print(f"    [{i:02d}] {fc}")

    print(f"\\n  - Processed X_train shape: ({len(X_train)}, {len(feature_cols)})")
    print(f"  - Processed X_test shape:  ({len(X_test)}, {len(feature_cols)})")

    print("\\n  Sample Transformed X_train Row (Normalized & Encoded):")
    print(f"    Row 0: {[round(x, 3) for x in X_train[0]]}")

    print("\\n  Sample Transformed X_test Row (Evaluated with strictly frozen Train statistics):")
    print(f"    Row 0: {[round(x, 3) for x in X_test[0]]}")

    print("\\n" + "=" * 80)
    print("DATA PREPROCESSING LAB SIMULATION EXECUTED CLEANLY WITH ZERO ERRORS")
    print("=" * 80)

if __name__ == "__main__":
    run_topic6_preprocessing_lab()
`,U=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 6: Data Preprocessing Concept & Pipeline Architecture
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
=============================================================================

1. EXECUTIVE OVERVIEW: THE "GIGO" IMPERATIVE IN MACHINE LEARNING
-----------------------------------------------------------------------------
In classical software engineering, algorithms follow deterministic conditional logic:
    Output = Logic(Input)
If the input contains anomalies, software might raise an explicit exception.

In Machine Learning, systems do not execute static code; they inductively calibrate 
millions of internal parameters from empirical patterns:
    Parameters theta* = argmin_theta [ (1 / N) * sum( Loss( f(x_i; theta), y_i ) ) ]
When fed corrupted, unscaled, or incomplete feature matrices, the model does NOT crash; 
instead, it silently learns corrupted decision surfaces, spurious correlations, and 
pathological representations.

This is encapsulated by the fundamental Law of Data Science:
    "Garbage In, Garbage Out" (GIGO)

Empirical research across production environments reveals:
- Up to 80% of an applied ML engineer's lifecycle is dedicated to Data Quality Auditing, 
  Cleaning, Feature Transformation, and Preprocessing.
- Only 20% of effort is spent choosing architectures and tuning neural hyperparameters.
A simple linear model trained on impeccably preprocessed data routinely outperforms 
a deep ensemble trained on raw, dirty, unstandardized features.


2. THE 6 PILLARS OF THE DATA PREPROCESSING TAXONOMY
-----------------------------------------------------------------------------
Data preprocessing is not an ad-hoc collection of scripts; it is an organized,
sequential pipeline consisting of 6 distinct mathematical and operational phases:

Phase 1: Data Quality Auditing & Profiling
  - Inspecting schema integrity, null ratios, cardinality, and distribution shape.
  - Verification of the 4 Essential Data Quality Dimensions:
    * Completeness: C = (N_valid / N_total) * 100%
    * Uniqueness:   U = (N_distinct_keys / N_total) * 100%
    * Validity:     Conformance to physical domain bounds (e.g., Age in [0, 120])
    * Consistency:  Uniformity across representations (e.g., "Kolkata" vs "kolkata")

Phase 2: Data Cleaning (Sanitization)
  - Handling Missing Data: Removal (Listwise/Pairwise) vs Imputation (Mean, Median, Mode, MICE, KNN).
  - Outlier Mitigation: Truncation/Winsorization vs Capping via IQR (Interquartile Range) or 3-Sigma.
  - Deduplication: Eliminating repeated entity logs to avoid sample weight inflation.
  - Text Normalization: Whitespace trimming, lowercasing, canonical token mapping.

Phase 3: Data Transformation (Feature Engineering)
  - Mathematical transformations to rectify skewness and variance non-stationarity:
    * Logarithmic Transformation: y = log(x + 1) to tame heavy-tailed Pareto distributions (e.g., incomes, prices).
    * Power Transformations: Box-Cox and Yeo-Johnson transformations to induce Gaussianity.
    * Discretization / Binning: Converting continuous quantities into ordinal bins.

Phase 4: Feature Scaling (Magnitude Standardization)
  - Eliminating unit bias across disparate physical measurements (e.g., Age [0-100] vs Salary [Rs 10,000 - 50,00,000]):
    * Min-Max Normalization: x_norm = (x - x_min) / (x_max - x_min) -> [0, 1]
    * Z-Score Standardization: z = (x - mu) / sigma -> Mean 0, Variance 1
    * Robust Scaling: x_robust = (x - Q2) / (Q3 - Q1) -> Resistant to extreme outliers

Phase 5: Categorical Encoding
  - Converting discrete symbolic categories into numeric vectors suitable for linear algebra:
    * One-Hot Encoding: Creates binary indicator columns for nominal categories without rank.
    * Ordinal Encoding: Maps ordered tiers to monotonic integer sequences (e.g., High=2, Med=1, Low=0).
    * Target / Frequency Encoding: Replacing categories with posterior likelihood or class frequencies.

Phase 6: Data Reduction & Tensor Assembly
  - Feature Selection: Filter, Wrapper, and Embedded methods to evict redundant dimensions.
  - Dimensionality Reduction: PCA, SVD, or UMAP to compress feature collinearity.
  - Design Matrix Packing: Compiling clean vectors into an aligned NumPy/Tensor matrix X in R^(N x D).


3. MATHEMATICAL FOUNDATIONS: WHY PREPROCESSING MATTERS TO CONVERGENCE
-----------------------------------------------------------------------------
Why do unscaled features damage Machine Learning algorithms? Consider Gradient Descent:
    theta^(t+1) = theta^(t) - eta * grad_theta J(theta)

Let feature x_1 have range [0, 1] and feature x_2 have range [0, 100,000].
The Hessian matrix H = nabla^2 J(theta) of the quadratic loss surface will have eigenvalues:
    lambda_max >> lambda_min

The Condition Number of the curvature is:
    kappa = lambda_max / lambda_min

Impact:
- If kappa >> 1 (e.g., kappa = 10^5 due to unscaled features), the loss surface forms 
  an elongated, steep elliptical canyon.
- Gradient descent oscillates violently along the high-gradient direction while making 
  infinitesimal progress along the low-gradient valley floor.
- Convergence rate:
      || theta^(t) - theta* || <= ( (kappa - 1) / (kappa + 1) )^t * || theta^(0) - theta* ||
- When features are standardized (Z-score), the contours become spherical (kappa approx 1), 
  allowing direct, optimal, rapid convergence towards the global minimum!


4. THE SACROSANCT RULE: PREVENTING DATA LEAKAGE
-----------------------------------------------------------------------------
Data Leakage occurs when information from outside the training dataset (specifically 
the test or validation set) is inadvertently used to fit preprocessing transformations.

The Golden Pipeline Rule:
    "Always FIT preprocessing transformers strictly on X_train.
     Then TRANSFORM X_train, and TRANSFORM X_test using the FROZEN parameters."

Fatal Architectural Defect (Leaky Pipeline):
    # DANGEROUS / LEAKY CODE:
    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X) # FITS ON ENTIRE DATASET!
    X_train, X_test = train_test_split(X_scaled) # Test set mean & variance leaked!
Result: Artificially optimistic test scores; catastrophic model failure in production!

Correct Architecture (Anti-Leakage):
    X_train, X_test = train_test_split(X)
    scaler = StandardScaler()
    X_train_scaled = scaler.fit_transform(X_train) # Computes mu_train, sigma_train
    X_test_scaled  = scaler.transform(X_test)      # Uses mu_train, sigma_train strictly!


5. ALGORITHM SENSITIVITY MATRIX TO PREPROCESSING
-----------------------------------------------------------------------------
Algorithm               | Scaling Required? | Missing Values Tolerated? | Outlier Sensitive?
------------------------+-------------------+---------------------------+-------------------
Linear Regression / OLS | Recommended       | NO (Crashes)              | High (Leverage pts)
Logistic Regression     | YES (if L1/L2)    | NO (Crashes)              | Medium
k-Nearest Neighbors     | CRITICAL (Dist.)  | NO (Crashes)              | Extreme
Support Vector Machines | CRITICAL (Margin) | NO (Crashes)              | High
Decision Trees / RF     | NO (Invariance)   | YES (Native in XGBoost)   | LOW (Monotonic split)
k-Means Clustering      | CRITICAL (Dist.)  | NO (Crashes)              | Extreme
Neural Networks         | CRITICAL (Grad.)  | NO (NaN propagation)      | High (Exploding grads)


6. REGIONAL WEST BENGAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------
Case Study 1: WBSEDCL Smart Meter Grid (Bidhannagar & Rajarhat)
- Problem: IoT smart meters transmitting hourly consumption data over cellular towers.
- Noise & Artifacts: Network dropouts caused 7.4% missing hourly readings. Lightning 
  strikes and power surges produced voltage spike readings of 9999 V.
- Preprocessing Pipeline:
  * Rolling forward-fill (LOCF) for temporal gaps < 3 hours.
  * IQR outlier clipping [Q1 - 1.5*IQR, Q3 + 1.5*IQR] to remove sensor spike artifacts.
  * RobustScaler to handle heavy-tailed industrial power loads.

Case Study 2: Kolkata Metro Rail Corporation (KMRC East-West Line)
- Problem: Automated Fair Collection (AFC) gates smart card tap-in/tap-out telemetry.
- Artifacts: Duplicate taps recorded within 200 milliseconds due to card bounce. Missing 
  exit timestamps when passengers bypass gates during emergency drills.
- Preprocessing Pipeline:
  * Deduplication within delta_t < 2.0 seconds window.
  * Conditional mode imputation based on origin station to infer missing destination.
  * Cyclical sin/cos encoding of departure timestamp hour:
      x_sin = sin(2 * pi * hour / 24), x_cos = cos(2 * pi * hour / 24).

Case Study 3: Swasthya Sathi Public Health Insurance Portal
- Problem: Claims processing across hundreds of state hospitals in North 24 Parganas.
- Artifacts: ICD-10 medical diagnostic codes entered with spelling variations and 
  unstandardized abbreviations (e.g. "T2D", "Type 2 Diabetes Mellitus", "Diabetic Nephropathy").
- Preprocessing Pipeline:
  * Fuzzy string matching and canonical ontology mapping to standardize diagnoses.
  * Stratified split to preserve rare pathology representation.
  * Target encoding with Laplace smoothing for high-cardinality hospital IDs.

Case Study 4: Barrackpore Jute Mills IoT Predictive Maintenance
- Problem: Vibration and thermal telemetry on century-old weaving looms.
- Artifacts: Extreme thermal drift during humid monsoon months (Asharh-Sraban).
- Preprocessing Pipeline:
  * Seasonal detrending using moving average decomposition.
  * Z-score normalization per individual machine baseline rather than global mean.


7. COMMON ENGINEERING PITFALLS & ANTI-PATTERNS
-----------------------------------------------------------------------------
1. Training-Serving Skew:
   - Defining preprocessing in Python Jupyter Notebooks during research, but reimplementing 
     in Java/Go in production, leading to subtle float rounding discrepancies.
   - Solution: Serialize the full Scikit-Learn Pipeline (\`joblib.dump(pipeline)\`) or use ONNX.

2. Cardinality Explosion:
   - Applying One-Hot Encoding on a column with 10,000 distinct ZIP codes, creating 10,000 
     sparse features that overwhelm memory and cause extreme tree tree-depth blowup.
   - Solution: Use Frequency Encoding, Target Encoding, or Entity Embeddings.

3. Silent Sentinel Nulls:
   - Ingesting legacy datasets where missing numbers are coded as -999, 9999, or "N/A" strings.
     Standard pandas \`.isna()\` does not detect them, skewing mean and variance calculations.
   - Solution: Domain audit and explicit replacement \`df.replace([-999, 9999], np.nan)\`.

4. Premature Imputation Before Train-Test Split:
   - Calculating global mean across both train and test splits, causing subtle test leakage.


8. MAKAUT EXAM REVISION CHECKLIST & KEY QUESTIONS
-----------------------------------------------------------------------------
[Q1] Define Data Preprocessing and explain the GIGO principle.
     -> Systematic transformation of raw data into clean, normalized feature matrices; 
        corrupted inputs yield corrupted parameters regardless of model complexity.

[Q2] What is the difference between Normalization (Min-Max) and Standardization (Z-score)?
     -> Min-Max scales values strictly to [0, 1] bounds, sensitive to outliers. 
        Standardization transforms data to mean=0, std=1, unbounded and resilient to outliers.

[Q3] Why does k-NN require feature scaling while Decision Trees do not?
     -> k-NN computes Euclidean distance d(p, q) = sqrt(sum (p_i - q_i)^2); unscaled 
        features with large magnitudes dominate the metric. Decision Trees perform axis-aligned 
        orthogonal splits invariant to monotonic transformations.

[Q4] Explain Data Leakage with a code example.
     -> Fitting a scaler or imputer on the combined dataset before train-test split, 
        contaminating the training phase with test distribution statistics.

[Q5] Name 4 dimensions of Data Quality.
     -> Completeness, Uniqueness, Consistency, Validity.

=============================================================================
END OF REVISION HANDBOOK - CODER & ACCOTAX BARRACKPORE
=============================================================================
`,K=[{id:1,question:"What is the 'Garbage In, Garbage Out' (GIGO) principle in Machine Learning?",shortAnswer:"Machine learning models inductively calibrate parameters from training data; flawed or uncleaned inputs result in flawed and unreliable model predictions regardless of algorithm sophistication.",explanation:"Unlike deterministic programs that crash when encountering corrupted inputs, ML algorithms silently fit parameters to noisy, biased, or invalid records, learning spurious patterns and producing deceptively poor generalization in production.",hint:"Think about how an algorithm learns weights from patterns: if the data is biased or corrupt, what will the weights reflect?",level:"Basic",codeExample:`# GIGO Demo: Training on dirty data without cleaning
import numpy as np
from sklearn.linear_model import LinearRegression
# Synthetic dirty data with corrupt sentinel value (9999)
X_dirty = np.array([[1], [2], [3], [9999]])
y = np.array([2, 4, 6, 8])
model = LinearRegression().fit(X_dirty, y)
print('Slope with corrupted input:', model.coef_[0])  # Severely distorted slope!`},{id:2,question:"What is the key difference between Data Cleaning and Feature Engineering?",shortAnswer:"Data Cleaning fixes defects, errors, missingness, and inconsistencies in existing data; Feature Engineering creates new informative representations or transforms features to improve model learning.",explanation:"Data Cleaning focuses on data fidelity (imputing nulls, evicting duplicate rows, removing sensor noise, stripping whitespace). Feature Engineering focuses on expressiveness (creating interaction terms, polynomial features, log-transforms, or aggregating ratios).",hint:"One is about sanitizing mistakes in the raw data; the other is about creating new mathematical signals for the model.",level:"Basic",codeExample:`# Data Cleaning: Impute missing values
df['age'] = df['age'].fillna(df['age'].median())

# Feature Engineering: Create a new interaction feature
df['power_to_weight_ratio'] = df['horsepower'] / df['weight']`},{id:3,question:"Why do standard Scikit-Learn estimators raise a ValueError when passed raw data containing NaN values?",shortAnswer:"Underlying linear algebra libraries (BLAS/LAPACK) and mathematical loss formulations require finite real numbers; NaN operations propagate and invalidate matrix computations.",explanation:"Matrix multiplication, dot products, vector norms, and eigenvalue decompositions cannot compute on undefined floating-point values (NaN). Any computation involving NaN yields NaN, which would collapse loss calculation and gradient updates.",hint:"Consider what happens when you compute the dot product of two vectors if one entry is NaN.",level:"Basic",codeExample:`import numpy as np
from sklearn.linear_model import Ridge

X = np.array([[1.0, 2.0], [np.nan, 3.0]])
y = np.array([1, 2])
try:
    Ridge().fit(X, y)
except ValueError as e:
    print('Scikit-Learn error:', e)  # 'Input contains NaN'`},{id:4,question:"What are the four primary dimensions of Data Quality evaluated during the initial audit phase?",shortAnswer:"Completeness (null ratio), Uniqueness (absence of duplicates), Consistency (uniform casing and format), and Validity (conformance to physical domain ranges).",explanation:"A robust data audit assesses: 1. Completeness (% of non-null observations); 2. Uniqueness (distinct primary keys); 3. Consistency (standardized strings, dates, and units); 4. Validity (e.g. human age strictly between 0 and 120 years).",hint:"Recall the 4 dimensions: How complete is it? Are rows unique? Is formatting uniform? Are values physically plausible?",level:"Basic",codeExample:`# Quick Data Quality Audit in Pandas
def audit_dataset(df, key_col):
    completeness = (1 - df.isnull().mean()) * 100
    uniqueness = (df[key_col].nunique() / len(df)) * 100
    return {'completeness_pct': completeness.to_dict(), 'uniqueness_pct': uniqueness}`},{id:5,question:"What is the mathematical difference between Min-Max Normalization and Z-Score Standardization?",shortAnswer:"Min-Max scales values into a fixed bounded interval [0, 1] using min and max; Z-Score transforms data to mean 0 and standard deviation 1 without bounded limits.",explanation:"Min-Max Normalization: x' = (x - x_min) / (x_max - x_min). Z-Score Standardization: z = (x - mu) / sigma. Min-Max is heavily compressed by extreme outliers; Z-Score is unconstrained and preserves outlier distance in units of standard deviations.",hint:"One creates a bounded [0, 1] box; the other shifts the center to 0 and scales spread by sigma.",level:"Basic",codeExample:`from sklearn.preprocessing import MinMaxScaler, StandardScaler
import numpy as np

data = np.array([[10], [20], [30], [1000]]) # Notice extreme outlier
print('Min-Max:\\n', MinMaxScaler().fit_transform(data))
print('Z-Score:\\n', StandardScaler().fit_transform(data))`},{id:6,question:"What is One-Hot Encoding and why is it preferred over arbitrary integer mapping for nominal categorical features?",shortAnswer:"One-Hot Encoding maps categories into individual binary columns, preventing linear and distance models from assuming false ordinal magnitude relationships.",explanation:"If Kolkata, Barrackpore, and Howrah are encoded as 0, 1, and 2, a linear model interprets Howrah as having twice the mathematical value of Barrackpore. One-Hot Encoding creates orthogonal binary indicators where all categories are equidistant in Euclidean space.",hint:"What happens if a model calculates w * x and x=2 vs x=1 for city names?",level:"Basic",codeExample:`import pandas as pd

df = pd.DataFrame({'city': ['Kolkata', 'Barrackpore', 'Howrah']})
# One-Hot Encoding produces 3 binary columns
encoded_df = pd.get_dummies(df['city'], prefix='city', dtype=int)
print(encoded_df)`},{id:7,question:"Why is deduplication of records essential before training machine learning models?",shortAnswer:"Duplicate records artificially inflate sample weights, skew loss gradients toward over-represented samples, and can cause data leakage if copies appear in both train and test splits.",explanation:"If identical records exist, gradient descent treats each copy as an independent observation, biasing the model towards memorizing those exact points. Furthermore, if identical records leak across the train/test split, test evaluation metrics become artificially high.",hint:"What happens if the exact same student record appears 50 times in training and also in test?",level:"Basic",codeExample:`import pandas as pd

df = pd.DataFrame({'id': [1, 2, 2, 3], 'grade': [85, 90, 90, 78]})
clean_df = df.drop_duplicates(subset=['id'], keep='first')
print(f'Original: {len(df)} rows, Clean: {len(clean_df)} rows')`},{id:8,question:"What is the primary architectural advantage of using a Scikit-Learn Pipeline over running standalone pandas scripts?",shortAnswer:"A Pipeline encapsulates all transformation steps and estimators into a single callable object, preventing data leakage and guaranteeing identical transformations at inference time.",explanation:"Pipelines tie together preprocessing transformers and the final model. Calling pipeline.fit(X_train) calculates parameters strictly from train data, and pipeline.predict(X_test) applies identical learned scalers and encoders without manual step tracking.",hint:"Think about reproducibility and packaging: how do you deploy preprocessing and model together without mismatched steps?",level:"Basic",codeExample:`from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', LogisticRegression())
])
# Fits scaler strictly on train, then fits classifier
pipe.fit(X_train, y_train)
# Automatically scales test data before predicting!
preds = pipe.predict(X_test)`},{id:9,question:"Explain the concept of Data Leakage during feature scaling and describe how it occurs.",shortAnswer:"Data Leakage occurs when preprocessing parameters (such as global mean, min, max, or standard deviation) are computed using both training and testing datasets together.",explanation:"If you call scaler.fit_transform(X) on the entire dataset before splitting, the training phase gains knowledge about the test set's distribution and range. This produces overly optimistic cross-validation scores that fail to replicate in real-world deployment.",hint:"What parameters does a scaler learn during .fit()? Where should those parameters come from exclusively?",level:"Moderate",codeExample:`from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

# CORRECT (Anti-leakage):
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train) # Fit ONLY on train!
X_test_scaled = scaler.transform(X_test)       # Transform test using train stats`},{id:10,question:"Why does the k-Nearest Neighbors (k-NN) algorithm catastrophically degrade if numerical features are left unscaled?",shortAnswer:"k-NN relies on distance metrics like Euclidean distance; features with large numerical magnitudes completely dominate the distance computation, rendering smaller-scale features irrelevant.",explanation:"Euclidean distance d(p, q) = sqrt((salary_p - salary_q)^2 + (age_p - age_q)^2). A difference of Rs 5,000 in salary produces a squared term of 25,000,000, while an age difference of 10 years produces only 100. The distance calculation effectively ignores age completely.",hint:"Compare (50000 - 45000)^2 with (25 - 20)^2 in the Euclidean distance formula.",level:"Moderate",codeExample:`import numpy as np
# Patient A: Age 25, Income 50,000; Patient B: Age 65, Income 50,100
p1 = np.array([25, 50000])
p2 = np.array([65, 50100])
dist_unscaled = np.linalg.norm(p1 - p2)  # Dominated by 100 Rs difference!
print(f'Unscaled Distance: {dist_unscaled:.2f}')`},{id:11,question:"Why are Decision Trees and Random Forests invariant to monotonic feature scaling such as Min-Max or Standardization?",shortAnswer:"Decision Trees evaluate split criteria (Gini impurity or Information Gain) on sorted feature order rather than geometric distance or magnitude.",explanation:"A decision tree asks: 'Is x_i <= threshold?'. Because monotonic scaling preserves the exact sorted ranking of all observations, the best split point is simply scaled by the same transformation, resulting in mathematically identical trees and decision boundaries.",hint:"If you multiply all values of x by 100, does the relative ranking (which value is bigger than which) change?",level:"Moderate",codeExample:`from sklearn.tree import DecisionTreeClassifier
# Decision Trees yield identical splits whether features are raw or scaled
tree1 = DecisionTreeClassifier(random_state=42).fit(X_train, y_train)
tree2 = DecisionTreeClassifier(random_state=42).fit(X_train_scaled, y_train)
print('Predictions match:', (tree1.predict(X_test) == tree2.predict(X_test_scaled)).all())`},{id:12,question:"When is Median Imputation strongly preferred over Mean Imputation for missing numerical values?",shortAnswer:"Median Imputation is preferred when the numerical feature contains severe skewness or extreme outliers, as the median is a robust non-parametric central measure.",explanation:"The arithmetic mean minimizes squared error, making it highly sensitive to extreme values (e.g., WBSEDCL power spike of 9999 kWh). Imputing with the mean shifts the entire imputed mass toward the outlier. The median represents the 50th percentile and remains unaffected by extreme values.",hint:"If 9 people earn Rs 20,000 and 1 person earns Rs 100,00,000, does the mean or median represent the typical person?",level:"Moderate",codeExample:`import numpy as np
from sklearn.impute import SimpleImputer

incomes = np.array([[20000], [22000], [21000], [np.nan], [5000000]])
imp_mean = SimpleImputer(strategy='mean').fit_transform(incomes)
imp_med  = SimpleImputer(strategy='median').fit_transform(incomes)
print('Mean imputed:', imp_mean[3][0])    # Heavily distorted (~1,265,750)
print('Median imputed:', imp_med[3][0])  # Realistic value (21,500)`},{id:13,question:"How do extreme outliers distort the Min-Max Normalization formula?",shortAnswer:"An extreme maximum outlier forces x_max to an artificially large value, compressing the non-outlier majority of the data into an extremely narrow band near 0.0.",explanation:"If legitimate features range from 10 to 50, but one sensor error enters 10,000, then (x - 10) / (10000 - 10) results in all normal points falling between 0.000 and 0.004, destroying variance and feature resolution.",hint:"What happens to the denominator (x_max - x_min) when x_max is 10,000 instead of 50?",level:"Moderate",codeExample:`from sklearn.preprocessing import MinMaxScaler
import numpy as np

x = np.array([[10], [15], [20], [25], [10000]]) # Outlier at 10000
scaled = MinMaxScaler().fit_transform(x)
print('Normal points compressed near zero:\\n', scaled[:4])`},{id:14,question:"What is the primary danger of applying One-Hot Encoding to high-cardinality nominal features?",shortAnswer:"It triggers the curse of dimensionality, creating thousands of sparse binary columns that explode memory usage and cause tree algorithms to build overly deep, fragile branches.",explanation:"If an e-commerce dataset has 10,000 distinct PIN codes or product SKUs, One-Hot Encoding adds 10,000 columns. This introduces extreme sparsity, increases computational time, and risks severe overfitting unless Target Encoding or Frequency Encoding is used.",hint:"What happens to a DataFrame shape if you one-hot encode a column with 5,000 unique postal codes?",level:"Moderate",codeExample:`# High-cardinality trap
import pandas as pd
pin_codes = pd.Series([f'700{i:03d}' for i in range(5000)])
encoded = pd.get_dummies(pin_codes)
print('Resulting matrix shape:', encoded.shape)  # (5000, 5000) sparse matrix!`},{id:15,question:"What are 'sentinel values' (e.g. -999, 9999, 99) and why do automated null-check routines fail to detect them?",shortAnswer:"Sentinel values are special numerical flags used by legacy databases to represent missing or invalid entries; because they are valid floating-point numbers, automated checks do not flag them as NaN.",explanation:"If a medical monitor records -999 when a heart rate sensor disconnects, Python treats -999 as a real integer. A standard `df.isna()` check returns False, and calculating the mean patient heart rate yields negative numbers, corrupting downstream models.",hint:"Does `np.isnan(-999)` evaluate to True or False?",level:"Moderate",codeExample:`import pandas as pd
import numpy as np

s = pd.Series([72, 75, -999, 80])
print('Missing detected by default:', s.isna().sum())  # 0 missing!
# Correct approach:
s_clean = s.replace(-999, np.nan)
print('Missing after sentinel replacement:', s_clean.isna().sum())  # 1 missing`},{id:16,question:"How does Ordinal Encoding introduce invalid mathematical assumptions when applied to nominal data?",shortAnswer:"Ordinal encoding assigns incremental integers (0, 1, 2, ...) which linear models interpret as a quantitative distance and ranking that does not exist in nominal data.",explanation:"If marital status (Single=0, Married=1, Divorced=2) is ordinally encoded, an algorithm assumes Divorced > Married > Single, and that Divorced - Married = Married - Single. Linear regression will fit a single weight w, forcing a rigid arithmetic relationship on unrelated categories.",hint:"Is 'Divorced' mathematically greater than 'Married'?",level:"Moderate",codeExample:`# Flawed ordinal assignment for nominal categories
mapping = {'Red': 0, 'Green': 1, 'Blue': 2}
# Implies Blue is 'twice' as much color as Green, which is nonsensical!`},{id:17,question:"How does the condition number kappa of the Hessian matrix relate to feature scaling and Gradient Descent convergence?",shortAnswer:"Unscaled features create an ill-conditioned Hessian with a large condition number kappa = lambda_max / lambda_min, causing gradient descent to oscillate wildly and converge at an exponentially slower rate.",explanation:"When features have vastly different scales, the quadratic loss surface forms an elongated elliptical valley. The convergence rate is bounded by ((kappa - 1) / (kappa + 1))^t. Feature standardization sphericizes the contours (kappa approx 1), enabling optimal linear convergence.",hint:"Recall the geometry of level curves: circles vs elongated ellipses.",level:"Advanced",codeExample:`# Ill-conditioned vs Well-conditioned Hessian condition number
import numpy as np
# Unscaled features: x1 in [0, 1], x2 in [0, 1000]
X_unscaled = np.array([[1.0, 1000.0], [0.5, 500.0], [0.8, 800.0]])
H_unscaled = X_unscaled.T @ X_unscaled
kappa_unscaled = np.linalg.cond(H_unscaled)
print(f'Unscaled Condition Number: {kappa_unscaled:.1e}')  # Very large (~10^6)`},{id:18,question:"Explain the mathematical formulation of the Interquartile Range (IQR) method for outlier fencing.",shortAnswer:"IQR = Q3 - Q1. The Tukey fencing bounds are: Lower Fence = Q1 - 1.5 * IQR, Upper Fence = Q3 + 1.5 * IQR; any observation outside this range is flagged as an outlier.",explanation:"Q1 is the 25th percentile and Q3 is the 75th percentile. Under a standard normal distribution, [Q1 - 1.5*IQR, Q3 + 1.5*IQR] covers approximately 99.3% of the distribution (equivalent to ~2.7 sigma), providing a non-parametric outlier threshold robust to sample extremes.",hint:"What percentiles correspond to the 1st and 3rd quartiles, and what is the standard Tukey multiplier?",level:"Advanced",codeExample:`import numpy as np
def detect_iqr_outliers(data):
    q1 = np.percentile(data, 25)
    q3 = np.percentile(data, 75)
    iqr = q3 - q1
    lower = q1 - 1.5 * iqr
    upper = q3 + 1.5 * iqr
    return [x for x in data if x < lower or x > upper]`},{id:19,question:"Differentiate between Missing Completely at Random (MCAR), Missing at Random (MAR), and Missing Not at Random (MNAR).",shortAnswer:"MCAR: Missingness is independent of any variable; MAR: Missingness depends on observed features; MNAR: Missingness depends on the unobserved missing value itself.",explanation:"MCAR: Battery dies randomly (safe for listwise deletion). MAR: Older patients are less likely to record heart rates in an app, but age is recorded (can impute conditioned on age). MNAR: High-income individuals intentionally refuse to disclose salary (systematic bias; requires specialized modeling).",hint:"Does missingness depend on nothing, on another known column, or on the missing value itself?",level:"Advanced",codeExample:`# MCAR vs MAR vs MNAR:
# MCAR: random coin flip nulls -> simple mean/median imputation works
# MAR: if age > 60 then 30% nulls in blood_pressure -> use IterativeImputer (MICE)
# MNAR: if salary > 1000000 then null -> missingness itself is an informative feature!`},{id:20,question:"Why must custom preprocessing classes in Scikit-Learn implement .fit() and .transform() as separate methods rather than combining them into a single step?",shortAnswer:"Separation ensures stateful parameters are learned strictly from training data during .fit(), allowing the identical learned transformation to be applied to unseen test/production data during .transform().",explanation:"If .fit() and .transform() were inseparable, every time new test data or real-time production requests arrived, the transformer would re-fit its internal statistics on the query batch, causing severe distribution shifts and runtime errors.",hint:"What should a scaler do when a single new query row arrives in production? Re-calculate mean from 1 row?",level:"Advanced",codeExample:`from sklearn.base import BaseEstimator, TransformerMixin
class CustomZScaler(BaseEstimator, TransformerMixin):
    def fit(self, X, y=None):
        self.mean_ = X.mean(axis=0)
        self.std_ = X.std(axis=0)
        return self  # Return self for chaining
    def transform(self, X):
        return (X - self.mean_) / (self.std_ + 1e-8)`},{id:21,question:"How should cyclical temporal features (such as hour of day 0-23 or day of week 0-6) be transformed to preserve continuous periodic boundaries?",shortAnswer:"By projecting the time component onto the unit circle using sine and cosine trigonometric transformations: x_sin = sin(2*pi*t / T) and x_cos = cos(2*pi*t / T).",explanation:"In raw integer representation, hour 23 and hour 0 have a numerical difference of 23, even though physically they are only 1 hour apart. Transforming into (sin, cos) coordinates places 23:00 and 00:00 adjacently on the unit circle with a Euclidean distance of ~0.26.",hint:"How does a clock wrap around from 23 to 0? How do you map a circle to 2D coordinates?",level:"Advanced",codeExample:`import numpy as np
def encode_cyclical_hour(hours):
    sin_h = np.sin(2 * np.pi * hours / 24.0)
    cos_h = np.cos(2 * np.pi * hours / 24.0)
    return sin_h, cos_h
# Hour 23 and Hour 0 are now adjacent in Euclidean space!
s0, c0 = encode_cyclical_hour(0)
s23, c23 = encode_cyclical_hour(23)
print('Circular distance:', np.sqrt((s0 - s23)**2 + (c0 - c23)**2))`},{id:22,question:"What is Target Encoding (Mean Encoding) and how do you prevent catastrophic target leakage when computing it?",shortAnswer:"Target Encoding replaces each category with the average target label value for that category; target leakage is prevented using out-of-fold calculation and additive empirical Bayes smoothing.",explanation:"Directly replacing category C with mean(y | C) over the entire dataset leaks target labels into features. To prevent this, use K-Fold cross-validation splits to compute out-of-fold target averages, and smooth rare categories toward the global prior: S_c = (n_c * y_bar_c + m * y_prior) / (n_c + m).",hint:"What happens if a category appears only once with y=1? It would become a perfect leak!",level:"Advanced",codeExample:`from category_encoders import TargetEncoder
# Uses smoothed empirical Bayes target encoding with regularization
encoder = TargetEncoder(smoothing=10.0)
X_train_encoded = encoder.fit_transform(X_train['category'], y_train)
X_test_encoded = encoder.transform(X_test['category'])`},{id:23,question:"When and why should a logarithmic transform y = log(x + 1) or Box-Cox transformation be applied to continuous features?",shortAnswer:"When continuous features display heavy right-skewness (Pareto / power-law distributions); log transforms compress extreme tails and stabilize variance to satisfy linear normality assumptions.",explanation:"Variables like income, property prices, and WBSEDCL power consumption span multiple orders of magnitude with long right tails. Taking log(x + 1) pulls outliers toward the median, stabilizes homoscedasticity, and produces a symmetric, roughly Gaussian bell curve.",hint:"Think about house prices in Kolkata: most are 30-80 Lakhs, but a few are 50 Crores.",level:"Advanced",codeExample:`import numpy as np
# Skewed incomes
raw_incomes = np.array([25000, 30000, 28000, 50000000])
# Log1p transformation: log(1 + x)
log_incomes = np.log1p(raw_incomes)
print('Raw spread:', raw_incomes.max() / raw_incomes.min())
print('Log-transformed values:', np.round(log_incomes, 2))`},{id:24,question:"How do L1 (Lasso) and L2 (Ridge) regularization penalties behave when features are left unscaled?",shortAnswer:"Regularization penalizes weight magnitudes uniformly via lambda * ||w||; unscaled features with small scales require large weights, causing the penalty to unfairly penalize and shrink them regardless of importance.",explanation:"If feature x_1 is in grams (large scale) and x_2 is in kilograms (small scale), the true physical relationship requires w_2 = 1000 * w_1. Because Ridge penalizes sum(w_j^2), it severely penalizes w_2 while leaving w_1 unpenalized, artificially shrinking x_2.",hint:"Why would an optimizer shrink a weight just because its measurement unit is in kilometers rather than millimeters?",level:"Advanced",codeExample:`from sklearn.linear_model import Ridge
import numpy as np
# Unscaled: feature 2 is 1000x smaller, requiring 1000x larger weight
X = np.array([[1.0, 0.001], [2.0, 0.002]])
y = np.array([5, 10])
# Ridge will suppress feature 2's weight because w2^2 is penalized heavily!
model = Ridge(alpha=1.0).fit(X, y)
print('Fitted weights:', model.coef_)`},{id:25,question:"What is Training-Serving Skew in production machine learning and how do modern Feature Stores eliminate it?",shortAnswer:"Training-Serving Skew is a discrepancy in model performance caused by inconsistent data processing between the offline training environment and online real-time serving infrastructure.",explanation:"Skew happens when offline features are generated using SQL/Pandas batch jobs while online features are computed via Java/Go microservices with subtle differences in logic or time windows. Feature Stores (e.g. Feast, Hopsworks) guarantee a single shared transformation definition for both offline and online reads.",hint:"What happens if training uses Python `round()` (banker's rounding) and the production API uses standard rounding?",level:"Expert",codeExample:`# Concept: Single source of truth feature definition
# Offline batch (Parquet) and Online real-time (Redis) read identical feature logic
# Eliminates the fatal divergence of duplicate preprocessing implementations`},{id:26,question:"How do distributed preprocessing frameworks (such as Apache Spark MLlib) compute global scaling parameters without memory overflow?",shortAnswer:"They utilize associative and commutative reduction operations (map-reduce trees) to compute local partial sums, sum-of-squares, counts, mins, and maxes across partition nodes, combining them at the driver.",explanation:"To calculate mean mu and variance sigma^2 over 10 billion records, worker nodes compute local n_i, sum(x), and sum(x^2). The driver accumulates these partial scalars in O(1) memory using Welford's algorithm or parallel reduction, avoiding pulling the full dataset into memory.",hint:"Can you calculate the combined mean of two datasets if you only know their individual counts and means?",level:"Expert",codeExample:`# Parallel reduction for mean across 2 worker partitions:
def combine_partitions(n1, mean1, n2, mean2):
    n_total = n1 + n2
    combined_mean = (n1 * mean1 + n2 * mean2) / n_total
    return n_total, combined_mean`},{id:27,question:"What is Schema Drift and how does an automated data validation system (e.g. Great Expectations, TensorFlow Data Validation) safeguard pipelines?",shortAnswer:"Schema Drift occurs when upstream data sources change schema unexpectedly (new categories, changed data types, renamed columns); validation suites enforce declarative contracts that halt pipelines upon violation.",explanation:"If an upstream database changes 'gender' from ['M', 'F'] to ['Male', 'Female', 'Other'], an unmonitored one-hot encoder drops all rows or assigns zeros. Automated validation checks schemas against predefined expectations before allowing training or inference.",hint:"How does a production system know if an upstream microservice added a new enum value?",level:"Expert",codeExample:`# Declarative Schema Expectation Example
expectation_suite = {
    'columns': {
        'voltage_fluctuation': {'min_value': 0.0, 'max_value': 100.0, 'type': 'float'},
        'region': {'allowed_values': ['Bidhannagar', 'Rajarhat', 'Barrackpore']}
    }
}`},{id:28,question:"Why can improper or aggressive outlier removal cause severe survivorship bias and selection bias in real-world risk and fraud models?",shortAnswer:"In fraud detection and credit risk, the most critical phenomena and attack vectors naturally manifest as statistical outliers; removing them purges the positive minority class from the training set.",explanation:"If an engineer naively clips all transactions exceeding 3 standard deviations, they effectively erase massive fraudulent wire transfers. Outlier removal must distinguish between measurement error (bad sensors) and authentic tail phenomena (rare, high-value real events).",hint:"In fraud detection, what does a financial transaction outlier usually represent?",level:"Expert",codeExample:`# Flawed preprocessing in fraud detection
# df = df[df['amount'] < df['amount'].quantile(0.99)]
# DANGER: You just removed 85% of actual credit card fraud cases!`},{id:29,question:"How does a Quantile Transformer handle bimodal and multimodal feature distributions compared to standard Gaussian scalers?",shortAnswer:"It maps the empirical cumulative distribution function (CDF) non-linearly to a uniform or standard normal distribution, smoothing out multi-peaked distributions and reducing outlier leverage.",explanation:"Standardization subtracts mean and divides by standard deviation, which merely shifts and scales without altering distribution shape. If a feature has two distinct modes (e.g. morning and evening rush hours), QuantileTransformer uses rank percentiles to stretch dense regions and compress sparse tails into an exact Gaussian curve.",hint:"Standardization preserves the exact shape of the histogram; what transformer can reshape it into a normal bell curve?",level:"Expert",codeExample:`from sklearn.preprocessing import QuantileTransformer
import numpy as np
# Bimodal distribution
x_bimodal = np.concatenate([np.random.normal(5, 1, 500), np.random.normal(25, 2, 500)]).reshape(-1, 1)
qt = QuantileTransformer(output_distribution='normal', random_state=42)
x_gaussian = qt.fit_transform(x_bimodal)
print('Transformed shape is Gaussian:', np.round(np.mean(x_gaussian), 2), np.round(np.std(x_gaussian), 2))`},{id:30,question:"Why is standard zero-centering (StandardScaler with with_mean=True) avoided when preprocessing large sparse matrices (scipy.sparse CSR)?",shortAnswer:"Subtracting the mean from all entries turns every implicit zero into a non-zero floating-point number (-mu), destroying matrix sparsity and causing immediate out-of-memory (OOM) crashes.",explanation:"In natural language processing or bag-of-words text matrices, 99% of entries are zeros stored efficiently in compressed sparse row (CSR) format. Subtracting mean mu converts billions of zeroes into explicit floating-point numbers, inflating memory footprint from megabytes to hundreds of gigabytes.",hint:"If you have a 1,000,000 x 100,000 matrix with 99.9% zeros, what happens if zero becomes -0.05?",level:"Expert",codeExample:`from sklearn.preprocessing import StandardScaler
from scipy.sparse import csr_matrix

X_sparse = csr_matrix([[0, 1, 0], [0, 0, 2], [1, 0, 0]])
# with_mean=False preserves sparsity without dense expansion
scaler = StandardScaler(with_mean=False)
X_scaled_sparse = scaler.fit_transform(X_sparse)
print('Remains sparse CSR:', type(X_scaled_sparse))`}],V=[{id:"WB-BDN-101",region:"Bidhannagar",load_kw:5,kwh:320.5,meter:"Smart_IoT",status:"Paid",isDuplicate:!1,isOutlier:!1,isMissing:!1},{id:"WB-RJH-102",region:"Rajarhat",load_kw:3,kwh:null,meter:"Smart_IoT",status:"Overdue",isDuplicate:!1,isOutlier:!1,isMissing:!0},{id:"WB-BKP-103",region:"barrackpore",load_kw:4.5,kwh:9999,meter:"Electromechanical",status:"Paid",isDuplicate:!1,isOutlier:!0,isMissing:!1},{id:"WB-BDN-101",region:"Bidhannagar",load_kw:5,kwh:320.5,meter:"Smart_IoT",status:"Paid",isDuplicate:!0,isOutlier:!1,isMissing:!1},{id:"WB-HOW-104",region:"Howrah",load_kw:6,kwh:410,meter:"Electronic",status:"Overdue",isDuplicate:!1,isOutlier:!1,isMissing:!1},{id:"WB-KOL-105",region:"Kolkata",load_kw:2.5,kwh:185,meter:null,status:"Paid",isDuplicate:!1,isOutlier:!1,isMissing:!0},{id:"WB-RJH-106",region:"Rajarhat",load_kw:7.5,kwh:550,meter:"Smart_IoT",status:"Pending",isDuplicate:!1,isOutlier:!1,isMissing:!1},{id:"WB-BKP-107",region:"Barrackpore",load_kw:1.5,kwh:95,meter:"Electromechanical",status:"Overdue",isDuplicate:!1,isOutlier:!1,isMissing:!1}],A=[{term:"GIGO (Garbage In, Garbage Out)",tag:"Fundamental Law",desc:"If training data contains errors, noise, or biases, the ML model's calibrated parameters will inherently output flawed predictions."},{term:"Data Leakage",tag:"Architectural Bug",desc:"When information from the validation or test set unintentionally influences the training transformation parameters, creating false optimism."},{term:"Imputation",tag:"Cleaning",desc:"The mathematical replacement of missing values using statistically estimated quantities (mean, median, mode, or MICE models)."},{term:"Min-Max Normalization",tag:"Scaling",desc:"Rescaling numerical attributes linearly into a bounded interval [0, 1] via (x - min) / (max - min)."},{term:"Z-Score Standardization",tag:"Scaling",desc:"Transforming features to have zero mean and unit variance via (x - mu) / sigma, preserving outlier distances."},{term:"Robust Scaler (IQR)",tag:"Outlier Scaling",desc:"Rescaling features using median and Interquartile Range (Q3 - Q1), making it impervious to extreme outliers."},{term:"One-Hot Encoding",tag:"Encoding",desc:"Representing nominal categories as orthogonal binary indicators (0 or 1), preventing false ordinal math assumptions."},{term:"Ordinal Encoding",tag:"Encoding",desc:"Mapping ordered categories into rank-preserving integers (e.g., Low=0, Medium=1, High=2)."},{term:"Outlier Fencing (Tukey)",tag:"Sanitization",desc:"Detecting anomalous observations outside the bounds [Q1 - 1.5*IQR, Q3 + 1.5*IQR]."},{term:"Condition Number κ(H)",tag:"Optimization",desc:"The ratio of maximum to minimum eigenvalues of the loss Hessian; high κ from unscaled features stalls gradient descent."},{term:"Training-Serving Skew",tag:"Production",desc:"The discrepancy in feature computation between offline training pipelines and online real-time inference APIs."},{term:"Scikit-Learn Pipeline",tag:"Architecture",desc:"An architectural construct that chains transformers and models, enforcing fit-on-train and transform-on-test."}],w={knn:{name:"k-Nearest Neighbors (k-NN)",family:"Instance-Based Distance Metric",scalingReq:"CRITICAL (Mandatory)",missingTol:"Zero Tolerance (Crashes)",outlierSens:"Extreme (Distorts Neighbors)",score:95,summary:"Computes Euclidean distances in R^d. An unscaled feature with scale 10,000 completely drowns out a feature of scale 1.0, rendering other features mathematically invisible.",formula:"d(\\mathbf{p}, \\mathbf{q}) = \\sqrt{\\sum_{i=1}^d (p_i - q_i)^2}"},svm:{name:"Support Vector Machines (SVM)",family:"Maximum Margin Classifier",scalingReq:"CRITICAL (Mandatory)",missingTol:"Zero Tolerance (Crashes)",outlierSens:"High (Affects Support Vectors)",score:90,summary:"Maximizes the geometric margin 2 / ||w||. In RBF kernels, gamma * ||x - z||^2 is dominated by the largest feature, destroying non-linear boundary projection.",formula:"K(\\mathbf{x}, \\mathbf{z}) = \\exp(-\\gamma \\|\\mathbf{x} - \\mathbf{z}\\|^2)"},linear:{name:"Linear / Logistic Regression",family:"Parametric Generalized Linear",scalingReq:"Strongly Recommended (Mandatory with L1/L2)",missingTol:"Zero Tolerance (NaNs break dot products)",outlierSens:"High (High Leverage Points)",score:80,summary:"Without scaling, gradient descent oscillates along steep canyon walls. With L1/L2 regularization, the penalty lambda * sum(w^2) unfairly suppresses weights of smaller-scale features.",formula:"\\min_{\\mathbf{w}} \\frac{1}{N}\\sum L(h(\\mathbf{x}_i), y_i) + \\lambda \\|\\mathbf{w}\\|^2"},neural:{name:"Deep Neural Networks (MLP)",family:"Differentiable Computation Graph",scalingReq:"CRITICAL (Mandatory for Stability)",missingTol:"Zero Tolerance (NaN propagation)",outlierSens:"High (Gradient Explosions)",score:92,summary:"Unscaled inputs cause saturation in activation functions (Sigmoid/Tanh) or exploding gradients in ReLU, stalling backpropagation across deep layers.",formula:"\\mathbf{z}^{[l]} = \\mathbf{W}^{[l]}\\mathbf{a}^{[l-1]} + \\mathbf{b}^{[l]}"},tree:{name:"Decision Trees & Random Forests",family:"Axis-Aligned Recursive Partitioning",scalingReq:"NOT REQUIRED (Scale Invariant)",missingTol:"High (Native Split Surrogate in XGBoost)",outlierSens:"Low (Monotonic Split Invariant)",score:15,summary:"Trees evaluate split thresholds based on sorted rank order (x_i <= threshold). Multiplying a feature by 10,000 does not alter the sorted ordering or Information Gain.",formula:"\\Delta I = I(D) - \\frac{|D_L|}{|D|}I(D_L) - \\frac{|D_R|}{|D|}I(D_R)"}},N=[{id:1,scenario:"An ML engineer at Salt Lake Sector V scales their training dataset using StandardScaler, fits a model, and achieves 96% accuracy. In production, however, live accuracy drops to 71%. What preprocessing defect likely caused this?",options:[{id:"A",text:"They used MinMax scaling instead of Robust scaling."},{id:"B",text:"They called scaler.fit_transform(X) on the whole dataset before splitting into train/test, causing severe Data Leakage."},{id:"C",text:"They omitted one-hot encoding on numerical features."},{id:"D",text:"They used Median imputation instead of Mean imputation."}],correct:"B",explanation:"Fitting a scaler or transformer on the entire dataset leaks distribution parameters (mean and standard deviation) from the test set into the training phase. The model overfits to the leaked test distribution, giving deceptively high cross-validation scores that collapse in production.",mentorTip:"Sukanta Hui says: Always wrap your preprocessors in a Scikit-Learn Pipeline! The pipeline strictly calls .fit() during training and .transform() during evaluation."},{id:2,scenario:"You are analyzing smart meter telemetry for WBSEDCL in Bidhannagar. 98% of power consumption values range between 100 kWh and 600 kWh, but lightning strikes produced several readings of 9999.0 kWh. Which imputation and scaling strategy is optimal?",options:[{id:"A",text:"Mean imputation + Min-Max Normalization"},{id:"B",text:"Median imputation + RobustScaler (or IQR clipping + StandardScaler)"},{id:"C",text:"Drop all rows with values above 500 kWh + Ordinal Encoding"},{id:"D",text:"Mode imputation + Log-odds scaling"}],correct:"B",explanation:"Extreme electrical spikes (9999 kWh) heavily distort the arithmetic mean and compress Min-Max scaling into a tiny near-zero band. The median is non-parametric and resistant to outliers, and RobustScaler uses the Interquartile Range (IQR) so normal consumption values retain healthy variance.",mentorTip:"Remember: Mean and MinMax are fragile. Median and RobustScaler are bulletproof when dealing with real-world sensor spikes."},{id:3,scenario:"Why does the k-Nearest Neighbors (k-NN) algorithm require feature scaling, while Decision Trees run perfectly on raw unscaled features?",options:[{id:"A",text:"k-NN is an iterative gradient descent algorithm, whereas Decision Trees use linear algebra."},{id:"B",text:"k-NN computes geometric distances (Euclidean norm) where large-magnitude features dominate; Decision Trees perform rank-order orthogonal threshold splits invariant to scale."},{id:"C",text:"Decision Trees automatically convert all features into categorical probabilities before splitting."},{id:"D",text:"k-NN cannot handle continuous floating-point numbers without normalization."}],correct:"B",explanation:"In Euclidean distance d(p, q) = sqrt(sum(p_i - q_i)^2), a difference of Rs 5,000 in salary produces a term of 25,000,000, rendering a 5-year age difference negligible. Decision trees only evaluate whether x_i <= threshold; monotonic scaling preserves identical sample sorting.",mentorTip:"Keep this rule locked in memory: Distance-based models (k-NN, SVM, k-Means) and Gradient-based models REQUIRE scaling. Tree-based models DO NOT."},{id:4,scenario:"A data scientist at Kolkata Metro Rail Corporation wants to encode the 'hour_of_departure' (integers 0 to 23). What happens if they use standard integer encoding?",options:[{id:"A",text:"The model runs faster with no mathematical consequences."},{id:"B",text:"The model incorrectly assumes 23:00 and 00:00 are separated by a massive distance of 23 hours rather than 1 hour."},{id:"C",text:"The dataset memory footprint expands by 24x."},{id:"D",text:"It causes immediate gradient divergence in linear regression."}],correct:"B",explanation:"Temporal features are cyclical. Hour 23 (11 PM) and Hour 0 (midnight) are contiguous in physical reality (1 hour apart), but integer encoding creates a giant numerical cliff (23 vs 0). Cyclical sine/cosine transformation projects hours onto the unit circle to preserve continuity.",mentorTip:"Always transform circular features (hours 0-23, days of week 0-6, wind direction 0-360 deg) into sin and cos pairs!"},{id:5,scenario:"In an e-commerce platform in Barrackpore, a feature 'delivery_pin_code' contains 4,500 distinct postal codes. What risk arises from blindly applying One-Hot Encoding?",options:[{id:"A",text:"Zero division errors during matrix multiplication."},{id:"B",text:"Cardinality explosion causing severe sparsity, memory bloat, and tree overfitting (Curse of Dimensionality)."},{id:"C",text:"It converts numerical features into text strings."},{id:"D",text:"It forces the loss function to become non-convex."}],correct:"B",explanation:"One-Hot Encoding a feature with 4,500 unique categories creates 4,500 new sparse binary columns. This triggers the curse of dimensionality, inflates memory by orders of magnitude, and causes tree models to construct deep, fragile branches. Target encoding or frequency encoding is required.",mentorTip:"If cardinality > 15-20, avoid One-Hot Encoding! Use Frequency Encoding, Target Encoding with smoothing, or Entity Embeddings."}],se=()=>{const[E,I]=r.useState("noviceMasterclass"),[b,M]=r.useState("metaphor"),[u,k]=r.useState(""),[y,C]=r.useState("pipelineFlow"),[s,R]=r.useState(0),[h,D]=r.useState(30),[p,S]=r.useState("leaky"),[j,P]=r.useState("knn"),[v,L]=r.useState({}),[_,O]=r.useState(!1),q=r.useMemo(()=>{if(!u.trim())return A;const n=u.toLowerCase();return A.filter(t=>t.term.toLowerCase().includes(n)||t.desc.toLowerCase().includes(n)||t.tag.toLowerCase().includes(n))},[u]),T=r.useMemo(()=>{let n=V.map(t=>({...t}));if(s>=1){const t=new Set;n=n.filter(a=>t.has(a.id)?!1:(t.add(a.id),!0)),n=n.map(a=>({...a,region:a.region.charAt(0).toUpperCase()+a.region.slice(1).toLowerCase()}))}if(s>=2&&(n=n.map(t=>({...t,kwh:t.kwh===null?365:t.kwh,meter:t.meter===null?"Smart_IoT":t.meter,isMissing:!1}))),s>=3&&(n=n.map(t=>({...t,kwh:t.kwh>800?550:t.kwh,isOutlier:!1}))),s>=4){const t=n.map(m=>m.kwh),a=Math.min(...t),d=Math.max(...t)-a||1,o=n.map(m=>m.load_kw),c=Math.min(...o),F=Math.max(...o)-c||1;n=n.map(m=>({...m,kwh_scaled:Number(((m.kwh-a)/d).toFixed(3)),load_scaled:Number(((m.load_kw-c)/F).toFixed(3)),isOneHot:!0}))}return n},[s]),g=r.useMemo(()=>{switch(s){case 0:return{score:38,label:"Raw & Corrupted",color:"text-red-400",bg:"bg-red-500"};case 1:return{score:60,label:"Deduplicated & Cleaned",color:"text-amber-400",bg:"bg-amber-500"};case 2:return{score:78,label:"Nulls Imputed",color:"text-yellow-300",bg:"bg-yellow-500"};case 3:return{score:90,label:"Outliers Fenced",color:"text-cyan-400",bg:"bg-cyan-500"};case 4:return{score:100,label:"Scaled & Production Ready",color:"text-emerald-400",bg:"bg-emerald-500"};default:return{score:38,label:"Raw",color:"text-red-400",bg:"bg-red-500"}}},[s]),l=r.useMemo(()=>{const a=h/100,d=320*(1-a)+580*a,o=(94.5+a*4).toFixed(1),c=(94.5-a*14).toFixed(1),f=(o-c).toFixed(1);return{trainTrueMean:320,testTrueMean:580,leakedGlobalMean:d.toFixed(1),optimisticTestAcc:o,realisticProdAcc:c,leakageDelta:f}},[h]),B=(n,t)=>{L(a=>({...a,[n]:t}))},z=r.useMemo(()=>{let n=0;return N.forEach(t=>{v[t.id]===t.correct&&n++}),n},[v]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-3 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 6"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Academic Masterclass"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full",children:"Production Gateway"})]}),e.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:"Data Preprocessing Concept & Pipeline Architecture"}),e.jsx("p",{className:"text-slate-300 text-base sm:text-lg max-w-4xl",children:"Master the foundational engineering discipline that transforms noisy, unscaled, and missing enterprise records into mathematically optimal feature tensors. Discover the GIGO imperative, the 6-pillar preprocessing lifecycle, strict anti-leakage hygiene, and loss landscape optimization."}),e.jsxs("div",{className:"flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),"West Bengal Telemetry Datasets"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"Interactive 5-Stage Pipeline Simulator"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Anti-Leakage Sandbox"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),"Curriculum Aligned (MAKAUT)"]})]})]})]}),e.jsx("nav",{className:"sticky top-2 z-40 bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl flex items-center gap-1 overflow-x-auto text-xs sm:text-sm font-medium",children:[{id:"noviceMasterclass",label:"1. Novice Class"},{id:"interactiveStudio",label:"2. Pipeline Studio"},{id:"theory",label:"3. Theory & Math"},{id:"caseStudies",label:"4. Case Studies"},{id:"diagnosticQuiz",label:"5. Diagnostic Quiz"},{id:"bestPractices",label:"6. Best Practices"},{id:"labSection",label:"7. Python Lab"},{id:"faqSection",label:"8. FAQ & Notes"}].map(n=>e.jsx("button",{onClick:()=>{I(n.id),document.getElementById(n.id)?.scrollIntoView({behavior:"smooth"})},className:i("px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all duration-200",E===n.id?"bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:n.label},n.id))}),e.jsxs("section",{id:"noviceMasterclass",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold border border-indigo-500/30",children:"01"}),"The Novice Masterclass"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Build rock-solid intuition before touching mathematical equations or code."})]}),e.jsx("div",{className:"flex bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-semibold",children:[{id:"metaphor",label:"Real-World Metaphors"},{id:"lifecycle",label:"5-Stage Lifecycle"},{id:"jargon",label:"Jargon Buster"}].map(n=>e.jsx("button",{onClick:()=>M(n.id),className:i("px-3 py-1.5 rounded-lg transition-all",b===n.id?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-white"),children:n.label},n.id))})]}),b==="metaphor"&&e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center text-2xl font-bold",children:"⛏️"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Gold Ore Refining"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Raw data is like crude, unrefined gold ore extracted from the earth: full of dirt, rubble, and toxic impurities. Just as jewelers cannot mold unrefined rocks into ornaments, machine learning models cannot fit mathematical weights to noisy, uncalibrated raw datasets without refining."}),e.jsx("div",{className:"pt-2 text-xs text-amber-300/80 font-mono",children:"Formula: Crude Ore (Raw) → Smelting (Cleaning) → 24K Bullion (Engineered Matrix)"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-2xl font-bold",children:"💧"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Palta Water Filtration Plant"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Raw Hooghly River water entering the Palta Waterworks near Barrackpore flows through sedimentation tanks (deduplication), chemical flocculation (imputation), sand filtration (outlier removal), and chlorination (normalization) before being safe for municipal drinking across Kolkata."}),e.jsx("div",{className:"pt-2 text-xs text-cyan-300/80 font-mono",children:"Formula: River Inflow → Coagulation → Sand Filter → Pure Potable Water"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-2xl font-bold",children:"👨‍🍳"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:`Chef's "Mise en Place"`}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"A master chef at a fine dining restaurant in Park Street never cooks with unwashed, uncut vegetables. Everything is peeled, weighed, partitioned, and prepped in advance (mise en place). In ML, preprocessing ensures that training algorithms focus 100% on optimization rather than tripping over bad ingredients."}),e.jsx("div",{className:"pt-2 text-xs text-emerald-300/80 font-mono",children:"Formula: Raw Vegetables → Washed, Diced, Measured → Michelin Star Dish"})]})]}),b==="lifecycle"&&e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-3",children:[{stage:"Stage 1",name:"Data Quality Audit",icon:"🔍",action:"Profile nulls, cardinality, schema drift & duplicate ratios."},{stage:"Stage 2",name:"Data Cleaning",icon:"🧹",action:"Deduplicate rows, impute missing values, cap outliers via IQR."},{stage:"Stage 3",name:"Transformation",icon:"⚡",action:"Log transforms on skewed tails, Box-Cox, cyclical sin/cos."},{stage:"Stage 4",name:"Feature Scaling",icon:"📐",action:"Min-Max normalization [0, 1] or Z-score standardization N(0, 1)."},{stage:"Stage 5",name:"Encoding & Packing",icon:"🗂️",action:"One-Hot encode nominal categories, assemble numeric matrix X."}].map((n,t)=>e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:n.stage}),e.jsx("span",{className:"text-lg",children:n.icon})]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:n.name}),e.jsx("p",{className:"text-xs text-slate-300",children:n.action})]},t))}),e.jsxs("div",{className:"bg-slate-900/60 p-5 rounded-2xl border border-slate-800 text-xs sm:text-sm text-slate-300 space-y-2",children:[e.jsxs("h4",{className:"font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," The Golden Law of Preprocessing Order"]}),e.jsxs("p",{children:["Never scale before cleaning! If you attempt Min-Max scaling on a column containing an outlier of ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"9999.0"}),", the denominator ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"(max - min)"})," expands massively, compressing legitimate data into an unrecoverable sliver near 0.0. Always follow the sequence: ",e.jsx("strong",{className:"text-white",children:"Audit → Clean & Impute → Clip Outliers → Scale → Encode"}),"."]})]})]}),b==="jargon"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"text",placeholder:"Search vocabulary terms (e.g. leakage, imputation, GIGO, z-score)...",value:u,onChange:n=>k(n.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),u&&e.jsx("button",{onClick:()=>k(""),className:"px-3 py-2 text-xs bg-slate-800 text-slate-400 hover:text-white rounded-lg",children:"Clear"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:q.map((n,t)=>e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-bold text-indigo-400",children:n.tag})}),e.jsx("h4",{className:"text-sm font-bold text-white",children:n.term}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:n.desc})]},t))})]})]}),e.jsxs("section",{id:"interactiveStudio",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30",children:"02"}),"Interactive Pipeline & Transformation Studio"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Step through live data transformation, visualize data leakage risks, and compare algorithm sensitivities."})]}),e.jsx("div",{className:"flex bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-semibold",children:[{id:"pipelineFlow",label:"Live Pipeline Flow"},{id:"leakage",label:"Anti-Leakage Sandbox"},{id:"sensitivity",label:"Algorithm Sensitivity"}].map(n=>e.jsx("button",{onClick:()=>C(n.id),className:i("px-3 py-1.5 rounded-lg transition-all",y===n.id?"bg-cyan-600 text-white shadow-sm":"text-slate-400 hover:text-white"),children:n.label},n.id))})]}),y==="pipelineFlow"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Select Pipeline Processing Stage:"}),e.jsxs("span",{className:i("text-xs font-bold px-2.5 py-1 rounded-full",g.color,"bg-slate-800"),children:["Dataset Health: ",g.score,"% (",g.label,")"]})]}),e.jsx("div",{className:"w-full h-2 bg-slate-800 rounded-full overflow-hidden",children:e.jsx("div",{className:i("h-full transition-all duration-500",g.bg),style:{width:`${g.score}%`}})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 pt-2",children:[{step:0,title:"0. Raw Ingest",subtitle:"Corrupted records"},{step:1,title:"1. Deduplicate",subtitle:"Remove duplicates & fix casing"},{step:2,title:"2. Imputation",subtitle:"Fill nulls (Median & Mode)"},{step:3,title:"3. Outlier Fencing",subtitle:"Cap 9999.0 kWh via IQR"},{step:4,title:"4. Scale & Vectorize",subtitle:"MinMax [0, 1] normalization"}].map(n=>e.jsxs("button",{onClick:()=>R(n.step),className:i("p-2.5 rounded-xl text-left border transition-all",s===n.step?"bg-cyan-950/80 border-cyan-500/60 shadow-lg shadow-cyan-950/50":"bg-slate-800/60 border-slate-700/60 hover:bg-slate-800"),children:[e.jsx("div",{className:"text-xs font-bold text-white",children:n.title}),e.jsx("div",{className:"text-[10px] text-slate-400 truncate",children:n.subtitle})]},n.step))})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{children:["Active Table: ",T.length," Consumer Telemetry Records"]}),e.jsxs("span",{className:"font-mono text-cyan-300",children:[s===0&&"Showing raw anomalies: duplicate BDN-101, missing RJH-102 & KOL-105, spike BKP-103",s===1&&"Duplicate BDN-101 evicted. Region casings normalized.",s===2&&"Missing values imputed: kWh → 365.0 (median), meter → Smart_IoT (mode)",s===3&&"Outlier 9999.0 kWh capped to 550.0 kWh (upper IQR boundary)",s===4&&"All features scaled to [0.0, 1.0] interval. Ready for model ingestion."]})]}),e.jsx("div",{className:"overflow-x-auto border border-slate-800 rounded-xl bg-slate-950/60",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[e.jsx("thead",{className:"bg-slate-900 border-b border-slate-800 text-slate-400",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Consumer ID"}),e.jsx("th",{className:"p-2.5",children:"Region"}),e.jsx("th",{className:"p-2.5",children:"Sanctioned Load (kW)"}),e.jsx("th",{className:"p-2.5",children:"Monthly Cons (kWh)"}),e.jsx("th",{className:"p-2.5",children:"Meter Hardware"}),e.jsx("th",{className:"p-2.5",children:"Bill Status"}),s>=4&&e.jsx("th",{className:"p-2.5 text-cyan-400",children:"kwh_scaled [0-1]"}),s>=4&&e.jsx("th",{className:"p-2.5 text-cyan-400",children:"load_scaled [0-1]"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:T.map((n,t)=>e.jsxs("tr",{className:i("transition-colors",n.isDuplicate&&"bg-red-950/30 text-red-300",n.isOutlier&&"bg-amber-950/30 text-amber-300",n.isMissing&&"bg-purple-950/30 text-purple-300"),children:[e.jsxs("td",{className:"p-2.5 font-bold text-white flex items-center gap-1.5",children:[n.id,n.isDuplicate&&e.jsx("span",{className:"text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded text-red-300",children:"DUPE"})]}),e.jsx("td",{className:"p-2.5",children:n.region}),e.jsxs("td",{className:"p-2.5",children:[n.load_kw," kW"]}),e.jsx("td",{className:"p-2.5",children:n.kwh===null?e.jsx("span",{className:"text-purple-400 font-bold",children:"NULL (Missing)"}):e.jsxs("span",{className:i(n.isOutlier&&"text-amber-400 font-bold"),children:[n.kwh," kWh ",n.isOutlier&&"⚡ SPIKE"]})}),e.jsx("td",{className:"p-2.5",children:n.meter===null?e.jsx("span",{className:"text-purple-400 font-bold",children:"NULL (Missing)"}):n.meter}),e.jsx("td",{className:"p-2.5",children:e.jsx("span",{className:i("px-2 py-0.5 rounded-full text-[10px] font-semibold",n.status==="Paid"&&"bg-emerald-500/20 text-emerald-300",n.status==="Pending"&&"bg-yellow-500/20 text-yellow-300",n.status==="Overdue"&&"bg-rose-500/20 text-rose-300"),children:n.status})}),s>=4&&e.jsx("td",{className:"p-2.5 font-bold text-cyan-300 bg-cyan-950/20",children:n.kwh_scaled}),s>=4&&e.jsx("td",{className:"p-2.5 font-bold text-cyan-300 bg-cyan-950/20",children:n.load_scaled})]},t))})]})})]})]}),y==="leakage"&&e.jsx("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," Simulating Data Leakage Dynamics"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Data Leakage happens when global statistics (like dataset mean or standard deviation) are computed across both Train and Test splits simultaneously. In this simulation, notice how the training scaler becomes contaminated as the test partition size changes."}),e.jsxs("div",{className:"space-y-2 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold",children:[e.jsx("span",{className:"text-slate-400",children:"Test Split Proportion:"}),e.jsxs("span",{className:"text-cyan-300 font-mono",children:[h,"% Test / ",100-h,"% Train"]})]}),e.jsx("input",{type:"range",min:"10",max:"50",step:"5",value:h,onChange:n=>D(Number(n.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500",children:[e.jsx("span",{children:"10% (Small Test)"}),e.jsx("span",{children:"30% (Standard)"}),e.jsx("span",{children:"50% (Equal Split)"})]})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>S("leaky"),className:i("flex-1 p-3 rounded-xl border text-xs font-bold transition-all",p==="leaky"?"bg-rose-950/60 border-rose-500 text-rose-300 shadow-md shadow-rose-950/40":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"),children:"❌ Leaky Architecture (fit_transform on whole X)"}),e.jsx("button",{onClick:()=>S("strict"),className:i("flex-1 p-3 rounded-xl border text-xs font-bold transition-all",p==="strict"?"bg-emerald-950/60 border-emerald-500 text-emerald-300 shadow-md shadow-emerald-950/40":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"),children:"✅ Anti-Leakage (fit strictly on X_train)"})]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4 font-mono",children:[e.jsx("div",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-800 pb-2",children:"Distribution & Accuracy Metrics"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 text-xs",children:[e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"True Train Mean (μ_train)"}),e.jsxs("div",{className:"text-base font-bold text-white mt-1",children:[l.trainTrueMean," kWh"]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"True Test Mean (μ_test)"}),e.jsxs("div",{className:"text-base font-bold text-white mt-1",children:[l.testTrueMean," kWh"]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Scaler Ingested Mean"}),e.jsx("div",{className:i("text-base font-bold mt-1",p==="leaky"?"text-rose-400":"text-emerald-400"),children:p==="leaky"?`${l.leakedGlobalMean} kWh (Leaked!)`:`${l.trainTrueMean} kWh (Clean)`})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Deceptive Evaluation Bias"}),e.jsx("div",{className:"text-base font-bold text-amber-400 mt-1",children:p==="leaky"?`+${l.leakageDelta}% Fake Boost`:"0.0% (Unbiased)"})]})]}),e.jsx("div",{className:"p-3 rounded-lg text-xs leading-relaxed border bg-slate-900/90 border-slate-800",children:p==="leaky"?e.jsxs("div",{className:"text-rose-300",children:[e.jsx("strong",{children:"CRITICAL FAILURE:"})," The training scaler absorbed summer peak consumption data from the test set. Test evaluation accuracy is deceptively inflated to ",e.jsxs("strong",{children:[l.optimisticTestAcc,"%"]}),", but real-world production accuracy will collapse to ",e.jsxs("strong",{children:[l.realisticProdAcc,"%"]}),"!"]}):e.jsxs("div",{className:"text-emerald-300",children:[e.jsx("strong",{children:"PRODUCTION SAFE:"})," Preprocessing parameters were frozen strictly on X_train. Test set evaluation accuracy is a realistic, honest ",e.jsxs("strong",{children:[l.realisticProdAcc,"%"]})," with zero distribution contamination."]})})]})]})}),y==="sensitivity"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:Object.keys(w).map(n=>{const t=w[n];return e.jsx("button",{onClick:()=>P(n),className:i("px-3.5 py-2 rounded-xl text-xs font-bold border transition-all",j===n?"bg-cyan-600 border-cyan-400 text-white shadow-md shadow-cyan-600/30":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"),children:t.name},n)})}),(()=>{const n=w[j];return e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 pt-2",children:[e.jsxs("div",{className:"md:col-span-2 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-xl font-bold text-white",children:n.name}),e.jsx("span",{className:"text-xs text-cyan-400 font-mono",children:n.family})]}),e.jsxs("div",{className:"text-right",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Preprocessing Sensitivity"}),e.jsxs("div",{className:"text-xl font-extrabold text-amber-400",children:[n.score," / 100"]})]})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:n.summary}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-xs text-slate-500 font-mono uppercase",children:"Core Mathematical Dependency:"}),e.jsx("div",{className:"text-sm font-mono text-cyan-300 overflow-x-auto py-1",children:n.formula})]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-3 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-400 font-bold uppercase tracking-wider border-b border-slate-800 pb-2",children:"Pipeline Requirements"}),e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Feature Scaling:"}),e.jsx("div",{className:"font-bold text-white",children:n.scalingReq})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Missing Values:"}),e.jsx("div",{className:"font-bold text-white",children:n.missingTol})]}),e.jsxs("div",{children:[e.jsx("div",{className:"text-slate-500",children:"Outlier Vulnerability:"}),e.jsx("div",{className:"font-bold text-white",children:n.outlierSens})]})]})]})})()]})]}),e.jsxs("section",{id:"theory",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold border border-purple-500/30",children:"03"}),"Mathematical Foundations & Convergence Dynamics"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Understand why data preprocessing is fundamentally an optimization requirement for loss convergence."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," 1. Normalization vs. Standardization Formulas"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-300",children:"Min-Max Normalization (Bounded [0, 1]):"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"x' = \\frac{x - x_{\\min}}{x_{\\max} - x_{\\min}}"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Maps all observations into a rigid [0, 1] hypercube. Highly vulnerable to maximum sensor outliers."})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-300",children:"Z-Score Standardization (Gaussian N(0, 1)):"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"z = \\frac{x - \\mu}{\\sigma}, \\quad \\mu = \\frac{1}{N}\\sum_{i=1}^N x_i, \\quad \\sigma = \\sqrt{\\frac{1}{N}\\sum_{i=1}^N (x_i - \\mu)^2}"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Preserves zero center and variance. Outliers retain proportional relative distance in units of standard deviations."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," 2. Loss Surface Curvature & Gradient Descent"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-amber-300",children:"Hessian Condition Number κ(H):"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"\\kappa = \\frac{\\lambda_{\\max}(H)}{\\lambda_{\\min}(H)}, \\quad H = \\nabla^2 J(\\mathbf{w}) = \\mathbf{X}^T \\mathbf{X}"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"If features have disparate scales (e.g. 1 vs 10,000), κ exceeds 10^6, turning loss contours into narrow, steep canyons."})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-purple-300",children:"Convergence Rate Inequality:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"\\| \\mathbf{w}^{(t)} - \\mathbf{w}^* \\| \\le \\left( \\frac{\\kappa - 1}{\\kappa + 1} \\right)^t \\| \\mathbf{w}^{(0)} - \\mathbf{w}^* \\|"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"When standardized, κ ≈ 1, enabling spherical contours and fast, direct gradient steps without zig-zag oscillations!"})]})]})]})]})]}),e.jsxs("section",{id:"caseStudies",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold border border-amber-500/30",children:"04"}),"Regional West Bengal Industrial Case Studies"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Real enterprise data pipelines deployed across Kolkata, Bidhannagar, Howrah, and Barrackpore."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400",children:"ENERGY & IOT TELEMETRY"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Bidhannagar / Rajarhat"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"WBSEDCL Smart Meter Grid Preprocessing"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," Over 150,000 smart meters stream voltage and power consumption every 15 minutes. Monsoon thunderstorms cause cellular packet loss (missing readings) and lightning spikes register erroneous readings of 9999.0 kWh."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Pipeline Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Forward-fill (LOCF) for temporal gaps < 2 hours"}),e.jsx("div",{className:"text-slate-400",children:"• Tukey IQR Fencing [Q1 - 1.5*IQR, Q3 + 1.5*IQR] to clip lightning spikes"}),e.jsx("div",{className:"text-slate-400",children:"• RobustScaler to standardize heavy-tailed industrial power consumption"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400",children:"URBAN TRANSIT & AFC"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Kolkata Metro Rail (KMRC)"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Metro Smart Card AFC Ingestion Pipeline"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," Automated Fair Collection gates record passenger tap-in and tap-out logs. Rapid passenger card bounces create duplicate logs within 200 milliseconds, and midnight train departures (23:45 to 00:15) create extreme numerical discontinuity in standard integer hours."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Pipeline Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Deduplication window with delta_t < 2.0 seconds"}),e.jsx("div",{className:"text-slate-400",children:"• Cyclical projection: sin(2π·hour / 24) and cos(2π·hour / 24)"}),e.jsx("div",{className:"text-slate-400",children:"• Target encoding for high-cardinality transit station pairs"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"PUBLIC HEALTH INFORMATICS"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"North 24 Parganas"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Swasthya Sathi Hospital Claims Standardization"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"}),' Claims from 200+ district and rural hospitals contained messy diagnosis strings: "Type 2 Diabetes", "T2D", "Diabetic Mellitus", and "type-II diabetes". Manual entry errors also left patient age blank or entered as sentinel value 999.']}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Pipeline Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Fuzzy Levenshtein string matching to canonical ICD-10 ontology"}),e.jsx("div",{className:"text-slate-400",children:"• Conditional median age imputation grouped by diagnostic category"}),e.jsx("div",{className:"text-slate-400",children:"• Frequency encoding for 200+ distinct hospital IDs"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400",children:"MANUFACTURING & INDUSTRY 4.0"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Barrackpore Industrial Belt"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Jute & Textile Mill Loom Vibration Telemetry"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," Century-old mechanical weaving looms fitted with IoT accelerometer sensors suffer from thermal sensor drift during high-humidity monsoon months, producing non-stationary baseline offsets."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Pipeline Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Moving average high-pass filtering to remove low-frequency thermal drift"}),e.jsx("div",{className:"text-slate-400",children:"• Per-machine baseline Z-score standardization rather than global scaling"}),e.jsx("div",{className:"text-slate-400",children:"• Fast Fourier Transform (FFT) spectrogram feature extraction"})]})]})]})]}),e.jsxs("section",{id:"diagnosticQuiz",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold border border-emerald-500/30",children:"05"}),"Diagnostic Self-Assessment Quiz"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Test your mastery of data cleaning, feature scaling, and anti-leakage architecture."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Score: ",e.jsx("strong",{className:"text-emerald-400",children:z})," / ",N.length]}),e.jsx("button",{onClick:()=>O(n=>!n),className:"px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/30",children:_?"Hide Explanations":"Show All Answers"})]})]}),e.jsx("div",{className:"space-y-6",children:N.map((n,t)=>{const a=v[n.id],x=a!==void 0,d=a===n.correct;return e.jsxs("div",{className:i("p-6 rounded-2xl border transition-all space-y-4",x?d?"bg-slate-900/90 border-emerald-500/50":"bg-slate-900/90 border-rose-500/50":"bg-slate-900/70 border-slate-800"),children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:["Scenario Question #",t+1]}),e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-white leading-relaxed",children:n.scenario})]}),x&&e.jsx("span",{className:i("px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap",d?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"),children:d?"✓ Correct":"✗ Incorrect"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:n.options.map(o=>{const c=a===o.id,f=o.id===n.correct;return e.jsxs("button",{onClick:()=>B(n.id,o.id),className:i("p-3.5 rounded-xl text-left text-xs sm:text-sm border transition-all flex items-start gap-3",c?f?"bg-emerald-950/80 border-emerald-500 text-emerald-200":"bg-rose-950/80 border-rose-500 text-rose-200":_&&f?"bg-emerald-950/40 border-emerald-500/60 text-emerald-300":"bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"),children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-700/80 flex items-center justify-center font-bold text-[10px] text-white shrink-0 mt-0.5",children:o.id}),e.jsx("span",{className:"leading-snug",children:o.text})]},o.id)})}),(x||_)&&e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2 mt-2",children:[e.jsxs("div",{children:[e.jsxs("strong",{className:"text-emerald-400",children:["Correct Answer (",n.correct,"): "]}),n.explanation]}),e.jsxs("div",{className:"text-indigo-300/90 italic font-mono pt-1",children:["💡 ",n.mentorTip]})]})]},n.id)})})]}),e.jsxs("section",{id:"bestPractices",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold border border-rose-500/30",children:"06"}),"Production Pitfalls & Engineering Best Practices"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Avoid the catastrophic silent bugs that break machine learning models in production."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Silent Null Sentinels"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Legacy systems write ",e.jsx("code",{className:"text-rose-300 font-mono",children:"-999"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"9999"})," for missing sensor values. Python does not consider these as ",e.jsx("code",{className:"text-rose-300 font-mono",children:"NaN"}),". Always audit domain min/max bounds and execute explicit replacements before scaling."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: High-Cardinality One-Hot"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Applying One-Hot Encoding to a ZIP code column with 5,000 values explodes matrix dimensions, creating severe sparsity and runaway tree depths. Use Target Encoding with Laplace smoothing or Entity Embeddings instead."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Inseparable Pipelines"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Writing ad-hoc preprocessing functions in Jupyter cells guarantees training-serving skew. Always package transformations inside a serializable Scikit-Learn Pipeline (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"joblib.dump(pipeline)"}),") for live inference."]})]})]})]}),e.jsxs("section",{id:"labSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30",children:"07"}),"Python Laboratory Implementation"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Executable pure Python implementation of the complete Data Quality Auditor, Cleaning Transformer, Min-Max Scaler, and Anti-Leakage Preprocessing Pipeline."})]}),e.jsx(W,{code:X,fileName:"data_preprocessing_concept_lab.py"})]}),e.jsxs("section",{id:"faqSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold border border-indigo-500/30",children:"08"}),"Frequently Asked Questions & Technical Deep-Dive"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"30 comprehensive questions and answers covering conceptual, mathematical, and production engineering aspects."})]}),e.jsx(H,{questions:K})]}),e.jsxs("section",{id:"notesSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold border border-purple-500/30",children:"09"}),"Downloadable Revision Notes & Exam Handbook"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Complete revision handbook aligned with MAKAUT semester syllabus BCAC701B."})]}),e.jsx(G,{content:U,fileName:"topic6_data_preprocessing_concept_handbook.txt"})]}),e.jsx(Q,{})]})};export{se as default};
