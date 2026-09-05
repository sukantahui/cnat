import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-sVKljqCv.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";import"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-monaco-Bv7hoEkV.js";const n=`#include <stdio.h>\r
\r
/**\r
 * MatrixOperationsDemo.c\r
 * Demonstrates 2D array row-major memory mapping, matrix addition,\r
 * matrix transposition, and matrix multiplication in C.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#define ROWS 3\r
#define COLS 3\r
\r
void printMatrix(const char *name, int matrix[ROWS][COLS]) {\r
    printf("Matrix %s (%dx%d):\\n", name, ROWS, COLS);\r
    for (int i = 0; i < ROWS; i++) {\r
        printf("  [ ");\r
        for (int j = 0; j < COLS; j++) {\r
            printf("%3d ", matrix[i][j]);\r
        }\r
        printf("]\\n");\r
    }\r
    printf("\\n");\r
}\r
\r
// 1. Matrix Addition: C[i][j] = A[i][j] + B[i][j]\r
void addMatrices(int A[ROWS][COLS], int B[ROWS][COLS], int result[ROWS][COLS]) {\r
    for (int i = 0; i < ROWS; i++) {\r
        for (int j = 0; j < COLS; j++) {\r
            result[i][j] = A[i][j] + B[i][j];\r
        }\r
    }\r
}\r
\r
// 2. Matrix Transpose: T[j][i] = A[i][j]\r
void transposeMatrix(int A[ROWS][COLS], int transpose[COLS][ROWS]) {\r
    for (int i = 0; i < ROWS; i++) {\r
        for (int j = 0; j < COLS; j++) {\r
            transpose[j][i] = A[i][j];\r
        }\r
    }\r
}\r
\r
// 3. Matrix Multiplication: C[i][j] = sum(A[i][k] * B[k][j])\r
void multiplyMatrices(int A[ROWS][COLS], int B[ROWS][COLS], int product[ROWS][COLS]) {\r
    for (int i = 0; i < ROWS; i++) {\r
        for (int j = 0; j < COLS; j++) {\r
            product[i][j] = 0;\r
            for (int k = 0; k < COLS; k++) {\r
                product[i][j] += A[i][k] * B[k][j];\r
            }\r
        }\r
    }\r
}\r
\r
int main(void) {\r
    int A[ROWS][COLS] = {\r
        {1, 2, 3},\r
        {4, 5, 6},\r
        {7, 8, 9}\r
    };\r
\r
    int B[ROWS][COLS] = {\r
        {9, 8, 7},\r
        {6, 5, 4},\r
        {3, 2, 1}\r
    };\r
\r
    int sum[ROWS][COLS];\r
    int trans[COLS][ROWS];\r
    int prod[ROWS][COLS];\r
\r
    printf("====================================================\\n");\r
    printf(" 2D Arrays & Matrix Algebra Operations in C\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    // Inspect Row-Major Physical Memory Addresses\r
    printf("🔍 Physical Row-Major Memory Inspection for Matrix A:\\n");\r
    for (int i = 0; i < ROWS; i++) {\r
        for (int j = 0; j < COLS; j++) {\r
            printf("  A[%d][%d] = %d at address %p (Offset: %td bytes)\\n",\r
                   i, j, A[i][j], (void*)&A[i][j], \r
                   (char*)&A[i][j] - (char*)&A[0][0]);\r
        }\r
    }\r
    printf("\\n");\r
\r
    printMatrix("A", A);\r
    printMatrix("B", B);\r
\r
    // 1. Matrix Addition\r
    addMatrices(A, B, sum);\r
    printMatrix("Sum (A + B)", sum);\r
\r
    // 2. Matrix Transposition\r
    transposeMatrix(A, trans);\r
    printMatrix("Transpose of A", trans);\r
\r
    // 3. Matrix Multiplication\r
    multiplyMatrices(A, B, prod);\r
    printMatrix("Product (A * B)", prod);\r
\r
    return 0;\r
}\r
`,a=[{question:"What is row-major order in C and how does it map 2D arrays to 1D physical RAM?",shortAnswer:"Elements of row 0 are placed consecutively in memory, followed immediately by row 1, then row 2, and so on.",explanation:"RAM is linear. A 2D array arr[ROWS][COLS] maps arr[i][j] to flat memory address: Base + ((i * COLS) + j) * sizeof(element).",hint:"Row after row sequentially stored in RAM.",level:"basic"},{question:"Why must the column dimension be specified when passing a 2D array to a function (e.g. void f(int arr[][4]))?",shortAnswer:"The compiler needs the column width to calculate the row offset multiplier (i * COLS).",explanation:"Without knowing how many columns each row holds, the compiler cannot know how many bytes to skip to reach row i.",hint:"COLS determines byte stride per row.",level:"basic"},{question:"What is the memory address calculation formula for arr[i][j] in row-major order?",shortAnswer:"Address(&arr[i][j]) = BaseAddress + ((i * COLS) + j) * sizeof(type).",explanation:"Multiplies row index i by total columns, adds column index j, and scales by element byte size.",hint:"Base + (i * cols + j) * size.",level:"basic"},{question:"What is the condition for two matrices A (m x n) and B (p x q) to be multiplied?",shortAnswer:"The number of columns in matrix A must equal the number of rows in matrix B (n == p).",explanation:"The resulting product matrix C will have dimensions m x q.",hint:"Inner dimensions must match: A(m x n) * B(n x q) = C(m x q).",level:"basic"},{question:"What is the time complexity of standard matrix multiplication of two N x N matrices?",shortAnswer:"O(N^3) cubic time complexity.",explanation:"Three nested loops: outer loop for rows of A (N), middle loop for cols of B (N), and inner loop for dot-product accumulation (N). Total operations = N * N * N = N^3.",hint:"Triple nested loop gives O(N^3).",level:"basic"},{question:"What is the transpose of a matrix and what are its dimensions?",shortAnswer:"An operation that flips a matrix over its diagonal, switching row and column indices: T[j][i] = A[i][j].",explanation:"If original matrix A has dimensions M x N, its transpose has dimensions N x M.",hint:"Rows become columns and columns become rows.",level:"basic",codeExample:`for(int i=0; i<R; i++)
    for(int j=0; j<C; j++)
        trans[j][i] = A[i][j];`},{question:"What is a Symmetric Matrix and how do you verify it in C?",shortAnswer:"A square matrix equal to its transpose (A[i][j] == A[j][i] for all i, j).",explanation:"Must be a square matrix (ROWS == COLS). Check if A[i][j] == A[j][i] for all pairs above the main diagonal.",hint:"Square matrix where A[i][j] == A[j][i].",level:"intermediate"},{question:"What is an Identity Matrix?",shortAnswer:"A square matrix with 1s on the main diagonal (where i == j) and 0s elsewhere.",explanation:"Multiplying any matrix A by an Identity matrix I yields A (A * I = A).",hint:"1s on main diagonal, 0s everywhere else.",level:"basic"},{question:"What is the difference between column-major order and row-major order?",shortAnswer:"Row-major stores row elements consecutively (used in C, C++, Python); column-major stores column elements consecutively (used in Fortran, MATLAB, R).",explanation:"In column-major order, element arr[i][j] is located at Base + (j * ROWS + i) * sizeof(type).",hint:"C is row-major; Fortran/MATLAB is column-major.",level:"intermediate"},{question:"Why is traversing a 2D matrix row-by-row (outer i, inner j) faster than column-by-column in C?",shortAnswer:"Row-by-row traversal accesses contiguous memory, maximizing CPU cache line hits.",explanation:"Accessing memory sequentially loads adjacent elements into L1 cache automatically. Column-wise access jumps across rows, causing cache misses on large matrices.",hint:"Spatial locality and cache line hits.",level:"advanced"},{question:"How do you zero-initialize an entire 2D matrix in C?",shortAnswer:"int matrix[ROWS][COLS] = {0};",explanation:"Setting the first element to 0 causes the compiler to fill all remaining elements in all rows and columns with 0.",hint:"int matrix[R][C] = {0}; initializes all to zero.",level:"basic"},{question:"What is a Sparse Matrix and how is it efficiently represented in memory?",shortAnswer:"A matrix where the majority of elements are zero. Represented as a 3-tuple list (Row, Column, Value).",explanation:"Storing only non-zero entries in a 3-column array or linked list saves immense RAM when dealing with large datasets.",hint:"3-tuple representation: (Row, Col, Non-Zero-Value).",level:"intermediate"},{question:"What is the trace of a square matrix?",shortAnswer:"The sum of elements on the main diagonal (where i == j).",explanation:"Trace = sum of A[i][i] for i from 0 to N - 1.",hint:"Sum of main diagonal elements.",level:"basic"},{question:"How do you calculate the determinant of a 2x2 matrix in C?",shortAnswer:"det = (A[0][0] * A[1][1]) - (A[0][1] * A[1][0]);",explanation:"Product of main diagonal minus product of anti-diagonal.",hint:"ad - bc formula.",level:"basic"},{question:"What is a 3D array in C and how is it declared?",shortAnswer:"An array of 2D arrays: int tensor[PAGES][ROWS][COLS];",explanation:"Memory is allocated as PAGES * ROWS * COLS consecutive elements in linear memory.",hint:"Collection of 2D matrices across pages/depth.",level:"intermediate"},{question:"How do you rotate a square matrix 90 degrees clockwise in-place in C?",shortAnswer:"Step 1: Transpose the matrix; Step 2: Reverse each row.",explanation:"Transposing swaps A[i][j] with A[j][i]. Reversing each row yields the 90-degree clockwise rotation.",hint:"Transpose + Reverse rows = 90 degree rotation.",level:"advanced"},{question:"What is a saddle point of a matrix?",shortAnswer:"An element that is the minimum in its row and the maximum in its column.",explanation:"Find the smallest element in row i; check if it is also the largest in its column.",hint:"Row minimum and column maximum.",level:"intermediate"},{question:"How do you pass a dynamically allocated 2D array (int**) to a function?",shortAnswer:"void func(int **matrix, int rows, int cols);",explanation:"Requires an array of row pointers where each row pointer points to a heap-allocated integer array.",hint:"Pointer-to-pointer parameter signature.",level:"advanced"},{question:"What is the condition for two matrices to be added or subtracted?",shortAnswer:"Both matrices must have identical dimensions (same number of rows and columns).",explanation:"Addition is performed element-by-element: C[i][j] = A[i][j] + B[i][j].",hint:"Dimensions must be equal.",level:"basic"},{question:"What is the total byte size of int matrix[4][5] on a system where sizeof(int) is 4 bytes?",shortAnswer:"80 bytes (4 rows * 5 cols * 4 bytes/int = 80 bytes).",explanation:"sizeof(matrix) evaluates to 80 bytes on the stack.",hint:"4 * 5 * 4 = 80 bytes.",level:"basic"},{question:"How do you check if a matrix is an upper triangular matrix?",shortAnswer:"Verify that all elements below the main diagonal (where i > j) are equal to 0.",explanation:"If any A[i][j] != 0 for i > j, the matrix is not upper triangular.",hint:"Elements with i > j must be 0.",level:"intermediate"},{question:"What is spiral order matrix traversal?",shortAnswer:"Traversing boundaries clockwise: top row, right col, bottom row, left col, shifting boundaries inward.",explanation:"Maintain top, bottom, left, right boundary indices and increment/decrement after each directional pass.",hint:"4-boundary inward spiral traversal.",level:"advanced"},{question:"What is Strassen's Matrix Multiplication Algorithm?",shortAnswer:"A divide-and-conquer algorithm that multiplies two N x N matrices in O(N^2.81) time.",explanation:"Reduces the number of recursive multiplications from 8 to 7, improving asymptotically on O(N^3).",hint:"O(N^2.81) sub-cubic matrix multiplication.",level:"advanced"},{question:"What is the expression *(*(arr + i) + j) in C?",shortAnswer:"The pointer dereference equivalent of arr[i][j].",explanation:"*(arr + i) yields the pointer to row i; adding j offsets to column j; outer * dereferences the value.",hint:"Pointer arithmetic form of 2D indexing.",level:"intermediate"},{question:"Why does C not require the first dimension when declaring initialized 2D arrays (e.g. int m[][2] = {{1,2},{3,4}})?",shortAnswer:"The compiler counts the initializer rows, but column width (2) is mandatory to establish stride.",explanation:"With 4 elements and 2 columns, the compiler infers that there are 4 / 2 = 2 rows.",hint:"Rows are inferred; column width is required.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_005: Arrays, Matrix Operations & Searching/Sorting\r
TOPIC 4: 2D Arrays & Matrices: Row-Major Memory Layout & Matrix Math\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ROW-MAJOR MEMORY MAPPING\r
--------------------------------------------------------------------------------\r
- C stores multi-dimensional arrays in ROW-MAJOR ORDER in contiguous physical RAM.\r
- All elements of Row 0 are stored first, followed by Row 1, Row 2, etc.\r
- Offset Formula:\r
    Address(&arr[i][j]) = BaseAddress + ((i * COLS) + j) * sizeof(Type)\r
- Pointer Dereference Equivalence:\r
    arr[i][j]  ==  *(*(arr + i) + j)\r
\r
2. PASSING 2D ARRAYS TO FUNCTIONS\r
--------------------------------------------------------------------------------\r
- RULE: You MUST declare the column dimension in function parameters!\r
    void process(int matrix[][COLS], int rows); // VALID\r
    void process(int matrix[ROWS][COLS]);       // VALID\r
    void process(int matrix[][]);               // COMPILE ERROR!\r
\r
3. CORE MATRIX ALGORITHMS\r
--------------------------------------------------------------------------------\r
- Addition: C[i][j] = A[i][j] + B[i][j] (Dimensions must match, O(R*C)).\r
- Transpose: T[j][i] = A[i][j] (M x N becomes N x M, O(R*C)).\r
- Multiplication (A[m x n] * B[n x p] = C[m x p]):\r
    for (int i = 0; i < m; i++) {\r
        for (int j = 0; j < p; j++) {\r
            C[i][j] = 0;\r
            for (int k = 0; k < n; k++) {\r
                C[i][j] += A[i][k] * B[k][j];\r
            }\r
        }\r
    }\r
    Time Complexity: O(M * N * P) -> O(N^3) for square matrices.\r
\r
4. MEMORY EFFICIENCY BEST PRACTICES\r
--------------------------------------------------------------------------------\r
[✓] Loop Ordering: Always use outer loop for rows (i) and inner loop for cols (j)\r
    to achieve contiguous cache-line memory prefetching.\r
[✓] Square Matrix Check: Matrix multiplication condition: Cols of A == Rows of B.\r
[✓] Initialize arrays cleanly with: int matrix[R][C] = {0};\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_005 · Topic 4"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"2D Matrix Algebra & Memory Strides"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"2D Arrays, Row-Major Memory Mapping & Matrix Algebra Operations"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Uncover the physical 1D reality of 2D matrices in RAM. Calculate row-major memory stride offsets, master matrix addition, transposition, and implement $O(N^3)$ triple-nested matrix multiplication."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The Spreadsheet Grid vs Linear RAM"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["During our systems programming workshop in Barrackpore, ",e.jsx("strong",{children:"Debangshu"})," asked: ",e.jsx("em",{children:'"Sir, hardware memory chips only have linear byte addresses (0, 1, 2, 3...). How can the C compiler create a 2-dimensional grid of rows and columns?"'})]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"📐 The Theater Seating Row-Major Model"}),e.jsx("p",{className:"text-xs md:text-sm text-slate-300",children:"Imagine cinema hall seating at a theater in Barrackpore with 3 rows of 4 seats each. The theater staff doesn't need 2D physical wiring. They simply install Seat 1..4 in Row 0, then immediately place Seat 5..8 in Row 1, and Seat 9..12 in Row 2!"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["To find seat ",e.jsx("code",{children:"[row][col]"}),", you simply skip past all preceding rows (",e.jsx("code",{children:"row * TotalColumns"}),") and take ",e.jsx("code",{children:"col"})," additional steps:",e.jsx("br",{}),e.jsx("code",{className:"text-emerald-400 font-mono font-bold block pt-1",children:"Linear Memory Address = BaseAddress + ((row * COLS) + col) * sizeof(Type)"})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: 2D Matrix Row-Major Linearization"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 310",className:"w-full min-w-[750px] font-sans",children:[e.jsx("text",{x:"460",y:"25",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"Conceptual 2D Grid (3x3) Linearized into Physical RAM Strip (9 Consecutive Elements)"}),e.jsxs("g",{transform:"translate(60, 50)",children:[e.jsx("text",{x:"80",y:"0",textAnchor:"middle",fill:"#f59e0b",className:"font-bold text-xs",children:"Conceptual 2D Table"}),e.jsx("rect",{x:"0",y:"10",width:"160",height:"130",rx:"8",fill:"#0f172a",stroke:"#475569"}),e.jsx("rect",{x:"10",y:"20",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"30",y:"40",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A00"}),e.jsx("rect",{x:"60",y:"20",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"80",y:"40",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A01"}),e.jsx("rect",{x:"110",y:"20",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"130",y:"40",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A02"}),e.jsx("rect",{x:"10",y:"60",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"30",y:"80",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A10"}),e.jsx("rect",{x:"60",y:"60",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"80",y:"80",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A11"}),e.jsx("rect",{x:"110",y:"60",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"130",y:"80",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A12"}),e.jsx("rect",{x:"10",y:"100",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"30",y:"120",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A20"}),e.jsx("rect",{x:"60",y:"100",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"80",y:"120",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A21"}),e.jsx("rect",{x:"110",y:"100",width:"40",height:"30",rx:"4",fill:"#1e293b",stroke:"#34d399"}),e.jsx("text",{x:"130",y:"120",textAnchor:"middle",fill:"#fff",className:"font-bold text-xs",children:"A22"})]}),e.jsx("path",{d:"M 250 115 L 320 115",stroke:"#f59e0b",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"285",y:"105",textAnchor:"middle",fill:"#f59e0b",className:"text-xs font-bold",children:"Linearize"}),e.jsxs("g",{transform:"translate(330, 80)",children:[e.jsx("text",{x:"260",y:"-10",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs",children:"Physical Linear RAM Memory Order"}),e.jsx("rect",{x:"0",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"27",y:"35",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"A[0][0]"}),e.jsx("text",{x:"27",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x00"}),e.jsx("rect",{x:"60",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"87",y:"35",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"A[0][1]"}),e.jsx("text",{x:"87",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x04"}),e.jsx("rect",{x:"120",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"147",y:"35",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"A[0][2]"}),e.jsx("text",{x:"147",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x08"}),e.jsx("rect",{x:"180",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"207",y:"35",textAnchor:"middle",fill:"#818cf8",className:"font-bold text-xs",children:"A[1][0]"}),e.jsx("text",{x:"207",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x0C"}),e.jsx("rect",{x:"240",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"267",y:"35",textAnchor:"middle",fill:"#818cf8",className:"font-bold text-xs",children:"A[1][1]"}),e.jsx("text",{x:"267",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x10"}),e.jsx("rect",{x:"300",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"327",y:"35",textAnchor:"middle",fill:"#818cf8",className:"font-bold text-xs",children:"A[1][2]"}),e.jsx("text",{x:"327",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x14"}),e.jsx("rect",{x:"360",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"387",y:"35",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs",children:"A[2][0]"}),e.jsx("text",{x:"387",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x18"}),e.jsx("rect",{x:"420",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"447",y:"35",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs",children:"A[2][1]"}),e.jsx("text",{x:"447",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x1C"}),e.jsx("rect",{x:"480",y:"10",width:"55",height:"50",rx:"4",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"507",y:"35",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs",children:"A[2][2]"}),e.jsx("text",{x:"507",y:"52",textAnchor:"middle",fill:"#94a3b8",className:"text-[9px]",children:"0x20"})]}),e.jsx("rect",{x:"60",y:"240",width:"800",height:"40",rx:"8",fill:"#1e1e2e",stroke:"#334155"}),e.jsx("text",{x:"460",y:"265",textAnchor:"middle",fill:"#f472b6",className:"text-xs font-mono font-bold",children:"Offset Formula: Stride = (Row_Index * 3 + Col_Index) * 4 Bytes"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Matrix Algorithms Anatomy"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-2",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"1. Matrix Addition"}),e.jsx("p",{className:"text-slate-300 font-mono text-emerald-400",children:"C[i][j] = A[i][j] + B[i][j]"}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Requires identical dimensions. Double nested loop running in $O(ROWS \\times COLS)$ time."})]}),e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm",children:"2. Matrix Transpose"}),e.jsx("p",{className:"text-slate-300 font-mono text-emerald-400",children:"T[j][i] = A[i][j]"}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Flips matrix across main diagonal. $M \\times N$ matrix transforms into $N \\times M$."})]}),e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-2",children:[e.jsx("h3",{className:"font-bold text-purple-300 text-sm",children:"3. Matrix Multiplication"}),e.jsx("p",{className:"text-slate-300 font-mono text-emerald-400",children:"C[i][j] += A[i][k] * B[k][j]"}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Requires $Cols(A) == Rows(B)$. Triple nested loop with dot-product accumulation in $O(N^3)$ time."})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Complete Matrix Operations Suite Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"MatrixOperationsDemo.c"}),") demonstrates physical memory address calculation, matrix addition, matrix transposition, and matrix dot-product multiplication."]}),e.jsx(t,{fileModule:n,title:"MatrixOperationsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 2D Arrays & Matrix Algebra Operations in C
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

🔍 Physical Row-Major Memory Inspection for Matrix A:
  A[0][0] = 1 at address 00000084E6DFF6B0 (Offset: 0 bytes)
  A[0][1] = 2 at address 00000084E6DFF6B4 (Offset: 4 bytes)
  A[0][2] = 3 at address 00000084E6DFF6B8 (Offset: 8 bytes)
  A[1][0] = 4 at address 00000084E6DFF6BC (Offset: 12 bytes)
  A[1][1] = 5 at address 00000084E6DFF6C0 (Offset: 16 bytes)
  A[1][2] = 6 at address 00000084E6DFF6C4 (Offset: 20 bytes)
  A[2][0] = 7 at address 00000084E6DFF6C8 (Offset: 24 bytes)
  A[2][1] = 8 at address 00000084E6DFF6CC (Offset: 28 bytes)
  A[2][2] = 9 at address 00000084E6DFF6D0 (Offset: 32 bytes)

Matrix A (3x3):
  [   1   2   3 ]
  [   4   5   6 ]
  [   7   8   9 ]

Matrix B (3x3):
  [   9   8   7 ]
  [   6   5   4 ]
  [   3   2   1 ]

Matrix Sum (A + B) (3x3):
  [  10  10  10 ]
  [  10  10  10 ]
  [  10  10  10 ]

Matrix Transpose of A (3x3):
  [   1   4   7 ]
  [   2   5   8 ]
  [   3   6   9 ]

Matrix Product (A * B) (3x3):
  [  30  24  18 ]
  [  84  69  54 ]
  [ 138 114  90 ]`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Omitting Column Dimension in Signatures:"})," Declaring ",e.jsx("code",{children:"void f(int m[][])"})," causes a compiler error. Column width is strictly mandatory for stride calculation: ",e.jsx("code",{children:"void f(int m[][COLS])"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Inverted Loop Traversal (Cache Inefficiency):"})," Looping with outer ",e.jsx("code",{children:"j"})," (columns) and inner ",e.jsx("code",{children:"i"})," (rows) jumps across large memory strides on each access, causing massive CPU cache misses on big matrices. Always loop row-first (outer ",e.jsx("code",{children:"i"}),", inner ",e.jsx("code",{children:"j"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mismatched Matrix Multiplication Dimensions:"})," Multiplying matrices without checking if ",e.jsx("code",{children:"Cols(A) == Rows(B)"})," leads to memory access out of bounds or garbage math results."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["How would you rotate an $N \\times N$ square matrix by 90 degrees clockwise in-place with $O(1)$ extra memory?",e.jsx("em",{children:"(Hint: First take the Transpose of the matrix, then reverse each individual row!)"})]})]}),e.jsx("section",{children:e.jsx(i,{title:"Module 002_005 Topic 4 FAQs: 2D Arrays & Matrix Algebra",questions:a})}),e.jsx("section",{children:e.jsx(r,{content:o,title:"Module 002_005 Topic 4 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note",downloadFileName:"module_002_005_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Always loop row-by-row (outer i, inner j) when processing 2D matrices in C. This aligns with hardware cache line fetching and speeds up numerical computations drastically! — Sukanta Hui"})})]})}export{b as default};
