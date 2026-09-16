import{j as e}from"./vendor-react-core-C47mfheO.js";import{C as r}from"./CFileLoader-BZuhm7jn.js";import{F as t}from"./FAQTemplate-D7324Ho6.js";import{P as a}from"./PlainTextPrint-COK-Ppq5.js";import{T as n}from"./TeacherSukantaHui-3YGS5w6g.js";import"./CodeBlock-Cj4eeQCj.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-C5r6Bfkl.js";import"./EditableCCodeBlock-DPqylqAZ.js";import"./vendor-monaco-Bq9GhMe9.js";const o=`/**\r
 * Dynamic2DArrayDemo.c\r
 * Demonstrates Allocating and Deallocating Dynamic 2D Arrays:\r
 * 1. Array of Pointers approach (int **matrix)\r
 * 2. Contiguous Single-Block Flattened approach (int *matrix)\r
 * 3. Safe row-by-row deallocation sequence\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main(void) {\r
    int rows = 3;\r
    int cols = 4;\r
\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - DYNAMIC 2D ARRAYS & MATRICES       \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // ----------------------------------------------------\r
    // APPROACH 1: Array of Pointers (Classic int **matrix)\r
    // ----------------------------------------------------\r
    printf("--- 1. ARRAY OF POINTERS APPROACH (int **matrix) ---\\n");\r
    \r
    // Step 1: Allocate array of row pointers\r
    int **matrix = (int **)malloc(rows * sizeof(int *));\r
    if (matrix == NULL) {\r
        fprintf(stderr, "Failed to allocate row pointers!\\n");\r
        return 1;\r
    }\r
\r
    // Step 2: Allocate each row individually\r
    for (int r = 0; r < rows; r++) {\r
        matrix[r] = (int *)malloc(cols * sizeof(int));\r
        if (matrix[r] == NULL) {\r
            fprintf(stderr, "Failed to allocate row %d!\\n", r);\r
            // Clean up already allocated rows before exiting\r
            for (int k = 0; k < r; k++) free(matrix[k]);\r
            free(matrix);\r
            return 1;\r
        }\r
    }\r
\r
    // Step 3: Populate and access with standard matrix[r][c] syntax\r
    int counter = 10;\r
    for (int r = 0; r < rows; r++) {\r
        for (int c = 0; c < cols; c++) {\r
            matrix[r][c] = counter++;\r
        }\r
    }\r
\r
    printf("  Populated 3x4 Matrix (matrix[r][c]):\\n");\r
    for (int r = 0; r < rows; r++) {\r
        printf("  Row %d (at %p): ", r, (void*)matrix[r]);\r
        for (int c = 0; c < cols; c++) {\r
            printf("%3d ", matrix[r][c]);\r
        }\r
        printf("\\n");\r
    }\r
\r
    // Step 4: Deallocation in REVERSE order (free rows first, then row pointers)\r
    for (int r = 0; r < rows; r++) {\r
        free(matrix[r]);\r
        matrix[r] = NULL;\r
    }\r
    free(matrix);\r
    matrix = NULL;\r
    printf("  Approach 1 successfully deallocated row-by-row.\\n\\n");\r
\r
    // ----------------------------------------------------\r
    // APPROACH 2: Contiguous Single-Block (Cache Friendly)\r
    // ----------------------------------------------------\r
    printf("--- 2. CONTIGUOUS SINGLE-BLOCK MATRIX (Cache Friendly) ---\\n");\r
    int *flat_matrix = (int *)malloc(rows * cols * sizeof(int));\r
    if (flat_matrix != NULL) {\r
        for (int r = 0; r < rows; r++) {\r
            for (int c = 0; c < cols; c++) {\r
                // Index formula: [r * cols + c]\r
                flat_matrix[r * cols + c] = (r + 1) * 100 + (c + 1);\r
            }\r
        }\r
\r
        printf("  Flat Contiguous Matrix:\\n");\r
        for (int r = 0; r < rows; r++) {\r
            printf("  Row %d: ", r);\r
            for (int c = 0; c < cols; c++) {\r
                printf("%4d ", flat_matrix[r * cols + c]);\r
            }\r
            printf("\\n");\r
        }\r
\r
        // Single deallocation!\r
        free(flat_matrix);\r
        flat_matrix = NULL;\r
        printf("  Approach 2 freed with a single O(1) free() call.\\n");\r
    }\r
\r
    printf("========================================================\\n");\r
    return 0;\r
}\r
`,s=[{question:"Why can't you allocate a dynamic 2D array in C with a simple 'malloc(rows, cols)'?",answer:"malloc() takes only a single byte-size parameter. To create a 2D array whose row and column dimensions are determined at runtime, you must either allocate an array of row pointers ('int **') or a flattened 1D buffer ('int *') of size 'rows * cols * sizeof(int)'."},{question:"How does the Array of Pointers ('int **') approach for dynamic 2D arrays work?",answer:"You first allocate an array of row pointers: 'int **matrix = malloc(rows * sizeof(int*));'. Then in a loop over each row, you allocate each individual row: 'matrix[r] = malloc(cols * sizeof(int));'. This allows standard 2D indexing syntax 'matrix[r][c]'."},{question:"What is the mandatory deallocation sequence for an 'int **matrix' 2D array?",answer:"You MUST free the rows first in a loop, and then free the main pointer: 'for(int r = 0; r < rows; r++) free(matrix[r]); free(matrix);'. If you free 'matrix' first, you lose the addresses to all rows, causing a massive memory leak!"},{question:"What is the single-block contiguous flattened 2D array approach?",answer:"You allocate one single block of memory: 'int *mat = malloc(rows * cols * sizeof(int));'. You access element (r, c) using row-major arithmetic: 'mat[r * cols + c]'. It is freed with a single 'free(mat)' call."},{question:"Why is the single-block flattened 2D array significantly faster for CPU cache performance?",answer:"In a single contiguous block, all matrix elements are stored sequentially in physical RAM, maximizing CPU L1/L2 cache line hits. In the pointer-of-pointers approach, each row can be in scattered, non-contiguous heap pages, causing frequent cache misses."},{question:"What is a Jagged (Ragged) Array and how is it created with dynamic memory in C?",answer:"A jagged array is a 2D array where each row can have a different number of columns. Using 'int **matrix', you simply allocate different column sizes for each row (e.g. 'matrix[0] = malloc(3 * sizeof(int)); matrix[1] = malloc(7 * sizeof(int));')."},{question:"Can a jagged array be created using standard compile-time static 2D arrays (like 'int arr[3][4]')?",answer:"No. Compile-time static 2D arrays require a uniform, rectangular column dimension across all rows."},{question:"How do you pass an 'int **matrix' 2D array to a function?",answer:"Function prototype: 'void process_matrix(int **matrix, int rows, int cols);'. Inside the function, you access elements via 'matrix[r][c]'."},{question:"How do you pass a flattened single-block 2D array to a function?",answer:"Function prototype: 'void process_flat(int *matrix, int rows, int cols);'. Inside the function, you access elements via 'matrix[r * cols + c]'."},{question:"Can you pass a static 2D array 'int arr[3][4]' to a function expecting 'int **matrix'?",answer:"No! 'int arr[3][4]' is a contiguous block of integers, not an array of pointer addresses. Passing it to 'int **' results in a compiler type error and runtime crash."},{question:"What happens if one of the row allocations fails inside the loop when creating an 'int **matrix'?",answer:"You must defensively catch the NULL return, free all previously allocated rows (0 to r-1), free the top-level pointer 'matrix', and return an error code."},{question:"What is the pointer-to-VLA approach for dynamic 2D arrays in C99?",answer:"In C99, you can write: 'int (*matrix)[cols] = malloc(rows * sizeof *matrix);'. This allocates a single contiguous block on the heap while allowing clean 'matrix[r][c]' syntax and a single 'free(matrix)' call!"},{question:"What is the formula to convert 2D coordinates (row, col) into a 1D index in row-major order?",answer:"The formula is: 'index = (row * total_columns) + col'."},{question:"What is the formula to convert 2D coordinates (row, col) into a 1D index in column-major order (used in Fortran/MATLAB)?",answer:"The formula is: 'index = (col * total_rows) + row'."},{question:"How do you dynamically allocate a 3D array of dimensions (X, Y, Z)?",answer:"You can allocate a triple pointer 'int ***tensor' with three nested allocation loops, or allocate a single flat block 'int *tensor = malloc(X * Y * Z * sizeof(int));' indexed via '[x * Y * Z + y * Z + z]'."},{question:"How does local classroom debugging at Coder & AccoTax illustrate 2D array memory layout?",answer:"In Sukanta Hui's class, students print the pointer addresses of 'matrix[0]', 'matrix[1]', and 'matrix[2]'. In the pointer-of-pointers approach, the row addresses are non-contiguous; in the single-block approach, all rows are contiguous."},{question:"What is the overhead of the pointer-of-pointers ('int **') approach on 64-bit systems?",answer:"On 64-bit systems, each row pointer consumes 8 bytes plus allocator chunk metadata (typically 16 bytes per row), wasting significant RAM for small column sizes."},{question:"How do you allocate a dynamic array of strings in C?",answer:"An array of strings is an array of char pointers: 'char **names = malloc(count * sizeof(char*));' where each 'names[i] = malloc(max_len * sizeof(char));'."},{question:"How do you sort a dynamic array of strings with qsort() in C?",answer:"Pass a comparison function that dereferences the pointer-to-pointer: 'int cmp(const void *a, const void *b) { return strcmp(*(const char**)a, *(const char**)b); }'."},{question:"What happens if you free 'matrix[r]' but forget to set it to NULL?",answer:"It creates a dangling row pointer. If the code tries to access 'matrix[r][c]' later, it triggers a Use-After-Free bug."},{question:"Can calloc() be used to allocate dynamic 2D arrays initialized to zero?",answer:"Yes! Use 'calloc(cols, sizeof(int))' in the row loop or 'calloc(rows * cols, sizeof(int))' for the single-block approach."},{question:"How do you dynamically allocate a symmetric matrix (saving memory by storing only the lower triangle)?",answer:"Allocate row 0 with 1 element, row 1 with 2 elements, ..., row N-1 with N elements, saving nearly 50% RAM."},{question:"Why is matrix multiplication with single-block contiguous arrays significantly faster?",answer:"Because sequential contiguous access patterns allow CPU hardware prefetchers to stream cache lines into L1 cache without memory stalls."},{question:"What is the best practice for returning a dynamic 2D matrix from a function?",answer:"Wrap the matrix pointer, row count, and column count into a custom 'struct Matrix { int rows; int cols; double *data; };' for clean, encapsulated API design."},{question:"What is the golden rule when deallocating dynamic 2D arrays?",answer:"Deallocate in exact reverse order of allocation: Free each inner row pointer first, then free the master pointer array, and set all pointers to NULL!"}],i=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_009 · TOPIC 5: DYNAMIC 2D ARRAYS & MATRICES\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. THE TWO APPROACHES FOR DYNAMIC 2D MATRICES\r
--------------------------------------------------------------------------------\r
[A] Array of Pointers (int **matrix):\r
    // 1. Allocate row pointers\r
    int **mat = (int **)malloc(rows * sizeof(int *));\r
    // 2. Allocate each row\r
    for (int r = 0; r < rows; r++) {\r
        mat[r] = (int *)malloc(cols * sizeof(int));\r
    }\r
    // Access: mat[r][c]\r
    // Mandatory Deallocation:\r
    for (int r = 0; r < rows; r++) free(mat[r]);\r
    free(mat);\r
\r
[B] Contiguous Single-Block (int *matrix - Cache Optimized):\r
    int *mat = (int *)malloc(rows * cols * sizeof(int));\r
    // Access: mat[r * cols + c]\r
    // Deallocation:\r
    free(mat);\r
\r
\r
2. COMPARISON MATRIX\r
--------------------------------------------------------------------------------\r
Feature               | Array of Pointers (int **) | Contiguous Block (int *)\r
----------------------+----------------------------+----------------------------\r
Access Syntax         | matrix[r][c]               | matrix[r * cols + c]\r
Allocation Calls      | rows + 1 calls             | 1 single call\r
Deallocation Calls    | rows + 1 calls             | 1 single call\r
Memory Contiguity     | Rows scattered on heap     | 100% Contiguous in physical RAM\r
CPU Cache Performance | Slower (cache misses)      | Blazing fast (cache line hits)\r
Jagged Rows Support   | Yes (variable col sizes)   | No (fixed rectangular shape)\r
\r
\r
3. CRITICAL DEALLOCATION REVERSAL RULE\r
--------------------------------------------------------------------------------\r
Always free in REVERSE order of allocation:\r
1. Free every individual row first: free(mat[i])\r
2. Free the outer pointer array last: free(mat)\r
3. Set pointer to NULL: mat = NULL;\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_009 · Topic 5"}),e.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Multi-Dimensional Dynamic Memory"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Allocating Dynamic 2D Arrays & Matrices"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Explore the two primary architectural techniques for dynamically allocated 2D matrices: Array of Row Pointers (",e.jsx("code",{children:"int **"}),") vs Single-Block Contiguous 1D Flattening (",e.jsx("code",{children:"int *"}),"). Master safe row-by-row deallocation and cache-conscious engineering."]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: 2D Matrix Memory Layouts"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"In scientific computing, graphics programming, image processing, and linear algebra engines, 2D matrices whose row and column dimensions depend on runtime datasets must be allocated dynamically on the heap."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-indigo-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-indigo-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore algorithm lab, Debangshu tried to deallocate a 2D matrix by calling ",e.jsx("code",{children:"free(matrix);"})," directly without freeing the individual row arrays first. The program leaked thousands of bytes because all row pointers were orphaned. Sukanta Hui illustrated the reversal rule on the board: ",e.jsx("em",{children:"always free inward-to-outward, in the exact reverse sequence of allocation!"})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: 2D Pointer-to-Pointer Architecture"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 300",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"260",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"70",rx:"8",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#a5b4fc",className:"font-bold text-xs",children:"STACK (Local Var)"}),e.jsx("rect",{x:"15",y:"35",width:"130",height:"25",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"52",fill:"#e0e7ff",className:"font-mono text-xs",children:"int **mat = 0x1000"})]}),e.jsxs("g",{transform:"translate(260, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"190",rx:"8",fill:"#3b0764",stroke:"#d946ef",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#f5d0fe",className:"font-bold text-xs",children:"HEAP: Row Pointers (0x1000)"}),e.jsx("rect",{x:"15",y:"40",width:"170",height:"35",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"62",fill:"#fae8ff",className:"font-mono text-xs",children:"mat[0] = 0x5000 →"}),e.jsx("rect",{x:"15",y:"85",width:"170",height:"35",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"107",fill:"#fae8ff",className:"font-mono text-xs",children:"mat[1] = 0x6000 →"}),e.jsx("rect",{x:"15",y:"130",width:"170",height:"35",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"152",fill:"#fae8ff",className:"font-mono text-xs",children:"mat[2] = 0x7000 →"})]}),e.jsxs("g",{transform:"translate(520, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"340",height:"190",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"25",fill:"#6ee7b7",className:"font-bold text-xs",children:"HEAP: Dynamic Integer Rows"}),e.jsx("rect",{x:"15",y:"40",width:"310",height:"35",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"62",fill:"#ecfdf5",className:"font-mono text-xs",children:"Row 0 (0x5000): [ 10, 11, 12, 13 ]"}),e.jsx("rect",{x:"15",y:"85",width:"310",height:"35",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"107",fill:"#ecfdf5",className:"font-mono text-xs",children:"Row 1 (0x6000): [ 14, 15, 16, 17 ]"}),e.jsx("rect",{x:"15",y:"130",width:"310",height:"35",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"152",fill:"#ecfdf5",className:"font-mono text-xs",children:"Row 2 (0x7000): [ 18, 19, 20, 21 ]"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Pointer-of-Pointers vs Contiguous Flattened"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-indigo-300 text-sm",children:"1. Array of Pointers (int **)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Access:"})," Clean syntax ",e.jsx("code",{children:"matrix[r][c]"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," Supports jagged rows with varying lengths."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deallocation:"})," Requires looping to free each row first."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cache:"})," Slower due to scattered heap addresses."]})]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"2. Contiguous Flattened Block (int *)"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Access:"})," Index formula ",e.jsx("code",{children:"matrix[r * cols + c]"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Flexibility:"})," Fixed rectangular matrix only."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Deallocation:"})," Single ",e.jsx("code",{children:"free(matrix)"})," call!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Cache:"})," Blazing fast hardware prefetching and cache hits."]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Dynamic 2D Array Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"Dynamic2DArrayDemo.c"}),") demonstrates both the Array of Pointers approach with step-by-step row deallocation and the contiguous single-block approach."]}),e.jsx(r,{fileModule:o,title:"Dynamic2DArrayDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`========================================================
   CODER & ACCOTAX - DYNAMIC 2D ARRAYS & MATRICES       
========================================================

--- 1. ARRAY OF POINTERS APPROACH (int **matrix) ---
  Populated 3x4 Matrix (matrix[r][c]):
  Row 0 (at 0x55a9b7e822e0):  10  11  12  13 
  Row 1 (at 0x55a9b7e82300):  14  15  16  17 
  Row 2 (at 0x55a9b7e82320):  18  19  20  21 
  Approach 1 successfully deallocated row-by-row.

--- 2. CONTIGUOUS SINGLE-BLOCK MATRIX (Cache Friendly) ---
  Flat Contiguous Matrix:
  Row 0:  101  102  103  104 
  Row 1:  201  202  203  204 
  Row 2:  301  302  303  304 
  Approach 2 freed with a single O(1) free() call.
========================================================`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Freeing Outer Array First"}),e.jsxs("p",{className:"text-slate-300",children:["Writing ",e.jsx("code",{children:"free(matrix);"})," before freeing ",e.jsx("code",{children:"matrix[r]"})," destroys the pointer array and leaves every single row permanently leaked in RAM!"]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Prefer Contiguous Allocation"}),e.jsxs("p",{className:"text-slate-300",children:["For high-performance numerical engines, always prefer single-block contiguous allocation ",e.jsx("code",{children:"rows * cols * sizeof(type)"})," for superior L1/L2 cache spatial locality."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"How would you allocate a dynamic 2D array of strings where each student name can be of variable length up to 100 characters?"})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 003_009 Topic 5 FAQs: Dynamic 2D Arrays",questions:s})}),e.jsx("section",{children:e.jsx(a,{content:i,title:"Module 003_009 Topic 5 Note: Dynamic 2D Arrays",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_009_topic5_note.txt"})}),e.jsx("section",{children:e.jsx(n,{note:"When dealing with pointer-of-pointers (int **), always reverse your steps during cleanup: free each allocated row first in a loop, then free the master pointer array, and set matrix = NULL! — Sukanta Hui"})})]})}export{g as default};
