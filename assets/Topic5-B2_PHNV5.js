import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 5: Traditional Interface Methods: Implicitly 'public abstract'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class TraditionalInterfaceMethodsDemo {\r
\r
    public interface DatabaseOperations {\r
        // Both declarations are 100% equivalent in bytecode:\r
        void insertRecord(String table, String data);\r
        public abstract void deleteRecord(String table, int recordId);\r
    }\r
\r
    public static class MySQLDatabaseOps implements DatabaseOperations {\r
        @Override\r
        public void insertRecord(String table, String data) {\r
            System.out.printf("  [MYSQL INSERT] INSERT INTO %s VALUES ('%s')\\n", table, data);\r
        }\r
\r
        @Override\r
        public void deleteRecord(String table, int recordId) {\r
            System.out.printf("  [MYSQL DELETE] DELETE FROM %s WHERE id = %d\\n", table, recordId);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: TRADITIONAL INTERFACE METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        DatabaseOperations db = new MySQLDatabaseOps();\r
        db.insertRecord("trainees", "Swadeep Paul, Barrackpore");\r
        db.deleteRecord("trainees", 101);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 5: Traditional Interface Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TRADITIONAL INTERFACE METHODS:\r
   - Implicitly: 'public abstract'.\r
   - Cannot have a method body (must end in a semicolon ';').\r
   - Implementing classes must override with 'public' visibility.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the implicit modifiers applied to regular methods in an interface?",shortAnswer:"They are implicitly 'public' and 'abstract'.",explanation:"Even if declared simply as 'void run();', the compiler translates it to 'public abstract void run();'.",hint:"Implicitly public and abstract.",level:"Beginner",codeExample:"interface Worker { void work(); // public abstract void work(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Method Contracts"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Interface Methods: Implicitly ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"public abstract"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why traditional interface methods are implicitly public abstract, and how the compiler verifies implementations in child classes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"TraditionalInterfaceMethodsDemo.java",highlightLines:[12,13,17,22,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Traditional Interface Methods FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_008 Topic 5: Interface Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic5_interface_methods_note.txt"})}),e.jsx(n,{note:"Writing 'void run();' in an interface is identical to 'public abstract void run();'. Keep your code clean and let Java handle the defaults! — Sukanta Hui"})]})}export{h as default};
