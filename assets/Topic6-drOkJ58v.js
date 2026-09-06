import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as i}from"./CFileLoader-Cyf0mDYr.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * FunctionPointersDemo.c\r
 * Demonstrates function pointers in C: syntax, callbacks, dispatch tables (jump tables),\r
 * and standard library qsort() custom comparators.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
// Math Operation Functions\r
int add(int a, int b) { return a + b; }\r
int subtract(int a, int b) { return a - b; }\r
int multiply(int a, int b) { return a * b; }\r
int divide(int a, int b) { return (b != 0) ? a / b : 0; }\r
\r
// 1. Function Pointer Type Definition\r
typedef int (*MathOperationFunc)(int, int);\r
\r
// 2. Higher-Order Callback Function\r
void performOperation(int a, int b, MathOperationFunc operation, const char *opName) {\r
    int result = operation(a, b);\r
    printf("   • %s(%d, %d) = %d\\n", opName, a, b, result);\r
}\r
\r
// 3. Custom Comparator for qsort (Ascending & Descending)\r
int cmpAscending(const void *a, const void *b) {\r
    return (*(const int*)a - *(const int*)b);\r
}\r
\r
int cmpDescending(const void *a, const void *b) {\r
    return (*(const int*)b - *(const int*)a);\r
}\r
\r
int main(void) {\r
    printf("====================================================\\n");\r
    printf(" Function Pointers, Callbacks & Dispatch Tables\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    // 1. Direct Function Pointer Invocation\r
    MathOperationFunc pFunc = add;\r
    printf("1. Direct Function Pointer Call:\\n");\r
    printf("   • pFunc (address %p) called with (15, 25): %d\\n\\n", (void*)pFunc, pFunc(15, 25));\r
\r
    // 2. Callbacks via Higher-Order Function\r
    printf("2. Callbacks to Higher-Order Functions:\\n");\r
    performOperation(20, 10, add, "Add");\r
    performOperation(20, 10, subtract, "Subtract");\r
    performOperation(20, 10, multiply, "Multiply");\r
    printf("\\n");\r
\r
    // 3. Dispatch Table (Array of Function Pointers)\r
    MathOperationFunc dispatchTable[4] = {add, subtract, multiply, divide};\r
    const char *opLabels[4] = {"+", "-", "*", "/"};\r
    int x = 40, y = 8;\r
\r
    printf("3. Calculator Dispatch Table Array:\\n");\r
    for (int i = 0; i < 4; i++) {\r
        printf("   • Op [%d] %d %s %d = %d\\n", i, x, opLabels[i], y, dispatchTable[i](x, y));\r
    }\r
    printf("\\n");\r
\r
    // 4. Standard Library qsort() with Custom Comparator Callback\r
    int scores[] = {85, 42, 99, 63, 77};\r
    int n = sizeof(scores) / sizeof(scores[0]);\r
\r
    printf("4. qsort() Sorting with Custom Function Pointer Comparators:\\n");\r
    qsort(scores, n, sizeof(int), cmpAscending);\r
    printf("   • Ascending Sort : [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", scores[i]);\r
    printf("]\\n");\r
\r
    qsort(scores, n, sizeof(int), cmpDescending);\r
    printf("   • Descending Sort: [ ");\r
    for (int i = 0; i < n; i++) printf("%d ", scores[i]);\r
    printf("]\\n");\r
\r
    return 0;\r
}\r
`,l=[{question:"What is a Function Pointer in C?",shortAnswer:"A pointer that stores the memory address of executable machine code for a function in the text segment.",explanation:"Allows calling functions dynamically at runtime, implementing callbacks, event loops, and dispatch tables.",hint:"Pointer storing function code address.",level:"basic"},{question:"What is the syntax for declaring a pointer `fp` to a function taking two `int`s and returning an `int`?",shortAnswer:"`int (*fp)(int, int);`",explanation:"Parentheses `(*fp)` are mandatory; writing `int *fp(int, int);` declares a function returning an `int*`.",hint:"int (*fp)(int, int);",level:"basic",codeExample:"int (*fp)(int, int) = add;"},{question:"How do you define a clean alias for a function pointer type using `typedef`?",shortAnswer:"`typedef int (*OperationFunc)(int, int);`",explanation:"Allows declaring function pointer variables cleanly: `OperationFunc p = multiply;`.",hint:"typedef with function signature.",level:"basic",codeExample:`typedef int (*OperationFunc)(int, int);
OperationFunc p = multiply;`},{question:"What is a Callback Function in C?",shortAnswer:"A function passed as a pointer argument to another function, which calls it back during execution.",explanation:"Used extensively in event-driven programming, GUI button clicks, timers, and `qsort`.",hint:"Function passed as argument to another function.",level:"basic"},{question:"What is a Dispatch Table (Jump Table) in C?",shortAnswer:"An array of function pointers indexed by opcode or user choice to invoke routines in O(1) time.",explanation:"Replaces large, slow `switch` or `if-else` chains with direct indexed function pointer calls.",hint:"Array of function pointers.",level:"intermediate",codeExample:`void (*actions[4])(void) = {onCreate, onStart, onPause, onDestroy};
actions[eventCode]();`},{question:"What is the signature of the comparator callback function required by `qsort()` from `<stdlib.h>`?",shortAnswer:"`int (*cmp)(const void *a, const void *b)`",explanation:"`qsort` passes generic `const void*` pointers to the two elements being compared.",hint:"int (*cmp)(const void *, const void *).",level:"basic"},{question:"In a `qsort` comparator, what does returning a positive integer `> 0` signify?",shortAnswer:"Element `a` is greater than element `b`, meaning `b` should precede `a` in ascending order.",explanation:"`qsort` will place `b` before `a` in the sorted output.",hint:"a should come after b.",level:"basic"},{question:"Why does the `add` function identifier automatically evaluate to its address without `&`?",shortAnswer:"In C, a function name automatically decays into a pointer to that function in expressions.",explanation:"`p = add;` and `p = &add;` are completely equivalent in C.",hint:"Function name automatically decays to pointer.",level:"basic"},{question:"Can you invoke a function pointer with or without explicit dereference: `fp(a, b)` vs `(*fp)(a, b)`?",shortAnswer:"Both are completely valid and produce identical machine code in C.",explanation:"`fp(a, b)` is modern syntactic shorthand for `(*fp)(a, b)`.",hint:"Both fp(a, b) and (*fp)(a, b) are legal.",level:"basic"},{question:"What happens if you attempt to call a function pointer that is `NULL`?",shortAnswer:"Immediate Segmentation Fault / Crash (attempting to execute code at address 0).",explanation:"Always check `if (fp != NULL)` before calling any callback pointer.",hint:"Crash executing code at NULL.",level:"basic"},{question:"Can function pointers be members of C `struct`s?",shortAnswer:"Yes, this is how Object-Oriented Programming (OOP) and Virtual Method Tables (vtable) are implemented in pure C.",explanation:"Structs contain function pointer fields pointing to specific methods.",hint:"Structs with function pointers simulate OOP methods.",level:"intermediate",codeExample:`typedef struct {
    void (*start)(void);
    void (*stop)(void);
} Engine;`},{question:"What is the size of any function pointer on a 64-bit operating system?",options:["8 bytes (64 bits)","16 bytes","4 bytes","Variable size based on function code length"],correctAnswer:0,explanation:"All code address pointers occupy 8 bytes on a 64-bit architecture.",level:"basic"},{question:"What is a Signal Handler in POSIX C?",shortAnswer:"A callback function registered via `signal(SIGINT, handler);` to intercept OS asynchronous events.",explanation:"Takes a function pointer `void (*)(int)` invoked by the OS kernel when signals fire.",hint:"OS interrupt handler callback.",level:"intermediate"},{question:"Can you perform pointer arithmetic like `fp++` on a function pointer in standard C?",shortAnswer:"No, pointer arithmetic on function pointers is illegal in standard ISO C.",explanation:"Functions are not elements of arrays and have no defined size.",hint:"Arithmetic on function pointers is illegal.",level:"intermediate"},{question:"How do you declare an array of 10 function pointers taking `void` and returning `void`?",shortAnswer:"`void (*arr[10])(void);`",explanation:"Declares an array of 10 pointers to functions taking void and returning void.",hint:"void (*arr[10])(void);",level:"intermediate"},{question:"How do you pass extra custom user data into a C callback function without global variables?",shortAnswer:"Pass a context pointer `void *userData` alongside the function pointer (Context Callback pattern).",explanation:"Standard design pattern used across POSIX threads (`pthread_create`), GUI toolkits, and Linux kernel drivers.",hint:"Pass void *userData context pointer.",level:"advanced",codeExample:"void registerCallback(void (*cb)(void*), void *userData);"},{question:"What is `pthread_create()`'s callback function signature in POSIX C?",shortAnswer:"`void* (*start_routine)(void*)`",explanation:"Accepts a `void*` argument and returns a `void*` exit code.",hint:"void* (*start_routine)(void*).",level:"advanced"},{question:"What compiler optimization replaces indirect function pointer calls with direct branch jumps when targets are known?",shortAnswer:"Devirtualization / Indirect Call Promotion.",explanation:"Analyzes call sites to eliminate indirect jump branch misprediction penalties.",hint:"Devirtualization optimization.",level:"advanced"},{question:"What is the danger of casting between incompatible function pointer types?",shortAnswer:"Stack corruption and Undefined Behavior due to mismatched Calling Conventions and argument registers.",explanation:"The caller pushes arguments that the callee reads incorrectly from registers/stack.",hint:"Mismatched calling conventions corrupt stack.",level:"advanced"},{question:"How do you write a generic `filterArray` function using a function pointer predicate in C?",shortAnswer:"Accept a predicate callback: `void filter(int arr[], int n, bool (*predicate)(int));`.",explanation:"Filters elements matching the user-supplied boolean function dynamically.",hint:"Predicate callback taking element and returning bool.",level:"intermediate"},{question:"What is a 'Trampoline' in compiler and systems engineering?",shortAnswer:"A small dynamically generated snippet of machine code on the stack/heap that redirects execution to a target function with wrapped context.",explanation:"Used for nested functions, dynamic hooking, and runtime instrumentation.",hint:"Dynamic runtime code redirection snippet.",level:"advanced"},{question:"What does `atexit(cleanupFunc)` do in `<stdlib.h>`?",shortAnswer:"Registers a function pointer `void (*)(void)` to be called automatically when the program exits normally.",explanation:"Enables automatic file closing, log flushing, and resource cleanup upon termination.",hint:"Registers termination callback.",level:"intermediate"},{question:"How do you declare a function that RETURNS a function pointer?",shortAnswer:"`int (*getOperation(char op))(int, int);` or using `typedef`: `OpFunc getOperation(char op);`.",explanation:"Using `typedef` makes the syntax readable and maintainable.",hint:"Use typedef for functions returning function pointers.",level:"advanced"},{question:"What is the memory segment where function code instructions reside?",shortAnswer:"The Text Segment (Code Segment).",explanation:"Function pointers store memory addresses pointing into the executable `.text` virtual memory region.",hint:".text / Code segment.",level:"basic"},{question:"What is the golden rule for function pointer invocations?",shortAnswer:"Always guard against `NULL` pointers: `if (callback != NULL) callback(args);`.",explanation:"Calling a NULL function pointer triggers an immediate fatal segmentation fault.",hint:"Always check if pointer is non-null before invocation.",level:"basic"}],c=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_007: Pointers & Memory Addresses\r
TOPIC 6: Function Pointers: Syntax, Callbacks & Dispatch Tables\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A FUNCTION POINTER?\r
--------------------------------------------------------------------------------\r
- A pointer storing the entry point memory address of executable machine code\r
  in the \`.text\` (Code) segment.\r
- Declaration Syntax:\r
    return_type (*pointer_name)(param_types);\r
    Example: \`int (*mathFunc)(int, int);\`\r
\r
- Clean Typedef Alias:\r
    typedef int (*MathFunc)(int, int);\r
    MathFunc p = add; // Simple and clear!\r
\r
2. HIGHER-ORDER FUNCTIONS & CALLBACKS\r
--------------------------------------------------------------------------------\r
- Passing functions as arguments allows dynamic behavior at runtime:\r
    void execute(int a, int b, MathFunc op) {\r
        int res = op(a, b); // Invokes passed callback!\r
    }\r
\r
3. DISPATCH TABLES (JUMP TABLES)\r
--------------------------------------------------------------------------------\r
- Array of function pointers replacing long \`switch\` or \`if-else\` trees:\r
    MathFunc ops[4] = {add, subtract, multiply, divide};\r
    int answer = ops[choice](x, y); // Instantaneous O(1) jump!\r
\r
4. QSORT COMPARATOR CONVENTION (<STDLIB.H>)\r
--------------------------------------------------------------------------------\r
    int cmp(const void *a, const void *b) {\r
        return (*(const int*)a - *(const int*)b);\r
    }\r
- Returns < 0 : a comes before b (Ascending)\r
- Returns == 0 : a and b are equal\r
- Returns > 0 : b comes before a (Ascending)\r
\r
5. SAFETY CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Always verify \`if (callback != NULL)\` before calling any function pointer.\r
[✓] Never perform pointer arithmetic on function pointers.\r
[✓] Match exact parameter types and return types to prevent stack corruption.\r
================================================================================\r
`;function v(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_007 · Topic 6"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Functional Systems Architecture"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Function Pointers: Callbacks, Dispatch Tables & qsort Comparators"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master dynamic runtime execution in C. Learn the precise syntax of function pointers, pass callbacks into higher-order functions, eliminate branching latency with $O(1)$ dispatch tables, and implement polymorphic ",e.jsx("code",{children:"qsort()"})," comparators."]})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The TV Remote Speed-Dial"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["In our Barrackpore lab, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Debangshu"})," were building a command parser with 20 nested ",e.jsx("code",{children:"if-else if"})," statements. ",e.jsx("strong",{children:"Sukanta Hui"})," asked: ",e.jsx("em",{children:'"Why make the CPU test 20 conditions on every command when you can jump straight to the function in 1 step?"'})]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"📺 The TV Remote Channel Buttons"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["Instead of pressing 'Channel Up' 50 times in an ",e.jsx("code",{children:"if-else"})," loop, you press button ",e.jsx("strong",{children:"#50"})," on your remote. The TV jumps directly to that channel!"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["An ",e.jsx("strong",{children:"Array of Function Pointers (Dispatch Table)"})," stores function entry addresses. Indexing ",e.jsx("code",{children:"actions[choice]()"})," executes the target routine instantaneously in $O(1)$ time with zero branching delay!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Dispatch Table Jump Architecture"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("text",{x:"460",y:"25",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"Dispatch Table: int (*table[4])(int, int) = {add, subtract, multiply, divide};"}),e.jsxs("g",{transform:"translate(60, 60)",children:[e.jsx("text",{x:"90",y:"-10",textAnchor:"middle",fill:"#f59e0b",className:"text-xs font-bold font-mono",children:"Dispatch Array (RAM)"}),[{name:"add",idx:0,addr:"0x4010"},{name:"sub",idx:1,addr:"0x4040"},{name:"mul",idx:2,addr:"0x4080"},{name:"div",idx:3,addr:"0x40C0"}].map((n,t)=>e.jsxs("g",{transform:`translate(0, ${t*45})`,children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"38",rx:"6",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsxs("text",{x:"15",y:"24",fill:"#38bdf8",className:"font-bold text-xs font-mono",children:["[",n.idx,"]"]}),e.jsx("text",{x:"90",y:"24",textAnchor:"middle",fill:"#fff",className:"font-mono text-xs font-bold",children:n.name}),e.jsx("text",{x:"155",y:"24",textAnchor:"middle",fill:"#94a3b8",className:"text-[10px] font-mono",children:n.addr})]},t))]}),e.jsx("path",{d:"M 260 170 C 360 170, 420 120, 520 120",stroke:"#10b981",strokeWidth:"3",fill:"none",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"390",y:"135",textAnchor:"middle",fill:"#34d399",className:"text-xs font-mono font-bold",children:"table[2](40, 8) → Direct JUMP!"}),e.jsxs("g",{transform:"translate(540, 60)",children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"170",rx:"10",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"150",y:"25",textAnchor:"middle",fill:"#10b981",className:"font-bold text-xs",children:"Executable Code in .text Segment (0x4080)"}),e.jsx("rect",{x:"20",y:"40",width:"260",height:"110",rx:"6",fill:"#1e293b",stroke:"#334155"}),e.jsx("text",{x:"35",y:"70",fill:"#38bdf8",className:"font-mono text-xs font-bold",children:"int multiply(int a, int b) {"}),e.jsx("text",{x:"55",y:"95",fill:"#a7f3d0",className:"font-mono text-xs",children:"return a * b; // 40 * 8 = 320"}),e.jsx("text",{x:"35",y:"125",fill:"#38bdf8",className:"font-mono text-xs",children:"}"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Function Pointer Syntax Breakdown"}),e.jsx("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3 text-xs",children:e.jsxs("div",{className:"font-mono text-sm bg-slate-950 p-4 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("p",{className:"text-sky-300",children:"// 1. Raw Function Pointer Declaration:"}),e.jsx("p",{className:"text-emerald-400 font-bold",children:"int (*funcPtr)(int, int);"}),e.jsxs("p",{className:"text-slate-400 text-xs pl-4",children:["• ",e.jsx("code",{children:"int"}),": Return type",e.jsx("br",{}),"• ",e.jsx("code",{children:"(*funcPtr)"}),": Mandatory parentheses indicating pointer",e.jsx("br",{}),"• ",e.jsx("code",{children:"(int, int)"}),": Parameter argument types"]}),e.jsx("p",{className:"text-sky-300 pt-2",children:"// 2. Clean Typedef Signature:"}),e.jsx("p",{className:"text-emerald-400 font-bold",children:"typedef int (*MathFunc)(int, int);"}),e.jsxs("p",{className:"text-slate-400 text-xs pl-4",children:["• Enables clean variable declarations: ",e.jsx("code",{children:"MathFunc op = add;"})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Function Pointers, Callbacks & qsort Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"FunctionPointersDemo.c"}),") demonstrates calling function pointers directly, higher-order callback functions, an $O(1)$ dispatch table array, and custom ascending/descending comparators for ",e.jsx("code",{children:"qsort()"}),"."]}),e.jsx(i,{fileModule:o,title:"FunctionPointersDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 Function Pointers, Callbacks & Dispatch Tables
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

1. Direct Function Pointer Call:
   • pFunc (address 00007FF619A01420) called with (15, 25): 40

2. Callbacks to Higher-Order Functions:
   • Add(20, 10) = 30
   • Subtract(20, 10) = 10
   • Multiply(20, 10) = 200

3. Calculator Dispatch Table Array:
   • Op [0] 40 + 8 = 48
   • Op [1] 40 - 8 = 32
   • Op [2] 40 * 8 = 320
   • Op [3] 40 / 8 = 5

4. qsort() Sorting with Custom Function Pointer Comparators:
   • Ascending Sort : [ 42 63 77 85 99 ]
   • Descending Sort: [ 99 85 77 63 42 ]`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Calling Conventions"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Parentheses in Declaration:"})," Writing ",e.jsx("code",{children:"int *fp(int, int);"})," declares a normal function that returns a pointer to ",e.jsx("code",{children:"int"}),"! You MUST write ",e.jsx("code",{children:"int (*fp)(int, int);"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Calling NULL Function Pointers:"})," Calling ",e.jsx("code",{children:"fp(x, y)"})," when ",e.jsx("code",{children:"fp == NULL"})," causes an instant fatal Segmentation Fault! Always check ",e.jsx("code",{children:"if (fp != NULL)"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Type Casting Incompatible Function Signatures:"})," Calling a function with mismatched arguments through a cast function pointer corrupts CPU register state."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["How do modern operating systems and GUI engines handle button clicks, mouse moves, and timer alarms?",e.jsx("em",{children:"(Hint: Every event listener is a registered function pointer callback!)"})]})]}),e.jsx("section",{children:e.jsx(a,{title:"Module 002_007 Topic 6 FAQs: Function Pointers",questions:l})}),e.jsx("section",{children:e.jsx(r,{content:c,title:"Module 002_007 Topic 6 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 6 Note",downloadFileName:"module_002_007_topic6_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Function pointers turn static code into dynamic, extensible software architectures. Master dispatch tables and callbacks, and you will understand how modern operating system kernels and game engines operate. — Sukanta Hui"})})]})}export{v as default};
