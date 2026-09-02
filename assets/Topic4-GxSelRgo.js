import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as n}from"./CFileLoader-DjboCeUK.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`/**
 * ============================================================================
 * Program: RecursionStackDemo.c
 * Module: 001_004 - Functions & Modular Programming
 * Topic 4: Recursion: Base Condition, Stack Frame Expansion & Tail Calls
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>

/* ============================================================================
 * 1. CLASSIC RECURSION: Factorial with Call Stack Trace
 * ============================================================================ */
unsigned long long calculateFactorial(int n, int depth) {
    for (int i = 0; i < depth; i++) printf("  ");
    printf("-> Entering fact(%d) [Stack Depth %d]\\n", n, depth);

    /* BASE CASE: Halts recursion and begins call stack unwinding */
    if (n <= 1) {
        for (int i = 0; i < depth; i++) printf("  ");
        printf("<- Base Case Reached at fact(1) = 1 [Unwinding Begins]\\n");
        return 1;
    }

    /* RECURSIVE STEP: fact(n) = n * fact(n-1) */
    unsigned long long subResult = calculateFactorial(n - 1, depth + 1);
    unsigned long long result = n * subResult;

    for (int i = 0; i < depth; i++) printf("  ");
    printf("<- Returning from fact(%d): %d * %llu = %llu\\n", n, n, subResult, result);
    return result;
}

/* ============================================================================
 * 2. TAIL RECURSION: Accumulator passed along; optimized by modern compilers
 * ============================================================================ */
unsigned long long factorialTailRecursive(int n, unsigned long long accumulator) {
    if (n <= 1) return accumulator;
    return factorialTailRecursive(n - 1, n * accumulator); // Pure tail call
}

/* ============================================================================
 * 3. MULTI-BRANCH RECURSION: Fibonacci Sequence
 * ============================================================================ */
int calculateFibonacci(int n) {
    if (n <= 0) return 0;
    if (n == 1) return 1;
    return calculateFibonacci(n - 1) + calculateFibonacci(n - 2);
}

/* ============================================================================
 * 4. CLASSIC RECURSIVE PUZZLE: Tower of Hanoi 3-Peg Solver
 * ============================================================================ */
void solveTowerOfHanoi(int disks, char source, char destination, char auxiliary) {
    if (disks == 1) {
        printf("   Move disk 1 from peg %c -> peg %c\\n", source, destination);
        return;
    }
    solveTowerOfHanoi(disks - 1, source, auxiliary, destination);
    printf("   Move disk %d from peg %c -> peg %c\\n", disks, source, destination);
    solveTowerOfHanoi(disks - 1, auxiliary, destination, source);
}

int main(void) {
    printf("===================================================================\\n");
    printf("     RECURSION & CALL STACK ANALYSIS - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    /* 1. Factorial Call Stack Visualization */
    printf("--- [1] Factorial Call Stack Expansion & Unwinding (N = 4) ---\\n");
    unsigned long long factResult = calculateFactorial(4, 0);
    printf("Final Calculated Factorial (4!) = %llu\\n\\n", factResult);

    /* 2. Tail Recursion */
    printf("--- [2] Tail Recursive Factorial (N = 5, Accumulator = 1) ---\\n");
    printf("5! via Tail Recursion = %llu\\n\\n", factorialTailRecursive(5, 1));

    /* 3. Fibonacci Sequence */
    printf("--- [3] Recursive Fibonacci Terms [0 to 7] ---\\n");
    for (int i = 0; i <= 7; i++) {
        printf("Fib(%d) = %d  ", i, calculateFibonacci(i));
    }
    printf("\\n\\n");

    /* 4. Tower of Hanoi */
    printf("--- [4] Tower of Hanoi Solution (3 Disks: A -> C via B) ---\\n");
    solveTowerOfHanoi(3, 'A', 'C', 'B');

    printf("\\n===================================================================\\n");
    return 0;
}
`,r=[{question:"What is Recursion in C programming?",shortAnswer:"A programming technique where a function solves a computational problem by calling itself directly or indirectly on a smaller subproblem until reaching a terminating base condition.",explanation:"Consists of two mandatory components: The Base Condition (halting rule) and the Recursive Step (self-invocation with smaller input).",hint:"Function calling itself on smaller subproblems.",level:"basic"},{question:"What is the Base Condition (Base Case) and why is it mandatory?",shortAnswer:"The stopping condition that returns a known, trivial result without making further recursive calls. Without a base condition, the function calls itself indefinitely until the stack memory exhausts, causing a Stack Overflow crash.",explanation:"Always write and test the base case first.",hint:"Halting condition preventing stack overflow.",level:"basic",codeExample:`int fact(int n) {
    if (n <= 1) return 1; // BASE CASE
    return n * fact(n - 1); // RECURSIVE STEP
}`},{question:"What is a Stack Overflow in C recursion?",shortAnswer:"A fatal runtime crash (`SIGSEGV`) occurring when too many recursive stack frames are pushed onto the Call Stack, exceeding the maximum memory allocated for the stack by the operating system.",explanation:"Caused by missing base cases, wrong decrement logic (e.g. `fact(n+1)`), or excessively deep recursion depth.",hint:"Exhaustion of stack memory by excessive recursive calls.",level:"basic"},{question:"What are the two phases of recursive execution?",shortAnswer:`1. The Winding (Expansion) Phase: Each call pushes a new stack frame, postponing calculations until reaching the base case.
2. The Unwinding (Resolution) Phase: Returns propagate upward, calculating deferred expressions and popping stack frames.`,explanation:"Memory grows during winding and contracts during unwinding.",hint:"Winding (stack expansion) and Unwinding (stack resolution).",level:"intermediate"},{question:"What is Tail Recursion?",shortAnswer:"A special form of recursion where the recursive call is the ABSOLUTE LAST operation executed in the function, with no pending calculations left to perform after returning.",explanation:"Allows compilers with Tail Call Optimization (TCO) to reuse the current stack frame, reducing space complexity from $O(N)$ to $O(1)$.",hint:"Recursive call is final operation; eligible for stack optimization.",level:"intermediate",codeExample:`int factTail(int n, int acc) {
    if (n <= 1) return acc;
    return factTail(n - 1, n * acc); // Pure tail call
}`},{question:"What is Non-Tail (Head / Embedded) Recursion?",shortAnswer:"Recursion where operations remain to be performed after the recursive call returns (e.g. `return n * fact(n - 1)` has a pending multiplication).",explanation:"Requires maintaining all parent stack frames on the call stack until child calls return.",hint:"Pending operations exist after recursive return.",level:"intermediate"},{question:"What is the Russian Matryoshka Nesting Dolls Analogy for Recursion?",shortAnswer:"Opening a big doll reveals a smaller identical doll inside. You keep opening smaller dolls until you hit the solid baby doll (the Base Case!), and then you close them all back up one-by-one (the Unwinding phase).",explanation:"Sukanta Hui's visual classroom metaphor.",hint:"Nesting dolls opened until solid base doll is reached.",level:"basic"},{question:"What is Direct Recursion vs Indirect (Mutual) Recursion?",shortAnswer:"- Direct Recursion: Function `A()` calls `A()` directly.\n- Indirect Recursion: Function `A()` calls `B()`, and `B()` calls `A()` in a cycle.",explanation:"Indirect recursion requires forward declarations (prototypes) for compilation.",hint:"Calling itself vs calling through another function cycle.",level:"intermediate"},{question:"What is the Time and Space Complexity of recursive Factorial?",shortAnswer:`- Time Complexity: $\\mathcal{O}(N)$ (executes $N$ recursive calls).
- Space Complexity: $\\mathcal{O}(N)$ auxiliary stack memory (maintains $N$ concurrent stack frames).`,explanation:"An iterative loop uses $\\mathcal{O}(N)$ time and only $\\mathcal{O}(1)$ space.",hint:"O(N) time and O(N) stack space.",level:"intermediate"},{question:"Why is standard naive recursive Fibonacci `fib(n) = fib(n-1) + fib(n-2)` inefficient?",shortAnswer:"Because it has an exponential Time Complexity of $\\mathcal{O}(2^N)$, repeatedly re-calculating the exact same subproblems thousands of times in a branching tree.",explanation:"For example, `fib(5)` calculates `fib(3)` multiple times independently.",hint:"Exponential O(2^N) time due to overlapping redundant subproblems.",level:"intermediate"},{question:"What is the Tower of Hanoi problem and how is it solved recursively?",shortAnswer:"A mathematical game of moving $N$ disks from peg A to peg C using peg B, subject to rules (move 1 disk at a time; never place larger disk on smaller). Solved in $2^N - 1$ steps by moving $N-1$ disks to B, moving disk $N$ to C, and moving $N-1$ disks from B to C.",explanation:"The quintessential demonstration of divide-and-conquer recursion.",hint:"2^N - 1 moves via 3-step divide and conquer.",level:"intermediate"},{question:"How do you calculate the Greatest Common Divisor (GCD) using Euclidean recursion?",shortAnswer:"`int gcd(int a, int b) { return (b == 0) ? a : gcd(b, a % b); }`",explanation:"Reaches base case in $\\mathcal{O}(\\log(\\min(a, b)))$ steps; pure tail recursion.",hint:"gcd(b, a % b) with base case b == 0.",level:"basic",codeExample:`int gcd(int a, int b) {
    if (b == 0) return a;
    return gcd(b, a % b);
}`},{question:"What is Recursion Tree Visualization?",shortAnswer:"A tree diagram where each node represents a function call frame and child nodes represent sub-calls, visualizing branching factors and total computational work.",explanation:"Helps analyze time complexity and call patterns.",hint:"Hierarchical tree diagram of call invocations.",level:"intermediate"},{question:"When should you choose Recursion over Iteration in C?",shortAnswer:"When solving problems with natural recursive structure (e.g. Tree traversals, Graph DFS, QuickSort/MergeSort, Backtracking mazes, Tower of Hanoi) where an iterative solution requires complex manual stack management.",explanation:"For simple linear counting/summing, iteration is faster and uses less memory.",hint:"Trees, graphs, divide-and-conquer algorithms, and backtracking.",level:"intermediate"},{question:"What is Tail Call Optimization (TCO)?",shortAnswer:"A compiler optimization (enabled in GCC via `-O2`) where the compiler replaces the tail recursive call with a jump instruction (like a `while` loop), reusing the existing stack frame and eliminating stack overflow risks.",explanation:"Transforms $O(N)$ stack memory into $O(1)$ stack memory.",hint:"Compiler transforms tail call into jump loop.",level:"advanced"},{question:"How do you reverse a string recursively in C?",shortAnswer:"Base case: when pointers cross; recursive step: swap outermost characters `left` and `right`, and recurse on `(left + 1, right - 1)`.",explanation:"Two-pointer recursive in-place string reversal.",hint:"Swap boundary chars and recurse on inner substring.",level:"intermediate",codeExample:`void reverseStr(char *str, int l, int r) {
    if (l >= r) return;
    char t = str[l]; str[l] = str[r]; str[r] = t;
    reverseStr(str, l + 1, r - 1);
}`},{question:"What is Tree Recursion vs Linear Recursion?",shortAnswer:`- Linear Recursion: Makes at most ONE recursive call per invocation (e.g. Factorial, Linear Search).
- Tree Recursion: Makes TWO or more recursive calls per invocation (e.g. Fibonacci, Divide and Conquer).`,explanation:"Tree recursion creates exponential branching call stacks.",hint:"Single call path vs multiple branching call paths.",level:"intermediate"},{question:"What is Nested Recursion (e.g. Ackermann Function)?",shortAnswer:"A recursive function that passes a recursive call as an argument to another recursive call (e.g. `ackermann(m - 1, ackermann(m, n - 1))`).",explanation:"Grows at an extraordinarily rapid rate.",hint:"Recursive call passed as parameter to another recursive call.",level:"advanced"},{question:"How do you calculate the power $X^N$ in $\\mathcal{O}(\\log N)$ time using recursion?",shortAnswer:"If $N$ is even: $(X^{N/2})^2$; if $N$ is odd: $X \\times (X^{(N-1)/2})^2$; base case: $X^0 = 1$.",explanation:"Binary Exponentiation algorithm halves the exponent at each recursive step.",hint:"Halve exponent at each step: power(x, n/2).",level:"intermediate",codeExample:`double fastPower(double x, int n) {
    if (n == 0) return 1.0;
    double half = fastPower(x, n / 2);
    if (n % 2 == 0) return half * half;
    return x * half * half;
}`},{question:"How can you debug a runaway recursive function in GDB?",shortAnswer:"Use `backtrace` (or `bt`) to view the entire call stack history and inspect frame numbers, arguments, and depth.",explanation:"`bt -10` shows the last 10 stack frames before a crash.",hint:"Use 'backtrace' or 'bt' in GDB.",level:"intermediate"},{question:"What is the danger of using recursion on embedded microcontrollers (e.g. ARM Cortex-M, PIC, AVR)?",shortAnswer:"Embedded microcontrollers have severely constrained RAM (often only a few kilobytes); uncontrolled recursion quickly overflows the small hardware stack into global variables or registers, causing catastrophic hardware crashes.",explanation:"Many safety-critical standards (like MISRA C) ban or heavily restrict recursion in automotive/aerospace firmware.",hint:"Constrained RAM causes hardware stack overflow.",level:"advanced"},{question:"How do you print numbers from 1 to N using recursion WITHOUT loops?",shortAnswer:'Base case: `if (n == 0) return;`; recurse `print1ToN(n - 1);` first, and then `printf("%d ", n);` during the unwinding phase!',explanation:"Reversing the statement order prints numbers in ascending order.",hint:"Recurse first, print during unwinding phase.",level:"basic",codeExample:`void print1ToN(int n) {
    if (n == 0) return;
    print1ToN(n - 1); // Recurse first
    printf("%d ", n); // Print on unwinding
}`},{question:"How do you print numbers from N down to 1 using recursion?",shortAnswer:'Print `printf("%d ", n);` first, and then recurse `printNTo1(n - 1);` during the winding phase.',explanation:"Printing before the recursive call prints in descending order.",hint:"Print first, then recurse.",level:"basic"},{question:"What is an Accumulator in tail recursive programming?",shortAnswer:"An auxiliary parameter that carries the running intermediate result across successive recursive calls, eliminating the need to perform deferred calculations during unwinding.",explanation:"Enables converting non-tail recursion into tail recursion.",hint:"Parameter carrying running intermediate result.",level:"intermediate"},{question:"What is Sukanta Hui's golden advice for mastering recursion in C?",shortAnswer:"Always write the Base Case first, trust the recursive leap of faith on smaller subproblems, and never try to manually trace more than 3 stack levels in your head—draw the tree on paper!",explanation:"Visualizing the base case and unwinding phase prevents bugs.",hint:"Write base case first, draw stack tree on paper.",level:"basic"}],o=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_004: Functions & Modular Programming
Topic 4: Recursion: Base Condition, Call Stack Frames & Tail Calls
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: What is Recursion?
A: A function that solves a big problem by calling itself to solve a smaller
   subproblem, until reaching a trivial halting condition (The Base Case!).

THE RUSSIAN MATRYOSHKA NESTING DOLL METAPHOR:
  - You open a big doll -> find a smaller doll inside (Recursive call)
  - You open that smaller doll -> find an even smaller doll inside...
  - Finally, you hit the TINIEST SOLID DOLL -> The Base Case!
  - Then you close each doll back up in reverse order -> The Unwinding Phase!

2. THE 2 PHASES OF RECURSIVE EXECUTION:
--------------------------------------------------------------------------------
Phase 1: Winding (Call Stack Expansion)
         - Each call pushes a new Stack Frame onto the CPU Call Stack.
         - Calculations are postponed until the Base Case is reached.

Phase 2: Unwinding (Call Stack Resolution)
         - The base case returns a concrete value.
         - Stack frames pop off one-by-one, computing deferred operations.

3. TAIL RECURSION VS NON-TAIL RECURSION:
--------------------------------------------------------------------------------
- Non-Tail : return n * fact(n - 1);  // Pending multiplication after return!
- Tail     : return factTail(n-1, n * acc); // Recursive call is absolute LAST step!
             Compilers optimize tail calls into simple jump loops (O(1) stack space).

4. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. ALWAYS write the Base Condition first! (No base case = Stack Overflow crash!)
2. Ensure the recursive step strictly moves CLOSER to the base condition (e.g. n - 1)!
3. Use recursion for Trees, Graphs, Sorting (Merge/Quick), and Backtracking!
================================================================================
`;function b(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_004 · Topic 4"}),e.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Recursion & Stack Frame Mechanics"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Recursion Fundamentals: Base Condition, Stack Frames & Tail Calls"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master the art and science of recursive problem solving in C. Learn how call stack frames expand and unwind, why base conditions prevent fatal stack overflows, how tail call optimization works, and how to solve classic puzzles like the Tower of Hanoi."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-900 border-2 border-rose-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-rose-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-300 text-xl border border-rose-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-rose-200 tracking-tight",children:"Teacher's Corner: The Russian Nesting Dolls Analogy"}),e.jsx("p",{className:"text-xs text-rose-300/80",children:"How Sukanta Hui teaches recursion intuition at Coder & AccoTax (Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"🪆"})," Step 1: The Matryoshka Doll & The Two Phases of Recursion"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Imagine a set of wooden Russian nesting dolls on your table:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30 space-y-2",children:[e.jsx("span",{className:"text-sky-300 font-bold text-sm block",children:"1. The Winding Phase (Stack Expansion):"}),e.jsxs("p",{className:"text-slate-300",children:["You open a big doll, and inside is a smaller doll. You open that one, and find an even smaller doll! Each doll opened is a ",e.jsx("strong",{children:"new stack frame pushed onto the CPU call stack"}),". No final answers yet—just waiting!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2",children:[e.jsx("span",{className:"text-emerald-300 font-bold text-sm block",children:"2. The Base Case & Unwinding Phase:"}),e.jsxs("p",{className:"text-slate-300",children:["Finally, you open a doll and find the ",e.jsx("strong",{children:"tiniest solid baby doll (The Base Case!)"}),". It cannot be opened further! Now, you start closing all the dolls back up one-by-one, calculating the result at each step as stack frames pop off!"]})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{children:"💥"})," Step 2: What Happens If You Forget the Base Case? (Stack Overflow!)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["When ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," ran their first recursive program without an ",e.jsx("code",{children:"if (n <= 1)"})," halting check, their program instantly crashed with a ",e.jsx("code",{children:"Segmentation Fault"}),"."]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-xs text-slate-300",children:[e.jsx("span",{className:"text-rose-400 font-bold block font-sans mb-1",children:"❌ Infinite Call Stack Explosion:"}),"fact(4) → fact(3) → fact(2) → fact(1) → fact(0) → fact(-1) → fact(-2)...",e.jsx("br",{}),"Thousands of stack frames eat up all available RAM stack memory until the OS forcibly terminates the program with a ",e.jsx("strong",{children:"Stack Overflow"}),"!"]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore classic recursive patterns from mathematical factorials and Euclidean GCD to Tower of Hanoi and fast binary exponentiation"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Euclidean Recursive GCD"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"Tail Recursive"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Computes Greatest Common Divisor in $O(\\log N)$ logarithmic recursive steps."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int gcdRecursive(int a, int b) {
    // Base Case: when divisor reaches 0, 'a' is GCD!
    if (b == 0) return a;
    return gcdRecursive(b, a % b); // Tail call!
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: Tail-Call Optimized Factorial"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"TCO Pattern"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Passes intermediate products forward, enabling $O(1)$ stack frame reuse."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`unsigned long long factTail(int n, unsigned long long acc) {
    if (n <= 1) return acc;
    // Pure tail call (no pending multiplication!)
    return factTail(n - 1, n * acc);
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Fast Divide-and-Conquer Power"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"O(log N) Divide & Conquer"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Halves the exponent on every step instead of slow linear multiplication."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`double fastPower(double x, int n) {
    if (n == 0) return 1.0;
    double half = fastPower(x, n / 2);
    if (n % 2 == 0) return half * half;
    return x * half * half;
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: Tower of Hanoi 3-Peg Solver"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Tree Recursion"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Solves the $2^N - 1$ disk transfer game with 3 recursive peg shifts."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`void hanoi(int n, char from, char to, char aux) {
    if (n == 1) {
        printf("Move disk 1 from %c -> %c\\n", from, to);
        return;
    }
    hanoi(n - 1, from, aux, to);
    printf("Move disk %d from %c -> %c\\n", n, from, to);
    hanoi(n - 1, aux, to, from);
}`})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Recursion Call Stack Expansion & Unwinding"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 300",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"280",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"The 2 Phases of Factorial(3): Winding (Stack Push) & Unwinding (Stack Pop)"}),e.jsxs("g",{transform:"translate(60, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"180",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"28",textAnchor:"middle",fill:"#38bdf8",className:"font-mono text-xs font-bold",children:"1. Call fact(3)"}),e.jsx("rect",{x:"15",y:"45",width:"130",height:"40",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"25",y:"70",fill:"#e2e8f0",className:"font-mono text-[11px]",children:"n = 3"}),e.jsx("text",{x:"15",y:"115",fill:"#f59e0b",className:"text-[10px]",children:"3 * fact(2)"}),e.jsx("text",{x:"15",y:"140",fill:"#34d399",className:"text-[10px] font-bold",children:"Returns: 3 * 2 = 6"})]}),e.jsx("path",{d:"M 230 110 L 290 110",stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsx("text",{x:"260",y:"98",textAnchor:"middle",fill:"#38bdf8",className:"text-[9px] font-mono",children:"PUSH"}),e.jsxs("g",{transform:"translate(300, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"180",rx:"10",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"28",textAnchor:"middle",fill:"#f59e0b",className:"font-mono text-xs font-bold",children:"2. Call fact(2)"}),e.jsx("rect",{x:"15",y:"45",width:"130",height:"40",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"25",y:"70",fill:"#e2e8f0",className:"font-mono text-[11px]",children:"n = 2"}),e.jsx("text",{x:"15",y:"115",fill:"#f59e0b",className:"text-[10px]",children:"2 * fact(1)"}),e.jsx("text",{x:"15",y:"140",fill:"#34d399",className:"text-[10px] font-bold",children:"Returns: 2 * 1 = 2"})]}),e.jsx("path",{d:"M 470 110 L 530 110",stroke:"#38bdf8",strokeWidth:"2.5"}),e.jsx("text",{x:"500",y:"98",textAnchor:"middle",fill:"#38bdf8",className:"text-[9px] font-mono",children:"PUSH"}),e.jsxs("g",{transform:"translate(540, 70)",children:[e.jsx("rect",{x:"0",y:"0",width:"170",height:"180",rx:"10",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"85",y:"28",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs font-bold",children:"3. BASE CASE fact(1)"}),e.jsx("rect",{x:"15",y:"45",width:"140",height:"40",rx:"6",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"25",y:"70",fill:"#34d399",className:"font-mono text-[11px] font-bold",children:"if (n <= 1) return 1;"}),e.jsx("text",{x:"15",y:"115",fill:"#34d399",className:"text-[10px]",children:"Halts Recursion!"}),e.jsx("text",{x:"15",y:"140",fill:"#34d399",className:"text-[10px] font-bold",children:"Returns: 1"})]}),e.jsx("path",{d:"M 625 210 C 500 260, 300 260, 140 210",stroke:"#a78bfa",strokeWidth:"3",strokeDasharray:"6,4"}),e.jsx("text",{x:"380",y:"270",textAnchor:"middle",fill:"#a78bfa",className:"text-[11px] font-mono font-bold",children:"UNWINDING RESOLUTION PHASE → Popping Stack Frames & Computing Products"})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: RecursionStackDemo.c"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"RecursionStackDemo.c"}),") traces call stack expansion and unwinding in real-time, demonstrates tail recursive optimization, computes the Fibonacci sequence, and solves the Tower of Hanoi puzzle."]}),e.jsx(n,{fileModule:i,title:"RecursionStackDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     RECURSION & CALL STACK ANALYSIS - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Factorial Call Stack Expansion & Unwinding (N = 4) ---
-> Entering fact(4) [Stack Depth 0]
  -> Entering fact(3) [Stack Depth 1]
    -> Entering fact(2) [Stack Depth 2]
      -> Entering fact(1) [Stack Depth 3]
      <- Base Case Reached at fact(1) = 1 [Unwinding Begins]
    <- Returning from fact(2): 2 * 1 = 2
  <- Returning from fact(3): 3 * 2 = 6
<- Returning from fact(4): 4 * 6 = 24
Final Calculated Factorial (4!) = 24

--- [2] Tail Recursive Factorial (N = 5, Accumulator = 1) ---
5! via Tail Recursion = 120

--- [3] Recursive Fibonacci Terms [0 to 7] ---
Fib(0) = 0  Fib(1) = 1  Fib(2) = 1  Fib(3) = 2  Fib(4) = 3  Fib(5) = 5  Fib(6) = 8  Fib(7) = 13  

--- [4] Tower of Hanoi Solution (3 Disks: A -> C via B) ---
   Move disk 1 from peg A -> peg C
   Move disk 2 from peg A -> peg B
   Move disk 1 from peg C -> peg B
   Move disk 3 from peg A -> peg C
   Move disk 1 from peg B -> peg A
   Move disk 2 from peg B -> peg C
   Move disk 1 from peg A -> peg C

===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Base Case:"})," Always write the base condition first to prevent runaway infinite recursion and Stack Overflow crashes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Moving Away from Base Case:"})," Writing ",e.jsx("code",{children:"fact(n + 1)"})," instead of ",e.jsx("code",{children:"fact(n - 1)"})," diverges from the halting rule."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Exponential Naive Fibonacci:"})," Re-computing overlapping subproblems in multi-branch recursion causes severe performance slowdowns; use iteration or dynamic memoization for Fibonacci."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"How does Tail Call Optimization (TCO) allow functional programming languages and modern C compilers to execute deep recursive functions without consuming extra stack memory?"})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 001_004 Topic 4 FAQs: Recursion Fundamentals",questions:r})}),e.jsx("section",{children:e.jsx(a,{content:o,title:"Module 001_004 Topic 4 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_004_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Remember the Matryoshka nesting doll: always establish your base case first, and trust the recursive leap of faith! Recursion is the superpower of data structures! — Sukanta Hui"})})]})}export{b as default};
