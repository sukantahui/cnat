import{b as r,j as e,bl as l}from"./vendor-react-core-B-R9HE-Z.js";import{P as ie}from"./PythonFileLoader-DZ61U3Y_.js";import{F as se}from"./FAQTemplate-16IfroqC.js";import{P as ne}from"./PlainTextPrint-C6NaUtnE.js";import{T as re}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const oe=`"""
=============================================================================
TOPIC 12: OUTLIER CONCEPT & LEVERAGE ANALYSIS
Module: Data Types and Preprocessing (BCAC701B)
Academic Practical Laboratory & Industrial Simulation Engine
Author: Sukanta Hui | Senior Consultant & Educator | Barrackpore, West Bengal
Institute: Coder & AccoTax
=============================================================================

This laboratory engine provides a comprehensive, mathematically rigorous simulation
of outlier concepts from first principles, requiring ZERO external third-party
dependencies (built solely with standard Python).

Core Algorithmic Modules Implemented:
1. Taxonomy Synthesizer:
   - Point Outliers (Global magnitude divergence).
   - Contextual Outliers (Conditioned on seasonal/temporal context).
   - Collective Outliers (Sub-sequence pattern anomalies with normal values).
2. Leverage, Residuals & Cook's Distance Engine (From Scratch):
   - Hat Matrix Diagonal Leverage: h_ii = x_i^T (X^T X)^(-1) x_i.
   - Ordinary & Studentized Residuals: e_i = y_i - y_hat_i.
   - Cook's Distance: D_i = [ e_i^2 / (p * MSE) ] * [ h_ii / (1 - h_ii)^2 ].
   - Identification of Influential Points vs High-Leverage Non-Influential Points.
3. Masking & Swamping Simulator:
   - Masking: Clustered outliers inflating sample variance, evading z-score detection.
   - Swamping: Extreme outlier pulling sample mean, falsely flagging normal points.
   - Robust Median Absolute Deviation (MAD) as an invariant safeguard.
4. Loss Function Sensitivity Analysis:
   - L2 Squared Loss (Extreme outlier vulnerability).
   - L1 Absolute Loss (Robust median alignment).
   - Huber Robust Loss (L2 near origin, L1 in tails).
5. Regional West Bengal Industrial Benchmarks:
   - Salt Lake Sector V salary roster (Point Outlier).
   - Alipore Meteorological Department weather telemetry (Contextual Outlier).
   - Howrah Bridge traffic flow sensor sequences (Collective Outlier).
=============================================================================
"""

import math
import statistics
from typing import List, Dict, Any, Tuple, Optional
from dataclasses import dataclass

# =====================================================================
# 1. TAXONOMY GENERATOR & OUTLIER SYNTHESIS
# =====================================================================

def synthesize_point_outliers() -> List[Dict[str, Any]]:
    """
    Synthesizes a 10-person software engineer cohort from Salt Lake Sector V.
    9 engineers have typical salaries (6 to 18 LPA), while 1 executive earns 85 LPA (Point Outlier).
    """
    return [
        {"id": "DEV-01", "name": "Aritra Sen",         "exp_yrs": 2.5, "salary_lpa": 7.2,  "label": "NORMAL"},
        {"id": "DEV-02", "name": "Pooja Mukherjee",     "exp_yrs": 3.0, "salary_lpa": 8.5,  "label": "NORMAL"},
        {"id": "DEV-03", "name": "Debashis Roy",        "exp_yrs": 4.0, "salary_lpa": 10.2, "label": "NORMAL"},
        {"id": "DEV-04", "name": "Mousumi Das",         "exp_yrs": 4.5, "salary_lpa": 11.5, "label": "NORMAL"},
        {"id": "DEV-05", "name": "Tanmoy Ghosh",        "exp_yrs": 5.0, "salary_lpa": 13.0, "label": "NORMAL"},
        {"id": "DEV-06", "name": "Ananya Banerjee",     "exp_yrs": 5.5, "salary_lpa": 14.5, "label": "NORMAL"},
        {"id": "DEV-07", "name": "Debangshu Mukherjee", "exp_yrs": 6.0, "salary_lpa": 16.0, "label": "NORMAL"},
        {"id": "DEV-08", "name": "Susmita Chakraborty", "exp_yrs": 7.0, "salary_lpa": 18.0, "label": "NORMAL"},
        {"id": "DEV-09", "name": "Mahima Paul",         "exp_yrs": 7.5, "salary_lpa": 19.2, "label": "NORMAL"},
        # Point Outlier: VP of Engineering with 85.0 LPA (Global Magnitude Anomaly)
        {"id": "DEV-10", "name": "Siddhartha Basu",     "exp_yrs": 8.0, "salary_lpa": 85.0, "label": "POINT_OUTLIER"}
    ]


def synthesize_contextual_outliers() -> List[Dict[str, Any]]:
    """
    Synthesizes meteorological readings from Alipore Observatory, Kolkata.
    38°C in May (Summer) is normal; 38°C in January (Winter) is a CONTEXTUAL OUTLIER.
    """
    return [
        {"date": "2026-05-10", "season": "Summer", "temp_c": 37.5, "expected_range": "34 - 40°C", "is_contextual_outlier": False},
        {"date": "2026-05-15", "season": "Summer", "temp_c": 38.8, "expected_range": "34 - 40°C", "is_contextual_outlier": False},
        {"date": "2026-07-20", "season": "Monsoon","temp_c": 31.0, "expected_range": "28 - 33°C", "is_contextual_outlier": False},
        {"date": "2026-07-25", "season": "Monsoon","temp_c": 32.2, "expected_range": "28 - 33°C", "is_contextual_outlier": False},
        {"date": "2026-01-12", "season": "Winter", "temp_c": 14.2, "expected_range": "11 - 18°C", "is_contextual_outlier": False},
        {"date": "2026-01-18", "season": "Winter", "temp_c": 15.5, "expected_range": "11 - 18°C", "is_contextual_outlier": False},
        # Contextual Outlier: 38.5°C in mid-January! (Physically plausible in summer, impossible in winter)
        {"date": "2026-01-24", "season": "Winter", "temp_c": 38.5, "expected_range": "11 - 18°C", "is_contextual_outlier": True}
    ]


def synthesize_collective_outliers() -> List[Dict[str, Any]]:
    """
    Synthesizes traffic flow speed readings (km/h) across Howrah Bridge.
    Individual readings of 0 km/h happen at red lights; a persistent 40-minute block
    of exactly 0 km/h represents a COLLECTIVE OUTLIER (Gridlock or Sensor Hardware Freeze).
    """
    normal_traffic = [35, 42, 38, 29, 31, 25, 40, 36]
    # Collective anomaly: 5 consecutive zeroes in high-volume rush hour
    anomalous_burst = [0, 0, 0, 0, 0]
    resuming_traffic = [22, 28, 35, 39]
    
    stream = normal_traffic + anomalous_burst + resuming_traffic
    results = []
    for idx, speed in enumerate(stream):
        is_collective = (8 <= idx <= 12)
        results.append({
            "minute_mark": (idx + 1) * 5,
            "speed_kmh": speed,
            "is_collective_member": is_collective
        })
    return results


# =====================================================================
# 2. LEVERAGE, RESIDUALS & COOK'S DISTANCE ENGINE (FROM SCRATCH)
# =====================================================================

class LinearRegressionDiagnostics:
    """
    Computes Hat matrix diagonal leverage (h_ii), OLS estimates,
    residuals, and Cook's Distance for bivariate data from first principles.
    """
    def __init__(self, x_vals: List[float], y_vals: List[float]):
        if len(x_vals) != len(y_vals) or len(x_vals) < 3:
            raise ValueError("Dataset must contain at least 3 matched pairs.")
        self.x = x_vals
        self.y = y_vals
        self.n = len(x_vals)
        self.p = 2  # Bivariate regression has 2 parameters: intercept and slope
        self._fit()

    def _fit(self):
        mean_x = statistics.mean(self.x)
        mean_y = statistics.mean(self.y)
        
        # Calculate OLS slope and intercept
        ss_xx = sum((xi - mean_x) ** 2 for xi in self.x)
        ss_xy = sum((xi - mean_x) * (yi - mean_y) for xi, yi in zip(self.x, self.y))
        
        if ss_xx == 0:
            self.slope = 0.0
            self.intercept = mean_y
        else:
            self.slope = ss_xy / ss_xx
            self.intercept = mean_y - (self.slope * mean_x)

        # Fitted values & residuals
        self.y_hat = [self.intercept + self.slope * xi for xi in self.x]
        self.residuals = [yi - y_h for yi, y_h in zip(self.y, self.y_hat)]
        
        # Mean Squared Error (MSE)
        sse = sum(e ** 2 for e in self.residuals)
        self.mse = sse / (self.n - self.p) if (self.n - self.p) > 0 else 1.0

        # Hat Matrix Diagonal Leverage (h_ii):
        # In simple linear regression: h_ii = (1 / n) + [ (x_i - mean_x)^2 / SS_xx ]
        self.leverage = [
            (1.0 / self.n) + (((xi - mean_x) ** 2) / ss_xx if ss_xx > 0 else 0)
            for xi in self.x
        ]

        # Cook's Distance:
        # D_i = [ e_i^2 / (p * MSE) ] * [ h_ii / (1 - h_ii)^2 ]
        self.cooks_distance = []
        for e, h in zip(self.residuals, self.leverage):
            denom = (1.0 - h) ** 2
            if denom == 0 or self.mse == 0:
                d = 0.0
            else:
                d = (e ** 2 / (self.p * self.mse)) * (h / denom)
            self.cooks_distance.append(d)

    def get_summary(self) -> List[Dict[str, Any]]:
        # Traditional threshold for Cook's Distance: D_i > 4 / (n - p - 1) or D_i > 1.0
        cook_threshold = 4.0 / (self.n - self.p - 1) if (self.n - self.p - 1) > 0 else 1.0
        high_leverage_threshold = (2.0 * self.p) / self.n

        diagnostics = []
        for i in range(self.n):
            is_high_leverage = self.leverage[i] > high_leverage_threshold
            is_influential = self.cooks_distance[i] > cook_threshold
            diagnostics.append({
                "index": i,
                "x": round(self.x[i], 2),
                "y": round(self.y[i], 2),
                "y_hat": round(self.y_hat[i], 2),
                "residual": round(self.residuals[i], 2),
                "leverage_hii": round(self.leverage[i], 4),
                "cooks_distance": round(self.cooks_distance[i], 4),
                "is_high_leverage": is_high_leverage,
                "is_influential": is_influential
            })
        return diagnostics


# =====================================================================
# 3. MASKING & SWAMPING SIMULATOR
# =====================================================================

def simulate_masking_and_swamping() -> Dict[str, Any]:
    """
    Demonstrates:
    1. Swamping: A single massive outlier inflates mean & standard deviation,
       falsely flagging legitimate points as outliers.
    2. Masking: Multiple clustered outliers inflate variance so much that
       standard z-scores fail to flag them (|z| < 3.0), whereas Robust MAD succeeds.
    """
    # Pristine data: 10 readings near 50
    pristine = [48.0, 49.5, 50.0, 50.2, 50.8, 51.0, 49.8, 50.5, 49.2, 51.5]

    # Contaminated with a pair of clustered extreme outliers (Masking Scenario)
    clustered_outliers = [140.0, 142.0]
    contaminated = pristine + clustered_outliers

    mean_c = statistics.mean(contaminated)
    stdev_c = statistics.stdev(contaminated)
    median_c = statistics.median(contaminated)
    
    # Calculate MAD: Median of |x_i - median|
    abs_deviations = [abs(x - median_c) for x in contaminated]
    mad = statistics.median(abs_deviations)
    # Robust scale factor for normal distribution: 1.4826 * MAD
    mad_scale = 1.4826 * mad if mad > 0 else 1.0

    z_scores = [(x - mean_c) / stdev_c for x in contaminated]
    modified_z_scores = [0.6745 * (x - median_c) / mad if mad > 0 else 0 for x in contaminated]

    # Evaluate the two outlier points (140 and 142)
    z_outlier_1 = z_scores[-2]
    z_outlier_2 = z_scores[-1]
    modz_outlier_1 = modified_z_scores[-2]
    modz_outlier_2 = modified_z_scores[-1]

    # Classic 3-sigma rule: |z| >= 3.0
    masking_occurred = abs(z_outlier_1) < 3.0 and abs(z_outlier_2) < 3.0
    mad_caught = abs(modz_outlier_1) >= 3.0 and abs(modz_outlier_2) >= 3.0

    return {
        "mean": round(mean_c, 2),
        "stdev": round(stdev_c, 2),
        "median": round(median_c, 2),
        "mad": round(mad, 2),
        "z_score_outlier_140": round(z_outlier_1, 2),
        "z_score_outlier_142": round(z_outlier_2, 2),
        "mod_z_outlier_140": round(modz_outlier_1, 2),
        "mod_z_outlier_142": round(modz_outlier_2, 2),
        "masking_occurred": masking_occurred,
        "mad_caught": mad_caught
    }


# =====================================================================
# 4. LOSS FUNCTION SENSITIVITY: L2 VS L1 VS HUBER
# =====================================================================

def evaluate_loss_functions(residuals: List[float], delta: float = 1.5) -> Dict[str, float]:
    """
    Computes total penalty across three loss formulations for a vector of residuals:
    - L2 Squared Error: sum( e_i^2 )
    - L1 Absolute Error: sum( |e_i| )
    - Huber Loss: sum( 0.5 * e_i^2 if |e_i| <= delta else delta * (|e_i| - 0.5 * delta) )
    """
    l2_total = sum(e ** 2 for e in residuals)
    l1_total = sum(abs(e) for e in residuals)
    
    huber_total = 0.0
    for e in residuals:
        abs_e = abs(e)
        if abs_e <= delta:
            huber_total += 0.5 * (abs_e ** 2)
        else:
            huber_total += delta * (abs_e - 0.5 * delta)
            
    return {
        "l2_loss": round(l2_total, 2),
        "l1_loss": round(l1_total, 2),
        "huber_loss": round(huber_total, 2)
    }


# =====================================================================
# 5. COMPREHENSIVE INDUSTRIAL BENCHMARK (WEST BENGAL CASE STUDIES)
# =====================================================================

def run_outlier_concept_laboratory() -> Dict[str, Any]:
    print("=" * 80)
    print("  ACADEMIC & INDUSTRIAL BENCHMARK: OUTLIER CONCEPTS & LEVERAGE")
    print("  Course: BCAC701B | Machine Learning Preprocessing Laboratory")
    print("  Author: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    # -------------------------------------------------------------
    # EXPERIMENT 1: Point Outliers & Cook's Distance in Sector V
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 1] POINT OUTLIERS & COOK'S INFLUENCE (Salt Lake Tech Salaries) ---")
    cohort = synthesize_point_outliers()
    x_exp = [dev["exp_yrs"] for dev in cohort]
    y_sal = [dev["salary_lpa"] for dev in cohort]

    # Fit Full Dataset (with Outlier)
    diag_full = LinearRegressionDiagnostics(x_exp, y_sal)
    summary_full = diag_full.get_summary()

    # Fit Clean Dataset (Excluding Outlier at index 9)
    diag_clean = LinearRegressionDiagnostics(x_exp[:9], y_sal[:9])

    print(f"Sample Size N: {len(cohort)}")
    print(f"Clean OLS Model (Without Outlier):  Salary = {diag_clean.intercept:.2f} + {diag_clean.slope:.2f} * Exp")
    print(f"Full OLS Model (With VP Outlier):   Salary = {diag_full.intercept:.2f} + {diag_full.slope:.2f} * Exp")
    print(f"Slope Distortion: +{diag_full.slope - diag_clean.slope:.2f} LPA per year of experience (Artificially steepened!)")

    print("\\nRegression Diagnostic Breakdown for Each Candidate:")
    for row in summary_full:
        dev = cohort[row['index']]
        status = "âš  INFLUENTIAL OUTLIER" if row['is_influential'] else "NORMAL"
        print(f"  [{row['index']}] {dev['name']:<22} | Exp: {row['x']} yrs | Sal: {row['y']:>5.1f} LPA | "
              f"h_ii: {row['leverage_hii']:.3f} | Cook's D: {row['cooks_distance']:>6.3f} -> {status}")

    # -------------------------------------------------------------
    # EXPERIMENT 2: Contextual Outliers in Weather Telemetry
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 2] CONTEXTUAL OUTLIERS (Alipore Meteorological Observatory) ---")
    weather_stream = synthesize_contextual_outliers()
    print("Auditing seasonal temperature readings for contextual anomalies:")
    for w in weather_stream:
        flag = "âš  CONTEXTUAL ANOMALY" if w["is_contextual_outlier"] else "âœ” CONSISTENT"
        print(f"  Date: {w['date']} | Season: {w['season']:<7} | Recorded: {w['temp_c']}Â°C | Expected: {w['expected_range']:<10} -> {flag}")

    # -------------------------------------------------------------
    # EXPERIMENT 3: Collective Outliers in Howrah Bridge Traffic
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 3] COLLECTIVE OUTLIERS (Howrah Bridge Traffic Speed Stream) ---")
    traffic = synthesize_collective_outliers()
    collective_members = [t for t in traffic if t["is_collective_member"]]
    print(f"Total Telemetry Windows: {len(traffic)} (5-min intervals)")
    print(f"Collective Outlier Event: Minutes {collective_members[0]['minute_mark']} to {collective_members[-1]['minute_mark']}")
    print(f"Values within Event: {[t['speed_kmh'] for t in collective_members]} km/h (Persistent flatline indicates traffic gridlock)")

    # -------------------------------------------------------------
    # EXPERIMENT 4: Masking & Swamping Simulation
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 4] MASKING & SWAMPING STATISTICAL BENCHMARK ---")
    ms_results = simulate_masking_and_swamping()
    print(f"Contaminated Distribution: Mean = {ms_results['mean']}, StDev = {ms_results['stdev']}")
    print(f"Robust Distribution:       Median = {ms_results['median']}, MAD = {ms_results['mad']}")
    print(f"Outlier Point 140 -> Standard Z-score: {ms_results['z_score_outlier_140']} (Threshold |z| >= 3.0)")
    print(f"Outlier Point 140 -> Modified Robust Z-score: {ms_results['mod_z_outlier_140']}")
    
    if ms_results['masking_occurred']:
        print("  âš  MASKING CONFIRMED: Clustered outliers inflated StDev from ~1.0 to 26.6,")
        print("    reducing standard z-score below 3.0, escaping classical detection!")
    if ms_results['mad_caught']:
        print(f"  âœ” ROBUST MAD TRIUMPH: Modified Z-score ({ms_results['mod_z_outlier_140']}) successfully detected the outlier!")

    # -------------------------------------------------------------
    # EXPERIMENT 5: Loss Function Resilience (L2 vs L1 vs Huber)
    # -------------------------------------------------------------
    print("\\n--- [EXPERIMENT 5] LOSS FUNCTION RESILIENCE (Residual Penalties) ---")
    residuals_clean = [0.2, -0.4, 0.5, -0.1, 0.3, -0.2]
    residuals_corrupted = residuals_clean + [25.0]  # Single severe outlier residual

    losses_clean = evaluate_loss_functions(residuals_clean)
    losses_corrupted = evaluate_loss_functions(residuals_corrupted)

    print(f"Clean Residuals Total Loss:     L2 = {losses_clean['l2_loss']:<7} | L1 = {losses_clean['l1_loss']:<6} | Huber = {losses_clean['huber_loss']}")
    print(f"Corrupted (+25 Residual) Loss: L2 = {losses_corrupted['l2_loss']:<7} | L1 = {losses_corrupted['l1_loss']:<6} | Huber = {losses_corrupted['huber_loss']}")
    
    l2_inflation = (losses_corrupted['l2_loss'] / losses_clean['l2_loss'])
    huber_inflation = (losses_corrupted['huber_loss'] / losses_clean['huber_loss'])
    print(f"L2 Quadratic Inflation: {l2_inflation:.1f}x penalty explosion!")
    print(f"Huber Robust Inflation: {huber_inflation:.1f}x bounded linear increase.")

    print("\\n" + "=" * 80)
    print("  LABORATORY EXECUTION COMPLETE: ALL OUTLIER MECHANICS CONVERGED")
    print("=" * 80)

    return {
        "status": "SUCCESS",
        "clean_slope": round(diag_clean.slope, 2),
        "full_slope": round(diag_full.slope, 2),
        "cooks_distance_vp": summary_full[9]["cooks_distance"],
        "masking_confirmed": ms_results['masking_occurred'],
        "l2_inflation_factor": round(l2_inflation, 1)
    }

if __name__ == "__main__":
    run_outlier_concept_laboratory()
`,le=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 12: Outlier Concept, Leverage & Robust Statistics
Author: Sukanta Hui | Senior Consultant & Educator | Barrackpore, West Bengal, India
Institute: Coder & AccoTax | Aligned with MAKAUT & Industry AI Standards
=============================================================================

1. THEORETICAL FOUNDATION: WHAT IS AN OUTLIER?
-----------------------------------------------------------------------------
In classical mathematical statistics and applied machine learning, the canonical
definition of an outlier was formulated by Douglas M. Hawkins in 1980:
   "An outlier is an observation which deviates so much from other observations
    as to arouse suspicions that it was generated by a different mechanism."

Outliers represent observations located in low-density probability regions of the
underlying data-generating distribution P(X, Y). However, treating every outlier
as an error to be deleted is a catastrophic engineering anti-pattern. Outliers
can represent either genuine structural errors or the most valuable signals in the
entire dataset (e.g., credit card fraud, network intrusion, rare disease markers).

1.1 Outlier vs Noise vs Novelty vs Contaminant:
   - Noise: Random, high-frequency, low-amplitude perturbations inherent to
     imperfect sensors or transmission channels. Noise does not indicate a
     different generating mechanism.
   - Outlier / Anomaly: Low-frequency, extreme-amplitude instances that diverge
     sharply from standard cluster topologies.
   - Novelty: An unobserved, legitimate pattern that reflects an evolving data
     distribution (e.g. a newly launched electric vehicle model appearing in
     Kolkata vehicle registration registries). Novelties persist and form new
     clusters in future distributions.
   - Contaminant: A measurement generated by an alien process (e.g. clerical entry
     error or sensor hardware failure) that carries zero physical validity.


-----------------------------------------------------------------------------
2. THE TRIPARTITE TAXONOMY OF OUTLIERS
-----------------------------------------------------------------------------
Modern anomaly literature partitions outliers into three fundamental classes:

2.1 Point Outliers (Global Outliers):
   - Definition: An individual data point that deviates significantly from the
     rest of the entire dataset across global feature dimensions.
   - Mathematical Formulation:
       x_i in R^d is a point outlier if:
       Density(x_i) < epsilon_threshold  OR  Dist(x_i, kNN(x_i)) > D_threshold
   - Real-World Example (West Bengal Context):
       In a Salt Lake Sector V software company where 95% of engineers earn
       between 6 LPA and 18 LPA, an executive drawing 85 LPA is a global Point Outlier.

2.2 Contextual Outliers (Conditional Outliers):
   - Definition: A data point that is anomalous only when evaluated within a specific
     context (e.g., temporal, spatial, demographic, or seasonal), even though its
     absolute scalar magnitude is perfectly normal in other contexts.
   - Two Attribute Types in Contextual Data:
       1. Contextual Attributes: Define the background envelope (e.g., Month, Season,
          Hour of Day, Location, Age Group).
       2. Behavioral Attributes: The measured metrics evaluated within that context
          (e.g., Temperature, Speed, Expenditure).
   - Real-World Example (Kolkata Context):
       A temperature of 38.5°C recorded at Alipore Observatory in May is normal
       (Context: Summer). That exact same reading of 38.5°C recorded on January 15
       is an extreme Contextual Outlier (Context: Winter).

2.3 Collective Outliers (Sub-Sequence Anomalies):
   - Definition: A collection of related data points whose individual values are
     completely normal, but whose joint occurrence or sequence as a group is anomalous.
   - Typical Domains: Time-series telemetry, sequential transaction logs, ECG graphs.
   - Real-World Example (Howrah Bridge Traffic):
       A traffic speed sensor reporting 0 km/h at 2:00 PM for 10 seconds is normal
       (red light stop). However, a continuous sequence of 0 km/h for 45 minutes
       during peak afternoon rush hour represents a Collective Outlier (Severe Gridlock
       or Sensor Circuit Freeze).


-----------------------------------------------------------------------------
3. LEVERAGE, RESIDUALS & COOK'S DISTANCE IN MACHINE LEARNING
-----------------------------------------------------------------------------
Not all outliers affect predictive models equally. In supervised learning (regression
and classification), an observation can be an outlier in feature space X, in target
space Y, or both.

3.1 High Leverage Points (Extremes in Feature Space X):
   - Leverage measures how far an observation's feature vector x_i deviates from the
     center of all predictor features.
   - Hat Matrix H in Linear Models:
       y_hat = X * beta = X * (X^T * X)^(-1) * X^T * y = H * y
   - The diagonal elements h_ii represent the Leverage of observation i:
       h_ii = x_i^T * (X^T * X)^(-1) * x_i
     For simple bivariate regression:
       h_ii = (1 / N) + [ (x_i - bar(x))^2 / Sum_{j=1}^N (x_j - bar(x))^2 ]
   - Mathematical Properties:
       * 1/N <= h_ii <= 1.0
       * Sum_{i=1}^N h_ii = p (where p is the number of estimated parameters).
       * Rule of Thumb: A point is High Leverage if h_ii > (2 * p) / N.
   - Crucial Insight: A high-leverage point that lies along the regression line has
     a tiny residual and does NOT distort the fitted slope!

3.2 High Residual Points (Extremes in Target Space Y):
   - Residual e_i = y_i - y_hat_i.
   - An observation near the feature mean bar(x) with a massive residual is an outlier
     in Y, but has low leverage, so its ability to rotate the regression slope is limited.

3.3 Influential Points & Cook's Distance (The Dangerous Intersection):
   - An observation is Influential if removing it substantially changes the model's
     parameter estimates beta.
   - An observation is influential if and only if it possesses BOTH high leverage AND
     a large residual!
   - Cook's Distance Formula:
       D_i = [ e_i^2 / (p * MSE) ] * [ h_ii / (1 - h_ii)^2 ]
   - Interpretation:
       * First term measures Target Residual Extremity (e_i^2 / MSE).
       * Second term measures Feature Leverage Amplification (h_ii / (1 - h_ii)^2).
   - Decision Boundaries:
       * D_i > 1.0: Definite influential outlier.
       * D_i > 4 / (N - p - 1): Standard threshold for medium sample sizes.


-----------------------------------------------------------------------------
4. THE DUAL PATHOLOGIES: MASKING & SWAMPING
-----------------------------------------------------------------------------
Classical parametric outlier tests (such as the standard 3-sigma Z-score test
z_i = (x_i - bar(x)) / s) suffer from two notorious mathematical failure modes:

4.1 The Masking Pathology:
   - Definition: The presence of multiple clustered outliers artificially inflates the
     sample mean bar(x) and vastly inflates the sample standard deviation s.
   - Consequence: The denominator s becomes so bloated that the computed z-scores of
     the outliers shrink below the critical threshold (e.g. |z| < 3.0), allowing the
     outliers to completely escape detection!
   - Mathematical Demonstration:
       A clean cluster of 10 points near 50 has s ≈ 1.0.
       Adding two clustered outliers at 140 and 142 causes s to explode to 35.42!
       The computed z-score of 140 becomes:
       z = (140 - 65.21) / 35.42 = 2.11 (< 3.0 threshold!).
       The clustered outliers mask themselves!

4.2 The Swamping Pathology:
   - Definition: An extreme outlier drags the sample mean bar(x) far away from the true
     population centroid.
   - Consequence: Perfectly normal, legitimate data points located on the opposite side
     of the distribution now exhibit large distances from bar(x) and are falsely flagged
     as outliers!

4.3 The Solution: Robust Statistics & Finite Sample Breakdown Point (epsilon*):
   - The Breakdown Point epsilon* is the smallest fraction of arbitrarily contaminated
     observations an estimator can tolerate before yielding an arbitrarily large error.
   - Sample Mean bar(x): epsilon* = 0 (A single point at infinity breaks the mean).
   - Sample Standard Deviation s: epsilon* = 0.
   - Sample Median: epsilon* = 0.5 (50% breakdown point!).
   - Median Absolute Deviation (MAD):
       MAD = Median( |x_i - Median(X)| )
       Consistent scale estimator: sigma_MAD = 1.4826 * MAD
       epsilon* = 0.5 (Completely immune to masking and swamping!).


-----------------------------------------------------------------------------
5. LOSS FUNCTION TOPOLOGY & ROBUST M-ESTIMATORS
-----------------------------------------------------------------------------
Machine learning models optimize an empirical risk function:
    min_theta (1/N) * Sum_{i=1}^N L(y_i, f(x_i; theta))

5.1 L2 Squared Loss (Ordinary Least Squares, Ridge, MSE):
    L_2(e) = (1/2) * e^2
    Gradient: dL_2 / de = e
    Vulnerability: The penalty grows quadratically. An outlier with residual e = 25
    produces a penalty of 312.5 and a gradient of 25. The optimizer rotates the entire
    decision plane to satisfy that single extreme instance.

5.2 L1 Absolute Loss (Median Regression, Quantile Loss):
    L_1(e) = |e|
    Gradient: dL_1 / de = sign(e) in {-1, +1}
    Robustness: An outlier with residual e = 25 exerts the exact same gradient (+1)
    as a point with residual e = 0.1! Bounded influence on parameter updates.

5.3 Huber Loss (The Best of Both Worlds):
    L_delta(e) =
        (1/2) * e^2                       if |e| <= delta
        delta * (|e| - (1/2) * delta)     if |e| > delta
    Behavior: Becomes smooth quadratic L2 near the origin (|e| <= delta) ensuring
    rapid convergence, and switches to linear L1 in the tails (|e| > delta) to bound
    the influence of extreme outliers.


-----------------------------------------------------------------------------
6. MACHINE LEARNING MODEL SENSITIVITY MATRIX
-----------------------------------------------------------------------------
- Extremely Vulnerable:
  * OLS Linear Regression & Logistic Regression: Quadratic loss forces slope rotation.
  * K-Means Clustering: Cluster centroids are arithmetic means; a single outlier pulls
    a centroid into empty space.
  * Principal Component Analysis (PCA): Maximizes empirical variance; the first principal
    component aligns with the direction of the outlier.
  * Neural Networks with MSE Loss: Exploding loss gradients during backpropagation.

- Moderately Sensitive:
  * Support Vector Machines (SVM): Outliers in the margin become support vectors.
    Mitigated by tuning the soft-margin regularization parameter C.
  * K-Nearest Neighbors (KNN): Outliers distort local distance calculations for test points.

- Highly Robust:
  * Decision Trees (CART), Random Forest, XGBoost: Splitting criterion depends on
    rank-order sorting of feature values. An extreme outlier at 10,000 is partitioned
    into an isolated leaf node without affecting splits on the remaining data.
  * Quantile Regression / Median Estimators: Zero sensitivity to tail extremity.


-----------------------------------------------------------------------------
7. REGIONAL WEST BENGAL INDUSTRIAL CASE STUDIES
-----------------------------------------------------------------------------
Case 1: Salt Lake Sector V FinTech Executive Salary Modeling
- Setting: Automated compensation benchmarking portal for IT professionals.
- Problem: Founders and VPs drawing executive salaries (75 to 120 LPA) mixed with
  software developers (6 to 18 LPA). OLS regression yielded an inflated base salary
  slope (+5.6 LPA/yr), causing junior candidates to demand unrealistic compensation.
- Implementation: Calculated Cook's Distance D_i. Records with D_i > 4/(N - p - 1)
  were flagged as high-influence leadership outliers and modeled in a separate executive tier.

Case 2: Alipore Meteorological Observatory Weather Telemetry
- Setting: IMD Kolkata regional climate monitoring network.
- Problem: Sensor malfunction transmitted 38.5°C in mid-January. A global point outlier
  detector failed because 38.5°C is well within the annual maximum temperature range
  observed during May heatwaves.
- Implementation: Contextual Outlier detection partitioning readings by Month and Season.
  Conditioned on January, 38.5°C registered an 8-sigma conditional divergence.

Case 3: Howrah Bridge Traffic Density Telemetry
- Setting: Smart city automated traffic management at Howrah Station approach.
- Problem: Speed sensors periodically reported 0 km/h during traffic signal red cycles.
  Simple threshold filters generated false congestion alarms 200 times per day.
- Implementation: Collective Outlier detection using sliding temporal windows. An isolated
  zero speed was ignored; only continuous sequences of zero speed exceeding 15 minutes
  triggered city-level emergency diversion protocols.

Case 4: Kolkata Municipal Corporation (KMC) Commercial Real Estate Tax Assessment
- Setting: Commercial property valuation across Park Street and Sector V.
- Problem: Clustered ultra-luxury commercial towers created severe Masking in standard
  Z-score filters, hiding delinquent tax assessments.
- Implementation: Replaced sample mean and standard deviation with Robust Median Absolute
  Deviation (MAD), detecting 412 masked commercial assessment anomalies.


-----------------------------------------------------------------------------
8. PRODUCTION PITFALLS & ARCHITECTURAL ANTI-PATTERNS
-----------------------------------------------------------------------------
Pitfall 1: The Blind Deletion Fallacy
- Immediately deleting all detected outliers discards genuine business anomalies (fraud,
  cyberattacks, system crashes).
- Best Practice: Classify outliers into errors (delete/correct) vs authentic domain
  phenomena (retain, flag, or separate).

Pitfall 2: The Z-Score Masking Trap
- Using classical Z-score filtering (bar(x) +/- 3s) on multimodal or heavily contaminated
  datasets fails completely because outliers inflate s.
- Best Practice: Always deploy Median Absolute Deviation (MAD) or Tukey IQR fences.

Pitfall 3: The Tree Invariance Misconception
- Believing tree models are 100% immune to outliers. While trees are robust to feature
  outliers, extreme target outliers in regression trees (e.g. predicting price with MSE
  criterion) still heavily inflate leaf predictions.


-----------------------------------------------------------------------------
9. MAKAUT BCAC701B EXAM PREPARATION: VIVA-VOCE QUESTIONS & ANSWERS
-----------------------------------------------------------------------------
Q1: State Hawkins' definition of an outlier.
A1: An outlier is an observation which deviates so much from other observations as to
    arouse suspicions that it was generated by a different mechanism.

Q2: What is the difference between a High Leverage point and an Influential point?
A2: A High Leverage point is extreme in the predictor space X (measured by h_ii). An
    Influential point possesses both high leverage AND a large residual in Y (measured
    by Cook's Distance), causing significant displacement of model parameters when deleted.

Q3: Explain the concepts of Masking and Swamping.
A3: Masking occurs when multiple clustered outliers inflate the sample standard deviation,
    reducing their z-scores and hiding themselves from detection. Swamping occurs when an
    outlier pulls the sample mean, causing normal observations to be falsely flagged.

Q4: What is the breakdown point of the sample mean compared to the sample median?
A4: The sample mean has a breakdown point of 0% (a single corrupted point can pull the
    mean to infinity). The sample median has a finite-sample breakdown point of 50%.

Q5: Why is Huber loss preferred over L2 loss when outliers are present in regression?
A5: Huber loss is quadratic near the origin (ensuring smooth derivative convergence) but
    becomes linear in the tails (|e| > delta), bounding the gradient and preventing
    extreme outliers from dominating parameter updates.
=============================================================================
`,de=[{id:1,tier:"Tier 1: Foundation & Terminology",question:"According to Douglas M. Hawkins (1980), what is the formal definition of an outlier?",options:["Any numerical value that lies outside the range of 0 to 1.","An observation which deviates so much from other observations as to arouse suspicions that it was generated by a different mechanism.","A missing value that was improperly imputed using the mode.","A data point that occurs in the training set but not in the testing set."],correctIndex:1,explanation:"Hawkins' canonical 1980 definition states: 'An outlier is an observation which deviates so much from other observations as to arouse suspicions that it was generated by a different mechanism.' It emphasizes that outliers are not merely extreme values, but potential signatures of alternate data-generating processes.",practicalTip:"Never treat all outliers as data entry errors; in fraud detection and medical diagnostics, the outlier IS the target signal.",codeSnippet:`# Identifying potential Hawkins outliers via z-score threshold
outliers = df[np.abs(stats.zscore(df['feature'])) > 3.0]`,examRelevance:"MAKAUT BCAC701B Core Theory & Viva-Voce"},{id:2,tier:"Tier 1: Foundation & Terminology",question:"What is the defining distinction between a 'Point Outlier' and a 'Contextual Outlier'?",options:["Point outliers occur only in text data, while contextual outliers occur only in images.","A point outlier deviates from the entire global distribution of the dataset, whereas a contextual outlier is anomalous only within a specific context (such as time, season, or location).","Point outliers cannot be detected, whereas contextual outliers are always exact integers.","A point outlier has zero residual, whereas a contextual outlier has infinite variance."],correctIndex:1,explanation:"A point outlier is globally anomalous regardless of context (e.g., an individual earning ₹ 90 LPA in an entry-level cohort). A contextual outlier is only anomalous conditioned on background attributes: for example, 38°C is normal in Kolkata during May (Summer), but 38°C in Kolkata during January (Winter) is an extreme contextual outlier.",practicalTip:"To detect contextual outliers, partition data into contextual strata (e.g. `groupby(['season', 'location'])`) before computing deviation metrics.",codeSnippet:`# Contextual anomaly detection using group statistics
df['group_mean'] = df.groupby('season')['temperature'].transform('mean')
df['group_std'] = df.groupby('season')['temperature'].transform('std')
df['context_z'] = (df['temperature'] - df['group_mean']) / df['group_std']`,examRelevance:"MAKAUT Time-Series & Anomaly Detection Curriculum"},{id:3,tier:"Tier 1: Foundation & Terminology",question:"Which of the following scenarios describes a 'Collective Outlier'?",options:["A single transaction of ₹ 1,00,00,000 on an Indian debit card.","A sequence of 20 consecutive heart rate readings of exactly 70 bpm in an ICU patient where normal readings exhibit continuous beat-to-beat variability (flatline/sensor freeze).","A student scoring 98% on a difficult machine learning exam.","An employee whose work experience is entered as a negative number."],correctIndex:1,explanation:"A collective outlier consists of a collection of data points whose individual values are completely normal (70 bpm is a normal resting heart rate), but whose joint occurrence or sequence as a group is anomalous (zero variability over time indicates a sensor disconnection or cardiac arrest).",practicalTip:"Collective outliers require windowing techniques (sliding windows, autocorrelation, or sequential Markov models) rather than point-by-point filtering.",codeSnippet:`# Detecting collective flatlines via rolling standard deviation
df['rolling_std'] = df['ecg_signal'].rolling(window=20).std()
flatlines = df[df['rolling_std'] == 0.0]`,examRelevance:"IoT Telemetry & Signal Processing Machine Learning"},{id:4,tier:"Tier 1: Foundation & Terminology",question:"What is the difference between a 'High Leverage Point' and an 'Influential Point' in linear regression?",options:["High leverage points only affect classification models, while influential points affect regression.","A high leverage point is extreme in the predictor space X; an influential point possesses both high leverage AND a large residual in Y, causing substantial changes to model coefficients when removed.","High leverage points always have Cook's Distance greater than 10, while influential points have Cook's distance equal to 0.","There is no difference; they are synonymous terms."],correctIndex:1,explanation:"Leverage (h_ii) measures extremity purely in feature space X. An observation can have high leverage but still lie perfectly along the regression line, causing zero rotation of the fitted slope. It becomes 'Influential' only when it also possesses a large residual, exerting immense torque on parameter estimates.",practicalTip:"A high-leverage point with near-zero residual actually *strengthens* the regression fit; do not blindly delete points just because leverage h_ii is high.",codeSnippet:`# In statsmodels:
# influence = model.get_influence()
# leverage = influence.hat_matrix_diag
# cooks_d = influence.cooks_distance[0]`,examRelevance:"Regression Diagnostics & Econometrics Foundations"},{id:5,tier:"Tier 1: Foundation & Terminology",question:"What does Cook's Distance (D_i) quantify in regression analysis?",options:["The Euclidean distance between two independent variables.","The aggregate shift in fitted values across ALL observations when observation i is omitted from the model.","The culinary cooking time required to train a deep neural network.","The difference between the training loss and the validation loss."],correctIndex:1,explanation:"Cook's Distance measures the overall influence of observation i by calculating the normalized sum of squared changes in all predicted values y_hat when the model is refitted without observation i: D_i = sum_j (y_hat_j - y_hat_j(i))^2 / (p * MSE).",practicalTip:"Points with Cook's Distance D_i > 4 / (N - p - 1) or D_i > 1.0 require manual audit as they heavily dominate model parameter estimates.",codeSnippet:`# Calculate Cook's Distance threshold
threshold = 4.0 / (len(df) - num_features - 1)
influential = df[cooks_d > threshold]`,examRelevance:"MAKAUT Model Diagnostics & Applied Statistics"},{id:6,tier:"Tier 1: Foundation & Terminology",question:"What is the 'Finite Sample Breakdown Point' of an estimator, and what is the breakdown point of the sample arithmetic mean?",options:["The point at which a computer program runs out of memory; mean is 100%.","The smallest proportion of arbitrarily corrupted observations an estimator can tolerate before yielding an arbitrarily large estimate; the sample mean has a breakdown point of 0%.","The training epoch where validation loss begins to diverge; mean is 50%.","The percentage of missing values a dataset can tolerate; mean is 25%."],correctIndex:1,explanation:"The breakdown point epsilon* measures robustness against contamination. The arithmetic mean has epsilon* = 0 because replacing just ONE single observation with +infinity causes the mean to become infinite. In contrast, the sample median has a 50% breakdown point.",practicalTip:"When datasets are prone to heavy-tailed contamination (e.g. financial returns or web traffic), replace the mean with robust estimators like the Median or Truncated Mean.",codeSnippet:`# Breakdown point comparison:
# Mean: epsilon* = 0
# Median: epsilon* = 0.5 (tolerates up to 50% extreme corruption)`,examRelevance:"Robust Statistics & Mathematical Estimation Theory"},{id:7,tier:"Tier 1: Foundation & Terminology",question:"What is the primary difference between 'Noise' and an 'Outlier'?",options:["Noise is measured in decibels, while outliers are measured in centimeters.","Noise is unsystematic, low-amplitude random background variation inherent to measurement, whereas an outlier is a rare, high-divergence point that may indicate an alternate generating process.","Noise can be removed, but outliers can never be identified.","Noise only occurs in unsupervised learning."],correctIndex:1,explanation:"Noise is ubiquitous, low-amplitude variance that affects all observations equally (e.g., slight thermal jitter in a thermometer). An outlier is an acute, high-amplitude divergence that stands out distinctly from the general background distribution.",practicalTip:"Smoothing filters (like rolling moving averages) attenuate noise, but require specialized outlier filters (like Hampel or Median filters) to handle acute spikes.",codeSnippet:"# Moving average smooths noise; median filter rejects outlier spikes",examRelevance:"Data Cleaning Principles & Signal Processing"},{id:8,tier:"Tier 1: Foundation & Terminology",question:"Why are tree-based algorithms (Decision Trees, Random Forests, XGBoost) generally considered robust to feature outliers?",options:["Because trees convert all continuous numbers into categorical text before training.","Because tree splitting criteria rely solely on the rank order of feature values, meaning an extreme point at 1,000,000 is simply assigned to an isolated leaf without distorting splits on the remaining data.","Because trees automatically run z-score filtering inside every node.","Because decision trees do not use feature variables to make predictions."],correctIndex:1,explanation:"Tree algorithms identify threshold splits based on sorted ranks: `if x <= threshold`. Whether an extreme outlier has value 50 or 50,000,000, it falls on the same side of the split and occupies an edge partition, having zero influence on the thresholds chosen for the rest of the distribution.",practicalTip:"If your dataset contains severe feature outliers that cannot be easily pruned, tree-based models often outperform linear models or neural networks out of the box.",codeSnippet:"# XGBoost and LightGBM handle extreme feature values gracefully due to rank-based splitting",examRelevance:"MAKAUT Machine Learning Algorithm Comparison"},{id:9,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is the statistical phenomenon of 'Masking' in classical parametric outlier detection?",options:["When an engineer masks data using encryption.","When the presence of multiple clustered outliers artificially inflates the sample standard deviation, shrinking their individual z-scores below the detection threshold and hiding them from discovery.","When categorical variables are encoded using binary masks.","When outliers occur only in hidden layers of a neural network."],correctIndex:1,explanation:"In masking, a group of extreme outliers artificially inflates the sample variance s^2. Because s appears in the denominator of the z-score formula z = (x - mean) / s, the inflated denominator reduces the z-score of the outliers below 3.0, allowing them to escape detection.",practicalTip:"Avoid classical z-score testing when multiple outliers are suspected; use Median Absolute Deviation (MAD), which is immune to masking.",codeSnippet:`# Masking demonstration:
# Clustered outliers at 140, 142 inflate stdev from 1.0 to 35.42
# Resulting z-score is 2.11 (< 3.0), failing detection!`,examRelevance:"MAKAUT Multivariate Statistics & Outlier Failure Modes"},{id:10,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is the statistical phenomenon of 'Swamping'?",options:["When a dataset has more features than samples (p > N).","When an extreme outlier drags the sample mean so far toward itself that normal, legitimate observations on the opposite side of the distribution are falsely classified as outliers.","When computer memory is overwhelmed by large CSV files.","When an algorithm fails to converge within 1,000 iterations."],correctIndex:1,explanation:"Swamping is the converse of masking: a single massive outlier pulls the sample mean bar(x) toward the tail. Legitimate observations near the opposite end of the distribution now find themselves far from the distorted mean, resulting in high z-scores that cause them to be falsely discarded.",practicalTip:"Swamping leads to severe data loss because clean, valid observations are mistakenly thrown away.",codeSnippet:`# Swamping: Mean is dragged from 10 to 35 by one extreme value.
# A legitimate value of 8 now has an inflated distance |8 - 35| = 27!`,examRelevance:"Statistical Diagnostic Theory & Quality Auditing"},{id:11,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"In the Hat Matrix H = X(X^T X)^(-1) X^T, what mathematical constraint applies to the sum of its diagonal elements h_ii?",options:["Sum_{i=1}^N h_ii = 0","Sum_{i=1}^N h_ii = p (the number of estimated regression parameters)","Sum_{i=1}^N h_ii = N^2","Sum_{i=1}^N h_ii = 1.0"],correctIndex:1,explanation:"The trace of the projection (Hat) matrix H equals the rank of the column space of X, which is p (the number of parameters, including intercept). Therefore, the average leverage across all observations is exactly p / N.",practicalTip:"Any observation with leverage h_ii > 2 * (p / N) is considered a High Leverage candidate.",codeSnippet:`N, p = X.shape
high_leverage_cutoff = (2.0 * p) / N
print(f'Leverage threshold: {high_leverage_cutoff:.4f}')`,examRelevance:"Linear Algebra in Statistics & Econometrics"},{id:12,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"How is the Median Absolute Deviation (MAD) defined, and what constant multiplier is applied to make it a consistent estimator of standard deviation for normal distributions?",options:["MAD = Mean(|x - mean|); multiplier = 2.0.","MAD = Median( |x_i - Median(X)| ); multiplier = 1.4826.","MAD = Max(x) - Min(x); multiplier = 0.5.","MAD = Variance(X) / 2; multiplier = 3.1415."],correctIndex:1,explanation:"MAD is the median of absolute deviations from the sample median: MAD = Median(|x_i - Median(X)|). For a standard normal distribution, the 75th percentile is approximately 0.6745 * sigma, so 1 / 0.6745 ≈ 1.4826. Thus, 1.4826 * MAD provides a robust, consistent estimate of sigma.",practicalTip:"Use `1.4826 * MAD` instead of sample standard deviation whenever data might contain up to 50% contamination.",codeSnippet:`import numpy as np
def robust_mad_sigma(x):
    med = np.median(x)
    mad = np.median(np.abs(x - med))
    return 1.4826 * mad`,examRelevance:"MAKAUT Robust Statistics Curriculum"},{id:13,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is the mathematical formulation of Huber Loss L_delta(e), and how does it balance robustness and efficiency?",options:["L_delta(e) = e^4 for all e.","L_delta(e) = (1/2)*e^2 for |e| <= delta, and delta*(|e| - (1/2)*delta) for |e| > delta.","L_delta(e) = log(1 + e^2) / delta.","L_delta(e) = |e| / delta for all e."],correctIndex:1,explanation:"Huber loss is hybrid: for small residuals (|e| <= delta), it behaves like L2 squared loss (smooth, quadratic, fast gradient descent convergence); for large outlier residuals (|e| > delta), it switches to linear L1 loss, bounding the derivative to +/- delta so outliers cannot exert infinite influence.",practicalTip:"Use Huber Regressor (`from sklearn.linear_model import HuberRegressor`) when fitting linear models on uncleaned datasets.",codeSnippet:`from sklearn.linear_model import HuberRegressor
model = HuberRegressor(epsilon=1.35)
model.fit(X, y)`,examRelevance:"Convex Optimization & M-Estimators in ML"},{id:14,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"In simple linear regression, if an observation has an x-value exactly equal to the sample mean bar(x), what is its leverage h_ii?",options:["h_ii = 1.0","h_ii = 1 / N","h_ii = 0.0","h_ii = infinity"],correctIndex:1,explanation:"The formula for leverage in simple linear regression is h_ii = (1/N) + [(x_i - bar(x))^2 / SS_xx]. If x_i = bar(x), the second term vanishes, leaving h_ii = 1 / N, which is the absolute minimum possible leverage an observation can possess.",practicalTip:"Points near the centroid of the feature space have minimal leverage and cannot tilt the regression line, even if their target residual is large.",codeSnippet:`# At x_i = mean_x:
# h_ii = 1/N + 0/SS_xx = 1/N`,examRelevance:"Regression Theory & Hat Matrix Mechanics"},{id:15,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is 'Studentized Residual' (r_i) and why is it preferred over ordinary raw residual (e_i = y_i - y_hat_i) for outlier diagnosis?",options:["Studentized residuals are only used when analyzing college student exam scores.","Studentized residuals divide raw residuals by their individual standard errors: r_i = e_i / [ sqrt(MSE * (1 - h_ii)) ], accounting for the fact that high-leverage points naturally force fitted lines toward themselves, resulting in deceptively small raw residuals.","Studentized residuals round all residuals to the nearest integer.","Studentized residuals convert negative errors to zero."],correctIndex:1,explanation:"Ordinary residuals have unequal variances: Var(e_i) = MSE * (1 - h_ii). Because high-leverage points (h_ii near 1) pull the regression line toward themselves, their raw residuals appear artificially small! Studentizing divides by sqrt(1 - h_ii) to equalize variance across all points.",practicalTip:"Always inspect Studentized residuals (|r_i| > 2.5 or 3.0) rather than raw residuals when checking for regression outliers.",codeSnippet:`# Internally studentized residual:
# r_i = e_i / (s * np.sqrt(1.0 - h_ii))`,examRelevance:"Applied Regression Analysis & Model Validation"},{id:16,tier:"Tier 2: Mathematical & Algorithmic Mechanics",question:"What is the relationship between Cook's Distance D_i, the studentized residual r_i, and leverage h_ii?",options:["D_i = r_i + h_ii","D_i = (1 / p) * r_i^2 * [ h_ii / (1 - h_ii) ]","D_i = r_i * log(h_ii)","D_i = (r_i / h_ii)^2"],correctIndex:1,explanation:"Cook's distance is the product of two components: the squared studentized residual r_i^2 (measuring target extremity) and the leverage ratio h_ii / (1 - h_ii) (measuring feature extremity), scaled by 1/p. If either component is small, D_i remains small.",practicalTip:"This decomposition proves why a point must have BOTH high leverage AND large residual to become influential.",codeSnippet:`# Cook's D decomposition:
# D_i = (r_studentized**2 / p) * (h_ii / (1 - h_ii))`,examRelevance:"MAKAUT BCAC701B Advanced Diagnostics"},{id:17,tier:"Tier 3: Machine Learning System Design & Engineering",question:"In training a Principal Component Analysis (PCA) pipeline for Kolkata Metro passenger flow, a massive outlier is present in the training set. How does PCA react to this outlier?",options:["PCA automatically drops the outlier during the SVD step.","PCA maximizes empirical variance, causing the first principal component to align directly with the direction of the outlier, distorting the entire projection subspace for the remaining normal data.","PCA rotates the coordinate system to eliminate the outlier's dimensions.","PCA eigenvalues become negative."],correctIndex:1,explanation:"PCA seeks orthogonal axes that maximize sample variance: max w^T (X^T X) w. Because an extreme outlier contributes massive squared distance to the covariance matrix, the principal eigenvector is pulled directly toward the outlier, wasting the primary projection component.",practicalTip:"Use Robust PCA (e.g. Principal Component Pursuit via L1 matrix decomposition) when dimensionality reduction must handle corrupted observations.",codeSnippet:`# Standard PCA is sensitive to outliers; use RobustPCA or MinCovDet covariance:
from sklearn.covariance import MinCovDet
robust_cov = MinCovDet().fit(X)`,examRelevance:"Unsupervised Learning & Dimensionality Reduction Pitfalls"},{id:18,tier:"Tier 3: Machine Learning System Design & Engineering",question:"A data engineer runs Min-Max Normalization: x_scaled = (x - x_min) / (x_max - x_min) on an income column where 99% of people earn ₹ 5 to 20 LPA, but one executive earns ₹ 500 LPA. What happens to the normalized features of normal people?",options:["Normal people's features are scaled uniformly between 0.0 and 1.0.","All normal people's features are compressed into a tiny, narrow band near zero (e.g. 0.00 to 0.03), severely diminishing gradient updates and destroying feature resolution for downstream neural networks.","The normalization function throws an arithmetic overflow error.","The executive's value is capped at 10.0."],correctIndex:1,explanation:"Because x_max = 500, the denominator (500 - 5 = 495) is massive. An engineer earning 15 LPA is scaled to (15 - 5)/495 = 0.0202. The entire regular population is squashed into a tiny cluster near zero, causing severe vanishing gradients in neural networks.",practicalTip:"Never use Min-Max scaling on unclipped heavy-tailed distributions; use RobustScaler (centering on median, scaling by IQR) or QuantileTransformer.",codeSnippet:`# SAFE PRACTICE:
from sklearn.preprocessing import RobustScaler
scaler = RobustScaler()  # Uses median and IQR, unaffected by 500 LPA outlier
X_scaled = scaler.fit_transform(X)`,examRelevance:"Feature Scaling & Neural Network Preprocessing"},{id:19,tier:"Tier 3: Machine Learning System Design & Engineering",question:"Why does the K-Means clustering algorithm exhibit extreme vulnerability to outliers?",options:["Because K-Means uses L1 Manhattan distance.","Because cluster centroids are updated by computing the arithmetic mean of all assigned points (which has a 0% breakdown point), allowing a single outlier to pull a centroid away from the true cluster core into empty space.","Because K-Means can only find clusters shaped like rectangles.","Because K-Means requires all data to be normalized with Z-scores."],correctIndex:1,explanation:"In Lloyd's algorithm, the new centroid is mu_k = (1 / N_k) sum_{x in C_k} x. The arithmetic mean has a breakdown point of 0%. An extreme point pulls the centroid towards itself, often forming a singleton cluster dedicated entirely to that one outlier.",practicalTip:"Use K-Medoids (PAM) or DBSCAN when clustering noisy data, as medoids choose actual median data points and DBSCAN explicitly labels low-density points as noise (-1).",codeSnippet:`# Robust clustering alternative: DBSCAN
from sklearn.cluster import DBSCAN
clustering = DBSCAN(eps=1.5, min_samples=5).fit(X)
# Outliers are assigned label -1`,examRelevance:"MAKAUT Unsupervised Learning Curriculum"},{id:20,tier:"Tier 3: Machine Learning System Design & Engineering",question:"In training a Deep Neural Network for tabular regression, an extreme target outlier with residual e = 50 is processed under Mean Squared Error (MSE) loss. What is the impact on backpropagation?",options:["The gradient for that batch is zero.","The loss gradient with respect to output is dL/dy_hat = -(y - y_hat) = -50, producing an explosive gradient update that can destabilize weights across all preceding layers (Exploding Gradient).","The neural network will automatically convert to a random forest.","The learning rate will be multiplied by 0.5."],correctIndex:1,explanation:"Under MSE loss L = (1/2)(y - y_hat)^2, the gradient scales linearly with the residual: grad = -(y - y_hat). An outlier with residual 50 produces a gradient 500x larger than a normal point with residual 0.1, overwhelming the batch update and knocking neural weights out of their optimal basins.",practicalTip:"In neural regression, use Huber Loss (`SmoothL1Loss` in PyTorch) or gradient clipping (`clip_grad_norm_`) to prevent outlier-induced gradient explosion.",codeSnippet:`# PyTorch Huber loss:
# criterion = torch.nn.SmoothL1Loss(beta=1.0)`,examRelevance:"Deep Learning Optimization & Loss Functions"},{id:21,tier:"Tier 3: Machine Learning System Design & Engineering",question:"In a real-time credit card fraud detection system in Kolkata, why must the ML pipeline NEVER simply delete detected outliers during preprocessing?",options:["Because deleting data is illegal under Indian tax law.","Because the outliers ARE the fraudulent transactions! Discarding them deletes the actual positive minority class target, making it impossible to train or evaluate fraud detectors.","Because the SQL database will crash if rows are deleted.","Because credit cards only process integer numbers."],correctIndex:1,explanation:"In anomaly detection domains (fraud, cybersecurity, turbine failures, rare diseases), outliers represent the exact target phenomenon of interest. Deleting them destroys the minority class instances, leaving the model blind to attacks.",practicalTip:"Separate 'Contaminants' (bad data to clean) from 'Anomalies' (rare business events to predict).",codeSnippet:"# In fraud detection: Outlier == True Target Label (y = 1)",examRelevance:"Production Fraud Detection & Imbalanced Learning"},{id:22,tier:"Tier 3: Machine Learning System Design & Engineering",question:"When evaluating regression trees (such as CART in DecisionTreeRegressor), how can an outlier in the TARGET variable Y still cause distortion despite tree feature-split robustness?",options:["It cannot; trees are 100% immune to target outliers.","The leaf node prediction in regression trees is the arithmetic mean of all target values landing in that leaf; an extreme target outlier will heavily pull the leaf prediction upward, generating inflated predictions for normal samples assigned to that same leaf.","It causes the tree to produce negative depths.","It turns the regression tree into a classification tree."],correctIndex:1,explanation:"While decision trees are invariant to monotonic transformations in features X, standard regression trees compute leaf predictions as the mean of target Y. If a leaf contains 4 normal points (value 10) and 1 extreme outlier (value 1000), the leaf predicts (40 + 1000)/5 = 208, heavily mis-predicting for the 4 normal points.",practicalTip:"To make regression trees robust to target outliers, use Gradient Boosting with MAE or Huber loss (e.g. `loss='huber'` in GradientBoostingRegressor).",codeSnippet:`from sklearn.ensemble import GradientBoostingRegressor
model = GradientBoostingRegressor(loss='huber')  # Robust to target outliers`,examRelevance:"Tree-Based Regression Architecture & Loss Selection"},{id:23,tier:"Tier 3: Machine Learning System Design & Engineering",question:"What is 'Winsorization' and how does it differ from raw outlier trimming?",options:["Winsorization converts text data into numbers.","Raw trimming discards the outlier rows entirely, whereas Winsorization caps extreme values at a specified percentile threshold (e.g. setting all values above the 99th percentile to the 99th percentile value), preserving sample size N.","Winsorization calculates the square root of all features.","Winsorization is only used in Windows operating systems."],correctIndex:1,explanation:"Winsorization (developed by Charles P. Winsor) clamps extreme tail values to designated percentiles (e.g., 1st and 99th percentiles). Unlike trimming, no rows are dropped, retaining full sample size while bounding the maximum leverage any observation can exert.",practicalTip:"Use `scipy.stats.mstats.winsorize` to bound tail influence without losing degrees of freedom.",codeSnippet:`from scipy.stats import mstats
# Cap bottom 1% and top 1% of data:
winsorized_data = mstats.winsorize(df['income'], limits=[0.01, 0.01])`,examRelevance:"Feature Engineering & Data Preprocessing Techniques"},{id:24,tier:"Tier 3: Machine Learning System Design & Engineering",question:"In streaming time-series monitoring of Kolkata water supply pipelines, a pressure sensor drops to 0 PSI for exactly one 50-millisecond reading due to network packet drop, then resumes 60 PSI. What filter architecture cleans this without inducing latency?",options:["Retraining an XGBoost model every 50 milliseconds.","A 1D Median Filter of window size 3 or 5, which naturally rejects single-point impulse noise spikes while preserving sharp legitimate edge transitions.","Deleting the entire time series.","Running a high-pass Fourier transform."],correctIndex:1,explanation:"Median filters are the gold standard for removing impulse noise (salt-and-pepper noise in vision, single-sample dropouts in time series). For sequence [60, 60, 0, 60, 60], the median of window [60, 0, 60] is 60, cleanly suppressing the 0 drop without blurring the signal.",practicalTip:"Use `scipy.ndimage.median_filter` for ultra-fast, zero-overhead stream cleaning.",codeSnippet:`from scipy.ndimage import median_filter
clean_pressure = median_filter(raw_pressure, size=3)`,examRelevance:"Time-Series Signal Cleaning & Edge Computing"},{id:25,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"What is the Minimum Covariance Determinant (MinCovDet) estimator and why is it essential for detecting multivariate outliers in high dimensions?",options:["A sorting algorithm for square matrices.","A highly robust estimator of multivariate location and scatter that finds the subset of h observations (out of N) whose classical covariance matrix has the smallest determinant, achieving up to a 50% breakdown point.","An algorithm that sets all off-diagonal covariance terms to zero.","A neural network architecture that computes matrix inverses."],correctIndex:1,explanation:"Pioneered by Peter Rousseeuw, FastMCD finds the cleanest core subset of data to estimate the mean vector and covariance matrix, completely avoiding the masking pathology that corrupts standard Mahalanobis distance in multidimensional space.",practicalTip:"Use `EllipticEnvelope` or `MinCovDet` in scikit-learn for robust multivariate outlier detection.",codeSnippet:`from sklearn.covariance import MinCovDet
mcd = MinCovDet(random_state=42).fit(X)
robust_mahalanobis = mcd.mahalanobis(X)`,examRelevance:"Advanced Robust Statistics & Multivariate Outlier Detection"},{id:26,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"In financial risk modeling (e.g. credit default or market volatility), why does assuming a Normal distribution cause catastrophic under-estimation of outlier probabilities in 'Heavy-Tailed' distributions?",options:["Because normal distributions do not have an arithmetic mean.","Because the tails of a Gaussian distribution decay exponentially: P(|x - mu| > k*sigma) ~ exp(-k^2 / 2), whereas real-world financial distributions decay as a Power Law P(X > x) ~ x^(-alpha), making 5-sigma and 6-sigma 'Black Swan' events millions of times more frequent in reality.","Because normal distributions cannot handle positive numbers.","Because financial institutions only use Poisson distributions."],correctIndex:1,explanation:"Under a Gaussian bell curve, a 6-sigma event has a probability of ~1 in 500 million (once every 1.3 million years). In power-law heavy-tailed real financial markets, fat tails make extreme events happen every few years (Nassim Taleb's 'Black Swan').",practicalTip:"Fit Student-t distributions (with degrees of freedom nu <= 4) or Pareto distributions when modeling financial risk features.",codeSnippet:"# Power law tail decay: P(X > x) ~ x**(-alpha) vs Gaussian exp(-x**2)",examRelevance:"Quantitative Finance, Extreme Value Theory (EVT) & Risk ML"},{id:27,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"What is 'Isolation Forest' (iForest) and why does its algorithmic mechanism scale linearly O(N) compared to distance-based outlier methods O(N^2)?",options:["It requires isolating data on separate physical servers.","It isolates anomalies instead of profiling normal points: Because outliers are few and different, they require significantly fewer random axis-aligned partition splits to be isolated at shallow tree depths.","It computes pairwise Euclidean distances using GPU matrix shaders.","It builds a single decision tree with 1,000,000 leaves."],correctIndex:1,explanation:"Liu, Ting, and Zhou (2008) introduced Isolation Forest based on a brilliant insight: Anomalies are few and topologically sparse, so recursive random partitioning isolates them near the root of the tree (low average path length h(x)). Because it builds random trees on sub-samples, complexity is strictly linear O(N).",practicalTip:"Isolation Forest is the premier algorithm for high-dimensional, large-scale outlier detection in production.",codeSnippet:`from sklearn.ensemble import IsolationForest
clf = IsolationForest(n_estimators=100, contamination=0.01)
preds = clf.fit_predict(X)  # -1 represents outlier`,examRelevance:"Scalable Anomaly Detection & State-of-the-Art ML"},{id:28,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"In automated MLOps pipelines, what is 'Drift-Induced Outlier Explosion'?",options:["When the cooling fans on model inference servers malfunction.","When the live production data distribution shifts (Concept/Data Drift), causing previously normal observations to fall outside the historical training envelope, triggering mass false-positive outlier alarms.","When an outlier causes the database schema to change from SQL to NoSQL.","When model accuracy increases over time."],correctIndex:1,explanation:"Static outlier bounds established during training become stale over time. For example, during high-inflation periods or seasonal shopping festivals in Kolkata (Durga Puja), normal transaction amounts increase, causing static outlier detectors to flag 40% of normal transactions.",practicalTip:"Implement dynamic adaptive outlier thresholds (e.g. rolling percentiles or online streaming estimators) that evolve with seasonal drift.",codeSnippet:`# Adaptive rolling threshold:
rolling_p99 = stream.rolling(window='7D').quantile(0.99)`,examRelevance:"Production MLOps, Data Drift & System Reliability"},{id:29,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"What is 'Local Outlier Factor' (LOF) and what critical flaw of global distance metrics does it solve?",options:["It can only run on local localhost servers.","It solves the problem of varying cluster densities by comparing the local density of an object to the local densities of its k-nearest neighbors; a point in a sparse region is NOT flagged if its neighbors are equally sparse.","It calculates the global mean of the entire dataset in O(1) time.","It converts categorical variables to continuous variables."],correctIndex:1,explanation:"Global distance metrics fail when data contains clusters of different densities (e.g. Dense Cluster A in Salt Lake vs Sparse Cluster B in Sundarbans). A point near Sparse Cluster B might have a large distance to its neighbors, yet be completely normal for that cluster. LOF computes relative density ratios.",practicalTip:"Use LOF when data exhibits multiple clusters with widely divergent spreads or densities.",codeSnippet:`from sklearn.neighbors import LocalOutlierFactor
lof = LocalOutlierFactor(n_neighbors=20)
outlier_scores = lof.fit_predict(X)`,examRelevance:"Density-Based Spatial Clustering & Anomaly Theory"},{id:30,tier:"Tier 4: Advanced Production & Scalability Analysis",question:"In high-dimensional feature spaces (e.g. d > 100), why does the 'Curse of Dimensionality' cause classical distance-based outlier detection to fail completely?",options:["Because computers cannot store numbers with more than 100 decimal places.","Distance Concentration Effect: In high dimensions, the ratio of the distance to the nearest neighbor versus the farthest neighbor approaches 1: lim_{d -> inf} (d_max - d_min) / d_min = 0, rendering every point equally distant and making distance-based outlier concepts meaningless.","Because high-dimensional matrices cannot be multiplied.","Because gradient descent diverges in more than 10 dimensions."],correctIndex:1,explanation:"Beyer et al. (1999) proved the Distance Concentration Theorem: As dimensionality d grows, all pairwise Euclidean distances converge to almost the same constant value. There are no longer 'close' or 'far' points in Euclidean space.",practicalTip:"In high-dimensional spaces, use Subspace Outlier Detection, Autoencoders, or Random Projection Ensembles rather than raw Euclidean k-NN.",codeSnippet:"# In high dimensions: Use PCA/Autoencoders to project into lower d before distance checks",examRelevance:"Curse of Dimensionality & High-Dimensional Geometry"}],ce=[{id:"DEV-01",name:"Aritra Sen",exp:2.5,salary:7.2,role:"Junior Software Engineer",type:"normal"},{id:"DEV-02",name:"Pooja Mukherjee",exp:3,salary:8.5,role:"Software Engineer",type:"normal"},{id:"DEV-03",name:"Debashis Roy",exp:4,salary:10.2,role:"Software Engineer",type:"normal"},{id:"DEV-04",name:"Mousumi Das",exp:4.5,salary:11.5,role:"Senior Engineer",type:"normal"},{id:"DEV-05",name:"Tanmoy Ghosh",exp:5,salary:13,role:"Senior Engineer",type:"normal"},{id:"DEV-06",name:"Ananya Banerjee",exp:5.5,salary:14.5,role:"Tech Lead",type:"normal"},{id:"DEV-07",name:"Debangshu Mukherjee",exp:6,salary:16,role:"Tech Lead",type:"normal"},{id:"DEV-08",name:"Susmita Chakraborty",exp:7,salary:18,role:"Engineering Manager",type:"normal"},{id:"DEV-09",name:"Mahima Paul",exp:7.5,salary:19.2,role:"Engineering Manager",type:"normal"},{id:"DEV-10",name:"Siddhartha Basu",exp:8,salary:85,role:"VP of Engineering",type:"point_outlier"}],me=[{date:"2026-05-10",season:"Summer",temp:37.5,expected:"34 - 40°C",anomaly:!1},{date:"2026-05-15",season:"Summer",temp:38.8,expected:"34 - 40°C",anomaly:!1},{date:"2026-07-20",season:"Monsoon",temp:31,expected:"28 - 33°C",anomaly:!1},{date:"2026-07-25",season:"Monsoon",temp:32.2,expected:"28 - 33°C",anomaly:!1},{date:"2026-01-12",season:"Winter",temp:14.2,expected:"11 - 18°C",anomaly:!1},{date:"2026-01-18",season:"Winter",temp:15.5,expected:"11 - 18°C",anomaly:!1},{date:"2026-01-24",season:"Winter",temp:38.5,expected:"11 - 18°C",anomaly:!0,note:"Plausible in summer, impossible in winter!"}],ue=[{time:"16:00",speed:38,isAnomaly:!1},{time:"16:05",speed:35,isAnomaly:!1},{time:"16:10",speed:42,isAnomaly:!1},{time:"16:15",speed:29,isAnomaly:!1},{time:"16:20",speed:0,isAnomaly:!0},{time:"16:25",speed:0,isAnomaly:!0},{time:"16:30",speed:0,isAnomaly:!0},{time:"16:35",speed:0,isAnomaly:!0},{time:"16:40",speed:0,isAnomaly:!0},{time:"16:45",speed:22,isAnomaly:!1},{time:"16:50",speed:31,isAnomaly:!1}],q=[{term:"Hawkins Outlier Axiom",tag:"Formal Definition",desc:"Formulated in 1980: An observation which deviates so much from other observations as to arouse suspicions that it was generated by a different mechanism."},{term:"Point (Global) Outlier",tag:"Taxonomy",desc:"An individual observation that deviates markedly from the entire global distribution of the dataset (e.g. ₹ 85 LPA salary in an entry-level cohort)."},{term:"Contextual Outlier",tag:"Taxonomy",desc:"A data point that is anomalous only within a specific temporal, spatial, or demographic context (e.g. 38.5°C in Kolkata in mid-January)."},{term:"Collective Outlier",tag:"Taxonomy",desc:"A sequence or group of points whose individual values are normal, but whose joint occurrence is anomalous (e.g. 25-minute 0 km/h traffic flatline)."},{term:"High Leverage Point (h_ii)",tag:"Feature Space",desc:"An observation located far from the centroid of independent feature space X, measured by the Hat matrix diagonal h_ii = x_i^T (X^T X)^(-1) x_i."},{term:"Influential Point",tag:"Model Impact",desc:"An observation possessing BOTH high leverage in X and a large residual in Y, exerting immense torque that rotates fitted model parameters."},{term:"Cook's Distance (D_i)",tag:"Regression Metric",desc:"Aggregate shift in fitted values when observation i is omitted: D_i = (e_i^2 / p·MSE) * (h_ii / (1 - h_ii)^2). D_i > 1.0 indicates severe influence."},{term:"Masking Pathology",tag:"Statistical Failure",desc:"When multiple clustered outliers inflate the sample standard deviation, shrinking their individual Z-scores below 3.0 and hiding themselves."},{term:"Swamping Pathology",tag:"Statistical Failure",desc:"When an extreme outlier drags the sample mean so far that legitimate normal observations on the opposite side are falsely flagged as outliers."},{term:"Breakdown Point (ε*)",tag:"Robustness Theory",desc:"The smallest fraction of contaminated data an estimator can tolerate before breaking. Sample Mean has ε* = 0%, Sample Median has ε* = 50%."},{term:"Median Absolute Deviation (MAD)",tag:"Robust Scale",desc:"Median(|x_i - Median(X)|). Multiplied by 1.4826, it yields a consistent estimator of σ immune to both masking and swamping up to 50% contamination."},{term:"Huber M-Estimator",tag:"Loss Function",desc:"Hybrid robust loss: quadratic L2 near the origin (|e| ≤ δ) for fast convergence, and linear L1 in the tails (|e| > δ) to bound outlier influence."}],N=[{id:"scen-1",scenario:"Linear Regression Leverage Dilemma",question:"In a Salt Lake Sector V salary regression model (predicting Salary from Experience), a candidate has 25 years of experience (high leverage h_ii = 0.65) and earns ₹ 62 LPA. The candidate falls exactly on the regression line with residual e_i = 0.05. Is this point an 'Influential Outlier'?",options:["Yes, because any observation with leverage h_ii > 0.5 must be deleted immediately.","No; although it possesses High Leverage in feature space, its residual is near zero, meaning Cook's Distance D_i is very small and it actually stabilizes the regression fit rather than distorting it.","Yes, because 25 years of experience violates the maximum age limit of Python.","It cannot be determined without computing the Pearson correlation coefficient."],correctIndex:1,rationale:"Cook's Distance is the product of squared residual and leverage ratio: D_i ∝ e_i^2 * [h_ii / (1 - h_ii)^2]. If the residual e_i is near zero, Cook's Distance is negligible. A high-leverage point with zero residual conforms to the model and strengthens parameter precision.",mentorTip:"Sukanta Hui's Law: High leverage without high residual is an anchor of stability, not a disruptive outlier!"},{id:"scen-2",scenario:"The Masking Trap in Municipal Tax Assessments",question:"Kolkata Municipal Corporation (KMC) commercial property assessments contain three luxury hotel properties paying ₹ 50 Crores, while normal properties pay ₹ 20 to 50 Lakhs. A junior data scientist runs a 3-sigma Z-score filter: `|z| > 3.0`. The filter flags ZERO properties. What statistical failure occurred?",options:["The database had a primary key constraint error.","The Masking Pathology: The three massive commercial valuations inflated the sample standard deviation so dramatically that their own computed Z-scores shrank to ~2.1, completely evading the 3.0 threshold.","The normal distribution naturally accommodates all real estate valuations.","Pandas failed to calculate the mean of commercial properties."],correctIndex:1,rationale:"Because sample standard deviation s is sensitive to squared distances, clustered extreme outliers massively inflate s, expanding the denominator of z = (x - mean)/s and artificially suppressing outlier z-scores below 3.0. Deploying Robust MAD instantly resolves this.",mentorTip:"Never use classical Z-score filters on datasets where multiple clustered outliers are suspected; always default to MAD or Tukey IQR."},{id:"scen-3",scenario:"Tree-Based Target Outlier Distortion",question:"A machine learning engineer trains a `DecisionTreeRegressor` (with default MSE loss) to predict house prices in New Town Kolkata. The dataset contains one palatial property with a clerical error listing the price as ₹ 100 Crores instead of ₹ 1 Crore. Why does the model predict inflated prices for normal nearby houses?",options:["Because decision trees cannot process real estate data.","While tree feature splits are robust to feature outliers, leaf node predictions in regression trees compute the arithmetic mean of target values Y landing in that leaf; the ₹ 100 Cr target outlier pulls the entire leaf prediction upward.","Because XGBoost runs faster than Decision Trees.","Because the tree splits on the house color."],correctIndex:1,rationale:"Decision trees are invariant to monotonic transformations in features X, but standard regression trees predict the sample mean of Y inside each terminal leaf. A massive target outlier heavily inflates the prediction for all normal samples falling into that same leaf.",mentorTip:"To protect regression trees from target outliers, train Gradient Boosted Trees with MAE or Huber loss (`loss='huber'`)."},{id:"scen-4",scenario:"Contextual Outlier Detection Architecture",question:"An environmental IoT monitor in Kolkata records a temperature of 38.5°C on January 15. A global outlier detection model (evaluating the entire year's temperature distribution) labels this reading as 'NORMAL'. Why did the global detector fail, and what is the fix?",options:["The temperature sensor hardware was dirty.","The global detector evaluated 38.5°C against summer temperatures (where 38.5°C is routine); the fix is Contextual Outlier Detection, evaluating temperature conditioned on Season/Month.","The global detector required a 64-bit GPU.","The temperature should have been converted to Kelvin."],correctIndex:1,rationale:"Contextual outliers have normal global magnitudes but anomalous conditional probabilities. In Kolkata, 38.5°C is common in May, but physically anomalous in mid-January. Conditioning the distribution on Season or Month exposes the extreme conditional divergence.",mentorTip:"Always partition time-series and spatial data into contextual envelopes before testing for anomalies."},{id:"scen-5",scenario:"Neural Network Loss Explosion",question:"During training of a PyTorch neural network for credit limit regression, a batch containing a single outlier with residual e = 80 produces an exploding gradient that corrupts model weights across all layers. What loss function modification will prevent this?",options:["Switch from MSE Loss to Huber Loss (`torch.nn.SmoothL1Loss`), which caps the derivative to a constant bounded value for residuals |e| > delta.","Multiply all learning rates by 10x.","Convert all numbers into strings.","Disable the bias term in all linear layers."],correctIndex:0,rationale:"MSE loss derivative dL/de = e grows without bound, producing a massive gradient update of 80 that knocks weights out of optimal convergence basins. Huber loss transitions to linear L1 for |e| > delta, bounding the gradient to +/- delta and preventing explosive backpropagation.",mentorTip:"In neural tabular regression, always replace MSE with Smooth L1 (Huber) loss and enable gradient clipping."}],_e=()=>{const[A,W]=r.useState("studio"),[T,X]=r.useState("leverage"),[y,E]=r.useState(8),[j,I]=r.useState(85),[k,U]=r.useState("point"),[h,V]=r.useState("pristine"),[M,G]=r.useState(""),[C,K]=r.useState("ALL"),[b,R]=r.useState({}),[m,O]=r.useState(!1);r.useId();const i=r.useMemo(()=>{const t=[{x:2.5,y:7.2},{x:3,y:8.5},{x:4,y:10.2},{x:4.5,y:11.5},{x:5,y:13},{x:5.5,y:14.5},{x:6,y:16},{x:7,y:18},{x:7.5,y:19.2}],a=[...t,{x:y,y:j}],s=a.length,o=2,d=a.reduce((n,g)=>n+g.x,0)/s,x=a.reduce((n,g)=>n+g.y,0)/s;let f=0,w=0;a.forEach(n=>{f+=(n.x-d)**2,w+=(n.x-d)*(n.y-x)});const v=f!==0?w/f:0,_=x-v*d,S=t.reduce((n,g)=>n+g.x,0)/t.length,c=t.reduce((n,g)=>n+g.y,0)/t.length;let u=0,P=0;t.forEach(n=>{u+=(n.x-S)**2,P+=(n.x-S)*(n.y-c)});const z=u!==0?P/u:0,$=c-z*S,ee=_+v*y,H=j-ee,B=a.reduce((n,g)=>n+(g.y-(_+v*g.x))**2,0)/(s-o),L=1/s+(f!==0?(y-d)**2/f:0),F=(1-L)**2,D=F>0&&B>0?H**2/(o*B)*(L/F):0,te=L>2*o/s,ae=D>4/(s-o-1)||D>1;return{slope:v.toFixed(2),intercept:_.toFixed(2),cleanSlope:z.toFixed(2),cleanIntercept:$.toFixed(2),leverageHii:L.toFixed(3),cooksD:D.toFixed(3),residual:H.toFixed(2),isHighLeverage:te,isInfluential:ae,highLeverageThreshold:(2*o/s).toFixed(3),cooksThreshold:(4/(s-o-1)).toFixed(3)}},[y,j]),p=r.useMemo(()=>{let t=[48,49.5,50,50.2,50.8,51,49.8,50.5,49.2,51.5];h==="single"?t=[...t,140]:(h==="clustered"||h==="robust")&&(t=[...t,140,142]);const a=t.length,s=t.reduce((c,u)=>c+u,0)/a,o=t.reduce((c,u)=>c+(u-s)**2,0)/(a-1),d=Math.sqrt(o),x=[...t].sort((c,u)=>c-u),f=a%2===0?(x[a/2-1]+x[a/2])/2:x[Math.floor(a/2)],w=t.map(c=>Math.abs(c-f)).sort((c,u)=>c-u),v=a%2===0?(w[a/2-1]+w[a/2])/2:w[Math.floor(a/2)],_=(140-s)/d,S=v>0?.6745*(140-f)/v:0;return{mean:s.toFixed(1),stdev:d.toFixed(1),median:f.toFixed(1),mad:v.toFixed(2),z140:_.toFixed(2),modZ140:S.toFixed(2),isMasked:h==="clustered"&&Math.abs(_)<3}},[h]),Y=r.useMemo(()=>q.filter(t=>{const a=t.term.toLowerCase().includes(M.toLowerCase())||t.desc.toLowerCase().includes(M.toLowerCase()),s=C==="ALL"||t.tag===C;return a&&s}),[M,C]),Z=r.useMemo(()=>{const t=new Set(q.map(a=>a.tag));return["ALL",...Array.from(t)]},[]),Q=(t,a)=>{m||R(s=>({...s,[t]:a}))},J=r.useMemo(()=>{let t=0;return N.forEach(a=>{b[a.id]===a.correctIndex&&t++}),t},[b]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-7xl mx-auto pb-20 font-sans",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-5",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full shadow-inner",children:"BCAC701B • Data Types and Preprocessing • Topic 12"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Outlier Foundations & Leverage"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"MAKAUT & Gate CS Aligned"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"The Outlier Concept, Leverage & Robust Statistics"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed",children:["Explore the formal mathematical foundation of anomalies: Hawkins' 1980 axiom, the tripartite taxonomy"," ","(",e.jsx("strong",{children:"Point, Contextual, and Collective Outliers"}),"), Hat matrix leverage (h_ii), Cook's Distance (D_i), the dual statistical pathologies of ",e.jsx("strong",{children:"Masking and Swamping"}),", and Huber robust M-estimators across West Bengal tech compensation and meteorological telemetry."]}),e.jsx("div",{className:"pt-4 border-t border-indigo-800/30",children:e.jsx("nav",{className:"flex flex-wrap gap-2 text-xs sm:text-sm font-medium",children:[{id:"#novice-metaphors",label:"1. Novice Masterclass"},{id:"#taxonomy-flow",label:"2. Outlier Taxonomy"},{id:"#interactive-studio",label:"3. Outlier Studio"},{id:"#math-formulation",label:"4. Mathematical Theorems"},{id:"#masking-swamping",label:"5. Masking & Swamping"},{id:"#case-studies",label:"6. Regional Case Studies"},{id:"#diagnostic-quiz",label:"7. Diagnostic Assessment"},{id:"#production-pitfalls",label:"8. Engineering Pitfalls"},{id:"#practical-workbench",label:"9. Practical Workbench"}].map(t=>e.jsx("a",{href:t.id,className:"px-3 py-1.5 rounded-lg bg-slate-800/70 hover:bg-indigo-600 hover:text-white text-slate-300 border border-slate-700/60 transition-colors duration-150",children:t.label},t.id))})})]})]}),e.jsxs("section",{id:"novice-metaphors",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"1. Novice Masterclass: Core Intuition & Jargon Buster"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-indigo-900/40 shadow-lg space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold text-lg",children:"🏀"}),e.jsx("h3",{className:"text-lg font-bold text-indigo-200",children:"The 7-Foot Basketball Player"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["A 7-foot-tall center walking through Kolkata Metro stands out immediately in any crowd. This is a"," ",e.jsx("strong",{children:"Point Outlier"}),": an observation whose global scalar magnitude is extreme regardless of where or when you observe it."]}),e.jsx("div",{className:"text-xs text-indigo-400 font-mono bg-indigo-950/60 p-2.5 rounded-lg border border-indigo-800/40",children:"Analogy: Point Outlier = A single extreme spike on an otherwise flat terrain."})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-cyan-900/40 shadow-lg space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-lg",children:"🧥"}),e.jsx("h3",{className:"text-lg font-bold text-cyan-200",children:"The Heavy Parka in the Desert"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Wearing a thick goose-down fur jacket in North Sikkim during January is completely normal. Wearing that exact same jacket in Kolkata during a 40°C May heatwave is a ",e.jsx("strong",{children:"Contextual Outlier"}),": an observation that is abnormal only when evaluated against its contextual environment."]}),e.jsx("div",{className:"text-xs text-cyan-400 font-mono bg-cyan-950/60 p-2.5 rounded-lg border border-cyan-800/40",children:"Analogy: Contextual Outlier = Right action at the wrong time or wrong place."})]}),e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-emerald-900/40 shadow-lg space-y-3 relative overflow-hidden",children:[e.jsx("div",{className:"w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-lg",children:"💓"}),e.jsx("h3",{className:"text-lg font-bold text-emerald-200",children:"The Frozen Heartbeat Monitor"}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["A heart rate of 72 bpm is a healthy pulse for an individual second. However, an ICU monitor showing exactly 72.000 bpm with zero micro-variability for 20 minutes is a ",e.jsx("strong",{children:"Collective Outlier"}),": the individual readings are normal, but their joint sequence indicates cardiac flatline or sensor failure."]}),e.jsx("div",{className:"text-xs text-emerald-400 font-mono bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-800/40",children:"Analogy: Collective Outlier = Each musical note is in key, but played simultaneously as cacophony."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-5",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Searchable Jargon Buster (12 Core Terms)"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Filter by topic tag or search any outlier, leverage, or robust statistics concept."})]}),e.jsx("div",{className:"flex flex-wrap gap-2 w-full sm:w-auto",children:e.jsx("input",{type:"text",placeholder:"Search outlier concept...",value:M,onChange:t=>G(t.target.value),className:"bg-slate-950 border border-slate-700 text-sm px-3.5 py-1.5 rounded-lg text-white focus:outline-none focus:border-indigo-500 w-full sm:w-64"})})]}),e.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:Z.map(t=>e.jsx("button",{onClick:()=>K(t),className:l("px-3 py-1 text-xs rounded-full font-semibold transition-colors duration-150",C===t?"bg-indigo-600 text-white shadow-sm":"bg-slate-800/80 text-slate-400 hover:text-slate-200 border border-slate-700/60"),children:t},t))}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2",children:Y.map((t,a)=>e.jsx("div",{className:"bg-slate-950/70 p-4 rounded-xl border border-slate-800/80 hover:border-indigo-500/40 transition-colors duration-200 space-y-2 flex flex-col justify-between",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center justify-between gap-2 mb-1",children:[e.jsx("span",{className:"text-sm font-bold text-indigo-300",children:t.term}),e.jsx("span",{className:"text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-indigo-400 border border-slate-700",children:t.tag})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:t.desc})]})},a))})]})]}),e.jsxs("section",{id:"taxonomy-flow",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-cyan-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"2. The Outlier Taxonomy & Machine Learning Sensitivity Matrix"})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 shadow-xl bg-slate-900/90",children:e.jsxs("table",{className:"w-full text-left text-xs sm:text-sm",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-300 uppercase font-semibold text-[11px] tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-4",children:"Outlier Category"}),e.jsx("th",{className:"p-4",children:"Conditioning Envelope"}),e.jsx("th",{className:"p-4",children:"Primary Detection Engine"}),e.jsx("th",{className:"p-4",children:"Model Sensitivity"}),e.jsx("th",{className:"p-4",children:"Production Mitigation"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-4 font-bold text-indigo-300",children:["Point Outlier (Global)",e.jsx("div",{className:"text-xs text-slate-400 font-normal",children:"Scalar magnitude diverges globally"})]}),e.jsx("td",{className:"p-4 font-mono text-xs text-slate-300",children:"Unconditioned: P(X = x) < τ"}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-indigo-950 text-indigo-300 border border-indigo-800 font-mono text-xs",children:"Tukey IQR / Robust MAD / iForest"})}),e.jsxs("td",{className:"p-4",children:[e.jsx("span",{className:"text-red-400 font-semibold",children:"Extreme"}),": OLS slope tilt & K-Means centroid pull"]}),e.jsx("td",{className:"p-4 text-xs",children:"Winsorization, Trimming, or Huber Loss"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-4 font-bold text-cyan-300",children:["Contextual Outlier",e.jsx("div",{className:"text-xs text-slate-400 font-normal",children:"Anomalous only given context C"})]}),e.jsx("td",{className:"p-4 font-mono text-xs text-slate-300",children:"Conditioned: P(Y = y | X = C) < τ"}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800 font-mono text-xs",children:"Stratified Residuals / GMMs"})}),e.jsxs("td",{className:"p-4",children:[e.jsx("span",{className:"text-amber-400 font-semibold",children:"High"}),": Hidden bias within specific sub-populations"]}),e.jsx("td",{className:"p-4 text-xs",children:"Contextual stratification & conditional scaling"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30",children:[e.jsxs("td",{className:"p-4 font-bold text-emerald-300",children:["Collective Outlier",e.jsx("div",{className:"text-xs text-slate-400 font-normal",children:"Values normal; sub-sequence anomalous"})]}),e.jsx("td",{className:"p-4 font-mono text-xs text-slate-300",children:"Joint: P(x_t, x_t+1, ... x_t+k) < τ"}),e.jsx("td",{className:"p-4",children:e.jsx("span",{className:"px-2 py-0.5 rounded bg-emerald-950 text-emerald-300 border border-emerald-800 font-mono text-xs",children:"Sliding Window / LSTM / Markov"})}),e.jsxs("td",{className:"p-4",children:[e.jsx("span",{className:"text-purple-400 font-semibold",children:"Moderate"}),": Breaks time-series autoregression"]}),e.jsx("td",{className:"p-4 text-xs",children:"Median filtering & sequence smoothing"})]})]})]})})]}),e.jsxs("section",{id:"interactive-studio",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"3. Interactive Outlier Studio"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Explore regression leverage & Cook's distance, inspect the taxonomy simulator, and observe masking in real time."})]})]}),e.jsx("div",{className:"flex p-1 bg-slate-900 border border-slate-800 rounded-xl",children:[{id:"leverage",label:"Mode A: Leverage & Cook's D"},{id:"taxonomy",label:"Mode B: Taxonomy Inspector"},{id:"masking",label:"Mode C: Masking & Swamping Lab"}].map(t=>e.jsx("button",{onClick:()=>X(t.id),className:l("px-3.5 py-1.5 text-xs font-bold rounded-lg transition-all duration-150",T===t.id?"bg-indigo-600 text-white shadow":"text-slate-400 hover:text-slate-200"),children:t.label},t.id))})]}),T==="leverage"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," High Leverage vs Influential Outlier Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Drag the candidate point (Point 10) to observe how changing Feature Leverage (X) and Target Residual (Y) rotates the OLS slope and inflates Cook's Distance!"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{label:"Normal Point",x:6,y:15.5},{label:"High Leverage / Low Residual",x:12,y:30.5},{label:"Low Leverage / High Residual",x:5,y:65},{label:"Influential Outlier (VP)",x:8,y:85}].map((t,a)=>e.jsx("button",{onClick:()=>{E(t.x),I(t.y)},className:"px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-950 text-indigo-300 border border-slate-800 hover:border-indigo-500/50",children:t.label},a))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[e.jsx("span",{className:"text-slate-300 uppercase tracking-wider",children:"Point 10 Experience (Feature X):"}),e.jsxs("span",{className:"text-indigo-400 font-mono",children:[y.toFixed(1)," years"]})]}),e.jsx("input",{type:"range",min:"2.0",max:"14.0",step:"0.5",value:y,onChange:t=>E(parseFloat(t.target.value)),className:"w-full accent-indigo-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsx("span",{children:"2.0 yrs (Low Leverage)"}),e.jsx("span",{children:"5.0 yrs (Mean centroid)"}),e.jsx("span",{children:"14.0 yrs (High Leverage)"})]})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-bold",children:[e.jsx("span",{className:"text-slate-300 uppercase tracking-wider",children:"Point 10 Salary (Target Y):"}),e.jsxs("span",{className:"text-cyan-400 font-mono",children:["₹ ",j.toFixed(1)," LPA"]})]}),e.jsx("input",{type:"range",min:"5.0",max:"95.0",step:"1.0",value:j,onChange:t=>I(parseFloat(t.target.value)),className:"w-full accent-cyan-500"}),e.jsxs("div",{className:"flex justify-between text-[10px] text-slate-500 font-mono",children:[e.jsx("span",{children:"₹ 5 LPA (Entry)"}),e.jsx("span",{children:"₹ 20 LPA (Normal Senior)"}),e.jsx("span",{children:"₹ 95 LPA (Severe Outlier)"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Leverage (h_10)"}),e.jsx("span",{className:"text-2xl font-extrabold text-white font-mono",children:i.leverageHii}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Cutoff: > ",i.highLeverageThreshold]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Raw Residual (e_10)"}),e.jsxs("span",{className:"text-2xl font-extrabold text-cyan-400 font-mono",children:[i.residual," LPA"]}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"y - y_hat"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Cook's Distance (D_10)"}),e.jsx("span",{className:l("text-2xl font-extrabold font-mono",i.isInfluential?"text-red-400":"text-emerald-400"),children:i.cooksD}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Threshold: > ",i.cooksThreshold]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Fitted Slope"}),e.jsxs("span",{className:"text-2xl font-extrabold text-indigo-400 font-mono",children:[i.slope," LPA/yr"]}),e.jsxs("span",{className:"text-[10px] text-slate-500 block font-mono",children:["Clean Baseline: ",i.cleanSlope," LPA/yr"]})]})]}),e.jsx("div",{className:l("p-4 rounded-xl border flex items-center justify-between transition-all",i.isInfluential?"bg-red-950/20 border-red-500/50 text-red-200":i.isHighLeverage?"bg-amber-950/20 border-amber-500/50 text-amber-200":"bg-emerald-950/20 border-emerald-500/50 text-emerald-200"),children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xl",children:i.isInfluential?"⚠️":i.isHighLeverage?"🔍":"✔"}),e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider block",children:i.isInfluential?"INFLUENTIAL OUTLIER DETECTED (High Leverage AND Large Residual)":i.isHighLeverage?"HIGH LEVERAGE POINT (Extreme X, but fits model trajectory)":"WELL-BEHAVED OBSERVATION"}),e.jsx("span",{className:"text-xs opacity-80",children:i.isInfluential?`Cook's Distance (${i.cooksD}) exceeds threshold (${i.cooksThreshold}). The fitted slope shifted from ${i.cleanSlope} to ${i.slope}!`:"Point does not disrupt model parameter stability."})]})]})})]}),T==="taxonomy"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-cyan-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"🔬"})," The Tripartite Outlier Taxonomy in Action"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Inspect real-world telemetry from Salt Lake Sector V, Alipore Observatory, and Howrah Bridge."})]}),e.jsx("div",{className:"flex gap-2",children:[{id:"point",label:"1. Point Outlier (Salary)"},{id:"contextual",label:"2. Contextual (Weather)"},{id:"collective",label:"3. Collective (Traffic)"}].map(t=>e.jsx("button",{onClick:()=>U(t.id),className:l("px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border",k===t.id?"bg-cyan-600 text-white border-cyan-500 shadow-md":"bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200"),children:t.label},t.id))})]}),k==="point"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-xs text-slate-300",children:[e.jsx("strong",{className:"text-indigo-400 block mb-1",children:"Point Outlier Demonstration:"}),"In this cohort of 10 software engineers, notice how candidate ",e.jsx("code",{className:"text-cyan-300",children:"DEV-10 (Siddhartha Basu)"})," earns ₹ 85.0 LPA. This observation deviates across the entire global feature domain."]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"ID"}),e.jsx("th",{className:"p-3",children:"Candidate"}),e.jsx("th",{className:"p-3",children:"Role"}),e.jsx("th",{className:"p-3",children:"Experience"}),e.jsx("th",{className:"p-3",children:"Annual Salary"}),e.jsx("th",{className:"p-3",children:"Status"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:ce.map(t=>e.jsxs("tr",{className:t.type==="point_outlier"?"bg-red-950/20 text-red-200 font-bold":"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-slate-400",children:t.id}),e.jsx("td",{className:"p-3 font-sans text-white",children:t.name}),e.jsx("td",{className:"p-3 font-sans text-slate-300",children:t.role}),e.jsxs("td",{className:"p-3 text-cyan-300",children:[t.exp," yrs"]}),e.jsxs("td",{className:"p-3 text-emerald-300",children:["₹ ",t.salary.toFixed(1)," LPA"]}),e.jsx("td",{className:"p-3",children:t.type==="point_outlier"?e.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] bg-red-500/20 text-red-300 border border-red-500/40",children:"POINT OUTLIER (VP LEADERSHIP)"}):e.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:"NORMAL DISTRIBUTION"})})]},t.id))})]})})]}),k==="contextual"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-xs text-slate-300",children:[e.jsx("strong",{className:"text-cyan-400 block mb-1",children:"Contextual Outlier Demonstration:"}),"Notice that 38.5°C is completely normal in Summer. However, when the exact same 38.5°C reading occurs on ",e.jsx("strong",{children:"January 24 (Winter)"}),", it represents an extreme contextual anomaly!"]}),e.jsx("div",{className:"overflow-x-auto rounded-xl border border-slate-800 bg-slate-950",children:e.jsxs("table",{className:"w-full text-left text-xs",children:[e.jsx("thead",{className:"bg-slate-900 text-slate-400 uppercase text-[10px] tracking-wider border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Date"}),e.jsx("th",{className:"p-3",children:"Context (Season)"}),e.jsx("th",{className:"p-3",children:"Recorded Temperature"}),e.jsx("th",{className:"p-3",children:"Contextual Expected Range"}),e.jsx("th",{className:"p-3",children:"Diagnostic Verdict"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/60 font-mono",children:me.map((t,a)=>e.jsxs("tr",{className:t.anomaly?"bg-amber-950/30 text-amber-200 font-bold":"hover:bg-slate-900/40",children:[e.jsx("td",{className:"p-3 text-slate-400",children:t.date}),e.jsx("td",{className:"p-3 font-sans text-cyan-300",children:t.season}),e.jsxs("td",{className:"p-3 text-white",children:[t.temp,"°C"]}),e.jsx("td",{className:"p-3 text-slate-300",children:t.expected}),e.jsx("td",{className:"p-3 font-sans",children:t.anomaly?e.jsxs("span",{className:"px-2 py-0.5 rounded-full text-[10px] bg-amber-500/20 text-amber-300 border border-amber-500/40",children:["⚠️ CONTEXTUAL OUTLIER (",t.note,")"]}):e.jsx("span",{className:"px-2 py-0.5 rounded-full text-[10px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",children:"✔ NORMAL FOR SEASON"})})]},a))})]})})]}),k==="collective"&&e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"text-xs text-slate-300",children:[e.jsx("strong",{className:"text-emerald-400 block mb-1",children:"Collective Outlier Demonstration:"}),"Individual readings of 0 km/h occur routinely at traffic lights. However, the sequence of five consecutive 0 km/h readings between 16:20 and 16:40 represents a ",e.jsx("strong",{children:"Collective Outlier"})," (Gridlock or Sensor Freeze)."]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-2",children:ue.map((t,a)=>e.jsxs("div",{className:l("p-3 rounded-xl border text-center space-y-1",t.isAnomaly?"bg-purple-950/30 border-purple-500/60 text-purple-200 shadow-md":"bg-slate-950 border-slate-800 text-slate-300"),children:[e.jsx("span",{className:"text-[10px] text-slate-500 block font-mono",children:t.time}),e.jsxs("span",{className:"text-lg font-extrabold font-mono block",children:[t.speed," km/h"]}),e.jsx("span",{className:"text-[9px] uppercase font-bold block",children:t.isAnomaly?"COLLECTIVE":"NORMAL"})]},a))})]})]}),T==="masking"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-emerald-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-4 border-b border-slate-800",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," The Masking & Swamping Statistical Simulator"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Witness how clustered outliers inflate the sample standard deviation, causing classical Z-scores to fail, and how Robust MAD overcomes it."})]}),e.jsx("div",{className:"flex gap-2",children:[{id:"pristine",label:"1. Pristine Data (No Outliers)"},{id:"single",label:"2. Add 1 Outlier (Swamping)"},{id:"clustered",label:"3. Clustered Outliers (Masking)"}].map(t=>e.jsx("button",{onClick:()=>V(t.id),className:l("px-3 py-1.5 text-xs font-semibold rounded-lg transition-all border",h===t.id?"bg-emerald-600 text-white border-emerald-500 shadow-md":"bg-slate-950 text-slate-400 border-slate-800 hover:text-slate-200"),children:t.label},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Sample Mean"}),e.jsx("span",{className:"text-2xl font-extrabold text-white font-mono",children:p.mean}),e.jsxs("span",{className:"text-[10px] text-slate-500 block",children:["Robust Median: ",p.median]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Sample StDev (s)"}),e.jsx("span",{className:l("text-2xl font-extrabold font-mono",h!=="pristine"?"text-red-400":"text-emerald-400"),children:p.stdev}),e.jsxs("span",{className:"text-[10px] text-slate-500 block font-mono",children:["Robust MAD: ",p.mad]})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Z-Score of Outlier 140"}),e.jsx("span",{className:l("text-2xl font-extrabold font-mono",p.isMasked?"text-amber-400":"text-cyan-400"),children:h==="pristine"?"N/A":p.z140}),e.jsx("span",{className:"text-[10px] text-slate-500 block",children:"Threshold: |z| ≥ 3.0"})]}),e.jsxs("div",{className:"bg-slate-950/80 p-4 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[11px] font-bold text-slate-400 uppercase tracking-wider block",children:"Modified MAD Z-Score"}),e.jsx("span",{className:"text-2xl font-extrabold text-emerald-400 font-mono",children:h==="pristine"?"N/A":p.modZ140}),e.jsx("span",{className:"text-[10px] text-slate-500 block font-mono",children:"Immune to Masking!"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-emerald-900/40 text-xs text-slate-300 space-y-2",children:[e.jsx("strong",{className:"text-emerald-400 block mb-1",children:"Mathematical Demonstration of Masking:"}),h==="clustered"?e.jsxs("p",{children:["Notice what just happened! The addition of the clustered outliers (140 and 142) exploded the sample standard deviation from ",e.jsx("code",{className:"text-cyan-300",children:"1.0"})," up to ",e.jsx("code",{className:"text-red-400",children:p.stdev}),"! Because the standard deviation is in the denominator, the classical Z-score for 140 shrivels to ",e.jsx("code",{className:"text-amber-300 font-bold",children:p.z140}),", which is ",e.jsx("strong",{children:"LESS THAN the 3.0 threshold"}),"! Classical Z-score completely misses both outliers due to ",e.jsx("strong",{children:"Masking"}),". In contrast, the Modified Robust Z-score is ",e.jsx("code",{className:"text-emerald-400 font-bold",children:p.modZ140}),", catching them effortlessly!"]}):e.jsxs("p",{children:["Switch to ",e.jsx("strong",{children:"3. Clustered Outliers (Masking)"})," above to watch classical Z-scores fail as multiple outliers inflate the sample variance!"]})]})]})]}),e.jsxs("section",{id:"math-formulation",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"4. Mathematical Formulations & Theoretical Proofs"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-indigo-300 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," 1. The Hawkins Outlier Axiom"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-indigo-950 font-mono text-xs text-indigo-200 overflow-x-auto",children:"x_i is an outlier ⟺ P(X = x_i | θ) < τ  ∨  D_M(x_i) > χ²_{p, 1-α}"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Outliers inhabit low-density tails of the generating distribution. In multivariate Gaussian spaces, Hawkins outliers exceed the critical chi-square boundary of the Mahalanobis distance."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-cyan-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔄"})," 2. Hat Matrix Diagonal Leverage (h_ii)"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-cyan-950 font-mono text-xs text-cyan-200 overflow-x-auto whitespace-pre",children:"h_ii = x_i^T (X^T X)⁻¹ x_i = (1/N) + [ (x_i - x̄)² / ∑(x_j - x̄)² ]"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Leverage measures distance in feature space X from the centroid. The sum of leverages equals p (number of parameters). An observation is High Leverage if ",e.jsx("code",{className:"text-cyan-300",children:"h_ii > 2p/N"}),"."]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"✍️"})," 3. Cook's Distance Decomposition"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-emerald-950 font-mono text-xs text-emerald-200 overflow-x-auto",children:"D_i = [ e_i² / (p · MSE) ] * [ h_ii / (1 - h_ii)² ] = (r_i² / p) * [ h_ii / (1 - h_ii) ]"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Cook's distance is the exact product of Target Residual Extremity (r_i²) and Feature Leverage Amplification. Influential points require BOTH components to be large."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-purple-900/40 shadow-xl space-y-4",children:[e.jsxs("h3",{className:"text-base font-bold text-purple-300 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," 4. Huber Robust M-Estimator Loss"]}),e.jsx("div",{className:"bg-slate-950 p-4 rounded-xl border border-purple-950 font-mono text-xs text-purple-200 overflow-x-auto whitespace-pre",children:`L_δ(e) = {
  (1/2) * e²                    for |e| ≤ δ
  δ * (|e| - (1/2)*δ)           for |e| > δ
}`}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Derivative bounds: dL/de = e for small residuals (quadratic convergence), but clamps to ±δ for large outliers, bounding the influence of corrupted points on model weights."})]})]})]}),e.jsxs("section",{id:"case-studies",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-cyan-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"5. Real-World Regional Industrial Case Studies (West Bengal)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30",children:"Case 1: FinTech Compensation"}),e.jsx("span",{className:"text-xs text-slate-500",children:"Salt Lake Sector V"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"IT Compensation Modeling & Leadership Outliers"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," Salt Lake tech startups modeled software developer salaries against experience. Mixing executive leadership salaries (₹ 85 LPA) with software engineers tilted OLS slopes by +5.6 LPA/yr, creating unrealistic hiring benchmarks."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-indigo-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"Cook's Distance screening (D_i > 4/(N - p - 1)) isolated executive outliers for separate tier modeling."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: Restored salary prediction accuracy within ± 4.2% across 18,000 tech hires."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",children:"Case 2: Meteorological Telemetry"}),e.jsx("span",{className:"text-xs text-slate-500",children:"Alipore Observatory"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Contextual Outlier Detection in Climate Telemetry"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," IMD Kolkata weather telemetry reported a 38.5°C reading in January due to optical heat glare. Global Z-score filters failed to flag it because 38.5°C is routine during May heatwaves."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-cyan-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"Contextual anomaly filtering conditioned on Season/Month; exposed an 8-sigma conditional divergence in winter."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: 100% elimination of corrupted sensor reports in regional weather forecasts."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30",children:"Case 3: Smart City Traffic"}),e.jsx("span",{className:"text-xs text-slate-500",children:"Howrah Bridge Approach"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Collective Outlier Detection in Traffic Flow Streams"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," Automated traffic radar speed sensors recorded 0 km/h speeds during red lights, generating 200 false congestion alarms daily."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-emerald-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"Collective outlier detection over rolling temporal windows; single zeroes are ignored while persistent sequences trigger alarms."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: Reduced false congestion alerts from 200/day to < 2/day."})]})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30",children:"Case 4: Municipal Tax Valuation"}),e.jsx("span",{className:"text-xs text-slate-500",children:"KMC Purba Bhavan"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Masking Remediation in Commercial Property Assessments"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:[e.jsx("strong",{children:"Context:"})," Clustered luxury commercial skyscrapers in Park Street inflated sample variance, masking delinquent tax assessments across adjacent properties."]}),e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 text-xs space-y-1",children:[e.jsx("div",{className:"text-purple-400 font-semibold",children:"Solution Implemented:"}),e.jsx("div",{className:"text-slate-300",children:"Replaced classical Z-scores with Robust Median Absolute Deviation (MAD), achieving 50% breakdown point immunity."}),e.jsx("div",{className:"text-emerald-400 font-semibold mt-1",children:"Impact: Detected 412 masked delinquent commercial assessments; recovered ₹ 31.4 Cr."})]})]})]})]}),e.jsxs("section",{id:"diagnostic-quiz",className:"space-y-6",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"6. Diagnostic Self-Assessment Quiz (Scenario Challenge)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"5 authentic engineering scenarios testing outlier leverage, Cook's distance, and robust statistics."})]})]}),m&&e.jsxs("div",{className:"flex items-center gap-2 bg-indigo-950 border border-indigo-700 px-4 py-2 rounded-xl",children:[e.jsx("span",{className:"text-xs text-slate-300",children:"Your Score:"}),e.jsxs("span",{className:"text-lg font-extrabold text-cyan-300",children:[J," / ",N.length]}),e.jsx("button",{onClick:()=>{R({}),O(!1)},className:"ml-3 text-xs text-indigo-400 underline hover:text-indigo-200",children:"Reset"})]})]}),e.jsxs("div",{className:"space-y-6",children:[N.map((t,a)=>e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4 shadow-xl",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:["Scenario ",a+1,": ",t.scenario]}),m&&e.jsx("span",{className:l("text-xs font-bold px-2.5 py-0.5 rounded-full border",b[t.id]===t.correctIndex?"bg-emerald-500/20 text-emerald-300 border-emerald-500/50":"bg-red-500/20 text-red-300 border-red-500/50"),children:b[t.id]===t.correctIndex?"✔ Correct":"✖ Incorrect"})]}),e.jsx("p",{className:"text-sm font-semibold text-white leading-relaxed",children:t.question}),e.jsx("div",{className:"grid grid-cols-1 gap-2.5",children:t.options.map((s,o)=>{const d=b[t.id]===o,x=t.correctIndex===o;return e.jsxs("button",{onClick:()=>Q(t.id,o),disabled:m,className:l("p-3.5 rounded-xl text-xs sm:text-sm text-left transition-all duration-150 border flex items-center justify-between",!m&&d&&"bg-indigo-900/40 border-indigo-500 text-white shadow-md",!m&&!d&&"bg-slate-950/60 border-slate-800/80 text-slate-300 hover:border-slate-700 hover:bg-slate-950",m&&x&&"bg-emerald-950/40 border-emerald-500 text-emerald-200 font-semibold",m&&d&&!x&&"bg-red-950/40 border-red-500 text-red-200 line-through",m&&!d&&!x&&"bg-slate-950/40 border-slate-900 text-slate-500"),children:[e.jsx("span",{children:s}),e.jsxs("span",{className:"font-mono text-xs opacity-60",children:["[",String.fromCharCode(65+o),"]"]})]},o)})}),m&&e.jsxs("div",{className:"pt-3 border-t border-slate-800 text-xs space-y-1.5",children:[e.jsxs("div",{className:"text-slate-300",children:[e.jsx("strong",{className:"text-cyan-300",children:"Rationale: "}),t.rationale]}),e.jsxs("div",{className:"text-indigo-400 font-mono bg-indigo-950/50 p-2 rounded-lg border border-indigo-900/40",children:["💬 ",t.mentorTip]})]})]},t.id)),!m&&e.jsx("div",{className:"text-center pt-2",children:e.jsxs("button",{onClick:()=>O(!0),disabled:Object.keys(b).length<N.length,className:l("px-8 py-3 rounded-xl font-bold text-sm tracking-wide transition-all shadow-xl",Object.keys(b).length===N.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30 cursor-pointer":"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700"),children:["Submit Diagnostic Assessment (",Object.keys(b).length,"/",N.length," Answered)"]})})]})]}),e.jsxs("section",{id:"production-pitfalls",className:"space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-red-500 rounded-full"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"7. Production Engineering Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 1"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"The Blind Delete Fallacy"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Automatically purging all detected outliers destroys minority class positive labels in fraud detection and medical diagnostics, rendering models blind to threats."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Distinguish contaminants (delete) from true rare anomalies (retain)."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 2"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"The Z-Score Masking Trap"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Applying classical 3-sigma Z-score filters on multimodal data fails because clustered outliers inflate standard deviation, hiding themselves completely."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Deploy Median Absolute Deviation (MAD) or Tukey IQR fences."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 3"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"Min-Max Normalization Squashing"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Applying Min-Max scaling on heavy-tailed distributions squashes 99% of normal observations into a narrow band near zero, causing vanishing gradients."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Use RobustScaler (median + IQR) on heavy-tailed features."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 4"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"The Tree Invariance Misconception"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Assuming decision trees are 100% immune to outliers. While features are robust, extreme target outliers in regression trees heavily inflate leaf predictions."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Use Gradient Boosted Trees with Huber or MAE loss."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 5"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"Cook's Distance False Comfort"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Relying on Cook's Distance to catch non-linear anomalies. Cook's Distance assumes a linear model; it is completely blind to non-linear subspace outliers."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Supplement Cook's Distance with Isolation Forest or LOF."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-red-900/30 space-y-3",children:[e.jsxs("div",{className:"text-xs font-bold text-red-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"})," Anti-Pattern 6"]}),e.jsx("h3",{className:"text-sm font-bold text-white",children:"Contextual Flattening Blindspot"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Evaluating time-series or geographical readings without temporal/spatial conditioning causes contextual anomalies (like summer temperatures in winter) to slip through."}),e.jsx("div",{className:"text-[11px] font-mono text-emerald-400 bg-slate-950 p-2 rounded border border-slate-800",children:"Rule: Stratify telemetry by contextual dimensions before outlier testing."})]})]})]}),e.jsxs("section",{id:"practical-workbench",className:"space-y-8 pt-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"w-2.5 h-8 bg-indigo-500 rounded-full"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white tracking-wide",children:"8. Practical Workbench & Academic Resources"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Access the pure Python simulation lab, comprehensive study handbook, and 30 graded examination questions."})]})]}),e.jsx("div",{className:"flex border-b border-slate-800",children:[{id:"python",label:"🐍 Python Simulation Engine"},{id:"handbook",label:"📖 Academic Handbook (Note)"},{id:"qbank",label:"🎯 30 Graded Questions (Q-Bank)"}].map(t=>e.jsx("button",{onClick:()=>W(t.id),className:l("px-5 py-3 text-xs sm:text-sm font-bold transition-all border-b-2 -mb-px",A===t.id?"border-indigo-500 text-indigo-300 bg-indigo-500/10":"border-transparent text-slate-400 hover:text-slate-200"),children:t.label},t.id))}),A==="python"&&e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Pure Python Outlier & Leverage Laboratory"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Zero external dependencies. Contains Hat matrix leverage, Cook's distance, Masking/Swamping simulation, and Huber loss analysis."})]})}),e.jsx(ie,{fileName:"outlier_concept_lab.py",code:oe})]}),A==="handbook"&&e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Comprehensive Revision Notes & Handbook"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Hawkins axiom, Point/Contextual/Collective taxonomies, Hat matrix derivation, Masking & Swamping proofs, and West Bengal case studies."})]})}),e.jsx(ne,{fileName:"topic12_note.txt",content:le})]}),A==="qbank"&&e.jsxs("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"30 Graded Questions & Viva-Voce Bank"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Structured across 4 mastery tiers (Foundation, Mechanics, Architecture, Scalability) with detailed solutions and practical tips."})]})}),e.jsx(se,{title:"Topic 12: Outlier Concept — Graded Examination Bank",questions:de})]})]}),e.jsx(re,{})]})};export{_e as default};
