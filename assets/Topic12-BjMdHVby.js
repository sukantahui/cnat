import{b as r,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as O}from"./PythonFileLoader-CiS1GfkF.js";import{F as D}from"./FAQTemplate-D_90hN4m.js";import{P as W}from"./PlainTextPrint-yt10TRX1.js";import{T as H}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const Y=`"""\r
================================================================================\r
Topic 12 - Script 01: Unary and Binary Universal Functions (ufuncs)\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- What is a ufunc: C-level vectorized function operating element-by-element\r
- Unary ufuncs: np.abs(), np.sqrt(), np.exp(), np.log(), np.sin()\r
- Binary ufuncs: np.add(), np.maximum(), np.minimum(), np.power()\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_ufunc_basics():\r
    print("=" * 65)\r
    print("1. UNARY UNIVERSAL FUNCTIONS (1 INPUT -> 1 OUTPUT)")\r
    print("=" * 65)\r
\r
    z = np.array([-2.5, 0.0, 1.5, 3.0])\r
    print("Input Vector z:", z)\r
    print("-" * 45)\r
    print("np.abs(z)  :", np.abs(z))\r
    print("np.exp(z)  :", np.exp(z))\r
    print("np.sqrt(|z|):", np.sqrt(np.abs(z)))\r
    print("np.sin(z)  :", np.sin(z))\r
\r
    print("\\n" + "=" * 65)\r
    print("2. BINARY UNIVERSAL FUNCTIONS (2 INPUTS -> 1 OUTPUT)")\r
    print("=" * 65)\r
    \r
    a = np.array([10, 50, 30, 80])\r
    b = np.array([25, 40, 60, 20])\r
\r
    print("Array a:", a)\r
    print("Array b:", b)\r
    print("-" * 45)\r
    print("np.maximum(a, b) :", np.maximum(a, b), " (Element-wise ceiling)")\r
    print("np.minimum(a, b) :", np.minimum(a, b), " (Element-wise floor)")\r
    print("np.power(a, 2)   :", np.power(a, 2))\r
\r
if __name__ == "__main__":\r
    demonstrate_ufunc_basics()\r
`,V=`"""\r
================================================================================\r
Topic 12 - Script 02: Special ufunc Methods (.reduce, .accumulate, .outer)\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- ufunc.reduce(arr): Collapsing dimensions with repetitive operations\r
- ufunc.accumulate(arr): Storing cumulative intermediate results (prefix sums)\r
- ufunc.outer(A, B): Computing pairwise operations for all pairs\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_ufunc_methods():\r
    print("=" * 65)\r
    print("1. .reduce(): DIMENSION COLLAPSING")\r
    print("=" * 65)\r
\r
    arr = np.array([1, 2, 3, 4, 5])\r
    print("Array:", arr)\r
    print("np.add.reduce(arr)      :", np.add.reduce(arr), "(1+2+3+4+5 = 15)")\r
    print("np.multiply.reduce(arr) :", np.multiply.reduce(arr), "(1*2*3*4*5 = 120)")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. .accumulate(): CUMULATIVE PREFIX SUMS")\r
    print("=" * 65)\r
    \r
    # Cumulative student attendance hours over 5 days\r
    daily_hours = np.array([2.5, 3.0, 1.5, 4.0, 2.0])\r
    print("Daily Study Hours           :", daily_hours)\r
    print("np.add.accumulate(daily_hrs):", np.add.accumulate(daily_hours))\r
\r
    print("\\n" + "=" * 65)\r
    print("3. .outer(): PAIRWISE OPERATION MATRICES")\r
    print("=" * 65)\r
    \r
    x = np.array([1, 2, 3])\r
    y = np.array([10, 20, 30])\r
    print("x:", x)\r
    print("y:", y)\r
    print("\\nnp.multiply.outer(x, y):\\n", np.multiply.outer(x, y))\r
    print("\\nnp.subtract.outer(x, y) (Pairwise Difference Matrix):\\n", np.subtract.outer(x, y))\r
\r
if __name__ == "__main__":\r
    demonstrate_ufunc_methods()\r
`,X=`"""\r
================================================================================\r
Topic 12 - Script 03: The \`out=\` Parameter for Zero-Allocation Pipelines\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- The \`out=\` parameter supported by all NumPy ufuncs\r
- Reusing existing memory buffers to prevent memory allocation in tight training loops\r
- Comparing memory addresses of output vs input buffers\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_out_parameter():\r
    print("=" * 65)\r
    print("ZERO ALLOCATION PIPELINE WITH \`out=\`")\r
    print("=" * 65)\r
\r
    # 1. Standard creation allocates a new array\r
    x = np.array([1.0, 2.0, 3.0, 4.0])\r
    orig_addr = x.ctypes.data\r
    print("Original x address:", hex(orig_addr))\r
\r
    # Standard exponentiation\r
    y_new = np.exp(x)\r
    print("y_new address     :", hex(y_new.ctypes.data), "(Brand new memory allocated!)")\r
\r
    # In-place write using out=x\r
    np.exp(x, out=x)\r
    print("x address after \`np.exp(x, out=x)\`:", hex(x.ctypes.data), "(Exact same buffer reused!)")\r
    print("x values updated in-place         :", x)\r
\r
    # 2. Writing to a pre-allocated output buffer\r
    buffer = np.empty(4, dtype=np.float64)\r
    a = np.array([10.0, 20.0, 30.0, 40.0])\r
    b = np.array([1.0, 2.0, 3.0, 4.0])\r
\r
    np.multiply(a, b, out=buffer)\r
    print("\\nPre-allocated buffer result of np.multiply(a, b, out=buffer):", buffer)\r
\r
if __name__ == "__main__":\r
    demonstrate_out_parameter()\r
`,G=`"""\r
================================================================================\r
Topic 12 - Script 04: Vectorized Neural Activations & Log Loss with ufuncs\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Implementing Sigmoid: 1 / (1 + np.exp(-z))\r
- Implementing Numerically Stable Softmax: exp(z - max(z)) / sum(exp(z - max(z)))\r
- Binary Cross-Entropy Loss (Log Loss) with np.log() and clipping (np.clip)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def sigmoid(z):\r
    return 1.0 / (1.0 + np.exp(-z))\r
\r
def softmax(z):\r
    # Subtract max for numerical stability (prevents np.exp() overflow to inf)\r
    exp_shifted = np.exp(z - np.max(z))\r
    return exp_shifted / np.sum(exp_shifted)\r
\r
def binary_cross_entropy(y_true, y_pred):\r
    eps = 1e-15 # Epsilon clipping to prevent log(0) = -inf\r
    y_pred_clipped = np.clip(y_pred, eps, 1.0 - eps)\r
    loss = -np.mean(y_true * np.log(y_pred_clipped) + (1.0 - y_true) * np.log(1.0 - y_pred_clipped))\r
    return loss\r
\r
def demonstrate_ml_ufuncs():\r
    print("=" * 65)\r
    print("1. VECTORIZED SIGMOID ACTIVATION")\r
    print("=" * 65)\r
    logits = np.array([-4.0, -1.0, 0.0, 1.0, 4.0])\r
    probs = sigmoid(logits)\r
    print("Logits (Raw scores) :", logits)\r
    print("Sigmoid Probabilities:", np.round(probs, 4))\r
\r
    print("\\n" + "=" * 65)\r
    print("2. NUMERICALLY STABLE SOFTMAX")\r
    print("=" * 65)\r
    class_logits = np.array([2.0, 1.0, 0.1])\r
    class_probs = softmax(class_logits)\r
    print("Class Logits :", class_logits)\r
    print("Softmax Probs:", np.round(class_probs, 4), f"(Sum = {np.sum(class_probs):.1f})")\r
\r
    print("\\n" + "=" * 65)\r
    print("3. BINARY CROSS-ENTROPY LOSS (LOG LOSS)")\r
    print("=" * 65)\r
    y_true = np.array([1, 0, 1, 1, 0])\r
    y_pred = np.array([0.92, 0.10, 0.85, 0.78, 0.20])\r
    bce = binary_cross_entropy(y_true, y_pred)\r
    print(f"Calculated Binary Cross-Entropy Loss: {bce:.4f}")\r
\r
if __name__ == "__main__":\r
    demonstrate_ml_ufuncs()\r
`,Z=`========================================================\r
NUMPY ESSENTIALS — TOPIC 12: UNIVERSAL FUNCTIONS (UFUNCS)\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9 • Module 1\r
========================================================\r
\r
1. WHAT IS A UFUNC?\r
-------------------\r
A Universal Function (ufunc) is a C-implemented function that operates\r
element-by-element on ndarrays, supporting vectorized broadcasting,\r
type coercion, and custom reduction methods.\r
\r
2. UNARY VS BINARY UFUNCS:\r
---------------------------\r
Unary ufuncs (Single array input):\r
  - Math:     np.sqrt(), np.exp(), np.log(), np.abs(), np.negative()\r
  - Trig:     np.sin(), np.cos(), np.tan()\r
  - Rounding: np.round(), np.floor(), np.ceil(), np.trunc()\r
\r
Binary ufuncs (Two array inputs):\r
  - Arithmetic: np.add(), np.subtract(), np.multiply(), np.divide()\r
  - Extrema:    np.maximum(), np.minimum(), np.fmax(), np.fmin()\r
  - Powers:     np.power(), np.remainder(), np.copysign()\r
\r
3. ADVANCED UFUNC METHODS (ON EVERY BINARY UFUNC):\r
---------------------------------------------------\r
1. .reduce(arr, axis):\r
   Collapses an axis by repeated application:\r
   np.add.reduce(arr) ➔ Same as np.sum(arr)\r
   np.multiply.reduce(arr) ➔ Same as np.prod(arr)\r
\r
2. .accumulate(arr, axis):\r
   Running cumulative accumulation:\r
   np.add.accumulate([1, 2, 3, 4]) ➔ [1, 3, 6, 10] (cumsum)\r
\r
3. .outer(a, b):\r
   Computes outer table for all element pairs:\r
   np.multiply.outer([1, 2, 3], [10, 20]) ➔ 3x2 matrix\r
\r
4. .at(arr, indices, val):\r
   Unbuffered in-place modification at repeated indices:\r
   np.add.at(arr, [0, 0], 1) ➔ Adds 2 to arr[0]\r
\r
5. The 'out' Parameter (Zero-Memory Overhead):\r
   np.sqrt(X, out=X) ➔ Writes result directly into X buffer in-place!\r
\r
4. UFUNCS IN MACHINE LEARNING & DEEP LEARNING:\r
----------------------------------------------\r
1. Sigmoid Activation:\r
   sigmoid = 1.0 / (1.0 + np.exp(-z))\r
\r
2. Softmax Activation (with Max Subtraction):\r
   exp_shifted = np.exp(z - np.max(z, axis=-1, keepdims=True))\r
   softmax = exp_shifted / np.sum(exp_shifted, axis=-1, keepdims=True)\r
\r
3. Binary Cross-Entropy Loss:\r
   loss = -np.mean(y * np.log(p + 1e-15) + (1 - y) * np.log(1 - p + 1e-15))\r
\r
4. ReLU Activation:\r
   relu = np.maximum(0, x)\r
\r
5. QUICK REVISION CHECKLIST:\r
-----------------------------\r
  □ ufuncs run compiled C loops with hardware SIMD vectorization\r
  □ Unary ufuncs take 1 input; binary ufuncs take 2 inputs\r
  □ Use 'out=...' to avoid temporary memory allocations in loops\r
  □ Binary ufuncs provide .reduce(), .accumulate(), .outer(), and .at()\r
  □ Activation functions (Sigmoid, Softmax, ReLU) rely on ufuncs (np.exp, np.maximum)\r
  □ Always add small epsilon (1e-15) inside np.log() to prevent log(0) = -inf\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,w=[{id:1,question:"What is a Universal Function (ufunc) in NumPy?",options:["A fast, compiled C-implemented function that operates element-by-element on ndarrays, supporting broadcasting, type casting, and reduction methods","A Python function that can run in any operating system without Python installed","A function that works universally on databases and spreadsheets","A JavaScript function imported into Python"],correctAnswer:0,explanation:"A ufunc is a vectorized wrapper for functions that execute element-wise operations on NumPy arrays in compiled C. They support broadcasting, type coercion, and special methods like `.reduce()`, `.accumulate()`, and `.outer()`."},{id:2,question:"What is the distinction between Unary ufuncs and Binary ufuncs?",options:["Unary ufuncs take a single input array (e.g. np.sqrt, np.exp), while Binary ufuncs take two input arrays (e.g. np.add, np.maximum)","Unary ufuncs only work on integers, while Binary ufuncs work on floats","Unary ufuncs return booleans, while Binary ufuncs return numbers","Unary ufuncs are slower than Binary ufuncs"],correctAnswer:0,explanation:"Unary ufuncs operate on one operand (e.g., `np.sin`, `np.log`, `np.abs`), whereas binary ufuncs take two operands and perform element-wise combinations (e.g., `np.multiply`, `np.maximum`, `np.power`)."},{id:3,question:"What is the critical difference between `np.maximum(a, b)` and `np.max(a)`?",options:["`np.maximum(a, b)` is an element-wise ufunc comparing two arrays and returning an array of larger values, while `np.max(a)` is an aggregation function that collapses an array into a single maximum scalar","`np.maximum` only works on 1D arrays, while `np.max` works on 2D arrays","They are identical aliases","`np.max` compares two arrays element-by-element"],correctAnswer:0,explanation:"`np.maximum(a, b)` performs element-wise comparisons between two arrays (or an array and a scalar) preserving shape. `np.max(a)` (or `a.max()`) aggregates an array along axes, reducing dimensions to find the overall maximum."},{id:4,question:"How do you implement the ReLU (Rectified Linear Unit) activation function using the `np.maximum` binary ufunc?",options:["relu = np.maximum(0, x)","relu = np.max(0, x)","relu = np.relu(x)","relu = np.fmin(0, x)"],correctAnswer:0,explanation:"`np.maximum(0, x)` compares scalar 0 against every element in array `x` via broadcasting, clamping all negative values to 0 while leaving positive values unchanged."},{id:5,question:"What does the `.reduce()` method do on a binary ufunc like `np.add.reduce(arr)`?",options:["Repeatedly applies the operation across elements of the array along an axis until a reduced array or scalar remains (equivalent to `np.sum(arr)`)","Divides all elements by 2","Removes duplicate values from the array","Compresses the array to 8-bit integers"],correctAnswer:0,explanation:"`.reduce()` collapses an array along an axis by repeatedly applying the binary ufunc. `np.add.reduce(arr)` performs `((a[0] + a[1]) + a[2]) + ...`, identical to `np.sum(arr)`."},{id:6,question:"What is the result of `np.multiply.reduce(np.array([1, 2, 3, 4, 5]))`?",options:["120 (Computes the cumulative product / factorial 1*2*3*4*5)","15","array([1, 2, 6, 24, 120])","5"],correctAnswer:0,explanation:"`np.multiply.reduce()` computes the product of all elements in the array: 1 * 2 * 3 * 4 * 5 = 120, equivalent to `np.prod()`."},{id:7,question:"What does `np.add.accumulate(np.array([1, 2, 3, 4]))` compute?",options:["`array([1, 3, 6, 10])` (Cumulative running sum)","`10` (Total sum)","`array([4, 3, 2, 1])`","`array([1, 2, 3, 4])`"],correctAnswer:0,explanation:"`.accumulate()` stores the intermediate results of the reduction at each step. `np.add.accumulate([1, 2, 3, 4])` gives `[1, 1+2=3, 3+3=6, 6+4=10]`, identical to `np.cumsum()`."},{id:8,question:"What does `np.multiply.outer(np.array([1, 2, 3]), np.array([10, 20]))` return?",options:["A (3, 2) multiplication table: `array([[10, 20], [20, 40], [30, 60]])`","A 1D array `[10, 40]`","A scalar `120`","An IndexError"],correctAnswer:0,explanation:"`.outer(A, B)` applies the ufunc across all pairs of elements from A and B, producing an outer product matrix where `result[i, j] = A[i] * B[j]`."},{id:9,question:"What is the purpose of passing the `out` parameter in ufuncs, e.g. `np.sqrt(X, out=X)`?",options:["To write the computed output directly into an existing memory buffer in-place without allocating temporary heap memory","To print the output to standard console","To format the output as a string","To export the output to a text file"],correctAnswer:0,explanation:"Passing an existing array to `out=...` directs the C routine to write directly into that memory buffer, eliminating temporary buffer allocations during large model training loops."},{id:10,question:"How is the Sigmoid activation function computed using NumPy ufuncs for an input logit vector `z`?",options:["sigmoid = 1.0 / (1.0 + np.exp(-z))","sigmoid = np.log(1.0 + np.exp(z))","sigmoid = np.sin(z) / np.cos(z)","sigmoid = 1.0 / np.sqrt(z)"],correctAnswer:0,explanation:"The sigmoid formula is σ(z) = 1 / (1 + e^(-z)). In NumPy, `np.exp(-z)` computes the exponential element-wise, mapping values into the `(0, 1)` probability range."},{id:11,question:"Why is `z - np.max(z)` subtracted before computing `np.exp(z)` in the Softmax activation function?",options:["To prevent numerical overflow (`np.exp(1000)` produces `inf` / `nan`), ensuring that the largest exponent is `np.exp(0) = 1.0`","To convert all logits to positive numbers","To make the sum of exponentials equal to 0","To sort the probabilities in descending order"],correctAnswer:0,explanation:"Large positive logits (e.g. z=1000) cause `np.exp(z)` to overflow to `inf`. Subtracting the maximum logit shifts all values so the maximum exponent is `exp(0) = 1.0`, which prevents numerical instability while producing mathematically identical softmax probabilities."},{id:12,question:"Why is a small epsilon `1e-15` added inside `np.log(probs + 1e-15)` when computing Cross-Entropy Loss?",options:["Because `np.log(0.0)` evaluates to `-inf`, which produces `nan` during loss computation","Because Python logarithms only work on odd numbers","To increase the precision of float32 to float64","Because logarithms cannot compute decimal fractions"],correctAnswer:0,explanation:"In binary cross-entropy, if a model predicts probability `0.0` for a true class, `np.log(0.0)` yields `-inf`. Adding a small epsilon like `1e-15` prevents division-by-zero / log(0) explosions."},{id:13,question:"What does `np.log1p(x)` calculate with high numerical precision for very small `x`?",options:["Natural logarithm of (1 + x)","Natural logarithm of (1 - x)","1 divided by log(x)","log(x) + 1"],correctAnswer:0,explanation:"`np.log1p(x)` computes `log(1 + x)` with high numerical accuracy when `x` is close to zero, avoiding precision loss from floating-point roundoff."},{id:14,question:"What does `np.expm1(x)` calculate?",options:["`exp(x) - 1` with high accuracy for small `x`","`exp(x - 1)`","`1 / exp(x)`","`exp(1)`"],correctAnswer:0,explanation:"`np.expm1(x)` calculates `e^x - 1` accurately for values of `x` near zero, preventing floating-point cancellation errors."},{id:15,question:"What is the difference between `np.fmax(a, b)` and `np.maximum(a, b)` when comparing with `np.nan`?",options:["`np.fmax` ignores `np.nan` and returns the valid numerical value, while `np.maximum` propagates `np.nan` into the output","`np.maximum` ignores `np.nan`","They both replace `np.nan` with 0","There is no difference"],correctAnswer:0,explanation:"If one element is `np.nan`, `np.maximum(10, np.nan)` yields `nan`. In contrast, `np.fmax(10, np.nan)` ignores the NaN and returns `10.0`."},{id:16,question:"What does `np.clip(arr, a_min, a_max)` do to an array?",options:["Clamps all values in `arr` so they are bounded between `a_min` and `a_max`","Deletes elements outside the range `[a_min, a_max]`","Sorts elements between `a_min` and `a_max`","Normalizes the array between -1 and 1"],correctAnswer:0,explanation:"`np.clip(arr, min, max)` sets elements less than `a_min` to `a_min`, and elements greater than `a_max` to `a_max`."},{id:17,question:"What does `np.copysign(np.array([1, -2, 3]), np.array([-1, 1, -1]))` return?",options:["`array([-1.,  2., -3.])`","`array([ 1., -2.,  3.])`","`array([-1., -2., -3.])`","`array([ 1.,  1.,  1.])`"],correctAnswer:0,explanation:"`np.copysign(x1, x2)` returns the absolute value of `x1` with the sign of `x2`: magnitude 1 with sign '-' -> -1.0; magnitude 2 with sign '+' -> 2.0; magnitude 3 with sign '-' -> -3.0."},{id:18,question:"What is the performance characteristic of `np.vectorize()` compared to true C ufuncs?",options:["`np.vectorize()` is merely a Python `for` loop under the hood provided for convenience; it does NOT provide C-speed optimization like built-in ufuncs","`np.vectorize()` compiles Python code into CUDA GPU kernels","`np.vectorize()` runs faster than native C ufuncs","`np.vectorize()` compresses array data in RAM"],correctAnswer:0,explanation:"`np.vectorize()` provides a convenient interface for applying Python functions to arrays, but internally it executes a Python loop and does not benefit from native C compilation or SIMD vectorization."},{id:19,question:"What does `np.floor(np.array([1.7, 2.2, -1.5]))` return?",options:["`array([ 1.,  2., -2.])`","`array([ 1.,  2., -1.])`","`array([ 2.,  3., -1.])`","`array([ 1.,  2.,  0.])`"],correctAnswer:0,explanation:"`np.floor()` rounds each element down to the nearest integer: 1.7 -> 1.0, 2.2 -> 2.0, and -1.5 -> -2.0."},{id:20,question:"What does `np.ceil(np.array([1.2, 2.8, -1.9]))` return?",options:["`array([ 2.,  3., -1.])`","`array([ 1.,  2., -2.])`","`array([ 2.,  3., -2.])`","`array([ 1.,  2., -1.])`"],correctAnswer:0,explanation:"`np.ceil()` rounds each element up to the nearest integer: 1.2 -> 2.0, 2.8 -> 3.0, and -1.9 -> -1.0."},{id:21,question:"What is `np.hypot(3, 4)`?",options:["5.0 (Calculates the Euclidean hypotenuse `sqrt(3^2 + 4^2)`)","7.0","12.0","25.0"],correctAnswer:0,explanation:"`np.hypot(x1, x2)` computes `sqrt(x1**2 + x2**2)` element-wise, avoiding overflow for intermediate values."},{id:22,question:"What is `np.sign(np.array([-15, 0, 42]))`?",options:["`array([-1,  0,  1])`","`array([ 1,  0,  1])`","`array([-1, -1,  1])`","`array([15,  0, 42])`"],correctAnswer:0,explanation:"`np.sign(x)` returns `-1` for negative numbers, `0` for zero, and `1` for positive numbers."},{id:23,question:"How do you calculate the element-wise natural exponential minus one for small learning rates in ML?",options:["np.expm1(lr)","np.exp(lr) - 1","np.log1p(lr)","np.exp_small(lr)"],correctAnswer:0,explanation:"`np.expm1()` is specifically engineered to compute `exp(x) - 1` without losing floating point precision when `x` is very small."},{id:24,question:"Can binary ufuncs broadcast operands of different shapes like `(3, 1)` and `(1, 4)`?",options:["Yes, all ufuncs automatically apply full NumPy broadcasting rules to input operands","No, ufuncs only accept identical shapes","Only if both arrays are 1D","Only for addition"],correctAnswer:0,explanation:"All universal functions fully adhere to NumPy broadcasting semantics. Passing `(3, 1)` and `(1, 4)` to `np.maximum` broadcasts both arrays into a `(3, 4)` matrix."},{id:25,question:"What is Sukanta Hui's golden rule for computing softmax and cross-entropy in Barrackpore ML projects?",options:["Always subtract `np.max(z)` before `np.exp(z)` in Softmax to prevent overflow, and always add a small epsilon `1e-15` inside `np.log()` to prevent `-inf` crashes","Always round probabilities to whole integers","Never use ufuncs with more than 100 features","Always divide by the learning rate before calling ufuncs"],correctAnswer:0,explanation:"To ensure bulletproof numerical stability in deep learning pipelines, always subtract the maximum logit before exponentiation in softmax and add an epsilon inside `np.log` to avoid `-inf` loss explosions."}],x=[{id:"part1",fileName:"01_unary_and_binary_ufunc_basics.py",title:"1. Unary & Binary ufuncs Basics",badge:"Unary & Binary",code:Y,summary:"Demonstrates fast C-level vectorized math: unary (exp, log, sin, sqrt) and binary (maximum, minimum, power) functions."},{id:"part2",fileName:"02_ufunc_methods_reduce_accumulate_outer.py",title:"2. Special ufunc Methods (.reduce, .accumulate, .outer)",badge:"Special Methods",code:V,summary:"Explores .reduce() for collapsing axes, .accumulate() for running cumulative sums, and .outer() for pairwise grids."},{id:"part3",fileName:"03_out_parameter_for_memory_reuse.py",title:"3. Zero Allocation with `out=`",badge:"Memory & `out=`",code:X,summary:"Demonstrates zero-copy memory reuse with the out= parameter, reusing existing RAM buffers to eliminate garbage collection."},{id:"part4",fileName:"04_ml_activation_functions_and_losses.py",title:"4. Neural Activations & Log Loss",badge:"ML Activations & BCE",code:G,summary:"Implements Sigmoid, numerically stable Softmax, and Binary Cross-Entropy Loss with epsilon clipping."}],h=[{id:"sqrt",label:"np.sqrt(x)",math:"√x",compute:t=>t<0?"nan":parseFloat(Math.sqrt(t).toFixed(3))},{id:"exp",label:"np.exp(x)",math:"e^x",compute:t=>parseFloat(Math.exp(t).toFixed(3))},{id:"log",label:"np.log(x)",math:"ln(x)",compute:t=>t<=0?t===0?"-inf":"nan":parseFloat(Math.log(t).toFixed(3))},{id:"abs",label:"np.abs(x)",math:"|x|",compute:t=>Math.abs(t)},{id:"round",label:"np.round(x)",math:"round(x)",compute:t=>Math.round(t)},{id:"floor",label:"np.floor(x)",math:"⌊x⌋",compute:t=>Math.floor(t)},{id:"ceil",label:"np.ceil(x)",math:"⌈x⌉",compute:t=>Math.ceil(t)}],b=[{id:"maximum",label:"np.maximum(a, b)",desc:"Element-wise maximum",compute:(t,s)=>Math.max(t,s)},{id:"minimum",label:"np.minimum(a, b)",desc:"Element-wise minimum",compute:(t,s)=>Math.min(t,s)},{id:"power",label:"np.power(a, b)",desc:"a raised to power b",compute:(t,s)=>Math.pow(t,s)},{id:"hypot",label:"np.hypot(a, b)",desc:"Hypotenuse √(a² + b²)",compute:(t,s)=>parseFloat(Math.hypot(t,s).toFixed(3))}],ie=()=>{const[t,s]=r.useState("unary_binary_gallery"),[p,S]=r.useState("part1"),l=x.find(n=>n.id===p)||x[0],[f,_]=r.useState("exp"),[y,A]=r.useState([-2,0,1.5,4,9]),[g,C]=r.useState("maximum"),[T,K]=r.useState([10,-5,30,45]),[z,Q]=r.useState([20,0,15,60]),[m,U]=r.useState(1.5),[c,P]=r.useState([2,1,.1]),[u,I]=r.useState(.85),[d,L]=r.useState(1),M=h.find(n=>n.id===f)||h[1],k=b.find(n=>n.id===g)||b[0],B=(1/(1+Math.exp(-m))).toFixed(4),E=Math.max(...c),N=c.map(n=>Math.exp(n-E)),q=N.reduce((n,a)=>n+a,0),F=N.map(n=>(n/q).toFixed(4)),v=1e-15,j=Math.min(Math.max(u,v),1-v),R=(-(d*Math.log(j)+(1-d)*Math.log(1-j))).toFixed(4);return e.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200",children:[e.jsx("header",{className:"border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"BCAC701B • Segment 9"}),e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30",children:"Module 1 • Topic 12"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3",children:[e.jsx("span",{children:"⚡ Universal Functions (ufuncs)"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700",children:"np.exp() • np.maximum() • .reduce() • .accumulate()"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Mastering fast C-vectorized math wrappers, unary & binary ufuncs, reduction methods, and ML activation functions."})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:"inline-block text-xs font-mono px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-slate-400",children:["Mentor: ",e.jsx("strong",{className:"text-emerald-400",children:"Sukanta Hui"})," • Barrackpore"]})})]})})}),e.jsx("nav",{className:"bg-slate-950 border-b border-slate-800/80 sticky top-[73px] z-30 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex overflow-x-auto space-x-1 py-2 scrollbar-thin scrollbar-thumb-slate-700",children:[{id:"unary_binary_gallery",label:"🧪 Unary & Binary ufunc Gallery",icon:"🔬"},{id:"advanced_methods",label:"🧬 .reduce(), .accumulate(), .outer()",icon:"📐"},{id:"ml_activation_loss",label:"🤖 ML Activations & Loss Functions",icon:"🧠"},{id:"numerical_stability",label:"🛡️ Numerical Stability & Overflows",icon:"⚖️"}].map(n=>e.jsxs("button",{onClick:()=>s(n.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${t===n.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[e.jsx("span",{children:n.icon}),e.jsx("span",{children:n.label})]},n.id))})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[t==="unary_binary_gallery"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🧪 Interactive Universal Function (ufunc) Gallery"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Explore how NumPy executes element-wise math transformations in compiled C using CPU SIMD vectorization."}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 mb-6 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-blue-400",children:"1. Unary ufuncs:"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Single array input (1 operand)"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:h.map(n=>e.jsx("button",{onClick:()=>_(n.id),className:`px-3 py-1 rounded text-xs font-mono font-bold border transition-all ${f===n.id?"bg-blue-600 text-white border-blue-400 shadow":"bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:n.label},n.id))})]}),e.jsx("div",{className:"grid grid-cols-5 gap-3",children:y.map((n,a)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 font-mono",children:["x[",a,"]:"]}),e.jsx("input",{type:"number",step:"0.5",value:n,onChange:o=>{const i=[...y];i[a]=parseFloat(o.target.value)||0,A(i)},className:"w-full bg-slate-900 border border-slate-700 rounded p-1.5 text-center font-mono font-bold text-white text-xs focus:border-blue-500 focus:outline-none"}),e.jsx("div",{className:"bg-blue-950/40 border border-blue-500/40 rounded p-1.5 text-center font-mono text-xs font-bold text-blue-300",children:M.compute(n)})]},a))})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400",children:"2. Binary ufuncs:"}),e.jsx("span",{className:"text-xs text-slate-400",children:"Two array inputs (2 operands)"})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:b.map(n=>e.jsx("button",{onClick:()=>C(n.id),className:`px-3 py-1 rounded text-xs font-mono font-bold border transition-all ${g===n.id?"bg-emerald-600 text-white border-emerald-400 shadow":"bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:n.label},n.id))})]}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:T.map((n,a)=>{const o=z[a],i=k.compute(n,o);return e.jsxs("div",{className:"bg-slate-900 p-3 rounded-lg border border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex justify-between text-xs font-mono",children:[e.jsxs("span",{className:"text-blue-400",children:["a: ",n]}),e.jsxs("span",{className:"text-purple-400",children:["b: ",o]})]}),e.jsx("div",{className:"bg-emerald-950/40 border border-emerald-500/50 rounded p-2 text-center font-mono font-bold text-emerald-300 text-sm",children:i})]},a)})})]})]})}),t==="advanced_methods"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🧬 Advanced ufunc Methods: .reduce, .accumulate, .outer & out="})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Every binary universal function in NumPy comes pre-equipped with high-performance reduction and memory-writing methods."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-blue-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-blue-400 font-mono",children:"1. .reduce(arr)"}),e.jsx("span",{className:"text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30",children:"Axis Collapse"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Repeatedly applies the binary ufunc until the array axis is collapsed into a scalar."}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500",children:"arr = np.array([1, 2, 3, 4, 5])"}),e.jsx("p",{className:"text-blue-300",children:"np.add.reduce(arr) ➔ 15 (Sum)"}),e.jsx("p",{className:"text-emerald-300",children:"np.multiply.reduce(arr) ➔ 120 (Product / Factorial)"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-purple-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-purple-400 font-mono",children:"2. .accumulate(arr)"}),e.jsx("span",{className:"text-[10px] bg-purple-500/10 text-purple-300 px-2 py-0.5 rounded border border-purple-500/30",children:"Running Accumulation"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Preserves the intermediate reduction results at each step, yielding running cumulative vectors."}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500",children:"arr = np.array([1, 2, 3, 4])"}),e.jsx("p",{className:"text-purple-300",children:"np.add.accumulate(arr) ➔ [1, 3, 6, 10] (cumsum)"}),e.jsx("p",{className:"text-emerald-300",children:"np.multiply.accumulate(arr) ➔ [1, 2, 6, 24] (cumprod)"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-400 font-mono",children:"3. .outer(A, B)"}),e.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30",children:"Pairwise Outer Grid"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Applies the ufunc across all pairs of elements from A and B, producing a 2D cross-product matrix."}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:e.jsxs("p",{className:"text-emerald-300",children:["np.multiply.outer([1, 2, 3], [10, 20])",e.jsx("br",{}),"➔ [[10, 20], [20, 40], [30, 60]]"]})})]}),e.jsxs("div",{className:"bg-slate-950 border border-amber-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-amber-400 font-mono",children:"4. out= Parameter"}),e.jsx("span",{className:"text-[10px] bg-amber-500/10 text-amber-300 px-2 py-0.5 rounded border border-amber-500/30",children:"In-Place Memory Buffer"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Directs the C computation to write directly into an existing array buffer without allocating temporary heap memory."}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:e.jsxs("p",{className:"text-amber-300",children:["np.sqrt(large_X, out=large_X)",e.jsx("br",{}),"➔ Mutates large_X in-place (0 MB extra RAM)"]})})]})]})]})}),t==="ml_activation_loss"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🧠 Machine Learning Activation Functions & Loss Sandbox"})}),e.jsxs("p",{className:"text-sm text-slate-400 mb-6",children:["Experience how ",e.jsx("code",{className:"text-emerald-400",children:"np.exp()"}),", ",e.jsx("code",{className:"text-blue-400",children:"np.log()"}),", and ",e.jsx("code",{className:"text-purple-400",children:"np.maximum()"})," compute fundamental deep learning equations."]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-blue-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-blue-400 font-mono",children:"1. Sigmoid: σ(z) = 1 / (1 + e^-z)"}),e.jsxs("span",{className:"text-xs font-mono font-bold text-blue-300",children:["Output: ",B]})]}),e.jsxs("div",{children:[e.jsxs("label",{className:"block text-xs text-slate-400 mb-1",children:["Input Logit ",e.jsxs("code",{className:"text-white",children:["z = ",m]}),":"]}),e.jsx("input",{type:"range",min:"-6",max:"6",step:"0.1",value:m,onChange:n=>U(parseFloat(n.target.value)),className:"w-full accent-blue-500"})]}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsx("code",{children:"sigmoid = 1.0 / (1.0 + np.exp(-z)) # Maps (-inf, +inf) ➔ (0, 1)"})})]}),e.jsxs("div",{className:"bg-slate-950 border border-purple-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-purple-400 font-mono",children:"2. Stable Softmax: exp(z - max) / Σexp"}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono font-bold",children:"Sum = 1.0000"})]}),e.jsx("div",{className:"grid grid-cols-3 gap-2",children:c.map((n,a)=>e.jsxs("div",{className:"space-y-1",children:[e.jsxs("span",{className:"text-[10px] text-slate-500 font-mono",children:["Logit z[",a,"]:"]}),e.jsx("input",{type:"number",step:"0.5",value:n,onChange:o=>{const i=[...c];i[a]=parseFloat(o.target.value)||0,P(i)},className:"w-full bg-slate-900 border border-slate-700 rounded p-1 text-center font-mono text-xs text-white"}),e.jsx("div",{className:"p-1 bg-purple-950/40 border border-purple-500/40 rounded text-center font-mono text-xs font-bold text-purple-300",children:F[a]})]},a))})]}),e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-400 font-mono",children:"3. Log-Loss (BCE): -[y ln(p) + (1-y) ln(1-p)]"}),e.jsxs("span",{className:"text-xs font-mono font-bold text-emerald-300",children:["Loss: ",R]})]}),e.jsxs("div",{className:"flex gap-4",children:[e.jsxs("div",{className:"flex-1",children:[e.jsxs("label",{className:"block text-xs text-slate-400 mb-1",children:["Predicted Prob ",e.jsxs("code",{className:"text-white",children:["p = ",u]}),":"]}),e.jsx("input",{type:"range",min:"0.01",max:"0.99",step:"0.01",value:u,onChange:n=>I(parseFloat(n.target.value)),className:"w-full accent-emerald-500"})]}),e.jsxs("div",{children:[e.jsx("label",{className:"block text-xs text-slate-400 mb-1",children:"Target y:"}),e.jsxs("button",{onClick:()=>L(d===1?0:1),className:"px-3 py-1 bg-slate-900 border border-emerald-500/40 rounded text-xs font-mono font-bold text-white",children:["y = ",d]})]})]}),e.jsx("div",{className:"bg-slate-900 p-2.5 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsx("code",{children:"loss = -np.mean(y * np.log(p + 1e-15) + (1 - y) * np.log(1 - p + 1e-15))"})})]}),e.jsxs("div",{className:"bg-slate-950 border border-amber-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-amber-400 font-mono",children:"4. ReLU: np.maximum(0, x)"}),e.jsx("span",{className:"text-xs text-amber-300 font-mono",children:"Zero Clamping"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:[e.jsx("code",{className:"text-amber-300",children:"np.maximum(0, x)"})," replaces all negative values with 0 using fast binary ufunc comparisons without branching."]}),e.jsx("div",{className:"bg-slate-900 p-2.5 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["# Fast vectorized ReLU activation",e.jsx("br",{}),"activations = np.maximum(0.0, layer_outputs)"]})})]})]})]})}),t==="numerical_stability"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🛡️ Numerical Stability & Overflow Protection Lab"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Deep learning models often crash due to floating-point overflows or logarithms of zero. Learn how expert ML engineers use NumPy ufuncs to prevent these failures."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-rose-500/40 rounded-xl p-5 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-rose-400 font-mono",children:"1. Exponent Overflow Trap (np.exp)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["Computing ",e.jsx("code",{className:"text-rose-300",children:"np.exp(800)"})," exceeds standard IEEE 754 float64 limits (~1.79e308), overflowing into ",e.jsx("code",{className:"text-white",children:"inf"})," and corrupting Softmax into ",e.jsx("code",{className:"text-white",children:"nan"}),"."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-rose-400",children:"# ❌ Naive Softmax (Crashes with overflow):"}),e.jsx("p",{children:"exp_z = np.exp(z) # ➔ array([inf, inf])"}),e.jsx("p",{className:"text-emerald-400 pt-1",children:"# ✅ Stable Softmax (Max Subtraction):"}),e.jsx("p",{children:"exp_z = np.exp(z - np.max(z)) # ➔ Max exponent is exp(0)=1"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-amber-500/40 rounded-xl p-5 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-amber-400 font-mono",children:"2. Logarithm of Zero Trap (np.log)"}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In classification loss, if predicted probability ",e.jsx("code",{className:"text-white",children:"p = 0.0"}),", ",e.jsx("code",{className:"text-amber-300",children:"np.log(0.0)"})," evaluates to ",e.jsx("code",{className:"text-white",children:"-inf"}),", corrupting gradients."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-rose-400",children:"# ❌ Dangerous Log:"}),e.jsx("p",{children:"loss = -np.log(0.0) # ➔ inf"}),e.jsx("p",{className:"text-emerald-400 pt-1",children:"# ✅ Safe Log (Epsilon Clamping):"}),e.jsx("p",{children:"loss = -np.log(0.0 + 1e-15) # ➔ Finite safe float (34.5)"})]})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect unary/binary ufuncs, reduce/accumulate/outer, memory reuse with out=, or neural activations"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:x.map(n=>e.jsxs("button",{onClick:()=>S(n.id),className:`p-3 rounded-xl border text-left transition-all ${p===n.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${p===n.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:n.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:n.title})]},n.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:l.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:l.summary})]})}),e.jsx(O,{fileModule:l.code,title:l.fileName})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ ufunc Pitfalls & How to Avoid Them"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"1. Confusing `np.maximum` with `np.max`"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"np.maximum(0, x)"})," performs element-wise ReLU comparison. ",e.jsx("code",{className:"text-white",children:"np.max(x)"})," is an aggregation function returning a single scalar maximum!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"2. Assuming `np.vectorize` is a Fast C ufunc"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"np.vectorize()"})," is syntactic sugar around a slow Python for-loop; it does not generate compiled C machine code. Always prefer built-in ufuncs."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"3. Calling np.log on Negative Numbers"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"np.log(-5)"})," emits a RuntimeWarning and inserts ",e.jsx("code",{className:"text-rose-300",children:"nan"}),". Use ",e.jsx("code",{className:"text-emerald-400",children:"np.abs()"})," or clipping before taking logs."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"4. Forgetting `out=` in High-Throughput Loops"}),e.jsxs("p",{children:["In high-frequency training iterations, avoid heap memory allocations by writing into pre-allocated destination buffers: ",e.jsx("code",{className:"text-emerald-400",children:"np.sqrt(X, out=X)"}),"."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💬 Barrackpore Classroom Q&A"})}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono",children:"Coder & AccoTax Live Session"})]}),e.jsx("div",{className:"space-y-3",children:[{student:"Debangshu",avatar:"👨‍💻",question:"Sir, what makes ufuncs so much faster than writing math equations in Python?",answer:"Debangshu, universal functions are pre-compiled C loops that leverage CPU vector registers (SIMD - Single Instruction, Multiple Data). A single CPU clock cycle processes 4 or 8 floats at once, bypassing Python's dynamic type checking!"},{student:"Susmita",avatar:"👩‍💻",question:"Why do we use np.add.reduce(arr) when np.sum(arr) already exists?",answer:"Susmita, np.sum(arr) is actually just a user-friendly alias for np.add.reduce(arr)! The '.reduce' method works universally on ANY binary ufunc, like np.multiply.reduce (product), np.maximum.reduce, or np.logical_and.reduce!"},{student:"Tuhina",avatar:"👩‍🔬",question:"Why did our Softmax function return [nan, nan, nan] when training on raw unnormalized logits?",answer:"Tuhina, raw unnormalized logits can reach 500 or 1000. np.exp(1000) overflows float64 to 'inf', and inf / inf evaluates to 'nan'! Always subtract np.max(logits) before exponentiating to keep the maximum exponent at exp(0) = 1.0!"}].map((n,a)=>e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300",children:[e.jsx("span",{children:n.avatar}),e.jsxs("span",{children:[n.student," asks:"]})]}),e.jsxs("p",{className:"text-xs text-slate-300 italic pl-6",children:['"',n.question,'"']}),e.jsxs("div",{className:"flex items-start gap-2 pt-2 border-t border-slate-800 text-xs text-emerald-300",children:[e.jsx("span",{className:"font-bold text-emerald-400 whitespace-nowrap",children:"Sukanta Sir:"}),e.jsx("p",{className:"text-slate-300",children:n.answer})]})]},a))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"❓ Frequently Asked Questions & Practice Problems"})}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[w.length," Questions & Answers"]})]}),e.jsx(D,{questions:w})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📄 Printable Topic Summary Note"})}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700",children:"topic12_note.txt"})]}),e.jsx(W,{text:Z,fileName:"topic12_note.txt"})]}),e.jsx(H,{})]})]})};export{ie as default};
