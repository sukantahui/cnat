import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DjboCeUK.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const r=`/**
 * ============================================================================
 * Program: ParameterPassingDemo.c
 * Module: 001_004 - Functions & Modular Programming
 * Topic 1: Parameter Passing: Call by Value vs Pointers (Call by Reference)
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>

/* ============================================================================
 * 1. CALL BY VALUE: Works on a duplicate copy; cannot modify original!
 * ============================================================================ */
void trySwapByValue(int x, int y) {
    int temp = x;
    x = y;
    y = temp;
    printf("   [Inside trySwapByValue] Copy X = %d, Copy Y = %d\\n", x, y);
}

/* ============================================================================
 * 2. PASSING POINTERS (SIMULATED CALL BY REFERENCE): Modifies caller variables!
 * ============================================================================ */
void swapByPointer(int *ptrX, int *ptrY) {
    int temp = *ptrX;
    *ptrX = *ptrY;
    *ptrY = temp;
    printf("   [Inside swapByPointer] Memory values at %p and %p swapped!\\n", (void*)ptrX, (void*)ptrY);
}

/* ============================================================================
 * 3. MULTIPLE OUT-PARAMETERS VIA POINTERS: Returns quotient and remainder
 * ============================================================================ */
void divideWithRemainder(int dividend, int divisor, int *quotientOut, int *remainderOut) {
    if (divisor != 0) {
        *quotientOut = dividend / divisor;
        *remainderOut = dividend % divisor;
    }
}

int main(void) {
    printf("===================================================================\\n");
    printf("     CALL BY VALUE VS PASSING POINTERS - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    /* Test 1: Call by Value Failure */
    int a = 10, b = 20;
    printf("--- [Test 1] Call by Value (Passing Copies) ---\\n");
    printf("Before Function Call : A = %d, B = %d\\n", a, b);
    trySwapByValue(a, b);
    printf("After Function Call  : A = %d, B = %d (UNMODIFIED!)\\n\\n", a, b);

    /* Test 2: Passing Pointers Success */
    printf("--- [Test 2] Passing Pointers (Simulated Call by Reference) ---\\n");
    printf("Before Function Call : A = %d, B = %d\\n", a, b);
    swapByPointer(&a, &b); // Pass memory addresses
    printf("After Function Call  : A = %d, B = %d (SUCCESSFULLY SWAPPED!)\\n\\n", a, b);

    /* Test 3: Returning Multiple Results via Out-Parameters */
    int num = 47, den = 6;
    int q = 0, r = 0;
    printf("--- [Test 3] Multiple Return Out-Parameters ---\\n");
    divideWithRemainder(num, den, &q, &r);
    printf("Dividend = %d, Divisor = %d -> Quotient = %d, Remainder = %d\\n", num, den, q, r);

    printf("===================================================================\\n");
    return 0;
}
`,i=[{question:"What is 'Call by Value' in C parameter passing?",shortAnswer:"The mechanism where a copy of the actual argument's value is passed to the function's formal parameter on the call stack, isolating the caller's variable from modifications.",explanation:"Any assignment made to the formal parameter inside the function modifies only the temporary local copy in the callee's stack frame.",hint:"Passes duplicate copy of data.",level:"basic"},{question:"Why does the classic `swap(a, b)` function fail when using Call by Value?",shortAnswer:"Because `swap` only swaps the values of the local copies `x` and `y` inside its own stack frame; when the function returns, its frame is destroyed, leaving the caller's `a` and `b` unchanged.",explanation:"To mutate caller variables, you must pass memory addresses (`&a, &b`).",hint:"Swaps temporary stack copies instead of original variables.",level:"basic",codeExample:`void swap(int x, int y) {
    int temp = x;
    x = y;
    y = temp;
} // Fails to swap caller variables!`},{question:"Does C support true native 'Call by Reference' like C++ or Java?",shortAnswer:"Strictly speaking, NO. In C, ALL parameters are passed strictly by value; C simulates Call by Reference by passing the pointer (memory address) by value!",explanation:"Passing an address `&x` passes the address value into a pointer variable `int *ptr`, which can then be dereferenced (`*ptr`) to modify the caller's memory.",hint:"C passes pointers by value to simulate call by reference.",level:"intermediate"},{question:"What is the Dereference Operator (`*`) and how is it used in parameter passing?",shortAnswer:"The unary `*` operator accesses and modifies the value residing at the target memory address stored inside a pointer parameter.",explanation:"In `void increment(int *p) { (*p)++; }`, `*p` directly modifies the variable at address `p`.",hint:"Accesses value at pointer address.",level:"basic"},{question:"What is the Address-of Operator (`&`) and when is it used during function invocation?",shortAnswer:"The unary `&` operator retrieves the physical RAM memory address of a variable, which is passed as an argument when calling a function that expects a pointer.",explanation:"`swap(&a, &b)` passes the addresses of `a` and `b` to `swap(int *ptrA, int *ptrB)`.",hint:"Retrieves memory address of variable.",level:"basic"},{question:"How do you return multiple values from a single C function?",shortAnswer:"By passing pointers to caller variables as 'Out-Parameters', allowing the function to write multiple computed results directly into the caller's memory.",explanation:"Example: `void getStats(int a, int b, int *sum, int *diff)`.",hint:"Pointer out-parameters.",level:"intermediate",codeExample:`void compute(int a, int b, int *sum, int *prod) {
    *sum = a + b;
    *prod = a * b;
}`},{question:"How are Arrays passed into functions in C?",shortAnswer:"Arrays automatically 'decay' into pointers to their first element (`arr[0]`), so arrays are always passed by pointer address in C functions.",explanation:"`void printArr(int arr[], int size)` is syntactically identical to `void printArr(int *arr, int size)`.",hint:"Arrays decay to pointer to first element.",level:"intermediate"},{question:"Why must you pass the size of an array alongside the array parameter in C?",shortAnswer:"Because array decay strips away compile-time size information; inside the function, `sizeof(arr)` yields only the size of a pointer (4 or 8 bytes), NOT the array length.",explanation:"Always pass an explicit `int size` argument when passing arrays to functions.",hint:"sizeof on decayed array yields pointer size, not array length.",level:"intermediate"},{question:"How can you prevent a function from modifying an array or pointer passed to it?",shortAnswer:"Qualify the pointer parameter with `const`: `void display(const int *arr, int size);`",explanation:"The compiler will raise an error if any code inside the function attempts to modify `*arr`.",hint:"Use const pointer qualification.",level:"basic",codeExample:`void printData(const int *data, int n) {
    // *data = 100; // Compiler Error: assignment of read-only location!
}`},{question:"What is the difference between `const int *ptr` and `int * const ptr` in function parameters?",shortAnswer:"- `const int *ptr`: Pointer to constant data (the data cannot be changed through the pointer).\n- `int * const ptr`: Constant pointer to mutable data (the pointer address cannot point to another variable).",explanation:"`const int * const ptr` makes both the address and the pointed data read-only.",hint:"Read-only data vs fixed pointer address.",level:"advanced"},{question:"What are the performance trade-offs between Call by Value and Passing Pointers?",shortAnswer:"Passing small primitives (`int`, `char`, `float`) by value is fast and safe; passing large `struct` objects (e.g. 1,000 bytes) by value causes expensive memory copying, so passing `const StructType *` is much faster.",explanation:"Pointers pass only 8 bytes of address on 64-bit systems regardless of data size.",hint:"Small types by value; large structs by const pointer.",level:"intermediate"},{question:"What happens if you pass a `NULL` pointer into a function expecting a valid address?",shortAnswer:"Attempting to dereference `*ptr` when `ptr == NULL` results in a Segmentation Fault (`SIGSEGV`) and immediate program crash.",explanation:"Always include defensive null checks: `if (ptr == NULL) return;`.",hint:"Dereferencing NULL triggers segmentation fault crash.",level:"basic"},{question:"What is Defensive Parameter Validation (Null Guard) in C functions?",shortAnswer:"Checking pointers for `NULL` and boundary values (e.g. `size <= 0`) at the very top of a function before executing any logic.",explanation:"Prevents crashes and undefined behavior.",hint:"Checking ptr == NULL at start of function.",level:"basic",codeExample:`void processBuffer(int *buf, int len) {
    if (buf == NULL || len <= 0) return; // Guard clause
    // Safe to process buf
}`},{question:"Can you modify a caller's pointer itself (make it point elsewhere) inside a function?",shortAnswer:"Yes, by passing a Double Pointer (`int **pptr`), which passes the memory address of the pointer variable itself.",explanation:"Used extensively in memory allocation functions like `void allocateBuffer(int **buf, size_t size)`.",hint:"Pass double pointer to modify pointer address.",level:"advanced"},{question:"How does the Call Stack represent parameters during Call by Value vs Pointer Passing?",shortAnswer:"In Call by Value, the stack frame stores the complete binary value of the argument; in Pointer Passing, the stack frame stores an 8-byte hexadecimal RAM address pointing to the caller's stack frame.",explanation:"Dereferencing reads/writes across stack frame boundaries into the caller's memory.",hint:"Data bits vs memory address in stack frame.",level:"intermediate"},{question:"Why should you never return the address of a local automatic variable from a function?",shortAnswer:"Because local variables reside in the function's stack frame, which is destroyed upon `return`. Returning its address yields a Dangling Pointer pointing to invalid memory.",explanation:"Subsequent function calls will overwrite that memory with new stack frames.",hint:"Stack frame destruction creates dangling pointers.",level:"intermediate",codeExample:`int* badFunction(void) {
    int temp = 42;
    return &temp; // DANGEROUS BUG! Returns pointer to dead stack memory!
}`},{question:"How can a function safely return dynamically allocated data to the caller?",shortAnswer:"Allocate the data on the Heap using `malloc()` / `calloc()`, which persists in memory until explicitly released with `free()`.",explanation:"Heap memory outlives function stack frames.",hint:"Heap memory allocated via malloc persists after return.",level:"intermediate"},{question:"What is an In-Parameter vs an Out-Parameter vs an In-Out Parameter?",shortAnswer:"- In-Parameter: Supplies read-only input data to the function (`const int *in`).\n- Out-Parameter: Receives output results from the function (`int *out`).\n- In-Out Parameter: Passes initial data that is modified in-place by the function (`int *inout`).",explanation:"Standard industrial API parameter classifications.",hint:"Input only, output destination, in-place modification.",level:"intermediate"},{question:"How do you pass a struct by value vs by reference in C?",shortAnswer:"- By Value: `void display(Student s)` (copies entire struct memory).\n- By Reference: `void display(const Student *s)` (passes 8-byte address; access fields with `s->name`).",explanation:"Arrow operator `->` combines dereference and member access `(*s).name`.",hint:"Dot notation on value; arrow operator -> on pointer.",level:"basic"},{question:"What happens if an actual argument is an expression like `square(x + 5)`?",shortAnswer:"The expression `x + 5` is evaluated first in the caller's context, and the resulting temporary value is passed into the function parameter.",explanation:"C uses Eager Evaluation (Applicative Order) for argument expressions.",hint:"Expression evaluated first, result passed by value.",level:"basic"},{question:"Is the order of evaluation of function arguments specified in C?",shortAnswer:'NO! The order of argument evaluation (e.g. `func(f1(), f2())` or `printf("%d %d", i++, i++)`) is Unspecified Behavior in C.',explanation:"Never write expressions with side effects on the same variable across function argument lists.",hint:"Argument evaluation order is unspecified.",level:"advanced"},{question:"What is the Photocopy Sheet Analogy taught by Sukanta Hui for Call by Value?",shortAnswer:"Call by value is like handing a student a photocopy of your notes. If they scribble or erase on the photocopy, your original master document remains pristine and untouched!",explanation:"Passing pointers is like handing the student a laser pointer directed at the master document on the whiteboard.",hint:"Photocopy vs laser pointer directed at original master.",level:"basic"},{question:"How do you pass 2D arrays to functions in C?",shortAnswer:"Specify all column dimensions in the prototype: `void process(int rows, int cols, int arr[][COLS])` or in C99 use variable-length array parameters: `void process(int r, int c, int arr[r][c])`.",explanation:"Column dimensions are required by the compiler to compute row-major byte offsets.",hint:"Column dimension required for row-major offset math.",level:"intermediate"},{question:"What is Pass-by-Const-Pointer and why is it considered the best practice for read-only structures?",shortAnswer:"It passes a memory address (avoiding expensive copying of large structures) while guaranteeing that the function cannot accidentally mutate the caller's data.",explanation:"Combines the performance speed of pointers with the safety of call by value.",hint:"Speed of pointer with safety of read-only const.",level:"intermediate"},{question:"Why should every C programmer master pointer parameter passing before studying Data Structures?",shortAnswer:"Because linked lists, binary trees, dynamic graphs, and memory management algorithms rely completely on pointer parameter passing to manipulate node pointers and allocate heap buffers.",explanation:"Pointers and parameter mechanics are the foundation of all advanced computer science in C.",hint:"Essential foundation for linked lists, trees, and memory management.",level:"basic"}],o=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_004: Functions & Modular Programming
Topic 1: Parameter Passing: Call by Value vs Passing Pointers (Call by Reference)
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: Why doesn't swap(a, b) swap my variables in C?
A: In C, standard parameters are passed BY VALUE.
   - The function receives a separate duplicate copy on its own stack frame.
   - Modifying the copy changes NOTHING in the caller's stack frame!

THE PHOTOCOPY ANALOGY:
  - Call by Value   : Giving a classmate a PHOTOCOPY of your notes. If they scribble
                      on it, your original document remains pristine!
  - Passing Pointers: Giving them the exact GPS COORDINATES to your house. Any changes
                      made there alter the original physical location!

2. COMPARISON: CALL BY VALUE VS PASSING POINTERS:
--------------------------------------------------------------------------------
Feature           | Call by Value            | Passing Pointers (Reference)
------------------+--------------------------+----------------------------------
Argument Passed   | Exact copy of data value | Memory address of variable (&var)
Parameter Type    | Primitive type (int x)   | Pointer type (int *ptr)
Caller Mutation?  | NO (Caller is isolated)  | YES (Can modify via *ptr)
Memory Overhead   | Copies data bytes        | Only 8 bytes of address
Multiple Outputs? | NO (Single return only)  | YES (Multiple out-parameters)

3. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. To modify caller variables, ALWAYS pass the address using '&' at call site
   and dereference using '*' inside the function!
2. When passing large structures for read-only inspection, use 'const Struct *'
   to avoid copying overhead while preventing accidental modifications!
3. NEVER return the address of a local automatic stack variable!
================================================================================
`;function b(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_004 · Topic 1"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Parameter Passing & Pointer Semantics"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Parameter Passing Mechanisms: Call by Value vs Passing Pointers"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master the mechanics of data transmission across stack frame boundaries. Understand why C passes everything strictly by value, how passing pointer addresses simulates call-by-reference, and how to return multiple results using out-parameters."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border-2 border-emerald-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 text-xl border border-emerald-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-emerald-200 tracking-tight",children:"Teacher's Corner: The Great Swap Mystery & The Photocopy Analogy"}),e.jsx("p",{className:"text-xs text-emerald-300/80",children:"A crystal-clear classroom breakdown by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"📄"})," Step 1: The Photocopy Sheet vs GPS Coordinates Analogy"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Debangshu"})," wrote a function to swap two numbers, their code looked like this:"]}),e.jsxs("div",{className:"p-4 bg-rose-950/30 border border-rose-800/40 rounded-xl space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-rose-400 font-bold block font-sans",children:"❌ Why this fails to swap the original variables:"}),e.jsx("pre",{className:"text-slate-200",children:`void swap(int x, int y) {
    int temp = x;
    x = y;
    y = temp;
} // 'x' and 'y' are just local copies on swap's stack frame!
  // When swap() finishes, its stack frame vanishes into thin air!`})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Imagine handing a student a ",e.jsx("strong",{children:"photocopy"})," of your handwritten notebook. If that student erases lines or spills ink on their photocopy, your original notebook on your desk remains 100% pristine and untouched! That is ",e.jsx("strong",{children:"Call by Value"}),"."]}),e.jsxs("p",{className:"text-sm text-emerald-300 leading-relaxed",children:["To actually modify the notebook on your desk, you must give the student the ",e.jsx("strong",{children:"exact GPS coordinates (Memory Address `&var`)"})," to your desk and hand them a master key (`*ptr`). That is ",e.jsx("strong",{children:"Passing Pointers"}),"!"]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"🗝️"})," Step 2: The Two Key Symbols You Must Master"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30 space-y-2",children:[e.jsx("span",{className:"text-sky-300 font-bold text-sm block",children:"1. The Address-Of Operator (`&`):"}),e.jsxs("p",{className:"text-slate-300",children:["Used at the ",e.jsx("strong",{children:"Call Site"})," in ",e.jsx("code",{children:"main()"})," to obtain the memory address of the variable:"]}),e.jsx("code",{className:"bg-slate-900 px-2 py-1 rounded text-sky-300 font-mono block",children:"swap(&a, &b); // Passes RAM addresses"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2",children:[e.jsx("span",{className:"text-emerald-300 font-bold text-sm block",children:"2. The Dereference Operator (`*`):"}),e.jsxs("p",{className:"text-slate-300",children:["Used inside the ",e.jsx("strong",{children:"Function Body"})," to reach through the pointer and manipulate the original data:"]}),e.jsx("code",{className:"bg-slate-900 px-2 py-1 rounded text-emerald-300 font-mono block",children:"*ptrA = *ptrB; // Mutates original memory"})]})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore diverse parameter passing architectures: in-place mutators, multiple out-parameters, array decay, and const-safe pointers"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: In-Place Score Incrementer"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"Pointer In-Out"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Directly increments a caller's score variable without needing assignment return."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`void awardBonusPoints(int *scorePtr, int bonus) {
    if (scorePtr == NULL) return; // Defensive null check
    *scorePtr += bonus; // Directly mutates caller variable!
}

// In caller:
int score = 85;
awardBonusPoints(&score, 10); // score becomes 95`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: Returning Multiple Values"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"Out-Parameters"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Computes both the quotient and remainder in a single function invocation."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`void divide(int a, int b, int *quotient, int *remainder) {
    if (b == 0 || quotient == NULL || remainder == NULL) return;
    *quotient = a / b;
    *remainder = a % b;
}

// In caller:
int q, r;
divide(47, 6, &q, &r); // q = 7, r = 5`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Passing Arrays to Functions"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"Array Decay"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Arrays decay into pointers; always pass the size parameter explicitly!"}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`double calculateAverage(const int *arr, int size) {
    if (arr == NULL || size <= 0) return 0.0;
    long long sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i]; // const prevents accidental edits!
    }
    return (double)sum / size;
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: High-Speed Struct Passing"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Const Struct*"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Avoids copying large structures while preserving read-only safety with ",e.jsx("code",{children:"const"}),"."]}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`typedef struct {
    int id;
    char name[64];
    double balance;
} Account;

void displayAccount(const Account *acc) {
    if (acc == NULL) return;
    // Arrow operator -> combines dereferencing and field access!
    printf("ID: %d | Holder: %s | Bal: %.2f\\n", acc->id, acc->name, acc->balance);
}`})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Call by Value vs Pointer Dereferencing"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"Memory Stack Layout: Caller Frame vs Callee Frame Dereferencing"}),e.jsxs("g",{transform:"translate(60, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"280",height:"170",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"28",textAnchor:"middle",fill:"#38bdf8",className:"font-mono text-sm font-bold",children:"main() Stack Frame"}),e.jsx("rect",{x:"20",y:"45",width:"240",height:"45",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"35",y:"72",fill:"#e2e8f0",className:"font-mono text-xs",children:"int a = 10;"}),e.jsx("text",{x:"245",y:"72",textAnchor:"end",fill:"#f59e0b",className:"font-mono text-[10px]",children:"Addr: 0x7fff..10"}),e.jsx("rect",{x:"20",y:"105",width:"240",height:"45",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"35",y:"132",fill:"#e2e8f0",className:"font-mono text-xs",children:"int b = 20;"}),e.jsx("text",{x:"245",y:"132",textAnchor:"end",fill:"#f59e0b",className:"font-mono text-[10px]",children:"Addr: 0x7fff..14"})]}),e.jsxs("g",{transform:"translate(560, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"300",height:"170",rx:"12",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"150",y:"28",textAnchor:"middle",fill:"#34d399",className:"font-mono text-sm font-bold",children:"swapByPointer() Frame"}),e.jsx("rect",{x:"20",y:"45",width:"260",height:"45",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"35",y:"72",fill:"#34d399",className:"font-mono text-xs",children:"int *ptrX = 0x7fff..10;"}),e.jsx("rect",{x:"20",y:"105",width:"260",height:"45",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"35",y:"132",fill:"#34d399",className:"font-mono text-xs",children:"int *ptrY = 0x7fff..14;"})]}),e.jsx("path",{d:"M 580 137 C 460 110, 420 110, 320 137",stroke:"#34d399",strokeWidth:"2.5",strokeDasharray:"6,4"}),e.jsx("path",{d:"M 580 162 C 460 170, 420 170, 320 197",stroke:"#34d399",strokeWidth:"2.5",strokeDasharray:"6,4"}),e.jsx("text",{x:"450",y:"110",textAnchor:"middle",fill:"#34d399",className:"text-[11px] font-mono font-bold",children:"*ptrX reaches into main()"}),e.jsx("text",{x:"450",y:"225",textAnchor:"middle",fill:"#34d399",className:"text-[11px] font-mono font-bold",children:"*ptrY reaches into main()"})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: ParameterPassingDemo.c"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"ParameterPassingDemo.c"}),") demonstrates the failure of call-by-value swapping, the success of pointer-based swapping, and multiple return out-parameters."]}),e.jsx(t,{fileModule:r,title:"ParameterPassingDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     CALL BY VALUE VS PASSING POINTERS - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [Test 1] Call by Value (Passing Copies) ---
Before Function Call : A = 10, B = 20
   [Inside trySwapByValue] Copy X = 20, Copy Y = 10
After Function Call  : A = 10, B = 20 (UNMODIFIED!)

--- [Test 2] Passing Pointers (Simulated Call by Reference) ---
Before Function Call : A = 10, B = 20
   [Inside swapByPointer] Memory values at 0x7ffd5820 and 0x7ffd5824 swapped!
After Function Call  : A = 20, B = 10 (SUCCESSFULLY SWAPPED!)

--- [Test 3] Multiple Return Out-Parameters ---
Dividend = 47, Divisor = 6 -> Quotient = 7, Remainder = 5
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Returning Local Stack Address:"})," Never return the address of a local variable (",e.jsx("code",{children:"return &localVar;"}),") because its stack memory is destroyed upon return!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Address-Of Operator (&):"})," Forgetting ",e.jsx("code",{children:"&"})," when calling a pointer function (e.g. ",e.jsx("code",{children:"swap(a, b)"})," instead of ",e.jsx("code",{children:"swap(&a, &b)"}),") causes type mismatch compilation errors."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Dereferencing NULL Pointers:"})," Always check if a pointer is ",e.jsx("code",{children:"NULL"})," before accessing ",e.jsx("code",{children:"*ptr"})," to avoid Segmentation Fault crashes."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Why does standard C not have reference variables like C++ (`int &ref = x;`), requiring programmers to explicitly use `*` and `&`? How does this explicit syntax make memory mutations obvious when reading large C codebases?"})]}),e.jsx("section",{children:e.jsx(a,{title:"Module 001_004 Topic 1 FAQs: Parameter Passing",questions:i})}),e.jsx("section",{children:e.jsx(s,{content:o,title:"Module 001_004 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_004_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(n,{note:"Remember the photocopy analogy: modifying a photocopy doesn't change your original notebook! Pass memory addresses with '&' and dereference with '*' to alter caller data! — Sukanta Hui"})})]})}export{b as default};
