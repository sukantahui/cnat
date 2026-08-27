import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 2: Using 'this' to Invoke Current Class Instance Methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class ThisMethodInvocationDemo {\r
\r
    public static class AcademicReport {\r
        private String traineeName;\r
        private double marksPercentage;\r
\r
        public AcademicReport(String traineeName, double marksPercentage) {\r
            this.traineeName = traineeName;\r
            this.marksPercentage = marksPercentage;\r
        }\r
\r
        private String calculateGrade() {\r
            return marksPercentage >= 90 ? "Grade A+" : (marksPercentage >= 75 ? "Grade A" : "Grade B");\r
        }\r
\r
        private void printHeader() {\r
            System.out.println("  ========================================");\r
            System.out.println("  ACCOTAX ACADEMIC PERFORMANCE REPORT");\r
            System.out.println("  ========================================");\r
        }\r
\r
        // Using 'this.methodName()' to explicitly invoke peer instance methods\r
        public void generateFullReport() {\r
            this.printHeader(); // Explicit this invocation\r
            String grade = this.calculateGrade(); // Explicit this invocation\r
            System.out.printf("  Trainee: %s | Marks: %.1f%% | Result: %s\\n", this.traineeName, this.marksPercentage, grade);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: USING 'this' TO INVOKE METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademicReport report = new AcademicReport("Swadeep Paul", 94.5);\r
        report.generateFullReport();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 2: Using 'this' to Invoke Current Class Instance Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD INVOCATION VIA 'this':\r
   -----------------------------------------------------------------------------\r
   - Calling 'this.methodName()' explicitly invokes an instance method on the\r
     current Heap object.\r
   - If 'this.' is omitted, the compiler automatically inserts it during bytecode\r
     generation ('invokevirtual').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Is 'this.methodName()' required when calling another instance method in the same class?",shortAnswer:"No, 'this.' is optional; calling 'methodName()' implicitly uses 'this.methodName()'. However, writing 'this.' adds explicit readability and clarifies instance binding.",explanation:"The compiler automatically inserts 'this' for unqualified instance method calls within the same class.",hint:"Optional, but adds clarity to show instance method invocation.",level:"Beginner",codeExample:"this.calculate(); // Identical to calculate();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Method Dispatch"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," to Invoke Current Class Instance Methods"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand how explicit ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this.method()"})," calls operate under the hood and how the compiler inserts implicit ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this"})," receivers for peer instance method invocations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ThisMethodInvocationDemo.java",highlightLines:[25,26,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Invoking Methods via 'this' FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 002_003 Topic 2: Using this to Invoke Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic2_this_methods_note.txt"})}),e.jsx(a,{note:"Using this.method() makes your code crystal-clear to team members, showing that you are executing an instance method on the current receiver. — Sukanta Hui"})]})}export{g as default};
