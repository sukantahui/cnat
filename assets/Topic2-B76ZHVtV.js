import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 2: Why Abstract Classes CANNOT Be Directly Instantiated with 'new'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractInstantiationRestrictionsDemo {\r
\r
    public abstract static class DatabaseConnector {\r
        // Abstract method without implementation body:\r
        public abstract void establishConnection();\r
    }\r
\r
    public static class MySQLConnector extends DatabaseConnector {\r
        @Override\r
        public void establishConnection() {\r
            System.out.println("  [MYSQL] Connected via port 3306 to Barrackpore central DB.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: WHY ABSTRACT CLASSES CANNOT USE 'new' - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. ATTEMPTING TO INSTANTIATE ABSTRACT CLASS DIRECTLY:\r
        // DatabaseConnector db = new DatabaseConnector(); // COMPILE ERROR!\r
        // Error: "DatabaseConnector is abstract; cannot be instantiated"\r
\r
        System.out.println(">>> Why direct 'new DatabaseConnector()' is strictly illegal:");\r
        System.out.println("  1. Incomplete Definition: DatabaseConnector has abstract methods without code bodies.");\r
        System.out.println("  2. JVM Safety: If 'new' were allowed, calling 'db.establishConnection()' would crash");\r
        System.out.println("     because the JVM would have zero bytecodes to execute!");\r
        System.out.println("  3. Solution: Must instantiate a concrete subclass (e.g. MySQLConnector)!");\r
\r
        System.out.println("\\n>>> 2. Instantiating concrete subclass via superclass reference:");\r
        DatabaseConnector db = new MySQLConnector();\r
        db.establishConnection();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 2: Why Abstract Classes Cannot Be Instantiated\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INSTANTIATION RULES:\r
   - 'new AbstractClass()' &rarr; COMPILE ERROR ("cannot be instantiated").\r
   - Can declare reference variables: 'AbstractClass ref;' (100% legal).\r
   - Only concrete child subclasses that implement all abstract methods can be instantiated.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does the Java compiler prohibit creating an object of an abstract class ('new AbstractClass()')?",shortAnswer:"Because an abstract class is conceptually incomplete and may contain abstract methods with no code body; if an instance were created, calling an abstract method would have no bytecode to execute.",explanation:"To guarantee runtime reliability, Java permits instantiation only of fully concrete subclasses.",hint:"Incomplete definition with missing method bodies would cause undefined runtime behavior.",level:"Beginner",codeExample:"// Compile Error: Base b = new Base();"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 2"}),t.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Compiler Prohibitions"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Why Abstract Classes CANNOT Be Directly Instantiated with ",t.jsx("code",{className:"text-rose-400 font-mono",children:"new"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deep-dive into the architectural reasons why Java strictly prohibits direct instantiation of abstract types, guaranteeing zero runtime undefined method crashes."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"AbstractInstantiationRestrictionsDemo.java",highlightLines:[10,12,16,32]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Abstract Class Instantiation FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:o,title:"Module 002_007 Topic 2: Abstract Instantiation Restrictions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic2_instantiation_restrictions_note.txt"})}),t.jsx(s,{note:"You cannot build a 'Generic Vehicle' on a factory line—you can only build a Car, a Truck, or a Motorcycle! That is why Abstract Classes cannot be instantiated with new. — Sukanta Hui"})]})}export{x as default};
