import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as b}from"./PythonFileLoader-CiS1GfkF.js";import{F as y}from"./FAQTemplate-D_90hN4m.js";import{P as N}from"./PlainTextPrint-yt10TRX1.js";import{T as j}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const v=`"""\r
================================================================================\r
Topic 5 - Script 01: Inspecting Shape, Dimensions (ndim), and Size\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- .shape: Tuple of dimension lengths\r
- .ndim : Rank / number of axes (len(shape))\r
- .size : Total elements (product of shape)\r
- .nbytes: Total memory bytes (size * itemsize)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def inspect_shapes_and_dimensions():\r
    print("=" * 65)\r
    print("INSPECTING TENSORS ACROSS RANKS 1, 2, 3, AND 4")\r
    print("=" * 65)\r
\r
    # Rank 1: Feature vector (5 items)\r
    v1 = np.array([10, 20, 30, 40, 50], dtype=np.float32)\r
    \r
    # Rank 2: 3 students x 4 subjects\r
    m2 = np.array([\r
        [85, 90, 78, 92],\r
        [88, 76, 95, 89],\r
        [90, 92, 85, 94]\r
    ], dtype=np.int32)\r
    \r
    # Rank 3: 2 Batches of 3 Students x 4 Subjects\r
    t3 = np.zeros((2, 3, 4), dtype=np.float64)\r
    \r
    # Rank 4: 16 Images x 3 Channels x 64 Height x 64 Width\r
    t4 = np.zeros((16, 3, 64, 64), dtype=np.uint8)\r
\r
    tensors = [("1D Vector", v1), ("2D Matrix", m2), ("3D Tensor", t3), ("4D Image Batch", t4)]\r
\r
    for name, t in tensors:\r
        print(f"\\n[{name}]")\r
        print(f"  Shape (.shape)      : {t.shape}")\r
        print(f"  Dimensions (.ndim)  : {t.ndim}")\r
        print(f"  Total Elements (.size): {t.size:,}")\r
        print(f"  Element Type (.dtype): {t.dtype}")\r
        print(f"  Memory Footprint    : {t.nbytes:,} bytes")\r
\r
if __name__ == "__main__":\r
    inspect_shapes_and_dimensions()\r
`,w=`"""\r
================================================================================\r
Topic 5 - Script 02: Demystifying (N,) 1D Vectors vs (N, 1) Column Matrices\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- The difference between rank-1 vector (4,), row matrix (1, 4), and column matrix (4, 1)\r
- Why calling .T (transpose) does NOTHING on a 1D array of shape (N,)\r
- Why Scikit-learn models crash with Expected 2D array, got 1D array instead\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def compare_vector_shapes():\r
    print("=" * 65)\r
    print("THE 1D vs 2D SHAPE PARADOX IN MACHINE LEARNING")\r
    print("=" * 65)\r
\r
    # 1. 1D Rank-1 array\r
    a_1d = np.array([10, 20, 30, 40])\r
    print("1. 1D Array:")\r
    print("   Array   :", a_1d)\r
    print("   Shape   :", a_1d.shape, " (1 axis, length 4)")\r
    print("   Transpose a_1d.T:", a_1d.T, "Shape after transpose:", a_1d.T.shape, "(UNCHANGED!)")\r
\r
    # 2. 2D Row Vector (1, 4)\r
    row_2d = a_1d.reshape(1, 4)\r
    print("\\n2. 2D Row Vector:")\r
    print("   Array   :\\n", row_2d)\r
    print("   Shape   :", row_2d.shape, " (2 axes: 1 row, 4 cols)")\r
    print("   Transpose row_2d.T:\\n", row_2d.T)\r
    print("   Shape after transpose:", row_2d.T.shape, " (Became Column Vector!)")\r
\r
    # 3. 2D Column Vector (4, 1)\r
    col_2d = a_1d.reshape(4, 1)\r
    print("\\n3. 2D Column Vector:")\r
    print("   Array   :\\n", col_2d)\r
    print("   Shape   :", col_2d.shape, " (2 axes: 4 rows, 1 col)")\r
\r
if __name__ == "__main__":\r
    compare_vector_shapes()\r
`,S=`"""\r
================================================================================\r
Topic 5 - Script 03: Dimension Expansion (newaxis, expand_dims) and Squeezing\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Adding singleton dimensions via np.newaxis (None slicing)\r
- np.expand_dims(arr, axis=...) for explicit axis insertion\r
- np.squeeze(arr) for stripping redundant 1-sized singleton dimensions\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_expansion_and_squeezing():\r
    print("=" * 65)\r
    print("1. EXPANDING DIMENSIONS WITH np.newaxis & np.expand_dims")\r
    print("=" * 65)\r
\r
    v = np.array([10, 20, 30])  # Shape (3,)\r
    print("Original Vector Shape:", v.shape)\r
\r
    # Insert row dimension -> (1, 3)\r
    v_row = v[np.newaxis, :]\r
    print("v[np.newaxis, :] Shape :", v_row.shape)\r
\r
    # Insert col dimension -> (3, 1)\r
    v_col = v[:, np.newaxis]\r
    print("v[:, np.newaxis] Shape :", v_col.shape)\r
\r
    # Using np.expand_dims\r
    v_exp = np.expand_dims(v, axis=0) # Shape (1, 3)\r
    print("np.expand_dims(axis=0) :", v_exp.shape)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. SQUEEZING REDUNDANT AXES WITH np.squeeze()")\r
    print("=" * 65)\r
    \r
    # 4D tensor with redundant singleton dimensions\r
    redundant = np.zeros((1, 5, 1, 3))\r
    print("Redundant Tensor Shape :", redundant.shape)\r
\r
    # Squeeze all singleton dimensions\r
    squeezed_all = np.squeeze(redundant)\r
    print("np.squeeze(all) Shape  :", squeezed_all.shape)\r
\r
    # Squeeze specific axis only (axis 0)\r
    squeezed_ax0 = np.squeeze(redundant, axis=0)\r
    print("np.squeeze(axis=0) Shape:", squeezed_ax0.shape)\r
\r
if __name__ == "__main__":\r
    demonstrate_expansion_and_squeezing()\r
`,_=`"""\r
================================================================================\r
Topic 5 - Script 04: Batch Dimension Formatting in Real-World ML Models\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Preparing a single student test vector for Scikit-learn model.predict()\r
- Handling batch inputs in Deep Learning (e.g. PyTorch / Keras inputs)\r
- Preventing broadcasting bugs caused by unexpected singleton dimensions\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def simulate_ml_batch_formatting():\r
    print("=" * 65)\r
    print("ML WORKFLOW: Preparing Single Sample for Model Inference")\r
    print("=" * 65)\r
\r
    # A single student's features: [Study Hours = 4.5, Attendance = 88.0, Prev Marks = 79.0]\r
    single_student = np.array([4.5, 88.0, 79.0])\r
    print("Raw single sample shape:", single_student.shape, "<- Invalid for model.predict()!")\r
\r
    # Fix 1: Add Batch dimension using np.newaxis or reshape(1, -1)\r
    batch_input = single_student[np.newaxis, :]  # Shape (1, 3)\r
    print("Formatted 2D Matrix Shape:", batch_input.shape, "<- Ready for Scikit-learn!")\r
\r
    # Simulated model weights (3 features -> 1 output)\r
    weights = np.array([[5.0], [0.4], [0.3]]) # Shape (3, 1)\r
    bias = 10.0\r
\r
    # Matrix multiplication: (1, 3) @ (3, 1) -> (1, 1)\r
    pred_2d = np.dot(batch_input, weights) + bias\r
    print("\\nModel Output (2D):", pred_2d, "Shape:", pred_2d.shape)\r
\r
    # Flatten back to scalar for user presentation\r
    final_score = pred_2d.item() # or np.squeeze(pred_2d)\r
    print(f"Final Predicted Marks: {final_score:.2f}")\r
\r
if __name__ == "__main__":\r
    simulate_ml_batch_formatting()\r
`,D=`\uFEFF========================================================\r
NUMPY ESSENTIALS — TOPIC 5: SHAPE, SIZE AND DIMENSIONS\r
========================================================\r
\r
SHAPE:\r
  arr.shape → tuple of sizes along each axis\r
  1D: (n,)\r
  2D: (rows, cols)\r
  3D: (depth, rows, cols)\r
\r
NDIM:\r
  arr.ndim → number of axes (dimensions)\r
  1D ndarray: ndim=1\r
  2D ndarray: ndim=2\r
\r
SIZE:\r
  arr.size → product of all shape values\r
  shape (3,4) → size=12\r
\r
NBYTES:\r
  arr.nbytes = arr.size × arr.itemsize\r
  shape (3,4) float64 → nbytes = 12 × 8 = 96\r
\r
CHECKING BEFORE FEEDING TO ML MODEL:\r
  print(X.shape)   # (n_samples, n_features)\r
  print(y.shape)   # (n_samples,)\r
  print(X.dtype)   # float64\r
\r
RESHAPING TO FIX SHAPES:\r
  arr = np.array([1,2,3,4,5,6])\r
  arr.reshape(2,3) → shape (2,3)\r
  arr.reshape(-1,1) → shape (6,1)  [-1 = infer]\r
\r
QUICK REVISION:\r
  □ .shape returns a tuple\r
  □ .ndim counts dimensions\r
  □ .size is total element count\r
  □ .nbytes = size × itemsize\r
  □ Always check X.shape before training a model\r
`,z=[{question:"What does the arr.shape attribute return in NumPy?",shortAnswer:"A tuple of integers representing the size of the array along each dimension (axis).",explanation:"For a 1D array of 5 elements, shape is (5,). For a 2D matrix of 3 rows and 4 columns, shape is (3, 4). For a 3D tensor, shape is (depth, rows, cols). The length of the tuple equals arr.ndim.",hint:"shape returns a tuple of dimension lengths.",level:"basic",codeExample:`import numpy as np
arr = np.zeros((3, 4))
print(arr.shape)  # (3, 4)`},{question:"What is the difference between arr.ndim and arr.size?",shortAnswer:"arr.ndim is the number of axes (dimensions); arr.size is the total count of elements.",explanation:"arr.ndim tells you how many indices are needed to locate an item (e.g. 2 for rows and columns). arr.size is the product of all numbers in the shape tuple (e.g., shape (3, 4) -> size is 3 * 4 = 12).",hint:"ndim = rank of array; size = total element count.",level:"basic",codeExample:`import numpy as np
arr = np.zeros((2, 3, 4))
print(arr.ndim)  # 3 (axes)
print(arr.size)  # 24 (total elements: 2 * 3 * 4)`},{question:"What is the formula to calculate an ndarray's total memory in bytes (arr.nbytes)?",shortAnswer:"arr.nbytes = arr.size * arr.itemsize",explanation:"Total memory consumed by the raw numeric data buffer equals total element count (size) multiplied by the number of bytes per element (itemsize, e.g. 8 bytes for float64, 4 bytes for float32).",hint:"Total bytes = size multiplied by itemsize.",level:"basic",codeExample:`import numpy as np
arr = np.ones((100, 50), dtype=np.float32)
print(arr.size)      # 5000
print(arr.itemsize)  # 4 bytes
print(arr.nbytes)    # 20000 bytes (20 KB)`},{question:"Why is a 1D array of shape (5,) fundamentally different from a 2D array of shape (1, 5) or (5, 1)?",shortAnswer:"(5,) has ndim=1 and requires 1 index; (1, 5) and (5, 1) have ndim=2 and represent 2D matrices.",explanation:"A 1D vector arr[i] has only one axis. A (1, 5) row matrix has 1 row and 5 columns arr[0, j]. A (5, 1) column matrix has 5 rows and 1 column arr[i, 0]. Machine learning estimators (Scikit-learn) reject 1D arrays for feature matrix X because they require 2D inputs (samples, features).",hint:"Check ndim and indexing syntax.",level:"intermediate",codeExample:`import numpy as np
v = np.array([1, 2, 3])
print(v.shape, v.ndim)       # (3,) 1
row = v.reshape(1, 3)
print(row.shape, row.ndim)   # (1, 3) 2
col = v.reshape(3, 1)
print(col.shape, col.ndim)   # (3, 1) 2`},{question:"What are the standard expected shapes for feature matrix X and target vector y in Scikit-learn?",shortAnswer:"X must be 2D: (n_samples, n_features); y must be 1D: (n_samples,).",explanation:"Scikit-learn models expect training inputs where rows represent independent observations (samples) and columns represent predictors (features). Target labels y is a 1D vector of length n_samples.",hint:"X is (N, p) 2D matrix; y is (N,) 1D vector.",level:"intermediate",codeExample:`import numpy as np
# 100 student samples, 4 test marks
X = np.random.randn(100, 4)  # (100, 4)
y = np.random.randint(0, 2, 100) # (100,)
print('X shape:', X.shape, '| y shape:', y.shape)`},{question:"What happens to the shape when you slice an array using arr[0, :] versus arr[0:1, :]?",shortAnswer:"arr[0, :] drops the row axis and returns a 1D vector; arr[0:1, :] preserves the 2D matrix shape.",explanation:"Using an integer index (0) reduces dimensionality by collapsing that axis. Using a slice range (0:1) preserves the dimension with a length of 1. For a (3, 4) matrix: arr[0, :] has shape (4,), while arr[0:1, :] has shape (1, 4).",hint:"Single integer index drops the axis; slice range keeps the axis.",level:"intermediate",codeExample:`import numpy as np
mat = np.zeros((3, 4))
print(mat[0, :].shape)    # (4,)  - 1D vector
print(mat[0:1, :].shape)  # (1, 4) - 2D matrix`},{question:"How do you add a new axis to a 1D array to convert it from shape (N,) to (N, 1)?",shortAnswer:"Use arr[:, np.newaxis] or np.expand_dims(arr, axis=1) or arr.reshape(-1, 1).",explanation:"All three methods insert a dimension of length 1. np.newaxis is an alias for None in indexing, turning a 1D vector into a 2D column vector suitable for single-feature regression.",hint:"np.newaxis, np.expand_dims, or reshape(-1, 1).",level:"basic",codeExample:`import numpy as np
x = np.array([10, 20, 30])
col1 = x[:, np.newaxis]              # (3, 1)
col2 = np.expand_dims(x, axis=1)     # (3, 1)
col3 = x.reshape(-1, 1)              # (3, 1)
print(col1.shape, col2.shape, col3.shape)`},{question:"What does np.squeeze() do to an array's shape?",shortAnswer:"It removes all single-dimensional (length 1) axes from the shape tuple.",explanation:"If an array has shape (1, 5, 1, 10), np.squeeze() removes the axes of size 1, returning an array of shape (5, 10). You can also target a specific axis via np.squeeze(arr, axis=0).",hint:"squeeze collapses unit-length dimensions.",level:"intermediate",codeExample:`import numpy as np
arr = np.zeros((1, 10, 1))
squeezed = np.squeeze(arr)
print(squeezed.shape)  # (10,)`},{question:"What is the difference between len(arr) and arr.shape[0] vs arr.size?",shortAnswer:"len(arr) and arr.shape[0] return the size of the first axis (rows); arr.size is the total element count.",explanation:"For a (10, 5) array, len(arr) and arr.shape[0] both return 10 (the number of rows). arr.size returns 50 (total numbers in the matrix). In multi-dimensional code, arr.shape[0] is preferred for clarity.",hint:"len(arr) = first axis length; size = total elements across all axes.",level:"basic",codeExample:`import numpy as np
mat = np.zeros((10, 5))
print(len(mat))       # 10 (rows)
print(mat.shape[0])   # 10 (rows)
print(mat.size)       # 50 (total elements)`},{question:"What shape does a 0-dimensional scalar array have in NumPy?",shortAnswer:"An empty tuple: ().",explanation:"A 0D array represents a single point or scalar. Its ndim is 0, shape is (), and size is 1. It has no indexable axes, but you can extract its native Python value using arr.item().",hint:"Scalars have ndim=0 and shape=().",level:"basic",codeExample:`import numpy as np
s = np.array(99)
print(s.shape)   # ()
print(s.ndim)    # 0
print(s.size)    # 1
print(s.item())  # 99`},{question:"What does the -1 dimension mean in arr.reshape(-1, 1)?",shortAnswer:"-1 is an inferred dimension wildcard that NumPy calculates automatically from total array size.",explanation:"When reshaping, you can supply -1 for exactly one dimension. NumPy computes: new_dim = arr.size / (product of all other specified dimensions). For a 20-element array, reshape(-1, 2) automatically gives shape (10, 2).",hint:"-1 tells NumPy: figure out this dimension size automatically.",level:"basic",codeExample:`import numpy as np
arr = np.arange(12)
mat = arr.reshape(-1, 4)  # 12 / 4 = 3 rows -> shape (3, 4)
print(mat.shape)          # (3, 4)`},{question:"How are dimensions and shapes ordered in Deep Learning image batches (NHWC vs NCHW)?",shortAnswer:"NHWC: (Batch, Height, Width, Channels); NCHW: (Batch, Channels, Height, Width).",explanation:"TensorFlow and Keras commonly use the NHWC convention (e.g. shape (32, 224, 224, 3) for 32 RGB images). PyTorch uses the NCHW convention (shape (32, 3, 224, 224)). Transposing between them is done using arr.transpose(0, 3, 1, 2).",hint:"N=Batch, H=Height, W=Width, C=Color Channels.",level:"advanced",codeExample:`import numpy as np
# NHWC (TensorFlow format)
tf_batch = np.zeros((32, 224, 224, 3))
# Convert to NCHW (PyTorch format)
torch_batch = np.transpose(tf_batch, (0, 3, 1, 2))
print(torch_batch.shape)  # (32, 3, 224, 224)`},{question:"Can you assign a new shape directly to arr.shape in-place?",shortAnswer:"Yes, modifying arr.shape in-place reshapes the array if total element count is preserved and buffer is contiguous.",explanation:"Setting arr.shape = (2, 3) directly updates the metadata shape tuple in-place without returning a new variable, provided the product of dimensions equals arr.size and memory layout allows it.",hint:"Direct assignment arr.shape = (r, c) modifies shape in-place.",level:"intermediate",codeExample:`import numpy as np
arr = np.arange(6)
arr.shape = (2, 3)  # In-place reshape
print(arr)`},{question:"What error occurs if you attempt to reshape an array into dimensions whose product does not match arr.size?",shortAnswer:"ValueError: cannot reshape array of size X into shape Y.",explanation:"NumPy ndarrays have a fixed total number of elements. Attempting to reshape a 10-element array into shape (3, 4) (which requires 12 elements) throws a ValueError because data cannot be created or destroyed during reshape.",hint:"Product of new dimensions must exactly equal total elements (size).",level:"basic",codeExample:`import numpy as np
arr = np.arange(10)
# arr.reshape(3, 4) -> ValueError: cannot reshape array of size 10 into shape (3, 4)`},{question:"How does axis reduction affect the output shape in np.mean(X, axis=0) for an (N, p) matrix?",shortAnswer:"Axis 0 is eliminated, returning a 1D vector of shape (p,).",explanation:"When you reduce along an axis (sum, mean, std, min, max), that axis is collapsed. For feature matrix X of shape (100, 4), np.mean(X, axis=0) averages down all 100 rows, producing a 1D vector of 4 feature means.",hint:"Reducing along axis 0 removes axis 0 from the shape tuple.",level:"basic",codeExample:`import numpy as np
X = np.ones((100, 4))
means = np.mean(X, axis=0)
print(means.shape)  # (4,)`},{question:"How can you keep the reduced dimension as size 1 using keepdims=True?",shortAnswer:"Pass keepdims=True to retain the collapsed axis as length 1: shape (1, p) instead of (p,).",explanation:"Setting keepdims=True prevents the axis from being dropped. For shape (100, 4), np.mean(X, axis=0, keepdims=True) produces shape (1, 4), enabling seamless broadcasting when normalizing X - X_mean.",hint:"keepdims=True preserves dimensionality for broadcasting.",level:"intermediate",codeExample:`import numpy as np
X = np.ones((100, 4))
means_2d = np.mean(X, axis=0, keepdims=True)
print(means_2d.shape)  # (1, 4) - broadcasts cleanly with (100, 4)`},{question:"What is the difference between shape (3,) and shape (3, 1) when performing matrix multiplication with np.dot()?",shortAnswer:"np.dot() treats (3,) as a vector (inner product); (3, 1) is treated strictly as a 2D column matrix.",explanation:"With a (3,) vector, dot product with another (3,) vector produces a scalar. With (3, 1) and (1, 3) matrices, matrix multiplication produces a (3, 3) outer product matrix. Precise shape controls algebraic behavior.",hint:"(3,) produces scalar dot products; (3, 1) follows strict matrix dimension rules.",level:"intermediate",codeExample:`import numpy as np
a = np.array([1, 2, 3])
print(np.dot(a, a))          # 14 (Scalar)

a_col = a.reshape(3, 1)
a_row = a.reshape(1, 3)
print(np.dot(a_col, a_row))  # 3x3 Matrix`},{question:"How do you check if two arrays have compatible shapes for element-wise addition?",shortAnswer:"Their dimensions must either be equal, or one of them must be 1 (Broadcasting Rule).",explanation:"NumPy compares shapes element-wise starting from trailing (rightmost) dimensions. For example, (100, 4) and (1, 4) are compatible because 4 == 4 and 1 broadcasts to 100.",hint:"Trailing dimensions must match or be equal to 1.",level:"intermediate",codeExample:`import numpy as np
A = np.ones((100, 4))
B = np.ones((1, 4))
C = A + B  # Valid broadcasting -> shape (100, 4)`},{question:"What does the arr.itemsize attribute tell you?",shortAnswer:"The number of bytes occupied by each single element in RAM.",explanation:"itemsize is determined by dtype: float64 is 8 bytes, float32 is 4 bytes, int32 is 4 bytes, int16 is 2 bytes, uint8 is 1 byte, and bool_ is 1 byte.",hint:"itemsize is the byte width of a single element.",level:"basic",codeExample:`import numpy as np
a = np.zeros(5, dtype=np.float32)
print(a.itemsize)  # 4 bytes`},{question:"What shape does an array created from a list of strings ['Sachin', 'Mahima', 'Susmita'] have?",shortAnswer:"Shape is (3,) with a fixed-width Unicode string dtype such as '<U7'.",explanation:"Even though strings have variable character lengths, the ndarray has 1 dimension with 3 elements. NumPy sets the dtype to the length of the longest string ('Susmita' -> 7 characters = '<U7').",hint:"Shape is (3,) for 3 string items.",level:"basic",codeExample:`import numpy as np
names = np.array(['Sachin', 'Mahima', 'Susmita'])
print(names.shape)  # (3,)
print(names.dtype)  # '<U7'`},{question:"How do you verify whether an array is a 1D vector or a 2D matrix before training in Python?",shortAnswer:"Check arr.ndim == 1 or len(arr.shape) == 1 vs arr.ndim == 2.",explanation:"In defensive programming, you can assert: assert X.ndim == 2, f'Expected 2D feature matrix, got shape {X.shape}'. If X.ndim == 1, convert it with X = X.reshape(-1, 1).",hint:"Use arr.ndim to verify dimension count.",level:"basic",codeExample:`import numpy as np
def check_dataset(X, y):
    if X.ndim == 1:
        X = X.reshape(-1, 1)
    assert X.shape[0] == y.shape[0], 'Sample mismatch!'
    return X, y`},{question:"What is the shape of a transposed 2D matrix of shape (3, 5)?",shortAnswer:"Shape is (5, 3).",explanation:"Transposing arr.T reverses the shape tuple: rows become columns and columns become rows. For a (3, 5) array, arr.T has shape (5, 3).",hint:"Transposing swaps rows and columns.",level:"basic",codeExample:`import numpy as np
arr = np.zeros((3, 5))
print(arr.T.shape)  # (5, 3)`},{question:"How does np.ravel() vs np.flatten() affect array shape?",shortAnswer:"Both collapse any N-dimensional array into a 1D vector of shape (size,).",explanation:"For an array of shape (3, 4), both arr.ravel() and arr.flatten() return shape (12,). ravel() returns a view when possible, whereas flatten() always creates a new copy.",hint:"Both return a 1D vector of shape (arr.size,).",level:"basic",codeExample:`import numpy as np
mat = np.zeros((3, 4))
print(mat.ravel().shape)    # (12,)
print(mat.flatten().shape)  # (12,)`},{question:"What happens when you slice a 3D tensor of shape (10, 224, 224) using tensor[0]?",shortAnswer:"The first dimension is dropped, returning a 2D matrix of shape (224, 224).",explanation:"Indexing the first axis extracts the 0th slice (e.g. the first image in a batch), reducing ndim from 3 to 2.",hint:"Indexing the outer axis extracts a 2D slice.",level:"intermediate",codeExample:`import numpy as np
tensor = np.zeros((10, 224, 224))
first_img = tensor[0]
print(first_img.shape)  # (224, 224)`},{question:"Why does reshaping an array never copy data unless memory layout requires it?",shortAnswer:"Reshaping only modifies the shape and strides metadata, pointing to the same contiguous RAM buffer.",explanation:"Because memory in RAM is a flat sequential line of bytes, changing logical dimensions from (2, 6) to (3, 4) simply alters how strides calculate index offsets. The raw bytes remain unchanged in memory.",hint:"Reshaping is an O(1) metadata view modification when contiguous.",level:"advanced",codeExample:`import numpy as np
orig = np.arange(12)
reshaped = orig.reshape(3, 4)
print(reshaped.base is orig)  # True (Zero copy view!)`}],l=[{id:"part1",fileName:"01_shape_ndim_size_inspection.py",title:"1. Shape, ndim & Size Inspection",badge:"Tensor Ranks",code:v,summary:"Systematically checks shape tuples, rank dimensions (.ndim), item count (.size), and byte footprints across 1D to 4D tensors."},{id:"part2",fileName:"02_1d_vector_vs_2d_column_matrix.py",title:"2. (N,) 1D Vector vs (N, 1) Column Matrix",badge:"Shape Paradox",code:w,summary:"Demystifies why 1D vectors do not transpose and explains the exact shape requirement for Scikit-learn feature matrices."},{id:"part3",fileName:"03_expanding_and_squeezing_dimensions.py",title:"3. np.newaxis, expand_dims & squeeze",badge:"Axis Expansion",code:S,summary:"Demonstrates inserting singleton batch axes using np.newaxis and np.expand_dims, and eliminating redundant axes with np.squeeze."},{id:"part4",fileName:"04_ml_batch_dimension_manipulation.py",title:"4. ML Inference Batch Formatting",badge:"ML Batch Shape",code:_,summary:"Prepares raw single student test vectors into (1, N_features) batches for model inference and converts prediction matrices back to scalars."}],A=[{rank:"0D Array (Scalar)",shape:"()",ndim:0,elements:"1",desc:"Single scalar value (e.g. loss value, metric, learning rate)",badge:"border-slate-500/40 bg-slate-500/10 text-slate-300"},{rank:"1D Array (Vector)",shape:"(N,)",ndim:1,elements:"N",desc:"Single list of numbers (target labels y, bias vector, single feature)",badge:"border-blue-500/40 bg-blue-500/10 text-blue-300"},{rank:"2D Array (Matrix)",shape:"(N_samples, N_features)",ndim:2,elements:"Rows × Cols",desc:"Tabular dataset matrix X for Scikit-learn models and linear regression",badge:"border-emerald-500/40 bg-emerald-500/10 text-emerald-300"},{rank:"3D Array (Tensor)",shape:"(Height, Width, Channels)",ndim:3,elements:"H × W × C",desc:"Digital color image (RGB) or time-series sequence (Timesteps, Features)",badge:"border-purple-500/40 bg-purple-500/10 text-purple-300"},{rank:"4D Array (Batched Tensor)",shape:"(Batch, Height, Width, Channels)",ndim:4,elements:"B × H × W × C",desc:"Deep learning training mini-batch of images passed to Convolutional Neural Networks",badge:"border-amber-500/40 bg-amber-500/10 text-amber-300"}],T=[{format:"1D Vector",syntax:"v = np.array([10, 20, 30])",shape:"(3,)",ndim:1,indexing:"v[i]",mlRole:"Target labels y (e.g. Pass/Fail labels)",verdict:"1 axis only",color:"text-blue-400"},{format:"2D Row Matrix",syntax:"row = v.reshape(1, 3)",shape:"(1, 3)",ndim:2,indexing:"row[0, j]",mlRole:"Single sample test prediction in Scikit-learn",verdict:"1 row, 3 columns",color:"text-emerald-400"},{format:"2D Column Matrix",syntax:"col = v.reshape(3, 1)",shape:"(3, 1)",ndim:2,indexing:"col[i, 0]",mlRole:"Single feature column in Linear Regression",verdict:"3 rows, 1 column",color:"text-amber-400"}],B=()=>{const[n,p]=i.useState("overview"),[m,x]=i.useState(null),[o,h]=i.useState("part1"),r=l.find(s=>s.id===o)||l[0],[d,u]=i.useState("1d"),t=(()=>{switch(d){case"1d":return{name:"1D Vector",shape:"(4,)",ndim:1,size:4,syntax:"x = np.array([75, 88, 92, 64])",scikitLearnValid:!1,warning:"Scikit-learn requires 2D matrix for X! Will throw ValueError."};case"row":return{name:"2D Row Matrix (1, 4)",shape:"(1, 4)",ndim:2,size:4,syntax:"x = np.array([75, 88, 92, 64]).reshape(1, -1)",scikitLearnValid:!0,warning:"Valid: 1 sample with 4 features (suitable for model.predict)."};case"col":return{name:"2D Column Matrix (4, 1)",shape:"(4, 1)",ndim:2,size:4,syntax:"x = np.array([75, 88, 92, 64]).reshape(-1, 1)",scikitLearnValid:!0,warning:"Valid: 4 samples with 1 feature (suitable for model.fit)."};case"matrix":return{name:"2D Tabular Dataset (3, 4)",shape:"(3, 4)",ndim:2,size:12,syntax:"X = np.zeros((3, 4)) # 3 students x 4 subjects",scikitLearnValid:!0,warning:"Standard feature matrix X with 3 samples and 4 features."};default:return{}}})(),g=[{id:"overview",label:"Overview & Visual Hierarchy"},{id:"shape_vs_ndim",label:"Shape vs Ndim vs Size"},{id:"shape_trap",label:"The (N,) vs (N, 1) Shape Trap"},{id:"slicing_shapes",label:"Slicing & Axis Reduction"},{id:"expand_squeeze",label:"Expand Dims & Squeeze"},{id:"ml_validation",label:"ML Dataset Shape Validation"}];return e.jsxs("div",{className:"space-y-8 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-12",children:[e.jsxs("header",{className:"relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Segment 9 • Module 1 • Topic 5"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Core Attributes"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Array Geometry"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:["Array ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"shape"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"size"}),", and ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"dimensions (ndim)"})]}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:["In Machine Learning, 90% of model bugs stem from shape mismatches. Master the mathematical definitions of ",e.jsx("strong",{className:"text-white font-mono",children:"shape"}),", ",e.jsx("strong",{className:"text-white font-mono",children:"ndim"}),", and ",e.jsx("strong",{className:"text-white font-mono",children:"size"}),", understand the critical difference between 1D vectors and 2D matrices, and learn how to defensively audit dataset dimensions."]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:g.map(s=>e.jsx("button",{onClick:()=>p(s.id),className:`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${n===s.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400 ring-2 ring-indigo-400/30":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"}`,children:s.label},s.id))})]})]}),n==="overview"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"The Three Pillars of Array Geometry"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Understanding how NumPy measures multidimensional space"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-cyan-900/40 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400 uppercase",children:"1. arr.shape (Tuple)"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Axis Lengths"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Returns a tuple of integers showing the size along each dimension. E.g. ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"(3, 4)"})," represents 3 rows and 4 columns."]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase",children:"2. arr.ndim (Integer)"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Number of Axes (Rank)"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Returns the integer count of dimensions. E.g. 1 for vectors, 2 for tabular matrices, 3 for RGB images, 4 for image batches."})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-purple-900/40 space-y-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-purple-400 uppercase",children:"3. arr.size (Integer)"}),e.jsx("h3",{className:"font-bold text-white text-base",children:"Total Element Count"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Total numeric items in memory, equal to the mathematical product: ",e.jsx("code",{className:"text-purple-300 font-mono",children:"∏ shape_i"}),". E.g. ",e.jsx("code",{className:"text-slate-200",children:"3 × 4 = 12"}),"."]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Visual Dimensional Hierarchy (0D to 4D)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"From a single scalar dot to 4D computer vision tensor batches"})]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center",children:e.jsxs("svg",{className:"w-full max-w-3xl h-auto",viewBox:"0 0 800 360",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"800",height:"360",rx:"16",fill:"#0B1120"}),e.jsxs("g",{transform:"translate(40, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"120",height:"130",rx:"8",fill:"#18181B",stroke:"#64748B",strokeWidth:"1"}),e.jsx("text",{x:"60",y:"24",fill:"#94A3B8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"0D: Scalar"}),e.jsx("circle",{cx:"60",cy:"65",r:"16",fill:"#3B82F6",fillOpacity:"0.3",stroke:"#60A5FA",strokeWidth:"2",children:e.jsx("animate",{attributeName:"r",values:"14;18;14",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"60",y:"70",fill:"#FFFFFF",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"42"}),e.jsx("text",{x:"60",y:"105",fill:"#64748B",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"shape: () • ndim: 0"})]}),e.jsxs("g",{transform:"translate(180, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"130",rx:"8",fill:"#18181B",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"90",y:"24",fill:"#93C5FD",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"1D: Vector"}),e.jsx("g",{transform:"translate(15, 45)",children:[75,88,92,64].map((s,a)=>e.jsxs("g",{transform:`translate(${a*38}, 0)`,children:[e.jsx("rect",{x:"0",y:"0",width:"34",height:"34",rx:"4",fill:"#1E293B",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"17",y:"22",fill:"#FFFFFF",fontSize:"10",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:s})]},a))}),e.jsx("text",{x:"90",y:"105",fill:"#38BDF8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"shape: (4,) • ndim: 1"})]}),e.jsxs("g",{transform:"translate(380, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"130",rx:"8",fill:"#18181B",stroke:"#10B981",strokeWidth:"1"}),e.jsx("text",{x:"90",y:"24",fill:"#6EE7B7",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"2D: Matrix (Tabular X)"}),e.jsx("g",{transform:"translate(20, 38)",children:[[75,88,92],[92,95,89]].map((s,a)=>s.map((f,c)=>e.jsxs("g",{transform:`translate(${c*46}, ${a*26})`,children:[e.jsx("rect",{x:"0",y:"0",width:"42",height:"22",rx:"3",fill:"#064E3B",stroke:"#34D399",strokeWidth:"1"}),e.jsx("text",{x:"21",y:"15",fill:"#A7F3D0",fontSize:"9",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:f})]},`${a}-${c}`)))}),e.jsx("text",{x:"90",y:"112",fill:"#34D399",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"shape: (2, 3) • ndim: 2"})]}),e.jsxs("g",{transform:"translate(580, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"130",rx:"8",fill:"#18181B",stroke:"#A855F7",strokeWidth:"1"}),e.jsx("text",{x:"90",y:"24",fill:"#D8B4FE",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"3D: Image Tensor"}),e.jsxs("g",{transform:"translate(45, 45)",children:[e.jsx("rect",{x:"16",y:"0",width:"70",height:"40",rx:"4",fill:"#1E1B4B",stroke:"#6366F1",strokeWidth:"1"}),e.jsx("rect",{x:"8",y:"8",width:"70",height:"40",rx:"4",fill:"#064E3B",stroke:"#10B981",strokeWidth:"1"}),e.jsx("rect",{x:"0",y:"16",width:"70",height:"40",rx:"4",fill:"#7F1D1D",stroke:"#EF4444",strokeWidth:"1",children:e.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;1;0.4",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"35",y:"40",fill:"#FFFFFF",fontSize:"9",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"RGB (H, W, 3)"})]}),e.jsx("text",{x:"90",y:"112",fill:"#C084FC",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:"shape: (H, W, 3) • ndim: 3"})]}),e.jsxs("g",{transform:"translate(40, 190)",children:[e.jsx("rect",{x:"0",y:"0",width:"720",height:"140",rx:"10",fill:"#030712",stroke:"#4F46E5",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"28",fill:"#A5B4FC",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",children:"THE SHAPE INVARIANCE THEOREM: Total Elements (size) is strictly conserved"}),e.jsx("text",{x:"20",y:"50",fill:"#94A3B8",fontSize:"11",fontFamily:"sans-serif",children:"An array of size = 12 can be viewed as: (12,) 1D vector = (3, 4) matrix = (2, 6) matrix = (2, 2, 3) tensor"}),e.jsx("g",{transform:"translate(20, 70)",children:[{s:"(12,)",n:"1D (12)",col:"#38BDF8"},{s:"(1, 12)",n:"2D Row",col:"#34D399"},{s:"(12, 1)",n:"2D Col",col:"#FBBF24"},{s:"(3, 4)",n:"2D (3x4)",col:"#A855F7"},{s:"(2, 2, 3)",n:"3D (2x2x3)",col:"#F472B6"}].map((s,a)=>e.jsxs("g",{transform:`translate(${a*138}, 0)`,children:[e.jsx("rect",{x:"0",y:"0",width:"126",height:"48",rx:"6",fill:"#111827",stroke:s.col,strokeWidth:"1.5"}),e.jsx("text",{x:"63",y:"20",fill:"#FFFFFF",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:s.s}),e.jsx("text",{x:"63",y:"38",fill:s.col,fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:s.n})]},a))})]})]})}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsx("h3",{className:"font-bold text-white text-base",children:"Interactive Shape Transformation Sandbox"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:[{id:"1d",label:"1D Vector (4,)"},{id:"row",label:"2D Row Matrix (1, 4)"},{id:"col",label:"2D Col Matrix (4, 1)"},{id:"matrix",label:"2D Matrix (3, 4)"}].map(s=>e.jsx("button",{onClick:()=>u(s.id),className:`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all cursor-pointer ${d===s.id?"bg-indigo-600 text-white shadow-md shadow-indigo-600/40":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:s.label},s.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono bg-slate-900/90 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Python Creation & Reshape Command:"}),e.jsx("div",{className:"p-3 bg-slate-950 rounded border border-slate-800 text-emerald-300",children:t.syntax}),e.jsxs("p",{className:"mt-2 text-slate-400",children:["Format Name: ",e.jsx("strong",{className:"text-white",children:t.name})]})]}),e.jsxs("div",{className:"space-y-1 text-slate-300",children:[e.jsxs("p",{children:["arr.shape : ",e.jsx("strong",{className:"text-cyan-300 text-sm",children:t.shape})]}),e.jsxs("p",{children:["arr.ndim  : ",e.jsxs("strong",{className:"text-indigo-300 text-sm",children:[t.ndim," Dimensions"]})]}),e.jsxs("p",{children:["arr.size  : ",e.jsxs("strong",{className:"text-amber-300 text-sm",children:[t.size," total items"]})]}),e.jsx("div",{className:`mt-2 p-2 rounded border text-[11px] ${t.scikitLearnValid?"bg-emerald-950/40 border-emerald-800 text-emerald-300":"bg-rose-950/40 border-rose-800 text-rose-300"}`,children:t.warning})]})]})]})]})]}),n==="shape_vs_ndim"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Dimensional Hierarchy Reference (0D to 4D)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"How ndim, shape, and size behave across tensor ranks"})]})]}),e.jsx("div",{className:"space-y-4",children:A.map((s,a)=>e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3",children:[e.jsxs("div",{className:"space-y-1",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"font-bold text-white font-mono text-sm",children:s.rank}),e.jsxs("span",{className:`px-2 py-0.5 text-xs font-mono rounded border ${s.badge}`,children:["ndim=",s.ndim]})]}),e.jsx("p",{className:"text-xs text-slate-400",children:s.desc})]}),e.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono",children:[e.jsxs("span",{className:"bg-slate-900 px-3 py-1.5 rounded border border-slate-800 text-cyan-300",children:["shape: ",s.shape]}),e.jsxs("span",{className:"bg-slate-900 px-3 py-1.5 rounded border border-slate-800 text-amber-300",children:["size: ",s.elements]})]})]},a))})]}),n==="shape_trap"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"The (N,) vs (1, N) vs (N, 1) Shape Trap"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"The most common bug encountered by beginners in Python Machine Learning"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/60 text-xs uppercase font-mono text-slate-400",children:[e.jsx("th",{className:"p-3",children:"Data Format"}),e.jsx("th",{className:"p-3",children:"Creation / Reshape Syntax"}),e.jsx("th",{className:"p-3",children:"shape"}),e.jsx("th",{className:"p-3",children:"ndim"}),e.jsx("th",{className:"p-3",children:"Role in ML Models"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/80 font-mono text-xs sm:text-sm",children:T.map((s,a)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:`p-3 font-bold ${s.color}`,children:s.format}),e.jsx("td",{className:"p-3 text-slate-300",children:s.syntax}),e.jsx("td",{className:"p-3 text-cyan-300 font-bold",children:s.shape}),e.jsx("td",{className:"p-3 text-indigo-300",children:s.ndim}),e.jsx("td",{className:"p-3 font-sans text-xs sm:text-sm text-slate-300",children:s.mlRole})]},a))})]})})]}),n==="slicing_shapes"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Slicing Syntax & Dimension Collapse"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Integer indexing collapses axes; slice ranges preserve 2D shapes"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-rose-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"A. Integer Indexing: arr[0, :]"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Passing an integer collapses the row dimension, returning a ",e.jsx("strong",{children:"1D vector"})," of shape ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"(4,)"}),"."]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"mat = np.zeros((3, 4)) # (3, 4)"}),e.jsx("p",{children:"row = mat[0, :]        # Extracts Row 0"}),e.jsx("p",{className:"text-rose-400",children:"print(row.shape) # (4,) -> DROPPED TO 1D!"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase",children:"B. Slice Range: arr[0:1, :]"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Passing a range slice preserves the 2D matrix structure, returning a ",e.jsx("strong",{children:"2D row matrix"})," of shape ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"(1, 4)"}),"."]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"mat = np.zeros((3, 4)) # (3, 4)"}),e.jsx("p",{children:"row = mat[0:1, :]      # Slice range"}),e.jsx("p",{className:"text-emerald-400",children:"print(row.shape) # (1, 4) -> 2D PRESERVED!"})]})]})]})]}),n==="expand_squeeze"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"np.expand_dims() and np.squeeze()"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Inserting and removing singleton (length 1) dimensions"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-300 text-base",children:["Expanding Dimensions (",e.jsx("code",{className:"text-white font-mono",children:"np.expand_dims"}),")"]}),e.jsx("p",{className:"text-sm text-slate-300",children:"Inserts a new axis of length 1 at the specified index, commonly used to prepare single feature inputs for models."}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"v = np.array([10, 20, 30]) # shape (3,)"}),e.jsx("p",{children:"col = np.expand_dims(v, axis=1) # (3, 1)"}),e.jsx("p",{className:"text-cyan-300",children:"# Equivalent: v[:, np.newaxis]"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-pink-300 text-base",children:["Squeezing Dimensions (",e.jsx("code",{className:"text-white font-mono",children:"np.squeeze"}),")"]}),e.jsx("p",{className:"text-sm text-slate-300",children:"Collapses all singleton axes of size 1, flattening redundant dimensions without copying data."}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"arr = np.zeros((1, 10, 1)) # shape (1, 10, 1)"}),e.jsx("p",{children:"flat = np.squeeze(arr)     # shape (10,)"}),e.jsx("p",{className:"text-pink-300",children:"# Squeezed 3D to 1D vector"})]})]})]})]}),n==="ml_validation"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Machine Learning Dataset Shape Audit Checklist"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Defensive programming rules before calling model.fit()"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("ul",{className:"text-sm text-slate-300 space-y-3 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Feature Matrix X:"})," Must always have ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"X.ndim == 2"})," and shape ",e.jsx("code",{className:"text-amber-300 font-mono",children:"(N_samples, N_features)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Target Labels y:"})," Must have ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"y.ndim == 1"})," and shape ",e.jsx("code",{className:"text-amber-300 font-mono",children:"(N_samples,)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Sample Count Consistency:"})," ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"X.shape[0] == y.shape[0]"})," must always evaluate to True."]})]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-4 rounded-lg border border-emerald-900/40 text-emerald-300 space-y-1",children:[e.jsx("p",{className:"text-slate-400",children:"# Standard Defensive Audit Function:"}),e.jsx("p",{children:"def audit_shapes(X, y):"}),e.jsx("p",{children:"  assert X.ndim == 2, f'X must be 2D matrix, got shape {X.shape}'"}),e.jsx("p",{children:"  assert y.ndim == 1, f'y must be 1D vector, got shape {y.shape}'"}),e.jsx("p",{children:"  assert X.shape[0] == y.shape[0], 'Sample count mismatch!'"}),e.jsx("p",{children:"  print(f'✔ Audit Passed: X={X.shape}, y={y.shape}')"})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect shape tuples, (N,) vs (N, 1) vectors, newaxis expansion, or ML batch formatting"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:l.map(s=>e.jsxs("button",{onClick:()=>h(s.id),className:`p-3 rounded-xl border text-left transition-all ${o===s.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${o===s.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:s.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:s.title})]},s.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:r.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:r.summary})]})}),e.jsx(b,{fileModule:r.code,title:r.fileName})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold text-lg",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Best Practices"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Avoid these frequent shape and dimension errors"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 1: Passing (N,) 1D Vector for X"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Scikit-learn algorithms throw a ValueError if feature matrix X has shape ",e.jsx("code",{className:"text-rose-300 font-mono",children:"(N,)"}),"."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# BAD:"})," model.fit(x_1d, y)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# CORRECT:"})," model.fit(x_1d.reshape(-1, 1), y)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 2: Axis Collapse in Slicing"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"X[0, :]"})," returns a 1D vector instead of a single-sample 2D row."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# 1D:"})," single_row = X[0, :] # shape (p,)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# 2D:"})," single_row = X[0:1, :] # shape (1, p)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 3: Reshaping with Incompatible Size"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Attempting to reshape a 10-item array into ",e.jsx("code",{className:"text-rose-300 font-mono",children:"(3, 4)"})," throws a ValueError."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# CRASH:"})," np.arange(10).reshape(3, 4)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# VALID:"})," np.arange(12).reshape(3, 4)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 4: Forgetting keepdims=True"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Computing ",e.jsx("code",{className:"text-amber-300 font-mono",children:"X.mean(axis=0)"})," drops the dimension, breaking 2D broadcasting in normalization."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# DROPPED:"})," mu = X.mean(axis=0) # shape (p,)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# PRESERVED:"})," mu = X.mean(axis=0, keepdims=True) # (1, p)"]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-lg",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Think About This... (Interactive Concept Checks)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Test your mental model of multidimensional shapes"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{id:1,q:"If an array has shape (5, 4, 3, 2), what is its ndim and size?",a:"ndim = 4 (length of shape tuple). size = 5 × 4 × 3 × 2 = 120 total elements."},{id:2,q:"How does reshape(-1, 2) work on an array with 18 elements?",a:"NumPy calculates: 18 / 2 = 9 rows, producing an array of shape (9, 2)."},{id:3,q:"Why does np.squeeze(arr) on shape (1, 5, 1) return shape (5,)?",a:"squeeze eliminates all dimensions of length 1, leaving only the dimension of length 5."}].map(s=>e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsx("p",{className:"text-xs font-semibold text-slate-200",children:s.q}),e.jsx("div",{children:m===s.id?e.jsx("div",{className:"p-2.5 rounded bg-indigo-950/40 border border-indigo-700/50 text-xs text-indigo-200 mt-2",children:s.a}):e.jsx("button",{onClick:()=>x(s.id),className:"w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold rounded transition-all cursor-pointer border border-slate-700",children:"Reveal Answer"})})]},s.id))})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(y,{title:"NumPy Shape, Size, and Dimensions — Frequently Asked Questions",questions:z})}),e.jsx("section",{className:"space-y-4",children:e.jsx(N,{content:D,title:"NumPy Array Shape, Size & Dimensions Quick Revision Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 5 Note",downloadFileName:"numpy_shape_size_dimensions_note.txt"})}),e.jsx(j,{note:"Whenever students like Abhronila, Swadeep, or Susmita encounter model fitting bugs in our Barrackpore laboratory, my first question is always: 'Did you print X.shape and y.shape?' Remember: Scikit-learn will never accept a 1D vector of shape (N,) as a feature matrix. Always convert it with .reshape(-1, 1) or np.expand_dims(x, axis=1) before training! — Sukanta Hui"})]})};export{B as default};
