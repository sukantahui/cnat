import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 7: Why PrintWriter Does NOT Throw IOException: The checkError() Protocol\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.PrintWriter;\r
import java.io.StringWriter;\r
\r
public class PrintWriterCheckErrorProtocolDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: PrintWriter checkError() PROTOCOL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StringWriter memorySink = new StringWriter();\r
\r
        // Notice that PrintWriter methods DO NOT declare 'throws IOException'!\r
        PrintWriter pw = new PrintWriter(memorySink);\r
\r
        pw.println("Transaction 1: Sukanta Hui Fee Deposit ₹10,000");\r
        pw.println("Transaction 2: Swadeep Paul Admission ₹8,500");\r
\r
        // How to check for I/O errors when no exception is thrown:\r
        boolean errorOccurred = pw.checkError(); // Flushes stream AND returns boolean error state!\r
\r
        System.out.println(">>> 1. Checking Error State with pw.checkError():");\r
        System.out.println("  pw.checkError() : " + errorOccurred + " (Stream healthy!)");\r
\r
        pw.close();\r
\r
        // Attempting to write after close does NOT throw exception, but sets error state:\r
        pw.println("Transaction 3: Invalid post-close write!");\r
        boolean errorAfterClose = pw.checkError();\r
\r
        System.out.println("\\n>>> 2. Writing After Close:");\r
        System.out.println("  pw.checkError() after close : " + errorAfterClose + " (Error flag set to true!)");\r
\r
        System.out.println("\\n>>> DESIGN PHILOSOPHY OF PrintWriter:");\r
        System.out.println("  - Swallows raw IOExceptions to make printing code clean and concise without 50 try-catch blocks.");\r
        System.out.println("  - Sets an internal boolean error flag.");\r
        System.out.println("  - Programmers verify I/O success using 'pw.checkError()'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 7: PrintWriter checkError() Protocol\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRINTWRITER ERROR DESIGN:\r
   - 'print()', 'println()', 'printf()' DO NOT throw 'IOException'.\r
   - Eliminates try-catch boilerplate.\r
   - Internal boolean error flag is set upon failure.\r
   - Call 'pw.checkError()' to flush and verify stream health.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why do methods on 'java.io.PrintWriter' (like print and println) NOT declare 'throws IOException', and how do you detect errors?",shortAnswer:"PrintWriter was specifically designed for convenient, clutter-free printing without requiring try-catch blocks around every single print statement. Instead of throwing checked IOExceptions, PrintWriter catches them internally and sets an internal error flag. Developers verify stream health by calling 'pw.checkError()', which flushes the stream and returns true if any error occurred.",explanation:"Same error model used by System.out (java.io.PrintStream).",hint:"Swallows checked exceptions to eliminate boilerplate; call checkError() to verify health.",level:"Intermediate",codeExample:'pw.println("text"); if (pw.checkError()) { /* handle error */ }'}];function w(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 7"}),r.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Error Protocol"})]}),r.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why ",r.jsx("code",{className:"text-emerald-400 font-mono",children:"PrintWriter"})," Does NOT Throw ",r.jsx("code",{className:"text-rose-400 font-mono",children:"IOException"}),": The ",r.jsx("code",{className:"text-sky-400 font-mono",children:"checkError()"})," Protocol"]}),r.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand exception-free printing architecture: learning why PrintWriter catches I/O exceptions internally and using ",r.jsx("code",{className:"text-sky-300 font-mono",children:"checkError()"})," for diagnostic health verification."]})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:i,title:"PrintWriterCheckErrorProtocolDemo.java",highlightLines:[7,10,16,17,21,22,28,29]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"checkError() FAQs",questions:s})}),r.jsx("section",{className:"space-y-4",children:r.jsx(n,{content:a,title:"Module 005_003 Topic 7: PrintWriter checkError Protocol",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic7_print_writer_check_error_note.txt"})}),r.jsx(o,{note:"If PrintWriter threw IOException on every single line, printing a 10-line table would require 10 try-catch blocks! That's why Java designed PrintWriter to swallow the exception and let you call 'pw.checkError()' once at the end! — Sukanta Hui"})]})}export{w as default};
