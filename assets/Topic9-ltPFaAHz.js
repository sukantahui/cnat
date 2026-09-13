import{b as t,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as I}from"./PythonFileLoader-DUNJ9gwR.js";import{F as C}from"./FAQTemplate-D_90hN4m.js";import{P as T}from"./PlainTextPrint-yt10TRX1.js";import{T as P}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const k=`"""\r
================================================================================\r
Topic 9 - Script 01: Integer Array (Fancy) Indexing Basics & Copy Proof\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Passing arrays/lists of integer indices: arr[[idx1, idx2, idx3]]\r
- Arbitrary ordering, repetitions, and negative index wrapping\r
- Golden NumPy Rule: Fancy Indexing ALWAYS creates a COPY (never a view)\r
- Verifying memory independence via arr.base is None\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_fancy_basics():\r
    print("=" * 65)\r
    print("1. 1D INTEGER ARRAY INDEXING")\r
    print("=" * 65)\r
\r
    arr = np.array([10, 20, 30, 40, 50, 60, 70, 80])\r
    print("Original Vector:", arr)\r
\r
    # Select specific indices in arbitrary order\r
    indices = [0, 4, 2, 7]\r
    selected = arr[indices]\r
    print(f"arr[{indices}] ->", selected)\r
\r
    # Duplicated indices\r
    dup_indices = [1, 1, 3, 3]\r
    print(f"arr[{dup_indices}] ->", arr[dup_indices])\r
\r
    print("\\n" + "=" * 65)\r
    print("2. PROOF THAT FANCY INDEXING CREATES A NEW COPY (NOT A VIEW)")\r
    print("=" * 65)\r
\r
    extracted_copy = arr[[0, 1, 2]]\r
    print("extracted_copy.base is None:", extracted_copy.base is None, "(Allocated independent RAM!)")\r
\r
    # Mutating extracted copy\r
    extracted_copy[0] = 9999\r
    print("Mutated copy      :", extracted_copy)\r
    print("Original Vector   :", arr, " (Safe & Unaltered!)")\r
\r
if __name__ == "__main__":\r
    demonstrate_fancy_basics()\r
`,E=`"""\r
================================================================================\r
Topic 9 - Script 02: Paired Coordinates vs Rectangular Subgrids (np.ix_)\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- The Paired Coordinates Rule: arr[[r1, r2], [c1, c2]] extracts (r1, c1) and (r2, c2)\r
- Common beginner pitfall: expecting a 2x2 matrix instead of a 1D vector of pairs\r
- Using np.ix_(rows, cols) to properly extract rectangular sub-matrices\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_paired_vs_mesh():\r
    print("=" * 65)\r
    print("1. THE PAIRED COORDINATES BEHAVIOR (ZIP MATCHING)")\r
    print("=" * 65)\r
\r
    # 4x4 matrix\r
    matrix = np.array([\r
        [10, 11, 12, 13],\r
        [20, 21, 22, 23],\r
        [30, 31, 32, 33],\r
        [40, 41, 42, 43]\r
    ])\r
    print("Master Matrix (4x4):\\n", matrix)\r
\r
    # When passing two index arrays [0, 2] and [1, 3]:\r
    # NumPy pairs them as points: (row 0, col 1) -> 11, and (row 2, col 3) -> 33\r
    paired_result = matrix[[0, 2], [1, 3]]\r
    print("\\nmatrix[[0, 2], [1, 3]]:", paired_result)\r
    print("Notice: Shape is (2,) because it extracted coordinates (0,1) and (2,3)!")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. RECTANGULAR SUB-MATRIX EXTRACTION WITH np.ix_()")\r
    print("=" * 65)\r
    \r
    # What if Debangshu wants the full 2x2 sub-matrix at rows (0, 2) and cols (1, 3)?\r
    # We use np.ix_() to create an open 2D mesh!\r
    sub_matrix = matrix[np.ix_([0, 2], [1, 3])]\r
    print("matrix[np.ix_([0, 2], [1, 3])]:\\n", sub_matrix)\r
    print("Shape:", sub_matrix.shape, "<- Proper 2x2 rectangular sub-matrix!")\r
\r
if __name__ == "__main__":\r
    demonstrate_paired_vs_mesh()\r
`,X=`"""\r
================================================================================\r
Topic 9 - Script 03: In-Place Modification & Repeated Index Buffering (np.add.at)\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Mutating original arrays via fancy assignment: arr[indices] = new_values\r
- The Repeated Index Race Condition: arr[[1, 1, 1]] += 1 only increments ONCE\r
- Using np.add.at(arr, indices, values) for unbuffered histogram accumulation\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_fancy_mutations():\r
    print("=" * 65)\r
    print("1. DIRECT IN-PLACE FANCY ASSIGNMENT")\r
    print("=" * 65)\r
\r
    arr = np.zeros(6, dtype=int)\r
    print("Initial Array:", arr)\r
\r
    # Overwrite indices 0, 2, 4 with 100, 200, 300\r
    arr[[0, 2, 4]] = [100, 200, 300]\r
    print("After arr[[0, 2, 4]] = [100, 200, 300]:", arr)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. THE REPEATED INDEX RACE CONDITION TRAP")\r
    print("=" * 65)\r
    \r
    counts = np.zeros(5, dtype=int)\r
    # Sachin tries to increment index 1 three times:\r
    counts[[1, 1, 1]] += 1\r
    print("counts[[1, 1, 1]] += 1 Result:", counts)\r
    print("TRAP EXPLANATION: Standard Python buffered evaluation reads counts[1]=0 once,")\r
    print("adds 1, and writes 1 back three times. Final value is 1, NOT 3!")\r
\r
    print("\\n" + "=" * 65)\r
    print("3. THE FIX: np.add.at() FOR UNBUFFERED ACCUMULATION")\r
    print("=" * 65)\r
    \r
    correct_counts = np.zeros(5, dtype=int)\r
    np.add.at(correct_counts, [1, 1, 1, 3], 1)\r
    print("np.add.at(correct_counts, [1, 1, 1, 3], 1) Result:", correct_counts)\r
    print("Index 1 was correctly incremented 3 times -> value is 3!")\r
\r
if __name__ == "__main__":\r
    demonstrate_fancy_mutations()\r
`,D=`"""\r
================================================================================\r
Topic 9 - Script 04: Stochastic Mini-Batch Sampling & Dataset Shuffling\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Stochastic Gradient Descent (SGD) mini-batch extraction using fancy indexing\r
- Generating random index permutations with np.random.permutation(n)\r
- Shuffling feature matrix X and target labels y in perfect synchrony\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_sgd_sampling():\r
    print("=" * 65)\r
    print("ML PIPELINE: Stochastic Mini-Batch Extraction & Shuffling")\r
    print("=" * 65)\r
\r
    np.random.seed(42)\r
    n_samples = 10\r
    n_features = 3\r
\r
    # Generate student feature dataset X and target labels y\r
    X = np.random.randint(50, 100, size=(n_samples, n_features))\r
    y = np.array([0, 1, 1, 0, 1, 0, 1, 1, 0, 0])\r
\r
    print("Master Feature Matrix X (10 samples):\\n", X)\r
    print("Master Labels y:", y)\r
\r
    print("\\n" + "=" * 65)\r
    print("1. SHUFFLING X AND y SYNCHRONOUSLY")\r
    print("=" * 65)\r
    \r
    # Generate random permutation of indices 0 to 9\r
    shuffled_indices = np.random.permutation(n_samples)\r
    print("Shuffled Index Order:", shuffled_indices)\r
\r
    # Apply permutation to both X and y simultaneously\r
    X_shuffled = X[shuffled_indices]\r
    y_shuffled = y[shuffled_indices]\r
\r
    print("\\nShuffled X (Top 3 rows):\\n", X_shuffled[:3])\r
    print("Shuffled y (Top 3 items):", y_shuffled[:3])\r
\r
    print("\\n" + "=" * 65)\r
    print("2. EXTRACTING RANDOM MINI-BATCH (BATCH_SIZE = 4)")\r
    print("=" * 65)\r
    \r
    batch_size = 4\r
    batch_indices = np.random.choice(n_samples, size=batch_size, replace=False)\r
    print("Sampled Batch Indices:", batch_indices)\r
\r
    X_batch = X[batch_indices]\r
    y_batch = y[batch_indices]\r
\r
    print(f"X_batch Shape {X_batch.shape}:\\n", X_batch)\r
    print(f"y_batch Shape {y_batch.shape}:", y_batch)\r
\r
if __name__ == "__main__":\r
    demonstrate_sgd_sampling()\r
`,R=`========================================================\r
NUMPY ESSENTIALS — TOPIC 9: FANCY INDEXING (INTEGER ARRAYS)\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9 • Module 1\r
========================================================\r
\r
1. WHAT IS FANCY INDEXING?\r
---------------------------\r
Fancy indexing means passing an array or list of integer indices to\r
access or modify multiple non-sequential elements simultaneously.\r
\r
2. 1D FANCY INDEXING:\r
----------------------\r
  arr = np.array([10, 20, 30, 40, 50, 60])\r
  indices = [1, 4, 2]\r
  selected = arr[indices]  # array([20, 50, 30])\r
  *Rule: The output array inherits the shape of the index array!\r
  arr[np.array([[0, 1], [2, 3]])] -> returns a (2, 2) array!\r
\r
3. 2D FANCY INDEXING & COORDINATE PAIRING:\r
-------------------------------------------\r
1. Selecting Specific Rows:\r
   mat[[0, 2, 3]]       -> Extracts rows 0, 2, and 3\r
\r
2. Element-Wise Coordinate Pairing:\r
   mat[[0, 2], [1, 3]]  -> Extracts elements at (0, 1) and (2, 3)\r
   *It does NOT return a 2x2 grid!\r
\r
3. Rectangular Subgrid Selection (np.ix_):\r
   mat[np.ix_([0, 2], [1, 3])] -> Returns a 2x2 submatrix\r
\r
4. Feature Column Selection:\r
   X[:, [0, 2, 4]]      -> All rows, but only features 0, 2, and 4\r
\r
4. CRITICAL RULE: FANCY INDEXING ALWAYS RETURNS A COPY!\r
--------------------------------------------------------\r
  - Slicing (arr[1:4])       -> Zero-copy VIEW (shares RAM)\r
  - Fancy Indexing (arr[[1, 3]]) -> ALWAYS allocates a new COPY in RAM!\r
  - Check: arr[[0, 1]].base is None (Owns its own memory buffer)\r
\r
5. IN-PLACE ASSIGNMENT & REPEATED INDEX TRAP:\r
----------------------------------------------\r
  arr[[1, 3]] = 999     # Updates elements 1 and 3 in-place\r
  arr[[0, 0]] += 1      # ⚠️ TRAP: Only increments once!\r
  # To accumulate repeated indices correctly, use:\r
  np.add.at(arr, [0, 0], 1)  # Increments arr[0] twice!\r
\r
6. MACHINE LEARNING APPLICATIONS:\r
----------------------------------\r
1. Mini-Batch Sampling for SGD:\r
   batch_idx = np.random.choice(len(X), size=32, replace=False)\r
   X_batch, y_batch = X[batch_idx], y[batch_idx]\r
\r
2. Dataset Shuffling:\r
   perm = np.random.permutation(len(X))\r
   X_shuffled, y_shuffled = X[perm], y[perm]\r
\r
3. Extracting True Class Logits (Cross-Entropy Loss):\r
   loss_probs = probs[np.arange(batch_size), true_labels]\r
\r
4. Selecting Important Features:\r
   X_filtered = X[:, top_k_feature_indices]\r
\r
7. QUICK REVISION CHECKLIST:\r
-----------------------------\r
  □ Pass lists/arrays of integers to index non-contiguous items\r
  □ Result shape matches the index array's shape\r
  □ Paired indices arr[[r1, r2], [c1, c2]] extract coordinates (r1,c1), (r2,c2)\r
  □ Use np.ix_() or [rows][:, cols] to extract 2D cross-product grids\r
  □ Fancy indexing creates a COPY (modifying it won't affect original)\r
  □ In-place assignment arr[idx] = val mutates original array\r
  □ Essential for ML mini-batches, shuffling, and feature subsets\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,f=[{id:1,question:"What is Fancy Indexing in NumPy?",options:["Passing arrays or lists of integer indices to access or modify multiple elements at arbitrary positions simultaneously","Formatting arrays with custom CSS colors and fonts","Indexing arrays using floating point decimals","Using complex numbers to access imaginary dimensions"],correctAnswer:0,explanation:"Fancy indexing is the term for indexing NumPy arrays using integer arrays, Python lists, or tuples of indices. It allows you to select arbitrary subsets of elements in any desired order and repetition."},{id:2,question:"What is the critical memory difference between standard slicing and fancy indexing?",options:["Slicing returns a zero-copy VIEW, while fancy indexing ALWAYS creates and returns a brand-new COPY in memory","Fancy indexing returns a VIEW, while slicing returns a COPY","Both slicing and fancy indexing always create deep copies","Both slicing and fancy indexing always return zero-copy views"],correctAnswer:0,explanation:"Standard slicing (e.g. `arr[1:4]`) creates a zero-copy view sharing the original memory buffer. Fancy indexing (e.g. `arr[[1, 3, 5]]`) ALWAYS allocates a new independent array in RAM (so `result.base` is `None`)."},{id:3,question:"What determines the shape of the array returned by fancy indexing?",options:["The shape of the index array, NOT the shape of the indexed array","The original shape of the array being indexed","It is always a 1D vector regardless of the index shape","It always matches the total size of the original array"],correctAnswer:0,explanation:"In NumPy fancy indexing, the output array reflects the exact shape and dimensionality of the integer index array. For example, indexing a 1D array of 10 items with a (2, 2) index array `arr[np.array([[0, 1], [2, 3]])]` yields a 2D array of shape (2, 2)."},{id:4,question:"What does `mat[[0, 2], [1, 3]]` return on a 4x4 matrix `mat`?",options:["A 1D array of 2 elements: `[mat[0, 1], mat[2, 3]]` (paired coordinates)","A 2x2 rectangular submatrix containing rows 0,2 and cols 1,3","A 4x4 boolean mask","An IndexError"],correctAnswer:0,explanation:"When you pass two 1D integer arrays of equal length to a 2D matrix, NumPy pairs them up coordinate-by-coordinate: element 1 is `(0, 1)` and element 2 is `(2, 3)`. The result is a 1D array of length 2, NOT a 2x2 grid!"},{id:5,question:"How do you extract a full 2x2 rectangular submatrix for rows [0, 2] and columns [1, 3] using fancy indexing?",options:["`mat[np.ix_([0, 2], [1, 3])]` or `mat[[0, 2]][:, [1, 3]]`","`mat[[0, 2], [1, 3]]`","`mat[[0, 2] * [1, 3]]`","`mat.grid([0, 2], [1, 3])`"],correctAnswer:0,explanation:"`np.ix_([0, 2], [1, 3])` constructs an open 2D mesh of indices that selects the Cartesian product / cross-grid of rows and columns, correctly returning a 2x2 rectangular submatrix."},{id:6,question:"How do you select specific feature columns 0, 2, and 4 from a 2D dataset matrix `X`?",options:["X[:, [0, 2, 4]]","X[[0, 2, 4], :]","X[[0, 2, 4]]","X.columns([0, 2, 4])"],correctAnswer:0,explanation:"`X[:, [0, 2, 4]]` uses a colon `:` for axis 0 (keeping all rows/samples) and the integer list `[0, 2, 4]` for axis 1 to select only features at column indices 0, 2, and 4."},{id:7,question:"If `sub = arr[[1, 2]]` and you execute `sub[0] = 999`, what happens to `arr[1]`?",options:["It remains completely unchanged because `sub` is an independent COPY","It changes to 999","It raises a ReadOnlyError","The entire array is reset to 0"],correctAnswer:0,explanation:"Because fancy indexing creates an independent copy, mutating `sub` has zero effect on the original `arr`. To verify this, check `sub.base is None`."},{id:8,question:"Does direct in-place fancy index assignment like `arr[[0, 3]] = 999` mutate the original array?",options:["Yes, in-place fancy index assignment modifies elements 0 and 3 in the original array","No, it creates a copy and discards the assignment","It raises a SyntaxError","Only if `arr` is 2-dimensional"],correctAnswer:0,explanation:"When fancy indexing appears on the left side of an assignment operator (`arr[indices] = values`), NumPy directly modifies the target elements in-place within the original array buffer."},{id:9,question:"What happens if you execute `arr = np.zeros(5); arr[[0, 0, 0]] += 1`?",options:["`arr[0]` becomes 1 (incremented only once due to buffered assignment)","`arr[0]` becomes 3 (incremented 3 times)","NumPy raises a DuplicateIndexError","`arr[0]` becomes 0"],correctAnswer:0,explanation:"This is a famous NumPy trap! In `arr[idx] += 1`, Python extracts `arr[idx]` into a temporary buffer, increments it, and writes it back once. Since index 0 is extracted as 0, adding 1 and writing it back results in 1, not 3!"},{id:10,question:"Which NumPy ufunc method correctly performs repeated in-place additions at duplicate indices?",options:["np.add.at(arr, [0, 0, 0], 1)","np.accumulate(arr, [0, 0, 0])","arr.sum_at([0, 0, 0], 1)","np.repeat_add(arr, [0, 0, 0])"],correctAnswer:0,explanation:"`np.add.at(arr, indices, values)` performs unbuffered in-place addition. It increments the target index every time it appears, so `np.add.at(arr, [0, 0, 0], 1)` correctly increments `arr[0]` by 3."},{id:11,question:"How do you randomly sample a mini-batch of 32 samples without replacement from a dataset `X` of 1000 samples for Stochastic Gradient Descent (SGD)?",options:["batch_idx = np.random.choice(len(X), size=32, replace=False); X_batch = X[batch_idx]","X_batch = X[:32]","X_batch = np.sample(X, 32)","X_batch = X[32]"],correctAnswer:0,explanation:"`np.random.choice(len(X), size=32, replace=False)` generates 32 unique random integer indices. Passing `X[batch_idx]` uses fancy indexing to extract those 32 rows as the training mini-batch."},{id:12,question:"How do you perform synchronized dataset shuffling of feature matrix `X` and label vector `y`?",options:["perm = np.random.permutation(len(X)); X = X[perm]; y = y[perm]","X = np.shuffle(X); y = np.shuffle(y)","X = X[::-1]; y = y[::-1]","X, y = np.random.shuffle_pair(X, y)"],correctAnswer:0,explanation:"`np.random.permutation(len(X))` generates a random permutation of row indices `0` to `len(X)-1`. Applying this identical permutation array to both `X[perm]` and `y[perm]` guarantees that each sample's features remain strictly aligned with its correct label."},{id:13,question:"In neural network cross-entropy loss calculation, how do you extract the predicted probability for the true class of each sample in a batch of size 4?",options:["true_probs = predicted_probs[np.arange(4), true_labels]","true_probs = predicted_probs[:, true_labels]","true_probs = predicted_probs[true_labels]","true_probs = np.extract(predicted_probs, true_labels)"],correctAnswer:0,explanation:"`np.arange(4)` provides the sample row coordinates `[0, 1, 2, 3]`, and `true_labels` provides the target column coordinates. `predicted_probs[np.arange(4), true_labels]` extracts the predicted probability assigned to the ground-truth class for every sample in the batch."},{id:14,question:"How do you extract the indices that would sort an array `scores` in descending order?",options:["sorted_indices = np.argsort(scores)[::-1]","sorted_indices = np.sort_indices(scores, reverse=True)","sorted_indices = scores.sort_keys()","sorted_indices = np.reverse_sort(scores)"],correctAnswer:0,explanation:"`np.argsort(scores)` returns the integer indices that sort the array in ascending order. Appending `[::-1]` reverses these indices, giving descending order indices ready for fancy indexing: `top_scores = scores[sorted_indices]`."},{id:15,question:"Can negative integer indices be used inside a fancy indexing list?",options:["Yes, negative numbers count from the end of the array (e.g. `arr[[-1, -2]]` extracts the last and second-to-last elements)","No, negative numbers always raise a ValueError in fancy indexing","Only if the array dtype is signed integer","Negative indices invert the sign of the numbers"],correctAnswer:0,explanation:"Just like standard Python indexing, negative indices in fancy indexing count backwards from the end of the array. `arr[[-1, -2]]` extracts the last and second-to-last elements."},{id:16,question:"What error occurs if an index in a fancy indexing list exceeds array bounds, e.g. `arr = np.array([10, 20]); arr[[5]]`?",options:["IndexError: index 5 is out of bounds for axis 0 with size 2","NumPy returns None","NumPy inserts 0 at index 5","ValueError: size mismatch"],correctAnswer:0,explanation:"Fancy indexing does NOT clamp out-of-bounds indices (unlike slice ranges `arr[0:5]`). Any index that is out of bounds strictly raises an `IndexError`."},{id:17,question:"What is the result of `arr[[2, 2, 2]]` on `arr = np.array([10, 20, 30, 40])`?",options:["`array([30, 30, 30])`","`array([30])`","ValueError: duplicate indices not allowed","`array([20, 20, 20])`"],correctAnswer:0,explanation:"Fancy indexing allows repeated indices. Index 2 (value 30) is repeated three times, producing `array([30, 30, 30])`."},{id:18,question:"How can you combine fancy indexing with standard slicing, e.g., `mat[1:3, [0, 2]]`?",options:["It extracts rows 1 and 2 (via slice) and only columns 0 and 2 (via fancy index), returning a (2, 2) array","NumPy forbids mixing slicing and fancy indexing","It flattens the entire matrix into 1D","It produces a 4D tensor"],correctAnswer:0,explanation:"NumPy seamlessly combines slicing and fancy indexing. `mat[1:3, [0, 2]]` slices rows 1 to 2 and picks columns 0 and 2, yielding a (2, 2) submatrix."},{id:19,question:"What function in NumPy is an explicit equivalent to 1D fancy indexing along a specified axis?",options:["np.take(arr, indices, axis=...)","np.select_indices(arr, indices)","np.extract_axis(arr, indices)","np.gather(arr, indices)"],correctAnswer:0,explanation:"`np.take(arr, indices, axis=0)` takes elements from an array along an axis using integer indices, providing a functional equivalent to `arr[indices]`."},{id:20,question:"What happens if Debangshu passes a boolean array `[True, False, True]` where NumPy expects integer fancy indices?",options:["NumPy treats it as Boolean Indexing (Masking), not integer indexing","NumPy converts True to 1 and False to 0 and selects indices 1, 0, 1","NumPy crashes with a TypeError","NumPy converts the array into strings"],correctAnswer:0,explanation:"If the index array has dtype `bool`, NumPy triggers Boolean Indexing (masking) and selects elements corresponding to `True` entries."},{id:21,question:"Why should you avoid excessive fancy indexing inside tight Python loops during real-time inference?",options:["Because fancy indexing allocates new memory copies on the heap every iteration, causing memory fragmentation and GC overhead","Because fancy indexing disables CPU cache lines","Because fancy indexing only works in single-threaded mode","Because fancy indexing truncates floating point precision"],correctAnswer:0,explanation:"Because fancy indexing always allocates a fresh memory copy in RAM, calling it millions of times inside a loop increases heap allocations and garbage collection overhead. Where possible, use continuous slices or pre-allocated destination buffers."},{id:22,question:"How do you reorder the columns of a 2D matrix `mat` in reverse order using fancy indexing?",options:["mat[:, [3, 2, 1, 0]] (for a matrix with 4 columns)","mat[[3, 2, 1, 0], :]","mat.reverse_cols()","mat[:, -1]"],correctAnswer:0,explanation:"Passing `[3, 2, 1, 0]` as the column index array rearranges the columns into reverse order."},{id:23,question:"What is `arr[np.array([1, 0, 3])]` if `arr = np.array(['A', 'B', 'C', 'D'])`?",options:["`array(['B', 'A', 'D'], dtype='<U1')`","`array(['A', 'B', 'C'])`","`array(['B', 'A', 'C'])`","`array(['D', 'C', 'B'])`"],correctAnswer:0,explanation:"Index 1 is 'B', index 0 is 'A', and index 3 is 'D'. The result is `array(['B', 'A', 'D'])`."},{id:24,question:"How do you assign new values to specific columns [1, 3] across all rows of matrix `mat`?",options:["mat[:, [1, 3]] = 0","mat[[1, 3], :] = 0","mat[[1, 3]] = 0","mat.set_cols([1, 3], 0)"],correctAnswer:0,explanation:"`mat[:, [1, 3]] = 0` selects columns 1 and 3 across all rows and assigns 0 to all of them in-place."},{id:25,question:"What is Sukanta Hui's golden rule for preparing training mini-batches with fancy indexing in Barrackpore ML labs?",options:["Always generate a random permutation of row indices and apply the SAME index array to both feature matrix X and label vector y: `X_batch, y_batch = X[idx], y[idx]`","Always shuffle X and y independently with separate random calls","Never use fancy indexing for datasets larger than 100 samples","Always convert NumPy matrices to Python lists before batching"],correctAnswer:0,explanation:"To preserve the strict 1-to-1 correspondence between features and target labels, you MUST generate a single index array (e.g. via `np.random.permutation` or `np.random.choice`) and apply it simultaneously to both `X` and `y`."}],p=[{id:"part1",fileName:"01_integer_array_indexing_basics.py",title:"1. Integer Array Indexing & Copy Proof",badge:"Fancy Basics",code:k,summary:"Demonstrates 1D index lists, arbitrary ordering, index repetition, and confirms fancy indexing returns a memory-independent copy."},{id:"part2",fileName:"02_multidimensional_paired_coords_vs_open_mesh.py",title:"2. Paired Coordinates vs np.ix_() Subgrids",badge:"Paired vs np.ix_",code:E,summary:"Explains the zip-pairing rule of multi-axis index arrays and how to use np.ix_() to extract rectangular 2D sub-matrices."},{id:"part3",fileName:"03_in_place_fancy_modification_and_np_add_at.py",title:"3. In-Place Mutation & np.add.at()",badge:"np.add.at()",code:X,summary:"Reveals the repeated index += 1 buffering trap and demonstrates how np.add.at() performs safe unbuffered histogram accumulation."},{id:"part4",fileName:"04_ml_stochastic_batch_sampling_and_shuffling.py",title:"4. ML Stochastic Mini-Batch Sampling",badge:"SGD Sampling",code:D,summary:"Implements SGD mini-batch extraction, dataset shuffling with np.random.permutation, and synchronous feature/label permuting."}],s=[{id:0,name:"Debangshu",marks:[75,82,90],total:247},{id:1,name:"Susmita",marks:[88,94,91],total:273},{id:2,name:"Swadeep",marks:[62,70,74],total:206},{id:3,name:"Tuhina",marks:[92,89,96],total:277},{id:4,name:"Sachin",marks:[85,80,88],total:253},{id:5,name:"Mahima",marks:[79,85,82],total:246}],M=[{id:"top_rankers",label:"Top Rankers [3, 1, 4]",indices:[3,1,4]},{id:"even_rows",label:"Even Rows [0, 2, 4]",indices:[0,2,4]},{id:"odd_rows",label:"Odd Rows [1, 3, 5]",indices:[1,3,5]},{id:"reverse_all",label:"Reversed [5, 4, 3, 2, 1, 0]",indices:[5,4,3,2,1,0]}],Y=()=>{const[i,g]=t.useState("visual_picker"),[c,N]=t.useState("part1"),d=p.find(n=>n.id===c)||p[0],[a,l]=t.useState([3,1,4]),[h,j]=t.useState([65,78,92,54,88]),[u,b]=t.useState([78,54]),[o,_]=t.useState(3),[x,y]=t.useState([1,3,4]),w=n=>{a.includes(n)?l(a.filter(r=>r!==n)):l([...a,n])},v=()=>{const r=[...[0,1,2,3,4,5]].sort(()=>.5-Math.random());y(r.slice(0,o))},S=()=>{b([999,u[1]])},A=()=>{j([65,78,92,54,88]),b([78,54])},m=a.filter(n=>n>=0&&n<s.length).map(n=>s[n]);return e.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200",children:[e.jsx("header",{className:"border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"BCAC701B • Segment 9"}),e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30",children:"Module 1 • Topic 9"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3",children:[e.jsx("span",{children:"🎯 Fancy Indexing (Integer Arrays)"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700",children:"arr[[0, 2, 5]] • mat[np.ix_()] • X[batch_idx]"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Mastering non-sequential element selection, deep memory copies, paired coordinate indexing, and ML mini-batch sampling."})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:"inline-block text-xs font-mono px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-slate-400",children:["Mentor: ",e.jsx("strong",{className:"text-emerald-400",children:"Sukanta Hui"})," • Barrackpore"]})})]})})}),e.jsx("nav",{className:"bg-slate-950 border-b border-slate-800/80 sticky top-[73px] z-30 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex overflow-x-auto space-x-1 py-2 scrollbar-thin scrollbar-thumb-slate-700",children:[{id:"visual_picker",label:"🎛️ Interactive Index Picker",icon:"🎯"},{id:"copy_vs_view_proof",label:"🧬 Copy vs View Memory Proof",icon:"⚡"},{id:"paired_vs_grid",label:"📐 Paired Coordinates vs np.ix_()",icon:"🧩"},{id:"ml_minibatch_sampler",label:"🤖 SGD Mini-Batch Sampler",icon:"🎲"}].map(n=>e.jsxs("button",{onClick:()=>g(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${i===n.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[e.jsx("span",{children:n.icon}),e.jsx("span",{children:n.label})]},n.id))})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[i==="visual_picker"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"🎛️ Interactive Integer Array (Fancy) Index Selector"})}),e.jsxs("p",{className:"text-sm text-slate-400 mt-1",children:["Click any student row to add or remove its integer index from the index list ",e.jsxs("code",{className:"text-emerald-400",children:["indices = [",a.join(", "),"]"]}),"."]})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:M.map(n=>e.jsx("button",{onClick:()=>l(n.indices),className:"px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-700 hover:border-emerald-500 hover:text-emerald-300 transition-all",children:n.label},n.id))})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"px-3 py-1 rounded-md text-xs font-bold border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-mono",children:["selected = data[[",a.join(", "),"]]"]}),e.jsxs("span",{className:"text-xs text-slate-300",children:["Output Shape: ",e.jsxs("strong",{className:"text-white",children:["(",a.length,", 3)"]})," • Type:"," ",e.jsx("strong",{className:"text-emerald-400",children:"Deep Memory Copy"})]})]}),e.jsxs("code",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded border border-slate-800",children:["subset = marks_table[[",a.join(", "),"]]"]})]}),e.jsxs("div",{className:"space-y-2 mb-6",children:[e.jsx("span",{className:"text-xs uppercase tracking-wider font-bold text-slate-400 block mb-2",children:"Master Student Table (Click to Select / Deselect Indices):"}),s.map(n=>{const r=a.includes(n.id);return e.jsxs("button",{onClick:()=>w(n.id),className:`w-full p-3 rounded-xl border flex items-center justify-between transition-all text-left ${r?"bg-emerald-950/30 border-emerald-500/60 shadow-md shadow-emerald-950/20 scale-[1.01]":"bg-slate-950/60 border-slate-800 hover:bg-slate-900"}`,children:[e.jsxs("div",{className:"flex items-center gap-4",children:[e.jsx("span",{className:`w-8 h-8 rounded-lg font-mono text-xs font-bold flex items-center justify-center border ${r?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-800 text-slate-400 border-slate-700"}`,children:n.id}),e.jsxs("div",{children:[e.jsx("p",{className:"text-sm font-bold text-white",children:n.name}),e.jsxs("p",{className:"text-xs text-slate-400 font-mono",children:["Sub 1: ",n.marks[0]," | Sub 2: ",n.marks[1]," | Sub 3: ",n.marks[2]]})]})]}),e.jsxs("div",{className:"text-right font-mono",children:[e.jsxs("span",{className:"text-xs font-bold text-emerald-300",children:[n.total," pts"]}),e.jsx("span",{className:"block text-[10px] text-slate-500",children:r?"✅ Selected":"Click to Add"})]})]},n.id)})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs uppercase font-bold tracking-wider text-slate-400",children:["Extracted Resulting Matrix: data[[",a.join(", "),"]]"]}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400",children:["shape: (",m.length,", 3)"]})]}),m.length>0?e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:m.map((n,r)=>e.jsxs("p",{children:["Row ",r," (Original #",n.id," - ",n.name,"): [",n.marks.join(", "),"]"]},r))}):e.jsx("p",{className:"text-xs text-slate-500 italic",children:"No indices selected."})]})]})}),i==="copy_vs_view_proof"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🧬 Memory Truth: Fancy Indexing ALWAYS Returns a COPY!"})}),e.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:["While slicing (",e.jsx("code",{className:"text-blue-400",children:"arr[1:3]"}),") returns a zero-copy view, fancy indexing (",e.jsx("code",{className:"text-emerald-400",children:"arr[[1, 3]]"}),") always allocates a brand new memory block on the heap."]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-bold text-emerald-400 font-mono",children:"fancy_sub = arr[[1, 3]]"}),e.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30",children:"fancy_sub.base is None: True (Independent Copy!)"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Click below to mutate ",e.jsx("code",{className:"text-emerald-300",children:"fancy_sub[0] = 999"}),". Notice that the parent ",e.jsx("code",{className:"text-white",children:"arr[1]"})," stays completely untouched at ",e.jsx("strong",{className:"text-white",children:"78"}),"!"]}),e.jsxs("div",{className:"flex gap-2",children:[e.jsx("button",{onClick:S,className:"px-3 py-1.5 bg-emerald-600/30 border border-emerald-500 text-emerald-300 rounded text-xs font-mono font-bold hover:bg-emerald-500 hover:text-slate-950 transition-all",children:"Set fancy_sub[0] = 999"}),e.jsx("button",{onClick:A,className:"px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-400 rounded text-xs font-mono hover:text-white",children:"Reset"})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500 font-semibold",children:"fancy_sub Content in RAM:"}),e.jsxs("p",{className:"text-emerald-300 font-bold",children:["[",u.join(", "),"]"]})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-bold text-white font-mono",children:"Master Array in RAM (arr)"}),e.jsx("span",{className:"text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30",children:"Shape: (5,)"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["The master array buffer is completely isolated from modifications to ",e.jsx("code",{className:"text-emerald-300",children:"fancy_sub"}),"."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500 font-semibold",children:"arr Content:"}),e.jsxs("p",{className:"text-white font-bold",children:["[",h.join(", "),"]"]}),e.jsxs("p",{className:"text-xs text-emerald-400 pt-1",children:["arr[1] remains ",h[1]," (Safe & Untouched)"]})]})]})]})]})}),i==="paired_vs_grid"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"📐 Paired Coordinates vs Rectangular Subgrid (np.ix_)"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Understand the classic NumPy distinction between pairing indices element-by-element vs taking the full Cartesian cross-product grid."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-bold text-blue-400 font-mono",children:"1. Paired Coordinates: mat[[0, 2], [1, 2]]"}),e.jsx("span",{className:"text-xs px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-500/30",children:"Returns (2,) [1D Vector]"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["NumPy pairs index arrays element-by-element:",e.jsx("br",{}),"• Point 1: Row 0, Col 1 ➔ ",e.jsx("code",{className:"text-emerald-400",children:"82"}),e.jsx("br",{}),"• Point 2: Row 2, Col 2 ➔ ",e.jsx("code",{className:"text-emerald-400",children:"74"})]}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["result = mat[[0, 2], [1, 2]]",e.jsx("br",{}),"print(result) # Output: array([82, 74])"]})})]}),e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-bold text-emerald-400 font-mono",children:"2. Submatrix Grid: mat[np.ix_([0, 2], [1, 2])]"}),e.jsx("span",{className:"text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/30",children:"Returns (2, 2) [2D Submatrix]"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:[e.jsx("code",{className:"text-emerald-300",children:"np.ix_()"})," forms an open mesh to compute the Cartesian cross-product, extracting all 4 intersections into a 2×2 submatrix."]}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-emerald-300 border border-slate-800",children:e.jsxs("code",{children:["subgrid = mat[np.ix_([0, 2], [1, 2])]",e.jsx("br",{}),"# Output (2x2 Matrix):",e.jsx("br",{}),"# [[82, 90],",e.jsx("br",{}),"#  [70, 74]]"]})})]})]})]})}),i==="ml_minibatch_sampler"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"🎲 Stochastic Gradient Descent (SGD) Mini-Batch Sampler"})}),e.jsxs("p",{className:"text-sm text-slate-400 mt-1",children:["See how fancy indexing extracts random mini-batches during neural network training epochs while keeping ",e.jsx("code",{className:"text-blue-400",children:"X"})," and ",e.jsx("code",{className:"text-emerald-400",children:"y"})," strictly synchronized."]})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-xs text-slate-400",children:"Batch Size:"}),[2,3,4].map(n=>e.jsxs("button",{onClick:()=>{_(n),y([0,1,2,3,4,5].slice(0,n))},className:`px-2.5 py-1 rounded text-xs font-mono font-bold border transition-all ${o===n?"bg-emerald-500 text-slate-950 border-emerald-400":"bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:[n," samples"]},n)),e.jsx("button",{onClick:v,className:"px-4 py-1.5 bg-gradient-to-r from-emerald-600 to-blue-600 text-white font-bold rounded-lg text-xs hover:opacity-90 shadow-md",children:"🎲 Draw Random Batch"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs font-mono font-bold text-emerald-400",children:["batch_idx = np.random.choice(6, size=",o,", replace=False) ➔ [",x.join(", "),"]"]}),e.jsxs("span",{className:"text-xs text-slate-400",children:["X_batch.shape: (",o,", 3) • y_batch.shape: (",o,",)"]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-blue-500/40 rounded-xl p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-blue-300 font-mono",children:"X_batch = X[batch_idx]"}),e.jsx("div",{className:"space-y-1 font-mono text-xs",children:x.map((n,r)=>e.jsxs("div",{className:"flex justify-between p-2 bg-slate-950 rounded text-slate-200",children:[e.jsxs("span",{className:"text-slate-400",children:["#",n," ",s[n].name]}),e.jsxs("span",{children:["[",s[n].marks.join(", "),"]"]})]},r))})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-emerald-500/40 rounded-xl p-4 space-y-2",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-300 font-mono",children:"y_batch = y[batch_idx]"}),e.jsx("div",{className:"space-y-1 font-mono text-xs",children:x.map((n,r)=>e.jsxs("div",{className:"flex justify-between p-2 bg-slate-950 rounded text-slate-200",children:[e.jsxs("span",{className:"text-slate-400",children:["#",n," Total"]}),e.jsxs("span",{className:"text-emerald-400 font-bold",children:[s[n].total," pts"]})]},r))})]})]}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-400 border border-slate-800",children:e.jsxs("code",{children:["# Pass mini-batch to Neural Network optimizer",e.jsx("br",{}),"loss = model.train_on_batch(X_batch, y_batch)"]})})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect integer indexing, paired coords vs np.ix_, np.add.at(), or SGD mini-batch sampling"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:p.map(n=>e.jsxs("button",{onClick:()=>N(n.id),className:`p-3 rounded-xl border text-left transition-all ${c===n.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${c===n.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:n.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:n.title})]},n.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:d.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:d.summary})]})}),e.jsx(I,{fileModule:d.code,title:d.fileName})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Fancy Indexing Pitfalls & How to Avoid Them"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"1. The Repeated Index In-Place Increment Trap"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"arr[[0, 0]] += 1"})," only increments index 0 ONCE because buffered assignment extracts the value once and writes it back once. Use ",e.jsx("code",{className:"text-emerald-400",children:"np.add.at(arr, [0, 0], 1)"})," for repeated increments!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"2. Assuming Paired Coordinates Return a 2D Grid"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"mat[[0, 2], [1, 3]]"})," returns a 1D vector of 2 paired points, NOT a 2x2 matrix. Use ",e.jsx("code",{className:"text-blue-300",children:"mat[np.ix_([0, 2], [1, 3])]"})," for a 2x2 grid."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"3. Expecting Fancy Indexing to Share Memory (View)"}),e.jsx("p",{children:"Unlike slicing, fancy indexing ALWAYS creates a copy. Modifying a fancy-indexed slice will not mutate the parent array."})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"4. Shuffling X and y Independently in ML"}),e.jsxs("p",{children:["Never call ",e.jsx("code",{className:"text-white",children:"np.random.shuffle(X)"})," and ",e.jsx("code",{className:"text-white",children:"np.random.shuffle(y)"})," separately! Generate one permutation array ",e.jsx("code",{className:"text-emerald-400",children:"perm = np.random.permutation(N)"})," and apply ",e.jsx("code",{className:"text-emerald-400",children:"X[perm], y[perm]"}),"."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💬 Barrackpore Classroom Q&A"})}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono",children:"Coder & AccoTax Live Session"})]}),e.jsx("div",{className:"space-y-3",children:[{student:"Debangshu",avatar:"👨‍💻",question:"Sir, why did arr[[0, 0]] += 1 only add 1 instead of 2 to arr[0]?",answer:"Debangshu, that is NumPy's famous buffered assignment trap! Python extracts arr[[0, 0]] as a temporary array [0, 0], increments both to [1, 1], and then writes 1 back into arr[0] twice. The second write simply overwrites the first! To accumulate repeated indices properly, always use np.add.at(arr, [0, 0], 1)."},{student:"Susmita",avatar:"👩‍💻",question:"If I want to extract the top 3 students by score from a 100-student array, how do I do it with fancy indexing?",answer:"Susmita, combine np.argsort() with fancy indexing! np.argsort(scores)[-3:][::-1] gives the indices of the top 3 scores. Then top_students = scores[top_indices] extracts them directly in descending order!"},{student:"Swadeep",avatar:"👨‍🎓",question:"Why does fancy indexing allocate a copy instead of a view like normal slicing?",answer:"Swadeep, normal slicing follows a constant step/stride (e.g. hop every 4 bytes). But fancy indexing picks arbitrary non-contiguous memory locations (e.g. index 1, then 100, then 4). A single stride formula cannot represent arbitrary scattered addresses, so NumPy must copy those selected bytes into a fresh contiguous buffer!"}].map((n,r)=>e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300",children:[e.jsx("span",{children:n.avatar}),e.jsxs("span",{children:[n.student," asks:"]})]}),e.jsxs("p",{className:"text-xs text-slate-300 italic pl-6",children:['"',n.question,'"']}),e.jsxs("div",{className:"flex items-start gap-2 pt-2 border-t border-slate-800 text-xs text-emerald-300",children:[e.jsx("span",{className:"font-bold text-emerald-400 whitespace-nowrap",children:"Sukanta Sir:"}),e.jsx("p",{className:"text-slate-300",children:n.answer})]})]},r))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"❓ Frequently Asked Questions & Practice Problems"})}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[f.length," Questions & Answers"]})]}),e.jsx(C,{questions:f})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📄 Printable Topic Summary Note"})}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700",children:"topic9_note.txt"})]}),e.jsx(T,{text:R,fileName:"topic9_note.txt"})]}),e.jsx(P,{})]})]})};export{Y as default};
