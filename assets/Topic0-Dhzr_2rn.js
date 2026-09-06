import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as s}from"./CFileLoader-Cyf0mDYr.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`/**
 * ============================================================================
 * Program: ConditionalBranchingDemo.c
 * Module: 001_003 - Control Flow: Branching, Decision Making & Loops
 * Topic 0: Conditional Branching (if, if-else, else-if ladder, nested if)
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

int main(void) {
    /* 1. Simple if Statement */
    int examScore = 85;
    printf("===================================================================\\n");
    printf("     CONDITIONAL BRANCHING DEMONSTRATION - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    printf("--- [1] Simple if & if-else Decision ---\\n");
    if (examScore >= 40) {
        printf("Result: PASSED (Score: %d)\\n", examScore);
    } else {
        printf("Result: NEEDS IMPROVEMENT (Score: %d)\\n", examScore);
    }

    /* 2. else-if Ladder: Academic Grade Classification */
    printf("\\n--- [2] Grade Classification (else-if Ladder) ---\\n");
    char grade;
    if (examScore >= 90) {
        grade = 'O'; /* Outstanding */
    } else if (examScore >= 80) {
        grade = 'E'; /* Excellent */
    } else if (examScore >= 70) {
        grade = 'A'; /* Very Good */
    } else if (examScore >= 60) {
        grade = 'B'; /* Good */
    } else if (examScore >= 50) {
        grade = 'C'; /* Fair */
    } else if (examScore >= 40) {
        grade = 'D'; /* Pass */
    } else {
        grade = 'F'; /* Fail */
    }
    printf("Exam Score: %d -> Awarded Grade: '%c'\\n", examScore, grade);

    /* 3. Nested if-else: College Admission Eligibility */
    int age = 19;
    float mathScore = 92.5f;
    float physicsScore = 88.0f;
    bool hasCleanRecord = true;

    printf("\\n--- [3] College Admission Decision Tree (Nested if-else) ---\\n");
    if (age >= 17 && age <= 25) {
        if (mathScore >= 80.0f && physicsScore >= 75.0f) {
            if (hasCleanRecord) {
                printf("Status: ADMISSION GRANTED to B.Tech Computer Science!\\n");
            } else {
                printf("Status: REJECTED (Disciplinary Background Check Failed)\\n");
            }
        } else {
            printf("Status: REJECTED (Academic Cutoff Criteria Not Met)\\n");
        }
    } else {
        printf("Status: REJECTED (Age outside eligibility bracket)\\n");
    }

    /* 4. Complex Boolean Conditions: Leap Year Test */
    int year = 2024;
    bool isLeap = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));
    printf("\\n--- [4] Leap Year Boolean Logic ---\\n");
    printf("Year %d is %s.\\n", year, isLeap ? "a LEAP YEAR (366 days)" : "NOT a leap year (365 days)");
    printf("===================================================================\\n");

    return 0;
}
`,r=[{question:"What is conditional branching in C?",shortAnswer:"A control flow mechanism that allows a program to execute different blocks of code based on whether a boolean expression evaluates to true (non-zero) or false (0).",explanation:"Conditional branching allows programs to make dynamic decisions at runtime rather than executing statements sequentially from top to bottom.",hint:"if, if-else, else-if, switch-case.",level:"basic",codeExample:`if (score >= 40) {
    printf("Pass\\n");
}`},{question:"How does C evaluate truth values in boolean expressions?",shortAnswer:"0 represents FALSE; any non-zero integer (such as 1, -5, or 100) represents TRUE.",explanation:"In C (prior to and including C99), conditional tests treat 0 as false and any non-zero memory value as true.",hint:"0 is false, anything else is true.",level:"basic"},{question:"What is the classic assignment vs equality bug in an if condition (e.g. if (x = 5))?",shortAnswer:"Using a single '=' performs assignment instead of comparison, setting x to 5 and evaluating to TRUE (non-zero).",explanation:"`if (x = 5)` assigns 5 to x and tests the value 5, which is non-zero (true), executing the block every time. Always use `==` for comparison: `if (x == 5)`.",hint:"Single '=' assigns; double '==' compares.",level:"basic",codeExample:`// BUG:
// if (role = 1) { ... }
// FIX:
if (role == 1) { ... }`},{question:"What is a 'Yoda Condition' and how does it prevent assignment bugs?",shortAnswer:"Writing the literal constant on the left side of the equality operator: `if (5 == x)`.",explanation:"If a programmer accidentally types `if (5 = x)`, the compiler immediately flags a syntax error (`lvalue required`) because you cannot assign to a constant literal.",hint:"Constant on the left: if (5 == count).",level:"intermediate",codeExample:"if (10 == total) { /* Safe: '10 = total' causes compile error */ }"},{question:"What is an else-if ladder and when should it be used?",shortAnswer:"A multi-way decision construct that evaluates a sequence of conditions from top to bottom until the first TRUE condition is found.",explanation:"Once a true branch is executed, all subsequent else-if branches are skipped completely. If none are true, the optional trailing `else` executes.",hint:"Multi-tier priority evaluation.",level:"basic"},{question:"What is the Dangling Else Problem in C and how is it resolved?",shortAnswer:"Ambiguity in nested if statements where an 'else' belongs to the closest preceding unmatched 'if'.",explanation:"The C compiler pairs an `else` with the nearest preceding `if` within the same block. Always use curly braces `{ ... }` to make nesting explicit and avoid logic bugs.",hint:"Always wrap inner if blocks with curly braces { }.",level:"intermediate",codeExample:`if (a > 0) {
    if (b > 0) {
        printf("Both positive");
    }
} else {
    printf("a is non-positive");
}`},{question:"What is a nested if statement?",shortAnswer:"An if (or if-else) statement placed entirely inside the body of another if or else block.",explanation:"Used to create multi-stage decision trees where a second condition is tested only if the primary condition succeeds.",hint:"Decisions within decisions.",level:"basic"},{question:"What is the mathematical condition for detecting a Leap Year in C?",shortAnswer:"`((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))`",explanation:"A year is a leap year if divisible by 4, except century years (divisible by 100) which must also be divisible by 400 (e.g. 2000 was a leap year, 1900 was not).",hint:"Divisible by 4 and not 100, OR divisible by 400.",level:"intermediate",codeExample:"int isLeap = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0));"},{question:"What is short-circuit evaluation in complex if conditions?",shortAnswer:"In `if (A && B)`, if A is false, B is skipped; in `if (A || B)`, if A is true, B is skipped.",explanation:"The CPU skips evaluating subsequent expressions when the overall truth value is already determined, preventing crashes like `if (ptr != NULL && *ptr > 0)`.",hint:"Left-to-right early exit in boolean logic.",level:"basic"},{question:"What happens if you place a semicolon immediately after an if condition (e.g. if (x > 0);)?",shortAnswer:"The semicolon terminates the if statement as an empty statement, causing the subsequent block to execute unconditionally.",explanation:"`if (x > 0);` means 'if x > 0 do nothing'. The block `{ printf(\"...\"); }` beneath it will always run regardless of `x`.",hint:"Never put a semicolon right after `if (condition)`.",level:"basic",codeExample:`// BUG:
// if (x > 0); { printf("Positive"); }
// FIX:
if (x > 0) { printf("Positive"); }`},{question:"Can an if statement execute without curly braces `{}`?",shortAnswer:"Yes, but it will only control the single statement immediately following it.",explanation:"Writing without braces is error-prone because adding a second line later will run outside the if block. Professional engineering guidelines mandate braces for all if statements.",hint:"Always use curly braces even for single-line blocks.",level:"basic"},{question:"How does the ternary operator (? :) compare to an if-else statement?",shortAnswer:"The ternary operator is an expression that returns a value, whereas if-else is a control-flow statement.",explanation:"`int max = (a > b) ? a : b;` can be used inline inside assignments or function calls, while if-else requires separate statement blocks.",hint:"Ternary yields a value; if-else controls execution flow.",level:"basic"},{question:"What is Branch Prediction in modern CPU architectures and how does it affect if statements?",shortAnswer:"A hardware optimization where the CPU guesses the direction of an if branch before the condition calculation completes.",explanation:"If the CPU guesses correctly, execution pipeline runs at full speed. A branch misprediction flushes the instruction pipeline, causing a small performance penalty.",hint:"CPU pipeline speculation on branching paths.",level:"advanced"},{question:"How do you check if a character is uppercase, lowercase, digit, or special symbol using if-else?",shortAnswer:"Check ASCII ranges: `'A' <= ch && ch <= 'Z'` for uppercase, `'a' <= ch && ch <= 'z'` for lowercase, `'0' <= ch && ch <= '9'` for digits.",explanation:"Characters in C are integral ASCII codes, allowing relational boundary checks.",hint:"Relational comparisons on char literals.",level:"basic",codeExample:`if (ch >= 'A' && ch <= 'Z') {
    printf("Uppercase letter\\n");
}`},{question:"What is the difference between sequential 'if' statements and an 'else-if' ladder?",shortAnswer:"Sequential 'if' statements test every single condition; an 'else-if' ladder stops checking as soon as one condition succeeds.",explanation:"If three independent `if` statements are used, all three are evaluated. In an `else-if` ladder, the first true condition short-circuits the rest.",hint:"Independent tests vs mutually exclusive choices.",level:"basic"},{question:"How do you find the maximum of three numbers using nested if-else statements?",shortAnswer:"Compare first with second; then compare the larger with the third.",explanation:"If `a >= b`, test `a >= c` (a is max) else (c is max). If `b > a`, test `b >= c` (b is max) else (c is max).",hint:"Tournament comparison tree.",level:"basic",codeExample:`int max;
if (a >= b) {
    max = (a >= c) ? a : c;
} else {
    max = (b >= c) ? b : c;
}`},{question:"What is the boolean evaluation result of `if (!x)`?",shortAnswer:"It evaluates to true if x is 0 (false), and false if x is non-zero (true).",explanation:"The logical NOT operator (!) inverts truth: `!0` is 1, and `!non_zero` is 0.",hint:"Tests if a variable is zero / false / NULL.",level:"basic"},{question:"Why should we avoid deep nesting of if statements (Arrow Anti-Pattern)?",shortAnswer:"Deeply nested code (>4 levels) is difficult to read, debug, and maintain.",explanation:"Refactor deep nesting using Guard Clauses (early return/exit) or combining boolean conditions with logical operators (`&&`, `||`).",hint:"Use early returns / guard clauses to flatten code.",level:"intermediate"},{question:"What is a Guard Clause in C programming?",shortAnswer:"A check at the beginning of a function that returns or exits early if preconditions are not met.",explanation:"Instead of wrapping the entire function body in a huge `if (inputValid)`, you write `if (!inputValid) return -1;` upfront.",hint:"Fail fast and exit early.",level:"intermediate",codeExample:`int processPayment(int amount) {
    if (amount <= 0) return -1; // Guard clause
    // Main business logic continues cleanly...
    return 0;
}`},{question:"What is the order of evaluation in an else-if ladder?",shortAnswer:"Strictly from top to bottom in source code order.",explanation:"Place the most specific or most frequently occurring conditions at the top to optimize execution performance.",hint:"Top to bottom priority order.",level:"basic"},{question:"Can an if statement contain multiple statements without braces?",shortAnswer:"No, only the single next statement is associated with the if branch; any subsequent statement executes unconditionally.",explanation:"This was the cause of Apple's famous 'goto fail' SSL vulnerability! Always use braces `{ ... }`.",hint:"Always enclose branch bodies in curly braces.",level:"intermediate"},{question:"How does the compiler treat `if (1)` vs `if (0)`?",shortAnswer:"`if (1)` always executes the body; `if (0)` is dead code that the compiler optimizer removes.",explanation:"Constant condition testing is often used in debugging macros (e.g. `do { ... } while(0)`).",hint:"Always true vs dead code elimination.",level:"basic"},{question:"What header file allows writing `true` and `false` instead of 1 and 0 in C99?",shortAnswer:"<stdbool.h>",explanation:"Introduced in C99, <stdbool.h> defines `bool`, `true` (1), and `false` (0).",hint:"#include <stdbool.h>",level:"basic"},{question:"How do you test if three sides a, b, and c can form a valid triangle?",shortAnswer:"`a + b > c && a + c > b && b + c > a` (Triangle Inequality Theorem).",explanation:"The sum of the lengths of any two sides of a triangle must be strictly greater than the length of the third side.",hint:"Sum of any two sides must exceed the third side.",level:"basic"},{question:"What is the difference between `if (x & 1)` and `if (x % 2 == 1)` for detecting odd numbers?",shortAnswer:"`x & 1` tests the lowest bit directly (faster, works for positive and negative numbers); `x % 2 == 1` fails for negative odd numbers (which yield -1).",explanation:"In C99, `-5 % 2` evaluates to `-1` (not 1). Bitwise `x & 1` reliably checks odd parity for all integers.",hint:"Bitwise & 1 is faster and handles negative numbers properly.",level:"advanced"}],l=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_003: Control Flow: Branching, Decision Making & Loops
Topic 0: Conditional Branching (if, if-else, else-if ladder, nested if)
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: What is Conditional Branching? (The Railway Track Switcher Analogy)
A: Normal code runs like a train on a single straight track from top to bottom.
   An 'if' statement is a track switch! If the signal is GREEN (true / non-zero),
   the train takes Track A. If RED (false / 0), it takes Track B (else).

Q: The #1 Bug in C Beginner History (Single = vs Double ==):
A: if (role = 1)   <-- BUG! Sets role to 1, tests '1' (TRUE), runs EVERY TIME!
   if (role == 1)  <-- CORRECT! Compares role with 1.
   *Teacher's Trick (Yoda Condition)*: Write 'if (1 == role)'. If you type
   'if (1 = role)', the compiler immediately catches the error!

Q: What is the else-if Ladder? (The Grade / Discount Priority Queue)
A: Tests conditions sequentially from top to bottom. As soon as ONE condition
   evaluates to TRUE, its body runs, and ALL REMAINING else-if branches are skipped!

2. LEAP YEAR DETECTION FORMULA:
--------------------------------------------------------------------------------
A year is a Leap Year if:
((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0))
- 2024 : Divisible by 4, not 100 -> Leap Year!
- 1900 : Divisible by 100, not 400 -> NOT a Leap Year!
- 2000 : Divisible by 400 -> Leap Year!

3. GUARD CLAUSES (FLATTENING NESTED CODE):
--------------------------------------------------------------------------------
Instead of nesting 5 levels of if-else (Arrow Code), exit early:
if (amount <= 0) return ERROR_INVALID_AMOUNT;
if (balance < amount) return ERROR_INSUFFICIENT_FUNDS;
// Safe to execute withdrawal!

4. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. ALWAYS use curly braces { } around if and else bodies, even for single lines!
2. NEVER place a semicolon right after 'if (condition);' -- it kills the condition!
3. For odd number detection, prefer (x & 1) over (x % 2 == 1).
================================================================================
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_003 · Topic 0"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Decision Making & Branching"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Conditional Branching: if, if-else, else-if Ladder & Nested Decision Trees"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master C program decision-making logic. Learn how the CPU switches execution paths using boolean evaluations, multi-tier ",e.jsx("code",{children:"else-if"})," ladders, nested decision trees, and defensive coding guards."]})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-emerald-950/40 via-slate-900 to-slate-900 border-2 border-emerald-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-emerald-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-300 text-xl border border-emerald-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-emerald-200 tracking-tight",children:"Teacher's Corner: Decision Making Explained Step-by-Step"}),e.jsx("p",{className:"text-xs text-emerald-300/80",children:"A warm, beginner-friendly guide by Sukanta Hui (Coder & AccoTax)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"🚂"})," Step 1: The Railway Track Switcher Analogy"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"Normally, a computer program runs like a train on a single straight track—executing line 1, then line 2, then line 3. But what if there is a roadblock or a decision to make?"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30 space-y-2",children:[e.jsx("span",{className:"text-emerald-300 font-bold block text-sm",children:"When Signal is GREEN (TRUE / Non-Zero):"}),e.jsxs("p",{className:"text-slate-300",children:["The track switches! The train enters the ",e.jsx("code",{children:"if"})," station and runs the special block of code inside ",e.jsx("code",{children:"{ ... }"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-rose-500/30 space-y-2",children:[e.jsx("span",{className:"text-rose-300 font-bold block text-sm",children:"When Signal is RED (FALSE / 0):"}),e.jsxs("p",{className:"text-slate-300",children:["The train skips the ",e.jsx("code",{children:"if"})," block completely and either takes the bypass track or enters the ",e.jsx("code",{children:"else"})," station."]})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{children:"🚨"})," Step 2: The #1 Trap for Beginners: Single = vs Double =="]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"In our Barrackpore lab, almost every new student makes this mistake at least once:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-rose-950/30 border border-rose-800/40 rounded-xl space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-rose-400 font-bold block font-sans",children:"❌ The Danger (Single '=' Assignment):"}),e.jsx("pre",{className:"text-slate-200",children:`int role = 0; // 0 means Guest

if (role = 1) { 
    printf("Access Granted!"); 
}
// What happened?
// 1 is ASSIGNED into role!
// The condition tests '1' (TRUE)!
// The guest gets Admin access!`})]}),e.jsxs("div",{className:"p-4 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-emerald-400 font-bold block font-sans",children:"✅ The Teacher's Fix (Double '==' Comparison):"}),e.jsx("pre",{className:"text-slate-200",children:`int role = 0;

if (role == 1) { 
    printf("Access Granted!"); 
}
// What happens?
// Compares: Is role equal to 1?
// Since role is 0, condition is FALSE!
// Access is safely DENIED!`})]})]}),e.jsxs("div",{className:"p-3 bg-amber-950/40 rounded-xl border border-amber-800/40 text-xs text-amber-200",children:[e.jsx("strong",{children:`Teacher's Secret Trick ("Yoda Condition"):`})," Write ",e.jsx("code",{children:"if (1 == role)"}),". If you accidentally write ",e.jsx("code",{children:"if (1 = role)"}),", the compiler will immediately stop you with an error because you cannot assign a value to the number 1!"]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🪜"})," Step 3: How the else-if Ladder Works Like a Priority Filter"]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["Think of an ",e.jsx("code",{children:"else-if"})," ladder like an examination grading filter in school. It checks from top to bottom. As soon as a student's score matches ",e.jsx("strong",{children:"one"})," level, that grade is awarded, and the computer ",e.jsx("strong",{children:"skips all remaining tests"})," below it!"]}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl font-mono text-xs text-slate-300 space-y-1 border border-slate-800",children:[e.jsx("span",{className:"text-sky-300",children:"if (marks >= 90)"})," → Award 'O' (95 matches here → Exits ladder immediately!)",e.jsx("br",{}),e.jsx("span",{className:"text-emerald-300",children:"else if (marks >= 80)"})," → Award 'E'",e.jsx("br",{}),e.jsx("span",{className:"text-amber-300",children:"else if (marks >= 70)"})," → Award 'A'",e.jsx("br",{}),e.jsx("span",{className:"text-rose-300",children:"else"})," → Award 'F' (Runs only if ALL conditions above failed)"]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Real-world branching patterns and practical logic scenarios"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Leap Year Detector"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"Boolean Logic"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Combines modulo arithmetic with logical AND (",e.jsx("code",{children:"&&"}),") and OR (",e.jsx("code",{children:"||"}),")."]}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int year = 2024;
if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
    printf("%d is a Leap Year (366 days)\\n", year);
} else {
    printf("%d is a Normal Year (365 days)\\n", year);
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: ATM Balance Validator"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"Nested if-else"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Validates multiple security boundaries step-by-step before dispensing cash."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`double balance = 15000.0, withdraw = 4000.0;

if (withdraw > 0 && (int)withdraw % 100 == 0) {
    if (withdraw <= balance) {
        balance -= withdraw;
        printf("Dispensing cash. New Balance: INR %.2f\\n", balance);
    } else {
        printf("Error: Insufficient funds!\\n");
    }
} else {
    printf("Error: Amount must be in multiples of 100!\\n");
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Triangle Geometry Checker"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"else-if Ladder"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Tests triangle inequality theorem followed by side equality classification."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int a = 5, b = 5, c = 5;

if (a + b > c && a + c > b && b + c > a) {
    if (a == b && b == c) {
        printf("Equilateral Triangle\\n");
    } else if (a == b || b == c || a == c) {
        printf("Isosceles Triangle\\n");
    } else {
        printf("Scalene Triangle\\n");
    }
} else {
    printf("Invalid Triangle dimensions!\\n");
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: Defensive Guard Clause"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Clean Architecture"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Fails fast and exits early to keep business logic clean without deep nesting."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int processStudentAdmission(int age, float marks) {
    if (age < 17 || age > 25) return -1; // Guard: Age fail
    if (marks < 60.0f)        return -2; // Guard: Marks fail
    
    // Core admission logic proceeds without nested indentations!
    printf("Enrolled successfully!\\n");
    return 0;
}`})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Architectural Flow & CPU Branch Evaluation"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"In standard procedural C, instructions execute sequentially unless redirected by control flow structures. Conditional branching statements inspect expressions and cause the CPU instruction pointer to jump to target memory addresses."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2 mt-4",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Context (Shyamnagar & Barrackpore Labs):"}),e.jsxs("p",{children:["When ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Debangshu"})," were calculating discount percentages, they accidentally wrote ",e.jsx("code",{children:"if (discount = 0.20)"}),". ",e.jsx("strong",{children:"Sukanta Hui"})," demonstrated using GDB how single equals mutated the variable at runtime. Always verify comparison operators before testing business logic!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: if-else & else-if Ladder Flowchart"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"Control Flow Branching Architecture: Decision Diamond & Ladder"}),e.jsxs("g",{transform:"translate(100, 60)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("polygon",{points:"120,10 210,60 120,110 30,60",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"120",y:"65",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"score >= 40 ?"})]}),e.jsx("path",{d:"M 310 120 L 400 120",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"355",y:"110",textAnchor:"middle",fill:"#34d399",className:"text-xs font-bold font-mono",children:"TRUE"}),e.jsxs("g",{transform:"translate(400, 85)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"70",rx:"10",fill:"#064e3b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"30",textAnchor:"middle",fill:"#ffffff",className:"font-bold text-xs",children:"Execute if Block"}),e.jsx("text",{x:"90",y:"50",textAnchor:"middle",fill:"#a7f3d0",className:"text-[10px]",children:'printf("PASSED")'})]}),e.jsx("path",{d:"M 220 170 L 220 215 L 400 215",stroke:"#f43f5e",strokeWidth:"2",fill:"none"}),e.jsx("text",{x:"240",y:"200",fill:"#f43f5e",className:"text-xs font-bold font-mono",children:"FALSE"}),e.jsxs("g",{transform:"translate(400, 180)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"70",rx:"10",fill:"#881337",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"30",textAnchor:"middle",fill:"#ffffff",className:"font-bold text-xs",children:"Execute else Block"}),e.jsx("text",{x:"90",y:"50",textAnchor:"middle",fill:"#fecdd3",className:"text-[10px]",children:'printf("FAILED")'})]}),e.jsx("path",{d:"M 580 120 L 680 120 L 680 160",stroke:"#64748b",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M 580 215 L 680 215 L 680 160",stroke:"#64748b",strokeWidth:"2",fill:"none"}),e.jsx("path",{d:"M 680 160 L 730 160",stroke:"#64748b",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(730, 130)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"150",height:"60",rx:"10",fill:"#1e293b",stroke:"#a78bfa",strokeWidth:"2"}),e.jsx("text",{x:"75",y:"35",textAnchor:"middle",fill:"#a78bfa",className:"font-bold text-xs",children:"Next Instructions"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Deep Technical Breakdown: Branching Mechanics & Comparison"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Construct"}),e.jsx("th",{className:"p-3",children:"Evaluation Logic"}),e.jsx("th",{className:"p-3",children:"Best Used For"}),e.jsx("th",{className:"p-3",children:"Common Pitfall"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"Simple if"}),e.jsx("td",{className:"p-3",children:"Executes body if condition evaluates non-zero"}),e.jsx("td",{className:"p-3",children:"Optional execution, error checks, guard clauses"}),e.jsxs("td",{className:"p-3 text-rose-400",children:["Accidental semicolon: ",e.jsx("code",{children:"if(x);"})]})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-emerald-300",children:"if-else"}),e.jsx("td",{className:"p-3",children:"Two mutually exclusive binary paths"}),e.jsx("td",{className:"p-3",children:"Pass/Fail, Yes/No, True/False outcomes"}),e.jsx("td",{className:"p-3 text-rose-400",children:"Dangling else ambiguity in nested code"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-amber-300",children:"else-if Ladder"}),e.jsx("td",{className:"p-3",children:"Multi-way priority evaluation (top to bottom)"}),e.jsx("td",{className:"p-3",children:"Grade scales, tax brackets, range classifications"}),e.jsx("td",{className:"p-3 text-rose-400",children:"Incorrect condition ordering"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-purple-300",children:"Nested if"}),e.jsx("td",{className:"p-3",children:"Multi-tier hierarchical decision trees"}),e.jsx("td",{className:"p-3",children:"Multi-factor security or admission eligibility"}),e.jsx("td",{className:"p-3 text-rose-400",children:'Deep indentation "Arrow Anti-Pattern"'})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Conditional Branching Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"ConditionalBranchingDemo.c"}),") demonstrates simple ",e.jsx("code",{children:"if-else"})," checks, an ",e.jsx("code",{children:"else-if"})," grading ladder, multi-stage nested admission trees, and boolean leap year testing."]}),e.jsx(s,{fileModule:i,title:"ConditionalBranchingDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     CONDITIONAL BRANCHING DEMONSTRATION - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Simple if & if-else Decision ---
Result: PASSED (Score: 85)

--- [2] Grade Classification (else-if Ladder) ---
Exam Score: 85 -> Awarded Grade: 'E'

--- [3] College Admission Decision Tree (Nested if-else) ---
Status: ADMISSION GRANTED to B.Tech Computer Science!

--- [4] Leap Year Boolean Logic ---
Year 2024 is a LEAP YEAR (366 days).
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Single '=' Assignment in Condition:"})," ",e.jsx("code",{children:"if (x = 5)"})," assigns 5 to ",e.jsx("code",{children:"x"})," and evaluates to true! Always use ",e.jsx("code",{children:"=="})," for comparison."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Semicolon after if condition:"})," Writing ",e.jsx("code",{children:"if (x > 0);"})," creates an empty statement and executes the following block unconditionally."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing Braces in Multi-line Blocks:"})," Without braces ",e.jsx("code",{children:"{ }"}),", only the first line belongs to the if statement!"]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why does ",e.jsx("code",{children:"if (year % 4 == 0 && year % 100 != 0 || year % 400 == 0)"})," correctly classify year 2000 as a leap year, but year 1900 as a regular year? How does operator precedence evaluate ",e.jsx("code",{children:"&&"})," before ",e.jsx("code",{children:"||"}),"?"]})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 001_003 Topic 0 FAQs: Conditional Branching",questions:r})}),e.jsx("section",{children:e.jsx(n,{content:l,title:"Module 001_003 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_003_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Always wrap your if and else bodies with curly braces, even for one line! It prevents subtle dangling else logic bugs when extending your code in the future! — Sukanta Hui"})})]})}export{g as default};
