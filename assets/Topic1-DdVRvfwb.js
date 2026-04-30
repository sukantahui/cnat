import{r as o,j as e}from"./index-M13epWmp.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as d}from"./TeacherSukantaHui-D1l_wi-n.js";import{E as t}from"./EditableCCodeBlock-FwuC4IUM.js";import"./git-branch-D8pg7UcO.js";import"./index-DdgD7PSF.js";import"./file-code-Bw6m9YlE.js";import"./type-BwHCoGTt.js";import"./refresh-cw-u01UVf16.js";import"./copy-CUtW4Wcz.js";import"./download-BiWR4r0s.js";const c=`#include <stdio.h>\r
\r
int main() {\r
    int var = 42;           // Regular integer\r
    int *ptr = &var;        // Single pointer - stores address of var\r
    int **dptr = &ptr;      // Double pointer - stores address of ptr\r
    \r
    printf("=== Double Pointer Demonstration ===\\n\\n");\r
    \r
    printf("Value of var: %d\\n", var);\r
    printf("Address of var: %p\\n\\n", &var);\r
    \r
    printf("Value of ptr (address stored): %p\\n", ptr);\r
    printf("Address of ptr: %p\\n", &ptr);\r
    printf("Value pointed by ptr (*ptr): %d\\n\\n", *ptr);\r
    \r
    printf("Value of dptr (address stored): %p\\n", dptr);\r
    printf("Address of dptr: %p\\n", &dptr);\r
    printf("Value pointed by dptr (*dptr): %p\\n", *dptr);\r
    printf("Value pointed by *dptr (**dptr): %d\\n\\n", **dptr);\r
    \r
    // Modifying value through double pointer\r
    **dptr = 100;\r
    printf("After **dptr = 100:\\n");\r
    printf("var = %d\\n", var);\r
    \r
    // Modifying pointer through double pointer\r
    int newVar = 999;\r
    *dptr = &newVar;\r
    printf("\\nAfter *dptr = &newVar:\\n");\r
    printf("ptr now points to: %d\\n", *ptr);\r
    printf("**dptr = %d\\n", **dptr);\r
    \r
    return 0;\r
}`,p=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
// This WON'T work - passes pointer by value\r
void badAllocate(int *ptr) {\r
    ptr = (int*)malloc(sizeof(int));\r
    if (ptr != NULL) {\r
        *ptr = 100;\r
    }\r
}\r
\r
// This works - passes pointer to pointer\r
void goodAllocate(int **ptr) {\r
    *ptr = (int*)malloc(sizeof(int));\r
    if (*ptr != NULL) {\r
        **ptr = 100;\r
    }\r
}\r
\r
// Function to modify pointer value\r
void modifyPointer(int **ptr, int newValue) {\r
    if (*ptr != NULL) {\r
        **ptr = newValue;\r
    }\r
}\r
\r
// Function to set pointer to NULL after freeing\r
void safeFree(int **ptr) {\r
    if (ptr != NULL && *ptr != NULL) {\r
        free(*ptr);\r
        *ptr = NULL;  // Important! Prevents dangling pointer\r
    }\r
}\r
\r
int main() {\r
    int *ptr = NULL;\r
    \r
    printf("=== Modifying Pointers in Functions ===\\n\\n");\r
    \r
    // This fails - ptr remains NULL\r
    badAllocate(ptr);\r
    if (ptr == NULL) {\r
        printf("badAllocate failed! ptr is still NULL\\n");\r
    }\r
    \r
    // This works - ptr gets allocated memory\r
    goodAllocate(&ptr);\r
    if (ptr != NULL) {\r
        printf("goodAllocate succeeded! *ptr = %d\\n", *ptr);\r
    }\r
    \r
    // Modify the value\r
    modifyPointer(&ptr, 250);\r
    printf("After modifyPointer: *ptr = %d\\n", *ptr);\r
    \r
    // Safe free sets pointer to NULL\r
    safeFree(&ptr);\r
    if (ptr == NULL) {\r
        printf("After safeFree: ptr is NULL (safe!)\\n");\r
    }\r
    \r
    return 0;\r
}`,x=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
int** create2DArray(int rows, int cols) {\r
    // Allocate array of row pointers\r
    int **array = (int**)malloc(rows * sizeof(int*));\r
    if (array == NULL) {\r
        printf("Memory allocation failed for rows!\\n");\r
        return NULL;\r
    }\r
    \r
    // Allocate each row\r
    for (int i = 0; i < rows; i++) {\r
        array[i] = (int*)malloc(cols * sizeof(int));\r
        if (array[i] == NULL) {\r
            printf("Memory allocation failed for row %d!\\n", i);\r
            // Free previously allocated rows\r
            for (int j = 0; j < i; j++) {\r
                free(array[j]);\r
            }\r
            free(array);\r
            return NULL;\r
        }\r
        \r
        // Initialize row with values\r
        for (int j = 0; j < cols; j++) {\r
            array[i][j] = (i + 1) * (j + 1);  // Multiplication table\r
        }\r
    }\r
    \r
    return array;\r
}\r
\r
void print2DArray(int **array, int rows, int cols) {\r
    printf("\\n2D Array Contents:\\n");\r
    for (int i = 0; i < rows; i++) {\r
        for (int j = 0; j < cols; j++) {\r
            printf("%4d ", array[i][j]);\r
        }\r
        printf("\\n");\r
    }\r
}\r
\r
void free2DArray(int **array, int rows) {\r
    if (array == NULL) return;\r
    \r
    // Free each row first\r
    for (int i = 0; i < rows; i++) {\r
        free(array[i]);\r
    }\r
    // Free the array of row pointers\r
    free(array);\r
}\r
\r
int main() {\r
    int rows = 4, cols = 5;\r
    \r
    printf("=== Dynamic 2D Array with Double Pointers ===\\n");\r
    printf("Creating %d x %d array...\\n", rows, cols);\r
    \r
    int **matrix = create2DArray(rows, cols);\r
    if (matrix == NULL) {\r
        return 1;\r
    }\r
    \r
    print2DArray(matrix, rows, cols);\r
    \r
    // Access using double pointer notation\r
    printf("\\nAccessing element [2][3]: %d\\n", matrix[2][3]);\r
    printf("Accessing using pointer arithmetic: %d\\n", *(*(matrix + 2) + 3));\r
    \r
    free2DArray(matrix, rows);\r
    printf("\\nMemory freed successfully!\\n");\r
    \r
    return 0;\r
}`,h=`#include <stdio.h>\r
#include <string.h>\r
\r
// Function to demonstrate double pointer with strings\r
void printAllArguments(int argc, char **argv) {\r
    printf("\\n=== Command Line Arguments ===\\n");\r
    printf("Number of arguments: %d\\n\\n", argc);\r
    \r
    for (int i = 0; i < argc; i++) {\r
        printf("argv[%d] = %s (address: %p)\\n", i, argv[i], argv[i]);\r
    }\r
}\r
\r
// Function to find a specific argument\r
int findArgument(int argc, char **argv, const char *target) {\r
    for (int i = 0; i < argc; i++) {\r
        if (strcmp(argv[i], target) == 0) {\r
            return i;\r
        }\r
    }\r
    return -1;\r
}\r
\r
// Simulate command line arguments for demonstration\r
int main() {\r
    // Simulate command line arguments\r
    char *simulated_argv[] = {\r
        "./program",\r
        "-v",\r
        "--verbose",\r
        "filename.txt",\r
        "100"\r
    };\r
    int simulated_argc = 5;\r
    \r
    printf("=== Double Pointers as argv ===\\n");\r
    printf("argv is a double pointer (char**)\\n");\r
    printf("Each argv[i] is a pointer to a string\\n\\n");\r
    \r
    // Pass double pointer to function\r
    printAllArguments(simulated_argc, simulated_argv);\r
    \r
    // Find specific argument\r
    int pos = findArgument(simulated_argc, simulated_argv, "--verbose");\r
    if (pos != -1) {\r
        printf("\\nFound '--verbose' at position %d\\n", pos);\r
    }\r
    \r
    // Demonstrate pointer arithmetic with argv\r
    printf("\\n=== Pointer Arithmetic with argv ===\\n");\r
    char **ptr = simulated_argv;\r
    printf("ptr points to: %s\\n", *ptr);\r
    ptr++;  // Move to next argument\r
    printf("After ptr++: %s\\n", *ptr);\r
    ptr++;\r
    printf("After ptr++: %s\\n", *ptr);\r
    \r
    return 0;\r
}`,A=()=>{const[n,i]=o.useState("concept"),s=[{q:"What is a pointer to pointer (double pointer) in C?",a:"A pointer to pointer, also known as a double pointer, is a pointer that stores the address of another pointer variable. It is declared using two asterisks (**). For example, 'int **ptr;' declares a double pointer that can point to an integer pointer. Double pointers are essential for modifying pointer arguments in functions, creating dynamic 2D arrays, and building complex data structures like linked lists where the head pointer needs to be modified."},{q:"How do you declare and initialize a double pointer?",a:"Double pointers are declared with two asterisks: 'int **double_ptr;'. Initialization can be done in steps: first declare a regular pointer 'int *ptr = &var;', then point the double pointer to it: 'int **double_ptr = &ptr;'. You can also allocate memory directly: 'int **double_ptr = malloc(sizeof(int*));' which allocates space for a pointer, then '*double_ptr = malloc(sizeof(int));' to allocate space for the actual integer."},{q:"What is the syntax for accessing values through a double pointer?",a:"To access the original value through a double pointer, you need to dereference twice: '**double_ptr'. The first dereference (*double_ptr) gives you the single pointer (address), and the second dereference (**double_ptr) gives you the actual value. For example, if 'int var = 42; int *ptr = &var; int **dptr = &ptr;', then '**dptr' equals 42."},{q:"Why are double pointers needed when modifying a pointer in a function?",a:"In C, function parameters are passed by value. When you pass a pointer to a function, the function receives a copy of the pointer. If you want to modify the original pointer itself (not just the data it points to), you need to pass a pointer to that pointer (double pointer). This allows the function to change where the original pointer points, such as allocating new memory or setting it to NULL."},{q:"How are double pointers used in dynamic 2D array allocation?",a:"Double pointers are commonly used to create dynamic 2D arrays: 'int **matrix = (int**)malloc(rows * sizeof(int*));' allocates an array of row pointers. Then for each row, you allocate columns: 'for(int i = 0; i < rows; i++) matrix[i] = (int*)malloc(cols * sizeof(int));'. This creates a jagged array where each row can have different column sizes, and memory is contiguous per row but not necessarily between rows."},{q:"What is the difference between 'int *ptr[5]' and 'int **ptr'?",a:"'int *ptr[5]' is an array of 5 integer pointers - it allocates space for 5 pointers on the stack (if local) or in static memory. 'int **ptr' is a pointer to a pointer - it's a single variable that can point to a pointer. While 'int **ptr' can be used to point to the first element of 'int *ptr[5]' (array decays to pointer), they are not the same. The array has fixed size, while the double pointer can point to dynamically allocated memory."},{q:"How do you properly free memory allocated with double pointers for 2D arrays?",a:"Freeing a dynamic 2D array requires freeing in reverse order of allocation. First free each row: 'for(int i = 0; i < rows; i++) free(matrix[i]);' then free the array of row pointers: 'free(matrix);'. Always set the double pointer to NULL after freeing to prevent dangling pointers. Forgetting to free individual rows before freeing the main pointer causes memory leaks."},{q:"Can you have triple pointers or higher levels of indirection?",a:"Yes, C supports multiple levels of indirection: triple pointers (***), quadruple pointers (****), and beyond. Each asterisk adds another level of indirection. For example, 'int ***triple;' points to a pointer that points to a pointer that points to an integer. While technically possible, more than double pointers are rarely needed and make code harder to understand. Triple pointers might appear in 3D dynamic arrays or specific data structures."},{q:"What happens in memory when you have a double pointer?",a:"In memory, a double pointer occupies the same size as any other pointer (8 bytes on 64-bit systems). It stores the address of another pointer variable. For example, if 'int var = 42' at address 0x1000, 'int *ptr = &var' at address 0x2000 storing 0x1000, then 'int **dptr = &ptr' at address 0x3000 storing 0x2000. Dereferencing dptr gives 0x2000 (address of ptr), double dereferencing gives 0x1000 (address of var), triple dereferencing would give 42."},{q:"How do you pass a double pointer to a function to modify the original pointer?",a:"To modify a pointer in a function, you pass a double pointer: 'void modifyPointer(int **ptr) { *ptr = malloc(sizeof(int)); **ptr = 100; }'. In main: 'int *ptr = NULL; modifyPointer(&ptr);' Now ptr points to allocated memory containing 100. This pattern is common in functions that need to allocate memory and return it through parameters, or functions that need to set a pointer to NULL after freeing."},{q:"What is a common use case for double pointers with command line arguments?",a:"The main function's second parameter 'char *argv[]' or 'char **argv' is a double pointer. It represents an array of strings (command line arguments). 'argc' tells how many arguments, and 'argv[0]' is the program name, 'argv[1]' is the first argument, etc. Each 'argv[i]' is a pointer to a character string. This allows processing variable numbers of command line arguments efficiently."},{q:"How do double pointers help with creating linked list insert functions?",a:"In linked lists, when inserting at the beginning, you need to modify the head pointer. Using a double pointer allows the insert function to update the head: 'void insertAtHead(Node **head, int data) { Node *newNode = malloc(sizeof(Node)); newNode->data = data; newNode->next = *head; *head = newNode; }'. This modifies the original head pointer in main. Without double pointers, you'd need to return the new head or use a global variable."},{q:"What is pointer arithmetic with double pointers?",a:"Pointer arithmetic with double pointers works similarly to single pointers but with step size of pointer size (8 bytes on 64-bit). If 'int **dptr' points to an array of integer pointers, 'dptr + 1' moves to the next pointer in the array (advances by sizeof(int*) bytes). '*(dptr + 1)' gives the pointer at that position, and '**(dptr + 1)' gives the integer value pointed to by that pointer."},{q:"How do you create a function that returns a double pointer?",a:"A function returning a double pointer is declared with the return type having two asterisks: 'int** createMatrix(int rows, int cols)'. Inside, you allocate memory and return the double pointer. Remember that returning a pointer to local variable is dangerous, but returning dynamically allocated memory is fine. The caller becomes responsible for freeing the memory: 'int **matrix = createMatrix(3, 4);' then later 'freeMatrix(matrix, 3);'."},{q:"What are the common pitfalls when working with double pointers?",a:"Common pitfalls include: forgetting to allocate memory for the row pointers before allocating columns; improper freeing (freeing only the main pointer causes memory leaks); incorrect dereferencing levels; passing a single pointer when a double pointer is expected; assuming 'sizeof(**ptr)' works when 'ptr' is NULL; and confusing 'int* ptr' with 'int** ptr' in function parameters. Always draw memory diagrams and use tools like Valgrind."}];return e.jsxs("div",{className:"min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900",children:[e.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[e.jsxs("div",{className:"text-center mb-12 animate-[fadeInUp_0.6s_ease-out]",children:[e.jsx("div",{className:"inline-flex items-center justify-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-sm font-semibold mb-4",children:"Topic 1"}),e.jsx("h1",{className:"text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-gray-900 dark:from-white dark:via-purple-400 dark:to-white bg-clip-text text-transparent mb-4",children:"Pointers to Pointers (Double Pointers)"}),e.jsx("p",{className:"text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed",children:"Understanding indirection: how to point to pointers, modify pointer arguments, and build dynamic 2D structures"})]}),e.jsx("div",{className:"flex flex-wrap justify-center gap-2 mb-8 animate-[fadeInUp_0.6s_ease-out_0.1s_both]",children:["concept","qa"].map(r=>e.jsx("button",{onClick:()=>i(r),className:l("px-6 py-2 rounded-full font-semibold transition-all duration-300 capitalize",n===r?"bg-purple-600 text-white shadow-lg scale-105":"bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600"),children:r==="concept"?"📚 Concept & Examples":"❓ Questions & Answers"},r))}),n==="concept"?e.jsxs("div",{className:"space-y-8",children:[e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-2xl",children:"🎯"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"What Are Double Pointers?"})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed mb-4",children:["A ",e.jsx("span",{className:"font-mono font-bold text-purple-600 dark:text-purple-400",children:"pointer to pointer"})," or",e.jsx("span",{className:"font-mono font-bold text-purple-600 dark:text-purple-400",children:" double pointer"})," is a variable that stores the memory address of another pointer variable. Declared with two asterisks (",e.jsx("span",{className:"font-mono font-bold",children:"**"}),"), it adds another level of indirection to your programs."]}),e.jsxs("div",{className:"bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 p-6 rounded-xl border border-purple-200 dark:border-purple-800",children:[e.jsx("p",{className:"text-gray-800 dark:text-gray-200 font-semibold mb-2",children:"💡 Real-World Analogy:"}),e.jsx("p",{className:"text-gray-600 dark:text-gray-300",children:"Imagine a library. A book has a shelf number (address). A catalog card points to that shelf number (single pointer). Now, a master catalog index points to where the catalog cards are stored (double pointer!). When Debolina from Naihati CNAT wants to find a book, she follows the master index → finds the catalog card → finds the shelf → gets the book!"})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-[fadeInUp_0.6s_ease-out_0.1s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-2xl",children:"🗺️"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Memory Representation"})]}),e.jsx("div",{className:"mb-8 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 400",className:"w-full max-w-5xl mx-auto",style:{maxWidth:"100%",height:"auto"},children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"varGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#EF4444",stopOpacity:.8}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#DC2626",stopOpacity:.9}})]}),e.jsxs("linearGradient",{id:"ptrGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#3B82F6",stopOpacity:.8}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#2563EB",stopOpacity:.9}})]}),e.jsxs("linearGradient",{id:"dptrGrad",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",style:{stopColor:"#8B5CF6",stopOpacity:.8}}),e.jsx("stop",{offset:"100%",style:{stopColor:"#7C3AED",stopOpacity:.9}})]}),e.jsx("filter",{id:"shadow",x:"-5%",y:"-5%",width:"110%",height:"110%",children:e.jsx("feDropShadow",{dx:"2",dy:"2",stdDeviation:"3",floodOpacity:"0.2"})})]}),e.jsxs("g",{transform:"translate(50, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"70",rx:"8",fill:"url(#varGrad)",filter:"url(#shadow)",children:e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",repeatCount:"indefinite"})}),e.jsx("text",{x:"100",y:"30",textAnchor:"middle",fill:"white",fontWeight:"bold",fontSize:"14",children:"var (int)"}),e.jsx("text",{x:"100",y:"55",textAnchor:"middle",fill:"#FEE2E2",fontSize:"16",fontWeight:"bold",children:"Value: 42"}),e.jsx("text",{x:"220",y:"35",fill:"#6B7280",fontSize:"12",children:"Address: 0x1000"}),e.jsx("line",{x1:"200",y1:"35",x2:"280",y2:"35",stroke:"#6B7280",strokeWidth:"2",markerEnd:"url(#arrowBlue)",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"1s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"290",y:"0",width:"200",height:"70",rx:"8",fill:"url(#ptrGrad)",filter:"url(#shadow)",children:e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("text",{x:"390",y:"30",textAnchor:"middle",fill:"white",fontWeight:"bold",fontSize:"14",children:"ptr (int*)"}),e.jsx("text",{x:"390",y:"55",textAnchor:"middle",fill:"#DBEAFE",fontSize:"14",fontWeight:"bold",children:"Value: 0x1000"}),e.jsx("text",{x:"510",y:"35",fill:"#6B7280",fontSize:"12",children:"Address: 0x2000"}),e.jsx("line",{x1:"490",y1:"35",x2:"570",y2:"35",stroke:"#6B7280",strokeWidth:"2",strokeDasharray:"5,5",children:e.jsx("animate",{attributeName:"stroke-dashoffset",values:"0;10",dur:"1s",begin:"0.5s",repeatCount:"indefinite"})}),e.jsx("rect",{x:"580",y:"0",width:"220",height:"70",rx:"8",fill:"url(#dptrGrad)",filter:"url(#shadow)",children:e.jsx("animate",{attributeName:"opacity",values:"0.9;1;0.9",dur:"2s",begin:"1s",repeatCount:"indefinite"})}),e.jsx("text",{x:"690",y:"30",textAnchor:"middle",fill:"white",fontWeight:"bold",fontSize:"14",children:"dptr (int**)"}),e.jsx("text",{x:"690",y:"55",textAnchor:"middle",fill:"#E9D5FF",fontSize:"14",fontWeight:"bold",children:"Value: 0x2000"}),e.jsx("text",{x:"815",y:"35",fill:"#6B7280",fontSize:"12",children:"Address: 0x3000"})]}),e.jsxs("g",{transform:"translate(50, 200)",children:[e.jsx("text",{x:"100",y:"20",textAnchor:"middle",fill:"#6B7280",fontSize:"14",fontWeight:"bold",children:"Indirection Chain:"}),e.jsx("rect",{x:"20",y:"40",width:"120",height:"50",rx:"6",fill:"#FEE2E2",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"80",y:"70",textAnchor:"middle",fill:"#991B1B",fontSize:"13",fontWeight:"bold",children:"dptr"}),e.jsx("text",{x:"160",y:"70",textAnchor:"middle",fill:"#6B7280",fontSize:"20",children:"→"}),e.jsx("rect",{x:"190",y:"40",width:"120",height:"50",rx:"6",fill:"#DBEAFE",stroke:"#3B82F6",strokeWidth:"1.5"}),e.jsx("text",{x:"250",y:"70",textAnchor:"middle",fill:"#1E3A8A",fontSize:"13",fontWeight:"bold",children:"ptr"}),e.jsx("text",{x:"330",y:"70",textAnchor:"middle",fill:"#6B7280",fontSize:"20",children:"→"}),e.jsx("rect",{x:"360",y:"40",width:"120",height:"50",rx:"6",fill:"#FEE2E2",stroke:"#EF4444",strokeWidth:"1.5"}),e.jsx("text",{x:"420",y:"70",textAnchor:"middle",fill:"#991B1B",fontSize:"13",fontWeight:"bold",children:"var"}),e.jsx("text",{x:"520",y:"70",textAnchor:"middle",fill:"#6B7280",fontSize:"14",fontWeight:"bold",children:"= 42"})]}),e.jsxs("g",{transform:"translate(50, 300)",children:[e.jsx("rect",{x:"0",y:"0",width:"12",height:"12",rx:"2",fill:"#EF4444"}),e.jsx("text",{x:"20",y:"11",fill:"#6B7280",fontSize:"12",children:"Variable (int)"}),e.jsx("rect",{x:"150",y:"0",width:"12",height:"12",rx:"2",fill:"#3B82F6"}),e.jsx("text",{x:"170",y:"11",fill:"#6B7280",fontSize:"12",children:"Single Pointer (int*)"}),e.jsx("rect",{x:"340",y:"0",width:"12",height:"12",rx:"2",fill:"#8B5CF6"}),e.jsx("text",{x:"360",y:"11",fill:"#6B7280",fontSize:"12",children:"Double Pointer (int**)"})]})]})}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-950/30 p-5 rounded-xl border border-blue-200 dark:border-blue-800",children:[e.jsx("h3",{className:"font-bold text-lg text-blue-800 dark:text-blue-300 mb-3",children:"📝 Declaration & Dereferencing"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300 font-mono text-sm",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"})," int var = 42;"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"})," int *ptr = &var;"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"})," int **dptr = &ptr;"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500 mt-2",children:"•"})," *ptr = 42 (access value)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"})," *dptr → ptr's address"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-blue-500",children:"•"})," **dptr → var's value (42)"]})]})]}),e.jsxs("div",{className:"bg-purple-50 dark:bg-purple-950/30 p-5 rounded-xl border border-purple-200 dark:border-purple-800",children:[e.jsx("h3",{className:"font-bold text-lg text-purple-800 dark:text-purple-300 mb-3",children:"🔧 Common Use Cases"}),e.jsxs("ul",{className:"space-y-2 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"})," Modifying pointer in functions"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"})," Dynamic 2D arrays"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"})," Linked list head modification"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"})," Command-line arguments (argv)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-purple-500",children:"•"})," Array of strings"]})]})]})]})]})}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.01] animate-[fadeInUp_0.6s_ease-out_0.2s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-purple-100 dark:bg-purple-900/50 rounded-xl flex items-center justify-center text-2xl",children:"💻"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Code Examples"})]}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: Basic Double Pointer Declaration and Usage",initialCode:c}),e.jsx(t,{title:"Example 2: Modifying Pointer in Function Using Double Pointer",initialCode:p}),e.jsx(t,{title:"Example 3: Dynamic 2D Array with Double Pointers",initialCode:x}),e.jsx(t,{title:"Example 4: Double Pointers with Command Line Arguments",initialCode:h})]})]})}),e.jsx("div",{className:"bg-red-50 dark:bg-red-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.3s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-red-100 dark:bg-red-900/50 rounded-xl flex items-center justify-center text-2xl",children:"⚠️"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Common Pitfalls"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-6",children:[e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-400 mb-3",children:"🚫 Beginner Mistakes"}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Incorrect dereferencing levels (* vs **)"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Forgetting to allocate row pointers before columns"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Memory leak from improper freeing order"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Passing single pointer when double pointer expected"]}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"})," Assuming sizeof(**ptr) works when ptr is NULL"]})]})]}),e.jsxs("div",{children:[e.jsx("h3",{className:"font-bold text-red-700 dark:text-red-400 mb-3",children:"💭 Misconceptions"}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),' "Double pointers are always 2D arrays" - Not true!']}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),' "**ptr is same as *ptr[0]" - Different semantics']}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),' "Double pointers are slower" - Negligible difference']}),e.jsxs("li",{className:"flex items-start gap-2",children:[e.jsx("span",{className:"text-red-500",children:"•"}),` "Can't have triple pointers" - Yes, you can!`]})]})]})]})]})}),e.jsx("div",{className:"bg-green-50 dark:bg-green-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.4s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-green-100 dark:bg-green-900/50 rounded-xl flex items-center justify-center text-2xl",children:"✅"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Best Practices"})]}),e.jsxs("ul",{className:"space-y-3 text-gray-700 dark:text-gray-300",children:[e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"1."})," Always initialize double pointers to ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"NULL"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"2."})," Check return value of malloc/calloc before using double pointer"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"3."})," Free in reverse order of allocation (rows first, then main pointer)"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"4."})," Use meaningful names: ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"matrix"}),", ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"headPtr"}),", ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"argv"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"5."})," Document pointer ownership and responsibility for freeing"]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"6."})," Use ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"const"})," when appropriate: ",e.jsx("code",{className:"bg-green-100 dark:bg-green-900/50 px-2 py-0.5 rounded",children:"const int **ptr"})]}),e.jsxs("li",{className:"flex items-start gap-3",children:[e.jsx("span",{className:"text-green-600 font-bold text-lg",children:"7."})," Draw memory diagrams for complex double pointer usage"]})]})]})}),e.jsx("div",{className:"bg-yellow-50 dark:bg-yellow-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.5s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-yellow-100 dark:bg-yellow-900/50 rounded-xl flex items-center justify-center text-2xl",children:"💡"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Professional Tips & Tricks"})]}),e.jsxs("div",{className:"space-y-4",children:[e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Debugging:"})," Print addresses at each level: ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:'printf("var: %p, ptr: %p, dptr: %p\\n", &var, ptr, dptr)'})]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Performance:"})," For large 2D arrays, consider single allocation with ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"int *data = malloc(rows * cols * sizeof(int))"})," plus index calculation for better cache locality"]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Memory Layout:"})," Use ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"sizeof(int*)"})," to understand pointer size on your system"]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Safe Coding:"})," Create wrapper functions: ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"int** allocate2D(int rows, int cols)"})," and ",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"void free2D(int** matrix, int rows)"})]})}),e.jsx("div",{className:"border-l-4 border-yellow-500 pl-4",children:e.jsxs("p",{className:"text-gray-700 dark:text-gray-300",children:[e.jsx("span",{className:"font-bold",children:"💎 Advanced:"})," Triple pointers (",e.jsx("code",{className:"bg-yellow-100 dark:bg-yellow-900/50 px-1 rounded",children:"int***"}),") for 3D arrays or modifying double pointers in functions"]})})]})]})}),e.jsx("div",{className:"bg-indigo-50 dark:bg-indigo-950/20 rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl animate-[fadeInUp_0.6s_ease-out_0.6s_both]",children:e.jsxs("div",{className:"p-8",children:[e.jsxs("div",{className:"flex items-center gap-3 mb-6",children:[e.jsx("div",{className:"w-12 h-12 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl flex items-center justify-center text-2xl",children:"✓"}),e.jsx("h2",{className:"text-2xl font-bold text-gray-800 dark:text-white",children:"Mini Checklist"})]}),e.jsxs("div",{className:"grid md:grid-cols-2 gap-4",children:[e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand what a double pointer is and when to use it"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can declare, initialize, and dereference double pointers correctly"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I know how to modify a pointer in a function using double pointers"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can allocate and free dynamic 2D arrays using double pointers"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I understand the memory layout of double pointers"})]}),e.jsxs("label",{className:"flex items-center gap-3 p-3 bg-white dark:bg-gray-800 rounded-lg",children:[e.jsx("input",{type:"checkbox",className:"w-5 h-5 text-indigo-600 rounded"}),e.jsx("span",{className:"text-gray-700 dark:text-gray-300",children:"I can avoid common pitfalls like memory leaks and improper dereferencing"})]})]})]})}),e.jsx("div",{className:"animate-[fadeInUp_0.6s_ease-out_0.7s_both]",children:e.jsx(d,{note:"Double pointers are like Russian nesting dolls for memory addresses! Remember: each star (*) is a level of indirection. When Abhronila asks 'Why can't I modify the head pointer in my linked list?', the answer is always double pointers! Practice drawing the memory diagram I showed you - it's the key to understanding. Start with 2D arrays - it's the most common real-world use case. And always, always free in reverse order of allocation. Trust me, Ritaja from Barrackpore CNAT learned this the hard way with a memory leak that took 3 days to find!"})}),e.jsxs("div",{className:"bg-gray-100 dark:bg-gray-800/50 rounded-2xl p-6 border border-gray-300 dark:border-gray-700 animate-[fadeInUp_0.6s_ease-out_0.8s_both]",children:[e.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[e.jsx("span",{className:"text-2xl",children:"🤔"}),e.jsx("h3",{className:"font-bold text-gray-800 dark:text-white",children:"Think About This..."})]}),e.jsxs("p",{className:"text-gray-600 dark:text-gray-400 italic",children:['"Why does ',e.jsx("code",{className:"bg-gray-200 dark:bg-gray-700 px-1 rounded",children:`void modify(int *ptr) { ptr = malloc(sizeof(int)); }</code> not work in main, but 
                <code className="bg-gray-200 dark:bg-gray-700 px-1 rounded">void modify(int **ptr) { *ptr = malloc(sizeof(int)); }`}),' does? Try tracing the memory addresses..."']})]})]}):e.jsx("div",{className:"space-y-4 animate-[fadeInUp_0.6s_ease-out]",children:s.map((r,a)=>e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl",children:e.jsxs("details",{className:"group",children:[e.jsxs("summary",{className:"cursor-pointer p-6 font-semibold text-gray-800 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors duration-300",children:[e.jsxs("span",{className:"text-purple-600 dark:text-purple-400 mr-3",children:["Q",a+1,":"]}),r.q]}),e.jsx("div",{className:"p-6 pt-0 border-t border-gray-200 dark:border-gray-700 mt-4",children:e.jsxs("p",{className:"text-gray-600 dark:text-gray-300 leading-relaxed",children:[e.jsx("span",{className:"font-bold text-green-600 dark:text-green-400",children:"Answer:"})," ",r.a]})})]})},a))})]}),e.jsx("style",{children:`
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
