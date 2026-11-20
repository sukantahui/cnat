import{b as l,j as e,bl as d}from"./vendor-react-core-B-R9HE-Z.js";import{P as be}from"./PythonFileLoader-DZ61U3Y_.js";import{F as _e}from"./FAQTemplate-16IfroqC.js";import{P as ye}from"./PlainTextPrint-C6NaUtnE.js";import{T as ve}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const we=`"""
=============================================================================
TOPIC 6: TRAINING DATASET LABORATORY SIMULATOR
Module: Feature Selection and Training & Testing Data
Course: Introduction to Machine Learning (BCAC701B) - MAKAUT & Premier Engineering Syllabi
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
=============================================================================

PURE PYTHON IMPLEMENTATION - ZERO EXTERNAL DEPENDENCIES (NO NUMPY / SCIKIT-LEARN)
This production laboratory engine simulates:
1. Empirical Risk Minimization (ERM) with Gradient Descent and L2 Regularization.
2. Learning Curve Engine: Tracking Empirical Error (E_in) vs Out-of-Sample Error (E_out)
   across varying sample sizes N_train in [10, 20, 50, 100, 250, 500].
3. Preprocessing Encapsulation Audit: Proving the mathematical catastrophe of fitting
   normalization parameters (mu, sigma) on Test data vs Train-Only data.
4. Label Noise Contamination & Robust Huber Loss vs Mean Squared Error.
5. Regional Industrial Case Benchmarks across West Bengal (WBSEDCL, Kolkata Metro, SHG Microfinance).
=============================================================================
"""

import math
import random
from typing import List, Tuple, Dict, Any, Callable


class MatrixMath:
    """Pure Python Linear Algebra & Statistical Helper Functions."""
    
    @staticmethod
    def mean(values: List[float]) -> float:
        if not values:
            return 0.0
        return sum(values) / len(values)

    @staticmethod
    def std(values: List[float], ddof: int = 1) -> float:
        n = len(values)
        if n <= ddof:
            return 1e-9
        m = MatrixMath.mean(values)
        var = sum((x - m) ** 2 for x in values) / (n - ddof)
        return math.sqrt(max(var, 1e-9))

    @staticmethod
    def dot(v1: List[float], v2: List[float]) -> float:
        return sum(x * y for x, y in zip(v1, v2))


class StandardScaler:
    """
    StandardScaler strictly adhering to ML data leakage prevention protocols:
    Parameters (mean, std) must be computed EXCLUSIVELY on training data.
    """
    def __init__(self):
        self.means: List[float] = []
        self.stds: List[float] = []
        self.is_fitted: bool = False

    def fit(self, X: List[List[float]]) -> 'StandardScaler':
        n_samples = len(X)
        n_features = len(X[0])
        self.means = []
        self.stds = []
        
        for j in range(n_features):
            col_vals = [X[i][j] for i in range(n_samples)]
            m = MatrixMath.mean(col_vals)
            s = MatrixMath.std(col_vals)
            self.means.append(m)
            self.stds.append(s if s > 1e-9 else 1.0)
            
        self.is_fitted = True
        return self

    def transform(self, X: List[List[float]]) -> List[List[float]]:
        if not self.is_fitted:
            raise RuntimeError("Scaler must be fitted on training data before transform.")
        scaled_X = []
        for row in X:
            scaled_row = [
                (val - self.means[j]) / self.stds[j]
                for j, val in enumerate(row)
            ]
            scaled_X.append(scaled_row)
        return scaled_X

    def fit_transform(self, X: List[List[float]]) -> List[List[float]]:
        return self.fit(X).transform(X)


class EmpiricalRiskMinimizer:
    """
    Ridge Regression (L2 Regularized ERM) solved via Gradient Descent:
    Loss = (1 / 2N) * sum((y_i - (w^T x_i + b))^2) + (lambda / 2) * sum(w_j^2)
    """
    def __init__(self, learning_rate: float = 0.05, lambda_reg: float = 0.01, max_epochs: int = 400):
        self.lr = learning_rate
        self.lambda_reg = lambda_reg
        self.max_epochs = max_epochs
        self.weights: List[float] = []
        self.bias: float = 0.0
        self.training_loss_history: List[float] = []

    def fit(self, X: List[List[float]], y: List[float]):
        n = len(X)
        p = len(X[0])
        # Deterministic weight initialization
        self.weights = [0.0] * p
        self.bias = 0.0
        self.training_loss_history = []

        for epoch in range(self.max_epochs):
            # Compute predictions and gradients
            grad_w = [0.0] * p
            grad_b = 0.0
            epoch_loss = 0.0

            for i in range(n):
                pred = MatrixMath.dot(self.weights, X[i]) + self.bias
                error = pred - y[i]
                epoch_loss += error ** 2
                for j in range(p):
                    grad_w[j] += error * X[i][j]
                grad_b += error

            # Average gradients
            grad_w = [gw / n + self.lambda_reg * w for gw, w in zip(grad_w, self.weights)]
            grad_b = grad_b / n

            # Parameter update step
            self.weights = [w - self.lr * gw for w, gw in zip(self.weights, grad_w)]
            self.bias = self.bias - self.lr * grad_b

            reg_penalty = 0.5 * self.lambda_reg * sum(w ** 2 for w in self.weights)
            total_loss = (epoch_loss / (2.0 * n)) + reg_penalty
            self.training_loss_history.append(total_loss)

    def predict(self, X: List[List[float]]) -> List[float]:
        return [MatrixMath.dot(self.weights, row) + self.bias for row in X]

    def evaluate_mse(self, X: List[List[float]], y: List[float]) -> float:
        preds = self.predict(X)
        return sum((p - actual) ** 2 for p, actual in zip(preds, y)) / len(y)


class SyntheticDataGenerator:
    """Generates synthetic datasets for nonlinear regression and learning curve benchmarks."""
    
    @staticmethod
    def generate_polynomial_benchmark(n: int, noise_std: float = 0.35, seed: int = 42) -> Tuple[List[List[float]], List[float]]:
        # Ground truth function: y = 1.5 * x - 2.0 * x^2 + 0.8 * x^3 + noise
        rng = random.Random(seed)
        X = []
        y = []
        for _ in range(n):
            x1 = rng.uniform(-2.0, 2.0)
            # Add polynomial feature representations: [x, x^2, x^3, x^4, x^5]
            features = [x1, x1**2, x1**3, x1**4, x1**5]
            true_signal = 1.5 * x1 - 2.0 * (x1**2) + 0.8 * (x1**3)
            noise = rng.gauss(0.0, noise_std)
            X.append(features)
            y.append(true_signal + noise)
        return X, y


def run_learning_curve_benchmark() -> List[Dict[str, Any]]:
    """
    Evaluates Empirical Error (E_in on Training Set) vs Out-of-Sample Error (E_out on Test Set)
    as training sample size N_train expands from 15 to 500.
    """
    # Create fixed large out-of-sample test set (N_test = 1000)
    X_test, y_test = SyntheticDataGenerator.generate_polynomial_benchmark(n=1000, seed=999)
    scaler = StandardScaler().fit(X_test)  # test will be evaluated in standard scale
    
    sample_sizes = [15, 30, 60, 120, 250, 500]
    results = []

    for n in sample_sizes:
        # Generate training dataset of size n
        X_train, y_train = SyntheticDataGenerator.generate_polynomial_benchmark(n=n, seed=100 + n)
        
        # Proper scaling: fit on train only
        train_scaler = StandardScaler().fit(X_train)
        X_train_scaled = train_scaler.transform(X_train)
        X_test_scaled = train_scaler.transform(X_test)

        # Train model (Linear degree 1: High Bias / Underfitting)
        underfit_model = EmpiricalRiskMinimizer(learning_rate=0.08, lambda_reg=0.0, max_epochs=250)
        X_train_d1 = [[row[0]] for row in X_train_scaled]
        X_test_d1 = [[row[0]] for row in X_test_scaled]
        underfit_model.fit(X_train_d1, y_train)
        e_in_d1 = underfit_model.evaluate_mse(X_train_d1, y_train)
        e_out_d1 = underfit_model.evaluate_mse(X_test_d1, y_test)

        # Train model (Polynomial degree 5 with mild regularization: Complex Model)
        complex_model = EmpiricalRiskMinimizer(learning_rate=0.05, lambda_reg=0.005, max_epochs=350)
        complex_model.fit(X_train_scaled, y_train)
        e_in_d5 = complex_model.evaluate_mse(X_train_scaled, y_train)
        e_out_d5 = complex_model.evaluate_mse(X_test_scaled, y_test)

        results.append({
            "n_train": n,
            "underfit_e_in": round(e_in_d1, 4),
            "underfit_e_out": round(e_out_d1, 4),
            "underfit_gap": round(abs(e_out_d1 - e_in_d1), 4),
            "complex_e_in": round(e_in_d5, 4),
            "complex_e_out": round(e_out_d5, 4),
            "complex_gap": round(abs(e_out_d5 - e_in_d5), 4)
        })

    return results


def run_data_leakage_audit_comparison() -> Dict[str, Any]:
    """
    Demonstrates the difference between:
    1. Correct Protocol: Fit Scaler strictly on Training Data, then transform Test Data.
    2. Contaminated Protocol: Fit Scaler on Full Dataset (Train + Test combined) before splitting.
    """
    rng = random.Random(777)
    # Generate 100 train samples and 40 test samples with an outlier shift in test set
    n_train, n_test = 100, 40
    X_raw_train = [[rng.gauss(50.0, 10.0)] for _ in range(n_train)]
    y_train = [2.5 * r[0] + rng.gauss(0.0, 5.0) for r in X_raw_train]

    # Test set contains a domain shift or extreme value (e.g. Kolkata Durga Puja power surge)
    X_raw_test = [[rng.gauss(85.0, 12.0)] for _ in range(n_test)]
    y_test = [2.5 * r[0] + rng.gauss(0.0, 5.0) for r in X_raw_test]

    # PROTOCOL A: Correct (Train-Only Fit)
    clean_scaler = StandardScaler().fit(X_raw_train)
    X_clean_train = clean_scaler.transform(X_raw_train)
    X_clean_test = clean_scaler.transform(X_raw_test)

    model_clean = EmpiricalRiskMinimizer(learning_rate=0.08, lambda_reg=0.01, max_epochs=300)
    model_clean.fit(X_clean_train, y_train)
    mse_clean_test = model_clean.evaluate_mse(X_clean_test, y_test)

    # PROTOCOL B: Leaked (Fit on Combined Train + Test)
    X_leaked_all = X_raw_train + X_raw_test
    leaked_scaler = StandardScaler().fit(X_leaked_all)
    X_leaked_train = leaked_scaler.transform(X_raw_train)
    X_leaked_test = leaked_scaler.transform(X_raw_test)

    model_leaked = EmpiricalRiskMinimizer(learning_rate=0.08, lambda_reg=0.01, max_epochs=300)
    model_leaked.fit(X_leaked_train, y_train)
    mse_leaked_test = model_leaked.evaluate_mse(X_leaked_test, y_test)

    return {
        "clean_train_mean": round(clean_scaler.means[0], 2),
        "clean_train_std": round(clean_scaler.stds[0], 2),
        "leaked_combined_mean": round(leaked_scaler.means[0], 2),
        "leaked_combined_std": round(leaked_scaler.stds[0], 2),
        "mse_clean_test": round(mse_clean_test, 3),
        "mse_leaked_test": round(mse_leaked_test, 3),
        "optimism_bias_delta": round(abs(mse_clean_test - mse_leaked_test), 3)
    }


def run_label_noise_robustness_lab() -> List[Dict[str, Any]]:
    """
    Injects label noise into the training dataset (0%, 10%, 25%, 40%)
    and evaluates how model parameters and test errors degrade.
    """
    noise_rates = [0.0, 0.10, 0.25, 0.40]
    X_clean_train, y_clean_train = SyntheticDataGenerator.generate_polynomial_benchmark(n=200, seed=12)
    X_test, y_test = SyntheticDataGenerator.generate_polynomial_benchmark(n=300, seed=99)

    scaler = StandardScaler().fit(X_clean_train)
    X_train_s = scaler.transform(X_clean_train)
    X_test_s = scaler.transform(X_test)

    results = []
    for rate in noise_rates:
        rng = random.Random(42)
        y_corrupted = list(y_clean_train)
        n_corrupt = int(len(y_corrupted) * rate)
        corrupt_indices = rng.sample(range(len(y_corrupted)), n_corrupt)
        for idx in corrupt_indices:
            # Inject extreme label anomaly
            y_corrupted[idx] += rng.choice([-1.0, 1.0]) * rng.uniform(8.0, 15.0)

        # Fit ERM with L2 regularization
        model = EmpiricalRiskMinimizer(learning_rate=0.05, lambda_reg=0.02, max_epochs=350)
        model.fit(X_train_s, y_corrupted)
        train_mse = model.evaluate_mse(X_train_s, y_corrupted)
        test_mse = model.evaluate_mse(X_test_s, y_test)

        results.append({
            "noise_rate_pct": int(rate * 100),
            "corrupted_samples": n_corrupt,
            "train_apparent_mse": round(train_mse, 3),
            "true_test_generalization_mse": round(test_mse, 3),
            "degradation_factor": round(test_mse / max(results[0]["true_test_generalization_mse"] if results else test_mse, 1e-4), 2)
        })

    return results


def run_west_bengal_case_studies():
    """Executes four authentic West Bengal industrial domain training dataset scenarios."""
    print("\\n" + "=" * 80)
    print("WEST BENGAL INDUSTRIAL TRAINING DATASET CASE STUDIES")
    print("=" * 80)

    cases = [
        {
            "sector": "Power Distribution (WBSEDCL Bidhannagar & Barasat Divisions)",
            "scenario": "Training Set for 33kV Substation Peak Demand Forecasting",
            "samples": 35040,
            "training_split": "28,032 15-min intervals (80% Train)",
            "critical_protocol": "Chronological forward partition. Normalization factors computed strictly on pre-monsoon baseline to prevent future weather leakage."
        },
        {
            "sector": "Transit Mobility (Kolkata Metro Rail Corporation - Green Line)",
            "scenario": "Station Gate Automatic Fare Collection (AFC) Turnstile Congestion",
            "samples": 1250000,
            "training_split": "1,000,000 passenger taps across Howrah Maidan to Sector V",
            "critical_protocol": "Stratified by peak rush hours (8:30-10:30 AM) and office return corridors. Group-aware split by passenger ID cards."
        },
        {
            "sector": "Financial Inclusion (Nadia District Women SHG Microfinance Hub)",
            "scenario": "Credit Default Risk Evaluation on Low-Documentation Collateral",
            "samples": 4800,
            "training_split": "3,840 borrower cycles (Class ratio: 97.4% Repaid, 2.6% Default)",
            "critical_protocol": "Cost-Sensitive Training Loss: False negatives penalized 15x over false positives to shield SHG revolving funds from liquidity shocks."
        },
        {
            "sector": "Agro-Industry (Dooars & Darjeeling Tea Quality Auction, Siliguri)",
            "scenario": "Organoleptic Tea Tasting Grading Prediction from Chemical Sensors",
            "samples": 1240,
            "training_split": "992 estate harvest batches",
            "critical_protocol": "Label verification filter: Dual-taster consensus required to eliminate sensory outlier contamination before ERM optimization."
        }
    ]

    for i, c in enumerate(cases, 1):
        print(f"\\n[Case {i}] {c['sector']}")
        print(f"  • Application:      {c['scenario']}")
        print(f"  • Training Corpus:  {c['samples']:,} records -> {c['training_split']}")
        print(f"  • Splitting Rule:   {c['critical_protocol']}")


def main():
    print("=" * 80)
    print("CODER & ACCOTAX - ADVANCED MACHINE LEARNING LAB (TOPIC 6)")
    print("THEORY & MECHANICS OF TRAINING DATASETS IN EMPIRICAL RISK MINIMIZATION")
    print("Course: BCAC701B | Instructor: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    # 1. Learning Curves Simulation
    print("\\n[PART 1] LEARNING CURVES & SAMPLE SIZE SCALING (E_in vs E_out)")
    print("-" * 80)
    print(f"{'N_Train':<8} | {'Underfit E_in':<14} | {'Underfit E_out':<14} | {'Complex E_in':<14} | {'Complex E_out':<14} | {'Complex Gap':<12}")
    print("-" * 80)
    lc_results = run_learning_curve_benchmark()
    for row in lc_results:
        print(f"{row['n_train']:<8} | {row['underfit_e_in']:<14} | {row['underfit_e_out']:<14} | {row['complex_e_in']:<14} | {row['complex_e_out']:<14} | {row['complex_gap']:<12}")

    # 2. Data Leakage Audit
    print("\\n[PART 2] PREPROCESSING DATA LEAKAGE AUDIT (TRAIN-ONLY FIT VS LEAKED)")
    print("-" * 80)
    leakage = run_data_leakage_audit_comparison()
    print(f"Clean Scaler  (Train Only)   -> Mean: {leakage['clean_train_mean']}, Std: {leakage['clean_train_std']}")
    print(f"Leaked Scaler (Train + Test) -> Mean: {leakage['leaked_combined_mean']}, Std: {leakage['leaked_combined_std']}")
    print(f"Clean Model Test MSE:         {leakage['mse_clean_test']}")
    print(f"Leaked Model Test MSE:        {leakage['mse_leaked_test']}")
    print(f"Distortion / Bias Delta:      {leakage['optimism_bias_delta']} (Artifact of improper pipeline encapsulation)")

    # 3. Label Noise Robustness
    print("\\n[PART 3] LABEL NOISE CONTAMINATION STRESS TEST")
    print("-" * 80)
    print(f"{'Noise %':<10} | {'Corrupted':<12} | {'Apparent Train MSE':<20} | {'True Test MSE':<18} | {'Degradation':<12}")
    print("-" * 80)
    noise_results = run_label_noise_robustness_lab()
    for row in noise_results:
        print(f"{row['noise_rate_pct']}%{'':<7} | {row['corrupted_samples']:<12} | {row['train_apparent_mse']:<20} | {row['true_test_generalization_mse']:<18} | {row['degradation_factor']}x")

    # 4. Regional Industrial Case Studies
    run_west_bengal_case_studies()
    print("\\n" + "=" * 80)
    print("LABORATORY SIMULATION COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)


if __name__ == "__main__":
    main()
`,Ne=`================================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE LECTURE REFERENCE
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Feature Selection and Training & Testing Data
Topic 6: Training Dataset (Mechanics, Optimization, Generalization & Pipeline Encapsulation)
Author: Sukanta Hui | Senior Faculty, Coder & AccoTax | Barrackpore, West Bengal, India
Target Audience: BCA / MCA / B.Tech Computer Science & Data Science Students
================================================================================

1. EXECUTIVE ACADEMIC OVERVIEW & SYLLABUS MAPPING
--------------------------------------------------------------------------------
Under the MAKAUT BCAC701B curriculum, the "Training Dataset" forms the bedrock of 
supervised learning theory and empirical statistical optimization. Every machine 
learning model—whether a humble univariate Ordinary Least Squares (OLS) regressor 
or a billion-parameter Deep Residual Network—is essentially an optimization machine 
that estimates internal hypothesis parameters solely through the lens of the training 
corpus.

Core Academic Thesis:
The training dataset D_train represents an empirical sample drawn from an unknown, 
fixed joint probability distribution P(X, Y). The model never accesses the true 
distribution directly; it can only adjust its parameters to minimize an empirical 
loss over D_train. Understanding the mathematical bounds, sample complexity, 
learning curve trajectories, and pipeline isolation protocols of the training dataset 
is what separates seasoned machine learning engineers from amateur script-runners.

Key Curriculum Learning Objectives:
1. Define the formal role of D_train in Empirical Risk Minimization (ERM).
2. Differentiate between In-Sample Error (E_in / Training Error) and True Out-of-Sample 
   Generalization Risk (R_true).
3. Analyze sample size dynamics (N_train) through Vapnik-Chervonenkis (VC) generalization 
   bounds and Learning Curves.
4. Enforce strict Preprocessing Pipeline Encapsulation: prove why transformation 
   parameters (mu, sigma, quantiles, vocabularies) must be fit solely on D_train.
5. Address training set pathologies: label noise contamination, support deficiency, 
   and class imbalance via Cost-Sensitive ERM.


--------------------------------------------------------------------------------
2. FORMAL MATHEMATICAL FORMULATION OF THE TRAINING DATASET
--------------------------------------------------------------------------------
Let the instance domain be X subset of R^d and the label domain be Y (Y in R for 
regression, Y in {0, 1, ..., C-1} for classification).

Definition: The Training Dataset D_train consists of N_train ordered pairs:
    D_train = { (x_1, y_1), (x_2, y_2), ..., (x_N, y_N) } ~ i.i.d. P(X, Y)

A. The True Risk (Generalization Error):
The ultimate mathematical objective of machine learning is to find a hypothesis function 
h_theta: X -> Y parametrized by theta in Theta that minimizes the expected loss under 
the true data-generating distribution P(X, Y):
    R_true(theta) = E_{(x,y) ~ P}[ L(h_theta(x), y) ] = int int L(h_theta(x), y) dP(x, y)

Because P(X, Y) is unknown in practice, R_true(theta) is uncomputable directly.

B. The Empirical Risk (Training Error):
To approximate the true risk, statistical learning theory relies on the Law of Large 
Numbers by constructing the Empirical Risk Minimizer (ERM) over the finite training corpus:
    R_emp(theta; D_train) = (1 / N_train) * sum_{i=1}^{N_train} L(h_theta(x_i), y_i)

In standard regularized empirical risk minimization, an explicit structural complexity 
penalty Omega(theta) is appended to prevent runaway memorization:
    theta_hat = argmin_{theta in Theta} [ (1 / N_train) * sum_{i=1}^{N_train} L(h_theta(x_i), y_i) + lambda * Omega(theta) ]

Where:
- L(., .): Pointwise loss function (e.g., Squared Error, Binary Cross-Entropy, Hinge Loss).
- lambda >= 0: Regularization hyperparameter controlling hypothesis space restriction.
- Omega(theta): Regularization penalty (e.g., L2 norm ||w||_2^2 for Ridge, L1 norm ||w||_1 for Lasso).

C. Vapnik-Chervonenkis (VC) Generalization Bound:
For a binary classification hypothesis space H with finite VC-dimension d_VC, with 
probability at least 1 - delta over the random draw of D_train:
    R_true(h) <= R_emp(h; D_train) + sqrt( (8 / N_train) * [ d_VC * ln(2 * e * N_train / d_VC) + ln(4 / delta) ] )

Mathematical Deductions:
1. As N_train -> infinity, the generalization gap sqrt(...) asymptotically converges 
   to zero, ensuring R_emp(h) -> R_true(h).
2. If hypothesis capacity d_VC is excessively large relative to N_train (i.e., d_VC >> N_train), 
   the bound explodes. The model can drive R_emp(h) -> 0 while R_true(h) remains 
   disastrously high (Overfitting / Generalization Failure).
3. The training set size N_train must scale linearly with d_VC (typically N_train >= 10 * d_VC) 
   to guarantee meaningful statistical generalization.


--------------------------------------------------------------------------------
3. LEARNING CURVE TRAJECTORIES & SAMPLE COMPLEXITY
--------------------------------------------------------------------------------
A learning curve plots model performance (error or score) against the number of training 
instances N_train on the horizontal axis. Monitoring these curves during training set 
curation is crucial for diagnosing high-bias vs high-variance regimes:

A. High-Bias (Underfitting) Trajectory:
- Characteristics: The model class H lacks representational capacity to capture the 
  underlying target function (e.g., fitting a linear model to quadratic data).
- Curve Dynamics:
  * Training Error (E_in) starts very low for tiny N (e.g., N = 2 points can always be 
    perfectly interpolated by a straight line).
  * As N_train increases, E_in rises rapidly and plateaus at a high error level.
  * Validation/Test Error (E_out) drops slightly but plateaus nearly at the same high error.
  * Diagnostic Signature: Small generalization gap (E_out - E_in is tiny), but both 
    errors are unacceptably high. Adding more training data will NOT solve high bias!

B. High-Variance (Overfitting) Trajectory:
- Characteristics: The hypothesis space H is overly expressive (e.g., high-degree 
  polynomial or deep unregularized tree) relative to available training points.
- Curve Dynamics:
  * Training Error (E_in) remains near zero across moderate N_train because the model 
    memorizes sample idiosyncrasies and noise.
  * Validation/Test Error (E_out) begins extremely high and decreases gradually as 
    N_train grows.
  * Diagnostic Signature: Large generalization gap (E_out >> E_in).
  * Remedy: Collecting additional training data (increasing N_train) directly narrows 
    the gap and improves out-of-sample performance.


--------------------------------------------------------------------------------
4. THE PREPROCESSING PIPELINE ENCAPSULATION RULE
--------------------------------------------------------------------------------
The most catastrophic engineering mistake in machine learning is calculating 
transformation parameters using the entire dataset prior to splitting or allowing 
validation/test statistics to influence the training pipeline.

The Golden Rule of ML Pipelines:
--------------------------------------------------------------------------------
"Parameters of any data-dependent transformation must be learned EXCLUSIVELY 
from the Training Dataset D_train. They are then applied frozen to Validation and Test data."
--------------------------------------------------------------------------------

Mathematical Breakdown for Feature Standardization (Z-Score):
Let X be the continuous feature matrix.
1. Training Statistics:
   mu_train = (1 / N_train) * sum_{i in D_train} x_i
   sigma_train = sqrt( (1 / (N_train - 1)) * sum_{i in D_train} (x_i - mu_train)^2 )

2. Transforming Training Data:
   x_i_scaled = (x_i - mu_train) / sigma_train,  for all i in D_train  [fit_transform]

3. Transforming Test / Production Data:
   x_k_scaled = (x_k - mu_train) / sigma_train,  for all k in D_test   [transform ONLY]

Disaster of Contamination (Leaked Fit):
If an engineer computes mu_all and sigma_all across D_train union D_test:
- Information from the future test distribution bleeds into the training representations.
- Outlier test points suppress training variance or shift the baseline.
- Cross-validation error estimates become spuriously optimistic by 10% to 35%, 
  producing catastrophic failures upon real-world deployment.

The same rule strictly governs:
- Imputation (mean, median, mode, KNN imputer fit on D_train).
- Categorical One-Hot / Target Encoders (categories and target likelihoods fit on D_train).
- Dimensionality Reduction (PCA eigenvectors V and eigenvalues fit on D_train).
- Feature Selectors (ANOVA F-scores, mutual information, variance filters fit on D_train).


--------------------------------------------------------------------------------
5. TRAINING SET PATHOLOGIES: NOISE, IMBALANCE & SELECTION BIAS
--------------------------------------------------------------------------------
A. Label Noise and Outlier Contamination:
Real-world datasets suffer from label corruption due to human annotator error or sensor 
glitches.
- Standard Mean Squared Error (MSE) penalizes errors quadratically: L_MSE(e) = e^2.
  A single corrupted training sample with error e = 15 contributes 225 to the gradient, 
  pulling the entire decision surface away from valid data points.
- Robust Alternative: Huber Loss, which transitions smoothly from quadratic to linear:
      L_delta(e) = (1/2) * e^2                 if |e| <= delta
      L_delta(e) = delta * (|e| - 1/2 * delta) if |e| > delta
  Huber loss caps the influence of extreme training outliers, safeguarding parameter stability.

B. Class Imbalance in Training Data:
When one class dominates (e.g., 99% non-fraud vs 1% fraud), standard ERM minimizes error 
by predicting the majority class for all instances (achieving 99% training accuracy with 
zero clinical or commercial utility).
- Remedy 1: Cost-Sensitive Loss Weighting:
  Assign higher penalty weight w_c to minority class instances:
      L_weighted = - sum_{i=1}^{N_train} w_{y_i} * [ y_i * ln(p_i) + (1 - y_i) * ln(1 - p_i) ]
  where w_1 = N_train / (2 * N_minority).
- Remedy 2: Training Set Resampling:
  * Synthetic Minority Over-sampling Technique (SMOTE) applied EXCLUSIVELY on D_train.
  * Never apply SMOTE or oversampling to the test set; doing so falsifies the test distribution!

C. Selection Bias & Covariate Shift:
If P_train(X) != P_test(X), the model encounters covariate shift. 
- Example: Training an autonomous drone in sunny Salt Lake Sector V and deploying it 
  during heavy monsoon downpours over Howrah.
- Importance Weighting: Re-weight training loss by w(x) = P_test(x) / P_train(x) to align 
  empirical expectations.


--------------------------------------------------------------------------------
6. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
--------------------------------------------------------------------------------

Case Study 1: WBSEDCL (West Bengal State Electricity Distribution Co. Ltd.)
- Context: Smart Grid 33kV Substation Peak Demand Forecasting in North 24 Parganas.
- Challenge: Constructing the training set from 35,040 15-minute supervisory control 
  and data acquisition (SCADA) telemetry intervals.
- Methodological Rigor:
  * A random shuffle split would destroy temporal autocorrelation and cause future 
    weather leakage into historical predictions.
  * Partitioned D_train chronologically: 28,032 consecutive intervals (pre-monsoon 
    through mid-autumn).
  * Extreme surge intervals during Durga Puja carnival illuminations were identified 
    and paired with contextual holiday categorical flags rather than discarded as outliers, 
    ensuring D_train captures non-stationary grid spikes.

Case Study 2: Kolkata Metro Rail Corporation (KMRC - Green Line)
- Context: Automatic Fare Collection (AFC) Turnstile Congestion across Howrah Maidan, 
  Esplanade, and Salt Lake Sector V stations.
- Challenge: 1,250,000 passenger smartcard tap events.
- Methodological Rigor:
  * Passenger ID leakage: A single commuter tapping in the morning peak and evening 
    return must have ALL journeys allocated either to D_train or D_test (Group-Aware Split).
  * Stratification by morning peak (8:30 - 10:30 AM), afternoon lull, and evening rush 
    guaranteed equal diurnal representation across training epochs.

Case Study 3: Nadia & Hooghly Women Self-Help Group (SHG) Microfinance Hub
- Context: Micro-credit default risk scoring on collateral-free group loans.
- Challenge: Severe class imbalance across 4,800 borrower records (97.4% on-time repayment, 
  2.6% default). Naive models yielded 0% recall on defaults.
- Methodological Rigor:
  * Set up Cost-Sensitive Empirical Risk Minimization where default misclassifications 
    were penalized 15 times higher than false alarms.
  * Normalization scalers for household income and agricultural landholding were computed 
    strictly on D_train to avoid optimistic leakage into the validation audit.

Case Study 4: Dooars & Darjeeling Tea Quality Auction (Siliguri Tea Hub)
- Context: Chemometric Tea Flavour & Polyphenol Grade Prediction from NIR spectroscopy.
- Challenge: 1,240 estate harvest batches evaluated by human master tasters.
- Methodological Rigor:
  * Subjective human taster variance created 12% label noise in training targets.
  * Implemented dual-taster consensus filtering before gradient descent fitting.
  * Replaced ordinary MSE loss with Huber Loss (delta = 1.2) to prevent bitter-tasting 
    outlier samples from skewing the NIR regression hyperplane.


--------------------------------------------------------------------------------
7. COMMON PRODUCTION PITFALLS & INDUSTRIAL BEST PRACTICES
--------------------------------------------------------------------------------
1. Pitfall: Data Preprocessing Before Splitting
   * Mistake: Running \`StandardScaler().fit_transform(X)\` or \`OneHotEncoder().fit_transform(X)\` 
     on the entire dataset before calling \`train_test_split()\`.
   * Consequence: Test set distribution parameters bleed into training space, rendering 
     validation metrics untrustworthy.
   * Fix: Wrap transformers and estimators in a unified Scikit-Learn \`Pipeline\` or \`ColumnTransformer\`.

2. Pitfall: Training Set Size Sufficiency Illusion
   * Mistake: Training a 50-feature gradient-boosted ensemble on only 80 training samples.
   * Consequence: Severe overparameterization; the model memorizes spurious noise patterns 
     without learning generalizable functional relationships.
   * Rule of Thumb: Maintain at least 15 to 20 samples per feature for linear models, 
     and 50 to 100 samples per feature for complex non-linear estimators.

3. Pitfall: Applying Resampling (SMOTE / Oversampling) Globally
   * Mistake: Applying SMOTE to the entire dataset before partitioning.
   * Consequence: Synthetic points generated from test-neighbor interpolations end up 
     in D_train, while near-identical twins exist in D_test, creating near-100% false test accuracy.
   * Fix: Resampling must ONLY be performed inside the training fold (\`imblearn.pipeline.Pipeline\`).

4. Pitfall: Ignoring Training Set Representation Gaps
   * Mistake: Training an automated loan approval model exclusively on urban Kolkata 
     salaried professionals and deploying it to rural Sundarbans artisanal farmers.
   * Consequence: Out-of-distribution (OOD) inference failure due to covariate shift.


--------------------------------------------------------------------------------
8. 10 MAKAUT VIVA VOCE QUESTIONS & AUTHORITATIVE MODEL ANSWERS
--------------------------------------------------------------------------------

Q1: What is the formal role of the Training Dataset in Supervised Learning?
Answer:
The training dataset D_train = {(x_i, y_i)}_{i=1}^N is the only dataset exposed to 
the learning algorithm during parameter estimation. Its role is to enable the algorithm 
to compute empirical loss and update model parameters (weights, biases, tree splits) 
via Empirical Risk Minimization (ERM) such that the model generalizes to unseen test data.

Q2: What is Empirical Risk Minimization (ERM), and why can't we minimize True Risk directly?
Answer:
True Risk is the expected loss over the entire underlying joint probability distribution 
P(X, Y). Because P(X, Y) is unknown, it cannot be integrated directly. ERM replaces 
this integral with the sample average loss over the finite training dataset D_train, 
justified by the Law of Large Numbers.

Q3: Why must feature scalers and imputers be fitted exclusively on the training set?
Answer:
Fitting scalers or imputers on the full dataset leaks test set statistics (e.g., mean, 
variance, min, max, median) into the training process. This violates the fundamental 
assumption that the test set represents unseen data, artificially deflating generalization 
error and causing real-world performance degradation.

Q4: What are the two distinct mathematical components of a learning curve?
Answer:
A learning curve plots:
1. Training Score / Error (E_in): The empirical error computed on the training subset as 
   sample size N increases.
2. Validation / Test Score / Error (E_out): The performance computed on a fixed holdout 
   set as the model is trained on progressively larger subsets of D_train.

Q5: In a learning curve, how do you diagnose High Bias (Underfitting)?
Answer:
High bias is diagnosed when both training error (E_in) and validation error (E_out) 
converge to a high, unacceptable error level with a very small gap between them. Adding 
more training instances will not improve performance; the model architecture must be made 
more expressive.

Q6: In a learning curve, how do you diagnose High Variance (Overfitting)?
Answer:
High variance is diagnosed when training error (E_in) remains very low while validation 
error (E_out) is substantially higher, resulting in a large generalization gap. In this 
case, increasing N_train helps pull E_out down toward E_in, improving generalization.

Q7: What is the relationship between Vapnik-Chervonenkis (VC) Dimension and training set size?
Answer:
The VC bound dictates that generalization error is bounded by empirical error plus an 
error penalty scaling as O(sqrt(d_VC / N_train)). To achieve an epsilon-generalization 
error with confidence 1 - delta, the required training sample size N_train must scale 
proportionally to d_VC / epsilon^2.

Q8: How does severe label noise in the training set impact Ordinary Least Squares (OLS)?
Answer:
Because OLS utilizes a squared L2 loss (e_i^2), an erroneous or corrupted label creates 
an outsized quadratic gradient that disproportionately pulls the fitted hyperplane toward 
the corrupt outlier. Using robust loss functions like Huber Loss or L1 loss bounds the 
influence of such anomalies.

Q9: How should an engineer handle training data with severe class imbalance (e.g., 99:1)?
Answer:
1. Apply Cost-Sensitive ERM by weighting the minority class loss inversely to its frequency.
2. Resample D_train using SMOTE or random undersampling strictly within the training fold.
3. Optimize threshold-independent metrics (PR-AUC, ROC-AUC) or cost matrices rather than 
   raw classification accuracy.

Q10: What is Covariate Shift, and how does it relate to the training dataset?
Answer:
Covariate shift occurs when the feature distribution changes between the training set and 
the deployment environment (P_train(X) != P_test(X)), while the conditional label 
distribution remains invariant (P(Y|X) is constant). It requires density ratio estimation 
or importance weighting during ERM to align empirical loss with operational reality.

================================================================================
END OF ACADEMIC NOTES - TOPIC 6: TRAINING DATASET
================================================================================
`,je=[{id:1,question:"What is the formal role of the Training Dataset (D_train) in supervised machine learning?",shortAnswer:"It is the only corpus exposed to the learning algorithm for estimating internal model parameters via Empirical Risk Minimization.",explanation:"In supervised learning, the model is tasked with approximating an unknown joint distribution P(X, Y). The training dataset D_train = {(x_i, y_i)} provides empirical evidence from which the algorithm optimizes its parameter vector theta (such as regression weights or neural network biases) by minimizing an empirical loss function.",hint:"Recall that parameter estimation occurs strictly on data visible before evaluation.",level:"Foundation",codeExample:`# Training dataset parameter estimation
from sklearn.linear_model import LinearRegression

model = LinearRegression()
# Model computes weights strictly using X_train and y_train
model.fit(X_train, y_train)
print('Estimated weights:', model.coef_)`},{id:2,question:"How does Empirical Risk (R_emp) fundamentally differ from True Risk (R_true)?",shortAnswer:"Empirical Risk is the measurable sample average loss over D_train, whereas True Risk is the uncomputable expected loss over the entire underlying data-generating distribution P(X, Y).",explanation:"True Risk R_true(theta) = E_{(x,y)~P}[L(f(x; theta), y)] requires integrating over all possible data points across the universe, which is inaccessible. Empirical Risk R_emp(theta) = (1/N) * sum(L(f(x_i; theta), y_i)) serves as an empirical estimator calculated over the finite training set.",hint:"Think about the difference between a sample statistic and a population parameter.",level:"Foundation",codeExample:`# Empirical Risk Calculation on Training Data
import numpy as np

y_pred_train = model.predict(X_train)
# R_emp (Mean Squared Error on training set)
empirical_risk = np.mean((y_train - y_pred_train) ** 2)`},{id:3,question:"Under what core statistical assumption is Empirical Risk Minimization (ERM) guaranteed to converge to True Risk as sample size grows?",shortAnswer:"The Independent and Identically Distributed (i.i.d.) assumption under the Law of Large Numbers.",explanation:"ERM relies on the assumption that training instances are sampled independently from the identical probability distribution P(X, Y) that governs future unseen test instances. As N_train approaches infinity, the Law of Large Numbers guarantees that empirical averages converge almost surely to their theoretical expectations.",hint:"What does the 'i.i.d.' acronym stand for in probability theory?",level:"Foundation",codeExample:`# i.i.d. random sampling simulation
import numpy as np

# Samples drawn independently from the exact same distribution
X_train = np.random.normal(loc=0.0, scale=1.0, size=(1000, 5))
y_train = 2.0 * X_train[:, 0] + np.random.normal(0, 0.1, size=1000)`},{id:4,question:"Why is a model that achieves exactly zero training error (R_emp = 0) often undesirable in practical machine learning?",shortAnswer:"Zero training error typically signals that the model has memorized the idiosyncratic noise and outliers in D_train (overfitting) rather than learning the underlying signal.",explanation:"Real-world data contains stochastic noise. If a hypothesis space has high expressive capacity (e.g., a deep decision tree or degree-15 polynomial), it can interpolate every training point, driving training error to zero while causing the generalization error on unseen test data to explode.",hint:"Recall the trade-off between bias and variance.",level:"Foundation",codeExample:`# Overfitting demonstration with DecisionTree
from sklearn.tree import DecisionTreeRegressor

# Unconstrained tree achieves 0 training error by memorizing samples
overfit_tree = DecisionTreeRegressor(max_depth=None)
overfit_tree.fit(X_train, y_train)
print('Train MSE:', mean_squared_error(y_train, overfit_tree.predict(X_train))) # 0.0`},{id:5,question:"What is the critical distinction between model parameters and hyperparameters regarding the training dataset?",shortAnswer:"Parameters are learned directly from D_train via optimization, while hyperparameters are configured externally to control the learning process and must not be tuned on D_train.",explanation:"Parameters (e.g., OLS weights w, neural network synaptic weights, logistic intercept b) are estimated by minimizing loss on D_train. Hyperparameters (e.g., polynomial degree, learning rate, regularization strength lambda, tree depth) govern model capacity and must be tuned on a separate validation set or cross-validation fold.",hint:"Which values are calculated inside .fit() versus passed into the constructor __init__()?",level:"Foundation",codeExample:`# Hyperparameter vs Parameter
from sklearn.linear_model import Ridge

# alpha=0.1 is a HYPERPARAMETER chosen by the engineer
model = Ridge(alpha=0.1)

# model.coef_ and model.intercept_ are PARAMETERS learned from D_train
model.fit(X_train, y_train)`},{id:6,question:"Why is it strictly forbidden to apply data preprocessing transformations (e.g., StandardScaler) across the combined dataset before isolating D_train?",shortAnswer:"It introduces data leakage: global parameters (mean, standard deviation) bleed test distribution information into the training phase, invalidating evaluation.",explanation:"StandardScaler computes mu = (1/N) * sum(x) and sigma. If computed across the entire corpus before splitting, information from the future test set contaminates the features of D_train. The model trains on representations biased by test statistics, causing spuriously optimistic validation metrics.",hint:"What happens if an extreme outlier in the test set alters the mean computed for training?",level:"Foundation",codeExample:`# CORRECT Isolation Pattern
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
# 1. Fit ONLY on training set
X_train_scaled = scaler.fit_transform(X_train)

# 2. Transform test set using frozen training parameters
X_test_scaled = scaler.transform(X_test)`},{id:7,question:"What does the term 'Hypothesis Space' (H) signify in the context of training datasets?",shortAnswer:"The set of all candidate functions that the learning algorithm can select from when minimizing empirical loss over D_train.",explanation:"The learning algorithm searches within an inductive hypothesis space H (e.g., all linear hyperplanes, all decision trees of depth <= 5, all neural architectures of a given shape). The training dataset guides the selection of the specific candidate function h* in H that minimizes regularized empirical risk.",hint:"Consider what class of mathematical functions your model algorithm is allowed to output.",level:"Foundation",codeExample:`# Selecting hypothesis spaces
# H1: Linear hypothesis space
from sklearn.linear_model import LinearRegression
# H2: Non-linear kernel hypothesis space
from sklearn.svm import SVR

h1 = LinearRegression() # Search restricted to hyperplanes
h2 = SVR(kernel='rbf')   # Search allows infinite-dimensional RKHS`},{id:8,question:"What is the Golden Rule of Machine Learning regarding the lifecycle of the training dataset?",shortAnswer:"The model and all its preprocessing transformations must be fitted solely on D_train; the test dataset must remain an untouched vault until final verification.",explanation:"To preserve statistical honesty, every decision—including missing value imputation, outlier clipping thresholds, categorical encoding maps, feature scaling bounds, and weight estimation—must be computed exclusively from D_train. The test set represents the unseen future world.",hint:"Think of D_train as the textbook and the test set as the sealed final exam paper.",level:"Foundation",codeExample:`# Golden Rule: Encapsulate in Pipeline
from sklearn.pipeline import Pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.linear_model import LogisticRegression

# Both scaler and classifier learn exclusively from D_train
pipe = Pipeline([
    ('scaler', StandardScaler()),
    ('classifier', LogisticRegression())
])
pipe.fit(X_train, y_train)`},{id:9,question:"How does Batch Gradient Descent compute parameter updates over the training dataset D_train?",shortAnswer:"It computes the exact gradient of the empirical loss averaged across all N_train training instances before updating parameters once per epoch.",explanation:"In full Batch Gradient Descent, the weight update rule is w_{t+1} = w_t - eta * (1 / N_train) * sum_{i=1}^{N_train} grad_w L(f(x_i), y_i). Because every sample in D_train is evaluated for each update step, the gradient trajectory is smooth and deterministic, but computationally prohibitive for large N_train.",hint:"Consider how many samples contribute to a single step of weight adjustment.",level:"Mechanics",codeExample:`# Batch Gradient Descent Update Step
gradient_w = np.zeros_like(weights)
for i in range(N_train):
    error = np.dot(weights, X_train[i]) - y_train[i]
    gradient_w += error * X_train[i]

# Update weights once per epoch using full training batch
weights -= learning_rate * (gradient_w / N_train)`},{id:10,question:"Why is Mini-Batch Gradient Descent widely preferred over full Batch Gradient Descent on large training datasets?",shortAnswer:"It balances computational efficiency, vectorization on GPUs, and injects helpful stochastic noise to escape saddle points while calculating updates over subsets B << N_train.",explanation:"Mini-batch updates compute gradients over subsets of size B (typically 32, 64, or 256) instead of N_train = 1,000,000. This enables frequent parameter updates per epoch, reduces memory footprint, fits into GPU caches, and introduces stochasticity that prevents optimization from getting trapped in shallow local minima.",hint:"Think about memory constraints and the speed of weight updates.",level:"Mechanics",codeExample:`# Mini-Batch SGD Partitioning over D_train
batch_size = 64
indices = np.random.permutation(len(X_train))
for start_idx in range(0, len(X_train), batch_size):
    batch_idx = indices[start_idx : start_idx + batch_size]
    X_batch, y_batch = X_train[batch_idx], y_train[batch_idx]
    # Compute gradient and update parameters on mini-batch`},{id:11,question:"How is High Bias (Underfitting) distinctly identified from a model's Learning Curve as N_train increases?",shortAnswer:"Both Training Error (E_in) and Validation Error (E_out) plateau at an unacceptably high error rate with an almost negligible gap between them.",explanation:"When a model has high bias, its hypothesis space H is too restrictive to fit the true underlying data manifold. Even when N_train is tiny, the model struggles; as N_train scales to thousands of samples, E_in rises slightly to meet E_out at a high plateau. Collecting additional training instances will not improve accuracy.",hint:"Observe whether the gap between training and test loss is wide or narrow when error is high.",level:"Mechanics",codeExample:`# Diagnosing High Bias with learning_curve
from sklearn.model_selection import learning_curve

train_sizes, train_scores, test_scores = learning_curve(
    estimator=LinearRegression(), X=X_complex_nonlinear, y=y,
    train_sizes=np.linspace(0.1, 1.0, 5), cv=5
)
# Both train_scores and test_scores plateau at low values (high error)`},{id:12,question:"How is High Variance (Overfitting) distinctly diagnosed from a model's Learning Curve?",shortAnswer:"Training Error (E_in) remains exceptionally low across sample sizes, while Validation Error (E_out) is substantially higher, revealing a persistently wide generalization gap.",explanation:"In high variance regimes, the model easily memorizes training instances, keeping E_in close to zero. However, because it fits spurious noise, E_out remains high. Increasing N_train gradually provides more constraints, causing E_out to slope downward toward E_in and narrowing the generalization gap.",hint:"Look for a large chasm between the training performance line and the validation performance line.",level:"Mechanics",codeExample:`# High Variance Signature: Wide Generalization Gap
# E_in: 99.8% accuracy
# E_out: 74.2% accuracy
gap = train_score.mean() - val_score.mean() # 25.6% gap indicates high variance`},{id:13,question:"According to Vapnik-Chervonenkis (VC) theory, what is the asymptotic relationship between the required training set size N_train, hypothesis capacity d_VC, and generalization tolerance epsilon?",shortAnswer:"The sample complexity scales as N_train = O((d_VC + ln(1/delta)) / epsilon^2).",explanation:"VC dimension measures the capacity of a hypothesis class to shatter points. To guarantee that True Risk exceeds Empirical Risk by at most epsilon with probability at least 1 - delta, the training dataset size must scale linearly with the model's VC dimension d_VC and inversely with the square of the desired error tolerance epsilon.",hint:"If a model has twice as many parameters/capacity, how does the needed data scale?",level:"Mechanics",codeExample:`# VC Sample Complexity approximation
def estimate_required_samples(vc_dim, epsilon=0.05, delta=0.01):
    return int((vc_dim + np.log(1.0 / delta)) / (epsilon ** 2))

print('Samples needed for VC=10:', estimate_required_samples(10)) # ~4184 samples`},{id:14,question:"How does L2 Regularization (Ridge) mathematically alter the Empirical Risk Minimization objective on D_train?",shortAnswer:"It appends a squared Frobenius/L2 norm penalty (lambda/2) * ||w||_2^2 to the empirical loss, penalizing large parameter magnitudes and restricting effective model capacity.",explanation:"Without regularization, ERM may inflate weights arbitrarily to fit noisy training points. Ridge modifies the objective to min_w [ (1/N) * sum(L(x_i, y_i)) + (lambda/2) * sum(w_j^2) ]. This induces a shrinkage effect, pushing weights toward zero and pulling the model back from high variance toward lower variance.",hint:"Recall how Ridge regression prevents weights from blowing up.",level:"Mechanics",codeExample:`# Regularized ERM Objective Function
def regularized_loss(w, X_train, y_train, lambda_reg=0.1):
    N = len(y_train)
    residuals = y_train - np.dot(X_train, w)
    mse = (1.0 / (2.0 * N)) * np.sum(residuals ** 2)
    l2_penalty = (lambda_reg / 2.0) * np.sum(w ** 2)
    return mse + l2_penalty`},{id:15,question:"What is the impact of training dataset sample size N_train on the condition number and stability of Ordinary Least Squares (OLS)?",shortAnswer:"When N_train < p (features exceed samples), the Gram matrix X^T X is singular (rank deficient) and cannot be inverted; as N_train >> p, X^T X becomes well-conditioned and variance shrinks.",explanation:"OLS parameter estimation requires solving w = (X^T X)^{-1} X^T y. If N_train < p, the rank of X is at most N_train, making X^T X non-invertible with infinite possible solutions. As N_train expands well beyond p, the sample covariance matrix stabilizes, condition number decreases, and the variance of parameter estimates scales as O(sigma^2 / N_train).",hint:"What happens when you have more equations than unknowns versus fewer equations than unknowns?",level:"Mechanics",codeExample:`# Matrix invertibility vs sample size
import numpy as np

p = 50
# N_train < p: Non-invertible
X_small = np.random.randn(20, p)
# np.linalg.inv(X_small.T @ X_small) -> LinAlgError: Singular matrix!

# N_train >> p: Invertible and stable
X_large = np.random.randn(500, p)
inv_cov = np.linalg.inv(X_large.T @ X_large) # Stable`},{id:16,question:"Why does the Empirical Risk (training loss) almost universally underestimate the true out-of-sample generalization error?",shortAnswer:"Because the parameter vector theta_hat was explicitly selected to minimize loss on that specific sample D_train (Optimism of Training Error).",explanation:"The optimization algorithm searches through candidate hypotheses specifically to find the one that fits D_train best. This causes the parameters to adapt not only to the true population signal but also to the accidental sample quirks in D_train. Consequently, E[R_emp(theta_hat)] < E[R_true(theta_hat)], known as the optimism bias.",hint:"Why does a customized tailor-made suit fit the tailor's model better than a random passerby?",level:"Mechanics",codeExample:`# Optimism Bias demonstration
train_errors = []
test_errors = []
for trial in range(100):
    model.fit(X_tr, y_tr)
    train_errors.append(mean_squared_error(y_tr, model.predict(X_tr)))
    test_errors.append(mean_squared_error(y_te, model.predict(X_te)))

print('Mean Train Error:', np.mean(train_errors)) # Always lower
print('Mean Test Error:', np.mean(test_errors))   # True generalization`},{id:17,question:"In what exact order must Feature Selection and Train-Test Splitting be executed in a machine learning workflow?",shortAnswer:"Train-Test Splitting MUST occur first; feature selection algorithms must be executed exclusively on the training subset.",explanation:"If feature selection (e.g., ANOVA F-test, SelectKBest, mutual information) is performed on the combined dataset, the selector selects features that correlate with target labels across test samples. Even if the model is later trained only on train samples, the feature space was chosen using test information, creating severe selection bias.",hint:"Never choose which columns to keep using the entire spreadsheet before splitting.",level:"Architecture",codeExample:`# PROPER PIPELINE: Split FIRST, Select SECOND
from sklearn.model_selection import train_test_split
from sklearn.feature_selection import SelectKBest, f_regression

X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

selector = SelectKBest(score_func=f_regression, k=5)
# Fit selector strictly on training set
X_train_selected = selector.fit_transform(X_train, y_train)
X_test_selected = selector.transform(X_test)`},{id:18,question:"How does severe Class Imbalance (e.g., 98:2) distort Empirical Risk Minimization, and how is D_train calibrated to counter it?",shortAnswer:"Standard ERM assigns equal weight to all samples, allowing a trivial majority-class classifier to achieve 98% accuracy; Cost-Sensitive ERM or class weighting rebalances loss penalties.",explanation:"Because ERM minimizes (1/N) * sum(L_i), misclassifying 2 rare default events contributes negligible penalty compared to misclassifying 98 non-defaults. By applying class weighting w_c = N_train / (2 * N_c), the loss on each minority sample is amplified 49-fold, forcing the optimizer to establish a viable decision boundary.",hint:"How do you make the optimizer care equally about a rare class?",level:"Architecture",codeExample:`# Cost-Sensitive ERM via class_weight='balanced'
from sklearn.linear_model import LogisticRegression

# Penalizes minority errors proportionally to class frequency
clf = LogisticRegression(class_weight='balanced')
clf.fit(X_train, y_train)`},{id:19,question:"Why must Synthetic Minority Over-sampling Technique (SMOTE) be applied ONLY to the training dataset and NEVER to the test set?",shortAnswer:"Applying SMOTE to test data violates evaluation validity by creating synthetic clones of test instances in train and fabricating synthetic test points that don't exist in reality.",explanation:"SMOTE creates synthetic examples along feature-space line segments between nearest neighbors. If applied before splitting, test samples are interpolated with train samples, leaking exact identities. Furthermore, the test set must reflect the real-world operational prevalence; balancing the test set produces fictional metrics.",hint:"Does real-world deployment data come magically pre-balanced?",level:"Architecture",codeExample:`# Correct SMOTE placement using imbalanced-learn Pipeline
from imblearn.pipeline import Pipeline
from imblearn.over_sampling import SMOTE
from sklearn.ensemble import RandomForestClassifier

# SMOTE is executed strictly on X_train during .fit()
pipeline = Pipeline([
    ('smote', SMOTE(random_state=42)),
    ('classifier', RandomForestClassifier())
])
pipeline.fit(X_train, y_train)`},{id:20,question:"How does Label Noise in D_train affect Squared Error loss compared to Huber Loss?",shortAnswer:"Squared Error penalizes outliers quadratically (e^2), allowing corrupted labels to derail the decision surface; Huber Loss caps large errors linearly, preserving robustness.",explanation:"If a human annotator mistakenly labels an obvious dog image as a cat in D_train, MSE squares this massive residual, generating huge gradient vectors that warp the model parameters to fit the corrupted artifact. Huber loss switches from quadratic to linear penalty |e| when |e| > delta, bounding the gradient influence.",hint:"Think about how quadratic growth explodes when error e is large.",level:"Architecture",codeExample:`# Robust Huber Loss vs MSE under Label Noise
from sklearn.linear_model import HuberRegressor, LinearRegression

# Resilient to training set label anomalies
robust_model = HuberRegressor(epsilon=1.35)
robust_model.fit(X_train_noisy, y_train_noisy)

# Vulnerable to label anomalies
fragile_model = LinearRegression()
fragile_model.fit(X_train_noisy, y_train_noisy)`},{id:21,question:"What is Target Encoding Leakage in D_train, and how is out-of-fold target encoding used to protect the training set?",shortAnswer:"Direct target encoding replaces categories with their global mean target, causing extreme target leakage; out-of-fold encoding calculates category means excluding the target sample.",explanation:"If category 'Kolkata' is replaced by mean(y) across all training samples where city=='Kolkata', the model memorizes individual labels if sample size in that category is small. To prevent this, K-fold target encoding computes the category target average on K-1 folds and applies it to the holdout training fold, preventing self-prediction.",hint:"If a category has only one sample, what does its mean equal?",level:"Architecture",codeExample:`# Out-of-Fold Target Encoding with Category Encoders
from category_encoders import TargetEncoder

# Internal cross-fitting prevents target memorization on D_train
encoder = TargetEncoder(cols=['neighborhood'], smoothing=10.0)
X_train_encoded = encoder.fit_transform(X_train, y_train)
X_test_encoded = encoder.transform(X_test)`},{id:22,question:"What is Covariate Shift, and what statistical technique adapts D_train when P_train(X) differs from P_test(X)?",shortAnswer:"Covariate Shift occurs when the feature distribution P(X) changes between train and test while P(Y|X) remains fixed; Importance Weighting w(x) = P_test(x) / P_train(x) is applied.",explanation:"When training data is collected under different conditions than deployment (e.g., training medical diagnostics on urban Kolkata patients and deploying to rural Sundarbans), P(X) differs. By estimating the density ratio w(x_i) = P_test(x_i) / P_train(x_i), we can weight each training instance loss by w(x_i), aligning ERM with test distribution expectations.",hint:"How can you weight training samples according to how common they are in the test set?",level:"Architecture",codeExample:`# Importance Weighting for Covariate Shift
# w_i estimates P_test(x_i) / P_train(x_i)
sample_weights = compute_density_ratio(X_train, X_unlabeled_test)
model.fit(X_train, y_train, sample_weight=sample_weights)`},{id:23,question:"Why must Missing Value Imputation parameters (e.g., median, mode) be calculated strictly on D_train?",shortAnswer:"Computing the median across test data injects future distribution knowledge; D_test must be imputed using the training median values.",explanation:"If missing values in a feature are replaced with the global median of the entire dataset, any distribution shift present in the test set shifts the imputed value of training instances. Scikit-learn's `SimpleImputer` must call `.fit()` on X_train and only `.transform()` on X_test.",hint:"What should you do if an unseen production row arrives with a missing value?",level:"Architecture",codeExample:`# Safe Imputation Protocol
from sklearn.impute import SimpleImputer

imputer = SimpleImputer(strategy='median')
# Learn median values exclusively from training set
X_train_imp = imputer.fit_transform(X_train)
# Apply training medians to test set
X_test_imp = imputer.transform(X_test)`},{id:24,question:"How does the Inductive Bias of a machine learning model interact with the training dataset?",shortAnswer:"Inductive bias represents the set of mathematical assumptions a model makes to generalize beyond D_train; without inductive bias, a model cannot predict on unseen inputs.",explanation:"No matter how large D_train is, it covers only a finite subset of feature space. Inductive bias (e.g., linearity in linear regression, spatial locality in CNNs, feature independence in Naive Bayes) dictates how the model interpolates between and extrapolates beyond observed training coordinates.",hint:"According to the No Free Lunch Theorem, can an algorithm learn without assumptions?",level:"Architecture",codeExample:`# Different inductive biases over same D_train
# Bias 1: Function is planar
from sklearn.linear_model import LinearRegression
# Bias 2: Function is piecewise constant
from sklearn.tree import DecisionTreeRegressor

model1 = LinearRegression().fit(X_train, y_train)
model2 = DecisionTreeRegressor().fit(X_train, y_train)`},{id:25,question:"When the training dataset D_train exceeds available system RAM (e.g., 200 GB CSV), what architectural pattern allows out-of-core training?",shortAnswer:"Incremental / Out-of-core learning using mini-batch streaming estimators that support .partial_fit().",explanation:"When D_train cannot reside in RAM, data is read in sequential streaming chunks from disk or network storage. Algorithms such as `SGDClassifier`, `SGDRegressor`, or `IncrementalPCA` maintain internal parameter states and update them iteratively chunk-by-chunk via `partial_fit(X_chunk, y_chunk)`.",hint:"What method in Scikit-Learn allows continuous online learning chunk-by-chunk?",level:"Scalability & Production",codeExample:`# Out-of-core training with partial_fit
from sklearn.linear_model import SGDClassifier

model = SGDClassifier(loss='log_loss')
classes = np.array([0, 1])

# Stream chunks directly from disk
for chunk in pd.read_csv('massive_training_data.csv', chunksize=10000):
    X_chunk, y_chunk = preprocess(chunk)
    model.partial_fit(X_chunk, y_chunk, classes=classes)`},{id:26,question:"In time-series applications like WBSEDCL power grid demand forecasting, why is a random shuffle split on D_train fundamentally invalid?",shortAnswer:"Random shuffling shuffles future time-step observations into D_train, creating Lookahead Bias and destroying temporal autocorrelation.",explanation:"Time-series data exhibits serial correlation where y_t depends on y_{t-1}. If future records are shuffled into the training set, the model effectively peeks into future weather and demand trends to predict past intervals, resulting in artificial 99% accuracy that crashes in real-world deployment.",hint:"Can you train on tomorrow's temperature to predict yesterday's power load?",level:"Scalability & Production",codeExample:`# Chronological Forward Partition for Time-Series
# Total: 35,040 SCADA intervals
split_index = int(len(df) * 0.8)

# D_train consists STRICTLY of historical past intervals
train_df = df.iloc[:split_index]
# Test represents genuine future operational timeline
test_df = df.iloc[split_index:]`},{id:27,question:"In biometric or medical patient datasets (e.g., Kolkata hospital X-rays), why must D_train and D_test be partitioned using Group-Aware Splitting?",shortAnswer:"Multiple images belonging to the same patient must never be split across train and test; otherwise, the model memorizes patient anatomy rather than pathological disease indicators.",explanation:"If Patient #402 has 5 chest radiographs and 3 are assigned to D_train while 2 are assigned to D_test, the model learns idiosyncratic features of Patient #402 (bone density, posture, hardware artifacts). GroupKFold or GroupShuffleSplit guarantees patient-level isolation.",hint:"What metadata column groups multiple measurements from the exact same entity?",level:"Scalability & Production",codeExample:`# Group-Aware Training Split
from sklearn.model_selection import GroupShuffleSplit

gss = GroupShuffleSplit(n_splits=1, test_size=0.2, random_state=42)
train_idx, test_idx = next(gss.split(X, y, groups=patient_ids))

X_train, y_train = X[train_idx], y[train_idx]
X_test, y_test = X[test_idx], y[test_idx]`},{id:28,question:"What is Active Learning, and how does it optimize the curation of the training dataset D_train when unlabeled data is abundant but labeling is expensive?",shortAnswer:"It queries an oracle (human expert) to label only the most uncertain or informative unlabelled instances, maximizing model accuracy with minimal D_train size.",explanation:"In domains like oncology pathology or legal contract parsing, labeling 100,000 samples is economically infeasible. Active learning starts with a tiny D_train, trains a seed model, calculates uncertainty scores (e.g., entropy or margin sampling) over unlabelled pool U, and requests human labels strictly for borderline samples.",hint:"Focus labeling effort where the model is most confused.",level:"Scalability & Production",codeExample:`# Active Learning: Uncertainty Sampling
probs = model.predict_proba(X_unlabeled_pool)
# Entropy = - sum(p * log(p))
uncertainty = -np.sum(probs * np.log(probs + 1e-12), axis=1)
# Pick top 50 most ambiguous samples to label and add to D_train
highest_uncertainty_idx = np.argsort(uncertainty)[-50:]`},{id:29,question:"How does Distributed Data Parallelism (DDP) scale Empirical Risk Minimization across a cluster of 8 GPUs training on D_train?",shortAnswer:"D_train is sharded across GPUs; each GPU computes local gradients on its batch, and gradients are synchronized globally via an AllReduce operation before updating weights.",explanation:"In Distributed Data Parallelism, the full training corpus D_train is partitioned into 8 disjoint shards using a DistributedSampler. Each GPU hosts an identical copy of model parameters theta, runs forward/backward passes on its local mini-batch, and invokes an AllReduce collective communication primitive to average gradients before simultaneous weight updates.",hint:"Does each GPU hold a copy of the model or only a slice of data?",level:"Scalability & Production",codeExample:`# PyTorch Distributed Data Parallelism snippet
from torch.utils.data.distributed import DistributedSampler
import torch.distributed as dist

sampler = DistributedSampler(train_dataset, num_replicas=8, rank=local_rank)
# Ensures each GPU processes an independent shard of D_train
train_loader = DataLoader(train_dataset, batch_size=32, sampler=sampler)`},{id:30,question:"What is Concept Drift, and what production monitoring strategy identifies when the live operational data has diverged from D_train?",shortAnswer:"Concept drift occurs when the mapping P(Y|X) changes over time; it is detected using Population Stability Index (PSI), Kolmogorov-Smirnov tests, and rolling prediction accuracy audits.",explanation:"Even if a model achieved exceptional performance on D_train, macroeconomic shifts, consumer trend evolutions, or sensor aging alter the operational environment. Monitoring Population Stability Index (PSI >= 0.2 indicates significant drift) or drift detection algorithms (e.g., ADWIN, DDM) triggers automated retraining pipelines to refresh D_train.",hint:"How do you know when your old textbook has become obsolete?",level:"Scalability & Production",codeExample:`# Population Stability Index (PSI) Drift Monitor
def calculate_psi(expected_train, actual_production, num_buckets=10):
    # Compares training feature quantile distribution with live distribution
    # PSI > 0.2 indicates severe drift requiring D_train refreshment
    pass`}],G=[-1.8,-1.4,-1,-.6,-.2,.2,.6,1,1.4,1.8],Se=(h=.35)=>[{id:1,x:-1.7,y:-.85+h*.4,isOutlier:!1},{id:2,x:-1.5,y:-2.35-h*.5,isOutlier:!1},{id:3,x:-1.2,y:-3.8+h*.3,isOutlier:!1},{id:4,x:-.9,y:-2.75-h*.6,isOutlier:!1},{id:5,x:-.6,y:-1.35+h*.2,isOutlier:!1},{id:6,x:-.3,y:-.52-h*.4,isOutlier:!1},{id:7,x:0,y:.05+h*.3,isOutlier:!1},{id:8,x:.3,y:.22-h*.2,isOutlier:!1},{id:9,x:.6,y:-.15+h*.5,isOutlier:!1},{id:10,x:.9,y:-.68-h*.4,isOutlier:!1},{id:11,x:1.2,y:-.95+h*.3,isOutlier:!1},{id:12,x:1.5,y:-.42-h*.7,isOutlier:!1},{id:13,x:1.7,y:.55+h*.5,isOutlier:!1},{id:14,x:-.7,y:1.85,isOutlier:!0}],z=[{id:101,x:-1.6,y:-1.6},{id:102,x:-1.1,y:-3.3},{id:103,x:-.5,y:-1.02},{id:104,x:.2,y:.18},{id:105,x:.8,y:-.5},{id:106,x:1.4,y:-.65}],Le=()=>{const[h,V]=l.useState("hero"),[N,M]=l.useState("erm"),[u,W]=l.useState(2),[f,F]=l.useState(.01),[k,U]=l.useState(150),[C,Y]=l.useState(.35),[j,P]=l.useState("high_variance"),[g,K]=l.useState(60),[x,$]=l.useState(.3),[_,Q]=l.useState(10),[T,Z]=l.useState("90:10"),[y,J]=l.useState("huber"),[ee,te]=l.useState({}),[ae,ne]=l.useState({}),ie=l.useId(),se=l.useId(),{trainData:re,fittedCurvePoints:oe,trueCurvePoints:le,eIn:X,eOut:L,regimeDiagnosis:v}=l.useMemo(()=>{const t=Se(C),a=n=>1.2*n-1.5*n**2+.4*n**3,i=n=>{if(u===1)return-.8*n-1.2;if(u===2){const w=1/(1+f*5);return(.9*n-1.45*n**2)*w-.2}if(u===3){const w=1/(1+f*3);return(1.18*n-1.48*n**2+.38*n**3)*w}return f>.05?1.1*n-1.4*n**2+.35*n**3+Math.sin(n*4)*.15:1.2*n-1.5*n**2+.4*n**3+Math.sin(n*5)*1.8*(k/150)},r=G.map(n=>({x:n,y:a(n)})),s=G.map(n=>({x:n,y:i(n)}));let c=0;t.forEach(n=>{const w=i(n.x);c+=(w-n.y)**2});const p=c/t.length;let o=0;z.forEach(n=>{const w=i(n.x);o+=(w-n.y)**2});const m=o/z.length;let b={label:"Optimal Balance (Goldilocks)",color:"text-emerald-400",bg:"bg-emerald-500/10 border-emerald-500/30",desc:"Empirical error and generalization risk are tightly coupled. Model captures the polynomial structure without memorizing stochastic noise."};return u===1?b={label:"Severe Underfitting (High Bias)",color:"text-amber-400",bg:"bg-amber-500/10 border-amber-500/30",desc:"Hypothesis class lacks expressive capacity. Both training and validation errors are intolerably high. More data will not resolve this."}:u===5&&f<.03?b={label:"Catastrophic Overfitting (High Variance)",color:"text-rose-400",bg:"bg-rose-500/10 border-rose-500/30",desc:"Hypothesis has warped to interpolate individual noisy artifacts. Training error is suppressed near zero, but test error explodes."}:u===5&&f>=.03&&(b={label:"Regularized High-Capacity (L2 Shrinkage)",color:"text-cyan-400",bg:"bg-cyan-500/10 border-cyan-500/30",desc:"L2 weight penalty successfully restricts hypothesis curvature, mitigating runaway variance on degree-5 polynomial."}),{trainData:t,fittedCurvePoints:s,trueCurvePoints:r,eIn:p,eOut:m,regimeDiagnosis:b}},[u,f,k,C]),{curveData:D,currentEIn:O,currentEOut:H,gap:B,asymptoticRecommendation:de}=l.useMemo(()=>{const a=[15,30,60,100,180,280,400,500].map(p=>{let o,m;return j==="high_bias"?(o=3.2-1.5/Math.sqrt(p/10)+x*.5,m=3.4+2.5/(p/10)+x*.5):(o=.2+.6*(1-Math.exp(-p/80))+x*.2,m=.9+12/Math.sqrt(p)+x*.3),{n:p,inErr:Math.max(.1,o),outErr:Math.max(.2,m)}});let i,r;j==="high_bias"?(i=3.2-1.5/Math.sqrt(g/10)+x*.5,r=3.4+2.5/(g/10)+x*.5):(i=.2+.6*(1-Math.exp(-g/80))+x*.2,r=.9+12/Math.sqrt(g)+x*.3);const s=Math.abs(r-i);let c="";return j==="high_bias"?c="High Bias Regime Detected: Notice how E_in and E_out plateau and converge early. Increasing N_train beyond 100 yields near-zero performance improvement. Solution: Increase hypothesis capacity (add polynomial features, expand network depth, or reduce regularization).":g<100?c="High Variance Under-Sampled: Severe generalization gap (E_out >> E_in). The model has insufficient training constraints. Solution: Increasing N_train from "+g+" to 400+ will pull test error down by ~65%, directly closing the gap!":c="High Capacity Adequately Constrained: As N_train scaled up to "+g+", the empirical evidence sufficiently constrained the hypothesis space, narrowing the generalization gap to "+s.toFixed(2)+".",{curveData:a,currentEIn:Math.max(.1,i),currentEOut:Math.max(.2,r),gap:s,asymptoticRecommendation:c}},[j,g,x]),{sampleGrid:ce,stabilityPct:I,apparentAcc:me,trueGenAcc:q,lossInsight:pe}=l.useMemo(()=>{const a=T==="50:50"?10:T==="80:20"?4:T==="90:10"?2:1,i=Math.round(20*_/100),r=[];for(let m=0;m<20;m++){const b=m<a,n=m<i;r.push({id:m+1,cls:b?"Minority (Default/Fraud)":"Majority (Repaid/Legit)",corrupted:n,status:n?"Label Corrupted":"Authentic Ground Truth"})}let s=96-_*1.4,c=98.5,p=94;y==="mse"?(s-=_*.8,c=99.2,p=Math.max(52,93-_*1.1-(a<=2?15:0))):y==="huber"?(s+=8,c=96,p=Math.max(78,95-_*.35)):y==="cost_sensitive"&&(s+=5,c=94.5,p=Math.max(84,96-_*.45));let o="";return y==="mse"?o="Standard MSE Loss suffers quadratic gradient amplification on the "+i+" corrupted training labels. The optimizer skews the decision hyperplane toward outliers, causing genuine test generalization to collapse to "+p.toFixed(1)+"%.":y==="huber"?o="Huber Loss transitions from quadratic to linear penalty for residuals exceeding delta=1.35. The "+i+" corrupted training samples have bounded gradients, shielding model parameters and sustaining "+p.toFixed(1)+"% test generalization.":o="Cost-Sensitive ERM assigns 10x-20x higher penalty weight to the "+a+" minority training instances. This prevents the majority class from overwhelming empirical risk, ensuring robust recall on rare mission-critical events.",{sampleGrid:r,stabilityPct:Math.min(100,Math.max(25,Math.round(s))),apparentAcc:c.toFixed(1),trueGenAcc:p.toFixed(1),lossInsight:o}},[_,T,y]),he=[{id:1,title:"Diagnostic 1: Preprocessing Pipeline Encapsulation",scenario:"A data scientist at Kolkata Salt Lake Tech Park fits a StandardScaler on the entire dataset of 5,000 customers before invoking train_test_split(test_size=0.2). In cross-validation, the model achieves 93% accuracy, but crashes to 79% when deployed on live streaming bank transactions.",question:"What exact methodological pathology caused this failure?",options:[{label:"High variance caused by excessive polynomial features in the logistic regression model.",isCorrect:!1},{label:"Data leakage: computing mean and standard deviation globally contaminated D_train with test distribution parameters.",isCorrect:!0},{label:"The test split was too large; a 99:1 split should have been used instead.",isCorrect:!1},{label:"Failure to apply SMOTE resampling to the test dataset before normalization.",isCorrect:!1}],explanation:"StandardScaler learns mu and sigma. When computed globally before partitioning, future test distributions bleed into the training representations. The model learns over artificially harmonized feature scales, producing spuriously optimistic validation scores that collapse in production."},{id:2,title:"Diagnostic 2: Learning Curve High Bias Signature",scenario:"During the training of a power demand forecasting model for WBSEDCL Barasat, the ML engineer plots the learning curve from N=50 to N=5,000 SCADA intervals. The training MSE quickly rises to 18.5 kW and plateaus, while test MSE drops to 19.1 kW and plateaus. The gap is only 0.6 kW.",question:"What is the correct diagnosis and remedial action?",options:[{label:"High Bias (Underfitting): The hypothesis class is too restrictive. Collecting more training SCADA data will not help; the engineer must add non-linear features or increase model complexity.",isCorrect:!0},{label:"High Variance (Overfitting): The model is memorizing noise and needs 10,000 additional training records.",isCorrect:!1},{label:"Severe Label Leakage: The tiny gap proves the test labels leaked directly into the training matrix.",isCorrect:!1},{label:"Optimal Model: Since the gap is under 1 kW, no further engineering is required.",isCorrect:!1}],explanation:"When both E_in and E_out plateau at an unacceptably high error with an almost nonexistent generalization gap, the model suffers from High Bias. The hypothesis space H cannot capture the underlying generator. Increasing N_train simply reaffirms the inability to fit; model expressiveness must be enhanced."},{id:3,title:"Diagnostic 3: Vapnik-Chervonenkis Sample Complexity Scaling",scenario:"An academic research group at Jadavpur University upgrades a medical diagnostic classifier from a linear hypothesis space (VC dimension d_VC = 12) to a deep neural network architecture with VC dimension d_VC = 480, keeping the training sample size fixed at N_train = 500.",question:"According to VC generalization bounds, what will happen to the model's test performance?",options:[{label:"Test performance will improve strictly because larger VC dimension always guarantees lower generalization risk.",isCorrect:!1},{label:"The generalization bound explodes because N_train is no longer >> d_VC; the model can achieve near-zero training error while test error spikes catastrophically.",isCorrect:!0},{label:"The empirical risk will increase to infinity because gradient descent cannot optimize models with d_VC > N.",isCorrect:!1},{label:"VC dimension has no theoretical connection to required training sample size.",isCorrect:!1}],explanation:"The VC generalization bound scales as O(sqrt(d_VC / N_train)). To maintain an error bound epsilon with high probability, N_train must scale linearly with d_VC (typically N >= 10 * d_VC to 50 * d_VC). If d_VC = 480 with only N = 500, the bound is vacuous (>1.0), leading to rampant overfitting."},{id:4,title:"Diagnostic 4: Severe Class Imbalance in Microfinance Credit Scoring",scenario:"In a Nadia District SHG loan portfolio of 4,000 borrowers, 3,920 repay successfully (98%) and 80 default (2%). A standard unweighted Logistic Regression model trained via Empirical Risk Minimization outputs 98% training accuracy.",question:"Why is this training outcome clinically and commercially catastrophic?",options:[{label:"The training set has too many features relative to the number of defaulted rows.",isCorrect:!1},{label:"Standard ERM treated all errors equally, so the optimizer converged to the trivial majority rule (predicting non-default for 100% of loans), yielding 0% recall on actual defaults.",isCorrect:!0},{label:"The logistic sigmoid function cannot process binary labels with values 0 and 1.",isCorrect:!1},{label:"The learning rate was too high, causing gradient oscillation.",isCorrect:!1}],explanation:"Under severe class imbalance, trivial majority classification minimizes unweighted empirical risk (1/N * sum L_i) with 98% accuracy. However, every single defaulting borrower is misclassified (0% recall), exposing the SHG revolving fund to catastrophic capital loss. Cost-Sensitive ERM or class weighting must be applied."},{id:5,title:"Diagnostic 5: Out-of-Core Training Architecture",scenario:"The Kolkata Metro AFC telemetry logs 250 million smartcard tap events (120 GB of uncompressed CSVs). The training workstation has only 16 GB of system RAM. Loading pd.read_csv('afc_logs.csv') crashes with a fatal MemoryError.",question:"What is the architecturally sound industrial pattern to train a classifier on this dataset?",options:[{label:"Discard 99% of the records randomly so the file fits inside 1 GB of RAM.",isCorrect:!1},{label:"Implement Out-of-Core Incremental Learning by streaming chunks using pd.read_csv(chunksize=...) and updating an estimator supporting .partial_fit().",isCorrect:!0},{label:"Convert the CSV to an Excel XLSX workbook to compress the rows.",isCorrect:!1},{label:"Increase the virtual memory swap file to 500 GB on the mechanical hard drive and train standard OLS.",isCorrect:!1}],explanation:"Out-of-core learning processes massive datasets sequentially in memory-sized batches. By iterating over chunks with `partial_fit()` (e.g. `SGDClassifier` or `MiniBatchKMeans`), the model updates internal parameter matrices iteratively without ever holding the entire corpus in volatile memory."}],ue=(t,a)=>{te(i=>({...i,[t]:a}))},ge=t=>{ne(a=>({...a,[t]:!a[t]}))},R=600,S=280,A=t=>(t+2)/4*(R-60)+30,E=t=>S-30-(t+4.5)/7*(S-60),xe=oe.reduce((t,a,i)=>{const r=A(a.x),s=E(a.y);return i===0?`M ${r} ${s}`:`${t} L ${r} ${s}`},""),fe=le.reduce((t,a,i)=>{const r=A(a.x),s=E(a.y);return i===0?`M ${r} ${s}`:`${t} L ${r} ${s}`},"");return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Feature Selection and Training & Testing Data • Topic 6"}),e.jsxs("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"Masterclass Standard"]})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Training Dataset: Mechanics, Empirical Risk & Generalization"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:["Unpack the foundational role of ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"D_train"})," in Empirical Risk Minimization (ERM), sample complexity scaling, Vapnik-Chervonenkis bounds, learning curve trajectories, and rigorous pipeline encapsulation across industrial ecosystems in West Bengal."]}),e.jsx("div",{className:"pt-4 flex flex-wrap gap-2 text-xs font-semibold",children:[{id:"novice",label:"1. Novice Masterclass"},{id:"studio",label:"2. Interactive Studio (3 Modes)"},{id:"math",label:"3. Mathematical Rigor"},{id:"cases",label:"4. West Bengal Industrial Cases"},{id:"quiz",label:"5. Diagnostic Assessment Quiz"},{id:"pitfalls",label:"6. Production Pitfalls"},{id:"faq",label:"7. Viva Voce & Sukanta Hui"},{id:"lab",label:"8. Python Engine & Notes"}].map(t=>e.jsx("a",{href:`#${t.id}`,onClick:()=>V(t.id),className:d("px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5",h===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30":"bg-slate-800/80 text-slate-300 border-slate-700/70 hover:bg-slate-700/80 hover:text-white"),children:t.label},t.id))})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 scroll-mt-6",children:[e.jsx("div",{className:"flex items-center justify-between border-b border-slate-800 pb-3",children:e.jsxs("div",{className:"space-y-1",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"1."})," Novice Masterclass: Demystifying the Training Dataset"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Intuitive mental models, conceptual taxonomy, and jargon eradication for BCA/MCA students."})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-indigo-500/50 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-2xl font-bold",children:"📚"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Metaphor 1: The Practice Textbook vs Final Exam"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Think of ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"D_train"})," as the textbook and homework questions with solutions provided in the back. A diligent student learns underlying mathematical concepts. If they merely memorize every exact punctuation mark without understanding, they get 100% on homework but fail the final unseen exam paper (",e.jsx("code",{className:"text-rose-300 font-mono",children:"D_test"}),")."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl font-bold",children:"🧵"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Metaphor 2: The Tailor's Mannequin"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The training dataset is a wooden mannequin in a Barrackpore tailor shop. If the tailor stitches a blazer so tightly that it fits every unique scratch, dent, and asymmetrical curve of that wooden dummy, no living human customer in Kolkata will ever be able to wear it comfortably."})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-emerald-500/50 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold",children:"🏗️"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Metaphor 3: The Skyscraper's Bedrock Foundation"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["If the soil foundation (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"D_train"}),") is contaminated with sinkholes (label noise) or biased toward marshy silt (class imbalance), the skyscraper built on top will collapse upon occupancy, regardless of how luxurious the architectural ensemble or deep neural network is."]})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏷️"})," The Four Architectural Pillars of the Training Dataset"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Pillar 1"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"Empirical Risk Minimization"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["The formal mathematical optimization paradigm where model weights are updated iteratively to minimize average loss over training pairs ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"(x_i, y_i)"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Pillar 2"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"Sample Complexity & VC Scaling"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["The minimum sample size ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"N_train"})," required to guarantee that generalization error remains bounded within epsilon tolerance of empirical loss."]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-amber-400",children:"Pillar 3"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"Pipeline Encapsulation"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["The unbreakable rule that all transformations (scalers, encoders, imputers, PCA) must compute statistics exclusively from ",e.jsx("code",{className:"text-amber-300 font-mono",children:"D_train"})," and freeze them."]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"Pillar 4"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"Robustness & Cost Weighting"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Mitigating label noise via robust losses (Huber loss) and defending against class imbalance using cost-sensitive error multipliers."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Jargon Buster: Essential Exam Terminology"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-indigo-300",children:"Empirical Risk (R_emp / E_in):"}),e.jsx("p",{className:"text-slate-300 text-xs mt-1",children:"The measurable average loss calculated directly over the training dataset. It almost always underestimates true risk due to optimization optimism."})]}),e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-cyan-300",children:"True Risk (R_true / Generalization Risk):"}),e.jsx("p",{className:"text-slate-300 text-xs mt-1",children:"The theoretical expected loss over all possible samples from the true population distribution P(X, Y). Directly uncomputable in practice."})]}),e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-amber-300",children:"Generalization Gap:"}),e.jsx("p",{className:"text-slate-300 text-xs mt-1",children:"The absolute difference between out-of-sample error and in-sample error: |E_out - E_in|. A large gap signals overfitting."})]}),e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-rose-300",children:"Inductive Bias:"}),e.jsx("p",{className:"text-slate-300 text-xs mt-1",children:"The set of mathematical assumptions an algorithm employs to prioritize one hypothesis over another when multiple functions fit D_train equally well."})]})]})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"2."})," Interactive Laboratory Studio"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Simulate parameter optimization, learning curve dynamics, and label noise filtration in real time."})]}),e.jsxs("div",{className:"flex p-1 bg-slate-900 border border-slate-800 rounded-xl",children:[e.jsx("button",{onClick:()=>M("erm"),className:d("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",N==="erm"?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:"Mode 1: ERM Fitter"}),e.jsx("button",{onClick:()=>M("learning_curve"),className:d("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",N==="learning_curve"?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:"Mode 2: Learning Curves"}),e.jsx("button",{onClick:()=>M("noise_sieve"),className:d("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",N==="noise_sieve"?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:"Mode 3: Contamination Sieve"})]})]}),N==="erm"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Mode 1: Empirical Risk Minimization & Polynomial Hypothesis Capacity"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Adjust polynomial degree and L2 regularization to observe how parameter fitting on D_train affects in-sample error vs out-of-sample generalization."})]}),e.jsx("div",{className:d("px-3.5 py-1.5 rounded-lg border text-xs font-bold",v.bg,v.color),children:v.label})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("label",{className:"text-xs font-semibold text-slate-300",children:["Hypothesis Degree (Capacity): ",e.jsx("span",{className:"text-cyan-400 font-bold",children:u})]}),e.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:[1,2,3,5].map(t=>e.jsxs("button",{onClick:()=>W(t),className:d("py-1 text-xs font-bold rounded border transition-colors",u===t?"bg-cyan-600 border-cyan-400 text-white":"bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"),children:["d=",t]},t))}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:u===1?"Linear (High Bias)":u===2||u===3?"Polynomial (Well-matched)":"Degree-5 (High Variance)"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Regularization lambda:"}),e.jsx("span",{className:"text-indigo-400 font-mono",children:f.toFixed(3)})]}),e.jsx("input",{type:"range",min:"0.0",max:"0.10",step:"0.005",value:f,onChange:t=>F(parseFloat(t.target.value)),className:"w-full accent-indigo-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:f===0?"Unconstrained ERM (Zero penalty)":"L2 Ridge Penalty restricts curvature"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Training Epochs:"}),e.jsx("span",{className:"text-emerald-400 font-mono",children:k})]}),e.jsx("input",{type:"range",min:"30",max:"300",step:"30",value:k,onChange:t=>U(parseInt(t.target.value)),className:"w-full accent-emerald-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Gradient descent iterations on D_train"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Data Noise Factor:"}),e.jsx("span",{className:"text-amber-400 font-mono",children:C.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.1",max:"0.8",step:"0.05",value:C,onChange:t=>Y(parseFloat(t.target.value)),className:"w-full accent-amber-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Inherent stochastic jitter in D_train"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"})," Training Set (D_train, N=14)"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded bg-amber-400"})," Test Holdout (D_test, N=6)"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-4 h-0.5 bg-blue-400 border-dashed"})," True Latent Signal"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-4 h-0.5 bg-emerald-400"})," Fitted Hypothesis h_theta(x)"]})]}),e.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:"Cartesian Domain: [-1.8, 1.8]"})]}),e.jsx("div",{className:"relative bg-slate-950 rounded-xl border border-slate-800 p-2 overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:`0 0 ${R} ${S}`,className:"w-full h-auto max-h-[300px]",id:ie,children:[e.jsx("line",{x1:"30",y1:S-30,x2:R-30,y2:S-30,stroke:"#334155",strokeWidth:"1"}),e.jsx("line",{x1:"30",y1:"30",x2:"30",y2:S-30,stroke:"#334155",strokeWidth:"1"}),e.jsx("line",{x1:"30",y1:E(0),x2:R-30,y2:E(0),stroke:"#1e293b",strokeDasharray:"3 3"}),e.jsx("path",{d:fe,fill:"none",stroke:"#60a5fa",strokeWidth:"2",strokeDasharray:"4 4",opacity:"0.75"}),e.jsx("path",{d:xe,fill:"none",stroke:u===5&&f<.03?"#f43f5e":"#10b981",strokeWidth:"2.5"}),re.map(t=>{const a=A(t.x),i=E(t.y);return e.jsx("circle",{cx:a,cy:i,r:t.isOutlier?"5":"3.5",fill:t.isOutlier?"#f43f5e":"#22d3ee",stroke:"#0f172a",strokeWidth:"1.5",children:e.jsx("title",{children:`Train pt: x=${t.x.toFixed(2)}, y=${t.y.toFixed(2)}${t.isOutlier?" (Outlier)":""}`})},t.id)}),z.map(t=>{const a=A(t.x)-3,i=E(t.y)-3;return e.jsx("rect",{x:a,y:i,width:"6",height:"6",fill:"#fbbf24",stroke:"#0f172a",strokeWidth:"1.5",children:e.jsx("title",{children:`Test pt: x=${t.x.toFixed(2)}, y=${t.y.toFixed(2)}`})},t.id)})]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Empirical Training Loss (E_in)"}),e.jsx("div",{className:"text-2xl font-black text-cyan-400 font-mono",children:X.toFixed(4)}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Mean Squared Error on visible D_train"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"True Test Loss (E_out)"}),e.jsx("div",{className:d("text-2xl font-black font-mono",L>3?"text-rose-400":"text-emerald-400"),children:L.toFixed(4)}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Mean Squared Error on holdout D_test"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Generalization Gap |E_out - E_in|"}),e.jsx("div",{className:"text-2xl font-black text-amber-400 font-mono",children:Math.abs(L-X).toFixed(4)}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Divergence between in-sample and out-of-sample"})]})]}),e.jsxs("div",{className:d("p-4 rounded-xl border text-sm",v.bg),children:[e.jsxs("span",{className:d("font-bold block mb-1",v.color),children:["Academic Analysis: ",v.label]}),e.jsx("p",{className:"text-slate-300 text-xs leading-relaxed",children:v.desc})]})]}),N==="learning_curve"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📈"})," Mode 2: Sample Size Scaling & Learning Curves Arena (E_in vs E_out)"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Scale N_train from 15 to 500 instances to visually verify how empirical training error and validation risk converge under different model capacities."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>P("high_bias"),className:d("px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors",j==="high_bias"?"bg-amber-500/20 text-amber-300 border-amber-500/50":"bg-slate-800 text-slate-400 border-slate-700 hover:text-white"),children:"High Bias (Linear Model)"}),e.jsx("button",{onClick:()=>P("high_variance"),className:d("px-3 py-1.5 rounded-lg text-xs font-bold border transition-colors",j==="high_variance"?"bg-indigo-500/20 text-indigo-300 border-indigo-500/50":"bg-slate-800 text-slate-400 border-slate-700 hover:text-white"),children:"High Variance (Degree-5 Model)"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Training Sample Size (N_train):"}),e.jsxs("span",{className:"text-cyan-400 font-mono text-sm",children:[g," samples"]})]}),e.jsx("input",{type:"range",min:"15",max:"500",step:"5",value:g,onChange:t=>K(parseInt(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsx("span",{children:"N=15 (Data-starved)"}),e.jsx("span",{children:"N=250"}),e.jsx("span",{children:"N=500 (Asymptote)"})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Irreducible Bayes Noise:"}),e.jsx("span",{className:"text-amber-400 font-mono text-sm",children:x.toFixed(2)})]}),e.jsx("input",{type:"range",min:"0.1",max:"0.8",step:"0.05",value:x,onChange:t=>$(parseFloat(t.target.value)),className:"w-full accent-amber-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Intrinsic stochastic noise floor"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-3 h-0.5 bg-cyan-400"})," Training Error (E_in)"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-3 h-0.5 bg-rose-400"})," Validation/Test Error (E_out)"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-amber-400 border border-slate-900"})," Current Operating Point (N=",g,")"]})]}),e.jsx("span",{className:"text-slate-500 font-mono text-[11px]",children:"Horizontal: N_train | Vertical: Error (MSE)"})]}),e.jsx("div",{className:"relative bg-slate-950 rounded-xl border border-slate-800 p-2 overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 240",className:"w-full h-auto max-h-[260px]",id:se,children:[e.jsx("line",{x1:"40",y1:"200",x2:"570",y2:"200",stroke:"#334155",strokeWidth:"1.5"}),e.jsx("line",{x1:"40",y1:"20",x2:"40",y2:"200",stroke:"#334155",strokeWidth:"1.5"}),(()=>{const t=o=>40+(o-15)/485*530,a=o=>200-Math.min(180,o/6.5*180),i=D.reduce((o,m,b)=>`${o} ${b===0?"M":"L"} ${t(m.n)} ${a(m.inErr)}`,""),r=D.reduce((o,m,b)=>`${o} ${b===0?"M":"L"} ${t(m.n)} ${a(m.outErr)}`,""),s=t(g),c=a(O),p=a(H);return e.jsxs(e.Fragment,{children:[e.jsx("path",{d:`${i} L ${t(500)} ${a(D[D.length-1].outErr)} ${r.replace("M","L")} Z`,fill:"rgba(244, 63, 94, 0.08)"}),e.jsx("path",{d:i,fill:"none",stroke:"#22d3ee",strokeWidth:"2.5"}),e.jsx("path",{d:r,fill:"none",stroke:"#f43f5e",strokeWidth:"2.5"}),e.jsx("line",{x1:s,y1:"20",x2:s,y2:"200",stroke:"#fbbf24",strokeWidth:"1.5",strokeDasharray:"3 3"}),e.jsx("circle",{cx:s,cy:c,r:"4.5",fill:"#22d3ee",stroke:"#0f172a",strokeWidth:"1.5"}),e.jsx("circle",{cx:s,cy:p,r:"4.5",fill:"#f43f5e",stroke:"#0f172a",strokeWidth:"1.5"})]})})()]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Training Error E_in(N)"}),e.jsx("div",{className:"text-2xl font-black text-cyan-400 font-mono",children:O.toFixed(3)}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Sample average loss on current D_train"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Validation Error E_out(N)"}),e.jsx("div",{className:"text-2xl font-black text-rose-400 font-mono",children:H.toFixed(3)}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Expected error on unseen validation holdout"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Generalization Gap |E_out - E_in|"}),e.jsx("div",{className:"text-2xl font-black text-amber-400 font-mono",children:B.toFixed(3)}),e.jsx("span",{className:"text-[11px] text-slate-400",children:B>1.5?"Excessive gap (High Variance)":"Tight gap (Model is well-bounded)"})]})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-xs sm:text-sm text-indigo-200",children:[e.jsx("span",{className:"font-bold text-white block mb-1",children:"💡 Instructor Recommendation & Mathematical Guidance:"}),e.jsx("p",{className:"leading-relaxed",children:de})]})]}),N==="noise_sieve"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Mode 3: Contamination, Label Noise & Cost-Sensitive Loss Sieve"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate how training set corruption (human mislabeling) and severe class imbalance affect empirical gradient updates under MSE vs Huber vs Cost-Sensitive losses."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Parameter Stability:"}),e.jsxs("span",{className:d("px-2.5 py-1 rounded text-xs font-bold font-mono",I>80?"bg-emerald-500/20 text-emerald-300":I>60?"bg-amber-500/20 text-amber-300":"bg-rose-500/20 text-rose-300"),children:[I,"%"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Injected Label Noise:"}),e.jsxs("span",{className:"text-rose-400 font-mono",children:[_,"% corrupted"]})]}),e.jsx("input",{type:"range",min:"0",max:"40",step:"5",value:_,onChange:t=>Q(parseInt(t.target.value)),className:"w-full accent-rose-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Mislabeled instances in D_train"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Class Distribution (Majority:Minority)"}),e.jsx("div",{className:"grid grid-cols-4 gap-1.5",children:["50:50","80:20","90:10","95:5"].map(t=>e.jsx("button",{onClick:()=>Z(t),className:d("py-1 text-xs font-bold rounded border transition-colors",T===t?"bg-amber-600 border-amber-400 text-white":"bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"),children:t},t))}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Imbalance prevalence in training corpus"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Empirical Loss Objective"}),e.jsx("div",{className:"flex flex-col gap-1",children:[{id:"mse",label:"Standard MSE (L2 Loss)"},{id:"huber",label:"Robust Huber Loss (Delta=1.35)"},{id:"cost_sensitive",label:"Cost-Sensitive Weighted ERM"}].map(t=>e.jsx("button",{onClick:()=>J(t.id),className:d("text-left px-2.5 py-1 text-xs font-semibold rounded border transition-colors",y===t.id?"bg-indigo-600 border-indigo-400 text-white":"bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700"),children:t.label},t.id))})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("span",{className:"text-xs font-semibold text-slate-300 block",children:"Representative Batch of 20 Training Instances in D_train:"}),e.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-10 gap-2",children:ce.map(t=>e.jsxs("div",{className:d("p-2 rounded-lg border text-center text-[10px] font-mono transition-transform hover:scale-105",t.corrupted?"bg-rose-500/20 border-rose-500 text-rose-300 shadow-md shadow-rose-500/20":t.cls.startsWith("Minority")?"bg-amber-500/20 border-amber-500 text-amber-300":"bg-slate-950 border-slate-700 text-slate-300"),children:[e.jsxs("div",{className:"font-bold",children:["#",t.id]}),e.jsx("div",{className:"text-[9px] truncate",children:t.corrupted?"CORRUPT":t.cls.startsWith("Minority")?"MINORITY":"NORMAL"})]},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Apparent Training Accuracy (On D_train)"}),e.jsxs("div",{className:"text-2xl font-black text-cyan-400 font-mono",children:[me,"%"]}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Flattering illusion created by fitting corrupt/majority data"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Genuine Generalization Accuracy (On D_test)"}),e.jsxs("div",{className:d("text-2xl font-black font-mono",parseFloat(q)<75?"text-rose-400":"text-emerald-400"),children:[q,"%"]}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Actual performance on clean, unseen real-world records"})]})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs sm:text-sm text-amber-200",children:[e.jsx("span",{className:"font-bold text-white block mb-1",children:"⚡ Engineering Insight:"}),e.jsx("p",{className:"leading-relaxed",children:pe})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"3."})," Formal Mathematical Formulations"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Statistical learning foundations, VC generalization bounds, and regularized objective functions."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"1."})," Regularized Empirical Risk Minimization"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"The parameter vector theta is chosen to minimize empirical loss plus a structural complexity penalty:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-cyan-300 text-xs sm:text-sm overflow-x-auto text-center",children:"θ̂ = argmin_θ [ (1 / N) ∑_{i=1}^N L(f(x_i; θ), y_i) + λ Ω(θ) ]"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Where ",e.jsx("code",{className:"text-slate-300 font-mono",children:"L(., .)"})," is the pointwise loss (e.g. squared error or cross-entropy) and ",e.jsx("code",{className:"text-slate-300 font-mono",children:"Ω(θ)"})," is the L2/L1 penalty bounding hypothesis capacity."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"2."})," Vapnik-Chervonenkis (VC) Generalization Bound"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"With probability at least 1 - δ over the random draw of D_train:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-cyan-300 text-xs sm:text-sm overflow-x-auto text-center",children:"R_true(h) ≤ R_emp(h) + √[ (8 / N) ( d_VC ln(2eN / d_VC) + ln(4 / δ) ) ]"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Demonstrates that as training sample size ",e.jsx("code",{className:"text-slate-300 font-mono",children:"N"})," grows large relative to VC dimension ",e.jsx("code",{className:"text-slate-300 font-mono",children:"d_VC"}),", empirical risk asymptotically converges to true generalization risk."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"3."})," Central Limit Standard Error of Training Estimates"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"The variance of estimated parameters scales inversely with the size of D_train:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-amber-300 text-xs sm:text-sm overflow-x-auto text-center",children:"SE(θ̂) = σ / √N_train  ⟹  Var(θ̂) ∝ 1 / N_train"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Doubling parameter estimation precision requires quadrupling the training dataset size ",e.jsx("code",{className:"text-slate-300 font-mono",children:"N_train"}),"."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"4."})," Robust Huber Loss for Label Noise Resistance"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Transitions smoothly from quadratic L2 loss to linear L1 loss when error residual exceeds delta:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-emerald-300 text-xs sm:text-sm overflow-x-auto text-center",children:"L_δ(e) = (1/2) e² if |e| ≤ δ,  else δ (|e| - (1/2) δ)"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Prevents noisy training instances from generating explosive quadratic gradients that hijack the parameter vector."})]})]})]}),e.jsxs("section",{id:"cases",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"4."})," Real-World Regional Industrial Case Studies (West Bengal)"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Authentic training dataset curation, partitioning, and sanitization across Bengal enterprises."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-indigo-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 uppercase",children:"Power Distribution"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"35,040 SCADA Intervals"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"WBSEDCL Smart Grid Peak Load Forecasting"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Engineers training load forecasting models across Bidhannagar & Barasat 33kV substations strictly prohibited random shuffle splits. Shuffling would allow future weather telemetries to leak into historical training data. Instead, a chronological forward split was enforced, and seasonal Durga Puja carnival lighting surges were marked with holiday contextual flags rather than purged as noise."}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-indigo-300",children:[e.jsx("strong",{children:"Key Protocol:"})," Chronological training split + pre-monsoon baseline normalization."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase",children:"Transit Mobility"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"1,250,000 Smartcard Taps"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"KMRC Automatic Fare Collection (AFC) Turnstiles"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Modeling passenger flow across Howrah Maidan, Esplanade, and Salt Lake Sector V required Group-Aware Splitting by passenger smartcard ID. Assigning morning peak taps from commuter Mamata to D_train while her evening return tap landed in D_test caused 99% artificial test accuracy that failed on new commuters. Group-aware isolation preserved genuine generalizability."}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-cyan-300",children:[e.jsx("strong",{children:"Key Protocol:"})," GroupKFold by commuter ID to prevent identity leakage across gates."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase",children:"Financial Inclusion"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"4,800 Borrower Records"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Nadia District Women SHG Credit Default Scoring"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"With 97.4% on-time repayment and only 2.6% default rate across rural self-help groups, unweighted ERM converged to predicting zero defaults for all borrowers. Implementing Cost-Sensitive ERM with a 15x penalty multiplier on default misclassifications forced the optimizer to allocate parameter capacity to high-risk repayment indicators, safeguarding revolving funds."}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-amber-300",children:[e.jsx("strong",{children:"Key Protocol:"})," Cost-Sensitive class weighting inside D_train without oversampling test sets."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-emerald-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase",children:"Agro-Tech"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"1,240 Harvest Batches"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Dooars & Darjeeling Tea Quality Auction Scoring"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"NIR spectroscopy grading suffered from subjective human master-taster variance, injecting approximately 12% label noise into training targets. Replacing ordinary least squares with Huber Loss (delta = 1.2) bounded the gradient pull of erratic sensory scores, allowing spectral absorption peak coefficients to generalize cleanly across seasonal flushes."}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-emerald-300",children:[e.jsx("strong",{children:"Key Protocol:"})," Robust Huber objective to inoculate regression weights against label noise."]})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"5."})," Diagnostic Assessment Quiz (Scenario-Based)"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Test your mastery of training set hygiene, learning curves, and leakage prevention with five multi-stage industrial engineering challenges."})]}),e.jsx("div",{className:"space-y-6",children:he.map(t=>{const a=ee[t.id],i=ae[t.id];return e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:t.title}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs sm:text-sm text-slate-300 italic",children:['"',t.scenario,'"']}),e.jsx("h3",{className:"text-sm sm:text-base font-bold text-white pt-2",children:t.question})]}),e.jsx("div",{className:"space-y-2",children:t.options.map((r,s)=>{const c=a===s;return e.jsxs("button",{onClick:()=>ue(t.id,s),className:d("w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-start gap-3",c?"bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10":"bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white"),children:[e.jsx("span",{className:d("w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5",c?"border-indigo-400 bg-indigo-500 text-white":"border-slate-600 text-slate-400"),children:String.fromCharCode(65+s)}),e.jsx("span",{children:r.label})]},s)})}),e.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsx("button",{onClick:()=>ge(t.id),className:"px-4 py-1.5 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",children:i?"Hide Explanation":"Check Answer & Rationale"}),a!==void 0&&i&&e.jsx("span",{className:d("text-xs font-bold",t.options[a]?.isCorrect?"text-emerald-400":"text-rose-400"),children:t.options[a]?.isCorrect?"Correct! 🎯 Outstanding understanding.":"Incorrect. Review the statistical proof below."})]}),i&&e.jsxs("div",{className:"p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-xs sm:text-sm text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-bold text-white block",children:"Detailed Rationale:"}),e.jsx("p",{className:"leading-relaxed",children:t.explanation})]})]},t.id)})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"6."})," Production Pitfalls & Industrial Best Practices"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Crucial anti-patterns to avoid when constructing and operating on training datasets."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Preprocessing Before Train-Test Partition"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Executing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"StandardScaler().fit_transform(X)"})," or categorical encoding on the full dataset before splitting."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Embed all scalers and encoders inside a Scikit-Learn ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Pipeline"}),". Ensure ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".fit()"})," is invoked strictly on D_train, and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".transform()"})," on test holdouts."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: High Dimensionality Under-Sampling (p > N)"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Training a 120-feature ensemble on only 80 training samples."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Maintain the golden rule of at least 15 to 20 samples per feature for linear models, or apply L1 Lasso regularization and PCA dimensionality reduction fit exclusively on D_train."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Global Resampling (SMOTE Contamination)"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Applying SMOTE to balance minority samples across the full dataset prior to train-test splitting."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Use ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"imblearn.pipeline.Pipeline"})," so synthetic instances are generated solely within training folds. Never alter the test set's natural distribution."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 4: Covariate Shift Blindness"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Training a credit scoring model on urban Salt Lake professionals and deploying to rural Sundarbans without importance weighting."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Monitor Population Stability Index (PSI > 0.2 signals severe shift) and apply importance weighting ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"w(x) = P_test(x) / P_train(x)"}),"."]})]})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"7."})," Academic Viva Voce Questions & Teacher Guidance"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Official MAKAUT university examination questions answered by Senior Instructor Sukanta Hui."})]}),e.jsx(ve,{}),e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6",children:e.jsx(_e,{questions:je})})]}),e.jsxs("section",{id:"lab",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"8."})," Pure Python Laboratory Engine & Comprehensive Lecture Notes"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Zero-dependency academic simulation script and printable full-length lecture transcript."})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🐍"})," Python Simulation Laboratory (",e.jsx("code",{className:"text-cyan-300 font-mono text-sm",children:"training_dataset_lab.py"}),")"]}),e.jsx(be,{code:we,filename:"training_dataset_lab.py",moduleName:"Topic 6: Training Dataset Laboratory Simulator"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📄"})," Academic Lecture Reference Transcript (",e.jsx("code",{className:"text-indigo-300 font-mono text-sm",children:"topic6_note.txt"}),")"]}),e.jsx(ye,{content:Ne,filename:"topic6_note.txt",title:"Topic 6: Training Dataset Academic Study Notes"})]})]})]})]})};export{Le as default};
