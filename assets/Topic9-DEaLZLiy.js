import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * File: JavaCommonBugsDebuggingChallengeDemo.java\r
 * Module: 001_008_foundations-practice-assessment-lab (Topic 9)\r
 * Description: Interactive master debugging suite identifying and resolving 10 Common Compilation & Logical Bugs:\r
 *              1. String Equality: == vs .equals()\r
 *              2. NullPointerException: Missing null guards & uninitialized references\r
 *              3. Off-By-One & Array Bounds: i <= arr.length vs i < arr.length\r
 *              4. Integer Division Truncation: 5 / 2 == 2 vs 5.0 / 2 == 2.5\r
 *              5. 32-Bit Integer Overflow before assignment to long\r
 *              6. Accidental Semicolon after loops & conditionals: for(...);\r
 *              7. Variable Shadowing without 'this' keyword\r
 *              8. Switch Fall-Through due to missing break statements\r
 *              9. Missing Base Case in Recursion (StackOverflowError)\r
 *              10. Collection Mutation during enhanced for-each loop (ConcurrentModificationException)\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.foundations;\r
\r
import java.util.ArrayList;\r
import java.util.Iterator;\r
import java.util.List;\r
\r
public class JavaCommonBugsDebuggingChallengeDemo {\r
\r
    // =========================================================================\r
    // BUG 1: String Equality (== vs .equals())\r
    // =========================================================================\r
    public static boolean fixBug1_StringEquality(String a, String b) {\r
        // BUG: return a == b; (Compares memory addresses, not characters!)\r
        // FIX:\r
        return (a == null) ? (b == null) : a.equals(b);\r
    }\r
\r
    // =========================================================================\r
    // BUG 2: NullPointerException (Safe Navigation & Guards)\r
    // =========================================================================\r
    public static int fixBug2_NullSafety(String text) {\r
        // BUG: return text.length(); (Throws NPE if text is null!)\r
        // FIX:\r
        return (text == null) ? 0 : text.length();\r
    }\r
\r
    // =========================================================================\r
    // BUG 3: Off-By-One Array Bounds\r
    // =========================================================================\r
    public static int fixBug3_ArrayBounds(int[] arr) {\r
        int sum = 0;\r
        // BUG: for (int i = 0; i <= arr.length; i++) -> Throws ArrayIndexOutOfBoundsException\r
        // FIX:\r
        for (int i = 0; i < arr.length; i++) {\r
            sum += arr[i];\r
        }\r
        return sum;\r
    }\r
\r
    // =========================================================================\r
    // BUG 4: Integer Division Truncation\r
    // =========================================================================\r
    public static double fixBug4_IntegerDivision(int totalMarks, int subjectCount) {\r
        // BUG: double avg = totalMarks / subjectCount; (Truncates to integer first!)\r
        // FIX:\r
        return (double) totalMarks / subjectCount;\r
    }\r
\r
    // =========================================================================\r
    // BUG 5: Integer Overflow Before Long Assignment\r
    // =========================================================================\r
    public static long fixBug5_IntegerOverflow(int pricePerUnit, int quantity) {\r
        // BUG: long total = pricePerUnit * quantity; (Multiplies as 32-bit int first!)\r
        // FIX:\r
        return (long) pricePerUnit * quantity;\r
    }\r
\r
    // =========================================================================\r
    // BUG 6: Accidental Semicolon on Loop Header\r
    // =========================================================================\r
    public static int fixBug6_AccidentalSemicolon(int n) {\r
        int count = 0;\r
        // BUG: for (int i = 0; i < n; i++); count++; (Semicolon creates empty loop body!)\r
        // FIX:\r
        for (int i = 0; i < n; i++) {\r
            count++;\r
        }\r
        return count;\r
    }\r
\r
    // =========================================================================\r
    // BUG 7: Variable Shadowing in Field Assignment\r
    // =========================================================================\r
    static class StudentRecord {\r
        String name;\r
        int roll;\r
\r
        public StudentRecord(String name, int roll) {\r
            // BUG: name = name; roll = roll; (Assigns parameter to itself!)\r
            // FIX:\r
            this.name = name;\r
            this.roll = roll;\r
        }\r
    }\r
\r
    // =========================================================================\r
    // BUG 8: Switch Fall-Through\r
    // =========================================================================\r
    public static String fixBug8_SwitchFallThrough(int day) {\r
        // BUG: switch(day) { case 1: return ... missing break causes fallthrough }\r
        // FIX (Modern Java 14+ Switch Expression):\r
        return switch (day) {\r
            case 1 -> "Monday";\r
            case 2 -> "Tuesday";\r
            case 3 -> "Wednesday";\r
            default -> "Other Day";\r
        };\r
    }\r
\r
    // =========================================================================\r
    // BUG 9: Missing Base Case in Recursion\r
    // =========================================================================\r
    public static int fixBug9_RecursionBaseCase(int n) {\r
        // BUG: return n + fixBug9(n - 1); (Runs forever -> StackOverflowError)\r
        // FIX:\r
        if (n <= 0) return 0; // Base Case\r
        return n + fixBug9_RecursionBaseCase(n - 1);\r
    }\r
\r
    // =========================================================================\r
    // BUG 10: Modifying List During Iteration (ConcurrentModificationException)\r
    // =========================================================================\r
    public static void fixBug10_ConcurrentModification(List<String> list, String target) {\r
        // BUG: for (String s : list) { if (s.equals(target)) list.remove(s); }\r
        // FIX (Iterator.remove() or list.removeIf()):\r
        list.removeIf(s -> s.equals(target));\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 9 DEBUGGING 10 COMMON BUGS");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        System.out.println("--- RESOLVING THE 10 CLASSIC JAVA BUGS ---\\n");\r
\r
        // 1. String Equality\r
        String str1 = new String("Barrackpore");\r
        String str2 = new String("Barrackpore");\r
        System.out.printf("Bug 1 Fix (String .equals())   : %s%n", fixBug1_StringEquality(str1, str2) ? "PASSED (true)" : "FAILED");\r
\r
        // 2. Null Safety\r
        System.out.printf("Bug 2 Fix (Null Guard)        : Length = %d%n", fixBug2_NullSafety(null));\r
\r
        // 3. Array Bounds\r
        int[] sampleArr = {10, 20, 30};\r
        System.out.printf("Bug 3 Fix (Array Bounds)      : Sum = %d%n", fixBug3_ArrayBounds(sampleArr));\r
\r
        // 4. Integer Division\r
        System.out.printf("Bug 4 Fix (Double Cast Div)   : Avg = %.2f%n", fixBug4_IntegerDivision(95, 2));\r
\r
        // 5. Long Overflow\r
        System.out.printf("Bug 5 Fix (Long Cast Multiply): ₹%,d%n", fixBug5_IntegerOverflow(1_000_000, 3000));\r
\r
        // 6. Semicolon Header\r
        System.out.printf("Bug 6 Fix (No Extra Semicolon): Count = %d%n", fixBug6_AccidentalSemicolon(5));\r
\r
        // 7. Variable Shadowing\r
        StudentRecord s = new StudentRecord("Swadeep", 101);\r
        System.out.printf("Bug 7 Fix (this.name field)   : Student %s, Roll %d%n", s.name, s.roll);\r
\r
        // 8. Switch Fall-Through\r
        System.out.printf("Bug 8 Fix (Switch Expression) : %s%n", fixBug8_SwitchFallThrough(1));\r
\r
        // 9. Recursion Base Case\r
        System.out.printf("Bug 9 Fix (Base Case Sum)     : Sum(5) = %d%n", fixBug9_RecursionBaseCase(5));\r
\r
        // 10. Concurrent Modification\r
        List<String> students = new ArrayList<>(List.of("Swadeep", "Tuhina", "Abhronila", "Debangshu"));\r
        fixBug10_ConcurrentModification(students, "Tuhina");\r
        System.out.printf("Bug 10 Fix (removeIf Safe)    : Remaining = %s%n%n", students);\r
\r
        System.out.println("================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. Always use .equals() for String content comparison, never ==.");\r
        System.out.println("2. Cast to (double) or (long) before arithmetic operations to prevent truncation/overflow.");\r
        System.out.println("3. Beware of accidental semicolons after for/while/if headers.");\r
        System.out.println("4. Use Collection.removeIf() or Iterator.remove() to avoid ConcurrentModificationException.");\r
        System.out.println("================================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_008: Segment 1 Foundations Practice, Mini-Projects & Assessment\r
TOPIC 9: Debugging Challenge: 10 Common Compilation & Logical Bugs\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 10 CLASSIC JAVA BUGS & FIXES\r
--------------------------------------------------------------------------------\r
1. String Equality (== vs .equals())\r
   * Bug: a == b compares memory addresses!\r
   * Fix: a.equals(b) or Objects.equals(a, b).\r
\r
2. NullPointerException (NPE)\r
   * Bug: text.length() when text is null.\r
   * Fix: (text == null) ? 0 : text.length() defensive guard.\r
\r
3. Array Bounds & Off-By-One\r
   * Bug: i <= arr.length crashes on last index.\r
   * Fix: i < arr.length (valid indices are 0 to length - 1).\r
\r
4. Integer Division Truncation\r
   * Bug: 5 / 2 yields 2 (integer truncation).\r
   * Fix: (double) 5 / 2 yields 2.5.\r
\r
5. 32-Bit Arithmetic Overflow\r
   * Bug: long total = price * qty overflows 32-bit int before assignment.\r
   * Fix: (long) price * qty promotes multiplication to 64-bit.\r
\r
6. Accidental Semicolon on Loop Header\r
   * Bug: for(int i=0; i<n; i++); count++; creates an empty loop body.\r
   * Fix: remove trailing semicolon.\r
\r
7. Variable Shadowing in Constructors\r
   * Bug: name = name assigns parameter to itself.\r
   * Fix: this.name = name.\r
\r
8. Switch Fall-Through\r
   * Bug: missing break causes execution to spill into next cases.\r
   * Fix: use Java 14+ switch expressions (case X → ...).\r
\r
9. Missing Base Case in Recursion\r
   * Bug: missing base case crashes with StackOverflowError.\r
   * Fix: enforce base case (if (n <= 0) return 0;).\r
\r
10. ConcurrentModificationException\r
   * Bug: list.remove(x) during enhanced for-each iteration.\r
   * Fix: list.removeIf(predicate) or Iterator.remove().\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Never use '==' for Object/String content comparisons.\r
[✓] Cast operands to (double)/(long) BEFORE arithmetic operations.\r
[✓] In Topic 10, we master Writing Clean Code Conforming to Google Java Style Guide!\r
================================================================================\r
`,o=[{question:"Why does `a == b` fail when comparing two `String` objects with identical content?",shortAnswer:"Because `==` compares heap memory reference addresses, not the underlying character sequence; use `a.equals(b)` or `Objects.equals(a, b)` for content equality.",explanation:"String reference vs content equality (Bug 1).",hint:"== compares memory addresses; .equals() compares character content.",level:"basic",codeExample:"boolean ok = a.equals(b); // Correct"},{question:"What causes a `NullPointerException` (NPE) in Java?",shortAnswer:"Attempting to invoke an instance method, access an instance field, or index an array on a reference variable that points to `null`.",explanation:"NullPointerException anatomy (Bug 2).",hint:"Calling methods or accessing fields on a null object reference.",level:"basic",codeExample:"String s = null; s.length(); // Throws NPE"},{question:"How do you prevent `ArrayIndexOutOfBoundsException` in standard for-loops?",shortAnswer:"Ensure the loop termination condition uses `i < arr.length` (strict inequality) rather than `i <= arr.length`.",explanation:"Off-by-one loop boundary fix (Bug 3).",hint:"Use i < arr.length because valid indices are 0 to length - 1.",level:"basic",codeExample:"for (int i = 0; i < arr.length; i++) { ... }"},{question:"Why does `int a = 5, b = 2; double avg = a / b;` evaluate to `2.0` instead of `2.5`?",shortAnswer:"Because `a / b` performs integer division first (truncating `5 / 2 = 2`), and only converts `2` to `2.0` upon assignment; cast one operand to double: `(double) a / b`.",explanation:"Integer division truncation bug (Bug 4).",hint:"Integer division truncates decimals before assigning to double; cast to (double) a / b.",level:"basic",codeExample:"double avg = (double) a / b; // 2.5"},{question:"Why does `int price = 1_000_000, qty = 3000; long total = price * qty;` produce a negative corrupted total?",shortAnswer:"Because `price * qty` multiplies two 32-bit `int` values, overflowing 32-bit `Integer.MAX_VALUE` before being promoted to `long`; fix: `(long) price * qty`.",explanation:"Arithmetic overflow before assignment (Bug 5).",hint:"Multiplication happens as 32-bit int before assignment; cast one operand to (long).",level:"basic",codeExample:"long total = (long) price * qty; // Prevents overflow"},{question:"What happens when an accidental semicolon is placed after a for-loop header: `for (int i=0; i<n; i++); count++;`?",shortAnswer:"The semicolon terminates the loop body with an empty statement; the loop runs `n` times doing nothing, and `count++` executes only ONCE after the loop terminates.",explanation:"Accidental semicolon empty loop body bug (Bug 6).",hint:"The semicolon creates an empty loop body; the following block executes only once.",level:"basic",codeExample:"for (int i = 0; i < n; i++) count++; // Removed semicolon"},{question:"What is Variable Shadowing in a constructor without `this`?",shortAnswer:"In `public Student(String name) { name = name; }`, the parameter `name` shadows the instance field, assigning the parameter to itself and leaving the field `null`.",explanation:"Variable shadowing in constructors (Bug 7).",hint:"Parameter shadows instance field; use this.name = name.",level:"basic",codeExample:"this.name = name; this.roll = roll;"},{question:"What happens when `break` statements are omitted in a legacy `switch` statement?",shortAnswer:"**Fall-Through Bug**: Execution falls through and executes all subsequent `case` blocks consecutively regardless of whether their condition matches.",explanation:"Switch fall-through bug (Bug 8).",hint:"Execution falls through and executes subsequent cases consecutively.",level:"basic",codeExample:'switch (x) { case 1 → "A"; case 2 → "B"; } // Modern switch expression'},{question:"What causes a `StackOverflowError` in recursive methods?",shortAnswer:"Missing or incorrect Base Cases, or recursive arguments that do not progress towards the base case, causing infinite recursive stack frame allocations.",explanation:"Infinite recursion and StackOverflowError (Bug 9).",hint:"Missing base case causes infinite stack frame pushes until memory exhausts.",level:"basic",codeExample:"if (n <= 0) return 0; // Mandatory Base Case"},{question:"What causes `ConcurrentModificationException` when modifying a List in an enhanced for-each loop?",shortAnswer:"Calling `list.remove()` or `list.add()` directly while iterating modifies `modCount` without updating the Iterator's `expectedModCount`.",explanation:"ConcurrentModificationException in collections (Bug 10).",hint:"Directly modifying a list during for-each iteration breaks internal iterator state.",level:"intermediate",codeExample:"list.removeIf(s → s.equals(target)); // Safe removal"},{question:"In the Coder & AccoTax Barrackpore lab, what was the safe result of `fixBug2_NullSafety(null)`?",shortAnswer:"`0` (handled safely via ternary null check without throwing NPE).",explanation:"Null safety return verification.",hint:"0.",level:"basic",codeExample:"fixBug2_NullSafety(null) → 0"},{question:"In the Coder & AccoTax Barrackpore lab, what was the average marks for 95 total marks across 2 subjects?",shortAnswer:"`47.50` (correctly computed using `(double) totalMarks / subjectCount`).",explanation:"Integer division fix output.",hint:"47.50.",level:"basic",codeExample:"fixBug4_IntegerDivision(95, 2) → 47.50"},{question:"In the Coder & AccoTax Barrackpore lab, what was the correct product of $1,000,000 \\times 3000$ in Indian Rupees?",shortAnswer:"`₹3,000,000,000` (3 billion INR, safely handled via `(long) price * qty`).",explanation:"Long overflow fix output.",hint:"₹3,000,000,000.",level:"basic",codeExample:"fixBug5_IntegerOverflow(1_000_000, 3000) → 3,000,000,000L"},{question:"Why is `list.removeIf(predicate)` preferred over `Iterator.remove()` in modern Java?",shortAnswer:"`removeIf()` is concise, declarative, thread-safe for concurrent collections, and optimized internally by `ArrayList` to perform a single batch shift of elements.",explanation:"removeIf modern collection API advantage.",hint:"removeIf() performs batch element shifting in O(N) time with clean syntax.",level:"intermediate",codeExample:'students.removeIf(s → s.equals("Tuhina"));'},{question:"What compiler error occurs if a non-void method is missing a `return` statement in one execution path?",shortAnswer:"`error: missing return statement`.",explanation:"Compiler unreachable or missing return check.",hint:"error: missing return statement.",level:"basic",codeExample:"// Compiler ensures every logical path returns a value"},{question:"Why should `Objects.equals(a, b)` be used for null-safe object equality?",shortAnswer:"`Objects.equals(a, b)` safely handles cases where either `a` or `b` (or both) are `null` without throwing `NullPointerException`.",explanation:"Objects.equals null safety utility.",hint:"Safely handles null values on either side of the comparison.",level:"basic",codeExample:"Objects.equals(str1, str2);"},{question:"What is a 'Phantom Semicolon' after an `if` condition: `if (x > 10); doSomething();`?",shortAnswer:"The semicolon terminates the `if` body immediately; `doSomething()` executes unconditionally regardless of whether `x > 10` is true or false.",explanation:"Accidental semicolon in if-statement.",hint:"Semicolon terminates if statement; block executes unconditionally.",level:"basic",codeExample:"if (x > 10) doSomething(); // Removed semicolon"},{question:'In the Coder & AccoTax Barrackpore lab, who was remaining in the student list after removing `"Tuhina"`?',shortAnswer:'`["Swadeep", "Abhronila", "Debangshu"]`.',explanation:"removeIf list modification verification.",hint:"[Swadeep, Abhronila, Debangshu].",level:"basic",codeExample:"Remaining = [Swadeep, Abhronila, Debangshu]"},{question:"Why does `char c = 'A'; int val = c;` compile without cast, but `int val = 65; char c = val;` fails?",shortAnswer:"`char` to `int` is Widening (16-bit to 32-bit); `int` to `char` is Narrowing (32-bit to 16-bit), requiring an explicit cast `(char) val`.",explanation:"Widening vs Narrowing type rules.",hint:"int to char requires explicit narrowing cast (char) val.",level:"basic",codeExample:"char c = (char) val; // Explicit cast required"},{question:"What is the consequence of modifying a loop control variable inside the body of a `for` loop?",shortAnswer:"It makes loop progression unpredictable, leading to infinite loops or skipped iterations. Loop counters should only be incremented in the `for` header.",explanation:"Loop counter manipulation anti-pattern.",hint:"Can cause skipped elements or infinite loops.",level:"basic",codeExample:"// Avoid modifying 'i' inside for(int i=0; ...; i++) body"},{question:"How does Java 14+ Enhanced Switch eliminate fall-through bugs permanently?",shortAnswer:"The arrow syntax (`case X → ...`) executes only the targeted branch without falling through to subsequent cases, eliminating the need for `break` statements.",explanation:"Enhanced switch expression syntax.",hint:"Arrow syntax (case ->) executes only the matching branch with zero fall-through.",level:"basic",codeExample:'case 1 → "Monday";'},{question:"What is the difference between `Checked` and `Unchecked` exceptions in Java?",shortAnswer:"**Checked Exceptions** (subclasses of `Exception` excluding `RuntimeException`) are verified at compile-time and require `try-catch` or `throws`; **Unchecked Exceptions** (subclasses of `RuntimeException` like NPE, `ArrayIndexOutOfBoundsException`) occur at runtime.",explanation:"Checked vs Unchecked exceptions categorization.",hint:"Checked verified at compile-time; Unchecked occur at runtime.",level:"intermediate",codeExample:"IOException (Checked) vs NullPointerException (Unchecked)"},{question:"Why should `double` NEVER be used for precise financial calculations in Indian Rupees (`₹`)?",shortAnswer:"Binary floating-point types (`double`/`float`) cannot represent decimal fractions like `0.1` or `0.05` exactly, causing rounding errors (e.g. `0.1 + 0.2 = 0.30000000000000004`). Use `BigDecimal` or store integer paise.",explanation:"Floating point financial inaccuracy hazard.",hint:"Floating point fractions cause rounding errors; use BigDecimal or integer paise.",level:"intermediate",codeExample:'BigDecimal price = new BigDecimal("199.99");'},{question:"In the Coder & AccoTax Barrackpore lab, what was `s.name` after fixing the StudentRecord constructor with `this.name = name`?",shortAnswer:'`"Swadeep"`.',explanation:"Constructor variable shadowing fix verification.",hint:"Swadeep.",level:"basic",codeExample:'s.name → "Swadeep"'},{question:"How can static analysis tools (SonarQube, SpotBugs, Checkstyle) catch these 10 bugs automatically?",shortAnswer:"They inspect Abstract Syntax Trees (AST) and bytecode to flag anti-patterns like `==` on strings, empty loop bodies, potential NPEs, and arithmetic overflows before code compiles.",explanation:"Static code analysis in CI/CD pipelines.",hint:"AST and bytecode static analyzers flag common bugs automatically in CI/CD.",level:"intermediate",codeExample:"// SonarQube & SpotBugs automated rule enforcement"},{question:"What compiler error happens when accessing an uninitialized local variable in Java?",shortAnswer:"`error: variable x might not have been initialized` (Java enforces Definite Assignment for local variables).",explanation:"Definite assignment rule in Java.",hint:"error: variable x might not have been initialized.",level:"basic",codeExample:"int x; System.out.println(x); // Compile error"},{question:"What is an 'Unreachable Code' error in Java?",shortAnswer:"Placing statements immediately following an unconditional `return`, `break`, `continue`, or `throw` statement inside the same block.",explanation:"Unreachable code compiler error.",hint:"Statements placed after unconditional return/throw/break.",level:"basic",codeExample:"return 5; int x = 10; // error: unreachable statement"},{question:"What is the ultimate takeaway of Module 001_008 Topic 9 for Java developers?",shortAnswer:"Mastering debugging requires defensive coding: always compare strings with `.equals()`, guard against `null`, protect arithmetic with `(double)`/`(long)` casts, use modern switch expressions, enforce recursive base cases, and avoid mutating collections during for-each iteration.",explanation:"Mastery of Java core debugging practices.",hint:"Defensive coding: .equals(), null guards, type casting, modern switch, removeIf.",level:"basic",codeExample:"// Summary: .equals() | null guards | (long) casts | switch expressions | removeIf"},{question:"What is the next topic (Topic 10) in Module 001_008?",shortAnswer:"Writing clean, readable code conforming to Google Java Style Guide.",explanation:"Topic 10 covers formatting, naming, and architectural conventions conforming to Google Java Style Guide.",hint:"Writing clean, readable code conforming to Google Java Style Guide.",level:"basic",codeExample:"// Topic 10: Clean Code & Google Java Style Guide"},{question:"How does Java 21 `NullPointerException` enhanced messages assist in debugging?",shortAnswer:'Helpful NPEs in modern JDK pinpoint the exact sub-expression that was null (e.g. `Cannot invoke "String.length()" because "student.getAddress().city" is null`).',explanation:"Helpful NullPointerExceptions (JEP 358).",hint:"Modern JVM pinpoints the exact method call or field that evaluated to null.",level:"advanced",codeExample:"// JEP 358 Helpful NullPointerExceptions in modern JDK"}];function p(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowBug {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(244, 63, 94, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(244, 63, 94, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-bg {
            animation: glowBug 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_008 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Debugging Challenge · 10 Classic Bugs"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Debugging Challenge: Identifying & Resolving 10 Common Java Bugs"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master professional Java diagnostic skills: systematically identifying and resolving the 10 most common compilation, runtime, and logical bugs including String ",e.jsx("code",{className:"text-rose-400 font-mono",children:"=="})," vs ",e.jsx("code",{className:"text-emerald-400 font-mono",children:".equals()"}),", NullPointerExceptions, off-by-one errors, integer division truncations, arithmetic overflows, and ",e.jsx("code",{className:"text-purple-300 font-mono",children:"ConcurrentModificationException"}),"."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," The 10 Landmark Bug Categories in Java"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsx("p",{children:"Understanding these 10 failure patterns separates amateur coders from production-ready software engineers:"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-rose-500/30",children:[e.jsx("h3",{className:"text-rose-400 font-bold text-sm mb-1",children:"1. Reference Bugs"}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:["String ",e.jsx("code",{className:"text-rose-400 font-mono",children:"=="})," address mismatch and unhandled ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NullPointerException"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30",children:[e.jsx("h3",{className:"text-amber-400 font-bold text-sm mb-1",children:"2. Arithmetic Bugs"}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:["Integer division truncation (",e.jsx("code",{className:"text-slate-300 font-mono",children:"5/2 = 2"}),") and 32-bit overflow before long assignment."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-purple-500/30",children:[e.jsx("h3",{className:"text-purple-400 font-bold text-sm mb-1",children:"3. Control Flow Bugs"}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:["Off-by-one array bounds, phantom semicolons (",e.jsx("code",{className:"text-purple-300 font-mono",children:"for(...);"}),"), and switch fall-through."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"4. Scope & Iteration"}),e.jsxs("p",{className:"text-slate-300 font-sans leading-relaxed text-xs",children:["Variable shadowing without ",e.jsx("code",{className:"text-slate-300 font-mono",children:"this"})," and modifying lists in for-each loops."]})]})]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Code Review Lab):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," fixed string equality using ",e.jsx("code",{className:"text-emerald-400 font-mono",children:".equals()"}),", ",e.jsx("strong",{children:"Tuhina"})," prevented financial overflow in fee calculations (",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹3,000,000,000"}),"), ",e.jsx("strong",{children:"Abhronila"})," resolved constructor shadowing with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this.name = name"}),", and ",e.jsx("strong",{children:"Debangshu"})," safely removed list items using ",e.jsx("code",{className:"text-purple-300 font-mono",children:"list.removeIf()"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," The 4 Critical Bug Diagnostic Heatmaps"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Visualizing common bug triggers and their architectural remedies:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Java Bug Diagnostics Architecture Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradBug1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#ef4444"}),e.jsx("stop",{offset:"100%",stopColor:"#991b1b"})]}),e.jsxs("linearGradient",{id:"gradFix1",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]})]}),e.jsx("rect",{x:"30",y:"30",width:"190",height:"215",rx:"8",fill:"#0f172a",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"125",y:"55",fill:"#f87171",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"1. STRING EQUALITY"}),e.jsx("rect",{x:"40",y:"70",width:"170",height:"40",rx:"4",fill:"#450a0a"}),e.jsx("text",{x:"50",y:"90",fill:"#fca5a5",fontSize:"9",fontFamily:"monospace",children:"BUG: a == b"}),e.jsx("text",{x:"50",y:"102",fill:"#fca5a5",fontSize:"8",children:"(Address check!)"}),e.jsx("rect",{x:"40",y:"125",width:"170",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"50",y:"145",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"FIX: a.equals(b)"}),e.jsx("text",{x:"50",y:"157",fill:"#6ee7b7",fontSize:"8",children:"(Compares chars)"}),e.jsx("rect",{x:"240",y:"30",width:"190",height:"215",rx:"8",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"1.5"}),e.jsx("text",{x:"335",y:"55",fill:"#fbbf24",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"2. INT DIVISION"}),e.jsx("rect",{x:"250",y:"70",width:"170",height:"40",rx:"4",fill:"#451a03"}),e.jsx("text",{x:"260",y:"90",fill:"#fde68a",fontSize:"9",fontFamily:"monospace",children:"BUG: double avg = 5/2;"}),e.jsx("text",{x:"260",y:"102",fill:"#fde68a",fontSize:"8",children:"Yields 2.0 (Truncated!)"}),e.jsx("rect",{x:"250",y:"125",width:"170",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"260",y:"145",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"FIX: (double) 5 / 2;"}),e.jsx("text",{x:"260",y:"157",fill:"#6ee7b7",fontSize:"8",children:"Yields exact 2.5"}),e.jsx("rect",{x:"450",y:"30",width:"190",height:"215",rx:"8",fill:"#0f172a",stroke:"#8b5cf6",strokeWidth:"1.5"}),e.jsx("text",{x:"545",y:"55",fill:"#c084fc",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"3. ARRAY BOUNDS"}),e.jsx("rect",{x:"460",y:"70",width:"170",height:"40",rx:"4",fill:"#2e1065"}),e.jsx("text",{x:"470",y:"90",fill:"#ddd6fe",fontSize:"9",fontFamily:"monospace",children:"BUG: i <= arr.length"}),e.jsx("text",{x:"470",y:"102",fill:"#ddd6fe",fontSize:"8",children:"Throws IndexOutOfBounds"}),e.jsx("rect",{x:"460",y:"125",width:"170",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"470",y:"145",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"FIX: i < arr.length"}),e.jsx("text",{x:"470",y:"157",fill:"#6ee7b7",fontSize:"8",children:"Strict inequality <"}),e.jsx("rect",{x:"660",y:"30",width:"190",height:"215",rx:"8",fill:"#0f172a",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"755",y:"55",fill:"#38bdf8",fontSize:"11",fontWeight:"bold",textAnchor:"middle",children:"4. FOR-EACH MUTATION"}),e.jsx("rect",{x:"670",y:"70",width:"170",height:"40",rx:"4",fill:"#082f49"}),e.jsx("text",{x:"680",y:"90",fill:"#bae6fd",fontSize:"9",fontFamily:"monospace",children:"BUG: list.remove(s)"}),e.jsx("text",{x:"680",y:"102",fill:"#bae6fd",fontSize:"8",children:"ConcurrentModException"}),e.jsx("rect",{x:"670",y:"125",width:"170",height:"40",rx:"4",fill:"#022c22"}),e.jsx("text",{x:"680",y:"145",fill:"#a7f3d0",fontSize:"9",fontFamily:"monospace",children:"FIX: list.removeIf()"}),e.jsx("text",{x:"680",y:"157",fill:"#6ee7b7",fontSize:"8",children:"Safe batch removal"}),e.jsx("text",{x:"440",y:"265",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Diagnosing and resolving these 10 bugs guarantees rock-solid, production-grade Java application behavior."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," The 10 Classic Bugs Summary Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"#"}),e.jsx("th",{className:"p-3 font-semibold text-rose-400",children:"Bug Anti-Pattern"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Production Fix"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Root Cause"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300 font-mono text-xs",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"1"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`a == b` (Strings)"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`a.equals(b)`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Memory reference vs content comparison"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"2"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`text.length()` (Unchecked)"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`text == null ? 0 : text.length()`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Null pointer dereference"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"3"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`i <= arr.length`"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`i < arr.length`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Off-by-one array index violation"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"4"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`double avg = 5 / 2;`"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`(double) 5 / 2`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Integer division truncation before assignment"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"5"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`long t = price * qty;`"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`(long) price * qty`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"32-bit integer overflow before long conversion"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"6"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`for(...); count++;`"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`for(...) count++;`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Empty loop body created by phantom semicolon"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"7"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`name = name;`"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`this.name = name;`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Constructor variable shadowing"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"8"}),e.jsx("td",{className:"p-3 text-rose-300",children:"Missing switch `break`"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`switch (x) { case 1 -> ... }`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Fall-through execution bugs"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"9"}),e.jsx("td",{className:"p-3 text-rose-300",children:"Infinite Recursion"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`if (n <= 0) return 0;`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"Missing base case causing StackOverflow"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 text-sky-300 font-bold",children:"10"}),e.jsx("td",{className:"p-3 text-rose-300",children:"`list.remove()` in for-each"}),e.jsx("td",{className:"p-3 text-emerald-300",children:"`list.removeIf(predicate)`"}),e.jsx("td",{className:"p-3 text-slate-300 font-sans",children:"ModCount violation during iteration"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"JavaCommonBugsDebuggingChallengeDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program compiles and executes the resolved fixes for all 10 common bugs."}),e.jsx(t,{fileModule:a,title:"JavaCommonBugsDebuggingChallengeDemo.java",highlightLines:[22,30,39,49,58,67,80,90,100,108]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Modifying Collections During Enhanced For-Each"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Never call ",e.jsx("code",{className:"text-rose-300 font-mono",children:"list.remove()"})," or ",e.jsx("code",{className:"text-rose-300 font-mono",children:"list.add()"})," inside an enhanced for-each loop; it immediately throws ",e.jsx("code",{className:"text-rose-400 font-mono",children:"ConcurrentModificationException"}),". Use ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"list.removeIf()"}),"!"]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Use Modern Switch Expressions"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Adopt Java 14+ switch expressions with arrow syntax (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"case 1 -> ..."}),") to permanently eliminate accidental fall-through bugs."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsxs("em",{children:["“Why does ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"long total = price * qty;"})," fail when both price and qty are ints?”"]})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Expression Evaluation Precedence! In Java, the right-hand side ",e.jsx("code",{className:"text-rose-300 font-mono",children:"price * qty"})," is evaluated FIRST using 32-bit signed integer arithmetic. If it overflows, it turns negative, and ONLY THEN is the corrupted negative integer widened to ",e.jsx("code",{className:"text-slate-300 font-mono",children:"long"}),"! Casting ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"(long) price * qty"})," forces 64-bit multiplication!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java Debugging FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 001_008 Topic 9: Debugging 10 Common Java Bugs",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_008_topic9_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Debugging is where true mastery begins. When you know why these 10 bugs occur, you write defensive, bulletproof code! In Topic 10, we master Writing Clean, Readable Code Conforming to Google Java Style Guide! — Sukanta Hui"})})]})}export{p as default};
