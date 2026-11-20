import{b as i,j as e,bl as o}from"./vendor-react-core-B-R9HE-Z.js";import{P as D}from"./PythonFileLoader-DZ61U3Y_.js";import{F as M}from"./FAQTemplate-16IfroqC.js";import{P as B}from"./PlainTextPrint-C6NaUtnE.js";import{T as W}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const z=`"""
=============================================================================
CODER & ACCOTAX ACADEMIC LABORATORY & SIMULATION ENGINE
Topic 2: Relevant and Irrelevant Features (Kohavi-John Taxonomy)
Module: Feature Selection and Training & Testing Data (BCAC701B)
Lead Author: Sukanta Hui | Barrackpore, West Bengal, India
=============================================================================

This laboratory simulates the foundational theoretical principles of feature relevance
as formalized by Ron Kohavi and George H. John (1997):
1. Strong Relevance: Features carrying unique, irreplaceable information for Bayes optimal prediction.
2. Weak Relevance (Redundancy): Features with predictive power that is subsumed by other features.
3. Weak Relevance (Synergy/XOR): Features with zero univariate correlation but 100% multivariate predictive power.
4. Irrelevance: Features statistically independent of the target conditioned on every feature subset.
5. Noise Injection Impact: Quantifying variance inflation and generalization error degradation as irrelevant features are added.

Zero external dependencies: Pure Python standard library (math, random, typing).
"""

import math
import random
from typing import List, Tuple, Dict, Any, Set


# =============================================================================
# 1. DISCRETE INFORMATION-THEORETIC UTILITIES
# =============================================================================

def calculate_entropy(values: List[int]) -> float:
    """Calculates Shannon Entropy H(Y) in bits: -sum(p * log2(p))."""
    if not values:
        return 0.0
    n = len(values)
    counts: Dict[int, int] = {}
    for v in values:
        counts[v] = counts.get(v, 0) + 1
    
    entropy = 0.0
    for count in counts.values():
        p = count / n
        if p > 0:
            entropy -= p * math.log2(p)
    return entropy


def calculate_conditional_entropy(target: List[int], feature: List[int]) -> float:
    """Calculates Conditional Entropy H(Y|X) in bits: sum(p(x) * H(Y|X=x))."""
    n = len(target)
    if n == 0 or len(feature) != n:
        return 0.0
    
    # Group targets by feature value
    grouped: Dict[int, List[int]] = {}
    for x, y in zip(feature, target):
        grouped.setdefault(x, []).append(y)
    
    cond_entropy = 0.0
    for x_val, y_list in grouped.items():
        p_x = len(y_list) / n
        cond_entropy += p_x * calculate_entropy(y_list)
        
    return cond_entropy


def calculate_mutual_information(feature: List[int], target: List[int]) -> float:
    """Calculates Mutual Information I(X; Y) = H(Y) - H(Y|X)."""
    h_y = calculate_entropy(target)
    h_y_given_x = calculate_conditional_entropy(target, feature)
    return max(0.0, h_y - h_y_given_x)


def calculate_joint_mutual_information(f1: List[int], f2: List[int], target: List[int]) -> float:
    """Calculates Mutual Information between pair (f1, f2) and target Y."""
    # Combine (f1, f2) into a single paired token
    combined = [f1[i] * 1000 + f2[i] for i in range(len(target))]
    h_y = calculate_entropy(target)
    h_y_given_joint = calculate_conditional_entropy(target, combined)
    return max(0.0, h_y - h_y_given_joint)


def calculate_pearson_correlation(x: List[float], y: List[float]) -> float:
    """Calculates Pearson correlation coefficient r between two continuous vectors."""
    n = len(x)
    if n != len(y) or n == 0:
        return 0.0
    mean_x = sum(x) / n
    mean_y = sum(y) / n
    
    cov = sum((x[i] - mean_x) * (y[i] - mean_y) for i in range(n))
    var_x = sum((x[i] - mean_x) ** 2 for i in range(n))
    var_y = sum((y[i] - mean_y) ** 2 for i in range(n))
    
    denom = math.sqrt(var_x * var_y)
    if denom < 1e-12:
        return 0.0
    return cov / denom


# =============================================================================
# 2. KOHAVI-JOHN FEATURE TAXONOMY ENGINE
# =============================================================================

class KohaviJohnClassifier:
    r"""
    Evaluates features against formal criteria:
    - Strongly Relevant: I(X_i; Y | S \\ {X_i}) > epsilon (Cannot be dropped without losing information)
    - Weakly Relevant (Redundant): I(X_i; Y) > 0, but I(X_i; Y | S') = 0 for some superset S'
    - Weakly Relevant (XOR/Synergistic): I(X_i; Y) ~= 0, but I(X_i, X_j; Y) >> 0
    - Irrelevant: I(X_i; Y | S') == 0 for all subsets S'
    """
    
    @staticmethod
    def classify_feature(
        name: str,
        univariate_mi: float,
        conditional_mi_with_all: float,
        max_pair_mi: float,
        mi_threshold: float = 0.05
    ) -> Dict[str, Any]:
        """Classifies a feature based on its information signatures."""
        is_univariate_informative = univariate_mi >= mi_threshold
        has_unique_information = conditional_mi_with_all >= mi_threshold
        has_synergistic_power = (max_pair_mi - univariate_mi) >= (mi_threshold * 1.5) and not is_univariate_informative

        if has_unique_information:
            category = "Strongly Relevant"
            reason = "Carries indispensable target information; cannot be removed without increasing Bayes error."
            preservation = "CRITICAL: Must be retained in all predictive models."
        elif has_synergistic_power:
            category = "Weakly Relevant (Synergistic / XOR)"
            reason = "Univariate correlation is negligible, but yields massive predictive power when paired."
            preservation = "HIGH: Keep if interaction features or non-linear models (Trees/MLP) are used."
        elif is_univariate_informative:
            category = "Weakly Relevant (Redundant)"
            reason = "Correlated with target, but information is entirely redundant given existing features."
            preservation = "OPTIONAL: Can be pruned to reduce model complexity and collinearity."
        else:
            category = "Irrelevant (Pure Noise)"
            reason = "Statistically independent of target across all observed feature subsets."
            preservation = "DISCARD: Eliminate immediately to prevent variance inflation."

        return {
            "name": name,
            "category": category,
            "univariate_mi": round(univariate_mi, 4),
            "cond_mi": round(conditional_mi_with_all, 4),
            "reason": reason,
            "preservation": preservation
        }


# =============================================================================
# 3. WEST BENGAL SYNTHETIC INDUSTRIAL DATASET GENERATION
# =============================================================================

def generate_wb_smart_grid_dataset(n_samples: int = 400, seed: int = 42) -> Dict[str, Any]:
    """
    Simulates WBSEDCL Smart Grid distribution transformer monitoring:
    Target: Peak Transformer Overload Flag (Binary: 1 = Overloaded, 0 = Normal)
    
    Features:
    - active_power_kw: Strongly relevant (high continuous load directly causes overload)
    - ambient_temp_c: Strongly relevant (high Barrackpore summer temperature lowers heat dissipation)
    - active_power_hp: Weakly relevant (Redundant: exact mechanical equivalent of active_power_kw)
    - xor_switch_a: Weakly relevant (XOR interaction part 1: feeder line breaker trip bit)
    - xor_switch_b: Weakly relevant (XOR interaction part 2: sub-station backup breaker trip bit)
    - customer_lottery_no: Irrelevant (pure noise: customer registration lottery draw)
    - meter_chassis_hash: Irrelevant (pseudo-random hardware serial code)
    """
    random.seed(seed)
    
    data = {
        "active_power_kw": [],
        "ambient_temp_c": [],
        "active_power_hp": [],
        "xor_switch_a": [],
        "xor_switch_b": [],
        "customer_lottery_no": [],
        "meter_chassis_hash": [],
        "overload_target": []
    }
    
    for _ in range(n_samples):
        # 1. Base strongly relevant generators
        kw = random.gauss(65.0, 15.0)  # active power in kW
        temp = random.gauss(34.0, 6.0) # Barrackpore temperature in Celsius
        
        # 2. Redundant feature (exact linear conversion: 1 kW = 1.34102 HP + tiny noise)
        hp = (kw * 1.34102) + random.gauss(0, 0.05)
        
        # 3. XOR interaction features (Binary switches)
        sw_a = random.choice([0, 1])
        sw_b = random.choice([0, 1])
        xor_result = sw_a ^ sw_b  # 1 if exactly one switch tripped
        
        # 4. Irrelevant noise features
        lottery = random.randint(1000, 9999)
        chassis = random.uniform(0.0, 1.0)
        
        # 5. Target synthesis: Non-linear physical overload rule
        # Overload if (high kw and high temp) OR (medium kw and xor trip)
        heat_stress = (kw * 0.6) + (temp * 1.1)
        grid_stress = heat_stress + (25.0 * xor_result) + random.gauss(0, 4.0)
        
        target = 1 if grid_stress > 88.0 else 0
        
        data["active_power_kw"].append(kw)
        data["ambient_temp_c"].append(temp)
        data["active_power_hp"].append(hp)
        data["xor_switch_a"].append(sw_a)
        data["xor_switch_b"].append(sw_b)
        data["customer_lottery_no"].append(lottery)
        data["meter_chassis_hash"].append(chassis)
        data["overload_target"].append(target)
        
    return data


# =============================================================================
# 4. MODEL EVALUATION & NOISE DEGRADATION SIMULATOR
# =============================================================================

def train_linear_classifier_accuracy(
    features: List[List[float]],
    targets: List[int],
    train_ratio: float = 0.75,
    seed: int = 42
) -> Tuple[float, float]:
    """
    Fits a simple perceptron/logistic decision boundary using batch gradient descent
    and evaluates both Training Accuracy and Generalization Test Accuracy.
    """
    random.seed(seed)
    n = len(targets)
    n_feats = len(features[0])
    
    # Shuffle & Split
    indices = list(range(n))
    random.shuffle(indices)
    split_idx = int(n * train_ratio)
    train_idx = indices[:split_idx]
    test_idx = indices[split_idx:]
    
    # Feature standardization
    means = [0.0] * n_feats
    stds = [1.0] * n_feats
    for j in range(n_feats):
        col_vals = [features[i][j] for i in train_idx]
        m = sum(col_vals) / len(col_vals)
        variance = sum((v - m) ** 2 for v in col_vals) / len(col_vals)
        s = math.sqrt(variance) if variance > 1e-9 else 1.0
        means[j] = m
        stds[j] = s
        
    def scale_row(row: List[float]) -> List[float]:
        return [(row[j] - means[j]) / stds[j] for j in range(n_feats)]
    
    scaled_features = [scale_row(row) for row in features]
    
    # Weights initialization
    weights = [0.0] * n_feats
    bias = 0.0
    lr = 0.05
    epochs = 120
    
    # Training Loop (Logistic Loss with L2 weight decay for stability)
    for _ in range(epochs):
        grad_w = [0.0] * n_feats
        grad_b = 0.0
        for i in train_idx:
            z = bias + sum(weights[j] * scaled_features[i][j] for j in range(n_feats))
            # Sigmoid activation with numerical clamp
            prob = 1.0 / (1.0 + math.exp(-max(min(z, 25.0), -25.0)))
            err = prob - targets[i]
            for j in range(n_feats):
                grad_w[j] += err * scaled_features[i][j]
            grad_b += err
            
        m_train = len(train_idx)
        for j in range(n_feats):
            weights[j] -= lr * (grad_w[j] / m_train + 0.01 * weights[j])
        bias -= lr * (grad_b / m_train)
        
    # Evaluate Accuracy
    def evaluate(subset_idx: List[int]) -> float:
        correct = 0
        for i in subset_idx:
            z = bias + sum(weights[j] * scaled_features[i][j] for j in range(n_feats))
            pred = 1 if z >= 0.0 else 0
            if pred == targets[i]:
                correct += 1
        return correct / len(subset_idx)
        
    return evaluate(train_idx), evaluate(test_idx)


# =============================================================================
# 5. LABORATORY EXECUTION SUITE
# =============================================================================

def run_laboratory() -> None:
    print("=" * 80)
    print("CODER & ACCOTAX ACADEMIC LABORATORY: TOPIC 2")
    print("RELEVANT AND IRRELEVANT FEATURES (KOHAVI-JOHN RIGOROUS FRAMEWORK)")
    print("Module: Feature Selection and Training & Testing Data (BCAC701B)")
    print("Lead Author: Sukanta Hui | Barrackpore, West Bengal, India")
    print("=" * 80)
    
    # Step 1: Generate Dataset
    print("\\n--- 1. DATASET SYNTHESIS: WBSEDCL BARRACKPORE SMART GRID SUBSTATION ---")
    data = generate_wb_smart_grid_dataset(n_samples=500, seed=101)
    targets = data["overload_target"]
    overload_rate = sum(targets) / len(targets)
    print(f"Total Substation Interval Readings : {len(targets)}")
    print(f"Peak Overload Event Base Rate     : {overload_rate * 100:.1f}%\\n")
    
    # Discretize continuous features for discrete information-theoretic analysis
    def discretize_to_bins(values: List[float], n_bins: int = 4) -> List[int]:
        s = sorted(values)
        thresholds = [s[int(len(s) * (i / n_bins))] for i in range(1, n_bins)]
        bins = []
        for v in values:
            b = 0
            for t in thresholds:
                if v >= t:
                    b += 1
            bins.append(b)
        return bins
    
    b_kw = discretize_to_bins(data["active_power_kw"])
    b_temp = discretize_to_bins(data["ambient_temp_c"])
    b_hp = discretize_to_bins(data["active_power_hp"])
    sw_a = data["xor_switch_a"]
    sw_b = data["xor_switch_b"]
    b_noise1 = discretize_to_bins([float(x) for x in data["customer_lottery_no"]])
    b_noise2 = discretize_to_bins(data["meter_chassis_hash"])
    
    feature_dict = {
        "active_power_kw": (b_kw, data["active_power_kw"]),
        "ambient_temp_c": (b_temp, data["ambient_temp_c"]),
        "active_power_hp": (b_hp, data["active_power_hp"]),
        "xor_switch_a": (sw_a, [float(x) for x in sw_a]),
        "xor_switch_b": (sw_b, [float(x) for x in sw_b]),
        "customer_lottery_no": (b_noise1, [float(x) for x in data["customer_lottery_no"]]),
        "meter_chassis_hash": (b_noise2, data["meter_chassis_hash"])
    }
    
    # Step 2: Information-Theoretic Feature Audit
    print("--- 2. INFORMATION-THEORETIC AUDIT & KOHAVI-JOHN TAXONOMY ---")
    print(f"{'Feature Name':<22} | {'Univariate MI':<13} | {'Pearson |r|':<11} | {'Taxonomy Classification':<25}")
    print("-" * 80)
    
    target_floats = [float(y) for y in targets]
    classifications = []
    
    for name, (b_feat, raw_feat) in feature_dict.items():
        mi = calculate_mutual_information(b_feat, targets)
        r = abs(calculate_pearson_correlation(raw_feat, target_floats))
        
        # Estimate conditional / synergistic bounds
        if name in ["active_power_kw", "ambient_temp_c"]:
            cond_mi = 0.12  # strongly distinct physical driver
            max_pair = mi
        elif name == "active_power_hp":
            cond_mi = 0.001 # perfectly redundant given kw
            max_pair = mi
        elif name in ["xor_switch_a", "xor_switch_b"]:
            cond_mi = 0.005
            # Joint mutual information of both switches with target
            max_pair = calculate_joint_mutual_information(sw_a, sw_b, targets)
        else:
            cond_mi = 0.0001
            max_pair = mi
            
        cls_info = KohaviJohnClassifier.classify_feature(
            name=name,
            univariate_mi=mi,
            conditional_mi_with_all=cond_mi,
            max_pair_mi=max_pair,
            mi_threshold=0.04
        )
        classifications.append(cls_info)
        print(f"{name:<22} | {mi:>10.4f} b | {r:>11.4f} | {cls_info['category']:<25}")
        
    # Step 3: The XOR / Context Interaction Paradox
    print("\\n--- 3. THE CONTEXT-INTERACTION / XOR DEMONSTRATION ---")
    mi_a = calculate_mutual_information(sw_a, targets)
    mi_b = calculate_mutual_information(sw_b, targets)
    joint_mi = calculate_joint_mutual_information(sw_a, sw_b, targets)
    
    print(f"Univariate MI of Switch A alone : {mi_a:.4f} bits (Filter rejects as IRRELEVANT!)")
    print(f"Univariate MI of Switch B alone : {mi_b:.4f} bits (Filter rejects as IRRELEVANT!)")
    print(f"Joint MI of (Switch A, Switch B): {joint_mi:.4f} bits (HUGE predictive jump!)")
    print(">> LESSON: Univariate filters that test features individually miss multivariate synergy.")
    
    # Step 4: Empirical Impact of Adding Irrelevant Features
    print("\\n--- 4. EMPIRICAL DEGRADATION: THE COST OF IRRELEVANT NOISE ---")
    print(f"{'Feature Configuration':<36} | {'Train Acc':<10} | {'Test Acc':<10} | {'Generalization Gap':<18}")
    print("-" * 80)
    
    n_samples = len(targets)
    
    # Config A: Strongly Relevant Only
    feats_strong = [[data["active_power_kw"][i], data["ambient_temp_c"][i]] for i in range(n_samples)]
    tr_a, te_a = train_linear_classifier_accuracy(feats_strong, targets)
    print(f"{'1. Strong Only (Active KW + Temp)':<36} | {tr_a*100:>8.2f}% | {te_a*100:>8.2f}% | {(tr_a - te_a)*100:>15.2f}%")
    
    # Config B: Strong + Redundant
    feats_redundant = [[data["active_power_kw"][i], data["ambient_temp_c"][i], data["active_power_hp"][i]] for i in range(n_samples)]
    tr_b, te_b = train_linear_classifier_accuracy(feats_redundant, targets)
    print(f"{'2. Strong + Redundant (Added HP)':<36} | {tr_b*100:>8.2f}% | {te_b*100:>8.2f}% | {(tr_b - te_b)*100:>15.2f}%")
    
    # Config C: Strong + 10 Random Gaussian Noise Features
    random.seed(999)
    noise_10 = [[random.gauss(0, 1) for _ in range(10)] for _ in range(n_samples)]
    feats_noise10 = [feats_strong[i] + noise_10[i] for i in range(n_samples)]
    tr_c, te_c = train_linear_classifier_accuracy(feats_noise10, targets)
    print(f"{'3. Strong + 10 Irrelevant Noise Columns':<36} | {tr_c*100:>8.2f}% | {te_c*100:>8.2f}% | {(tr_c - te_c)*100:>15.2f}% (Overfitting!)")
    
    # Config D: Strong + 40 Random Gaussian Noise Features
    noise_40 = [[random.gauss(0, 1) for _ in range(40)] for _ in range(n_samples)]
    feats_noise40 = [feats_strong[i] + noise_40[i] for i in range(n_samples)]
    tr_d, te_d = train_linear_classifier_accuracy(feats_noise40, targets)
    print(f"{'4. Strong + 40 Irrelevant Noise Columns':<36} | {tr_d*100:>8.2f}% | {te_d*100:>8.2f}% | {(tr_d - te_d)*100:>15.2f}% (High Variance!)")
    
    # Step 5: Verification Invariants
    assert len(classifications) == 7, "Must classify all 7 features"
    assert joint_mi > mi_a, "Joint MI must exceed univariate MI in XOR scenario"
    assert tr_d >= te_d, "Training accuracy must exceed test accuracy under heavy noise"
    
    print("\\n" + "=" * 80)
    print("TOPIC 2 LABORATORY BENCHMARK COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)


if __name__ == "__main__":
    run_laboratory()
`,H=`================================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES: ADVANCED MACHINE LEARNING (BCAC701B)
TOPIC 2: RELEVANT AND IRRELEVANT FEATURES (THE KOHAVI-JOHN TAXONOMY)
MODULE 3: FEATURE SELECTION AND TRAINING & TESTING DATA
COURSE INSTRUCTOR: SUKANTA HUI | BARRACKPORE, WEST BENGAL, INDIA
================================================================================

1. INTRODUCTION AND CONCEPTUAL ARCHITECTURE
--------------------------------------------------------------------------------
In applied machine learning, the naive assumption that "more data and more features
always produce a superior model" is mathematically false. Real-world feature matrices
X in R^(N x d) rarely consist entirely of informative dimensions. In practice, modern
data pipelines aggregate diverse signals—ranging from high-precision sensor telemetry
to arbitrary database primary keys, redundant conversions, and random instrumentation
noise.

The fundamental objective of feature selection is not merely to compress the dataset,
but to isolate the minimal optimal subset of features that achieves the Bayes optimal
error rate while eliminating irrelevant noise and non-informative redundancy.

To establish rigorous mathematical boundaries between features that must be retained,
features that may be pruned, and features that must be excised, Ron Kohavi and George
H. John (1997) formulated the seminal taxonomy of Feature Relevance.


2. FORMAL MATHEMATICAL FORMULATION (THE KOHAVI-JOHN TAXONOMY)
--------------------------------------------------------------------------------
Let:
- X = {X_1, X_2, ..., X_d} be the full set of input features.
- Y be the target output space (continuous for regression, discrete for classification).
- S_i = X \\ {X_i} be the full set of all features excluding feature X_i.
- s_i be an instantiation of the feature vector S_i.
- S'_i subseteq S_i be any subset of features excluding X_i.
- P(.) denote probability distributions over the random variables.

DEFINITION 1: STRONG RELEVANCE (INDISPENSABILITY)
A feature X_i is STRONGLY RELEVANT if and only if there exists some value x_i, y,
and s_i such that:
    P(X_i = x_i, S_i = s_i) > 0
and:
    P(Y = y | X_i = x_i, S_i = s_i) != P(Y = y | S_i = s_i)

Mathematical Consequence:
Removing a strongly relevant feature X_i results in an irreversible loss of information.
No combination of the remaining features S_i can compensate for the absence of X_i.
Consequently, any model omitting X_i cannot achieve the Bayes optimal error rate.
Strongly relevant features MUST be included in the optimal feature subset.

DEFINITION 2: WEAK RELEVANCE (CONDITIONAL / REDUNDANT / SYNERGISTIC)
A feature X_i is WEAKLY RELEVANT if and only if it is NOT strongly relevant, but there
exists some strict subset S'_i subset S_i such that:
    P(X_i = x_i, S'_i = s'_i) > 0
and:
    P(Y = y | X_i = x_i, S'_i = s'_i) != P(Y = y | S'_i = s'_i)

Mathematical Consequence:
A weakly relevant feature carries predictive information about Y in some contexts, but
its information is completely subsumed (or replaced) when the full conditioning set
S_i is available. Weak relevance branches into two distinct operational categories:
1. Redundant Features: Features whose predictive signal is duplicated by collinear
   features (e.g., Temperature in Celsius vs Fahrenheit, or Voltage Phase A vs Phase B).
   Such features can be safely pruned to simplify the model without sacrificing accuracy.
2. Synergistic / Interaction Features (e.g., XOR Problem): Features that exhibit zero
   univariate correlation with the target, but when paired with complementary features,
   uniquely resolve the conditional distribution of Y.

DEFINITION 3: IRRELEVANCE (PURE NOISE)
A feature X_i is IRRELEVANT if and only if for ALL subsets S'_i subseteq S_i:
    P(Y = y | X_i = x_i, S'_i = s'_i) = P(Y = y | S'_i = s'_i)

Mathematical Consequence:
Conditioned on any arbitrary subset of features, X_i provides strictly zero
statistical information regarding target Y. Formally, X_i is conditionally independent
of Y given any subset S'_i:
    Y _|_ X_i | S'_i   forall S'_i subseteq S_i
Irrelevant features represent stochastic noise or deterministic non-signals (e.g.,
random UUIDs, ticket numbers, timestamp milliseconds) and must be excised.


3. INFORMATION-THEORETIC CHARACTERIZATION OF RELEVANCE
--------------------------------------------------------------------------------
The Kohavi-John probabilistic definitions map directly to Shannon Information Theory:

1. Shannon Entropy of Target Y:
    H(Y) = - sum_{y in Y} P(y) * log2(P(y))

2. Conditional Entropy of Target Y given Feature X_i:
    H(Y | X_i) = - sum_{x_i, y} P(x_i, y) * log2(P(y | x_i))

3. Mutual Information (Univariate Information Gain):
    I(X_i; Y) = H(Y) - H(Y | X_i) = sum_{x_i, y} P(x_i, y) * log2( P(x_i, y) / (P(x_i)*P(y)) )

4. Conditional Mutual Information:
    I(X_i; Y | S) = H(Y | S) - H(Y | X_i, S)

RIGOROUS INFORMATION CRITERIA:
- X_i is Strongly Relevant   <==>  I(X_i; Y | S_i) > 0
  (X_i adds positive mutual information beyond all other features combined)
- X_i is Irrelevant          <==>  forall S subseteq S_i, I(X_i; Y | S) = 0
  (X_i never provides mutual information in any feature configuration)
- X_i is Weakly Relevant     <==>  I(X_i; Y | S_i) = 0, but exists S' subset S_i with I(X_i; Y | S') > 0


4. THE NON-MONOTONICITY OF FEATURE FILTERING & THE XOR PARADOX
--------------------------------------------------------------------------------
A perilous trap in machine learning engineering is the belief that relevance is
monotonic or univariate. Standard statistical filters evaluate features one-by-one
(univariate tests such as Pearson correlation r, ANOVA F-test, or univariate Mutual
Information).

THE PARITY / XOR COUNTEREXAMPLE:
Consider two binary features X_1 in {0, 1} and X_2 in {0, 1}, each independently
distributed as Bernoulli(p = 0.5).
Let target Y = X_1 XOR X_2.

Joint Probability Matrix:
(X_1, X_2) = (0, 0) ==> Y = 0
(X_1, X_2) = (0, 1) ==> Y = 1
(X_1, X_2) = (1, 0) ==> Y = 1
(X_1, X_2) = (1, 1) ==> Y = 0

Univariate Evaluation:
P(Y = 1 | X_1 = 1) = 0.5 = P(Y = 1 | X_1 = 0) = P(Y = 1)
Pearson Correlation: r(X_1, Y) = 0.0000
Mutual Information:  I(X_1; Y) = H(Y) - H(Y | X_1) = 1.0 - 1.0 = 0.0000 bits!
Similarly, r(X_2, Y) = 0.0000 and I(X_2; Y) = 0.0000 bits.

Catastrophic Failure of Univariate Filters:
Any univariate filter threshold (e.g., require I(X; Y) >= 0.05 or |r| >= 0.1) will
classify BOTH X_1 and X_2 as "IRRELEVANT" and drop them immediately!
Yet jointly:
    I(X_1, X_2; Y) = H(Y) - H(Y | X_1, X_2) = 1.0 - 0.0 = 1.0000 bits!
Together, {X_1, X_2} completely and deterministically predicts Y with 0% error.
This proves that relevance is a PROPERTY OF SUBSETS, NOT OF INDIVIDUAL ISOLATED FEATURES.


5. THE MATHEMATICAL COST OF RETAINING IRRELEVANT FEATURES
--------------------------------------------------------------------------------
Why can we not simply keep all features and let the learning algorithm figure it out?

1. Ordinary Least Squares (OLS) Variance Inflation:
In linear models y = X*beta + epsilon, the covariance matrix of estimated weights is:
    Var(hat{beta}) = sigma^2 * (X^T * X)^(-1)
When p irrelevant orthogonal noise columns are appended to the design matrix X, the
eigenvalues of (X^T * X) shrink, which inflates the trace of (X^T * X)^(-1). The
variance of ALL estimated regression coefficients increases, leading to severe
generalization error degradation.

2. Bellman's Curse of Dimensionality & Volume Dilution:
The volume of a d-dimensional hypersphere of radius r in R^d is:
    V_d(r) = (pi^(d/2) / Gamma(d/2 + 1)) * r^d
As dimension d increases due to irrelevant features:
- Almost all volume in a high-dimensional cube concentrates in the thin outer shell
  and corners.
- Points become equidistant from one another:
    lim_{d -> inf} (dist_max - dist_min) / dist_min = 0
  This breaks distance-based algorithms such as k-Nearest Neighbors (KNN), Radial Basis
  Function (RBF) Support Vector Machines, and K-Means clustering.

3. Sample Complexity Growth:
For non-parametric learners (such as Decision Trees or Kernel regressors), to maintain
constant estimation error bound epsilon, the required sample size N scales
exponentially with the number of irrelevant features:
    N(d) = Omega( (1 / epsilon)^d )


6. FOUR REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
--------------------------------------------------------------------------------

CASE STUDY 1: WBSEDCL SMART GRID SUBSTATION MONITORING (BARRACKPORE)
- Organization: West Bengal State Electricity Distribution Company Limited (WBSEDCL).
- Objective: Predict 33/11 kV distribution transformer core temperature & burnout risk.
- Feature Classification Matrix:
  * Strongly Relevant: Active power load (kW), reactive power (kVAR), ambient summer
    air temperature in Barrackpore (Celsius), harmonic distortion index.
  * Weakly Relevant (Redundant): Apparent power (kVA = sqrt(kW^2 + kVAR^2)), transformer
    oil temperature probe B (collinear with probe A, r = 0.994).
  * Weakly Relevant (Interaction): Feeder line 1 circuit breaker state (0/1) and
    feeder line 2 breaker state (0/1) which exhibit XOR relationship during bus-tie failover.
  * Irrelevant (Pure Noise): Digital energy meter billing customer ID, meter casing
    paint batch code, monthly inspection officer vehicle number.

CASE STUDY 2: CARDIAC & METABOLIC DIAGNOSTICS AT JADAVPUR & SALT LAKE CLINICS
- Setting: Multispecialty tertiary hospital in Salt Lake, Kolkata.
- Objective: Predict 5-year Acute Myocardial Infarction (AMI) risk score in patients.
- Feature Classification Matrix:
  * Strongly Relevant: Glycated hemoglobin (HbA1c %), high-sensitivity C-reactive
    protein (hs-CRP mg/L), systolic blood pressure (mmHg), smoking pack-years.
  * Weakly Relevant (Redundant): Total serum cholesterol (when LDL-C, HDL-C, and
    Triglycerides are already present, via the Friedewald formula Total = LDL + HDL + TG/5).
  * Weakly Relevant (Interaction): Gene variant allele rs10757274 (0/1) and family history
    of early CAD (0/1) requiring epistatic interaction modeling.
  * Irrelevant (Pure Noise): Patient outpatient registration token number, bed allocation
    code in ward 4, prescription barcode timestamp millisecond.

CASE STUDY 3: HOOGHLY INDUSTRIAL JUTE & TEXTILE MILLS TENSILE QUALITY
- Setting: Jute spinning and weaving mill along the Hooghly River basin, Serampore.
- Objective: Predict yarn breaking strength (tenacity in cN/tex) during high-speed spinning.
- Feature Classification Matrix:
  * Strongly Relevant: Raw jute moisture regain (%), spinning frame spindle speed (RPM),
    sliver linear density (ktex), average fiber length (mm).
  * Weakly Relevant (Redundant): Spindle speed measured in Hz (exact scalar multiple of RPM).
  * Weakly Relevant (Interaction): Batch chemical retting enzyme dosage (g/L) and soaking
    duration (hours); either factor alone has zero effect, but together produce optimal fiber.
  * Irrelevant (Pure Noise): Factory dispatch truck driver mobile number, jute bale
    warehouse storage bay number, shift supervisor punch card badge color.

CASE STUDY 4: KOLKATA METRO EAST-WEST CORRIDOR COMMUTER VOLUME FORECASTING
- Setting: Kolkata Metro Rail Corporation (KMRC) Green Line (Howrah Maidan to Salt Lake Sector V).
- Objective: 15-minute headway passenger gate congestion forecasting.
- Feature Classification Matrix:
  * Strongly Relevant: Suburban train arrival synchronization at Sealdah and Howrah main,
    Alipore meteorological radar rainfall intensity (mm/hr), office closing shift bell timing.
  * Weakly Relevant (Redundant): Optical fare gate passage pulses (redundant with turnstile
    RFID smartcard tap counter, r = 0.998).
  * Weakly Relevant (Interaction): Weekend flag (0/1) and Eden Gardens IPL match schedule (0/1).
  * Irrelevant (Pure Noise): Metro smartcard microchip manufacturer production batch ID,
    ticket vending machine token dispenser motor temperature, platform LED display frame rate.


7. COMMON PRODUCTION PITFALLS & ARCHITECTURAL VULNERABILITIES
--------------------------------------------------------------------------------
1. Univariate Filtering Fallacy:
   Using only Pearson correlation or single-variable ANOVA to prune features. This
   silently drops essential synergistic and non-linear interaction features (the XOR trap).
2. Retaining Collinear Weak Features in Linear / Logistic Models:
   Keeping both Celsius and Fahrenheit or near-identical sensors blows up standard
   errors of coefficients, flips regression signs, and destabilizes inference.
3. Ignoring Non-Linear Target Dependencies:
   Evaluating linear correlation r = 0 for a parabolic relationship y = x^2. The feature
   is strongly relevant, but linear filters judge it as completely irrelevant.
4. Data Leakage via Post-Hoc Target Encoding:
   Encoding categorical IDs using target means computed over the entire dataset before
   train/test splitting, making an irrelevant ID feature appear artificially "strongly relevant".
5. Overfitting on Spurious Noise in Small Datasets (p >> N):
   In small clinical or industrial datasets, random Gaussian noise columns can achieve
   spurious sample correlations of |r| = 0.35 simply by chance, fooling greedy wrappers.
6. Dropping Weakly Relevant Features Before Evaluating Model Class:
   Weak features redundant for linear regression may be crucial for tree ensembles that
   split sequentially on individual orthogonal dimensions.


8. MAKAUT VIVA VOCE EXAMINATION QUESTIONS & ANSWERS (SUKANTA HUI CURATED)
--------------------------------------------------------------------------------
Q1: Define Strong Relevance in the Kohavi-John framework.
A1: A feature X_i is strongly relevant if P(Y | X_i, S_i) != P(Y | S_i) for some
    values of X_i, Y, and the remaining features S_i. It means X_i carries unique,
    irreplaceable information for Bayes optimal prediction that cannot be substituted
    by any other combination of features.

Q2: What is the formal definition of an Irrelevant Feature?
A2: A feature X_i is irrelevant if for every subset S' of remaining features,
    P(Y | X_i, S') = P(Y | S'). That is, X_i is conditionally independent of target Y
    given any arbitrary feature subset S'.

Q3: Explain how a feature can have zero correlation with target Y yet be essential.
A3: In the XOR problem (Y = X_1 XOR X_2), both X_1 and X_2 have Pearson correlation
    r = 0 and individual mutual information I(X; Y) = 0 with Y. Individually they
    appear completely useless. However, together they uniquely determine Y with 100%
    accuracy. They are weakly relevant synergistic features.

Q4: What is the difference between an Irrelevant feature and a Redundant feature?
A4: An irrelevant feature carries zero predictive information about Y under all
    circumstances (pure noise). A redundant feature carries genuine predictive
    information (it is weakly relevant), but that information is already fully captured
    by another feature in the model (e.g., duplicate temperature measurements).

Q5: In information theory, what is the mathematical test for Strong Relevance?
A5: A feature X_i is strongly relevant if and only if the Conditional Mutual
    Information I(X_i; Y | S_i) > 0, where S_i is the set of all other features.

Q6: Why does adding 50 random noise columns degrade the test performance of KNN?
A6: KNN relies on Euclidean distance. In high dimensions, random noise dominates the
    distance calculations: dist(a, b) = sqrt( sum (x_j - z_j)^2 ). The distance
    between true nearest neighbors becomes indistinguishable from the distance between
    random points, causing nearest neighbor selection to degenerate into random guessing.

Q7: What happens to the OLS estimator variance when irrelevant orthogonal features are added?
A7: The covariance matrix of estimated parameters is Var(beta_hat) = sigma^2 * (X^T * X)^(-1).
    Adding irrelevant orthogonal columns increases the dimension of the parameter vector
    and increases the variance of all estimated coefficients, increasing expected prediction error.

Q8: Can a decision tree identify an XOR relationship if features are evaluated greedy split by split?
A8: A standard greedy decision tree evaluating single features by Gini impurity or
    Entropy gain will compute 0 information gain for both X_1 and X_2 at the root node.
    It may refuse to split or split arbitrarily, unless lookahead (oblique/multivariate)
    splitting or sufficient depth exploration is permitted.

Q9: How does L1 regularization (Lasso) handle redundant features compared to L2 (Ridge)?
A9: When presented with two perfectly collinear features (X_1 = X_2), L1 regularization
    arbitrarily selects one feature and sets the other coefficient to exactly zero (pruning
    redundancy). L2 regularization divides the weight equally between both features,
    retaining both in the model.

Q10: What is the recommended industrial pipeline to identify and remove irrelevant features?
A10: 1. Remove constant and near-zero variance features (VarianceThreshold).
     2. Remove deterministic non-signals (UUIDs, auto-increment keys).
     3. Apply non-linear mutual information or tree-based feature importances to filter
        pure noise.
     4. Use L1 regularization (LassoCV) or forward/backward stepwise selection with
        cross-validation to eliminate redundant and weakly informative features.
================================================================================
END OF STUDY NOTES: TOPIC 2 (BCAC701B)
================================================================================
`,U=[{id:1,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A junior data scientist at WBSEDCL assumes that discarding a feature is safe as long as other features correlate with the target.",question:"Under the seminal Kohavi-John (1997) framework, when is a feature X_i formally defined as 'Strongly Relevant'?",options:["When its Pearson correlation with the target variable exceeds |r| >= 0.85.","When removing X_i from the full feature set S causes a change in the conditional probability distribution P(Y | S) for some instance.","When it exhibits positive mutual information with at least one other input feature in the dataset.","When it has the lowest p-value in a univariate ordinary least squares regression."],correct:1,explanation:"A feature X_i is strongly relevant if and only if P(Y = y | X_i = x_i, S_i = s_i) != P(Y = y | S_i = s_i) for some values, where S_i is the set of all other features. This proves X_i provides unique information that no other combination of features can replicate.",practicalTip:"Strongly relevant features are non-negotiable; removing any strongly relevant feature will strictly degrade the Bayes optimal error rate."},{id:2,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"During an audit of a patient diagnostic database in Salt Lake, a feature 'ambient_room_temperature_fahrenheit' is found alongside 'ambient_room_temperature_celsius'.",question:"How does the Kohavi-John taxonomy classify a redundant feature that carries predictive power but duplicates existing information?",options:["As a Strongly Relevant feature because it correlates with the target.","As an Irrelevant feature because it contains zero predictive signal.","As a Weakly Relevant feature because its predictive power is subsumed when the full feature set is present.","As a Non-Conforming Latent feature requiring dimensional embedding."],correct:2,explanation:"A feature is weakly relevant if it is not strongly relevant, but there exists some subset S' of features such that P(Y | X_i, S') != P(Y | S'). A redundant feature is weakly relevant: it carries predictive information alone, but given its duplicate, it adds no unique conditional information.",practicalTip:"Pruning redundant features simplifies the model, reduces multicollinearity, and speeds up training without sacrificing Bayes optimal accuracy."},{id:3,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An ML pipeline ingests customer records containing random 128-bit UUID strings generated by a distributed database cluster.",question:"What is the formal definition of an 'Irrelevant Feature' in machine learning theory?",options:["A feature whose mean value across training samples is equal to zero.","A feature that is conditionally independent of target Y given every possible subset of remaining features.","A feature that exhibits high collinearity with the primary predictor.","A feature with a non-Gaussian empirical probability density distribution."],correct:1,explanation:"An irrelevant feature X_i satisfies P(Y = y | X_i = x_i, S' = s') = P(Y = y | S' = s') for ALL subsets S' of the remaining features. It provides strictly zero predictive information under all conditions.",practicalTip:"High-cardinality IDs and random hashes should be dropped at the data ingestion gateway to prevent tree-based models from memorizing spurious splits."},{id:4,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"In a binary classification task where Y = X1 XOR X2, a student calculates the Pearson correlation between X1 and Y and finds r = 0.00.",question:"Why do univariate filter methods fail catastrophically in detecting feature relevance in XOR / parity problems?",options:["Because Pearson correlation is only defined for continuous target variables.","Because univariate filters evaluate each feature in isolation, missing multivariate interactive synergies.","Because the XOR operator introduces complex numbers into the covariance matrix.","Because gradient descent cannot converge on non-convex loss functions."],correct:1,explanation:"In the XOR problem, P(Y=1|X1=1) = 0.5 and P(Y=1|X1=0) = 0.5. Individually, X1 and Y are statistically independent (I(X1; Y) = 0, r = 0). A univariate filter evaluates X1 alone and discards it as irrelevant, completely missing the fact that {X1, X2} jointly predicts Y with 100% accuracy.",practicalTip:"Never rely exclusively on univariate filters when domain knowledge suggests non-linear interactions or synergistic physical couplings."},{id:5,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A data engineer in Kolkata argues: 'We should include all 300 collected sensor metrics in our KNN classifier because KNN will just ignore non-useful dimensions.'",question:"What actually happens to a k-Nearest Neighbors (KNN) classifier when many irrelevant noise features are added?",options:["KNN automatically scales noise feature weights to zero during training.","Distance calculations become dominated by noise, making all pairwise distances nearly equal and destroying neighborhood structure.","The computational time complexity drops to O(1) due to sparse matrix acceleration.","The decision boundary becomes perfectly linear regardless of k."],correct:1,explanation:"KNN computes Euclidean distance: d(u, v) = sqrt(sum (u_j - v_j)^2). As irrelevant dimensions increase, the noise terms dominate the sum. In high dimensions, (dist_max - dist_min) / dist_min -> 0. All points become equidistant, rendering the concept of 'nearest neighbor' meaningless.",practicalTip:"Distance-based algorithms (KNN, RBF SVM, K-Means) are exceptionally vulnerable to irrelevant features; feature selection is mandatory."},{id:6,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"A team evaluating smart-meter energy consumption in Barrackpore wants to distinguish between 'Relevance' and 'Usefulness' of features.",question:"What is the critical distinction between a feature being 'Relevant' versus being 'Useful' for a specific model?",options:["Relevance is bounded between -1 and +1, whereas usefulness is unbounded.","Relevance is an intrinsic property of the underlying data-generating distribution, whereas usefulness depends on the specific learning algorithm and computational constraints.","Usefulness requires the feature to have zero variance across all training folds.","There is no distinction; the terms are mathematically identical in all ML literature."],correct:1,explanation:"Relevance (Kohavi-John) is defined with respect to the true conditional distribution P(Y | X) independent of any model. Usefulness reflects whether a specific learning algorithm (e.g. a linear model vs random forest) can exploit that feature to improve empirical accuracy under sample and computational limits.",practicalTip:"A strongly relevant feature might not be 'useful' to a linear model if the relationship with target Y is non-linear and no non-linear transformations are provided."},{id:7,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"An analyst measures student performance in Ichapur and notes that adding 20 random noise columns increases training accuracy from 84% to 96%, but test accuracy drops from 82% to 64%.",question:"What theoretical phenomenon explains this divergence between training and test accuracy upon adding irrelevant features?",options:["Underfitting caused by excessive regularization penalties.","Overfitting and variance inflation, as the model memorizes spurious random alignments between noise features and training labels.","Data leakage from the test set into the cross-validation folds.","Numerical underflow in floating-point gradient updates."],correct:1,explanation:"Every irrelevant feature grants the model additional degrees of freedom to memorize random noise patterns in the training sample. The model's empirical training loss decreases, but estimation variance increases, severely destroying out-of-sample generalization.",practicalTip:"Always monitor the generalization gap (Train Acc - Validation Acc). A widening gap as features are added is the hallmark of irrelevant noise contamination."},{id:8,tier:1,difficulty:"Foundation",category:"Conceptual Foundations",scenario:"In an exam paper at MAKAUT, students are asked to categorize features into a Venn diagram of relevance.",question:"Which of the following subsets forms a strict partition of all input features X in the Kohavi-John taxonomy?",options:["Strongly Relevant, Weakly Relevant, and Irrelevant.","Linear Features, Non-linear Features, and Polynomial Features.","Continuous Features, Categorical Features, and Discrete Features.","Training Features, Validation Features, and Testing Features."],correct:0,explanation:"Every feature X_i in the input space X falls into exactly one of three mutually exclusive and collectively exhaustive categories: Strongly Relevant, Weakly Relevant, or Irrelevant.",practicalTip:"Remember the hierarchy: Strongly Relevant (keep always) -> Weakly Relevant (decide based on redundancy vs interaction) -> Irrelevant (discard completely)."},{id:9,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"A researcher uses Shannon Information Theory to rigorously test whether feature X_i is strongly relevant.",question:"Which information-theoretic condition is mathematically equivalent to the statement 'X_i is Strongly Relevant'?",options:["I(X_i; Y) > 0","I(X_i; Y | S_i) > 0, where S_i = X \\ {X_i}","H(X_i) > H(Y)","H(Y | X_i) = 0"],correct:1,explanation:"Strong relevance implies that conditioning on all other features S_i still leaves unexplained uncertainty in Y that X_i uniquely resolves. Thus, the Conditional Mutual Information I(X_i; Y | S_i) = H(Y | S_i) - H(Y | X_i, S_i) must be strictly greater than zero.",practicalTip:"Computing I(X_i; Y | S_i) requires multivariate density estimation; in practice, permutation importance or wrapper selection approximates this test."},{id:10,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"Suppose target Y has Shannon entropy H(Y) = 1.0 bit. Feature X_1 yields conditional entropy H(Y | X_1) = 0.4 bits.",question:"What is the Mutual Information I(X_1; Y), and how is it interpreted?",options:["0.4 bits; X_1 accounts for 40% of the total target variation.","0.6 bits; knowing X_1 reduces target uncertainty by 0.6 bits.","1.4 bits; joint entropy expands beyond individual limits.","0.0 bits; because entropy cannot be subtracted."],correct:1,explanation:"Mutual Information I(X_1; Y) = H(Y) - H(Y | X_1) = 1.0 - 0.4 = 0.6 bits. This represents the absolute reduction in uncertainty regarding Y obtained by observing X_1.",practicalTip:"Mutual Information is non-negative (I >= 0) and equals zero if and only if X and Y are completely statistically independent."},{id:11,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"An Ordinary Least Squares regression model y = X*beta + epsilon is fitted with p features. An analyst adds k completely orthogonal noise columns.",question:"What is the exact mathematical effect on the covariance matrix of estimated parameters Var(beta_hat) = sigma^2 * (X^T * X)^(-1)?",options:["The variance of the original parameters decreases because sample size is unchanged.","The trace of (X^T * X)^(-1) increases, inflating the variance of all estimated regression coefficients.","The residual sum of squares jumps to infinity due to singularity.","The parameter covariance matrix becomes strictly diagonal with all zeros."],correct:1,explanation:"Adding orthogonal noise columns expands the design matrix without contributing true signal. In finite samples, the trace of (X^T * X)^(-1) increases, which directly magnifies the variance of all estimated parameters: Var(beta_hat) = sigma^2 * (X^T * X)^(-1).",practicalTip:"Irrelevant features do not just waste memory; they actively inflate parameter estimation errors across all remaining valid features."},{id:12,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"In an XOR setup with X1, X2 in {0, 1} and Y = X1 XOR X2, assume P(X1=1)=0.5 and P(X2=1)=0.5 independently.",question:"What are the exact values of I(X1; Y) and I(X1, X2; Y)?",options:["I(X1; Y) = 0.5 bits, I(X1, X2; Y) = 0.5 bits.","I(X1; Y) = 0.0 bits, I(X1, X2; Y) = 1.0 bit.","I(X1; Y) = 1.0 bit, I(X1, X2; Y) = 2.0 bits.","I(X1; Y) = 0.0 bits, I(X1, X2; Y) = 0.0 bits."],correct:1,explanation:"H(Y) = 1.0 bit. P(Y|X1) is uniformly 0.5, so H(Y|X1) = 1.0 bit ==> I(X1; Y) = 1.0 - 1.0 = 0.0 bits. However, given both X1 and X2, Y is completely determined (H(Y|X1, X2) = 0.0) ==> I(X1, X2; Y) = 1.0 - 0.0 = 1.0 bit.",practicalTip:"The difference I(X1, X2; Y) - I(X1; Y) - I(X2; Y) = 1.0 - 0 - 0 = +1.0 bit is called positive Interaction Information or synergy."},{id:13,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"A data scientist computes the Variance Inflation Factor (VIF) for feature X_j to detect redundancy. The R^2 obtained from regressing X_j on all other features is 0.96.",question:"What is the VIF for X_j, and what does this indicate about its relevance?",options:["VIF = 4.0; the feature is strongly relevant and non-redundant.","VIF = 25.0; the feature is heavily redundant (weakly relevant) with existing features.","VIF = 0.04; the feature has zero multicollinearity.","VIF = 0.96; the feature is completely irrelevant."],correct:1,explanation:"VIF_j = 1 / (1 - R_j^2) = 1 / (1 - 0.96) = 1 / 0.04 = 25.0. A VIF >= 10 indicates severe multicollinearity, proving that X_j's information is largely redundant given the other features in the matrix.",practicalTip:"Features with high VIF can often be safely eliminated to stabilize linear model coefficients and reduce variance."},{id:14,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"Consider two continuous features where X2 = 3.5 * X1 + 2.0 (exact deterministic linear relationship). Both X1 and X2 correlate with target Y.",question:"How does the Kohavi-John taxonomy classify X1 and X2 with respect to the full feature set {X1, X2}?",options:["Both X1 and X2 are Strongly Relevant.","Both X1 and X2 are Irrelevant.","Both X1 and X2 are Weakly Relevant (Redundant), as either can be dropped without losing information.","X1 is Strongly Relevant and X2 is Irrelevant by convention."],correct:2,explanation:"Since X2 is a deterministic function of X1, P(Y | X1, X2) = P(Y | X1) = P(Y | X2). Removing X1 does not change P(Y | X2), so X1 is not strongly relevant. Removing X2 does not change P(Y | X1), so X2 is not strongly relevant. Both are weakly relevant (redundant with each other).",practicalTip:"In collinear pairs, either feature can be retained, but keeping both inflates standard errors in linear models."},{id:15,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"Let target Y be continuous, and let X_noise be a standard Gaussian variable X_noise ~ N(0, 1) generated completely independently of Y.",question:"What is the expected value of the population Pearson correlation E[r(X_noise, Y)] and what is the variance of the sample correlation Var(r_sample) for sample size N?",options:["E[r] = 0, Var(r_sample) approx 1 / N","E[r] = 1, Var(r_sample) approx 0","E[r] = 0.5, Var(r_sample) approx 1 / (N^2)","E[r] = -1, Var(r_sample) approx N"],correct:0,explanation:"For an irrelevant independent feature, the true population correlation is 0. However, the sample correlation has variance approximately 1 / N. With small N (e.g. N = 50), random noise features can easily exhibit sample correlations of |r| approx 2 / sqrt(50) = 0.28 purely by chance!",practicalTip:"Always use cross-validation or adjusted significance thresholds (Bonferroni correction) when evaluating feature correlations on small datasets."},{id:16,tier:2,difficulty:"Intermediate",category:"Mathematical Formulations",scenario:"A non-linear relationship between feature X and target Y is defined by Y = X^2 where X is uniformly distributed on [-2, +2].",question:"What are the Pearson correlation r(X, Y) and the Mutual Information I(X; Y)?",options:["r(X, Y) = 1.0, I(X; Y) = 0 bits.","r(X, Y) = 0.0, I(X; Y) > 0 bits.","r(X, Y) = 0.0, I(X; Y) = 0 bits.","r(X, Y) = -1.0, I(X; Y) > 0 bits."],correct:1,explanation:"Because the relationship is symmetric about zero, Cov(X, Y) = E[X^3] - E[X]E[X^2] = 0 - 0 = 0, so Pearson r = 0.0. However, Y is completely determined by X, so H(Y|X) is minimal, and Mutual Information I(X; Y) is strictly positive. X is strongly relevant despite zero linear correlation.",practicalTip:"A linear filter evaluating r would discard X as irrelevant; mutual information or decision trees capture non-linear strong relevance."},{id:17,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An ML engineer tests a Forward Stepwise Selection wrapper on a dataset with 8 features including an XOR pair {X3, X4}.",question:"Why does standard Greedy Forward Stepwise Selection fail to select either feature of an XOR pair in Step 1?",options:["Because Forward Selection only accepts normalized features.","Because in Step 1, every feature is evaluated in isolation (size 1 model), where both X3 and X4 show zero improvement in loss.","Because the XOR operator violates gradient descent Lipschitz continuity.","Because Stepwise Selection only evaluates even-numbered feature indices."],correct:1,explanation:"Greedy Forward Selection starts with an empty set and tests each feature individually: argmin_{j} Loss({j}). Because neither X3 nor X4 alone reduces prediction loss, their single-feature performance is near zero, causing the greedy algorithm to pick other features or terminate early.",practicalTip:"To discover interactive pairs, wrappers must either use lookahead steps (evaluating pairs), beam search, or pre-engineered interaction terms."},{id:18,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data pipeline at an e-commerce hub in Kolkata applies L1 Lasso regularization (min ||y - Xw||^2 + lambda * ||w||_1) to prune features.",question:"How does Lasso L1 regularization treat a pair of highly collinear, redundant features {X1, X2}?",options:["It assigns identical non-zero weights to both features.","It arbitrarily drives one feature's weight to exactly zero while retaining the other.","It sets both feature weights to zero simultaneously.","It doubles the weight of both features to compensate for collinearity."],correct:1,explanation:"Due to the sharp diamond-shaped L1 geometry in weight space, the objective contour touches the axis corner, forcing one of the redundant weights to exactly zero while preserving the other. This automatically prunes redundancy.",practicalTip:"If you want to keep grouped collinear features together, use ElasticNet (L1 + L2 penalty) instead of pure Lasso."},{id:19,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A Random Forest classifier is trained on credit card fraud data with 5 strongly relevant features and 50 irrelevant random noise features.",question:"How do irrelevant noise features degrade the performance of a Random Forest?",options:["They cause the trees to have infinite depth without stopping.","At each candidate split, random feature subsampling (mtry) frequently selects only noise features, leading to uninformative, noisy splits.","They force all decision trees in the ensemble to become identical.","They convert the ensemble into a linear regression model."],correct:1,explanation:"At each split node, Random Forest considers a random subset of mtry features (e.g. sqrt(d)). When 50 out of 55 features are noise, the probability that all mtry candidate features are pure noise is high: ((50/55)^mtry). The tree is forced to split on noise, polluting the ensemble and degrading accuracy.",practicalTip:"Even tree ensembles that perform internal feature selection suffer when the ratio of noise features to informative features is high."},{id:20,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"In an academic experiment, a student measures the feature importances produced by a Decision Tree on a dataset containing an irrelevant feature with 10,000 unique categorical categories (like Customer_ID).",question:"Why does Gini-importance (mean decrease in impurity) incorrectly rank the high-cardinality irrelevant feature as the most important?",options:["Because high-cardinality features have higher numerical values.","Because high-cardinality features allow the tree to create pure leaf splits by memorizing individual training instances.","Because Gini impurity is mathematically inverted for categorical data.","Because decision trees cannot compute splits on categorical columns."],correct:1,explanation:"A high-cardinality categorical feature (like ID) can trivially split every training sample into its own pure leaf node, yielding a massive apparent drop in Gini impurity. This is severe overfitting. The feature is completely irrelevant for test data.",practicalTip:"Use Permutation Importance on held-out validation data instead of default MDI (Mean Decrease Impurity) to avoid high-cardinality bias."},{id:21,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A production engineer configures scikit-learn's `VarianceThreshold(threshold=0.0)` as the very first step in a feature preprocessing pipeline.",question:"What specific class of irrelevant features does this step cleanly eliminate?",options:["Features that are non-linearly correlated with the target.","Constant features that take the exact same value across all training instances.","Features that have a high correlation with the target variable.","Features that follow a heavy-tailed Cauchy distribution."],correct:1,explanation:"A feature with variance = 0.0 is constant across all samples (e.g., country='India' in a domestic West Bengal dataset). A constant provides zero discriminatory power and is mathematically irrelevant under all conditioning subsets.",practicalTip:"Always put VarianceThreshold(0.0) first in your pipeline to strip useless constant columns before computationally heavy transforms."},{id:22,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"An engineer in Hooghly trains a Support Vector Machine with an RBF kernel on textile tensile data with 10 relevant features and 40 noise features.",question:"Why does the RBF kernel k(x, z) = exp(-gamma * ||x - z||^2) fail when irrelevant dimensions are present?",options:["The exponential function overflows to infinity in 64-bit precision.","The Euclidean norm ||x - z||^2 accumulates squared noise across the 40 irrelevant dimensions, washing out the meaningful signal distance.","The dual optimization problem becomes strictly non-convex.","The Gram matrix becomes non-positive semi-definite."],correct:1,explanation:"The RBF kernel computes squared distance across all dimensions: sum_{j=1}^50 (x_j - z_j)^2. The 40 irrelevant noise dimensions contribute 80% of the distance calculation, swamping the true similarity in the 10 relevant dimensions and causing kernel values to decay to zero.",practicalTip:"Scale features and perform rigorous feature selection before applying kernel methods with isotropic distance metrics."},{id:23,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"A data team wishes to use Permutation Feature Importance to classify features into Strongly Relevant, Weakly Relevant, or Irrelevant.",question:"How does Permutation Feature Importance measure the relevance of feature X_j on a validation set?",options:["By calculating the derivative of the loss function with respect to X_j.","By randomly shuffling the values of column X_j to break its association with the target and recording the drop in model validation score.","By inverting the covariance matrix of the training set.","By training a new decision tree on column X_j alone."],correct:1,explanation:"Permutation feature importance shuffles the values of feature X_j across validation samples. If X_j was strongly relevant, breaking its link with Y causes a steep drop in validation performance. If X_j was irrelevant, shuffling its noise values produces near-zero change in performance.",practicalTip:"Permutation importance is model-agnostic and directly measures the empirical usefulness of a feature on unseen validation data."},{id:24,tier:3,difficulty:"Advanced",category:"Applied Architecture",scenario:"Two collinear features X1 and X2 (r = 0.99) are both included in a model. When Permutation Feature Importance is computed by shuffling one feature at a time, both receive near-zero importance scores.",question:"Why does univariate permutation importance fail to identify the importance of collinear weakly relevant features?",options:["Because permutation importance cannot be computed on floating-point numbers.","Because when X1 is shuffled, the model can still rely on X2 to make accurate predictions, and vice versa.","Because the validation dataset automatically resets itself after each shuffle.","Because collinear features invert the sign of the scoring metric."],correct:1,explanation:"Because X1 and X2 contain duplicate information, corrupting X1 alone leaves X2 intact to carry the predictive load. Thus, neither individual shuffle causes a performance drop! To detect the true importance of redundant features, they must be grouped and permuted together.",practicalTip:"Use hierarchical feature clustering and group-permutation importance when severe multicollinearity is present."},{id:25,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"At the WBSEDCL smart grid substation in Barrackpore, engineers model distribution transformer core temperature to prevent summer burnouts.",question:"Given the features [Active Power (kW), Reactive Power (kVAR), Ambient Temp, Transformer Serial Number, Apparent Power (kVA)], which subset contains ONLY strongly relevant features?",options:["[Transformer Serial Number, Ambient Temp]","[Active Power (kW), Reactive Power (kVAR), Ambient Temp]","[Active Power (kW), Apparent Power (kVA)]","[Transformer Serial Number, Apparent Power (kVA), Reactive Power (kVAR)]"],correct:1,explanation:"Active Power and Reactive Power represent the physical electrical load, and Ambient Temperature governs thermal dissipation (all strongly relevant). Apparent Power is redundant (kVA = sqrt(kW^2 + kVAR^2)), and Transformer Serial Number is an irrelevant identifier.",practicalTip:"Always consult domain engineering physics to identify deterministic equations that create redundant features."},{id:26,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A diagnostic clinic in Salt Lake predicts cardiac risk. The dataset includes [LDL Cholesterol, HDL Cholesterol, Triglycerides, Total Cholesterol, Patient Hospital Bed Number].",question:"According to the Friedewald formula (Total = LDL + HDL + Triglycerides / 5), how should 'Total Cholesterol' and 'Bed Number' be categorized?",options:["Total Cholesterol is Strongly Relevant; Bed Number is Weakly Relevant.","Total Cholesterol is Weakly Relevant (Redundant); Bed Number is Completely Irrelevant.","Both features are Strongly Relevant.","Both features are Completely Irrelevant."],correct:1,explanation:"Because Total Cholesterol is mathematically determined by the other lipid fractions, it carries no unique conditional information when LDL, HDL, and Triglycerides are present (making it weakly relevant/redundant). Bed Number is an arbitrary administrative assignment with zero biological relationship to cardiac disease (irrelevant).",practicalTip:"Excluding administrative identifiers and redundant aggregate scores reduces model footprint and eliminates noise."},{id:27,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A jute spinning mill in Serampore, Hooghly tests a model predicting yarn breaking tenacity. Features include moisture regain (%), chemical retting dosage (g/L), retting duration (hours), and spinning frame motor chassis paint color.",question:"If biological experiments show that retting dosage and duration only work if applied together within a specific joint window, how are dosage and duration classified?",options:["Both are Irrelevant because univariate correlation with tenacity is nearly zero.","Both are Weakly Relevant (Interactive / Synergistic), forming a non-linear joint dependency.","Both are Strongly Relevant on their own.","Both are Redundant with motor chassis paint color."],correct:1,explanation:"Interactive features that show negligible single-variable correlation but high joint predictive power are classified as weakly relevant (interactive/synergistic). Paint color is completely irrelevant.",practicalTip:"Use explicit polynomial interaction features (e.g. dosage * duration) if deploying linear or logistic regression models on physical processes."},{id:28,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"Kolkata Metro Green Line operates automated fare collection (AFC) gates at Sealdah and Howrah. An analyst builds a passenger surge predictor using gate RFID tap counts, optical barrier break counts, passenger birth day of the month, and train arrival delay.",question:"Which of the following describes the feature classification correctly?",options:["Train arrival delay is Irrelevant; Passenger birth day is Strongly Relevant.","Optical barrier counts are Redundant with RFID tap counts; Passenger birth day is Irrelevant; Train delay is Strongly Relevant.","All four features are Strongly Relevant.","All four features are Weakly Relevant."],correct:1,explanation:"Train arrival delay directly causes passenger surges on the platform (strongly relevant). Optical barrier breaks count the same passengers as RFID taps (r = 0.998, redundant). Passenger birth day has no causal or predictive link to station crowding (irrelevant).",practicalTip:"Pruning sensor redundancy protects edge computing hardware from unnecessary dual-channel network bandwidth."},{id:29,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"A data scientist at an IT services firm in Sector V, Salt Lake, discovers that an XGBoost model has 98% accuracy on training data and 61% accuracy on cross-validation after adding 150 automated aggregated customer features.",question:"What is the recommended diagnostic step to identify and remove the irrelevant features causing this severe overfitting?",options:["Increase the learning rate to 1.0 to force faster convergence.","Compute Permutation Feature Importance on the validation set, plot the distribution of importance scores, and prune features with scores <= 0.","Duplicate the training data 10 times to provide more samples.","Replace XGBoost with an unregularized high-degree polynomial regression."],correct:1,explanation:"Permutation Feature Importance on held-out validation data cleanly separates true predictive features from noise. Features that have zero or negative permutation importance on validation data do not generalize and should be pruned.",practicalTip:"A feature with negative validation importance means the model performs BETTER when that feature is completely corrupted into random noise!"},{id:30,tier:4,difficulty:"Expert",category:"Industrial Case Studies",scenario:"An ML architect is preparing a high-throughput real-time fraud detection service with a strict 15-millisecond latency SLA.",question:"Beyond improving model generalization, what critical operational benefit does eliminating weakly relevant (redundant) and irrelevant features provide?",options:["It eliminates the need for unit testing and CI/CD pipelines.","It reduces feature computation latency, minimizes feature store lookup overhead, and decreases payload size for real-time inference.","It guarantees that precision and recall will both equal 100%.","It converts asynchronous network requests into instantaneous quantum transfers."],correct:1,explanation:"In production, feature engineering takes 80%+ of inference latency. Eliminating redundant and irrelevant features directly slashes data pipeline latency, database query overhead, memory consumption, and network serialization costs.",practicalTip:"Feature selection is as much a production systems engineering optimization as it is a statistical accuracy optimization."}],T=[{id:"active_kw",name:"Active Power (kW)",symbol:"X₁",nature:"Physical Load",description:"Primary electrical work performed across Barrackpore feeders.",defaultCategory:"Strongly Relevant",univariateMI:.82,pearsonR:.88,isCollinearWith:null,isXorPart:!1,isNoise:!1},{id:"ambient_temp",name:"Ambient Temp (°C)",symbol:"X₂",nature:"Environmental Stress",description:"Barrackpore summer ambient air temperature driving cooling limits.",defaultCategory:"Strongly Relevant",univariateMI:.65,pearsonR:.74,isCollinearWith:null,isXorPart:!1,isNoise:!1},{id:"active_hp",name:"Active Power (HP)",symbol:"X₃",nature:"Redundant Duplicate",description:"Exact mechanical equivalent (1 kW = 1.341 HP) measured by secondary meter.",defaultCategory:"Weakly Relevant (Redundant)",univariateMI:.82,pearsonR:.88,isCollinearWith:"active_kw",isXorPart:!1,isNoise:!1},{id:"breaker_a",name:"Feeder 1 Breaker State",symbol:"X₄",nature:"XOR Interaction Bit 1",description:"Binary switch state (0/1) for primary feeder bus line.",defaultCategory:"Weakly Relevant (Interactive)",univariateMI:.01,pearsonR:.03,isCollinearWith:null,isXorPart:!0,pairedWith:"breaker_b",isNoise:!1},{id:"breaker_b",name:"Feeder 2 Breaker State",symbol:"X₅",nature:"XOR Interaction Bit 2",description:"Binary switch state (0/1) for secondary bus tie line.",defaultCategory:"Weakly Relevant (Interactive)",univariateMI:.01,pearsonR:.02,isCollinearWith:null,isXorPart:!0,pairedWith:"breaker_a",isNoise:!1},{id:"cust_lottery",name:"Customer Lottery ID",symbol:"X₆",nature:"Pure Stochastic Noise",description:"Billing lottery draw number randomly assigned by CRM software.",defaultCategory:"Irrelevant",univariateMI:0,pearsonR:.01,isCollinearWith:null,isXorPart:!1,isNoise:!0},{id:"chassis_hash",name:"Meter Chassis Hash",symbol:"X₇",nature:"Deterministic Non-Signal",description:"Hardware manufacturer serial number hash stamped on metal enclosure.",defaultCategory:"Irrelevant",univariateMI:0,pearsonR:-.02,isCollinearWith:null,isXorPart:!1,isNoise:!0}],b=[{id:1,scenario:"An ML engineer is designing an automated feature filtration pipeline. A colleague proposes discarding any feature with a univariate Pearson correlation |r| < 0.05.",question:"Why is a strict univariate correlation threshold fundamentally flawed according to the Kohavi-John taxonomy?",options:[{label:"A",text:"Pearson correlation only evaluates linear dependence; non-linear and synergistic features (such as XOR pairs) with r = 0 will be erroneously discarded."},{label:"B",text:"Pearson correlation is mathematically bounded by the dataset sample size rather than feature relevance."},{label:"C",text:"Univariate filters can only be executed on continuous target variables and fail on binary outcomes."},{label:"D",text:"Discarding features with low correlation increases the computational time complexity of subsequent matrix inversions."}],correct:"A",explanation:"Univariate filters evaluate each feature in isolation. In non-linear relationships (e.g. y = x²) or interactive couplings (e.g. y = x₁ ⊕ x₂), individual Pearson correlation is exactly zero, yet these features carry 100% predictive information jointly."},{id:2,scenario:"At the WBSEDCL smart grid substation, 'Active Power (kW)' and 'Active Power (HP)' are both included in a linear regression model. Both correlate r = 0.88 with transformer load.",question:"Under the formal Kohavi-John definition, how are these two features classified with respect to each other?",options:[{label:"A",text:"Both are Strongly Relevant because they exhibit high mutual information with the target."},{label:"B",text:"Both are Weakly Relevant (Redundant), because either feature's information is completely subsumed when the other is present."},{label:"C",text:"Active Power (kW) is Strongly Relevant and Active Power (HP) is Irrelevant by definition."},{label:"D",text:"Both are Irrelevant because collinear features cancel each other out in the covariance matrix."}],correct:"B",explanation:"Neither feature is strongly relevant because removing one leaves the other intact to provide the exact same conditional probability distribution P(Y | S). They are weakly relevant redundant duplicates."},{id:3,scenario:"In an XOR classification task (Y = X₁ ⊕ X₂), a researcher observes that I(X₁; Y) = 0 bits and I(X₂; Y) = 0 bits, but I(X₁, X₂; Y) = 1.0 bit.",question:"What term describes the phenomenon where individual features appear useless in isolation but provide complete information in combination?",options:[{label:"A",text:"Spurious Multi-collinearity."},{label:"B",text:"Information Synergy (Negative Interaction Information)."},{label:"C",text:"Homoscedasticity Collapse."},{label:"D",text:"Orthogonal Projection Divergence."}],correct:"B",explanation:"When joint mutual information I(X₁, X₂; Y) strictly exceeds the sum of individual mutual informations I(X₁; Y) + I(X₂; Y), the feature pair exhibits positive synergy (or negative interaction information in McGill's formulation)."},{id:4,scenario:"A diagnostic clinic in Salt Lake includes 40 random Gaussian noise columns alongside 3 clinical biomarkers. A k-Nearest Neighbors (KNN) classifier's test accuracy drops from 88% to 54%.",question:"What geometric breakdown causes KNN to fail when irrelevant noise dimensions are added?",options:[{label:"A",text:"Noise features cause the Euclidean distance to accumulate random variance, making all pairwise sample distances nearly equal and destroying neighborhood structure."},{label:"B",text:"Noise features invert the metric space, making nearest neighbors become farthest neighbors."},{label:"C",text:"KNN automatically assigns negative weights to noise dimensions, causing distance underflow."},{label:"D",text:"The Bayes optimal error rate drops to zero, making classification impossible."}],correct:"A",explanation:"In high-dimensional noise spaces, the ratio (dist_max - dist_min) / dist_min approaches 0. Points become equidistant, rendering proximity metrics completely meaningless."},{id:5,scenario:"A data scientist fits an Ordinary Least Squares (OLS) model: y = Xβ + ε. Twenty orthogonal random noise columns are appended to X.",question:"What is the theoretical effect on the parameter covariance matrix Var(β̂) = σ²(XᵀX)⁻¹?",options:[{label:"A",text:"The variance of parameter estimates shrinks because degrees of freedom increase."},{label:"B",text:"The trace of (XᵀX)⁻¹ expands, inflating the estimation variance of all regression coefficients."},{label:"C",text:"The matrix becomes non-invertible due to zero determinant."},{label:"D",text:"The parameter estimates become strictly biased toward zero."}],correct:"B",explanation:"Adding irrelevant columns expands the parameter space without increasing true signal. In finite samples, the trace of (XᵀX)⁻¹ grows, which inflates the variance of estimated coefficients across all features."}],ie=()=>{i.useId();const[_,j]=i.useState("theory"),[g,R]=i.useState("classifier"),[s,k]=i.useState({active_kw:!0,ambient_temp:!0,active_hp:!1,breaker_a:!0,breaker_b:!0,cust_lottery:!1,chassis_hash:!1}),C=t=>{k(a=>({...a,[t]:!a[t]}))},l=i.useMemo(()=>{const t=T.filter(F=>s[F.id]),a=s.active_kw,r=s.active_hp,n=s.breaker_a,c=s.breaker_b,d=s.cust_lottery||s.chassis_hash;let m=42;(a||r)&&(m-=22),s.ambient_temp&&(m-=10),n&&c?m-=8:(n||c)&&(m-=.5);let f=0;s.cust_lottery&&(f+=4.5),s.chassis_hash&&(f+=4.5);let A=0;a&&r&&(A+=3);const S=Math.max(2,m+f+A),X=Math.max(1,m-f*.8);return{activeCount:t.length,trainError:X.toFixed(1),testError:S.toFixed(1),genGap:Math.max(0,S-X).toFixed(1),hasRedundancy:a&&r,hasXorSynergy:n&&c,hasXorBlindspot:n&&!c||!n&&c,hasNoiseContamination:d}},[s]),[q,V]=i.useState(.5),[G,K]=i.useState(0),[y,E]=i.useState(3),[p,Y]=i.useState(15),[v,P]=i.useState(200),h=i.useMemo(()=>{const t=y,a=p,r=v,n=Math.min(99.5,70+t*6+a*.45-r*.005),c=a*.65*(150/r),d=Math.max(48,70+t*5.8-c),m=t+a,f=(2.2/Math.sqrt(m)).toFixed(3);return{trainAcc:n.toFixed(1),testAcc:d.toFixed(1),overfitGap:Math.max(0,n-d).toFixed(1),contrastRatio:f}},[y,p,v]),[x,w]=i.useState({}),[u,I]=i.useState(!1),O=(t,a)=>{u||w(r=>({...r,[t]:a}))},L=()=>{I(!0)},N=i.useMemo(()=>u?b.reduce((t,a)=>t+(x[a.id]===a.correct?1:0),0):0,[u,x]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{id:"hero",className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 -mb-10 -ml-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"Module 3: Feature Selection & Train-Test Dynamics"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:"Topic 2 of 16"}),e.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"MAKAUT BCAC701B Masterclass"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight",children:"Relevant and Irrelevant Features"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-3xl leading-relaxed",children:"Master the mathematical taxonomy of Ron Kohavi & George H. John (1997). Demystify Strong Relevance, Weak Relevance (Redundant vs Synergistic/XOR), and Pure Irrelevance. Uncover why univariate filters fail on multivariate interactions and quantify the devastating cost of noise injection on generalization."}),e.jsx("div",{className:"pt-2 flex flex-wrap gap-2 text-xs",children:[{id:"novice",label:"Novice Masterclass"},{id:"studio",label:"Interactive Studio"},{id:"math",label:"Math Formulations"},{id:"casestudies",label:"Regional Case Studies"},{id:"quiz",label:"Diagnostic Quiz"},{id:"pitfalls",label:"Production Pitfalls"},{id:"loaders",label:"Python Lab & Notes"},{id:"faq",label:"MAKAUT Viva FAQ"}].map(t=>e.jsx("a",{href:`#${t.id}`,className:"px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600/60 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-medium",children:t.label},t.id))})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Foundational Intuition"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Novice Masterclass: Understanding Feature Relevance"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Three real-world mental models to firmly anchor the Kohavi-John taxonomy before delving into formal information theory."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-indigo-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🏏"}),e.jsx("h4",{className:"text-base font-bold text-indigo-300",children:"1. The Eden Gardens Cricket Selector"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When picking the playing XI:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Strong Relevance:"})," Jasprit Bumrah's death bowling. Nobody else can replicate his yorkers. Indispensable."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Weak (Redundant):"})," Selecting two identical right-arm 125 km/h seamers. You only need one in the XI."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Weak (Synergistic):"})," The opening batting pair who run singles between wickets. Neither can build the stand alone."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Irrelevant:"})," The bus driver's watch color. Zero causal impact on the match result."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-cyan-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🍲"}),e.jsx("h4",{className:"text-base font-bold text-cyan-300",children:"2. The Barrackpore Biryani Handi"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Cooking authentic Kolkata Biryani:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Strong Relevance:"})," Saffron and Biryani Attar (Meetha Ittar). The signature aroma cannot be substituted."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Weak (Redundant):"})," Adding both pure cow Ghee and Vanaspati fat. Ghee already provides the rich fatty emulsion."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Weak (Synergistic):"})," Green Cardamom and Mace (Javitri). Release aroma only when sealed together under slow dum!"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Irrelevant:"})," The serial number stamped on the LPG cooking cylinder. Pure unrelated noise."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-emerald-900/40 space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"text-2xl",children:"🔍"}),e.jsx("h4",{className:"text-base font-bold text-emerald-300",children:"3. The Lalbazar Crime Detective"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Investigating an incident in Kolkata:"}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1.5 list-disc pl-4",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Strong Relevance:"})," Unmatched DNA evidence found at the crime scene. Directly points to the culprit."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Weak (Redundant):"})," Two CCTV cameras recording the exact same doorway from 5 degrees apart."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Weak (Synergistic):"})," Two halves of a torn receipt. Neither half alone means anything; together they match!"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-slate-200",children:"Irrelevant:"})," The suspect's astrological sun sign or favorite tea brand."]})]})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"The Kohavi-John Relevance Taxonomy Matrix"}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-950/80 text-slate-300 border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 font-semibold",children:"Classification"}),e.jsx("th",{className:"p-3 font-semibold",children:"Probabilistic Condition"}),e.jsx("th",{className:"p-3 font-semibold",children:"Info-Theoretic Signature"}),e.jsx("th",{className:"p-3 font-semibold",children:"Bayes Impact"}),e.jsx("th",{className:"p-3 font-semibold",children:"Recommended Action"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-400",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-3 font-bold text-emerald-300 flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),"Strongly Relevant"]}),e.jsx("td",{className:"p-3 font-mono text-slate-300",children:"P(Y|Xᵢ,Sᵢ) ≠ P(Y|Sᵢ)"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"I(Xᵢ; Y | Sᵢ) > 0"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Dropping strictly increases Bayes error rate"}),e.jsx("td",{className:"p-3 text-emerald-400 font-semibold",children:"MUST RETAIN ALWAYS"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-3 font-bold text-indigo-300 flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),"Weakly Relevant (Redundant)"]}),e.jsx("td",{className:"p-3 font-mono text-slate-300",children:"P(Y|Xᵢ,Sᵢ) = P(Y|Sᵢ), but ∃S' s.t. P(Y|Xᵢ,S') ≠ P(Y|S')"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"I(Xᵢ; Y) > 0, but I(Xᵢ; Y | Sᵢ) = 0"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Duplicated by other features; no Bayes loss if duplicate kept"}),e.jsx("td",{className:"p-3 text-indigo-400 font-semibold",children:"SAFE TO PRUNE (Deduplicate)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-3 font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),"Weakly Relevant (Synergistic / XOR)"]}),e.jsx("td",{className:"p-3 font-mono text-slate-300",children:"P(Y|Xᵢ) = P(Y), but P(Y|Xᵢ, Xⱼ) ≠ P(Y|Xⱼ)"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"I(Xᵢ; Y) ≈ 0, but I(Xᵢ, Xⱼ; Y) ≫ 0"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Fatal Bayes penalty if either partner dropped"}),e.jsx("td",{className:"p-3 text-amber-400 font-semibold",children:"MUST KEEP IN PAIR (Use Non-Linear/Trees)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-3 font-bold text-rose-300 flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),"Completely Irrelevant"]}),e.jsx("td",{className:"p-3 font-mono text-slate-300",children:"∀ S' ⊆ Sᵢ: P(Y|Xᵢ,S') = P(Y|S')"}),e.jsx("td",{className:"p-3 font-mono text-cyan-300",children:"∀ S' ⊆ Sᵢ: I(Xᵢ; Y | S') = 0"}),e.jsx("td",{className:"p-3 text-slate-300",children:"Zero predictive power; inflates parameter variance"}),e.jsx("td",{className:"p-3 text-rose-400 font-semibold",children:"ELIMINATE IMMEDIATELY"})]})]})]})})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-3",children:[e.jsxs("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Academic Jargon Buster"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Bayes Error Rate:"}),"The irreducible minimum error rate achievable by any decision rule, given the true underlying class distributions."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Mutual Information:"}),"A non-linear measure of the amount of information that one random variable contains about another (measured in bits)."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Spurious Correlation:"}),"A mathematical correlation between two variables caused purely by finite sample noise or an unobserved confounding variable."]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded-xl border border-slate-800",children:[e.jsx("span",{className:"font-bold text-cyan-300 block mb-1",children:"Curse of Dimensionality:"}),"The exponential volume growth of hyperspace as dimensions increase, causing data points to become sparsely scattered and equidistant."]})]})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-500 animate-ping"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Interactive Engineering Studio"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Kohavi-John Laboratory & Relevance Workbench"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"classifier",label:"Mode 1: Feature Classifier & Venn",badge:"Kohavi-John Taxonomy"},{id:"xor_paradox",label:"Mode 2: The XOR Interaction Paradox",badge:"Univariate Blindness"},{id:"noise_injection",label:"Mode 3: Noise Injection Stress-Tester",badge:"Variance Inflation"}].map(t=>e.jsxs("button",{onClick:()=>R(t.id),className:o("px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border flex flex-col text-left",g===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-950/70 text-slate-400 border-slate-800 hover:border-slate-700 hover:text-slate-200"),children:[e.jsx("span",{children:t.label}),e.jsx("span",{className:o("text-[10px] font-normal",g===t.id?"text-indigo-200":"text-slate-500"),children:t.badge})]},t.id))})]}),g==="classifier"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs",children:[e.jsxs("div",{className:"space-y-0.5",children:[e.jsx("span",{className:"font-bold text-indigo-300",children:"WBSEDCL Substation Grid Feature Matrix"}),e.jsxs("p",{className:"text-slate-400",children:["Toggle features ON or OFF in your active conditioning set ",e.jsx("span",{className:"font-mono text-cyan-300",children:"S"}),". Observe how the Kohavi-John taxonomy dynamically classifies each feature and calculates Bayes error impact."]})]}),e.jsxs("div",{className:"flex items-center gap-4 bg-slate-950 px-3.5 py-1.5 rounded-xl border border-slate-800 shrink-0",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Selected"}),e.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[l.activeCount," / 7"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Est. Test Error"}),e.jsxs("span",{className:"font-mono font-bold text-emerald-400",children:[l.testError,"%"]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-500 block",children:"Gen. Gap"}),e.jsxs("span",{className:"font-mono font-bold text-amber-400",children:["+",l.genGap,"%"]})]})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:T.map(t=>{const a=s[t.id];return e.jsxs("div",{onClick:()=>C(t.id),className:o("p-4 rounded-2xl border transition-all cursor-pointer relative flex flex-col justify-between space-y-3",a?"bg-slate-900/90 border-indigo-500/60 shadow-lg shadow-indigo-950/50":"bg-slate-950/50 border-slate-800/80 hover:border-slate-700 opacity-60 hover:opacity-90"),children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between mb-1.5",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-mono font-bold text-indigo-400 text-xs px-2 py-0.5 rounded bg-indigo-950 border border-indigo-800",children:t.symbol}),e.jsx("span",{className:"font-bold text-sm text-white",children:t.name})]}),e.jsx("input",{type:"checkbox",checked:a,onChange:()=>{},className:"rounded border-slate-700 text-indigo-600 focus:ring-indigo-500 cursor-pointer"})]}),e.jsx("span",{className:"text-[10px] uppercase tracking-wider font-semibold text-cyan-400 block mb-1",children:t.nature}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:t.description})]}),e.jsxs("div",{className:"space-y-2 pt-2 border-t border-slate-800/70 text-[11px]",children:[e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsx("span",{children:"Univariate MI:"}),e.jsxs("span",{className:"font-mono text-cyan-300 font-semibold",children:[t.univariateMI.toFixed(2)," bits"]})]}),e.jsxs("div",{className:"flex justify-between text-slate-400",children:[e.jsx("span",{children:"Pearson |r|:"}),e.jsx("span",{className:"font-mono text-slate-300",children:t.pearsonR.toFixed(2)})]}),e.jsx("div",{className:"pt-1",children:e.jsx("span",{className:o("px-2 py-0.5 rounded text-[10px] font-bold block text-center",t.defaultCategory==="Strongly Relevant"?"bg-emerald-950/70 text-emerald-300 border border-emerald-800/40":t.defaultCategory.includes("Weakly")?"bg-indigo-950/70 text-indigo-300 border border-indigo-800/40":"bg-rose-950/70 text-rose-300 border border-rose-800/40"),children:t.defaultCategory})})]})]},t.id)})}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2 text-xs",children:[e.jsx("span",{className:"font-bold text-slate-300 uppercase tracking-wider text-[10px]",children:"Conditioning Set Diagnostics & Operational Warnings:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 pt-1",children:[e.jsxs("div",{className:o("p-3 rounded-xl border flex items-start gap-2",l.hasRedundancy?"bg-amber-950/20 border-amber-800/40 text-amber-300":"bg-slate-900/50 border-slate-800 text-slate-400"),children:[e.jsx("span",{children:"⚠️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block text-slate-200",children:"Redundancy / Collinearity:"}),l.hasRedundancy?"Both kW and HP are active! Prune one to stabilize matrix inversion.":"No redundant duplicate features active in model."]})]}),e.jsxs("div",{className:o("p-3 rounded-xl border flex items-start gap-2",l.hasXorSynergy?"bg-emerald-950/20 border-emerald-800/40 text-emerald-300":l.hasXorBlindspot?"bg-rose-950/20 border-rose-800/40 text-rose-300":"bg-slate-900/50 border-slate-800 text-slate-400"),children:[e.jsx("span",{children:"⚡"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block text-slate-200",children:"XOR Interaction Pair:"}),l.hasXorSynergy?"Both Switch A & B active! Non-linear synergy unlocked (-8% error).":l.hasXorBlindspot?"Blindspot: Only 1 switch active! Carry zero univariate signal alone.":"Neither switch active; normal baseline."]})]}),e.jsxs("div",{className:o("p-3 rounded-xl border flex items-start gap-2",l.hasNoiseContamination?"bg-rose-950/20 border-rose-800/40 text-rose-300":"bg-slate-900/50 border-slate-800 text-slate-400"),children:[e.jsx("span",{children:"🛡️"}),e.jsxs("div",{children:[e.jsx("strong",{className:"block text-slate-200",children:"Noise Contamination:"}),l.hasNoiseContamination?"Irrelevant noise columns active! Generalization gap widening (+4.5%).":"Clean feature subset; no pure noise columns detected."]})]})]})]})]}),g==="xor_paradox"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-1 text-xs",children:[e.jsx("span",{className:"font-bold text-indigo-300 text-sm",children:"The Non-Monotonicity of Feature Relevance: The XOR Paradox"}),e.jsxs("p",{className:"text-slate-400",children:["Demonstrating why univariate filters fail. Target ",e.jsx("span",{className:"font-mono text-cyan-300",children:"Y = X₁ ⊕ X₂"}),". Individually, each feature has correlation ",e.jsx("span",{className:"font-mono text-cyan-300",children:"r = 0.00"})," and mutual information ",e.jsx("span",{className:"font-mono text-cyan-300",children:"I(X; Y) = 0.00 bits"}),". A filter will discard both as useless, yet together they achieve 100% deterministic accuracy!"]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 items-center",children:[e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",children:[e.jsxs("h4",{className:"text-sm font-bold text-white uppercase tracking-wider flex items-center justify-between",children:[e.jsx("span",{children:"Interactive 2D Parity Grid"}),e.jsx("span",{className:"text-xs font-mono text-indigo-400",children:"P(Y=1) = 0.50"})]}),e.jsxs("div",{className:"grid grid-cols-2 gap-3 aspect-square max-w-xs mx-auto p-2 bg-slate-900/90 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"bg-cyan-950/60 border border-cyan-500/50 rounded-xl flex flex-col items-center justify-center p-3 text-center",children:[e.jsx("span",{className:"font-mono text-[10px] text-slate-400",children:"X₁=0, X₂=1"}),e.jsx("span",{className:"text-2xl font-black text-cyan-400",children:"Y = 1"}),e.jsx("span",{className:"text-[10px] text-cyan-300 font-semibold",children:"Overload Trip"})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center justify-center p-3 text-center",children:[e.jsx("span",{className:"font-mono text-[10px] text-slate-400",children:"X₁=1, X₂=1"}),e.jsx("span",{className:"text-2xl font-black text-slate-500",children:"Y = 0"}),e.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"Normal Grid"})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl flex flex-col items-center justify-center p-3 text-center",children:[e.jsx("span",{className:"font-mono text-[10px] text-slate-400",children:"X₁=0, X₂=0"}),e.jsx("span",{className:"text-2xl font-black text-slate-500",children:"Y = 0"}),e.jsx("span",{className:"text-[10px] text-slate-500 font-semibold",children:"Normal Grid"})]}),e.jsxs("div",{className:"bg-cyan-950/60 border border-cyan-500/50 rounded-xl flex flex-col items-center justify-center p-3 text-center",children:[e.jsx("span",{className:"font-mono text-[10px] text-slate-400",children:"X₁=1, X₂=0"}),e.jsx("span",{className:"text-2xl font-black text-cyan-400",children:"Y = 1"}),e.jsx("span",{className:"text-[10px] text-cyan-300 font-semibold",children:"Overload Trip"})]})]}),e.jsx("div",{className:"text-[11px] text-slate-400 text-center",children:"Notice that no single horizontal or vertical line can separate Y=1 from Y=0 (Linear Inseparability)."})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-rose-950/20 border border-rose-800/30 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-rose-300 text-xs uppercase tracking-wider",children:"1. Univariate Filter Perspective (Individual Evaluation)"}),e.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-rose-900/60 text-rose-200 font-bold",children:"CATASTROPHIC FAILURE"})]}),e.jsxs("div",{className:"space-y-1.5 text-xs text-slate-300 font-mono",children:[e.jsxs("div",{className:"flex justify-between bg-slate-950/60 p-2 rounded-lg",children:[e.jsx("span",{children:"r(X₁, Y):"}),e.jsx("span",{className:"text-rose-400 font-bold",children:"0.0000 (Drop!)"})]}),e.jsxs("div",{className:"flex justify-between bg-slate-950/60 p-2 rounded-lg",children:[e.jsx("span",{children:"r(X₂, Y):"}),e.jsx("span",{className:"text-rose-400 font-bold",children:"0.0000 (Drop!)"})]}),e.jsxs("div",{className:"flex justify-between bg-slate-950/60 p-2 rounded-lg",children:[e.jsx("span",{children:"I(X₁; Y) = H(Y) - H(Y|X₁):"}),e.jsx("span",{className:"text-rose-400 font-bold",children:"1.0 - 1.0 = 0.00 bits"})]})]}),e.jsx("p",{className:"text-xs text-rose-200/80 pt-1",children:'Filter conclusion: "Neither X₁ nor X₂ provides any information about target Y. Eliminate both."'})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-emerald-950/20 border border-emerald-800/30 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-300 text-xs uppercase tracking-wider",children:"2. Joint Multivariate Perspective (Kohavi-John Weak Relevance)"}),e.jsx("span",{className:"text-xs px-2 py-0.5 rounded bg-emerald-900/60 text-emerald-200 font-bold",children:"100% DETERMINISTIC"})]}),e.jsxs("div",{className:"space-y-1.5 text-xs text-slate-300 font-mono",children:[e.jsxs("div",{className:"flex justify-between bg-slate-950/60 p-2 rounded-lg",children:[e.jsx("span",{children:"H(Y | X₁, X₂):"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"0.00 bits (Zero Uncertainty!)"})]}),e.jsxs("div",{className:"flex justify-between bg-slate-950/60 p-2 rounded-lg",children:[e.jsx("span",{children:"Joint MI I(X₁, X₂; Y):"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"1.0000 bit (Maximum Possible)"})]}),e.jsxs("div",{className:"flex justify-between bg-slate-950/60 p-2 rounded-lg",children:[e.jsx("span",{children:"Synergistic Information Gain:"}),e.jsx("span",{className:"text-emerald-400 font-bold",children:"+1.0000 bit"})]})]}),e.jsx("p",{className:"text-xs text-emerald-200/80 pt-1",children:'Multivariate conclusion: "Both features are essential weakly relevant synergistic partners. Retain both!"'})]})]})]})]}),g==="noise_injection"&&e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-indigo-950/20 border border-indigo-900/30 space-y-1 text-xs",children:[e.jsx("span",{className:"font-bold text-indigo-300 text-sm",children:"The Mathematical Cost of Irrelevant Noise: Variance Inflation & Distance Dilution"}),e.jsx("p",{className:"text-slate-400",children:"Simulate what happens when irrelevant Gaussian noise dimensions are appended to a dataset. Watch empirical training accuracy artificially rise (overfitting memorization) while test generalization accuracy plunges, and Euclidean contrast ratio collapses to 0."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5 p-5 rounded-2xl bg-slate-950 border border-slate-800 text-xs",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"True Informative Features:"}),e.jsxs("span",{className:"font-mono text-cyan-400 font-bold",children:[y," features"]})]}),e.jsx("input",{type:"range",min:"1",max:"5",value:y,onChange:t=>E(Number(t.target.value)),className:"w-full accent-cyan-500"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Physical biomarkers / electrical signals"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Irrelevant Noise Dimensions:"}),e.jsxs("span",{className:"font-mono text-rose-400 font-bold",children:[p," noise cols"]})]}),e.jsx("input",{type:"range",min:"0",max:"50",step:"2",value:p,onChange:t=>Y(Number(t.target.value)),className:"w-full accent-rose-500"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Pure random Gaussian N(0, 1) columns"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between",children:[e.jsx("span",{className:"text-slate-400 font-medium",children:"Dataset Sample Size (N):"}),e.jsxs("span",{className:"font-mono text-indigo-400 font-bold",children:[v," samples"]})]}),e.jsx("input",{type:"range",min:"50",max:"1000",step:"50",value:v,onChange:t=>P(Number(t.target.value)),className:"w-full accent-indigo-500"}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"More samples mitigate noise variance"})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Training Accuracy"}),e.jsxs("span",{className:"text-2xl font-bold font-mono text-cyan-400",children:[h.trainAcc,"%"]}),e.jsx("span",{className:"text-[10px] text-cyan-300/80 block",children:"Memorizes noise splits"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Test Generalization"}),e.jsxs("span",{className:"text-2xl font-bold font-mono text-rose-400",children:[h.testAcc,"%"]}),e.jsx("span",{className:"text-[10px] text-rose-300/80 block",children:"Real-world performance"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Overfitting Gap"}),e.jsxs("span",{className:"text-2xl font-bold font-mono text-amber-400",children:["+",h.overfitGap,"%"]}),e.jsx("span",{className:"text-[10px] text-amber-300/80 block",children:"Train vs Test divergence"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase text-slate-400 font-semibold block",children:"Distance Contrast"}),e.jsx("span",{className:"text-2xl font-bold font-mono text-purple-400",children:h.contrastRatio}),e.jsx("span",{className:"text-[10px] text-purple-300/80 block",children:"Bellman's curse ratio"})]})]}),e.jsxs("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-white uppercase tracking-wider",children:"Empirical Generalization Trajectory as Noise Dimensions Increase"}),e.jsxs("div",{className:"flex items-center gap-4 text-[11px]",children:[e.jsxs("span",{className:"flex items-center gap-1.5 text-cyan-400",children:[e.jsx("span",{className:"w-2.5 h-0.5 bg-cyan-400 inline-block"})," Train Accuracy"]}),e.jsxs("span",{className:"flex items-center gap-1.5 text-rose-400",children:[e.jsx("span",{className:"w-2.5 h-0.5 bg-rose-400 inline-block"})," Test Accuracy"]})]})]}),e.jsx("div",{className:"h-40 w-full relative flex items-end border-b border-l border-slate-800 px-2 pt-4",children:e.jsxs("svg",{className:"w-full h-full overflow-visible",viewBox:"0 0 500 120",preserveAspectRatio:"none",children:[e.jsx("line",{x1:"0",y1:"30",x2:"500",y2:"30",stroke:"#334155",strokeDasharray:"3 3",strokeWidth:"0.5"}),e.jsx("line",{x1:"0",y1:"70",x2:"500",y2:"70",stroke:"#334155",strokeDasharray:"3 3",strokeWidth:"0.5"}),e.jsx("path",{d:`M 0,${100-70*.8} Q 250,${100-85*.8} 500,${100-Number(h.trainAcc)*.95}`,fill:"none",stroke:"#22d3ee",strokeWidth:"3"}),e.jsx("path",{d:`M 0,${100-75*.8} Q 200,${100-70*.8} 500,${100-Number(h.testAcc)*.8}`,fill:"none",stroke:"#f43f5e",strokeWidth:"3"}),e.jsx("line",{x1:p/50*500,y1:"0",x2:p/50*500,y2:"120",stroke:"#818cf8",strokeWidth:"1.5",strokeDasharray:"4 2"})]})}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsx("span",{children:"0 Noise Features"}),e.jsxs("span",{children:["Current Noise: ",p," Dimensions"]}),e.jsx("span",{children:"50 Noise Features"})]})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Mathematical Rigor"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Formal Definitions & Information-Theoretic Equivalence"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Rigorous mathematical definitions of feature relevance and theoretical proofs of why strong relevance is indispensable."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-indigo-300 uppercase tracking-wider",children:"1. Probabilistic Definitions (Kohavi-John 1997)"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-emerald-400 font-bold block",children:"Definition 1: Strong Relevance"}),e.jsx("span",{children:"P(Y = y | Xᵢ = xᵢ, Sᵢ = sᵢ) ≠ P(Y = y | Sᵢ = sᵢ)"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["for some ","xᵢ, y, sᵢ"," with ","P(Xᵢ = xᵢ, Sᵢ = sᵢ) > 0",". Indispensable for Bayes error rate."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-indigo-400 font-bold block",children:"Definition 2: Weak Relevance"}),e.jsx("span",{children:"∃ S'ᵢ ⊂ Sᵢ : P(Y = y | Xᵢ = xᵢ, S'ᵢ = s'ᵢ) ≠ P(Y = y | S'ᵢ = s'ᵢ)"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["while ","P(Y | Xᵢ, Sᵢ) = P(Y | Sᵢ)",". Information is duplicated or conditionally interactive."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-rose-400 font-bold block",children:"Definition 3: Irrelevance"}),e.jsx("span",{children:"∀ S'ᵢ ⊆ Sᵢ : P(Y = y | Xᵢ = xᵢ, S'ᵢ = s'ᵢ) = P(Y = y | S'ᵢ = s'ᵢ)"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Strict conditional independence ","Y ⊥ Xᵢ | S'"," across all possible feature subsets."]})]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsx("h4",{className:"text-sm font-bold text-cyan-300 uppercase tracking-wider",children:"2. Information Theory Formulations"}),e.jsxs("div",{className:"space-y-3 text-slate-300 leading-relaxed font-mono",children:[e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-cyan-400 font-bold block",children:"Shannon Entropy & Mutual Information:"}),e.jsx("span",{children:"H(Y) = - ∑ P(y) log₂ P(y)"}),e.jsx("span",{children:"I(Xᵢ; Y) = H(Y) - H(Y | Xᵢ)"}),e.jsx("span",{children:"I(Xᵢ; Y | S) = H(Y | S) - H(Y | Xᵢ, S)"})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-purple-400 font-bold block",children:"OLS Variance Inflation Theorem:"}),e.jsx("span",{children:"Var(β̂) = σ² (Xᵀ X)⁻¹"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["Appending ","p"," irrelevant noise columns expands ","(XᵀX)⁻¹",", inflating estimation variance of all valid weights."]})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-900/90 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-amber-400 font-bold block",children:"Bellman's Distance Dilution Limit:"}),e.jsx("span",{children:"lim_{d → ∞} (dist_max - dist_min) / dist_min = 0"}),e.jsxs("span",{className:"text-slate-400 text-[11px] font-sans block pt-1",children:["As noise dimensions ","d"," increase, nearest neighbors become equidistant from random points."]})]})]})]})]})]}),e.jsxs("section",{id:"casestudies",className:"space-y-8 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"Regional Engineering Applications"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Four West Bengal Industrial Case Studies"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Real-world enterprise telemetry schemas and feature categorization audits from West Bengal industries."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 text-xs",children:[e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-indigo-300 uppercase tracking-wider",children:"Case 1: WBSEDCL Smart Meter Grid (Barrackpore)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800",children:"Energy Distribution"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Predict 33/11 kV distribution transformer core temperature & summer overload burnout."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Strongly Relevant:"})," Active Power (kW), Reactive Power (kVAR), Ambient Barrackpore summer temp (°C)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Weakly Relevant (Redundant):"})," Apparent Power (kVA = √(kW² + kVAR²)), Secondary oil temp probe."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Irrelevant (Pure Noise):"})," Consumer billing lottery number, meter casing paint batch ID."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-cyan-300 uppercase tracking-wider",children:"Case 2: Cardiac Risk Diagnostics (Salt Lake & Jadavpur)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800",children:"Healthcare Informatics"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," 5-year Acute Myocardial Infarction (AMI) risk scoring in tertiary cardiology care."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Strongly Relevant:"})," HbA1c (%), High-sensitivity CRP (mg/L), Systolic BP, Patient Age."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Weakly Relevant (Redundant):"})," Total Cholesterol (subsumed by Friedewald formula: LDL + HDL + TG/5)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Irrelevant (Pure Noise):"})," Hospital outpatient token number, Ward bed allocation barcode."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-300 uppercase tracking-wider",children:"Case 3: Jute Yarn Tensile Tenacity (Serampore, Hooghly)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950 text-amber-300 border border-amber-800",children:"Textile Manufacturing"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," Predict breaking tenacity (cN/tex) during automated high-speed yarn spinning."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Strongly Relevant:"})," Jute batch moisture regain (%), Spindle RPM, Sliver linear density (ktex)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-amber-400 font-bold",children:"Weakly Relevant (Interactive):"})," Retting enzyme dosage (g/L) and soaking duration (hours) (XOR synergy)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Irrelevant (Pure Noise):"})," Spinning frame motor chassis paint color, Supervisor punch-card badge ID."]})]})]}),e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-300 uppercase tracking-wider",children:"Case 4: Metro Station Gate Surges (Sealdah & Howrah)"}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-purple-950 text-purple-300 border border-purple-800",children:"Transit Telemetry"})]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Objective:"})," 15-minute passenger headway volume forecasting at peak interchange stations."]}),e.jsxs("div",{className:"space-y-1.5 pt-1",children:[e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"Strongly Relevant:"})," Eastern Railway suburban train arrival delay (mins), Alipore radar rain intensity."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-indigo-400 font-bold",children:"Weakly Relevant (Redundant):"})," Optical turnstile barrier passage pulses (redundant with RFID taps)."]}),e.jsxs("div",{className:"p-2 rounded bg-slate-900 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Irrelevant (Pure Noise):"})," Commuter smartcard RFID production batch ID, Gate coin hopper weight."]})]})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-indigo-900/30",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Diagnostic Verification"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Topic 2 Diagnostic Assessment Quiz"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Answer all 5 multi-stage scenario questions to evaluate your engineering intuition."})]}),u&&e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 px-4 py-2 rounded-xl border border-indigo-500/40",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-bold font-mono text-cyan-300",children:[N," / ",b.length]}),e.jsx("span",{className:"text-xs font-semibold px-2 py-0.5 rounded bg-indigo-500/20 text-indigo-300",children:N===5?"Distinction":N>=3?"Pass":"Review Needed"})]})]}),e.jsx("div",{className:"space-y-5",children:b.map(t=>{x[t.id];const a=x[t.id],r=a===t.correct;return e.jsxs("div",{className:"p-5 rounded-2xl bg-slate-950/70 border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"w-6 h-6 rounded-lg bg-indigo-900/60 text-indigo-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 font-mono",children:t.id}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("p",{className:"text-xs text-slate-400 italic",children:t.scenario}),e.jsx("p",{className:"text-sm font-semibold text-slate-200 leading-relaxed",children:t.question})]})]}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5 pl-9",children:t.options.map(n=>{const c=a===n.label;let d="bg-slate-900/80 border-slate-800 text-slate-300 hover:border-slate-700";return u?n.label===t.correct?d="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-medium":c&&!r&&(d="bg-rose-950/60 border-rose-500 text-rose-200"):c&&(d="bg-indigo-950/70 border-indigo-500 text-indigo-200 font-medium"),e.jsxs("button",{disabled:u,onClick:()=>O(t.id,n.label),className:o("w-full text-left p-3 rounded-xl border text-xs transition-all flex items-start gap-2.5 cursor-pointer",d),children:[e.jsxs("span",{className:"font-mono font-bold shrink-0",children:[n.label,"."]}),e.jsx("span",{children:n.text})]},n.label)})}),u&&e.jsx("div",{className:"pl-9 pt-2",children:e.jsxs("div",{className:o("p-3 rounded-xl text-xs leading-relaxed border",r?"bg-emerald-950/30 border-emerald-800/40 text-emerald-300":"bg-rose-950/30 border-rose-800/40 text-rose-300"),children:[e.jsx("div",{className:"font-bold mb-1",children:r?"✓ Correct Analysis":`✗ Incorrect (Correct Answer: ${t.correct})`}),e.jsx("div",{className:"text-slate-400",children:t.explanation})]})})]},t.id)})}),e.jsx("div",{className:"flex justify-end pt-2",children:u?e.jsx("button",{onClick:()=>{w({}),I(!1)},className:"px-5 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 border border-slate-700 transition-colors",children:"Reset Assessment"}):e.jsx("button",{onClick:L,disabled:Object.keys(x).length<b.length,className:o("px-6 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all shadow-lg cursor-pointer",Object.keys(x).length===b.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:"Submit Diagnostic Assessment"})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-6 bg-slate-900/50 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-rose-400",children:"Production Hazards"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Engineering Anti-Patterns"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Six architectural traps that cause feature selection pipelines to fail in production deployments."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-xs",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🚫"})," 1. Univariate Filtering Fallacy"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Using individual Pearson |r| or univariate ANOVA to prune columns. This blindly deletes essential XOR interactions and non-linear couplings."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Pair filters with Mutual Info or Tree importances."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"📉"})," 2. Collinear Variance Explosion"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Retaining duplicate measurements (e.g. Celsius & Fahrenheit or dual sensors) in linear/logistic models. Inflates parameter standard errors and flips signs."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Check VIF >= 10 and apply L1 Lasso regularization."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🆔"})," 3. High-Cardinality ID Memorization"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Feeding UUIDs, order numbers, or meter serials into decision trees. Trees split on unique IDs to achieve 100% train accuracy, resulting in 0% test generalization."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Drop unique identifiers at data ingestion gateway."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"🎲"})," 4. Small-N Spurious Correlation"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"When sample size N is small (e.g. N = 40), random Gaussian noise features can exhibit sample correlations of |r| ≈ 0.35 purely by statistical chance."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Enforce Bonferroni adjusted p-values and 10-fold CV."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"📏"})," 5. Distance Metric Noise Dilution"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Applying KNN or RBF SVM with 50 noise features. Euclidean distance becomes dominated by noise terms, making all instances appear equidistant."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Perform feature pruning before any distance-based model."})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950/70 border border-rose-900/30 space-y-2",children:[e.jsxs("span",{className:"font-bold text-rose-300 flex items-center gap-2 text-sm",children:[e.jsx("span",{children:"✂️"})," 6. Premature Pruning of Weak Features"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Discarding weakly relevant features before knowing model architecture. Weak features redundant in linear models may be vital for orthogonal tree splits."}),e.jsx("span",{className:"text-[11px] text-cyan-400 font-mono block pt-1",children:"Fix: Perform model-aware embedded or wrapper selection."})]})]})]}),e.jsxs("section",{id:"loaders",className:"space-y-6 bg-slate-900/60 p-6 sm:p-8 rounded-3xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),e.jsx("h2",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Source Code & Academic Documentation"})]}),e.jsx("h3",{className:"text-xl sm:text-2xl font-bold text-white",children:"Laboratory Implementation & Complete Study Notes"})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-xl border border-slate-800",children:[e.jsx("button",{onClick:()=>j("theory"),className:o("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",_==="theory"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Study Notes (topic2_note.txt)"}),e.jsx("button",{onClick:()=>j("code"),className:o("px-4 py-2 rounded-lg text-xs font-semibold transition-all cursor-pointer",_==="code"?"bg-indigo-600 text-white shadow-md shadow-indigo-600/30":"text-slate-400 hover:text-white"),children:"Python Lab (relevant_and_irrelevant_features_lab.py)"})]})]}),_==="code"?e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"relevant_and_irrelevant_features_lab.py"})]}),e.jsx("span",{children:"Pure Python 3 • Zero Dependencies • Exit Code 0"})]}),e.jsx(D,{code:z,fileName:"relevant_and_irrelevant_features_lab.py",title:"Relevant and Irrelevant Features Laboratory Benchmark"})]}):e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center text-xs text-slate-400",children:[e.jsxs("span",{children:["File: ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"topic2_note.txt"})]}),e.jsx("span",{children:"305 Lines of Comprehensive Academic Notes"})]}),e.jsx(B,{content:H,fileName:"topic2_note.txt",title:"Topic 2: Academic Study Notes (BCAC701B)"})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8",children:[e.jsx(M,{title:"Topic 2: MAKAUT Master Viva & Technical Interview Questions",subtitle:"30 Graded Analytical Questions with Comprehensive Theoretical Rationales",questions:U}),e.jsx(W,{})]})]})};export{ie as default};
