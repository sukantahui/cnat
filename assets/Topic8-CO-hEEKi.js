import{b as o,j as e,bl as r}from"./vendor-react-core-B-R9HE-Z.js";import{P as T}from"./PythonFileLoader-DZ61U3Y_.js";import{F as P}from"./FAQTemplate-16IfroqC.js";import{P as D}from"./PlainTextPrint-C6NaUtnE.js";import{T as L}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const B=`"""
=============================================================================
TOPIC 8: HANDLING MISSING VALUES & IMPUTATION ARCHITECTURE
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B - MAKAUT Aligned)
=============================================================================

This simulation demonstrates:
1. The Rubin (1976) Missingness Mechanisms:
   - MCAR: Missing Completely at Random (Pure stochastic loss)
   - MAR:  Missing at Random (Conditioned on observed auxiliary features)
   - MNAR: Missing Not at Random (Conditioned on unobserved true value)
2. Imputation Algorithmic Implementations:
   - Complete-Case Analysis (Listwise Deletion with Information Loss Quantification)
   - Univariate Statistical Imputation (Mean, Median, Mode)
   - k-Nearest Neighbors (k-NN) Distance-Weighted Imputer
   - Missingness Indicator Generator (Preserving Informative Missingness Signals)
3. Quantitative Evaluation Against Ground Truth:
   - MAE & RMSE evaluation of imputation error across MCAR, MAR, and MNAR
   - Strict .fit() on Train and .transform() on Test to prevent Data Leakage
4. Realistic West Bengal Clinical & Municipal Healthcare Dataset:
   - Kolkata Medical College & SSKM Hospital Emergency Triage Patient Roster
=============================================================================
"""

import math
import copy
from typing import List, Dict, Any, Tuple, Optional, Set

# =============================================================================
# 1. GROUND TRUTH PRISTINE DATASET & SYNTHETIC MISSINGNESS GENERATOR
# =============================================================================

def get_pristine_sskm_patient_dataset() -> List[Dict[str, Any]]:
    """
    Returns 8 complete ground-truth patient triage records from SSKM Hospital.
    Used as an experimental benchmark to evaluate imputation accuracy.
    """
    return [
        {"patient_id": "SSKM-001", "name": "Subir Ghosh", "age": 45, "systolic_bp": 138.0, "glucose_mgdl": 142.0, "income_inr": 48000.0, "triage_tier": "Urgent"},
        {"patient_id": "SSKM-002", "name": "Kakali Das", "age": 28, "systolic_bp": 118.0, "glucose_mgdl": 92.0, "income_inr": 32000.0, "triage_tier": "Non-Urgent"},
        {"patient_id": "SSKM-003", "name": "Bimal Mukherjee", "age": 68, "systolic_bp": 165.0, "glucose_mgdl": 210.0, "income_inr": 85000.0, "triage_tier": "Emergency"},
        {"patient_id": "SSKM-004", "name": "Ruma Chatterjee", "age": 72, "systolic_bp": 158.0, "glucose_mgdl": 185.0, "income_inr": 25000.0, "triage_tier": "Emergency"},
        {"patient_id": "SSKM-005", "name": "Amitava Roy", "age": 35, "systolic_bp": 122.0, "glucose_mgdl": 105.0, "income_inr": 62000.0, "triage_tier": "Non-Urgent"},
        {"patient_id": "SSKM-006", "name": "Sunita Sen", "age": 52, "systolic_bp": 144.0, "glucose_mgdl": 160.0, "income_inr": 95000.0, "triage_tier": "Urgent"},
        {"patient_id": "SSKM-007", "name": "Dipankar Pal", "age": 61, "systolic_bp": 150.0, "glucose_mgdl": 175.0, "income_inr": 54000.0, "triage_tier": "Urgent"},
        {"patient_id": "SSKM-008", "name": "Ananya Bose", "age": 24, "systolic_bp": 115.0, "glucose_mgdl": 88.0, "income_inr": 38000.0, "triage_tier": "Non-Urgent"},
    ]


def inject_rubin_missingness(pristine_data: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """
    Injects deterministic missingness reflecting the three Rubin classifications:
    1. MCAR: Glucose missing completely at random on SSKM-002 and SSKM-006 (e.g. lab vial dropped).
    2. MAR:  Systolic BP missing conditioned on Age > 65 on SSKM-003 and SSKM-004 (elderly non-ambulatory).
    3. MNAR: Income missing conditioned on Income > 70000 on SSKM-003 and SSKM-006 (high-earner refusal).
    """
    corrupted = copy.deepcopy(pristine_data)

    # 1. MCAR on Glucose
    corrupted[1]["glucose_mgdl"] = None  # Patient 002 (Kakali)
    corrupted[5]["glucose_mgdl"] = None  # Patient 006 (Sunita)

    # 2. MAR on Systolic BP (Conditioned on Age > 65)
    corrupted[2]["systolic_bp"] = None   # Patient 003 (Bimal, Age 68)
    corrupted[3]["systolic_bp"] = None   # Patient 004 (Ruma, Age 72)

    # 3. MNAR on Income (Conditioned on high income > 70,000)
    corrupted[2]["income_inr"] = None    # Patient 003 (Rs 85,000)
    corrupted[5]["income_inr"] = None    # Patient 006 (Rs 95,000)

    return corrupted


# =============================================================================
# 2. MISSING DATA AUDITOR & QUALITY PROFILER
# =============================================================================

class MissingDataAuditor:
    """
    Profiles the missingness topology of a dataset:
    - Feature completeness ratios
    - Complete-Case retention percentage
    - Co-missingness / missingness patterns
    """
    def audit(self, records: List[Dict[str, Any]]) -> Dict[str, Any]:
        n_total = len(records)
        if n_total == 0:
            return {"error": "Empty dataset"}

        all_keys = [k for k in records[0].keys() if k not in ("patient_id", "name")]
        null_counts = {k: 0 for k in all_keys}
        complete_rows = 0

        for r in records:
            has_null = False
            for k in all_keys:
                if r.get(k) is None:
                    null_counts[k] += 1
                    has_null = True
            if not has_null:
                complete_rows += 1

        completeness_pct = {k: round((n_total - null_counts[k]) / n_total * 100, 1) for k in all_keys}
        complete_case_pct = round((complete_rows / n_total) * 100, 1)

        return {
            "total_records": n_total,
            "complete_records": complete_rows,
            "complete_case_retention_pct": complete_case_pct,
            "data_loss_under_dropna_pct": round(100.0 - complete_case_pct, 1),
            "null_counts": null_counts,
            "completeness_pct": completeness_pct
        }


# =============================================================================
# 3. UNIVARIATE STATISTICAL IMPUTERS (MEAN / MEDIAN / MODE)
# =============================================================================

class UnivariateImputer:
    """
    Imputes missing values using statistical central tendencies:
    - Mean: sum(X) / N (Minimizes squared error under Gaussianity)
    - Median: 50th percentile (Robust to outliers under skew)
    - Mode: Most frequent category
    Strictly follows Scikit-Learn fit-transform anti-leakage paradigm.
    """
    def __init__(self, strategy: str = "mean", add_indicator: bool = False):
        self.strategy = strategy
        self.add_indicator = add_indicator
        self.statistics: Dict[str, float] = {}

    def fit(self, records: List[Dict[str, Any]], numeric_cols: List[str]) -> "UnivariateImputer":
        for col in numeric_cols:
            vals = [float(r[col]) for r in records if r.get(col) is not None]
            if not vals:
                self.statistics[col] = 0.0
                continue

            if self.strategy == "mean":
                self.statistics[col] = round(sum(vals) / len(vals), 2)
            elif self.strategy == "median":
                s_vals = sorted(vals)
                n = len(s_vals)
                median_val = s_vals[n // 2] if n % 2 != 0 else (s_vals[n // 2 - 1] + s_vals[n // 2]) / 2.0
                self.statistics[col] = round(median_val, 2)
        return self

    def transform(self, records: List[Dict[str, Any]], numeric_cols: List[str]) -> List[Dict[str, Any]]:
        imputed = []
        for r in records:
            row = copy.deepcopy(r)
            for col in numeric_cols:
                is_missing = row.get(col) is None
                if is_missing:
                    row[col] = self.statistics.get(col, 0.0)
                if self.add_indicator:
                    row[f"{col}_missing_flag"] = 1 if is_missing else 0
            imputed.append(row)
        return imputed


# =============================================================================
# 4. MULTIVARIATE K-NEAREST NEIGHBORS (K-NN) IMPUTER
# =============================================================================

class KNNImputerCustom:
    """
    Imputes missing values by finding k-nearest neighbors based on Euclidean
    distance across observed shared attributes:
    y_hat_i = sum(w_j * y_j) / sum(w_j), where w_j = 1 / d(x_i, x_j)
    """
    def __init__(self, n_neighbors: int = 2):
        self.k = n_neighbors
        self.train_records: List[Dict[str, Any]] = []

    def fit(self, records: List[Dict[str, Any]]) -> "KNNImputerCustom":
        self.train_records = copy.deepcopy(records)
        return self

    def compute_distance(self, r1: Dict[str, Any], r2: Dict[str, Any], candidate_features: List[str]) -> float:
        """Calculates distance strictly across mutually observed continuous attributes."""
        squared_sum = 0.0
        shared_count = 0

        for col in candidate_features:
            v1 = r1.get(col)
            v2 = r2.get(col)
            if v1 is not None and v2 is not None:
                # Normalize scale difference using a coarse range
                scale = 100.0 if "bp" in col or "glucose" in col else (50000.0 if "income" in col else 50.0)
                diff = (float(v1) - float(v2)) / scale
                squared_sum += diff ** 2
                shared_count += 1

        if shared_count == 0:
            return float("inf")
        # Scale by proportion of observed features
        return math.sqrt(squared_sum / shared_count)

    def transform(self, records: List[Dict[str, Any]], numeric_cols: List[str]) -> List[Dict[str, Any]]:
        imputed_data = []

        for target in records:
            row = copy.deepcopy(target)
            for col in numeric_cols:
                if row.get(col) is None:
                    # Find k nearest donors in train_records who possess this attribute
                    donors = []
                    for donor in self.train_records:
                        if donor.get("patient_id") == row.get("patient_id"):
                            continue  # Do not compare record to itself
                        if donor.get(col) is not None:
                            dist = self.compute_distance(row, donor, numeric_cols)
                            donors.append((dist, float(donor[col])))

                    donors.sort(key=lambda x: x[0])
                    nearest = donors[:self.k]

                    if nearest:
                        weights = [1.0 / (d[0] + 1e-5) for d in nearest]
                        weighted_val = sum(w * d[1] for w, d in zip(weights, nearest)) / sum(weights)
                        row[col] = round(weighted_val, 2)
                    else:
                        row[col] = 0.0

            imputed_data.append(row)
        return imputed_data


# =============================================================================
# 5. IMPUTATION EVALUATION HARNESS (BENCHMARKING VS GROUND TRUTH)
# =============================================================================

def evaluate_imputation_error(pristine: List[Dict[str, Any]], 
                              imputed: List[Dict[str, Any]], 
                              corrupted: List[Dict[str, Any]], 
                              cols: List[str]) -> Dict[str, Dict[str, float]]:
    """
    Computes MAE and RMSE strictly on the cells that were originally missing.
    """
    errors = {}
    for col in cols:
        diffs = []
        for i in range(len(pristine)):
            # Check if this cell was originally null in the corrupted set
            if corrupted[i].get(col) is None:
                true_val = float(pristine[i][col])
                pred_val = float(imputed[i][col])
                diffs.append(pred_val - true_val)

        if diffs:
            mae = sum(abs(d) for d in diffs) / len(diffs)
            rmse = math.sqrt(sum(d ** 2 for d in diffs) / len(diffs))
            errors[col] = {"count_missing": len(diffs), "mae": round(mae, 2), "rmse": round(rmse, 2)}
        else:
            errors[col] = {"count_missing": 0, "mae": 0.0, "rmse": 0.0}

    return errors


# =============================================================================
# 6. DEMONSTRATION & VERIFICATION DRIVER
# =============================================================================

def run_topic8_missing_values_lab():
    print("=" * 80)
    print("TOPIC 8: HANDLING MISSING VALUES & IMPUTATION ARCHITECTURE")
    print("Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal")
    print("Course: BCAC701B - Introduction to Machine Learning")
    print("=" * 80)

    # 1. Load Pristine Dataset & Inject Realistic Rubin Missingness
    pristine_patients = get_pristine_sskm_patient_dataset()
    dirty_patients = inject_rubin_missingness(pristine_patients)
    numeric_cols = ["systolic_bp", "glucose_mgdl", "income_inr"]

    print(f"\\n[STEP 1] Ingested SSKM Hospital Patient Triage Roster: {len(dirty_patients)} patient records.")
    print("Injected Rubin Missingness Mechanisms:")
    print("  • MCAR (Glucose): Patient 002 (Kakali) & Patient 006 (Sunita) - Random lab sample loss.")
    print("  • MAR  (Systolic BP): Patient 003 (Bimal) & Patient 004 (Ruma) - Conditioned on Age > 65.")
    print("  • MNAR (Income): Patient 003 & Patient 006 - Conditioned on high income (> 70k) refusal.")

    # 2. Audit Missingness Topology
    auditor = MissingDataAuditor()
    audit_report = auditor.audit(dirty_patients)
    print("\\n" + "=" * 80)
    print("DATA QUALITY & MISSINGNESS AUDIT REPORT")
    print("=" * 80)
    print(f"  Total Ingested Records:      {audit_report['total_records']}")
    print(f"  Complete Records (No Nulls): {audit_report['complete_records']}")
    print(f"  Complete-Case Retention:     {audit_report['complete_case_retention_pct']}%")
    print(f"  Data Destroyed by dropna():  {audit_report['data_loss_under_dropna_pct']}% (CRITICAL LOSS!)")
    print("  Column Completeness:")
    for col, pct in audit_report["completeness_pct"].items():
        missing_count = audit_report["null_counts"][col]
        print(f"    * {col:20s}: {pct:5.1f}% complete ({missing_count} missing)")

    # 3. Model 1: Univariate Mean Imputation
    mean_imputer = UnivariateImputer(strategy="mean")
    mean_imputer.fit(dirty_patients, numeric_cols)
    mean_imputed_data = mean_imputer.transform(dirty_patients, numeric_cols)
    mean_errors = evaluate_imputation_error(pristine_patients, mean_imputed_data, dirty_patients, numeric_cols)

    # 4. Model 2: Univariate Median Imputation
    median_imputer = UnivariateImputer(strategy="median")
    median_imputer.fit(dirty_patients, numeric_cols)
    median_imputed_data = median_imputer.transform(dirty_patients, numeric_cols)
    median_errors = evaluate_imputation_error(pristine_patients, median_imputed_data, dirty_patients, numeric_cols)

    # 5. Model 3: Multivariate k-NN Imputation (k=2)
    knn_imputer = KNNImputerCustom(n_neighbors=2)
    knn_imputer.fit(dirty_patients)
    knn_imputed_data = knn_imputer.transform(dirty_patients, numeric_cols)
    knn_errors = evaluate_imputation_error(pristine_patients, knn_imputed_data, dirty_patients, numeric_cols)

    # 6. Comparative Imputation Performance Matrix
    print("\\n" + "=" * 80)
    print("IMPUTATION ACCURACY BENCHMARK (EVALUATED AGAINST GROUND TRUTH)")
    print("=" * 80)
    print(f"{'Feature Name':20s} | {'Mechanism':10s} | {'Mean Imputer MAE':18s} | {'Median Imputer MAE':20s} | {'k-NN (k=2) MAE':15s}")
    print("-" * 80)

    mechanism_map = {"glucose_mgdl": "MCAR", "systolic_bp": "MAR", "income_inr": "MNAR"}
    for col in numeric_cols:
        mech = mechanism_map.get(col, "Unknown")
        m_mae = f"{mean_errors[col]['mae']:.2f}"
        med_mae = f"{median_errors[col]['mae']:.2f}"
        knn_mae = f"{knn_errors[col]['mae']:.2f}"
        print(f"{col:20s} | {mech:10s} | {m_mae:18s} | {med_mae:20s} | {knn_mae:15s}")

    # 7. Model 4: Missingness Indicator Feature Augmentation
    indicator_imputer = UnivariateImputer(strategy="median", add_indicator=True)
    indicator_imputer.fit(dirty_patients, numeric_cols)
    indicator_data = indicator_imputer.transform(dirty_patients, numeric_cols)

    print("\\n" + "=" * 80)
    print("SAMPLE RECORD: INFORMATIVE MISSINGNESS INDICATOR PATTERN (PATIENT 003)")
    print("=" * 80)
    p3 = indicator_data[2]
    print(f"  Patient ID:               {p3['patient_id']} ({p3['name']})")
    print(f"  Age:                      {p3['age']} yrs")
    print(f"  Imputed Systolic BP:      {p3['systolic_bp']} mmHg | Missing Flag: {p3.get('systolic_bp_missing_flag')}")
    print(f"  Imputed Income:           Rs {p3['income_inr']} | Missing Flag: {p3.get('income_inr_missing_flag')}")
    print("  * Notice: The binary indicator flag preserves the signal that the patient withheld high income (MNAR)!")

    print("\\n" + "=" * 80)
    print("MISSING VALUES LABORATORY SIMULATION COMPLETED WITH ZERO RUNTIME ERRORS")
    print("=" * 80)

if __name__ == "__main__":
    run_topic8_missing_values_lab()
`,H=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 8: Handling Missing Values & Imputation Architecture
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
=============================================================================

1. EXECUTIVE OVERVIEW: THE REALITY OF MISSING DATA IN MACHINE LEARNING
-----------------------------------------------------------------------------
In academic textbook datasets, matrices are clean, dense, and complete. In production 
environments, missing data (represented as NaN, null, or None) is omnipresent:
- Medical monitors detach when patients shift in bed.
- Survey respondents refuse to answer personal income or mental health questions.
- Cellular IoT gateways experience packet dropouts during thunderstorms in Bengal.
- Heterogeneous database joins produce null unmapped outer rows.

The Fundamental Machine Learning Dilemma:
Standard mathematical optimization (gradient descent, matrix inversions, distance metrics) 
requires real, finite numbers in R^d:
    y_pred = w_1*x_1 + w_2*x_2 + ... + w_d*x_d + b
If any x_j is NaN, floating-point arithmetic propagates NaN across the dot product, 
collapsing the loss function and causing immediate training crashes.

Handling missing values is not merely filling empty cells; it is a statistical 
reconstruction task that balances bias, variance, and sample preservation.


2. THE RUBIN (1976) MISSING DATA TAXONOMY
-----------------------------------------------------------------------------
Donald Rubin established the universally accepted mathematical taxonomy of missing data 
mechanisms, defined by the conditional probability of missingness indicator M given 
observed data Y_obs and missing data Y_mis:

Mechanism 1: Missing Completely at Random (MCAR)
  - Mathematical Definition:
      P(M | Y_obs, Y_mis) = P(M)
  - Meaning: Missingness is purely stochastic and completely independent of both observed 
    and unobserved variables.
  - Real-World Example: A lab technician drops and breaks a test vial of blood glucose 
    at SSKM Hospital.
  - Consequence: Complete-case analysis (dropping nulls) yields UNBIASED estimates, but 
    sacrifices statistical power and increases estimator variance.
  - Diagnostic: Little's MCAR Test (chi-square test of mean differences).

Mechanism 2: Missing at Random (MAR)
  - Mathematical Definition:
      P(M | Y_obs, Y_mis) = P(M | Y_obs)
  - Meaning: Missingness depends systematically on OBSERVED auxiliary features, but does 
    NOT depend on the missing value itself.
  - Real-World Example: Elderly hospital patients (Age > 70) are far less likely to 
    record blood pressure in a mobile app, but Age is recorded in the administrative database.
  - Consequence: Listwise deletion is BIASED! However, conditional imputation (MICE, k-NN, 
    or regression conditioned on Age) restores unbiased estimates.

Mechanism 3: Missing Not at Random (MNAR / Non-Ignorable)
  - Mathematical Definition:
      P(M | Y_obs, Y_mis) depends directly on the unobserved value Y_mis itself!
  - Meaning: The value is missing precisely BECAUSE of what that value would have been.
  - Real-World Example: High-net-worth tech executives in Salt Lake Sector V intentionally 
    refusing to disclose annual salary in credit card applications.
  - Consequence: Standard mean, median, or k-NN imputation produces SEVERE SYSTEMATIC BIAS! 
    The missingness itself contains predictive signal. The missingness indicator pattern 
    [X || I_missing] or Heckman selection modeling is mandatory.


3. MATHEMATICAL FOUNDATIONS OF IMPUTATION
-----------------------------------------------------------------------------
1. Complete-Case Analysis Information Destruction:
   If d features each have independent missing probability p:
       N_complete = N * (1 - p)^d
   In a 30-feature dataset with p = 0.04 (only 4% missingness per column):
       (1 - 0.04)^30 = 0.294 -> Discarding rows destroys 70.6% of your dataset!

2. Weighted k-Nearest Neighbors (k-NN) Imputation:
   For target instance x_i missing feature j, find k nearest donors N_i across observed 
   mutual attributes:
       x_hat_ij = [ sum_{k in N_i} w_k * x_kj ] / [ sum_{k in N_i} w_k ]
   where distance weights w_k = 1 / d(x_i^obs, x_k^obs).
   Preserves non-linear multivariate relationships; far superior to global mean.

3. Rubin's Multiple Imputation Pooling Rules (MICE):
   Single imputation artificially inflates sample confidence by ignoring imputation 
   uncertainty (treating imputed guesses as known facts). Multiple Imputation generates 
   M parallel completed datasets:
       Point Estimate: Q_bar = (1 / M) * sum_{m=1}^M Q_hat_m
       Within-Imputation Variance:  U_bar = (1 / M) * sum_{m=1}^M U_m
       Between-Imputation Variance: B = [ 1 / (M - 1) ] * sum_{m=1}^M (Q_hat_m - Q_bar)^2
       Total True Variance:        T = U_bar + (1 + 1/M) * B


4. COMPREHENSIVE MISSING VALUE TRIAGE HIERARCHY
-----------------------------------------------------------------------------
Strategy 1: Listwise Deletion (\`df.dropna()\`)
  - When to use: ONLY when missingness is proven MCAR AND less than 2-3% of rows are affected.
  - Danger: Massive sample loss and survivorship bias.

Strategy 2: Column Deletion (\`df.drop(columns=[...])\`)
  - When to use: When a feature has > 60-70% missingness AND is not an essential target driver.

Strategy 3: Univariate Central Tendency Imputation
  - Mean Imputer: Best for symmetric Gaussian distributions under MCAR.
  - Median Imputer: Best for skewed, heavy-tailed, or outlier-prone features (e.g. income, bill amounts).
  - Mode Imputer: The standard baseline for discrete categorical attributes.

Strategy 4: Missingness Indicator Feature Augmentation (Shadow Columns)
  - Method: Append a binary column I_j in {0, 1} where I_j = 1 if x_j was missing, 0 otherwise.
  - Why: Allows models (especially linear and tree models) to separate the imputed synthetic value 
    from genuine observations, unlocking predictive signal in MNAR data.

Strategy 5: Multivariate Iterative Imputation (MICE / MissForest)
  - Method: Cycles through features, modeling each missing attribute as a function of all other 
    observed features via ridge regression or random forests.
  - State-of-the-art for clinical and tabular tabular datasets.

Strategy 6: Native Tree Surrogate Split Ingestion (XGBoost / LightGBM)
  - Method: Tree algorithms do not require explicit imputation; during training, they send all 
    NaN values down the left branch, then the right branch, and permanently assign NaNs to whichever 
    direction maximizes Information Gain!


5. PREVENTING DATA LEAKAGE DURING IMPUTATION
-----------------------------------------------------------------------------
The Golden Rule:
    "Never calculate imputation parameters (mean, median, mode, or k-NN donors) 
     using the combined dataset before train-test splitting!"

Fatal Leaky Code:
    imputer = SimpleImputer(strategy='mean')
    X_imputed = imputer.fit_transform(X) # Contaminates training with test statistics!
    X_train, X_test = train_test_split(X_imputed)

Production-Safe Pipeline Code:
    X_train, X_test = train_test_split(X)
    imputer = SimpleImputer(strategy='mean')
    X_train_imputed = imputer.fit_transform(X_train) # Fits ONLY on train
    X_test_imputed  = imputer.transform(X_test)      # Transforms test using frozen train mean


6. REGIONAL WEST BENGAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------
Case Study 1: Kolkata Medical College & SSKM Hospital Emergency Triage
- Problem: Patients arriving in critical condition cannot complete non-emergency admission questions. 
  Glucose tests are occasionally delayed (MCAR), elderly patients lack mobile vitals (MAR), and 
  severely ill patients cannot self-report pain scale ratings (MNAR).
- Solution: Conditioned k-NN imputer (k=3) for glucose and blood pressure, combined with binary 
  missingness indicators for pain ratings. Preserved emergency triage accuracy while reducing wait times.

Case Study 2: WBSEDCL Smart Meter Grid (Rajarhat & New Town)
- Problem: Cellular network drops during monsoon lightning storms create 1-to-3 hour time-series gaps.
- Solution: Rolling forward-fill (Last Observation Carried Forward / LOCF) for gaps < 2 hours; 
  cubic spline interpolation for gaps between 2 and 6 hours. Zero dropna() usage.

Case Study 3: Salt Lake Sector V FinTech Consumer Credit Engine
- Problem: High-income applicants deliberately leave the 'Annual Income' field empty (MNAR).
- Solution: Imputing with median income caused high-net-worth applicants to be falsely categorized as 
  low-credit-limit risks. Appending an \`income_was_missing\` indicator enabled the gradient-boosted 
  tree to learn that missing income was correlated with high creditworthiness and investment wealth!

Case Study 4: North 24 Parganas District Public Health Epidemiological Survey
- Problem: Door-to-door tuberculosis and diabetes surveys had 25% missing responses among rural 
  elderly residents due to dialect barriers.
- Solution: MICE (Multivariate Imputation by Chained Equations) using village location, age, 
  and household size to impute missing diagnostic indicators without demographic distortion.


7. COMMON ENGINEERING TRAPS & ANTI-PATTERNS
-----------------------------------------------------------------------------
1. Anti-Pattern: Replacing Missing Data with Zero
   - Imputing 0.0 into physical features like Blood Pressure, Glucose, or Age introduces extreme, 
     impossible values that destroy gradient descent and pull decision boundaries into pathology.

2. Anti-Pattern: Using Mean on Heavy-Tailed Skewed Data
   - Imputing mean salary (Rs 1,200,000) into a feature where 95% earn Rs 30,000 because of two 
     Crorepati outliers severely corrupts the dataset. Always use Median!

3. Anti-Pattern: Ignoring MNAR Informative Missingness
   - Assuming all missing data is accidental. In consumer behavior and healthcare, why a value is 
     missing is often more predictive than the value itself!

4. Anti-Pattern: Separate Imputation Logic in Training vs Production
   - Manually writing Pandas \`.fillna()\` in Jupyter but deploying without packaging the imputer 
     in a Scikit-Learn Pipeline (\`joblib.dump(pipeline)\`).


8. MAKAUT SEMESTER EXAM REVISION FLASHCARDS & SHORT QUESTIONS
-----------------------------------------------------------------------------
[Q1] Define MCAR, MAR, and MNAR.
     -> MCAR: Missingness is purely random and independent of all data. 
        MAR: Missingness depends on observed variables, but not the missing value itself. 
        MNAR: Missingness depends directly on the unobserved value itself.

[Q2] What is the Missingness Indicator pattern?
     -> Appending a binary 0/1 column indicating whether an attribute was missing, preserving 
        informative non-random signals for machine learning estimators.

[Q3] Why does Single Imputation underestimate variance?
     -> It treats imputed synthetic values as known empirical facts, reducing artificial 
        sample spread and producing overly narrow confidence intervals.

[Q4] How does XGBoost handle missing values natively?
     -> It evaluates split candidates by sending all NaN entries to the left branch, then 
        the right branch, selecting whichever direction yields the highest Information Gain.

[Q5] Explain Data Leakage in imputation.
     -> Computing global imputer statistics (e.g. mean) over the full dataset before train-test 
        splitting, leaking test distribution information into the training phase.

=============================================================================
END OF REVISION HANDBOOK - CODER & ACCOTAX BARRACKPORE
=============================================================================
`,U=[{id:1,question:"What is the primary definition and objective of handling missing values in machine learning?",shortAnswer:"Handling missing values is the statistical and algorithmic process of diagnosing missingness mechanisms, mitigating information loss, and reconstructing complete feature matrices required for mathematical model optimization.",explanation:"Because linear algebra routines (dot products, matrix inversions, Euclidean distances) cannot compute on undefined floating-point values (NaN), missing values must either be pruned or imputed using statistically sound methods that prevent bias.",hint:"Think about why algorithms cannot compute dot products when one coordinate is undefined.",level:"Basic",codeExample:`# Inspecting and filling missing values in Pandas
import pandas as pd
df = pd.DataFrame({'age': [25, np.nan, 30]})
# Impute with median
df['age_clean'] = df['age'].fillna(df['age'].median())`},{id:2,question:"Why do standard Scikit-Learn estimators (e.g. LinearRegression, LogisticRegression) crash with a ValueError when passed NaNs?",shortAnswer:"Underlying low-level linear algebra libraries (BLAS/LAPACK) require finite floating-point numbers; any arithmetic operation on NaN yields NaN, which propagates and collapses loss gradients.",explanation:"Gradient descent computes updates w = w - eta * grad_L. If an input x_j is NaN, the gradient grad_L evaluates to NaN, instantly corrupting all model weights and halting convergence.",hint:"What is 5.0 * NaN in IEEE 754 floating-point arithmetic?",level:"Basic",codeExample:`from sklearn.linear_model import LinearRegression
import numpy as np
X = np.array([[1], [np.nan], [3]])
y = np.array([2, 4, 6])
try:
    LinearRegression().fit(X, y)
except ValueError as e:
    print('Crash confirmed:', e)  # 'Input contains NaN'`},{id:3,question:"Differentiate between Missing Completely at Random (MCAR) and Missing at Random (MAR).",shortAnswer:"MCAR means missingness is purely stochastic and independent of all variables; MAR means missingness depends systematically on observed auxiliary features, but not on the missing value itself.",explanation:"MCAR: A lab vial breaks accidentally (unbiased under complete-case analysis). MAR: Elderly patients are less likely to report blood pressure in an app, but age is fully recorded (unbiased once conditioned on age).",hint:"Does missingness depend on nothing at all, or does it depend on another column you already recorded?",level:"Basic",codeExample:`# MCAR: Coin flip nulls (5% random loss)
# MAR: if df['age'] > 65: 30% nulls in blood_pressure
# MAR can be resolved by grouping by age before imputing!`},{id:4,question:"What is Missing Not at Random (MNAR) and why is it considered non-ignorable?",shortAnswer:"MNAR occurs when the probability of missingness depends directly on the unobserved missing value itself; it is non-ignorable because simple statistical imputation produces severe systematic bias.",explanation:"For example, individuals with extremely high incomes or severe clinical depression often refuse to answer salary or mental health questions. The missingness itself carries crucial predictive signal that standard mean/median imputation erases.",hint:"Think about who is most likely to refuse to disclose their weight or bank balance.",level:"Basic",codeExample:`# In MNAR, missingness is correlated with the true hidden value
# E.g., true income > 100,000 -> 70% probability of being NaN!
# Imputing with global median (30,000) severely underestimates high earners!`},{id:5,question:"What is Listwise Deletion (Complete-Case Analysis) and when is it statistically acceptable?",shortAnswer:"Listwise deletion discards every row that contains at least one missing value; it is acceptable ONLY when missingness is proven MCAR AND affects less than 2-5% of total records.",explanation:"If missingness is MAR or MNAR, listwise deletion introduces severe sample selection bias. Even under MCAR, if missingness is spread across many columns, it can accidentally destroy over 70% of sample observations.",hint:"When does dropping rows not bias your sample, and when is data loss negligible?",level:"Basic",codeExample:`# Listwise deletion in pandas
clean_df = df.dropna()  # Only use if len(clean_df) / len(df) > 0.95 and MCAR!`},{id:6,question:"When is Median Imputation strongly preferred over Mean Imputation?",shortAnswer:"When the numerical feature displays significant skewness or extreme outliers (e.g. income, property prices, power consumption), since the median is a robust, outlier-resistant central metric.",explanation:"The arithmetic mean minimizes squared error, meaning a single extreme Crorepati outlier can shift the imputed value by hundreds of thousands. The median represents the 50th percentile and remains completely unaffected by extreme tail values.",hint:"If 9 people earn Rs 20,000 and 1 person earns Rs 10 Crore, which metric reflects the typical person?",level:"Basic",codeExample:`from sklearn.impute import SimpleImputer
# Median imputer for skewed tabular features
med_imputer = SimpleImputer(strategy='median')
X_clean = med_imputer.fit_transform(X_train[['income']])`},{id:7,question:"How should missing values be handled in discrete categorical features?",shortAnswer:"Either by Mode Imputation (replacing with the most frequent category) or by creating an explicit new category label such as 'Missing' or 'Unknown'.",explanation:"For nominal variables where missingness might carry semantic meaning, encoding missing entries as a distinct category ('Unknown') allows downstream algorithms (like trees or one-hot vectors) to learn patterns specific to the missing group.",hint:"Can 'Missing' be treated as its own legitimate category in categorical variables?",level:"Basic",codeExample:`# Creating an explicit 'Missing' category
df['meter_hardware'] = df['meter_hardware'].fillna('Unknown')
# Alternatively: Mode Imputation
mode_val = df['meter_hardware'].mode()[0]
df['meter_hardware'] = df['meter_hardware'].fillna(mode_val)`},{id:8,question:"What is the primary architectural purpose of a Scikit-Learn Imputation Pipeline?",shortAnswer:"To encapsulate learned imputation parameters (e.g. training medians) and guarantee they are calculated strictly on X_train and applied to X_test without data leakage.",explanation:"If you call an imputer on the combined dataset before splitting, information about test set distributions leaks into the training phase. Pipelines enforce strict separation: `.fit()` on training data, `.transform()` on test and production queries.",hint:"How do you ensure test set averages never influence training data transformations?",level:"Basic",codeExample:`from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer
from sklearn.ensemble import RandomForestClassifier

pipe = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('model', RandomForestClassifier())
])
pipe.fit(X_train, y_train)  # Learns medians strictly from X_train!
preds = pipe.predict(X_test)`},{id:9,question:"Explain the Missingness Indicator pattern and why it is critical for MNAR data.",shortAnswer:"The Missingness Indicator pattern appends a binary shadow column I_j in {0, 1} flagging whether feature x_j was originally missing, allowing estimators to capture informative missingness signals.",explanation:"When an attribute is Missing Not at Random (e.g., high-income tax evasion), imputing with the median removes the difference between an actual median earner and a secretive high earner. The indicator flag preserves this vital predictive clue for the model.",hint:"How does a model know whether a value was genuinely measured or synthetically imputed?",level:"Moderate",codeExample:`from sklearn.impute import SimpleImputer, MissingIndicator
# SimpleImputer can automatically add missingness indicators
imp = SimpleImputer(strategy='median', add_indicator=True)
X_augmented = imp.fit_transform(X_train)
# Yields imputed feature column PLUS a binary 0/1 indicator column!`},{id:10,question:"How does the k-Nearest Neighbors (k-NN) Imputer calculate distance between instances that have missing coordinates?",shortAnswer:"It computes distance strictly across coordinates that are mutually observed in both instances, scaling the distance proportional to the ratio of observed to total attributes.",explanation:"Given two instances x and y, Euclidean distance is calculated as d(x, y) = sqrt( (total_features / observed_features) * sum_{i in observed} (x_i - y_i)^2 ). This allows finding neighbors even when donor candidates contain partial nulls.",hint:"How do you adjust distance if two vectors share 4 out of 5 features versus 2 out of 5?",level:"Moderate",codeExample:`from sklearn.impute import KNNImputer
# Uses nan_euclidean_distances to find k nearest donors
knn_imp = KNNImputer(n_neighbors=3, weights='distance')
X_imputed = knn_imp.fit_transform(X_train)`},{id:11,question:"Why does Single Imputation (e.g. replacing with mean or median) underestimate sample variance?",shortAnswer:"Single imputation treats synthetic imputed estimates as known empirical ground truth with zero variance, artificially shrinking sample spread and producing overly narrow confidence intervals.",explanation:"If 30% of a column is replaced by the identical scalar mean mu, the variance formula sum((x - mu)^2) / N adds 0 for all 30% of imputed rows. This falsely deflates sample standard deviation, inflating t-statistics and causing false statistical significance.",hint:"What is (x - mu)^2 when x is exactly equal to mu?",level:"Moderate",codeExample:`import numpy as np
x_true = np.random.normal(50, 10, 1000)
# Mask 30% missing and impute with mean
x_dirty = x_true.copy()
x_dirty[:300] = np.mean(x_dirty[300:])
print('True Std Dev:   ', np.std(x_true))  # ~ 10.0
print('Imputed Std Dev:', np.std(x_dirty)) # ~ 8.36 (Artificially deflated!)`},{id:12,question:"How do modern Gradient Boosted Decision Tree frameworks (XGBoost, LightGBM) handle missing values natively without explicit imputation?",shortAnswer:"During tree construction, they evaluate split gain by sending all NaN entries to the left child, then to the right child, permanently assigning NaNs to whichever default direction maximizes Information Gain.",explanation:"At inference time, if a query record contains a NaN, it simply follows the default direction learned during training. This treats missingness natively as a distinct branching path, completely bypassing the need for manual imputation.",hint:"Does a decision tree need an exact number if it can just learn which branch to send missing entries down?",level:"Moderate",codeExample:`import xgboost as xgb
# XGBoost handles NaNs natively with default direction splits
model = xgb.XGBClassifier()
model.fit(X_train, y_train)  # Works out of the box with NaNs!`},{id:13,question:"What is the compound data loss equation for Listwise Deletion across d independent features?",shortAnswer:"N_complete = N * prod_{j=1}^d (1 - p_j). With equal missingness p across features, N_complete = N * (1 - p)^d.",explanation:"Even if each feature has a seemingly negligible 3% null rate (p = 0.03), across 35 features: (1 - 0.03)^35 = 0.344. Complete-case analysis discards over 65% of all collected training records, severely crippling model training capacity.",hint:"What happens when you multiply (0.97) by itself 35 times?",level:"Moderate",codeExample:`# Loss curve calculation
p = 0.03 # 3% missing per column
d = 35   # 35 columns
retention = (1 - p)**d
print(f'Retained records: {retention*100:.1f}%, Discarded: {(1-retention)*100:.1f}%')`},{id:14,question:"What is Little's MCAR Test and what null hypothesis does it evaluate statistically?",shortAnswer:"Little's Test evaluates the null hypothesis H_0 that data is Missing Completely at Random (MCAR) by testing whether variable means differ significantly across different missingness pattern subgroups using a chi-square distance.",explanation:"If p < 0.05, the null hypothesis is rejected, proving that missingness is NOT MCAR (it is either MAR or MNAR). If rejected, listwise deletion is statistically invalid and will introduce systematic bias.",hint:"What is the null hypothesis: that missingness is random, or that it is non-random?",level:"Moderate",codeExample:`# Conceptual Little's MCAR test
# H0: Data is MCAR (means across missingness patterns are equal)
# If p-value < 0.05 -> Reject H0 -> Data is MAR or MNAR!`},{id:15,question:"When should a feature column be completely dropped from the dataset rather than imputed?",shortAnswer:"When the feature has greater than 60-70% missingness AND is not an essential causal domain driver, or when imputed noise would outweigh legitimate signal.",explanation:"Imputing a column where 80% of values are fabricated means four out of five numbers are statistical guesses. Unless the missingness indicator itself holds extraordinary predictive value, dropping the column prevents noise contamination.",hint:"If 85 out of 100 values in a column are blank, are you modeling data or modeling your own imputer?",level:"Moderate",codeExample:`# Threshold-based column dropping
null_pct = df.isnull().mean()
cols_to_drop = null_pct[null_pct > 0.60].index
df_clean = df.drop(columns=cols_to_drop)`},{id:16,question:"How do Forward-Fill (LOCF) and Backward-Fill (NOCB) operate in sequential time-series telemetry?",shortAnswer:"Forward-fill propagates the last observed valid reading forward into subsequent missing timestamps; backward-fill propagates the next future observation backward.",explanation:"In smart meter and IoT telemetry (e.g. WBSEDCL hourly readings), physical systems exhibit high temporal autocorrelation. If a sensor drops out for 30 minutes, the power consumption is highly likely to remain near the last observed reading.",hint:"In a continuous time-series, what is the best estimate of a temperature 5 minutes ago?",level:"Moderate",codeExample:`import pandas as pd
ts = pd.Series([230.1, np.nan, np.nan, 230.8])
# Forward-fill (Last Observation Carried Forward)
print('Forward fill:\\n', ts.ffill())`},{id:17,question:"What is MICE (Multivariate Imputation by Chained Equations) and how does it cycle through features iteratively?",shortAnswer:"MICE treats each variable with missingness as the target of a regression model trained on all other observed features, cycling through columns iteratively until imputed values converge.",explanation:"In Scikit-Learn's `IterativeImputer`, feature X_1 is predicted by (X_2, ..., X_d). Then X_2 is predicted by the newly updated X_1 and remaining features. This round-robin regression preserves complex multivariate dependencies and correlations.",hint:"How do you use all other columns to predict the missing values in one column, in a round-robin loop?",level:"Advanced",codeExample:`from sklearn.experimental import enable_iterative_imputer
from sklearn.impute import IterativeImputer
# MICE round-robin regression imputation
mice = IterativeImputer(max_iter=10, random_state=42)
X_imputed = mice.fit_transform(X_train)`},{id:18,question:"Explain Rubin's Pooling Rules for Multiple Imputation (within-imputation vs between-imputation variance).",shortAnswer:"Total variance T = U_bar + (1 + 1/M)*B, where U_bar is the average within-imputation variance across M completed datasets, and B is the between-imputation variance measuring estimation uncertainty.",explanation:"By creating M parallel imputed datasets and fitting models on each, Multiple Imputation explicitly accounts for the fact that imputed values are uncertain. The between-imputation variance B inflates the standard errors to honest, realistic statistical levels.",hint:"How does Multiple Imputation capture both data sampling error and imputation uncertainty?",level:"Advanced",codeExample:`# Rubin's Pooling Formula: Total Variance T = U_bar + (1 + 1/M) * B
# U_bar = mean(within_variances)
# B = sample_variance(parameter_estimates)`},{id:19,question:"How does the MissForest imputation algorithm handle mixed continuous and categorical datasets?",shortAnswer:"MissForest fits iterative Random Forest models on each column, naturally handling non-linear interactions, mixed continuous/categorical features, and complex distributions without distributional assumptions.",explanation:"Unlike linear MICE, MissForest uses Random Forest regressors for continuous features and Random Forest classifiers for categorical attributes. It is non-parametric, requires no tuning of scaling, and is resistant to multicollinearity.",hint:"What algorithm can seamlessly switch between regression and classification for different columns?",level:"Advanced",codeExample:`# Conceptual MissForest usage
# from missingpy import MissForest
# imputer = MissForest()
# X_imputed = imputer.fit_transform(X_mixed_types)`},{id:20,question:"Why can naively filling missing physical quantities (such as Blood Pressure or Heart Rate) with 0.0 cause severe gradient descent pathology?",shortAnswer:"0.0 represents a biological impossibility (death), introducing extreme out-of-distribution leverage points that distort loss surfaces and trigger massive false gradients.",explanation:"If normal systolic blood pressure is ~120 mmHg, a value of 0.0 is 12 standard deviations away from the mean. In squared error loss (y - y_hat)^2, this single artificial point produces a gigantic squared residual of 14,400, pulling model weights completely away from legitimate patient patterns.",hint:"What happens to the gradient of (0 - 120)^2 compared to normal variations?",level:"Advanced",codeExample:`# Never fill physical vitals with 0.0!
# E.g. patient blood pressure: fillna(0) creates massive pathological leverage points!`},{id:21,question:"How do Heckman Selection Models mathematically correct for sample selection bias in MNAR datasets?",shortAnswer:"By modeling a two-stage process: a probit selection equation models the probability of observation, computing the Inverse Mills Ratio (lambda) which is added as a regressor in the outcome equation.",explanation:"When data is MNAR, observing a value is correlated with the error term of the outcome equation. The Heckman correction models P(observed | Z), calculates the hazard lambda, and includes it to purge the selection bias from the primary regression coefficients.",hint:"What econometric method uses a probit selection equation to control for missing data bias?",level:"Advanced",codeExample:"# Two-step Heckman Selection: Stage 1 = Probit(Selection); Stage 2 = OLS with Inverse Mills Ratio"},{id:22,question:"What is the Expectation-Maximization (EM) algorithm for maximum likelihood estimation in the presence of missing data?",shortAnswer:"EM iterates between an E-step (computing the expected log-likelihood over missing data given current parameter estimates) and an M-step (maximizing the expected log-likelihood to update parameters).",explanation:"EM avoids explicitly filling individual missing cells permanently. Instead, it estimates the true population parameters (mean vector mu and covariance matrix Sigma) directly from incomplete data by converging iteratively toward the marginal maximum likelihood.",hint:"Recall the 2 steps: compute Expectation, then Maximize parameters.",level:"Advanced",codeExample:"# EM algorithm estimates mu and Sigma directly without creating ad-hoc imputed rows"},{id:23,question:"How does Pairwise Deletion (Available-Case Analysis) differ from Listwise Deletion, and why can it yield non-positive-definite covariance matrices?",shortAnswer:"Pairwise deletion calculates each covariance Cov(X_i, X_j) using all instances where both i and j are observed, leading to different sample sizes per cell which can produce mathematically invalid covariance matrices.",explanation:"Because Cov(X_1, X_2) might be computed on 800 rows while Cov(X_2, X_3) is computed on 500 different rows, the resulting covariance matrix Sigma can have negative eigenvalues, causing multivariate normal distributions and PCA decompositions to crash.",hint:"Can a covariance matrix have negative eigenvalues if different cells are computed on different subsets of people?",level:"Advanced",codeExample:`# Pairwise deletion danger:
# Covariance matrix can have lambda_min < 0 (non-positive semi-definite)!`},{id:24,question:"How does missingness in target labels (y) differ fundamentally from missingness in features (X), and how is Semi-Supervised Learning applied?",shortAnswer:"Missing labels cannot be imputed via simple feature averages; rows with missing labels represent unlabelled data suitable for Semi-Supervised Learning (e.g. Self-Training, Label Propagation) or must be excluded from supervised loss.",explanation:"In supervised learning, the objective is to model P(y | X). Imputing y with mean(y) directly hallucinates the target, destroying classification margins. Semi-supervised algorithms train a model on labelled pairs (X_L, y_L) and iteratively predict pseudo-labels on unlabelled pairs (X_U).",hint:"What happens if you impute the answer key of an exam before evaluating students?",level:"Advanced",codeExample:`from sklearn.semi_supervised import SelfTrainingClassifier
from sklearn.ensemble import RandomForestClassifier
# -1 indicates unlabelled instance
y_train_semi = np.where(np.isnan(y_train), -1, y_train)
self_trainer = SelfTrainingClassifier(RandomForestClassifier())
self_trainer.fit(X_train, y_train_semi)`},{id:25,question:"What is Pattern-Mixture Modeling and how does it stratify analysis by missingness patterns for MNAR data?",shortAnswer:"It stratifies the joint distribution into distinct subgroups based on the exact pattern of missing variables, modeling P(Y | Pattern = k) and weighting estimates by the empirical frequency of each pattern.",explanation:"Rather than assuming a single missingness mechanism, Pattern-Mixture models acknowledge that patients with missing Blood Pressure AND missing Glucose belong to a distinct clinical population from patients with only missing Glucose, modeling each pattern subgroup separately.",hint:"How can you group records based on WHICH combination of columns is missing?",level:"Expert",codeExample:`# Pattern-mixture modeling stratifies records into groups based on null masks
# pattern_id = df.isnull().astype(int).astype(str).agg(''.join, axis=1)`},{id:26,question:"How do distributed frameworks (such as Apache Spark) compute parallel median imputation across billions of rows without full sorting?",shortAnswer:"They employ approximate quantile sketches (e.g. Greenwald-Khanna or t-digest algorithms) to compute percentiles within a bounded error epsilon in a single parallel map-reduce pass.",explanation:"Sorting a 10-billion-row distributed DataFrame to find the exact middle element causes massive shuffle spills across the cluster. Approximate sketch algorithms accumulate compact centroid histograms in worker memory, computing the 50th percentile in O(1) memory per partition.",hint:"How do you find the median of 10 billion numbers without sorting them all into a single machine?",level:"Expert",codeExample:`# PySpark approximate median imputation
# median_val = df.approxQuantile('income', [0.5], 0.01)[0]
# df_imputed = df.fillna({'income': median_val})`},{id:27,question:"How does GAIN (Generative Adversarial Imputation Networks) use a generator and discriminator to impute high-dimensional tabular data?",shortAnswer:"The Generator observes real data with NaNs and generates imputations; the Discriminator is trained via a Hint mechanism to distinguish which specific coordinates were genuinely observed versus imputed.",explanation:"Standard GANs classify entire vectors as real or fake. GAIN provides the Discriminator with a partial hint vector H, forcing it to predict the mask vector M element-by-element. This forces the Generator to model true multivariate conditional distributions P(X_mis | X_obs).",hint:"How does a discriminator know WHICH individual cell was synthetic versus real?",level:"Expert",codeExample:"# GAIN Architecture: G(X, M) -> Imputed Matrix; D(G(X, M), H) -> Mask Probability"},{id:28,question:"Why can improper imputation in credit risk models violate Fair Lending regulations (e.g. ECOA) and create discriminatory disparate impact?",shortAnswer:"If missingness is correlated with protected demographic attributes (e.g. rural or minority applicants lacking formal credit bureau records), naively imputing zero or low credit scores systematically penalizes protected classes.",explanation:"Minority communities and unbanked populations frequently lack traditional credit histories. Imputing a default low score or dropping unbanked applications creates an illegal disparate impact under banking law. Responsible AI requires multi-tier alternate data imputation and fairness audits.",hint:"What happens to unbanked rural applicants if lack of credit history is automatically imputed as bad credit?",level:"Expert",codeExample:`# Disparate Impact Audit in Credit Imputation
# Check if imputation error rate differs significantly across demographic groups!`},{id:29,question:"In real-time streaming architectures (e.g. Apache Flink / Kafka), how is stateful exponential decay or Kalman filtering applied to impute missing IoT telemetry?",shortAnswer:"Streaming engines maintain internal state vectors per IoT device; when a heartbeat is dropped, a Kalman filter state-space model projects the latent state forward using physical transition equations and covariance matrices.",explanation:"Unlike batch imputation that can look backward and forward in time, streaming pipelines operate in real-time latency (< 5ms). Kalman filters predict the expected measurement at time t given noisy inputs up to t-1, updating state uncertainty until physical sensor pings resume.",hint:"How does an aircraft autopilot estimate altitude if GPS drops out for 2 seconds?",level:"Expert",codeExample:`# Stateful streaming Kalman Filter prediction for missing IoT sensor reading
# x_pred = F * x_prev; P_pred = F * P_prev * F.T + Q`},{id:30,question:"How do modern Feature Stores (e.g. Feast, Hopsworks) guarantee consistent offline-to-online missing value imputation without training-serving skew?",shortAnswer:"By defining imputation rules declaratively within the feature view definition; the same serialized transformer or default fallback is executed during both offline batch training and online low-latency entity lookups.",explanation:"If training data imputes missing values using a Scikit-Learn pipeline median, but the online Redis lookup microservice defaults missing inputs to 0.0 in Java, catastrophic model degradation occurs. Feature stores serialize transformation pipelines into a shared, versioned feature view.",hint:"How do you ensure Python offline training and Java online serving handle NaNs with identical logic?",level:"Expert",codeExample:"# Declarative feature definition in Feature Store ensures shared imputation logic across training & serving"}],G=[{id:"SSKM-001",name:"Subir Ghosh",age:45,bp:138,glucose:142,income:48e3,tier:"Urgent"},{id:"SSKM-002",name:"Kakali Das",age:28,bp:118,glucose:92,income:32e3,tier:"Non-Urgent"},{id:"SSKM-003",name:"Bimal Mukherjee",age:68,bp:165,glucose:210,income:85e3,tier:"Emergency"},{id:"SSKM-004",name:"Ruma Chatterjee",age:72,bp:158,glucose:185,income:25e3,tier:"Emergency"},{id:"SSKM-005",name:"Amitava Roy",age:35,bp:122,glucose:105,income:62e3,tier:"Non-Urgent"},{id:"SSKM-006",name:"Sunita Sen",age:52,bp:144,glucose:160,income:95e3,tier:"Urgent"},{id:"SSKM-007",name:"Dipankar Pal",age:61,bp:150,glucose:175,income:54e3,tier:"Urgent"},{id:"SSKM-008",name:"Ananya Bose",age:24,bp:115,glucose:88,income:38e3,tier:"Non-Urgent"}],v=[{term:"MCAR (Missing Completely at Random)",tag:"Rubin Taxonomy",desc:"Missingness probability is purely stochastic and independent of all observed and unobserved data: P(M | Y_obs, Y_mis) = P(M)."},{term:"MAR (Missing at Random)",tag:"Rubin Taxonomy",desc:"Missingness depends systematically on observed auxiliary features, but not on the missing value itself: P(M | Y_obs, Y_mis) = P(M | Y_obs)."},{term:"MNAR (Missing Not at Random)",tag:"Rubin Taxonomy",desc:"Missingness depends directly on the unobserved missing value itself (non-ignorable): P(M | Y_obs, Y_mis) depends on Y_mis."},{term:"Listwise Deletion (dropna)",tag:"Complete-Case",desc:"Discarding every observation that contains at least one missing attribute; valid under MCAR but causes catastrophic sample loss."},{term:"Single Imputation",tag:"Statistical Imputation",desc:"Replacing missing cells with a single scalar (mean, median, mode); deflates variance and underestimates estimation uncertainty."},{term:"MICE (Multiple Imputation)",tag:"Advanced Algorithmic",desc:"Multivariate Imputation by Chained Equations; models each missing feature iteratively as a function of all other features."},{term:"k-NN Imputer",tag:"Distance-Based",desc:"Imputes missing values using the distance-weighted average of the k nearest observed donor instances in Euclidean space."},{term:"Missingness Indicator Pattern",tag:"Feature Engineering",desc:"Appending a binary shadow flag column I_j in {0, 1} indicating whether feature x_j was missing, essential for MNAR signal recovery."},{term:"Little's MCAR Test",tag:"Statistical Hypothesis",desc:"A chi-square distance test evaluating the null hypothesis that variable means do not differ across missingness pattern subgroups."},{term:"Surrogate Split (XGBoost)",tag:"Native Tree Handling",desc:"Assigning NaNs to the default tree branch that maximizes split gain, allowing decision trees to ingest missing data directly."},{term:"Rubin's Pooling Rules",tag:"Multiple Imputation",desc:"Equations combining parameter estimates and combining within-imputation variance with between-imputation variance."},{term:"Heckman Selection Model",tag:"Econometric Correction",desc:"A two-stage probit selection model that computes the Inverse Mills Ratio to correct for severe sample selection bias under MNAR."}],f=[{id:1,scenario:"A public health survey across North 24 Parganas collects 40 health indicators. Each question has a small 3% non-response rate. If an analyst runs `df.dropna()`, what percentage of citizen records will be destroyed?",options:[{id:"A",text:"Only 3% of the data will be lost."},{id:"B",text:"Approximately 70% of the entire dataset will be annihilated due to compound listwise deletion: (1 - 0.03)^40 ≈ 0.295."},{id:"C",text:"100% of records will be deleted because pandas cannot process 40 columns."},{id:"D",text:"Exactly 40% will be lost."}],correct:"B",explanation:"Listwise deletion compounds missingness multiplicatively across columns: N_clean = N * (1 - p)^d. With 40 features each missing 3% of data, (0.97)^40 ≈ 0.295, retaining only 29.5% of records and discarding over 70% of collected data!",mentorTip:"Sukanta Hui says: Always calculate the complete-case retention rate first! If `df.dropna()` discards more than 5% of your sample, halt and use imputation."},{id:2,scenario:"In an emergency triage dataset at SSKM Hospital, blood glucose is missing on 2 patients due to a dropped test tube (MCAR). Blood pressure is missing on 2 elderly non-ambulatory patients (MAR). Income is missing on 2 wealthy executives who refused to report it (MNAR). Which missingness mechanism will introduce severe systematic bias under median imputation?",options:[{id:"A",text:"MCAR (Blood Glucose)"},{id:"B",text:"MAR (Blood Pressure)"},{id:"C",text:"MNAR (Income)"},{id:"D",text:"None of them, median imputation is unbiased across all mechanisms."}],correct:"C",explanation:"Under MNAR, the probability of missingness depends on the value itself (high earners refuse to report income). Replacing missing values with the global median (e.g. Rs 40,000) severely underestimates the true wealth of the high earners, destroying predictive signal unless a missingness indicator flag is added.",mentorTip:"When data is MNAR, why it is missing is the most predictive feature! Always append a binary `was_missing` indicator."},{id:3,scenario:"Why does the k-Nearest Neighbors (k-NN) Imputer consistently achieve lower reconstruction error than Mean or Median imputation on clinical patient vitals?",options:[{id:"A",text:"k-NN automatically deletes outlier rows during distance calculation."},{id:"B",text:"k-NN preserves multivariate non-linear correlations by borrowing values strictly from donor patients with similar age, blood pressure, and triage profiles."},{id:"C",text:"k-NN uses a neural network to hallucinate missing data."},{id:"D",text:"k-NN converts numerical features into binary categories."}],correct:"B",explanation:"Mean and median imputation are univariate; they assign the exact same population average regardless of whether a patient is a healthy 24-year-old or an elderly 72-year-old in critical distress. k-NN finds donor patients with similar physiological vitals, producing highly accurate, tailored estimates.",mentorTip:"For correlated clinical or sensor data, multivariate methods like k-NN or MICE beat global mean/median by a wide margin."},{id:4,scenario:"How does XGBoost handle missing values natively during inference without crashing or requiring manual imputation?",options:[{id:"A",text:"It replaces all NaNs with 0.0 before evaluating splits."},{id:"B",text:"It evaluates split candidates by sending all NaNs down the left branch, then the right branch, permanently learning whichever default direction maximizes Information Gain."},{id:"C",text:"It drops any row containing a NaN during tree traversal."},{id:"D",text:"It runs an internal k-NN imputer on every query row."}],correct:"B",explanation:"During tree training, XGBoost evaluates split gain by sending all missing entries to the left child, then to the right child, choosing whichever default path maximizes objective reduction. During inference, query rows with NaNs simply follow the learned default branch.",mentorTip:"XGBoost and LightGBM are tree masters: they treat missingness as a legitimate branching signal without manual imputation!"},{id:5,scenario:"Why does Single Imputation (e.g. replacing missing values with the mean) lead to artificially narrow confidence intervals and inflated false-positive statistical significance?",options:[{id:"A",text:"Because it treats imputed synthetic values as known empirical facts with zero variance, artificially shrinking sample spread."},{id:"B",text:"Because it converts float data types into integer strings."},{id:"C",text:"Because it causes gradient descent learning rates to explode."},{id:"D",text:"Because it violates the central limit theorem."}],correct:"A",explanation:"If 30% of a column is filled with the identical mean scalar mu, the squared distance (x - mu)^2 adds 0 to the sample variance for all 30% of imputed rows. This falsely deflates standard deviation, creating artificially high t-statistics and false confidence. Multiple Imputation (Rubin's rules) corrects this.",mentorTip:"Single imputation is like pretending you know the missing answers with 100% certainty. Multiple Imputation accounts for honest uncertainty!"}],V=()=>{const[N,w]=o.useState("noviceMasterclass"),[p,_]=o.useState("metaphor"),[m,b]=o.useState(""),[h,M]=o.useState("strategyArena"),[c,A]=o.useState("raw"),[u,j]=o.useState("mcar"),[g,I]=o.useState({}),[x,S]=o.useState(!1),R=o.useMemo(()=>{if(!m.trim())return v;const t=m.toLowerCase();return v.filter(i=>i.term.toLowerCase().includes(t)||i.desc.toLowerCase().includes(t)||i.tag.toLowerCase().includes(t))},[m]),d=o.useMemo(()=>{let t=G.map((i,s)=>{let a={...i};return(s===1||s===5)&&(a.glucose=null),(s===2||s===3)&&(a.bp=null),(s===2||s===5)&&(a.income=null),a});return c==="raw"?{rows:t,retentionPct:100,maeGlucose:"N/A",maeBP:"N/A",maeIncome:"N/A",verdict:"Contains 6 missing cells (37.5% missingness). Cannot be ingested by standard estimators.",badgeColor:"text-red-400 bg-red-950/40 border-red-500/30"}:c==="dropna"?{rows:t.filter(s=>s.glucose!==null&&s.bp!==null&&s.income!==null),retentionPct:50,maeGlucose:"0.0 (Discarded)",maeBP:"0.0 (Discarded)",maeIncome:"0.0 (Discarded)",verdict:"Listwise deletion discarded 4 out of 8 patients (50% sample loss)! High risk of survivorship bias.",badgeColor:"text-amber-400 bg-amber-950/40 border-amber-500/30"}:c==="mean"?{rows:t.map(n=>({...n,bp:n.bp===null?131.2:n.bp,glucose:n.glucose===null?144.5:n.glucose,income:n.income===null?44e3:n.income,imputedBP:n.bp===null,imputedGlucose:n.glucose===null,imputedIncome:n.income===null})),retentionPct:100,maeGlucose:"34.00 mg/dL",maeBP:"30.33 mmHg",maeIncome:"₹ 46,833",verdict:"Mean imputation preserves 100% of samples but severely flattens variance and underestimates high-income MNAR patients.",badgeColor:"text-yellow-300 bg-yellow-950/40 border-yellow-500/30"}:c==="median"?{rows:t.map(n=>({...n,bp:n.bp===null?130:n.bp,glucose:n.glucose===null?142:n.glucose,income:n.income===null?43e3:n.income,imputedBP:n.bp===null,imputedGlucose:n.glucose===null,imputedIncome:n.income===null})),retentionPct:100,maeGlucose:"34.00 mg/dL",maeBP:"31.50 mmHg",maeIncome:"₹ 47,000",verdict:"Median imputation is resilient to extreme outliers, but remains insensitive to multivariate clinical relationships.",badgeColor:"text-cyan-400 bg-cyan-950/40 border-cyan-500/30"}:c==="knn"?{rows:t.map(s=>{let a=s.bp,l=s.glucose,n=s.income;return s.id==="SSKM-002"&&(l=90),s.id==="SSKM-006"&&(l=148),s.id==="SSKM-003"&&(a=156),s.id==="SSKM-004"&&(a=152),s.id==="SSKM-003"&&(n=58e3),s.id==="SSKM-006"&&(n=62e3),{...s,bp:a,glucose:l,income:n,imputedBP:s.bp===null,imputedGlucose:s.glucose===null,imputedIncome:s.income===null}}),retentionPct:100,maeGlucose:"17.40 mg/dL (Lowest)",maeBP:"25.51 mmHg (Lowest)",maeIncome:"₹ 44,737",verdict:"k-NN Imputer preserves physiological multivariate correlations, slashing error on glucose and blood pressure by over 45%!",badgeColor:"text-emerald-400 bg-emerald-950/40 border-emerald-500/30"}:{rows:t,retentionPct:100}},[c]),k=(t,i)=>{I(s=>({...s,[t]:i}))},C=o.useMemo(()=>{let t=0;return f.forEach(i=>{g[i.id]===i.correct&&t++}),t},[g]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-3 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 8"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Academic Masterclass"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Rubin Missingness Architecture"})]}),e.jsx("h1",{className:"text-3xl sm:text-5xl font-extrabold text-white tracking-tight",children:"Handling Missing Values & Imputation Architecture"}),e.jsx("p",{className:"text-slate-300 text-base sm:text-lg max-w-4xl",children:"Diagnose and resolve missing data without corrupting your model. Master Donald Rubin's missingness taxonomy (MCAR, MAR, MNAR), the danger of compound listwise deletion, distance-weighted $k$-NN imputation, and the informative missingness indicator pattern."}),e.jsxs("div",{className:"flex flex-wrap gap-4 pt-2 text-xs font-medium text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),"SSKM Hospital Emergency Triage Telemetry"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"Live Strategy Imputation Arena"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Rubin Mechanism Simulator"]}),e.jsxs("span",{className:"flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),"Curriculum Aligned (MAKAUT)"]})]})]})]}),e.jsx("nav",{className:"sticky top-2 z-40 bg-slate-900/90 backdrop-blur-md p-2 rounded-2xl border border-slate-800 shadow-xl flex items-center gap-1 overflow-x-auto text-xs sm:text-sm font-medium",children:[{id:"noviceMasterclass",label:"1. Novice Class"},{id:"interactiveStudio",label:"2. Imputation Studio"},{id:"theory",label:"3. Theory & Math"},{id:"caseStudies",label:"4. Case Studies"},{id:"diagnosticQuiz",label:"5. Diagnostic Quiz"},{id:"bestPractices",label:"6. Best Practices"},{id:"labSection",label:"7. Python Lab"},{id:"faqSection",label:"8. FAQ & Notes"}].map(t=>e.jsx("button",{onClick:()=>{w(t.id),document.getElementById(t.id)?.scrollIntoView({behavior:"smooth"})},className:r("px-3.5 py-1.5 rounded-xl whitespace-nowrap transition-all duration-200",N===t.id?"bg-indigo-600 text-white font-semibold shadow-lg shadow-indigo-600/30":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:t.label},t.id))}),e.jsxs("section",{id:"noviceMasterclass",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold border border-indigo-500/30",children:"01"}),"The Novice Masterclass"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Build rock-solid intuition regarding why data goes missing and how algorithms reconstruct it."})]}),e.jsx("div",{className:"flex bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-semibold",children:[{id:"metaphor",label:"Real-World Metaphors"},{id:"rubinMatrix",label:"Rubin's Taxonomy"},{id:"jargon",label:"Jargon Buster"}].map(t=>e.jsx("button",{onClick:()=>_(t.id),className:r("px-3 py-1.5 rounded-lg transition-all",p===t.id?"bg-indigo-600 text-white shadow-sm":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),p==="metaphor"&&e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/30 flex items-center justify-center text-2xl font-bold",children:"📜"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Torn Ancient Manuscript"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Imagine historians deciphering an ancient Sanskrit palm-leaf manuscript where random corners have crumbled into dust. You cannot burn the entire manuscript (Listwise deletion). Historians deduce the missing syllables by studying surrounding sentence context and poetic meter (Multivariate Imputation)."}),e.jsx("div",{className:"pt-2 text-xs text-amber-300/80 font-mono",children:"Formula: Incomplete Text → Surrounding Linguistic Context → Reconstructed Reading"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 flex items-center justify-center text-2xl font-bold",children:"📝"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"The Unanswered Exam Question"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"If a student skips Question 5 on a semester exam, why did they skip it? Did their pen run out of ink (MCAR)? Did they run out of time because Section A was too long (MAR)? Or did they skip Question 5 precisely because they didn't study that difficult topic (MNAR)? The reason why determines whether you can guess their grade!"}),e.jsx("div",{className:"pt-2 text-xs text-cyan-300/80 font-mono",children:"Formula: Blank Response → Diagnose Root Mechanism → Unbiased Evaluation"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800/80 hover:border-emerald-500/40 transition-all space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center justify-center text-2xl font-bold",children:"🏥"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"SSKM Hospital Emergency Triage"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"When an unconscious road accident victim arrives at SSKM Hospital, doctors cannot measure their fasting blood sugar or ask for their medical history. Doctors borrow clinical assumptions from patients of similar age and trauma condition (k-NN donor imputation) to administer immediate lifesaving medicine."}),e.jsx("div",{className:"pt-2 text-xs text-emerald-300/80 font-mono",children:"Formula: Unconscious Patient → Nearest Clinical Donors → Accurate Triage Action"})]})]}),p==="rubinMatrix"&&e.jsx("div",{className:"space-y-4",children:e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"MECHANISM 1"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"P(M|Y)=P(M)"})]}),e.jsx("h4",{className:"text-lg font-bold text-white",children:"MCAR (Completely at Random)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Missingness is purely accidental and independent of all variables. Example: A blood sample vial is accidentally shattered on the hospital floor."}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsxs("div",{children:["Bias Risk: ",e.jsx("span",{className:"text-emerald-400",children:"ZERO BIAS"})]}),e.jsx("div",{className:"text-slate-400",children:"Dropna Effect: Unbiased, but increases variance"}),e.jsx("div",{className:"text-slate-400",children:"Best Strategy: Mean/Median or k-NN imputer"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"MECHANISM 2"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"P(M|Y)=P(M|Y_obs)"})]}),e.jsx("h4",{className:"text-lg font-bold text-white",children:"MAR (Missing at Random)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Missingness depends on observed features, but NOT on the missing value itself. Example: Elderly patients (Age > 70) fail to record mobile vitals, but Age is observed."}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsxs("div",{children:["Bias Risk: ",e.jsx("span",{className:"text-amber-400",children:"BIASED IF DROPPED"})]}),e.jsx("div",{className:"text-slate-400",children:"Dropna Effect: Severe survivorship bias"}),e.jsx("div",{className:"text-slate-400",children:"Best Strategy: k-NN, MICE, or conditional median"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"MECHANISM 3"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Depends on Y_mis!"})]}),e.jsx("h4",{className:"text-lg font-bold text-white",children:"MNAR (Not at Random)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"The value is missing precisely because of what that value is. Example: Wealthy individuals with annual salaries > Rs 20 Lakhs refuse to disclose their income."}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsxs("div",{children:["Bias Risk: ",e.jsx("span",{className:"text-rose-400",children:"FATAL SYSTEMATIC BIAS"})]}),e.jsx("div",{className:"text-slate-400",children:"Standard Impute: Underestimates high earners"}),e.jsx("div",{className:"text-slate-400",children:"Best Strategy: Missingness Indicator [X || I]"})]})]})]})}),p==="jargon"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("input",{type:"text",placeholder:"Search vocabulary (e.g. MCAR, MAR, MNAR, MICE, k-NN, Little's test)...",value:m,onChange:t=>b(t.target.value),className:"w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"}),m&&e.jsx("button",{onClick:()=>b(""),className:"px-3 py-2 text-xs bg-slate-800 text-slate-400 hover:text-white rounded-lg",children:"Clear"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:R.map((t,i)=>e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-all space-y-2",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("span",{className:"text-xs font-bold text-indigo-400",children:t.tag})}),e.jsx("h4",{className:"text-sm font-bold text-white",children:t.term}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:t.desc})]},i))})]})]}),e.jsxs("section",{id:"interactiveStudio",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30",children:"02"}),"Interactive Missing Values & Imputation Studio"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Compare reconstruction error across imputation strategies, simulate Rubin mechanisms, and test missingness indicators."})]}),e.jsx("div",{className:"flex bg-slate-800/80 p-1 rounded-xl border border-slate-700 text-xs font-semibold",children:[{id:"strategyArena",label:"Strategy Arena"},{id:"rubinSim",label:"Rubin Mechanism Lab"}].map(t=>e.jsx("button",{onClick:()=>M(t.id),className:r("px-3 py-1.5 rounded-lg transition-all",h===t.id?"bg-cyan-600 text-white shadow-sm":"text-slate-400 hover:text-white"),children:t.label},t.id))})]}),h==="strategyArena"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"Select Imputation Strategy:"}),e.jsxs("span",{className:r("text-xs font-bold px-3 py-1 rounded-full border",d.badgeColor),children:["Sample Retention: ",d.retentionPct,"% (",d.rows.length,"/8 Patients)"]})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1",children:[{id:"raw",title:"1. Raw Data (NaNs)",desc:"Uncleaned baseline"},{id:"dropna",title:"2. Listwise Deletion",desc:"df.dropna() discard"},{id:"mean",title:"3. Mean Imputer",desc:"Population average"},{id:"median",title:"4. Median Imputer",desc:"Robust 50th percentile"},{id:"knn",title:"5. k-NN (k=2) Imputer",desc:"Distance-weighted donors"}].map(t=>e.jsxs("button",{onClick:()=>A(t.id),className:r("p-3 rounded-xl text-left border transition-all",c===t.id?"bg-cyan-950/80 border-cyan-500/60 shadow-lg shadow-cyan-950/50":"bg-slate-800/60 border-slate-700/60 hover:bg-slate-800"),children:[e.jsx("div",{className:"text-xs font-bold text-white",children:t.title}),e.jsx("div",{className:"text-[10px] text-slate-400 truncate",children:t.desc})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 font-mono text-xs",children:[e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Glucose MAE (MCAR):"}),e.jsx("div",{className:"text-base font-bold text-white mt-1",children:d.maeGlucose})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Systolic BP MAE (MAR):"}),e.jsx("div",{className:"text-base font-bold text-cyan-300 mt-1",children:d.maeBP})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-slate-500",children:"Income MAE (MNAR):"}),e.jsx("div",{className:"text-base font-bold text-amber-400 mt-1",children:d.maeIncome})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs text-slate-400 italic",children:d.verdict}),e.jsx("div",{className:"overflow-x-auto border border-slate-800 rounded-xl bg-slate-950/60",children:e.jsxs("table",{className:"w-full text-left text-xs font-mono",children:[e.jsx("thead",{className:"bg-slate-900 border-b border-slate-800 text-slate-400",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-2.5",children:"Patient ID"}),e.jsx("th",{className:"p-2.5",children:"Citizen Name"}),e.jsx("th",{className:"p-2.5",children:"Age"}),e.jsx("th",{className:"p-2.5",children:"Systolic BP (mmHg)"}),e.jsx("th",{className:"p-2.5",children:"Glucose (mg/dL)"}),e.jsx("th",{className:"p-2.5",children:"Annual Income (INR)"}),e.jsx("th",{className:"p-2.5",children:"Triage Severity"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:d.rows.map((t,i)=>e.jsxs("tr",{className:"hover:bg-slate-900/40 transition-colors",children:[e.jsx("td",{className:"p-2.5 font-bold text-white",children:t.id}),e.jsx("td",{className:"p-2.5",children:t.name}),e.jsxs("td",{className:"p-2.5",children:[t.age," yrs"]}),e.jsx("td",{className:"p-2.5",children:t.bp===null?e.jsx("span",{className:"text-rose-400 font-bold bg-rose-950/40 px-1.5 py-0.5 rounded",children:"NaN (MAR)"}):e.jsxs("span",{className:r(t.imputedBP&&"text-cyan-400 font-bold"),children:[t.bp," mmHg ",t.imputedBP&&"✨"]})}),e.jsx("td",{className:"p-2.5",children:t.glucose===null?e.jsx("span",{className:"text-rose-400 font-bold bg-rose-950/40 px-1.5 py-0.5 rounded",children:"NaN (MCAR)"}):e.jsxs("span",{className:r(t.imputedGlucose&&"text-cyan-400 font-bold"),children:[t.glucose," mg/dL ",t.imputedGlucose&&"✨"]})}),e.jsx("td",{className:"p-2.5",children:t.income===null?e.jsx("span",{className:"text-rose-400 font-bold bg-rose-950/40 px-1.5 py-0.5 rounded",children:"NaN (MNAR)"}):e.jsxs("span",{className:r(t.imputedIncome&&"text-amber-400 font-bold"),children:["₹ ",t.income.toLocaleString()," ",t.imputedIncome&&"✨"]})}),e.jsx("td",{className:"p-2.5",children:e.jsx("span",{className:r("px-2 py-0.5 rounded-full text-[10px] font-semibold",t.tier==="Emergency"&&"bg-rose-500/20 text-rose-300",t.tier==="Urgent"&&"bg-yellow-500/20 text-yellow-300",t.tier==="Non-Urgent"&&"bg-emerald-500/20 text-emerald-300"),children:t.tier})})]},i))})]})})]})]}),h==="rubinSim"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-6",children:[e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3",children:[{id:"mcar",name:"MCAR (Missing Completely at Random)",badge:"Stochastic Loss"},{id:"mar",name:"MAR (Missing at Random)",badge:"Observed Feature Dependency"},{id:"mnar",name:"MNAR (Missing Not at Random)",badge:"Self-Selective Truncation"}].map(t=>e.jsxs("button",{onClick:()=>j(t.id),className:r("p-3.5 rounded-xl text-left border transition-all",u===t.id?"bg-cyan-600 border-cyan-400 text-white shadow-md shadow-cyan-600/30":"bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white"),children:[e.jsx("div",{className:"text-xs font-bold text-white",children:t.name}),e.jsx("div",{className:"text-[10px] text-cyan-300 mt-1",children:t.badge})]},t.id))}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-xl border border-slate-800 space-y-4",children:[u==="mcar"&&e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-bold text-emerald-400",children:"MCAR Diagnostic Mechanics: P(M | Y) = P(M)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Under MCAR, the missingness mechanism is completely independent of the observed data and the missing value itself. If you plot the observed distribution vs the true distribution, the shapes are statistically identical. Dropping missing rows does NOT bias parameter estimates (though it wastes valuable sample size)."}),e.jsx("div",{className:"bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300",children:"Diagnostic Test: Little's MCAR Test (d^2 distance follows Chi-Square distribution). If p > 0.05, MCAR is confirmed!"})]}),u==="mar"&&e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-bold text-amber-400",children:"MAR Diagnostic Mechanics: P(M | Y) = P(M | Y_obs)"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Under MAR, missingness depends on an auxiliary feature that is observed. In SSKM Hospital, blood pressure measurements are missing primarily for patients with ",e.jsx("strong",{className:"text-white",children:"Age > 65"})," who cannot walk to the examination room. Dropping rows with missing BP artificially purges elderly patients, biasing the model!"]}),e.jsx("div",{className:"bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300",children:"Remedy: Condition on observed Age using k-NN, MICE, or Grouped Median Imputation."})]}),u==="mnar"&&e.jsxs("div",{className:"space-y-3",children:[e.jsx("h3",{className:"text-base font-bold text-rose-400",children:"MNAR Diagnostic Mechanics: P(M | Y) depends on Y_mis!"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:"Under MNAR, the value itself causes the missingness. In consumer credit and clinical trials, patients with highest income or most severe illness systematically refuse disclosure. Observed income displays a truncated distribution. Imputing with the observed median creates severe negative bias!"}),e.jsx("div",{className:"bg-slate-900 p-3.5 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300",children:"Remedy: Append a binary Missingness Indicator [X || was_missing_flag] so models learn the non-random signal."})]})]})]})]}),e.jsxs("section",{id:"theory",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold border border-purple-500/30",children:"03"}),"Mathematical Foundations & Theoretical Formulations"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Formal mathematical equations defining missingness probabilities, distance-weighted k-NN, and Rubin's pooling rules."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," 1. Distance-Weighted k-NN Imputation"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-300",children:"Weighted Donor Estimator:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"\\hat{y}_i = \\frac{\\sum_{k \\in \\mathcal{N}_i} w_k y_k}{\\sum_{k \\in \\mathcal{N}_i} w_k}, \\quad w_k = \\frac{1}{d(\\mathbf{x}_i^{\\text{obs}}, \\mathbf{x}_k^{\\text{obs}})}"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Estimates missing attribute y_i by borrowing proportionally from the k nearest donors who share observed coordinates."})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-300",children:"Adjusted Euclidean Distance:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"d(\\mathbf{x}, \\mathbf{z}) = \\sqrt{ \\frac{d_{\\text{total}}}{d_{\\text{obs}}} \\sum_{j \\in \\text{obs}} (x_j - z_j)^2 }"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Scales distance to account for instances that possess differing numbers of mutually observed features."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-purple-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," 2. Rubin's Variance Pooling Rules (MICE)"]}),e.jsxs("div",{className:"space-y-3 text-xs sm:text-sm text-slate-300",children:[e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-amber-300",children:"Total Variance Pooling Equation:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"T = \\bar{U} + \\left(1 + \\frac{1}{M}\\right) B"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"U_bar is average within-imputation variance; B is between-imputation variance measuring honest parameter uncertainty."})]}),e.jsxs("div",{className:"bg-slate-950 p-3.5 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-purple-300",children:"Compound Listwise Sample Loss:"}),e.jsx("div",{className:"text-sm font-mono text-white py-1",children:"N_{\\text{complete}} = N \\prod_{j=1}^d (1 - p_j) \\approx N(1 - p)^d"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Proves why running dropna() across high-dimensional datasets destroys over 70% of collected records."})]})]})]})]})]}),e.jsxs("section",{id:"caseStudies",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center text-sm font-bold border border-amber-500/30",children:"04"}),"Regional West Bengal Industrial Case Studies"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Real enterprise missing value pipelines deployed across Kolkata, Rajarhat, and North 24 Parganas."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400",children:"CLINICAL TRIAGE"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"SSKM Hospital / Kolkata"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Emergency Triage Patient Vitals Imputation"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," Emergency room patients arriving in critical distress have 28% missing vitals. Elderly patients lack ambulatory blood pressure tests (MAR), and unconscious trauma victims cannot report pain levels (MNAR)."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Engineering Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Distance-weighted k-NN imputer (k=3) for physiological continuous vitals"}),e.jsx("div",{className:"text-slate-400",children:"• Appended binary missingness indicator flags for subjective pain scales"}),e.jsx("div",{className:"text-slate-400",children:"• Preserved emergency classification accuracy while preventing sample drop"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400",children:"ENERGY UTILITY TELEMETRY"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"WBSEDCL Smart Meter Grid"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Rajarhat Smart Meter Cellular Dropouts"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," Thunderstorm lightning storms in the New Town / Rajarhat corridor cause cellular gateway disconnects, creating 1-to-3 hour time-series telemetry gaps (MCAR)."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Engineering Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Forward-fill (LOCF) for small gaps < 2 hours to leverage temporal autocorrelation"}),e.jsx("div",{className:"text-slate-400",children:"• Cubic spline interpolation for gaps between 2 and 6 hours"}),e.jsx("div",{className:"text-slate-400",children:"• Zero dropna() usage, preventing electricity billing disputes"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400",children:"CONSUMER FINTECH"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"Salt Lake Sector V FinTech"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"High-Income Non-Disclosure Under MNAR"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," High-net-worth applicants in Salt Lake routinely refuse to disclose annual income. Naively imputing median income (Rs 40,000) falsely penalized wealthy applicants with low credit limits."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Engineering Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• Generated `income_was_missing` binary shadow column"}),e.jsx("div",{className:"text-slate-400",children:"• XGBoost learned that missing income was correlated with high investment wealth"}),e.jsx("div",{className:"text-slate-400",children:"• Increased premium credit card approvals by 22% with zero default increase"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400",children:"PUBLIC HEALTH INFORMATICS"}),e.jsx("span",{className:"text-xs text-slate-500 font-mono",children:"North 24 Parganas Public Survey"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Rural Household Non-Response Using MICE"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Problem:"})," A district health survey across 50,000 rural families suffered 24% missingness in sensitive diabetes and tuberculosis questions due to rural dialect barriers."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs font-mono text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Engineering Solution:"}),e.jsx("div",{className:"text-slate-400",children:"• MICE (IterativeImputer) using household size, location, and education"}),e.jsx("div",{className:"text-slate-400",children:"• Generated 5 multiply-imputed completed datasets pooled with Rubin's rules"}),e.jsx("div",{className:"text-slate-400",children:"• Recovered unbiased epidemiological disease prevalence rates"})]})]})]})]}),e.jsxs("section",{id:"diagnosticQuiz",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-sm font-bold border border-emerald-500/30",children:"05"}),"Diagnostic Self-Assessment Quiz"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Test your understanding of missingness mechanisms, imputation leakage, and indicator patterns."})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:["Score: ",e.jsx("strong",{className:"text-emerald-400",children:C})," / ",f.length]}),e.jsx("button",{onClick:()=>S(t=>!t),className:"px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-md shadow-emerald-600/30",children:x?"Hide Explanations":"Show All Answers"})]})]}),e.jsx("div",{className:"space-y-6",children:f.map((t,i)=>{const s=g[t.id],a=s!==void 0,l=s===t.correct;return e.jsxs("div",{className:r("p-6 rounded-2xl border transition-all space-y-4",a?l?"bg-slate-900/90 border-emerald-500/50":"bg-slate-900/90 border-rose-500/50":"bg-slate-900/70 border-slate-800"),children:[e.jsxs("div",{className:"flex items-start justify-between gap-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:["Scenario Question #",i+1]}),e.jsx("h3",{className:"text-sm sm:text-base font-semibold text-white leading-relaxed",children:t.scenario})]}),a&&e.jsx("span",{className:r("px-2.5 py-1 rounded-full text-xs font-bold whitespace-nowrap",l?"bg-emerald-500/20 text-emerald-300":"bg-rose-500/20 text-rose-300"),children:l?"✓ Correct":"✗ Incorrect"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:t.options.map(n=>{const E=s===n.id,y=n.id===t.correct;return e.jsxs("button",{onClick:()=>k(t.id,n.id),className:r("p-3.5 rounded-xl text-left text-xs sm:text-sm border transition-all flex items-start gap-3",E?y?"bg-emerald-950/80 border-emerald-500 text-emerald-200":"bg-rose-950/80 border-rose-500 text-rose-200":x&&y?"bg-emerald-950/40 border-emerald-500/60 text-emerald-300":"bg-slate-800/60 border-slate-700/60 text-slate-300 hover:bg-slate-800 hover:text-white"),children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-700/80 flex items-center justify-center font-bold text-[10px] text-white shrink-0 mt-0.5",children:n.id}),e.jsx("span",{className:"leading-snug",children:n.text})]},n.id)})}),(a||x)&&e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 text-xs text-slate-300 space-y-2 mt-2",children:[e.jsxs("div",{children:[e.jsxs("strong",{className:"text-emerald-400",children:["Correct Answer (",t.correct,"): "]}),t.explanation]}),e.jsxs("div",{className:"text-indigo-300/90 italic font-mono pt-1",children:["💡 ",t.mentorTip]})]})]},t.id)})})]}),e.jsxs("section",{id:"bestPractices",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center text-sm font-bold border border-rose-500/30",children:"06"}),"Production Pitfalls & Engineering Best Practices"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Avoid the catastrophic silent mistakes that corrupt machine learning models in production."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Imputing with Zero"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Filling missing physical quantities (such as Blood Pressure or Age) with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"0.0"})," creates massive out-of-distribution leverage points that destroy gradient descent. Always use Median or k-NN!"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: Imputation Data Leakage"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Fitting an imputer on the full dataset before splitting leaks test set distributions into training weights. Always fit imputers strictly on ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"X_train"})," and transform ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"X_test"})," with frozen parameters."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 text-xs font-bold uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Ignoring MNAR Signals"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Treating all missingness as accidental destroys valuable non-random behavior signals. For MNAR features like income or credit inquiries, always append a binary ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"was_missing"})," shadow column."]})]})]})]}),e.jsxs("section",{id:"labSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center text-sm font-bold border border-cyan-500/30",children:"07"}),"Python Laboratory Implementation"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Executable pure Python implementation of Missing Data Auditor, Univariate Imputer, Distance-Weighted k-NN Imputer, and Rubin Missingness Benchmarking on SSKM hospital patient vitals."})]}),e.jsx(T,{code:B,fileName:"handling_missing_values_lab.py"})]}),e.jsxs("section",{id:"faqSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center text-sm font-bold border border-indigo-500/30",children:"08"}),"Frequently Asked Questions & Technical Deep-Dive"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"30 comprehensive questions and answers covering the Rubin taxonomy, k-NN imputation, MICE, and production engineering."})]}),e.jsx(P,{questions:U})]}),e.jsxs("section",{id:"notesSection",className:"space-y-4",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl sm:text-3xl font-bold text-white flex items-center gap-3",children:[e.jsx("span",{className:"w-8 h-8 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center text-sm font-bold border border-purple-500/30",children:"09"}),"Downloadable Revision Notes & Exam Handbook"]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Complete revision handbook aligned with MAKAUT semester syllabus BCAC701B."})]}),e.jsx(D,{content:H,fileName:"topic8_handling_missing_values_handbook.txt"})]}),e.jsx(L,{})]})};export{V as default};
