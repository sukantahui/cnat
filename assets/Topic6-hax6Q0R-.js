import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 6: orElseThrow() - Explicit Absence Semantics (Java 10+)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.NoSuchElementException;\r
import java.util.Optional;\r
\r
public class OrElseThrowSemanticsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: ORELSETHROW() (JAVA 10+) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<String> enrolledStudent = Optional.of("Tuhina Das");\r
        Optional<String> unregisteredStudent = Optional.empty();\r
\r
        // 1. Present Optional with orElseThrow(): returns wrapped value cleanly\r
        String name = enrolledStudent.orElseThrow();\r
        System.out.println("1. Unwrapped Valid Student: " + name);\r
\r
        // 2. Empty Optional with orElseThrow(): throws NoSuchElementException explicitly\r
        System.out.println("\\n2. Attempting orElseThrow() on Empty Optional:");\r
        try {\r
            unregisteredStudent.orElseThrow();\r
        } catch (NoSuchElementException ex) {\r
            System.err.println("   [EXPECTED EXCEPTION]: " + ex.getClass().getName() + ": " + ex.getMessage());\r
            System.out.println("   --> Clean, unambiguous exception thrown indicating missing mandatory data!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 6: orElseThrow() Semantics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT (Java 10+):\r
   - Signature: 'public T orElseThrow()'.\r
   - If a value is present, returns the value.\r
   - Otherwise, throws 'NoSuchElementException("No value present")'.\r
\r
2. WHY OR ELSE THROW WAS ADDED TO REPLACE GET():\r
   - Method name '.get()' sounds innocent and disguises the risk of throwing an exception.\r
   - '.orElseThrow()' clearly communicates that absence will trigger an exception.\r
   - Java architects recommend '.orElseThrow()' over '.get()' in all modern codebases.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why was orElseThrow() added in Java 10 when get() already existed?",shortAnswer:"orElseThrow() was added as a clearer, self-documenting alternative to get(). Its name explicitly signals to developers and code reviewers that an exception will be thrown if the value is absent.",explanation:"Java language architects consider get() to have been poorly named.",hint:"Self-documenting method name that makes the risk of an exception explicit.",level:"Beginner",codeExample:"User user = repo.findById(id).orElseThrow();"},{question:"What exception type is thrown by orElseThrow() when invoked on an empty Optional?",shortAnswer:"java.util.NoSuchElementException with the detail message 'No value present'.",explanation:"Standard JDK runtime exception for missing elements.",hint:"NoSuchElementException",level:"Beginner",codeExample:"Optional.empty().orElseThrow(); // Throws NoSuchElementException"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"orElseThrow()"}),": Clear Exception Semantics (Java 10+)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Expressing mandatory requirements: throwing NoSuchElementException without parameters in Java 10+ to indicate non-negotiable value absence."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"OrElseThrowSemanticsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_008 Topic 6: orElseThrow() Semantics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic6_orelsethrow_semantics_note.txt"})}),e.jsx(a,{note:"In Java 10, orElseThrow() without arguments was added as the official replacement for .get()! It does the same thing as .get() but its name screams: THIS WILL THROW AN EXCEPTION IF EMPTY! — Sukanta Hui"})]})}export{E as default};
