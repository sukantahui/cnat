import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-Cyf0mDYr.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const r=`#include <stdio.h>\r
\r
/**\r
 * PassByReferenceDemo.c\r
 * Demonstrates pass-by-value vs pass-by-reference simulation using pointers in C:\r
 * the classic swap(&x, &y) function and returning multiple results (min, max, avg).\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
// 1. Pass-by-value (FAILS to modify caller variables)\r
void swapByValue(int a, int b) {\r
    int temp = a;\r
    a = b;\r
    b = temp;\r
}\r
\r
// 2. Pass-by-reference simulation (SUCCESSFULLY modifies caller variables)\r
void swapByReference(int *pA, int *pB) {\r
    int temp = *pA;\r
    *pA = *pB;\r
    *pB = temp;\r
}\r
\r
// 3. Simulating multiple return values via pointer output parameters\r
void calculateStatistics(const int arr[], int size, int *min, int *max, double *avg) {\r
    if (size <= 0) return;\r
\r
    *min = arr[0];\r
    *max = arr[0];\r
    int sum = 0;\r
\r
    for (int i = 0; i < size; i++) {\r
        if (arr[i] < *min) *min = arr[i];\r
        if (arr[i] > *max) *max = arr[i];\r
        sum += arr[i];\r
    }\r
    *avg = (double)sum / size;\r
}\r
\r
int main(void) {\r
    int x = 10, y = 20;\r
\r
    printf("====================================================\\n");\r
    printf(" Pass-by-Reference Simulation Using Pointers in C\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    printf("Initial values : x = %d, y = %d\\n\\n", x, y);\r
\r
    // Testing swapByValue\r
    swapByValue(x, y);\r
    printf("After swapByValue(x, y)      : x = %d, y = %d (UNMODIFIED!)\\n", x, y);\r
\r
    // Testing swapByReference\r
    swapByReference(&x, &y);\r
    printf("After swapByReference(&x, &y): x = %d, y = %d (SWAPPED SUCCESSFULLY!)\\n\\n", x, y);\r
\r
    // Testing multiple return parameters\r
    int marks[] = {85, 92, 78, 64, 99, 88};\r
    int n = sizeof(marks) / sizeof(marks[0]);\r
    int minScore = 0, maxScore = 0;\r
    double avgScore = 0.0;\r
\r
    calculateStatistics(marks, n, &minScore, &maxScore, &avgScore);\r
\r
    printf("Student Scores Analysis (Multiple Return Parameters):\\n");\r
    printf(" • Minimum Score : %d\\n", minScore);\r
    printf(" • Maximum Score : %d\\n", maxScore);\r
    printf(" • Class Average : %.2f\\n", avgScore);\r
\r
    return 0;\r
}\r
`,i=[{question:"Does C support true native 'Pass-by-Reference' like C++?",shortAnswer:"No, C is strictly a 'Pass-by-Value' language; pass-by-reference is simulated by passing pointer addresses by value.",explanation:"When you pass `&x`, you pass the numeric memory address value into a pointer parameter.",hint:"Simulated pass-by-reference via pointer values.",level:"basic"},{question:"Why does `void swap(int a, int b) { int t = a; a = b; b = t; }` fail to swap variables in `main`?",shortAnswer:"Because `a` and `b` are local copies on `swap`'s stack frame; modifying them does not affect the caller's stack frame.",explanation:"Modifications exist only inside the function and are destroyed when the stack frame unwinds.",hint:"Copies on separate stack frame.",level:"basic"},{question:"What is the correct prototype and call syntax for swapping two integers in C?",shortAnswer:"Prototype: `void swap(int *a, int *b);` | Call: `swap(&x, &y);`",explanation:"Passing addresses allows `swap` to dereference `*a` and `*b`, directly mutating the caller's memory.",hint:"Pass &x, &y into int *a, int *b.",level:"basic",codeExample:`void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}`},{question:"How can a C function return multiple calculated results to the caller?",shortAnswer:"By accepting pointer parameters (Out-parameters) and writing results directly to those caller addresses.",explanation:"Since C functions can only return a single value via `return`, pointers allow returning unlimited output values.",hint:"Output pointer parameters (out-parameters).",level:"basic",codeExample:`void getQuotientAndRemainder(int a, int b, int *q, int *r) {
    *q = a / b;
    *r = a % b;
}`},{question:"What is an 'Out-Parameter' in C systems programming?",shortAnswer:"A pointer parameter whose purpose is to return data from the callee back to the caller.",explanation:"Commonly used in POSIX and Windows APIs where the `return` value returns a status code (0 for success) and data is written to out-pointers.",hint:"Pointer argument used as output channel.",level:"intermediate"},{question:"What happens if a caller passes `NULL` to an out-parameter `calculate(data, &result)`?",shortAnswer:"The function crashes with a Segmentation Fault unless it explicitly guards with `if (result != NULL)`.",explanation:"Defensive functions always check output pointers against NULL before dereferencing.",hint:"Guard out-pointers against NULL.",level:"intermediate"},{question:"What is the memory efficiency advantage of passing a large struct by pointer (`const StructType *p`) instead of by value?",shortAnswer:"Passing by pointer copies only 8 bytes (pointer size), whereas passing by value duplicates the entire struct (e.g. 1024 bytes) onto the stack.",explanation:"Passing by pointer avoids expensive memory copies and prevents stack overflow.",hint:"Copies 8 bytes instead of entire struct.",level:"intermediate"},{question:"How do you ensure a function cannot accidentally modify data when passing a pointer for performance?",shortAnswer:"Qualify the parameter with `const`, e.g. `void process(const BigData *data);`.",explanation:"The compiler forbids any writes through `const` pointers, guaranteeing data safety.",hint:"Use const pointer qualifier.",level:"basic"},{question:"What is the result of `void addOne(int *p) { (*p)++; }` called with `addOne(&count);` where `count = 10`?",shortAnswer:"`count` becomes 11.",explanation:"`*p` fetches 10, increments it to 11, and writes it back to `count`'s memory address.",hint:"Mutates count directly.",level:"basic"},{question:"Why are parentheses necessary in `(*p)++` compared to `*p++`?",shortAnswer:"`*p++` increments the pointer address itself due to operator precedence; `(*p)++` increments the integer value pointed to.",explanation:"Postfix `++` has higher precedence than unary `*`.",hint:"Precedence: postfix ++ > prefix *.",level:"advanced",codeExample:`(*p)++; // Increments integer value
*p++;   // Increments pointer address!`},{question:"Can a function return a pointer to a local automatic variable declared on its own stack frame?",shortAnswer:"NO! Local variables are destroyed when the function returns, creating a Dangling Pointer and Undefined Behavior.",explanation:"Stack memory is reclaimed upon function return; reading through the returned pointer produces garbage or crashes.",hint:"Never return pointer to local stack variable.",level:"intermediate"},{question:"How can a function safely return a pointer to created data?",shortAnswer:"By allocating the memory dynamically on the heap with `malloc()`, or by returning a pointer to a `static` buffer.",explanation:"Heap memory and static storage persist beyond function scope.",hint:"Heap allocation via malloc() or static variable.",level:"intermediate"},{question:"What is the return value convention for standard POSIX / C systems functions using out-parameters?",shortAnswer:"Return integer error code (0 for SUCCESS, non-zero / -1 for ERROR), while actual data is returned via pointer arguments.",explanation:"Enables robust status verification before accessing parsed data.",hint:"Status code return + out-parameters for data.",level:"intermediate"},{question:"What is the difference between `swap(x, y)` and `swap(&x, &y)` at the assembly language level?",shortAnswer:"`swap(x, y)` pushes values (e.g. 10 and 20) onto registers/stack; `swap(&x, &y)` pushes stack memory addresses (e.g. 0x7ffd0000).",explanation:"The callee uses indirect memory addressing instructions to mutate the caller's stack frame.",hint:"Value passing vs Address offset passing.",level:"advanced"},{question:"How do you implement a function that resets an integer to 0 using a pointer?",shortAnswer:"`void reset(int *p) { if (p != NULL) *p = 0; }`",explanation:"Writes 0 into the target address after null validation.",hint:"*p = 0 with NULL guard.",level:"basic"},{question:"What happens if you call `swapByReference(&x, &x)` (passing the exact same variable address twice)?",shortAnswer:"It works correctly and keeps the value intact (or xor swap without temp could zero it).",explanation:"Standard temp-based swap handles identical addresses safely: temp = x; x = x; x = temp.",hint:"Self-swap safety with temp variable.",level:"intermediate"},{question:"What is the XOR swap algorithm and why can it fail if `pA == pB`?",shortAnswer:"`*pA ^= *pB; *pB ^= *pA; *pA ^= *pB;` fails if both pointers share the same address, zeroing the variable.",explanation:"`x ^ x = 0`. If `pA` and `pB` point to the same memory, the first step destroys the value.",hint:"XOR self-swap zeros out memory.",level:"advanced"},{question:"How do you write a function that splits a full name string into first and last name pointers?",shortAnswer:"Accept `const char *full`, and `char **first`, `char **last` (double pointers to modify caller pointer addresses).",explanation:"Modifying pointer variables requires passing pointers to those pointers (`char**`).",hint:"Pointers to pointers for modifying caller pointers.",level:"advanced"},{question:"What is the difference between passing an array `int arr[]` and passing a scalar `int x` to a function?",shortAnswer:"Arrays decay automatically into pointers (passed by address); scalars are passed by value (copied).",explanation:"Modifying `arr[0]` inside a function mutates caller memory; modifying `x` does not.",hint:"Array automatically decays to pointer.",level:"basic"},{question:"Why is passing pointers essential for building Linked Lists and Trees?",shortAnswer:"Nodes must store pointers to connect to other nodes in RAM and modify links dynamically.",explanation:"Data structures rely on memory address linkage to grow and restructure dynamically.",hint:"Address links between memory nodes.",level:"intermediate"},{question:"How do you pass a pointer to a function and increment the value it points to by N?",shortAnswer:"`void addN(int *p, int n) { if (p) *p += n; }`",explanation:"Adds `n` to the dereferenced target variable.",hint:"*p += n.",level:"basic"},{question:"What does `int * const ptr` guarantee when used as a function parameter?",shortAnswer:"The function cannot reassign the pointer to point to a different address.",explanation:"The pointer variable is constant, though the data pointed to remains mutable.",hint:"Immutable pointer address.",level:"intermediate"},{question:"What does `const int * const ptr` guarantee as a function parameter?",shortAnswer:"Both the pointer address and the data pointed to are completely read-only and immutable.",explanation:"Maximum immutability guarantee.",hint:"Read-only pointer and read-only data.",level:"intermediate"},{question:"Can pointer parameters be used with primitive types like `char`, `float`, and `long`?",shortAnswer:"Yes, pointer dereferencing works identically across all C data types.",explanation:"`*pFloat`, `*pChar`, and `*pLong` dereference their respective data widths.",hint:"Universal pointer dereferencing across all types.",level:"basic"},{question:"What is the golden rule when writing functions that accept pointer arguments?",shortAnswer:"Always validate that the pointer is non-null (`if (ptr == NULL) return ERROR;`) before dereferencing!",explanation:"Prevents fatal crashes and segmentation faults across your application.",hint:"Always check for NULL before dereferencing.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_007: Pointers & Memory Addresses\r
TOPIC 1: Dereferencing & Pass-by-Reference Simulation\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PASS-BY-VALUE VS PASS-BY-REFERENCE SIMULATION\r
--------------------------------------------------------------------------------\r
- C is strictly a Pass-by-Value language:\r
    swap(a, b) copies integer values into callee stack frame (Caller unchanged!).\r
- Pass-by-Reference is SIMULATED by passing memory addresses:\r
    swap(&a, &b) passes address values into pointer parameters (Caller mutated!).\r
\r
2. THE CLASSIC SWAP ALGORITHM\r
--------------------------------------------------------------------------------\r
    void swap(int *pA, int *pB) {\r
        int temp = *pA; // Read value from address pA\r
        *pA = *pB;      // Write value from pB into address pA\r
        *pB = temp;     // Write temp into address pB\r
    }\r
\r
3. MULTIPLE RETURN VALUES (OUT-PARAMETERS)\r
--------------------------------------------------------------------------------\r
    void getStats(const int arr[], int n, int *min, int *max, double *avg) {\r
        *min = ...;\r
        *max = ...;\r
        *avg = ...;\r
    }\r
\r
4. PRECEDENCE TRAP: (*p)++ VS *p++\r
--------------------------------------------------------------------------------\r
- \`(*p)++\` : Increments the integer value stored at address p.\r
- \`*p++\`   : Dereferences current value, then increments the POINTER ADDRESS itself!\r
\r
5. SECURITY CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Always guard out-parameters against NULL before dereferencing:\r
    \`if (outPtr != NULL) *outPtr = result;\`\r
[✓] Never return a pointer to a local automatic stack variable!\r
[✓] Qualify read-only input pointers with \`const\`.\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_007 · Topic 1"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Caller-Callee Interactivity"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Dereferencing & Pass-by-Reference Simulation: Modifying Caller Memory"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master how C functions communicate across stack frame boundaries. Dissect why standard pass-by-value fails to modify caller variables, simulate true pass-by-reference using pointers, and implement out-parameters for multiple return values."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The Photocopy vs. Master Document Analogy"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["In our Barrackpore center, ",e.jsx("strong",{children:"Swadeep"})," wrote a classic function ",e.jsx("code",{children:"void swap(int a, int b)"})," to swap two numbers. In ",e.jsx("code",{children:"main()"}),", ",e.jsx("code",{children:"x"})," was 10 and ",e.jsx("code",{children:"y"})," was 20. But after calling ",e.jsx("code",{children:"swap(x, y)"}),", ",e.jsx("code",{children:"x"})," remained 10 and ",e.jsx("code",{children:"y"})," remained 20!"]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"📄 Photocopying an Income Tax Form"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["When you call ",e.jsx("code",{children:"swap(x, y)"})," by value, C makes a ",e.jsx("strong",{children:"photocopy"})," of your tax document and hands it to the function. The function scribbles, swaps, and changes numbers on the photocopy. When the function ends, that photocopy is thrown in the dustbin—the original master document locked in your drawer in ",e.jsx("code",{children:"main()"})," remains completely untouched!"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["When you pass ",e.jsx("code",{children:"swap(&x, &y)"}),", you hand the function the ",e.jsx("strong",{children:"Key to your Drawer (Memory Address)"}),". The function reaches directly into your drawer via ",e.jsx("code",{children:"*pA"})," and ",e.jsx("code",{children:"*pB"}),", physically swapping the master original documents!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Caller Stack Frame Mutation via Pointers"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 300",className:"w-full min-w-[750px] font-sans",children:[e.jsxs("g",{transform:"translate(40, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"220",rx:"10",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"30",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"Caller Stack Frame: main()"}),e.jsx("rect",{x:"30",y:"55",width:"320",height:"60",rx:"6",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"50",y:"85",fill:"#38bdf8",className:"font-bold text-xs font-mono",children:"int x = 10"}),e.jsx("text",{x:"50",y:"103",fill:"#94a3b8",className:"text-[10px] font-mono",children:"Address: 0x1000"}),e.jsx("text",{x:"260",y:"90",fill:"#34d399",className:"font-bold text-base font-mono",children:"20 (Swapped!)"}),e.jsx("rect",{x:"30",y:"130",width:"320",height:"60",rx:"6",fill:"#1e293b",stroke:"#38bdf8"}),e.jsx("text",{x:"50",y:"160",fill:"#38bdf8",className:"font-bold text-xs font-mono",children:"int y = 20"}),e.jsx("text",{x:"50",y:"178",fill:"#94a3b8",className:"text-[10px] font-mono",children:"Address: 0x1004"}),e.jsx("text",{x:"260",y:"165",fill:"#34d399",className:"font-bold text-base font-mono",children:"10 (Swapped!)"})]}),e.jsx("path",{d:"M 540 100 C 470 100, 440 90, 370 90",stroke:"#f59e0b",strokeWidth:"3",fill:"none",markerEnd:"url(#arrow)"}),e.jsx("path",{d:"M 540 180 C 470 180, 440 160, 370 160",stroke:"#f59e0b",strokeWidth:"3",fill:"none",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(500, 40)",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"220",rx:"10",fill:"#0f172a",stroke:"#818cf8",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"30",textAnchor:"middle",fill:"#818cf8",className:"font-bold text-sm",children:"Callee Stack Frame: swap(int *pA, int *pB)"}),e.jsx("rect",{x:"30",y:"55",width:"320",height:"60",rx:"6",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"50",y:"85",fill:"#818cf8",className:"font-bold text-xs font-mono",children:"int *pA = 0x1000"}),e.jsx("text",{x:"50",y:"103",fill:"#f59e0b",className:"text-[10px] font-mono",children:"Points to main::x"}),e.jsx("rect",{x:"30",y:"130",width:"320",height:"60",rx:"6",fill:"#1e293b",stroke:"#818cf8"}),e.jsx("text",{x:"50",y:"160",fill:"#818cf8",className:"font-bold text-xs font-mono",children:"int *pB = 0x1004"}),e.jsx("text",{x:"50",y:"178",fill:"#f59e0b",className:"text-[10px] font-mono",children:"Points to main::y"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Pass-by-Value vs. Pass-by-Reference Simulation"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3",children:[e.jsx("h3",{className:"font-bold text-rose-300 text-sm",children:"1. Pass-by-Value (Caller Unchanged)"}),e.jsxs("p",{className:"font-mono text-rose-400 bg-slate-950 p-3 rounded-xl border border-slate-800",children:["void swap(int a, int b) {",e.jsx("br",{}),"  int temp = a; a = b; b = temp;",e.jsx("br",{}),"}"]}),e.jsx("p",{className:"text-slate-400 leading-relaxed",children:"Creates isolated local variables on callee's stack frame. Modifications vanish when function returns."})]}),e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"2. Pass-by-Reference Simulation (Caller Mutated)"}),e.jsxs("p",{className:"font-mono text-emerald-400 bg-slate-950 p-3 rounded-xl border border-slate-800",children:["void swap(int *a, int *b) {",e.jsx("br",{}),"  int temp = *a; *a = *b; *b = temp;",e.jsx("br",{}),"}"]}),e.jsxs("p",{className:"text-slate-400 leading-relaxed",children:["Passes memory addresses (",e.jsx("code",{children:"&x, &y"}),"). Dereferencing (",e.jsx("code",{children:"*a"}),") writes directly into caller's stack frame!"]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Pass-by-Reference & Out-Parameters Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"PassByReferenceDemo.c"}),") demonstrates the failure of pass-by-value, the success of simulated pass-by-reference swap, and calculating multiple output metrics (min, max, average) using out-parameter pointers."]}),e.jsx(t,{fileModule:r,title:"PassByReferenceDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 Pass-by-Reference Simulation Using Pointers in C
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

Initial values : x = 10, y = 20

After swapByValue(x, y)      : x = 10, y = 20 (UNMODIFIED!)
After swapByReference(&x, &y): x = 20, y = 10 (SWAPPED SUCCESSFULLY!)

Student Scores Analysis (Multiple Return Parameters):
 • Minimum Score : 64
 • Maximum Score : 99
 • Class Average : 84.33`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Operator Precedence Traps"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:[e.jsx("code",{children:"(*p)++"})," vs ",e.jsx("code",{children:"*p++"})," Precedence Trap:"]})," Writing ",e.jsx("code",{children:"*p++"})," increments the pointer memory address itself! To increment the integer value pointed to, you MUST use parentheses: ",e.jsx("code",{children:"(*p)++"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Returning Pointer to Local Stack Variable:"})," Never write ",e.jsx("code",{children:"int* f() { int temp = 10; return &temp; }"}),". The stack frame is destroyed upon return, leaving a dangerous dangling pointer!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing NULL Check on Out-Parameters:"})," Always verify ",e.jsx("code",{children:"if (outPtr != NULL) *outPtr = value;"})," before dereferencing output pointers."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why does passing a 1-megabyte ",e.jsx("code",{children:"struct BigData"})," by pointer (",e.jsx("code",{children:"const BigData *p"}),") execute in under a microsecond, while passing it by value takes thousands of CPU clock cycles?"]})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 002_007 Topic 1 FAQs: Pass-by-Reference & Dereferencing",questions:i})}),e.jsx("section",{children:e.jsx(a,{content:o,title:"Module 002_007 Topic 1 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 1 Note",downloadFileName:"module_002_007_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Pointers enable true collaboration between caller and callee! Whenever you want a function to produce multiple answers, or modify caller variables in place, pass memory addresses. — Sukanta Hui"})})]})}export{b as default};
