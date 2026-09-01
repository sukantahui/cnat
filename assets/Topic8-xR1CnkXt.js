import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * File: EqualityCheckPrimitivesVsObjectsDemo.java\r
 * Module: 001_003_operators-expressions-and-type-casting (Topic 8)\r
 * Description: Demonstrates primitive value comparison (==) vs object reference comparison (==),\r
 *              logical content comparison with .equals(), String Constant Pool interning,\r
 *              Integer cache (-128 to 127) traps, null-safe Objects.equals(),\r
 *              and student enrollment identity verification in Indian Rupees (₹).\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.operators;\r
\r
import java.util.Objects;\r
\r
public class EqualityCheckPrimitivesVsObjectsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 8 PRIMITIVE == VS OBJECT REFERENCE EQUALITY");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. Primitive Value Comparison (Stack Memory Bit Equality)\r
        System.out.println("--- 1. PRIMITIVE VALUE COMPARISON (==) ---");\r
        int fee1 = 15000;\r
        int fee2 = 15000;\r
        double feeDouble = 15000.0;\r
\r
        System.out.printf("int 15000 == int 15000       : %b (Direct bit value match)%n", (fee1 == fee2));\r
        System.out.printf("int 15000 == double 15000.0  : %b (Binary numeric promotion)%n%n", (fee1 == feeDouble));\r
\r
        // 2. Object Reference Identity (==) vs Logical Content (.equals())\r
        System.out.println("--- 2. OBJECT REFERENCE IDENTITY (==) VS CONTENT EQUALITY (.equals()) ---");\r
        // String Literals (Stored in String Constant Pool):\r
        String loc1 = "Barrackpore";\r
        String loc2 = "Barrackpore";\r
\r
        // Explicit new Heap Objects:\r
        String loc3 = new String("Barrackpore");\r
        String loc4 = new String("Barrackpore");\r
\r
        System.out.printf("Literal loc1 == Literal loc2       : %b (Same String Pool instance)%n", (loc1 == loc2));\r
        System.out.printf("Literal loc1 == new String loc3    : %b (Different Heap memory addresses!)%n", (loc1 == loc3));\r
        System.out.printf("new loc3 == new loc4               : %b (Two distinct Heap allocations)%n", (loc3 == loc4));\r
        System.out.printf("loc1.equals(loc3)                  : %b (Content matches perfectly)%n", loc1.equals(loc3));\r
        System.out.printf("loc3.equals(loc4)                  : %b (Content matches perfectly)%n", loc3.equals(loc4));\r
        System.out.printf("loc1 == loc3.intern()              : %b (Canonical pool reference)%n%n", (loc1 == loc3.intern()));\r
\r
        // 3. Integer Cache Trap (-128 to 127)\r
        System.out.println("--- 3. INTEGER WRAPPER CACHING TRAP (-128 TO 127) ---");\r
        Integer numA = 100; // Autoboxed via Integer.valueOf(100) -> Returns cached instance\r
        Integer numB = 100;\r
        System.out.printf("Integer 100 == Integer 100 (Cached)   : %b (Inside byte cache [-128..127])%n", (numA == numB));\r
\r
        Integer numC = 200; // Autoboxed via Integer.valueOf(200) -> Allocates new Heap object!\r
        Integer numD = 200;\r
        System.out.printf("Integer 200 == Integer 200 (Out-of-range): %b (TRAP: Different Heap objects!)%n", (numC == numD));\r
        System.out.printf("numC.equals(numD)                     : %b (Safe content comparison)%n%n", numC.equals(numD));\r
\r
        // 4. Null-Safe Comparison Patterns\r
        System.out.println("--- 4. NULL-SAFE COMPARISON PATTERNS ---");\r
        String studentInput = null;\r
        String officialBranch = "Barrackpore";\r
\r
        // Insecure: studentInput.equals("Barrackpore") throws NullPointerException!\r
        // Pattern A: Literal-First (Yoda style)\r
        boolean checkA = officialBranch.equals(studentInput); // false (Safe, no exception)\r
\r
        // Pattern B: java.util.Objects.equals()\r
        boolean checkB = Objects.equals(studentInput, officialBranch); // false (Safe, no exception)\r
\r
        System.out.printf("Literal-first officialBranch.equals(null) : %b%n", checkA);\r
        System.out.printf("Objects.equals(null, officialBranch)     : %b%n%n", checkB);\r
\r
        // 5. Custom Student Domain Class Equality\r
        System.out.println("--- 5. CUSTOM STUDENT CLASS EQUALITY IN BARRACKPORE ---");\r
        Student s1 = new Student(101, "Swadeep Hui", 15000.0);\r
        Student s2 = new Student(101, "Swadeep Hui", 15000.0);\r
        Student s3 = s1; // Same reference\r
\r
        System.out.printf("Student s1 == Student s2 (new instances) : %b (Different memory addresses)%n", (s1 == s2));\r
        System.out.printf("Student s1 == Student s3 (same reference): %b%n", (s1 == s3));\r
        System.out.printf("Student s1.equals(s2) (Overridden)       : %b (Logical identity match)%n", s1.equals(s2));\r
\r
        System.out.println("\\n================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. '==' on primitives checks value; '==' on objects checks heap memory address.");\r
        System.out.println("2. Always use '.equals()' or Objects.equals() to compare object contents.");\r
        System.out.println("3. Beware of Integer cache [-128..127]: '200 == 200' is FALSE for Integer objects!");\r
        System.out.println("4. String literals share pool memory, but 'new String()' allocates distinct objects.");\r
        System.out.println("================================================================================");\r
    }\r
\r
    private static class Student {\r
        private final int rollNumber;\r
        private final String name;\r
        private final double courseFee;\r
\r
        public Student(int rollNumber, String name, double courseFee) {\r
            this.rollNumber = rollNumber;\r
            this.name = name;\r
            this.courseFee = courseFee;\r
        }\r
\r
        @Override\r
        public boolean equals(Object o) {\r
            if (this == o) return true;\r
            if (o == null || getClass() != o.getClass()) return false;\r
            Student student = (Student) o;\r
            return rollNumber == student.rollNumber &&\r
                    Double.compare(student.courseFee, courseFee) == 0 &&\r
                    Objects.equals(name, student.name);\r
        }\r
\r
        @Override\r
        public int hashCode() {\r
            return Objects.hash(rollNumber, name, courseFee);\r
        }\r
    }\r
}\r
`,o=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_003: Operators, Expressions, Precedence & Type Casting\r
TOPIC 8: Equality Check: Primitive == Value Comparison vs Object Reference Comparison\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Primitive vs Object Equality:\r
  * Primitive '==' : Compares raw bit values in Stack memory (int 5 == int 5 → true).\r
  * Object '=='    : Compares Heap memory address / Reference Identity.\r
  * Object .equals(): Compares logical contents/state (when overridden).\r
\r
- String Constant Pool vs Heap Allocations:\r
  +------------------------------------+-----------+---------------------------+\r
  | Comparison                         | Result    | Reason                    |\r
  +------------------------------------+-----------+---------------------------+\r
  | "Java" == "Java"                   | true      | Same String Pool instance |\r
  | "Java" == new String("Java")       | false     | Distinct Heap allocations |\r
  | "Java".equals(new String("Java"))  | true      | Logical characters match  |\r
  | "Java" == new String("Java").intern()| true    | Pool canonical reference  |\r
  +------------------------------------+-----------+---------------------------+\r
\r
- The Integer Cache Trap (-128 to 127):\r
  * Integer a = 100, b = 100; a == b → TRUE  (Cached by Integer.valueOf())\r
  * Integer c = 200, d = 200; c == d → FALSE (Different Heap objects!)\r
  * Golden Rule: NEVER use '==' on Wrapper Objects! Always use .equals().\r
\r
- Defensive Null-Safe Comparison:\r
  * Pattern 1 (Yoda condition) : "BARRACKPORE".equals(userInput)\r
  * Pattern 2 (java.util)      : java.util.Objects.equals(a, b)\r
\r
- The equals() and hashCode() Contract:\r
  * If a.equals(b) is true, then a.hashCode() MUST equal b.hashCode().\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Use '==' ONLY for primitives and enum singletons.\r
[✓] Use '.equals()' or Objects.equals() for Strings, Wrappers, and custom Objects.\r
[✓] Watch out for Integer cache limits [-128..127].\r
[✓] Always override hashCode() when overriding equals().\r
================================================================================\r
`,i=[{question:"What is the fundamental difference between `==` for primitive types and `==` for object reference types in Java?",shortAnswer:"For primitives, `==` compares raw bit values in stack memory; for objects, `==` compares memory addresses (reference identity) in the Heap.",explanation:"`int a = 5, b = 5; a == b` compares the number 5. For objects `obj1 == obj2`, it tests whether both pointers reference the exact same heap memory address.",hint:"Primitive = value equality; Object = memory address identity.",level:"basic",codeExample:`int a = 10, b = 10; // a == b is true (values match)
Student s1 = new Student();
Student s2 = new Student(); // s1 == s2 is false (different heap addresses)`},{question:"What does the `.equals()` method do by default in `java.lang.Object`?",shortAnswer:"In the default `Object` class, `.equals()` simply executes `this == obj` (reference identity comparison).",explanation:"Classes like `String`, `Integer`, `Double`, `Date`, etc., override `.equals()` to compare logical contents rather than memory addresses.",hint:"Default Object.equals() is identical to ==.",level:"basic",codeExample:`// In java.lang.Object:
// public boolean equals(Object obj) { return (this == obj); }`},{question:'Why does `String s1 = "Barrackpore"; String s2 = "Barrackpore"; s1 == s2` evaluate to `true`?',shortAnswer:"Because String literals are stored in the String Constant Pool, so both variables point to the exact same canonical `String` instance.",explanation:"JVM optimizes memory by reusing identical string literals from the constant pool.",hint:"String Constant Pool shares identical string literals.",level:"basic",codeExample:`String s1 = "Java";
String s2 = "Java";
System.out.println(s1 == s2); // true (Same pool object)`},{question:'Why does `new String("Barrackpore") == new String("Barrackpore")` evaluate to `false`?',shortAnswer:"Because the `new` keyword explicitly allocates a brand new distinct object on the Heap for each call, resulting in different memory addresses.",explanation:"Although the text characters are identical, the memory addresses are different.",hint:"new keyword always creates a new heap object.",level:"basic",codeExample:`String s1 = new String("Java");
String s2 = new String("Java");
System.out.println(s1 == s2);      // false (Different memory)
System.out.println(s1.equals(s2)); // true (Same characters)`},{question:"What does the `String.intern()` method do?",shortAnswer:"It returns the canonical String instance from the String Constant Pool, adding it to the pool if it does not already exist.",explanation:'Calling `new String("A").intern()` returns the pooled reference.',hint:"Returns the constant pool reference.",level:"intermediate",codeExample:`String s1 = "Java";
String s2 = new String("Java");
System.out.println(s1 == s2.intern()); // true`},{question:"What is the Integer Cache Trap in Java (e.g. `Integer a = 100, b = 100; a == b` vs `Integer c = 200, d = 200; c == d`)?",shortAnswer:"`100 == 100` is `true` because the JVM caches `Integer` objects from `-128` to `127`; `200 == 200` is `false` because values outside that range allocate new distinct Heap objects!",explanation:"Autoboxing calls `Integer.valueOf()`, which caches bytes `[-128, 127]`. Comparing wrapper objects with `==` causes intermittent, catastrophic production bugs.",hint:"Integer cache only covers -128 to 127.",level:"intermediate",codeExample:`Integer x = 100, y = 100; // x == y is TRUE (cached)
Integer p = 200, q = 200; // p == q is FALSE (distinct objects!)`},{question:"How should wrapper objects (`Integer`, `Long`, `Double`, `Boolean`) always be compared in production?",shortAnswer:"Using `.equals()` or `Objects.equals(a, b)`.",explanation:"Never use `==` to compare wrapper object values.",hint:"Always use .equals() or Objects.equals().",level:"basic",codeExample:`Integer a = 200, b = 200;
boolean match = Objects.equals(a, b); // true (Safe!)`},{question:"What is the advantage of `java.util.Objects.equals(Object a, Object b)` over `a.equals(b)`?",shortAnswer:"`Objects.equals()` is null-safe: if `a` is `null`, it returns `false` (or `true` if both are null) without throwing `NullPointerException`.",explanation:"`a.equals(b)` crashes with `NullPointerException` if `a` is null.",hint:"Prevents NullPointerException when left operand is null.",level:"basic",codeExample:`String user = null;
boolean safe = Objects.equals(user, "admin"); // false (No crash)`},{question:"What is the Literal-First (Yoda condition) comparison pattern in Java?",shortAnswer:'Writing `"literal".equals(variable)` instead of `variable.equals("literal")` to avoid `NullPointerException`.',explanation:'Because `"literal"` is guaranteed non-null, calling `.equals()` on it is 100% crash-proof.',hint:'"Literal".equals(variable) avoids NullPointerException.',level:"basic",codeExample:`String role = null;
if ("ADMIN".equals(role)) { } // Safe! (Returns false without NPE)`},{question:"What contract must be satisfied when overriding `equals()` in a custom Java class?",shortAnswer:"You MUST also override `hashCode()` so that equal objects produce identical hash codes.",explanation:"Violating the `equals()` / `hashCode()` contract breaks `HashMap`, `HashSet`, and `HashTable` collections.",hint:"Always override hashCode() whenever equals() is overridden.",level:"intermediate",codeExample:`@Override
public boolean equals(Object o) { ... }
@Override
public int hashCode() { return Objects.hash(id, name); }`},{question:"What are the 5 mathematical properties required of the `equals()` method contract (JLS & Object class)?",shortAnswer:"1. Reflexive (`x.equals(x)` is true)\n2. Symmetric (`x.equals(y) == y.equals(x)`)\n3. Transitive (`x.equals(y)` and `y.equals(z)` implies `x.equals(z)`)\n4. Consistent (multiple invocations return identical results)\n5. Non-nullity (`x.equals(null)` is false).",explanation:"These 5 mathematical axioms ensure predictable behavior across Java collections and algorithms.",hint:"Reflexive, Symmetric, Transitive, Consistent, Non-null.",level:"advanced",codeExample:"// Verified in custom domain class equals() methods"},{question:'What is the result of `"hello" == "hel" + "lo"` in Java?',shortAnswer:"`true`.",explanation:'Because both operands are compile-time string constants, the compiler performs Constant Inlining and evaluates `"hel" + "lo"` to `"hello"` at compile time, sharing the same pool entry.',hint:"Compile-time constant string concatenation is pooled.",level:"intermediate",codeExample:`String s1 = "hello";
String s2 = "hel" + "lo";
System.out.println(s1 == s2); // true`},{question:'What is the result of `String sub = "lo"; "hello" == ("hel" + sub)` in Java?',shortAnswer:"`false`.",explanation:'Because `sub` is a variable (not a constant), `"hel" + sub` creates a new `String` at runtime on the Heap rather than resolving to the compile-time constant pool.',hint:"Concatenation with a variable produces a new heap object at runtime.",level:"intermediate",codeExample:`String s1 = "hello";
String sub = "lo";
String s2 = "hel" + sub;
System.out.println(s1 == s2); // false`},{question:'What is the result of `final String sub = "lo"; "hello" == ("hel" + sub)` in Java?',shortAnswer:"`true`.",explanation:'Because `sub` is `final` and initialized with a constant literal, the compiler treats `"hel" + sub` as a compile-time constant expression and inlines it to `"hello"`.',hint:"final variable with literal initializer enables compile-time inlining.",level:"advanced",codeExample:`String s1 = "hello";
final String sub = "lo";
String s2 = "hel" + sub;
System.out.println(s1 == s2); // true`},{question:"How does `Arrays.equals(int[] a, int[] b)` compare array objects?",shortAnswer:"It compares the array lengths and the elements at corresponding indices for value equality, whereas `a == b` only compares array reference addresses.",explanation:"Arrays inherit `Object.equals()` which performs reference comparison. `Arrays.equals()` checks actual element values.",hint:"Use Arrays.equals() to compare array contents.",level:"intermediate",codeExample:`int[] a = {1, 2, 3};
int[] b = {1, 2, 3};
System.out.println(a == b);            // false
System.out.println(Arrays.equals(a, b)); // true`},{question:"What does `Arrays.deepEquals(Object[] a, Object[] b)` do?",shortAnswer:"It recursively compares multidimensional arrays or nested object arrays for deep content equality.",explanation:"Deep equals traverses nested sub-arrays at arbitrary depths.",hint:"Used for multidimensional arrays.",level:"advanced",codeExample:`String[][] m1 = {{"A"}};
String[][] m2 = {{"A"}};
System.out.println(Arrays.deepEquals(m1, m2)); // true`},{question:"Can two different objects have the same `hashCode` but not be equal via `equals()`?",shortAnswer:"Yes, this is called a Hash Collision.",explanation:"Because `hashCode()` maps infinite possible objects to a 32-bit integer range ($2^{32}$), distinct objects can produce identical hash codes.",hint:"Hash collisions: equal objects must have same hash, but same hash doesn't mean equal.",level:"intermediate",codeExample:`String s1 = "FB";
String s2 = "Ea";
System.out.println(s1.hashCode() == s2.hashCode()); // true (Hash collision!)
System.out.println(s1.equals(s2));                 // false`},{question:"What is the result of `Boolean.valueOf(true) == Boolean.TRUE`?",shortAnswer:"`true`.",explanation:"`Boolean.valueOf()` returns the singleton static constants `Boolean.TRUE` or `Boolean.FALSE`.",hint:"Boolean wrapper caches TRUE and FALSE singletons.",level:"basic",codeExample:"boolean b = (Boolean.valueOf(true) == Boolean.TRUE); // true"},{question:"What is the result of `new Boolean(true) == new Boolean(true)`?",shortAnswer:"`false` (and deprecated since Java 9!).",explanation:"`new` allocates distinct objects on the Heap. Constructing wrappers with `new` is deprecated; always use `Boolean.valueOf()` or autoboxing.",hint:"new Boolean() creates distinct objects (deprecated).",level:"basic",codeExample:`Boolean b1 = new Boolean(true);
Boolean b2 = new Boolean(true);
System.out.println(b1 == b2); // false`},{question:"How does `BigDecimal.compareTo(BigDecimal other)` differ from `BigDecimal.equals(Object other)`?",shortAnswer:"`compareTo()` compares numeric values ignoring scale (e.g. `2.0` equals `2.00`); `.equals()` requires both value AND scale to match exactly (`2.0.equals(2.00)` is `false`).",explanation:'`new BigDecimal("2.0").equals(new BigDecimal("2.00"))` is `false`, but `compareTo()` returns `0` (equal).',hint:"compareTo() ignores scale; equals() enforces exact scale match.",level:"advanced",codeExample:`BigDecimal d1 = new BigDecimal("2.0");
BigDecimal d2 = new BigDecimal("2.00");
System.out.println(d1.equals(d2));          // false
System.out.println(d1.compareTo(d2) == 0); // true`},{question:"What is the recommended idiom for comparing `enum` values in Java?",shortAnswer:"Use `==` (e.g. `status == EnrollmentStatus.ACTIVE`).",explanation:"Because `enum` constants are strictly JVM singletons, `==` is safe, null-safe, and checked at compile time.",hint:"== is best practice for enum comparison.",level:"basic",codeExample:"if (studentStatus == Status.ENROLLED) { }"},{question:"What happens when comparing a primitive to a wrapper using `==` (e.g. `int 10 == Integer.valueOf(10)`)?",shortAnswer:"Evaluates to `true` because Java automatically unboxes the wrapper object to its primitive `int` before comparison.",explanation:"Unboxing extracts the primitive value.",hint:"Wrapper is unboxed to primitive for comparison.",level:"basic",codeExample:`int p = 10;
Integer w = 10;
System.out.println(p == w); // true (Unboxing occurs)`},{question:"What danger occurs when unboxing a null wrapper during `==` comparison with a primitive (`int p = 10; Integer w = null; boolean b = (p == w);`)?",shortAnswer:"Throws `java.lang.NullPointerException` at runtime!",explanation:"Unboxing `w.intValue()` on a `null` reference causes an immediate crash.",hint:"Unboxing null throws NullPointerException.",level:"intermediate",codeExample:`Integer w = null;
// boolean bad = (10 == w); // THROWS NullPointerException!`},{question:"In the Coder & AccoTax Barrackpore student enrollment system, how is student identity verified?",shortAnswer:"By overriding `.equals()` to verify that student roll number, course fee in Indian Rupees (₹), and student name match.",explanation:"Custom domain classes must override `equals()` and `hashCode()` to compare business state rather than heap pointers.",hint:"Override equals() and hashCode() on domain entities.",level:"basic",codeExample:`Student s1 = new Student(101, "Swadeep", 15000.0);
Student s2 = new Student(101, "Swadeep", 15000.0);
boolean match = s1.equals(s2); // true`},{question:"What is the result of `null == null` in Java?",shortAnswer:"`true`.",explanation:"Two null references are always equal.",hint:"null == null is true.",level:"basic",codeExample:"boolean b = (null == null); // true"},{question:'What is the result of `"abc".equals(null)` in Java?',shortAnswer:"`false` (does not throw an exception).",explanation:"The `.equals()` contract specifies that passing `null` must safely return `false`.",hint:".equals(null) safely returns false.",level:"basic",codeExample:'boolean b = "abc".equals(null); // false'},{question:"Can the JVM Integer cache range `[-128, 127]` be expanded?",shortAnswer:"Yes, the upper bound can be increased using the JVM argument `-XX:AutoBoxCacheMax=<size>`.",explanation:"The lower bound is fixed at `-128`, but the upper bound can be tuned for high-volume enterprise systems.",hint:"-XX:AutoBoxCacheMax expands the upper cache limit.",level:"expert",codeExample:"// java -XX:AutoBoxCacheMax=1000 MyApplication"},{question:"What is the best way to compare two `Double` or `Float` wrapper objects?",shortAnswer:"Use `Double.compare(d1, d2) == 0` or `d1.equals(d2)`.",explanation:"Properly handles `+0.0` vs `-0.0` and `NaN` states.",hint:"Double.compare or .equals().",level:"intermediate",codeExample:`Double d1 = 0.0 / 0.0, d2 = Double.NaN;
System.out.println(d1.equals(d2)); // true`},{question:"What is the ultimate takeaway of Topic 8 for Java developers?",shortAnswer:"Always use `==` for primitives, but ALWAYS use `.equals()` or `Objects.equals()` for Objects and Wrapper classes to prevent subtle memory reference and caching bugs.",explanation:"Mastering the distinction between stack bit comparison and heap address identity is one of the most critical fundamentals in Java programming.",hint:"Primitives use ==; Objects use .equals().",level:"basic",codeExample:"// Summary: primitive == primitive (values match); object.equals(object) (contents match)"},{question:"What is the next topic (Topic 9) in Module 001_003?",shortAnswer:"Logical operators: Logical AND (&&), Logical OR (||), Logical NOT (!).",explanation:"Topic 9 covers boolean logic operations, truth tables, and composite condition formulation.",hint:"Logical operators in Java.",level:"basic",codeExample:"// Topic 9: &&, ||, !"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowEquality {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(14, 165, 233, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(14, 165, 233, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-equality {
            animation: glowEquality 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Beginner Foundation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Equality Check: Primitive ",e.jsx("code",{className:"text-sky-400",children:"=="})," vs. Object Reference Comparison & ",e.jsx("code",{className:"text-emerald-400",children:".equals()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the architectural distinction between stack bit comparison and heap address identity: why ",e.jsx("code",{className:"text-sky-300 font-mono",children:"=="})," compares values on primitives but memory pointers on objects, String Constant Pool interning, the dangerous ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Integer"})," cache trap (",e.jsx("code",{className:"text-rose-400 font-mono",children:"200 == 200"})," is false!), null-safe comparisons, and student verification in Indian Rupees (₹)."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Stack Memory Bits vs. Heap Reference Addresses"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["In Java, the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"=="})," operator behaves differently based on whether the operands are ",e.jsx("strong",{children:"Primitive types"})," or ",e.jsx("strong",{children:"Reference types (Objects)"}),":"]}),e.jsxs("p",{children:[e.jsxs("strong",{children:["Primitive ",e.jsx("code",{className:"text-sky-300 font-mono",children:"=="}),":"]})," Compares the literal binary bit values stored directly on the current Thread Stack frame (e.g. ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"15000 == 15000"}),").",e.jsx("br",{}),e.jsxs("strong",{children:["Object ",e.jsx("code",{className:"text-rose-300 font-mono",children:"=="}),":"]})," Compares the 32/64-bit Heap memory address stored in the reference variable (Reference Identity), checking whether both variables point to the exact same object in Heap memory.",e.jsx("br",{}),e.jsxs("strong",{children:["Object ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".equals()"}),":"]})," Compares the logical state and internal contents of the objects when properly overridden."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-sky-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-sky-300",children:"Classroom Case Study (Barrackpore Admission Identity):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," created a student enrollment verification engine. By overriding ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"equals()"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"hashCode()"})," in the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Student"})," class, ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," detected duplicate student registrations across Naihati and Shyamnagar by matching roll numbers and course fees in Indian Rupees (",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹"}),") rather than comparing volatile heap memory addresses."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Primitive Stack Comparison vs. Object Heap Reference Pipeline"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"How stack bit comparison differs from heap address pointers and the String Pool:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Primitive Equality vs Object Reference Comparison Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradPrimEq",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsxs("linearGradient",{id:"gradHeapEq",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e"}),e.jsx("stop",{offset:"100%",stopColor:"#be123c"})]}),e.jsxs("linearGradient",{id:"gradCacheTrap",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f59e0b"}),e.jsx("stop",{offset:"100%",stopColor:"#b45309"})]})]}),e.jsx("rect",{x:"30",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradPrimEq)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"160",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"1. Primitives (Stack)"}),e.jsx("rect",{x:"45",y:"80",width:"230",height:"80",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"55",y:"102",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"int a = 15000;"}),e.jsx("text",{x:"55",y:"122",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"int b = 15000;"}),e.jsx("text",{x:"55",y:"142",fill:"#d1fae5",fontSize:"10",children:"a == b → true (Compares stack bits)"}),e.jsx("text",{x:"160",y:"190",fill:"#ecfdf5",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"✓ Direct Bit Value Match"}),e.jsx("rect",{x:"310",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradHeapEq)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"440",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"2. Objects (Heap Memory)"}),e.jsx("rect",{x:"325",y:"80",width:"230",height:"80",rx:"6",fill:"#4c0519"}),e.jsx("text",{x:"335",y:"102",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:'s1 = new String("B");'}),e.jsx("text",{x:"335",y:"122",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:'s2 = new String("B");'}),e.jsx("text",{x:"335",y:"142",fill:"#fecdd3",fontSize:"10",children:"s1 == s2 → FALSE! (Diff addresses)"}),e.jsx("text",{x:"440",y:"190",fill:"#ffe4e6",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Use s1.equals(s2) for Content"}),e.jsx("rect",{x:"590",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradCacheTrap)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"720",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"3. Integer Cache Trap"}),e.jsx("rect",{x:"605",y:"80",width:"230",height:"80",rx:"6",fill:"#451a03"}),e.jsx("text",{x:"615",y:"102",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"Integer 100 == 100 → true"}),e.jsx("text",{x:"615",y:"122",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"Integer 200 == 200 → FALSE!"}),e.jsx("text",{x:"615",y:"142",fill:"#fef3c7",fontSize:"10",children:"Cached only in [-128..127]!"}),e.jsx("text",{x:"720",y:"190",fill:"#fef3c7",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Always Use Objects.equals()"}),e.jsx("text",{x:"440",y:"255",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"String Pool: String literals share canonical instances; `new String()` forces new Heap objects."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Equality Comparison Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Comparison Expression"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Result"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Comparison Type"}),e.jsx("th",{className:"p-3 font-semibold text-slate-400",children:"JVM Architectural Reason"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"10 == 10"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3",children:"Primitive Value"}),e.jsx("td",{className:"p-3 text-xs",children:"Direct stack memory bit comparison"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:'"Java" == "Java"'}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3",children:"String Literal Identity"}),e.jsx("td",{className:"p-3 text-xs",children:"Both point to the same String Constant Pool instance in Heap"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:'"Java" == new String("Java")'}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"false"}),e.jsx("td",{className:"p-3",children:"Reference Address"}),e.jsx("td",{className:"p-3 text-xs",children:"`new` allocates a distinct object outside the constant pool"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:'"Java".equals(new String("Java"))'}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3",children:"Logical Content"}),e.jsx("td",{className:"p-3 text-xs",children:"Overridden `.equals()` inspects character sequences"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"Integer.valueOf(100) == Integer.valueOf(100)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3",children:"Wrapper Cache Identity"}),e.jsx("td",{className:"p-3 text-xs",children:"Values in range [-128, 127] are pre-cached singletons"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"Integer.valueOf(200) == Integer.valueOf(200)"}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"false"}),e.jsx("td",{className:"p-3",children:"Heap Object Identity"}),e.jsx("td",{className:"p-3 text-xs",children:"Values exceeding 127 allocate new Heap instances (THE TRAP!)"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"EqualityCheckPrimitivesVsObjectsDemo.java"})]}),e.jsxs("p",{className:"text-sm text-slate-300 leading-relaxed",children:["The following program illustrates primitive bit equality, String Pool interning, the dangerous Integer cache trap (",e.jsx("code",{className:"text-rose-400 font-mono",children:"200 == 200"}),"), null-safe comparisons, and custom domain entity equality in Indian Rupees (₹)."]}),e.jsx(t,{fileModule:r,title:"EqualityCheckPrimitivesVsObjectsDemo.java",highlightLines:[25,26,38,39,40,41,42,43,50,54,55,65,66,76,77]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Comparing Strings with == Instead of .equals()"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:'if (userInput == "Barrackpore")'})," works during development with static literals but will intermittently fail in production whenever the string comes from a Scanner, API payload, or database query!"]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Always use ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:'"Barrackpore".equals(userInput)'})," or ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"Objects.equals(a, b)"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 2: Comparing Wrapper Objects with == (The Integer Cache Trap)"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Comparing ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Integer"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Long"}),", or ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Double"})," objects with ",e.jsx("code",{className:"text-rose-300 font-mono",children:"=="})," produces tests that pass for small numbers (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<= 127"}),") but fail mysteriously for numbers greater than 127."]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Never use ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"=="})," on Wrapper classes; use ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"a.equals(b)"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why does `Integer a = 100, b = 100; a == b` evaluate to true, but `Integer c = 200, d = 200; c == d` evaluates to false?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," The JVM Integer Cache! Autoboxing calls ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Integer.valueOf()"}),". Java pre-allocates and caches integers from ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"-128 to +127"})," in a static cache array. For ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"100"}),", both ",e.jsx("code",{className:"text-sky-300 font-mono",children:"a"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"b"})," point to the same cached object. For ",e.jsx("code",{className:"text-rose-400 font-mono",children:"200"})," (which is > 127), the JVM instantiates two distinct Heap objects with different memory addresses!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Primitive vs Object Equality FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 001_003 Topic 8: Primitive == vs Object Reference Equality",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_003_topic8_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: This is one of the most critical topics in all of Java development. Always remember: '==' compares stack bits for primitives and heap addresses for objects. Never compare Strings or Wrapper classes with '==' in production code—always use .equals() or Objects.equals(). In Topic 9, we dive into Logical Operators (&&, ||, !)! — Sukanta Hui"})})]})}export{b as default};
