import{r as o,j as e}from"./index-BpX9yBGC.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as d}from"./TeacherSukantaHui-CHCwqUcS.js";import{E as t}from"./EditableCCodeBlock-BNcz6xkE.js";import"./git-branch-BAD8G2G1.js";import"./index-DZzRudEq.js";import"./file-code-DekqbYpd.js";import"./type-Dp2t6Gfg.js";import"./refresh-cw-BzjppSKX.js";import"./copy-DyUhmCDX.js";import"./download-Cy_wnQFp.js";const c=`#include <stdio.h>\r
\r
// Swap function using pointers - THE classic example\r
void swap(int *a, int *b) {\r
    int temp = *a;  // Store value pointed by a\r
    *a = *b;        // Assign value pointed by b to location pointed by a\r
    *b = temp;      // Assign temp to location pointed by b\r
}\r
\r
// This WON'T work - call by value version\r
void badSwap(int a, int b) {\r
    int temp = a;\r
    a = b;\r
    b = temp;\r
    printf("Inside badSwap: a=%d, b=%d\\n", a, b);\r
}\r
\r
int main() {\r
    int x = 10, y = 20;\r
    \r
    printf("=== Swap Function Demonstration ===\\n");\r
    printf("Original: x=%d, y=%d\\n\\n", x, y);\r
    \r
    // This won't swap\r
    printf("Calling badSwap (call by value):\\n");\r
    badSwap(x, y);\r
    printf("After badSwap: x=%d, y=%d (unchanged!)\\n\\n", x, y);\r
    \r
    // This works\r
    printf("Calling swap (with pointers):\\n");\r
    swap(&x, &y);\r
    printf("After swap: x=%d, y=%d (swapped!)\\n\\n", x, y);\r
    \r
    // Another example - why this matters\r
    int students_scores[] = {85, 92, 78, 88, 95};\r
    printf("Student scores before sorting (conceptual):\\n");\r
    for(int i = 0; i < 5; i++) {\r
        printf("%d ", students_scores[i]);\r
    }\r
    printf("\\nSwap is essential for sorting algorithms!\\n");\r
    \r
    return 0;\r
}`,x=`#include <stdio.h>\r
#include <limits.h>\r
\r
// Function that returns multiple values using pointers\r
void analyzeArray(int arr[], int size, int *sum, int *avg, int *max, int *min) {\r
    if (arr == NULL || size <= 0) {\r
        *sum = 0;\r
        *avg = 0;\r
        *max = 0;\r
        *min = 0;\r
        return;\r
    }\r
    \r
    *sum = 0;\r
    *max = INT_MIN;\r
    *min = INT_MAX;\r
    \r
    for(int i = 0; i < size; i++) {\r
        *sum += arr[i];\r
        if(arr[i] > *max) *max = arr[i];\r
        if(arr[i] < *min) *min = arr[i];\r
    }\r
    \r
    *avg = *sum / size;\r
}\r
\r
// Function to compute statistics for students\r
void computeStudentStats(int scores[], int count, int *highest, int *lowest, double *average) {\r
    if (count <= 0) return;\r
    \r
    *highest = scores[0];\r
    *lowest = scores[0];\r
    int sum = 0;\r
    \r
    for(int i = 0; i < count; i++) {\r
        sum += scores[i];\r
        if(scores[i] > *highest) *highest = scores[i];\r
        if(scores[i] < *lowest) *lowest = scores[i];\r
    }\r
    \r
    *average = (double)sum / count;\r
}\r
\r
int main() {\r
    // Example 1: Array analysis\r
    int data[] = {12, 45, 23, 89, 34, 67, 91, 28, 56, 73};\r
    int size = sizeof(data) / sizeof(data[0]);\r
    int sum, avg, max, min;\r
    \r
    printf("=== Returning Multiple Values ===\\n");\r
    analyzeArray(data, size, &sum, &avg, &max, &min);\r
    printf("Array: ");\r
    for(int i = 0; i < size; i++) printf("%d ", data[i]);\r
    printf("\\nSum: %d, Average: %d, Max: %d, Min: %d\\n\\n", sum, avg, max, min);\r
    \r
    // Example 2: Student scores from Barrackpore CNAT\r
    int cnat_scores[] = {85, 92, 78, 88, 95, 87, 90, 84, 91, 89};\r
    int highest, lowest;\r
    double average;\r
    \r
    computeStudentStats(cnat_scores, 10, &highest, &lowest, &average);\r
    printf("Barrackpore CNAT Student Scores:\\n");\r
    printf("Highest: %d, Lowest: %d, Average: %.2f\\n", highest, lowest, average);\r
    \r
    return 0;\r
}`,p=`#include <stdio.h>\r
#include <string.h>\r
\r
// Structure definition\r
typedef struct {\r
    char name[50];\r
    int roll;\r
    float marks;\r
    char grade;\r
} Student;\r
\r
// Passing structure by value (copies entire structure - inefficient for large structs)\r
void printStudentByValue(Student s) {\r
    printf("Student (by value): %s, Roll: %d, Marks: %.2f, Grade: %c\\n", \r
           s.name, s.roll, s.marks, s.grade);\r
}\r
\r
// Passing structure by pointer (efficient - only copies address)\r
void updateStudentGrade(Student *s, char newGrade) {\r
    if (s != NULL) {\r
        s->grade = newGrade;  // Arrow operator for pointer to struct\r
        printf("Updated grade for %s to %c\\n", s->name, newGrade);\r
    }\r
}\r
\r
// Array parameter - automatically decays to pointer\r
void printArray(int arr[], int size) {\r
    printf("Array elements: ");\r
    for(int i = 0; i < size; i++) {\r
        printf("%d ", arr[i]);\r
    }\r
    printf("\\n");\r
    printf("Inside function: sizeof(arr) = %zu (pointer size!)\\n", sizeof(arr));\r
}\r
\r
// Modify array elements using pointer\r
void doubleArrayElements(int *arr, int size) {\r
    for(int i = 0; i < size; i++) {\r
        arr[i] *= 2;  // arr[i] is same as *(arr + i)\r
    }\r
}\r
\r
int main() {\r
    printf("=== Passing Structures and Arrays ===\\n\\n");\r
    \r
    // Structure example\r
    Student sreeparna = {"Sreeparna", 101, 85.5, 'A'};\r
    Student ritaja = {"Ritaja", 102, 78.0, 'B'};\r
    \r
    printStudentByValue(sreeparna);\r
    updateStudentGrade(&ritaja, 'A');\r
    \r
    // Array example\r
    int scores[] = {10, 20, 30, 40, 50};\r
    int size = sizeof(scores) / sizeof(scores[0]);\r
    \r
    printf("\\nOriginal array (in main): ");\r
    for(int i = 0; i < size; i++) printf("%d ", scores[i]);\r
    printf("\\n");\r
    printf("In main: sizeof(scores) = %zu (full array size!)\\n", sizeof(scores));\r
    \r
    printArray(scores, size);\r
    doubleArrayElements(scores, size);\r
    \r
    printf("After doubling: ");\r
    for(int i = 0; i < size; i++) printf("%d ", scores[i]);\r
    printf("\\n");\r
    \r
    return 0;\r
}`,h=`#include <stdio.h>\r
\r
// Read-only parameter - function promises not to modify\r
void printValue(const int *ptr) {\r
    // *ptr = 100;  // ERROR! Can't modify const pointer target\r
    printf("Value: %d\\n", *ptr);\r
    // ptr = NULL;  // OK - pointer itself can change (not const pointer)\r
}\r
\r
// Constant pointer - can't change where it points\r
void modifyValue(int *const ptr, int newValue) {\r
    *ptr = newValue;  // OK - can modify value\r
    // ptr = NULL;    // ERROR! Can't change pointer itself\r
}\r
\r
// Both constant - can't change pointer or value\r
void readOnly(const int *const ptr) {\r
    // *ptr = 100;    // ERROR!\r
    // ptr = NULL;    // ERROR!\r
    printf("Read-only value: %d\\n", *ptr);\r
}\r
\r
// Practical example: Safe string copy with const correctness\r
void safeCopy(char *dest, const char *src, size_t size) {\r
    // dest: can modify (output)\r
    // src: can't modify (input)\r
    if (dest == NULL || src == NULL) return;\r
    \r
    size_t i;\r
    for(i = 0; i < size - 1 && src[i] != '\\0'; i++) {\r
        dest[i] = src[i];\r
    }\r
    dest[i] = '\\0';\r
}\r
\r
int main() {\r
    int var = 42;\r
    int another = 100;\r
    \r
    printf("=== const Pointer Parameters ===\\n\\n");\r
    \r
    // const int* - pointer to constant int\r
    const int *readOnlyPtr = &var;\r
    printValue(readOnlyPtr);\r
    \r
    // int* const - constant pointer\r
    int *const constPtr = &var;\r
    modifyValue(constPtr, 99);\r
    printf("After modifyValue: var = %d\\n", var);\r
    \r
    // Practical string example\r
    char source[] = "Hello from Barrackpore CNAT!";\r
    char destination[50];\r
    \r
    safeCopy(destination, source, 50);\r
    printf("\\nSafe copy result: '%s'\\n", destination);\r
    \r
    printf("\\nBest Practice: Use const for input parameters to show intent!\\n");\r
    \r
    return 0;\r
}`,C=()=>{const[s,n]=o.useState("concept"),i=[{q:"What is the difference between call by value and call by reference in C?",a:"Call by value passes a copy of the variable's value to the function - changes inside the function don't affect the original. Call by reference in C is simulated using pointers - the function receives a pointer (address) to the variable, allowing direct modification of the original data. While C doesn't have true reference parameters like C++, passing pointers achieves the same effect: the function can modify the original variable through dereferencing."},{q:"How do you pass a pointer to a function?",a:"Declare the function parameter with a pointer type: 'void modify(int *ptr)'. Then pass the address of the variable using the address-of operator (&): 'modify(&var)'. Inside the function, use the dereference operator (*) to access and modify the original value. This pattern is fundamental for functions that need to return multiple values or modify large structures without copying."},{q:"Why can't C directly modify variables passed to functions without pointers?",a:"C uses pass-by-value exclusively for function arguments. When you pass a variable, the function receives a copy stored in its local parameter variable. Modifying this copy has no effect on the original in the caller. Pointers work around this by copying the address value, but then using that address to access the original memory location - effectively achieving call-by-reference behavior."},{q:"What are the advantages of passing pointers to functions?",a:"Advantages include: (1) Functions can modify multiple variables (return multiple values), (2) Avoid copying large structures (performance), (3) Enable dynamic memory allocation within functions, (4) Implement data structures like linked lists, (5) Create generic functions using void pointers, (6) Build callback mechanisms with function pointers. These patterns are essential for systems programming."},{q:"How do you swap two variables using pointers?",a:"The classic swap function: 'void swap(int *a, int *b) { int temp = *a; *a = *b; *b = temp; }'. Call with 'swap(&x, &y)'. Without pointers, swap would only swap local copies. This demonstrates why pointers are necessary for modifying caller's variables. The function receives addresses, dereferences them to access original values, and swaps using a temporary variable."},{q:"What is the syntax for passing arrays to functions?",a:"Arrays are automatically passed as pointers: 'void process(int arr[], int size)' is equivalent to 'void process(int *arr, int size)'. The array name decays to a pointer to its first element. Inside the function, array notation or pointer arithmetic can be used. The size must be passed separately because the pointer doesn't carry size information - 'sizeof(arr)' in function gives pointer size, not array size."},{q:"How do you return a pointer from a function?",a:"Return type is pointer: 'int* createArray(int size)'. The function allocates memory (malloc) and returns the pointer. However, NEVER return pointer to local variable - that memory is released when function returns. Return dynamically allocated memory (caller must free), static variables, or passed-in pointers. Document ownership clearly: who is responsible for freeing returned pointer."},{q:"What is a null pointer check and why is it important?",a:"Always check if a pointer parameter is NULL before dereferencing: 'if (ptr == NULL) return;' or 'if (!ptr) return;'. This prevents segmentation faults and crashes. Defensive programming: validate all pointer parameters at function start. Return error codes or handle gracefully. This is especially critical for functions that receive pointers from external callers or after memory allocation."},{q:"How do you pass a structure to a function efficiently?",a:"Pass pointer to structure: 'void processStudent(Student *s)'. This copies only the pointer (8 bytes) instead of the entire structure (potentially hundreds of bytes). Inside, use arrow operator (->) to access members: 's->age = 20;'. For read-only access, use 'const Student *s' to prevent modification while still avoiding copy overhead."},{q:"What's the difference between passing 'int *ptr' and 'int * const ptr'?",a:"'int *ptr' allows modifying both the pointer (what it points to) and the pointed value. 'int * const ptr' makes the pointer constant - it always points to the same address, but the value at that address can be changed. Use 'const int *ptr' to prevent value modification while allowing pointer change. Use 'const int * const ptr' to lock both. This provides fine-grained const-correctness."},{q:"How do you implement a function that modifies multiple values?",a:"Use pointers for each value to modify: 'void getStats(int *sum, int *avg, int *max, int *min, int arr[], int size)'. The function calculates and assigns through pointers. The caller passes addresses: 'getStats(&sum, &avg, &max, &min, data, size)'. This effectively returns multiple values. Document which parameters are inputs vs outputs clearly in comments."},{q:"What happens when you pass NULL to a function expecting a pointer?",a:`The function receives NULL address. If the function dereferences it without checking, segmentation fault occurs. Always validate: 'if (ptr == NULL) { fprintf(stderr, "Error: NULL pointer\\n"); return -1; }'. Use assertions during debugging: 'assert(ptr != NULL);'. Design functions to handle NULL gracefully when possible, or clearly document that NULL is not allowed.`},{q:"How do you pass a pointer to a pointer to a function?",a:"Declare parameter as 'int **ptr'. Pass address of pointer: 'int *p = NULL; modify(&p);'. Inside, allocate memory: '*ptr = malloc(sizeof(int));'. This allows function to modify the original pointer itself (not just what it points to). Essential for allocation functions, linked list head insertion, and any scenario where the pointer variable needs to change in the caller."},{q:"What is the performance impact of passing pointers vs values?",a:"Passing pointers is faster for large data types (structures, arrays) because only address (8 bytes) is copied. For small types (int, char), passing by value may be equally fast or faster due to better cache locality and avoiding indirection. However, if function modifies the value, pointer must be used. Profile when uncertain. Modern compilers optimize small structs, but pointers are predictable."},{q:"How do you create a function that can work with different data types?",a:"Use void pointers: 'void process(void *data, int type)'. Inside, cast to appropriate type based on type parameter: 'if (type == TYPE_INT) { int *ptr = (int*)data; *ptr = 100; }'. This is how generic functions like qsort work. C11's _Generic provides type-generic macros. For type-safe generics, C++ templates are better, but void pointers work for basic C generic programming."}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"text-center mb-12 animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center justify-center px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-semibold mb-4",children:"Topic 3"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-white dark:via-blue-400 dark:to-white bg-clip-text text-transparent mb-4",children:"Passing Pointers to Functions (Call by Reference)"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Mastering pointer parameters to modify variables, return multiple values, and build efficient functions"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-8 animate-[fadeInUp_0.6s_ease-out_0.1s_both]",children:["concept","qa"].map(r=>e.jsx("button",{onClick:()=>n(r),className:l("px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize",s===r?"bg-blue-600 text-white shadow-lg scale-105":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:r==="concept"?"📚 Concept & Examples":"❓ Questions & Answers"},r))}),s==="concept"?e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-2xl",children:"📞"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Call by Value vs Call by Reference"})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["C uses ",e.jsx("span",{className:"font-bold text-blue-600 dark:text-blue-400",children:"pass-by-value"})," exclusively for function arguments. To achieve ",e.jsx("span",{className:"font-bold text-blue-600 dark:text-blue-400",children:"call-by-reference"})," behavior, we pass pointers - addresses of variables - allowing functions to modify the original data."]}),e.jsxs("div",{className:"bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 p-6 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-semibold mb-2",children:"🎯 Key Insight:"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"When Debangshu from Barrackpore CNAT wants to change a variable inside a function, he doesn't pass the variable itself - he passes its address (like giving someone your home address instead of moving your entire house into their office!)"})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-[fadeInUp_0.6s_ease-out_0.1s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-2xl",children:"🔄"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Call by Value vs Call by Reference Visualization"})]}),e.jsx("div",{className:"mb-8 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 1000 450",className:"w-full max-w-5xl mx-auto",style:{maxWidth:"100%",height:"auto"},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"valueGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#EF4444",stopOpacity:.2}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#DC2626",stopOpacity:.3}})]}),e.jsxs("linearGradient",{id:"refGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#10B981",stopOpacity:.2}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#059669",stopOpacity:.3}})]}),e.jsx("marker",{id:"arrowRed",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#EF4444"})}),e.jsx("marker",{id:"arrowGreen",markerWidth:"10",markerHeight:"7",refX:"10",refY:"3.5",orient:"auto",children:e.jsx("polygon",{points:"0 0, 10 3.5, 0 7",fill:"#10B981"})})]}),e.jsxs("g",{transform:"translate(30, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"440",height:"400",rx:"12",fill:"url(#valueGrad)",stroke:"#EF4444",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"30",textAnchor:"middle",fill:"#DC2626",fontWeight:"bold",fontSize:"18",children:"Call by Value"}),e.jsx("rect",{x:"140",y:"60",width:"160",height:"50",rx:"8",fill:"#FEE2E2",stroke:"#EF4444",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"90",textAnchor:"middle",fill:"#991B1B",fontSize:"14",fontWeight:"bold",children:"x = 10 (original)"}),e.jsx("line",{x1:"220",y1:"110",x2:"220",y2:"160",stroke:"#EF4444",strokeWidth:"2",markerEnd:"url(#arrowRed)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"240",y:"140",fill:"#EF4444",fontSize:"11",children:"Copy value"}),e.jsx("rect",{x:"140",y:"170",width:"160",height:"50",rx:"8",fill:"#FECACA",stroke:"#EF4444",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"200",textAnchor:"middle",fill:"#991B1B",fontSize:"14",fontWeight:"bold",children:"a = 10 (copy)"}),e.jsx("rect",{x:"140",y:"250",width:"160",height:"50",rx:"8",fill:"#FCA5A5",stroke:"#EF4444",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"220",y:"280",textAnchor:"middle",fill:"#7F1D1D",fontSize:"14",fontWeight:"bold",children:"a = 20 (changed)"}),e.jsx("rect",{x:"140",y:"330",width:"160",height:"50",rx:"8",fill:"#FEE2E2",stroke:"#EF4444",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("text",{x:"220",y:"360",textAnchor:"middle",fill:"#991B1B",fontSize:"14",fontWeight:"bold",children:"x = 10 (unchanged!)"}),e.jsx("text",{x:"220",y:"395",textAnchor:"middle",fill:"#EF4444",fontSize:"13",fontWeight:"bold",children:"❌ Original NOT modified"})]}),e.jsx("text",{x:"500",y:"200",textAnchor:"middle",fill:"#6B7280",fontSize:"24",fontWeight:"bold",children:"VS"}),e.jsxs("g",{transform:"translate(530, 20)",children:[e.jsx("rect",{x:"0",y:"0",width:"440",height:"400",rx:"12",fill:"url(#refGrad)",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"30",textAnchor:"middle",fill:"#059669",fontWeight:"bold",fontSize:"18",children:"Call by Reference (using pointers)"}),e.jsx("rect",{x:"140",y:"60",width:"160",height:"50",rx:"8",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"90",textAnchor:"middle",fill:"#064E3B",fontSize:"14",fontWeight:"bold",children:"x = 10 (original)"}),e.jsx("line",{x1:"220",y1:"110",x2:"220",y2:"160",stroke:"#10B981",strokeWidth:"2",markerEnd:"url(#arrowGreen)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"240",y:"140",fill:"#10B981",fontSize:"11",children:"Pass address (0x1000)"}),e.jsx("rect",{x:"100",y:"170",width:"240",height:"50",rx:"8",fill:"#A7F3D0",stroke:"#10B981",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"195",textAnchor:"middle",fill:"#064E3B",fontSize:"13",fontWeight:"bold",children:"int *ptr = 0x1000"}),e.jsx("text",{x:"220",y:"212",textAnchor:"middle",fill:"#047857",fontSize:"11",children:"(stores address)"}),e.jsx("rect",{x:"100",y:"250",width:"240",height:"50",rx:"8",fill:"#6EE7B7",stroke:"#10B981",strokeWidth:"2",children:e.jsx("animate",{attributeName:"opacity",values:"0.7;1;0.7",dur:"2s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"220",y:"275",textAnchor:"middle",fill:"#064E3B",fontSize:"13",fontWeight:"bold",children:"*ptr = 20"}),e.jsx("text",{x:"220",y:"292",textAnchor:"middle",fill:"#047857",fontSize:"11",children:"(modifies original!)"}),e.jsx("rect",{x:"140",y:"330",width:"160",height:"50",rx:"8",fill:"#D1FAE5",stroke:"#10B981",strokeWidth:"2",strokeDasharray:"4,4"}),e.jsx("text",{x:"220",y:"360",textAnchor:"middle",fill:"#064E3B",fontSize:"14",fontWeight:"bold",children:"x = 20 (changed!)"}),e.jsx("text",{x:"220",y:"395",textAnchor:"middle",fill:"#10B981",fontSize:"13",fontWeight:"bold",children:"✅ Original modified!"})]})]})}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-red-50 dark:bg-red-950/30 p-5 rounded-xl border border-red-200 dark:border-red-800",children:[e.jsx("h3",{className:"font-bold text-lg text-red-800 dark:text-red-300 mb-3",children:"❌ Call by Value"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Receives copy of value"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Cannot modify original"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Safe but limited"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Copies entire data"]})]})]}),e.jsxs("div",{className:"bg-green-50 dark:bg-green-950/30 p-5 rounded-xl border border-green-200 dark:border-green-800",children:[e.jsx("h3",{className:"font-bold text-lg text-green-800 dark:text-green-300 mb-3",children:"✅ Call by Reference (Pointers)"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"})," Receives address (pointer)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"})," Can modify original data"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"})," Powerful and efficient"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-green-500",children:"•"})," Copies only address (8 bytes)"]})]})]})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-[fadeInUp_0.6s_ease-out_0.2s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-blue-100 dark:bg-blue-900/50 rounded-xl flex items-center justify-center text-2xl",children:"💻"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Code Examples"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: Swap Function - The Classic Pointer Example",initialCode:c}),e.jsx(t,{title:"Example 2: Returning Multiple Values from Function",initialCode:x}),e.jsx(t,{title:"Example 3: Passing Arrays and Structures to Functions",initialCode:p}),e.jsx(t,{title:"Example 4: Pointer Parameters with const Correctness",initialCode:h})]})]})}),e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.3s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center text-2xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Common Pitfalls"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-400 mb-3",children:"🚫 Beginner Mistakes"}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Forgetting & when passing: ",e.jsx("code",{className:"bg-red-100 dark:bg-red-900/50 px-1 rounded",children:"swap(x, y)"})," instead of ",e.jsx("code",{className:"bg-red-100 dark:bg-red-900/50 px-1 rounded",children:"swap(&x, &y)"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Forgetting * inside function: ",e.jsx("code",{className:"bg-red-100 dark:bg-red-900/50 px-1 rounded",children:"ptr = 20"})," instead of ",e.jsx("code",{className:"bg-red-100 dark:bg-red-900/50 px-1 rounded",children:"*ptr = 20"})]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Passing pointer to local variable from function (dangling pointer)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Not checking for NULL before dereferencing"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-400 mb-3",children:"💭 Conceptual Misunderstandings"}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),' "C has call by reference" - No, it simulates it with pointers']}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),' "Arrays are passed by value" - They decay to pointers']}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),' "Passing pointer is always faster" - For small types, maybe not']}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),' "const pointer means data constant" - Depends on const placement!']})]})]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.4s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-2xl",children:"✅"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Best Practices"})]}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"1."})," Always check pointer parameters for NULL before dereferencing"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"2."})," Use ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"const"})," for read-only pointer parameters: ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"void print(const int *ptr)"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"3."})," Document which parameters are inputs, outputs, or both"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"4."})," Use meaningful parameter names: ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"out_result"})," for output pointers"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"5."})," Prefer passing large structures by pointer (efficiency)"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"6."})," Return error codes instead of using pointers for error reporting"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"7."})," Never return pointer to local variable - use static or dynamic allocation"]})]})]})}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.5s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl flex items-center justify-center text-2xl",children:"💡"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Professional Tips & Tricks"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Multiple Returns Pattern:"}),` Use pointers for "out parameters" - list them first or last in parameter list for clarity, and prefix with 'out_'`]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 In-Out Parameters:"})," For parameters that are both input and output, use pointer and document clearly: ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"void update(int *inout_value)"})]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Error Handling:"})," Return error codes (0 for success, non-zero for error) and use pointers for actual results"]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Debugging Helper:"})," Create print functions that take pointers to avoid copying large data"]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Performance Tip:"})," For small types (int, char), passing by value may be faster due to better cache behavior - profile if unsure"]})})]})]})}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.6s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-2xl",children:"✓"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand call by value vs call by reference"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can write a swap function using pointers"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I know how to return multiple values from a function"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can pass arrays and structures efficiently"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I always check pointers for NULL before dereferencing"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can use const correctly with pointer parameters"})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.7s_both]",children:e.jsx(d,{note:"The swap function is the 'Hello World' of pointer functions. When Abhronila first saw it, she was confused why temp = *a; *a = *b; *b = temp; works. Draw the boxes! Draw the addresses! The secret is understanding that *a means 'go to the address stored in a'. Once students internalize this, function pointers become natural. Remember: Every semester, a student asks 'Why can't I just write swap(x, y)?' - that's your cue to review call by value vs reference!"})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-300 dark:border-gray-700 animate-[fadeInUp_0.6s_ease-out_0.8s_both]",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"🤔"}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:"Think About This..."})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 italic",children:['"Why does ',e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:`void increment(int a) { a++; }</code> not change the original, but 
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">void increment(int *a) { (*a)++; }`}),' does? Try changing the function call and observe what happens to memory addresses..."']})]})]}):e.jsx("div",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out]",children:i.map((r,a)=>e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",children:e.jsxs("details",{className:"group",children:[e.jsxs("summary",{className:"cursor-pointer p-6 font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsxs("span",{className:"text-blue-600 dark:text-blue-400 mr-3",children:["Q",a+1,":"]}),r.q]}),e.jsx("div",{className:"p-6 pt-0 border-t border-gray-200 dark:border-gray-700 mt-4",children:e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:[e.jsx("span",{className:"font-bold text-green-600 dark:text-green-400",children:"Answer:"})," ",r.a]})})]})},a))})]}),e.jsx("style",{children:`
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
      `})]})};export{C as default};
