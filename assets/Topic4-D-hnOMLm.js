import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-Cyf0mDYr.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`/**
 * ============================================================================
 * Program: NestedLoopsPatternsDemo.c
 * Module: 001_003 - Control Flow: Branching, Decision Making & Loops
 * Topic 4: Building nested loop algorithms: matrix indexing, primes, pyramid patterns
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

int main(void) {
    printf("===================================================================\\n");
    printf("     NESTED LOOPS & PATTERN ALGORITHMS - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    /* 1. Multiplication Table Grid (Matrix Coordinate Layout) */
    printf("--- [1] 5x5 Multiplication Table Matrix Grid ---\\n");
    for (int row = 1; row <= 5; row++) {
        for (int col = 1; col <= 5; col++) {
            printf("%4d", row * col);
        }
        printf("\\n");
    }

    /* 2. Right-Angled Number Triangle Pattern */
    printf("\\n--- [2] Right-Angled Number Triangle Pattern ---\\n");
    int rows = 5;
    for (int i = 1; i <= rows; i++) {
        for (int j = 1; j <= i; j++) {
            printf("%d ", j);
        }
        printf("\\n");
    }

    /* 3. Centered Equilateral Star Pyramid */
    printf("\\n--- [3] Centered Equilateral Star Pyramid ---\\n");
    for (int i = 1; i <= rows; i++) {
        /* Print leading alignment spaces */
        for (int space = 1; space <= rows - i; space++) {
            printf(" ");
        }
        /* Print odd sequence of stars (2*i - 1) */
        for (int star = 1; star <= (2 * i - 1); star++) {
            printf("*");
        }
        printf("\\n");
    }

    /* 4. Optimized Prime Number Search up to N (Nested Verification) */
    printf("\\n--- [4] Prime Numbers up to 30 (Optimized sqrt(N) Check) ---\\n");
    printf("Primes: ");
    for (int num = 2; num <= 30; num++) {
        bool isPrime = true;
        for (int d = 2; d * d <= num; d++) {
            if (num % d == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            printf("%d ", num);
        }
    }
    printf("\\n===================================================================\\n");

    return 0;
}
`,i=[{question:"What is a nested loop in C?",shortAnswer:"A loop placed completely inside the body of another loop.",explanation:"For every single iteration of the outer loop, the inner loop executes through all its iterations from start to finish.",hint:"Loops inside loops.",level:"basic"},{question:"How do you calculate the total number of iterations in a nested loop?",shortAnswer:"Multiply the number of outer loop iterations by the number of inner loop iterations (Outer_N * Inner_M).",explanation:"If the outer loop runs 5 times and the inner loop runs 10 times, the inner body executes 5 * 10 = 50 times.",hint:"Product of iteration counts.",level:"basic"},{question:"What is the time complexity of two nested loops each running N times?",shortAnswer:"O(N^2) quadratic time complexity.",explanation:"As N doubles, execution time quadruples (N * N = N^2).",hint:"O(N^2) quadratic complexity.",level:"basic"},{question:"How does the 'Hour Hand and Minute Hand of a Clock' analogy explain nested loops?",shortAnswer:"The outer loop is like the hour hand (moves 1 step); the inner loop is like the minute hand (must complete a full 60-minute circle before the hour hand moves again).",explanation:"Visualizes the hierarchy where the inner loop fully resets and runs to completion on every outer tick.",hint:"Minute hand spins full circle for every single tick of the hour hand.",level:"basic"},{question:"How are nested loops used to traverse a 2D matrix in row-major order?",shortAnswer:"Outer loop iterates rows (`row = 0; row < rows; row++`); inner loop iterates columns (`col = 0; col < cols; col++`), accessing `matrix[row][col]`.",explanation:"Standard matrix traversal matching physical memory layout in C.",hint:"Outer loop: row index; Inner loop: column index.",level:"basic",codeExample:`for (int r = 0; r < rows; r++) {
    for (int c = 0; c < cols; c++) {
        printf("%d ", matrix[r][c]);
    }
    printf("\\n");
}`},{question:"How do you print a right-angled triangle pattern of stars using nested loops?",shortAnswer:"Outer loop controls rows (`i = 1 to N`); inner loop prints stars from `1` to `i` (`j = 1 to i`).",explanation:"Row 1 prints 1 star; row 2 prints 2 stars; row N prints N stars.",hint:"Inner loop bounds depend on outer loop variable i.",level:"basic",codeExample:`for (int i = 1; i <= n; i++) {
    for (int j = 1; j <= i; j++) printf("* ");
    printf("\\n");
}`},{question:"How do you print a centered equilateral pyramid of stars?",shortAnswer:"For each row `i`: first loop prints `(N - i)` spaces; second loop prints `(2 * i - 1)` stars; then print a newline.",explanation:"Leading spaces ensure symmetrical alignment; `2*i - 1` generates the odd sequence (1, 3, 5, 7, 9) of stars.",hint:"Spaces = (N - i), Stars = (2 * i - 1).",level:"intermediate"},{question:"How do you optimize Prime Number detection from O(N) to O(sqrt(N))?",shortAnswer:"Test divisors only up to `d * d <= num` (or `d <= sqrt(num)`) instead of testing all numbers up to `num - 1`.",explanation:"If a number N has a factor larger than sqrt(N), it must have a corresponding factor smaller than sqrt(N). If no divisor is found up to sqrt(N), N is prime.",hint:"Test divisors up to d * d <= num.",level:"intermediate",codeExample:`bool isPrime = (num >= 2);
for (int d = 2; d * d <= num; d++) {
    if (num % d == 0) { isPrime = false; break; }
}`},{question:"What is Floyd's Triangle and how is it constructed?",shortAnswer:"A right-angled triangle of consecutive natural numbers (1; 2 3; 4 5 6; 7 8 9 10...).",explanation:'Maintain a running counter variable that increments on every inner loop print: `printf("%d ", count++)`.',hint:"Running incremented counter in right-angled loop.",level:"basic",codeExample:`int count = 1;
for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= i; j++) printf("%d ", count++);
    printf("\\n");
}`},{question:"What is Pascal's Triangle in C pattern programming?",shortAnswer:"A triangular array of binomial coefficients where each number is the sum of the two numbers directly above it.",explanation:"Values are computed using combination formula `C(n, r) = n! / (r! * (n-r)!)` or iteratively with `val = val * (i - j) / j`.",hint:"Binomial coefficient triangle.",level:"intermediate"},{question:"What happens if you accidentally use the same loop counter variable `i` for both outer and inner loops?",shortAnswer:"The inner loop overwrites the outer loop's counter, corrupting the iteration progression and causing infinite loops or incorrect terminations.",explanation:"Always use distinct variable names (e.g. `i` for outer, `j` for inner, `k` for 3rd layer).",hint:"Variable name collision bug.",level:"basic",codeExample:`// BUG:
// for (int i=0; i<5; i++) { for (int i=0; i<5; i++) ... }
// FIX:
for (int i = 0; i < 5; i++) { for (int j = 0; j < 5; j++) ... }`},{question:"How do you print an Inverted Star Pyramid?",shortAnswer:"Run outer loop in reverse from `N` down to `1`: inner loop prints `(N - i)` spaces and `(2 * i - 1)` stars.",explanation:"Reverses the row expansion order.",hint:"Outer loop decreases: for (int i = n; i >= 1; i--).",level:"basic"},{question:"How do you print a Diamond Star Pattern?",shortAnswer:"Combine an upper centered equilateral pyramid (1 to N) with a lower inverted pyramid (N-1 down to 1).",explanation:"Two sequential nested loop sections form the upper and lower halves of the diamond.",hint:"Upper pyramid + Lower inverted pyramid.",level:"intermediate"},{question:"What is a Hollow Square Star Pattern and how is it coded?",shortAnswer:"Print `*` if on a boundary (`r == 1 || r == n || c == 1 || c == n`), otherwise print a blank space ` `.",explanation:"Conditional boundary check inside the inner loop.",hint:"Border coordinate condition check.",level:"basic"},{question:"What is Cache Locality and why does looping rows in the outer loop matter for 2D arrays?",shortAnswer:"C stores 2D arrays in Row-Major order. Accessing `matrix[row][col]` provides spatial cache locality, running up to 10x faster than column-major `matrix[col][row]`.",explanation:"Row traversal accesses contiguous RAM addresses loaded into CPU cache lines.",hint:"Spatial cache hits via row-major iteration.",level:"advanced"},{question:"How do you check if a number is an Armstrong Number using loops?",shortAnswer:"Count total digits `k`; then peel each digit and sum `digit^k`; check if `sum == originalNumber`.",explanation:"For example, 153 = 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.",hint:"Sum of powers of digits equals original number.",level:"intermediate"},{question:"How do you print an Alternating 0-1 Binary Triangle (e.g. 1; 0 1; 1 0 1...)?",shortAnswer:"If `(row + col) % 2 == 0` print `1`, else print `0`.",explanation:"The parity of the sum of coordinates alternates checkerboard-style across rows and columns.",hint:"(row + col) % 2 parity rule.",level:"basic"},{question:"How do you find the Transpose of a matrix using nested loops?",shortAnswer:"Set `transpose[col][row] = original[row][col]` for all row and column indices.",explanation:"Swaps row and column indices to reflect the matrix across its main diagonal.",hint:"Swap row and column indices.",level:"basic"},{question:"What is the time complexity of Matrix Multiplication of two N x N matrices?",shortAnswer:"O(N^3) cubic time complexity using 3 nested loops.",explanation:"Outer loop: row of A; middle loop: col of B; inner loop: dot product accumulation over K.",hint:"3 nested loops yield O(N^3).",level:"intermediate"},{question:"How many loop layers should you generally avoid exceeding in clean code?",shortAnswer:"Avoid exceeding 3 nested loop levels (O(N^3)). Deeper nesting should be refactored into helper functions or optimized algorithms.",explanation:"Deep nesting creates performance bottlenecks and cognitive complexity.",hint:"Limit nesting to 3 levels max.",level:"intermediate"},{question:"How do you print a Butterfly Star Pattern?",shortAnswer:"Divide into two halves; for each row print left stars, center spacing, and right stars.",explanation:"Combines left-aligned and right-aligned mirrored triangles.",hint:"Mirrored left and right triangles with center gap.",level:"intermediate"},{question:"How do you find all Prime Factors of a number using nested loops?",shortAnswer:"Outer loop checks divisor `d` starting from 2; inner `while (num % d == 0)` prints `d` and divides `num /= d`.",explanation:"Repeated division by prime candidates strips factors completely.",hint:"While divisible by d, print and divide.",level:"intermediate"},{question:"What is the Sieve of Eratosthenes algorithm and how does it optimize finding primes up to N?",shortAnswer:"Initializes a boolean array and iteratively marks multiples of each prime starting from `p*p` as composite in O(N log log N) time.",explanation:"Far faster than testing each number individually with trial division.",hint:"Array-based composite marking in O(N log log N).",level:"advanced"},{question:"How do you calculate the Trace (sum of main diagonal elements) of a square matrix?",shortAnswer:"Use a single loop: `trace += matrix[i][i]` for `i` from `0` to `N-1`.",explanation:"Main diagonal elements share identical row and column indices, requiring only O(N) time without nested loops.",hint:"Single loop over matrix[i][i].",level:"basic"},{question:'Why is printing a newline `printf("\\n")` placed after the inner loop in pattern printing?',shortAnswer:"Because the inner loop prints all columns of the current row horizontally; the newline terminates the row and moves the cursor to the next line.",explanation:"Separates distinct rows visually.",hint:"Advances output to next row line.",level:"basic"}],a=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_003: Control Flow: Branching, Decision Making & Loops
Topic 4: Building Nested Loop Algorithms: Matrix Grids, Primes & Patterns
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: How does a Nested Loop work? (The Clock Hands Analogy)
A: Think of an analog clock:
   - Outer loop (i) = Hour hand (slow).
   - Inner loop (j) = Minute hand (fast).
   For EVERY single hour tick (i = 1), the minute hand MUST complete all 60
   minutes (j = 1 to 60) before the hour hand can move to 2!

2. PATTERN PRINTING 3-STEP MASTER BLUEPRINT:
--------------------------------------------------------------------------------
Every pattern in C is solved with these 3 questions:
1. "How many total lines/rows?" -> Outer loop (for i = 1 to N)
2. "For each row, what prints across columns?" -> Inner loop(s)
   - Symmetrical spaces? -> for space = 1 to (N - i)
   - Stars or numbers?   -> for star = 1 to (2*i - 1)
3. "Did I remember the newline?" -> printf("\\n") after the inner loop!

3. OPTIMIZED PRIME NUMBER CHECK UP TO sqrt(N):
--------------------------------------------------------------------------------
Testing all numbers up to N takes O(N) time.
Testing up to d * d <= N takes O(sqrt(N)) time!
For N = 1,000,000, sqrt(N) is only 1,000 checks (1000x faster)!

bool isPrime = (num >= 2);
for (int d = 2; d * d <= num; d++) {
    if (num % d == 0) { isPrime = false; break; }
}

4. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. NEVER use the same variable 'i' for both outer and inner loops!
2. Always iterate 2D arrays row-by-row (row-major) for maximum CPU cache speed!
3. Trace your row-column (i, j) coordinate grid on paper before writing code!
================================================================================
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_003 · Topic 4"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Nested Loops & Pattern Algorithms"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Building Nested Loop Algorithms: Matrix Indexing, Primes & Pyramid Patterns"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master 2D coordinate spaces and nested iteration complexity in C. Learn the mathematics of star and number pyramids, 2D matrix transformations, and optimized $\\mathcal{O}(\\sqrt{N})$ prime number search engines."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-purple-950/40 via-slate-900 to-slate-900 border-2 border-purple-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-purple-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-purple-500/20 text-purple-300 text-xl border border-purple-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-purple-200 tracking-tight",children:"Teacher's Corner: The Clock Hands & Pattern Blueprint"}),e.jsx("p",{className:"text-xs text-purple-300/80",children:"Visualizing nested loops intuitively with Sukanta Hui (Coder & AccoTax)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🕰️"})," Step 1: The Clock Hands Analogy"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Imagine looking at a wall clock in our Barrackpore computer center:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-sky-300 font-bold block text-sm",children:"Outer Loop (The Slow Hour Hand):"}),e.jsxs("p",{className:"text-slate-300",children:["Controls the ",e.jsx("strong",{children:"current row"}),". It only moves ",e.jsx("strong",{children:"1 step forward"})," (from Row 1 to Row 2) after the inner loop has completed all its work!"]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30 space-y-2",children:[e.jsx("span",{className:"text-purple-300 font-bold block text-sm",children:"Inner Loop (The Fast Minute Hand):"}),e.jsxs("p",{className:"text-slate-300",children:["Controls the ",e.jsx("strong",{children:"columns on this row"}),". For every single hour, it must spin a full 60-minute circle from start to finish before letting the hour hand tick!"]})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"📐"})," Step 2: Sukanta's 3-Question Pattern Blueprint"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Any pattern (pyramids, triangles, diamonds) can be solved by answering 3 simple questions:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-amber-400 font-bold block",children:"1. Total Rows?"}),e.jsxs("p",{className:"text-slate-300",children:["Creates the outer loop: ",e.jsx("code",{children:"for (int i = 1; i <= N; i++)"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-sky-400 font-bold block",children:"2. What Prints Across?"}),e.jsxs("p",{className:"text-slate-300",children:["Inner loops for spaces ",e.jsx("code",{children:"(N - i)"})," & stars ",e.jsx("code",{children:"(2*i - 1)"})]})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1",children:[e.jsx("span",{className:"text-emerald-400 font-bold block",children:"3. Newline at Row End?"}),e.jsxs("p",{className:"text-slate-300",children:["Always place ",e.jsx("code",{children:'printf("\\n");'})," right after the inner loops!"]})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚡"})," Step 3: Why $\\sqrt{N}$ Prime Checking is 1000x Faster"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"If a number like $100$ has factors, they always pair up ($2 \\times 50$, $4 \\times 25$, $10 \\times 10$). If you don't find any divisor up to $\\sqrt{100} = 10$, you are mathematically guaranteed that no divisor exists above 10!"}),e.jsxs("div",{className:"p-3 bg-emerald-950/30 rounded-xl border border-emerald-800/40 text-xs text-emerald-200",children:["For $N = 1,000,000$, standard trial division takes 1,000,000 tests. With ",e.jsx("code",{children:"d * d <= num"}),", it takes only ",e.jsx("strong",{children:"1,000 tests"}),"—a 1000x CPU speedup!"]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Master 4 classic nested loop algorithmic patterns"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Floyd's Triangle"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"Running Counter"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Prints consecutive natural numbers in a triangle (1; 2 3; 4 5 6; 7 8 9 10)."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int count = 1, rows = 4;

for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= i; j++) {
        printf("%3d", count++);
    }
    printf("\\n");
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: Symmetrical Diamond"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"Dual Pyramid"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Combines an upper standard pyramid with a lower inverted pyramid."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int n = 4;
// Upper Pyramid
for (int i = 1; i <= n; i++) {
    for (int s = 1; s <= n - i; s++) printf(" ");
    for (int k = 1; k <= 2*i - 1; k++) printf("*");
    printf("\\n");
}
// Lower Inverted Pyramid
for (int i = n - 1; i >= 1; i--) {
    for (int s = 1; s <= n - i; s++) printf(" ");
    for (int k = 1; k <= 2*i - 1; k++) printf("*");
    printf("\\n");
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: 2D Matrix Transpose"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"Coordinate Swapping"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Reflects matrix elements across the main diagonal: $B[c][r] = A[r][c]$."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int A[2][3] = {{1, 2, 3}, {4, 5, 6}};
int B[3][2];

for (int r = 0; r < 2; r++) {
    for (int c = 0; c < 3; c++) {
        B[c][r] = A[r][c];
    }
}
// Matrix B is now 3x2 with transposed rows and columns`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: 0-1 Checkerboard Triangle"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Coordinate Parity"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Prints alternating 1s and 0s based on whether $(row + col)$ is even or odd."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int rows = 4;
for (int i = 1; i <= rows; i++) {
    for (int j = 1; j <= i; j++) {
        if ((i + j) % 2 == 0) printf("1 ");
        else printf("0 ");
    }
    printf("\\n");
}`})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Nested Loop Time Complexity & Cache Locality"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Nested loops multiply execution counts ($\\mathcal{O}(N \\times M)$). In systems programming, accessing 2D arrays row-by-row (",e.jsx("code",{children:"matrix[row][col]"}),") provides superior CPU cache line utilization compared to column-major jumps because C stores 2D matrices contiguously in Row-Major order."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2 mt-4",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Context (Barrackpore Systems Lab):"}),e.jsxs("p",{children:["When ",e.jsx("strong",{children:"Tuhina"})," and ",e.jsx("strong",{children:"Swadeep"})," generated prime numbers up to 100,000, their program took 4 seconds with basic division up to $N$. When ",e.jsx("strong",{children:"Sukanta Hui"})," upgraded their condition to ",e.jsx("code",{children:"d * d <= num"}),", it completed in under 4 milliseconds!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: 2D Matrix Row-Column Coordinate Traversal"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"2D Iteration Space: Outer Row Loop (i) vs Inner Column Loop (j)"}),e.jsxs("g",{transform:"translate(160, 65)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"40",rx:"6",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"25",textAnchor:"middle",fill:"#38bdf8",className:"font-mono text-xs font-bold",children:"[0,0]  [0,1]  [0,2]"}),e.jsx("text",{x:"-40",y:"25",fill:"#94a3b8",className:"font-mono text-xs",children:"i = 0 →"}),e.jsx("rect",{x:"0",y:"55",width:"180",height:"40",rx:"6",fill:"#1e293b",stroke:"#a78bfa",strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"80",textAnchor:"middle",fill:"#a78bfa",className:"font-mono text-xs font-bold",children:"[1,0]  [1,1]  [1,2]"}),e.jsx("text",{x:"-40",y:"80",fill:"#94a3b8",className:"font-mono text-xs",children:"i = 1 →"}),e.jsx("rect",{x:"0",y:"110",width:"180",height:"40",rx:"6",fill:"#1e293b",stroke:"#34d399",strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"135",textAnchor:"middle",fill:"#34d399",className:"font-mono text-xs font-bold",children:"[2,0]  [2,1]  [2,2]"}),e.jsx("text",{x:"-40",y:"135",fill:"#94a3b8",className:"font-mono text-xs",children:"i = 2 →"})]}),e.jsxs("g",{transform:"translate(480, 75)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"380",height:"130",rx:"12",fill:"#1e293b",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"190",y:"30",textAnchor:"middle",fill:"#f59e0b",className:"font-bold text-sm",children:"Iteration Multiplier Principle"}),e.jsx("text",{x:"20",y:"60",fill:"#e2e8f0",className:"text-xs",children:"Outer Loop: Runs N times (e.g. 3 rows)"}),e.jsx("text",{x:"20",y:"85",fill:"#e2e8f0",className:"text-xs",children:"Inner Loop: Runs M times per row (e.g. 3 cols)"}),e.jsx("text",{x:"20",y:"110",fill:"#34d399",className:"text-xs font-bold font-mono",children:"Total Inner Cycles: N * M = 9 total executions"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Deep Technical Breakdown: Nested Loop Computational Patterns"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Algorithm Pattern"}),e.jsx("th",{className:"p-3",children:"Inner Loop Condition"}),e.jsx("th",{className:"p-3",children:"Time Complexity"}),e.jsx("th",{className:"p-3",children:"Core Application"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"Right-Angled Triangle"}),e.jsx("td",{className:"p-3 font-mono",children:e.jsx("code",{children:"j <= i"})}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"O(N^2 / 2) → O(N^2)"}),e.jsx("td",{className:"p-3",children:"Pattern generation, lower triangular matrices"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-amber-300",children:"Full 2D Matrix Grid"}),e.jsx("td",{className:"p-3 font-mono",children:e.jsx("code",{children:"col < totalCols"})}),e.jsx("td",{className:"p-3 font-mono text-amber-400",children:"O(Rows * Cols)"}),e.jsx("td",{className:"p-3",children:"Image pixel filtering, matrix arithmetic"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-purple-300",children:"Optimized Prime Search"}),e.jsx("td",{className:"p-3 font-mono",children:e.jsx("code",{children:"d * d <= num"})}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"O(N * sqrt(N))"}),e.jsx("td",{className:"p-3",children:"Cryptographic key generation, prime ranges"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-rose-300",children:"Matrix Multiplication"}),e.jsx("td",{className:"p-3 font-mono",children:"3 nested loops (i, j, k)"}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"O(N^3) Cubic"}),e.jsx("td",{className:"p-3",children:"3D Graphics transformations, neural network layers"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Nested Loop Algorithms in Action"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"NestedLoopsPatternsDemo.c"}),") demonstrates a 2D multiplication table grid, right-angled number triangle, centered equilateral star pyramid, and optimized prime search up to 30."]}),e.jsx(t,{fileModule:o,title:"NestedLoopsPatternsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     NESTED LOOPS & PATTERN ALGORITHMS - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] 5x5 Multiplication Table Matrix Grid ---
   1   2   3   4   5
   2   4   6   8  10
   3   6   9  12  15
   4   8  12  16  20
   5  10  15  20  25

--- [2] Right-Angled Number Triangle Pattern ---
1 
1 2 
1 2 3 
1 2 3 4 
1 2 3 4 5 

--- [3] Centered Equilateral Star Pyramid ---
    *
   ***
  *****
 *******
*********

--- [4] Prime Numbers up to 30 (Optimized sqrt(N) Check) ---
Primes: 2 3 5 7 11 13 17 19 23 29 
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Variable Collision:"})," Using ",e.jsx("code",{children:"i"})," for both outer and inner loops corrupts the counter and creates infinite loops. Always use distinct variables (",e.jsx("code",{children:"i"}),", ",e.jsx("code",{children:"j"}),", ",e.jsx("code",{children:"k"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Forgetting the Newline:"})," Omitting ",e.jsx("code",{children:'printf("\\n");'})," after the inner loop prints all pattern elements on a single continuous horizontal line!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Unoptimized Prime Checking:"})," Testing divisors all the way to $N-1$ instead of $\\sqrt{N}$ wastes massive CPU time on large numbers."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"How would you modify the centered pyramid pattern to print a hollow pyramid where only the boundary stars and the base stars are printed? What conditional expression determines if $(row, col)$ lies on a boundary?"})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 001_003 Topic 4 FAQs: Nested Loops & Patterns",questions:i})}),e.jsx("section",{children:e.jsx(r,{content:a,title:"Module 001_003 Topic 4 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_003_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Always draft your pattern coordinate grid (i for row, j for column) on a notebook before touching the keyboard! Clear mental coordinate mapping makes pattern coding easy! — Sukanta Hui"})})]})}export{g as default};
