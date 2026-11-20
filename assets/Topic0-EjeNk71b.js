import{b as i,j as e,bl as r}from"./vendor-react-core-B-R9HE-Z.js";import{P as K}from"./PythonFileLoader-DZ61U3Y_.js";import{F as Q}from"./FAQTemplate-16IfroqC.js";import{P as J}from"./PlainTextPrint-C6NaUtnE.js";import{T as Z}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const $=`"""
=============================================================================
TOPIC 0: MEANING OF FEATURES AND TARGET — PURE PYTHON LABORATORY
Module: Feature Selection and Training & Testing Data (Slug: 001_003_feature-selection-and-training-testing-data)
Course: Introduction to Machine Learning (BCAC701B / MAKAUT Aligned)
Author: Sukanta Hui | Head of AI & Advanced Analytics | Barrackpore, WB
Academic Body: MAKAUT (Maulana Abul Kalam Azad University of Technology)
=============================================================================

This laboratory engine (pure Python standard library, zero external dependencies) demonstrates:
1. Formal mathematical abstraction of Feature Space X in R^(N x d) and Target Vector y in Y.
2. Duality between Regression Targets (continuous Y in R) and Classification Targets (discrete Y in {0, 1}).
3. Empirical Risk Minimization (ERM) for finding f*(x) = E[Y | X = x].
4. Quantitative Feature-Target Relevance:
   - Pearson Correlation Coefficient r(x_j, y)
   - Feature Variance sigma^2_j
   - Target Leakage Detection Metric: Identifying features that deterministically proxy y.
5. West Bengal Academic & Placement Cohort benchmark:
   - Mamata (Barrackpore), Mahima (Kolkata), Susmita (Ichapur), Debangshu (Salt Lake),
     Abhronila (Jadavpur), Rohan (Hooghly), Subhajit (Siliguri).
=============================================================================
"""

import math
from typing import List, Dict, Any, Tuple

# =============================================================================
# 1. WEST BENGAL STUDENT COHORT DATASET (SUPERVISED LEARNING REPRESENTATION)
# =============================================================================

STUDENT_COHORT = [
    {
        "id": "WB-STU-01",
        "name": "Mamata",
        "institution": "Barrackpore Academy",
        # Features X
        "attendance_pct": 94.0,
        "internal_marks": 88.0,
        "study_hours_weekly": 24.0,
        "mock_tests_solved": 18,
        "commute_time_mins": 25.0,     # Irrelevant / low signal feature
        "interview_cleared": 1,        # Target leakage feature for placement
        # Targets Y
        "semester_score_pct": 91.5,    # Regression target (Continuous)
        "placement_status": 1          # Classification target (Binary: 1=Placed, 0=Unplaced)
    },
    {
        "id": "WB-STU-02",
        "name": "Mahima",
        "institution": "Kolkata Tech Hub",
        "attendance_pct": 91.0,
        "internal_marks": 85.0,
        "study_hours_weekly": 22.0,
        "mock_tests_solved": 15,
        "commute_time_mins": 45.0,
        "interview_cleared": 1,
        "semester_score_pct": 87.0,
        "placement_status": 1
    },
    {
        "id": "WB-STU-03",
        "name": "Susmita",
        "institution": "Ichapur FinTech Lab",
        "attendance_pct": 86.0,
        "internal_marks": 78.0,
        "study_hours_weekly": 18.0,
        "mock_tests_solved": 12,
        "commute_time_mins": 15.0,
        "interview_cleared": 1,
        "semester_score_pct": 82.5,
        "placement_status": 1
    },
    {
        "id": "WB-STU-04",
        "name": "Debangshu",
        "institution": "Salt Lake Sector V",
        "attendance_pct": 68.0,
        "internal_marks": 60.0,
        "study_hours_weekly": 10.0,
        "mock_tests_solved": 5,
        "commute_time_mins": 60.0,
        "interview_cleared": 0,
        "semester_score_pct": 62.0,
        "placement_status": 0
    },
    {
        "id": "WB-STU-05",
        "name": "Abhronila",
        "institution": "Jadavpur University",
        "attendance_pct": 96.0,
        "internal_marks": 94.0,
        "study_hours_weekly": 28.0,
        "mock_tests_solved": 22,
        "commute_time_mins": 30.0,
        "interview_cleared": 1,
        "semester_score_pct": 95.0,
        "placement_status": 1
    },
    {
        "id": "WB-STU-06",
        "name": "Rohan",
        "institution": "Hooghly Engg College",
        "attendance_pct": 62.0,
        "internal_marks": 54.0,
        "study_hours_weekly": 8.0,
        "mock_tests_solved": 4,
        "commute_time_mins": 40.0,
        "interview_cleared": 0,
        "semester_score_pct": 56.0,
        "placement_status": 0
    },
    {
        "id": "WB-STU-07",
        "name": "Subhajit",
        "institution": "Siliguri Analytics Inst",
        "attendance_pct": 78.0,
        "internal_marks": 72.0,
        "study_hours_weekly": 15.0,
        "mock_tests_solved": 10,
        "commute_time_mins": 20.0,
        "interview_cleared": 1,
        "semester_score_pct": 74.0,
        "placement_status": 1
    }
]

# =============================================================================
# 2. STATISTICAL & ALGORITHMIC FUNCTIONS
# =============================================================================

def mean(values: List[float]) -> float:
    return sum(values) / len(values) if values else 0.0

def variance(values: List[float]) -> float:
    n = len(values)
    if n < 2:
        return 0.0
    m = mean(values)
    return sum((x - m) ** 2 for x in values) / (n - 1)

def std_dev(values: List[float]) -> float:
    return math.sqrt(variance(values))

def pearson_correlation(x: List[float], y: List[float]) -> float:
    """
    Computes Pearson's product-moment correlation coefficient r(x, y):
    r = sum((x_i - mean_x) * (y_i - mean_y)) / (sqrt(sum(x_i - mean_x)^2) * sqrt(sum(y_i - mean_y)^2))
    """
    n = len(x)
    if n != len(y) or n < 2:
        return 0.0
    mean_x, mean_y = mean(x), mean(y)
    cov = sum((x[i] - mean_x) * (y[i] - mean_y) for i in range(n))
    denom_x = math.sqrt(sum((x[i] - mean_x) ** 2 for i in range(n)))
    denom_y = math.sqrt(sum((y[i] - mean_y) ** 2 for i in range(n)))
    if denom_x * denom_y == 0:
        return 0.0
    return cov / (denom_x * denom_y)

def fit_univariate_ols(x: List[float], y: List[float]) -> Tuple[float, float, float]:
    """
    Fits simple Ordinary Least Squares y_hat = w0 + w1 * x
    Returns: (w0, w1, r_squared)
    """
    n = len(x)
    r = pearson_correlation(x, y)
    s_x, s_y = std_dev(x), std_dev(y)
    w1 = r * (s_y / s_x) if s_x > 0 else 0.0
    w0 = mean(y) - w1 * mean(x)
    r_squared = r ** 2
    return w0, w1, r_squared

# =============================================================================
# 3. FEATURE VS TARGET AUDIT ENGINE
# =============================================================================

class FeatureTargetAuditor:
    """
    Analyzes supervised learning design matrices to:
    1. Distinguish input features X from target labels y.
    2. Rank features by linear relevance to continuous and discrete targets.
    3. Detect severe target leakage (features that proxy the outcome directly).
    """
    def __init__(self, cohort: List[Dict[str, Any]]):
        self.cohort = cohort
        self.candidate_features = [
            "attendance_pct",
            "internal_marks",
            "study_hours_weekly",
            "mock_tests_solved",
            "commute_time_mins",
            "interview_cleared"
        ]
        self.targets = {
            "regression": "semester_score_pct",
            "classification": "placement_status"
        }

    def audit_features_against_target(self, target_key: str) -> List[Dict[str, Any]]:
        target_vals = [float(row[target_key]) for row in self.cohort]
        y_mean = mean(target_vals)
        y_std = std_dev(target_vals)

        audit_results = []
        for feat in self.candidate_features:
            feat_vals = [float(row[feat]) for row in self.cohort]
            corr = pearson_correlation(feat_vals, target_vals)
            f_var = variance(feat_vals)
            f_mean = mean(feat_vals)

            # Target Leakage Alert Logic:
            # If |correlation| > 0.98 or feature is known post-event outcome
            is_leakage = False
            relevance = "Informative"
            if feat == "interview_cleared" and target_key == "placement_status":
                is_leakage = True
                relevance = "CRITICAL TARGET LEAKAGE ⚠"
            elif abs(corr) >= 0.85:
                relevance = "Strong Predictor"
            elif abs(corr) >= 0.50:
                relevance = "Moderate Predictor"
            else:
                relevance = "Weak / Noise Feature"

            audit_results.append({
                "feature": feat,
                "mean": round(f_mean, 2),
                "variance": round(f_var, 2),
                "correlation": round(corr, 4),
                "abs_correlation": round(abs(corr), 4),
                "relevance": relevance,
                "is_leakage": is_leakage
            })

        # Sort descending by absolute correlation
        audit_results.sort(key=lambda r: r["abs_correlation"], reverse=True)
        return audit_results

# =============================================================================
# 4. MAIN LABORATORY EXECUTION & MATHEMATICAL VERIFICATION
# =============================================================================

def run_feature_target_laboratory():
    print("=" * 80)
    print("CODER & ACCOTAX ACADEMIC LABORATORY & SIMULATION ENGINE")
    print("Topic 0: Meaning of Features and Target")
    print("Module: Feature Selection and Training & Testing Data (BCAC701B)")
    print("Lead Author: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)

    auditor = FeatureTargetAuditor(STUDENT_COHORT)

    print("\\n--- STAGE 1: REGRESSION TARGET ANALYSIS (Semester Score %) ---")
    reg_results = auditor.audit_features_against_target("semester_score_pct")
    print(f"{'Feature Name':<22} | {'Mean':<8} | {'Variance':<10} | {'Pearson r':<10} | {'Relevance Verdict':<24}")
    print("-" * 84)
    for row in reg_results:
        print(f"{row['feature']:<22} | {row['mean']:>8.2f} | {row['variance']:>10.2f} | {row['correlation']:>10.4f} | {row['relevance']:<24}")

    print("\\n--- STAGE 2: CLASSIFICATION TARGET ANALYSIS (Placement Status: 0/1) ---")
    clf_results = auditor.audit_features_against_target("placement_status")
    print(f"{'Feature Name':<22} | {'Mean':<8} | {'Variance':<10} | {'Pearson r':<10} | {'Relevance Verdict':<24}")
    print("-" * 84)
    for row in clf_results:
        print(f"{row['feature']:<22} | {row['mean']:>8.2f} | {row['variance']:>10.2f} | {row['correlation']:>10.4f} | {row['relevance']:<24}")

    print("\\n--- STAGE 3: EMPIRICAL RISK MINIMIZATION (OLS Model on Internal Marks) ---")
    x_internal = [float(row["internal_marks"]) for row in STUDENT_COHORT]
    y_score = [float(row["semester_score_pct"]) for row in STUDENT_COHORT]
    w0, w1, r2 = fit_univariate_ols(x_internal, y_score)
    print(f"Fitted Model: y_hat = {w0:.2f} + {w1:.4f} * internal_marks")
    print(f"Coefficient of Determination (R^2): {r2:.4f} ({r2*100:.1f}% variance explained)")

    print("\\nIndividual Candidate Predictions vs Ground Truth:")
    for row in STUDENT_COHORT:
        actual = row["semester_score_pct"]
        pred = w0 + w1 * row["internal_marks"]
        residual = actual - pred
        print(f" -> {row['name']:<12} | Internal: {row['internal_marks']:>4.1f} | Actual y: {actual:>5.1f}% | Pred y_hat: {pred:>5.1f}% | Residual: {residual:>+5.2f}%")

    print("\\n--- STAGE 4: TARGET LEAKAGE AUDIT & ARCHITECTURAL VERIFICATION ---")
    leak_feature = [r for r in clf_results if r["is_leakage"]]
    if leak_feature:
        print(f"ALERT: Detected Target Leakage on '{leak_feature[0]['feature']}'!")
        print("Reason: 'interview_cleared' occurs contemporaneously with or after 'placement_status'.")
        print("Consequence: Training on this feature produces 100% artificial accuracy offline, but model collapses in production when predicting applicants before interviews take place.")

    print("\\n" + "=" * 80)
    print("TOPIC 0 LABORATORY BENCHMARK COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)

if __name__ == "__main__":
    run_feature_target_laboratory()
`,ee=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & ENGINEERING HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Feature Selection and Training & Testing Data (Slug: 001_003_feature-selection-and-training-testing-data)
Topic 0: Meaning of Features and Target — Foundational Supervised Learning Ontology
Lead Author: Sukanta Hui | Head of AI & Advanced Analytics | Barrackpore, WB
Academic Body: MAKAUT (Maulana Abul Kalam Azad University of Technology)
=============================================================================

-----------------------------------------------------------------------------
1. EXECUTIVE SUMMARY & EPISTEMOLOGICAL FOUNDATIONS
-----------------------------------------------------------------------------
In classical deductive computer programming, human software engineers write explicit
procedural logic (rules and control flow) that processes input data to generate outputs:
    \\text{Rules} + \\text{Input Data} \\longrightarrow \\text{Output}

In statistical machine learning (inductive programming), this operational paradigm
is fundamentally inverted. Algorithms ingest observed inputs and corresponding historical
outputs to discover the underlying mathematical mapping function:
    \\text{Input Data (Features } \\mathbf{X}) + \\text{Outputs (Target } \\mathbf{y}) \\longrightarrow \\text{Learned Model } \\hat{f}

Before any model architecture (linear regression, decision trees, neural networks) can
be trained, a machine learning practitioner must establish an unambiguous, mathematically
rigorous boundary between the Feature Space (\\mathcal{X}) and the Target Space (\\mathcal{Y}).
Conflating these two ontological entities causes fatal architectural failures, most
notably Target Leakage, where the algorithm learns trivial identities that fail in production.

-----------------------------------------------------------------------------
2. FORMAL MATHEMATICAL ABSTRACTIONS OF FEATURES AND TARGET
-----------------------------------------------------------------------------

2.1 The Feature Space (\\mathcal{X}):
A feature (also termed an independent variable, covariate, regressor, attribute, or predictor)
is an individual measurable property or characteristic of a phenomenon under observation.
- Let d denote the dimensionality of the feature space.
- A single observation i is represented as a real-valued column vector:
    \\mathbf{x}_i = [x_{i1}, x_{i2}, \\dots, x_{id}]^T \\in \\mathcal{X} \\subseteq \\mathbb{R}^d
- For a sample cohort of N instances, the collection of all feature vectors forms
  the Design Matrix X:
    X = \\begin{bmatrix}
        x_{11} & x_{12} & \\cdots & x_{1d} \\\\
        x_{21} & x_{22} & \\cdots & x_{2d} \\\\
        \\vdots & \\vdots & \\ddots & \\vdots \\\\
        x_{N1} & x_{N2} & \\cdots & x_{Nd}
    \\end{bmatrix} \\in \\mathbb{R}^{N \\times d}
Each row corresponds to an individual observation (e.g. a student, patient, or real estate parcel),
and each column represents a distinct measured feature dimension.

2.2 The Target Space (\\mathcal{Y}):
The target (also termed the dependent variable, label, ground truth, outcome, or explanandum)
is the unknown quantity of interest that the model is tasked with predicting.
The target vector across N training observations is represented as:
    \\mathbf{y} = [y_1, y_2, \\dots, y_N]^T \\in \\mathcal{Y}^N

The structural topology of \\mathcal{Y} dictates the fundamental class of machine learning task:
1. Regression Task:
   The target is continuous and real-valued:
       \\mathcal{Y} \\subseteq \\mathbb{R}
   Examples: Final semester percentage (y \\in [0, 100]), Commercial lease price (₹/sq.ft.),
   Quick-commerce delivery turnaround latency (minutes).
2. Binary Classification Task:
   The target is a discrete categorical indicator with two mutually exclusive states:
       \\mathcal{Y} \\in \\{0, 1\\} \\quad \\text{or} \\quad \\mathcal{Y} \\in \\{-1, +1\\}
   Examples: Loan default status (0: Repaid, 1: Defaulted), Student campus placement (0: Unplaced, 1: Placed).
3. Multi-Class Classification Task:
   The target is a discrete variable with C mutually exclusive classes:
       \\mathcal{Y} \\in \\{0, 1, 2, \\dots, C-1\\}
   Examples: Academic letter grade ({A, B, C, D, F}), Medical diagnosis category.
4. Multi-Label / Multi-Output Task:
   Each instance possesses multiple simultaneous targets:
       \\mathbf{y}_i \\in \\{0, 1\\}^K \\quad \\text{or} \\quad \\mathbf{y}_i \\in \\mathbb{R}^K

2.3 The Joint Probability Distribution P(\\mathbf{X}, Y):
Mathematically, supervised learning assumes that pairs (\\mathbf{x}_i, y_i) are drawn
identically and independently (i.i.d.) from an unknown joint probability distribution P(\\mathbf{X}, Y).
By the chain rule of probability:
    P(\\mathbf{X}, Y) = P(Y \\mid \\mathbf{X}) \\cdot P(\\mathbf{X})
- P(\\mathbf{X}) is the marginal feature distribution (governing input variability).
- P(Y \\mid \\mathbf{X}) is the posterior conditional distribution (the target generating process).

-----------------------------------------------------------------------------
3. THE SUPERVISED LEARNING OBJECTIVE & EMPIRICAL RISK MINIMIZATION (ERM)
-----------------------------------------------------------------------------

3.1 The Optimal Bayes Predictor:
Under squared error loss \\mathcal{L}(y, \\hat{y}) = (y - \\hat{y})^2, the theoretical optimal
predictor that minimizes expected generalization risk is the Conditional Expectation:
    f^*(\\mathbf{x}) = \\mathbb{E}[Y \\mid \\mathbf{X} = \\mathbf{x}] = \\int_{\\mathcal{Y}} y \\cdot P(y \\mid \\mathbf{x}) \\, dy

Under 0-1 loss for binary classification, the optimal Bayes classifier selects the mode
of the posterior distribution:
    h^*(\\mathbf{x}) = \\begin{cases}
        1 & \\text{if } P(Y = 1 \\mid \\mathbf{X} = \\mathbf{x}) \\ge 0.5 \\\\
        0 & \\text{otherwise}
    \\end{cases}

3.2 Empirical Risk Minimization (ERM):
Because the true joint distribution P(\\mathbf{X}, Y) is unknown in practice, we approximate
the theoretical risk using the empirical average loss across the training cohort:
    \\mathcal{R}_{\\text{emp}}(f) = \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}(f(\\mathbf{x}_i), y_i)

To prevent overfitting to sample idiosyncrasies, we augment ERM with a structural complexity penalty:
    \\min_{f \\in \\mathcal{H}} \\left\\{ \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}(f(\\mathbf{x}_i), y_i) + \\lambda \\Omega(f) \\right\\}
where \\mathcal{H} is the hypothesis class (e.g. linear functions, decision trees), \\Omega(f)
measures model complexity (e.g. L2 norm ||\\mathbf{w}||_2^2), and \\lambda \\ge 0 is the regularization hyperparameter.

-----------------------------------------------------------------------------
4. FEATURE RELEVANCE, NOISE, AND TARGET LEAKAGE
-----------------------------------------------------------------------------

4.1 Feature Relevance Hierarchy:
Not all columns in raw tabular databases serve as valid or useful features:
1. Strongly Relevant Features:
   A feature \\mathbf{x}_j is strongly relevant if removing it strictly degrades the Bayes
   optimal prediction: P(Y \\mid \\mathbf{X}) \\neq P(Y \\mid \\mathbf{X}_{-j}).
   Example: Internal exam marks (\\rho = 0.997) directly indicates semester score mastery.
2. Weakly Relevant Features:
   A feature that provides redundant predictive signal already captured by other features,
   or provides information only in non-linear combination with other covariates.
   Example: Weekly study hours (\\rho = 0.985) is correlated with internal marks.
3. Irrelevant / Noise Features:
   A feature statistically independent of the target conditioned on all other variables:
   P(Y \\mid \\mathbf{X}) = P(Y \\mid \\mathbf{X}_{-j}).
   Example: Student daily commute time (\\rho = -0.475) or arbitrary student roll numbers.
   Including noise features increases parameter variance without improving predictive power.

4.2 Target Leakage — The Silent Model Killer:
Target Leakage occurs when a feature included in the training design matrix X contains
information about the target y that would not be legitimately available at the moment
an inference prediction is required in production.

Mechanisms of Target Leakage:
1. Contemporaneous / Post-Event Proxies:
   Including a variable that is recorded simultaneously with or after the target event occurs.
   In our West Bengal placement benchmark:
       \\text{Feature: } \\text{"interview\\_cleared"} \\implies \\text{Target: } \\text{"placement\\_status"}
   Because candidates clear the final interview at the exact instant they are offered placement,
   the Pearson correlation is r = 1.000. An algorithm trained on this feature achieves 100%
   artificial accuracy offline. In production, when predicting which pre-final year students
   need campus placement coaching, "interview_cleared" has not occurred yet, causing the model to collapse.
2. Retrospective Feature Engineering:
   Calculating feature aggregates (e.g. cumulative customer spend) using records dated
   after the target churn timestamp.
3. System ID Proxies:
   Database primary keys or ticket numbers that are generated sequentially only after an
   insurance claim or default has been officially confirmed by administrators.

Rule of Strict Separation:
    \\text{Every feature } x_{ij} \\text{ must strictly precede target } y_i \\text{ in physical time and causal dependency.}

-----------------------------------------------------------------------------
5. WEST BENGAL REGIONAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------

Case Study 1: Academic Learning Analytics & Placement Modeling in Barrackpore & Ichapur
Context: MAKAUT affiliated technical institutes along Old Calcutta Road sought to predict
final semester university marks and campus placement eligibility for 1,200 MCA and B.Tech students.
Feature-Target Formulation:
- Predictor Features (X): Attendance percentage, internal laboratory assignment scores,
  weekly coding hours on automated platforms, and mock aptitude test counts.
- Continuous Target (y_1): MAKAUT final semester cumulative percentage (Regression).
- Discrete Target (y_2): Tier-1 IT placement clearance within 6 months of graduation (Classification).
Engineering Challenge: An early prototype included "Campus Placement Drive Admit Card Issued"
as a predictor. Because admit cards are only granted to eligible placed candidates, the model
exhibited 99.8% offline accuracy due to target leakage.
Resolution: Removed all post-admit card variables. Relying strictly on pre-semester internal
marks and coding practice hours yielded an honest R^2 = 0.892 and 84.5% placement classification recall.

Case Study 2: Commercial Office Lease Valuation in Salt Lake Sector V & New Town
Context: A Kolkata commercial real estate intelligence portal built an automated valuation model
for office spaces in New Town Action Area I and Sector V.
Feature-Target Formulation:
- Predictor Features (X): Distance to nearest Metro station (Karunamoyee / Central Park),
  carpet area (sq.ft.), building age (years), floor level, power backup capacity (kVA),
  and optical fiber connectivity bandwidth.
- Target (y): Monthly base rental lease rate in ₹/sq.ft. (Continuous Regression).
Engineering Challenge: The engineering team erroneously included "Advance Security Deposit Amount"
in the feature matrix. Because Bengal commercial leases legally mandate a deposit equal to
exactly 6 months of base rent, the model learned the trivial identity y = \\text{Deposit} / 6.
Resolution: Purged deposit figures from feature inputs. The cleaned model generalized stably
across emerging co-working hubs with Mean Absolute Percentage Error (MAPE) of 6.2%.

Case Study 3: Quick-Commerce 10-Minute Delivery Latency Modeling in Howrah
Context: An instant delivery network operating 20 dark stores across Howrah, Shibpur, and
Bally optimized delivery promise times displayed to mobile app customers.
Feature-Target Formulation:
- Predictor Features (X): Order item count, total order weight (kg), rider historical velocity,
  real-time precipitation rate (mm/hr), and GT Road traffic congestion index.
- Target (y): Actual dispatch-to-doorstep transit duration in seconds (Continuous Regression).
Engineering Challenge: Developers inadvertently fed "Rider Cash Collection Timestamp" into X.
The model relied 100% on payment timestamps, making it useless at checkout time when customers
decide whether to place an order.
Resolution: Implemented strict temporal feature gating in the ETL pipeline, restricting features
to data generated prior to cart checkout completion.

Case Study 4: Cardiopulmonary Patient Admission Triage at Kolkata Medical Centers
Context: Emergency department triage at major super-specialty hospitals in Kolkata and Jadavpur.
Feature-Target Formulation:
- Predictor Features (X): Initial systolic blood pressure, oxygen saturation (SpO2), heart rate,
  patient age, and emergency room presentation Glasgow Coma Scale (GCS).
- Target (y): Intensive Care Unit (ICU) admission requirement within 24 hours (Binary: 0 or 1).
Engineering Challenge: Features like "Intravenous Vasopressor Administered" were recorded
during patient triage. However, vasopressors are only administered once a patient is already in
critical shock entering the ICU, introducing contemporaneous target leakage.
Resolution: Restricted features strictly to non-invasive baseline vital signs measured in
the first 15 minutes of triage, elevating early sepsis detection sensitivity by 28.4%.

-----------------------------------------------------------------------------
6. PRODUCTION PITFALLS & ARCHITECTURAL VULNERABILITIES
-----------------------------------------------------------------------------

Pitfall 1: Target Leakage via Contemporaneous Features
- Antipattern: Including features that are collected after or concurrently with the target event.
- Consequence: Artificially perfect offline metrics (R^2 \\approx 1.0, ROC-AUC \\approx 1.0) that
  catastrophically drop to random guessing in production.
- Production Fix: Implement automated temporal audits: verify timestamp(x_j) < timestamp(y) for all features.

Pitfall 2: Treating Regression Targets as Classification Targets (and Vice Versa)
- Antipattern: Forcing continuous targets (e.g. Exact Salary ₹14.5 LPA) into 50 distinct discrete
  classes, or thresholding continuous marks into Pass/Fail and losing granular variance.
- Consequence: Multi-class classification with 50 fine-grained continuous levels destroys sample
  density per class; thresholding wastes quantitative metric resolution.
- Production Fix: Match the loss function to the intrinsic scale of \\mathcal{Y}: MSE/MAE for continuous,
  Log Loss / Cross-Entropy for discrete probabilities.

Pitfall 3: Label Noise and Measurement Error in Target y
- Antipattern: Assuming the ground truth target y is pristine and infallible.
- Consequence: In real-world data, human annotators mislabel records (e.g. marking a placed student
  as unplaced due to clerical delay). Models overfit to corrupted labels.
- Production Fix: Perform target distribution audits, cross-validation label agreement checks,
  and confident learning algorithms to filter noisy labels.

Pitfall 4: Inclusion of Identification Primary Keys in Feature Matrix X
- Antipattern: Passing Student ID, PAN Number, or Order UUID as numerical inputs into linear models or decision trees.
- Consequence: Decision trees split on unique IDs, memorizing individual training rows with 100%
  training accuracy and zero generalization capability on new unseen IDs.
- Production Fix: Automatically drop all high-cardinality primary keys and metadata before model fitting.

-----------------------------------------------------------------------------
7. COMPREHENSIVE REVISION CHECKLIST (SUKANTA HUI)
-----------------------------------------------------------------------------
[ ] Define the mathematical abstraction of the Feature Space \\mathcal{X} \\subseteq \\mathbb{R}^d and Design Matrix X.
[ ] Distinguish Regression targets (y \\in \\mathbb{R}) from Classification targets (y \\in \\{0, 1, \\dots, C-1\\}).
[ ] Formulate the joint distribution decomposition P(\\mathbf{X}, Y) = P(Y \\mid \\mathbf{X}) P(\\mathbf{X}).
[ ] State the Bayes optimal regressor under squared error loss: f^*(\\mathbf{x}) = \\mathbb{E}[Y \\mid \\mathbf{X} = \\mathbf{x}].
[ ] Express the Empirical Risk Minimization (ERM) objective function with structural regularization.
[ ] Define the feature relevance hierarchy: Strongly Relevant, Weakly Relevant, and Irrelevant Noise.
[ ] Formulate Pearson's product-moment correlation coefficient r(\\mathbf{x}_j, y).
[ ] Identify the symptoms and root causes of Target Leakage in production pipelines.
[ ] Explain why primary keys and sequential IDs must never be included in the feature matrix X.
[ ] Differentiate contemporaneous proxy variables from legitimate predictive signals.

-----------------------------------------------------------------------------
8. 10 HIGH-YIELD MAKAUT MASTER VIVA QUESTIONS & ANALYTICAL ANSWERS
-----------------------------------------------------------------------------

Q1: What is the formal mathematical difference between a feature and a target in supervised machine learning?
A1: A feature \\mathbf{x}_i \\in \\mathcal{X} \\subseteq \\mathbb{R}^d is an observed input variable (covariate/regressor) used to characterize an entity, whereas the target y_i \\in \\mathcal{Y} is the dependent variable (label/ground truth) that the algorithm is tasked with approximating. Mathematically, supervised learning seeks a hypothesis f: \\mathcal{X} \\to \\mathcal{Y} that estimates the true conditional distribution P(Y \\mid \\mathbf{X}).

Q2: What is the Bayes optimal prediction under squared error loss, and how does it relate to the true data distribution?
A2: Under squared error loss \\mathcal{L}(y, \\hat{y}) = (y - \\hat{y})^2, the Bayes optimal predictor is the conditional expectation of the target given the features: f^*(\\mathbf{x}) = \\mathbb{E}[Y \\mid \\mathbf{X} = \\mathbf{x}]. It represents the theoretical lower bound on mean squared error achievable by any function, with the remaining irreducible error equal to the conditional variance \\text{Var}(Y \\mid \\mathbf{X}).

Q3: Explain the concept of Target Leakage and provide an example from retail credit lending.
A3: Target leakage occurs when a feature in the training matrix contains information about the target that is unavailable at inference time. For example, in loan default prediction, including "Account Sent to Collections Agency" as a feature causes severe leakage. Because accounts are only sent to collections after default has occurred, the model achieves near-perfect offline accuracy but fails completely when evaluating new applicants.

Q4: What happens if an arbitrary customer ID or primary key is passed as an input feature to a Decision Tree?
A4: Because every customer ID is unique, a decision tree will create pure leaf nodes by splitting on individual ID thresholds (e.g. \\text{ID} \\le 1042). This yields 100% training accuracy through rote memorization. However, when evaluating a new customer with an unseen ID at test time, the tree routes the sample arbitrarily, resulting in catastrophic failure.

Q5: How does the mathematical formulation of the target space \\mathcal{Y} differentiate Regression from Classification?
A5: In regression, the target space is continuous and unbounded or semi-bounded over real numbers (\\mathcal{Y} \\subseteq \\mathbb{R}), and the model is evaluated using distance-based loss functions like MSE or MAE. In classification, \\mathcal{Y} is a finite discrete set of categorical labels (\\mathcal{Y} \\in \\{0, 1, \\dots, C-1\\}), evaluated using probability-based loss functions like Cross-Entropy or Log Loss.

Q6: What is the definition of an irrelevant feature, and what mathematical impact does it have on model training?
A6: An irrelevant feature \\mathbf{x}_j is statistically independent of the target conditioned on all other features: P(Y \\mid \\mathbf{X}) = P(Y \\mid \\mathbf{X}_{-j}). Including irrelevant features increases the dimensionality d without adding predictive mutual information, leading to the curse of dimensionality, increased parameter estimation variance, and risk of overfitting.

Q7: What is the difference between strongly relevant and weakly relevant features?
A7: A feature is strongly relevant if removing it from the feature set strictly degrades the Bayes optimal predictor (it provides unique, non-redundant signal). A feature is weakly relevant if it provides predictive signal that is partially or fully shared with other features; it can be removed without increasing Bayes error if its correlated counterpart is retained.

Q8: Why does Pearson correlation coefficient r(\\mathbf{x}_j, y) sometimes fail to detect relevant features?
A8: Pearson correlation strictly measures linear relationships. If the relationship between feature \\mathbf{x}_j and target y is non-linear (e.g. y = x_j^2 or a periodic sine wave centered at zero), Pearson correlation can be identically zero (r = 0) despite a deterministic, 100% predictable dependency. Mutual Information I(\\mathbf{X}_j; Y) must be used to detect non-linear dependencies.

Q9: What is Empirical Risk Minimization (ERM), and why must a regularization term \\Omega(f) be added to the objective function?
A9: ERM seeks the hypothesis f that minimizes the average loss over the training dataset: \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}(f(\\mathbf{x}_i), y_i). However, unconstrained ERM easily overfits training noise and sample variance. Adding a complexity penalty \\lambda \\Omega(f) enforces Occam's razor, restricting model capacity to ensure generalization to unseen test data.

Q10: In tabular data engineering, what is the "Gold Standard" rule regarding timestamp verification between features and target?
A10: The Gold Standard rule states that for every observation i, all features x_{ij} must be computed strictly from data events whose timestamps precede the timestamp of the target event: \\text{timestamp}(x_{ij}) < \\text{timestamp}(y_i). Any feature computed using contemporaneous or future data violates causality and introduces fatal target leakage.
=============================================================================
`,te=[{id:1,question:"What is the fundamental mathematical difference between a feature and a target in supervised machine learning?",shortAnswer:"A feature x in R^d is an observed input variable (covariate/regressor) used to characterize an entity, whereas the target y in Y is the dependent variable (ground truth label) that the algorithm is tasked with approximating.",explanation:"Supervised machine learning seeks to learn a mapping function f: X -> Y from training pairs (x_i, y_i). Features form the design matrix X in R^(N x d), while targets form the outcome vector y in Y^N.",hint:"Think about inputs (independent variables) versus outputs (dependent variables).",level:"Basic",codeExample:`# Supervised learning boundary in Python
X = df[['attendance_pct', 'internal_marks']]  # Features
y = df['semester_score_pct']                  # Target
model.fit(X, y)`},{id:2,question:"How does the mathematical structure of the target space Y differentiate Regression from Classification?",shortAnswer:"In Regression, Y is a continuous real-valued space (Y subset of R); in Classification, Y is a discrete categorical set with finite mutually exclusive classes (Y in {0, 1, ..., C-1}).",explanation:"Continuous targets (e.g., student marks 85.5%, real estate lease ₹45/sq.ft.) require distance-based loss functions like MSE. Discrete targets (e.g., Placed/Unplaced, Pass/Fail) require probability-based loss functions like Cross-Entropy.",hint:"Is the target a continuous quantity or a discrete category?",level:"Basic",codeExample:`# Regression vs Classification Target types
y_regression = np.array([74.5, 88.0, 92.3])  # Continuous (R)
y_classification = np.array([0, 1, 1])      # Discrete ({0, 1})`},{id:3,question:"Why is a student's unique Registration ID or Database Primary Key strictly invalid as an input feature in machine learning models?",shortAnswer:"Primary keys are non-generalizable unique identifiers; decision trees will memorize specific IDs to achieve 100% training accuracy but fail completely on unseen test IDs.",explanation:"A model that splits on unique IDs (e.g. ID <= 1042) is simply memorizing rows rather than discovering patterns in the feature space. In production, every incoming customer has a novel ID, leading to arbitrary routing and model collapse.",hint:"Does a student's ID number have an intrinsic causal relationship with their exam performance?",level:"Basic",codeExample:`# Always drop primary keys before training
X = df.drop(columns=['student_id', 'roll_no', 'target_y'])`},{id:4,question:"What is the formal definition of the Design Matrix X in supervised tabular machine learning?",shortAnswer:"A 2-dimensional real matrix of shape (N x d), where each row i represents an individual observation vector x_i, and each column j represents a distinct measured feature dimension.",explanation:"Mathematically, X in R^(N x d). If we have 1,000 students and 5 measured attributes (attendance, study hours, internal marks, mock scores, assignments), N = 1000 and d = 5.",hint:"Rows represent instances; columns represent feature dimensions.",level:"Basic",codeExample:`# Design matrix shape verification
print(X.shape)  # Output: (N, d) e.g. (1000, 5)`},{id:5,question:"In probabilistic terms, what is the core assumption regarding how training pairs (x_i, y_i) are generated?",shortAnswer:"Training instances (x_i, y_i) are drawn independently and identically distributed (i.i.d.) from an underlying joint probability distribution P(X, Y).",explanation:"The i.i.d. assumption guarantees that training samples are statistically representative of the true data-generating process, allowing models to generalize to unseen instances drawn from the same distribution.",hint:"i.i.d.: Independent and Identically Distributed.",level:"Basic",codeExample:`# Theoretical joint distribution:
# P(X, Y) = P(Y | X) * P(X)`},{id:6,question:"What is an independent variable (covariate) in contrast to a dependent variable (target)?",shortAnswer:"An independent variable is a predictor whose variation is treated as given or observed; a dependent variable is the outcome whose variation the model attempts to explain or predict based on the covariates.",explanation:"In econometric and statistical modeling, covariates X are independent regressors. The target y is dependent because its expected value is modeled as a function of X: E[Y | X].",hint:"Independent = Input features; Dependent = Output target.",level:"Basic",codeExample:`# Independent variables X determine Dependent variable y
y_hat = w1 * x_attendance + w2 * x_study_hours + bias`},{id:7,question:"Can an attribute serve as a feature in one machine learning task and as a target in another task?",shortAnswer:"Yes. Feature and target roles are task-dependent abstractions, not intrinsic properties of the data itself.",explanation:"In a student performance model, 'Internal Exam Marks' can be an input feature predicting 'Final Semester Percentage' (target). In an automated grading model, 'Internal Exam Marks' can be the target predicted from 'Assignment Submissions' and 'Attendance' (features).",hint:"The role depends entirely on what the business problem is trying to predict.",level:"Basic",codeExample:`# Task 1: Predict final score
X1 = df[['internal_marks']]; y1 = df['final_score']
# Task 2: Predict internal marks
X2 = df[['attendance', 'assignments']]; y2 = df['internal_marks']`},{id:8,question:"What is an Unsupervised Learning problem, and how does its formal formulation differ from Supervised Learning regarding targets?",shortAnswer:"In Unsupervised Learning, there is no target vector y; the algorithm operates strictly on the feature matrix X in R^(N x d) to discover latent structure, density, or clusters.",explanation:"Supervised learning learns f: X -> Y by minimizing loss against ground truth y. Unsupervised learning (e.g. K-Means, PCA) analyzes P(X) directly without labels.",hint:"Supervised uses (X, y); Unsupervised uses only X.",level:"Basic",codeExample:`# Unsupervised learning: No target y provided
kmeans = KMeans(n_clusters=3)
kmeans.fit(X)  # Only X, no y`},{id:9,question:"Under squared error loss L(y, y_hat) = (y - y_hat)^2, what is the theoretical Bayes Optimal Predictor?",shortAnswer:"The conditional expectation of the target given the features: f*(x) = E[Y | X = x].",explanation:"By minimizing expected loss E[(Y - f(X))^2], differentiating with respect to f(x) and setting to zero yields f*(x) = E[Y | X = x]. Any remaining variance Var(Y | X) represents irreducible error.",hint:"The mean of the posterior conditional distribution.",level:"Intermediate",codeExample:`# Bayes optimal regressor under L2 loss
# f*(x) = integral(y * P(y | x) dy) = E[Y | X = x]`},{id:10,question:"How is the Empirical Risk Minimization (ERM) objective function formulated in supervised learning?",shortAnswer:"R_emp(f) = (1/N) * sum_{i=1}^N L(f(x_i), y_i); it approximates the true theoretical risk by averaging the loss over the N observed training instances.",explanation:"Because the true population distribution P(X, Y) is inaccessible, models minimize average sample error. Adding a regularization term lambda * Omega(f) penalizes model complexity to prevent overfitting.",hint:"Average loss over N training examples.",level:"Intermediate",codeExample:`# ERM with L2 Regularization (Ridge Regression)
loss = (1/N) * np.sum((y - X.dot(w))**2) + alpha * np.sum(w**2)`},{id:11,question:"What is the difference between a Strongly Relevant feature and a Weakly Relevant feature?",shortAnswer:"A feature is strongly relevant if removing it strictly degrades the Bayes optimal predictor; it is weakly relevant if it provides predictive signal that is partially redundant with other features.",explanation:"Strongly relevant features provide unique information: P(Y | X) != P(Y | X_{-j}). Weakly relevant features provide signal that can be substituted by other correlated features without increasing Bayes error.",hint:"Strong = indispensable; Weak = helpful but partially redundant.",level:"Intermediate",codeExample:`# Strongly relevant: Internal marks (unique academic signal)
# Weakly relevant: Study hours (shares variance with internal marks)`},{id:12,question:"What is an Irrelevant (Noise) feature, and what mathematical effect does it have on model generalization?",shortAnswer:"A feature that is conditionally independent of the target given all other features: P(Y | X) = P(Y | X_{-j}); it increases estimation variance and causes the curse of dimensionality.",explanation:"Including irrelevant noise features (e.g. random numbers, commute minutes) consumes model degrees of freedom, causes linear weights to fit spurious training correlations, and degrades test accuracy.",hint:"A feature with zero mutual information with the target: I(X_j; Y | X_{-j}) = 0.",level:"Intermediate",codeExample:`# Irrelevant feature: Student commute distance for coding proficiency
# True correlation r approx 0.0; weights should shrink to 0`},{id:13,question:"How is Pearson's correlation coefficient r(x, y) formulated, and what are its boundaries?",shortAnswer:"r = Cov(X, Y) / (sigma_X * sigma_Y); it measures the strength and direction of linear association and is bounded strictly in [-1.0, +1.0].",explanation:"r = +1.0 denotes perfect positive linear association, r = -1.0 denotes perfect negative linear association, and r = 0 indicates no linear correlation.",hint:"Covariance divided by the product of standard deviations.",level:"Intermediate",codeExample:`# Pearson correlation calculation
r = np.corrcoef(x, y)[0, 1]`},{id:14,question:"Why does a Pearson correlation of r = 0 not necessarily imply that feature X is independent of target Y?",shortAnswer:"Because Pearson correlation strictly measures linear relationships; non-linear deterministic dependencies (e.g., y = x^2 centered at 0) have r = 0 despite perfect predictability.",explanation:"If x is uniformly distributed on [-1, 1] and y = x^2, the covariance Cov(x, y) = E[x^3] - E[x]E[x^2] = 0 - 0 = 0. Therefore r = 0, but y is 100% determined by x.",hint:"Non-linear relationships can have zero linear correlation.",level:"Intermediate",codeExample:`# Non-linear dependency with zero correlation
x = np.linspace(-10, 10, 100)
y = x**2
print(np.corrcoef(x, y)[0, 1])  # Yields approx 0.0!`},{id:15,question:"What metric should be used instead of Pearson correlation to detect non-linear dependencies between continuous features and targets?",shortAnswer:"Mutual Information I(X; Y), which measures general statistical dependence based on Shannon entropy: I(X; Y) = H(X) + H(Y) - H(X, Y).",explanation:"Mutual Information is zero if and only if X and Y are strictly statistically independent: P(X, Y) = P(X)P(Y). It detects quadratic, sinusoidal, and arbitrary non-linear feature-target relationships.",hint:"Information-theoretic metric based on entropy.",level:"Intermediate",codeExample:`# Mutual information in scikit-learn
from sklearn.feature_selection import mutual_info_regression
mi_scores = mutual_info_regression(X, y)`},{id:16,question:"In Ordinary Least Squares (OLS) regression, how does the coefficient of determination R^2 relate to Pearson correlation in a univariate model?",shortAnswer:"In simple univariate linear regression, R^2 is identically equal to the square of Pearson's correlation coefficient: R^2 = r(x, y)^2.",explanation:"If the correlation between internal marks and semester score is r = 0.997, then R^2 = (0.997)^2 = 0.994, indicating that 99.4% of the variance in semester scores is explained by internal marks.",hint:"R^2 = r^2 for a single predictor.",level:"Intermediate",codeExample:`# Univariate R^2 equality
r = np.corrcoef(x, y)[0, 1]
r2 = r ** 2`},{id:17,question:"What is Target Leakage, and what is its signature empirical symptom during offline model evaluation?",shortAnswer:"Target leakage occurs when an input feature contains information about the target that is unavailable at inference time; its symptom is unrealistically perfect offline performance (R^2 approx 1.0 or ROC-AUC approx 1.0) that collapses in production.",explanation:"If a model predicts hospital readmission using 'Prescribed Post-Discharge Home Nurse', it achieves 99.9% accuracy offline because home nurses are only assigned to readmitted patients. In production, nurses have not yet been assigned, so the model fails.",hint:"Too-good-to-be-true offline test metrics.",level:"Advanced",codeExample:`# Signature symptom of Target Leakage:
# Offline Test ROC-AUC: 0.9998
# Production Live ROC-AUC: 0.5210 (Random guessing)`},{id:18,question:"What is Contemporaneous (Post-Event) Feature Leakage, and how does the 'Temporal Precedence Rule' prevent it?",shortAnswer:"Contemporaneous leakage occurs when features are recorded simultaneously with or after the target event occurs; the Temporal Precedence Rule mandates that timestamp(x_j) must strictly precede timestamp(y).",explanation:"In student placement prediction, 'Interview Cleared' occurs at the exact moment an offer is made. If the model's business objective is to identify students in 6th semester who need training, feeding 8th semester interview results violates physical causality.",hint:"Every feature must occur before the target in physical time.",level:"Advanced",codeExample:`# Temporal Precedence Enforcement in SQL/ETL:
# WHERE feature_event_time < prediction_cutoff_time`},{id:19,question:"How does Retrospective Feature Aggregation create insidious target leakage in customer churn prediction?",shortAnswer:"When feature engineers compute aggregates (e.g., 'total purchases in the last 90 days') using data timestamps that extend past the customer's churn date.",explanation:"If a customer churned on Day 60, computing 90-day activity includes 30 days of zero activity post-churn. The model notices that 'recent purchases = 0' and predicts churn with 100% accuracy, but this zero activity was caused by churn itself.",hint:"Computing stats over future windows.",level:"Advanced",codeExample:`# Correct Leakage-Free Windowing:
# df['rolling_spend'] = df.apply(lambda row: compute_spend(row['id'], end_date=row['cutoff_date']))`},{id:20,question:"What is Proxy Variable Leakage, and how did it manifest in commercial real estate lease modeling in Salt Lake Sector V?",shortAnswer:"When an input feature is a direct mathematical derivative or statutory multiple of the target, such as 'Security Deposit' which is legally mandated to equal 6 months of base rent.",explanation:"Because Deposit = 6 * Rent, feeding Deposit into a model predicting Rent allows the algorithm to learn the trivial relationship Rent = Deposit / 6. The model appears 100% accurate but cannot value vacant properties where deposit has not yet been set.",hint:"A feature that is an algebraic transformation of the target.",level:"Advanced",codeExample:`# Proxy leakage: Feature is a direct multiple of target
# x_deposit = 6 * y_rent
# Model learns: y_hat = (1/6) * x_deposit  (Trivial Identity)`},{id:21,question:"Why must the target vector y NEVER be passed to preprocessing transformers like SimpleImputer or StandardScaler?",shortAnswer:"Preprocessing transformers are designed to modify the feature space X; passing y into fit_transform() leaks target information into donor calculations or alters the scale of ground truth labels inappropriately.",explanation:"Imputers must estimate missing feature values strictly using predictor correlations. If target labels are used to impute missing features, the feature now contains ground truth, causing total pipeline leakage.",hint:"Transformers operate on X, never on y.",level:"Advanced",codeExample:`# SEVERE DATA LEAKAGE ANTI-PATTERN:
# X_train['salary'] = imputer.fit_transform(X_train[['exp', 'target_y']])
# CORRECT: Use only predictor features X`},{id:22,question:"In tabular classification pipelines, why must target encoding (mean encoding) be performed strictly within cross-validation folds rather than across the whole dataset?",shortAnswer:"Because computing the average target value y_bar for each category across the entire dataset leaks the validation fold's target labels into the training feature values.",explanation:"If category 'Kolkata' has an intra-class mean target computed using all rows, validation rows contribute to their own feature values, inflating offline validation accuracy and causing target leakage.",hint:"Out-of-fold target encoding prevents self-leakage.",level:"Advanced",codeExample:`# Correct Out-Of-Fold Target Encoding
from category_encoders import TargetEncoder
encoder = TargetEncoder(cols=['city'], cv=5)`},{id:23,question:"What is the consequence of treating a multi-class ordinal target (e.g. Grades: A, B, C, D) as an arbitrary nominal target with One-vs-Rest classification?",shortAnswer:"It discards the intrinsic monotonic rank ordering between classes; predicting grade 'F' for an 'A' student is penalized with the exact same loss as predicting 'B'.",explanation:"Nominal multi-class loss treats all errors equally. Ordinal regression models or continuous score predictions preserve distance and rank, providing far more realistic penalties for near-miss predictions.",hint:"Ordinal targets have meaningful order that nominal loss ignores.",level:"Advanced",codeExample:`# Ordinal targets preserve metric penalty:
# Error(A -> B) is small; Error(A -> F) is severe`},{id:24,question:"How should a machine learning engineer audit a newly received production dataset for potential target leakage before model building?",shortAnswer:"1. Check pairwise correlations between each feature and y (|r| > 0.95); 2. Audit feature timestamps against target event times; 3. Inspect high-importance features in a baseline tree.",explanation:"Any feature with near-perfect correlation, or any feature whose name implies post-event status (e.g. 'cancellation_date', 'approved_flag'), must be rigorously challenged and removed if not available at the moment of inference.",hint:"Correlation check, temporal audit, and feature importance inspection.",level:"Advanced",codeExample:`# Automated Leakage Audit Script
for col in X.columns:
    corr = np.corrcoef(X[col], y)[0, 1]
    if abs(corr) > 0.95:
        print(f'SUSPECT TARGET LEAKAGE: {col} (r = {corr:.4f})')`},{id:25,question:"What is Label Shift (Prior Probability Shift), and how does it differ from Covariate Shift?",shortAnswer:"Label Shift occurs when the target distribution P(Y) changes while the conditional feature distribution P(X | Y) remains invariant; Covariate Shift occurs when P(X) changes while P(Y | X) remains invariant.",explanation:"In loan underwriting, during an economic recession, the overall default rate P(Y = 1) may spike from 2% to 15% (Label Shift). In Covariate Shift, applicant demographics P(X) change, but the probability of default for a given income P(Y | X) stays the same.",hint:"P(Y) changes in Label Shift; P(X) changes in Covariate Shift.",level:"Expert",codeExample:`# Label Shift: Target prevalence changes across time
# Training (2024): Default rate P(Y=1) = 0.02
# Production (2026): Default rate P(Y=1) = 0.12`},{id:26,question:"What is a Delayed Feedback Loop in production supervised learning, and why does it make target acquisition difficult?",shortAnswer:"A latency gap between when an inference prediction f(x) is generated and when the true ground truth label y is observed in reality (e.g. 90 days for loan default, 12 months for customer churn).",explanation:"Unlike online ad click prediction where labels arrive within seconds, loan defaults take months to observe. This delayed feedback means models cannot be validated or retrained immediately on fresh production traffic.",hint:"Ground truth is not available immediately after prediction.",level:"Expert",codeExample:`# Delayed Feedback Timeline:
# Day 0: Predict loan approval f(x)
# Day 90: Observe true default label y`},{id:27,question:"In real-time inference microservices, how should an API handle incoming requests where an essential feature x_j is missing?",shortAnswer:"Use a production imputer pipeline pre-fitted on training data (e.g. stratified median or KNN) or route to a dedicated model trained without that feature, rather than returning a 500 server crash.",explanation:"In production, mobile network drops or user skips cause missing features. The inference pipeline must execute imputer.transform(X_live) to substitute robust training parameters without interrupting service.",hint:"Pre-trained imputer transform ensures high availability.",level:"Expert",codeExample:`# Production Inference Gating
def predict(input_json):
    X_live = pipeline.named_steps['imputer'].transform(input_json)
    return pipeline.named_steps['model'].predict(X_live)`},{id:28,question:"What is the 'Self-Fulfilling Prophecy' bias (Performative Prediction) when model predictions influence the true target y?",shortAnswer:"When an algorithmic prediction changes real-world human behavior or business actions, thereby altering the probability of the target event occurring.",explanation:"If a fraud detection model flags a transaction as high-risk, the bank blocks the card. Because the card is blocked, no fraud occurs (y = 0). The model's own intervention altered the ground truth label, making counterfactual evaluation challenging.",hint:"Predictions alter the reality they are trying to predict.",level:"Expert",codeExample:`# Performative Prediction feedback:
# y_hat = High Risk -> Action: Block Account -> Observed y = No Fraud`},{id:29,question:"How does Semi-Supervised Learning bridge the gap when feature matrices X are abundant but target labels y are expensive or scarce?",shortAnswer:"It combines a small labeled dataset (X_L, y_L) with a massive unlabeled dataset X_U, using algorithms like Pseudo-Labeling or Contrastive Representation Learning to improve decision boundaries.",explanation:"In medical pathology in Kolkata, obtaining whole-slide biopsy scans (X) is cheap, but having expert pathologists annotate ground truth tumor boundaries (y) costs ₹5,000 per slide. Semi-supervised learning leverages unlabeled data structure.",hint:"Small labeled data + large unlabeled data.",level:"Expert",codeExample:`# Semi-supervised workflow
# 1. Train model on 500 labeled slides
# 2. Predict high-confidence pseudo-labels on 50,000 unlabeled slides
# 3. Retrain on combined set`},{id:30,question:"What is the Golden Rule of Feature Definition that every machine learning architect must enforce before signing off on a deployment?",shortAnswer:"Every feature x_j must be computable strictly from historical data available at the exact millisecond of inference, must have zero causal dependency on future target events, and must not contain primary key artifacts.",explanation:"This principle guarantees temporal validity, eliminates target leakage, prevents database primary key memorization, and ensures that offline validation benchmarks accurately reflect real-world production performance.",hint:"Temporal precedence, causal validity, and zero identifier memorization.",level:"Expert",codeExample:`# The Golden Rule Checklist:
# 1. timestamp(x) < timestamp(y) (Temporal)
# 2. Causally independent of y (Leakage-free)
# 3. No unique UUIDs / Primary keys (Generalizable)`}],T=[{id:"WB-STU-01",name:"Mamata",institution:"Barrackpore Academy",attendance:94,internalMarks:88,studyHours:24,mockTests:18,commuteMins:25,interviewCleared:1,semesterScore:91.5,placementStatus:1},{id:"WB-STU-02",name:"Mahima",institution:"Kolkata Tech Hub",attendance:91,internalMarks:85,studyHours:22,mockTests:15,commuteMins:45,interviewCleared:1,semesterScore:87,placementStatus:1},{id:"WB-STU-03",name:"Susmita",institution:"Ichapur FinTech Lab",attendance:86,internalMarks:78,studyHours:18,mockTests:12,commuteMins:15,interviewCleared:1,semesterScore:82.5,placementStatus:1},{id:"WB-STU-04",name:"Debangshu",institution:"Salt Lake Sector V",attendance:68,internalMarks:60,studyHours:10,mockTests:5,commuteMins:60,interviewCleared:0,semesterScore:62,placementStatus:0},{id:"WB-STU-05",name:"Abhronila",institution:"Jadavpur University",attendance:96,internalMarks:94,studyHours:28,mockTests:22,commuteMins:30,interviewCleared:1,semesterScore:95,placementStatus:1},{id:"WB-STU-06",name:"Rohan",institution:"Hooghly Engg College",attendance:62,internalMarks:54,studyHours:8,mockTests:4,commuteMins:40,interviewCleared:0,semesterScore:56,placementStatus:0},{id:"WB-STU-07",name:"Subhajit",institution:"Siliguri Analytics Inst",attendance:78,internalMarks:72,studyHours:15,mockTests:10,commuteMins:20,interviewCleared:1,semesterScore:74,placementStatus:1}];function D(d){if(!d||d.length===0)return{mean:0,variance:0,std:1};const u=d.length,o=d.reduce((h,p)=>h+p,0)/u,w=u>1?d.reduce((h,p)=>h+(p-o)**2,0)/(u-1):0,c=Math.sqrt(w)||1e-5;return{mean:o,variance:w,std:c}}function ae(d,u){const o=d.length;if(o!==u.length||o<2)return 0;const w=D(d),c=D(u);let h=0;for(let _=0;_<o;_++)h+=(d[_]-w.mean)*(u[_]-c.mean);const p=(o-1)*w.std*c.std;return p===0?0:h/p}const he=()=>{const[d,u]=i.useState("hero");i.useId();const[o,w]=i.useState("inspector"),[c,h]=i.useState("regression"),[p,_]=i.useState("WB-STU-01"),[b,U]=i.useState({attendance:!0,internalMarks:!0,studyHours:!0,mockTests:!0,commuteMins:!1,interviewCleared:!1}),[N,F]=i.useState(1),[j,X]=i.useState(2),[ne,se]=i.useState("l2"),[C,z]=i.useState(""),[k,B]=i.useState({}),[y,O]=i.useState(!1),[E,Y]=i.useState("lab"),W=i.useMemo(()=>{const t=T.map(n=>c==="regression"?n.semesterScore:n.placementStatus);return[{key:"attendance",label:"Attendance (%)",unit:"%"},{key:"internalMarks",label:"Internal Marks",unit:"/100"},{key:"studyHours",label:"Weekly Study Hours",unit:"hrs"},{key:"mockTests",label:"Mock Tests Solved",unit:"tests"},{key:"commuteMins",label:"Commute Time",unit:"mins"},{key:"interviewCleared",label:"Interview Cleared (Flag)",unit:"0/1"}].map(n=>{const s=T.map(M=>M[n.key]),m=D(s),l=ae(s,t);let x="Strong Predictor",g="text-emerald-400 bg-emerald-950/40 border-emerald-800/40",I=!1;return n.key==="interviewCleared"&&c==="classification"?(x="CRITICAL TARGET LEAKAGE ⚠",g="text-rose-400 bg-rose-950/40 border-rose-800/40",I=!0):Math.abs(l)>=.85?(x="Strong Predictor",g="text-emerald-400 bg-emerald-950/40 border-emerald-800/40"):Math.abs(l)>=.5?(x="Moderate Predictor",g="text-indigo-300 bg-indigo-950/40 border-indigo-800/40"):(x="Weak / Noise Feature",g="text-slate-400 bg-slate-900 border-slate-800"),{...n,mean:m.mean.toFixed(1),variance:m.variance.toFixed(1),std:m.std.toFixed(2),corr:l.toFixed(4),absCorr:Math.abs(l),relevance:x,statusColor:g,isLeakage:I}}).sort((n,s)=>s.absCorr-n.absCorr)},[c]),v=i.useMemo(()=>{const t=b.interviewCleared;let a=.892,n=.854;return t?(a=.999,n=.512):(Object.values(b).filter(Boolean).length===0?a=0:b.internalMarks&&b.attendance?a=.892:b.internalMarks?a=.825:a=.65,n=.84),{isLeakActive:t,offlineR2:a,onlineExpectedAcc:n}},[b]),R=i.useMemo(()=>{let t=0,a=0;const n=T.length,s=T.map(f=>f.semesterScore),m=s.reduce((f,S)=>f+S,0)/n,l=s.reduce((f,S)=>f+(S-m)**2,0),x=T.map(f=>{const S=j+N*f.internalMarks,L=f.semesterScore-S;return t+=L**2,a+=Math.abs(L),{...f,pred:S,residual:L}}),g=t/n,I=a/n,M=Math.max(0,1-t/(l||1));return{points:x,mse:g,mae:I,r2:M}},[N,j]),q=[{term:"Feature Space (X)",definition:"The d-dimensional geometric space X subset of R^d containing all measurable explanatory covariates or predictors used to represent an entity.",relevance:"Defines the input domain for machine learning mapping functions f: X -> Y."},{term:"Target Space (Y)",definition:"The mathematical domain containing the dependent variable (ground truth label) that the model is tasked with predicting.",relevance:"Continuous R for regression; discrete {0, 1, ..., C-1} for classification."},{term:"Bayes Optimal Regressor",definition:"The theoretical upper bound on regression predictive fidelity under L2 squared error loss: f*(x) = E[Y | X = x].",relevance:"Approximating this conditional expectation is the fundamental objective of supervised learning."},{term:"Target Leakage",definition:"The catastrophic design flaw where an input feature contains information about the target that is unavailable at inference time in production.",relevance:"Generates artificially perfect offline validation metrics that collapse when deployed."},{term:"Temporal Precedence Invariant",definition:"The foundational causality rule requiring that every feature timestamp(x_j) must strictly precede the target timestamp(y).",relevance:"Eliminates post-event features and contemporaneous proxies from training data."},{term:"Empirical Risk Minimization (ERM)",definition:"The operational optimization framework that estimates the theoretical risk by minimizing the average loss across the training cohort: R_emp(f) = (1/N) sum L(f(x_i), y_i).",relevance:"The computational core of model fitting across linear regression, SVMs, and neural networks."}],H=i.useMemo(()=>{if(!C.trim())return q;const t=C.toLowerCase();return q.filter(a=>a.term.toLowerCase().includes(t)||a.definition.toLowerCase().includes(t)||a.relevance.toLowerCase().includes(t))},[C]),A=[{id:1,scenario:"During an audit of an automated underwriting system at a Salt Lake fintech startup, you discover that the model was trained using 'Account Sent to Collections Agency' as an input feature predicting 'Loan Default Status'. What catastrophic flaw exists?",options:[{label:"A",text:"Computational latency only; validation scores remain unbiased."},{label:"B",text:"Severe Target Leakage: Accounts are only sent to collections AFTER default has occurred. In production, new applicants have never been sent to collections, causing model collapse."},{label:"C",text:"The dummy variable trap, causing gradient descent to fail."},{label:"D",text:"Covariate shift, converting continuous salary metrics into discrete ordinal ranks."}],correct:"B",explanation:"A feature that occurs contemporaneously with or after the target event constitutes severe target leakage. It produces near-perfect offline training accuracy but renders the model completely useless on new applicants."},{id:2,scenario:"Why is a student's unique Database Registration ID or PAN Number strictly prohibited from being passed as an input feature into a Decision Tree?",options:[{label:"A",text:"Decision trees cannot process integers greater than 1000."},{label:"B",text:"Primary keys are unique non-generalizable identifiers; the tree creates pure leaf nodes by memorizing individual IDs, yielding 100% training accuracy but failing completely on unseen test IDs."},{label:"C",text:"Because primary keys have zero variance across instances."},{label:"D",text:"Because IDs violate Stevens' ratio measurement scale."}],correct:"B",explanation:"Unique identifiers allow tree algorithms to memorize individual training rows without discovering generalizable patterns in the feature space. Unseen test IDs will be routed arbitrarily."},{id:3,scenario:"Under squared error loss L(y, y_hat) = (y - y_hat)^2, what is the mathematically proven theoretical Bayes Optimal Predictor?",options:[{label:"A",text:"The sample mode of the feature space: Mode(X)."},{label:"B",text:"The conditional expectation of the target given the feature vector: f*(x) = E[Y | X = x]."},{label:"C",text:"The median of the unconditioned target distribution: Median(Y)."},{label:"D",text:"The inverse covariance matrix: (X^T X)^(-1)."}],correct:"B",explanation:"Minimizing the expected squared prediction error E[(Y - f(X))^2] analytically yields the conditional expectation f*(x) = E[Y | X = x]. The remaining variance Var(Y | X) represents irreducible error."},{id:4,scenario:"Why does Pearson's correlation coefficient r(x_j, y) sometimes fail to detect a feature that has a deterministic, 100% predictable relationship with the target?",options:[{label:"A",text:"Pearson correlation is strictly bounded between 0 and 1."},{label:"B",text:"Pearson correlation measures strictly linear relationships; non-linear symmetrical dependencies (e.g. y = x^2 centered at 0) yield r = 0 despite complete deterministic predictability."},{label:"C",text:"Because Pearson correlation requires categorical targets."},{label:"D",text:"Because correlation cannot be computed on continuous variables."}],correct:"B",explanation:"Covariance between x and x^2 over a symmetric interval centered at zero is identically zero. While linear correlation is r = 0, Mutual Information I(X; Y) detects the strong non-linear dependency."},{id:5,scenario:"In a production customer churn model, feature engineering aggregates each customer's 'Total Transaction Value over the Last 90 Days'. What subtle bug causes retrospective target leakage?",options:[{label:"A",text:"Using 90 days instead of 30 days."},{label:"B",text:"Calculating the 90-day window using data after the customer's churn date; churned customers naturally have zero spend post-churn, creating artificial leakage."},{label:"C",text:"Using sum instead of average."},{label:"D",text:"Normalizing transaction values using StandardScaler."}],correct:"B",explanation:"If the aggregation window extends past the event date, the feature captures the consequence of the churn (zero transactions) rather than the predictive signal preceding it."}],V=(t,a)=>{y||B(n=>({...n,[t]:a}))},G=()=>{Object.keys(k).length<A.length||O(!0)},P=i.useMemo(()=>{if(!y)return 0;let t=0;return A.forEach(a=>{k[a.id]===a.correct&&t++}),t},[y,k]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-7xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("nav",{"aria-label":"Topic navigation",className:"sticky top-4 z-50 bg-slate-900/90 backdrop-blur-md p-2.5 rounded-2xl border border-indigo-500/30 shadow-xl flex items-center justify-between gap-2 overflow-x-auto",children:[e.jsxs("div",{className:"flex items-center gap-2 pl-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-400 animate-pulse"}),e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-indigo-300 whitespace-nowrap",children:"Topic 0 Ontology"})]}),e.jsx("div",{className:"flex items-center gap-1.5 text-xs font-medium",children:[{id:"hero",label:"Overview"},{id:"novice",label:"Novice"},{id:"studio",label:"Studio"},{id:"math",label:"Mathematics"},{id:"casestudies",label:"Cases"},{id:"quiz",label:"Assessment"},{id:"pitfalls",label:"Pitfalls"},{id:"loaders",label:"Laboratory"},{id:"faq",label:"Viva Q&A"}].map(t=>e.jsx("a",{href:`#${t.id}`,onClick:()=>u(t.id),className:r("px-3 py-1.5 rounded-lg transition-all duration-200 whitespace-nowrap cursor-pointer",d===t.id?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30 font-semibold":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/60"),children:t.label},t.id))})]}),e.jsxs("header",{id:"hero",className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Feature Selection & Train/Test • Topic 0"}),e.jsx("span",{className:"px-3.5 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Foundational ML Ontology"}),e.jsx("span",{className:"px-3.5 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Supervised Learning Framework"})]}),e.jsx("h1",{className:"text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Meaning of Features and Target"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed",children:["Establish the foundational epistemological boundary between the input Feature Space Χ ⊆ &Ropf;",e.jsx("sup",{children:"d"})," and the Target Space &Yopf;. Understand how supervised learning approximates the true conditional expectation &Eopf;[Y | X], differentiate continuous regression from discrete classification, quantify feature relevance hierarchies, and eliminate fatal target leakage across West Bengal industrial deployments."]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-slate-800/80",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Feature Space Χ"}),e.jsxs("div",{className:"text-sm sm:text-base font-bold text-indigo-300",children:["Design Matrix X ∈ &Ropf;",e.jsx("sup",{children:"N×d"})]}),e.jsx("div",{className:"text-xs text-slate-500",children:"Explanatory Covariates"})]}),e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Target Space &Yopf;"}),e.jsx("div",{className:"text-sm sm:text-base font-bold text-cyan-300",children:"Continuous vs Discrete"}),e.jsx("div",{className:"text-xs text-slate-500",children:"Regression & Classification"})]}),e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Bayes Regressor"}),e.jsx("div",{className:"text-sm sm:text-base font-bold text-emerald-300",children:"f*(x) = &Eopf;[Y | X=x]"}),e.jsx("div",{className:"text-xs text-slate-500",children:"Empirical Risk Minimizer"})]}),e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Cardinal Sin"}),e.jsx("div",{className:"text-sm sm:text-base font-bold text-rose-300",children:"Target Leakage"}),e.jsx("div",{className:"text-xs text-slate-500",children:"Post-Event Proxies"})]})]})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Novice Masterclass Foundations"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"What is a Feature and What is a Target?"}),e.jsxs("p",{className:"text-sm sm:text-base text-slate-300 mt-2 max-w-4xl",children:["In traditional programming, you provide the recipe (rules) and ingredients (data) to bake a cake (output). In machine learning, you provide thousands of cakes and their ingredient lists, and the machine figures out the recipe. The ingredient measurements are the ",e.jsx("strong",{className:"text-indigo-300",children:"Features"}),"; the cake quality is the ",e.jsx("strong",{className:"text-cyan-300",children:"Target"}),"."]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-indigo-500/20 space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg",children:"🔍"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"The Detective's Clues vs Verdict"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:["A detective at Lalbazar inspects crime scenes gathering clues: footprints, fingerprint smudges, CCTV timestamps, and cell tower pings. These clues are ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"Features (X)"}),". The final judicial verdict (Guilty vs Innocent) is the ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Target (y)"}),". You cannot use the judge's future verdict as a clue to find the suspect!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-cyan-500/20 space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg",children:"🚇"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"The Metro Route vs Destination"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:["Riding the East-West Green Line from Sector V, you pass through intermediate landmarks: Karunamoyee, Central Park, City Center, and Bengal Chemical. These navigational waypoints are ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"Features (X)"}),". The final terminal destination (Howrah Maidan) is the ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Target (y)"}),"."]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-5 rounded-2xl border border-emerald-500/20 space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg",children:"🩺"}),e.jsx("h4",{className:"text-base font-bold text-white",children:"The Blood Panel vs Diagnosis"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400 leading-relaxed",children:["At a diagnostic lab in Barrackpore, a patient provides a blood sample. The automated analyzer measures Hemoglobin (13.5 g/dL), Fasting Blood Glucose (142 mg/dL), and HbA1c (7.2%). These clinical markers are ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"Features (X)"}),". The physician's diagnosis (Type-2 Diabetes: Positive) is the ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"Target (y)"}),"."]})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h4",{className:"text-base font-bold text-white",children:"Core Ontological Comparison: Feature Space vs Target Space"}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs sm:text-sm text-slate-300",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-400 uppercase text-[11px] tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3.5",children:"Property"}),e.jsx("th",{className:"p-3.5",children:"Feature Space (X)"}),e.jsx("th",{className:"p-3.5",children:"Target Space (y)"}),e.jsx("th",{className:"p-3.5",children:"Mathematical Formalism"}),e.jsx("th",{className:"p-3.5",children:"Architectural Boundary"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 bg-slate-900/40",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-indigo-400",children:"Ontological Role"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"Explanatory Inputs / Predictors"}),e.jsx("td",{className:"p-3.5 text-cyan-300 font-semibold",children:"Dependent Outcome / Label"}),e.jsx("td",{className:"p-3.5 font-mono text-xs",children:"X \\in \\mathbb{R}^{N \\times d}, \\; y \\in \\mathcal{Y}^N"}),e.jsx("td",{className:"p-3.5 text-emerald-400",children:"Strictly Separate"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-indigo-400",children:"Dimensionality"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"Multi-dimensional (d ≥ 1 columns)"}),e.jsx("td",{className:"p-3.5 text-cyan-300 font-semibold",children:"Univariate (1 column) or Vector"}),e.jsx("td",{className:"p-3.5 font-mono text-xs",children:"d \\text{ features per row}"}),e.jsx("td",{className:"p-3.5 text-emerald-400",children:"Matrix vs Vector"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-indigo-400",children:"Continuous Form"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"Continuous Real Values (Age, Income)"}),e.jsx("td",{className:"p-3.5 text-cyan-300 font-semibold",children:"Regression Target (y ∈ &Ropf;)"}),e.jsx("td",{className:"p-3.5 font-mono text-xs",children:"\\mathcal{L}(y, \\hat{y}) = (y - \\hat{y})^2"}),e.jsx("td",{className:"p-3.5 text-emerald-400",children:"L2 / L1 Loss Optimization"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-indigo-400",children:"Discrete Form"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"Categorical Encodings (One-Hot, Binary)"}),e.jsx("td",{className:"p-3.5 text-cyan-300 font-semibold",children:"Classification Target (y ∈ {0, 1})"}),e.jsx("td",{className:"p-3.5 font-mono text-xs",children:"\\mathcal{L}_{\\text{CE}} = -[y\\log p + (1-y)\\log(1-p)]"}),e.jsx("td",{className:"p-3.5 text-emerald-400",children:"Cross-Entropy Loss"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3.5 font-bold text-indigo-400",children:"Inference Availability"}),e.jsx("td",{className:"p-3.5 text-slate-200",children:"Must be 100% available at inference"}),e.jsx("td",{className:"p-3.5 text-cyan-300 font-semibold",children:"Unknown / Missing at inference time"}),e.jsx("td",{className:"p-3.5 font-mono text-xs",children:"\\text{timestamp}(x) < \\text{timestamp}(y)"}),e.jsx("td",{className:"p-3.5 text-rose-400",children:"Leakage if Available"})]})]})]})})]}),e.jsxs("div",{className:"space-y-4 pt-2",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsx("h4",{className:"text-base font-bold text-white",children:"Interactive Jargon Glossary"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Search key machine learning concepts and mathematical terms"})]}),e.jsx("input",{type:"text",value:C,onChange:t=>z(t.target.value),placeholder:"Search terms (e.g. leakage, bayes, space)...",className:"px-3.5 py-1.5 text-xs bg-slate-950 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-full sm:w-64"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:H.map((t,a)=>e.jsxs("div",{className:"bg-slate-950/60 p-4 rounded-xl border border-slate-800/80 space-y-2 hover:border-indigo-500/40 transition-colors",children:[e.jsx("div",{className:"text-sm font-bold text-indigo-300",children:t.term}),e.jsx("div",{className:"text-xs text-slate-300 leading-relaxed",children:t.definition}),e.jsx("div",{className:"text-[11px] text-cyan-400/90 bg-cyan-950/30 px-2 py-1 rounded border border-cyan-800/30 font-medium",children:t.relevance})]},a))})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-indigo-500 animate-ping"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Interactive Engineering Studio"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Feature-Target Diagnostics & Leakage Sandbox"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"inspector",label:"Mode 1: Feature vs Target Inspector",badge:"Pearson & Variance"},{id:"leakage",label:"Mode 2: Target Leakage Arena",badge:"Offline vs Online"},{id:"loss_surface",label:"Mode 3: Conditional Expectation",badge:"ERM Loss & Residuals"}].map(t=>e.jsxs("button",{onClick:()=>w(t.id),className:r("px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer flex items-center gap-1.5",o===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800 text-slate-300 hover:bg-slate-700 border border-slate-700/60"),children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:r("text-[10px] px-1.5 py-0.5 rounded font-mono",o===t.id?"bg-indigo-900/60 text-indigo-200":"bg-slate-900 text-slate-400"),children:t.badge})]},t.id))})]}),o==="inspector"&&e.jsx("div",{className:"space-y-6 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-2xl border border-indigo-500/30 space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"Feature Correlation & Variance Audit"}),e.jsxs("span",{className:"text-xs px-2.5 py-0.5 rounded bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 font-mono",children:["Target: ",c==="regression"?"Semester Score % (Continuous R)":"Placement Status (Discrete {0, 1})"]})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Observe how candidate features exhibit varying degrees of linear relevance (Pearson r) and variance across target modalities."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400 font-medium",children:"Target Modality:"}),e.jsx("button",{onClick:()=>h("regression"),className:r("px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all",c==="regression"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"bg-slate-800 text-slate-400 hover:text-white"),children:"Continuous (Regression)"}),e.jsx("button",{onClick:()=>h("classification"),className:r("px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all",c==="classification"?"bg-cyan-600 text-white shadow-md shadow-cyan-600/30":"bg-slate-800 text-slate-400 hover:text-white"),children:"Discrete (Classification)"})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs text-slate-300",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Feature Name"}),e.jsx("th",{className:"p-3",children:"Sample Mean"}),e.jsxs("th",{className:"p-3",children:["Variance (σ",e.jsx("sup",{children:"2"}),")"]}),e.jsx("th",{className:"p-3",children:"Pearson Correlation (r)"}),e.jsx("th",{className:"p-3",children:"Relevance Verdict"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 bg-slate-950/40",children:W.map(t=>e.jsxs("tr",{className:"hover:bg-slate-900/40 transition-colors",children:[e.jsxs("td",{className:"p-3 font-semibold text-white flex items-center gap-1.5",children:[e.jsx("span",{children:t.label}),e.jsxs("span",{className:"text-[10px] text-slate-500 font-mono",children:["(",t.unit,")"]})]}),e.jsx("td",{className:"p-3 font-mono text-slate-300",children:t.mean}),e.jsx("td",{className:"p-3 font-mono text-slate-300",children:t.variance}),e.jsx("td",{className:"p-3 font-mono",children:e.jsx("span",{className:r("font-bold",Math.abs(parseFloat(t.corr))>=.85?"text-emerald-400":Math.abs(parseFloat(t.corr))>=.5?"text-indigo-300":"text-slate-500"),children:t.corr})}),e.jsx("td",{className:"p-3",children:e.jsx("span",{className:r("px-2 py-0.5 rounded text-[11px] font-semibold border",t.statusColor),children:t.relevance})})]},t.key))})]})}),e.jsxs("div",{className:"bg-slate-900/80 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("div",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:["Inspect Observation Vector x",e.jsx("sub",{children:"i"})," ∈ X:"]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Select Student:"}),e.jsx("select",{value:p,onChange:t=>_(t.target.value),className:"px-2.5 py-1 text-xs bg-slate-950 border border-slate-700 rounded-lg text-white font-medium focus:outline-none focus:border-cyan-400 cursor-pointer",children:T.map(t=>e.jsxs("option",{value:t.id,children:[t.name," (",t.institution,")"]},t.id))})]})]}),(()=>{const t=T.find(a=>a.id===p);return t?e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",children:[e.jsxs("div",{className:"p-2.5 rounded bg-slate-950 border border-slate-800/80",children:[e.jsx("div",{className:"text-[10px] text-slate-400",children:"Attendance"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-indigo-300",children:[t.attendance,"%"]})]}),e.jsxs("div",{className:"p-2.5 rounded bg-slate-950 border border-slate-800/80",children:[e.jsx("div",{className:"text-[10px] text-slate-400",children:"Internal Marks"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-indigo-300",children:[t.internalMarks,"/100"]})]}),e.jsxs("div",{className:"p-2.5 rounded bg-slate-950 border border-slate-800/80",children:[e.jsx("div",{className:"text-[10px] text-slate-400",children:"Study Hours/Wk"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-indigo-300",children:[t.studyHours," hrs"]})]}),e.jsxs("div",{className:"p-2.5 rounded bg-slate-950 border border-slate-800/80",children:[e.jsx("div",{className:"text-[10px] text-slate-400",children:"Semester Score (Target y)"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-emerald-400",children:[t.semesterScore,"%"]})]})]}):null})()]})]})}),o==="leakage"&&e.jsx("div",{className:"space-y-6 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-2xl border border-rose-500/30 space-y-5",children:[e.jsx("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsxs("h4",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"The Target Leakage Arena & Proxy Simulator"}),e.jsx("span",{className:r("text-xs px-2.5 py-0.5 rounded font-mono font-bold border",v.isLeakActive?"bg-rose-500/20 text-rose-300 border-rose-500/40 animate-pulse":"bg-emerald-500/20 text-emerald-300 border-emerald-500/40"),children:v.isLeakActive?"CRITICAL TARGET LEAKAGE ACTIVE ⚠":"CLEAN FEATURE GATING ✓"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Toggle candidate features to observe how contemporaneous proxies create near-perfect offline metrics that fail online."})]})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 gap-3",children:[{key:"attendance",label:"Attendance (%)",desc:"Pre-exam historical record"},{key:"internalMarks",label:"Internal Marks",desc:"Legitimate academic covariate"},{key:"studyHours",label:"Study Hours Weekly",desc:"Self-reported student behavior"},{key:"mockTests",label:"Mock Tests Solved",desc:"Practice exam preparation count"},{key:"commuteMins",label:"Commute Time (Mins)",desc:"Low-signal noise feature"},{key:"interviewCleared",label:"Interview Cleared (Flag)",desc:"⚠ Post-event target proxy!",isDangerous:!0}].map(t=>e.jsxs("button",{onClick:()=>U(a=>({...a,[t.key]:!a[t.key]})),className:r("p-3 rounded-xl border text-left transition-all cursor-pointer flex flex-col justify-between",b[t.key]?t.isDangerous?"bg-rose-950/60 border-rose-500 text-rose-200":"bg-indigo-950/60 border-indigo-500 text-indigo-200":"bg-slate-900/60 border-slate-800 text-slate-400 hover:border-slate-700"),children:[e.jsxs("div",{className:"flex justify-between items-center w-full",children:[e.jsx("span",{className:"text-xs font-bold",children:t.label}),e.jsx("span",{className:"text-xs font-mono font-bold",children:b[t.key]?"ENABLED":"OFF"})]}),e.jsx("span",{className:"text-[10px] text-slate-400 mt-1",children:t.desc})]},t.key))}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:["Offline Validation Score (R",e.jsx("sup",{children:"2"})," / Accuracy)"]}),e.jsxs("div",{className:r("text-2xl font-mono font-extrabold",v.isLeakActive?"text-rose-400":"text-emerald-400"),children:[(v.offlineR2*100).toFixed(1),"%"]}),e.jsx("div",{className:"text-xs text-slate-400 leading-relaxed",children:v.isLeakActive?"Unrealistically perfect score! The model learned the identity mapping from 'interview_cleared' to 'placement_status'.":"Honest empirical generalization score achieved through causal predictive features."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:"Live Production Generalization (True Accuracy)"}),e.jsxs("div",{className:r("text-2xl font-mono font-extrabold",v.isLeakActive?"text-rose-500":"text-cyan-400"),children:[(v.onlineExpectedAcc*100).toFixed(1),"%"]}),e.jsx("div",{className:"text-xs text-slate-400 leading-relaxed",children:v.isLeakActive?"Catastrophic collapse! In real-time production, 'interview_cleared' has not occurred yet, collapsing predictions to random guessing.":"Robust production stability: Model accurately identifies at-risk students before the semester concludes."})]})]})]})}),o==="loss_surface"&&e.jsx("div",{className:"space-y-6 animate-fadeIn",children:e.jsxs("div",{className:"bg-slate-950/70 p-5 rounded-2xl border border-emerald-500/30 space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("div",{children:[e.jsxs("h4",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"Conditional Expectation & Empirical Risk Minimization"}),e.jsxs("span",{className:"text-xs px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-mono",children:["R",e.jsx("sup",{children:"2"}),": ",(R.r2*100).toFixed(1),"% | MSE: ",R.mse.toFixed(2)]})]}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-400",children:["Adjust the linear hypothesis parameters w",e.jsx("sub",{children:"1"})," (Slope) and w",e.jsx("sub",{children:"0"})," (Intercept) to observe empirical loss minimization."]})]}),e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("button",{onClick:()=>{F(1.0041),X(2.11)},className:"px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg text-xs font-bold transition-all shadow-md cursor-pointer",children:"Auto-Fit OLS Optimal (w*)"})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"font-semibold text-slate-300",children:["Slope Parameter (w",e.jsx("sub",{children:"1"}),"):"]}),e.jsx("span",{className:"font-mono text-emerald-400 font-bold",children:N.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.40",max:"1.60",step:"0.01",value:N,onChange:t=>F(parseFloat(t.target.value)),className:"w-full accent-emerald-500 cursor-pointer"})]}),e.jsxs("div",{className:"bg-slate-900/80 p-3.5 rounded-xl border border-slate-800 space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"font-semibold text-slate-300",children:["Intercept Parameter (w",e.jsx("sub",{children:"0"}),"):"]}),e.jsx("span",{className:"font-mono text-indigo-400 font-bold",children:j.toFixed(2)})]}),e.jsx("input",{type:"range",min:"-20.0",max:"30.0",step:"0.5",value:j,onChange:t=>X(parseFloat(t.target.value)),className:"w-full accent-indigo-500 cursor-pointer"})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("div",{className:"text-xs font-bold uppercase tracking-wider text-slate-400",children:"Feature X (Internal Marks) vs Target y (Semester Score %):"}),e.jsx("div",{className:"h-48 w-full relative bg-slate-950 rounded-xl overflow-hidden border border-slate-800/80",children:e.jsxs("svg",{className:"w-full h-full",viewBox:"0 0 500 200",children:[e.jsx("line",{x1:"40",y1:"20",x2:"480",y2:"20",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"40",y1:"100",x2:"480",y2:"100",stroke:"#334155",strokeDasharray:"3 3"}),e.jsx("line",{x1:"40",y1:"170",x2:"480",y2:"170",stroke:"#475569"}),e.jsx("line",{x1:"40",y1:"20",x2:"40",y2:"170",stroke:"#475569"}),(()=>{const a=j+N*50,n=100,s=j+N*100,m=40+0/50*430,l=170-(a-50)/50*140,x=40+(n-50)/50*430,g=170-(s-50)/50*140;return e.jsx("line",{x1:m,y1:l,x2:x,y2:g,stroke:"#10b981",strokeWidth:"2.5"})})(),R.points.map(t=>{const a=40+(t.internalMarks-50)/50*430,n=170-(t.semesterScore-50)/50*140,s=170-(t.pred-50)/50*140;return e.jsxs("g",{children:[e.jsx("line",{x1:a,y1:n,x2:a,y2:s,stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"2 2"}),e.jsx("circle",{cx:a,cy:n,r:"4.5",fill:"#38bdf8",stroke:"#0284c7",strokeWidth:"1"})]},t.id)})]})}),e.jsxs("div",{className:"flex justify-between text-[11px] text-slate-400",children:[e.jsx("span",{children:"Internal: 50.0 Marks"}),e.jsxs("span",{className:"text-emerald-400 font-mono font-bold",children:["Hypothesis: y_hat = ",j.toFixed(2)," + ",N.toFixed(2)," × Internal"]}),e.jsx("span",{children:"Internal: 100.0 Marks"})]})]})]})})]}),e.jsxs("section",{id:"math",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Rigorous Mathematical Formulary"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Formal Foundations of Supervised Learning"}),e.jsx("p",{className:"text-sm text-slate-300 mt-1 max-w-4xl",children:"A comprehensive reference of the key equations governing feature space geometry, conditional expectation, loss formulations, and causality invariants."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-indigo-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"1. The Feature Space & Design Matrix"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-indigo-200 border border-indigo-900/40",children:"X = [\\mathbf{x}_1, \\mathbf{x}_2, \\dots, \\mathbf{x}_N]^T \\in \\mathbb{R}^{N \\times d}, \\quad \\mathbf{y} \\in \\mathcal{Y}^N"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Every instance is a real vector x",e.jsx("sub",{children:"i"})," ∈ &Ropf;",e.jsx("sup",{children:"d"}),". The collection of N observations forms the design matrix X, while targets form vector y in continuous &Ropf; or discrete {0, 1, ..., C-1}."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-cyan-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"2. The Bayes Optimal Regressor"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-cyan-200 border border-cyan-900/40",children:"f^*(mathbf{x}) = \\mathbb{E}[Y \\mid \\mathbf{X} = \\mathbf{x}] = \\int_{\\mathcal{Y}} y \\cdot P(y \\mid \\mathbf{x}) \\, dy"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Under squared error loss, the conditional expectation represents the theoretical best predictor. Any residual error Var(Y | X) is irreducible variance inherent to the phenomenon."})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-emerald-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"3. Empirical Risk Minimization (ERM)"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-emerald-200 border border-emerald-900/40",children:"\\min_{f \\in \\mathcal{H}} \\left\\{ \\frac{1}{N} \\sum_{i=1}^N \\mathcal{L}(f(\\mathbf{x}_i), y_i) + \\lambda \\Omega(f) \\right\\}"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Supervised algorithms approximate theoretical risk by minimizing average empirical loss over training pairs, augmented by a structural complexity penalty Ω(f) to avoid overfitting."})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-amber-500/20 space-y-3",children:[e.jsx("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"4. The Temporal Precedence Invariant"}),e.jsx("div",{className:"p-3 bg-slate-900/90 rounded-xl font-mono text-xs text-amber-200 border border-amber-900/40",children:"\\forall j \\in \\{1, \\dots, d\\}, \\quad \\text{timestamp}(x_{ij}) < \\text{timestamp}(y_i)"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"To eliminate target leakage, every feature must be generated strictly before the target outcome in physical time. Violating this invariant causes catastrophic offline-to-online collapse."})]})]})]}),e.jsxs("section",{id:"casestudies",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"West Bengal Regional Deployments"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Industrial Feature & Target Formulations"}),e.jsx("p",{className:"text-sm text-slate-300 mt-1 max-w-4xl",children:"Real-world deployments across academic analytics, commercial real estate, quick-commerce logistics, and clinical triage in West Bengal."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Barrackpore & Ichapur"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Academic Analytics"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"MAKAUT Semester & Placement Predictor"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Predicting university semester percentage (continuous y",e.jsx("sub",{children:"1"}),") and Tier-1 placement clearance (binary y",e.jsx("sub",{children:"2"}),') across 1,200 MCA students. An early prototype included "Drive Admit Card Issued" as a feature, achieving 99.8% offline accuracy due to target leakage. Removing post-admit card variables yielded an honest, production-stable R',e.jsx("sup",{children:"2"})," = 0.892."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"Salt Lake Sector V & New Town"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"PropTech Valuation"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Commercial Office Tower Lease Valuation"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'Valuing office spaces in New Town Action Area I. Developers inadvertently included "Security Deposit" in the feature matrix. Because Bengal commercial leases legally mandate a deposit equal to exactly 6 months of base rent, the model learned the trivial identity y = Deposit / 6. Purging deposit inputs restored honest valuation with MAPE of 6.2%.'})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Howrah & Shibpur"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800",children:"Quick-Commerce Logistics"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"10-Minute Dark Store Delivery ETA Engine"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'Predicting order delivery transit seconds across 20 dark stores. Developers inadvertently fed "Rider Cash Collection Timestamp" into features, making predictions impossible at customer checkout. Enforcing temporal feature gating restricted features to cart checkout time, lowering delivery variance by 24%.'})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Kolkata & Jadavpur"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"Clinical Emergency Triage"})]}),e.jsx("h4",{className:"text-base font-bold text-white",children:"Cardiopulmonary ICU Admission Triage"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:'Predicting 24-hour ICU admission requirements for acute patients. Features like "Intravenous Vasopressor Administered" leaked the outcome because vasopressors are only started in ICU shock. Restricting inputs to baseline vital signs raised early sepsis detection sensitivity by 28.4%.'})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/30",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Diagnostic Verification"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Topic 0 Diagnostic Assessment Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Answer all 5 multi-stage scenario questions to evaluate your engineering intuition."})]}),y&&e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-indigo-500/40",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-bold font-mono text-cyan-300",children:[P," / ",A.length]}),e.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300",children:P===5?"Distinction":P>=3?"Pass":"Review Needed"})]})]}),e.jsx("div",{className:"space-y-5",children:A.map(t=>{k[t.id];const a=k[t.id],n=a===t.correct;return e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 rounded-lg bg-indigo-900/60 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono",children:t.id}),e.jsx("div",{className:"text-sm font-semibold text-slate-200 leading-relaxed",children:t.scenario})]}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5 pl-9",children:t.options.map(s=>{const m=a===s.label;let l="bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700";return y?s.label===t.correct?l="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium":m&&!n&&(l="bg-rose-950/60 border-rose-500 text-rose-200"):m&&(l="bg-indigo-950/70 border-indigo-500 text-indigo-200 font-medium"),e.jsxs("button",{disabled:y,onClick:()=>V(t.id,s.label),className:r("w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer",l),children:[e.jsxs("span",{className:"font-mono font-bold shrink-0",children:[s.label,"."]}),e.jsx("span",{children:s.text})]},s.label)})}),y&&e.jsx("div",{className:"pl-9 pt-2",children:e.jsxs("div",{className:r("p-3 rounded-xl text-xs leading-relaxed border",n?"bg-emerald-950/30 border-emerald-800/40 text-emerald-300":"bg-rose-950/30 border-rose-800/40 text-rose-300"),children:[e.jsx("div",{className:"font-bold mb-1",children:n?"✓ Correct Analysis":`✗ Incorrect (Correct Answer: ${t.correct})`}),e.jsx("div",{className:"text-slate-400",children:t.explanation})]})})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-2",children:y?e.jsx("button",{onClick:()=>{B({}),O(!1)},className:"px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors",children:"Reset Assessment"}):e.jsx("button",{onClick:G,disabled:Object.keys(k).length<A.length,className:r("px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer",Object.keys(k).length===A.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:"Submit Diagnostic Assessment"})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-rose-400",children:"Production Vulnerabilities & Anti-Patterns"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Architecture Hazards in Feature-Target Definitions"}),e.jsx("p",{className:"text-sm text-slate-300 mt-1 max-w-4xl",children:"Critical production bugs that escape offline unit testing and trigger silent model collapse upon live deployment."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 1: Contemporaneous Target Leakage"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"}),' Passing features that are generated simultaneously with or after the target event occurs (e.g., "Interview Cleared" predicting "Placement Status").']}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," Artificially inflated offline test scores (R",e.jsx("sup",{children:"2"})," &approx; 1.0) that collapse to random guessing in live production when predicting prospective entities."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Enforce strict temporal gating: verify timestamp(x) < timestamp(y) for all feature columns."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 2: Identifier Memorization in Decision Trees"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"})," Retaining database primary keys, student registration numbers, or UUIDs inside feature matrix X."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," Tree models split on individual ID thresholds, memorizing training instances with 100% accuracy and failing completely on new unseen IDs."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Automatically drop all high-cardinality unique identifier columns during feature engineering."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 3: Leaking Target into Feature Imputation"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"})," Passing target column y into feature transformers like ",e.jsx("code",{className:"text-rose-300 font-mono",children:"SimpleImputer()"})," or KNN imputers."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," Missing feature entries are reconstructed using ground truth labels, creating circular target leakage."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Fit transformers strictly on X_train. Never pass target labels into feature transformation pipelines."]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-5 rounded-2xl border border-rose-500/20 space-y-2.5",children:[e.jsx("div",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Pitfall 4: Metric Mismatch on Ordinal Targets"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"The Bug:"})," Treating multi-class ordered grades (A, B, C, D, F) as nominal categorical classes under 0-1 loss."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{className:"text-slate-200",children:"Consequence:"})," Misclassifying an 'A' student as 'F' receives the exact same penalty as misclassifying 'A' as 'B', discarding distance semantics."]}),e.jsxs("p",{className:"text-[11px] text-emerald-400 bg-emerald-950/30 p-2 rounded border border-emerald-800/30",children:[e.jsx("strong",{children:"Production Fix:"})," Deploy ordinal regression or continuous score modeling to preserve metric distance ordering."]})]})]})]}),e.jsxs("section",{id:"loaders",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Verified Python Lab & Study Notes"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Executable Laboratory & Comprehensive Handbook"})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("button",{onClick:()=>Y("lab"),className:r("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",E==="lab"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"bg-slate-800 text-slate-400 hover:text-white"),children:"Python Lab Code"}),e.jsx("button",{onClick:()=>Y("notes"),className:r("px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer",E==="notes"?"bg-cyan-600 text-white shadow-md shadow-cyan-600/30":"bg-slate-800 text-slate-400 hover:text-white"),children:"Study Notes (Handbook)"})]})]}),E==="lab"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"meaning_of_features_and_target_lab.py"})," (Exit Code 0 Verified)"]}),e.jsx("span",{children:"Pure Python Benchmark"})]}),e.jsx(K,{code:$,fileName:"meaning_of_features_and_target_lab.py",title:"Meaning of Features and Target Laboratory"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"topic0_note.txt"})]}),e.jsx("span",{children:"275 Lines of Comprehensive Academic Notes"})]}),e.jsx(J,{content:ee,title:"Topic 0 Academic Handbook & Study Notes"})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8",children:[e.jsx(Q,{title:"Topic 0: MAKAUT Master Viva & Technical Interview Questions",subtitle:"30 Graded Analytical Questions with Comprehensive Theoretical Rationales",questions:te}),e.jsx(Z,{})]})]})};export{he as default};
