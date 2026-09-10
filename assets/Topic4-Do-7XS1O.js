import{b as i,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as S}from"./PythonFileLoader-CiS1GfkF.js";import{F as k}from"./FAQTemplate-D_90hN4m.js";import{P as A}from"./PlainTextPrint-yt10TRX1.js";import{T as F}from"./TeacherSukantaHui-CsvzBmks.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-DFC0rBCP.js";const C=`"""\r
================================================================================\r
Topic 4 - Script 01: Zeros, Ones, and Full Constant Initializers in ML\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- np.zeros(shape, dtype=float64) for zero-initialized biases and accumulators\r
- np.ones(shape, dtype=float64) for mask creation and bias column augmentation\r
- np.full(shape, fill_value) for initializing custom default thresholds or priors\r
- np.zeros_like() and np.ones_like() for matching existing tensor dimensions\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_zeros_and_ones():\r
    print("=" * 65)\r
    print("1. ZERO INITIALIZATION (ML Bias Vectors & Accumulators)")\r
    print("=" * 65)\r
    # Neural network bias vector for 10 output classes\r
    biases = np.zeros(10, dtype=np.float32)\r
    print("Class Biases Vector (shape (10,)):\\n", biases)\r
    \r
    # 2D Zero Matrix for Gradient Accumulator (3 layers x 4 neurons)\r
    grad_acc = np.zeros((3, 4), dtype=np.float32)\r
    print("\\nGradient Accumulator Matrix:\\n", grad_acc)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. ONES & FULL INITIALIZATION")\r
    print("=" * 65)\r
    # Unit weights matrix\r
    unit_weights = np.ones((2, 3), dtype=np.float32)\r
    print("Unit Weights (2, 3):\\n", unit_weights)\r
    \r
    # Initializing all sentiment scores to neutral score 0.5\r
    sentiment_priors = np.full((3, 3), fill_value=0.5, dtype=np.float32)\r
    print("\\nCustom Prior Matrix (fill_value=0.5):\\n", sentiment_priors)\r
\r
    print("\\n" + "=" * 65)\r
    print("3. MATCHING SHAPES WITH _like() VARIANTS")\r
    print("=" * 65)\r
    student_marks = np.array([[80, 85, 90], [70, 75, 80]])\r
    # Create matching mask of booleans or floats\r
    mask = np.ones_like(student_marks, dtype=bool)\r
    print("Original Marks Shape:", student_marks.shape)\r
    print("Matched Ones Mask:\\n", mask)\r
\r
if __name__ == "__main__":\r
    demonstrate_zeros_and_ones()\r
`,T=`"""\r
================================================================================\r
Topic 4 - Script 02: np.arange() vs np.linspace() Mechanics & Floating Pitfalls\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- np.arange(start, stop, step): Half-open interval [start, stop) with step size\r
- Floating-point accumulation error pitfall in np.arange()\r
- np.linspace(start, stop, num_samples, endpoint=True/False): Exact sample count\r
- When to use arange (discrete integer steps) vs linspace (continuous function domains)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def compare_arange_and_linspace():\r
    print("=" * 65)\r
    print("1. np.arange(): STEP-SIZE BASED RANGES")\r
    print("=" * 65)\r
    \r
    # Integer range 0 to 10 with step 2\r
    int_range = np.arange(0, 10, 2)\r
    print("np.arange(0, 10, 2)       :", int_range)\r
\r
    # Floating point step warning\r
    # Due to IEEE 754 precision, arange with floats can unexpectedly include the endpoint!\r
    float_step = np.arange(0.0, 1.0, 0.2)\r
    print("np.arange(0.0, 1.0, 0.2)   :", float_step)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. np.linspace(): EXACT SAMPLE COUNT (RECOMMENDED FOR CONTINUOUS GRIDS)")\r
    print("=" * 65)\r
    \r
    # 5 evenly spaced points between 0.0 and 1.0 inclusive\r
    lin_5 = np.linspace(0.0, 1.0, num=5, endpoint=True)\r
    print("np.linspace(0.0, 1.0, 5)   :", lin_5)\r
    print(f"Exact step distance        : {(1.0 - 0.0) / (5 - 1):.2f}")\r
\r
    # 100 sample points for smooth curve evaluation (e.g. Sigmoid curve)\r
    x_domain = np.linspace(-6.0, 6.0, num=100)\r
    sigmoid_y = 1.0 / (1.0 + np.exp(-x_domain))\r
    print(f"\\nGenerated {len(x_domain)} points for Sigmoid activation curve domain.")\r
    print("x range:", x_domain[0], "to", x_domain[-1])\r
    print("y range:", sigmoid_y[0], "to", sigmoid_y[-1])\r
\r
if __name__ == "__main__":\r
    compare_arange_and_linspace()\r
`,I=`"""\r
================================================================================\r
Topic 4 - Script 03: np.empty() Speedup & Identity / Eye Matrices in ML\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- np.empty(shape): Fast memory allocation without zero-wiping (uninitialized RAM garbage)\r
- When to use np.empty() (when every element is guaranteed to be overwritten immediately)\r
- np.eye(N) & np.identity(N): Diagonal identity matrices\r
- Real ML applications: Ridge regression L2 regularization matrix (lambda * I) and One-Hot Encoding\r
================================================================================\r
"""\r
\r
import time\r
import numpy as np\r
\r
def demonstrate_empty_and_eye():\r
    print("=" * 65)\r
    print("1. np.empty(): UNINITIALIZED BUFFER ALLOCATION")\r
    print("=" * 65)\r
    \r
    # Fast buffer allocation\r
    buf = np.empty((3, 3), dtype=np.float64)\r
    print("Raw np.empty((3,3)) buffer contents (uninitialized RAM garbage):\\n", buf)\r
    \r
    # Filling buffer immediately:\r
    buf.fill(42.0)\r
    print("\\nBuffer after buf.fill(42.0):\\n", buf)\r
\r
    print("\\n" + "=" * 65)\r
    print("2. np.eye(): IDENTITY MATRICES IN ML")\r
    print("=" * 65)\r
    \r
    # 4x4 Identity Matrix\r
    I_4 = np.eye(4, dtype=np.float32)\r
    print("4x4 Identity Matrix:\\n", I_4)\r
\r
    # ML Case: Ridge Regression L2 regularization penalty matrix: lambda * I\r
    lambda_reg = 0.01\r
    reg_matrix = lambda_reg * np.eye(4)\r
    print(f"\\nRidge Regularization Matrix (lambda = {lambda_reg}):\\n", reg_matrix)\r
\r
    # One-Hot Encoding demo using np.eye()\r
    labels = np.array([0, 2, 1, 3]) # 4 samples, 4 classes\r
    one_hot = np.eye(4)[labels]\r
    print("\\nOne-Hot Encoded Targets from labels [0, 2, 1, 3]:\\n", one_hot)\r
\r
if __name__ == "__main__":\r
    demonstrate_empty_and_eye()\r
`,E=`"""\r
================================================================================\r
Topic 4 - Script 04: Generating 2D Decision Grids with linspace & meshgrid\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Generating 2D coordinate test matrices for ML decision boundaries\r
- Combining np.linspace() with np.meshgrid()\r
- Flattening and stacking coordinates with np.c_ / np.column_stack()\r
- Evaluating model predictions across 10,000 grid points\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def generate_decision_boundary_grid():\r
    print("=" * 65)\r
    print("ML TOOL: Generating Evaluation Coordinate Grid for Classifiers")\r
    print("=" * 65)\r
\r
    # Feature 1: Study Hours (0 to 10 hours)\r
    # Feature 2: Attendance (0% to 100%)\r
    x1_coords = np.linspace(0.0, 10.0, 50)\r
    x2_coords = np.linspace(0.0, 100.0, 50)\r
\r
    # Create 2D coordinate meshgrid\r
    XX1, XX2 = np.meshgrid(x1_coords, x2_coords)\r
    print(f"XX1 Grid Shape: {XX1.shape}")\r
    print(f"XX2 Grid Shape: {XX2.shape}")\r
\r
    # Flatten and pair up into (N_samples, 2_features)\r
    grid_points = np.c_[XX1.ravel(), XX2.ravel()]\r
    print(f"Total evaluation test points: {grid_points.shape[0]} points")\r
    print("First 5 test coordinate vectors:\\n", grid_points[:5])\r
\r
    # Simulate Linear Classifier boundary: Pass if 8*hours + 0.6*att > 65\r
    weights = np.array([8.0, 0.6])\r
    bias = -65.0\r
    logits = np.dot(grid_points, weights) + bias\r
    preds = (logits >= 0).astype(int)\r
\r
    print(f"\\nModel evaluation complete!")\r
    print(f"Pass predictions: {np.sum(preds == 1):,} points")\r
    print(f"Fail predictions: {np.sum(preds == 0):,} points")\r
\r
if __name__ == "__main__":\r
    generate_decision_boundary_grid()\r
`,M=`\uFEFF========================================================\r
NUMPY ESSENTIALS — TOPIC 4: ARRAY CREATION FUNCTIONS\r
np.zeros, np.ones, np.arange, np.linspace\r
========================================================\r
\r
ARRAY CREATION FUNCTIONS:\r
These create arrays of a specified shape without needing input data.\r
\r
np.zeros(shape, dtype=float64)\r
  → Array filled with 0.0\r
  → Use: initializing weight matrices in ML\r
  np.zeros((3, 4))   → 3×4 matrix of zeros\r
\r
np.ones(shape, dtype=float64)\r
  → Array filled with 1.0\r
  → Use: bias initialization, mask creation\r
  np.ones((5,))      → [1. 1. 1. 1. 1.]\r
\r
np.full(shape, fill_value)\r
  → Array filled with any constant\r
  np.full((3,3), 7)  → 3×3 matrix of 7s\r
\r
np.eye(N)\r
  → N×N identity matrix (1s on diagonal, 0s elsewhere)\r
  → Use: linear algebra operations\r
  np.eye(3)  → [[1,0,0],[0,1,0],[0,0,1]]\r
\r
np.arange(start, stop, step)\r
  → Like Python range() but returns ndarray\r
  → Integer or float steps\r
  np.arange(0, 10, 2)  → [0, 2, 4, 6, 8]\r
  np.arange(0, 1, 0.1) → [0.0, 0.1, 0.2, ..., 0.9]\r
  NOTE: stop is EXCLUSIVE (like Python range)\r
\r
np.linspace(start, stop, num)\r
  → num evenly spaced floats from start to stop (INCLUSIVE)\r
  → Use: plotting, creating test inputs\r
  np.linspace(0, 1, 5)   → [0.0, 0.25, 0.5, 0.75, 1.0]\r
  np.linspace(0, 10, 11) → [0, 1, 2, ..., 10]\r
\r
arange vs linspace:\r
  np.arange(0, 1, 0.1)   → step-based, may have floating-point issues\r
  np.linspace(0, 1, 11)  → count-based, exact endpoint control\r
\r
QUICK REVISION:\r
  □ np.zeros(shape)        → all zeros\r
  □ np.ones(shape)         → all ones\r
  □ np.eye(N)              → identity matrix\r
  □ np.arange(start,stop)  → step-based sequence\r
  □ np.linspace(a,b,N)     → N evenly spaced including endpoints\r
`,R=[{question:"What is the default data type (dtype) of arrays created by np.zeros() and np.ones()?",shortAnswer:"np.float64 (standard 64-bit double-precision floating point).",explanation:"If no explicit dtype is specified, NumPy defaults to float64. For memory-sensitive ML pipelines, you should explicitly pass dtype=np.float32 to save 50% RAM.",hint:"Float64 is NumPy's default floating point precision.",level:"basic",codeExample:`import numpy as np
z = np.zeros(5)
print(z.dtype)  # float64
print(z)        # [0. 0. 0. 0. 0.]`},{question:"Why does np.zeros(3, 4) cause a TypeError, and what is the correct syntax?",shortAnswer:"np.zeros expects shape as a single tuple: np.zeros((3, 4)).",explanation:"In np.zeros(shape, dtype=float, order='C'), the second argument is interpreted as dtype. Passing 4 as the second argument causes TypeError because 4 is an integer, not a valid data type. Pass the shape as a tuple (3, 4).",hint:"Always enclose multi-dimensional dimensions in parentheses as a tuple.",level:"basic",codeExample:`# BAD — TypeError:
# np.zeros(3, 4)

# CORRECT:
z = np.zeros((3, 4))
print(z.shape)  # (3, 4)`},{question:"What is the primary difference between np.arange() and np.linspace()?",shortAnswer:"np.arange() is step-size based (stop is exclusive); np.linspace() is count based (endpoint is inclusive by default).",explanation:"np.arange(start, stop, step) increments by a fixed step size and stops strictly before stop. np.linspace(start, stop, num) generates exactly num evenly spaced numbers between start and stop (including stop by default).",hint:"arange = specify step size; linspace = specify total count of numbers.",level:"basic",codeExample:`import numpy as np
a = np.arange(0, 10, 2)    # [0, 2, 4, 6, 8] (step=2, exclusive stop)
l = np.linspace(0, 10, 5)  # [0. , 2.5, 5. , 7.5, 10.] (count=5, inclusive)
print(a, l)`},{question:"Why is np.linspace() preferred over np.arange() when generating continuous ranges with floating-point steps?",shortAnswer:"Floating-point precision errors in arange can cause unpredictable inclusion or exclusion of the endpoint.",explanation:"Because floating-point arithmetic has finite precision (e.g. 0.1 + 0.2 != 0.3), np.arange(0, 0.3, 0.1) may produce 3 or 4 elements depending on floating-point rounding. np.linspace avoids this by dividing the exact range by (num - 1).",hint:"Floating-point rounding errors make arange step boundaries unstable.",level:"intermediate",codeExample:`import numpy as np
# linspace gives guaranteed, exact element counts:
points = np.linspace(0.0, 1.0, 11)  # exactly 11 points: 0.0, 0.1, ..., 1.0`},{question:"What is the mathematical formula used by np.linspace(start, stop, num) to compute the step size?",shortAnswer:"step = (stop - start) / (num - 1) when endpoint=True.",explanation:"When endpoint=True (the default), there are (num - 1) intervals between the num points. If endpoint=False, the formula is step = (stop - start) / num.",hint:"Divide the total interval width by the number of gaps (num - 1).",level:"intermediate",codeExample:`import numpy as np
grid, step = np.linspace(0, 10, 5, retstep=True)
print(grid)  # [ 0.   2.5  5.   7.5 10. ]
print(step)  # 2.5 ((10 - 0) / (5 - 1))`},{question:"How does the retstep parameter in np.linspace() work?",shortAnswer:"If retstep=True, it returns a 2-element tuple: (samples_array, step_size).",explanation:"Setting retstep=True causes linspace to return both the generated array and the calculated scalar step size between consecutive samples, which is useful when setting up numerical integrals or finite differences.",hint:"retstep = return step size.",level:"intermediate",codeExample:`import numpy as np
arr, step = np.linspace(0, 100, num=11, retstep=True)
print('Step size:', step)  # 10.0`},{question:"What does np.empty() do and why does it contain non-zero garbage values?",shortAnswer:"np.empty() allocates memory without initializing bytes, so it contains leftover garbage from RAM.",explanation:"np.empty(shape) requests a contiguous memory buffer from the operating system but skips filling it with zeros or ones. It is slightly faster than np.zeros(), but you must manually overwrite every element before reading.",hint:"empty skips memory initialization for maximum raw allocation speed.",level:"intermediate",codeExample:`import numpy as np
e = np.empty((2, 2), dtype=np.float64)
# Contains whatever bits previously existed at that RAM address
print(e)`},{question:"What is the difference between np.eye() and np.identity()?",shortAnswer:"np.identity(n) only creates square n×n matrices; np.eye(N, M, k) allows rectangular matrices and diagonal shifts k.",explanation:"np.identity(3) creates a 3×3 square identity matrix. np.eye(3, 5, k=1) creates a 3×5 matrix with 1s shifted to the upper diagonal (k=1) and 0s elsewhere.",hint:"eye supports rectangular shapes (N, M) and diagonal offsets k.",level:"intermediate",codeExample:`import numpy as np
square_id = np.identity(3)          # 3x3
shifted_eye = np.eye(3, 4, k=1)     # 3x4 with 1s on upper diagonal
print(shifted_eye)`},{question:"How are np.eye() matrices used in Ridge Regression (L2 Regularization)?",shortAnswer:"They provide the lambda * I penalty matrix added to X^T X to prevent matrix singularity and control overfitting.",explanation:"In closed-form Ridge Regression, the analytical solution is beta = (X^T X + lambda * I)^(-1) X^T y. np.eye(p) creates the p×p identity matrix I scaled by regularization hyperparameter lambda.",hint:"Ridge adds lambda * I to the normal equation matrix.",level:"advanced",codeExample:`import numpy as np
p_features = 4
lambda_val = 0.1
I = np.eye(p_features)
penalty_term = lambda_val * I
print(penalty_term)`},{question:"How do template cloning functions like np.zeros_like(x) work?",shortAnswer:"They create an array of zeros with the exact same shape and dtype as the template array x.",explanation:"Instead of manually writing np.zeros(x.shape, dtype=x.dtype), np.zeros_like(x) automatically copies the shape, data type, and memory order from the reference array x.",hint:"zeros_like clones shape, dtype, and order from an existing array.",level:"basic",codeExample:`import numpy as np
template = np.array([[1.5, 2.5], [3.5, 4.5]], dtype=np.float32)
z = np.zeros_like(template)
print(z.shape)  # (2, 2)
print(z.dtype)  # float32`},{question:"What does np.full(shape, fill_value) do?",shortAnswer:"Creates an ndarray of the specified shape filled entirely with fill_value.",explanation:"np.full((3, 3), 7.5) creates a 3×3 array where all 9 elements are initialized to 7.5. It automatically infers dtype from fill_value unless explicitly overridden.",hint:"full fills every cell with a specified constant.",level:"basic",codeExample:`import numpy as np
arr = np.full((2, 3), fill_value=99, dtype=np.int16)
print(arr)  # [[99, 99, 99], [99, 99, 99]]`},{question:"How is np.ones() commonly used when preparing a feature matrix X for Linear Regression?",shortAnswer:"To create an augmented column of 1s representing the intercept/bias feature x0.",explanation:"In linear regression y = beta0 + beta1*x1 + beta2*x2, the intercept beta0 is multiplied by a dummy feature x0=1. np.ones((N_samples, 1)) generates this bias column, which is prepended to X using np.hstack.",hint:"A column of 1s multiplies the bias term beta0.",level:"intermediate",codeExample:`import numpy as np
X_raw = np.array([[2.5], [3.8], [1.2]])  # 3 samples x 1 feature
ones_col = np.ones((X_raw.shape[0], 1))
X_augmented = np.hstack([ones_col, X_raw])
print(X_augmented)  # [[1. , 2.5], [1. , 3.8], [1. , 1.2]]`},{question:"What does np.logspace(start, stop, num) generate?",shortAnswer:"num numbers spaced evenly on a log scale between base^start and base^stop (default base=10).",explanation:"np.logspace(-3, 0, 4) produces 10^-3, 10^-2, 10^-1, and 10^0 ([0.001, 0.01, 0.1, 1.0]). It is widely used in Machine Learning hyperparameter tuning (GridSearchCV) for learning rates and regularization alphas.",hint:"logspace generates powers of 10 (or a specified base).",level:"intermediate",codeExample:`import numpy as np
lrs = np.logspace(-4, -1, num=4)  # 10^-4, 10^-3, 10^-2, 10^-1
print(lrs)  # [0.0001, 0.001 , 0.01  , 0.1   ]`},{question:"What is the difference between np.logspace() and np.geomspace()?",shortAnswer:"logspace takes powers of base as inputs (e.g. -3 to 0); geomspace takes actual start and stop numbers (e.g. 0.001 to 1.0).",explanation:"np.logspace(1, 3, 3) generates [10^1, 10^2, 10^3] = [10, 100, 1000]. np.geomspace(10, 1000, 3) directly takes 10 and 1000 as bounds, producing the exact same geometric progression [10, 100, 1000].",hint:"geomspace takes actual endpoint numbers instead of exponents.",level:"intermediate",codeExample:`import numpy as np
a = np.logspace(1, 3, 3)     # exponents 1 to 3 -> [10, 100, 1000]
b = np.geomspace(10, 1000, 3)# values 10 to 1000   -> [10, 100, 1000]
print(np.allclose(a, b))     # True`},{question:"What happens when you pass a negative step to np.arange(10, 0, -2)?",shortAnswer:"It generates a decreasing sequence: [10, 8, 6, 4, 2], stopping before 0.",explanation:"When step is negative, start must be greater than stop. The sequence decrements by step until reaching the value strictly greater than stop.",hint:"Negative steps decrement the array from high to low.",level:"basic",codeExample:`import numpy as np
countdown = np.arange(10, 0, -2)
print(countdown)  # [10, 8, 6, 4, 2]`},{question:"What does np.full_like(a, fill_value) do when given a float array but an integer fill value?",shortAnswer:"The integer fill value is cast to the float dtype of template array a.",explanation:"np.full_like inherits the exact dtype of template a. If a is float64, passing fill_value=5 stores 5.0 in the output array.",hint:"full_like enforces the template array's data type.",level:"intermediate",codeExample:`import numpy as np
template = np.zeros((2, 2), dtype=np.float64)
arr = np.full_like(template, fill_value=7)
print(arr.dtype)  # float64
print(arr)        # [[7., 7.], [7., 7.]]`},{question:"How can you create a 3D tensor of zeros of shape (16, 28, 28) representing a batch of 16 grayscale MNIST images?",shortAnswer:"np.zeros((16, 28, 28), dtype=np.float32)",explanation:"Passing the 3-tuple (16, 28, 28) creates an ndarray with 16 batches, 28 rows, and 28 columns (total 12,544 elements) initialized to zero.",hint:"Shape tuple: (Batch_Size, Height, Width).",level:"intermediate",codeExample:`import numpy as np
mnist_batch = np.zeros((16, 28, 28), dtype=np.float32)
print(mnist_batch.shape)  # (16, 28, 28)
print(mnist_batch.ndim)   # 3`},{question:"What is the memory and speed advantage of np.zeros(1_000_000) over [0] * 1_000_000?",shortAnswer:"NumPy calls the OS calloc() C function, allocating zeroed RAM instantaneously without allocating 1M Python objects.",explanation:"calloc() maps zero-filled virtual memory pages on demand. Python lists must allocate 1,000,000 separate pointer entries pointing to the integer 0 object, consuming 8 MB of pointer overhead plus interpreter loop time.",hint:"NumPy uses C calloc() for near-instant zero-memory mapping.",level:"advanced",codeExample:`import numpy as np
z = np.zeros(1_000_000, dtype=np.float32)  # Takes <1 ms and exactly 4 MB`},{question:"What does np.eye(3, k=-1) produce?",shortAnswer:"A 3×3 matrix with 1s on the first subdiagonal (below main diagonal) and 0s elsewhere.",explanation:"The k parameter controls the diagonal index: k=0 is main diagonal, k>0 is above main diagonal (superdiagonal), and k<0 is below main diagonal (subdiagonal).",hint:"k < 0 shifts the 1s below the main diagonal.",level:"intermediate",codeExample:`import numpy as np
sub_diag = np.eye(3, k=-1)
print(sub_diag)
# [[0., 0., 0.],
#  [1., 0., 0.],
#  [0., 1., 0.]]`},{question:"Why should you NOT use np.empty() if you plan to perform in-place mathematical operations like arr += 5?",shortAnswer:"Because the initial garbage values in RAM will corrupt your mathematical calculations.",explanation:"np.empty() leaves whatever raw bytes previously existed in RAM. If you perform arr += 5 or np.sum(arr), you are adding to arbitrary uninitialized memory values (which might include NaN or infinities). Always use np.zeros() if initializing an accumulator.",hint:"Accumulators require clean zero initialization.",level:"intermediate",codeExample:`import numpy as np
# DANGEROUS: accumulator initialized with empty()
acc = np.empty((2, 2))
acc += 5.0  # Corrupted by garbage values!

# SAFE:
acc_clean = np.zeros((2, 2))
acc_clean += 5.0`},{question:"How do you create an array of booleans initialized to all False using np.zeros?",shortAnswer:"np.zeros(shape, dtype=np.bool_)",explanation:"Because zero corresponds to False in boolean representation, passing dtype=np.bool_ (or dtype=bool) initializes all elements to False with 1 byte per boolean item.",hint:"0 is False in binary boolean representation.",level:"basic",codeExample:`import numpy as np
mask = np.zeros((3, 3), dtype=np.bool_)
print(mask)
# [[False False False],
#  [False False False],
#  [False False False]]`},{question:"What is the result of np.arange(5)?",shortAnswer:"An integer ndarray: [0, 1, 2, 3, 4].",explanation:"When only one argument is provided to np.arange(stop), start defaults to 0 and step defaults to 1, producing numbers from 0 up to stop - 1.",hint:"Single argument = stop value starting from 0.",level:"basic",codeExample:`import numpy as np
print(np.arange(5))  # [0 1 2 3 4]`},{question:"How does endpoint=False affect the output of np.linspace(0, 10, 5, endpoint=False)?",shortAnswer:"It excludes 10.0 and divides the interval into 5 steps of 2.0: [0., 2., 4., 6., 8.].",explanation:"With endpoint=False, stop (10.0) is not included in the output. The step size is calculated as (stop - start) / num = (10 - 0) / 5 = 2.0.",hint:"endpoint=False excludes the stop value and changes step size calculation.",level:"intermediate",codeExample:`import numpy as np
print(np.linspace(0, 10, 5, endpoint=False))  # [0. 2. 4. 6. 8.]`},{question:"How do you generate a 1D coordinate grid for plotting a sigmoid activation function between -6 and +6 with 100 points?",shortAnswer:"x = np.linspace(-6, 6, 100)",explanation:"np.linspace(-6, 6, 100) produces 100 smooth, evenly spaced points across the active domain of the sigmoid function, ideal for Matplotlib curves.",hint:"np.linspace(-6, 6, 100) provides 100 smooth points.",level:"basic",codeExample:`import numpy as np
x = np.linspace(-6, 6, 100)
sigmoid = 1.0 / (1.0 + np.exp(-x))
print(x.shape, sigmoid.shape)  # (100,) (100,)`},{question:"What order parameter option ensures that an array created with np.zeros((3, 4), order='F') is column-major?",shortAnswer:"order='F' forces Fortran column-major memory layout.",explanation:"By default, order='C' stores rows consecutively in memory. Setting order='F' stores columns consecutively (F_CONTIGUOUS: True), which can speed up operations when interfacing with Fortran libraries or BLAS column-major routines.",hint:"order='F' sets Fortran column-major ordering.",level:"advanced",codeExample:`import numpy as np
z_fortran = np.zeros((3, 4), order='F')
print(z_fortran.flags['F_CONTIGUOUS'])  # True
print(z_fortran.strides)                # (8, 24) -> 8 bytes per col step!`}],h=[{id:"part1",fileName:"01_zeros_and_ones_initialization.py",title:"1. Zeros, Ones & Full Initializers",badge:"Zeros & Ones",code:C,summary:"Demonstrates zero bias vectors, gradient accumulator matrices, sentiment score prior matrices, and _like shape-matching variants."},{id:"part2",fileName:"02_arange_vs_linspace_mechanics.py",title:"2. arange vs linspace & Float Pitfalls",badge:"Step vs Samples",code:T,summary:"Explains step intervals vs sample counts, floating-point accumulation drift in arange, and smooth activation domain curves with linspace."},{id:"part3",fileName:"03_empty_and_eye_matrices.py",title:"3. np.empty() Speedup & Identity / Eye Matrices",badge:"Empty & Eye",code:I,summary:"Demonstrates fast uninitialized buffer allocation with np.empty() and identity matrices for Ridge L2 regularization and One-Hot encoding."},{id:"part4",fileName:"04_ml_coordinate_grid_mesh.py",title:"4. ML Decision Boundary Meshgrids",badge:"ML Meshgrids",code:E,summary:"Generates continuous 2D coordinate test grids using linspace and meshgrid to simulate boundary classifications across thousands of points."}],B=[{fn:"np.zeros(shape, dtype)",purpose:"Fills matrix entirely with 0.0",example:"np.zeros((3, 4), dtype=np.float32)",mlUse:"Weight gradient accumulators, empty buffer allocations",color:"border-blue-500/50 bg-blue-950/20 text-blue-300",badge:"bg-blue-500/20 text-blue-300 border-blue-500/40"},{fn:"np.ones(shape, dtype)",purpose:"Fills matrix entirely with 1.0",example:"np.ones((N_samples, 1))",mlUse:"Adding bias/intercept column (x0 = 1) to feature matrix X",color:"border-emerald-500/50 bg-emerald-950/20 text-emerald-300",badge:"bg-emerald-500/20 text-emerald-300 border-emerald-500/40"},{fn:"np.full(shape, fill_value)",purpose:"Fills matrix with arbitrary constant",example:"np.full((3, 3), fill_value=5.0)",mlUse:"Baseline default predictions, threshold masks",color:"border-purple-500/50 bg-purple-950/20 text-purple-300",badge:"bg-purple-500/20 text-purple-300 border-purple-500/40"},{fn:"np.eye(N, M, k)",purpose:"Creates 2D Identity matrix (1s on diagonal)",example:"np.eye(p, dtype=np.float64)",mlUse:"Ridge Regression (L2) regularizer (X^T X + λI)^(-1)",color:"border-amber-500/50 bg-amber-950/20 text-amber-300",badge:"bg-amber-500/20 text-amber-300 border-amber-500/40"},{fn:"np.arange(start, stop, step)",purpose:"Step-based numeric sequence (stop exclusive)",example:"np.arange(0, 10, 2)",mlUse:"Epoch counters, discrete index ranges, iteration steps",color:"border-cyan-500/50 bg-cyan-950/20 text-cyan-300",badge:"bg-cyan-500/20 text-cyan-300 border-cyan-500/40"},{fn:"np.linspace(start, stop, num)",purpose:"Count-based evenly spaced points (stop inclusive)",example:"np.linspace(-5.0, 5.0, 100)",mlUse:"Continuous loss curve plotting, decision boundary grids",color:"border-pink-500/50 bg-pink-950/20 text-pink-300",badge:"bg-pink-500/20 text-pink-300 border-pink-500/40"}],P=[{aspect:"Primary Parameter",arange:"Step Size (step): e.g. step=0.5",linspace:"Total Point Count (num): e.g. num=100"},{aspect:"Stop Value Treatment",arange:"Strictly EXCLUSIVE (stops before stop)",linspace:"Strictly INCLUSIVE by default (endpoint=True)"},{aspect:"Floating-Point Safety",arange:"⚠️ Rounding accumulation can cause missing/extra elements",linspace:"✔ Mathematically exact endpoint and division: (stop-start)/(num-1)"},{aspect:"Best Use Case",arange:"Discrete integer iteration (e.g. batch slices 0, 32, 64...)",linspace:"Smooth mathematical curves, plotting functions & test meshes"},{aspect:"Returns Step Size?",arange:"No",linspace:"Yes, via retstep=True (returns tuple: array, step)"}],H=()=>{const[l,g]=i.useState("overview"),[b,y]=i.useState(null),[x,f]=i.useState("part1"),d=h.find(t=>t.id===x)||h[0],[r,j]=i.useState("zeros"),[s,u]=i.useState(3),[o,N]=i.useState(4),[p,v]=i.useState(0),[c,w]=i.useState(10),[m,_]=i.useState(5),z=[{id:"overview",label:"Overview & Sandbox"},{id:"initializers",label:"zeros & ones Initializers"},{id:"arange_vs_linspace",label:"arange vs linspace"},{id:"full_empty_eye",label:"full, empty & eye"},{id:"cloning",label:"Template Cloning (_like)"},{id:"ml_uses",label:"ML Initialization Use-Cases"}];return e.jsxs("div",{className:"space-y-8 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-12",children:[e.jsxs("header",{className:"relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-60 h-60 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Segment 9 • Module 1 • Topic 4"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Array Generators"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Built-in Functions"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:["Built-in Array Creation: ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"np.zeros"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"np.ones"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"np.arange"}),", ",e.jsx("code",{className:"text-pink-400 font-mono",children:"np.linspace"})]}),e.jsx("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:"NumPy provides high-speed built-in array generator functions that instantiate structured memory directly in C without passing Python sequences. Click any tab below to explore continuous mathematical sequences, bias column insertions, weight matrix initialization, and identity matrices."}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:z.map(t=>e.jsx("button",{onClick:()=>g(t.id),className:`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${l===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400 ring-2 ring-indigo-400/30":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"}`,children:t.label},t.id))})]})]}),l==="overview"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Generator Functions Overview & Purpose"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Why specialized array initializers are essential in Machine Learning"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 hover:border-indigo-500/40 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),e.jsx("h3",{className:"font-bold text-cyan-300 text-base",children:"What are Built-in Initializers?"})]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Built-in creation functions (",e.jsx("code",{className:"text-cyan-300 font-mono",children:"zeros"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ones"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"arange"}),", ",e.jsx("code",{className:"text-pink-300 font-mono",children:"linspace"}),", ",e.jsx("code",{className:"text-purple-300 font-mono",children:"eye"}),") allocate ndarrays of specified dimensions and contents without requiring existing data."]}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Direct C-level allocation bypassing Python sequence translation"}),e.jsx("li",{children:"Generates exact mathematical intervals, constants, or diagonal matrices"}),e.jsx("li",{children:"Supports arbitrary N-dimensional shape tuples"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 hover:border-indigo-500/40 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),e.jsx("h3",{className:"font-bold text-emerald-300 text-base",children:"Why Use Them Instead of Python Loops?"})]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Creating large arrays using Python syntax like ",e.jsx("code",{className:"text-rose-300 font-mono",children:"[0.0] * 1000000"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"[i * 0.1 for i in range(100)]"})," is both slow and prone to precision loss."]}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"OS Speed:"})," ",e.jsx("code",{className:"text-emerald-300",children:"np.zeros()"})," invokes C ",e.jsx("code",{className:"text-slate-200",children:"calloc()"})," for instant zero-page mapping"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Endpoint Accuracy:"})," ",e.jsx("code",{className:"text-pink-300",children:"np.linspace()"})," computes exact non-accumulating mathematical steps"]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-white",children:"Zero Fragmentation:"})," Allocates a single solid memory block immediately"]})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Visual Structure & Generator Sandbox"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Compare how zeros, ones, identity matrices, and linspace coordinate grids are laid out"})]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center",children:e.jsxs("svg",{className:"w-full max-w-3xl h-auto",viewBox:"0 0 800 360",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"800",height:"360",rx:"16",fill:"#0B1120"}),e.jsxs("g",{transform:"translate(40, 30)",children:[e.jsx("rect",{x:"0",y:"0",width:"210",height:"150",rx:"10",fill:"#0F172A",stroke:"#3B82F6",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"24",fill:"#93C5FD",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",children:"np.zeros((3, 3))"}),e.jsx("text",{x:"15",y:"40",fill:"#64748B",fontSize:"10",fontFamily:"sans-serif",children:"Weight initialization / buffer"}),[0,1,2].map(t=>[0,1,2].map(n=>e.jsxs("g",{transform:`translate(${20+n*56}, ${52+t*28})`,children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"24",rx:"4",fill:"#1E293B",stroke:"#3B82F6",strokeWidth:"1",children:e.jsx("animate",{attributeName:"stroke-opacity",values:"0.3;1;0.3",dur:"2.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"25",y:"16",fill:"#60A5FA",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"0.0"})]},`${t}-${n}`)))]}),e.jsxs("g",{transform:"translate(295, 30)",children:[e.jsx("rect",{x:"0",y:"0",width:"210",height:"150",rx:"10",fill:"#064E3B",fillOpacity:"0.2",stroke:"#10B981",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"24",fill:"#6EE7B7",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",children:"np.ones((3, 3))"}),e.jsx("text",{x:"15",y:"40",fill:"#64748B",fontSize:"10",fontFamily:"sans-serif",children:"Bias column / mask filter"}),[0,1,2].map(t=>[0,1,2].map(n=>e.jsxs("g",{transform:`translate(${20+n*56}, ${52+t*28})`,children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"24",rx:"4",fill:"#064E3B",stroke:"#34D399",strokeWidth:"1",children:e.jsx("animate",{attributeName:"stroke-opacity",values:"0.3;1;0.3",dur:"2.5s",begin:"0.3s",repeatCount:"indefinite"})}),e.jsx("text",{x:"25",y:"16",fill:"#A7F3D0",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:"1.0"})]},`${t}-${n}`)))]}),e.jsxs("g",{transform:"translate(550, 30)",children:[e.jsx("rect",{x:"0",y:"0",width:"210",height:"150",rx:"10",fill:"#78350F",fillOpacity:"0.2",stroke:"#F59E0B",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"24",fill:"#FDE68A",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",children:"np.eye(3)"}),e.jsx("text",{x:"15",y:"40",fill:"#64748B",fontSize:"10",fontFamily:"sans-serif",children:"Identity matrix / Ridge L2"}),[0,1,2].map(t=>[0,1,2].map(n=>{const a=t===n;return e.jsxs("g",{transform:`translate(${20+n*56}, ${52+t*28})`,children:[e.jsx("rect",{x:"0",y:"0",width:"50",height:"24",rx:"4",fill:a?"#78350F":"#1E293B",stroke:a?"#F59E0B":"#475569",strokeWidth:a?"1.5":"1",children:a&&e.jsx("animate",{attributeName:"stroke-opacity",values:"0.5;1;0.5",dur:"1.8s",repeatCount:"indefinite"})}),e.jsx("text",{x:"25",y:"16",fill:a?"#FBBF24":"#94A3B8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:a?"1.0":"0.0"})]},`${t}-${n}`)}))]}),e.jsxs("g",{transform:"translate(40, 210)",children:[e.jsx("rect",{x:"0",y:"0",width:"720",height:"120",rx:"10",fill:"#18181B",stroke:"#6366F1",strokeWidth:"1"}),e.jsx("text",{x:"20",y:"25",fill:"#A5B4FC",fontSize:"12",fontWeight:"bold",fontFamily:"monospace",children:"SEQUENCE COMPARISON: np.arange(0, 10, 2) vs np.linspace(0, 10, 5)"}),e.jsxs("g",{transform:"translate(20, 45)",children:[e.jsx("text",{x:"0",y:"12",fill:"#38BDF8",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",children:"arange (step=2, exclusive stop):"}),e.jsx("line",{x1:"220",y1:"8",x2:"680",y2:"8",stroke:"#334155",strokeWidth:"2"}),[0,2,4,6,8].map((t,n)=>{const a=220+t/10*460;return e.jsxs("g",{children:[e.jsx("circle",{cx:a,cy:"8",r:"4",fill:"#38BDF8"}),e.jsx("text",{x:a,y:"24",fill:"#38BDF8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:t})]},n)}),e.jsx("circle",{cx:680,cy:"8",r:"4",fill:"#EF4444",stroke:"#7F1D1D"}),e.jsx("text",{x:"680",y:"24",fill:"#EF4444",fontSize:"8",textAnchor:"middle",fontFamily:"monospace",children:"10 ✗"})]}),e.jsxs("g",{transform:"translate(20, 80)",children:[e.jsx("text",{x:"0",y:"12",fill:"#EC4899",fontSize:"10",fontWeight:"bold",fontFamily:"monospace",children:"linspace (num=5, inclusive stop):"}),e.jsx("line",{x1:"220",y1:"8",x2:"680",y2:"8",stroke:"#334155",strokeWidth:"2"}),[0,2.5,5,7.5,10].map((t,n)=>{const a=220+t/10*460;return e.jsxs("g",{children:[e.jsx("circle",{cx:a,cy:"8",r:"4",fill:"#EC4899"}),e.jsx("text",{x:a,y:"24",fill:"#F472B6",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:t.toFixed(1)})]},n)})]})]})]})}),e.jsxs("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 space-y-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-bold text-white text-base",children:"Interactive Generator Sandbox"}),e.jsx("span",{className:"text-xs font-mono text-cyan-400 bg-cyan-950/60 px-2.5 py-1 rounded border border-cyan-800",children:"Live Python Code Generator"})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:[{id:"zeros",label:"np.zeros()"},{id:"ones",label:"np.ones()"},{id:"eye",label:"np.eye()"},{id:"linspace",label:"np.linspace()"}].map(t=>e.jsx("button",{onClick:()=>j(t.id),className:`p-2.5 text-xs font-mono font-bold rounded-lg border transition-all cursor-pointer ${r===t.id?"bg-indigo-600 text-white border-indigo-400 shadow-lg shadow-indigo-600/30":"bg-slate-900 text-slate-300 border-slate-700 hover:bg-slate-800"}`,children:t.label},t.id))}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-mono",children:r==="zeros"||r==="ones"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Rows (Dimension 0):"}),e.jsx("input",{type:"number",min:"1",max:"6",value:s,onChange:t=>u(Math.max(1,Number(t.target.value))),className:"w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Columns (Dimension 1):"}),e.jsx("input",{type:"number",min:"1",max:"6",value:o,onChange:t=>N(Math.max(1,Number(t.target.value))),className:"w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Data Type (dtype):"}),e.jsx("div",{className:"p-2 bg-slate-900 border border-slate-700 rounded text-cyan-300",children:"np.float32 (4 bytes)"})]})]}):r==="eye"?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Matrix Dimension N (N×N):"}),e.jsx("input",{type:"number",min:"2",max:"6",value:s,onChange:t=>u(Math.max(2,Number(t.target.value))),className:"w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"ML Use Context:"}),e.jsx("div",{className:"p-2 bg-slate-900 border border-slate-700 rounded text-amber-300",children:"Ridge L2 Regularization (λI)"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Result Shape:"}),e.jsxs("div",{className:"p-2 bg-slate-900 border border-slate-700 rounded text-emerald-300",children:["(",s,", ",s,") Square Matrix"]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Start Value (start):"}),e.jsx("input",{type:"number",value:p,onChange:t=>v(Number(t.target.value)),className:"w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Stop Value (stop):"}),e.jsx("input",{type:"number",value:c,onChange:t=>w(Number(t.target.value)),className:"w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"})]}),e.jsxs("div",{className:"space-y-1",children:[e.jsx("label",{className:"text-slate-400",children:"Sample Count (num):"}),e.jsx("input",{type:"number",min:"2",max:"10",value:m,onChange:t=>_(Math.max(2,Number(t.target.value))),className:"w-full bg-slate-900 border border-slate-700 p-2 rounded text-white"})]})]})}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono bg-slate-900/90 p-4 rounded-xl border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Generated NumPy Code:"}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded border border-slate-800 text-emerald-300",children:[r==="zeros"&&`arr = np.zeros((${s}, ${o}), dtype=np.float32)`,r==="ones"&&`arr = np.ones((${s}, ${o}), dtype=np.float32)`,r==="eye"&&`arr = np.eye(${s}, dtype=np.float64)`,r==="linspace"&&`arr, step = np.linspace(${p}, ${c}, num=${m}, retstep=True)`]})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Array Metadata:"}),e.jsx("div",{className:"p-3 bg-slate-950 rounded border border-slate-800 text-slate-300 space-y-1",children:r==="zeros"||r==="ones"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Shape: ",e.jsxs("strong",{className:"text-cyan-300",children:["(",s,", ",o,")"]})]}),e.jsxs("p",{children:["Total Size: ",e.jsx("strong",{className:"text-amber-300",children:s*o})," elements"]}),e.jsxs("p",{children:["RAM Footprint: ",e.jsxs("strong",{className:"text-emerald-300",children:[s*o*4," Bytes"]})]})]}):r==="eye"?e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Shape: ",e.jsxs("strong",{className:"text-cyan-300",children:["(",s,", ",s,")"]})]}),e.jsxs("p",{children:["Non-zero 1s on diagonal: ",e.jsx("strong",{className:"text-amber-300",children:s})]}),e.jsxs("p",{children:["RAM Footprint: ",e.jsxs("strong",{className:"text-emerald-300",children:[s*s*8," Bytes"]})]})]}):e.jsxs(e.Fragment,{children:[e.jsxs("p",{children:["Generated Elements: ",e.jsxs("strong",{className:"text-pink-300",children:[m," points"]})]}),e.jsxs("p",{children:["Computed Step Size: ",e.jsx("strong",{className:"text-cyan-300",children:((c-p)/(m-1)).toFixed(3)})]}),e.jsxs("p",{children:["Includes Endpoints: ",e.jsxs("strong",{className:"text-emerald-300",children:["[",p," ... ",c,"]"]})]})]})})]})]})]})]})]}),l==="initializers"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"np.zeros() and np.ones() Deep Dive"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Zero-filled buffers and augmented bias column construction"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-blue-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-blue-400 uppercase",children:"1. np.zeros(shape, dtype=float64)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Instantly requests zero-initialized memory pages via C ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"calloc()"}),". Use it when initializing weight gradient accumulators or neural network placeholder layers."]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"# 3D Tensor for video batch (16 frames, 224x224, 3 channels)"}),e.jsx("p",{className:"text-blue-300",children:"video_batch = np.zeros((16, 224, 224, 3), dtype=np.float32)"}),e.jsx("p",{className:"text-slate-400",children:"# Total size: 2,408,448 float32s = ~9.63 MB"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase",children:"2. np.ones(shape, dtype=float64)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Allocates memory and fills every element with 1.0. Crucial for linear models where the intercept ",e.jsx("code",{className:"text-amber-300 font-mono",children:"β0"})," requires an augmented column of 1s in feature matrix X."]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"# Augmenting X with bias feature x0"}),e.jsx("p",{children:"X_raw = np.array([[2.5, 50], [3.8, 80]]) # (2, 2)"}),e.jsx("p",{children:"x0_col = np.ones((X_raw.shape[0], 1))   # (2, 1)"}),e.jsx("p",{className:"text-emerald-300",children:"X_aug = np.hstack([x0_col, X_raw])    # (2, 3)"})]})]})]})]}),l==="arange_vs_linspace"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"np.arange() vs np.linspace() Architectural Comparison"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Step-based discrete ranges versus count-based continuous coordinates"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/60 text-xs uppercase font-mono text-slate-400",children:[e.jsx("th",{className:"p-3",children:"Comparison Metric"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"np.arange(start, stop, step)"}),e.jsx("th",{className:"p-3 text-pink-300",children:"np.linspace(start, stop, num)"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/80 text-xs sm:text-sm",children:P.map((t,n)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-3 font-bold text-white font-mono",children:t.aspect}),e.jsx("td",{className:"p-3 text-slate-300",children:t.arange}),e.jsx("td",{className:"p-3 text-slate-200",children:t.linspace})]},n))})]})})]}),l==="full_empty_eye"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"np.full(), np.empty(), and np.eye()"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Constant initializers, fast uninitialized buffers, and linear algebra matrices"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-5",children:[e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-purple-900/40 space-y-2",children:[e.jsx("span",{className:"font-bold text-purple-300 font-mono text-xs",children:"np.full(shape, fill_value)"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Initializes all elements to a custom constant (e.g. baseline -1 or 99)."}),e.jsx("div",{className:"font-mono text-[11px] bg-slate-900 p-2 rounded text-slate-300",children:"arr = np.full((3, 3), -1, dtype=np.int8)"})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-rose-900/40 space-y-2",children:[e.jsx("span",{className:"font-bold text-rose-300 font-mono text-xs",children:"np.empty(shape, dtype)"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Allocates memory without zeroing bytes. Fastest raw allocation, but contains RAM garbage!"}),e.jsxs("div",{className:"font-mono text-[11px] bg-slate-900 p-2 rounded text-rose-400",children:["# Must overwrite before reading!",e.jsx("br",{}),"arr = np.empty((1000, 1000))"]})]}),e.jsxs("div",{className:"bg-slate-950 p-4 rounded-xl border border-amber-900/40 space-y-2",children:[e.jsx("span",{className:"font-bold text-amber-300 font-mono text-xs",children:"np.eye(N, M, k)"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Identity matrix with 1s on main diagonal (k=0) or shifted diagonal."}),e.jsx("div",{className:"font-mono text-[11px] bg-slate-900 p-2 rounded text-amber-300",children:"I = np.eye(4) # 4x4 Identity"})]})]})]}),l==="cloning"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsxs("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:["Template Cloning with ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"_like"})," Functions"]}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Cloning shape, dtype, and memory flags from reference arrays"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("p",{className:"text-sm text-slate-300",children:["When working with complex model pipelines, you frequently need a placeholder array matching an existing tensor's shape and dtype. Using ",e.jsx("code",{className:"text-cyan-300 font-mono",children:"np.zeros_like()"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"np.ones_like()"}),", or ",e.jsx("code",{className:"text-purple-300 font-mono",children:"np.full_like()"})," avoids writing boilerplate:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-slate-400",children:"# Verbose manual method:"}),e.jsx("p",{children:"grad = np.zeros(weights.shape, dtype=weights.dtype, order='C')"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded border border-emerald-900/50 space-y-1",children:[e.jsx("span",{className:"text-emerald-400",children:"# Idiomatic template cloning:"}),e.jsx("p",{children:"grad = np.zeros_like(weights)"})]})]})]})]}),l==="ml_uses"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Concrete Machine Learning Applications"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Where each function fits inside practical ML algorithms"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:B.map((t,n)=>e.jsxs("div",{className:`p-5 rounded-xl border ${t.color} space-y-2`,children:[e.jsx("div",{className:"flex items-center justify-between",children:e.jsx("h3",{className:"font-bold text-white font-mono text-sm",children:t.fn})}),e.jsx("div",{className:"font-mono text-xs bg-slate-950 p-2 rounded border border-slate-800 text-slate-200",children:t.example}),e.jsxs("p",{className:"text-xs text-slate-300",children:[e.jsx("strong",{className:"text-slate-100",children:"Purpose:"})," ",t.purpose]}),e.jsxs("p",{className:"text-xs text-slate-400",children:[e.jsx("strong",{className:"text-slate-200",children:"ML Pipeline Role:"})," ",t.mlUse]})]},n))})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect zeros/ones initialization, arange vs linspace, empty/eye matrices, or ML meshgrids"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:h.map(t=>e.jsxs("button",{onClick:()=>f(t.id),className:`p-3 rounded-xl border text-left transition-all ${x===t.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${x===t.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:t.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:t.title})]},t.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:d.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:d.summary})]})}),e.jsx(S,{fileModule:d.code,title:d.fileName})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold text-lg",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Best Practices"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Avoid these frequent initialisation mistakes"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 1: Missing Shape Tuple Parentheses"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"np.zeros(3, 4)"})," treats 4 as the dtype parameter, raising a TypeError."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# WRONG:"})," np.zeros(3, 4)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# CORRECT:"})," np.zeros((3, 4))"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 2: Accumulating on np.empty()"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Performing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"arr += x"})," on an uninitialized ",e.jsx("code",{className:"text-slate-200",children:"empty()"})," buffer corrupts your sum with RAM garbage."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# CORRUPTED:"})," acc = np.empty((3, 3)); acc += grad",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# SAFE:"})," acc = np.zeros((3, 3)); acc += grad"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 3: Floating Steps in np.arange()"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Floating point rounding errors in ",e.jsx("code",{className:"text-amber-300 font-mono",children:"np.arange(0, 0.3, 0.1)"})," can unpredictably exclude the last point."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# UNSTABLE:"})," np.arange(0.0, 1.0, 0.1)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# STABLE:"})," np.linspace(0.0, 1.0, 11)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 4: Unnecessary float64 Memory Allocation"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Defaulting to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"float64"})," for neural networks doubles GPU VRAM usage without training gain."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-amber-400",children:"# 8 Bytes:"})," np.zeros((1000, 1000)) # 8.0 MB",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# 4 Bytes:"})," np.zeros((1000, 1000), dtype=np.float32) # 4.0 MB"]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-lg",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Think About This... (Interactive Concept Checks)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Test your mental model of array generator functions"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{id:1,q:"How many points does np.linspace(0, 10, 5) return, and what are they?",a:"5 points: [0.0, 2.5, 5.0, 7.5, 10.0]. The step size is (10 - 0) / (5 - 1) = 2.5."},{id:2,q:"Why is np.eye() used in Ridge Regression normal equations?",a:"It adds λ * I to X^T X, ensuring the matrix is strictly non-singular (invertible) and shrinking collinear feature weights."},{id:3,q:"What is the difference between np.logspace(-3, 0, 4) and np.geomspace(0.001, 1, 4)?",a:"They produce the exact same array [0.001, 0.01, 0.1, 1.0]. logspace takes exponents; geomspace takes actual boundary numbers."}].map(t=>e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsx("p",{className:"text-xs font-semibold text-slate-200",children:t.q}),e.jsx("div",{children:b===t.id?e.jsx("div",{className:"p-2.5 rounded bg-indigo-950/40 border border-indigo-700/50 text-xs text-indigo-200 mt-2",children:t.a}):e.jsx("button",{onClick:()=>y(t.id),className:"w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold rounded transition-all cursor-pointer border border-slate-700",children:"Reveal Answer"})})]},t.id))})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(k,{title:"NumPy Array Creation Functions — Frequently Asked Questions",questions:R})}),e.jsx("section",{className:"space-y-4",children:e.jsx(A,{content:M,title:"NumPy Array Creation Functions Quick Revision Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note",downloadFileName:"numpy_array_creation_functions_note.txt"})}),e.jsx(F,{note:"In our Barrackpore machine learning labs, students like Susmita and Mahima frequently ask whether to use np.arange or np.linspace when plotting loss functions and decision boundaries. My golden rule: if you want exact step counts or smooth plots, always choose np.linspace! And remember to use np.ones() whenever you need to add an intercept column x0 to your feature matrix X. — Sukanta Hui"})]})};export{H as default};
