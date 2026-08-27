import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 7: Exception Handling Rules in Overriding: Checked Exceptions Constraints\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
import java.io.FileNotFoundException;\r
import java.io.IOException;\r
\r
public class ExceptionHandlingOverridingRulesDemo {\r
\r
    public static class BaseFileStorage {\r
        // Parent method declares checked IOException\r
        public void loadConfigFile() throws IOException {\r
            System.out.println("  [BASE] Loading configuration file...");\r
        }\r
    }\r
\r
    public static class LocalStorage extends BaseFileStorage {\r
        // RULE 1 (VALID): Child can throw NARROWER checked exception (FileNotFoundException IS-A IOException):\r
        @Override\r
        public void loadConfigFile() throws FileNotFoundException {\r
            System.out.println("  [LOCAL CHILD] Loading local file (throws FileNotFoundException).");\r
        }\r
\r
        // RULE 2 (VALID): Child can choose to throw NO checked exception at all!\r
        // RULE 3 (VALID): Child can throw ANY Unchecked (RuntimeException) exceptions.\r
        // RULE 4 (ILLEGAL): Child CANNOT throw a BROADER checked exception (e.g. throws Exception)!\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: EXCEPTION HANDLING RULES IN OVERRIDING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BaseFileStorage storage = new LocalStorage();\r
        try {\r
            storage.loadConfigFile();\r
        } catch (IOException e) {\r
            e.printStackTrace();\r
        }\r
\r
        System.out.println("\\n>>> Summary of Checked Exception Overriding Laws:");\r
        System.out.println("  1. Child can throw FEWER or NARROWER checked exceptions.");\r
        System.out.println("  2. Child CANNOT declare NEW or BROADER checked exceptions.");\r
        System.out.println("  3. Unchecked exceptions (NullPointerException, etc.) have zero restrictions.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 7: Exception Handling Overriding Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CHECKED EXCEPTION OVERRIDING LAWS:\r
   - Child CAN declare: Same checked exception, narrower subclass exception, or NO exception.\r
   - Child CANNOT declare: Broader checked exception (e.g. Exception when parent declares IOException).\r
   - Unchecked exceptions (RuntimeException): Unrestricted.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What are the rules regarding Checked Exceptions when overriding a method in Java?",shortAnswer:"An overriding method CANNOT throw new or broader checked exceptions than those declared in the superclass method, but it CAN throw fewer, narrower (subtypes), or no checked exceptions at all.",explanation:"This rule guarantees that code calling the method through a superclass reference will never encounter unexpected checked exceptions.",hint:"Child can throw narrower checked exceptions, fewer exceptions, or none, but never broader exceptions.",level:"Intermediate",codeExample:`// Parent: throws IOException
// Child: throws FileNotFoundException (Valid)
// Child: throws Exception (ILLEGAL!)`}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Exception Contract"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Exception Handling Rules in Overriding: Checked Exception Constraints"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the exact compiler laws governing checked exceptions in overridden methods: why child methods cannot throw broader checked exceptions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ExceptionHandlingOverridingRulesDemo.java",highlightLines:[13,21,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Exception Handling Overriding FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 002_006 Topic 7: Exception Overriding Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic7_exception_overriding_note.txt"})}),e.jsx(o,{note:"If the parent promises to throw at most an IOException, the child cannot surprise the caller by throwing a broader Exception! The child can only throw narrower exceptions or none. — Sukanta Hui"})]})}export{E as default};
