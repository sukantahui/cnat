import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-Cyf0mDYr.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`/**
 * ============================================================================
 * Program: LoopControlJumpDemo.c
 * Module: 001_003 - Control Flow: Branching, Decision Making & Loops
 * Topic 3: Loop control mechanics: break, continue, and appropriate use of goto
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>
#include <stdbool.h>

int main(void) {
    printf("===================================================================\\n");
    printf("     LOOP CONTROL JUMPS: BREAK, CONTINUE, GOTO - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    /* 1. Early Termination using 'break': Linear Search */
    int numbers[] = {14, 28, 56, 73, 91, 105};
    int target = 73;
    int foundIndex = -1;
    int size = sizeof(numbers) / sizeof(numbers[0]);

    printf("--- [1] Early Loop Exit with 'break' (Linear Search) ---\\n");
    for (int i = 0; i < size; i++) {
        if (numbers[i] == target) {
            foundIndex = i;
            printf("Target %d FOUND at array index %d! Breaking early.\\n", target, foundIndex);
            break; /* No need to check remaining elements */
        }
    }

    /* 2. Skipping Iterations using 'continue': Printing Odd Numbers */
    printf("\\n--- [2] Skipping Current Iteration with 'continue' ---\\n");
    printf("Odd numbers between 1 and 10: ");
    for (int i = 1; i <= 10; i++) {
        if (i % 2 == 0) {
            continue; /* Skip even numbers */
        }
        printf("%d ", i);
    }
    printf("\\n");

    /* 3. Deeply Nested Loop Breakout with 'goto' Clean Exit */
    printf("\\n--- [3] Breaking Out of Deep Nested Loops (Matrix Search) ---\\n");
    int matrix[3][3] = {
        {10, 20, 30},
        {40, 99, 60},
        {70, 80, 90}
    };
    int searchVal = 99;
    bool foundMatrix = false;

    for (int row = 0; row < 3; row++) {
        for (int col = 0; col < 3; col++) {
            if (matrix[row][col] == searchVal) {
                printf("Value %d found at matrix[%d][%d]! Jumping out via goto.\\n", searchVal, row, col);
                foundMatrix = true;
                goto search_complete; /* Clean exit from nested loops */
            }
        }
    }

search_complete:
    if (foundMatrix) {
        printf("Search completed successfully with zero redundant iterations.\\n");
    }

    printf("===================================================================\\n");
    return 0;
}
`,a=[{question:"What is the function of the `break` statement in C?",shortAnswer:"It immediately terminates the innermost enclosing loop (`for`, `while`, `do-while`) or `switch` block and transfers control to the following statement.",explanation:"Used to exit loops early when a target condition is met (e.g. linear search match) or when an error occurs.",hint:"Emergency loop exit.",level:"basic"},{question:"What is the function of the `continue` statement in C?",shortAnswer:"It skips the remainder of the current loop iteration and immediately jumps to the loop update/condition evaluation for the next cycle.",explanation:"Does not terminate the loop, but skips remaining statements in the current iteration.",hint:"Skip to next iteration.",level:"basic"},{question:"What is the difference between `break` and `continue`?",shortAnswer:"`break` completely terminates the loop; `continue` skips the rest of the current iteration and starts the next iteration.",explanation:"Break exits the loop entirely; continue skips only the remaining lines of the current cycle.",hint:"Stop everything vs skip current round.",level:"basic"},{question:"How does `continue` interact with the update step of a `for` loop?",shortAnswer:"In a `for` loop, `continue` jumps directly to the update expression (`i++`) before checking the condition again.",explanation:"In contrast, in a `while` loop, if `i++` is placed below the `continue`, it will be skipped, causing an infinite loop!",hint:"for loop runs update step; while loop skips everything below.",level:"intermediate"},{question:"What is the `goto` statement in C?",shortAnswer:"An unconditional jump statement that transfers control directly to a named label within the same function.",explanation:"Syntax: `goto label_name; ... label_name: statement;`.",hint:"Unconditional jump to label.",level:"basic"},{question:"Why is the use of `goto` generally discouraged in modern structured programming ('Spaghetti Code')?",shortAnswer:"Arbitrary jumping between arbitrary points makes program flow tangled, difficult to read, impossible to reason about, and prone to memory leaks.",explanation:"Edsger Dijkstra's famous 1968 paper 'Go To Statement Considered Harmful' advocated structured control blocks instead.",hint:"Creates unmaintainable spaghetti code.",level:"intermediate"},{question:"What is the one widely accepted and standard use case for `goto` in professional systems programming (e.g. Linux Kernel)?",shortAnswer:"Unified error handling and multi-level resource cleanup at the end of a function, and breaking out of deeply nested loops.",explanation:"In the Linux Kernel, `goto out_free_memory;` centralizes resource deallocation to prevent memory leaks across multiple error exit points.",hint:"Centralized error cleanup and breaking deeply nested loops.",level:"advanced",codeExample:`int initHardware(void) {
    if (!allocA()) goto err_a;
    if (!allocB()) goto err_b;
    return 0; // Success
err_b:
    freeA();
err_a:
    return -1;
}`},{question:"Can a `break` statement break out of two nested loops simultaneously?",shortAnswer:"No, `break` only exits the innermost enclosing loop.",explanation:"To exit multiple nested loops simultaneously, use a boolean flag, a `return` statement, or a clean `goto` label outside the outer loop.",hint:"Only breaks 1 layer of loop.",level:"basic"},{question:"Can a `goto` jump across different functions?",shortAnswer:"No, a `goto` statement can only jump to labels defined within the same function scope.",explanation:"To jump across function boundaries in C, the `<setjmp.h>` library (`setjmp` and `longjmp`) must be used.",hint:"Function-local jumps only.",level:"intermediate"},{question:"What is a Label in C syntax?",shortAnswer:"An identifier followed by a colon (e.g. `cleanup_exit:`) that marks a specific line of code as a jump target.",explanation:"Labels must be followed by a statement; if placed at the very end of a function, append a null statement: `cleanup_exit: ;`.",hint:"Identifier followed by colon (:).",level:"basic"},{question:"What is the danger of using `continue` inside a `while` loop?",shortAnswer:"If the counter increment (`i++`) is located after `continue`, it will be skipped, causing the condition to remain permanently true (infinite loop).",explanation:"Always increment before `continue` in a while loop or use a `for` loop.",hint:"Bypasses the counter increment.",level:"basic",codeExample:`// BUG (Infinite Loop):
// while (i < 10) { if (i==5) continue; i++; }
// FIX:
while (i < 10) { if (i==5) { i++; continue; } i++; }`},{question:"Can `break` be used inside an `if` statement that is NOT inside a loop or switch?",shortAnswer:"No, using `break` outside of a loop or switch statement causes a compilation error (`break statement not within loop or switch`).",explanation:"Break requires an enclosing iteration or selection construct.",hint:"Only valid inside loops or switch blocks.",level:"basic"},{question:"Can `continue` be used inside a `switch` statement that is NOT inside a loop?",shortAnswer:"No, `continue` is strictly a loop control statement and cannot be used in a standalone switch.",explanation:"If a switch is inside a loop, `continue` applies to the enclosing loop.",hint:"Strictly for loop constructs.",level:"basic"},{question:"How does `return` compare to `break` inside a loop in a function?",shortAnswer:"`break` exits the loop and continues executing the rest of the function; `return` exits the entire function immediately.",explanation:"Return immediately hands control back to the caller.",hint:"Exits loop vs exits entire function.",level:"basic"},{question:"What is an Early Exit / Fail-Fast pattern in loops?",shortAnswer:"Checking error or termination conditions at the start of each iteration and breaking/continuing immediately to avoid executing nested logic unnecessarily.",explanation:"Keeps loop bodies flat, readable, and computationally efficient.",hint:"Early exit keeps code clean.",level:"intermediate"},{question:"How does the compiler translate `break` and `continue` into assembly instructions?",shortAnswer:"Both translate directly into unconditional jump (`jmp`) instructions to specific basic block labels in the compiled binary.",explanation:"`break` jumps to the loop exit label; `continue` jumps to the loop header/update label.",hint:"Assembly jmp opcodes.",level:"advanced"},{question:"Can multiple labels point to the same statement in C?",shortAnswer:'Yes, you can stack multiple labels on the same line: `label1: label2: printf("Target");`.',explanation:"Allows multiple jump origins to converge onto a single target routine.",hint:"Stacked labels.",level:"intermediate"},{question:"Why does jumping over variable initialization with `goto` cause issues?",shortAnswer:"Jumping over a variable declaration with initialization can leave the variable with indeterminate garbage memory or cause compiler errors in C99 (variable length arrays).",explanation:"Do not jump past variable initializations.",hint:"Leaves variables uninitialized.",level:"intermediate"},{question:"How do you break out of a loop based on user input (e.g. typing 'q' to quit)?",shortAnswer:"Read character input and check `if (ch == 'q' || ch == 'Q') break;` inside the loop body.",explanation:"Standard interactive CLI loop control pattern.",hint:"Interactive break condition.",level:"basic"},{question:"What is the impact of excessive `break` statements on code readability?",shortAnswer:"Having multiple hidden break points throughout a long loop makes it harder to deduce the loop's invariant and exit criteria.",explanation:"Keep loop exit conditions visible in the loop header where feasible.",hint:"Hidden exits make reasoning difficult.",level:"intermediate"},{question:"What happens if `goto` jumps backwards above its declaration?",shortAnswer:"It creates a manual loop.",explanation:"Before structured while/for loops were standardized in high-level languages, backwards goto statements were used to build manual iteration loops.",hint:"Simulates manual loop construct.",level:"basic"},{question:"Can `break` be placed inside a helper function to break an outer loop in `main()`?",shortAnswer:"No, `break` only operates within the syntactic block in which it is written.",explanation:"A helper function must return a boolean/status code to let `main()` decide whether to break.",hint:"Lexically scoped control statement.",level:"basic"},{question:"What is the difference between `break` in C and `break` with labels in Java/JavaScript?",shortAnswer:"C does NOT support labeled break statements (e.g. `break outerLoop;`). In C, breaking nested loops requires a flag or `goto`.",explanation:"C's break only exits one level.",hint:"C does not have labeled break.",level:"intermediate"},{question:"How does linear search time complexity improve with `break`?",shortAnswer:"Best-case time complexity becomes O(1) if the element is found at the beginning, rather than always iterating through all N elements.",explanation:"Eliminates unnecessary comparisons once the item is located.",hint:"Early exit gives O(1) best case.",level:"basic"},{question:"What is the best alternative to using `goto` for breaking out of nested loops?",shortAnswer:"Encapsulating the nested loops inside a dedicated helper function and using `return` when the target is found.",explanation:"`return foundValue;` immediately terminates all nested loop levels cleanly without needing flags or goto.",hint:"Extract into function and use return.",level:"intermediate"}],r=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_003: Control Flow: Branching, Decision Making & Loops
Topic 3: Loop Control Mechanics: break, continue & Appropriate use of goto
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: What is the difference between break, continue, and goto?
A:
1. 'break' (The Emergency Handbrake in a Train):
   Pulls the red brake cord! The loop STOPS immediately and you jump out of
   the train completely!

2. 'continue' (Skipping a Bad Song on Spotify):
   You don't throw your phone away (don't exit the playlist)! You just skip
   the remainder of the current song and immediately jump to song #2!

3. 'goto' (The Teleportation Portal):
   Instantly teleports the CPU instruction pointer to a named label.
   *Warning*: Like playing with fire! Uncontrolled jumps create "Spaghetti Code".

2. WHEN IS 'goto' ACTUALLY GOOD IN PROFESSIONAL C?
--------------------------------------------------------------------------------
In the Linux Kernel and device drivers, 'goto' is standard for clean, unified
error handling and freeing allocated memory without repeating code:

int loadDriver(void) {
    if (!allocateBufferA()) goto err_a;
    if (!allocateBufferB()) goto err_b;
    return 0; // Success

err_b:
    freeBufferA();
err_a:
    return -1;
}

3. THE 'CONTINUE IN WHILE LOOP' TRAP:
--------------------------------------------------------------------------------
while (i < 10) {
    if (i == 5) continue; // BUG: Skips i++ below -> Infinite loop!
    i++;
}
*Fix*: Increment 'i' before continuing, or use a 'for' loop!

4. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. Use 'break' for early exit in searches as soon as the target is found!
2. Use 'continue' to skip invalid inputs and odd/even filtering!
3. Never use 'goto' to jump backwards; only use it for forward error cleanups!
================================================================================
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_003 · Topic 3"}),e.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Loop Control & Jump Mechanics"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Loop Control Mechanics: break, continue & Appropriate Use of goto"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master non-local jump control in C. Understand early termination with ",e.jsx("code",{children:"break"}),", skipping iterations with ",e.jsx("code",{children:"continue"}),", and the legitimate systems-level engineering use cases for ",e.jsx("code",{children:"goto"})," error unwinding."]})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-rose-950/40 via-slate-900 to-slate-900 border-2 border-rose-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-rose-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-rose-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-rose-500/20 text-rose-300 text-xl border border-rose-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-rose-200 tracking-tight",children:"Teacher's Corner: break vs continue vs goto Explained"}),e.jsx("p",{className:"text-xs text-rose-300/80",children:"Intuitive real-world analogies by Sukanta Hui (Coder & AccoTax)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🎭"})," Step 1: Everyday Analogies for the 3 Jumps"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-rose-500/30 space-y-2",children:[e.jsx("span",{className:"text-rose-400 font-bold block text-sm",children:"1. break (Emergency Handbrake)"}),e.jsxs("p",{className:"text-slate-300",children:["You pull the red chain on a train! The whole ride ",e.jsx("strong",{children:"STOPS immediately"}),". You step out of the loop and never look back!"]}),e.jsx("div",{className:"bg-slate-900 p-2 rounded text-[11px] font-mono text-rose-300",children:"if (targetFound) break;"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30 space-y-2",children:[e.jsx("span",{className:"text-amber-400 font-bold block text-sm",children:"2. continue (Skip Bad Song on Spotify)"}),e.jsxs("p",{className:"text-slate-300",children:["You don't delete your playlist! You just ",e.jsx("strong",{children:"skip the rest of this current song"})," and immediately start playing the next song!"]}),e.jsx("div",{className:"bg-slate-900 p-2 rounded text-[11px] font-mono text-amber-300",children:"if (isBadSong) continue;"})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30 space-y-2",children:[e.jsx("span",{className:"text-purple-400 font-bold block text-sm",children:"3. goto (The Teleport Portal)"}),e.jsx("p",{className:"text-slate-300",children:"Instantly teleports the CPU instruction pointer straight to a target bookmark label. Used in the Linux Kernel for error cleanup!"}),e.jsx("div",{className:"bg-slate-900 p-2 rounded text-[11px] font-mono text-purple-300",children:"goto error_cleanup;"})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{children:"🚨"}),' Step 2: The Hidden "Continue in While Loop" Infinite Loop Trap']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In our lab, ",e.jsx("strong",{children:"Swadeep"})," wrote this while loop and wondered why his program froze:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-rose-950/30 border border-rose-800/40 rounded-xl space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-rose-400 font-bold block font-sans",children:"❌ The Frozen Loop Bug:"}),e.jsx("pre",{className:"text-slate-200",children:`int i = 1;
while (i <= 5) {
    if (i == 3) {
        continue; // BUG!
    }
    printf("%d ", i);
    i++; // SKIPPED when i == 3!
}
// i stays 3 forever -> Infinite loop!`})]}),e.jsxs("div",{className:"p-4 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-emerald-400 font-bold block font-sans",children:"✅ The Teacher's Fix:"}),e.jsx("pre",{className:"text-slate-200",children:`// Option 1: Increment before continue
if (i == 3) {
    i++;
    continue;
}

// Option 2: Use a 'for' loop!
for (int i = 1; i <= 5; i++) {
    if (i == 3) continue; // Safe!
    printf("%d ", i);
}`})]})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Real-world jump applications from linear searches to kernel error handling"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Early Search Exit"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"break statement"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Halts iterations the millisecond the search target is located."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int arr[] = {12, 45, 78, 89, 99};
int target = 78, foundAt = -1;

for (int i = 0; i < 5; i++) {
    if (arr[i] == target) {
        foundAt = i;
        break; // Stops checking remaining elements!
    }
}
printf("Found at index %d\\n", foundAt);`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: Skipping Negative Noise"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"continue statement"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Processes only valid positive sensor telemetry data while skipping corrupted samples."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int sensorReadings[] = {25, -1, 30, -99, 28, 31};
int validSum = 0;

for (int i = 0; i < 6; i++) {
    if (sensorReadings[i] < 0) {
        continue; // Skip corrupted negative readings
    }
    validSum += sensorReadings[i];
}
printf("Valid telemetry sum: %d\\n", validSum);`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Unified Error Cleanup"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"goto cleanup"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"The gold standard pattern for cleaning up resources in reverse order of allocation."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int allocateBuffers(void) {
    if (!initNetwork()) goto err_net;
    if (!initDatabase()) goto err_db;
    
    printf("All subsystems ready!\\n");
    return 0; // Success

err_db:
    closeNetwork();
err_net:
    return -1; // Unified failure exit
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: Multi-Level Loop Break"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Matrix Breakout"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Jumps out of 3 nested loops in a single bound when a target pixel is found."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`for (int x = 0; x < 100; x++) {
    for (int y = 0; y < 100; y++) {
        for (int z = 0; z < 100; z++) {
            if (grid[x][y][z] == TARGET) {
                printf("Hit at %d, %d, %d\\n", x, y, z);
                goto end_3d_search;
            }
        }
    }
}
end_3d_search:
printf("3D Grid search complete!\\n");`})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Non-Local Jump Semantics & Control Flow Integrity"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Standard loop execution follows predictable cyclic paths. The ",e.jsx("code",{children:"break"}),", ",e.jsx("code",{children:"continue"}),", and ",e.jsx("code",{children:"goto"})," keywords allow programmers to bypass standard loop iterations or transfer control unconditionally to designated program points."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2 mt-4",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Context (Barrackpore Systems Lab):"}),e.jsxs("p",{children:["When ",e.jsx("strong",{children:"Tuhina"})," asked why ",e.jsx("code",{children:"goto"})," is used in the Linux Kernel when textbook authors warn against it, ",e.jsx("strong",{children:"Sukanta Hui"})," explained that disciplined forward error jumps prevent duplicated deallocation code and eliminate memory leaks!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: break vs continue Execution Paths"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"Execution Path Redirection: break (Exit Loop) vs continue (Next Cycle)"}),e.jsxs("g",{transform:"translate(60, 90)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"60",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"80",y:"35",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"for Loop Header"})]}),e.jsx("path",{d:"M 220 120 L 290 120",stroke:"#64748b",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(290, 60)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"280",height:"120",rx:"12",fill:"#1e293b",stroke:"#64748b",strokeWidth:"1.5"}),e.jsx("text",{x:"140",y:"25",textAnchor:"middle",fill:"#cbd5e1",className:"font-bold text-xs",children:"Loop Body Statements"}),e.jsx("rect",{x:"20",y:"40",width:"240",height:"30",rx:"6",fill:"#78350f",stroke:"#f59e0b",strokeWidth:"1"}),e.jsx("text",{x:"140",y:"60",textAnchor:"middle",fill:"#fef3c7",className:"font-mono text-xs font-bold",children:"if (condition) continue;"}),e.jsx("rect",{x:"20",y:"80",width:"240",height:"30",rx:"6",fill:"#881337",stroke:"#f43f5e",strokeWidth:"1"}),e.jsx("text",{x:"140",y:"100",textAnchor:"middle",fill:"#ffe4e6",className:"font-mono text-xs font-bold",children:"if (condition) break;"})]}),e.jsx("path",{d:"M 430 40 L 430 20 L 140 20 L 140 90",stroke:"#f59e0b",strokeWidth:"2",strokeDasharray:"4 4",fill:"none"}),e.jsx("text",{x:"280",y:"15",fill:"#f59e0b",className:"text-[10px] font-bold",children:"continue → Loop Update/Header"}),e.jsx("path",{d:"M 570 140 L 680 140",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("text",{x:"620",y:"130",fill:"#f43f5e",className:"text-[10px] font-bold",children:"break → Exit"}),e.jsxs("g",{transform:"translate(680, 90)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"60",rx:"10",fill:"#064e3b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"35",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs",children:"Post-Loop Code"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Deep Technical Breakdown: Jump Statements Compared"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Statement"}),e.jsx("th",{className:"p-3",children:"Jump Destination"}),e.jsx("th",{className:"p-3",children:"Scope Boundary"}),e.jsx("th",{className:"p-3",children:"Recommended Usage"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-rose-400",children:"break"}),e.jsx("td",{className:"p-3",children:"Immediately after closing brace of loop/switch"}),e.jsx("td",{className:"p-3",children:"Innermost enclosing construct"}),e.jsx("td",{className:"p-3",children:"Early exit from searches, switch fall-through termination"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-amber-400",children:"continue"}),e.jsx("td",{className:"p-3",children:"Loop update expression (for) or condition test (while)"}),e.jsx("td",{className:"p-3",children:"Innermost enclosing loop only"}),e.jsx("td",{className:"p-3",children:"Skipping invalid/corrupted records or odd/even filters"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono font-bold text-purple-400",children:"goto"}),e.jsx("td",{className:"p-3",children:"Target named label"}),e.jsx("td",{className:"p-3",children:"Current function scope"}),e.jsx("td",{className:"p-3",children:"Multi-level nested loop breakout, unified error unwinding"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Jump Statements in Action"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"LoopControlJumpDemo.c"}),") demonstrates early search termination with ",e.jsx("code",{children:"break"}),", odd number filtering with ",e.jsx("code",{children:"continue"}),", and multi-level matrix breakout with ",e.jsx("code",{children:"goto"}),"."]}),e.jsx(t,{fileModule:i,title:"LoopControlJumpDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     LOOP CONTROL JUMPS: BREAK, CONTINUE, GOTO - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Early Loop Exit with 'break' (Linear Search) ---
Target 73 FOUND at array index 3! Breaking early.

--- [2] Skipping Current Iteration with 'continue' ---
Odd numbers between 1 and 10: 1 3 5 7 9 

--- [3] Breaking Out of Deep Nested Loops (Matrix Search) ---
Value 99 found at matrix[1][1]! Jumping out via goto.
Search completed successfully with zero redundant iterations.
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Continue bypassing counter update in while:"})," In a ",e.jsx("code",{children:"while"})," loop, placing ",e.jsx("code",{children:"continue"})," above ",e.jsx("code",{children:"i++"})," skips the increment and triggers an infinite loop!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Backwards goto statements:"})," Never use ",e.jsx("code",{children:"goto"})," to jump backwards in code. Use standard loops instead."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Overusing break statements:"})," Excessively scattering break points across a long loop makes logic difficult to verify."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why does placing nested loops inside a dedicated helper function and calling ",e.jsx("code",{children:"return foundValue;"})," often eliminate the need for both ",e.jsx("code",{children:"goto"})," and boolean status flags? How does function extraction improve modularity?"]})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 001_003 Topic 3 FAQs: Loop Control Jumps",questions:a})}),e.jsx("section",{children:e.jsx(o,{content:r,title:"Module 001_003 Topic 3 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_003_topic3_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Use 'break' to stop wasting CPU cycles once a search condition is met, and use 'continue' to filter unwanted records cleanly! Keep your jump mechanics simple and clean! — Sukanta Hui"})})]})}export{g as default};
