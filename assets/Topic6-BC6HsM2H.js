import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 6: java.io.PrintWriter: Versatile Formatted Text Output (print, println, printf)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.PrintWriter;\r
import java.io.StringWriter;\r
\r
public class PrintWriterFormattedOutputDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: java.io.PrintWriter FORMATTED OUTPUT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StringWriter buffer = new StringWriter();\r
\r
        // 1. PrintWriter formatted output:\r
        try (PrintWriter pw = new PrintWriter(buffer)) {\r
            pw.println("=========================================================");\r
            pw.println("  ACCOTAX FINANCIAL REPORT - BARRACKPORE HUB");\r
            pw.println("=========================================================");\r
\r
            // Formatted columns with printf():\r
            pw.printf("%-10s | %-18s | %10s | %8s%n", "ROLL", "STUDENT NAME", "FEE (INR)", "STATUS");\r
            pw.println("-----------+--------------------+------------+---------");\r
            pw.printf("%-10s | %-18s | %10.2f | %8s%n", "STU_101", "Swadeep Paul", 8500.50, "PAID");\r
            pw.printf("%-10s | %-18s | %10.2f | %8s%n", "STU_102", "Tuhina Das", 9200.00, "PAID");\r
            pw.printf("%-10s | %-18s | %10.2f | %8s%n", "STU_103", "Abhronila Das", 8500.00, "PENDING");\r
            pw.println("=========================================================");\r
        }\r
\r
        System.out.println(">>> Formatted Report from PrintWriter:");\r
        System.out.println(buffer.toString());\r
\r
        System.out.println("\\n>>> WHY PrintWriter IS THE MOST POPULAR FORMATTER:");\r
        System.out.println("  1. Supports all primitive types via print() and println().");\r
        System.out.println("  2. Full C-style format strings via printf() and format().");\r
        System.out.println("  3. Optional auto-flush feature when writing newlines.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 6: PrintWriter Formatted Output\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRINTWRITER CAPABILITIES:\r
   - 'print()', 'println()' for all data types.\r
   - 'printf("%-10s %d", name, val)' for aligned tabular reports.\r
   - Can wrap Files, Writers, or OutputStreams.\r
   - Auto-flush constructor: 'new PrintWriter(out, true)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What capabilities make 'java.io.PrintWriter' the most popular character stream writer for report and log generation?",shortAnswer:"1. It provides overloaded 'print()' and 'println()' for all primitive types and Objects (calling String.valueOf()). 2. It supports rich C-style tabular formatting via 'printf()' and 'format()'. 3. It can be constructed with an 'autoFlush' boolean flag that automatically flushes buffers on every println/printf call. 4. It does not throw checked IOExceptions.",explanation:"PrintWriter is the foundation behind ServletResponse.getWriter() in enterprise Java web apps.",hint:"print/println for primitives, printf formatting, auto-flush support, and no checked IOExceptions.",level:"Beginner",codeExample:'PrintWriter pw = new PrintWriter(file, StandardCharsets.UTF_8); pw.printf("%-10s: %d", name, score);'}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 6"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Formatted Output"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"java.io.PrintWriter"}),": Versatile Formatted Text Output (",t.jsx("code",{className:"text-sky-400 font-mono",children:"printf"}),", ",t.jsx("code",{className:"text-amber-400 font-mono",children:"println"}),")"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build tabular enterprise reports: formatting text, numbers, and currency using ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"PrintWriter.printf()"})," with aligned columnar specifiers."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(r,{fileModule:a,title:"PrintWriterFormattedOutputDemo.java",highlightLines:[7,10,16,17,18,22,23,24,25]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"PrintWriter FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 005_003 Topic 6: PrintWriter Formatted Output",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic6_print_writer_note.txt"})}),t.jsx(i,{note:"PrintWriter is exactly like System.out (which is a PrintStream)! Whenever you need to write formatted tables or reports to a file or string, reach for PrintWriter! — Sukanta Hui"})]})}export{h as default};
