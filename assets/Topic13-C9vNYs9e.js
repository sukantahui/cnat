import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * File: CompoundAssignmentOperatorsDemo.java\r
 * Module: 001_003_operators-expressions-and-type-casting (Topic 13)\r
 * Description: Demonstrates all 11 Java compound assignment operators (+=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, >>>=),\r
 *              the single-evaluation guarantee of the left-hand variable (JLS §15.26.2),\r
 *              Right-to-Left associativity, and student fee ledger accumulation in Indian Rupees (₹).\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.operators;\r
\r
public class CompoundAssignmentOperatorsDemo {\r
\r
    private static int methodCallCounter = 0;\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 13 COMPOUND ASSIGNMENT OPERATORS");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. Arithmetic Compound Assignments (+=, -=, *=, /=, %=)\r
        System.out.println("--- 1. ARITHMETIC COMPOUND ASSIGNMENTS ---");\r
        int balance = 10000;\r
        System.out.printf("Initial Balance        : ₹%,d%n", balance);\r
\r
        balance += 5000; // balance = balance + 5000 -> 15000\r
        System.out.printf("After deposit (+= 5000): ₹%,d%n", balance);\r
\r
        balance -= 2500; // balance = balance - 2500 -> 12500\r
        System.out.printf("After expense (-= 2500): ₹%,d%n", balance);\r
\r
        balance *= 2;    // balance = balance * 2 -> 25000\r
        System.out.printf("After bonus   (*= 2)   : ₹%,d%n", balance);\r
\r
        balance /= 5;    // balance = balance / 5 -> 5000\r
        System.out.printf("After split   (/= 5)   : ₹%,d%n", balance);\r
\r
        balance %= 3000; // balance = balance % 3000 -> 2000\r
        System.out.printf("After modulus (%%= 3000): ₹%,d%n%n", balance);\r
\r
        // 2. Bitwise & Shift Compound Assignments (&=, |=, ^=, <<=, >>=, >>>=)\r
        System.out.println("--- 2. BITWISE & SHIFT COMPOUND ASSIGNMENTS ---");\r
        int flags = 0b00000001; // 1\r
\r
        flags |= 0b00000010; // SET bit 1 -> 0b00000011 (3)\r
        System.out.printf("flags |= 0b0010 -> %d (Binary: %s)%n", flags, to8BitBinary(flags));\r
\r
        flags ^= 0b00000100; // TOGGLE bit 2 -> 0b00000111 (7)\r
        System.out.printf("flags ^= 0b0100 -> %d (Binary: %s)%n", flags, to8BitBinary(flags));\r
\r
        flags &= 0b00000101; // MASK bits -> 0b00000101 (5)\r
        System.out.printf("flags &= 0b0101 -> %d (Binary: %s)%n", flags, to8BitBinary(flags));\r
\r
        int shiftVal = 5;\r
        shiftVal <<= 2; // 5 * 4 = 20\r
        System.out.printf("shiftVal <<= 2  -> %d%n", shiftVal);\r
\r
        shiftVal >>= 1; // 20 / 2 = 10\r
        System.out.printf("shiftVal >>= 1  -> %d%n", shiftVal);\r
\r
        shiftVal >>>= 1; // 10 / 2 = 5\r
        System.out.printf("shiftVal >>>= 1 -> %d%n%n", shiftVal);\r
\r
        // 3. The Single-Evaluation Guarantee of Left Operand (JLS §15.26.2)\r
        System.out.println("--- 3. SINGLE-EVALUATION GUARANTEE (JLS §15.26.2) ---");\r
        int[] feeArray = {15000, 22000, 18000};\r
\r
        methodCallCounter = 0;\r
        // In feeArray[getIndex()] += 500: getIndex() is called EXACTLY ONCE!\r
        feeArray[getTargetIndex()] += 500;\r
        System.out.printf("Method invocation count with '+=' : %d (Called ONLY once!)%n", methodCallCounter);\r
\r
        methodCallCounter = 0;\r
        // In standard feeArray[getIndex()] = feeArray[getIndex()] + 500: getIndex() is called TWICE!\r
        feeArray[getTargetIndex()] = feeArray[getTargetIndex()] + 500;\r
        System.out.printf("Method invocation count with '='  : %d (Called TWICE - wasteful/buggy!)%n%n", methodCallCounter);\r
\r
        // 4. Right-to-Left Associativity of Compound Assignments\r
        System.out.println("--- 4. RIGHT-TO-LEFT ASSOCIATIVITY ---");\r
        int x = 10, y = 20, z = 30;\r
        // Evaluates as: x += (y += (z += 5))\r
        // z becomes 35 -> y becomes 55 -> x becomes 65\r
        x += y += z += 5;\r
        System.out.printf("Result of 'x += y += z += 5' -> x=%d, y=%d, z=%d%n%n", x, y, z);\r
\r
        // 5. Real-World Student Fee Installment Accumulator (Barrackpore Center)\r
        System.out.println("--- 5. BARRACKPORE STUDENT TUITION INSTALLMENT ACCUMULATOR ---");\r
        StudentFeeLedger ledgerSwadeep = new StudentFeeLedger("Swadeep", 15000.0);\r
        ledgerSwadeep.recordPayment(5000.0);\r
        ledgerSwadeep.recordPayment(5000.0);\r
        ledgerSwadeep.recordPayment(5000.0);\r
\r
        System.out.println("\\n================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. Java provides 11 compound operators: +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, >>>=");\r
        System.out.println("2. Compound assignments evaluate the left operand array/method index ONLY ONCE (JLS §15.26.2).");\r
        System.out.println("3. Compound assignment operators associate RIGHT-TO-LEFT (x += y += z).");\r
        System.out.println("4. They include an implicit narrowing cast: E1 = (T)(E1 op E2).");\r
        System.out.println("================================================================================");\r
    }\r
\r
    private static int getTargetIndex() {\r
        methodCallCounter++;\r
        return 0; // Target index 0\r
    }\r
\r
    private static class StudentFeeLedger {\r
        private final String studentName;\r
        private final double totalDue;\r
        private double totalPaid;\r
\r
        public StudentFeeLedger(String studentName, double totalDue) {\r
            this.studentName = studentName;\r
            this.totalDue = totalDue;\r
            this.totalPaid = 0.0;\r
        }\r
\r
        public void recordPayment(double installment) {\r
            this.totalPaid += installment; // Compound assignment accumulator\r
            double remaining = totalDue - totalPaid;\r
            System.out.printf("Student: %-10s | Paid Installment: ₹%,.2f | Total Paid: ₹%,.2f | Remaining: ₹%,.2f%n",\r
                    studentName, installment, totalPaid, remaining);\r
        }\r
    }\r
\r
    private static String to8BitBinary(int value) {\r
        return String.format("%8s", Integer.toBinaryString(value & 0xFF)).replace(' ', '0');\r
    }\r
}\r
`,i=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_003: Operators, Expressions, Precedence & Type Casting\r
TOPIC 13: Compound Assignment Operators: +=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, >>>=\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- The 11 Compound Assignment Operators:\r
  * Arithmetic : +=, -=, *=, /=, %=\r
  * Bitwise    : &=, |=, ^=\r
  * Shift      : <<=, >>=, >>>=\r
\r
- Fundamental JLS Definition (JLS §15.26.2):\r
  * E1 op= E2 is formally equivalent to:\r
    E1 = (T)((E1) op (E2))\r
  * where 'T' is the static data type of variable E1.\r
\r
- Single-Evaluation Guarantee:\r
  * In E1 op= E2, the target expression E1 is evaluated ONLY ONCE!\r
  * Example: arr[i++] += 10; → 'i' is incremented only ONCE!\r
  * (Unlike arr[i++] = arr[i++] + 10; which increments 'i' TWICE!).\r
\r
- Right-to-Left Associativity:\r
  * x += y += z += 5;\r
  * Evaluates as: x += (y += (z += 5));\r
\r
- Right-Hand Expression Isolation:\r
  * x *= 2 + 3 is evaluated as: x = x * (2 + 3) → x * 5 (NOT x * 2 + 3!).\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Remember that compound assignments evaluate left targets only once.\r
[✓] Compound assignments associate Right-to-Left.\r
[✓] The entire right-hand expression is grouped before the compound operation.\r
[✓] Boolean variables support &=, |=, ^= without short-circuiting.\r
================================================================================\r
`,r=[{question:"What are the 11 Compound Assignment Operators in Java?",shortAnswer:"Arithmetic: `+=`, `-=`, `*=`, `/=`, `%=`; Bitwise: `&=`, `|=`, `^=`; Shift: `<<=`, `>>=`, `>>>=`.",explanation:"Compound assignment operators combine a binary arithmetic, bitwise, or shift operation with variable assignment in a single syntactic construct.",hint:"+=, -=, *=, /=, %=, &=, |=, ^=, <<=, >>=, >>>=",level:"basic",codeExample:"x += 5; // Shorthand for x = x + 5 (with implicit cast)"},{question:"What is the exact definition of a compound assignment `E1 op= E2` in the Java Language Specification (JLS §15.26.2)?",shortAnswer:"`E1 = (T)((E1) op (E2))` where `T` is the static type of `E1`.",explanation:"The compiler automatically inserts an implicit narrowing cast to the type of `E1` and guarantees that `E1` is evaluated only once.",hint:"E1 = (T)((E1) op (E2)) with single evaluation.",level:"intermediate",codeExample:`byte b = 10;
b += 5; // Compiled as: b = (byte)(b + 5);`},{question:"What is the Single-Evaluation Guarantee of the left-hand operand in compound assignments?",shortAnswer:"In `E1 op= E2`, the expression `E1` is evaluated EXACTLY ONCE, avoiding duplicate side-effects.",explanation:"In `arr[getIndex()] += 10;`, `getIndex()` runs once. In `arr[getIndex()] = arr[getIndex()] + 10;`, `getIndex()` executes twice, which causes performance waste or bugs if `getIndex()` has side-effects.",hint:"Left-hand expression runs once, avoiding duplicate method calls.",level:"advanced",codeExample:"arr[i++] += 5; // i is incremented ONLY ONCE!"},{question:"What is the associativity direction of Compound Assignment Operators?",shortAnswer:"Right-to-Left.",explanation:"In chained compound assignments like `a += b += c`, Java evaluates from right to left: `a += (b += c)`.",hint:"Right-to-Left associative.",level:"intermediate",codeExample:`int a = 1, b = 2, c = 3;
a += b += c; // c is 3, b becomes 5, a becomes 6`},{question:"What is the result of `int x = 10; x *= 2 + 3;` in Java?",shortAnswer:"`50` (NOT `23`!).",explanation:"The right-hand expression is treated as if enclosed in parentheses: `x = x * (2 + 3)` = `10 * 5 = 50`.",hint:"Right-hand side is fully evaluated first: x * (2 + 3).",level:"basic",codeExample:`int x = 10;
x *= 2 + 3; // x = x * (2 + 3) = 10 * 5 = 50`},{question:"What does `+=` do when the left operand is a `String`?",shortAnswer:"It performs String concatenation and reassigns the new String to the variable.",explanation:'`String s = "Hello"; s += " World";` produces `"Hello World"`.',hint:"Appends text to String variable.",level:"basic",codeExample:`String s = "Code";
s += " & Tax"; // "Code & Tax"`},{question:"Can compound assignment operators be applied to boolean variables?",shortAnswer:"Yes, boolean variables support `&=`, `|=`, and `^=` (e.g. `isApproved &= checkRules();`).",explanation:"Arithmetic and shift compound operators cannot be applied to booleans.",hint:"&=, |=, ^= work on booleans.",level:"intermediate",codeExample:`boolean isValid = true;
isValid &= checkInput(); // Reassigns boolean`},{question:"What happens when using `&=` with booleans regarding short-circuiting?",shortAnswer:"`&=` is NOT a short-circuit operator; it ALWAYS evaluates the right-hand operand!",explanation:"Even if the left boolean is `false`, `isEligible &= computeFee()` will execute `computeFee()`.",hint:"&= eagerly evaluates right-hand side.",level:"advanced",codeExample:`boolean b = false;
b &= processPayment(); // processPayment() IS EXECUTED!`},{question:"What is the result of `int a = 5; a += a++;` in Java?",shortAnswer:"`a = 10`.",explanation:"`a` on the left is evaluated as `5`. `a++` returns `5` (and increments `a` to `6`). `5 + 5` = `10`, which is assigned to `a`.",hint:"Left operand 5 is saved before right operand evaluates.",level:"expert",codeExample:`int a = 5;
a += a++; // 10`},{question:"What is the result of `int a = 5; a += ++a;` in Java?",shortAnswer:"`a = 11`.",explanation:"`a` on the left is evaluated as `5`. `++a` increments `a` to `6` and returns `6`. `5 + 6 = 11`.",hint:"5 + 6 = 11.",level:"expert",codeExample:`int a = 5;
a += ++a; // 11`},{question:"Why is `x += 1` generally preferred over `x = x + 1` in modern Java?",shortAnswer:"It is more concise, clearer to read, avoids duplicate variable names in complex expressions, and evaluates the target location only once.",explanation:"Standard clean coding best practice.",hint:"Concise and evaluates left target once.",level:"basic",codeExample:"totalScore += currentMarks;"},{question:"What is the result of `int x = 100; x /= 2 * 5;`?",shortAnswer:"`10`.",explanation:"Right side `2 * 5` evaluates to `10` first. Then `100 / 10 = 10`.",hint:"x = x / (2 * 5) = 100 / 10 = 10.",level:"basic",codeExample:`int x = 100;
x /= 2 * 5; // 10`},{question:"What happens when using `/=` by zero with integers (`int x = 10; x /= 0;`)?",shortAnswer:"Throws `java.lang.ArithmeticException: / by zero`.",explanation:"Standard integer division by zero exception.",hint:"Throws ArithmeticException.",level:"basic",codeExample:`int x = 10;
// x /= 0; // THROWS ArithmeticException`},{question:"What is the result of `double d = 10.0; d /= 0.0;`?",shortAnswer:"`d = Double.POSITIVE_INFINITY`.",explanation:"Floating-point division by 0.0 yields infinity without exception.",hint:"Becomes Infinity.",level:"basic",codeExample:`double d = 10.0;
d /= 0.0; // Double.POSITIVE_INFINITY`},{question:"What is the compound assignment operator for Bitwise XOR?",shortAnswer:"`^=`",explanation:"`flags ^= MASK` toggles target bit flags.",hint:"^= compound assignment.",level:"basic",codeExample:`int flags = 0b001;
flags ^= 0b010; // Toggles bit`},{question:"What is the result of `int mask = 0b1111; mask &= 0b0110;`?",shortAnswer:"`mask = 0b0110` (integer `6`).",explanation:"Bitwise AND preserves only the common set bits.",hint:"Bitwise AND reassignment.",level:"basic",codeExample:`int mask = 0b1111;
mask &= 0b0110; // 6`},{question:"What is the result of `int val = 5; val <<= 3;` in Java?",shortAnswer:"`val = 40`.",explanation:"`5 * 2^3 = 5 * 8 = 40`.",hint:"5 << 3 = 40.",level:"basic",codeExample:`int val = 5;
val <<= 3; // 40`},{question:"What is the result of `int val = 40; val >>= 2;` in Java?",shortAnswer:"`val = 10`.",explanation:"`40 / 4 = 10`.",hint:"40 >> 2 = 10.",level:"basic",codeExample:`int val = 40;
val >>= 2; // 10`},{question:"What is the result of `int val = -40; val >>>= 2;` in Java?",shortAnswer:"`1073741814`.",explanation:"Unsigned shift inserts zeroes into the high bits of negative 40.",hint:"Converts negative integer to large positive integer.",level:"intermediate",codeExample:`int val = -40;
val >>>= 2; // 1073741814`},{question:"Can compound assignments be used on `final` variables?",shortAnswer:"No, `final` variables cannot be reassigned; using compound assignments causes a compile-time error.",explanation:"Compound assignments mutate variable state.",hint:"Cannot modify final constants.",level:"basic",codeExample:`// final int MAX = 100;
// MAX += 10; // COMPILATION ERROR!`},{question:"What is the result of `int x = 5; x %= 2;`?",shortAnswer:"`x = 1`.",explanation:"`5 % 2 = 1`.",hint:"5 % 2 = 1.",level:"basic",codeExample:`int x = 5;
x %= 2; // 1`},{question:"In the Coder & AccoTax Barrackpore fee ledger, how are student tuition installments tracked?",shortAnswer:"`totalPaid += installment;`",explanation:"Compound assignment accumulates installment payments in Indian Rupees (₹) cleanly.",hint:"totalPaid += installment.",level:"basic",codeExample:"this.totalPaid += payment;"},{question:"What is the precedence of compound assignment operators?",shortAnswer:"Compound assignment operators occupy the second lowest precedence tier (Level 1, just above comma).",explanation:"All arithmetic, relational, and logical operations on the right are evaluated before the compound assignment occurs.",hint:"Lowest precedence tier alongside simple =.",level:"advanced",codeExample:"x += a > b ? 10 : 20; // Ternary evaluates before +="},{question:"What is the result of `int a = 2, b = 3; a += b += 4;` in Java?",shortAnswer:"`a = 9` and `b = 7`.",explanation:"Right-to-left: `b += 4` sets `b` to `7`. Then `a += 7` sets `a` to `9`.",hint:"b becomes 7, then a becomes 2 + 7 = 9.",level:"intermediate",codeExample:`int a = 2, b = 3;
a += b += 4; // a = 9, b = 7`},{question:"Can compound assignments be used on array elements (e.g. `arr[0] += 5`)?",shortAnswer:"Yes, compound assignments work on array elements, object fields, and local variables.",explanation:"Any valid lvalue can receive a compound assignment.",hint:"Valid for array elements and fields.",level:"basic",codeExample:`int[] arr = {10, 20};
arr[0] += 5; // arr[0] is 15`},{question:"What is the result of `int x = 10; x -= 5 - 2;`?",shortAnswer:"`7`.",explanation:"`5 - 2` evaluates to `3`. `x = x - 3` = `10 - 3 = 7`.",hint:"x = x - (5 - 2) = 10 - 3 = 7.",level:"basic",codeExample:`int x = 10;
x -= 5 - 2; // 7`},{question:"Can compound assignments be chained with simple assignment (`a = b += 5`)?",shortAnswer:"Yes, because compound assignments evaluate to the newly assigned value.",explanation:"`b += 5` assigns to `b` and produces the new value, which is then assigned to `a`.",hint:"Evaluates to the assigned result value.",level:"intermediate",codeExample:`int a, b = 10;
a = b += 5; // b is 15, a is 15`},{question:"What happens when compound assignment overflows an integer (`int x = Integer.MAX_VALUE; x += 1;`)?",shortAnswer:"It silently wraps around to `Integer.MIN_VALUE` (`-2147483648`).",explanation:"Standard two's complement overflow.",hint:"Silently overflows to Integer.MIN_VALUE.",level:"intermediate",codeExample:`int x = Integer.MAX_VALUE;
x += 1; // -2147483648`},{question:"What is the ultimate takeaway of Topic 13 for Java developers?",shortAnswer:"The 11 compound assignment operators provide concise reassignments, evaluate the left target only once (JLS §15.26.2), associate Right-to-Left, and insert implicit type casts.",explanation:"Mastering compound assignments prevents duplicate execution bugs and simplifies financial ledgers, bitmasks, and loop accumulators.",hint:"Single evaluation guarantee, right-to-left associativity, implicit cast.",level:"basic",codeExample:"// Summary: E1 op= E2 is E1 = (T)(E1 op E2) with single evaluation of E1"},{question:"What is the next topic (Topic 14) in Module 001_003?",shortAnswer:"Implicit type casting in compound assignments (e.g. byte b = 5; b += 2;)",explanation:"Topic 14 deep-dives into the automatic narrowing cast mechanism of compound assignments and potential silent truncation traps.",hint:"Implicit casting in compound assignments.",level:"basic",codeExample:"// Topic 14: Implicit casting in compound assignments"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowCompound {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(16, 185, 129, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(16, 185, 129, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-compound {
            animation: glowCompound 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_003 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Beginner Foundation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compound Assignment Operators: ",e.jsx("code",{className:"text-emerald-400",children:"+="}),", ",e.jsx("code",{className:"text-emerald-400",children:"-="}),", ",e.jsx("code",{className:"text-emerald-400",children:"*="}),", ",e.jsx("code",{className:"text-emerald-400",children:"/="}),", ",e.jsx("code",{className:"text-emerald-400",children:"%="}),", ",e.jsx("code",{className:"text-emerald-400",children:"&="}),", ",e.jsx("code",{className:"text-emerald-400",children:"|="}),", ",e.jsx("code",{className:"text-emerald-400",children:"^="}),", ",e.jsx("code",{className:"text-emerald-400",children:"<<="}),", ",e.jsx("code",{className:"text-emerald-400",children:">>="}),", ",e.jsx("code",{className:"text-emerald-400",children:">>>="})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master Java's 11 compound assignment operators: JLS §15.26.2 equivalence rules (",e.jsx("code",{className:"text-sky-300 font-mono",children:"E1 = (T)(E1 op E2)"}),"), the single-evaluation guarantee of the left-hand variable, Right-to-Left associativity, and fee installment accumulation in Indian Rupees (₹)."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," The Mechanics of Compound Assignments in Java"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["Java provides 11 ",e.jsx("strong",{children:"Compound Assignment Operators"})," that combine an operation with variable reassignment. Under the Java Language Specification (JLS §15.26.2), an expression ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"E1 op= E2"})," is equivalent to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"E1 = (T)((E1) op (E2))"}),"."]}),e.jsxs("p",{children:["Crucially, the JVM provides a ",e.jsx("strong",{children:"Single-Evaluation Guarantee"}),": the left-hand target expression ",e.jsx("code",{className:"text-sky-300 font-mono",children:"E1"})," is evaluated exactly once, preventing duplicate method executions and corrupted array indices. Furthermore, the entire right-hand expression ",e.jsx("code",{className:"text-amber-300 font-mono",children:"E2"})," is evaluated before the compound operation is applied."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-emerald-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-emerald-300",children:"Classroom Case Study (Barrackpore Fee Accumulator):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," built an automated tuition installment ledger for student accounts in Indian Rupees (",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹"}),"). By accumulating payments with compound assignment (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"totalPaid += installment;"}),"), ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," tracked partial fee payments across Naihati and Shyamnagar with zero arithmetic side-effects."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," The 11 Compound Assignment Operators & Single-Evaluation Pipeline"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"How compound assignments evaluate target expressions once and isolate right-hand operations:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Compound Assignment Operators and Evaluation Pipeline Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradArithComp",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#38bdf8"}),e.jsx("stop",{offset:"100%",stopColor:"#0284c7"})]}),e.jsxs("linearGradient",{id:"gradBitComp",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsxs("linearGradient",{id:"gradEvalComp",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309"})]})]}),e.jsx("rect",{x:"30",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradArithComp)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"160",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"1. Arithmetic (5 Operators)"}),e.jsx("rect",{x:"45",y:"80",width:"230",height:"80",rx:"6",fill:"#0c4a6e"}),e.jsx("text",{x:"55",y:"102",fill:"#bae6fd",fontSize:"11",fontFamily:"monospace",children:"+=, -=, *=, /=, %="}),e.jsx("text",{x:"55",y:"122",fill:"#e0f2fe",fontSize:"10",children:"balance += 5000; // deposit"}),e.jsx("text",{x:"55",y:"142",fill:"#e0f2fe",fontSize:"10",children:"x *= 2 + 3; → x = x * (2+3)"}),e.jsx("text",{x:"160",y:"190",fill:"#f0f9ff",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Right Side Fully Grouped"}),e.jsx("rect",{x:"310",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradBitComp)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"440",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"2. Bitwise & Shift (6)"}),e.jsx("rect",{x:"325",y:"80",width:"230",height:"80",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"335",y:"102",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"&=, |=, ^=, <<=, >>=, >>>="}),e.jsx("text",{x:"335",y:"122",fill:"#d1fae5",fontSize:"10",children:"flags |= MASK; // set flag"}),e.jsx("text",{x:"335",y:"142",fill:"#d1fae5",fontSize:"10",children:"flags ^= MASK; // toggle flag"}),e.jsx("text",{x:"440",y:"190",fill:"#ecfdf5",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"In-Place Bit Operations"}),e.jsx("rect",{x:"590",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradEvalComp)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"720",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"3. Single Evaluation"}),e.jsx("rect",{x:"605",y:"80",width:"230",height:"80",rx:"6",fill:"#451a03"}),e.jsx("text",{x:"615",y:"102",fill:"#fde68a",fontSize:"11",fontFamily:"monospace",children:"arr[getIndex()] += 500;"}),e.jsx("text",{x:"615",y:"122",fill:"#fef3c7",fontSize:"10",children:"getIndex() runs EXACTLY ONCE!"}),e.jsx("text",{x:"615",y:"142",fill:"#fef3c7",fontSize:"10",children:"Prevents corrupted indices"}),e.jsx("text",{x:"720",y:"190",fill:"#fef3c7",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"JLS §15.26.2 Guarantee"}),e.jsx("text",{x:"440",y:"255",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"Right-to-Left Associativity: `x += y += z += 5` evaluates as `x += (y += (z += 5))`."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," The 11 Compound Operators Complete Taxonomy"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Operator"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Example Expression"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Equivalent Expansion"}),e.jsx("th",{className:"p-3 font-semibold text-slate-400",children:"Category & Use Case"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"+="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a += b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a + b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Addition / String concatenation accumulator"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"-="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a -= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a - b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Subtraction / Balance reduction"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"*="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a *= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a * b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Multiplication / Scaling factor"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"/="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a /= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a / b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Division / Split apportionment"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"%="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a %= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a % b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Modulus remainder assignment"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"&="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a &= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a & b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Bitwise mask filtering / Eager boolean AND"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"|="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a |= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a | b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Bitwise flag setting / Eager boolean OR"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"^="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a ^= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a ^ b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Bitwise flag toggle / XOR in-place swap"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:"<<="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a <<= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a << b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Left shift multiplication reassignment"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:">>="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a >>= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a >> b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Signed right shift floor division"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono font-bold text-sky-300",children:">>>="}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"a >>>= b"}),e.jsx("td",{className:"p-3 font-mono text-amber-300",children:"a = (T)(a >>> b)"}),e.jsx("td",{className:"p-3 text-xs",children:"Unsigned right shift zero extension"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"CompoundAssignmentOperatorsDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program illustrates all 11 compound assignment operators, the single-evaluation guarantee of array and method indices, Right-to-Left associativity, and installment ledger accumulation in Indian Rupees (₹)."}),e.jsx(t,{fileModule:o,title:"CompoundAssignmentOperatorsDemo.java",highlightLines:[21,24,27,30,33,40,43,46,49,52,60,65,74,88]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Expecting x *= 2 + 3 to Evaluate as x * 2 + 3"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["In Java, the entire right-hand expression is treated as enclosed in parentheses: ",e.jsx("code",{className:"text-rose-300 font-mono",children:"x *= 2 + 3"})," evaluates as ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"x = x * (2 + 3)"}),", multiplying ",e.jsx("code",{className:"text-sky-300 font-mono",children:"x"})," by ",e.jsx("code",{className:"text-amber-300 font-mono",children:"5"})," (NOT ",e.jsx("code",{className:"text-rose-400 font-mono",children:"x * 2 + 3"}),"!)."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Use += for Array and Map Element Updates"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"arr[calculateIndex()] += 10"})," evaluates the index expression only once, whereas ",e.jsx("code",{className:"text-rose-300 font-mono",children:"arr[calc()] = arr[calc()] + 10"})," evaluates ",e.jsx("code",{className:"text-rose-300 font-mono",children:"calc()"})," twice, introducing performance overhead and potential bugs."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why does `x += y += z += 5` set z first, then y, then x?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Right-to-Left Associativity! Assignment and compound assignment operators group from right to left: ",e.jsx("code",{className:"text-sky-300 font-mono",children:"x += (y += (z += 5))"}),". First ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"z += 5"})," updates ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"z"})," and yields the new ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"z"}),", which is then added to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"y"}),", and that result is added to ",e.jsx("code",{className:"text-purple-300 font-mono",children:"x"}),"!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Compound Assignment FAQs",questions:r})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 001_003 Topic 13: Compound Assignment Operators",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_003_topic13_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: Compound assignment operators make your code clean, concise, and efficient. Remember that the target expression on the left is evaluated only once, and the right-hand side is fully calculated before assignment. In Topic 14, we explore Implicit Type Casting in Compound Assignments! — Sukanta Hui"})})]})}export{f as default};
