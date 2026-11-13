import{b as a,j as e,bl as i}from"./vendor-react-core-B-R9HE-Z.js";import{P as W}from"./PythonFileLoader-DZ61U3Y_.js";import{F as H}from"./FAQTemplate-16IfroqC.js";import{P as X}from"./PlainTextPrint-C6NaUtnE.js";import{T as K}from"./TeacherSukantaHui-1kTygSSH.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-Bgr6sRjK.js";const V=`"""
=============================================================================
TOPIC 7: CLASSIFICATION AND REGRESSION OVERVIEW
Module: Introduction to Machine Learning (Slug: 001_001_introduction-to-machine-learning)
Academic Practical Laboratory & Interactive Simulation Engine
Author: Sukanta Hui | Senior Academic Mentor | Coder & AccoTax
Location: Barrackpore, West Bengal, India
Course Code: BCAC701B / MCA / B.Tech Computer Science
=============================================================================

This laboratory engine demonstrates:
1. Fundamental Target Distinction: Continuous Target Space y in R vs Discrete Class Labels y in {0, 1}.
2. Task A (Binary Classification): Loan Default Risk Modeling in Kolkata Banking Sector.
   - Computing Decision Thresholds (theta = 0.30, 0.50, 0.70).
   - Generating Full Confusion Matrix: TP, FP, TN, FN.
   - Calculating Precision, Recall (Sensitivity), Specificity, and F1-Score.
3. Task B (Continuous Regression): Apartment Property Valuation in Salt Lake & Rajarhat.
   - Fitting Ordinary Least Squares (OLS) Linear Regression.
   - Computing MSE, RMSE, MAE, and R^2 Coefficient of Determination.
   - Outlier Stress-Test: Demonstrating why RMSE spikes on outlier mansions while MAE remains stable.
4. Comprehensive Scorecard Comparison: Knowing when to pick which scorecard in production.
=============================================================================
"""

import math
import random
from typing import List, Tuple, Dict, Any

# =============================================================================
# PART 1: BINARY CLASSIFICATION PIPELINE (LOAN DEFAULT PREDICTION)
# =============================================================================

class ClassificationPipeline:
    """
    Simulates a binary classification engine for bank loan default risk.
    Features:
      x1: Annual Income (in Lakhs INR, normalized)
      x2: Credit CIBIL Score (normalized 0 to 1)
      x3: Existing Debt-to-Income Ratio (0 to 1)
    Target:
      y: 1 = Defaulted, 0 = Fully Paid
    """
    def __init__(self):
        # Learned weights from empirical credit default risk models
        self.weights = [-0.65, -1.20, 1.45]
        self.bias = 0.35

    def generate_synthetic_cohort(self, n: int = 50, seed: int = 42) -> List[Dict[str, Any]]:
        random.seed(seed)
        cohort = []
        for i in range(n):
            income = round(random.uniform(3.0, 30.0), 2)  # Lakhs
            cibil = random.randint(550, 850)
            dti = round(random.uniform(0.10, 0.65), 2)
            
            # Normalize features for sigmoid evaluation
            x1 = (income - 3.0) / 27.0
            x2 = (cibil - 550) / 300.0
            x3 = dti
            
            # True ground truth generation with slight stochastic noise
            z = (self.weights[0] * x1) + (self.weights[1] * x2) + (self.weights[2] * x3) + self.bias
            true_prob = 1.0 / (1.0 + math.exp(-z))
            actual = 1 if true_prob >= 0.45 else 0
            
            cohort.append({
                "id": f"APP-{i+1:03d}",
                "income_lakhs": income,
                "cibil": cibil,
                "dti": dti,
                "x1": x1,
                "x2": x2,
                "x3": x3,
                "actual": actual
            })
        return cohort

    def predict_probability(self, x1: float, x2: float, x3: float) -> float:
        z = (self.weights[0] * x1) + (self.weights[1] * x2) + (self.weights[2] * x3) + self.bias
        return 1.0 / (1.0 + math.exp(-max(min(z, 20.0), -20.0)))

    def evaluate_threshold(self, cohort: List[Dict[str, Any]], threshold: float = 0.50) -> Dict[str, Any]:
        tp, fp, tn, fn = 0, 0, 0, 0
        for sample in cohort:
            prob = self.predict_probability(sample["x1"], sample["x2"], sample["x3"])
            pred = 1 if prob >= threshold else 0
            if pred == 1 and sample["actual"] == 1:
                tp += 1
            elif pred == 1 and sample["actual"] == 0:
                fp += 1
            elif pred == 0 and sample["actual"] == 0:
                tn += 1
            elif pred == 0 and sample["actual"] == 1:
                fn += 1
                
        total = len(cohort)
        accuracy = (tp + tn) / total
        precision = tp / max(1, tp + fp)
        recall = tp / max(1, tp + fn)
        specificity = tn / max(1, tn + fp)
        f1 = (2 * precision * recall) / max(1e-9, precision + recall)
        
        return {
            "threshold": threshold,
            "tp": tp, "fp": fp, "tn": tn, "fn": fn,
            "accuracy": round(accuracy * 100, 2),
            "precision": round(precision * 100, 2),
            "recall": round(recall * 100, 2),
            "specificity": round(specificity * 100, 2),
            "f1_score": round(f1 * 100, 2)
        }


# =============================================================================
# PART 2: CONTINUOUS REGRESSION PIPELINE (FLAT VALUATION IN KOLKATA)
# =============================================================================

class RegressionPipeline:
    """
    Simulates a continuous regression engine for real estate valuation.
    Feature:
      x: Carpet Area in square feet
    Target:
      y: Market Price in Lakhs INR (Continuous real number)
    """
    def __init__(self):
        # Base true relationship: Price = 0.045 * Area + 15.0 Lakhs
        self.slope = 0.045
        self.intercept = 15.0

    def generate_synthetic_housing(self, n: int = 50, seed: int = 42) -> List[Dict[str, Any]]:
        random.seed(seed)
        housing = []
        for i in range(n):
            area = random.randint(600, 2500)
            noise = random.gauss(0.0, 4.0)
            true_price = round((self.slope * area) + self.intercept + noise, 2)
            housing.append({
                "id": f"PROP-{i+1:03d}",
                "area_sqft": area,
                "actual_price": max(15.0, true_price)
            })
        return housing

    def fit_and_evaluate(self, housing: List[Dict[str, Any]]) -> Dict[str, Any]:
        n = len(housing)
        actuals = [h["actual_price"] for h in housing]
        areas = [h["area_sqft"] for h in housing]
        
        # Closed-form Ordinary Least Squares (OLS)
        mean_x = sum(areas) / n
        mean_y = sum(actuals) / n
        
        num = sum((areas[i] - mean_x) * (actuals[i] - mean_y) for i in range(n))
        den = sum((areas[i] - mean_x)**2 for i in range(n))
        w = num / max(1e-9, den)
        b = mean_y - (w * mean_x)
        
        predictions = [(w * a) + b for a in areas]
        
        # Calculate Regression Scorecards
        mae = sum(abs(actuals[i] - predictions[i]) for i in range(n)) / n
        mse = sum((actuals[i] - predictions[i])**2 for i in range(n)) / n
        rmse = math.sqrt(mse)
        
        ss_tot = sum((actuals[i] - mean_y)**2 for i in range(n))
        ss_res = sum((actuals[i] - predictions[i])**2 for i in range(n))
        r2 = 1.0 - (ss_res / max(1e-9, ss_tot))
        
        return {
            "w": round(w, 5),
            "b": round(b, 2),
            "mae": round(mae, 2),
            "mse": round(mse, 2),
            "rmse": round(rmse, 2),
            "r2_score": round(r2, 4),
            "sample_count": n
        }

    def inject_outliers_and_reevaluate(self, housing: List[Dict[str, Any]]) -> Dict[str, Any]:
        """
        Injects 3 luxury heritage mansions priced 5x above market to demonstrate
        how RMSE explodes while MAE remains relatively stable.
        """
        corrupted = [dict(h) for h in housing]
        # Infiltrate 3 extreme outliers
        corrupted[0]["actual_price"] = 550.0  # Normal: ~60 Lakhs
        corrupted[1]["actual_price"] = 620.0  # Normal: ~80 Lakhs
        corrupted[2]["actual_price"] = 490.0  # Normal: ~50 Lakhs
        
        return self.fit_and_evaluate(corrupted)


# =============================================================================
# PART 3: MASTER EXPERIMENT RUNNER & CONSOLE DEMONSTRATION
# =============================================================================

def run_laboratory_experiment():
    print("=" * 85)
    print("CODER & ACCOTAX - MACHINE LEARNING ADVANCED RESEARCH LABORATORY")
    print("TOPIC 7: CLASSIFICATION AND REGRESSION OVERVIEW")
    print("Mentor: Sukanta Hui | Barrackpore, West Bengal, India | Course: BCAC701B")
    print("=" * 85)

    # -------------------------------------------------------------------------
    # 1. TASK A: BINARY CLASSIFICATION
    # -------------------------------------------------------------------------
    print("\\n[PHASE 1: BINARY CLASSIFICATION — BANK LOAN DEFAULT PREDICTION]")
    clf_engine = ClassificationPipeline()
    cohort = clf_engine.generate_synthetic_cohort(n=50, seed=42)
    
    defaults_count = sum(1 for c in cohort if c["actual"] == 1)
    print(f"Cohort Size: {len(cohort)} applicants | Actual Defaults: {defaults_count} | Paid Clean: {len(cohort) - defaults_count}")
    print("-" * 85)
    print(f"{'Decision Threshold (θ)':<24} | {'Accuracy':<10} | {'Precision':<11} | {'Recall':<10} | {'F1-Score':<10} | {'TP/FP/TN/FN'}")
    print("-" * 85)
    
    for thresh in [0.30, 0.50, 0.70]:
        res = clf_engine.evaluate_threshold(cohort, threshold=thresh)
        matrix_str = f"{res['tp']}/{res['fp']}/{res['tn']}/{res['fn']}"
        print(f"θ = {thresh:.2f} ({thresh*100:>2.0f}% Risk Cutoff)   | {res['accuracy']:>6.2f}%   | {res['precision']:>7.2f}%   | {res['recall']:>6.2f}%   | {res['f1_score']:>6.2f}%   | {matrix_str:<12}")

    print("\\nTeacher Sukanta Hui's Insight on Threshold Tuning:")
    print(" -> Lowering threshold to θ=0.30 boosts Recall (catches high-risk borrowers) but reduces Precision.")
    print(" -> Raising threshold to θ=0.70 boosts Precision (fewer false default alarms) but misses defaults.")

    # -------------------------------------------------------------------------
    # 2. TASK B: CONTINUOUS REGRESSION
    # -------------------------------------------------------------------------
    print("\\n" + "=" * 85)
    print("[PHASE 2: CONTINUOUS REGRESSION — SALT LAKE PROPERTY VALUATION]")
    reg_engine = RegressionPipeline()
    housing = reg_engine.generate_synthetic_housing(n=50, seed=42)
    clean_eval = reg_engine.fit_and_evaluate(housing)
    outlier_eval = reg_engine.inject_outliers_and_reevaluate(housing)

    print(f"Clean Dataset OLS Equation: Price = ({clean_eval['w']:.4f} × Area) + ₹{clean_eval['b']:.2f} Lakhs")
    print("-" * 85)
    print(f"{'Dataset Scenario':<32} | {'MAE (Linear)':<14} | {'RMSE (Squared)':<16} | {'R² Score':<10}")
    print("-" * 85)
    print(f"{'1. Clean Apartment Registry':<32} | ₹{clean_eval['mae']:>5.2f} Lakhs   | ₹{clean_eval['rmse']:>6.2f} Lakhs     | {clean_eval['r2_score']:>6.4f}")
    print(f"{'2. Infiltrated Outlier Mansions':<32} | ₹{outlier_eval['mae']:>5.2f} Lakhs   | ₹{outlier_eval['rmse']:>6.2f} Lakhs     | {outlier_eval['r2_score']:>6.4f}")
    print("-" * 85)

    print("\\nTeacher Sukanta Hui's Insight on Regression Scorecards:")
    print(f" -> When 3 extreme mansions were added, MAE shifted modestly from ₹{clean_eval['mae']}L to ₹{outlier_eval['mae']}L.")
    print(f" -> Meanwhile, RMSE exploded from ₹{clean_eval['rmse']}L to ₹{outlier_eval['rmse']}L because squared errors penalize outliers heavily!")

    print("\\n" + "=" * 85)
    print("SUMMARY COMPARISON TAXONOMY:")
    print("  * Classification: Discrete outputs Y ∈ {0, 1, ..., C-1}. Scorecards: Accuracy, Precision, Recall, F1, ROC-AUC.")
    print("  * Regression:     Continuous outputs Y ∈ R. Scorecards: MAE (real units), RMSE (penalizes blunders), R² (variance captured).")
    print("=" * 85)


# =============================================================================
# PART 4: PRODUCTION SCIKIT-LEARN REFERENCE TEMPLATE
# =============================================================================
"""
# Ready-to-copy Scikit-Learn Template:
from sklearn.linear_model import LogisticRegression, LinearRegression
from sklearn.metrics import confusion_matrix, precision_recall_fscore_support, mean_squared_error, r2_score

# 1. Classification
clf = LogisticRegression()
clf.fit(X_train, y_train_discrete)
y_pred_discrete = clf.predict(X_test)
cm = confusion_matrix(y_test_discrete, y_pred_discrete)

# 2. Regression
reg = LinearRegression()
reg.fit(X_train, y_train_continuous)
y_pred_cont = reg.predict(X_test)
mse = mean_squared_error(y_test_cont, y_pred_cont)
r2 = r2_score(y_test_cont, y_pred_cont)
"""

if __name__ == "__main__":
    run_laboratory_experiment()
`,G=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Introduction to Machine Learning (Slug: 001_001_introduction-to-machine-learning)
Topic 7: Classification and Regression Overview
Author: Sukanta Hui | Senior Academic Mentor | Coder & AccoTax
Location: Barrackpore, Kolkata, West Bengal, India
=============================================================================

-----------------------------------------------------------------------------
1. EXECUTIVE DEFINITION & TARGET TAXONOMY
-----------------------------------------------------------------------------
In Supervised Learning, every training instance comprises an input feature vector
x in R^d paired with a ground-truth supervision target y.
The mathematical nature of the output space Y defines the fundamental fork:

A. REGRESSION (Continuous Target Space):
   * Target Space: Y is a subset of R (Continuous real numbers on an unbroken scale).
   * Objective: Learn a continuous mapping function h: X -> R that minimizes the
     distance between predicted scalars ŷ and actual values y.
   * Real-World Examples:
     - Predicting flat sales prices in Kolkata Salt Lake (e.g., ₹68.5 Lakhs).
     - Forecasting daily temperature in Barrackpore (e.g., 34.2 °C).
     - Estimating remaining battery life or stock price indices.

B. CLASSIFICATION (Discrete Target Space):
   * Target Space: Y = {C_0, C_1, ..., C_{k-1}} (Discrete categorical classes).
   * Objective: Learn a decision boundary that partitions the feature space into
     mutually exclusive decision regions or outputs class posterior probabilities P(Y=c|X).
   * Real-World Examples:
     - Binary: Bank Loan Default (1 = Default, 0 = Clean).
     - Multiclass: Disease diagnosis (0 = Normal, 1 = Viral Pneumonia, 2 = Bacterial Pneumonia).
     - Multilabel: Fashion tagging (Saree, Silk, Embroidered simultaneously).

-----------------------------------------------------------------------------
2. COMPREHENSIVE REGRESSION EVALUATION SCORECARDS
-----------------------------------------------------------------------------
Unlike classification where predictions are strictly right or wrong, regression
predictions are evaluated by the magnitude and distribution of residuals e_i = (y_i - ŷ_i).

1. Mean Absolute Error (MAE):
   * Formula: MAE = (1/N) * ∑_{i=1}^N |y_i - ŷ_i|
   * Properties: Evaluated in the exact same physical units as target y.
     Robust to extreme outlier blunders because errors grow linearly.

2. Mean Squared Error (MSE):
   * Formula: MSE = (1/N) * ∑_{i=1}^N (y_i - ŷ_i)^2
   * Properties: Differentiable everywhere; standard optimization loss for OLS.
     Units are squared (e.g., Lakhs²), making direct business interpretation difficult.

3. Root Mean Squared Error (RMSE):
   * Formula: RMSE = √[ (1/N) * ∑_{i=1}^N (y_i - ŷ_i)^2 ]
   * Properties: Restores original physical units. Heavily penalizes large outlier blunders
     due to the quadratic penalty inside the square root.

4. Coefficient of Determination (R² Score):
   * Formula: R² = 1 - [ SS_res / SS_tot ] = 1 - [ ∑(y_i - ŷ_i)² / ∑(y_i - ȳ)² ]
   * Interpretation:
     - R² = 1.0: Perfect model explaining 100% of target variance.
     - R² = 0.0: Baseline model performing no better than simply guessing target mean ȳ.
     - R² < 0.0: Model performs worse than the simple horizontal mean line!

-----------------------------------------------------------------------------
3. COMPREHENSIVE CLASSIFICATION SCORECARDS & CONFUSION MATRIX
-----------------------------------------------------------------------------
For binary classification where Y in {0, 1}, predictions at decision threshold θ (default 0.50)
are sorted into a 2x2 Confusion Matrix:

                        Actual Positive (1)       Actual Negative (0)
  Predicted Positive (1)    True Positive (TP)        False Positive (FP - Type I Error)
  Predicted Negative (0)    False Negative (FN)       True Negative (TN - Type II Error)

Core Metrics:
1. Classification Accuracy = (TP + TN) / (TP + FP + TN + FN)
   * HAZARD: In severe class imbalance (e.g., 99.9% negative transactions), a dummy
     model predicting 0 for all instances achieves 99.9% accuracy while catching 0 frauds!

2. Precision (Positive Predictive Value) = TP / (TP + FP)
   * Meaning: "Of all instances flagged as positive, how many were genuine?"
   * Critical Use-Case: Spam filtering, criminal accusations (where false alarms FP are costly).

3. Recall / Sensitivity (True Positive Rate) = TP / (TP + FN)
   * Meaning: "Of all actual positive instances in the population, how many did we catch?"
   * Critical Use-Case: Cancer screening, earthquake early warning (where missed detections FN are fatal).

4. Specificity (True Negative Rate) = TN / (TN + FP)
   * Meaning: "Of all actual healthy/negative cases, how many were correctly left alone?"

5. F1-Score (Harmonic Mean of Precision & Recall) = 2 * (Precision * Recall) / (Precision + Recall)
   * Uses harmonic mean rather than arithmetic mean so that if either Precision or Recall
     approaches zero, the F1-Score collapses to zero.

6. ROC-AUC vs PR-AUC:
   * ROC Curve: Plots TPR vs FPR. Excellent when positive and negative classes are balanced.
   * PR Curve: Plots Precision vs Recall. Essential for imbalanced datasets because it ignores TN.

-----------------------------------------------------------------------------
4. DECISION THRESHOLD (θ) TUNING DYNAMICS
-----------------------------------------------------------------------------
A probabilistic classifier computes P(Y = 1 | x). The discrete decision is:
  ŷ = 1  if  P(Y = 1 | x) >= θ  else  0

* Decreasing θ (e.g., θ = 0.20):
  - Model becomes aggressive and triggers positive alarms easily.
  - Recall increases toward 100% (catches almost all positives).
  - Precision drops (generates more False Positives).
  - Suitable for: ICU medical monitors, airport security contraband screening.

* Increasing θ (e.g., θ = 0.80):
  - Model becomes conservative and only flags positive when overwhelmingly certain.
  - Precision increases toward 100% (virtually zero false alarms).
  - Recall drops (misses borderline positives).
  - Suitable for: Automated account bans, high-value algorithmic stock execution.

-----------------------------------------------------------------------------
5. MULTICLASS VS MULTILABEL ARCHITECTURES
-----------------------------------------------------------------------------
* Multiclass Classification:
  - Each instance belongs to exactly ONE mutually exclusive class among K classes.
  - Final layer: Softmax activation function ∑_{k=1}^K σ(z)_k = 1.0.
  - Loss function: Categorical Cross-Entropy.

* Multilabel Classification:
  - An instance may simultaneously possess zero, one, or multiple tags.
  - Final layer: K independent Sigmoid activations σ(z_k) in [0, 1].
  - Loss function: Sum of independent Binary Cross-Entropy losses.

-----------------------------------------------------------------------------
6. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------
Case 1: Bank Credit Default Screening (Kolkata Banking Sector)
  * Problem: Predict if a loan applicant will default on repayments.
  * Task: Binary Classification.
  * Decision: Setting threshold θ = 0.35 maximized recall on risky borrowers,
    reducing non-performing assets (NPA) by ₹14 Crores.

Case 2: Salt Lake City Residential Real Estate Pricing
  * Problem: Predict property resale valuation based on carpet area, floor, and metro distance.
  * Task: Continuous Regression.
  * Metric: Evaluated using MAE (₹2.4 Lakhs typical error for buyers) alongside
    RMSE to detect speculative luxury penthouse anomalies.

-----------------------------------------------------------------------------
7. SUKANTA HUI'S EXAMINATION REVISION CHECKLIST
-----------------------------------------------------------------------------
[ ] State the mathematical difference between Regression (y in R) and Classification (y in discrete set).
[ ] Write down formulas for MAE, MSE, RMSE, and R² Score.
[ ] Explain why RMSE is heavily distorted by extreme outliers while MAE is robust.
[ ] Construct a 2x2 Confusion Matrix and derive Precision, Recall, Specificity, and F1-Score.
[ ] Explain the Precision-Recall tradeoff when adjusting the decision probability threshold θ.
[ ] Distinguish between Multiclass (Softmax, mutually exclusive) and Multilabel (independent Sigmoids).
=============================================================================
`,Y=[{id:1,question:"What is the primary distinguishing factor between Classification and Regression tasks?",shortAnswer:"Classification outputs discrete categorical class labels y ∈ {0, 1, ..., K-1}; Regression outputs continuous numerical real values y ∈ ℝ.",explanation:"In supervised machine learning, the nature of the target variable y dictates the problem type. Predicting whether an email is Spam or Ham (discrete) is Classification. Predicting the market sale price of a house in ₹ Lakhs (continuous) is Regression.",hint:"Discrete category buckets vs continuous numerical scale.",level:"Basic",codeExample:`# Classification: y in {'Cat', 'Dog'} or {0, 1}
# Regression: y in [0.0, +infinity) e.g., 42.50 Lakhs`},{id:2,question:"Which evaluation metrics are strictly tailored for Regression models?",shortAnswer:"Mean Squared Error (MSE), Root Mean Squared Error (RMSE), Mean Absolute Error (MAE), and Coefficient of Determination (R² Score).",explanation:"Regression metrics quantify the continuous residual distance between true values y_i and predictions y_hat_i: e_i = y_i - y_hat_i. Classification metrics (such as Accuracy, Precision, Recall, F1) evaluate category confusion tables and cannot be computed on continuous residuals.",hint:"Residual difference metrics vs discrete classification confusion matrices.",level:"Basic",codeExample:`from sklearn.metrics import mean_squared_error, mean_absolute_error, r2_score
mse = mean_squared_error(y_true, y_pred)
r2 = r2_score(y_true, y_pred)`},{id:3,question:"How does Mean Absolute Error (MAE) differ from Root Mean Squared Error (RMSE) in its sensitivity to outliers?",shortAnswer:"MAE weights all residuals linearly (|y - y_hat|); RMSE squares residuals ((y - y_hat)^2) before averaging, penalizing large outlier errors heavily.",explanation:"Because RMSE squares the error terms before taking the square root, a single huge prediction error (e.g. error of 50) inflates RMSE dramatically (50^2 = 2500). MAE is more robust to extreme anomalies and represents the median-like expected error.",hint:"L1 linear penalty (robust) vs L2 quadratic penalty (outlier-sensitive).",level:"Moderate",codeExample:`mae = np.mean(np.abs(y_true - y_pred))
rmse = np.sqrt(np.mean((y_true - y_pred) ** 2))`},{id:4,question:"What does an R² (Coefficient of Determination) Score of 0.85 mathematically represent?",shortAnswer:"85% of the total variance in the target variable y is explained by the regression model's input features.",explanation:"R² = 1 - (SS_res / SS_tot) = 1 - [ ∑ (y_i - y_hat_i)^2 / ∑ (y_i - y_bar)^2 ]. An R² of 1.0 indicates perfect prediction; 0.0 indicates performance identical to predicting the constant mean y_bar; negative R² means the model performs worse than the simple baseline mean.",hint:"Proportion of total target variance explained by the hypothesis function.",level:"Moderate",codeExample:`# R2 = 1 - (Residual Sum of Squares / Total Sum of Squares)
r2 = 1.0 - (np.sum((y - y_pred)**2) / np.sum((y - np.mean(y))**2))`},{id:5,question:"What is the difference between Binary Classification, Multi-class Classification, and Multi-label Classification?",shortAnswer:"Binary: 2 mutually exclusive classes; Multi-class: >2 mutually exclusive classes (1 chosen); Multi-label: multiple non-exclusive tags assigned simultaneously.",explanation:"Binary: Pass / Fail (0 or 1). Multi-class: Digit recognition (0 to 9, exactly one digit per image). Multi-label: Article tagging (a single article can be simultaneously tagged 'Technology', 'Finance', and 'AI').",hint:"2 choices vs 1 of N choices vs any combination of N tags.",level:"Moderate",codeExample:`# Binary: y = 1
# Multi-class: y = 4 (out of 0-9)
# Multi-label: y = [1, 0, 1, 1, 0] (multiple active tags)`},{id:6,question:"Why is Logistic Regression classified as a Classification algorithm despite having 'Regression' in its name?",shortAnswer:"It computes a continuous linear regression score w^T x + b (log-odds), but squashes it through a sigmoid function to classify discrete categories.",explanation:"Internally, Logistic Regression performs linear regression on the log-odds (logit): ln(p / (1-p)) = w^T x + b. The sigmoid transformation maps this continuous logit to a class probability P(y=1|x), and a threshold (e.g. 0.5) assigns the discrete class label.",hint:"Linear regression on log-odds thresholded for discrete class assignment.",level:"Basic",codeExample:`from sklearn.linear_model import LogisticRegression
clf = LogisticRegression().fit(X, y_binary)`},{id:7,question:"What is the Decision Threshold in binary classification, and how does adjusting it affect the Precision-Recall trade-off?",shortAnswer:"The probability cutoff (default 0.5) to assign positive class; raising threshold increases Precision but lowers Recall.",explanation:"If we predict positive when P(y=1|x) ≥ θ: raising θ to 0.8 requires higher certainty, reducing false alarms (higher Precision) but missing borderline positive cases (lower Recall). Lowering θ to 0.2 catches more positive cases (higher Recall) at the cost of more false positives (lower Precision).",hint:"High threshold = conservative/precise; Low threshold = aggressive/sensitive.",level:"Moderate",codeExample:`# Custom thresholding
y_pred_custom = (model.predict_proba(X_test)[:, 1] >= 0.7).astype(int)`},{id:8,question:"What is the difference between One-vs-Rest (OvR) and One-vs-One (OvO) multi-class strategies?",shortAnswer:"OvR trains K binary classifiers (each class vs all others); OvO trains K*(K-1)/2 binary classifiers (one for every pairwise combination).",explanation:"For K=4 classes: OvR trains 4 classifiers (C1 vs not-C1, C2 vs not-C2, etc.), choosing the class with highest output probability. OvO trains 4*3/2 = 6 pairwise classifiers (C1 vs C2, C1 vs C3, etc.), taking a majority vote.",hint:"K classifiers (one vs rest) vs K*(K-1)/2 pairwise classifiers.",level:"Moderate",codeExample:`from sklearn.multiclass import OneVsRestClassifier, OneVsOneClassifier
ovr = OneVsRestClassifier(LogisticRegression())
ovo = OneVsOneClassifier(SVC())`},{id:9,question:"What is Mean Absolute Percentage Error (MAPE) and what is its primary limitation in regression?",shortAnswer:"MAPE measures average percentage error: (100%/N) ∑ |(y - y_hat)/y|; it is undefined or explodes when actual target y is 0 or near-zero.",explanation:"MAPE is intuitive for business stakeholders (e.g. 'our sales forecast has an average 5% error'). However, dividing by y_i causes division-by-zero errors when y=0, and heavily penalizes over-predictions more than under-predictions.",hint:"Scale-free percentage error metric; fails when true value equals zero.",level:"Moderate",codeExample:`def mape(y_true, y_pred):
    return np.mean(np.abs((y_true - y_pred) / (y_true + 1e-10))) * 100`},{id:10,question:"What is Log-Cosh loss in regression, and why is it considered a smooth blend of MSE and MAE?",shortAnswer:"L(y, y_hat) = ln(cosh(y_hat - y)); it acts like MSE for small errors and like MAE for large errors, with continuous derivatives everywhere.",explanation:"For small residuals |e| << 1, log(cosh(e)) ≈ e^2 / 2 (quadratic like MSE). For large residuals |e| >> 1, log(cosh(e)) ≈ |e| - ln(2) (linear like MAE). This makes it twice differentiable everywhere and robust to outliers.",hint:"Smoothly transitions from quadratic (MSE) near zero to linear (MAE) for large errors.",level:"Expert",codeExample:`# Log-Cosh Loss
def log_cosh_loss(y_true, y_pred):
    return np.mean(np.log(np.cosh(y_pred - y_true)))`},{id:11,question:"What is Huber Loss in regression, and what role does its hyperparameter δ (delta) play?",shortAnswer:"Quadratic error for |y - y_hat| ≤ δ, and linear error for |y - y_hat| > δ; δ defines the threshold where outlier robustness begins.",explanation:"Huber loss combines the differentiability of MSE for small residuals with the outlier robustness of MAE for large residuals: L_δ(e) = 0.5 e^2 if |e| ≤ δ, else δ (|e| - 0.5 δ). Delta controls the boundary between normal variation and outlier penalties.",hint:"Piecewise loss balancing MSE precision and MAE outlier resistance.",level:"Expert",codeExample:`from sklearn.linear_model import HuberRegressor
huber = HuberRegressor(epsilon=1.35).fit(X, y)`},{id:12,question:"What is the Precision-Recall (PR) Curve, and why is it preferred over ROC curves for highly imbalanced classification?",shortAnswer:"PR curve plots Precision vs Recall; it focuses solely on the minority positive class without being inflated by a large number of True Negatives.",explanation:"ROC curve uses FPR = FP / (FP + TN). When TN is in the millions (e.g. ad click prediction), huge changes in FP barely move FPR, making ROC look misleadingly optimistic. PR curves directly expose false positives through the Precision denominator (TP + FP).",hint:"PR curves ignore overwhelming True Negative counts in rare-event detection.",level:"Moderate",codeExample:`from sklearn.metrics import precision_recall_curve, average_precision_score
prec, rec, _ = precision_recall_curve(y_test, y_probs)
pr_auc = average_precision_score(y_test, y_probs)`},{id:13,question:"What is the Cohen's Kappa score in classification evaluation?",shortAnswer:"A metric that measures inter-rater agreement between predictions and ground truth, adjusted for agreement occurring purely by chance.",explanation:"Kappa = (p_o - p_e) / (1 - p_e), where p_o is observed accuracy and p_e is expected accuracy under random chance. A Kappa of 1.0 means complete agreement; 0.0 means agreement no better than random guessing; <0 means worse than chance.",hint:"Accuracy normalized against random chance agreement.",level:"Moderate",codeExample:`from sklearn.metrics import cohen_kappa_score
kappa = cohen_kappa_score(y_true, y_pred)`},{id:14,question:"How does Polynomial Regression extend linear regression to model non-linear relationships?",shortAnswer:"By creating polynomial and interaction feature powers (e.g., x_1^2, x_1 x_2) while keeping the model linear in its parameter weights w.",explanation:"Polynomial regression transforms feature vector x = [x_1] into [1, x_1, x_1^2, ..., x_1^d]. The model equation y = w_0 + w_1 x_1 + w_2 x_1^2 + ... remains linear with respect to parameters w, allowing standard Ordinary Least Squares (OLS) closed-form solutions.",hint:"Feature space power transformations while maintaining parameter linearity.",level:"Basic",codeExample:`from sklearn.preprocessing import PolynomialFeatures
from sklearn.pipeline import make_pipeline
poly_reg = make_pipeline(PolynomialFeatures(degree=3), LinearRegression())
poly_reg.fit(X, y)`},{id:15,question:"What is Quantile Regression and when is it preferred over ordinary least squares mean regression?",shortAnswer:"It models conditional quantiles (e.g. 10th, 50th median, 90th percentile) of the target distribution instead of just the conditional mean.",explanation:"Standard OLS predicts E[Y|X]. Quantile regression minimizes the pinball loss to predict specific percentiles (e.g. estimating the 95th percentile peak electricity demand or 10th percentile lowest crop yield), providing complete prediction intervals.",hint:"Predicting conditional percentiles/quantiles instead of conditional average.",level:"Expert",codeExample:`from sklearn.linear_model import QuantileRegressor
qr_median = QuantileRegressor(quantile=0.5, alpha=0)
qr_95 = QuantileRegressor(quantile=0.95, alpha=0)`},{id:16,question:"What is the Matthews Correlation Coefficient (MCC) and why is it considered the most balanced classification metric?",shortAnswer:"MCC = (TP*TN - FP*FN) / sqrt((TP+FP)(TP+FN)(TN+FP)(TN+FN)); it evaluates all 4 confusion matrix quadrants symmetrically from -1 to +1.",explanation:"MCC returns a high score only if the model performs well across all four quadrants (TP, TN, FP, FN). It produces reliable scores even when classes are extremely skewed in size (e.g., 99:1 imbalance), unlike Accuracy or F1.",hint:"Symmetric correlation coefficient across all four confusion matrix cells.",level:"Expert",codeExample:`from sklearn.metrics import matthews_corrcoef
mcc = matthews_corrcoef(y_true, y_pred)`},{id:17,question:"What is Multicollinearity in linear regression, and how can it be detected and resolved?",shortAnswer:"High linear correlation between predictor features; detected using Variance Inflation Factor (VIF > 5-10) and resolved via Ridge regression or PCA.",explanation:"Multicollinearity inflates standard errors of regression coefficients, making weight estimates erratic, unstable, and uninterpretable. Ridge regression (L2 regularization) handles multicollinearity by conditioning the ill-conditioned matrix (X^T X + λ I)^{-1}.",hint:"Inter-feature redundancy destabilizing regression weight coefficients.",level:"Moderate",codeExample:`from statsmodels.stats.outliers_influence import variance_inflation_factor
vif = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]`},{id:18,question:"What is Cost-Sensitive Learning in classification?",shortAnswer:"Assigning different penalty weights to different misclassification types (e.g. FN costing 100x more than FP).",explanation:"In cancer diagnosis, a False Negative (missing cancer) can result in death, whereas a False Positive (extra biopsy) is merely inconvenient. Cost-sensitive algorithms incorporate a cost matrix C(y_true, y_pred) into the optimization loss function.",hint:"Unequal financial or clinical penalties for False Positives vs False Negatives.",level:"Moderate",codeExample:`# Adjust class weight in scikit-learn
model = LogisticRegression(class_weight={0: 1.0, 1: 25.0})`},{id:19,question:"What is the Ordinary Least Squares (OLS) closed-form Normal Equation for linear regression?",shortAnswer:"w* = (X^T X)^{-1} X^T y.",explanation:"Setting the gradient of the MSE cost function ∇_w J(w) = 0 yields the normal equations X^T X w = X^T y. Inverting (X^T X) solves directly for optimal weights w* in a single analytical step without requiring iterative gradient descent.",hint:"Analytical matrix solution setting loss gradient to zero.",level:"Moderate",codeExample:`# Analytical Normal Equation
w_opt = np.linalg.inv(X.T @ X) @ X.T @ y`},{id:20,question:"Why is Gradient Descent preferred over the analytical Normal Equation when dataset size N or feature count d is very large?",shortAnswer:"Matrix inversion (X^T X)^{-1} requires O(d^3) computation and O(d^2) memory, which becomes prohibitive for d > 10,000 features.",explanation:"Calculating (X^T X)^{-1} for 100,000 features requires inverting a 100,000 x 100,000 matrix (astronomical RAM and CPU time). Iterative gradient descent scales linearly with O(N * d) per epoch and works seamlessly with mini-batches on GPUs.",hint:"Cubic computational complexity O(d^3) of matrix inversion.",level:"Moderate",codeExample:`# For large d: Use SGDRegressor rather than closed-form LinearRegression
from sklearn.linear_model import SGDRegressor
sgd = SGDRegressor(loss='squared_error', max_iter=1000)`},{id:21,question:"What is Brier Score in probabilistic classification evaluation?",shortAnswer:"The mean squared difference between predicted class probabilities and actual binary outcomes: (1/N) ∑ (p_i - y_i)^2.",explanation:"Brier score measures both calibration (whether predicted 80% confidence events actually occur 80% of the time) and refinement. A Brier score of 0.0 is perfect; 0.25 is random guessing for binary 50/50 balance.",hint:"Mean squared error applied directly to predicted probabilities.",level:"Expert",codeExample:`from sklearn.metrics import brier_score_loss
brier = brier_score_loss(y_true, y_probs)`},{id:22,question:"What is Probability Calibration (Platt Scaling / Isotonic Regression) in classification?",shortAnswer:"Post-processing raw model scores to ensure predicted probabilities accurately match true empirical occurrence rates.",explanation:"Models like SVMs, Naive Bayes, or boosted trees often output distorted probability magnitudes. Platt Scaling fits a logistic sigmoid on raw logits; Isotonic Regression fits a non-parametric isotonic step function to calibrate output confidence scores.",hint:"Aligning model confidence percentages with real-world observed frequencies.",level:"Expert",codeExample:`from sklearn.calibration import CalibratedClassifierCV
calibrated_clf = CalibratedClassifierCV(base_estimator=svm, method='sigmoid', cv=5)
calibrated_clf.fit(X_train, y_train)`},{id:23,question:"How does ElasticNet Regression unify Ridge and Lasso regularizations?",shortAnswer:"By combining L1 and L2 penalty terms: J(w) = MSE + λ [ α ∑|w_j| + (1-α)/2 ∑w_j^2 ].",explanation:"ElasticNet overcomes Lasso's limitation when dealing with groups of highly correlated features. While Lasso arbitrarily picks one feature from a correlated group, ElasticNet's L2 quadratic term encourages group selection while L1 promotes sparsity.",hint:"Convex linear combination of L1 (sparsity) and L2 (grouping) regularization.",level:"Moderate",codeExample:`from sklearn.linear_model import ElasticNet
enet = ElasticNet(alpha=0.1, l1_ratio=0.5)`},{id:24,question:"What is Poisson Regression and when is it applied instead of standard linear regression?",shortAnswer:"Used when the target variable y represents non-negative integer count data (e.g. website visits per hour, hospital admissions).",explanation:"Count data is discrete, non-negative (y ∈ {0, 1, 2, ...}), and often exhibits heteroscedastic variance (variance increases with mean). Poisson regression models log(λ) = w^T x where target y follows a Poisson distribution P(y | λ) = (λ^y e^-λ) / y!.",hint:"Predicting non-negative integer arrival counts / rates.",level:"Expert",codeExample:`from sklearn.linear_model import PoissonRegressor
poisson = PoissonRegressor(alpha=1e-4).fit(X, y_counts)`},{id:25,question:"What is Multi-Output (Multi-Target) Regression?",shortAnswer:"Predicting multiple continuous target variables simultaneously: f: ℝ^d → ℝ^m (where m > 1).",explanation:"In applications like wind turbine control or robotics, a model must predict both torque and pitch angle simultaneously. Multi-output regression models capture inter-target correlations rather than training independent isolated regressors.",hint:"Vector target outputs y = [y_1, y_2, ..., y_m] from a single model.",level:"Moderate",codeExample:`from sklearn.multioutput import MultiOutputRegressor
from sklearn.ensemble import RandomForestRegressor
multi_reg = MultiOutputRegressor(RandomForestRegressor()).fit(X, Y_multi_targets)`},{id:26,question:"What is the Geometric Interpretation of the Decision Boundary in Linear Classification?",shortAnswer:"The hyperplane perpendicular to weight vector w at distance -b / ||w|| from the origin.",explanation:"The decision surface equation is w^T x + b = 0. The weight vector w serves as the normal vector defining the plane's spatial orientation, and bias b adjusts its offset from the coordinate origin. Points where w^T x + b > 0 lie on the positive side.",hint:"Hyperplane whose normal orientation vector is w with offset b.",level:"Moderate",codeExample:"# Normal vector w is orthogonal to the decision boundary line"},{id:27,question:"What is the Logit function in binary classification?",shortAnswer:"The inverse of the standard logistic sigmoid: logit(p) = ln(p / (1 - p)) (the natural logarithm of odds).",explanation:"The logit maps a probability interval p ∈ (0, 1) to the entire real line (-∞, +∞). In logistic regression, the logit of the posterior probability is modeled as a linear combination of input features: logit(P(y=1|x)) = w^T x + b.",hint:"Natural logarithm of the odds ratio p / (1 - p).",level:"Moderate",codeExample:`def logit(p):
    return np.log(p / (1.0 - p))`},{id:28,question:"What is Adjusted R² and why is it preferred over standard R² in Multiple Regression?",shortAnswer:"Adjusted R² penalizes the addition of non-informative predictor variables: 1 - [(1 - R²)(N - 1) / (N - p - 1)].",explanation:"Standard R² never decreases when new features are added to a regression model, even if the features are random noise. Adjusted R² incorporates degrees of freedom (number of samples N and predictors p), only increasing if the new feature improves the model beyond chance.",hint:"Penalizes model complexity to prevent false inflation from useless features.",level:"Moderate",codeExample:`# Adjusted R2
adj_r2 = 1 - (1 - r2) * (N - 1) / (N - p - 1)`},{id:29,question:"What is the Cumulative Gains Chart and Lift Curve in classification?",shortAnswer:"Visual tools showing the percentage of total positive targets captured when contacting the top X% highest-scoring leads.",explanation:"Used extensively in marketing and risk targeting. If contacting the top 20% highest-scoring customers captures 70% of all potential churners, the model provides a Lift of 70% / 20% = 3.5x over random customer outreach.",hint:"Evaluates targeted outreach efficiency against random selection baselines.",level:"Moderate",codeExample:"# Lift at 20% decile = (% of churners in top 20%) / (20%)"},{id:30,question:"How can a regression model be converted into a binary classification model?",shortAnswer:"By applying a continuous threshold τ to the regression output: y_class = 1 if y_reg ≥ τ else 0.",explanation:"For instance, a regression model predicting blood glucose level (mg/dL) can be converted into a diabetic classifier by applying clinical threshold τ = 126 mg/dL. Conversely, classification probabilities can feed into expected monetary value calculations.",hint:"Applying a domain cutoff threshold to continuous predictions.",level:"Basic",codeExample:`predicted_glucose = regressor.predict(X)
diabetes_class = (predicted_glucose >= 126.0).astype(int)`}],ie=()=>{const[E,M]=a.useState("noviceMasterclass"),[l,T]=a.useState("intuition"),[h,P]=a.useState("all"),[r,w]=a.useState(""),[N,k]=a.useState(0),[u,C]=a.useState(null),[R,_]=a.useState(!1),[p,S]=a.useState("classification"),[c,I]=a.useState(.5),[v,L]=a.useState(1200);a.useId();const F=s=>{M(s);const t=document.getElementById(s);t&&t.scrollIntoView({behavior:"smooth",block:"start"})},O=[{name:"Mamata (Barrackpore)",rawScore:.88,actual:1},{name:"Mahima (Kolkata)",rawScore:.74,actual:1},{name:"Debangshu (Salt Lake)",rawScore:.42,actual:0},{name:"Susmita (Ichapur)",rawScore:.62,actual:1},{name:"Abhronila (Jadavpur)",rawScore:.28,actual:0}],g=a.useMemo(()=>{let s=0,t=0,x=0,f=0;const z=O.map(o=>{const d=o.rawScore>=c?1:0;return d===1&&o.actual===1?s++:d===1&&o.actual===0?t++:d===0&&o.actual===0?x++:d===0&&o.actual===1&&f++,{...o,pred:d,isCorrect:d===o.actual}}),b=s+t>0?+(s/(s+t)*100).toFixed(1):100,y=s+f>0?+(s/(s+f)*100).toFixed(1):0,U=b+y>0?+(2*(b*y)/(b+y)).toFixed(1):0;return{evaluated:z,tp:s,fp:t,tn:x,fn:f,precision:b,recall:y,f1:U}},[c]),D=+(.045*v+15).toFixed(2),q=[{id:"continuous-vs-discrete",term:"Continuous vs Discrete Target (y)",category:"core",badge:"Target Taxonomy",badgeColor:"bg-indigo-950 text-indigo-300 border-indigo-800",pronunciation:"kənˈtɪn.ju.əs vs dɪˈskriːt",plainEnglish:"Continuous targets are measurable smooth numbers with decimals (e.g. ₹64.5 Lakhs, 38.2°C). Discrete targets are separate categories or counts (e.g. Grade A/B/C, 0 or 1).",everydayAnalogy:"Measuring water volume with a measuring cylinder is Continuous. Counting the number of water bottles is Discrete.",whyItMatters:"The fundamental criteria deciding whether you must use Regression or Classification."},{id:"rmse-mae",term:"RMSE vs MAE",category:"regression",badge:"Regression Metrics",badgeColor:"bg-cyan-950 text-cyan-300 border-cyan-800",pronunciation:"R-M-S-E vs M-A-E",plainEnglish:"MAE is the simple average error in real units. RMSE squares the errors first, penalizing large outlier blunders much more severely.",everydayAnalogy:"If a delivery driver is 5 minutes late 4 times, MAE is 5 min. But if they are 1 hour late once, RMSE shoots up drastically.",whyItMatters:"RMSE is used when big prediction errors are dangerous (e.g. medical dosage, flight fuel estimation)."},{id:"r2-score",term:"R² Score (Coefficient of Determination)",category:"regression",badge:"Goodness of Fit",badgeColor:"bg-blue-950 text-blue-300 border-blue-800",pronunciation:"ɑːr skweəd skɔːr",plainEnglish:"A score from 0.0 to 1.0 (or 0% to 100%) indicating how much of the target's variance is explained by your feature inputs.",everydayAnalogy:"An R² of 0.85 means 85% of flat price variations in Kolkata are explained by area and location, while 15% is random noise.",whyItMatters:"The standard universal benchmark for evaluating any regression model."},{id:"precision-recall",term:"Precision vs Recall (Sensitivity)",category:"classification",badge:"The Great Tradeoff",badgeColor:"bg-amber-950 text-amber-300 border-amber-800",pronunciation:"prɪˈsɪʒ.ən vs rɪˈkɔːl",plainEnglish:"Precision measures: 'Of all alarms we sounded, how many were real fires?' Recall measures: 'Of all actual fires that occurred, how many did we catch?'",everydayAnalogy:"A doctor who flags every slight cough as pneumonia has 100% Recall (catches every case) but terrible Precision (90% false alarms).",whyItMatters:"You cannot maximize both simultaneously; you must tune the decision threshold depending on whether false alarms or missed cases are worse."},{id:"f1-score",term:"F1-Score",category:"classification",badge:"Harmonic Balance",badgeColor:"bg-emerald-950 text-emerald-300 border-emerald-800",pronunciation:"ɛf wʌn skɔːr",plainEnglish:"The harmonic mean balancing Precision and Recall into a single fair number (F1 = 2 × (P × R) / (P + R)).",everydayAnalogy:"Like a decathlon athlete: you only get a high overall score if you are good at both sprinting (Precision) and endurance (Recall).",whyItMatters:"The gold standard metric for imbalanced datasets (e.g. credit card fraud, disease screening)."},{id:"roc-auc",term:"ROC Curve & AUC Score",category:"classification",badge:"Threshold Invariant",badgeColor:"bg-purple-950 text-purple-300 border-purple-800",pronunciation:"R-O-C  A-U-C",plainEnglish:"A curve plotting True Positive Rate vs False Positive Rate across all possible thresholds. AUC is the area under that curve (1.0 = perfect model, 0.5 = random coin toss).",everydayAnalogy:"Testing how well a student ranks answers correctly, regardless of how strictly or leniently the teacher sets the pass mark.",whyItMatters:"Measures the pure discriminative power of a classifier independent of any specific threshold."},{id:"multiclass-vs-multilabel",term:"Multiclass vs Multilabel Classification",category:"classification",badge:"Classification Types",badgeColor:"bg-rose-950 text-rose-300 border-rose-800",pronunciation:"ˈmʌl.ti.klɑːs vs ˈmʌl.tiˌleɪ.bəl",plainEnglish:"Multiclass means exactly ONE choice out of many (e.g. Is this image a Cat OR Dog OR Bird?). Multilabel means MULTIPLE tags can apply simultaneously (e.g. A movie is Action AND Comedy).",everydayAnalogy:"A multiple-choice exam with radio buttons (Multiclass) vs a grocery checklist with checkboxes (Multilabel).",whyItMatters:"Multiclass uses Softmax; Multilabel uses independent Sigmoids for each class."},{id:"confusion-matrix",term:"Confusion Matrix",category:"classification",badge:"Diagnosis Grid",badgeColor:"bg-slate-900 text-slate-300 border-slate-700",pronunciation:"kənˈfjuː.ʒən ˈmeɪ.trɪks",plainEnglish:"A 2x2 grid breaking down model predictions into True Positives (TP), False Positives (FP), True Negatives (TN), and False Negatives (FN).",everydayAnalogy:"The doctor's official scorecard: Correct Diagnoses vs False Alarms vs Missed Illnesses.",whyItMatters:"Reveals exactly where and how your classifier is making its mistakes."}],j=a.useMemo(()=>q.filter(s=>{const t=h==="all"||s.category===h,x=s.term.toLowerCase().includes(r.toLowerCase())||s.plainEnglish.toLowerCase().includes(r.toLowerCase())||s.everydayAnalogy.toLowerCase().includes(r.toLowerCase());return t&&x}),[h,r]),B={intuition:{id:"intuition",title:"1. The Big Picture: Measuring vs Sorting",tagline:"Buying Mangoes at Barrackpore Market",icon:"🥭",intro:"Imagine you are at the bustling fruit market in Barrackpore. You pick up a sweet Himsagar mango. There are two distinct questions you can ask about it:",steps:[{num:"Question 1 (Regression)",title:"How much does this mango weigh?",desc:"You place it on a digital scale: 342.5 grams. The answer is a continuous, smooth numerical measurement along a scale."},{num:"Question 2 (Classification)",title:"Is this mango ripe, unripe, or rotten?",desc:"You smell it and look at its skin color to place it in one of three discrete buckets: [Ripe, Unripe, Rotten]."},{num:"The Core Rule",title:"Continuous vs Categorical",desc:"If the output is a continuous number that can be measured on a ruler/tape, it is Regression. If the output is a discrete category/bucket, it is Classification."},{num:"The Math Split",title:"Different Loss Functions",desc:"Regression uses distance loss (Mean Squared Error). Classification uses probability loss (Cross-Entropy)."}],coreTakeaway:"Regression measures quantities along an unbroken line; Classification draws decision walls between distinct categories."},regressionDeepDive:{id:"regressionDeepDive",title:"2. Deep Dive: Regression & Its Scorecards",tagline:"MSE, RMSE, MAE, and R² Score",icon:"📈",intro:"In regression, our goal is to draw a smooth line or curve through data points such that predicted numbers (ŷ) are as close as possible to real numbers (y).",cards:[{title:"Mean Absolute Error (MAE)",desc:"The direct average difference in actual units (e.g. 'On average, our apartment valuation misses the true price by ₹2.5 Lakhs').",formula:"MAE = (1/N) ∑ |ŷ - y|"},{title:"Root Mean Squared Error (RMSE)",desc:"Squares differences before averaging, which heavily penalizes catastrophic outlier misses.",formula:"RMSE = √( (1/N) ∑ (ŷ - y)² )"},{title:"R² Score (Goodness of Fit)",desc:"Scores between 0.0 (useless model) and 1.0 (perfect fit), measuring what fraction of target variance was captured.",formula:"R² = 1 - (SS_res / SS_tot)"}],coreTakeaway:"Always report both MAE (for business stakeholders) and RMSE (to detect extreme error outliers)."},classificationDeepDive:{id:"classificationDeepDive",title:"3. Deep Dive: Classification & Confusion Matrix",tagline:"The Fire Alarm and Doctor Diagnoses",icon:"🎯",intro:"Classification models output probabilities between 0.0 and 1.0. We use a decision threshold (default = 0.50) to make the final discrete call.",cards:[{title:"True Positive (TP) & True Negative (TN)",desc:"The successes! Model said Fire and there was Fire (TP); Model said Safe and it was Safe (TN)."},{title:"False Positive (FP - False Alarm / Type I Error)",desc:"Model rang the fire alarm, but someone was just burning toast. Harmless in hospitals, annoying in spam filters."},{title:"False Negative (FN - Missed Detection / Type II Error)",desc:"Model said Safe, but the house caught fire! In medical diagnosis, this is catastrophic (sending a sick patient home)."}],coreTakeaway:"Accuracy is misleading on imbalanced data. In medical screening, prioritize Recall; in spam filtering, prioritize Precision."}},A=[{id:0,title:"Diagnostic 1: Student Semester Percentage vs Pass/Fail",scenario:"A university in Kolkata wants two AI models: Model A predicts the exact final exam percentage (e.g. 78.4%), while Model B predicts whether the student receives a Distinction, First Class, or Pass certificate. How should you classify these two models?",options:[{id:"correct",label:"Model A is Regression; Model B is Multiclass Classification",isCorrect:!0,explanation:"Correct! Model A predicts a continuous real number (percentage), which is Regression. Model B assigns students to 3 discrete category buckets, which is Multiclass Classification."},{id:"wrong1",label:"Both models are Regression tasks",isCorrect:!1,explanation:"Incorrect. Certificate tier (Distinction/First Class/Pass) is a discrete categorical label, not a continuous variable."},{id:"wrong2",label:"Both models are Unsupervised Clustering",isCorrect:!1,explanation:"Incorrect. Historical exam percentage and award tiers are supervised ground-truth labels."}]},{id:1,title:"Diagnostic 2: Rare Disease Screening Metric Selection",scenario:"Abhronila is deploying an AI system in a Jadavpur hospital to detect a deadly, fast-spreading viral infection from blood samples. Missing an infected patient (False Negative) could lead to an epidemic outbreak. Which metric should she maximize?",options:[{id:"recall",label:"Recall (Sensitivity) — To ensure zero infected patients are missed",isCorrect:!0,explanation:"Spot on! In life-threatening medical screening, Recall is paramount. You want Recall ≥ 99% so that virtually every true positive case is caught, even if it causes a few harmless false alarms (lower Precision)."},{id:"rawAcc",label:"Raw Classification Accuracy",isCorrect:!1,explanation:"Incorrect. If only 0.1% of patients have the infection, a dummy model that predicts 'Healthy' for everyone gets 99.9% accuracy while letting all infected patients slip through."},{id:"r2",label:"R² Score",isCorrect:!1,explanation:"Incorrect. R² Score is an evaluation metric for continuous Regression, not disease Classification."}]},{id:2,title:"Diagnostic 3: Outlier Sensitivity in House Price Regression",scenario:"Debangshu trains a flat valuation model in Rajarhat. The dataset contains 5 billionaire mansions priced 50x higher than typical apartments. His model reports an RMSE of ₹45 Lakhs, but an MAE of only ₹3.2 Lakhs. Why did this disparity occur?",options:[{id:"rmseOutliers",label:"RMSE squares errors, penalizing the 5 mansion outlier blunders drastically; MAE gives a linear average of typical flat error",isCorrect:!0,explanation:"Exactly right! Because RMSE squares each residual (y - ŷ)², a few huge outliers explode the total score. MAE gives a robust reflection of typical error on standard apartments."},{id:"maeCorrupt",label:"MAE only works for binary 0/1 classifications",isCorrect:!1,explanation:"Incorrect. MAE is a foundational continuous regression metric."},{id:"classifierSwitch",label:"The regression model silently switched into a classifier",isCorrect:!1,explanation:"Incorrect. Model architecture does not alter based on evaluation metrics."}]},{id:3,title:"Diagnostic 4: Severe Class Imbalance Trap (ROC-AUC vs PR-AUC)",scenario:"A FinTech firm in Kolkata analyzes 1,000,000 daily credit card transactions where only 50 (0.005%) are fraudulent. An engineer reports ROC-AUC = 0.98, yet the system flags 500 false alarms for every real fraud caught. Why is ROC-AUC deceiving?",options:[{id:"rocDeception",label:"ROC-AUC uses FPR = FP / (FP + TN); huge TN (999,950 clean records) dilutes the denominator, masking high false alarms. PR-AUC is required.",isCorrect:!0,explanation:"Spot on! When negatives vastly outnumber positives, huge True Negative counts make FPR look negligible even when hundreds of false alarms occur. Precision-Recall AUC (PR-AUC) focuses strictly on the minority positive class."},{id:"badCpu",label:"The server CPU failed floating point IEEE 754 division",isCorrect:!1,explanation:"Incorrect. This is a mathematical statistical property of ROC curves on imbalanced datasets."},{id:"rocRegression",label:"ROC-AUC is only valid for continuous regression",isCorrect:!1,explanation:"Incorrect. ROC-AUC is strictly a classification metric."}]},{id:4,title:"Diagnostic 5: Multiclass vs Multilabel Classification",scenario:"Susmita is building an image tagger for a boutique in Barrackpore. An image can simultaneously contain 'Silk Saree', 'Golden Border', and 'Bridal Wear'. How should she formulate this task?",options:[{id:"multilabel",label:"Multilabel Classification with independent sigmoid outputs per attribute (labels are non-mutually exclusive)",isCorrect:!0,explanation:"Correct! In Multiclass, classes are mutually exclusive (softmax sums to 1.0). In Multilabel, an instance can possess multiple tags simultaneously, requiring independent binary sigmoid heads for each tag."},{id:"softmaxForced",label:"Multiclass Softmax forcing exactly one tag per photo",isCorrect:!1,explanation:"Incorrect. Softmax forces the probabilities to sum to 1.0, making it impossible to assign all 3 true tags."},{id:"linearMse",label:"Single-target Linear Regression with MSE loss",isCorrect:!1,explanation:"Incorrect. Tag presence is discrete binary categorization, not continuous regression."}]}],m=A[N],n=B[l];return e.jsxs("div",{className:"space-y-8 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-12",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Module 1 • Topic 7"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Foundational ML"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-blue-500/20 text-blue-300 border border-blue-500/40 rounded-full",children:"Classification & Regression"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-amber-500/20 text-amber-300 border border-amber-500/40 rounded-full",children:"Beginner-to-Master Edition"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Classification & Regression: The Complete Overview"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:["Understand the two foundational pillars of predictive modeling. Master the mathematical and practical differences between predicting continuous numbers (",e.jsx("span",{className:"text-cyan-400 font-semibold",children:"Regression"}),") and categorical class boundaries (",e.jsx("span",{className:"text-indigo-400 font-semibold",children:"Classification"}),"), complete with interactive metric simulators and a novice jargon buster."]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:[{id:"noviceMasterclass",label:"🎓 Novice Classroom & Jargon Buster"},{id:"interactiveStudio",label:"1. Interactive Dual-Mode Metric Studio"},{id:"theory",label:"2. Formal Mathematical Foundations"},{id:"caseStudies",label:"3. Regional Industrial Cases"},{id:"diagnosticQuiz",label:"4. Interactive Diagnostic Quiz"},{id:"bestPractices",label:"5. Pitfalls & Best Practices"}].map(s=>e.jsx("button",{onClick:()=>F(s.id),className:i("px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer",E===s.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400 scale-105":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"),children:s.label},s.id))})]})]}),e.jsxs("section",{id:"noviceMasterclass",className:"bg-slate-900/95 p-6 sm:p-8 rounded-2xl border border-indigo-500/40 shadow-2xl space-y-8 scroll-mt-6 relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{className:"flex items-center gap-3.5",children:[e.jsx("div",{className:"w-12 h-12 rounded-2xl bg-gradient-to-tr from-cyan-600 to-blue-600 text-white flex items-center justify-center font-bold text-2xl shadow-lg shadow-cyan-500/30 border border-cyan-400",children:"⚖️"}),e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-tight",children:"The Master Teacher's Novice Classroom: Classification vs Regression"}),e.jsx("span",{className:"px-2 py-0.5 text-[10px] uppercase font-bold tracking-wider bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Zero Jargon Barrier"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400 mt-0.5",children:"Demystifying continuous prediction vs category sorting with plain English and clear analogies"})]})]}),e.jsx("div",{className:"text-xs text-cyan-300 bg-cyan-950/70 border border-cyan-800 px-3.5 py-1.5 rounded-xl font-mono",children:"Teacher Sukanta Hui • Barrackpore"})]}),e.jsxs("div",{className:"bg-gradient-to-r from-slate-950 via-blue-950/40 to-slate-950 p-6 rounded-2xl border border-blue-900/60 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 font-bold text-sm",children:[e.jsx("span",{children:"💬"}),e.jsx("span",{children:"Teacher Sukanta to a Curious Student:"})]}),e.jsxs("p",{className:"text-slate-200 text-xs sm:text-sm leading-relaxed",children:['"Whenever you start any machine learning project, the very first question you must answer is: ',e.jsx("strong",{children:"What kind of answer does my client want?"})," If they want to predict a price, a temperature, or a percentage, you are building a ",e.jsx("strong",{children:"Regression engine"}),". If they want to sort objects into buckets like Yes/No, Spam/Ham, or Disease A/B, you are building a ",e.jsx("strong",{children:"Classification engine"}),'. Let us master both!"']})]}),e.jsx("div",{className:"space-y-4",children:e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3",children:[{id:"intuition",title:"1. The Big Picture",icon:"🥭",subtitle:"Measuring vs Sorting"},{id:"regressionDeepDive",title:"2. Regression Deep Dive",icon:"📈",subtitle:"MSE, RMSE & R²"},{id:"classificationDeepDive",title:"3. Classification Deep Dive",icon:"🎯",subtitle:"Precision, Recall & F1"}].map(s=>e.jsxs("button",{onClick:()=>T(s.id),className:i("p-4 rounded-xl border text-left transition-all duration-300 cursor-pointer flex flex-col justify-between space-y-2.5",l===s.id?"bg-slate-900 border-cyan-400 ring-2 ring-cyan-500/50 shadow-xl shadow-cyan-600/20 scale-102":"bg-slate-950 border-slate-800 text-slate-400 hover:border-slate-700 hover:text-slate-200"),children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-2xl",children:s.icon}),e.jsxs("span",{className:i("text-[10px] font-mono px-2 py-0.5 rounded font-bold uppercase",l===s.id?"bg-cyan-600 text-white":"bg-slate-900 text-slate-400"),children:["Module ",s.id==="intuition"?"1":s.id==="regressionDeepDive"?"2":"3"]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-sm font-bold text-white",children:s.title}),e.jsx("p",{className:"text-[11px] text-slate-400 mt-0.5",children:s.subtitle})]})]},s.id))})}),e.jsxs("div",{className:"bg-slate-950 p-6 sm:p-8 rounded-2xl border border-blue-900/60 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-slate-800 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl",children:n.icon}),e.jsxs("div",{children:[e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:n.title}),e.jsx("span",{className:"text-xs text-cyan-300 font-medium",children:n.tagline})]})]}),e.jsx("span",{className:"text-xs font-mono bg-slate-900 text-slate-400 px-3 py-1 rounded-lg border border-slate-800",children:"Interactive Lesson Module"})]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/80 p-4 rounded-xl border border-slate-800",children:n.intro}),l==="intuition"&&e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:n.steps.map((s,t)=>e.jsx("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-2 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-400 uppercase",children:s.num}),e.jsx("h4",{className:"text-xs sm:text-sm font-bold text-white mt-1",children:s.title}),e.jsx("p",{className:"text-[11px] text-slate-300 leading-relaxed mt-2",children:s.desc})]})},t))}),l==="regressionDeepDive"&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:n.cards.map((s,t)=>e.jsxs("div",{className:"bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2.5",children:[e.jsx("h4",{className:"text-sm sm:text-base font-bold text-white",children:s.title}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:s.desc}),e.jsx("div",{className:"text-[11px] font-mono text-cyan-300 bg-slate-950 p-2.5 rounded border border-slate-800",children:s.formula})]},t))}),l==="classificationDeepDive"&&e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:n.cards.map((s,t)=>e.jsxs("div",{className:"bg-slate-900 p-5 rounded-xl border border-slate-800 space-y-2.5",children:[e.jsx("h4",{className:"text-sm sm:text-base font-bold text-white",children:s.title}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:s.desc})]},t))}),n.coreTakeaway&&e.jsxs("div",{className:"bg-cyan-950/30 p-3.5 rounded-xl border border-cyan-800/50 flex items-center gap-2.5 text-xs text-cyan-200",children:[e.jsx("span",{className:"text-base",children:"💡"}),e.jsxs("span",{children:[e.jsx("strong",{children:"Teacher's Golden Takeaway:"})," ",n.coreTakeaway]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"📚"}),e.jsx("h3",{className:"text-lg sm:text-xl font-bold text-white",children:"Classification & Regression Jargon Buster"})]}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Every evaluation metric and mathematical concept translated into everyday plain English"})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:[{id:"all",label:"All Terms"},{id:"core",label:"Core Foundations"},{id:"regression",label:"Regression Metrics"},{id:"classification",label:"Classification Metrics"}].map(s=>e.jsx("button",{onClick:()=>P(s.id),className:i("px-3 py-1 text-xs rounded-lg font-medium transition-all cursor-pointer",h===s.id?"bg-cyan-600 text-white font-bold":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"),children:s.label},s.id))})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{type:"text",value:r,onChange:s=>w(s.target.value),placeholder:"🔍 Search any technical term (e.g. 'Precision', 'Recall', 'RMSE', 'F1-Score', 'R2')...",className:"w-full bg-slate-900 border border-slate-700/80 rounded-xl px-4 py-2.5 text-xs sm:text-sm text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"}),r&&e.jsx("button",{onClick:()=>w(""),className:"absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-400 hover:text-white",children:"✕ Clear"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:j.map(s=>e.jsxs("div",{className:"bg-slate-900/90 p-4 rounded-xl border border-slate-800 hover:border-cyan-500/60 transition-all duration-300 space-y-3 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex items-start justify-between gap-2",children:[e.jsx("h4",{className:"text-xs sm:text-sm font-bold text-white font-mono",children:s.term}),e.jsx("span",{className:i("text-[9px] font-mono font-bold px-2 py-0.5 rounded border shrink-0",s.badgeColor),children:s.badge})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-[10px] font-mono font-bold text-cyan-400 uppercase tracking-wide",children:"In Plain English:"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:s.plainEnglish})]}),e.jsxs("div",{className:"space-y-1 bg-slate-950 p-2.5 rounded-lg border border-slate-800/80",children:[e.jsxs("span",{className:"text-[10px] font-mono font-bold text-amber-400 uppercase tracking-wide flex items-center gap-1",children:[e.jsx("span",{children:"💡"})," Everyday Analogy:"]}),e.jsxs("p",{className:"text-[11px] text-slate-400 italic leading-relaxed",children:['"',s.everydayAnalogy,'"']})]})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 text-[10px] text-slate-400",children:[e.jsx("span",{className:"text-cyan-300 font-semibold",children:"Why it matters: "}),s.whyItMatters]})]},s.id))}),j.length===0&&e.jsxs("div",{className:"text-center py-8 text-slate-400 text-xs",children:['No matching technical terms found for "',r,'". Try searching for "Precision", "Recall", or "RMSE".']})]})]}),e.jsxs("section",{id:"interactiveStudio",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Interactive Dual-Mode Metric Studio"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Toggle between Classification Threshold Tuning and Continuous Flat Price Regression"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-6",children:[e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>S("classification"),className:i("px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer",p==="classification"?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"),children:"Mode A: Classification Threshold & Confusion Matrix"}),e.jsx("button",{onClick:()=>S("regression"),className:i("px-4 py-2 text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer",p==="regression"?"bg-cyan-600 text-white shadow-lg shadow-cyan-600/30 border border-cyan-400":"bg-slate-900 text-slate-400 border border-slate-800 hover:text-white"),children:"Mode B: Continuous Flat Price Regression"})]}),p==="classification"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"text-indigo-300 font-bold",children:"Decision Probability Threshold (θ):"}),e.jsxs("span",{className:"text-cyan-400 font-bold text-sm",children:[(c*100).toFixed(0),"% (θ = ",c,")"]})]}),e.jsx("input",{type:"range",min:"0.10",max:"0.90",step:"0.05",value:c,onChange:s=>I(parseFloat(s.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-indigo-500"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Slide left (e.g. 20%) to maximize Recall (catch every default); slide right (e.g. 80%) to maximize Precision (fewer false rejections)."})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1 text-center",children:[e.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase font-bold",children:"Precision"}),e.jsxs("div",{className:"text-2xl font-mono font-bold text-cyan-400",children:[g.precision,"%"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"TP / (TP + FP)"})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1 text-center",children:[e.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase font-bold",children:"Recall (Sensitivity)"}),e.jsxs("div",{className:"text-2xl font-mono font-bold text-emerald-400",children:[g.recall,"%"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"TP / (TP + FN)"})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-1 text-center",children:[e.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase font-bold",children:"F1-Score (Harmonic Mean)"}),e.jsxs("div",{className:"text-2xl font-mono font-bold text-purple-400",children:[g.f1,"%"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"2 × (P × R) / (P + R)"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs border-collapse font-mono",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 text-[11px] bg-slate-900/60",children:[e.jsx("th",{className:"p-3",children:"Applicant Name"}),e.jsx("th",{className:"p-3",children:"Model Risk Score"}),e.jsxs("th",{className:"p-3",children:["Decision (θ = ",c,")"]}),e.jsx("th",{className:"p-3",children:"Actual Status"}),e.jsx("th",{className:"p-3",children:"Diagnosis"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:g.evaluated.map((s,t)=>e.jsxs("tr",{className:"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 font-sans font-medium text-white",children:s.name}),e.jsxs("td",{className:"p-3",children:[(s.rawScore*100).toFixed(0),"%"]}),e.jsx("td",{className:"p-3 font-bold",style:{color:s.pred===1?"#f43f5e":"#34d399"},children:s.pred===1?"Flagged Default (1)":"Approved (0)"}),e.jsx("td",{className:"p-3",children:s.actual===1?"Defaulted":"Paid Clean"}),e.jsx("td",{className:"p-3",children:s.isCorrect?e.jsx("span",{className:"text-emerald-400 font-bold",children:"✔ Correct"}):s.pred===1?e.jsx("span",{className:"text-amber-400 font-bold",children:"⚠️ False Alarm (FP)"}):e.jsx("span",{className:"text-rose-400 font-bold",children:"❌ Missed Default (FN)"})})]},t))})]})})]}),p==="regression"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900 p-4 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs font-mono",children:[e.jsx("span",{className:"text-cyan-300 font-bold",children:"Apartment Carpet Area (sq.ft):"}),e.jsxs("span",{className:"text-cyan-400 font-bold text-sm",children:[v," sq.ft"]})]}),e.jsx("input",{type:"range",min:"500",max:"3500",step:"50",value:v,onChange:s=>L(parseInt(s.target.value)),className:"w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-500"})]}),e.jsxs("div",{className:"bg-gradient-to-r from-slate-900 via-cyan-950/50 to-slate-900 p-6 rounded-2xl border border-cyan-800/50 flex flex-col sm:flex-row justify-between items-center gap-4",children:[e.jsxs("div",{className:"space-y-1 text-center sm:text-left",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase font-bold",children:"Regression Equation:"}),e.jsx("div",{className:"text-xs font-mono text-cyan-300",children:"Price = (0.045 × Area) + ₹15.0 Lakhs"}),e.jsx("p",{className:"text-[11px] text-slate-400",children:"Trained on 18,000 apartment registries in Kolkata Salt Lake"})]}),e.jsxs("div",{className:"text-center sm:text-right bg-slate-950 p-4 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"text-[10px] font-mono text-slate-400 uppercase font-bold block",children:"Estimated Valuation:"}),e.jsxs("span",{className:"text-2xl font-bold text-cyan-400 font-mono",children:["₹",D," Lakhs"]})]})]})]})]})]}),e.jsxs("section",{id:"theory",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Formal Mathematical Foundations"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Cross-Entropy vs Mean Squared Error optimization objectives"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400 uppercase",children:"Regression Objective (L2 Squared Loss)"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Minimizes continuous residual variance between continuous target ",e.jsx("span",{className:"font-mono text-cyan-300",children:"y ∈ &reals;"})," and hypothesis ",e.jsx("span",{className:"font-mono text-cyan-300",children:"h(x)"}),":"]}),e.jsx("div",{className:"text-xs font-mono text-cyan-300 bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto",children:"L_{MSE}(w) = (1/N) ∑_{i=1}^N (wᵀ x_i + b - y_i)²"})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-400 uppercase",children:"Classification Objective (Binary Cross-Entropy)"}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed",children:["Minimizes negative log likelihood over Bernoulli probability output ",e.jsx("span",{className:"font-mono text-indigo-300",children:"ŷ = σ(wᵀ x)"}),":"]}),e.jsx("div",{className:"text-xs font-mono text-indigo-300 bg-slate-900 p-3 rounded border border-slate-800 overflow-x-auto",children:"L_{BCE}(w) = -(1/N) ∑_{i=1}^N [ y_i log(ŷ_i) + (1 - y_i) log(1 - ŷ_i) ]"})]})]})]}),e.jsxs("section",{id:"caseStudies",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 font-bold text-lg",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Real-World Regional Industrial Case Studies"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Concrete implementations in West Bengal banking, real-estate, and retail"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:"Case 1 • Kolkata Real Estate"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded border border-cyan-800",children:"Regression"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Apartment Resale Price Estimation"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:"Debangshu engineered a multi-variable Ridge regression model predicting residential market prices in New Town and Salt Lake with an R² of 0.89 and an MAE of ₹2.4 Lakhs."})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-indigo-400",children:"Case 2 • Barrackpore Retail Banking"}),e.jsx("span",{className:"text-[10px] px-2 py-0.5 bg-indigo-950 text-indigo-300 rounded border border-indigo-800",children:"Binary Classification"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Credit Card Default Risk Scoring"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300",children:"Mamata and Mahima deployed an XGBoost classifier evaluating CIBIL history and monthly salary in ₹ to predict 12-month default risk, achieving an ROC-AUC of 94.8%."})]})]})]}),e.jsxs("section",{id:"diagnosticQuiz",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-lg",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Interactive Problem Formulation Diagnostic Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Test your engineering intuition: Choose the right paradigm and metrics"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-5",children:[e.jsx("div",{className:"flex flex-wrap gap-2",children:A.map((s,t)=>e.jsxs("button",{onClick:()=>{k(t),C(null),_(!1)},className:i("px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer",N===t?"bg-amber-500 text-slate-950 font-bold shadow-md shadow-amber-500/20":"bg-slate-900 text-slate-400 hover:text-white border border-slate-800"),children:["Question ",t+1]},s.id))}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-amber-400 uppercase",children:"Scenario Problem"}),e.jsx("h3",{className:"text-base sm:text-lg font-bold text-white",children:m.title}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900 p-4 rounded-xl border border-slate-800",children:m.scenario})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-mono text-slate-400 block",children:"Select the correct engineering decision:"}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5",children:m.options.map(s=>e.jsxs("button",{onClick:()=>{C(s.id),_(!0)},className:i("p-3.5 rounded-xl border text-left transition-all text-xs sm:text-sm font-medium cursor-pointer flex items-center justify-between",u===s.id?s.isCorrect?"bg-emerald-950/70 border-emerald-500 text-emerald-200 ring-2 ring-emerald-500/40":"bg-rose-950/70 border-rose-500 text-rose-200 ring-2 ring-rose-500/40":"bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700 hover:text-white"),children:[e.jsx("span",{children:s.label}),R&&u===s.id&&e.jsx("span",{className:"font-bold text-sm",children:s.isCorrect?"✅ Correct!":"❌ Try again"})]},s.id))})]}),R&&u&&e.jsxs("div",{className:i("p-4 rounded-xl border space-y-1.5 animate-fadeIn text-xs sm:text-sm",m.options.find(s=>s.id===u)?.isCorrect?"bg-emerald-950/40 border-emerald-800 text-emerald-200":"bg-rose-950/40 border-rose-800 text-rose-200"),children:[e.jsx("div",{className:"font-bold flex items-center gap-1.5",children:e.jsx("span",{children:"💡 Teacher's Feedback:"})}),e.jsx("p",{className:"leading-relaxed",children:m.options.find(s=>s.id===u)?.explanation})]})]})]})]}),e.jsxs("section",{id:"bestPractices",className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6 scroll-mt-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold text-lg",children:"05"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Industry Best Practices"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Key engineering guidelines for classification and regression"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-rose-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Mistakes"]}),e.jsxs("ul",{className:"space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Accuracy Blindness:"})," Evaluating 99% imbalanced fraud datasets with accuracy instead of Precision-Recall AUC."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Target Leakage in Regression:"})," Including future downstream features (like actual sale date) that are unavailable at prediction time."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Treating IDs as Numbers:"})," Passing zip codes or customer IDs as continuous numbers into linear regression."]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"✔"})," Industry Best Practices"]}),e.jsxs("ul",{className:"space-y-2 text-xs sm:text-sm text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Cost-Weighted Thresholds:"})," Always tune the classification threshold θ to reflect the real financial cost of False Positives vs False Negatives."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Residual Analysis:"})," In regression, plot residuals (ŷ - y) to verify that errors are normally distributed with no systemic bias."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Log Transformations:"})," Apply log1p transforms to heavy-tailed continuous targets (like house prices) to stabilize gradient descent."]})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"06"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Executable Python Laboratory Simulation"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Interactive standalone lab script executing comparative pipelines: Binary Credit Default Classification vs Salt Lake Property OLS Regression"})]})]}),e.jsx(W,{fileModule:V,title:"classification_and_regression_overview_lab.py",highlightLines:[25,70,110,145,195,235]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(H,{title:"Classification & Regression — Frequently Asked Questions",questions:Y})}),e.jsx("section",{className:"space-y-4",children:e.jsx(X,{content:G,title:"Classification and Regression Study Notes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 7 Note",downloadFileName:"topic7_note.txt"})}),e.jsx("section",{children:e.jsx(K,{note:"Classification and Regression are the two workhorses of commercial machine learning. Remember: a machine doesn't care whether it is predicting a house price or a cancer diagnosis—it only understands loss functions and gradients! As the architect, your responsibility is to choose the correct scorecard (RMSE for continuous scales, Precision-Recall/F1 for discrete decisions) and tune the decision threshold to protect your users from costly errors."})})]})};export{ie as default};
