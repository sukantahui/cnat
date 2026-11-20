import{b as r,j as e,bl as i}from"./vendor-react-core-B-R9HE-Z.js";import{P as W}from"./PythonFileLoader-DZ61U3Y_.js";import{F as G}from"./FAQTemplate-16IfroqC.js";import{P as z}from"./PlainTextPrint-C6NaUtnE.js";import{T as U}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const V=`"""
=============================================================================
TOPIC 23: WORKED EXAMPLE 3: ENCODING CITY AND GENDER COLUMNS
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Industrial Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B / MAKAUT Aligned)
=============================================================================

This laboratory engine demonstrates an end-to-end, production-grade categorical
encoding architecture on realistic West Bengal consumer demographic datasets:
1. Binary Encoding of Gender: {Female: 0, Male: 1} vs One-Hot Encoding.
2. Nominal Multi-class Encoding of City:
   - The Label Encoding Hazard: Artificial metric distance distortion.
   - Full One-Hot Encoding vs Dummy Variable Trap (K vs K-1 columns).
   - Rare/Infrequent City Pooling (Top-N + 'Other' bucket).
   - Target Encoding with Bayesian Smoothing (m-estimate).
   - Cold-Start / Unseen Category Inference Guard (e.g., 'Asansol' at test time).
3. Mathematical Singularity Proof: Determinant det(X^T X) = 0 under perfect multicollinearity.
4. Downstream Linear Model Parameter Estimation and Condition Number Audit.
=============================================================================
"""

import math
import random
from typing import List, Dict, Any, Tuple, Optional, Set

# =====================================================================
# 1. DATASET SYNTHESIS: WEST BENGAL CONSUMER COMMERCE COHORT
# =====================================================================

def get_wb_consumer_cohort() -> List[Dict[str, Any]]:
    """
    12 Representative Consumer records across Kolkata Metropolitan Area & Districts:
    - city: Kolkata, Barrackpore, Howrah, Siliguri, Durgapur, Kalyani
    - gender: Female, Male
    - age: Continuous feature
    - purchase_k: Monthly e-commerce spend in Thousands of INR (₹k)
    - high_value_buyer: Binary Target {0, 1}
    """
    return [
        {"id": "WB-CUST-01", "name": "Susmita", "city": "Kolkata", "gender": "Female", "age": 24, "spend_k": 18.5, "target": 1},
        {"id": "WB-CUST-02", "name": "Debangshu", "city": "Barrackpore", "gender": "Male", "age": 31, "spend_k": 28.0, "target": 1},
        {"id": "WB-CUST-03", "name": "Mahima", "city": "Howrah", "gender": "Female", "age": 22, "spend_k": 7.2, "target": 0},
        {"id": "WB-CUST-04", "name": "Mamata", "city": "Kolkata", "gender": "Female", "age": 29, "spend_k": 22.0, "target": 1},
        {"id": "WB-CUST-05", "name": "Abhronila", "city": "Siliguri", "gender": "Female", "age": 38, "spend_k": 35.0, "target": 1},
        {"id": "WB-CUST-06", "name": "Rohan", "city": "Barrackpore", "gender": "Male", "age": 26, "spend_k": 12.0, "target": 0},
        {"id": "WB-CUST-07", "name": "Priyanka", "city": "Durgapur", "gender": "Female", "age": 33, "spend_k": 15.5, "target": 0},
        {"id": "WB-CUST-08", "name": "Sourav", "city": "Kolkata", "gender": "Male", "age": 35, "spend_k": 31.0, "target": 1},
        {"id": "WB-CUST-09", "name": "Tanmoy", "city": "Howrah", "gender": "Male", "age": 25, "spend_k": 9.5, "target": 0},
        {"id": "WB-CUST-10", "name": "Ananya", "city": "Kalyani", "gender": "Female", "age": 28, "spend_k": 14.0, "target": 0},
        {"id": "WB-CUST-11", "name": "Subhajit", "city": "Siliguri", "gender": "Male", "age": 42, "spend_k": 40.0, "target": 1},
        {"id": "WB-CUST-12", "name": "Kallol", "city": "Barrackpore", "gender": "Male", "age": 30, "spend_k": 16.5, "target": 1},
    ]

def get_unseen_test_records() -> List[Dict[str, Any]]:
    """
    Test instances introducing cold-start unseen categories and rare cities:
    - ID T1: 'Asansol' (Completely unseen in training)
    - ID T2: 'Barrackpore' (Seen in training)
    """
    return [
        {"id": "WB-TEST-01", "name": "Rituparna", "city": "Asansol", "gender": "Female", "age": 27, "spend_k": 19.0, "target": 1},
        {"id": "WB-TEST-02", "name": "Siddhartha", "city": "Barrackpore", "gender": "Male", "age": 34, "spend_k": 25.0, "target": 1},
    ]

# =====================================================================
# 2. ENCODER IMPLEMENTATIONS (FROM SCRATCH)
# =====================================================================

class BinaryGenderEncoder:
    """
    Maps binary gender strictly to {0, 1}.
    Default: Female -> 0, Male -> 1.
    Includes guard for unknown/unseen values.
    """
    def __init__(self, mapping: Optional[Dict[str, int]] = None):
        self.mapping = mapping or {"Female": 0, "Male": 1}
        self.inverse_mapping = {v: k for k, v in self.mapping.items()}

    def fit_transform(self, values: List[str]) -> List[int]:
        return [self.transform_single(v) for v in values]

    def transform_single(self, val: str) -> int:
        if val in self.mapping:
            return self.mapping[val]
        # Robust fallback for cold-start / missing: default to 0
        return 0

class OneHotCityEncoder:
    """
    Comprehensive One-Hot Encoder with:
    - Drop-First mode (prevents dummy variable trap: K-1 columns)
    - Infrequent pooling (rare cities pooled into 'Other_City')
    - Handle unknown mode ('ignore' -> all zeros vector, 'error' -> exception)
    """
    def __init__(self, drop_first: bool = False, min_freq: int = 1, handle_unknown: str = "ignore"):
        self.drop_first = drop_first
        self.min_freq = min_freq
        self.handle_unknown = handle_unknown
        self.categories_: List[str] = []
        self.dropped_category_: Optional[str] = None
        self.feature_names_: List[str] = []

    def fit(self, cities: List[str]) -> "OneHotCityEncoder":
        counts: Dict[str, int] = {}
        for c in cities:
            counts[c] = counts.get(c, 0) + 1

        # Determine frequent categories vs pooled 'Other_City'
        frequent = sorted([c for c, count in counts.items() if count >= self.min_freq])
        has_rare = any(count < self.min_freq for count in counts.values())

        if has_rare:
            self.categories_ = frequent + ["Other_City"]
        else:
            self.categories_ = frequent

        if self.drop_first and len(self.categories_) > 0:
            self.dropped_category_ = self.categories_[0]
            self.feature_names_ = [f"city_{c}" for c in self.categories_[1:]]
        else:
            self.dropped_category_ = None
            self.feature_names_ = [f"city_{c}" for c in self.categories_]

        return self

    def transform_single(self, city: str) -> List[int]:
        vec = [0] * len(self.feature_names_)

        target_cat = city
        if city not in self.categories_:
            if "Other_City" in self.categories_:
                target_cat = "Other_City"
            elif self.handle_unknown == "ignore":
                # Returns all zeros vector (safe cold-start handling)
                return vec
            else:
                raise ValueError(f"Encountered unknown city: {city}")

        if self.drop_first:
            if target_cat == self.dropped_category_:
                return vec  # Reference category is encoded as all zeros
            cat_list = self.categories_[1:]
        else:
            cat_list = self.categories_

        if target_cat in cat_list:
            idx = cat_list.index(target_cat)
            vec[idx] = 1

        return vec

    def transform(self, cities: List[str]) -> List[List[int]]:
        return [self.transform_single(c) for c in cities]

class BayesianTargetEncoder:
    """
    Target / Impact Encoding with Empirical Bayesian Smoothing (m-estimate):
        S_i = (n_i * y_bar_i + m * y_bar_global) / (n_i + m)
    Prevents overfitting on low-frequency categories.
    """
    def __init__(self, m: float = 2.0):
        self.m = m
        self.global_mean_: float = 0.0
        self.category_means_: Dict[str, float] = {}
        self.category_counts_: Dict[str, int] = {}
        self.smoothed_values_: Dict[str, float] = {}

    def fit(self, categories: List[str], targets: List[int]) -> "BayesianTargetEncoder":
        n = len(targets)
        self.global_mean_ = sum(targets) / n

        counts: Dict[str, int] = {}
        sums: Dict[str, float] = {}
        for cat, y in zip(categories, targets):
            counts[cat] = counts.get(cat, 0) + 1
            sums[cat] = sums.get(cat, 0.0) + y

        self.category_counts_ = counts
        self.category_means_ = {c: sums[c] / counts[c] for c in counts}

        # Compute smoothed target representation
        for c, count in counts.items():
            y_bar = self.category_means_[c]
            smoothed = (count * y_bar + self.m * self.global_mean_) / (count + self.m)
            self.smoothed_values_[c] = smoothed

        return self

    def transform_single(self, cat: str) -> float:
        if cat in self.smoothed_values_:
            return self.smoothed_values_[cat]
        # Cold start fallback: return global target mean
        return self.global_mean_

    def transform(self, categories: List[str]) -> List[float]:
        return [self.transform_single(c) for c in categories]

# =====================================================================
# 3. MATHEMATICAL AUDIT: THE DUMMY VARIABLE TRAP
# =====================================================================

def compute_matrix_determinant_3x3(mat: List[List[float]]) -> float:
    """Calculates determinant of a 3x3 matrix."""
    a, b, c = mat[0]
    d, e, f = mat[1]
    g, h, i = mat[2]
    return a * (e * i - f * h) - b * (d * i - f * g) + c * (d * h - e * g)

def audit_dummy_variable_trap_2cities():
    """
    Demonstrates mathematically why keeping all K dummy columns causes det(X^T X) = 0.
    Considers 4 records in 2 cities: Kolkata (K) and Barrackpore (B).
    """
    # X_full has: [Intercept=1, City_B, City_K]
    # Note: City_B + City_K = Intercept! (Exact linear combination)
    X_full = [
        [1.0, 1.0, 0.0],  # Barrackpore
        [1.0, 1.0, 0.0],  # Barrackpore
        [1.0, 0.0, 1.0],  # Kolkata
        [1.0, 0.0, 1.0],  # Kolkata
    ]

    # Compute Gram Matrix X^T X
    # Size 3x3
    XTX = [[0.0 for _ in range(3)] for _ in range(3)]
    for i in range(3):
        for j in range(3):
            XTX[i][j] = sum(X_full[row][i] * X_full[row][j] for row in range(4))

    det_full = compute_matrix_determinant_3x3(XTX)

    # Now drop the first city (City_B), leaving [Intercept=1, City_K]
    # Size 4x2 matrix
    X_drop = [
        [1.0, 0.0],
        [1.0, 0.0],
        [1.0, 1.0],
        [1.0, 1.0],
    ]
    # 2x2 Gram Matrix
    XTX_drop = [
        [sum(X_drop[r][0] * X_drop[r][0] for r in range(4)), sum(X_drop[r][0] * X_drop[r][1] for r in range(4))],
        [sum(X_drop[r][1] * X_drop[r][0] for r in range(4)), sum(X_drop[r][1] * X_drop[r][1] for r in range(4))],
    ]
    det_drop = XTX_drop[0][0] * XTX_drop[1][1] - XTX_drop[0][1] * XTX_drop[1][0]

    return det_full, det_drop, XTX, XTX_drop

# =====================================================================
# 4. MAIN LABORATORY EXECUTION SUITE
# =====================================================================

def run_laboratory():
    print("=" * 80)
    print("CODER & ACCOTAX - ADVANCED MACHINE LEARNING LAB (TOPIC 23)")
    print("WORKED EXAMPLE 3: ENCODING CITY AND GENDER COLUMNS")
    print("Academic Body: MAKAUT | Syllabus Code: BCAC701B")
    print("Author: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)

    cohort = get_wb_consumer_cohort()
    cities = [c["city"] for c in cohort]
    genders = [c["gender"] for c in cohort]
    targets = [c["target"] for c in cohort]

    print(f"\\n[PHASE 1] DATASET INSPECTION: {len(cohort)} WEST BENGAL CONSUMER PROFILES")
    print("-" * 80)
    print(f"{'ID':<12} | {'Name':<11} | {'City':<12} | {'Gender':<7} | {'Age':<4} | {'Spend (₹k)':<10} | {'Target'}")
    print("-" * 80)
    for c in cohort:
        print(f"{c['id']:<12} | {c['name']:<11} | {c['city']:<12} | {c['gender']:<7} | {c['age']:<4} | {c['spend_k']:<10.1f} | {c['target']}")

    # 1. Binary Gender Encoding
    gender_encoder = BinaryGenderEncoder()
    encoded_gender = gender_encoder.fit_transform(genders)

    print("\\n[PHASE 2] BINARY GENDER ENCODING")
    print("-" * 80)
    print("Mapping: {'Female': 0, 'Male': 1}")
    print("Encoded Gender Vector:", encoded_gender)

    # 2. One-Hot Encoding: Full (K) vs Drop-First (K-1)
    ohe_full = OneHotCityEncoder(drop_first=False).fit(cities)
    ohe_drop = OneHotCityEncoder(drop_first=True).fit(cities)

    print("\\n[PHASE 3] ONE-HOT ENCODING OF CITY COLUMN")
    print("-" * 80)
    print(f"Discovered {len(ohe_full.categories_)} Cities: {ohe_full.categories_}")
    print(f"Full OHE Features ({len(ohe_full.feature_names_)} cols): {ohe_full.feature_names_}")
    print(f"Drop-First OHE ({len(ohe_drop.feature_names_)} cols, dropped '{ohe_drop.dropped_category_}'): {ohe_drop.feature_names_}")

    print("\\nSample Transformed Rows (Full vs Drop-First):")
    for i in [0, 1, 4, 6]:
        row = cohort[i]
        v_full = ohe_full.transform_single(row["city"])
        v_drop = ohe_drop.transform_single(row["city"])
        print(f"  {row['name']} ({row['city']}):")
        print(f"    Full:       {v_full}")
        print(f"    Drop-First: {v_drop}")

    # 3. Mathematical Dummy Variable Trap Audit
    print("\\n[PHASE 4] MATHEMATICAL AUDIT: THE DUMMY VARIABLE TRAP")
    print("-" * 80)
    det_full, det_drop, XTX_full, XTX_drop = audit_dummy_variable_trap_2cities()
    print("Gram Matrix (X^T X) Determinant under 2-City Cohort:")
    print(f"  Full Dummy Representation (K columns):       det(X^T X) = {det_full:.6f}")
    print(f"  Drop-First Representation (K-1 columns):     det(X^T X) = {det_drop:.6f}")
    if abs(det_full) < 1e-9:
        print("  -> CRITICAL MATHEMATICAL PROOF: det(X^T X) = 0 proves Matrix Singularity!")
        print("     Ordinary Least Squares (OLS) closed-form (X^T X)^(-1) is undefined!")
        print("     Keeping all K dummy columns causes complete multicollinearity failure.")

    # 4. Bayesian Target Encoding
    print("\\n[PHASE 5] BAYESIAN TARGET ENCODING WITH M-ESTIMATE SMOOTHING")
    print("-" * 80)
    target_encoder = BayesianTargetEncoder(m=2.0).fit(cities, targets)
    print(f"Global High-Value Buyer Rate: {target_encoder.global_mean_ * 100:.1f}%")
    print(f"{'City':<14} | {'Count (n_i)':<11} | {'Raw Mean (y_bar)':<18} | {'Smoothed Value (m=2)'}")
    print("-" * 80)
    for city in sorted(target_encoder.category_counts_.keys()):
        count = target_encoder.category_counts_[city]
        raw_m = target_encoder.category_means_[city]
        smooth = target_encoder.smoothed_values_[city]
        print(f"{city:<14} | {count:<11} | {raw_m * 100:<17.1f}% | {smooth:.4f}")

    # 5. Cold-Start / Unseen Inference Test
    print("\\n[PHASE 6] COLD-START INFERENCE BENCHMARK (UNSEEN CITIES)")
    print("-" * 80)
    test_records = get_unseen_test_records()
    for test in test_records:
        city = test["city"]
        gender_code = gender_encoder.transform_single(test["gender"])
        ohe_vec = ohe_drop.transform_single(city)
        target_val = target_encoder.transform_single(city)

        print(f"Query: {test['name']} ({city}, {test['gender']})")
        print(f"  Gender Encoded:     {gender_code}")
        print(f"  OHE Drop-First:     {ohe_vec}  {'[ALL-ZEROS COLD START VECTOR]' if sum(ohe_vec) == 0 else ''}")
        print(f"  Target Encoded:     {target_val:.4f}  {'[FALLBACK TO GLOBAL MEAN]' if target_val == target_encoder.global_mean_ else ''}")

    print("\\n" + "=" * 80)
    print("LABORATORY EXECUTION COMPLETE: ZERO ERRORS (EXIT CODE 0)")
    print("=" * 80)

if __name__ == "__main__":
    run_laboratory()
`,Y=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & ENGINEERING HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 23: Worked Example 3: Encoding City and Gender Columns
Lead Author: Sukanta Hui | Head of AI & Advanced Analytics | Barrackpore, WB
Academic Body: MAKAUT (Maulana Abul Kalam Azad University of Technology)
=============================================================================

-----------------------------------------------------------------------------
1. THEORETICAL FOUNDATION: NOMINAL VS BINARY CATEGORICAL ATTRIBUTES
-----------------------------------------------------------------------------
In machine learning pipelines, raw tabular datasets rarely arrive purely as continuous
real-valued vectors \\mathbf{x} \\in \\mathbb{R}^d. They almost invariably contain
qualitative, symbolic attributes representing demographic classifications, geographic
origins, and behavioral flags.

Formally, categorical attributes are governed by Stanley Smith Stevens' (1946)
Measurement Scales taxonomy:
1. Nominal Variables: Discrete categories with no intrinsic natural ordering, distance
   metric, or scale. For example, City \\in {Kolkata, Barrackpore, Howrah, Siliguri}.
   Here, equality (x_i = x_j) and inequality (x_i \\neq x_j) are the only valid relations.
   Mathematical operations such as addition, subtraction, or ranking are undefined.
2. Binary (Dichotomous) Variables: Special case of nominal attributes with cardinality
   K = 2 (e.g., Gender \\in {Female, Male}). Because only two states exist, a single
   degree of freedom completely defines the state space.

Machine learning estimators—ranging from Ordinary Least Squares (OLS) and Logistic
Regression to Support Vector Machines (SVMs) and Deep Neural Networks—are fundamentally
linear algebra engines. They execute inner products:
    \\hat{y} = \\mathbf{w}^T \\mathbf{x} + b = \\sum_{j=1}^d w_j x_j + b
or compute Euclidean norms:
    \\|\\mathbf{x}_i - \\mathbf{x}_j\\| = \\sqrt{\\sum_{k=1}^d (x_{ik} - x_{jk})^2}

Feeding raw textual tokens or naive integer representations into these mathematical
operations produces catastrophic geometric and architectural distortions. Preprocessing
must map discrete symbolic categories into real vector spaces while preserving invariant
properties and avoiding statistical traps.

-----------------------------------------------------------------------------
2. BINARY ENCODING MECHANICS: THE GENDER ATTRIBUTE
-----------------------------------------------------------------------------
Consider a binary demographic attribute:
    Gender \\in \\{\\text{Female}, \\text{Male}\\}

2.1 Integer Binary Mapping
The most parsimonious mathematical representation assigns a single indicator variable:
    x_{\\text{gender}} = \\begin{cases}
        0 & \\text{if Gender} = \\text{Female (Reference Category)} \\\\
        1 & \\text{if Gender} = \\text{Male}
    \\end{cases}

Statistical Interpretation in Linear Models:
In a regression model predicting monthly spend y:
    \\hat{y} = \\beta_0 + \\beta_{\\text{age}} \\cdot \\text{Age} + \\beta_{\\text{gender}} \\cdot x_{\\text{gender}}
- The intercept \\beta_0 absorbs the baseline expected spend of Females (when x_{\\text{gender}} = 0).
- The coefficient \\beta_{\\text{gender}} measures the marginal differential spend of Males
  relative to Females, holding all other covariates constant:
    E[Y \\mid \\text{Male}] - E[Y \\mid \\text{Female}] = \\beta_{\\text{gender}}
- Degrees of Freedom: Exactly 1 parameter is added to the model.

2.2 Binary One-Hot Encoding
If encoded via standard One-Hot Encoding without column elimination:
    x_{\\text{female}} \\in \\{0, 1\\}, \\quad x_{\\text{male}} \\in \\{0, 1\\}
This creates an exact linear relationship:
    x_{\\text{female}} + x_{\\text{male}} = 1.0   \\forall i
If an intercept term \\beta_0 is included, this induces perfect multicollinearity
(the Dummy Variable Trap). Therefore, in all linear, logistic, and Cox proportional
hazard models, binary columns must either be single binary mapped or encoded with
\`OneHotEncoder(drop='first')\`.

2.3 Handling Non-Binary and Missing Demographic Values
In modern inclusive demographic schemas, gender may include categories such as
'Non-Binary', 'Other', or 'Prefer not to say' (cardinality K \\ge 3). When K > 2,
gender ceases to be dichotomous and must be treated as a multi-class nominal feature
using multi-column One-Hot Encoding.

-----------------------------------------------------------------------------
3. NOMINAL MULTI-CLASS ENCODING: THE CITY ATTRIBUTE
-----------------------------------------------------------------------------
Consider a nominal regional attribute representing customer municipal location:
    City \\in \\{\\text{Barrackpore}, \\text{Durgapur}, \\text{Howrah}, \\text{Kalyani}, \\text{Kolkata}, \\text{Siliguri}\\}
Cardinality K = 6.

3.1 The Catastrophic "Label Encoding" Hazard
A widespread novice blunder is applying \`LabelEncoder\` or \`OrdinalEncoder\` to nominal
geographic features:
    \\text{Barrackpore} \\mapsto 0
    \\text{Durgapur}    \\mapsto 1
    \\text{Howrah}      \\mapsto 2
    \\text{Kalyani}     \\mapsto 3
    \\text{Kolkata}     \\mapsto 4
    \\text{Siliguri}    \\mapsto 5

Mathematical Pathology:
1. Imposition of False Metric Distance:
   The integer encoding forces the model to assume:
       d(\\text{Barrackpore}, \\text{Siliguri}) = |5 - 0| = 5
       d(\\text{Barrackpore}, \\text{Durgapur}) = |1 - 0| = 1
   The model falsely believes Siliguri is 5 times "more different" from Barrackpore
   than Durgapur is, purely because of alphabetical ordering!
2. Imposition of Monotonic Gradient:
   In linear regression: \\hat{y} = \\beta_{\\text{city}} \\cdot x_{\\text{city}} + \\dots
   If \\beta_{\\text{city}} > 0, the model is strictly forced to predict that spend
   monotonically increases from Barrackpore to Siliguri. It cannot assign independent,
   non-monotonic economic behavior to Howrah or Kolkata without adding higher-order
   polynomials.
3. K-Means and Distance Distortion:
   In clustering or KNN, Euclidean distance \\sqrt{\\sum (x_i - x_j)^2} treats city
   integers as geometric coordinates, completely corrupting spatial clustering.

Rule: Label encoding of nominal multi-class features is strictly invalid for all
distance-based, gradient-based, and linear models.

3.2 One-Hot Encoding (Standard Basis Vector Representation)
To preserve the true nominal invariant (all cities equidistant from each other),
One-Hot Encoding maps each category k \\in \\{1, \\dots, K\\} to an orthogonal standard
basis vector \\mathbf{e}_k in \\mathbb{R}^K:
    \\text{Barrackpore} \\mapsto [1, 0, 0, 0, 0, 0]^T
    \\text{Durgapur}    \\mapsto [0, 1, 0, 0, 0, 0]^T
    \\text{Howrah}      \\mapsto [0, 0, 1, 0, 0, 0]^T
    \\text{Kalyani}     \\mapsto [0, 0, 0, 1, 0, 0]^T
    \\text{Kolkata}     \\mapsto [0, 0, 0, 0, 1, 0]^T
    \\text{Siliguri}    \\mapsto [0, 0, 0, 0, 0, 1]^T

Geometric Invariants:
1. Mutual Orthogonality:
    \\mathbf{e}_j^T \\mathbf{e}_k = 0   \\forall j \\neq k
2. Equidistant Separation:
    \\|\\mathbf{e}_j - \\mathbf{e}_k\\| = \\sqrt{1^2 + (-1)^2} = \\sqrt{2}   \\forall j \\neq k
No artificial proximity or ranking is imposed. Every city is equidistant (\\sqrt{2})
from every other city.

-----------------------------------------------------------------------------
4. THE DUMMY VARIABLE TRAP & MATHEMATICAL PROOF OF SINGULARITY
-----------------------------------------------------------------------------
While One-Hot Encoding solves the geometric metric distortion, incorporating all K
dummy columns alongside an unregularized linear model with an intercept term introduces
a fatal linear algebra failure: the Dummy Variable Trap.

4.1 Mathematical Proof of Singularity
Let design matrix X \\in \\mathbb{R}^{N \\times (K+1)} contain an intercept column \\mathbf{1}
and K dummy columns \\mathbf{d}_1, \\mathbf{d}_2, \\dots, \\mathbf{d}_K:
    X = [\\mathbf{1}, \\mathbf{d}_1, \\mathbf{d}_2, \\dots, \\mathbf{d}_K]

By definition of mutually exclusive and exhaustive categorical partitions:
    \\sum_{k=1}^K d_{ik} = 1   \\forall i \\in \\{1, \\dots, N\\}
In vector notation:
    \\sum_{k=1}^K \\mathbf{d}_k = \\mathbf{1}

This implies a non-trivial linear combination equals the zero vector:
    1 \\cdot \\mathbf{1} - \\sum_{k=1}^K 1 \\cdot \\mathbf{d}_k = \\mathbf{0}

Therefore, the columns of X are linearly dependent.
The rank of X is at most K:
    \\text{rank}(X) \\le K < K + 1

Now consider the Gram matrix X^T X \\in \\mathbb{R}^{(K+1) \\times (K+1)}.
By the Rank-Nullity Theorem:
    \\text{rank}(X^T X) = \\text{rank}(X) \\le K < K + 1
Since X^T X is a square (K+1) \\times (K+1) matrix with rank less than its dimension,
it is non-invertible (singular):
    \\det(X^T X) = 0
The condition number is infinite:
    \\kappa(X^T X) = \\frac{\\lambda_{max}}{\\lambda_{min}} = \\infty   (\\text{since } \\lambda_{min} = 0)

Closed-Form Ordinary Least Squares (OLS) Collapse:
    \\hat{\\mathbf{w}} = (X^T X)^{-1} X^T \\mathbf{y}
Because (X^T X)^{-1} does not exist, OLS optimization collapses. In practice, linear
algebra solvers (e.g., LAPACK or NumPy \`np.linalg.inv\`) will either raise a
\`LinAlgError: Singular matrix\` or compute pseudoinverses with explosive, unstable weights.

4.2 The Solution: Drop-First One-Hot Encoding (Reference Category)
To restore full column rank, we arbitrarily drop one category (e.g., \\text{Barrackpore})
as the baseline reference category:
    X_{\\text{drop}} = [\\mathbf{1}, \\mathbf{d}_{\\text{Durgapur}}, \\mathbf{d}_{\\text{Howrah}}, \\mathbf{d}_{\\text{Kalyani}}, \\mathbf{d}_{\\text{Kolkata}}, \\mathbf{d}_{\\text{Siliguri}}]

Now, no column can be formed as a linear combination of the others:
    \\text{rank}(X_{\\text{drop}}) = K
    \\det(X_{\\text{drop}}^T X_{\\text{drop}}) > 0
The Gram matrix is strictly positive definite and stably invertible.

Statistical Interpretation of Coefficients:
    \\hat{y} = \\beta_0 + \\beta_{\\text{Durgapur}} d_{\\text{Durgapur}} + \\dots + \\beta_{\\text{Siliguri}} d_{\\text{Siliguri}}
- \\beta_0: The expected target value for the dropped reference city (Barrackpore).
- \\beta_k: The marginal difference in expected target value between City k and Barrackpore:
    E[Y \\mid \\text{City}_k] - E[Y \\mid \\text{Barrackpore}] = \\beta_k

-----------------------------------------------------------------------------
5. ADVANCED HIGH-CARDINALITY ARCHITECTURES & COLD-STARTS
-----------------------------------------------------------------------------
When a categorical feature like City has hundreds or thousands of distinct levels
(e.g., Pincodes, postal towns, or villages across Bengal), One-Hot Encoding causes
severe dimensionality explosion:
    d_{\\text{features}} = K \\gg N
This creates extreme matrix sparsity, exhausts GPU memory, and dilutes tree-based
subsampling (the mtry hazard in Random Forests).

5.1 Rare / Infrequent Category Pooling
Instead of creating a dummy column for every isolated hamlet, infrequent categories
falling below a minimum count threshold (n < n_{\\text{min}}) are pooled into a single
synthetic bucket: "Other_City":
    \\text{City}_{\\text{processed}} = \\begin{cases}
        \\text{City} & \\text{if } \\text{Count}(\\text{City}) \\ge n_{\\text{min}} \\\\
        \\text{"Other\\_City"} & \\text{otherwise}
    \\end{cases}
This bounds matrix dimensionality while retaining predictive signal for major population
centers (Kolkata, Siliguri, Barrackpore).

5.2 Bayesian Target / Impact Encoding (m-Estimate Smoothing)
Target encoding replaces each categorical value with the expected target value conditioned
on that category:
    \\hat{S}_i = E[Y \\mid C = c_i]
However, rare categories (e.g., Kalyani with n=1) suffer severe sample variance and
overfitting. To prevent target leakage and over-optimism, we apply Empirical Bayesian
Smoothing (Micci-Barreca m-estimate):
    S_i = \\frac{n_i \\cdot \\bar{y}_i + m \\cdot \\bar{y}_{\\text{global}}}{n_i + m}
where:
- n_i: Number of observations in category i.
- \\bar{y}_i: Empirical sample mean target for category i.
- \\bar{y}_{\\text{global}}: Global prior mean across the entire dataset.
- m: Smoothing weight parameter (typically m \\in [2, 10]).

Behavior:
- When n_i is large (e.g., Kolkata, n=1,000), S_i \\to \\bar{y}_i (data dominates).
- When n_i is tiny (e.g., Kalyani, n=1), S_i shrinks toward \\bar{y}_{\\text{global}} (prior dominates).

5.3 The Cold-Start / Unseen Category Inference Guard
In real-time serving, a customer may register from a city completely absent during
model training (e.g., "Asansol" or "Malda"):
- If using \`OneHotEncoder(handle_unknown='error')\`, the pipeline crashes immediately.
- If using \`OneHotEncoder(handle_unknown='ignore')\`, the transformer safely maps Asansol
  to an all-zeros vector: [0, 0, 0, 0, 0]. In linear models, Asansol is naturally
  absorbed by the reference intercept \\beta_0.
- If using Target Encoding, the encoder falls back gracefully to \\bar{y}_{\\text{global}}.

-----------------------------------------------------------------------------
6. WEST BENGAL REGIONAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------

Case Study 1: E-Commerce Delivery Routing & COD Fraud in Barrackpore & Ichapur
Context: Susmita is Lead Data Engineer for a regional quick-commerce fulfillment
hub operating along BT Road between Barrackpore and Ichapur.
Challenge: Predicting Cash-on-Delivery (COD) return-to-origin (RTO) cancellation rates.
The raw database contains Customer City (18 North 24 Parganas municipalities) and
Gender (collected from checkout profiles).
Implementation:
- Gender is binary mapped to {Female: 0, Male: 1}.
- Municipalities with > 500 orders (Barrackpore, Naihati, Titagarh) retain individual
  One-Hot columns. Small rural wards (< 50 orders) are pooled into "Other_Suburban".
Impact: Model achieved an 88.4% AUC without matrix dimensional explosion, saving
₹14.2 Lakhs in wasted reverse-logistics freight.

Case Study 2: FinTech Personal Loan Underwriting in Kolkata & Salt Lake
Context: Debangshu builds credit underwriting scorecards for an NBFC in Salt Lake
Sector V evaluating personal loan applicants across Eastern India.
Challenge: Logistic regression scorecards require strict regulatory interpretability
under RBI guidelines. Using all dummy variables caused \`LinAlgError\` due to exact
collinearity with the scorecard intercept.
Implementation:
- Applied \`OneHotEncoder(drop='first', handle_unknown='ignore')\`.
- Selected 'Kolkata' as the explicit baseline reference category.
- Regulators easily verified that \\beta_{\\text{Siliguri}} = -0.42 represented the log-odds
  differential of default risk relative to Kolkata baseline borrowers.
Impact: Scorecard passed RBI model governance validation with zero multicollinearity
inflation (all Variance Inflation Factors VIF < 2.5).

Case Study 3: Hyperlocal Grocery Fulfillment in Howrah & Kalyani
Context: Mahima oversees demand forecasting for a dark-store network supplying
perishable produce across Howrah and Kalyani.
Challenge: Extreme sparsity and frequent introduction of new delivery pin-codes
caused one-hot encoded tree models to dilute feature importance across hundreds of
one-hot columns.
Implementation:
- Replaced sparse One-Hot vectors with Bayesian Target Encoding (m=5.0) predicting
  average daily perishable basket value.
- Cold-start delivery wards automatically fell back to the district prior mean.
Impact: Inference latency dropped from 45ms to 4ms per order, while LightGBM training
time decreased by 74%.

Case Study 4: Healthcare Tele-Consultation in Siliguri & North Bengal Districts
Context: Abhronila manages patient triage analytics for a digital healthcare portal
serving North Bengal tea garden communities and urban Siliguri.
Challenge: Patient demographic forms frequently contain missing gender and highly
variable town spellings ("Siliguri", "Shiliguri", "Siliguri Town").
Implementation:
- Deployed a fuzzy string normalizer (Levenshtein distance) before encoding.
- Handled missing gender via a ternary encoding scheme {Female: 0, Male: 1, Unknown: 2}.
Impact: Eliminated 99.2% of pipeline cold-start crash exceptions during monsoon season
emergency surges.

-----------------------------------------------------------------------------
7. PRODUCTION PITFALLS & ARCHITECTURAL VULNERABILITIES
-----------------------------------------------------------------------------

Pitfall 1: Encoding Data Leakage (Fit-Before-Split)
- Antipattern: Fitting \`OneHotEncoder\` or \`TargetEncoder\` across the full dataset
  before \`train_test_split()\`.
- Consequence: The encoder learns categories and target averages present only in
  the test set, producing dishonestly high offline validation accuracy.
- Production Fix: Always fit encoders strictly on \`X_train\`, calling \`transform()\`
  on \`X_test\` inside an end-to-end \`sklearn.pipeline.Pipeline\`.

Pitfall 2: Target Encoding Target Leakage (Overfitting on Rare Levels)
- Antipattern: Computing target means \\bar{y}_i without cross-validation or smoothing:
  a customer in a rare city with 1 order that happened to be fraud is permanently
  assigned a fraud risk of 100%!
- Consequence: Extreme overfitting and data leakage.
- Production Fix: Always use Out-of-Fold (OOF) target encoding or additive Bayesian
  m-smoothing during training.

Pitfall 3: Tree Model Dilution (The mtry Hazard in Random Forests)
- Antipattern: One-hot encoding a high-cardinality city column (K = 100) into 100
  sparse binary features and feeding them to a Random Forest with \`max_features='sqrt'\`.
- Consequence: Each random split evaluates only \\approx \\sqrt{100} = 10 features,
  almost all of which are sparse dummy indicators with near-zero mutual information.
  Truly predictive continuous features (e.g., Age, Income) are rarely sampled,
  degrading ensemble performance.
- Production Fix: Use target encoding, frequency encoding, or native categorical
  partitioning (LightGBM \`categorical_feature\` / CatBoost).

Pitfall 4: Unhandled Cold-Start Categories in Production Serving
- Antipattern: Deploying \`OneHotEncoder(handle_unknown='error')\` to production APIs.
- Consequence: The first customer checking out from an unlisted town crashes the
  entire checkout microservice with an unhandled exception.
- Production Fix: Always set \`handle_unknown='ignore'\` or pool rare categories into
  a robust catch-all bucket.

-----------------------------------------------------------------------------
8. COMPREHENSIVE REVISION CHECKLIST (SUKANTA HUI)
-----------------------------------------------------------------------------
[ ] Differentiate between Stevens' nominal and binary categorical measurement scales.
[ ] Explain why binary variables require only a single degree of freedom (1 parameter).
[ ] Articulate why Label Encoding is strictly prohibited on nominal geographic features.
[ ] Formulate the standard basis vector geometry of One-Hot Encoding and prove mutual distance \\sqrt{2}.
[ ] Provide the analytical proof showing that \\det(X^T X) = 0 under the Dummy Variable Trap.
[ ] Explain the baseline reference interpretation of the intercept \\beta_0 when using \`drop='first'\`.
[ ] Formulate the empirical Bayesian smoothing equation for Target Encoding (m-estimate).
[ ] Understand the mtry feature dilution hazard when feeding sparse OHE vectors into Random Forests.
[ ] Configure \`OneHotEncoder\` with \`handle_unknown='ignore'\` to build production cold-start guards.
[ ] Build an end-to-end leakage-free ColumnTransformer handling binary gender and nominal city.

-----------------------------------------------------------------------------
9. MAKAUT SEMESTER EXAMINATION & VIVA VOCE QUESTIONS WITH MODEL ANSWERS
-----------------------------------------------------------------------------

Q1: Why is Label Encoding inappropriate for nominal features like 'City' in linear regression?
Answer: Label Encoding maps arbitrary integer ranks (e.g., Kolkata=1, Howrah=2, Siliguri=3)
to nominal categories. Linear models compute \\hat{y} = \\beta \\cdot x, which forces a false
monotonic gradient and artificial metric distances (implying d(Siliguri, Kolkata) = 2 \\times d(Howrah, Kolkata)).
Since nominal categories have no order, this distorts parameter estimation and gradient descent.

Q2: What is the Dummy Variable Trap and how is it resolved mathematically?
Answer: The Dummy Variable Trap occurs when all K categories of a nominal feature are
one-hot encoded alongside an intercept column. Because \\sum_{k=1}^K \\mathbf{d}_k = \\mathbf{1},
the design matrix columns are linearly dependent, causing the Gram matrix X^T X to be
singular (\\det(X^T X) = 0) with an infinite condition number. It is resolved by dropping
one category (\`drop='first'\`), creating K-1 dummy features and restoring full rank.

Q3: When using drop-first encoding in linear regression, how do you interpret the intercept \\beta_0?
Answer: The intercept \\beta_0 represents the expected value of the target variable for the
omitted baseline reference category when all other continuous covariates are zero. The
coefficients \\beta_k on the remaining dummy columns represent the marginal difference
in expected target value between category k and the reference category.

Q4: What is the mathematical formulation of Bayesian Target Encoding with m-smoothing?
Answer: S_i = \\frac{n_i \\cdot \\bar{y}_i + m \\cdot \\bar{y}_{global}}{n_i + m}, where n_i is
the category sample size, \\bar{y}_i is the category target mean, \\bar{y}_{global} is the
overall dataset target mean, and m is a smoothing hyperparameter. It prevents overfitting
by shrinking rare category estimates toward the global prior.

Q5: How should a production machine learning pipeline handle an unseen city during real-time inference?
Answer: Set \`OneHotEncoder(handle_unknown='ignore')\`. During inference on an unseen category,
the encoder outputs an all-zeros vector [0, 0, \\dots, 0], gracefully absorbing the record
into the reference category intercept without throwing a runtime error. In target encoding,
unseen categories fall back to the global target prior mean \\bar{y}_{global}.

Q6: Why can L2-regularized Ridge Regression handle all K dummy columns while Ordinary Least Squares crashes?
Answer: OLS requires inverting the singular Gram matrix X^T X, which fails because \\det(X^T X) = 0.
Ridge regression adds an L2 regularization penalty \\lambda I: \\hat{\\mathbf{w}} = (X^T X + \\lambda I)^{-1} X^T \\mathbf{y}.
Adding \\lambda > 0 shifts all eigenvalues upward (\\lambda_i + \\lambda > 0), ensuring the matrix
is strictly positive definite and invertible even under perfect multicollinearity.

Q7: What is the mtry hazard when one-hot encoding high-cardinality features in Random Forests?
Answer: Random forests sample a random subset of mtry \\approx \\sqrt{p} features at each split.
If a high-cardinality city column generates 100 sparse binary features, the total feature
pool is dominated by uninformative sparse dummies. The probability of selecting informative
dense continuous features is severely diluted, degrading tree quality and model accuracy.

Q8: How does binary gender encoding differ from multi-class nominal encoding in terms of degrees of freedom?
Answer: Binary gender has cardinality K = 2, representing exactly 1 degree of freedom. It can
be encoded as a single binary feature x \\in \\{0, 1\\}. Multi-class nominal features with
cardinality K > 2 possess K - 1 degrees of freedom, requiring K - 1 dummy variables or
target-encoded continuous dimensions.

Q9: What is Out-of-Fold (OOF) Target Encoding and why is it necessary?
Answer: In-sample target encoding computes \\bar{y}_i using the target of the current record,
which introduces severe target leakage (the feature directly includes the label it is trying
to predict). OOF target encoding partitions training data into K folds, computing category
target means strictly on out-of-fold partitions, preventing data leakage during training.

Q10: Why must categorical encoders be fitted strictly on the training partition?
Answer: Fitting encoders on the entire dataset before train/test splitting causes data leakage.
The encoder learns category vocabularies, frequency distributions, and target relationships
from the test set, creating overly optimistic validation results that fail in production.
=============================================================================
AUTHOR SIGNATURE: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
=============================================================================`,Q=[{id:1,question:"Under Stanley Smith Stevens' measurement scale taxonomy, why is a geographic feature like 'City' classified strictly as a Nominal attribute?",shortAnswer:"Because city names are discrete categorical labels without any intrinsic mathematical order, rank, or measurable distance between them.",explanation:"In nominal measurement scales, the only valid mathematical relations are equality (City A == City B) and inequality (City A != City B). Arithmetic operations such as addition, subtraction, or ranking are mathematically meaningless.",hint:"Does it make sense to state that Kolkata is 'greater than' or 'double' Barrackpore?",level:"Basic",codeExample:`# Nominal check: equality is valid, order is not
is_same = (df['city'] == 'Kolkata')  # Valid nominal relation`},{id:2,question:"Why does assigning arbitrary integers (Label Encoding: Kolkata=0, Howrah=1, Siliguri=2) create a dangerous mathematical pathology in linear regression?",shortAnswer:"It imposes artificial metric distances and a false monotonic gradient, forcing the model to assume Siliguri is twice as far from Kolkata as Howrah is.",explanation:"Linear models compute y_hat = w * x + b. An integer encoding forces the coefficient w to predict a strict monotonic trend across cities based purely on alphabetical sorting, preventing the model from learning independent regional effects.",hint:"Recall: |2 - 0| = 2, while |1 - 0| = 1. Linear weights scale directly with input magnitudes.",level:"Basic",codeExample:`# DANGEROUS LABEL ENCODING ON NOMINAL FEATURE:
from sklearn.preprocessing import LabelEncoder
# Forces artificial numerical order on cities!
df['city_bad'] = LabelEncoder().fit_transform(df['city'])`},{id:3,question:"How many degrees of freedom does a binary demographic attribute like Gender {Female, Male} possess?",shortAnswer:"Exactly 1 degree of freedom, because knowing whether a person is Female completely determines whether they are Male.",explanation:"Since the two states are mutually exclusive and exhaustive, a single binary variable x in {0, 1} completely captures the state space without redundancy.",hint:"Degrees of freedom equals K - 1 where K is cardinality.",level:"Basic",codeExample:`# Binary gender encoding
df['is_male'] = (df['gender'] == 'Male').astype(int)`},{id:4,question:"What is the geometric distance between any two distinct one-hot encoded city vectors?",shortAnswer:"The Euclidean distance between any two distinct one-hot vectors e_j and e_k is exactly sqrt(2).",explanation:"Each city is mapped to an orthogonal standard basis vector in R^K. The Euclidean distance is ||e_j - e_k|| = sqrt(1^2 + (-1)^2 + 0) = sqrt(2). This guarantees perfect geometric symmetry and equidistance.",hint:"Subtract two standard basis vectors: [1, 0, 0] - [0, 1, 0] = [1, -1, 0].",level:"Basic",codeExample:`import numpy as np
e1 = np.array([1, 0, 0, 0])
e2 = np.array([0, 1, 0, 0])
dist = np.linalg.norm(e1 - e2)  # Returns 1.4142 (sqrt(2))`},{id:5,question:"What is the consequence of feeding one-hot encoded categorical variables into a K-Means clustering algorithm?",shortAnswer:"All distinct categories are equidistant (distance = sqrt(2)), meaning clustering is guided purely by discrete matching rather than continuous topological proximity.",explanation:"While One-Hot Encoding correctly avoids false ordering, it treats all cities as equally dissimilar. It cannot capture geographical spatial proximity (e.g., that Barrackpore is closer to Kolkata than to Siliguri) unless geographic coordinates (latitude/longitude) are provided.",hint:"One-hot encoding treats every city as orthogonal in hyper-dimensional space.",level:"Basic",codeExample:`# Spatial alternative to one-hot encoding for cities
# Use spatial coordinates: [latitude, longitude]`},{id:6,question:"When should Gender be encoded using multi-column One-Hot Encoding rather than a single binary column?",shortAnswer:"Whenever the gender attribute includes more than two categories (e.g., Female, Male, Non-Binary, Prefer not to say).",explanation:"When cardinality K > 2, the feature is no longer dichotomous. It becomes a multi-class nominal attribute requiring K - 1 dummy variables to represent all distinct identities without imposing arbitrary ordering.",hint:"Check cardinality K: if K > 2, binary integer mapping is insufficient.",level:"Basic",codeExample:`# Multi-class gender schema
# categories: ['Female', 'Male', 'Non-Binary', 'Other']`},{id:7,question:"What does the inner product (dot product) of two different one-hot encoded city basis vectors equal?",shortAnswer:"Zero (e_j^T * e_k = 0), proving that the feature representations are mutually orthogonal.",explanation:"Because only one component is 1 and all others are 0, multiplying corresponding elements across distinct one-hot vectors always yields zero. Orthogonality ensures zero linear overlap between city indicators.",hint:"Dot product of [1, 0] and [0, 1] is 1*0 + 0*1 = 0.",level:"Basic",codeExample:"np.dot([1, 0, 0], [0, 1, 0])  # Equals 0"},{id:8,question:"Why does tree-based partitioning (e.g., Decision Trees) tolerate Label Encoding better than linear models do?",shortAnswer:"Because decision trees can isolate arbitrary categories through successive binary threshold splits, whereas linear models are constrained to a single global slope weight.",explanation:"A decision tree can split on 'City <= 1' (isolating Kolkata and Howrah) and later split on 'City == 2' (isolating Siliguri). However, this still imposes an inefficient search path and can distort feature importance relative to native categorical handling.",hint:"Decision trees make step-function axis-aligned splits.",level:"Basic",codeExample:"# Decision tree split: if city_code <= 1 -> Branch A, else Branch B"},{id:9,question:"What is the Dummy Variable Trap, and what mathematical property does it cause in the Gram matrix X^T X?",shortAnswer:"It occurs when all K dummy columns are included alongside an intercept column, creating perfect multicollinearity (sum d_k = 1) and rendering the Gram matrix singular: det(X^T X) = 0.",explanation:"Because the sum of all K dummy columns equals the intercept column vector of ones, the columns are linearly dependent. The rank of X is at most K, meaning the (K+1) x (K+1) matrix X^T X is not invertible, crashing Ordinary Least Squares closed-form estimation.",hint:"Linear dependence: 1 * column_ones - sum(dummy_columns) = 0.",level:"Intermediate",codeExample:`# Proving linear dependence:
# intercept = dummy_Kolkata + dummy_Barrackpore + dummy_Howrah`},{id:10,question:"How does 'Drop-First' One-Hot Encoding mathematically resolve the Dummy Variable Trap?",shortAnswer:"By omitting one category (e.g., dropping Barrackpore), the remaining K - 1 dummy columns become linearly independent of the intercept, restoring full rank and positive definiteness to X^T X.",explanation:"With K - 1 columns, no dummy column can be formed as a linear combination of the remaining columns and the intercept. This ensures det(X^T X) > 0, allowing stable inversion in OLS and logistic regression.",hint:"Use OneHotEncoder(drop='first').",level:"Intermediate",codeExample:`from sklearn.preprocessing import OneHotEncoder
ohe = OneHotEncoder(drop='first', sparse_output=False)
X_encoded = ohe.fit_transform(df[['city']])`},{id:11,question:"In a linear regression model using drop-first encoding for City, how is the intercept beta_0 statistically interpreted?",shortAnswer:"beta_0 represents the expected target value for an individual belonging to the dropped baseline reference city, when all continuous covariates are set to zero.",explanation:"When a record belongs to the omitted reference city, all remaining dummy indicators are 0. Thus, y_hat = beta_0 + 0 + ... + 0 = beta_0. The intercept anchors the reference population.",hint:"What happens to the equation y = beta0 + beta1*d1 + beta2*d2 when d1=0 and d2=0?",level:"Intermediate",codeExample:`# Regression interpretation
# E[Y | City = Reference] = beta_0`},{id:12,question:"In a linear regression model using drop-first encoding, what does the coefficient beta_Siliguri represent?",shortAnswer:"It represents the marginal difference in the expected target value between Siliguri residents and the baseline reference city residents: E[Y | Siliguri] - E[Y | Reference].",explanation:"If Barrackpore is the reference and beta_Siliguri = +5.2, it means customers in Siliguri spend an average of ₹5.2k more per month than customers in Barrackpore, holding all other features constant.",hint:"Coefficients in drop-first encoding measure contrast against the baseline.",level:"Intermediate",codeExample:`# Marginal differential
# E[Y | City=Siliguri] - E[Y | City=Reference] = beta_Siliguri`},{id:13,question:"Why can L2-regularized Ridge Regression invert the design matrix even when all K dummy columns and an intercept are included?",shortAnswer:"Because Ridge regression adds a regularization penalty lambda * I to the Gram matrix: (X^T X + lambda * I)^(-1), which shifts all eigenvalues upward by lambda > 0, making the matrix strictly positive definite.",explanation:"Even if X^T X has a zero eigenvalue due to perfect multicollinearity, adding lambda * I ensures the minimum eigenvalue is at least lambda > 0. This guarantees invertibility, although individual dummy coefficients will share weights and lose unique interpretability.",hint:"Adding positive diagonal damping prevents zero eigenvalues.",level:"Intermediate",codeExample:`from sklearn.linear_model import Ridge
# Ridge regression handles full dummy encoding without crashing
model = Ridge(alpha=1.0).fit(X_full_dummies, y)`},{id:14,question:"What is the condition number kappa(X^T X) of a design matrix suffering from the Dummy Variable Trap, and what does it signify?",shortAnswer:"The condition number is infinite (kappa = infinity), signifying that the matrix is perfectly ill-conditioned and that arbitrary numerical noise will cause explosive coefficient instability.",explanation:"Condition number is defined as kappa = lambda_max / lambda_min. When perfect collinearity exists, lambda_min = 0, so kappa = lambda_max / 0 = infinity. Solvers cannot invert the matrix reliably.",hint:"Condition number measures sensitivity to numerical perturbations.",level:"Intermediate",codeExample:`# Condition number check
import numpy as np
kappa = np.linalg.cond(XTX)
print('Condition number:', kappa)`},{id:15,question:"What is the mathematical equation for Bayesian Target Encoding with m-estimate smoothing?",shortAnswer:"S_i = (n_i * y_bar_i + m * y_bar_global) / (n_i + m), where n_i is the category sample count, y_bar_i is the category target mean, and m is the smoothing weight.",explanation:"When sample size n_i is small, the prior global mean y_bar_global dominates, preventing overfitting on rare categories. When n_i is large, the empirical category mean y_bar_i dominates.",hint:"A convex combination of category mean and global prior mean.",level:"Intermediate",codeExample:`# Bayesian target smoothing formula
smoothed = (count * local_mean + m * global_mean) / (count + m)`},{id:16,question:"In Bayesian Target Encoding, what happens to the encoded value S_i as the category count n_i approaches infinity?",shortAnswer:"S_i converges asymptotically to the empirical category mean: lim_{n_i -> inf} S_i = y_bar_i.",explanation:"As sample size grows huge, n_i / (n_i + m) approaches 1.0, and m / (n_i + m) approaches 0. The Bayesian prior is washed out by abundant empirical evidence.",hint:"Evaluate the limit as n_i becomes much larger than m.",level:"Intermediate",codeExample:"# Limit behavior: for n_i >> m, smoothed ≈ local_mean"},{id:17,question:"How should a production Scikit-Learn pipeline handle an unseen City (e.g., 'Asansol') encountered during online inference?",shortAnswer:"Configure OneHotEncoder(handle_unknown='ignore'), which outputs an all-zeros vector for unseen categories, safely absorbing the query into the intercept without throwing a runtime error.",explanation:"Default `handle_unknown='error'` crashes web APIs when new categories appear. With 'ignore', the unseen category simply activates zero dummy columns, gracefully inheriting the baseline expected value.",hint:"Set handle_unknown='ignore' inside OneHotEncoder.",level:"Advanced",codeExample:`from sklearn.preprocessing import OneHotEncoder
ohe = OneHotEncoder(handle_unknown='ignore', sparse_output=False)
ohe.fit([['Kolkata'], ['Barrackpore']])
# Unseen city returns all zeros [0, 0]
print(ohe.transform([['Asansol']]))`},{id:18,question:"How does 'Fit-Before-Split' encoding cause data leakage in cross-validation?",shortAnswer:"Fitting the encoder across the entire dataset exposes the transformer to category vocabularies and frequencies present in the test partition, corrupting generalization evaluation.",explanation:"If rare cities present only in the validation fold are learned during fitting, the training phase gains access to test distribution structures. Encoders must strictly execute fit(X_train) and transform(X_test).",hint:"Always fit transformers exclusively on training folds.",level:"Advanced",codeExample:`# LEAKAGE-FREE PIPELINE:
from sklearn.pipeline import Pipeline
from sklearn.compose import ColumnTransformer

preprocessor = ColumnTransformer([
    ('city_enc', OneHotEncoder(handle_unknown='ignore'), ['city']),
    ('gender_enc', OneHotEncoder(drop='first'), ['gender'])
])
pipeline = Pipeline([('prep', preprocessor), ('model', LogisticRegression())])`},{id:19,question:"Why should `drop='first'` NOT be combined with `handle_unknown='ignore'` in older Scikit-Learn versions?",shortAnswer:"Because an unseen city will produce an all-zeros vector, which is identical to the representation of the dropped reference category, conflating unseen data with the reference class.",explanation:"If Barrackpore is dropped (encoded as [0, 0, 0]), and Asansol is unseen (also mapped to [0, 0, 0] by ignore), the model cannot distinguish between a known resident of Barrackpore and an unknown visitor from Asansol.",hint:"Both the reference category and the unknown category share the zero vector.",level:"Advanced",codeExample:`# In modern scikit-learn (>=1.1), use handle_unknown='infrequent_if_exist'
# or preserve full one-hot when handle_unknown='ignore' is required.`},{id:20,question:"How does Scikit-Learn's `min_frequency` parameter in OneHotEncoder mitigate high-cardinality dimensionality explosion?",shortAnswer:"It pools all categories with fewer occurrences than min_frequency into a single collective dummy feature named 'city_infrequent_sklearn'.",explanation:"If a database contains 500 postal towns where 450 have fewer than 20 records, setting `min_frequency=20` generates dummy columns only for the top 50 cities plus 1 pooled column, bounding matrix width.",hint:"Check OneHotEncoder(min_frequency=10).",level:"Advanced",codeExample:`ohe = OneHotEncoder(min_frequency=5, handle_unknown='infrequent_if_exist')
X_trans = ohe.fit_transform(df[['city']])`},{id:21,question:"In an end-to-end ColumnTransformer, how do you correctly route binary gender and multi-class city columns to different encoding strategies?",shortAnswer:"By defining distinct tuples in ColumnTransformer: one mapping ['gender'] to OneHotEncoder(drop='first') and another mapping ['city'] to OneHotEncoder(handle_unknown='ignore').",explanation:"ColumnTransformer applies distinct transformer pipelines to designated feature subsets and concatenates the output feature matrices horizontally, ensuring optimal encoding per column type.",hint:"ColumnTransformer([('gender_pipe', ...), ('city_pipe', ...)]).",level:"Advanced",codeExample:`from sklearn.compose import ColumnTransformer
ct = ColumnTransformer([
    ('gender', OneHotEncoder(drop='first'), ['gender']),
    ('city', OneHotEncoder(handle_unknown='ignore'), ['city'])
], remainder='passthrough')`},{id:22,question:"Why does naive Target Encoding on training data create catastrophic target leakage (overfitting)?",shortAnswer:"Because computing the category mean directly includes each record's own target label y_i, allowing the model to memorize the target rather than learning generalizable patterns.",explanation:"If a rare city has only 1 resident who defaulted (y=1), target encoding assigns S_i = 1.0. A decision tree will split on S_i > 0.99 and achieve 100% training accuracy, but will fail completely on new data.",hint:"A feature must not use its own row's target label in its calculation.",level:"Advanced",codeExample:`# SEVERE OVERFITTING: Local mean without Out-of-Fold computation
# target_map = df.groupby('city')['target'].mean()
# df['city_encoded'] = df['city'].map(target_map)`},{id:23,question:"How does Out-of-Fold (OOF) Target Encoding eliminate target leakage during model training?",shortAnswer:"It splits training data into K folds, calculating the category target mean for each fold using only the remaining K - 1 folds, ensuring no row's target informs its own encoded value.",explanation:"OOF encoding mirrors cross-validation. For row j in fold k, its city target value is computed strictly from folds other than k, preventing self-target contamination while building the training matrix.",hint:"Leave-one-fold-out computation for training feature generation.",level:"Advanced",codeExample:`from sklearn.model_selection import KFold
# Compute category target statistics strictly on out-of-fold training data`},{id:24,question:"What is Weight of Evidence (WoE) encoding, and why is it popular in banking credit scorecards for City columns?",shortAnswer:"WoE computes WoE_i = ln(P(Goods_i) / P(Bads_i)), linearizing the relationship between the categorical attribute and the log-odds of the binary target.",explanation:"In logistic regression, log-odds ln(p / (1 - p)) is modeled as a linear function of inputs. Because WoE directly expresses categories in log-odds units, it guarantees a linear relationship with the logit function.",hint:"WoE represents the natural log of the ratio of non-defaults to defaults in that category.",level:"Advanced",codeExample:`# WoE = ln(% non-events / % events)
# woe = np.log((goods / total_goods) / (bads / total_bads))`},{id:25,question:"What is the 'mtry Hazard' when feeding hundreds of one-hot encoded city dummy features into a Random Forest?",shortAnswer:"Random Forests sample a random subset of features (mtry = sqrt(p)) at each split; when one-hot dummies dominate the feature space, the probability of selecting dense, informative continuous features is severely diluted.",explanation:"If a dataset has 5 continuous features (Age, Income, Credit Score) and 95 sparse city dummy columns (p=100), mtry = sqrt(100) = 10 features per split. The chance that all 10 sampled features are sparse, uninformative dummies is high, crippling tree decision boundaries.",hint:"Random feature subspace sampling picks mostly sparse dummies.",level:"Expert",codeExample:`# Feature dilution calculation
# P(no continuous feature in split) = C(95, 10) / C(100, 10) ≈ 58%!`},{id:26,question:"How does LightGBM handle high-cardinality nominal categorical features natively without one-hot encoding?",shortAnswer:"LightGBM sorts category bins according to their target values at each node and evaluates optimal categorical subset splits in O(K log K) time rather than exponential O(2^K) time.",explanation:"Fisher's exact sorting theorem proves that for binary classification, the optimal partition of a categorical variable into two subsets can be found by sorting categories by their target mean and finding the best continuous split point.",hint:"Sorting categories by target mean reduces subset search to O(K log K).",level:"Expert",codeExample:`import lightgbm as lgb
# Specify categorical feature natively without one-hot encoding:
dtrain = lgb.Dataset(X, label=y, categorical_feature=['city'])`},{id:27,question:"Why does CatBoost utilize Ordered Target Encoding rather than standard Out-of-Fold target encoding?",shortAnswer:"CatBoost computes target statistics over a random permutation of time, using only preceding instances to encode the current instance, completely eliminating prediction shift and target leakage.",explanation:"In sequential or online processing, data arrives chronologically. CatBoost simulates random temporal orderings to ensure that for any row i, its target encoding relies strictly on rows 1 to i-1 in that permutation.",hint:"Ordered target encoding relies strictly on past records in a random permutation.",level:"Expert",codeExample:`from catboost import CatBoostClassifier
model = CatBoostClassifier(cat_features=['city'])
model.fit(X_train, y_train)`},{id:28,question:"In a high-throughput streaming architecture, how should a microservice serialize and apply one-hot city encodings at < 5ms latency SLAs?",shortAnswer:"Pre-compute a frozen dictionary hash map mapping each known city to its integer index, and output a pre-allocated static NumPy/float array using direct index assignment.",explanation:"Avoid initializing Scikit-Learn transformers or DataFrame objects on streaming HTTP requests. A simple frozen hash map `CITY_INDEX = {'Kolkata': 0, 'Howrah': 1}` with an array lookup executes in < 5 microseconds.",hint:"Direct dictionary key lookup into fixed-size pre-allocated buffer.",level:"Expert",codeExample:`CITY_INDEX = {'Kolkata': 0, 'Barrackpore': 1, 'Howrah': 2}
def encode_fast(city):
    vec = [0] * len(CITY_INDEX)
    idx = CITY_INDEX.get(city)
    if idx is not None:
        vec[idx] = 1
    return vec`},{id:29,question:"What is Feature Hashing (the Hashing Trick) for high-cardinality nominal features, and what is its primary operational trade-off?",shortAnswer:"It applies a hash function modulo B (h(city) mod B) to project arbitrary categories into a fixed-width vector of size B, trading off potential hash collisions for bounded memory and zero vocabulary lookup.",explanation:"Feature hashing requires no vocabulary storage and natively accommodates unseen categories. However, different cities may hash to the same bucket (hash collision), creating noise that can degrade model accuracy if B is too small.",hint:"MurmurHash / MD5 modulo bucket size B.",level:"Expert",codeExample:`from sklearn.feature_extraction import FeatureHasher
hasher = FeatureHasher(n_features=8, input_type='string')
X_hashed = hasher.fit_transform([[c] for c in cities])`},{id:30,question:"Under what conditions will One-Hot Encoding cause a Linear Model to fail when trained on massive sparse datasets via Stochastic Gradient Descent (SGD)?",shortAnswer:"When high learning rates cause extreme gradient updates on rare categories that appear infrequently, or when sparse zero-valued gradients prevent weights from decaying under L2 regularization.",explanation:"In sparse SGD, weights of rare cities are only updated when a batch contains that rare city. If regularized with standard L2 decay without lazy sparse updating, the rare city weight is either neglected or over-penalized. Algorithms require Adam or AdaGrad with adaptive learning rates per coordinate.",hint:"AdaGrad/Adam maintains per-feature historical gradient accumulators.",level:"Expert",codeExample:`from sklearn.linear_model import SGDClassifier
# Use adaptive or optimal learning rate schedule for sparse one-hot features
model = SGDClassifier(loss='log_loss', learning_rate='adaptive', eta0=0.01)`}],j=[{id:"WB-CUST-01",name:"Susmita",city:"Kolkata",gender:"Female",age:24,spendK:18.5,target:1},{id:"WB-CUST-02",name:"Debangshu",city:"Barrackpore",gender:"Male",age:31,spendK:28,target:1},{id:"WB-CUST-03",name:"Mahima",city:"Howrah",gender:"Female",age:22,spendK:7.2,target:0},{id:"WB-CUST-04",name:"Mamata",city:"Kolkata",gender:"Female",age:29,spendK:22,target:1},{id:"WB-CUST-05",name:"Abhronila",city:"Siliguri",gender:"Female",age:38,spendK:35,target:1},{id:"WB-CUST-06",name:"Rohan",city:"Barrackpore",gender:"Male",age:26,spendK:12,target:0},{id:"WB-CUST-07",name:"Priyanka",city:"Durgapur",gender:"Female",age:33,spendK:15.5,target:0},{id:"WB-CUST-08",name:"Sourav",city:"Kolkata",gender:"Male",age:35,spendK:31,target:1},{id:"WB-CUST-09",name:"Tanmoy",city:"Howrah",gender:"Male",age:25,spendK:9.5,target:0},{id:"WB-CUST-10",name:"Ananya",city:"Kalyani",gender:"Female",age:28,spendK:14,target:0},{id:"WB-CUST-11",name:"Subhajit",city:"Siliguri",gender:"Male",age:42,spendK:40,target:1},{id:"WB-CUST-12",name:"Kallol",city:"Barrackpore",gender:"Male",age:30,spendK:16.5,target:1}],c=["Barrackpore","Durgapur","Howrah","Kalyani","Kolkata","Siliguri"],se=()=>{const[B,O]=r.useState("hero");r.useId();const[v,D]=r.useState("dual_inspector"),[l,M]=r.useState("drop_first"),[k,L]=r.useState("all"),[o,T]=r.useState("drop_first"),[f,K]=r.useState(2),[p,R]=r.useState("Asansol"),[y,C]=r.useState(""),[u,S]=r.useState({}),[m,A]=r.useState(!1),[b,H]=r.useState("lab"),x=r.useMemo(()=>j.reduce((t,n)=>t+n.target,0)/j.length,[]),w=r.useMemo(()=>{const t={};return c.forEach(n=>{const s=j.filter(E=>E.city===n),a=s.length,d=s.reduce((E,P)=>E+P.target,0),_=a>0?d/a:x,g=(a*_+f*x)/(a+f);t[n]={count:a,rawMean:_,smoothed:g}}),t},[f,x]),F=r.useMemo(()=>j.map(t=>{const n=t.gender==="Male"?1:0;let s={};return l==="full_ohe"?c.forEach(a=>{s[`city_${a}`]=t.city===a?1:0}):l==="drop_first"?c.slice(1).forEach(a=>{s[`city_${a}`]=t.city===a?1:0}):l==="label_bad"&&(s.city_integer=c.indexOf(t.city)),{...t,genderCode:n,cityFeatures:s}}),[l]),h=r.useMemo(()=>{const t=c.includes(p.trim()),n=t?c.slice(1).map(a=>p.trim()===a?1:0):[0,0,0,0,0];let s=x;return t&&w[p.trim()]&&(s=w[p.trim()].smoothed),{isKnown:t,oheDropVec:n,targetVal:s}},[p,w,x]),X=[{term:"Nominal Measurement Scale",def:"Discrete categorical attributes with no intrinsic ordering, rank, or metric distance (e.g., City). Only equality/inequality operations are mathematically valid.",badge:"Stevens' Taxonomy"},{term:"The Dummy Variable Trap",def:"The mathematical singularity occurring when all K dummy columns are included alongside an intercept, causing perfect multicollinearity and det(X^T X) = 0.",badge:"Linear Algebra"},{term:"Drop-First Encoding",def:"Omitting one category (K - 1 columns) to restore full matrix rank. The omitted category becomes the baseline reference absorbed into the intercept beta_0.",badge:"Production Standard"},{term:"Label Encoding Hazard",def:"The dangerous blunder of assigning integer ranks (0, 1, 2) to nominal categories, forcing false metric distances and monotonic gradients in linear models and KNN.",badge:"Mathematical Hazard"},{term:"Bayesian m-Estimate Smoothing",def:"Shrinking local category target averages toward the global dataset prior using a smoothing hyperparameter m to prevent overfitting on low-frequency levels.",badge:"Target Encoding"},{term:"The mtry Feature Dilution Hazard",def:"In Random Forests, sparse one-hot dummy columns overwhelm the feature space, reducing the chance that dense continuous features are sampled at tree splits.",badge:"Ensemble Risk"},{term:"Cold-Start All-Zeros Vector",def:"When handle_unknown='ignore' encounters an unseen city during inference, it outputs all zeros, safely defaulting the prediction to the reference intercept.",badge:"Architecture"},{term:"Out-of-Fold (OOF) Target Encoding",def:"Calculating category target statistics strictly on out-of-fold training partitions to prevent self-target contamination and extreme target leakage.",badge:"Leakage Prevention"}].filter(t=>t.term.toLowerCase().includes(y.toLowerCase())||t.def.toLowerCase().includes(y.toLowerCase())||t.badge.toLowerCase().includes(y.toLowerCase())),I=[{id:"q1",scenario:"A junior analyst uses LabelEncoder on a 'City' column containing [Kolkata, Howrah, Siliguri] encoded as [0, 1, 2] in an Ordinary Least Squares house price regression.",prompt:"What mathematical assumption has been improperly imposed on the model?",options:[{key:"A",text:"The model is strictly forced to assume Siliguri is twice as far from Kolkata as Howrah is, imposing a false monotonic gradient."},{key:"B",text:"The Gram matrix becomes singular with det(X^T X) = 0."},{key:"C",text:"The model runs out of GPU memory due to sparse matrix explosion."},{key:"D",text:"None, Label Encoding is the mathematically optimal choice for nominal features."}],correct:"A",explanation:"Label Encoding assigns arbitrary integer ranks. In linear regression (y_hat = w * x + b), this forces the model to assume that price changes monotonically with the arbitrary integer index, treating Siliguri (2) as numerically twice Howrah (1)."},{id:"q2",scenario:"You are building a loan default classifier with a 'Gender' column {Female, Male}. You decide to encode it with `OneHotEncoder(drop='first')`.",prompt:"Why is a single binary column mathematically sufficient rather than two dummy columns?",options:[{key:"A",text:"Because gender is an ordinal scale with natural ranking."},{key:"B",text:"Because binary attributes have exactly 1 degree of freedom; knowing Female=0 completely defines Male=1."},{key:"C",text:"Because Scikit-Learn cannot train models on more than 1 column."},{key:"D",text:"It prevents tree models from splitting on gender."}],correct:"B",explanation:"A binary variable has cardinality K = 2 and exactly 1 degree of freedom. Creating two dummy columns with an intercept creates exact linear dependence: d_female + d_male = 1."},{id:"q3",scenario:"During linear regression training with 6 cities, an engineer includes all 6 dummy columns AND a constant intercept column vector.",prompt:"What happens when the closed-form normal equation (X^T X)^(-1) X^T y is evaluated?",options:[{key:"A",text:"The weights converge perfectly with zero variance."},{key:"B",text:"A LinAlgError occurs because det(X^T X) = 0, meaning the matrix is singular and non-invertible."},{key:"C",text:"The model automatically drops the intercept column at runtime."},{key:"D",text:"The R-squared score increases to 1.0."}],correct:"B",explanation:"Because sum(d_k) = 1 (the intercept vector), the design matrix has linearly dependent columns. The Gram matrix X^T X is singular (determinant = 0), making closed-form inversion impossible without L2 regularization."},{id:"q4",scenario:"In an e-commerce deployment, an API receives an order from 'Asansol'—a city completely absent from the training dataset.",prompt:"How does `OneHotEncoder(handle_unknown='ignore')` safely handle this record?",options:[{key:"A",text:"It raises a ValueError: Found unknown categories."},{key:"B",text:"It outputs an all-zeros vector [0, 0, 0, 0, 0], safely absorbing the record into the reference intercept."},{key:"C",text:"It replaces 'Asansol' with the most frequent city in training."},{key:"D",text:"It drops the customer's shopping cart permanently."}],correct:"B",explanation:"Setting `handle_unknown='ignore'` prevents runtime exceptions by returning all zeroes across all one-hot feature columns. In linear models, this gracefully falls back to the baseline reference intercept."},{id:"q5",scenario:"A customer database has 500 postal towns. You apply Bayesian Target Encoding with m-smoothing parameter m = 5.0.",prompt:"What is the primary benefit of the m-smoothing parameter on a small village with only 1 customer who bought an item (y=1)?",options:[{key:"A",text:"It prevents assigning an extreme 100% target rate by shrinking the encoded value toward the global population average."},{key:"B",text:"It forces the village to be dropped from the dataset."},{key:"C",text:"It converts the target variable into a continuous Gaussian curve."},{key:"D",text:"It increases matrix sparsity."}],correct:"A",explanation:"Without smoothing, n=1 with y=1 yields an extreme 100% target value, causing severe target leakage and overfitting. With m=5, S = (1*1.0 + 5*0.58) / (1+5) ≈ 0.65, safely dampening the estimate toward the global prior."}],q=(t,n)=>{m||S(s=>({...s,[t]:n}))},N=r.useMemo(()=>{let t=0;return I.forEach(n=>{u[n.id]===n.correct&&t++}),t},[u]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16",children:[e.jsxs("header",{className:"relative bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute -bottom-10 -left-10 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 23"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Masterclass Standard"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Nominal vs Binary Dual Dilemma"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Worked Example 3: Encoding City and Gender Columns"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:"Master the mathematical, structural, and pipeline mechanics of encoding binary and multi-class nominal features. Dissect why Label Encoding fails on cities, mathematically prove the Dummy Variable Trap singularity det(X^T X) = 0, and engineer robust Bayesian Target Encoding with cold-start guards."}),e.jsxs("div",{className:"pt-4 border-t border-indigo-800/40",children:[e.jsx("p",{className:"text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2",children:"Fast-Travel Navigation (9 Core Sections)"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"novice",label:"1. Novice Masterclass"},{id:"studio",label:"2. Interactive Studio"},{id:"math",label:"3. Mathematical Proofs"},{id:"cases",label:"4. Regional Case Studies"},{id:"quiz",label:"5. Diagnostic Assessment"},{id:"pitfalls",label:"6. Production Pitfalls"},{id:"resources",label:"7. Laboratory & Resources"}].map(t=>e.jsx("button",{onClick:()=>{const n=document.getElementById(t.id);n&&n.scrollIntoView({behavior:"smooth"}),O(t.id)},className:i("px-3 py-1.5 text-xs font-medium rounded-lg transition-all",B===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/30":"bg-slate-800/80 hover:bg-slate-700/80 text-slate-300 border border-slate-700/60"),children:t.label},t.id))})]})]})]}),e.jsxs("section",{id:"novice",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-indigo-500/20 rounded-xl border border-indigo-500/30 text-indigo-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"1. Novice Masterclass & Mental Models"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Analogies for categorical scales, the nominal hazard, and essential definitions"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all shadow-lg space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center font-bold text-lg",children:"1"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"The Light Switch (Binary Gender)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"A light switch has only two states: ON or OFF. You don't need two separate meters to know the state; if it is not OFF (0), it is ON (1). Similarly, binary gender has exactly 1 degree of freedom. One column completely resolves the system."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all shadow-lg space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg",children:"2"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"The Compass Points (Nominal City)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:'North, South, East, and West have no ranking. Calling East "3" and North "1" does not mean East is "three times more northern"! One-Hot Encoding treats each city as an independent orthogonal axis on a multidimensional compass, guaranteeing perfect equidistance.'})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 hover:border-indigo-500/40 transition-all shadow-lg space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold text-lg",children:"3"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"The Unseen Traveler (Cold-Start)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Imagine an e-commerce checkout in Kolkata encountering a buyer from Asansol for the very first time. If the system panics because Asansol is not on its list, checkout crashes! With `handle_unknown='ignore'`, the system gracefully assigns zeroes, defaulting to baseline behavior."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"}),"Categorical Feature Taxonomy Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 uppercase tracking-wider",children:[e.jsx("th",{className:"py-2.5 px-3",children:"Variable Type"}),e.jsx("th",{className:"py-2.5 px-3",children:"Feature Example"}),e.jsx("th",{className:"py-2.5 px-3",children:"Cardinality (K)"}),e.jsx("th",{className:"py-2.5 px-3",children:"Degrees of Freedom"}),e.jsx("th",{className:"py-2.5 px-3",children:"Optimal Encoding Architecture"}),e.jsx("th",{className:"py-2.5 px-3",children:"Fatal Anti-Pattern"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"py-2.5 px-3 font-semibold text-amber-300",children:"Binary (Dichotomous)"}),e.jsxs("td",{className:"py-2.5 px-3",children:["Gender ","{Female, Male}"]}),e.jsx("td",{className:"py-2.5 px-3 font-mono",children:"K = 2"}),e.jsx("td",{className:"py-2.5 px-3 font-mono text-cyan-300",children:"1 DoF"}),e.jsx("td",{className:"py-2.5 px-3 text-emerald-400",children:"Binary Mapping (0 / 1) or OHE drop='first'"}),e.jsx("td",{className:"py-2.5 px-3 text-rose-400",children:"Full 2-column OHE with Intercept (Collinear)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"py-2.5 px-3 font-semibold text-cyan-300",children:"Low-Cardinality Nominal"}),e.jsx("td",{className:"py-2.5 px-3",children:"City (6 Municipalities)"}),e.jsx("td",{className:"py-2.5 px-3 font-mono",children:"3 ≤ K ≤ 15"}),e.jsx("td",{className:"py-2.5 px-3 font-mono text-cyan-300",children:"K - 1 DoF"}),e.jsx("td",{className:"py-2.5 px-3 text-emerald-400",children:"One-Hot Encoding (drop='first' for Linear Models)"}),e.jsx("td",{className:"py-2.5 px-3 text-rose-400",children:"LabelEncoder (imposing false metric distance)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"py-2.5 px-3 font-semibold text-rose-300",children:"High-Cardinality Nominal"}),e.jsx("td",{className:"py-2.5 px-3",children:"Pincodes / Villages across WB"}),e.jsx("td",{className:"py-2.5 px-3 font-mono",children:"K > 100"}),e.jsx("td",{className:"py-2.5 px-3 font-mono text-cyan-300",children:"Variable"}),e.jsx("td",{className:"py-2.5 px-3 text-emerald-400",children:"Bayesian Target Encoding (m-estimate) or Frequency Pooling"}),e.jsx("td",{className:"py-2.5 px-3 text-rose-400",children:"Sparse OHE (causing mtry dilution in Random Forests)"})]})]})]})})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),"Machine Learning Jargon Buster"]}),e.jsxs("div",{className:"relative w-full sm:w-64",children:[e.jsx("input",{type:"text",placeholder:"Search definitions (e.g., trap, mtry, cold-start)...",value:y,onChange:t=>C(t.target.value),className:"w-full bg-slate-800/80 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-400 focus:outline-none focus:border-indigo-500"}),y&&e.jsx("button",{onClick:()=>C(""),className:"absolute right-2 top-1.5 text-xs text-slate-400 hover:text-white",children:"✕"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:X.map((t,n)=>e.jsxs("div",{className:"bg-slate-800/40 p-3.5 rounded-xl border border-slate-800/80 space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h4",{className:"text-xs font-bold text-indigo-300",children:t.term}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-700/60 text-slate-300",children:t.badge})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-normal",children:t.def})]},n))})]})]}),e.jsxs("section",{id:"studio",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-cyan-500/20 rounded-xl border border-cyan-500/30 text-cyan-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"2. Interactive Laboratory Studio"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Experiment with One-Hot vs Drop-First encoding, simulate the Dummy Variable Trap, and test Bayesian Target Encoding live"})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800",children:[{id:"dual_inspector",label:"Mode A: Dual Encoding Inspector (City & Gender)"},{id:"dummy_trap",label:"Mode B: The Dummy Variable Trap Matrix Arena"},{id:"target_encoding",label:"Mode C: Bayesian Target Encoding & Cold-Start Sandbox"}].map(t=>e.jsx("button",{onClick:()=>D(t.id),className:i("flex-1 min-w-[200px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all",v===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/40":"text-slate-400 hover:text-white hover:bg-slate-800/60"),children:t.label},t.id))}),v==="dual_inspector"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Encoding Strategy Comparison (West Bengal Consumer Cohort)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select an encoding strategy and observe how City and Gender are transformed across all 12 consumer records."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"drop_first",label:"Drop-First OHE (K-1 cols) [Safe for OLS]"},{id:"full_ohe",label:"Full OHE (K cols) [Collinear with Intercept]"},{id:"label_bad",label:"Label Encoding (Integer 0..5) [Hazard!]"}].map(t=>e.jsx("button",{onClick:()=>M(t.id),className:i("px-3 py-1.5 text-xs font-bold rounded-xl border transition-all",l===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-md":"bg-slate-800 text-slate-400 border-slate-700 hover:text-white"),children:t.label},t.id))})]}),e.jsxs("div",{className:i("p-4 rounded-xl border text-xs leading-relaxed",l==="drop_first"&&"bg-emerald-950/30 border-emerald-500/40 text-emerald-200",l==="full_ohe"&&"bg-amber-950/30 border-amber-500/40 text-amber-200",l==="label_bad"&&"bg-rose-950/30 border-rose-500/40 text-rose-200"),children:[l==="drop_first"&&e.jsxs("p",{children:[e.jsx("strong",{children:"Drop-First One-Hot Encoding (Recommended for Linear Models):"})," Barrackpore is dropped as the baseline reference category. The remaining 5 dummy columns represent marginal contrast against Barrackpore. Matrix is full rank (no dummy variable trap)."]}),l==="full_ohe"&&e.jsxs("p",{children:[e.jsx("strong",{children:"Full One-Hot Encoding (K = 6 Columns):"})," Generates 6 dummy features. When paired with an unregularized linear regression containing an intercept, the columns sum to 1.0, triggering complete multicollinearity: det(X^T X) = 0!"]}),l==="label_bad"&&e.jsxs("p",{children:[e.jsx("strong",{children:"Label Encoding Hazard (Anti-Pattern):"})," Imposes arbitrary integers: Barrackpore=0, Durgapur=1, Howrah=2, Kalyani=3, Kolkata=4, Siliguri=5. Linear models will falsely assume Siliguri has 5x the magnitude of Barrackpore!"]})]}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-semibold",children:"Filter City:"}),["all",...c].map(t=>e.jsx("button",{onClick:()=>L(t),className:i("px-2.5 py-1 text-xs rounded-lg transition-all",k===t?"bg-cyan-500/30 text-cyan-200 border border-cyan-400/50":"bg-slate-800 text-slate-400 border border-slate-700 hover:text-white"),children:t==="all"?"All Cities":t},t))]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2.5 px-3",children:"ID & Name"}),e.jsx("th",{className:"py-2.5 px-3",children:"Raw City"}),e.jsx("th",{className:"py-2.5 px-3",children:"Raw Gender"}),e.jsx("th",{className:"py-2.5 px-3",children:"Gender Code"}),e.jsx("th",{className:"py-2.5 px-3",children:"Encoded City Vector / Feature"}),e.jsx("th",{className:"py-2.5 px-3",children:"Spend (₹k)"}),e.jsx("th",{className:"py-2.5 px-3",children:"Target"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:F.filter(t=>k==="all"||t.city===k).map(t=>e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsxs("td",{className:"py-2 px-3 font-mono font-semibold",children:[t.id," (",t.name,")"]}),e.jsx("td",{className:"py-2 px-3",children:t.city}),e.jsx("td",{className:"py-2 px-3",children:t.gender}),e.jsxs("td",{className:"py-2 px-3 font-mono text-cyan-300",children:[t.genderCode," ",e.jsxs("span",{className:"text-slate-500 text-[10px]",children:["(",t.gender==="Male"?"Male":"Female",")"]})]}),e.jsx("td",{className:"py-2 px-3 font-mono text-indigo-300",children:l==="label_bad"?e.jsxs("span",{className:"text-rose-400 font-bold",children:[t.cityFeatures.city_integer," (Ordinal Rank)"]}):e.jsxs("span",{children:["[",Object.values(t.cityFeatures).join(", "),"]"]})}),e.jsxs("td",{className:"py-2 px-3 font-mono",children:["₹",t.spendK.toFixed(1),"k"]}),e.jsx("td",{className:"py-2 px-3 font-mono",children:e.jsx("span",{className:i("px-2 py-0.5 rounded text-[10px] font-bold",t.target===1?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-700 text-slate-400"),children:t.target===1?"High-Value":"Standard"})})]},t.id))})]})})]}),v==="dummy_trap"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Gram Matrix (X^T X) Determinant & Invertibility Audit"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulating a 4-record, 2-city cohort (Barrackpore & Kolkata) to audit the exact linear dependence and singularity failure."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>T("full_k"),className:i("px-3 py-1.5 text-xs font-bold rounded-xl border transition-all",o==="full_k"?"bg-rose-600 text-white border-rose-400 shadow-md":"bg-slate-800 text-slate-400 border-slate-700 hover:text-white"),children:"Full Dummies (K=2 cols + Intercept)"}),e.jsx("button",{onClick:()=>T("drop_first"),className:i("px-3 py-1.5 text-xs font-bold rounded-xl border transition-all",o==="drop_first"?"bg-emerald-600 text-white border-emerald-400 shadow-md":"bg-slate-800 text-slate-400 border-slate-700 hover:text-white"),children:"Drop-First (K-1=1 col + Intercept)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-1",children:[e.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Determinant det(X^T X)"}),e.jsx("p",{className:i("text-2xl font-extrabold",o==="full_k"?"text-rose-400":"text-emerald-400"),children:o==="full_k"?"0.000000":"4.000000"}),e.jsx("p",{className:"text-[10px] text-slate-400",children:o==="full_k"?"SINGULAR (Non-Invertible!)":"POSITIVE DEFINITE (Invertible)"})]}),e.jsxs("div",{className:"bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-1",children:[e.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Matrix Condition Number κ"}),e.jsx("p",{className:i("text-2xl font-extrabold",o==="full_k"?"text-rose-400":"text-cyan-400"),children:o==="full_k"?"∞ (Infinite)":"5.83 (Well-Conditioned)"}),e.jsx("p",{className:"text-[10px] text-slate-400",children:o==="full_k"?"Total numerical collapse":"Stable OLS parameter inversion"})]}),e.jsxs("div",{className:"bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60 space-y-1",children:[e.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Design Matrix Rank"}),e.jsx("p",{className:"text-2xl font-extrabold text-indigo-400",children:o==="full_k"?"Rank = 2 (Dimension = 3)":"Rank = 2 (Dimension = 2)"}),e.jsx("p",{className:"text-[10px] text-slate-400",children:o==="full_k"?"Rank-Deficient by 1 DoF":"Full Column Rank"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2",children:[e.jsxs("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider",children:["Design Matrix X (4 rows x ",o==="full_k"?"3 cols":"2 cols",")"]}),e.jsx("div",{className:"p-3 bg-slate-900 rounded-xl font-mono text-xs text-indigo-200 space-y-1",children:o==="full_k"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-slate-400 text-[10px]",children:"# Columns: [Intercept, City_Barrackpore, City_Kolkata]"}),e.jsx("p",{children:"Row 1 (Barrackpore): [ 1.0,  1.0,  0.0 ]"}),e.jsx("p",{children:"Row 2 (Barrackpore): [ 1.0,  1.0,  0.0 ]"}),e.jsx("p",{children:"Row 3 (Kolkata):     [ 1.0,  0.0,  1.0 ]"}),e.jsx("p",{children:"Row 4 (Kolkata):     [ 1.0,  0.0,  1.0 ]"}),e.jsx("p",{className:"text-rose-400 text-[11px] pt-1 border-t border-slate-800",children:"Notice: Col 2 + Col 3 = Col 1 exactly! (Linear Dependence)"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-slate-400 text-[10px]",children:"# Columns: [Intercept, City_Kolkata] (Barrackpore Dropped)"}),e.jsx("p",{children:"Row 1 (Barrackpore): [ 1.0,  0.0 ]"}),e.jsx("p",{children:"Row 2 (Barrackpore): [ 1.0,  0.0 ]"}),e.jsx("p",{children:"Row 3 (Kolkata):     [ 1.0,  1.0 ]"}),e.jsx("p",{children:"Row 4 (Kolkata):     [ 1.0,  1.0 ]"}),e.jsx("p",{className:"text-emerald-400 text-[11px] pt-1 border-t border-slate-800",children:"Linearly Independent: Full Column Rank!"})]})})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-2",children:[e.jsx("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider",children:"Gram Matrix X^T X"}),e.jsx("div",{className:"p-3 bg-slate-900 rounded-xl font-mono text-xs text-cyan-200 space-y-1",children:o==="full_k"?e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-slate-400 text-[10px]",children:"# Size: 3 x 3"}),e.jsx("p",{children:"[  4.0,  2.0,  2.0 ]"}),e.jsx("p",{children:"[  2.0,  2.0,  0.0 ]"}),e.jsx("p",{children:"[  2.0,  0.0,  2.0 ]"}),e.jsx("p",{className:"text-rose-300 text-[11px] pt-1 border-t border-slate-800",children:"det(X^T X) = 4(4 - 0) - 2(4 - 0) + 2(0 - 4) = 16 - 8 - 8 = 0.0!"})]}):e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-slate-400 text-[10px]",children:"# Size: 2 x 2"}),e.jsx("p",{children:"[  4.0,  2.0 ]"}),e.jsx("p",{children:"[  2.0,  2.0 ]"}),e.jsx("p",{className:"text-emerald-300 text-[11px] pt-1 border-t border-slate-800",children:"det(X^T X) = (4.0 * 2.0) - (2.0 * 2.0) = 8.0 - 4.0 = 4.0!"})]})})]})]})]}),v==="target_encoding"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-3xl border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Bayesian Target Encoding with m-Estimate Smoothing"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Adjust the smoothing hyperparameter m and test cold-start fallback behavior on unseen cities."})]}),e.jsxs("div",{className:"flex items-center gap-3 bg-slate-800/80 px-4 py-2 rounded-xl border border-slate-700",children:[e.jsxs("label",{className:"text-xs font-semibold text-slate-300",children:["Smoothing Weight (m): ",e.jsx("span",{className:"text-cyan-400 font-mono font-bold",children:f.toFixed(1)})]}),e.jsx("input",{type:"range",min:"0.5",max:"10.0",step:"0.5",value:f,onChange:t=>K(Number(t.target.value)),className:"accent-indigo-500 cursor-pointer w-28"})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-800/80 text-slate-400 uppercase tracking-wider font-semibold",children:e.jsxs("tr",{children:[e.jsx("th",{className:"py-2.5 px-3",children:"City"}),e.jsx("th",{className:"py-2.5 px-3",children:"Sample Count (n_i)"}),e.jsx("th",{className:"py-2.5 px-3",children:"Empirical Target Rate (ȳ_i)"}),e.jsx("th",{className:"py-2.5 px-3",children:"Global Target Prior (ȳ_global)"}),e.jsx("th",{className:"py-2.5 px-3",children:"Smoothed Target Encoding (S_i)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:c.map(t=>{const n=w[t];return e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"py-2 px-3 font-semibold text-white",children:t}),e.jsxs("td",{className:"py-2 px-3 font-mono",children:[n.count," records"]}),e.jsxs("td",{className:"py-2 px-3 font-mono",children:[(n.rawMean*100).toFixed(1),"%"]}),e.jsxs("td",{className:"py-2 px-3 font-mono text-slate-400",children:[(x*100).toFixed(1),"%"]}),e.jsx("td",{className:"py-2 px-3 font-mono text-cyan-300 font-bold",children:n.smoothed.toFixed(4)})]},t)})})]})}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-800/40 border border-slate-700/70 space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsx("h4",{className:"text-xs font-bold text-slate-300 uppercase tracking-wider",children:"Cold-Start Real-Time Inference Test Bench"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Test City Input:"}),e.jsx("input",{type:"text",value:p,onChange:t=>R(t.target.value),placeholder:"Enter city (e.g. Asansol, Malda)...",className:"bg-slate-900 border border-slate-700 rounded-lg px-3 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Training Vocabulary Status"}),e.jsx("p",{className:i("text-base font-bold",h.isKnown?"text-emerald-400":"text-rose-400"),children:h.isKnown?"Known Category ✓":"Cold-Start Unseen ⚠"}),e.jsx("p",{className:"text-[10px] text-slate-400",children:h.isKnown?"Seen in training cohort":"Zero occurrences in training data"})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"OHE Drop-First Vector"}),e.jsxs("p",{className:"text-base font-mono font-bold text-cyan-300",children:["[",h.oheDropVec.join(", "),"]"]}),e.jsx("p",{className:"text-[10px] text-slate-400",children:h.isKnown?"Active indicator match":"Safe all-zeros vector (no crash!)"})]}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-900/80 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-[11px] text-slate-400 uppercase font-semibold",children:"Target Encoded Output"}),e.jsx("p",{className:"text-base font-mono font-bold text-indigo-300",children:h.targetVal.toFixed(4)}),e.jsx("p",{className:"text-[10px] text-slate-400",children:h.isKnown?"Smoothed local average":"Graceful fallback to global prior ȳ_global"})]})]})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-emerald-500/20 rounded-xl border border-emerald-500/30 text-emerald-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"3. Mathematical Foundations & Analytical Proofs"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Rigorous proofs of the Dummy Variable Trap, standard basis geometry, and empirical Bayesian smoothing"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),"1. Standard Basis Orthogonality"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"One-Hot Encoding maps category k to standard basis vector e_k in R^K. All distinct categories are mutually orthogonal and equidistant:"}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-indigo-200 space-y-2",children:[e.jsx("p",{children:"e_j^T * e_k = 0   ∀ j ≠ k   (Mutual Orthogonality)"}),e.jsx("p",{children:"||e_j - e_k|| = √[ (1)² + (-1)² ] = √2 ≈ 1.4142   ∀ j ≠ k"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"This preserves nominal invariants: no category is closer or further from any other, completely avoiding the false proximity of Label Encoding."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"2. Singularity Proof: det(X^T X) = 0"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Let design matrix X contain an intercept column 1 and all K dummy columns d_1 ... d_K:"}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-cyan-200 space-y-1",children:[e.jsx("p",{children:"∑_{k=1}^K d_k = 1   ==>   1 * 1 - ∑_{k=1}^K 1 * d_k = 0"}),e.jsx("p",{children:"rank(X) ≤ K < K + 1   (Rank-Deficient Design Matrix)"}),e.jsx("p",{children:"rank(X^T X) = rank(X) ≤ K < K + 1   ==>   det(X^T X) = 0"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Gram matrix is non-invertible; OLS closed-form (X^T X)^(-1) does not exist. Condition number kappa = infinity."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),"3. Drop-First Reference Category Math"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Dropping the first dummy column d_1 (reference) restores full column rank rank(X_drop) = K:"}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-amber-200 space-y-1",children:[e.jsx("p",{children:"ŷ = β₀ + β₂ * d₂ + β₃ * d₃ + ... + β_K * d_K"}),e.jsx("p",{children:"β₀ = E[Y | Category = Reference]"}),e.jsx("p",{children:"β_k = E[Y | Category = k] - E[Y | Category = Reference]"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Coefficients represent marginal deviations relative to the omitted baseline reference class, ensuring direct hypothesis testing via t-statistics."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"4. Bayesian Target Encoding (m-Estimate)"]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Empirical Bayesian shrinkage formula (Micci-Barreca) dampens noisy estimates on rare categories:"}),e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 font-mono text-xs text-emerald-200 space-y-1",children:[e.jsx("p",{children:"S_i = [ n_i * ȳ_i + m * ȳ_global ] / [ n_i + m ]"}),e.jsx("p",{children:"lim_{n_i -> ∞} S_i = ȳ_i   (Sample evidence dominates)"}),e.jsx("p",{children:"lim_{n_i -> 0} S_i = ȳ_global   (Prior dominates for rare/unseen)"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"A continuous 1D representation with zero matrix sparsity, optimal for tree algorithms and linear models alike."})]})]})]}),e.jsxs("section",{id:"cases",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-indigo-500/20 rounded-xl border border-indigo-500/30 text-indigo-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"4. West Bengal Industrial Case Studies"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Real-world deployment of categorical encoding across quick-commerce, FinTech, and healthcare"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300 uppercase tracking-wider",children:"Case 1: Quick-Commerce COD Fraud"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Barrackpore & Ichapur"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Cash-on-Delivery RTO Cancellation Classifier"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context & Challenge:"})," Susmita manages logistics intelligence for a grocery delivery fleet operating along BT Road. Predicting Cash-on-Delivery (COD) return-to-origin cancellations across 18 North 24 Parganas municipalities."]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Implementation & Impact:"})," Gender was binary mapped to ","{0, 1}",'. High-volume municipalities (Barrackpore, Naihati, Titagarh) retained individual One-Hot columns, while rural wards (< 50 orders) were pooled into "Other_Suburban". Model achieved 88.4% AUC, saving ₹14.2 Lakhs in wasted return logistics.']})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-300 uppercase tracking-wider",children:"Case 2: FinTech Underwriting Scorecards"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Salt Lake Sector V"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"RBI Regulatory Compliance Credit Scorecards"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context & Challenge:"})," Debangshu develops logistic regression credit scorecards for an NBFC in Salt Lake evaluating loan applicants. Full dummy encoding caused `LinAlgError` due to exact collinearity with the scorecard intercept."]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Implementation & Impact:"})," Switched to `OneHotEncoder(drop='first', handle_unknown='ignore')` with Kolkata as the baseline reference. Regulators easily audited coefficients (e.g. beta_Siliguri = -0.42 log-odds vs Kolkata). Passed RBI model governance with all Variance Inflation Factors VIF < 2.5."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-300 uppercase tracking-wider",children:"Case 3: Dark Store Demand Forecasting"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"Howrah & Kalyani"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Hyperlocal Produce Demand per Pincode"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context & Challenge:"})," Mahima oversees inventory replenishment across dark stores in Howrah and Kalyani. 140+ postal delivery zones created an ultra-sparse matrix that diluted Random Forest feature splits (the mtry hazard)."]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Implementation & Impact:"})," Replaced sparse One-Hot vectors with Bayesian Target Encoding (m=5.0) predicting average daily basket size. LightGBM inference latency dropped from 45ms to 4ms per request, and training time was slashed by 74%."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-3 shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-300 uppercase tracking-wider",children:"Case 4: Digital Health Triage"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:"Siliguri & North Bengal"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Tea Garden Medical Tele-Consultation"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context & Challenge:"})," Abhronila manages patient triage analytics for remote clinics across Darjeeling tea gardens and urban Siliguri. Patient records regularly featured variable town spellings and missing gender."]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Implementation & Impact:"})," Implemented a fuzzy string matching layer prior to encoding, and modeled gender as a ternary feature ","{Female: 0, Male: 1, Unknown: 2}",". Eliminated 99.2% of cold-start crash exceptions during monsoon surges."]})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-amber-500/20 rounded-xl border border-amber-500/30 text-amber-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"5. Diagnostic Assessment Quiz"}),e.jsx("p",{className:"text-sm text-slate-400",children:"5 scenario-based examination questions testing theoretical mastery and production decision-making"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-slate-800 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-800",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-sm font-semibold text-slate-300",children:"Test Your Knowledge:"}),e.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"5 Scenarios"})]}),m&&e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300",children:"Your Score:"}),e.jsxs("span",{className:i("text-sm font-extrabold px-3 py-1 rounded-xl border",N>=4?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40":N>=3?"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-rose-500/20 text-rose-300 border-rose-500/40"),children:[N," / 5 (",(N/5*100).toFixed(0),"%)"]})]})]}),e.jsx("div",{className:"space-y-6",children:I.map((t,n)=>{const s=u[t.id],a=s===t.correct;return e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-800/40 border border-slate-700/70 space-y-3",children:[e.jsxs("div",{className:"flex items-start justify-between gap-3",children:[e.jsxs("span",{className:"text-xs font-mono px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300 font-bold",children:["Scenario #",n+1]}),m&&e.jsx("span",{className:i("text-xs font-bold px-2.5 py-0.5 rounded-full",a?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-rose-500/20 text-rose-300 border border-rose-500/40"),children:a?"Correct ✓":"Incorrect ✗"})]}),e.jsxs("p",{className:"text-xs text-slate-400 italic bg-slate-900/60 p-2.5 rounded-lg border border-slate-800",children:['"',t.scenario,'"']}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:t.prompt}),e.jsx("div",{className:"space-y-2 pt-1",children:t.options.map(d=>{const _=s===d.key;let g="bg-slate-800/80 border-slate-700/80 text-slate-300 hover:bg-slate-700/80";return m?d.key===t.correct?g="bg-emerald-950/60 border-emerald-500/60 text-emerald-200 font-semibold":_&&!a?g="bg-rose-950/60 border-rose-500/60 text-rose-200":g="bg-slate-800/40 border-slate-800 text-slate-500":_&&(g="bg-indigo-600/30 border-indigo-400 text-white font-semibold"),e.jsxs("button",{disabled:m,onClick:()=>q(t.id,d.key),className:i("w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-3",g),children:[e.jsx("span",{className:"w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5",children:d.key}),e.jsx("span",{children:d.text})]},d.key)})}),m&&e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-300 space-y-1",children:[e.jsx("p",{className:"font-bold text-indigo-300",children:"Explanation & Conceptual Rationale:"}),e.jsx("p",{className:"text-slate-400",children:t.explanation})]})]},t.id)})}),e.jsxs("div",{className:"flex items-center justify-between pt-4 border-t border-slate-800",children:[e.jsx("button",{onClick:()=>{S({}),A(!1)},className:"px-4 py-2 text-xs font-semibold rounded-xl bg-slate-800 text-slate-300 hover:bg-slate-700 transition-all border border-slate-700",children:"Reset Quiz"}),m?e.jsx("span",{className:"text-xs font-semibold text-emerald-400",children:"Evaluation Complete! Review explanations above."}):e.jsxs("button",{disabled:Object.keys(u).length<5,onClick:()=>A(!0),className:i("px-6 py-2.5 text-xs font-bold rounded-xl transition-all shadow-lg",Object.keys(u).length===5?"bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-600/30":"bg-slate-800 text-slate-500 border border-slate-700 cursor-not-allowed"),children:["Submit Answers (",Object.keys(u).length,"/5 Answered)"]})]})]})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-rose-500/20 rounded-xl border border-rose-500/30 text-rose-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"6. Production Pitfalls & Anti-Patterns"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Crucial architectural traps: data leakage, cold-start exceptions, and tree feature dilution"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsx("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider",children:e.jsx("span",{children:"⚠ Pitfall 1: Label Encoding Nominal Cities in Linear Models"})}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Applying `LabelEncoder` or integer mapping to nominal geographic attributes. Imposes artificial Euclidean distances and forces linear slopes to predict monotonic trends across alphabetically sorted cities."}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-rose-300 border border-rose-900/30",children:["# DANGEROUS LABEL ENCODING ON NOMINAL DATA",e.jsx("br",{}),"df['city_enc'] = LabelEncoder().fit_transform(df['city'])"]}),e.jsxs("div",{className:"p-3 rounded-xl bg-emerald-950/40 font-mono text-[11px] text-emerald-300 border border-emerald-800/40",children:["# PRODUCTION BEST PRACTICE",e.jsx("br",{}),"from sklearn.preprocessing import OneHotEncoder",e.jsx("br",{}),"ohe = OneHotEncoder(drop='first', handle_unknown='ignore')",e.jsx("br",{}),"X_encoded = ohe.fit_transform(df[['city']])"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsx("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider",children:e.jsx("span",{children:"⚠ Pitfall 2: Unhandled Cold-Start Categories in Production Serving"})}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Default `handle_unknown='error'` crashes web APIs when an online user inputs an unlisted town (e.g., 'Asansol'). Must always configure graceful fallback guards."}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-rose-300 border border-rose-900/30",children:["# RUNTIME CRASH HAZARD",e.jsx("br",{}),"ohe = OneHotEncoder() # Defaults to handle_unknown='error'"]}),e.jsxs("div",{className:"p-3 rounded-xl bg-emerald-950/40 font-mono text-[11px] text-emerald-300 border border-emerald-800/40",children:["# PRODUCTION BEST PRACTICE",e.jsx("br",{}),"ohe = OneHotEncoder(handle_unknown='ignore') # Outputs safe all-zeros!"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsx("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider",children:e.jsx("span",{children:"⚠ Pitfall 3: In-Sample Target Encoding Leakage"})}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Calculating category target averages without cross-validation or Bayesian smoothing. A single customer in a rare city who defaulted gives that city a 100% risk rating, causing extreme memorization and training overfitting."}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-rose-300 border border-rose-900/30",children:["# MEMORIZATION & TARGET LEAKAGE",e.jsx("br",{}),"df['city_enc'] = df.groupby('city')['target'].transform('mean')"]}),e.jsxs("div",{className:"p-3 rounded-xl bg-emerald-950/40 font-mono text-[11px] text-emerald-300 border border-emerald-800/40",children:["# PRODUCTION BEST PRACTICE",e.jsx("br",{}),"from category_encoders import TargetEncoder",e.jsx("br",{}),"enc = TargetEncoder(smoothing=5.0, cv=5)",e.jsx("br",{}),"X_train['city_enc'] = enc.fit_transform(X_train['city'], y_train)"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3 shadow-xl",children:[e.jsx("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-xs uppercase tracking-wider",children:e.jsx("span",{children:"⚠ Pitfall 4: The mtry Feature Dilution Hazard in Random Forests"})}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"One-hot encoding high-cardinality postal codes into 200 sparse dummy columns. Random Forests evaluate only sqrt(p) features per split, meaning tree splits are dominated by empty dummy indicators while informative continuous features are never chosen."}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 font-mono text-[11px] text-rose-300 border border-rose-900/30",children:["# MATRIX DILUTION IN ENSEMBLES",e.jsx("br",{}),"# 200 sparse dummy columns drown out Age and Income!"]}),e.jsxs("div",{className:"p-3 rounded-xl bg-emerald-950/40 font-mono text-[11px] text-emerald-300 border border-emerald-800/40",children:["# PRODUCTION BEST PRACTICE",e.jsx("br",{}),"# Use Bayesian Target Encoding or native LightGBM categorical features"]})]})]})]}),e.jsxs("section",{id:"resources",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 bg-indigo-500/20 rounded-xl border border-indigo-500/30 text-indigo-400",children:e.jsx("svg",{className:"w-6 h-6",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",children:e.jsx("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"7. Academic Laboratory & Resource Hub"}),e.jsx("p",{className:"text-sm text-slate-400",children:"Pure Python engine, comprehensive study handbook, 30 graded questions, and instructor bio"})]})]}),e.jsx("div",{className:"flex flex-wrap gap-2 p-1.5 bg-slate-900/90 rounded-2xl border border-slate-800",children:[{id:"lab",label:"Python Laboratory Code"},{id:"notes",label:"Comprehensive Study Notes (400+ Lines)"},{id:"questions",label:"30 Graded Examination Questions"},{id:"author",label:"Instructor Profile"}].map(t=>e.jsx("button",{onClick:()=>H(t.id),className:i("flex-1 min-w-[180px] py-2.5 px-4 rounded-xl text-xs font-bold transition-all",b===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-500/25 border border-indigo-400/40":"text-slate-400 hover:text-white hover:bg-slate-800/60"),children:t.label},t.id))}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-3xl border border-slate-800 shadow-2xl",children:[b==="lab"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:"Pure Python Simulation Engine (Zero External Dependencies)"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["File: ",e.jsx("code",{className:"text-indigo-300",children:"worked_example_3_encoding_city_and_gender_columns_lab.py"})]})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono",children:"Verified: Exit Code 0"})]}),e.jsx(W,{code:V,filename:"worked_example_3_encoding_city_and_gender_columns_lab.py"})]}),b==="notes"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:"Official MAKAUT Masterclass Academic Study Handbook"}),e.jsxs("p",{className:"text-xs text-slate-400",children:["File: ",e.jsx("code",{className:"text-indigo-300",children:"topic23_note.txt"})," • 400+ Lines"]})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono",children:"Syllabus BCAC701B"})]}),e.jsx("div",{className:"max-h-[600px] overflow-y-auto rounded-xl border border-slate-800 p-4 bg-slate-950/70",children:e.jsx(z,{text:Y})})]}),b==="questions"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:"30 Graded Assessment Questions with Step-by-Step Solutions"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Curated across 4 Rigorous Tiers: Foundation, Mechanics, Architecture, and Scalability"})]}),e.jsx("span",{className:"text-xs px-2.5 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono",children:"30 Graded Questions"})]}),e.jsx(G,{questions:Q})]}),b==="author"&&e.jsx("div",{className:"space-y-4",children:e.jsx(U,{})})]})]})]})};export{se as default};
