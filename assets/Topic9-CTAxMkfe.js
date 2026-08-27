import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 9: Documenting Exceptions in Javadoc: Effective Java Item 74 & @throws Tag\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.FileNotFoundException;\r
\r
public class JavadocExceptionDocumentationDemo {\r
\r
    /**\r
     * Enrolls a student in the Barrackpore Java Core professional track.\r
     *\r
     * @param studentName The full name of the student (must not be null or blank)\r
     * @param admissionFee The deposit amount (must be positive)\r
     * @return Confirmation receipt token string\r
     *\r
     * @throws IllegalArgumentException if {@code studentName} is empty or {@code admissionFee <= 0}\r
     * @throws NullPointerException if {@code studentName} is null\r
     * @throws FileNotFoundException if the syllabus prospectus file is missing on disk\r
     */\r
    public static String enrollTrainee(String studentName, double admissionFee) throws FileNotFoundException {\r
        if (studentName == null) {\r
            throw new NullPointerException("Student name cannot be null!");\r
        }\r
        if (studentName.trim().isEmpty() || admissionFee <= 0) {\r
            throw new IllegalArgumentException("Invalid admission parameters!");\r
        }\r
\r
        System.out.println("  [ENROLLED] " + studentName + " in Barrackpore batch with fee: " + admissionFee + " INR");\r
        return "RCPT_BKP_" + System.currentTimeMillis();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: JAVADOC @throws DOCUMENTATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 3 RULES OF EFFECTIVE JAVA ITEM 74 (Document All Exceptions):");\r
        System.out.println("  1. Document EVERY Checked exception with an explicit '@throws' tag.");\r
        System.out.println("  2. Document EVERY Unchecked exception that callers must avoid (e.g. NPE, IllegalArgument).");\r
        System.out.println("  3. DO NOT include Unchecked exceptions in the method header 'throws' signature, ONLY in Javadoc!");\r
\r
        System.out.println("\\n>>> Executing Valid Enrollment:");\r
        try {\r
            String receipt = enrollTrainee("Abhronila Das", 7500.0);\r
            System.out.println("  Receipt Issued: " + receipt);\r
        } catch (FileNotFoundException e) {\r
            System.out.println("  [ERROR] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 9: Javadoc @throws Documentation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JAVADOC EXCEPTION RULES:\r
   - Use '@throws ExceptionType condition description'.\r
   - Document both Checked and Unchecked exceptions.\r
   - Do NOT clutter method header with unchecked exceptions.\r
   - Provides clear preconditions to API consumers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the rules prescribed by Effective Java Item 74 for documenting exceptions with Javadoc?",shortAnswer:"1. Document EVERY exception (both checked and unchecked) using the Javadoc '@throws' tag with the exact condition under which it occurs. 2. Declare Checked Exceptions in the method 'throws' signature. 3. Do NOT declare Unchecked Exceptions in the method header signature—document them exclusively in Javadoc.",explanation:"Keeps public API signatures clean while providing comprehensive developer documentation.",hint:"Document all exceptions in Javadoc @throws; only include checked exceptions in method header.",level:"Intermediate",codeExample:"/** @throws IllegalArgumentException if amount <= 0 */ public void pay(int amount) {}"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Javadoc Engineering"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Documenting Exceptions in Javadoc Using the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@throws"})," Tag"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply Effective Java Item 74: writing professional Javadoc ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"@throws"})," tags to clearly articulate precondition constraints and failure modes for API consumers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"JavadocExceptionDocumentationDemo.java",highlightLines:[7,13,14,15,16,17,18,19,21,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Javadoc @throws FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 004_005 Topic 9: Javadoc Documentation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic9_javadoc_documentation_note.txt"})}),e.jsx(r,{note:"Never hide failure conditions! Use '@throws IllegalArgumentException if amount is negative' so that anyone calling your method from Naihati or Shyamnagar knows exactly how to use it safely! — Sukanta Hui"})]})}export{g as default};
