import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as a}from"./CFileLoader-Cyf0mDYr.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`/**
 * ============================================================================
 * Program: VariableScopeDemo.c
 * Module: 001_004 - Functions & Modular Programming
 * Topic 2: Variable Scope & Lifetime: Local/Block vs Global/File Scope
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>

/* ============================================================================
 * 1. GLOBAL / FILE SCOPE VARIABLE
 * Accessible across all functions in this translation unit; lives for program duration
 * ============================================================================ */
int globalSystemCounter = 100;
const double GLOBAL_TAX_RATE = 0.18;

void demonstrateGlobalAccess(void) {
    printf("   [demonstrateGlobalAccess] Reading globalSystemCounter = %d\\n", globalSystemCounter);
    globalSystemCounter += 50;
    printf("   [demonstrateGlobalAccess] Updated globalSystemCounter = %d\\n", globalSystemCounter);
}

void demonstrateLocalShadowing(void) {
    /* LOCAL VARIABLE: Shadows (masks) the outer globalSystemCounter variable */
    int globalSystemCounter = 999;
    printf("   [demonstrateLocalShadowing] Local Shadowed Value = %d\\n", globalSystemCounter);
}

void demonstrateBlockScope(void) {
    int outerX = 10;
    printf("   [demonstrateBlockScope] Outer block: outerX = %d\\n", outerX);

    {
        /* INNER NESTED BLOCK */
        int innerY = 20;
        int outerX = 55; /* Shadows outerX inside this block */
        printf("      [Nested Block] innerY = %d, Shadowed outerX = %d\\n", innerY, outerX);
    } // innerY is destroyed here!

    printf("   [demonstrateBlockScope] After nested block: outerX = %d (Restored)\\n", outerX);
    // printf("%d", innerY); // COMPILER ERROR: innerY undeclared outside block!
}

int main(void) {
    printf("===================================================================\\n");
    printf("     VARIABLE SCOPE & LIFETIME LAB - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    /* 1. Global Scope Interaction */
    printf("--- [1] Global Variable Mutation Across Functions ---\\n");
    printf("Initial globalSystemCounter in main() = %d\\n", globalSystemCounter);
    demonstrateGlobalAccess();
    printf("After function call in main() = %d\\n\\n", globalSystemCounter);

    /* 2. Variable Shadowing */
    printf("--- [2] Variable Shadowing (Local Masks Global) ---\\n");
    demonstrateLocalShadowing();
    printf("Global globalSystemCounter in main() remains = %d\\n\\n", globalSystemCounter);

    /* 3. Block Scope & Lifetime */
    printf("--- [3] Block Scope & Lifetime Inside Braces { } ---\\n");
    demonstrateBlockScope();

    printf("\\n===================================================================\\n");
    return 0;
}
`,s=[{question:"What is the difference between Variable Scope, Visibility, and Lifetime in C?",shortAnswer:`- Scope: The spatial region of code where a variable's identifier is recognized.
- Visibility: Whether the variable can be directly accessed (can be hidden by shadowing).
- Lifetime (Duration): The time span during program execution when storage memory is allocated for the variable.`,explanation:"A local variable has block scope and automatic duration; a global variable has file scope and static duration.",hint:"Code region (scope) vs access rights (visibility) vs memory existence (lifetime).",level:"basic"},{question:"What is Local / Block Scope in C?",shortAnswer:"A variable declared inside a code block enclosed in `{}` is accessible only from its declaration point to the closing brace `}`.",explanation:"Memory is allocated when entering the block and automatically reclaimed upon exiting.",hint:"Accessible only within surrounding braces.",level:"basic",codeExample:`void test(void) {
    int x = 10; // Local scope inside test()
    if (x > 5) {
        int y = 20; // Block scope inside if
    }
    // y is inaccessible here!
}`},{question:"What is Global / File Scope in C?",shortAnswer:"A variable declared outside of all functions, accessible by any function defined below its declaration within that source file (translation unit).",explanation:"Stored in the data segment (.data / .bss) and persists for the entire program execution.",hint:"Declared outside all functions.",level:"basic"},{question:"What is Variable Shadowing (Name Masking)?",shortAnswer:"When an inner block or local function declares a variable with the exact same name as an outer or global variable, the inner declaration hides (masks) the outer one within that block.",explanation:"Inside the inner block, all references resolve to the inner variable.",hint:"Inner declaration masks outer variable with same name.",level:"intermediate",codeExample:`int count = 100; // Global

void func(void) {
    int count = 5; // Shadows global count
    printf("%d\\n", count); // Prints 5
}`},{question:"Why are non-const Global Variables generally discouraged in modern software engineering?",shortAnswer:"Because any function anywhere can silently modify a global variable, creating hidden coupling, race conditions in multithreaded code, and making debugging nearly impossible.",explanation:"Prefer passing parameters or using encapsulation with `static` file scope.",hint:"Uncontrolled side effects and multithreading bugs.",level:"basic"},{question:"What is Function Prototype Scope?",shortAnswer:"The scope of parameter names declared within a function prototype (declaration), which extends only to the end of the prototype signature.",explanation:"In `double calc(double radius);`, `radius` ceases to exist outside that declaration line.",hint:"Parameter names exist only within prototype declaration.",level:"intermediate"},{question:"What is Automatic Storage Duration (Lifetime)?",shortAnswer:"The lifetime of local variables: allocated on the CPU stack when entering the declaring block and automatically deallocated when the block terminates.",explanation:"Default for all variables declared inside functions (`auto` keyword).",hint:"Stack allocated; destroyed on block exit.",level:"basic"},{question:"What is Static Storage Duration (Lifetime)?",shortAnswer:"Storage allocated once at program startup in the global/static data segment that persists throughout the entire execution until program termination.",explanation:"Applies to global variables and local variables marked with `static`.",hint:"Lives for full duration of program execution.",level:"basic"},{question:"Can two different functions declare local variables with the same name without conflict?",shortAnswer:"Yes, completely! Because each function's local variables reside in separate, isolated stack frames and exist only within their own function scope.",explanation:"`funcA()`'s `int x` has no relationship or memory collision with `funcB()`'s `int x`.",hint:"Isolated stack frames prevent naming conflicts.",level:"basic"},{question:"What is C99 Loop-Header Scope (e.g. `for (int i = 0; ...)` )?",shortAnswer:"Variables declared inside the `for` loop initialization clause have block scope restricted strictly to the body of that `for` loop.",explanation:"The variable `i` is destroyed as soon as the loop finishes iterating.",hint:"Loop counter exists only inside the loop.",level:"basic",codeExample:`for (int i = 0; i < 5; i++) {
    printf("%d ", i);
}
// i is NOT accessible here in C99!`},{question:"What default initial value do Global variables have vs Local variables?",shortAnswer:`- Global Variables: Automatically zero-initialized by the OS (0, 0.0, NULL, '\\0').
- Local Automatic Variables: Contain uninitialized random garbage stack bits!`,explanation:"Reading an uninitialized local variable invokes Undefined Behavior.",hint:"Globals default to 0; locals contain garbage.",level:"basic"},{question:"Where in computer memory are Global variables stored vs Local variables?",shortAnswer:"- Global Variables: Stored in the Data Segment (`.data` for initialized, `.bss` for uninitialized).\n- Local Variables: Stored on the runtime Call Stack.",explanation:"Stack memory expands and contracts rapidly with function invocations.",hint:"Data segment vs runtime call stack.",level:"intermediate"},{question:"What is the Personal Bedroom vs Public Park Analogy for Scope?",shortAnswer:`- Local Scope is like your personal bedroom: private to you, cleanable anytime.
- Global Scope is like a public city park: anyone can walk in, drop trash, or move benches, affecting everyone in town!`,explanation:"Sukanta Hui's classic intuitive classroom analogy.",hint:"Private bedroom vs public city park.",level:"basic"},{question:"What is a Translation Unit in C?",shortAnswer:"A single source file (`.c`) along with all header files (`.h`) directly and indirectly included by `#include` directives after preprocessor expansion.",explanation:"The fundamental input unit processed by the compiler.",hint:"Source file + all included headers after preprocessing.",level:"intermediate"},{question:"How do you declare a Global Constant safely in C?",shortAnswer:"Use the `const` type qualifier: `const double PI = 3.141592653589793;` or `#define PI ...`.",explanation:"Prevents any function from mutating the global configuration value.",hint:"const qualifier prevents accidental global mutation.",level:"basic"},{question:"What happens if you define two global variables with the exact same name in the same file?",shortAnswer:"The compiler will halt with a 'redefinition of variable' error.",explanation:"Global identifiers in the same translation unit must be unique.",hint:"Redefinition compiler error.",level:"basic"},{question:"What is Variable Lifetime vs Memory Reachability?",shortAnswer:"A variable may still exist in physical RAM (lifetime active), but code may lose the pointer address or scope to reach it (loss of reachability), creating a memory leak or shadow.",explanation:"Static local variables exist forever, but are visible only within their declaring function.",hint:"Existence in memory vs ability to access.",level:"advanced"},{question:"What is Thread-Local Storage (`_Thread_local` in C11)?",shortAnswer:"A storage duration where each concurrent thread gets its own distinct, independent copy of a variable that persists for the lifetime of that thread.",explanation:"Eliminates race conditions without requiring mutex locks.",hint:"Unique variable copy per thread.",level:"advanced"},{question:"Can an inner block access an outer block's variable if the names are different?",shortAnswer:"Yes! Nested inner blocks inherit full read and write access to all non-shadowed variables declared in enclosing outer blocks.",explanation:"Lexical scoping enables inner algorithms to access parent variables.",hint:"Inner blocks can see non-shadowed outer variables.",level:"basic"},{question:"What compiler flag detects accidental variable shadowing?",shortAnswer:"`-Wshadow` in GCC and Clang.",explanation:"Emits a warning whenever a local variable declaration shadows another local or global variable.",hint:"-Wshadow warning flag.",level:"intermediate"},{question:"How does the OS `.bss` section optimize executable file size for uninitialized globals?",shortAnswer:"The `.bss` segment does not store megabytes of actual zero bytes in the `.exe` binary on disk; it simply stores a number indicating total size, and the OS fills the RAM with zeros at program launch!",explanation:"Keeps executable files small on disk.",hint:"Stores only size metadata; OS zeroes memory on load.",level:"advanced"},{question:"What is Dynamic Storage Duration (Heap Allocation)?",shortAnswer:"Memory explicitly requested at runtime using `malloc()`, `calloc()`, or `realloc()`, which lives until explicitly freed with `free()` or program exit.",explanation:"Managed manually by the programmer, not tied to function blocks or scopes.",hint:"Heap memory allocated via malloc and freed via free.",level:"intermediate"},{question:"What is Scope Resolution in nested blocks with 3 levels of identical variable names?",shortAnswer:"The compiler resolves the identifier to the declaration in the innermost enclosing scope.",explanation:"Innermost declaration always wins.",hint:"Innermost matching declaration takes precedence.",level:"intermediate"},{question:"Why does returning a pointer to a global variable work safely, unlike returning a pointer to a local variable?",shortAnswer:"Because global variables reside in static data memory that never dies when a function returns, so the returned pointer remains 100% valid!",explanation:"Local variables on the stack die on return; globals live for the whole program.",hint:"Global memory outlives function returns.",level:"intermediate"},{question:"What is Sukanta Hui's golden advice regarding variable scope in C?",shortAnswer:"Keep the scope of every variable as narrow and local as possible! Declare variables right before their first use, and avoid globals unless modeling true system-wide hardware states!",explanation:"Minimizing scope reduces cognitive load and eliminates unintended side-effect bugs.",hint:"Keep scope as narrow and local as possible.",level:"basic"}],l=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_004: Functions & Modular Programming
Topic 2: Variable Scope & Lifetime: Local/Block Scope vs Global/File Scope
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: What is the difference between Scope and Lifetime?
A: - Scope    = "WHERE can you see and call the variable?" (Spatial region in code)
   - Lifetime = "WHEN does the variable exist in physical RAM?" (Time duration)

THE BEDROOM VS PUBLIC PARK ANALOGY:
  - Local Scope  : Your personal private bedroom. Only you can enter; when you leave,
                   it gets cleaned up automatically.
  - Global Scope : A public city park in Barrackpore. Anyone from anywhere can enter,
                   move the benches, or leave trash, affecting the whole town!

2. SCOPE COMPARISON MATRIX:
--------------------------------------------------------------------------------
Scope Type        | Declared Where?            | Visibility / Accessibility
------------------+----------------------------+--------------------------------
Block / Local     | Inside { } braces          | Only inside declaring block
Function          | Function parameter list    | Throughout that function body
File / Global     | Outside all functions      | Across all functions in file
Loop-Header (C99) | Inside for(int i=0; ...)   | Strictly inside that loop body

3. VARIABLE SHADOWING (NAME MASKING):
--------------------------------------------------------------------------------
When an inner block declares a variable with the SAME name as an outer variable,
the inner declaration temporarily "masks" or "shadows" the outer variable until
the inner block terminates!

4. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. Keep the scope of variables as NARROW and LOCAL as possible!
2. Avoid mutable global variables; if you need a global constant, mark it 'const'!
3. Always initialize local variables before reading; locals contain garbage!
================================================================================
`;function g(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_004 · Topic 2"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Scope, Lifetime & Visibility"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Variable Scope & Lifetime: Local/Block Scope vs Global/File Scope"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Understand the boundaries of variable accessibility and memory persistence in C. Learn how block scope protects local state, how global scope functions, why variable shadowing occurs, and how the OS manages memory segments."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 text-xl border border-amber-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-amber-200 tracking-tight",children:"Teacher's Corner: The Private Bedroom vs Public Park Analogy"}),e.jsx("p",{className:"text-xs text-amber-300/80",children:"A simple mental model taught by Sukanta Hui at Coder & AccoTax (Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🏡"})," Step 1: Scope vs Lifetime Made Intuitive"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Beginners often mix up ",e.jsx("strong",{children:"Scope"})," and ",e.jsx("strong",{children:"Lifetime"}),". Here is how Sukanta Hui explains it:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30 space-y-2",children:[e.jsx("span",{className:"text-sky-300 font-bold text-sm block",children:"1. Local / Block Scope = Your Private Bedroom:"}),e.jsxs("p",{className:"text-slate-300",children:["Variables declared inside braces ",e.jsx("code",{children:"{ int x = 10; }"})," belong strictly to that room. When you leave the room (closing brace), the room is tidied up and the local variable vanishes! Nobody outside can see or touch it."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2",children:[e.jsx("span",{className:"text-amber-300 font-bold text-sm block",children:"2. Global Scope = A Public City Park in Barrackpore:"}),e.jsx("p",{className:"text-slate-300",children:"A variable declared outside all functions is like a statue in a public park. Anyone walking by from any function can view it, paint it, or modify it! If a bug happens, it's hard to know which function caused it."})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"🎭"})," Step 2: The Mask of Variable Shadowing"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["What happens when ",e.jsx("strong",{children:"Tuhina"})," declares a local variable ",e.jsx("code",{children:"int count = 5;"})," inside a function when there is already a global ",e.jsx("code",{children:"int count = 100;"}),"?"]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300",children:[e.jsx("span",{className:"text-emerald-400 font-bold block font-sans mb-1",children:"🎭 Variable Shadowing Mechanics:"}),"Inside that function, the local ",e.jsx("code",{children:"count"})," wears a ",e.jsx("strong",{children:"mask"})," that temporarily hides the global ",e.jsx("code",{children:"count"}),". Any updates to ",e.jsx("code",{children:"count"})," only affect the local 5, leaving the global 100 completely untouched! Once the function returns, the global 100 becomes visible again!"]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore diverse scoping scenarios: block isolation, loop headers, global configuration flags, and shadowing traps"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Block Scope in Conditionals"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"Block Isolation"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Temporary calculation variables declared inside ",e.jsx("code",{children:"if"})," blocks die upon block exit."]}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`if (orderTotal > 5000.0) {
    double discount = orderTotal * 0.10; // Exists only inside this block!
    orderTotal -= discount;
    printf("Discount Applied: INR %.2f\\n", discount);
}
// 'discount' is completely destroyed here!`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: Loop-Header Scope in C99"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"C99 for-loop"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Loop variables declared in ",e.jsx("code",{children:"for(int i=0; ...)"})," prevent polluting the parent function."]}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`for (int i = 0; i < 5; i++) {
    printf("Item %d\\n", i);
}
// In C99+, 'i' is out of scope here!
// You can declare 'for (int i = 0; ...)' again safely!`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Safe Global Constant Pattern"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"const Read-Only"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Shares immutable system constants across functions without side-effect risks."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`const double TAX_RATE_GST = 0.18; // Immutable global
const int MAX_USERS = 500;

double calculateGross(double net) {
    return net * (1.0 + TAX_RATE_GST); // Read-only access is safe!
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: Multi-Tier Nested Shadowing"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Lexical Lookup"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Demonstrates how innermost declarations always take lexical precedence."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int val = 1; // Global
void test(void) {
    int val = 2; // Function local
    {
        int val = 3; // Block local
        printf("%d ", val); // Prints 3
    }
    printf("%d ", val); // Prints 2
}`})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Memory Segments & Variable Lifetimes"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"Operating System Memory Segments: Lifetime & Scope Hierarchy"}),e.jsxs("g",{transform:"translate(40, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"170",rx:"12",fill:"#1e293b",stroke:"#64748b",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"30",textAnchor:"middle",fill:"#94a3b8",className:"font-mono text-xs font-bold",children:"Text (.text / .rodata)"}),e.jsx("text",{x:"15",y:"65",fill:"#cbd5e1",className:"text-[10px] font-mono",children:"Compiled Code"}),e.jsx("text",{x:"15",y:"90",fill:"#cbd5e1",className:"text-[10px] font-mono",children:"String Literals"}),e.jsx("text",{x:"15",y:"115",fill:"#64748b",className:"text-[10px]",children:"Read-Only Memory"}),e.jsx("text",{x:"15",y:"145",fill:"#38bdf8",className:"text-[10px]",children:"Program Duration"})]}),e.jsxs("g",{transform:"translate(250, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"170",rx:"12",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"30",textAnchor:"middle",fill:"#f59e0b",className:"font-mono text-xs font-bold",children:"Data (.data / .bss)"}),e.jsx("text",{x:"15",y:"65",fill:"#fde68a",className:"text-[10px] font-mono",children:"Global Variables"}),e.jsx("text",{x:"15",y:"90",fill:"#fde68a",className:"text-[10px] font-mono",children:"Static Local Variables"}),e.jsx("text",{x:"15",y:"115",fill:"#94a3b8",className:"text-[10px]",children:"Fixed RAM Addresses"}),e.jsx("text",{x:"15",y:"145",fill:"#38bdf8",className:"text-[10px]",children:"Program Duration"})]}),e.jsxs("g",{transform:"translate(480, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"170",rx:"12",fill:"#1e293b",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"30",textAnchor:"middle",fill:"#a78bfa",className:"font-mono text-xs font-bold",children:"Heap Segment"}),e.jsx("text",{x:"15",y:"65",fill:"#ddd6fe",className:"text-[10px] font-mono",children:"malloc() / calloc()"}),e.jsx("text",{x:"15",y:"90",fill:"#ddd6fe",className:"text-[10px] font-mono",children:"Dynamic Memory"}),e.jsx("text",{x:"15",y:"115",fill:"#94a3b8",className:"text-[10px]",children:"Grows Upward"}),e.jsx("text",{x:"15",y:"145",fill:"#a78bfa",className:"text-[10px]",children:"Until free()"})]}),e.jsxs("g",{transform:"translate(690, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"170",rx:"12",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"95",y:"30",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs font-bold",children:"Stack Segment"}),e.jsx("text",{x:"15",y:"65",fill:"#a7f3d0",className:"text-[10px] font-mono",children:"Local Variables"}),e.jsx("text",{x:"15",y:"90",fill:"#a7f3d0",className:"text-[10px] font-mono",children:"Function Parameters"}),e.jsx("text",{x:"15",y:"115",fill:"#94a3b8",className:"text-[10px]",children:"Grows Downward"}),e.jsx("text",{x:"15",y:"145",fill:"#f43f5e",className:"text-[10px]",children:"Block Scope Lifetime"})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: VariableScopeDemo.c"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"VariableScopeDemo.c"}),") demonstrates global variable mutation across functions, local variable shadowing, and nested block scope isolation."]}),e.jsx(a,{fileModule:o,title:"VariableScopeDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     VARIABLE SCOPE & LIFETIME LAB - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Global Variable Mutation Across Functions ---
Initial globalSystemCounter in main() = 100
   [demonstrateGlobalAccess] Reading globalSystemCounter = 100
   [demonstrateGlobalAccess] Updated globalSystemCounter = 150
After function call in main() = 150

--- [2] Variable Shadowing (Local Masks Global) ---
   [demonstrateLocalShadowing] Local Shadowed Value = 999
Global globalSystemCounter in main() remains = 150

--- [3] Block Scope & Lifetime Inside Braces { } ---
   [demonstrateBlockScope] Outer block: outerX = 10
      [Nested Block] innerY = 20, Shadowed outerX = 55
   [demonstrateBlockScope] After nested block: outerX = 10 (Restored)

===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Overusing Global Variables:"})," Mutable globals create hidden dependencies that make programs difficult to debug and test."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unintended Shadowing:"})," Declaring a local variable with the same name as a global can cause confusion; compile with ",e.jsx("code",{children:"-Wshadow"})," to catch these early."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Accessing Out-of-Scope Variables:"})," Attempting to access a variable outside its declaring ",e.jsx("code",{children:"{ }"})," block triggers an 'undeclared identifier' compiler error."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Why does the C runtime allocate local variables on the call stack instead of in the data segment? How does the stack enable functions to be called recursively without overwriting each other's local variables?"})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 001_004 Topic 2 FAQs: Variable Scope",questions:s})}),e.jsx("section",{children:e.jsx(n,{content:l,title:"Module 001_004 Topic 2 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_004_topic2_note.txt"})}),e.jsx("section",{children:e.jsx(i,{note:"Always keep your variable scope as narrow and local as possible! Declare variables right when you need them to keep your code clean, modular, and bug-free! — Sukanta Hui"})})]})}export{g as default};
