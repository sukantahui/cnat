import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 3: Detailed Comparison: 'throw' vs 'throws' Keywords in Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.IOException;\r
\r
public class ThrowVsThrowsComparisonDemo {\r
\r
    // Method combining BOTH 'throws' (in signature) and 'throw' (inside body):\r
    public static void processEnrollment(String studentName, int feePaid) throws IOException {\r
        // 'throws' is in signature (DECLARATION)\r
\r
        if (studentName == null) {\r
            // 'throw' is inside body (EXECUTION OF ACTION)\r
            throw new NullPointerException("Student name cannot be null!");\r
        }\r
\r
        if (feePaid < 5000) {\r
            // 'throw' raises an explicit checked exception\r
            throw new IOException("Minimum admission deposit of 5000 INR required for " + studentName);\r
        }\r
\r
        System.out.println("  [SUCCESS] Enrolled " + studentName + " with deposit of " + feePaid + " INR");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: 'throw' vs 'throws' COMPARISON MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+----------------------+---------------------------------+---------------------------------+");\r
        System.out.println("| Feature              | 'throw'                         | 'throws'                        |");\r
        System.out.println("+----------------------+---------------------------------+---------------------------------+");\r
        System.out.println("| Location             | Inside method body              | In method signature / header    |");\r
        System.out.println("| Purpose              | Explicitly triggers an exception| Declares potential exceptions   |");\r
        System.out.println("| Operand              | Instance of Throwable (object)  | Class types (comma-separated)   |");\r
        System.out.println("| Quantity             | Exactly 1 instance at a time    | Multiple classes allowed        |");\r
        System.out.println("| Execution Effect     | Halts execution immediately     | Does not halt execution itself  |");\r
        System.out.println("+----------------------+---------------------------------+---------------------------------+");\r
\r
        System.out.println("\\n>>> Executing Demo Invocation:");\r
        try {\r
            processEnrollment("Tuhina Das", 2000);\r
        } catch (IOException e) {\r
            System.out.println("  [CAUGHT] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 3: throw vs throws Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPARISON MATRIX:\r
   - 'throw' : Action inside body → 'throw new MyException();' (singular object).\r
   - 'throws': Declaration in header → 'void m() throws A, B' (class names).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What are the 3 fundamental differences between 'throw' and 'throws' in Java?",shortAnswer:"1. Location: 'throw' is used inside method bodies; 'throws' is used in method header signatures. 2. Operand: 'throw' is followed by a single instantiated object ('new Exception()'); 'throws' is followed by exception class names ('IOException, SQLException'). 3. Action: 'throw' actively halts execution and triggers an error; 'throws' passively declares potential errors to callers.",explanation:"One of the most frequently tested core Java interview distinctions.",hint:"throw is an active action inside the body; throws is a declaration in the method header.",level:"Beginner",codeExample:"void m() throws IOException { throw new IOException(); }"}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Core Comparison"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Detailed Comparison: ",e.jsx("code",{className:"text-rose-400 font-mono",children:"throw"})," vs ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"throws"})," Keywords"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the definitive interview comparison: contrasting active runtime exception throwing inside method bodies with passive signature declarations in headers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ThrowVsThrowsComparisonDemo.java",highlightLines:[7,10,14,15,18,19,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Throw vs Throws FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_003 Topic 3: throw vs throws",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic3_throw_vs_throws_note.txt"})}),e.jsx(o,{note:"Remember the easy trick: 'throw' has NO 's', so it throws ONE object! 'throws' HAS an 's', so it can declare MULTIPLE classes in the header! — Sukanta Hui"})]})}export{w as default};
