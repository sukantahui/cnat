import{r as o,j as e}from"./index-BpX9yBGC.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as d}from"./TeacherSukantaHui-CHCwqUcS.js";import{E as t}from"./EditableCCodeBlock-BNcz6xkE.js";import"./git-branch-BAD8G2G1.js";import"./index-DZzRudEq.js";import"./file-code-DekqbYpd.js";import"./type-Dp2t6Gfg.js";import"./refresh-cw-BzjppSKX.js";import"./copy-DyUhmCDX.js";import"./download-Cy_wnQFp.js";const c=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main() {\r
    int rows = 3, cols = 4;\r
    \r
    printf("=== Basic Dynamic 2D Array Allocation ===\\n");\r
    \r
    // Step 1: Allocate array of row pointers\r
    int **matrix = (int**)malloc(rows * sizeof(int*));\r
    if (matrix == NULL) {\r
        printf("Failed to allocate row pointers!\\n");\r
        return 1;\r
    }\r
    \r
    // Step 2: Allocate each row\r
    for (int i = 0; i < rows; i++) {\r
        matrix[i] = (int*)malloc(cols * sizeof(int));\r
        if (matrix[i] == NULL) {\r
            printf("Failed to allocate row %d!\\n", i);\r
            // Clean up previously allocated rows\r
            for (int j = 0; j < i; j++) {\r
                free(matrix[j]);\r
            }\r
            free(matrix);\r
            return 1;\r
        }\r
        \r
        // Initialize row with values\r
        for (int j = 0; j < cols; j++) {\r
            matrix[i][j] = (i + 1) * (j + 1);  // Multiplication table\r
        }\r
    }\r
    \r
    // Print the matrix\r
    printf("\\nAllocated %d x %d matrix:\\n", rows, cols);\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
            printf("%4d ", matrix[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
    \r
    // Print memory addresses to show non-contiguous layout\r
    printf("\\nMemory layout (addresses):\\n");\r
    for (int i = 0; i < rows; i++) {\r
        printf("Row %d starts at: %p\\n", i, (void*)matrix[i]);\r
    }\r
    \r
    // Step 3: Free memory (reverse order!)\r
    for (int i = 0; i < rows; i++) {\r
        free(matrix[i]);\r
    }\r
    free(matrix);\r
    matrix = NULL;  // Prevent dangling pointer\r
    \r
    printf("\\nMemory freed successfully!\\n");\r
    \r
    return 0;\r
}`,x=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Function that allocates a 2D array using double pointer parameter\r
int** allocate2DArray(int rows, int cols) {\r
    int **matrix = (int**)malloc(rows * sizeof(int*));\r
    if (matrix == NULL) {\r
        return NULL;\r
    }\r
    \r
    for (int i = 0; i < rows; i++) {\r
        matrix[i] = (int*)malloc(cols * sizeof(int));\r
        if (matrix[i] == NULL) {\r
            // Clean up on failure\r
            for (int j = 0; j < i; j++) {\r
                free(matrix[j]);\r
            }\r
            free(matrix);\r
            return NULL;\r
        }\r
        \r
        // Initialize with zeros\r
        for (int j = 0; j < cols; j++) {\r
            matrix[i][j] = 0;\r
        }\r
    }\r
    \r
    return matrix;\r
}\r
\r
// Function to fill matrix with student scores (Barrackpore CNAT example)\r
void fillStudentScores(int **matrix, int rows, int cols) {\r
    int student_scores[][4] = {\r
        {85, 90, 78, 92},   // Student 0\r
        {88, 76, 95, 89},   // Student 1\r
        {91, 84, 87, 93}    // Student 2\r
    };\r
    \r
    for (int i = 0; i < rows && i < 3; i++) {\r
        for (int j = 0; j < cols && j < 4; j++) {\r
            matrix[i][j] = student_scores[i][j];\r
        }\r
    }\r
}\r
\r
// Function to print matrix\r
void printMatrix(int **matrix, int rows, int cols, const char *title) {\r
    printf("\\n%s (%d x %d):\\n", title, rows, cols);\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
            printf("%4d ", matrix[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
// Function to free 2D array\r
void free2DArray(int **matrix, int rows) {\r
    if (matrix == NULL) return;\r
    \r
    for (int i = 0; i < rows; i++) {\r
        free(matrix[i]);\r
    }\r
    free(matrix);\r
}\r
\r
int main() {\r
    int rows = 3, cols = 4;\r
    \r
    printf("=== Allocation Function Using Double Pointer ===\\n");\r
    \r
    int **scores = allocate2DArray(rows, cols);\r
    if (scores == NULL) {\r
        printf("Memory allocation failed!\\n");\r
        return 1;\r
    }\r
    \r
    fillStudentScores(scores, rows, cols);\r
    printMatrix(scores, rows, cols, "Student Scores Matrix");\r
    \r
    // Calculate class average\r
    int total = 0;\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
            total += scores[i][j];\r
        }\r
    }\r
    printf("\\nClass Average: %.2f\\n", (double)total / (rows * cols));\r
    \r
    free2DArray(scores, rows);\r
    printf("\\nMemory freed successfully!\\n");\r
    \r
    return 0;\r
}`,m=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
// Jagged array: each row has different number of columns\r
int** createJaggedArray(int rows, int *colSizes) {\r
    int **jagged = (int**)malloc(rows * sizeof(int*));\r
    if (jagged == NULL) return NULL;\r
    \r
    for (int i = 0; i < rows; i++) {\r
        jagged[i] = (int*)malloc(colSizes[i] * sizeof(int));\r
        if (jagged[i] == NULL) {\r
            // Cleanup on failure\r
            for (int j = 0; j < i; j++) {\r
                free(jagged[j]);\r
            }\r
            free(jagged);\r
            return NULL;\r
        }\r
        \r
        // Initialize with sequential values\r
        for (int j = 0; j < colSizes[i]; j++) {\r
            jagged[i][j] = (i + 1) * 100 + j;\r
        }\r
    }\r
    \r
    return jagged;\r
}\r
\r
void printJaggedArray(int **jagged, int rows, int *colSizes) {\r
    printf("\\nJagged Array Contents:\\n");\r
    for (int i = 0; i < rows; i++) {\r
        printf("Row %d (%d cols): ", i, colSizes[i]);\r
        for (int j = 0; j < colSizes[i]; j++) {\r
            printf("%d ", jagged[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
void freeJaggedArray(int **jagged, int rows) {\r
    if (jagged == NULL) return;\r
    \r
    for (int i = 0; i < rows; i++) {\r
        free(jagged[i]);\r
    }\r
    free(jagged);\r
}\r
\r
int main() {\r
    printf("=== Jagged Arrays (Rows with Different Lengths) ===\\n");\r
    \r
    // Example: Course enrollments at Naihati CNAT\r
    // Different courses have different number of students\r
    int rows = 5;\r
    int colSizes[] = {3, 5, 2, 4, 6};  // Students per course\r
    \r
    int **enrollments = createJaggedArray(rows, colSizes);\r
    if (enrollments == NULL) {\r
        printf("Failed to create jagged array!\\n");\r
        return 1;\r
    }\r
    \r
    printJaggedArray(enrollments, rows, colSizes);\r
    \r
    // Demonstrate memory savings\r
    int regularSize = rows * 6 * sizeof(int);  // If all rows had 6 cols\r
    int jaggedSize = 0;\r
    for (int i = 0; i < rows; i++) {\r
        jaggedSize += colSizes[i] * sizeof(int);\r
    }\r
    jaggedSize += rows * sizeof(int*);  // Add row pointers\r
    \r
    printf("\\nMemory Comparison:\\n");\r
    printf("Regular 2D array (6 cols each): %d bytes\\n", regularSize);\r
    printf("Jagged array (variable cols): %d bytes\\n", jaggedSize);\r
    printf("Memory saved: %d bytes\\n", regularSize - jaggedSize);\r
    \r
    freeJaggedArray(enrollments, rows);\r
    \r
    return 0;\r
}`,h=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
// Structure to hold dynamic 2D array metadata\r
typedef struct {\r
    int **data;\r
    int rows;\r
    int cols;\r
} Matrix;\r
\r
// Initialize matrix\r
Matrix* createMatrix(int rows, int cols) {\r
    Matrix *mat = (Matrix*)malloc(sizeof(Matrix));\r
    if (mat == NULL) return NULL;\r
    \r
    mat->data = (int**)malloc(rows * sizeof(int*));\r
    if (mat->data == NULL) {\r
        free(mat);\r
        return NULL;\r
    }\r
    \r
    for (int i = 0; i < rows; i++) {\r
        mat->data[i] = (int*)calloc(cols, sizeof(int));\r
        if (mat->data[i] == NULL) {\r
            for (int j = 0; j < i; j++) free(mat->data[j]);\r
            free(mat->data);\r
            free(mat);\r
            return NULL;\r
        }\r
    }\r
    \r
    mat->rows = rows;\r
    mat->cols = cols;\r
    return mat;\r
}\r
\r
// Resize matrix - add rows and/or columns\r
int resizeMatrix(Matrix **mat, int newRows, int newCols) {\r
    if (mat == NULL || *mat == NULL) return -1;\r
    \r
    Matrix *oldMat = *mat;\r
    \r
    // Create new matrix\r
    Matrix *newMat = createMatrix(newRows, newCols);\r
    if (newMat == NULL) return -1;\r
    \r
    // Copy old data\r
    int copyRows = (oldMat->rows < newRows) ? oldMat->rows : newRows;\r
    int copyCols = (oldMat->cols < newCols) ? oldMat->cols : newCols;\r
    \r
    for (int i = 0; i < copyRows; i++) {\r
        for (int j = 0; j < copyCols; j++) {\r
            newMat->data[i][j] = oldMat->data[i][j];\r
        }\r
    }\r
    \r
    // Free old matrix\r
    for (int i = 0; i < oldMat->rows; i++) {\r
        free(oldMat->data[i]);\r
    }\r
    free(oldMat->data);\r
    free(oldMat);\r
    \r
    *mat = newMat;\r
    return 0;\r
}\r
\r
// Add a new row to existing matrix\r
int addRow(Matrix **mat) {\r
    if (mat == NULL || *mat == NULL) return -1;\r
    \r
    Matrix *oldMat = *mat;\r
    int newRows = oldMat->rows + 1;\r
    \r
    // Reallocate row pointers array\r
    int **newData = (int**)realloc(oldMat->data, newRows * sizeof(int*));\r
    if (newData == NULL) return -1;\r
    \r
    // Allocate new row\r
    newData[oldMat->rows] = (int*)calloc(oldMat->cols, sizeof(int));\r
    if (newData[oldMat->rows] == NULL) return -1;\r
    \r
    oldMat->data = newData;\r
    oldMat->rows = newRows;\r
    \r
    return 0;\r
}\r
\r
void printMatrix(Matrix *mat, const char *title) {\r
    printf("\\n%s (%d x %d):\\n", title, mat->rows, mat->cols);\r
    for (int i = 0; i < mat->rows; i++) {\r
        for (int j = 0; j < mat->cols; j++) {\r
            printf("%4d ", mat->data[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
void freeMatrix(Matrix *mat) {\r
    if (mat == NULL) return;\r
    \r
    for (int i = 0; i < mat->rows; i++) {\r
        free(mat->data[i]);\r
    }\r
    free(mat->data);\r
    free(mat);\r
}\r
\r
int main() {\r
    printf("=== Resizing Dynamic 2D Arrays ===\\n");\r
    \r
    // Create initial 3x3 matrix\r
    Matrix *mat = createMatrix(3, 3);\r
    if (mat == NULL) {\r
        printf("Failed to create matrix!\\n");\r
        return 1;\r
    }\r
    \r
    // Fill with initial values\r
    for (int i = 0; i < mat->rows; i++) {\r
        for (int j = 0; j < mat->cols; j++) {\r
            mat->data[i][j] = i * mat->cols + j + 1;\r
        }\r
    }\r
    \r
    printMatrix(mat, "Original Matrix");\r
    \r
    // Resize to 4x5\r
    printf("\\nResizing to 4x5...");\r
    resizeMatrix(&mat, 4, 5);\r
    printMatrix(mat, "After Resize to 4x5");\r
    \r
    // Add a new row\r
    printf("\\nAdding a new row...");\r
    addRow(&mat);\r
    \r
    // Fill new row with values\r
    for (int j = 0; j < mat->cols; j++) {\r
        mat->data[mat->rows - 1][j] = 999;\r
    }\r
    printMatrix(mat, "After Adding Row");\r
    \r
    freeMatrix(mat);\r
    printf("\\nMemory freed successfully!\\n");\r
    \r
    return 0;\r
}`,A=()=>{const[a,i]=o.useState("concept"),s=[{q:"Why do we need double pointers for dynamic memory allocation?",a:"Double pointers are essential when a function needs to allocate memory and return that memory through a parameter. Since C passes parameters by value, passing a single pointer (int *ptr) only allows modifying the data pointed to, not the pointer itself. With a double pointer (int **ptr), the function can modify the original pointer variable in the caller, setting it to point to newly allocated memory. This pattern is used in functions like 'allocate_memory(int **ptr, int size)'."},{q:"How do you allocate memory for a 2D array using double pointers?",a:"First allocate an array of row pointers: 'int **matrix = (int**)malloc(rows * sizeof(int*));'. Then for each row, allocate columns: 'for(int i = 0; i < rows; i++) matrix[i] = (int*)malloc(cols * sizeof(int));'. This creates a jagged array where each row can have different column sizes. Access elements with matrix[i][j]. Free in reverse order: first free each row, then free the array of pointers."},{q:"What is the difference between static 2D array and dynamic 2D array with double pointers?",a:"Static 2D array 'int arr[3][4]' allocates contiguous memory (12 integers in one block) on stack or in data segment. Dynamic 2D array with double pointers allocates an array of pointers (3 pointers) plus separate arrays for each row (4 integers each). Memory may be non-contiguous, which can affect cache performance. However, dynamic allocation allows variable row sizes and runtime-determined dimensions."},{q:"How do you properly free memory allocated with double pointers?",a:"Free in reverse order of allocation: First free each row/column: 'for(int i = 0; i < rows; i++) free(matrix[i]);' Then free the array of pointers: 'free(matrix);'. Always set the double pointer to NULL after freeing: 'matrix = NULL;'. Forgetting to free individual rows before freeing the main pointer causes memory leaks. Freeing only the main pointer loses all references to row allocations."},{q:"What happens if you don't check malloc's return value with double pointers?",a:"malloc returns NULL if allocation fails. Without checking, you might dereference NULL later, causing segmentation fault. For 2D allocations, if a row allocation fails, you must free previously allocated rows to avoid memory leaks. Best practice: check each allocation and implement cleanup: 'if(matrix[i] == NULL) { for(int j=0; j<i; j++) free(matrix[j]); free(matrix); return NULL; }'"},{q:"How do you reallocate memory for a double pointer 2D array?",a:"realloc with double pointers is complex because rows may be non-contiguous. To add a row: use realloc on the main pointer: 'matrix = (int**)realloc(matrix, (newRows) * sizeof(int*));' then allocate the new row: 'matrix[newRows-1] = (int*)malloc(cols * sizeof(int));'. To add columns to all rows, realloc each row individually: 'for(int i=0; i<rows; i++) matrix[i] = (int*)realloc(matrix[i], newCols * sizeof(int));'"},{q:"What is a jagged array and how do you create it with double pointers?",a:"A jagged array is a 2D array where each row has a different number of columns. Using double pointers: 'int **jagged = (int**)malloc(rows * sizeof(int*));' then allocate each row with different sizes: 'jagged[0] = (int*)malloc(3 * sizeof(int)); jagged[1] = (int*)malloc(5 * sizeof(int)); jagged[2] = (int*)malloc(2 * sizeof(int));'. This is useful for sparse matrices or variable-length data like student records where each student has different number of courses."},{q:"How do you pass a dynamically allocated 2D array to a function?",a:"Pass the double pointer and dimensions: 'void processMatrix(int **matrix, int rows, int cols)'. Inside the function, use matrix[i][j] syntax normally. The function receives a copy of the double pointer (address of row pointers), but can still modify the array elements. To modify the pointer itself (reallocate), pass triple pointer: 'void reallocateMatrix(int ***matrix, int newRows, int newCols)'."},{q:"What is the memory overhead of using double pointers for 2D arrays?",a:"For an rows×cols matrix, memory overhead is: rows * sizeof(int*) (for row pointers) + rows * cols * sizeof(int) (for actual data). On 64-bit system, each row pointer is 8 bytes. For a large matrix (1000×1000), overhead is 1000*8 = 8KB, negligible compared to 4MB of data. However, each row allocation has malloc overhead (typically 16-32 bytes per allocation), which can be significant for many small rows."},{q:"How do you create a 3D array using double/triple pointers?",a:"Triple pointer for 3D: 'int ***array3d = (int***)malloc(depth * sizeof(int**));' Then allocate each 2D layer: 'for(int i=0; i<depth; i++) { array3d[i] = (int**)malloc(rows * sizeof(int*)); for(int j=0; j<rows; j++) array3d[i][j] = (int*)malloc(cols * sizeof(int)); }'. Free in reverse order: columns → rows → depth. Access: array3d[d][r][c]."},{q:"What is the difference between 'int **ptr' and 'int *ptr[5]' for dynamic allocation?",a:"'int *ptr[5]' declares a static array of 5 pointers on stack - fixed size, automatic cleanup. 'int **ptr' can point to dynamically allocated array of pointers - flexible size. For dynamic 2D arrays, you typically use 'int **ptr' and allocate both the pointer array and rows. 'int *ptr[5]' can still point to dynamically allocated rows: 'ptr[0] = (int*)malloc(10*sizeof(int));' - the pointer array is static but rows are dynamic."},{q:"How do you handle memory allocation failures in 2D arrays gracefully?",a:"Implement a cleanup function: 'void cleanup2D(int **matrix, int allocatedRows) { for(int i=0; i<allocatedRows; i++) free(matrix[i]); free(matrix); }'. When a row allocation fails, call cleanup with rows allocated so far. Return NULL to indicate failure. Caller checks for NULL. This prevents memory leaks and ensures graceful degradation. Example: 'if(matrix[i]==NULL) { cleanup2D(matrix, i); return NULL; }'"},{q:"Can you use calloc with double pointers for 2D arrays?",a:"Yes, calloc initializes allocated memory to zero. For row pointers: 'int **matrix = (int**)calloc(rows, sizeof(int*));' (all pointers NULL). For rows: 'matrix[i] = (int*)calloc(cols, sizeof(int));' (all elements zero). calloc is safer for initial allocation as it eliminates garbage values. However, calloc may be slightly slower than malloc+manual initialization due to zeroing overhead."},{q:"What are the performance implications of non-contiguous memory in double pointer 2D arrays?",a:"Non-contiguous memory can cause poor cache locality and TLB misses. Accessing matrix[i][j] requires two memory accesses: one for row pointer, one for element. Iterating column-wise (changing row in inner loop) is particularly slow. For performance-critical code, consider single contiguous allocation: 'int *data = (int*)malloc(rows*cols*sizeof(int));' and access with data[i*cols + j]. This gives contiguous memory and better cache performance."},{q:"How do you implement a generic dynamic array using double pointers?",a:"Use void pointers: 'void **dynamicArray;'. Allocate: 'dynamicArray = (void**)malloc(initialCapacity * sizeof(void*));'. Store any type: 'dynamicArray[index] = (void*)&value;'. Track size and capacity. For resizing: 'dynamicArray = (void**)realloc(dynamicArray, newCapacity * sizeof(void*));'. This is how many generic container libraries implement dynamic arrays in C. However, type safety is lost - caller must cast back appropriately."}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"text-center mb-12 animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center justify-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4",children:"Topic 4"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent mb-4",children:"Dynamic Memory Allocation Using Double Pointers"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Mastering dynamic 2D arrays, flexible data structures, and memory management with double pointers"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-8 animate-[fadeInUp_0.6s_ease-out_0.1s_both]",children:["concept","qa"].map(r=>e.jsx("button",{onClick:()=>i(r),className:l("px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize",a===r?"bg-purple-600 text-white shadow-lg scale-105":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:r==="concept"?"📚 Concept & Examples":"❓ Questions & Answers"},r))}),a==="concept"?e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-2xl",children:"🗂️"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Why Double Pointers for Dynamic Allocation?"})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["Double pointers are crucial when a function needs to allocate memory and modify the original pointer variable in the caller. Since C passes parameters by value, a single pointer parameter only allows modifying the pointed-to data, not the pointer itself. Double pointers (",e.jsx("span",{className:"font-mono font-bold text-purple-600 dark:text-purple-400",children:"int **ptr"}),") enable functions to change where the original pointer points."]}),e.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800",children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-semibold mb-2",children:"🎯 Key Insight:"}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300",children:["When Tuhina from Naihati CNAT needs a function to create a 2D array and return it, passing ",e.jsx("span",{className:"font-mono",children:"int **matrix"}),"allows the function to modify the original pointer. Think of it as giving someone your address book's location (double pointer) so they can replace the entire address book, rather than just changing an address in it!"]})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-[fadeInUp_0.6s_ease-out_0.1s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-2xl",children:"📐"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Dynamic 2D Array Memory Layout"})]}),e.jsx("div",{className:"mb-8 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 1000 500",className:"w-full max-w-5xl mx-auto",style:{maxWidth:"100%",height:"auto"},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"ptrArrayGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#8B5CF6",stopOpacity:.3}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#7C3AED",stopOpacity:.4}})]}),e.jsxs("linearGradient",{id:"rowGrad",x1:"0%",y1:"0%",x2:"100%",y2:"0%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#3B82F6",stopOpacity:.3}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#2563EB",stopOpacity:.4}})]}),e.jsx("marker",{id:"arrowPurple",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#8B5CF6"})})]}),e.jsx("rect",{x:"50",y:"60",width:"180",height:"50",rx:"8",fill:"#E9D5FF",stroke:"#8B5CF6",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"90",textAnchor:"middle",fill:"#4C1D95",fontSize:"14",fontWeight:"bold",children:"matrix (int**)"}),e.jsx("text",{x:"250",y:"90",fill:"#6B7280",fontSize:"12",children:"Address: 0x1000"}),e.jsx("line",{x1:"230",y1:"85",x2:"290",y2:"85",stroke:"#8B5CF6",strokeWidth:"2",markerEnd:"url(#arrowPurple)",strokeDasharray:"5,3",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;8",dur:"1s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"300",y:"60",width:"280",height:"130",rx:"8",fill:"url(#ptrArrayGrad)",stroke:"#8B5CF6",strokeWidth:"2"}),e.jsx("text",{x:"440",y:"85",textAnchor:"middle",fill:"#4C1D95",fontSize:"13",fontWeight:"bold",children:"Row Pointer Array"}),e.jsx("rect",{x:"320",y:"100",width:"220",height:"30",rx:"4",fill:"#DDD6FE",stroke:"#8B5CF6",strokeWidth:"1.5"}),e.jsx("text",{x:"430",y:"120",textAnchor:"middle",fill:"#4C1D95",fontSize:"12",children:"matrix[0] → 0x2000"}),e.jsx("rect",{x:"320",y:"135",width:"220",height:"30",rx:"4",fill:"#DDD6FE",stroke:"#8B5CF6",strokeWidth:"1.5"}),e.jsx("text",{x:"430",y:"155",textAnchor:"middle",fill:"#4C1D95",fontSize:"12",children:"matrix[1] → 0x2100"}),e.jsx("rect",{x:"320",y:"170",width:"220",height:"30",rx:"4",fill:"#DDD6FE",stroke:"#8B5CF6",strokeWidth:"1.5"}),e.jsx("text",{x:"430",y:"190",textAnchor:"middle",fill:"#4C1D95",fontSize:"12",children:"matrix[2] → 0x2200"}),e.jsx("line",{x1:"540",y1:"115",x2:"620",y2:"115",stroke:"#3B82F6",strokeWidth:"1.5",strokeDasharray:"3,3"}),e.jsx("line",{x1:"540",y1:"150",x2:"620",y2:"150",stroke:"#3B82F6",strokeWidth:"1.5",strokeDasharray:"3,3"}),e.jsx("line",{x1:"540",y1:"185",x2:"620",y2:"185",stroke:"#3B82F6",strokeWidth:"1.5",strokeDasharray:"3,3"}),e.jsx("rect",{x:"630",y:"60",width:"250",height:"80",rx:"8",fill:"url(#rowGrad)",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"755",y:"85",textAnchor:"middle",fill:"#1E3A8A",fontSize:"12",fontWeight:"bold",children:"Row 0 (4 ints)"}),e.jsx("rect",{x:"650",y:"95",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"670",y:"112",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"10"}),e.jsx("rect",{x:"695",y:"95",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"715",y:"112",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"20"}),e.jsx("rect",{x:"740",y:"95",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"760",y:"112",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"30"}),e.jsx("rect",{x:"785",y:"95",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"805",y:"112",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"40"}),e.jsx("rect",{x:"630",y:"155",width:"250",height:"80",rx:"8",fill:"url(#rowGrad)",stroke:"#3B82F6",strokeWidth:"2"}),e.jsx("text",{x:"755",y:"180",textAnchor:"middle",fill:"#1E3A8A",fontSize:"12",fontWeight:"bold",children:"Row 1 (4 ints)"}),e.jsx("rect",{x:"650",y:"190",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"670",y:"207",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"50"}),e.jsx("rect",{x:"695",y:"190",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"715",y:"207",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"60"}),e.jsx("rect",{x:"740",y:"190",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"760",y:"207",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"70"}),e.jsx("rect",{x:"785",y:"190",width:"40",height:"25",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1"}),e.jsx("text",{x:"805",y:"207",textAnchor:"middle",fill:"#1E3A8A",fontSize:"11",children:"80"}),e.jsxs("g",{transform:"translate(50, 280)",children:[e.jsx("rect",{x:"0",y:"0",width:"500",height:"90",rx:"8",fill:"white",stroke:"#CBD5E1",strokeWidth:"1.5"}),e.jsx("text",{x:"250",y:"25",textAnchor:"middle",fill:"#1F2937",fontSize:"14",fontWeight:"bold",children:"Memory Layout Legend"}),e.jsx("rect",{x:"20",y:"40",width:"14",height:"14",rx:"3",fill:"#E9D5FF",stroke:"#8B5CF6"}),e.jsx("text",{x:"45",y:"52",fill:"#4B5563",fontSize:"12",children:"Double Pointer (int**)"}),e.jsx("rect",{x:"220",y:"40",width:"14",height:"14",rx:"3",fill:"#DDD6FE",stroke:"#8B5CF6"}),e.jsx("text",{x:"245",y:"52",fill:"#4B5563",fontSize:"12",children:"Row Pointer Array"}),e.jsx("rect",{x:"400",y:"40",width:"14",height:"14",rx:"3",fill:"#DBEAFE",stroke:"#3B82F6"}),e.jsx("text",{x:"425",y:"52",fill:"#4B5563",fontSize:"12",children:"Actual Row Data"}),e.jsx("text",{x:"20",y:"78",fill:"#6B7280",fontSize:"11",children:"Non-contiguous memory - each row allocated separately"})]})]})}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/30 p-5 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("h3",{className:"font-bold text-lg text-blue-800 dark:text-blue-300 mb-3",children:"📝 Allocation Steps"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300 font-mono text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"1."})," int **matrix = malloc(rows * sizeof(int*));"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"2."})," for(i = 0; i < rows; i++)"]}),e.jsx("li",{className:"flex items-start gap-2 pl-6",children:"matrix[i] = malloc(cols * sizeof(int));"}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"3."})," Access: matrix[row][col] = value;"]})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/30 p-5 rounded-xl border border-green-200 dark:border-green-800",children:[e.jsx("h3",{className:"font-bold text-lg text-green-800 dark:text-green-300 mb-3",children:"🗑️ Freeing Steps (Reverse Order!)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300 font-mono text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"1."})," for(i = 0; i < rows; i++)"]}),e.jsx("li",{className:"flex items-start gap-2 pl-6",children:"free(matrix[i]);"}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"2."})," free(matrix);"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"3."})," matrix = NULL;"]})]})]})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-[fadeInUp_0.6s_ease-out_0.2s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-2xl",children:"💻"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Code Examples"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: Basic Dynamic 2D Array Allocation and Deallocation",initialCode:c}),e.jsx(t,{title:"Example 2: Function That Allocates 2D Array Using Double Pointer",initialCode:x}),e.jsx(t,{title:"Example 3: Jagged Arrays (Rows with Different Lengths)",initialCode:m}),e.jsx(t,{title:"Example 4: Resizing Dynamic 2D Array with realloc",initialCode:h})]})]})}),e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.3s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center text-2xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Common Pitfalls"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-400 mb-3",children:"🚫 Beginner Mistakes"}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Forgetting to allocate row pointers before allocating rows"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Freeing only the main pointer (causes massive memory leaks!)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Not checking malloc return value for NULL"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Mixing up rows and columns in allocation loops"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Using sizeof(int) instead of sizeof(int*) for row pointers"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-400 mb-3",children:"💭 Memory Leak Scenarios"}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Losing the main pointer before freeing rows"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Reassigning matrix without freeing"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Early return without cleanup after partial allocation"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Forgetting to free when reallocating rows"]})]})]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.4s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-2xl",children:"✅"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Best Practices"})]}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"1."})," Always check return value of malloc/calloc/realloc before using"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"2."})," Implement cleanup functions for 2D arrays to prevent leaks"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"3."})," Free in reverse order of allocation (rows first, then pointer array)"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"4."})," Set pointers to NULL after freeing to prevent dangling pointers"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"5."})," For performance-critical code, consider single contiguous allocation"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"6."})," Use calloc instead of malloc when zero-initialization is needed"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"7."})," Document that caller is responsible for freeing returned 2D arrays"]})]})]})}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.5s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl flex items-center justify-center text-2xl",children:"💡"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Professional Tips & Tricks"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Performance Optimization:"})," For better cache locality, allocate a single contiguous block: ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"int *data = malloc(rows * cols * sizeof(int)); int **matrix = malloc(rows * sizeof(int*)); for(i=0;i<rows;i++) matrix[i] = data + i*cols;"})]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Debugging Helper:"})," Create a print function that shows memory addresses of each row to verify non-contiguous layout"]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Memory Pool Pattern:"})," For many small allocations, use a memory pool to reduce malloc overhead and fragmentation"]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Safe Wrapper:"})," Create ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"safe_malloc_2d()"})," that handles all error checking and cleanup internally"]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Valgrind:"})," Always test dynamic allocations with Valgrind to catch leaks: ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"valgrind --leak-check=full ./program"})]})})]})]})}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.6s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-2xl",children:"✓"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand why double pointers are needed for allocation functions"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can allocate and free dynamic 2D arrays correctly"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I always check malloc return value for NULL"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand jagged arrays and their use cases"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I know how to reallocate memory for dynamic 2D arrays"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can implement error cleanup for partial allocations"})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.7s_both]",children:e.jsx(d,{note:"Dynamic 2D arrays are where students finally understand why double pointers exist. When Debolina asked 'Why can't I just return a local array from a function?', I showed her how stack memory disappears after function returns. The key insight: draw the memory diagram with boxes for row pointers and separate boxes for each row. I tell my students at Barrackpore CNAT: 'Free in reverse - what you allocated last, free first!' Practice with small matrices (3x4) and trace every malloc and free with printf."})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-300 dark:border-gray-700 animate-[fadeInUp_0.6s_ease-out_0.8s_both]",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"🤔"}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:"Think About This..."})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 italic",children:['"What happens if you call ',e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:"free(matrix);"}),' before freeing the individual rows? Try writing a program that makes this mistake and run it with Valgrind. Observe carefully: where did the memory for each row go? Can you ever free it after losing the row pointers?"']})]})]}):e.jsx("div",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out]",children:s.map((r,n)=>e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",children:e.jsxs("details",{className:"group",children:[e.jsxs("summary",{className:"cursor-pointer p-6 font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsxs("span",{className:"text-purple-600 dark:text-purple-400 mr-3",children:["Q",n+1,":"]}),r.q]}),e.jsx("div",{className:"p-6 pt-0 border-t border-gray-200 dark:border-gray-700 mt-4",children:e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:[e.jsx("span",{className:"font-bold text-green-600 dark:text-green-400",children:"Answer:"})," ",r.a]})})]})},n))})]}),e.jsx("style",{children:`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[fadeInUp_.*\\] {
            animation: none !important;
          }
        }
      `})]})};export{A as default};
