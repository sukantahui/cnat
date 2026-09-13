import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as q}from"./PythonFileLoader-DUNJ9gwR.js";import{F as k}from"./FAQTemplate-D_90hN4m.js";import{P as X}from"./PlainTextPrint-yt10TRX1.js";import{T as L}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-PUup0iW5.js";import"./vendor-prism-CCfIgi4B.js";import"./vendor-icons-ri6cs58t.js";const z=`"""\r
================================================================================\r
Topic 10 - Script 01: Vectorized Element-Wise Arithmetic Operations\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Standard arithmetic operators: +, -, *, /, //, %, **\r
- Array-Array and Array-Scalar vectorized arithmetic\r
- Performance comparison: Vectorized C loops vs Python list comprehensions\r
================================================================================\r
"""\r
\r
import time\r
import numpy as np\r
\r
def demonstrate_elementwise_arithmetic():\r
    print("=" * 65)\r
    print("1. BASIC ELEMENT-WISE OPERATIONS")\r
    print("=" * 65)\r
\r
    a = np.array([10, 20, 30, 40], dtype=np.float64)\r
    b = np.array([2,   4,  5,  8], dtype=np.float64)\r
\r
    print("Array a:", a)\r
    print("Array b:", b)\r
    print("-" * 40)\r
    print("Addition       (a + b) :", a + b)\r
    print("Subtraction    (a - b) :", a - b)\r
    print("Multiplication (a * b) :", a * b)\r
    print("Division       (a / b) :", a / b)\r
    print("Power          (a ** 2):", a ** 2)\r
    print("Modulus        (a % b) :", a % b)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. SPEED BENCHMARK: 1,000,000 ELEMENTS ADDITION")\r
    print("=" * 65)\r
    \r
    n = 1_000_000\r
    py_a = list(range(n))\r
    py_b = list(range(n))\r
    np_a = np.arange(n)\r
    np_b = np.arange(n)\r
\r
    # Pure Python loop\r
    t0 = time.perf_counter()\r
    py_res = [x + y for x, y in zip(py_a, py_b)]\r
    t_py = (time.perf_counter() - t0) * 1000\r
\r
    # NumPy SIMD Vectorized addition\r
    t0 = time.perf_counter()\r
    np_res = np_a + np_b\r
    t_np = (time.perf_counter() - t0) * 1000\r
\r
    print(f"Pure Python loop time : {t_py:.2f} ms")\r
    print(f"NumPy vectorized time : {t_np:.2f} ms")\r
    print(f"Speedup Factor        : {t_py / t_np:.1f}x faster!")\r
\r
if __name__ == "__main__":\r
    demonstrate_elementwise_arithmetic()\r
`,D=`"""\r
================================================================================\r
Topic 10 - Script 02: Element-Wise (Hadamard) Product vs Matrix Dot Product\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Hadamard Product: A * B (Element-wise multiplication, requires identical shapes)\r
- Matrix Product  : A @ B or np.dot(A, B) (Linear algebra matrix multiplication)\r
- Inner dimension matching rule: (M, K) @ (K, N) -> (M, N)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def compare_multiplication_types():\r
    print("=" * 65)\r
    print("HADAMARD PRODUCT (*) vs MATRIX MULTIPLICATION (@)")\r
    print("=" * 65)\r
\r
    A = np.array([\r
        [1, 2],\r
        [3, 4]\r
    ])\r
\r
    B = np.array([\r
        [5, 6],\r
        [7, 8]\r
    ])\r
\r
    print("Matrix A:\\n", A)\r
    print("\\nMatrix B:\\n", B)\r
\r
    # 1. Element-wise product (A * B)\r
    hadamard = A * B\r
    print("\\n1. Element-wise Product (A * B):\\n", hadamard)\r
    print("   Calculation: [1*5, 2*6] = [5, 12]; [3*7, 4*8] = [21, 32]")\r
\r
    # 2. Matrix Dot product (A @ B)\r
    mat_mul = A @ B\r
    print("\\n2. Matrix Dot Product (A @ B or np.dot(A, B)):\\n", mat_mul)\r
    print("   Calculation: Row 0 . Col 0 = 1*5 + 2*7 = 19; Row 0 . Col 1 = 1*6 + 2*8 = 22")\r
    print("                Row 1 . Col 0 = 3*5 + 4*7 = 43; Row 1 . Col 1 = 3*6 + 4*8 = 50")\r
\r
    print("\\n[CRITICAL ML DISTINCTION]:")\r
    print("Use '*' for feature scaling, dropout masks, and loss calculations.")\r
    print("Use '@' or np.dot() for linear layer forward passes (X @ W + b).")\r
\r
if __name__ == "__main__":\r
    compare_multiplication_types()\r
`,H=`"""\r
================================================================================\r
Topic 10 - Script 03: In-Place Arithmetic Operators (+=, -=, *=, /=) & RAM\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Memory efficiency of in-place operators: +=, -=, *=, /=\r
- Comparing memory addresses: \`a += b\` (Same buffer) vs \`a = a + b\` (New buffer allocation)\r
- In-place type casting rule: TypeError / Cannot cast ufunc output\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_inplace_arithmetic():\r
    print("=" * 65)\r
    print("MEMORY RE-USE: \`a += b\` vs \`a = a + b\`")\r
    print("=" * 65)\r
\r
    # In-Place Addition\r
    a_inplace = np.array([10.0, 20.0, 30.0])\r
    orig_addr_1 = a_inplace.ctypes.data\r
    print("Initial address of a_inplace:", hex(orig_addr_1))\r
\r
    a_inplace += 5.0\r
    new_addr_1 = a_inplace.ctypes.data\r
    print("Address after \`a_inplace += 5.0\`:", hex(new_addr_1))\r
    print("Addresses Match:", orig_addr_1 == new_addr_1, "(Zero memory allocation!)")\r
\r
    print("\\n" + "-" * 50)\r
    # Standard Out-of-Place Addition\r
    a_outplace = np.array([10.0, 20.0, 30.0])\r
    orig_addr_2 = a_outplace.ctypes.data\r
    print("Initial address of a_outplace:", hex(orig_addr_2))\r
\r
    a_outplace = a_outplace + 5.0\r
    new_addr_2 = a_outplace.ctypes.data\r
    print("Address after \`a_outplace = a_outplace + 5.0\`:", hex(new_addr_2))\r
    print("Addresses Match:", orig_addr_2 == new_addr_2, "(Allocated a brand new array!)")\r
\r
if __name__ == "__main__":\r
    demonstrate_inplace_arithmetic()\r
`,W=`"""\r
================================================================================\r
Topic 10 - Script 04: Vectorized ML Loss Functions & Gradient Updates\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Implementing Mean Squared Error (MSE): 1/N * sum((y_pred - y_true)**2)\r
- Implementing Mean Absolute Error (MAE): 1/N * sum(abs(y_pred - y_true))\r
- Performing vectorized Gradient Descent parameter updates: w -= lr * grad_w\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_ml_arithmetic():\r
    print("=" * 65)\r
    print("1. VECTORIZED LOSS FUNCTION IMPLEMENTATION")\r
    print("=" * 65)\r
\r
    # Ground truth student marks\r
    y_true = np.array([85.0, 92.0, 78.0, 90.0, 65.0])\r
    # Model predictions\r
    y_pred = np.array([80.0, 95.0, 75.0, 88.0, 70.0])\r
\r
    print("Ground Truth y_true :", y_true)\r
    print("Predictions  y_pred :", y_pred)\r
\r
    # Raw residuals / error vector\r
    errors = y_pred - y_true\r
    print("\\nResiduals (y_pred - y_true):", errors)\r
\r
    # 1. Mean Squared Error (MSE Loss)\r
    mse = np.mean(errors ** 2)\r
    print(f"Mean Squared Error (MSE)   : {mse:.2f}")\r
\r
    # 2. Mean Absolute Error (MAE Loss)\r
    mae = np.mean(np.abs(errors))\r
    print(f"Mean Absolute Error (MAE)  : {mae:.2f}")\r
\r
    print("\\n" + "=" * 65)\r
    print("2. VECTORIZED GRADIENT DESCENT STEP")\r
    print("=" * 65)\r
    \r
    # Weights vector for 3 features: [w1, w2, w3]\r
    weights = np.array([1.5, 0.8, -0.4])\r
    # Gradients computed during backward pass: dL/dw\r
    grad_w = np.array([0.25, -0.10, 0.05])\r
    # Learning rate (eta)\r
    lr = 0.01\r
\r
    print("Initial Weights:", weights)\r
    print("Gradients (dL) :", grad_w)\r
\r
    # In-place parameter update: w = w - lr * grad_w\r
    weights -= lr * grad_w\r
    print("Updated Weights:", weights)\r
\r
if __name__ == "__main__":\r
    demonstrate_ml_arithmetic()\r
`,F=`========================================================\r
NUMPY ESSENTIALS — TOPIC 10: ARRAY ARITHMETIC OPERATIONS\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9 • Module 1\r
========================================================\r
\r
1. WHAT ARE ELEMENT-WISE ARITHMETIC OPERATIONS?\r
------------------------------------------------\r
In NumPy, standard arithmetic operators (+, -, *, /, //, %, **)\r
are applied element-by-element across matching positions in arrays.\r
\r
Python List vs NumPy Array:\r
  list1 + list2  -> Concatenates lists: [1, 2] + [3, 4] = [1, 2, 3, 4]\r
  arr1 + arr2    -> Element-wise sum:   [1, 2] + [3, 4] = [4, 6]\r
\r
2. OPERATORS & EQUIVALENT UFUNCS:\r
----------------------------------\r
  Operation          Operator    Equivalent ufunc\r
  -----------------  ---------   ------------------\r
  Addition           a + b       np.add(a, b)\r
  Subtraction        a - b       np.subtract(a, b)\r
  Multiplication     a * b       np.multiply(a, b)  [Hadamard product]\r
  Division           a / b       np.divide(a, b)    [True float division]\r
  Floor Division     a // b      np.floor_divide(a, b)\r
  Modulus / Remainder a % b      np.remainder(a, b)\r
  Exponentiation     a ** b      np.power(a, b)\r
\r
3. ELEMENT-WISE MULTIPLICATION (*) vs MATRIX MULTIPLICATION (@):\r
-----------------------------------------------------------------\r
  - a * b : Multiplies matching elements at (i, j). Shapes must match.\r
  - a @ b : Linear algebra matrix product (dot product of rows x cols).\r
\r
4. IN-PLACE ARITHMETIC (+=, -=, *=, /=):\r
-----------------------------------------\r
  arr += 5   # Modifies original memory buffer in-place without new allocation\r
  ⚠️ DTYPE TRAP:\r
  int_arr = np.array([1, 2, 3])\r
  int_arr += 2.5  # Raises TypeError (cannot cast float64 into int32 in-place)\r
\r
5. ARITHMETIC IN MACHINE LEARNING PIPELINES:\r
---------------------------------------------\r
1. Image Normalization:\r
   normalized_img = img / 255.0   # Scale [0, 255] -> [0.0, 1.0]\r
\r
2. Min-Max Feature Scaling:\r
   X_scaled = (X - X.min()) / (X.max() - X.min())\r
\r
3. Z-Score Feature Standardization:\r
   X_std = (X - X.mean()) / X.std()\r
\r
4. Mean Squared Error (MSE) Loss:\r
   residuals = y_pred - y_true\r
   mse = np.mean(residuals ** 2)\r
\r
5. Linear Model Hypothesis:\r
   y_hat = X * weight + bias\r
\r
6. QUICK REVISION CHECKLIST:\r
-----------------------------\r
  □ All standard math operators execute element-by-element\r
  □ * is Hadamard product; @ is matrix multiplication\r
  □ Division by zero in NumPy produces 'inf' or 'nan' with a warning (not a crash)\r
  □ In-place operators (+=, *=) save RAM by avoiding new allocations\r
  □ Watch out for typecasting errors with in-place float additions\r
  □ Feature scaling (Z-score, Min-Max) relies on vectorized arithmetic\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,j=[{id:1,question:"What is the key difference between adding two Python lists vs adding two NumPy ndarrays?",options:["`list1 + list2` concatenates the two lists end-to-end, while `arr1 + arr2` performs element-wise addition across corresponding positions","`list1 + list2` calculates the sum, while `arr1 + arr2` raises an error","They behave identically","`arr1 + arr2` converts all numbers to strings"],correctAnswer:0,explanation:"In standard Python, `[1, 2] + [3, 4]` produces `[1, 2, 3, 4]` (concatenation). In NumPy, `np.array([1, 2]) + np.array([3, 4])` executes element-wise vector addition, yielding `array([4, 6])`."},{id:2,question:"What is the result of `np.array([2, 4, 6]) * np.array([3, 2, 5])`?",options:["`array([6, 8, 30])`","A single dot product scalar `44`","`array([5, 6, 11])`","A 3x3 matrix"],correctAnswer:0,explanation:"The `*` operator in NumPy performs element-wise multiplication (also known as the Hadamard product): 2*3=6, 4*2=8, 6*5=30, yielding `array([6, 8, 30])`."},{id:3,question:"Which operator is used for linear algebra matrix multiplication (dot product) in modern Python/NumPy?",options:["`@` (e.g. `A @ B`) or `np.dot(A, B)`","`*` (e.g. `A * B`)","`**` (e.g. `A ** B`)","`&` (e.g. `A & B`)"],correctAnswer:0,explanation:"`@` is Python's dedicated matrix multiplication operator, equivalent to `np.matmul(A, B)` or `np.dot(A, B)`. The standard `*` operator is strictly reserved for element-by-element Hadamard multiplication."},{id:4,question:"What is the equivalent Universal Function (ufunc) for the `-` subtraction operator in NumPy?",options:["np.subtract(a, b)","np.sub(a, b)","np.minus(a, b)","np.diff(a, b)"],correctAnswer:0,explanation:"`np.subtract(a, b)` is the underlying C-implemented universal function called by the `-` operator."},{id:5,question:"What happens when dividing by zero in NumPy, e.g. `np.array([10.0]) / np.array([0.0])`?",options:["NumPy prints a RuntimeWarning and returns `array([inf])` without crashing the program","Python crashes immediately with a `ZeroDivisionError`","NumPy converts the number to 0","The program enters an infinite loop"],correctAnswer:0,explanation:"Unlike pure Python which raises `ZeroDivisionError: division by zero`, NumPy follows IEEE 754 floating point standards. It emits a `RuntimeWarning: divide by zero encountered in divide` and returns positive infinity (`np.inf`), negative infinity (`-np.inf`), or `np.nan` (for 0.0 / 0.0)."},{id:6,question:"What is the value of `0.0 / 0.0` in a NumPy floating-point array?",options:["`nan` (Not a Number)","`0.0`","`inf`","`1.0`"],correctAnswer:0,explanation:"In IEEE 754 arithmetic, 0 divided by 0 is mathematically undefined, so NumPy returns `np.nan` (Not a Number)."},{id:7,question:"Why does `int_arr += 1.5` raise a TypeError if `int_arr` has dtype `int32`?",options:["Because in-place assignment (`+=`) cannot change the array's underlying dtype from integer to float in the existing memory buffer","Because NumPy doesn't support floating point numbers","Because 1.5 is an invalid number in Python","Because addition is only supported for integers"],correctAnswer:0,explanation:"In-place operations modify the existing memory buffer in-place. Because an integer array buffer cannot store 64-bit floating point decimals without reallocating memory, NumPy enforces safe casting and raises `TypeError: Cannot cast ufunc 'add' output from dtype('float64') to dtype('int32') with casting rule 'same_kind'`."},{id:8,question:"How do you normalize grayscale image pixels with range [0, 255] into floating point range [0.0, 1.0] in one line?",options:["normalized_img = img / 255.0","normalized_img = img.normalize(255)","normalized_img = img % 255","normalized_img = img // 255"],correctAnswer:0,explanation:"Scalar division `img / 255.0` divides every pixel intensity by 255.0 via vectorized broadcasting, scaling all values into the standard neural network input range `[0.0, 1.0]`."},{id:9,question:"What is the NumPy formula for Min-Max feature normalization to scale array `X` into range [0, 1]?",options:["(X - X.min()) / (X.max() - X.min())","(X - X.mean()) / X.std()","X / X.sum()","(X.max() - X) / X.min()"],correctAnswer:0,explanation:"Min-Max scaling subtracts the minimum value from each element and divides by the range `(X.max() - X.min())`, bounding all features strictly between 0 and 1."},{id:10,question:"What is the NumPy formula for Z-Score Standardization (StandardScaler)?",options:["(X - X.mean()) / X.std()","(X - X.min()) / (X.max() - X.min())","X / np.sqrt(X)","(X - X.median()) / X.mean()"],correctAnswer:0,explanation:"Z-score standardization centers data around a mean of 0 (`mu = 0`) and standard deviation of 1 (`sigma = 1`) by subtracting the mean and dividing by the standard deviation: `(X - X.mean()) / X.std()`."},{id:11,question:"How do you calculate Mean Squared Error (MSE) between predicted array `y_pred` and actual array `y_true` in NumPy?",options:["np.mean((y_pred - y_true) ** 2)","np.sum(y_pred - y_true) ** 2","np.std(y_pred - y_true)","(y_pred - y_true).mean()"],correctAnswer:0,explanation:"`y_pred - y_true` computes residuals, `** 2` squares each residual element-wise, and `np.mean()` computes the average squared error, which is the definition of MSE."},{id:12,question:"What is the return dtype of true division `np.array([10, 20]) / np.array([2, 4])`?",options:["`float64`","`int32`","`int64`","`object`"],correctAnswer:0,explanation:"In Python 3 and NumPy, the true division operator `/` always produces floating point outputs (`float64` by default), even when the division divides evenly."},{id:13,question:"How do you perform integer floor division in NumPy to discard decimal fractions?",options:["a // b","a / b","a % b","np.int_div(a, b)"],correctAnswer:0,explanation:"The floor division operator `//` (or `np.floor_divide(a, b)`) divides elements and rounds down to the nearest integer."},{id:14,question:"What is `np.array([10, 15, 22]) % 4`?",options:["`array([2, 3, 2])`","`array([2.5, 3.75, 5.5])`","`array([2, 3, 5])`","`array([0, 0, 0])`"],correctAnswer:0,explanation:"The modulus operator `%` returns the remainder after division: 10 % 4 = 2, 15 % 4 = 3, 22 % 4 = 2, resulting in `array([2, 3, 2])`."},{id:15,question:"What is the memory advantage of using `arr += 10` instead of `arr = arr + 10` for a 1-Gigabyte tensor?",options:["`arr += 10` modifies the memory buffer in-place without allocating an extra 1 GB of RAM, whereas `arr = arr + 10` creates a temporary 1 GB array before reassigning","`arr += 10` compresses the array","`arr += 10` converts the array to integer","There is no memory difference"],correctAnswer:0,explanation:"In-place operations (`+=`, `*=`, `-=`) write computed values directly into the existing memory buffer without allocating heap memory for a new array, saving RAM and eliminating garbage collection overhead."},{id:16,question:"What error occurs if you attempt to add two arrays with incompatible shapes, e.g. `np.zeros((3, 4)) + np.zeros((2, 5))`?",options:["ValueError: operands could not be broadcast together with shapes (3,4) (2,5)","IndexError: index out of range","TypeError: invalid shapes","ShapeError: dimension mismatch"],correctAnswer:0,explanation:"NumPy requires arrays to have identical shapes or broadcastable dimensions. Incompatible shapes raise `ValueError: operands could not be broadcast together`."},{id:17,question:"How do you calculate Root Mean Squared Error (RMSE) in NumPy?",options:["np.sqrt(np.mean((y_pred - y_true) ** 2))","np.mean(y_pred - y_true)","np.mean(np.sqrt(y_pred - y_true))","np.sum(np.abs(y_pred - y_true))"],correctAnswer:0,explanation:"RMSE is the square root of the Mean Squared Error: `np.sqrt(np.mean((y_pred - y_true) ** 2))`."},{id:18,question:"What is the result of `np.array([2, 3, 4]) ** 3`?",options:["`array([8, 27, 64])`","`array([6, 9, 12])`","`array([8, 9, 64])`","`array([1, 1, 1])`"],correctAnswer:0,explanation:"The `**` operator raises each element to the power of 3: 2^3 = 8, 3^3 = 27, 4^3 = 64, yielding `array([8, 27, 64])`."},{id:19,question:"How is a linear regression hypothesis vector `y_hat` computed for a single feature vector `X`, weight `w`, and bias `b`?",options:["y_hat = X * w + b","y_hat = X @ w @ b","y_hat = (X + w) * b","y_hat = X ** w + b"],correctAnswer:0,explanation:"In vectorized single-variable linear regression, each feature value in `X` is multiplied by slope weight `w` and added to intercept bias `b`: `y_hat = X * w + b`."},{id:20,question:"What does `np.negative(arr)` do to an array?",options:["Negates every element element-wise (equivalent to `-arr`)","Reverses the array","Sets all positive numbers to 0","Returns True if array contains negative numbers"],correctAnswer:0,explanation:"`np.negative(arr)` is the ufunc for numerical negation, multiplying each element by -1."},{id:21,question:"If `arr = np.array([-5, 10, -15, 20])`, what does `np.abs(arr)` return?",options:["`array([5, 10, 15, 20])`","`array([-5, 10, -15, 20])`","`array([0, 10, 0, 20])`","`array([5, -10, 15, -20])`"],correctAnswer:0,explanation:"`np.abs(arr)` (or `np.absolute(arr)`) computes the absolute magnitude of each element, removing negative signs."},{id:22,question:"Why is vectorized NumPy arithmetic faster than writing a Python `for` loop?",options:["NumPy runs in compiled C loops utilizing CPU vector registers and SIMD instructions without Python interpreter type-checking per iteration","NumPy uses quantum computing","NumPy compiles code into JavaScript","NumPy automatically skips odd numbers"],correctAnswer:0,explanation:"NumPy arrays are stored in contiguous memory blocks. Arithmetic ufuncs execute compiled C loops that take advantage of CPU SIMD (Single Instruction Multiple Data) pipelines, bypassing Python's dynamic type inspection."},{id:23,question:"What does `np.reciprocal(np.array([2.0, 4.0, 5.0]))` calculate?",options:["`array([0.5, 0.25, 0.2])` (equivalent to `1.0 / arr`)","`array([2.0, 4.0, 5.0])`","`array([-2.0, -4.0, -5.0])`","`array([4.0, 16.0, 25.0])`"],correctAnswer:0,explanation:"`np.reciprocal(x)` computes `1 / x` element-wise: 1/2.0 = 0.5, 1/4.0 = 0.25, 1/5.0 = 0.2."},{id:24,question:"How do you calculate Mean Absolute Error (MAE) loss in NumPy?",options:["np.mean(np.abs(y_pred - y_true))","np.mean((y_pred - y_true) ** 2)","np.sum(y_pred - y_true)","np.std(np.abs(y_pred - y_true))"],correctAnswer:0,explanation:"Mean Absolute Error takes the absolute difference of residuals `np.abs(y_pred - y_true)` and averages them with `np.mean()`."},{id:25,question:"What is Sukanta Hui's golden rule for arithmetic normalization in Barrackpore ML labs?",options:["Always cast integer datasets to floating point (`float32` or `float64`) before applying division or in-place transformations to avoid integer truncation and casting errors","Always round marks to the nearest 10","Never normalize features with more than 3 decimal places","Always multiply features by 100 instead of dividing"],correctAnswer:0,explanation:"Because division produces floats and in-place operations require compatible dtypes, always ensure arrays are typed as `float32` or `float64` before running scaling and normalization pipelines."}],y=[{id:"part1",fileName:"01_vectorized_elementwise_arithmetic.py",title:"1. Vectorized Element-Wise Arithmetic",badge:"Arithmetic Basics",code:z,summary:"Demonstrates +, -, *, /, //, %, ** operators and compares 1M elements execution against pure Python loops."},{id:"part2",fileName:"02_elementwise_product_vs_dot_product.py",title:"2. Hadamard Product (*) vs Matrix Dot (@)",badge:"Hadamard vs Dot",code:D,summary:"Clarifies element-wise multiplication vs matrix dot product (@ / np.dot) and inner-dimension alignment rules in ML."},{id:"part3",fileName:"03_in_place_arithmetic_memory_mutations.py",title:"3. In-Place Operators (+=, *=) & RAM",badge:"In-Place & Memory",code:H,summary:"Proves that in-place operators reuse memory buffers (identical ctypes.data) and avoids redundant temporary array allocations."},{id:"part4",fileName:"04_ml_loss_functions_and_gradient_step.py",title:"4. ML Loss Functions & Gradient Updates",badge:"MSE & Gradient Step",code:W,summary:"Computes vectorized Mean Squared Error (MSE) / MAE losses and performs gradient descent parameter updates (w -= lr * grad)."}],f=[{id:"add",label:"Addition (+)",symbol:"+",ufunc:"np.add(A, B)",desc:"Element-wise summation"},{id:"sub",label:"Subtraction (-)",symbol:"-",ufunc:"np.subtract(A, B)",desc:"Element-wise difference"},{id:"mul",label:"Multiplication (*)",symbol:"*",ufunc:"np.multiply(A, B)",desc:"Hadamard element-wise product"},{id:"div",label:"True Division (/)",symbol:"/",ufunc:"np.divide(A, B)",desc:"True floating-point division"},{id:"floor_div",label:"Floor Division (//)",symbol:"//",ufunc:"np.floor_divide(A, B)",desc:"Integer floor quotient"},{id:"mod",label:"Modulus (%)",symbol:"%",ufunc:"np.remainder(A, B)",desc:"Remainder after division"},{id:"pow",label:"Power (**)",symbol:"**",ufunc:"np.power(A, B)",desc:"Element-wise exponentiation"}],te=()=>{const[o,v]=i.useState("interactive_calculator"),[p,_]=i.useState("part1"),d=y.find(r=>r.id===p)||y[0],[c,A]=i.useState([75,82,90,68]),[m,S]=i.useState([5,8,10,4]),[u,M]=i.useState("add"),[n,O]=i.useState([45,60,75,90,100]),[E,U]=i.useState([48,58,79,88,95]),s=f.find(r=>r.id===u)||f[0],P=c.map((r,t)=>{const a=m[t];switch(u){case"add":return r+a;case"sub":return r-a;case"mul":return r*a;case"div":return a===0?"inf":parseFloat((r/a).toFixed(2));case"floor_div":return a===0?"inf":Math.floor(r/a);case"mod":return a===0?"nan":r%a;case"pow":return Math.pow(r,a);default:return r+a}}),g=Math.min(...n),I=Math.max(...n)-g||1,T=n.map(r=>parseFloat(((r-g)/I).toFixed(3))),x=n.reduce((r,t)=>r+t,0)/n.length,C=n.reduce((r,t)=>r+Math.pow(t-x,2),0)/n.length,N=Math.sqrt(C)||1,B=n.map(r=>parseFloat(((r-x)/N).toFixed(3))),w=E.map((r,t)=>r-n[t]),h=w.map(r=>r*r),b=(h.reduce((r,t)=>r+t,0)/h.length).toFixed(2),R=Math.sqrt(parseFloat(b)).toFixed(2);return e.jsxs("div",{className:"min-h-screen bg-slate-900 text-slate-200",children:[e.jsx("header",{className:"border-b border-slate-800 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4",children:e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4",children:[e.jsxs("div",{children:[e.jsxs("div",{className:"flex items-center gap-2 mb-1",children:[e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30",children:"BCAC701B • Segment 9"}),e.jsx("span",{className:"px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/30",children:"Module 1 • Topic 10"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl font-bold tracking-tight text-white flex items-center gap-3",children:[e.jsx("span",{children:"➕ Array Arithmetic Operations"}),e.jsx("span",{className:"text-xs font-mono px-2 py-0.5 bg-slate-800 text-slate-300 rounded border border-slate-700",children:"a + b • a * b (Hadamard) • (X - μ) / σ • MSE"})]}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Mastering vectorized element-wise math, in-place memory mutations, Hadamard vs dot products, and ML loss calculations."})]}),e.jsx("div",{className:"text-right",children:e.jsxs("span",{className:"inline-block text-xs font-mono px-3 py-1 bg-slate-800/80 rounded-full border border-slate-700 text-slate-400",children:["Mentor: ",e.jsx("strong",{className:"text-emerald-400",children:"Sukanta Hui"})," • Barrackpore"]})})]})})}),e.jsx("nav",{className:"bg-slate-950 border-b border-slate-800/80 sticky top-[73px] z-30 shadow-md",children:e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsx("div",{className:"flex overflow-x-auto space-x-1 py-2 scrollbar-thin scrollbar-thumb-slate-700",children:[{id:"interactive_calculator",label:"🧮 Vector Arithmetic Sandbox",icon:"➕"},{id:"hadamard_vs_dot",label:"✖️ Hadamard (*) vs Dot (@)",icon:"📐"},{id:"inplace_mutator",label:"⚡ In-Place (+=) & Memory",icon:"💾"},{id:"ml_scaling_loss",label:"🤖 ML Normalization & MSE Loss",icon:"🎯"}].map(r=>e.jsxs("button",{onClick:()=>v(r.id),className:`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all whitespace-nowrap ${o===r.id?"bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm":"text-slate-400 hover:text-slate-200 hover:bg-slate-800/50"}`,children:[e.jsx("span",{children:r.icon}),e.jsx("span",{children:r.label})]},r.id))})})}),e.jsxs("main",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10",children:[o==="interactive_calculator"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 mb-4",children:[e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"🧮 Interactive Vector Arithmetic Sandbox"})}),e.jsx("p",{className:"text-sm text-slate-400 mt-1",children:"Select an operation below to execute element-wise arithmetic across matching student mark positions in NumPy."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:f.map(r=>e.jsx("button",{onClick:()=>M(r.id),className:`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all ${u===r.id?"bg-emerald-500 text-slate-950 font-bold border-emerald-400 shadow-md scale-105":"bg-slate-900/80 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:r.label},r.id))})]}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-4 bg-slate-900 border border-slate-800 p-4 rounded-xl mb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsxs("span",{className:"px-3 py-1 rounded-md text-xs font-bold border border-emerald-500/40 bg-emerald-500/10 text-emerald-300 font-mono",children:["result = arrA ",s.symbol," arrB"]}),e.jsxs("span",{className:"text-xs text-slate-400",children:["Equivalent ufunc: ",e.jsx("code",{className:"text-blue-400 font-mono",children:s.ufunc})]})]}),e.jsx("span",{className:"text-xs text-slate-300 italic",children:s.desc})]}),e.jsxs("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-6 space-y-6",children:[e.jsx("div",{className:"grid grid-cols-4 gap-3 text-center font-mono",children:["Debangshu","Susmita","Swadeep","Tuhina"].map((r,t)=>e.jsxs("div",{className:"text-xs text-slate-400 font-sans font-bold",children:["Student #",t,": ",r]},t))}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs text-blue-400 font-mono font-bold",children:"Array A (Base Marks):"}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:c.map((r,t)=>e.jsx("input",{type:"number",value:r,onChange:a=>{const l=[...c];l[t]=parseFloat(a.target.value)||0,A(l)},className:"bg-slate-900 border border-blue-500/40 rounded-lg p-2 text-center font-mono font-bold text-white text-sm focus:border-blue-400 focus:outline-none"},t))})]}),e.jsx("div",{className:"flex justify-center",children:e.jsxs("span",{className:"px-4 py-1 rounded-full bg-emerald-500/20 text-emerald-300 font-mono text-base font-bold border border-emerald-500/40 shadow",children:[s.symbol," (",s.label,")"]})}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("span",{className:"text-xs text-purple-400 font-mono font-bold",children:"Array B (Modifiers / Scores):"}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:m.map((r,t)=>e.jsx("input",{type:"number",value:r,onChange:a=>{const l=[...m];l[t]=parseFloat(a.target.value)||0,S(l)},className:"bg-slate-900 border border-purple-500/40 rounded-lg p-2 text-center font-mono font-bold text-white text-sm focus:border-purple-400 focus:outline-none"},t))})]}),e.jsxs("div",{className:"pt-4 border-t border-slate-800 space-y-2",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"text-xs text-emerald-400 font-mono font-bold uppercase tracking-wider",children:["Computed Output Vector (arrA ",s.symbol," arrB):"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400",children:"shape: (4,) • dtype: float64"})]}),e.jsx("div",{className:"grid grid-cols-4 gap-3",children:P.map((r,t)=>e.jsxs("div",{className:"bg-gradient-to-br from-emerald-600/30 to-blue-600/30 border-2 border-emerald-400 rounded-lg p-3 text-center font-mono font-bold text-white text-base shadow-lg shadow-emerald-950/40",children:[r,e.jsxs("span",{className:"block text-[10px] text-emerald-300/80 font-normal",children:[c[t]," ",s.symbol," ",m[t]]})]},t))})]})]})]})}),o==="hadamard_vs_dot"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"✖️ Element-Wise Hadamard (*) vs Matrix Multiplication (@)"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Understand the fundamental linear algebra distinction between multiplying corresponding cells vs computing row-by-column dot products."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-bold text-emerald-400 font-mono",children:"1. Element-Wise: A * B"}),e.jsx("span",{className:"text-xs px-2 py-0.5 bg-emerald-500/10 text-emerald-300 rounded border border-emerald-500/30",children:"Hadamard Product"})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Multiplies matching cells at position ",e.jsx("code",{className:"text-white",children:"(i, j)"}),". Both matrices must have identical dimensions."]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500",children:"# A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]"}),e.jsxs("p",{className:"text-emerald-300",children:["A * B = [[1*5, 2*6],",e.jsx("br",{}),"        [3*7, 4*8]]"]}),e.jsx("p",{className:"text-white font-bold pt-1",children:"➔ [[5, 12], [21, 32]]"})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-blue-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-base font-bold text-blue-400 font-mono",children:"2. Matrix Multiplication: A @ B"}),e.jsx("span",{className:"text-xs px-2 py-0.5 bg-blue-500/10 text-blue-300 rounded border border-blue-500/30",children:"np.matmul / np.dot"})]}),e.jsx("p",{className:"text-xs text-slate-300",children:"Computes linear algebra dot products between rows of A and columns of B. Inner dimensions must match."}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsx("p",{className:"text-slate-500",children:"# A = [[1, 2], [3, 4]], B = [[5, 6], [7, 8]]"}),e.jsxs("p",{className:"text-blue-300",children:["Row 0 dot Col 0: 1*5 + 2*7 = 19",e.jsx("br",{}),"Row 0 dot Col 1: 1*6 + 2*8 = 22",e.jsx("br",{}),"Row 1 dot Col 0: 3*5 + 4*7 = 43",e.jsx("br",{}),"Row 1 dot Col 1: 3*6 + 4*8 = 50"]}),e.jsx("p",{className:"text-white font-bold pt-1",children:"➔ [[19, 22], [43, 50]]"})]})]})]})]})}),o==="inplace_mutator"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"⚡ In-Place Arithmetic Mutations (+=, *=) & RAM Efficiency"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Understand how in-place operators reuse existing memory buffers to avoid gigabytes of garbage collection overhead during model training."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm font-bold font-mono text-emerald-300 bg-slate-900 px-2 py-1 rounded",children:"arr += 10 (In-Place)"}),e.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30",children:"Zero Extra RAM"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Directly updates the original memory buffer without creating intermediate array copies on the heap."}),e.jsx("div",{className:"bg-slate-900 p-2.5 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["# For a 10 GB dataset:",e.jsx("br",{}),"X += offset # Uses exactly 10 GB"]})})]}),e.jsxs("div",{className:"bg-slate-950 border border-rose-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("code",{className:"text-sm font-bold font-mono text-rose-300 bg-slate-900 px-2 py-1 rounded",children:"arr = arr + 10 (Reallocation)"}),e.jsx("span",{className:"text-[10px] bg-rose-500/10 text-rose-300 px-2 py-0.5 rounded border border-rose-500/30",children:"Doubles RAM Peak"})]}),e.jsx("p",{className:"text-xs text-slate-300 leading-relaxed",children:"Allocates a temporary new 10 GB buffer in RAM before reassigning the variable name, causing memory spikes."}),e.jsx("div",{className:"bg-slate-900 p-2.5 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["# For a 10 GB dataset:",e.jsx("br",{}),"X = X + offset # Peaks at 20 GB!"]})})]})]}),e.jsxs("div",{className:"bg-amber-950/30 border border-amber-500/50 rounded-xl p-5 space-y-3",children:[e.jsx("h3",{className:"text-sm font-bold text-amber-300 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ The In-Place Dtype Casting Trap"})}),e.jsxs("p",{className:"text-xs text-slate-300 leading-relaxed",children:["In-place operations cannot change an array's dtype. Adding a float to an integer array in-place raises a ",e.jsx("code",{className:"text-amber-300",children:"TypeError"})," because float decimals cannot fit into fixed 32-bit integer slots without reallocation."]}),e.jsx("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800",children:e.jsxs("code",{children:["int_arr = np.array([1, 2, 3], dtype=np.int32)",e.jsx("br",{}),"int_arr += 2.5 # ❌ TypeError: Cannot cast ufunc 'add' output from float64 to int32",e.jsx("br",{}),e.jsx("br",{}),"# ✅ Solution: Ensure float dtype beforehand",e.jsx("br",{}),"float_arr = int_arr.astype(np.float64)",e.jsx("br",{}),"float_arr += 2.5 # Works smoothly!"]})})]})]})}),o==="ml_scaling_loss"&&e.jsx("section",{className:"space-y-6",children:e.jsxs("div",{className:"bg-slate-800/40 border border-slate-700/60 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-white flex items-center gap-2 mb-2",children:e.jsx("span",{children:"🤖 Machine Learning Feature Scaling & MSE Loss Sandbox"})}),e.jsx("p",{className:"text-sm text-slate-400 mb-6",children:"Explore vectorized feature scaling formulas and real-time Mean Squared Error (MSE) loss computation."}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[e.jsxs("div",{className:"bg-slate-950 border border-blue-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-blue-300 font-mono",children:"1. Min-Max Scaling: (X - min) / (max - min)"}),e.jsx("span",{className:"text-[10px] bg-blue-500/10 text-blue-300 px-2 py-0.5 rounded border border-blue-500/30",children:"Range: [0.0, 1.0]"})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsxs("p",{className:"text-slate-500",children:["Raw Scores: [",n.join(", "),"]"]}),e.jsxs("p",{className:"text-blue-300 font-bold",children:["Scaled: [",T.join(", "),"]"]})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Binds all values strictly between 0 and 1. Standard for image pixel normalization and Neural Networks."})]}),e.jsxs("div",{className:"bg-slate-950 border border-emerald-500/40 rounded-xl p-5 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-emerald-300 font-mono",children:"2. Z-Score: (X - μ) / σ"}),e.jsx("span",{className:"text-[10px] bg-emerald-500/10 text-emerald-300 px-2 py-0.5 rounded border border-emerald-500/30",children:"μ = 0, σ = 1"})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-1",children:[e.jsxs("p",{className:"text-slate-500",children:["Mean: ",x.toFixed(1)," | Std: ",N.toFixed(1)]}),e.jsxs("p",{className:"text-emerald-300 font-bold",children:["Standardized: [",B.join(", "),"]"]})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Standardizes distribution around zero with unit variance. Essential for SVMs, Logistic Regression, and PCA."})]})]}),e.jsxs("div",{className:"bg-slate-950 border border-purple-500/40 rounded-xl p-5 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"text-sm font-bold text-purple-300 font-mono",children:"3. Regression Loss: Mean Squared Error (MSE)"}),e.jsxs("div",{className:"flex gap-2",children:[e.jsxs("span",{className:"text-xs font-mono bg-purple-500/10 text-purple-300 px-3 py-1 rounded border border-purple-500/30",children:["MSE: ",e.jsx("strong",{children:b})]}),e.jsxs("span",{className:"text-xs font-mono bg-emerald-500/10 text-emerald-300 px-3 py-1 rounded border border-emerald-500/30",children:["RMSE: ",e.jsx("strong",{children:R})]})]})]}),e.jsxs("div",{className:"bg-slate-900 p-3 rounded font-mono text-xs text-slate-300 border border-slate-800 space-y-2",children:[e.jsx("p",{className:"text-slate-500",children:"# Vectorized Loss Calculation Formula:"}),e.jsxs("p",{className:"text-purple-300",children:["residuals = y_pred - y_true ➔ [",w.join(", "),"]"]}),e.jsxs("p",{className:"text-blue-300",children:["squared_errors = residuals ** 2 ➔ [",h.join(", "),"]"]}),e.jsxs("p",{className:"text-emerald-400 font-bold",children:["mse = np.mean(squared_errors) ➔ ",b]})]})]})]})}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect elementwise arithmetic, hadamard vs dot, in-place memory, or ML losses"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:y.map(r=>e.jsxs("button",{onClick:()=>_(r.id),className:`p-3 rounded-xl border text-left transition-all ${p===r.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${p===r.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:r.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:r.title})]},r.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:d.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:d.summary})]})}),e.jsx(q,{fileModule:d.code,title:d.fileName})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsx("h2",{className:"text-lg font-bold text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Arithmetic Pitfalls & How to Avoid Them"})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300",children:[e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"1. Confusing `*` with Matrix Multiplication"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"A * B"})," performs element-wise Hadamard multiplication. For linear algebra matrix dot products, always use the ",e.jsx("code",{className:"text-emerald-400",children:"@"})," operator (or ",e.jsx("code",{className:"text-emerald-400",children:"np.dot(A, B)"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"2. In-Place Float Addition on Integer Arrays"}),e.jsxs("p",{children:[e.jsx("code",{className:"text-white",children:"int_arr += 1.5"})," raises ",e.jsx("code",{className:"text-rose-300",children:"TypeError"}),". Convert your array to float before performing in-place float additions: ",e.jsx("code",{className:"text-blue-300",children:"arr = arr.astype(float)"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"3. Expecting Python List Concatenation Behavior"}),e.jsxs("p",{children:["Adding two arrays ",e.jsx("code",{className:"text-white",children:"arr1 + arr2"})," adds their numbers element-by-element. If you intended to concatenate them end-to-end, use ",e.jsx("code",{className:"text-purple-300",children:"np.concatenate([arr1, arr2])"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/70 rounded-xl border border-rose-500/20 space-y-2",children:[e.jsx("strong",{className:"text-rose-300 font-bold block",children:"4. Silent Division by Zero Warnings"}),e.jsxs("p",{children:["NumPy does not raise a ZeroDivisionError on ",e.jsx("code",{className:"text-white",children:"1 / 0"}),"; it produces ",e.jsx("code",{className:"text-rose-300",children:"inf"}),". Always inspect datasets for infinite values with ",e.jsx("code",{className:"text-emerald-400",children:"np.isinf()"})," before training ML models."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/50 rounded-2xl p-6 space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"💬 Barrackpore Classroom Q&A"})}),e.jsx("span",{className:"text-xs text-emerald-400 font-mono",children:"Coder & AccoTax Live Session"})]}),e.jsx("div",{className:"space-y-3",children:[{student:"Debangshu",avatar:"👨‍💻",question:"Sir, why did A * B give me a (2, 2) matrix of element-wise products instead of the matrix dot product from our class notes?",answer:"Debangshu, in NumPy, '*' is strictly the Hadamard element-by-element product! To compute the true linear algebra matrix multiplication (dot product of rows and columns), you must use Python's '@' operator: A @ B!"},{student:"Susmita",avatar:"👩‍💻",question:"Why does dividing by zero in NumPy not crash my Python script like normal?",answer:"Susmita, NumPy adheres to the IEEE 754 floating-point standard used in high-performance computing. Instead of crashing, it emits a RuntimeWarning and inserts 'inf' (infinity) or 'nan' (Not a Number), allowing massive batch pipelines to continue processing."},{student:"Tuhina",avatar:"👩‍🔬",question:"Why do we divide digital image pixels by 255.0 before passing them to neural networks?",answer:"Tuhina, raw image pixels range from 0 to 255. Dividing by 255.0 normalizes all pixel intensities into the [0.0, 1.0] range, which prevents neural network weights from exploding during gradient descent!"}].map((r,t)=>e.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-bold text-blue-300",children:[e.jsx("span",{children:r.avatar}),e.jsxs("span",{children:[r.student," asks:"]})]}),e.jsxs("p",{className:"text-xs text-slate-300 italic pl-6",children:['"',r.question,'"']}),e.jsxs("div",{className:"flex items-start gap-2 pt-2 border-t border-slate-800 text-xs text-emerald-300",children:[e.jsx("span",{className:"font-bold text-emerald-400 whitespace-nowrap",children:"Sukanta Sir:"}),e.jsx("p",{className:"text-slate-300",children:r.answer})]})]},t))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"❓ Frequently Asked Questions & Practice Problems"})}),e.jsxs("span",{className:"text-xs text-slate-400 font-mono",children:[j.length," Questions & Answers"]})]}),e.jsx(k,{questions:j})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h2",{className:"text-lg font-bold text-white flex items-center gap-2",children:e.jsx("span",{children:"📄 Printable Topic Summary Note"})}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-800 px-2.5 py-1 rounded border border-slate-700",children:"topic10_note.txt"})]}),e.jsx(X,{text:F,fileName:"topic10_note.txt"})]}),e.jsx(L,{})]})]})};export{te as default};
