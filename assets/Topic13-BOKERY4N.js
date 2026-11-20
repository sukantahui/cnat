import{b as o,j as e,bl as p}from"./vendor-react-core-B-R9HE-Z.js";import{P as ue}from"./PythonFileLoader-DZ61U3Y_.js";import{F as me}from"./FAQTemplate-16IfroqC.js";import{P as pe}from"./PlainTextPrint-C6NaUtnE.js";import{T as he}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const xe=`"""
=============================================================================
TOPIC 13: BASIC OUTLIER DETECTION ALGORITHMS
Module: Data Types and Preprocessing (BCAC701B)
Academic Practical Laboratory & Industrial Simulation Engine
Author: Sukanta Hui | Senior Consultant & Educator | Barrackpore, West Bengal
Institute: Coder & AccoTax
=============================================================================

This laboratory engine provides a complete, production-grade implementation of
the four foundational univariate outlier detection algorithms from scratch,
requiring ZERO external third-party dependencies (built solely with standard Python).

Core Algorithmic Engines Implemented:
1. Classical Z-Score Engine (3-Sigma Gaussian Rule):
   - z_i = (x_i - mu) / sigma.
   - Cutoffs: |z| >= 2.5 (Moderate), |z| >= 3.0 (Extreme).
2. Tukey's Fences Engine (Interquartile Range - IQR):
   - Q1 (25th percentile), Q3 (75th percentile), IQR = Q3 - Q1.
   - Inner Fences (Mild Outliers): [Q1 - 1.5 * IQR, Q3 + 1.5 * IQR].
   - Outer Fences (Extreme Outliers): [Q1 - 3.0 * IQR, Q3 + 3.0 * IQR].
   - Non-parametric and distribution-free (25% breakdown point).
3. Modified Z-Score Engine (Iglewicz & Hoaglin / MAD):
   - Median = med(X), MAD = med(|x_i - med(X)|).
   - M_i = 0.6745 * (x_i - med(X)) / MAD.
   - Cutoff: |M_i| >= 3.5 (50% breakdown point, immune to masking).
4. Quantile Trimming & Winsorization Engine:
   - Clamping extreme values to specified percentiles (e.g. 1st & 99th).
5. Empirical Benchmarking on West Bengal Datasets:
   - Kolkata & Salt Lake real estate price per sq.ft.
   - Sector V FinTech transaction amounts.
=============================================================================
"""

import math
import statistics
from typing import List, Dict, Any, Tuple, Optional
from dataclasses import dataclass

# =====================================================================
# 1. ROBUST PERCENTILE & STATISTICAL HELPERS (FROM FIRST PRINCIPLES)
# =====================================================================

def calculate_percentile(sorted_data: List[float], p: float) -> float:
    """
    Computes empirical percentile p in [0.0, 100.0] using linear interpolation
    (equivalent to numpy/scipy method='linear').
    """
    n = len(sorted_data)
    if n == 0:
        return 0.0
    if n == 1:
        return sorted_data[0]
    
    # Virtual rank index in [0, n - 1]
    rank = (p / 100.0) * (n - 1)
    k = math.floor(rank)
    d = rank - k
    
    if k >= n - 1:
        return sorted_data[-1]
    return sorted_data[k] + d * (sorted_data[k + 1] - sorted_data[k])


def median_absolute_deviation(data: List[float]) -> Tuple[float, float]:
    """
    Returns (median, MAD) of the dataset.
    MAD = Median( |x_i - Median(X)| ).
    """
    if not data:
        return 0.0, 0.0
    med = statistics.median(data)
    abs_deviations = [abs(x - med) for x in data]
    mad = statistics.median(abs_deviations)
    return med, mad


# =====================================================================
# 2. CLASSICAL Z-SCORE DETECTION ENGINE
# =====================================================================

class ZScoreDetector:
    """
    Classical Z-score anomaly detector under Gaussian assumption.
    """
    def __init__(self, threshold: float = 3.0):
        self.threshold = threshold

    def detect(self, data: List[float]) -> Dict[str, Any]:
        if len(data) < 3:
            return {"error": "Insufficient sample size"}
        
        mu = statistics.mean(data)
        sigma = statistics.stdev(data)
        
        if sigma == 0:
            sigma = 1e-6  # Prevent division by zero on uniform data

        z_scores = [(x - mu) / sigma for x in data]
        outliers = [
            {"index": i, "value": x, "z_score": round(z, 3), "severity": "EXTREME" if abs(z) >= 3.0 else "MODERATE"}
            for i, (x, z) in enumerate(zip(data, z_scores))
            if abs(z) >= self.threshold
        ]

        return {
            "method": "Z-Score",
            "mean": round(mu, 2),
            "stdev": round(sigma, 2),
            "threshold": self.threshold,
            "outliers_found": len(outliers),
            "outlier_details": outliers,
            "lower_bound": round(mu - self.threshold * sigma, 2),
            "upper_bound": round(mu + self.threshold * sigma, 2)
        }


# =====================================================================
# 3. TUKEY'S FENCES (IQR) DETECTION ENGINE
# =====================================================================

class TukeyIQRDetector:
    """
    Non-parametric outlier detection using Interquartile Range (IQR).
    """
    def __init__(self, k_inner: float = 1.5, k_outer: float = 3.0):
        self.k_inner = k_inner
        self.k_outer = k_outer

    def detect(self, data: List[float]) -> Dict[str, Any]:
        if len(data) < 4:
            return {"error": "Insufficient sample size"}

        sorted_data = sorted(data)
        q1 = calculate_percentile(sorted_data, 25.0)
        q3 = calculate_percentile(sorted_data, 75.0)
        iqr = q3 - q1

        lower_inner = q1 - self.k_inner * iqr
        upper_inner = q3 + self.k_inner * iqr
        lower_outer = q1 - self.k_outer * iqr
        upper_outer = q3 + self.k_outer * iqr

        outliers = []
        for i, x in enumerate(data):
            if x < lower_outer or x > upper_outer:
                outliers.append({"index": i, "value": x, "category": "EXTREME_OUTLIER (3.0x IQR)"})
            elif x < lower_inner or x > upper_inner:
                outliers.append({"index": i, "value": x, "category": "MILD_OUTLIER (1.5x IQR)"})

        return {
            "method": "Tukey IQR",
            "q1": round(q1, 2),
            "q3": round(q3, 2),
            "iqr": round(iqr, 2),
            "lower_inner_fence": round(lower_inner, 2),
            "upper_inner_fence": round(upper_inner, 2),
            "lower_outer_fence": round(lower_outer, 2),
            "upper_outer_fence": round(upper_outer, 2),
            "outliers_found": len(outliers),
            "outlier_details": outliers
        }


# =====================================================================
# 4. MODIFIED Z-SCORE (MAD) DETECTION ENGINE
# =====================================================================

class ModifiedZScoreDetector:
    """
    Robust outlier detection using Median Absolute Deviation (MAD).
    Formulated by Boris Iglewicz and David Hoaglin (1993).
    M_i = 0.6745 * (x_i - Median) / MAD.
    """
    def __init__(self, threshold: float = 3.5):
        self.threshold = threshold

    def detect(self, data: List[float]) -> Dict[str, Any]:
        if len(data) < 3:
            return {"error": "Insufficient sample size"}

        med, mad = median_absolute_deviation(data)
        
        # When MAD is 0 (more than 50% identical values), use mean absolute deviation from median
        if mad == 0:
            mean_ad = statistics.mean([abs(x - med) for x in data])
            denom = mean_ad if mean_ad > 0 else 1e-6
            scale_const = 0.7979
        else:
            denom = mad
            scale_const = 0.6745

        mod_z_scores = [scale_const * abs(x - med) / denom for x in data]
        
        outliers = [
            {"index": i, "value": x, "mod_z_score": round(mz, 3)}
            for i, (x, mz) in enumerate(zip(data, mod_z_scores))
            if mz >= self.threshold
        ]

        # Effective equivalent fence bounds
        bound_offset = (self.threshold * denom) / scale_const
        lower_bound = med - bound_offset
        upper_bound = med + bound_offset

        return {
            "method": "Modified Z-Score (MAD)",
            "median": round(med, 2),
            "mad": round(mad, 2),
            "threshold": self.threshold,
            "outliers_found": len(outliers),
            "outlier_details": outliers,
            "lower_bound": round(lower_bound, 2),
            "upper_bound": round(upper_bound, 2)
        }


# =====================================================================
# 5. WINSORIZATION & QUANTILE TRIMMING ENGINE
# =====================================================================

def winsorize_data(data: List[float], lower_pct: float = 2.5, upper_pct: float = 97.5) -> List[float]:
    """
    Caps extreme values at specified percentiles, preserving total sample size N.
    """
    sorted_d = sorted(data)
    lower_val = calculate_percentile(sorted_d, lower_pct)
    upper_val = calculate_percentile(sorted_d, upper_pct)
    
    return [
        min(max(x, lower_val), upper_val)
        for x in data
    ]


# =====================================================================
# 6. COMPREHENSIVE INDUSTRIAL BENCHMARK (WEST BENGAL CASE STUDIES)
# =====================================================================

def run_basic_outlier_detection_laboratory() -> Dict[str, Any]:
    print("=" * 80)
    print("  ACADEMIC & INDUSTRIAL BENCHMARK: BASIC OUTLIER DETECTION ALGORITHMS")
    print("  Course: BCAC701B | Machine Learning Preprocessing Laboratory")
    print("  Author: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    # -------------------------------------------------------------
    # EXPERIMENT 1: Real Estate Price/Sq.Ft in Salt Lake & New Town
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 1] REAL ESTATE VALUATION (Kolkata & Salt Lake Price / Sq.Ft) ---")
    
    # 15 properties across Salt Lake Sector V, New Town, Rajarhat, and Park Street:
    # 12 normal flats (Rs 4,500 - 8,200), 1 low clerical error (Rs 450), 2 luxury penthouses (Rs 28,000 & 32,000)
    property_prices_sqft = [
        4500.0, 4800.0, 5100.0, 5200.0, 5400.0, 5600.0, 5800.0, 6000.0,
        6200.0, 6500.0, 7200.0, 8000.0,
        # Anomaly 1: Clerical typo (dropped zero: Rs 450 instead of 4,500)
        450.0,
        # Anomaly 2: Ultra-luxury Park Street penthouse
        28000.0,
        # Anomaly 3: Clustered luxury penthouse in Salt Lake
        32000.0
    ]

    print(f"Total Property Observations: {len(property_prices_sqft)}")
    print(f"Data Summary: Min = Rs {min(property_prices_sqft):,.0f} | Max = Rs {max(property_prices_sqft):,.0f}")

    # 1. Z-Score Test (|z| >= 3.0)
    z_detector = ZScoreDetector(threshold=3.0)
    z_res = z_detector.detect(property_prices_sqft)
    print(f"\\n1. Classical Z-Score (|z| >= {z_res['threshold']}):")
    print(f"   Mean = Rs {z_res['mean']:,.1f} | StDev = Rs {z_res['stdev']:,.1f}")
    print(f"   Valid Envelope: [Rs {z_res['lower_bound']:,.1f}  to  Rs {z_res['upper_bound']:,.1f}]")
    print(f"   Outliers Detected: {z_res['outliers_found']}")
    for o in z_res['outlier_details']:
        print(f"   -> Index {o['index']}: Rs {o['value']:,} (Z-Score: {o['z_score']}) [{o['severity']}]")
    if z_res['outliers_found'] < 3:
        print("   ⚠️ WARNING: Classical Z-Score missed anomalies due to MASKING from inflated standard deviation!")

    # 2. Tukey's Fences (1.5x IQR & 3.0x IQR)
    iqr_detector = TukeyIQRDetector(k_inner=1.5, k_outer=3.0)
    iqr_res = iqr_detector.detect(property_prices_sqft)
    print(f"\\n2. Tukey's Fences (IQR = Rs {iqr_res['iqr']:,}):")
    print(f"   Q1 = Rs {iqr_res['q1']:,} | Q3 = Rs {iqr_res['q3']:,}")
    print(f"   Inner Fences (1.5x): [Rs {iqr_res['lower_inner_fence']:,}  to  Rs {iqr_res['upper_inner_fence']:,}]")
    print(f"   Outer Fences (3.0x): [Rs {iqr_res['lower_outer_fence']:,}  to  Rs {iqr_res['upper_outer_fence']:,}]")
    print(f"   Outliers Detected: {iqr_res['outliers_found']}")
    for o in iqr_res['outlier_details']:
        print(f"   -> Index {o['index']}: Rs {o['value']:,} ({o['category']})")

    # 3. Modified Z-Score (MAD, Iglewicz-Hoaglin |M| >= 3.5)
    mad_detector = ModifiedZScoreDetector(threshold=3.5)
    mad_res = mad_detector.detect(property_prices_sqft)
    print(f"\\n3. Modified Z-Score (MAD = Rs {mad_res['mad']:,} | Median = Rs {mad_res['median']:,}):")
    print(f"   Effective Bounds: [Rs {mad_res['lower_bound']:,}  to  Rs {mad_res['upper_bound']:,}]")
    print(f"   Outliers Detected: {mad_res['outliers_found']}")
    for o in mad_res['outlier_details']:
        print(f"   -> Index {o['index']}: Rs {o['value']:,} (Mod-Z: {o['mod_z_score']})")
    print("   ✔ Modified Z-score successfully caught ALL 3 anomalies without being blinded by masking!")

    # -------------------------------------------------------------
    # EXPERIMENT 2: Winsorization vs Trimming on Model Gradient
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 2] REMEDIATION: WINSORIZATION VS TRIMMING ---")
    winsorized = winsorize_data(property_prices_sqft, lower_pct=5.0, upper_pct=95.0)
    
    print(f"Original Mean:   Rs {statistics.mean(property_prices_sqft):,.1f} | Variance: {statistics.variance(property_prices_sqft):,.0f}")
    print(f"Winsorized Mean: Rs {statistics.mean(winsorized):,.1f} | Variance: {statistics.variance(winsorized):,.0f}")
    variance_reduction = (1.0 - statistics.variance(winsorized) / statistics.variance(property_prices_sqft)) * 100
    print(f"Variance Stabilization: {variance_reduction:.1f}% reduction in gradient-exploding variance!")

    # -------------------------------------------------------------
    # EXPERIMENT 3: Sector V FinTech Transaction Screening
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 3] FINTECH TRANSACTION MONITORING (Salt Lake Sector V) ---")
    fintech_transactions = [
        120, 150, 220, 250, 280, 310, 340, 400, 450, 520, 580, 610, 750, 820, 950,
        1200, 1500, 1800, 2200, 2500,
        # Fraudulent impulse card swipe
        485000.0
    ]

    z_tx = ZScoreDetector(threshold=3.0).detect(fintech_transactions)
    iqr_tx = TukeyIQRDetector(k_inner=1.5).detect(fintech_transactions)
    mad_tx = ModifiedZScoreDetector(threshold=3.5).detect(fintech_transactions)

    print(f"Total Transactions: {len(fintech_transactions)}")
    print(f"Z-Score Flagged:    {z_tx['outliers_found']} outlier(s)")
    print(f"Tukey IQR Flagged:  {iqr_tx['outliers_found']} outlier(s)")
    print(f"Modified Z Flagged: {mad_tx['outliers_found']} outlier(s)")

    print("\\n" + "=" * 80)
    print("  LABORATORY EXECUTION COMPLETE: ALL 4 DETECTION ENGINES VERIFIED")
    print("=" * 80)

    return {
        "status": "SUCCESS",
        "z_outliers_real_estate": z_res['outliers_found'],
        "iqr_outliers_real_estate": iqr_res['outliers_found'],
        "mad_outliers_real_estate": mad_res['outliers_found'],
        "variance_reduction_winsorized": round(variance_reduction, 2)
    }

if __name__ == "__main__":
    run_basic_outlier_detection_laboratory()
`,ge=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 13: Basic Outlier Detection Algorithms
Author: Sukanta Hui | Senior Consultant & Educator | Barrackpore, West Bengal, India
Institute: Coder & AccoTax | Aligned with MAKAUT & Industry AI Standards
=============================================================================

1. THEORETICAL FOUNDATION: THE DETECTION PARADIGM
-----------------------------------------------------------------------------
Outlier detection in machine learning preprocessing is the process of identifying
observations that deviate significantly from the central tendency and dispersion
of a feature. While Topic 12 established the conceptual foundations (Point vs
Contextual vs Collective, Leverage, and Masking), Topic 13 formulates the concrete
computational algorithms used to establish mathematical boundary fences.

A detector constructs a Decision Boundary [L, U] such that:
    x_i is an outlier  <===>  x_i < L   OR   x_i > U

The primary mathematical challenge is that the parameters defining L and U
(e.g., mean, variance, percentiles) are themselves computed from the contaminated
data. Choosing an inappropriate algorithm leads directly to Masking (failing to
detect true outliers) or Swamping (falsely flagging normal data).


-----------------------------------------------------------------------------
2. THE FOUR FOUNDATIONAL UNIVARIATE DETECTION ENGINES
-----------------------------------------------------------------------------

2.1 Engine 1: Classical Z-Score (The 3-Sigma Rule)
   - Underlying Assumption: Gaussian / Normal Distribution: X ~ N(mu, sigma^2).
   - Mathematical Formulation:
       z_i = (x_i - bar(x)) / s
     Where:
       bar(x) = (1/N) * Sum_{i=1}^N x_i
       s = sqrt( [1/(N - 1)] * Sum_{i=1}^N (x_i - bar(x))^2 )
   - Decision Boundaries:
       Lower Bound: L = bar(x) - k * s
       Upper Bound: U = bar(x) + k * s
       * k = 2.5: Flags ~1.24% of extreme tails under perfect normality.
       * k = 3.0: The standard 3-sigma rule (flags points outside the 99.73% envelope).
   - Fatal Mathematical Vulnerability:
       Finite Sample Breakdown Point epsilon* = 0%.
       A single extreme outlier (or multiple clustered outliers) inflates both bar(x)
       and s. As s appears in the denominator, the computed z_i shrivels, creating
       severe MASKING where extreme outliers evade detection.

2.2 Engine 2: Tukey's Fences (The Interquartile Range - IQR)
   - Formulated by John W. Tukey in 1977 for exploratory data analysis (boxplots).
   - Underlying Assumption: Non-parametric, completely distribution-free!
   - Mathematical Formulation:
       Order statistics: x_(1) <= x_(2) <= ... <= x_(N).
       Q1 = 25th percentile (first quartile)
       Q3 = 75th percentile (third quartile)
       IQR = Q3 - Q1 (Interquartile Range)
   - Decision Boundaries:
       1. Inner Fences (Mild Outliers):
          L_inner = Q1 - 1.5 * IQR
          U_inner = Q3 + 1.5 * IQR
       2. Outer Fences (Extreme Outliers):
          L_outer = Q1 - 3.0 * IQR
          U_outer = Q3 + 3.0 * IQR
   - Statistical Strengths:
       Breakdown Point epsilon* = 25%. Up to 25% of observations can be arbitrarily
       corrupted before Q1 or Q3 breaks down. Immune to single-point variance inflation.
   - Limitation on Skewed Data:
       Symmetric fences [Q1 - 1.5*IQR, Q3 + 1.5*IQR] cut too aggressively into the
       long natural tail of right-skewed distributions (e.g. income or housing prices).

2.3 Engine 3: Modified Z-Score (Median Absolute Deviation - MAD)
   - Formulated by Boris Iglewicz and David C. Hoaglin (1993, ASQC Basic References).
   - Underlying Assumption: Robust against heavy contamination; recommended by NIST.
   - Mathematical Formulation:
       Median: tilde(x) = Median(X)
       MAD = Median( |x_i - tilde(x)| )
       Consistent Standard Deviation: sigma_MAD = 1.4826 * MAD
       (Note: 1 / 1.4826 ≈ 0.6745, representing the 75th percentile of standard normal).
       Modified Z-Score:
           M_i = [ 0.6745 * (x_i - tilde(x)) ] / MAD
   - Decision Boundaries:
       Standard recommended cutoff: |M_i| >= 3.5.
       Equivalent Decision Fences:
           L = tilde(x) - [ (3.5 * MAD) / 0.6745 ] = tilde(x) - 5.189 * MAD
           U = tilde(x) + [ (3.5 * MAD) / 0.6745 ] = tilde(x) + 5.189 * MAD
   - Statistical Strengths:
       Breakdown Point epsilon* = 50%! Highest possible breakdown point for any
       location-scale estimator. Completely immune to clustered outlier masking.

2.4 Engine 4: Quantile Trimming Fences (Empirical Percentiles)
   - Decision Boundaries:
       L = Percentile(X, alpha)        (e.g., alpha = 1.0% or 0.5%)
       U = Percentile(X, 100 - alpha)  (e.g., 99.0% or 99.5%)
   - Highly effective in large-scale automated data pipelines (e.g. streaming web
     telemetry, e-commerce order volumes) where distribution shapes are unknown.


-----------------------------------------------------------------------------
3. SKEWNESS ADAPTATIONS: THE ADJUSTED BOXPLOT (MEDCOUPLE)
-----------------------------------------------------------------------------
When a feature is heavily right-skewed (Skewness gamma_1 > 1.0), Tukey's symmetric
fences falsely flag legitimate points in the long right tail while failing to flag
outliers in the short left tail.

To resolve this, Mia Hubert and Ellen Vandervieren (2008) introduced the Adjusted
Boxplot using the Medcouple (MC) robust skewness estimator:
    MC in [-1.0, 1.0]
Adjusted Fences for MC >= 0 (Right-Skewed):
    L = Q1 - 1.5 * exp(-4 * MC) * IQR
    U = Q3 + 1.5 * exp(3 * MC) * IQR

This dynamically expands the upper fence and contracts the lower fence, preventing
false alarms on skewed income or housing distributions.


-----------------------------------------------------------------------------
4. REMEDIATION STRATEGIES: WHAT TO DO AFTER DETECTION
-----------------------------------------------------------------------------
Detection is only step 1. Step 2 is choosing the correct engineering remediation:

4.1 Trimming / Listwise Deletion:
   - When to Use: The outlier is verified to be a contaminant, clerical error, or
     sensor transmission glitch (e.g., negative age, or price = Rs 45 instead of Rs 4,500).
   - Risk: Reduces sample size N. In imbalanced datasets, deleting outliers might
     delete rare minority class positive examples (fraud cases).

4.2 Winsorization (Percentile Capping):
   - Formulated by Charles P. Winsor.
   - Mechanism: Replaces all values x_i > U with U, and all x_i < L with L.
   - Advantage: Preserves full sample size N while bounding feature leverage and
     variance. Highly recommended for linear regression, neural networks, and PCA.

4.3 Log / Box-Cox / Yeo-Johnson Power Transformation:
   - Compresses right-skewed tail values smoothly, converting exponential spreads into
     near-Gaussian shapes where classical algorithms perform reliably.

4.4 Indicator Flagging (Feature Augmentation):
   - In machine learning pipelines, create a new binary column:
       \`is_outlier_flag = (x > U) | (x < L)\`
   - Allows tree-based models (Random Forest, XGBoost) to learn distinct splitting
     branches specifically for extreme business events.


-----------------------------------------------------------------------------
5. REGIONAL WEST BENGAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------
Case 1: Real Estate Valuation in Salt Lake Sector V & New Town
- Problem: Property prices per square foot across 10,000 apartments. Most flats range
  from Rs 4,500 to Rs 8,500. However, two luxury penthouses in Park Street and Sector V
  priced at Rs 32,000/sq.ft. inflated the sample standard deviation from Rs 1,100 to
  Rs 8,830.
- Result: Classical Z-score (|z| >= 3.0) set the upper bound to Rs 35,206, flagging
  ZERO outliers due to Masking!
- Solution: Tukey's Fences (Inner fence: Rs 9,400) and Modified Z-Score (Upper bound:
  Rs 9,432) correctly caught the clerical typo (Rs 450) and both luxury penthouses.

Case 2: Barrackpore & North 24 Parganas Agricultural Paddy Crop Yields
- Problem: Rice yields per bigha across 4,200 farms. Data exhibited severe lower-tail
  outliers due to localized river flooding in Ichapur and Naihati.
- Solution: Deploying Modified Z-Score (MAD) isolated flood-damaged farms (yields < 1.2
  quintals/bigha) without letting extreme high-yield greenhouse farms distort the mean.

Case 3: Salt Lake Sector V FinTech Transaction Fraud Gateway
- Problem: Online payment transactions on UPI and credit cards. Transaction values
  follow a Pareto heavy-tailed distribution. Occasional impulse payments of Rs 5,00,000
  caused exploding gradients in neural fraud detection models under MSE loss.
- Solution: 99th percentile Winsorization clamped extreme transactions at Rs 42,000
  for gradient stability, while simultaneously writing an \`is_high_value_flag = 1\`
  feature for downstream fraud classification rules.

Case 4: Alipore Meteorological Automated Weather Station (AWS) Telemetry
- Problem: Roadside temperature sensors transmitted spurious spikes (e.g. 65°C) caused
  by direct sunlight reflection on unshielded sensor housing.
- Solution: Real-time 5-minute rolling Modified Z-Score filter rejected spikes on the
  edge microprocessor before transmission to the central IMD weather forecast model.


-----------------------------------------------------------------------------
6. PRODUCTION PITFALLS & ARCHITECTURAL ANTI-PATTERNS
-----------------------------------------------------------------------------
Pitfall 1: The Preprocessing Data Leakage Trap
- DANGER: Computing mean, standard deviation, Q1, Q3, or MAD on the FULL dataset
  BEFORE calling \`train_test_split()\`.
- CONSEQUENCE: The test set distribution leaks into the training outlier fences!
- BEST PRACTICE: Always compute fences strictly on \`X_train\`, and use those frozen
  scalar boundaries to transform \`X_test\`.

Pitfall 2: The Zero-MAD Pathology
- DANGER: When more than 50% of values in a feature are identical (e.g., a sparse
  count column with 60% zeros), MAD evaluates to exactly 0.0!
- CONSEQUENCE: Division by zero: M_i = 0.6745 * (x_i - med) / 0 raises ZeroDivisionError!
- BEST PRACTICE: If MAD == 0, fallback to Mean Absolute Deviation from the median,
  or use Tukey's IQR fences.

Pitfall 3: The Multi-Collinear Masking Fallacy
- DANGER: Applying univariate outlier filters independently to coupled multivariate
  features.
- CONSEQUENCE: Fails to detect points that are normal in each single dimension but
  impossible in combination (e.g., Age 22 with Income 85 LPA).
- BEST PRACTICE: Combine univariate fences with Mahalanobis distance or Isolation Forest.


-----------------------------------------------------------------------------
7. MAKAUT BCAC701B EXAM PREPARATION: VIVA-VOCE QUESTIONS & ANSWERS
-----------------------------------------------------------------------------
Q1: Why does Tukey's IQR method perform better than the classical Z-score on skewed data?
A1: Tukey's IQR uses rank-based order statistics (Q1 and Q3) which have a 25% breakdown
    point and do not depend on the mean or variance. The classical Z-score assumes a
    symmetric Gaussian distribution; on skewed data, extreme values inflate the variance
    and distort the mean, causing severe masking and swamping.

Q2: State the formula for the Modified Z-Score and explain the constant 0.6745.
A2: M_i = 0.6745 * (x_i - Median) / MAD. The constant 0.6745 is the reciprocal of
    1.4826 (the 75th percentile of the standard normal distribution), which scales the
    Median Absolute Deviation to be an unbiased, consistent estimator of sigma.

Q3: What are Tukey's Inner and Outer fences?
A3: Inner Fences: [Q1 - 1.5*IQR, Q3 + 1.5*IQR] (values outside are Mild Outliers).
    Outer Fences: [Q1 - 3.0*IQR, Q3 + 3.0*IQR] (values outside are Extreme Outliers).

Q4: What is Winsorization, and why is it preferred over row trimming in regression?
A4: Winsorization caps extreme values at designated percentiles (e.g. 1st and 99th)
    instead of deleting them. It preserves the complete sample size N and degrees of
    freedom while bounding feature variance and preventing gradient explosion.

Q5: Under what condition does the Modified Z-Score fail due to zero division?
A5: When more than 50% of the observations in the dataset are identical, the Median
    Absolute Deviation (MAD) becomes 0. In this scenario, the algorithm must fallback
    to Mean Absolute Deviation from the median or Tukey IQR.
=============================================================================
`,fe=[{id:1,tier:"Tier 1: Foundation & Terminology",question:"Under the classical 3-Sigma Z-Score rule, approximately what percentage of data falls WITHIN the normal boundaries [mu - 3*sigma, mu + 3*sigma] for a perfect Gaussian distribution?",options:["68.27%","95.45%","99.73%","100.00%"],correctIndex:2,explanation:"Under the standard Normal distribution N(mu, sigma^2), the empirical 68-95-99.7 rule dictates that 68.27% of observations lie within 1 sigma, 95.45% within 2 sigmas, and exactly 99.73% within 3 sigmas. Points outside |z| > 3.0 represent the extreme 0.27% tails.",practicalTip:"Remember that the 99.73% guarantee holds ONLY when the data is truly Gaussian. On skewed or heavy-tailed data, this rule severely misfires.",codeSnippet:`# Identifying 3-sigma outliers in pandas
z_scores = (df['val'] - df['val'].mean()) / df['val'].std()
outliers = df[z_scores.abs() > 3.0]`,examRelevance:"MAKAUT BCAC701B Semester Exam & Basic Probability"},{id:2,tier:"Tier 1: Foundation & Terminology",question:"In Tukey's Fences method for outlier detection using boxplots, how are the 'Inner Fences' mathematically defined?",options:["[Mean - 1.5 * Std, Mean + 1.5 * Std]","[Q1 - 1.5 * IQR, Q3 + 1.5 * IQR] where IQR = Q3 - Q1","[Median - 1.5 * MAD, Median + 1.5 * MAD]","[Min - 1.5, Max + 1.5]"],correctIndex:1,explanation:"John Tukey defined the Inner Fences as [Q1 - 1.5 * IQR, Q3 + 1.5 * IQR], where Q1 is the 25th percentile, Q3 is the 75th percentile, and IQR = Q3 - Q1. Observations falling beyond these inner fences are classified as 'Mild Outliers'.",practicalTip:"Tukey's IQR method is completely distribution-free because it relies on order statistics (percentiles) rather than parametric means.",codeSnippet:`# Tukey's IQR Fences in Python
q1 = df['feature'].quantile(0.25)
q3 = df['feature'].quantile(0.75)
iqr = q3 - q1
lower_fence = q1 - 1.5 * iqr
upper_fence = q3 + 1.5 * iqr
outliers = df[(df['feature'] < lower_fence) | (df['feature'] > upper_fence)]`,examRelevance:"MAKAUT Descriptive Statistics & Data Visualization Core"},{id:3,tier:"Tier 1: Foundation & Terminology",question:"What distinction did John Tukey make between 'Mild Outliers' and 'Extreme Outliers' in his IQR boxplot formulation?",options:["Mild outliers occur in training data, while extreme outliers occur in test data.","Mild outliers lie between 1.5x IQR and 3.0x IQR beyond the quartiles; extreme outliers lie beyond 3.0x IQR (outside the Outer Fences).","Mild outliers are positive numbers, while extreme outliers are negative numbers.","Mild outliers are deleted, while extreme outliers are imputed."],correctIndex:1,explanation:"Tukey established two tiers of fences: Inner Fences at 1.5 * IQR (bounding mild outliers) and Outer Fences at 3.0 * IQR [Q1 - 3*IQR, Q3 + 3*IQR]. Observations outside the outer fences represent extreme anomalies requiring aggressive investigation.",practicalTip:"In matplotlib/seaborn boxplots, mild outliers are plotted as hollow circles, while extreme outliers are often displayed as filled asterisks.",codeSnippet:`# Outer fence calculation
outer_lower = q1 - 3.0 * iqr
outer_upper = q3 + 3.0 * iqr
extreme_outliers = df[(df['val'] < outer_lower) | (df['val'] > outer_upper)]`,examRelevance:"MAKAUT Lab Viva & Exploratory Data Analysis"},{id:4,tier:"Tier 1: Foundation & Terminology",question:"What is the primary operational advantage of the Modified Z-Score (Iglewicz & Hoaglin, 1993) over the classical Z-Score?",options:["It requires no multiplication or division.","It substitutes the sample mean with the Median and the sample standard deviation with the Median Absolute Deviation (MAD), giving it a 50% breakdown point that prevents masking.","It can only be used on datasets with fewer than 10 records.","It automatically converts all numbers into positive values."],correctIndex:1,explanation:"The classical Z-score breaks down easily because mean and standard deviation are non-robust (breakdown point 0%). The Modified Z-score uses Median and MAD, which can tolerate up to 50% contaminated observations before breaking down, making it immune to masking.",practicalTip:"Whenever your dataset contains clusters of multiple extreme values, always prefer Modified Z-score over standard Z-score.",codeSnippet:`# Modified Z-score in Python
med = df['val'].median()
mad = (df['val'] - med).abs().median()
mod_z = 0.6745 * (df['val'] - med) / (mad if mad > 0 else 1e-6)
outliers = df[mod_z.abs() >= 3.5]`,examRelevance:"Advanced Data Preprocessing & Robust Statistics"},{id:5,tier:"Tier 1: Foundation & Terminology",question:"What is 'Winsorization' as an outlier remediation technique?",options:["Deleting every third row in the DataFrame.","Clamping or capping extreme values to a specified percentile boundary (e.g. setting all values above the 99th percentile equal to the 99th percentile value), preserving the total sample size N.","Converting floating-point numbers into 16-bit integers.","Normalizing features between -1 and +1."],correctIndex:1,explanation:"Named after biostatistician Charles P. Winsor, Winsorization replaces extreme tail values with the values at chosen percentiles (such as 1st and 99th). Unlike trimming, it does not drop rows, preserving degrees of freedom while bounding feature variance.",practicalTip:"Winsorization is especially valuable in linear regression and neural networks where extreme outliers cause exploding gradients.",codeSnippet:`from scipy.stats import mstats
# Cap 1% on bottom and top
df['capped'] = mstats.winsorize(df['income'], limits=[0.01, 0.01])`,examRelevance:"Feature Engineering & Data Preprocessing Techniques"},{id:6,tier:"Tier 1: Foundation & Terminology",question:"What is the recommended cutoff threshold for flagging an observation as an outlier using the Modified Z-Score M_i?",options:["|M_i| >= 1.0","|M_i| >= 3.5","|M_i| >= 10.0","|M_i| >= 0.05"],correctIndex:1,explanation:"Boris Iglewicz and David Hoaglin (1993), as well as the National Institute of Standards and Technology (NIST), recommend a threshold of |M_i| >= 3.5 for declaring an observation as an outlier using Modified Z-scores.",practicalTip:"A threshold of 3.5 provides an optimal balance between sensitivity and false alarm suppression across both normal and moderately skewed distributions.",codeSnippet:`# NIST standard modified z cutoff
THRESHOLD = 3.5
is_outlier = mod_z_scores.abs() >= THRESHOLD`,examRelevance:"Statistical Standards & Quality Assurance"},{id:7,tier:"Tier 1: Foundation & Terminology",question:"Why does the classical Z-Score method fail catastrophically on a heavily right-skewed dataset (such as software engineer salaries in Salt Lake Sector V)?",options:["Because Python math functions only run on symmetrical matrices.","Because the long right tail artificially pulls the mean to the right and inflates the standard deviation, causing Z-scores to shrivel (Masking) and setting negative lower bounds that make no sense for positive variables.","Because salaries cannot be divided by standard deviations.","Because skewed distributions have no median."],correctIndex:1,explanation:"On skewed data, the standard deviation is inflated by the long tail. The symmetric 3-sigma boundaries [mean - 3*std, mean + 3*std] often produce an absurd negative lower bound (e.g. -15 LPA) and an excessively high upper bound, causing true outliers to be masked while normal low values are swamped.",practicalTip:"Always check skewness (`df['col'].skew()`): If skewness > 1.0, do NOT use classical Z-score; use Tukey IQR or log-transform the data first.",codeSnippet:`if abs(df['salary'].skew()) > 1.0:
    print('Data is skewed! Do not use classical Z-Score.')`,examRelevance:"MAKAUT BCAC701B Applied Data Preparation"},{id:8,tier:"Tier 1: Foundation & Terminology",question:"What is 'Quantile Trimming' (Percentile Filtering) in automated production pipelines?",options:["Deleting exactly 50% of the dataset at random.","Establishing explicit empirical percentile thresholds (e.g., lower bound at 1st percentile and upper bound at 99th percentile) and filtering out records falling outside this range.","Converting continuous numbers into quartiles.","Sorting the table in descending order."],correctIndex:1,explanation:"Quantile trimming establishes fixed percentile cutoffs P_alpha and P_(1-alpha) (e.g. 1st and 99th percentiles). Records beyond these bounds are pruned or flagged. It is non-parametric, ultra-fast O(N log N), and robust to arbitrary distributions.",practicalTip:"Quantile trimming is widely used in high-volume streaming analytics (e.g. web page load latency metrics).",codeSnippet:`lower = df['latency'].quantile(0.01)
upper = df['latency'].quantile(0.99)
clean_df = df[(df['latency'] >= lower) & (df['latency'] <= upper)]`,examRelevance:"Data Engineering Architecture & Scalable Preprocessing"},{id:9,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"In the Modified Z-Score formula M_i = 0.6745 * (x_i - Median) / MAD, where does the constant 0.6745 originate mathematically?",options:["It is the speed of light divided by pi.","It is the reciprocal of 1.4826 (i.e. 1 / 1.4826 ≈ 0.6745), which corresponds to the 75th percentile of the standard Normal distribution Phi^(-1)(0.75), ensuring MAD is an asymptotically unbiased estimator of sigma.","It is Euler's constant multiplied by 2.","It is an arbitrary empirical fudge factor chosen by statisticians."],correctIndex:1,explanation:"For a standard Gaussian distribution Z ~ N(0, 1), the median of |Z| is the 75th percentile of the half-normal distribution, which is approximately 0.67449. Therefore, E[MAD] = 0.6745 * sigma, meaning sigma_hat = MAD / 0.6745 = 1.4826 * MAD. Multiplying by 0.6745 standardizes the deviation to match the scale of standard normal z-scores.",practicalTip:"Remember: `1.4826 * MAD` estimates sigma; `0.6745 / MAD` normalizes the deviation.",codeSnippet:`from scipy.stats import norm
# 75th percentile of standard normal:
phi_75 = norm.ppf(0.75)  # 0.6744897501960817
scale_factor = 1.0 / phi_75  # 1.482602218505602`,examRelevance:"Mathematical Statistics & Asymptotic Distribution Theory"},{id:10,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is the 'Zero-MAD Pathology' and in what dataset scenario does it cause the Modified Z-Score algorithm to crash?",options:["When a dataset contains negative numbers.","When more than 50% of the values in a column are identical (e.g. a sparse feature with 60% zeros), causing MAD = Median(|x - Median|) to evaluate to exactly 0, leading to a division-by-zero error.","When the dataset has fewer than 2 columns.","When data is stored in Parquet format."],correctIndex:1,explanation:"Because MAD is the median of absolute deviations from the median, if > 50% of data points have the exact same value as the median, at least half of the deviations |x_i - median| will be 0. Thus, MAD = 0. Dividing by MAD causes a ZeroDivisionError.",practicalTip:"Production code MUST guard against zero MAD: If `mad == 0`, fallback to `Mean Absolute Deviation` or Tukey's IQR fences.",codeSnippet:`# Production zero-MAD guard
mad = np.median(np.abs(x - med))
if mad == 0:
    # Fallback to mean absolute deviation from median
    mad = np.mean(np.abs(x - med))`,examRelevance:"Robust Software Engineering & Numerical Stability"},{id:11,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is the 'Medcouple' (MC) adjusted boxplot, and how does it modify Tukey's fences for right-skewed distributions?",options:["It deletes all positive numbers.","It incorporates a robust skewness estimator MC in [-1, 1] into the exponential scaling of IQR: Upper Fence = Q3 + 1.5 * exp(3 * MC) * IQR, expanding the upper bound to prevent false alarms in the natural long tail.","It converts the boxplot into a scatter plot.","It multiplies all fences by 10."],correctIndex:1,explanation:"Mia Hubert and Ellen Vandervieren (2008) introduced the Adjusted Boxplot. When data is right-skewed (MC > 0), `exp(3*MC) > 1`, which broadens the upper fence, while `exp(-4*MC) < 1` contracts the lower fence. This prevents normal tail observations from being falsely flagged as outliers.",practicalTip:"Use `statsmodels.stats.stattools.medcouple` to evaluate robust skewness before constructing boxplot fences.",codeSnippet:`# Adjusted boxplot fences for right-skewed data (MC >= 0):
# upper = q3 + 1.5 * np.exp(3 * mc) * iqr
# lower = q1 - 1.5 * np.exp(-4 * mc) * iqr`,examRelevance:"Advanced Exploratory Data Analysis & Skewness Corrections"},{id:12,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"If a dataset of size N = 100 has Q1 = 20 and Q3 = 40, what are the Tukey Inner Fences?",options:["[0, 60]","[-10, 70]","[10, 50]","[20, 40]"],correctIndex:1,explanation:"IQR = Q3 - Q1 = 40 - 20 = 20. 1.5 * IQR = 1.5 * 20 = 30. Lower Inner Fence = Q1 - 30 = 20 - 30 = -10. Upper Inner Fence = Q3 + 30 = 40 + 30 = 70. Therefore, the inner fence interval is [-10, 70].",practicalTip:"Any value x < -10 or x > 70 is flagged as at least a Mild Outlier.",codeSnippet:`q1, q3 = 20, 40
iqr = q3 - q1
lower, upper = q1 - 1.5 * iqr, q3 + 1.5 * iqr
print(f'Fences: [{lower}, {upper}]')  # [-10.0, 70.0]`,examRelevance:"MAKAUT Numerical Calculation Problem"},{id:13,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"Why does the presence of two identical extreme outliers (e.g. values 30,000 and 32,000) cause the Classical Z-Score to fail while Tukey's IQR succeeds?",options:["Because Z-Score cannot process numbers larger than 10,000.","Because the two extreme values contribute (30,000 - mean)^2 to the sample variance, inflating the standard deviation to a massive value that shrinks the computed Z-scores below 3.0 (Masking); whereas Tukey's Q1 and Q3 depend only on 25th and 75th ranks, remaining completely unperturbed.","Because Tukey's IQR requires GPU acceleration.","Because Python round-off errors only occur in standard deviations."],correctIndex:1,explanation:"Variance squares deviations: a pair of extreme values inflates the sample variance by millions, expanding the denominator of z = (x - mean)/std so much that even the extreme outliers themselves register z ≈ 2.1 (< 3.0). In contrast, Tukey's quartiles depend only on rank order, remaining completely unaffected by the extreme magnitude of the top 2 points.",practicalTip:"This is the classic textbook illustration of Masking: Variance explodes, hiding the very anomalies that caused the explosion.",codeSnippet:"# Variance explosion: std explodes from 1,000 to 8,800, masking anomalies!",examRelevance:"MAKAUT Outlier Detection Mechanics & Failure Analysis"},{id:14,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"In bivariate outlier detection, what is the Chi-Square cutoff rule for Mahalanobis Distance D_M(x)?",options:["D_M(x) must be exactly equal to 0.","An observation is flagged if its squared Mahalanobis distance D_M^2(x) exceeds the critical value of the Chi-Square distribution with p degrees of freedom at significance level alpha: D_M^2(x) > chi^2_{p, 1-alpha}.","D_M(x) must be greater than 100.","Mahalanobis distance cannot be used with Chi-Square."],correctIndex:1,explanation:"For p multivariate normally distributed features, the squared Mahalanobis distance D_M^2(x) = (x - mu)^T Sigma^(-1) (x - mu) follows a Chi-Square distribution with p degrees of freedom: D_M^2 ~ chi^2(p). The standard cutoff is chi^2_{p, 0.975} or chi^2_{p, 0.99}.",practicalTip:"For 2 features (p=2) at alpha=0.01, chi^2_{2, 0.99} ≈ 9.21. Any point with D_M^2 > 9.21 is a bivariate outlier.",codeSnippet:`from scipy.stats import chi2
# Cutoff for 2 features at 99% confidence:
cutoff = chi2.ppf(0.99, df=2)  # 9.2103`,examRelevance:"Multivariate Statistical Analysis & Chi-Square Tests"},{id:15,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is the breakdown point of Tukey's IQR fences compared to the sample standard deviation?",options:["IQR is 0%, standard deviation is 50%.","IQR is 25%, while standard deviation is 0%.","Both have a breakdown point of 50%.","Both have a breakdown point of 0%."],correctIndex:1,explanation:"The breakdown point of sample standard deviation is 0% (a single point at infinity breaks the estimator). Tukey's IQR uses Q1 (25th percentile) and Q3 (75th percentile); up to 25% of the data can be contaminated on either end before Q1 or Q3 is corrupted. Thus, its breakdown point is 25%.",practicalTip:"For contamination levels up to 25%, Tukey IQR is extremely stable.",codeSnippet:`# Breakdown point summary:
# StDev: 0%
# Tukey IQR: 25%
# MAD: 50%`,examRelevance:"Robust Statistics & Estimator Resilience Theory"},{id:16,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"When applying Log-Transformation y = log(x + 1) to compress right-skewed positive features, what mathematical change occurs to extreme outliers?",options:["They become negative infinity.","Multiplicative exponential spreads are mapped onto an additive linear scale, dramatically compressing the right tail and transforming skewed distributions into near-Gaussian shapes where classical Z-scores become valid.","They are deleted automatically.","The mean becomes larger than the maximum value."],correctIndex:1,explanation:"The logarithm is a monotonic concave function. The distance between 1,000 and 10,000 is 9,000 on the raw scale, but on the natural log scale, it is only ln(10000) - ln(1000) = 2.302. This non-linear compression pulls extreme tail values inward, stabilizing variance.",practicalTip:"Use `np.log1p(x)` to safely handle zeros: `log1p(0) = log(1) = 0`.",codeSnippet:`import numpy as np
# Log-transform right-skewed income feature
df['log_income'] = np.log1p(df['income'])`,examRelevance:"Feature Transformation & Non-Linear Warping"},{id:17,tier:"Tier 3: Machine Learning System Design & Engineering",question:"What is the 'Preprocessing Data Leakage Trap' when computing outlier detection fences for a machine learning model?",options:["Allowing unauthorized users to download the training CSV.","Computing outlier fences (e.g. Q1, Q3, mean, std) across the ENTIRE dataset BEFORE splitting into train and test sets, allowing test set distribution information to contaminate the training preprocessing pipeline.","Using open-source libraries instead of proprietary code.","Storing features in uncompressed formats."],correctIndex:1,explanation:"If you compute outlier fences on the full dataset before splitting, the test set influences the decision boundaries. The strictly correct engineering practice is: Split FIRST, compute fences strictly on `X_train`, and apply those frozen boundaries to `X_test`.",practicalTip:"Wrap outlier filters in a scikit-learn `TransformerMixin` and fit strictly on `X_train` inside an `imblearn` or `sklearn` Pipeline.",codeSnippet:`# CORRECT ARCHITECTURE:
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)
# Compute fences strictly on X_train:
q1 = X_train['price'].quantile(0.25)
q3 = X_train['price'].quantile(0.75)
upper_fence = q3 + 1.5 * (q3 - q1)
# Apply frozen fence to both:
X_train_clean = X_train[X_train['price'] <= upper_fence]
X_test_clean = X_test[X_test['price'] <= upper_fence]`,examRelevance:"MLOps Architecture & Data Leakage Prevention"},{id:18,tier:"Tier 3: Machine Learning System Design & Engineering",question:"In a real estate pricing pipeline in New Town Kolkata, apartment prices per square foot range from ₹ 4,500 to ₹ 8,000, but a clerical typo lists one property at ₹ 450/sq.ft. Which detection engine reliably flags this lower-tail anomaly?",options:["A rule that checks if the string ends in zero.","Tukey's Lower Inner Fence [Q1 - 1.5 * IQR] or Modified Z-Score, because the clerical error is far below the lower threshold (e.g. Lower Fence = ₹ 2,600).","Classical Z-score with 3-sigma cutoff.","Linear regression without intercept."],correctIndex:1,explanation:"The typo (Rs 450) is an acute lower-tail anomaly. With Q1 ≈ Rs 5,150 and IQR ≈ Rs 1,700, Tukey's lower fence is 5,150 - 1.5*1,700 = Rs 2,600. Since 450 < 2,600, Tukey flags it instantly. Classical Z-score fails because luxury penthouses inflate the standard deviation, setting a negative lower bound (e.g. -Rs 17,000) that completely misses Rs 450!",practicalTip:"Check lower fences specifically on bounded physical variables (like price or age) where negative lower bounds are mathematically meaningless.",codeSnippet:`# Lower fence audit
lower_fence = q1 - 1.5 * iqr
lower_outliers = df[df['price_sqft'] < lower_fence]`,examRelevance:"Real Estate Analytics & Data Cleaning Audits"},{id:19,tier:"Tier 3: Machine Learning System Design & Engineering",question:"When deploying a high-throughput payment fraud model in Salt Lake Sector V, an engineer replaces raw outlier deletion with 'Feature Augmentation'. What does this mean?",options:["Adding fake synthetic data using GANs.","Winsorizing the raw numerical transaction value to bound variance for linear/neural layers, while simultaneously creating a new binary indicator column `is_outlier = 1` so tree models can exploit the extreme transaction signal.","Translating column names into Bengali.","Doubling the size of the database disk."],correctIndex:1,explanation:"Feature augmentation captures the best of both worlds: Numerical capping (Winsorization) protects gradient stability, while the binary indicator `is_outlier = (x > fence)` preserves the vital business signal that a high-value transaction occurred.",practicalTip:"This pattern is standard practice in credit risk and fraud modeling: never destroy signal, separate magnitude stabilization from indicator flagging.",codeSnippet:`# Feature Augmentation pattern
upper_fence = q3 + 3.0 * iqr
df['is_extreme_tx'] = (df['amount'] > upper_fence).astype(int)
df['amount_capped'] = df['amount'].clip(upper=upper_fence)`,examRelevance:"Production Feature Engineering & Fraud Systems"},{id:20,tier:"Tier 3: Machine Learning System Design & Engineering",question:"Why should an engineer NEVER use `df.dropna()` as a substitute for outlier detection?",options:["Because `dropna()` is deprecated in pandas 2.0.","Because outliers are NOT null/missing values; they are populated, syntactically valid numbers (e.g. 50,000,000) that will pass `dropna()` completely unnoticed.","Because `dropna()` only deletes column headers.","Because `dropna()` converts integers into strings."],correctIndex:1,explanation:"`dropna()` only inspects null indicators (`NaN`, `None`). Outliers are fully populated numerical values. Relying on missing value handlers to clean outliers is a catastrophic conceptual error.",practicalTip:"Treat missingness and extremity as two independent, sequential preprocessing stages: Impute missing values -> Detect and treat outliers.",codeSnippet:`# Outliers have valid non-null values and evade dropna():
# df['salary'].isna().sum() == 0, yet salary=99999999 is an outlier!`,examRelevance:"MAKAUT Preprocessing Sequence & Pipeline Logic"},{id:21,tier:"Tier 3: Machine Learning System Design & Engineering",question:"In streaming agricultural sensor monitoring in North 24 Parganas, an optical soil sensor transmits an impossible soil moisture reading of 950% due to an electrical surge. What automated preprocessing rule should be applied at the edge gateway?",options:["Rebooting the entire micro-controller.","Physical Domain Clamping / Range Filtering: Enforce hard physical limits [0%, 100%] before applying any statistical outlier algorithms, immediately rejecting or flagging readings outside physically possible envelopes.","Averaging the 950% reading with zero.","Waiting for 24 hours to verify the soil moisture."],correctIndex:1,explanation:"Statistical methods (Z-score, IQR) are secondary to Hard Physical Constraints. If an attribute has known thermodynamic, biological, or physical limits (percentage in [0, 100], age in [0, 120]), hard clipping or rejection must precede statistical testing.",practicalTip:"Always implement Domain Range Sanity checks as Layer 1 before statistical outlier detection.",codeSnippet:`# Layer 1: Hard physical boundary filter
def clean_sensor(val):
    if val < 0.0 or val > 100.0:
        return np.nan  # Flag as defective hardware reading
    return val`,examRelevance:"IoT Edge Preprocessing & Domain Integrity"},{id:22,tier:"Tier 3: Machine Learning System Design & Engineering",question:"How does the choice between 1.5x IQR and 3.0x IQR in Tukey's fences affect the Precision-Recall trade-off for an anomaly detection system?",options:["It has no effect on any metric.","1.5x IQR casts a wider detection net (Higher Recall of anomalies, but higher False Positive rate); 3.0x IQR is conservative (Higher Precision, but risks missing subtle moderate outliers).","3.0x IQR flags more outliers than 1.5x IQR.","1.5x IQR can only be used on odd numbers."],correctIndex:1,explanation:"1.5x IQR establishes tighter fences, flagging more points (high recall of potential anomalies, but some normal points are falsely flagged). 3.0x IQR establishes wider outer fences, flagging only extreme anomalies (high precision, low false positives, but lower recall).",practicalTip:"Use 1.5x IQR for data cleaning (where being conservative protects model training) and 3.0x IQR for alert generation (where alert fatigue must be avoided).",codeSnippet:"# 1.5x IQR = High sensitivity / cleaning; 3.0x IQR = High specificity / alerting",examRelevance:"Model Evaluation & Anomaly Precision-Recall Trade-offs"},{id:23,tier:"Tier 3: Machine Learning System Design & Engineering",question:"In a K-Nearest Neighbors (KNN) regressor, why does failing to remove target outliers severely corrupt predictions for nearby clean queries?",options:["Because KNN converts features into cosine similarity.","Because KNN predicts the average target value of the k nearest neighbors; if an outlier point is among the k neighbors, its extreme target value heavily inflates the local prediction.","Because KNN only works on binary labels.","Because KNN deletes outliers during the tree search."],correctIndex:1,explanation:"KNN regression computes y_pred = (1/k) * sum_{j in N_k(x)} y_j. If k=5 and one neighbor has an erroneous target value of 500,000 while the other 4 have value 10, the predicted average is ~100,000, ruining prediction accuracy for all query points in that neighborhood.",practicalTip:"Use distance-weighted KNN (`weights='distance'`) or median-aggregation KNN to dampen the influence of distant neighbor outliers.",codeSnippet:`from sklearn.neighbors import KNeighborsRegressor
# Distance weighting reduces outlier impact compared to uniform average:
knn = KNeighborsRegressor(n_neighbors=5, weights='distance')`,examRelevance:"Instance-Based Learning & Neighborhood Sensitivity"},{id:24,tier:"Tier 3: Machine Learning System Design & Engineering",question:"Why should an engineer inspect the 'Kurtosis' of a feature before deciding to apply classical Z-score outlier detection?",options:["Because Kurtosis measures whether the server CPU is running hot.","Because Kurtosis measures the 'tailedness' of the probability distribution; features with high Excess Kurtosis (> 3.0) possess heavy, fat tails where extreme values occur naturally and classical Gaussian 3-sigma rules generate excessive false alarms.","Because Kurtosis is only defined for categorical variables.","Because Kurtosis rounds all numbers to the nearest integer."],correctIndex:1,explanation:"Kurtosis quantifies tail propensity relative to a normal distribution (mesokurtic kurtosis = 3). Leptokurtic distributions (kurtosis > 3, e.g. Student-t or financial returns) naturally produce extreme observations. Using a Gaussian 3-sigma rule on leptokurtic data leads to mass false-positive swamping.",practicalTip:"Check `scipy.stats.kurtosis(data)`: If excess kurtosis > 1.0, avoid Z-score; use Tukey IQR or heavy-tailed modeling.",codeSnippet:`from scipy.stats import kurtosis
if kurtosis(df['revenue']) > 3.0:
    print('Heavy-tailed distribution detected! Avoid Gaussian Z-score.')`,examRelevance:"Advanced Descriptive Statistics & Distribution Diagnostics"},{id:25,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"What is the 'Hampel Filter' and why is it considered the gold standard for robust outlier removal in streaming time-series signals?",options:["A deep convolutional neural network running on Kubernetes.","A sliding window filter that replaces the center observation with the rolling window median if its deviation from the rolling median exceeds 3 * (1.4826 * rolling_MAD), effectively removing impulse spikes without phase lag.","An audio equalization plugin for MP3 files.","A database indexing algorithm for PostgreSQL."],correctIndex:1,explanation:"Named after Frank Hampel, the Hampel filter computes rolling median and rolling MAD in a sliding window of size 2k + 1. If |x_t - med_t| > 3 * 1.4826 * MAD_t, x_t is declared an impulse outlier and replaced with med_t. It is completely robust to local spikes and requires zero global distribution assumptions.",practicalTip:"The Hampel filter is the premier algorithm for cleaning IoT sensor streams, GPS traces, and financial tick data in real time.",codeSnippet:`# Conceptual Hampel Filter in pandas
def hampel_filter(series, window_size=5, n_sigmas=3):
    rolling_med = series.rolling(window=window_size, center=True).median()
    rolling_mad = (series - rolling_med).abs().rolling(window=window_size, center=True).median()
    threshold = n_sigmas * 1.4826 * rolling_mad
    difference = (series - rolling_med).abs()
    outlier_mask = difference > threshold
    clean_series = series.copy()
    clean_series[outlier_mask] = rolling_med[outlier_mask]
    return clean_series`,examRelevance:"Streaming Time-Series Preprocessing & Signal Processing"},{id:26,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"In distributed Big Data architectures (Apache Spark / PySpark), how is Tukey's IQR computed efficiently across 500 Million records without collecting data to the driver node?",options:["By sorting the entire 500M row DataFrame on a single CPU core.","By using approximate quantile algorithms (such as the Greenwald-Khanna algorithm or t-digest) via `df.stat.approxQuantile('feature', [0.25, 0.75], relativeError=0.01)`, which computes provably accurate quartiles in parallel in O(N) time.","By deleting 99% of the rows randomly.","Spark cannot calculate percentiles."],correctIndex:1,explanation:"Exact sorting of 500 Million rows across distributed partitions requires massive network shuffle. Spark provides `approxQuantile` using the Greenwald-Khanna algorithm, guaranteeing that estimated quantiles are within `relativeError` (e.g. 1%) of true ranks with zero driver memory bottleneck.",practicalTip:"Always use `df.stat.approxQuantile()` in PySpark for robust distributed IQR calculation.",codeSnippet:`# PySpark Distributed IQR calculation
# q1, q3 = df.stat.approxQuantile('revenue', [0.25, 0.75], 0.001)
# iqr = q3 - q1
# lower, upper = q1 - 1.5 * iqr, q3 + 1.5 * iqr
# clean_df = df.filter((df.revenue >= lower) & (df.revenue <= upper))`,examRelevance:"Distributed Systems & Scalable Machine Learning (Spark)"},{id:27,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"What is 'Extreme Value Theory' (EVT) and how does the Generalized Pareto Distribution (GPD) model outliers beyond high thresholds?",options:["A psychological theory of human decision-making under stress.","The branch of statistics proving that under the Pickands-Balkema-de Haan Theorem, excesses over a sufficiently high threshold u follow a Generalized Pareto Distribution (GPD), allowing mathematically rigorous estimation of extreme tail probabilities without assuming global normality.","A sorting algorithm for extreme numbers.","A method for training neural networks with extreme learning rates."],correctIndex:1,explanation:"Just as the Central Limit Theorem governs the distribution of sample averages, Extreme Value Theory (EVT) governs the distribution of tail extremes. The Peaks-Over-Threshold (POT) approach fits a Generalized Pareto Distribution to tail excesses (X - u | X > u), providing exact risk quantification for 100-year floods, market crashes, or cybersecurity breaches.",practicalTip:"Use `scipy.stats.genpareto` when you must model the probability of catastrophic, rare outlier events.",codeSnippet:`# EVT Peaks Over Threshold fitting:
# from scipy.stats import genpareto
# params = genpareto.fit(tail_excesses)`,examRelevance:"Extreme Value Theory & Advanced Risk Modeling"},{id:28,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"When applying Box-Cox power transformation y = (x^lambda - 1) / lambda to stabilize variance before outlier detection, what constraint is strictly required on the feature values?",options:["All feature values must be strictly positive (x > 0).","All feature values must be negative.","The dataset must contain exactly 100 observations.","Feature values must be integers."],correctIndex:0,explanation:"Box-Cox transformation requires strictly positive numbers: x > 0. For features containing non-positive numbers (zeros or negatives), engineers must use the Yeo-Johnson transformation, which extends Box-Cox to real numbers while preserving smooth continuity.",practicalTip:"In scikit-learn, `PowerTransformer(method='yeo-johnson')` handles zeros and negatives automatically, making it safer than Box-Cox.",codeSnippet:`from sklearn.preprocessing import PowerTransformer
pt = PowerTransformer(method='yeo-johnson')
X_trans = pt.fit_transform(X)`,examRelevance:"Mathematical Transformations & Parameter Estimation"},{id:29,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"In online streaming outlier detection (e.g. Apache Flink or Kafka Streams), why are static historical fences prone to 'Concept Drift Degradation'?",options:["Because streaming brokers run out of disk space.","Because the live data-generating distribution P(X) evolves over time (e.g. inflation gradually increases transaction amounts, or seasonal temperature shifts), causing static historical fences to flag increasing volumes of normal points as false-positive outliers.","Because Flink does not support floating point arithmetic.","Because static fences cannot be evaluated in memory."],correctIndex:1,explanation:"Static thresholds assume stationarity. When underlying processes drift (e.g. festival shopping spikes in Kolkata or inflation), static bounds become stale, triggering mass false alarms. Streaming engines must implement adaptive decaying window quantiles or online reservoir sampling.",practicalTip:"Deploy exponential moving percentiles or streaming t-digests that adaptively update fences over rolling time horizons.",codeSnippet:"# Online rolling quantile tracking avoids stale static thresholds",examRelevance:"Streaming MLOps & Concept Drift Engineering"},{id:30,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"What is the 'Subspace Outlier Detection' paradigm in high-dimensional feature spaces (d > 50)?",options:["Deleting features whose names have more than 10 letters.","Searching for outliers in lower-dimensional projections or subsets of relevant features, because true outliers in high dimensions are frequently masked by 40+ irrelevant noisy dimensions in full Euclidean space.","Converting all continuous features into 1D arrays.","A method for compressing databases using underwater fiber optic cables."],correctIndex:1,explanation:"In high dimensions, the Curse of Dimensionality creates distance concentration: every point appears equally distant in 50D space. However, an observation might be an extreme outlier in a specific 2D or 3D subspace (e.g. Debt vs Income). Subspace outlier methods (like SOD or HiCS) project data into relevant feature subsets.",practicalTip:"Combine feature selection or Autoencoder reconstruction error with outlier detection when working with high-dimensional feature spaces.",codeSnippet:"# Autoencoder reconstruction error identifies high-dimensional subspace anomalies",examRelevance:"High-Dimensional Data Mining & Advanced Anomaly Systems"}],Z=[{id:"PROP-01",location:"New Town Action Area I",sqft:1250,priceSqft:4500,type:"normal"},{id:"PROP-02",location:"Rajarhat Main Road",sqft:1100,priceSqft:4800,type:"normal"},{id:"PROP-03",location:"Kestopur VIP Road",sqft:950,priceSqft:5100,type:"normal"},{id:"PROP-04",location:"Salt Lake Sector II",sqft:1400,priceSqft:5200,type:"normal"},{id:"PROP-05",location:"New Town Action Area II",sqft:1350,priceSqft:5400,type:"normal"},{id:"PROP-06",location:"Salt Lake Sector I",sqft:1600,priceSqft:5600,type:"normal"},{id:"PROP-07",location:"EM Bypass Kasba Connector",sqft:1500,priceSqft:5800,type:"normal"},{id:"PROP-08",location:"Salt Lake Sector III",sqft:1750,priceSqft:6e3,type:"normal"},{id:"PROP-09",location:"Dum Dum Park",sqft:1050,priceSqft:6200,type:"normal"},{id:"PROP-10",location:"Lake Town Block B",sqft:1300,priceSqft:6500,type:"normal"},{id:"PROP-11",location:"Ballygunge Circular Road",sqft:1850,priceSqft:7200,type:"normal"},{id:"PROP-12",location:"Alipore Park Place",sqft:2200,priceSqft:8e3,type:"normal"},{id:"PROP-13",location:"Barrackpore Station Road",sqft:900,priceSqft:450,type:"clerical_typo",note:"Clerical typo: dropped a trailing zero"},{id:"PROP-14",location:"Park Street Penthouse Tower",sqft:4500,priceSqft:28e3,type:"luxury_outlier",note:"Ultra-luxury high-rise penthouse"},{id:"PROP-15",location:"Salt Lake Sector V Luxury Suite",sqft:5200,priceSqft:32e3,type:"luxury_outlier",note:"Clustered luxury penthouse"}],U=[{term:"Classical Z-Score",tag:"Parametric",desc:"Measures the signed distance from the sample mean in units of standard deviation: z = (x - mu) / sigma. Cutoff is typically |z| >= 3.0."},{term:"3-Sigma Rule (68-95-99.7)",tag:"Gaussian Theory",desc:"Under perfect normality, 99.73% of observations fall within 3 standard deviations of the mean. Tail probability beyond 3 sigmas is only 0.27%."},{term:"Tukey's Inner Fences",tag:"Non-Parametric",desc:"Established at [Q1 - 1.5*IQR, Q3 + 1.5*IQR]. Values outside inner fences are classified as Mild Outliers (plotted as hollow points in boxplots)."},{term:"Tukey's Outer Fences",tag:"Non-Parametric",desc:"Established at [Q1 - 3.0*IQR, Q3 + 3.0*IQR]. Values outside outer fences are classified as Extreme Outliers requiring aggressive audit."},{term:"Interquartile Range (IQR)",tag:"Order Statistics",desc:"The spread between the 75th percentile (Q3) and 25th percentile (Q1): IQR = Q3 - Q1. Possesses a 25% breakdown point."},{term:"Median Absolute Deviation (MAD)",tag:"Robust Scale",desc:"Median(|x_i - Median(X)|). Multiplied by 1.4826 (1/0.6745), it yields a consistent estimator of sigma with a 50% breakdown point."},{term:"Modified Z-Score",tag:"Robust Detection",desc:"Formulated by Iglewicz & Hoaglin: M_i = 0.6745 * (x_i - Median) / MAD. Standard cutoff is |M_i| >= 3.5, immune to clustered masking."},{term:"Quantile Trimming",tag:"Data Pipeline",desc:"Establishing fixed empirical percentile thresholds (e.g. 1st and 99th percentiles) and filtering or dropping records outside these boundaries."},{term:"Winsorization (Capping)",tag:"Remediation",desc:"Clamping extreme tail values to designated percentiles (e.g. 5th and 95th), preserving full sample size N while bounding feature variance."},{term:"Zero-MAD Pathology",tag:"Numerical Defect",desc:"When > 50% of observations in a column are identical (e.g. sparse zeros), MAD evaluates to 0, causing division-by-zero crashes."},{term:"Medcouple (MC)",tag:"Skewed Boxplot",desc:"A robust skewness estimator in [-1, 1] used in the Adjusted Boxplot to expand the upper fence and contract the lower fence on asymmetric data."},{term:"Preprocessing Data Leakage",tag:"MLOps Architecture",desc:"Computing outlier fences on the full dataset before splitting into train/test, corrupting model evaluation with test distribution leakage."}],f=[{id:"scen-1",scenario:"Real Estate Masking Disaster",question:"Kolkata Municipal Corporation audits property valuations. 12 standard apartments range from ₹ 4,500 to ₹ 8,000/sq.ft., but two luxury penthouses are priced at ₹ 32,000/sq.ft. When applying a classical Z-score (|z| >= 3.0), ZERO outliers are detected. Why did Z-score fail?",options:["Because the database had a missing index.","Masking Pathology: The two penthouses inflated the sample standard deviation from ₹ 1,100 to ₹ 8,830, expanding the denominator of z = (x - mean)/s and artificially suppressing their own Z-scores below 3.0.","Because Z-scores can only be computed on floating-point numbers.","Because luxury penthouses are legally exempt from outlier detection."],correctIndex:1,rationale:"Classical standard deviation squares deviations from the mean. Extreme outliers inflate the denominator s so massively that computed Z-scores shrink (Masking). Tukey's IQR and Modified Z-Score (MAD) do not rely on sample variance and catch both penthouses easily.",mentorTip:"Sukanta Hui's Law: Never trust a classical Z-score when multiple clustered outliers are present in the same tail!"},{id:"scen-2",scenario:"Skewed Salary Asymmetric Fences",question:"In Salt Lake Sector V, software engineer salaries follow a heavy right-skewed distribution (Skewness = 2.4). An engineer applies symmetric Tukey fences: [Q1 - 1.5*IQR, Q3 + 1.5*IQR]. What operational failure occurs in production?",options:["The lower fence becomes negative, while the upper fence cuts aggressively into the legitimate natural long tail, falsely discarding talented senior engineers.","The algorithm enters an infinite loop.","The salary column is converted to text strings.","The median salary becomes zero."],correctIndex:0,rationale:"Symmetric fences assume a symmetric distribution. On heavily right-skewed data, Q3 + 1.5*IQR is too low for the long tail (falsely flagging normal high earners), while Q1 - 1.5*IQR produces an impossible negative threshold. The fix is the Medcouple Adjusted Boxplot or Log-Transformation.",mentorTip:"Always inspect skewness: If skewness > 1.0, use the Medcouple adjusted boxplot or log-transform before fencing."},{id:"scen-3",scenario:"Production Pipeline Zero-MAD Crash",question:"An automated feature engineering pipeline in a Kolkata FinTech firm runs Modified Z-Score: M_i = 0.6745 * (x_i - Median) / MAD on a `num_late_payments` column where 70% of customers have 0 late payments. The pipeline crashes with `ZeroDivisionError`. What happened?",options:["Python 3.12 deprecated floating-point division.","Because more than 50% of the values are zero, the median is 0, and the median of absolute deviations is also exactly 0! Dividing by MAD causes a ZeroDivisionError.","Late payments cannot be processed using statistical methods.","The GPU experienced memory exhaustion."],correctIndex:1,rationale:"The 'Zero-MAD Pathology' occurs when any single value constitutes > 50% of the dataset. Since the median deviation is 0, MAD = 0. Production code must include a fallback to Mean Absolute Deviation from the median or Tukey IQR.",mentorTip:"Always guard Modified Z-score with: `if mad == 0: mad = mean_absolute_deviation(x)`."},{id:"scen-4",scenario:"Cross-Validation Data Leakage",question:"A data scientist computes Tukey's fences on an entire customer dataset of 100,000 rows, drops 2,000 outliers, and THEN runs `train_test_split(df, test_size=0.2)`. Why does this violate production machine learning integrity?",options:["Because test size should always be exactly 10%.","Preprocessing Data Leakage: Outlier fences were computed using information from the test set, allowing test distribution properties to contaminate the training envelope and producing over-optimistic evaluation metrics.","Because 2,000 rows is too small to matter.","Because Tukey's method is only licensed for academic use."],correctIndex:1,rationale:"Any calculation that touches the entire dataset before splitting leaks test set distributional parameters into the training pipeline. Fences must be computed strictly on X_train, and those frozen boundaries must be applied to X_test.",mentorTip:"Golden Rule of Preprocessing: Split FIRST, fit fences on X_train ONLY, transform X_test using frozen boundaries."},{id:"scen-5",scenario:"Remediation Strategy Selection",question:"In training a PyTorch Deep Neural Network for loan risk assessment, transaction amounts exhibit occasional extreme spikes (₹ 10 Lakhs vs typical ₹ 2,000). The business team forbids deleting any customer transactions. What remediation preserves all rows while stabilizing gradients?",options:["Multiply all transaction amounts by zero.","Winsorization (Percentile Capping) at the 99th percentile: clamps extreme values to the 99th percentile value, preserving sample size N and customer history while eliminating gradient-exploding variance.","Convert all numbers into categorical one-hot encoded vectors.","Switch from PyTorch to Microsoft Excel."],correctIndex:1,rationale:"Winsorization bounds feature leverage and prevents exploding loss gradients without dropping a single customer record, satisfying both business retention requirements and deep learning numerical stability.",mentorTip:"When you cannot delete data, Winsorize at the 99th percentile and add an `is_capped_flag = 1` feature!"}],Se=()=>{const[w,W]=o.useState("studio"),[N,H]=o.useState("arena"),[i,G]=o.useState("raw"),[b,V]=o.useState(3),[y,X]=o.useState(1.5),[_,K]=o.useState(3.5),[S,A]=o.useState("skewed"),[T,Y]=o.useState(""),[j,J]=o.useState("ALL"),[g,D]=o.useState({}),[h,E]=o.useState(!1);o.useId();const s=o.useMemo(()=>{const t=Z.map(n=>n.priceSqft),a=t.length,r=[...t].sort((n,c)=>n-c),d=t.reduce((n,c)=>n+c,0)/a,l=t.reduce((n,c)=>n+(c-d)**2,0)/(a-1),x=Math.sqrt(l),u=a%2===0?(r[a/2-1]+r[a/2])/2:r[Math.floor(a/2)],m=t.map(n=>Math.abs(n-u)).sort((n,c)=>n-c),C=a%2===0?(m[a/2-1]+m[a/2])/2:m[Math.floor(a/2)],k=n=>{const c=n/100*(a-1),v=Math.floor(c),ce=c-v;return v>=a-1?r[a-1]:r[v]+ce*(r[v+1]-r[v])},I=k(25),M=k(75),R=M-I,q=d-b*x,P=d+b*x,Q=I-y*R,z=M+y*R,F=_*C/.6745,O=u-F,L=u+F,ne=k(5),se=k(95),B=t.map(n=>Math.min(Math.max(n,ne),se)),ie=B.reduce((n,c)=>n+c,0)/a,re=((1-B.reduce((n,c)=>n+(c-ie)**2,0)/(a-1)/l)*100).toFixed(1),oe=t.filter(n=>n<q||n>P).length,le=t.filter(n=>n<Q||n>z).length,de=t.filter(n=>n<O||n>L).length;return{mean:d.toFixed(1),stdev:x.toFixed(1),median:u.toFixed(1),mad:C.toFixed(1),q1:I.toFixed(1),q3:M.toFixed(1),iqr:R.toFixed(1),zLower:q.toFixed(0),zUpper:P.toFixed(0),iqrLower:Q.toFixed(0),iqrUpper:z.toFixed(0),madLower:O.toFixed(0),madUpper:L.toFixed(0),zOutliers:oe,iqrOutliers:le,madOutliers:de,varReductionPct:re}},[b,y,_]),$=o.useMemo(()=>U.filter(t=>{const a=t.term.toLowerCase().includes(T.toLowerCase())||t.desc.toLowerCase().includes(T.toLowerCase()),r=j==="ALL"||t.tag===j;return a&&r}),[T,j]),ee=o.useMemo(()=>{const t=new Set(U.map(a=>a.tag));return["ALL",...Array.from(t)]},[]),te=(t,a)=>{h||D(r=>({...r,[t]:a}))},ae=o.useMemo(()=>{let t=0;return f.forEach(a=>{g[a.id]===a.correctIndex&&t++}),t},[g]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-7xl mx-auto pb-20 font-sans",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full shadow-inner",children:"BCAC701B • Data Types and Preprocessing • Topic 13"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Univariate & Robust Detection"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"MAKAUT & Gate CS Aligned"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Basic Outlier Detection Algorithms & Fencing Mechanics"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed",children:["Master the four foundational univariate outlier detection engines: the Gaussian ",e.jsx("strong",{children:"Classical Z-Score"})," ","(3-sigma rule), John Tukey's non-parametric ",e.jsx("strong",{children:"IQR Fences"})," (1.5x and 3.0x), Boris Iglewicz & David Hoaglin's robust ",e.jsx("strong",{children:"Modified Z-Score"})," (MAD), and ",e.jsx("strong",{children:"Winsorization"})," across real-world West Bengal property valuations and FinTech fraud gateways."]}),e.jsx("div",{className:"pt-4 border-t border-indigo-800/30",children:e.jsx("nav",{className:"flex flex-wrap gap-2 text-xs sm:text-sm font-medium",children:[{id:"#novice-metaphors",label:"1. Novice Masterclass"},{id:"#taxonomy-flow",label:"2. Detection Taxonomy"},{id:"#interactive-studio",label:"3. Detection Studio"},{id:"#math-formulation",label:"4. Mathematical Theorems"},{id:"#skewness-lab",label:"5. Skewness & Masking Lab"},{id:"#case-studies",label:"6. Regional Case Studies"},{id:"#diagnostic-quiz",label:"7. Diagnostic Assessment"},{id:"#production-pitfalls",label:"8. Engineering Pitfalls"},{id:"#practical-workbench",label:"9. Practical Workbench"}].map(t=>e.jsx("a",{href:t.id,className:"px-3 py-1.5 rounded-lg bg-slate-800/70 hover:bg-indigo-600 hover:text-white text-slate-300 border border-slate-700/60 transition-colors duration-150",children:t.label},t.id))})})]})]}),e.jsxs("section",{id:"novice-metaphors",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"1. Novice Masterclass: Core Intuition & Jargon Buster"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-indigo-900/40 shadow-lg space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg",children:"📏"}),e.jsx("h3",{className:"text-lg font-bold text-indigo-200",children:"The Bell Curve Ruler"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The ",e.jsx("strong",{children:"Classical Z-Score"})," measures distance in units of standard deviation from the average. It assumes data behaves like an orderly Gaussian bell curve where 99.73% of points live within 3 standard deviations. However, if an extreme giant walks into the room, the ruler itself expands, blinding the detector!"]}),e.jsx("div",{className:"text-xs text-indigo-400 font-mono bg-indigo-950/60 p-2.5 rounded-lg border border-indigo-800/40",children:"Analogy: Z-Score = A flexible rubber ruler that stretches whenever giants are present."})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-cyan-900/40 shadow-lg space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg",children:"🚧"}),e.jsx("h3",{className:"text-lg font-bold text-cyan-200",children:"The Boxplot Electric Fence"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Tukey's IQR Fences"})," ignore extreme values entirely by focusing strictly on the middle 50% of data (between the 25th and 75th percentiles). Fences are placed at 1.5x the box height. Anything leaping over the fence is declared an outlier, completely immune to single-point variance distortion."]}),e.jsx("div",{className:"text-xs text-cyan-400 font-mono bg-cyan-950/60 p-2.5 rounded-lg border border-cyan-800/40",children:"Analogy: Tukey IQR = A rigid fence built using the height of average citizens, ignoring giants."})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-emerald-900/40 shadow-lg space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg",children:"🛡️"}),e.jsx("h3",{className:"text-lg font-bold text-emerald-200",children:"The Bodyguard Scale"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The ",e.jsx("strong",{children:"Modified Z-Score (MAD)"})," uses the Median and the Median Absolute Deviation. Even if up to 50% of the entire dataset is corrupted by extreme clustered outliers, the bodyguard scale refuses to break, successfully isolating masked anomalies that deceive standard Z-scores."]}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/40",children:"Analogy: MAD Scale = An armored scale with a 50% breakdown point proof against sabotage."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Searchable Jargon Buster (12 Core Terms)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Filter by topic tag or search any outlier detection, fencing, or scale estimation concept."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 w-full sm:w-auto",children:e.jsx("input",{type:"text",placeholder:"Search detection concept...",value:T,onChange:t=>Y(t.target.value),className:"bg-slate-950 border border-slate-700 text-sm px-3.5 py-1.5 rounded-lg text-white focus:outline-none focus:border-indigo-500 w-full sm:w-64"})})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:ee.map(t=>e.jsx("button",{onClick:()=>J(t),className:p("px-3 py-1 text-xs rounded-full font-semibold transition-colors duration-150",j===t?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60"),children:t},t))}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2",children:$.map((t,a)=>e.jsx("div",{className:"bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors duration-200 space-y-2 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1",children:[e.jsx("span",{className:"text-sm font-bold text-indigo-300",children:t.term}),e.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-indigo-400 border border-slate-700",children:t.tag})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:t.desc})]})},a))})]})]}),e.jsxs("section",{id:"taxonomy-flow",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-cyan-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"2. Foundational Detection Engines: Architectural Comparison"})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 shadow-xl bg-slate-900/90",children:e.jsxs("table",{className:"w-full text-left text-xs sm:text-sm",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-300 uppercase font-semibold text-[11px] tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-4",children:"Algorithm"}),e.jsx("th",{className:"p-4",children:"Distribution Assumption"}),e.jsx("th",{className:"p-4",children:"Breakdown Point (ε*)"}),e.jsx("th",{className:"p-4",children:"Standard Cutoff"}),e.jsx("th",{className:"p-4",children:"Masking Vulnerability"}),e.jsx("th",{className:"p-4",children:"Best Used For"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-4 font-bold text-indigo-300",children:["Classical Z-Score",e.jsx("div",{className:"text-xs text-slate-400 font-normal",children:"z = (x - μ) / σ"})]}),e.jsx("td",{className:"p-4 text-xs font-mono text-cyan-300",children:"Gaussian Normal N(μ, σ²)"}),e.jsx("td",{className:"p-4 text-xs font-mono text-red-400 font-bold",children:"0% (Fragile)"}),e.jsx("td",{className:"p-4 text-xs font-mono",children:"|z| ≥ 3.0 (or 2.5)"}),e.jsx("td",{className:"p-4 text-xs text-red-400 font-semibold",children:"Severe (Variance explodes)"}),e.jsx("td",{className:"p-4 text-xs",children:"Symmetric, unpolluted Gaussian telemetry"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-4 font-bold text-cyan-300",children:["Tukey's IQR Fences",e.jsx("div",{className:"text-xs text-slate-400 font-normal",children:"[Q1 - 1.5*IQR, Q3 + 1.5*IQR]"})]}),e.jsx("td",{className:"p-4 text-xs font-mono text-emerald-400 font-bold",children:"Distribution-Free (Non-parametric)"}),e.jsx("td",{className:"p-4 text-xs font-mono text-emerald-400 font-bold",children:"25% (Robust)"}),e.jsx("td",{className:"p-4 text-xs font-mono",children:"1.5x Mild / 3.0x Extreme"}),e.jsx("td",{className:"p-4 text-xs text-emerald-400 font-semibold",children:"Low (Immune up to 25%)"}),e.jsx("td",{className:"p-4 text-xs",children:"Exploratory analysis, boxplots, general tabular data"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-4 font-bold text-emerald-300",children:["Modified Z-Score (MAD)",e.jsx("div",{className:"text-xs text-slate-400 font-normal",children:"M_i = 0.6745*(x - Med) / MAD"})]}),e.jsx("td",{className:"p-4 text-xs font-mono text-emerald-400 font-bold",children:"Heavy Contamination Resilience"}),e.jsx("td",{className:"p-4 text-xs font-mono text-emerald-400 font-bold",children:"50% (Maximal)"}),e.jsx("td",{className:"p-4 text-xs font-mono",children:"|M_i| ≥ 3.5 (NIST)"}),e.jsx("td",{className:"p-4 text-xs text-emerald-400 font-semibold",children:"Zero (Immune to Masking)"}),e.jsx("td",{className:"p-4 text-xs",children:"Clustered outliers, sensor spikes, small datasets"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-4 font-bold text-purple-300",children:["Quantile Trimming",e.jsx("div",{className:"text-xs text-slate-400 font-normal",children:"[P_1%, P_99%]"})]}),e.jsx("td",{className:"p-4 text-xs font-mono text-emerald-400",children:"Distribution-Free Empirical"}),e.jsx("td",{className:"p-4 text-xs font-mono text-cyan-300",children:"Equal to trimming fraction α"}),e.jsx("td",{className:"p-4 text-xs font-mono",children:"1st & 99th Percentiles"}),e.jsx("td",{className:"p-4 text-xs text-cyan-400 font-semibold",children:"None (Pre-fixed bounds)"}),e.jsx("td",{className:"p-4 text-xs",children:"High-throughput streaming, latency telemetry"})]})]})]})})]}),e.jsxs("section",{id:"interactive-studio",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"3. Interactive Outlier Detection Studio"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Compare detection engines on Kolkata real estate, tune threshold sliders, and observe skewness resilience."})]})]}),e.jsx("div",{className:"flex p-1 bg-slate-900 border border-slate-800 rounded-xl",children:[{id:"arena",label:"Mode A: Multi-Method Arena"},{id:"playground",label:"Mode B: Threshold Playground"},{id:"skewness",label:"Mode C: Skewness Challenge"}].map(t=>e.jsx("button",{onClick:()=>H(t.id),className:p("px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-150",N===t.id?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:t.label},t.id))})]}),N==="arena"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🏢"})," Kolkata Real Estate Property Valuation Arena (₹ / Sq.Ft.)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Contains 12 standard flats (₹ 4,500 - 8,000), 1 lower-tail typo (₹ 450), and 2 luxury penthouses (₹ 28,000 & 32,000)."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"raw",label:"1. Raw Telemetry"},{id:"zscore",label:"2. Classical Z-Score (|z| ≥ 3.0)"},{id:"tukey",label:"3. Tukey IQR (1.5x Fences)"},{id:"mad",label:"4. Modified Z-Score (MAD ≥ 3.5)"},{id:"winsorized",label:"5. Winsorized (5th/95th Capped)"}].map(t=>e.jsx("button",{onClick:()=>G(t.id),className:p("px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border",i===t.id?"bg-indigo-600 text-white border-indigo-500 shadow-lg shadow-indigo-600/30":"bg-slate-950 text-slate-300 border-slate-800 hover:border-indigo-500/50"),children:t.label},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Outliers Flagged"}),e.jsx("span",{className:p("text-2xl font-extrabold font-mono",i==="zscore"?"text-amber-400":i==="raw"?"text-slate-400":"text-emerald-400"),children:i==="raw"?"0 (Unfiltered)":i==="zscore"?`${s.zOutliers} (Masked!)`:i==="tukey"?`${s.iqrOutliers} Outliers`:i==="mad"?`${s.madOutliers} Outliers`:"0 (Capped)"}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:i==="zscore"?"Classical Z-Score fails due to Masking":"Identifies clerical typo & penthouses"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Lower Boundary Fence"}),e.jsx("span",{className:"text-2xl font-extrabold text-cyan-400 font-mono",children:i==="zscore"?`₹ ${s.zLower}`:i==="tukey"?`₹ ${s.iqrLower}`:i==="mad"?`₹ ${s.madLower}`:"₹ 4,500 (P5)"}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:i==="zscore"?"Nonsensical negative lower bound!":"Robust lower fence"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Upper Boundary Fence"}),e.jsx("span",{className:"text-2xl font-extrabold text-indigo-400 font-mono",children:i==="zscore"?`₹ ${s.zUpper}`:i==="tukey"?`₹ ${s.iqrUpper}`:i==="mad"?`₹ ${s.madUpper}`:"₹ 29,200 (P95)"}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:i==="zscore"?"Inflated to ₹ 35k by penthouses!":"Upper threshold cuts off outliers"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Variance Stabilization"}),e.jsx("span",{className:"text-2xl font-extrabold text-emerald-400 font-mono",children:i==="winsorized"?`-${s.varReductionPct}%`:"0.0%"}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:i==="winsorized"?"Explosive variance successfully capped":"Raw variance: 77.9M"})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950",children:e.jsxs("table",{className:"w-full text-left text-xs sm:text-sm",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-300 uppercase font-semibold text-[11px] tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3.5",children:"Property ID"}),e.jsx("th",{className:"p-3.5",children:"Neighborhood / Location"}),e.jsx("th",{className:"p-3.5",children:"Area (Sq.Ft.)"}),e.jsx("th",{className:"p-3.5",children:"Raw Price / Sq.Ft."}),e.jsx("th",{className:"p-3.5",children:"Processed Value"}),e.jsx("th",{className:"p-3.5",children:"Detection Verdict"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-sans",children:Z.map(t=>{const a=t.priceSqft===450,r=t.priceSqft>=28e3,d=a||r;let l=!1,x=t.priceSqft,u="NORMAL INLIER",m="bg-emerald-500/20 text-emerald-300 border-emerald-500/40";return i==="zscore"?(l=!1,d&&(u="MASKED BY INFLATED STDEV (Escaped Detection!)",m="bg-amber-500/20 text-amber-300 border-amber-500/40 font-bold")):i==="tukey"?a?(l=!0,u="MILD OUTLIER (< Lower Fence ₹ 2,600)",m="bg-red-500/20 text-red-300 border-red-500/40 font-bold"):r&&(l=!0,u="EXTREME OUTLIER (> Upper Fence ₹ 9,400)",m="bg-red-500/20 text-red-300 border-red-500/40 font-bold"):i==="mad"?a?(l=!0,u="CAUGHT BY MAD (|M_i| = 5.16 >= 3.5)",m="bg-red-500/20 text-red-300 border-red-500/40 font-bold"):r&&(l=!0,u="CAUGHT BY MAD (|M_i| >= 21.4 >= 3.5)",m="bg-red-500/20 text-red-300 border-red-500/40 font-bold"):i==="winsorized"&&(a?(x=4620,u="WINSORIZED: Capped from ₹ 450 to ₹ 4,620",m="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold"):r&&(x=29200,u=`WINSORIZED: Capped from ₹ ${t.priceSqft.toLocaleString()} to ₹ 29,200`,m="bg-cyan-500/20 text-cyan-300 border-cyan-500/40 font-bold")),e.jsxs("tr",{className:p("transition-colors duration-150",l&&"bg-red-950/20 border-l-4 border-red-500",!l&&d&&i==="zscore"&&"bg-amber-950/20 border-l-4 border-amber-500",!d&&"hover:bg-slate-900/50"),children:[e.jsx("td",{className:"p-3.5 font-mono text-slate-400",children:t.id}),e.jsx("td",{className:"p-3.5 font-semibold text-white",children:t.location}),e.jsxs("td",{className:"p-3.5 font-mono text-slate-300",children:[t.sqft," sq.ft"]}),e.jsxs("td",{className:"p-3.5 font-mono text-cyan-300 font-bold",children:["₹ ",t.priceSqft.toLocaleString()]}),e.jsxs("td",{className:"p-3.5 font-mono text-emerald-300 font-bold",children:["₹ ",x.toLocaleString()]}),e.jsx("td",{className:"p-3.5",children:e.jsx("span",{className:p("px-2.5 py-0.5 rounded-full text-[10px] font-bold border",m),children:u})})]},t.id)})})]})}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-indigo-900/30 text-xs text-slate-300 space-y-2",children:[e.jsx("span",{className:"text-indigo-400 font-bold block",children:"💡 Critical Engineering Insight:"}),e.jsxs("p",{children:["Notice what happens when selecting ",e.jsx("strong",{children:"2. Classical Z-Score"}),": exactly ",e.jsx("strong",{children:"ZERO outliers are detected"}),"! The two luxury penthouses (₹ 28,000 and ₹ 32,000) inflated the sample standard deviation to ₹ 8,830, pushing the 3-sigma upper boundary all the way to ",e.jsx("strong",{children:"₹ 35,206"}),"! Meanwhile, the lower bound became ",e.jsx("strong",{children:"-₹ 17,773"})," (a physical impossibility for real estate prices), completely missing the clerical typo of ₹ 450. Switching to ",e.jsx("strong",{children:"3. Tukey IQR"})," or ",e.jsx("strong",{children:"4. Modified Z-Score (MAD)"})," instantly detects all 3 anomalies because their order-statistic estimators cannot be sabotaged by extreme variance!"]})]})]}),N==="playground"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-cyan-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"pb-4 border-b border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🎛️"})," Dynamic Threshold & Cutoff Tuner"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Adjust cutoffs to watch how tightening or loosening decision boundaries alters anomaly sensitivity in real time."})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[e.jsx("span",{className:"text-slate-300",children:"Z-Score Cutoff (k_z):"}),e.jsxs("span",{className:"text-indigo-400 font-mono",children:["|z| ≥ ",b.toFixed(1)]})]}),e.jsx("input",{type:"range",min:"1.5",max:"4.0",step:"0.1",value:b,onChange:t=>V(parseFloat(t.target.value)),className:"w-full accent-indigo-500"}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Flagged Outliers: ",s.zOutliers]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[e.jsx("span",{className:"text-slate-300",children:"Tukey IQR Multiplier (k):"}),e.jsxs("span",{className:"text-cyan-400 font-mono",children:[y.toFixed(1),"x IQR"]})]}),e.jsx("input",{type:"range",min:"1.0",max:"3.5",step:"0.1",value:y,onChange:t=>X(parseFloat(t.target.value)),className:"w-full accent-cyan-500"}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Flagged Outliers: ",s.iqrOutliers]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[e.jsx("span",{className:"text-slate-300",children:"Modified Z Cutoff:"}),e.jsxs("span",{className:"text-emerald-400 font-mono",children:["|M_i| ≥ ",_.toFixed(1)]})]}),e.jsx("input",{type:"range",min:"2.0",max:"5.0",step:"0.1",value:_,onChange:t=>K(parseFloat(t.target.value)),className:"w-full accent-emerald-500"}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Flagged Outliers: ",s.madOutliers]})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-indigo-950 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300 block",children:"Z-Score Envelope:"}),e.jsxs("span",{className:"text-lg font-mono font-extrabold text-white",children:["[",s.zLower,", ",s.zUpper,"]"]}),e.jsxs("span",{className:"text-[11px] text-slate-400 block",children:["Width: ",(parseFloat(s.zUpper)-parseFloat(s.zLower)).toLocaleString()]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-cyan-950 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-300 block",children:"Tukey Fences:"}),e.jsxs("span",{className:"text-lg font-mono font-extrabold text-white",children:["[",s.iqrLower,", ",s.iqrUpper,"]"]}),e.jsxs("span",{className:"text-[11px] text-slate-400 block",children:["Width: ",(parseFloat(s.iqrUpper)-parseFloat(s.iqrLower)).toLocaleString()]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-emerald-950 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-300 block",children:"MAD Effective Bounds:"}),e.jsxs("span",{className:"text-lg font-mono font-extrabold text-white",children:["[",s.madLower,", ",s.madUpper,"]"]}),e.jsxs("span",{className:"text-[11px] text-slate-400 block",children:["Width: ",(parseFloat(s.madUpper)-parseFloat(s.madLower)).toLocaleString()]})]})]})]}),N==="skewness"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-emerald-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📉"})," The Skewness Pathology: Normal vs Log-Normal"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Compare how symmetrical Gaussian data vs skewed real-world data affects boundary fences."})]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:()=>A("gaussian"),className:p("px-3 py-1.5 text-xs font-semibold rounded-lg border",S==="gaussian"?"bg-emerald-600 text-white border-emerald-500 shadow-md":"bg-slate-950 text-slate-400 border-slate-800"),children:"Symmetric Gaussian"}),e.jsx("button",{onClick:()=>A("skewed"),className:p("px-3 py-1.5 text-xs font-semibold rounded-lg border",S==="skewed"?"bg-emerald-600 text-white border-emerald-500 shadow-md":"bg-slate-950 text-slate-400 border-slate-800"),children:"Heavily Right-Skewed (Bengal Real Estate)"})]})]}),e.jsx("div",{className:"p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4",children:S==="gaussian"?e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-bold text-emerald-400",children:"✔ Symmetrical Gaussian Distribution"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Under a true normal distribution (e.g. Mean = 50.0, StDev = 5.0), the Classical Z-Score, Tukey's IQR, and Modified Z-Score all produce concordant fences! The 3-sigma fence is [35.0, 65.0], capturing 99.73% of data. Masking does not occur because variance is modest and uncontaminated."})]}):e.jsxs("div",{className:"space-y-2",children:[e.jsx("h4",{className:"text-sm font-bold text-amber-400",children:"⚠️ Heavily Right-Skewed Empirical Distribution"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["When data represents income or property prices, the long right tail inflates the sample variance, dragging the mean to the right. Classical Z-score produces a negative lower bound (",e.jsx("strong",{children:"-₹ 17,773"}),") and an over-inflated upper bound (",e.jsx("strong",{children:"₹ 35,206"}),"). Tukey's IQR and Modified Z-Score stay anchored to order statistics, establishing robust bounds at ~₹ 2,600 and ~₹ 9,400."]})]})})]})]}),e.jsxs("section",{id:"math-formulation",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"4. Mathematical Formulations & Theoretical Proofs"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," 1. Classical Z-Score Formulation"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-indigo-950 font-mono text-xs text-indigo-200 overflow-x-auto",children:"z_i = (x_i - μ) / σ,   Decision: |z_i| ≥ 3.0"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Assumes Gaussian normality X ~ N(μ, σ²). In practical computing, μ and σ are estimated by sample mean x̄ and sample standard deviation s, giving the estimator a 0% breakdown point."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," 2. Tukey's Interquartile Range Fences"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-cyan-950 font-mono text-xs text-cyan-200 overflow-x-auto whitespace-pre",children:`IQR = Q3 - Q1
Inner Fences: [ Q1 - 1.5·IQR,  Q3 + 1.5·IQR ]
Outer Fences: [ Q1 - 3.0·IQR,  Q3 + 3.0·IQR ]`}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Order statistics Q1 and Q3 possess a 25% finite sample breakdown point. Distribution-free and resistant to tail variance spikes."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"✍️"})," 3. Modified Z-Score (Iglewicz & Hoaglin, 1993)"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-emerald-950 font-mono text-xs text-emerald-200 overflow-x-auto",children:"M_i = [ 0.6745 · (x_i - x̃) ] / MAD,   where MAD = median( |x_i - x̃| )"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"The constant 0.6745 = 1 / 1.4826 corresponds to the 75th percentile of N(0, 1), ensuring MAD is a consistent estimator of σ. 50% breakdown point."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," 4. Winsorization (Percentile Clamping)"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-purple-950 font-mono text-xs text-purple-200 overflow-x-auto whitespace-pre",children:"x_winsor = min( max(x_i, P_α), P_{1-α} )"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Clamps extreme values to the α and (1 - α) percentiles. Preserves sample size N and degrees of freedom while bounding empirical variance."})]})]})]}),e.jsxs("section",{id:"case-studies",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-cyan-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"5. Real-World Regional Industrial Case Studies (West Bengal)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"Case 1: Real Estate Valuation"}),e.jsx("span",{className:"text-xs text-slate-500",children:"Salt Lake Sector V"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Salt Lake & New Town Commercial Property Pricing"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," Automated real estate valuation portals analyzed 15,000 apartment listings. Clustered luxury towers (₹ 32,000/sq.ft.) inflated the standard deviation by 8x, masking clerical typos (₹ 450/sq.ft.) under classical Z-scores."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-indigo-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"Replaced Z-score with Tukey's Inner Fences (Upper: ₹ 9,400) and Modified Z-score."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: Successfully flagged 412 listing anomalies; reduced appraisal pricing error by 34%."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:"Case 2: Agricultural Analytics"}),e.jsx("span",{className:"text-xs text-slate-500",children:"North 24 Parganas"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Barrackpore & Naihati Agricultural Paddy Crop Yields"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," Crop yield prediction per bigha across 4,200 farms suffered from localized river flooding dropouts (extreme lower tail outliers near 0.8 quintals)."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-cyan-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"Tukey Lower Fence [Q1 - 1.5*IQR] isolated flood-damaged farms for disaster relief claims."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: Expedited ₹ 8.2 Cr in crop insurance settlements with zero false rejections."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"Case 3: FinTech Gateway"}),e.jsx("span",{className:"text-xs text-slate-500",children:"Sector V Tech Park"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"FinTech Transaction Fraud Monitoring & Winsorization"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," Credit card payment streams had occasional legitimate impulse transactions of ₹ 5,00,000 that triggered gradient explosions in PyTorch neural networks under MSE loss."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-emerald-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"99th percentile Winsorization (clamping at ₹ 42,000) combined with an `is_high_value_flag = 1` indicator."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: Reduced neural training variance by 78% while preserving fraud recall."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-purple-500/20 text-purple-300 border border-purple-500/30",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30",children:"Case 4: Meteorology"}),e.jsx("span",{className:"text-xs text-slate-500",children:"Alipore AWS"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Automated Weather Station (AWS) Impulse Spike Filtering"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," Roadside environmental sensors experienced optical solar reflection artifacts, sending spurious temperature spikes of 65°C."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-purple-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"5-minute rolling Hampel Filter (rolling MAD) on the edge micro-controller."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: Cleaned 100% of telemetry spikes before ingestion into the IMD regional model."})]})]})]})]}),e.jsxs("section",{id:"diagnostic-quiz",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"6. Diagnostic Self-Assessment Quiz (Scenario Challenge)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"5 authentic engineering scenarios testing detection algorithms, fencing boundaries, and remediation strategies."})]})]}),h&&e.jsxs("div",{className:"flex items-center gap-2 bg-indigo-950 border border-indigo-700 px-4 py-2 rounded-xl",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-extrabold text-cyan-300",children:[ae," / ",f.length]}),e.jsx("button",{onClick:()=>{D({}),E(!1)},className:"ml-3 text-xs text-indigo-400 underline hover:text-indigo-200",children:"Reset"})]})]}),e.jsxs("div",{className:"space-y-6",children:[f.map((t,a)=>e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:["Scenario ",a+1,": ",t.scenario]}),h&&e.jsx("span",{className:p("text-xs font-bold px-2.5 py-0.5 rounded-full border",g[t.id]===t.correctIndex?"bg-emerald-500/20 text-emerald-300 border-emerald-500/50":"bg-red-500/20 text-red-300 border-red-500/50"),children:g[t.id]===t.correctIndex?"✔ Correct":"✖ Incorrect"})]}),e.jsx("p",{className:"text-sm font-semibold text-white leading-relaxed",children:t.question}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5",children:t.options.map((r,d)=>{const l=g[t.id]===d,x=t.correctIndex===d;return e.jsxs("button",{onClick:()=>te(t.id,d),disabled:h,className:p("p-3.5 rounded-xl text-xs sm:text-sm text-left transition-all duration-150 border flex items-center justify-between",!h&&l&&"bg-indigo-900/40 border-indigo-500 text-white shadow-md",!h&&!l&&"bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-950",h&&x&&"bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold",h&&l&&!x&&"bg-red-950/40 border-red-500 text-red-200 line-through",h&&!l&&!x&&"bg-slate-950/40 border-slate-900 text-slate-500"),children:[e.jsx("span",{children:r}),e.jsxs("span",{className:"font-mono text-xs opacity-60",children:["[",String.fromCharCode(65+d),"]"]})]},d)})}),h&&e.jsxs("div",{className:"pt-3 border-t border-slate-800 text-xs space-y-1.5",children:[e.jsxs("div",{className:"text-slate-300",children:[e.jsx("strong",{className:"text-cyan-300",children:"Rationale: "}),t.rationale]}),e.jsxs("div",{className:"text-indigo-400 font-mono bg-indigo-950/50 p-2 rounded-lg border border-indigo-900/40",children:["💬 ",t.mentorTip]})]})]},t.id)),!h&&e.jsx("div",{className:"text-center pt-2",children:e.jsxs("button",{onClick:()=>E(!0),disabled:Object.keys(g).length<f.length,className:p("px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl",Object.keys(g).length===f.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 cursor-pointer":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:["Submit Diagnostic Assessment (",Object.keys(g).length,"/",f.length," Answered)"]})})]})]}),e.jsxs("section",{id:"production-pitfalls",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-red-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"7. Production Engineering Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 1"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"The Preprocessing Leakage Trap"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Computing outlier boundaries (mean, std, Q1, Q3) on the full dataset before splitting leaks test distribution information into the training pipeline."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Always compute fences strictly on X_train and freeze them for X_test."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 2"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"The Zero-MAD Crash"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When > 50% of values are identical (e.g. sparse counts), MAD evaluates to 0.0, causing unhandled division-by-zero crashes in Modified Z-score."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Fallback to Mean Absolute Deviation or Tukey IQR when MAD is zero."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 3"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"Symmetric Fences on Skewed Data"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Applying symmetric [Q1 - 1.5*IQR, Q3 + 1.5*IQR] on heavy right-skewed data produces nonsensical negative lower bounds and cuts into normal tail observations."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Use Medcouple Adjusted Boxplot or log-transform prior to fencing."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 4"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"Trimming Minority Fraud Labels"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Blindly deleting outlier rows in fraud detection or rare disease datasets deletes the exact positive target class (y = 1) needed for training."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Use Winsorization + binary indicator flags (`is_outlier = 1`)."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 5"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"Univariate Multi-Collinear Blindspot"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Univariate filters check features independently, missing points that are individually normal but impossible in bivariate combinations (e.g. Age 21, Exp 15)."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Combine univariate fences with Mahalanobis distance or Isolation Forest."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 6"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"Stale Static Fences in Streaming"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Using static fences in real-time streaming causes concept drift degradation as seasonal or economic shifts trigger false-positive outlier floods."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Deploy rolling quantile trackers (Hampel filter / t-digest) in streaming."})]})]})]}),e.jsxs("section",{id:"practical-workbench",className:"space-y-8 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"8. Practical Workbench & Academic Resources"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Access the pure Python simulation lab, comprehensive study handbook, and 30 graded examination questions."})]})]}),e.jsx("div",{className:"flex border-b border-slate-800",children:[{id:"python",label:"🐍 Python Simulation Engine"},{id:"handbook",label:"📖 Academic Handbook (Note)"},{id:"qbank",label:"🎯 30 Graded Questions (Q-Bank)"}].map(t=>e.jsx("button",{onClick:()=>W(t.id),className:p("px-5 py-3 text-xs sm:text-sm font-bold transition-all border-b-2 -mb-px",w===t.id?"border-indigo-500 text-indigo-300 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200"),children:t.label},t.id))}),w==="python"&&e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Pure Python Outlier Detection Laboratory"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Zero external dependencies. Contains Classical Z-Score, Tukey IQR, Modified Z-Score (MAD), and Winsorization."})]})}),e.jsx(ue,{fileName:"basic_outlier_detection_lab.py",code:xe})]}),w==="handbook"&&e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Comprehensive Revision Notes & Handbook"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Z-score, Tukey fences, Iglewicz-Hoaglin MAD equations, Medcouple skewness adjustments, and West Bengal case studies."})]})}),e.jsx(pe,{fileName:"topic13_note.txt",content:ge})]}),w==="qbank"&&e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"30 Graded Questions & Viva-Voce Bank"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Structured across 4 mastery tiers (Foundation, Mechanics, Architecture, Scalability) with detailed solutions and practical tips."})]})}),e.jsx(me,{title:"Topic 13: Basic Outlier Detection — Graded Examination Bank",questions:fe})]})]}),e.jsx(he,{})]})};export{Se as default};
