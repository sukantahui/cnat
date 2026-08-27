import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const t=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 9: Using 'super' to Access Shadowed Parent Class Instance Variables\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class SuperFieldShadowingDemo {\r
\r
    // Parent Class\r
    public static class StandardCourse {\r
        protected double baseFee = 6000.0; // Parent Field\r
    }\r
\r
    // Child Class (Declares field with identical name -> Hides/Shadows Parent Field!)\r
    public static class PremiumSpecialization extends StandardCourse {\r
        protected double baseFee = 12000.0; // Child Field shadows parent baseFee\r
\r
        public void printFeeComparison() {\r
            // 'baseFee' or 'this.baseFee' refers to Child field\r
            System.out.printf("  [CHILD FIELD] Current Specialization Fee (this.baseFee): ₹%.2f\\n", this.baseFee);\r
\r
            // 'super.baseFee' explicitly bypasses shadowing to read Parent field\r
            System.out.printf("  [PARENT FIELD] Standard Foundation Fee (super.baseFee): ₹%.2f\\n", super.baseFee);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ACCESSING SHADOWED PARENT FIELDS VIA 'super' - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        PremiumSpecialization javaPro = new PremiumSpecialization();\r
        javaPro.printFeeComparison();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 9: Using 'super' to Access Shadowed Parent Instance Variables\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FIELD SHADOWING IN INHERITANCE:\r
   - Fields are NOT polymorphic and are NEVER overridden.\r
   - If Child declares 'int fee = 200;', it shadows Parent 'int fee = 100;'.\r
   - 'this.fee' &rarr; Child's field (200).\r
   - 'super.fee' &rarr; Parent's field (100).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What happens when a child class declares an instance variable with the exact same name as a parent class variable?",shortAnswer:"The child field hides (shadows) the parent field. The child class object actually contains BOTH variables in memory; 'super.field' accesses the parent variable.",explanation:"Fields in Java are NOT overridden polymorphically; they are shadowed. Both fields exist in the Heap object.",hint:"Both fields exist in memory; super.fieldName accesses the parent field.",level:"Intermediate",codeExample:"class Child extends Parent { int x = 20; void print() { System.out.println(super.x); } }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Field Shadowing"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super"})," to Access Shadowed Parent Instance Variables"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand why fields in Java cannot be overridden. Learn how both parent and child fields coexist in Heap memory and how ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super.field"})," accesses shadowed superclass state."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:t,title:"SuperFieldShadowingDemo.java",highlightLines:[12,17,21,24,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Field Shadowing & 'super' FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 002_003 Topic 9: Shadowed Parent Fields",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic9_shadowed_fields_note.txt"})}),e.jsx(n,{note:"Remember: Methods can be overridden polymorphically, but variables are only shadowed! Both parent and child variables live together in memory. — Sukanta Hui"})]})}export{b as default};
