import{b as l,j as e}from"./vendor-react-core-CaA1o1Cx.js";import{P as S}from"./PythonFileLoader-CiS1GfkF.js";import{F as C}from"./FAQTemplate-D_90hN4m.js";import{P as _}from"./PlainTextPrint-yt10TRX1.js";import{T}from"./TeacherSukantaHui-Ds9F9lLV.js";import"./PythonCodeBlock-B71mjQen.js";import"./vendor-prism-ntVuzLqd.js";import"./vendor-icons-ri6cs58t.js";const P=`"""\r
================================================================================\r
Topic 2 - Script 01: ndarray Memory Layout, Pointers, and Byte Strides\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- The internal structure of ndarray: Data Buffer + Metadata Header\r
- Memory address inspection via .ctypes.data\r
- Stride mechanics (bytes to step along each dimension)\r
- Row-major (C-order) vs Column-major (Fortran-order) layout\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def demonstrate_memory_and_strides():\r
    print("=" * 65)\r
    print("DEMO 1: Inspecting Continuous Memory Buffer & Address")\r
    print("=" * 65)\r
    \r
    # 2D Matrix of 32-bit integers (4 bytes each)\r
    arr = np.array([\r
        [10, 20, 30, 40],\r
        [50, 60, 70, 80],\r
        [90, 100, 110, 120]\r
    ], dtype=np.int32)\r
\r
    print("Array:\\n", arr)\r
    print("Data type (dtype) :", arr.dtype)\r
    print("Shape             :", arr.shape)\r
    print("Item size (bytes) :", arr.itemsize, "bytes per integer")\r
    print("Total array bytes :", arr.nbytes, "bytes")\r
    print("Memory address    :", hex(arr.ctypes.data))\r
    print("Strides           :", arr.strides)\r
    print(f"Explanation: To move 1 row down requires {arr.strides[0]} bytes (4 elements * 4 bytes).")\r
    print(f"             To move 1 column right requires {arr.strides[1]} bytes (1 element * 4 bytes).")\r
\r
    print("\\n" + "=" * 65)\r
    print("DEMO 2: Memory Flags & Contiguity")\r
    print("=" * 65)\r
    print("C_CONTIGUOUS (Row-major) :", arr.flags['C_CONTIGUOUS'])\r
    print("F_CONTIGUOUS (Col-major) :", arr.flags['F_CONTIGUOUS'])\r
    print("OWNDATA                  :", arr.flags['OWNDATA'])\r
\r
if __name__ == "__main__":\r
    demonstrate_memory_and_strides()\r
`,D=`"""\r
================================================================================\r
Topic 2 - Script 02: Deep Dive into Core ndarray Attributes\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- .ndim    : Number of array dimensions (axes)\r
- .shape   : Tuple of integers indicating size along each axis\r
- .size    : Total count of elements across all axes\r
- .dtype   : Internal data representation\r
- .itemsize: Bytes per single element\r
- .nbytes  : Total memory consumed by array buffer (size * itemsize)\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def inspect_ndarray_attributes():\r
    print("=" * 65)\r
    print("ATTRIBUTE INSPECTION ACROSS 1D, 2D, AND 3D TENSORS")\r
    print("=" * 65)\r
\r
    # 1D Vector (e.g. Student test scores)\r
    vec = np.array([85.5, 92.0, 78.0, 95.5], dtype=np.float64)\r
    \r
    # 2D Matrix (e.g. 3 Students with 4 exam subjects)\r
    mat = np.array([\r
        [80, 85, 90, 75],\r
        [70, 75, 80, 85],\r
        [95, 90, 92, 88]\r
    ], dtype=np.int64)\r
    \r
    # 3D Tensor (e.g. 2 Batches of 3 Students across 4 Exams)\r
    tensor = np.ones((2, 3, 4), dtype=np.float32)\r
\r
    arrays = [("1D Vector", vec), ("2D Matrix", mat), ("3D Tensor", tensor)]\r
    \r
    for name, a in arrays:\r
        print(f"\\n--- {name} ---")\r
        print(f"  Shape (.shape)       : {a.shape}")\r
        print(f"  Dimensions (.ndim)   : {a.ndim}")\r
        print(f"  Element Count (.size): {a.size}")\r
        print(f"  Data Type (.dtype)   : {a.dtype}")\r
        print(f"  Item Size (.itemsize): {a.itemsize} bytes")\r
        print(f"  Total Bytes (.nbytes): {a.nbytes} bytes")\r
\r
if __name__ == "__main__":\r
    inspect_ndarray_attributes()\r
`,M=`"""\r
================================================================================\r
Topic 2 - Script 03: Why ndarrays Outperform Python Lists (Pointer Chasing vs SIMD)\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- Python List architecture: Array of 8-byte PyObject pointers scattered across heap\r
- ndarray architecture: Single contiguous C-style memory block\r
- CPU L1/L2 cache prefetching & SIMD vectorization benefits\r
================================================================================\r
"""\r
\r
import sys\r
import numpy as np\r
\r
def explain_memory_difference():\r
    print("=" * 65)\r
    print("MEMORY OVERHEAD: Python List vs NumPy ndarray")\r
    print("=" * 65)\r
\r
    n = 1000\r
    py_list = list(range(n))\r
    np_arr_64 = np.arange(n, dtype=np.int64)\r
    np_arr_32 = np.arange(n, dtype=np.int32)\r
    np_arr_8 = np.arange(n, dtype=np.int8)\r
\r
    # In Python, each integer object itself takes 28 bytes on 64-bit CPython,\r
    # plus 8 bytes per pointer in the list = ~36 bytes per integer!\r
    py_elem_size = sys.getsizeof(py_list[0])\r
    py_list_pointer_overhead = sys.getsizeof(py_list)\r
    total_py_mem = py_list_pointer_overhead + sum(sys.getsizeof(x) for x in py_list)\r
\r
    print(f"Elements: {n:,}")\r
    print("-" * 65)\r
    print(f"Python List (Pointers + PyObjects) : ~{total_py_mem:,} bytes (~{total_py_mem/1024:.1f} KB)")\r
    print(f"NumPy ndarray (int64 - 8 bytes/item): {np_arr_64.nbytes:,} bytes ({np_arr_64.nbytes/1024:.1f} KB)")\r
    print(f"NumPy ndarray (int32 - 4 bytes/item): {np_arr_32.nbytes:,} bytes ({np_arr_32.nbytes/1024:.1f} KB)")\r
    print(f"NumPy ndarray (int8  - 1 byte/item) : {np_arr_8.nbytes:,} bytes  ({np_arr_8.nbytes/1024:.2f} KB)")\r
    print("-" * 65)\r
    print("Conclusion: ndarray uses up to 36x less RAM and loads directly into CPU L1 cache!")\r
\r
if __name__ == "__main__":\r
    explain_memory_difference()\r
`,k=`"""\r
================================================================================\r
Topic 2 - Script 04: Real-World ML Computer Vision & NLP Tensor Representation\r
================================================================================\r
Instructor: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
Students: Debangshu, Susmita, Swadeep, Tuhina, Sachin, Mahima, Abhronila\r
\r
Key Concepts Covered:\r
- 4D Computer Vision Image Batch: (Batch_Size, Channels, Height, Width)\r
- 3D NLP Sequence Batch: (Batch_Size, Sequence_Length, Embedding_Dim)\r
- Strides and memory footprints in production deep learning pipelines\r
================================================================================\r
"""\r
\r
import numpy as np\r
\r
def simulate_ml_tensors():\r
    print("=" * 65)\r
    print("1. COMPUTER VISION: Batch of RGB Training Images")\r
    print("=" * 65)\r
    \r
    # 32 images, 3 color channels (RGB), 224 height, 224 width\r
    batch_size, channels, height, width = 32, 3, 224, 224\r
    \r
    # Simulated image batch in float32\r
    cv_batch = np.random.randn(batch_size, channels, height, width).astype(np.float32)\r
    \r
    print(f"CV Batch Shape   : {cv_batch.shape}")\r
    print(f"Total Pixels/Nums: {cv_batch.size:,}")\r
    print(f"Memory Size (MB) : {cv_batch.nbytes / (1024 * 1024):.2f} MB")\r
    print(f"Byte Strides     : {cv_batch.strides}")\r
    print(f"Stride to jump to next image: {cv_batch.strides[0]} bytes")\r
    \r
    print("\\n" + "=" * 65)\r
    print("2. NLP: Transformer Input Batch")\r
    print("=" * 65)\r
    # 16 sentences, 128 tokens per sentence, 768-dim embeddings (BERT base)\r
    nlp_batch = np.zeros((16, 128, 768), dtype=np.float32)\r
    print(f"NLP Batch Shape  : {nlp_batch.shape}")\r
    print(f"Total Floats     : {nlp_batch.size:,}")\r
    print(f"Memory Size (MB) : {nlp_batch.nbytes / (1024 * 1024):.2f} MB")\r
    print(f"Byte Strides     : {nlp_batch.strides}")\r
\r
if __name__ == "__main__":\r
    simulate_ml_tensors()\r
`,B=`\uFEFF========================================================\r
NUMPY ESSENTIALS — TOPIC 2: ndarray CONCEPT\r
Coder & AccoTax | Sukanta Hui | Barrackpore, West Bengal\r
Subject: Machine Learning (BCAC701B) | Segment 9\r
========================================================\r
\r
WHAT IS AN ndarray?\r
-------------------\r
ndarray = N-dimensional array\r
  - The core data structure of NumPy\r
  - An N-dimensional grid of values, all of the SAME type\r
  - N can be 1 (vector), 2 (matrix), 3 (tensor), or higher\r
\r
Think of it as:\r
  1D ndarray → a single row of numbers (vector)\r
  2D ndarray → a table of numbers (matrix)\r
  3D ndarray → a stack of tables (like a video = frames × H × W)\r
  4D ndarray → a batch of 3D arrays (batch × frames × H × W)\r
\r
STRUCTURE OF AN ndarray:\r
------------------------\r
Every ndarray has the following attributes:\r
\r
  arr.shape    → Tuple of dimension sizes, e.g., (3, 4)\r
  arr.ndim     → Number of dimensions (axes), e.g., 2\r
  arr.size     → Total number of elements, e.g., 12\r
  arr.dtype    → Data type of elements, e.g., float64\r
  arr.itemsize → Bytes per element, e.g., 8\r
  arr.nbytes   → Total bytes = itemsize × size, e.g., 96\r
  arr.data     → Memory buffer (raw C pointer)\r
  arr.strides  → Bytes to step along each axis\r
\r
AXES IN NumPy:\r
--------------\r
An axis is a dimension of the array.\r
  - A 1D array has 1 axis (axis=0)\r
  - A 2D array has 2 axes (axis=0=rows, axis=1=columns)\r
  - A 3D array has 3 axes (depth, rows, columns)\r
\r
Operations like np.sum(arr, axis=0) reduce along that axis.\r
\r
MEMORY LAYOUT:\r
--------------\r
NumPy stores data in contiguous C-order (row-major) by default.\r
  - arr.flags['C_CONTIGUOUS'] = True → row-major\r
  - arr.flags['F_CONTIGUOUS'] = True → column-major (Fortran)\r
\r
Strides:\r
  strides = (bytes_per_row, bytes_per_element)\r
  For shape (3,4) float64: strides = (32, 8)\r
  Moving down one row = skip 32 bytes\r
  Moving right one col = skip 8 bytes\r
\r
VIEWS vs COPIES:\r
----------------\r
  view  → slice of the same memory (no data copied)\r
  copy  → independent array with its own memory\r
\r
  view = arr[0:3]      → same memory as arr\r
  copy = arr[0:3].copy() → new independent array\r
\r
HOW ndarray DIFFERS FROM Python list:\r
--------------------------------------\r
  Python list: stores references to Python objects\r
  ndarray:     stores raw numeric values in C memory\r
  Python list: can mix types ([1, "hello", 3.5])\r
  ndarray:     all elements MUST be the same dtype\r
\r
QUICK REVISION POINTS:\r
  □ ndarray = N-dimensional array, NumPy's core object\r
  □ All elements share the same dtype\r
  □ Key attributes: shape, ndim, size, dtype, nbytes\r
  □ axis = one dimension of the array\r
  □ C-order (row-major) memory layout by default\r
  □ Slices are views (no copy) — modifying view modifies original\r
  □ Use .copy() for an independent copy\r
\r
========================================================\r
Coder & AccoTax | www.codernaccotax.co.in\r
========================================================\r
`,z=[{question:"What does 'ndarray' stand for in NumPy?",shortAnswer:"N-Dimensional Array.",explanation:"An ndarray is the central data structure in NumPy. It represents a multidimensional, homogeneous grid of fixed-size elements (typically numbers) indexed by a tuple of non-negative integers.",hint:"N stands for any number of dimensions.",level:"basic",codeExample:`import numpy as np
arr = np.array([1, 2, 3])
print(type(arr))  # <class 'numpy.ndarray'>`},{question:"What does 'homogeneous' mean in the context of an ndarray?",shortAnswer:"All elements in the array must have the exact same data type (dtype).",explanation:"Unlike Python lists which can store mixed types (e.g. [1, 'text', 3.14]), every single element in a NumPy ndarray shares the same data type and byte size. This enables contiguous memory allocation and vectorized SIMD CPU operations.",hint:"Homogeneous = uniform type across all elements.",level:"basic",codeExample:`import numpy as np
# Python upcasts all integers to floats to maintain homogeneity
arr = np.array([1, 2, 3.5])
print(arr.dtype)  # float64
print(arr)        # array([1. , 2. , 3.5])`},{question:"What is the difference between arr.ndim, arr.shape, and arr.size?",shortAnswer:"ndim is number of axes; shape is dimension lengths tuple; size is total elements.",explanation:"arr.ndim gives the rank (number of dimensions). arr.shape gives a tuple showing the length along each dimension. arr.size gives the total count of elements, which equals the mathematical product of the dimensions in shape.",hint:"ndim = integer, shape = tuple, size = total count.",level:"basic",codeExample:`import numpy as np
arr = np.zeros((3, 4, 5))
print(arr.ndim)   # 3
print(arr.shape)  # (3, 4, 5)
print(arr.size)   # 60 (3 * 4 * 5)`},{question:"How is a 1D vector with shape (5,) fundamentally different from a 2D matrix with shape (1, 5) or (5, 1)?",shortAnswer:"(5,) has 1 axis (ndim=1), while (1, 5) and (5, 1) have 2 axes (ndim=2).",explanation:"A 1D array has only one indexing dimension arr[i]. A 2D array has rows and columns arr[i, j]. In machine learning (e.g., Scikit-learn), feature matrices MUST be 2D (samples, features), so passing a (5,) 1D array instead of (5, 1) or (1, 5) will throw a ValueError.",hint:"Check array.ndim and indexing dimensions.",level:"intermediate",codeExample:`import numpy as np
v_1d = np.array([1, 2, 3, 4, 5])       # shape: (5,), ndim: 1
row_2d = v_1d.reshape(1, 5)            # shape: (1, 5), ndim: 2
col_2d = v_1d.reshape(5, 1)            # shape: (5, 1), ndim: 2`},{question:"What is the relationship between arr.itemsize, arr.size, and arr.nbytes?",shortAnswer:"arr.nbytes = arr.size * arr.itemsize",explanation:"arr.itemsize is the number of bytes consumed by one element (e.g., 8 bytes for float64, 4 bytes for int32). arr.size is total elements. arr.nbytes calculates total RAM consumed by the raw array buffer.",hint:"Total bytes = number of items multiplied by bytes per item.",level:"basic",codeExample:`import numpy as np
arr = np.ones((100, 100), dtype=np.float64)
print(arr.itemsize)  # 8 bytes
print(arr.size)      # 10000 elements
print(arr.nbytes)    # 80000 bytes (80 KB)`},{question:"What are 'strides' in a NumPy ndarray?",shortAnswer:"The number of bytes to step in memory along each axis to advance to the next element.",explanation:"Because ndarray memory is a flat 1D contiguous block of bytes, NumPy uses strides to navigate multi-dimensional indexes. For a (3, 4) float64 array, strides is (32, 8) — jumping to the next row skips 32 bytes (4 elements * 8 bytes), jumping to next column skips 8 bytes.",hint:"Strides define the byte-step multiplier per dimension.",level:"advanced",codeExample:`import numpy as np
arr = np.arange(12, dtype=np.int64).reshape(3, 4)
print(arr.strides)  # (32, 8) -> 32 bytes per row, 8 bytes per col`},{question:"What is the difference between C-contiguous and Fortran-contiguous memory layout?",shortAnswer:"C-order is row-major (last axis contiguous); Fortran-order is column-major (first axis contiguous).",explanation:"In C-order (default in Python/NumPy), row elements sit consecutively in memory (moving across columns is 1 element step). In Fortran-order, column elements sit consecutively. Iterating along the contiguous axis maximizes CPU L1/L2 cache hits.",hint:"C = Row-major, Fortran = Column-major.",level:"intermediate",codeExample:`import numpy as np
arr_c = np.ones((2, 3), order='C')
arr_f = np.ones((2, 3), order='F')
print(arr_c.flags['C_CONTIGUOUS'])  # True
print(arr_f.flags['F_CONTIGUOUS'])  # True`},{question:"What is a 'View' in NumPy and how does it differ from a 'Copy'?",shortAnswer:"A view shares memory buffer with the original array; a copy allocates separate memory.",explanation:"When you create a view (e.g. through slicing arr[1:4]), no data is duplicated in RAM; NumPy just creates a new ndarray metadata wrapper pointing to the original memory. Modifying elements in a view changes the original array. A copy (arr.copy()) creates an entirely independent buffer.",hint:"Views share memory (mutating one mutates both); copies are completely independent.",level:"intermediate",codeExample:`import numpy as np
orig = np.array([10, 20, 30])
view_arr = orig[1:]
view_arr[0] = 999
print(orig)  # [ 10 999  30] -> modified!

copy_arr = orig.copy()
copy_arr[0] = 0
print(orig)  # [ 10 999  30] -> unchanged!`},{question:"How can you programmatically check whether an ndarray is a view or owns its memory?",shortAnswer:"Check arr.base or arr.flags['OWNDATA'].",explanation:"If arr.base is None (and arr.flags['OWNDATA'] is True), the array owns its memory buffer. If arr.base points to another ndarray, it is a view derived from that base array.",hint:"Check the .base attribute.",level:"intermediate",codeExample:`import numpy as np
a = np.array([1, 2, 3, 4])
b = a[1:3]
print(a.base)              # None (owns data)
print(b.base is a)         # True (view of a)
print(b.flags['OWNDATA'])  # False`},{question:"Why does array transposing (arr.T) in NumPy take virtually 0.000 ms even for massive matrices?",shortAnswer:"Transposing only swaps shape and strides metadata; it moves zero bytes of data.",explanation:"NumPy's strided architecture allows transposing by simply reversing the shape tuple and strides tuple. The underlying buffer in RAM is untouched. Thus, transpose is an O(1) instantaneous metadata operation.",hint:"Think about modifying strides instead of copying data.",level:"advanced",codeExample:`import numpy as np
arr = np.arange(1_000_000).reshape(1000, 1000)
t = arr.T
print(arr.strides)  # (8000, 8)
print(t.strides)    # (8, 8000) -> swapped strides instantly!`},{question:"What is the difference between ravel() and flatten()?",shortAnswer:"ravel() returns a view whenever possible (no copy); flatten() always allocates a new copy.",explanation:"Both collapse a multi-dimensional array into a 1D array. However, ravel() is memory-efficient because it returns a view of the original memory buffer if contiguous. flatten() always creates a brand new copy in memory.",hint:"ravel = view if possible, flatten = always deep copy.",level:"intermediate",codeExample:`import numpy as np
arr = np.array([[1, 2], [3, 4]])
r = arr.ravel()    # view
f = arr.flatten()  # copy
r[0] = 99
print(arr[0, 0])   # 99 (modified)
f[1] = 88
print(arr[0, 1])   # 2 (unaffected)`},{question:"Why does Python list memory consume significantly more RAM than a NumPy ndarray for integers?",shortAnswer:"Python stores boxed PyObject pointers (~28 bytes/int), while ndarray stores raw unboxed C integers (4 or 8 bytes).",explanation:"In a standard Python list, every element is a pointer to a heap-allocated PyObject containing reference count, type info, and value payload (~28 bytes per int on 64-bit OS), plus 8 bytes for the pointer. NumPy stores raw homogeneous binary numbers sequentially.",hint:"Python integers are full heap objects with metadata overhead.",level:"intermediate",codeExample:`import sys, numpy as np
py_list = [100] * 1000
np_arr = np.ones(1000, dtype=np.int32)
print('PyList approx:', sys.getsizeof(py_list) + 1000 * 28, 'bytes')
print('NumPy ndarray:', np_arr.nbytes, 'bytes (exactly 4 KB)')`},{question:"How does NumPy reduce operations along axis 0 vs axis 1 in a 2D array?",shortAnswer:"axis=0 collapses rows (computes per column); axis=1 collapses columns (computes per row).",explanation:"The axis parameter specifies the axis that is eliminated or collapsed. In a (rows, columns) matrix: axis=0 travels down rows, producing a 1D array of column results. axis=1 travels across columns, producing a 1D array of row results.",hint:"axis=0 eliminates row dimension, axis=1 eliminates column dimension.",level:"basic",codeExample:`import numpy as np
marks = np.array([[70, 80], [90, 60]]) # 2 students x 2 subjects
print(marks.mean(axis=0)) # [80., 70.] -> subject averages
print(marks.mean(axis=1)) # [75., 75.] -> student averages`},{question:"What happens when you pass a 3D tensor to NumPy? How is its shape interpreted in computer vision?",shortAnswer:"Shape is (Height, Width, Channels) for images, or (Batch, Height, Width) for grayscale batches.",explanation:"In image processing and deep learning, a single RGB color image is represented as a 3D ndarray: axis 0 is image height (pixels), axis 1 is image width (pixels), and axis 2 is color channels (Red, Green, Blue). A collection of images forms a 4D ndarray (Batch, Height, Width, Channels).",hint:"H x W x C = 3D ndarray.",level:"intermediate",codeExample:`import numpy as np
# 1080p RGB image tensor
img = np.zeros((1080, 1920, 3), dtype=np.uint8)
print(img.ndim)   # 3
print(img.shape)  # (1080, 1920, 3)`},{question:"What does the arr.data attribute represent?",shortAnswer:"A memoryview object pointing to the start of the contiguous C memory buffer.",explanation:"arr.data is the Python buffer interface pointer to the actual raw contiguous memory block where values are stored in binary form. It exposes low-level C memory directly to other libraries like OpenCV, C/C++ extensions, and PyTorch without copying.",hint:"arr.data is the raw memory pointer.",level:"advanced",codeExample:`import numpy as np
arr = np.array([1, 2, 3], dtype=np.int32)
print(arr.data)  # <memory at 0x...>
print(bytes(arr.data))  # raw byte representation`},{question:"What is type coercion (upcasting) in ndarray creation?",shortAnswer:"Automatic promotion of all elements to the lowest common denominator data type that fits all values.",explanation:"If you mix integers, floats, and strings in np.array([1, 2.5, 'Sachin']), NumPy coerces all items to the most general type (<U32 string), preventing mixed types. If you mix int and float, ints are upcast to floats.",hint:"All elements are converted to the highest required precision type.",level:"basic",codeExample:`import numpy as np
arr1 = np.array([1, 2, 3.14])        # becomes float64
arr2 = np.array([1, 2.5, 'Kolkata']) # becomes '<U32' Unicode string
print(arr1.dtype)  # float64
print(arr2.dtype)  # <U32`},{question:"Why is chained indexing arr[0][1] slower and more dangerous than multidimensional indexing arr[0, 1]?",shortAnswer:"arr[0][1] creates an intermediate temporary array object; arr[0, 1] indexes directly in C.",explanation:"arr[0][1] first creates a temporary 1D slice ndarray for row 0, then indexes element 1 of that temporary slice. arr[0, 1] passes both indices directly into NumPy's C indexing engine, calculating the byte offset in one stride step without creating temporary objects.",hint:"Always use comma notation arr[row, col] instead of double brackets arr[row][col].",level:"intermediate",codeExample:`import numpy as np
arr = np.zeros((100, 100))
# Fast and idiomatic:
val = arr[5, 10]
# Slower and non-idiomatic:
val = arr[5][10]`},{question:"What is the role of the WRITEABLE flag in ndarray flags?",shortAnswer:"Determines whether array elements can be modified in-place.",explanation:"arr.flags.writeable controls read-only state. You can set arr.flags.writeable = False to make an ndarray immutable, preventing accidental data modification during feature engineering or dataset sharing across functions.",hint:"Set writeable=False for read-only security.",level:"advanced",codeExample:`import numpy as np
arr = np.array([10, 20, 30])
arr.flags.writeable = False
# arr[0] = 99  # Throws: ValueError: assignment destination is read-only`},{question:"How does NumPy handle negative indexing in multi-dimensional ndarrays?",shortAnswer:"Negative numbers count backwards from the end along that specific axis (-1 is the last item).",explanation:"NumPy follows standard Python negative index semantics along every axis independently. arr[-1, :] extracts the last row; arr[:, -1] extracts the last column; arr[-2, -2] extracts the second-to-last row and column.",hint:"-1 means the last item along that axis.",level:"basic",codeExample:`import numpy as np
arr = np.array([[10, 20, 30], [40, 50, 60], [70, 80, 90]])
print(arr[-1, :])   # [70, 80, 90] (last row)
print(arr[:, -1])   # [30, 60, 90] (last column)
print(arr[-1, -1])  # 90`},{question:"What does the .astype() method do and does it create a view or a copy?",shortAnswer:"Converts the ndarray to a new dtype and ALWAYS returns a copy.",explanation:".astype(np.float32) casts all elements to the specified dtype. Because different dtypes require different byte widths (e.g. 8 bytes -> 4 bytes), a new contiguous buffer must be allocated in memory, making it a copy.",hint:"astype creates a new copy with the new data type.",level:"basic",codeExample:`import numpy as np
arr = np.array([1, 2, 3], dtype=np.int64)
floats = arr.astype(np.float32)
print(floats.dtype)  # float32
print(floats.base is arr)  # False (independent copy)`},{question:"How does reshape(-1) work in NumPy?",shortAnswer:"-1 tells NumPy to automatically calculate that dimension size from the array's total size.",explanation:"When reshaping, you can supply -1 for exactly one dimension. NumPy calculates: size / (product of known dimensions). For example, 12 elements reshaped with (-1, 2) automatically produces (6, 2).",hint:"-1 is an inferred dimension wildcard.",level:"intermediate",codeExample:`import numpy as np
arr = np.arange(20)
mat = arr.reshape(-1, 5)  # 20 / 5 = 4 rows -> shape (4, 5)
print(mat.shape)          # (4, 5)
col = arr.reshape(-1, 1)  # shape (20, 1) column vector`},{question:"Why do machine learning algorithms (like Gradient Descent) perform vector additions 100x faster on ndarray than Python loops?",shortAnswer:"SIMD vectorization, CPU cache locality, and bypassing Python interpreter overhead.",explanation:"When you execute a + b on ndarrays, NumPy calls optimized C/Fortran vector loops compiled with AVX/SSE SIMD instructions. The CPU loads multiple 64-bit numbers in one hardware register per cycle, while Python lists must fetch separate heap objects per iteration through bytecode interpretation.",hint:"Contiguous C memory + CPU SIMD registers = ultra-fast computation.",level:"intermediate",codeExample:`import numpy as np
a = np.ones(1_000_000)
b = np.ones(1_000_000)
c = a + b  # Vectorized C loop operating directly on raw RAM`},{question:"What is an ndarray's .shape when created from a scalar (0D array)?",shortAnswer:"An empty tuple () with ndim=0.",explanation:"A scalar wrapped in NumPy (np.array(42)) is a 0-dimensional array. It has ndim=0, shape=(), and size=1. You can access its scalar value with arr.item().",hint:"0D arrays have an empty shape tuple ().",level:"basic",codeExample:`import numpy as np
scalar = np.array(42)
print(scalar.ndim)   # 0
print(scalar.shape)  # ()
print(scalar.item()) # 42`},{question:"What is the risk of using np.asarray() vs np.array()?",shortAnswer:"np.asarray() returns the original array without copying if input is already an ndarray with matching dtype.",explanation:"np.array(arr) always creates a copy by default (or unless copy=False), while np.asarray(arr) reuses the existing ndarray if possible. If you mutate the result of np.asarray(), you may inadvertently mutate the caller's input data.",hint:"asarray avoids copies if input is already ndarray.",level:"advanced",codeExample:`import numpy as np
x = np.array([1, 2, 3])
y = np.asarray(x)
print(y is x)  # True! Same object in memory`},{question:"How does ndarray indexing with a boolean mask differ from slicing in terms of memory?",shortAnswer:"Boolean masking ALWAYS creates a copy; basic slicing creates a view.",explanation:"Basic slicing (arr[1:5]) uses uniform strides to produce a view without memory copying. Boolean masking (arr[arr > 0]) can select arbitrary, non-contiguous elements from memory, so NumPy must copy the selected items into a new contiguous buffer.",hint:"Fancy indexing and boolean indexing always return copies.",level:"advanced",codeExample:`import numpy as np
arr = np.array([10, 20, 30, 40])
mask = arr > 25
filtered = arr[mask]  # [30, 40] - Copy!
print(filtered.base is None)  # True (owns data, not a view)`}],h=[{id:"part1",fileName:"01_ndarray_memory_layout_and_strides.py",title:"1. Memory Layout, Pointers & Strides",badge:"RAM & Strides",code:P,summary:"Inspects raw C-contiguous memory addresses (.ctypes.data), row-major byte strides, and item byte offsets."},{id:"part2",fileName:"02_ndarray_attributes_deep_dive.py",title:"2. Core Attributes Deep Dive",badge:"Attributes",code:D,summary:"Systematically compares .shape, .ndim, .size, .dtype, .itemsize, and .nbytes across 1D vectors, 2D matrices, and 3D tensors."},{id:"part3",fileName:"03_c_speed_vs_python_pointer_overhead.py",title:"3. Pointer Overhead vs SIMD Vectorization",badge:"C vs Python",code:M,summary:"Explains why Python lists of pointer objects take up to 36x more RAM than flat C-buffers loaded into CPU L1 cache."},{id:"part4",fileName:"04_real_world_ml_tensor_inspection.py",title:"4. Computer Vision & NLP ML Tensors",badge:"CV & NLP Tensors",code:k,summary:"Simulates 4D RGB image batches (NCHW) and 3D Transformer sentence batches, calculating byte strides and total GPU footprint."}],F=[{attr:"arr.shape",type:"tuple",example:"(3, 4)",desc:"Lengths of each axis (rows, columns, depths, etc.)"},{attr:"arr.ndim",type:"int",example:"2",desc:"Number of array dimensions / axes (rank of tensor)"},{attr:"arr.size",type:"int",example:"12",desc:"Total count of elements (product of shape dimensions)"},{attr:"arr.dtype",type:"dtype",example:"float64",desc:"Data type of all elements (homogeneous across buffer)"},{attr:"arr.itemsize",type:"int",example:"8",desc:"Bytes consumed by a single element in RAM"},{attr:"arr.nbytes",type:"int",example:"96",desc:"Total RAM occupied by array data buffer (size × itemsize)"},{attr:"arr.strides",type:"tuple",example:"(32, 8)",desc:"Bytes to step in RAM along each axis to jump 1 index"},{attr:"arr.data",type:"memoryview",example:"<memory at 0x...>",desc:"Pointer to the start of the contiguous C memory buffer"},{attr:"arr.base",type:"ndarray / None",example:"None",desc:"Original array if this ndarray is a view, else None"}],E=[{rank:"1D Array (Vector)",shape:"(5,)",ndim:1,analogy:"A single row / column list of features or target values",mlUse:"Target labels vector y, single sample features, bias vectors",color:"border-blue-500/50 bg-blue-950/20 text-blue-300",badge:"bg-blue-500/20 text-blue-300 border-blue-500/40"},{rank:"2D Array (Matrix)",shape:"(N_samples, N_features)",ndim:2,analogy:"A tabular dataset of rows and columns (e.g., student marks)",mlUse:"Feature matrix X for Linear Regression, Logistic Regression, KNN",color:"border-emerald-500/50 bg-emerald-950/20 text-emerald-300",badge:"bg-emerald-500/20 text-emerald-300 border-emerald-500/40"},{rank:"3D Array (Tensor)",shape:"(Height, Width, Channels)",ndim:3,analogy:"A single RGB digital image or sequence of time-series steps",mlUse:"Computer vision image inputs, LSTM/RNN time-series windows",color:"border-purple-500/50 bg-purple-950/20 text-purple-300",badge:"bg-purple-500/20 text-purple-300 border-purple-500/40"},{rank:"4D Array (Batched Tensor)",shape:"(Batch, Height, Width, Channels)",ndim:4,analogy:"A batch of video frames or batch of images sent to GPU",mlUse:"CNN training batches (e.g. 32 RGB images of 224×224 pixels)",color:"border-amber-500/50 bg-amber-950/20 text-amber-300",badge:"bg-amber-500/20 text-amber-300 border-amber-500/40"}],I=[{aspect:"Storage Model",pyList:"Array of 64-bit pointers pointing to scattered PyObject items on heap",npArray:"Single contiguous C memory buffer storing raw unboxed binary values",winner:"NumPy (Cache Locality)"},{aspect:"Memory Overhead",pyList:"~28 bytes per integer + 8 bytes pointer = ~36 bytes per number",npArray:"Exact binary size: 4 bytes (int32) or 8 bytes (int64/float64)",winner:"NumPy (4x-9x less RAM)"},{aspect:"Type Constraint",pyList:"Heterogeneous — can mix strings, floats, ints, dictionaries",npArray:"Strictly homogeneous — all items share identical dtype and itemsize",winner:"NumPy (Enables SIMD)"},{aspect:"Slicing Operation",pyList:"Always creates a shallow copy (allocates new pointer list in memory)",npArray:"Creates a zero-copy View sharing memory via stride calculations",winner:"NumPy (O(1) Instant)"},{aspect:"CPU Hardware Execution",pyList:"Interpreted Python loop with dynamic type check per iteration",npArray:"Direct vectorized C execution with SIMD AVX-512 register instructions",winner:"NumPy (50x-200x Faster)"}],G=()=>{const[a,u]=l.useState("overview"),[n,b]=l.useState(0),[f,g]=l.useState(null),[p,j]=l.useState("part1"),d=h.find(t=>t.id===p)||h[0],[c,y]=l.useState({original:[10,20,30,40,50],isViewMutated:!1}),N=()=>{y({original:[10,999,30,40,50],isViewMutated:!0})},w=()=>{y({original:[10,20,30,40,50],isViewMutated:!1})},v=[{id:"overview",label:"Overview & Memory Architecture"},{id:"anatomy",label:"ndarray Anatomy"},{id:"dimensions",label:"Dimensions (1D to 4D)"},{id:"memory",label:"Memory & Strides"},{id:"views",label:"Views vs Copies"},{id:"comparison",label:"Python List vs ndarray"}];return e.jsxs("div",{className:"space-y-8 text-slate-200 leading-relaxed max-w-6xl mx-auto pb-12",children:[e.jsxs("header",{className:"relative bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-900 p-8 rounded-2xl border border-indigo-800/40 shadow-2xl overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsx("div",{className:"absolute bottom-0 left-0 w-60 h-60 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"}),e.jsxs("div",{className:"relative z-10 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-3",children:[e.jsx("span",{className:"px-3.5 py-1 text-xs font-bold tracking-wider uppercase bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 rounded-full",children:"BCAC701B • Segment 9 • Module 1 • Topic 2"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 rounded-full",children:"Core Concept"}),e.jsx("span",{className:"px-3 py-1 text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 rounded-full",children:"Data Structure"})]}),e.jsxs("h1",{className:"text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight",children:["The NumPy ",e.jsx("code",{className:"text-cyan-400 font-mono",children:"ndarray"})," Concept"]}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-300 max-w-4xl",children:["The ",e.jsx("strong",{className:"text-white font-mono",children:"ndarray"})," (N-dimensional array) is the fundamental atomic data structure powering all of scientific Python, Machine Learning, and Deep Learning. Click the tabs below to explore its contiguous C memory blocks, multidimensional strides, and zero-copy views."]}),e.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:v.map(t=>e.jsx("button",{onClick:()=>u(t.id),className:`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all duration-300 cursor-pointer ${a===t.id?"bg-indigo-600 text-white shadow-lg shadow-indigo-600/30 border border-indigo-400 ring-2 ring-indigo-400/30":"bg-slate-800/80 text-slate-300 hover:bg-slate-700/80 border border-slate-700/60"}`,children:t.label},t.id))})]})]}),a==="overview"&&e.jsxs("div",{className:"space-y-8",children:[e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Conceptual Overview & Purpose"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Understanding ndarray from theory to production architecture"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 hover:border-indigo-500/40 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400"}),e.jsx("h3",{className:"font-bold text-cyan-300 text-base",children:"What is an ndarray?"})]}),e.jsxs("p",{className:"text-sm text-slate-300",children:["An ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"ndarray"})," is a homogeneous multidimensional container of fixed-size items. Every element in the array shares the exact same numeric data type (e.g. ",e.jsx("code",{className:"text-amber-300",children:"np.float64"}),") and occupies contiguous memory in RAM."]}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Uniform element size and binary representation"}),e.jsxs("li",{children:["Indexed by tuples of integers e.g. ",e.jsx("code",{className:"text-slate-200",children:"arr[row, col]"})]}),e.jsx("li",{children:"Managed via Python metadata header wrapping raw C/C++ memory"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3 hover:border-indigo-500/40 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400"}),e.jsx("h3",{className:"font-bold text-emerald-300 text-base",children:"Why is it Needed in Machine Learning?"})]}),e.jsx("p",{className:"text-sm text-slate-300",children:"Machine learning algorithms (such as Linear Regression and Neural Networks) execute billions of matrix multiplications, dot products, and loss computations. Python lists cannot be executed on CPU SIMD hardware because list items are scattered pointers across RAM."}),e.jsxs("ul",{className:"text-xs text-slate-400 space-y-1 list-disc list-inside",children:[e.jsx("li",{children:"Enables CPU vectorization and SIMD parallel operations"}),e.jsx("li",{children:"Drastically cuts RAM footprint (no pointer or boxing overhead)"}),e.jsx("li",{children:"Allows zero-copy reshape, transpose, and slice operations"})]})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"02"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Visual Memory Architecture & Strides"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"How ndarray maps 2D logical matrices onto 1D physical RAM"})]})]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-xl border border-slate-800 flex flex-col items-center justify-center",children:e.jsxs("svg",{className:"w-full max-w-3xl h-auto",viewBox:"0 0 800 420",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("rect",{width:"800",height:"420",rx:"16",fill:"#0B1120"}),e.jsx("circle",{cx:"200",cy:"150",r:"100",fill:"#3B82F6",fillOpacity:"0.05"}),e.jsx("circle",{cx:"600",cy:"280",r:"120",fill:"#10B981",fillOpacity:"0.05"}),e.jsxs("g",{transform:"translate(40, 40)",children:[e.jsx("text",{x:"0",y:"0",fill:"#93C5FD",fontSize:"14",fontWeight:"bold",fontFamily:"monospace",children:"LOGICAL 2D MATRIX: shape = (3, 4) • dtype = float64"}),e.jsx("text",{x:"0",y:"20",fill:"#64748B",fontSize:"11",fontFamily:"sans-serif",children:"Indexed as arr[row, col]"}),e.jsx("path",{d:"M 50 40 L 260 40",stroke:"#38BDF8",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"265,40 255,36 255,44",fill:"#38BDF8"}),e.jsx("text",{x:"110",y:"34",fill:"#38BDF8",fontSize:"11",fontWeight:"bold",fontFamily:"monospace",children:"Axis 1 → (Columns)"}),e.jsx("path",{d:"M 30 60 L 30 190",stroke:"#A855F7",strokeWidth:"2",strokeDasharray:"4 2"}),e.jsx("polygon",{points:"30,195 26,185 34,185",fill:"#A855F7"}),e.jsx("text",{x:"10",y:"130",fill:"#A855F7",fontSize:"11",fontWeight:"bold",fontFamily:"monospace",transform:"rotate(-90, 15, 130)",children:"Axis 0 ↓ (Rows)"}),[{r:0,c:0,val:"72",label:"arr[0,0]"},{r:0,c:1,val:"85",label:"arr[0,1]"},{r:0,c:2,val:"61",label:"arr[0,2]"},{r:0,c:3,val:"90",label:"arr[0,3]"},{r:1,c:0,val:"88",label:"arr[1,0]"},{r:1,c:1,val:"76",label:"arr[1,1]"},{r:1,c:2,val:"95",label:"arr[1,2]"},{r:1,c:3,val:"70",label:"arr[1,3]"},{r:2,c:0,val:"55",label:"arr[2,0]"},{r:2,c:1,val:"65",label:"arr[2,1]"},{r:2,c:2,val:"72",label:"arr[2,2]"},{r:2,c:3,val:"80",label:"arr[2,3]"}].map((t,r)=>{const s=50+t.c*56,i=50+t.r*50,o=t.r===0,m=t.r===1,x=o?"#1E293B":m?"#0F2942":"#1B2A38",A=o?"#38BDF8":m?"#10B981":"#F59E0B";return e.jsxs("g",{children:[e.jsx("rect",{x:s,y:i,width:"50",height:"44",rx:"6",fill:x,stroke:A,strokeWidth:"1.5",children:e.jsx("animate",{attributeName:"stroke-opacity",values:"0.4;1;0.4",dur:"3s",begin:`${r*.15}s`,repeatCount:"indefinite"})}),e.jsx("text",{x:s+25,y:i+22,fill:"#FFFFFF",fontSize:"13",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:t.val}),e.jsx("text",{x:s+25,y:i+36,fill:"#94A3B8",fontSize:"8",textAnchor:"middle",fontFamily:"monospace",children:t.label})]},r)})]}),e.jsxs("g",{transform:"translate(380, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"150",rx:"10",fill:"#1E1B4B",stroke:"#6366F1",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"28",fill:"#A5B4FC",fontSize:"13",fontWeight:"bold",fontFamily:"monospace",children:"NDARRAY METADATA HEADER"}),e.jsx("line",{x1:"20",y1:"38",x2:"360",y2:"38",stroke:"#4338CA",strokeWidth:"1"}),e.jsxs("text",{x:"25",y:"60",fill:"#E2E8F0",fontSize:"12",fontFamily:"monospace",children:["arr.data    → ",e.jsx("tspan",{fill:"#38BDF8",children:"0x7ffee4b1a0 (Pointer)"})]}),e.jsxs("text",{x:"25",y:"80",fill:"#E2E8F0",fontSize:"12",fontFamily:"monospace",children:["arr.shape   → ",e.jsx("tspan",{fill:"#4ADE80",children:"(3, 4)"})," [rows, cols]"]}),e.jsxs("text",{x:"25",y:"100",fill:"#E2E8F0",fontSize:"12",fontFamily:"monospace",children:["arr.strides → ",e.jsx("tspan",{fill:"#FBBF24",children:"(32, 8)"})," [bytes to jump]"]}),e.jsxs("text",{x:"25",y:"120",fill:"#E2E8F0",fontSize:"12",fontFamily:"monospace",children:["arr.dtype   → ",e.jsx("tspan",{fill:"#F472B6",children:"float64"})," (8 bytes/elem)"]}),e.jsxs("text",{x:"25",y:"140",fill:"#E2E8F0",fontSize:"12",fontFamily:"monospace",children:["arr.flags   → ",e.jsx("tspan",{fill:"#2DD4BF",children:"C_CONTIGUOUS, OWNDATA"})]})]}),e.jsx("path",{d:"M 400 200 L 400 240",stroke:"#6366F1",strokeWidth:"2",strokeDasharray:"3 3"}),e.jsx("polygon",{points:"400,245 396,237 404,237",fill:"#6366F1"}),e.jsx("text",{x:"410",y:"225",fill:"#A5B4FC",fontSize:"10",fontFamily:"monospace",children:"Points directly to flat buffer"}),e.jsxs("g",{transform:"translate(40, 255)",children:[e.jsx("text",{x:"0",y:"0",fill:"#34D399",fontSize:"14",fontWeight:"bold",fontFamily:"monospace",children:"PHYSICAL 1D C-CONTIGUOUS MEMORY (RAM): 12 Elements × 8 Bytes = 96 Bytes"}),e.jsx("text",{x:"0",y:"18",fill:"#64748B",fontSize:"11",fontFamily:"sans-serif",children:"Row 0 (blue) followed immediately in RAM by Row 1 (green) and Row 2 (amber)"}),[72,85,61,90,88,76,95,70,55,65,72,80].map((t,r)=>{const s=r*58,i=r<4,o=r>=4&&r<8,m=i?"#1E293B":o?"#0F2942":"#1B2A38",x=i?"#38BDF8":o?"#10B981":"#F59E0B";return e.jsxs("g",{children:[e.jsx("rect",{x:s,y:"30",width:"54",height:"50",rx:"6",fill:m,stroke:x,strokeWidth:"1.5"}),e.jsx("text",{x:s+27,y:"55",fill:"#FFFFFF",fontSize:"13",fontWeight:"bold",textAnchor:"middle",fontFamily:"monospace",children:t}),e.jsxs("text",{x:s+27,y:"72",fill:"#94A3B8",fontSize:"9",textAnchor:"middle",fontFamily:"monospace",children:["+",r*8,"B"]})]},r)})]})]})}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4",children:[e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3",children:[e.jsxs("h3",{className:"font-bold text-white text-base",children:["Interactive Axis Inspector: ",e.jsxs("code",{className:"text-cyan-400",children:["np.sum(marks, axis=",n===null?"None":n,")"]})]}),e.jsx("div",{className:"flex gap-2",children:[{id:0,label:"Axis 0 (Collapse Rows ↓)"},{id:1,label:"Axis 1 (Collapse Cols →)"},{id:null,label:"axis=None (All Elements)"}].map(t=>e.jsx("button",{onClick:()=>b(t.id),className:`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all cursor-pointer ${n===t.id?"bg-indigo-600 text-white shadow-md shadow-indigo-600/40":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:t.label},String(t.id)))})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono bg-slate-900/80 p-4 rounded-lg border border-slate-800",children:[e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Matrix Input:"}),e.jsx("pre",{className:"text-slate-300",children:`[[72, 85, 61, 90],  # Sachin (Barrackpore)
 [88, 76, 95, 70],  # Mahima (Shyamnagar)
 [55, 65, 72, 80]]  # Susmita (Ichapur)`})]}),e.jsxs("div",{children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Calculation & Result:"}),n===0&&e.jsxs("div",{className:"space-y-1 text-emerald-300",children:[e.jsx("p",{children:"Column-wise totals (Subject totals across all students):"}),e.jsx("p",{className:"text-sm font-bold text-white bg-slate-950 p-2 rounded border border-emerald-500/40",children:"np.sum(marks, axis=0) = [215, 226, 228, 240]"}),e.jsx("p",{className:"text-slate-400 text-[11px]",children:"Output shape: (4,) — reduced axis 0 from (3, 4)"})]}),n===1&&e.jsxs("div",{className:"space-y-1 text-cyan-300",children:[e.jsx("p",{children:"Row-wise totals (Total marks for each student):"}),e.jsx("p",{className:"text-sm font-bold text-white bg-slate-950 p-2 rounded border border-cyan-500/40",children:"np.sum(marks, axis=1) = [308, 329, 272]"}),e.jsx("p",{className:"text-slate-400 text-[11px]",children:"Output shape: (3,) — reduced axis 1 from (3, 4)"})]}),n===null&&e.jsxs("div",{className:"space-y-1 text-amber-300",children:[e.jsx("p",{children:"Grand total across the entire 2D matrix:"}),e.jsx("p",{className:"text-sm font-bold text-white bg-slate-950 p-2 rounded border border-amber-500/40",children:"np.sum(marks, axis=None) = 909"}),e.jsx("p",{className:"text-slate-400 text-[11px]",children:"Output: scalar float (all 12 elements summed)"})]})]})]})]})]})]}),a==="anatomy"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Anatomy of the ndarray Object"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Essential attributes inspected in every data science session"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/60 text-xs uppercase font-mono text-slate-400",children:[e.jsx("th",{className:"p-3",children:"Attribute"}),e.jsx("th",{className:"p-3",children:"Return Type"}),e.jsx("th",{className:"p-3",children:"Example Value"}),e.jsx("th",{className:"p-3",children:"Technical Description"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/80 font-mono text-xs sm:text-sm",children:F.map((t,r)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-3 font-bold text-cyan-300",children:t.attr}),e.jsx("td",{className:"p-3 text-purple-300",children:t.type}),e.jsx("td",{className:"p-3 text-amber-300",children:t.example}),e.jsx("td",{className:"p-3 font-sans text-xs sm:text-sm text-slate-300",children:t.desc})]},r))})]})})]}),a==="dimensions"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Dimensional Hierarchy (1D to 4D)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"From 1D vectors to 4D tensor batches used in Deep Learning"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:E.map((t,r)=>e.jsxs("div",{className:`p-5 rounded-xl border ${t.color} space-y-3`,children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("h3",{className:"font-bold text-white text-base",children:t.rank}),e.jsxs("span",{className:`px-2.5 py-0.5 text-xs font-mono font-bold rounded-full border ${t.badge}`,children:["ndim = ",t.ndim]})]}),e.jsxs("p",{className:"text-xs font-mono bg-slate-950 p-2 rounded border border-slate-800 text-slate-200",children:["shape = ",e.jsx("strong",{className:"text-white",children:t.shape})]}),e.jsxs("p",{className:"text-xs text-slate-300",children:[e.jsx("strong",{className:"text-slate-100",children:"Analogy:"})," ",t.analogy]}),e.jsxs("p",{className:"text-xs text-slate-400",children:[e.jsx("strong",{className:"text-slate-200",children:"ML Application:"})," ",t.mlUse]})]},r))})]}),a==="memory"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"C-Order Memory Layout & Strides Math"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Why Transpose is an instantaneous O(1) operation"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-base",children:"C-Contiguous (Row-Major) vs Fortran (Col-Major)"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["In C-order (NumPy's default), items in the last axis (columns) are adjacent in RAM. Moving to the next column takes 1 itemsize step. Moving to the next row jumps by ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"N_cols × itemsize"})," bytes."]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{className:"text-slate-400",children:"# Check continuity flags"}),e.jsx("p",{children:"arr = np.array([[1, 2], [3, 4]], dtype=np.int32)"}),e.jsx("p",{className:"text-emerald-400",children:"arr.flags['C_CONTIGUOUS'] # True"}),e.jsx("p",{className:"text-rose-400",children:"arr.flags['F_CONTIGUOUS'] # False"}),e.jsx("p",{className:"text-cyan-400",children:"arr.strides # (8, 4) bytes"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-3",children:[e.jsxs("h3",{className:"font-bold text-cyan-300 text-base",children:["Why Transpose ",e.jsx("code",{className:"text-white font-mono",children:"arr.T"})," is 0.000 ms"]}),e.jsx("p",{className:"text-sm text-slate-300",children:"When you transpose a 1,000,000 × 1,000,000 matrix in NumPy, zero bytes of numeric data are moved or copied. NumPy simply swaps the shape tuple and swaps the strides tuple!"}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{className:"text-slate-400",children:"# Original array shape (3, 4), strides (32, 8)"}),e.jsx("p",{children:"t = arr.T  # Transposed view"}),e.jsx("p",{className:"text-amber-400",children:"t.shape   # (4, 3) <-- swapped"}),e.jsx("p",{className:"text-purple-400",children:"t.strides # (8, 32) <-- swapped"}),e.jsx("p",{className:"text-emerald-400",children:"t.base is arr # True (zero copy view)"})]})]})]})]}),a==="views"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Views vs Copies Mechanics"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"The single most common source of data mutation bugs in Python ML"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-amber-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-amber-400 uppercase tracking-wider",children:"A. Array Slice = VIEW"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Basic slicing (",e.jsx("code",{className:"text-amber-300 font-mono",children:"arr[1:4]"}),") creates a lightweight metadata wrapper pointing to the ",e.jsx("strong",{children:"exact same RAM buffer"}),". Mutating an element inside a view modifies the original array!"]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"orig = np.array([10, 20, 30])"}),e.jsx("p",{children:"v = orig[1:]       # View"}),e.jsx("p",{children:"v[0] = 999         # Mutating view"}),e.jsx("p",{className:"text-rose-400",children:"print(orig) # [10, 999, 30] MUTATED!"})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-emerald-900/40 space-y-3",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-emerald-400 uppercase tracking-wider",children:"B. Explicit Copy = .copy()"}),e.jsxs("p",{className:"text-sm text-slate-300",children:["Calling ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"arr[1:4].copy()"})," allocates a completely separate memory block in RAM. Changes made to the copy have zero effect on the parent array."]}),e.jsxs("div",{className:"font-mono text-xs bg-slate-900 p-3 rounded-lg border border-slate-800 text-slate-300 space-y-1",children:[e.jsx("p",{children:"orig = np.array([10, 20, 30])"}),e.jsx("p",{children:"c = orig[1:].copy() # Independent Copy"}),e.jsx("p",{children:"c[0] = 999          # Mutating copy"}),e.jsx("p",{className:"text-emerald-400",children:"print(orig) # [10, 20, 30] SAFE!"})]})]})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-xl border border-slate-800 space-y-4",children:[e.jsx("h3",{className:"font-bold text-white text-sm sm:text-base",children:"Interactive View Mutation Sandbox:"}),e.jsxs("div",{className:"flex flex-wrap items-center gap-4",children:[e.jsx("button",{onClick:N,className:"px-4 py-2 bg-rose-600 hover:bg-rose-500 text-white text-xs font-bold rounded-lg transition-all cursor-pointer shadow-md",children:"Execute: view[0] = 999"}),e.jsx("button",{onClick:w,className:"px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold rounded-lg transition-all cursor-pointer border border-slate-700",children:"Reset Array"})]}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono",children:[e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"Original Array in Memory:"}),e.jsxs("span",{className:`text-base font-bold ${c.isViewMutated?"text-rose-400":"text-emerald-400"}`,children:["[",c.original.join(", "),"]"]}),c.isViewMutated&&e.jsx("span",{className:"block text-[11px] text-rose-300 mt-1",children:"⚠️ Notice: original[1] changed from 20 to 999 because view shared memory!"})]}),e.jsxs("div",{className:"p-3 bg-slate-900 rounded-lg border border-slate-800",children:[e.jsx("span",{className:"text-slate-400 block mb-1",children:"View Slice (orig[1:4]):"}),e.jsxs("span",{className:"text-base font-bold text-amber-300",children:["[",c.original.slice(1,4).join(", "),"]"]}),e.jsxs("span",{className:"block text-[11px] text-slate-400 mt-1",children:["view.base is orig: ",e.jsx("strong",{className:"text-cyan-300",children:"True"})]})]})]})]})]}),a==="comparison"&&e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-indigo-500/20 border border-indigo-500/40 text-indigo-400 font-bold text-lg",children:"01"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Python List vs NumPy ndarray Comparison"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Architectural differences in memory, speed, and execution"})]})]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm text-slate-300 border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 bg-slate-950/60 text-xs uppercase font-mono text-slate-400",children:[e.jsx("th",{className:"p-3",children:"Feature"}),e.jsx("th",{className:"p-3 text-rose-300",children:"Python Builtin List"}),e.jsx("th",{className:"p-3 text-emerald-300",children:"NumPy ndarray"}),e.jsx("th",{className:"p-3 text-cyan-300",children:"Verdict"})]})}),e.jsx("tbody",{className:"divide-y divide-slate-800/80 text-xs sm:text-sm",children:I.map((t,r)=>e.jsxs("tr",{className:"hover:bg-slate-800/40 transition-colors",children:[e.jsx("td",{className:"p-3 font-bold text-white font-mono",children:t.aspect}),e.jsx("td",{className:"p-3 text-slate-300",children:t.pyList}),e.jsx("td",{className:"p-3 text-slate-200",children:t.npArray}),e.jsx("td",{className:"p-3 font-semibold text-emerald-400",children:t.winner})]},r))})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-cyan-500/20 border border-cyan-500/40 text-cyan-400 font-bold text-lg",children:"💻"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl font-bold text-white",children:"Python Code Demonstration Suite (4 Focused Scripts)"}),e.jsx("p",{className:"text-xs text-slate-400",children:"Select a script below to inspect ndarray memory pointers, core attributes, or tensor representations"})]})]}),e.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3",children:h.map(t=>e.jsxs("button",{onClick:()=>j(t.id),className:`p-3 rounded-xl border text-left transition-all ${p===t.id?"bg-cyan-950/40 border-cyan-500 shadow-md shadow-cyan-950/40 scale-[1.02]":"bg-slate-950/70 border-slate-800 hover:bg-slate-900 text-slate-400 hover:text-slate-200"}`,children:[e.jsx("div",{className:"flex items-center justify-between mb-1",children:e.jsx("span",{className:`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded border ${p===t.id?"bg-cyan-500/20 text-cyan-300 border-cyan-500/40":"bg-slate-800 text-slate-500 border-slate-700"}`,children:t.badge})}),e.jsx("p",{className:"text-xs font-bold text-white truncate",children:t.title})]},t.id))}),e.jsx("div",{className:"bg-slate-950 border border-slate-800 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3",children:e.jsxs("div",{children:[e.jsx("div",{className:"flex items-center gap-2",children:e.jsx("span",{className:"text-xs font-mono font-bold text-cyan-400",children:d.fileName})}),e.jsx("p",{className:"text-xs text-slate-300 mt-1",children:d.summary})]})}),e.jsx(S,{fileModule:d.code,title:d.fileName})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-rose-500/20 border border-rose-500/40 text-rose-400 font-bold text-lg",children:"03"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Common Pitfalls & Best Practices"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Avoid these beginner and intermediate ndarray traps"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-5",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 1: Unintended View Mutation"}),e.jsx("p",{className:"text-xs text-slate-300",children:"Slicing an array and modifying it mutates the parent training set."}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# BAD:"})," sub = X[:, 0:2]; sub[0] = 0",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# GOOD:"})," sub = X[:, 0:2].copy(); sub[0] = 0"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 2: Shape (N,) vs (N, 1) in ML Models"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Passing a 1D vector of shape ",e.jsx("code",{className:"text-amber-300",children:"(N,)"})," as feature matrix X into Scikit-learn throws a ValueError."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# BAD:"})," model.fit(x_1d, y) # shape (100,)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# GOOD:"})," model.fit(x_1d.reshape(-1, 1), y) # shape (100, 1)"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 3: Chained Indexing Performance Trap"}),e.jsxs("p",{className:"text-xs text-slate-300",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"arr[i][j]"})," creates an unnecessary intermediate 1D slice object per access."]}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# SLOW:"})," val = arr[5][10]",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# FAST (Idiomatic):"})," val = arr[5, 10]"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-rose-900/40 space-y-2 hover:border-rose-500/40 transition-all",children:[e.jsx("span",{className:"text-xs font-mono font-bold text-rose-400 uppercase",children:"Pitfall 4: Implicit String Upcasting"}),e.jsx("p",{className:"text-xs text-slate-300",children:"If a single string is accidentally added to a numeric list during array creation, NumPy converts the entire array to string dtype."}),e.jsxs("div",{className:"text-[11px] font-mono bg-slate-900 p-2 rounded text-slate-300 border border-slate-800",children:[e.jsx("span",{className:"text-rose-400",children:"# BAD:"}),' arr = np.array([1, 2, "3"]) # dtype <U21',e.jsx("br",{}),e.jsx("span",{className:"text-emerald-400",children:"# GOOD:"}),' arr = np.array([1, 2, "3"], dtype=np.float64)']})]})]})]}),e.jsxs("section",{className:"bg-slate-900/90 p-6 sm:p-8 rounded-2xl border border-slate-800 shadow-xl space-y-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("div",{className:"p-2.5 rounded-xl bg-amber-500/20 border border-amber-500/40 text-amber-400 font-bold text-lg",children:"04"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl sm:text-2xl font-bold text-white",children:"Think About This... (Interactive Concept Checks)"}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-400",children:"Test your mental model of ndarray memory and dimensions"})]})]}),e.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[{id:1,q:"If an array has shape (4, 5, 6), what is its arr.ndim and arr.size?",a:"ndim = 3 (number of dimensions in tuple). size = 4 × 5 × 6 = 120 total elements."},{id:2,q:"Why does arr.ravel() run faster and use less RAM than arr.flatten()?",a:"ravel() returns a zero-copy View if memory is contiguous. flatten() always allocates a brand new copy."},{id:3,q:"What are the strides for a (3, 4) array of float32 (4 bytes each)?",a:"strides = (16, 4). Each element is 4 bytes, so advancing 1 column = 4B, advancing 1 row (4 items) = 16B."}].map(t=>e.jsxs("div",{className:"p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between",children:[e.jsx("p",{className:"text-xs font-semibold text-slate-200",children:t.q}),e.jsx("div",{children:f===t.id?e.jsx("div",{className:"p-2.5 rounded bg-indigo-950/40 border border-indigo-700/50 text-xs text-indigo-200 mt-2",children:t.a}):e.jsx("button",{onClick:()=>g(t.id),className:"w-full py-1.5 px-3 bg-slate-800 hover:bg-slate-700 text-cyan-300 text-xs font-semibold rounded transition-all cursor-pointer border border-slate-700",children:"Reveal Answer"})})]},t.id))})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(C,{title:"NumPy ndarray Concept — Frequently Asked Questions",questions:z})}),e.jsx("section",{className:"space-y-4",children:e.jsx(_,{content:B,title:"NumPy ndarray Concept Quick Revision Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 2 Note",downloadFileName:"numpy_ndarray_concept_note.txt"})}),e.jsx(T,{note:"Remember in our Barrackpore lab sessions: Sachin, Mahima, and Susmita often ask why a slice modified in one function alters the dataset in another. Slices are Views, not Copies! Always use .copy() when you intend to create an independent snapshot of your feature matrix before preprocessing. — Sukanta Hui"})]})};export{G as default};
