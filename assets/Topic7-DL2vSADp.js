import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P}from"./PythonFileLoader-CiS1GfkF.js";import{F as M}from"./FAQTemplate-D_90hN4m.js";import{P as k}from"./PlainTextPrint-yt10TRX1.js";import{T as R}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const X=`"""\r
================================================================================\r
Topic 7 - Script 01: 1D and 2D Array Slicing Mechanics & Syntax\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Slice notation: arr[start:stop:step] (half-open interval [start, stop))\r
- 2D multi-axis slicing: arr[row_slice, col_slice]\r
- Why Python chained indexing arr[row][col] is slow and dangerous compared to arr[row, col]\r
- Negative step slicing for array reversal (arr[::-1])\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_slicing_basics():\r
    print("=" * 65)\r
    print("1. 1D SLICING MECHANICS")\r
    print("=" * 65)\r
\r
    arr = np.array([10, 20, 30, 40, 50, 60, 70, 80])\r
    print("Original Vector:", arr)\r
    print("arr[1:5]       :", arr[1:5], " (elements at index 1, 2, 3, 4)")\r
    print("arr[::2]       :", arr[::2], " (every 2nd element)")\r
    print("arr[::-1]      :", arr[::-1], " (reversed array)")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. 2D MATRIX SLICING (STUDENT MARKS TABLE)")\r
    print("=" * 65)\r
    \r
    # 4 students (Debangshu, Susmita, Swadeep, Tuhina) x 3 exams (Math, Science, English)\r
    table = np.array([\r
        [85, 90, 88],  # Debangshu\r
        [92, 95, 91],  # Susmita\r
        [78, 82, 80],  # Swadeep\r
        [89, 91, 94]   # Tuhina\r
    ])\r
    print("Student Marks Table (4x3):\\n", table)\r
\r
    # Extract all exam marks for Susmita (Row index 1)\r
    susmita_marks = table[1, :]\r
    print("\\ntable[1, :] (Susmita's row):", susmita_marks)\r
\r
    # Extract Science scores for all students (Column index 1)\r
    science_col = table[:, 1]\r
    print("table[:, 1] (Science marks):", science_col)\r
\r
    # Extract Top-2 students for First 2 subjects:\r
    top_sub = table[0:2, 0:2]\r
    print("\\ntable[0:2, 0:2] Sub-matrix:\\n", top_sub)\r
\r
if __name__ == "__main__":\r
    demonstrate_slicing_basics()\r
`,L=`"""\r
================================================================================\r
Topic 7 - Script 02: Slicing Views vs Copies & In-Place Mutation Trap\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Fundamental NumPy Rule: Basic Slicing ALWAYS returns a VIEW, never a copy\r
- How mutating a slice modifies the underlying master dataset\r
- Verifying memory sharing with arr.base\r
- Using .copy() for defensive isolation in preprocessing pipelines\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_slice_views():\r
    print("=" * 65)\r
    print("DEMO: The Slice View In-Place Mutation Trap")\r
    print("=" * 65)\r
\r
    dataset = np.array([\r
        [10, 20, 30],\r
        [40, 50, 60],\r
        [70, 80, 90]\r
    ])\r
    print("Original Dataset:\\n", dataset)\r
\r
    # Extract a 2x2 slice (Top Left corner)\r
    sub_view = dataset[0:2, 0:2]\r
    print("\\nExtracted Slice sub_view = dataset[0:2, 0:2]:\\n", sub_view)\r
    print("sub_view.base is dataset:", sub_view.base is dataset, "(Exact memory shared!)")\r
\r
    # Modifying the slice\r
    print("\\n--- Performing sub_view[:] = 0 ---")\r
    sub_view[:] = 0\r
    print("Modified sub_view:\\n", sub_view)\r
    print("Original Master Dataset is now:\\n", dataset, "<- MASTER DATA CORRUPTED!")\r
\r
    print("\\n" + "=" * 65)\r
    print("DEFENSIVE SOLUTION: Always call .copy() when isolating features")\r
    print("=" * 65)\r
    safe_data = np.array([[10, 20], [30, 40]])\r
    safe_slice = safe_data[0:2, 0:1].copy()\r
    safe_slice[:] = 999\r
\r
    print("Safe Slice:\\n", safe_slice)\r
    print("Safe Data (Unchanged):\\n", safe_data)\r
\r
if __name__ == "__main__":\r
    demonstrate_slice_views()\r
`,q=`"""\r
================================================================================\r
Topic 7 - Script 03: Multidimensional Slicing & The Ellipsis (...) Operator\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- The Ellipsis (...) syntax to stand for 'as many colons as needed'\r
- Slicing higher dimensional arrays (3D and 4D Computer Vision & NLP tensors)\r
- Extracting specific color channels or specific time steps across entire batches\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_ellipsis_slicing():\r
    print("=" * 65)\r
    print("1. 3D TIME-SERIES SLICING")\r
    print("=" * 65)\r
    # (100 students, 30 days of attendance, 5 sensor features)\r
    time_series = np.zeros((100, 30, 5))\r
    print("Time-series shape (Students, Days, Features):", time_series.shape)\r
\r
    # Extract all students, all days, only feature 0 (Study duration)\r
    # Traditional slice:\r
    f0_standard = time_series[:, :, 0]\r
    # Ellipsis slice:\r
    f0_ellipsis = time_series[..., 0]\r
    print("time_series[..., 0] shape:", f0_ellipsis.shape)\r
    print("Verification:", np.array_equal(f0_standard, f0_ellipsis))\r
\r
    print("\\n" + "=" * 65)\r
    print("2. 4D COMPUTER VISION IMAGE BATCH SLICING")\r
    print("=" * 65)\r
    # (Batch=32, Height=128, Width=128, Channels=3)\r
    image_batch = np.zeros((32, 128, 128, 3))\r
    print("RGB Image Batch shape:", image_batch.shape)\r
\r
    # Extract the Red Channel across all 32 images:\r
    red_channel = image_batch[..., 0]\r
    print("Red Channel batch shape (image_batch[..., 0]):", red_channel.shape)\r
\r
    # Extract the first image across all channels:\r
    first_image = image_batch[0, ...] # or image_batch[0]\r
    print("First Image shape (image_batch[0, ...]):", first_image.shape)\r
\r
if __name__ == "__main__":\r
    demonstrate_ellipsis_slicing()\r
`,O=`"""\r
================================================================================\r
Topic 7 - Script 04: ML Dataset Splitting & Feature / Target Extraction\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Separating feature matrix X from label vector y via slicing: data[:, :-1] and data[:, -1]\r
- Performing Train / Validation / Test dataset splits using index slicing\r
- Preserving 2D structure when slicing a single feature vs 1D reduction\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_ml_slicing():\r
    print("=" * 65)\r
    print("ML PIPELINE: Feature/Label Extraction and Train-Test Split")\r
    print("=" * 65)\r
\r
    # Simulated CSV dataset with 10 rows and 4 columns:\r
    # Col 0: Study Hours, Col 1: Attendance %, Col 2: Previous Marks, Col 3: Final Pass (1/0)\r
    np.random.seed(42)\r
    dataset = np.random.uniform(50, 100, size=(10, 4))\r
    dataset[:, 3] = np.random.choice([0, 1], size=10) # Target labels in last column\r
    print("Raw Full Dataset (10 samples x 4 cols):\\n", np.round(dataset, 1))\r
\r
    # 1. Separate Feature Matrix X and Target Vector y\r
    X = dataset[:, :-1]  # All rows, all columns except the last\r
    y = dataset[:, -1]   # All rows, only the last column\r
\r
    print(f"\\nFeature Matrix X Shape: {X.shape} (Must be 2D)")\r
    print(f"Target Vector y Shape : {y.shape} (1D vector)")\r
\r
    # 2. Train / Test Split (80% Train, 20% Test)\r
    n_samples = len(dataset)\r
    train_size = int(0.8 * n_samples)\r
\r
    X_train, X_test = X[:train_size], X[train_size:]\r
    y_train, y_test = y[:train_size], y[train_size:]\r
\r
    print("\\nDataset Split Summary:")\r
    print(f"  Training Set   : X_train {X_train.shape}, y_train {y_train.shape}")\r
    print(f"  Testing Set    : X_test  {X_test.shape}, y_test  {y_test.shape}")\r
\r
if __name__ == "__main__":\r
    demonstrate_ml_slicing()\r
`,B=`========================================================\r
NUMPY ESSENTIALS — TOPIC 7: INDEXING AND SLICING ARRAYS\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9 • Module 1\r
========================================================\r
\r
1. 1D ARRAY INDEXING & SLICING:\r
--------------------------------\r
Syntax: arr[start : stop : step]\r
  - start: Inclusive starting index (default 0)\r
  - stop:  Exclusive stopping index (default len(arr))\r
  - step:  Stride distance between elements (default 1)\r
  - Negative indexing: arr[-1] is the last element.\r
  - Reverse slicing: arr[::-1] reverses elements in O(1) time.\r
\r
2. 2D & MULTIDIMENSIONAL SLICING:\r
----------------------------------\r
NumPy uses comma-separated indices per axis:\r
  mat[row_index, col_index]\r
  mat[row_slice, col_slice]\r
\r
Common 2D Extraction Patterns:\r
  - Entire row:    mat[r, :]     -> Returns 1D array of row r\r
  - Entire column: mat[:, c]     -> Returns 1D array of column c\r
  - Submatrix:     mat[0:2, 1:3] -> 2x2 sub-block\r
  - Preserving 2D: mat[0:1, :]   -> Shape (1, cols) instead of (cols,)\r
\r
3. CRITICAL NUMPY RULE: SLICES ARE VIEWS (NOT COPIES!):\r
--------------------------------------------------------\r
In standard Python lists, slicing creates a new copy:\r
  py_list[1:3] -> brand new list\r
\r
In NumPy, slicing creates a zero-copy VIEW pointing to the same RAM buffer:\r
  sub_arr = arr[0:2, 0:2]\r
  sub_arr[0, 0] = 999  # MODIFIES THE ORIGINAL ARRAY!\r
\r
To create an independent copy:\r
  sub_copy = arr[0:2, 0:2].copy()\r
\r
4. ESSENTIAL MACHINE LEARNING PATTERNS:\r
----------------------------------------\r
1. Feature/Target Separation (X and y):\r
   X = dataset[:, :-1]   # All rows, all columns except last -> Features (2D)\r
   y = dataset[:, -1]    # All rows, only last column -> Target vector (1D)\r
\r
2. Bounding Box Image Cropping:\r
   crop = image[ymin:ymax, xmin:xmax, :]  # Crop region of interest\r
\r
3. Train/Test Slicing:\r
   X_train = X[:800, :]  # First 800 samples for training\r
   X_test  = X[800:, :]  # Remaining 200 samples for evaluation\r
\r
5. QUICK REVISION CHECKLIST:\r
-----------------------------\r
  □ Slices use start:stop:step (stop is exclusive)\r
  □ Multi-axis indexing uses commas: arr[row, col]\r
  □ Indexing with an integer reduces dimension (ndim drops by 1)\r
  □ Slicing with ranges preserves dimension (ndim remains same)\r
  □ Array slices are zero-copy VIEWS; use .copy() for safety\r
  □ dataset[:, :-1] and dataset[:, -1] is the standard ML split\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,j=[{id:1,question:"What is the standard syntax for slicing a 1D NumPy array?",options:["arr[start : stop : step]","arr(start, stop, step)","arr{start to stop by step}","arr[start .. stop .. step]"],correctAnswer:0,explanation:"NumPy uses the standard Python slicing syntax `arr[start:stop:step]`, where `start` is the inclusive starting index (default 0), `stop` is the exclusive ending index (default array length), and `step` is the stride between elements (default 1)."},{id:2,question:"In NumPy slicing `arr[2:7]`, which indices are actually included in the resulting slice?",options:["Indices 2, 3, 4, 5, 6, and 7","Indices 2, 3, 4, 5, and 6 only (stop index 7 is exclusive)","Indices 3, 4, 5, 6, and 7 only","Indices 2 and 7 only"],correctAnswer:1,explanation:"In Python and NumPy slicing, the `stop` index is strictly exclusive. Therefore, `arr[2:7]` extracts elements at index 2, 3, 4, 5, and 6 (total 7 - 2 = 5 elements)."},{id:3,question:"How do you extract the last 3 elements of a 1D array `scores`?",options:["scores[-3:]","scores[:-3]","scores[-1:-3]","scores[3:]"],correctAnswer:0,explanation:"Negative indexing counts from the end of the array. `scores[-3:]` starts at index -3 (the 3rd element from the end) and includes all elements up to the end of the array."},{id:4,question:"How do you reverse a 1D NumPy array in O(1) time without copying memory?",options:["arr.reverse()","arr[::-1]","np.flip_copy(arr)","arr[-1:0:1]"],correctAnswer:1,explanation:"`arr[::-1]` slices the entire array with a negative step of -1. In NumPy, this produces a zero-copy view with reversed strides in instantaneous O(1) time."},{id:5,question:"How does 2D matrix indexing syntax in NumPy differ from standard nested Python lists?",options:["NumPy uses `mat[row, col]` in a single bracket, while Python lists require `list[row][col]`","NumPy uses curly braces `mat{row, col}`","NumPy requires 1-based indexing instead of 0-based","There is no difference"],correctAnswer:0,explanation:"In NumPy, multi-axis indexing is performed using comma-separated indices inside a single pair of brackets: `mat[row, col]`. Standard Python lists require chained brackets `nested_list[row][col]`, which creates intermediate list objects."},{id:6,question:"What is the result of `mat[:, 0]` on a 2D array of shape (4, 5)?",options:["A 2D array of shape (4, 1)","A 1D array of shape (4,) containing all elements of the first column (column index 0)","The single scalar element at row 0, col 0","A 1D array containing the first row"],correctAnswer:1,explanation:"The colon `:` in the first axis selects all rows, and `0` selects column 0. Because an integer index is used for the column, the dimension is reduced by 1, returning a 1D vector of shape (4,)."},{id:7,question:"What is the crucial memory difference between slicing a NumPy ndarray and slicing a Python list?",options:["NumPy slices create zero-copy VIEWS sharing the same RAM buffer, while Python list slices create independent new copies","NumPy slices always allocate double RAM, while Python list slices share memory","NumPy slices are read-only and cannot be modified","NumPy slices convert all data into strings"],correctAnswer:0,explanation:"Unlike Python lists where `my_list[1:4]` creates a brand-new list copy, NumPy slices return VIEWS of the original array buffer. Modifying values in a NumPy slice directly changes the original array!"},{id:8,question:"If `sub = arr[0:2, 0:2]` and you execute `sub[0, 0] = 999`, what happens to `arr[0, 0]`?",options:["It remains unchanged","It also changes to 999 because `sub` is a view sharing memory with `arr`","Python raises a PermissionError","The entire array `arr` is filled with 999"],correctAnswer:1,explanation:"Because `sub` is a zero-copy view, `sub[0, 0]` references the exact same memory address as `arr[0, 0]`. Therefore, mutating `sub` mutates `arr`."},{id:9,question:"How do you safely create a submatrix slice that will NOT mutate the original array when modified?",options:["sub = arr[0:2, 0:2].copy()","sub = arr[0:2, 0:2].clone()","sub = arr[0:2, 0:2].detach()","sub = np.freeze(arr[0:2, 0:2])"],correctAnswer:0,explanation:"Calling `.copy()` explicitly allocates a new, independent memory buffer in RAM. Modifying `sub` will not affect the original array."},{id:10,question:"In Machine Learning tabular data preprocessing, what do `dataset[:, :-1]` and `dataset[:, -1]` extract?",options:["`dataset[:, :-1]` extracts feature matrix X (all columns except last), and `dataset[:, -1]` extracts target vector y (the last column)","`dataset[:, :-1]` extracts target labels, and `dataset[:, -1]` extracts features","`dataset[:, :-1]` extracts the first row, and `dataset[:, -1]` extracts the last row","They both extract the entire dataset unchanged"],correctAnswer:0,explanation:"In tabular ML datasets, the target label is conventionally placed in the final column. `dataset[:, :-1]` selects all rows and all columns up to the second-to-last column (Feature Matrix X), while `dataset[:, -1]` extracts only the final column (Target Vector y)."},{id:11,question:"What is the difference between `mat[0, :]` and `mat[0:1, :]` for a matrix with shape (5, 4)?",options:["They produce identical shapes and dimensions","`mat[0, :]` uses integer indexing and reduces dimension to shape (4,) [1D], while `mat[0:1, :]` uses slice notation and preserves 2D structure with shape (1, 4)","`mat[0:1, :]` extracts 2 rows instead of 1","`mat[0, :]` raises an IndexError"],correctAnswer:1,explanation:"Integer indexing drops that dimension (ndim becomes ndim - 1), producing a 1D vector of shape (4,). Using slice notation `0:1` keeps the axis, producing a 2D row matrix of shape (1, 4)."},{id:12,question:"How do you extract a 2x2 submatrix from rows 1 to 2 and columns 2 to 3 of `mat`?",options:["mat[1:3, 2:4]","mat[1:2, 2:3]","mat[[1, 2], [2, 3]]","mat[1..3, 2..4]"],correctAnswer:0,explanation:"To include rows 1 and 2, the slice range is `1:3` (stop index 3 is exclusive). To include columns 2 and 3, the slice range is `2:4`. Thus, `mat[1:3, 2:4]` extracts the 2x2 submatrix."},{id:13,question:"What does `mat[::2, ::2]` extract from a 2D matrix?",options:["Every alternating row and every alternating column (strided sub-grid)","The entire matrix twice","Only the first 2 rows and first 2 columns","The diagonal elements only"],correctAnswer:0,explanation:"The slice `::2` means start from 0 to the end with a step of 2. Applying `::2` across both rows and columns extracts elements at (even row, even col), subsampling the grid."},{id:14,question:"How do you crop a bounding box of an RGB image tensor `img` of shape (1080, 1920, 3) from y: 100 to 400 and x: 200 to 700?",options:["img[100:400, 200:700, :]","img[200:700, 100:400, :]","img[100:400, 200:700]","img.crop(100, 400, 200, 700)"],correctAnswer:0,explanation:"Images are structured as (Height/Y, Width/X, Channels). Slicing `img[100:400, 200:700, :]` crops the Y range (rows 100 to 399) and X range (columns 200 to 699) across all 3 color channels (:)."},{id:15,question:"What happens if you slice an array with indices larger than the array size, e.g., `arr = np.array([10, 20, 30]); arr[1:100]`?",options:["It raises IndexError: index out of bounds","NumPy safely clamps the slice to the available array length and returns `[20, 30]` without error","It fills missing cells with zeros up to index 100","It raises a ValueError"],correctAnswer:1,explanation:"Like standard Python list slicing, NumPy slice boundaries that exceed array dimensions do not raise IndexError; they are automatically clamped to the actual length of the array."},{id:16,question:"What happens if you access an out-of-bounds scalar index `arr = np.array([10, 20, 30]); print(arr[100])`?",options:["It returns None","It returns 0","It raises IndexError: index 100 is out of bounds for axis 0 with size 3","It automatically resizes the array"],correctAnswer:2,explanation:"Direct integer indexing with an invalid index strictly raises an `IndexError`. Only slice syntax (`start:stop`) gracefully clamps out-of-bounds boundaries."},{id:17,question:"How do you set all elements in the first column of a 2D matrix `mat` to zero in one line?",options:["mat[:, 0] = 0","mat[0, :] = 0","mat[:, 0].set(0)","np.zeros(mat[:, 0])"],correctAnswer:0,explanation:"`mat[:, 0] = 0` uses slice assignment and broadcasting to assign the scalar 0 to all row entries in column 0 in-place."},{id:18,question:"What does the Ellipsis `...` do in multi-dimensional slicing like `tensor[..., 0]`?",options:["It represents a syntax error","It expands to as many full-slice colons `:` as needed to match all preceding dimensions","It prints a debug message to the console","It selects only elements with odd indices"],correctAnswer:1,explanation:"The Ellipsis `...` is shorthand for multiple full `:` slices across all unspecified axes. For a 4D tensor `(Batch, Height, Width, Channels)`, `tensor[..., 0]` is equivalent to `tensor[:, :, :, 0]`."},{id:19,question:"How do you split a dataset of 1,000 samples into 800 training samples and 200 testing samples using slicing?",options:["X_train, X_test = X[:800, :], X[800:, :]","X_train, X_test = X[800:, :], X[:800, :]","X_train, X_test = X[:, :800], X[:, 800:]","X_train, X_test = X.split(800, 200)"],correctAnswer:0,explanation:"`X[:800, :]` extracts rows 0 to 799 (800 training samples), and `X[800:, :]` extracts rows 800 to 999 (200 testing samples)."},{id:20,question:"What is `arr[-4:-1]` on `arr = np.array([10, 20, 30, 40, 50, 60])`?",options:["`[30, 40, 50]`","`[20, 30, 40]`","`[30, 40, 50, 60]`","`[40, 50, 60]`"],correctAnswer:0,explanation:"Index -4 corresponds to 30 (len 6 - 4 = index 2). Index -1 corresponds to 60 (len 6 - 1 = index 5, exclusive). Thus, elements at indices 2, 3, 4 are selected: `[30, 40, 50]`."},{id:21,question:"When Susmita slices `marks[:: -1, :]`, what does NumPy do to the 2D marks matrix?",options:["Reverses the order of the columns while keeping row order intact","Reverses the order of the rows (top to bottom inverted) while keeping column order intact","Rotates the matrix by 90 degrees","Calculates the negative of all marks"],correctAnswer:1,explanation:"`marks[::-1, :]` applies a negative step of -1 to axis 0 (rows), which flips the vertical order of the rows from bottom to top while keeping column order untouched."},{id:22,question:"Can you assign a 1D vector to a slice of a 2D matrix, such as `mat[0, :] = np.array([1, 2, 3, 4])`?",options:["No, NumPy raises a ShapeMismatchError","Yes, provided the length of the vector matches the number of columns in `mat`","Only if `mat` is an integer array","Only if `mat` has shape (1, 4)"],correctAnswer:1,explanation:"Yes, NumPy allows broadcastable slice assignments. If `mat` has 4 columns, assigning a 4-element 1D array to `mat[0, :]` overwrites row 0 with those values in-place."},{id:23,question:"What is the shape of `arr[:, np.newaxis, :]` when `arr` has shape (10, 20)?",options:["(10, 20)","(10, 1, 20)","(1, 10, 20)","(10, 20, 1)"],correctAnswer:1,explanation:"Inserting `np.newaxis` at index position 1 expands the dimensionality by adding a singleton axis between axis 0 and axis 1, transforming shape (10, 20) into (10, 1, 20)."},{id:24,question:"Why is slicing inside a Python loop in a machine learning training epoch so fast in NumPy?",options:["Because slicing is an O(1) metadata view operation with no RAM allocation or memory duplication","Because NumPy automatically compresses tensors with gzip during iteration","Because Python disables garbage collection during slicing","Because slices are converted to C++ pointers and deleted immediately"],correctAnswer:0,explanation:"Creating slices simply computes new pointer offsets and strides without moving memory or allocating new heap buffers. This zero-copy property makes NumPy batch slicing extremely fast and scalable."},{id:25,question:"What is Sukanta Hui's golden recommendation when doing exploratory data transformations on slices of student marks?",options:["Always modify slices directly without checking views","Always call `.copy()` on the extracted slice if your subsequent transformations should NOT alter the original master dataset","Always convert the NumPy array to a Python dictionary before slicing","Never slice arrays with more than 10 elements"],correctAnswer:1,explanation:"Because NumPy slices are views, modifying a slice silently corrupts the master dataset. If you intend to clean or normalize an extracted sub-dataset independently, always use `.copy()`."}],y=[{id:"part1",fileName:"01_1d_and_2d_slicing_basics.py",title:"1. 1D & 2D Slicing Mechanics",badge:"1D & 2D Slicing",code:X,summary:"Demonstrates half-open start:stop:step slicing, row/column sub-matrices on student marks tables, and array reversals."},{id:"part2",fileName:"02_views_vs_copies_slicing_mutations.py",title:"2. Views vs Copies & In-Place Mutation Trap",badge:"Views vs Copies",code:L,summary:"Demonstrates how basic slices share memory (.base), why mutating slices corrupts parent data, and how to use .copy()."},{id:"part3",fileName:"03_ellipsis_and_axis_slicing.py",title:"3. Ellipsis (...) & Tensor Slicing",badge:"Ellipsis (...)",code:q,summary:"Uses Ellipsis (...) across 3D time-series and 4D image tensors to extract specific channels and timestamps with clean syntax."},{id:"part4",fileName:"04_ml_dataset_splitting_and_feature_target_extraction.py",title:"4. ML Dataset Splitting & X/y Extraction",badge:"ML Data Split",code:O,summary:"Extracts feature matrix X and target labels y with data[:, :-1] and data[:, -1], performing an 80/20 train/test split."}],V=[{student:"Debangshu",marks:[75,82,90,68]},{student:"Susmita",marks:[88,94,91,85]},{student:"Swadeep",marks:[62,70,74,60]},{student:"Tuhina",marks:[92,89,96,95]}],H=[{id:"full",label:"Full Matrix [:, :]",rStart:0,rEnd:4,cStart:0,cEnd:4,syntax:"mat[:, :]",shape:"(4, 4)",desc:"Selects all 4 students and all 4 subjects."},{id:"susmita",label:"Susmita Row [1:2, :]",rStart:1,rEnd:2,cStart:0,cEnd:4,syntax:"mat[1:2, :]",shape:"(1, 4)",desc:"Preserves 2D matrix shape for a single student row."},{id:"math_col",label:"Math Column [:, 2:3]",rStart:0,rEnd:4,cStart:2,cEnd:3,syntax:"mat[:, 2:3]",shape:"(4, 1)",desc:"2D column feature for Math across all students."},{id:"top_left_2x2",label:"Top-Left 2x2 Submatrix [0:2, 0:2]",rStart:0,rEnd:2,cStart:0,cEnd:2,syntax:"mat[0:2, 0:2]",shape:"(2, 2)",desc:"Debangshu & Susmita for Sub 1 & Sub 2."},{id:"bottom_right_2x2",label:"Bottom-Right 2x2 [2:4, 2:4]",rStart:2,rEnd:4,cStart:2,cEnd:4,syntax:"mat[2:4, 2:4]",shape:"(2, 2)",desc:"Swadeep & Tuhina for Sub 3 & Sub 4."}],Z=()=>{const[d,v]=l.useState("visual_grid"),[m,S]=l.useState("part1"),c=y.find(s=>s.id===m)||y[0],[a,x]=l.useState(0),[r,p]=l.useState(2),[n,h]=l.useState(0),[i,u]=l.useState(2),[o,f]=l.useState([[10,20,30],[40,50,60]]),[F,_]=l.useState([[10,20],[40,50]]),I=s=>{x(s.rStart),p(s.rEnd),h(s.cStart),u(s.cEnd)},w=Math.max(0,r-a),N=Math.max(0,i-n),T=w*N,E=(s,t)=>s>=a&&s<r&&t>=n&&t<i,D=s=>{const t=o.map(b=>[...b]);t[0][0]=s,f(t)},A=()=>{f([[10,20,30],[40,50,60]]),_([[10,20],[40,50]])};return e.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200",children:[e.jsx("header",{className:"border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"BCAC701B • Segment 9"}),e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30",children:"Module 1 • Topic 7"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3",children:[e.jsx("span",{children:"🔪 Indexing and Slicing Arrays"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700",children:"arr[start:stop:step] • mat[r, c] • X = data[:, :-1]"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Mastering multi-axis slicing, zero-copy views, feature/target matrix extraction, and image tensor cropping."})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:"inline-block text-xs font-mono px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-slate-400",children:["Mentor: ",e.jsx("strong",{className:"text-emerald-400",children:"Sukanta Hui"})," • Barrackpore"]})})]})})}),e.jsx("nav",{className:"bg-slate-950 border-b border-slate-800/80 sticky top-[73px] z-30 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex overflow-x-auto space-x-1 py-2 scrollbar-thin scrollbar-thumb-slate-700",children:[{id:"visual_grid",label:"📐 Interactive 2D Slicing Grid",icon:"🎛️"},{id:"views_vs_copies",label:"🧬 Slices are Views (Zero-Copy)",icon:"⚡"},{id:"ml_feature_split",label:"🤖 ML Feature / Target Split (X & y)",icon:"🎯"},{id:"strided_reversals",label:"🔁 Strided Slices & Array Reversal",icon:"⏳"}].map(s=>e.jsxs("button",{onClick:()=>v(s.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${d===s.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[e.jsx("span",{children:s.icon}),e.jsx("span",{children:s.label})]},s.id))})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[d==="visual_grid"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"🎛️ Interactive 2D Matrix Slicing Visualizer"})}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Adjust the slice boundaries below or pick a preset to see exactly which cells in the 4×4 student marks matrix are selected in real time."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:H.map(s=>e.jsx("button",{onClick:()=>I(s),className:"px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-700 hover:border-emerald-500 hover:text-emerald-300 transition-all",children:s.label},s.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Row Start (",e.jsxs("code",{className:"text-emerald-400",children:["r_start = ",a]}),"):"]}),e.jsx("input",{type:"range",min:"0",max:"4",value:a,onChange:s=>{const t=parseInt(s.target.value,10);x(t),t>=r&&p(Math.min(4,t+1))},className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Row Stop (",e.jsxs("code",{className:"text-emerald-400",children:["r_stop = ",r]}),"):"]}),e.jsx("input",{type:"range",min:"0",max:"4",value:r,onChange:s=>{const t=parseInt(s.target.value,10);p(t),t<=a&&x(Math.max(0,t-1))},className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Col Start (",e.jsxs("code",{className:"text-blue-400",children:["c_start = ",n]}),"):"]}),e.jsx("input",{type:"range",min:"0",max:"4",value:n,onChange:s=>{const t=parseInt(s.target.value,10);h(t),t>=i&&u(Math.min(4,t+1))},className:"w-full accent-blue-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Col Stop (",e.jsxs("code",{className:"text-blue-400",children:["c_stop = ",i]}),"):"]}),e.jsx("input",{type:"range",min:"0",max:"4",value:i,onChange:s=>{const t=parseInt(s.target.value,10);u(t),t<=n&&h(Math.max(0,t-1))},className:"w-full accent-blue-500"})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"px-3 py-1 rounded-md text-xs font-bold border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-mono",children:["Slice: marks[",a,":",r,", ",n,":",i,"]"]}),e.jsxs("span",{className:"text-xs text-slate-300",children:["Resulting Shape: ",e.jsxs("strong",{className:"text-white",children:["(",w,", ",N,")"]})," • Elements:"," ",e.jsx("strong",{className:"text-emerald-400",children:T})]})]}),e.jsxs("code",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded border border-slate-800",children:["submatrix = marks[",a,":",r,", ",n,":",i,"]"]})]}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-6 overflow-x-auto",children:e.jsxs("div",{className:"min-w-[500px] flex flex-col gap-3",children:[e.jsx("div",{className:"flex gap-3 pl-28",children:["Sub 1 (ML)","Sub 2 (Python)","Sub 3 (Math)","Sub 4 (Stats)"].map((s,t)=>e.jsxs("div",{className:`flex-1 text-center text-xs font-mono py-1 rounded border ${t>=n&&t<i?"bg-blue-500/20 text-blue-300 border-blue-500/40 font-bold":"text-slate-500 border-transparent"}`,children:["col ",t,": ",s]},t))}),V.map((s,t)=>e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("div",{className:`w-28 text-xs font-mono py-2 px-2 rounded border text-right truncate ${t>=a&&t<r?"bg-emerald-500/20 text-emerald-300 border-emerald-500/40 font-bold":"text-slate-500 border-transparent"}`,children:["r",t,": ",s.student]}),e.jsx("div",{className:"flex-1 flex gap-3",children:s.marks.map((b,g)=>{const C=E(t,g);return e.jsxs("div",{className:`flex-1 h-12 rounded-lg flex flex-col items-center justify-center font-mono text-sm font-bold transition-all shadow ${C?"bg-gradient-to-br from-emerald-600/30 to-blue-600/30 border-2 border-emerald-400 text-white scale-105 shadow-emerald-950/50":"bg-slate-900 border border-slate-800 text-slate-500 opacity-60"}`,children:[e.jsx("span",{children:b}),e.jsxs("span",{className:"text-[9px] text-slate-400 font-normal",children:["[",t,",",g,"]"]})]},g)})})]},t))]})})]})}),d==="views_vs_copies"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🧬 Critical NumPy Concept: Slices are Zero-Copy Views"})}),e.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:["Unlike Python lists where slicing creates an independent copy, NumPy slices return a ",e.jsx("strong",{children:"VIEW"})," that points to the exact same RAM buffer."]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-bold text-emerald-400 font-mono",children:"1. Slice View: sub_view = grid[0:2, 0:2]"}),e.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30",children:"sub_view.base is grid: True"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Click a value to mutate ",e.jsx("code",{className:"text-emerald-300",children:"sub_view[0, 0]"})," and watch the parent ",e.jsx("code",{className:"text-white",children:"grid[0, 0]"})," change simultaneously!"]}),e.jsxs("div",{className:"flex gap-2",children:[[999,500,10].map(s=>e.jsxs("button",{onClick:()=>D(s),className:"px-3 py-1.5 bg-slate-900 border border-emerald-500/50 text-emerald-300 rounded text-xs font-mono hover:bg-emerald-500 hover:text-slate-950 font-bold transition-all",children:["Set sub_view[0, 0] = ",s]},s)),e.jsx("button",{onClick:A,className:"px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-400 rounded text-xs font-mono hover:text-white",children:"Reset"})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:[e.jsx("p",{className:"text-slate-500 font-semibold mb-1",children:"Parent Master Grid in RAM:"}),e.jsxs("p",{className:"text-emerald-400 font-bold",children:["Row 0: [",o[0][0],", ",o[0][1],", ",o[0][2],"]"]}),e.jsxs("p",{className:"text-slate-400",children:["Row 1: [",o[1][0],", ",o[1][1],", ",o[1][2],"]"]})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-blue-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-bold text-blue-400 font-mono",children:"2. Safe Copy: safe_copy = grid[0:2, 0:2].copy()"}),e.jsx("span",{className:"text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30",children:"safe_copy.base is grid: False"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Explicitly calling ",e.jsx("code",{className:"text-blue-300",children:".copy()"})," allocates a brand new memory block. Mutating it never harms the original master dataset."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-2",children:[e.jsxs("p",{className:"text-slate-400",children:["safe_copy[0, 1] = 888 ",e.jsx("span",{className:"text-slate-500",children:"# Modifies copy only"})]}),e.jsxs("p",{className:"text-emerald-400",children:["grid[0, 1] remains: 20 ",e.jsx("span",{className:"text-slate-500",children:"# Untouched and safe!"})]})]})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left text-slate-300 border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-400 uppercase text-[10px] border-b border-slate-800",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Language / Operation"}),e.jsx("th",{className:"p-3",children:"Memory Structure"}),e.jsx("th",{className:"p-3",children:"Mutation Effect"}),e.jsx("th",{className:"p-3",children:"Speed & Overhead"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/50 font-mono",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-white font-bold",children:"Python List Slicing (list[1:3])"}),e.jsx("td",{className:"p-3 text-blue-400",children:"Shallow Copy"}),e.jsx("td",{className:"p-3 text-slate-400",children:"Independent list created"}),e.jsx("td",{className:"p-3 text-slate-400",children:"O(K) memory allocation"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"NumPy Array Slicing (arr[1:3])"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Zero-Copy View"}),e.jsx("td",{className:"p-3 text-rose-400 font-bold",children:"Mutates original array!"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Instant O(1) stride update"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 text-purple-400 font-bold",children:"NumPy Explicit Copy (arr[1:3].copy())"}),e.jsx("td",{className:"p-3 text-purple-400",children:"Deep Memory Copy"}),e.jsx("td",{className:"p-3 text-emerald-400 font-bold",children:"Safely isolated"}),e.jsx("td",{className:"p-3 text-slate-400",children:"O(K) buffer allocation"})]})]})]})})]})}),d==="ml_feature_split"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🤖 The Standard ML Dataset Splitting Pattern: X and y"})}),e.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:["In every Machine Learning workflow, 2D tabular matrices are split into input feature matrix ",e.jsx("code",{className:"text-blue-400",children:"X"})," and target label vector ",e.jsx("code",{className:"text-emerald-400",children:"y"}),"."]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6",children:[e.jsx("div",{className:"text-xs uppercase tracking-widest text-slate-400 font-semibold",children:"Original Tabular Dataset: dataset.shape = (5, 4)"}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-4 gap-4",children:[e.jsxs("div",{className:"lg:col-span-3 bg-blue-950/20 border-2 border-dashed border-blue-500/50 rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-bold text-blue-400 font-mono",children:"X = dataset[:, :-1]"}),e.jsx("span",{className:"text-xs font-mono bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30",children:"Feature Matrix X: shape (5, 3) [2D]"})]}),e.jsxs("div",{className:"space-y-1 font-mono text-xs",children:[e.jsxs("div",{className:"text-slate-500 flex justify-between px-2 border-b border-slate-800 pb-1",children:[e.jsx("span",{children:"Age"}),e.jsx("span",{children:"Study Hours"}),e.jsx("span",{children:"Attendance %"})]}),[[21,5.5,92],[22,2,65],[20,8,98],[23,3.5,78],[21,6,88]].map((s,t)=>e.jsxs("div",{className:"flex justify-between px-2 py-1 bg-slate-900/60 rounded text-slate-200",children:[e.jsxs("span",{children:[s[0]," yrs"]}),e.jsxs("span",{children:[s[1]," hrs"]}),e.jsxs("span",{children:[s[2],"%"]})]},t))]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border-2 border-dashed border-emerald-500/50 rounded-xl p-4 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-bold text-emerald-400 font-mono",children:"y = dataset[:, -1]"}),e.jsx("span",{className:"text-xs font-mono bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30",children:"Target y: (5,) [1D]"})]}),e.jsxs("div",{className:"space-y-1 font-mono text-xs",children:[e.jsx("div",{className:"text-slate-500 text-center border-b border-slate-800 pb-1",children:"Pass / Fail"}),[1,0,1,0,1].map((s,t)=>e.jsx("div",{className:`text-center py-1 rounded font-bold ${s===1?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/30":"bg-rose-500/20 text-rose-300 border border-rose-500/30"}`,children:s===1?"1 (Pass)":"0 (Fail)"},t))]})]})]}),e.jsxs("div",{className:"bg-slate-900 p-4 rounded-lg font-mono text-xs text-slate-300 border border-slate-800",children:[e.jsx("p",{className:"text-slate-500",children:"# Standard Scikit-learn Model Training Flow"}),e.jsxs("p",{className:"text-blue-400",children:["X = dataset[:, :-1] ",e.jsx("span",{className:"text-slate-500",children:"# 2D feature matrix (N, 3)"})]}),e.jsxs("p",{className:"text-emerald-400",children:["y = dataset[:, -1]  ",e.jsx("span",{className:"text-slate-500",children:"# 1D target labels (N,)"})]}),e.jsx("p",{className:"pt-2 text-white",children:"model = LogisticRegression()"}),e.jsxs("p",{className:"text-emerald-300",children:["model.fit(X, y) ",e.jsx("span",{className:"text-slate-500",children:"# ✅ Fits perfectly without shape mismatch errors!"})]})]})]})]})}),d==="strided_reversals"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"⏳ Advanced Step Slicing, Reversals, and Ellipsis"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Explore powerful strided indexing, negative step flips, and multi-dimensional tensor ellipsis operators."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-400 font-mono",children:"arr[::-1] (Array Reverse)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Reverses array elements in O(1) time by flipping the stride multiplier to -1 without reallocating elements."}),e.jsx("div",{className:"bg-slate-950 p-2.5 rounded font-mono text-[11px] text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["arr = np.array([10, 20, 30, 40])",e.jsx("br",{}),"rev = arr[::-1]",e.jsx("br",{}),"# Output: [40, 30, 20, 10]"]})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-blue-400 font-mono",children:"mat[::2, ::2] (Sub-Grid)"}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Subsamples every second row and column. Widely used for downsampling feature maps or grid coordinates."}),e.jsx("div",{className:"bg-slate-950 p-2.5 rounded font-mono text-[11px] text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["# Subsamples 2x downscaled grid",e.jsx("br",{}),"small_grid = mat[::2, ::2]"]})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-purple-400 font-mono",children:"tensor[..., 0] (Ellipsis)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["The Ellipsis ",e.jsx("code",{className:"text-purple-300",children:"..."})," expands across all preceding axes, such as extracting the Red channel from a 4D image batch."]}),e.jsx("div",{className:"bg-slate-950 p-2.5 rounded font-mono text-[11px] text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["# tensor (Batch, H, W, C)",e.jsx("br",{}),"red_channel = tensor[..., 0]"]})})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect 1D/2D slicing, views vs copies, ellipsis indexing, or ML dataset splits"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:y.map(s=>e.jsxs("button",{onClick:()=>S(s.id),className:`p-3 rounded-xl border text-left transition-all ${m===s.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${m===s.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:s.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:s.title})]},s.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:c.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:c.summary})]})}),e.jsx(P,{fileModule:c.code,title:c.fileName})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Indexing & Slicing Pitfalls & How to Avoid Them"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"1. Forgetting that Slices are Views"}),e.jsxs("p",{children:["Modifying a slice directly changes the original array. If you need an isolated test set or feature slice, always append ",e.jsx("code",{className:"text-emerald-400",children:".copy()"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"2. Dimension Reduction with Integer Indexing"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"mat[0, :]"})," returns shape ",e.jsx("code",{className:"text-white",children:"(N,)"})," (1D vector). If Scikit-learn requires a 2D row matrix, write ",e.jsx("code",{className:"text-blue-300",children:"mat[0:1, :]"})," to preserve shape ",e.jsx("code",{className:"text-white",children:"(1, N)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"3. Exclusive Stop Index Off-by-One Error"}),e.jsxs("p",{children:["Remember that ",e.jsx("code",{className:"text-white",children:"arr[0:5]"})," only gives 5 items (indices 0, 1, 2, 3, 4). Index 5 is never included!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"4. Scalar Indexing IndexError vs Slicing Graceful Clamping"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"arr[100]"})," raises ",e.jsx("code",{className:"text-rose-300",children:"IndexError"})," if the array has only 10 elements, but ",e.jsx("code",{className:"text-white",children:"arr[0:100]"})," safely clamps and returns all 10 elements."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💬 Barrackpore Classroom Q&A"})}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono",children:"Coder & AccoTax Live Session"})]}),e.jsx("div",{className:"space-y-3",children:[{student:"Debangshu",avatar:"👨‍💻",question:"Sir, why did my original master dataset change when I only normalized a small slice `sub_train = X[:100]`?",answer:"Debangshu, that is the classic 'Slices are Views' trap! Because NumPy arrays are contiguous C-buffers, slicing creates a view sharing the same RAM addresses. To normalize safely without corrupting `X`, always do `sub_train = X[:100].copy()`!"},{student:"Swadeep",avatar:"👨‍🎓",question:"What is the fastest way to extract the test labels from our student exam dataset with 10 features and 1 label at the end?",answer:"Swadeep, simply use `y = dataset[:, -1]`! The colon `:` grabs every student row, and `-1` grabs the last column as a 1D target vector in O(1) time."},{student:"Susmita",avatar:"👩‍💻",question:"How do I extract a 50x50 face region from a 1080x1920 color photograph in NumPy?",answer:"Susmita, 3D images have axes (Height, Width, Channels). Slicing `face = photo[ymin:ymax, xmin:xmax, :]` crops the rectangle across all 3 RGB color channels instantly!"}].map((s,t)=>e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300",children:[e.jsx("span",{children:s.avatar}),e.jsxs("span",{children:[s.student," asks:"]})]}),e.jsxs("p",{className:"text-xs text-slate-300 italic pl-6",children:['"',s.question,'"']}),e.jsxs("div",{className:"flex items-start gap-2 pt-2 border-t border-slate-800 text-xs text-emerald-300",children:[e.jsx("span",{className:"font-bold text-emerald-400 whitespace-nowrap",children:"Sukanta Sir:"}),e.jsx("p",{className:"text-slate-300",children:s.answer})]})]},t))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"❓ Frequently Asked Questions & Practice Problems"})}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[j.length," Questions & Answers"]})]}),e.jsx(M,{questions:j})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📄 Printable Topic Summary Note"})}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700",children:"topic7_note.txt"})]}),e.jsx(k,{text:B,fileName:"topic7_note.txt"})]}),e.jsx(R,{})]})]})};export{Z as default};
