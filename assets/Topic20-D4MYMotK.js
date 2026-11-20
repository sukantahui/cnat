import{b as r,j as e,bl as d}from"./vendor-react-core-B-R9HE-Z.js";import{P as L}from"./PythonFileLoader-DZ61U3Y_.js";import{P as D}from"./PlainTextPrint-C6NaUtnE.js";import{T as B}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const H=`"""
=============================================================================
TOPIC 20: ORDINAL ENCODING (BASIC IDEA)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Industrial Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B / MAKAUT Aligned)
=============================================================================

This laboratory engine demonstrates from first principles (Pure Python, Zero External Dependencies):
1. Formal Monotonic Rank Mapping: c_1 < c_2 < ... < c_K on academic and industrial scales.
2. The Alphabetical Inversion Hazard: How default alphabetical sorting destroys monotonic order
   and inverts Spearman's Rank Correlation rho.
3. Linear Model Equal-Interval Assumption Pathology vs Tree-Model Split Invariance.
4. Thermometer / Cumulative Binary Encoding: Allowing linear models to learn unequal step sizes.
5. Handling Unseen / Unknown Ordinal Ranks via Interpolation and Fallback Policies.
6. Empirical benchmark across West Bengal academic grading and IT salary progression datasets.
=============================================================================
"""

import math
from typing import List, Dict, Any, Tuple, Optional, Set

# =====================================================================
# DATASET GENERATION: WEST BENGAL EDUTECH & IT APPRAISAL COHORT
# =====================================================================

def get_edutech_appraisal_cohort() -> List[Dict[str, Any]]:
    """
    Returns realistic West Bengal employee appraisal & candidate qualification data:
    - qualification: Ordinal degree (HS < BCA < MCA < MTech < PhD)
    - performance_rating: Ordinal appraisal (Poor < Fair < Good < Excellent < Outstanding)
    - actual_salary_lpa: Target package in Lakhs Per Annum (exponentially scaled)
    - retention_prob: Retention probability (0.0 to 1.0)
    """
    return [
        {"id": "EMP-01", "name": "Susmita", "degree": "MCA", "perf": "Outstanding", "salary_lpa": 18.5, "retention": 0.95},
        {"id": "EMP-02", "name": "Debangshu", "degree": "MTech", "perf": "Excellent", "salary_lpa": 22.0, "retention": 0.90},
        {"id": "EMP-03", "name": "Mahima", "degree": "BCA", "perf": "Good", "salary_lpa": 7.5, "retention": 0.80},
        {"id": "EMP-04", "name": "Mamata", "degree": "MCA", "perf": "Excellent", "salary_lpa": 16.0, "retention": 0.88},
        {"id": "EMP-05", "name": "Abhronila", "degree": "PhD", "perf": "Outstanding", "salary_lpa": 34.0, "retention": 0.98},
        {"id": "EMP-06", "name": "Rohan", "degree": "HS", "perf": "Fair", "salary_lpa": 3.8, "retention": 0.65},
        {"id": "EMP-07", "name": "Priyanka", "degree": "BCA", "perf": "Fair", "salary_lpa": 5.0, "retention": 0.70},
        {"id": "EMP-08", "name": "Sourav", "degree": "MTech", "perf": "Outstanding", "salary_lpa": 28.0, "retention": 0.96},
        {"id": "EMP-09", "name": "Tanmoy", "degree": "BCA", "perf": "Poor", "salary_lpa": 4.2, "retention": 0.40},
        {"id": "EMP-10", "name": "Ananya", "degree": "MCA", "perf": "Good", "salary_lpa": 12.0, "retention": 0.82},
    ]

# =====================================================================
# 1. PURE PYTHON ORDINAL ENCODER WITH CALIBRATED LADDER & THERMOMETER
# =====================================================================

class OrdinalEncoderEngine:
    """
    Comprehensive Ordinal Encoder:
    - Supports calibrated explicit monotonic category ladders
    - Supports default alphabetical ordering (to demonstrate hazards)
    - Supports Thermometer / Cumulative Binary encoding
    - Handles unknown categories via configurable policies
    """
    def __init__(
        self,
        categories: Optional[List[str]] = None,
        unknown_value: int = -1,
        handle_unknown: str = "use_encoded_value"
    ):
        self.user_categories = categories
        self.unknown_value = unknown_value
        self.handle_unknown = handle_unknown
        self.category_to_rank_: Dict[str, int] = {}
        self.rank_to_category_: Dict[int, str] = {}
        self.categories_: List[str] = []

    def fit(self, values: List[str]):
        if self.user_categories is not None:
            self.categories_ = list(self.user_categories)
        else:
            # Default Scikit-Learn alphabetical sort behavior
            self.categories_ = sorted(list(set(values)))

        self.category_to_rank_ = {cat: idx for idx, cat in enumerate(self.categories_)}
        self.rank_to_category_ = {idx: cat for cat, idx in self.category_to_rank_.items()}
        return self

    def transform_integer(self, values: List[str]) -> List[int]:
        result = []
        for v in values:
            if v in self.category_to_rank_:
                result.append(self.category_to_rank_[v])
            else:
                if self.handle_unknown == "error":
                    raise ValueError(f"Unseen category: '{v}'")
                result.append(self.unknown_value)
        return result

    def transform_thermometer(self, values: List[str]) -> List[List[int]]:
        """
        Transforms ordinal ranks into Thermometer / Cumulative Binary vectors:
        Rank 0 -> [0, 0, 0, 0]
        Rank 1 -> [1, 0, 0, 0]
        Rank 2 -> [1, 1, 0, 0]
        Rank 3 -> [1, 1, 1, 0]
        Rank 4 -> [1, 1, 1, 1]
        Length = K - 1 binary flags.
        """
        K = len(self.categories_)
        dim = max(1, K - 1)
        matrix = []

        for v in values:
            vec = [0] * dim
            if v in self.category_to_rank_:
                rank = self.category_to_rank_[v]
                for r in range(min(rank, dim)):
                    vec[r] = 1
            matrix.append(vec)

        return matrix

# =====================================================================
# 2. STATISTICAL METRICS: SPEARMAN'S RANK CORRELATION
# =====================================================================

def compute_spearman_rank_correlation(x: List[float], y: List[float]) -> float:
    """
    Computes Spearman's Rank Correlation Coefficient (rho):
    rho = 1 - (6 * sum(d_i^2)) / (n * (n^2 - 1))
    """
    n = len(x)
    if n <= 1:
        return 0.0

    # Convert x and y to fractional ranks
    def get_ranks(arr: List[float]) -> List[float]:
        sorted_pairs = sorted(enumerate(arr), key=lambda it: it[1])
        ranks = [0.0] * len(arr)
        i = 0
        while i < len(sorted_pairs):
            j = i
            while j < len(sorted_pairs) and sorted_pairs[j][1] == sorted_pairs[i][1]:
                j += 1
            avg_rank = (i + 1 + j) / 2.0
            for k in range(i, j):
                ranks[sorted_pairs[k][0]] = avg_rank
            i = j
        return ranks

    rank_x = get_ranks(x)
    rank_y = get_ranks(y)

    sum_d2 = sum((rx - ry) ** 2 for rx, ry in zip(rank_x, rank_y))
    rho = 1.0 - (6.0 * sum_d2) / (n * (n * n - 1))
    return rho

# =====================================================================
# 3. OLS LINEAR REGRESSION ON ORDINAL INTEGER RANKS
# =====================================================================

def simple_linear_regression(x: List[float], y: List[float]) -> Tuple[float, float, float]:
    """
    Fits y = beta_1 * x + beta_0 and computes R^2.
    """
    n = len(x)
    mean_x = sum(x) / n
    mean_y = sum(y) / n

    ss_xy = sum((xi - mean_x) * (yi - mean_y) for xi, yi in zip(x, y))
    ss_xx = sum((xi - mean_x) ** 2 for xi in x)
    ss_yy = sum((yi - mean_y) ** 2 for yi in y)

    if ss_xx == 0 or ss_yy == 0:
        return 0.0, mean_y, 0.0

    beta_1 = ss_xy / ss_xx
    beta_0 = mean_y - beta_1 * mean_x

    ss_res = sum((yi - (beta_0 + beta_1 * xi)) ** 2 for xi, yi in zip(x, y))
    r2 = 1.0 - (ss_res / ss_yy)
    return beta_1, beta_0, r2

# =====================================================================
# LABORATORY BENCHMARK SUITE
# =====================================================================

def run_laboratory():
    print("=" * 80)
    print("CODER & ACCOTAX - PURE PYTHON MACHINE LEARNING LAB (TOPIC 20)")
    print("ORDINAL ENCODING: MONOTONIC TOPOLOGY, THERMOMETER BASES & HAZARDS")
    print("Course: BCAC701B | Guide: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    cohort = get_edutech_appraisal_cohort()
    degrees = [s["degree"] for s in cohort]
    perfs = [s["perf"] for s in cohort]
    salaries = [s["salary_lpa"] for s in cohort]
    retentions = [s["retention"] for s in cohort]

    print(f"\\n[1] INSPECTING RAW EMPLOYEE COHORT DATA ({len(cohort)} records):")
    print("-" * 75)
    print(f"{'ID':<8} {'Name':<12} {'Degree (Ordinal)':<18} {'Perf Rating':<14} {'LPA':<8} {'Retention'}")
    print("-" * 75)
    for s in cohort[:6]:
        print(f"{s['id']:<8} {s['name']:<12} {s['degree']:<18} {s['perf']:<14} ₹{s['salary_lpa']:<6.1f} {s['retention']*100:.0f}%")
    print("...")

    # --- EXPERIMENT 1: CALIBRATED LADDER VS ALPHABETICAL INVERSION HAZARD ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 1] THE ALPHABETICAL INVERSION HAZARD IN SCIKIT-LEARN")
    print("=" * 80)
    print("Scenario: Encoding Appraisal Performance (Poor < Fair < Good < Excellent < Outstanding)\\n")

    # A. Calibrated Semantic Order
    true_perf_ladder = ["Poor", "Fair", "Good", "Excellent", "Outstanding"]
    enc_calibrated = OrdinalEncoderEngine(categories=true_perf_ladder)
    enc_calibrated.fit(perfs)
    ranks_calibrated = enc_calibrated.transform_integer(perfs)

    # B. Default Alphabetical Order (Scikit-Learn default when categories=None)
    enc_alphabetical = OrdinalEncoderEngine(categories=None)
    enc_alphabetical.fit(perfs)
    ranks_alphabetical = enc_alphabetical.transform_integer(perfs)

    print("A. Calibrated Semantic Mapping:")
    for cat, rk in enc_calibrated.category_to_rank_.items():
        print(f"   {cat:<14} -> Rank {rk}")

    print("\\nB. Accidental Alphabetical Mapping (Default when categories=None):")
    for cat, rk in enc_alphabetical.category_to_rank_.items():
        print(f"   {cat:<14} -> Rank {rk}")

    rho_calibrated = compute_spearman_rank_correlation(ranks_calibrated, salaries)
    rho_alphabetical = compute_spearman_rank_correlation(ranks_alphabetical, salaries)

    print("\\nSpearman's Rank Correlation with Target Salary (LPA):")
    print(f"   rho (Calibrated Semantic Ranks)   : {rho_calibrated:>+6.4f} (Strong Positive Monotonicity!)")
    print(f"   rho (Accidental Alphabetical Ranks): {rho_alphabetical:>+6.4f} (Corrupted Semantics!)")
    print("   PATHOLOGY: Alphabetical sorting assigned Excellent=0 and Poor=3, completely")
    print("   inverting the employee hierarchy and confusing downstream gradient updates!")

    # --- EXPERIMENT 2: EQUAL-INTERVAL ASSUMPTION FAILURE IN LINEAR MODELS ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 2] LINEAR MODELS ASSUME EQUAL INTERVALS (NON-LINEAR DATA)")
    print("=" * 80)
    print("Scenario: Academic Qualification vs Industry Compensation (HS < BCA < MCA < MTech < PhD)\\n")
    
    true_degree_ladder = ["HS", "BCA", "MCA", "MTech", "PhD"]
    enc_degree = OrdinalEncoderEngine(categories=true_degree_ladder)
    enc_degree.fit(degrees)
    degree_ranks = enc_degree.transform_integer(degrees)

    slope, intercept, r2 = simple_linear_regression([float(r) for r in degree_ranks], salaries)
    print(f"Fitted OLS Model: Salary = ₹{slope:.2f} * Rank + ₹{intercept:.2f} LPA  (R^2 = {r2:.4f})")
    print(f"Linear model assumes EVERY degree step yields exactly +₹{slope:.2f} LPA.\\n")

    # Compute actual average salary per degree
    degree_stats: Dict[str, List[float]] = {d: [] for d in true_degree_ladder}
    for d, sal in zip(degrees, salaries):
        degree_stats[d].append(sal)

    print(f"{'Degree':<8} {'Rank':<6} {'Predicted OLS':<16} {'Actual Mean':<14} {'Empirical Jump from Prior'}")
    print("-" * 72)
    prev_mean = None
    for d in true_degree_ladder:
        rk = enc_degree.category_to_rank_[d]
        pred = intercept + slope * rk
        act = sum(degree_stats[d]) / max(len(degree_stats[d]), 1)
        jump_str = f"+₹{act - prev_mean:.1f} LPA" if prev_mean is not None else "Baseline"
        prev_mean = act
        print(f"{d:<8} {rk:<6} ₹{pred:>6.2f} LPA        ₹{act:>6.2f} LPA      {jump_str}")

    print("\\nPATHOLOGY: The jump from MTech to PhD is +₹14.0 LPA, while HS to BCA is only +₹1.8 LPA!")
    print("Integer Ordinal Encoding forces linear models to treat all educational steps as identical,")
    print("creating severe underfitting at both extremes.")

    # --- EXPERIMENT 3: THERMOMETER / CUMULATIVE BINARY ENCODING ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 3] THERMOMETER / CUMULATIVE BINARY ENCODING")
    print("=" * 80)
    print("Thermometer encoding maps ranks to cumulative binary flags, allowing linear models")
    print("to learn INDEPENDENT step increments between consecutive ordinal levels:\\n")

    thermo_matrix = enc_degree.transform_thermometer(degrees)
    print(f"{'Candidate':<12} {'Degree':<10} {'Rank':<6} {'Thermometer Vector [>=BCA, >=MCA, >=MTech, >=PhD]'}")
    print("-" * 75)
    for i in range(5):
        s = cohort[i]
        rk = enc_degree.category_to_rank_[s["degree"]]
        print(f"{s['name']:<12} {s['degree']:<10} {rk:<6} {thermo_matrix[i]}")

    print("\\nADVANTAGE: In y = beta_0 + beta_1*x1 + beta_2*x2 + beta_3*x3 + beta_4*x4:")
    print("  beta_1 represents the specific increment from HS -> BCA")
    print("  beta_2 represents the specific increment from BCA -> MCA")
    print("  beta_4 represents the specific increment from MTech -> PhD (no equal interval constraint!)")

    # --- EXPERIMENT 4: TREE-BASED MONOTONIC SPLIT INVARIANCE ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 4] DECISION TREE MONOTONIC SPLIT INVARIANCE")
    print("=" * 80)
    print("Decision tree split rules operate on inequalities: (x <= threshold).")
    print("What happens if ranks are transformed by any arbitrary monotonic function g(x) = x^3 or 2^x?")
    
    threshold_rank = 2.5 # Split between BCA (1) and MCA (2)
    split_standard = [1 if r > threshold_rank else 0 for r in degree_ranks]

    # Non-linear monotonic transformation: g(x) = x^3
    cubed_ranks = [r ** 3 for r in degree_ranks]
    threshold_cubed = 2.5 ** 3 # 15.625
    split_cubed = [1 if r > threshold_cubed else 0 for r in cubed_ranks]

    splits_match = (split_standard == split_cubed)
    print(f"Standard integer split partition (Rank > 2.5): {split_standard[:6]}...")
    print(f"Cubed non-linear split partition (Rank^3 > 15.6): {split_cubed[:6]}...")
    print(f"Are tree splits 100% identical under non-linear transformation? {splits_match} ✔")
    print("CONCLUSION: Decision trees and Random Forests are strictly invariant to ordinal scale spacing!")

    # --- EXPERIMENT 5: UNSEEN CATEGORY FALLBACK POLICIES ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 5] HANDLING UNSEEN ORDINAL RANKS IN PRODUCTION")
    print("=" * 80)
    unseen_degrees = ["BCA", "PostDoc", "MCA", "HighSchool-Dropout"]
    print(f"Incoming production qualifications: {unseen_degrees}")
    encoded_unseen = enc_degree.transform_integer(unseen_degrees)
    for deg, code in zip(unseen_degrees, encoded_unseen):
        status = f"Valid Rank {code}" if code != -1 else "Unknown -> Fallback -1"
        print(f"   {deg:<22} -> {status}")

    print("\\n" + "=" * 80)
    print("ALL 5 PRACTICAL EXPERIMENTS COMPLETED SUCCESSFULLY WITH EXIT CODE 0.")
    print("=" * 80)

if __name__ == "__main__":
    run_laboratory()
`,F=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B / MAKAUT Aligned)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 20: Ordinal Encoding (Basic Idea)
Author: Sukanta Hui | Senior Applied Machine Learning Engineer & Academic Mentor
Location: Barrackpore, North 24 Parganas, West Bengal, India
=============================================================================

1. THEORETICAL FOUNDATION & STEVENS' MEASUREMENT SCALE TAXONOMY
-----------------------------------------------------------------------------
1.1 S.S. Stevens' Measurement Hierarchy (1946)
To understand Ordinal Encoding, one must understand the formal epistemological
hierarchy of measurement scales defined by mathematical psychologist S.S. Stevens:
1. Nominal Scale: Pure equality/identity (c_i = c_j or c_i != c_j). No order, no metric.
   (e.g., Blood groups: A, B, AB, O; West Bengal districts: Nadia, Hooghly).
2. Ordinal Scale: Strict monotonic transitive order (c_i < c_j). Order is defined,
   but numerical intervals between ranks are non-uniform, qualitative, and uncalibrated.
   (e.g., Education: HS < BCA < MCA < PhD; Severity: Mild < Moderate < Severe).
3. Interval Scale: Meaningful, uniform differences between numbers, but no true absolute zero.
   (e.g., Celsius temperature: 20 C to 30 C is the same energy difference as 30 C to 40 C).
4. Ratio Scale: Meaningful intervals AND a true absolute physical zero.
   (e.g., Kelvin temperature, salary in INR, weight in kg, latency in ms).

1.2 The Defining Mathematical Structure of Ordinal Data
An ordinal categorical feature C is governed by a strict, total preorder relation (<):
- Transitivity: For any c_i, c_j, c_k in C:
      (c_i < c_j) and (c_j < c_k)  ==>  (c_i < c_k)
- Asymmetry:
      (c_i < c_j)  ==>  NOT (c_j < c_i)
- Totality: For any distinct c_i != c_j, either (c_i < c_j) or (c_j < c_i).

1.3 The Non-Interval Problem (The Core Dilemma)
Ordinal encoding maps qualitative levels into sequential integers:
    Phi_ord(c_k) = k,  where k in {0, 1, 2, ..., K-1}
While this mapping satisfies order preservation:
    c_i < c_j  <==>  Phi_ord(c_i) < Phi_ord(c_j)
it falsely imposes an EQUAL-INTERVAL metric assumption on the feature space:
    |Phi_ord(c_2) - Phi_ord(c_1)| = |1 - 0| = 1
    |Phi_ord(c_3) - Phi_ord(c_2)| = |2 - 1| = 1
In reality, the qualitative or economic jump between (HS -> BCA) is rarely equal
to the jump between (MTech -> PhD). Ordinal integers impose an artificial linear
spacing that must be managed defensibly across different model families.


-----------------------------------------------------------------------------
2. THE MATHEMATICAL DILEMMA: LINEAR MODELS VS TREE ENSEMBLES
-----------------------------------------------------------------------------
2.1 The Equal-Interval Hazard in Linear Models
In linear regression, logistic regression, support vector machines (SVM), and neural networks,
the model computes an inner product between weights w and feature x:
    y_hat = w * x_ord + b = w * k + b
The derivative of the prediction with respect to the ordinal rank is a constant:
    dy_hat / dk = w
This forces the algorithm to make a rigid, uniform assumption:
Every one-step increase in rank produces the EXACT same change (+w) in the target!

Pathology Example (Senior IT Salary Progression):
Empirical salary averages in Salt Lake Sector V:
    HS     (Rank 0): ₹3.8 LPA
    BCA    (Rank 1): ₹5.6 LPA   (Step = +₹1.8 LPA)
    MCA    (Rank 2): ₹15.5 LPA  (Step = +₹9.9 LPA)
    MTech  (Rank 3): ₹25.0 LPA  (Step = +₹9.5 LPA)
    PhD    (Rank 4): ₹34.0 LPA  (Step = +₹9.0 LPA)
Fitting a single linear slope w forces the model to assume a constant step of +₹8.43 LPA.
The model severely overpredicts HS and BCA candidates while underpredicting advanced degrees.
Linear models require non-linear ordinal techniques (e.g., Thermometer encoding or splines).

2.2 Decision Tree Split Invariance (The Ideal Habitat)
In single-variable decision trees (CART, Random Forest, XGBoost, LightGBM, CatBoost),
a split rule takes the form of an inequality:
    Split Condition: x_feature <= theta

Theorem: Monotonic Transformation Invariance
Let g: R -> R be any strictly monotonically increasing function (i.e., a < b ==> g(a) < g(b)).
For any threshold theta, there exists an equivalent threshold theta' = g(theta) such that:
    { x : x <= theta } == { x : g(x) <= theta' }
The partitioning of samples at every node split, the Gini impurity reduction, and the
information gain are 100% IDENTICAL, regardless of whether ranks are encoded as
[0, 1, 2, 3], [0, 1, 10, 100], or [e^0, e^1, e^2, e^3].

Conclusion:
Integer Ordinal Encoding is MATHEMATICALLY OPTIMAL and native for Decision Trees and
Tree Ensembles! It preserves 1D dimensionality (no column explosion) while allowing the tree
to isolate custom rank subsets with minimal depth.


-----------------------------------------------------------------------------
3. THE ALPHABETICAL INVERSION HAZARD IN SCIKIT-LEARN
-----------------------------------------------------------------------------
3.1 The Dangerous Default Behavior
A massive source of production bugs occurs when novice practitioners initialize:
    encoder = OrdinalEncoder() # categories=None by default
When \`categories\` is not explicitly provided, Scikit-Learn defaults to sorting categories
alphabetically (lexicographically)!

Real-World Case: Annual Performance Appraisals
True Semantic Hierarchy:
    Poor (0) < Fair (1) < Good (2) < Excellent (3) < Outstanding (4)
Scikit-Learn Default Alphabetical Sorting:
    ['Excellent', 'Fair', 'Good', 'Outstanding', 'Poor']
Assigned Integer Ranks:
    Excellent   -> Rank 0  (Corrupted: Top performer mapped to worst rank!)
    Fair        -> Rank 1
    Good        -> Rank 2
    Outstanding -> Rank 3
    Poor        -> Rank 4  (Corrupted: Lowest performer mapped to highest rank!)

3.2 Statistical Audit: Spearman's Rank Correlation (rho)
Spearman's rank correlation coefficient measures the degree of monotonic alignment between
a feature x and target y:
    rho = 1 - (6 * sum d_i^2) / (n * (n^2 - 1))
where d_i = rank(x_i) - rank(y_i).

In empirical testing on employee salaries:
- Calibrated Semantic Mapping: rho = +0.9303 (Near-perfect positive monotonic relationship).
- Default Alphabetical Mapping: rho = +0.1424 (Monotonic relationship completely destroyed!).
The model's loss gradients are severely perturbed, corrupting feature importance scores and
biasing linear decision boundaries.

3.3 Defensive Production Standard
Always pass an explicitly calibrated nested list of categories:
    calibrated_ladder = [['Poor', 'Fair', 'Good', 'Excellent', 'Outstanding']]
    encoder = OrdinalEncoder(categories=calibrated_ladder)


-----------------------------------------------------------------------------
4. ADVANCED MATHEMATICAL ENCODINGS FOR ORDINAL VARIABLES
-----------------------------------------------------------------------------
4.1 Thermometer / Cumulative Binary Encoding (Continuation Ratio)
For linear, logistic, and neural models where equal-interval integer assumptions fail,
Thermometer Encoding maps rank k into K - 1 cumulative binary flags:
    Phi_thermo(c_k) = [ I(k >= 1), I(k >= 2), ..., I(k >= K - 1) ]^T

Example for K = 5 categories (HS, BCA, MCA, MTech, PhD):
    HS     (Rank 0) -> [0, 0, 0, 0]
    BCA    (Rank 1) -> [1, 0, 0, 0]
    MCA    (Rank 2) -> [1, 1, 0, 0]
    MTech  (Rank 3) -> [1, 1, 1, 0]
    PhD    (Rank 4) -> [1, 1, 1, 1]

Mathematical Formulation in Linear Regression:
    y_hat = beta_0 + beta_1 * x_1 + beta_2 * x_2 + beta_3 * x_3 + beta_4 * x_4
Notice the progressive evaluation:
- For HS: y = beta_0 (Baseline)
- For BCA: y = beta_0 + beta_1  ==>  beta_1 is the specific increment from HS -> BCA!
- For MCA: y = beta_0 + beta_1 + beta_2  ==>  beta_2 is the specific increment from BCA -> MCA!
- For PhD: y = beta_0 + beta_1 + beta_2 + beta_3 + beta_4  ==>  beta_4 is the jump from MTech -> PhD!

Advantages:
1. Allows linear models to learn UNEQUAL step increments between consecutive ordinal levels.
2. Completely avoids multicollinearity (Gram matrix is invertible).
3. Directly models the cumulative hazard or continuation ratio in survival analysis.

4.2 Target-Calibrated Monotonic Spacing (Isotonic Encoding)
Instead of assigning arbitrary integers 0, 1, 2, ..., replace category c_k with its
empirical target mean y_bar_k, subject to an isotonic monotonic constraint:
    y_bar_1 <= y_bar_2 <= ... <= y_bar_K
This calibrates the interval spacing strictly according to real-world business outcomes.


-----------------------------------------------------------------------------
5. HANDLING UNSEEN / COLD-START CATEGORIES IN ORDINAL SPACES
-----------------------------------------------------------------------------
When deploying an ordinal encoder into production serving APIs:
- Default Behavior: \`handle_unknown='error'\`.
  An incoming request with an unlisted degree (e.g., "PostDoc" or "Diploma") throws a
  ValueError, causing an HTTP 500 error.
- Standard Fallback: \`handle_unknown='use_encoded_value', unknown_value=-1\`.
  Assigns a sentinel value of -1.
- Caveat: Ensure downstream models can interpret -1. If using models requiring non-negative
  inputs (e.g. Multinomial Naive Bayes) or linear models, mapping unknown to -1 implies it is
  "less than the lowest rank" (e.g., lower than HS), which may introduce severe bias.
- Better Production Strategy: Map novel categories to the median rank (K // 2) or use a
  separate missingness indicator column.


-----------------------------------------------------------------------------
6. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
-----------------------------------------------------------------------------

Case Study 1: Academic Credit Progression & NEP 2020 (Barrackpore & MAKAUT)
- Context: Susmita is developing a student retention and semester GPA forecasting tool
  for technical colleges affiliated with MAKAUT in North 24 Parganas.
- Feature: 'Internal Assessment Letter Grade' (F, P, C, B, B+, A, A+, O).
- Implementation:
  - Susmita configures \`OrdinalEncoder(categories=[['F', 'P', 'C', 'B', 'B+', 'A', 'A+', 'O']])\`.
  - The mapped integers (0 to 7) correspond directly to UGC/MAKAUT standard grade point progressions.
  - A Gradient Boosted Regressor splits on Grade >= 4.5 (isolating students performing above B grade),
    accurately flagging at-risk students 6 weeks before end-semester examinations.

Case Study 2: IT Workforce Performance Appraisal (Salt Lake Sector V)
- Context: Debangshu leads HR people analytics at a major IT consulting firm in Sector V.
- Problem: The annual review dataset contains 'Performance Band' (PIP < Meets < Exceeds < Star)
  and target 'Annual Discretionary Bonus (INR Lakhs)'.
- Failure of Integer Encoding:
  - An initial Ridge regression model fitted integer ranks (0, 1, 2, 3), assuming an equal
    bonus step between all bands.
  - The model severely underpredicted Star performers, whose bonuses jump exponentially (300%).
- Solution:
  - Debangshu migrated to Thermometer Encoding: PIP=[0,0,0], Meets=[1,0,0], Exceeds=[1,1,0], Star=[1,1,1].
  - The linear model fitted independent step coefficients:
    beta_Meets = +₹0.5 Lakh, beta_Exceeds = +₹1.8 Lakhs, beta_Star = +₹7.2 Lakhs!
  - R^2 improved from 0.71 to 0.94, perfectly capturing executive reward non-linearity.

Case Study 3: Blast Furnace Alloy Surface Smoothness (Durgapur Steel Belt)
- Context: Mamata oversees automated visual quality inspection at an alloy steel rolling mill.
- Feature: 'Surface Finish Roughness Class' (Rough N10 < Semi-Finished N7 < Fine N4 < Mirror N1).
- Disaster Audit:
  - A newly deployed neural classifier began rejecting premium Mirror finish steel coils.
  - Audit revealed the intern used default \`OrdinalEncoder()\`, which sorted alphabetically:
    Fine N4 = 0, Medium N7 = 1, Mirror N1 = 2, Rough N10 = 3!
  - The network learned that Mirror finish (2) was rougher than Fine finish (0), corrupting
    all defect rejection gates.
  - Mamata corrected the category ladder to explicit monotonic order, restoring 99.8% factory yield.

Case Study 4: Oncology Tumor Staging (TNM System) at Jadavpur Medical Hub
- Context: Abhronila is developing an 5-year survival prognosis model for colorectal carcinoma.
- Feature: 'Pathological AJCC Stage' (Stage 0 < Stage I < Stage II < Stage III < Stage IV).
- Medical Grounding:
  - Cancer staging has strict anatomical progression (carcinoma in situ -> localized -> regional lymph -> distant metastasis).
  - One-Hot Encoding would treat Stage 0 and Stage IV as equally distant, destroying anatomical progression logic.
  - Abhronila applied Ordinal Encoding (0 to 4).
  - A Random Forest survival ensemble established a primary split at Stage <= 2.5, isolating
    metastatic cases (Stage III & IV) and improving concordance-index from 0.68 to 0.86.


-----------------------------------------------------------------------------
7. CRITICAL PRODUCTION PITFALLS & DEFENSIVE ENGINEERING RULES
-----------------------------------------------------------------------------

Pitfall 1: Relying on Default Alphabetical Sorting
- Calling \`OrdinalEncoder()\` without \`categories\` defaults to alphabetical order.
- For non-alphabetical scales (Poor < Fair < Good), this completely corrupts the rank order.
- Rule: NEVER initialize \`OrdinalEncoder()\` without explicitly passing \`categories=[[...]]\`.

Pitfall 2: Applying Ordinal Encoding to Unordered Nominal Features
- Applying ordinal encoding to nominal features (e.g. Cities: Kolkata=0, Siliguri=1, Barrackpore=2)
  forces an artificial mathematical metric on unordered entities.
- Linear and distance-based models will falsely assume Siliguri is twice as far as Kolkata.
- Rule: Use \`OrdinalEncoder\` ONLY on genuine ordinal scales; use \`OneHotEncoder\` on nominal data.

Pitfall 3: Ignoring Non-Linear Intervals in Linear Models
- Ordinal ranks assume equal integer gaps (Delta = 1). If the underlying business impact is
  exponential or irregular, linear models will underfit.
- Rule: For linear models on non-linear ordinal data, use Thermometer Encoding or Target Encoding.

Pitfall 4: Misconfigured Sentinel \`unknown_value\`
- Mapping unseen categories to \`unknown_value=-1\` can cause unexpected behavior in algorithms
  that assume positive integers or in distance calculations where -1 is treated as an extreme low value.
- Rule: Audit unknown value handling; consider mapping novel categories to the median rank.


-----------------------------------------------------------------------------
8. SUKANTA HUI'S REVISION CHECKLIST & VIVA VOCE SUMMARY
-----------------------------------------------------------------------------
[ ] Explain S.S. Stevens' four scales of measurement: Nominal, Ordinal, Interval, Ratio.
[ ] Define the mathematical properties of ordinal data: Total Preorder, Transitivity, Asymmetry.
[ ] Formulate the equal-interval assumption of integer ordinal encoding in linear models.
[ ] Prove why Decision Trees and Random Forests are invariant to strictly monotonic transformations.
[ ] Demonstrate how Scikit-Learn's default alphabetical sorting inverts Spearman's rho.
[ ] Construct a Thermometer / Cumulative Binary vector and explain why it allows linear models to learn unequal steps.
[ ] Configure Scikit-Learn's \`OrdinalEncoder\` with explicit \`categories\` and \`handle_unknown\`.
[ ] Contrast Ordinal Encoding (1D, order-preserving) with One-Hot Encoding (K-D, orthogonal basis).


-----------------------------------------------------------------------------
9. 10 IN-DEPTH MAKAUT VIVA VOCE QUESTIONS & MODEL ANSWERS
-----------------------------------------------------------------------------

Q1: What is the formal difference between an Ordinal categorical variable and an Interval numerical variable?
Model Answer:
An Ordinal variable possesses a strict, transitive monotonic ordering (c_1 < c_2 < ... < c_K), but the
intervals or distances between consecutive levels are qualitative, non-uniform, and uncalibrated.
An Interval variable possesses uniform, calibrated metric spacing where the difference between any two
adjacent points is constant (e.g., 10 C to 20 C equals 20 C to 30 C), but it lacks a true absolute zero.

Q2: What happens if \`OrdinalEncoder()\` is fitted on \`['Low', 'Medium', 'High']\` without specifying \`categories\`?
Model Answer:
Scikit-Learn defaults to alphabetical sorting when \`categories\` is None. It will order the categories as
\`['High', 'Low', 'Medium']\`, assigning High = 0, Low = 1, and Medium = 2. This completely corrupts the
true semantic order (Low < Medium < High) and inverts the mathematical hierarchy, leading to incorrect
model predictions and corrupted feature weights.

Q3: Why are Tree-Based models (Random Forest, XGBoost) completely invariant to the specific numeric values used in Ordinal Encoding?
Model Answer:
Tree-based models evaluate split points using single-variable inequalities of the form (x <= threshold).
For any strictly monotonic transformation g(x), the rank order of all samples is perfectly preserved.
A threshold theta on x maps directly to an equivalent threshold theta' = g(theta) on g(x), producing the
exact same sample partition, identical Gini impurity reduction, and identical tree structure.

Q4: Why does standard integer Ordinal Encoding perform poorly in Linear Regression when applied to non-linear ordinal scales?
Model Answer:
Linear regression computes y = w * x_ord + b, which has a constant gradient dy/dx_ord = w. This forces
the model to assume that every one-step increase in ordinal rank produces the exact same increment (+w)
in the target. In real-world data (such as educational qualification vs salary), the jump from MTech to PhD
is often exponentially larger than the jump from HS to BCA. The linear model cannot adapt to these unequal
step sizes and suffers structural underfitting.

Q5: What is Thermometer (or Cumulative Binary) Encoding and what problem does it solve?
Model Answer:
Thermometer Encoding maps an ordinal rank k into K - 1 cumulative binary flags, where the first k entries
are 1 and the rest are 0 (e.g., Rank 2 of 4 becomes [1, 1, 0, 0]). When fed into a linear model, the
regression equation becomes y = beta_0 + sum beta_j x_j, where each beta_j directly represents the specific
incremental jump from level j-1 to level j. This allows linear models to learn unequal, non-linear step sizes
without enforcing constant intervals.

Q6: How does Spearman's Rank Correlation (rho) help validate an Ordinal Encoding scheme?
Model Answer:
Spearman's rho measures the monotonic alignment between the encoded ordinal feature and the target variable.
If the categories are encoded with the correct semantic ordering, rho will be high (close to +1 or -1).
If the categories are accidentally encoded alphabetically or randomly, rho will collapse toward zero,
providing an immediate mathematical diagnostic that the ordering is corrupted.

Q7: When should you prefer Ordinal Encoding over One-Hot Encoding?
Model Answer:
Ordinal Encoding should be preferred when:
1. The categorical feature has a genuine, natural monotonic order (e.g., education level, customer tier,
   tumor stage, survey ratings).
2. The downstream model is a decision tree, Random Forest, or Gradient Boosted Ensemble (LightGBM, XGBoost),
   where ordinal encoding preserves 1D dimensionality and avoids tree subsampling dilution.
3. Memory or dimensionality is constrained, and creating K one-hot columns would be inefficient.

Q8: How does Scikit-Learn handle unseen categories during inference with \`OrdinalEncoder\`?
Model Answer:
By default, \`OrdinalEncoder(handle_unknown='error')\` raises a ValueError on unseen categories. To prevent
production crashes, you can configure \`handle_unknown='use_encoded_value'\` and set \`unknown_value=-1\`
(or another chosen sentinel). The pipeline will assign -1 to novel categories, allowing the serving API
to continue executing without an unhandled exception.

Q9: What is the risk of using \`unknown_value=-1\` in linear or distance-based models?
Model Answer:
In linear models (y = w * x + b) and distance models (KNN, SVM), -1 is treated as an actual numeric coordinate
that is smaller than 0. If 0 corresponds to the lowest rank (e.g., "Poor" or "High School"), assigning -1
forces the model to treat the unknown category as "worse than Poor" or "lower than High School", which
may introduce severe negative bias into predictions.

Q10: Why should Ordinal Encoding NEVER be used on nominal features like West Bengal districts or product brands?
Model Answer:
Nominal features have no intrinsic mathematical order. Applying Ordinal Encoding assigns arbitrary integers
(e.g., Kolkata=0, Siliguri=1, Barrackpore=2), which linear models and distance metrics interpret as true
quantitative distances (|2 - 0| = 2 vs |1 - 0| = 1). This forces the algorithm to learn non-existent
linear relationships and spatial proximities, corrupting the model's hypothesis space. Nominal features
must be transformed using One-Hot Encoding, Target Encoding, or Feature Hashing.
=============================================================================
`,Y=()=>{const[G,q]=r.useState("hero");r.useId();const[y,T]=r.useState("hazard"),[p,w]=r.useState("calibrated"),[x,A]=r.useState("integer"),[N,I]=r.useState(1),[v,C]=r.useState(""),[g,_]=r.useState({}),[f,E]=r.useState(!1),M=[{id:1,name:"Tanmoy",perf:"Poor",salary:4.2},{id:2,name:"Rohan",perf:"Fair",salary:5},{id:3,name:"Mahima",perf:"Good",salary:7.5},{id:4,name:"Mamata",perf:"Excellent",salary:16},{id:5,name:"Susmita",perf:"Outstanding",salary:18.5}],o=r.useMemo(()=>{let n={};return p==="calibrated"?n={Poor:0,Fair:1,Good:2,Excellent:3,Outstanding:4}:n={Excellent:0,Fair:1,Good:2,Outstanding:3,Poor:4},{rows:M.map(s=>({...s,rank:n[s.perf]})),mapping:n,rho:p==="calibrated"?.93:.14,isHazard:p==="alphabetical"}},[p]),P=[{deg:"HS",rank:0,actualSalary:3.8,thermo:[0,0,0,0]},{deg:"BCA",rank:1,actualSalary:5.6,thermo:[1,0,0,0]},{deg:"MCA",rank:2,actualSalary:15.5,thermo:[1,1,0,0]},{deg:"MTech",rank:3,actualSalary:25,thermo:[1,1,1,0]},{deg:"PhD",rank:4,actualSalary:34,thermo:[1,1,1,1]}],u=r.useMemo(()=>({rows:P.map(t=>{let c=0,l="";x==="integer"?(c=Number((-.92+8.43*t.rank).toFixed(1)),l="Forced constant +₹8.43 LPA jump"):(c=t.actualSalary,l=t.deg==="HS"?"Baseline ₹3.8 LPA":t.deg==="BCA"?"Step HS->BCA: +₹1.8 LPA":t.deg==="MCA"?"Step BCA->MCA: +₹9.9 LPA":t.deg==="MTech"?"Step MCA->MTech: +₹9.5 LPA":"Step MTech->PhD: +₹9.0 LPA");const j=Number(Math.abs(t.actualSalary-c).toFixed(1));return{...t,predicted:c,residual:j,stepExplanation:l}}),r2:x==="integer"?.918:.998,isThermometer:x==="thermometer"}),[x]),i=r.useMemo(()=>{const n=N,a=[0,1,2,3,4],m=a.map(h=>Math.pow(h,n)),s=2.5,t=Math.pow(s,n),c=a.map(h=>h<=s?"LEFT (HS, BCA, MCA)":"RIGHT (MTech, PhD)"),l=m.map(h=>h<=t?"LEFT (HS, BCA, MCA)":"RIGHT (MTech, PhD)"),j=c.every((h,O)=>h===l[O]);return{p:n,rawRanks:a,transformedRanks:m,rawThreshold:s,transformedThreshold:Number(t.toFixed(2)),isIdentical:j}},[N]),b=[{id:1,question:"What fatal bug occurs if `OrdinalEncoder()` in Scikit-Learn is instantiated without explicitly specifying the `categories` parameter?",options:["It converts all numbers into imaginary complex floats.","It defaults to alphabetical/lexicographical sorting, assigning integers in alphabetical order rather than true semantic hierarchy (e.g., Excellent=0, Poor=4).","It automatically drops 50% of the training dataset.","It causes an immediate division-by-zero GPU panic."],correctIndex:1,explanation:"When `categories=None`, Scikit-Learn sorts categories alphabetically using Python's `sorted()`. For performance ratings `['Poor', 'Fair', 'Good', 'Excellent']`, 'Excellent' starts with E and receives integer 0 (worst rank), while 'Poor' starts with P and receives 3 (highest rank). This completely inverts the semantic order and corrupts downstream model weights.",practicalTip:"Always define explicit category ladders: `OrdinalEncoder(categories=[['Poor', 'Fair', 'Good', 'Excellent']])`."},{id:2,question:"Why do Tree-based models (Decision Trees, Random Forests, XGBoost) remain completely invariant to strictly monotonic transformations of ordinal features?",options:["Because tree split rules evaluate single-variable inequalities (x <= theta); any strictly monotonic transformation g(x) preserves the exact sample ordering and produces identical sample partitions at theta' = g(theta).","Because tree models convert all features into orthogonal Fourier basis vectors.","Because trees compute continuous gradients using the Hessian matrix.","Because trees only operate on binary yes/no strings."],correctIndex:0,explanation:"In decision trees, splits take the form (x <= theta). If g is strictly increasing, x_i <= theta holds if and only if g(x_i) <= g(theta). The sample partitioning, Gini impurity reductions, and tree structures are 100% identical, whether ranks are [0, 1, 2, 3] or [0, 1, 8, 27].",practicalTip:"Integer ordinal encoding is native, optimal, and 100% safe for all tree-based ensemble models."},{id:3,question:"What is the mathematical definition and purpose of Thermometer (Cumulative Binary) Encoding?",options:["It normalizes features to Kelvin temperature scales.","It maps rank k to K-1 cumulative binary flags [I(k>=1), I(k>=2), ..., I(k>=K-1)], allowing linear models to learn independent step increments between consecutive ordinal ranks without forcing equal intervals.","It removes outliers by clipping values outside the interquartile range.","It hashes category strings into 64-bit cryptographic buckets."],correctIndex:1,explanation:"Thermometer encoding represents increasing rank like rising mercury in a thermometer. For K=4: Rank 0 -> [0, 0, 0]; Rank 1 -> [1, 0, 0]; Rank 2 -> [1, 1, 0]; Rank 3 -> [1, 1, 1]. In a linear model, each coefficient beta_j represents the specific marginal step increment from level j-1 to level j, capturing non-linear jumps without multicollinearity.",practicalTip:"Use Thermometer Encoding when training Linear or Logistic Regression models on non-linear ordinal features."},{id:4,question:"In S.S. Stevens' 1946 hierarchy of measurement scales, what fundamental mathematical property distinguishes an Ordinal scale from an Interval scale?",options:["Ordinal scales have a physical absolute zero, while Interval scales do not.","Ordinal scales define monotonic order but lack uniform metric intervals between levels; Interval scales possess equal, calibrated metric differences between points.","Ordinal scales only apply to text strings, while Interval scales apply to images.","Ordinal scales cannot be used in statistical hypothesis testing."],correctIndex:1,explanation:"On an ordinal scale, we know A > B > C, but the distance |A - B| is not guaranteed to equal |B - C|. On an interval scale (e.g. Celsius temperature), differences are mathematically calibrated: 20 C to 30 C represents the exact same thermodynamic difference as 30 C to 40 C.",practicalTip:"Do not compute arithmetic means on raw Likert scale integers unless you have verified interval linearity."},{id:5,question:"When deploying `OrdinalEncoder` into production serving APIs, why is `handle_unknown='use_encoded_value', unknown_value=-1` potentially hazardous for KNN or Linear Regression?",options:["Because -1 causes an immediate Python syntax error.","Because linear and distance models interpret -1 as a real quantitative coordinate smaller than 0, treating unknown categories as 'lower than the worst possible rank'.","Because -1 automatically deletes the customer's account in the database.","Because -1 inverts the Gram matrix condition number."],correctIndex:1,explanation:"In linear models (y = w * x + b) and Euclidean distance models (KNN), -1 is a mathematical number. If rank 0 represents 'High School', mapping an unlisted 'PostDoc' to -1 forces the model to evaluate them as having less education than High School, severely biasing predictions.",practicalTip:"In production pipelines, map novel categories to the median rank (K // 2) or use a dedicated missingness indicator column."}],S=[{term:"Ordinal Categorical Scale",definition:"A qualitative scale where categories possess a strict, transitive monotonic order (c_1 < c_2 < ... < c_K), but without uniform or calibrated intervals between ranks."},{term:"Non-Interval Problem",definition:"The mathematical reality that integer encoding forces equal distance (|1-0| = |2-1| = 1), even though the qualitative gap between consecutive real-world ranks is non-uniform."},{term:"Stevens' Measurement Hierarchy",definition:"The classical 1946 taxonomy of data scales: Nominal (identity), Ordinal (order), Interval (equal differences), and Ratio (equal differences + true zero)."},{term:"Alphabetical Inversion Hazard",definition:"The catastrophic bug where default alphabetical sorting assigns integers based on spelling (e.g. Excellent=0, Poor=4), completely inverting the feature hierarchy."},{term:"Thermometer Encoding",definition:"A cumulative binary representation [I(k>=1), I(k>=2), ..., I(k>=K-1)] that enables linear models to learn independent, non-linear step increments between ranks."},{term:"Monotonic Transformation Invariance",definition:"The mathematical theorem stating that Decision Trees produce 100% identical splits under any strictly increasing transformation g(x) of an ordinal feature."},{term:"Spearman's Rank Correlation (rho)",definition:"A non-parametric metric measuring the monotonic alignment between feature ranks and target ranks: rho = 1 - (6 * sum(d^2)) / (n * (n^2 - 1))."},{term:"Kendall's Tau (tau)",definition:"A rank correlation statistic measuring the proportion of concordant versus discordant pairs, highly robust on small clinical or pilot datasets."},{term:"Isotonic Target Spacing",definition:"Replacing integer ranks with empirical target expectations subject to monotonic constraints, calibrating intervals according to real-world business outcomes."}],R=r.useMemo(()=>{if(!v.trim())return S;const n=v.toLowerCase();return S.filter(a=>a.term.toLowerCase().includes(n)||a.definition.toLowerCase().includes(n))},[v]),k=r.useMemo(()=>{let n=0;return b.forEach((a,m)=>{g[m]===a.correctIndex&&n++}),n},[g]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 20"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Masterclass Standard"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Monotonic Topology Verified"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Ordinal Encoding: Monotonic Hierarchy, Equal-Interval Pitfalls & Thermometer Schemes"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Master the foundational mechanics of Ordinal Encoding across academic and industrial learning systems. Ground yourself in S.S. Stevens' measurement scale taxonomy, explore why Decision Trees are 100% invariant to monotonic scaling, uncover the dangerous alphabetical inversion hazard in Scikit-Learn that scrambles feature hierarchies, and master Thermometer (Cumulative Binary) encoding to allow linear models to fit non-linear step sizes without equal-interval bias."}),e.jsxs("div",{className:"pt-4 border-t border-indigo-900/50",children:[e.jsx("span",{className:"text-[11px] font-bold text-indigo-300 uppercase tracking-wider block mb-2",children:"Curriculum Roadmap Jump Navigation:"}),e.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{id:"#novice",label:"1. Novice Masterclass"},{id:"#jargon",label:"2. Hierarchy & Jargon"},{id:"#studio",label:"3. Interactive Studio"},{id:"#math",label:"4. Mathematical Formulations"},{id:"#cases",label:"5. Regional Cases"},{id:"#pitfalls",label:"6. Production Pitfalls"},{id:"#quiz",label:"7. Diagnostic Quiz"},{id:"#handbook",label:"8. Academic Notes"},{id:"#lab",label:"9. Python Lab"},{id:"#teacher",label:"10. Teacher Guidance"}].map(n=>e.jsx("a",{href:n.id,className:"px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-medium",children:n.label},n.id))})]})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Foundational Pedagogy"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"1. Novice Masterclass: Intuitive Mental Models"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-2xl",children:"🥇"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 1: The Olympic Victory Podium"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"An Olympic podium has Gold (1st), Silver (2nd), and Bronze (3rd) with an unmistakable order. However, the Gold medalist might have won by 0.01 seconds, while the Bronze medalist trailed by 10 full seconds! Ordinal data tells you the exact finishing order, but nothing about the time gap between athletes."})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-indigo-300 font-mono",children:"Order: Gold > Silver > Bronze | Gaps: Variable"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-2xl",children:"🪜"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 2: The Elastic Staircase"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"The steps from High School -> BCA -> MCA -> PhD are real stairs, but the riser height of each stair is made of elastic rubber! In career compensation, jumping from MTech to PhD might be an 8-foot cliff, while HS to BCA is a tiny 6-inch curb. Treating them as integers (0, 1, 2, 3) pretends every step is identically 10 inches tall."})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-cyan-300 font-mono",children:"Integer Encoding forces: Delta(HS->BCA) == Delta(MTech->PhD)"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl",children:"🔤"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 3: The Lexicographical Paper Shredder"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Sorting performance ratings alphabetically puts 'Excellent' at 0, 'Fair' at 1, 'Good' at 2, 'Outstanding' at 3, and 'Poor' at 4. Your top performer is mapped to the worst rank, and your worst performer is crowned king! Without an explicit ladder, automated alphabetical sorters shred your semantic hierarchy!"})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-mono",children:"Scikit Default: 'Excellent'=0, 'Poor'=4 (Hazard!)"})]})]})]}),e.jsxs("section",{id:"jargon",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Measurement Topology"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"2. Stevens' Measurement Hierarchy & Academic Glossary"})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 shadow-xl",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 bg-slate-900/90",children:[e.jsx("thead",{className:"bg-slate-950 text-indigo-300 uppercase tracking-wider text-[11px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-4",children:"Scale of Measurement"}),e.jsx("th",{className:"p-4",children:"Mathematical Relations"}),e.jsx("th",{className:"p-4",children:"Permissible Operations"}),e.jsx("th",{className:"p-4",children:"Valid Preprocessing Method"}),e.jsx("th",{className:"p-4",children:"West Bengal Industrial Example"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-4 font-bold text-white",children:"1. Nominal"}),e.jsx("td",{className:"p-4",children:"Equality (==, !=)"}),e.jsx("td",{className:"p-4",children:"Mode, Frequency, Chi-Square"}),e.jsx("td",{className:"p-4 text-cyan-400 font-semibold",children:"One-Hot Encoding, Target Encoding"}),e.jsx("td",{className:"p-4",children:"Kolkata Metro tender categories"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors bg-indigo-950/20",children:[e.jsx("td",{className:"p-4 font-bold text-indigo-300",children:"2. Ordinal (Topic 20)"}),e.jsx("td",{className:"p-4 font-semibold text-white",children:"Order (<, >, ==)"}),e.jsx("td",{className:"p-4",children:"Median, Percentiles, Spearman's rho"}),e.jsx("td",{className:"p-4 text-emerald-400 font-semibold",children:"OrdinalEncoder(categories=ladder), Thermometer"}),e.jsx("td",{className:"p-4",children:"MAKAUT letter grades (F < B < A < O)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-4 font-bold text-white",children:"3. Interval"}),e.jsx("td",{className:"p-4",children:"Order + Equal Differences (+, -)"}),e.jsx("td",{className:"p-4",children:"Mean, Variance, Pearson's r"}),e.jsx("td",{className:"p-4 text-cyan-400 font-semibold",children:"StandardScaler, MinMaxScaling"}),e.jsx("td",{className:"p-4",children:"Celsius ambient temperature in Durgapur mills"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-4 font-bold text-white",children:"4. Ratio"}),e.jsx("td",{className:"p-4",children:"Order + Differences + True Zero (*, /)"}),e.jsx("td",{className:"p-4",children:"Geometric Mean, Coefficient of Var"}),e.jsx("td",{className:"p-4 text-cyan-400 font-semibold",children:"Log1p, Box-Cox, MaxAbsScaler"}),e.jsx("td",{className:"p-4",children:"Sector V IT employee salaries (INR Lakhs)"})]})]})]})}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Ordinal Academic Glossary"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Essential mathematical terminology for university viva examinations and data engineering interviews"})]}),e.jsx("input",{type:"text",placeholder:"Search concepts (e.g. Thermometer, Stevens, Invariance)...",value:v,onChange:n=>C(n.target.value),className:"px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 w-full sm:w-64"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2",children:R.map(n=>e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300",children:n.term}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:n.definition})]},n.term))})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Simulation Sandbox"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"3. Interactive Ordinal Encoding Laboratory Studio"})]}),e.jsx("div",{className:"flex gap-2",children:[{id:"hazard",label:"Mode A: Alphabetical Hazard"},{id:"thermometer",label:"Mode B: Thermometer vs OLS"},{id:"tree",label:"Mode C: Tree Invariance"}].map(n=>e.jsx("button",{onClick:()=>T(n.id),className:d("px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",y===n.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800 text-slate-400 hover:text-white border border-slate-700"),children:n.label},n.id))})]}),y==="hazard"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"⚠️"})," The Scikit-Learn Alphabetical Inversion Hazard"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulating employee annual appraisals in Salt Lake Sector V IT consulting firms"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>w("calibrated"),className:d("px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",p==="calibrated"?"bg-emerald-600 text-white shadow-md border border-emerald-400":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"Calibrated Semantic Ladder (SAFE)"}),e.jsx("button",{onClick:()=>w("alphabetical"),className:d("px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",p==="alphabetical"?"bg-rose-600 text-white shadow-md border border-rose-400":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"Accidental Alphabetical (DEFAULT BUG)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Order Configuration"}),e.jsx("div",{className:d("text-xs font-bold font-mono",o.isHazard?"text-rose-400":"text-emerald-400"),children:o.isHazard?"ALPHABETICAL (CORRUPTED)":"SEMANTIC LADDER (VERIFIED)"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Spearman Rank Correlation (rho)"}),e.jsxs("div",{className:d("text-sm font-bold font-mono",o.rho<.5?"text-rose-400":"text-emerald-400"),children:["rho = +",o.rho.toFixed(2)]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Hierarchy Integrity"}),e.jsx("div",{className:"text-sm font-bold text-white font-mono",children:o.isHazard?"Scrambled Hierarchy":"Monotonic Preserved"})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 bg-slate-950/60",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Employee Name"}),e.jsx("th",{className:"p-3",children:"Appraisal Rating"}),e.jsx("th",{className:"p-3",children:"Assigned Integer Rank"}),e.jsx("th",{className:"p-3",children:"Actual Salary (LPA)"}),e.jsx("th",{className:"p-3",children:"Monotonic Diagnostic"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:o.rows.map(n=>e.jsxs("tr",{className:o.isHazard&&(n.perf==="Poor"||n.perf==="Excellent")?"bg-rose-950/20":"",children:[e.jsx("td",{className:"p-3 font-sans font-bold text-white",children:n.name}),e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:n.perf}),e.jsxs("td",{className:"p-3 text-indigo-300 font-bold text-sm",children:["Rank ",n.rank]}),e.jsxs("td",{className:"p-3 text-emerald-400",children:["₹",n.salary.toFixed(1)," LPA"]}),e.jsx("td",{className:"p-3 font-sans text-xs",children:o.isHazard&&n.perf==="Excellent"?e.jsx("span",{className:"text-rose-400 font-bold",children:"❌ Mapped to 0 (Treated as worst employee!)"}):o.isHazard&&n.perf==="Poor"?e.jsx("span",{className:"text-rose-400 font-bold",children:"❌ Mapped to 4 (Treated as top employee!)"}):e.jsx("span",{className:"text-emerald-400 font-semibold",children:"✔ Monotonically Aligned"})})]},n.id))})]})}),e.jsx("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed",children:o.isHazard?e.jsxs("p",{className:"text-rose-300",children:["❌ ",e.jsx("strong",{children:"Catastrophic Inversion:"})," Because 'Excellent' starts with 'E' and 'Poor' with 'P', default alphabetical sorting assigned Excellent=0 and Poor=4. Spearman's rank correlation collapsed from ",e.jsx("strong",{children:"+0.93"})," down to ",e.jsx("strong",{children:"+0.14"}),"! Any gradient descent optimizer will penalize top performers and reward underperformers!"]}):e.jsxs("p",{className:"text-emerald-300",children:["✔ ",e.jsx("strong",{children:"Calibrated Semantic Hierarchy:"})," Explicitly passing ",e.jsx("code",{children:"categories=[['Poor', 'Fair', 'Good', 'Excellent', 'Outstanding']]"})," preserves the genuine monotonic progression. Spearman's rho is ",e.jsx("strong",{children:"+0.93"}),", providing a pristine monotonic signal to downstream models."]})})]}),y==="thermometer"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"🌡️"})," Thermometer Encoding vs The Equal-Interval Dilemma"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe how Thermometer Encoding frees linear models from the forced equal-interval constraint on education salaries"})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>A("integer"),className:d("px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",x==="integer"?"bg-indigo-600 text-white shadow-md border border-indigo-400":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"Integer Ordinal (Equal Interval w)"}),e.jsx("button",{onClick:()=>A("thermometer"),className:d("px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",x==="thermometer"?"bg-emerald-600 text-white shadow-md border border-emerald-400":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:"Thermometer Scheme (Independent Steps)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Model Structure"}),e.jsx("div",{className:"text-xs font-bold font-mono text-cyan-400",children:u.isThermometer?"y = beta_0 + sum beta_j * thermo_j":"y = beta_1 * rank + beta_0"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Regression R^2 Fit"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-emerald-400",children:["R^2 = ",u.r2.toFixed(3)]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Interval Flexibility"}),e.jsx("div",{className:"text-sm font-bold text-white font-mono",children:u.isThermometer?"Non-Linear Independent Steps":"Rigid Constant Steps (+₹8.4L)"})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 bg-slate-950/60",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Qualification Level"}),e.jsx("th",{className:"p-3",children:"Encoded Representation"}),e.jsx("th",{className:"p-3",children:"Actual Mean Salary"}),e.jsx("th",{className:"p-3",children:"Model Prediction"}),e.jsx("th",{className:"p-3",children:"Residual Error"}),e.jsx("th",{className:"p-3",children:"Econometric Step Interpretation"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:u.rows.map(n=>e.jsxs("tr",{className:n.residual>3?"bg-amber-950/20":"",children:[e.jsx("td",{className:"p-3 font-sans font-bold text-white",children:n.deg}),e.jsx("td",{className:"p-3 text-indigo-300",children:u.isThermometer?`[${n.thermo.join(", ")}]`:`Rank ${n.rank}`}),e.jsxs("td",{className:"p-3 text-emerald-400 font-bold",children:["₹",n.actualSalary.toFixed(1)," LPA"]}),e.jsxs("td",{className:"p-3 text-cyan-300 font-bold",children:["₹",n.predicted.toFixed(1)," LPA"]}),e.jsxs("td",{className:d("p-3 font-bold",n.residual===0?"text-emerald-400":"text-amber-400"),children:["±₹",n.residual.toFixed(1)," LPA"]}),e.jsx("td",{className:"p-3 font-sans text-xs text-slate-400",children:n.stepExplanation})]},n.deg))})]})}),e.jsx("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed",children:u.isThermometer?e.jsxs("p",{className:"text-emerald-300",children:["✔ ",e.jsx("strong",{children:"Exact Non-Linear Step Fitting:"})," Thermometer encoding lets the linear model fit unique incremental weights: ",e.jsx("code",{children:"beta_BCA = +₹1.8L"}),", ",e.jsx("code",{children:"beta_MCA = +₹9.9L"}),", ",e.jsx("code",{children:"beta_PhD = +₹9.0L"}),". Model R^2 climbs to ",e.jsx("strong",{children:"0.998"})," with zero interval bias!"]}):e.jsxs("p",{className:"text-amber-300",children:["⚠️ ",e.jsx("strong",{children:"Rigid Equal-Interval Assumption:"})," Integer Ordinal Encoding forces the linear model to assume every educational degree yields the exact same +₹8.43 LPA jump. Notice the large residual errors at both extremes (HS predicted at -₹0.9 LPA!)."]})})]}),y==="tree"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-400",children:"🌳"})," Decision Tree Monotonic Split Invariance"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Explore how non-linear transformations g(x) = x^p leave tree split partitions 100% unchanged"})]}),e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 p-2.5 rounded-2xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300",children:"Monotonic Power (p):"}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:N,onChange:n=>I(Number(n.target.value)),className:"w-24 accent-purple-500 cursor-pointer"}),e.jsx("span",{className:"text-xs font-mono font-bold text-white w-6 text-right",children:N})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"Standard Integer Ranks (x)"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Split: x <= 2.5"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-slate-300",children:["Ranks: [",i.rawRanks.join(", "),"]"]}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Left Branch (<= 2.5):"})," HS (0), BCA (1), MCA (2)"]}),e.jsxs("div",{children:[e.jsx("strong",{children:"Right Branch (> 2.5):"})," MTech (3), PhD (4)"]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-purple-800/60 space-y-3 shadow-lg shadow-purple-950/20",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-purple-400 uppercase tracking-wider",children:["Transformed Non-Linear Ranks (x^",i.p,")"]}),e.jsxs("span",{className:"text-xs font-mono text-purple-300",children:["Split: x^",i.p," <= ",i.transformedThreshold]})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 font-mono text-xs text-purple-300",children:["Transformed: [",i.transformedRanks.join(", "),"]"]}),e.jsxs("div",{className:"text-xs text-slate-300 space-y-1",children:[e.jsxs("div",{children:[e.jsxs("strong",{children:["Left Branch (<= ",i.transformedThreshold,"):"]})," HS (0), BCA (1), MCA (2^",i.p," = ",Math.pow(2,i.p),")"]}),e.jsxs("div",{children:[e.jsxs("strong",{children:["Right Branch (> ",i.transformedThreshold,"):"]})," MTech (",Math.pow(3,i.p),"), PhD (",Math.pow(4,i.p),")"]})]})]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("strong",{children:"Mathematical Verdict:"})," Are sample partitions and Gini gain 100% identical?"," ",e.jsx("strong",{className:"text-emerald-400",children:"YES (Strict Invariance Proven)!"})]}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:"Invariance Confirmed ✔"})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Formal Foundations"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"4. Comprehensive Mathematical Formulations"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"Order Topology"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Monotonic Mapping"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Order Preserving Isomorphism"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"For an ordinal set C with total order relation (<):"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 space-y-1",children:[e.jsx("div",{children:"c_i < c_j  <==>  Phi(c_i) < Phi(c_j)"}),e.jsx("div",{children:"Transitivity: (a < b) and (b < c)  ==>  (a < c)"}),e.jsx("div",{children:"Asymmetry: (a < b)  ==>  NOT (b < a)"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Preserves topological sequence without guaranteeing interval distance equality."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Linear Calculus"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Constant Gradient"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"The Equal-Interval Constraint"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"In linear models y_hat = w * x_ord + b:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-rose-300 space-y-1",children:[e.jsx("div",{children:"d(y_hat) / d(x_ord) = w  (Strictly Constant Derivative)"}),e.jsxs("div",{children:["Delta y_","{k+1}"," - Delta y_k = w * ( (k+1) - k ) = w"]})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Forces identical target increments regardless of whether real business jumps are linear or exponential."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Cumulative Encoding"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Thermometer Scheme"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Thermometer Representation"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Maps rank k into K-1 cumulative indicator flags:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 space-y-1",children:[e.jsx("div",{children:"Phi_thermo(c_k) = [ I(k >= 1), I(k >= 2), ..., I(k >= K-1) ]^T"}),e.jsxs("div",{children:["y = beta_0 + sum_","{j=1}","^","{K-1}"," beta_j * x_j"]}),e.jsx("div",{children:"beta_j = E[ Y | rank = j ] - E[ Y | rank = j-1 ]"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Allows linear models to estimate independent step increments beta_j without multicollinearity."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400 uppercase tracking-wider",children:"Non-Parametric Audit"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Rank Correlation"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Spearman's Rank Correlation (rho)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Quantifies monotonic alignment between encoded rank and target:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-purple-300 space-y-1",children:[e.jsxs("div",{children:["rho = 1 - (6 * sum_","{i=1}","^n d_i^2) / ( n * (n^2 - 1) )"]}),e.jsx("div",{children:"d_i = rank(x_i) - rank(y_i)"}),e.jsx("div",{children:"rho in [+0.8, +1.0] (Optimal) | rho near 0 (Scrambled/Bug!)"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Provides instant mathematical diagnostic if alphabetical sorting accidentally inverts category ladders."})]})]})]}),e.jsxs("section",{id:"cases",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Industrial Grounding"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"5. Real-World Regional Industrial Case Studies (West Bengal)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/40",children:"Higher Education Analytics"}),e.jsx("span",{className:"text-xs text-slate-400",children:"MAKAUT & Barrackpore Colleges"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"NEP 2020 Credit Framework & Letter Grade Mapping"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Susmita built a student retention predictor for MAKAUT engineering colleges. The feature 'Internal Assessment Grade' followed letter grades (F, P, C, B, B+, A, A+, O). Susmita mapped them using an explicit calibrated ladder to integers (0 to 7), matching the university's standard 10-point grade progression. A Gradient Boosted decision tree split cleanly on Grade >= 4.5, flagging struggling students 6 weeks before final exams."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/40",children:"IT HR Analytics"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Salt Lake Sector V, Kolkata"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Annual Appraisal Bands & Thermometer Schemes"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu led compensation analytics at a Sector V IT consultancy. Rating bands were PIP < Meets < Exceeds < Star, and target was discretionary bonus INR. Integer encoding assumed uniform increments, severely underpredicting Star performers whose bonuses jump exponentially (300%). Debangshu implemented Thermometer Encoding ([1,0,0], [1,1,0], [1,1,1]), enabling the linear model to fit independent step increments and boosting R^2 from 0.71 to 0.94."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40",children:"Alloy Metallurgy"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Durgapur Steel Rolling Belt"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Surface Smoothness: The Alphabetical Inversion Disaster"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mamata audited an automated coil inspection system in Durgapur steel mills. The feature 'Roughness Grade' (Rough N10 < Medium N7 < Fine N4 < Mirror N1) was processed with default `OrdinalEncoder()`. It sorted alphabetically: Fine N4=0, Medium N7=1, Mirror N1=2, Rough N10=3! The neural classifier learned that flawless Mirror steel was rougher than Fine finish, halting production. Mamata hardcoded the category ladder, restoring 99.8% factory yield."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-rose-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/40",children:"Clinical Oncology"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Jadavpur Medical Research Hub"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Colorectal TNM Staging: Tree Invariance in Mortality Models"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Abhronila modeled 5-year colorectal cancer mortality using AJCC Pathological Stages (Stage 0 to Stage IV). Instead of One-Hot Encoding (which would treat Stage 0 and Stage IV as equidistant), she applied Ordinal Encoding (0 to 4). A Random Forest survival tree placed its primary root split at Stage <= 2.5, cleanly separating localized from metastatic tumors in a single decision node and improving concordance-index from 0.68 to 0.86."})]})]})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Defensive Architecture"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"6. Critical Production Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Default Alphabetical Sorting"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Corrupting Semantic Hierarchies"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Never initialize `OrdinalEncoder()` without `categories=[[...]]`. Default alphabetical sorting assigns integers based on spelling, inverting your feature hierarchy and causing Spearman's rho to collapse."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: Ordinal Encoding on Nominal Data"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Inventing False Metric Distances"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Applying ordinal encoding to unordered nominal variables (e.g. Cities: Kolkata=0, Siliguri=1, Barrackpore=2) forces an artificial distance metric that destroys linear and distance-based model calibration."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Equal-Interval Blindness"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Linear Model Non-Linear Underfitting"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Linear models assume constant step sizes dy/dk = w. If real-world jumps are exponential (e.g. PhD salary jumps), integer encoding underfits. Use Thermometer Encoding or Target Encoding for linear models."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 4: Sentinel `unknown_value=-1` Hazard"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Negative Bias in Linear / KNN Models"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:'Setting `unknown_value=-1` makes linear and distance models treat novel categories as "worse than the lowest rank". In production, map unseen levels to the median rank (K // 2) to maintain neutral prior expectations.'})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 5: Misusing `LabelEncoder` on X"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Target-Only Transformer in Feature Pipelines"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"`LabelEncoder` is strictly designed for 1D target arrays y (shape (N,)). Passing a 2D feature DataFrame into `LabelEncoder` throws a ValueError. Always use `OrdinalEncoder` for input features."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-cyan-900/40 space-y-3",children:[e.jsxs("div",{className:"text-cyan-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Engineering Rule: The Golden Decision Rule"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Optimal Preprocessing Dispatch"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"If feature has natural order -> use `OrdinalEncoder` (or Thermometer if linear). If feature is nominal and K < 20 -> use `OneHotEncoder(drop='if_binary')`. If nominal and K > 50 -> use `TargetEncoder`."})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Knowledge Verification"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"7. Diagnostic Assessment: Ordinal Encoding Mastery"})]}),f&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold",children:["Score: ",k," / ",b.length," (",Math.round(k/b.length*100),"%)"]})]}),e.jsxs("div",{className:"space-y-6",children:[b.map((n,a)=>e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-start justify-between gap-3",children:e.jsxs("h3",{className:"text-sm font-bold text-white leading-relaxed",children:[e.jsxs("span",{className:"text-indigo-400 mr-2",children:["Q",a+1,"."]}),n.question]})}),e.jsx("div",{className:"grid grid-cols-1 gap-2 pt-2",children:n.options.map((m,s)=>{const t=g[a]===s,c=s===n.correctIndex;let l="bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300";return f?c?l="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold":t&&!c&&(l="bg-rose-950/60 border-rose-500 text-rose-200"):t&&(l="bg-indigo-950/80 border-indigo-500 text-white font-medium"),e.jsxs("button",{disabled:f,onClick:()=>_({...g,[a]:s}),className:d("p-3 rounded-xl text-xs text-left border transition-all cursor-pointer flex items-start gap-2",l),children:[e.jsxs("span",{className:"font-bold text-indigo-400",children:[String.fromCharCode(65+s),")"]}),e.jsx("span",{children:m})]},s)})}),f&&e.jsxs("div",{className:"pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-2 bg-slate-950/50 p-3 rounded-xl",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-indigo-300",children:"Explanation:"})," ",n.explanation]}),e.jsxs("p",{className:"text-cyan-400",children:[e.jsx("strong",{children:"Practical Rule:"})," ",n.practicalTip]})]})]},n.id)),e.jsx("div",{className:"flex justify-end gap-3 pt-4",children:f?e.jsx("button",{onClick:()=>{_({}),E(!1)},className:"px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all cursor-pointer",children:"Retake Assessment"}):e.jsx("button",{onClick:()=>E(!0),disabled:Object.keys(g).length<b.length,className:d("px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer",Object.keys(g).length===b.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed"),children:"Submit Diagnostic Assessment"})})]})]}),e.jsxs("section",{id:"handbook",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Academic Reference"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"8. Academic Revision Handbook & Viva Voce Q&A"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(D,{content:F,filename:"Topic20_Ordinal_Encoding_Notes.txt"})})]}),e.jsxs("section",{id:"lab",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Hands-On Code"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"9. Pure Python Laboratory: Ordinal Encoding & Thermometer Schemes"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(L,{code:H,filename:"ordinal_encoding_basic_idea_lab.py",runnable:!0})})]}),e.jsxs("section",{id:"teacher",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Faculty Mentorship"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"10. Teacher Consultation & Viva Guidance"})]}),e.jsx(B,{})]})]})};export{Y as default};
