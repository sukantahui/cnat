import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 004_004: Try-with-Resources & AutoCloseable\r
 * Topic 4: The java.io.Closeable Interface: The Legacy I/O Sub-Interface of AutoCloseable\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.Closeable;\r
import java.io.IOException;\r
\r
public class CloseableVsAutoCloseableComparisonDemo {\r
\r
    // Implementing java.io.Closeable (Restricted strictly to IOException):\r
    public static class AcademyStreamPipe implements Closeable {\r
        @Override\r
        public void close() throws IOException {\r
            System.out.println("  [CLOSEABLE] AcademyStreamPipe closed via IOException contract.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: java.io.Closeable vs AutoCloseable - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+--------------------------+-------------------------------------+-------------------------------------+");\r
        System.out.println("| Feature                  | java.lang.AutoCloseable (Java 7+)   | java.io.Closeable (Java 5+)         |");\r
        System.out.println("+--------------------------+-------------------------------------+-------------------------------------+");\r
        System.out.println("| Package                  | java.lang                           | java.io                             |");\r
        System.out.println("| close() Exception        | throws Exception                    | throws IOException                  |");\r
        System.out.println("| Hierarchy Relationship   | Super-interface of Closeable        | Sub-interface of AutoCloseable      |");\r
        System.out.println("| Primary Target           | Any generic resource (DB, Lock, etc)| Strictly I/O byte/character streams |");\r
        System.out.println("| Idempotency Mandate      | Recommended                         | REQUIRED by specification           |");\r
        System.out.println("+--------------------------+-------------------------------------+-------------------------------------+");\r
\r
        System.out.println("\\n>>> Executing Closeable in Try-with-Resources:");\r
        try (AcademyStreamPipe pipe = new AcademyStreamPipe()) {\r
            System.out.println("  Transmitting bytes across Barrackpore network pipe...");\r
        } catch (IOException e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_004: Try-with-Resources & AutoCloseable\r
Topic 4: Closeable vs AutoCloseable\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CLOSEABLE DIFFERENCES:\r
   - 'java.io.Closeable' extends 'java.lang.AutoCloseable'.\r
   - Narrows exception from 'Exception' to 'IOException'.\r
   - Dedicated specifically to I/O streams (FileInputStream, etc.).\r
   - Both work seamlessly with Try-with-Resources.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the key difference between 'java.lang.AutoCloseable' and 'java.io.Closeable' in Java?",shortAnswer:"'java.io.Closeable' is a sub-interface of 'java.lang.AutoCloseable' retrofitted in Java 7. Its 'close()' method declares 'throws IOException' (narrower than AutoCloseable's 'throws Exception') and strictly requires idempotent closing. It is intended specifically for I/O streams.",explanation:"Closeable extends AutoCloseable for backward compatibility with pre-Java 7 I/O classes.",hint:"Closeable extends AutoCloseable and narrows the throws clause to IOException.",level:"Intermediate",codeExample:"public interface Closeable extends AutoCloseable { void close() throws IOException; }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Interface Taxonomy"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"java.io.Closeable"})," Interface (Sub-Interface with ",e.jsx("code",{className:"text-amber-400 font-mono",children:"IOException"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Compare interface specifications: understanding why ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"Closeable"})," extends ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"AutoCloseable"})," and narrows exception propagation to ",e.jsx("code",{className:"text-amber-300 font-mono",children:"IOException"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"CloseableVsAutoCloseableComparisonDemo.java",highlightLines:[7,10,13,14,15,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Closeable vs AutoCloseable FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:s,title:"Module 004_004 Topic 4: Closeable vs AutoCloseable",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_004_topic4_closeable_vs_autocloseable_note.txt"})}),e.jsx(n,{note:"If you are writing general resources (like Database connection pools or thread locks), implement AutoCloseable. If you are writing a byte or character stream, implement Closeable! — Sukanta Hui"})]})}export{h as default};
