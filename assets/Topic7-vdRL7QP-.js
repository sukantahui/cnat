import{b as r,j as e,bl as l}from"./vendor-react-core-B-R9HE-Z.js";import{P as we}from"./PythonFileLoader-DZ61U3Y_.js";import{F as je}from"./FAQTemplate-16IfroqC.js";import{P as Te}from"./PlainTextPrint-C6NaUtnE.js";import{T as Se}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const Ae=`"""
=============================================================================
TOPIC 7: TESTING DATASET LABORATORY SIMULATOR
Module: Feature Selection and Training & Testing Data
Course: Introduction to Machine Learning (BCAC701B) - MAKAUT & Premier Engineering Syllabi
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
=============================================================================

PURE PYTHON IMPLEMENTATION - ZERO EXTERNAL DEPENDENCIES (NO NUMPY / SCIKIT-LEARN)
This production laboratory engine simulates:
1. Unbiased Generalization Risk Estimation & Wald 95% Confidence Intervals.
2. The Test Set Peeking Paradox: Demonstrating how testing M candidate models on a 
   fixed test set inflates apparent maximum accuracy (Multiple Testing Fallacy).
3. Two-Model Statistical Significance Z-Test: Calculating whether an observed test 
   accuracy delta between Model A and Model B is statistically significant.
4. Out-of-Distribution (OOD) Operational Stress-Testing: Measuring test metric 
   degradation under controlled covariate shift (P_test(X) != P_train(X)).
5. Regional Industrial Case Benchmarks across West Bengal (CESC, CCU Airport, Bandhan Bank).
=============================================================================
"""

import math
import random
from typing import List, Tuple, Dict, Any


class StatisticalHypothesisEngine:
    """Pure Python statistical test and confidence interval computations."""

    @staticmethod
    def normal_cdf(z: float) -> float:
        """Approximates standard normal cumulative distribution function (Abramowitz & Stegun)."""
        return 0.5 * (1.0 + math.erf(z / math.sqrt(2.0)))

    @staticmethod
    def wald_confidence_interval(p_hat: float, n: int, confidence: float = 0.95) -> Tuple[float, float, float]:
        """
        Computes the Wald confidence interval for binomial test accuracy:
        CI = p_hat +/- z * sqrt(p_hat * (1 - p_hat) / n)
        """
        # Critical z-values: 90% -> 1.645, 95% -> 1.960, 99% -> 2.576
        z_map = {0.90: 1.645, 0.95: 1.960, 0.99: 2.576}
        z = z_map.get(confidence, 1.960)

        std_err = math.sqrt(max(1e-9, p_hat * (1.0 - p_hat) / n))
        margin_of_error = z * std_err
        lower = max(0.0, p_hat - margin_of_error)
        upper = min(1.0, p_hat + margin_of_error)
        return lower, upper, margin_of_error

    @staticmethod
    def two_proportion_z_test(p1: float, n1: int, p2: float, n2: int) -> Tuple[float, float, bool]:
        """
        Two-sample z-test for comparing test accuracies of two competing models:
        H0: p1 == p2 vs H1: p1 != p2
        """
        x1 = round(p1 * n1)
        x2 = round(p2 * n2)
        p_pooled = (x1 + x2) / (n1 + n2)
        se_pooled = math.sqrt(max(1e-9, p_pooled * (1.0 - p_pooled) * (1.0 / n1 + 1.0 / n2)))
        z_stat = (p1 - p2) / se_pooled
        # Two-tailed p-value
        p_value = 2.0 * (1.0 - StatisticalHypothesisEngine.normal_cdf(abs(z_stat)))
        is_significant = p_value < 0.05
        return z_stat, p_value, is_significant


class TestSetSimulator:
    """Simulates test set behavior, peeking hazards, and covariate shifts."""

    @staticmethod
    def simulate_test_peeking_fallacy(n_test: int = 100, n_candidate_models: int = 50, seed: int = 42) -> Dict[str, Any]:
        """
        Simulates M completely random models (each having TRUE accuracy = 50.0%).
        Demonstrates how evaluating all M models on the SAME fixed test set causes 
        the maximum observed test accuracy to falsely appear superior due to selection bias.
        """
        rng = random.Random(seed)
        # Ground truth test labels: 50% ones, 50% zeros
        true_labels = [rng.choice([0, 1]) for _ in range(n_test)]

        model_accuracies = []
        for _ in range(n_candidate_models):
            # Model makes random 50/50 guesses
            preds = [rng.choice([0, 1]) for _ in range(n_test)]
            correct = sum(1 for p, y in zip(preds, true_labels) if p == y)
            acc = correct / n_test
            model_accuracies.append(acc)

        max_observed_acc = max(model_accuracies)
        min_observed_acc = min(model_accuracies)
        avg_acc = sum(model_accuracies) / len(model_accuracies)

        # Theoretical expected maximum for M normal random variables
        # Approx: mu + sigma * sqrt(2 * ln(M))
        sigma_null = math.sqrt(0.25 / n_test)
        theoretical_max_approx = 0.50 + sigma_null * math.sqrt(2.0 * math.log(max(2, n_candidate_models)))

        return {
            "n_test": n_test,
            "n_models_evaluated": n_candidate_models,
            "true_null_accuracy": 0.50,
            "average_test_accuracy": round(avg_acc, 4),
            "max_apparent_test_accuracy": round(max_observed_acc, 4),
            "min_apparent_test_accuracy": round(min_observed_acc, 4),
            "theoretical_max_approx": round(theoretical_max_approx, 4),
            "spurious_optimism_delta": round(max_observed_acc - 0.50, 4)
        }

    @staticmethod
    def simulate_covariate_shift(n_samples: int = 500, shift_magnitude: float = 1.8, seed: int = 123) -> Dict[str, Any]:
        """
        Simulates model evaluated on clean in-distribution data vs out-of-distribution (OOD)
        shifted data where tail non-linearities and label boundary shifts degrade performance.
        """
        rng = random.Random(seed)
        # Model's linear decision weights: w1*x1 + w2*x2 + b
        w1, w2 = 1.5, -1.2
        b = 0.1

        # Clean In-Distribution Test Set (P_test == P_train)
        in_dist_correct = 0
        for _ in range(n_samples):
            x1 = rng.gauss(0.0, 1.0)
            x2 = rng.gauss(0.0, 1.0)
            # In-distribution true signal has mild noise
            latent = w1 * x1 + w2 * x2 + b + rng.gauss(0.0, 0.4)
            true_y = 1 if latent >= 0.0 else 0
            pred_y = 1 if (w1 * x1 + w2 * x2 + b) >= 0.0 else 0
            if pred_y == true_y:
                in_dist_correct += 1
        in_dist_acc = in_dist_correct / n_samples

        # Shifted OOD Test Set: Mean shift + higher-order non-linear warp in tails
        ood_correct = 0
        for _ in range(n_samples):
            x1 = rng.gauss(shift_magnitude, 1.4)
            x2 = rng.gauss(-shift_magnitude * 0.8, 1.4)
            # Severe tail non-linearity that linear model never observed during training
            latent_ood = w1 * x1 + w2 * x2 + b - 0.45 * (x1 ** 2) + rng.gauss(0.0, 0.6)
            true_y = 1 if latent_ood >= 0.0 else 0
            pred_y = 1 if (w1 * x1 + w2 * x2 + b) >= 0.0 else 0
            if pred_y == true_y:
                ood_correct += 1
        ood_acc = ood_correct / n_samples

        return {
            "shift_magnitude": shift_magnitude,
            "in_distribution_test_acc": round(in_dist_acc, 4),
            "ood_test_acc": round(ood_acc, 4),
            "performance_drop_pct": round((in_dist_acc - ood_acc) * 100, 2)
        }


def run_test_sample_size_precision_sweep() -> List[Dict[str, Any]]:
    """
    Computes Wald 95% Confidence Intervals across varying test set sizes N_test
    for a fixed observed test accuracy of 88.0%.
    """
    p_hat = 0.88
    sample_sizes = [30, 50, 100, 250, 500, 1000, 2500]
    results = []

    for n in sample_sizes:
        low, high, me = StatisticalHypothesisEngine.wald_confidence_interval(p_hat, n, confidence=0.95)
        results.append({
            "n_test": n,
            "observed_acc_pct": round(p_hat * 100, 1),
            "margin_of_error_pct": round(me * 100, 2),
            "ci_95_lower_pct": round(low * 100, 2),
            "ci_95_upper_pct": round(high * 100, 2),
            "interval_width_pct": round((high - low) * 100, 2)
        })

    return results


def run_model_comparison_significance_lab() -> List[Dict[str, Any]]:
    """
    Evaluates whether Model A (88.0%) is statistically significantly superior 
    to Model B (85.0%) across different test set sample sizes.
    """
    pA = 0.88
    pB = 0.85
    test_sizes = [50, 150, 300, 600, 1200, 2500]
    results = []

    for n in test_sizes:
        z, p_val, sig = StatisticalHypothesisEngine.two_proportion_z_test(pA, n, pB, n)
        results.append({
            "n_test": n,
            "model_A_acc": f"{pA*100:.1f}%",
            "model_B_acc": f"{pB*100:.1f}%",
            "delta": f"{(pA - pB)*100:.1f}%",
            "z_statistic": round(z, 3),
            "p_value": round(p_val, 4),
            "statistically_significant": "YES (p < 0.05) ✔" if sig else "NO (Indistinguishable) ❌"
        })

    return results


def run_west_bengal_industrial_benchmarks():
    """Prints four authentic West Bengal testing dataset case studies."""
    print("\\n" + "=" * 80)
    print("WEST BENGAL INDUSTRIAL TESTING DATASET CASE STUDIES")
    print("=" * 80)

    cases = [
        {
            "enterprise": "Calcutta Electric Supply Corporation (CESC Ltd.)",
            "system": "Smart Meter Automated Anomaly & Power Theft Sentry",
            "holdout_vault": "50,000 smart meters across Central & North Kolkata",
            "governance_rule": "Strict Blind Test Vault: The test dataset is managed by an independent audit committee. Data scientists submit compiled inference containers; test labels are never shared."
        },
        {
            "enterprise": "Netaji Subhash Chandra Bose International Airport (CCU)",
            "system": "Dual-Energy X-Ray Carry-On Baggage Contraband Detection",
            "holdout_vault": "12,000 passenger baggage scans with synthetic threat insertions",
            "governance_rule": "One-Shot Evaluation Protocol: Vendor algorithms are evaluated exactly once on the holdout benchmark. Repeated re-testing is prohibited to prevent inverse-engineering of the test scans."
        },
        {
            "enterprise": "Bandhan Bank Micro-Banking Division (Headquarters: Salt Lake)",
            "system": "Out-of-Time (OOT) Credit Risk Assessment for MSME Loans",
            "holdout_vault": "25,000 loan disbursement cycles from Q4 (October - December)",
            "governance_rule": "Temporal Out-of-Time Holdout: Models trained on Q1-Q3 data are tested strictly on subsequent Q4 economic cycles to verify macroeconomic shift resilience."
        },
        {
            "enterprise": "Swiggy / Zomato Kolkata Regional Hub",
            "system": "Durga Puja Night Delivery Time (SLA) Prediction Engine",
            "holdout_vault": "45,000 delivery dispatches during Saptami through Dashami nights",
            "governance_rule": "Extreme Operational Stress Test: Dedicated holdout partition during maximum pandal pedestrian road closures to measure catastrophic boundary latency."
        }
    ]

    for i, c in enumerate(cases, 1):
        print(f"\\n[Case {i}] {c['enterprise']}")
        print(f"  • Production System:  {c['system']}")
        print(f"  • Test Holdout Vault: {c['holdout_vault']}")
        print(f"  • Governance Rule:    {c['governance_rule']}")


def main():
    print("=" * 80)
    print("CODER & ACCOTAX - ADVANCED MACHINE LEARNING LAB (TOPIC 7)")
    print("TESTING DATASET: UNBIASED GENERALIZATION, PEEKING HAZARDS & POWER")
    print("Course: BCAC701B | Instructor: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    # 1. Sample Size & Wald Confidence Interval Sweep
    print("\\n[PART 1] WALD 95% CONFIDENCE INTERVALS VS TEST SET SAMPLE SIZE (N_test)")
    print("-" * 80)
    print(f"{'N_Test':<8} | {'Obs Acc':<10} | {'Margin of Error':<16} | {'95% CI Range':<22} | {'Width':<10}")
    print("-" * 80)
    sweep = run_test_sample_size_precision_sweep()
    for row in sweep:
        ci_str = f"[{row['ci_95_lower_pct']}%, {row['ci_95_upper_pct']}%]"
        print(f"{row['n_test']:<8} | {row['observed_acc_pct']}%{'':<4} | ±{row['margin_of_error_pct']}%{'':<9} | {ci_str:<22} | {row['interval_width_pct']}%")

    # 2. Model Comparison Statistical Significance
    print("\\n[PART 2] TWO-MODEL SIGNIFICANCE Z-TEST: MODEL A (88%) VS MODEL B (85%)")
    print("-" * 80)
    print(f"{'N_Test':<8} | {'Model A':<10} | {'Model B':<10} | {'Delta':<8} | {'z-stat':<8} | {'p-value':<10} | {'Significant?'}")
    print("-" * 80)
    sig_results = run_model_comparison_significance_lab()
    for row in sig_results:
        print(f"{row['n_test']:<8} | {row['model_A_acc']:<10} | {row['model_B_acc']:<10} | {row['delta']:<8} | {row['z_statistic']:<8} | {row['p_value']:<10} | {row['statistically_significant']}")

    # 3. Test Set Peeking Paradox Simulation
    print("\\n[PART 3] THE TEST SET PEEKING PARADOX (EVALUATING M DUMMY MODELS ON FIXED TEST SET)")
    print("-" * 80)
    peeking = TestSetSimulator.simulate_test_peeking_fallacy(n_test=100, n_candidate_models=50)
    print(f"Fixed Test Set Size (N_test):              {peeking['n_test']}")
    print(f"Number of Random Candidate Models (M):    {peeking['n_models_evaluated']}")
    print(f"True Underlying Model Accuracy (Null H0): {peeking['true_null_accuracy']*100:.1f}%")
    print(f"Average Observed Test Accuracy:           {peeking['average_test_accuracy']*100:.2f}%")
    print(f"MAXIMUM Observed Test Accuracy:           {peeking['max_apparent_test_accuracy']*100:.2f}% (Spurious Best Performer)")
    print(f"Spurious Optimism Delta:                  +{peeking['spurious_optimism_delta']*100:.2f}% (Inflation from Peeking)")

    # 4. Out-of-Distribution Shift Stress-Test
    print("\\n[PART 4] OUT-OF-DISTRIBUTION (OOD) OPERATIONAL STRESS-TEST")
    print("-" * 80)
    ood = TestSetSimulator.simulate_covariate_shift(n_samples=500, shift_magnitude=1.8)
    print(f"In-Distribution Test Accuracy:            {ood['in_distribution_test_acc']*100:.2f}%")
    print(f"Out-of-Distribution Shifted Test Acc:     {ood['ood_test_acc']*100:.2f}%")
    print(f"Performance Collapse Delta:               -{ood['performance_drop_pct']}% under severe covariate shift")

    # 5. Regional Industrial Case Studies
    run_west_bengal_industrial_benchmarks()

    print("\\n" + "=" * 80)
    print("LABORATORY SIMULATION COMPLETED SUCCESSFULLY (EXIT CODE 0)")
    print("=" * 80)


if __name__ == "__main__":
    main()
`,Ce=`================================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE LECTURE REFERENCE
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Feature Selection and Training & Testing Data
Topic 7: Testing Dataset (Unbiased Generalization, Statistical Power & Governance Vault)
Author: Sukanta Hui | Senior Faculty, Coder & AccoTax | Barrackpore, West Bengal, India
Target Audience: BCA / MCA / B.Tech Computer Science & Data Science Students
================================================================================

1. EXECUTIVE ACADEMIC OVERVIEW & SYLLABUS MAPPING
--------------------------------------------------------------------------------
Under the MAKAUT BCAC701B syllabus, the "Testing Dataset" serves as the final, 
sacrosanct benchmark in the machine learning lifecycle. While the training dataset 
estimates model parameters and the validation dataset guides model selection and 
hyperparameter tuning, the testing dataset has exactly ONE fundamental purpose:
to provide an unbiased point estimate and confidence interval of real-world 
generalization performance.

Core Academic Thesis:
A model evaluated on data it has directly or indirectly seen is a scientifically 
compromised artifact. The testing dataset D_test must be treated as a cryptographic 
vault: kept unpolluted by feature engineering, scaling statistics, hyperparameter 
iterations, or early stopping checks. Compromising the testing dataset invalidates 
the Central Limit Theorem guarantees underpinning statistical error bounds.

Key Curriculum Learning Objectives:
1. Formulate the mathematical proof that empirical test error is an unbiased 
   estimator of true generalization risk: E[R_hat_test] = R_true.
2. Calculate Wald and Wilson Score Confidence Intervals for binomial test accuracy: 
   CI = p_hat +/- z * sqrt(p_hat * (1 - p_hat) / N_test).
3. Demonstrate why test set sample size N_test dictates statistical power and 
   the ability to discern whether Model A genuinely outperforms Model B.
4. Expose the "Test Peeking Paradox" (Multiple Hypothesis Testing Fallacy): prove 
   how repeated evaluations on D_test mathematically inflate apparent performance.
5. Implement governance protocols: Blind holdout vaults, Out-of-Time (OOT) partitions, 
   and Out-of-Distribution (OOD) stress-testing across West Bengal enterprise systems.


--------------------------------------------------------------------------------
2. MATHEMATICAL FOUNDATIONS: UNBIASED GENERALIZATION RISK ESTIMATION
--------------------------------------------------------------------------------
Let the instance space be X and label space be Y. Let P(X, Y) be the true, unknown 
data-generating distribution. Let h*: X -> Y denote the final, frozen hypothesis 
selected after training and validation.

Definition: The Testing Dataset D_test consists of N_test ordered pairs:
    D_test = { (x_1, y_1), (x_2, y_2), ..., (x_{N_test}, y_{N_test}) } ~ i.i.d. P(X, Y)

Constraint: D_test intersect D_train = empty set, and D_test intersect D_val = empty set.

A. Unbiased Risk Estimation Proof:
The true risk (expected loss) of hypothesis h* is:
    R_true(h*) = E_{(x,y) ~ P}[ L(h*(x), y) ]

The empirical test risk over D_test is:
    R_hat_test(h*) = (1 / N_test) * sum_{k=1}^{N_test} L(h*(x_k), y_k)

Taking the mathematical expectation over all possible random draws of D_test:
    E_{D_test}[ R_hat_test(h*) ] = E_{D_test}[ (1 / N_test) * sum_{k=1}^{N_test} L(h*(x_k), y_k) ]
                                 = (1 / N_test) * sum_{k=1}^{N_test} E_{(x_k, y_k) ~ P}[ L(h*(x_k), y_k) ]
                                 = (1 / N_test) * N_test * R_true(h*)
                                 = R_true(h*)

Therefore, R_hat_test(h*) is an UNBIASED ESTIMATOR of true generalization risk.
CRITICAL CONDITION: This equality holds IF AND ONLY IF h* was chosen completely 
independent of D_test. The moment h* is chosen or modified because of its performance 
on D_test, h* becomes dependent on D_test, and the expectation becomes strictly biased:
    E[ R_hat_test(h*) ] < R_true(h*)  [Optimism of Peeking]

B. Variance of the Test Estimator:
By the Central Limit Theorem (CLT), as N_test >= 30, the distribution of R_hat_test 
approaches a normal distribution centered at R_true with variance:
    Var( R_hat_test ) = sigma_L^2 / N_test

Where sigma_L^2 is the variance of the pointwise loss function over the population.


--------------------------------------------------------------------------------
3. BINOMIAL TEST ACCURACY & CONFIDENCE INTERVAL MECHANICS
--------------------------------------------------------------------------------
For a classification model, each test sample prediction is a Bernoulli trial:
success (correct, y_hat = y) with probability p, or failure with probability 1 - p.

Let S = sum_{k=1}^{N_test} I(h*(x_k) == y_k) be the total number of correct test predictions.
The empirical test accuracy estimator is:
    p_hat = S / N_test

A. Standard Error of Test Accuracy:
    SE(p_hat) = sqrt( (p_hat * (1 - p_hat)) / N_test )

B. Wald 95% Confidence Interval:
For large N_test such that N_test * p_hat >= 5 and N_test * (1 - p_hat) >= 5:
    CI_95 = p_hat +/- z_{alpha/2} * SE(p_hat)
          = p_hat +/- 1.96 * sqrt( (p_hat * (1 - p_hat)) / N_test )

Margin of Error Table (Observed Test Accuracy p_hat = 88.0%):
--------------------------------------------------------------------------------
N_test   | Margin of Error (ME) | 95% Confidence Interval Band | Interval Width
--------------------------------------------------------------------------------
30       | +/- 11.63%           | [76.37%, 99.63%]              | 23.26%
50       | +/- 9.01%            | [78.99%, 97.01%]              | 18.02%
100      | +/- 6.37%            | [81.63%, 94.37%]              | 12.74%
250      | +/- 4.03%            | [83.97%, 92.03%]              | 8.06%
500      | +/- 2.85%            | [85.15%, 90.85%]              | 5.70%
1,000    | +/- 2.01%            | [85.99%, 90.01%]              | 4.02%
2,500    | +/- 1.27%            | [86.73%, 89.27%]              | 2.54%
--------------------------------------------------------------------------------

Pedagogical Insight (Sukanta Hui):
Look at N_test = 50. If your test set has only 50 students, an observed accuracy of 
88.0% merely proves that the true accuracy lies somewhere between 79% and 97%! 
Claims that "Model A is 89% and Model B is 87%" are statistically meaningless on small 
test sets.

C. Sample Size Determination Formula:
To achieve a desired margin of error E with confidence 1 - alpha:
    N_test >= ( z_{alpha/2}^2 * p * (1 - p) ) / E^2
Under maximum variance (worst case p = 0.5):
    N_test >= ( 1.96^2 * 0.25 ) / E^2 = 0.9604 / E^2
- For E = 0.05 (+/- 5%): N_test >= 385 samples.
- For E = 0.02 (+/- 2%): N_test >= 2,401 samples.
- For E = 0.01 (+/- 1%): N_test >= 9,604 samples.


--------------------------------------------------------------------------------
4. THE TEST SET PEEKING HAZARD (MULTIPLE HYPOTHESIS TESTING FALLACY)
--------------------------------------------------------------------------------
What happens when an engineer repeatedly evaluates competing model iterations 
on the exact same test dataset?

The Mathematical Mechanism of Peeking:
Suppose M completely useless, random-guessing models (true accuracy p = 50.0%) are 
evaluated on a fixed test set of N_test = 100 samples.
- Each model's score is a binomial random variable: S_m ~ Binomial(100, 0.5).
- If the engineer selects the best model:
      h_best = argmax_{m=1..M} [ p_hat_m(D_test) ]
- By Extreme Value Theory, the expected maximum of M independent Gaussian-approximated 
  null variables scales as:
      E[ max_{m=1..M} p_hat_m ] approx mu + sigma * sqrt( 2 * ln(M) )
                              = 0.50 + sqrt(0.25 / N_test) * sqrt( 2 * ln(M) )

Concrete Numerical Proof (N_test = 100, mu = 0.50, sigma = 0.05):
- For M = 1 model: Expected best accuracy = 50.0%.
- For M = 10 models: Expected best accuracy = 50.0% + 0.05 * 2.15 = 60.75%.
- For M = 50 models: Expected best accuracy = 50.0% + 0.05 * 2.80 = 64.00%.
- For M = 200 models: Expected best accuracy = 50.0% + 0.05 * 3.25 = 66.25%.

Catastrophic Implication:
Even when every single model is completely devoid of predictive intelligence, 
simply testing 50 configurations on the test set guarantees discovering a "winner" 
that scores 64% accuracy purely by stochastic luck!
The test set has been "overfitted" without a single weight update.
Remedy:
1. Strictly separate Validation data (for tuning M models) from Testing data (for ONE final audit).
2. Apply Bonferroni Correction or False Discovery Rate (FDR) control if multiple 
   post-hoc comparisons are unavoidable.


--------------------------------------------------------------------------------
5. TWO-MODEL STATISTICAL COMPARISON (Z-TEST & MCNEMAR'S TEST)
--------------------------------------------------------------------------------
When comparing Model A (accuracy p1) against Model B (accuracy p2) on D_test:

A. Two-Proportion Pooled Z-Test:
Null Hypothesis H0: p1 == p2 vs Alternative H1: p1 != p2.
    z = (p1 - p2) / sqrt( p_pool * (1 - p_pool) * (1/N_test + 1/N_test) )
where p_pool = (x1 + x2) / (2 * N_test).
Rule: Reject H0 at alpha = 0.05 if |z| > 1.960 (p-value < 0.05).

B. McNemar's Paired Contingency Test (Recommended for Correlated Predictions):
Because Model A and Model B are tested on the EXACT SAME instances, their predictions 
are paired. Construct the 2x2 contingency matrix:
- n00: Both models incorrect
- n01: Model A incorrect, Model B correct
- n10: Model A correct, Model B incorrect
- n11: Both models correct

McNemar's Test Statistic with continuity correction:
    chi^2 = ( |n01 - n10| - 1 )^2 / ( n01 + n10 ) ~ Chi^2(df = 1)
If chi^2 > 3.841, the performance difference between Model A and Model B is 
statistically significant at the 95% confidence level.


--------------------------------------------------------------------------------
6. TEST SET AUTHENTICITY: COVARIATE SHIFT & OUT-OF-DISTRIBUTION (OOD)
--------------------------------------------------------------------------------
A testing dataset that merely copies the training distribution provides false security. 
In enterprise machine learning, models fail not because of in-distribution error, but 
because the operational deployment environment experiences distribution drift.

A. In-Distribution Holdout (I.I.D. Test Set):
P_test(X, Y) == P_train(X, Y).
Tests whether the model has learned the specific manifold of the training corpus.

B. Out-of-Time (OOT) Holdout:
Samples collected chronologically after the training cutoff date:
D_train = {records from Jan to Sep}; D_test = {records from Oct to Dec}.
Tests resilience against non-stationary temporal dynamics, inflation, and seasonal shifts.

C. Out-of-Distribution (OOD) & Stress-Test Partitions:
P_test(X) != P_train(X).
Samples deliberately gathered from edge-case operating environments:
- Severe monsoon thunderstorms over North 24 Parganas.
- Sensor hardware degradation or camera lens occlusion.
- Extreme economic recession or market liquidity crunches.


--------------------------------------------------------------------------------
7. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
--------------------------------------------------------------------------------

Case Study 1: Calcutta Electric Supply Corporation (CESC Ltd.)
- Context: Smart Meter Power Theft & Meter Tampering Detection in Central Kolkata.
- Challenge: 50,000 smart meter streaming telemetry nodes.
- Test Vault Protocol:
  * CESC established a strict "Air-Gapped Blind Test Vault" managed by an independent 
    audit cell.
  * Vendor data scientists submitted containerized Docker inference pipelines.
  * The inference container was executed against the encrypted holdout vault; only 
    aggregate precision, recall, and F1 scores were returned to the engineers.
  * Result: Completely eliminated test peeking and hyperparameter leakage, ensuring 
    that the 91.4% detection accuracy reflected genuine revenue protection.

Case Study 2: Netaji Subhash Chandra Bose International Airport (CCU - Kolkata)
- Context: Dual-Energy Computed Tomography (CT) Baggage Scanner Contraband Detection.
- Challenge: 12,000 passenger baggage volumetric scans with synthetic threat insertions.
- Test Vault Protocol:
  * "One-Shot Evaluation Policy": Each competing security vendor's computer vision 
    model was allowed exactly ONE evaluation run on the certified test holdout.
  * Multiple re-submissions to "tweak confidence thresholds" were strictly prohibited 
    by Bureau of Civil Aviation Security (BCAS) regulations to prevent models from 
    memorizing baggage clutter patterns.

Case Study 3: Bandhan Bank Micro-Banking Division (Headquarters: Salt Lake, Sector V)
- Context: Out-of-Time (OOT) Credit Risk Assessment for MSME Unsecured Lending.
- Challenge: 25,000 loan disbursement files across rural Howrah and Hooghly.
- Test Vault Protocol:
  * Rather than a random shuffle split, Bandhan Bank partitioned data temporally: 
    Q1-Q3 disbursements formed D_train/D_val, while Q4 disbursements formed D_test (OOT).
  * This rigorous test architecture exposed whether models could withstand festival-season 
    cash outflow fluctuations without credit default spikes.

Case Study 4: Swiggy / Zomato Kolkata Regional Logistics Hub
- Context: Food Delivery Time SLA Prediction during Durga Puja Carnival.
- Challenge: 45,000 delivery dispatches during Saptami, Ashtami, Navami, and Dashami.
- Test Vault Protocol:
  * Constructed a dedicated "Stress-Test Holdout Partition" isolated from ordinary 
    monsoon and weekday data.
  * Evaluated how delivery prediction algorithms handled sudden pedestrian road closures 
    near major pandals (e.g., Bagbazar, Ekdalia Evergreen, Suruchi Sangha), forcing 
    the model to handle severe out-of-distribution travel latencies.


--------------------------------------------------------------------------------
8. COMMON PRODUCTION PITFALLS & INDUSTRIAL BEST PRACTICES
--------------------------------------------------------------------------------
1. Pitfall: Treating D_test as a Tuning Sandbox
   * Anti-Pattern: Evaluating 40 different neural network learning rates on D_test 
     and picking the one with the highest test score.
   * Consequence: D_test is now an overfitted validation set; true generalization 
     is unknown.
   * Best Practice: Use 3-way splits (Train / Validation / Test) or Nested Cross-Validation.

2. Pitfall: Underpowered Test Sets (N_test < 100)
   * Anti-Pattern: Reporting "Model achieved 95% accuracy!" on a test set of 20 samples.
   * Consequence: A single misclassification swings accuracy by 5.0%. The 95% confidence 
     interval spans [75.1%, 99.9%], rendering the benchmark scientifically useless.
   * Best Practice: Calculate required N_test using binomial standard error formulas 
     before final benchmarking (aim for margin of error <= 2%).

3. Pitfall: Information Bleed via Shared Preprocessing
   * Anti-Pattern: Passing test data through \`imputer.fit_transform(X_test)\` or 
     normalizing features using global statistics.
   * Consequence: Future test distribution parameters contaminate representations.
   * Best Practice: Strictly call \`.transform()\` on D_test using parameters frozen 
     from D_train.

4. Pitfall: Ignoring Subject Identity Leakage
   * Anti-Pattern: Testing medical imaging models when scans from the same patient 
     exist in both D_train and D_test.
   * Consequence: The model memorizes patient anatomy rather than disease markers.
   * Best Practice: Enforce \`GroupShuffleSplit\` or \`GroupKFold\` by patient ID.


--------------------------------------------------------------------------------
9. 10 MAKAUT VIVA VOCE QUESTIONS & AUTHORITATIVE MODEL ANSWERS
--------------------------------------------------------------------------------

Q1: What is the formal role of the Testing Dataset in machine learning?
Answer:
The testing dataset D_test is a strictly isolated, uncompromised holdout sample used 
solely to provide an unbiased estimate of the final model's real-world generalization 
error. It must never participate in model training, parameter optimization, or 
hyperparameter tuning.

Q2: Prove mathematically why the empirical test error is an unbiased estimator of true risk.
Answer:
Because D_test ~ i.i.d. P(X, Y) and is independent of hypothesis h*, the expectation 
of the sample average loss over all random draws of D_test equals:
E[R_hat_test] = (1/N_test) * sum_{k=1}^N E[L(h*(x_k), y_k)] = (N/N) * R_true = R_true.
Thus, the bias E[R_hat_test] - R_true equals exactly zero.

Q3: What is the "Test Set Peeking Paradox" (Multiple Hypothesis Testing Fallacy)?
Answer:
When an engineer evaluates M candidate models on the exact same test dataset and selects 
the top performer, the maximum observed test score is artificially inflated by stochastic 
luck. Extreme value theory shows that the maximum of M null models scales as 
mu + sigma * sqrt(2 * ln(M)), turning an unbiased metric into a spuriously optimistic one.

Q4: How do you compute the 95% Wald Confidence Interval for test classification accuracy?
Answer:
Given empirical test accuracy p_hat and sample size N_test:
CI_95 = p_hat +/- 1.96 * sqrt( (p_hat * (1 - p_hat)) / N_test ).
This interval defines the range within which the model's true population accuracy lies 
with 95% statistical confidence.

Q5: Why is a test set of 40 samples insufficient to prove that Model A (90%) is better than Model B (85%)?
Answer:
With N_test = 40 and p_hat = 0.88, the standard error is ~5.1% and the margin of error 
is +/- 10.1% (confidence interval [77.9%, 98.1%]). A two-proportion z-test yields 
z = 0.65 (p-value = 0.51), proving that the 5% difference is indistinguishable from 
random chance.

Q6: What is the difference between a Validation Dataset and a Testing Dataset?
Answer:
A validation dataset is used iteratively during model development to tune hyperparameters 
(e.g., tree depth, regularization strength) and select the best model architecture. 
The testing dataset is accessed only once after all modeling decisions are frozen to 
provide a final, honest performance report.

Q7: What is an Out-of-Time (OOT) test dataset, and when is it necessary?
Answer:
An OOT test dataset is partitioned chronologically (e.g., training on January-September 
and testing on October-December). It is necessary in non-stationary domains like financial 
credit scoring, stock trading, and power grid demand forecasting where future trends 
must be predicted without lookahead bias.

Q8: How does McNemar's Test compare two classification models evaluated on the same test set?
Answer:
Because both models are evaluated on the exact same test instances, their predictions are 
paired. McNemar's test examines the discordant pairs: n01 (Model A wrong, Model B right) 
and n10 (Model A right, Model B wrong). The test statistic is chi^2 = (|n01 - n10| - 1)^2 / (n01 + n10). 
If chi^2 > 3.841, the difference is statistically significant (df=1, p < 0.05).

Q9: What is Out-of-Distribution (OOD) test evaluation?
Answer:
OOD testing evaluates the model on holdout instances drawn from a shifted feature 
distribution (P_test(X) != P_train(X)). It stress-tests model robustness against real-world 
covariate shifts, sensor noise, weather extremes, and edge cases.

Q10: Why must test set feature scaling strictly use parameters fit on the training set?
Answer:
Computing scaler parameters (mean, standard deviation, min, max) on the test set leaks 
future distribution statistics into the test predictions. To preserve statistical validity, 
transformers must call \`.fit()\` exclusively on D_train and \`.transform()\` on D_test.

================================================================================
END OF ACADEMIC NOTES - TOPIC 7: TESTING DATASET
================================================================================
`,Ee=[{id:1,question:"What is the single, non-negotiable purpose of the Testing Dataset (D_test) in the machine learning lifecycle?",shortAnswer:"To provide an unbiased estimate and statistical confidence interval of the final model's real-world generalization performance on unseen data.",explanation:"The testing dataset exists strictly for final audit evaluation. It must never participate in model parameter learning, feature selection, or hyperparameter tuning. Its sole mandate is to act as an uncorrupted proxy for the operational environment.",hint:"Recall the difference between studying for an exam and the final sealed exam paper.",level:"Foundation",codeExample:`# Correct Testing Dataset Evaluation
from sklearn.metrics import accuracy_score

# Evaluated strictly ONCE after all training and validation are finalized
y_pred_test = final_model.predict(X_test)
unbiased_test_acc = accuracy_score(y_test, y_pred_test)
print('Final Generalization Accuracy:', unbiased_test_acc)`},{id:2,question:"Why is the empirical test error (R_hat_test) proven to be an unbiased estimator of true generalization risk (R_true)?",shortAnswer:"Because the expectation of the test loss over random draws of D_test equals the true population risk, provided the model hypothesis h* is strictly independent of D_test.",explanation:"Under the i.i.d. assumption, E_{D_test}[ (1/N) sum L(h*(x_k), y_k) ] = (1/N) sum E[L(h*(x), y)] = R_true(h*). Because h* was chosen without seeing D_test, the mathematical bias E[R_hat_test] - R_true is identically zero.",hint:"What mathematical property relates the sample mean of independent observations to the population mean?",level:"Foundation",codeExample:`# Unbiased Risk Expectation Verification
# E[R_hat_test] == R_true if and only if h* is independent of D_test
test_losses = [compute_loss(h_star, draw_test_batch()) for _ in range(1000)]
print('Empirical Expectation:', np.mean(test_losses)) # Converges to R_true`},{id:3,question:"What is the fundamental difference between a Validation Dataset and a Testing Dataset?",shortAnswer:"A validation dataset is used iteratively during model development to tune hyperparameters and choose algorithms; the test dataset is held in reserve for one final, unbiased audit.",explanation:"Every time a model's hyperparameters (like tree depth or regularization alpha) are selected by comparing validation scores, information from that set influences the model choice. A pristine third split—the testing dataset—is required to provide an uncompromised evaluation.",hint:"Think about which dataset helps you make modeling decisions versus which reports final results.",level:"Foundation",codeExample:`# 3-Way Split: Train, Validation, Test
from sklearn.model_selection import train_test_split

# 1. Carve out sealed test vault (20%)
X_temp, X_test, y_temp, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
# 2. Split remaining into train (60%) and validation (20%)
X_train, X_val, y_train, y_val = train_test_split(X_temp, y_temp, test_size=0.25, random_state=42)`},{id:4,question:"How does the Central Limit Theorem (CLT) characterize the distribution of empirical test error as sample size N_test increases?",shortAnswer:"The empirical test error asymptotically follows a normal distribution centered at true risk R_true with variance sigma^2 / N_test.",explanation:"Because test errors e_k = L(h*(x_k), y_k) are independent random variables, the sample average R_hat_test converges in distribution to N(R_true, sigma_L^2 / N_test) for N_test >= 30, providing the theoretical basis for constructing confidence intervals.",hint:"Recall how the sum or average of independent random variables behaves.",level:"Foundation",codeExample:`# CLT for Test Error
# R_hat_test ~ Normal(mu=R_true, std=sigma / sqrt(N_test))
standard_error = np.std(test_residuals) / np.sqrt(len(test_residuals))`},{id:5,question:"What happens if an engineer repeatedly tunes model decision thresholds directly on D_test to maximize the F1-score?",shortAnswer:"D_test is compromised and converted into a de facto validation set; the reported F1-score becomes optimistically biased and no longer reflects true generalization.",explanation:"Optimizing the classification threshold (e.g., shifting from 0.50 to 0.38) based on test set metrics fits the threshold to the random sampling quirks of D_test. Threshold calibration must be performed on validation data.",hint:"Does selecting a threshold based on a dataset constitute tuning on that dataset?",level:"Foundation",codeExample:`# INCORRECT: Tuning threshold on D_test (Peeking)
# best_thresh = argmax([f1_score(y_test, (probs_test >= t)) for t in thresholds]) # LEAKAGE!

# CORRECT: Tune threshold on Validation, apply frozen threshold to Test
best_thresh = max(thresholds, key=lambda t: f1_score(y_val, (probs_val >= t)))
test_preds = (probs_test >= best_thresh).astype(int)`},{id:6,question:"Under the Bernoulli trial model for binary classification, what is the variance of the observed test accuracy estimator p_hat?",shortAnswer:"Var(p_hat) = (p * (1 - p)) / N_test.",explanation:"Each test sample is classified correctly (success) with probability p or incorrectly with probability 1 - p. For N_test independent trials, the variance of the sample proportion p_hat = S / N_test is p(1 - p) / N_test, which reaches its maximum at p = 0.50.",hint:"Recall the formula for the variance of a binomial proportion.",level:"Foundation",codeExample:`# Variance of Test Accuracy Estimator
def test_accuracy_variance(p, n_test):
    return (p * (1.0 - p)) / n_test

print('Variance for p=0.90, N=100:', test_accuracy_variance(0.9, 100)) # 0.0009`},{id:7,question:"Why is a typical test set split proportion chosen between 15% and 25% for medium-sized tabular datasets?",shortAnswer:"It balances having sufficient training samples to minimize parameter estimation variance while retaining enough test samples to ensure a narrow confidence interval.",explanation:"If the test split is too small (e.g. 2%), test error estimates have huge variance and wide confidence intervals. If the test split is too large (e.g. 50%), the model is starved of training data, leading to severe underfitting. An 80:20 or 75:25 split strikes a practical trade-off.",hint:"Consider what happens to the training model if you take away too much data.",level:"Foundation",codeExample:`# Standard 80/20 train-test partition
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.20, random_state=42)`},{id:8,question:"What is the 'Golden Rule' regarding feature transformers and the testing dataset?",shortAnswer:"Feature transformers must be fitted strictly on the training set, and applied to the test set using .transform() only.",explanation:"Calling `fit` or `fit_transform` on the test set calculates test distribution parameters (mean, variance, minimum, maximum, imputation medians) that contaminate the model representations. Frozen parameters learned from D_train must be applied to D_test.",hint:"Should you ever call .fit() on test data?",level:"Foundation",codeExample:`# Golden Rule: fit on train, transform on test
from sklearn.preprocessing import StandardScaler

scaler = StandardScaler()
X_train_scaled = scaler.fit_transform(X_train)
# Strictly transform ONLY
X_test_scaled = scaler.transform(X_test)`},{id:9,question:"Given an observed test accuracy of 90.0% on a test set of N_test = 100 samples, what is the exact 95% Wald Confidence Interval?",shortAnswer:"[84.12%, 95.88%] with a margin of error of +/- 5.88%.",explanation:"SE = sqrt(0.90 * 0.10 / 100) = sqrt(0.0009) = 0.03. Margin of error ME = 1.96 * 0.03 = 0.0588 (5.88%). Lower bound = 0.90 - 0.0588 = 0.8412 (84.12%); upper bound = 0.90 + 0.0588 = 0.9588 (95.88%).",hint:"Calculate standard error sqrt(p(1-p)/n), then multiply by 1.96.",level:"Mechanics",codeExample:`# Computing 95% Wald Confidence Interval
import math

p_hat, n_test = 0.90, 100
se = math.sqrt(p_hat * (1.0 - p_hat) / n_test)
me = 1.96 * se
print(f'95% CI: [{p_hat - me:.4f}, {p_hat + me:.4f}]') # [0.8412, 0.9588]`},{id:10,question:"Why does the Wald Confidence Interval break down when observed test accuracy p_hat is extremely close to 1.0 (e.g. 99.5%) or 0.0?",shortAnswer:"The Gaussian approximation of the binomial distribution fails near boundaries, causing the confidence interval to unnaturally exceed 1.0 or understate variance.",explanation:"The Wald interval assumes a symmetric normal distribution. When p_hat is near 0 or 1, the binomial distribution is highly skewed. For small N or extreme p, Wald intervals can produce upper limits > 100% or degenerate zero-width intervals. The Wilson Score Interval or Clopper-Pearson exact interval must be used.",hint:"What happens to the bell curve shape when the mean is crammed against the boundary?",level:"Mechanics",codeExample:`# Wilson Score Interval for extreme proportions
from statsmodels.stats.proportion import proportion_confint

ci_low, ci_high = proportion_confint(count=99, nobs=100, alpha=0.05, method='wilson')
print(f'Wilson 95% CI: [{ci_low:.4f}, {ci_high:.4f}]') # Guaranteed <= 1.0`},{id:11,question:"Using the sample size determination formula, how many test instances are required to ensure a maximum margin of error of +/- 2.0% at a 95% confidence level under worst-case variance (p = 0.5)?",shortAnswer:"N_test >= 2,401 samples.",explanation:"Formula: N >= (z^2 * p * (1 - p)) / E^2. With z = 1.96, p = 0.5, and E = 0.02: N = (1.96^2 * 0.25) / (0.02^2) = (3.8416 * 0.25) / 0.0004 = 0.9604 / 0.0004 = 2,401 samples.",hint:"Square 1.96, multiply by 0.25, and divide by 0.0004.",level:"Mechanics",codeExample:`# Sample Size Calculation for Precision
def required_test_samples(margin_of_error=0.02, confidence=0.95, p=0.5):
    z = 1.96 if confidence == 0.95 else 2.576
    return math.ceil((z ** 2 * p * (1.0 - p)) / (margin_of_error ** 2))

print('Required test size:', required_test_samples(0.02)) # 2401`},{id:12,question:"When comparing two classifiers on the exact same test dataset, why is McNemar's Test preferred over an independent two-sample proportion z-test?",shortAnswer:"Because both models predict on the exact same instances, their predictions are paired and correlated; McNemar's test specifically evaluates discordant error pairs.",explanation:"An independent z-test assumes samples are independent, ignoring that Model A and Model B evaluated identical instances. McNemar's test focuses exclusively on discordant outcomes: samples where Model A is correct and Model B is incorrect (n10) versus where Model A is incorrect and Model B is correct (n01).",hint:"Think about paired vs independent samples in statistics.",level:"Mechanics",codeExample:`# McNemar's Paired Test Matrix
# n01: Model A wrong, Model B right
# n10: Model A right, Model B wrong
def mcnemar_test(n01, n10):
    # Continuity-corrected chi-square
    chi2 = ((abs(n01 - n10) - 1.0) ** 2) / (n01 + n10)
    return chi2, chi2 > 3.841 # True if p < 0.05 (df=1)`},{id:13,question:"If Model A achieves 88.0% test accuracy and Model B achieves 85.0% on a test set of N_test = 50 samples, is the difference statistically significant (alpha = 0.05)?",shortAnswer:"No. With N_test = 50, the pooled z-statistic is 0.43 (p-value = 0.67), meaning the 3% difference is statistically indistinguishable from random noise.",explanation:"Pooled proportion p_pool = (44 + 42) / 100 = 0.865. Standard error SE_pool = sqrt(0.865 * 0.135 * (2/50)) = 0.0684 (6.84%). z = (0.88 - 0.85) / 0.0684 = 0.438. Since |z| < 1.96 (p = 0.67), the null hypothesis of equal performance cannot be rejected.",hint:"Small test sets have wide margins of error that engulf small percentage differences.",level:"Mechanics",codeExample:`# Two-sample proportion z-test verification
z_stat = (0.88 - 0.85) / math.sqrt(0.865 * 0.135 * (2 / 50))
print('z-statistic:', round(z_stat, 3)) # 0.438 -> Not significant!`},{id:14,question:"What is the mathematical rate at which the standard error of the test accuracy decays as test sample size N_test increases?",shortAnswer:"It decays at the rate of O(1 / sqrt(N_test)).",explanation:"Because standard error is proportional to 1 / sqrt(N), reducing the margin of error by a factor of 2 requires increasing the test set size by a factor of 4. Reducing margin of error by 10x requires 100x more test data.",hint:"How does the square root in the denominator affect scaling?",level:"Mechanics",codeExample:`# Error decay vs Sample Size
ns = [100, 400, 1600]
for n in ns:
    se = math.sqrt(0.25 / n)
    print(f'N={n}: SE={se:.4f}') # 0.0500, 0.0250, 0.0125 (halving each time)`},{id:15,question:"Why does evaluating a model on an unstratified test set in an imbalanced domain (e.g., 99% benign, 1% malignant) yield a misleading test accuracy?",shortAnswer:"Accuracy is dominated by majority class performance; a naive model predicting 100% benign achieves 99% test accuracy despite catching zero tumors.",explanation:"In imbalanced domains, raw accuracy obscures minority class failure. The test dataset must be evaluated using threshold-independent metrics (PR-AUC, ROC-AUC) or cost-sensitive confusion metrics (Sensitivity / Recall at fixed Specificity) rather than aggregate accuracy.",hint:"What would the accuracy be if the doctor simply declared every patient healthy?",level:"Mechanics",codeExample:`# Imbalanced Evaluation on D_test
from sklearn.metrics import classification_report, average_precision_score

# Look at minority recall and PR-AUC, not aggregate accuracy
print(classification_report(y_test, y_pred, digits=4))
pr_auc = average_precision_score(y_test, y_probs)`},{id:16,question:"How does Hoeffding's Inequality provide a distribution-free bound on the test error of hypothesis h*?",shortAnswer:"It bounds the probability that true risk exceeds empirical test error by epsilon: P(|R_hat_test - R_true| >= epsilon) <= 2 * exp(-2 * N_test * epsilon^2).",explanation:"Hoeffding's inequality requires no assumptions about the underlying distribution P(X, Y) beyond bounded losses in [0, 1]. It mathematically proves that the probability of a large generalization discrepancy decays exponentially with sample size N_test.",hint:"Notice the negative exponential with N in the exponent.",level:"Mechanics",codeExample:`# Hoeffding bound computation
def hoeffding_bound_prob(n_test, epsilon=0.05):
    return 2.0 * math.exp(-2.0 * n_test * (epsilon ** 2))

print('Prob of error > 5% on N=1000:', hoeffding_bound_prob(1000)) # 0.0135 (1.3%)`},{id:17,question:"What is the 'Test Set Peeking Paradox' (Multiple Testing Fallacy) in machine learning engineering?",shortAnswer:"Evaluating M candidate models on a fixed test set causes the maximum observed test accuracy to falsely inflate via stochastic luck, scaling as mu + sigma * sqrt(2 ln M).",explanation:"If you evaluate 50 random models (each having true accuracy = 50%) on a test set of 100 samples, one model will score ~64% accuracy purely by chance. If you select and deploy that model based on its test score, you have overfitted to the test set without running gradient descent.",hint:"If you flip 100 coins 50 times, will one set of flips show way more heads than tails?",level:"Architecture",codeExample:`# Peeking Paradox Simulation
import numpy as np

# 50 random null models on N=100 test samples
y_test = np.random.randint(0, 2, size=100)
null_accuracies = [np.mean(y_test == np.random.randint(0, 2, size=100)) for _ in range(50)]
print('True accuracy:', 0.50)
print('Apparent best score:', max(null_accuracies)) # ~0.63 due to peeking!`},{id:18,question:"How does the Bonferroni Correction adjust statistical significance when testing M models on D_test?",shortAnswer:"It divides the nominal significance threshold alpha by M (alpha_adjusted = alpha / M) to control the family-wise error rate.",explanation:"If you test M = 20 models at alpha = 0.05, the probability of at least one false positive is 1 - (1 - 0.05)^20 = 64.1%. The Bonferroni correction requires each individual model test to meet alpha = 0.05 / 20 = 0.0025, safeguarding against spurious discoveries.",hint:"How do you counteract the probability of getting a lucky false positive across many trials?",level:"Architecture",codeExample:`# Bonferroni Adjusted Alpha
M = 20
alpha_nominal = 0.05
alpha_bonferroni = alpha_nominal / M
print('Adjusted threshold for p-value:', alpha_bonferroni) # 0.0025`},{id:19,question:"What is an Out-of-Time (OOT) test dataset, and why is it mandatory for temporal systems like credit scoring or energy grid forecasting?",shortAnswer:"An OOT test set is partitioned chronologically into future time windows; it prevents lookahead bias and verifies model resilience against temporal drift.",explanation:"Random shuffle splitting in time-series data leaks future market and macroeconomic states into the training set. An OOT test set models operational reality: the model trains on historical data (months 1-9) and is evaluated on subsequent future quarters (months 10-12).",hint:"Can a bank use tomorrow's inflation data to predict today's loan defaults?",level:"Architecture",codeExample:`# Chronological Out-of-Time (OOT) Partition
split_date = '2026-10-01'
train_df = df[df['timestamp'] < split_date]
# Sealed future operational test vault
test_df = df[df['timestamp'] >= split_date]`},{id:20,question:"Why must Group-Aware Splitting (e.g. GroupShuffleSplit) be enforced when creating D_test in biometric or patient cohorts?",shortAnswer:"To prevent subject identity leakage; multiple observations or scans from the same human subject must never be split across train and test sets.",explanation:"If Patient #88 has 6 retinal images and 4 are in D_train while 2 are in D_test, the model learns idiosyncratic ocular features of Patient #88 rather than genuine diabetic retinopathy pathology. Group splitting ensures entire subjects reside wholly in train or test.",hint:"Does a test set evaluate memorization of people or detection of disease?",level:"Architecture",codeExample:`# Group-Aware Test Vault Partitioning
from sklearn.model_selection import GroupShuffleSplit

gss = GroupShuffleSplit(n_splits=1, test_size=0.20, random_state=42)
train_idx, test_idx = next(gss.split(X, y, groups=patient_ids))

X_train, X_test = X[train_idx], X[test_idx]
y_train, y_test = y[train_idx], y[test_idx]`},{id:21,question:"What is an 'Air-Gapped Blind Test Vault' in enterprise machine learning governance?",shortAnswer:"A centralized, isolated test repository where data scientists submit containerized models for automated evaluation without ever seeing or downloading the test labels.",explanation:"To prevent intentional or accidental test set leakage, modern enterprise architectures (such as Kaggle competition backends, hospital clinical trials, and banking risk committees) isolate the holdout dataset on a secure server. The model runs in an air-gapped sandbox, returning only summary performance metrics.",hint:"Think about how competitive benchmarks prevent participants from cheating.",level:"Architecture",codeExample:`# Air-Gapped Blind Evaluation Paradigm
def evaluate_submitted_container(container_image, secret_test_vault_path):
    # Container executes inference inside isolated sandbox
    # Ground truth labels never leave the secure audit environment
    pass`},{id:22,question:"What is Out-of-Distribution (OOD) testing, and how does it differ from standard i.i.d. holdout testing?",shortAnswer:"Standard i.i.d. testing evaluates data drawn from the exact same distribution P(X); OOD testing deliberately subjects the model to shifted feature distributions to verify tail robustness.",explanation:"A model can score 95% on an i.i.d. test set yet fail catastrophically in production when faced with sensor noise, unexpected weather extremes, or demographic shifts. OOD test sets stress-test models against distribution shifts (P_test(X) != P_train(X)).",hint:"How does a self-driving car perform in heavy fog if it only tested in sunny daylight?",level:"Architecture",codeExample:`# OOD Stress-Testing
# D_test_clean: Standard sunny weather
# D_test_ood: Heavy Nor'wester storm sensor telemetry
acc_clean = model.score(X_test_clean, y_test_clean)
acc_ood = model.score(X_test_storm, y_test_storm)
print('Resilience Drop:', acc_clean - acc_ood)`},{id:23,question:"Why is it mathematically erroneous to apply Missing Value Imputation or Outlier Clipping across the entire dataset before separating D_test?",shortAnswer:"Global imputation calculates distribution medians and quantiles from test rows, corrupting training representations with future distributional information.",explanation:"If missing values in feature 'income' are imputed using the global median of 10,000 samples before splitting, test set values shift the median assigned to training records. Imputers must call `.fit()` on D_train and `.transform()` on D_test.",hint:"Does a production system get to inspect next month's customers to impute today's missing values?",level:"Architecture",codeExample:`# Correct Pipeline Imputation
from sklearn.pipeline import Pipeline
from sklearn.impute import SimpleImputer

pipe = Pipeline([
    ('imputer', SimpleImputer(strategy='median')),
    ('model', LogisticRegression())
])
pipe.fit(X_train, y_train)
# Imputes X_test using medians learned exclusively from X_train
pipe.score(X_test, y_test)`},{id:24,question:"What is the role of a 'Canary' or 'Golden Test Dataset' in continuous production ML pipelines?",shortAnswer:"A curated set of critical edge-case test records run against every newly trained model build to prevent regressions on core business requirements.",explanation:"While stochastic test sets evaluate statistical averages, golden datasets contain curated, mission-critical edge cases (e.g., specific VIP customer transactions, rare cardiac arrest ECG patterns). If a retrained model fails even one canary test, deployment is automatically halted.",hint:"Think about canary in a coal mine for automated regression testing.",level:"Architecture",codeExample:`# Golden Canary Test Assertion in CI/CD
def test_golden_canary_suite(new_model):
    preds = new_model.predict(GOLDEN_EDGE_CASES_X)
    assert np.all(preds == GOLDEN_EDGE_CASES_Y), 'CRITICAL REGRESSION DETECTED! Deployment halted.'`},{id:25,question:"How does the Bureau of Civil Aviation Security (BCAS) at CCU Airport enforce a 'One-Shot Evaluation Policy' for AI baggage scanners?",shortAnswer:"Vendors submit their software builds for exactly one evaluation pass on certified threat scans; repeated submissions to iteratively tweak thresholds are prohibited.",explanation:"If vendors were allowed to test, adjust thresholds, and re-test 20 times on the airport security holdout, the models would overfit to the specific physical artifacts and angles of the certified test luggage, creating a severe aviation vulnerability.",hint:"Why can't students take the exact same board exam 10 times in a row until they pass?",level:"Industrial Production & Governance",codeExample:`# Audit Log Enforcing One-Shot Evaluation
def execute_one_shot_audit(vendor_model, certified_test_vault):
    if audit_registry.has_evaluated(vendor_model.id):
        raise PermissionError('Violation: One-shot policy prohibits re-evaluation on certified test vault.')
    return run_blind_benchmark(vendor_model, certified_test_vault)`},{id:26,question:"In banking credit risk governance (e.g. Bandhan Bank), why are models tested on both an In-Time holdout and an Out-of-Time (OOT) holdout?",shortAnswer:"The In-Time holdout measures algorithmic generalization under identical economic conditions; the OOT holdout measures macroeconomic resilience and robustness against temporal drift.",explanation:"If a credit scoring model performs well on an In-Time test split (e.g. 88% Gini) but collapses on an OOT test set from a high-inflation quarter (e.g. 52% Gini), the bank knows the model is fragile to economic shocks and must not be approved by the model risk governance committee.",hint:"One test checks model math; the other checks real-world economic resilience.",level:"Industrial Production & Governance",codeExample:`# Dual Holdout Governance Architecture
gini_in_time = evaluate_gini(model, X_test_in_time, y_test_in_time)
gini_out_of_time = evaluate_gini(model, X_test_oot, y_test_oot)

# Governance rule: OOT drop must not exceed 15%
assert (gini_in_time - gini_out_of_time) / gini_in_time < 0.15, 'Model rejected: Excessive temporal degradation'`},{id:27,question:"What is Population Stability Index (PSI), and how is it computed between the training dataset and the production testing stream?",shortAnswer:"PSI measures the shift in feature quantile distributions between training baseline and test/production data; PSI >= 0.25 indicates critical population drift.",explanation:"PSI = sum( (Actual% - Expected%) * ln(Actual% / Expected%) ) across feature bins. If PSI < 0.10, the test distribution is stable; between 0.10 and 0.25 indicates moderate shift; >= 0.25 requires immediate retraining or test vault recalibration.",hint:"Recall the formula comparing expected training buckets with actual test buckets.",level:"Industrial Production & Governance",codeExample:`# Population Stability Index (PSI) calculation
def calculate_psi(expected_train, actual_test, buckets=10):
    # Compares empirical distributions to detect feature drift
    # PSI > 0.25 indicates severe drift
    pass`},{id:28,question:"Why must a Testing Dataset never be rebalanced using synthetic oversampling (such as SMOTE) before computing final metrics?",shortAnswer:"Synthetic balancing fabricates artificial test samples and destroys the real-world base rate, producing invalid operational precision and recall metrics.",explanation:"In production fraud detection, true fraud prevalence is ~0.1%. If you balance the test set to 50% fraud using SMOTE, the reported precision will appear 500x higher than reality. The test set must reflect genuine operational prevalence.",hint:"Does real-world deployment data come magically pre-balanced?",level:"Industrial Production & Governance",codeExample:`# INCORRECT: SMOTE on Test Set
# X_test_smote, y_test_smote = SMOTE().fit_resample(X_test, y_test) # INVALID EVALUATION!

# CORRECT: Keep Test Set pristine and unaltered
y_pred_test = model.predict(X_test_unaltered)
print(classification_report(y_test_unaltered, y_pred_test))`},{id:29,question:"What governance mechanism is mandated under the EU AI Act and FDA Software as a Medical Device (SaMD) regulations regarding the clinical testing dataset?",shortAnswer:"The clinical test dataset must be completely locked, representative of diverse patient demographic cohorts, and audited by independent regulatory bodies.",explanation:"Regulators require that medical diagnostic algorithms are evaluated on fixed, certified testing databases with diverse demographic stratification (age, biological sex, comorbidities) to verify that false negative rates do not disproportionately affect vulnerable subpopulations.",hint:"Think about algorithmic fairness and demographic representation in healthcare.",level:"Industrial Production & Governance",codeExample:`# Demographic Cohort Stratified Testing Audit
for cohort, subset_indices in demographic_groups.items():
    cohort_recall = recall_score(y_test[subset_indices], preds[subset_indices])
    print(f'Cohort {cohort} Recall: {cohort_recall:.3f}')
    assert cohort_recall >= 0.90, f'Fairness violation in cohort: {cohort}'`},{id:30,question:"What is 'Shadow Deployment' (Dark Launching), and how does it act as the ultimate continuous live testing dataset?",shortAnswer:"Production traffic is duplicated and routed to the new candidate model in the background without serving its predictions to users, testing performance on real streaming data.",explanation:"Shadow deployment feeds live customer traffic in parallel to both the incumbent model and the candidate model. The candidate model's predictions and latency are logged and compared against ground-truth outcomes, providing the ultimate uncompromised operational test benchmark.",hint:"How can you test a model on live customer requests without risking customer experience?",level:"Industrial Production & Governance",codeExample:`# Shadow Deployment Architecture Pattern
def handle_live_request(user_request):
    live_pred = incumbent_model.predict(user_request)
    # Asynchronously evaluate candidate on live stream
    async_log_shadow_prediction(candidate_model, user_request)
    return live_pred # User sees output only from proven model`}],z={cesc:{title:"CESC Kolkata Smart Grid (Nor'wester Monsoon Surge)",sector:"Power Utilities",baselineAcc:94.5,description:"Evaluates anomaly sentries trained on dry pre-monsoon telemetry when subjected to violent Nor'wester storm outages and lightning transients across North Kolkata."},airport:{title:"CCU Airport Baggage Scanner (High-Clutter Electronics)",sector:"Aviation Security",baselineAcc:96.2,description:"Evaluates carry-on contraband classifiers trained on light traveler bags when tested against dense festive luggage containing brass artifacts and layered lithium batteries."},bank:{title:"Bandhan Bank MSME Lending (Macroeconomic Inflation Shift)",sector:"Financial Inclusion",baselineAcc:91.8,description:"Evaluates credit risk scoring models trained during stable interest cycles against an Out-of-Time (OOT) festival quarter with sudden wholesale raw material inflation."},swiggy:{title:"Swiggy / Zomato Durga Puja Night Delivery SLA",sector:"Hyperlocal Logistics",baselineAcc:93,description:"Stress-tests delivery time regression models during Saptami through Dashami nocturnal road barricades near mega-pandals in South Kolkata (Suruchi Sangha / Ekdalia)."}},Fe=()=>{const[q,W]=r.useState("hero"),[f,C]=r.useState("peeking"),[h,G]=r.useState(25),[b,U]=r.useState(80),[p,V]=r.useState("null"),[m,H]=r.useState(.88),[x,X]=r.useState(150),[u,K]=r.useState(.95),[_,Q]=r.useState(.03),[E,Y]=r.useState("cesc"),[y,$]=r.useState(1.4),[v,Z]=r.useState(1.2),[J,ee]=r.useState({}),[te,se]=r.useState({}),ae=r.useId(),ne=r.useId(),ie=r.useId(),{modelDistribution:re,avgScore:ke,maxScore:w,theoreticalMax:oe,inflationDelta:k}=r.useMemo(()=>{const t=p==="null"?.5:p==="mild"?.65:.85,s=Math.sqrt(t*(1-t)/b),n=[];let i=0;for(let c=1;c<=h;c++){const N=Math.sin(c*17.3+b*.1)*1.8+Math.cos(c*5.7)*.5,j=Math.min(.99,Math.max(.05,t+N*s));n.push({id:c,acc:j}),i+=j}const a=i/h,o=Math.max(...n.map(c=>c.acc)),d=Math.min(.99,t+s*Math.sqrt(2*Math.log(Math.max(2,h)))),g=o-t;return{modelDistribution:n,avgScore:a,maxScore:o,theoreticalMax:d,inflationDelta:Math.max(0,g)}},[h,b,p]),{marginOfError:S,ciLower:M,ciUpper:I,zStat:le,pValue:D,isSignificant:O}=r.useMemo(()=>{const s={.9:1.645,.95:1.96,.99:2.576}[u]||1.96,n=Math.sqrt(m*(1-m)/x),i=s*n,a=Math.max(0,m-i),o=Math.min(1,m+i),d=m,g=Math.max(.1,m-_),c=(d+g)/2,N=Math.sqrt(c*(1-c)*(2/x)),j=(d-g)/(N||1e-6),ue=A=>{const xe=.254829592,ge=-.284496736,fe=1.421413741,be=-1.453152027,_e=1.061405429,ye=.3275911,ve=A<0?-1:1,B=Math.abs(A),T=1/(1+ye*B),Ne=1-((((_e*T+be)*T+fe)*T+ge)*T+xe)*T*Math.exp(-B*B);return ve*Ne},F=2*(1-(A=>.5*(1+ue(A/Math.sqrt(2))))(Math.abs(j)));return{marginOfError:i,ciLower:a,ciUpper:o,zStat:j,pValue:F,isSignificant:F<1-u}},[m,x,u,_]),{currentScenario:P,oodAcc:L,dropPct:de,calibrationError:ce,oodDiagnosis:R}=r.useMemo(()=>{const t=z[E]||z.cesc,s=t.baselineAcc,n=y*5.2+v*3.8,i=Math.max(45,s-n),a=s-i,o=(.04+y*.08+v*.05).toFixed(3);let d={label:"Operational Alignment Maintained",color:"text-emerald-400",bg:"bg-emerald-500/10 border-emerald-500/30",desc:"Model holds steady under mild operational variance. Generalization bounds remain certified for deployment."};return a>15?d={label:"Catastrophic OOD Failure",color:"text-rose-400",bg:"bg-rose-500/10 border-rose-500/30",desc:"Severe distribution drift has completely broken linear decision boundaries. Model outputs unreliable high-confidence errors."}:a>6&&(d={label:"Moderate Covariate Drift",color:"text-amber-400",bg:"bg-amber-500/10 border-amber-500/30",desc:"Noticeable performance degradation in tail feature regions. Recalibration or domain adaptation required before sign-off."}),{currentScenario:t,oodAcc:i.toFixed(1),dropPct:a.toFixed(1),calibrationError:o,oodDiagnosis:d}},[E,y,v]),me=[{id:1,title:"Diagnostic 1: The Test Set Peeking Fallacy",scenario:"A junior ML engineer at Salt Lake Sector V evaluates 40 different candidate XGBoost models on the sealed testing dataset and proudly announces that Model #27 achieved 94.2% test accuracy, compared to the 86% average of other models.",question:"Why does the lead data architect reject this benchmark result as statistically invalid?",options:[{label:"XGBoost requires GPUs, whereas test evaluations must be performed on CPUs.",isCorrect:!1},{label:"Multiple hypothesis testing on a fixed test set causes Extreme Value inflation: Model #27 likely won by stochastic luck, overfitting the test set.",isCorrect:!0},{label:"The test dataset should have been normalized with L1 norm rather than L2 norm.",isCorrect:!1},{label:"Testing datasets can only be evaluated with Decision Trees, not ensemble models.",isCorrect:!1}],explanation:"Evaluating M=40 models on the exact same test dataset and choosing the highest score violates unbiased risk estimation. Extreme value theory proves that the maximum of multiple null models inflates as mu + sigma*sqrt(2 ln M). The test set was turned into an overfitted validation set."},{id:2,title:"Diagnostic 2: Underpowered Test Sets & Confidence Interval Bands",scenario:"A biometric health startup in Kolkata tests an arrhythmia classifier on N_test = 40 patient ECG strips and claims a breakthrough 92.5% accuracy. A rival vendor claims their model achieved 87.5% on the same 40 strips.",question:"Based on the 95% Wald Confidence Interval and two-proportion z-test, what is the scientific reality?",options:[{label:"Model 1 is definitively superior because 92.5% is 5% higher than 87.5%.",isCorrect:!1},{label:"The sample size is too underpowered: with N=40, the margin of error is +/- 8.1% and the p-value is 0.46, making the two models statistically indistinguishable.",isCorrect:!0},{label:"A test set of 40 samples violates the Central Limit Theorem because N must be >= 10,000.",isCorrect:!1},{label:"ECG data cannot be tested with classification accuracy.",isCorrect:!1}],explanation:"With N_test = 40, the standard error of test accuracy is ~4.16% and the 95% confidence interval spans [84.3%, 100%]. A two-sample z-test gives z = 0.73 (p-value = 0.46). The 5% gap is completely engulfed by sampling variance and cannot prove superiority."},{id:3,title:"Diagnostic 3: Out-of-Time (OOT) Temporal Integrity",scenario:"In building a micro-loan default prediction model for rural Bandhan Bank branches in Nadia, an engineer proposes using a random 80/20 shuffle split across all 3 years of borrower history.",question:"Why does the model risk governance committee demand an Out-of-Time (OOT) chronological test split instead?",options:[{label:"Random shuffling allows future macroeconomic cycles and post-harvest liquidity states to leak into historical training data, generating illusory accuracy.",isCorrect:!0},{label:"Chronological splits run 10 times faster in Python than random shuffle splits.",isCorrect:!1},{label:"Banks are legally prohibited from training on records collected in autumn.",isCorrect:!1},{label:"Random shuffle splitting alters the categorical feature names.",isCorrect:!1}],explanation:"Financial data is non-stationary and auto-correlated. Random shuffling creates lookahead bias: future interest rates and post-harvest economic booms leak into training. An Out-of-Time split (e.g. training on months 1-24, testing on months 25-36) honestly tests whether the model survives future macroeconomic cycles."},{id:4,title:"Diagnostic 4: Preprocessing Contamination via Test Sets",scenario:"Before computing test metrics on an image classifier at CCU Airport, an intern writes: `scaler = StandardScaler(); X_test_scaled = scaler.fit_transform(X_test)`.",question:"What catastrophic error was committed?",options:[{label:"StandardScaler cannot process negative values.",isCorrect:!1},{label:"Calling .fit_transform() on the test set recalculates scaling parameters from test data, destroying the baseline calibration learned during training.",isCorrect:!0},{label:"The intern should have called scaler.fit() three times.",isCorrect:!1},{label:"The test set was enlarged by 50% automatically.",isCorrect:!1}],explanation:"The Golden Rule dictates: `fit` on training data, `transform` ONLY on test data. Calling `fit_transform` on X_test recalibrates mean and variance to the test set, masking distributional shifts and distorting the decision boundary."},{id:5,title:"Diagnostic 5: Air-Gapped Blind Test Vault Architecture",scenario:"To evaluate AI vendors competing for CESC's smart grid anomaly detection contract, the utility company refuses to send the test CSV file to the vendors, requiring them to submit Docker containers instead.",question:"What core ML governance problem does this air-gapped test vault solve?",options:[{label:"It reduces the electricity consumed by the data science laptops.",isCorrect:!1},{label:"It guarantees zero peeking, zero data leakage, and enforces a strict one-shot evaluation policy where vendors cannot tune models against test labels.",isCorrect:!0},{label:"It allows CESC to run the model without paying the vendor license fees.",isCorrect:!1},{label:"It converts tabular smart meter telemetry into image files.",isCorrect:!1}],explanation:"Air-gapped blind evaluation vaults keep test labels and features locked inside an isolated audit sandbox. Vendors submit compiled inference packages that run in a black box, eliminating manual test inspection, hyperparameter p-hacking, and reverse-engineering of holdout benchmarks."}],he=(t,s)=>{ee(n=>({...n,[t]:s}))},pe=t=>{se(s=>({...s,[t]:!s[t]}))};return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Feature Selection and Training & Testing Data • Topic 7"}),e.jsxs("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full flex items-center gap-1.5",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"}),"Masterclass Standard"]})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Testing Dataset: Unbiased Generalization, Statistical Power & Governance Vault"}),e.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:"Master the mathematics of unbiased risk estimation, Wald confidence intervals, the Test Set Peeking Paradox, two-model significance testing, and air-gapped holdout governance across West Bengal enterprise ecosystems."}),e.jsx("div",{className:"pt-4 flex flex-wrap gap-2 text-xs font-semibold",children:[{id:"novice",label:"1. Novice Masterclass"},{id:"studio",label:"2. Interactive Studio (3 Modes)"},{id:"math",label:"3. Mathematical Rigor"},{id:"cases",label:"4. West Bengal Industrial Cases"},{id:"quiz",label:"5. Diagnostic Assessment Quiz"},{id:"pitfalls",label:"6. Production Pitfalls"},{id:"faq",label:"7. Viva Voce & Sukanta Hui"},{id:"lab",label:"8. Python Engine & Notes"}].map(t=>e.jsx("a",{href:`#${t.id}`,onClick:()=>W(t.id),className:l("px-3 py-1.5 rounded-lg border transition-all duration-200 flex items-center gap-1.5",q===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30":"bg-slate-800/80 text-slate-300 border-slate-700/70 hover:bg-slate-700/80 hover:text-white"),children:t.label},t.id))})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"1."})," Novice Masterclass: The Sanctity of the Testing Dataset"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Intuitive mental models, statistical governance pillars, and jargon clarification for BCA/MCA students."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-indigo-500/50 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 text-2xl font-bold",children:"🔒"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Metaphor 1: The Sealed Exam Vault"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The testing dataset is the sealed MAKAUT final semester examination paper locked in the university controller's safe. It is opened only once on the day of the exam. If the professor opens the envelope a month early to show sample questions or adjust classroom lessons (hyperparameter tuning on test), the marks become a fraudulent measure of student intellect."})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/50 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 text-2xl font-bold",children:"💊"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Metaphor 2: Double-Blind Clinical Trial"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"In clinical vaccine trials at Kolkata Medical College, the test patient group receives the drug in a sealed double-blind setup. If doctors peek at interim test results and modify the chemical formulation midway to cure those specific test subjects, the entire clinical trial is disqualified by health regulators for statistical contamination."})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-emerald-500/50 transition-colors shadow-lg",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 text-2xl font-bold",children:"🚗"}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Metaphor 3: The Automotive Crash Barrier"}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Automotive safety engineers test a brand-new car by crashing it into a standardized barrier. If the engineers reinforce only the exact two square inches where that specific barrier impacts (overfitting to the test scenario), the vehicle will pass the test lab with 5 stars but crumple fatally in a real highway collision."})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Four Governance Pillars of the Testing Dataset"]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-indigo-400",children:"Pillar 1"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"Unbiased Risk Estimation"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Mathematically guarantees that the expected empirical test error equals the true population generalization risk: ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"E[R_hat_test] = R_true"}),"."]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-cyan-400",children:"Pillar 2"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"Sample Size Power (N_test)"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Ensures the test set contains sufficient instances to shrink the Wald confidence interval band ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"SE ∝ 1/√N_test"})," and distinguish genuine signal from luck."]})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-amber-400",children:"Pillar 3"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"The One-Shot Policy"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Prohibits evaluating M candidate models iteratively on D_test, neutralizing the Multiple Testing Fallacy and Extreme Value inflation."})]}),e.jsxs("div",{className:"bg-slate-950/80 border border-slate-800/80 rounded-lg p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider text-emerald-400",children:"Pillar 4"}),e.jsx("h4",{className:"text-sm font-semibold text-white",children:"Operational Shift Stress-Testing"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Audits model survival under Out-of-Time (OOT) forward temporal splits and Out-of-Distribution (OOD) extreme operational edge cases."})]})]})]}),e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-6 space-y-4",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Jargon Buster: Essential Exam Terminology"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-sm",children:[e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-indigo-300",children:"Wald Confidence Interval:"}),e.jsxs("p",{className:"text-slate-300 text-xs mt-1",children:["The statistical interval ",e.jsx("code",{className:"text-slate-200 font-mono",children:"p_hat ± 1.96 * √(p(1-p)/N)"})," bounding the true population accuracy at the 95% confidence level."]})]}),e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-cyan-300",children:"Test Set Peeking:"}),e.jsx("p",{className:"text-slate-300 text-xs mt-1",children:"The anti-pattern of using test set feedback to guide modeling decisions, hyperparameter tuning, or model selection, corrupting the test set into an overfitted validation set."})]}),e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-amber-300",children:"McNemar's Paired Test:"}),e.jsx("p",{className:"text-slate-300 text-xs mt-1",children:"A non-parametric statistical hypothesis test specifically designed for paired binary classifications to determine if Model A significantly outperforms Model B on identical test samples."})]}),e.jsxs("div",{className:"bg-slate-950/60 p-3.5 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"font-semibold text-rose-300",children:"Out-of-Time (OOT) Holdout:"}),e.jsx("p",{className:"text-slate-300 text-xs mt-1",children:"A test dataset harvested chronologically after the training cutoff period, explicitly measuring resilience against temporal macroeconomic shifts and concept drift."})]})]})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-800 pb-3 gap-4",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"2."})," Interactive Laboratory Studio"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Simulate test peeking hazards, confidence interval precision scaling, and operational distribution shifts."})]}),e.jsxs("div",{className:"flex p-1 bg-slate-900 border border-slate-800 rounded-xl",children:[e.jsx("button",{onClick:()=>C("peeking"),className:l("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",f==="peeking"?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:"Mode 1: Peeking Paradox"}),e.jsx("button",{onClick:()=>C("precision"),className:l("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",f==="precision"?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:"Mode 2: Sample Size & Power"}),e.jsx("button",{onClick:()=>C("ood"),className:l("px-3 py-1.5 rounded-lg text-xs font-semibold transition-all",f==="ood"?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:"Mode 3: OOD Stress-Tester"})]})]}),f==="peeking"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🎲"})," Mode 1: The Test Set Peeking Paradox (Multiple Testing Fallacy)"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Evaluate M candidate models on a fixed test set of size N_test. Observe how maximum apparent accuracy inflates purely via stochastic luck."})]}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Inflation Delta:"}),e.jsxs("span",{className:l("px-2.5 py-1 rounded text-xs font-bold font-mono",k>.1?"bg-rose-500/20 text-rose-300":"bg-emerald-500/20 text-emerald-300"),children:["+",(k*100).toFixed(1),"% Spurious"]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Candidate Models Evaluated (M):"}),e.jsxs("span",{className:"text-cyan-400 font-mono",children:[h," models"]})]}),e.jsx("input",{type:"range",min:"1",max:"80",step:"1",value:h,onChange:t=>G(parseInt(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Number of times D_test is peeked"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Fixed Test Set Size (N_test):"}),e.jsxs("span",{className:"text-indigo-400 font-mono",children:[b," samples"]})]}),e.jsx("input",{type:"range",min:"30",max:"400",step:"10",value:b,onChange:t=>U(parseInt(t.target.value)),className:"w-full accent-indigo-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Smaller test sets inflate variance"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsx("label",{className:"text-xs font-semibold text-slate-300",children:"Underlying Model Signal Level"}),e.jsx("div",{className:"grid grid-cols-3 gap-1",children:[{id:"null",label:"Null (50%)"},{id:"mild",label:"Mild (65%)"},{id:"strong",label:"Strong (85%)"}].map(t=>e.jsx("button",{onClick:()=>V(t.id),className:l("py-1 text-xs font-semibold rounded border transition-colors",p===t.id?"bg-amber-600 border-amber-400 text-white":"bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"),children:t.label},t.id))}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"True population accuracy"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded bg-cyan-500"})," Candidate Models (1 to ",h,")"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-4 h-0.5 bg-blue-400 border-dashed"})," True Population Mean (",p==="null"?"50%":p==="mild"?"65%":"85%",")"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-4 h-0.5 bg-rose-500"})," Spurious Max Performer (",(w*100).toFixed(1),"%)"]})]}),e.jsx("span",{className:"font-mono text-[11px] text-slate-500",children:"Vertical: Test Accuracy %"})]}),e.jsx("div",{className:"relative bg-slate-950 rounded-xl border border-slate-800 p-4 overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 200",className:"w-full h-auto max-h-[220px]",id:ae,children:[e.jsx("line",{x1:"30",y1:"170",x2:"570",y2:"170",stroke:"#334155",strokeWidth:"1"}),e.jsx("line",{x1:"30",y1:"20",x2:"30",y2:"170",stroke:"#334155",strokeWidth:"1"}),(()=>{const s=170-(p==="null"?.5:p==="mild"?.65:.85)*140,n=170-w*140,i=Math.max(3,Math.min(18,520/h-2));return e.jsxs(e.Fragment,{children:[e.jsx("line",{x1:"30",y1:s,x2:"570",y2:s,stroke:"#60a5fa",strokeWidth:"1.5",strokeDasharray:"4 4"}),e.jsx("line",{x1:"30",y1:n,x2:"570",y2:n,stroke:"#f43f5e",strokeWidth:"1.5",strokeDasharray:"2 2"}),re.map((a,o)=>{const d=40+o*((530-i)/Math.max(1,h-1)),g=a.acc*140,c=170-g,N=a.acc===w;return e.jsx("rect",{x:d,y:c,width:i,height:g,fill:N?"#f43f5e":"#06b6d4",opacity:N?1:.65,rx:"1.5",children:e.jsx("title",{children:`Model #${a.id}: Accuracy ${(a.acc*100).toFixed(1)}%`})},a.id)})]})})()]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"True Population Accuracy"}),e.jsx("div",{className:"text-2xl font-black text-blue-400 font-mono",children:p==="null"?"50.0%":p==="mild"?"65.0%":"85.0%"}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Actual predictive capability"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Spurious Max Test Score"}),e.jsxs("div",{className:"text-2xl font-black text-rose-400 font-mono",children:[(w*100).toFixed(1),"%"]}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Best performer selected by peeking"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Theoretical Max Bound"}),e.jsxs("div",{className:"text-2xl font-black text-amber-400 font-mono",children:[(oe*100).toFixed(1),"%"]}),e.jsx("span",{className:"text-[11px] text-slate-400 font-mono",children:"μ + σ √(2 ln M) Extreme Value"})]})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-rose-500/30 bg-rose-500/10 text-xs sm:text-sm text-rose-200",children:[e.jsx("span",{className:"font-bold text-white block mb-1",children:"⚠️ Mathematical Truth:"}),e.jsxs("p",{className:"leading-relaxed",children:["By evaluating ",h," candidate models on the exact same test set of N=",b,", the best model appears to score ",(w*100).toFixed(1),"%, creating an artificial +",(k*100).toFixed(1),"% illusion. If deployed, this model will immediately revert to its true capability in production."]})]})]}),f==="precision"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📏"})," Mode 2: Test Set Sample Size (N_test) & Wald Confidence Interval Precision"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Adjust test sample size N_test and observed accuracy to visually inspect how the confidence interval shrinks and controls statistical power."})]}),e.jsx("div",{className:"flex gap-1.5",children:[.9,.95,.99].map(t=>e.jsxs("button",{onClick:()=>K(t),className:l("px-2.5 py-1 text-xs font-bold rounded border transition-colors",u===t?"bg-indigo-600 border-indigo-400 text-white":"bg-slate-800 border-slate-700 text-slate-300 hover:bg-slate-700"),children:[(t*100).toFixed(0),"% CI"]},t))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Observed Test Accuracy (p_hat):"}),e.jsxs("span",{className:"text-cyan-400 font-mono",children:[(m*100).toFixed(1),"%"]})]}),e.jsx("input",{type:"range",min:"0.60",max:"0.98",step:"0.01",value:m,onChange:t=>H(parseFloat(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Measured score on holdout D_test"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Test Sample Size (N_test):"}),e.jsxs("span",{className:"text-emerald-400 font-mono",children:[x," samples"]})]}),e.jsx("input",{type:"range",min:"20",max:"2000",step:"20",value:x,onChange:t=>X(parseInt(t.target.value)),className:"w-full accent-emerald-500 cursor-pointer"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsx("span",{children:"N=20"}),e.jsx("span",{children:"N=1000"}),e.jsx("span",{children:"N=2000"})]})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Competitor Gap Delta:"}),e.jsxs("span",{className:"text-amber-400 font-mono",children:[(_*100).toFixed(1),"% gap"]})]}),e.jsx("input",{type:"range",min:"0.01",max:"0.08",step:"0.005",value:_,onChange:t=>Q(parseFloat(t.target.value)),className:"w-full accent-amber-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Performance delta vs rival model"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-3 h-3 rounded-full bg-cyan-400 border border-slate-900"})," Observed Accuracy ",(m*100).toFixed(1),"%"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-6 h-2 rounded bg-indigo-500/40 border border-indigo-400"})," ",(u*100).toFixed(0),"% Confidence Band"]})]}),e.jsxs("span",{className:"font-mono text-[11px] text-slate-500",children:["Margin of Error: ±",(S*100).toFixed(2),"%"]})]}),e.jsx("div",{className:"relative bg-slate-950 rounded-xl border border-slate-800 p-6 overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 120",className:"w-full h-auto max-h-[140px]",id:ne,children:[e.jsx("line",{x1:"50",y1:"60",x2:"550",y2:"60",stroke:"#334155",strokeWidth:"2"}),[.5,.6,.7,.8,.9,1].map(t=>{const s=50+(t-.5)/.5*500;return e.jsxs("g",{children:[e.jsx("line",{x1:s,y1:"52",x2:s,y2:"68",stroke:"#475569",strokeWidth:"1.5"}),e.jsx("text",{x:s,y:"85",textAnchor:"middle",fill:"#94a3b8",fontSize:"10",fontFamily:"monospace",children:`${(t*100).toFixed(0)}%`})]},t)}),(()=>{const t=a=>50+(a-.5)/.5*500,s=Math.max(50,t(M)),n=Math.min(550,t(I)),i=t(m);return e.jsxs(e.Fragment,{children:[e.jsx("rect",{x:s,y:"42",width:Math.max(2,n-s),height:"36",fill:"rgba(99, 102, 241, 0.25)",stroke:"#818cf8",strokeWidth:"1.5",rx:"4"}),e.jsx("line",{x1:s,y1:"36",x2:s,y2:"84",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("line",{x1:n,y1:"36",x2:n,y2:"84",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("circle",{cx:i,cy:"60",r:"6",fill:"#22d3ee",stroke:"#0f172a",strokeWidth:"2"})]})})()]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Confidence Interval Band"}),e.jsxs("div",{className:"text-xl font-black text-cyan-400 font-mono",children:["[",(M*100).toFixed(1),"%, ",(I*100).toFixed(1),"%]"]}),e.jsxs("span",{className:"text-[11px] text-slate-400",children:["Total band width: ",((I-M)*100).toFixed(1),"%"]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Margin of Error (ME)"}),e.jsxs("div",{className:"text-2xl font-black text-emerald-400 font-mono",children:["±",(S*100).toFixed(2),"%"]}),e.jsxs("span",{className:"text-[11px] text-slate-400",children:["Precision at ",(u*100).toFixed(0),"% level"]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Model Superiority Verdict"}),e.jsx("div",{className:l("text-lg font-black font-mono flex items-center gap-1.5",O?"text-emerald-400":"text-amber-400"),children:O?"SIGNIFICANT ✔":"NO EVIDENCE ❌"}),e.jsxs("span",{className:"text-[11px] text-slate-400 font-mono",children:["z = ",le.toFixed(2),", p = ",D.toFixed(4)]})]})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-xs sm:text-sm text-indigo-200",children:[e.jsx("span",{className:"font-bold text-white block mb-1",children:"💡 Instructor Note on Statistical Power:"}),e.jsx("p",{className:"leading-relaxed",children:O?`With N_test = ${x}, the margin of error is tightly constrained to ±${(S*100).toFixed(2)}%. The ${(_*100).toFixed(1)}% performance advantage over the competitor model achieves p = ${D.toFixed(4)} < ${(1-u).toFixed(2)}, mathematically proving genuine superiority.`:`Notice that even though your model scored ${(_*100).toFixed(1)}% higher, the test set size N_test = ${x} produces a wide margin of error (±${(S*100).toFixed(2)}%). Because p = ${D.toFixed(4)} >= ${(1-u).toFixed(2)}, you CANNOT reject the null hypothesis. Increase N_test to at least 450 to statistically prove this delta!`})]})]}),f==="ood"&&e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⛈️"})," Mode 3: Out-of-Distribution (OOD) & Operational Shift Stress-Tester"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Subject certified models to real-world West Bengal distribution shifts: weather spikes, airport luggage clutter, inflation shifts, and pandal road closures."})]}),e.jsx("div",{className:l("px-3.5 py-1.5 rounded-lg border text-xs font-bold",R.bg,R.color),children:R.label})]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-2",children:Object.entries(z).map(([t,s])=>e.jsxs("button",{onClick:()=>Y(t),className:l("p-3 rounded-xl border text-left text-xs transition-all",E===t?"bg-indigo-600/30 border-indigo-400 text-white shadow-md shadow-indigo-500/20":"bg-slate-950/60 border-slate-800 text-slate-300 hover:bg-slate-800"),children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-indigo-400 block",children:s.sector}),e.jsx("span",{className:"font-bold line-clamp-1",children:s.title.split("(")[0]})]},t))}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/60 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Covariate Shift Distance (Wasserstein Proxy):"}),e.jsxs("span",{className:"text-amber-400 font-mono",children:[y.toFixed(2)," sigma"]})]}),e.jsx("input",{type:"range",min:"0.0",max:"3.0",step:"0.1",value:y,onChange:t=>$(parseFloat(t.target.value)),className:"w-full accent-amber-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Distance between training and test distributions"})]}),e.jsxs("div",{className:"space-y-1.5",children:[e.jsxs("div",{className:"flex justify-between text-xs font-semibold text-slate-300",children:[e.jsx("span",{children:"Tail Non-Linearity / Clutter Noise:"}),e.jsxs("span",{className:"text-rose-400 font-mono",children:[v.toFixed(2),"x"]})]}),e.jsx("input",{type:"range",min:"0.5",max:"2.5",step:"0.1",value:v,onChange:t=>Z(parseFloat(t.target.value)),className:"w-full accent-rose-500 cursor-pointer"}),e.jsx("span",{className:"text-[10px] text-slate-400 block",children:"Operational disturbance intensity"})]})]}),e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between text-xs text-slate-400",children:[e.jsxs("span",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-3 h-0.5 bg-cyan-400"})," In-Distribution Training P_train(X)"]}),e.jsxs("span",{className:"inline-flex items-center gap-1",children:[e.jsx("span",{className:"w-3 h-0.5 bg-rose-400 border-dashed"})," Shifted Operational Test P_test(X)"]})]}),e.jsx("span",{className:"text-slate-500 font-mono text-[11px]",children:"Feature Space Coordinate X"})]}),e.jsx("div",{className:"relative bg-slate-950 rounded-xl border border-slate-800 p-2 overflow-hidden flex items-center justify-center",children:e.jsxs("svg",{viewBox:"0 0 600 180",className:"w-full h-auto max-h-[200px]",id:ie,children:[e.jsx("line",{x1:"30",y1:"150",x2:"570",y2:"150",stroke:"#334155",strokeWidth:"1.5"}),(()=>{const t=(i,a,o)=>Math.exp(-.5*((i-a)/o)**2),s=[],n=[];for(let i=-4;i<=6;i+=.2){const a=30+(i+4)/10*540,o=150-t(i,0,1.2)*120,d=150-t(i,y*1.5,1.2*v)*110;s.push(`${a},${o}`),n.push(`${a},${d}`)}return e.jsxs(e.Fragment,{children:[e.jsx("path",{d:`M 30,150 L ${s.join(" L ")} L 570,150`,fill:"rgba(6, 182, 212, 0.12)"}),e.jsx("path",{d:`M ${s.join(" L ")}`,fill:"none",stroke:"#06b6d4",strokeWidth:"2.5"}),e.jsx("path",{d:`M 30,150 L ${n.join(" L ")} L 570,150`,fill:"rgba(244, 63, 94, 0.12)"}),e.jsx("path",{d:`M ${n.join(" L ")}`,fill:"none",stroke:"#f43f5e",strokeWidth:"2.5",strokeDasharray:"4 4"})]})})()]})})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"In-Distribution Baseline"}),e.jsxs("div",{className:"text-2xl font-black text-cyan-400 font-mono",children:[P.baselineAcc,"%"]}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Score on clean i.i.d. holdout"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"OOD Stress-Test Accuracy"}),e.jsxs("div",{className:l("text-2xl font-black font-mono",parseFloat(L)<75?"text-rose-400":"text-amber-400"),children:[L,"%"]}),e.jsxs("span",{className:"text-[11px] text-slate-400",children:["Degradation: -",de,"%"]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs text-slate-400 uppercase font-semibold",children:"Expected Calibration Error (ECE)"}),e.jsx("div",{className:"text-2xl font-black text-rose-400 font-mono",children:ce}),e.jsx("span",{className:"text-[11px] text-slate-400",children:"Model confidence over-estimation"})]})]}),e.jsxs("div",{className:"p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-xs sm:text-sm text-amber-200",children:[e.jsxs("span",{className:"font-bold text-white block mb-1",children:["🏢 Regional Scenario Context (",P.title,"):"]}),e.jsx("p",{className:"leading-relaxed",children:P.description})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"3."})," Formal Mathematical Formulations"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Unbiased risk proofs, Wald confidence intervals, and extreme value peeking scaling laws."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"1."})," Mathematical Proof of Unbiased Risk Expectation"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Because D_test is drawn i.i.d. and chosen independently of hypothesis h*:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-cyan-300 text-xs sm:text-sm overflow-x-auto text-center",children:"E_{D_test}[ R̂_test(h*) ] = (1 / N) ∑_{k=1}^N E[ L(h*(x_k), y_k) ] = R_true(h*)"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Proves that the mathematical bias ",e.jsx("code",{className:"text-slate-300 font-mono",children:"Bias = E[R̂_test] - R_true ≡ 0"})," if and only if h* never peeked at D_test."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"2."})," Wald 95% Binomial Confidence Interval"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Bounds the true population accuracy given observed sample accuracy p̂ on N_test:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-cyan-300 text-xs sm:text-sm overflow-x-auto text-center",children:"CI_95 = p̂ ± 1.960 · √[ (p̂ (1 - p̂)) / N_test ]"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Demonstrates that the standard error decays as ",e.jsx("code",{className:"text-slate-300 font-mono",children:"O(1 / √N_test)"}),", requiring 4x more test data to halve the margin of error."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-amber-400",children:"3."})," Extreme Value Scaling of Test Peeking Fallacy"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Expected maximum test score when evaluating M random null models on fixed D_test:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-amber-300 text-xs sm:text-sm overflow-x-auto text-center",children:"E[ max_{m=1..M} p̂_m ] ≈ μ + σ · √(2 ln M)"}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Proves why evaluating 50 dummy models on a 100-sample test set mathematically inflates apparent top score from 50% to over 64% purely by chance."})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"4."})," McNemar's Paired Chi-Square Test"]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Tests whether Model A outperforms Model B using discordant prediction pairs:"}),e.jsx("div",{className:"bg-slate-950 p-3.5 rounded-lg border border-slate-800 font-mono text-emerald-300 text-xs sm:text-sm overflow-x-auto text-center",children:"χ² = ( |n_01 - n_10| - 1 )² / ( n_01 + n_10 ) ~ χ²(df = 1)"}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:["Where ",e.jsx("code",{className:"text-slate-300 font-mono",children:"n_01"})," is Model A wrong & Model B right, and ",e.jsx("code",{className:"text-slate-300 font-mono",children:"n_10"})," is Model A right & Model B wrong. Significant if χ² > 3.841 (p < 0.05)."]})]})]})]}),e.jsxs("section",{id:"cases",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"4."})," Real-World Regional Industrial Case Studies (West Bengal)"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"How enterprise engineering teams across Kolkata and Bengal safeguard testing dataset integrity."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-indigo-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 uppercase",children:"Power Grid Sentry"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"50,000 Smart Meters"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"CESC Central Kolkata Meter Theft Sentry"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:'CESC created an "Air-Gapped Blind Test Vault" managed by an independent audit committee. Competing vendors submit containerized Docker models that execute in a secure sandbox. Test labels are never visible to engineers, preventing iterative p-hacking and guaranteeing that the certified 91.4% theft detection accuracy translates directly into preserved grid revenue.'}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-indigo-300",children:[e.jsx("strong",{children:"Governance Protocol:"})," Air-gapped blind execution vault with one-shot metric reporting."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-cyan-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 uppercase",children:"Aviation Security"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"12,000 Baggage CT Scans"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"CCU Airport Carry-On Contraband Detection"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:'To certify AI models for Kolkata Airport baggage scanners, BCAS enforces a strict "One-Shot Evaluation Policy". Vendors are not allowed to submit multiple iterations to adjust detection thresholds against the certified threat library. This ensures vendors cannot tune their models to memorize specific brass or wire artifacts present in the test baggage.'}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-cyan-300",children:[e.jsx("strong",{children:"Governance Protocol:"})," Single-pass evaluation threshold; multiple test submissions barred."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-amber-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 uppercase",children:"Micro-Banking"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"25,000 Loan Records"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Bandhan Bank Out-of-Time (OOT) Credit Risk Audit"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Bandhan Bank strictly forbids random shuffle splitting for MSME credit underwriting models in Nadia and Hooghly. Instead, models trained on Q1-Q3 disbursement files are tested exclusively on Q4 Out-of-Time (OOT) records. This chronological partitioning verifies whether the model withstands seasonal agricultural harvest shifts and raw material price spikes."}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-amber-300",children:[e.jsx("strong",{children:"Governance Protocol:"})," Temporal OOT holdout to stress-test against macroeconomic drift."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-xl p-6 space-y-4 hover:border-emerald-500/40 transition-colors shadow-lg",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 uppercase",children:"Logistics Routing"}),e.jsx("span",{className:"text-xs text-slate-400 font-mono",children:"45,000 Night Dispatches"})]}),e.jsx("h3",{className:"text-lg font-bold text-white",children:"Swiggy / Zomato Kolkata Durga Puja Night SLA"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:'Hyperlocal delivery logistics teams created a dedicated "Festival Stress Holdout Partition". By testing routing latency predictions during Saptami through Dashami nights, engineers evaluated how severe pedestrian road blockades near Bagbazar and Gariahat distorted transit times, guiding dynamic surge buffer allocations.'}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-lg border border-slate-800 text-xs text-emerald-300",children:[e.jsx("strong",{children:"Governance Protocol:"})," Curated extreme edge-case holdout partition for operational safety."]})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"5."})," Diagnostic Assessment Quiz (Scenario-Based)"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Test your mastery of test set integrity, peeking hazards, confidence intervals, and governance vaults."})]}),e.jsx("div",{className:"space-y-6",children:me.map(t=>{const s=J[t.id],n=te[t.id];return e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:t.title}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-lg border border-slate-800 text-xs sm:text-sm text-slate-300 italic",children:['"',t.scenario,'"']}),e.jsx("h3",{className:"text-sm sm:text-base font-bold text-white pt-2",children:t.question})]}),e.jsx("div",{className:"space-y-2",children:t.options.map((i,a)=>{const o=s===a;return e.jsxs("button",{onClick:()=>he(t.id,a),className:l("w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all duration-200 flex items-start gap-3",o?"bg-indigo-600/20 border-indigo-500 text-white shadow-md shadow-indigo-500/10":"bg-slate-950/70 border-slate-800 text-slate-300 hover:bg-slate-800/60 hover:text-white"),children:[e.jsx("span",{className:l("w-5 h-5 rounded-full border flex items-center justify-center text-xs font-bold shrink-0 mt-0.5",o?"border-indigo-400 bg-indigo-500 text-white":"border-slate-600 text-slate-400"),children:String.fromCharCode(65+a)}),e.jsx("span",{children:i.label})]},a)})}),e.jsxs("div",{className:"pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsx("button",{onClick:()=>pe(t.id),className:"px-4 py-1.5 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white transition-colors",children:n?"Hide Explanation":"Check Answer & Rationale"}),s!==void 0&&n&&e.jsx("span",{className:l("text-xs font-bold",t.options[s]?.isCorrect?"text-emerald-400":"text-rose-400"),children:t.options[s]?.isCorrect?"Correct! 🎯 Flawless statistical deduction.":"Incorrect. Review the detailed statistical rationale below."})]}),n&&e.jsxs("div",{className:"p-4 rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-xs sm:text-sm text-slate-300 space-y-1",children:[e.jsx("span",{className:"font-bold text-white block",children:"Detailed Rationale:"}),e.jsx("p",{className:"leading-relaxed",children:t.explanation})]})]},t.id)})})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"6."})," Production Pitfalls & Industrial Best Practices"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Critical anti-patterns to prevent test set pollution and flawed model sign-offs."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Iterating Hyperparameters on D_test"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Evaluating 30 learning rates or tree depths directly against D_test and selecting the top scorer."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Enforce 3-way data partitioning (Train / Validation / Test). Hyperparameter tuning belongs exclusively in D_val; D_test must be executed strictly once."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: Underpowered Test Sample Sizes (N_test < 100)"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Claiming an algorithm achieved 95% accuracy on a test set of only 20 samples."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Calculate required sample sizes using binomial standard error formulas. For a precision margin of ±2%, maintain at least N_test >= 2,400 samples."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Calling fit_transform() on Test Sets"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"StandardScaler().fit_transform(X_test)"})," in evaluation scripts."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Strictly call ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".transform(X_test)"})," using transformers fit exclusively on D_train, or wrap all stages inside a Scikit-Learn Pipeline."]})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-rose-500/30 rounded-xl p-6 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2 text-rose-400 font-bold text-base",children:[e.jsx("span",{children:"⚠️"})," Pitfall 4: Ignoring Subject Identity Clustering"]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"The Mistake:"})," Splitting multiple patient radiographs or commuter journeys randomly across train and test."]}),e.jsxs("p",{className:"text-xs text-slate-400 leading-relaxed",children:[e.jsx("strong",{children:"The Remedy:"})," Implement ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"GroupShuffleSplit"})," by entity ID, ensuring all scans from a single human subject reside wholly in train or test."]})]})]})]}),e.jsxs("section",{id:"faq",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"7."})," Academic Viva Voce Questions & Teacher Guidance"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Official MAKAUT university examination questions answered by Senior Instructor Sukanta Hui."})]}),e.jsx(Se,{}),e.jsx("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6",children:e.jsx(je,{questions:Ee})})]}),e.jsxs("section",{id:"lab",className:"space-y-8 scroll-mt-6",children:[e.jsxs("div",{className:"space-y-1 border-b border-slate-800 pb-3",children:[e.jsxs("h2",{className:"text-2xl font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-indigo-400",children:"8."})," Pure Python Laboratory Engine & Comprehensive Lecture Notes"]}),e.jsx("p",{className:"text-sm text-slate-400",children:"Zero-dependency academic simulation script and printable full-length lecture transcript."})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"🐍"})," Python Simulation Laboratory (",e.jsx("code",{className:"text-cyan-300 font-mono text-sm",children:"testing_dataset_lab.py"}),")"]}),e.jsx(we,{code:Ae,filename:"testing_dataset_lab.py",moduleName:"Topic 7: Testing Dataset Laboratory Simulator"})]}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl",children:[e.jsxs("h3",{className:"text-base font-bold text-white mb-4 flex items-center gap-2",children:[e.jsx("span",{children:"📄"})," Academic Lecture Reference Transcript (",e.jsx("code",{className:"text-indigo-300 font-mono text-sm",children:"topic7_note.txt"}),")"]}),e.jsx(Te,{content:Ce,filename:"topic7_note.txt",title:"Topic 7: Testing Dataset Academic Study Notes"})]})]})]})]})};export{Fe as default};
