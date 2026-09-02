import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const s=`/**
 * ============================================================================
 * Program: FunctionPrototypesDemo.c
 * Module: 001_004 - Functions & Modular Programming
 * Topic 0: Modular Design: Declarations (Prototypes), Definitions & Invocation
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

/* ============================================================================
 * STEP 1: FUNCTION DECLARATIONS (PROTOTYPES)
 * Tells the compiler the function name, return type, and parameter list before main()
 * ============================================================================ */
void printModuleBanner(const char *moduleTitle);
double calculateCircleArea(double radius);
int findMaxInteger(int a, int b);
bool isEvenNumber(int value);
void printExecutionSummary(int totalRuns);

/* ============================================================================
 * MAIN FUNCTION: Execution Entry Point & Invoker
 * ============================================================================ */
int main(void) {
    printModuleBanner("C FUNCTION PROTOTYPES & MODULAR ARCHITECTURE");

    /* 1. Value Returning Function Invocation */
    double r = 7.0;
    double area = calculateCircleArea(r);
    printf("1. Circle Area Calculation:\\n");
    printf("   Radius = %.2f units -> Calculated Area = %.4f sq units\\n\\n", r, area);

    /* 2. Multiple Parameter Function Invocation */
    int num1 = 145, num2 = 280;
    int maxVal = findMaxInteger(num1, num2);
    printf("2. Maximum Integer Comparison:\\n");
    printf("   Inputs: %d, %d -> Maximum = %d\\n\\n", num1, num2, maxVal);

    /* 3. Boolean Predicate Function Invocation */
    int testVal = 42;
    printf("3. Even Number Predicate Test:\\n");
    printf("   Number %d is %s\\n\\n", testVal, isEvenNumber(testVal) ? "EVEN" : "ODD");

    /* 4. Void Function Invocation */
    printExecutionSummary(3);

    printf("===================================================================\\n");
    return 0;
}

/* ============================================================================
 * STEP 2: FUNCTION DEFINITIONS (IMPLEMENTATION)
 * The actual body containing executable statements
 * ============================================================================ */

void printModuleBanner(const char *moduleTitle) {
    printf("===================================================================\\n");
    printf("     %s\\n", moduleTitle);
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");
}

double calculateCircleArea(double radius) {
    const double PI = 3.141592653589793;
    return PI * radius * radius;
}

int findMaxInteger(int a, int b) {
    return (a > b) ? a : b;
}

bool isEvenNumber(int value) {
    return (value % 2 == 0);
}

void printExecutionSummary(int totalRuns) {
    printf("--- Execution Summary ---\\n");
    printf("All %d modular subroutines invoked and executed cleanly.\\n", totalRuns);
}
`,r=[{question:"What is a Function in C, and why is modular design essential?",shortAnswer:"A self-contained block of reusable code designed to perform a specific subtask. Modular design breaks large monolithic codebases into small, testable, maintainable, and reusable units.",explanation:"Without functions, software would consist of thousands of repetitive, duplicate lines inside `main()`, making debugging and maintenance impossible.",hint:"Reusable isolated code blocks.",level:"basic"},{question:"What is the difference between a Function Declaration (Prototype) and a Function Definition?",shortAnswer:"A Declaration (Prototype) tells the compiler the function's name, return type, and parameters before usage (ends with a semicolon); a Definition contains the actual executable code body enclosed in `{}`.",explanation:"Prototypes enable one-pass compilers to validate parameter types and return types when functions are defined below `main()`.",hint:"Signature with semicolon vs complete body with braces.",level:"basic",codeExample:`// Prototype:
double computeTax(double amount);

// Definition:
double computeTax(double amount) {
    return amount * 0.18;
}`},{question:"What happens if you invoke a function before its declaration in C99 / C11?",shortAnswer:"In modern C (C99+), invoking an undeclared function triggers a compiler error (`error: implicit declaration of function`); in legacy C89, it assumed an implicit return type of `int`.",explanation:"Always provide function prototypes before `main()` or in header files (`.h`).",hint:"Implicit declaration error in modern C.",level:"intermediate"},{question:"What is the anatomy of a C Function Signature?",shortAnswer:"`return_type function_name(parameter_type param1, parameter_type param2, ...)`",explanation:"Specifies return data type (`int`, `double`, `void`, pointer), identifier name, and formal parameter list.",hint:"return_type name(parameter_list)",level:"basic"},{question:"What is a `void` return type in C?",shortAnswer:"A return type indicating that the function does not return any value back to the caller.",explanation:"Used for action-oriented routines like printing banners, rendering graphics, or logging messages.",hint:"Returns nothing.",level:"basic",codeExample:`void printGreeting(const char *name) {
    printf("Welcome, %s!\\n", name);
}`},{question:"What is the difference between Formal Parameters and Actual Arguments?",shortAnswer:`- Formal Parameters: Variable placeholders declared in the function definition/signature.
- Actual Arguments: Real values, variables, or expressions passed into the function at invocation time.`,explanation:"In `int sum(int x, int y)`, `x` and `y` are formal parameters; in `sum(10, 20)`, `10` and `20` are actual arguments.",hint:"Definition variables vs caller values.",level:"basic"},{question:"What does the `return` statement do in a C function?",shortAnswer:"It immediately terminates execution of the active function, passes the computed result back to the caller, and transfers CPU control back to the call site.",explanation:"Any code written after a `return` statement in the same execution branch becomes unreachable dead code.",hint:"Yields value and terminates function execution.",level:"basic"},{question:"Can a function have multiple `return` statements?",shortAnswer:"Yes! A function can have multiple `return` statements across different conditional branches (such as guard clauses or `if-else` trees).",explanation:"Execution exits as soon as the first matching `return` statement is encountered.",hint:"Multiple returns across conditional branches.",level:"basic",codeExample:`int getAbsolute(int n) {
    if (n < 0) return -n;
    return n;
}`},{question:"What is a Stack Frame (Activation Record)?",shortAnswer:"A block of memory pushed onto the CPU Call Stack whenever a function is called, containing local variables, parameters, saved registers, and the return instruction address.",explanation:"When the function returns, its stack frame is popped, reclaiming its memory automatically.",hint:"Memory chunk allocated on call stack for function execution.",level:"intermediate"},{question:"What is the significance of `void` in `int main(void)` vs `int main()` in C?",shortAnswer:"In C, `(void)` explicitly states that the function accepts zero arguments; empty parentheses `()` in C means the function can take an unverified, unspecified number of arguments!",explanation:"Always use `int main(void)` or `int main(int argc, char *argv[])` for strict type safety in ANSI C.",hint:"Explicit zero arguments vs unspecified arguments.",level:"intermediate"},{question:"How do you declare a function that takes no arguments?",shortAnswer:"`return_type function_name(void);`",explanation:"The `void` keyword inside parameter parentheses enforces zero parameters.",hint:"Use (void) in parameter list.",level:"basic"},{question:"What is Function Inlining (`inline` keyword in C99)?",shortAnswer:"A hint to the compiler to replace function calls directly with the function's body code, eliminating function call overhead (stack frame push/pop) for small, performance-critical routines.",explanation:"Trades a slight increase in binary code size for faster execution speed.",hint:"Replaces call site with body to eliminate overhead.",level:"intermediate",codeExample:`inline int square(int x) {
    return x * x;
}`},{question:"What is Dead Code / Unreachable Code in a function?",shortAnswer:"Statements placed immediately after an unconditional `return`, `exit()`, or infinite loop that will never be executed by the CPU.",explanation:"Compilers with `-Wunreachable-code` or `-Wall` flag warnings for unreachable statements.",hint:"Statements that can never be executed.",level:"basic"},{question:"Can a function in C return multiple values directly via `return`?",shortAnswer:"No, a C function can only return a single value via `return`; however, it can return multiple values by returning a `struct` or by accepting pointer out-parameters.",explanation:"Pass memory addresses (`&var1, &var2`) to populate multiple outputs.",hint:"Single return value; use pointers or structs for multiple.",level:"intermediate"},{question:"What is a Predicate Function in C?",shortAnswer:"A function that returns a boolean condition (`bool`, `1` for true, `0` for false) to test whether input values satisfy a specific property (e.g. `isPrime(n)`, `isEven(n)`).",explanation:"Used extensively inside `if` conditions and loop invariants.",hint:"Boolean testing function.",level:"basic"},{question:"Why should parameter names in function prototypes match those in the definition?",shortAnswer:"While the compiler only requires data types in prototypes (e.g. `double calculate(double, double);`), matching descriptive parameter names enhances code readability and developer documentation.",explanation:"Named parameters make header files self-documenting for API consumers.",hint:"Enhances self-documenting code clarity.",level:"basic"},{question:"What is a Variadic Function in C?",shortAnswer:"A function that accepts a variable number of arguments (e.g. `printf(const char *format, ...)`), managed using `<stdarg.h>` (`va_list`, `va_start`, `va_arg`, `va_end`).",explanation:"Allows passing an arbitrary number of parameters based on a format string or count argument.",hint:"Functions with ellipsis (...) like printf.",level:"advanced"},{question:"What is the Return Address in a call stack frame?",shortAnswer:"The memory address of the next machine instruction in the caller function that the CPU must jump back to after the callee function finishes executing.",explanation:"Pushed to stack before jumping to function address; popped into CPU program counter (`PC`) on `return`.",hint:"Instruction pointer where caller resumes.",level:"intermediate"},{question:"What is the 'Single Responsibility Principle' (SRP) in modular C design?",shortAnswer:"A design rule stating that each function should do exactly one well-defined job, and do it completely and reliably.",explanation:"Functions that attempt to read input, calculate taxes, print reports, and send network packets all in one are unmaintainable.",hint:"Each function performs exactly one specific task.",level:"basic"},{question:"What is the difference between a Library Function and a User-Defined Function?",shortAnswer:"- Library Functions: Pre-compiled, standardized routines provided by the C Standard Library (e.g. `printf`, `sqrt`, `strlen`).\n- User-Defined Functions: Custom routines written by the programmer to solve domain-specific problems.",explanation:"Library headers provide standard prototypes, while linkers bind pre-compiled implementations.",hint:"Standard C library vs custom programmer functions.",level:"basic"},{question:"What happens if a non-void function reaches the end of its body without a `return` statement?",shortAnswer:"It invokes Undefined Behavior (UB); the caller receives random garbage leftover in the CPU return register (`EAX`/`RAX`).",explanation:"Exception: `main()` in C99+ implicitly returns 0 if reaching the closing brace.",hint:"Undefined behavior yielding garbage return values.",level:"intermediate"},{question:"What is the role of Header Files (`.h`) in modular C programming?",shortAnswer:"Header files contain shared function prototypes, macro constants, typedefs, and struct declarations, allowing multiple `.c` implementation files to share interfaces safely.",explanation:'Included via `#include "my_module.h"`.',hint:"Interface contract files containing declarations.",level:"intermediate"},{question:"What is Forward Declaration in C?",shortAnswer:"Declaring a function or type signature before its complete definition to allow calling code or recursive mutual calls to compile without errors.",explanation:"Crucial when two functions call each other mutually (`A()` calls `B()` and `B()` calls `A()`).",hint:"Declaring function ahead of time for mutual recursion.",level:"intermediate"},{question:"What is the maximum number of arguments a function in C can accept?",shortAnswer:"The C99 standard mandates that compilers must support at least 127 arguments in a single function call, though good software design rarely exceeds 4 to 6 arguments.",explanation:"If a function needs more than 5 arguments, bundle them into a meaningful `struct`.",hint:"At least 127 by C99 standard; keep under 5 in practice.",level:"intermediate"},{question:"Why does Sukanta Hui teach the 'Recipe vs Cooking' analogy for functions?",shortAnswer:"A function prototype is like the recipe card index (name, ingredients, cooking time), the function definition is the actual cooking instructions, and function invocation is serving the cooked dish!",explanation:"Provides instant intuition for beginners distinguishing declarations, definitions, and function calls.",hint:"Recipe index, cooking instructions, serving the meal.",level:"basic"}],o=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_004: Functions & Modular Programming
Topic 0: Modular Design: Function Declarations (Prototypes), Definitions & Invocation
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: Why do we need functions and prototypes in C?
A: Imagine writing a 5,000-line book with NO chapters, NO headings, and everything
   jammed onto one giant continuous page. It would be impossible to read or edit!
   Functions are the "Chapters" of your software.

THE 3-STEP FUNCTION LIFECYCLE:
  1. Declaration (Prototype) : The Recipe Card (Tells compiler name, inputs, output)
  2. Definition (Body)       : The Kitchen Cooking (The actual executable instructions)
  3. Invocation (Call)       : Serving the Dish (Executing the subroutine when needed)

2. SYNTAX ANATOMY OF A C FUNCTION:
--------------------------------------------------------------------------------
// 1. Prototype (Above main, ends with a semicolon):
double calculateTax(double grossSalary, double taxRate);

// 2. Invocation (Inside main):
double finalTax = calculateTax(65000.0, 0.18);

// 3. Definition (Below main):
double calculateTax(double grossSalary, double taxRate) {
    return grossSalary * taxRate;
}

3. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. Always write prototypes before main() to prevent implicit declaration bugs!
2. Follow Single Responsibility Principle (SRP): 1 function = 1 specific job!
3. If a function accepts no arguments, write (void) explicitly, not ()!
4. Any code written after return in the same block is UNREACHABLE dead code!
================================================================================
`;function g(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_004 · Topic 0"}),e.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Modular Decomposition & Prototypes"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Modular Design: Function Declarations (Prototypes), Definitions & Invocation"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master the architecture of modular C programs. Learn the 3-step function lifecycle (declaration, definition, invocation), signature anatomy, return mechanisms, and how the CPU manages call stack execution."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: Why Functions are the Building Blocks of Software"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"A conversational classroom breakdown by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"🍳"})," Step 1: The Master Chef & Recipe Index Analogy"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In our Barrackpore lab, students often ask: ",e.jsxs("em",{children:[`"Sir, why can't we write our entire 2,000 lines of code inside `,e.jsx("code",{children:"main()"}),'?"']})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Imagine a restaurant kitchen where the head chef tries to bake bread, grill steaks, fry potatoes, wash dishes, and serve guests all at the same time on one counter! The kitchen would instantly collapse in chaos!"}),e.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-sky-500/30 space-y-1",children:[e.jsx("span",{className:"text-sky-300 font-bold block",children:"1. Function Prototype:"}),e.jsxs("span",{className:"text-slate-300",children:["The ",e.jsx("strong",{children:"Menu Card"})," (Lists the dish name, required ingredients, and calorie count)."]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-1",children:[e.jsx("span",{className:"text-emerald-300 font-bold block",children:"2. Function Definition:"}),e.jsxs("span",{className:"text-slate-300",children:["The ",e.jsx("strong",{children:"Chef's Secret Recipe"})," (The actual cooking steps inside the kitchen braces ",e.jsx("code",{children:"{ }"}),")."]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-purple-500/30 space-y-1",children:[e.jsx("span",{className:"text-purple-300 font-bold block",children:"3. Function Invocation:"}),e.jsxs("span",{className:"text-slate-300",children:["The ",e.jsx("strong",{children:"Customer Order"})," (Calling the function when needed to receive the finished result!)."]})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Step 2: Why C Demands a Function Prototype Before `main()`"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The C compiler is a ",e.jsx("strong",{children:"top-to-bottom single-pass reader"}),". When it reads ",e.jsx("code",{children:"main()"})," and sees a call to ",e.jsx("code",{children:"calculateArea(7.0)"}),", if you haven't given it a prototype at the top of the file, the compiler panics! In C99, it halts with an error: ",e.jsx("code",{children:"implicit declaration of function"}),"."]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300",children:[e.jsx("span",{className:"text-emerald-400 font-bold block font-sans mb-1",children:"✅ The Standard C 3-Part Architecture:"}),e.jsx("span",{className:"text-sky-400 font-bold",children:"// 1. PROTOTYPE (Above main):"}),e.jsx("br",{}),"double calculateCircleArea(double radius);",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-sky-400 font-bold",children:"// 2. INVOCATION (Inside main):"}),e.jsx("br",{}),"int main(void) {",e.jsx("br",{}),"    double area = calculateCircleArea(7.0);",e.jsx("br",{}),"    return 0;",e.jsx("br",{}),"}",e.jsx("br",{}),e.jsx("br",{}),e.jsx("span",{className:"text-sky-400 font-bold",children:"// 3. DEFINITION (Below main):"}),e.jsx("br",{}),"double calculateCircleArea(double radius) {",e.jsx("br",{}),"    return 3.14159265 * radius * radius;",e.jsx("br",{}),"}"]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore diverse function architectures: predicate tests, multi-argument math, void helpers, and inline routines"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Mathematical Calculation Routine"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"Value Returning"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Accepts numeric parameters, computes a mathematical result, and returns a double."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`double calculateCylinderVolume(double radius, double height) {
    const double PI = 3.141592653589793;
    if (radius <= 0.0 || height <= 0.0) return 0.0;
    return PI * radius * radius * height;
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: Boolean Predicate Validator"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"Predicate Pattern"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Evaluates whether an integer satisfies prime conditions and returns ",e.jsx("code",{children:"bool"}),"."]}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`#include <stdbool.h>

bool isPrime(int n) {
    if (n < 2) return false;
    for (int d = 2; d * d <= n; d++) {
        if (n % d == 0) return false; // Early exit
    }
    return true; // Prime
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Void UI Banner Decorator"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"Void Action"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Executes console formatting operations without returning any value."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`void printDashedDivider(int length, char symbol) {
    for (int i = 0; i < length; i++) {
        putchar(symbol);
    }
    putchar('\\n');
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: Performance Inline Routine"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"C99 inline"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Eliminates stack frame push/pop overhead for high-frequency operations."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`static inline int clampValue(int val, int min, int max) {
    if (val < min) return min;
    if (val > max) return max;
    return val;
}`})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Function Call Stack Lifecycle"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 260",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"240",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"CPU Call Stack Frame Mechanics During Function Invocation"}),e.jsxs("g",{transform:"translate(60, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"150",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"110",y:"30",textAnchor:"middle",fill:"#38bdf8",className:"font-mono text-sm font-bold",children:"main() Frame"}),e.jsx("text",{x:"20",y:"65",fill:"#94a3b8",className:"text-[11px] font-mono",children:"double r = 7.0;"}),e.jsx("text",{x:"20",y:"90",fill:"#cbd5e1",className:"text-[11px] font-mono",children:"call calculateArea(r);"}),e.jsx("text",{x:"20",y:"115",fill:"#94a3b8",className:"text-[11px] font-mono",children:"double area = ...;"}),e.jsx("text",{x:"20",y:"135",fill:"#64748b",className:"text-[10px]",children:"Active Stack Base"})]}),e.jsx("path",{d:"M 290 130 L 370 130",stroke:"#38bdf8",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"330",y:"115",textAnchor:"middle",fill:"#38bdf8",className:"text-[10px] font-mono",children:"1. PUSH Frame"}),e.jsxs("g",{transform:"translate(380, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"240",height:"150",rx:"12",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"120",y:"30",textAnchor:"middle",fill:"#34d399",className:"font-mono text-sm font-bold",children:"calculateArea() Frame"}),e.jsx("text",{x:"20",y:"60",fill:"#94a3b8",className:"text-[11px] font-mono",children:"Param: radius = 7.0"}),e.jsx("text",{x:"20",y:"85",fill:"#94a3b8",className:"text-[11px] font-mono",children:"Local: PI = 3.14159"}),e.jsx("text",{x:"20",y:"110",fill:"#cbd5e1",className:"text-[11px] font-mono",children:"Return Address: main+0x18"}),e.jsx("text",{x:"20",y:"135",fill:"#34d399",className:"text-[11px] font-mono",children:"return 153.9380;"})]}),e.jsx("path",{d:"M 630 130 L 710 130",stroke:"#a78bfa",strokeWidth:"3",markerEnd:"url(#arrow)"}),e.jsx("text",{x:"670",y:"115",textAnchor:"middle",fill:"#a78bfa",className:"text-[10px] font-mono",children:"2. POP & Return"}),e.jsxs("g",{transform:"translate(720, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"150",rx:"12",fill:"#1e293b",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"30",textAnchor:"middle",fill:"#a78bfa",className:"font-mono text-sm font-bold",children:"Caller Resumes"}),e.jsx("text",{x:"15",y:"65",fill:"#e2e8f0",className:"text-[11px] font-mono",children:"area = 153.9380"}),e.jsx("text",{x:"15",y:"95",fill:"#94a3b8",className:"text-[10px]",children:"Stack frame popped"}),e.jsx("text",{x:"15",y:"125",fill:"#34d399",className:"text-[10px]",children:"Memory reclaimed!"})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: FunctionPrototypesDemo.c"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"FunctionPrototypesDemo.c"}),") demonstrates the 3-step function lifecycle: prototypes above ",e.jsx("code",{children:"main()"}),", value-returning invocations, boolean predicates, and complete function definitions."]}),e.jsx(t,{fileModule:s,title:"FunctionPrototypesDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     C FUNCTION PROTOTYPES & MODULAR ARCHITECTURE
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

1. Circle Area Calculation:
   Radius = 7.00 units -> Calculated Area = 153.9380 sq units

2. Maximum Integer Comparison:
   Inputs: 145, 280 -> Maximum = 280

3. Even Number Predicate Test:
   Number 42 is EVEN

--- Execution Summary ---
All 3 modular subroutines invoked and executed cleanly.
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Prototypes:"})," Defining a function below ",e.jsx("code",{children:"main()"})," without a prototype causes compilation errors in C99/C11."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Writing Code After Return:"})," Any statements placed immediately after an unconditional ",e.jsx("code",{children:"return"})," will never execute (dead code)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mismatched Parameter Types:"})," Passing a ",e.jsx("code",{children:"float"})," to a function expecting a pointer or different integer width triggers type conversion warnings."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Why does C pass function arguments on the call stack by value rather than by reference by default? How does this protect caller variables from unintended side effects in called subroutines?"})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 001_004 Topic 0 FAQs: Function Prototypes",questions:r})}),e.jsx("section",{children:e.jsx(a,{content:o,title:"Module 001_004 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_004_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(i,{note:"Always remember the 3-step function lifecycle: Prototype above main, Call inside main, and Definition below main! Follow this pattern to write professional, modular C code! — Sukanta Hui"})})]})}export{g as default};
