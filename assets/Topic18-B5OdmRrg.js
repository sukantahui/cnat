import{b as o,j as e,bl as _}from"./vendor-react-core-B-R9HE-Z.js";import{P as Q}from"./PythonFileLoader-DZ61U3Y_.js";import{P as Y}from"./PlainTextPrint-C6NaUtnE.js";import{T as J}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const $=`"""
=============================================================================
TOPIC 18: ENCODING CATEGORICAL VARIABLES
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Industrial Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B / MAKAUT Aligned)
=============================================================================

This laboratory engine demonstrates from first principles (Pure Python, Zero External Dependencies):
1. Nominal vs Ordinal Categorical Taxonomy and Distance Metric Pathology.
2. Label / Ordinal Encoding and the Artificial Metric Distance Trap.
3. One-Hot Encoding (OHE) with dummy variable trap elimination (k-1 encoding) and sparsity tracking.
4. Frequency / Count Encoding with frequency normalization and collision detection.
5. Smoothed Target Encoding (M-estimate / Micci-Barreca formulation) vs Naive In-Sample Overfitting.
6. Out-Of-Fold (OOF) K-Fold Target Encoding simulation to prevent data leakage.
7. Weight of Evidence (WoE) and Information Value (IV) for binary credit risk classification.
8. Feature Hashing (The Hashing Trick) with fixed bucket sizing and collision analysis.
9. Empirical impact on Linear Regression / Logistic Regression convergence and accuracy.
=============================================================================
"""

import math
import random
import hashlib
from typing import List, Dict, Any, Tuple, Optional, Set

# =====================================================================
# DATASET GENERATION: WEST BENGAL EDUTECH & FINTECH COHORT
# =====================================================================

def get_edutech_cohort() -> List[Dict[str, Any]]:
    """
    Returns realistic West Bengal student & loan applicant records with:
    - city: Nominal categorical feature (Barrackpore, Kolkata, Salt Lake, Siliguri, Ichapur, Rare-Village)
    - education_level: Ordinal categorical feature (HS, BCA, MCA, MTech, PhD)
    - credit_risk_tier: Nominal/Ordinal (Low, Medium, High)
    - target_package_lpa: Continuous target (Package in Lakhs Per Annum)
    - target_loan_default: Binary target (0 = Repaid, 1 = Defaulted)
    """
    return [
        {"id": "WB-101", "name": "Susmita", "city": "Barrackpore", "edu": "MCA", "tier": "Medium", "target_lpa": 8.5, "default": 0},
        {"id": "WB-102", "name": "Debangshu", "city": "Salt Lake", "edu": "MTech", "tier": "Low", "target_lpa": 14.0, "default": 0},
        {"id": "WB-103", "name": "Mahima", "city": "Kolkata", "edu": "BCA", "tier": "High", "target_lpa": 5.2, "default": 1},
        {"id": "WB-104", "name": "Mamata", "city": "Barrackpore", "edu": "MCA", "tier": "Low", "target_lpa": 9.2, "default": 0},
        {"id": "WB-105", "name": "Abhronila", "city": "Kolkata", "edu": "MTech", "tier": "Low", "target_lpa": 15.5, "default": 0},
        {"id": "WB-106", "name": "Rohan", "city": "Siliguri", "edu": "HS", "tier": "High", "target_lpa": 3.8, "default": 1},
        {"id": "WB-107", "name": "Priyanka", "city": "Ichapur", "edu": "BCA", "tier": "Medium", "target_lpa": 6.0, "default": 0},
        {"id": "WB-108", "name": "Sourav", "city": "Salt Lake", "edu": "PhD", "tier": "Low", "target_lpa": 22.0, "default": 0},
        {"id": "WB-109", "name": "Tanmoy", "city": "Kolkata", "edu": "MCA", "tier": "Medium", "target_lpa": 8.0, "default": 0},
        {"id": "WB-110", "name": "Ananya", "city": "Barrackpore", "edu": "BCA", "tier": "High", "target_lpa": 4.5, "default": 1},
        {"id": "WB-111", "name": "Subhajit", "city": "Ichapur", "edu": "HS", "tier": "High", "target_lpa": 3.2, "default": 1},
        {"id": "WB-112", "name": "Kallol", "city": "Rare-Village", "edu": "BCA", "tier": "Medium", "target_lpa": 4.0, "default": 1}, # Rare category
    ]

# =====================================================================
# 1. ORDINAL / LABEL ENCODER
# =====================================================================

class OrdinalEncoderManual:
    """
    Encodes categories as ordered integers.
    Must be supplied with explicit rank ordering for true ordinal features.
    """
    def __init__(self, mapping: Optional[Dict[str, int]] = None):
        self.mapping = mapping or {}
        self.inverse_mapping: Dict[int, str] = {}
        if mapping:
            self.inverse_mapping = {v: k for k, v in mapping.items()}

    def fit(self, values: List[str]):
        if not self.mapping:
            unique_sorted = sorted(list(set(values)))
            self.mapping = {cat: idx for idx, cat in enumerate(unique_sorted)}
            self.inverse_mapping = {idx: cat for cat, idx in self.mapping.items()}
        return self

    def transform(self, values: List[str], unknown_val: int = -1) -> List[int]:
        return [self.mapping.get(val, unknown_val) for val in values]

# =====================================================================
# 2. ONE-HOT ENCODER (OHE) WITH DUMMY TRAP HANDLING
# =====================================================================

class OneHotEncoderManual:
    """
    Converts categorical column into binary orthogonal indicator vectors.
    Supports drop_first=True to eliminate multicollinearity (dummy variable trap).
    """
    def __init__(self, drop_first: bool = False, handle_unknown: str = "ignore"):
        self.drop_first = drop_first
        self.handle_unknown = handle_unknown
        self.categories_: List[str] = []
        self.cat_to_idx_: Dict[str, int] = {}

    def fit(self, values: List[str]):
        unique_cats = sorted(list(set(values)))
        if self.drop_first and len(unique_cats) > 1:
            self.categories_ = unique_cats[1:]  # Drop reference category
            self.dropped_category_ = unique_cats[0]
        else:
            self.categories_ = unique_cats
            self.dropped_category_ = None
        self.cat_to_idx_ = {cat: idx for idx, cat in enumerate(self.categories_)}
        return self

    def transform(self, values: List[str]) -> List[List[int]]:
        dim = len(self.categories_)
        encoded_matrix = []
        for val in values:
            vec = [0] * dim
            if val in self.cat_to_idx_:
                vec[self.cat_to_idx_[val]] = 1
            elif self.drop_first and val == self.dropped_category_:
                # Reference category: all zeros
                pass
            else:
                if self.handle_unknown == "error":
                    raise ValueError(f"Encountered unknown category: '{val}' during transform.")
                # "ignore": leave as all zeros
            encoded_matrix.append(vec)
        return encoded_matrix

# =====================================================================
# 3. FREQUENCY / COUNT ENCODER
# =====================================================================

class FrequencyEncoderManual:
    """
    Replaces each category with its relative frequency or raw count in the training split.
    Optionally applies Laplace smoothing to protect rare/unseen categories.
    """
    def __init__(self, normalize: bool = True, smoothing: float = 0.0):
        self.normalize = normalize
        self.smoothing = smoothing
        self.counts_: Dict[str, int] = {}
        self.freqs_: Dict[str, float] = {}
        self.total_count_: int = 0
        self.unseen_freq_: float = 0.0

    def fit(self, values: List[str]):
        self.total_count_ = len(values)
        self.counts_ = {}
        for val in values:
            self.counts_[val] = self.counts_.get(val, 0) + 1
        
        num_categories = len(self.counts_)
        denom = self.total_count_ + (self.smoothing * num_categories)

        for cat, cnt in self.counts_.items():
            if self.normalize:
                self.freqs_[cat] = (cnt + self.smoothing) / denom
            else:
                self.freqs_[cat] = float(cnt)

        # Baseline probability for completely novel categories
        self.unseen_freq_ = (self.smoothing / denom) if self.normalize else 0.0
        return self

    def transform(self, values: List[str]) -> List[float]:
        return [self.freqs_.get(val, self.unseen_freq_) for val in values]

# =====================================================================
# 4. SMOOTHED TARGET ENCODER (M-ESTIMATE / MICCI-BARRECA)
# =====================================================================

class SmoothedTargetEncoderManual:
    """
    Replaces category c with empirical target posterior expectation:
    S_c = (n_c * y_bar_c + m * y_bar_global) / (n_c + m)
    where:
    - n_c: sample count for category c
    - y_bar_c: empirical mean target for category c
    - y_bar_global: global dataset mean target
    - m: smoothing weight / pseudo-count hyperparameter
    """
    def __init__(self, m: float = 10.0):
        self.m = float(m)
        self.global_mean_: float = 0.0
        self.category_stats_: Dict[str, Dict[str, float]] = {}
        self.encoding_map_: Dict[str, float] = {}

    def fit(self, categories: List[str], targets: List[float]):
        n = len(categories)
        self.global_mean_ = sum(targets) / max(n, 1)

        counts: Dict[str, int] = {}
        sums: Dict[str, float] = {}
        for cat, y in zip(categories, targets):
            counts[cat] = counts.get(cat, 0) + 1
            sums[cat] = sums.get(cat, 0.0) + y

        self.encoding_map_ = {}
        for cat, cnt in counts.items():
            cat_sum = sums[cat]
            cat_mean = cat_sum / cnt
            # Micci-Barreca / M-estimate smoothing
            smoothed = (cnt * cat_mean + self.m * self.global_mean_) / (cnt + self.m)
            self.encoding_map_[cat] = smoothed
            self.category_stats_[cat] = {
                "count": cnt,
                "raw_mean": cat_mean,
                "smoothed": smoothed
            }
        return self

    def transform(self, categories: List[str]) -> List[float]:
        return [self.encoding_map_.get(cat, self.global_mean_) for cat in categories]

# =====================================================================
# 5. OUT-OF-FOLD (OOF) K-FOLD TARGET ENCODER (LEAKAGE PROTECTION)
# =====================================================================

def k_fold_out_of_fold_target_encode(
    categories: List[str], 
    targets: List[float], 
    n_splits: int = 4, 
    m: float = 5.0
) -> List[float]:
    """
    Performs out-of-fold target encoding across k folds.
    For each fold k, the target encoding is computed using the remaining (k-1) folds,
    preventing the model from memorizing the true target label y_i.
    """
    n = len(categories)
    indices = list(range(n))
    # Deterministic split into folds
    folds: List[List[int]] = [[] for _ in range(n_splits)]
    for i, idx in enumerate(indices):
        folds[i % n_splits].append(idx)

    oof_encoded = [0.0] * n

    for fold_id, val_indices in enumerate(folds):
        train_indices = [idx for i, f in enumerate(folds) if i != fold_id for idx in f]
        
        train_cats = [categories[i] for i in train_indices]
        train_targets = [targets[i] for i in train_indices]
        
        encoder = SmoothedTargetEncoderManual(m=m)
        encoder.fit(train_cats, train_targets)
        
        val_cats = [categories[i] for i in val_indices]
        encoded_val = encoder.transform(val_cats)
        
        for idx, enc_val in zip(val_indices, encoded_val):
            oof_encoded[idx] = enc_val

    return oof_encoded

# =====================================================================
# 6. WEIGHT OF EVIDENCE (WoE) & INFORMATION VALUE (IV)
# =====================================================================

class WeightOfEvidenceEncoderManual:
    """
    Computes Weight of Evidence (WoE) and Information Value (IV) for binary classification:
    WoE_c = ln( (NonEvents_c / Total_NonEvents) / (Events_c / Total_Events) )
    IV = sum_c ( (NonEvents_c / Total_NonEvents) - (Events_c / Total_Events) ) * WoE_c
    """
    def __init__(self, laplace_correction: float = 0.5):
        self.laplace = laplace_correction
        self.woe_map_: Dict[str, float] = {}
        self.information_value_: float = 0.0
        self.stats_: Dict[str, Dict[str, float]] = {}

    def fit(self, categories: List[str], targets: List[int]):
        total_events = sum(targets)  # 1s (Defaults / Bad)
        total_nonevents = len(targets) - total_events  # 0s (Good)

        cat_events: Dict[str, int] = {}
        cat_nonevents: Dict[str, int] = {}

        for cat, y in zip(categories, targets):
            if y == 1:
                cat_events[cat] = cat_events.get(cat, 0) + 1
            else:
                cat_nonevents[cat] = cat_nonevents.get(cat, 0) + 1

        all_cats = sorted(list(set(categories)))
        self.information_value_ = 0.0

        for cat in all_cats:
            e = cat_events.get(cat, 0)
            ne = cat_nonevents.get(cat, 0)

            # Laplace smoothing to avoid division by zero or ln(0)
            dist_ne = (ne + self.laplace) / (total_nonevents + 2 * self.laplace)
            dist_e = (e + self.laplace) / (total_events + 2 * self.laplace)

            woe = math.log(dist_ne / dist_e)
            iv_contrib = (dist_ne - dist_e) * woe
            self.information_value_ += iv_contrib

            self.woe_map_[cat] = woe
            self.stats_[cat] = {
                "good_count": ne,
                "bad_count": e,
                "dist_good": dist_ne,
                "dist_bad": dist_e,
                "woe": woe,
                "iv_contrib": iv_contrib
            }
        return self

    def transform(self, categories: List[str]) -> List[float]:
        return [self.woe_map_.get(cat, 0.0) for cat in categories]

# =====================================================================
# 7. FEATURE HASHING (THE HASHING TRICK)
# =====================================================================

class FeatureHasherManual:
    """
    Hashes unbound arbitrary category strings into fixed-size B buckets.
    h(x) = md5(x) % B.
    Optionally computes signed hashing: s(x) in {-1, +1} to cancel collision bias.
    """
    def __init__(self, n_features: int = 8, alternate_sign: bool = True):
        self.n_features = n_features
        self.alternate_sign = alternate_sign

    def _hash(self, token: str) -> Tuple[int, int]:
        h_bytes = hashlib.md5(token.encode('utf-8')).digest()
        val = int.from_bytes(h_bytes[:4], byteorder='little')
        bucket = val % self.n_features
        sign = 1
        if self.alternate_sign:
            sign = 1 if ((val >> 16) & 1) == 1 else -1
        return bucket, sign

    def transform(self, values: List[str]) -> List[List[float]]:
        matrix = []
        for val in values:
            vec = [0.0] * self.n_features
            b, s = self._hash(val)
            vec[b] += s
            matrix.append(vec)
        return matrix

# =====================================================================
# LABORATORY BENCHMARK SUITE
# =====================================================================

def run_laboratory():
    print("=" * 80)
    print("CODER & ACCOTAX - PURE PYTHON MACHINE LEARNING LAB (TOPIC 18)")
    print("ENCODING CATEGORICAL VARIABLES: FOUNDATIONS & MATHEMATICAL RIGOR")
    print("Course: BCAC701B | Guide: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    cohort = get_edutech_cohort()
    cities = [s["city"] for s in cohort]
    edus = [s["edu"] for s in cohort]
    tiers = [s["tier"] for s in cohort]
    salaries = [s["target_lpa"] for s in cohort]
    defaults = [s["default"] for s in cohort]

    print(f"\\n[1] INSPECTING RAW COHORT SAMPLES ({len(cohort)} records):")
    print("-" * 75)
    print(f"{'ID':<8} {'Name':<12} {'City (Nominal)':<16} {'Edu (Ordinal)':<14} {'LPA':<8} {'Default'}")
    print("-" * 75)
    for s in cohort[:6]:
        print(f"{s['id']:<8} {s['name']:<12} {s['city']:<16} {s['edu']:<14} {s['target_lpa']:<8.1f} {s['default']}")
    print("...")

    # --- EXPERIMENT 1: ORDINAL ENCODING PATHOLOGY ON NOMINAL DATA ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 1] ORDINAL ENCODING ON NOMINAL DATA: THE ARTIFICIAL DISTANCE TRAP")
    print("=" * 80)
    print("What happens when an arbitrary integer is assigned to nominal cities?")
    
    city_ord_enc = OrdinalEncoderManual()
    city_ord_enc.fit(cities)
    ord_cities = city_ord_enc.transform(cities)
    print("Alphabetical Assigned Integers:", city_ord_enc.mapping)

    # Calculate fake distances
    bpr_code = city_ord_enc.mapping["Barrackpore"]
    kol_code = city_ord_enc.mapping["Kolkata"]
    slt_code = city_ord_enc.mapping["Salt Lake"]
    sil_code = city_ord_enc.mapping["Siliguri"]

    d_kol_bpr = abs(kol_code - bpr_code)
    d_sil_bpr = abs(sil_code - bpr_code)
    print(f"Computed Distance |d(Kolkata, Barrackpore)|: {d_kol_bpr}")
    print(f"Computed Distance |d(Siliguri, Barrackpore)|: {d_sil_bpr}")
    print("PATHOLOGY: The model assumes Siliguri is 4x farther from Barrackpore in feature space")
    print("than Kolkata, creating a false metric gradient for Linear/KNN models!")

    # Correct use: True Ordinal Mapping
    edu_ladder = {"HS": 0, "BCA": 1, "MCA": 2, "MTech": 3, "PhD": 4}
    edu_enc = OrdinalEncoderManual(mapping=edu_ladder)
    ord_edus = edu_enc.transform(edus)
    print("\\nCorrect Use on True Ordinal Feature (Education):")
    for edu, code in edu_ladder.items():
        print(f"  {edu:<8} -> Rank {code}")

    # --- EXPERIMENT 2: ONE-HOT ENCODING & DUMMY VARIABLE TRAP ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 2] ONE-HOT ENCODING (OHE) & DUMMY VARIABLE TRAP")
    print("=" * 80)
    ohe_full = OneHotEncoderManual(drop_first=False)
    ohe_full.fit(cities)
    mat_full = ohe_full.transform(cities)
    
    ohe_drop = OneHotEncoderManual(drop_first=True)
    ohe_drop.fit(cities)
    mat_drop = ohe_drop.transform(cities)

    print(f"K Categories: {ohe_full.categories_}")
    print(f"Full OHE Dimension: {len(ohe_full.categories_)} columns")
    print(f"Drop-First OHE Dimension: {len(ohe_drop.categories_)} columns (Dropped reference: '{ohe_drop.dropped_category_}')")
    
    print("\\nFirst 4 Encoded Rows (Drop First):")
    for i in range(4):
        print(f"  {cohort[i]['name']:<12} ({cohort[i]['city']:<12}) -> {mat_drop[i]}")

    # --- EXPERIMENT 3: FREQUENCY / COUNT ENCODING ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 3] FREQUENCY & COUNT ENCODING")
    print("=" * 80)
    freq_enc = FrequencyEncoderManual(normalize=True, smoothing=1.0)
    freq_enc.fit(cities)
    freq_values = freq_enc.transform(cities)
    print("Frequency Mapping (Laplace Smoothed):")
    for cat, freq in sorted(freq_enc.freqs_.items(), key=lambda x: -x[1]):
        print(f"  {cat:<16} : Count = {freq_enc.counts_[cat]:>2} | Frequency = {freq:>6.4f}")

    # --- EXPERIMENT 4: SMOOTHED TARGET ENCODING (M-ESTIMATE) VS NAIVE OVERFIT ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 4] SMOOTHED TARGET ENCODING (M-ESTIMATE) VS NAIVE OVERFITTING")
    print("=" * 80)
    # Naive Target Encoding (m=0)
    naive_te = SmoothedTargetEncoderManual(m=0.0)
    naive_te.fit(cities, salaries)
    # Smoothed Target Encoding (m=5)
    smooth_te = SmoothedTargetEncoderManual(m=5.0)
    smooth_te.fit(cities, salaries)

    print(f"Global Mean Salary: ₹{smooth_te.global_mean_:.2f} LPA\\n")
    print(f"{'City':<16} {'Count':<6} {'Naive Mean (Overfit)':<22} {'Smoothed (m=5.0)':<18} {'Shrinkage Effect'}")
    print("-" * 78)
    for cat in sorted(smooth_te.category_stats_.keys()):
        cnt = smooth_te.category_stats_[cat]["count"]
        naive_val = naive_te.encoding_map_[cat]
        smooth_val = smooth_te.encoding_map_[cat]
        diff = abs(smooth_val - smooth_te.global_mean_)
        print(f"{cat:<16} {cnt:<6} ₹{naive_val:>6.2f} LPA              ₹{smooth_val:>6.2f} LPA        Pulled towards prior")

    print("\\nNotice 'Rare-Village' (1 sample):")
    print(f"  Naive: ₹{naive_te.encoding_map_['Rare-Village']:.2f} LPA (Severe memorization!)")
    print(f"  Smoothed: ₹{smooth_te.encoding_map_['Rare-Village']:.2f} LPA (Shrunk safely toward global prior {smooth_te.global_mean_:.2f} LPA)")

    # --- EXPERIMENT 5: OUT-OF-FOLD (OOF) K-FOLD TARGET ENCODING ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 5] OUT-OF-FOLD (OOF) TARGET ENCODING (PREVENTING DATA LEAKAGE)")
    print("=" * 80)
    oof_salaries = k_fold_out_of_fold_target_encode(cities, salaries, n_splits=3, m=5.0)
    print(f"{'Student':<12} {'City':<16} {'Actual LPA':<12} {'OOF Encoded Value':<20}")
    print("-" * 62)
    for i in range(len(cohort)):
        print(f"{cohort[i]['name']:<12} {cohort[i]['city']:<16} ₹{salaries[i]:<10.2f} ₹{oof_salaries[i]:<18.2f}")

    # --- EXPERIMENT 6: WEIGHT OF EVIDENCE (WoE) & INFORMATION VALUE (IV) ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 6] WEIGHT OF EVIDENCE (WoE) & INFORMATION VALUE (IV) ON CREDIT DEFAULT")
    print("=" * 80)
    woe_enc = WeightOfEvidenceEncoderManual(laplace_correction=0.5)
    woe_enc.fit(tiers, defaults)
    
    print(f"Information Value (IV) for Credit Tier: {woe_enc.information_value_:.4f}")
    if woe_enc.information_value_ > 0.3:
        iv_verdict = "Strong Predictive Power (> 0.3)"
    elif woe_enc.information_value_ > 0.1:
        iv_verdict = "Medium Predictive Power (0.1 - 0.3)"
    else:
        iv_verdict = "Weak / Suspicious (< 0.1)"
    print(f"IV Predictive Tier: {iv_verdict}\\n")

    print(f"{'Credit Tier':<14} {'Good (0)':<10} {'Bad (1)':<10} {'WoE (Log Odds)':<18} {'IV Contribution'}")
    print("-" * 65)
    for tier, s in woe_enc.stats_.items():
        print(f"{tier:<14} {s['good_count']:<10} {s['bad_count']:<10} {s['woe']:>10.4f}         {s['iv_contrib']:>10.4f}")

    # --- EXPERIMENT 7: THE HASHING TRICK (FEATURE HASHER) ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 7] FEATURE HASHING (THE HASHING TRICK) WITH B=4 BUCKETS")
    print("=" * 80)
    hasher = FeatureHasherManual(n_features=4, alternate_sign=True)
    all_unique_cities = list(set(cities))
    hashed_matrix = hasher.transform(all_unique_cities)
    
    bucket_allocations: Dict[int, List[str]] = {b: [] for b in range(4)}
    for city, vec in zip(all_unique_cities, hashed_matrix):
        b, _ = hasher._hash(city)
        bucket_allocations[b].append(city)

    print("Bucket Allocations for 4 Buckets:")
    for b in range(4):
        items = bucket_allocations[b]
        collision_str = "COLLISION DETECTED!" if len(items) > 1 else "Unique"
        print(f"  Bucket {b}: {items} -> {collision_str}")

    print("\\n" + "=" * 80)
    print("ALL 7 PRACTICAL EXPERIMENTS COMPLETED SUCCESSFULLY WITH EXIT CODE 0.")
    print("=" * 80)

if __name__ == "__main__":
    run_laboratory()
`,Z=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B / MAKAUT Aligned)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 18: Encoding Categorical Variables
Author: Sukanta Hui | Senior Applied Machine Learning Engineer & Academic Mentor
Location: Barrackpore, North 24 Parganas, West Bengal, India
=============================================================================

1. THEORETICAL FOUNDATION & TAXONOMY OF CATEGORICAL DATA
-----------------------------------------------------------------------------
1.1 The Fundamental Algebraic Problem
In supervised and unsupervised statistical learning, algorithms operate strictly
over vector spaces, calculating inner products <w, x>, Euclidean distances
||x_i - x_j||_2, covariance matrices (1/N)(X^T X), or hyperplanar decision
boundaries. A computer cannot directly compute arithmetic operations or matrix
inversions on qualitative string representations such as "Barrackpore", "Salt Lake",
"BCA", or "O-Positive". 

Categorical encoding is the formal mathematical mapping:
    Phi : C -> R^d
which transforms an unordered or ordered discrete set of qualitative symbols C
into a d-dimensional real coordinate vector in R^d, while preserving genuine
relational semantics and minimizing artificial metric distortions.

1.2 The Formal Categorical Taxonomy
Every discrete variable in an industrial dataset belongs to one of five primary
typologies, each demanding a distinct mathematical treatment:

A. Nominal Categorical Variables:
   - Definition: Discrete categories with NO natural, intrinsic, or mathematical ordering.
   - Examples: West Bengal districts ("Barrackpore", "Kolkata", "Howrah", "Darjeeling"),
     blood groups ("A+", "B+", "O+", "AB-"), or payment modes ("UPI", "NetBanking", "Card").
   - Mathematical Property: For any c_i, c_j in C, the only valid relation is equality:
     c_i = c_j or c_i != c_j. Ordering relations (c_i < c_j) are undefined and non-sensical.
   - Encoding Hazard: Assigning scalar integers (e.g., 0, 1, 2, 3) induces a false metric
     distance where |d(Darjeeling, Barrackpore)| = 3, forcing linear models to treat
     Darjeeling as "three times greater" than Barrackpore.

B. Ordinal Categorical Variables:
   - Definition: Discrete categories possessing a strict, transitive, monotonic order,
     but lacking uniform or calibrated interval distances between levels.
   - Examples: Academic degrees ("HS" < "BCA" < "MCA" < "PhD"), customer satisfaction
     ratings ("Poor" < "Fair" < "Good" < "Excellent"), or credit risk tiers.
   - Mathematical Property: c_1 < c_2 < ... < c_K. The order is preserved under any
     monotonic transformation f: R -> R where a < b implies f(a) < f(b).
   - Interval Non-Uniformity: The intellectual/effort distance between (HS -> BCA) is NOT
     guaranteed to equal the distance between (MCA -> PhD).

C. Binary / Dichotomous Variables:
   - Definition: Categorical variables with exactly two mutually exclusive states (K = 2).
   - Examples: Loan default status ("Yes" / "No"), Gender ("Male" / "Female"),
     or Transaction Fraud status ("Legitimate" / "Fraudulent").
   - Mathematical Treatment: Trivial bijection onto {0, 1} or {-1, +1}.

D. Cyclic Categorical Variables:
   - Definition: Periodic discrete time-based categories where the boundary wraps around.
   - Examples: Days of the week (Monday ... Sunday -> Monday), months of the year
     (January ... December -> January), or hours of the day (0 ... 23 -> 0).
   - Encoding Hazard: Treating Sunday as 7 and Monday as 1 creates an artificial distance
     |7 - 1| = 6, even though Sunday and Monday are adjacent (distance = 1).
   - Mathematical Solution: Sinusoidal projection onto the unit circle:
         x_sin = sin(2 * pi * t / T)
         x_cos = cos(2 * pi * t / T)

E. High-Cardinality Categorical Variables:
   - Definition: Discrete features with a massive number of distinct unique categories
     (K >> 10^2, up to 10^5 or 10^6).
   - Examples: Indian postal pincodes (e.g., 700001, 743122), user IDs, IP addresses,
     or e-commerce product SKUs.
   - Encoding Hazard: Standard One-Hot Encoding causes the "Curse of Dimensionality",
     massive memory allocation (RAM exhaustion), and extreme matrix sparsity.


-----------------------------------------------------------------------------
2. COMPREHENSIVE MATHEMATICAL FORMULATIONS OF ENCODING MECHANISMS
-----------------------------------------------------------------------------

2.1 Label / Ordinal Encoding (Scalar Integer Mapping)
- Formulation:
      Phi_ord(c_k) = k,  where k in {0, 1, 2, ..., K-1}
- Metric Distance Distortion:
  Under standard Euclidean distance:
      d(c_i, c_j) = |i - j|
  When applied to nominal features, this injects a completely arbitrary gradient:
      w * Phi_ord(c_k) = w * k
  The model is constrained to assume that the target changes linearly with the arbitrary
  alphabetical or chronological order of the category names.
- Tree-Model Invariance:
  In single-variable decision trees (CART, Random Forest, XGBoost), split criteria take
  the form (x <= theta). If an ordinal variable has true monotonic alignment with the
  target, decision trees can cleanly isolate ranges with minimal splits. However, for
  nominal variables, the tree must waste depth performing multiple arbitrary threshold
  cuts to isolate individual categories.

2.2 One-Hot Encoding (OHE) & The Orthogonal Basis
- Formulation:
  Each unique category c_k in {c_1, ..., c_K} is mapped to the standard basis vector e_k in R^K:
      Phi_ohe(c_k) = [0, ..., 0, 1, 0, ..., 0]^T   (1 at position k)
- Geometry of One-Hot Vectors:
  1. Equidistance:
     For any two distinct categories c_i != c_j:
         ||Phi_ohe(c_i) - Phi_ohe(c_j)||_2 = sqrt(1^2 + (-1)^2) = sqrt(2)
  2. Orthogonality:
     The inner product between distinct categories is strictly zero:
         <Phi_ohe(c_i), Phi_ohe(c_j)> = 0
     Hence, the cosine similarity between distinct categories is 0, completely removing
     any artificial metric proximity!

2.3 The Dummy Variable Trap & Multicollinearity
- Mathematical Proof:
  Consider a linear regression model with an intercept term beta_0 and all K one-hot columns:
      y = beta_0 + sum_{k=1}^K beta_k * x_k + epsilon
  Because every sample belongs to exactly one category, the sum across all K indicator
  columns is identically equal to 1:
      sum_{k=1}^K x_k = 1 = x_intercept
  This establishes perfect linear dependency (collinearity):
      x_intercept - sum_{k=1}^K x_k = 0
  In matrix terms, the design matrix X has rank at most K (not K + 1). The Gram matrix
  (X^T X) is non-invertible:
      det(X^T X) = 0
  The Ordinary Least Squares (OLS) normal equation:
      beta_hat = (X^T X)^(-1) X^T y
  fails because the matrix inverse does not exist!
- Solution (Drop-First Encoding):
  Drop one arbitrary reference category (e.g., category 1). The model uses K - 1 indicator
  columns. When a sample belongs to the dropped category, all K - 1 columns are 0.
  beta_0 captures the baseline expected target for the reference category, and beta_k
  measures the differential effect relative to the reference.
- Note on Regularization:
  In L2-regularized models (Ridge Regression, Logistic Regression with C), the objective
  inverts (X^T X + lambda * I). Because lambda * I guarantees positive definiteness,
  the matrix is always invertible even without dropping a column; however, dropping
  first remains standard best practice to preserve coefficient interpretability.

2.4 Frequency / Count Encoding
- Formulation:
      Phi_count(c_k) = n_k
      Phi_freq(c_k) = n_k / N
  where n_k is the number of occurrences of category c_k in the training dataset of size N.
- Laplace Smoothed Frequency:
      Phi_freq_smooth(c_k) = (n_k + alpha) / (N + alpha * K)
- Merits & Limitations:
  - Preserves 1D dimensionality (no column expansion).
  - Encodes the marginal prior probability of seeing the category.
  - Risk: Frequency Collision. If "Barrackpore" appears 50 times and "Siliguri" also appears
    50 times, both categories are assigned the exact same numerical value (50 / N),
    making them indistinguishable to the learning algorithm.

2.5 Smoothed Target / Mean Encoding (Micci-Barreca / M-Estimate Formulation)
- The Naive Formulation:
  For a regression target y or binary classification target y in {0, 1}:
      S_k = (1 / n_k) * sum_{i in c_k} y_i
- The Overfitting & Data Leakage Pathology:
  Suppose category c_rare appears only once in the dataset with y = 1. The naive target
  encoding assigns S_rare = 1.0. A decision tree or linear model can instantly achieve
  zero empirical loss on this sample by memorizing S_rare, resulting in massive overfitting
  and failure to generalize to test data where c_rare might have y = 0.
- The Empirical Bayesian / M-Estimate Solution:
  Smooth the category sample mean y_bar_k toward the global dataset prior y_bar_global:
      S_k(smoothed) = lambda(n_k) * y_bar_k + (1 - lambda(n_k)) * y_bar_global
  Under the M-estimate formulation:
      lambda(n_k) = n_k / (n_k + m)
  Substituting lambda(n_k) yields:
      S_k(smoothed) = (n_k * y_bar_k + m * y_bar_global) / (n_k + m)
  where:
      n_k: count of samples in category c_k
      y_bar_k: empirical sample mean of category c_k
      y_bar_global: global mean target across all training observations
      m: smoothing parameter (pseudo-counts / regularization strength, typically 5 to 50)
  As n_k -> infinity: lambda(n_k) -> 1, S_k -> y_bar_k (trust the category data).
  As n_k -> 0:        lambda(n_k) -> 0, S_k -> y_bar_global (revert safely to global prior).

2.6 Out-Of-Fold (OOF) Target Encoding (Leakage Elimination)
- In-sample target encoding leaks the target label y_i of observation i into its own
  feature representation x_i.
- Mathematical Protocol for OOF Target Encoding:
  1. Partition the training dataset D_train into K disjoint folds: F_1, F_2, ..., F_K.
  2. For each fold F_j:
     a. Compute category frequencies and smoothed target means using strictly the out-of-fold
        data: D_{-j} = D_train \\ F_j.
     b. Transform observations belonging to F_j using the mapping learned from D_{-j}.
  3. For test data (D_test) and production inference:
     Compute the final encoding mapping across the ENTIRE training dataset D_train.
  4. Add small Gaussian noise N(0, sigma^2) during training to prevent tree models from
     splitting on exact mean values.

2.7 Weight of Evidence (WoE) and Information Value (IV)
Widely mandated in West Bengal banking, NBFCs, and credit scorecards (Basel II/III compliance).
- Weight of Evidence (WoE):
  For a binary target y in {0, 1} where 1 = Bad (Default/Event) and 0 = Good (Non-Event):
      WoE_k = ln( (% Non-Events in category k) / (% Events in category k) )
            = ln( (n_{k, 0} / N_0) / (n_{k, 1} / N_1) )
  where:
      n_{k, 0}: number of Good applicants in category k
      N_0: total Good applicants in the dataset
      n_{k, 1}: number of Bad applicants in category k
      N_1: total Bad applicants in the dataset
- Logit Linearization Property:
  In Logistic Regression:
      ln( P(y=1|x) / P(y=0|x) ) = beta_0 + sum beta_j x_j
  Substituting WoE directly linearizes the relationship between the categorical predictor
  and the log-odds of default! A coefficient of beta = -1.0 indicates perfect calibration.
- Information Value (IV):
  Quantifies the overall diagnostic predictive power of the categorical feature:
      IV = sum_{k=1}^K [ (n_{k, 0} / N_0) - (n_{k, 1} / N_1) ] * WoE_k
- Standard Industry Thumb Rules for IV:
      IV < 0.02          : Useless / No predictive power (Drop feature)
      0.02 <= IV < 0.10  : Weak predictor
      0.10 <= IV < 0.30  : Medium predictive power
      0.30 <= IV <= 0.50 : Strong predictor (Ideal for credit scorecards)
      IV > 0.50          : Suspiciously high (Check for target leakage or extreme separation)

2.8 The Hashing Trick (Feature Hashing)
- Used by high-throughput systems (Vowpal Wabbit, Apache Spark, online CTR prediction).
- Formulation:
  Map an unbounded qualitative string s to a fixed index in {0, 1, ..., B-1} using a hash
  function h (e.g., MurmurHash3 or MD5):
      Phi_hash(s) = h(s) mod B
  Signed Hashing (to preserve unbiased inner products):
      Phi_signed(s) = xi(s) * e_{h(s) mod B}
  where xi(s) in {-1, +1} is an auxiliary hash function determining the sign.
- Inner Product Unbiasedness:
      E[ <Phi_signed(u), Phi_signed(v)> ] = <u, v>
  The expected value of the inner product in hash space equals the true inner product;
  hash collisions introduce zero-mean variance rather than directional bias!
- Collision Probability (The Birthday Paradox):
  If K unique categories are hashed into B buckets, the probability of at least one collision is:
      P(collision) approx 1 - exp( - K^2 / (2 * B) )


-----------------------------------------------------------------------------
3. COMPARATIVE ARCHITECTURAL MATRIX OF ENCODING METHODS
-----------------------------------------------------------------------------

Method         | Output Dim | Memory | Linear Models | Tree Models | Unseen Cats | Target Leakage Risk
---------------|------------|--------|---------------|-------------|-------------|--------------------
Ordinal / Label| 1          | O(N)   | Disastrous    | Excellent   | Map to -1   | None
One-Hot (OHE)  | K (or K-1) | O(N*K) | Optimal       | Suboptimal  | All-zeros   | None
Frequency      | 1          | O(N)   | Moderate      | Good        | Prior freq  | None
Target (Naive) | 1          | O(N)   | High Overfit  | High Overfit| Global mean | CATASTROPHIC
Target (Smooth)| 1          | O(N)   | Excellent     | Excellent   | Global mean | Mitigated by m
OOF Target Enc | 1          | O(N)   | State-of-Art  | State-of-Art| Global mean | Fully Eliminated
WoE (Banking)  | 1          | O(N)   | Mathematical  | Good        | 0.0 (Logit) | Mitigated by Laplace
Feature Hashing| B (Fixed)  | O(N*B) | Good          | Moderate    | Handled O(1)| None


-----------------------------------------------------------------------------
4. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
-----------------------------------------------------------------------------

Case Study 1: Tech Recruitment & Edutech Engine (Barrackpore & Salt Lake Sector V)
- Context: Susmita and Debangshu are engineering an automated resume screening platform
  for Kolkata IT staffing agencies.
- Features:
  - Undergraduate College: Categorical (MAKAUT, Jadavpur University, Kalyani Govt Engg,
    IEM Salt Lake, Heritage, Techno India, Calcutta University).
  - Degree: Ordinal (B.Sc < BCA < B.Tech < MCA < M.Tech).
  - Candidate Primary Skill: Nominal (React, Python, Java, Go, Rust, DevOps).
- Preprocessing Engineering:
  - Applying OrdinalEncoder to 'Degree' using a calibrated monotonic integer mapping:
    {'B.Sc': 0, 'BCA': 1, 'B.Tech': 2, 'MCA': 3, 'M.Tech': 4}.
  - Applying OneHotEncoder(drop_first=True) to 'Primary Skill' (cardinality K = 6).
  - Applying Smoothed Target Encoding (m=10) on 'Undergraduate College' against the continuous
    target 'First Year CTC (LPA)', ensuring smaller regional colleges revert safely to the
    statewide average salary prior.

Case Study 2: FinTech Micro-Lending Credit Risk Engine (Salt Lake Sector V)
- Context: Mamata leads credit underwriting risk at a Kolkata-based NBFC serving rural
  and semi-urban micro-entrepreneurs.
- Problem: The applicant dataset contains 'Borrower Occupation' (Govt Employee, IT Professional,
  Daily Wage Earner, Shop Owner, Cottage Artisan) and target 'Loan Default' (0 or 1).
- Engineering Decision:
  - Mamata implements Weight of Evidence (WoE) transformation.
  - Calculation shows:
    - Govt Employee: WoE = +1.9095 (High non-event probability, strong negative log-odds of default).
    - Daily Wage Earner: WoE = -2.4849 (High default risk).
  - Information Value (IV) is calculated at 0.38, confirming 'Occupation' is a prime predictor.
  - The resulting WoE feature feeds into an L1-regularized Logistic Regression model, producing
    fully interpretable credit scorecard coefficients mandated by RBI compliance auditors.

Case Study 3: Hyperlocal E-Commerce Logistics Routing (Ichapur & Shyamnagar)
- Context: Mahima oversees supply chain dispatch for an online grocery aggregator operating
  across North 24 Parganas and Hooghly districts.
- Problem: The feature 'Delivery Pincode' has cardinality K = 2,400 unique pincodes
  (e.g., 743122 for Ichapur, 743127 for Shyamnagar, 700091 for Salt Lake).
- The Failure of One-Hot Encoding:
  - Generating 2,400 one-hot columns across 500,000 daily orders created a 1.2 billion-element
    dense matrix, consuming 9.6 GB RAM and causing Out-Of-Memory (OOM) worker restarts.
- Solution:
  - Mahima replaces OHE with Feature Hashing (MurmurHash3) fixed to B = 64 buckets.
  - Memory consumption drops from 9.6 GB to 256 MB.
  - Hashing handles new suburban postal expansion pincodes automatically without requiring
    retraining or updating an in-memory vocabulary dictionary.

Case Study 4: Clinical Diagnostic Oncology & Genomic Variants (Jadavpur Research Hub)
- Context: Abhronila is developing a prognostic model for colorectal cancer recurrence.
- Features:
  - Patient Blood Group: Nominal (A, B, AB, O).
  - Pathological Tumor Staging: Ordinal (Stage 0, Stage I, Stage II, Stage III, Stage IV).
  - Genetic Codon Variant: High-cardinality genomic strings.
- Critical Audit:
  - A junior intern mistakenly passed 'Blood Group' into Scikit-Learn's \`LabelEncoder\`,
    assigning A=0, AB=1, B=2, O=3.
  - The Cox Proportional Hazards survival model assigned a positive coefficient beta = +0.42
    to Blood Group, falsely concluding that blood group O patients have 3x worse survival
    hazard than blood group A purely due to arbitrary alphabetical indexing!
  - Abhronila corrects this immediately by replacing it with OneHotEncoder(drop_first=False),
    restoring true orthogonal basis geometry and eliminating the artifactual biological correlation.


-----------------------------------------------------------------------------
5. CRITICAL PRODUCTION PITFALLS & INDUSTRY ANTI-PATTERNS
-----------------------------------------------------------------------------

Trap 1: Misusing \`LabelEncoder\` on Input Features X
- Scikit-Learn explicitly documents: \`LabelEncoder\` is designed strictly for encoding 1D
  target vectors y (e.g., mapping class labels ["Cat", "Dog"] to [0, 1]).
- Passing multi-column feature matrices X into \`LabelEncoder\` is an anti-pattern.
  For features, always use \`OrdinalEncoder\` (with explicit \`categories\` ordering parameter)
  or \`OneHotEncoder\`.

Trap 2: In-Sample Target Leakage
- Computing target means on the entire dataset before applying train/test split leaks test
  labels into training representations.
- Consequence: Artificially inflated training ROC-AUC (e.g., 0.98), collapsing to 0.62 in production!
- Rule: Target encoders must be fit EXCLUSIVELY on the training fold, utilizing out-of-fold
  K-fold cross-validation.

Trap 3: Unseen / Cold-Start Categories in Production Inference
- A user registers from a newly added district "Jhargram" that was not present in the 2024
  training data.
- If \`OneHotEncoder(handle_unknown='error')\` is used, the production API throws an HTTP 500
  unhandled exception.
- Production Defense: Configure \`OneHotEncoder(handle_unknown='ignore')\`, which assigns an
  all-zero vector. For Target Encoding, map novel categories to the global training prior
  y_bar_global.

Trap 4: Multi-Collinearity / The Dummy Variable Trap in Unregularized Models
- Including all K one-hot columns in unregularized OLS regression causes singular matrix
  inversion errors or wildly unstable, exploding coefficients.
- Always set \`drop='first'\` when using unregularized linear models.


-----------------------------------------------------------------------------
6. SUKANTA HUI'S REVISION CHECKLIST & VIVA VOCE SUMMARY
-----------------------------------------------------------------------------
[ ] Master the distinction between Nominal (unordered), Ordinal (monotonic rank), Binary,
    Cyclic (sin/cos), and High-Cardinality categories.
[ ] Understand why Label Encoding on nominal data creates false metric distances in Euclidean
    space and corrupts linear/KNN models.
[ ] State the geometric properties of One-Hot vectors: orthogonality (<e_i, e_j> = 0) and
    equidistance (||e_i - e_j|| = sqrt(2)).
[ ] Explain the Dummy Variable Trap, matrix rank deficiency, and why dropping the first
    column eliminates perfect multicollinearity.
[ ] Formulate the M-estimate smoothed target encoding equation:
        S_k = (n_k * y_bar_k + m * y_bar_global) / (n_k + m)
[ ] Explain why K-fold Out-Of-Fold (OOF) target encoding is required to eliminate target leakage.
[ ] Define Weight of Evidence (WoE) and Information Value (IV), detailing standard industry
    thresholds for scorecard modeling.
[ ] Understand the Hashing Trick, the Birthday Paradox collision rate, and why signed hashing
    guarantees unbiased inner products.


-----------------------------------------------------------------------------
7. 10 IN-DEPTH MAKAUT VIVA VOCE QUESTIONS & MODEL ANSWERS
-----------------------------------------------------------------------------

Q1: Why can we not simply apply \`LabelEncoder\` to all categorical columns in a dataset?
Model Answer:
\`LabelEncoder\` assigns arbitrary scalar integers (0, 1, 2, ..., K-1) to categories based on
alphabetical or appearance order. When applied to nominal features (such as cities or colors),
it imposes an artificial numerical ordering and Euclidean distance metric that does not exist in
reality. Linear models, SVMs, and distance-based algorithms (KNN, K-Means) interpret these
integers as quantitative magnitudes, leading to biased gradients and incorrect predictions.
Furthermore, Scikit-Learn's \`LabelEncoder\` is strictly designed for 1D target labels (y), not
multi-dimensional feature matrices (X).

Q2: What is the "Dummy Variable Trap" and how is it mathematically resolved?
Model Answer:
The Dummy Variable Trap occurs when all K categories of a qualitative variable are converted
into K binary indicator columns in a linear model with an intercept term. Because every sample
belongs to exactly one category, the sum of all K indicator columns is identically equal to 1,
which exactly equals the intercept column. This creates perfect multicollinearity, meaning the
Gram matrix (X^T X) is rank-deficient and non-invertible (det(X^T X) = 0), preventing Ordinary
Least Squares from computing a unique solution. It is resolved by dropping one reference category
(drop_first=True), producing K - 1 columns, where the intercept represents the baseline mean of
the dropped category.

Q3: When should One-Hot Encoding be preferred over Target Encoding, and vice-versa?
Model Answer:
One-Hot Encoding is preferred when:
1. The categorical feature has low cardinality (K < 15 to 20).
2. The model is linear, logistic, or neural-network based, where orthogonal representations
   allow independent weight learning for each category without risk of target leakage.
Target Encoding is preferred when:
1. The categorical feature has high cardinality (K > 50, e.g., postal pincodes or user IDs),
   where One-Hot Encoding would explode the feature space and cause RAM exhaustion.
2. The downstream model is a gradient boosted decision tree (LightGBM, XGBoost, CatBoost),
   which splits effectively on 1D continuous target representations.

Q4: What is the mathematical formulation of M-estimate smoothed target encoding and why is it needed?
Model Answer:
The formulation is:
    S_k = (n_k * y_bar_k + m * y_bar_global) / (n_k + m)
where n_k is the category count, y_bar_k is the category sample mean target, y_bar_global is the
global target mean, and m is the smoothing weight. It is needed because naive target encoding
(m = 0) causes severe overfitting on rare categories: a category with a single positive observation
would receive an encoded value of 1.0, enabling the model to trivially memorize training labels.
The M-estimate smooths small sample sizes toward the global prior, ensuring statistical robustness.

Q5: Explain how Out-of-Fold (OOF) Target Encoding eliminates target leakage during training.
Model Answer:
In standard in-sample target encoding, observation i contributes directly to the calculation of
the mean target of its own category, meaning the model's feature x_i contains information about
its true label y_i. OOF target encoding eliminates this by partitioning training data into K folds.
For observations in fold j, the target encoding is computed using exclusively the observations from
the remaining K - 1 folds. Because observation i was excluded from the calculation of its own
encoded feature value, target leakage is completely prevented.

Q6: Define Weight of Evidence (WoE) and describe its relationship with Logistic Regression.
Model Answer:
Weight of Evidence is defined as:
    WoE_k = ln( (% Non-Events in category k) / (% Events in category k) )
In binary classification, substituting WoE values for categorical bins transforms the feature into
the log-odds scale. When a Logistic Regression model is trained on WoE-transformed features, the
relationship between the predictor and the logit is strictly linear. If a category perfectly aligns
with the true log-odds, its regression coefficient beta will theoretically equal -1.0, enabling
seamless credit scoring calibration.

Q7: What does an Information Value (IV) of 0.45 indicate about a categorical variable?
Model Answer:
An IV of 0.45 indicates strong predictive power. In credit risk modeling and retail banking scorecards,
features with IV between 0.30 and 0.50 are considered ideal, highly predictive drivers of loan
default. However, if IV exceeds 0.50, it is flagged as suspiciously high and audited for target leakage
or artificial quasi-complete separation.

Q8: How does the Hashing Trick work, and what is its primary advantage in streaming production systems?
Model Answer:
The Hashing Trick applies a deterministic hash function h(s) (such as MurmurHash3) to qualitative
strings and takes the modulo with respect to a fixed bucket size B: Phi(s) = h(s) mod B.
Its primary advantage is that it eliminates the need to maintain an in-memory vocabulary dictionary.
It maps an unbounded or streaming categorical space into a fixed-size dimensional array in O(1) time
and constant O(B) space, effortlessly handling unseen categories without requiring schema updates.

Q9: How should cyclic categorical features like month of the year or hour of the day be encoded?
Model Answer:
Cyclic features must not be encoded as sequential integers (0 to 23 or 1 to 12) because standard
metrics treat the boundary (e.g., 23:00 and 00:00) as maximally distant (|23 - 0| = 23), whereas
they are temporally adjacent. They should be transformed into two continuous features using
sinusoidal transformations onto the unit circle:
    x_sin = sin(2 * pi * t / T)
    x_cos = cos(2 * pi * t / T)
where T is the period (T = 24 for hours, T = 12 for months). This preserves smooth, continuous
angular proximity across the periodic boundary.

Q10: Why do Tree-based models (Random Forest, LightGBM) struggle with high-cardinality One-Hot Encoded features?
Model Answer:
Tree-based models struggle with high-cardinality OHE features because:
1. Dimensionality Explosion: Spreading information across hundreds of binary columns creates
   extremely sparse trees where individual splits have tiny sample support and negligible gain.
2. Inefficient Feature Subsampling: During random feature selection (mtry in Random Forest), the
   algorithm repeatedly samples non-informative 0-valued columns rather than substantive predictors.
3. Tree Depth Wastage: To capture interactions involving the categorical variable, the tree must
   grow multiple levels deep, leading to high variance and overfitting.
Modern gradient boosting frameworks (LightGBM, CatBoost) instead sort categories by target statistics
or use internal optimal partitioning (Fisher's exact test) over integer representations.
=============================================================================
`;function ee(A,C){let g=0;for(let v=0;v<A.length;v++)g=(g<<5)-g+A.charCodeAt(v),g|=0;return Math.abs(g)%C}const le=()=>{const[A,C]=o.useState("hero");o.useId();const[g,v]=o.useState("comparator"),[j,F]=o.useState("city"),[c,q]=o.useState("ohe_full"),[N,V]=o.useState(10),[w,W]=o.useState(6),[k,G]=o.useState(""),[f,I]=o.useState({}),[E,M]=o.useState(!1),D={city:{name:"West Bengal City Hub (Nominal)",type:"Nominal",items:[{id:1,name:"Susmita",val:"Barrackpore",salary:8.5},{id:2,name:"Debangshu",val:"Salt Lake",salary:14},{id:3,name:"Mahima",val:"Kolkata",salary:5.2},{id:4,name:"Mamata",val:"Barrackpore",salary:9.2},{id:5,name:"Abhronila",val:"Kolkata",salary:15.5},{id:6,name:"Rohan",val:"Siliguri",salary:3.8}],categories:["Barrackpore","Kolkata","Salt Lake","Siliguri"],ordinalMap:{Barrackpore:0,Kolkata:1,"Salt Lake":2,Siliguri:3},targetMeans:{Barrackpore:8.85,Kolkata:10.35,"Salt Lake":14,Siliguri:3.8},globalMean:9.37},degree:{name:"Applicant Qualification (Ordinal)",type:"Ordinal",items:[{id:1,name:"Subhajit",val:"HS",salary:3.2},{id:2,name:"Priyanka",val:"BCA",salary:6},{id:3,name:"Susmita",val:"MCA",salary:8.5},{id:4,name:"Debangshu",val:"MTech",salary:14},{id:5,name:"Sourav",val:"PhD",salary:22},{id:6,name:"Mahima",val:"BCA",salary:5.2}],categories:["HS","BCA","MCA","MTech","PhD"],ordinalMap:{HS:0,BCA:1,MCA:2,MTech:3,PhD:4},targetMeans:{HS:3.2,BCA:5.6,MCA:8.5,MTech:14,PhD:22},globalMean:9.82},pincode:{name:"Hyperlocal Pincode (High Cardinality)",type:"High-Cardinality",items:[{id:1,name:"Dispatch A",val:"700001 (Kolkata GPO)",salary:11.2},{id:2,name:"Dispatch B",val:"700091 (Sector V)",salary:16.5},{id:3,name:"Dispatch C",val:"743122 (Ichapur)",salary:6.8},{id:4,name:"Dispatch D",val:"743127 (Shyamnagar)",salary:5.5},{id:5,name:"Dispatch E",val:"734001 (Siliguri)",salary:4.2},{id:6,name:"Dispatch F",val:"713201 (Durgapur)",salary:7.9}],categories:["700001 (Kolkata GPO)","700091 (Sector V)","713201 (Durgapur)","734001 (Siliguri)","743122 (Ichapur)","743127 (Shyamnagar)"],ordinalMap:{"700001 (Kolkata GPO)":0,"700091 (Sector V)":1,"713201 (Durgapur)":2,"734001 (Siliguri)":3,"743122 (Ichapur)":4,"743127 (Shyamnagar)":5},targetMeans:{"700001 (Kolkata GPO)":11.2,"700091 (Sector V)":16.5,"713201 (Durgapur)":7.9,"734001 (Siliguri)":4.2,"743122 (Ichapur)":6.8,"743127 (Shyamnagar)":5.5},globalMean:8.68}},u=o.useMemo(()=>{const t=D[j],a=t.items.length,n=t.categories,l=n.length,s={};t.items.forEach(i=>{s[i.val]=(s[i.val]||0)+1});const r=t.items.map(i=>{let h=[],y="";if(c==="ordinal"){const m=t.ordinalMap[i.val]??0;h=[m],y=`Rank: ${m}`}else if(c==="ohe_full")h=n.map(m=>m===i.val?1:0),y=`[${h.join(", ")}]`;else if(c==="ohe_drop")h=n.slice(1).map(S=>S===i.val?1:0),y=`[${h.join(", ")}]`;else if(c==="freq"){const m=Number((s[i.val]/a).toFixed(3));h=[m],y=`Freq: ${m}`}else if(c==="target"){const m=s[i.val]||1,S=t.targetMeans[i.val]||t.globalMean,H=(m*S+10*t.globalMean)/(m+10);h=[Number(H.toFixed(2))],y=`₹${H.toFixed(2)} LPA`}return{...i,vec:h,label:y}}),d=r[0].vec,x=r[1].vec;let T=0;for(let i=0;i<d.length;i++)T+=Math.pow(d[i]-x[i],2);const z=Number(Math.sqrt(T).toFixed(3)),U=d.length;let R=0,P=0;r.forEach(i=>{i.vec.forEach(h=>{P++,h===0&&R++})});const X=Number((R/P*100).toFixed(1));return{encodedRows:r,numCols:U,sparsityPct:X,sample0:r[0],sample1:r[1],euclidDist:z,cats:n,K:l}},[j,c]),O=o.useMemo(()=>{const a=[{name:"Salt Lake IT Software",count:100,rawRate:.04},{name:"Barrackpore Govt Service",count:80,rawRate:.02},{name:"Kolkata Retail Trade",count:40,rawRate:.15},{name:"Siliguri Tea Plantation Contractor",count:8,rawRate:.25},{name:"Sundarbans Eco-Artisan (Rare Category)",count:1,rawRate:1}],n=N,l=a.map(s=>{const r=(s.count*s.rawRate+n*.12)/(s.count+n),d=Math.abs(s.rawRate-r);return{...s,smoothedRate:Number((r*100).toFixed(1)),rawRatePct:Number((s.rawRate*100).toFixed(1)),shrinkagePct:Number((d*100).toFixed(1))}});return{globalMeanPct:Number((.12*100).toFixed(1)),results:l}},[N]),p=o.useMemo(()=>{const t=["Kolkata","Barrackpore","Salt Lake","Siliguri","Ichapur","Shyamnagar","Durgapur","Asansol"],a=w,n=Array.from({length:a},()=>[]);t.forEach(x=>{const T=ee(x,a);n[T].push(x)});let l=0;n.forEach(x=>{x.length>1&&(l+=x.length-1)});const s=Number((l/t.length*100).toFixed(1)),r=t.length,d=Number(((1-Math.exp(-(r*r)/(2*a)))*100).toFixed(1));return{buckets:n,collisions:l,collisionRate:s,theoreticalProb:d,totalItems:t.length,B:a}},[w]),b=[{id:1,question:"Why is applying Scikit-Learn's `LabelEncoder` directly to multi-column nominal feature matrices considered a severe anti-pattern?",options:["Because LabelEncoder is designed strictly for 1D target vectors (y); using it on nominal features injects an arbitrary Euclidean metric hierarchy that corrupts linear and distance-based models.","Because LabelEncoder consumes 100x more RAM than OneHotEncoder.","Because LabelEncoder automatically removes missing values without notice.","Because LabelEncoder converts all integers into complex imaginary numbers."],correctIndex:0,explanation:"Scikit-Learn documentation explicitly clarifies that LabelEncoder expects a 1D target array (y). When applied to nominal features (like cities or colors), it assigns arbitrary integers (0, 1, 2) that linear models interpret as mathematical magnitudes (2 > 1 > 0), forcing non-existent linear trends and metric distances.",practicalTip:"Use `OrdinalEncoder` with explicitly calibrated category orders for ordinal features, and `OneHotEncoder` for nominal features."},{id:2,question:"What is the mathematical root cause of the 'Dummy Variable Trap' in Ordinary Least Squares (OLS) regression?",options:["The Gram matrix (X^T X) is strictly diagonally dominant and cannot converge.","The sum of all K one-hot indicator columns identically equals the intercept column of 1s, causing perfect multicollinearity and det(X^T X) = 0.","The categorical column contains negative numbers that break the log-likelihood objective.","One-hot encoding triples the condition number without changing matrix rank."],correctIndex:1,explanation:"Because every observation belongs to exactly one category, sum_{k=1}^K x_{ik} = 1. This linear combination matches the intercept vector identically, rendering the design matrix rank-deficient (rank K instead of K+1). As a result, det(X^T X) = 0, and the normal equation beta = (X^T X)^(-1) X^T y cannot be solved.",practicalTip:"Always pass `drop='first'` to `OneHotEncoder` when using unregularized linear regression."},{id:3,question:"How does the M-estimate smoothing formula S_k = (n_k * y_bar_k + m * y_bar_global) / (n_k + m) protect models against rare category overfitting?",options:["It forces rare categories to be dropped completely from the training dataset.","It applies L1 lasso regularization directly on the category labels.","As category count n_k approaches zero, the encoded value gracefully reverts to the global dataset mean, preventing single-sample target memorization.","It inverts the categorical distribution using a Fast Fourier Transform."],correctIndex:2,explanation:"Naive target encoding sets rare categories with 1 sample to 1.0 or 0.0, allowing decision trees to trivially memorize training targets. Under M-estimate smoothing, when n_k is small (e.g. 1 sample), the term m * y_bar_global dominates the numerator, safely shrinking the encoded estimate toward the empirical population prior.",practicalTip:"In production pipelines, set m between 10 and 50 to prevent rare categories from dominating gradient updates."},{id:4,question:"Why is Weight of Evidence (WoE) transformation universally preferred in RBI and Basel II/III credit scorecards?",options:["It converts category risk directly onto the log-odds scale, linearizing the logit link function in Logistic Regression and providing explainable score points.","It guarantees 100% test accuracy without requiring training labels.","It eliminates the need for cross-validation in banking credit models.","It is the only encoder compatible with deep Convolutional Neural Networks."],correctIndex:0,explanation:"WoE is defined as ln((% Good) / (% Bad)), which is the empirical log-odds of good credit behavior. When fed into Logistic Regression, the predictor is on the exact scale of the logit link function, yielding clean linear coefficients (ideally -1.0) and allowing transparent translation into integer scorecard points for regulatory adverse action explanations.",practicalTip:"Pair WoE with Information Value (IV); reject features with IV < 0.02 and audit features with IV > 0.5 for target leakage."},{id:5,question:"A machine learning engineer notices an API crash with HTTP 500 when a user enters an unlisted postal district. What configuration was missing in OneHotEncoder?",options:["sparse_output=False","drop='first'","handle_unknown='ignore'","dtype=np.float32"],correctIndex:2,explanation:"By default, Scikit-Learn's `OneHotEncoder` sets `handle_unknown='error'`. When an inference request includes a category never seen during training, it raises a ValueError. Setting `handle_unknown='ignore'` assigns an all-zero vector, safely falling back to the model's intercept without crashing.",practicalTip:"Always specify `handle_unknown='ignore'` when deploying categorical encoders into production serving microservices."}],B=[{term:"Categorical Encoding",definition:"The formal mathematical mapping Phi: C -> R^d that translates qualitative discrete symbols into numerical coordinate vectors suitable for linear algebra and optimization."},{term:"Nominal Feature",definition:"A qualitative variable with no intrinsic order (e.g., West Bengal cities, payment modes, blood types). Only equality tests (c_i == c_j) are valid."},{term:"Ordinal Feature",definition:"A qualitative variable with a natural, transitive monotonic order (e.g., HS < BCA < MCA < PhD), but without calibrated or equal numerical intervals between levels."},{term:"High Cardinality",definition:"A categorical feature with a massive number of unique levels (K > 100 up to 100,000+), such as Indian postal pincodes or product SKUs, where OHE causes memory exhaustion."},{term:"Dummy Variable Trap",definition:"A state of perfect multicollinearity occurring in linear regression when all K one-hot indicator columns are included with an intercept, making (X^T X) non-invertible."},{term:"M-Estimate Smoothing",definition:"An empirical Bayesian regularization technique for target encoding that shrinks small-sample category averages toward the global population mean: S_k = (n_k y_bar_k + m y_bar_global) / (n_k + m)."},{term:"Weight of Evidence (WoE)",definition:"A logarithmic transformation used in credit scoring: WoE = ln((% Non-Events) / (% Events)), mapping categorical bins directly onto the linear log-odds scale."},{term:"Information Value (IV)",definition:"A statistic measuring the diagnostic predictive power of a categorical variable in binary classification: IV = sum((% Good - % Bad) * WoE)."},{term:"Feature Hashing",definition:"The 'Hashing Trick' that applies a deterministic hash function modulo B to map unbounded qualitative strings into a fixed-size vector space without a vocabulary dictionary."},{term:"Out-of-Fold (OOF) Encoding",definition:"A cross-validation target encoding architecture where each observation's encoded value is calculated strictly using out-of-fold partitions, eliminating target leakage."}],K=o.useMemo(()=>{if(!k.trim())return B;const t=k.toLowerCase();return B.filter(a=>a.term.toLowerCase().includes(t)||a.definition.toLowerCase().includes(t))},[k]),L=o.useMemo(()=>{let t=0;return b.forEach((a,n)=>{f[n]===a.correctIndex&&t++}),t},[f]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 18"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Masterclass Standard"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Pure Python Lab Verified"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Encoding Categorical Variables: Taxonomy, Geometry & Leakage Architecture"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Machine learning algorithms compute inner products, Euclidean distances, and hyperplane splits that are mathematically undefined over raw strings. Master the formal mathematical taxonomy from Nominal and Ordinal to High-Cardinality spaces. Uncover why Label Encoding on nominal data creates false metric distances, explore One-Hot orthogonal basis vectors, eliminate the Dummy Variable Trap, master M-estimate Target Encoding with K-Fold leakage protection, and harness the Hashing Trick for massive West Bengal industrial scale."}),e.jsxs("div",{className:"pt-4 border-t border-indigo-900/50",children:[e.jsx("span",{className:"text-[11px] font-bold text-indigo-300 uppercase tracking-wider block mb-2",children:"Curriculum Roadmap Jump Navigation:"}),e.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{id:"#novice",label:"1. Novice Masterclass"},{id:"#taxonomy",label:"2. Taxonomy & Jargon"},{id:"#studio",label:"3. Interactive Studio"},{id:"#math",label:"4. Mathematical Formulations"},{id:"#cases",label:"5. Regional Cases"},{id:"#pitfalls",label:"6. Production Pitfalls"},{id:"#quiz",label:"7. Diagnostic Quiz"},{id:"#handbook",label:"8. Academic Notes"},{id:"#lab",label:"9. Python Lab"},{id:"#teacher",label:"10. Teacher Guidance"}].map(t=>e.jsx("a",{href:t.id,className:"px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-medium",children:t.label},t.id))})]})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Foundational Pedagogy"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"1. Novice Masterclass: Intuitive Mental Models"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-2xl",children:"🌐"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 1: The Diplomatic Translator"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Machine learning models are like international delegates who strictly speak the language of numbers and coordinates. Strings like 'Barrackpore' or 'Salt Lake' are foreign dialects. The categorical encoder is the official diplomatic translator that translates qualitative words into numerical coordinates without corrupting or falsifying the underlying meaning."})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-indigo-300 font-mono",children:'Phi("Barrackpore") -> [1.0, 0.0, 0.0]'})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-2xl",children:"🎨"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 2: The Color Palette vs The Staircase"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Assigning numbers 0, 1, 2 to Red, Green, Blue forces an artificial staircase where Blue > Green > Red, just like asserting Siliguri > Kolkata > Barrackpore. Ordinal features (BCA < MCA < PhD) already have a natural elevation staircase; nominal features are like colors on an artist's palette—each needs its own independent axis!"})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-cyan-300 font-mono",children:"Colors = Orthogonal Axes (OHE) | Degrees = Natural Stairs"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl",children:"📦"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 3: The Address Book vs Hashing Locker"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When an e-commerce platform has 2,500 postal pincodes, giving each pincode its own personal warehouse room (One-Hot) crashes the computer's RAM. Feature Hashing and Target Encoding act like numbered parcel lockers: they compress thousands of unique addresses into a compact, fixed-size shelf while preserving critical delivery signals."})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-mono",children:"2,500 Pincodes -> B=16 Hashed Buckets"})]})]})]}),e.jsxs("section",{id:"taxonomy",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Architectural Classification"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"2. Formal Categorical Taxonomy & Jargon Buster"})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800 shadow-xl",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 bg-slate-900/90",children:[e.jsx("thead",{className:"bg-slate-950 text-indigo-300 uppercase tracking-wider text-[11px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-4",children:"Taxonomy Class"}),e.jsx("th",{className:"p-4",children:"Mathematical Property"}),e.jsx("th",{className:"p-4",children:"West Bengal Examples"}),e.jsx("th",{className:"p-4",children:"Recommended Encoding"}),e.jsx("th",{className:"p-4",children:"Dangerous Anti-Pattern"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800",children:[e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsxs("td",{className:"p-4 font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400"}),"Nominal"]}),e.jsx("td",{className:"p-4",children:"No ordering. Only equality (c_i == c_j) holds."}),e.jsx("td",{className:"p-4",children:"City (Barrackpore, Kolkata), Payment Mode, Blood Group"}),e.jsx("td",{className:"p-4 text-emerald-400 font-semibold",children:"One-Hot Encoding (drop_first if linear)"}),e.jsx("td",{className:"p-4 text-rose-400",children:"Arbitrary Integer / Label Encoding"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsxs("td",{className:"p-4 font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-indigo-400"}),"Ordinal"]}),e.jsx("td",{className:"p-4",children:"Strict monotonic order (c_1 < c_2 < c_3); unequal gaps."}),e.jsx("td",{className:"p-4",children:"Degree (BCA < MCA < PhD), Risk Tier, Survey Rating"}),e.jsx("td",{className:"p-4 text-emerald-400 font-semibold",children:"OrdinalEncoder(categories=calibrated_ranks)"}),e.jsx("td",{className:"p-4 text-rose-400",children:"Alphabetical LabelEncoder (BCA=0, MCA=2, PhD=3)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsxs("td",{className:"p-4 font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-amber-400"}),"Binary"]}),e.jsx("td",{className:"p-4",children:"Exactly two states (K = 2)."}),e.jsx("td",{className:"p-4",children:"Loan Default (Yes/No), Subscription Active (True/False)"}),e.jsxs("td",{className:"p-4 text-emerald-400 font-semibold",children:["Single Indicator Column ","{0, 1}"]}),e.jsx("td",{className:"p-4 text-rose-400",children:"Two redundant one-hot columns"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsxs("td",{className:"p-4 font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-purple-400"}),"Cyclic"]}),e.jsx("td",{className:"p-4",children:"Periodic boundary wrap-around (t_max is adjacent to t_0)."}),e.jsx("td",{className:"p-4",children:"Hour of Day (0..23), Day of Week, Month of Year"}),e.jsx("td",{className:"p-4 text-emerald-400 font-semibold",children:"Sin/Cos Projection: [sin(2pi t/T), cos(2pi t/T)]"}),e.jsx("td",{className:"p-4 text-rose-400",children:"Integer 0..23 (makes 23:00 and 00:00 maximally far)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsxs("td",{className:"p-4 font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"w-2 h-2 rounded-full bg-rose-400"}),"High-Cardinality"]}),e.jsx("td",{className:"p-4",children:"Massive level count (K > 100 up to 100,000+)."}),e.jsx("td",{className:"p-4",children:"Postal Pincodes (700001, 743122), User IDs, Product SKUs"}),e.jsx("td",{className:"p-4 text-emerald-400 font-semibold",children:"M-estimate Target Enc, WoE, Feature Hashing"}),e.jsx("td",{className:"p-4 text-rose-400",children:"Dense One-Hot Encoding (RAM exhaustion / OOM)"})]})]})]})}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"Engineering Jargon Buster"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Filter key academic and industrial terms for quick revision"})]}),e.jsx("input",{type:"text",placeholder:"Search terms (e.g. OOF, Dummy Trap, WoE)...",value:k,onChange:t=>G(t.target.value),className:"px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 w-full sm:w-64"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 pt-2",children:K.map(t=>e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300",children:t.term}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:t.definition})]},t.term))})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Simulation Sandbox"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"3. Interactive Categorical Encoding Laboratory Studio"})]}),e.jsx("div",{className:"flex gap-2",children:[{id:"comparator",label:"Mode A: Strategy Comparator"},{id:"smoothing",label:"Mode B: Target Smoothing"},{id:"hashing",label:"Mode C: Hashing Arena"}].map(t=>e.jsx("button",{onClick:()=>v(t.id),className:_("px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",g===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800 text-slate-400 hover:text-white border border-slate-700"),children:t.label},t.id))})]}),g==="comparator"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-cyan-400",children:"📐"})," Encoding Strategy Matrix & Vector Geometry"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Observe how different encoders transform qualitative tokens into numerical coordinate spaces"})]}),e.jsxs("div",{className:"flex flex-wrap gap-2",children:[e.jsxs("select",{value:j,onChange:t=>F(t.target.value),className:"px-3 py-1.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 cursor-pointer",children:[e.jsx("option",{value:"city",children:"Feature: West Bengal City (Nominal)"}),e.jsx("option",{value:"degree",children:"Feature: Education Degree (Ordinal)"}),e.jsx("option",{value:"pincode",children:"Feature: Postal Pincode (High Cardinality)"})]}),e.jsxs("select",{value:c,onChange:t=>q(t.target.value),className:"px-3 py-1.5 rounded-xl bg-slate-950 border border-indigo-700 text-xs text-indigo-300 font-semibold focus:outline-none focus:border-indigo-400 cursor-pointer",children:[e.jsx("option",{value:"ordinal",children:"Label / Ordinal Encoding"}),e.jsx("option",{value:"ohe_full",children:"One-Hot Encoding (drop_first=False)"}),e.jsx("option",{value:"ohe_drop",children:"One-Hot Encoding (drop_first=True)"}),e.jsx("option",{value:"freq",children:"Frequency / Count Encoding"}),e.jsx("option",{value:"target",children:"Smoothed Target Encoding (M-estimate)"})]})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Feature Typology"}),e.jsx("div",{className:"text-sm font-bold text-white",children:D[j].type})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Output Dimensions"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-cyan-400",children:[u.numCols," Columns"]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Matrix Sparsity"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-indigo-400",children:[u.sparsityPct,"% Zeros"]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Sample 0 vs 1 Distance"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-emerald-400",children:["||d|| = ",u.euclidDist]})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 bg-slate-950/60",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Sample ID"}),e.jsx("th",{className:"p-3",children:"Candidate / Record"}),e.jsx("th",{className:"p-3",children:"Raw Categorical Value"}),e.jsx("th",{className:"p-3",children:"Target (CTC LPA)"}),e.jsx("th",{className:"p-3",children:"Encoded Numeric Vector (Phi(x))"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:u.encodedRows.map((t,a)=>e.jsxs("tr",{className:a<2?"bg-indigo-950/20":"",children:[e.jsxs("td",{className:"p-3 text-slate-400",children:["#",t.id]}),e.jsx("td",{className:"p-3 font-sans font-bold text-white",children:t.name}),e.jsx("td",{className:"p-3 text-cyan-300",children:t.val}),e.jsxs("td",{className:"p-3 text-emerald-400",children:["₹",t.salary.toFixed(1)," LPA"]}),e.jsx("td",{className:"p-3 text-indigo-300 font-bold",children:t.label})]},t.id))})]})}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed space-y-2",children:[e.jsx("span",{className:"text-indigo-400 font-bold uppercase text-[10px] tracking-wider block",children:"Geometric Metric Interpretation:"}),c==="ordinal"&&e.jsxs("p",{children:["⚠️ ",e.jsx("strong",{children:"Artificial Distance Trap:"})," In Ordinal Encoding, the distance between ",u.sample0.name," (",u.sample0.val,") and ",u.sample1.name," (",u.sample1.val,") is calculated as ",e.jsxs("strong",{children:["||d|| = ",u.euclidDist]}),". For nominal data, this imposes an arbitrary alphabetical distance that biases linear and distance models!"]}),c==="ohe_full"&&e.jsxs("p",{children:["✔ ",e.jsx("strong",{children:"Orthogonal Equidistance:"})," Under full One-Hot Encoding, distinct categories have an inner product of 0 and a strictly uniform Euclidean distance of ",e.jsx("strong",{children:"||d|| = sqrt(2) approx 1.414"}),". No category is artificially closer to another in feature space!"]}),c==="ohe_drop"&&e.jsxs("p",{children:["✔ ",e.jsx("strong",{children:"Dummy Trap Avoidance:"})," One reference category was dropped. The intercept captures the reference category baseline, eliminating perfect multicollinearity and making (X^T X) safely invertible."]}),c==="freq"&&e.jsxs("p",{children:["ℹ️ ",e.jsx("strong",{children:"Frequency Alignment:"})," Categories are mapped to their occurrence probability. Risk: If two distinct categories appear the exact same number of times, their Euclidean distance collapses to ",e.jsx("strong",{children:"0.000"})," (frequency collision)!"]}),c==="target"&&e.jsxs("p",{children:["⭐ ",e.jsx("strong",{children:"Target Aligned Manifold:"})," Each category is encoded by its smoothed expected target LPA. Gradient descent can split directly on expected economic value, maximizing signal for tree models and linear regressors."]})]})]}),g==="smoothing"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"🛡️"})," M-Estimate Target Smoothing & Prior Shrinkage"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulating West Bengal micro-lending default rates across frequent and rare applicant segments"})]}),e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 p-2.5 rounded-2xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300",children:"Smoothing Weight m:"}),e.jsx("input",{type:"range",min:"0",max:"50",step:"1",value:N,onChange:t=>V(Number(t.target.value)),className:"w-32 accent-indigo-500 cursor-pointer"}),e.jsx("span",{className:"text-xs font-mono font-bold text-white w-8 text-right",children:N})]})]}),e.jsxs("div",{className:"p-3 bg-indigo-950/40 rounded-xl border border-indigo-800/40 text-xs text-indigo-200",children:[e.jsx("strong",{children:"Global Baseline Default Rate:"})," ",O.globalMeanPct,"% (Across all training loans)"]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 bg-slate-950/60",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Borrower Category"}),e.jsx("th",{className:"p-3",children:"Applicant Count (n)"}),e.jsx("th",{className:"p-3",children:"Raw Empirical Default Rate"}),e.jsx("th",{className:"p-3",children:"Smoothed Encoded Feature Value"}),e.jsx("th",{className:"p-3",children:"Bayesian Shrinkage Effect"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:O.results.map(t=>e.jsxs("tr",{className:t.count===1?"bg-amber-950/20":"hover:bg-slate-800/30",children:[e.jsx("td",{className:"p-3 font-sans font-bold text-white",children:t.name}),e.jsxs("td",{className:"p-3 text-cyan-400",children:[t.count," applicants"]}),e.jsxs("td",{className:"p-3 text-rose-400",children:[t.rawRatePct,"%"]}),e.jsxs("td",{className:"p-3 text-emerald-400 font-bold",children:[t.smoothedRate,"%"]}),e.jsx("td",{className:"p-3 font-sans text-xs",children:t.count===1?e.jsxs("span",{className:"text-amber-300 font-semibold",children:["⚠️ Rare Category Shrunk ",t.shrinkagePct,"% towards Global Prior!"]}):e.jsxs("span",{className:"text-slate-400",children:["High Confidence (n=",t.count,")"]})})]},t.name))})]})}),e.jsx("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Mathematical Mechanism:"})," At ",e.jsx("code",{children:"m = 0"}),", the rare Eco-Artisan (1 applicant who defaulted) receives an encoded default rate of ",e.jsx("strong",{children:"100%"}),". A decision tree would immediately memorize this borrower as a guaranteed default. By raising ",e.jsxs("code",{children:["m = ",N]}),", the encoded risk is smoothly shrunk down to ",e.jsxs("strong",{children:[O.results[4].smoothedRate,"%"]}),", safely grounding the prediction in the global population average while preserving empirical distinction for large sample cohorts!"]})})]}),g==="hashing"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-400",children:"⚡"})," The Hashing Trick: Fixed Dimension Bucket Allocation"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulating MurmurHash / MD5 feature hashing on West Bengal delivery hubs without an in-memory dictionary"})]}),e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 p-2.5 rounded-2xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300",children:"Hash Buckets B:"}),e.jsx("input",{type:"range",min:"2",max:"16",step:"1",value:w,onChange:t=>W(Number(t.target.value)),className:"w-32 accent-purple-500 cursor-pointer"}),e.jsx("span",{className:"text-xs font-mono font-bold text-white w-8 text-right",children:w})]})]}),e.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Total Entities"}),e.jsxs("div",{className:"text-sm font-bold text-white",children:[p.totalItems," Hubs"]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Allocated Buckets (B)"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-purple-400",children:[p.B," Features"]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Detected Collisions"}),e.jsxs("div",{className:_("text-sm font-bold font-mono",p.collisions>0?"text-rose-400":"text-emerald-400"),children:[p.collisions," Collisions"]})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Birthday Collision Prob"}),e.jsxs("div",{className:"text-sm font-bold font-mono text-amber-400",children:[p.theoreticalProb,"%"]})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3",children:p.buckets.map((t,a)=>e.jsxs("div",{className:_("p-4 rounded-2xl border transition-all space-y-2",t.length>1?"bg-rose-950/20 border-rose-800/60 shadow-lg shadow-rose-950/20":t.length===1?"bg-slate-950 border-slate-800":"bg-slate-950/40 border-slate-800/40 opacity-60"),children:[e.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono",children:[e.jsxs("span",{className:"font-bold text-indigo-300",children:["Bucket #",a]}),e.jsx("span",{className:_("px-2 py-0.5 rounded-full text-[10px] font-bold",t.length>1?"bg-rose-500/20 text-rose-300 border border-rose-500/40":t.length===1?"bg-emerald-500/20 text-emerald-300":"text-slate-600"),children:t.length>1?"Collision!":t.length===1?"Unique":"Empty"})]}),e.jsx("div",{className:"space-y-1 text-xs",children:t.length===0?e.jsx("span",{className:"text-slate-600 italic",children:"No items mapped"}):t.map(n=>e.jsxs("div",{className:"font-bold text-white flex items-center gap-1.5",children:[e.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-purple-400"}),n]},n))})]},a))}),e.jsx("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed",children:e.jsxs("p",{children:[e.jsx("strong",{children:"The Birthday Paradox in Production:"})," Notice how even with ",p.B," buckets for only 8 cities, the collision probability is ",e.jsxs("strong",{children:[p.theoreticalProb,"%"]}),"! In streaming systems, signed hashing (multiplying by ",1,") guarantees that collisions cancel out in expectation (zero-mean variance), allowing high-throughput models like Vowpal Wabbit to operate at extreme scale with zero RAM vocabulary lookups."]})})]})]}),e.jsxs("section",{id:"math",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Formal Foundations"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"4. Comprehensive Mathematical Formulations"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"Basis Vector Geometry"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"R^K Orthogonal Basis"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"One-Hot Geometry & Equidistance"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Every distinct category c_k is mapped to a standard basis vector e_k in R^K. For any two distinct categories c_i != c_j:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 space-y-1",children:[e.jsx("div",{children:"Inner Product: <e_i, e_j> = 0  (Strict Orthogonality)"}),e.jsx("div",{children:"Euclidean Distance: ||e_i - e_j||_2 = sqrt(1^2 + (-1)^2) = sqrt(2)"}),e.jsx("div",{children:"Cosine Similarity: cos(theta) = 0.0"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"This geometric symmetry eliminates any arbitrary metric proximity, treating every nominal entity as equally distinct."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Linear Dependency Proof"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Rank Deficiency"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"The Dummy Variable Trap"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When all K one-hot indicator columns are included alongside an intercept beta_0:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-rose-300 space-y-1",children:[e.jsxs("div",{children:["x_intercept = sum_","{k=1}","^K x_k = 1  (Perfect Collinearity)"]}),e.jsx("div",{children:"det(X^T X) = 0  (Singular Gram Matrix)"}),e.jsx("div",{children:"beta_hat = (X^T X)^(-1) X^T y  --> UNDEFINED / FAILS"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Dropping one reference category restores full column rank K, allowing unique OLS solution calculation."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Empirical Bayesian Shrinkage"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Micci-Barreca / M-Estimate"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Smoothed Target Encoding Equation"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Combines category empirical target average with global prior to prevent rare-category memorization:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 space-y-1",children:[e.jsx("div",{children:"S_k = (n_k * y_bar_k + m * y_bar_global) / (n_k + m)"}),e.jsx("div",{children:"lambda(n_k) = n_k / (n_k + m)"}),e.jsxs("div",{children:["lim_","{n_k -> inf}"," S_k = y_bar_k  |  lim_","{n_k -> 0}"," S_k = y_bar_global"]})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Where n_k is category sample count, y_bar_k is category sample mean, and m is the smoothing pseudo-count."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider",children:"Basel II / III Banking Compliance"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Logit Linearization"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Weight of Evidence (WoE) & Information Value"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Transforms categorical bins into log-odds of good credit outcomes:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-amber-300 space-y-1",children:[e.jsxs("div",{children:["WoE_k = ln( (n_","{k,0}"," / N_0) / (n_","{k,1}"," / N_1) )"]}),e.jsxs("div",{children:["IV = sum_","{k=1}","^K [ (n_","{k,0}"," / N_0) - (n_","{k,1}"," / N_1) ] * WoE_k"]}),e.jsx("div",{children:"Rule: IV < 0.02 (Drop) | 0.3 - 0.5 (Strong) | > 0.5 (Leakage Risk)"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Directly linearizes the logistic regression link function, producing explainable credit scorecards."})]})]})]}),e.jsxs("section",{id:"cases",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Industrial Grounding"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"5. Real-World Regional Industrial Case Studies (West Bengal)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/40",children:"Tech Staffing Engine"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Barrackpore & Salt Lake Sector V"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Resume Screening Engine: College vs Tech Stack Encoding"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Susmita and Debangshu built an AI resume evaluator for Kolkata IT staffing agencies. The dataset had candidate qualifications (BCA < MCA < MTech), undergraduate colleges (MAKAUT, Jadavpur, Kalyani Govt Engg, Heritage, Techno India), and primary programming languages. They applied calibrated Ordinal Encoding to degrees, One-Hot Encoding (drop_first=True) to primary skills, and Smoothed Target Encoding (m=10) to regional engineering colleges, avoiding false metric rankings while preventing small suburban institutes from overfitting."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/40",children:"FinTech Micro-Lending"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Salt Lake Sector V, Kolkata"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Borrower Occupation & Weight of Evidence (WoE) Scorecards"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mamata spearheaded underwriting risk at a Kolkata-based NBFC. The applicant dataset held 'Borrower Occupation' (Govt Employee, IT Professional, Retail Shop Owner, Daily Wage Earner). Applying Weight of Evidence (WoE) transformation directly linearized the logistic log-odds (WoE_Govt = +1.91, WoE_DailyWage = -2.48). Information Value (IV) was calculated at 0.38, confirming prime predictive power while meeting Reserve Bank of India (RBI) adverse-action audit explainability requirements."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40",children:"Hyperlocal Logistics"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Ichapur & Shyamnagar Suburban Hubs"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"E-Commerce Pincode Routing: Defeating OOM with Feature Hashing"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mahima manages supply chain dispatch for an online grocery aggregator operating across North 24 Parganas and Hooghly. The 'Delivery Pincode' feature had 2,400 distinct levels. Generating dense one-hot vectors across 500,000 daily orders created a 1.2 billion-element matrix requiring 9.6 GB RAM, repeatedly triggering Out-Of-Memory (OOM) pod crashes. Mahima migrated to Feature Hashing with B=64 buckets, dropping memory to 256 MB while effortlessly routing new postal sub-branches without model retraining."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-rose-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/40",children:"Diagnostic Oncology"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Jadavpur Medical Research Hub"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Blood Group LabelEncoding Disaster in Colorectal Cancer Survival"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Abhronila audited a colorectal cancer recurrence model developed by a junior researcher. The intern had run Scikit-Learn's `LabelEncoder` on patient blood groups (A=0, AB=1, B=2, O=3). A Cox survival model assigned a positive hazard coefficient beta = +0.42 to Blood Group, falsely claiming that Blood Group O patients suffered 3x worse cancer mortality purely because of alphabetical indexing! Abhronila replaced it with One-Hot Encoding, proving blood group had zero biological correlation with recurrence."})]})]})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Defensive Architecture"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"6. Critical Production Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: LabelEncoder on Input Features"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Misusing Target Encoder on X"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"`LabelEncoder` is strictly designed for 1D target arrays (y). Passing multi-column features X injects an artificial numeric hierarchy into nominal categories. For features, always use `OrdinalEncoder` or `OneHotEncoder`."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: In-Sample Target Leakage"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Fitting Target Encoder Pre-Split"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Fitting a target encoder on the whole dataset before train_test_split leaks validation targets into training representations. Model achieves 0.98 ROC-AUC offline but collapses to 0.55 in live production. Use Out-of-Fold encoding!"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: Unseen Cold-Start Categories"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Crashing Live Inference APIs"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Default `handle_unknown='error'` throws a ValueError on novel categories in live production requests. Always configure `handle_unknown='ignore'` to assign all zeros safely to unseen levels."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 4: RAM Exhaustion from Dense OHE"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Ignoring Scipy CSR Sparsity"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"One-hot encoding 1,000 categories across 100,000 rows as a dense float array consumes 800 MB RAM. A Scipy CSR sparse matrix stores only non-zero coordinates, consuming just 3.2 MB (a 99.6% RAM saving)."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 5: Multicollinearity in OLS"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"The Full OHE Dummy Trap"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Feeding all K one-hot columns into unregularized linear regression causes singular Gram matrix inversion (det=0). Set `drop='first'` so the intercept serves as the reference category baseline."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-cyan-900/40 space-y-3",children:[e.jsxs("div",{className:"text-cyan-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Production Rule: Cyclic Boundaries"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Sinusoidal Circle Encoding"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Never encode hours (0..23) or months (1..12) as scalar integers. Project them onto the 2D unit circle using [sin(2pi t/T), cos(2pi t/T)] so that 23:00 and 00:00 remain smoothly adjacent in Euclidean space."})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Knowledge Verification"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"7. Diagnostic Assessment: Categorical Encoding Mastery"})]}),E&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold",children:["Score: ",L," / ",b.length," (",Math.round(L/b.length*100),"%)"]})]}),e.jsxs("div",{className:"space-y-6",children:[b.map((t,a)=>e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-start justify-between gap-3",children:e.jsxs("h3",{className:"text-sm font-bold text-white leading-relaxed",children:[e.jsxs("span",{className:"text-indigo-400 mr-2",children:["Q",a+1,"."]}),t.question]})}),e.jsx("div",{className:"grid grid-cols-1 gap-2 pt-2",children:t.options.map((n,l)=>{const s=f[a]===l,r=l===t.correctIndex;let d="bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300";return E?r?d="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold":s&&!r&&(d="bg-rose-950/60 border-rose-500 text-rose-200"):s&&(d="bg-indigo-950/80 border-indigo-500 text-white font-medium"),e.jsxs("button",{disabled:E,onClick:()=>I({...f,[a]:l}),className:_("p-3 rounded-xl text-xs text-left border transition-all cursor-pointer flex items-start gap-2",d),children:[e.jsxs("span",{className:"font-bold text-indigo-400",children:[String.fromCharCode(65+l),")"]}),e.jsx("span",{children:n})]},l)})}),E&&e.jsxs("div",{className:"pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-2 bg-slate-950/50 p-3 rounded-xl",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-indigo-300",children:"Explanation:"})," ",t.explanation]}),e.jsxs("p",{className:"text-cyan-400",children:[e.jsx("strong",{children:"Practical Rule:"})," ",t.practicalTip]})]})]},t.id)),e.jsx("div",{className:"flex justify-end gap-3 pt-4",children:E?e.jsx("button",{onClick:()=>{I({}),M(!1)},className:"px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all cursor-pointer",children:"Retake Assessment"}):e.jsx("button",{onClick:()=>M(!0),disabled:Object.keys(f).length<b.length,className:_("px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer",Object.keys(f).length===b.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed"),children:"Submit Diagnostic Assessment"})})]})]}),e.jsxs("section",{id:"handbook",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Academic Reference"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"8. Academic Revision Handbook & Viva Voce Q&A"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(Y,{content:Z,filename:"Topic18_Encoding_Categorical_Variables_Notes.txt"})})]}),e.jsxs("section",{id:"lab",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Hands-On Code"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"9. Pure Python Laboratory: Categorical Encoding Engines"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(Q,{code:$,filename:"encoding_categorical_variables_lab.py",runnable:!0})})]}),e.jsxs("section",{id:"teacher",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Faculty Mentorship"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"10. Teacher Consultation & Viva Guidance"})]}),e.jsx(J,{})]})]})};export{le as default};
