import{b as o,j as e,bl as n}from"./vendor-react-core-B-R9HE-Z.js";import{P}from"./PythonFileLoader-DZ61U3Y_.js";import{F as B}from"./FAQTemplate-16IfroqC.js";import{P as F}from"./PlainTextPrint-C6NaUtnE.js";import{T as G}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const q=`"""
=============================================================================
CODER & ACCOTAX ACADEMIC LABORATORY & SIMULATION ENGINE
Topic 5: Train-Test Split (Generalization Error & Splitting Topologies)
Module: Feature Selection and Training & Testing Data (BCAC701B)
Lead Author: Sukanta Hui | Barrackpore, West Bengal, India
=============================================================================

This laboratory implements pure Python standard library algorithms for the core
train-test split paradigms used in academic research and production machine learning:
1. Random Shuffle Split: Classic I.I.D. train-test partitioning.
2. Stratified Train-Test Split: Strict preservation of target class proportions.
3. Temporal / Time-Series Forward Split: Strictly chronological, preventing lookahead leakage.
4. Group-Aware Split: Prevents patient/user identity leakage across repeated recordings.
5. Statistical Confidence Interval & Standard Error Engine: Quantifying test estimate uncertainty.

Zero external dependencies: Pure standard library Python 3 (math, random, typing).
"""

import math
import random
from typing import List, Tuple, Dict, Any, Set


# =============================================================================
# 1. CORE SPLITTING TOPOLOGY ALGORITHMS
# =============================================================================

def random_train_test_split(
    X: List[List[float]],
    y: List[int],
    test_size: float = 0.20,
    seed: int = 42
) -> Tuple[List[List[float]], List[List[float]], List[int], List[int]]:
    """
    Standard random shuffle split:
    Shuffles index permutations using seed, partitioning into train and test.
    """
    n = len(y)
    random.seed(seed)
    indices = list(range(n))
    random.shuffle(indices)
    
    n_test = int(round(n * test_size))
    test_idx = set(indices[:n_test])
    
    X_train, X_test = [], []
    y_train, y_test = [], []
    
    for i in range(n):
        if i in test_idx:
            X_test.append(X[i])
            y_test.append(y[i])
        else:
            X_train.append(X[i])
            y_train.append(y[i])
            
    return X_train, X_test, y_train, y_test


def stratified_train_test_split(
    X: List[List[float]],
    y: List[int],
    test_size: float = 0.20,
    seed: int = 42
) -> Tuple[List[List[float]], List[List[float]], List[int], List[int]]:
    """
    Stratified split:
    Partitions samples within each distinct target class, ensuring train and test
    sets mirror the population class distribution P(Y = c).
    """
    random.seed(seed)
    class_indices: Dict[int, List[int]] = {}
    for idx, label in enumerate(y):
        class_indices.setdefault(label, []).append(idx)
        
    test_idx = set()
    for label, idx_list in class_indices.items():
        shuffled = list(idx_list)
        random.shuffle(shuffled)
        k_test = int(round(len(shuffled) * test_size))
        # Ensure at least 1 sample in test if class has >= 2 samples
        if k_test == 0 and len(shuffled) >= 2:
            k_test = 1
        for i in range(k_test):
            test_idx.add(shuffled[i])
            
    X_train, X_test = [], []
    y_train, y_test = [], []
    
    for i in range(len(y)):
        if i in test_idx:
            X_test.append(X[i])
            y_test.append(y[i])
        else:
            X_train.append(X[i])
            y_train.append(y[i])
            
    return X_train, X_test, y_train, y_test


def temporal_train_test_split(
    X: List[List[float]],
    y: List[int],
    test_size: float = 0.20
) -> Tuple[List[List[float]], List[List[float]], List[int], List[int]]:
    """
    Chronological forward split:
    Maintains strict time order. Train contains all past records; test contains
    strictly future records. Zero shuffling to prevent lookahead leakage.
    """
    n = len(y)
    split_idx = int(round(n * (1.0 - test_size)))
    
    X_train = X[:split_idx]
    y_train = y[:split_idx]
    X_test = X[split_idx:]
    y_test = y[split_idx:]
    
    return X_train, X_test, y_train, y_test


def group_aware_train_test_split(
    X: List[List[float]],
    y: List[int],
    groups: List[str],
    test_size: float = 0.20,
    seed: int = 42
) -> Tuple[List[List[float]], List[List[float]], List[int], List[int], List[str], List[str]]:
    """
    Group-aware split (e.g. by patient ID or customer ID):
    Ensures that all observations from a specific entity group reside ENTIRELY
    within either the training set or the testing set, preventing identity leakage.
    """
    random.seed(seed)
    unique_groups = sorted(list(set(groups)))
    random.shuffle(unique_groups)
    
    n_test_groups = int(round(len(unique_groups) * test_size))
    test_group_set = set(unique_groups[:n_test_groups])
    
    X_train, X_test = [], []
    y_train, y_test = [], []
    g_train, g_test = [], []
    
    for i in range(len(y)):
        if groups[i] in test_group_set:
            X_test.append(X[i])
            y_test.append(y[i])
            g_test.append(groups[i])
        else:
            X_train.append(X[i])
            y_train.append(y[i])
            g_train.append(groups[i])
            
    return X_train, X_test, y_train, y_test, g_train, g_test


# =============================================================================
# 2. STATISTICAL EVALUATION UNCERTAINTY & CONFIDENCE INTERVALS
# =============================================================================

def calculate_test_confidence_interval(
    accuracy: float,
    n_test: int,
    confidence_level: float = 0.95
) -> Dict[str, float]:
    """
    Computes Standard Error (SE) and Wald Confidence Interval for test accuracy:
    SE = sqrt( p * (1 - p) / N_test )
    Margin of Error = z * SE
    """
    if n_test <= 0:
        return {"accuracy": 0.0, "se": 0.0, "margin": 0.0, "ci_lower": 0.0, "ci_upper": 0.0}
        
    p = max(0.0, min(1.0, accuracy))
    se = math.sqrt(p * (1.0 - p) / n_test)
    
    # Standard normal critical z value (approx 1.96 for 95%)
    z = 1.96 if abs(confidence_level - 0.95) < 0.01 else 2.576
    margin = z * se
    
    return {
      "accuracy": round(p * 100, 2),
      "se": round(se * 100, 2),
      "margin": round(margin * 100, 2),
      "ci_lower": round(max(0.0, p - margin) * 100, 2),
      "ci_upper": round(min(1.0, p + margin) * 100, 2)
    }


# =============================================================================
# 3. WEST BENGAL SYNTHETIC DATASETS
# =============================================================================

def generate_jadavpur_clinical_dataset(seed: int = 101) -> Dict[str, Any]:
    """
    Simulates patient cardiology diagnostics at Jadavpur Medical Hub:
    - 20 distinct patients (Mamata, Mahima, Susmita, Debangshu, etc.)
    - 15 ECG beats per patient = 300 total records.
    - Highly imbalanced target: Arrhythmia (1 = Detected, 0 = Normal).
    """
    random.seed(seed)
    patients = [f"Patient_{i+1:02d}" for i in range(20)]
    
    X = []
    y = []
    groups = []
    
    # 3 patients have true arrhythmia condition
    arrhythmia_patients = set(patients[:3])
    
    for p in patients:
        has_arrhythmia = p in arrhythmia_patients
        patient_base_hr = random.gauss(85.0 if has_arrhythmia else 72.0, 4.0)
        patient_pr_interval = random.gauss(210.0 if has_arrhythmia else 160.0, 10.0)
        
        for _ in range(15):
            hr = patient_base_hr + random.gauss(0, 2.0)
            pr = patient_pr_interval + random.gauss(0, 5.0)
            target = 1 if (has_arrhythmia and random.random() < 0.90) else 0
            
            X.append([hr, pr])
            y.append(target)
            groups.append(p)
            
    return {"X": X, "y": y, "groups": groups}


# =============================================================================
# 4. LABORATORY BENCHMARK EXECUTION
# =============================================================================

def run_laboratory() -> None:
    print("=" * 80)
    print("CODER & ACCOTAX ACADEMIC LABORATORY: TOPIC 5")
    print("TRAIN-TEST SPLIT (GENERALIZATION, STRATIFICATION & GROUP LEAKAGE)")
    print("Module: Feature Selection and Training & Testing Data (BCAC701B)")
    print("Lead Author: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)
    
    data = generate_jadavpur_clinical_dataset(seed=42)
    X = data["X"]
    y = data["y"]
    groups = data["groups"]
    n_samples = len(y)
    
    pos_count = sum(y)
    pos_rate = pos_count / n_samples
    print(f"\\nLoaded Clinical Dataset: {n_samples} total ECG segments across {len(set(groups))} patients.")
    print(f"Overall Arrhythmia Positive Cases : {pos_count} / {n_samples} ({pos_rate * 100:.2f}% base rate)")

    # -------------------------------------------------------------------------
    # 1. RANDOM VS STRATIFIED SPLIT: THE CLASS COLLAPSE DEMONSTRATION
    # -------------------------------------------------------------------------
    print("\\n--- 1. RANDOM VS STRATIFIED SPLIT: CLASS PROPORTION AUDIT (test_size = 0.20) ---")
    
    # Random Split
    _, _, y_train_rand, y_test_rand = random_train_test_split(X, y, test_size=0.20, seed=777)
    rand_tr_rate = (sum(y_train_rand) / len(y_train_rand)) * 100
    rand_te_rate = (sum(y_test_rand) / len(y_test_rand)) * 100
    
    # Stratified Split
    _, _, y_train_strat, y_test_strat = stratified_train_test_split(X, y, test_size=0.20, seed=777)
    strat_tr_rate = (sum(y_train_strat) / len(y_train_strat)) * 100
    strat_te_rate = (sum(y_test_strat) / len(y_test_strat)) * 100
    
    print(f"{'Split Method':<22} | {'Train Size':<12} | {'Train % Positive':<18} | {'Test Size':<11} | {'Test % Positive':<18}")
    print("-" * 80)
    print(f"{'True Population':<22} | {'--':<12} | {pos_rate * 100:>16.2f}% | {'--':<11} | {pos_rate * 100:>16.2f}%")
    print(f"{'Random Shuffle Split':<22} | {len(y_train_rand):<12} | {rand_tr_rate:>16.2f}% | {len(y_test_rand):<11} | {rand_te_rate:>16.2f}% (Class Shift!)")
    print(f"{'Stratified Split':<22} | {len(y_train_strat):<12} | {strat_tr_rate:>16.2f}% | {len(y_test_strat):<11} | {strat_te_rate:>16.2f}% (EXACT PRESERVATION)")

    # -------------------------------------------------------------------------
    # 2. GROUP-AWARE SPLIT: IDENTITY LEAKAGE PREVENTION
    # -------------------------------------------------------------------------
    print("\\n--- 2. GROUP LEAKAGE AUDIT: PATIENT IDENTITY CONTAMINATION ---")
    
    # In Random Split: How many patients appear in BOTH train and test?
    # Re-extract groups for random split
    random.seed(777)
    rand_indices = list(range(n_samples))
    random.shuffle(rand_indices)
    test_cnt = int(round(n_samples * 0.20))
    rand_test_ids = set(rand_indices[:test_cnt])
    
    groups_train_rand = set(groups[i] for i in range(n_samples) if i not in rand_test_ids)
    groups_test_rand = set(groups[i] for i in range(n_samples) if i in rand_test_ids)
    leaked_patients = groups_train_rand.intersection(groups_test_rand)
    
    # In Group-Aware Split
    _, _, _, _, g_tr, g_te = group_aware_train_test_split(X, y, groups, test_size=0.20, seed=777)
    group_split_leak = set(g_tr).intersection(set(g_te))
    
    print(f"Random Split      -> Patients in Train: {len(groups_train_rand)}, in Test: {len(groups_test_rand)}")
    print(f"                     CONTAMINATED PATIENTS (Identity Leakage): {len(leaked_patients)} / 20 patients! ❌")
    print(f"Group-Aware Split -> Patients in Train: {len(set(g_tr))}, in Test: {len(set(g_te))}")
    print(f"                     CONTAMINATED PATIENTS: {len(group_split_leak)} (ZERO LEAKAGE) ✓")
    print(">> LESSON: In clinical & biometric tasks, random split leaks patient anatomy, causing false 99% accuracy.")

    # -------------------------------------------------------------------------
    # 3. STATISTICAL UNCERTAINTY ACROSS TEST SAMPLE SIZES
    # -------------------------------------------------------------------------
    print("\\n--- 3. TEST SET SAMPLE SIZE (N_test) VS 95% CONFIDENCE INTERVAL ---")
    print(f"Assuming observed test accuracy of 85.0%:")
    print(f"{'Test Size (N_test)':<20} | {'Standard Error':<16} | {'Margin of Error (±)':<22} | {'95% Confidence Interval'}")
    print("-" * 80)
    
    sizes = [30, 60, 150, 500, 2000]
    for n_t in sizes:
        ci = calculate_test_confidence_interval(0.85, n_t)
        print(f"{n_t:<20} | {ci['se']:>14.2f}% | ±{ci['margin']:>19.2f}% | [{ci['ci_lower']}%, {ci['ci_upper']}%]")
        
    print("\\n>> KEY TAKEAWAY: When N_test is tiny (e.g. 30), a reported 85% accuracy has a ±12.8% error margin!")
    print(">> The model could truly be anywhere from 72% (poor) to 97% (stellar). Test size matters.")

    # -------------------------------------------------------------------------
    # 4. VERIFICATION INVARIANTS & INTEGRITY CHECKS
    # -------------------------------------------------------------------------
    assert abs(strat_te_rate - (pos_rate * 100)) < 1.5, "Stratified test rate must mirror population rate"
    assert len(group_split_leak) == 0, "Group-aware split must have zero identity overlap"
    assert len(leaked_patients) > 0, "Random split on repeated records must demonstrate identity leakage"
    assert calculate_test_confidence_interval(0.85, 2000)["margin"] < calculate_test_confidence_interval(0.85, 30)["margin"]

    print("\\n" + "=" * 80)
    print("TOPIC 5 LABORATORY BENCHMARK COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)


if __name__ == "__main__":
    run_laboratory()
`,W=`================================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES: ADVANCED MACHINE LEARNING (BCAC701B)
TOPIC 5: TRAIN-TEST SPLIT (GENERALIZATION, STRATIFICATION & SPLITTING TOPOLOGIES)
MODULE 3: FEATURE SELECTION AND TRAINING & TESTING DATA
COURSE INSTRUCTOR: SUKANTA HUI | BARRACKPORE, WEST BENGAL, INDIA
================================================================================

1. INTRODUCTION AND THE GENERALIZATION PROBLEM
--------------------------------------------------------------------------------
The fundamental goal of machine learning is generalization: a model must perform
accurately on novel, previously unseen data drawn from the true underlying data-generating
distribution D.

In classical mathematical optimization, an algorithm minimizes the Empirical Risk
(training loss) over a finite sample S = {(x_1, y_1), ..., (x_N, y_N)}:
    hat{R}_S(h) = (1 / N) * sum_{i=1}^N L(h(x_i), y_i)

However, minimizing empirical risk alone is insufficient. By the Vapnik-Chervonenkis
(VC) generalization theorem, the true risk R(h) is bounded by:
    R(h) <= hat{R}_S(h) + sqrt( [ d_VC * (ln(2N / d_VC) + 1) - ln(delta / 4) ] / N )
where d_VC is the VC-dimension of the hypothesis space H, and delta is the failure probability.

If a model possesses sufficient capacity (e.g. a deep decision tree or neural network),
it can drive empirical risk hat{R}_S(h) to exactly 0.0 simply by memorizing training
instances, while true generalization error R(h) degrades catastrophically.

The Train-Test Split (Holdout Method) is the foundational empirical technique designed
to simulate out-of-sample deployment. By strictly sequestering a portion of the dataset
during training, the test set provides an unbiased Monte Carlo estimate of true risk R(h).


2. STATISTICAL MECHANICS & TEST UNCERTAINTY FORMULATIONS
--------------------------------------------------------------------------------

A. THE HOLDOUT ESTIMATOR & STANDARD ERROR
Let a model h be trained exclusively on training set S_train and evaluated on an
independent test set S_test of size N_test:
    hat{Acc} = (1 / N_test) * sum_{i in S_test} I(h(x_i) == y_i)

Under the assumption that test instances are independent and identically distributed
(I.I.D.) Bernoulli trials with true accuracy p:
    E[ hat{Acc} ] = p  (Unbiased Estimator)
    Var( hat{Acc} ) = p * (1 - p) / N_test
    Standard Error: SE = sqrt( p * (1 - p) / N_test )

WALD 95% CONFIDENCE INTERVAL:
    CI_95% = hat{p} +- 1.96 * sqrt( hat{p} * (1 - hat{p}) / N_test )

CRITICAL INSIGHT ON TEST SET SAMPLE SIZE:
If N_test is small, test performance estimates are plagued by massive statistical jitter:
- For N_test = 30 and observed accuracy 85.0%:
  SE = sqrt(0.85 * 0.15 / 30) = 6.52%  ==>  Margin = +- 12.78%!
  The true accuracy could legitimately be anywhere between 72.2% and 97.8%.
- For N_test = 500 and observed accuracy 85.0%:
  SE = sqrt(0.85 * 0.15 / 500) = 1.60%  ==>  Margin = +- 3.13%!
  95% CI is tightly bounded: [81.87%, 88.13%].
Operational Rule: Never make major architectural decisions based on a test set containing fewer than 100-200 instances.


B. THE BIAS-VARIANCE SPLIT RATIO TRADE-OFF
When partitioning N total observations into train fraction (1 - alpha) and test fraction alpha:
1. Large Train Fraction (e.g., 90/10 or 95/5):
   - Model Estimation Bias is LOW: The model trains on almost the entire dataset,
     producing parameters close to what would be obtained from all N samples.
   - Evaluation Variance is HIGH: The tiny test set produces large standard errors
     and noisy, unreliable benchmark scores.
2. Large Test Fraction (e.g., 50/50):
   - Evaluation Variance is LOW: Large test sample provides highly stable, precise metrics.
   - Model Estimation Bias is HIGH: Starving the model of 50% of available data
     severely degrades its learning curve and understates its true learning potential.
Standard Industrial Compromises: 80/20 or 75/25 for medium datasets; 90/10 or 95/5 for big data (N > 1,000,000).

C. LEARNING CURVES & SAMPLE SIZE SCALING
A learning curve plots model performance (empirical training error and out-of-sample
test error) as a function of training sample size N_train:
- At small N_train: Training error is deceptively low (the model easily overfits
  small batches), while test generalization error is high (severe generalization gap).
- As N_train increases: Training error slightly rises as memorization becomes impossible,
  while test generalization error steadily converges toward the asymptotic Bayes error.
- Splitting decisions dictate where the model operates along this trajectory. Starving
  training data shifts the model leftward along the curve, increasing variance.


3. SPLITTING TOPOLOGIES & TAXONOMY
--------------------------------------------------------------------------------

A. RANDOM SHUFFLE SPLIT
- Mechanism: Generates a uniform pseudo-random permutation of index set {1, ..., N}.
- Underlying Assumption: All samples are independently and identically distributed (I.I.D.).
- Vulnerabilities:
  1. Class Imbalance Collapse: In rare-event datasets (e.g. 1% fraud), random splitting
     can easily yield 0 fraud samples in the test fold.
  2. Temporal Leakage: Future records leak into the training set in time-series data.
  3. Group Contamination: Multiple observations from the same entity appear in both train and test.

B. STRATIFIED TRAIN-TEST SPLIT
- Mechanism: Partitions data within each target class label separately:
  For each class c in {1, ..., K}:
      N_test,c = round( N_c * test_size )
- Mathematical Guarantee:
      P(Y = c | Train) = P(Y = c | Test) = P(Y = c | Population)
- Mandatory For: Imbalanced classification, rare medical conditions, fraud detection,
  and multiclass problems where minority classes must be preserved in both folds.

C. TEMPORAL / CHRONOLOGICAL FORWARD SPLIT
- Mechanism: Sorts all observations chronologically by timestamp t_i.
      Split Index = round( N * (1 - test_size) )
      Train = { (x_i, y_i) | t_i <= t_split }
      Test  = { (x_i, y_i) | t_i > t_split }
- Zero Shuffling: Strictly prohibits random permutations.
- Crucial Purpose: Prevents lookahead data leakage in stock market, weather, electricity
  load, and economic forecasting where the future must never train the past.

Purged & Blocked Time-Series Cross-Validation:
In real-world econometric and high-frequency sensor applications, simple temporal
splitting is further enhanced by introducing an embargo or buffer window (purge window):
- Purging: Eliminates training labels whose event horizon overlaps with the test set.
- Embargoing: Adds an idle time gap (e.g., 2 hours or 3 days) immediately following
  the split to eliminate autoregressive serial correlation and momentum leakage.

D. GROUP-AWARE SPLIT (GroupShuffleSplit)
- Mechanism: Given an entity grouping vector G = [g_1, ..., g_N] (e.g. Patient_ID,
  User_ID, or Device_Serial):
      Partitions unique groups G_unique into G_train and G_test such that:
          G_train intersect G_test = empty_set
- Crucial Purpose: Prevents identity leakage. If Patient Mamata has 50 ECG heartbeats,
  all 50 heartbeats reside strictly in Train OR strictly in Test. A model must not
  cheat by memorizing patient-specific anatomical baselines.


4. THE THREE-WAY PARTITION: TRAIN, VALIDATION, AND TEST SETS
--------------------------------------------------------------------------------
A common beginner pitfall is performing model selection directly against the test set.

THE THREE OPERATIONAL TIERS:
1. Training Set (~60-70%):
   Used strictly to fit model internal parameters (weights w, biases b, decision tree splits).
2. Validation Set (~15-20%):
   Used to compare competing model architectures, perform feature selection, and tune
   hyperparameters (e.g. regularization strength lambda, tree depth, KNN k).
3. Test Set (~15-20%):
   LOCKED IN A VAULT. Evaluated strictly ONCE at the conclusion of the project to
   provide an unbiased final audit of production accuracy.

THE DATA SNOOPING VULNERABILITY:
If hyperparameters are repeatedly tuned against the test set, information leaks from
the test set into the engineer's decisions. The test set becomes part of the training
loop, causing "overfitting to the test set" and false confidence prior to production.

HOLDOUT VS K-FOLD CROSS-VALIDATION COMPARISON:
- Single Holdout Split:
  * Advantage: Computationally instantaneous (trains only 1 model).
  * Disadvantage: High variance in estimated performance if sample size N is small (< 1,000).
- K-Fold Cross-Validation:
  * Advantage: Every sample is used for both training and validation across K iterations.
    Averages out evaluation variance and provides standard deviation across folds.
  * Disadvantage: Requires training K distinct models (K-times higher computational cost).
Recommendation: Use K-fold cross-validation during validation and hyperparameter tuning,
and retain a dedicated, locked Holdout Test Set for final unvarnished evaluation.


5. FOUR REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
--------------------------------------------------------------------------------

CASE STUDY 1: JADAVPUR & AMRI SALT LAKE CLINICAL CARDIOLOGY INFORMATICS
- Domain: Arrhythmia detection using 5,000 ECG segment beats across 100 cardiology patients.
- Splitting Vulnerability:
  * Naive Random Split: Beat segments from Patient Susmita were scattered into both
    train (80%) and test (20%). The neural network memorized Susmita's unique baseline
    ST-segment waveform, achieving a deceptive 99.4% test accuracy.
  * Real-world Failure: When deployed on new patients at AMRI Salt Lake, accuracy plunged to 71.0%!
  * Architectural Remediation: Deployed \`GroupShuffleSplit(groups=Patient_ID)\`.
    Ensured all 100 beats of a patient belong entirely to train OR test. Test accuracy
    stabilized at an honest, generalizable 82.5%.

CASE STUDY 2: WBSEDCL SMART METER GRID TIME-SERIES LOAD FORECASTING (BARRACKPORE)
- Domain: 15-minute interval distribution substation megawatt load forecasting across 365 days.
- Splitting Vulnerability:
  * Random Shuffle Split: Mixed January-December timestamps randomly across folds.
    The model used July 15 evening readings to predict July 14 morning load (impossible time-travel!).
  * Reported test error was artificially tiny (RMSE = 0.42 MW).
  * Architectural Remediation: Deployed Temporal Forward Split (Train: Jan 1 - Sept 30;
    Test: Oct 1 - Dec 31). Simulated true operational reality with an honest RMSE of 1.84 MW.

CASE STUDY 3: BANKURA & PURULIA MICRO-FINANCE CREDIT DEFAULT PREDICTION
- Domain: Micro-lending loan repayment prediction across 50,000 rural self-help group borrowers.
- Splitting Vulnerability:
  * Severe Class Imbalance: Base default rate is only 1.20% (600 defaults in 50,000 loans).
  * Naive Random Split: Random seed variation produced a test fold containing only 4 defaults
    (0.04%), rendering recall metrics completely uncomputable!
  * Architectural Remediation: Deployed \`StratifiedShuffleSplit\`. Enforced exact 1.20% default
    representation in both train (480 defaults) and test (120 defaults).

CASE STUDY 4: KOLKATA METRO GREEN LINE SMARTCARD COMMUTER RETENTION
- Domain: Transit pass churn prediction for regular Howrah-Salt Lake commuters.
- Splitting Vulnerability:
  * Frequent travelers generate multiple monthly recharge logs under the same Smartcard UID.
  * Group-aware split by Smartcard UID prevented the model from recognizing individual
    commuters across train and test partitions.


6. COMMON PRODUCTION PITFALLS & ARCHITECTURAL ANTI-PATTERNS
--------------------------------------------------------------------------------
1. Feature Preprocessing Before Splitting (Data Leakage):
   Fitting \`StandardScaler\`, \`MinMaxScaler\`, or target encoders on the ENTIRE dataset
   before splitting. The test set mean and standard deviation leak into training.
   Fix: Split FIRST. Call \`scaler.fit(X_train)\` and \`scaler.transform(X_test)\`.
2. Random Splitting on Time-Series Data:
   Randomly shuffling chronological data. Future points leak into the past, violating
   causal time boundaries and manufacturing false model confidence.
3. Ignoring Group Structure on Repeated Measurements:
   Randomly splitting datasets with multiple rows per patient, user, device, or store.
   The model memorizes entity signatures instead of learning general patterns.
4. Evaluating on an Insufficiently Sized Test Set:
   Testing on N_test = 25 samples. The 95% confidence interval margin of error is +-15%,
   making metric comparisons mathematically meaningless.
5. Hyperparameter Tuning Directly on the Test Set:
   Adjusting tree depth or learning rates until test score improves. The test set is
   compromised and ceases to be an independent holdout.
6. Target Imbalance Distortion via Unstratified Splits:
   Failing to stratify minority classes in imbalanced classification. The test fold
   either starves of positive instances or suffers severe distribution shift.


7. MAKAUT VIVA VOCE EXAMINATION QUESTIONS & ANSWERS (SUKANTA HUI CURATED)
--------------------------------------------------------------------------------
Q1: Why is an empirical train-test split necessary in machine learning?
A1: Minimizing empirical training error does not guarantee out-of-sample generalization
    due to overfitting (the model memorizing training noise). An independent holdout
    test set provides an unbiased Monte Carlo estimate of true generalization risk R(h).

Q2: What is the difference between Random Split and Stratified Split?
A2: A random split uniformly shuffles all instances, assuming identical I.I.D. conditions.
    A stratified split partitions samples within each individual class label, ensuring
    that train and test sets strictly preserve the population class proportions P(Y = c).

Q3: When is Group-Aware Splitting (GroupShuffleSplit) mandatory?
A3: When the dataset contains repeated measurements or observations originating from
    the same entity (e.g. multiple ECG heartbeats from the same patient, multiple sessions
    from the same customer). Group splitting ensures that all records for an entity belong
    entirely to either train or test, preventing identity leakage.

Q4: Why must chronological time-series data NEVER be randomly shuffled during train-test splitting?
A4: Randomly shuffling time-series data causes lookahead data leakage (training on future
    events to predict past events). It violates the physical arrow of time and produces
    overly optimistic error metrics that catastrophically fail in real-time deployment.

Q5: What are the distinct roles of the Training, Validation, and Test sets?
A5: - Training Set: Fits model parameters (weights, biases, tree splits).
    - Validation Set: Tunes hyperparameters, performs feature selection, and selects model architectures.
    - Test Set: Strictly quarantined; evaluated ONCE at the end for an unbiased audit.

Q6: What is the formula for the Standard Error of test accuracy, and why does N_test matter?
A6: SE = sqrt( p * (1 - p) / N_test ). If N_test is small (e.g. 30), SE is large (~6.5%),
    producing a massive +-13% margin of error. A sufficiently large test set is essential
    for statistically reliable benchmark scores.

Q7: What is Data Snooping / Test Set Overfitting?
A7: Data snooping occurs when model hyperparameters or feature subsets are iteratively
    adjusted based on test set scores. Information leaks from the test set into engineering
    decisions, destroying the test set's independence and inflating reported accuracy.

Q8: Should feature standardization (StandardScaler) be fitted before or after splitting?
A8: StandardScaler must ALWAYS be fitted strictly on X_train (\`scaler.fit(X_train)\`),
    and then applied to transform both X_train and X_test. Fitting on the combined data
    leaks test set mean and variance into training.

Q9: What happens if a dataset with 0.5% fraud is split randomly without stratification?
A9: The test set may end up with zero fraud cases purely by random chance, or an
    inflated 2.0% fraud rate. Stratification guarantees that the 0.5% fraud prevalence
    is preserved across both training and testing partitions.

Q10: In West Bengal smart grid load forecasting, how should train and test sets be partitioned?
A10: Using a Temporal Forward Split. For example, train on the first 9 months (Jan 1 to
     Sept 30) and test on the final 3 months (Oct 1 to Dec 31). This strictly preserves
     the operational timeline without lookahead leakage.
================================================================================
END OF STUDY NOTES: TOPIC 5 (BCAC701B)
================================================================================
`,U=[{id:1,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A junior analyst at a tech hub in Salt Lake trains a Random Forest model on 100% of available customer records and reports 99.8% training accuracy.",question:"Why is high empirical training accuracy an unreliable indicator of how well a model will perform in real-world deployment?",options:["Because floating-point numbers lose precision during backpropagation.","Because high-capacity models can simply memorize training noise and idiosyncratic quirks (overfitting), failing to generalize to unseen test data.","Because Random Forests only work when sample sizes exceed one million rows.","Because empirical risk is mathematically bounded by zero."],correct:1,explanation:"Minimizing empirical training error does not guarantee out-of-sample generalization. A complex model can achieve 100% accuracy on training data by memorizing training instances, but will fail catastrophically when deployed on novel data. The holdout test set provides an unbiased estimate of true risk.",practicalTip:"Never report training accuracy to stakeholders; business value is dictated solely by performance on independent, quarantined test sets."},{id:2,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A data engineer in Kolkata is preparing a train-test split for a loan default dataset where only 1.2% of applicants defaulted.",question:"Why is a standard random shuffle split hazardous for heavily imbalanced classification datasets?",options:["Because random shuffling inverts positive numbers into negative numbers.","Because uniform random partitioning can cause severe class distribution shift, potentially leaving the test fold with zero minority default instances.","Because random splits require all features to follow a Gaussian distribution.","Because random splitting increases matrix condition numbers."],correct:1,explanation:"With extreme class imbalance (1.2% defaults), uniform random shuffling subject to finite-sample sampling variance can easily produce a test set with 0 defaults (or an artificially inflated 4%). A Stratified split must be used to guarantee identical class prevalence across train and test.",practicalTip:"Always set `stratify=y` in `train_test_split` whenever performing classification, especially when minority class prevalence is below 15%."},{id:3,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An ML architect explains the operational difference between the Validation Set and the Test Set to an engineering team.",question:"What is the specific, distinct role of the Validation Set compared to the locked Test Set?",options:["The validation set is used to update neural network weights via gradient descent.","The validation set is used for hyperparameter tuning and model architecture selection, while the test set is locked and evaluated once for final unbiased reporting.","The validation set contains only categorical data, while the test set contains numerical data.","The validation set is evaluated after the model is deployed in production."],correct:1,explanation:"The Training set fits parameters (weights/biases); the Validation set tunes hyperparameters (learning rate, tree depth, lambda) and chooses between models; the Test set is quarantined in a vault to give an unvarnished audit of production readiness.",practicalTip:"If you adjust your model hyperparameters based on the test set, you have turned the test set into a validation set and compromised its integrity."},{id:4,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A research team in Barrackpore forecasts hourly electricity load for WBSEDCL across 365 days of chronological telemetry.",question:"Why must time-series forecasting datasets NEVER be partitioned using random shuffle splitting?",options:["Because electricity grid sensors only measure alternating current.","Because random shuffling introduces temporal lookahead data leakage (training on future events to predict past events), violating causal physical reality.","Because time-series timestamps cannot be converted to floating-point numbers.","Because random splitting converts non-stationary time series into white noise."],correct:1,explanation:"Shuffling time-series data destroys temporal causality. Training on July 15 to predict July 14 creates impossible lookahead leakage, yielding artificially low error metrics that completely collapse when the model is asked to forecast tomorrow's unknown future.",practicalTip:"Use `TimeSeriesSplit` or chronological forward slicing (e.g. Jan-Sept for train, Oct-Dec for test) for all time-dependent datasets."},{id:5,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A cardiology diagnostic dataset at Jadavpur Medical Hub has 10 ECG heartbeat recordings for each of 50 distinct patients (500 rows total).",question:"What specific splitting topology must be used to prevent patient identity leakage across train and test sets?",options:["Random Shuffle Split with random_state=42.","Group-Aware Split (GroupShuffleSplit), where all records for a given patient reside entirely in either train or test.","Stratified Shuffle Split on heart rate.","Min-Max Normalization Split."],correct:1,explanation:"If recordings from the same patient appear in both train and test, the model memorizes patient-specific anatomical baselines (identity leakage), achieving false 99% accuracy. `GroupShuffleSplit(groups=Patient_ID)` ensures independent patient evaluation.",practicalTip:"Whenever your dataset has multiple rows per person, device, store, or vehicle, always split by Group ID."},{id:6,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A data scientist partitions a dataset of 100,000 samples using a 50/50 train-test split ratio.",question:"What theoretical drawback occurs when allocating an excessively large fraction (such as 50%) to the test set?",options:["Evaluation variance on the test set becomes infinitely large.","Model estimation bias increases significantly because the model is starved of 50% of the available training data, degrading its learning curve.","The test set becomes corrupted by floating-point rounding errors.","The model will overfit the training data more aggressively."],correct:1,explanation:"Allocating 50% of data to testing reduces the effective training sample size, increasing model estimation bias (the model learns less than it could). Standard practice for N = 100,000 is 80/20 or 90/10.",practicalTip:"As total sample size N grows into millions, the test ratio can safely drop to 5% or 1%, since 10,000 test samples provide tight confidence intervals."},{id:7,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An engineer normalizes an entire dataset using `StandardScaler().fit_transform(X)` before calling `train_test_split(X, y)`.",question:"What critical methodological violation has been committed here?",options:["Underfitting caused by premature feature shrinkage.","Data Leakage (Information Leakage): The test set mean and standard deviation leaked into the scaler, contaminating the training data.","Multicollinearity collapse.","Matrix singularity in the covariance matrix."],correct:1,explanation:"Fitting any preprocessing transformer (scaler, imputer, encoder, or feature selector) on the combined dataset before splitting leaks test set distribution parameters into training. Transformers must be fitted strictly on X_train only.",practicalTip:"Golden Rule: `scaler.fit(X_train)`, then `scaler.transform(X_train)` and `scaler.transform(X_test)`. Never fit on the whole dataset!"},{id:8,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An executive asks why a model with 92% test accuracy achieved only 78% accuracy when deployed on live customer traffic.",question:"Which of the following represents a primary cause of generalization degradation between test evaluation and live production?",options:["The production database was compiled using C++ instead of Python.","Data Distribution Shift (Covariate Shift / Concept Drift) where real-world production inputs diverge from the historical test set distribution.","The test set had too many samples.","The model had zero empirical training error."],correct:1,explanation:"The holdout assumption relies on production data being drawn from the exact same distribution D as the test set. Over time, customer behavior, seasonal patterns, and macroeconomic conditions change (distribution shift), degrading live performance.",practicalTip:"Continuously monitor production data for covariate shift (e.g. population stability index - PSI) and retrain models periodically."},{id:9,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A model achieves an observed classification accuracy of hat{p} = 0.80 on an independent test set of N_test = 100 samples.",question:"What is the Standard Error (SE) of this test accuracy estimate?",options:["SE = sqrt(0.80 * 0.20 / 100) = sqrt(0.16 / 100) = sqrt(0.0016) = 0.04 (4.0%)","SE = 0.80 / 100 = 0.008 (0.8%)","SE = sqrt(0.80 / 100) = 0.089 (8.9%)","SE = (0.80 * 0.20) / 10 = 0.016 (1.6%)"],correct:0,explanation:"Under the Bernoulli trial model for test instances, the variance of sample proportion is p*(1-p)/N_test. Standard Error SE = sqrt(0.80 * 0.20 / 100) = sqrt(0.0016) = 0.04, or 4.0%.",practicalTip:"A standard error of 4.0% means a 95% confidence interval spans roughly +- 7.84%, meaning the true accuracy is [72.16%, 87.84%]."},{id:10,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"An experiment evaluates two models on a test set of N_test = 25 samples. Model A scores 84.0% and Model B scores 88.0%.",question:"Using the Wald 95% margin of error formula (1.96 * SE), why is concluding 'Model B is definitively superior' mathematically unjustified?",options:["Because Model B has an even-numbered accuracy percentage.","Because with N_test = 25, the 95% margin of error is approximately +-14%, making the 4% difference between Model A and B statistically indistinguishable noise.","Because accuracy cannot be computed on fewer than 100 samples.","Because Model A and Model B have identical hyperparameter values."],correct:1,explanation:"For N = 25 and p approx 0.85, SE = sqrt(0.85 * 0.15 / 25) = sqrt(0.0051) = 0.0714 (7.14%). The 95% margin of error is 1.96 * 7.14% = +- 14.0%. A 4% difference is completely drowned out by sampling noise. McNemar's test or paired t-tests would show p > 0.50.",practicalTip:"Small test sets produce wide confidence bands. Always report confidence intervals alongside point accuracy metrics."},{id:11,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A dataset has N = 10,000 samples. In a Stratified split with test_size = 0.20, class 0 has 9,000 samples and class 1 has 1,000 samples.",question:"How many samples from class 0 and class 1 will be assigned to the test set?",options:["1,000 from class 0 and 1,000 from class 1.","1,800 from class 0 and 200 from class 1.","2,000 from class 0 and 0 from class 1.","1,500 from class 0 and 500 from class 1."],correct:1,explanation:"Stratified splitting takes exactly 20% of each individual class: Class 0 test samples = 9,000 * 0.20 = 1,800; Class 1 test samples = 1,000 * 0.20 = 200. Total test set = 1,800 + 200 = 2,000 samples (preserving the exact 10% positive rate).",practicalTip:"Stratification ensures that hypergeometric sampling variation does not alter class proportions between partitions."},{id:12,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"In Vapnik-Chervonenkis (VC) generalization theory, the upper bound on true risk R(h) contains the term sqrt( [d_VC * (ln(2N / d_VC) + 1) - ln(delta / 4)] / N ).",question:"What happens to this generalization bound as the training sample size N approaches infinity (N -> infinity)?",options:["The bound expands to infinity, making learning impossible.","The bound shrinks to zero, proving that empirical risk hat{R}_S(h) converges uniformly to true risk R(h) (Consistency of ERM).","The bound oscillates sinusoidally.","The bound becomes strictly equal to the VC dimension."],correct:1,explanation:"As N -> infinity, the denominator N grows much faster than ln(N), driving the square-root complexity penalty to zero. This proves the fundamental theorem of statistical learning: with infinite training data, empirical risk converges to true risk.",practicalTip:"More training data shrinks the generalization gap between train and test performance for any model with finite VC dimension."},{id:13,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A time-series dataset contains daily observations from t = 1 to t = 1000. An analyst applies a 5-step rolling window temporal split (walk-forward cross-validation).",question:"In walk-forward cross-validation, what is the defining structural rule regarding the training and testing temporal windows at fold k?",options:["Fold k shuffles all past and future records uniformly.","At fold k, the model trains exclusively on past observations t <= t_k, and tests on subsequent future observations t_k < t <= t_{k+1}.","Fold k tests on past observations and trains on future observations.","Fold k leaves an unobserved 5-year gap between observations."],correct:1,explanation:"Walk-forward (rolling-origin) cross-validation enforces strict chronological order: the training window expands or rolls forward in time, and testing is always performed on the immediate subsequent future block. Future information never trains past folds.",practicalTip:"Walk-forward validation is the industry standard for backtesting algorithmic trading strategies and energy grid load models."},{id:14,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A data engineer evaluates how test set sample size N_test impacts the width of the 95% confidence interval margin of error: Margin = 1.96 * sqrt(p(1-p)/N_test).",question:"To cut the margin of error strictly in half (e.g. from +-6% down to +-3%), by what factor must N_test be increased?",options:["2x (doubled).","4x (quadrupled).","8x.","16x."],correct:1,explanation:"Because N_test sits inside the square root in the denominator: Margin proportional to 1 / sqrt(N_test). To divide the margin by 2, sqrt(N_test) must double, which requires N_test to increase by a factor of 2² = 4x.",practicalTip:"Diminishing returns: Quadrupling your test set only cuts your estimation uncertainty in half."},{id:15,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A regression model is evaluated on a test set of size N_test = 50. Mean Squared Error (MSE) is 16.0, and sample variance of squared errors Var(e²) = 64.0.",question:"What is the standard error of the MSE estimate on this test set?",options:["SE(MSE) = sqrt(64.0 / 50) = sqrt(1.28) approx 1.13","SE(MSE) = 16.0 / 50 = 0.32","SE(MSE) = 64.0 / 16.0 = 4.0","SE(MSE) = 0.0"],correct:0,explanation:"The MSE is an empirical sample mean of individual squared errors e_i². By the Central Limit Theorem, the standard error of a sample mean is sqrt(Var / N) = sqrt(64.0 / 50) = sqrt(1.28) = 1.131.",practicalTip:"Regression metrics (MSE, MAE) also have standard errors and confidence intervals, not just classification accuracy."},{id:16,tier:2,difficulty:"Intermediate",category:"Mathematical Mechanics",scenario:"A dataset has 60 patients with 10 records each (600 rows). In a `GroupKFold(n_splits=5)`, how are the groups partitioned across folds?",question:"How many patients are assigned to the test fold in each iteration, and can any patient appear in both train and test in the same fold?",options:["12 patients in test, 48 in train; no patient ever appears in both train and test in the same fold.","10 patients in test, 50 in train; patients can overlap if their records are randomized.","All 60 patients are in test and train simultaneously.","1 patient in test, 59 in train."],correct:0,explanation:"GroupKFold partitions the 60 unique patient groups into 5 disjoint subsets of 60 / 5 = 12 patients each. In each fold, 12 patients (120 rows) form the test set, and 48 patients (480 rows) form the train set. Zero patient overlap occurs.",practicalTip:"GroupKFold guarantees that models are evaluated on completely unseen patients/entities, simulating clinical reality."},{id:17,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A machine learning pipeline handles missing numerical values by computing the column median. The data scientist runs `df['income'].fillna(df['income'].median())` on the raw DataFrame before calling `train_test_split`.",question:"Why does this represent data leakage, and what is the proper engineering pattern?",options:["Because median is non-differentiable; mean must be used instead.","The global median incorporates test set values; the fix is to compute the median strictly on X_train (`imputer.fit(X_train)`) and use that training median to fill both X_train and X_test.","The test set should be filled with random noise instead of median.","Missing values cannot be filled before neural network training."],correct:1,explanation:"Computing the median across the full dataset leaks test set distribution information into training. The proper pattern is to fit an imputer (or compute median) exclusively on X_train, and use that fitted value to transform X_test.",practicalTip:"Wrap your imputer, scaler, and estimator inside a scikit-learn `Pipeline` to prevent leakage across splits automatically."},{id:18,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An engineer evaluates an algorithmic trading model using random 80/20 train-test splitting. The model achieves an incredible 94% test accuracy, but loses money rapidly in live trading.",question:"What specific form of data leakage occurred during the random split of financial time series?",options:["The model suffered from gradient vanishing in the LSTM layers.","Temporal Lookahead Leakage: Random splitting placed future market prices into the training set, allowing the model to predict past prices using future trend signals that do not exist in live trading.","The test set was too large.","The training loss was non-convex."],correct:1,explanation:"Financial prices exhibit serial autocorrelation and momentum. Random shuffling puts t+1 into train and t into test, effectively allowing the model to 'see the future' to predict the past. In live trading, the future is unknown, causing immediate collapse.",practicalTip:"Never use random splitting for financial, time-series, or event-driven sequential data. Use walk-forward or purged time-series splits."},{id:19,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data scientist sets `random_state=42` in `train_test_split(X, y, test_size=0.2, random_state=42)`.",question:"What is the primary scientific and engineering purpose of explicitly pinning the pseudo-random seed (`random_state`)?",options:["It speeds up execution by running on multiple GPU threads.","It guarantees reproducibility: any colleague or CI/CD test running the code will generate the exact same train and test partitions.","It automatically balances class distributions without stratification.","It guarantees that test accuracy will be higher than training accuracy."],correct:1,explanation:"Pinning the seed (random_state) ensures deterministic pseudo-random number generation. Every run produces the exact same train/test split, making experimental comparisons, error analysis, and debugging completely reproducible across teams.",practicalTip:"Always fix random_state for reproducible research, but occasionally test across multiple seeds to verify results are not seed-dependent."},{id:20,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"In a medical imaging dataset, 500 chest X-rays were taken from 50 tuberculosis patients (10 scans per patient taken from different angles). A team performs standard random splitting.",question:"Why will this model likely fail external clinical validation even if its holdout test accuracy is 99%?",options:["Chest X-rays cannot be converted into numerical matrices.","Identity Leakage: The model learned patient-specific anatomical features (rib cage shape, bone density) rather than generalizable tuberculosis pathology, because scans from the same patients existed in both folds.","The model had too many convolutional layers.","The learning rate was decaying too rapidly."],correct:1,explanation:"When multiple scans from the same subject are split randomly, the network learns to identify individual patients rather than disease pathology. In external hospitals with new patients, the model has never seen their anatomy and performance plummets. Group splitting is mandatory.",practicalTip:"Rule of thumb for medical AI: Group by Patient ID; never let a patient cross the train/test barrier."},{id:21,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data pipeline uses target encoding: categorical zip codes are replaced with the mean target value of house prices in that zip code. The engineer computes target encoding on the full dataset before splitting.",question:"What form of catastrophic data leakage occurs, and how does it distort feature selection?",options:["Target Leakage: The target values of test set houses are directly encoded into the feature matrix, making the zip code feature appear artificially omniscient during training.","The encoding causes categorical variables to become complex numbers.","The target variable variance shrinks to zero.","The model underfits because zip codes have high cardinality."],correct:0,explanation:"Target encoding computes mean(Y | X = category). If computed over the entire dataset, each sample's feature incorporates the target values of test samples! This is extreme target leakage. Target encodings must be computed strictly inside training folds.",practicalTip:"Use out-of-fold target encoding (e.g. `TargetEncoder` in scikit-learn) inside a cross-validation pipeline to prevent target leakage."},{id:22,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An ML architect reviews a pipeline that uses an 80/20 train-test split on N = 500 samples. The team reports test accuracy = 86.0%.",question:"Why might K-Fold Cross-Validation (e.g. 5-fold CV) be vastly superior to a single 80/20 holdout split on this small dataset?",options:["K-fold CV runs 5x faster than a single holdout split.","On N = 500, a single test set has only 100 samples (high variance); K-fold CV evaluates every single sample in validation, averaging out sampling noise and providing standard deviation bounds.","K-fold CV eliminates the need for training data.","K-fold CV transforms non-linear models into linear equations."],correct:1,explanation:"With small N, a single holdout test set of 100 samples is noisy and highly dependent on which 100 samples happen to be chosen. K-Fold CV ensures all 500 samples are evaluated in out-of-fold validation, producing a much more stable and robust performance estimate.",practicalTip:"For datasets with N < 5,000, rely on Repeated Stratified K-Fold Cross-Validation for model tuning rather than a single small holdout."},{id:23,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"In financial high-frequency time series, Marcos López de Prado introduced the concept of 'Purged and Embargoed' cross-validation.",question:"What is the purpose of adding an 'Embargo' buffer window between training and testing periods in time series?",options:["To comply with international financial sanctions.","To prevent autoregressive serial correlation and market momentum from leaking immediately across the split boundary.","To allow GPU processors to cool down between epochs.","To delete all zero-variance trades."],correct:1,explanation:"Financial returns exhibit serial correlation and memory. If a training window ends at 2:00 PM and the test window starts at 2:01 PM, immediate market momentum leaks across the boundary. An embargo (e.g. 1-day idle buffer) eliminates autoregressive leakage.",practicalTip:"In time-series models with lagged features (t-1, t-2), ensure the test set starts after the longest lag horizon to prevent leakage."},{id:24,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A junior engineer tunes XGBoost hyperparameters by running a grid search directly against the holdout test set, picking the configuration with the highest test F1-score.",question:"What is the formal term for this vulnerability, and why does it invalidate the test set?",options:["Data Snooping (Overfitting to the Test Set); the test set is no longer an independent holdout because model selection decisions were driven by test set outcomes.","Stochastic Gradient Collapse.","High Bias Underfitting.","Covariate Inversion."],correct:0,explanation:"Tuning against the test set turns the test set into a de facto training/validation set. The selected hyperparameters fit the idiosyncrasies of that specific test set (data snooping), producing overly optimistic scores that will not replicate in production.",practicalTip:"Always maintain a 3-way split: Train on Train, tune hyperparameters on Validation, and evaluate Test strictly once at the end."},{id:25,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"At AMRI Salt Lake, 100 cardiology patients each have 15 ECG segments (300 total). A random 80/20 split achieves 99.2% test accuracy. When deployed on new patients at Jadavpur Medical Hub, accuracy plunges to 71.0%.",question:"What exact flaw explains this catastrophic deployment drop, and what code change fixes it?",options:["The model had too few neurons; increase network depth.","Identity Leakage: Random split leaked segments from 19 of the 20 patients into both folds; the fix is `GroupShuffleSplit(test_size=0.20)` grouping by `Patient_ID`.","The ECG machines in Jadavpur used different voltage.","Change test_size from 0.20 to 0.50."],correct:1,explanation:"Random splitting allowed 19 out of 20 patients to have beats in both train and test. The model memorized individual patient cardiac waveforms. In deployment on new patients, it had zero memory of their anatomy. GroupShuffleSplit fixes this completely.",practicalTip:"Always audit the intersection of entity IDs between train and test: `set(train_patients).intersection(set(test_patients)) == set()` must be TRUE."},{id:26,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"WBSEDCL Barrackpore smart grid models 15-minute load telemetry from Jan 1 to Dec 31. An analyst uses `train_test_split(shuffle=True)` and reports RMSE = 0.42 MW. In live deployment, RMSE rises to 1.84 MW.",question:"Why was the reported test RMSE so deceptively low during offline evaluation?",options:["The electrical grid suffered from rolling blackouts.","Shuffling created impossible chronological time-travel leakage (e.g. using July 15 evening readings to interpolate July 15 morning load), masking real-world forecasting difficulty.","The test set had higher ambient temperatures than the training set.","The model ran out of memory."],correct:1,explanation:"In time-series with strong daily and seasonal cycles, shuffling turns forecasting into interpolation: the model simply interpolates between morning and night readings. In real life, future readings are unknown, causing RMSE to quadruple to 1.84 MW.",practicalTip:"For grid load forecasting, use Chronological Forward Slicing: Train Jan-Sept, Test Oct-Dec."},{id:27,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A micro-finance lender in Bankura has 50,000 borrower records with a 1.20% default rate. An unstratified random split creates a test set where default recall is reported as 0.0%.",question:"What caused the model to have 0% recall on the test set?",options:["The model weights were initialized with zeros.","Due to random sampling variance on extreme class imbalance, the test set contained almost zero default cases, or the model learned a degenerate majority-class classifier.","Bankura borrowers always repay loans on time.","The test set had 100,000 samples."],correct:1,explanation:"In extreme imbalance, unstratified splitting can starve the test fold of minority instances. Furthermore, if the training split also experienced class depletion, the model predicts the majority class 100% of the time, yielding 0% recall. Stratified splitting is essential.",practicalTip:"Always use `StratifiedShuffleSplit` or `StratifiedKFold` for imbalanced classification tasks."},{id:28,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"Kolkata Metro Green Line tracks repeated commuter card taps across 6 months. An analyst wants to predict customer churn (commuters stopping travel).",question:"How should the train and test split be structured to ensure realistic production evaluation?",options:["Random 80/20 split across all individual turnstile tap rows.","Temporal cutoff: Train on months 1-4 tap history to predict churn in month 5; test on months 2-5 to predict churn in month 6 (Out-of-Time Validation).","Sort by passenger age and split on age 30.","Shuffle by station name."],correct:1,explanation:"Churn prediction is inherently temporal. The model must learn from past observation windows to predict a future churn window (Out-of-Time validation). Splitting individual tap rows randomly causes massive temporal and user leakage.",practicalTip:"Customer churn models require Out-of-Time (OOT) validation windows to simulate real-world marketing retention campaigns."},{id:29,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A pharmaceutical quality team in Serampore tests tablet dissolution rate across 12 manufacturing batches. A data scientist splits 1,200 tablets randomly into 80% train and 20% test.",question:"If tablets from the same manufacturing batch share chemical binder homogeneity, what split should have been used?",options:["Random split with stratified dissolution rates.","Group-aware split by Manufacturing Batch ID (`GroupKFold`), ensuring that entire batches are held out as test sets.","Min-max scaling split.","Sort by tablet serial number and drop odd numbers."],correct:1,explanation:"Tablets within the same batch share common chemical synthesis, moisture, and binder conditions. Randomly splitting tablets from the same batch tests whether the model can recognize that batch's signature. Holding out entire batches tests whether the model generalizes to new batches.",practicalTip:"In manufacturing and chemometrics, always group by Batch/Lot ID to ensure cross-batch generalization."},{id:30,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"An ML architect is designing an automated MLOps pipeline for continuous retraining on cloud infrastructure.",question:"What is the recommended MLOps architecture to guarantee that feature scaling, imputation, and model fitting are strictly isolated from test sets?",options:["Store preprocessed numpy arrays in a public S3 bucket.","Encapsulate transformers and estimators into a unified scikit-learn `Pipeline`, fit the pipeline strictly on the training partition, and evaluate on an isolated test partition within an automated CI/CD evaluation gate.","Run feature selection manually in Jupyter Notebooks before uploading to production.","Disable the test set after the first release."],correct:1,explanation:"Encapsulating all preprocessing (imputation, scaling, feature selection) and the final estimator into a unified `Pipeline` guarantees that `fit()` is executed exclusively on training data, completely preventing data leakage during retraining.",practicalTip:"In modern MLOps, a Pipeline object is an atomic software artifact that guarantees zero-leakage training and reproducible inference."}],d=[{id:1,patient:"Mamata (Barrackpore)",beat:"Beat 1",time:10,hr:88,arrhythmia:1},{id:2,patient:"Mamata (Barrackpore)",beat:"Beat 2",time:15,hr:89,arrhythmia:1},{id:3,patient:"Mamata (Barrackpore)",beat:"Beat 3",time:20,hr:87,arrhythmia:1},{id:4,patient:"Mamata (Barrackpore)",beat:"Beat 4",time:25,hr:88,arrhythmia:1},{id:5,patient:"Mahima (Kolkata)",beat:"Beat 1",time:30,hr:72,arrhythmia:0},{id:6,patient:"Mahima (Kolkata)",beat:"Beat 2",time:35,hr:73,arrhythmia:0},{id:7,patient:"Mahima (Kolkata)",beat:"Beat 3",time:40,hr:71,arrhythmia:0},{id:8,patient:"Mahima (Kolkata)",beat:"Beat 4",time:45,hr:72,arrhythmia:0},{id:9,patient:"Susmita (Ichapur)",beat:"Beat 1",time:50,hr:70,arrhythmia:0},{id:10,patient:"Susmita (Ichapur)",beat:"Beat 2",time:55,hr:69,arrhythmia:0},{id:11,patient:"Susmita (Ichapur)",beat:"Beat 3",time:60,hr:71,arrhythmia:0},{id:12,patient:"Susmita (Ichapur)",beat:"Beat 4",time:65,hr:70,arrhythmia:0},{id:13,patient:"Debangshu (Salt Lake)",beat:"Beat 1",time:70,hr:92,arrhythmia:1},{id:14,patient:"Debangshu (Salt Lake)",beat:"Beat 2",time:75,hr:94,arrhythmia:1},{id:15,patient:"Debangshu (Salt Lake)",beat:"Beat 3",time:80,hr:91,arrhythmia:1},{id:16,patient:"Debangshu (Salt Lake)",beat:"Beat 4",time:85,hr:93,arrhythmia:1}],N=[{id:1,scenario:"At AMRI Salt Lake, 5,000 ECG beats from 50 cardiology patients are randomly split 80/20. The test accuracy is 99.1%. When deployed on new patients at Jadavpur Medical Hub, accuracy plunges to 71.5%.",question:"What specific architectural vulnerability caused this catastrophic out-of-hospital performance drop?",options:[{label:"A",text:"The neural network learning rate decayed too quickly."},{label:"B",text:"Identity Leakage: Random splitting allowed heartbeats from the same patients to appear in both train and test folds, allowing the model to memorize patient-specific baseline anatomy rather than general pathology."},{label:"C",text:"The test set was too large, causing excessive evaluation variance."},{label:"D",text:"Electrocardiogram voltages violate the central limit theorem."}],correct:"B",explanation:"When repeated records from the same patient or user exist, uniform random splitting causes identity leakage. The model learns individual anatomical baselines. On unseen patients, this memorization is useless, causing accuracy to collapse. GroupShuffleSplit by Patient ID is mandatory."},{id:2,scenario:"A data engineer in Barrackpore is building an electricity demand forecaster for WBSEDCL using 365 days of 15-minute load readings. A colleague suggests shuffling the records randomly before splitting 80/20.",question:"Why does random shuffling on chronological time-series data produce deceptive, invalid performance metrics?",options:[{label:"A",text:"Random shuffling requires continuous variables to be scaled to [0, 1]."},{label:"B",text:"Temporal Lookahead Leakage: Shuffling mixes future timestamps into the training set, allowing the model to predict past events using future observations that will never exist in live production."},{label:"C",text:"Electricity grid data cannot be partitioned into numerical arrays."},{label:"D",text:"Shuffling increases the empirical training loss to infinity."}],correct:"B",explanation:"In time-series data, the future must never train the past. Shuffling turns forecasting into interpolation (e.g. interpolating July 15 morning load using July 15 evening and July 16 readings). In live deployment, tomorrow is completely unknown, causing models to fail."},{id:3,scenario:"An ML model is evaluated on a tiny holdout test set of N_test = 25 samples, scoring 84.0% accuracy (21 correct out of 25).",question:"Using the Wald 95% confidence interval formula, what is the approximate margin of error on this test accuracy score?",options:[{label:"A",text:"Approximately ±1.5%."},{label:"B",text:"Approximately ±14.3% (95% CI: [69.7%, 98.3%]); small test sets have massive evaluation variance."},{label:"C",text:"Exactly 0.0% because sample accuracy is an unbiased estimator."},{label:"D",text:"Approximately ±50.0%."}],correct:"B",explanation:"Standard Error SE = √(0.84 * 0.16 / 25) = √(0.005376) ≈ 0.0733 (7.33%). The 95% margin of error is 1.96 * 7.33% ≈ ±14.37%. With only 25 test samples, the true accuracy is anywhere between 69.7% and 98.3%, making fine-grained model comparisons impossible."},{id:4,scenario:"A micro-finance dataset in Bankura contains 50,000 borrower loan histories with a 1.20% default rate. A junior analyst uses unstratified random splitting.",question:"What sampling hazard threatens the test partition when unstratified splitting is applied to heavily imbalanced data?",options:[{label:"A",text:"The test set variance will become strictly negative."},{label:"B",text:"Class Imbalance Skew: Finite-sample random variation can severely alter the test fold's default prevalence, potentially resulting in zero defaults or an artificial 3x surge."},{label:"C",text:"Random splits automatically balance class distributions using SMOTE."},{label:"D",text:"All borrower names will be scrambled into random integers."}],correct:"B",explanation:"With extreme imbalance (1.2% defaults), uniform random shuffling easily results in test folds with zero minority instances or extreme distribution drift. Stratified splitting guarantees that both train and test partitions mirror the true population prevalence exactly."},{id:5,scenario:"An engineer normalizes features using `scaler.fit_transform(X)` on the full dataset BEFORE calling `train_test_split(X, y)`.",question:"What methodological violation occurred, and what is the proper engineering sequence?",options:[{label:"A",text:"The scaler used the wrong optimization algorithm."},{label:"B",text:"Data Leakage: The test set's mean and standard deviation leaked into the scaler; the proper fix is to split FIRST, fit the scaler on X_train only, and then transform both X_train and X_test."},{label:"C",text:"The target variable should have been scaled instead of the features."},{label:"D",text:"The test set should have been scaled using standard normal quantiles."}],correct:"B",explanation:"Fitting any preprocessing transformer (imputer, scaler, encoder, feature selector) on the combined dataset leaks test set distribution parameters into training. Transformers must be fitted strictly on X_train only (`scaler.fit(X_train)`)."}],$=()=>{o.useId();const[S,w]=o.useState("theory"),[y,I]=o.useState("confidence"),[T,E]=o.useState(500),[v,C]=o.useState(80),[x,R]=o.useState(85),c=o.useMemo(()=>{const t=T,a=v/100,r=Math.round(t*a),i=t-r,m=x/100,u=i>0?Math.sqrt(m*(1-m)/i):0,b=1.96*u,s=Math.max(0,(m-b)*100).toFixed(1),j=Math.min(100,(m+b)*100).toFixed(1),z=Math.max(2,Math.round(350/Math.sqrt(r)));return{nTrain:r,nTest:i,sePct:(u*100).toFixed(2),marginPct:(b*100).toFixed(2),ciLower:s,ciUpper:j,estimationBiasScore:z}},[T,v,x]),[g,L]=o.useState("random"),p=o.useMemo(()=>{let t=[],a=[];g==="random"?(a=d.filter((s,j)=>[1,5,8,12].includes(j)),t=d.filter(s=>!a.includes(s))):g==="stratified"?(a=[d[0],d[12],d[4],d[8]],t=d.filter(s=>!a.includes(s))):g==="temporal"?(t=d.slice(0,12),a=d.slice(12)):g==="group"&&(a=d.filter(s=>s.patient.includes("Debangshu")),t=d.filter(s=>!s.patient.includes("Debangshu")));const r=(t.filter(s=>s.arrhythmia===1).length/t.length*100).toFixed(1),i=(a.filter(s=>s.arrhythmia===1).length/a.length*100).toFixed(1),m=new Set(t.map(s=>s.patient)),b=[...new Set(a.map(s=>s.patient))].filter(s=>m.has(s));return{train:t,test:a,trainRate:r,testRate:i,leakedPatients:b,hasLeakage:b.length>0}},[g]),[l,M]=o.useState("proper"),[f,A]=o.useState({}),[h,k]=o.useState(!1),O=(t,a)=>{h||A(r=>({...r,[t]:a}))},D=()=>{k(!0)},_=o.useMemo(()=>h?N.reduce((t,a)=>t+(f[a.id]===a.correct?1:0),0):0,[h,f]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{id:"hero",className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"Module 3: Feature Selection & Train-Test Dynamics"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:"Topic 5 of 16"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"MAKAUT BCAC701B Masterclass"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Train-Test Split"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed",children:"Deconstruct the statistical mechanics of out-of-sample generalization. Master Empirical Risk Minimization, Wald confidence intervals, split ratio bias-variance trade-offs, and critical splitting topologies: Random, Stratified, Temporal Forward Chaining, and Group-Aware partitioning."}),e.jsx("div",{className:"pt-2 flex flex-wrap gap-2 text-xs",children:[{id:"novice",label:"Novice Masterclass"},{id:"studio",label:"Interactive Studio"},{id:"math",label:"Math Formulations"},{id:"casestudies",label:"Regional Case Studies"},{id:"quiz",label:"Diagnostic Quiz"},{id:"pitfalls",label:"Production Pitfalls"},{id:"loaders",label:"Python Lab & Notes"},{id:"faq",label:"MAKAUT Viva FAQ"}].map(t=>e.jsx("a",{href:`#${t.id}`,className:"px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600/60 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-medium",children:t.label},t.id))})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Foundational Intuition"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Novice Masterclass: Why We Split Data"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Three real-world mental models explaining the holdout paradigm, data leakage, and why training score is an illusion."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-indigo-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"📝"}),e.jsx("h4",{className:"text-base font-bold text-indigo-300",children:"1. The Madhyamik Board Examination"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Studying for school board exams in West Bengal:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Textbook Exercises (Train):"})," You solve all problems at home. You can memorize answers word-for-word."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Pre-Board Mock Test (Validation):"})," Teacher tests you on unseen problems to tune your study plan."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Final Board Exam (Test):"})," Locked in a sealed vault. If you peek at it beforehand, your high score is fraudulent (Data Leakage)!"]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-cyan-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🍲"}),e.jsx("h4",{className:"text-base font-bold text-cyan-300",children:"2. The Barrackpore Biryani Tasting Spoon"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Checking flavor before serving a wedding feast:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Stratified Spoonful:"})," You stir the Handi so your spoon gets rice, potato, and mutton in true proportions."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Unstratified Mistake:"})," Tasting only the plain yellow rice at the very top. You declare the spice perfect, but the mutton at the bottom is scorched!"]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-emerald-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🔍"}),e.jsx("h4",{className:"text-base font-bold text-emerald-300",children:"3. The Lalbazar Fingerprint Vault"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Evaluating biometric crime recognition algorithms:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Group Leakage Trap:"})," Putting Suspect A's left thumb in Train and their right thumb in Test. The AI matches the person's skin ridges, not crime features!"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Group-Aware Split:"})," All prints for Suspect A must reside entirely in Train OR entirely in Test."]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"Splitting Topologies Comparison Matrix"}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-300 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 font-semibold",children:"Topology"}),e.jsx("th",{className:"p-3 font-semibold",children:"Mechanism"}),e.jsx("th",{className:"p-3 font-semibold",children:"Mathematical Guarantee"}),e.jsx("th",{className:"p-3 font-semibold",children:"Primary Vulnerability"}),e.jsx("th",{className:"p-3 font-semibold",children:"Mandatory Usage Context"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-400",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-emerald-300",children:"Random Shuffle Split"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Uniform pseudo-random index permutation"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"I.I.D. sample assumption"}),e.jsx("td",{className:"p-3 text-rose-400",children:"Class collapse; time leakage; group identity contamination"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Standard balanced cross-sectional tabular data"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-indigo-300",children:"Stratified Split"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Partitioned within each distinct class label"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"P(Y=c|Train) = P(Y=c|Test)"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Requires discrete target labels; unsuited for regression"}),e.jsx("td",{className:"p-3 text-indigo-300 font-semibold",children:"Imbalanced classification (fraud, cancer, churn)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-cyan-300",children:"Temporal Forward Split"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Strict chronological split: t_train < t_test"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"Zero lookahead time leakage"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Model estimation bias if historical regime changes"}),e.jsx("td",{className:"p-3 text-cyan-300 font-semibold",children:"Time-series, stock market, energy load forecasting"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-bold text-purple-300",children:"Group-Aware Split"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Entities (patients/users) partitioned exclusively"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"G_train ∩ G_test = ∅"}),e.jsx("td",{className:"p-3 text-amber-300",children:"Unequal fold sizes if entity cluster sizes vary widely"}),e.jsx("td",{className:"p-3 text-purple-300 font-semibold",children:"Medical ECG/EEG, audio speech, multi-visit customers"})]})]})]})})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-3",children:[e.jsxs("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Academic Jargon Buster"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Empirical Risk Minimization:"}),"Minimizing the average loss over the observed training samples: ","R̂_S(h) = (1/N) ∑ L(h(x_i), y_i)","."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Wald Confidence Interval:"}),"The statistical error margin around test accuracy: ","p̂ ± 1.96 √(p̂(1-p̂)/N_test)","."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Data Snooping:"}),"Repeatedly tweaking model hyperparameters based on the test set, destroying holdout independence."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Covariate Shift:"}),"When the input distribution P(X) shifts between the test set and production environment over time."]})]})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-ping"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Interactive Engineering Studio"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Generalization & Splitting Topology Workbench"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"confidence",label:"Mode 1: Split Ratio & Confidence",badge:"Wald Error Bounds"},{id:"topology",label:"Mode 2: Splitting Topology Arena",badge:"Leakage Prevention"},{id:"vault",label:"Mode 3: The Test Vault Simulator",badge:"Data Snooping Trap"}].map(t=>e.jsxs("button",{onClick:()=>I(t.id),className:n("px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border flex flex-col text-left cursor-pointer",y===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:n("text-[10px] font-normal",y===t.id?"text-indigo-200":"text-slate-500"),children:t.badge})]},t.id))})]}),y==="confidence"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Statistical Uncertainty & Test Set Size Simulator"}),e.jsx("p",{className:"text-slate-400",children:"Adjust dataset size N and split ratio. Notice how small test sets yield massive ±12% error margins. A reported 85% test accuracy could easily be 73% or 97% in reality!"})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Dataset Total Size (N):"}),e.jsxs("span",{className:"font-mono text-cyan-400 font-bold",children:[T," samples"]})]}),e.jsx("input",{type:"range",min:"50",max:"5000",step:"50",value:T,onChange:t=>E(Number(t.target.value)),className:"w-full accent-cyan-500"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"More data shrinks estimation variance"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Train Split Ratio:"}),e.jsxs("span",{className:"font-mono text-indigo-400 font-bold",children:[v,"% Train / ",100-v,"% Test"]})]}),e.jsx("input",{type:"range",min:"50",max:"95",step:"5",value:v,onChange:t=>C(Number(t.target.value)),className:"w-full accent-indigo-500"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Standard: 80/20 or 75/25"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Observed Test Accuracy:"}),e.jsxs("span",{className:"font-mono text-emerald-400 font-bold",children:[x,"%"]})]}),e.jsx("input",{type:"range",min:"50",max:"99",step:"1",value:x,onChange:t=>R(Number(t.target.value)),className:"w-full accent-emerald-500"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Point accuracy on test fold"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Partition Sizes"}),e.jsxs("span",{className:"text-xl font-bold font-mono text-white",children:[c.nTrain," ",e.jsx("span",{className:"text-xs text-slate-500",children:"tr"})," / ",c.nTest," ",e.jsx("span",{className:"text-xs text-slate-500",children:"te"})]}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Samples in partitions"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Standard Error (SE)"}),e.jsxs("span",{className:"text-2xl font-bold font-mono text-amber-400",children:[c.sePct,"%"]}),e.jsx("span",{className:"text-[10px] text-amber-300/80 block",children:"√(p(1-p)/N_test)"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"95% Error Margin"}),e.jsxs("span",{className:"text-2xl font-bold font-mono text-rose-400",children:["±",c.marginPct,"%"]}),e.jsx("span",{className:"text-[10px] text-rose-300/80 block",children:"1.96 × SE"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"True Accuracy Band"}),e.jsxs("span",{className:"text-lg font-bold font-mono text-cyan-400",children:["[",c.ciLower,"%, ",c.ciUpper,"%]"]}),e.jsx("span",{className:"text-[10px] text-cyan-300/80 block",children:"95% Wald CI"})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs",children:[e.jsxs("span",{className:"font-bold text-white uppercase tracking-wider",children:["Test Metric Confidence Band (N_test = ",c.nTest,")"]}),e.jsxs("span",{className:"font-mono text-cyan-400 text-xs",children:["Observed: ",x,"% ± ",c.marginPct,"%"]})]}),e.jsxs("div",{className:"h-10 w-full bg-slate-900 rounded-xl relative flex items-center px-4 border border-slate-800 overflow-hidden",children:[e.jsx("div",{style:{left:`${Math.max(0,Number(c.ciLower))}%`,width:`${Math.min(100,Number(c.ciUpper)-Number(c.ciLower))}%`},className:"absolute h-6 bg-indigo-500/30 border-y border-indigo-400 rounded-md"}),e.jsx("div",{style:{left:`${x}%`},className:"absolute w-1.5 h-8 bg-cyan-400 shadow-md shadow-cyan-400/50 -ml-0.5 rounded-full z-10"})]}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsx("span",{children:"0% Accuracy"}),e.jsx("span",{children:"50% Baseline"}),e.jsx("span",{children:"100% Perfect"})]})]})]}),y==="topology"&&e.jsxs("div",{className:"space-y-6",children:[e.jsx("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"Splitting Topology Arena (Jadavpur Clinical ECG Cohort)"}),e.jsx("p",{className:"text-slate-400",children:"Switch between splitting strategies below. Observe how naive Random splitting leaks patient identity into both folds, while Group-Aware splitting enforces total zero-leakage independence."})]})}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs",children:[{id:"random",label:"1. Random Shuffle",badge:"Identity Leakage Hazard"},{id:"stratified",label:"2. Stratified Split",badge:"Class Balance Preserved"},{id:"temporal",label:"3. Temporal Split",badge:"Chronological Order"},{id:"group",label:"4. Group-Aware Split",badge:"Zero Patient Leakage"}].map(t=>e.jsxs("button",{onClick:()=>L(t.id),className:n("p-3 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between",g===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("span",{className:"font-bold block mb-1",children:t.label}),e.jsx("span",{className:n("text-[10px]",g===t.id?"text-indigo-200":"text-slate-500"),children:t.badge})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:n("p-4 rounded-2xl border flex items-start gap-3",p.hasLeakage?"bg-rose-950/30 border-rose-800/40 text-rose-300":"bg-emerald-950/30 border-emerald-800/40 text-emerald-300"),children:[e.jsx("span",{className:"text-lg",children:p.hasLeakage?"🚨":"🛡️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block text-slate-200",children:"Patient Identity Leakage:"}),p.hasLeakage?`LEAKED: ${p.leakedPatients.join(", ")} exist in BOTH Train and Test!`:"ZERO LEAKAGE: Patient cohorts are strictly disjoint across folds."]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Arrhythmia Rate Balance"}),e.jsxs("span",{className:"font-mono text-sm block",children:["Train: ",e.jsxs("strong",{className:"text-cyan-400",children:[p.trainRate,"%"]})," | Test: ",e.jsxs("strong",{className:"text-indigo-400",children:[p.testRate,"%"]})]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"True population rate: 50.0%"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Samples in Folds"}),e.jsxs("span",{className:"font-mono text-sm block",children:["Train: ",e.jsx("strong",{className:"text-white",children:p.train.length})," | Test: ",e.jsx("strong",{className:"text-white",children:p.test.length})]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Total samples: 16 beats"})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-xs font-bold text-white uppercase tracking-wider",children:"Clinical Beats Partition Table"}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2.5",children:d.map(t=>{const a=p.test.some(i=>i.id===t.id),r=p.leakedPatients.includes(t.patient);return e.jsxs("div",{className:n("p-2.5 rounded-xl border text-[11px] space-y-1 transition-all",a?"bg-indigo-950/60 border-indigo-500/50 text-indigo-200":"bg-slate-900/60 border-slate-800 text-slate-300",r&&a&&"ring-1 ring-rose-500"),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsx("span",{className:"font-bold text-[10px] font-mono",children:t.patient.split(" ")[0]}),e.jsx("span",{className:n("px-1.5 py-0.2 rounded text-[9px] font-bold font-mono",a?"bg-indigo-600 text-white":"bg-slate-800 text-slate-400"),children:a?"TEST":"TRAIN"})]}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-400",children:[e.jsx("span",{children:t.beat}),e.jsx("span",{className:t.arrhythmia?"text-rose-400 font-bold":"text-emerald-400",children:t.arrhythmia?"Arrhythmia":"Normal"})]})]},t.id)})})]})]}),y==="vault"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-1 text-xs",children:[e.jsx("span",{className:"font-bold text-indigo-300 text-sm",children:"The Data Snooping Trap: Why Test Sets Must Be Locked in a Vault"}),e.jsx("p",{className:"text-slate-400",children:"Observe what happens when an engineer tunes hyperparameters directly on the test set. The reported offline test accuracy rises to 96%, but real-world production accuracy collapses to 78% due to test set overfitting!"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs",children:[{id:"proper",title:"1. Proper 3-Way Partition",subtitle:"Train / Val / Locked Test"},{id:"pre_scaling",title:"2. Pre-Split Scaler Leakage",subtitle:"Scaler fit on full data"},{id:"test_snooping",title:"3. Direct Test Set Tuning",subtitle:"Hyperparameters tuned on Test"}].map(t=>e.jsxs("button",{onClick:()=>M(t.id),className:n("p-4 rounded-2xl border text-left transition-all cursor-pointer flex flex-col justify-between",l===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("span",{className:"font-bold text-xs block mb-1",children:t.title}),e.jsx("span",{className:n("text-[10px]",l===t.id?"text-indigo-200":"text-slate-500"),children:t.subtitle})]},t.id))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Reported Test Accuracy"}),e.jsx("span",{className:"text-2xl font-bold font-mono text-cyan-400",children:l==="proper"?"82.5%":l==="pre_scaling"?"89.4%":"96.2%"}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Offline test score"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"True Production Accuracy"}),e.jsx("span",{className:"text-2xl font-bold font-mono text-emerald-400",children:l==="proper"?"81.8%":l==="pre_scaling"?"81.0%":"78.4%"}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Live customer deployment"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1 text-xs",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Generalization Gap"}),e.jsx("span",{className:n("text-2xl font-bold font-mono",l==="proper"?"text-emerald-400":"text-rose-400"),children:l==="proper"?"0.7% (Honest)":l==="pre_scaling"?"+8.4% (Leakage)":"+17.8% (CRITICAL FAILURE)"}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Reported vs Real divergence"})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs space-y-2",children:[e.jsx("h4",{className:"font-bold text-white uppercase tracking-wider text-[11px]",children:"Architectural Diagnosis & Remediation:"}),l==="proper"&&e.jsxs("p",{className:"text-emerald-300 leading-relaxed",children:["✓ ",e.jsx("strong",{children:"Golden Standard:"})," Hyperparameters were tuned on the validation set. The test set was locked in the vault until final evaluation. Reported test accuracy (82.5%) perfectly matches production reality (81.8%)."]}),l==="pre_scaling"&&e.jsxs("p",{className:"text-amber-300 leading-relaxed",children:["⚠️ ",e.jsx("strong",{children:"Preprocessing Leakage:"})," The scaler was fit on the full dataset before splitting. The test set mean and standard deviation leaked into training, producing a false +8.4% optimistic test boost that vanishes in production."]}),l==="test_snooping"&&e.jsxs("p",{className:"text-rose-300 leading-relaxed",children:["🚫 ",e.jsx("strong",{children:"Severe Data Snooping:"})," The engineer tuned tree depth directly against the test set. The model memorized the test set noise, yielding a fake 96.2% offline score that plummeted to 78.4% when real users touched it!"]})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Mathematical Rigor"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Formal Equations & Generalization Bounds"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Mathematical definitions for empirical risk, Vapnik-Chervonenkis generalization bounds, and Wald confidence intervals."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider",children:"1. Empirical Risk & VC Generalization Bounds"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-emerald-400 font-bold block",children:"True Risk vs Empirical Risk:"}),e.jsx("span",{children:"R(h) = E_{(x,y)~D} [ L(h(x), y) ]"}),e.jsx("span",{children:"R̂_S(h) = (1 / N) ∑_{i=1}^N L(h(x_i), y_i)"}),e.jsx("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:"Empirical Risk Minimization (ERM) minimizes training loss over finite sample S."})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-indigo-400 font-bold block",children:"Vapnik-Chervonenkis (VC) Generalization Bound:"}),e.jsx("span",{children:"R(h) ≤ R̂_S(h) + √[ (d_VC (ln(2N/d_VC) + 1) - ln(δ/4)) / N ]"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Guarantees that as ","N → ∞",", empirical error converges uniformly to true generalization error."]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-cyan-300 uppercase tracking-wider",children:"2. Test Uncertainty & Wald Confidence Intervals"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-cyan-400 font-bold block",children:"Standard Error of Test Accuracy:"}),e.jsx("span",{children:"Var(p̂) = p * (1 - p) / N_test"}),e.jsx("span",{children:"SE = √[ p̂ * (1 - p̂) / N_test ]"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Uncertainty in test score scales as ","1 / √N_test","."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-purple-400 font-bold block",children:"Wald 95% Confidence Interval:"}),e.jsx("span",{children:"CI_{95%} = p̂ ± 1.96 * √[ p̂ * (1 - p̂) / N_test ]"}),e.jsx("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:"Defines the statistical margin of error for holdout evaluation benchmarks."})]})]})]})]})]}),e.jsxs("section",{id:"casestudies",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"Regional Engineering Applications"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Four West Bengal Industrial Case Studies"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Real enterprise case studies demonstrating train-test splitting topologies and leakage prevention across West Bengal."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-indigo-300 uppercase tracking-wider",children:"Case 1: AMRI Salt Lake & Jadavpur ECG Hub"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Clinical Healthcare"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Arrhythmia detection using 5,000 ECG beats across 100 cardiology patients."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Random Split Failure:"})," Leaked beats from same patient into both folds (false 99.4% accuracy)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Group-Aware Fix:"})," GroupShuffleSplit by Patient ID ensured zero patient overlap."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-cyan-400 font-bold",children:"Clinical Generalization:"})," Model achieved an honest, FDA-compliant 82.5% on unseen hospital patients."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-cyan-300 uppercase tracking-wider",children:"Case 2: Substation Grid Time-Series (Barrackpore)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Power Distribution"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," 15-minute interval distribution substation MW load forecasting over 365 days."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Lookahead Leakage:"})," Random shuffling used July 15 evening to predict July 15 morning load."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Temporal Forward Slicing:"})," Train on Jan-Sept (past), Test strictly on Oct-Dec (future)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-purple-400 font-bold",children:"Operational RMSE:"})," Realistic RMSE of 1.84 MW simulated live production accurately."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-300 uppercase tracking-wider",children:"Case 3: Rural Credit Default Prediction (Bankura)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"Fintech Micro-Lending"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Loan repayment default risk modeling across 50,000 self-help group borrowers."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Severe Imbalance:"})," True population default rate is only 1.20% (600 defaults in 50,000)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Random Split Hazard:"})," Unstratified test fold received only 4 defaults (0.04%), breaking recall."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Stratified Solution:"})," StratifiedShuffleSplit enforced exact 1.20% default rate in both partitions."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-300 uppercase tracking-wider",children:"Case 4: Metro Pass Churn Forecasting (Green Line)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800",children:"Transit Informatics"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Monthly commuter pass retention modeling across 100,000 smartcard accounts."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-purple-400 font-bold",children:"Out-of-Time Window:"})," Months 1-4 history trained to predict Month 5; tested on Month 6."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Smartcard Grouping:"})," Group-aware split by Card UID prevented individual user memorization."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Business Retention:"})," Targeted SMS offers increased commuter renewal by 18.5%."]})]})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/30",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Diagnostic Verification"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Topic 5 Diagnostic Assessment Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Answer all 5 multi-stage scenario questions to evaluate your engineering intuition."})]}),h&&e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-indigo-500/40",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-bold font-mono text-cyan-300",children:[_," / ",N.length]}),e.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300",children:_===5?"Distinction":_>=3?"Pass":"Review Needed"})]})]}),e.jsx("div",{className:"space-y-5",children:N.map(t=>{f[t.id];const a=f[t.id],r=a===t.correct;return e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 rounded-lg bg-indigo-900/60 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono",children:t.id}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-xs text-slate-400 italic",children:t.scenario}),e.jsx("p",{className:"text-sm font-semibold text-slate-200 leading-relaxed",children:t.question})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5 pl-9",children:t.options.map(i=>{const m=a===i.label;let u="bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700";return h?i.label===t.correct?u="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium":m&&!r&&(u="bg-rose-950/60 border-rose-500 text-rose-200"):m&&(u="bg-indigo-950/70 border-indigo-500 text-indigo-200 font-medium"),e.jsxs("button",{disabled:h,onClick:()=>O(t.id,i.label),className:n("w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer",u),children:[e.jsxs("span",{className:"font-mono font-bold shrink-0",children:[i.label,"."]}),e.jsx("span",{children:i.text})]},i.label)})}),h&&e.jsx("div",{className:"pl-9 pt-2",children:e.jsxs("div",{className:n("p-3 rounded-xl text-xs leading-relaxed border",r?"bg-emerald-950/30 border-emerald-800/40 text-emerald-300":"bg-rose-950/30 border-rose-800/40 text-rose-300"),children:[e.jsx("div",{className:"font-bold mb-1",children:r?"✓ Correct Analysis":`✗ Incorrect (Correct Answer: ${t.correct})`}),e.jsx("div",{className:"text-slate-400",children:t.explanation})]})})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-2",children:h?e.jsx("button",{onClick:()=>{A({}),k(!1)},className:"px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors",children:"Reset Assessment"}):e.jsx("button",{onClick:D,disabled:Object.keys(f).length<N.length,className:n("px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer",Object.keys(f).length===N.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:"Submit Diagnostic Assessment"})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-rose-400",children:"Production Hazards"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Engineering Anti-Patterns"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Six architectural traps that compromise the validity of train-test splits in production deployments."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🗂️"})," 1. Pre-Split Preprocessing Leakage"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Fitting StandardScaler, SimpleImputer, or target encoders on the entire dataset before splitting. Leaks test distribution parameters into training."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Fit transformers strictly on X_train inside a Pipeline."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"⏳"})," 2. Random Shuffling on Time-Series"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Shuffling time series datasets randomly. The model trains on future timestamps to predict the past, manufacturing fake 99% accuracy that collapses in live deployment."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Enforce strict chronological forward splitting."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🆔"})," 3. Repeated Measurement Identity Leakage"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Randomly splitting datasets with multiple rows per patient, customer, or IoT device. The model memorizes individual entity baselines instead of generalizable patterns."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Deploy GroupShuffleSplit by entity group ID."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"📉"})," 4. Microscopic Test Sets (N_test < 50)"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Testing models on 25 samples. The 95% confidence interval margin of error is ±14%, making fine-grained model comparisons completely meaningless noise."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Maintain at least 150-300 test samples or use K-fold CV."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🕵️"})," 5. Test Set Snooping & Tuning"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Iteratively tweaking hyperparameters (e.g. tree depth) until test set score improves. The test set ceases to be an independent holdout."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Lock test set in a vault; tune only on validation set."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"⚖️"})," 6. Unstratified Imbalance Collapse"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Failing to stratify datasets with rare classes (< 2% prevalence). Random sampling can produce test sets with zero minority positive instances."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Always enforce `stratify=y` on classification datasets."})]})]})]}),e.jsxs("section",{id:"loaders",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Source Code & Academic Documentation"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Laboratory Implementation & Complete Study Notes"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-xl border border-slate-800",children:[e.jsx("button",{onClick:()=>w("theory"),className:n("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",S==="theory"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Study Notes (topic5_note.txt)"}),e.jsx("button",{onClick:()=>w("code"),className:n("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",S==="code"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Python Lab (train_test_split_lab.py)"})]})]}),S==="code"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"train_test_split_lab.py"})]}),e.jsx("span",{children:"Pure Python 3 • Zero Dependencies • Exit Code 0"})]}),e.jsx(P,{code:q,fileName:"train_test_split_lab.py",title:"Train-Test Split Laboratory Benchmark"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"topic5_note.txt"})]}),e.jsx("span",{children:"280 Lines of Comprehensive Academic Notes"})]}),e.jsx(F,{content:W,fileName:"topic5_note.txt",title:"Topic 5: Academic Study Notes (BCAC701B)"})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8",children:[e.jsx(B,{title:"Topic 5: MAKAUT Master Viva & Technical Interview Questions",subtitle:"30 Graded Analytical Questions with Comprehensive Theoretical Rationales",questions:U}),e.jsx(G,{})]})]})};export{$ as default};
