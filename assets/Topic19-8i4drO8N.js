import{b as i,j as e,bl as m}from"./vendor-react-core-B-R9HE-Z.js";import{P as D}from"./PythonFileLoader-DZ61U3Y_.js";import{P as X}from"./PlainTextPrint-C6NaUtnE.js";import{T as K}from"./TeacherSukantaHui-Ci09yFv7.js";import"./PythonCodeBlock-DaO0drnB.js";import"./vendor-prism-CMwpo_qY.js";import"./vendor-icons-DFIuzMjt.js";const P=`"""
=============================================================================
TOPIC 19: ONE-HOT ENCODING (OHE)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Academic Practical Laboratory & Industrial Simulation Engine
Author: Sukanta Hui | Coder & AccoTax | Barrackpore, West Bengal, India
Course: Introduction to Machine Learning (BCAC701B / MAKAUT Aligned)
=============================================================================

This laboratory engine demonstrates from first principles (Pure Python, Zero External Dependencies):
1. Orthogonal standard basis vector construction e_k in R^K and metric equidistance ||e_i - e_j|| = sqrt(2).
2. The Dummy Variable Trap: Algebraic proof of Gram matrix singularity det(X^T X) = 0 with an intercept.
3. Drop-First Reference Category Encoding: Restoring matrix invertibility and computing differential contrasts.
4. Compressed Sparse Row (CSR) Sparse Representation: Byte-level memory audit vs dense float arrays.
5. Infrequent Category Grouping / Threshold Pooling (min_frequency cutoff) to control feature explosion.
6. Handling Unseen Categories in Production Inference via handle_unknown='ignore' all-zero fallback.
7. Empirical simulation of OLS Linear Regression coefficients before and after dummy trap resolution.
=============================================================================
"""

import math
import sys
from typing import List, Dict, Any, Tuple, Optional, Set

# =====================================================================
# DATASET GENERATION: KOLKATA METRO & SECTOR V CONTRACT DATASET
# =====================================================================

def get_kolkata_procurement_data() -> List[Dict[str, Any]]:
    """
    Returns realistic engineering procurement records for infrastructure projects in West Bengal:
    - vendor_id: Vendor tracking ID
    - category: Engineering domain (Civil, Electrical, Signalling, Trackwork, Rolling-Stock, Rare-Ventilation)
    - district: Vendor HQ district (North 24 Parganas, Kolkata, Howrah, Hooghly)
    - project_budget_cr: Contract value in Crores (target)
    - quality_score: Audit quality score (0 to 100)
    """
    return [
        {"id": "V-01", "name": "L&T Infrastructure", "dept": "Civil", "district": "Kolkata", "budget_cr": 45.2, "score": 92},
        {"id": "V-02", "name": "Siemens Mobility", "dept": "Electrical", "district": "Salt Lake", "budget_cr": 28.5, "score": 88},
        {"id": "V-03", "name": "Alstom Signalling", "dept": "Signalling", "district": "Kolkata", "budget_cr": 34.0, "score": 95},
        {"id": "V-04", "name": "Titagarh Wagons", "dept": "Rolling-Stock", "district": "Barrackpore", "budget_cr": 62.0, "score": 91},
        {"id": "V-05", "name": "Texmaco Rail", "dept": "Trackwork", "district": "Kolkata", "budget_cr": 19.5, "score": 84},
        {"id": "V-06", "name": "Simplex Infrastructures", "dept": "Civil", "district": "Kolkata", "budget_cr": 41.0, "score": 82},
        {"id": "V-07", "name": "Schneider Electric", "dept": "Electrical", "district": "Salt Lake", "budget_cr": 26.0, "score": 89},
        {"id": "V-08", "name": "Howrah Track Tools", "dept": "Trackwork", "district": "Howrah", "budget_cr": 16.8, "score": 79},
        {"id": "V-09", "name": "Barrackpore Heavy Eng", "dept": "Rolling-Stock", "district": "Barrackpore", "budget_cr": 58.5, "score": 87},
        {"id": "V-10", "name": "Ansaldo STS", "dept": "Signalling", "district": "Salt Lake", "budget_cr": 31.2, "score": 93},
        {"id": "V-11", "name": "Bengal HVAC Systems", "dept": "Rare-Ventilation", "district": "Hooghly", "budget_cr": 8.5, "score": 75}, # Rare category
    ]

# =====================================================================
# 1. PURE PYTHON ONE-HOT ENCODER WITH INFREQUENT GROUPING & CSR
# =====================================================================

class OneHotEncoderEngine:
    """
    Production-grade One-Hot Encoder implemented from scratch:
    - Supports drop_first=True/False
    - Supports handle_unknown='ignore' | 'error'
    - Supports min_frequency threshold pooling into 'infrequent_sklearn' ('Other')
    - Can output dense 2D list or Compressed Sparse Row (CSR) representation
    """
    def __init__(
        self,
        drop_first: bool = False,
        handle_unknown: str = "ignore",
        min_frequency: Optional[int] = None
    ):
        self.drop_first = drop_first
        self.handle_unknown = handle_unknown
        self.min_frequency = min_frequency

        self.categories_: List[str] = []
        self.dropped_category_: Optional[str] = None
        self.infrequent_categories_: Set[str] = set()
        self.has_infrequent_: bool = False
        self.cat_to_idx_: Dict[str, int] = {}

    def fit(self, values: List[str]):
        # Count frequencies
        counts: Dict[str, int] = {}
        for val in values:
            counts[val] = counts.get(val, 0) + 1

        # Determine infrequent categories if threshold set
        frequent_cats = []
        self.infrequent_categories_ = set()
        if self.min_frequency is not None and self.min_frequency > 1:
            for cat, cnt in counts.items():
                if cnt < self.min_frequency:
                    self.infrequent_categories_.add(cat)
                else:
                    frequent_cats.append(cat)
            frequent_cats.sort()
            if self.infrequent_categories_:
                self.has_infrequent_ = True
                frequent_cats.append("infrequent_other")
        else:
            frequent_cats = sorted(list(counts.keys()))

        if self.drop_first and len(frequent_cats) > 1:
            self.dropped_category_ = frequent_cats[0]
            self.categories_ = frequent_cats[1:]
        else:
            self.dropped_category_ = None
            self.categories_ = frequent_cats

        self.cat_to_idx_ = {cat: idx for idx, cat in enumerate(self.categories_)}
        return self

    def transform_dense(self, values: List[str]) -> List[List[float]]:
        dim = len(self.categories_)
        output_matrix = []

        for val in values:
            vec = [0.0] * dim
            target_cat = val
            if val in self.infrequent_categories_:
                target_cat = "infrequent_other"

            if target_cat in self.cat_to_idx_:
                vec[self.cat_to_idx_[target_cat]] = 1.0
            elif self.drop_first and target_cat == self.dropped_category_:
                # Reference category: all-zero vector
                pass
            else:
                if self.handle_unknown == "error":
                    raise ValueError(f"Encountered unknown category: '{val}' during transform.")
                # "ignore": leave as all zeros
            output_matrix.append(vec)

        return output_matrix

    def transform_csr(self, values: List[str]) -> Dict[str, Any]:
        """
        Transforms input into Compressed Sparse Row (CSR) arrays:
        - data: non-zero floating values (all 1.0)
        - indices: column indices for each non-zero element
        - indptr: index pointers marking the start of each row
        """
        data: List[float] = []
        indices: List[int] = []
        indptr: List[int] = [0]

        for val in values:
            target_cat = val
            if val in self.infrequent_categories_:
                target_cat = "infrequent_other"

            if target_cat in self.cat_to_idx_:
                col_idx = self.cat_to_idx_[target_cat]
                data.append(1.0)
                indices.append(col_idx)
            indptr.append(len(data))

        return {
            "data": data,
            "indices": indices,
            "indptr": indptr,
            "shape": (len(values), len(self.categories_)),
            "nnz": len(data)
        }

# =====================================================================
# 2. LINEAR ALGEBRA & DUMMY VARIABLE TRAP DETECTOR
# =====================================================================

def compute_gram_matrix(X: List[List[float]]) -> List[List[float]]:
    """Computes X^T @ X."""
    N = len(X)
    d = len(X[0])
    # Initialize d x d matrix
    XTX = [[0.0] * d for _ in range(d)]
    for i in range(d):
        for j in range(d):
            val = 0.0
            for r in range(N):
                val += X[r][i] * X[r][j]
            XTX[i][j] = val
    return XTX

def compute_matrix_determinant(A: List[List[float]]) -> float:
    """
    Computes determinant of square matrix A via Gaussian elimination with partial pivoting.
    """
    n = len(A)
    # Deep copy
    M = [row[:] for row in A]
    det = 1.0

    for i in range(n):
        # Find pivot
        pivot_row = i
        max_val = abs(M[i][i])
        for r in range(i + 1, n):
            if abs(M[r][i]) > max_val:
                max_val = abs(M[r][i])
                pivot_row = r

        if max_val < 1e-12:
            return 0.0

        if pivot_row != i:
            M[i], M[pivot_row] = M[pivot_row], M[i]
            det *= -1.0

        det *= M[i][i]
        pivot = M[i][i]

        for r in range(i + 1, n):
            factor = M[r][i] / pivot
            for c in range(i, n):
                M[r][c] -= factor * M[i][c]

    return det

def solve_ols_system(X: List[List[float]], y: List[float]) -> Optional[List[float]]:
    """
    Solves OLS normal equation: (X^T X) beta = X^T y using Gaussian elimination.
    Returns None if (X^T X) is singular (det = 0).
    """
    XTX = compute_gram_matrix(X)
    d = len(XTX)
    
    # Compute X^T y
    XTy = [0.0] * d
    for i in range(d):
        for r in range(len(X)):
            XTy[i] += X[r][i] * y[r]

    # Augmented matrix [XTX | XTy]
    Aug = [XTX[r] + [XTy[r]] for r in range(d)]

    # Forward elimination
    for i in range(d):
        pivot_row = i
        max_val = abs(Aug[i][i])
        for r in range(i + 1, d):
            if abs(Aug[r][i]) > max_val:
                max_val = abs(Aug[r][i])
                pivot_row = r

        if max_val < 1e-9:
            # Singular matrix!
            return None

        if pivot_row != i:
            Aug[i], Aug[pivot_row] = Aug[pivot_row], Aug[i]

        pivot = Aug[i][i]
        for c in range(i, d + 1):
            Aug[i][c] /= pivot

        for r in range(d):
            if r != i:
                factor = Aug[r][i]
                for c in range(i, d + 1):
                    Aug[r][c] -= factor * Aug[i][c]

    # Extract solution
    beta = [Aug[i][d] for i in range(d)]
    return beta

# =====================================================================
# LABORATORY BENCHMARK SUITE
# =====================================================================

def run_laboratory():
    print("=" * 80)
    print("CODER & ACCOTAX - PURE PYTHON MACHINE LEARNING LAB (TOPIC 19)")
    print("ONE-HOT ENCODING (OHE): ALGEBRAIC RIGOR, DUMMY TRAP & SPARSE SCALING")
    print("Course: BCAC701B | Guide: Sukanta Hui | Barrackpore, West Bengal")
    print("=" * 80)

    dataset = get_kolkata_procurement_data()
    departments = [d["dept"] for d in dataset]
    budgets = [d["budget_cr"] for d in dataset]

    print(f"\\n[1] INSPECTING RAW KOLKATA INFRASTRUCTURE PROCUREMENT DATA ({len(dataset)} records):")
    print("-" * 75)
    print(f"{'ID':<6} {'Vendor Name':<26} {'Department':<18} {'Budget (₹ Cr)':<14} {'Score'}")
    print("-" * 75)
    for row in dataset[:6]:
        print(f"{row['id']:<6} {row['name']:<26} {row['dept']:<18} ₹{row['budget_cr']:<12.1f} {row['score']}")
    print("...")

    # --- EXPERIMENT 1: ORTHOGONAL GEOMETRY & EQUIDISTANCE ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 1] ORTHOGONAL BASIS GEOMETRY & EQUIDISTANCE PROOF")
    print("=" * 80)
    ohe_engine = OneHotEncoderEngine(drop_first=False)
    ohe_engine.fit(departments)
    dense_ohe = ohe_engine.transform_dense(departments)

    print(f"Discovered K = {len(ohe_engine.categories_)} categories: {ohe_engine.categories_}\\n")
    print("First 3 Encoded Row Vectors:")
    for i in range(3):
        print(f"  {dataset[i]['name']:<24} ({dataset[i]['dept']:<16}) -> {dense_ohe[i]}")

    # Compute inner product and distance between Sample 0 (Civil) and Sample 1 (Electrical)
    v0 = dense_ohe[0]
    v1 = dense_ohe[1]
    dot_prod = sum(a * b for a, b in zip(v0, v1))
    euclid_dist = math.sqrt(sum((a - b) ** 2 for a, b in zip(v0, v1)))

    print("\\nGeometric Audit:")
    print(f"  Inner Product <v_Civil, v_Electrical> = {dot_prod:.4f} (Strictly Orthogonal!)")
    print(f"  Euclidean Distance ||v_Civil - v_Electrical||_2 = {euclid_dist:.4f} (Exactly sqrt(2) = {math.sqrt(2):.4f})")
    print("  CONFIRMATION: Every distinct category is mutually orthogonal and equidistant.")

    # --- EXPERIMENT 2: THE DUMMY VARIABLE TRAP (SINGULAR GRAM MATRIX) ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 2] THE DUMMY VARIABLE TRAP: PROOF OF SINGULARITY det(X^T X) = 0")
    print("=" * 80)
    print("Constructing Design Matrix X_full with Intercept Column [1] + ALL K One-Hot Columns...")
    
    X_trap = []
    for row in dense_ohe:
        X_trap.append([1.0] + row)  # [intercept, cat1, cat2, ..., catK]

    XTX_trap = compute_gram_matrix(X_trap)
    det_trap = compute_matrix_determinant(XTX_trap)
    print(f"Design Matrix Shape: {len(X_trap)} rows x {len(X_trap[0])} columns")
    print(f"Gram Matrix (X^T X) Size: {len(XTX_trap)} x {len(XTX_trap)}")
    print(f"Computed Determinant det(X^T X): {det_trap:.6e}")

    ols_trap_solution = solve_ols_system(X_trap, budgets)
    print(f"Attempting Ordinary Least Squares beta = (X^T X)^(-1) X^T y...")
    if ols_trap_solution is None:
        print("  CRITICAL SYSTEM FAILURE: (X^T X) IS SINGULAR (RANK-DEFICIENT)!")
        print("  The intercept column is an exact linear combination of the K dummy columns:")
        print("      sum_{k=1}^K x_{ik} = 1.0 = x_{i, intercept}")
        print("  OLS CANNOT COMPUTE A UNIQUE INVERSE.")

    # --- EXPERIMENT 3: DROP-FIRST RESOLUTION & BASELINE INTERPRETATION ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 3] DROP-FIRST RESOLUTION & INTERPRETABLE CONTRAST COEFFICIENTS")
    print("=" * 80)
    ohe_drop = OneHotEncoderEngine(drop_first=True)
    ohe_drop.fit(departments)
    dense_drop = ohe_drop.transform_dense(departments)

    print(f"Dropped Reference Category: '{ohe_drop.dropped_category_}'")
    print(f"Active K-1 Columns ({len(ohe_drop.categories_)}): {ohe_drop.categories_}\\n")

    X_safe = []
    for row in dense_drop:
        X_safe.append([1.0] + row)

    XTX_safe = compute_gram_matrix(X_safe)
    det_safe = compute_matrix_determinant(XTX_safe)
    print(f"Safe Gram Matrix Determinant det(X_safe^T X_safe): {det_safe:.4f} (Strictly Non-Zero!)")

    beta_safe = solve_ols_system(X_safe, budgets)
    print("\\nFitted OLS Regression Coefficients:")
    print(f"  Intercept beta_0 (Baseline Mean for '{ohe_drop.dropped_category_}'): ₹{beta_safe[0]:.2f} Cr")
    for idx, cat in enumerate(ohe_drop.categories_):
        diff = beta_safe[idx + 1]
        expected_cat = beta_safe[0] + diff
        print(f"  Category '{cat:<16}' beta_{idx+1}: {diff:>+8.2f} Cr  (Expected Budget: ₹{expected_cat:.2f} Cr)")

    # --- EXPERIMENT 4: SPARSE CSR MATRIX VS DENSE MEMORY SCALING ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 4] COMPRESSED SPARSE ROW (CSR) MEMORY SCALING SIMULATION")
    print("=" * 80)
    csr_data = ohe_engine.transform_csr(departments)
    print("CSR Representation Structure:")
    print(f"  shape: {csr_data['shape']}")
    print(f"  nnz (Non-Zero Elements): {csr_data['nnz']}")
    print(f"  data[:6]   : {csr_data['data'][:6]}")
    print(f"  indices[:6]: {csr_data['indices'][:6]}")
    print(f"  indptr     : {csr_data['indptr']}")

    # Big-O RAM audit for 500,000 procurement transactions across K=2,500 postal codes:
    N_sim = 500_000
    K_sim = 2_500
    dense_bytes = N_sim * K_sim * 8  # float64
    dense_mb = dense_bytes / (1024 * 1024)
    # CSR: data (N*8) + indices (N*4) + indptr ((N+1)*4)
    csr_bytes = (N_sim * 8) + (N_sim * 4) + ((N_sim + 1) * 4)
    csr_mb = csr_bytes / (1024 * 1024)
    savings_pct = (1.0 - (csr_bytes / dense_bytes)) * 100

    print(f"\\nSimulated RAM Consumption for N={N_sim:,} orders & K={K_sim:,} Pincodes:")
    print(f"  Dense Numpy Array (float64): {dense_mb:>10.2f} MB ({dense_mb/1024:.2f} GB)")
    print(f"  Scipy CSR Matrix (int32/f64): {csr_mb:>10.2f} MB")
    print(f"  RAM Reduction: {savings_pct:.2f}% Memory Saved!")

    # --- EXPERIMENT 5: INFREQUENT CATEGORY POOLING (MIN_FREQUENCY) ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 5] INFREQUENT CATEGORY POOLING (min_frequency = 2)")
    print("=" * 80)
    ohe_pooled = OneHotEncoderEngine(drop_first=False, min_frequency=2)
    ohe_pooled.fit(departments)
    print(f"Infrequent Categories Pooled into 'infrequent_other': {ohe_pooled.infrequent_categories_}")
    print(f"Final Retained Categories ({len(ohe_pooled.categories_)}): {ohe_pooled.categories_}")
    
    rare_sample = ["Rare-Ventilation"]
    encoded_rare = ohe_pooled.transform_dense(rare_sample)
    print(f"Transformation of rare sample 'Rare-Ventilation':")
    print(f"  Vector: {encoded_rare[0]}")
    print(f"  Active Column: '{ohe_pooled.categories_[encoded_rare[0].index(1.0)]}'")

    # --- EXPERIMENT 6: UNSEEN PRODUCTION CATEGORY HANDLING ---
    print("\\n" + "=" * 80)
    print("[EXPERIMENT 6] UNSEEN CATEGORY HANDLING (handle_unknown='ignore')")
    print("=" * 80)
    unseen_samples = ["Civil", "Nuclear-Shielding", "Electrical", "Quantum-Computing"]
    print(f"Incoming production API payload: {unseen_samples}")
    encoded_unseen = ohe_engine.transform_dense(unseen_samples)
    for name, vec in zip(unseen_samples, encoded_unseen):
        status = "Recognized" if 1.0 in vec else "Unseen -> All-Zero Baseline Fallback"
        print(f"  {name:<20} -> {vec}  ({status})")

    print("\\n" + "=" * 80)
    print("ALL 6 PRACTICAL EXPERIMENTS COMPLETED SUCCESSFULLY WITH EXIT CODE 0.")
    print("=" * 80)

if __name__ == "__main__":
    run_laboratory()
`,B=`=============================================================================
CODER & ACCOTAX ACADEMIC STUDY NOTES & COMPREHENSIVE REVISION HANDBOOK
Course: Introduction to Machine Learning (Subject Code: BCAC701B / MAKAUT Aligned)
Module: Data Types and Preprocessing (Slug: 001_002_data-types-and-preprocessing)
Topic 19: One-Hot Encoding (OHE)
Author: Sukanta Hui | Senior Applied Machine Learning Engineer & Academic Mentor
Location: Barrackpore, North 24 Parganas, West Bengal, India
=============================================================================

1. THEORETICAL FOUNDATION & LINEAR VECTOR SPACE ALGEBRA
-----------------------------------------------------------------------------
1.1 The Definition of One-Hot Encoding
One-Hot Encoding (also known as 1-of-K scheme, dummy indicator encoding, or
orthogonal basis mapping) is a deterministic transformation that maps a discrete
qualitative categorical variable C containing K distinct levels {c_1, c_2, ..., c_K}
into a K-dimensional binary vector in {0, 1}^K.

Formally, for an observation x with category c in C:
    Phi_ohe(c) = [ I(c = c_1), I(c = c_2), ..., I(c = c_K) ]^T
where I(E) is the indicator function:
    I(E) = 1  if event E is true
    I(E) = 0  if event E is false

Each unique category c_k is mapped exactly to the k-th standard basis vector e_k
in Euclidean space R^K:
    e_1 = [1, 0, 0, ..., 0]^T
    e_2 = [0, 1, 0, ..., 0]^T
    ...
    e_K = [0, 0, 0, ..., 1]^T

1.2 Geometric Properties of the One-Hot Vector Space
The transformation Phi_ohe induces an isometric, symmetric coordinate space with
rigorous linear algebraic properties:

1. Mutual Orthogonality:
   For any two distinct categories c_i != c_j:
       <e_i, e_j> = sum_{m=1}^K e_{im} * e_{jm} = 0
   Because the standard basis vectors are perpendicular, the cosine similarity between
   any two distinct categories is identically zero:
       cos(theta) = <e_i, e_j> / (||e_i|| * ||e_j||) = 0 / (1 * 1) = 0.0
   This formally guarantees that no category is geometrically closer or more related
   to any other category prior to observing data.

2. Equidistance in Euclidean Metric:
   For any two distinct categories c_i != c_j:
       ||e_i - e_j||_2 = sqrt( sum_{m=1}^K (e_{im} - e_{jm})^2 )
                       = sqrt( (1 - 0)^2 + (0 - 1)^2 )
                       = sqrt(1 + 1) = sqrt(2) approx 1.4142
   Every category pair resides at the exact same Euclidean distance of sqrt(2).
   This completely remedies the artificial distance bias introduced by Label / Ordinal
   encoding, where d(c_i, c_j) = |i - j|.

3. L1 / Manhattan Distance:
   ||e_i - e_j||_1 = |1 - 0| + |0 - 1| = 2.0.

4. Convex Hull (The Standard Simplex Delta^{K-1}):
   Every one-hot vector lies on the boundary of the probability simplex in R^K:
       Delta^{K-1} = { x in R^K : x_k >= 0, sum_{k=1}^K x_k = 1 }


-----------------------------------------------------------------------------
2. THE DUMMY VARIABLE TRAP & FULL MATRIX RANK THEORY
-----------------------------------------------------------------------------
2.1 Mathematical Proof of Linear Dependency
Consider a linear regression model predicting target y from a categorical feature
with K levels, where an intercept term beta_0 is included:
    y_i = beta_0 + sum_{k=1}^K beta_k * x_{ik} + epsilon_i
where x_{ik} in {0, 1} is the indicator for category k.

Because every observation i belongs to exactly one category, the sum across all K
indicator columns is identically equal to 1 for every row:
    sum_{k=1}^K x_{ik} = 1.0  for all i = 1, 2, ..., N

Let X in R^{N x (K+1)} be the design matrix:
    X = [ 1_N | x_{*,1} | x_{*,2} | ... | x_{*,K} ]
where 1_N is the column vector of ones corresponding to the intercept.

Observe that:
    1_N - sum_{k=1}^K x_{*,k} = 0_N
This proves that the columns of X are linearly dependent. There exists a non-zero
linear combination of the columns that equals the zero vector:
    c = [1, -1, -1, ..., -1]^T  such that  X * c = 0_N

2.2 Rank Deficiency and Gram Matrix Singularity
By fundamental linear algebra:
    rank(X) <= K < K + 1
The Gram matrix (X^T X) is a square matrix of size (K+1) x (K+1).
Because rank(X^T X) = rank(X) <= K:
    det(X^T X) = 0
The Gram matrix is singular (non-invertible).
Consequently, the Ordinary Least Squares (OLS) normal equation:
    beta_hat = (X^T X)^(-1) X^T y
has NO unique analytical solution. Numerical solvers will either throw a
\`LinAlgError: Singular matrix\` exception or return wildly fluctuating, unstable
weights due to floating-point truncation.

2.3 The K - 1 Reference Category Solution (Drop-First)
To eliminate the dummy variable trap, exactly ONE category is dropped as the
reference / baseline category (typically category 1):
    X_{safe} = [ 1_N | x_{*,2} | x_{*,3} | ... | x_{*,K} ]
Now, X_{safe} has K columns, and all columns are linearly independent:
    rank(X_{safe}) = K
The Gram matrix (X_{safe}^T X_{safe}) is strictly positive definite and invertible:
    det(X_{safe}^T X_{safe}) > 0

2.4 Statistical Interpretation of Drop-First Regression Coefficients
Under drop-first encoding with reference category c_1:
- The intercept beta_0 represents the expected conditional mean of the target for
  the reference category:
      E[ y | c = c_1 ] = beta_0
- For any active category k in {2, ..., K}, the coefficient beta_k represents the
  differential contrast effect (the expected difference in y relative to reference c_1):
      beta_k = E[ y | c = c_k ] - E[ y | c = c_1 ]
      E[ y | c = c_k ] = beta_0 + beta_k

2.5 Why Ridge & Lasso Regularization Do NOT Require Dropping a Column
In L2-regularized regression (Ridge Regression, LogisticRegression with C parameter):
    beta_ridge = (X^T X + lambda * I)^(-1) X^T y
Because lambda * I adds a positive constant lambda > 0 to every diagonal element:
    lambda_min(X^T X + lambda * I) >= lambda > 0
The matrix is strictly positive definite and always invertible, even with all K
dummy columns and an intercept. However, dropping first remains industry best
practice for statistical hypothesis testing (p-values) and interpretability.


-----------------------------------------------------------------------------
3. SPARSE MATRIX REPRESENTATIONS & MEMORY COMPLEXITY SCALING
-----------------------------------------------------------------------------
3.1 The Memory Footprint of Dense Arrays
When an industrial dataset with N observations and a categorical feature with K
unique levels is one-hot encoded as a standard 2D array of 64-bit floats:
    Memory_dense = N * K * 8 bytes

Example (West Bengal E-Commerce Logistics):
    N = 1,000,000 orders
    K = 2,500 postal pincodes
    Memory_dense = 1,000,000 * 2,500 * 8 bytes = 20,000,000,000 bytes approx 18.63 GB RAM!
Attempting to allocate 18.63 GB in Python causes MemoryError or Linux OOM-killer crashes.

3.2 Compressed Sparse Row (CSR) Representation
Notice that in any one-hot encoded matrix, exactly ONE entry per row is non-zero (1.0),
while K - 1 entries are zero (0.0).
Matrix Sparsity:
    Sparsity = (K - 1) / K
For K = 2,500, the matrix is 99.96% sparse!

A Scipy / C++ Compressed Sparse Row (CSR) matrix stores only non-zero coordinates
using three 1D arrays:
1. \`data\`: Array of non-zero values (all 1.0). Length = NNZ = N.
   Memory = N * 8 bytes (float64).
2. \`indices\`: Array of column indices for each non-zero entry. Length = NNZ = N.
   Memory = N * 4 bytes (int32).
3. \`indptr\`: Array of row pointers marking where each row begins and ends. Length = N + 1.
   Memory = (N + 1) * 4 bytes (int32).

Total CSR Memory Formula:
    Memory_csr = N * 8 + N * 4 + (N + 1) * 4 = 16 * N + 4 bytes

CRITICAL ARCHITECTURAL INSIGHT:
The memory footprint of a one-hot CSR matrix is completely INDEPENDENT of cardinality K!
For N = 1,000,000 orders:
    Memory_csr = 1,000,000 * 16 bytes = 16,000,000 bytes approx 15.26 MB RAM!
Comparing 18.63 GB (Dense) to 15.26 MB (CSR):
    Memory Reduction = 99.92% RAM Saved!

3.3 Computational Speed of Sparse Matrix-Vector Multiplication
Multiplying a dense N x K matrix by a weight vector w takes O(N * K) FLOPs.
Multiplying a CSR sparse matrix takes O(NNZ) = O(N) FLOPs.
For K = 2,500, sparse dot-product operations are up to 2,500 times faster!


-----------------------------------------------------------------------------
4. TREE-BASED MODEL SPLIT PATHOLOGY WITH ONE-HOT ENCODING
-----------------------------------------------------------------------------
While One-Hot Encoding is mathematically optimal for linear, logistic, and neural
models, it creates significant performance degradation when fed into Decision Trees,
Random Forests, and Gradient Boosted Decision Trees (GBDT):

1. Feature Subsampling Dilution (The \`mtry\` Trap in Random Forests):
   Random Forests select a random subset of sqrt(D) features at each split node.
   If a single categorical feature with 100 levels is one-hot encoded into 100 binary
   columns, the total feature space explodes. The algorithm repeatedly selects
   uninformative binary columns (which contain mostly zeros) rather than substantive
   continuous predictors, degrading tree diversity and ensemble accuracy.

2. Tree Depth Inflation & Sample Support Fragmentation:
   A decision tree split takes the form: x_col <= 0.5.
   For a binary one-hot column, this split isolates only ONE category in the left child
   (where x = 1), leaving all other K - 1 categories grouped together in the right child.
   To isolate a subset of 5 related categories (e.g., suburban Kolkata districts), the
   tree must grow 5 sequential split levels deep. This fragments sample counts at each
   leaf node, leading to high-variance leaf predictions and severe overfitting.

3. Native Solutions in Modern Tree Frameworks:
   - LightGBM: Employs Fisher's optimal partitioning algorithm, sorting categories by
     their target statistics and finding the optimal subset split in O(K log K) time
     without one-hot column expansion.
   - CatBoost: Uses Ordered Target Encoding natively over categorical indices.


-----------------------------------------------------------------------------
5. PRODUCTION ARCHITECTURE: UNSEEN CATEGORIES & INFREQUENT GROUPING
-----------------------------------------------------------------------------
5.1 Handling Unseen / Cold-Start Categories
In production inference pipelines, incoming payloads frequently contain categories
that were absent during training:
- Scikit-Learn Default: \`OneHotEncoder(handle_unknown='error')\`.
  If an unseen city (e.g., "Jhargram") arrives, the pipeline raises \`ValueError: Found unknown categories\`,
  crashing the API with an unhandled HTTP 500 error!
- Production Standard: \`OneHotEncoder(handle_unknown='ignore')\`.
  Encodes unknown categories as an all-zero vector: [0.0, 0.0, ..., 0.0].
  Mathematically, this forces the model to fall back safely to the baseline intercept beta_0.

5.2 Infrequent Category Pooling (\`min_frequency\` / \`max_categories\`)
Introduced in Scikit-Learn 1.2+, infrequent category pooling groups rare levels into
a consolidated "infrequent_other" category before encoding:
- Parameters:
  - \`min_frequency\`: Minimum integer sample count (e.g., min_frequency=10) or fraction
    (e.g., min_frequency=0.01) required to retain an independent column.
  - \`max_categories\`: Upper bound on the total number of output columns.
- Prevents rare single-observation categories from bloating the feature matrix while
  retaining full expressive resolution on dominant business categories.


-----------------------------------------------------------------------------
6. REAL-WORLD REGIONAL INDUSTRIAL CASE STUDIES (WEST BENGAL)
-----------------------------------------------------------------------------

Case Study 1: Kolkata Metro Rail Corporation (KMRC) Vendor Tender Costing
- Context: Susmita is leading cost-estimation engineering for KMRC East-West Metro
  tunneling procurement.
- Dataset: Contains vendor records with categorical feature 'Engineering Department'
  (Civil, Electrical, Signalling, Trackwork, Rolling-Stock).
- Engineering Implementation:
  - Susmita fits an OLS multiple regression model to forecast contract bids.
  - Feeding all 5 one-hot columns alongside an intercept caused matrix inversion failure:
    det(X^T X) = 0.
  - She sets \`OneHotEncoder(drop='first')\`, selecting 'Civil' as the reference category.
  - The model yields:
        Intercept beta_0 (Civil Baseline) = ₹43.10 Cr
        beta_Electrical = -₹15.85 Cr (Expected Bid: ₹27.25 Cr)
        beta_RollingStock = +₹17.15 Cr (Expected Bid: ₹60.25 Cr)
  - Every coefficient provides an instantly interpretable contrast against Civil works.

Case Study 2: Salt Lake Sector V InsurTech Actuarial Claim Severity
- Context: Debangshu is developing a Generalized Linear Model (GLM with Gamma distribution)
  for commercial vehicle collision claim severity in West Bengal.
- Feature: 'Vehicle Body Type' (Hatchback, Sedan, SUV, Commercial-Truck, Two-Wheeler).
- Risk Audit:
  - The team initially trained an unregularized Poisson/Gamma GLM with all categories included.
  - The Fisher Information matrix was non-invertible due to the dummy variable trap, causing
    the iterative reweighted least squares (IRLS) optimizer to fail after 100 iterations.
  - By dropping 'Hatchback' as baseline, the IRLS optimizer converged in 6 iterations,
    revealing that Commercial-Truck claims average +142% higher severity than Hatchbacks.

Case Study 3: Barrackpore Loom Telemetry on Industrial Edge Gateways
- Context: Mamata deploys predictive maintenance models inside jute and textile mills
  in Barrackpore and Titagarh.
- Constraint: The edge gateway is a Raspberry Pi 4 with 2 GB RAM.
- Problem: The telemetry pipeline processes 100,000 vibration records with 'Loom Machine Model'
  (K = 250 unique machinery models).
- Dense vs Sparse Audit:
  - Dense array allocation: 100,000 * 250 * 8 bytes = 200 MB per batch.
  - Three simultaneous batch workers consumed 600 MB, triggering Raspberry Pi swap thrashing.
  - Mamata switched to \`OneHotEncoder(sparse_output=True)\`.
  - CSR memory dropped to 100,000 * 16 bytes = 1.6 MB per batch (a 99.2% reduction!),
    allowing the edge gateway to run 10 parallel inference threads at 45% CPU utilization.

Case Study 4: North 24 Parganas District Hospital Emergency Triage
- Context: Abhronila is developing an automated triage priority scoring engine for district
  hospitals in Barasat and Barrackpore.
- Features: 'Chief Complaint Category' (Trauma, Cardiac, Respiratory, Neurological, Gastrointestinal).
- Demographic Equity Audit:
  - An initial pipeline used Ordinal Encoding based on alphabetical order: Cardiac=0, Gastro=1,
    Neuro=2, Resp=3, Trauma=4.
  - The linear triage urgency model assigned Trauma the highest priority and Cardiac the lowest,
    solely because 'Cardiac' started with 'C' and received integer 0!
  - Abhronila corrected this clinical disaster by applying One-Hot Encoding, ensuring every
    medical emergency category has independent weights calibrated strictly by clinical risk.


-----------------------------------------------------------------------------
7. COMMON PRODUCTION PITFALLS & DEFENSIVE ENGINEERING RULES
-----------------------------------------------------------------------------

Pitfall 1: Calling \`.toarray()\` on Production Scikit-Learn Pipelines
- Novice developers often write: \`X_ohe = encoder.fit_transform(X).toarray()\`.
- In production with high cardinality (e.g. 5,000 categories), converting the native
  CSR matrix to dense NumPy format consumes tens of gigabytes of RAM, triggering
  immediate container restarts.
- Rule: Keep the output sparse! Most Scikit-Learn linear models (Ridge, SGDClassifier,
  LogisticRegression) and LightGBM accept Scipy CSR matrices directly with zero conversion overhead.

Pitfall 2: Dropping First Column When Training Decision Trees
- While \`drop='first'\` is essential for unregularized linear models, it is harmful for
  Decision Trees and Random Forests.
- In a tree, dropping the reference category forces the tree to make an inverse split
  (x_2 == 0 AND x_3 == 0 AND ... AND x_K == 0) to isolate the reference category,
  requiring K - 1 sequential branch decisions!
- Rule: Use \`drop='first'\` for linear/logistic models; use \`drop=None\` for tree models.

Pitfall 3: Train-Test Schema Mismatch (Dimensionality Drift)
- A developer runs \`pd.get_dummies(df_train)\` and \`pd.get_dummies(df_test)\` independently.
- If the test set lacks one category that was present in training, \`df_test\` will have
  fewer columns (e.g., 49 columns instead of 50).
- Passing this mismatched matrix into the trained model causes an immediate shape mismatch crash.
- Rule: Never use \`pd.get_dummies()\` for production ML. Always fit \`sklearn.preprocessing.OneHotEncoder\`
  on the training set and use its \`.transform()\` method on validation/production sets.


-----------------------------------------------------------------------------
8. SUKANTA HUI'S REVISION CHECKLIST & VIVA VOCE SUMMARY
-----------------------------------------------------------------------------
[ ] Formulate the standard basis vector mapping e_k in R^K and prove orthogonality <e_i, e_j> = 0.
[ ] Prove that Euclidean distance between any two distinct one-hot categories is sqrt(2).
[ ] Understand the Dummy Variable Trap: sum of dummy columns = intercept vector, det(X^T X) = 0.
[ ] State why dropping one column (K - 1 encoding) restores full rank and makes Gram matrix invertible.
[ ] Explain how drop-first regression coefficients represent contrast differences from baseline beta_0.
[ ] Know why Ridge regression (L2 regularization) can invert (X^T X + lambda I) without dropping columns.
[ ] Derive the memory footprint of CSR matrices: 16*N + 4 bytes, completely independent of K!
[ ] Explain why One-Hot Encoding degrades Random Forest performance (feature subsampling dilution).
[ ] Master Scikit-Learn's \`handle_unknown='ignore'\` and \`min_frequency\` pooling parameters.


-----------------------------------------------------------------------------
9. 10 IN-DEPTH MAKAUT VIVA VOCE QUESTIONS & MODEL ANSWERS
-----------------------------------------------------------------------------

Q1: What is the formal mathematical representation of One-Hot Encoding?
Model Answer:
One-Hot Encoding maps each category c_k in a discrete set of K categories to the k-th standard
basis vector e_k in R^K, defined as e_k = [0, ..., 0, 1, 0, ..., 0]^T where the 1 appears at index k.
The coordinate at index m is given by the indicator function I(c = c_m), which equals 1 if the
observation belongs to category m and 0 otherwise.

Q2: Prove mathematically that the Euclidean distance between any two distinct one-hot vectors is sqrt(2).
Model Answer:
Let e_i and e_j be one-hot vectors in R^K for distinct categories c_i != c_j. Vector e_i has a 1 at
index i and 0 elsewhere; e_j has a 1 at index j and 0 elsewhere. The Euclidean distance is:
    ||e_i - e_j||_2 = sqrt( sum_{m=1}^K (e_{im} - e_{jm})^2 )
For m = i: (1 - 0)^2 = 1. For m = j: (0 - 1)^2 = 1. For all other m != {i, j}: (0 - 0)^2 = 0.
Summing these gives:
    ||e_i - e_j||_2 = sqrt( 1 + 1 + 0 ) = sqrt(2) approx 1.4142.
This proves that all distinct categories are equidistant in one-hot Euclidean space.

Q3: What is the Dummy Variable Trap, and why does it make the Gram matrix non-invertible?
Model Answer:
The Dummy Variable Trap occurs in linear models with an intercept when all K categories are
represented by K binary indicator columns. Because every sample belongs to exactly one category,
the sum of all indicator columns across any row identically equals 1.0, which matches the intercept
column of 1s. This creates perfect multicollinearity, meaning the columns of design matrix X are
linearly dependent. Consequently, the (K+1) x (K+1) Gram matrix (X^T X) has rank at most K, its
determinant is zero (det=0), and it is mathematically singular, preventing Ordinary Least Squares
from calculating beta = (X^T X)^(-1) X^T y.

Q4: How does dropping one reference category resolve the Dummy Variable Trap?
Model Answer:
Dropping one category produces K - 1 indicator columns. Because the indicator sum now equals either
1 (for active categories) or 0 (for the dropped category), the sum no longer equals the constant
intercept column of 1s. The design matrix achieves full column rank K, making (X^T X) strictly
positive definite and invertible. The intercept beta_0 captures the baseline mean of the dropped
category, and the remaining coefficients represent differential contrasts relative to this baseline.

Q5: Why does Ridge Regression not fail when trained with all K dummy columns and an intercept?
Model Answer:
Ridge regression adds an L2 regularization penalty to the loss function, altering the normal
equation to: beta_ridge = (X^T X + lambda * I)^(-1) X^T y. Even though (X^T X) is singular with
at least one zero eigenvalue, adding lambda * I (where lambda > 0) shifts all eigenvalues upward
by lambda. Because all eigenvalues are now strictly positive (lambda_min >= lambda > 0), the matrix
is guaranteed to be strictly positive definite and invertible, regardless of multicollinearity.

Q6: What is a Compressed Sparse Row (CSR) matrix and what are its three internal arrays?
Model Answer:
A CSR matrix is a memory-efficient sparse data structure that stores only non-zero matrix elements.
It consists of three arrays:
1. \`data\`: Stores the non-zero floating-point values (length = NNZ).
2. \`indices\`: Stores the column indices corresponding to each non-zero entry (length = NNZ, int32).
3. \`indptr\`: Stores row pointers indicating the start and end offsets of each row within \`data\`
   and \`indices\` (length = N + 1, int32).
For one-hot matrices with N rows, CSR requires exactly 16*N + 4 bytes, completely independent of
the number of columns K.

Q7: Why do Decision Trees and Random Forests perform poorly on One-Hot Encoded high-cardinality features?
Model Answer:
One-Hot Encoding splits a single categorical variable into hundreds of binary columns. This causes:
1. Feature subsampling dilution: During Random Forest split selection (mtry), the tree randomly
   samples mostly uninformative binary columns containing 99% zeros, diluting the chance of
   selecting meaningful predictors.
2. Sample fragmentation: A single binary split isolates only one category, forcing the tree to
   grow very deep to group related categories, leading to small sample support at leaf nodes and
   severe overfitting.

Q8: What happens in production if \`handle_unknown='ignore'\` is not specified in \`OneHotEncoder\`?
Model Answer:
By default, Scikit-Learn's \`OneHotEncoder\` sets \`handle_unknown='error'\`. If a production request
contains a categorical value that was never seen in the training dataset (e.g., a newly registered
city or postal code), \`transform()\` raises a \`ValueError\`. In an API service (like FastAPI or Flask),
this causes an unhandled exception and an HTTP 500 Internal Server Error. Setting \`handle_unknown='ignore'\`
safely maps novel categories to an all-zero vector, allowing the model to fall back to the intercept.

Q9: What is the purpose of \`min_frequency\` in Scikit-Learn's \`OneHotEncoder\`?
Model Answer:
\`min_frequency\` (introduced in Scikit-Learn 1.2) controls categorical feature explosion by setting
a minimum sample threshold. Any category with fewer occurrences than \`min_frequency\` is automatically
pooled into a shared "infrequent_other" category before one-hot transformation. This prevents rare
categories with minimal statistical support from expanding the matrix dimension and overfitting the model.

Q10: Why is \`pd.get_dummies()\` considered an anti-pattern for production machine learning pipelines?
Model Answer:
\`pd.get_dummies()\` does not maintain persistent state or learned vocabulary schemas across calls.
If applied separately to training and test sets, any category present in training but absent in
testing (or vice-versa) will produce different numbers of columns or different column orderings.
This leads to dimensional mismatch errors during inference. Scikit-Learn's \`OneHotEncoder\` is a
formal estimator that persists \`categories_\` across \`.fit()\` and \`.transform()\`, guaranteeing 100%
schema consistency.
=============================================================================
`,$=()=>{const[q,F]=i.useState("hero");i.useId();const[b,S]=i.useState("trap"),[x,C]=i.useState("drop_first"),[_,R]=i.useState(25e4),[v,A]=i.useState(500),[y,k]=i.useState(2),[G,H]=i.useState(!1),[N,I]=i.useState(""),[h,w]=i.useState({}),[f,j]=i.useState(!1),u=i.useMemo(()=>{let t=0,n=!1,s="",r=[];return x==="full_intercept"?(t=0,n=!1,s="SINGULAR MATRIX DET = 0 (OLS FAILS)",r=[{label:"Intercept (beta_0)",val:"UNDEFINED",note:"Multicollinearity with column sum"},{label:"Civil (beta_1)",val:"NaN",note:"Rank-deficient"},{label:"Electrical (beta_2)",val:"NaN",note:"Rank-deficient"},{label:"Signalling (beta_3)",val:"NaN",note:"Rank-deficient"},{label:"Rolling-Stock (beta_4)",val:"NaN",note:"Rank-deficient"},{label:"Trackwork (beta_5)",val:"NaN",note:"Rank-deficient"}]):x==="drop_first"?(t=32,n=!0,s="STRICTLY INVERTIBLE DET = 32.0 (OLS OPTIMAL)",r=[{label:"Intercept (beta_0)",val:"₹43.10 Cr",note:"Civil Baseline Expected Mean"},{label:"Electrical (beta_1)",val:"-₹15.85 Cr",note:"Contrast relative to Civil"},{label:"Signalling (beta_2)",val:"-₹10.50 Cr",note:"Contrast relative to Civil"},{label:"Rolling-Stock (beta_3)",val:"+₹17.15 Cr",note:"Contrast relative to Civil"},{label:"Trackwork (beta_4)",val:"-₹24.95 Cr",note:"Contrast relative to Civil"}]):(t=72,n=!0,s="INVERTIBLE DET = 72.0 (NO BASELINE INTERCEPT)",r=[{label:"Civil (beta_1)",val:"₹43.10 Cr",note:"Absolute Mean (No Intercept)"},{label:"Electrical (beta_2)",val:"₹27.25 Cr",note:"Absolute Mean (No Intercept)"},{label:"Signalling (beta_3)",val:"₹32.60 Cr",note:"Absolute Mean (No Intercept)"},{label:"Rolling-Stock (beta_4)",val:"₹60.25 Cr",note:"Absolute Mean (No Intercept)"},{label:"Trackwork (beta_5)",val:"₹18.15 Cr",note:"Absolute Mean (No Intercept)"}]),{det:t,isInvertible:n,statusText:s,coefficients:r}},[x]),a=i.useMemo(()=>{const t=_,n=v,s=t*n*8,r=Number((s/(1024*1024)).toFixed(1)),l=Number((s/(1024*1024*1024)).toFixed(2)),p=16*t+4,d=Number((p/(1024*1024)).toFixed(2)),c=Number(((1-p/s)*100).toFixed(2)),O=Number(((n-1)/n*100).toFixed(2)),L=r>2048?"CRITICAL (OOM KILLER TERMINATION)":r>1024?"WARNING (HIGH MEMORY PRESSURE)":"SAFE";return{denseMB:r,denseGB:l,csrMB:d,savingsPct:c,sparsityPct:O,oomRisk:L,N:t,K:n}},[_,v]),o=i.useMemo(()=>{const t=[{name:"Civil Engineering",count:6},{name:"Electrical Works",count:4},{name:"Track Alignment",count:3},{name:"Subway Ventilation",count:1},{name:"Geothermal Shielding",count:1}],n=y,s=[],r=[];t.forEach(c=>{c.count>=n?s.push(c.name):r.push(c.name)});const l=[...s];r.length>0&&l.push("infrequent_other");let p=l.map(c=>s.includes("Subway Ventilation")?c==="Subway Ventilation"?1:0:c==="infrequent_other"?1:0),d=l.map(()=>0);return{retained:s,pooled:r,finalColumns:l,sampleVector:p,unseenVector:d,tau:n}},[y]),g=[{id:1,question:"What is the mathematical reason that the Gram matrix (X^T X) has det = 0 in unregularized Ordinary Least Squares when an intercept is included with all K one-hot columns?",options:["Because the columns of X are linearly dependent: sum_{k=1}^K x_{ik} = 1.0 = x_{i,intercept}, rendering X rank-deficient (rank <= K < K+1).","Because one-hot vectors have zero eigenvalues in the Fourier domain.","Because standard basis vectors have negative inner products.","Because one-hot encoding doubles the condition number of the target vector."],correctIndex:0,explanation:"Every row in a one-hot matrix sums to exactly 1.0. This identical linear combination matches the constant intercept column of 1s, causing perfect multicollinearity. The Gram matrix (X^T X) has rank at most K, meaning det(X^T X) = 0 and (X^T X)^(-1) does not exist.",practicalTip:"Always pass `drop='first'` to `OneHotEncoder` when using unregularized linear regression or statsmodels OLS."},{id:2,question:"In drop-first linear regression where 'Civil' is the reference category, the intercept beta_0 = 43.10 and the coefficient for 'Rolling-Stock' beta_rs = +17.15. What is the expected budget for a Rolling-Stock contract?",options:["₹17.15 Crores","₹43.10 Crores","₹60.25 Crores (43.10 + 17.15)","₹25.95 Crores (43.10 - 17.15)"],correctIndex:2,explanation:"Under drop-first encoding, beta_0 captures the baseline mean of the reference category ('Civil' = ₹43.10 Cr), and beta_rs represents the differential contrast relative to that baseline. The expected value for Rolling-Stock is beta_0 + beta_rs = 43.10 + 17.15 = ₹60.25 Cr.",practicalTip:"In corporate econometric reports, explain beta coefficients as differential premiums or discounts relative to the designated reference group."},{id:3,question:"Why is the memory footprint of a Compressed Sparse Row (CSR) one-hot matrix completely independent of the cardinality K?",options:["Because CSR stores only non-zero values; every row contains exactly ONE non-zero entry (1.0), so NNZ = N regardless of whether K is 10 or 100,000.","Because CSR compresses strings using gzip.","Because CSR removes all duplicate rows automatically.","Because CSR uses 1-bit booleans instead of floating-point numbers."],correctIndex:0,explanation:"A CSR matrix stores `data` (N floats), `indices` (N integers), and `indptr` (N+1 integers). Because each observation belongs to only one category, there is exactly one non-zero entry per row (NNZ = N). The memory is strictly 16*N + 4 bytes, completely unaffected by how many columns K exist.",practicalTip:"Keep `sparse_output=True` in Scikit-Learn; never call `.toarray()` on high-cardinality feature matrices."},{id:4,question:"Why does dropping the first category (`drop='first'`) harm Decision Trees and Random Forests, even though it is required for linear models?",options:["Decision trees cannot split on floating-point numbers.","Dropping the category forces the tree to make an inverse multi-condition split across K-1 columns just to isolate the reference category, wasting tree depth and increasing variance.","Random Forests require all Gram matrices to have non-zero determinants.","Decision trees automatically invert feature matrices using gradient descent."],correctIndex:1,explanation:"Trees split on individual columns (e.g. x_col <= 0.5). If a reference category has no column, the tree can only identify it when all other K-1 columns are simultaneously zero, requiring K-1 sequential tree splits! Trees do not suffer from multicollinearity, so they should always receive all K columns (`drop=None`).",practicalTip:"Use `drop='first'` for linear/logistic models, but keep `drop=None` for XGBoost, LightGBM, and Random Forest."},{id:5,question:"Why is `pd.get_dummies()` considered a risky anti-pattern in production machine learning pipelines?",options:["It lacks persistent state: if the inference dataset has different categories from the training set, column counts and orderings will mismatch, crashing the model.","It only works on integer data types.","It permanently modifies the input DataFrame in place.","It requires a GPU to execute."],correctIndex:0,explanation:"Unlike Scikit-Learn's `OneHotEncoder`, `pd.get_dummies()` does not retain a learned schema. If an inference payload has fewer or more categories than the training set, `pd.get_dummies()` produces a DataFrame with different columns, causing immediate shape mismatch errors in production.",practicalTip:"Always fit `sklearn.preprocessing.OneHotEncoder` on training data and use `.transform()` on production payloads."}],E=[{term:"One-Hot Encoding (OHE)",definition:"A categorical encoding method mapping each of K unique levels into a standard basis vector e_k in R^K containing a single 1 and K-1 zeros."},{term:"Orthogonal Basis",definition:"A set of basis vectors whose pairwise inner products are strictly zero (<e_i, e_j> = 0 for i != j), ensuring zero geometric correlation between categories."},{term:"Equidistance Metric",definition:"The mathematical property where every pair of distinct one-hot categories has the exact same Euclidean distance: ||e_i - e_j||_2 = sqrt(2) approx 1.4142."},{term:"Dummy Variable Trap",definition:"A condition of perfect multicollinearity occurring when all K one-hot columns are included alongside an intercept, making (X^T X) rank-deficient and singular (det=0)."},{term:"Reference Category (Baseline)",definition:"The single category omitted in K-1 encoding; its expected outcome is captured by the regression intercept beta_0, while active dummy coefficients measure contrast differences."},{term:"Compressed Sparse Row (CSR)",definition:"A memory-efficient matrix format storing only non-zero coordinates via three 1D arrays (`data`, `indices`, `indptr`), reducing memory by up to 99.9% on one-hot data."},{term:"Infrequent Category Pooling",definition:"The technique of grouping rare categories occurring fewer than `min_frequency` times into a single consolidated 'infrequent_other' column to control feature explosion."},{term:"mtry Subsampling Dilution",definition:"A degradation in Random Forests where hundreds of sparse one-hot binary columns dilute the random feature selection process, starving the tree of substantive continuous predictors."},{term:"handle_unknown='ignore'",definition:"A Scikit-Learn production parameter that encodes unseen categories during inference as an all-zero vector, safely defaulting to the baseline intercept without crashing."}],M=i.useMemo(()=>{if(!N.trim())return E;const t=N.toLowerCase();return E.filter(n=>n.term.toLowerCase().includes(t)||n.definition.toLowerCase().includes(t))},[N]),T=i.useMemo(()=>{let t=0;return g.forEach((n,s)=>{h[s]===n.correctIndex&&t++}),t},[h]);return e.jsxs("div",{className:"space-y-12 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-16 px-4 sm:px-6",children:[e.jsxs("header",{className:"bg-gradient-to-r from-slate-900 via-indigo-950 to-slate-900 p-8 sm:p-10 rounded-3xl border border-indigo-800/40 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Data Types and Preprocessing • Topic 19"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Masterclass Standard"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Linear Algebra & CSR Verified"})]}),e.jsx("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"One-Hot Encoding (OHE): Orthogonal Geometry, The Dummy Trap & CSR Scaling"}),e.jsx("p",{className:"text-sm sm:text-base text-slate-300 max-w-4xl leading-relaxed",children:"Dive into the definitive mathematical mechanics of One-Hot Encoding. Understand why mapping qualitative symbols to standard basis vectors e_k in R^K guarantees mutual orthogonality and uniform sqrt(2) Euclidean distance. Master the algebraic proof of the Dummy Variable Trap that makes unregularized linear models singular (det=0), discover how drop-first K-1 encoding unlocks interpretable contrast coefficients, and uncover how Compressed Sparse Row (CSR) matrices slash memory by 99.9% with zero dependence on category cardinality K."}),e.jsxs("div",{className:"pt-4 border-t border-indigo-900/50",children:[e.jsx("span",{className:"text-[11px] font-bold text-indigo-300 uppercase tracking-wider block mb-2",children:"Curriculum Roadmap Jump Navigation:"}),e.jsx("div",{className:"flex flex-wrap gap-2 text-xs",children:[{id:"#novice",label:"1. Novice Masterclass"},{id:"#jargon",label:"2. Basis & Jargon"},{id:"#studio",label:"3. Interactive Studio"},{id:"#math",label:"4. Mathematical Formulations"},{id:"#cases",label:"5. Regional Cases"},{id:"#pitfalls",label:"6. Production Pitfalls"},{id:"#quiz",label:"7. Diagnostic Quiz"},{id:"#handbook",label:"8. Academic Notes"},{id:"#lab",label:"9. Python Lab"},{id:"#teacher",label:"10. Teacher Guidance"}].map(t=>e.jsx("a",{href:t.id,className:"px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-indigo-600 text-slate-300 hover:text-white border border-slate-700/60 transition-all font-medium",children:t.label},t.id))})]})]})]}),e.jsxs("section",{id:"novice",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Foundational Pedagogy"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"1. Novice Masterclass: Intuitive Mental Models"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-indigo-500/20 border border-indigo-500/40 flex items-center justify-center text-2xl",children:"💡"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 1: The Dedicated Switch Panel"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:'Imagine a home with 5 rooms. If you control them with a single rotary dial (0=Living Room, 1=Kitchen, 2=Bedroom, 3=Balcony), you are forcing a bizarre rule where Balcony is "three times brighter" than Kitchen! One-Hot Encoding replaces the rotary dial with 5 dedicated on/off toggle switches. Each room gets its own independent light switch!'})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-indigo-300 font-mono",children:"Bedroom ON -> [0, 0, 1, 0, 0]"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-2xl",children:"📐"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 2: Perpendicular 90-Degree Axes"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"In geometry, if two arrows point at 90 degrees to each other, walking along the X-axis changes nothing about your Y position. One-Hot Encoding erects K perpendicular axes in high-dimensional space. The inner product between any two distinct categories is 0, and the Euclidean distance is strictly sqrt(2) approx 1.414. Nobody is closer, nobody is farther!"})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-cyan-300 font-mono",children:"<e_civil, e_electrical> = 0 | ||e_i - e_j|| = sqrt(2)"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-4 flex flex-col justify-between",children:[e.jsxs("div",{className:"space-y-3",children:[e.jsx("div",{className:"w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl",children:"📦"}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Metaphor 3: The Warehouse Packing Paradox"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Suppose a warehouse stores 1,000 bins, but every customer shipment contains only 1 item. A dense array stores 999 empty air-filled boxes alongside the 1 item, filling a 20 GB warehouse. A Compressed Sparse Row (CSR) matrix stores only the single parcel tag, cutting warehouse volume down to 15 MB (a 99.9% space saving)!"})]}),e.jsx("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-emerald-300 font-mono",children:"Dense = 20 GB | CSR Sparse = 15 MB (99.9% Saved)"})]})]})]}),e.jsxs("section",{id:"jargon",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Geometric Vocabulary"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"2. The Orthogonal Basis & Jargon Glossary"})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"text-base font-bold text-white",children:"OHE Academic Jargon Buster"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Search and explore formal mathematical definitions for university examinations and interviews"})]}),e.jsx("input",{type:"text",placeholder:"Search concepts (e.g. CSR, Dummy Trap, Equidistance)...",value:N,onChange:t=>I(t.target.value),className:"px-4 py-2 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:outline-none focus:border-indigo-500 w-full sm:w-64"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2",children:M.map(t=>e.jsxs("div",{className:"p-3.5 rounded-xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300",children:t.term}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:t.definition})]},t.term))})]})]}),e.jsxs("section",{id:"studio",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Simulation Sandbox"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"3. Interactive One-Hot Encoding Laboratory Studio"})]}),e.jsx("div",{className:"flex gap-2",children:[{id:"trap",label:"Mode A: Dummy Trap Arena"},{id:"memory",label:"Mode B: CSR Memory Scaler"},{id:"infrequent",label:"Mode C: Infrequent Pooling"}].map(t=>e.jsx("button",{onClick:()=>S(t.id),className:m("px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer",b===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400":"bg-slate-800 text-slate-400 hover:text-white border border-slate-700"),children:t.label},t.id))})]}),b==="trap"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-rose-400",children:"⚠️"})," The Dummy Variable Trap & Matrix Rank Playground"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulating OLS normal equations on Kolkata Metro Rail tender budget estimations"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"full_intercept",label:"Intercept + All K Columns (TRAP)"},{id:"drop_first",label:"Intercept + K-1 Columns (SAFE)"},{id:"no_intercept",label:"No Intercept + All K Columns"}].map(t=>e.jsx("button",{onClick:()=>C(t.id),className:m("px-3 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer",x===t.id?"bg-indigo-600 text-white shadow-md border border-indigo-400":"bg-slate-950 text-slate-400 hover:text-white border border-slate-800"),children:t.label},t.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Gram Matrix Status"}),e.jsx("div",{className:m("text-xs font-bold font-mono",u.isInvertible?"text-emerald-400":"text-rose-400"),children:u.statusText})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Determinant det(X^T X)"}),e.jsx("div",{className:m("text-sm font-bold font-mono",u.det===0?"text-rose-400":"text-emerald-400"),children:u.det.toFixed(2)})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"OLS Invertibility"}),e.jsx("div",{className:"text-sm font-bold text-white font-mono",children:u.isInvertible?"Invertible (Unique Solution)":"Singular (Zero Inverse)"})]})]}),e.jsx("div",{className:"overflow-x-auto rounded-2xl border border-slate-800",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 bg-slate-950/60",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase tracking-wider text-[10px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Model Parameter"}),e.jsx("th",{className:"p-3",children:"Fitted Coefficient (beta)"}),e.jsx("th",{className:"p-3",children:"Econometric & Statistical Interpretation"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800 font-mono",children:u.coefficients.map(t=>e.jsxs("tr",{className:t.val==="NaN"?"bg-rose-950/20":"",children:[e.jsx("td",{className:"p-3 font-sans font-bold text-white",children:t.label}),e.jsx("td",{className:m("p-3 font-bold",t.val.includes("-")?"text-cyan-400":t.val.includes("+")?"text-emerald-400":t.val==="NaN"||t.val==="UNDEFINED"?"text-rose-400":"text-indigo-300"),children:t.val}),e.jsx("td",{className:"p-3 font-sans text-xs text-slate-400",children:t.note})]},t.label))})]})}),e.jsx("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed",children:x==="full_intercept"?e.jsxs("p",{className:"text-rose-300",children:["❌ ",e.jsx("strong",{children:"Dummy Trap Active:"})," The sum of all 5 department indicator columns identically equals the constant intercept column: ",e.jsxs("code",{children:["sum_","{k=1}","^5 x_k = 1.0 = x_intercept"]}),". This creates perfect multicollinearity, making ",e.jsx("code",{children:"(X^T X)"})," singular (det = 0). OLS cannot compute a unique solution!"]}):x==="drop_first"?e.jsxs("p",{className:"text-emerald-300",children:["✔ ",e.jsx("strong",{children:"Drop-First Optimal:"})," By omitting 'Civil Engineering' as the reference baseline, the intercept beta_0 captures the baseline mean contract price (₹43.10 Cr). Every active coefficient represents a direct contrast: Electrical tenders average ₹15.85 Cr less than Civil, while Rolling-Stock tenders average ₹17.15 Cr more!"]}):e.jsxs("p",{className:"text-cyan-300",children:["ℹ️ ",e.jsx("strong",{children:"No Intercept Model:"})," Removing the intercept restores matrix invertibility without dropping a category. Each beta_k now represents the absolute mean of that category directly, though standard R^2 calculations become non-standard."]})})]}),b==="memory"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-emerald-400",children:"💾"})," Compressed Sparse Row (CSR) vs Dense RAM Scaler"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Simulate memory consumption for massive industrial datasets (e.g. West Bengal e-commerce delivery pincodes)"})]}),e.jsxs("div",{className:m("px-3 py-1.5 rounded-xl text-xs font-bold border",a.denseMB>2048?"bg-rose-500/20 text-rose-300 border-rose-500/40":a.denseMB>1024?"bg-amber-500/20 text-amber-300 border-amber-500/40":"bg-emerald-500/20 text-emerald-300 border-emerald-500/40"),children:["2GB Docker Status: ",a.oomRisk]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 bg-slate-950 p-6 rounded-2xl border border-slate-800",children:[e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-slate-300",children:"Dataset Rows (N):"}),e.jsxs("span",{className:"font-mono font-bold text-cyan-400",children:[a.N.toLocaleString()," orders"]})]}),e.jsx("input",{type:"range",min:"10000",max:"1000000",step:"10000",value:_,onChange:t=>R(Number(t.target.value)),className:"w-full accent-cyan-500 cursor-pointer"})]}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs",children:[e.jsx("span",{className:"font-bold text-slate-300",children:"Category Cardinality (K):"}),e.jsxs("span",{className:"font-mono font-bold text-indigo-400",children:[a.K.toLocaleString()," unique pincodes"]})]}),e.jsx("input",{type:"range",min:"5",max:"2500",step:"25",value:v,onChange:t=>A(Number(t.target.value)),className:"w-full accent-indigo-500 cursor-pointer"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Dense 2D NumPy Array"}),e.jsx("div",{className:"text-base font-bold font-mono text-rose-400",children:a.denseMB>1024?`${a.denseGB} GB`:`${a.denseMB} MB`}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"N * K * 8 bytes (float64)"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Scipy CSR Sparse Matrix"}),e.jsxs("div",{className:"text-base font-bold font-mono text-emerald-400",children:[a.csrMB," MB"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"16 * N + 4 bytes (Constant vs K!)"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"RAM Savings"}),e.jsxs("div",{className:"text-base font-bold font-mono text-cyan-400",children:[a.savingsPct,"%"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Memory Saved via Sparsity"})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-[10px] uppercase font-bold text-slate-500",children:"Matrix Sparsity"}),e.jsxs("div",{className:"text-base font-bold font-mono text-purple-400",children:[a.sparsityPct,"%"]}),e.jsx("span",{className:"text-[10px] text-slate-500",children:"Proportion of Zero Coordinates"})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-950 p-5 rounded-2xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-slate-300 block",children:"Relative Memory Footprint Bar:"}),e.jsxs("div",{className:"space-y-2",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-rose-400 font-bold",children:"Dense Array (100% capacity)"}),e.jsxs("span",{className:"font-mono text-slate-400",children:[a.denseMB," MB"]})]}),e.jsx("div",{className:"w-full h-3 bg-slate-800 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-rose-500 rounded-full w-full"})})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex justify-between text-[11px]",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"CSR Sparse Representation"}),e.jsxs("span",{className:"font-mono text-slate-400",children:[a.csrMB," MB"]})]}),e.jsx("div",{className:"w-full h-3 bg-slate-800 rounded-full overflow-hidden",children:e.jsx("div",{className:"h-full bg-emerald-500 rounded-full transition-all duration-300",style:{width:`${Math.max(.5,a.csrMB/a.denseMB*100)}%`}})})]})]})]}),e.jsx("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 text-xs text-slate-300 leading-relaxed",children:e.jsxs("p",{children:[e.jsx("strong",{children:"Architectural Insight:"})," Notice how moving the cardinality slider from K=5 to K=2,500 causes the dense memory to skyrocket from ",(a.N*5*8/(1024*1024)).toFixed(1)," MB up to ",(a.N*2500*8/(1024*1024*1024)).toFixed(1)," GB, while the CSR matrix memory stays ",e.jsxs("strong",{children:["completely rock-solid at ",a.csrMB," MB"]}),"! This is because CSR stores only the 1 non-zero entry per row, rendering its storage cost 100% immune to cardinality explosion."]})})]}),b==="infrequent"&&e.jsxs("div",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-3xl border border-indigo-900/40 shadow-2xl space-y-6",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h3",{className:"text-lg font-bold text-white flex items-center gap-2",children:[e.jsx("span",{className:"text-purple-400",children:"🛡️"})," Infrequent Category Pooling & Cold-Start Defense"]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Scikit-Learn 1.2+ `min_frequency` pooling and `handle_unknown='ignore'` all-zero fallback"})]}),e.jsxs("div",{className:"flex items-center gap-3 bg-slate-950 p-2.5 rounded-2xl border border-slate-800",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-300",children:"min_frequency (tau):"}),e.jsx("input",{type:"range",min:"1",max:"5",step:"1",value:y,onChange:t=>k(Number(t.target.value)),className:"w-24 accent-purple-500 cursor-pointer"}),e.jsx("span",{className:"text-xs font-mono font-bold text-white w-6 text-right",children:y})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"text-[10px] uppercase font-bold text-emerald-400",children:["Retained Dominant Columns (",o.retained.length,")"]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:o.retained.map(t=>e.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-bold bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",children:t},t))})]}),e.jsxs("div",{className:"p-4 rounded-2xl bg-slate-950 border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"text-[10px] uppercase font-bold text-amber-400",children:["Pooled Rare Categories (",o.pooled.length,")"]}),e.jsx("div",{className:"flex flex-wrap gap-1.5",children:o.pooled.length>0?o.pooled.map(t=>e.jsx("span",{className:"px-2.5 py-1 rounded-lg text-xs font-bold bg-amber-500/10 text-amber-300 border border-amber-500/30",children:t},t)):e.jsx("span",{className:"text-xs text-slate-500 italic",children:"No categories below threshold"})})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-4 font-mono text-xs",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center justify-between text-indigo-300 font-bold",children:[e.jsx("span",{children:'Sample Record: "Subway Ventilation" (Rare Category, count=1)'}),e.jsx("span",{className:"text-[10px] uppercase text-slate-500",children:"Encoded Vector"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 text-cyan-300",children:["[",o.sampleVector.join(", "),"]"]}),e.jsxs("span",{className:"text-[11px] font-sans text-slate-400 block pt-0.5",children:["Mapped to column:"," ",e.jsx("strong",{className:"text-white",children:o.finalColumns[o.sampleVector.indexOf(1)]})]})]}),e.jsxs("div",{className:"space-y-1 pt-2 border-t border-slate-800",children:[e.jsxs("div",{className:"flex items-center justify-between text-rose-300 font-bold",children:[e.jsx("span",{children:'Novel Inference Category: "Aerospace Avionics" (Unseen in Training)'}),e.jsx("span",{className:"text-[10px] uppercase text-emerald-400",children:"handle_unknown='ignore'"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-xl border border-slate-800 text-emerald-300",children:["[",o.unseenVector.join(", "),"]"]}),e.jsxs("span",{className:"text-[11px] font-sans text-slate-400 block pt-0.5",children:["Status:"," ",e.jsx("strong",{className:"text-emerald-300",children:"All-Zero Vector Assigned (Safely defaults to baseline intercept beta_0 without API crash!)"})]})]})]})]})]}),e.jsxs("section",{id:"math",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Formal Foundations"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"4. Comprehensive Mathematical Formulations"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-cyan-400 uppercase tracking-wider",children:"Euclidean Geometry"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Metric Equidistance"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Proof of sqrt(2) Equidistance"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Let e_i and e_j be two distinct standard basis vectors in R^K (i != j):"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-cyan-300 space-y-1",children:[e.jsxs("div",{children:["||e_i - e_j||_2 = sqrt( sum_","{m=1}","^K (e_","{im}"," - e_","{jm}",")^2 )"]}),e.jsx("div",{children:"= sqrt( (1 - 0)^2 + (0 - 1)^2 + 0 )"}),e.jsx("div",{children:"= sqrt(1 + 1) = sqrt(2) approx 1.4142"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Every distinct category pair resides at the identical Euclidean distance, completely eliminating artificial alphabetical proximity."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Linear Algebra"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Collinearity Proof"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Dummy Variable Trap Singularity"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"When all K columns are included with intercept column 1_N:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-rose-300 space-y-1",children:[e.jsxs("div",{children:["1_N - sum_","{k=1}","^K x_","{*, k}"," = 0_N  (Linear Dependency)"]}),e.jsx("div",{children:"rank(X) <= K < K + 1  (Rank Deficient)"}),e.jsx("div",{children:"det(X^T X) = 0  --> (X^T X)^(-1) DOES NOT EXIST"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Dropping one reference category restores rank(X_safe) = K, guaranteeing positive definite invertibility."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"Econometric Contrast"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"OLS Regression Weights"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Differential Contrast Interpretation"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Under drop-first encoding with reference category c_1:"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-emerald-300 space-y-1",children:[e.jsx("div",{children:"E[ Y | C = c_1 ] = beta_0  (Reference Group Baseline)"}),e.jsx("div",{children:"E[ Y | C = c_k ] = beta_0 + beta_k  (Active Group Mean)"}),e.jsx("div",{children:"beta_k = E[ Y | C = c_k ] - E[ Y | C = c_1 ]  (Differential Contrast)"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Coefficients measure pure differential premiums or discounts against the baseline group."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-bold text-purple-400 uppercase tracking-wider",children:"Sparse Storage Complexity"}),e.jsx("span",{className:"text-xs font-mono text-slate-500",children:"Big-O Memory Scaling"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"CSR Memory Invariance Law"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"In one-hot encoding, each row has exactly 1 non-zero entry (NNZ = N):"}),e.jsxs("div",{className:"p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-purple-300 space-y-1",children:[e.jsx("div",{children:"Memory_dense = N * K * 8 bytes  (Scales linearly with K)"}),e.jsx("div",{children:"Memory_csr = N*8 + N*4 + (N+1)*4 = 16*N + 4 bytes"}),e.jsx("div",{children:"d(Memory_csr) / dK = 0  (COMPLETELY INDEPENDENT OF K!)"})]}),e.jsx("p",{className:"text-xs text-slate-400 leading-relaxed",children:"Matrix-vector multiplication FLOPs collapse from O(N * K) down to O(N)."})]})]})]}),e.jsxs("section",{id:"cases",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Industrial Grounding"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"5. Real-World Regional Industrial Case Studies (West Bengal)"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-indigo-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-indigo-500/20 text-indigo-300 rounded-full border border-indigo-500/40",children:"Metro Infrastructure"}),e.jsx("span",{className:"text-xs text-slate-400",children:"KMRC East-West Metro, Kolkata"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Vendor Tender Costing & Dummy Trap Elimination"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Susmita engineered procurement tender forecasting for Kolkata Metro tunneling contractors across Civil, Electrical, Signalling, Trackwork, and Rolling-Stock. Fitting OLS with all 5 columns caused a singular matrix error (det=0). Setting `OneHotEncoder(drop='first')` designated Civil as the reference baseline (₹43.10 Cr), producing clear differential contract estimates (Electrical: -₹15.85 Cr, Rolling-Stock: +₹17.15 Cr) that satisfied state audit scrutiny."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-cyan-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-cyan-500/20 text-cyan-300 rounded-full border border-cyan-500/40",children:"InsurTech Actuarial"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Salt Lake Sector V, Kolkata"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Vehicle Claim Severity GLMs & IRLS Divergence"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Debangshu modeled collision claim severity across vehicle body types (Hatchback, Sedan, SUV, Commercial-Truck, Two-Wheeler) using a Gamma Generalized Linear Model (GLM). Retaining all dummy columns caused the Iteratively Reweighted Least Squares (IRLS) optimizer to diverge due to a singular Fisher Information matrix. Dropping 'Hatchback' as the reference group enabled rapid convergence in 6 iterations, proving Commercial-Trucks incur +142% higher claim severity."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-emerald-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/40",children:"Industrial Edge IoT"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Barrackpore & Titagarh Textile Belt"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Raspberry Pi Loom Telemetry: CSR Saves Edge Gateway"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Mamata deployed predictive maintenance sensors across 250 loom machinery models in Barrackpore textile mills on Raspberry Pi 4 edge gateways (2 GB RAM). Calling `.toarray()` on 100,000 batch rows consumed 200 MB per batch, causing Linux OOM killer shutdowns when 3 threads executed. Migrating to native Scipy CSR sparse matrices dropped memory to 1.6 MB per batch (a 99.2% reduction), enabling 10 concurrent threads at 45% CPU utilization."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-rose-900/40 shadow-xl space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-rose-500/20 text-rose-300 rounded-full border border-rose-500/40",children:"Clinical Healthcare"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Barasat District Hospital, North 24 Pgs"})]}),e.jsx("h3",{className:"text-base font-bold text-white",children:"Emergency Ward Triage: Eliminating Alphabetical Bias"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Abhronila audited a triage priority model where chief complaints were encoded with `LabelEncoder` (Cardiac=0, Gastro=1, Neuro=2, Trauma=4). The model assigned severe trauma patients the highest priority and critical cardiac arrests the lowest solely because 'Cardiac' started with 'C'! Abhronila rebuilt the pipeline with One-Hot Encoding, ensuring independent weights calibrated strictly by physiological urgency."})]})]})]}),e.jsxs("section",{id:"pitfalls",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-rose-400 uppercase tracking-wider",children:"Defensive Architecture"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"6. Critical Production Pitfalls & Anti-Patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 1: Calling `.toarray()` in Production"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"The Container OOM Killer"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Converting a Scipy CSR sparse matrix into a dense NumPy array with `.toarray()` forces RAM allocation for all zeros. In production with K=2,500, memory explodes from 16 MB to 20 GB, triggering immediate container termination."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 2: `drop='first'` on Tree Ensembles"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Tree Depth & Variance Inflation"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Dropping the first column forces decision trees to test K-1 conditions simultaneously to isolate the reference category. While required for linear models, always keep `drop=None` for XGBoost, LightGBM, and Random Forest."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-rose-900/40 space-y-3",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 3: `pd.get_dummies()` Schema Drift"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Stateless Pipeline Failures"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"`pd.get_dummies()` does not persist learned schemas. If an inference batch lacks one category, it outputs fewer columns, causing immediate shape mismatch crashes. Always use `sklearn.preprocessing.OneHotEncoder`."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 4: Missing `handle_unknown='ignore'`"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"API HTTP 500 Crashes"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Default `handle_unknown='error'` raises a ValueError on novel production categories. Specifying `handle_unknown='ignore'` assigns an all-zero vector, safely defaulting to the baseline intercept without crashing."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-amber-900/40 space-y-3",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Pitfall 5: Random Forest `mtry` Dilution"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Feature Subsampling Starvation"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"High-cardinality OHE creates hundreds of binary columns containing mostly zeros. When Random Forest samples sqrt(D) features, it repeatedly selects uninformative zeros, starving the tree of real continuous predictors."})]}),e.jsxs("div",{className:"bg-slate-900/90 p-5 rounded-2xl border border-cyan-900/40 space-y-3",children:[e.jsxs("div",{className:"text-cyan-400 font-bold text-xs flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Engineering Rule: `drop='if_binary'`"]}),e.jsx("h4",{className:"text-sm font-bold text-white",children:"Automatic Multi-Type Resolution"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Use `OneHotEncoder(drop='if_binary')` to automatically drop the redundant second column for binary features (K=2) while preserving all K columns for multi-class variables without manual column slicing."})]})]})]}),e.jsxs("section",{id:"quiz",className:"space-y-8",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Knowledge Verification"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"7. Diagnostic Assessment: One-Hot Encoding Mastery"})]}),f&&e.jsxs("div",{className:"px-4 py-2 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-bold",children:["Score: ",T," / ",g.length," (",Math.round(T/g.length*100),"%)"]})]}),e.jsxs("div",{className:"space-y-6",children:[g.map((t,n)=>e.jsxs("div",{className:"bg-slate-900/90 p-6 rounded-2xl border border-slate-800 shadow-xl space-y-4",children:[e.jsx("div",{className:"flex items-start justify-between gap-3",children:e.jsxs("h3",{className:"text-sm font-bold text-white leading-relaxed",children:[e.jsxs("span",{className:"text-indigo-400 mr-2",children:["Q",n+1,"."]}),t.question]})}),e.jsx("div",{className:"grid grid-cols-1 gap-2 pt-2",children:t.options.map((s,r)=>{const l=h[n]===r,p=r===t.correctIndex;let d="bg-slate-950 border-slate-800 hover:border-slate-700 text-slate-300";return f?p?d="bg-emerald-950/60 border-emerald-500 text-emerald-200 font-semibold":l&&!p&&(d="bg-rose-950/60 border-rose-500 text-rose-200"):l&&(d="bg-indigo-950/80 border-indigo-500 text-white font-medium"),e.jsxs("button",{disabled:f,onClick:()=>w({...h,[n]:r}),className:m("p-3 rounded-xl text-xs text-left border transition-all cursor-pointer flex items-start gap-2",d),children:[e.jsxs("span",{className:"font-bold text-indigo-400",children:[String.fromCharCode(65+r),")"]}),e.jsx("span",{children:s})]},r)})}),f&&e.jsxs("div",{className:"pt-3 border-t border-slate-800/80 text-xs text-slate-300 space-y-2 bg-slate-950/50 p-3 rounded-xl",children:[e.jsxs("p",{children:[e.jsx("strong",{className:"text-indigo-300",children:"Explanation:"})," ",t.explanation]}),e.jsxs("p",{className:"text-cyan-400",children:[e.jsx("strong",{children:"Practical Rule:"})," ",t.practicalTip]})]})]},t.id)),e.jsx("div",{className:"flex justify-end gap-3 pt-4",children:f?e.jsx("button",{onClick:()=>{w({}),j(!1)},className:"px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase bg-slate-800 hover:bg-slate-700 text-white border border-slate-700 transition-all cursor-pointer",children:"Retake Assessment"}):e.jsx("button",{onClick:()=>j(!0),disabled:Object.keys(h).length<g.length,className:m("px-6 py-2.5 rounded-xl text-xs font-bold tracking-wider uppercase transition-all shadow-lg cursor-pointer",Object.keys(h).length===g.length?"bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-600/30":"bg-slate-800 text-slate-500 cursor-not-allowed"),children:"Submit Diagnostic Assessment"})})]})]}),e.jsxs("section",{id:"handbook",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Academic Reference"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"8. Academic Revision Handbook & Viva Voce Q&A"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(X,{content:B,filename:"Topic19_One_Hot_Encoding_Notes.txt"})})]}),e.jsxs("section",{id:"lab",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Hands-On Code"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"9. Pure Python Laboratory: One-Hot Encoding & CSR Engines"})]}),e.jsx("div",{className:"bg-slate-900/80 p-6 rounded-2xl border border-slate-800 shadow-xl",children:e.jsx(D,{code:P,filename:"one_hot_encoding_lab.py",runnable:!0})})]}),e.jsxs("section",{id:"teacher",className:"space-y-6",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-3",children:[e.jsx("span",{className:"text-xs font-bold text-indigo-400 uppercase tracking-wider",children:"Faculty Mentorship"}),e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"10. Teacher Consultation & Viva Guidance"})]}),e.jsx(K,{})]})]})};export{$ as default};
