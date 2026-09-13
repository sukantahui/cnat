import{b as c,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as _}from"./PythonFileLoader-DUNJ9gwR.js";import{F as k}from"./FAQTemplate-D_90hN4m.js";import{P as T}from"./PlainTextPrint-yt10TRX1.js";import{T as S}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const A=`"""\r
================================================================================\r
Topic 8 - Script 01: Boolean Mask Generation & 1D/2D Filtering\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Creating boolean masks via relational operators (>, <, ==, !=, >=, <=)\r
- Passing boolean masks as indices: arr[mask]\r
- Fundamental rule: Boolean indexing collapses multidimensional arrays into a 1D copy\r
- Counting matching elements with np.sum(mask) or np.count_nonzero(mask)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_boolean_filtering():\r
    print("=" * 65)\r
    print("1. 1D BOOLEAN MASKING & ELEMENT FILTERING")\r
    print("=" * 65)\r
\r
    scores = np.array([45, 88, 72, 35, 91, 58, 80])\r
    print("Original Scores:", scores)\r
\r
    # Generate boolean mask for passing grades (>= 60)\r
    pass_mask = scores >= 60\r
    print("Pass Mask (scores >= 60):", pass_mask)\r
    print(f"Total Passing Students   : {np.sum(pass_mask)} out of {len(scores)}")\r
\r
    # Apply mask\r
    passing_scores = scores[pass_mask]\r
    print("Filtered Passing Scores  :", passing_scores)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. 2D MATRIX MASKING & 1D FLATTENING BEHAVIOR")\r
    print("=" * 65)\r
    \r
    # 3 students x 3 exam marks\r
    marks_matrix = np.array([\r
        [75, 82, 55],\r
        [92, 48, 89],\r
        [60, 78, 85]\r
    ])\r
    print("Marks Matrix (3x3):\\n", marks_matrix)\r
\r
    # Filter all exam scores >= 80 across the entire table\r
    high_score_mask = marks_matrix >= 80\r
    print("\\nHigh Score Mask (>= 80):\\n", high_score_mask)\r
\r
    extracted_elements = marks_matrix[high_score_mask]\r
    print("\\nResult of marks_matrix[marks_matrix >= 80]:")\r
    print(extracted_elements)\r
    print("Shape:", extracted_elements.shape, "<- Notice: Always collapses to 1D copy!")\r
\r
if __name__ == "__main__":\r
    demonstrate_boolean_filtering()\r
`,I=`"""\r
================================================================================\r
Topic 8 - Script 02: Compound Logical Conditions & Bitwise Operators\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Bitwise operators: & (AND), | (OR), ~ (NOT), ^ (XOR)\r
- Why Python's keywords 'and'/'or' fail with ValueError: truth value of array is ambiguous\r
- The critical necessity of parentheses around each condition due to operator precedence\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_compound_conditions():\r
    print("=" * 65)\r
    print("1. COMPOUND CONDITIONS WITH BITWISE & (AND) AND | (OR)")\r
    print("=" * 65)\r
\r
    # Student study hours\r
    hours = np.array([1.5, 4.0, 7.5, 2.0, 9.0, 5.5, 8.0])\r
    # Student test scores\r
    scores = np.array([45, 78, 88, 52, 95, 82, 91])\r
\r
    print("Hours :", hours)\r
    print("Scores:", scores)\r
\r
    # Find students who studied > 3 hours AND scored > 80\r
    # NOTE: Parentheses around (hours > 3) and (scores > 80) are MANDATORY!\r
    hardworking_pass_mask = (hours > 3) & (scores > 80)\r
    print("\\nMask ((hours > 3) & (scores > 80)):", hardworking_pass_mask)\r
    print("Matching Scores                   :", scores[hardworking_pass_mask])\r
\r
    # Find students who studied < 2 hours OR scored < 50 (Needs academic support)\r
    at_risk_mask = (hours < 2) | (scores < 50)\r
    print("\\nAt-Risk Mask ((hours < 2) | (scores < 50)):", at_risk_mask)\r
    print("At-Risk Scores                            :", scores[at_risk_mask])\r
\r
    print("\\n" + "=" * 65)\r
    print("2. INVERSION WITH ~ (NOT)")\r
    print("=" * 65)\r
    not_at_risk = ~at_risk_mask\r
    print("Not at-risk mask (~at_risk_mask):", not_at_risk)\r
\r
if __name__ == "__main__":\r
    demonstrate_compound_conditions()\r
`,P=`"""\r
================================================================================\r
Topic 8 - Script 03: Conditional In-Place Mutation & Implementing Neural ReLU\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- In-place mutation using boolean masking: arr[mask] = new_value\r
- Implementing ReLU (Rectified Linear Unit): x[x < 0] = 0\r
- Value clipping and threshold capping (np.clip vs mask assignment)\r
- np.where(condition, x, y) for branchless ternary selection\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_conditional_mutation():\r
    print("=" * 65)\r
    print("1. IMPLEMENTING NEURAL NETWORK ReLU ACTIVATION")\r
    print("=" * 65)\r
\r
    # Simulated pre-activation raw layer outputs (logits with negative values)\r
    raw_logits = np.array([\r
        [-2.5,  1.4, -0.8,  3.2],\r
        [ 0.5, -4.1,  2.0, -1.1]\r
    ], dtype=np.float32)\r
    print("Raw Logits (Before ReLU):\\n", raw_logits)\r
\r
    # Fast in-place ReLU: replace all negative numbers with 0\r
    relu_out = raw_logits.copy()\r
    relu_out[relu_out < 0] = 0.0\r
    print("\\nAfter In-Place ReLU (relu_out[relu_out < 0] = 0.0):\\n", relu_out)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. TERNARY SELECTION WITH np.where()")\r
    print("=" * 65)\r
    \r
    # Binary classification thresholding: Pass (1) if score >= 60 else Fail (0)\r
    final_scores = np.array([78, 45, 92, 59, 83])\r
    predicted_classes = np.where(final_scores >= 60, 1, 0)\r
    \r
    print("Scores            :", final_scores)\r
    print("Predicted Classes :", predicted_classes)\r
\r
if __name__ == "__main__":\r
    demonstrate_conditional_mutation()\r
`,C=`"""\r
================================================================================\r
Topic 8 - Script 04: ML Outlier Filtering, NaN Cleaning & Batch Pruning\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Detecting and filtering Missing / NaN values using np.isnan()\r
- Row-level boolean masking: keeping only rows where all features are valid (~np.isnan(X).any(axis=1))\r
- Outlier filtering using Z-Score statistical thresholds (|z| <= 3.0)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_ml_data_cleaning():\r
    print("=" * 65)\r
    print("1. CLEANING MISSING VALUES (NaN REMOVAL)")\r
    print("=" * 65)\r
\r
    # 5 student records with 2 features (Study Hours, Attendance)\r
    # Student 1 has NaN hours, Student 3 has NaN attendance\r
    X_raw = np.array([\r
        [4.0, 85.0],\r
        [np.nan, 90.0],\r
        [6.5, 95.0],\r
        [3.0, np.nan],\r
        [8.0, 98.0]\r
    ])\r
    y_raw = np.array([1, 1, 1, 0, 1])\r
\r
    print("Raw Feature Matrix with NaNs:\\n", X_raw)\r
\r
    # Boolean mask: Which rows contain ANY NaN?\r
    has_nan_row = np.isnan(X_raw).any(axis=1)\r
    valid_rows_mask = ~has_nan_row\r
\r
    print("\\nValid Rows Mask (~np.isnan(X).any(axis=1)):", valid_rows_mask)\r
    \r
    # Filter both X and y synchronously\r
    X_clean = X_raw[valid_rows_mask]\r
    y_clean = y_raw[valid_rows_mask]\r
\r
    print(f"\\nCleaned Feature Matrix X (Shape {X_clean.shape}):\\n", X_clean)\r
    print("Cleaned Target Labels y:", y_clean)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. STATISTICAL OUTLIER FILTERING (Z-SCORE MASK)")\r
    print("=" * 65)\r
    # Salary / income features with extreme erroneous sensor reading (e.g. 99999)\r
    incomes = np.array([25000, 28000, 31000, 27000, 29000, 999999, 26000], dtype=np.float64)\r
    mu = np.mean(incomes)\r
    sigma = np.std(incomes)\r
    \r
    z_scores = np.abs((incomes - mu) / sigma)\r
    non_outliers_mask = z_scores < 2.0 # Keep points within 2 standard deviations\r
\r
    print("Raw Incomes        :", incomes)\r
    print("Non-Outliers Mask  :", non_outliers_mask)\r
    print("Pruned Clean Incomes:", incomes[non_outliers_mask])\r
\r
if __name__ == "__main__":\r
    demonstrate_ml_data_cleaning()\r
`,E=`========================================================\r
NUMPY ESSENTIALS — TOPIC 8: BOOLEAN INDEXING (MASKING)\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9 • Module 1\r
========================================================\r
\r
1. WHAT IS BOOLEAN INDEXING?\r
-----------------------------\r
Boolean indexing (masking) selects elements from an ndarray based on\r
a boolean condition (True/False mask) evaluated element-by-element.\r
\r
2. CREATING A BOOLEAN MASK:\r
----------------------------\r
Vectorized relational operators return a boolean array of identical shape:\r
  scores = np.array([75, 42, 88, 35, 90])\r
  mask = scores >= 50\r
  # mask is: array([True, False, True, False, True])\r
\r
3. FILTERING WITH A MASK:\r
--------------------------\r
Passing the boolean mask inside square brackets extracts only True items:\r
  passed = scores[scores >= 50]\r
  # passed is: array([75, 88, 90])\r
  *NOTE: Filtering a 2D/3D array with a boolean mask always returns a 1D vector!\r
\r
4. COMBINING MULTIPLE CONDITIONS:\r
----------------------------------\r
Use bitwise operators:\r
  &  -> Element-wise AND\r
  |  -> Element-wise OR\r
  ~  -> Element-wise NOT / Invert\r
\r
⚠️ PARENTHESES RULE (MANDATORY):\r
  You MUST enclose each condition in parentheses:\r
  valid = scores[(scores >= 40) & (scores <= 90)]\r
  *Using Python 'and' or 'or' raises: ValueError (ambiguous truth value).\r
\r
5. CONDITIONAL ASSIGNMENT & np.where():\r
----------------------------------------\r
1. Direct Mask Assignment (In-Place Mutation):\r
   # ReLU Activation function implementation\r
   arr[arr < 0] = 0  # Replaces all negative values with 0\r
\r
2. np.where(condition, x_if_true, y_if_false):\r
   # Ternary operator preserving original array shape\r
   labels = np.where(scores >= 50, "PASS", "FAIL")\r
\r
6. BOOLEAN AGGREGATIONS & UTILITIES:\r
-------------------------------------\r
  - Count matching items: np.sum(scores >= 50) or np.count_nonzero(scores >= 50)\r
  - Check if any match:   np.any(scores < 40)  -> True/False\r
  - Check if all match:   np.all(scores >= 40) -> True/False\r
  - Find matching indices: np.nonzero(scores >= 50) or np.where(scores >= 50)\r
\r
7. MACHINE LEARNING APPLICATIONS:\r
----------------------------------\r
1. Subsetting Positive Class Samples:\r
   X_positive = X[y == 1]\r
2. Outlier Removal / Capping:\r
   clean_X = X[np.abs(X - mean) <= 3 * std]\r
3. Missing Data / NaN Filtering:\r
   clean_data = data[~np.isnan(data)]\r
4. Thresholding Probabilities:\r
   predictions = (probabilities >= 0.5).astype(int)\r
\r
8. QUICK REVISION CHECKLIST:\r
-----------------------------\r
  □ Vectorized conditions produce boolean masks\r
  □ arr[mask] extracts True elements as a 1D vector\r
  □ Use &, |, ~ with parentheses for compound conditions\r
  □ Never use Python 'and' / 'or' with ndarrays\r
  □ arr[mask] = val updates matching elements in-place\r
  □ np.where(cond, x, y) applies if-else without flattening\r
  □ np.sum(mask) counts the number of True occurrences\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,g=[{id:1,question:"What is Boolean Indexing (Masking) in NumPy?",options:["A technique that uses an array of True/False boolean values to select or modify specific elements of an ndarray","A sorting algorithm based on Boolean logic gates","A method to convert all numerical numbers into binary strings '0' and '1'","A way to encrypt NumPy arrays with boolean passwords"],correctAnswer:0,explanation:"Boolean indexing (also called masking) creates a boolean array of True/False values by evaluating a condition element-wise. Passing this mask inside brackets `arr[mask]` selects only the elements where the mask evaluates to True."},{id:2,question:"What does the expression `scores >= 50` return when `scores = np.array([35, 72, 48, 90])`?",options:["A single boolean value `True`","A boolean ndarray: `array([False, True, False, True])`","A Python list `[72, 90]`","An integer count `2`"],correctAnswer:1,explanation:"Relational operators on NumPy arrays are vectorized. The comparison `scores >= 50` evaluates element-by-element, returning a boolean ndarray of the exact same shape containing `[False, True, False, True]`."},{id:3,question:"What is the shape of the result when filtering a 2D matrix of shape (4, 5) with a boolean mask `mat[mat > 50]`?",options:["Always a 2D matrix of shape (4, 5)","A 1D vector of shape (k,) where k is the count of True elements","A tuple containing row and column indices","A scalar number"],correctAnswer:1,explanation:"Because different rows in a 2D matrix generally have different numbers of matching elements, NumPy cannot return a rectangular 2D matrix. Therefore, boolean indexing on multidimensional arrays always flattens the matching elements into a 1D vector."},{id:4,question:"Which operators must be used to combine multiple boolean conditions on NumPy arrays?",options:["`and`, `or`, `not`","`&` (AND), `|` (OR), `~` (NOT)","`&&`, `||`, `!`","`AND()`, `OR()`, `NOT()`"],correctAnswer:1,explanation:"In NumPy, you must use bitwise operators `&` (element-wise AND), `|` (element-wise OR), and `~` (element-wise NOT/Inversion). Standard Python keywords `and`/`or` evaluate truthiness of the entire array object, which fails."},{id:5,question:"Why does `scores > 40 and scores < 80` raise a ValueError in Python?",options:["Because Python doesn't support the 'and' keyword","Because Python's 'and' expects a single scalar boolean, but `scores > 40` is an array of booleans, causing 'The truth value of an array with more than one element is ambiguous'","Because scores must be sorted before using 'and'","Because Python converts 'and' into addition"],correctAnswer:1,explanation:"Python's logical `and` evaluates whether the operand as a whole is truthy by calling `bool(operand)`. Because an array contains multiple boolean items, NumPy cannot decide if the entire array is True or False, raising `ValueError: The truth value of an array with more than one element is ambiguous. Use a.any() or a.all()`."},{id:6,question:"Why must parentheses enclose each sub-condition, as in `(scores > 40) & (scores < 80)`?",options:["Because parentheses are optional stylistic syntax in Python","Because bitwise `&` has higher operator precedence than comparison operators (`>`, `<`), causing `40 & scores` to be evaluated first without parentheses","Because NumPy requires all numbers to be in tuples","Because without parentheses, Python executes code in Fortran order"],correctAnswer:1,explanation:"In Python's operator precedence table, `&` binds tighter than `<` and `>`. Writing `scores > 40 & scores < 80` is evaluated as `scores > (40 & scores) < 80`, which causes a TypeError or logical error. Parentheses are strictly mandatory!"},{id:7,question:"How do you implement the Neural Network ReLU (Rectified Linear Unit) activation function on an array in one line using boolean indexing?",options:["arr[arr < 0] = 0","arr = arr.relu()","arr[arr > 0] = 0","np.relu_mask(arr)"],correctAnswer:0,explanation:"The ReLU activation function is defined as f(x) = max(0, x). In NumPy, writing `arr[arr < 0] = 0` finds all negative values and replaces them with 0 in-place."},{id:8,question:"How does `np.where(condition, x, y)` differ from boolean indexing `arr[condition]`?",options:["`np.where(condition, x, y)` acts as a vectorized ternary if-else operator and preserves the original multidimensional shape, whereas `arr[condition]` returns a flattened 1D array","`np.where()` only works on strings","`np.where()` is slower and always deletes unmatched cells","They are identical in all aspects"],correctAnswer:0,explanation:"`np.where(cond, x, y)` evaluates each element: if True it selects `x`, if False it selects `y`. It preserves the exact shape and dimensions of the input array without collapsing or flattening it into 1D."},{id:9,question:"How can you count the total number of students who scored 75 or higher in a 1D array `scores`?",options:["np.sum(scores >= 75) or np.count_nonzero(scores >= 75)","len(scores >= 75)","scores.count(75)","scores.sum_if(75)"],correctAnswer:0,explanation:"In Python/NumPy, `True` evaluates to 1 and `False` to 0 in arithmetic contexts. Thus, `np.sum(scores >= 75)` sums the 1s, directly yielding the count. `np.count_nonzero(scores >= 75)` is an equally fast and explicit alternative."},{id:10,question:"What does `np.any(errors > 0.05)` return?",options:["An array of all errors greater than 0.05","A single boolean `True` if AT LEAST ONE element in `errors` is greater than 0.05, otherwise `False`","A single boolean `True` only if ALL elements are greater than 0.05","The index of the first error"],correctAnswer:1,explanation:"`np.any()` tests whether any element along a given axis evaluates to True. It returns a single scalar boolean `True` if at least one element meets the condition."},{id:11,question:"What does `np.all(accuracies >= 0.90)` return?",options:["A scalar boolean `True` only if EVERY SINGLE element in `accuracies` is >= 0.90, otherwise `False`","A count of all accuracies >= 0.90","A filtered array containing numbers >= 0.90","A string 'ALL PASS'"],correctAnswer:0,explanation:"`np.all()` tests whether all elements evaluate to True. It returns `True` only if every element in the array satisfies the condition."},{id:12,question:"In Machine Learning classification, how do you extract all feature rows from matrix `X` where target label `y == 1`?",options:["X_positive = X[y == 1]","X_positive = X.filter(y == 1)","X_positive = X[:, y == 1]","X_positive = X[y = 1]"],correctAnswer:0,explanation:"`y == 1` produces a 1D boolean mask of shape `(n_samples,)`. Applying `X[y == 1]` indexes along axis 0 (the sample rows) of matrix `X`, extracting all samples belonging to the positive class."},{id:13,question:"How do you filter out NaN (missing) values from a 1D dataset `raw_data`?",options:["clean = raw_data[raw_data != np.nan]","clean = raw_data[~np.isnan(raw_data)]","clean = raw_data.drop_nan()","clean = raw_data[raw_data.not_null()]"],correctAnswer:1,explanation:"Under IEEE 754 floating point standards, `np.nan == np.nan` evaluates to `False`, so `raw_data != np.nan` does NOT work! You must use `np.isnan(raw_data)` and invert it with `~` to select non-NaN elements: `raw_data[~np.isnan(raw_data)]`."},{id:14,question:"How do you cap all outlier values in `arr` that exceed 100 so that no value is greater than 100?",options:["arr[arr > 100] = 100","arr[100] = arr[arr > 100]","arr.cap(100)","arr = arr > 100"],correctAnswer:0,explanation:"`arr[arr > 100] = 100` uses boolean mask assignment to update all elements strictly greater than 100 to the scalar value 100 in-place."},{id:15,question:"What does `(probabilities >= 0.5).astype(int)` do in a binary classification pipeline?",options:["Converts predicted probability floats into discrete binary class labels 0 and 1","Multiplies all probabilities by 50","Throws an error because booleans cannot be cast to integers","Rounds probabilities to 2 decimal places"],correctAnswer:0,explanation:"The condition `probabilities >= 0.5` generates a boolean mask (`True` for >= 0.5, `False` for < 0.5). Calling `.astype(int)` converts `True` -> 1 and `False` -> 0, producing standard binary class predictions."},{id:16,question:"What function returns the tuple of coordinate indices where a boolean mask is True?",options:["np.nonzero(mask) or np.where(mask)","np.indices_of(mask)","mask.get_coordinates()","np.find(mask)"],correctAnswer:0,explanation:"When called with only a condition (no `x` and `y` arguments), `np.where(condition)` is equivalent to `np.nonzero(condition)`. It returns a tuple of index arrays indicating where the condition is True."},{id:17,question:"What does `~` (tilde) do to a boolean mask array `mask`?",options:["It inverts the mask: True becomes False, and False becomes True","It deletes all False elements","It calculates the bitwise average","It shifts the array by one position"],correctAnswer:0,explanation:"The `~` operator performs element-wise logical NOT inversion. For example, `~np.array([True, False])` produces `array([False, True])`."},{id:18,question:"How do you select all elements in `arr` that are divisible by 3 and greater than 20?",options:["arr[(arr % 3 == 0) & (arr > 20)]","arr[arr % 3 == 0 and arr > 20]","arr[arr % 3 == 0, arr > 20]","arr((arr % 3 == 0) && (arr > 20))"],correctAnswer:0,explanation:"`arr % 3 == 0` checks divisibility by 3, `arr > 20` checks magnitude. Combining them with bitwise `&` and wrapping in parentheses yields `arr[(arr % 3 == 0) & (arr > 20)]`."},{id:19,question:"What happens if a boolean mask has a shape of (5,) but the array being indexed has a shape of (6,)?",options:["NumPy automatically pads the mask with False","NumPy raises an IndexError: boolean index did not match indexed array along dimension 0; dimension is 6 but corresponding boolean dimension is 5","NumPy ignores the 6th element silently","NumPy repeats the mask"],correctAnswer:1,explanation:"Boolean mask dimensions must match the indexed dimension exactly (or be broadcastable). A mismatch in axis length raises an `IndexError`."},{id:20,question:"How do you replace all NaN values in an array `data` with the mean of the non-NaN values?",options:["mean_val = np.nanmean(data); data[np.isnan(data)] = mean_val","data[data == np.nan] = data.mean()","data.fillna(data.mean())","data[np.isnan(data)] = np.nan"],correctAnswer:0,explanation:"`np.nanmean(data)` computes the mean ignoring NaNs. Then, boolean mask assignment `data[np.isnan(data)] = mean_val` replaces all NaN entries with the calculated mean in-place."},{id:21,question:"If `arr = np.array([10, 20, 30, 40, 50])`, what is `arr[np.array([True, False, True, False, True])]`?",options:["`array([10, 30, 50])`","`array([20, 40])`","`array([True, True, True])`","`array([10, 20, 30, 40, 50])`"],correctAnswer:0,explanation:"The boolean mask has `True` at index 0, 2, and 4. Indexing `arr` with this mask extracts elements at those indices: `[10, 30, 50]`."},{id:22,question:"How does boolean indexing compare in speed to Python list comprehensions `[x for x in lst if x > 50]`?",options:["NumPy boolean indexing runs 50x-100x faster in compiled C without Python interpreter overhead or dynamic type checking","List comprehensions are faster because they don't use masks","They have identical performance","List comprehensions use GPU acceleration"],correctAnswer:0,explanation:"NumPy performs vectorized boolean evaluations and element extractions in compiled C loops with contiguous memory buffers and CPU SIMD instructions, making it orders of magnitude faster than Python bytecode loops."},{id:23,question:"What is the result of `np.sum(np.array([True, True, False, True, False]))`?",options:["3","5","True","TypeError"],correctAnswer:0,explanation:"In numerical aggregations, NumPy treats `True` as integer 1 and `False` as integer 0. The sum of 3 Trues and 2 Falses is 1 + 1 + 0 + 1 + 0 = 3."},{id:24,question:"How do you extract all elements in matrix `mat` that fall within 2 standard deviations of the mean (Z-score outlier filtering)?",options:["mat[np.abs(mat - np.mean(mat)) <= 2 * np.std(mat)]","mat[mat.z_score() <= 2]","mat[mat.mean() +- 2 * mat.std()]","np.filter_outliers(mat, 2)"],correctAnswer:0,explanation:"The 2-sigma rule filters elements where the absolute deviation from the mean `|x - mu|` is less than or equal to `2 * sigma`. In NumPy, this is expressed as `mat[np.abs(mat - np.mean(mat)) <= 2 * np.std(mat)]`."},{id:25,question:"What is Sukanta Hui's golden rule when combining multiple filtering criteria in Barrackpore student data processing?",options:["Always wrap each condition in parentheses `(cond1) & (cond2)` and never use `and` / `or`","Always convert the array to strings first","Always filter one condition per for-loop","Never filter more than 100 rows at a time"],correctAnswer:0,explanation:"To avoid the fatal operator precedence trap where bitwise `&` binds tighter than comparisons, always enclose every individual comparison in parentheses `(scores >= 40) & (scores <= 100)` and strictly avoid Python's `and`/`or` keywords."}],h=[{id:"part1",fileName:"01_boolean_mask_generation_and_filtering.py",title:"1. Boolean Masking & 1D Collapsing Rule",badge:"Masks & Filtering",code:A,summary:"Demonstrates comparison predicate vectors, element counting, and why 2D matrix masking returns a 1D copy."},{id:"part2",fileName:"02_compound_logical_conditions_and_bitwise.py",title:"2. Compound Bitwise &, |, ~ Conditions",badge:"Bitwise Operators",code:I,summary:"Covers & / | / ~ operators, mandatory parentheses, and explains why Python keywords 'and'/'or' throw ambiguous truth errors."},{id:"part3",fileName:"03_conditional_mutation_and_relu.py",title:"3. In-Place Mutation & Neural ReLU",badge:"ReLU & np.where",code:P,summary:"Implements in-place ReLU activation (x[x < 0] = 0) and branchless ternary selection using np.where()."},{id:"part4",fileName:"04_ml_outlier_filtering_and_nan_removal.py",title:"4. ML Outlier & NaN Data Cleaning",badge:"ML Data Cleaning",code:C,summary:"Cleans dirty datasets with np.isnan(), synchronized row filtering of X and y, and Z-Score outlier removal."}],d=[{name:"Debangshu",score:78,attendance:92,status:"Pass"},{name:"Susmita",score:42,attendance:65,status:"Fail"},{name:"Swadeep",score:91,attendance:95,status:"Pass"},{name:"Tuhina",score:35,attendance:50,status:"Fail"},{name:"Sachin",score:88,attendance:88,status:"Pass"},{name:"Mahima",score:59,attendance:76,status:"Pass"},{name:"Abhronila",score:95,attendance:98,status:"Pass"},{name:"Rohan",score:48,attendance:62,status:"Fail"},{name:"Priyanka",score:83,attendance:84,status:"Pass"}],M=[{id:"pass",label:"Pass (Score >= 50)",minScore:50,maxScore:100,syntax:"scores >= 50"},{id:"distinction",label:"Distinction (Score >= 75)",minScore:75,maxScore:100,syntax:"scores >= 75"},{id:"remedial",label:"Remedial (Score < 50)",minScore:0,maxScore:49,syntax:"scores < 50"},{id:"mid_range",label:"Mid-Range (60 <= Score <= 85)",minScore:60,maxScore:85,syntax:"(scores >= 60) & (scores <= 85)"}],q=()=>{const[t,y]=c.useState("interactive_masker"),[p,N]=c.useState("part1"),m=h.find(a=>a.id===p)||h[0],[o,u]=c.useState(50),[i,b]=c.useState(100),[r,f]=c.useState([-3.2,4.5,-.8,6.1,-2,1.4]),w=a=>{u(a.minScore),b(a.maxScore)},x=a=>a>=o&&a<=i,l=d.filter(a=>x(a.score));d.map(a=>x(a.score));const j=r.map(a=>a<0?0:a),v=(a,s)=>{const n=[...r];n[a]=parseFloat(s)||0,f(n)};return e.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200",children:[e.jsx("header",{className:"border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"BCAC701B • Segment 9"}),e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30",children:"Module 1 • Topic 8"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3",children:[e.jsx("span",{children:"🎭 Boolean Indexing & Masking"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700",children:"arr[mask] • (a > 50) & (b < 90) • arr[arr < 0] = 0"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Mastering vectorized boolean masks, bitwise compound logic, in-place ReLU activation, and ML outlier filtering."})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:"inline-block text-xs font-mono px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-slate-400",children:["Mentor: ",e.jsx("strong",{className:"text-emerald-400",children:"Sukanta Hui"})," • Barrackpore"]})})]})})}),e.jsx("nav",{className:"bg-slate-950 border-b border-slate-800/80 sticky top-[73px] z-30 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex overflow-x-auto space-x-1 py-2 scrollbar-thin scrollbar-thumb-slate-700",children:[{id:"interactive_masker",label:"🎛️ Interactive Boolean Masker",icon:"🎭"},{id:"relu_simulator",label:"⚡ In-Place Mutation & ReLU",icon:"🧠"},{id:"compound_bitwise",label:"📏 Compound Logic (&, |, ~)",icon:"🧩"},{id:"ml_data_cleaning",label:"🤖 ML Cleaning & Class Subsetting",icon:"🧹"}].map(a=>e.jsxs("button",{onClick:()=>y(a.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${t===a.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[e.jsx("span",{children:a.icon}),e.jsx("span",{children:a.label})]},a.id))})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[t==="interactive_masker"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"🎛️ Interactive Student Exam Score Filter & Boolean Mask Generator"})}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Adjust score boundaries to see how NumPy generates a boolean array of True/False and filters the matching elements in real time."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:M.map(a=>e.jsx("button",{onClick:()=>w(a),className:"px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900/80 text-slate-300 border border-slate-700 hover:border-emerald-500 hover:text-emerald-300 transition-all",children:a.label},a.id))})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800 mb-6",children:[e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Minimum Score Threshold (",e.jsxs("code",{className:"text-emerald-400",children:[">= ",o]}),"):"]}),e.jsx("input",{type:"range",min:"0",max:"100",value:o,onChange:a=>u(Math.min(i,parseInt(a.target.value,10))),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs font-semibold text-slate-400 mb-1",children:["Maximum Score Threshold (",e.jsxs("code",{className:"text-blue-400",children:["<= ",i]}),"):"]}),e.jsx("input",{type:"range",min:"0",max:"100",value:i,onChange:a=>b(Math.max(o,parseInt(a.target.value,10))),className:"w-full accent-blue-500"})]})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"px-3 py-1 rounded-md text-xs font-bold border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-mono",children:["mask = (scores >= ",o,") & (scores <= ",i,")"]}),e.jsxs("span",{className:"text-xs text-slate-300",children:["Matches: ",e.jsx("strong",{className:"text-emerald-400",children:l.length})," of"," ",e.jsx("strong",{className:"text-white",children:d.length})," students (",Math.round(l.length/d.length*100),"%)"]})]}),e.jsx("code",{className:"text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded border border-slate-800",children:"filtered = scores[mask]"})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mb-6",children:d.map((a,s)=>{const n=x(a.score);return e.jsxs("div",{className:`p-3 rounded-xl border transition-all ${n?"bg-emerald-950/20 border-emerald-500/50 shadow-md shadow-emerald-950/30":"bg-slate-950/60 border-slate-800/80 opacity-50"}`,children:[e.jsxs("div",{className:"flex items-center justify-between mb-1",children:[e.jsx("span",{className:"text-xs font-bold text-white",children:a.name}),e.jsxs("span",{className:`text-[10px] font-mono px-2 py-0.5 rounded font-bold ${n?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40":"bg-slate-800 text-slate-500"}`,children:["mask[",s,"] = ",n?"True":"False"]})]}),e.jsxs("div",{className:"flex justify-between text-xs text-slate-400 font-mono",children:[e.jsxs("span",{children:["Score: ",e.jsx("strong",{className:n?"text-emerald-300":"text-slate-400",children:a.score})]}),e.jsxs("span",{children:["Att: ",a.attendance,"%"]})]})]},s)})}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs uppercase font-bold tracking-wider text-slate-400",children:"Resulting 1D Vector: scores[mask]"}),e.jsxs("span",{className:"text-xs font-mono text-emerald-400",children:["shape: (",l.length,",) • ndim: 1"]})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:l.length>0?l.map((a,s)=>e.jsxs("span",{className:"px-3 py-1 bg-gradient-to-r from-emerald-600/30 to-blue-600/30 border border-emerald-500/40 rounded-lg text-xs font-mono font-bold text-white",children:[a.name,": ",a.score]},s)):e.jsx("span",{className:"text-xs text-slate-500 italic",children:"No student scores matched this criteria."})})]})]})}),t==="relu_simulator"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🧠 In-Place Conditional Mutation: Neural Network ReLU Activation"})}),e.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:["In deep learning, the Rectified Linear Unit (ReLU) activation ",e.jsx("code",{className:"text-emerald-400",children:"f(x) = max(0, x)"})," replaces all negative values with 0. In NumPy, this is executed in-place via ",e.jsx("code",{className:"text-white font-mono",children:"arr[arr < 0] = 0"}),"."]}),e.jsx("div",{className:"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-6",children:r.map((a,s)=>e.jsxs("div",{className:"bg-slate-950 p-3 rounded-xl border border-slate-800 space-y-2",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 font-mono block",children:["Neuron x[",s,"]"]}),e.jsx("input",{type:"number",step:"0.5",value:a,onChange:n=>v(s,n.target.value),className:`w-full bg-slate-900 border rounded px-2 py-1 text-xs font-mono font-bold text-center focus:outline-none ${a<0?"border-rose-500/50 text-rose-300":"border-emerald-500/50 text-emerald-300"}`}),e.jsx("div",{className:"text-[10px] text-center font-mono",children:a<0?e.jsx("span",{className:"text-rose-400 font-semibold",children:"Negative ➔ 0"}):e.jsxs("span",{className:"text-emerald-400 font-semibold",children:["Kept: ",a]})})]},s))}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-slate-400 uppercase tracking-wider",children:"1. Pre-Activation Tensor (Raw Logits)"}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["raw_x = np.array([",r.join(", "),"])"]})}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map((a,s)=>e.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-mono ${a<0?"bg-rose-500/20 text-rose-300 border border-rose-500/40":"bg-slate-800 text-slate-300 border border-slate-700"}`,children:a},s))})]}),e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-4 space-y-3",children:[e.jsx("span",{className:"text-xs font-bold text-emerald-400 uppercase tracking-wider",children:"2. Post-Activation (After arr[arr < 0] = 0)"}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-emerald-300 border border-slate-800",children:e.jsx("code",{children:"raw_x[raw_x < 0] = 0 # In-place zero clamping!"})}),e.jsx("div",{className:"flex flex-wrap gap-2",children:j.map((a,s)=>e.jsx("span",{className:`px-2.5 py-1 rounded text-xs font-mono font-bold ${a===0&&r[s]<0?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/50":"bg-slate-800 text-slate-300 border border-slate-700"}`,children:a},s))})]})]})]})}),t==="compound_bitwise"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"📏 Compound Boolean Expressions & Operator Precedence"})}),e.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:["Learn why bitwise operators (",e.jsx("code",{className:"text-emerald-400",children:"&"}),", ",e.jsx("code",{className:"text-blue-400",children:"|"}),", ",e.jsx("code",{className:"text-purple-400",children:"~"}),") are mandatory in NumPy and how the parentheses rule prevents catastrophic syntax errors."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm font-mono font-bold text-emerald-300 bg-slate-800 px-2 py-1 rounded",children:"& (Bitwise AND)"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Element-wise AND"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Evaluates to ",e.jsx("code",{className:"text-emerald-400",children:"True"})," only when BOTH conditions are met simultaneously."]}),e.jsx("div",{className:"bg-slate-950 p-2.5 rounded font-mono text-[11px] text-slate-300 border border-slate-800",children:e.jsx("code",{children:"(scores >= 50) & (scores <= 80)"})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm font-mono font-bold text-blue-300 bg-slate-800 px-2 py-1 rounded",children:"| (Bitwise OR)"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Element-wise OR"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Evaluates to ",e.jsx("code",{className:"text-blue-400",children:"True"})," if AT LEAST ONE condition is satisfied."]}),e.jsx("div",{className:"bg-slate-950 p-2.5 rounded font-mono text-[11px] text-slate-300 border border-slate-800",children:e.jsx("code",{children:"(scores < 40) | (scores > 90)"})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm font-mono font-bold text-purple-300 bg-slate-800 px-2 py-1 rounded",children:"~ (Bitwise NOT)"}),e.jsx("span",{className:"text-[10px] text-slate-400",children:"Inversion / Negation"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Flips True to False and False to True across the entire boolean array."}),e.jsx("div",{className:"bg-slate-950 p-2.5 rounded font-mono text-[11px] text-slate-300 border border-slate-800",children:e.jsx("code",{children:"non_failed = scores[~(scores < 50)]"})})]})]}),e.jsxs("div",{className:"bg-rose-950/30 border border-rose-500/50 rounded-xl p-5 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-300 flex items-center gap-2",children:e.jsx("span",{children:"🚨 The Mandatory Parentheses Rule"})}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In Python, the bitwise operator ",e.jsx("code",{className:"text-rose-300",children:"&"})," has a higher precedence than comparison operators (",e.jsx("code",{className:"text-white",children:">"}),", ",e.jsx("code",{className:"text-white",children:"<"}),")."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-900/80 rounded border border-rose-500/40 text-rose-300",children:[e.jsx("p",{className:"text-slate-500 font-sans font-bold",children:"❌ Fatal Error (Without Parentheses):"}),e.jsx("p",{className:"mt-1",children:"scores > 50 & scores < 80"}),e.jsx("p",{className:"text-[10px] text-slate-400 font-sans mt-1",children:"Evaluated as: scores > (50 & scores) < 80 ➔ Crashes!"})]}),e.jsxs("div",{className:"p-3 bg-slate-900/80 rounded border border-emerald-500/40 text-emerald-300",children:[e.jsx("p",{className:"text-slate-500 font-sans font-bold",children:"✅ Correct Form (With Parentheses):"}),e.jsx("p",{className:"mt-1",children:"(scores > 50) & (scores < 80)"}),e.jsx("p",{className:"text-[10px] text-slate-400 font-sans mt-1",children:"Evaluates both sub-masks first, then performs element-wise AND."})]})]})]})]})}),t==="ml_data_cleaning"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🤖 4 Essential Machine Learning Use Cases"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"From outlier elimination to missing value filtering, boolean indexing is the backbone of ML data preparation."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"📊"}),e.jsx("h3",{className:"text-sm font-bold text-emerald-400",children:"1. Statistical Outlier Removal (3-Sigma Rule)"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Filter out anomalous data points located more than 3 standard deviations away from the mean."}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["mu = np.mean(X)",e.jsx("br",{}),"sigma = np.std(X)",e.jsx("br",{}),"clean_X = X[np.abs(X - mu) <= 3 * sigma]"]})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"🩹"}),e.jsx("h3",{className:"text-sm font-bold text-blue-400",children:"2. Missing Value / NaN Filtering"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Never use ",e.jsx("code",{className:"text-white",children:"x != np.nan"}),"! Always use ",e.jsx("code",{className:"text-blue-300",children:"~np.isnan()"})," to remove corrupted float NaNs."]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["# Select non-NaN rows only",e.jsx("br",{}),"valid_data = raw_data[~np.isnan(raw_data)]"]})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"🎯"}),e.jsx("h3",{className:"text-sm font-bold text-purple-400",children:"3. Class-Specific Feature Subsetting"})]}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Extract all sample feature rows in matrix ",e.jsx("code",{className:"text-white",children:"X"})," belonging to class 1 for visualization or balancing."]}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["# y is 1D array of target labels",e.jsx("br",{}),"X_positive = X[y == 1]",e.jsx("br",{}),"X_negative = X[y == 0]"]})})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xl",children:"⚖️"}),e.jsx("h3",{className:"text-sm font-bold text-amber-400",children:"4. Binary Classification Thresholding"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Convert model probabilities into discrete 0/1 predictions using vectorized comparison and dtype casting."}),e.jsx("div",{className:"bg-slate-950 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["probs = model.predict_proba(X_test)[:, 1]",e.jsx("br",{}),"preds = (probs >= 0.5).astype(int)"]})})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect boolean filtering, compound bitwise conditions, ReLU mutation, or ML outlier cleaning"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:h.map(a=>e.jsxs("button",{onClick:()=>N(a.id),className:`p-3 rounded-xl border text-left transition-all ${p===a.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${p===a.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:a.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:a.title})]},a.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:m.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:m.summary})]})}),e.jsx(_,{fileModule:m.code,title:m.fileName})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Boolean Indexing Pitfalls & How to Avoid Them"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"1. Using Python `and` / `or` Keywords"}),e.jsxs("p",{children:["Writing ",e.jsx("code",{className:"text-white",children:"a > 0 and a < 10"})," crashes with ",e.jsx("code",{className:"text-rose-300",children:"ValueError: The truth value of an array is ambiguous"}),". Always use ",e.jsx("code",{className:"text-emerald-400",children:"(a > 0) & (a < 10)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"2. Comparing Directly with NaN: `x == np.nan`"}),e.jsxs("p",{children:["By IEEE 754 standard, ",e.jsx("code",{className:"text-white",children:"np.nan == np.nan"})," is ",e.jsx("code",{className:"text-rose-300",children:"False"}),". Therefore, ",e.jsx("code",{className:"text-white",children:"arr[arr == np.nan]"})," matches NOTHING! Always use ",e.jsx("code",{className:"text-blue-300",children:"np.isnan(arr)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"3. Expecting 2D Output from 2D Boolean Masking"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"mat[mat > 50]"})," always returns a 1D vector because the count of True items per row varies. Use ",e.jsx("code",{className:"text-purple-300",children:"np.where(mat > 50, mat, 0)"})," if you must preserve 2D shape."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"4. Boolean Mask Dimension Mismatch"}),e.jsxs("p",{children:["Indexing an array of length 10 with a boolean mask of length 9 raises an ",e.jsx("code",{className:"text-rose-300",children:"IndexError"}),". Ensure masks match the target axis dimension."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💬 Barrackpore Classroom Q&A"})}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono",children:"Coder & AccoTax Live Session"})]}),e.jsx("div",{className:"space-y-3",children:[{student:"Debangshu",avatar:"👨‍💻",question:"Sir, why does NumPy give an error when I use 'and' between two conditions on an array of marks?",answer:"Debangshu, Python's 'and' keyword tries to evaluate the entire array as a single boolean entity. Since an array has many booleans, Python complains that its truth value is ambiguous! To check element-by-element, we must use the bitwise '&' operator wrapped in parentheses: (marks >= 40) & (marks <= 80)."},{student:"Susmita",avatar:"👩‍💻",question:"How does NumPy count the number of passed students with np.sum(scores >= 50)?",answer:"Susmita, in Python and NumPy, boolean True is mathematically treated as 1, and False as 0! When np.sum() adds up all the True (1) and False (0) values in the mask, it gives the exact count of students who passed."},{student:"Swadeep",avatar:"👨‍🎓",question:"If I want to replace all negative numbers in my neural network weights with 0, is arr[arr < 0] = 0 faster than a Python for-loop?",answer:"Infinitely faster, Swadeep! arr[arr < 0] = 0 executes entirely inside compiled C without Python interpreter overhead. On a 1-million weight tensor, it runs in under 1 millisecond compared to 200+ milliseconds with a Python loop."}].map((a,s)=>e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300",children:[e.jsx("span",{children:a.avatar}),e.jsxs("span",{children:[a.student," asks:"]})]}),e.jsxs("p",{className:"text-xs text-slate-300 italic pl-6",children:['"',a.question,'"']}),e.jsxs("div",{className:"flex items-start gap-2 pt-2 border-t border-slate-800 text-xs text-emerald-300",children:[e.jsx("span",{className:"font-bold text-emerald-400 whitespace-nowrap",children:"Sukanta Sir:"}),e.jsx("p",{className:"text-slate-300",children:a.answer})]})]},s))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"❓ Frequently Asked Questions & Practice Problems"})}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[g.length," Questions & Answers"]})]}),e.jsx(k,{questions:g})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📄 Printable Topic Summary Note"})}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700",children:"topic8_note.txt"})]}),e.jsx(T,{text:E,fileName:"topic8_note.txt"})]}),e.jsx(S,{})]})]})};export{q as default};
