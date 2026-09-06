import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-Cyf0mDYr.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`/**
 * ============================================================================
 * Program: SwitchCaseDemo.c
 * Module: 001_003 - Control Flow: Branching, Decision Making & Loops
 * Topic 1: The switch-case statement: jump tables, fall-through, break statement
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)
 * Standard: ANSI C / C99
 * ============================================================================
 */

#include <stdio.h>

int main(void) {
    printf("===================================================================\\n");
    printf("     SWITCH-CASE ARCHITECTURE & MECHANICS - CODER & ACCOTAX\\n");
    printf("     Educator: Sukanta Hui | Barrackpore Systems Lab\\n");
    printf("===================================================================\\n\\n");

    /* 1. Interactive 4-Function Calculator */
    char operatorSymbol = '*';
    double num1 = 12.5, num2 = 4.0;
    double calcResult = 0.0;

    printf("--- [1] Menu Calculator using switch-case ---\\n");
    switch (operatorSymbol) {
        case '+':
            calcResult = num1 + num2;
            printf("%.2f + %.2f = %.2f\\n", num1, num2, calcResult);
            break;
        case '-':
            calcResult = num1 - num2;
            printf("%.2f - %.2f = %.2f\\n", num1, num2, calcResult);
            break;
        case '*':
            calcResult = num1 * num2;
            printf("%.2f * %.2f = %.2f\\n", num1, num2, calcResult);
            break;
        case '/':
            if (num2 != 0.0) {
                calcResult = num1 / num2;
                printf("%.2f / %.2f = %.2f\\n", num1, num2, calcResult);
            } else {
                printf("Error: Division by zero!\\n");
            }
            break;
        default:
            printf("Error: Unsupported operator '%c'!\\n", operatorSymbol);
            break;
    }

    /* 2. Intentional Fall-Through: Days in a Month */
    int month = 2; /* February */
    int year = 2024;
    int days = 0;

    printf("\\n--- [2] Intentional Fall-Through (Days in Month) ---\\n");
    switch (month) {
        case 1:  /* Jan */
        case 3:  /* Mar */
        case 5:  /* May */
        case 7:  /* Jul */
        case 8:  /* Aug */
        case 10: /* Oct */
        case 12: /* Dec */
            days = 31;
            break;

        case 4:  /* Apr */
        case 6:  /* Jun */
        case 9:  /* Sep */
        case 11: /* Nov */
            days = 30;
            break;

        case 2:  /* Feb */
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                days = 29; /* Leap year */
            } else {
                days = 28;
            }
            break;

        default:
            days = -1;
            break;
    }
    printf("Month %d in Year %d has %d days.\\n", month, year, days);

    /* 3. Character Vowel/Consonant Classifier with Grouped Cases */
    char testChar = 'E';
    printf("\\n--- [3] Grouped Case Statements (Vowel Classifier) ---\\n");
    switch (testChar) {
        case 'a': case 'A':
        case 'e': case 'E':
        case 'i': case 'I':
        case 'o': case 'O':
        case 'u': case 'U':
            printf("Character '%c' is a VOWEL.\\n", testChar);
            break;
        default:
            printf("Character '%c' is a CONSONANT or SYMBOL.\\n", testChar);
            break;
    }

    printf("===================================================================\\n");
    return 0;
}
`,r=[{question:"What is a switch-case statement in C?",shortAnswer:"A multi-way selection control statement that tests whether an integer or character expression matches one of several constant values.",explanation:"The switch statement evaluates the controlling expression once and jumps directly to the matching case label.",hint:"Multi-way integer dispatch.",level:"basic"},{question:"What data types are allowed in a C switch-case controlling expression?",shortAnswer:"Only integral types (`int`, `char`, `short`, `long`, `unsigned int`, and `enum`).",explanation:"Floating point numbers (`float`, `double`), strings, and struct instances cannot be used in a switch expression.",hint:"Only integers and characters (no floats or strings).",level:"basic"},{question:"Why can't float or double be used in a switch statement?",shortAnswer:"Because floating-point numbers have rounding approximations that make exact bit-for-bit equality matching unreliable and preclude jump table generation.",explanation:"The compiler implements switch statements using constant jump tables. Floating-point imprecision prevents exact hash/jump table construction.",hint:"Exact equality is unpredictable with floating-point decimals.",level:"intermediate"},{question:"What is the purpose of the 'break' statement inside a switch-case?",shortAnswer:"It terminates execution of the switch body and jumps to the statement immediately following the switch closing brace.",explanation:"Without a break statement, execution will continue sequentially into the next case labels (fall-through).",hint:"Exits the switch block immediately.",level:"basic"},{question:"What is 'Fall-Through' behavior in a switch statement?",shortAnswer:"When a case does not end with `break`, execution flows straight down into subsequent case blocks, executing their code.",explanation:"Fall-through can be an accidental bug (forgotten break) or an intentional feature to share logic between multiple case labels.",hint:"Execution cascades into subsequent cases when break is omitted.",level:"basic"},{question:"What is a Jump Table and how does the compiler optimize switch statements?",shortAnswer:"An array of instruction addresses that allows the CPU to jump directly to the target case in O(1) constant time.",explanation:"When case values are densely clustered (e.g. 1, 2, 3, 4), the compiler creates a jump table lookup rather than executing a chain of O(N) comparisons.",hint:"O(1) direct address dispatch table.",level:"advanced"},{question:"What is the role of the 'default' case in a switch statement?",shortAnswer:"It executes if none of the explicit case constants match the controlling expression.",explanation:"It acts like the trailing `else` in an else-if ladder, handling invalid, fallback, or unexpected values.",hint:"Fallback handler when no cases match.",level:"basic"},{question:"Is the 'default' case mandatory in a switch statement?",shortAnswer:"No, it is optional, but recommended as a defensive programming best practice.",explanation:"If no case matches and no default exists, the switch statement simply terminates without taking action.",hint:"Optional, but recommended for safety.",level:"basic"},{question:"Can case constants contain variables or expressions like `case x:` or `case a + b:`?",shortAnswer:"No. Case labels must be compile-time constant integral expressions (e.g. `case 5:`, `case 'A':`, `case 2 + 3:`).",explanation:"Dynamic variables cannot be evaluated at compile time, which is required to build the jump table.",hint:"Only compile-time constants allowed.",level:"basic"},{question:"Can two case labels have duplicate constant values in the same switch?",shortAnswer:"No, duplicate case values cause a compilation error ('duplicate case value').",explanation:"Each case value must be distinct so the jump target is unambiguous.",hint:"All case constant labels must be unique.",level:"basic"},{question:"Can case labels be grouped together to share a single code block?",shortAnswer:"Yes, by stacking case labels sequentially: `case 'a': case 'A': count++; break;`.",explanation:"This takes advantage of intentional fall-through to execute the same logic for multiple input values.",hint:"Stacking case labels without breaks between them.",level:"basic"},{question:"Can you declare a new variable directly inside a case label without braces?",shortAnswer:"In standard C, declaring variables directly after a case label can cause compiler errors because labels are statements, not scopes.",explanation:"To declare local variables with block scope inside a case, wrap the case body in curly braces: `case 1: { int temp = 10; ... break; }`.",hint:"Wrap the case body in curly braces { } to create a local scope.",level:"intermediate"},{question:"How does the performance of a switch-case compare to an else-if ladder?",shortAnswer:"For large numbers of conditions (>4), a switch statement with a jump table is O(1) constant time, whereas an else-if ladder is O(N) sequential search.",explanation:"An else-if ladder tests every condition sequentially until a match is found. A switch jump table computes the target address in a single CPU instruction.",hint:"O(1) jump table vs O(N) linear comparisons.",level:"intermediate"},{question:"What is 'Duff's Device' in C?",shortAnswer:"A famous loop unrolling optimization that interweaves a switch-case statement with a do-while loop.",explanation:"Created by Tom Duff in 1983 to accelerate serial memory copies by jumping into the middle of an unrolled loop using switch case labels.",hint:"Interweaving switch-case inside a do-while loop.",level:"advanced"},{question:"What happens if a switch expression does not match any case and there is no default?",shortAnswer:"The entire switch statement is skipped, and execution continues at the next statement.",explanation:"No error is thrown; it behaves as a no-op.",hint:"Silent skip to the next statement.",level:"basic"},{question:"Can you place the `default` label at the top or middle of a switch statement?",shortAnswer:"Yes, `default` can appear anywhere inside the switch body.",explanation:"If placed at the top or middle without a `break`, it will fall through into subsequent cases unless broken.",hint:"Can appear anywhere, but usually placed at the bottom.",level:"intermediate"},{question:"Can an `enum` be used as the controlling expression and case constants in a switch?",shortAnswer:"Yes, enums are integral types and are the preferred way to write state machines with switch statements.",explanation:"Compilers (like GCC with `-Wswitch`) can even warn you if you forgot to handle an enum state in your switch cases!",hint:"Ideal for state machines and protocol dispatchers.",level:"intermediate"},{question:"What is the difference between `break` in a switch vs `break` in a loop?",shortAnswer:"`break` in a switch exits the switch body; `break` in a loop terminates loop iterations.",explanation:"Inside a switch that is inside a loop, `break` only exits the switch, NOT the enclosing loop.",hint:"Only breaks out of the immediately enclosing switch or loop.",level:"intermediate"},{question:"Can you use relational expressions like `case > 10:` in standard C switch statements?",shortAnswer:"No, standard C only supports exact equality matching with discrete integer constants.",explanation:"For ranges, use an else-if ladder or GCC's non-standard case range extension (`case 1 ... 5:`).",hint:"Only exact constant equality, not relational inequalities.",level:"basic"},{question:"What compiler warning flag in GCC detects missing break statements?",shortAnswer:"`-Wimplicit-fallthrough`",explanation:"Warns whenever a case falls through without an explicit break or `/* fallthrough */` comment annotation.",hint:"-Wimplicit-fallthrough in GCC/Clang.",level:"advanced"},{question:"Can a switch statement be nested inside another switch statement?",shortAnswer:"Yes, nested switch statements are fully legal in C.",explanation:"The `break` statement in the inner switch only exits the inner switch, not the outer one.",hint:"Inner break only exits the inner switch block.",level:"basic"},{question:"Can a `return` statement be used instead of `break` inside a switch case?",shortAnswer:"Yes, if the switch is inside a function, `return` exits both the switch and the enclosing function immediately.",explanation:"Commonly used in lookup functions to return a result without needing a break.",hint:"Exits function directly.",level:"basic"},{question:"What is a Binary Search Tree optimization in large sparse switch statements?",shortAnswer:"When case constants are sparse and non-contiguous (e.g. 10, 500, 100000), the compiler generates a balanced binary search comparison tree (O(log N)) instead of a giant jump table.",explanation:"Prevents wasting massive memory on empty jump table slots for widely spaced integers.",hint:"O(log N) binary search for sparse switch values.",level:"advanced"},{question:"How do you implement an interactive menu system using a switch statement?",shortAnswer:"Prompt the user for a numeric or character choice, read with `scanf`, and pass the variable into a switch statement.",explanation:"Wrap the menu in a `do-while` loop until the user selects the exit option.",hint:"do-while loop wrapping a switch menu.",level:"basic"},{question:"Why should `/* fallthrough */` comments be used for intentional fall-through in modern C code?",shortAnswer:"To document code intent for other engineers and suppress compiler `-Wimplicit-fallthrough` warnings.",explanation:"Explicit comments clarify that the missing break is intentional rather than a bug.",hint:"Suppresses warnings and confirms programmer intent.",level:"intermediate"}],l=`================================================================================
CODER & ACCOTAX - C LANGUAGE STUDY NOTE
Module 001_003: Control Flow: Branching, Decision Making & Loops
Topic 1: The switch-case statement: jump table optimization & fall-through
Educator: Sukanta Hui | Location: Barrackpore, West Bengal
================================================================================

1. TEACHER'S INTUITIVE BREAKDOWN FOR BEGINNERS:
--------------------------------------------------------------------------------
Q: What is a switch-case statement? (The Restaurant Vending Machine Analogy)
A: In an else-if ladder, the waiter asks you: "Do you want Chai? No? Coffee? No?
   Juice? No? Water? Yes!" (Checking 1 by 1 linearly).
   In a switch-case, you press button #3 on a vending machine, and Juice is
   instantly dispensed in 1 shot! The CPU uses a "Jump Table" to jump directly
   to the target case in O(1) constant time!

Q: What happens if you forget 'break;'? (The Dangerous Fall-Through)
A: If you don't put a 'break;', execution does NOT stop! It spills downward
   into all lower cases and executes their code too until a break or closing
   brace is hit!

Q: Why are floats & strings illegal in switch?
A: Switch requires discrete integer / character constants so the compiler can
   compute exact memory jump offsets. Floats have decimal rounding imprecisions.

2. INTENTIONAL FALL-THROUGH:
--------------------------------------------------------------------------------
Stacking cases together to share logic:
switch (month) {
    case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        days = 31;
        break;
    case 4: case 6: case 9: case 11:
        days = 30;
        break;
    case 2:
        days = 28; // or 29 in leap year
        break;
}

3. SCOPE DECLARATION TRICK INSIDE A CASE:
--------------------------------------------------------------------------------
If you declare variables inside a case, enclose in curly braces:
case 1: {
    int localScore = 100;
    printf("Score: %d\\n", localScore);
    break;
}

4. TEACHER'S GOLDEN RULES FROM SUKANTA HUI:
--------------------------------------------------------------------------------
1. ALWAYS write a 'default:' branch as the fallback safety net!
2. ALWAYS verify that every case has a 'break;' unless intentional fallthrough.
3. Group identical character cases (e.g. 'y' and 'Y') together for clean code.
================================================================================
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_003 · Topic 1"}),e.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Switch-Case & Jump Tables"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"The switch-case Statement: Jump Table Optimization, Fall-Through & Break"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Explore C's high-speed multi-way dispatch statement. Understand CPU jump tables, why switch achieves O(1) time complexity, fall-through mechanics, and menu state machine architectures."})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: Switch-Case Made Super Simple"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"A simple guide by Sukanta Hui for beginners at Coder & AccoTax"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Style"})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-amber-300 flex items-center gap-2",children:[e.jsx("span",{children:"🥤"})," Step 1: The Slow Waiter vs The Fast Vending Machine"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 space-y-2",children:[e.jsx("span",{className:"text-amber-300 font-bold block text-sm",children:"The Slow Waiter (else-if Ladder):"}),e.jsxs("p",{className:"text-slate-300",children:["Imagine sitting at a restaurant in ",e.jsx("strong",{children:"Shyamnagar"})," and the waiter asks: ",e.jsx("em",{children:'"Do you want Tea? No? Coffee? No? Cold Drink? No? Mango Juice? Yes!"'})," The waiter checks every single item one-by-one from top to bottom (",e.jsx("strong",{children:"O(N) linear time"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-indigo-500/30 space-y-2",children:[e.jsx("span",{className:"text-indigo-300 font-bold block text-sm",children:"The Fast Vending Machine (switch-case):"}),e.jsxs("p",{className:"text-slate-300",children:["You press button ",e.jsx("strong",{children:"#4"})," on an automatic beverage machine, and Mango Juice drops instantly in one single direct shot! The compiler creates a ",e.jsx("strong",{children:"Jump Table"})," in memory to jump directly to case 4 in ",e.jsx("strong",{children:"O(1) constant time"}),"!"]})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-rose-300 flex items-center gap-2",children:[e.jsx("span",{children:"🌊"}),' Step 2: The "Missing Break" Waterfall (Fall-Through)']}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["In C, a ",e.jsx("code",{children:"case"})," is just an entry doorway into a room. If you do not lock the exit door with a ",e.jsx("code",{children:"break;"})," statement, execution keeps flowing downward like a waterfall into all the lower cases!"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-4 bg-rose-950/30 border border-rose-800/40 rounded-xl space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-rose-400 font-bold block font-sans",children:"❌ Accidental Fall-Through Bug:"}),e.jsx("pre",{className:"text-slate-200",children:`int choice = 1;
switch(choice) {
    case 1: printf("Deposit\\n");
    case 2: printf("Withdraw\\n");
    case 3: printf("Balance\\n");
}
// Terminal Output:
// Deposit
// Withdraw
// Balance (All 3 executed!)`})]}),e.jsxs("div",{className:"p-4 bg-emerald-950/30 border border-emerald-800/40 rounded-xl space-y-2 font-mono text-xs",children:[e.jsx("span",{className:"text-emerald-400 font-bold block font-sans",children:"✅ Protected with Break:"}),e.jsx("pre",{className:"text-slate-200",children:`int choice = 1;
switch(choice) {
    case 1: printf("Deposit\\n"); break;
    case 2: printf("Withdraw\\n"); break;
    case 3: printf("Balance\\n"); break;
}
// Terminal Output:
// Deposit (Stops and exits cleanly!)`})]})]})]}),e.jsxs("div",{className:"space-y-3 bg-slate-900/80 p-5 rounded-2xl border border-slate-800",children:[e.jsxs("h3",{className:"text-lg font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🤝"})," Step 3: When Fall-Through is Actually Useful (Stacking Cases)"]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"When multiple options need to perform the exact same action (like uppercase 'Y' and lowercase 'y'), you can stack case labels directly on top of each other without breaks:"}),e.jsxs("div",{className:"p-3 bg-slate-950 rounded-xl font-mono text-xs text-sky-300 border border-slate-800",children:["case 'y':",e.jsx("br",{}),"case 'Y':",e.jsx("br",{}),'    printf("User confirmed: YES!\\\\n");',e.jsx("br",{}),"    break;"]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-3xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"border-b border-slate-800 pb-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📚"})," Multi-Scenario Code Examples & Practical Variations"]}),e.jsx("p",{className:"text-xs text-slate-400 mt-1",children:"Real-world switch-case patterns across different engineering domains"})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-emerald-400 text-sm",children:"Scenario 1: Four-Function Calculator"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 text-[10px] px-2 py-0.5 rounded border border-emerald-500/20",children:"Arithmetic Dispatch"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Dispatches calculations directly based on the operator character token."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`char op = '*';
double a = 15.0, b = 3.0;

switch (op) {
    case '+': printf("%.2f\\n", a + b); break;
    case '-': printf("%.2f\\n", a - b); break;
    case '*': printf("%.2f\\n", a * b); break;
    case '/': 
        if (b != 0.0) printf("%.2f\\n", a / b);
        else printf("Error: Division by Zero\\n");
        break;
    default:  printf("Invalid Operator\\n"); break;
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-amber-400 text-sm",children:"Scenario 2: Days in Month Classifier"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 text-[10px] px-2 py-0.5 rounded border border-amber-500/20",children:"Stacked Cases"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Groups all 31-day and 30-day months together with stacked case labels."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int month = 4, year = 2024, days = 0;
switch (month) {
    case 1: case 3: case 5: case 7: 
    case 8: case 10: case 12:
        days = 31; break;
    case 4: case 6: case 9: case 11:
        days = 30; break;
    case 2:
        days = ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) ? 29 : 28;
        break;
    default: days = -1; break;
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-purple-400 text-sm",children:"Scenario 3: Finite State Machine"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 text-[10px] px-2 py-0.5 rounded border border-purple-500/20",children:"Enum Dispatch"})]}),e.jsx("p",{className:"text-xs text-slate-400",children:"Controls state transitions for a traffic signal or transaction lifecycle."}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`typedef enum { RED, YELLOW, GREEN } TrafficState;
TrafficState current = RED;

switch (current) {
    case RED:
        printf("STOP - Halt Vehicle\\n");
        current = GREEN; // Next transition
        break;
    case YELLOW:
        printf("READY - Prepare to Move\\n");
        current = RED;
        break;
    case GREEN:
        printf("GO - Clear to Proceed\\n");
        current = YELLOW;
        break;
}`})]}),e.jsxs("div",{className:"bg-slate-950 p-5 rounded-2xl border border-slate-800 space-y-3",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-bold text-pink-400 text-sm",children:"Scenario 4: Local Scope in Cases"}),e.jsx("span",{className:"bg-pink-500/10 text-pink-400 text-[10px] px-2 py-0.5 rounded border border-pink-500/20",children:"Block Scoping"})]}),e.jsxs("p",{className:"text-xs text-slate-400",children:["Wrapping case blocks in ",e.jsx("code",{children:"{ }"})," allows safe variable declarations."]}),e.jsx("pre",{className:"bg-slate-900 p-3 rounded-xl font-mono text-[11px] text-slate-200 overflow-x-auto",children:`int action = 1;
switch (action) {
    case 1: {
        // Braces create a new local scope!
        int bonus = 500;
        int totalPayout = 1000 + bonus;
        printf("Payout: %d\\n", totalPayout);
        break;
    }
    case 2:
        printf("No bonus applied.\\n");
        break;
}`})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Jump Table Compilation & CPU Dispatch"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["When a C compiler compiles a ",e.jsx("code",{children:"switch-case"})," with densely clustered integer constants, it does not generate a sequential chain of ",e.jsx("code",{children:"cmp"})," and ",e.jsx("code",{children:"jne"})," instructions. Instead, it generates a ",e.jsx("strong",{children:"Jump Table"})," (an array of code address pointers)."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2 mt-4",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Context (Naihati & Barrackpore Labs):"}),e.jsxs("p",{children:["When ",e.jsx("strong",{children:"Tuhina"})," and ",e.jsx("strong",{children:"Abhronila"})," built an interactive billing menu, they forgot to put ",e.jsx("code",{children:"break;"})," after Case 1, causing an automatic withdrawal whenever someone deposited money! ",e.jsx("strong",{children:"Sukanta Hui"})," showed how ",e.jsx("code",{children:"break"})," creates an assembly ",e.jsx("code",{children:"jmp"})," instruction to the end of the switch block."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: Jump Table Dispatch Architecture"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[760px] font-sans",children:[e.jsx("rect",{x:"10",y:"10",width:"900",height:"260",rx:"16",fill:"#0f172a",stroke:"#1e293b",strokeWidth:"2"}),e.jsx("text",{x:"460",y:"38",textAnchor:"middle",fill:"#94a3b8",className:"text-xs uppercase tracking-wider font-semibold",children:"Compiler Optimization: Switch Expression to Direct O(1) Jump Table Lookup"}),e.jsxs("g",{transform:"translate(40, 90)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"80",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"90",y:"35",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs",children:"switch(key)"}),e.jsx("text",{x:"90",y:"55",textAnchor:"middle",fill:"#cbd5e1",className:"font-mono text-xs",children:"key = 2"})]}),e.jsx("path",{d:"M 220 130 L 290 130",stroke:"#38bdf8",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(290, 60)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"150",rx:"10",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"110",y:"25",textAnchor:"middle",fill:"#f59e0b",className:"font-bold text-xs",children:"Jump Table [.rodata]"}),e.jsx("rect",{x:"10",y:"35",width:"200",height:"25",fill:"#1e293b"}),e.jsx("text",{x:"20",y:"52",fill:"#94a3b8",className:"font-mono text-[10px]",children:"Index 0 → &Case_0"}),e.jsx("rect",{x:"10",y:"65",width:"200",height:"25",fill:"#1e293b"}),e.jsx("text",{x:"20",y:"82",fill:"#94a3b8",className:"font-mono text-[10px]",children:"Index 1 → &Case_1"}),e.jsx("rect",{x:"10",y:"95",width:"200",height:"25",fill:"#3b82f6"}),e.jsx("text",{x:"20",y:"112",fill:"#ffffff",className:"font-mono text-[10px] font-bold",children:"Index 2 → &Case_2 (MATCH)"}),e.jsx("rect",{x:"10",y:"125",width:"200",height:"20",fill:"#1e293b"}),e.jsx("text",{x:"20",y:"138",fill:"#94a3b8",className:"font-mono text-[10px]",children:"Index 3 → &Case_3"})]}),e.jsx("path",{d:"M 510 110 L 600 110",stroke:"#34d399",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(600, 75)",className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"0",y:"0",width:"280",height:"110",rx:"12",fill:"#064e3b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"140",y:"30",textAnchor:"middle",fill:"#ffffff",className:"font-bold text-sm",children:"case 2 Code Block"}),e.jsx("text",{x:"140",y:"55",textAnchor:"middle",fill:"#a7f3d0",className:"font-mono text-xs",children:'printf("Target Match!");'}),e.jsx("text",{x:"140",y:"80",textAnchor:"middle",fill:"#6ee7b7",className:"font-mono text-xs font-bold",children:"break;  →  jmp .L_exit"})]}),e.jsx("text",{x:"460",y:"240",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"⚡ Direct indexed memory jump: 0 comparisons executed regardless of case count!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🔍"})," Deep Technical Breakdown: switch-case vs else-if Ladder"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Feature"}),e.jsx("th",{className:"p-3",children:"switch-case Statement"}),e.jsx("th",{className:"p-3",children:"else-if Ladder"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Execution Complexity"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"O(1) Constant Time (Jump Table)"}),e.jsx("td",{className:"p-3 font-mono text-amber-400",children:"O(N) Linear Time (Sequential checks)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Allowed Data Types"}),e.jsx("td",{className:"p-3",children:"Only integral types (int, char, enum)"}),e.jsx("td",{className:"p-3",children:"Any boolean expression (floats, pointers, ranges)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Range Checks (>, <)"}),e.jsx("td",{className:"p-3 text-rose-400",children:"No (only discrete exact equality)"}),e.jsx("td",{className:"p-3 text-emerald-400",children:"Yes (supports any inequality)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Fall-Through Capability"}),e.jsx("td",{className:"p-3 text-sky-400",children:"Yes (cascades unless broken)"}),e.jsx("td",{className:"p-3",children:"No (mutually exclusive evaluation)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-bold text-slate-200",children:"Best Use Case"}),e.jsx("td",{className:"p-3",children:"Command menus, state machines, tokens"}),e.jsx("td",{className:"p-3",children:"Grading scales, range boundaries, complex conditions"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: switch-case Architecture Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"SwitchCaseDemo.c"}),") demonstrates interactive menu arithmetic dispatch, intentional stacked fall-through for calendar days, and character vowel categorization."]}),e.jsx(t,{fileModule:i,title:"SwitchCaseDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`===================================================================
     SWITCH-CASE ARCHITECTURE & MECHANICS - CODER & ACCOTAX
     Educator: Sukanta Hui | Barrackpore Systems Lab
===================================================================

--- [1] Menu Calculator using switch-case ---
12.50 * 4.00 = 50.00

--- [2] Intentional Fall-Through (Days in Month) ---
Month 2 in Year 2024 has 29 days.

--- [3] Grouped Case Statements (Vowel Classifier) ---
Character 'E' is a VOWEL.
===================================================================`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Best Practices"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Forgotten break Statements:"})," Causes accidental fall-through into unintended case routines!"]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Attempting to match Float/Double variables:"})," Causes compiler error (",e.jsx("code",{children:"switch quantity not an integer"}),")."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Missing default Case:"})," Always include a ",e.jsx("code",{children:"default:"})," label to handle invalid input tokens safely."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why does the compiler choose a balanced binary search tree rather than a jump table when case values are widely spaced (e.g. ",e.jsx("code",{children:"case 5:"}),", ",e.jsx("code",{children:"case 5000:"}),", ",e.jsx("code",{children:"case 1000000:"}),")? How does this save memory in the ",e.jsx("code",{children:".rodata"})," segment?"]})]}),e.jsx("section",{children:e.jsx(s,{title:"Module 001_003 Topic 1 FAQs: switch-case Mechanics",questions:r})}),e.jsx("section",{children:e.jsx(a,{content:l,title:"Module 001_003 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_003_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(n,{note:"Whenever writing state machines, menu dispatchers, or packet decoders in C, always prefer switch-case over if-else! Jump tables execute at blistering O(1) CPU speed! — Sukanta Hui"})})]})}export{g as default};
