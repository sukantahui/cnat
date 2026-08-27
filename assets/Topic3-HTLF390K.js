import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 3: The java.lang.AutoCloseable Interface: Single Method 'void close() throws Exception'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
// Custom class implementing the core Java AutoCloseable contract:\r
class BarrackporeLabTerminal implements AutoCloseable {\r
\r
    private final String terminalId;\r
\r
    public BarrackporeLabTerminal(String id) {\r
        this.terminalId = id;\r
        System.out.println("  [ACQUIRED] Lab terminal initialized: " + id);\r
    }\r
\r
    public void runCodingSession(String student) {\r
        System.out.println("  [RUNNING] " + student + " is compiling Java Core modules on " + terminalId);\r
    }\r
\r
    @Override\r
    public void close() throws Exception {\r
        System.out.println("  [AUTOCLOSE] Lab terminal " + terminalId + " session closed & resources freed.");\r
    }\r
}\r
\r
public class AutoCloseableInterfaceContractDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: java.lang.AutoCloseable CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Executing ARM with Custom AutoCloseable Resource:");\r
        try (BarrackporeLabTerminal terminal = new BarrackporeLabTerminal("TERM_BKP_01")) {\r
            terminal.runCodingSession("Swadeep Paul");\r
        } catch (Exception e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> THE AutoCloseable CONTRACT RULES:");\r
        System.out.println("  1. Located in 'java.lang' (No import needed).");\r
        System.out.println("  2. Single method: 'void close() throws Exception;'.");\r
        System.out.println("  3. Implementations should make close() IDEMPOTENT (safe to invoke multiple times).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 3: AutoCloseable Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. AUTOCLOSEABLE SPECIFICATION:\r
   - Root interface for ARM: 'java.lang.AutoCloseable'.\r
   - Method: 'void close() throws Exception;'.\r
   - Implementers should narrow the throws clause if possible.\r
   - Must be idempotent (safe against double-closing).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the single method declared in 'java.lang.AutoCloseable' and what is its exception signature?",shortAnswer:"'void close() throws Exception;'. Because it declares 'throws Exception', custom implementers are encouraged to narrow this throws clause to a specific exception (e.g. 'throws IOException') or omit throws entirely if close() cannot fail.",explanation:"Implementations of close() should be idempotent (calling close() again has no side effects).",hint:"Declared in java.lang with method 'void close() throws Exception'.",level:"Beginner",codeExample:"public class MyResource implements AutoCloseable { public void close() {} }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Core Contract"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.AutoCloseable"})," Interface: ",e.jsx("code",{className:"text-sky-400 font-mono",children:"void close() throws Exception"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Implement the foundational ARM interface: building custom managed resources, understanding idempotent cleanup guarantees, and narrowing exception signatures."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"AutoCloseableInterfaceContractDemo.java",highlightLines:[7,9,17,18,19,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"AutoCloseable FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 004_004 Topic 3: AutoCloseable Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic3_autocloseable_contract_note.txt"})}),e.jsx(r,{note:"When implementing AutoCloseable, if your close() method doesn't throw any exceptions, declare 'public void close()' WITHOUT 'throws Exception'! That way callers don't need a try-catch for close()! — Sukanta Hui"})]})}export{b as default};
