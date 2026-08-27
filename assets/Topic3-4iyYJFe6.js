import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 3: java.lang.Exception: Recoverable Application-Level Conditions & Handling\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.File;\r
import java.io.FileReader;\r
import java.io.IOException;\r
\r
public class RecoverableExceptionsDemo {\r
\r
    public static void readAcademyConfig(String filePath) {\r
        File file = new File(filePath);\r
        try {\r
            System.out.println("  Attempting to open configuration: " + file.getAbsolutePath());\r
            FileReader reader = new FileReader(file);\r
            reader.close();\r
        } catch (IOException e) {\r
            // RECOVERABLE REACTION: Graceful fallback to default configuration!\r
            System.out.println("  [RECOVERY ACTIVATED] Config file missing (" + e.getMessage() + ")");\r
            System.out.println("  [FALLBACK] Loaded default settings for Barrackpore Academy.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: java.lang.Exception RECOVERABLE CONDITIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. The Core Purpose of java.lang.Exception:");\r
        System.out.println("  - Represents conditions from which a well-written application CAN reasonably recover.");\r
        System.out.println("  - Examples: Missing configuration files, transient database timeouts, invalid user input.");\r
\r
        System.out.println("\\n>>> 2. Executing Graceful Recovery Workflow:");\r
        readAcademyConfig("non_existent_config.json");\r
\r
        System.out.println("\\n>>> Application continues executing smoothly without crashing!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 3: java.lang.Exception\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RECOVERABLE CONDITIONS:\r
   - 'java.lang.Exception' models recoverable failures.\r
   - Catching allows graceful fallbacks (e.g. default configs, retries).\r
   - Prevents sudden application process termination.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What differentiates 'java.lang.Exception' from 'java.lang.Error' in terms of application design?",shortAnswer:"'java.lang.Exception' represents recoverable conditions that a reasonable application should anticipate, catch, and handle gracefully (e.g. falling back to defaults if a file is missing). 'java.lang.Error' represents fatal system conditions from which recovery is impossible.",explanation:"Exception handling forms the core of application fault-tolerance and resilience.",hint:"Exceptions are recoverable application conditions; Errors are fatal system failures.",level:"Beginner",codeExample:"try { readFile(); } catch (IOException e) { loadDefaults(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Recoverable Conditions"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Exception"}),": Recoverable Application-Level Conditions"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build resilient, self-healing applications: catching recoverable ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"IOException"})," errors and providing automated fallback mechanisms without crashing."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"RecoverableExceptionsDemo.java",highlightLines:[7,14,15,17,18,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Recoverable Exceptions FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 004_001 Topic 3: java.lang.Exception",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic3_recoverable_exceptions_note.txt"})}),e.jsx(r,{note:"Whenever you catch an Exception, ask yourself: 'How can I recover gracefully?' If a file is missing, load default settings; if a server is busy, retry in 2 seconds! — Sukanta Hui"})]})}export{g as default};
