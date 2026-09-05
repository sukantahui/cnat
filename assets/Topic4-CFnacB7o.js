import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 4: Checked Exceptions (Compile-Time Enforced): IOException, SQLException, ClassNotFoundException\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.FileInputStream;\r
import java.io.FileNotFoundException;\r
import java.io.IOException;\r
\r
public class CheckedExceptionsCompileTimeDemo {\r
\r
    // Method that throws Checked Exceptions (FileNotFoundException & IOException):\r
    public static void loadBarrackporeSyllabus(String path) throws IOException {\r
        FileInputStream fis = new FileInputStream(path); // May throw FileNotFoundException (Checked!)\r
        int data = fis.read(); // May throw IOException (Checked!)\r
        fis.close();\r
        System.out.println("  Read First Byte: " + data);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: CHECKED EXCEPTIONS ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. What makes an exception 'CHECKED' in Java?");\r
        System.out.println("  - ANY direct or indirect subclass of 'java.lang.Exception' (EXCEPT RuntimeException).");\r
        System.out.println("  - The Java compiler actively checks and enforces that you handle or declare it!");\r
\r
        System.out.println("\\n>>> 2. Handling Checked Exception via Try-Catch:");\r
        try {\r
            loadBarrackporeSyllabus("curriculum_2026.pdf");\r
        } catch (FileNotFoundException e) {\r
            System.out.println("  [CAUGHT SPECIFIC CHECKED EXCEPTION] File missing: " + e.getMessage());\r
        } catch (IOException e) {\r
            System.out.println("  [CAUGHT GENERAL CHECKED EXCEPTION] I/O Failure: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 4: Checked Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHECKED EXCEPTIONS:\r
   - Direct subclasses of 'Exception' (excluding RuntimeException).\r
   - Enforced by the compiler at compile time.\r
   - Examples: 'IOException', 'SQLException', 'ClassNotFoundException'.\r
   - Mandatory: Must be caught ('try-catch') or declared ('throws').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Which classes in the Java exception hierarchy are classified as Checked Exceptions?",shortAnswer:"'Checked Exceptions' include 'java.lang.Exception' and all of its subclasses EXCEPT 'java.lang.RuntimeException' (and its descendants). Prominent examples include IOException, SQLException, ClassNotFoundException, and ParseException.",explanation:"Checked exceptions are checked by javac at compile time.",hint:"All subclasses of Exception except RuntimeException.",level:"Beginner",codeExample:"public void read() throws IOException { ... } // Checked exception declaration"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Compile-Time Enforcement"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Checked Exceptions: Subclasses of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Exception"})," (",e.jsx("code",{className:"text-amber-400 font-mono",children:"IOException"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"SQLException"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand compile-time exception checking: exploring why the compiler refuses to build code until external I/O and database failures are explicitly acknowledged."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"CheckedExceptionsCompileTimeDemo.java",highlightLines:[7,14,15,16,29,30,31,32,33]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Checked Exceptions FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:r,title:"Module 004_001 Topic 4: Checked Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic4_checked_exceptions_note.txt"})}),e.jsx(a,{note:"If your code calls a method that throws IOException and you don't wrap it in try-catch or declare 'throws IOException', your Java file will NOT even compile! That is the definition of a Checked Exception! — Sukanta Hui"})]})}export{h as default};
