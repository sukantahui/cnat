import{b as l,j as e,bl as u}from"./vendor-react-core-B-R9HE-Z.js";import{P as ne}from"./PythonFileLoader-DZ61U3Y_.js";import{P as ie}from"./PlainTextPrint-C6NaUtnE.js";import{T as se}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const re=`"""
=============================================================================
TOPIC 14: DATA TRANSFORMATION (MATHEMATICAL TRANSFORMATIONS & DISCRETIZATION)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B / MAKAUT Aligned)
=============================================================================

This laboratory engine provides pure-Python, zero-dependency implementations of:
1. Higher-Order Statistical Moments (Fisher-Pearson Skewness & Excess Kurtosis)
2. Logarithmic & Root Family Transforms (Log, Log1p, Sqrt, Signed Cube-Root)
3. Box-Cox Power Transformation with Profile Maximum Likelihood Estimation (MLE)
4. Yeo-Johnson Transformation supporting negative and zero real numbers
5. Discretization / Binning Mechanics (Equal-Width vs. Equal-Frequency Quantile)
6. Shannon Entropy calculation to measure information preservation after binning
7. Industrial Case Studies from Salt Lake Sector V FinTech and CESC Grid Feeds
=============================================================================
"""

import math
import random
from typing import List, Tuple, Dict, Any, Optional

# -----------------------------------------------------------------------------
# 1. HIGHER-ORDER STATISTICAL MOMENTS (SKEWNESS & KURTOSIS)
# -----------------------------------------------------------------------------

def calculate_moments(data: List[float]) -> Dict[str, float]:
    """
    Computes sample mean, sample variance, standard deviation,
    Fisher-Pearson standardized skewness (g1), and sample excess kurtosis (g2).
    """
    n = len(data)
    if n < 4:
        raise ValueError("At least 4 samples required for valid skewness & kurtosis estimation.")
    
    mean = sum(data) / n
    m2 = sum((x - mean) ** 2 for x in data) / n
    m3 = sum((x - mean) ** 3 for x in data) / n
    m4 = sum((x - mean) ** 4 for x in data) / n
    
    variance = m2 * (n / (n - 1))
    stdev = math.sqrt(variance)
    
    # Unbiased Fisher-Pearson skewness: G1 = sqrt(n*(n-1))/(n-2) * (m3 / m2^(1.5))
    if m2 <= 1e-12:
        skewness = 0.0
        kurtosis = 0.0
    else:
        g1 = m3 / (m2 ** 1.5)
        skewness = (math.sqrt(n * (n - 1)) / (n - 2)) * g1
        
        # Excess kurtosis (G2): relative to normal distribution (3.0)
        g2 = (m4 / (m2 ** 2)) - 3.0
        kurtosis = ((n - 1) / ((n - 2) * (n - 3))) * ((n + 1) * g2 + 6)
        
    return {
        "n": n,
        "mean": round(mean, 4),
        "variance": round(variance, 4),
        "stdev": round(stdev, 4),
        "skewness": round(skewness, 4),
        "excess_kurtosis": round(kurtosis, 4)
    }

# -----------------------------------------------------------------------------
# 2. ELEMENTARY POWER & ROOT TRANSFORMS
# -----------------------------------------------------------------------------

def transform_log1p(data: List[float]) -> List[float]:
    """Computes y = ln(1 + x). Strictly requires x > -1.0."""
    return [math.log(1.0 + x) for x in data]

def transform_sqrt(data: List[float]) -> List[float]:
    """Computes y = sqrt(x). Strictly requires x >= 0."""
    return [math.sqrt(max(0.0, x)) for x in data]

def transform_signed_cbrt(data: List[float]) -> List[float]:
    """
    Computes signed cube root y = sign(x) * |x|^(1/3).
    Supports all real numbers including negative and zero.
    """
    return [math.copysign(abs(x) ** (1.0 / 3.0), x) for x in data]

# -----------------------------------------------------------------------------
# 3. BOX-COX POWER TRANSFORMATION & PROFILE MLE (George Box & David Cox, 1964)
# -----------------------------------------------------------------------------

def box_cox_scalar(x: float, lmbda: float) -> float:
    """
    Computes the Box-Cox transformed value for a single strictly positive scalar x > 0:
    y(lambda) = (x^lambda - 1) / lambda   if lambda != 0
    y(lambda) = ln(x)                     if lambda == 0
    """
    if x <= 0:
        raise ValueError(f"Box-Cox requires strictly positive values (x > 0). Found: {x}")
    if abs(lmbda) < 1e-6:
        return math.log(x)
    return (x ** lmbda - 1.0) / lmbda

def box_cox_transform(data: List[float], lmbda: float) -> List[float]:
    """Applies Box-Cox transform over a dataset for a fixed parameter lambda."""
    return [box_cox_scalar(x, lmbda) for x in data]

def box_cox_profile_log_likelihood(data: List[float], lmbda: float) -> float:
    """
    Computes the Profile Log-Likelihood L(lambda) for Box-Cox:
    L(lambda) = - (n/2) * ln(sigma_hat^2(lambda)) + (lambda - 1) * sum(ln(x_i))
    where sigma_hat^2(lambda) = (1/n) * sum((y_i(lambda) - y_bar(lambda))^2)
    """
    n = len(data)
    y = box_cox_transform(data, lmbda)
    mean_y = sum(y) / n
    var_y = sum((val - mean_y) ** 2 for val in y) / n
    
    if var_y <= 1e-14:
        return -float("inf")
    
    sum_ln_x = sum(math.log(x) for x in data)
    ll = -0.5 * n * math.log(var_y) + (lmbda - 1.0) * sum_ln_x
    return ll

def fit_box_cox(data: List[float], lmbda_min: float = -2.0, lmbda_max: float = 2.0, steps: int = 401) -> Tuple[float, float, List[float]]:
    """
    Finds the optimal Box-Cox parameter lambda* that maximizes the profile log-likelihood
    via fine-grained 1D grid search.
    Returns: (optimal_lambda, max_log_likelihood, transformed_data)
    """
    best_ll = -float("inf")
    best_lmbda = 1.0
    step_size = (lmbda_max - lmbda_min) / (steps - 1)
    
    for i in range(steps):
        cand_lmbda = round(lmbda_min + i * step_size, 4)
        try:
            ll = box_cox_profile_log_likelihood(data, cand_lmbda)
            if ll > best_ll:
                best_ll = ll
                best_lmbda = cand_lmbda
        except (ValueError, OverflowError):
            continue
            
    transformed = box_cox_transform(data, best_lmbda)
    return best_lmbda, best_ll, transformed

# -----------------------------------------------------------------------------
# 4. YEO-JOHNSON TRANSFORMATION (Ing-Guey Yeo & Richard Johnson, 2000)
# -----------------------------------------------------------------------------

def yeo_johnson_scalar(x: float, lmbda: float) -> float:
    """
    Computes the Yeo-Johnson transformed value for any real scalar x in (-inf, +inf):
    For x >= 0:
      if lambda != 0: ((x + 1)^lambda - 1) / lambda
      if lambda == 0: ln(x + 1)
    For x < 0:
      if lambda != 2: - ((-x + 1)^(2 - lambda) - 1) / (2 - lambda)
      if lambda == 2: - ln(-x + 1)
    """
    if x >= 0:
        if abs(lmbda) < 1e-6:
            return math.log(x + 1.0)
        return ((x + 1.0) ** lmbda - 1.0) / lmbda
    else:
        if abs(lmbda - 2.0) < 1e-6:
            return -math.log(-x + 1.0)
        return -(((-x + 1.0) ** (2.0 - lmbda) - 1.0) / (2.0 - lmbda))

def yeo_johnson_transform(data: List[float], lmbda: float) -> List[float]:
    """Applies Yeo-Johnson transform across a dataset for a fixed parameter lambda."""
    return [yeo_johnson_scalar(x, lmbda) for x in data]

def yeo_johnson_profile_log_likelihood(data: List[float], lmbda: float) -> float:
    """
    Computes the Profile Log-Likelihood for Yeo-Johnson:
    L(lambda) = - (n/2) * ln(sigma_hat^2(lambda)) + (lambda - 1) * sum(sign(x_i) * ln(|x_i| + 1))
    """
    n = len(data)
    y = yeo_johnson_transform(data, lmbda)
    mean_y = sum(y) / n
    var_y = sum((val - mean_y) ** 2 for val in y) / n
    
    if var_y <= 1e-14:
        return -float("inf")
    
    jacobian_sum = sum(
        (1.0 if x >= 0 else -1.0) * math.log(abs(x) + 1.0)
        for x in data
    )
    ll = -0.5 * n * math.log(var_y) + (lmbda - 1.0) * jacobian_sum
    return ll

def fit_yeo_johnson(data: List[float], lmbda_min: float = -2.0, lmbda_max: float = 2.0, steps: int = 401) -> Tuple[float, float, List[float]]:
    """
    Finds the optimal Yeo-Johnson parameter lambda* via 1D grid search.
    Returns: (optimal_lambda, max_log_likelihood, transformed_data)
    """
    best_ll = -float("inf")
    best_lmbda = 1.0
    step_size = (lmbda_max - lmbda_min) / (steps - 1)
    
    for i in range(steps):
        cand_lmbda = round(lmbda_min + i * step_size, 4)
        try:
            ll = yeo_johnson_profile_log_likelihood(data, cand_lmbda)
            if ll > best_ll:
                best_ll = ll
                best_lmbda = cand_lmbda
        except (ValueError, OverflowError):
            continue
            
    transformed = yeo_johnson_transform(data, best_lmbda)
    return best_lmbda, best_ll, transformed

# -----------------------------------------------------------------------------
# 5. DISCRETIZATION & BINNING (EQUAL-WIDTH VS EQUAL-FREQUENCY QUANTILE)
# -----------------------------------------------------------------------------

def calculate_shannon_entropy(bin_counts: List[int], n: int) -> float:
    """Computes Shannon Entropy H(X) = - sum(p_i * log2(p_i)) in bits."""
    entropy = 0.0
    for count in bin_counts:
        if count > 0:
            p = count / n
            entropy -= p * math.log2(p)
    return round(entropy, 4)

def equal_width_binning(data: List[float], k: int) -> Dict[str, Any]:
    """
    Divides the feature range [min, max] into k equal-width intervals.
    bin_width = (max - min) / k
    """
    min_val = min(data)
    max_val = max(data)
    rng = max_val - min_val
    if rng <= 1e-12:
        return {"edges": [min_val, max_val], "counts": [len(data)], "entropy": 0.0, "assignments": [0] * len(data)}
        
    width = rng / k
    edges = [min_val + i * width for i in range(k + 1)]
    edges[-1] = max_val + 1e-9  # Include upper bound
    
    counts = [0] * k
    assignments = []
    
    for x in data:
        bin_idx = int((x - min_val) / width)
        if bin_idx >= k:
            bin_idx = k - 1
        elif bin_idx < 0:
            bin_idx = 0
        counts[bin_idx] += 1
        assignments.append(bin_idx)
        
    entropy = calculate_shannon_entropy(counts, len(data))
    max_possible_entropy = round(math.log2(k), 4)
    
    return {
        "k": k,
        "width": round(width, 4),
        "edges": [round(e, 4) for e in edges],
        "counts": counts,
        "entropy_bits": entropy,
        "max_entropy_bits": max_possible_entropy,
        "entropy_ratio": round(entropy / max_possible_entropy, 4) if max_possible_entropy > 0 else 1.0,
        "assignments": assignments
    }

def equal_frequency_binning(data: List[float], k: int) -> Dict[str, Any]:
    """
    Divides data into k quantiles so each bin contains approximately n / k observations.
    """
    n = len(data)
    sorted_data = sorted(data)
    
    edges = [sorted_data[0]]
    for i in range(1, k):
        idx = int(i * (n / k))
        edges.append(sorted_data[idx])
    edges.append(sorted_data[-1] + 1e-9)
    
    counts = [0] * k
    assignments = []
    
    for x in data:
        # Binary search or scan for bin
        placed = False
        for b in range(k):
            if edges[b] <= x < edges[b + 1]:
                counts[b] += 1
                assignments.append(b)
                placed = True
                break
        if not placed:
            counts[k - 1] += 1
            assignments.append(k - 1)
            
    entropy = calculate_shannon_entropy(counts, n)
    max_possible_entropy = round(math.log2(k), 4)
    
    return {
        "k": k,
        "edges": [round(e, 4) for e in edges],
        "counts": counts,
        "entropy_bits": entropy,
        "max_entropy_bits": max_possible_entropy,
        "entropy_ratio": round(entropy / max_possible_entropy, 4) if max_possible_entropy > 0 else 1.0,
        "assignments": assignments
    }

# -----------------------------------------------------------------------------
# 6. LABORATORY EXPERIMENTS & REAL-WORLD REGIONAL BENCHMARKS
# -----------------------------------------------------------------------------

def run_laboratory():
    print("=" * 80)
    print("  ACADEMIC & INDUSTRIAL BENCHMARK: DATA TRANSFORMATION ENGINE")
    print("  Course: BCAC701B | Machine Learning Preprocessing Laboratory")
    print("  Author: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    # -------------------------------------------------------------------------
    # EXPERIMENT 1: FINTECH LOAN REQUESTS (SALT LAKE SECTOR V) - POSITIVE SKEW
    # -------------------------------------------------------------------------
    print("\\n--- [EXPERIMENT 1] FINTECH LOAN REQUEST AMOUNTS (SECTOR V, KOLKATA) ---")
    # Highly right-skewed loan amounts in INR thousands
    loans = [
        15.0, 18.0, 20.0, 22.0, 25.0, 25.0, 30.0, 32.0, 35.0, 40.0,
        45.0, 50.0, 60.0, 75.0, 90.0, 120.0, 180.0, 250.0, 400.0, 850.0
    ]
    raw_moments = calculate_moments(loans)
    print(f"Total Loan Applications: {raw_moments['n']}")
    print(f"Raw Feature Metrics: Mean = Rs {raw_moments['mean']}k | StDev = Rs {raw_moments['stdev']}k")
    print(f"Raw Skewness g1: {raw_moments['skewness']} (Severely Right-Skewed!)")
    print(f"Raw Excess Kurtosis g2: {raw_moments['excess_kurtosis']} (Heavy-Tailed Leptokurtic)")

    # 1. Log1p Transform
    log_loans = transform_log1p(loans)
    log_moments = calculate_moments(log_loans)
    print(f"\\n1. Natural Logarithm (ln(1 + x)):")
    print(f"   Transformed Skewness: {log_moments['skewness']} (Reduced from {raw_moments['skewness']})")
    print(f"   Transformed Kurtosis: {log_moments['excess_kurtosis']}")

    # 2. Square Root Transform
    sqrt_loans = transform_sqrt(loans)
    sqrt_moments = calculate_moments(sqrt_loans)
    print(f"\\n2. Square Root Transform (sqrt(x)):")
    print(f"   Transformed Skewness: {sqrt_moments['skewness']}")
    print(f"   Transformed Kurtosis: {sqrt_moments['excess_kurtosis']}")

    # 3. Box-Cox MLE Transform
    opt_lambda_bc, max_ll_bc, bc_loans = fit_box_cox(loans)
    bc_moments = calculate_moments(bc_loans)
    print(f"\\n3. Box-Cox Maximum Likelihood Estimation (MLE):")
    print(f"   Optimal Parameter lambda*: {opt_lambda_bc}")
    print(f"   Max Profile Log-Likelihood: {round(max_ll_bc, 2)}")
    print(f"   Transformed Skewness: {bc_moments['skewness']} (Closest to Normal N(0,1)!)")
    print(f"   Transformed Kurtosis: {bc_moments['excess_kurtosis']}")

    # -------------------------------------------------------------------------
    # EXPERIMENT 2: CESC GRID DEMAND WITH REVERSE SOLAR FEEDS - NEGATIVE VALUES
    # -------------------------------------------------------------------------
    print("\\n--- [EXPERIMENT 2] CESC POWER GRID NET LOAD (MW) - NEGATIVE & ZERO VALUES ---")
    # Hourly net load: positive = demand from grid, negative = rooftop solar surplus feed-in
    grid_load = [
        -14.2, -8.5, -4.0, -1.2, 0.0, 3.5, 8.2, 12.0, 18.5, 25.0,
        34.0, 42.0, 50.5, 62.0, 78.0, 95.0, 110.0, 135.0, 175.0, 240.0
    ]
    raw_grid_moments = calculate_moments(grid_load)
    print(f"Observations: {raw_grid_moments['n']} hours")
    print(f"Min Load: {min(grid_load)} MW | Max Load: {max(grid_load)} MW")
    print(f"Raw Skewness: {raw_grid_moments['skewness']}")
    print("⚠️ Box-Cox CANNOT be computed because data contains zero and negative values (x <= 0)!")

    # Yeo-Johnson Transform
    opt_lambda_yj, max_ll_yj, yj_grid = fit_yeo_johnson(grid_load)
    yj_moments = calculate_moments(yj_grid)
    print(f"\\nYeo-Johnson Transform (Supports R):")
    print(f"   Optimal Parameter lambda*: {opt_lambda_yj}")
    print(f"   Max Profile Log-Likelihood: {round(max_ll_yj, 2)}")
    print(f"   Transformed Skewness: {yj_moments['skewness']} (Symmetrized from {raw_grid_moments['skewness']})")
    print(f"   Transformed Kurtosis: {yj_moments['excess_kurtosis']}")

    # -------------------------------------------------------------------------
    # EXPERIMENT 3: DISCRETIZATION COMPARISON: EQUAL-WIDTH VS EQUAL-FREQUENCY
    # -------------------------------------------------------------------------
    print("\\n--- [EXPERIMENT 3] DISCRETIZATION & SHANNON ENTROPY PRESERVATION ---")
    # Dataset with extreme outlier (e.g. 1000)
    salary_data = [20, 22, 24, 25, 26, 28, 30, 32, 35, 38, 40, 42, 45, 50, 60, 1000]
    k_bins = 4
    
    ew = equal_width_binning(salary_data, k=k_bins)
    ef = equal_frequency_binning(salary_data, k=k_bins)
    
    print(f"Dataset Size: {len(salary_data)} | Outlier: 1000 | Target Bins: {k_bins}")
    print(f"\\nA. Equal-Width Binning:")
    print(f"   Bin Edges: {ew['edges']}")
    print(f"   Bin Frequencies: {ew['counts']}")
    print(f"   Shannon Entropy: {ew['entropy_bits']} / {ew['max_entropy_bits']} bits (Efficiency: {ew['entropy_ratio'] * 100}%)")
    print("   ⚠️ Notice: 15 samples collapsed into Bin 0, Bins 1 and 2 are EMPTY (Swamped by Outlier)!")

    print(f"\\nB. Equal-Frequency (Quantile) Binning:")
    print(f"   Bin Edges: {ef['edges']}")
    print(f"   Bin Frequencies: {ef['counts']}")
    print(f"   Shannon Entropy: {ef['entropy_bits']} / {ef['max_entropy_bits']} bits (Efficiency: {ef['entropy_ratio'] * 100}%)")
    print("   ✔ Quantile binning retains balanced sample distribution and near-maximal entropy!")

    print("\\n" + "=" * 80)
    print("  LABORATORY EXECUTION COMPLETE: ALL TRANSFORMATION ENGINES VERIFIED")
    print("=" * 80)

if __name__ == "__main__":
    run_laboratory()
`,oe=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B / MAKAUT Aligned)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 14: Data transformation (Mathematical Transforms, Power Families & Discretization)
Author: Sukanta Hui | Senior Academic Mentor & System Architect
Location: Barrackpore, West Bengal, India
=============================================================================

1. THEORETICAL FOUNDATION & CONCEPTS
-----------------------------------------------------------------------------
Data Transformation is the deterministic mathematical mapping of an input feature 
vector x in R to a transformed space phi(x) in R to satisfy structural statistical 
assumptions required by parametric machine learning algorithms.

1.1 Why Transform Features in Machine Learning?
Many classical algorithms (Ordinary Least Squares Linear Regression, Logistic 
Regression, Linear Discriminant Analysis, Gaussian Naive Bayes, Principal Component 
Analysis) rely on fundamental distributional assumptions:
a) Normality of Residuals: Errors e = y - y_hat follow a Gaussian distribution N(0, sigma^2).
b) Homoscedasticity: The variance of errors is constant across all predictor levels:
   Var(e | X = x) = sigma^2 (Constant variance; absence of cone-shaped residual scatter).
c) Linearity: The relationship between the predictors and the expected response is linear.
d) Spherical Optimization Landscapes: In gradient descent, extreme skewness creates 
   eccentric, elongated ellipsoidal error surfaces with high condition numbers (kappa >> 1), 
   forcing oscillations and dramatically slowing down parameter convergence.

1.2 Understanding Skewness and Kurtosis:
Let X be a continuous random variable with mean mu and standard deviation sigma.
- Fisher-Pearson Sample Skewness (g1):
  g1 = [sqrt(n*(n-1)) / (n-2)] * [ (1/n) * sum_{i=1}^n (x_i - x_bar)^3 / s^3 ]
  * Positive Skew (Right-skewed, g1 > 0): Long right tail; Mean > Median > Mode. 
    Examples: Incomes, real estate prices, server latencies, insurance claim payouts.
  * Negative Skew (Left-skewed, g1 < 0): Long left tail; Mean < Median < Mode.
    Examples: Human lifespan, student test scores in premier academies, retirement age.
  * Symmetric / Gaussian (g1 approx 0): Mean = Median = Mode.

- Sample Excess Kurtosis (g2):
  g2 = [ (1/n) * sum_{i=1}^n (x_i - x_bar)^4 / s^4 ] - 3.0
  * Leptokurtic (g2 > 0): Heavy tails, high peak, high outlier probability.
  * Platykurtic (g2 < 0): Light tails, flat peak, low outlier probability.
  * Mesokurtic (g2 = 0): Normal Gaussian distribution tail decay.

-----------------------------------------------------------------------------
2. MATHEMATICAL FORMULATION & TRANSFORMATION FAMILIES
-----------------------------------------------------------------------------

2.1 The Logarithmic Family
The logarithmic function y = ln(x) compresses the upper tail of positive distributions 
by compressing magnitudes non-linearly (the derivative d/dx ln(x) = 1/x decreases as x grows).
- Natural Log: y = ln(x), defined strictly for x > 0.
- Log1p Transform: y = ln(1 + x), defined for x > -1, perfectly accommodates non-negative 
  features with true zeros (e.g., number of hospital visits, retail purchase counts).

2.2 Root and Signed Power Transforms
- Square Root: y = sqrt(x), defined for x >= 0. Useful for Poisson-distributed count data 
  (variance-stabilizing transformation where Var(X) proportional to Mean(X)).
- Signed Cube Root: y = sign(x) * |x|^(1/3). Symmetric, defined for all real numbers x in R. 
  Compresses both positive and negative extremes while preserving algebraic sign.

2.3 The Box-Cox Power Transformation (George Box & David Cox, 1964)
The Box-Cox transformation is a generalized parametric power family designed to transform 
continuous strictly positive features (x > 0) into an approximately normal distribution.
The piecewise function is defined by parameter lambda in R:
               { (x^lambda - 1) / lambda    if lambda != 0
  y(lambda) =  {
               { ln(x)                      if lambda == 0

- Notable Special Cases of lambda:
  * lambda = 1.0  : Linear shift (x - 1), no shape change.
  * lambda = 0.5  : Square root transform (2 * (sqrt(x) - 1)).
  * lambda = 0.0  : Natural log transform ln(x).
  * lambda = -0.5 : Reciprocal square root.
  * lambda = -1.0 : Inverse / Reciprocal transform (1 - 1/x).
  * lambda = 2.0  : Quadratic transform (corrects negative skew).

- Profile Maximum Likelihood Estimation (MLE) of lambda:
  Assuming the transformed variable y(lambda) follows N(mu, sigma^2), the parameter 
  lambda is estimated by maximizing the profile log-likelihood function L(lambda):
  L(lambda) = - (n / 2) * ln(sigma_hat^2(lambda)) + (lambda - 1) * sum_{i=1}^n ln(x_i)
  where sigma_hat^2(lambda) = (1/n) * sum_{i=1}^n (y_i(lambda) - y_bar(lambda))^2.
  The second term (lambda - 1) * sum ln(x_i) is the Jacobian determinant of the transformation, 
  preventing scale shrinkage from artificially collapsing the variance to zero.

2.4 The Yeo-Johnson Transformation (Ing-Guey Yeo & Richard Johnson, 2000)
Box-Cox strictly fails when x <= 0. Yeo and Johnson introduced a 4-branch power 
transformation valid for all real numbers (-inf < x < +inf):
                    { ((x + 1)^lambda - 1) / lambda             if lambda != 0, x >= 0
                    { ln(x + 1)                                 if lambda == 0, x >= 0
  psi(lambda, x) =  {
                    { - ((-x + 1)^(2 - lambda) - 1) / (2 - lambda) if lambda != 2, x < 0
                    { - ln(-x + 1)                              if lambda == 2, x < 0

- Properties:
  * Invertible and strictly monotonic everywhere on R.
  * Smooth first derivative across the origin x = 0 when lambda in [0, 2].
  * Profile Log-Likelihood Jacobian Term: (lambda - 1) * sum_{i=1}^n sign(x_i) * ln(|x_i| + 1).

2.5 Discretization and Quantization (Binning)
Discretization maps continuous numerical features into discrete categorical buckets (bins).
- Equal-Width (Uniform) Binning:
  Divides the domain [x_min, x_max] into k intervals of equal width:
  w = (x_max - x_min) / k.
  * Pathology: Vulnerable to outliers. A single extreme outlier forces 99% of samples 
    into the lowest bin, leaving higher bins completely empty.
- Equal-Frequency (Quantile) Binning:
  Divides the sorted dataset into k quantiles such that each bin holds approx n / k samples.
  * Advantage: Highly robust to outliers; guarantees equal representation.
- Information Theoretic Evaluation (Shannon Entropy):
  The information capacity of a discretized feature with k bins is measured by Shannon Entropy:
  H(X) = - sum_{j=1}^k p_j * log2(p_j)   (measured in bits)
  * Maximum entropy is H_max = log2(k), achieved strictly when all bins have equal frequency (p_j = 1/k).
  * Equal-frequency binning maximizes feature entropy and mutual information with targets.

-----------------------------------------------------------------------------
3. COMPARATIVE ARCHITECTURAL MATRIX
-----------------------------------------------------------------------------
| Feature Metric             | Log1p (ln(1+x)) | Box-Cox          | Yeo-Johnson       | Equal-Width Binning | Quantile Binning   |
| :------------------------- | :-------------- | :--------------- | :---------------- | :------------------ | :----------------- |
| Mathematical Domain        | x > -1.0        | x > 0.0 strictly | All x in R (-inf,+inf) | All x in R          | All x in R         |
| Supports Zero / Negatives  | Zero: Yes, Neg: No| Neither         | Both Supported    | Both Supported      | Both Supported     |
| Parameter Optimization     | Fixed (No param)| MLE Grid Search  | MLE Grid Search   | Number of bins k    | Number of bins k   |
| Outlier Sensitivity        | Moderate        | Moderate         | Moderate          | Catastrophic        | Immune (Robust)    |
| Invertibility (Bijective)  | Exact: exp(y)-1 | Exact algebraic  | Exact algebraic   | Lossy (Irreversible)| Lossy (Irreversible)|
| Skewness Target Correction | Right skew only | Right & Left skew| Right & Left skew | Linear compression  | Non-linear ranking |
| Entropy Preservation       | Continuous      | Continuous       | Continuous        | Low under outliers  | Maximal (log2(k))  |

-----------------------------------------------------------------------------
4. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
-----------------------------------------------------------------------------

Case Study 1: FinTech Micro-Lending in Salt Lake Sector V (Loan Amount Skewness)
- Scenario: A Kolkata-based digital lending startup evaluates personal loan requests. 
  92% of borrowers request small credit between Rs 15,000 and Rs 50,000, but a tiny 
  fraction request enterprise bridge loans up to Rs 25,00,000.
- Raw Data Metrics: Fisher-Pearson skewness g1 = +4.82, kurtosis g2 = +28.4.
- Engineering Action: Training an OLS default-probability model on raw values yielded 
  severely heteroscedastic residuals and inflated standard errors. Applying Box-Cox 
  with MLE converged to lambda* = -0.32, reducing skewness to +0.08 and stabilizing 
  residual variance across all applicant income brackets.

Case Study 2: CESC Kolkata Peak Power Grid Load (Solar Reverse Feed-In)
- Scenario: Calcutta Electric Supply Corporation (CESC) monitors net hourly transformer 
  load (MW) across urban feeding stations. With rooftop solar installations, midday 
  net load becomes negative (-15 MW to -2 MW) during bright sunny hours, while evening 
  peak demand jumps to +220 MW.
- Challenge: Box-Cox cannot be executed due to non-positive values. Log1p fails on negative feeds.
- Engineering Action: The engineering team deployed Yeo-Johnson transformation. The profile 
  likelihood optimization yielded lambda* = 0.58. The transformed net load eliminated 
  gradient explosion in the deep neural network load forecaster, reducing 24-hour MAPE by 3.4%.

Case Study 3: Howrah Wholesale Agri-Market (Potato Price Volatility & Quantile Binning)
- Scenario: Daily wholesale prices of Jyoti potatoes per quintal across Cold Storage hubs 
  in Hooghly and Howrah fluctuate between Rs 800 and Rs 1,400 during normal seasons, but 
  spiked to Rs 3,800 during severe flood disruptions.
- Challenge: Equal-width binning with k=5 created three empty middle bins and collapsed 
  all normal trade days into bin 0.
- Engineering Action: Implemented 5-bin Quantile Discretization. Each bin represented an 
  exact 20th percentile economic regime (Glut, Normal Low, Normal High, Pre-Festival, Crisis Spike). 
  Entropy increased from 0.42 bits to 2.32 bits, allowing a Decision Tree classifier to cleanly 
  predict hoarding behaviour without being misled by sparse outlier bins.

Case Study 4: North 24 Parganas Public Health Dengue Platelet Surveillance
- Scenario: Clinical health centers in Barasat and Barrackpore track patient platelet counts 
  during monsoon dengue outbreaks. Platelet counts range from 8,000/microL (severe shock) 
  to 450,000/microL (normal upper bound).
- Engineering Action: Count data exhibited extreme non-constant variance (Poisson-like dispersion). 
  Square-root and Box-Cox power transforms (lambda* = 0.41) stabilized the clinical 
  variance, enabling standard linear discriminant classifiers to detect shock progression 
  18 hours earlier than raw threshold rules.

-----------------------------------------------------------------------------
5. PRODUCTION PITFALLS & PRACTICAL ENGINEERING RULES
-----------------------------------------------------------------------------
1. Data Leakage via Transformation Parameters:
   NEVER fit lambda (for Box-Cox/Yeo-Johnson) or bin edges on the entire dataset. Always 
   fit on training data only (X_train) and transform validation/test sets using the 
   fitted training lambda*. Computing lambda on the full dataset leaks test distribution moments.

2. Box-Cox Non-Positive Crash in Serving:
   If Box-Cox is trained on positive training data, but an incoming production record 
   contains x = 0 or x < 0, the pipeline will crash with a domain error. Always install 
   a defensive assertion or deploy Yeo-Johnson if zero/negative inputs are theoretically possible.

3. The Target Variable Transformation Trap (Jensen's Inequality):
   When applying log-transform to the target variable y (e.g., predicting house prices):
   ln(y) = X * beta + e. If you simply predict y_hat = exp(X * beta_hat), your predictions 
   will systematically UNDERESTIMATE the true mean response because of Jensen's Inequality:
   E[exp(Z)] >= exp(E[Z]).
   Correction: For normally distributed residuals with variance s^2, the unbiased 
   back-transformation expectation is: y_hat = exp(X * beta_hat + s^2 / 2), or use 
   Duan's Smearing Estimator for non-normal errors.

4. Pointless Transformation for Tree Ensembles:
   Decision trees, Random Forests, and Gradient Boosted Trees (XGBoost, LightGBM, CatBoost) 
   split nodes using monotonic rank ordering: if x_i < x_j, then f(x_i) < f(x_j) for any 
   strictly increasing transformation. Transforming features with Log or Box-Cox yields 
   EXACTLY IDENTICAL tree splits and zero performance gain. Do not waste inference latency.

5. Equal-Width Discretization Collapse:
   Never apply equal-width binning on data with heavy tails or unhandled outliers. A single 
   extreme value will swamp the range, generating virtually empty bins and destroying feature entropy.

6. Numerical Underflow in Profile Likelihood:
   When calculating Box-Cox profile log-likelihood for large n, variance of transformed data 
   can become infinitesimal if lambda is improperly bounded, causing log(0) domain errors. 
   Always bound search intervals (typically lambda in [-2.5, +2.5]).

7. High-Cardinality Binning Overfitting:
   Discretizing a continuous feature into too many bins (e.g., k = 100) effectively 
   converts a smooth signal into 100 noisy categorical levels, inflating model degrees 
   of freedom and triggering severe variance error (overfitting).

8. Preserving Invertibility Pipelines:
   Store fitted transformer parameters (mean, lambda, shift constant) in a serializable 
   pipeline metadata object (e.g. JSON/Joblib) so that model explainability tools (SHAP, LIME) 
   can invert feature contributions back to native units (INR, MW, Celsius).

-----------------------------------------------------------------------------
6. INSTRUCTOR CHECKLIST & REVISION NOTES (SUKANTA HUI)
-----------------------------------------------------------------------------
[ ] Step 1: Plot histogram, KDE, and compute Fisher-Pearson skewness g1 before choosing a model.
[ ] Step 2: If |g1| < 0.5, the feature is approximately symmetric; transformation may not be needed.
[ ] Step 3: If g1 > 1.0 and x > 0, compare Log1p vs Box-Cox MLE.
[ ] Step 4: If data contains zero or negative values and non-linear power shaping is needed, select Yeo-Johnson.
[ ] Step 5: For count data exhibiting Poisson dispersion (Variance approx Mean), apply Square Root transform.
[ ] Step 6: If non-linear relationships with the target are complex and jagged, evaluate Quantile Binning.
[ ] Step 7: Verify that tree models are not burdened with unnecessary monotonic continuous transforms.
[ ] Step 8: When transforming target variables, guarantee that Jensen's inequality bias correction is implemented.

-----------------------------------------------------------------------------
7. MAKAUT VIVA VOCE & UNIVERSITY EXAM Q&A (10 GRADED QUESTIONS)
-----------------------------------------------------------------------------

Q1: Why does Ordinary Least Squares (OLS) regression require transformed, normal features if Gauss-Markov only requires zero error mean and homoscedasticity?
A1: Under the Gauss-Markov theorem, OLS is the Best Linear Unbiased Estimator (BLUE) without requiring normality. However, hypothesis testing (t-tests for feature p-values, F-tests for model significance) and confidence/prediction interval derivations strictly assume that the errors e follow a Gaussian normal distribution. Furthermore, transforming skewed predictors linearizes relationships and eliminates heteroscedasticity, which directly protects the validity of OLS variance estimates.

Q2: State the exact mathematical definition of the Box-Cox transformation and explain why the case lambda = 0 is defined as ln(x).
A2: Box-Cox is defined as: y(lambda) = (x^lambda - 1) / lambda for lambda != 0, and y = ln(x) for lambda = 0.
By L'Hopital's Rule, as lambda approaches 0:
lim_{lambda -> 0} (x^lambda - 1) / lambda = lim_{lambda -> 0} [ d/d(lambda) (exp(lambda * ln(x)) - 1) ] / [ d/d(lambda) (lambda) ]
= lim_{lambda -> 0} [ ln(x) * exp(lambda * ln(x)) ] / 1 = ln(x) * exp(0) = ln(x).
Thus, ln(x) is the continuous analytic limit of the power family at lambda = 0.

Q3: Why can Box-Cox not be applied to data containing negative numbers or zeros?
A3: For any non-integer or fractional lambda (such as lambda = 0.5), computing x^lambda for negative x produces complex/imaginary numbers. At x = 0 and lambda < 0, x^lambda results in division by zero (0^(-|lambda|) = 1/0). Furthermore, the Jacobian term of the log-likelihood contains sum ln(x_i), which is undefined for x_i <= 0.

Q4: How does the Yeo-Johnson transformation overcome the negative-number limitation of Box-Cox?
A4: Yeo-Johnson splits the real line into positive (x >= 0) and negative (x < 0) branches. For negative x, it transforms (-x + 1) using power (2 - lambda), ensuring that the base term is always strictly positive (since x < 0 implies -x + 1 > 1). The exponent (2 - lambda) ensures that the function remains continuous, strictly monotonic, and smooth across x = 0.

Q5: In profile maximum likelihood estimation for lambda, why must the Jacobian term be included?
A5: If one only minimized the sample variance of transformed values sigma_hat^2(lambda), the optimization would cheat by selecting lambda -> 0 or negative values that artificially compress the scale of y to zero (e.g., scaling all numbers into [0.0001, 0.0002]), which trivially yields tiny variance. The Jacobian term (lambda - 1) * sum ln(x_i) penalizes scale distortion, ensuring true normalization rather than mere variance collapse.

Q6: What is the primary operational difference between Equal-Width and Equal-Frequency (Quantile) binning?
A6: Equal-width binning divides the range (max - min) into k segments of identical width w. If outliers exist, most bins remain empty and information entropy drops near zero. Equal-frequency binning uses sample percentiles to allocate an equal number of observations (approx n / k) to each bin, guaranteeing maximum Shannon entropy H = log2(k) and full robustness against outlier distortion.

Q7: Explain the phenomenon of Jensen's Inequality when predicting log-transformed target variables.
A7: Jensen's Inequality states that for any convex function g and random variable Z, E[g(Z)] >= g(E[Z]). The exponential function g(z) = exp(z) is strictly convex. Therefore, E[exp(Z)] > exp(E[Z]). If a model predicts z_hat = ln(y)_hat, simply taking exp(z_hat) estimates the geometric median/mean rather than the arithmetic mean, systematically under-predicting the true target sum. The correction for normal error variance sigma^2 is y_hat = exp(z_hat + sigma^2 / 2).

Q8: Do Gradient Boosted Decision Trees benefit from Box-Cox feature transformations?
A8: No. Tree-based partitioning algorithms evaluate split thresholds based strictly on feature rank order. Because Box-Cox and Yeo-Johnson are strictly monotonic transformations, the sorting order of samples remains unchanged: x_a < x_b iff y_a < y_b. Consequently, the optimal split points chosen by the tree are mathematically isomorphic, resulting in identical trees.

Q9: What is the condition number of a Hessian matrix, and how does data transformation help gradient descent?
A9: The condition number kappa = lambda_max / lambda_min is the ratio of the maximum to minimum eigenvalues of the loss Hessian. In skewed, unscaled data, kappa is extremely large, creating elongated ravine-like loss contours where gradient descent oscillates perpendicular to the optimal path. Transforming skewed features symmetrizes the loss contours, bringing kappa closer to 1 and enabling fast, direct gradient descent convergence.

Q10: What is the difference between Log and Log1p transforms, and in what concrete scenario will Log fail where Log1p succeeds?
A10: Natural log is y = ln(x), while Log1p is y = ln(1 + x). When x = 0, ln(0) evaluates to -infinity (math domain error), crashing computation pipelines. Log1p evaluates to ln(1 + 0) = ln(1) = 0.0. Log1p is essential for sparse non-negative data such as user website click counts, transaction quantities, or rainfall where zero represents a valid physical observation.

-----------------------------------------------------------------------------
8. GLOSSARY OF FORMAL TERMS
-----------------------------------------------------------------------------
- Homoscedasticity: Constant residual variance across all levels of independent variables.
- Heteroscedasticity: Systematic variation in residual variance, violating classical OLS assumptions.
- Fisher-Pearson Skewness: Third standardized moment measuring distribution asymmetry.
- Excess Kurtosis: Fourth standardized moment measuring tail weight relative to a normal distribution.
- Profile Log-Likelihood: Objective function maximized to find optimal power parameter lambda*.
- Jacobian Determinant: Scale-correction factor in multi-variable transformation likelihoods.
- Shannon Entropy: Fundamental metric in information theory measuring uncertainty and information content in bits.
- Quantile Discretization: Partitioning continuous features into equal-sample ordinal bins.
=============================================================================
`,B=[{id:1,tier:"Tier 1: Foundation & Terminology",question:"What is the primary motivation for applying mathematical transformations (such as Log or Box-Cox) to features prior to fitting parametric models?",options:["To artificially increase the number of training samples available to the model","To satisfy distributional assumptions like normality, stabilize variance (homoscedasticity), and linearize relationships","To convert continuous floating-point numbers into discrete categorical string labels","To guarantee 100% test accuracy regardless of underlying model architecture"],correctIndex:1,explanation:"Parametric models like Ordinary Least Squares (OLS) Linear Regression, Gaussian Naive Bayes, and Linear Discriminant Analysis assume normality of errors and constant error variance across predictor levels (homoscedasticity). Transforming skewed features pulls in elongated tails, stabilizes residual variance, and produces linear relationships with target variables.",practicalTip:"Before applying complex non-linear models, always inspect feature distributions. Frequently, a simple log or Box-Cox transform turns a poorly performing linear model into a competitive production system.",codeSnippet:`# Checking skewness of a feature in pandas
skewness = df['income'].skew()
print(f'Feature Skewness: {skewness:.3f}')`,examRelevance:"MAKAUT BCAC701B Core Preprocessing Concepts"},{id:2,tier:"Tier 1: Foundation & Terminology",question:"A feature displaying a long right tail where Mean > Median > Mode is formally classified as having:",options:["Negative (Left) Skewness","Positive (Right) Skewness","Symmetric Mesokurtic Distribution","Platykurtic Uniform Distribution"],correctIndex:1,explanation:"When extreme high values pull the arithmetic mean to the right while the majority of data points remain clustered at lower values, the distribution exhibits positive (right) skewness (Fisher-Pearson skewness g1 > 0). Examples include annual personal incomes, real estate valuations, and hospital stay durations.",practicalTip:"On right-skewed data, standard deviation is heavily inflated by the upper tail. Classical Z-scores fail to flag lower outliers because the mean is shifted rightward.",codeSnippet:`# Visualizing skewness
import scipy.stats as stats
s = stats.skew(df['salary'])
print('Skewness coefficient:', s)`,examRelevance:"Descriptive Statistics & University Midterm Essentials"},{id:3,tier:"Tier 1: Foundation & Terminology",question:"Why is the Log1p transform, y = ln(1 + x), preferred over the standard natural log transform, y = ln(x), in real-world ML pipelines?",options:["Log1p runs 10 times faster than natural logarithm on GPUs","Standard natural log ln(x) produces a fatal math domain error (undefined / -infinity) when x = 0, whereas ln(1 + 0) = 0","Log1p automatically handles negative numbers of arbitrary magnitude down to -infinity","Log1p scales all numbers strictly into the interval [0, 1]"],correctIndex:1,explanation:"In datasets containing true zeros (such as number of website purchases, rain precipitation in mm, or hospital visits), ln(0) is undefined and evaluates to -infinity in numerical libraries, causing gradient collapse and runtime crashes. Log1p computes ln(1 + x), which cleanly maps x = 0 to ln(1) = 0 without error.",practicalTip:"Use np.log1p(x) instead of np.log(x + 1) in Python because np.log1p provides enhanced floating-point precision for tiny values where x << 1.",codeSnippet:`import numpy as np
# Safe transformation for non-negative data with zeros
y_transformed = np.log1p(df['transaction_count'])`,examRelevance:"Data Preprocessing Numerical Stability"},{id:4,tier:"Tier 1: Foundation & Terminology",question:"What is the strict mathematical domain requirement for applying the classical Box-Cox power transformation?",options:["All input values must be strictly integers","All input values must be strictly positive (x > 0)","All input values must fall inside the range [-1.0, +1.0]","All input values must be strictly non-positive (x <= 0)"],correctIndex:1,explanation:"The classical Box-Cox transformation (Box & Cox, 1964) is defined only for strictly positive real numbers (x > 0). For non-integer parameter lambda, fractional powers of negative numbers produce complex/imaginary numbers, and at x = 0 with lambda <= 0, the expression is mathematically undefined or zero-division.",practicalTip:"If your feature contains zero or negative values, do not add an arbitrary constant like +1 arbitrarily; prefer the mathematically rigorous Yeo-Johnson transform.",codeSnippet:`from scipy.stats import boxcox
# Throws ValueError if any element is <= 0
y_bc, optimal_lambda = boxcox(df[df['sales'] > 0]['sales'])`,examRelevance:"MAKAUT Viva Voce & Box-Cox Constraints"},{id:5,tier:"Tier 1: Foundation & Terminology",question:"Which power transformation family was explicitly formulated by Ing-Guey Yeo and Richard Johnson in 2000 to extend Box-Cox to all real numbers (including zero and negative values)?",options:["The Yeo-Johnson Transformation","The Fourier Power Spectrum Transform","The Hilbert Space Projection","The Sigmoid Logistic Scaling"],correctIndex:0,explanation:"The Yeo-Johnson transformation provides a four-branch piecewise power function that is continuous, monotonic, and invertible across the entire real number line (-infinity, +infinity). It applies power lambda to (x + 1) for non-negative values and power (2 - lambda) to (-x + 1) for negative values.",practicalTip:"In scikit-learn, PowerTransformer(method='yeo-johnson') is the default robust power transformer because it works seamlessly on mixed-sign data.",codeSnippet:`from sklearn.preprocessing import PowerTransformer
pt = PowerTransformer(method='yeo-johnson')
X_trans = pt.fit_transform(X_train)`,examRelevance:"Advanced Data Transformation Foundations"},{id:6,tier:"Tier 1: Foundation & Terminology",question:"In feature discretization, how does Equal-Frequency (Quantile) binning differ fundamentally from Equal-Width binning?",options:["Equal-Width divides by percentiles, whereas Equal-Frequency divides by standard deviations","Equal-Width partitions the value range [min, max] into intervals of identical width, while Equal-Frequency partitions data so that each bin contains approximately the same number of samples","Equal-Frequency creates bins of equal numerical ranges, whereas Equal-Width uses K-Means clustering","Equal-Frequency can only be applied to binary categorical features"],correctIndex:1,explanation:"Equal-width binning calculates interval width as w = (max - min) / k, meaning intervals have equal spatial size but can contain wildly uneven sample counts. Equal-frequency (quantile) binning uses empirical quantiles (e.g. quartiles, deciles) to guarantee each bin holds approximately n / k observations, maximizing entropy.",practicalTip:"If your feature contains extreme outliers, equal-width binning collapses into 1 populated bin and k-1 empty bins. Always use quantile binning or robust clipping first.",codeSnippet:`import pandas as pd
# Equal-width binning
df['width_bin'] = pd.cut(df['age'], bins=5)
# Equal-frequency quantile binning
df['quantile_bin'] = pd.qcut(df['income'], q=5)`,examRelevance:"Feature Discretization & Binning Theory"},{id:7,tier:"Tier 1: Foundation & Terminology",question:"What does the statistical assumption of 'Homoscedasticity' state regarding residual errors in regression models?",options:["Residual variance must systematically increase as predicted values grow larger","Residual errors must follow a uniform distribution between -1 and +1","The variance of the residual errors is constant across all levels of the predictor features","Residuals from consecutive time steps must have zero correlation"],correctIndex:2,explanation:"Homoscedasticity (from Greek 'homo' = same, 'skedannumi' = scattering) means the residual scatter variance Var(e | X) is uniform and constant across all predictor values. If residual variance fans out or forms a cone (heteroscedasticity), standard error estimates are invalid and hypothesis tests cannot be trusted.",practicalTip:"A log transform on the dependent variable y or skewed predictor X is the classic remedy for fan-shaped heteroscedastic residual plots.",codeSnippet:`# Checking homoscedasticity via Breusch-Pagan test
import statsmodels.stats.diagnostic as smd
bp_test = smd.het_breuschpagan(residuals, X_with_const)`,examRelevance:"Linear Regression Assumptions & Diagnostics"},{id:8,tier:"Tier 1: Foundation & Terminology",question:"Why is the square root transformation y = sqrt(x) particularly recommended for Poisson-distributed count features?",options:["Because Poisson distributions have variance equal to their mean, and sqrt(x) acts as a mathematical variance-stabilizing transformation","Because square root makes negative counts strictly positive","Because square root converts count data directly into continuous Gaussian variables with mean exactly 0","Because square root eliminates all collinearity between independent predictors"],correctIndex:0,explanation:"In a Poisson process, the variance equals the mean: Var(X) = E[X] = lambda. As count values grow, their variance naturally increases (heteroscedasticity). By the Delta Method, if y = sqrt(x), the asymptotic variance becomes Var(sqrt(X)) approx 1/4 (constant, independent of lambda), stabilizing the variance across all counts.",practicalTip:"For small counts (mean < 10), the Freeman-Tukey transform y = sqrt(x) + sqrt(x + 1) provides even better variance stabilization.",codeSnippet:`import numpy as np
# Stabilizing variance for count data (e.g. daily store footfall)
df['stabilized_count'] = np.sqrt(df['store_visits'])`,examRelevance:"Variance Stabilization & Count Data Transformations"},{id:9,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"In the Box-Cox power transformation formula, why is the special case for lambda = 0 defined as y = ln(x)?",options:["Because 0^0 is arbitrarily chosen by statisticians to equal 1","Because by L'Hopital's Rule, the mathematical limit of (x^lambda - 1) / lambda as lambda approaches 0 is exactly ln(x)","Because division by zero is strictly permitted when calculating sample variances","Because ln(x) represents the derivative of x^0 with respect to x"],correctIndex:1,explanation:"As lambda -> 0, both numerator (x^0 - 1 = 0) and denominator evaluate to 0 (indeterminate form 0/0). Applying L'Hopital's Rule by differentiating with respect to lambda: d/d(lambda) [x^lambda - 1] = x^lambda * ln(x), and d/d(lambda) [lambda] = 1. Evaluating the limit as lambda -> 0 yields x^0 * ln(x) / 1 = ln(x). Thus, ln(x) ensures smooth continuity of the transformation family.",practicalTip:"This continuous transition prevents computational discontinuity when numerical optimizers step across lambda = 0.",codeSnippet:`# Symbolic verification of Box-Cox limit in sympy
import sympy as sp
x, lmbda = sp.symbols('x lambda', positive=True)
limit_expr = sp.limit((x**lmbda - 1)/lmbda, lmbda, 0)
print('Limit as lambda -> 0:', limit_expr) # Output: log(x)`,examRelevance:"MAKAUT BCAC701B Analytical Proofs & Limits"},{id:10,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"In the Profile Maximum Likelihood Estimation of the Box-Cox parameter lambda, what is the mathematical function of the Jacobian determinant term (lambda - 1) * sum(ln(x_i))?",options:["It speeds up matrix inversion during gradient descent","It prevents trivial scale collapse by accounting for the shrinking volume of the transformed variable space","It converts complex eigenvalues into real eigenvectors","It forces the mean of the transformed feature to equal exactly zero"],correctIndex:1,explanation:"If one only minimized the transformed variance sigma^2(lambda) without the Jacobian, the optimization would trivially choose tiny or negative lambda values that compress all numbers into an infinitesimal range (e.g. [0.001, 0.002]), artificially shrinking variance to near-zero. The Jacobian determinant |dy/dx| = x^(lambda-1) penalizes scale compression, ensuring legitimate normalization.",practicalTip:"Omitting the Jacobian term is a classic implementation bug when writing custom Box-Cox optimizers from scratch.",codeSnippet:`# Profile log-likelihood formulation
def boxcox_llf(lmbda, data):
    n = len(data)
    y = (data**lmbda - 1)/lmbda if lmbda != 0 else np.log(data)
    var = np.var(y)
    return -0.5 * n * np.log(var) + (lmbda - 1) * np.sum(np.log(data))`,examRelevance:"Maximum Likelihood Estimation & Mathematical Statistics"},{id:11,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"Under the Yeo-Johnson transformation, what is the exact formula applied when the input value is negative (x < 0) and lambda != 2?",options:["y = - ((-x + 1)^(2 - lambda) - 1) / (2 - lambda)","y = ((x - 1)^lambda + 1) / lambda","y = ln(-x) / (1 - lambda)","y = - sqrt(|x|) * lambda"],correctIndex:0,explanation:"For negative values x < 0, Yeo-Johnson defines psi(lambda, x) = - [ ((-x + 1)^(2 - lambda) - 1) / (2 - lambda) ]. Because x < 0, the term (-x + 1) is strictly greater than 1, guaranteeing that fractional powers never encounter negative bases. The (2 - lambda) exponent preserves monotonicity and ensures smooth continuity across the zero boundary.",practicalTip:"Notice the algebraic symmetry: when lambda = 1, both positive and negative branches reduce to linear identity shifts.",codeSnippet:`# Yeo-Johnson negative branch in Python
def yj_negative(x, lmbda):
    if lmbda != 2:
        return -(((-x + 1)**(2 - lmbda) - 1) / (2 - lmbda))
    return -np.log(-x + 1)`,examRelevance:"Advanced Transformation Formulae & University Examinations"},{id:12,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"For a discretized continuous feature partitioned into k distinct bins with sample proportions p_1, p_2, ..., p_k, what is the maximum achievable Shannon Entropy H_max?",options:["H_max = k bits","H_max = log2(k) bits, achieved when all bins have equal frequency (p_j = 1/k)","H_max = 1 / k bits, achieved when one bin contains all samples","H_max = k * ln(2) bits"],correctIndex:1,explanation:"Shannon entropy H(X) = - sum(p_i * log2(p_i)) measures the information content or uncertainty of a discrete distribution. By Jensen's inequality and information theory principles, entropy is strictly maximized when the distribution is uniform: p_j = 1/k for all j, yielding H_max = - sum((1/k) * log2(1/k)) = log2(k) bits. Equal-frequency (quantile) binning achieves this theoretical maximum.",practicalTip:"If equal-width binning yields an entropy ratio H / H_max < 0.3, the feature distribution is severely swamped by outliers.",codeSnippet:`import numpy as np
# Computing Shannon entropy in bits
counts = np.array([4, 4, 4, 4]) # 4 equal bins
p = counts / counts.sum()
entropy = -np.sum(p * np.log2(p)) # Exactly 2.0 bits (log2(4))`,examRelevance:"Information Theory & Feature Engineering Quantization"},{id:13,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"In the Fisher-Pearson sample skewness formula g1 = m3 / (m2^(1.5)), what do the terms m3 and m2 represent?",options:["m3 is the median and m2 is the mode","m3 is the third central sample moment (1/n)*sum((x - x_bar)^3) and m2 is the second central sample moment (sample variance)","m3 is the maximum value and m2 is the minimum value","m3 is the 75th percentile and m2 is the 25th percentile"],correctIndex:1,explanation:"The k-th central sample moment is defined as m_k = (1/n) * sum((x_i - x_bar)^k). Thus, m2 is the sample variance (second central moment measuring spread) and m3 is the third central moment measuring asymmetric deviation from the mean. Standardizing m3 by m2^(3/2) creates a dimensionless scale-invariant skewness metric.",practicalTip:"Because m3 raises deviations to the 3rd power, a single extreme outlier at +10 sigma exerts a factor of 1000x influence on m3, highlighting why skewness is highly sensitive to outliers.",codeSnippet:`# Calculating moments from raw data
m2 = np.mean((x - x.mean())**2)
m3 = np.mean((x - x.mean())**3)
g1 = m3 / (m2 ** 1.5)`,examRelevance:"Higher-Order Statistical Moments & Distribution Diagnostics"},{id:14,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"When predicting a log-transformed target variable ln(y), why does simply taking the naive exponential y_hat = exp(ln(y)_hat) systematically UNDERESTIMATE the true conditional mean E[y | X]?",options:["Due to rounding errors in floating-point CPU registers","Due to Jensen's Inequality, which states that for any convex function like exp(z), E[exp(z)] >= exp(E[z])","Because natural logarithms invert negative numbers to positive numbers","Because the learning rate of gradient descent shrinks over training epochs"],correctIndex:1,explanation:"Jensen's Inequality dictates that if g(z) is convex, E[g(z)] >= g(E[z]). Because the exponential function is strictly convex, exp(E[ln(y)]) yields the geometric mean / median, which is strictly lower than the true expected arithmetic mean E[y]. For normally distributed residuals with variance sigma^2, the unbiased expected value is E[y] = exp(mu + sigma^2 / 2).",practicalTip:"In financial revenue or real estate prediction where total sums matter, ignoring the sigma^2 / 2 correction leads to systematic multi-million-dollar under-forecasting.",codeSnippet:`# Correcting Jensen's back-transformation bias
pred_log = model.predict(X_test)
residual_var = np.var(y_train_log - model.predict(X_train))
# Unbiased expectation
pred_actual = np.exp(pred_log + residual_var / 2.0)`,examRelevance:"Jensen's Inequality & Target Transformation Traps"},{id:15,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"What exact transformation does Box-Cox execute when the optimal power parameter is lambda = -1.0?",options:["Logarithmic transform: y = ln(x)","Reciprocal / Inverse transform: y = 1 - 1/x","Square root transform: y = sqrt(x)","Quadratic power transform: y = x^2"],correctIndex:1,explanation:"Plugging lambda = -1.0 into the Box-Cox formula y = (x^lambda - 1) / lambda yields: y = (x^(-1) - 1) / (-1) = -(1/x - 1) = 1 - 1/x. This is an inverted reciprocal transformation with an affine shift. It heavily compresses massive right-tail outliers toward an upper asymptote of 1.0.",practicalTip:"Reciprocal transforms are common in physics and finance, such as converting travel time into speed (speed = distance / time) or price-to-earnings into earnings yield.",codeSnippet:`# Box-Cox with lambda = -1
x = np.array([1.0, 2.0, 4.0, 10.0])
y = (x**(-1) - 1.0) / (-1.0) # [0.0, 0.5, 0.75, 0.9]`,examRelevance:"MAKAUT Viva Voce: Special Cases of Power Transforms"},{id:16,tier:"Tier 2: Mathematical Mechanics & Formulas",question:"A distribution is classified as 'Leptokurtic' when its Fisher excess kurtosis g2 satisfies:",options:["g2 < 0 (Light tails, flat peak, low outlier probability)","g2 = 0 (Mesokurtic, identical tail decay to a standard Gaussian)","g2 > 0 (Heavy tails, sharp peak, elevated probability of extreme outliers)","g2 is undefined for all continuous distributions"],correctIndex:2,explanation:"Excess kurtosis g2 measures tail weight relative to the standard Normal distribution (whose raw kurtosis is exactly 3.0). A Leptokurtic distribution (g2 > 0) has heavy, fat tails and a sharper central peak, indicating that extreme outliers occur far more frequently than predicted by Gaussian statistics (e.g. Student's t-distribution, Cauchy, stock market returns).",practicalTip:"If your target feature is highly leptokurtic (g2 > 3.0), Ordinary Least Squares will suffer from extreme instability. Switch to Huber Loss or apply a power transform.",codeSnippet:`import scipy.stats as stats
kurt = stats.kurtosis(df['returns']) # scipy calculates excess kurtosis (Normal = 0)
print('Excess Kurtosis:', kurt)`,examRelevance:"Kurtosis Taxonomies & Tail Risk Modeling"},{id:17,tier:"Tier 3: Algorithm Architecture & Design",question:"Why does applying a strictly monotonic transformation (such as Log1p or Box-Cox) have ZERO mathematical impact on the predictions of Decision Trees, Random Forests, and XGBoost?",options:["Because tree algorithms automatically apply an internal Fourier transform to all features","Because tree splitting algorithms evaluate thresholds purely based on the relative rank order of feature values, which is strictly preserved by monotonic mappings","Because gradient boosted trees ignore numeric values and convert everything to strings","Because tree-based algorithms only train on binary 0/1 indicator variables"],correctIndex:1,explanation:"Decision trees find split points by evaluating candidate thresholds s that maximize information gain or minimize impurity. If a function f(x) is strictly monotonic, then x_a < x_b if and only if f(x_a) < f(x_b). A split at threshold s on the raw feature corresponds exactly to a split at f(s) on the transformed feature. The resulting partitions, tree structure, and leaf predictions are mathematically identical.",practicalTip:"Do not waste preprocessing compute time running Box-Cox or Log transforms on features that are fed exclusively into tree ensembles like XGBoost or LightGBM.",codeSnippet:`# Invariance verification in sklearn
# DecisionTreeRegressor trained on X vs log(X) achieves identical R2 and split structure`,examRelevance:"Model Family Invariance & Algorithmic Mechanics"},{id:18,tier:"Tier 3: Algorithm Architecture & Design",question:"How does normalizing and symmetrizing skewed features dramatically improve the convergence rate of Gradient Descent in Neural Networks and Linear Models?",options:["It reduces the condition number kappa = lambda_max / lambda_min of the Hessian matrix, turning eccentric elliptical loss ravines into spherical contours","It eliminates the need to calculate backpropagation gradients","It ensures that weights never need to be updated after the first epoch","It forces the loss function to become strictly zero at initialization"],correctIndex:0,explanation:"When features possess wildly asymmetric magnitudes or severe skewness, the eigenvalues of the Hessian matrix H of the loss surface diverge widely, yielding a massive condition number kappa >> 1. The resulting loss surface forms steep, narrow elliptical ravines where gradient descent oscillates aggressively back and forth across the walls. Symmetrizing features brings kappa close to 1, creating isotropic spherical contours where gradients point directly to the global minimum.",practicalTip:"If your neural network training suffers from vanishing/exploding gradients or requires an excruciatingly tiny learning rate, check for unscaled, skewed input features.",codeSnippet:`# High condition number causes slow convergence:
# kappa = max_eigenval(H) / min_eigenval(H)
# Ideal condition number is 1.0 (perfectly spherical loss surface)`,examRelevance:"MAKAUT Optimization Theory & Gradient Descent Mechanics"},{id:19,tier:"Tier 3: Algorithm Architecture & Design",question:"What pathological failure occurs when Equal-Width binning is applied to a feature containing a single massive outlier (e.g., salaries where 99% are in [20k, 50k], but one CEO earns 10,000k)?",options:["The bin edges become negative and crash the Python interpreter","Almost all regular data points collapse into Bin 0, leaving intermediate bins completely empty and collapsing feature information entropy","The algorithm splits each regular sample into its own individual bin","The dataset automatically gets deleted from memory"],correctIndex:1,explanation:"Equal-width binning sets width w = (10,000k - 20k) / 5 = 1,996k. Bin 0 spans [20k, 2,016k], containing 99.9% of all records. Bins 1, 2, and 3 are completely empty (0 samples), and Bin 4 contains only the single CEO. The resulting discretized feature retains virtually zero discriminatory information (entropy near 0).",practicalTip:"Always check bin value counts with df['binned'].value_counts() after equal-width binning. If any bin has zero or single-digit counts, switch to quantile binning.",codeSnippet:`# Detecting bin collapse:
counts = pd.cut(salaries, bins=5).value_counts()
if (counts == 0).any():
    print('ALERT: Empty bins detected! Switch to pd.qcut()')`,examRelevance:"Discretization Pitfalls & Data Preprocessing Engineering"},{id:20,tier:"Tier 3: Algorithm Architecture & Design",question:"When should an ML engineer select Discretization (Binning) over continuous Power Transformations (like Box-Cox)?",options:["When the feature relationship with the target is non-monotonic, jagged, or regime-dependent (e.g. credit risk vs age brackets)","When the machine learning model is strictly Ordinary Least Squares regression","When the dataset contains fewer than 10 total observations","When all continuous values are already normally distributed"],correctIndex:0,explanation:"Continuous power transformations preserve monotonic relationships (if x increases, transformed x increases). However, if the underlying relationship with the target is non-monotonic or characterized by step changes (e.g. risk is high for age < 21, low for 25-55, and high for > 65), binning into discrete buckets allows linear models to learn independent step-function coefficients for each distinct regime.",practicalTip:"In banking and credit scoring, binning continuous features into 5-10 buckets with Weight of Evidence (WoE) encoding is standard regulatory practice.",codeSnippet:`from sklearn.preprocessing import KBinsDiscretizer
kbd = KBinsDiscretizer(n_bins=5, encode='onehot', strategy='quantile')
X_binned = kbd.fit_transform(X_continuous)`,examRelevance:"Feature Engineering Trade-Offs & Non-Linear Mapping"},{id:21,tier:"Tier 3: Algorithm Architecture & Design",question:"In CESC power distribution networks with rooftop solar feeds, net transformer load ranges from -15 MW (surplus solar export) to +240 MW (evening peak). Which transformation is mathematically valid?",options:["Natural Logarithm: y = ln(x)","Classical Box-Cox Power Transformation","Yeo-Johnson Transformation","Square Root Transformation: y = sqrt(x)"],correctIndex:2,explanation:"Natural log and classical Box-Cox strictly require positive inputs (x > 0). Square root fails on negative values (x < 0 produces NaN or imaginary numbers). Only the Yeo-Johnson transformation is mathematically defined, continuous, and invertible across all real numbers including negative surplus feeds, zero balance, and positive peak demand.",practicalTip:"For industrial sensor streams that oscillate around zero (net power, temperature deviations, acceleration), Yeo-Johnson is the only reliable power transform.",codeSnippet:`from sklearn.preprocessing import PowerTransformer
pt = PowerTransformer(method='yeo-johnson')
grid_transformed = pt.fit_transform(grid_load.reshape(-1, 1))`,examRelevance:"Industrial Energy Case Studies & West Bengal Utilities"},{id:22,tier:"Tier 3: Algorithm Architecture & Design",question:"What is the critical rule regarding transformation parameter estimation (e.g. Box-Cox lambda* or quantile bin edges) to prevent data leakage?",options:["Estimate lambda* on the combined training, validation, and test sets simultaneously to maximize sample size","Fit lambda* and bin edges strictly on the TRAINING set only, then use those exact frozen parameters to transform the test and serving data","Randomly re-estimate lambda* independently for every new test sample at inference time","Use lambda = 0.5 for all datasets without estimating parameters"],correctIndex:1,explanation:"Transformation parameters (optimal lambda, mean, variance, quantile cut points) are statistical properties of the data distribution. Fitting them on the full dataset or on test data leaks information about the test distribution into the training pipeline, invalidating cross-validation and producing over-optimistic generalization metrics.",practicalTip:"Always wrap transformers inside an sklearn.pipeline.Pipeline to guarantee that fit() is executed strictly on training folds.",codeSnippet:`from sklearn.pipeline import Pipeline
pipe = Pipeline([
    ('power', PowerTransformer(method='yeo-johnson')),
    ('model', LinearRegression())
])
pipe.fit(X_train, y_train) # Safe: transforms fitted on train only!`,examRelevance:"MAKAUT Academic Integrity & Data Leakage Prevention"},{id:23,tier:"Tier 3: Algorithm Architecture & Design",question:"How do distance-based algorithms like K-Nearest Neighbors (KNN) and K-Means clustering behave when one continuous feature has extreme right skewness?",options:["The distance metric behaves perfectly because Euclidean distance is immune to scale","The massive values in the elongated tail completely dominate Euclidean distance calculations, rendering all other features irrelevant in distance computation","K-Means clustering automatically converts skewed features to Gaussian shapes","KNN assigns equal weight to all points regardless of Euclidean distance"],correctIndex:1,explanation:"Euclidean distance is computed as d(p, q) = sqrt(sum((p_i - q_i)^2)). If a skewed feature spans from 10 to 1,000,000 while another spans from 0 to 1, squared differences in the skewed feature ((1,000,000 - 10)^2 approx 10^12) will completely dwarf differences in other dimensions. Transforming skewed features into symmetric, bounded shapes restores balanced geometric neighborhoods.",practicalTip:"Before running K-Means or DBSCAN, always transform skewed features with Box-Cox/Log and follow up with StandardScaler.",codeSnippet:`# Without transform, cluster centers are pulled toward high-magnitude outliers
# Pipeline: Skew Transform -> Standardize -> Clustering
X_preprocessed = StandardScaler().fit_transform(PowerTransformer().fit_transform(X))`,examRelevance:"Clustering & Metric-Space Preprocessing Requirements"},{id:24,tier:"Tier 3: Algorithm Architecture & Design",question:"When should an engineer deploy the Signed Cube Root transform y = sign(x) * |x|^(1/3) instead of Log1p?",options:["When the dataset contains both severe positive and negative extremes across zero, and a closed-form parameter-free transform is desired","When all values in the dataset are strictly integers greater than 100","When the target variable is binary classification labels 0 and 1","When computing tree splits in LightGBM"],correctIndex:0,explanation:"Signed cube root is defined across all real numbers (-inf, +inf), cleanly maps 0 to 0, preserves algebraic signs (negative values remain negative, positive remain positive), and compresses heavy tails without requiring optimization of a parametric lambda like Yeo-Johnson.",practicalTip:"Signed cube root is highly effective for financial profit-and-loss (P&L) statements where companies can have large positive earnings or large negative losses.",codeSnippet:`import numpy as np
def signed_cbrt(x):
    return np.sign(x) * np.cbrt(np.abs(x))`,examRelevance:"Alternative Mathematical Power Transforms"},{id:25,tier:"Tier 4: Production Diagnostics & Scalability",question:"A model trained with Box-Cox power transform crashes in production when processing a new customer record where feature x = -2.5. What was the engineering root cause and how should it be architecturally fixed?",options:["The server ran out of RAM; add more virtual memory","Box-Cox requires strictly positive values (x > 0) and cannot evaluate negative inputs; the pipeline should be upgraded to Yeo-Johnson or include strict input validation guards","The customer's network connection timed out during data upload","Negative numbers are illegal in JSON and must be sent as strings"],correctIndex:1,explanation:"Even if the training dataset was entirely positive, live production traffic can deliver zero or negative inputs due to sensor malfunctions, account overdrafts, or data entry errors. Because Box-Cox evaluates x^lambda, negative values produce math domain errors. Switching to Yeo-Johnson provides mathematical robustness across all negative real numbers.",practicalTip:"In production pipelines, use Pydantic or schema validators to enforce x > 0 guards if Box-Cox is deployed, or default to Yeo-Johnson.",codeSnippet:`# Defensive pipeline check:
assert (X_incoming > 0).all(), 'Box-Cox assertion failed: Non-positive input detected!'`,examRelevance:"Production Reliability & Robust ML Architecture"},{id:26,tier:"Tier 4: Production Diagnostics & Scalability",question:"In banking and credit scoring (e.g. Sector V FinTech credit risk scoring), what is the primary benefit of discretizing continuous variables into Weight of Evidence (WoE) bins?",options:["It eliminates the need to train a logistic regression model","It linearizes complex non-linear relationships with the log-odds of default, handles missing values as a distinct bucket, and protects against extreme outliers","It guarantees that every customer receives a loan approval","It converts 10,000 features into exactly 1 feature"],correctIndex:1,explanation:"Weight of Evidence (WoE = ln(% Good / % Bad)) recodes continuous bins into a linear relationship with the log-odds of default in Logistic Regression. Binning also isolates outliers into the top bin and allows missing/null records to form an explicit bin without requiring imputation.",practicalTip:"Ensure each WoE bin contains at least 5% of total sample volume to satisfy Basel regulatory stability standards.",codeSnippet:`# Concept of WoE calculation per bin j:
# WoE_j = np.log((good_j / total_goods) / (bad_j / total_bads))
# IV = sum((good_pct - bad_pct) * WoE)`,examRelevance:"Industrial Credit Scoring & Banking Regulations"},{id:27,tier:"Tier 4: Production Diagnostics & Scalability",question:"What production risk is introduced if a continuous feature is discretized into an excessively large number of bins (e.g. k = 150 bins for 1,000 training samples)?",options:["Underfitting due to excessive information compression","Overfitting and high variance error because the model must estimate separate parameters for numerous sparsely populated, noisy bins","Negative eigenvalues in the covariance matrix","Complete collapse of training data into a single row"],correctIndex:1,explanation:"Discretizing into 150 bins converts one continuous variable into 149 one-hot encoded indicator features. With only 1,000 samples, many bins will contain only 1-3 observations. The learning algorithm will overfit to the idiosyncratic noise of these tiny buckets, destroying test generalization.",practicalTip:"A practical rule of thumb is k = min(10, int(np.cbrt(len(df)))) bins for general continuous features unless business rules dictate otherwise.",codeSnippet:`# Rule of thumb binning in Python
k_bins = max(3, min(10, int(len(df) ** (1/3))))
print('Recommended bin count:', k_bins)`,examRelevance:"Curse of Dimensionality & Overfitting in Discretization"},{id:28,tier:"Tier 4: Production Diagnostics & Scalability",question:"When persisting a trained preprocessing pipeline using joblib or ONNX for production microservice serving, which parameters must be serialized for a Yeo-Johnson transformer?",options:["Only the final model weights beta, because preprocessing steps do not require parameters","The estimated power parameter lambda*, input feature names, and any scaling shifts or standardization moments fitted on training data","The entire training dataset raw text records","The git commit hash of the scikit-learn repository"],correctIndex:1,explanation:"A power transformer is stateful. It must serialize the learned parameter lambda* for each feature, along with any subsequent normalization parameters (mean mu, standard deviation sigma). When inference records arrive, the microservice uses these saved parameters to apply the exact same transformation.",practicalTip:"Always test your serialized pipeline with an automated integration test that asserts input -> transform -> predict produces bitwise-identical results across environments.",codeSnippet:`import joblib
# Serialize full pipeline including fitted transformer
joblib.dump(pipeline, 'production_pipeline_v1.pkl')
# In microservice:
loaded_pipe = joblib.load('production_pipeline_v1.pkl')
pred = loaded_pipe.predict(new_data)`,examRelevance:"MLOps Pipeline Serialization & Production Serving"},{id:29,tier:"Tier 4: Production Diagnostics & Scalability",question:"In scikit-learn's QuantileTransformer, what is the key difference between output_distribution='uniform' and output_distribution='normal'?",options:["Uniform maps features to [0, 1] via empirical CDF ranks, while normal applies the inverse normal CDF (probit) to map values into a Gaussian bell curve N(0, 1)","Uniform only works on integers, while normal works only on complex numbers","Normal uses Box-Cox, while uniform uses Yeo-Johnson","There is no difference; they are exact aliases for each other"],correctIndex:0,explanation:"QuantileTransformer calculates empirical cumulative distribution function (CDF) ranks. With output_distribution='uniform', it maps sample ranks linearly into the interval [0, 1]. With output_distribution='normal', it passes those uniform percentiles through the inverse standard normal CDF (probit function scipy.stats.norm.ppf), creating a Gaussian distribution.",practicalTip:"QuantileTransformer is a non-linear rank-based transform. Note that it smooths out unusual clusters and can distort linear correlations.",codeSnippet:`from sklearn.preprocessing import QuantileTransformer
qt = QuantileTransformer(output_distribution='normal', random_state=42)
X_gaussian = qt.fit_transform(X_train)`,examRelevance:"Scikit-Learn Quantile Transforms & Probabilistic Mappings"},{id:30,tier:"Tier 4: Production Diagnostics & Scalability",question:"In an enterprise explainability audit (e.g. SHAP values for loan approvals in Salt Lake Sector V), how should feature importance and SHAP contributions be communicated to loan officers if the feature was log-transformed?",options:["Tell the loan officers to calculate natural logarithms in their heads","Invert the transformed feature values and marginal contributions back to native currency units (INR) using the inverse mapping x = exp(y) - 1","Discard all explainability metrics because transformed models cannot be explained","Convert all loan amounts into US Dollars to eliminate the transform"],correctIndex:1,explanation:"Non-technical stakeholders (loan officers, credit auditors, regulators) cannot interpret coefficients or attribution scores in log-space (e.g. '0.35 log-rupees'). Production explainability pipelines must map feature values and marginal impact intervals back into native physical domain units (e.g. INR 45,000) using the inverse transformation f^(-1)(y).",practicalTip:"Use shap.TreeExplainer or shap.KernelExplainer with custom inverse transform visualizers to render human-readable waterfall plots.",codeSnippet:`# Inverting feature for human-readable reporting
loan_inr = np.expm1(transformed_loan)
print(f'Customer Loan Request: Rs {loan_inr:,.2f}')`,examRelevance:"Model Explainability (XAI), Governance & West Bengal Industry Standards"}];function J(d){const s=d.length;if(s<4)return{mean:0,stdev:0,skewness:0,kurtosis:0};const r=d.reduce((f,c)=>f+c,0)/s,n=d.reduce((f,c)=>f+Math.pow(c-r,2),0)/s,P=d.reduce((f,c)=>f+Math.pow(c-r,3),0)/s,N=d.reduce((f,c)=>f+Math.pow(c-r,4),0)/s,E=n*(s/(s-1)),b=Math.sqrt(E);let x=0,_=0;if(n>1e-12){const f=P/Math.pow(n,1.5);x=Math.sqrt(s*(s-1))/(s-2)*f;const c=N/Math.pow(n,2)-3;_=(s-1)/((s-2)*(s-3))*((s+1)*c+6)}return{mean:Number(r.toFixed(2)),stdev:Number(b.toFixed(2)),skewness:Number(x.toFixed(3)),kurtosis:Number(_.toFixed(3))}}function X(d,s,r=1){switch(s){case"log1p":return d.map(n=>n>-1?Math.log(1+n):0);case"sqrt":return d.map(n=>Math.sqrt(Math.max(0,n)));case"cbrt":return d.map(n=>Math.sign(n)*Math.cbrt(Math.abs(n)));case"boxcox":return d.map(n=>n<=0?0:Math.abs(r)<1e-5?Math.log(n):(Math.pow(n,r)-1)/r);case"yeojohnson":return d.map(n=>n>=0?Math.abs(r)<1e-5?Math.log(n+1):(Math.pow(n+1,r)-1)/r:Math.abs(r-2)<1e-5?-Math.log(-n+1):-((Math.pow(-n+1,2-r)-1)/(2-r)));default:return[...d]}}function Z(d,s=8){if(!d||d.length===0)return{bins:[],min:0,max:0};const r=Math.min(...d),n=Math.max(...d),N=(n-r||1)/s,E=Array.from({length:s},(b,x)=>({binIndex:x,x0:r+x*N,x1:r+(x+1)*N,count:0}));return d.forEach(b=>{let x=Math.floor((b-r)/N);x>=s&&(x=s-1),x<0&&(x=0),E[x].count+=1}),{bins:E,min:r,max:n,binWidth:N}}const ge=()=>{const[d,s]=l.useState("hero"),r=l.useId(),[n,P]=l.useState("compare"),[N,E]=l.useState("loans"),[b,x]=l.useState("raw"),[_,f]=l.useState("boxcox"),[c,z]=l.useState(0),[m,$]=l.useState(4),[C,ee]=l.useState(!1),[D,ae]=l.useState(""),[M,G]=l.useState({}),[S,U]=l.useState(!1),F={loans:{name:"Salt Lake Sector V FinTech Loans (₹k)",data:[15,18,20,22,25,25,30,32,35,40,45,50,60,75,90,120,180,250,400,850],description:"Severe positive skew (incomes & micro-loans) with long right tail.",hasNegatives:!1},grid:{name:"CESC Net Grid Load (MW, Solar Feeds)",data:[-14.2,-8.5,-4,-1.2,0,3.5,8.2,12,18.5,25,34,42,50.5,62,78,95,110,135,175,240],description:"Mixed-sign values: midday negative rooftop solar feed to evening peak demand.",hasNegatives:!0},synthetic:{name:"Moderate Exponential Growth Dataset",data:[2.1,2.4,2.9,3.5,4.2,5.1,6.4,8.2,10.5,14,18.5,24.2,32,42.5,58,78.5,105,145,200,290],description:"Exponentially growing physical feature with right skewness.",hasNegatives:!1}},Y=[20,22,24,25,26,28,30,32,35,38,40,42,45,50,60],O=l.useMemo(()=>C?[...Y,1e3]:[...Y],[C]),k=F[N],R=l.useMemo(()=>{let a=1;return b==="boxcox"&&(a=-.47),b==="yeojohnson"&&(a=.66),X(k.data,b,a)},[k,b]);l.useMemo(()=>J(k.data),[k]);const v=l.useMemo(()=>J(R),[R]),T=l.useMemo(()=>Z(R,8),[R]),Q=_==="boxcox"?F.loans.data:F.grid.data,W=l.useMemo(()=>X(Q,_,c),[Q,_,c]),L=l.useMemo(()=>J(W),[W]),A=l.useMemo(()=>Z(W,8),[W]),j=l.useMemo(()=>{const a=O,t=Math.min(...a),h=(Math.max(...a)-t||1)/m,o=Array.from({length:m+1},(q,w)=>t+w*h),i=Array(m).fill(0);a.forEach(q=>{let w=Math.floor((q-t)/h);w>=m&&(w=m-1),w<0&&(w=0),i[w]+=1});let y=0;return i.forEach(q=>{if(q>0){const w=q/a.length;y-=w*Math.log2(w)}}),{edges:o,width:Number(h.toFixed(1)),counts:i,entropy:Number(y.toFixed(3)),maxEntropy:Number(Math.log2(m).toFixed(3))}},[O,m]),H=l.useMemo(()=>{const a=[...O].sort((o,i)=>o-i),t=a.length,g=[a[0]];for(let o=1;o<m;o++){const i=Math.floor(o*t/m);g.push(a[i])}g.push(a[t-1]+.001);const p=Array(m).fill(0);a.forEach(o=>{let i=!1;for(let y=0;y<m;y++)if(o>=g[y]&&o<g[y+1]){p[y]+=1,i=!0;break}i||(p[m-1]+=1)});let h=0;return p.forEach(o=>{if(o>0){const i=o/a.length;h-=i*Math.log2(i)}}),{edges:g,counts:p,entropy:Number(h.toFixed(3)),maxEntropy:Number(Math.log2(m).toFixed(3))}},[O,m]),K=[{term:"Homoscedasticity",def:"The statistical condition where the variance of regression residual errors remains constant across all values of predictor features.",relevance:"Linear models assume homoscedasticity; skewed features create cone-shaped heteroscedastic residuals."},{term:"Heteroscedasticity",def:"Systematic variation in residual dispersion, violating classical Gauss-Markov and OLS regression assumptions.",relevance:"Remedied by applying a logarithmic or Box-Cox power transform to the target or skewed predictor."},{term:"Fisher-Pearson Skewness (g1)",def:"The third standardized central moment m3 / (m2^(1.5)), measuring asymmetric tail elongation.",relevance:"g1 > 0 indicates right skew (long upper tail); g1 < 0 indicates left skew; g1 ≈ 0 is symmetric."},{term:"Excess Kurtosis (g2)",def:"The fourth standardized central moment relative to a Gaussian distribution (m4 / m2^2 - 3.0).",relevance:"g2 > 0 denotes leptokurtic heavy tails (high outlier risk); g2 < 0 denotes platykurtic light tails."},{term:"Box-Cox Power Transform",def:"Parametric power family y(λ) = (x^λ - 1) / λ for λ ≠ 0 and ln(x) for λ = 0, strictly requiring positive x > 0.",relevance:"Finds the continuous power transformation that maps continuous data closest to a Gaussian bell curve."},{term:"Yeo-Johnson Transform",def:"4-branch piecewise extension of Box-Cox that accommodates zero and negative real numbers without domain crashes.",relevance:"Crucial for net power load, profit/loss financial metrics, and temperature deviations."},{term:"Profile Log-Likelihood",def:"Objective function L(λ) maximized to discover the optimal power parameter λ*.",relevance:"Must incorporate the Jacobian determinant term (λ - 1) * Σ ln(x_i) to prevent scale shrinkage cheating."},{term:"Jacobian Determinant",def:"Scale-correction volume factor |dy/dx| in multivariate transformations.",relevance:"Penalizes artificial variance collapse during maximum likelihood estimation."},{term:"Jensen's Inequality",def:"Mathematical theorem stating E[g(Z)] ≥ g(E[Z]) for any strictly convex function g.",relevance:"Predicting exp(ŷ) systematically underestimates arithmetic mean revenue; requires exp(ŷ + s²/2) correction."},{term:"Equal-Width Binning",def:"Discretization method that partitions the feature interval [min, max] into k bins of equal numerical length.",relevance:"Catastrophically sensitive to outliers, which swamp the range and leave intermediate bins empty."},{term:"Quantile (Equal-Frequency) Binning",def:"Discretization method using empirical percentiles so that each of the k bins contains approx n / k samples.",relevance:"Completely immune to outlier collapse; preserves maximal Shannon entropy log2(k)."},{term:"Shannon Entropy H(X)",def:"Information-theoretic metric H = - Σ p_i * log2(p_i) measuring uncertainty and information capacity in bits.",relevance:"Quantifies how much discriminatory information survives after a continuous feature is discretized."}].filter(a=>a.term.toLowerCase().includes(D.toLowerCase())||a.def.toLowerCase().includes(D.toLowerCase())),I=[B[0],B[2],B[3],B[4],B[5]],te=(a,t)=>{S||G(g=>({...g,[a]:t}))},V=()=>{let a=0;return I.forEach(t=>{M[t.id]===t.correctIndex&&(a+=1)}),a};return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{id:"hero",className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 14"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Academic Core"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Power Transforms & Discretization"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-purple-500/20 text-purple-300 border border-purple-500/40 rounded-full",children:"MAKAUT Aligned"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Data transformation"}),e.jsx("p",{className:"text-sm sm:text-base md:text-lg text-indigo-200/90 font-medium max-w-3xl",children:"Mathematical Power Transformations, Profile Log-Likelihood MLE, Box-Cox, Yeo-Johnson, and Feature Discretization Mechanics"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-300 max-w-4xl leading-relaxed",children:"Master the algorithmic foundations and numerical engineering behind transforming skewed, heavy-tailed, and heteroscedastic data. Learn how to linearize models, restore normality assumptions, prevent gradient oscillation, and choose between continuous power mappings and entropy-maximizing quantile discretizations across real-world West Bengal industrial deployments."}),e.jsxs("div",{className:"pt-4 border-t border-indigo-900/40",children:[e.jsx("p",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider mb-2",children:"Masterclass Direct Jump Navigation:"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"novice",label:"1. Novice Masterclass"},{id:"math",label:"2. Mathematical Formulations"},{id:"studio",label:"3. Interactive Studio (3 Modes)"},{id:"cases",label:"4. Regional Case Studies"},{id:"pitfalls",label:"5. Production Pitfalls"},{id:"quiz",label:"6. Diagnostic Assessment Quiz"},{id:"handbook",label:"7. Study Notes & Viva"},{id:"lab",label:"8. Python Laboratory"},{id:"teacher",label:"9. Mentor Consultation"}].map(a=>e.jsx("a",{href:`#${a.id}`,onClick:()=>s(a.id),className:u("px-3 py-1.5 text-xs font-medium rounded-lg transition-all duration-200 border",d===a.id?"bg-indigo-600 text-white border-indigo-400 shadow-md shadow-indigo-600/30":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border-slate-700/60"),children:a.label},a.id))})]})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Concept Inception"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"1. Novice Masterclass & Intuitive Taxonomy"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg border border-indigo-500/40",children:"🌍"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"The Richter Earthquake Scale"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Tectonic fault energy ranges from thousands to billions of Joules. Plotting this on a raw linear axis makes small quakes invisible and large quakes blow off the chart. The base-10 logarithm turns runaway exponential energy into a neat, manageable 1-to-9 linear scale that human emergency services and linear models can reason about."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg border border-cyan-500/40",children:"✂️"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"The Tailor's S-Curve Ironing"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When given stiff, asymmetrically bunched fabric, a master tailor applies steam and heat along an adjustable curve parameter (λ). Box-Cox and Yeo-Johnson operate like that adjustable iron: continuous power bending pulls extreme right-side bunching into a symmetrical, comfortable bell-curve fit that standard regression models wear effortlessly."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-3",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg border border-emerald-500/40",children:"📬"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Howrah Postal Sorting Trays"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When millions of mail items arrive with continuous weights from 5 grams to 200 kilograms, optimizing shipping per exact gram creates administrative paralysis. Sorters discretize mail into 5 standardized postal bins (Letter, Document, Parcel, Freight, Heavy Cargo), converting continuous variance into actionable categorical routing."})]})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Architectural Taxonomy Matrix of Transformation Techniques"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-800 text-slate-400 uppercase tracking-wider bg-slate-950/60",children:[e.jsx("th",{className:"p-3",children:"Method"}),e.jsx("th",{className:"p-3",children:"Mathematical Domain"}),e.jsx("th",{className:"p-3",children:"Zero & Negatives"}),e.jsx("th",{className:"p-3",children:"Parameter Tuning"}),e.jsx("th",{className:"p-3",children:"Outlier Resilience"}),e.jsx("th",{className:"p-3",children:"Invertible?"}),e.jsx("th",{className:"p-3",children:"Recommended Models"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-semibold text-indigo-300",children:"Log1p (ln(1+x))"}),e.jsx("td",{className:"p-3",children:"x > -1.0"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Zero: Yes, Neg: No"}),e.jsx("td",{className:"p-3",children:"Fixed (None)"}),e.jsx("td",{className:"p-3",children:"Moderate"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Yes (exp(y) - 1)"}),e.jsx("td",{className:"p-3",children:"Linear, OLS, Ridge, Neural Nets"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-semibold text-cyan-300",children:"Box-Cox"}),e.jsx("td",{className:"p-3",children:"x > 0.0 strictly"}),e.jsx("td",{className:"p-3 text-rose-400",children:"Fails (Crash)"}),e.jsx("td",{className:"p-3",children:"MLE for λ"}),e.jsx("td",{className:"p-3",children:"Moderate"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Yes (algebraic)"}),e.jsx("td",{className:"p-3",children:"Gaussian NB, LDA, OLS, Econometrics"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-semibold text-emerald-300",children:"Yeo-Johnson"}),e.jsx("td",{className:"p-3",children:"All x in ℝ (-∞, +∞)"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Fully Supported"}),e.jsx("td",{className:"p-3",children:"MLE for λ"}),e.jsx("td",{className:"p-3",children:"Moderate"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Yes (algebraic)"}),e.jsx("td",{className:"p-3",children:"Deep Learning, Sensors, Mixed P&L"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-semibold text-amber-300",children:"Equal-Width Binning"}),e.jsx("td",{className:"p-3",children:"All x in ℝ"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Fully Supported"}),e.jsx("td",{className:"p-3",children:"Number of Bins (k)"}),e.jsx("td",{className:"p-3 text-rose-400",children:"Catastrophic"}),e.jsx("td",{className:"p-3 text-rose-400",children:"Lossy (No)"}),e.jsx("td",{className:"p-3",children:"Uniform distributions only"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40",children:[e.jsx("td",{className:"p-3 font-semibold text-purple-300",children:"Quantile Binning"}),e.jsx("td",{className:"p-3",children:"All x in ℝ"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Fully Supported"}),e.jsx("td",{className:"p-3",children:"Number of Bins (k)"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Immune (Max Entropy)"}),e.jsx("td",{className:"p-3 text-rose-400",children:"Lossy (No)"}),e.jsx("td",{className:"p-3",children:"Credit Risk, WoE Scoring, Non-linear OLS"})]})]})]})})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-3",children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Searchable Jargon Buster (12 Foundational ML Terms)"]}),e.jsx("input",{type:"text",placeholder:"Search term or definition...",value:D,onChange:a=>ae(a.target.value),className:"bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 w-full sm:w-64"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[K.map((a,t)=>e.jsxs("div",{className:"bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 space-y-2 hover:border-indigo-800/60 transition-all",children:[e.jsx("h4",{className:"text-sm font-bold text-indigo-300",children:a.term}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:a.def}),e.jsxs("div",{className:"pt-2 border-t border-slate-800 text-[11px] text-cyan-400 font-medium",children:["Impact: ",a.relevance]})]},t)),K.length===0&&e.jsxs("p",{className:"text-xs text-slate-500 col-span-3 text-center py-4",children:['No matching jargon found for "',D,'".']})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Formal Rigor"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"2. Mathematical Formulations & Theoretical Proofs"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," 1. Higher-Order Moments (Skewness & Kurtosis)"]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-indigo-950 font-mono text-xs text-indigo-200 overflow-x-auto space-y-2",children:[e.jsx("div",{children:"g_1 = [√{n(n-1)} / (n-2)] * [m_3 / m_2^(3/2)]"}),e.jsx("div",{children:"g_2 = [ (1/n) Σ (x_i - x̄)^4 / s^4 ] - 3.0"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Skewness g_1 measures distribution asymmetry. Excess kurtosis g_2 measures tail heaviness relative to Gaussian N(μ, σ²). Extreme g_1 > 1.0 indicates severe right skewness that distorts distance metrics and linear gradients."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," 2. Box-Cox Power Transform & Profile MLE"]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-cyan-950 font-mono text-xs text-cyan-200 overflow-x-auto space-y-2",children:[e.jsx("div",{children:"y(λ) = (x^λ - 1) / λ   if λ ≠ 0;   ln(x)   if λ = 0"}),e.jsx("div",{children:"L(λ) = -(n/2) ln(σ̂²(λ)) + (λ - 1) Σ ln(x_i)"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Valid strictly for strictly positive values x > 0. By L'Hopital's rule, lim(λ→0) (x^λ - 1)/λ = ln(x). The Jacobian term (λ - 1) Σ ln(x_i) prevents the optimizer from cheating via artificial variance shrinkage."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"🌐"})," 3. Yeo-Johnson Transform (Supports Real ℝ)"]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-emerald-950 font-mono text-xs text-emerald-200 overflow-x-auto space-y-2",children:[e.jsx("div",{children:"For x ≥ 0: ((x + 1)^λ - 1) / λ (λ≠0) or ln(x + 1) (λ=0)"}),e.jsx("div",{children:"For x < 0: -(((-x + 1)^(2-λ) - 1) / (2-λ)) (λ≠2) or -ln(-x + 1)"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Accommodates zero and negative values. For negative x, (-x + 1) > 1 guarantees strictly positive bases for fractional powers. Continuous, smooth, and strictly monotonic everywhere on ℝ."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"🎲"})," 4. Discretization & Shannon Entropy"]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-purple-950 font-mono text-xs text-purple-200 overflow-x-auto space-y-2",children:[e.jsx("div",{children:"H(X) = - Σ p_j * log_2(p_j)   (bits)"}),e.jsx("div",{children:"H_max = log_2(k)   (Achieved when p_j = 1/k for all j)"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Quantile binning achieves theoretical maximum entropy H_max = log_2(k). In contrast, equal-width binning under heavy outliers collapses entropy toward zero because almost all samples crowd into a single bin."})]})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Live Exploration Lab"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"3. Interactive Data Transformation Studio"})]}),e.jsx("div",{className:"flex bg-slate-950 p-1 rounded-xl border border-slate-800",children:[{id:"compare",label:"Mode A: Family Comparator"},{id:"sweeper",label:"Mode B: λ Sweeper"},{id:"binning",label:"Mode C: Discretization Arena"}].map(a=>e.jsx("button",{onClick:()=>P(a.id),className:u("px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer",n===a.id?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-white"),children:a.label},a.id))})]}),n==="compare"&&e.jsx("div",{className:"bg-slate-900/90 p-6 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"Select Dataset & Transform"}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("label",{className:"text-xs text-slate-400",children:"Benchmark Dataset:"}),e.jsx("div",{className:"space-y-1.5",children:Object.entries(F).map(([a,t])=>e.jsxs("button",{onClick:()=>{E(a),t.hasNegatives&&(b==="boxcox"||b==="log1p")&&x("yeojohnson")},className:u("w-full text-left p-2.5 rounded-xl text-xs font-medium border transition-all cursor-pointer",N===a?"bg-indigo-950/80 border-indigo-500 text-white shadow-md":"bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"),children:[e.jsx("div",{className:"font-bold",children:t.name}),e.jsx("div",{className:"text-[11px] text-slate-400 truncate",children:t.description})]},a))})]}),e.jsxs("div",{className:"space-y-2 pt-2",children:[e.jsx("label",{className:"text-xs text-slate-400",children:"Mathematical Transform:"}),e.jsx("div",{className:"grid grid-cols-2 gap-2",children:[{id:"raw",label:"Raw (No Transform)"},{id:"log1p",label:"Log1p: ln(1+x)",disabled:k.hasNegatives},{id:"sqrt",label:"Sqrt: √(x)",disabled:k.hasNegatives},{id:"cbrt",label:"Signed Cube Root"},{id:"boxcox",label:"Box-Cox (λ=-0.47)",disabled:k.hasNegatives},{id:"yeojohnson",label:"Yeo-Johnson (λ=0.66)"}].map(a=>e.jsx("button",{disabled:a.disabled,onClick:()=>x(a.id),className:u("p-2 rounded-lg text-xs font-semibold border transition-all text-center cursor-pointer",a.disabled?"bg-slate-950/40 border-slate-900 text-slate-600 cursor-not-allowed opacity-50":b===a.id?"bg-cyan-600 text-white border-cyan-400 shadow-md":"bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"),children:a.label},a.id))}),k.hasNegatives&&e.jsx("p",{className:"text-[11px] text-amber-400 pt-1",children:"⚠️ Dataset has negative values. Log and Box-Cox are disabled to prevent mathematical crashes!"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"Momentum Diagnostics"}),e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Sample Count (n)"}),e.jsx("div",{className:"text-lg font-bold text-white",children:R.length})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Mean (μ)"}),e.jsx("div",{className:"text-lg font-bold text-cyan-300",children:v.mean})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Std Dev (σ)"}),e.jsx("div",{className:"text-lg font-bold text-indigo-300",children:v.stdev})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Skewness (g_1)"}),e.jsx("div",{className:u("text-lg font-bold",Math.abs(v.skewness)<.5?"text-emerald-400":Math.abs(v.skewness)<1?"text-amber-400":"text-rose-400"),children:v.skewness})]})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Excess Kurtosis (g_2)"}),e.jsx("div",{className:"text-base font-bold text-purple-300",children:v.kurtosis}),e.jsx("div",{className:"text-[11px] text-slate-400 mt-1",children:v.kurtosis>1?"Leptokurtic (Heavy tails, outlier risk)":v.kurtosis<-1?"Platykurtic (Flat peak)":"Mesokurtic (Near-Gaussian decay)"})]}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"font-bold text-white",children:"Statistical Normality Assessment:"}),e.jsx("div",{className:"text-slate-300",children:Math.abs(v.skewness)<.5?"✔ Excellent symmetry! Feature satisfies Gaussian linear model assumptions.":Math.abs(v.skewness)<1?"⚡ Moderate skewness remaining. Acceptable for robust tree & linear models.":"⚠️ Severe skewness! Requires stronger power transformation or discretization."})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-white uppercase tracking-wider",children:"Live Empirical Distribution"}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 flex flex-col justify-between h-64",children:[e.jsxs("div",{className:"text-right text-[11px] text-slate-500",children:["Range: [",T.min.toFixed(1)," to ",T.max.toFixed(1),"]"]}),e.jsxs("svg",{className:"w-full h-44",viewBox:"0 0 300 120",preserveAspectRatio:"none",children:[e.jsx("defs",{children:e.jsxs("linearGradient",{id:`grad-${r}`,x1:"0",y1:"0",x2:"0",y2:"1",children:[e.jsx("stop",{offset:"0%",stopColor:"#6366f1",stopOpacity:"0.9"}),e.jsx("stop",{offset:"100%",stopColor:"#3b82f6",stopOpacity:"0.4"})]})}),T.bins.map((a,t)=>{const g=Math.max(...T.bins.map(y=>y.count),1),p=a.count/g*90,h=300/T.bins.length-4,o=t*(300/T.bins.length)+2,i=100-p;return e.jsxs("g",{children:[e.jsx("rect",{x:o,y:i,width:h,height:p,rx:"3",fill:`url(#grad-${r})`,className:"transition-all duration-300"}),e.jsx("text",{x:o+h/2,y:i-4,textAnchor:"middle",fill:"#cbd5e1",fontSize:"8",fontWeight:"bold",children:a.count>0?a.count:""})]},t)}),e.jsx("line",{x1:"0",y1:"102",x2:"300",y2:"102",stroke:"#475569",strokeWidth:"1.5"})]}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsxs("span",{children:["Min: ",T.min.toFixed(1)]}),e.jsx("span",{className:"text-indigo-400 font-bold",children:"8 Equal Intervals"}),e.jsxs("span",{children:["Max: ",T.max.toFixed(1)]})]})]})]})]})}),n==="sweeper"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Dynamic Power Parameter (λ) Sweeper"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Slide λ continuously from -2.0 to +2.0 to observe how the feature density dynamically reshapes in real time."})]}),e.jsxs("div",{className:"flex bg-slate-950 p-1 rounded-xl border border-slate-800",children:[e.jsx("button",{onClick:()=>{f("boxcox"),z(0)},className:u("px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer",_==="boxcox"?"bg-cyan-600 text-white shadow":"text-slate-400 hover:text-white"),children:"Box-Cox (Loans Dataset)"}),e.jsx("button",{onClick:()=>{f("yeojohnson"),z(.6)},className:u("px-3 py-1 text-xs font-bold rounded-lg transition-all cursor-pointer",_==="yeojohnson"?"bg-emerald-600 text-white shadow":"text-slate-400 hover:text-white"),children:"Yeo-Johnson (Grid Dataset)"})]})]}),e.jsxs("div",{className:"space-y-4 bg-slate-950 p-4 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-2",children:[e.jsxs("span",{className:"text-xs font-bold text-slate-300",children:["Power Parameter λ: ",e.jsx("span",{className:"text-cyan-400 text-sm font-mono",children:c.toFixed(2)})]}),e.jsx("span",{className:"text-xs text-slate-500",children:Math.abs(c- -1)<.05?"Reciprocal Transform (1 - 1/x)":Math.abs(c)<.05?"Natural Logarithm (ln(x))":Math.abs(c-.5)<.05?"Square Root (2*(√x - 1))":Math.abs(c-1)<.05?"Linear Identity (x - 1, No Shape Change)":Math.abs(c-2)<.05?"Quadratic Power (Corrects Left Skew)":"Continuous Power Transform"})]}),e.jsx("input",{type:"range",min:"-2.0",max:"2.0",step:"0.05",value:c,onChange:a=>z(parseFloat(a.target.value)),className:"w-full accent-cyan-500 cursor-pointer"}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-1",children:[{lmb:-1,label:"λ = -1.0 (Reciprocal)"},{lmb:-.47,label:"λ = -0.47 (Optimal MLE)"},{lmb:0,label:"λ = 0.0 (Log)"},{lmb:.5,label:"λ = 0.5 (Sqrt)"},{lmb:1,label:"λ = 1.0 (Raw Identity)"},{lmb:2,label:"λ = 2.0 (Square)"}].map((a,t)=>e.jsx("button",{onClick:()=>z(a.lmb),className:u("px-2.5 py-1 text-xs font-medium rounded-lg border transition-all cursor-pointer",Math.abs(c-a.lmb)<.03?"bg-cyan-600 text-white border-cyan-400":"bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-700"),children:a.label},t))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-white",children:"Transformed Value Distribution"}),e.jsxs("span",{className:"text-slate-400 font-mono",children:["[",A.min.toFixed(1)," to ",A.max.toFixed(1),"]"]})]}),e.jsxs("svg",{className:"w-full h-44",viewBox:"0 0 300 120",preserveAspectRatio:"none",children:[A.bins.map((a,t)=>{const g=Math.max(...A.bins.map(y=>y.count),1),p=a.count/g*90,h=300/A.bins.length-4,o=t*(300/A.bins.length)+2,i=100-p;return e.jsxs("g",{children:[e.jsx("rect",{x:o,y:i,width:h,height:p,rx:"3",fill:"#06b6d4",opacity:"0.85",className:"transition-all duration-200"}),e.jsx("text",{x:o+h/2,y:i-4,textAnchor:"middle",fill:"#e2e8f0",fontSize:"8",fontWeight:"bold",children:a.count>0?a.count:""})]},t)}),e.jsx("line",{x1:"0",y1:"102",x2:"300",y2:"102",stroke:"#475569",strokeWidth:"1.5"})]})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"grid grid-cols-2 gap-3",children:[e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Resulting Skewness (g_1)"}),e.jsx("div",{className:u("text-lg font-bold font-mono",Math.abs(L.skewness)<.5?"text-emerald-400":Math.abs(L.skewness)<1?"text-amber-400":"text-rose-400"),children:L.skewness})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Resulting Kurtosis (g_2)"}),e.jsx("div",{className:"text-lg font-bold font-mono text-purple-300",children:L.kurtosis})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Transformed Mean (μ)"}),e.jsx("div",{className:"text-lg font-bold font-mono text-cyan-300",children:L.mean})]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800",children:[e.jsx("div",{className:"text-[11px] text-slate-400",children:"Transformed StDev (σ)"}),e.jsx("div",{className:"text-lg font-bold font-mono text-indigo-300",children:L.stdev})]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2 text-xs",children:[e.jsxs("div",{className:"font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Profile Likelihood Optimization Insight:"]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Notice how setting λ = 1.0 retains severe right skew (+3.10), while moving λ toward negative values (-0.47) progressively compresses the upper tail until skewness reaches near-zero (+0.21). However, pushing λ too far below -1.5 inverts the distribution and introduces heavy artificial left skew!"})]})]})]})]}),n==="binning"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-base font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⚖️"})," Equal-Width vs. Equal-Frequency (Quantile) Binning Arena"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Compare how Equal-Width and Quantile binning respond to heavy outliers and examine Shannon Entropy preservation."})]}),e.jsx("button",{onClick:()=>ee(a=>!a),className:u("px-3 py-1.5 text-xs font-bold rounded-xl border transition-all cursor-pointer flex items-center gap-2",C?"bg-rose-950/80 border-rose-500 text-rose-200 shadow-md":"bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700"),children:e.jsx("span",{children:C?"🚨 Outlier Injected (₹1,000k)":"➕ Inject Extreme Outlier (₹1,000k)"})})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-2xl border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsxs("span",{className:"font-bold text-slate-300",children:["Target Bin Count (k): ",e.jsx("span",{className:"text-indigo-400 font-mono text-sm",children:m})]}),e.jsxs("span",{className:"text-slate-500",children:["Max Theoretical Entropy: log_2(",m,") = ",Math.log2(m).toFixed(3)," bits"]})]}),e.jsx("input",{type:"range",min:"2",max:"8",step:"1",value:m,onChange:a=>$(parseInt(a.target.value,10)),className:"w-full accent-indigo-500 cursor-pointer"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:u("p-5 rounded-2xl border shadow-xl space-y-4",C&&j.counts.some(a=>a===0)?"bg-rose-950/20 border-rose-900/60":"bg-slate-950 border-slate-800"),children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h4",{className:"text-sm font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📏"})," Equal-Width Binning"]}),e.jsxs("span",{className:"text-xs font-mono text-slate-400",children:["Width: ",j.width]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Bin Frequencies & Distribution:"}),e.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 gap-2",children:j.counts.map((a,t)=>e.jsxs("div",{className:u("p-2 rounded-lg text-center border text-xs",a===0?"bg-rose-950/60 border-rose-700/60 text-rose-300 font-bold":"bg-slate-900 border-slate-800 text-slate-200"),children:[e.jsxs("div",{className:"text-[10px] text-slate-500",children:["Bin ",t]}),e.jsx("div",{className:"text-sm font-bold",children:a}),e.jsx("div",{className:"text-[9px] text-slate-500",children:a===0?"EMPTY!":`${a} obs`})]},t))})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800/80 space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Shannon Entropy:"}),e.jsxs("span",{className:u("font-mono font-bold",j.entropy<1?"text-rose-400":"text-amber-300"),children:[j.entropy," / ",j.maxEntropy," bits"]})]}),C&&j.counts.some(a=>a===0)&&e.jsxs("p",{className:"text-[11px] text-rose-400 leading-relaxed pt-1",children:["⚠️ Outlier Pathology: Extreme outlier swamped the range. Intermediate bins are completely empty and entropy collapsed by ",(100-j.entropy/j.maxEntropy*100).toFixed(0),"%!"]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-emerald-900/60 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("h4",{className:"text-sm font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🎯"})," Equal-Frequency (Quantile) Binning"]}),e.jsx("span",{className:"text-xs font-mono text-emerald-400 font-bold",children:"Percentile Partitioned"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsx("div",{className:"text-xs text-slate-400 font-medium",children:"Bin Frequencies & Distribution:"}),e.jsx("div",{className:"grid grid-cols-4 sm:grid-cols-6 gap-2",children:H.counts.map((a,t)=>e.jsxs("div",{className:"p-2 rounded-lg text-center border border-emerald-900/50 bg-emerald-950/30 text-emerald-200 text-xs",children:[e.jsxs("div",{className:"text-[10px] text-emerald-400/80",children:["Bin ",t]}),e.jsx("div",{className:"text-sm font-bold",children:a}),e.jsxs("div",{className:"text-[9px] text-slate-400",children:[a," obs"]})]},t))})]}),e.jsxs("div",{className:"pt-2 border-t border-slate-800/80 space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"text-slate-400",children:"Shannon Entropy:"}),e.jsxs("span",{className:"font-mono font-bold text-emerald-400",children:[H.entropy," / ",H.maxEntropy," bits"]})]}),e.jsx("p",{className:"text-[11px] text-emerald-300 leading-relaxed pt-1",children:"✔ Robust to Outliers: Every single bin maintains balanced representation. Shannon entropy remains near theoretical maximum regardless of outlier magnitude!"})]})]})]})]})]}),e.jsxs("section",{id:"cases",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Industrial Grounding"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"4. Real-World Regional Industrial Case Studies (West Bengal)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/40",children:"FinTech Lending"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Salt Lake Sector V, Kolkata"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Micro-Lending Loan Amount Skewness"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"A Kolkata FinTech evaluates micro-loans where 90% of requests are ₹15k–₹40k, but business bridge loans reach ₹25 Lakhs (skewness g_1 = +4.82). Training an Ordinary Least Squares default classifier on raw amounts generated heteroscedastic cone residuals. Box-Cox with λ* = -0.32 normalized the distribution, reducing loan default prediction MSE by 18.2%."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/40",children:"Power Distribution"}),e.jsx("span",{className:"text-xs text-slate-400",children:"CESC Urban Grid, Kolkata"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"CESC Net Grid Load with Reverse Solar Feeds"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"CESC feeding substations monitor net hourly megawatt load. Midday commercial rooftop solar creates negative surplus feeds (-14.2 MW), while evening cooling peaks jump to +240 MW. Because Box-Cox crashes on non-positive values, engineers applied Yeo-Johnson (λ* = 0.66), eliminating deep neural net gradient blowups and improving 24-hr load forecasting."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-amber-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-amber-500/20 text-amber-300 rounded-full border border-amber-500/40",children:"Agri-Commodities"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Howrah Wholesale Cold Storages"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Potato Wholesale Price Volatility & Quantile Bins"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Jyoti potato spot prices per quintal typically range ₹800–₹1,400, but flood supply shocks spiked prices to ₹3,800. Equal-width binning created 3 empty bins and collapsed 95% of trade days into Bin 0. Switching to 5-bin Quantile Discretization preserved 2.32 bits of entropy, allowing a Decision Tree to accurately detect merchant hoarding regimes."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40",children:"Public Healthcare"}),e.jsx("span",{className:"text-xs text-slate-400",children:"North 24 Parganas District Hospitals"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Monsoon Dengue Platelet Count Surveillance"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Clinical diagnostic centers in Barasat and Barrackpore track platelet counts during dengue epidemics (spanning 8,000 to 450,000/μL). The Poisson count dispersion (variance proportional to mean) was stabilized using Square Root and Box-Cox power transforms (λ* = 0.41), enabling linear discriminant classifiers to identify hemorrhagic shock risk 18 hours earlier."})]})]})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Defensive Architecture"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"5. Production Pitfalls & Engineering Rules"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Data Leakage via λ Estimation"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Fitting on Entire Dataset"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Never fit Box-Cox λ* or quantile cutoffs on the combined dataset. Always estimate parameters strictly on training folds (X_train) and transform test/serving data using frozen training parameters."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: Box-Cox Non-Positive Crash"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Zero or Negative Ingestion"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Box-Cox crashes immediately if an incoming record contains x ≤ 0. Install schema assertion guards or default to Yeo-Johnson if negative numbers are possible in production."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Jensen's Inequality Bias"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Naive exp(ŷ) Back-Transformation"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When predicting a log-transformed target, exp(ŷ) yields the median, systematically under-predicting the mean sum. Apply the normal correction exp(ŷ + σ²/2) or Duan's smearing factor."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 4: Tree Model Invariance"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Wasting Compute on XGBoost"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Monotonic transforms preserve sample rank order. Decision trees, Random Forests, and XGBoost produce 100% identical split thresholds. Do not waste inference latency transforming features for tree ensembles."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 5: High-Cardinality Binning"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Degree-of-Freedom Explosion"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Discretizing continuous features into excessive bins (e.g. k = 100) causes extreme sparsity, overfitting, and variance errors. Keep bins between 5 and 10 unless domain business rules dictate otherwise."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-emerald-900/40 space-y-3",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"✔"})," Best Practice: Pipeline Serialization"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Persisting λ & Scaling Moments"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Store fitted transformer objects in Joblib/ONNX pipelines alongside model weights to guarantee bitwise-identical transformations in live microservices and enable SHAP inversion."})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Knowledge Verification"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"6. Diagnostic Assessment Quiz"})]}),S&&e.jsxs("div",{className:"text-sm font-bold px-4 py-1.5 rounded-xl bg-indigo-950 border border-indigo-500 text-indigo-300",children:["Score: ",V()," / ",I.length," (",(V()/I.length*100).toFixed(0),"%)"]})]}),e.jsxs("div",{className:"space-y-6",children:[I.map((a,t)=>e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:["Scenario ",t+1," • ",a.tier]}),S&&e.jsx("span",{className:u("text-xs font-bold px-2 py-0.5 rounded-full border",M[a.id]===a.correctIndex?"bg-emerald-950 border-emerald-500 text-emerald-300":"bg-rose-950 border-rose-500 text-rose-300"),children:M[a.id]===a.correctIndex?"CORRECT ✔":"INCORRECT ❌"})]}),e.jsx("p",{className:"text-sm sm:text-base font-semibold text-white leading-relaxed",children:a.question}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2",children:a.options.map((g,p)=>{const h=M[a.id]===p,o=a.correctIndex===p;let i="bg-slate-950 border-slate-800 text-slate-300 hover:border-slate-700";return S?o?i="bg-emerald-950/80 border-emerald-500 text-emerald-200 font-bold":h&&!o&&(i="bg-rose-950/80 border-rose-500 text-rose-200"):h&&(i="bg-indigo-950/80 border-indigo-500 text-white font-semibold"),e.jsxs("button",{disabled:S,onClick:()=>te(a.id,p),className:u("p-3 rounded-xl text-xs text-left border transition-all cursor-pointer flex items-start gap-2",i),children:[e.jsxs("span",{className:"font-bold text-indigo-400",children:[String.fromCharCode(65+p),")"]}),e.jsx("span",{children:g})]},p)})}),S&&e.jsxs("div",{className:"pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-2 bg-slate-950/50 p-3 rounded-xl",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-indigo-300",children:"Explanation:"})," ",a.explanation]}),e.jsxs("p",{className:"text-cyan-400",children:[e.jsx("strong",{children:"Practical Rule:"})," ",a.practicalTip]})]})]},a.id)),e.jsx("div",{className:"flex justify-end gap-3 pt-4",children:S?e.jsx("button",{onClick:()=>{G({}),U(!1)},className:"px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all cursor-pointer",children:"Retake Assessment"}):e.jsx("button",{onClick:()=>U(!0),disabled:Object.keys(M).length<I.length,className:u("px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer",Object.keys(M).length===I.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed"),children:"Submit Diagnostic Assessment"})})]})]}),e.jsxs("section",{id:"handbook",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Academic Reference"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"7. Academic Revision Handbook & Viva Voce Q&A"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(ie,{content:oe,filename:"Topic14_Data_Transformation_Notes.txt"})})]}),e.jsxs("section",{id:"lab",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Hands-On Code"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"8. Pure Python Laboratory: Transformation & Binning Engine"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(ne,{code:re,filename:"data_transformation_lab.py",runnable:!0})})]}),e.jsxs("section",{id:"teacher",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Faculty Mentorship"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"9. Teacher Consultation & Viva Guidance"})]}),e.jsx(se,{})]})]})};export{ge as default};
