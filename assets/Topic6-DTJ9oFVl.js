import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * File: TraditionalSwitchCaseDemo.java\r
 * Module: 001_004_decision-making-and-modern-switch (Topic 6)\r
 * Description: Demonstrates Java Traditional 'switch-case' statements (JLS §14.11),\r
 *              valid selector data types (byte, short, int, char, String, enum),\r
 *              illegal types (long, float, double, boolean), compile-time constant case labels,\r
 *              banking transaction routing, and course enrollment dispatches in Indian Rupees (₹).\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.controlflow;\r
\r
public class TraditionalSwitchCaseDemo {\r
\r
    public enum StudentBranch {\r
        BARRACKPORE, SHYAMNAGAR, NAIHATI, ICHAPUR\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 6 TRADITIONAL 'SWITCH-CASE' STATEMENT");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. Primitive Int Selector with Compile-Time Constant Case Labels\r
        System.out.println("--- 1. PRIMITIVE INT SELECTOR WITH CONSTANT LABELS ---");\r
        final int OPTION_JAVA = 1;\r
        final int OPTION_SPRING = 2;\r
        final int OPTION_TAX = 3;\r
\r
        int selectedOption = 2;\r
        switch (selectedOption) {\r
            case OPTION_JAVA:\r
                System.out.println("Track: Java Core & Algorithms (Fee: ₹15,000)");\r
                break;\r
            case OPTION_SPRING:\r
                System.out.println("Track: Enterprise Spring Boot & Microservices (Fee: ₹22,000)");\r
                break;\r
            case OPTION_TAX:\r
                System.out.println("Track: AccoTax & GST Taxation Mastery (Fee: ₹12,000)");\r
                break;\r
            default:\r
                System.out.println("Error: Unrecognized Course Track Code!");\r
                break;\r
        }\r
        System.out.println();\r
\r
        // 2. Character Selector (char)\r
        System.out.println("--- 2. CHARACTER SELECTOR ('A', 'B', 'C') ---");\r
        char gradeLevel = 'A';\r
        switch (gradeLevel) {\r
            case 'A':\r
                System.out.println("Rank: First Class with Distinction");\r
                break;\r
            case 'B':\r
                System.out.println("Rank: Second Class Division");\r
                break;\r
            case 'C':\r
                System.out.println("Rank: Pass Division");\r
                break;\r
            default:\r
                System.out.println("Rank: Unclassified / Remedial");\r
                break;\r
        }\r
        System.out.println();\r
\r
        // 3. String Selector (Introduced in Java 7)\r
        System.out.println("--- 3. STRING SELECTOR ---");\r
        dispatchAtmAction("WITHDRAW", 5000.0);\r
        dispatchAtmAction("DEPOSIT", 10000.0);\r
\r
        // 4. Enum Selector (Introduced in Java 5)\r
        System.out.println("\\n--- 4. ENUM SELECTOR ---");\r
        routeCampusBranch(StudentBranch.BARRACKPORE);\r
        routeCampusBranch(StudentBranch.NAIHATI);\r
\r
        System.out.println("\\n================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. Valid switch selector types: byte, short, int, char, String, and enum (and wrappers).");\r
        System.out.println("2. ILLEGAL selector types in Java: long, float, double, and boolean!");\r
        System.out.println("3. Case labels MUST be compile-time constants (literals or 'final' constant variables).");\r
        System.out.println("4. Duplicate case labels cause a compile error; 'null' selectors throw NullPointerException.");\r
        System.out.println("================================================================================");\r
    }\r
\r
    private static void dispatchAtmAction(String action, double amount) {\r
        System.out.printf("Dispatching Action: %-10s | ", action);\r
        switch (action) {\r
            case "WITHDRAW":\r
                System.out.printf("ATM Dispensing Cash: ₹%,.2f%n", amount);\r
                break;\r
            case "DEPOSIT":\r
                System.out.printf("ATM Accepting Cash Deposit: ₹%,.2f%n", amount);\r
                break;\r
            case "BALANCE":\r
                System.out.println("ATM Generating Balance Receipt...");\r
                break;\r
            default:\r
                System.out.println("ATM Error: Invalid Transaction Command!");\r
                break;\r
        }\r
    }\r
\r
    private static void routeCampusBranch(StudentBranch branch) {\r
        System.out.printf("Routing Campus: %-14s -> ", branch);\r
        switch (branch) {\r
            case BARRACKPORE:\r
                System.out.println("Headquarters & Main Laboratory (Palta / Station Road)");\r
                break;\r
            case SHYAMNAGAR:\r
                System.out.println("Regional Tech Hub (Sub-Center)");\r
                break;\r
            case NAIHATI:\r
                System.out.println("Advanced Placement & Training Cell");\r
                break;\r
            case ICHAPUR:\r
                System.out.println("Taxation & Corporate Accounting Wing");\r
                break;\r
        }\r
    }\r
}\r
`,r=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_004: Decision Making, Branching & Modern Switch Expressions\r
TOPIC 6: Traditional 'switch-case' Statement & Valid Data Types\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- Valid Switch Selector Data Types:\r
  [✓] byte, short, int, char  (Primitive integral types)\r
  [✓] Byte, Short, Character, Integer  (Wrapper classes via unboxing)\r
  [✓] String  (Introduced in Java 7)\r
  [✓] enum  (Introduced in Java 5)\r
\r
- ILLEGAL Selector Types in Java:\r
  [X] long    (64-bit integer, not supported by 32-bit JVM tableswitch)\r
  [X] float   (Floating-point rounding prevents exact match)\r
  [X] double  (Floating-point rounding prevents exact match)\r
  [X] boolean (Binary state; use if-else instead)\r
\r
- Case Label Rules:\r
  1. Must be COMPILE-TIME CONSTANTS (literals or 'final' constant variables).\r
  2. No duplicate case values allowed.\r
  3. Must fit within the range of the selector type.\r
  4. 'null' selector throws NullPointerException.\r
\r
- Enum Case Syntax:\r
  * Must use UNQUALIFIED enum names: case BARRACKPORE: (NOT StudentBranch.BARRACKPORE:).\r
\r
- Variable Scope Rule:\r
  * Variables declared in a case are visible across the ENTIRE switch body.\r
  * Use inner braces '{ ... }' to isolate local variable scopes per case.\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] End every non-fallthrough case with a 'break;' statement.\r
[✓] Always provide a 'default:' branch for unhandled cases.\r
[✓] Wrap case bodies in '{ }' if declaring local variables.\r
[✓] Check selector expression for null before switching on Strings/Enums.\r
================================================================================\r
`,o=[{question:"What is the Traditional 'switch-case' statement in Java (JLS §14.11)?",shortAnswer:"A multi-way branch statement that evaluates an expression and transfers control to a matching `case` constant label.",explanation:"Provides structured multi-branch routing with jump-table optimization in bytecode.",hint:"Multi-way branching based on constant matching.",level:"basic",codeExample:`switch (option) {
    case 1: doAction(); break;
    default: fallback();
}`},{question:"What data types are VALID for the switch selector expression in Java?",shortAnswer:"1. Primitive integral types: `byte`, `short`, `char`, `int`; 2. Wrapper classes: `Byte`, `Short`, `Character`, `Integer`; 3. `String` (Java 7+); 4. `enum` types (Java 5+).",explanation:"These are the only types supported by traditional switch statements.",hint:"byte, short, char, int, String, enum, and wrappers.",level:"basic",codeExample:"// byte, short, char, int, String, enum"},{question:"Which primitive data types are ILLEGAL in a switch selector in Java?",shortAnswer:"`long`, `float`, `double`, and `boolean`.",explanation:"Attempting to switch on `long`, `float`, `double`, or `boolean` causes a compile-time error.",hint:"long, float, double, boolean are illegal.",level:"basic",codeExample:"// long x = 10L; switch (x) { } // COMPILATION ERROR!"},{question:"Why is `long` not supported in traditional Java switch statements?",shortAnswer:"Because JVM jump table opcodes (`tableswitch`, `lookupswitch`) are designed around 32-bit integer indexes; a 64-bit jump table would require prohibitive memory allocation.",explanation:"Hardware and bytecode architecture design decision.",hint:"JVM bytecode tableswitch is 32-bit indexed.",level:"advanced",codeExample:"// JVM tableswitch uses 32-bit integer offsets"},{question:"Why are `float` and `double` not supported in switch statements?",shortAnswer:"Because floating-point representation involves binary approximation and rounding inaccuracies (e.g. `0.1 + 0.2 != 0.3`), making exact binary equality matching unreliable.",explanation:"Floating-point numbers lack exact discrete identity.",hint:"Floating-point rounding inaccuracies prevent exact matching.",level:"intermediate",codeExample:"// double d = 1.5; switch (d) { } // COMPILATION ERROR"},{question:"Why is `boolean` not supported in switch statements?",shortAnswer:"Because `boolean` only has two states (`true` / `false`), for which `if-else` is already the optimal and standard language construct.",explanation:"Switch is intended for multi-value discrete dispatch.",hint:"boolean is binary; use if-else instead.",level:"basic",codeExample:"// boolean b = true; switch (b) { } // COMPILATION ERROR"},{question:"What are the rules for `case` labels in a traditional switch statement?",shortAnswer:"1. Must be compile-time constant expressions; 2. Must be assignable to the selector type; 3. Cannot contain duplicates; 4. Cannot be `null`.",explanation:"Enforced strictly by the Java compiler.",hint:"Compile-time constants, no duplicates, within type range.",level:"basic",codeExample:`final int OPTION = 1;
switch (x) { case OPTION: ... }`},{question:"Can a non-final variable be used as a `case` label in Java?",shortAnswer:"No! `case` labels must be compile-time constants (literals or `final` variables initialized with constant expressions).",explanation:"Using a normal variable like `int val = 5; case val:` causes a compile error: 'constant expression required'.",hint:"Variables must be declared 'final' and initialized with constants.",level:"basic",codeExample:`int a = 5;
// case a: // COMPILER ERROR: constant expression required`},{question:"What happens if two `case` labels have the same value in a switch statement?",shortAnswer:"Compilation error: 'duplicate case label'.",explanation:"Case labels must be distinct.",hint:"Duplicate case labels cause compile error.",level:"basic",codeExample:"// case 1: ... case 1: // COMPILER ERROR: Duplicate case"},{question:"What happens if a `case` label exceeds the range of the selector type (`byte b = 1; switch (b) { case 130: ... }`)?",shortAnswer:"Compilation error: 'incompatible types: possible lossy conversion from int to byte'.",explanation:"130 cannot fit in a signed 8-bit `byte` (-128 to 127).",hint:"Case value out of range causes compile error.",level:"intermediate",codeExample:`byte b = 1;
// case 130: // COMPILER ERROR: out of byte range`},{question:"What happens if the switch selector expression evaluates to `null`?",shortAnswer:"Throws `java.lang.NullPointerException` at runtime.",explanation:"Applies to `String`, `enum`, and wrapper types (`Integer`, `Character`, etc.) during unboxing/dispatch.",hint:"Null selector expression throws NullPointerException.",level:"basic",codeExample:`String s = null;
// switch (s) { } // THROWS NullPointerException`},{question:"When switching on an `enum`, why must case labels use the unqualified enum constant name (`case BARRACKPORE:`) rather than `case StudentBranch.BARRACKPORE:`?",shortAnswer:"The Java compiler already knows the enum type from the selector expression, and JLS §14.11 explicitly requires unqualified enum constant names.",explanation:"Writing `case StudentBranch.BARRACKPORE:` causes a compilation error.",hint:"Use unqualified enum name (case BARRACKPORE:).",level:"intermediate",codeExample:`StudentBranch b = StudentBranch.NAIHATI;
switch (b) {
    case NAIHATI: // Correct
    // case StudentBranch.NAIHATI: // COMPILER ERROR!
}`},{question:"In the Coder & AccoTax Barrackpore student portal, what data types are used in switch dispatchers?",shortAnswer:"Integers for course track selection (₹15,000 Java Core vs ₹22,000 Spring Boot), Strings for ATM commands (`WITHDRAW`, `DEPOSIT`), and Enums for branch locations (`BARRACKPORE`, `SHYAMNAGAR`, `NAIHATI`, `ICHAPUR`).",explanation:"Demonstrates multi-type switch dispatching in Indian Rupees (₹).",hint:"int for courses, String for ATM actions, enum for branches.",level:"basic",codeExample:`switch (trackId) { case 1: ... }
switch (action) { case "WITHDRAW": ... }`},{question:"What is the purpose of the `break` statement in a traditional `case` block?",shortAnswer:"To terminate execution of the switch statement and jump past the closing curly brace `}`.",explanation:"Topic 7 explores `break` and fall-through mechanics in detail.",hint:"Exits the switch statement.",level:"basic",codeExample:"case 1: doWork(); break;"},{question:"What happens if `break` is omitted at the end of a `case` block in traditional switch?",shortAnswer:"Execution falls through into the next `case` block, executing its statements regardless of whether its case label matches!",explanation:"The infamous fall-through behavior of traditional switch.",hint:"Falls through into subsequent cases.",level:"basic",codeExample:"case 1: step1(); // No break → falls into case 2!"},{question:"What bytecode instruction is generated when `case` labels are dense integers (e.g. 1, 2, 3, 4)?",shortAnswer:"`tableswitch`.",explanation:"Direct $O(1)$ indexed jump table.",hint:"tableswitch opcode.",level:"advanced",codeExample:"// Bytecode: tableswitch 1 to 4: L1, L2, L3, L4"},{question:"What bytecode instruction is generated when `case` labels are sparse integers (e.g. 1, 100, 50000)?",shortAnswer:"`lookupswitch`.",explanation:"Binary search table in bytecode with $O(log N)$ lookup time.",hint:"lookupswitch opcode.",level:"advanced",codeExample:"// Bytecode: lookupswitch: 1->L1, 100->L2, 50000->L3"},{question:"Can a `case` label be a constant mathematical expression (e.g. `case 10 + 5:`)?",shortAnswer:"Yes! As long as the expression evaluates at compile-time to a constant (`15`), it is completely legal.",explanation:"Compile-time constant expressions are permitted.",hint:"Constant math expressions like 10 + 5 are legal.",level:"intermediate",codeExample:"case 10 * 2: // Legal (Constant 20)"},{question:"Can a `case` label call a method (e.g. `case getOption():`)?",shortAnswer:"No! Method invocations are evaluated at runtime and are NOT compile-time constants (causes a compile error).",explanation:"Methods cannot be evaluated at compile time.",hint:"Method calls are illegal in case labels.",level:"basic",codeExample:"// case getCode(): // COMPILER ERROR: constant expression required"},{question:"What is the scope of a variable declared inside a `switch` block without inner braces?",shortAnswer:"The variable is scoped to the ENTIRE `switch` block, so declaring the same variable name in another `case` causes a 'variable already defined' compile error!",explanation:"The entire switch body `{ ... }` forms a single scope.",hint:"Entire switch is one scope; wrap cases in {} to isolate.",level:"intermediate",codeExample:`switch (x) {
    case 1: int temp = 10; break;
    // case 2: int temp = 20; // ERROR: duplicate variable temp!
}`},{question:"How do you isolate variable scopes between different `case` blocks in traditional switch?",shortAnswer:"Enclose the body of the `case` in its own curly braces `{ ... }`.",explanation:"Creates a distinct local block scope.",hint:"Wrap case body in curly braces {}.",level:"basic",codeExample:`case 1: {
    int temp = 10;
    break;
}
case 2: {
    int temp = 20; // Legal! (Separate scope)
    break;
}`},{question:"Can `Character` wrapper objects be used as switch selectors?",shortAnswer:"Yes! Java automatically unboxes `Character` to primitive `char` before evaluation.",explanation:"Autounboxing is supported for all 4 primitive wrappers.",hint:"Autounboxed to primitive char.",level:"basic",codeExample:`Character ch = 'X';
switch (ch) { case 'X': ... }`},{question:"What happens if a `Character` wrapper holding `null` is used in a switch statement?",shortAnswer:"Throws `NullPointerException` during unboxing.",explanation:"Unboxing `null` always throws NPE.",hint:"Throws NullPointerException.",level:"basic",codeExample:`Character c = null;
// switch (c) { } // THROWS NullPointerException`},{question:"Can you switch on a `char` and match against integer literals (e.g. `char c = 'A'; switch (c) { case 65: ... }`)?",shortAnswer:"Yes! `char` is an unsigned 16-bit numeric type, so matching against integer constant `65` is valid.",explanation:"'A' has Unicode integer code point 65.",hint:"char can match against integer constants.",level:"intermediate",codeExample:`char c = 'A';
switch (c) {
    case 65: System.out.println("Matched 65 ('A')"); break;
}`},{question:"What is the role of the `default` label in traditional switch?",shortAnswer:"Executes when none of the explicit `case` constants match the selector value.",explanation:"Topic 8 explores `default` placement and best practices in detail.",hint:"Fallback when no cases match.",level:"basic",codeExample:`default:
    System.out.println("Unknown");
    break;`},{question:"Is the `default` label required in a traditional switch statement?",shortAnswer:"No, `default` is optional, but strongly recommended for defensive coding.",explanation:"If omitted and no cases match, switch terminates without doing anything.",hint:"Optional, but recommended.",level:"basic",codeExample:"// Valid without default"},{question:"Can multiple `case` labels share the same statement block in traditional switch?",shortAnswer:"Yes! Stacking cases (`case 1: case 2: case 3: doWork(); break;`) utilizes intentional fall-through.",explanation:"A standard idiom for grouping multiple options.",hint:"Stacked case labels share code via fall-through.",level:"basic",codeExample:`case 1:
case 2:
case 3:
    processGroup();
    break;`},{question:"What is the difference between switching on an `int` vs switching on a `String` under the hood?",shortAnswer:"`int` switch uses native bytecode jump tables (`tableswitch`); `String` switch compiles into two stages: first hashing with `hashCode()` and testing `.equals()`, then jumping to the corresponding code branch.",explanation:"Topic 10 covers String switch mechanics in depth.",hint:"int switch uses jump tables; String switch uses hashCode and equals.",level:"advanced",codeExample:"// String switch hashes first"},{question:"What is the ultimate takeaway of Module 001_004 Topic 6 for Java developers?",shortAnswer:"Traditional `switch-case` statements provide fast, readable multi-way constant dispatch for `byte`, `short`, `int`, `char`, `String`, and `enum`; case labels must be compile-time constants, selectors cannot be `long`/`float`/`double`/`boolean`/`null`, and inner scopes should be isolated with braces.",explanation:"Essential foundation before mastering Java 14+ modern switch expressions.",hint:"Fast multi-way dispatch on discrete constants; use compile-time constants.",level:"basic",codeExample:"// Summary: switch on int, char, String, enum with constant case labels"},{question:"What is the next topic (Topic 7) in Module 001_004?",shortAnswer:"The 'break' statement in switch-case and understanding intentional vs accidental fall-through.",explanation:"Topic 7 explores `break` semantics, the hazards of accidental fall-through, and legitimate patterns for intentional fall-through.",hint:"The 'break' statement and fall-through mechanics.",level:"basic",codeExample:"// Topic 7: The 'break' statement & fall-through"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowSwitch {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(168, 85, 247, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-switch {
            animation: glowSwitch 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Beginner Foundation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Traditional ",e.jsx("code",{className:"text-purple-400",children:"'switch-case'"})," Statement & Valid Data Types"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master multi-way constant dispatch in Java: valid selector types (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"byte"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"short"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"int"}),", ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"char"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"String"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"enum"}),"), illegal types (",e.jsx("code",{className:"text-rose-400 font-mono",children:"long"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"float"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"double"}),", ",e.jsx("code",{className:"text-rose-400 font-mono",children:"boolean"}),"), compile-time constant case labels, bytecode jump tables (",e.jsx("code",{className:"text-sky-300 font-mono",children:"tableswitch"})," vs ",e.jsx("code",{className:"text-sky-300 font-mono",children:"lookupswitch"}),"), and course track dispatches in Indian Rupees (₹)."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Multi-Way Constant Matching Architecture"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["The ",e.jsxs("strong",{children:["Traditional ",e.jsx("code",{className:"text-purple-400 font-mono",children:"switch-case"})," statement"]})," evaluates a selector expression and transfers execution directly to a matching compile-time constant ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"case"})," label:"]}),e.jsxs("p",{className:"font-mono text-purple-300 bg-slate-950 p-3 rounded-xl border border-slate-800",children:["switch ( selectorExpression ) {",e.jsx("br",{}),"    case CONSTANT_1:",e.jsx("br",{}),"        statement1();",e.jsx("br",{}),"        break;",e.jsx("br",{}),"    case CONSTANT_2:",e.jsx("br",{}),"        statement2();",e.jsx("br",{}),"        break;",e.jsx("br",{}),"    default:",e.jsx("br",{}),"        fallbackStatement();",e.jsx("br",{}),"        break;",e.jsx("br",{}),"}"]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-purple-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-purple-300",children:"Classroom Case Study (Barrackpore Course & Branch Dispatcher):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," built a campus management dispatcher. By switching on integers for course tracks (Java Core ₹15,000 vs Enterprise Spring Boot ₹22,000), transaction strings (",e.jsx("code",{className:"text-sky-300 font-mono",children:'"WITHDRAW"'}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:'"DEPOSIT"'}),"), and location enums (",e.jsx("code",{className:"text-amber-300 font-mono",children:"BARRACKPORE"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"SHYAMNAGAR"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"NAIHATI"}),", ",e.jsx("code",{className:"text-amber-300 font-mono",children:"ICHAPUR"}),"), ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," achieved $O(1)$ routing speed in Indian Rupees (",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹"}),")."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Valid Selector Types & Bytecode Jump Tables"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"Which data types are permitted, which are illegal, and how the JVM optimizes dense integer branches:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Switch Data Types and Jump Table Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradValidTypes",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsxs("linearGradient",{id:"gradIllegalTypes",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e"}),e.jsx("stop",{offset:"100%",stopColor:"#be123c"})]}),e.jsxs("linearGradient",{id:"gradTableSwitch",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6"}),e.jsx("stop",{offset:"100%",stopColor:"#6d28d9"})]})]}),e.jsx("rect",{x:"30",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradValidTypes)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"160",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"1. VALID Selector Types"}),e.jsx("rect",{x:"45",y:"80",width:"230",height:"80",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"55",y:"102",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"• byte, short, int, char"}),e.jsx("text",{x:"55",y:"122",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"• String (Java 7+)"}),e.jsx("text",{x:"55",y:"142",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"• enum types (Java 5+)"}),e.jsx("text",{x:"160",y:"190",fill:"#ecfdf5",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"✓ Supported by JLS §14.11"}),e.jsx("rect",{x:"310",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradIllegalTypes)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"440",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"2. ILLEGAL Selector Types"}),e.jsx("rect",{x:"325",y:"80",width:"230",height:"80",rx:"6",fill:"#4c0519"}),e.jsx("text",{x:"335",y:"102",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"× long (64-bit)"}),e.jsx("text",{x:"335",y:"122",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"× float, double (Rounding)"}),e.jsx("text",{x:"335",y:"142",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"× boolean (Use if-else!)"}),e.jsx("text",{x:"440",y:"190",fill:"#ffe4e6",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"⚠️ Compile-Time Error!"}),e.jsx("rect",{x:"590",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradTableSwitch)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"720",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"3. Bytecode tableswitch"}),e.jsx("rect",{x:"605",y:"80",width:"230",height:"80",rx:"6",fill:"#2e1065"}),e.jsx("text",{x:"615",y:"102",fill:"#ddd6fe",fontSize:"11",fontFamily:"monospace",children:"tableswitch 1 to 4:"}),e.jsx("text",{x:"615",y:"122",fill:"#ddd6fe",fontSize:"10",children:"Direct O(1) indexed jump table"}),e.jsx("text",{x:"615",y:"142",fill:"#ede9fe",fontSize:"10",children:"lookupswitch for sparse keys"}),e.jsx("text",{x:"720",y:"190",fill:"#f5f3ff",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"O(1) Direct Branch Jump"}),e.jsx("text",{x:"440",y:"255",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"JLS §14.11: Case labels must be compile-time constants; null selectors throw NullPointerException."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Data Type Compatibility Matrix for Switch Selector"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Data Type"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Supported in Switch?"}),e.jsx("th",{className:"p-3 font-semibold text-amber-400",children:"Introduced In"}),e.jsx("th",{className:"p-3 font-semibold text-slate-400",children:"JVM Architectural Reason"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"byte, short, int, char"}),e.jsx("td",{className:"p-3 font-semibold text-emerald-400",children:"YES"}),e.jsx("td",{className:"p-3 text-xs",children:"Java 1.0"}),e.jsx("td",{className:"p-3 text-xs",children:"Direct 32-bit integer register jump table"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"enum types"}),e.jsx("td",{className:"p-3 font-semibold text-emerald-400",children:"YES"}),e.jsx("td",{className:"p-3 text-xs",children:"Java 5.0"}),e.jsx("td",{className:"p-3 text-xs",children:"Maps to enum ordinal integer constants"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"String"}),e.jsx("td",{className:"p-3 font-semibold text-emerald-400",children:"YES"}),e.jsx("td",{className:"p-3 text-xs",children:"Java 7.0"}),e.jsx("td",{className:"p-3 text-xs",children:"Compiles to hashCode() table + .equals() verification"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"long"}),e.jsx("td",{className:"p-3 font-semibold text-rose-400",children:"NO"}),e.jsx("td",{className:"p-3 text-xs",children:"N/A"}),e.jsx("td",{className:"p-3 text-xs",children:"64-bit jump tables are memory prohibitive"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"float, double"}),e.jsx("td",{className:"p-3 font-semibold text-rose-400",children:"NO"}),e.jsx("td",{className:"p-3 text-xs",children:"N/A"}),e.jsx("td",{className:"p-3 text-xs",children:"Binary floating-point representation lacks exact equality"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"boolean"}),e.jsx("td",{className:"p-3 font-semibold text-rose-400",children:"NO"}),e.jsx("td",{className:"p-3 text-xs",children:"N/A"}),e.jsx("td",{className:"p-3 text-xs",children:"Binary state (true/false) is optimally handled by if-else"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"TraditionalSwitchCaseDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program illustrates traditional switch dispatching on primitive integers, characters, Java 7 Strings, and Java 5 Enums in Indian Rupees (₹)."}),e.jsx(t,{fileModule:i,title:"TraditionalSwitchCaseDemo.java",highlightLines:[25,26,29,32,42,45,68,71,84,87]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Variable Scope Collision Across Cases"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Declaring ",e.jsx("code",{className:"text-rose-300 font-mono",children:"int temp = 10;"})," in case 1 and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"int temp = 20;"})," in case 2 causes a compile error because the entire switch block shares a single scope!"]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Enclose each case body in curly braces: ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"case 1: { int temp = 10; break; }"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Unqualified Enum Names in Case Labels"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Always write ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"case BARRACKPORE:"})," instead of ",e.jsx("code",{className:"text-rose-300 font-mono",children:"case StudentBranch.BARRACKPORE:"}),". The compiler already knows the enum type from the selector."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why can't we switch on `long` (64-bit) in Java?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," JVM Bytecode Architecture! The Java Virtual Machine uses the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"tableswitch"})," instruction, which generates an indexed jump table based on 32-bit signed integer offsets. Indexing a 64-bit space would require massive multi-gigabyte lookup tables in memory, which is completely unfeasible!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Traditional switch-case FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:r,title:"Module 001_004 Topic 6: Traditional 'switch-case' Statement",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_004_topic6_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: The switch statement is your fastest multi-way routing tool. Remember valid types (byte/short/int/char/String/enum) and always keep case labels as compile-time constants. In Topic 7, we explore the 'break' statement and intentional vs accidental fall-through! — Sukanta Hui"})})]})}export{b as default};
