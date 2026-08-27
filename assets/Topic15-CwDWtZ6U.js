import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 15: Best Practices for Optional - Brian Goetz's Rules of Engagement\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class BrianGoetzOptionalRulesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: BRIAN GOETZ'S OPTIONAL RULES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 5 GOLDEN RULES OF OPTIONAL (BY BRIAN GOETZ):");\r
        System.out.println("  Rule 1: Never declare a variable of type Optional whose value is null! (Use Optional.empty())");\r
        System.out.println("  Rule 2: Never call optional.get() unless you can prove isPresent() is true (Prefer orElse/orElseGet).");\r
        System.out.println("  Rule 3: Prefer orElseGet() over orElse() whenever creating new objects or calling methods.");\r
        System.out.println("  Rule 4: Do NOT use Optional in fields, method parameters, or collection values.");\r
        System.out.println("  Rule 5: Use Optional primarily as a METHOD RETURN TYPE to signal possible absence.\\n");\r
\r
        // Demonstration of Rule 1:\r
        Optional<String> badOptional = null; // ANTI-PATTERN!\r
        Optional<String> goodOptional = Optional.empty(); // CORRECT!\r
\r
        System.out.println(">>> Rule 1 Anti-Pattern: Optional variable itself set to null!");\r
        System.out.println("    - goodOptional.isPresent() -> " + goodOptional.isPresent() + " (Safe)");\r
        System.out.println("    - Attempting badOptional.isPresent() throws NullPointerException!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 15: Brian Goetz's Optional Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 5 CORE RULES FOR CLEAN OPTIONAL USE:\r
   1. Never assign 'null' to an Optional reference ('Optional<T> opt = null' is an anti-pattern).\r
   2. Never use 'optional.get()' when safe alternatives ('orElse', 'orElseGet', 'orElseThrow') exist.\r
   3. Prefer 'orElseGet(Supplier)' over 'orElse(value)' for anything requiring allocation.\r
   4. Avoid using Optional as field types (not Serializable, adds 16-byte object wrapper overhead).\r
   5. Avoid using Optional as method parameters (forces callers to wrap arguments in 'Optional.of()').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should an Optional variable itself never be assigned null (e.g. Optional<String> opt = null)?",shortAnswer:"Because it completely defeats the purpose of Optional, causing NullPointerExceptions when calling opt.isPresent() or opt.orElse(). Always use Optional.empty() instead of null.",explanation:"Assigning null to an Optional reference creates a meta-null disaster.",hint:"Always initialize with Optional.empty() rather than null.",level:"Beginner",codeExample:"// BAD:\\nOptional<String> opt = null;\\n// GOOD:\\nOptional<String> opt = Optional.empty();"},{question:"What was the primary design intent for adding java.util.Optional to Java 8?",shortAnswer:"To serve as a method return type for library and domain APIs where returning 'no result' was expected and returning null was historically prone to causing NullPointerExceptions.",explanation:"Optional is a return-type design tool, not a universal null replacement.",hint:"Designed primarily as a method return type to signal possible absence.",level:"Intermediate",codeExample:"public Optional<Student> findByEmail(String email);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Best Practices for Optional: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Brian Goetz's Rules of Engagement"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The architect's guide to clean Optional usage: understanding the intended design constraints and avoiding anti-patterns in enterprise codebases."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"BrianGoetzOptionalRulesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 009_008 Topic 15: Brian Goetz's Optional Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic15_brian_goetz_optional_rules_note.txt"})}),e.jsx(r,{note:"Brian Goetz, Java Language Architect, stated clearly: Optional was created for method return types where 'no result' is a normal outcome! It was NEVER intended to replace every single reference in your class! — Sukanta Hui"})]})}export{x as default};
