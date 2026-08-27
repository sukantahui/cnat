import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * File: ShortCircuitEvaluationDemo.java\r
 * Module: 001_003_operators-expressions-and-type-casting (Topic 10)\r
 * Description: Demonstrates short-circuit evaluation in Java (&& vs &, || vs |),\r
 *              defensive null-guard patterns (preventing NullPointerException),\r
 *              state mutation traps with skipped side-effects (++counter, payment processing),\r
 *              and student enrollment validation in Indian Rupees (₹).\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.operators;\r
\r
public class ShortCircuitEvaluationDemo {\r
\r
    private static int sideEffectCounter = 0;\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 10 SHORT-CIRCUIT EVALUATION (&& VS &, || VS |)");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. Defensive Null-Guard Pattern (Short-Circuit && Prevents NullPointerException)\r
        System.out.println("--- 1. DEFENSIVE NULL-GUARD PATTERN (&&) ---");\r
        StudentAccount nullStudent = null;\r
\r
        // SAFE: Short-circuit && skips the right operand when left is false:\r
        if (nullStudent != null && nullStudent.isFeeCleared()) {\r
            System.out.println("Student has access.");\r
        } else {\r
            System.out.println("✓ Safe Null-Guard: nullStudent is null, right operand was NEVER evaluated (No NullPointerException)!");\r
        }\r
\r
        // DANGEROUS: Eager '&' operator evaluates BOTH operands regardless of left result:\r
        try {\r
            boolean dangerousCheck = (nullStudent != null) & nullStudent.isFeeCleared();\r
        } catch (NullPointerException e) {\r
            System.out.println("✓ Caught NPE with Eager '&': Non-short-circuit '&' evaluated nullStudent.isFeeCleared()!");\r
        }\r
        System.out.println();\r
\r
        // 2. Short-Circuit Division-by-Zero Guard\r
        System.out.println("--- 2. SHORT-CIRCUIT DIVISION-BY-ZERO GUARD ---");\r
        int count = 0;\r
        int totalMarks = 500;\r
\r
        // SAFE: (count != 0) is false, so (totalMarks / count > 50) is SKIPPED!\r
        if (count != 0 && (totalMarks / count > 50)) {\r
            System.out.println("Average passed threshold.");\r
        } else {\r
            System.out.println("✓ Zero-divisor protected: Division by zero was short-circuited safely without ArithmeticException!\\n");\r
        }\r
\r
        // 3. Side-Effect Traps: Skipped Variable Increments\r
        System.out.println("--- 3. SIDE-EFFECT TRAPS WITH SHORT-CIRCUITING ---");\r
        int testX = 10;\r
        sideEffectCounter = 0;\r
\r
        // Short-circuit AND (false && ...):\r
        boolean resAnd = (testX > 20) && (++sideEffectCounter > 0);\r
        System.out.printf("After 'false && (++counter > 0)' -> resAnd = %b | counter = %d (SKIPPED!)%n",\r
                resAnd, sideEffectCounter);\r
\r
        // Eager AND (false & ...):\r
        boolean resEagerAnd = (testX > 20) & (++sideEffectCounter > 0);\r
        System.out.printf("After 'false &  (++counter > 0)' -> resEager = %b | counter = %d (EXECUTED!)%n%n",\r
                resEagerAnd, sideEffectCounter);\r
\r
        // Short-circuit OR (true || ...):\r
        sideEffectCounter = 0;\r
        boolean resOr = (testX == 10) || (++sideEffectCounter > 0);\r
        System.out.printf("After 'true  || (++counter > 0)' -> resOr = %b | counter = %d (SKIPPED!)%n",\r
                resOr, sideEffectCounter);\r
\r
        // Eager OR (true | ...):\r
        boolean resEagerOr = (testX == 10) | (++sideEffectCounter > 0);\r
        System.out.printf("After 'true  |  (++counter > 0)' -> resEager = %b | counter = %d (EXECUTED!)%n%n",\r
                resEagerOr, sideEffectCounter);\r
\r
        // 4. Critical Business Logic Trap: Method Calls with Side Effects in Conditions\r
        System.out.println("--- 4. CRITICAL BUSINESS HAZARD: SKIPPED TRANSACTION METHODS ---");\r
        StudentAccount swadeepAcc = new StudentAccount("Swadeep", 15000.0, true);\r
\r
        // HAZARD: Because swadeepAcc.isScholarshipEligible() is TRUE, processFeePayment() is NEVER called!\r
        if (swadeepAcc.isScholarshipEligible() || swadeepAcc.processFeePayment(15000.0)) {\r
            System.out.println("✓ Condition evaluated to true, BUT did payment process?");\r
        }\r
        System.out.printf("Swadeep Account Paid Status: %b (Payment was SKIPPED due to '||' short-circuit!)%n%n",\r
                swadeepAcc.isPaid());\r
\r
        // 5. Correct Enterprise Pattern: Separate Execution from Condition Checking\r
        System.out.println("--- 5. ENTERPRISE BEST PRACTICE: SEPARATE ACTION FROM CONDITION ---");\r
        StudentAccount tuhinaAcc = new StudentAccount("Tuhina", 22000.0, false);\r
        boolean paymentSuccess = tuhinaAcc.processFeePayment(22000.0);\r
\r
        if (paymentSuccess && tuhinaAcc.isFeeCleared()) {\r
            System.out.printf("Tuhina enrolled successfully in Barrackpore. Paid: ₹%,.2f%n", 22000.0);\r
        }\r
\r
        System.out.println("\\n================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. '&&' stops immediately on FIRST false; '||' stops on FIRST true.");\r
        System.out.println("2. Use '&&' for defensive null guards (obj != null && obj.isValid()).");\r
        System.out.println("3. Non-short-circuit '&' and '|' always evaluate both sides (dangerous with null).");\r
        System.out.println("4. Never place state-mutating methods or ++/-- inside short-circuit conditions.");\r
        System.out.println("================================================================================");\r
    }\r
\r
    private static class StudentAccount {\r
        private final String name;\r
        private final double courseFee;\r
        private final boolean isScholarship;\r
        private boolean isPaid;\r
\r
        public StudentAccount(String name, double courseFee, boolean isScholarship) {\r
            this.name = name;\r
            this.courseFee = courseFee;\r
            this.isScholarship = isScholarship;\r
            this.isPaid = false;\r
        }\r
\r
        public boolean isFeeCleared() {\r
            return isPaid || isScholarship;\r
        }\r
\r
        public boolean isScholarshipEligible() {\r
            return isScholarship;\r
        }\r
\r
        public boolean processFeePayment(double amount) {\r
            System.out.printf(" -> Executing payment transaction of ₹%,.2f for %s...%n", amount, name);\r
            this.isPaid = true;\r
            return true;\r
        }\r
\r
        public boolean isPaid() {\r
            return isPaid;\r
        }\r
    }\r
}\r
`,r=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_003: Operators, Expressions, Precedence & Type Casting\r
TOPIC 10: Short-Circuit Evaluation in && and || Operators & Its Side-Effects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Short-Circuit Evaluation Mechanics:\r
  * && (Conditional AND): If LEFT is FALSE -> RIGHT is NEVER evaluated!\r
  * || (Conditional OR) : If LEFT is TRUE  -> RIGHT is NEVER evaluated!\r
\r
- Defensive Guard Patterns:\r
  * Null Guard       : if (student != null && student.hasPaid()) // 100% Safe\r
  * Zero-Divisor Guard: if (count != 0 && (total / count > 50))   // 100% Safe\r
  * Array Index Guard : if (i >= 0 && i < arr.length && arr[i] == 5)\r
\r
- Short-Circuit vs Eager Operators:\r
  +------------------+-------------------------+-------------------------------+\r
  | Operator         | Name                    | Evaluation Behavior           |\r
  +------------------+-------------------------+-------------------------------+\r
  | &&               | Short-Circuit AND       | Skips right if left is false  |\r
  | &                | Eager / Bitwise AND     | ALWAYS evaluates both sides   |\r
  | ||               | Short-Circuit OR        | Skips right if left is true   |\r
  | |                | Eager / Bitwise OR      | ALWAYS evaluates both sides   |\r
  +------------------+-------------------------+-------------------------------+\r
\r
- Side-Effect Traps:\r
  * boolean test = false && (++counter > 0); // counter remains UNCHANGED!\r
  * boolean test = true  || (processTx() > 0); // processTx() is SKIPPED!\r
  * Golden Rule: Never put variable increments (++x) or business mutating methods\r
    inside short-circuited condition clauses.\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Use '&&' for defensive null and boundary guards.\r
[✓] Remember that single '&' and '|' do NOT short-circuit (danger with null!).\r
[✓] Separate state-changing actions from condition checks.\r
[✓] Order conditions from cheapest (in-memory) to most expensive (DB/Network).\r
================================================================================\r
`,o=[{question:"What is Short-Circuit Evaluation in Java?",shortAnswer:"Stopping expression evaluation as soon as the final boolean outcome is mathematically guaranteed without evaluating remaining operands.",explanation:"For `&&`, if the left operand is `false`, the entire result is `false` (right operand skipped). For `||`, if the left operand is `true`, the result is `true` (right operand skipped).",hint:"Stops evaluation as soon as outcome is certain.",level:"basic",codeExample:"boolean res = (false && anyMethod()); // anyMethod() is NEVER called"},{question:"What is the Defensive Null-Guard Pattern using `&&`?",shortAnswer:"`if (obj != null && obj.isValid())` safely checks `obj != null` before calling methods, preventing `NullPointerException`.",explanation:"If `obj` is null, the left condition is `false`, and short-circuit `&&` skips `obj.isValid()` completely.",hint:"Left null-check protects right method call.",level:"basic",codeExample:"if (student != null && student.hasPaidFee()) { /* Safe */ }"},{question:"What happens if you replace `&&` with `&` in `if (obj != null & obj.isValid())` when `obj` is null?",shortAnswer:"Throws `java.lang.NullPointerException` at runtime!",explanation:"The single `&` is a non-short-circuit operator that eagerly evaluates both sides, calling `isValid()` on a null pointer.",hint:"Single & eagerly evaluates right operand, causing NullPointerException.",level:"basic",codeExample:`Student s = null;
// if (s != null & s.isValid()) // THROWS NullPointerException!`},{question:"How does short-circuit evaluation protect against Division-by-Zero errors?",shortAnswer:"By placing the non-zero check on the left: `if (count != 0 && total / count > 50)`.",explanation:"When `count` is 0, `count != 0` is `false`, and `&&` skips the division `total / count` entirely.",hint:"count != 0 on left skips division by zero.",level:"basic",codeExample:"if (divisor != 0 && (100 / divisor > 10)) { /* Safe */ }"},{question:"What is the evaluated result of `int x = 0; boolean b = (x > 0) && (++x > 0);`?",shortAnswer:"`b = false` and `x = 0` (the increment is SKIPPED).",explanation:"`x > 0` evaluates to `false`, so `&&` short-circuits and never executes `++x`.",hint:"Short-circuit skips ++x, leaving x at 0.",level:"intermediate",codeExample:`int x = 0;
boolean b = (x > 0) && (++x > 0); // b is false, x is STILL 0`},{question:"What is the evaluated result of `int x = 0; boolean b = (x == 0) || (++x > 0);`?",shortAnswer:"`b = true` and `x = 0` (the increment is SKIPPED).",explanation:"`x == 0` evaluates to `true`, so `||` short-circuits and never executes `++x`.",hint:"Short-circuit skips ++x on true, leaving x at 0.",level:"intermediate",codeExample:`int x = 0;
boolean b = (x == 0) || (++x > 0); // b is true, x is STILL 0`},{question:"What is the Side-Effect Trap with short-circuiting?",shortAnswer:"Placing state-mutating operations (like `++x`, `list.add()`, or payment processing methods) in the right operand where short-circuiting may unpredictably skip them.",explanation:"If the left operand short-circuits, essential business state modifications are bypassed.",hint:"Never place side-effects in short-circuited operands.",level:"intermediate",codeExample:"// Anti-pattern: if (isVIP || processPayment()) // payment skipped if isVIP is true!"},{question:"How should state-mutating actions be written when combined with conditional logic?",shortAnswer:"Execute the action separately first, store the result in a boolean variable, and then test the variable.",explanation:"Decoupling action execution from conditional testing guarantees deterministic execution.",hint:"Execute action before conditional check.",level:"intermediate",codeExample:`boolean success = processPayment();
if (isVIP || success) { /* Clean */ }`},{question:"What are the non-short-circuit boolean operators in Java?",shortAnswer:"Single `&` (eager AND) and single `|` (eager OR).",explanation:"When applied to booleans, `&` and `|` force evaluation of both left and right operands regardless of the left operand's outcome.",hint:"& and | always evaluate both operands.",level:"intermediate",codeExample:"boolean b = checkLeft() & checkRight(); // Both methods ALWAYS execute"},{question:"Why does Java offer both short-circuit (`&&`, `||`) and eager (`&`, `|`) boolean operators?",shortAnswer:"`&&` and `||` optimize performance and enable safety guards; `&` and `|` allow scenarios where side-effects in both branches are intentionally required.",explanation:"In 99.9% of production code, `&&` and `||` are preferred.",hint:"&& is standard; & is for intentional dual evaluation.",level:"intermediate",codeExample:"boolean validateAll = validateName() & validateAge(); // Validates both fields"},{question:"What is the result of `int a = 5, b = 10; boolean test = (a < 10) || (b++ > 5);`?",shortAnswer:"`test = true` and `b = 10`.",explanation:"`a < 10` is `true`, so `||` short-circuits and skips `b++`.",hint:"b remains 10 due to short-circuit.",level:"basic",codeExample:`int a = 5, b = 10;
boolean test = (a < 10) || (b++ > 5); // test is true, b is 10`},{question:"What is the result of `int a = 5, b = 10; boolean test = (a > 10) && (b++ > 5);`?",shortAnswer:"`test = false` and `b = 10`.",explanation:"`a > 10` is `false`, so `&&` short-circuits and skips `b++`.",hint:"b remains 10.",level:"basic",codeExample:`int a = 5, b = 10;
boolean test = (a > 10) && (b++ > 5); // test is false, b is 10`},{question:"What happens in a multi-condition chain like `cond1 && cond2 && cond3 && cond4`?",shortAnswer:"Evaluation proceeds left-to-right until the FIRST `false` condition is found; all subsequent conditions are skipped.",explanation:"JLS §15.23 guarantees left-to-right short-circuit termination.",hint:"Stops on first false.",level:"basic",codeExample:"if (isLoggedIn && hasPermission && isActive && isUnderLimit) { }"},{question:"What happens in a multi-condition chain like `cond1 || cond2 || cond3 || cond4`?",shortAnswer:"Evaluation proceeds left-to-right until the FIRST `true` condition is found; all subsequent conditions are skipped.",explanation:"JLS §15.24 guarantees left-to-right short-circuit termination on first true.",hint:"Stops on first true.",level:"basic",codeExample:"if (isAdmin || isSuperUser || isOwner) { }"},{question:"How does short-circuit evaluation improve application performance in database queries?",shortAnswer:"By checking fast in-memory cache conditions first before slow disk or network calls: `if (inCache || queryDatabase())`.",explanation:"If data is in cache, the slow database query is never executed.",hint:"Fast checks first, expensive checks last.",level:"intermediate",codeExample:"if (cache.contains(key) || db.fetch(key) != null) { }"},{question:"How should expensive validation checks be ordered in an `&&` expression?",shortAnswer:"Place cheap, lightweight checks (e.g. null check, length check) on the left, and expensive checks (regex, database, remote API) on the right.",explanation:"If a cheap check fails, the expensive check is skipped.",hint:"Order from cheapest to most expensive.",level:"intermediate",codeExample:"if (input != null && input.length() > 0 && matchesComplexRegex(input)) { }"},{question:"What bytecode instruction is generated by the Java compiler for `&&` short-circuiting?",shortAnswer:"`ifeq` (Branch if equal to 0 / false) instruction jumps past the right operand code.",explanation:"The compiler emits hardware branch jumps directly in bytecode.",hint:"ifeq branch instruction.",level:"advanced",codeExample:"// Bytecode: ifeq Label_End (skips right operand evaluation)"},{question:"What bytecode instruction is generated by the Java compiler for `||` short-circuiting?",shortAnswer:"`ifne` (Branch if not equal to 0 / true) instruction jumps directly to the true branch.",explanation:"The compiler emits branch jumps on non-zero.",hint:"ifne branch instruction.",level:"advanced",codeExample:"// Bytecode: ifne Label_True (skips right operand evaluation)"},{question:"Is short-circuiting evaluated Left-to-Right or Right-to-Left?",shortAnswer:"Strictly Left-to-Right (JLS §15.23 and §15.24).",explanation:"Java guarantees the left operand is fully evaluated before deciding whether to evaluate the right operand.",hint:"Strictly Left-to-Right.",level:"basic",codeExample:"boolean res = first() && second(); // first() is ALWAYS called first"},{question:"Can short-circuiting prevent array index out of bounds exceptions?",shortAnswer:"Yes: `if (index >= 0 && index < arr.length && arr[index] == target)` safely checks array boundaries first.",explanation:"If `index < arr.length` is false, `arr[index]` is never accessed.",hint:"Boundary check on left protects array indexing.",level:"basic",codeExample:"if (i < array.length && array[i] > 0) { /* 100% safe */ }"},{question:"What is the result of `int k = 0; boolean res = false && (k++ > 0);`?",shortAnswer:"`res = false` and `k = 0`.",explanation:"Left is false, right is skipped, `k` remains 0.",hint:"k remains 0.",level:"basic",codeExample:`int k = 0;
boolean res = false && (k++ > 0); // res is false, k is 0`},{question:"What is the result of `int k = 0; boolean res = false & (k++ > 0);`?",shortAnswer:"`res = false` and `k = 1`.",explanation:"Single `&` evaluates both sides, so `k++` executes and `k` becomes 1.",hint:"k becomes 1 with eager &.",level:"basic",codeExample:`int k = 0;
boolean res = false & (k++ > 0); // res is false, k is 1`},{question:"What is the result of `int m = 0; boolean res = true || (m++ > 0);`?",shortAnswer:"`res = true` and `m = 0`.",explanation:"Left is true, right is skipped, `m` remains 0.",hint:"m remains 0.",level:"basic",codeExample:`int m = 0;
boolean res = true || (m++ > 0); // res is true, m is 0`},{question:"What is the result of `int m = 0; boolean res = true | (m++ > 0);`?",shortAnswer:"`res = true` and `m = 1`.",explanation:"Single `|` evaluates both sides, so `m++` executes and `m` becomes 1.",hint:"m becomes 1 with eager |.",level:"basic",codeExample:`int m = 0;
boolean res = true | (m++ > 0); // res is true, m is 1`},{question:"In the Coder & AccoTax Barrackpore fee processing engine, how does short-circuiting prevent unpaid admissions?",shortAnswer:"By separating fee payment transaction calls from condition evaluations so payment processing is never skipped by `||`.",explanation:"Separating action from condition prevents bypassed business logic.",hint:"Separate payment execution from conditional logic.",level:"basic",codeExample:`boolean paid = account.processPayment(15000.0);
if (paid && account.isCleared()) { }`},{question:"Can short-circuiting cause bugs in unit test assertions?",shortAnswer:"Yes, if an assertion relies on a side-effect inside an `assert` condition that gets short-circuited or disabled.",explanation:"Assertions should be pure without side-effects.",hint:"Keep assertions side-effect free.",level:"advanced",codeExample:"assert list != null && list.remove(item); // BAD! remove skipped if disabled/null"},{question:"What is the ternary equivalent of `a && b`?",shortAnswer:"`a ? b : false`",explanation:"If `a` is true, return `b`; otherwise return `false`.",hint:"a ? b : false.",level:"advanced",codeExample:"boolean eq = a ? b : false; // Identical to a && b"},{question:"What is the ternary equivalent of `a || b`?",shortAnswer:"`a ? true : b`",explanation:"If `a` is true, return `true`; otherwise evaluate and return `b`.",hint:"a ? true : b.",level:"advanced",codeExample:"boolean eq = a ? true : b; // Identical to a || b"},{question:"What is the ultimate takeaway of Topic 10 for Java developers?",shortAnswer:"Leverage short-circuiting (`&&`, `||`) for defensive null guards and high-performance ordering, but NEVER put state-mutating side-effects in short-circuited expressions.",explanation:"Mastering short-circuit evaluation prevents NullPointerExceptions, ArithmeticExceptions, and hidden transaction bypass bugs.",hint:"Use && for null-guards; keep conditions side-effect free.",level:"basic",codeExample:"// Summary: && stops on false (guard), || stops on true, side-effects get skipped!"},{question:"What is the next topic (Topic 11) in Module 001_003?",shortAnswer:"Bitwise operators: Bitwise AND (&), Bitwise OR (|), Bitwise XOR (^), Bitwise Inversion (~).",explanation:"Topic 11 covers bitwise manipulation on integral types, bitmasking, flag setting, clearing, and toggling.",hint:"Bitwise operators in Java.",level:"basic",codeExample:"// Topic 11: &, |, ^, ~"}];function m(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowShortCircuit {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(56, 189, 248, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(56, 189, 248, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-sc {
            animation: glowShortCircuit 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Beginner Foundation"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Short-Circuit Evaluation in ",e.jsx("code",{className:"text-sky-400",children:"&&"})," and ",e.jsx("code",{className:"text-sky-400",children:"||"})," Operators & Side-Effects"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the defensive power and hidden hazards of short-circuiting: null-guard patterns (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"obj != null && obj.isValid()"}),"), avoiding ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"}),", short-circuit (",e.jsx("code",{className:"text-sky-300 font-mono",children:"&&"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"||"}),") vs eager (",e.jsx("code",{className:"text-amber-300 font-mono",children:"&"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"|"}),") evaluation, skipped side-effects (",e.jsx("code",{className:"text-rose-400 font-mono",children:"++counter"}),"), and payment verification in Indian Rupees (₹)."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," How Short-Circuit Evaluation Works"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"Short-Circuit Evaluation"})," is an optimization where the JVM stops evaluating an expression as soon as the final outcome is mathematically guaranteed:"]}),e.jsxs("p",{children:[e.jsxs("strong",{children:["In ",e.jsx("code",{className:"text-sky-300 font-mono",children:"&&"})," (AND):"]})," If the left operand is ",e.jsx("code",{className:"text-rose-400 font-mono",children:"false"}),", the entire expression must be false, so the right operand is ",e.jsx("strong",{children:"never evaluated"}),".",e.jsx("br",{}),e.jsxs("strong",{children:["In ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"||"})," (OR):"]})," If the left operand is ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"true"}),", the entire expression must be true, so the right operand is ",e.jsx("strong",{children:"never evaluated"}),"."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-sky-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-sky-300",children:"Classroom Case Study (Barrackpore Fee Transaction Guard):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," discovered a critical bug where writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"if (isScholarship || processFeePayment(15000))"})," skipped processing student payments in Indian Rupees (",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹"}),") whenever the scholarship flag was true! ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," refactored the logic to execute transactions separately, ensuring 100% accurate financial auditing across Naihati and Shyamnagar."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Short-Circuit Guard vs. Eager Evaluation Pipeline"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"How short-circuiting protects against crashes and how eager evaluation forces dual execution:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Short Circuit vs Eager Evaluation Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradSafeSC",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsxs("linearGradient",{id:"gradEagerNPE",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e"}),e.jsx("stop",{offset:"100%",stopColor:"#be123c"})]}),e.jsxs("linearGradient",{id:"gradSideEffect",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309"})]})]}),e.jsx("rect",{x:"30",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradSafeSC)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"160",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"1. Safe Guard (&&)"}),e.jsx("rect",{x:"45",y:"80",width:"230",height:"80",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"55",y:"102",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"s != null && s.isPaid()"}),e.jsx("text",{x:"55",y:"122",fill:"#d1fae5",fontSize:"10",children:"s is null → Left is FALSE"}),e.jsx("text",{x:"55",y:"142",fill:"#d1fae5",fontSize:"10",children:"Right side is SKIPPED!"}),e.jsx("text",{x:"160",y:"190",fill:"#ecfdf5",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"✓ 100% NPE Immune"}),e.jsx("rect",{x:"310",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradEagerNPE)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"440",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"2. Eager Operator (&)"}),e.jsx("rect",{x:"325",y:"80",width:"230",height:"80",rx:"6",fill:"#4c0519"}),e.jsx("text",{x:"335",y:"102",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"s != null & s.isPaid()"}),e.jsx("text",{x:"335",y:"122",fill:"#fecdd3",fontSize:"10",children:"Evaluates BOTH sides!"}),e.jsx("text",{x:"335",y:"142",fill:"#fecdd3",fontSize:"10",children:"Calls isPaid() on NULL!"}),e.jsx("text",{x:"440",y:"190",fill:"#ffe4e6",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"✗ Crashes with NPE!"}),e.jsx("rect",{x:"590",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradSideEffect)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"720",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"3. Skipped Side-Effects"}),e.jsx("rect",{x:"605",y:"80",width:"230",height:"80",rx:"6",fill:"#451a03"}),e.jsx("text",{x:"615",y:"102",fill:"#fde68a",fontSize:"11",fontFamily:"monospace",children:"false && (++x > 0)"}),e.jsx("text",{x:"615",y:"122",fill:"#fef3c7",fontSize:"10",children:"→ ++x is NEVER executed!"}),e.jsx("text",{x:"615",y:"142",fill:"#fef3c7",fontSize:"10",children:"→ x remains unchanged!"}),e.jsx("text",{x:"720",y:"190",fill:"#fef3c7",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Avoid Side-Effects in Logic"}),e.jsx("text",{x:"440",y:"255",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Bytecode Implementation: `ifeq` branches past right operand on false; `ifne` branches on true."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Short-Circuit vs. Eager Operator Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Operator"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Name"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Short-Circuit Behavior"}),e.jsx("th",{className:"p-3 font-semibold text-slate-400",children:"Primary Industry Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"&&"}),e.jsx("td",{className:"p-3",children:"Conditional AND"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"Skips right operand if left is FALSE"}),e.jsx("td",{className:"p-3 text-xs",children:"Defensive null checks, array bounds guards, division checks"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"||"}),e.jsx("td",{className:"p-3",children:"Conditional OR"}),e.jsx("td",{className:"p-3 text-emerald-400 font-mono",children:"Skips right operand if left is TRUE"}),e.jsx("td",{className:"p-3 text-xs",children:"Cache-first checks, fallback permissions, default value guards"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-amber-300",children:"&"}),e.jsx("td",{className:"p-3",children:"Logical / Bitwise AND"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"ALWAYS evaluates both operands"}),e.jsx("td",{className:"p-3 text-xs",children:"Bitmasking on integers; multi-validator sweeps where all rules run"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-amber-300",children:"|"}),e.jsx("td",{className:"p-3",children:"Logical / Bitwise OR"}),e.jsx("td",{className:"p-3 text-rose-400 font-mono",children:"ALWAYS evaluates both operands"}),e.jsx("td",{className:"p-3 text-xs",children:"Bitmasking on integers; comprehensive flag aggregation"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"ShortCircuitEvaluationDemo.java"})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The following program illustrates defensive null guards with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"&&"}),", division-by-zero guards, side-effect traps where increments and payments are bypassed, and enterprise payment transaction decoupling in Indian Rupees (₹)."]}),e.jsx(t,{fileModule:a,title:"ShortCircuitEvaluationDemo.java",highlightLines:[22,23,29,38,45,50,56,61,72,73,80,81]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Accidental Use of Single & in Null-Guards"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"if (user != null & user.isAdmin())"})," compiles cleanly but crashes in production with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"})," because the single ",e.jsx("code",{className:"text-amber-300 font-mono",children:"&"})," eagerly invokes ",e.jsx("code",{className:"text-rose-300 font-mono",children:"isAdmin()"})," on a null reference!"]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Always use double ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"&&"})," for null and range guards."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Separate State Modification from Conditions"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Never invoke database writes or payment processing inside ",e.jsx("code",{className:"text-sky-300 font-mono",children:"if"})," conditions. Execute the action explicitly beforehand: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"boolean success = processPayment(); if (isVIP || success)"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why does `false && (++x > 0)` leave x at 0, while `false & (++x > 0)` increments x to 1?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Short-Circuit vs Eager Evaluation! With ",e.jsx("code",{className:"text-sky-300 font-mono",children:"&&"}),", the left operand ",e.jsx("code",{className:"text-rose-400 font-mono",children:"false"})," guarantees the whole expression is false, so the JVM uses an ",e.jsx("code",{className:"text-amber-300 font-mono",children:"ifeq"})," instruction to jump completely past the right operand code, skipping ",e.jsx("code",{className:"text-rose-300 font-mono",children:"++x"}),". The single ",e.jsx("code",{className:"text-amber-300 font-mono",children:"&"})," is an eager operator that evaluates both expressions unconditionally!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Short-Circuit Evaluation FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:r,title:"Module 001_003 Topic 10: Short-Circuit Evaluation & Side-Effects",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_003_topic10_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Short-circuiting is your primary defense against NullPointerExceptions and division-by-zero crashes. Remember to always place cheap, defensive checks on the left, and never put methods with side-effects inside if conditions! In Topic 11, we explore Bitwise Operators (&, |, ^, ~)! — Sukanta Hui"})})]})}export{m as default};
