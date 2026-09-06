import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * File: NestedIfElseDanglingElseDemo.java\r
 * Module: 001_004_decision-making-and-modern-switch (Topic 3)\r
 * Description: Demonstrates Java Nested 'if-else' statements,\r
 *              the famous Dangling Else ambiguity and grammar resolution rule (JLS §14.9.2),\r
 *              misleading indentation defects, curly brace disambiguation,\r
 *              guard clause flattening, and student multi-tier scholarship auditing in Indian Rupees (₹).\r
 * Educator: Sukanta Hui | Coder & AccoTax, Barrackpore\r
 */\r
\r
package com.coderaccotax.javatutorial.controlflow;\r
\r
public class NestedIfElseDanglingElseDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("================================================================================");\r
        System.out.println("CODER & ACCOTAX - JAVA CORE: TOPIC 3 NESTED IF-ELSE & DANGLING ELSE AMBIGUITY");\r
        System.out.println("Educator: Sukanta Hui | Location: Barrackpore, West Bengal");\r
        System.out.println("================================================================================\\n");\r
\r
        // 1. The Famous Dangling Else Ambiguity (Misleading Indentation)\r
        System.out.println("--- 1. THE DANGLING ELSE AMBIGUITY (PARSING TRAP) ---");\r
        int score = 85;\r
        boolean hasAttendance = false;\r
\r
        System.out.println("Testing with: score = 85, hasAttendance = false");\r
        \r
        // Misleading indentation (Human expects else to belong to 'score >= 80'):\r
        if (score >= 80)\r
            if (hasAttendance)\r
                System.out.println("Result: Honors Degree Granted!");\r
        else\r
            System.out.println("⚠️ [MISLEADING INDENTATION BUG]: Else belonged to 'hasAttendance', NOT 'score'!");\r
\r
        // 2. Disambiguating with Explicit Curly Braces '{}'\r
        System.out.println("\\n--- 2. DISAMBIGUATING WITH EXPLICIT CURLY BRACES ---");\r
        // Desired Logic: If score >= 80, check attendance; otherwise say 'Score below 80':\r
        if (score >= 80) {\r
            if (hasAttendance) {\r
                System.out.println("✓ Honors Degree Granted!");\r
            } else {\r
                System.out.println("✓ Score is high, but attendance requirement missed.");\r
            }\r
        } else {\r
            System.out.println("✓ Score below honors threshold (80).");\r
        }\r
\r
        // 3. Multi-Tier Scholarship Qualification Ledger (Barrackpore Center)\r
        System.out.println("\\n--- 3. BARRACKPORE MULTI-TIER SCHOLARSHIP AUDITING ---");\r
        auditScholarshipTier("Swadeep", 92, 120000.0, true);\r
        auditScholarshipTier("Tuhina", 88, 350000.0, true);\r
        auditScholarshipTier("Debangshu", 65, 80000.0, false);\r
\r
        // 4. Refactoring Nested Pyramids into Clean Guard Clauses\r
        System.out.println("\\n--- 4. REFACTORING NESTED IF-ELSE TO FLAT GUARD CLAUSES ---");\r
        auditAccessWithGuardClauses("Abhronila", true, true, 95);\r
\r
        System.out.println("\\n================================================================================");\r
        System.out.println("KEY TAKEAWAYS FOR STUDENTS (Swadeep, Tuhina, Abhronila, Debangshu):");\r
        System.out.println("1. In unbraced code, 'else' ALWAYS attaches to the closest preceding unclosed 'if'.");\r
        System.out.println("2. Indentation is ignored by the Java compiler; braces '{}' dictate true structure.");\r
        System.out.println("3. Always use curly braces to eliminate the Dangling Else trap entirely.");\r
        System.out.println("4. Flatten deeply nested if-else structures using guard clauses and '&&' operators.");\r
        System.out.println("================================================================================");\r
    }\r
\r
    private static void auditScholarshipTier(String name, int academicScore, double familyIncome, boolean isBarrackporeResident) {\r
        System.out.printf("Auditing Student: %-10s | Score: %2d%% | Income: ₹%,.2f | Resident: %b%n",\r
                name, academicScore, familyIncome, isBarrackporeResident);\r
\r
        if (academicScore >= 85) {\r
            if (familyIncome <= 200000.0) {\r
                System.out.println("-> [TIER 1 SCHOLARSHIP]: 100% Full Tuition Waiver (₹15,000 value)");\r
            } else {\r
                if (isBarrackporeResident) {\r
                    System.out.println("-> [TIER 2 SCHOLARSHIP]: 50% Merit-Cum-Means Waiver (₹7,500 value)");\r
                } else {\r
                    System.out.println("-> [TIER 3 SCHOLARSHIP]: 25% High-Merit Waiver (₹3,750 value)");\r
                }\r
            }\r
        } else {\r
            System.out.println("-> [INELIGIBLE]: Academic score below scholarship threshold (85%)");\r
        }\r
        System.out.println();\r
    }\r
\r
    private static void auditAccessWithGuardClauses(String name, boolean hasPaidFee, boolean hasIdCard, int examScore) {\r
        System.out.printf("Guard Clause Audit for %s:%n", name);\r
\r
        // Guard 1: Fee validation\r
        if (!hasPaidFee) {\r
            System.out.println("-> Access Denied: Unpaid tuition fees.");\r
            return;\r
        }\r
\r
        // Guard 2: ID validation\r
        if (!hasIdCard) {\r
            System.out.println("-> Access Denied: Missing student ID card.");\r
            return;\r
        }\r
\r
        // Guard 3: Exam score validation\r
        if (examScore < 80) {\r
            System.out.println("-> Access Denied: Exam score below lab threshold.");\r
            return;\r
        }\r
\r
        // Happy path (Clean and Flat!):\r
        System.out.println("-> ✓ Access Granted to Advanced Java Laboratory!");\r
    }\r
}\r
`,r=`================================================================================\r
CODER & ACCOTAX - JAVA CORE COMPLETE ROADMAP\r
MODULE 001_004: Decision Making, Branching & Modern Switch Expressions\r
TOPIC 3: Nested 'if-else' Statements & Resolving the Dangling Else Ambiguity\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- What is a Nested 'if-else'?\r
  * An 'if' or 'if-else' statement located inside the body of another 'if' or 'else'.\r
  * Enables multi-tier hierarchical decision trees.\r
\r
- The Dangling Else Ambiguity (JLS §14.5):\r
  * In unbraced code:\r
    if (a)\r
        if (b)\r
            statement1();\r
    else\r
        statement2();\r
  * Java's Grammar Rule: An 'else' is ALWAYS paired with the nearest preceding\r
    unclosed 'if' (in this case, 'if (b)').\r
  * Misleading Indentation Hazard: The compiler ignores whitespace!\r
    Visually indenting 'else' under 'if (a)' DOES NOT attach it to 'if (a)'.\r
\r
- The Universal Solution:\r
  * ALWAYS use explicit curly braces '{}' around every statement block!\r
    if (a) {\r
        if (b) { statement1(); }\r
    } else {\r
        statement2(); // Unambiguously belongs to if (a)\r
    }\r
\r
- Clean Refactoring Strategies:\r
  1. Combine with logical AND (&&): if (a && b) { ... }\r
  2. Guard Clauses (Early Returns): Flatten pyramids by inverting conditions.\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Never write unbraced nested if statements.\r
[✓] Keep nesting depth <= 2 levels.\r
[✓] Flatten the "Pyramid of Doom" using early guard clause returns.\r
[✓] Combine dependent boolean checks with '&&' where possible.\r
================================================================================\r
`,l=[{question:"What is a Nested 'if-else' statement in Java?",shortAnswer:"An `if` or `if-else` statement placed inside the body of another `if` or `else` block.",explanation:"Used to create hierarchical decision trees when a condition depends on the outcome of a previous condition.",hint:"An if-else statement enclosed inside another if-else block.",level:"basic",codeExample:`if (score >= 80) {
    if (attendance >= 75) { grantPass(); }
}`},{question:"What is the Dangling Else Problem in programming language grammar?",shortAnswer:"The syntactic ambiguity that arises when an `else` follows two nested `if` statements without braces, making it ambiguous which `if` the `else` belongs to.",explanation:"E.g., `if (A) if (B) s1(); else s2();`.",hint:"Ambiguity of which if an else belongs to in unbraced code.",level:"intermediate",codeExample:`if (a)
    if (b)
        s1();
    else
        s2(); // To which 'if' does this belong?`},{question:"How does the Java compiler resolve the Dangling Else ambiguity (JLS §14.5)?",shortAnswer:"An `else` is ALWAYS paired with the nearest preceding unclosed `if` statement.",explanation:"In `if (a) if (b) s1(); else s2();`, the `else` belongs to `if (b)`.",hint:"Binds to the closest preceding open if.",level:"basic",codeExample:"// 'else' binds to 'if (b)'"},{question:"Why is Misleading Indentation dangerous with the Dangling Else in Java?",shortAnswer:"Because Java is free-format and ignores indentation; visual indentation may make humans think `else` belongs to the outer `if`, but the compiler attaches it to the inner `if`!",explanation:"Causes subtle, silent logic defects during maintenance.",hint:"Compiler ignores whitespace/indentation.",level:"intermediate",codeExample:`if (a)
    if (b)
        s1();
else // Indented under 'a', but compiler attaches to 'b'!
    s2();`},{question:"How do you definitively resolve the Dangling Else problem in Java?",shortAnswer:"By wrapping every statement body in explicit curly braces `{}`.",explanation:"Braces explicitly define the scope of every block, eliminating grammar ambiguity.",hint:"Use curly braces {} on every if statement.",level:"basic",codeExample:`if (a) {
    if (b) {
        s1();
    }
} else {
    s2(); // Unambiguously belongs to if (a)
}`},{question:"What is the result of `int x = 5, y = 10; if (x > 0) if (y < 5) x = 1; else x = 2; System.out.println(x);`?",shortAnswer:"`2`.",explanation:"`x > 0` is true; `y < 5` is false; the `else` (bound to `y < 5`) executes, setting `x = 2`.",hint:"Else belongs to inner if (y < 5).",level:"basic",codeExample:`int x = 5, y = 10;
if (x > 0) if (y < 5) x = 1; else x = 2; // x = 2`},{question:"What is the result of `int x = -5, y = 10; if (x > 0) if (y < 5) x = 1; else x = 2; System.out.println(x);`?",shortAnswer:"`-5`.",explanation:"`x > 0` is false, so the entire inner `if-else` construct is skipped completely!",hint:"Outer if is false, entire inner structure is skipped.",level:"intermediate",codeExample:`int x = -5, y = 10;
if (x > 0) if (y < 5) x = 1; else x = 2; // x remains -5`},{question:"What is the Arrow Anti-Pattern (Pyramid of Doom)?",shortAnswer:"Code characterized by deep, rightward-drifting nested `if-else` blocks that resemble an arrow or pyramid shape, making it difficult to read and test.",explanation:"Drastically increases cyclomatic complexity and mental cognitive load.",hint:"Deep rightward nested code indentation.",level:"intermediate",codeExample:"if (a) { if (b) { if (c) { if (d) { ... } } } }"},{question:"How do Guard Clauses eliminate the Pyramid of Doom?",shortAnswer:"By inverting conditions and returning early (`if (!condition) return;`), keeping the 'happy path' unnested and flat.",explanation:"Significantly enhances code maintainability.",hint:"Return early on failure conditions to flatten nesting.",level:"basic",codeExample:`if (!isValid(student)) return;
if (!hasPaid(student)) return;
processEnrollment(student);`},{question:"How can nested conditions like `if (a) { if (b) { doAction(); } }` be simplified?",shortAnswer:"Combine them into a single `if` statement using the logical AND operator: `if (a && b) { doAction(); }`.",explanation:"Eliminates unnecessary nesting while preserving short-circuit evaluation.",hint:"Combine with logical AND (&&).",level:"basic",codeExample:"if (a && b) { doAction(); }"},{question:"In the Coder & AccoTax Barrackpore scholarship engine, how does nested `if-else` classify students?",shortAnswer:"First checks academic score ($ge 85%$). If true, checks family income ($le 200,000$) for a Tier 1 full waiver, then checks local residence in Barrackpore for Tier 2 vs Tier 3 waivers in Indian Rupees (₹).",explanation:"Demonstrates multi-tier hierarchical eligibility decision trees.",hint:"Hierarchical checks: score → income → residence.",level:"basic",codeExample:`if (score >= 85) {
    if (income <= 200000) { tier1(); }
    else if (isResident) { tier2(); }
}`},{question:"Can an `else` block contain a nested `if-else` statement?",shortAnswer:"Yes! Writing an `if-else` inside an `else` block creates multi-way branching (the basis for `else-if` ladders).",explanation:"Completely standard in Java.",hint:"Nested inside else block.",level:"basic",codeExample:"if (c1) { } else { if (c2) { } else { } }"},{question:"What is the maximum nesting depth of `if` statements allowed by the Java compiler?",shortAnswer:"There is no explicit language specification limit, but JVM method bytecode stack limits and class file size limits (64KB method limit) apply.",explanation:"Clean code practices mandate keeping nesting $le 2$ or 3 levels.",hint:"Practically limited by method byte size; keep nesting <= 3.",level:"advanced",codeExample:"// Keep nesting shallow for maintainability"},{question:"What is Cyclomatic Complexity in relation to nested `if-else` statements?",shortAnswer:"Each nested `if` or `else if` adds 1 to the cyclomatic complexity score of the method.",explanation:"Deep nesting rapidly elevates complexity to unacceptable levels.",hint:"Each if branch adds 1 to complexity.",level:"advanced",codeExample:"// 4 nested if statements = complexity 5+"},{question:"What bytecode instruction is generated when exiting a nested `if` block?",shortAnswer:"A `goto` instruction that jumps past all remaining sibling `else` blocks to the end of the outer statement.",explanation:"Standard control flow jump opcode.",hint:"goto opcode jumps to the end label.",level:"advanced",codeExample:"// Bytecode: goto LABEL_END"},{question:'What is the result of `if (true) if (false) System.out.print("1"); else System.out.print("2");`?',shortAnswer:'`"2"`.',explanation:'The `else` binds to `if (false)`, executing `System.out.print("2")`.',hint:"Prints 2.",level:"basic",codeExample:'if (true) if (false) System.out.print("1"); else System.out.print("2"); // 2'},{question:'What is the result of `if (false) if (true) System.out.print("1"); else System.out.print("2");`?',shortAnswer:"Nothing is printed!",explanation:"Outer `if (false)` skips the entire nested construct including the `else`.",hint:"Prints nothing because outer if is false.",level:"basic",codeExample:'if (false) if (true) System.out.print("1"); else System.out.print("2"); // No output'},{question:"How does Python avoid the Dangling Else problem compared to Java?",shortAnswer:"Python uses mandatory whitespace indentation to define code blocks, whereas Java relies on curly braces `{}` and treats indentation as cosmetic.",explanation:"In Java, indentation has zero semantic meaning.",hint:"Python uses indentation; Java uses braces {}.",level:"intermediate",codeExample:"// Java: Braces {} are mandatory for disambiguation"},{question:"Can an inner nested block access variables declared in the outer `if` block?",shortAnswer:"Yes! Lexical scoping allows inner nested blocks to access all variables declared in enclosing outer blocks.",explanation:"Standard Java lexical variable scope.",hint:"Inner blocks can access outer variables.",level:"basic",codeExample:`if (true) {
    int outerVar = 10;
    if (true) {
        System.out.println(outerVar); // Accessible
    }
}`},{question:"Can an outer `if` block access variables declared in an inner nested `if` block?",shortAnswer:"No! Variables declared in an inner block go out of scope at the inner closing brace `}`.",explanation:"Block scope prevents outer access to inner variables.",hint:"Inaccessible outside inner block.",level:"basic",codeExample:`if (true) {
    if (true) { int innerVar = 20; }
    // innerVar not accessible here
}`},{question:"What is the 'Bouncer Pattern' in programming?",shortAnswer:"Another term for Guard Clauses: validating inputs at the 'door' (start of method) and rejecting invalid calls immediately.",explanation:"Named after nightclub bouncers checking IDs at the entrance.",hint:"Checking preconditions at the entrance of a method.",level:"basic",codeExample:"if (!isAuthorized(user)) throw new SecurityException();"},{question:"What happens if a nested `if` condition mutates a variable used by the outer `else` block?",shortAnswer:"The outer `else` block will never execute because the inner block only runs when the outer `if` is `true`.",explanation:"Mutually exclusive outer branches.",hint:"Outer else never runs if outer if is true.",level:"intermediate",codeExample:"// Outer if and outer else cannot both run"},{question:"What is the recommended rule of thumb for maximum nesting in enterprise Java?",shortAnswer:"Keep nesting $\\le 2$ levels deep. If a 3rd level is required, refactor using helper methods, guard clauses, or switch expressions.",explanation:"Clean Code guideline by Robert C. Martin (Uncle Bob).",hint:"Maximum 2 levels of nesting.",level:"intermediate",codeExample:"// Refactor deep nesting into private helper methods"},{question:"Can nested `if-else` statements be replaced by polymorphic dispatch or Strategy Pattern?",shortAnswer:"Yes! In Object-Oriented Design, complex nested decision trees based on types or roles are often replaced by polymorphism.",explanation:"Eliminates large conditional structures by delegating to specialized subclasses.",hint:"Replace conditionals with polymorphism.",level:"advanced",codeExample:`DiscountStrategy strategy = student.getDiscountStrategy();
strategy.applyDiscount();`},{question:"What is the result of `if (a) { if (b) s1; } else s2;`?",shortAnswer:"`s2` executes whenever `a` is `false` (regardless of `b`), while `s1` executes when both `a` and `b` are `true`.",explanation:"The curly braces clearly associate the `else` with `if (a)`.",hint:"Else belongs to if (a).",level:"basic",codeExample:`if (a) {
    if (b) s1;
} else s2;`},{question:"How does the Java compiler prevent dangling else ambiguity in its internal grammar?",shortAnswer:"The Java grammar specifies two distinct statement rules: `Statement` and `StatementNoShortIf`, formally binding `else` to the closest preceding unclosed `if` during LR/LALR parsing.",explanation:"Formal grammar design in JLS §14.5.",hint:"Grammar explicitly defines StatementNoShortIf production rules.",level:"expert",codeExample:"// JLS §14.5 StatementNoShortIf formal grammar"},{question:"What happens when you combine nested `if-else` with ternary operators in unreadable code?",shortAnswer:"Creates 'Nested Ternary Hell' (`a ? b ? c : d : e ? f : g`), which is considered an extreme anti-pattern in industry.",explanation:"Never nest more than one ternary operator; use structured if-else or modern switch instead.",hint:"Avoid deeply nested ternary operators.",level:"basic",codeExample:'// Anti-pattern: String s = a ? (b ? "1" : "2") : (c ? "3" : "4");'},{question:"In the Coder & AccoTax Barrackpore curriculum, why are students taught guard clauses early?",shortAnswer:"Because writing guard clauses builds professional habits: writing flat, readable, bug-free, and easily unit-testable Java code from day one.",explanation:"Essential clean coding pedagogy in Barrackpore.",hint:"Promotes clean, flat, testable architecture.",level:"basic",codeExample:"// Guard clauses ensure clean production software"},{question:"What is the ultimate takeaway of Module 001_004 Topic 3 for Java developers?",shortAnswer:"The Dangling Else ambiguity proves that indentation is purely cosmetic in Java; always use curly braces `{}` to define unambiguous decision blocks, and refactor nested pyramids into flat guard clauses.",explanation:"Mastering nested if-else structures and disambiguation guarantees clean, bug-free code.",hint:"Always use braces {} to eliminate dangling else; flatten with guard clauses.",level:"basic",codeExample:"// Summary: Always use braces {} and guard clauses to eliminate nesting traps"},{question:"What is the next topic (Topic 4) in Module 001_004?",shortAnswer:"'else-if' ladder for multi-branch evaluations.",explanation:"Topic 4 explores sequential multi-tier evaluations, grading systems, income tax slab calculators, and boundary edge cases.",hint:"'else-if' ladder for multi-branch evaluations.",level:"basic",codeExample:"// Topic 4: else-if ladder"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          @keyframes glowNested {
            0%, 100% { filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.4)); }
            50% { filter: drop-shadow(0 0 14px rgba(168, 85, 247, 0.8)); }
          }
          .animate-fade-in {
            animation: fadeIn 0.5s ease-out forwards;
          }
          .animate-glow-nest {
            animation: glowNested 3s ease-in-out infinite;
          }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 001_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Beginner Foundation"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Nested ",e.jsx("code",{className:"text-purple-400",children:"'if-else'"})," & Resolving the Dangling Else Ambiguity"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master hierarchical decision trees in Java: resolving the famous Dangling Else ambiguity (JLS §14.5), avoiding misleading indentation traps, disambiguating scope with curly braces (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"{}"}),"), refactoring pyramids of doom into clean guard clauses, and student scholarship tier audits in Indian Rupees (₹)."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," The Dangling Else Ambiguity & Grammar Resolution"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["When ",e.jsx("code",{className:"text-sky-300 font-mono",children:"if"})," statements are nested without curly braces, an ambiguity arises:"]}),e.jsxs("p",{className:"font-mono text-rose-400 bg-slate-950 p-3 rounded-xl border border-slate-800",children:["if ( conditionA )",e.jsx("br",{}),"    if ( conditionB )",e.jsx("br",{}),"        statement1();",e.jsx("br",{}),"else",e.jsx("br",{}),"    statement2(); // ⚠️ To which 'if' does this 'else' belong?"]}),e.jsxs("p",{children:[e.jsx("strong",{children:"Java's Grammar Rule (JLS §14.5):"})," An ",e.jsx("code",{className:"text-amber-300 font-mono",children:"else"})," is ",e.jsxs("strong",{children:["ALWAYS paired with the nearest preceding unclosed ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"if"})," statement"]})," (in this case, ",e.jsx("code",{className:"text-sky-300 font-mono",children:"if (conditionB)"}),"!).",e.jsx("br",{}),"Because Java is free-format and ignores indentation, humans frequently misinterpret the code. The only bulletproof solution is to ",e.jsxs("strong",{children:["always use explicit curly braces ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"{}"})]}),"."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-purple-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-purple-300",children:"Classroom Case Study (Barrackpore Scholarship Matrix):"}),e.jsxs("p",{className:"text-sm leading-relaxed",children:["In our Barrackpore laboratory, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," audited multi-tier tuition waivers. By structuring nested checks (academic score ≥ 85% → family income ≤ ₹2,00,000 for Tier 1 Full Waiver vs local residence for Tier 2/3 waivers), ",e.jsx("strong",{children:"Abhronila"})," and ",e.jsx("strong",{children:"Debangshu"})," eliminated dangling else errors and refactored deep pyramids into flat guard clauses in Indian Rupees (",e.jsx("code",{className:"text-emerald-400 font-semibold",children:"₹"}),") across Naihati and Shyamnagar."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," The Dangling Else Parse Tree vs. Guard Clause Flattening"]}),e.jsx("p",{className:"text-sm md:text-base text-slate-400 leading-relaxed",children:"How the compiler binds unbraced else branches and how guard clauses flatten nested pyramids:"}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 880 290",className:"w-full h-auto","aria-label":"Dangling Else Ambiguity and Guard Clauses Diagram",children:[e.jsxs("defs",{children:[e.jsxs("linearGradient",{id:"gradDangleTrap",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#f43f5e"}),e.jsx("stop",{offset:"100%",stopColor:"#be123c"})]}),e.jsxs("linearGradient",{id:"gradBraceFix",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#10b981"}),e.jsx("stop",{offset:"100%",stopColor:"#047857"})]}),e.jsxs("linearGradient",{id:"gradGuardFlat",x1:"0%",y1:"0%",x2:"100%",y2:"100%",children:[e.jsx("stop",{offset:"0%",stopColor:"#8b5cf6"}),e.jsx("stop",{offset:"100%",stopColor:"#6d28d9"})]})]}),e.jsx("rect",{x:"30",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradDangleTrap)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"160",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"1. Unbraced Dangling Else"}),e.jsx("rect",{x:"45",y:"80",width:"230",height:"80",rx:"6",fill:"#4c0519"}),e.jsx("text",{x:"55",y:"102",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"if (A) if (B) s1();"}),e.jsx("text",{x:"55",y:"122",fill:"#fca5a5",fontSize:"11",fontFamily:"monospace",children:"else s2();"}),e.jsx("text",{x:"55",y:"142",fill:"#fecdd3",fontSize:"10",children:"Else attaches to B, NOT A!"}),e.jsx("text",{x:"160",y:"190",fill:"#ffe4e6",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Misleading Indentation"}),e.jsx("rect",{x:"310",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradBraceFix)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"440",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"2. Explicit Braces {}"}),e.jsx("rect",{x:"325",y:"80",width:"230",height:"80",rx:"6",fill:"#022c22"}),e.jsx("text",{x:"335",y:"102",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"if (A) { if (B) s1(); }"}),e.jsx("text",{x:"335",y:"122",fill:"#a7f3d0",fontSize:"11",fontFamily:"monospace",children:"else { s2(); }"}),e.jsx("text",{x:"335",y:"142",fill:"#d1fae5",fontSize:"10",children:"Else belongs to A 100%!"}),e.jsx("text",{x:"440",y:"190",fill:"#ecfdf5",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Unambiguous Scope"}),e.jsx("rect",{x:"590",y:"40",width:"260",height:"180",rx:"10",fill:"url(#gradGuardFlat)",opacity:"0.9",className:"hover:opacity-100 transition-opacity"}),e.jsx("text",{x:"720",y:"65",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"3. Guard Clause Flattening"}),e.jsx("rect",{x:"605",y:"80",width:"230",height:"80",rx:"6",fill:"#2e1065"}),e.jsx("text",{x:"615",y:"102",fill:"#ddd6fe",fontSize:"11",fontFamily:"monospace",children:"if (!hasPaid) return;"}),e.jsx("text",{x:"615",y:"122",fill:"#ddd6fe",fontSize:"11",fontFamily:"monospace",children:"if (!hasId) return;"}),e.jsx("text",{x:"615",y:"142",fill:"#ede9fe",fontSize:"10",children:"Flattens Pyramid of Doom!"}),e.jsx("text",{x:"720",y:"190",fill:"#f5f3ff",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Clean Architecture"}),e.jsx("text",{x:"440",y:"255",fill:"#94a3b8",fontSize:"12",textAnchor:"middle",children:"JLS §14.5: Always use curly braces {} and return early using guard clauses to maintain readability."})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📊"})," Dangling Else Evaluation Behavior Matrix"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"border-b border-slate-700 text-slate-300 bg-slate-900/50",children:[e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Condition A"}),e.jsx("th",{className:"p-3 font-semibold text-sky-400",children:"Condition B"}),e.jsx("th",{className:"p-3 font-semibold text-rose-400",children:"Unbraced Execution (Dangling Else)"}),e.jsx("th",{className:"p-3 font-semibold text-emerald-400",children:"Braced Execution (Else on A)"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"Executes statement1"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"Executes statement1"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"false"}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"Executes statement2 (Else on B!)"}),e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"Does nothing (B is false)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"false"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"true"}),e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"Does nothing (A is false)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"Executes statement2 (Else on A!)"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/30 transition-colors",children:[e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"false"}),e.jsx("td",{className:"p-3 font-mono text-rose-400",children:"false"}),e.jsx("td",{className:"p-3 font-mono text-slate-400",children:"Does nothing (A is false)"}),e.jsx("td",{className:"p-3 font-mono text-emerald-400",children:"Executes statement2 (Else on A!)"})]})]})]})})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Compilable Java Source Code"]}),e.jsx("span",{className:"text-xs font-mono text-slate-400 bg-slate-900 px-3 py-1 rounded-full border border-slate-700",children:"NestedIfElseDanglingElseDemo.java"})]}),e.jsx("p",{className:"text-sm text-slate-300 leading-relaxed",children:"The following program illustrates the unbraced dangling else parsing trap, curly brace disambiguation, a multi-tier student scholarship matrix, and guard clause refactoring in Indian Rupees (₹)."}),e.jsx(t,{fileModule:i,title:"NestedIfElseDanglingElseDemo.java",highlightLines:[25,26,29,36,37,43,62,63,66,80,86,92]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-2xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Industry Best Practices"]}),e.jsxs("div",{className:"space-y-4",children:[e.jsxs("div",{className:"p-4 rounded-xl bg-rose-950/20 border border-rose-900/50 space-y-2",children:[e.jsxs("p",{className:"text-rose-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"❌"})," Pitfall 1: Relying on Indentation to Structure Nested Logic"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Indenting ",e.jsx("code",{className:"text-rose-300 font-mono",children:"else"})," under an outer ",e.jsx("code",{className:"text-sky-300 font-mono",children:"if"})," statement has zero effect on the compiler. The else always binds to the inner if!"]}),e.jsxs("p",{className:"text-xs text-emerald-400 font-mono",children:[e.jsx("strong",{children:"Best Practice:"})," Always use explicit curly braces ",e.jsx("code",{className:"bg-slate-900 px-1 py-0.5 rounded",children:"{}"}),"."]})]}),e.jsxs("div",{className:"p-4 rounded-xl bg-emerald-950/20 border border-emerald-900/50 space-y-2",children:[e.jsxs("p",{className:"text-emerald-300 font-semibold flex items-center gap-2 text-sm md:text-base",children:[e.jsx("span",{children:"🛡️"})," Best Practice: Use Guard Clauses to Flatten Deep Pyramids"]}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300 leading-relaxed",children:["Invert precondition checks and return early (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"if (!valid) return;"}),"), keeping your core business logic unnested and clean."]})]})]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg hover:border-slate-700 transition-all duration-300",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"💡"})," Think About This..."]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["🤔 ",e.jsx("em",{children:"“Why is the ‘Pyramid of Doom’ considered one of the worst anti-patterns in software engineering?”"})]}),e.jsxs("p",{children:["👉 ",e.jsx("strong",{children:"Hint:"})," Cognitive Overload & Cyclomatic Explosion! When code nests 4 or 5 levels deep, each branch multiplies the number of paths an engineer must hold in their head simultaneously. Testing becomes difficult, bugs hide in edge cases, and code reviews slow down. By refactoring to ",e.jsx("code",{className:"text-emerald-400 font-bold",children:"Guard Clauses"}),", you flatten the structure into a linear checklist!"]})]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Nested 'if-else' & Dangling Else FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:r,title:"Module 001_004 Topic 3: Nested 'if-else' & Dangling Else Ambiguity",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"001_004_topic3_note.txt"})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{note:"To Swadeep, Tuhina, Abhronila, and Debangshu: The Dangling Else problem is a classic milestone in your programming journey. Always use curly braces to state your intent clearly, and use guard clauses to keep your methods flat and readable. In Topic 4, we explore the 'else-if' ladder for multi-branch evaluations! — Sukanta Hui"})})]})}export{f as default};
