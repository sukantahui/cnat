import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-sVKljqCv.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";import"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`/**
 * ============================================================================
 * Program: LoopsConstructsDemo.c
 * Module: 001_003 - Control Flow: Branching, Decision Making & Loops
 * Topic 2: Iterative Loop Constructs: while, do-while (post-test), for (pre-test)
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>

int main(void) {
    printf("===================================================================\\n");
    printf("     ITERATIVE LOOP CONSTRUCTS IN C - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    /* 1. Pre-Test 'for' Loop: Computing Factorial & Sum */
    int n = 5;
    long long factorial = 1;
    int sum = 0;

    printf("--- [1] Pre-Test 'for' Loop (Counting & Accumulation) ---\\n");
    for (int i = 1; i <= n; i++) {
        factorial *= i;
        sum += i;
    }
    printf("Calculations for N = %d:\\n", n);
    printf("Sum (1 to %d)       : %d\\n", n, sum);
    printf("Factorial (%d!)     : %lld\\n", n, factorial);

    /* 2. Pre-Test 'while' Loop: Digit Peeling & Number Reversal */
    int originalNumber = 12345;
    int numCopy = originalNumber;
    int reversedNumber = 0;
    int digitCount = 0;

    printf("\\n--- [2] Pre-Test 'while' Loop (Digit Extraction) ---\\n");
    while (numCopy > 0) {
        int remainder = numCopy % 10;
        reversedNumber = (reversedNumber * 10) + remainder;
        numCopy /= 10;
        digitCount++;
    }
    printf("Original Number     : %d\\n", originalNumber);
    printf("Extracted Digits    : %d\\n", digitCount);
    printf("Reversed Number     : %d\\n", reversedNumber);

    /* 3. Post-Test 'do-while' Loop: Guaranteed Minimum 1 Execution */
    printf("\\n--- [3] Post-Test 'do-while' Loop (Guaranteed Entry) ---\\n");
    int attemptCounter = 0;
    int simulatedUserPin = 4321;
    int correctPin = 4321;

    do {
        attemptCounter++;
        printf("PIN Validation Attempt #%d: Checking PIN %d...\\n", attemptCounter, simulatedUserPin);
        if (simulatedUserPin == correctPin) {
            printf("Access Granted on attempt %d!\\n", attemptCounter);
            break;
        }
    } while (attemptCounter < 3);

    printf("===================================================================\\n");
    return 0;
}
`,r=[{question:"What is an iterative loop in C?",shortAnswer:"A control flow structure that repeats a block of statements as long as a specified condition remains true (non-zero).",explanation:"Loops allow efficient repetition of operations (such as processing array elements or polling sensors) without writing duplicate code.",hint:"Repeats code until condition becomes false.",level:"basic"},{question:"What are the three primary loop constructs available in C?",shortAnswer:"1. `for` loop (pre-test, counter-controlled)\n2. `while` loop (pre-test, condition-controlled)\n3. `do-while` loop (post-test, guaranteed single execution)",explanation:"Each loop type is suited for different patterns: `for` when iteration count is known; `while` for event-driven logic; `do-while` when the body must run at least once.",hint:"for, while, and do-while.",level:"basic"},{question:"What is the key difference between a pre-test loop and a post-test loop?",shortAnswer:"A pre-test loop (`for`, `while`) checks the condition BEFORE entering the body (may execute 0 times); a post-test loop (`do-while`) checks AFTER executing the body (guaranteed to execute at least 1 time).",explanation:"If the initial condition is false, pre-test loops skip the body completely, while `do-while` executes once before testing.",hint:"Check condition before entering vs after exiting.",level:"basic"},{question:"What are the three parts of a standard `for` loop header in C?",shortAnswer:"1. Initialization (`int i = 0`)\n2. Condition test (`i < n`)\n3. Update / Increment (`i++`)",explanation:"Syntax: `for (initialization; condition; update) { ... }`. All three expressions are optional.",hint:"Initialization, Condition, Increment.",level:"basic"},{question:"What happens if you write `for (;;)` in C?",shortAnswer:"It creates an intentional infinite loop.",explanation:"Since the condition expression is omitted, C defaults it to true (non-zero), running forever until terminated by `break` or `return`.",hint:"Infinite loop idiom.",level:"basic",codeExample:`for (;;) {
    // Runs endlessly
    if (shouldExit) break;
}`},{question:"What happens if you write `while (1)` in C?",shortAnswer:"It creates an infinite loop because the condition constant 1 is always true.",explanation:"Commonly used in embedded systems firmware, game loops, and server listener threads.",hint:"Infinite loop idiom with while.",level:"basic"},{question:"What is the semicolon bug after a while loop header: `while (i < 5);`?",shortAnswer:"The semicolon creates an empty loop body, freezing the CPU in an infinite loop because `i` is never updated.",explanation:"The while loop tests `i < 5` with no body, never reaching the update statement below it.",hint:"Accidental empty loop causing freeze.",level:"basic",codeExample:`// BUG:
// while (i < 5); { i++; }
// FIX:
while (i < 5) { i++; }`},{question:"Can a `for` loop contain multiple loop variables (e.g. `for (int i=0, j=10; ...)` )?",shortAnswer:"Yes, multiple expressions separated by commas can be placed in the initialization and update sections.",explanation:"The comma operator allows simultaneous manipulation of multiple indices.",hint:"Use comma operator: for (int i=0, j=10; i < j; i++, j--).",level:"intermediate",codeExample:`for (int i = 0, j = 10; i < j; i++, j--) {
    printf("%d %d\\n", i, j);
}`},{question:"Can variable declaration be done directly inside the `for` loop header in C99?",shortAnswer:"Yes, C99 introduced loop-scoped variable declarations like `for (int i = 0; ...)`.",explanation:"The variable `i` exists only within the scope of the `for` loop and is automatically destroyed upon loop exit.",hint:"C99 loop-scoped variable.",level:"basic"},{question:"Why does `do-while` require a semicolon at the end: `do { ... } while (condition);`?",shortAnswer:"The terminating semicolon informs the parser that the `while` statement concludes a `do-while` block rather than beginning a new `while` loop.",explanation:"Without the semicolon, the compiler flags a syntax error.",hint:"Required by C grammar to terminate the construct.",level:"basic"},{question:"How do you extract digits from an integer using a `while` loop?",shortAnswer:"Repeatedly compute `remainder = num % 10` (extracts last digit) and `num /= 10` (discards last digit) until `num == 0`.",explanation:"Standard algorithmic technique for palindrome checks, Armstrong number verification, and digit sum calculations.",hint:"Modulo 10 and divide by 10.",level:"basic",codeExample:`while (num > 0) {
    int digit = num % 10;
    printf("%d ", digit);
    num /= 10;
}`},{question:"How do you reverse a number using a loop in C?",shortAnswer:"`reversed = (reversed * 10) + (num % 10); num /= 10;` inside a `while (num > 0)` loop.",explanation:"Shifts existing digits one decimal place to the left and adds the extracted rightmost digit.",hint:"reversed * 10 + remainder.",level:"basic"},{question:"What is an Off-By-One Error (OBOE) in loop construction?",shortAnswer:"A logic error where a loop iterates one time too many or one time too few (e.g. using `<= length` instead of `< length`).",explanation:"Often leads to array buffer overruns when iterating 0-indexed arrays.",hint:"Boundary fencepost error.",level:"basic"},{question:"What is Loop Unrolling in compiler optimization?",shortAnswer:"A performance optimization where the compiler duplicates the loop body multiple times to reduce loop control branching overhead.",explanation:"Trades code size for faster CPU execution by reducing the number of condition checks and jumps.",hint:"Reduces branch instruction overhead.",level:"advanced"},{question:"How does the `do-while` loop assist in robust user input validation?",shortAnswer:"It displays the prompt and reads user input at least once, repeating if the input fails validation criteria.",explanation:"Avoids repeating the prompt code before and inside the loop.",hint:"Prompt first, check validity at the end.",level:"basic",codeExample:`int choice;
do {
    printf("Enter option (1-4): ");
    scanf("%d", &choice);
} while (choice < 1 || choice > 4);`},{question:"Can floating-point loop counters cause infinite loops?",shortAnswer:"Yes, accumulating small binary precision errors (like `0.1`) can cause `f != 1.0` to never be exactly equal.",explanation:"Always use integer counters for loop boundaries and derive floating-point values inside the body.",hint:"Never use exact float equality in loop tests.",level:"intermediate"},{question:"What is the time complexity of a loop iterating from 1 to N with `i *= 2`?",shortAnswer:"O(log N) logarithmic time complexity.",explanation:"The counter doubles on each iteration, reaching N in log2(N) steps.",hint:"Doubling increments yield logarithmic steps.",level:"intermediate"},{question:"Can a `while` loop condition contain side-effects like `while (*dest++ = *src++)`?",shortAnswer:"Yes, this is the classic idiomatic C `strcpy` loop that copies bytes until encountering the null terminator `\\0` (0).",explanation:"The assignment expression evaluates to the character copied; when `\\0` (ASCII 0) is copied, the condition evaluates to false and halts.",hint:"Classic string copying idiom.",level:"advanced"},{question:"What is the difference between prefix (`++i`) and postfix (`i++`) in the update expression of a `for` loop?",shortAnswer:"In a standard `for (int i=0; i<n; i++)`, there is NO difference in loop behavior because the update statement result is discarded.",explanation:"Both increment `i` by 1 after the body executes.",hint:"Identical behavior in standalone for loop update headers.",level:"basic"},{question:"What happens if a loop counter overflows its integer maximum value?",shortAnswer:"Signed integer overflow results in Undefined Behavior (UB); unsigned integers wrap around to 0, potentially creating an infinite loop.",explanation:"`for (unsigned char c = 0; c <= 255; c++)` is infinite because 255 + 1 wraps to 0.",hint:"Wrap-around creates infinite loops.",level:"advanced"},{question:"How do you calculate the sum of digits of an integer using a loop?",shortAnswer:"`sum += num % 10; num /= 10;` inside a `while (num > 0)` loop.",explanation:"Extracts each digit and accumulates into a running sum variable.",hint:"Accumulate remainder.",level:"basic"},{question:"What is the difference between a counter-controlled loop and a sentinel-controlled loop?",shortAnswer:"A counter-controlled loop iterates a fixed number of times; a sentinel-controlled loop runs until a special stopping value (sentinel, e.g. -1 or EOF) is encountered.",explanation:"Sentinel loops are used when the total number of inputs is unknown in advance.",hint:"Fixed count vs special stop token.",level:"basic"},{question:"How do you detect if a number is a Palindrome using a loop?",shortAnswer:"Reverse the number into a new variable using a `while` loop; then check if `original == reversed`.",explanation:"A number like 121 or 1331 reads identically backwards and forwards.",hint:"Compare original with reversed value.",level:"basic"},{question:"Can a `while` loop be rewritten as an equivalent `for` loop?",shortAnswer:"Yes, `while (cond) { body; }` is mathematically identical to `for (; cond; ) { body; }`.",explanation:"All three C loop constructs are Turing complete and inter-convertible.",hint:"Completely interchangeable.",level:"basic"},{question:"Why should loop termination conditions avoid calling heavy functions repeatedly (e.g. `i < strlen(str)`)?",shortAnswer:"Calling `strlen(str)` on every iteration recalculates string length in O(N) time, making the overall loop O(N^2) instead of O(N).",explanation:"Cache the length in a variable before the loop: `int len = strlen(str); for(int i=0; i<len; i++)`.",hint:"Cache strlen outside the loop header.",level:"intermediate"}],a=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_003: Control Flow: Branching, Decision Making & Loops
Topic 2: Iterative Loop Constructs: while, do-while (post-test), for (pre-test)
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: What are the 3 Loop Types? (The 3 Runners on a Track)
A:
1. 'for' Loop (The Lap Counter):
   You already know you must run EXACTLY 10 laps around the park!
   for (int lap = 1; lap <= 10; lap++)

2. 'while' Loop (The Daylight Runner):
   You run as long as the sun is shining. You check the sky BEFORE entering
   the track (Pre-test). If it's already dark, you run 0 laps!
   while (isSunShining) { runLap(); }

3. 'do-while' Loop (The Amusement Park Rollercoaster):
   You enter the ride and enjoy it at least ONCE. Only at the exit gate does
   the guard check if you have a ticket for a second round (Post-test)!
   do { enjoyRide(); } while (hasTicket);

2. NUMBER DIGIT PEELING PATTERN (THE SWISS ARMY KNIFE OF C):
--------------------------------------------------------------------------------
Extract digits from right to left using % 10 and / 10:
int num = 1234, reversed = 0;
while (num > 0) {
    int digit = num % 10;              // 4 -> 3 -> 2 -> 1
    reversed = (reversed * 10) + digit;// Builds 4321
    num /= 10;                         // 123 -> 12 -> 1 -> 0
}

3. THE SEMICOLON FREEZE BUG:
--------------------------------------------------------------------------------
while (i < 10);  <-- BUG! Semicolon creates an empty infinite loop!
The CPU gets trapped spinning forever because 'i' never increments!

4. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. Know iteration count beforehand? -> Use 'for'.
2. Iterating based on condition/event? -> Use 'while'.
3. Need at least 1 menu prompt or input check? -> Use 'do-while'.
================================================================================
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_003 · Topic 2"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Loop Constructs & Iteration"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Iterative Loop Constructs: while, do-while (post-test) & for (pre-test)"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master repeating code blocks efficiently in C. Understand the mechanics of pre-test counting loops (",e.jsx("code",{children:"for"}),"), condition-controlled loops (",e.jsx("code",{children:"while"}),"), and guaranteed single-execution post-test loops (",e.jsx("code",{children:"do-while"}),")."]})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-amber-950/40 via-slate-900 to-slate-900 border-2 border-amber-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-amber-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/20 text-amber-300 text-xl border border-amber-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-amber-200 tracking-tight",children:"Teacher's Corner: The 3 Runners on the Track"}),e.jsx("p",{className:"text-xs text-amber-300/80",children:"A simple breakdown by Sukanta Hui for students at Coder & AccoTax"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🏃"})," Step 1: Meet the 3 Runners (Which Loop to Pick?)"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Beginners often ask: ",e.jsx("em",{children:'"Teacher, why do we have three different types of loops in C?"'})," Here is the simple mental picture:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30 space-y-2",children:[e.jsx("span",{className:"text-sky-300 font-bold block text-sm",children:"1. The Lap Counter (`for` Loop)"}),e.jsxs("p",{className:"text-slate-300",children:["You know ",e.jsx("strong",{children:"in advance"})," that you want to run exactly ",e.jsx("strong",{children:"10 laps"})," around the Barrackpore stadium."]}),e.jsx("div",{className:"bg-slate-900 p-2 rounded text-[11px] font-mono text-sky-300",children:"for(int lap=1; lap<=10; lap++)"}),e.jsxs("p",{className:"text-slate-400 text-[11px]",children:[e.jsx("strong",{children:"Use when:"})," You know the exact start, stop, and step counts."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2",children:[e.jsx("span",{className:"text-amber-300 font-bold block text-sm",children:"2. The Daylight Runner (`while` Loop)"}),e.jsxs("p",{className:"text-slate-300",children:["You run ",e.jsx("strong",{children:"as long as"})," the sun is up. You check the sky ",e.jsx("strong",{children:"before"})," taking a single step (Pre-test). If it is already pitch dark, you run ",e.jsx("strong",{children:"0 laps"}),"!"]}),e.jsx("div",{className:"bg-slate-900 p-2 rounded text-[11px] font-mono text-amber-300",children:"while(isDaylight == true)"}),e.jsxs("p",{className:"text-slate-400 text-[11px]",children:[e.jsx("strong",{children:"Use when:"})," Running based on an event or external condition."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2",children:[e.jsx("span",{className:"text-emerald-300 font-bold block text-sm",children:"3. The Rollercoaster (`do-while` Loop)"}),e.jsxs("p",{className:"text-slate-300",children:["You enter the amusement park ride and enjoy it ",e.jsx("strong",{children:"at least once"}),". Only at the exit gate does the guard check if you have a ticket to repeat (Post-test)!"]}),e.jsx("div",{className:"bg-slate-900 p-2 rounded text-[11px] font-mono text-emerald-300",children:"do { ride(); } while(hasTicket);"}),e.jsxs("p",{className:"text-slate-400 text-[11px]",children:[e.jsx("strong",{children:"Use when:"})," Code MUST execute at least 1 time (like ATM PIN prompt)."]})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-emerald-300 flex items-center gap-2",children:[e.jsx("span",{children:"🧅"}),' Step 2: The Famous "Digit Peeling" Pattern (Modulo 10 & Divide 10)']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In almost every C exam and interview, you will be asked to reverse a number, sum its digits, or check for palindromes. Sukanta Hui teaches this ",e.jsx("strong",{children:"3-step onion peeling recipe"}),":"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-3 text-xs",children:[e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 font-mono",children:[e.jsx("span",{className:"text-sky-400 font-bold block",children:"1. Peel Last Digit:"}),e.jsx("span",{className:"text-slate-300",children:"int digit = num % 10;"}),e.jsx("p",{className:"text-slate-500 text-[10px]",children:"1234 % 10 gives 4"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 font-mono",children:[e.jsx("span",{className:"text-amber-400 font-bold block",children:"2. Accumulate / Reverse:"}),e.jsx("span",{className:"text-slate-300",children:"rev = (rev * 10) + digit;"}),e.jsx("p",{className:"text-slate-500 text-[10px]",children:"Shifts left and adds 4"})]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl border border-slate-800 space-y-1 font-mono",children:[e.jsx("span",{className:"text-emerald-400 font-bold block",children:"3. Discard Last Digit:"}),e.jsx("span",{className:"text-slate-300",children:"num = num / 10;"}),e.jsx("p",{className:"text-slate-500 text-[10px]",children:"1234 becomes 123"})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{children:"❄️"}),' Step 3: The "Semicolon Freeze" Trap']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Never put a semicolon directly after ",e.jsx("code",{children:"while (i < 10);"}),". It creates an invisible empty loop body that traps the CPU in an infinite spin because ",e.jsx("code",{children:"i"})," is never updated!"]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Explore 4 essential algorithmic loop recipes"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Palindrome Checker"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"while loop"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Reverses digits to test if number equals its mirror image (e.g. 12321)."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int num = 12321, original = num, reversed = 0;

while (num > 0) {
    reversed = (reversed * 10) + (num % 10);
    num /= 10;
}

if (original == reversed) {
    printf("%d is a PALINDROME!\\n", original);
} else {
    printf("%d is NOT a palindrome.\\n", original);
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: ATM PIN 3-Attempt Validator"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"do-while loop"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Guarantees the user is prompted at least once, allowing at most 3 tries."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int correctPin = 9876, enteredPin, attempts = 0;

do {
    printf("Enter 4-digit PIN (Attempt %d/3): ", attempts + 1);
    scanf("%d", &enteredPin);
    attempts++;
    if (enteredPin == correctPin) {
        printf("PIN Accepted! Access Granted.\\n");
        break;
    }
} while (attempts < 3);

if (enteredPin != correctPin) printf("Card Blocked!\\n");`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Series Accumulator"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"for loop"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Calculates sum of squares: $1^2 + 2^2 + 3^2 + ... + N^2$."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int n = 5;
long long sumOfSquares = 0;

for (int i = 1; i <= n; i++) {
    sumOfSquares += (long long)i * i;
}
printf("Sum of squares up to %d = %lld\\n", n, sumOfSquares);`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: Binary to Decimal Converter"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Binary Math"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Converts binary integer string `1101` to decimal (13) using powers of 2."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int binary = 1101, decimal = 0, base = 1;

while (binary > 0) {
    int lastBit = binary % 10;
    decimal += lastBit * base;
    base *= 2;
    binary /= 10;
}
printf("Decimal Value: %d\\n", decimal); // Prints 13`})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Pre-Test vs Post-Test Iteration Mechanics"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Loops in C repeat a block of code based on a controlling expression. In ",e.jsx("strong",{children:"pre-test loops"})," (",e.jsx("code",{children:"for"})," and ",e.jsx("code",{children:"while"}),"), the condition is evaluated ",e.jsx("em",{children:"before"})," each iteration. If false initially, the body never runs. In ",e.jsx("strong",{children:"post-test loops"})," (",e.jsx("code",{children:"do-while"}),"), the condition is checked ",e.jsx("em",{children:"after"})," the body executes, guaranteeing at least one iteration."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2 mt-4",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Context (Barrackpore Systems Lab):"}),e.jsxs("p",{children:["When ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Debangshu"})," wrote a number reversal loop, their loop ran endlessly because they forgot ",e.jsx("code",{children:"num /= 10;"})," inside the body. ",e.jsx("strong",{children:"Sukanta Hui"})," showed how every loop must guarantee progress toward its termination condition."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Pre-Test (while) vs Post-Test (do-while)"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"Execution Architecture: Pre-Test (while) vs Post-Test (do-while) Loops"}),e.jsxs("g",{transform:"translate(40, 60)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"180",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"200",y:"28",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"while Loop (Pre-Test: 0 or more times)"}),e.jsx("polygon",{points:"200,45 280,75 200,105 120,75",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"200",y:"78",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"Condition?"}),e.jsx("rect",{x:"120",y:"120",width:"160",height:"40",rx:"8",fill:"#0369a1"}),e.jsx("text",{x:"200",y:"145",textAnchor:"middle",fill:"#ffffff",className:"font-bold text-xs",children:"Loop Body"}),e.jsx("path",{d:"M 200 105 L 200 120",stroke:"#34d399",strokeWidth:"2"}),e.jsx("path",{d:"M 280 140 L 320 140 L 320 75 L 280 75",stroke:"#34d399",strokeWidth:"2",fill:"none"})]}),e.jsxs("g",{transform:"translate(480, 60)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"400",height:"180",rx:"12",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"200",y:"28",textAnchor:"middle",fill:"#34d399",className:"font-bold text-sm",children:"do-while Loop (Post-Test: 1 or more times)"}),e.jsx("rect",{x:"120",y:"45",width:"160",height:"40",rx:"8",fill:"#065f46"}),e.jsx("text",{x:"200",y:"70",textAnchor:"middle",fill:"#ffffff",className:"font-bold text-xs",children:"Loop Body (Runs 1st!)"}),e.jsx("polygon",{points:"200,105 280,135 200,165 120,135",fill:"#0f172a",stroke:"#34d399",strokeWidth:"1.5"}),e.jsx("text",{x:"200",y:"138",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs",children:"Condition?"}),e.jsx("path",{d:"M 200 85 L 200 105",stroke:"#34d399",strokeWidth:"2"}),e.jsx("path",{d:"M 280 135 L 320 135 L 320 65 L 280 65",stroke:"#34d399",strokeWidth:"2",fill:"none"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Deep Technical Breakdown: Comparing for vs while vs do-while"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Loop Type"}),e.jsx("th",{className:"p-3",children:"Test Timing"}),e.jsx("th",{className:"p-3",children:"Min Iterations"}),e.jsx("th",{className:"p-3",children:"Best Architectural Scenario"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"for loop"}),e.jsx("td",{className:"p-3",children:"Pre-test (Before entry)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"0"}),e.jsx("td",{className:"p-3",children:"Array traversal, fixed counter mathematical series"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-amber-300",children:"while loop"}),e.jsx("td",{className:"p-3",children:"Pre-test (Before entry)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"0"}),e.jsx("td",{className:"p-3",children:"Digit extraction, socket reading, linked list traversal"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-emerald-300",children:"do-while loop"}),e.jsx("td",{className:"p-3",children:"Post-test (After body)"}),e.jsx("td",{className:"p-3 font-mono text-rose-400 font-bold",children:"1 (Guaranteed)"}),e.jsx("td",{className:"p-3",children:"User menu prompts, password validation, retry handlers"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Loop Constructs in Action"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"LoopsConstructsDemo.c"}),") demonstrates a ",e.jsx("code",{children:"for"})," loop computing factorial, a ",e.jsx("code",{children:"while"})," loop reversing digits, and a ",e.jsx("code",{children:"do-while"})," loop handling authentication attempts."]}),e.jsx(t,{fileModule:o,title:"LoopsConstructsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     ITERATIVE LOOP CONSTRUCTS IN C - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Pre-Test 'for' Loop (Counting & Accumulation) ---
Calculations for N = 5:
Sum (1 to 5)       : 15
Factorial (5!)     : 120

--- [2] Pre-Test 'while' Loop (Digit Extraction) ---
Original Number     : 12345
Extracted Digits    : 5
Reversed Number     : 54321

--- [3] Post-Test 'do-while' Loop (Guaranteed Entry) ---
PIN Validation Attempt #1: Checking PIN 4321...
Access Granted on attempt 1!
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Update in while loop:"})," Forgetting ",e.jsx("code",{children:"i++"})," creates an unintended infinite loop!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Semicolon after while header:"})," ",e.jsx("code",{children:"while (i < 5);"})," creates an empty spin loop that freezes the CPU."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Semicolon after do-while:"})," ",e.jsx("code",{children:"do { ... } while (cond);"})," requires a trailing semicolon."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why did the C99 standard permit variable declarations inside ",e.jsx("code",{children:"for (int i = 0; ...)"})," headers? How does limiting the lifetime of ",e.jsx("code",{children:"i"})," to the loop scope prevent accidental variable corruption bugs in large programs?"]})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 001_003 Topic 2 FAQs: Loop Constructs",questions:r})}),e.jsx("section",{children:e.jsx(s,{content:a,title:"Module 001_003 Topic 2 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_003_topic2_note.txt"})}),e.jsx("section",{children:e.jsx(i,{note:"Always ensure that your loop's controlling variable actively moves toward the exit condition on every iteration! Testing loop termination with small inputs on paper first is the sign of a great programmer! — Sukanta Hui"})})]})}export{g as default};
