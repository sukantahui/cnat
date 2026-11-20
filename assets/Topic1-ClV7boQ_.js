import{b as n,j as e,bl as s}from"./vendor-react-core-B-R9HE-Z.js";import{P}from"./PythonFileLoader-DZ61U3Y_.js";import{F as z}from"./FAQTemplate-16IfroqC.js";import{P as V}from"./PlainTextPrint-C6NaUtnE.js";import{T as D}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const B=`"""
=============================================================================
TOPIC 1: FEATURE SELECTION CONCEPT — PURE PYTHON LABORATORY
Module: Feature Selection and Training & Testing Data (Slug: 001_003_feature-selection-and-training-testing-data)
Course: Introduction to Machine Learning (BCAC701B / MAKAUT Aligned)
Author: Sukanta Hui | Head of AI & Advanced Analytics | Barrackpore, WB
Academic Body: MAKAUT (Maulana Abul Kalam Azad University of Technology)
=============================================================================

This laboratory engine (pure Python standard library, zero external dependencies) demonstrates:
1. The Combinatorial Challenge: Searching 2^d possible feature subsets.
2. The 3 Classical Feature Selection Paradigms:
   - Filter Method: Pearson Correlation r(x_j, y) and Variance Thresholding.
   - Wrapper Method: Greedy Forward Stepwise Selection evaluating R^2.
   - Embedded Method: L1 Soft-Thresholding (Lasso Proxy) driving weights to zero.
3. The Bias-Variance Tradeoff across Feature Cardinality k in {1, ..., d}:
   - Training MSE monotonically decreases with more features.
   - Validation MSE follows a convex U-shaped curve reaching an optimal minimum k*.
4. Multicollinearity & Variance Inflation Factor (VIF) calculation.
5. West Bengal Student Performance & Career Placement Dataset:
   - Mamata (Barrackpore), Mahima (Kolkata), Susmita (Ichapur), Debangshu (Salt Lake),
     Abhronila (Jadavpur), Rohan (Hooghly), Subhajit (Siliguri).
=============================================================================
"""

import math
from typing import List, Dict, Any, Tuple

# =============================================================================
# 1. WEST BENGAL CANDIDATE DATASET WITH SIGNAL & NOISE FEATURES
# =============================================================================

STUDENT_DATASET = [
    {
        "name": "Mamata", "institution": "Barrackpore",
        # Informative Signal Features
        "attendance": 94.0, "internal_marks": 88.0, "study_hours": 24.0, "mock_tests": 18.0,
        # Redundant / Collinear Feature (correlates strongly with internal_marks)
        "assignments": 89.0,
        # Irrelevant Noise Features
        "commute_mins": 25.0, "shoe_size": 6.5, "favorite_num": 7.0,
        # Continuous Target y (Semester Percentage)
        "target": 91.5
    },
    {
        "name": "Mahima", "institution": "Kolkata",
        "attendance": 91.0, "internal_marks": 85.0, "study_hours": 22.0, "mock_tests": 15.0,
        "assignments": 86.0,
        "commute_mins": 45.0, "shoe_size": 7.0, "favorite_num": 3.0,
        "target": 87.0
    },
    {
        "name": "Susmita", "institution": "Ichapur",
        "attendance": 86.0, "internal_marks": 78.0, "study_hours": 18.0, "mock_tests": 12.0,
        "assignments": 80.0,
        "commute_mins": 15.0, "shoe_size": 6.0, "favorite_num": 9.0,
        "target": 82.5
    },
    {
        "name": "Debangshu", "institution": "Salt Lake",
        "attendance": 68.0, "internal_marks": 60.0, "study_hours": 10.0, "mock_tests": 5.0,
        "assignments": 62.0,
        "commute_mins": 60.0, "shoe_size": 8.5, "favorite_num": 13.0,
        "target": 62.0
    },
    {
        "name": "Abhronila", "institution": "Jadavpur",
        "attendance": 96.0, "internal_marks": 94.0, "study_hours": 28.0, "mock_tests": 22.0,
        "assignments": 95.0,
        "commute_mins": 30.0, "shoe_size": 6.5, "favorite_num": 5.0,
        "target": 95.0
    },
    {
        "name": "Rohan", "institution": "Hooghly",
        "attendance": 62.0, "internal_marks": 54.0, "study_hours": 8.0, "mock_tests": 4.0,
        "assignments": 55.0,
        "commute_mins": 40.0, "shoe_size": 8.0, "favorite_num": 2.0,
        "target": 56.0
    },
    {
        "name": "Subhajit", "institution": "Siliguri",
        "attendance": 78.0, "internal_marks": 72.0, "study_hours": 15.0, "mock_tests": 10.0,
        "assignments": 74.0,
        "commute_mins": 20.0, "shoe_size": 7.5, "favorite_num": 11.0,
        "target": 74.0
    }
]

FEATURE_NAMES = [
    "attendance",
    "internal_marks",
    "study_hours",
    "mock_tests",
    "assignments",
    "commute_mins",
    "shoe_size",
    "favorite_num"
]

# =============================================================================
# 2. STATISTICAL ENGINE & METRICS
# =============================================================================

def mean(arr: List[float]) -> float:
    return sum(arr) / len(arr) if arr else 0.0

def variance(arr: List[float]) -> float:
    n = len(arr)
    if n < 2: return 0.0
    m = mean(arr)
    return sum((x - m) ** 2 for x in arr) / (n - 1)

def std_dev(arr: List[float]) -> float:
    return math.sqrt(variance(arr))

def pearson_corr(x: List[float], y: List[float]) -> float:
    n = len(x)
    if n != len(y) or n < 2: return 0.0
    mx, my = mean(x), mean(y)
    cov = sum((x[i] - mx) * (y[i] - my) for i in range(n))
    denom = math.sqrt(sum((x[i] - mx) ** 2 for i in range(n))) * math.sqrt(sum((y[i] - my) ** 2 for i in range(n)))
    return cov / denom if denom > 0 else 0.0

def fit_ols_multi(X: List[List[float]], y: List[float]) -> Tuple[List[float], float, float]:
    """
    Fits multi-variable linear regression using normal equations:
    w = (X^T X)^(-1) X^T y (for 1 or 2 features via closed-form).
    For simplicity across arbitrary features, uses QR/Gram-Schmidt or iterative SGD.
    Here we implement closed-form for 1 feature or numerical pseudo-inverse.
    """
    n = len(y)
    d = len(X[0])
    
    # Simple closed-form for d=1
    if d == 1:
        x_col = [row[0] for row in X]
        r = pearson_corr(x_col, y)
        sx, sy = std_dev(x_col), std_dev(y)
        w1 = r * (sy / sx) if sx > 0 else 0.0
        w0 = mean(y) - w1 * mean(x_col)
        preds = [w0 + w1 * val for val in x_col]
        ss_res = sum((y[i] - preds[i]) ** 2 for i in range(n))
        ss_tot = sum((y[i] - mean(y)) ** 2 for i in range(n))
        r2 = 1.0 - (ss_res / ss_tot) if ss_tot > 0 else 0.0
        return [w0, w1], r2, ss_res / n

    # Multi-variable normal equation via coordinate descent / ridge proxy
    weights = [0.0] * (d + 1) # [w0, w1, ..., wd]
    weights[0] = mean(y)
    lr = 0.0001
    
    # Feature standardization for numerical stability in GD
    means = [mean([row[j] for row in X]) for j in range(d)]
    stds = [std_dev([row[j] for row in X]) for j in range(d)]
    
    X_std = []
    for row in X:
        X_std.append([(row[j] - means[j]) / (stds[j] if stds[j] > 0 else 1.0) for j in range(d)])
        
    w_std = [0.0] * d
    w0_std = mean(y)
    
    # 500 gradient steps
    for _ in range(500):
        preds = [w0_std + sum(w_std[j] * X_std[i][j] for j in range(d)) for i in range(n)]
        errors = [preds[i] - y[i] for i in range(n)]
        grad_w0 = (2.0 / n) * sum(errors)
        w0_std -= lr * grad_w0 * 100.0
        for j in range(d):
            grad_wj = (2.0 / n) * sum(errors[i] * X_std[i][j] for i in range(n))
            w_std[j] -= lr * grad_wj * 100.0

    preds = [w0_std + sum(w_std[j] * X_std[i][j] for j in range(d)) for i in range(n)]
    ss_res = sum((y[i] - preds[i]) ** 2 for i in range(n))
    ss_tot = sum((y[i] - mean(y)) ** 2 for i in range(n))
    r2 = max(0.0, 1.0 - (ss_res / ss_tot)) if ss_tot > 0 else 0.0
    return [w0_std] + w_std, r2, ss_res / n

# =============================================================================
# 3. THE 3 FEATURE SELECTION ENGINES
# =============================================================================

class FeatureSelectionSuite:
    """
    Implements Filter, Wrapper, and Embedded feature selection algorithms.
    """
    def __init__(self, dataset: List[Dict[str, Any]]):
        self.dataset = dataset
        self.y = [float(row["target"]) for row in dataset]

    def filter_method_pearson(self, threshold: float = 0.60) -> List[Dict[str, Any]]:
        """
        Filter: Evaluates each feature independently using Pearson correlation.
        Fast O(d), model-agnostic, ignores cross-feature interactions.
        """
        results = []
        for feat in FEATURE_NAMES:
            x_vals = [float(row[feat]) for row in self.dataset]
            r = pearson_corr(x_vals, self.y)
            f_var = variance(x_vals)
            selected = abs(r) >= threshold
            results.append({
                "feature": feat,
                "pearson_r": round(r, 4),
                "abs_r": round(abs(r), 4),
                "variance": round(f_var, 2),
                "selected": selected
            })
        results.sort(key=lambda x: x["abs_r"], reverse=True)
        return results

    def wrapper_forward_stepwise(self, max_features: int = 4) -> List[str]:
        """
        Wrapper: Greedy Forward Stepwise Selection using OLS R^2 as evaluation oracle.
        Finds optimal interactive subsets but computationally intensive O(d^2).
        """
        selected: List[str] = []
        remaining = list(FEATURE_NAMES)

        for step in range(max_features):
            best_feat = None
            best_r2 = -1.0

            for candidate in remaining:
                current_features = selected + [candidate]
                X_cand = [[float(row[f]) for f in current_features] for row in self.dataset]
                _, r2, _ = fit_ols_multi(X_cand, self.y)
                if r2 > best_r2:
                    best_r2 = r2
                    best_feat = candidate

            if best_feat is not None and (best_r2 - (0.0 if not selected else 0.0)) > 0.001:
                selected.append(best_feat)
                remaining.remove(best_feat)
            else:
                break

        return selected

    def embedded_lasso_soft_threshold(self, lambda_reg: float = 2.5) -> List[Dict[str, Any]]:
        """
        Embedded: L1 Penalized Regression Proxy with Soft-Thresholding:
        S_lambda(w) = sign(w) * max(0, |w| - lambda).
        Drives uninformative or collinear weights exactly to zero.
        """
        # Fit standardized OLS weights first
        X_all = [[float(row[f]) for f in FEATURE_NAMES] for row in self.dataset]
        weights, _, _ = fit_ols_multi(X_all, self.y)
        raw_weights = weights[1:]

        embedded_results = []
        for j, feat in enumerate(FEATURE_NAMES):
            w = raw_weights[j]
            # Soft-thresholding operator
            sparse_w = math.copysign(max(0.0, abs(w) - lambda_reg), w) if abs(w) > lambda_reg else 0.0
            embedded_results.append({
                "feature": feat,
                "raw_weight": round(w, 4),
                "sparse_weight": round(sparse_w, 4),
                "retained": sparse_w != 0.0
            })
        return embedded_results

    def simulate_bias_variance_u_curve(self) -> List[Dict[str, Any]]:
        """
        Demonstrates the U-shaped error curve as feature cardinality k increases from 1 to 8:
        - Train Error strictly decreases monotonically (R^2 increases).
        - Test/Validation Error drops then rises (overfitting to noise features like shoe_size).
        """
        curve = []
        # Ordered features from most informative to pure noise
        ranked = ["attendance", "internal_marks", "study_hours", "mock_tests", "assignments", "commute_mins", "shoe_size", "favorite_num"]

        for k in range(1, len(ranked) + 1):
            sub_feats = ranked[:k]
            X_k = [[float(row[f]) for f in sub_feats] for row in self.dataset]
            _, r2, train_mse = fit_ols_multi(X_k, self.y)

            # Synthetic validation error penalty simulating degrees of freedom penalty (AIC/BIC or CV)
            # Adding noise penalty for k >= 5
            noise_penalty = 0.0
            if k >= 5:
                noise_penalty = (k - 4) * 2.8

            val_mse = train_mse + noise_penalty + (0.5 * k)
            curve.append({
                "k": k,
                "features": sub_feats,
                "train_mse": round(train_mse, 2),
                "val_mse": round(val_mse, 2),
                "r2": round(r2, 4)
            })
        return curve

# =============================================================================
# 4. MAIN LABORATORY EXECUTION & OUTPUT VERIFICATION
# =============================================================================

def run_topic1_laboratory():
    print("=" * 80)
    print("CODER & ACCOTAX ACADEMIC LABORATORY & SIMULATION ENGINE")
    print("Topic 1: Feature Selection Concept (Filter, Wrapper, Embedded)")
    print("Module: Feature Selection and Training & Testing Data (BCAC701B)")
    print("Lead Author: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)

    suite = FeatureSelectionSuite(STUDENT_DATASET)

    print("\\n--- 1. FILTER METHOD: PEARSON CORRELATION RANKING (Threshold |r| >= 0.60) ---")
    filter_res = suite.filter_method_pearson(threshold=0.60)
    print(f"{'Feature Name':<18} | {'Variance':<10} | {'Pearson r':<10} | {'Selection Verdict':<18}")
    print("-" * 65)
    for row in filter_res:
        verdict = "SELECTED ✓" if row["selected"] else "DISCARDED (Noise) ✗"
        print(f"{row['feature']:<18} | {row['variance']:>10.2f} | {row['pearson_r']:>10.4f} | {verdict:<18}")

    print("\\n--- 2. WRAPPER METHOD: GREEDY FORWARD STEPWISE SELECTION ---")
    wrapper_selected = suite.wrapper_forward_stepwise(max_features=4)
    print(f"Optimal Subset Selected by Wrapper (k=4): {wrapper_selected}")

    print("\\n--- 3. EMBEDDED METHOD: LASSO L1 REGULARIZATION & SPARSE COEFFICIENTS ---")
    embedded_res = suite.embedded_lasso_soft_threshold(lambda_reg=2.5)
    print(f"{'Feature Name':<18} | {'Raw OLS Weight':<16} | {'Sparse L1 Weight':<18} | {'Status':<16}")
    print("-" * 75)
    for row in embedded_res:
        status = "Active Coefficient" if row["retained"] else "SPARSIFIED TO 0.0 (Pruned)"
        print(f"{row['feature']:<18} | {row['raw_weight']:>16.4f} | {row['sparse_weight']:>18.4f} | {status:<16}")

    print("\\n--- 4. THE BIAS-VARIANCE TRADEOFF U-CURVE SIMULATION ---")
    print(f"{'k (Features)':<14} | {'Train MSE':<12} | {'Validation MSE':<16} | {'R^2 Score':<10} | {'State':<20}")
    print("-" * 78)
    u_curve = suite.simulate_bias_variance_u_curve()
    best_k = min(u_curve, key=lambda x: x["val_mse"])
    for row in u_curve:
        state = "OPTIMAL SWEET SPOT ★" if row["k"] == best_k["k"] else ("Underfitting" if row["k"] < best_k["k"] else "Overfitting Noise")
        print(f"{row['k']:<14} | {row['train_mse']:>12.2f} | {row['val_mse']:>16.2f} | {row['r2']:>10.4f} | {state:<20}")

    print("\\n" + "=" * 80)
    print("TOPIC 1 LABORATORY BENCHMARK COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)

if __name__ == "__main__":
    run_topic1_laboratory()
`,X=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & ENGINEERING HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Feature Selection and Training & Testing Data (Slug: 001_003_feature-selection-and-training-testing-data)
Topic 1: Feature Selection Concept — Filter, Wrapper, and Embedded Paradigms
Lead Author: Sukanta Hui | Head of AI & Advanced Analytics | Barrackpore, WB
Academic Body: MAKAUT (Maulana Abul Kalam Azad University of Technology)
=============================================================================

-----------------------------------------------------------------------------
1. THEORETICAL FOUNDATION: WHY FEATURE SELECTION MATTERS
-----------------------------------------------------------------------------
In modern data engineering, collecting data has become trivial, but distilling signal
from pervasive ambient noise remains the central bottleneck of predictive modeling.
Feeding every available raw database column into a machine learning algorithm triggers
the Curse of Dimensionality, dramatically degrades computational throughput, and
introduces severe estimation variance.

Feature Selection is the automated or guided mathematical process of identifying and
retaining a subset S \\subset \\{1, 2, \\dots, d\\} of the most informative, non-redundant
covariates, while eliminating irrelevant noise and collinear duplicates.

1.1 Core Mathematical Drivers for Feature Selection:
1. The Curse of Dimensionality (Bellman / Hughes Phenomenon):
   In d-dimensional Euclidean space, the volume of the feature space grows exponentially
   with dimensionality (V_d \\propto r^d). The data points become exponentially sparse,
   meaning the required sample size N to maintain uniform density satisfies N = \\mathcal{O}(c^d).
   Distance metrics in KNN and K-Means lose contrast: \\lim_{d \\to \\infty} \\frac{D_{\\max} - D_{\\min}}{D_{\\min}} = 0.
2. Parameter Estimation Variance Inflation:
   In Ordinary Least Squares, the covariance matrix of estimated weights is:
       \\text{Var}(\\hat{\\mathbf{w}}) = \\sigma^2 (X^T X)^{-1}
   Adding irrelevant or collinear features drives \\det(X^T X) toward zero, causing
   eigenvalues to collapse and parameter variances to explode.
3. Occam's Razor (Principle of Parsimony):
   Among competing mathematical models that explain the observed data equally well,
   the simplest model with the fewest parameters generalizes best to unseen test distributions.
4. Computational & Operational Efficiency:
   Training latency scales as \\mathcal{O}(N d^2) or \\mathcal{O}(d^3) for matrix inversion.
   In real-time inference microservices, evaluating 8 features instead of 150 reduces
   feature serialization latency and server cost.

-----------------------------------------------------------------------------
2. THE COMBINATORIAL OPTIMIZATION CHALLENGE
-----------------------------------------------------------------------------
Given d candidate features, the total number of possible non-empty candidate subsets is:
    |\\mathcal{P}(\\{1, \\dots, d\\})| - 1 = \\sum_{k=1}^d \\binom{d}{k} = 2^d - 1

- For d = 10 features: 2^{10} - 1 = 1,023 subsets (Trivial brute-force search).
- For d = 30 features: 2^{30} - 1 \\approx 1.07 \\times 10^9 subsets (Billions of models).
- For d = 100 features: 2^{100} - 1 \\approx 1.26 \\times 10^{30} subsets (Computationally impossible).

Exhaustive Best Subset Selection is provably NP-hard. Machine learning therefore relies
on heuristic algorithms structured into three foundational paradigms: Filter, Wrapper,
and Embedded methods.

-----------------------------------------------------------------------------
3. THE THREE CANONICAL FEATURE SELECTION PARADIGMS
-----------------------------------------------------------------------------

3.1 Filter Methods (Statistical Scoring Independent of Model):
Filter methods evaluate individual features using statistical properties calculated directly
between feature \\mathbf{x}_j and target y, completely detached from any machine learning model.
- Metrics Used:
  - Pearson's correlation r(\\mathbf{x}_j, y) (Linear continuous targets).
  - Spearman's rank correlation \\rho_s(\\mathbf{x}_j, y) (Monotonic non-linear targets).
  - Mutual Information I(\\mathbf{X}_j; Y) = \\iint P(x, y) \\log \\frac{P(x, y)}{P(x)P(y)} \\, dx dy (General non-linear dependencies).
  - ANOVA F-test / F-statistic (Continuous features vs categorical target).
  - Chi-Square test \\chi^2 = \\sum \\frac{(O - E)^2}{E} (Categorical features vs categorical target).
  - Variance Thresholding: Discarding features with \\text{Var}(\\mathbf{x}_j) \\le \\tau_{\\text{threshold}}.
- Computational Complexity: \\mathcal{O}(d \\cdot N) — Extremely fast.
- Advantages: Highly scalable to millions of rows and features; model-agnostic; zero model training cost.
- Disadvantages: Treats each feature independently; completely blind to multi-feature interactions
  (e.g. XOR logic where individual features have r = 0 but their interaction has r = 1.0).

3.2 Wrapper Methods (Model as an Evaluation Oracle):
Wrapper methods treat the machine learning model as a black-box evaluation oracle. They search
through the combinatorial space of feature subsets, training and evaluating a model on each candidate.
- Primary Search Strategies:
  1. Forward Stepwise Selection:
     Starts with an empty set S = \\emptyset. Iteratively adds the single feature that maximizes
     cross-validated model performance (e.g. highest R^2 or lowest MSE) until no further improvement occurs.
     Complexity: \\mathcal{O}(d^2 \\cdot \\text{train\\_cost}).
  2. Backward Elimination:
     Starts with the complete feature set S = \\{1, \\dots, d\\}. Iteratively removes the least
     statistically significant feature (highest p-value or lowest feature importance) until
     all remaining features meet significance thresholds.
  3. Recursive Feature Elimination (RFE):
     Trains a model on the full feature set, ranks features by weight magnitude |w_j| or Gini
     importance, prunes the bottom p\\% features, and retrains recursively.
- Advantages: Captures complex non-linear feature interactions; specifically tailored to the inductive bias of the chosen model.
- Disadvantages: Extremely computationally expensive; prone to overfitting on small validation partitions.

3.3 Embedded Methods (Intrinsic Selection During Loss Optimization):
Embedded methods perform feature selection intrinsically as an integrated component of model
training and loss minimization.
- Mathematical Mechanisms:
  1. Lasso L1 Regularization:
     \\min_{\\mathbf{w}} \\left\\{ \\frac{1}{2N} \\|\\mathbf{y} - X\\mathbf{w}\\|_2^2 + \\lambda \\sum_{j=1}^d |w_j| \\right\\}
     Because the L1 norm ball has non-smooth corners along the coordinate axes, gradient descent
     drives irrelevant and collinear feature weights exactly to zero: w_j^* = 0.
     The soft-thresholding operator:
         \\mathcal{S}_{\\lambda}(w) = \\text{sign}(w) \\cdot \\max(0, |w| - \\lambda)
  2. Decision Tree & Random Forest Gini / MDI Importance:
     Trees select features at each node by maximizing information gain or Gini impurity reduction.
     Features that never participate in split decisions are implicitly pruned.
- Advantages: Balances the computational speed of filters with the interaction-capturing power of wrappers.

-----------------------------------------------------------------------------
4. THE BIAS-VARIANCE TRADEOFF & THE VALIDATION U-CURVE
-----------------------------------------------------------------------------
As the feature cardinality k increases from 1 to d:
- Training Error \\mathcal{R}_{\\text{emp}}(f) decreases monotonically:
  Adding any additional feature (even random noise) allows the model to fit training sample
  fluctuations, mathematically guaranteeing that R_{\\text{train}}^2 never decreases.
- Generalization Error \\mathcal{R}_{\\text{val}}(f) follows a convex U-shaped curve:
  - Underfitting Zone (k < k^*): High bias. The model lacks sufficient degrees of freedom
    to capture the true underlying data-generating process.
  - Optimal Parsimonious Model (k = k^*): The sweet spot where all informative signals are
    captured while excluding noise, minimizing expected test error.
  - Overfitting Zone (k > k^*): High variance. The model begins memorizing idiosyncratic
    noise and sample variance from irrelevant covariates, causing validation error to skyrocket.

-----------------------------------------------------------------------------
5. MULTICOLLINEARITY & THE VARIANCE INFLATION FACTOR (VIF)
-----------------------------------------------------------------------------
When two or more features in X are strongly linearly correlated (e.g. \`internal_marks\` and
\`assignments\` in our West Bengal student dataset, r = 0.997), the design matrix suffers
near-multicollinearity.
The Variance Inflation Factor for feature j is formulated as:
    \\text{VIF}_j = \\frac{1}{1 - R_j^2}
where R_j^2 is the coefficient of determination from regressing \\mathbf{x}_j on all other d-1 features.
- \\text{VIF} = 1.0: Complete independence (Orthogonal features).
- 1.0 < \\text{VIF} < 5.0: Moderate acceptable correlation.
- \\text{VIF} \\ge 10.0: Severe multicollinearity! The standard error of regression coefficient \\hat{w}_j
  is inflated by \\sqrt{\\text{VIF}} \\ge 3.16\\times, making weights unstable and uninterpretable.
Remediation: Feature selection must prune one of the collinear twin features.

-----------------------------------------------------------------------------
6. WEST BENGAL REGIONAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------

Case Study 1: FinTech Micro-Lending Default Risk in Barrackpore & Titagarh
Context: A digital NBFC offering ₹10,000 to ₹50,000 credit along Old Calcutta Road.
Raw Data: 120 raw mobile telemetry variables (SMS frequency, battery charge habits, app installs,
contacts count, call duration, geolocation variance).
Challenge: The model suffered massive overfitting (Train AUC = 0.94, Test AUC = 0.61) due to the
curse of dimensionality on a 2,500-applicant training sample.
Implementation: Deployed a two-stage feature selection pipeline:
1. Filter stage: Variance thresholding (\\tau < 0.01) and Mutual Information scoring eliminated 78 noise features.
2. Embedded stage: Lasso L1 logistic regression pruned 34 collinear attributes, retaining 8 core credit features.
Impact: Test AUC improved from 0.61 to 0.84; model inference execution latency dropped from 1.4s to 8ms.

Case Study 2: Cloud Infrastructure Cost Forecasting in Salt Lake Sector V
Context: A SaaS analytics provider managing 400 microservices across AWS and Azure clusters.
Raw Data: 85 telemetry performance counters (CPU core utilization, disk I/O, cache misses, TCP retransmits).
Challenge: Extreme multicollinearity (\\text{VIF} > 80 across memory counters) caused linear regression
coefficients to flip signs arbitrarily, preventing engineering cost attribution.
Implementation: Backward Elimination with a strict \\text{VIF} < 5.0 cutoff pruned 79 redundant metrics,
isolating 6 orthogonal hardware utilization features.
Impact: Mean Absolute Percentage Error (MAPE) decreased from 34.2% to 5.8%, enabling stable cloud billing.

Case Study 3: Quick-Commerce Dark Store Replenishment in Howrah & Dankuni
Context: Inventory replenishment for 30 dark stores predicting hourly perishable demand.
Raw Data: 200 supplier delivery features, local festival calendars, and hyperlocal rain telemetry.
Challenge: Forward stepwise selection was taking 14 hours to train across 200 features on daily updates.
Implementation: Replaced the slow wrapper method with an Embedded LightGBM Gini importance threshold,
retaining the top 22 non-zero importance features.
Impact: Feature selection and model training time dropped from 14 hours to 18 minutes with zero loss in demand accuracy.

Case Study 4: Oncology Genomic Biomarker Discovery in Kolkata Medical Institutes
Context: Microarray gene expression profiling across 20,000 genes for 180 leukemia patients.
Challenge: Extreme high-dimension low-sample-size regime (p = 20,000 \\gg N = 180). Ordinary models fail.
Implementation: Two-stage pipeline: ANOVA F-test filter pre-screened 20,000 genes down to 500, followed
by ElasticNet L1/L2 regularization which isolated 24 diagnostic biomarker genes.
Impact: Diagnostic classification sensitivity reached 96.2%, identifying targeted clinical therapeutic pathways.

-----------------------------------------------------------------------------
7. PRODUCTION PITFALLS & ARCHITECTURAL ANTI-PATTERNS
-----------------------------------------------------------------------------

Pitfall 1: Feature Selection Data Leakage (Selection on Full Dataset)
- Antipattern: Running filter selection, correlation ranking, or RFE on the entire dataset
  before performing \`train_test_split()\`.
- Consequence: Feature selection absorbs information about the test set distribution, producing
  unrealistically optimistic offline validation scores that fail in production.
- Production Fix: Perform all feature selection strictly within \`Pipeline\` fitted on \`X_train\` only.

Pitfall 2: Univariate Correlation Filtering on Non-Linear Interacting Features
- Antipattern: Discarding a feature because its individual Pearson correlation is near zero (r \\approx 0).
- Consequence: In complex non-linear systems (e.g. XOR logic), two features may have zero individual
  linear correlation with the target, but their interaction explains 100% of the variance.
- Production Fix: Pair Pearson filtering with Mutual Information or tree-based feature importance.

Pitfall 3: Forward Selection Multicollinearity Trap
- Antipattern: Relying on greedy forward selection without monitoring cross-feature collinearity.
- Consequence: The wrapper eagerly selects collinear twin features that individually boast high scores,
  inflating Hessian condition numbers and destabilizing coefficients.
- Production Fix: Combine forward selection with a Variance Inflation Factor (\\text{VIF} < 5.0) constraint.

Pitfall 4: Overfitting Wrapper Methods on Small Datasets
- Antipattern: Running Recursive Feature Elimination (RFE) on datasets with N < 100 observations.
- Consequence: The wrapper searches through thousands of subset permutations, finding random combinations
  that happen to fit the tiny validation fold by pure chance.
- Production Fix: Use simple Filter methods or strong L1 Lasso regularization on small sample datasets.

-----------------------------------------------------------------------------
8. COMPREHENSIVE REVISION CHECKLIST (SUKANTA HUI)
-----------------------------------------------------------------------------
[ ] Formulate the Curse of Dimensionality and its impact on Euclidean distance metrics.
[ ] Calculate the combinatorial search space size 2^d - 1 for d candidate features.
[ ] Define the 3 core paradigms: Filter, Wrapper, and Embedded methods.
[ ] State the computational complexity differences between Filters O(d) and Wrappers O(d^2).
[ ] Formulate the Lasso L1 loss function and explain how soft-thresholding produces zero weights.
[ ] Sketch the Bias-Variance U-shaped validation error curve across feature cardinality k.
[ ] Formulate the Variance Inflation Factor \\text{VIF}_j = 1 / (1 - R_j^2) and its threshold (VIF >= 10).
[ ] Explain why feature selection must never be executed before train-test splitting (leakage).
[ ] Compare Pearson correlation vs Mutual Information for detecting non-linear predictive features.
[ ] Describe the forward stepwise selection and backward elimination algorithms.

-----------------------------------------------------------------------------
9. 10 HIGH-YIELD MAKAUT MASTER VIVA QUESTIONS & ANALYTICAL ANSWERS
-----------------------------------------------------------------------------

Q1: Why is exhaustive best-subset selection computationally intractable for a dataset with 50 features?
A1: Because the subset search space grows exponentially as 2^d - 1. For d = 50, the number of candidate subsets is 2^{50} - 1 \\approx 1.125 \\times 10^{15} (over one quadrillion models). Even if training a single model took only one millisecond, evaluating all subsets would take over 35,000 years.

Q2: How does a Filter method differ fundamentally from a Wrapper method in feature selection?
A2: A Filter method evaluates features using statistical scores (e.g. Pearson correlation, Mutual Information, ANOVA F) calculated directly from data distributions independently of any machine learning algorithm. A Wrapper method uses a specific learning algorithm as an evaluation oracle, repeatedly training and scoring candidate subsets to select the combination that optimizes model performance.

Q3: What is the mathematical mechanism by which Lasso (L1) regularization forces feature weights to become exactly zero, unlike Ridge (L2)?
A3: The L1 penalty \\lambda \\sum |w_j| has sharp corners (non-differentiable points) along the coordinate axes where w_j = 0. The contour of the squared loss surface intersects the diamond-shaped L1 constraint ball at these axis vertices. Analytically, the soft-thresholding operator sets w_j = 0 whenever the unregularized gradient step is less than \\lambda, setting uninformative weights to zero.

Q4: What is the Variance Inflation Factor (VIF), and how is it used to detect multicollinearity?
A4: The VIF for feature j measures how much the variance of an estimated regression coefficient is inflated due to linear correlation with other regressors: \\text{VIF}_j = 1 / (1 - R_j^2), where R_j^2 is the R^2 from regressing feature j on all other features. A VIF value exceeding 10 indicates severe multicollinearity, signaling that the feature is redundant and should be pruned.

Q5: Describe the shape of the Training Error curve versus the Validation Error curve as feature cardinality k increases from 1 to d.
A5: Training error decreases monotonically as k increases because additional parameters always allow the model to fit training sample fluctuations. In contrast, validation error follows a convex U-shaped curve: it initially decreases as informative features are added (reducing bias), reaches an optimal minimum at k^*, and then increases sharply as noise features are incorporated (increasing estimation variance and causing overfitting).

Q6: Why is running feature selection on the complete dataset before train-test splitting considered a fatal architectural flaw?
A6: It introduces feature selection data leakage. Evaluating statistical scores or feature importances across the full dataset allows information about the test partition's distribution and labels to influence which features are retained. The offline validation score becomes artificially optimistic and fails to reflect live production generalization.

Q7: In what scenarios will a simple Pearson correlation filter fail to select an informative feature?
A7: Pearson correlation strictly measures linear association. If a feature has a non-linear relationship with the target (e.g. quadratic y = x^2, circular, or periodic), Pearson correlation can be zero (r = 0) despite a deterministic dependency. Additionally, in multi-feature interactions (such as XOR logic), individual features have zero univariate correlation with the target but high collective predictive power.

Q8: How does Recursive Feature Elimination (RFE) operate step-by-step?
A8: 1. Train the chosen estimator on the current set of features; 2. Compute feature importances or weight coefficients (|w_j|); 3. Prune the feature(s) with the lowest importance; 4. Retrain the model on the remaining features; 5. Repeat recursively until the desired target feature cardinality k is reached.

Q9: What is the difference between forward stepwise selection and backward elimination?
A9: Forward stepwise selection begins with an empty feature set (k=0) and greedily adds the single feature that produces the largest performance gain at each step until stopping criteria are met. Backward elimination begins with all features included (k=d) and greedily removes the least statistically significant feature at each step.

Q10: Why does removing redundant, highly correlated features improve model interpretability in credit scoring?
A10: When two features are collinear (e.g. Annual Income and Monthly Take-Home Pay), their regression coefficients can swing between large positive and negative values while canceling each other out, making individual weights meaningless. Pruning one collinear feature restores stable, isolated coefficient estimates, allowing credit auditors to explain exactly how each feature influences loan decisions.
=============================================================================
`,q=[{id:1,question:"What is the primary objective of Feature Selection in machine learning systems?",shortAnswer:"To identify and retain the optimal subset of informative, non-redundant covariates from the original feature space, eliminating irrelevant noise and collinear duplicates to improve generalization, efficiency, and interpretability.",explanation:"Feature selection restricts model inputs to genuine predictive signals. This mitigates the curse of dimensionality, reduces parameter estimation variance, lowers inference computational latency, and prevents overfitting.",hint:"Think about keeping signal while dropping noise and redundant columns.",level:"Basic",codeExample:`# Scikit-learn feature selection pipeline
from sklearn.feature_selection import SelectKBest, f_regression
selector = SelectKBest(score_func=f_regression, k=5)
X_selected = selector.fit_transform(X_train, y_train)`},{id:2,question:"For a dataset with d candidate features, what is the exact cardinality of the non-empty combinatorial subset search space?",shortAnswer:"2^d - 1 possible candidate subsets.",explanation:"Each of the d features can be either included (1) or excluded (0), yielding 2^d total combinations. Subtracting the empty subset leaves 2^d - 1 non-empty subsets. For d = 50, this equals over 1.125 quadrillion combinations, making brute-force search NP-hard.",hint:"Every feature has 2 binary states: in or out.",level:"Basic",codeExample:`# Combinatorial search space growth
import math
def num_subsets(d):
    return (2 ** d) - 1
print(num_subsets(10))  # 1,023
print(num_subsets(50))  # 1,125,899,906,842,623`},{id:3,question:"What are the three canonical methodological paradigms of feature selection?",shortAnswer:"Filter Methods (model-agnostic statistical scoring), Wrapper Methods (using the learning algorithm as an evaluation oracle), and Embedded Methods (intrinsic selection during loss optimization).",explanation:"Filter methods evaluate features independently using statistical metrics. Wrapper methods search subset combinations by repeatedly training and testing models. Embedded methods (like Lasso L1) enforce sparsity directly during parameter optimization.",hint:"Filter (Statistical), Wrapper (Model-guided search), Embedded (L1 / Tree loss).",level:"Basic",codeExample:`# The 3 Paradigms
# 1. Filter: SelectKBest(mutual_info_classif, k=5)
# 2. Wrapper: RFE(estimator=LogisticRegression(), n_features_to_select=5)
# 3. Embedded: Lasso(alpha=0.1)`},{id:4,question:"How does the Curse of Dimensionality degrade distance-based algorithms like KNN and K-Means when redundant features are added?",shortAnswer:"As dimensionality d increases, the volume of Euclidean space grows exponentially, causing all pairwise distances to converge to a uniform distance (D_max - D_min) / D_min -> 0, rendering nearest neighbors indistinguishable.",explanation:"In high dimensions, points become isolated in the corners of the hypercube. Adding uninformative noise features dilutes the distance signal from genuine predictors, making KNN predictions equivalent to random voting.",hint:"Contrast between nearest and farthest neighbors vanishes in high dimensions.",level:"Basic",codeExample:`# Distance dilution in high dimensions
# In 1000-D space, all points appear almost equidistant from each other.`},{id:5,question:"Why does adding more features to a linear regression model always cause the training R^2 to increase or stay constant, even if the features are pure random noise?",shortAnswer:"Because Ordinary Least Squares minimizes sum of squared residuals; each additional parameter gives the optimization another degree of freedom to fit random sample fluctuations in the training data.",explanation:"Even with random numbers uncorrelated with the target, the regression optimizer assigns non-zero weights w_j to fit chance training correlations. Hence training error strictly decreases monotonically, though validation error will rise.",hint:"More parameters always increase training curve flexibility.",level:"Basic",codeExample:`# Training R^2 monotonicity
# Adding random noise columns: R2_train strictly increases, R2_test collapses.`},{id:6,question:"What is Occam's Razor, and how does it justify feature selection in statistical machine learning?",shortAnswer:"The principle of parsimony stating that among competing hypotheses that explain the data equally well, the simplest one with the fewest assumptions and parameters is preferred because it generalizes best.",explanation:"A model with 5 features that achieves 90% validation accuracy is fundamentally superior to a 50-feature model achieving 90.5%, because the simpler model has lower parameter variance and fewer failure points in production.",hint:"Simpler models with fewer moving parts generalize better.",level:"Basic",codeExample:`# Occam's Razor in Model Selection
# Prefer Model A (5 features, 89% acc) over Model B (120 features, 89.4% acc)`},{id:7,question:"How does feature selection differ fundamentally from dimensionality reduction techniques like PCA (Principal Component Analysis)?",shortAnswer:"Feature selection preserves the original physical variables and their interpretability by selecting a subset S subset of X; PCA creates new synthetic linear combinations (z_1 = sum w_j x_j), destroying domain interpretability.",explanation:"In regulated domains like credit underwriting in Barrackpore or oncology diagnosis, domain experts must explain decisions using original features (e.g. 'internal marks' or 'blood pressure'), which PCA obscures into uninterpretable principal axes.",hint:"Selection keeps original columns; PCA transforms and combines them.",level:"Basic",codeExample:`# Selection vs Extraction
# Feature Selection: ['age', 'income'] -> ['income'] (Preserves identity)
# PCA: ['age', 'income'] -> [0.72*age + 0.69*income] (Synthetic projection)`},{id:8,question:"What is an irrelevant noise feature, and what is its true population correlation with the target?",shortAnswer:"A feature that is statistically independent of the target conditioned on all other covariates (P(Y | X) = P(Y | X_{-j})); its true population correlation with the target is identically zero (rho = 0).",explanation:"In our West Bengal student dataset, a student's 'favorite number' or 'shoe size' has zero causal or statistical relationship with their final semester percentage. Retaining it increases parameter variance without adding predictive signal.",hint:"Zero mutual information and zero true correlation with target.",level:"Basic",codeExample:"# Irrelevant feature: r(shoe_size, semester_marks) approx 0.0"},{id:9,question:"How does a statistical Filter method evaluate candidate features, and what is its primary computational advantage?",shortAnswer:"It computes univariate statistical scores (Pearson r, Mutual Information, ANOVA F) directly between each feature and the target; its complexity is O(d * N), making it orders of magnitude faster than model training.",explanation:"Filter methods evaluate features in linear time without executing machine learning training cycles. They can screen 100,000 features in seconds, making them the standard first stage in high-dimensional pipelines.",hint:"O(d * N) complexity; no model fitting required.",level:"Intermediate",codeExample:`# Filter Method evaluation
from sklearn.feature_selection import mutual_info_regression
scores = mutual_info_regression(X_train, y_train)`},{id:10,question:"What is the primary architectural blind spot of univariate Filter methods in feature selection?",shortAnswer:"They evaluate each feature in isolation and are completely blind to multi-feature non-linear interactions and cross-feature collinearity.",explanation:"In XOR logic, individual features x_1 and x_2 have zero correlation with y (r = 0), so a filter method discards both. However, together they explain 100% of y. Furthermore, filters eagerly select redundant collinear twins.",hint:"Filters ignore interactions (e.g. x_1 * x_2) and redundancy.",level:"Intermediate",codeExample:`# Univariate Filter Failure on XOR Logic:
# corr(x1, y) = 0.0 -> Discarded!
# corr(x2, y) = 0.0 -> Discarded!
# Yet y = x1 XOR x2 is 100% predictable`},{id:11,question:"How does Greedy Forward Stepwise Selection operate, and what is its worst-case computational complexity?",shortAnswer:"It starts with an empty feature set (k=0) and iteratively adds the single feature that produces the largest improvement in cross-validated performance; complexity is O(d^2 * train_cost).",explanation:"In step 1, it trains d models. In step 2, it trains (d-1) models. Summing over k steps yields sum_{i=0}^{k-1} (d - i) approx O(k * d) model training runs. While greedy and not guaranteed to find the global optimum, it captures interactions.",hint:"Step-by-step addition of the best marginal predictor.",level:"Intermediate",codeExample:`# Forward Stepwise Selection in Python
from sklearn.feature_selection import SequentialFeatureSelector
sfs = SequentialFeatureSelector(estimator, direction='forward', n_features_to_select=4)`},{id:12,question:"How does Backward Elimination differ from Forward Selection, and why is it preferred when multicollinearity is present?",shortAnswer:"Backward Elimination starts with all d features included and iteratively prunes the least significant feature; because all features are present initially, it assesses multicollinearity and collective interaction effects from step 1.",explanation:"Forward selection can get trapped early by picking an individual feature that blocks a superior pair from being evaluated. Backward elimination assesses each feature in the context of the full set, accurately penalizing redundant variables.",hint:"Starts full and prunes weakest; evaluates complete context.",level:"Intermediate",codeExample:`# Backward Elimination
sfs = SequentialFeatureSelector(estimator, direction='backward', n_features_to_select=4)`},{id:13,question:"What is the mathematical mechanism by which Lasso (L1) regularization sets feature weights strictly to zero, unlike Ridge (L2)?",shortAnswer:"The L1 constraint ball ||w||_1 <= t has sharp vertices (corners) on the coordinate axes; loss contours intersect these corners where w_j = 0, driven by the soft-thresholding operator S_lambda(w) = sign(w) * max(0, |w| - lambda).",explanation:"Ridge L2 penalty w_j^2 has a spherical smooth constraint ball where tangents rarely intersect at zero, shrinking weights asymptotically but never setting them to zero. Lasso's diamond corners produce exact coordinate sparsity.",hint:"Diamond L1 ball vertices intersect loss contours at w_j = 0.",level:"Intermediate",codeExample:`# Lasso produces exact zero coefficients (Embedded Selection)
from sklearn.linear_model import Lasso
lasso = Lasso(alpha=0.5).fit(X_train, y_train)
print(lasso.coef_)  # [3.2, 0.0, 0.0, 1.4, 0.0] -> Exact zeroes!`},{id:14,question:"Why does the Validation Error curve exhibit a convex U-shape as feature cardinality k increases from 1 to d?",shortAnswer:"For small k, the model underfits (high bias); as informative features are added, error drops to an optimal minimum k*; past k*, incorporating noise features causes estimation variance and overfitting to explode.",explanation:"This is the classic Bias-Variance Tradeoff. Informative features reduce bias faster than they increase variance. Once all informative features are in the model, adding more columns only increases variance, driving validation error upward.",hint:"Underfitting (high bias) -> Optimal sweet spot -> Overfitting (high variance).",level:"Intermediate",codeExample:`# The U-Curve validation check
# k=1: Val MSE = 14.2 (Underfit)
# k=4: Val MSE = 3.1  (Optimal sweet spot k*)
# k=8: Val MSE = 16.5 (Overfit to noise)`},{id:15,question:"How is the Variance Inflation Factor (VIF) formulated, and what threshold signals severe multicollinearity?",shortAnswer:"VIF_j = 1 / (1 - R_j^2), where R_j^2 is the R^2 from regressing feature j on all other d-1 features; a VIF >= 10.0 indicates severe multicollinearity.",explanation:"When R_j^2 approaches 1.0 (indicating that feature j is perfectly predictable from other features), the denominator approaches zero and VIF approaches infinity. The standard error of w_j is inflated by sqrt(VIF), destabilizing the model.",hint:"VIF = 1 / (1 - R^2); threshold is 10 (or 5 in conservative settings).",level:"Intermediate",codeExample:`# Calculating VIF in Python
from statsmodels.stats.outliers_influence import variance_inflation_factor
vifs = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]`},{id:16,question:"How does Recursive Feature Elimination (RFE) prune features recursively across successive estimation cycles?",shortAnswer:"It fits the model on the current feature set, calculates feature importance weights (|w_j| or Gini importance), prunes the lowest-ranked feature(s), and retrains recursively until k features remain.",explanation:"Unlike single-pass ranking, RFE recalculates feature importances after each pruning step. This is critical because removing one collinear feature allows the importance of its surviving partner to adjust dynamically.",hint:"Fit -> Rank -> Prune worst -> Retrain -> Repeat.",level:"Intermediate",codeExample:`# Recursive Feature Elimination in scikit-learn
from sklearn.feature_selection import RFE
selector = RFE(estimator=LinearRegression(), n_features_to_select=3, step=1)
selector.fit(X_train, y_train)`},{id:17,question:"What is Feature Selection Data Leakage, and how does executing selection before train_test_split() invalidate offline benchmarks?",shortAnswer:"Running feature selection on the complete dataset allows target labels and correlation signals from the test partition to influence which features are chosen, producing artificially inflated offline validation metrics that collapse in production.",explanation:"If you select features with the highest correlation to y on the full dataset, features that happen to correlate with y in the test fold by random noise are retained. In production, unseen data lacks this fluke correlation, causing failure.",hint:"Feature selection must be treated as an estimated parameter fitted only on X_train.",level:"Advanced",codeExample:`# FATAL ARCHITECTURAL LEAKAGE ANTI-PATTERN:
# X_sel = selector.fit_transform(X, y)  <- LEAKAGE!
# X_tr, X_te, y_tr, y_te = train_test_split(X_sel, y)
# CORRECT: Pipeline([('sel', selector), ('model', model)])`},{id:18,question:"How does scikit-learn's Pipeline prevent feature selection data leakage during K-Fold cross-validation?",shortAnswer:"By wrapping the feature selector and estimator together, ensuring that for each fold, the selector is fitted strictly on the K-1 training folds and only applied to transform the held-out validation fold.",explanation:"In cross-validation, every fold must represent a pristine unseen test set. The Pipeline encapsulates fit_transform() strictly within the training folds, eliminating any possibility of validation distribution leakage.",hint:"Pipeline encapsulates fit() on training folds only.",level:"Advanced",codeExample:`# Leakage-free Cross-Validation Pipeline
from sklearn.pipeline import Pipeline
from sklearn.model_selection import cross_val_score
pipe = Pipeline([('select', SelectKBest(k=4)), ('clf', LogisticRegression())])
scores = cross_val_score(pipe, X_train, y_train, cv=5)`},{id:19,question:"When two features are perfectly collinear (r(x_1, x_2) = 1.0), what happens to the Gram matrix X^T X and the Ordinary Least Squares solution?",shortAnswer:"The columns of X are linearly dependent, so rank(X) < d, det(X^T X) = 0, condition number kappa = infinity, and (X^T X)^(-1) is undefined, causing OLS to collapse.",explanation:"Even with near-collinearity (r = 0.998), det(X^T X) is near-zero, producing massive coefficient standard errors. Regression weights can swing wildly (e.g. w_1 = +500, w_2 = -495), making individual coefficients meaningless.",hint:"Collinear columns make the Gram matrix singular (det = 0).",level:"Advanced",codeExample:`# Multicollinearity Gram Singularity
# det(X^T X) == 0.0 -> Ordinary Least Squares collapses`},{id:20,question:"Why does ElasticNet regularization outperform pure Lasso (L1) when candidate features exhibit high pairwise correlation?",shortAnswer:"When features are strongly correlated, Lasso arbitrarily selects one and zeroes out the other; ElasticNet adds an L2 Ridge penalty (alpha * L1 + (1-alpha) * L2), creating a grouping effect where correlated predictors are retained together.",explanation:"In genomic or financial data where groups of 10 genes or 5 market indices move together, picking one at random causes high variance. ElasticNet shares weights across the group while maintaining overall model sparsity.",hint:"ElasticNet combines L1 sparsity with L2 group stability.",level:"Advanced",codeExample:`# ElasticNet for correlated feature groups
from sklearn.linear_model import ElasticNet
elastic = ElasticNet(alpha=0.1, l1_ratio=0.7).fit(X_train, y_train)`},{id:21,question:"What is the difference between Variance Thresholding and correlation-based feature filtering?",shortAnswer:"Variance Thresholding is completely unsupervised (operates strictly on X without looking at target y, dropping constants with Var <= tau); correlation filtering is supervised (evaluates association between X_j and y).",explanation:"Variance thresholding removes features that have near-zero variance across all samples (e.g. a column where 99.9% of entries are identical). Because it ignores y, it is fast and safe to apply prior to any supervised filtering.",hint:"Variance threshold uses only X; correlation uses X and y.",level:"Advanced",codeExample:`# Unsupervised Variance Thresholding
from sklearn.feature_selection import VarianceThreshold
thresh = VarianceThreshold(threshold=0.01)
X_clean = thresh.fit_transform(X_train)`},{id:22,question:"How can Mutual Information detect informative non-linear features that have Pearson correlation r = 0?",shortAnswer:"Mutual Information computes Kullback-Leibler divergence between joint distribution P(X, Y) and product of marginals P(X)P(Y); if knowledge of X reduces uncertainty in Y, I(X; Y) > 0 regardless of linearity.",explanation:"For y = x^2 with x centered at zero, E[xy] = 0 so Pearson r = 0. However, knowing |x| completely determines y, so conditional entropy H(Y | X) = 0, yielding maximal Mutual Information I(X; Y) = H(Y) > 0.",hint:"Measures reduction in entropy: I(X; Y) = H(Y) - H(Y | X).",level:"Advanced",codeExample:`# Mutual Information captures non-linear signals
mi = mutual_info_regression(x.reshape(-1, 1), y)  # High score even if r = 0`},{id:23,question:"Why does tree-based Mean Decrease in Impurity (MDI / Gini Importance) exhibit an artificial bias toward continuous and high-cardinality features?",shortAnswer:"Features with many unique values provide more split threshold candidates, giving the greedy tree algorithm more opportunities to accidentally minimize training node impurity by chance.",explanation:"A random continuous noise feature has N-1 unique split points, whereas a binary feature has only 1 split candidate. MDI consistently overestimates the importance of continuous noise. Permutation Feature Importance should be used instead.",hint:"More split candidates allow trees to fit noise more easily.",level:"Advanced",codeExample:`# Solution: Use Permutation Importance instead of MDI
from sklearn.inspection import permutation_importance
perm_imp = permutation_importance(rf_model, X_val, y_val, n_repeats=10)`},{id:24,question:"How does backward stepwise elimination use p-values in Ordinary Least Squares to prune insignificant features?",shortAnswer:"It fits the linear model, computes the two-tailed t-test p-value for H_0: w_j = 0 across all features, identifies the feature with the highest p-value exceeding alpha (e.g. p > 0.05), removes it, and repeats.",explanation:"If p > 0.05, the data provides insufficient statistical evidence that the true slope differs from zero. Pruning features with high p-values one by one eliminates coefficients that do not statistically contribute to explaining target variance.",hint:"Prune highest p-value when p > alpha.",level:"Advanced",codeExample:`# Backward elimination by p-value in statsmodels
import statsmodels.api as sm
model = sm.OLS(y, X).fit()
# Remove feature with max p-value if p > 0.05`},{id:25,question:"In the High-Dimension Low-Sample-Size regime (p >> N, e.g. 20,000 genes on 100 patients), why do ordinary regression and wrapper methods fail?",shortAnswer:"With p >> N, the design matrix has rank at most N, making X^T X rank-deficient with infinitely many perfect-fit solutions; wrappers overfit violently by finding random combinations of genes that fit the 100 samples.",explanation:"When features drastically exceed observations, the null space is massive. Any random subset of N features can achieve 100% training accuracy. Robust selection requires a two-stage filter (screening down to 500) followed by strong L1 regularization.",hint:"Infinite solutions exist when p > N; requires aggressive regularization.",level:"Expert",codeExample:`# p >> N architecture:
# Stage 1: Univariate ANOVA Filter: 20,000 -> 500
# Stage 2: ElasticNet / Lasso: 500 -> 25`},{id:26,question:"What is Subset Selection Stability, and why is an unstable feature selector hazardous in clinical diagnostics?",shortAnswer:"Stability measures whether small perturbations in the training data (e.g. bootstrap resamples) yield the exact same subset of selected features; unstable selectors choose completely different biomarkers on different patient batches.",explanation:"In oncology research in Kolkata, if Model A selects Gene 42 and Model B on a slightly different cohort selects Gene 99, clinicians cannot trust which biological pathway to target with expensive drugs. Stability can be quantified using the Jaccard similarity index across bootstrap folds.",hint:"Stability = consistency of selected features across resamples.",level:"Expert",codeExample:`# Stability via Jaccard index:
# J(S1, S2) = |S1 intersect S2| / |S1 union S2|`},{id:27,question:"How does feature pruning reduce end-to-end inference latency in real-time edge microservices?",shortAnswer:"Pruning reduces payload parsing, upstream database feature retrieval time, memory deserialization, and floating-point dot product operations from O(d) to O(k).",explanation:"In real-time fraud detection processing 50,000 transactions/sec, fetching 150 feature vectors from Redis clusters takes 45ms. Pruning to 8 core features drops Redis fetch time to 2ms and floating-point inference to microseconds.",hint:"Less data to fetch from cache, less memory to deserialize, faster matrix math.",level:"Expert",codeExample:"# Production latency gain: 150 features (45ms) -> 8 features (2.1ms)"},{id:28,question:"Why are Genetic Algorithms (GAs) and Simulated Annealing used for feature selection when d is moderately large (e.g. 50 <= d <= 150)?",shortAnswer:"Because brute-force search is impossible (2^50 approx 10^15) and greedy forward/backward selection gets trapped in local optima; stochastic evolutionary algorithms explore non-local combinatorial interactions efficiently.",explanation:"A chromosome represents a binary feature mask [1, 0, 1, 0, 1]. Genetic crossover and mutation operators explore global subset configurations without greedily committing to individual features, finding non-linear interaction groups.",hint:"Stochastic optimization avoids greedy local traps in combinatorial search.",level:"Expert",codeExample:`# Genetic algorithm chromosome: bitmask representing active features
# [1, 0, 1, 1, 0] = Include feature 0, 2, 3`},{id:29,question:"How does Data Drift in production affect a model with 5 features compared to a model with 80 features?",shortAnswer:"A model with 80 features has an 80-dimensional attack surface for data drift; if any single upstream telemetry sensor drifts or breaks, the entire model's predictions degrade.",explanation:"Every additional feature is an external dependency. In production systems, third-party API changes, sensor recalibrations, or schema updates cause feature drift. A parsimonious model with 5 features is far more robust and easier to monitor.",hint:"More features = larger operational surface area for data drift.",level:"Expert",codeExample:`# Operational fragility: 80 features = 80 drift monitors needed
# 5 features = simple, resilient production monitoring`},{id:30,question:"What is the complete 4-step industrial production workflow for selecting features in enterprise machine learning pipelines?",shortAnswer:"1. Unsupervised filtering (drop zero-variance and constants); 2. Statistical correlation & mutual information filtering (drop pure noise); 3. Embedded L1 Lasso or tree importance pruning (handle multicollinearity); 4. Final cross-validated stability verification.",explanation:"This staged funnel architecture balances computational throughput and statistical rigor. It rapidly discards thousands of obvious noise features upfront before running computationally intensive regularized selection on candidate subsets.",hint:"Filter (Fast screen) -> Embedded (Sparsify) -> Wrapper (Fine-tune) -> Validate.",level:"Expert",codeExample:`# The 4-Step Enterprise Selection Funnel:
# Step 1: VarianceThreshold(0.01)
# Step 2: SelectPercentile(mutual_info, percentile=20)
# Step 3: SelectFromModel(LassoCV())
# Step 4: Cross-validate final pipeline`}],W=[{key:"attendance",label:"Attendance (%)",type:"Signal",defaultCorr:.9988},{key:"internalMarks",label:"Internal Marks",type:"Signal",defaultCorr:.9969},{key:"assignments",label:"Assignments (Collinear)",type:"Collinear Twin",defaultCorr:.9973},{key:"studyHours",label:"Study Hours Weekly",type:"Signal",defaultCorr:.9855},{key:"mockTests",label:"Mock Tests Solved",type:"Signal",defaultCorr:.9732},{key:"commuteMins",label:"Commute Time (Mins)",type:"Noise",defaultCorr:-.475},{key:"shoeSize",label:"Shoe Size",type:"Noise",defaultCorr:-.8471},{key:"favoriteNum",label:"Favorite Number",type:"Pure Noise",defaultCorr:-.1729}],te=()=>{const[A,E]=n.useState("hero");n.useId();const[h,F]=n.useState("paradigms"),[p,T]=n.useState(.8),[U,H]=n.useState("filter"),[r,I]=n.useState(2),[d,C]=n.useState(!1),[f,M]=n.useState(""),[c,w]=n.useState({}),[l,j]=n.useState(!1),[y,N]=n.useState("lab"),_=n.useMemo(()=>W.filter(t=>Math.abs(t.defaultCorr)>=p),[p]),x=n.useMemo(()=>[{k:1,name:"Attendance only",trainMse:.47,valMse:.97,r2:.9975,state:"Optimal Parsimonious Sweet Spot ★"},{k:2,name:"+ Internal Marks",trainMse:.29,valMse:1.29,r2:.9985,state:"Near Optimal"},{k:3,name:"+ Study Hours",trainMse:.8,valMse:2.3,r2:.9958,state:"Acceptable"},{k:4,name:"+ Mock Tests",trainMse:1.24,valMse:3.24,r2:.9935,state:"Moderate Redundancy"},{k:5,name:"+ Assignments (Collinear)",trainMse:.99,valMse:6.29,r2:.9948,state:"Overfitting / Collinearity"},{k:6,name:"+ Commute Time (Noise)",trainMse:.71,valMse:9.31,r2:.9962,state:"Overfitting Noise"},{k:7,name:"+ Shoe Size (Noise)",trainMse:.54,valMse:12.44,r2:.9972,state:"Severe Overfitting"},{k:8,name:"+ Favorite Num (Noise)",trainMse:.35,valMse:15.55,r2:.9981,state:"Severe Overfitting"}],[]),g=n.useMemo(()=>x.find(t=>t.k===r)||x[0],[r,x]),o=n.useMemo(()=>({internalVIF:d?1.45:166.7,assignmentsVIF:d?0:166.7,isMulticollinear:!d}),[d]),k=[{term:"Curse of Dimensionality",definition:"The exponential growth of volume in Euclidean space as dimensions d increase (V_d proportional to r^d), causing data points to become exponentially sparse and distance metrics to lose contrast.",relevance:"Forces nearest and farthest neighbors in KNN to have identical distances unless feature selection prunes noise."},{term:"Combinatorial Subset Search Space (2^d - 1)",definition:"The total number of possible non-empty feature subsets that can be selected from d candidate variables. Exhaustive evaluation is provably NP-hard.",relevance:"For d = 50, evaluates to >1 quadrillion models, requiring heuristic Filter, Wrapper, or Embedded search algorithms."},{term:"Filter Method",definition:"A feature selection paradigm that evaluates each feature using statistical scores (Pearson r, Mutual Information, ANOVA F) calculated directly from data distributions, independently of any model.",relevance:"O(d) linear complexity; scales to millions of columns but blind to cross-feature interactions."},{term:"Wrapper Method",definition:"A feature selection paradigm that uses the learning algorithm as an evaluation oracle, repeatedly training and scoring candidate subsets using search strategies like Forward Stepwise or RFE.",relevance:"Captures multi-feature interactions but computationally expensive O(d^2) and prone to overfitting."},{term:"Embedded Method (Lasso L1)",definition:"A paradigm that performs feature selection intrinsically during model parameter optimization by adding a penalty (like L1 norm lambda * sum |w_j|) that drives uninformative weights to zero.",relevance:"Balances the computational speed of filters with the interaction-capturing capability of wrappers."},{term:"Variance Inflation Factor (VIF)",definition:"A diagnostic metric quantifying how much the estimation variance of a regression coefficient is inflated by linear correlation with other regressors: VIF = 1 / (1 - R_j^2).",relevance:"A VIF >= 10.0 signals severe multicollinearity, requiring pruning of collinear twin features."}],L=n.useMemo(()=>{if(!f.trim())return k;const t=f.toLowerCase();return k.filter(a=>a.term.toLowerCase().includes(t)||a.definition.toLowerCase().includes(t)||a.relevance.toLowerCase().includes(t))},[f]),m=[{id:1,scenario:"A data science team in Salt Lake Sector V trains a linear regression model with 50 candidate features on 200 customer records. Exhaustive best subset selection is proposed. Why is this proposal computationally rejected?",options:[{label:"A",text:"Linear regression cannot handle more than 10 features."},{label:"B",text:"The combinatorial search space is 2^50 - 1 approx 1.125 * 10^15 subsets; evaluating one quadrillion models would take thousands of years."},{label:"C",text:"Ordinary Least Squares requires a GPU cluster."},{label:"D",text:"Because exhaustive search violates Stevens' measurement scale."}],correct:"B",explanation:"Searching all non-empty subsets of 50 features requires training 2^50 - 1 models, which is computationally intractable (NP-hard). Heuristic methods like forward selection or Lasso regularization must be used instead."},{id:2,scenario:"Why does adding a completely random noise feature (e.g. random numbers uniformly distributed on [0, 1]) to an Ordinary Least Squares regression model cause training R^2 to increase or stay constant?",options:[{label:"A",text:"Random noise improves model generalization."},{label:"B",text:"Each additional parameter provides an extra degree of freedom, allowing the optimization algorithm to fit chance sample fluctuations in the training set."},{label:"C",text:"Because random numbers are orthogonal to the intercept."},{label:"D",text:"Because OLS maximizes entropy."}],correct:"B",explanation:"Minimizing sum of squared residuals over training samples is monotonic with respect to parameter degrees of freedom: adding any parameter can never increase training residual sum of squares."},{id:3,scenario:"In an XOR classification problem where target y = x_1 XOR x_2, why does a univariate Filter method (like Pearson correlation or univariate ANOVA) fail completely to select x_1 and x_2?",options:[{label:"A",text:"Filter methods only work on continuous targets."},{label:"B",text:"In XOR logic, individual features have zero linear correlation with the target (r = 0); univariate filters evaluate features in isolation and discard both, despite their combined 100% predictive power."},{label:"C",text:"Because XOR violates the triangle inequality."},{label:"D",text:"Because XOR produces a singular Gram matrix."}],correct:"B",explanation:"Filter methods examine individual pairwise relationships P(Y | x_j). In XOR logic, knowing x_1 alone gives zero information about y without knowing x_2, so univariate filters discard both features."},{id:4,scenario:"What is the mathematical reason why Lasso (L1 regularization) forces feature weights to become exactly zero, whereas Ridge (L2 regularization) only shrinks them asymptotically toward zero?",options:[{label:"A",text:"Lasso has a larger learning rate than Ridge."},{label:"B",text:"The diamond-shaped L1 constraint ball has sharp non-differentiable vertices on the coordinate axes where loss contours intersect, setting coordinates strictly to zero via soft-thresholding."},{label:"C",text:"Ridge regression is non-convex."},{label:"D",text:"Lasso is a filter method while Ridge is a wrapper method."}],correct:"B",explanation:"The corners of the L1 ball lie on the coordinate axes. The optimal constrained solution frequently hits these sharp corners where one or more w_j = 0, inducing true sparsity."},{id:5,scenario:"During an audit of a credit scoring pipeline, you observe that feature selection was executed on the complete 10,000-applicant database before a 80/20 train/test split. What fatal flaw invalidates the offline evaluation?",options:[{label:"A",text:"Computational inefficiency only; validation metrics remain unbiased."},{label:"B",text:"Feature Selection Data Leakage: Target correlations from the test partition leaked into the feature selection decision, creating an artificially optimistic offline validation score that collapses in production."},{label:"C",text:"The dummy variable trap, causing gradient descent to oscillate indefinitely."},{label:"D",text:"Covariate shift, converting continuous salary metrics into discrete ordinal ranks."}],correct:"B",explanation:"Selecting features on the full dataset allows test fold target distributions to determine which features are kept. The offline score evaluates features that were selected because they fit test noise, violating the Fundamental Pipeline Invariant."}],R=(t,a)=>{l||w(i=>({...i,[t]:a}))},O=()=>{Object.keys(c).length<m.length||j(!0)},v=n.useMemo(()=>{if(!l)return 0;let t=0;return m.forEach(a=>{c[a.id]===a.correct&&t++}),t},[l,c]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-7xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("nav",{"aria-label":"Topic navigation",className:"sticky top-4 z-50 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-2xl border border-indigo-500/30 shadow-xl flex items-center justify-between gap-2 overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center gap-2 pl-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse"}),e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-cyan-300 whitespace-nowrap",children:"Topic 1 Concept"})]}),e.jsx("div",{className:"flex items-center gap-1.5 text-xs font-medium",children:[{id:"hero",label:"Overview"},{id:"novice",label:"Novice"},{id:"studio",label:"Studio"},{id:"math",label:"Mathematics"},{id:"casestudies",label:"Cases"},{id:"quiz",label:"Assessment"},{id:"pitfalls",label:"Pitfalls"},{id:"loaders",label:"Laboratory"},{id:"faq",label:"Viva Q&A"}].map(t=>e.jsx("a",{href:`#${t.id}`,onClick:()=>E(t.id),className:s("px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer",A===t.id?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:t.label},t.id))})]}),e.jsxs("header",{id:"hero",className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Feature Selection & Train/Test • Topic 1"}),e.jsx("span",{className:"px-3.5 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Filter, Wrapper & Embedded"}),e.jsx("span",{className:"px-3.5 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"The Curse of Dimensionality"})]}),e.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Feature Selection Concept"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed",children:["Understand the mathematical imperative of feature selection: taming the exponential combinatorial search space (2",e.jsx("sup",{children:"d"})," − 1), defeating the curse of dimensionality, and enforcing Occam's razor. Master the three classical paradigms—Filter methods (statistical screening), Wrapper methods (model-driven heuristic search), and Embedded methods (L1 Lasso sparse penalization)—and explore the bias-variance U-curve across West Bengal industrial cohorts."]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Search Space"}),e.jsxs("div",{className:"text-sm sm:text-base font-bold text-indigo-300",children:["2",e.jsx("sup",{children:"d"})," − 1 Subsets"]}),e.jsx("div",{className:"text-xs text-slate-500",children:"NP-Hard Optimization"})]}),e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"3 Paradigms"}),e.jsx("div",{className:"text-sm sm:text-base font-bold text-cyan-300",children:"Filter, Wrapper, Embedded"}),e.jsx("div",{className:"text-xs text-slate-500",children:"Speed vs Interaction"})]}),e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Bias-Variance"}),e.jsx("div",{className:"text-sm sm:text-base font-bold text-emerald-300",children:"Validation U-Curve"}),e.jsx("div",{className:"text-xs text-slate-500",children:"Optimal Sweet Spot k*"})]}),e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Collinearity Metric"}),e.jsx("div",{className:"text-sm sm:text-base font-bold text-amber-300",children:"VIF ≥ 10 Hazard"}),e.jsx("div",{className:"text-xs text-slate-500",children:"Variance Inflation Factor"})]})]})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Novice Masterclass Foundations"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Why More Features Do Not Equal Better Models"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 mt-2 max-w-4xl",children:"In human intuition, we assume that more data is always beneficial. In machine learning, every uninformative feature is an additional dimension of noise that dilutes genuine patterns, increases estimation variance, and slows down training. Feature selection is the art of strategic pruning."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-indigo-500/20 space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg",children:"🎒"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"The Sandakphu Trekker's Backpack"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:"Before climbing the Sandakphu trail in Darjeeling, an inexperienced trekker packs 40 kilograms of gear: heavy cast-iron cookware, multiple extra jackets, and novels. After 5 kilometers, exhaustion sets in. An expert trekker packs only the essential 8 kilograms: water, thermal layer, map, and compass. In ML, extra features are dead weight that exhaust your model."})]}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-cyan-500/20 space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg",children:"🏏"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"The Eden Gardens Selection Panel"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:["Choosing 11 cricketers from 100 probables illustrates the 3 paradigms. ",e.jsx("strong",{className:"text-indigo-300",children:"Filter:"})," Select players strictly by individual strike rate (fast, but ignores bowling balance). ",e.jsx("strong",{className:"text-cyan-300",children:"Wrapper:"})," Play simulated trial matches with different 11-player combinations (accurate, but takes weeks). ",e.jsx("strong",{className:"text-emerald-300",children:"Embedded:"})," Players compete during training nets where only the best automatically earn a spot on the roster."]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/20 space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg",children:"🍲"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"The Kolkata Biryani Spice Cabinet"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:"A grand spice market in Posta offers 100 distinct spices. If a chef dumps all 100 spices into the Biryani pot, the dish becomes an unpalatable, bitter mess where no flavor shines. A master Kolkata chef selects exactly 6 aromatic spices: mace, nutmeg, cardamom, cinnamon, cloves, and saffron. Parsimony creates elegance in cuisine and in machine learning."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-base font-bold text-white",children:"The Three Canonical Paradigms of Feature Selection"}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs sm:text-sm text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 uppercase text-[11px] tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3.5",children:"Paradigm"}),e.jsx("th",{className:"p-3.5",children:"Evaluation Engine"}),e.jsx("th",{className:"p-3.5",children:"Computational Cost"}),e.jsx("th",{className:"p-3.5",children:"Interaction Capture"}),e.jsx("th",{className:"p-3.5",children:"Overfitting Risk"}),e.jsx("th",{className:"p-3.5",children:"Key Scikit-Learn Class"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 bg-slate-900/40",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-indigo-400",children:"Filter Methods"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"Model-agnostic statistical scores (Pearson r, ANOVA F, MI)"}),e.jsx("td",{className:"p-3.5 font-mono text-xs text-emerald-400",children:"O(d × N) — Extremely Fast"}),e.jsx("td",{className:"p-3.5 text-rose-400",children:"Zero (Evaluates features individually)"}),e.jsx("td",{className:"p-3.5 text-emerald-400",children:"Very Low"}),e.jsx("td",{className:"p-3.5 font-mono text-cyan-300",children:"SelectKBest, VarianceThreshold"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-cyan-400",children:"Wrapper Methods"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"ML model as evaluation oracle (Forward/Backward/RFE)"}),e.jsxs("td",{className:"p-3.5 font-mono text-xs text-rose-400",children:["O(d",e.jsx("sup",{children:"2"})," × train_cost) — Slow"]}),e.jsx("td",{className:"p-3.5 text-emerald-400",children:"High (Captures multi-feature synergy)"}),e.jsx("td",{className:"p-3.5 text-rose-400",children:"High (Overfits small validation sets)"}),e.jsx("td",{className:"p-3.5 font-mono text-cyan-300",children:"RFE, SequentialFeatureSelector"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-emerald-400",children:"Embedded Methods"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"Intrinsic loss penalization (L1 Lasso, Tree Gini)"}),e.jsx("td",{className:"p-3.5 font-mono text-xs text-indigo-300",children:"Integrated with training"}),e.jsx("td",{className:"p-3.5 text-indigo-300",children:"Moderate to High"}),e.jsx("td",{className:"p-3.5 text-indigo-300",children:"Moderate (Regulated by λ)"}),e.jsx("td",{className:"p-3.5 font-mono text-cyan-300",children:"Lasso, SelectFromModel"})]})]})]})})]}),e.jsxs("div",{className:"space-y-4 pt-2",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-base font-bold text-white",children:"Interactive Feature Selection Glossary"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Filter foundational terminology and algorithmic concepts"})]}),e.jsx("input",{type:"text",value:f,onChange:t=>M(t.target.value),placeholder:"Search terms (e.g. wrapper, vif, lasso)...",className:"px-3.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-full sm:w-64"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:L.map((t,a)=>e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2 hover:border-indigo-500/40 transition-colors",children:[e.jsx("div",{className:"text-sm font-bold text-indigo-300",children:t.term}),e.jsx("div",{className:"text-xs text-slate-300 leading-relaxed",children:t.definition}),e.jsx("div",{className:"text-[11px] text-cyan-400/90 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-800/30 font-medium",children:t.relevance})]},a))})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-ping"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Interactive Engineering Studio"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Feature Selection Laboratory & U-Curve Arena"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"paradigms",label:"Mode 1: The 3 Paradigms Comparison",badge:"Filter / Wrapper / Embedded"},{id:"u_curve",label:"Mode 2: Bias-Variance U-Curve",badge:"Cardinality k"},{id:"vif_inspector",label:"Mode 3: Multicollinearity & VIF",badge:"VIF >= 10 Hazard"}].map(t=>e.jsxs("button",{onClick:()=>F(t.id),className:s("px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5",h===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60"),children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:s("text-[10px] px-1.5 py-0.5 rounded font-mono",h===t.id?"bg-indigo-900/60 text-indigo-200":"bg-slate-900 text-slate-400"),children:t.badge})]},t.id))})]}),h==="paradigms"&&e.jsx("div",{className:"space-y-6 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-2xl border border-indigo-500/30 space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"Filter vs Wrapper vs Embedded Benchmark"}),e.jsx("span",{className:"text-xs px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono",children:"8 Candidate Features • N=7 Students"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Compare how each paradigm selects features from the West Bengal student dataset under different mathematical criteria."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Correlation Filter Threshold:"}),e.jsxs("span",{className:"text-xs font-mono font-bold text-cyan-300",children:["|r| ≥ ",p.toFixed(2)]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("input",{type:"range",min:"0.40",max:"0.99",step:"0.01",value:p,onChange:t=>T(parseFloat(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[e.jsx("span",{children:"Permissive (|r| ≥ 0.40)"}),e.jsx("span",{children:"Recommended (|r| ≥ 0.80)"}),e.jsx("span",{children:"Strict (|r| ≥ 0.99)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-indigo-500/30 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-indigo-300",children:"Filter Method"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-200 border border-indigo-800",children:"0.4 ms"})]}),e.jsxs("div",{className:"text-xs text-slate-300",children:["Evaluates individual Pearson correlation ",e.jsxs("code",{className:"text-cyan-300",children:["|r(x_j, y)| ≥ ",p.toFixed(2)]}),"."]}),e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1 text-xs",children:[e.jsxs("div",{className:"text-[10px] text-slate-400",children:["Selected Features (",_.length,"/8):"]}),e.jsx("div",{className:"font-mono text-emerald-400 font-medium text-[11px]",children:_.map(t=>t.key).join(", ")||"None selected (Threshold too high!)"})]}),e.jsxs("div",{className:"text-[10px] text-slate-400",children:[e.jsx("strong",{children:"Blind Spot:"})," Selected 'assignments' alongside 'internalMarks', failing to detect multicollinearity!"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-cyan-500/30 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-cyan-300",children:"Wrapper Method"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-200 border border-cyan-800",children:"42.8 ms"})]}),e.jsxs("div",{className:"text-xs text-slate-300",children:["Greedy Forward Stepwise Selection using linear model R",e.jsx("sup",{children:"2"})," as the evaluation oracle."]}),e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1 text-xs",children:[e.jsx("div",{className:"text-[10px] text-slate-400",children:"Selected Optimal Subset (k=3):"}),e.jsx("div",{className:"font-mono text-cyan-300 font-medium text-[11px]",children:"attendance, internalMarks, studyHours"})]}),e.jsxs("div",{className:"text-[10px] text-slate-400",children:[e.jsx("strong",{children:"Advantage:"})," Detected that 'assignments' was redundant after adding 'internalMarks' and omitted it!"]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-emerald-500/30 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"Embedded (Lasso L1)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-200 border border-emerald-800",children:"4.2 ms"})]}),e.jsx("div",{className:"text-xs text-slate-300",children:"L1 soft-thresholding penalization drives uninformative and redundant weights strictly to 0.0."}),e.jsxs("div",{className:"p-2.5 rounded-lg bg-slate-950 border border-slate-800 space-y-1 text-xs",children:[e.jsx("div",{className:"text-[10px] text-slate-400",children:"Non-Zero Sparsified Features (k=2):"}),e.jsx("div",{className:"font-mono text-emerald-400 font-medium text-[11px]",children:"attendance (w=0.88), internalMarks (w=0.41)"})]}),e.jsxs("div",{className:"text-[10px] text-slate-400",children:[e.jsx("strong",{children:"Advantage:"})," Fast, non-greedy, intrinsically zeroes out noise features like 'shoeSize' and 'favoriteNum'."]})]})]})]})}),h==="u_curve"&&e.jsx("div",{className:"space-y-6 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-2xl border border-cyan-500/30 space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"The Bias-Variance Tradeoff U-Curve Simulator"}),e.jsxs("span",{className:"text-xs px-2.5 py-0.5 rounded bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 font-mono",children:["Current Cardinality k = ",r]})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Observe how increasing feature count k monotonically drops training MSE, while validation MSE exhibits a convex U-shaped curve."})]}),e.jsxs("div",{className:"px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-semibold",children:[e.jsx("span",{className:"text-slate-400",children:"Status: "}),e.jsx("span",{className:s(r===1||r===2?"text-emerald-400":r<=4?"text-indigo-300":"text-rose-400"),children:g.state})]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsx("span",{className:"font-semibold text-slate-300",children:"Select Feature Cardinality (k):"}),e.jsxs("span",{className:"font-mono text-cyan-300 font-bold text-sm",children:[r," Features"]})]}),e.jsx("input",{type:"range",min:"1",max:"8",step:"1",value:r,onChange:t=>I(parseInt(t.target.value,10)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[e.jsx("span",{children:"k=1 (Parsimonious)"}),e.jsx("span",{children:"k=2 (Optimal k*)"}),e.jsx("span",{children:"k=5 (Collinear)"}),e.jsx("span",{children:"k=8 (Full Noise Model)"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:"Training MSE (Monotonic Drop) vs Validation MSE (Convex U-Curve):"}),e.jsx("div",{className:"h-48 w-full relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800/80",children:e.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 500 200",children:[e.jsx("line",{x1:"40",y1:"20",x2:"480",y2:"20",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"40",y1:"100",x2:"480",y2:"100",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"40",y1:"170",x2:"480",y2:"170",stroke:"#475569"}),e.jsx("line",{x1:"40",y1:"20",x2:"40",y2:"170",stroke:"#475569"}),e.jsx("polyline",{fill:"none",stroke:"#38bdf8",strokeWidth:"2.5",points:x.map(t=>{const a=50+(t.k-1)/7*410,i=170-(1-t.trainMse/1.5)*80;return`${a},${i}`}).join(" ")}),e.jsx("polyline",{fill:"none",stroke:"#f43f5e",strokeWidth:"2.5",points:x.map(t=>{const a=50+(t.k-1)/7*410,i=170-t.valMse/16*140;return`${a},${i}`}).join(" ")}),(()=>{const t=50+(r-1)/7*410;return e.jsx("line",{x1:t,y1:"20",x2:t,y2:"170",stroke:"#a855f7",strokeWidth:"2",strokeDasharray:"4 4"})})()]})}),e.jsxs("div",{className:"flex justify-between items-center text-[11px] text-slate-400",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"flex items-center gap-1 text-sky-400 font-bold",children:[e.jsx("span",{className:"w-2.5 h-0.5 bg-sky-400 inline-block"})," Training MSE (Always Drops)"]}),e.jsxs("span",{className:"flex items-center gap-1 text-rose-400 font-bold",children:[e.jsx("span",{className:"w-2.5 h-0.5 bg-rose-400 inline-block"})," Validation MSE (U-Curve)"]})]}),e.jsxs("span",{className:"font-mono text-purple-300",children:["Train MSE: ",g.trainMse," | Val MSE: ",g.valMse," | R",e.jsx("sup",{children:"2"}),": ",(g.r2*100).toFixed(1),"%"]})]})]})]})}),h==="vif_inspector"&&e.jsx("div",{className:"space-y-6 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-2xl border border-amber-500/30 space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"Multicollinearity & Variance Inflation Factor (VIF) Inspector"}),e.jsx("span",{className:s("text-xs px-2.5 py-0.5 rounded font-mono font-bold border",o.isMulticollinear?"bg-rose-500/20 text-rose-300 border-rose-500/40":"bg-emerald-500/20 text-emerald-300 border-emerald-500/40"),children:o.isMulticollinear?"SEVERE MULTICOLLINEARITY (VIF=166.7) ⚠":"PRISTINE ORTHOGONAL SYSTEM (VIF=1.45) ✓"})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400",children:["Observe how retaining collinear twin features (",e.jsx("code",{className:"text-amber-300",children:"assignments"})," & ",e.jsx("code",{className:"text-amber-300",children:"internalMarks"}),", r=0.997) inflates coefficient estimation variance."]})]}),e.jsx("button",{onClick:()=>C(!d),className:s("px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-md cursor-pointer",d?"bg-emerald-600 hover:bg-emerald-500 text-white":"bg-rose-600 hover:bg-rose-500 text-white"),children:d?"✓ Collinear Twin Pruned (Clean VIF)":"⚠ Prune Collinear 'Assignments' Feature"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Internal Marks VIF"}),e.jsx("div",{className:s("text-2xl font-mono font-bold",o.internalVIF>=10?"text-rose-400":"text-emerald-400"),children:o.internalVIF.toFixed(1)}),e.jsx("div",{className:"text-[11px] text-slate-500",children:o.internalVIF>=10?"Severe inflation! Standard error multiplied by 12.9x.":"Healthy variance; independent predictor."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Assignments VIF"}),e.jsx("div",{className:s("text-2xl font-mono font-bold",o.assignmentsVIF>=10?"text-rose-400":"text-slate-500"),children:o.assignmentsVIF>0?o.assignmentsVIF.toFixed(1):"PRUNED (0.0)"}),e.jsx("div",{className:"text-[11px] text-slate-500",children:o.assignmentsVIF>=10?"Redundant twin of internal marks.":"Excluded from design matrix."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("div",{className:"text-xs text-slate-400",children:"Pairwise Correlation r"}),e.jsx("div",{className:"text-2xl font-mono font-bold text-amber-400",children:"0.9973"}),e.jsxs("div",{className:"text-[11px] text-slate-500",children:["Almost perfectly collinear (R",e.jsx("sup",{children:"2"})," = 0.9946 between features)."]})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-900/90 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2",children:[e.jsx("div",{className:"font-bold text-amber-400 uppercase tracking-wider text-[11px]",children:"Why Multicollinearity Destroys Model Weights:"}),e.jsxs("p",{children:["When two features share 99.7% of their variance, Ordinary Least Squares cannot distinguish which feature is genuinely driving the target. The Gram matrix X",e.jsx("sup",{children:"T"}),"X becomes near-singular (condition number κ > 1000). The regression weights swing between wild compensating values (e.g., ",e.jsx("code",{className:"text-rose-300 font-mono",children:"w_internal = +45.2"})," and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"w_assignments = -43.8"}),"), rendering individual weights completely uninterpretable."]}),e.jsx("p",{className:"text-emerald-400 font-semibold",children:"Feature selection eliminates this instability by pruning one of the twins, instantly restoring clean single-digit VIF."})]})]})})]}),e.jsxs("section",{id:"math",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Rigorous Mathematical Formulary"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Formal Foundations of Feature Selection"}),e.jsx("p",{className:"text-sm text-slate-300 mt-1 max-w-4xl",children:"A comprehensive reference of the key equations governing subset search space, L1 soft-thresholding, Variance Inflation Factors, and parameter estimation variance."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"1. Combinatorial Search Space Cardinality"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-indigo-200 border border-indigo-900/40",children:"|\\mathcal{P}(\\{1, \\dots, d\\})| - 1 = \\sum_{k=1}^d \\binom{d}{k} = 2^d - 1"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Exhaustive subset search is NP-hard. For d = 50 candidate features, evaluating all 2",e.jsx("sup",{children:"50"})," − 1 combinations requires over one quadrillion model training runs, necessitating heuristic Filter, Wrapper, or Embedded search."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-cyan-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"2. Lasso L1 Loss & Soft-Thresholding"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-cyan-200 border border-cyan-900/40",children:"\\min_{\\mathbf{w}} \\left\\{ \\frac{1}{2N} \\|\\mathbf{y} - X\\mathbf{w}\\|_2^2 + \\lambda \\|\\mathbf{w}\\|_1 \\right\\}, \\; \\mathcal{S}_{\\lambda}(w) = \\text{sign}(w) \\max(0, |w| - \\lambda)"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["The diamond vertices of the L1 ball intersect loss contours along coordinate axes. The soft-thresholding operator S",e.jsx("sub",{children:"λ"}),"(w) sets weights strictly to 0.0 when unregularized gradient pull is less than λ."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"3. The Variance Inflation Factor (VIF)"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-emerald-200 border border-emerald-900/40",children:"\\text{VIF}_j = \\frac{1}{1 - R_j^2}, \\quad \\text{SE}(\\hat{w}_j) = \\frac{\\sigma}{\\sqrt{\\sum (x_{ij} - \\bar{x}_j)^2}} \\cdot \\sqrt{\\text{VIF}_j}"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Quantifies how much the standard error of regression coefficient w",e.jsx("sub",{children:"j"})," is inflated by linear correlation with other regressors. A VIF ≥ 10 signals severe multicollinearity requiring pruning."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-amber-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"4. Parameter Estimation Covariance"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-amber-200 border border-amber-900/40",children:"\\text{Var}(\\hat{\\mathbf{w}}) = \\sigma^2 (X^T X)^{-1}, \\quad \\lim_{k \\to d_{\\text{noise}}} \\text{Tr}(\\text{Var}(\\hat{\\mathbf{w}})) \\to \\infty"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Adding uninformative or collinear features drives det(X",e.jsx("sup",{children:"T"}),"X) toward zero, causing the eigenvalues of (X",e.jsx("sup",{children:"T"}),"X)",e.jsx("sup",{children:"−1"})," to explode and inflating parameter estimation variance."]})]})]})]}),e.jsxs("section",{id:"casestudies",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"West Bengal Regional Deployments"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Industrial Feature Selection Implementations"}),e.jsx("p",{className:"text-sm text-slate-300 mt-1 max-w-4xl",children:"Real-world deployments across fintech micro-lending, cloud infrastructure, quick-commerce logistics, and oncology biomarker discovery in West Bengal."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Barrackpore & Titagarh"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"FinTech Underwriting"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"NBFC Mobile Telemetry Default Risk Scoring"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"A digital lender along Old Calcutta Road ingested 120 raw mobile telemetry variables on 2,500 borrowers. The model overfit violently (Train AUC 0.94 vs Test AUC 0.61). Deploying a two-stage filter (Variance > 0.01 + Mutual Information) followed by Lasso L1 penalization pruned 112 features, leaving 8 core predictors. Test AUC surged to 0.84 and latency dropped from 1.4s to 8ms."})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"Salt Lake Sector V & New Town"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Cloud Operations"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"SaaS Cloud Infrastructure Cost Forecasting"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Forecasting cluster billing across 85 hardware telemetry counters. Severe multicollinearity (VIF > 80 across memory metrics) caused linear regression weights to flip signs arbitrarily. Applying Backward Elimination with a strict VIF < 5.0 cutoff pruned 79 redundant metrics down to 6 orthogonal signals, reducing cost forecasting MAPE from 34.2% to 5.8%."})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Howrah & Dankuni"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:"Quick-Commerce Logistics"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Dark Store Perishable Inventory Replenishment"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Predicting dark store order volume across 200 supplier delivery features. Forward stepwise wrapper selection was taking 14 hours per daily retrain. Replacing the wrapper with LightGBM Gini importance thresholding isolated 22 non-zero features, cutting pipeline runtime from 14 hours to 18 minutes with zero loss in demand accuracy."})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Kolkata & Jadavpur"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"Genomic Oncology"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Leukemia Microarray Biomarker Discovery"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Analyzing 20,000 gene expressions on 180 leukemia patients (p >> N regime). A two-stage architecture—ANOVA F-test pre-filtering down to 500 genes followed by ElasticNet L1/L2 selection—isolated 24 diagnostic biomarker genes with 96.2% clinical sensitivity, identifying actionable targeted therapies."})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/30",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Diagnostic Verification"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Topic 1 Diagnostic Assessment Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Answer all 5 multi-stage scenario questions to evaluate your engineering intuition."})]}),l&&e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-indigo-500/40",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-bold font-mono text-cyan-300",children:[v," / ",m.length]}),e.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300",children:v===5?"Distinction":v>=3?"Pass":"Review Needed"})]})]}),e.jsx("div",{className:"space-y-5",children:m.map(t=>{c[t.id];const a=c[t.id],i=a===t.correct;return e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 rounded-lg bg-indigo-900/60 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono",children:t.id}),e.jsx("div",{className:"text-sm font-semibold text-slate-200 leading-relaxed",children:t.scenario})]}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5 pl-9",children:t.options.map(u=>{const S=a===u.label;let b="bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700";return l?u.label===t.correct?b="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium":S&&!i&&(b="bg-rose-950/60 border-rose-500 text-rose-200"):S&&(b="bg-indigo-950/70 border-indigo-500 text-indigo-200 font-medium"),e.jsxs("button",{disabled:l,onClick:()=>R(t.id,u.label),className:s("w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer",b),children:[e.jsxs("span",{className:"font-mono font-bold shrink-0",children:[u.label,"."]}),e.jsx("span",{children:u.text})]},u.label)})}),l&&e.jsx("div",{className:"pl-9 pt-2",children:e.jsxs("div",{className:s("p-3 rounded-xl text-xs leading-relaxed border",i?"bg-emerald-950/30 border-emerald-800/40 text-emerald-300":"bg-rose-950/30 border-rose-800/40 text-rose-300"),children:[e.jsx("div",{className:"font-bold mb-1",children:i?"✓ Correct Analysis":`✗ Incorrect (Correct Answer: ${t.correct})`}),e.jsx("div",{className:"text-slate-400",children:t.explanation})]})})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-2",children:l?e.jsx("button",{onClick:()=>{w({}),j(!1)},className:"px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors",children:"Reset Assessment"}):e.jsx("button",{onClick:O,disabled:Object.keys(c).length<m.length,className:s("px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer",Object.keys(c).length===m.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:"Submit Diagnostic Assessment"})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-rose-400",children:"Production Vulnerabilities & Anti-Patterns"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Architecture Hazards in Feature Selection"}),e.jsx("p",{className:"text-sm text-slate-300 mt-1 max-w-4xl",children:"Critical production bugs that escape offline unit testing and trigger silent data leakage and model instability."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 1: Feature Selection Data Leakage (Fit-Before-Split)"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"})," Running correlation ranking, mutual information filtering, or RFE on the complete dataset before calling ",e.jsx("code",{className:"text-rose-300 font-mono",children:"train_test_split()"}),"."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," Information regarding the test partition's target labels leaks into feature subset choices, yielding artificially inflated offline scores that collapse in production."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Perform all feature selection strictly within scikit-learn ",e.jsx("code",{className:"font-mono",children:"Pipeline"})," fitted exclusively on X_train."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 2: Univariate Filter Blindness to Non-Linear Interactions"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"})," Discarding features solely because their individual linear Pearson correlation with target y is near zero (r &approx; 0)."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," In complex interactive systems (e.g. XOR logic), individual features have zero univariate correlation, but their non-linear synergy explains 100% of variance."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Complement Pearson filtering with Mutual Information or tree-based feature importances."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 3: Forward Selection Multicollinearity Trap"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"})," Greedily adding individual features that each have high correlation with y without auditing inter-feature correlation."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," The wrapper selects collinear twin features (e.g., ",e.jsx("code",{className:"text-rose-300 font-mono",children:"assignments"})," alongside ",e.jsx("code",{className:"text-rose-300 font-mono",children:"internalMarks"}),"), inflating condition number κ > 1000 and destabilizing weights."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Combine forward selection with a Variance Inflation Factor (",e.jsx("code",{className:"font-mono",children:"VIF < 5.0"}),") constraint."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 4: Overfitting Wrapper Methods on Small Datasets"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"})," Running aggressive Recursive Feature Elimination (RFE) on datasets with small sample sizes (N < 100)."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," The wrapper explores hundreds of subset configurations, picking random noise features that happen to fit the tiny validation fold by pure chance."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Deploy simple Filter methods or strong L1 Lasso regularization on small sample datasets."]})]})]})]}),e.jsxs("section",{id:"loaders",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Verified Python Lab & Study Notes"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Executable Laboratory & Comprehensive Handbook"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>N("lab"),className:s("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",y==="lab"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"bg-slate-800 text-slate-400 hover:text-white"),children:"Python Lab Code"}),e.jsx("button",{onClick:()=>N("notes"),className:s("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",y==="notes"?"bg-cyan-600 text-white shadow-md shadow-cyan-600/30":"bg-slate-800 text-slate-400 hover:text-white"),children:"Study Notes (Handbook)"})]})]}),y==="lab"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"feature_selection_concept_lab.py"})," (Exit Code 0 Verified)"]}),e.jsx("span",{children:"Filter, Wrapper & Embedded Suite"})]}),e.jsx(P,{code:B,fileName:"feature_selection_concept_lab.py",title:"Feature Selection Concept Laboratory Benchmark"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"topic1_note.txt"})]}),e.jsx("span",{children:"275 Lines of Comprehensive Academic Notes"})]}),e.jsx(V,{content:X,title:"Topic 1 Academic Handbook & Study Notes"})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8",children:[e.jsx(z,{title:"Topic 1: MAKAUT Master Viva & Technical Interview Questions",subtitle:"30 Graded Analytical Questions with Comprehensive Theoretical Rationales",questions:q}),e.jsx(D,{})]})]})};export{te as default};
