import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 5: The 'Catch or Specify' Requirement for Checked Exceptions in Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.File;\r
import java.io.IOException;\r
\r
public class CatchOrSpecifyRequirementDemo {\r
\r
    // APPROACH 1: "SPECIFY" (Duck the exception by declaring 'throws' on the method signature):\r
    public static void specifyApproach(String filename) throws IOException {\r
        System.out.println("  [SPECIFY] Declaring 'throws IOException' to propagate error to caller.");\r
        File f = new File(filename);\r
        f.createNewFile(); // Throws IOException\r
    }\r
\r
    // APPROACH 2: "CATCH" (Handle the exception immediately in a try-catch block):\r
    public static void catchApproach(String filename) {\r
        System.out.println("  [CATCH] Handling IOException right here locally.");\r
        try {\r
            File f = new File(filename);\r
            f.createNewFile();\r
        } catch (IOException e) {\r
            System.out.println("  [RECOVERED] Failed to create file: " + e.getMessage());\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: THE 'CATCH OR SPECIFY' MANDATE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The 2 Valid Options Mandated by the Java Compiler for Checked Exceptions:");\r
        System.out.println("  Option 1: CATCH it locally using a 'try-catch' block.");\r
        System.out.println("  Option 2: SPECIFY it in the method header using the 'throws' clause.");\r
\r
        System.out.println("\\n>>> Executing Catch Approach:");\r
        catchApproach("system_lock.tmp");\r
\r
        System.out.println("\\n>>> Executing Specify Approach (Caller handles it):");\r
        try {\r
            specifyApproach("/invalid_root/system_lock.tmp");\r
        } catch (IOException e) {\r
            System.out.println("  [CALLER CATCH] Caller caught propagated error: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 5: Catch or Specify Requirement\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE CATCH OR SPECIFY RULE:\r
   - Option A: Handle locally via 'try-catch'.\r
   - Option B: Propagate to caller via 'throws Exception' in method header.\r
   - Doing neither results in immediate compile error.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What is the Java compiler's 'Catch or Specify' requirement for Checked Exceptions?",shortAnswer:"Code that invokes a method throwing a Checked Exception MUST satisfy one of two rules: 1. 'Catch': Enclose the call inside a 'try-catch' block and handle it. 2. 'Specify': Declare the exception in the enclosing method's signature using the 'throws' keyword to propagate it up the call stack.",explanation:"Failing to do either results in a compilation error: 'unreported exception; must be caught or declared to be thrown'.",hint:"Must either catch with try-catch or specify with throws clause.",level:"Beginner",codeExample:"void m() throws IOException { ... } // Specify\\ntry { m(); } catch(IOException e) {} // Catch"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Compiler Mandate"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Compiler's ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"'Catch or Specify'"})," Requirement for Checked Exceptions"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the two fundamental exception pathways: choosing between handling failures locally with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"try-catch"})," or delegating responsibility to callers with ",e.jsx("code",{className:"text-amber-300 font-mono",children:"throws"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CatchOrSpecifyRequirementDemo.java",highlightLines:[7,12,13,14,19,20,21,23,24,38,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Catch or Specify FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 004_001 Topic 5: Catch or Specify",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic5_catch_or_specify_note.txt"})}),e.jsx(a,{note:"Think of 'Catch or Specify' as: Either fix the problem yourself right now (catch), or warn your boss that you might fail so they can prepare (throws)! — Sukanta Hui"})]})}export{y as default};
