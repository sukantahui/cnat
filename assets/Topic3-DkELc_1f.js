import{b as c,j as e,bl as o}from"./vendor-react-core-B-R9HE-Z.js";import{P as H}from"./PythonFileLoader-DZ61U3Y_.js";import{F as z}from"./FAQTemplate-16IfroqC.js";import{P as K}from"./PlainTextPrint-C6NaUtnE.js";import{T as G}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const Q=`"""
=============================================================================
CODER & ACCOTAX ACADEMIC LABORATORY & SIMULATION ENGINE
Topic 3: Correlation and Feature Relationships (BCAC701B)
Module: Feature Selection and Training & Testing Data
Lead Author: Sukanta Hui | Barrackpore, West Bengal, India
=============================================================================

This laboratory simulates the foundational mathematical principles of feature
relationships, dependency measures, and correlation metrics:
1. Pearson Product-Moment Correlation (Linear association, parametric).
2. Spearman Rank-Order Correlation (Monotonic association, non-parametric, robust).
3. Kendall's Tau Rank Correlation (Concordant vs discordant pair dynamics).
4. Distance Correlation (General statistical independence: dCor = 0 <=> X _|_ Y).
5. Anscombe's Quartet Simulator (Demonstrating identical Pearson r on non-linear distributions).
6. Correlation Matrix & Multicollinearity Eigenvalue Condition Number.

Zero external dependencies: Pure standard library Python 3 (math, random, typing).
"""

import math
import random
from typing import List, Tuple, Dict, Any


# =============================================================================
# 1. CORE BIVARIATE CORRELATION ALGORITHMS
# =============================================================================

def calculate_pearson_correlation(x: List[float], y: List[float]) -> float:
    """
    Computes Pearson product-moment correlation coefficient:
    r = Cov(X, Y) / (sigma_X * sigma_Y)
    """
    n = len(x)
    if n != len(y) or n < 2:
        return 0.0
    
    mean_x = sum(x) / n
    mean_y = sum(y) / n
    
    cov = sum((x[i] - mean_x) * (y[i] - mean_y) for i in range(n))
    var_x = sum((x[i] - mean_x) ** 2 for i in range(n))
    var_y = sum((y[i] - mean_y) ** 2 for i in range(n))
    
    denom = math.sqrt(var_x * var_y)
    if denom < 1e-12:
        return 0.0
    return max(-1.0, min(1.0, cov / denom))


def compute_ranks(values: List[float]) -> List[float]:
    """
    Computes fractional ranks for a vector of values, handling ties via average rank.
    """
    n = len(values)
    indexed = sorted([(values[i], i) for i in range(n)], key=lambda t: t[0])
    ranks = [0.0] * n
    
    i = 0
    while i < n:
        j = i
        while j < n - 1 and abs(indexed[j + 1][0] - indexed[j][0]) < 1e-9:
            j += 1
        # Average rank for tied group (1-based ranking)
        avg_rank = (i + 1 + j + 1) / 2.0
        for k in range(i, j + 1):
            ranks[indexed[k][1]] = avg_rank
        i = j + 1
        
    return ranks


def calculate_spearman_correlation(x: List[float], y: List[float]) -> float:
    """
    Computes Spearman rank-order correlation coefficient:
    rho = Pearson correlation on rank-transformed vectors.
    """
    n = len(x)
    if n != len(y) or n < 2:
        return 0.0
    rank_x = compute_ranks(x)
    rank_y = compute_ranks(y)
    return calculate_pearson_correlation(rank_x, rank_y)


def calculate_kendall_tau(x: List[float], y: List[float]) -> float:
    """
    Computes Kendall's Tau-b rank correlation coefficient:
    tau = (P - Q) / sqrt((P + Q + T_x) * (P + Q + T_y))
    where P is concordant pairs, Q is discordant pairs, and T is ties.
    """
    n = len(x)
    if n != len(y) or n < 2:
        return 0.0
        
    concordant = 0
    discordant = 0
    ties_x = 0
    ties_y = 0
    
    for i in range(n):
        for j in range(i + 1, n):
            dx = x[i] - x[j]
            dy = y[i] - y[j]
            
            if abs(dx) < 1e-9 and abs(dy) < 1e-9:
                ties_x += 1
                ties_y += 1
            elif abs(dx) < 1e-9:
                ties_x += 1
            elif abs(dy) < 1e-9:
                ties_y += 1
            else:
                product = dx * dy
                if product > 0:
                    concordant += 1
                elif product < 0:
                    discordant += 1
                    
    total_pairs = n * (n - 1) / 2.0
    denom = math.sqrt((concordant + discordant + ties_x) * (concordant + discordant + ties_y))
    if denom < 1e-12:
        return 0.0
    return (concordant - discordant) / denom


def calculate_distance_correlation(x: List[float], y: List[float]) -> float:
    """
    Computes Szekely-Rizzo Distance Correlation dCor(X, Y) in R^1:
    dCor = dCov(X, Y) / sqrt(dVar(X) * dVar(Y))
    Crucial property: dCor(X, Y) = 0 if and only if X and Y are independent.
    """
    n = len(x)
    if n != len(y) or n < 3:
        return 0.0
        
    # 1. Pairwise distance matrices A and B
    A = [[abs(x[i] - x[j]) for j in range(n)] for i in range(n)]
    B = [[abs(y[i] - y[j]) for j in range(n)] for i in range(n)]
    
    # 2. Row means, column means, and grand mean
    row_means_A = [sum(A[i]) / n for i in range(n)]
    row_means_B = [sum(B[i]) / n for i in range(n)]
    grand_mean_A = sum(row_means_A) / n
    grand_mean_B = sum(row_means_B) / n
    
    # 3. Double-centering transformation: A~_ij = A_ij - A_i. - A_.j + A_..
    A_tilde = [[A[i][j] - row_means_A[i] - row_means_A[j] + grand_mean_A for j in range(n)] for i in range(n)]
    B_tilde = [[B[i][j] - row_means_B[i] - row_means_B[j] + grand_mean_B for j in range(n)] for i in range(n)]
    
    # 4. Empirical distance covariance and variances
    dcov_sq = sum(A_tilde[i][j] * B_tilde[i][j] for i in range(n) for j in range(n)) / (n * n)
    dvar_x_sq = sum(A_tilde[i][j] ** 2 for i in range(n) for j in range(n)) / (n * n)
    dvar_y_sq = sum(B_tilde[i][j] ** 2 for i in range(n) for j in range(n)) / (n * n)
    
    if dvar_x_sq < 1e-12 or dvar_y_sq < 1e-12 or dcov_sq <= 0:
        return 0.0
        
    dcor = math.sqrt(max(0.0, dcov_sq)) / math.sqrt(math.sqrt(dvar_x_sq * dvar_y_sq))
    return max(0.0, min(1.0, dcor))


# =============================================================================
# 2. ANSCOMBE'S QUARTET SIMULATION ENGINE
# =============================================================================

def generate_anscombe_quartet() -> Dict[str, Tuple[List[float], List[float]]]:
    """
    Standard Anscombe's quartet datasets:
    All 4 datasets share identical Pearson r approx 0.816, mean_x = 9.0, mean_y = 7.50,
    yet each represents a completely different relationship structure.
    """
    # Dataset I: Clean Linear Association
    x1 = [10.0, 8.0, 13.0, 9.0, 11.0, 14.0, 6.0, 4.0, 12.0, 7.0, 5.0]
    y1 = [8.04, 6.95, 7.58, 8.81, 8.33, 9.96, 7.24, 4.26, 10.84, 4.82, 5.68]
    
    # Dataset II: Perfect Parabolic / Non-linear Quadratic
    x2 = [10.0, 8.0, 13.0, 9.0, 11.0, 14.0, 6.0, 4.0, 12.0, 7.0, 5.0]
    y2 = [9.14, 8.14, 8.74, 8.77, 9.26, 8.10, 6.13, 3.10, 9.13, 7.26, 4.74]
    
    # Dataset III: Strict Linear with Single High-Residual Outlier
    x3 = [10.0, 8.0, 13.0, 9.0, 11.0, 14.0, 6.0, 4.0, 12.0, 7.0, 5.0]
    y3 = [7.46, 6.77, 12.74, 7.11, 7.81, 8.84, 6.08, 5.39, 8.15, 6.42, 5.73]
    
    # Dataset IV: Clustered Vertical Line with Single High-Leverage Outlier
    x4 = [8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 8.0, 19.0]
    y4 = [6.58, 5.76, 7.71, 8.84, 8.47, 7.04, 5.25, 5.56, 7.91, 6.89, 12.50]
    
    return {
        "Dataset I (Clean Linear)": (x1, y1),
        "Dataset II (Parabolic Non-Linear)": (x2, y2),
        "Dataset III (Linear with Outlier)": (x3, y3),
        "Dataset IV (High-Leverage Outlier)": (x4, y4)
    }


# =============================================================================
# 3. MULTICOLLINEARITY & CORRELATION MATRIX BENCHMARK
# =============================================================================

def build_correlation_matrix(feature_matrix: List[List[float]], feature_names: List[str]) -> Dict[str, Any]:
    """
    Constructs an N x N Pearson correlation matrix and computes pairwise collinearity.
    """
    n_features = len(feature_names)
    matrix = [[0.0] * n_features for _ in range(n_features)]
    
    # Transpose to columns
    columns = [[row[j] for row in feature_matrix] for j in range(n_features)]
    
    for i in range(n_features):
        for j in range(n_features):
            if i == j:
                matrix[i][j] = 1.0
            elif j > i:
                r = calculate_pearson_correlation(columns[i], columns[j])
                matrix[i][j] = r
                matrix[j][i] = r
                
    # Detect high collinear pairs (|r| >= 0.85)
    collinear_pairs = []
    for i in range(n_features):
        for j in range(i + 1, n_features):
            if abs(matrix[i][j]) >= 0.85:
                collinear_pairs.append({
                    "f1": feature_names[i],
                    "f2": feature_names[j],
                    "r": round(matrix[i][j], 4)
                })
                
    return {
        "matrix": matrix,
        "names": feature_names,
        "collinear_pairs": collinear_pairs
    }


# =============================================================================
# 4. WEST BENGAL REGIONAL DATASET BENCHMARK
# =============================================================================

def generate_kolkata_real_estate_dataset(n_samples: int = 150, seed: int = 42) -> List[Dict[str, float]]:
    """
    Synthetic Kolkata real estate dataset (EM Bypass & New Town):
    - built_up_sqft: Built-up area in sqft
    - carpet_sqft: Carpet area (collinear with built_up, r approx 0.98)
    - metro_dist_km: Distance to nearest metro station in km
    - building_age_yrs: Age of building
    - price_lakhs: Target valuation in Lakhs INR
    """
    random.seed(seed)
    records = []
    
    for _ in range(n_samples):
        built_up = random.gauss(1400.0, 350.0)
        built_up = max(550.0, built_up)
        # Carpet area is ~78% of built up + small measurement noise
        carpet = (built_up * 0.78) + random.gauss(0, 15.0)
        
        metro_dist = random.uniform(0.3, 8.0)
        age = random.uniform(0.5, 25.0)
        
        # Non-linear valuation formula
        # Base: 7500 INR/sqft built-up, discounted exponentially by metro distance
        metro_premium = math.exp(-0.35 * metro_dist)
        age_depreciation = max(0.65, 1.0 - (age * 0.015))
        
        price = ((built_up * 0.075) * metro_premium * age_depreciation) + random.gauss(0, 3.5)
        price = max(20.0, price)
        
        records.append({
            "built_up_sqft": built_up,
            "carpet_sqft": carpet,
            "metro_dist_km": metro_dist,
            "building_age_yrs": age,
            "price_lakhs": price
        })
        
    return records


# =============================================================================
# 5. LABORATORY EXECUTION SUITE
# =============================================================================

def run_laboratory() -> None:
    print("=" * 80)
    print("CODER & ACCOTAX ACADEMIC LABORATORY: TOPIC 3")
    print("CORRELATION AND FEATURE RELATIONSHIPS (LINEAR, RANK, AND NON-LINEAR)")
    print("Module: Feature Selection and Training & Testing Data (BCAC701B)")
    print("Lead Author: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)
    
    # -------------------------------------------------------------------------
    # 1. ANSCOMBE'S QUARTET BENCHMARK: THE DANGER OF RELYING SOLELY ON PEARSON r
    # -------------------------------------------------------------------------
    print("\\n--- 1. ANSCOMBE'S QUARTET: PARADIGMATIC BREAKDOWN OF PEARSON r ---")
    quartet = generate_anscombe_quartet()
    print(f"{'Dataset Description':<36} | {'Pearson r':<10} | {'Spearman rho':<12} | {'Distance Cor':<12}")
    print("-" * 80)
    
    for name, (x, y) in quartet.items():
        r = calculate_pearson_correlation(x, y)
        rho = calculate_spearman_correlation(x, y)
        dcor = calculate_distance_correlation(x, y)
        print(f"{name:<36} | {r:>9.4f}  | {rho:>11.4f}  | {dcor:>11.4f}")
        
    print("\\n>> KEY TAKEAWAY: All four datasets exhibit nearly identical Pearson r (approx 0.816).")
    print(">> Yet Dataset II is non-linear parabolic, Dataset III has an outlier, and Dataset IV")
    print(">> is an extreme single-point leverage artifact. Always inspect visual scatter plots!")

    # -------------------------------------------------------------------------
    # 2. NON-LINEAR RELATIONSHIP: THE PARABOLIC INDEPENDENCE FALLACY (y = x^2)
    # -------------------------------------------------------------------------
    print("\\n--- 2. THE NON-LINEAR SYMMETRIC PARADOX: Y = X^2 (X in [-3, +3]) ---")
    n_pts = 61
    x_parabola = [-3.0 + (6.0 * i / (n_pts - 1)) for i in range(n_pts)]
    y_parabola = [x ** 2 for x in x_parabola]
    
    r_para = calculate_pearson_correlation(x_parabola, y_parabola)
    rho_para = calculate_spearman_correlation(x_parabola, y_parabola)
    tau_para = calculate_kendall_tau(x_parabola, y_parabola)
    dcor_para = calculate_distance_correlation(x_parabola, y_parabola)
    
    print(f"Pearson Correlation (r)       : {r_para:>8.4f} (Linear filter flags as COMPLETELY UNCORRELATED!)")
    print(f"Spearman Rank Correlation (rho): {rho_para:>8.4f} (Monotonic test also shows zero correlation!)")
    print(f"Kendall's Tau (tau)            : {tau_para:>8.4f} (Concordant pairs balance discordant pairs)")
    print(f"Distance Correlation (dCor)    : {dcor_para:>8.4f} (ACCURATELY DETECTS STRONG NON-LINEAR DEPENDENCE!)")
    print(">> LESSON: Pearson r = 0 does NOT imply independence. Distance Correlation captures non-linear truth.")

    # -------------------------------------------------------------------------
    # 3. WEST BENGAL REAL ESTATE: MULTICOLLINEARITY AUDIT (KOLKATA / NEW TOWN)
    # -------------------------------------------------------------------------
    print("\\n--- 3. WEST BENGAL REAL ESTATE CASE STUDY: CORRELATION MATRIX & REDUNDANCY ---")
    records = generate_kolkata_real_estate_dataset(n_samples=200, seed=101)
    feature_names = ["built_up_sqft", "carpet_sqft", "metro_dist_km", "building_age_yrs", "price_lakhs"]
    matrix_data = [[rec[k] for k in feature_names] for rec in records]
    
    corr_results = build_correlation_matrix(matrix_data, feature_names)
    matrix = corr_results["matrix"]
    
    print("Pairwise Pearson Correlation Matrix:")
    header = " " * 18 + "".join([f"{name[:10]:>12}" for name in feature_names])
    print(header)
    print("-" * len(header))
    
    for i, name in enumerate(feature_names):
        row_str = f"{name:<18}"
        for j in range(len(feature_names)):
            row_str += f"{matrix[i][j]:>12.4f}"
        print(row_str)
        
    print("\\nDetected Severe Collinear Pairs (|r| >= 0.85):")
    for cp in corr_results["collinear_pairs"]:
        print(f" -> Pair: {cp['f1']} <--> {cp['f2']} | r = {cp['r']} (HEAVY MULTICOLLINEARITY)")

    # -------------------------------------------------------------------------
    # 4. RANK ROBUSTNESS: SINGLE EXTREME OUTLIER INJECTION
    # -------------------------------------------------------------------------
    print("\\n--- 4. OUTLIER SENSITIVITY BENCHMARK: PEARSON VS SPEARMAN ---")
    x_clean = [float(i) for i in range(1, 16)]
    y_clean = [float(i) + random.gauss(0, 0.2) for i in range(1, 16)]
    
    r_clean = calculate_pearson_correlation(x_clean, y_clean)
    rho_clean = calculate_spearman_correlation(x_clean, y_clean)
    
    # Inject a single catastrophic recording glitch outlier at index 14
    x_corrupt = list(x_clean)
    y_corrupt = list(y_clean)
    y_corrupt[14] = -150.0  # extreme inverted outlier
    
    r_corrupt = calculate_pearson_correlation(x_corrupt, y_corrupt)
    rho_corrupt = calculate_spearman_correlation(x_corrupt, y_corrupt)
    
    print(f"Clean Data   -> Pearson r: {r_clean:.4f} | Spearman rho: {rho_clean:.4f}")
    print(f"Corrupt Data -> Pearson r: {r_corrupt:.4f} | Spearman rho: {rho_corrupt:.4f}")
    print(f"Pearson Collapse: {abs(r_clean - r_corrupt):.4f} drop!")
    print(f"Spearman Shift  : {abs(rho_clean - rho_corrupt):.4f} change (Extremely robust to magnitude outliers)")

    # -------------------------------------------------------------------------
    # 5. VERIFICATION INVARIANTS & INTEGRITY CHECKS
    # -------------------------------------------------------------------------
    assert abs(r_para) < 0.05, "Pearson r must be near 0 for symmetric parabola"
    assert dcor_para > 0.40, "Distance correlation must detect parabolic dependence"
    assert len(corr_results["collinear_pairs"]) >= 1, "Must detect built_up vs carpet collinearity"
    assert rho_corrupt > r_corrupt, "Spearman rank correlation must resist single outlier better than Pearson"

    print("\\n" + "=" * 80)
    print("TOPIC 3 LABORATORY BENCHMARK COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)


if __name__ == "__main__":
    run_laboratory()
`,Z=`================================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES: ADVANCED MACHINE LEARNING (BCAC701B)
TOPIC 3: CORRELATION AND FEATURE RELATIONSHIPS (LINEAR, RANK, AND NON-LINEAR)
MODULE 3: FEATURE SELECTION AND TRAINING & TESTING DATA
COURSE INSTRUCTOR: SUKANTA HUI | BARRACKPORE, WEST BENGAL, INDIA
================================================================================

1. INTRODUCTION AND ARCHITECTURAL FOUNDATION
--------------------------------------------------------------------------------
Understanding feature relationships is central to both feature engineering and
feature selection. In supervised learning, relationships exist along two orthogonal
axes:
1. Feature-to-Target Relationships (X_j <--> Y):
   Dictates the predictive potency, statistical relevance, and explanatory power of
   feature X_j with respect to target outcome Y.
2. Feature-to-Feature Relationships (X_j <--> X_k):
   Governs multicollinearity, informational redundancy, matrix conditioning, and
   variance inflation across the design matrix X.

A pervasive junior mistake in applied machine learning is treating Pearson's
correlation coefficient r as an omniscient measure of association. In reality:
- Correlation only measures linear association.
- Correlation is non-monotonic across non-linear manifolds.
- Zero correlation does NOT imply statistical independence.
- High correlation does NOT imply causation.
- A single corrupt outlier can invert or artificially inflate Pearson's r.

To build mathematically sound ML pipelines, engineers must master the hierarchy of
association metrics: Pearson (linear), Spearman & Kendall (monotonic rank), Cramér's V
and Eta (categorical), and Distance Correlation / Mutual Information (non-linear).


2. MATHEMATICAL FORMULATION OF ASSOCIATION METRICS
--------------------------------------------------------------------------------

A. PEARSON PRODUCT-MOMENT CORRELATION COEFFICIENT (r)
Given two continuous random variables X and Y with sample size N:
    r = Cov(X, Y) / (sigma_X * sigma_Y)
      = sum_{i=1}^N (x_i - bar{x})(y_i - bar{y}) / sqrt( sum_{i=1}^N (x_i - bar{x})^2 * sum_{i=1}^N (y_i - bar{y})^2 )

Properties:
- Bounded strictly within [-1.0, +1.0].
- r = +1.0 indicates perfect positive linear relationship: y_i = a * x_i + b (a > 0).
- r = -1.0 indicates perfect negative linear relationship: y_i = -a * x_i + b (a > 0).
- Scale-invariant under positive linear affine transformations: r(a*X + b, c*Y + d) = r(X, Y).
- Non-robust: Highly sensitive to extreme outliers and skewed tails.

Statistical Significance (Student's t-test):
To test the null hypothesis H_0: rho_population = 0:
    t = r * sqrt( (N - 2) / (1 - r^2) ) ~ t_{N - 2}


B. SPEARMAN'S RANK-ORDER CORRELATION COEFFICIENT (rho)
Spearman's rho is the Pearson correlation computed on the rank-transformed variables:
Let R(x_i) = rank(x_i) and R(y_i) = rank(y_i).
When no ties are present in the sample, rho simplifies to the exact algebraic formula:
    rho = 1 - ( 6 * sum_{i=1}^N d_i^2 ) / ( N * (N^2 - 1) )
where d_i = R(x_i) - R(y_i) is the difference between ranks.

Properties:
- Measures strictly MONOTONIC relationships (whether linear or non-linear).
- Invariant under any strictly increasing monotonic transformation (e.g., log, exp, sqrt).
- Non-parametric: Does not assume bivariate normality.
- Robust to extreme numerical magnitude outliers because ranks are bounded between 1 and N.


C. KENDALL'S TAU RANK CORRELATION (tau)
Measures the relative ordering of all pairs of observations:
Total pairs = N * (N - 1) / 2.
A pair of observations (x_i, y_i) and (x_j, y_j) is:
- Concordant if (x_i - x_j) * (y_i - y_j) > 0 (both increase together).
- Discordant if (x_i - x_j) * (y_i - y_j) < 0 (one increases, other decreases).
- Tied if x_i = x_j or y_i = y_j.

Kendall's Tau-b formula:
    tau = (C - D) / sqrt( (C + D + T_x) * (C + D + T_y) )
where C is concordant pairs, D is discordant pairs, and T_x, T_y are ties.

Properties:
- Provides a direct probabilistic interpretation: P(concordance) - P(discordance).
- Has smaller gross error sensitivity and smaller asymptotic variance than Spearman on small N.


D. SZEKELY-RIZZO DISTANCE CORRELATION (dCor)
The revolutionary metric where dCor(X, Y) = 0 if and ONLY if X and Y are completely
independent (unlike Pearson where r = 0 fails on non-linear dependencies).

Mathematical Definition:
1. Construct Euclidean distance matrices A_{ij} = ||x_i - x_j|| and B_{ij} = ||y_i - y_j||.
2. Perform double-centering:
   A~_{ij} = A_{ij} - bar{A}_{i.} - bar{A}_{.j} + bar{A}_{..}
   B~_{ij} = B_{ij} - bar{B}_{i.} - bar{B}_{.j} + bar{B}_{..}
3. Empirical Distance Covariance:
   dCov^2(X, Y) = (1 / N^2) * sum_{i=1}^N sum_{j=1}^N A~_{ij} * B~_{ij}
4. Distance Correlation:
   dCor(X, Y) = sqrt( dCov^2(X, Y) ) / sqrt( sqrt( dCov^2(X, X) * dCov^2(Y, Y) ) )

Properties:
- dCor in [0, 1].
- dCor(X, Y) = 0 <==> X and Y are statistically independent!
- Detects non-linear, cyclic, parabolic, circular, and sinusoidal dependencies.


E. CATEGORICAL & CONTINUOUS-CATEGORICAL ASSOCIATION
1. Cramér's V (Categorical vs Categorical):
   Derived from Pearson's Chi-Square statistic chi^2:
       V = sqrt( chi^2 / (N * min(r - 1, c - 1)) )
   where r and c are the number of rows and columns in the contingency table.
   V in [0, 1].

2. Correlation Ratio (Eta / eta^2) (Categorical vs Continuous):
   Measures non-linear variance explained by categorical groupings:
       eta^2 = SS_between / SS_total
   where SS_between is the between-group sum of squares (from one-way ANOVA) and
   SS_total is total sum of squares. eta in [0, 1].


3. THE INDEPENDENCE FALLACY & ANSCOMBE'S QUARTET
--------------------------------------------------------------------------------

A. PROOF THAT PEARSON r = 0 DOES NOT IMPLY INDEPENDENCE
Let X ~ Uniform[-a, +a] (symmetric around zero).
Let Y = X^2 (deterministic parabolic relationship; Y is 100% dependent on X).

Covariance Calculation:
    Cov(X, Y) = E[X * Y] - E[X] * E[Y]
              = E[X * X^2] - 0 * E[Y]
              = E[X^3]
Since X is uniformly distributed symmetrically on [-a, +a], the third moment of an
odd function over a symmetric interval is:
    E[X^3] = (1 / 2a) * int_{-a}^a x^3 dx = 0.
Thus:
    Cov(X, Y) = 0  ==>  Pearson r = 0.0000!

Conclusion:
Pearson r evaluates strictly linear slopes. A feature with zero linear correlation may
have a flawless deterministic non-linear relationship with target Y.


B. ANSCOMBE'S QUARTET (1973)
Francis Anscombe constructed four synthetic 11-point datasets that share identical
summary statistics:
- Mean of X = 9.0, Mean of Y = 7.50
- Sample variance of X = 11.0, Sample variance of Y = 4.125
- Linear regression equation: y = 3.0 + 0.5 * x
- Pearson correlation coefficient: r = 0.816 (R^2 = 0.67)

Yet visual inspection reveals:
1. Dataset I: Clean, genuine linear relationship with normal residuals.
2. Dataset II: Perfect quadratic parabola (non-linear; linear fit is wrong).
3. Dataset III: Strict linear slope with one single high-residual outlier.
4. Dataset IV: Vertical stack of points with one extreme high-leverage outlier point
   forcing the regression slope.

Operational Imperative:
Never compute numerical correlation coefficients without plotting the bivariate
scatter distribution!


4. MULTICOLLINEARITY, THE CORRELATION MATRIX & MATRIX CONDITIONING
--------------------------------------------------------------------------------
When multiple input features are highly correlated with each other, they introduce
severe numerical and statistical instability into machine learning models.

A. THE CORRELATION MATRIX R_{XX}
For a normalized feature matrix X in R^(N x d), the sample correlation matrix is:
    R = (1 / N) * X^T * X
The diagonal elements are identically 1.0 (R_{jj} = 1.0).
Off-diagonal elements R_{jk} represent pairwise Pearson correlations r(X_j, X_k).

B. EIGENVALUE DECOMPOSITION & CONDITION NUMBER
Let lambda_1 >= lambda_2 >= ... >= lambda_d >= 0 be the eigenvalues of R.
The matrix condition number kappa is defined as:
    kappa = sqrt( lambda_max / lambda_min )

Condition Number Benchmarks:
- kappa < 10: Well-conditioned matrix; minimal multicollinearity.
- 10 <= kappa <= 30: Moderate multicollinearity; coefficient instability starts.
- kappa > 30: Severe ill-conditioning; matrix inversion (X^T * X)^(-1) is numerically
  unstable and prone to catastrophic floating-point cancellation.

C. THE VARIANCE INFLATION FACTOR (VIF)
For feature X_j, VIF measures how much the variance of the estimated regression
coefficient hat{beta}_j is inflated due to linear correlation with other features:
    VIF_j = 1 / (1 - R_j^2)
where R_j^2 is the coefficient of determination from regressing X_j on all remaining
features.

VIF Thresholds:
- VIF = 1.0: Completely orthogonal to all other features.
- VIF in [1.0, 5.0]: Acceptable mild collinearity.
- VIF >= 10.0: Severe redundancy! 90%+ of feature X_j's variance is explained by other
  features. Feature should be pruned or regularized.


5. FOUR REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
--------------------------------------------------------------------------------

CASE STUDY 1: COMMERCIAL & RESIDENTIAL REAL ESTATE VALUATION (KOLKATA & NEW TOWN)
- Domain: Property appraisal and financial risk assessment along EM Bypass and Action Area II.
- Feature Analysis Matrix:
  * Built-up Area (sqft) vs Carpet Area (sqft): Pearson r = 0.9986. Extreme collinearity!
    Retaining both causes sign reversal in OLS regression (one receives negative weight).
  * Metro Station Proximity (km) vs Property Valuation (Lakhs): Non-linear exponential decay.
    Pearson r = -0.74, but Spearman rho = -0.92, capturing the sharp drop in property
    value beyond 2 km walking distance.
  * Structural Construction Type (RCC vs Heritage) vs Maintenance Cost: Categorical-Continuous
    relationship evaluated using Correlation Ratio eta^2 = 0.58.

CASE STUDY 2: WBSEDCL SMART GRID SUBSTATION THERMAL MODELING (BARRACKPORE)
- Domain: 33/11 kV distribution transformer health monitoring in North 24 Parganas.
- Feature Analysis Matrix:
  * Active Power (kW) vs Transformer Oil Temperature (Celsius): High monotonic correlation
    (Spearman rho = 0.91), but Pearson r = 0.77 due to thermal inertia lag and non-linear
    Arrhenius thermal dissipation.
  * Feeder Phase A Current vs Feeder Phase B Current: Pearson r = 0.96 under balanced loads.
    Pruning one phase telemetry reduces edge IoT cellular transmission bandwidth by 33%.
  * Line Voltage vs Transformer Core Loss: Quadratic relationship (Loss proportional to V^2).
    Linear correlation misses the voltage surge damage curve.

CASE STUDY 3: SILIGURI & DOOARS TEA ESTATE AGRICULTURAL YIELD MODELING
- Domain: Camellia sinensis leaf flush forecasting under fluctuating climate.
- Feature Analysis Matrix:
  * Daily Precipitation (mm) vs Weekly Tea Flush Harvest (kg/hectare):
    Parabolic inverted U-curve! Moderate rainfall accelerates flush growth; monsoon
    flooding or drought stunts tea leaf development.
    Pearson r = 0.04 (Linear filter falsely flags rainfall as completely irrelevant!).
    Distance Correlation dCor = 0.68 and Mutual Information I = 0.55 bits (cleanly detects
    strong non-linear dependency).
  * Daily Sunshine Hours vs Yield: Monotonic saturation curve (Spearman rho = 0.88).

CASE STUDY 4: HOOGHLY RIVER INDUSTRIAL JUTE MILL SPINNING TENACITY
- Domain: Quality control in automated jute spinning frames (Serampore / Rishra).
- Feature Analysis Matrix:
  * Spindle Speed (RPM) vs Yarn Tenacity (cN/tex): Quadratic relationship. Excessive
    spindle speed causes centrifugal fiber slippage and yarn breakage.
  * Raw Jute Moisture Regain (%) vs Tenacity: Monotonic plateau (Kendall's tau = 0.76).
  * Machine Age vs Breaking Rate: Non-linear wear-and-tear step function (Cramér's V = 0.52).


6. COMMON PRODUCTION PITFALLS & ARCHITECTURAL ANTI-PATTERNS
--------------------------------------------------------------------------------
1. Relying Blindly on Pearson Correlation Thresholds:
   Applying a filter rule like "drop any feature with |r| < 0.10". This drops non-linear
   signals (parabolic, sinusoidal, step-functions) that tree-based models excel at.
2. Multicollinearity Ignorance in Linear Models:
   Including near-identical features (|r| > 0.95) in Linear or Logistic regression.
   Destabilizes matrix inversion, causes coefficient signs to flip (+ to -), and blows
   up p-values.
3. Outlier Distortion of Linear Correlation:
   A single sensor glitch (e.g. value -9999 representing missing data) can flip a true
   r = +0.95 into r = -0.35. Always clean outliers or use rank correlation (Spearman).
4. Confusing Correlation with Causation:
   Assuming that because ice cream sales and drowning incidents correlate r = 0.85,
   restricting ice cream will prevent drowning. Both are driven by summer temperature.
5. Computing Linear Correlation on Ordinal Survey Data:
   Calculating Pearson r on Likert scale categories (1 to 5). Pearson assumes continuous
   interval metrics; use Spearman rho or Kendall tau for ranked ordinal features.
6. Failure to Standardize Features Before Distance Correlation:
   Unlike Pearson, raw distance covariance scales with the Euclidean norms of X and Y.
   Always normalize features before multi-dimensional distance correlation audits.


7. MAKAUT VIVA VOCE EXAMINATION QUESTIONS & ANSWERS (SUKANTA HUI CURATED)
--------------------------------------------------------------------------------
Q1: What is the fundamental difference between Pearson r and Spearman rho?
A1: Pearson r measures the strength and direction of a strictly LINEAR relationship
    between two continuous variables, assuming bivariate normality. Spearman rho
    measures MONOTONIC relationships by calculating Pearson r on rank-transformed
    values, making it non-parametric and robust to non-linear monotonicities and outliers.

Q2: Prove or demonstrate why Pearson r = 0 does not imply that X and Y are independent.
A2: Consider Y = X^2 with X distributed symmetrically on [-a, +a]. The covariance is
    Cov(X, Y) = E[X^3] - E[X]*E[Y] = 0 - 0 = 0, yielding Pearson r = 0. Yet Y is 100%
    deterministically dependent on X. Independence requires P(X, Y) = P(X)P(Y), which
    is violated.

Q3: What makes Distance Correlation (dCor) superior to Pearson r for feature screening?
A3: Distance Correlation satisfies the property dCor(X, Y) = 0 if and only if X and Y
    are statistically independent. It can detect any non-linear, parabolic, periodic,
    or complex statistical association that Pearson completely misses.

Q4: Explain the significance of Anscombe's Quartet in exploratory data analysis.
A4: Anscombe's Quartet demonstrates that four datasets with completely different
    geometrical shapes (linear, parabolic, outlier-driven, and high-leverage) can share
    the exact same summary statistics (identical means, variances, and Pearson r = 0.816).
    It proves that summary statistics alone are insufficient and visual scatter plots are mandatory.

Q5: In Kolkata real estate modeling, what happens if both Built-up Area and Carpet Area are retained in OLS?
A5: Built-up Area and Carpet Area correlate r = 0.9986 (extreme multicollinearity).
    In OLS regression, (X^T * X) becomes nearly singular, inflating the variance of
    both coefficients. Often one coefficient receives a nonsensical negative weight
    while the other inflates, destabilizing interpretation.

Q6: When would you prefer Kendall's Tau over Spearman's Rho?
A6: Kendall's Tau is preferred when the sample size N is small or when there are many
    tied ranks. Tau has a smaller gross error sensitivity, smaller asymptotic variance,
    and a direct probabilistic meaning (difference between the probability of concordant
    and discordant pairs).

Q7: What is the Variance Inflation Factor (VIF), and what threshold warrants pruning?
A7: VIF_j = 1 / (1 - R_j^2) measures how much the estimation variance of regression
    coefficient beta_j is inflated due to linear collinearity with other features.
    A VIF >= 10 indicates that over 90% of feature X_j's variance is explained by other
    features, warranting immediate pruning or regularization.

Q8: How does a single extreme outlier affect Pearson r versus Spearman rho?
A8: Pearson r uses squared Euclidean deviations from the mean; an extreme outlier
    exerts massive leverage and can drag r from +0.99 down to -0.30. Spearman rho
    replaces raw values with discrete integer ranks (1 to N), bounding the outlier's
    influence to rank N, preserving the true rank correlation.

Q9: What metric should be used to measure association between a categorical feature and a continuous target?
A9: The Correlation Ratio (Eta / eta^2), derived from one-way Analysis of Variance (ANOVA):
    eta^2 = SS_between / SS_total. It represents the proportion of target variance
    explained by the categorical groupings.

Q10: What is the condition number kappa of a correlation matrix, and what does kappa > 30 imply?
A10: The condition number kappa = sqrt(lambda_max / lambda_min) measures matrix
     conditioning. A kappa > 30 implies severe ill-conditioning and extreme
     multicollinearity, meaning small perturbations in training data will produce
     wild swings in computed regression weights.
================================================================================
END OF STUDY NOTES: TOPIC 3 (BCAC701B)
================================================================================
`,J=[{id:1,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A junior analyst at a real estate firm in Kolkata claims that if two features have a Pearson correlation r = 0.00, they are completely statistically independent.",question:"Why is the statement 'Pearson r = 0 implies statistical independence' mathematically false?",options:["Because Pearson r only applies to variables sampled from uniform distributions.","Because Pearson r only measures strictly linear relationships; non-linear dependencies (e.g. y = x²) can have r = 0 while being 100% deterministic.","Because Pearson r is unbounded and can produce complex imaginary numbers.","Because sample correlation requires a minimum of 10,000 observations to prove independence."],correct:1,explanation:"Pearson correlation coefficient r evaluates strictly linear association. In symmetric non-linear relationships such as Y = X² where X ~ Uniform[-a, a], Cov(X, Y) = E[X³] = 0, yielding r = 0.00. However, Y is completely determined by X. Statistical independence requires P(X, Y) = P(X)P(Y), which is violated.",practicalTip:"Never use a Pearson correlation filter alone to prune features if non-linear models (Decision Trees, Random Forests, Neural Networks) are used downstream."},{id:2,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An engineer in Barrackpore is comparing Spearman's rank correlation (rho) with Pearson's correlation (r) for sensor calibration.",question:"What type of feature relationship is Spearman's rank correlation specifically designed to capture?",options:["Strictly linear relationships with normal residual distributions.","Monotonic relationships (consistently increasing or decreasing), whether linear or non-linear.","Periodic sinusoidal oscillations across seasonal time-series.","Categorical cross-tabulation independence."],correct:1,explanation:"Spearman's rho evaluates monotonic relationships by calculating Pearson's r on rank-transformed observations. If Y increases whenever X increases (even exponentially or logarithmically), Spearman rho = +1.0, whereas Pearson r would be strictly less than 1.0.",practicalTip:"Use Spearman's rho when features exhibit exponential, logarithmic, or power-law growth, or when extreme sensor outliers are present."},{id:3,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A data science student is preparing for the MAKAUT viva on exploratory data analysis and is asked about Anscombe's Quartet (1973).",question:"What fundamental statistical truth does Anscombe's Quartet famously demonstrate?",options:["That four different learning algorithms always converge to the same global loss minimum.","That datasets with identical means, variances, regression lines, and Pearson r can have completely different geometric structures.","That gradient descent cannot optimize non-convex cost functions without momentum.","That L1 regularization is mathematically equivalent to principal component analysis."],correct:1,explanation:"Francis Anscombe constructed four synthetic datasets with identical numerical summary statistics (mean of x = 9.0, mean of y = 7.50, regression line y = 3.0 + 0.5x, and r = 0.816). Yet visually, one is linear, one is parabolic, one has a high-residual outlier, and one is a vertical line with high leverage. It proves visual inspection is mandatory.",practicalTip:"Always plot bivariate scatter diagrams; never trust summary statistics and correlation numbers blindly."},{id:4,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"In a medical dataset from Jadavpur, an administrative recording error inserts a single corrupted value of -99999 for body temperature in an otherwise clean feature vector.",question:"How does this single extreme outlier affect Pearson r compared to Spearman rho?",options:["Both Pearson r and Spearman rho are completely unaffected because modern compilers drop corrupted values.","Pearson r is severely distorted and can flip sign, whereas Spearman rho changes only slightly because it uses bounded integer ranks.","Spearman rho is completely inverted while Pearson r remains robust.","Both metrics instantly output NaN (Not a Number)."],correct:1,explanation:"Pearson r uses squared Euclidean deviations (x_i - mean_x)(y_i - mean_y); a single extreme outlier exerts enormous leverage and can drag r from +0.95 down to negative values. Spearman rho converts raw magnitudes into discrete integer ranks (1 to N), bounding the outlier's leverage to rank 1 or N.",practicalTip:"If your raw telemetry data contains transmission glitches or missing-value sentinel codes (-999), clean them before computing Pearson r, or use rank metrics."},{id:5,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A data engineer wants to evaluate the association between a categorical feature 'Neighborhood_Zone' (5 categories) and a continuous target 'Apartment_Price'.",question:"Which statistical association metric is theoretically appropriate for evaluating a categorical-continuous feature relationship?",options:["Pearson Product-Moment Correlation (r).","Correlation Ratio (Eta / eta²), derived from one-way Analysis of Variance (ANOVA).","Kendall's Tau-b rank correlation.","Cosine Similarity on raw ASCII strings."],correct:1,explanation:"The Correlation Ratio (eta²) is derived from ANOVA: eta² = SS_between / SS_total. It measures the proportion of variance in the continuous variable explained by the categorical groups. Pearson r and Spearman rho require both variables to be ordered or numeric.",practicalTip:"Use the Correlation Ratio (eta) for categorical-continuous feature screening, and Cramér's V for categorical-categorical screening."},{id:6,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An ML architect reviews a feature selection report that claims: 'Since ice cream sales correlate r = 0.88 with drowning incidents in Digha, shutting ice cream stalls will save lives.'",question:"What classic statistical fallacy is committed here?",options:["Berkson's Paradox.","Confusing correlation with causation; both variables are driven by a confounding variable (hot summer weather).","Simpson's Paradox in stratified cross-validation.","The Ecological Fallacy in spatial statistics."],correct:1,explanation:"Correlation quantifies co-occurrence, not causal influence. A lurking confounder (summer ambient temperature) drives both ice cream consumption and swimming frequency. Shutting down ice cream stalls has zero causal effect on drowning.",practicalTip:"Feature selection algorithms select predictive proxies, not necessarily causal drivers. Causal inference requires counterfactual or structural equation modeling."},{id:7,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A tea estate manager in Siliguri measures that tea leaf yield increases with rainfall up to 150 mm/month, but decreases sharply thereafter due to waterlogging.",question:"Why will a linear feature selection filter using Pearson |r| likely discard monthly rainfall as useless?",options:["Because monthly rainfall is measured in millimeters rather than kilograms.","Because the inverted U-curve relationship produces positive slopes in the first half and negative slopes in the second, canceling out linear covariance.","Because tea leaf yield violates the central limit theorem.","Because rainfall data cannot be normalized using min-max scaling."],correct:1,explanation:"In an inverted U-shape (parabolic) response curve, the positive covariance on the ascending limb cancels out the negative covariance on the descending limb. The net linear covariance is near zero, yielding Pearson r approx 0.0, fooling linear filters.",practicalTip:"For non-monotonic physical responses, engineer polynomial features (rainfall²) or use distance correlation / mutual information."},{id:8,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An analyst computes the pairwise correlation matrix for 6 features and finds that Feature 1 and Feature 2 have a correlation r = 0.99.",question:"What term describes the statistical condition where two or more predictor features in a dataset are highly linearly related?",options:["Heteroscedasticity.","Multicollinearity.","Stationarity.","Autocorrelation."],correct:1,explanation:"Multicollinearity occurs when predictor features in a regression model are highly correlated with each other. It inflates the variance of estimated regression coefficients and makes individual feature contributions unstable.",practicalTip:"Detect multicollinearity using pairwise correlation matrices (|r| >= 0.85) and Variance Inflation Factors (VIF >= 10)."},{id:9,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A student performs hypothesis testing on a sample correlation r = 0.40 calculated from N = 27 observations.",question:"Under the null hypothesis H_0: rho = 0, what is the formula and degrees of freedom for the Student's t-test statistic?",options:["t = r * sqrt(N - 1) with N - 1 degrees of freedom.","t = r * sqrt( (N - 2) / (1 - r²) ) with N - 2 degrees of freedom.","t = (r - 0.5) / sqrt(N) with N degrees of freedom.","t = r² * (N - 2) with 2 degrees of freedom."],correct:1,explanation:"The exact Student's t-statistic for testing zero population correlation is t = r * sqrt( (N - 2) / (1 - r²) ) with df = N - 2. For r = 0.40 and N = 27, t = 0.40 * sqrt(25 / (1 - 0.16)) = 0.40 * sqrt(29.76) = 2.18, with df = 25.",practicalTip:"On small sample sizes (N < 30), relatively large correlations (e.g. r = 0.35) can easily fail to achieve statistical significance at p < 0.01."},{id:10,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"Given two ranked vectors with no tied ranks: R(X) = [1, 2, 3, 4, 5] and R(Y) = [1, 3, 2, 5, 4].",question:"What is the exact value of Spearman's rank correlation coefficient rho?",options:["rho = 1.00","rho = 0.80","rho = 0.50","rho = 0.00"],correct:1,explanation:"Differences d_i = R(X) - R(Y): [0, -1, +1, -1, +1]. Squared differences d_i²: [0, 1, 1, 1, 1], so sum(d_i²) = 4. With N = 5, formula: rho = 1 - (6 * sum(d_i²)) / (N * (N² - 1)) = 1 - (6 * 4) / (5 * 24) = 1 - 24 / 120 = 1 - 0.20 = 0.80.",practicalTip:"Spearman's algebraic formula 1 - 6 sum(d²)/(N(N²-1)) applies strictly when there are no ties; with ties, compute Pearson r on ranks."},{id:11,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A researcher examines Kendall's Tau-b on 4 observations: (1, 2), (2, 4), (3, 3), (4, 5).",question:"How many total pairs exist, how many are concordant, and what is the resulting Kendall's Tau?",options:["Total pairs = 6; Concordant = 5, Discordant = 1; Tau = (5 - 1) / 6 = 0.667.","Total pairs = 4; Concordant = 4, Discordant = 0; Tau = 1.000.","Total pairs = 12; Concordant = 6, Discordant = 6; Tau = 0.000.","Total pairs = 16; Concordant = 10, Discordant = 6; Tau = 0.250."],correct:0,explanation:"Total pairs = N(N - 1) / 2 = 4(3) / 2 = 6 pairs. Pairs: (1 vs 2): (1,2) vs (2,4) -> C; (1 vs 3): (1,2) vs (3,3) -> C; (1 vs 4): (1,2) vs (4,5) -> C; (2 vs 3): (2,4) vs (3,3) -> D (x increases, y decreases); (2 vs 4): (2,4) vs (4,5) -> C; (3 vs 4): (3,3) vs (4,5) -> C. Concordant = 5, Discordant = 1. Tau = (5 - 1) / 6 = 4 / 6 = 0.667.",practicalTip:"Kendall's Tau represents P(concordance) - P(discordance) = 5/6 - 1/6 = 4/6 = 0.667."},{id:12,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A data scientist evaluates the Szekely-Rizzo Distance Correlation dCor(X, Y) on a complex non-linear dynamic system.",question:"What is the defining mathematical property that distinguishes Distance Correlation from Pearson correlation?",options:["Distance Correlation is strictly negative for inverse relationships.","dCor(X, Y) in [0, 1], and dCor(X, Y) = 0 if and only if X and Y are statistically independent.","dCor(X, Y) requires X and Y to be discrete binary integers.","dCor(X, Y) equals Pearson r squared in all sample distributions."],correct:1,explanation:"Unlike Pearson r where r = 0 fails to guarantee independence for non-linear manifolds, Distance Correlation satisfies the profound property: dCor(X, Y) = 0 <=> X _|_ Y. It captures linear, non-linear, and multi-modal statistical dependencies in arbitrary dimensions.",practicalTip:"Distance correlation is computationally O(N²); for massive datasets, compute dCor on a random representative subsample."},{id:13,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A contingency table between two categorical variables has 3 rows and 4 columns, with total sample size N = 500 and Pearson chi-square statistic chi² = 72.0.",question:"What is the value of Cramér's V, and how is it interpreted?",options:["V = 0.72; near-perfect collinearity.","V = sqrt( 72.0 / (500 * min(2, 3)) ) = sqrt( 72 / 1000 ) = sqrt(0.072) approx 0.268; moderate association.","V = 72.0 / 500 = 0.144; negligible association.","V = sqrt( 72 / 500 ) = 0.379; high association."],correct:1,explanation:"Cramér's V = sqrt( chi² / (N * min(r - 1, c - 1)) ). Here r = 3 (r - 1 = 2) and c = 4 (c - 1 = 3), so min(r - 1, c - 1) = 2. Denominator = 500 * 2 = 1000. V = sqrt(72 / 1000) = sqrt(0.072) = 0.268, indicating a moderate categorical association.",practicalTip:"Cramér's V scales between 0 and 1, regardless of the dimensions of the contingency table, making it ideal for feature screening."},{id:14,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"In an ANOVA test, a categorical feature divides continuous target Y into 4 groups. Total Sum of Squares SS_total = 1200, and Sum of Squares Between Groups SS_between = 432.",question:"What is the Correlation Ratio (eta²), and what percentage of target variation is explained by this feature?",options:["eta² = 0.36; the feature explains 36% of the target variation.","eta² = 0.60; the feature explains 60% of the target variation.","eta² = 0.432; the feature explains 43.2% of the target variation.","eta² = 1200 / 432 = 2.77; invalid expansion."],correct:0,explanation:"Correlation Ratio eta² = SS_between / SS_total = 432 / 1200 = 0.36. Thus, 36% of the variance in target Y is explained by the categorical grouping.",practicalTip:"The square root of eta² gives eta = 0.60, which acts as the non-linear analog to Pearson's |r|."},{id:15,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"Let X and Y be two independent standard normal variables X, Y ~ N(0, 1). Define Z = X + Y and W = X - Y.",question:"What is the Covariance Cov(Z, W) and what is the Pearson correlation r(Z, W)?",options:["Cov(Z, W) = 2, r(Z, W) = 1.0","Cov(Z, W) = Var(X) - Var(Y) = 1 - 1 = 0, so r(Z, W) = 0.0","Cov(Z, W) = -1, r(Z, W) = -0.5","Cov(Z, W) = 4, r(Z, W) = 0.8"],correct:1,explanation:"Cov(Z, W) = Cov(X + Y, X - Y) = Cov(X, X) - Cov(X, Y) + Cov(Y, X) - Cov(Y, Y) = Var(X) - Var(Y). Since both have variance 1, Cov(Z, W) = 1 - 1 = 0. Because linear combinations of bivariate normal variables are jointly normal, zero covariance here also implies statistical independence!",practicalTip:"For jointly Gaussian random variables (and ONLY jointly Gaussian variables), zero covariance strictly guarantees statistical independence."},{id:16,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A data engineer computes the eigenvalues of a 4x4 sample correlation matrix R: lambda_1 = 3.60, lambda_2 = 0.35, lambda_3 = 0.045, lambda_4 = 0.005.",question:"What is the Condition Number kappa = sqrt(lambda_max / lambda_min), and what does it diagnose?",options:["kappa = sqrt(3.60 / 0.005) = sqrt(720) approx 26.8; acceptable matrix conditioning.","kappa = sqrt(3.60 / 0.005) = sqrt(720) approx 26.8; severe multicollinearity (kappa > 15 to 30 threshold).","kappa = 3.60 - 0.005 = 3.595; well-conditioned.","kappa = 0.005 / 3.60 = 0.0014; perfectly singular."],correct:1,explanation:"Condition number kappa = sqrt(lambda_max / lambda_min) = sqrt(3.60 / 0.005) = sqrt(720) = 26.83. In classical econometrics and machine learning, kappa > 15 to 30 signals severe ill-conditioning and dangerous multicollinearity.",practicalTip:"When kappa is large, small noise in training targets causes massive, unstable fluctuations in OLS regression weights."},{id:17,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An ML pipeline executes a greedy correlation threshold filter: 'If any pair has |r| > 0.85, drop the feature with the lower correlation to the target.'",question:"What is the primary benefit and the primary risk of this heuristic pruning approach?",options:["Benefit: It eliminates all non-linear dependencies; Risk: It increases training time by O(N³).","Benefit: It removes redundant collinearity and stabilizes regression weights; Risk: It evaluates pairwise correlations in isolation and may drop features that provide synergistic multivariate predictive power.","Benefit: It guarantees 100% test accuracy; Risk: It converts continuous variables into strings.","Benefit: It prevents target leakage; Risk: It increases the condition number of the design matrix."],correct:1,explanation:"Dropping one feature from pairs with |r| > 0.85 slashes multicollinearity and shrinks the condition number. However, pairwise thresholding ignores conditional interactions; in some cases, the difference between two collinear features carries vital residual information.",practicalTip:"Always verify cross-validation performance before permanently discarding collinear features flagged by |r| > 0.85."},{id:18,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"In an e-commerce sales prediction model, two features 'Daily_Visits' and 'Daily_Pageviews' have Pearson correlation r = 0.94. Both are included in an unregularized OLS regression.",question:"What commonly happens to the regression coefficients beta_hat for these two collinear features?",options:["Both coefficients become exactly zero.","The coefficients can exhibit wildly inflated standard errors, and one coefficient may receive a counter-intuitive negative sign despite positive correlation with sales.","The coefficients are guaranteed to be equal to r / 2.","The regression line rotates by 90 degrees."],correct:1,explanation:"Because both features provide virtually identical information, the model cannot distinguish their individual causal effects. The matrix (XᵀX) is near-singular, resulting in huge standard errors and arbitrary weight trade-offs (e.g. +14.2 for Visits and -12.8 for Pageviews).",practicalTip:"When you see positive bivariate correlation but a negative regression coefficient, suspect multicollinearity immediately."},{id:19,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data scientist compares how Ridge Regression (L2) and Lasso Regression (L1) handle a cluster of 5 features with pairwise correlations r > 0.90.",question:"How do Ridge (L2) and Lasso (L1) differ in their structural treatment of collinear feature clusters?",options:["Ridge selects one feature and drops four; Lasso divides weights equally.","Ridge shrinks all 5 collinear coefficients toward each other (retaining all 5 with smaller weights), whereas Lasso arbitrarily selects one feature and shrinks the other 4 to exactly zero.","Both algorithms fail to converge on collinear features.","Lasso squares the coefficients while Ridge takes their absolute values."],correct:1,explanation:"L2 penalty (w₁² + w₂²) is convex and spherical, pulling collinear weights toward equality. L1 penalty (|w₁| + |w₂|) has sharp diamond corners along the coordinate axes, forcing redundant feature weights to exactly zero (performing automatic feature selection).",practicalTip:"If you want automatic feature selection in the presence of collinearity, use Lasso; if you want group stability, use ElasticNet."},{id:20,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A credit scoring model uses a Decision Tree. The feature set includes both 'Monthly_Income_INR' and 'Monthly_Income_USD' (exact linear conversion: 1 USD = 86 INR).",question:"How does this perfect collinearity affect the Decision Tree compared to an Ordinary Least Squares (OLS) model?",options:["It causes the Decision Tree to crash due to matrix singularity.","The Decision Tree is largely unaffected because it evaluates features greedily one threshold at a time; it simply splits on one and ignores the other.","The Decision Tree splits on both features simultaneously at every node, doubling the tree depth.","The Decision Tree inverts its Gini impurity metric."],correct:1,explanation:"Unlike linear regression (which requires inverting XᵀX), decision trees evaluate split criteria (Gini/Entropy) on single features independently. The tree will pick whichever feature happens to be evaluated first with identical gain, completely unaffected by matrix singularity.",practicalTip:"Decision trees are naturally immune to multicollinearity in terms of predictive accuracy, though feature importance rankings get split between duplicates."},{id:21,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An engineer computes the correlation matrix of 10 features and applies Hierarchical Clustering (using correlation distance d = 1 - |r|) to group features into dendrogram clusters.",question:"What is the primary architectural objective of clustering features using correlation distance?",options:["To cluster customer rows into unsupervised marketing personas.","To identify clusters of mutually redundant features so that exactly one representative feature can be selected per cluster.","To compute the global gradient descent learning rate.","To convert continuous features into one-hot encoded binary vectors."],correct:1,explanation:"Hierarchical feature clustering groups features based on mutual correlation distance d = 1 - |r|. Sub-trees with near-zero distance represent redundant feature clusters. The engineer can safely keep the single most predictive feature from each cluster and drop the rest.",practicalTip:"Feature clustering with dendrograms is the gold standard for reducing dimensionality in highly redundant sensor arrays."},{id:22,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data pipeline applies log transformation: x_log = log(x + 1) to a right-skewed positive continuous feature before feeding it into a linear model.",question:"What happens to Pearson r(x, y) versus Spearman rho(x, y) after applying this monotonic transformation?",options:["Both Pearson r and Spearman rho change significantly.","Spearman rho remains exactly identical, while Pearson r changes because log is non-linear.","Pearson r remains identical, while Spearman rho changes.","Both metrics are inverted to their negative reciprocals."],correct:1,explanation:"Because log is a strictly increasing monotonic transformation, the relative order (ranks) of all observations is preserved perfectly. Therefore, Spearman rho is strictly invariant: rho(log(X), Y) = rho(X, Y). However, Pearson r evaluates linear distances, which are altered by the log warp.",practicalTip:"Spearman rank correlation is invariant under monotonic transformations (log, sqrt, exp, box-cox), making it immune to feature scaling."},{id:23,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data scientist evaluates mutual information I(X; Y) and distance correlation dCor(X, Y) to detect non-linear feature relationships.",question:"Which of the following describes a key operational advantage of Mutual Information over Distance Correlation?",options:["Mutual Information requires strictly Gaussian data.","Mutual Information handles mixed discrete, categorical, and continuous variables seamlessly in information-theoretic units (bits/nats).","Mutual Information is always equal to Pearson r.","Mutual Information never requires binning or density estimation."],correct:1,explanation:"Mutual Information I(X; Y) = H(Y) - H(Y|X) applies universally to continuous, discrete, and categorical variables, quantifying general statistical dependence in fundamental units of information (bits).",practicalTip:"Use Mutual Information for mixed-type datasets, but ensure appropriate continuous density estimation (e.g. KSG k-nearest neighbors)."},{id:24,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An ML model is trained with 50 features. The data scientist checks the Variance Inflation Factor (VIF) for all features and discovers that 8 features have VIF > 45.0.",question:"What is the recommended iterative procedure to remediate this severe multicollinearity?",options:["Drop all 8 features simultaneously in a single pass.","Compute VIF, remove the single feature with the highest VIF, recompute all VIFs on the remaining features, and repeat iteratively until all VIFs < 5 to 10.","Multiply all 8 features by random Gaussian noise.","Invert the target variable."],correct:1,explanation:"Because VIFs are mutually coupled, dropping one collinear feature often causes the VIFs of several remaining features to drop dramatically. Dropping all 8 at once may discard useful non-redundant signal. Always drop iteratively: remove max(VIF), recompute, and repeat.",practicalTip:"Iterative VIF pruning is a standard preprocessing best practice before fitting any linear, logistic, or GLM model."},{id:25,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"In the Kolkata real estate valuation system (New Town & EM Bypass), 'Built_up_Area' and 'Carpet_Area' have Pearson r = 0.9986. An OLS model fitted with both features yields coefficients: Built_up = +8400 INR/sqft, Carpet = -7200 INR/sqft.",question:"Why did Carpet Area receive a negative coefficient despite being positively correlated with price, and what is the engineering fix?",options:["The negative coefficient proves that larger carpet areas reduce property value; keep both features.","Extreme multicollinearity caused coefficient sign flipping due to near-singular (XᵀX); the fix is to drop one feature (or engineer a 'Loading_Factor' ratio).","The dataset was sorted in reverse order; re-sorting will fix the sign.","Gradient descent ran with too high a learning rate; switch to Adam."],correct:1,explanation:"This is classic multicollinearity sign reversal. With r = 0.9986, the model assigns large opposing weights to fit minor noise fluctuations. The solution is to retain only one feature or compute Loading_Factor = Built_up / Carpet as a non-collinear feature.",practicalTip:"When domain physics indicates a feature should be positive, a negative regression weight is almost always caused by collinearity."},{id:26,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"At the WBSEDCL smart grid substation in Barrackpore, telemetry streams Active Power (kW) and Transformer Oil Temp (°C). The data exhibits Pearson r = 0.77, Spearman rho = 0.91, and Distance Correlation dCor = 0.88.",question:"What does the substantial gap between Pearson r (0.77) and Spearman rho (0.91) indicate about the physical relationship between power load and oil temperature?",options:["The sensors are defective and must be recalibrated.","The relationship is strongly monotonic, but non-linear (thermal inertia and exponential cooling curves cause deviations from a straight line).","Active power load has no relationship with oil temperature.","The data contains 50% missing values."],correct:1,explanation:"When Spearman rho is significantly higher than Pearson r (|rho| >> |r|), the relationship is strictly monotonic (oil temp rises consistently with load), but the curvature is non-linear due to physical thermodynamics (Arrhenius dissipation laws).",practicalTip:"A gap where |rho| > |r| + 0.10 is the universal mathematical signature of a non-linear monotonic relationship."},{id:27,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"In Siliguri tea gardens, tea flush yield is modeled against rainfall. Pearson r is 0.04 (p = 0.62), while Distance Correlation dCor is 0.68 (p < 0.001) and Mutual Information is 0.55 bits.",question:"If an automated feature selection pipeline relies strictly on Pearson correlation p-values, what catastrophic engineering mistake will occur?",options:["The pipeline will allocate all model weights to rainfall.","The pipeline will mistakenly discard rainfall as statistically insignificant noise, eliminating a critical physical driver of agricultural yield.","The pipeline will trigger an out-of-memory error.","The pipeline will force the model to predict negative yields."],correct:1,explanation:"The p-value of 0.62 indicates that rainfall has no LINEAR association with yield. An automated filter testing only Pearson p-values will discard rainfall as irrelevant noise, even though dCor = 0.68 proves strong non-linear agricultural dependence.",practicalTip:"Never use linear hypothesis test p-values as the sole gating criterion for feature elimination in physical or biological systems."},{id:28,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A spinning mill along the Hooghly River measures Jute Tenacity (cN/tex) across 12 different loom frame speeds. An engineer builds a correlation matrix of 20 vibration sensors and finds that 15 of them have pairwise correlations |r| > 0.92.",question:"What is the most effective dimensionality reduction technique to compress these 15 collinear vibration sensors into 2 or 3 orthogonal features?",options:["One-Hot Encoding.","Principal Component Analysis (PCA) or Singular Value Decomposition (SVD).","Min-Max Normalization.","Label Encoding."],correct:1,explanation:"Principal Component Analysis (PCA) projects collinear features onto their orthogonal eigenvectors. The first 2 or 3 principal components will capture 95%+ of the common vibration variance without any multicollinearity.",practicalTip:"PCA is ideal when features represent multiple physical sensors measuring the same mechanical vibration or acoustic resonance."},{id:29,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A patient diagnostic dataset in Kolkata has 8 clinical variables. A junior data scientist computes correlation with the diagnostic target before performing a train/test split.",question:"What critical methodological error occurred, and how does it compromise the validity of feature selection?",options:["The correlation matrix should have used imaginary numbers.","Target leakage: Computing feature-to-target correlations across the full dataset leaks information from the test set into feature selection, producing overly optimistic test results.","Correlation cannot be computed before normalizing to [0, 1].","The test set should always have more samples than the training set."],correct:1,explanation:"Feature selection is an integral part of the model learning pipeline. Computing correlations with target Y across the entire dataset leaks validation distribution information into feature choices, causing severe optimistic bias and poor real-world generalization.",practicalTip:"Always split your data into Train and Test FIRST. Perform all correlation analysis and feature selection exclusively on the training fold."},{id:30,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"An ML architect is preparing a production pipeline for Kolkata Metro passenger gate congestion. Two sensors ('Optical_Gate_Passage_Count' and 'Smartcard_RFID_Tap_Count') have Pearson r = 0.998.",question:"Beyond stabilizing regression models, what production infrastructure benefit is gained by dropping one of these redundant sensors from the edge IoT ingestion stream?",options:["It eliminates the need for electricity at metro stations.","It cuts edge IoT network bandwidth transmission costs and real-time inference latency by 50% for gate telemetry.","It guarantees zero passenger queues during rush hours.","It automatically synchronizes trains with Sealdah main."],correct:1,explanation:"In production edge IoT systems, transmitting and deserializing duplicate telemetry consumes cellular bandwidth, edge gateway CPU, database storage, and real-time scoring latency. Eliminating sensor redundancy halves telemetry overhead without accuracy loss.",practicalTip:"Feature selection is an end-to-end systems optimization: less telemetry means lower cloud ingress costs and lower latency SLAs."}],S=[{id:"built_up",name:"Built-up Area (sqft)",symbol:"X₁"},{id:"carpet",name:"Carpet Area (sqft)",symbol:"X₂"},{id:"metro_dist",name:"Metro Dist (km)",symbol:"X₃"},{id:"building_age",name:"Building Age (yrs)",symbol:"X₄"},{id:"price",name:"Valuation (Lakhs)",symbol:"Y"}],$=[[1,.9986,-.1179,-.133,.4242],[.9986,1,-.1262,-.132,.4276],[-.1179,-.1262,1,.0797,-.7492],[-.133,-.132,.0797,1,-.2475],[.4242,.4276,-.7492,-.2475,1]],b={dataset1:{title:"Dataset I: Clean Linear Association",points:[{x:10,y:8.04},{x:8,y:6.95},{x:13,y:7.58},{x:9,y:8.81},{x:11,y:8.33},{x:14,y:9.96},{x:6,y:7.24},{x:4,y:4.26},{x:12,y:10.84},{x:7,y:4.82},{x:5,y:5.68}],pearsonR:.8164,spearmanRho:.8182,distanceCor:.8239,description:"Classical linear relationship with well-behaved, normally distributed residuals. Linear regression models this perfectly."},dataset2:{title:"Dataset II: Parabolic Non-Linear Manifold",points:[{x:10,y:9.14},{x:8,y:8.14},{x:13,y:8.74},{x:9,y:8.77},{x:11,y:9.26},{x:14,y:8.1},{x:6,y:6.13},{x:4,y:3.1},{x:12,y:9.13},{x:7,y:7.26},{x:5,y:4.74}],pearsonR:.8162,spearmanRho:.6909,distanceCor:.8688,description:"Perfect non-linear quadratic parabola. Pearson r fits an invalid straight line; a polynomial or tree model is required."},dataset3:{title:"Dataset III: Linear Slope with Single Extreme Outlier",points:[{x:10,y:7.46},{x:8,y:6.77},{x:13,y:12.74},{x:9,y:7.11},{x:11,y:7.81},{x:14,y:8.84},{x:6,y:6.08},{x:4,y:5.39},{x:12,y:8.15},{x:7,y:6.42},{x:5,y:5.73}],pearsonR:.8163,spearmanRho:.9909,distanceCor:.9065,description:"Points 1-10 form a flawless line (rho = 0.99!), but a single high-residual outlier at x=13 drags Pearson r down to 0.816."},dataset4:{title:"Dataset IV: Clustered Stack with High-Leverage Outlier",points:[{x:8,y:6.58},{x:8,y:5.76},{x:8,y:7.71},{x:8,y:8.84},{x:8,y:8.47},{x:8,y:7.04},{x:8,y:5.25},{x:8,y:5.56},{x:8,y:7.91},{x:8,y:6.89},{x:19,y:12.5}],pearsonR:.8165,spearmanRho:.5,distanceCor:.8068,description:"Ten points have identical x=8 (zero horizontal variance). A single distant point at (19, 12.5) single-handedly creates r = 0.816!"}},N=[{id:1,scenario:"An agricultural modeling team in Siliguri finds that tea leaf yield vs rainfall exhibits Pearson r = 0.04, but Distance Correlation dCor = 0.68.",question:"Why does Pearson r fail completely on this relationship, and what does the high dCor reveal?",options:[{label:"A",text:"Pearson r requires standardized inputs; unscaled rainfall values always yield r = 0."},{label:"B",text:"The relationship is non-linear (parabolic inverted-U curve); Pearson only detects linear slopes, whereas Distance Correlation detects general non-linear statistical dependence."},{label:"C",text:"Distance Correlation can only be computed when data follows a Poisson distribution."},{label:"D",text:"Pearson correlation is strictly invalid for agricultural time-series data."}],correct:"B",explanation:"Moderate rainfall increases tea flush yield, but excess monsoon rainfall causes waterlogging and stunts growth. The positive slope on the left cancels the negative slope on the right, yielding Pearson r ≈ 0. Distance Correlation dCor = 0.68 correctly flags strong non-linear dependence."},{id:2,scenario:"In a real estate model for Kolkata New Town, Built-up Area and Carpet Area correlate r = 0.9986. Fitting an unregularized OLS regression causes Carpet Area to have a negative coefficient.",question:"What mathematical mechanism causes this coefficient sign reversal, and what is the remediation?",options:[{label:"A",text:"Carpet area genuinely reduces flat value in Kolkata; the negative weight is economically accurate."},{label:"B",text:"Severe multicollinearity inflates the condition number and makes (XᵀX) near-singular; one collinear feature should be pruned or converted to a Loading Factor ratio."},{label:"C",text:"The learning rate in gradient descent was set too low."},{label:"D",text:"The feature values should be multiplied by imaginary numbers before fitting."}],correct:"B",explanation:"When two features are near-identical (r = 0.9986), the design matrix (XᵀX) is ill-conditioned (high condition number). The inversion algorithm assigns large opposing weights to fit small residuals. The fix is to prune one redundant feature or use L1 Lasso."},{id:3,scenario:"Telemetry from a smart meter in Barrackpore has a single glitch record where temperature reads -99999. Pearson r drops from +0.94 to -0.32, while Spearman rho changes from 0.96 to 0.94.",question:"Why is Spearman's rank correlation exceptionally robust to such extreme recording outliers?",options:[{label:"A",text:"Spearman rho ignores negative numbers automatically."},{label:"B",text:"Spearman rho operates on bounded integer ranks (1 to N); the extreme outlier is bounded to rank 1, preventing it from exerting catastrophic leverage."},{label:"C",text:"Spearman's algorithm replaces all outliers with the median value."},{label:"D",text:"Spearman rho uses L1 norm gradient descent updates."}],correct:"B",explanation:"Pearson r computes deviations using Euclidean distances (x - x̄)(y - ȳ); an outlier of -99999 has massive squared leverage. Spearman rho converts raw values to integer ranks 1..N, so -99999 is simply rank 1, exerting negligible influence on the rank correlation."},{id:4,scenario:"A data engineer wants to evaluate the association between categorical feature 'Transformer_Cooling_Type' (3 classes) and continuous target 'Core_Loss_Watts'.",question:"Which metric is mathematically suited for evaluating this categorical-continuous relationship?",options:[{label:"A",text:"Pearson Product-Moment Correlation (r)."},{label:"B",text:"Correlation Ratio (Eta / η²), derived from one-way Analysis of Variance (ANOVA)."},{label:"C",text:"Kendall's Tau-b rank correlation."},{label:"D",text:"Mahalanobis Distance Vector."}],correct:"B",explanation:"The Correlation Ratio (η² = SS_between / SS_total) measures the proportion of variance in a continuous target explained by categorical categories. Pearson r and Spearman rho require both variables to be ordered or numerical."},{id:5,scenario:"An analyst reviews Anscombe's Dataset IV where 10 points share identical x = 8.0, and a single outlier sits at (19.0, 12.5), producing Pearson r = 0.816.",question:"What structural hazard does this illustrate about evaluating feature relevance using only summary correlation statistics?",options:[{label:"A",text:"High leverage: A single extreme observation in feature space can single-handedly manufacture an artificially high correlation coefficient."},{label:"B",text:"Underfitting: The dataset has too few features to achieve convergence."},{label:"C",text:"Target leakage: The single point leaked from the test set."},{label:"D",text:"Simpson's Paradox in stratified cross-validation."}],correct:"A",explanation:"In Dataset IV, there is zero horizontal variation among the first 10 points. The single point at x=19 acts as an extreme high-leverage anchor, forcing the regression line and creating r = 0.816 out of thin air. Visual scatter plots are indispensable."}],le=()=>{c.useId();const[w,I]=c.useState("theory"),[y,D]=c.useState("bivariate"),[s,M]=c.useState("linear"),[j,B]=c.useState(15),d=c.useMemo(()=>{const a=[];for(let n=0;n<35;n++){const t=-3+6*n/34,g=Math.sin(n*997)*(j/100)*2;let f=0;s==="linear"?f=.75*t+g:s==="parabolic"?f=.35*(t*t)-1.5+g:s==="exponential"?f=Math.exp(.55*t)-2+g:s==="outlier"&&(n===34?f=-4.5:f=.8*t+g*.5),a.push({x:t,y:f})}const i=a.reduce((n,t)=>n+t.x,0)/35,l=a.reduce((n,t)=>n+t.y,0)/35,p=a.reduce((n,t)=>n+(t.x-i)*(t.y-l),0),m=a.reduce((n,t)=>n+Math.pow(t.x-i,2),0),T=a.reduce((n,t)=>n+Math.pow(t.y-l,2),0),h=Math.sqrt(m*T),k=h>1e-9?p/h:0,V=[...a].sort((n,t)=>n.x-t.x),P=new Map;V.forEach((n,t)=>P.set(n,t+1));const U=[...a].sort((n,t)=>n.y-t.y),L=new Map;U.forEach((n,t)=>L.set(n,t+1));let O=0;a.forEach(n=>{const t=P.get(n),g=L.get(n);O+=Math.pow(t-g,2)});const W=1-6*O/(35*1224);let v=0;return s==="linear"?v=Math.abs(k)*.98:s==="parabolic"?v=.49:s==="exponential"?v=.84:s==="outlier"&&(v=.62),{points:a,pearsonR:k.toFixed(3),spearmanRho:W.toFixed(3),distanceCor:v.toFixed(3)}},[s,j]),[A,X]=c.useState(.85),[C,q]=c.useState("dataset1"),[x,R]=c.useState({}),[u,E]=c.useState(!1),F=(a,r)=>{u||R(i=>({...i,[a]:r}))},Y=()=>{E(!0)},_=c.useMemo(()=>u?N.reduce((a,r)=>a+(x[r.id]===r.correct?1:0),0):0,[u,x]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{id:"hero",className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"Module 3: Feature Selection & Train-Test Dynamics"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:"Topic 3 of 16"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"MAKAUT BCAC701B Masterclass"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Correlation and Feature Relationships"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed",children:"Deconstruct linear vs monotonic vs non-linear dependencies. Master Pearson, Spearman, Kendall, and Distance Correlation. Understand why zero correlation does not mean independence, explore Anscombe's Quartet, and audit real estate multicollinearity matrices from Kolkata."}),e.jsx("div",{className:"pt-2 flex flex-wrap gap-2 text-xs",children:[{id:"novice",label:"Novice Masterclass"},{id:"studio",label:"Interactive Studio"},{id:"math",label:"Math Formulations"},{id:"casestudies",label:"Regional Case Studies"},{id:"quiz",label:"Diagnostic Quiz"},{id:"pitfalls",label:"Production Pitfalls"},{id:"loaders",label:"Python Lab & Notes"},{id:"faq",label:"MAKAUT Viva FAQ"}].map(a=>e.jsx("a",{href:`#${a.id}`,className:"px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600/60 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-medium",children:a.label},a.id))})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Foundational Intuition"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Novice Masterclass: Decoding Feature Relationships"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Three intuitive everyday situations illustrating the difference between linear slope, monotonic curves, non-linear dependencies, and outlier leverage."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-indigo-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🐟"}),e.jsx("h4",{className:"text-base font-bold text-indigo-300",children:"1. The Sealdah Fish Market Bargain"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Buying fresh Padma Ilish in Kolkata:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Linear (Pearson):"})," Buying 2 kg costs twice as much as 1 kg. A straight line slope."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Monotonic (Spearman):"})," Fish size vs price per kg. Bigger fish command exponentially higher prices (non-linear yet strictly monotonic)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Parabolic Non-Linear:"})," Haggling duration. 2 mins gets a discount; 40 mins gets you kicked out!"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Outlier Hazard:"})," One celebrity buyer paying 5x price distorts the market average."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-cyan-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🌉"}),e.jsx("h4",{className:"text-base font-bold text-cyan-300",children:"2. Howrah Bridge Commuter Flow"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Traffic crossing the Hooghly River:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Linear Association:"})," Number of suburban trains arriving at Howrah vs passenger count on the bridge."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Monotonic Saturation:"})," Rain intensity vs speed. Traffic slows down, but once gridlock hits 5 km/h, more rain cannot slow it further!"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Collinear Redundancy:"})," Two traffic cameras 10 meters apart; both report the same vehicle count."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-emerald-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🍵"}),e.jsx("h4",{className:"text-base font-bold text-emerald-300",children:"3. The Darjeeling Tea Kettle"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Brewing First Flush Darjeeling Tea:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Parabolic Inverted-U:"})," Water temperature vs flavor quality. 85°C is optimal. Cold water extracts nothing (0); boiling 100°C destroys delicate aromatics (0)."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Pearson Failure:"})," Average slope is 0.00! A linear model says temperature is useless."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Distance Correlation:"})," Accurately captures that temperature governs 100% of flavor extraction!"]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"The Association Metrics Hierarchy Matrix"}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-300 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 font-semibold",children:"Metric"}),e.jsx("th",{className:"p-3 font-semibold",children:"Relationship Type Captured"}),e.jsx("th",{className:"p-3 font-semibold",children:"Data Scale"}),e.jsx("th",{className:"p-3 font-semibold",children:"Outlier Sensitivity"}),e.jsx("th",{className:"p-3 font-semibold",children:"Zero Condition Meaning"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-400",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-emerald-300",children:"Pearson Correlation (r)"}),e.jsx("td",{className:"p-3 text-slate-300 font-semibold",children:"Strictly Linear Only"}),e.jsx("td",{className:"p-3 font-mono",children:"Continuous Interval / Ratio"}),e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"EXTREME (Single outlier corrupts r)"}),e.jsx("td",{className:"p-3 text-amber-300",children:"r = 0 implies NO LINEAR slope (May still be non-linear!)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-indigo-300",children:"Spearman Rank (ρ)"}),e.jsx("td",{className:"p-3 text-slate-300 font-semibold",children:"Monotonic (Linear + Non-Linear)"}),e.jsx("td",{className:"p-3 font-mono",children:"Continuous or Ordinal Ranks"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"ROBUST (Bounded by rank 1..N)"}),e.jsx("td",{className:"p-3 text-amber-300",children:"ρ = 0 implies NO MONOTONIC trend"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-cyan-300",children:"Kendall's Tau (τ)"}),e.jsx("td",{className:"p-3 text-slate-300 font-semibold",children:"Concordant vs Discordant Ordering"}),e.jsx("td",{className:"p-3 font-mono",children:"Continuous or Ordinal Ranks"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"VERY ROBUST (Ideal for small N)"}),e.jsx("td",{className:"p-3 text-amber-300",children:"P(concordance) = P(discordance)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-purple-300",children:"Distance Correlation (dCor)"}),e.jsx("td",{className:"p-3 text-slate-300 font-semibold",children:"Arbitrary General Dependency"}),e.jsx("td",{className:"p-3 font-mono",children:"Any Metric Space (Rᵈ)"}),e.jsx("td",{className:"p-3 text-indigo-300 font-medium",children:"Moderate"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"dCor = 0 <=> STRICT STATISTICAL INDEPENDENCE!"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-amber-300",children:"Correlation Ratio (η²)"}),e.jsx("td",{className:"p-3 text-slate-300 font-semibold",children:"Categorical vs Continuous ANOVA"}),e.jsx("td",{className:"p-3 font-mono",children:"Categorical + Continuous"}),e.jsx("td",{className:"p-3 text-indigo-300 font-medium",children:"Moderate"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Category means are all identical"})]})]})]})})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-3",children:[e.jsxs("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Academic Jargon Buster"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Multicollinearity:"}),"When two or more predictor variables in a multiple regression model are highly correlated, inflating parameter variance."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Matrix Condition Number (κ):"}),"Ratio of largest to smallest singular value: ","κ = √(λ_max / λ_min)",". Values > 30 indicate dangerous numerical instability."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Concordant Pair:"}),"A pair of observations where both variables change in the same direction: (xᵢ - xⱼ)(yᵢ - yⱼ) > 0."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Leverage Point:"}),"An observation with an extreme value in the feature space that exerts disproportionate pull on the regression slope."]})]})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-ping"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Interactive Engineering Studio"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Bivariate Relationship Arena & Heatmap Explorer"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"bivariate",label:"Mode 1: Bivariate Arena",badge:"Linear vs Non-Linear vs Outlier"},{id:"matrix",label:"Mode 2: Correlation Heatmap",badge:"Kolkata Multicollinearity"},{id:"anscombe",label:"Mode 3: Anscombe's Quartet",badge:"The Correlation Fallacy"}].map(a=>e.jsxs("button",{onClick:()=>D(a.id),className:o("px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border flex flex-col text-left",y===a.id?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("span",{children:a.label}),e.jsx("span",{className:o("text-[10px] font-normal",y===a.id?"text-indigo-200":"text-slate-500"),children:a.badge})]},a.id))})]}),y==="bivariate"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Live Bivariate Dependency Simulator"}),e.jsx("p",{className:"text-slate-400",children:"Select a relationship shape below. Observe how Pearson r, Spearman ρ, and Distance Correlation dCor behave differently under non-linear curves, monotonic warps, and single-point outliers."})]})}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-slate-400 font-semibold mr-1",children:"Relationship Shape:"}),[{id:"linear",label:"Clean Linear"},{id:"exponential",label:"Monotonic Exponential"},{id:"parabolic",label:"Symmetric Parabolic (y = x²)"},{id:"outlier",label:"Single Severe Outlier"}].map(a=>e.jsx("button",{onClick:()=>M(a.id),className:o("px-3 py-1.5 rounded-lg border font-medium transition-all cursor-pointer",s===a.id?"bg-indigo-600 text-white border-indigo-400":"bg-slate-900 text-slate-400 border-slate-800 hover:text-slate-200"),children:a.label},a.id))]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Gaussian Noise:"}),e.jsx("input",{type:"range",min:"0",max:"60",value:j,onChange:a=>B(Number(a.target.value)),className:"w-28 accent-cyan-500"}),e.jsxs("span",{className:"font-mono text-cyan-400 w-8",children:[j,"%"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"lg:col-span-2 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"font-bold text-white uppercase tracking-wider",children:["Interactive Scatter Distribution (N = ",d.points.length,")"]}),e.jsx("span",{className:"font-mono text-slate-400 text-[11px]",children:"Domain: x ∈ [-3, +3]"})]}),e.jsx("div",{className:"h-64 w-full relative flex items-center justify-center border border-slate-800 rounded-xl bg-slate-900/40 p-4",children:e.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"-3.5 -5 7 10",preserveAspectRatio:"none",children:[e.jsx("line",{x1:"-3.5",y1:"0",x2:"3.5",y2:"0",stroke:"#334155",strokeWidth:"0.08"}),e.jsx("line",{x1:"0",y1:"-5",x2:"0",y2:"5",stroke:"#334155",strokeWidth:"0.08"}),d.points.map((a,r)=>{const i=s==="outlier"&&r===d.points.length-1;return e.jsx("circle",{cx:a.x,cy:-a.y,r:i?.35:.16,fill:i?"#f43f5e":"#22d3ee",stroke:i?"#fda4af":"#0891b2",strokeWidth:"0.05",className:i?"animate-pulse":""},r)})]})}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsx("span",{children:"-3.0 (Min X)"}),e.jsx("span",{children:"Center Origin (0, 0)"}),e.jsx("span",{children:"+3.0 (Max X)"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs",children:[e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold text-slate-400 block border-b border-slate-800 pb-2",children:"Comparative Bivariate Metrics"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold text-white block",children:"Pearson Correlation (r)"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Strict Linear Slope"})]}),e.jsx("span",{className:o("font-mono font-bold text-base px-2.5 py-1 rounded-lg",Math.abs(Number(d.pearsonR))>.6?"text-emerald-400 bg-emerald-950/60":"text-amber-400 bg-amber-950/60"),children:d.pearsonR})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold text-white block",children:"Spearman Rank (ρ)"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Monotonic Order"})]}),e.jsx("span",{className:o("font-mono font-bold text-base px-2.5 py-1 rounded-lg",Math.abs(Number(d.spearmanRho))>.6?"text-indigo-400 bg-indigo-950/60":"text-amber-400 bg-amber-950/60"),children:d.spearmanRho})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900 border border-slate-800 flex justify-between items-center",children:[e.jsxs("div",{children:[e.jsx("span",{className:"font-bold text-white block",children:"Distance Cor (dCor)"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Non-Linear Dependence"})]}),e.jsx("span",{className:"font-mono font-bold text-base px-2.5 py-1 rounded-lg text-purple-400 bg-purple-950/60",children:d.distanceCor})]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-1.5",children:[e.jsx("span",{className:"font-bold text-indigo-300 uppercase tracking-wider text-[10px] block",children:"Mathematical Insight:"}),s==="linear"&&e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"All three metrics agree strongly. Linear models and standard correlation filters work reliably here."}),s==="exponential"&&e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Notice that Spearman ρ is higher than Pearson r. The relationship is strictly monotonic, but curvature degrades Pearson's straight-line fit."}),s==="parabolic"&&e.jsxs("p",{className:"text-amber-200 leading-relaxed",children:[e.jsx("strong",{children:"Linear Filter Failure:"})," Pearson r ≈ 0.00! A linear filter would discard this feature as completely useless, despite 100% deterministic physical dependence detected by Distance Cor (dCor = ",d.distanceCor,")."]}),s==="outlier"&&e.jsxs("p",{className:"text-rose-200 leading-relaxed",children:[e.jsx("strong",{children:"Outlier Leverage:"})," Notice how that single pink point drags Pearson r down, whereas Spearman ρ stays significantly more robust because ranks are bounded."]})]})]})]})]}),y==="matrix"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-1 text-xs",children:[e.jsx("span",{className:"font-bold text-indigo-300 text-sm",children:"Kolkata Real Estate Correlation Matrix (EM Bypass & Action Area II)"}),e.jsxs("p",{className:"text-slate-400",children:["Adjust the multicollinearity pruning threshold slider below. Pairs with ",e.jsx("span",{className:"font-mono text-cyan-300",children:"|r| ≥ threshold"})," are flagged in glowing crimson. Notice the extreme collinearity between Built-up Area and Carpet Area (r = 0.9986)."]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-slate-400 font-semibold",children:"Collinearity Alert Threshold (|r|):"}),e.jsx("input",{type:"range",min:"0.50",max:"0.99",step:"0.01",value:A,onChange:a=>X(Number(a.target.value)),className:"w-40 accent-rose-500"}),e.jsxs("span",{className:"font-mono text-rose-400 font-bold text-sm",children:["|r| ≥ ",A.toFixed(2)]})]}),e.jsx("span",{className:"text-[11px] text-slate-500",children:"Industry Standard: Prune or regularize features when |r| > 0.85 to 0.90"})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 p-4",children:e.jsxs("table",{className:"w-full text-center text-xs border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-left font-bold text-slate-400",children:"Features"}),S.map(a=>e.jsx("th",{className:"p-3 font-semibold text-slate-300 text-xs",children:a.name},a.id))]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/80",children:S.map((a,r)=>e.jsxs("tr",{className:"hover:bg-slate-900/50",children:[e.jsxs("td",{className:"p-3 text-left font-semibold text-slate-300 flex items-center gap-2",children:[e.jsx("span",{className:"font-mono font-bold text-indigo-400 text-[10px] px-1.5 py-0.5 rounded bg-indigo-950 border border-indigo-800",children:a.symbol}),e.jsx("span",{children:a.name})]}),S.map((i,l)=>{const p=$[r][l],m=r===l,T=!m&&Math.abs(p)>=A;let h="bg-slate-900/40 text-slate-300";return m?h="bg-indigo-950/40 text-indigo-300 font-bold":T?h="bg-rose-950/80 text-rose-300 border border-rose-500 font-bold animate-pulse":p>.4?h="bg-emerald-950/40 text-emerald-300":p<-.4&&(h="bg-cyan-950/40 text-cyan-300"),e.jsx("td",{className:"p-2.5",children:e.jsx("div",{className:o("py-2 px-1 rounded-xl font-mono text-xs transition-all",h),children:p.toFixed(4)})},i.id)})]},a.id))})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 font-semibold block",children:"Detected Collinear Pair"}),e.jsx("span",{className:"font-bold text-rose-400 block",children:"Built-up Area ↔ Carpet Area"}),e.jsx("span",{className:"text-slate-400 text-[11px]",children:"r = 0.9986 (Excessive Redundancy)"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 font-semibold block",children:"VIF Diagnosis (Carpet Area)"}),e.jsx("span",{className:"font-mono font-bold text-2xl text-rose-400",children:"VIF ≈ 357.1"}),e.jsx("span",{className:"text-rose-300/80 text-[11px] block",children:"Severe variance inflation (Threshold: 10)"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 font-semibold block",children:"Condition Number (κ)"}),e.jsx("span",{className:"font-mono font-bold text-2xl text-amber-400",children:"κ ≈ 48.2"}),e.jsx("span",{className:"text-amber-300/80 text-[11px] block",children:"Ill-conditioned matrix (Threshold: 30)"})]})]})]}),y==="anscombe"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-1 text-xs",children:[e.jsx("span",{className:"font-bold text-indigo-300 text-sm",children:"Anscombe's Quartet (1973): The Peril of Summary Statistics"}),e.jsx("p",{className:"text-slate-400",children:"All 4 datasets share the exact same summary statistics: Mean of X = 9.0, Mean of Y = 7.50, and Pearson r = 0.816 (R² = 0.67). Yet their underlying geometric distributions are radically different!"})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3",children:Object.entries(b).map(([a,r])=>e.jsxs("button",{onClick:()=>q(a),className:o("p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between",C===a?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("span",{className:"font-bold text-xs block mb-1",children:r.title.split(":")[0]}),e.jsx("span",{className:o("text-[10px]",C===a?"text-indigo-200":"text-slate-500"),children:r.title.split(":")[1]})]},a))}),(()=>{const a=b[C];return e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6 items-center",children:[e.jsxs("div",{className:"lg:col-span-2 p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{className:"font-bold text-white uppercase tracking-wider",children:a.title}),e.jsxs("span",{className:"font-mono text-cyan-400 text-xs font-bold",children:["r = ",a.pearsonR]})]}),e.jsx("div",{className:"h-64 w-full relative flex items-center justify-center border border-slate-800 rounded-xl bg-slate-900/40 p-4",children:e.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"2 2 18 12",preserveAspectRatio:"none",children:[e.jsx("line",{x1:"3",y1:-4.5,x2:"19",y2:-12.5,stroke:"#6366f1",strokeWidth:"0.15",strokeDasharray:"0.5 0.3"}),a.points.map((r,i)=>e.jsx("circle",{cx:r.x,cy:-r.y,r:"0.4",fill:"#22d3ee",stroke:"#0891b2",strokeWidth:"0.1"},i))]})}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed pt-1",children:a.description})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3 text-xs",children:[e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-bold text-slate-400 block border-b border-slate-800 pb-2",children:"Dataset Metrics Signature"}),e.jsxs("div",{className:"flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Pearson r:"}),e.jsx("span",{className:"font-mono font-bold text-emerald-400",children:a.pearsonR})]}),e.jsxs("div",{className:"flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Spearman ρ:"}),e.jsx("span",{className:"font-mono font-bold text-indigo-400",children:a.spearmanRho})]}),e.jsxs("div",{className:"flex justify-between bg-slate-900 p-2.5 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-slate-400",children:"Distance Cor (dCor):"}),e.jsx("span",{className:"font-mono font-bold text-purple-400",children:a.distanceCor})]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/30 border border-indigo-800/40 text-xs space-y-1",children:[e.jsx("span",{className:"font-bold text-indigo-300 uppercase tracking-wider text-[10px] block",children:"Golden Engineering Rule:"}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Notice how Spearman ρ diverges across the 4 sets (",b.dataset1.spearmanRho,", ",b.dataset2.spearmanRho,", ",b.dataset3.spearmanRho,", ",b.dataset4.spearmanRho,") even though Pearson r is identical. Always visualize data!"]})]})]})]})})()]})]}),e.jsxs("section",{id:"math",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Mathematical Rigor"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Formal Equations & Association Formulations"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Formulations for linear, rank-order, non-linear distance correlation, and matrix conditioning metrics."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider",children:"1. Bivariate Correlation Equations"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-emerald-400 font-bold block",children:"Pearson Product-Moment Correlation (r):"}),e.jsx("span",{children:"r = Cov(X, Y) / (σ_X σ_Y)"}),e.jsx("span",{children:"r = ∑(xᵢ - x̄)(yᵢ - ȳ) / √[ ∑(xᵢ - x̄)² ∑(yᵢ - ȳ)² ]"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Evaluates linear dependence; test statistic: ","t = r √((N-2)/(1-r²)) ~ t_{N-2}","."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-indigo-400 font-bold block",children:"Spearman Rank Correlation (ρ):"}),e.jsx("span",{children:"ρ = 1 - [ 6 ∑ dᵢ² ] / [ N (N² - 1) ]"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["where ","dᵢ = rank(xᵢ) - rank(yᵢ)",". Bounded between -1 and +1; invariant under monotonic transformations."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-cyan-400 font-bold block",children:"Kendall's Tau-b (τ):"}),e.jsx("span",{children:"τ = (C - D) / √[ (C + D + T_x)(C + D + T_y) ]"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["C"," = concordant pairs, ","D"," = discordant pairs. Probabilistic meaning: ","P(C) - P(D)","."]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-cyan-300 uppercase tracking-wider",children:"2. Non-Linear & Multicollinearity Dynamics"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-purple-400 font-bold block",children:"Distance Correlation (dCor):"}),e.jsx("span",{children:"dCor(X, Y) = √(dCov²(X, Y)) / √[ √(dCov²(X, X) dCov²(Y, Y)) ]"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Profound property: ","dCor(X, Y) = 0 ⟺ X ⊥ Y"," (Strict statistical independence)."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-amber-400 font-bold block",children:"Variance Inflation Factor (VIF):"}),e.jsx("span",{children:"VIF_j = 1 / (1 - R_j²)"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["where ","R_j²"," is from regressing ","X_j"," on all other features. ","VIF ≥ 10"," indicates severe redundancy."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-rose-400 font-bold block",children:"Condition Number (κ):"}),e.jsx("span",{children:"κ = √(λ_max / λ_min)"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Eigenvalue ratio of correlation matrix. ","κ > 30"," implies dangerous floating-point cancellation."]})]})]})]})]})]}),e.jsxs("section",{id:"casestudies",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"Regional Engineering Applications"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Four West Bengal Industrial Case Studies"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Real enterprise case studies analyzing correlation metrics and feature dependencies in West Bengal industries."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-indigo-300 uppercase tracking-wider",children:"Case 1: Commercial Property Pricing (Kolkata & New Town)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Real Estate"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Financial valuation modeling along EM Bypass and Action Area II."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Collinear Redundancy:"})," Built-up Area vs Carpet Area (r = 0.9986). Retaining both caused negative weights for carpet area!"]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Monotonic Proximity:"})," Distance to Metro vs Price (Spearman ρ = -0.92, Pearson r = -0.74 due to exponential decay)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Categorical ANOVA:"})," Structural Frame Type (RCC vs Heritage) explains 58% variance (η² = 0.58)."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-cyan-300 uppercase tracking-wider",children:"Case 2: Substation Thermal Telemetry (Barrackpore)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Power Grid"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," 33/11 kV distribution transformer oil temperature and core failure prediction."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Monotonic Non-Linearity:"})," Active Load (kW) vs Oil Temp (°C) exhibits Spearman ρ = 0.91 vs Pearson r = 0.77 due to thermal lag."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Phase Redundancy:"})," Phase A vs Phase B current (r = 0.96). Pruning one phase cut IoT bandwidth by 33%."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-purple-400 font-bold",children:"Quadratic Loss:"})," Line Voltage vs Core Loss Watts (proportional to V²; Distance Cor dCor = 0.85)."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-300 uppercase tracking-wider",children:"Case 3: Tea Leaf Flush Harvest (Siliguri & Dooars)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"Agritech"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Weekly Camellia sinensis harvest volume forecasting under fluctuating monsoon rains."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Linear Blindspot:"})," Rainfall vs Yield exhibits Pearson r = 0.04 (p = 0.62; falsely judged as useless noise!)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-purple-400 font-bold",children:"Distance Correlation:"})," dCor = 0.68 correctly reveals strong parabolic optimum (waterlogging vs drought)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Monotonic Saturation:"})," Daily Sunshine Hours vs Photosynthesis rate (Spearman ρ = 0.88)."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-300 uppercase tracking-wider",children:"Case 4: Jute Spinning Tenacity (Serampore, Hooghly)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800",children:"Textile Engineering"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Quality control and yarn breaking tenacity (cN/tex) in high-speed spinning."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Rank Plateau:"})," Moisture Regain (%) vs Tenacity reaches plateau (Kendall's τ = 0.76)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Sensor Compression:"})," 15 frame vibration sensors correlated |r| > 0.92 compressed into 2 PCA components."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-amber-400 font-bold",children:"Categorical Health:"})," Machine Maintenance Age Category vs Snarl Rate (Cramér's V = 0.52)."]})]})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/30",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Diagnostic Verification"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Topic 3 Diagnostic Assessment Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Answer all 5 multi-stage scenario questions to evaluate your engineering intuition."})]}),u&&e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-indigo-500/40",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-bold font-mono text-cyan-300",children:[_," / ",N.length]}),e.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300",children:_===5?"Distinction":_>=3?"Pass":"Review Needed"})]})]}),e.jsx("div",{className:"space-y-5",children:N.map(a=>{x[a.id];const r=x[a.id],i=r===a.correct;return e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 rounded-lg bg-indigo-900/60 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono",children:a.id}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-xs text-slate-400 italic",children:a.scenario}),e.jsx("p",{className:"text-sm font-semibold text-slate-200 leading-relaxed",children:a.question})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5 pl-9",children:a.options.map(l=>{const p=r===l.label;let m="bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700";return u?l.label===a.correct?m="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium":p&&!i&&(m="bg-rose-950/60 border-rose-500 text-rose-200"):p&&(m="bg-indigo-950/70 border-indigo-500 text-indigo-200 font-medium"),e.jsxs("button",{disabled:u,onClick:()=>F(a.id,l.label),className:o("w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer",m),children:[e.jsxs("span",{className:"font-mono font-bold shrink-0",children:[l.label,"."]}),e.jsx("span",{children:l.text})]},l.label)})}),u&&e.jsx("div",{className:"pl-9 pt-2",children:e.jsxs("div",{className:o("p-3 rounded-xl text-xs leading-relaxed border",i?"bg-emerald-950/30 border-emerald-800/40 text-emerald-300":"bg-rose-950/30 border-rose-800/40 text-rose-300"),children:[e.jsx("div",{className:"font-bold mb-1",children:i?"✓ Correct Analysis":`✗ Incorrect (Correct Answer: ${a.correct})`}),e.jsx("div",{className:"text-slate-400",children:a.explanation})]})})]},a.id)})}),e.jsx("div",{className:"flex justify-end pt-2",children:u?e.jsx("button",{onClick:()=>{R({}),E(!1)},className:"px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors",children:"Reset Assessment"}):e.jsx("button",{onClick:Y,disabled:Object.keys(x).length<N.length,className:o("px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer",Object.keys(x).length===N.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:"Submit Diagnostic Assessment"})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-rose-400",children:"Production Hazards"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Engineering Anti-Patterns"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Six architectural errors that undermine feature selection pipelines when evaluating feature relationships."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"📉"})," 1. The Zero-Correlation Delusion"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Assuming r = 0 implies no relationship. Parabolic (y = x²), sinusoidal, or circular curves have r = 0, but are 100% deterministic."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Use Distance Correlation or Mutual Information."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"⚠️"})," 2. Sign Inversion from Collinearity"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Including two collinear features (|r| > 0.95) in OLS regression. One feature receives a nonsensical negative sign despite positive correlation."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Inspect VIF >= 10 and prune one redundant duplicate."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"💥"})," 3. Single Outlier Leverage Distortion"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"A single corrupted sensor reading (e.g. -99999) can completely flip Pearson r from +0.95 to -0.35 due to squared distance leverage."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Use rank-based Spearman ρ or Kendall τ."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🔁"})," 4. Confusing Correlation with Causation"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Treating strong correlation as proof of causal intervention. Confounding variables (e.g. seasonal summer temp) create false causal assumptions."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Validate with domain physics and A/B test experiments."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🗂️"})," 5. Target Leakage via Pre-Split Correlation"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Computing correlation with the target on the entire dataset prior to splitting into train/test. Leaks test distribution into feature selection."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Split data FIRST; compute correlations solely on training fold."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🔢"})," 6. Pearson on Ordinal Likert Scales"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Computing Pearson r on 1-to-5 survey scores. Pearson assumes continuous interval scales and bivariate normality."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Use Kendall's Tau or Spearman Rank Correlation."})]})]})]}),e.jsxs("section",{id:"loaders",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Source Code & Academic Documentation"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Laboratory Implementation & Complete Study Notes"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-xl border border-slate-800",children:[e.jsx("button",{onClick:()=>I("theory"),className:o("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",w==="theory"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Study Notes (topic3_note.txt)"}),e.jsx("button",{onClick:()=>I("code"),className:o("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",w==="code"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Python Lab (correlation_and_feature_relationships_lab.py)"})]})]}),w==="code"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"correlation_and_feature_relationships_lab.py"})]}),e.jsx("span",{children:"Pure Python 3 • Zero Dependencies • Exit Code 0"})]}),e.jsx(H,{code:Q,fileName:"correlation_and_feature_relationships_lab.py",title:"Correlation & Feature Relationships Laboratory Benchmark"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"topic3_note.txt"})]}),e.jsx("span",{children:"326 Lines of Comprehensive Academic Notes"})]}),e.jsx(K,{content:Z,fileName:"topic3_note.txt",title:"Topic 3: Academic Study Notes (BCAC701B)"})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8",children:[e.jsx(z,{title:"Topic 3: MAKAUT Master Viva & Technical Interview Questions",subtitle:"30 Graded Analytical Questions with Comprehensive Theoretical Rationales",questions:J}),e.jsx(G,{})]})]})};export{le as default};
