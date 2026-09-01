import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 9: Pattern Matching for instanceof (Java 16+ Standard - JEP 394)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class PatternMatchingInstanceOfDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: PATTERN MATCHING FOR INSTANCEOF - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Object mysteryObject1 = "Swadeep Paul (Barrackpore)";\r
        Object mysteryObject2 = 94.5;\r
        Object mysteryObject3 = new Student(101, "Tuhina Das");\r
\r
        System.out.println(">>> TESTING MODERN PATTERN MATCHING INSTANCEOF:");\r
        inspectObject(mysteryObject1);\r
        inspectObject(mysteryObject2);\r
        inspectObject(mysteryObject3);\r
\r
        // Conditional Pattern Matching with Flow Scoping (using && operator):\r
        Object textObj = "   Java Core 21 LTS   ";\r
        if (textObj instanceof String s && !s.isBlank()) {\r
            System.out.println("\\n>>> Pattern with Guard (&& s.isBlank()): Trimmed -> '" + s.trim() + "'");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static void inspectObject(Object obj) {\r
        // Modern Java 16+: Combines type check and casting into one step!\r
        if (obj instanceof String s) {\r
            System.out.println("  - Matched String  : " + s.toUpperCase() + " (Length: " + s.length() + ")");\r
        } else if (obj instanceof Double d) {\r
            System.out.println("  - Matched Double  : " + d + " (Formatted: " + String.format("%.2f", d) + "%)");\r
        } else if (obj instanceof Student s) {\r
            System.out.println("  - Matched Student : ID " + s.id() + ", Name: " + s.name());\r
        }\r
    }\r
\r
    record Student(int id, String name) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 9: Pattern Matching for instanceof (JEP 394)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PATTERN MATCHING INSTANCEOF SYNTAX:\r
   - Before Java 16:\r
     'if (obj instanceof String) { String s = (String) obj; System.out.println(s.length()); }'\r
   - Modern Java 16+:\r
     'if (obj instanceof String s) { System.out.println(s.length()); }'\r
\r
2. FLOW SCOPING (Scoping Rules):\r
   - The pattern variable 's' is in scope ONLY in branches where the pattern has matched.\r
   - Allowed in '&&' expressions:\r
     'if (obj instanceof String s && s.length() > 5)' → Legal (s is in scope on RHS of &&).\r
   - NOT allowed in '||' expressions:\r
     'if (obj instanceof String s || s.length() > 5)' → Compile error (s might not match).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why is 'if (obj instanceof String s || s.length() > 5)' a compilation error?",shortAnswer:"Because if obj is NOT a String, the left side is false and evaluation continues to the right side of the || operator where s was never initialized or bound, violating type safety.",explanation:"Flow scoping ensures pattern variables are only accessible when the type check definitely succeeded.",hint:"s is not definitely assigned on the right-hand side of || operator.",level:"Intermediate",codeExample:"// COMPILE ERROR: if (obj instanceof String s || s.length() > 0)"},{question:"Is pattern variable s in scope after an early return guard check?",shortAnswer:"Yes! If you write 'if (!(obj instanceof String s)) return;', the pattern variable s remains in scope for the remainder of the method block.",explanation:"Flow scoping recognizes that reaching subsequent lines implies obj was indeed a String.",hint:"Yes, flow scoping makes s available after a negative early return.",level:"Advanced",codeExample:"if (!(obj instanceof String s)) return; System.out.println(s.toUpperCase()); // Legal!"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Pattern Matching for ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"instanceof (JEP 394)"}),": Eliminating Explicit Casts"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Modern type testing: combining instanceof check and variable declaration into a single step, eliminating boilerplate (Type) obj casts."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"PatternMatchingInstanceOfDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Modern Java Features FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_009 Topic 9: Pattern Matching for instanceof",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic9_pattern_matching_instanceof_note.txt"})}),e.jsx(a,{note:"Gone are the days of writing if (obj instanceof String) { String s = (String) obj; }! In modern Java, just write if (obj instanceof String s) and variable s is immediately available and typed! — Sukanta Hui"})]})}export{b as default};
