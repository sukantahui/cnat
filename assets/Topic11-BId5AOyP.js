import{b as u,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as T}from"./PythonFileLoader-CiS1GfkF.js";import{F as k}from"./FAQTemplate-D_90hN4m.js";import{P as M}from"./PlainTextPrint-yt10TRX1.js";import{T as R}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const D=`# 01_scalar_and_row_broadcasting.py\r
# NumPy Essentials — Topic 11: Broadcasting Concept (Part 1)\r
# Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
\r
"""\r
DESCRIPTION:\r
Demonstrates basic scalar-to-array broadcasting and 1D row vector broadcasting\r
across a 2D matrix:\r
  - Adding a scalar to a 1D vector (shape () to (4,))\r
  - Adding a 1D row vector of bonus marks (shape (4,)) across all rows of\r
    a 2D marks matrix (shape (3, 4))\r
  - Shape padding: (4,) automatically prepends 1 to become (1, 4)\r
"""\r
\r
import numpy as np\r
\r
print("=" * 68)\r
print("  PART 1: Scalar & 1D Row Vector Broadcasting")\r
print("  Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal")\r
print("=" * 68)\r
\r
# 1. Scalar to Array Broadcasting\r
scores_1d = np.array([75, 82, 90, 68])\r
print(f"\\n[1] Original 1D Scores (shape {scores_1d.shape}): {scores_1d}")\r
\r
# Scalar 5 is treated as shape () and broadcast to all 4 elements\r
scores_with_grace = scores_1d + 5\r
print(f"    scores_1d + 5 (Grace Marks): {scores_with_grace}")\r
\r
# 2. 2D Matrix (3, 4) + 1D Row Vector (4,)\r
# 3 students (Debangshu, Susmita, Swadeep) x 4 subject marks\r
marks_3x4 = np.array([\r
    [70, 80, 85, 90],\r
    [65, 75, 80, 85],\r
    [88, 92, 95, 90]\r
])\r
\r
# Subject bonus marks: [5, 2, 0, 1] (shape (4,))\r
bonus_row = np.array([5, 2, 0, 1])\r
\r
print(f"\\n[2] Base Student Marks Matrix (shape {marks_3x4.shape}):\\n{marks_3x4}")\r
print(f"    Bonus Marks Row Vector (shape {bonus_row.shape}): {bonus_row}")\r
\r
# Broadcasting Rule: (4,) -> prepended to (1, 4) -> stretched to (3, 4)\r
total_marks = marks_3x4 + bonus_row\r
print(f"\\n    Resulting Marks (marks_3x4 + bonus_row, shape {total_marks.shape}):\\n{total_marks}")\r
print("    -> Notice how [5, 2, 0, 1] was added to every single student row!")\r
`,P=`# 02_column_and_outer_broadcasting.py\r
# NumPy Essentials — Topic 11: Broadcasting Concept (Part 2)\r
# Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
\r
"""\r
DESCRIPTION:\r
Demonstrates column vector broadcasting and outer grid product creation:\r
  - Adding a 2D Column Vector (shape (3, 1)) across a (3, 4) matrix\r
  - Adding a Column Vector (3, 1) and Row Vector (1, 4) to generate a\r
    full (3, 4) addition grid table (both vectors broadcast simultaneously)\r
"""\r
\r
import numpy as np\r
\r
print("=" * 68)\r
print("  PART 2: Column Vector & Outer Grid Broadcasting")\r
print("  Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal")\r
print("=" * 68)\r
\r
# 1. 2D Matrix (3, 4) + 2D Column Vector (3, 1)\r
marks_3x4 = np.array([\r
    [70, 80, 85, 90],\r
    [65, 75, 80, 85],\r
    [88, 92, 95, 90]\r
])\r
\r
# Attendance bonus points per student (shape (3, 1))\r
attendance_bonus = np.array([[2], [5], [1]])\r
\r
print(f"\\n[1] Student Marks (shape {marks_3x4.shape}):\\n{marks_3x4}")\r
print(f"    Student Attendance Bonus (shape {attendance_bonus.shape}):\\n{attendance_bonus}")\r
\r
# Broadcasts across all 4 subject columns\r
marks_updated = marks_3x4 + attendance_bonus\r
print(f"\\n    Result (marks_3x4 + attendance_bonus, shape {marks_updated.shape}):\\n{marks_updated}")\r
print("    -> Debangshu gets +2 to all 4 subjects, Susmita gets +5, Swadeep gets +1!")\r
\r
# 2. Outer Addition Grid: (3, 1) + (1, 4) -> (3, 4)\r
col_vec = np.array([[10], [20], [30]]) # (3, 1)\r
row_vec = np.array([[1, 2, 3, 4]])     # (1, 4)\r
\r
grid_sum = col_vec + row_vec\r
print(f"\\n[2] Outer Addition Table: (3, 1) + (1, 4) ➔ (3, 4)")\r
print(f"    col_vec (3, 1):\\n{col_vec}")\r
print(f"    row_vec (1, 4): {row_vec}")\r
print(f"    grid_sum:\\n{grid_sum}")\r
`,E=`# 03_broadcasting_mismatch_and_fixes.py\r
# NumPy Essentials — Topic 11: Broadcasting Concept (Part 3)\r
# Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
\r
"""\r
DESCRIPTION:\r
Demonstrates common shape mismatch errors in broadcasting and how to resolve them:\r
  - Why (3, 4) + (3,) fails with ValueError\r
  - Step-by-step Rule 1 & Rule 2 alignment explanation\r
  - Two ways to fix it: .reshape(-1, 1) or [:, np.newaxis]\r
"""\r
\r
import numpy as np\r
\r
print("=" * 68)\r
print("  PART 3: Broadcasting Mismatch Errors & Fixes")\r
print("  Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal")\r
print("=" * 68)\r
\r
marks_3x4 = np.array([\r
    [70, 80, 85, 90],\r
    [65, 75, 80, 85],\r
    [88, 92, 95, 90]\r
])\r
\r
# Attempting to add 3 student adjustments as a 1D vector (shape (3,))\r
bonus_3 = np.array([10, 20, 30])\r
\r
print(f"\\n[1] Matrix A shape : {marks_3x4.shape}")\r
print(f"    Vector B shape : {bonus_3.shape}")\r
\r
# 1. Why it raises ValueError:\r
# Vector (3,) is prepended to (1, 3).\r
# Trailing dimensions compared: 4 vs 3 (Neither is 1, and 4 != 3 -> ValueError!)\r
try:\r
    bad_result = marks_3x4 + bonus_3\r
except ValueError as e:\r
    print(f"\\n    ❌ Caught Expected ValueError:\\n    {e}")\r
\r
# 2. The Fix: Transform (3,) into a 2D Column Vector (3, 1)\r
print("\\n[2] Fixing the Mismatch:")\r
\r
# Method A: Using .reshape(-1, 1)\r
col_reshaped = bonus_3.reshape(-1, 1) # shape (3, 1)\r
fixed_result_A = marks_3x4 + col_reshaped\r
print(f"    Method A (.reshape(-1, 1), shape {col_reshaped.shape}):\\n{fixed_result_A}")\r
\r
# Method B: Using np.newaxis\r
col_newaxis = bonus_3[:, np.newaxis] # shape (3, 1)\r
fixed_result_B = marks_3x4 + col_newaxis\r
print(f"\\n    Method B ([:, np.newaxis], shape {col_newaxis.shape}):\\n{fixed_result_B}")\r
print("\\n    ✅ Both methods allow clean broadcasting with (3, 4)!")\r
`,I=`# 04_ml_feature_centering_and_biases.py\r
# NumPy Essentials — Topic 11: Broadcasting Concept (Part 4)\r
# Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
\r
"""\r
DESCRIPTION:\r
Demonstrates core Machine Learning workflows using broadcasting:\r
  1. Column-wise zero-mean feature centering: X - np.mean(X, axis=0)\r
     - Shape (N_samples, D_features) - (D_features,)\r
  2. Neural Network dense layer affine transformation: (X @ W) + b\r
     - Shape (Batch_Size, Out_Features) + (Out_Features,)\r
"""\r
\r
import numpy as np\r
\r
print("=" * 68)\r
print("  PART 4: ML Feature Centering & Neural Network Biases")\r
print("  Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal")\r
print("=" * 68)\r
\r
# ── 1. Column-wise Feature Mean Centering ────────────────────────────────────\r
# Tabular dataset of 4 students: [Height(cm), Weight(kg), Study_Hours]\r
X = np.array([\r
    [170.0, 65.0, 4.5],\r
    [180.0, 80.0, 6.0],\r
    [160.0, 55.0, 2.0],\r
    [175.0, 70.0, 5.5]\r
], dtype=np.float32)\r
\r
print(f"\\n[1] Feature Matrix X (shape {X.shape}):\\n{X}")\r
\r
# Compute mean across axis 0 (columns) -> shape (3,)\r
col_means = np.mean(X, axis=0)\r
print(f"\\n    Column Means (shape {col_means.shape}): {col_means}")\r
\r
# Broadcasting: (4, 3) - (3,) -> (4, 3) - (1, 3) -> (4, 3)\r
X_centered = X - col_means\r
print(f"\\n    Zero-Centered Features (shape {X_centered.shape}):\\n{X_centered}")\r
print(f"    Check new column means (should be ~0): {np.round(np.mean(X_centered, axis=0), 4)}")\r
\r
# ── 2. Neural Network Dense Layer Bias Addition ──────────────────────────────\r
np.random.seed(42)\r
batch_size = 4\r
in_features = 3\r
out_features = 2\r
\r
# Weights matrix W (3, 2)\r
W = np.random.randn(in_features, out_features)\r
# Bias vector b (2,)\r
b = np.array([0.5, -0.2])\r
\r
# Matrix multiplication produces (4, 2)\r
pre_bias = X @ W\r
print(f"\\n[2] Pre-Bias Matrix (X @ W, shape {pre_bias.shape}):\\n{np.round(pre_bias, 3)}")\r
print(f"    Bias Vector b (shape {b.shape}): {b}")\r
\r
# Broadcasting: (4, 2) + (2,) -> adds b to every sample row in batch!\r
logits = pre_bias + b\r
print(f"\\n    Final Output Logits (X @ W + b, shape {logits.shape}):\\n{np.round(logits, 3)}")\r
`,O=`# 05_ml_image_norm_and_pairwise_distance.py\r
# NumPy Essentials — Topic 11: Broadcasting Concept (Part 5)\r
# Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
\r
"""\r
DESCRIPTION:\r
Demonstrates advanced multidimensional tensor broadcasting in Machine Learning:\r
  1. Image Batch RGB Channel Normalization:\r
     - Shape (Batch_Size, Height, Width, Channels) - (Channels,)\r
     - e.g. (10, 32, 32, 3) - (3,)\r
  2. Pairwise Euclidean Distance Matrix for K-Means / KNN:\r
     - Computing distances between N samples and M centroids in 1 vectorized line\r
     - Shape (N, 1, D) - (1, M, D) -> (N, M, D)\r
"""\r
\r
import numpy as np\r
\r
print("=" * 68)\r
print("  PART 5: Image Channel Normalization & Pairwise Distances")\r
print("  Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal")\r
print("=" * 68)\r
\r
# ── 1. Image Batch RGB Channel Normalization ─────────────────────────────────\r
# Batch of 4 images, 32x32 pixels, 3 color channels\r
image_batch = np.ones((4, 32, 32, 3), dtype=np.float32) * 128.0\r
\r
# Standard ImageNet RGB channel means and standard deviations\r
rgb_means = np.array([123.68, 116.78, 103.94])  # shape (3,)\r
rgb_stds  = np.array([58.395, 57.120, 57.375])   # shape (3,)\r
\r
print(f"\\n[1] Image Batch shape : {image_batch.shape}")\r
print(f"    RGB Means shape   : {rgb_means.shape}")\r
\r
# Broadcasting: (4, 32, 32, 3) - (3,) -> pads to (1, 1, 1, 3)\r
normalized_batch = (image_batch - rgb_means) / rgb_stds\r
print(f"    Normalized Batch shape : {normalized_batch.shape}")\r
print(f"    Sample pixel values at (0, 0, 0, :) : {np.round(normalized_batch[0, 0, 0, :], 4)}")\r
\r
# ── 2. Pairwise Euclidean Distances (K-Means / KNN) ──────────────────────────\r
# 3 Data points in 2D space\r
X_points = np.array([\r
    [1.0, 2.0],\r
    [3.0, 4.0],\r
    [5.0, 6.0]\r
]) # shape (3, 2)\r
\r
# 2 Cluster Centroids\r
C_centroids = np.array([\r
    [0.0, 0.0],\r
    [4.0, 4.0]\r
]) # shape (2, 2)\r
\r
print(f"\\n[2] Data Points X shape  : {X_points.shape}")\r
print(f"    Centroids C shape    : {C_centroids.shape}")\r
\r
# Expand dimensions: X ➔ (3, 1, 2) and C ➔ (1, 2, 2)\r
# Broadcasting computes difference for every (point, centroid) pair!\r
diffs = X_points[:, np.newaxis, :] - C_centroids[np.newaxis, :, :] # shape (3, 2, 2)\r
distances = np.sqrt(np.sum(diffs ** 2, axis=-1))                   # shape (3, 2)\r
\r
print(f"    Pairwise Distances Matrix (shape {distances.shape}):\\n{np.round(distances, 3)}")\r
print("    -> Row i contains distances from Point i to Centroid 0 and Centroid 1!")\r
`,W=`========================================================\r
NUMPY ESSENTIALS — TOPIC 11: BROADCASTING CONCEPT\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9 • Module 1\r
========================================================\r
\r
1. WHAT IS BROADCASTING?\r
-------------------------\r
Broadcasting describes how NumPy treats arrays with different shapes\r
during arithmetic operations. The smaller array is "broadcast" (stretched)\r
across the larger array without making unneeded copies in RAM.\r
\r
2. THE 3 GENERAL BROADCASTING RULES:\r
------------------------------------\r
Comparing shape tuples element-by-element STARTING FROM THE RIGHT (trailing dimensions):\r
\r
  RULE 1 (Prepend 1s to Shape):\r
    If arrays differ in ndim, pad the shape of the smaller array with 1s\r
    on the LEFT side until both shapes have equal length.\r
    Example: (3, 4) and (4,)  ➔  (4,) becomes (1, 4)\r
\r
  RULE 2 (Compatibility Check):\r
    Two dimensions are compatible if:\r
      a) They are equal, OR\r
      b) One of them is 1.\r
    Example: (3, 4) vs (1, 4)  ➔  3 vs 1 (OK), 4 vs 4 (OK)\r
\r
  RULE 3 (Stretch to Match):\r
    If a dimension is 1, it behaves as if it were copied along that axis\r
    to match the larger dimension.\r
    Resulting Shape = (max(d1_1, d2_1), max(d1_2, d2_2), ...)\r
\r
3. BROADCASTING COMPATIBILITY EXAMPLES:\r
----------------------------------------\r
  Array A        Array B        Broadcast Result Shape\r
  -------------  -------------  ----------------------\r
  (3, 4)         scalar (1,)    (3, 4)\r
  (3, 4)         (4,) -> (1, 4) (3, 4)   [Adds row to all rows]\r
  (3, 4)         (3, 1)         (3, 4)   [Adds col to all cols]\r
  (3, 1)         (1, 4)         (3, 4)   [Outer sum / 2D Grid]\r
  (8, 1, 6, 1)   (7, 1, 5)      (8, 7, 6, 5)\r
  (3, 4)         (3,)           ❌ ValueError! (4 vs 3 mismatch)\r
\r
4. MEMORY EFFICIENCY (ZERO-COPY STRIDE TRICK):\r
-----------------------------------------------\r
Broadcasting does NOT duplicate array elements in memory!\r
NumPy sets the stride multiplier for the broadcasted axis to 0 bytes,\r
re-reading the exact same RAM buffer across iterations in O(1) memory.\r
\r
5. ESSENTIAL MACHINE LEARNING BROADCASTING PATTERNS:\r
-----------------------------------------------------\r
1. Column-wise Mean Centering:\r
   X_centered = X - np.mean(X, axis=0)\r
   Shapes: (N_samples, D_features) - (D_features,)\r
\r
2. Neural Network Bias Addition:\r
   activations = (X @ W) + bias\r
   Shapes: (Batch_Size, Out_Nodes) + (Out_Nodes,)\r
\r
3. Image Color Channel Normalization:\r
   normalized_img = (img_batch - channel_means) / channel_stds\r
   Shapes: (Batch, Height, Width, 3) - (3,)\r
\r
4. Pairwise Distance Matrix (K-Means & KNN):\r
   diffs = X[:, np.newaxis, :] - Y[np.newaxis, :, :]  # (N, M, D)\r
\r
6. QUICK REVISION CHECKLIST:\r
-----------------------------\r
  □ Align shapes from right to left (trailing dimensions)\r
  □ Dimensions match if equal or if one is 1\r
  □ Shape (4,) aligns as (1, 4), NOT (4, 1)\r
  □ To broadcast across columns, reshape (N,) to (N, 1)\r
  □ Broadcasting operates at C-speed with zero memory duplication\r
  □ Used constantly for feature centering, scaling, and NN bias addition\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,v=[{id:1,question:"What is Broadcasting in NumPy?",options:["A set of rules allowing arithmetic operations between arrays of different shapes without physically copying or duplicating data in RAM","Transmitting array data over WiFi networks to cloud servers","Converting multidimensional arrays into radio waves","A technique that only works on 1D arrays"],correctAnswer:0,explanation:"Broadcasting is NumPy's ability to treat arrays of different shapes during arithmetic operations as if the smaller array were stretched to match the larger array, achieved via zero-copy striding in C."},{id:2,question:"In what direction does NumPy compare dimension sizes when checking broadcasting compatibility?",options:["From RIGHT to LEFT (starting with the trailing dimensions)","From LEFT to RIGHT (starting with axis 0)","From highest value to lowest value","Randomly across all axes"],correctAnswer:0,explanation:"Broadcasting rule comparison begins with the trailing (rightmost) dimension and moves backward (to the left). For example, in comparing (3, 4) with (4,), the rightmost dimensions (4 and 4) are matched first."},{id:3,question:"What are the two conditions under which two dimensions are considered compatible for broadcasting?",options:["They are equal, OR one of them is 1","They are both even numbers","Their sum is greater than 10","Both dimensions are greater than 0"],correctAnswer:0,explanation:"Two dimensions are compatible if: (1) they are equal in length, or (2) one of the dimensions has length 1 (which can be virtually stretched along that axis)."},{id:4,question:"What happens when arrays have a different number of dimensions, such as (3, 4) and (4,)?",options:["NumPy prepends dimensions of size 1 to the LEFT of the smaller array's shape until both have equal length (e.g. (4,) becomes (1, 4))","NumPy appends 1s to the RIGHT of the smaller shape","NumPy raises a DimensionMismatchError","NumPy deletes extra dimensions from the larger array"],correctAnswer:0,explanation:"Under Rule 1 of broadcasting, dimensions of size 1 are prepended to the left of the smaller array's shape. Thus, shape `(4,)` becomes `(1, 4)`, which aligns perfectly with `(3, 4)`."},{id:5,question:"What is the resulting shape when broadcasting array A of shape (3, 1) and array B of shape (1, 4)?",options:["`(3, 4)`","`(4, 3)`","`(3, 1, 4)`","`(12,)`"],correctAnswer:0,explanation:"For axis 0: max(3, 1) = 3. For axis 1: max(1, 4) = 4. The resulting broadcasted array has shape `(3, 4)`, creating an outer grid / cross-product table."},{id:6,question:"Why does `np.zeros((3, 4)) + np.zeros((3,))` raise a ValueError in NumPy?",options:["Because `(3,)` is prepended with 1 on the left to become `(1, 3)`. Comparing rightmost trailing dimensions: 4 vs 3 are not equal and neither is 1, causing a broadcast failure","Because arrays cannot contain zeros","Because 3 is a prime number","Because addition is not allowed between 2D and 1D arrays"],correctAnswer:0,explanation:"Broadcasting pads `(3,)` to `(1, 3)`. Aligning `(3, 4)` and `(1, 3)` compares trailing dimensions: 4 and 3. Since 4 != 3 and neither is 1, NumPy raises `ValueError: operands could not be broadcast together with shapes (3,4) (3,)`."},{id:7,question:"How do you correctly broadcast a 1D vector `v` of shape (3,) across the columns of a matrix `M` of shape (3, 4)?",options:["`M + v.reshape(3, 1)` or `M + v[:, np.newaxis]`","`M + v`","`M + v.T`","`np.broadcast(M, v)`"],correctAnswer:0,explanation:"To broadcast along axis 1 (across columns), the vector must have shape `(3, 1)`. Calling `v.reshape(3, 1)` or `v[:, np.newaxis]` converts shape `(3,)` into `(3, 1)`, allowing it to broadcast with `(3, 4)`."},{id:8,question:"How does NumPy implement broadcasting internally without allocating extra memory in RAM?",options:["By setting the memory byte stride for the broadcasted axis of size 1 to 0 bytes, repeatedly reading the same memory buffer","By compressing the larger array with gzip","By executing calculations on the GPU","By copying elements into a hidden cache file on SSD"],correctAnswer:0,explanation:"NumPy achieves zero-copy broadcasting by setting the stride multiplier of the singleton axis to 0 bytes (`stride = 0`). When iterating along that axis, the memory pointer advances by 0 bytes, reading the identical value at C-speed without memory duplication."},{id:9,question:"What is the broadcasted result shape of array A with shape (8, 1, 6, 1) and array B with shape (7, 1, 5)?",options:["`(8, 7, 6, 5)`","`(8, 1, 6, 5)`","`(7, 8, 6, 5)`","ValueError: incompatible shapes"],correctAnswer:0,explanation:"Aligning from right to left: B is padded to `(1, 7, 1, 5)`. Axis 3: max(1, 5) = 5. Axis 2: max(6, 1) = 6. Axis 1: max(1, 7) = 7. Axis 0: max(8, 1) = 8. Resulting shape is `(8, 7, 6, 5)`."},{id:10,question:"In Machine Learning, what happens during column-wise mean subtraction `X - np.mean(X, axis=0)` when `X.shape == (1000, 20)`?",options:["`np.mean(X, axis=0)` produces shape `(20,)`, which is broadcast as `(1, 20)` and subtracted from all 1000 rows of `X`","`X` is converted into a scalar","`X` is transposed","It raises a ValueError"],correctAnswer:0,explanation:"Computing the column means gives a 1D vector of shape `(20,)`. Broadcasting pads this to `(1, 20)` and subtracts each feature's mean from every sample row in `X`, centering all features at zero in a single vectorized step."},{id:11,question:"How is neural network dense layer bias addition `logits = (X @ W) + b` broadcasted for mini-batch size 64 and output dimension 10?",options:["`(X @ W)` has shape `(64, 10)` and bias `b` has shape `(10,)`. `b` is broadcast as `(1, 10)` and added to all 64 samples in the batch","Bias `b` is multiplied by 64","The operation requires an explicit Python for-loop over 64 samples","Bias is only added to the first sample"],correctAnswer:0,explanation:"The matrix multiplication `(X @ W)` produces shape `(64, 10)`. The 1D bias vector `b` of shape `(10,)` is broadcast as `(1, 10)` across all 64 sample rows simultaneously."},{id:12,question:"When normalizing an image batch of shape (32, 224, 224, 3) using ImageNet RGB mean `np.array([123.68, 116.78, 103.94])`, how does broadcasting occur?",options:["The RGB mean array of shape `(3,)` is prepended to `(1, 1, 1, 3)` and subtracted across all 32 images, 224 rows, and 224 columns","Each image is flattened into 1D","The operation requires looping over all 3 color channels","An error is raised because the dimensions differ"],correctAnswer:0,explanation:"The 1D channel mean array of shape `(3,)` is automatically padded on the left to `(1, 1, 1, 3)`. It broadcasts across the batch, height, and width axes, subtracting the respective channel mean from every pixel."},{id:13,question:"What function in NumPy explicitly creates broadcasted view arrays from multiple input arrays without copying memory?",options:["np.broadcast_arrays(a, b)","np.replicate_shapes(a, b)","np.tile_together(a, b)","np.stretch(a, b)"],correctAnswer:0,explanation:"`np.broadcast_arrays(*args)` takes multiple arrays and returns a list of zero-copy view arrays all broadcasted to a common shape."},{id:14,question:"What does `np.broadcast_to(arr, (5, 4))` do when `arr = np.array([1, 2, 3, 4])`?",options:["Returns a read-only (5, 4) zero-copy view with shape (5, 4) where the row `[1, 2, 3, 4]` is repeated 5 times","Allocates 5 times more memory on the heap","Raises an error because arr has only 4 elements","Transposes the array"],correctAnswer:0,explanation:"`np.broadcast_to(arr, shape)` broadcasts an array to a new shape using stride-0 tricks without allocating memory. The resulting view is read-only."},{id:15,question:"Can an in-place operation `A += B` be performed if `A` has shape (4,) and `B` has shape (3, 4)?",options:["No, it raises `ValueError: non-broadcastable output operand with shape (4,) doesn't match the broadcast shape (3,4)` because `A` cannot grow in-place","Yes, NumPy automatically expands `A` to (3, 4)","Yes, but only the first row is added","It converts `A` into a scalar"],correctAnswer:0,explanation:"In-place operations (`+=`, `*=`) require that the destination array `A` already has the full broadcasted shape because an existing memory buffer cannot be dynamically resized in-place."},{id:16,question:"Can an in-place operation `A += B` be performed if `A` has shape (3, 4) and `B` has shape (4,)?",options:["Yes, because `A` already has the target shape `(3, 4)` and `B` broadcasts cleanly into it","No, in-place operations never support broadcasting","Only if `B` contains zeros","Only if `A` is 1-dimensional"],correctAnswer:0,explanation:"Yes! Since the destination `A` already has the shape `(3, 4)`, `B` is broadcast across the rows of `A` and added directly to `A`'s existing buffer in-place."},{id:17,question:"What is the result of `np.array([1, 2, 3])[:, None] * np.array([10, 20, 30, 40])[None, :]`?",options:["A (3, 4) multiplication table matrix where cell (i, j) = arr1[i] * arr2[j]","A 1D vector of 12 elements","A scalar number","An IndexError"],correctAnswer:0,explanation:"Shape `(3, 1)` multiplied by shape `(1, 4)` broadcasts both arrays into a `(3, 4)` matrix computing the outer product: `[[10, 20, 30, 40], [20, 40, 60, 80], [30, 60, 90, 120]]`."},{id:18,question:"How do you calculate all pairwise differences between dataset `X` of shape (100, 5) and centroids `C` of shape (3, 5) for K-Means clustering?",options:["diffs = X[:, np.newaxis, :] - C[np.newaxis, :, :]  # Result shape: (100, 3, 5)","diffs = X - C","diffs = X @ C.T","diffs = np.subtract(X, C)"],correctAnswer:0,explanation:"By expanding dimensions to `(100, 1, 5)` and `(1, 3, 5)`, broadcasting computes the difference between every sample and every centroid across all 5 features in a single vectorized `(100, 3, 5)` tensor without loops."},{id:19,question:"How does broadcasting compare to `np.tile()` or `np.repeat()`?",options:["Broadcasting is zero-copy in O(1) time and memory, whereas `np.tile()` and `np.repeat()` physically copy and duplicate array data in RAM","Broadcasting is slower than `np.tile()`","`np.tile()` uses less memory than broadcasting","They are identical under the hood"],correctAnswer:0,explanation:"`np.tile()` and `np.repeat()` physically allocate new RAM buffers and duplicate data bytes. Broadcasting achieves the exact same mathematical effect without memory allocation via stride-0 indexing."},{id:20,question:"What is the broadcasted shape when adding a scalar `5` to a 3D tensor of shape `(10, 20, 30)`?",options:["`(10, 20, 30)`","`(1, 10, 20, 30)`","`(10, 20, 30, 1)`","`(5, 10, 20, 30)`"],correctAnswer:0,explanation:"Scalars have shape `()` (0D) and broadcast to any target array shape without changing the array's dimensions."},{id:21,question:"What is the result of `np.array([[1], [2], [3]]) + 10`?",options:["`array([[11], [12], [13]])` (shape (3, 1))","`array([11, 12, 13])` (shape (3,))","`array([[11, 12, 13]])` (shape (1, 3))","`array([[10], [10], [10]])`"],correctAnswer:0,explanation:"Adding scalar 10 to a (3, 1) column vector broadcasts 10 to every row, preserving the (3, 1) shape: `[[11], [12], [13]]`."},{id:22,question:"If `A.shape == (5, 1, 4)` and `B.shape == (1, 6, 1)`, what is `(A * B).shape`?",options:["`(5, 6, 4)`","`(5, 1, 4)`","`(1, 6, 4)`","ValueError"],correctAnswer:0,explanation:"Axis 0: max(5, 1) = 5. Axis 1: max(1, 6) = 6. Axis 2: max(4, 1) = 4. The resulting shape is `(5, 6, 4)`."},{id:23,question:"Why is broadcasting considered one of the most important concepts in Machine Learning and Deep Learning?",options:["Because it enables batch operations, feature normalization, loss functions, and layer transformations without writing slow Python loops or duplicating gigabytes of memory","Because it is required by the Python interpreter to compile code","Because it automatically fixes bugs in neural networks","Because it encrypts tensors during training"],correctAnswer:0,explanation:"Broadcasting enables seamless vectorization across batches, features, and channels. It replaces nested Python loops with compiled C routines running at hardware speeds with zero memory bloat."},{id:24,question:"What happens if Susmita tries to broadcast shape (4, 3) with shape (4, 2)?",options:["NumPy raises a ValueError: operands could not be broadcast together with shapes (4,3) (4,2)","NumPy pads the missing column with zeros","NumPy drops the 3rd column","NumPy returns shape (4, 6)"],correctAnswer:0,explanation:"Comparing trailing dimensions: 3 vs 2 are not equal and neither is 1. Thus, broadcasting is impossible and raises a ValueError."},{id:25,question:"What is Sukanta Hui's golden rule for debugging broadcasting shape mismatch errors in Barrackpore?",options:["Write out the shape tuples aligned to the RIGHT side on paper; wherever a dimension is missing on the left, insert a 1, and ensure every pair is either EQUAL or has a 1","Always convert all arrays to 1D vectors","Always transpose the first array","Add 1 to all dimensions until the error goes away"],correctAnswer:0,explanation:"By aligning shapes from right to left and checking that every dimension pair contains equal values or at least one 1, you can instantly determine if arrays broadcast and calculate the exact resulting shape."}],f=[{id:"part1",fileName:"01_scalar_and_row_broadcasting.py",title:"1. Scalar & Row Vector Broadcasting",badge:"Basic 1D/2D",code:D,summary:"Demonstrates scalar-to-array addition and 1D row vector broadcasting across all rows of a 2D student marks matrix.",shapes:"(3, 4) + (4,) ➔ (3, 4)"},{id:"part2",fileName:"02_column_and_outer_broadcasting.py",title:"2. Column Vector & Outer Grid Broadcasting",badge:"Column & Outer Grid",code:P,summary:"Shows column vector broadcasting (3, 4) + (3, 1) and simultaneous 2D outer grid generation from (3, 1) + (1, 4).",shapes:"(3, 1) + (1, 4) ➔ (3, 4)"},{id:"part3",fileName:"03_broadcasting_mismatch_and_fixes.py",title:"3. Shape Mismatch Errors & Resolution",badge:"Error Handling & Fixes",code:E,summary:"Demonstrates why (3, 4) + (3,) raises ValueError and provides two standard fixes: .reshape(-1, 1) and [:, np.newaxis].",shapes:"(3, 4) + (3,) ➔ ValueError"},{id:"part4",fileName:"04_ml_feature_centering_and_biases.py",title:"4. ML Feature Centering & Neural Net Biases",badge:"ML Tabular & NN",code:I,summary:"Real-world ML workflows: column-wise zero-mean feature centering X - X.mean(axis=0) and neural network dense layer bias addition (X @ W) + b.",shapes:"(N, D) - (D,) & (B, Out) + (Out,)"},{id:"part5",fileName:"05_ml_image_norm_and_pairwise_distance.py",title:"5. Image Channel Normalization & Pairwise Distances",badge:"Vision & Clustering",code:O,summary:"ImageNet RGB channel mean/std normalization across 4D batches and vectorized pairwise Euclidean distance matrix calculation for K-Means/KNN.",shapes:"(B, H, W, 3) - (3,) & (N, 1, D) - (1, M, D)"}],y=[{id:"row_broadcast",label:"1. Matrix (3, 4) + Row (4,)",shapeA:"(3, 4)",shapeB:"(4,)",alignedB:"(1, 4)",resultShape:"(3, 4)",valid:!0,desc:"1D Bonus row [5, 2, 0, 1] is prepended to (1, 4) and broadcast across all 3 student rows.",matA:[[70,80,85,90],[65,75,80,85],[88,92,95,90]],matB:[[5,2,0,1]],isColB:!1},{id:"col_broadcast",label:"2. Matrix (3, 4) + Column (3, 1)",shapeA:"(3, 4)",shapeB:"(3, 1)",alignedB:"(3, 1)",resultShape:"(3, 4)",valid:!0,desc:"Attendance bonus column [[2], [5], [1]] is broadcast across all 4 subject columns.",matA:[[70,80,85,90],[65,75,80,85],[88,92,95,90]],matB:[[2],[5],[1]],isColB:!0},{id:"outer_grid",label:"3. Column (3, 1) + Row (1, 4) [Outer Grid]",shapeA:"(3, 1)",shapeB:"(1, 4)",alignedB:"(1, 4)",resultShape:"(3, 4)",valid:!0,desc:"Both arrays stretch along their singleton axis to form a full (3, 4) 2D addition table.",matA:[[10],[20],[30]],matB:[[1,2,3,4]],isOuter:!0},{id:"mismatch_error",label:"4. Matrix (3, 4) + Row (3,) [❌ Mismatch Error]",shapeA:"(3, 4)",shapeB:"(3,)",alignedB:"(1, 3)",resultShape:"ValueError",valid:!1,desc:"Aligning rightmost dimensions: 4 vs 3 mismatch! Neither is 1. Raises ValueError.",matA:[[70,80,85,90],[65,75,80,85],[88,92,95,90]],matB:[[10,20,30]],isError:!0}],K=()=>{const[c,_]=u.useState("interactive_broadcaster"),[w,A]=u.useState("row_broadcast"),[b,B]=u.useState("part1"),[N,S]=u.useState("3, 4"),[j,C]=u.useState("4"),r=y.find(a=>a.id===w)||y[0],p=f.find(a=>a.id===b)||f[0],i=(()=>{const a=o=>o.split(",").map(t=>parseInt(t.trim(),10)).filter(t=>!isNaN(t)&&t>0),s=a(N),n=a(j);if(s.length===0||n.length===0)return{valid:!1,error:"Please enter valid comma-separated positive integer dimensions."};const l=Math.max(s.length,n.length),m=[...Array(l-s.length).fill(1),...s],g=[...Array(l-n.length).fill(1),...n],h=[],x=[];for(let o=l-1;o>=0;o--){const t=m[o],d=g[o];if(t===d)h.unshift(t),x.unshift(`Axis ${o}: ${t} == ${d} ➔ Output: ${t}`);else if(t===1)h.unshift(d),x.unshift(`Axis ${o}: 1 vs ${d} ➔ A is stretched to ${d}`);else if(d===1)h.unshift(t),x.unshift(`Axis ${o}: ${t} vs 1 ➔ B is stretched to ${t}`);else return{valid:!1,paddedA:`(${m.join(", ")})`,paddedB:`(${g.join(", ")})`,error:`ValueError: operands could not be broadcast together with shapes (${s.join(",")}) (${n.join(",")}) at Axis ${o} (${t} vs ${d})`,stepAnalysis:x}}return{valid:!0,paddedA:`(${m.join(", ")})`,paddedB:`(${g.join(", ")})`,resultShape:`(${h.join(", ")})`,ndim:h.length,stepAnalysis:x}})();return e.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200",children:[e.jsx("header",{className:"border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"BCAC701B • Segment 9"}),e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30",children:"Module 1 • Topic 11"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3",children:[e.jsx("span",{children:"📡 Broadcasting Concept"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700",children:"(3, 4) + (4,) ➔ (3, 4) • Stride 0 • Multi-Script Suite"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Mastering shape alignment rules, zero-copy stride tricks, vector-matrix expansion, and ML batch broadcasting."})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:"inline-block text-xs font-mono px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-slate-400",children:["Mentor: ",e.jsx("strong",{className:"text-emerald-400",children:"Sukanta Hui"})," • Barrackpore"]})})]})})}),e.jsx("nav",{className:"bg-slate-950 border-b border-slate-800/80 sticky top-[73px] z-30 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex overflow-x-auto space-x-1 py-2 scrollbar-thin scrollbar-thumb-slate-700",children:[{id:"interactive_broadcaster",label:"📡 Live Broadcasting Visualizer",icon:"📐"},{id:"rules_checker",label:"📏 Shape Compatibility Checker",icon:"🧮"},{id:"stride_zero_proof",label:"🧬 Stride 0 (Zero-Copy Proof)",icon:"⚡"},{id:"ml_broadcasting",label:"🤖 ML Tensor Broadcasting",icon:"🧠"}].map(a=>e.jsxs("button",{onClick:()=>_(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${c===a.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[e.jsx("span",{children:a.icon}),e.jsx("span",{children:a.label})]},a.id))})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[c==="interactive_broadcaster"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📡 Live Broadcasting Visualizer"})}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Select a broadcasting scenario to see how NumPy virtually stretches dimensions without copying bytes in RAM."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:y.map(a=>e.jsx("button",{onClick:()=>A(a.id),className:`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${w===a.id?"bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md scale-105":"bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:a.label},a.id))})]}),e.jsx("div",{className:`p-4 rounded-xl border flex flex-wrap items-center justify-between gap-3 mb-6 ${r.valid?"bg-emerald-950/30 border-emerald-500/50 text-emerald-200":"bg-rose-950/30 border-rose-500/50 text-rose-200"}`,children:e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"px-2.5 py-1 rounded text-xs font-mono font-bold bg-slate-900 border border-slate-700",children:["A: ",r.shapeA," + B: ",r.shapeB," ➔ Output:"," ",e.jsx("strong",{children:r.resultShape})]}),e.jsx("span",{className:"text-xs",children:r.desc})]})}),r.isError?e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-rose-500/40 font-mono text-xs space-y-3",children:[e.jsx("p",{className:"text-rose-400 font-bold text-sm",children:"❌ ValueError: operands could not be broadcast together with shapes (3,4) (3,)"}),e.jsxs("p",{className:"text-slate-300",children:["Step 1: Shape (3,) is prepended on the left with 1 ➔ ",e.jsx("code",{className:"text-white",children:"(1, 3)"}),e.jsx("br",{}),"Step 2: Trailing dimension comparison: ",e.jsx("code",{className:"text-rose-300",children:"4 vs 3"})," (Mismatch! Neither is 1)."]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded border border-emerald-500/40 text-emerald-300",children:[e.jsx("strong",{children:"✅ How to Fix:"})," Reshape the 3-element vector into a column vector of shape"," ",e.jsx("code",{className:"text-white",children:"(3, 1)"}),":",e.jsx("br",{}),e.jsx("code",{className:"text-white mt-1 block",children:"result = marks_3x4 + bad_row.reshape(-1, 1) # Works perfectly!"})]})]}):e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 items-center",children:[e.jsxs("div",{className:"bg-slate-950 border border-blue-500/40 rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-blue-400",children:["Array A: Shape ",r.shapeA]}),e.jsx("span",{className:"text-[10px] text-slate-400 font-mono",children:"Master"})]}),e.jsx("div",{className:"space-y-1.5 font-mono text-xs",children:r.matA.map((a,s)=>e.jsx("div",{className:"flex gap-1.5 justify-center",children:a.map((n,l)=>e.jsx("div",{className:"flex-1 h-9 rounded bg-slate-900 border border-blue-500/30 flex items-center justify-center font-bold text-white shadow-sm",children:n},l))},s))})]}),e.jsxs("div",{className:"bg-slate-950 border border-purple-500/40 rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-purple-400",children:["Array B: ",r.shapeB," (Stretched)"]}),e.jsx("span",{className:"text-[10px] text-emerald-400 font-mono",children:"Stride 0"})]}),e.jsx("div",{className:"space-y-1.5 font-mono text-xs",children:[0,1,2].map(a=>e.jsx("div",{className:"flex gap-1.5 justify-center",children:r.isColB?Array(4).fill(r.matB[a][0]).map((s,n)=>e.jsx("div",{className:"flex-1 h-9 rounded bg-purple-950/40 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300",children:s},n)):r.matB[0].map((s,n)=>e.jsx("div",{className:"flex-1 h-9 rounded bg-purple-950/40 border border-purple-500/40 flex items-center justify-center font-bold text-purple-300",children:s},n))},a))})]}),e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/50 rounded-xl p-4 space-y-3 shadow-lg shadow-emerald-950/30",children:[e.jsxs("div",{className:"flex justify-between items-center",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-emerald-400",children:["Result: Shape ",r.resultShape]}),e.jsx("span",{className:"text-[10px] text-emerald-300 font-mono font-bold",children:"Computed"})]}),e.jsx("div",{className:"space-y-1.5 font-mono text-xs",children:r.matA.map((a,s)=>e.jsx("div",{className:"flex gap-1.5 justify-center",children:a.map((n,l)=>{let m=r.isColB?r.matB[s][0]:r.matB[0][l];return e.jsx("div",{className:"flex-1 h-9 rounded bg-gradient-to-br from-emerald-600/30 to-blue-600/30 border-2 border-emerald-400 flex items-center justify-center font-bold text-white shadow",children:n+m},l)})},s))})]})]})]})}),c==="rules_checker"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"📏 Interactive Shape Compatibility & Output Dimension Calculator"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Enter any two array shape tuples to test if NumPy can broadcast them according to Rule 1 and Rule 2."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 mb-6",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Shape Array A (comma-separated, e.g. ",e.jsx("code",{className:"text-white",children:"8, 1, 6, 1"}),"):"]}),e.jsx("input",{type:"text",value:N,onChange:a=>S(a.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-blue-400 font-mono focus:border-blue-500 focus:outline-none",placeholder:"e.g. 3, 4"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Shape Array B (comma-separated, e.g. ",e.jsx("code",{className:"text-white",children:"7, 1, 5"}),"):"]}),e.jsx("input",{type:"text",value:j,onChange:a=>C(a.target.value),className:"w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-sm text-purple-400 font-mono focus:border-purple-500 focus:outline-none",placeholder:"e.g. 4"})]})]}),e.jsxs("div",{className:`p-5 rounded-xl border ${i.valid?"bg-emerald-950/30 border-emerald-500/50 text-emerald-200":"bg-rose-950/30 border-rose-500/50 text-rose-200"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-3",children:[e.jsx("span",{className:"text-xs font-bold uppercase tracking-wider",children:i.valid?"✅ Broadcasting Compatible":"❌ Incompatible Shapes"}),i.valid&&e.jsxs("span",{className:"text-xs font-mono px-2.5 py-1 bg-slate-900 rounded border border-slate-700 text-emerald-300 font-bold",children:["Result Shape: ",i.resultShape," (ndim=",i.ndim,")"]})]}),i.valid?e.jsxs("div",{className:"space-y-3 text-xs font-mono",children:[e.jsxs("p",{className:"text-slate-300",children:["Rule 1 (Padded on Left): A: ",i.paddedA," | B: ",i.paddedB]}),e.jsxs("div",{className:"bg-slate-900/80 p-3 rounded border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500 font-bold",children:"Rule 2 Step-by-Step Axis Analysis (Right to Left):"}),i.stepAnalysis.map((a,s)=>e.jsx("p",{className:"text-slate-300",children:a},s))]})]}):e.jsxs("div",{className:"space-y-2 text-xs font-mono",children:[e.jsx("p",{className:"text-rose-300 font-semibold",children:i.error}),e.jsx("p",{className:"text-slate-400",children:"Broadcasting Rule: Each axis must either be equal in size, or one of them must be 1."})]})]})]})}),c==="stride_zero_proof"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🧬 The Stride 0 Memory Trick: How Broadcasting Uses Zero Extra RAM"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Broadcasting does not copy or tile arrays in RAM. NumPy achieves virtual stretching by setting the stride multiplier to 0 bytes."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-400 font-mono",children:"1. Zero-Copy Broadcasting (arr + vec)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["When vector ",e.jsx("code",{className:"text-emerald-300",children:"(4,)"})," is broadcasted across a matrix of 1,000,000 rows, NumPy sets ",e.jsx("code",{className:"text-white font-mono",children:"stride[0] = 0 bytes"}),"."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-emerald-300",children:"Memory Allocated: 16 bytes (4 floats)"}),e.jsx("p",{className:"text-slate-400",children:"RAM Overhead: 0 MB extra"}),e.jsx("p",{className:"text-white font-bold pt-1",children:"Speed: Blazing fast SIMD loop in C"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-rose-500/40 rounded-xl p-5 space-y-4",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-400 font-mono",children:"2. Physical Replication (np.tile / np.repeat)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Calling ",e.jsx("code",{className:"text-rose-300",children:"np.tile(vec, (1000000, 1))"})," physically allocates and copies 1,000,000 duplicate rows into RAM."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-rose-300",children:"Memory Allocated: 16 Megabytes"}),e.jsx("p",{className:"text-slate-400",children:"RAM Overhead: 100% duplicate buffer"}),e.jsx("p",{className:"text-white font-bold pt-1",children:"Speed: Slower due to memcpy and GC churn"})]})]})]})]})}),c==="ml_broadcasting"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🤖 4 Essential Machine Learning Broadcasting Workflows"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"From feature centering to deep learning convolution normalization, broadcasting powers the ML pipeline."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-blue-400",children:"1. Column-Wise Mean Centering"}),e.jsx("span",{className:"text-[10px] font-mono bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30",children:"(N, D) - (D,)"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Subtracting the mean vector of shape ",e.jsx("code",{className:"text-white",children:"(D,)"})," from feature matrix ",e.jsx("code",{className:"text-white",children:"(N, D)"})," centers all features at 0 without a loop."]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["col_means = np.mean(X, axis=0) # (D,)",e.jsx("br",{}),"X_centered = X - col_means     # (N, D)"]})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-400",children:"2. Neural Network Bias Addition"}),e.jsx("span",{className:"text-[10px] font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30",children:"(Batch, Out) + (Out,)"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Dense layer matrix multiplication produces ",e.jsx("code",{className:"text-white",children:"(Batch, Out)"}),". Bias vector ",e.jsx("code",{className:"text-white",children:"(Out,)"})," is broadcasted to every sample in the batch."]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsx("code",{children:"logits = (X @ W) + bias # (64, 10) + (10,)"})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-purple-400",children:"3. Image RGB Channel Normalization"}),e.jsx("span",{className:"text-[10px] font-mono bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30",children:"(B, H, W, 3) - (3,)"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"The 3-element channel mean vector broadcasts across batch, height, and width axes simultaneously."}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsx("code",{children:"norm_img = (batch_img - rgb_mean) / rgb_std"})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-amber-400",children:"4. Pairwise Distance Tensor (KNN)"}),e.jsx("span",{className:"text-[10px] font-mono bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30",children:"(N, 1, D) - (1, M, D)"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["By expanding dimensions with ",e.jsx("code",{className:"text-white",children:"np.newaxis"}),", broadcasting computes distances between all N samples and M centroids in a single line."]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsx("code",{children:"diff = X[:, np.newaxis, :] - C[np.newaxis, :, :]"})})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("div",{className:"flex flex-wrap items-center justify-between gap-4",children:e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💻 Python Code Demonstration Suite (5 Focused Scripts)"})}),e.jsx("p",{className:"text-xs text-slate-400 mt-0.5",children:"Select a script below to inspect focused implementations for scalar, column, error handling, and ML tensors."})]})}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2",children:f.map(a=>e.jsxs("button",{onClick:()=>B(a.id),className:`p-3 rounded-xl border text-left transition-all ${b===a.id?"bg-emerald-950/40 border-emerald-500 shadow-md shadow-emerald-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${b===a.id?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:a.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:a.title}),e.jsx("p",{className:"text-[10px] font-mono text-emerald-400/80 mt-1 truncate",children:a.shapes})]},a.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400",children:p.fileName}),e.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 bg-slate-900 border border-slate-700 rounded text-slate-400",children:p.shapes})]}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:p.summary})]})}),e.jsx(T,{fileModule:p.code,title:p.fileName})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Broadcasting Pitfalls & How to Avoid Them"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"1. Trying to Broadcast (3, 4) with (3,)"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"(3,)"})," pads to ",e.jsx("code",{className:"text-white",children:"(1, 3)"})," on the left, failing to broadcast with ",e.jsx("code",{className:"text-white",children:"(3, 4)"}),". You must reshape it to a column vector ",e.jsx("code",{className:"text-emerald-400",children:"(3, 1)"})," via ",e.jsx("code",{className:"text-emerald-400",children:"v.reshape(-1, 1)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"2. In-Place Target Shape Growth Trap"}),e.jsxs("p",{children:["Writing ",e.jsx("code",{className:"text-white",children:"v += M"})," when ",e.jsx("code",{className:"text-white",children:"v.shape==(4,)"})," and ",e.jsx("code",{className:"text-white",children:"M.shape==(3,4)"})," crashes with ",e.jsx("code",{className:"text-rose-300",children:"ValueError: non-broadcastable output operand"})," because the destination array cannot expand in-place."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"3. Accidental Outer Grid Production"}),e.jsxs("p",{children:["Subtracting a (100, 1) array from a (1, 100) array silently produces a massive 10,000-element (100, 100) matrix! Always verify shapes with ",e.jsx("code",{className:"text-blue-300",children:".shape"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"4. Forgetting Right-to-Left Alignment Rule"}),e.jsx("p",{children:"Remember that broadcasting always aligns from trailing dimensions (rightmost) backward."})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💬 Barrackpore Classroom Q&A"})}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono",children:"Coder & AccoTax Live Session"})]}),e.jsx("div",{className:"space-y-3",children:[{student:"Debangshu",avatar:"👨‍💻",question:"Sir, why did my array of shape (3, 4) fail to add with my column marks of shape (3,)?",answer:"Debangshu, remember Rule 1! When NumPy sees shape (3,), it pads a 1 to the LEFT side, turning it into (1, 3). Then it aligns (3, 4) with (1, 3) from the right: 4 vs 3 mismatch! To add it across columns, you must make it an explicit column vector of shape (3, 1) using col.reshape(-1, 1)!"},{student:"Susmita",avatar:"👩‍💻",question:"How does NumPy add a 10-element bias vector to 64,000 image predictions without running out of RAM?",answer:"Susmita, this is the magic of Stride-0 indexing! NumPy does not copy the 10 bias numbers 64,000 times. It sets the memory step to 0 bytes, so the CPU loops over the exact same 10 numbers for all 64,000 samples with 0 extra memory!"},{student:"Swadeep",avatar:"👨‍🎓",question:"If A has shape (5, 1) and B has shape (1, 6), what is the resulting shape of A + B?",answer:"Swadeep, applying Rule 3: max(5, 1) = 5 for rows, and max(1, 6) = 6 for columns. A + B produces a full (5, 6) 2D grid containing all 30 pairwise sums!"}].map((a,s)=>e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300",children:[e.jsx("span",{children:a.avatar}),e.jsxs("span",{children:[a.student," asks:"]})]}),e.jsxs("p",{className:"text-xs text-slate-300 italic pl-6",children:['"',a.question,'"']}),e.jsxs("div",{className:"flex items-start gap-2 pt-2 border-t border-slate-800 text-xs text-emerald-300",children:[e.jsx("span",{className:"font-bold text-emerald-400 whitespace-nowrap",children:"Sukanta Sir:"}),e.jsx("p",{className:"text-slate-300",children:a.answer})]})]},s))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"❓ Frequently Asked Questions & Practice Problems"})}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[v.length," Questions & Answers"]})]}),e.jsx(k,{questions:v})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📄 Printable Topic Summary Note"})}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700",children:"topic11_note.txt"})]}),e.jsx(M,{text:W,fileName:"topic11_note.txt"})]}),e.jsx(R,{})]})]})};export{K as default};
