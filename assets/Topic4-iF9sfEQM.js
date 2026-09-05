import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-sVKljqCv.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";import"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * DoublePointersDemo.c\r
 * Demonstrates pointers to pointers (double pointers **),\r
 * modifying caller pointer addresses inside functions (e.g. dynamic buffer allocation),\r
 * and creating dynamic 2D jagged matrices on the heap.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
// 1. Modifying a caller's pointer address requires a double pointer!\r
void allocateBuffer(int **pBuffer, int size) {\r
    *pBuffer = (int*)malloc(size * sizeof(int));\r
    if (*pBuffer != NULL) {\r
        for (int i = 0; i < size; i++) {\r
            (*pBuffer)[i] = (i + 1) * 10;\r
        }\r
    }\r
}\r
\r
int main(void) {\r
    int val = 42;\r
    int *pVal = &val;       // Single pointer: stores address of val\r
    int **ppVal = &pVal;    // Double pointer: stores address of pVal\r
\r
    printf("====================================================\\n");\r
    printf(" Double Pointers (Pointers to Pointers: **ptr)\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    printf("1. Two-Level Indirection Chain:\\n");\r
    printf("   • val   = %d | Address (&val)   = %p\\n", val, (void*)&val);\r
    printf("   • pVal  = %p | Address (&pVal)  = %p\\n", (void*)pVal, (void*)&pVal);\r
    printf("   • ppVal = %p | Address (&ppVal) = %p\\n\\n", (void*)ppVal, (void*)&ppVal);\r
\r
    printf("2. Dereferencing Levels:\\n");\r
    printf("   • ppVal   (holds &pVal)  = %p\\n", (void*)ppVal);\r
    printf("   • *ppVal  (holds &val)   = %p\\n", (void*)*ppVal);\r
    printf("   • **ppVal (retrieves 42) = %d\\n\\n", **ppVal);\r
\r
    // Modifying val through double pointer\r
    **ppVal = 99;\r
    printf("   • After **ppVal = 99: val = %d (Mutated via 2 indirection levels!)\\n\\n", val);\r
\r
    // 3. Dynamic Buffer Allocation via Double Pointer\r
    int *dynamicArray = NULL;\r
    int size = 4;\r
\r
    allocateBuffer(&dynamicArray, size);\r
    printf("3. Dynamic Array Allocated via Double Pointer Argument:\\n   [ ");\r
    for (int i = 0; i < size; i++) {\r
        printf("%d ", dynamicArray[i]);\r
    }\r
    printf("]\\n");\r
\r
    free(dynamicArray);\r
    dynamicArray = NULL;\r
\r
    return 0;\r
}\r
`,o=[{question:"What is a Double Pointer (Pointer to Pointer) in C?",shortAnswer:"A pointer variable that stores the memory address of another pointer variable.",explanation:"Declared with two asterisks: `int **pp;`. It enables two levels of memory indirection.",hint:"Pointer storing another pointer's address.",level:"basic"},{question:"How many asterisks are required to dereference a double pointer to access the ultimate integer value?",shortAnswer:"Two asterisks (`**pp`).",explanation:"`*pp` dereferences to the single pointer (`int*`); `**pp` dereferences to the underlying `int`.",hint:"**pp retrieves the target value.",level:"basic"},{question:"Why is a double pointer required when a function needs to modify a caller's pointer variable (e.g. allocating heap memory)?",shortAnswer:"Because C is pass-by-value. To modify an integer, you pass `int*`; to modify a pointer `int*`, you must pass its address as `int**`.",explanation:"Without `int**`, the newly allocated `malloc()` address is assigned to a local parameter copy and lost (memory leak).",hint:"Must pass &ptr (type T**) to mutate ptr.",level:"intermediate",codeExample:`void allocate(int **p, int n) {
    *p = malloc(n * sizeof(int));
}`},{question:"What is the memory size of a double pointer `int **pp` on a 64-bit machine?",options:["16 bytes","8 bytes","4 bytes","32 bytes"],correctAnswer:1,explanation:"All pointers in a 64-bit architecture occupy exactly 8 bytes (64 bits), regardless of indirection level.",level:"basic"},{question:"How do you create a dynamic 2D array of integers of dimension `R x C` on the heap using double pointers?",shortAnswer:"1. `int **matrix = malloc(R * sizeof(int*));`\n2. For each row: `matrix[i] = malloc(C * sizeof(int));`",explanation:"Allocates an array of row pointers, then allocates each row independently.",hint:"Two-stage heap allocation.",level:"intermediate",codeExample:`int **mat = malloc(R * sizeof(int*));
for (int i = 0; i < R; i++)
    mat[i] = malloc(C * sizeof(int));`},{question:"How do you correctly free a dynamic 2D array allocated via double pointers?",shortAnswer:"Free each individual row first in a loop (`free(mat[i])`), then free the master pointer array (`free(mat)`).",explanation:"Freeing `mat` first causes a memory leak because the row pointers become unreachable.",hint:"Free inner rows first, then outer pointer array.",level:"intermediate"},{question:"What does `char **argv` represent in `int main(int argc, char **argv)`?",shortAnswer:"A double pointer to the array of string argument pointers passed from the command line.",explanation:"`char **argv` is completely identical in function signature to `char *argv[]`.",hint:"Array of string pointers.",level:"basic"},{question:"What is a Triple Pointer (`int ***ppp`)?",shortAnswer:"A pointer that stores the address of a double pointer variable (3 levels of indirection).",explanation:"Used in multi-dimensional data structures or functions modifying dynamic 2D matrices.",hint:"3 levels of indirection.",level:"advanced"},{question:"What is the difference between a contiguous 2D array `int grid[3][4]` and dynamic double pointer `int **grid`?",shortAnswer:"`grid[3][4]` is 48 contiguous bytes in RAM; `int **grid` consists of separate pointer allocations that may be scattered across heap memory.",explanation:"Row pointers point to disparate memory buffers; not guaranteed to be contiguous.",hint:"Single contiguous block vs scattered heap buffers.",level:"advanced"},{question:"Can double pointers be used to create Jagged (Ragged) Matrices where rows have different column lengths?",shortAnswer:"Yes, because each row pointer `mat[i]` can be allocated with a different byte size via `malloc()`.",explanation:"Row 0 can have 3 elements, Row 1 can have 10 elements, etc.",hint:"Variable-length row allocations.",level:"intermediate"},{question:'What is the output of `int x = 5; int *p = &x; int **pp = &p; printf("%d", **pp + 1);`?',options:["5","6","Address of x","Garbage"],correctAnswer:1,explanation:"`**pp` retrieves 5; adding 1 yields 6."},{question:"What does `*pp = NULL;` accomplish when `pp` points to pointer `p`?",shortAnswer:"It sets the pointer variable `p` to `NULL`.",explanation:"Dereferencing once modifies the single pointer `p` itself.",hint:"Zeros out the single pointer variable.",level:"basic"},{question:"How do you write a safe `safe_free` macro that frees memory and zeroes the caller's pointer?",shortAnswer:"`#define SAFE_FREE(p) do { free(*(p)); *(p) = NULL; } while(0)` (Passing `&ptr` as argument).",explanation:"Eliminates dangling pointers across an entire codebase.",hint:"Safe free macro taking &ptr.",level:"advanced"},{question:"How do you traverse command-line arguments using pointer-to-pointer incrementation?",shortAnswer:'`for (char **p = argv; *p != NULL; p++) { printf("%s\\n", *p); }`',explanation:"Advances through the NULL-terminated array of string pointers.",hint:"p++ until *p == NULL.",level:"intermediate",codeExample:`for (char **p = argv; *p != NULL; p++) {
    printf("%s\\n", *p);
}`},{question:"Why can't you write `void allocate(int *p) { p = malloc(100); }` to return memory to the caller?",shortAnswer:"Because `p` is a local copy; modifying `p` changes only the local variable, leaving the caller's pointer uninitialized (Wild).",explanation:"The allocated memory is leaked and inaccessible to the caller.",hint:"Modifies only local parameter copy.",level:"intermediate"},{question:"What is the type of `&p` if `p` is declared as `char *p`?",shortAnswer:"`char**` (pointer to pointer to char).",explanation:"Taking the address of a `char*` yields `char**`.",hint:"char**.",level:"basic"},{question:"What is the type of `*pp` if `pp` is declared as `double **pp`?",shortAnswer:"`double*` (pointer to double).",explanation:"Dereferencing `double**` once yields `double*`.",hint:"double*.",level:"basic"},{question:"What happens if `pp` is `NULL` and you execute `*pp = malloc(10);`?",shortAnswer:"Segmentation Fault / Crash due to null pointer dereference.",explanation:"Always check `if (pp != NULL)` before dereferencing.",hint:"NULL dereference crash.",level:"basic"},{question:"How do you implement a function that inserts a node at the head of a Linked List in C?",shortAnswer:"Pass a double pointer to the head: `void insertHead(Node **head, int val);`.",explanation:"Updating the head pointer of the caller requires `Node**`.",hint:"Double pointer to head Node**.",level:"intermediate",codeExample:`void insertHead(Node **head, int val) {
    Node *newNode = malloc(sizeof(Node));
    newNode->data = val;
    newNode->next = *head;
    *head = newNode;
}`},{question:"Why is a single contiguous block `malloc(R * C * sizeof(int))` often preferred over `int **` for high-performance 2D matrices?",shortAnswer:"Better CPU cache spatial locality, fewer malloc/free overheads, and guaranteed contiguous memory.",explanation:"Single malloc ensures elements are adjacent in physical RAM.",hint:"Spatial cache locality.",level:"advanced"},{question:"What does `const char **p` mean?",shortAnswer:"A pointer to a pointer to constant characters (the characters cannot be modified).",explanation:"Commonly used in string array processing.",hint:"Pointee characters are const.",level:"intermediate"},{question:"What does `char * const *p` mean?",shortAnswer:"A pointer to a constant pointer to characters.",explanation:"The intermediate pointers cannot be reassigned.",hint:"Intermediate pointer is const.",level:"advanced"},{question:"Can you reassign `ppVal` to point to a different pointer `pVal2`?",shortAnswer:"Yes, `ppVal = &pVal2;` reassigns the double pointer address.",explanation:"Double pointers are mutable variables unless qualified with `const`.",hint:"Double pointer variable is mutable.",level:"basic"},{question:'What is the output of `int a = 10, b = 20; int *p = &a; int **pp = &p; *pp = &b; printf("%d", *p);`?',options:["10","20","Address of a","Compiler error"],correctAnswer:1,explanation:"`*pp = &b` reassigns pointer `p` to point to `b`. Dereferencing `*p` yields 20."},{question:"What is the primary architectural role of double pointers in C systems software?",shortAnswer:"Managing dynamic collections, modifying pointer references in data structures, and handling polymorphic argument lists.",explanation:"Essential for memory managers, operating systems kernels, and complex data structures.",hint:"Dynamic memory and reference mutation.",level:"intermediate"}],s=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_007: Pointers & Memory Addresses\r
TOPIC 4: Pointers to Pointers (Double Pointers **ptr)\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A DOUBLE POINTER?\r
--------------------------------------------------------------------------------\r
- A double pointer stores the address of another pointer variable:\r
    int x = 10;\r
    int *p = &x;     // Stores address of x (e.g. 0x1000)\r
    int **pp = &p;   // Stores address of p (e.g. 0x2000)\r
\r
- Indirection Levels:\r
    pp   -> Address of p (0x2000)\r
    *pp  -> Address of x (0x1000)\r
    **pp -> Value of x   (10)\r
\r
2. WHY USE DOUBLE POINTERS IN FUNCTIONS?\r
--------------------------------------------------------------------------------\r
- To modify an \`int\` variable in caller: Pass \`int*\`\r
- To modify a \`pointer\` variable in caller: Pass \`int**\`\r
- Example (Dynamic Memory Allocation):\r
    void allocate(int **p, int n) {\r
        *p = malloc(n * sizeof(int)); // Modifies caller's pointer!\r
    }\r
\r
3. DYNAMIC 2D JAGGED MATRICES ON HEAP\r
--------------------------------------------------------------------------------\r
    int **matrix = malloc(ROWS * sizeof(int*));\r
    for (int i = 0; i < ROWS; i++) {\r
        matrix[i] = malloc(COLS * sizeof(int));\r
    }\r
\r
    // Always free inner rows first, then outer pointer array:\r
    for (int i = 0; i < ROWS; i++) free(matrix[i]);\r
    free(matrix);\r
\r
4. SUMMARY CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] All pointer types (single, double, triple) occupy 8 bytes on 64-bit OS.\r
[✓] Command-line arguments \`char *argv[]\` are \`char **argv\`!\r
[✓] Linked list head modifications always require \`Node **head\`.\r
================================================================================\r
`;function g(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_007 · Topic 4"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Multi-Level Indirection"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Pointers to Pointers: Double Pointers (**ptr) & Pointer Mutation"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Unlock multi-level memory indirection. Discover why modifying caller pointer variables requires double pointers (",e.jsx("code",{children:"**ptr"}),"), build dynamic 2D matrices on the heap, and master command-line argument arrays (",e.jsx("code",{children:"char **argv"}),")."]})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The Treasure Map to Another Treasure Map"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["In our lab, ",e.jsx("strong",{children:"Abhronila"})," tried writing a helper function ",e.jsx("code",{children:"void allocate(int *p) { p = malloc(100); }"})," to initialize a dynamic buffer in ",e.jsx("code",{children:"main()"}),". But when she checked ",e.jsx("code",{children:"main()"}),", her pointer was still ",e.jsx("code",{children:"NULL"})," and the memory was leaked!"]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"🗺️ The Two-Level Treasure Map"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["A single pointer is a map with an 'X' marking where treasure is buried in the sand. A ",e.jsxs("strong",{children:["Double Pointer (",e.jsx("code",{children:"**pp"}),")"]})," is a map that leads to a safety deposit locker containing the treasure map itself!"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["Just like modifying an integer requires passing ",e.jsx("code",{children:"int*"}),", modifying a caller's pointer address (like giving them a newly allocated heap address from ",e.jsx("code",{children:"malloc"}),") requires passing ",e.jsx("code",{children:"int**"}),"!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Two-Level Pointer Indirection Chain"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("text",{x:"460",y:"25",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"Double Pointer Chain: int val = 42; int *pVal = &val; int **ppVal = &pVal;"}),e.jsxs("g",{transform:"translate(60, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"120",rx:"8",fill:"#1e293b",stroke:"#f472b6",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"25",textAnchor:"middle",fill:"#f472b6",className:"font-bold text-xs",children:"Double Pointer: ppVal"}),e.jsx("rect",{x:"20",y:"35",width:"160",height:"50",rx:"4",fill:"#0f172a",stroke:"#f472b6"}),e.jsx("text",{x:"100",y:"68",textAnchor:"middle",fill:"#34d399",className:"font-bold text-lg font-mono",children:"0x2000"}),e.jsx("text",{x:"100",y:"105",textAnchor:"middle",fill:"#f59e0b",className:"text-[11px] font-mono",children:"Address: 0x3000 (8 Bytes)"})]}),e.jsx("path",{d:"M 260 120 L 340 120",stroke:"#f472b6",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(360, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"120",rx:"8",fill:"#1e293b",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"25",textAnchor:"middle",fill:"#818cf8",className:"font-bold text-xs",children:"Single Pointer: pVal"}),e.jsx("rect",{x:"20",y:"35",width:"160",height:"50",rx:"4",fill:"#0f172a",stroke:"#818cf8"}),e.jsx("text",{x:"100",y:"68",textAnchor:"middle",fill:"#34d399",className:"font-bold text-lg font-mono",children:"0x1000"}),e.jsx("text",{x:"100",y:"105",textAnchor:"middle",fill:"#f59e0b",className:"text-[11px] font-mono",children:"Address: 0x2000 (8 Bytes)"})]}),e.jsx("path",{d:"M 560 120 L 640 120",stroke:"#818cf8",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(660, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"120",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"25",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"Target Variable: val"}),e.jsx("rect",{x:"20",y:"35",width:"160",height:"50",rx:"4",fill:"#0f172a",stroke:"#38bdf8"}),e.jsx("text",{x:"100",y:"70",textAnchor:"middle",fill:"#fff",className:"font-bold text-2xl font-mono",children:"42"}),e.jsx("text",{x:"100",y:"105",textAnchor:"middle",fill:"#f59e0b",className:"text-[11px] font-mono",children:"Address: 0x1000 (4 Bytes)"})]}),e.jsx("rect",{x:"60",y:"200",width:"800",height:"55",rx:"8",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"460",y:"225",textAnchor:"middle",fill:"#34d399",className:"text-xs font-mono font-bold",children:"• ppVal holds &pVal (0x2000) | *ppVal yields pVal (0x1000) | **ppVal retrieves value (42)"}),e.jsx("text",{x:"460",y:"243",textAnchor:"middle",fill:"#94a3b8",className:"text-[11px]",children:"Assigning **ppVal = 99 directly mutates the integer cell at address 0x1000!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Dynamic 2D Jagged Matrices on Heap"}),e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3 text-xs",children:[e.jsx("p",{className:"text-slate-300 leading-relaxed",children:"Double pointers allow allocating 2D grids where each row is an independent heap buffer. This allows each row to have custom variable lengths (Jagged Array)!"}),e.jsx("pre",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-emerald-400 overflow-x-auto",children:`// 1. Allocate Array of Row Pointers
int **matrix = (int**)malloc(ROWS * sizeof(int*));

// 2. Allocate Column Buffers for each Row
for (int i = 0; i < ROWS; i++) {
    matrix[i] = (int*)malloc(COLS * sizeof(int));
}

// 3. Deallocate in reverse order (Inner rows first!)
for (int i = 0; i < ROWS; i++) free(matrix[i]);
free(matrix);`})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Double Pointer & Heap Allocation Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"DoublePointersDemo.c"}),") demonstrates two-level memory indirection, mutating data via ",e.jsx("code",{children:"**ppVal"}),", and allocating a dynamic array buffer inside a function using a double pointer argument."]}),e.jsx(t,{fileModule:a,title:"DoublePointersDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 Double Pointers (Pointers to Pointers: **ptr)
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

1. Two-Level Indirection Chain:
   • val   = 42 | Address (&val)   = 00000072049FF734
   • pVal  = 00000072049FF734 | Address (&pVal)  = 00000072049FF740
   • ppVal = 00000072049FF740 | Address (&ppVal) = 00000072049FF748

2. Dereferencing Levels:
   • ppVal   (holds &pVal)  = 00000072049FF740
   • *ppVal  (holds &val)   = 00000072049FF734
   • **ppVal (retrieves 42) = 42

   • After **ppVal = 99: val = 99 (Mutated via 2 indirection levels!)

3. Dynamic Array Allocated via Double Pointer Argument:
   [ 10 20 30 40 ]`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Memory Safety Rules"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Leaking Row Buffers During Deallocation:"})," Freeing ",e.jsx("code",{children:"free(matrix);"})," before freeing each row ",e.jsx("code",{children:"free(matrix[i]);"})," causes irreversible heap memory leaks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Passing Single Pointer to Buffer Allocators:"})," Calling ",e.jsx("code",{children:"allocate(ptr)"})," instead of ",e.jsx("code",{children:"allocate(&ptr)"})," cannot update the caller's pointer address."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Assuming Dynamic 2D Arrays are Contiguous:"})," Dynamic ",e.jsx("code",{children:"int **"})," rows reside in scattered heap blocks, unlike flat ",e.jsx("code",{children:"int[3][4]"})," stack arrays."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why does inserting a new node at the head of a linked list in C require a double pointer ",e.jsx("code",{children:"void insertHead(Node **head, int val);"}),"?"]})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 002_007 Topic 4 FAQs: Double Pointers",questions:o})}),e.jsx("section",{children:e.jsx(n,{content:s,title:"Module 002_007 Topic 4 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 4 Note",downloadFileName:"module_002_007_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(i,{note:"Double pointers are essential for all dynamic data structures! Whenever you need to build dynamic matrices, trees, or modify caller pointers, double pointers are your weapon of choice. — Sukanta Hui"})})]})}export{g as default};
