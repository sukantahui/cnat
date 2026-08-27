import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as s}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 15: Comprehensive Comparison Table: 'this' vs 'super'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class ThisVsSuperComprehensiveComparisonDemo {\r
\r
    public static class ParentEntity {\r
        protected String type = "Parent";\r
        public void execute() { System.out.println("  [PARENT] execute()"); }\r
    }\r
\r
    public static class ChildEntity extends ParentEntity {\r
        protected String type = "Child";\r
\r
        public ChildEntity() {\r
            super(); // Calls parent constructor\r
        }\r
\r
        public ChildEntity(String customType) {\r
            this(); // Calls peer constructor\r
            this.type = customType;\r
        }\r
\r
        @Override\r
        public void execute() {\r
            System.out.println("  [CHILD] execute()");\r
        }\r
\r
        public void demonstrateComparison() {\r
            System.out.println("  -> this.type:  " + this.type);  // Child field\r
            System.out.println("  -> super.type: " + super.type); // Parent field\r
            this.execute();  // Child method\r
            super.execute(); // Parent method\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: 'this' VS 'super' COMPLETE COMPARISON MATRIX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ChildEntity entity = new ChildEntity("Specialized Trainee");\r
        entity.demonstrateComparison();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 002_003 THE 'this' & 'super' KEYWORDS MASTERY 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 15: Comprehensive Comparison Table: 'this' vs 'super'\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE COMPLETE 'this' VS 'super' COMPARISON MATRIX:\r
   -----------------------------------------------------------------------------\r
   FEATURE              'this'                             'super'\r
   -----------------------------------------------------------------------------\r
   Target               Current class instance             Direct parent superclass\r
   Field Access         'this.field' (resolves shadowing)  'super.field' (accesses parent)\r
   Method Invocation    'this.method()' (current method)   'super.method()' (parent method)\r
   Constructor Call     'this(...)' (peer constructor)     'super(...)' (parent constructor)\r
   Static Context       FORBIDDEN                          FORBIDDEN\r
   Line 1 Mandate       YES (for this())                   YES (for super())\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Summarize the core differences between 'this' and 'super' in Java.",shortAnswer:"'this' refers to the current class instance, resolves shadowing, invokes peer methods, and chains peer constructors via 'this()'. 'super' refers to the direct parent class, accesses shadowed parent variables, invokes overridden parent methods, and chains parent constructors via 'super()'.",explanation:"Both are fundamental reference variables in Java OOP enabling clean class-level encapsulation and inheritance hierarchies.",hint:"Current class instance ('this') vs direct parent class members ('super').",level:"Beginner",codeExample:"// Complete comparison table in Topic 15"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Mastery Matrix"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Comprehensive Comparison Table: ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," vs ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The ultimate side-by-side comparison matrix. Master all structural, semantic, and JVM differences between Java's two most essential keywords."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"📋"})," The Definitive Comparison Table"]}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-xs md:text-sm border border-slate-700 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-950 text-slate-200 border-b border-slate-700 font-mono",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3 text-sky-400",children:"Feature"}),e.jsx("th",{className:"p-3 text-sky-300",children:"this"}),e.jsx("th",{className:"p-3 text-indigo-300",children:"super"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 text-slate-300",children:[e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Target Reference"}),e.jsx("td",{className:"p-3 font-mono text-sky-300",children:"Current class instance"}),e.jsx("td",{className:"p-3 font-mono text-indigo-300",children:"Direct superclass members"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Field Access"}),e.jsxs("td",{className:"p-3",children:["Resolves shadowing (",e.jsx("code",{className:"text-sky-300 font-mono",children:"this.x = x"}),")"]}),e.jsxs("td",{className:"p-3",children:["Accesses parent field (",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super.x"}),")"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Method Invocation"}),e.jsx("td",{className:"p-3",children:"Calls current class method"}),e.jsx("td",{className:"p-3",children:"Calls overridden parent method"})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Constructor Chaining"}),e.jsxs("td",{className:"p-3",children:[e.jsx("code",{className:"text-sky-300 font-mono",children:"this(...)"})," invokes peer constructor"]}),e.jsxs("td",{className:"p-3",children:[e.jsx("code",{className:"text-indigo-300 font-mono",children:"super(...)"})," invokes parent constructor"]})]}),e.jsxs("tr",{className:"hover:bg-slate-800/60",children:[e.jsx("td",{className:"p-3 font-semibold text-white",children:"Static Context"}),e.jsx("td",{className:"p-3 text-rose-300 font-semibold",children:"FORBIDDEN"}),e.jsx("td",{className:"p-3 text-rose-300 font-semibold",children:"FORBIDDEN"})]})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(s,{fileModule:a,title:"ThisVsSuperComprehensiveComparisonDemo.java",highlightLines:[18,22,33,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"this vs super FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_003 Topic 15: this vs super Comparison",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic15_comparison_note.txt"})}),e.jsx(n,{note:"Congratulations on mastering Module 002_003! You now understand both 'this' (current object identity) and 'super' (parent bridge). Keep practicing in the Barrackpore lab! — Sukanta Hui"})]})}export{b as default};
