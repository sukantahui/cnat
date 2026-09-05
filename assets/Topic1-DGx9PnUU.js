import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 1: Using 'this' to Resolve Variable Shadowing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class VariableShadowingResolutionDemo {\r
\r
    public static class TraineeRecord {\r
        // Instance Variables (State residing on Heap)\r
        private String studentName;\r
        private int rollNumber;\r
        private double feeDue;\r
\r
        // Parameter names are IDENTICAL to instance variables (Shadowing occurs)\r
        public TraineeRecord(String studentName, int rollNumber, double feeDue) {\r
            // Without 'this', 'studentName = studentName' assigns parameter to itself (no effect on Heap)!\r
            // With 'this', we explicitly target the Heap instance variable:\r
            this.studentName = studentName;\r
            this.rollNumber = rollNumber;\r
            this.feeDue = feeDue;\r
\r
            System.out.printf("  [SHADOWING RESOLVED] Initialized %s (Roll: %d) with Fee: ₹%.2f\\n",\r
                    this.studentName, this.rollNumber, this.feeDue);\r
        }\r
\r
        // Setter method with shadowing\r
        public void setFeeDue(double feeDue) {\r
            this.feeDue = feeDue; // Resolves shadowing\r
        }\r
\r
        public void printState() {\r
            System.out.printf("  -> Student: %s | Roll: %d | Fee Due: ₹%.2f\\n", studentName, rollNumber, feeDue);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: VARIABLE SHADOWING RESOLUTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating Trainee with identical parameter & field names:");\r
        TraineeRecord swadeep = new TraineeRecord("Swadeep Paul", 101, 2500.0);\r
        swadeep.printState();\r
\r
        System.out.println("\\n>>> 2. Updating fee via setter using 'this.feeDue = feeDue':");\r
        swadeep.setFeeDue(1000.0);\r
        swadeep.printState();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 1: Using 'this' to Resolve Variable Shadowing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VARIABLE SHADOWING DEFINITION:\r
   -----------------------------------------------------------------------------\r
   - Occurs when parameter names match instance variable names.\r
   - Inside the method/constructor, unqualified variable names resolve to the\r
     LOCAL parameter!\r
\r
2. THE 'this.' SOLUTION:\r
   - 'this.fieldName' → Targets instance variable on Heap.\r
   - 'fieldName' → Targets local parameter in stack frame.\r
   - Syntax: 'this.fieldName = fieldName;'\r
\r
3. THE 'name = name' BUG:\r
   - Writing 'name = name;' assigns parameter to parameter (no-op).\r
   - Leaves Heap field uninitialized (null or 0)!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is Variable Shadowing in Java?",shortAnswer:"When a local variable or constructor/method parameter declares the exact same identifier name as an instance variable, hiding (shadowing) the instance variable in that scope.",explanation:"Inside that method body, unqualified references to the name resolve to the closest local scope (the parameter) rather than the instance variable.",hint:"Local parameter hides instance variable with identical name.",level:"Beginner",codeExample:"class Student { int age; Student(int age) { this.age = age; } }"},{question:"What happens if you write 'name = name;' in a constructor when parameter and field share the name 'name'?",shortAnswer:"It assigns the local parameter to itself (a no-op); the instance variable on the Heap remains at its default value (null or 0).",explanation:"This is the classic beginner bug: field remains uninitialized because the parameter was assigned to itself.",hint:"Parameter assigns to itself; field remains default null/0.",level:"Beginner",codeExample:"public Student(String name) { name = name; // BUG! Field remains null }"},{question:"How does the 'this' keyword resolve variable shadowing?",shortAnswer:"By qualifying the instance variable with 'this.' (e.g. 'this.name = name;'), directing the compiler to target the Heap instance field.",explanation:"'this.name' unambiguously references the instance field, while 'name' references the local parameter.",hint:"this.fieldName = parameterName.",level:"Beginner",codeExample:"public Student(String name) { this.name = name; // Correct! }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Scope Resolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," to Resolve Variable Shadowing"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the most common idiom in Java OOP: resolving variable shadowing when constructor and setter parameter names are identical to instance fields."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Shadowing Trap and the ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this."})," Shield"]}),e.jsx("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:e.jsxs("p",{children:["When a parameter shares the exact identifier as an instance variable, the local parameter shadows the field. Writing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"studentName = studentName;"})," assigns the local variable to itself, leaving the Heap field as ",e.jsx("code",{className:"text-rose-300 font-mono",children:"null"}),". Qualifying the field with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"this.studentName = studentName;"})," resolves the ambiguity."]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"VariableShadowingResolutionDemo.java",highlightLines:[18,19,20,28,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Variable Shadowing FAQs (Technical Q&As)",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_003 Topic 1: Variable Shadowing Resolution",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic1_variable_shadowing_note.txt"})}),e.jsx(r,{note:"Never write name = name; inside your constructor! Always use this.name = name; to ensure you are populating the actual Heap object. — Sukanta Hui"})]})}export{f as default};
