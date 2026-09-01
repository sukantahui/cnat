import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as l}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 2: Creating Optional Instances - of(), ofNullable(), empty()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class CreatingOptionalInstancesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: CREATING OPTIONAL INSTANCES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Optional.empty(): Creating an explicitly empty optional\r
        Optional<String> emptyOpt = Optional.empty();\r
        System.out.println("1. Optional.empty(): " + emptyOpt);\r
\r
        // 2. Optional.of(value): Requires NON-NULL value (Throws NPE immediately if null passed!)\r
        String studentName = "Tuhina Das";\r
        Optional<String> validOpt = Optional.of(studentName);\r
        System.out.println("2. Optional.of('Tuhina Das'): " + validOpt);\r
\r
        try {\r
            System.out.println("   Attempting Optional.of(null)...");\r
            Optional.of(null); // Intentionally fails fast!\r
        } catch (NullPointerException ex) {\r
            System.err.println("   [NPE CAUGHT]: Optional.of(null) throws NullPointerException immediately!");\r
        }\r
\r
        // 3. Optional.ofNullable(value): Safe bridge for unknown/nullable values\r
        String nonNullCenter = "Barrackpore";\r
        String nullableCenter = null;\r
\r
        Optional<String> safeOpt1 = Optional.ofNullable(nonNullCenter);\r
        Optional<String> safeOpt2 = Optional.ofNullable(nullableCenter);\r
\r
        System.out.println("\\n3. Optional.ofNullable():");\r
        System.out.println("   - ofNullable('Barrackpore') : " + safeOpt1 + " (Present)");\r
        System.out.println("   - ofNullable(null)          : " + safeOpt2 + " (Returns Optional.empty() safely!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 2: Creating Optional Instances\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE THREE STATIC FACTORY METHODS:\r
   1. 'Optional.empty()'\r
      - Returns an immutable singleton empty Optional instance.\r
   2. 'Optional.of(T value)'\r
      - Wraps a non-null value.\r
      - Throws 'NullPointerException' immediately if 'value == null' (Fail-fast behavior).\r
   3. 'Optional.ofNullable(T value)'\r
      - Safe for potentially null values.\r
      - Returns 'Optional.of(value)' if value is non-null.\r
      - Returns 'Optional.empty()' if value is null.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,r=[{question:"What happens if you pass a null value to Optional.of() versus Optional.ofNullable()?",shortAnswer:"Optional.of(null) throws a NullPointerException immediately at creation time, whereas Optional.ofNullable(null) safely returns Optional.empty() without throwing any exception.",explanation:"Use Optional.of when null is an illegal bug condition; use Optional.ofNullable when null is a valid representation of absence.",hint:"Optional.of(null) throws NPE; Optional.ofNullable(null) returns Optional.empty().",level:"Beginner",codeExample:"Optional.of(null); // Throws NPE!\\nOptional.ofNullable(null); // Returns Optional.empty()"},{question:"Is Optional.empty() allocated as a new object on the heap every time it is called?",shortAnswer:"No, Optional.empty() returns a cached immutable singleton instance, avoiding unnecessary heap allocations.",explanation:"Memory efficient singleton pattern inside the JDK.",hint:"Returns a shared singleton instance.",level:"Intermediate",codeExample:"Optional.empty() === Optional.empty(); // True (same singleton)"}];function x(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 2"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Optional Instances: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"Optional.of(), ofNullable() & empty()"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 3 factory methods: strict non-null wrapping with of(), safe nullable ingestion with ofNullable(), and creating empty instances."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:o,title:"CreatingOptionalInstancesDemo.java",highlightLines:[18,25,34,43]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Optional & Null-Safe Programming FAQs",questions:r})}),n.jsx("section",{className:"space-y-4",children:n.jsx(l,{content:i,title:"Module 009_008 Topic 2: Creating Optional Instances",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic2_creating_optional_instances_note.txt"})}),n.jsx(a,{note:"Rule of thumb: If you are 100% sure the value is NOT null, use Optional.of(x). If the value might be null (like from a legacy API or database), ALWAYS use Optional.ofNullable(x)! — Sukanta Hui"})]})}export{x as default};
