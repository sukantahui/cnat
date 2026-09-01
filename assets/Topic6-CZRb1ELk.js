import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * File: IncrementDecrementOperatorsDemo.java\r
 * Module: 001_003_operators-expressions-and-type-casting (Topic 6)\r
 * Description: Demonstrates Java increment (++) and decrement (--) operators,\r
 *              prefix (++x) vs postfix (x++) evaluation rules, JVM iinc bytecode mechanics,\r
 *              the famous 'x = x++' self-assignment trap, multi-step expression evaluation,\r
 *              and student serial roll number assignment in Barrackpore.\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.operators;\r
\r
public class IncrementDecrementOperatorsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 6 INCREMENT (++) & DECREMENT (--) OPERATORS");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. Prefix (++x, --x) vs Postfix (x++, x--) Fundamentals\r
        System.out.println("--- 1. PREFIX VS POSTFIX FUNDAMENTALS ---");\r
        int a = 10;\r
        int b = 10;\r
\r
        int prefixResult = ++a; // a is incremented to 11 FIRST, then 11 is returned\r
        int postfixResult = b++; // b's old value (10) is returned, THEN b becomes 11\r
\r
        System.out.printf("Prefix (++a)  : Evaluated Result = %d | Variable 'a' in memory = %d%n", prefixResult, a);\r
        System.out.printf("Postfix (b++) : Evaluated Result = %d | Variable 'b' in memory = %d%n%n", postfixResult, b);\r
\r
        int c = 20;\r
        int d = 20;\r
\r
        int prefixDec = --c; // c becomes 19 FIRST, then 19 returned\r
        int postfixDec = d--; // d returns 20, then d becomes 19\r
\r
        System.out.printf("Prefix (--c)  : Evaluated Result = %d | Variable 'c' in memory = %d%n", prefixDec, c);\r
        System.out.printf("Postfix (d--) : Evaluated Result = %d | Variable 'd' in memory = %d%n%n", postfixDec, d);\r
\r
        // 2. The Classic Java Interview Trap: 'x = x++'\r
        System.out.println("--- 2. THE INFAMOUS 'x = x++' SELF-ASSIGNMENT TRAP ---");\r
        int count = 5;\r
        count = count++; // Bytecode: iload pushes 5 to stack -> iinc increments memory to 6 -> istore overwrites memory with 5!\r
\r
        System.out.printf("Initial count = 5 -> After executing 'count = count++' -> count = %d%n", count);\r
        System.out.println("Explanation: Postfix pushes old value 5 to stack, increments memory to 6, then assignment pops 5 and overwrites 6!\\n");\r
\r
        // 3. Multi-Step Expression Evaluation (Left-to-Right JLS Guarantee)\r
        System.out.println("--- 3. MULTI-STEP EXPRESSION EVALUATION (STEP-BY-STEP) ---");\r
        int x = 5;\r
        // Expression: ++x + x++ + ++x\r
        // Step 1: ++x -> x becomes 6, returns 6\r
        // Step 2: x++ -> returns 6, x becomes 7\r
        // Step 3: ++x -> x becomes 8, returns 8\r
        // Total: 6 + 6 + 8 = 20\r
        int complexSum = ++x + x++ + ++x;\r
\r
        System.out.printf("For x = 5, expression '++x + x++ + ++x' evaluates to: %d (Final x in memory: %d)%n%n",\r
                complexSum, x);\r
\r
        // 4. Incrementing Different Data Types (char, double, byte)\r
        System.out.println("--- 4. INCREMENTING CHARS, BYTES & FLOATS ---");\r
        char letter = 'A';\r
        letter++; // 'A' (65) -> 'B' (66). Implicit narrowing cast: letter = (char)(letter + 1);\r
\r
        byte small = 127;\r
        small++; // Overflows to -128 without compile error! (small = (byte)(small + 1))\r
\r
        double price = 99.5;\r
        price++; // Becomes 100.5\r
\r
        System.out.printf("char 'A'++ : '%c'%n", letter);\r
        System.out.printf("byte 127++ : %d (Overflow wrap to Byte.MIN_VALUE)%n", small);\r
        System.out.printf("double 99.5++ : %.1f%n%n", price);\r
\r
        // 5. Real-World Student Serial Roll & Ticket Turnstile Engine (Barrackpore Lab)\r
        System.out.println("--- 5. BARRACKPORE STUDENT ADMISSION ROLL NUMBER DISPATCHER ---");\r
        StudentRollDispatcher dispatcher = new StudentRollDispatcher(101);\r
\r
        System.out.printf("Allocated: %-10s -> Roll #%d%n", "Swadeep", dispatcher.issueNextRoll());\r
        System.out.printf("Allocated: %-10s -> Roll #%d%n", "Tuhina", dispatcher.issueNextRoll());\r
        System.out.printf("Allocated: %-10s -> Roll #%d%n", "Abhronila", dispatcher.issueNextRoll());\r
        System.out.printf("Allocated: %-10s -> Roll #%d%n", "Debangshu", dispatcher.issueNextRoll());\r
        System.out.printf("Next Available Roll in Queue: Roll #%d%n", dispatcher.peekCurrentRoll());\r
\r
        System.out.println("\\n================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. Prefix (++x) increments BEFORE value is returned to expression.");\r
        System.out.println("2. Postfix (x++) returns original value FIRST, then increments memory.");\r
        System.out.println("3. 'x = x++;' leaves x unchanged due to operand stack assignment overwrite.");\r
        System.out.println("4. '++' and '--' include implicit narrowing casts: byte b=127; b++; -> (byte)(b+1).");\r
        System.out.println("================================================================================");\r
    }\r
\r
    private static class StudentRollDispatcher {\r
        private int currentRoll;\r
\r
        public StudentRollDispatcher(int startRoll) {\r
            this.currentRoll = startRoll;\r
        }\r
\r
        public int issueNextRoll() {\r
            // Postfix increment: returns current roll, then advances counter for the next student\r
            return currentRoll++;\r
        }\r
\r
        public int peekCurrentRoll() {\r
            return currentRoll;\r
        }\r
    }\r
}\r
`,i=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_003: Operators, Expressions, Precedence & Type Casting\r
TOPIC 6: Increment (++) and Decrement (--) Operators: Prefix vs Postfix Evaluation\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Prefix vs Postfix Rules:\r
  +---------------+---------------+--------------------+-----------------------+\r
  | Syntax        | Form          | Action on Memory   | Value to Expression   |\r
  +---------------+---------------+--------------------+-----------------------+\r
  | ++x           | Prefix Inc    | Increments FIRST   | Returns NEW value     |\r
  | x++           | Postfix Inc   | Increments AFTER   | Returns OLD value     |\r
  | --x           | Prefix Dec    | Decrements FIRST   | Returns NEW value     |\r
  | x--           | Postfix Dec   | Decrements AFTER   | Returns OLD value     |\r
  +---------------+---------------+--------------------+-----------------------+\r
\r
- The 'x = x++' Self-Assignment Trap:\r
  * When x = 5:\r
    1. x++ pushes old value 5 to operand stack.\r
    2. iinc increments x in local variable memory to 6.\r
    3. Assignment pops 5 from stack and writes 5 back into x!\r
    * Result: x remains 5 (unchanged).\r
\r
- Built-in Narrowing Cast:\r
  * byte b = 127; b++; // Evaluates to (byte)(b + 1) → wraps to -128!\r
  * char c = 'A'; c++; // Becomes 'B'\r
\r
- Concurrency Warning:\r
  * x++ is NOT thread-safe (not atomic read-modify-write).\r
  * Use java.util.concurrent.atomic.AtomicInteger in multithreaded systems.\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Prefix (++x) modifies before yielding value; Postfix (x++) yields old value first.\r
[✓] Remember that x = x++ leaves x completely unchanged.\r
[✓] Never write convoluted expressions like x = ++x + x++ * --x in production.\r
[✓] In standard for loops, i++ and ++i produce identical performance.\r
================================================================================\r
`,o=[{question:"What is the difference between Prefix Increment (`++x`) and Postfix Increment (`x++`) in Java?",shortAnswer:"Prefix increments the variable *before* yielding its value; Postfix yields the *current* value and then increments the variable in memory.",explanation:"In `y = ++x`, `x` is incremented first, and `y` receives the new value. In `y = x++`, `y` receives the original value of `x`, and `x` is incremented afterwards.",hint:"Prefix = change then use; Postfix = use then change.",level:"basic",codeExample:`int x = 5;
int a = ++x; // a = 6, x = 6
int b = x++; // b = 6, x = 7`},{question:"What is the result of executing `x = x++;` when `int x = 5;` in Java?",shortAnswer:"`x` remains `5` (unchanged!).",explanation:"Postfix `x++` pushes the original value `5` onto the JVM operand stack, increments `x` to `6` in local variable memory, and then the assignment operator pops `5` from the stack and stores `5` back into `x`, overwriting `6`!",hint:"Leaves the variable unchanged due to operand stack overwrite.",level:"intermediate",codeExample:`int x = 5;
x = x++; // x is STILL 5!`},{question:"What JVM bytecode instruction performs local variable increment directly?",shortAnswer:"`iinc` (e.g. `iinc 1, 1`).",explanation:"`iinc` directly mutates the local variable table without pushing the variable onto the operand stack.",hint:"iinc bytecode instruction.",level:"advanced",codeExample:"// Bytecode for x++: iload_1 (pushes old value), iinc 1, 1 (increments in memory)"},{question:"What is the evaluated result of `++x + x++ + ++x` when `int x = 5;`?",shortAnswer:"`20` (and final `x` is `8`).",explanation:"Step 1: `++x` increments `x` to `6` and evaluates to `6`. Step 2: `x++` evaluates to `6` and increments `x` to `7`. Step 3: `++x` increments `x` to `8` and evaluates to `8`. Total: `6 + 6 + 8 = 20`.",hint:"Step by step: 6 + 6 + 8 = 20.",level:"intermediate",codeExample:`int x = 5;
int res = ++x + x++ + ++x; // 20`},{question:"Can `++` or `--` be applied to literals or constant expressions (e.g. `5++` or `(a + b)++`)?",shortAnswer:"No, `++` and `--` require a modifiable variable (an lvalue); applying them to literals causes a compilation error.",explanation:"Constants cannot be mutated.",hint:"Only variables can be incremented.",level:"basic",codeExample:"// int bad = 5++; // COMPILATION ERROR: Invalid argument to operation ++/--"},{question:"Can `++` and `--` be applied to `char`, `byte`, and `short` variables without explicit casting?",shortAnswer:"Yes, `++` and `--` contain an implicit narrowing cast (e.g. `b++` is equivalent to `b = (byte)(b + 1)`).",explanation:"Unlike `b = b + 1` which requires an explicit `(byte)` cast, `b++` compiles and executes seamlessly.",hint:"Contains built-in implicit narrowing cast.",level:"intermediate",codeExample:`byte b = 10;
b++; // Equivalent to: b = (byte)(b + 1);`},{question:"What happens when you increment `byte b = 127;` using `b++`?",shortAnswer:"It silently overflows to `-128` (`Byte.MIN_VALUE`).",explanation:"Because of the implicit `(byte)` cast, `127 + 1 = 128`, which wraps around to `-128` in 8-bit signed two's complement.",hint:"Wraps around to -128.",level:"intermediate",codeExample:`byte b = 127;
b++;
System.out.println(b); // -128`},{question:"Can `++` and `--` be applied to floating-point types (`float` and `double`)?",shortAnswer:"Yes, `d++` adds `1.0` to the floating-point variable.",explanation:"`double d = 3.5; d++;` results in `d` being `4.5`.",hint:"Increments float/double by 1.0.",level:"basic",codeExample:`double d = 3.5;
d++; // d is now 4.5`},{question:"What is the difference between `--x` and `x--`?",shortAnswer:"`--x` decrements `x` by 1 and returns the new value; `x--` returns the current value and then decrements `x`.",explanation:"Prefix decrement updates first; postfix decrement updates afterwards.",hint:"Prefix decrements first; postfix returns old value first.",level:"basic",codeExample:`int x = 10;
int a = --x; // a = 9, x = 9
int b = x--; // b = 9, x = 8`},{question:"What is the evaluated result of `int x = 10; int y = x-- - --x;`?",shortAnswer:"`y = 2` (and `x = 8`).",explanation:"Step 1: `x--` evaluates to `10`, and `x` becomes `9`. Step 2: `--x` decrements `x` from `9` to `8` and evaluates to `8`. Result: `10 - 8 = 2`.",hint:"10 - 8 = 2.",level:"intermediate",codeExample:`int x = 10;
int y = x-- - --x; // y is 2, x is 8`},{question:"Why is modifying a variable multiple times in a single expression (e.g. `x = x++ + ++x`) considered bad practice?",shortAnswer:"It creates unreadable, bug-prone code that is difficult to review and debug.",explanation:"Professional Java standards require separate statements for clarity and predictability.",hint:"Complex side effects reduce readability.",level:"basic",codeExample:`// Bad: int z = x++ + ++x;
// Good: x++; int z = x + (x + 1);`},{question:"In a standard `for` loop, does writing `i++` vs `++i` make any difference in loop behavior?",shortAnswer:"No, in the update clause of a `for (int i = 0; i < N; i++)` loop, `i++` and `++i` produce identical bytecode and performance.",explanation:"Because the return value of the expression is discarded, the JVM compiles both directly to `iinc`.",hint:"Identical performance and outcome in loop update clauses.",level:"basic",codeExample:"for (int i = 0; i < 5; i++) { } // Identical to: for (int i = 0; i < 5; ++i) { }"},{question:"What happens when you increment a `char` variable (e.g. `char c = 'A'; c++;`)?",shortAnswer:"`c` advances to the next Unicode character `'B'`.",explanation:"ASCII value 65 becomes 66, which represents `'B'`.",hint:"Advances to the next character.",level:"basic",codeExample:`char c = 'A';
c++; // 'B'`},{question:"What is the evaluated result of `int a = 1; a = ++a;`?",shortAnswer:"`a = 2`.",explanation:"`++a` increments `a` to `2` and pushes `2` onto the stack. The assignment then stores `2` back into `a`.",hint:"Prefix increment assigns the new value 2.",level:"intermediate",codeExample:`int a = 1;
a = ++a; // a is 2`},{question:"Can `final` variables be incremented with `++`?",shortAnswer:"No, attempting to increment a `final` variable causes a compilation error.",explanation:"`final` variables are immutable constants and cannot be modified.",hint:"final variables cannot be mutated.",level:"basic",codeExample:`// final int MAX = 100;
// MAX++; // COMPILATION ERROR: Cannot assign a value to final variable`},{question:"What is the precedence of postfix operators (`x++`, `x--`) relative to prefix operators (`++x`, `--x`)?",shortAnswer:"Postfix operators have higher precedence than prefix operators.",explanation:"Postfix operators are in the highest precedence tier (Level 14 along with member access `.`), while prefix operators are in Level 13.",hint:"Postfix has higher precedence than prefix.",level:"advanced",codeExample:`int val = ++x; // Prefix: Level 13
int val2 = x++; // Postfix: Level 14`},{question:"What is the result of `int[] arr = {10, 20, 30}; int i = 0; int val = arr[i++];`?",shortAnswer:"`val = 10` and `i = 1`.",explanation:"`arr[i++]` accesses `arr[0]` first, and then increments `i` to `1`.",hint:"Accesses index 0 first, then increments i to 1.",level:"intermediate",codeExample:`int[] arr = {10, 20, 30};
int i = 0;
int val = arr[i++]; // val = 10, i = 1`},{question:"What is the result of `int[] arr = {10, 20, 30}; int i = 0; int val = arr[++i];`?",shortAnswer:"`val = 20` and `i = 1`.",explanation:"`++i` increments `i` to `1` first, accessing `arr[1]` which is `20`.",hint:"Increments i to 1 first, then accesses index 1.",level:"intermediate",codeExample:`int[] arr = {10, 20, 30};
int i = 0;
int val = arr[++i]; // val = 20, i = 1`},{question:"How is postfix increment used in sequential student roll number dispatchers in Barrackpore?",shortAnswer:"`return currentRoll++;` returns the current student's roll and automatically advances the counter for the next student.",explanation:"Clean and idiomatic pattern for atomic ticket counters and auto-increment sequences.",hint:"return currentRoll++ returns current roll and increments.",level:"basic",codeExample:"public int nextId() { return idCounter++; }"},{question:"What is the evaluated result of `int x = 3; int y = x++ * 2;`?",shortAnswer:"`y = 6` and `x = 4`.",explanation:"Postfix `x++` provides `3` for the multiplication: `3 * 2 = 6`. Afterwards, `x` becomes `4`.",hint:"3 * 2 = 6, then x becomes 4.",level:"basic",codeExample:`int x = 3;
int y = x++ * 2; // y = 6, x = 4`},{question:"What is the evaluated result of `int x = 3; int y = ++x * 2;`?",shortAnswer:"`y = 8` and `x = 4`.",explanation:"Prefix `++x` increments `x` to `4` first, so `4 * 2 = 8`.",hint:"x becomes 4 first: 4 * 2 = 8.",level:"basic",codeExample:`int x = 3;
int y = ++x * 2; // y = 8, x = 4`},{question:"Can `boolean` variables be incremented with `++` in Java?",shortAnswer:"No, `++` and `--` only apply to numeric primitive types.",explanation:"Applying `++` to a boolean causes a compile-time error.",hint:"Booleans cannot be incremented.",level:"basic",codeExample:"// boolean b = true; b++; // COMPILATION ERROR"},{question:"What is the result of `int a = 5; int b = 5; boolean check = (a++ == ++b);`?",shortAnswer:"`check = false` (since `5 == 6` is false), while `a = 6` and `b = 6`.",explanation:"`a++` evaluates to `5`, while `++b` evaluates to `6`. `5 == 6` is `false`.",hint:"5 == 6 evaluates to false.",level:"intermediate",codeExample:`int a = 5, b = 5;
boolean check = (a++ == ++b); // false`},{question:"What happens when `x++` is used as a method argument `print(x++)`?",shortAnswer:"The method receives the original value of `x`, and `x` is incremented after the argument is evaluated.",explanation:"The argument expression evaluates to the old value before the method executes.",hint:"Method receives original value.",level:"basic",codeExample:`int x = 10;
System.out.println(x++); // Prints 10 (x is now 11)`},{question:"What happens when `++x` is used as a method argument `print(++x)`?",shortAnswer:"The method receives the newly incremented value of `x`.",explanation:"The variable is incremented before passing to the method.",hint:"Method receives incremented value.",level:"basic",codeExample:`int x = 10;
System.out.println(++x); // Prints 11`},{question:"What is the result of `int x = 0; x = x-- + --x;`?",shortAnswer:"`x = -2`.",explanation:"Step 1: `x--` evaluates to `0`, `x` becomes `-1`. Step 2: `--x` decrements `x` to `-2` and evaluates to `-2`. Total: `0 + (-2) = -2`.",hint:"0 + (-2) = -2.",level:"intermediate",codeExample:`int x = 0;
x = x-- + --x; // -2`},{question:"What is the result of `char ch = 'Z'; ch++;`?",shortAnswer:"`ch = '['`.",explanation:"In ASCII, the character immediately following `'Z'` (90) is `'['` (91).",hint:"ASCII 90 ('Z') + 1 = ASCII 91 ('[').",level:"basic",codeExample:`char ch = 'Z';
ch++; // '['`},{question:"Is `x++` thread-safe in concurrent Java multithreading?",shortAnswer:"No! `x++` is a non-atomic composite operation (read-modify-write) that causes race conditions across threads unless synchronized or using `AtomicInteger.incrementAndGet()`.",explanation:"Multiple threads executing `x++` concurrently will lose updates due to thread interleaving.",hint:"x++ is NOT atomic; use AtomicInteger in concurrent code.",level:"expert",codeExample:`AtomicInteger counter = new AtomicInteger(0);
int val = counter.incrementAndGet(); // Thread-safe atomic increment`},{question:"What is the ultimate takeaway of Topic 6 for Java developers?",shortAnswer:"Mastering prefix (`++x`) vs postfix (`x++`) evaluation rules, bytecode `iinc` mechanics, and avoiding the `x = x++` self-assignment trap ensures clean, bug-free loops and counters.",explanation:"Understanding operand stack mechanics guarantees accurate sequencing in array traversal, roll dispatchers, and state machines.",hint:"Prefix evaluates new value; postfix evaluates old value.",level:"basic",codeExample:"// Summary: ++x (use new), x++ (use old), x = x++ leaves x unchanged"},{question:"What is the next topic (Topic 7) in Module 001_003?",shortAnswer:"Relational / Comparison operators: ==, !=, >, <, >=, <=",explanation:"Topic 7 explores boolean comparison operators, numerical comparison rules, and relational expressions.",hint:"Relational operators in Java.",level:"basic",codeExample:"// Topic 7: ==, !=, >, <, >=, <="}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowInc {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(16, 185, 129, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-inc {
            animation: glowInc 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Beginner Foundation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Increment (",e.jsx("code",{className:"text-emerald-400",children:"++"}),") & Decrement (",e.jsx("code",{className:"text-emerald-400",children:"--"}),") Operators: Prefix vs Postfix"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the precise mechanics of variable mutation: prefix (",e.jsx("code",{className:"text-sky-300 font-mono",children:"++x"}),") vs postfix (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"x++"}),") evaluation rules, JVM ",e.jsx("code",{className:"text-amber-300 font-mono",children:"iinc"})," bytecode, the infamous ",e.jsx("code",{className:"text-rose-400 font-mono",children:"x = x++;"})," self-assignment paradox, and sequential student roll dispatchers in Barrackpore."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," The Mechanics of Prefix and Postfix Mutation"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["In Java, the increment (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"++"}),") and decrement (",e.jsx("code",{className:"text-rose-300 font-mono",children:"--"}),") operators modify variable values by exactly 1. However, where the operator is placed relative to the variable determines what value is returned to the enclosing expression:"]}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Prefix (",e.jsx("code",{className:"text-sky-300 font-mono",children:"++x"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"--x"}),"):"]})," Increments/decrements the variable memory ",e.jsx("em",{children:"first"}),", and then yields the ",e.jsx("strong",{children:"new updated value"})," to the expression.",e.jsx("br",{}),e.jsxs("strong",{children:["Postfix (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"x++"}),", ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"x--"}),"):"]})," Yields the ",e.jsx("strong",{children:"old original value"})," to the expression first, and then mutates the variable in memory."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Admission Desk):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," built an automated admission desk. By returning ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"return currentRoll++;"}),", their dispatcher handed out the current roll number to student ",e.jsx("strong",{children:"Abhronila"})," (Roll #101) while automatically preparing the next sequence for ",e.jsx("strong",{children:"Debangshu"})," (Roll #102) across Naihati and Shyamnagar without missing a number."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Prefix vs. Postfix Evaluation Pipeline & The 'x = x++' Trap"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"How the JVM operand stack and local variable memory interact during prefix and postfix operations:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Prefix vs Postfix Increment and x=x++ Trap Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradPrefix",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradPostfix",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsxs("linearGradient",{id:"gradTrap",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e"}),e.jsx("stop",{offset:"100%",stopColor:"#be123c"})]})]}),e.jsx("rect",{x:"30",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradPrefix)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"160",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"1. Prefix (++x)"}),e.jsx("rect",{x:"45",y:"80",width:"230",height:"80",rx:"6",fill:"#0c4a6e"}),e.jsx("text",{x:"55",y:"102",fill:"#bae6fd",fontSize:"11",fontFamily:"monospace",children:"int y = ++x; (x=5)"}),e.jsx("text",{x:"55",y:"122",fill:"#e0f2fe",fontSize:"10",children:"1. iinc x → 6 in memory"}),e.jsx("text",{x:"55",y:"142",fill:"#e0f2fe",fontSize:"10",children:"2. iload 6 → returns 6 to y"}),e.jsx("text",{x:"160",y:"190",fill:"#f0f9ff",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"y = 6, x = 6 (Change then Use)"}),e.jsx("rect",{x:"310",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradPostfix)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"440",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"2. Postfix (x++)"}),e.jsx("rect",{x:"325",y:"80",width:"230",height:"80",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"335",y:"102",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"int y = x++; (x=5)"}),e.jsx("text",{x:"335",y:"122",fill:"#d1fae5",fontSize:"10",children:"1. iload 5 → returns 5 to y"}),e.jsx("text",{x:"335",y:"142",fill:"#d1fae5",fontSize:"10",children:"2. iinc x → 6 in memory"}),e.jsx("text",{x:"440",y:"190",fill:"#ecfdf5",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"y = 5, x = 6 (Use then Change)"}),e.jsx("rect",{x:"590",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradTrap)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"720",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"3. The 'x = x++' Trap"}),e.jsx("rect",{x:"605",y:"80",width:"230",height:"80",rx:"6",fill:"#4c0519"}),e.jsx("text",{x:"615",y:"102",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"x = x++; (x=5)"}),e.jsx("text",{x:"615",y:"122",fill:"#fecdd3",fontSize:"10",children:"1. Stack gets 5, x memory becomes 6"}),e.jsx("text",{x:"615",y:"142",fill:"#fecdd3",fontSize:"10",children:"2. = pops 5, overwrites memory to 5!"}),e.jsx("text",{x:"720",y:"190",fill:"#ffe4e6",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"x remains 5 (Unchanged!)"}),e.jsx("text",{x:"440",y:"255",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Bytecode Guarantee: `iinc` modifies local variable storage; assignment pops old stack values."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Increment & Decrement Evaluation Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Expression (Initial x = 5)"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Returned Value"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Final x in Memory"}),e.jsx("th",{className:"p-3 font-semibold text-slate-400",children:"Step-by-Step JVM Action"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int y = ++x;"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"6"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"6"}),e.jsx("td",{className:"p-3 text-xs",children:"x increments to 6, then 6 is assigned to y"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int y = x++;"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"5"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"6"}),e.jsx("td",{className:"p-3 text-xs",children:"Original 5 is assigned to y, then x increments to 6"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int y = --x;"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"4"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"4"}),e.jsx("td",{className:"p-3 text-xs",children:"x decrements to 4, then 4 is assigned to y"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"int y = x--;"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"5"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"4"}),e.jsx("td",{className:"p-3 text-xs",children:"Original 5 is assigned to y, then x decrements to 4"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-rose-400",children:"x = x++;"}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"5"}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"5"}),e.jsx("td",{className:"p-3 text-xs",children:"Stack holds 5; memory becomes 6; assignment pops 5, overwriting 6 to 5"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"IncrementDecrementOperatorsDemo.java"})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The following program illustrates prefix vs postfix evaluation, the bytecode mechanics behind ",e.jsx("code",{className:"text-rose-400 font-mono",children:"x = x++;"}),", compound expressions, incrementing characters/bytes, and roll number dispatching in Indian Rupees (₹)."]}),e.jsx(t,{fileModule:r,title:"IncrementDecrementOperatorsDemo.java",highlightLines:[21,22,29,30,37,49,56,59,62,77,85]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Attempting to Increment with x = x++"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"x = x++;"})," will ",e.jsx("strong",{children:"never"})," increment ",e.jsx("code",{className:"text-sky-300 font-mono",children:"x"})," because the original pre-increment value on the stack overwrites the memory increment upon assignment."]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Use standalone statements: ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"x++;"})," or ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"++x;"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Use AtomicInteger for Concurrent Counters"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Because ",e.jsx("code",{className:"text-amber-300 font-mono",children:"count++"})," is a non-atomic read-modify-write operation, multiple threads will cause lost updates. Use ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"AtomicInteger.incrementAndGet()"})," for thread-safe concurrent counting."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why does `x = x++;` leave x unchanged in Java, while `x = ++x;` correctly sets x to 6?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," The JVM Stack order! With ",e.jsx("code",{className:"text-rose-300 font-mono",children:"x++"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"iload"})," pushes old value ",e.jsx("code",{className:"text-amber-300 font-mono",children:"5"})," to the stack, memory increments to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"6"}),", and then ",e.jsx("code",{className:"text-rose-300 font-mono",children:"istore"})," pops ",e.jsx("code",{className:"text-amber-300 font-mono",children:"5"})," back into memory, overwriting ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"6"}),". With ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"++x"}),", memory increments to ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"6"})," first, and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"iload"})," pushes ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"6"})," to the stack, so ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"6"})," is stored back!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Increment & Decrement FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 001_003 Topic 6: Increment and Decrement Operators",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_003_topic6_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Increment and decrement operators are everyday tools in loops and index traversals. Always keep in mind: prefix (++x) returns the new value, postfix (x++) returns the old value, and never write 'x = x++;'. In Topic 7, we explore Relational and Comparison Operators (==, !=, >, <, >=, <=)! — Sukanta Hui"})})]})}export{f as default};
