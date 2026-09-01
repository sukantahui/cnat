import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 005_002: Character Streams & Text File Processing\r
 * Topic 1: The Abstract Base Classes: java.io.Reader and java.io.Writer Hierarchy\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
public class ReaderWriterHierarchyTaxonomyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: java.io.Reader & java.io.Writer TAXONOMY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE CHARACTER STREAM HIERARCHY TREE:");\r
        System.out.println();\r
        System.out.println("                     AutoCloseable / Closeable");\r
        System.out.println("                            /         \\\\");\r
        System.out.println("                           /           \\\\");\r
        System.out.println("              java.io.Reader          java.io.Writer (Flushable)");\r
        System.out.println("              /    |    \\\\               /    |     \\\\");\r
        System.out.println("             /     |     \\\\             /     |      \\\\");\r
        System.out.println("   BufferedReader  |   StringReader  BufferedWriter | StringWriter");\r
        System.out.println("   (Line reading)  |                 (Line writing) |");\r
        System.out.println("         InputStreamReader                 OutputStreamWriter");\r
        System.out.println("                 |                                  |");\r
        System.out.println("             FileReader                         FileWriter");\r
\r
        System.out.println("\\n>>> 3 CORE ARCHITECTURAL INVARIANTS:");\r
        System.out.println("  1. 'Reader' and 'Writer' are abstract base classes operating on 16-bit 'char' units.");\r
        System.out.println("  2. 'Writer' implements 'java.io.Flushable' in addition to AutoCloseable/Closeable.");\r
        System.out.println("  3. Both classes provide single-character, array-buffered, and offset-length read/write methods.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_002: Character Streams & Text File Processing\r
Topic 1: Reader and Writer Hierarchy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHARACTER STREAM BASE CLASSES:\r
   - 'java.io.Reader': Abstract superclass for character input.\r
   - 'java.io.Writer': Abstract superclass for character output.\r
   - 'Writer' implements 'Flushable' to force buffered characters to destination.\r
   - Both implement 'AutoCloseable' for ARM compatibility.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What interfaces are implemented by the abstract base classes 'java.io.Reader' and 'java.io.Writer'?",shortAnswer:"'java.io.Reader' implements 'java.lang.Readable', 'java.io.Closeable', and 'java.lang.AutoCloseable'. 'java.io.Writer' implements 'java.lang.Appendable', 'java.io.Closeable', 'java.io.Flushable', and 'java.lang.AutoCloseable'.",explanation:"Because both implement AutoCloseable, all Readers and Writers work seamlessly with Try-with-Resources.",hint:"Reader implements Readable and Closeable; Writer implements Appendable, Closeable, and Flushable.",level:"Beginner",codeExample:"public abstract class Reader implements Readable, Closeable { ... }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Hierarchy Map"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Abstract Base Classes: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.io.Reader"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"java.io.Writer"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master character I/O taxonomy: navigating the concrete subclasses of ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Reader"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Writer"})," and understanding the Flushable contract."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"ReaderWriterHierarchyTaxonomyDemo.java",highlightLines:[7,13,14,15,16,17,18,19,20]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Reader & Writer FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 005_002 Topic 1: Reader and Writer Hierarchy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_002_topic1_reader_writer_hierarchy_note.txt"})}),e.jsx(n,{note:"Remember the parallel symmetry: InputStream is paired with OutputStream for bytes; Reader is paired with Writer for text! All four hierarchies share identical design patterns! — Sukanta Hui"})]})}export{b as default};
