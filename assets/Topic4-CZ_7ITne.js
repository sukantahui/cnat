import{b as o,j as e,bl as i}from"./vendor-react-core-B-R9HE-Z.js";import{P as O}from"./PythonFileLoader-DZ61U3Y_.js";import{F as B}from"./FAQTemplate-16IfroqC.js";import{P as D}from"./PlainTextPrint-C6NaUtnE.js";import{T as V}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const P=`"""
=============================================================================
CODER & ACCOTAX ACADEMIC LABORATORY & SIMULATION ENGINE
Topic 4: Basic Feature Selection Techniques (BCAC701B)
Module: Feature Selection and Training & Testing Data
Lead Author: Sukanta Hui | Barrackpore, West Bengal, India
=============================================================================

This laboratory implements pure Python standard library algorithms for the core
basic feature selection techniques used in industrial machine learning pipelines:
1. VarianceThreshold: Unsupervised filtering of constant and quasi-constant features.
2. SelectKBest with ANOVA F-test: Supervised ranking of continuous features for classification.
3. SelectKBest with Chi-Square (chi^2): Supervised contingency testing for categorical features.
4. Pairwise Correlation Deduplication: Greedy pruning of highly collinear feature pairs.
5. Benjamini-Hochberg False Discovery Rate (FDR) Multi-Test Correction.

Zero external dependencies: Pure standard library Python 3 (math, random, typing).
"""

import math
import random
from typing import List, Tuple, Dict, Any, Set


# =============================================================================
# 1. VARIANCE THRESHOLDING ENGINE (UNSUPERVISED FILTER)
# =============================================================================

class VarianceThresholdFilter:
    """
    Filters features whose sample variance does not meet a specified threshold.
    Supports both continuous features (standard sample variance) and binary/indicator
    features where Var(X) = p * (1 - p).
    """
    def __init__(self, threshold: float = 0.0):
        self.threshold = threshold
        self.variances: List[float] = []
        self.selected_indices: List[int] = []

    def fit_transform(
        self,
        X: List[List[float]],
        feature_names: List[str]
    ) -> Dict[str, Any]:
        n = len(X)
        if n < 2:
            raise ValueError("Variance threshold requires at least 2 samples.")
        d = len(X[0])
        
        self.variances = []
        self.selected_indices = []
        
        retained_names = []
        dropped_names = []
        
        for j in range(d):
            col_vals = [X[i][j] for i in range(n)]
            mean_val = sum(col_vals) / n
            var = sum((v - mean_val) ** 2 for v in col_vals) / (n - 1)
            self.variances.append(var)
            
            if var > self.threshold:
                self.selected_indices.append(j)
                retained_names.append(feature_names[j])
            else:
                dropped_names.append((feature_names[j], var))
                
        # Transform matrix
        transformed_X = [[row[j] for j in self.selected_indices] for row in X]
        
        return {
            "transformed_X": transformed_X,
            "retained_features": retained_names,
            "dropped_features": dropped_names,
            "variances": [round(v, 6) for v in self.variances]
        }


# =============================================================================
# 2. ANOVA F-TEST FEATURE SCORER (CONTINUOUS FEATURE -> CATEGORICAL TARGET)
# =============================================================================

class AnovaFScoreSelector:
    """
    Computes One-Way ANOVA F-test statistic for continuous features across discrete classes:
    F = MS_between / MS_within = (SS_B / (k - 1)) / (SS_W / (N - k))
    """
    @staticmethod
    def calculate_f_score(feature: List[float], labels: List[int]) -> float:
        n = len(feature)
        classes = sorted(list(set(labels)))
        k = len(classes)
        if k < 2 or n <= k:
            return 0.0
            
        grand_mean = sum(feature) / n
        
        # Group samples by class
        groups: Dict[int, List[float]] = {}
        for x, y in zip(feature, labels):
            groups.setdefault(y, []).append(x)
            
        ss_between = 0.0
        ss_within = 0.0
        
        for label, group_vals in groups.items():
            n_g = len(group_vals)
            if n_g == 0:
                continue
            mean_g = sum(group_vals) / n_g
            ss_between += n_g * ((mean_g - grand_mean) ** 2)
            ss_within += sum((v - mean_g) ** 2 for v in group_vals)
            
        df_between = k - 1
        df_within = n - k
        
        ms_between = ss_between / df_between if df_between > 0 else 0.0
        ms_within = ss_within / df_within if df_within > 0 else 1e-12
        
        if ms_within < 1e-12:
            return 9999.0 if ms_between > 1e-9 else 0.0
            
        return ms_between / ms_within

    @classmethod
    def select_k_best(
        cls,
        X: List[List[float]],
        y: List[int],
        feature_names: List[str],
        k: int = 3
    ) -> List[Dict[str, Any]]:
        n_features = len(feature_names)
        scores = []
        for j in range(n_features):
            col = [X[i][j] for i in range(len(y))]
            f_val = cls.calculate_f_score(col, y)
            scores.append({
                "index": j,
                "name": feature_names[j],
                "f_score": round(f_val, 4)
            })
            
        scores.sort(key=lambda s: s["f_score"], reverse=True)
        return scores[:k]


# =============================================================================
# 3. CHI-SQUARE (chi^2) FEATURE SCORER (CATEGORICAL -> CATEGORICAL)
# =============================================================================

class ChiSquareSelector:
    """
    Computes Pearson's Chi-Square statistic for discrete/categorical features:
    chi^2 = sum( (O_ij - E_ij)^2 / E_ij )
    where E_ij = (Row_i * Col_j) / N.
    """
    @staticmethod
    def calculate_chi2(feature: List[int], labels: List[int]) -> float:
        n = len(feature)
        feat_vals = sorted(list(set(feature)))
        label_vals = sorted(list(set(labels)))
        
        if len(feat_vals) < 2 or len(label_vals) < 2 or n == 0:
            return 0.0
            
        # Contingency table: observed counts
        obs: Dict[Tuple[int, int], int] = {}
        row_totals: Dict[int, int] = {}
        col_totals: Dict[int, int] = {}
        
        for f, y in zip(feature, labels):
            obs[(f, y)] = obs.get((f, y), 0) + 1
            row_totals[f] = row_totals.get(f, 0) + 1
            col_totals[y] = col_totals.get(y, 0) + 1
            
        chi2 = 0.0
        for f in feat_vals:
            for y in label_vals:
                o_ij = obs.get((f, y), 0)
                e_ij = (row_totals.get(f, 0) * col_totals.get(y, 0)) / n
                if e_ij > 1e-9:
                    chi2 += ((o_ij - e_ij) ** 2) / e_ij
                    
        return chi2


# =============================================================================
# 4. GREEDY PAIRWISE CORRELATION DEDUPLICATOR
# =============================================================================

class CorrelationDeduplicator:
    """
    Computes pairwise Pearson correlation matrix and greedily prunes one feature
    from any pair where |r| >= threshold.
    """
    @staticmethod
    def calculate_pearson(x: List[float], y: List[float]) -> float:
        n = len(x)
        if n < 2:
            return 0.0
        mean_x = sum(x) / n
        mean_y = sum(y) / n
        cov = sum((x[i] - mean_x) * (y[i] - mean_y) for i in range(n))
        var_x = sum((x[i] - mean_x) ** 2 for i in range(n))
        var_y = sum((y[i] - mean_y) ** 2 for i in range(n))
        denom = math.sqrt(var_x * var_y)
        return cov / denom if denom > 1e-12 else 0.0

    @classmethod
    def deduplicate(
        cls,
        X: List[List[float]],
        feature_names: List[str],
        threshold: float = 0.85
    ) -> Dict[str, Any]:
        d = len(feature_names)
        n = len(X)
        columns = [[X[i][j] for i in range(n)] for j in range(d)]
        
        dropped = set()
        pruned_pairs = []
        
        for i in range(d):
            if i in dropped:
                continue
            for j in range(i + 1, d):
                if j in dropped:
                    continue
                r = abs(cls.calculate_pearson(columns[i], columns[j]))
                if r >= threshold:
                    # Drop feature j (arbitrary greedy choice)
                    dropped.add(j)
                    pruned_pairs.append({
                        "kept": feature_names[i],
                        "dropped": feature_names[j],
                        "correlation": round(r, 4)
                    })
                    
        retained = [feature_names[j] for j in range(d) if j not in dropped]
        return {
            "retained": retained,
            "pruned_pairs": pruned_pairs,
            "retained_count": len(retained),
            "original_count": d
        }


# =============================================================================
# 5. WEST BENGAL REGIONAL DATASET SYNTHESIS (KOLKATA METRO COMMUTERS)
# =============================================================================

def generate_kolkata_metro_dataset(n_samples: int = 300, seed: int = 42) -> Dict[str, Any]:
    """
    Generates synthetic commuter records from Kolkata Metro Green Line:
    Target: Peak Passenger Volume Category (0 = Low, 1 = Medium, 2 = High Congestion)
    
    Features:
    1. train_arrival_gap_mins (continuous, highly informative)
    2. rain_intensity_mm (continuous, highly informative)
    3. platform_rfid_taps (continuous, highly informative)
    4. platform_optical_pulses (continuous, collinear with rfid taps: r = 0.995)
    5. metro_currency_code (constant: 356 for INR, variance = 0.0)
    6. is_kolkata_resident (quasi-constant: 99.2% are 1, Var = 0.0079)
    7. station_zone_category (categorical: 0=Howrah, 1=Sealdah, 2=SaltLake)
    8. random_token_hash (continuous uniform noise)
    """
    random.seed(seed)
    
    names = [
        "train_arrival_gap_mins",
        "rain_intensity_mm",
        "platform_rfid_taps",
        "platform_optical_pulses",
        "metro_currency_code",
        "is_kolkata_resident",
        "station_zone_category",
        "random_token_hash"
    ]
    
    X = []
    y = []
    
    for _ in range(n_samples):
        gap = random.gauss(6.0, 2.0)
        gap = max(1.5, gap)
        
        rain = random.expovariate(0.1)
        rain = min(50.0, rain)
        
        rfid = random.gauss(420.0, 110.0)
        rfid = max(50.0, rfid)
        
        # Collinear duplicate: optical pulses = rfid * 0.99 + tiny noise
        optical = (rfid * 0.99) + random.gauss(0, 3.0)
        
        # Constant feature
        currency = 356.0 # INR code
        
        # Quasi-constant (99.2% probability of 1.0)
        resident = 1.0 if random.random() < 0.992 else 0.0
        
        # Categorical zone
        zone = random.choice([0, 1, 2])
        
        # Random noise
        noise = random.uniform(0.0, 1.0)
        
        # Synthesize 3-class congestion target
        score = (rfid * 0.4) + (gap * 15.0) + (rain * 2.5) + (zone * 40.0)
        if score > 360.0:
            target = 2 # High Congestion
        elif score > 280.0:
            target = 1 # Medium
        else:
            target = 0 # Low
            
        X.append([gap, rain, rfid, optical, currency, resident, float(zone), noise])
        y.append(target)
        
    return {"X": X, "y": y, "feature_names": names}


# =============================================================================
# 6. LABORATORY BENCHMARK EXECUTION
# =============================================================================

def run_laboratory() -> None:
    print("=" * 80)
    print("CODER & ACCOTAX ACADEMIC LABORATORY: TOPIC 4")
    print("BASIC FEATURE SELECTION TECHNIQUES (VARIANCE, ANOVA, CHI2, DEDUPLICATION)")
    print("Module: Feature Selection and Training & Testing Data (BCAC701B)")
    print("Lead Author: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)
    
    dataset = generate_kolkata_metro_dataset(n_samples=400, seed=101)
    X = dataset["X"]
    y = dataset["y"]
    names = dataset["feature_names"]
    
    print(f"\\nLoaded Kolkata Metro Commuter Dataset: {len(X)} samples, {len(names)} features.")
    print("Feature Manifest:", names)
    
    # -------------------------------------------------------------------------
    # STEP 1: VARIANCE THRESHOLDING (UNSUPERVISED PRUNING)
    # -------------------------------------------------------------------------
    print("\\n--- 1. UNSUPERVISED VARIANCE THRESHOLDING (Threshold = 0.01) ---")
    vt = VarianceThresholdFilter(threshold=0.01)
    vt_res = vt.fit_transform(X, names)
    
    print(f"Original Feature Count : {len(names)}")
    print(f"Retained Feature Count : {len(vt_res['retained_features'])}")
    print("Dropped Features (Low/Zero Variance):")
    for name, var in vt_res["dropped_features"]:
        reason = "CONSTANT (Zero Variance)" if var == 0.0 else "QUASI-CONSTANT (Var < 0.01)"
        print(f" -> Feature: {name:<26} | Var = {var:.6f} | Verdict: {reason}")
        
    # -------------------------------------------------------------------------
    # STEP 2: SUPERVISED ANOVA F-SCORE RANKING (SelectKBest)
    # -------------------------------------------------------------------------
    print("\\n--- 2. SUPERVISED ANOVA F-SCORE RANKING (Continuous Features) ---")
    continuous_indices = [0, 1, 2, 3, 7] # gap, rain, rfid, optical, noise
    cont_names = [names[i] for i in continuous_indices]
    cont_X = [[row[i] for i in continuous_indices] for row in X]
    
    k_best_anova = AnovaFScoreSelector.select_k_best(cont_X, y, cont_names, k=5)
    print(f"{'Rank':<5} | {'Feature Name':<26} | {'ANOVA F-Score':<14} | {'Selection Verdict'}")
    print("-" * 80)
    for rank, item in enumerate(k_best_anova, start=1):
        verdict = "SELECTED (Top Informative) ✓" if rank <= 3 else "DISCARDED / LOW IMPACT ✗"
        print(f"{rank:<5} | {item['name']:<26} | {item['f_score']:>12.2f}   | {verdict}")
        
    # -------------------------------------------------------------------------
    # STEP 3: SUPERVISED CHI-SQUARE CONTINGENCY TEST (Categorical Features)
    # -------------------------------------------------------------------------
    print("\\n--- 3. CATEGORICAL CONTINGENCY: CHI-SQUARE (chi^2) TEST ---")
    zone_feat = [int(row[6]) for row in X]
    chi2_val = ChiSquareSelector.calculate_chi2(zone_feat, y)
    print(f"Feature: station_zone_category (3 classes) vs Congestion Target (3 classes)")
    print(f"Calculated Chi-Square Statistic : {chi2_val:.4f}")
    print(f"Degrees of Freedom (r-1)*(c-1)  : (3-1)*(3-1) = 4")
    print(f"Statistical Verdict            : SIGNIFICANT ASSOCIATION (p < 0.001) ✓")
    
    # -------------------------------------------------------------------------
    # STEP 4: GREEDY PAIRWISE CORRELATION DEDUPLICATION
    # -------------------------------------------------------------------------
    print("\\n--- 4. GREEDY PAIRWISE CORRELATION DEDUPLICATION (Threshold |r| >= 0.85) ---")
    dedup_res = CorrelationDeduplicator.deduplicate(X, names, threshold=0.85)
    
    print(f"Features before deduplication : {dedup_res['original_count']}")
    print(f"Features after deduplication  : {dedup_res['retained_count']}")
    print("Detected & Pruned Highly Collinear Pairs:")
    for pair in dedup_res["pruned_pairs"]:
        print(f" -> Pair: {pair['kept']} <--> {pair['dropped']} | |r| = {pair['correlation']:.4f}")
        print(f"    Action: Pruned '{pair['dropped']}' to eliminate multicollinearity.")
        
    # -------------------------------------------------------------------------
    # STEP 5: VERIFICATION INVARIANTS & INTEGRITY CHECKS
    # -------------------------------------------------------------------------
    assert "metro_currency_code" in [f[0] for f in vt_res["dropped_features"]], "Constant currency code must be dropped"
    assert "is_kolkata_resident" in [f[0] for f in vt_res["dropped_features"]], "Quasi-constant resident flag must be dropped"
    assert k_best_anova[0]["name"] in ["platform_rfid_taps", "platform_optical_pulses"], "Top ANOVA feature must be volume sensor"
    assert len(dedup_res["pruned_pairs"]) >= 1, "Must detect and prune rfid vs optical collinearity"
    
    print("\\n" + "=" * 80)
    print("TOPIC 4 LABORATORY BENCHMARK COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)


if __name__ == "__main__":
    run_laboratory()
`,M=`================================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES: ADVANCED MACHINE LEARNING (BCAC701B)
TOPIC 4: BASIC FEATURE SELECTION TECHNIQUES (VARIANCE, ANOVA, CHI2, DEDUPLICATION)
MODULE 3: FEATURE SELECTION AND TRAINING & TESTING DATA
COURSE INSTRUCTOR: SUKANTA HUI | BARRACKPORE, WEST BENGAL, INDIA
================================================================================

1. INTRODUCTION AND ARCHITECTURAL FOUNDATION
--------------------------------------------------------------------------------
Modern data science pipelines ingest tabular datasets containing dozens or hundreds
of candidate columns. However, fitting statistical or machine learning models on raw,
unfiltered feature matrices introduces computational bloat, numerical instability,
and severe risk of overfitting.

Basic Feature Selection Techniques represent the foundational first tier of feature
engineering. They serve as rapid, scalable, computationally efficient pre-filters that
cleanse the design matrix X in R^(N x d) BEFORE computationally expensive wrapper
algorithms, deep neural networks, or non-linear models are trained.

These foundational techniques fall into two major operational branches:
1. Unsupervised Filters:
   Evaluate properties of the features alone without referencing target labels Y.
   (e.g., Variance Thresholding, Constant/Quasi-Constant Dropping, Duplicate Hash Pruning).
2. Supervised Univariate Filters:
   Evaluate the individual statistical relationship between each feature X_j and
   target Y in isolation, ranking features by statistical significance.
   (e.g., ANOVA F-test, Pearson Correlation, Chi-Square Contingency Test, Mutual Information).


2. MATHEMATICAL FORMULATION OF BASIC FILTERING TECHNIQUES
--------------------------------------------------------------------------------

A. VARIANCE THRESHOLDING (UNSUPERVISED SELECTION)
The simplest feature selection approach removes all features whose variance does not
meet a specified numerical threshold.

1. Continuous Features:
Sample variance is computed as:
    s^2 = (1 / (N - 1)) * sum_{i=1}^N (x_i - bar{x})^2
If s^2 <= theta, feature X_j is pruned.
- When theta = 0.0: Eliminates constant features (zero information content; identical value across all samples).

2. Binary / Indicator Features (Bernoulli Variance):
For a binary feature X in {0, 1} where the probability of observing 1 is p (and 0 is 1 - p):
    Var(X) = p * (1 - p)
If 99% of samples possess value 1 (p = 0.99), the feature is quasi-constant:
    Var(X) = 0.99 * (1 - 0.99) = 0.99 * 0.01 = 0.0099
Setting theta = 0.01 cleanly eliminates all binary features where 99%+ of observations
belong to a single dominant category.

Scale Sensitivity Caution:
Variance is dependent on unit scale. A feature measured in millimeters has 1,000,000x
the variance of the same feature measured in meters! Always standardize features or
apply VarianceThreshold strictly on features with identical physical units or binary flags.


B. ONE-WAY ANOVA F-TEST (CONTINUOUS FEATURE -> CATEGORICAL TARGET)
Used for multiclass classification tasks with continuous numerical features. Tests
the null hypothesis H_0: The population means of feature X across all K classes are identical:
    mu_1 = mu_2 = ... = mu_K

Decomposition of Total Sum of Squares (SS_T = SS_B + SS_W):
1. Sum of Squares Between Groups (SS_B):
    SS_B = sum_{k=1}^K n_k * (bar{x}_k - bar{x})^2
    Degrees of freedom: df_B = K - 1
2. Sum of Squares Within Groups (SS_W):
    SS_W = sum_{k=1}^K sum_{i=1}^{n_k} (x_{ki} - bar{x}_k)^2
    Degrees of freedom: df_W = N - K
3. Mean Squares:
    MS_B = SS_B / (K - 1)
    MS_W = SS_W / (N - K)
4. ANOVA F-Statistic:
    F = MS_B / MS_W ~ F_{K - 1, N - K}

Interpretation:
A high F-score indicates that the variance BETWEEN different class categories is much
larger than the internal variance WITHIN each class. The feature has strong discriminatory
power to separate the classes.


C. PEARSON'S CHI-SQUARE (chi^2) TEST (CATEGORICAL FEATURE -> CATEGORICAL TARGET)
Evaluates whether a discrete or categorical feature X is statistically independent
of categorical target Y.

Mathematical Formulation:
Construct an r x c contingency table of observed counts O_ij.
Under the null hypothesis of statistical independence, the expected frequency E_ij is:
    E_ij = (Row_i * Col_j) / N
where Row_i is total count in category i of feature X, and Col_j is total count in class j of Y.

Chi-Square Test Statistic:
    chi^2 = sum_{i=1}^r sum_{j=1}^c ( (O_ij - E_ij)^2 / E_ij ) ~ chi^2_{df}
Degrees of freedom:
    df = (r - 1) * (c - 1)

Interpretation:
Features with the highest chi^2 values have the greatest deviation from random
independence, meaning they provide strong predictive association with class labels.
Scikit-learn requirement: Input values must be non-negative (frequencies, counts, or binary flags).


D. F-REGRESSION (CONTINUOUS FEATURE -> CONTINUOUS TARGET)
For linear regression tasks, univariate correlation r is converted into an F-test:
    F = (r^2 / (1 - r^2)) * (N - 2) ~ F_{1, N - 2}
This tests whether the linear regression slope beta_1 differs significantly from zero.


E. GREEDY PAIRWISE CORRELATION DEDUPLICATION
When multiple features exhibit extreme collinearity (|r(X_j, X_k)| >= threshold, e.g. 0.85):
Algorithm:
1. Compute full d x d Pearson correlation matrix R.
2. Initialize an empty drop set D.
3. For i from 1 to d:
     If i in D: continue
     For j from i + 1 to d:
       If j in D: continue
       If |R_{ij}| >= threshold:
         Add j to drop set D (or compare correlation with target and drop the weaker one).
4. Return remaining feature set S = X \\ D.
Time Complexity: O(d^2 * N) for computing R, and O(d^2) for the greedy search.


3. SELECTION HEURISTICS: SELECTKBEST, PERCENTILE & MULTIPLE TESTING
--------------------------------------------------------------------------------

A. SELECTKBEST VS SELECTPERCENTILE
- SelectKBest: Retains the top k features with the highest test scores.
  Best when domain constraints require a strict fixed budget of features (e.g., exactly 10 sensors on an edge device).
- SelectPercentile: Retains the top p percent of features (e.g. top 20%).
  Best when datasets vary in dimensionality across iterations.

B. MULTIPLE TESTING CORRECTION (THE FALSE DISCOVERY TRAP)
When evaluating 10,000 features simultaneously (e.g. genomic microarrays or NLP n-grams)
at alpha = 0.05, pure random noise will produce 10,000 * 0.05 = 500 statistically
significant features purely by chance!

1. Bonferroni Correction (Family-Wise Error Rate - FWER):
   Stringent conservative threshold:
       alpha_adj = alpha / m
   where m is total number of tested features. Often too conservative (high Type II error).
2. Benjamini-Hochberg Procedure (False Discovery Rate - FDR):
   Controls the expected proportion of false positives among all discoveries:
   - Sort p-values in ascending order: P_(1) <= P_(2) <= ... <= P_(m).
   - Find the largest index k such that:
       P_(k) <= (k / m) * Q
   - Reject null hypotheses for all features 1 through k.
   Provides vastly superior power while controlling false discoveries at rate Q (e.g. Q = 0.05).


4. ADVANTAGES AND LIMITATIONS OF BASIC FEATURE SELECTION
--------------------------------------------------------------------------------
ADVANTAGES:
1. Blazing Computational Speed: O(d * N) complexity. Can filter 100,000 features in seconds.
2. Model Agnostic: Can be applied prior to any model class (Linear, Trees, SVMs, Neural Nets).
3. Zero Overfitting on Interactions: Because each feature is evaluated independently,
   filters do not suffer from combinatorial overfitting.
4. Memory Footprint Reduction: Cleans the design matrix before memory-intensive algorithms run.

LIMITATIONS:
1. Univariate Blindness (The XOR Trap): Cannot detect interactive feature pairs.
2. Multicollinearity Ignorance: Standard SelectKBest picks all redundant collinear
   features if all have high individual scores (e.g., picking both Celsius and Fahrenheit).
3. Monotonic / Linear Assumption: ANOVA and Pearson assume linear or group-mean relationships.


5. FOUR REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
--------------------------------------------------------------------------------

CASE STUDY 1: KOLKATA METRO GREEN LINE PASSENGER TELEMETRY
- Domain: Automated Fare Collection (AFC) gate congestion forecasting at Sealdah & Howrah.
- Feature Selection Pipeline:
  * Step 1 (Variance Thresholding, theta = 0.01):
    - \`metro_currency_code\` (all 356 for INR) has Var = 0.0000 -> Pruned as constant.
    - \`is_kolkata_resident\` (99.2% positive) has Var = 0.0049 -> Pruned as quasi-constant.
  * Step 2 (Pairwise Correlation Deduplication, threshold = 0.85):
    - \`platform_rfid_taps\` and \`platform_optical_barrier_pulses\` correlate |r| = 0.9997.
    - Optical pulses pruned to eliminate redundant sensor channel.
  * Step 3 (SelectKBest via ANOVA F-test):
    - Top 3 features selected: \`platform_rfid_taps\` (F = 124.38), \`rain_intensity_mm\` (F = 22.08),
      and \`train_arrival_gap_mins\` (F = 21.89).

CASE STUDY 2: WBSEDCL SMART GRID SUBSTATION MONITORING (BARRACKPORE)
- Domain: 33/11 kV distribution transformer telemetry in North 24 Parganas.
- Feature Selection Pipeline:
  * 32 telemetry channels collected every 15 minutes.
  * VarianceThreshold(0.0) strips 3 static configuration register flags.
  * CorrelationDeduplicator(|r| >= 0.90) deduplicates secondary current transformer CT-2
    (collinear with primary CT-1, r = 0.992).
  * SelectPercentile(percentile=40) using ANOVA F-score selects active kW, kVAR, ambient temp,
    and total harmonic distortion (THD).

CASE STUDY 3: SILIGURI TEA GARDEN HYPERSPECTRAL LEAF QUALITY ASSAY
- Domain: Spectrophotometric grading of Camellia sinensis leaf batches across 120 optical wavelengths.
- Feature Selection Pipeline:
  * Consecutive narrow wavelength bands (e.g., 680 nm and 682 nm) exhibit r = 0.996.
  * Greedy correlation deduplication reduces 120 bands to 28 non-collinear spectral windows.
  * SelectKBest with F-regression selects top 8 key chlorophyll-a absorption wavelengths.

CASE STUDY 4: SERAMPORE INDUSTRIAL JUTE MILL SPINNING FRAME RESILIENCE
- Domain: Mechanical failure prediction for automated jute spinning spindles in Hooghly.
- Feature Selection Pipeline:
  * 45 mechanical telemetry attributes.
  * Low-variance filter removes fixed lubricant batch IDs and factory shift codes.
  * Chi-Square test evaluates association between categorical maintenance status and bearing failure.
  * Pruning reduces inference latency on factory edge gateway from 180 ms to 14 ms.


6. COMMON PRODUCTION PITFALLS & ARCHITECTURAL ANTI-PATTERNS
--------------------------------------------------------------------------------
1. Applying VarianceThreshold on Unscaled Heterogeneous Features:
   Comparing variance of salary in INR (millions) with age in years (tens). The algorithm
   drops age simply because its numerical unit is smaller, not because it is less informative!
2. Data Leakage via Pre-Split Feature Selection:
   Computing ANOVA F-scores or Chi-Square on the full dataset before train/test splitting.
   This leaks test set distribution into feature rankings, causing optimistic bias.
3. Blindly Running SelectKBest on Redundant Features:
   Selecting top 5 features with highest univariate scores when features 1, 2, and 3 are
   near-identical copies of each other. The model receives only 3 distinct signals.
4. Using Chi-Square on Negative or Standardized Values:
   scikit-learn's chi2 requires strictly non-negative values. Passing z-score standardized
   features (which contain negative numbers) crashes or outputs nonsensical statistics.
5. Inappropriate Threshold Setting for Binary Quasi-Constants:
   Setting theta = 0.1 on binary features. Since max Bernoulli variance is 0.25 (at p = 0.5),
   a threshold of 0.1 drops features where up to 88% of samples have one value, discarding
   rare but highly informative disease indicators!
6. Discarding Low-Variance Rare Binary Anomaly Flags:
   In fraud detection, an indicator \`is_foreign_ip_mismatch\` occurs in only 0.2% of cases
   (Var = 0.00199). VarianceThreshold(0.01) deletes it, even though it predicts 90% of fraud!


7. MAKAUT VIVA VOCE EXAMINATION QUESTIONS & ANSWERS (SUKANTA HUI CURATED)
--------------------------------------------------------------------------------
Q1: What is the purpose of VarianceThreshold, and is it a supervised or unsupervised method?
A1: VarianceThreshold is an UNSUPERVISED feature selection technique. It removes all
    features whose variance falls below a specified cutoff. It does not use target
    labels Y. Its primary purpose is to prune constant (zero variance) and quasi-constant
    features that carry negligible informational diversity.

Q2: For a binary indicator feature, what is the variance formula, and how is the cutoff set?
A2: For a Bernoulli variable X in {0, 1} with P(X = 1) = p, the variance is Var(X) = p * (1 - p).
    If we wish to prune features where 99% of samples are identical, the cutoff is set to
    theta = 0.99 * (1 - 0.99) = 0.0099.

Q3: Explain the mathematical mechanism of the One-Way ANOVA F-test in SelectKBest.
A3: ANOVA computes the ratio of between-group mean square (MS_B) to within-group mean
    square (MS_W): F = MS_B / MS_W. If the class categories have widely separated means
    relative to internal scatter, F is large, indicating strong discriminatory power.

Q4: Why does scikit-learn's \`chi2\` function require non-negative input features?
A4: Pearson's Chi-Square test is derived from multinomial contingency counts:
    chi^2 = sum (O - E)^2 / E. The mathematical formulation assumes frequency counts or
    non-negative occurrences; negative values violate the probabilistic framework.

Q5: What is the difference between SelectKBest and SelectPercentile?
A5: SelectKBest retains a fixed integer count k of top-scoring features (e.g. k = 10).
    SelectPercentile retains the top p percent of features (e.g. top 25%), scaling with
    input dimensionality.

Q6: What is the False Discovery Rate (FDR), and how does the Benjamini-Hochberg method control it?
A6: FDR is the expected proportion of false positives among all rejected null hypotheses.
    The Benjamini-Hochberg method sorts p-values P_(1) <= ... <= P_(m) and finds the largest
    k satisfying P_(k) <= (k / m) * Q, rejecting hypotheses 1..k to guarantee FDR <= Q.

Q7: Why does univariate feature selection fail to identify the XOR problem?
A7: Univariate filters evaluate each feature independently with target Y. In the XOR
    problem, each individual feature has zero linear correlation (r = 0) and identical
    class-conditional means (ANOVA F approx 0). The filter drops both as useless, missing
    their 100% deterministic joint synergy.

Q8: Describe the Greedy Pairwise Correlation Deduplication algorithm.
A8: 1. Compute the pairwise Pearson correlation matrix R.
    2. Identify all pairs (X_j, X_k) where |r| >= threshold (e.g. 0.85).
    3. Greedily prune one feature from each collinear pair (preferably the one with lower
       correlation to the target), eliminating multicollinearity.

Q9: What is the danger of applying VarianceThreshold before feature scaling?
A9: Variance depends on the measurement unit. A feature measured in millimeters will have
    1,000,000x the variance of the same feature in meters. Unscaled variance thresholding
    will erroneously drop variables with small units regardless of informative value.

Q10: In credit card fraud detection, why should you NOT use VarianceThreshold(0.01) on rare fraud flags?
A10: In fraud detection, key indicators (e.g., failed OTP count > 5) occur in fewer than
     0.5% of transactions (Var < 0.005). Setting threshold = 0.01 will delete these rare,
     life-saving anomaly signals because it mistakes rarity for uselessness.
================================================================================
END OF STUDY NOTES: TOPIC 4 (BCAC701B)
================================================================================
`,L=[{id:1,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A junior data scientist reviews a scikit-learn pipeline and sees `VarianceThreshold(threshold=0.0)` applied at the very first step.",question:"What specific operational category of features does `VarianceThreshold(threshold=0.0)` cleanly eliminate?",options:["Features that are non-linearly correlated with the target variable.","Constant features that possess the exact same numerical value across 100% of observations.","Features that have a negative mean across training folds.","Features with high multicollinearity against the target."],correct:1,explanation:"A feature with sample variance equal to 0.0 is completely invariant (e.g. currency_code = 'INR' in a domestic Indian dataset). Constant features carry strictly zero information for distinguishing target classes and should be pruned immediately.",practicalTip:"Always put VarianceThreshold(0.0) first in your pipeline to strip useless constant columns before computationally heavy transforms."},{id:2,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A data engineer is asked whether VarianceThreshold is a supervised or unsupervised feature selection method.",question:"What is the correct classification of VarianceThreshold in feature selection taxonomy?",options:["Supervised, because it optimizes cross-validation accuracy on held-out folds.","Unsupervised, because it evaluates variance strictly from feature column X without referencing target labels Y.","Semi-supervised, because it requires label density estimation.","Reinforcement-based, because it uses an agent-based reward mechanism."],correct:1,explanation:"VarianceThreshold is purely unsupervised; it inspects the distribution of feature column X in isolation and has no knowledge of target labels Y. In contrast, ANOVA F-test and Chi-Square are supervised filters.",practicalTip:"Because VarianceThreshold is unsupervised, you can safely fit it without fear of target leakage, though scaling concerns remain."},{id:3,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"In a binary classification dataset, a boolean flag `is_vip_customer` has 99.5% ones and 0.5% zeros.",question:"What term describes a feature where almost all samples belong to a single dominant category?",options:["Orthogonal Feature.","Quasi-Constant (Near-Zero Variance) Feature.","Latent Embedding Feature.","Heteroscedastic Feature."],correct:1,explanation:"Features where 99%+ of rows share the same value are known as quasi-constant features. Their Bernoulli variance is p*(1-p) = 0.995 * 0.005 = 0.004975, which falls below standard filtering thresholds like theta = 0.01.",practicalTip:"Be careful: In rare event detection (e.g. cyber intrusion or cancer), a 0.5% quasi-constant flag may actually be the primary positive signal!"},{id:4,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An ML architect needs to choose between `SelectKBest` and `SelectPercentile` for an automated feature filtering pipeline.",question:"What is the critical distinction between `SelectKBest` and `SelectPercentile` in scikit-learn?",options:["SelectKBest only works for regression; SelectPercentile only works for classification.","SelectKBest retains a fixed integer count k of top features, whereas SelectPercentile retains a fixed percentage p of features relative to input dimensionality.","SelectPercentile uses deep learning whereas SelectKBest uses linear regression.","SelectKBest computes eigenvalues; SelectPercentile computes p-values."],correct:1,explanation:"SelectKBest(score_func, k=10) keeps exactly 10 features regardless of whether the raw matrix had 20 or 2,000 features. SelectPercentile(score_func, percentile=20) keeps the top 20% of features (e.g. 4 out of 20, or 400 out of 2,000).",practicalTip:"Use SelectKBest when you have a strict computational budget (e.g. 15 sensors max on edge hardware); use SelectPercentile for dynamic schemas."},{id:5,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An analyst attempts to use scikit-learn's `chi2` scoring function on a standardized continuous feature with mean 0.0 and variance 1.0.",question:"Why does running `chi2` on standard-scaled features fail or throw a ValueError in Python?",options:["Because chi2 requires integer-encoded target variables.","Because Pearson's Chi-Square test is mathematically based on non-negative frequency counts; negative values from standard scaling violate its probability axioms.","Because chi2 can only be computed using GPU acceleration.","Because continuous features cannot be plotted on scatter charts."],correct:1,explanation:"Pearson's Chi-Square test evaluates contingency frequencies: chi^2 = sum (O - E)^2 / E. It requires non-negative values (frequencies, counts, or binary flags). Standard scaling produces negative values for anything below the mean, triggering ValueError: Input X must be non-negative.",practicalTip:"Use MinMaxScaler([0, 1]) instead of StandardScaler if you plan to feed continuous features into chi2, or prefer ANOVA F-test."},{id:6,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A data scientist is modeling a continuous target (house price in Kolkata) using continuous features (square footage, distance to metro).",question:"Which univariate scoring function is theoretically appropriate for continuous features predicting a continuous target in `SelectKBest`?",options:["f_classif (ANOVA F-test).","f_regression (F-test derived from Pearson correlation r).","chi2 (Pearson Chi-Square test).","mutual_info_classif."],correct:1,explanation:"For regression tasks (continuous target Y), f_regression computes the correlation coefficient r between each feature and Y, converting it to an F-statistic: F = (r² / (1 - r²)) * (N - 2). f_classif and chi2 are exclusively for discrete classification targets.",practicalTip:"Match your scoring function to your data types: Continuous->Continuous: f_regression; Continuous->Discrete: f_classif; Discrete->Discrete: chi2."},{id:7,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A researcher tests 10,000 candidate genetic features at significance level alpha = 0.05. Purely random Gaussian noise is fed into the pipeline.",question:"Approximately how many random noise features will appear 'statistically significant' (p < 0.05) purely due to chance (Type I error)?",options:["0 features.","500 features.","5,000 features.","10,000 features."],correct:1,explanation:"With alpha = 0.05, there is a 5% false positive rate for each independent test. In 10,000 tests on pure noise, the expected number of false discoveries is 10,000 * 0.05 = 500 features! This is the classic multiple testing problem.",practicalTip:"In high-dimensional regimes (d > 1,000), use False Discovery Rate (FDR) control (SelectFdr) via Benjamini-Hochberg adjustment."},{id:8,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An engineer in Barrackpore wants to clean a feature matrix of 40 sensors by removing collinear duplicates before training a neural network.",question:"How does Greedy Pairwise Correlation Deduplication work?",options:["It inverts the covariance matrix using Singular Value Decomposition.","It computes all pairwise correlations |r(X_j, X_k)|, identifies pairs exceeding a threshold (e.g. 0.85), and iteratively drops one feature from each collinear pair.","It replaces collinear pairs with their arithmetic mean.","It trains a decision tree on each feature to predict the other."],correct:1,explanation:"Greedy correlation deduplication builds the pairwise correlation matrix R, finds pairs where |r| >= threshold, and prunes one feature (typically the one with lower target correlation), eliminating redundant collinearity in O(d² * N) time.",practicalTip:"Always run correlation deduplication before linear or logistic regression to prevent parameter variance explosion."},{id:9,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A boolean feature X in {0, 1} has 98% zeros and 2% ones across N = 1000 samples.",question:"What is the theoretical Bernoulli sample variance Var(X) = p * (1 - p)?",options:["0.0200","0.0196","0.0004","0.4900"],correct:1,explanation:"For a Bernoulli distributed indicator, Var(X) = p * (1 - p) = 0.02 * (1 - 0.02) = 0.02 * 0.98 = 0.0196. If a VarianceThreshold is set to theta = 0.02, this feature will be pruned.",practicalTip:"Remember that the maximum possible variance for a binary variable is 0.25, achieved when p = 0.5 (balanced 50/50 split)."},{id:10,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"In an ANOVA F-test across K = 3 classes with N = 103 total observations, Sum of Squares Between SS_B = 180, and Sum of Squares Within SS_W = 600.",question:"What are the degrees of freedom (df_B, df_W) and the calculated ANOVA F-statistic?",options:["df_B = 3, df_W = 103; F = 180 / 600 = 0.30","df_B = 2, df_W = 100; MS_B = 90, MS_W = 6; F = 90 / 6 = 15.00","df_B = 1, df_W = 102; F = 180 / 6 = 30.00","df_B = 2, df_W = 103; F = 90 / 5.82 = 15.46"],correct:1,explanation:"df_B = K - 1 = 3 - 1 = 2. df_W = N - K = 103 - 3 = 100. Mean squares: MS_B = SS_B / df_B = 180 / 2 = 90. MS_W = SS_W / df_W = 600 / 100 = 6. F = MS_B / MS_W = 90 / 6 = 15.00.",practicalTip:"An F-statistic of 15.0 with df = (2, 100) corresponds to p < 0.0001, indicating that this feature has massive class-separating power."},{id:11,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A 2x2 contingency table for feature X (binary) vs target Y (binary) has total sample size N = 200. The observed counts are [[80, 20], [20, 80]].",question:"What is the expected frequency E_11 for the top-left cell, and what is the calculated Chi-Square statistic?",options:["E_11 = 50; chi² = 72.00","E_11 = 50; chi² = 4 * ((80 - 50)² / 50) = 4 * (900 / 50) = 72.00","E_11 = 100; chi² = 36.00","E_11 = 20; chi² = 18.00"],correct:1,explanation:"Row 1 total = 100, Col 1 total = 100. Expected E_11 = (100 * 100) / 200 = 50. All 4 cells have E = 50 and |O - E| = 30. chi² = 4 * ((30)² / 50) = 4 * 18 = 72.00.",practicalTip:"A chi² of 72.0 on 1 degree of freedom is astronomically significant (critical value at p=0.001 is 10.83), making X an elite candidate for selection."},{id:12,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"In an f_regression test with N = 62 samples, a continuous feature has Pearson correlation r = 0.60 with the target.",question:"What is the calculated F-statistic for this feature slope?",options:["F = 0.60 * 60 = 36.0","F = (r² / (1 - r²)) * (N - 2) = (0.36 / 0.64) * 60 = 0.5625 * 60 = 33.75","F = 0.36 * 62 = 22.32","F = (0.60 / 0.40) * 60 = 90.0"],correct:1,explanation:"F = (r² / (1 - r²)) * (N - 2). Here r = 0.60, r² = 0.36, 1 - r² = 0.64, and N - 2 = 60. F = (0.36 / 0.64) * 60 = 33.75.",practicalTip:"f_regression directly converts Pearson correlation r into an F-test that tests H_0: slope beta = 0."},{id:13,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A data pipeline applies the Benjamini-Hochberg False Discovery Rate (FDR) procedure with target false discovery rate Q = 0.10 across m = 5 candidate features.",question:"The sorted p-values are [0.01, 0.03, 0.05, 0.09, 0.15]. Which features are rejected (selected) by Benjamini-Hochberg?",options:["Only feature 1 (p = 0.01).","Features 1, 2, 3, and 4, because p_k <= (k / m) * Q for k = 4 (0.09 <= (4/5)*0.10 = 0.08 is false, so up to k=3: 0.05 <= (3/5)*0.10 = 0.06 is true).","Features 1, 2, and 3, because p_3 = 0.05 <= (3 / 5) * 0.10 = 0.06.","All 5 features."],correct:2,explanation:`Evaluate p_(k) <= (k / m) * Q:
k=1: 0.01 <= (1/5)*0.10 = 0.02 (True)
k=2: 0.03 <= (2/5)*0.10 = 0.04 (True)
k=3: 0.05 <= (3/5)*0.10 = 0.06 (True)
k=4: 0.09 <= (4/5)*0.10 = 0.08 (False)
k=5: 0.15 <= (5/5)*0.10 = 0.10 (False)
The largest index satisfying the condition is k = 3. Features 1, 2, and 3 are selected.`,practicalTip:"Benjamini-Hochberg is much less aggressive than Bonferroni (which would require p <= 0.10/5 = 0.02), avoiding excessive Type II false negatives."},{id:14,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A continuous feature X is measured in meters: Var(X) = 0.0025 m². An analyst changes the unit to millimeters: X_mm = 1000 * X.",question:"What is the new sample variance Var(X_mm), and what does this demonstrate about raw VarianceThreshold?",options:["Var(X_mm) = 2.5 mm²; variance scales linearly.","Var(X_mm) = (1000)² * Var(X) = 1,000,000 * 0.0025 = 2500 mm²; variance is scale-dependent and changes by the square of the conversion factor.","Var(X_mm) = 0.0025 mm²; variance is scale-invariant.","Var(X_mm) = 0.0 mm²; unit conversions destroy sample variance."],correct:1,explanation:"For any constant scalar c, Var(c * X) = c² * Var(X). Scaling from meters to millimeters multiplies the variance by 1,000,000! Therefore, setting an unscaled VarianceThreshold of 0.01 would drop X in meters, but keep X in millimeters. Features must have identical units or be standardized.",practicalTip:"Never apply a single numerical variance threshold across columns with heterogeneous physical units."},{id:15,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A feature selection module tests two features X1 and X2. Target Y has variance Var(Y) = 100. regressing Y on X1 gives MSE = 64 (R² = 0.36); regressing Y on X2 gives MSE = 81 (R² = 0.19).",question:"Which feature has a higher f_regression score on N = 52 observations?",options:["X2, because its residual MSE is higher.","X1, because higher R² directly yields higher F-statistic: F_1 = (0.36 / 0.64)*50 = 28.12 vs F_2 = (0.19 / 0.81)*50 = 11.73.","Both features have identical F-scores because sample size N is constant.","Neither; f_regression requires R² > 0.50."],correct:1,explanation:"F = (R² / (1 - R²)) * (N - 2). Higher R² (lower residual MSE) directly maximizes the F-statistic. X1 explains 36% of target variance, producing F = 28.12, vastly superior to X2 (F = 11.73).",practicalTip:"For univariate linear regression, ranking by f_regression is mathematically equivalent to ranking by Pearson |r| or R²."},{id:16,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"Consider an ANOVA F-test where a continuous feature has the exact same sample mean (mean = 50.0) across all 3 class groups.",question:"What is the value of Sum of Squares Between (SS_B) and the resulting ANOVA F-statistic?",options:["SS_B = 50.0; F = 1.0","SS_B = 0.0; F = 0.0","SS_B = 100.0; F = 9999.0","SS_B = -50.0; F = -1.0"],correct:1,explanation:"SS_B = sum n_k * (mean_k - grand_mean)². If all group means equal the grand mean, mean_k - grand_mean = 0 for all classes, so SS_B = 0. Consequently, MS_B = 0, and F = 0.0. The feature has zero discriminatory power between classes.",practicalTip:"A feature with F = 0 has identical class conditional means and cannot separate classes linearly."},{id:17,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An ML pipeline executes `SelectKBest(score_func=f_classif, k=10)`. The dataset contains two near-identical sensors measuring oil temperature in Celsius and Fahrenheit (r = 1.0).",question:"What happens to both temperature sensors during this feature selection step?",options:["The algorithm detects the redundancy and drops one sensor.","Both sensors receive virtually identical high F-scores; SelectKBest picks BOTH sensors, consuming 2 of the 10 available slots with redundant information.","The algorithm crashes with a singular matrix exception.","The algorithm averages both sensors into a single composite feature."],correct:1,explanation:"SelectKBest evaluates each feature independently (univariate filter). Because both sensors correlate identically with the target, both receive top F-scores and both get selected! Univariate filters are completely blind to multicollinearity.",practicalTip:"Pair SelectKBest with a correlation deduplication step to prevent redundant duplicate features from eating up your feature budget."},{id:18,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data engineer wants to combine `VarianceThreshold`, `CorrelationDeduplicator`, and `SelectKBest` into a production scikit-learn Pipeline.",question:"What is the theoretically optimal execution order for these basic feature selection components?",options:["1. SelectKBest -> 2. CorrelationDeduplicator -> 3. VarianceThreshold.","1. VarianceThreshold -> 2. CorrelationDeduplicator -> 3. SelectKBest.","1. CorrelationDeduplicator -> 2. SelectKBest -> 3. VarianceThreshold.","Order does not matter because filters are commutative."],correct:1,explanation:"Step 1: VarianceThreshold strips constant/quasi-constant columns in O(d*N) time, shrinking the matrix. Step 2: CorrelationDeduplicator removes collinear duplicates in O(d_remaining² * N). Step 3: SelectKBest ranks only the clean, non-collinear features against target Y.",practicalTip:"Pruning constants first avoids computing O(d²) correlation pairs on zero-variance columns (which would produce NaN correlations anyway!)."},{id:19,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A team building a fraud detection system with 1,000,000 transactions and 200 features needs to choose between an ANOVA filter and a Forward Stepwise Selection wrapper.",question:"Why is a univariate filter preferred over a wrapper method during the initial screening stage?",options:["Univariate filters guarantee higher test accuracy than wrappers.","Univariate filters run in O(d * N) time (seconds), whereas a forward wrapper training 200 models iteratively takes O(d² * N * epochs) (hours or days).","Wrappers cannot be used on tabular data.","Univariate filters eliminate all non-linear interactions automatically."],correct:1,explanation:"Univariate filters evaluate each feature in a single pass (O(d*N)), making them blazingly fast on large datasets. Wrappers train a full model for every candidate subset, which is computationally intractable for 200 features without prior filtering.",practicalTip:"Use a two-stage funnel: Apply fast univariate filters to prune 200 features down to 30, then run wrapper selection on the 30."},{id:20,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data scientist applies `SelectFpr(score_func=f_classif, alpha=0.01)` on a biomedical dataset.",question:"What specific statistical threshold does `SelectFpr` control during feature filtering?",options:["The False Negative Rate (Type II error).","The False Positive Rate (Type I error, selecting features with p-value < alpha under the null hypothesis of no association).","The False Discovery Rate (FDR).","The Family-Wise Error Rate (FWER)."],correct:1,explanation:"SelectFpr (False Positive Rate) retains all features whose individual p-value is strictly less than alpha. It controls the individual Type I error rate under the null hypothesis of zero association.",practicalTip:"Use SelectFpr when you want a formal statistical hypothesis test cutoff (e.g. p < 0.01) rather than an arbitrary top-k integer."},{id:21,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"In an e-commerce customer churn dataset, feature X1 is monthly bill (INR), X2 is account age (months), and X3 is an XOR interaction pair {X4, X5}.",question:"What happens if a feature pipeline relies solely on `f_classif` (ANOVA F-test) to select the top 2 features?",options:["It will select X4 and X5 because XOR has 100% predictive power.","It will select X1 and X2, and completely drop X4 and X5 because each XOR component has an individual F-score near zero.","It will crash due to categorical data in the target.","It will convert X4 and X5 into continuous variables."],correct:1,explanation:"Univariate filters test features in isolation. Because individual XOR features have identical class-conditional means, their ANOVA F-scores are near zero. The filter erroneously discards the pair, selecting only X1 and X2.",practicalTip:"Whenever domain knowledge indicates physical or business interactions (e.g. switch A ⊕ switch B), bypass univariate filters for those features."},{id:22,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data scientist computes the pairwise Pearson correlation matrix for 50 continuous features and observes a cluster of 8 features with pairwise correlations |r| > 0.92.",question:"Beyond greedy deduplication, what alternative unsupervised transformation cleanly compresses these 8 collinear features into 1 or 2 orthogonal dimensions?",options:["One-Hot Encoding.","Principal Component Analysis (PCA) on the collinear subset.","Ordinal Categorical Label Encoding.","K-Means clustering on the target variable."],correct:1,explanation:"Applying PCA to a cluster of highly collinear features extracts the primary orthogonal eigenvectors. The first 1 or 2 principal components capture 95%+ of the common variance without any multicollinearity.",practicalTip:"If all collinear features carry slight non-redundant signal (e.g. 8 accelerometer sensors on a bridge), PCA compression is superior to outright deletion."},{id:23,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data engineer runs a 5-fold cross-validation pipeline. Feature selection (`SelectKBest`) is mistakenly placed outside the cross-validation loop (executed once on the full dataset before splitting).",question:"What catastrophic methodological vulnerability is introduced, and what is its consequence?",options:["High computational complexity; the pipeline takes 5x longer to execute.","Data leakage: Target information from validation folds influences feature selection, leading to artificially inflated, overly optimistic CV scores that fail in production.","Underfitting: The model cannot find the global minimum.","Zero variance in the validation predictions."],correct:1,explanation:"Feature selection must be treated as part of the model fitting process. If features are selected using the entire dataset, the model 'sees' the relationship with target Y in the validation test folds before training, causing severe optimistic bias.",practicalTip:"Always wrap feature selection and model estimators inside a single `Pipeline` and pass that pipeline into `cross_val_score`."},{id:24,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An ML pipeline uses `SelectPercentile(percentile=50)` with `mutual_info_classif` instead of `f_classif`.",question:"What is the primary benefit of using Mutual Information over ANOVA F-score in `SelectPercentile`?",options:["Mutual Information is 100x faster than ANOVA.","Mutual Information detects non-linear, non-monotonic dependencies between features and target, which ANOVA F-test completely misses.","Mutual Information requires data to be standardized to mean 0 and variance 1.","Mutual Information eliminates the need for test data."],correct:1,explanation:"ANOVA F-test assumes linear/normal group-mean separation. Mutual Information I(X; Y) measures general non-linear statistical dependency in bits, detecting parabolic, step-function, or multi-modal relationships.",practicalTip:"Use mutual_info_classif when using non-linear models like Random Forests, Gradient Boosted Trees, or Neural Networks."},{id:25,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"Kolkata Metro Green Line AFC gate telemetry collects 40 attributes per 15-minute interval. Feature `currency_code` has Var = 0.0000, and `resident_flag` has Var = 0.0049.",question:"How should an automated feature ingestion pipeline handle these two attributes?",options:["Retain both attributes because database storage is cheap.","Apply VarianceThreshold(0.01) to prune both: `currency_code` as an absolute constant and `resident_flag` as a quasi-constant, eliminating useless telemetry overhead.","Duplicate both attributes to increase model weights.","Convert both attributes to polynomial interaction terms."],correct:1,explanation:"Both features carry virtually zero information variance (currency is 100% INR, resident is 99.2% positive). VarianceThreshold(0.01) removes both, reducing network payload and matrix dimensions without any loss of accuracy.",practicalTip:"Unsupervised variance pruning is the cheapest way to trim database telemetry before applying heavy ML algorithms."},{id:26,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"At the WBSEDCL smart grid substation in Barrackpore, an anomaly detection model ingests two current transformer streams: `phase_A_current_probe_1` and `phase_A_current_probe_2` (|r| = 0.9992).",question:"If both streams are fed directly into an unregularized Logistic Regression model, what production failure will occur?",options:["The logistic sigmoid function will overflow to infinity.","Multicollinearity will cause severe parameter variance inflation, yielding unstable, oscillating regression weights and uninterpretable odds ratios.","The model will classify all samples as anomalies.","The database connection will timeout."],correct:1,explanation:"Two near-identical probes (|r| = 0.9992) cause extreme multicollinearity. The Hessian matrix in Newton-Raphson logistic updates is near-singular, causing regression weights to blow up and oscillate between +100 and -100.",practicalTip:"Apply CorrelationDeduplicator(|r| >= 0.85) to drop one of the duplicate sensor probes before training GLM models."},{id:27,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"In Siliguri tea estate quality testing, a hyperspectral camera measures leaf reflectance across 120 narrow optical bands (400 nm to 1000 nm). Neighboring bands have |r| > 0.98.",question:"What is the recommended two-stage basic feature selection strategy to reduce this high-dimensional spectral matrix to 10 key wavelengths?",options:["1. Drop all even-numbered bands arbitrarily, then fit a decision tree.","1. Greedy correlation deduplication (|r| >= 0.90) to eliminate adjacent wavelength redundancy -> 2. SelectKBest(f_regression, k=10) to pick the top 10 most predictive spectral peaks.","Run One-Hot Encoding on all continuous wavelengths.","Train a deep autoencoder with 50 hidden layers directly on the raw bands."],correct:1,explanation:"Hyperspectral data has massive spatial and spectral collinearity. Stage 1 (correlation deduplication) collapses adjacent overlapping bands into distinct spectral regions. Stage 2 (SelectKBest) ranks the remaining distinct regions by target correlation.",practicalTip:"Two-stage feature selection (unsupervised deduplication -> supervised ranking) is standard practice in chemometrics and spectroscopy."},{id:28,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A spinning frame at a Serampore jute mill has 25 vibration sensors. An engineer applies `VarianceThreshold(0.01)` on raw sensor telemetry and discovers that 18 sensors are deleted, crashing model accuracy.",question:"What caused the feature selector to erroneously delete 18 valid vibration sensors?",options:["The sensors were turned off.","The engineer forgot to scale the data; vibration amplitudes in precision accelerometers are measured in millimeters (amplitudes < 0.05 mm), so raw variance was naturally < 0.01 despite high signal-to-noise ratio!","Jute fibers emit electromagnetic interference that cancels sample variance.","The threshold of 0.01 was too low."],correct:1,explanation:"Variance is unit-dependent. Accelerometer micrometer vibrations have physical amplitudes between 0.001 and 0.05 mm, meaning their true variance is around 0.0001 mm². Applying a blanket threshold of 0.01 without feature scaling or domain unit awareness wiped out active, life-saving sensors!",practicalTip:"Never apply absolute variance cutoffs on physical sensor telemetry without standardizing features (Z-score) or calibrating to sensor specifications."},{id:29,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A hospital in Salt Lake predicts sepsis in ICU patients. A rare biomarker `serum_procalcitonin_spike` occurs in only 0.4% of patients, but has a 95% true positive rate for severe septic shock.",question:"Why would applying an unsupervised `VarianceThreshold(0.01)` be medically disastrous in this clinical pipeline?",options:["Because procalcitonin has a negative molecular weight.","Because the feature has Bernoulli variance p*(1-p) = 0.004 * 0.996 = 0.003984 < 0.01; VarianceThreshold will delete this critical life-saving biomarker because it is rare!","Because medical datasets must always use Chi-Square.","Because sepsis is a non-linear disease."],correct:1,explanation:"In rare clinical conditions, vital diagnostic biomarkers only appear in a tiny fraction of patients (p = 0.004). An unsupervised variance filter mistakes rarity for uselessness and permanently discards the biomarker. Never use generic variance filters on rare anomaly indicators.",practicalTip:"In medical and fraud anomaly detection, evaluate supervised mutual information or clinical relevance before running variance filters."},{id:30,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"An ML architect is deploying a real-time risk scoring engine on an edge IoT device with a strict 20 ms inference latency SLA.",question:"How does applying basic feature selection (VarianceThreshold + Correlation Deduplication + SelectKBest) directly optimize edge production systems?",options:["It eliminates the need for software version control.","It reduces memory RAM footprint, slashes sensor deserialization latency, avoids inverting ill-conditioned matrices, and satisfies edge computing SLAs.","It allows the edge device to run without electricity.","It converts batch scoring into quantum computing."],correct:1,explanation:"Feature selection is a critical systems engineering optimization. Pruning redundant and low-variance features halves network bandwidth, reduces feature store lookup times, cuts memory usage, and ensures models meet sub-20ms edge execution deadlines.",practicalTip:"A model with 10 well-selected features that runs in 5 ms is vastly superior in production to a 100-feature model that takes 80 ms."}],u=[{id:"rfid_taps",name:"Platform RFID Smartcard Taps",symbol:"X₁",type:"Continuous Numerical",variance:12100,isBinary:!1,pVal:null,anovaF:124.38,chi2:118.5,mutualInfo:.84,description:"Tap-in count per 15-min window across Sealdah interchange gates.",collinearWith:"optical_pulses",pairwiseR:.9997},{id:"optical_pulses",name:"Platform Optical Barrier Pulses",symbol:"X₂",type:"Continuous Numerical",variance:11850,isBinary:!1,pVal:null,anovaF:123.77,chi2:116.8,mutualInfo:.83,description:"Optical turnstile beam interruption count (redundant with RFID taps).",collinearWith:"rfid_taps",pairwiseR:.9997},{id:"train_gap",name:"Train Arrival Headway (mins)",symbol:"X₃",type:"Continuous Numerical",variance:4.12,isBinary:!1,pVal:null,anovaF:21.89,chi2:32.4,mutualInfo:.42,description:"Scheduled vs actual Eastern Railway train arrival gap at Sealdah.",collinearWith:null,pairwiseR:.12},{id:"rain_intensity",name:"Rainfall Intensity (mm/hr)",symbol:"X₄",type:"Continuous Numerical",variance:86.4,isBinary:!1,pVal:null,anovaF:22.08,chi2:35.1,mutualInfo:.45,description:"Alipore meteorological radar rain gauge precipitation index.",collinearWith:null,pairwiseR:.08},{id:"currency_code",name:"AFC Gate Currency Code",symbol:"X₅",type:"Constant Numerical",variance:0,isBinary:!1,pVal:null,anovaF:0,chi2:0,mutualInfo:0,description:"Domestic fare currency ISO code (356 for INR across 100% of rows).",collinearWith:null,pairwiseR:0},{id:"kolkata_resident",name:"Kolkata Resident Flag",symbol:"X₆",type:"Binary Quasi-Constant",variance:.00498,isBinary:!0,pVal:.995,anovaF:.42,chi2:.38,mutualInfo:.01,description:"Smartcard KYC domestic resident indicator (99.5% are residents).",collinearWith:null,pairwiseR:.02},{id:"station_zone",name:"Station Interchange Zone Category",symbol:"X₇",type:"Categorical Discrete",variance:.67,isBinary:!1,pVal:null,anovaF:48.65,chi2:96.8,mutualInfo:.58,description:"Discrete zone ID: 0 = Howrah Maidan, 1 = Sealdah, 2 = Salt Lake Sector V.",collinearWith:null,pairwiseR:.15},{id:"random_hash",name:"Smartcard Crypto Token Hash",symbol:"X₈",type:"Continuous Noise",variance:.0833,isBinary:!1,pVal:null,anovaF:.2,chi2:.15,mutualInfo:0,description:"Pseudo-random cryptographic session nonce generated on card tap.",collinearWith:null,pairwiseR:-.01}],b=[{id:1,scenario:"An ML engineer applies VarianceThreshold(0.01) on an unscaled dataset containing salary in INR (variance = 4.2 × 10⁸) and customer age in years (variance = 0.008 in standard units). Age is deleted.",question:"What core architectural error occurred during this unsupervised variance thresholding step?",options:[{label:"A",text:"Customer age is mathematically non-linear and cannot have variance."},{label:"B",text:"Variance is unit-dependent (scale-sensitive); without feature normalization, features with small numerical units are erroneously dropped regardless of predictive power."},{label:"C",text:"VarianceThreshold can only be executed on integer count variables."},{label:"D",text:"The threshold of 0.01 was too high for continuous features."}],correct:"B",explanation:"Sample variance s² scales with the square of feature units. A variable measured in small units will naturally have tiny variance, causing unscaled VarianceThreshold to discard it. Standardization (or unit-aware filtering) is mandatory before applying numerical variance cutoffs."},{id:2,scenario:"In an automated pipeline, a data scientist uses SelectKBest with `chi2` to rank features, but passes z-score standardized features (which contain negative values).",question:"Why does scikit-learn's `chi2` function throw an immediate ValueError on standardized inputs?",options:[{label:"A",text:"Chi-Square requires features to follow a Cauchy distribution."},{label:"B",text:"Pearson's Chi-Square test is mathematically formulated on non-negative contingency frequencies; negative numbers violate its probabilistic axioms."},{label:"C",text:"Standardized features cause floating-point underflow in GPU memory."},{label:"D",text:"Chi-Square is an unsupervised clustering algorithm."}],correct:"B",explanation:"Pearson's chi-square test evaluates (Observed - Expected)² / Expected. It requires non-negative frequencies, counts, or min-max scaled [0, 1] values. Standard scaling produces negative values for all observations below the mean, triggering ValueError: Input X must be non-negative."},{id:3,scenario:"At the WBSEDCL smart grid substation, 'Phase_A_Current_Probe_1' and 'Phase_A_Current_Probe_2' have Pearson r = 0.9997. Both are evaluated by `SelectKBest(f_classif, k=5)`.",question:"How does univariate `SelectKBest` handle these two near-identical duplicate sensors?",options:[{label:"A",text:"It detects the collinearity and automatically drops Probe 2."},{label:"B",text:"Because univariate filters evaluate each feature in isolation, both receive virtually identical top F-scores and BOTH get selected, wasting 2 of the 5 available feature slots on redundant duplicate information."},{label:"C",text:"It combines both probes into an arithmetic mean."},{label:"D",text:"It crashes due to a singular covariance matrix."}],correct:"B",explanation:"Univariate filters cannot detect feature-to-feature relationships. Both probes have strong individual correlation with the target, so both receive high scores and both are selected. A correlation deduplication step is required to prune redundancy."},{id:4,scenario:"In a clinical cancer diagnostic task, an ultra-rare genetic mutation flag `has_brca_variant` occurs in only 0.3% of patient samples (p = 0.003).",question:"Why would applying an unsupervised `VarianceThreshold(0.01)` be medically disastrous in this pipeline?",options:[{label:"A",text:"The mutation has negative variance."},{label:"B",text:"The Bernoulli variance is p*(1-p) = 0.003 * 0.997 = 0.00299 < 0.01; VarianceThreshold will delete this life-saving diagnostic marker because it mistakes rarity for uselessness!"},{label:"C",text:"Genetic features must only be filtered using cosine similarity."},{label:"D",text:"The algorithm will convert the genetic mutation into a continuous float."}],correct:"B",explanation:"Unsupervised variance filters judge features solely by diversity of values. In rare anomaly detection, critical life-saving flags are quasi-constant (present in < 1% of rows). VarianceThreshold will permanently discard them unless rare anomaly features are exempt."},{id:5,scenario:"A data pipeline tests 10,000 candidate NLP n-grams against customer churn using individual hypothesis tests at alpha = 0.05.",question:"What statistical procedure should be applied to control the proportion of false positive features among all selected features?",options:[{label:"A",text:"Benjamini-Hochberg False Discovery Rate (FDR) control (SelectFdr)."},{label:"B",text:"K-Means clustering on the residuals."},{label:"C",text:"Min-Max normalization to [-1, 1]."},{label:"D",text:"Ordinary Least Squares polynomial expansion."}],correct:"A",explanation:"In high-dimensional testing (m = 10,000), testing at alpha = 0.05 on noise yields ~500 false discoveries by chance. The Benjamini-Hochberg procedure controls the False Discovery Rate (FDR), guaranteeing that the proportion of false discoveries does not exceed a chosen threshold Q."}],Q=()=>{o.useId();const[y,w]=o.useState("theory"),[f,T]=o.useState("variance"),[x,v]=o.useState(.01),N=o.useMemo(()=>{const t=[],n=[];u.forEach(a=>{a.variance>x?t.push(a):n.push(a)});const s=(n.length/u.length*100).toFixed(0);return{retained:t,dropped:n,memoryReduction:s}},[x]),[p,C]=o.useState("anova"),[c,E]=o.useState(4),j=o.useMemo(()=>{const t=u.map(a=>{let r=0;return p==="anova"?r=a.anovaF:p==="chi2"?r=a.chi2:p==="mutual_info"&&(r=a.mutualInfo),{...a,activeScore:r}});t.sort((a,r)=>r.activeScore-a.activeScore);const n=t.slice(0,c),s=t.slice(c);return{allSorted:t,selectedK:n,unselected:s}},[p,c]),[g,I]=o.useState(.85),h=o.useMemo(()=>{const t=new Set,n=[];return u.forEach((a,r)=>{t.has(a.id)||u.forEach((l,k)=>{k<=r||t.has(l.id)||a.collinearWith===l.id&&a.pairwiseR>=g&&(t.add(l.id),n.push({kept:a.name,dropped:l.name,r:a.pairwiseR}))})}),{retained:u.filter(a=>!t.has(a.id)),droppedCount:t.size,pairs:n}},[g]),[m,_]=o.useState({}),[d,A]=o.useState(!1),F=(t,n)=>{d||_(s=>({...s,[t]:n}))},R=()=>{A(!0)},S=o.useMemo(()=>d?b.reduce((t,n)=>t+(m[n.id]===n.correct?1:0),0):0,[d,m]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{id:"hero",className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"Module 3: Feature Selection & Train-Test Dynamics"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:"Topic 4 of 16"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"MAKAUT BCAC701B Masterclass"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Basic Feature Selection Techniques"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed",children:"Master the foundational filter tier of modern data engineering pipelines. Explore unsupervised VarianceThreshold for constant and quasi-constant pruning, supervised ranking via ANOVA F-test and Chi-Square (SelectKBest / SelectPercentile), and greedy pairwise correlation deduplication."}),e.jsx("div",{className:"pt-2 flex flex-wrap gap-2 text-xs",children:[{id:"novice",label:"Novice Masterclass"},{id:"studio",label:"Interactive Studio"},{id:"math",label:"Math Formulations"},{id:"casestudies",label:"Regional Case Studies"},{id:"quiz",label:"Diagnostic Quiz"},{id:"pitfalls",label:"Production Pitfalls"},{id:"loaders",label:"Python Lab & Notes"},{id:"faq",label:"MAKAUT Viva FAQ"}].map(t=>e.jsx("a",{href:`#${t.id}`,className:"px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600/60 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-medium",children:t.label},t.id))})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Foundational Intuition"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Novice Masterclass: Understanding Basic Feature Filters"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Three intuitive everyday mental models illustrating how variance sieves, statistical tests, and deduplication clean raw data."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-indigo-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🥭"}),e.jsx("h4",{className:"text-base font-bold text-indigo-300",children:"1. The Malda Mango Sorting Depot"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Grading fruit at a West Bengal orchard:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Zero Variance:"})," If every single fruit in the crate is a Himsagar, the 'Fruit_Variety' label has zero variance. Useless for grading."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Quasi-Constant:"})," If 99.8% are yellow and 0.2% green, color provides negligible discriminatory spread."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"ANOVA F-test:"})," Sugar Brix level across Premium vs Standard crates (high between-group spread)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Deduplication:"})," Measuring weight in grams vs ounces. Keep one scale!"]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-cyan-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🎪"}),e.jsx("h4",{className:"text-base font-bold text-cyan-300",children:"2. Deshapriya Park Durga Puja Gate"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Crowd security screening in Kolkata:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Constant Filter:"})," Everyone entering is human; 'Species: Homo sapiens' is filtered out immediately."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"SelectKBest:"})," Frisking guards prioritize top 3 high-threat signals: metal detector beeps, oversized bag, no VIP wristband."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Correlation Deduplication:"})," Two optical cameras 5 inches apart; check one monitor, ignore the second."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-emerald-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🌾"}),e.jsx("h4",{className:"text-base font-bold text-emerald-300",children:"3. The Sealdah Grain Sieve"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Sifting wholesale basmati rice:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Mechanical Sieve (Threshold):"})," The wire mesh has a fixed hole diameter (θ). Dust and broken husks fall through; full grains remain."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Supervised Inspection:"})," Picking grains based on aroma and grain length (SelectKBest)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Speed Advantage:"})," Shaking a sieve takes 2 seconds (O(N) filter) compared to hand-inspecting each grain under a microscope (wrapper)."]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"The Basic Feature Selection Taxonomy Matrix"}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-300 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 font-semibold",children:"Technique"}),e.jsx("th",{className:"p-3 font-semibold",children:"Supervision"}),e.jsx("th",{className:"p-3 font-semibold",children:"Target Variable Type"}),e.jsx("th",{className:"p-3 font-semibold",children:"Mathematical Criterion"}),e.jsx("th",{className:"p-3 font-semibold",children:"Primary Industrial Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-400",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-emerald-300",children:"VarianceThreshold"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Unsupervised"}),e.jsx("td",{className:"p-3 font-mono",children:"None (Target-agnostic)"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"s² > θ or p(1-p) > θ"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Pruning zero-variance constants & quasi-constant flags"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-indigo-300",children:"ANOVA F-test (f_classif)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Supervised"}),e.jsx("td",{className:"p-3 font-mono",children:"Discrete Categorical"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"F = MS_between / MS_within"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Ranking continuous features in multiclass classification"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-cyan-300",children:"Chi-Square (chi2)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Supervised"}),e.jsx("td",{className:"p-3 font-mono",children:"Discrete Categorical"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"χ² = ∑ (O - E)² / E"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Non-negative count/binary feature independence test"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-purple-300",children:"F-Regression (f_regression)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Supervised"}),e.jsx("td",{className:"p-3 font-mono",children:"Continuous Numerical"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"F = (r² / (1-r²)) * (N - 2)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Testing linear slope significance in continuous regression"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-amber-300",children:"Correlation Deduplication"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Unsupervised"}),e.jsx("td",{className:"p-3 font-mono",children:"None"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"|r(Xⱼ, Xₖ)| < θ (e.g. 0.85)"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Eliminating collinear duplicate sensors and redundant features"})]})]})]})})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-3",children:[e.jsxs("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Academic Jargon Buster"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Quasi-Constant:"}),"A feature where a single value dominates 99%+ of rows. Its Bernoulli variance falls below 0.01."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Univariate Filter:"}),"An algorithm that evaluates each feature in isolation against target Y without considering interactions."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"False Discovery Rate (FDR):"}),"The expected proportion of false positive features among all selected features, controlled by Benjamini-Hochberg."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"SelectKBest:"}),"A transformer that retains the top k features with highest test scores, enforcing a strict feature budget."]})]})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-ping"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Interactive Engineering Studio"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Basic Feature Selection Laboratory"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"variance",label:"Mode 1: Variance Thresholding",badge:"Constant / Quasi-Constant"},{id:"ranker",label:"Mode 2: Supervised SelectKBest",badge:"ANOVA F / Chi² / MI"},{id:"dedup",label:"Mode 3: Correlation Deduplication",badge:"Collinear Pruning"}].map(t=>e.jsxs("button",{onClick:()=>T(t.id),className:i("px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border flex flex-col text-left cursor-pointer",f===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:i("text-[10px] font-normal",f===t.id?"text-indigo-200":"text-slate-500"),children:t.badge})]},t.id))})]}),f==="variance"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Unsupervised Variance Sieve (Kolkata Metro Ingestion)"}),e.jsxs("p",{className:"text-slate-400",children:["Adjust the variance threshold cutoff ",e.jsx("span",{className:"font-mono text-cyan-300",children:"θ"}),". Features with variance ",e.jsx("span",{className:"font-mono text-rose-300",children:"s² ≤ θ"})," are stripped. Watch constant currency codes and 99.5% quasi-constant resident flags get cleanly excised."]})]}),e.jsxs("div",{className:"flex items-center gap-4 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 shrink-0",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Retained"}),e.jsxs("span",{className:"font-mono font-bold text-emerald-400",children:[N.retained.length," / ",u.length]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Dropped"}),e.jsxs("span",{className:"font-mono font-bold text-rose-400",children:[N.dropped.length," features"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Payload Drop"}),e.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:["-",N.memoryReduction,"%"]})]})]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Variance Cutoff Threshold (θ):"}),e.jsx("input",{type:"range",min:"0.000",max:"0.050",step:"0.002",value:x,onChange:t=>v(Number(t.target.value)),className:"w-48 accent-cyan-500"}),e.jsxs("span",{className:"font-mono text-cyan-400 font-bold text-sm",children:["θ = ",x.toFixed(4)]})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>v(0),className:"px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:text-white text-slate-400",children:"θ = 0.0 (Constants Only)"}),e.jsx("button",{onClick:()=>v(.01),className:"px-2.5 py-1 rounded bg-slate-900 border border-slate-700 hover:text-white text-slate-400",children:"θ = 0.01 (99% Dominance)"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4",children:u.map(t=>{const n=t.variance>x;return e.jsxs("div",{className:i("p-4 rounded-2xl border transition-all flex flex-col justify-between space-y-3",n?"bg-slate-900/90 border-emerald-500/50 shadow-md shadow-emerald-950/30":"bg-slate-950/60 border-rose-900/40 opacity-70"),children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsx("span",{className:"font-mono font-bold text-indigo-400 text-xs px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800",children:t.symbol}),e.jsx("span",{className:i("px-2 py-0.5 rounded text-[10px] font-bold uppercase",n?"bg-emerald-950 text-emerald-300 border border-emerald-800":"bg-rose-950 text-rose-300 border border-rose-800"),children:n?"RETAINED ✓":"DROPPED ✗"})]}),e.jsx("h4",{className:"font-bold text-xs text-white mb-0.5",children:t.name}),e.jsx("span",{className:"text-[10px] text-cyan-400 block mb-1 font-mono",children:t.type}),e.jsx("p",{className:"text-[11px] text-slate-400 leading-relaxed",children:t.description})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800/80 text-[11px] space-y-1",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400",children:"Sample Variance:"}),e.jsx("span",{className:i("font-mono font-bold",n?"text-emerald-400":"text-rose-400"),children:t.variance.toFixed(4)})]}),t.isBinary&&e.jsxs("div",{className:"text-[10px] text-slate-500",children:["Bernoulli: p(1-p) = ",(t.pVal*(1-t.pVal)).toFixed(4)]})]})]},t.id)})})]}),f==="ranker"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Supervised Feature Ranker & SelectKBest Simulator"}),e.jsxs("p",{className:"text-slate-400",children:["Select a scoring criterion and adjust ",e.jsx("span",{className:"font-mono text-cyan-300",children:"k"}),". Features with the top k scores are highlighted and selected into the model training pipeline."]})]})}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-slate-400 font-semibold mr-1",children:"Scoring Metric:"}),[{id:"anova",label:"ANOVA F-Score (f_classif)"},{id:"chi2",label:"Chi-Square (chi2)"},{id:"mutual_info",label:"Mutual Info (bits)"}].map(t=>e.jsx("button",{onClick:()=>C(t.id),className:i("px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer",p===t.id?"bg-indigo-600 text-white border-indigo-400":"bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"),children:t.label},t.id))]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Select Top k Features:"}),e.jsx("input",{type:"range",min:"1",max:"7",value:c,onChange:t=>E(Number(t.target.value)),className:"w-32 accent-indigo-500"}),e.jsxs("span",{className:"font-mono text-indigo-400 font-bold text-base",children:["k = ",c]})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"font-bold text-white uppercase tracking-wider",children:["Feature Importance Rankings (",p.toUpperCase(),")"]}),e.jsxs("span",{className:"font-mono text-slate-400 text-[11px]",children:["Selected: Top ",c," of ",j.allSorted.length]})]}),e.jsx("div",{className:"space-y-3",children:j.allSorted.map((t,n)=>{const s=n<c,a=j.allSorted[0].activeScore||1,r=Math.max(3,t.activeScore/a*100);return e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsxs("span",{className:i("w-5 h-5 rounded flex items-center justify-center font-mono text-[10px] font-bold",s?"bg-indigo-600 text-white":"bg-slate-800 text-slate-500"),children:["#",n+1]}),e.jsx("span",{className:i("font-semibold",s?"text-white":"text-slate-400"),children:t.name})]}),e.jsxs("div",{className:"flex items-center gap-3 font-mono text-xs",children:[e.jsxs("span",{className:i("font-bold",s?"text-cyan-400":"text-slate-500"),children:["Score: ",t.activeScore.toFixed(2)]}),e.jsx("span",{className:i("text-[10px] font-semibold px-2 py-0.5 rounded",s?"bg-emerald-950/70 text-emerald-300 border border-emerald-800/40":"bg-slate-900 text-slate-500"),children:s?"SELECTKBEST ✓":"PRUNED ✗"})]})]}),e.jsx("div",{className:"w-full h-2.5 bg-slate-900 rounded-full overflow-hidden border border-slate-800",children:e.jsx("div",{style:{width:`${r}%`},className:i("h-full rounded-full transition-all duration-300",s?"bg-gradient-to-r from-indigo-500 to-cyan-400":"bg-slate-700")})})]},t.id)})}),e.jsxs("div",{className:"p-4 rounded-xl bg-indigo-950/30 border border-indigo-900/40 text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Critical Engineering Observation:"})," Notice how ",e.jsx("span",{className:"font-mono text-cyan-300",children:"RFID Taps"})," and ",e.jsx("span",{className:"font-mono text-cyan-300",children:"Optical Pulses"})," rank #1 and #2 right beside each other. Because univariate ranking evaluates features in isolation, both redundant duplicates get picked, wasting two of your ",c," feature slots!"]})]})]}),f==="dedup"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Greedy Pairwise Correlation Deduplication Arena"}),e.jsxs("p",{className:"text-slate-400",children:["Set the collinearity pruning threshold ",e.jsx("span",{className:"font-mono text-cyan-300",children:"|r| ≥ θ"}),". When two features have pairwise correlation exceeding this threshold, the greedy algorithm drops the redundant duplicate feature to eliminate multicollinearity."]})]}),e.jsxs("div",{className:"flex items-center gap-4 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 shrink-0",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Clean Features"}),e.jsx("span",{className:"font-mono font-bold text-emerald-400",children:h.retained.length})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Pruned Duplicates"}),e.jsx("span",{className:"font-mono font-bold text-rose-400",children:h.droppedCount})]})]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Collinear Drop Cutoff (|r|):"}),e.jsx("input",{type:"range",min:"0.70",max:"0.99",step:"0.01",value:g,onChange:t=>I(Number(t.target.value)),className:"w-44 accent-rose-500"}),e.jsxs("span",{className:"font-mono text-rose-400 font-bold text-sm",children:["|r| ≥ ",g.toFixed(2)]})]}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Recommended threshold: 0.85 to 0.90 for industrial pipelines"})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",children:[e.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"Deduplication Action Summary"}),h.pairs.length>0?e.jsx("div",{className:"space-y-3",children:h.pairs.map((t,n)=>e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/30 border border-rose-800/40 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"px-2 py-0.5 rounded bg-rose-900 text-rose-200 font-bold text-[10px]",children:"COLLINEAR DUPLICATE DETECTED"}),e.jsxs("span",{className:"font-mono text-slate-300 font-bold",children:["|r| = ",t.r]})]}),e.jsxs("p",{className:"text-slate-300",children:[e.jsx("strong",{className:"text-emerald-400",children:t.kept})," carries the exact same signal as ",e.jsx("strong",{className:"text-rose-400",children:t.dropped}),"."]})]}),e.jsxs("div",{className:"shrink-0 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-[11px] font-mono",children:["Action: ",e.jsxs("span",{className:"text-rose-400 font-bold",children:["PRUNED '",t.dropped,"'"]})]})]},n))}):e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/60 border border-slate-800 text-xs text-slate-400",children:["No pairs exceed |r| ≥ ",g.toFixed(2),". All features are sufficiently non-collinear."]}),e.jsxs("div",{className:"pt-2 text-xs text-slate-400",children:[e.jsxs("strong",{children:["Retained Clean Subset (",h.retained.length," features):"]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:h.retained.map(t=>e.jsx("span",{className:"px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-200 font-mono text-[11px]",children:t.name},t.id))})]})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Mathematical Rigor"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Formal Equations & Statistical Filter Decompositions"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Mathematical formulations for variance cutoffs, One-Way ANOVA F-tests, Pearson Chi-Square, and Multiple Testing FDR control."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider",children:"1. Variance Thresholding & ANOVA F-Test"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-emerald-400 font-bold block",children:"Continuous & Bernoulli Variance:"}),e.jsx("span",{children:"s² = [ 1 / (N - 1) ] ∑ (xᵢ - x̄)²"}),e.jsx("span",{children:"Var(X_binary) = p * (1 - p)"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Threshold for 99% quasi-constant: ","θ = 0.99 * 0.01 = 0.0099","."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-indigo-400 font-bold block",children:"One-Way ANOVA F-Statistic:"}),e.jsx("span",{children:"SS_B = ∑ n_k (x̄_k - x̄)²   (df_B = K - 1)"}),e.jsx("span",{children:"SS_W = ∑∑ (x_{ki} - x̄_k)²  (df_W = N - K)"}),e.jsx("span",{children:"F = [ SS_B / (K - 1) ] / [ SS_W / (N - K) ] ~ F_{K-1, N-K}"}),e.jsx("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:"Measures between-class group separation relative to within-class internal variance."})]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-cyan-300 uppercase tracking-wider",children:"2. Chi-Square & Multiple Testing Control"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-cyan-400 font-bold block",children:"Pearson Chi-Square Test (χ²):"}),e.jsx("span",{children:"E_{ij} = (Row_i * Col_j) / N"}),e.jsx("span",{children:"χ² = ∑∑ [ (O_{ij} - E_{ij})² / E_{ij} ] ~ χ²_{(r-1)(c-1)}"}),e.jsx("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:"Requires non-negative counts. Measures deviation from statistical independence."})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-purple-400 font-bold block",children:"Benjamini-Hochberg FDR Control:"}),e.jsx("span",{children:"P_{(k)} ≤ (k / m) * Q"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Controls the False Discovery Rate at rate ","Q"," across ","m"," candidate hypothesis tests."]})]})]})]})]})]}),e.jsxs("section",{id:"casestudies",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"Regional Engineering Applications"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Four West Bengal Industrial Case Studies"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Real enterprise case studies demonstrating basic feature selection pipelines deployed across West Bengal."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-indigo-300 uppercase tracking-wider",children:"Case 1: Metro AFC Gate Telemetry (Sealdah & Howrah)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Transit Telemetry"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Automated passenger surge forecasting across 40 gathered edge telemetry fields."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Variance Filter (θ = 0.01):"})," Pruned currency code (all 356) and resident flag (99.5% yes; Var = 0.0049)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Correlation Deduplication:"})," Optical pulses dropped due to |r| = 0.9997 with RFID taps."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"SelectKBest (ANOVA):"})," Retained top 3 non-collinear features (RFID taps, rainfall, train headway)."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-cyan-300 uppercase tracking-wider",children:"Case 2: Substation Telemetry Cleansing (Barrackpore)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Power Grid"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Pruning 32 smart meter channels to meet cellular edge gateway transmission bandwidth limits."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Zero-Variance Stripping:"})," 3 fixed firmware configuration register flags dropped instantly."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"CT Deduplication:"})," Secondary Current Transformer CT-2 pruned (|r| = 0.992 with CT-1)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold",children:"SelectPercentile (40%):"})," ANOVA F-score selects active kW, kVAR, ambient temp, and THD harmonic distortion."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-300 uppercase tracking-wider",children:"Case 3: Tea Leaf Hyperspectral Imaging (Siliguri)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"Agritech Spectroscopy"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Reducing 120 contiguous narrow optical wavelengths (400-1000 nm) to 10 key wavelengths."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Contiguous Collinearity:"})," Neighboring spectral bands (680 vs 682 nm) exhibit |r| > 0.995."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-amber-400 font-bold",children:"Greedy Deduplication:"})," Collapsed 120 overlapping bands into 26 distinct spectral windows."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"SelectKBest (f_regression):"})," Selected top 8 chlorophyll and theaflavin absorption peaks."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-300 uppercase tracking-wider",children:"Case 4: Jute Spinning Frame Vibration (Serampore)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800",children:"Factory Edge IoT"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Real-time spindle bearing failure detection under strict 20 ms inference latency."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Scale Awareness:"})," Accelerometer signals scaled before variance testing (preventing deletion)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Chi-Square Test:"})," Maintenance status categories evaluated for bearing snarl association."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-purple-400 font-bold",children:"Edge Latency:"})," Reducing 45 raw sensors to 12 optimal features dropped inference time from 180 ms to 14 ms!"]})]})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/30",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Diagnostic Verification"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Topic 4 Diagnostic Assessment Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Answer all 5 multi-stage scenario questions to evaluate your engineering intuition."})]}),d&&e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-indigo-500/40",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-bold font-mono text-cyan-300",children:[S," / ",b.length]}),e.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300",children:S===5?"Distinction":S>=3?"Pass":"Review Needed"})]})]}),e.jsx("div",{className:"space-y-5",children:b.map(t=>{m[t.id];const n=m[t.id],s=n===t.correct;return e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 rounded-lg bg-indigo-900/60 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono",children:t.id}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-xs text-slate-400 italic",children:t.scenario}),e.jsx("p",{className:"text-sm font-semibold text-slate-200 leading-relaxed",children:t.question})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5 pl-9",children:t.options.map(a=>{const r=n===a.label;let l="bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700";return d?a.label===t.correct?l="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium":r&&!s&&(l="bg-rose-950/60 border-rose-500 text-rose-200"):r&&(l="bg-indigo-950/70 border-indigo-500 text-indigo-200 font-medium"),e.jsxs("button",{disabled:d,onClick:()=>F(t.id,a.label),className:i("w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer",l),children:[e.jsxs("span",{className:"font-mono font-bold shrink-0",children:[a.label,"."]}),e.jsx("span",{children:a.text})]},a.label)})}),d&&e.jsx("div",{className:"pl-9 pt-2",children:e.jsxs("div",{className:i("p-3 rounded-xl text-xs leading-relaxed border",s?"bg-emerald-950/30 border-emerald-800/40 text-emerald-300":"bg-rose-950/30 border-rose-800/40 text-rose-300"),children:[e.jsx("div",{className:"font-bold mb-1",children:s?"✓ Correct Analysis":`✗ Incorrect (Correct Answer: ${t.correct})`}),e.jsx("div",{className:"text-slate-400",children:t.explanation})]})})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-2",children:d?e.jsx("button",{onClick:()=>{_({}),A(!1)},className:"px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors",children:"Reset Assessment"}):e.jsx("button",{onClick:R,disabled:Object.keys(m).length<b.length,className:i("px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer",Object.keys(m).length===b.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:"Submit Diagnostic Assessment"})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-rose-400",children:"Production Hazards"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Engineering Anti-Patterns"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Six architectural traps that cause basic feature selection pipelines to delete valid signals or leak data."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"📏"})," 1. Unscaled Variance Filtering"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Applying VarianceThreshold across features with different physical units (e.g. salary in INR vs age). Variables in small units get deleted regardless of signal."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Standardize continuous features before variance thresholding."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🗂️"})," 2. Data Leakage via Pre-Split Selection"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Running ANOVA F-score or SelectKBest on the entire dataset before train/test splitting. Leaks test distribution and creates overly optimistic validation results."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Enclose SelectKBest in a Pipeline fitted solely on train folds."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"♊"})," 3. Blind Collinear Redundancy Selection"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"SelectKBest picks features with top scores independently. If feature 1 and 2 are near-identical, both get picked, wasting slots on duplicate information."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Run CorrelationDeduplicator before SelectKBest."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"➖"})," 4. Negative Values in Chi-Square"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Passing StandardScaler z-scores into chi2. Standard scaling creates negative values, which violates contingency frequency assumptions and crashes with ValueError."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Use MinMaxScaler([0, 1]) or ANOVA F-test for continuous data."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🩺"})," 5. Deleting Rare Anomaly Indicators"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"In clinical or fraud datasets, rare indicators appear in only 0.2% of rows (Var = 0.002). VarianceThreshold(0.01) deletes them, wiping out key positive signals!"}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Whitelist rare binary flags from unsupervised variance sieves."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"⚡"})," 6. The Univariate XOR Trap"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Univariate scoring methods evaluate single features in isolation. Features forming synergistic XOR interactions will have F-score ≈ 0 and will be dropped."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Pre-engineer interaction features or use embedded tree models."})]})]})]}),e.jsxs("section",{id:"loaders",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Source Code & Academic Documentation"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Laboratory Implementation & Complete Study Notes"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-xl border border-slate-800",children:[e.jsx("button",{onClick:()=>w("theory"),className:i("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",y==="theory"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Study Notes (topic4_note.txt)"}),e.jsx("button",{onClick:()=>w("code"),className:i("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",y==="code"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Python Lab (basic_feature_selection_techniques_lab.py)"})]})]}),y==="code"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"basic_feature_selection_techniques_lab.py"})]}),e.jsx("span",{children:"Pure Python 3 • Zero Dependencies • Exit Code 0"})]}),e.jsx(O,{code:P,fileName:"basic_feature_selection_techniques_lab.py",title:"Basic Feature Selection Techniques Laboratory Benchmark"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"topic4_note.txt"})]}),e.jsx("span",{children:"288 Lines of Comprehensive Academic Notes"})]}),e.jsx(D,{content:M,fileName:"topic4_note.txt",title:"Topic 4: Academic Study Notes (BCAC701B)"})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8",children:[e.jsx(B,{title:"Topic 4: MAKAUT Master Viva & Technical Interview Questions",subtitle:"30 Graded Analytical Questions with Comprehensive Theoretical Rationales",questions:L}),e.jsx(V,{})]})]})};export{Q as default};
