import{j as a}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 8: Instance Variables and Constants in Abstract Classes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractFieldsAndConstantsDemo {\r
\r
    public abstract static class BaseAcademyNode {\r
        // 1. Static Constant (Universal institutional constant)\r
        public static final String ACADEMY_AFFILIATION = "Coder & AccoTax Barrackpore";\r
\r
        // 2. Mutable Instance Variables (Inherited by all child instances)\r
        protected String centerBranch;\r
        protected double centerOperatingBudget;\r
\r
        public BaseAcademyNode(String branch, double budget) {\r
            this.centerBranch = branch;\r
            this.centerOperatingBudget = budget;\r
        }\r
\r
        public abstract void renderCampusStatus();\r
    }\r
\r
    public static class RegionalLabNode extends BaseAcademyNode {\r
        private int activeTerminals;\r
\r
        public RegionalLabNode(String branch, double budget, int terminals) {\r
            super(branch, budget);\r
            this.activeTerminals = terminals;\r
        }\r
\r
        @Override\r
        public void renderCampusStatus() {\r
            System.out.printf("  [CAMPUS] %s | Hub: %s | Budget: ₹%.2f | Terminals: %d\\n",\r
                    ACADEMY_AFFILIATION, centerBranch, centerOperatingBudget, activeTerminals);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: FIELDS & CONSTANTS IN ABSTRACT CLASSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BaseAcademyNode lab = new RegionalLabNode("Barrackpore Central Lab", 150000.0, 45);\r
        lab.renderCampusStatus();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 8: Fields and Constants in Abstract Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATE IN ABSTRACT CLASSES:\r
   - Can declare instance variables (private, protected, public, package-private).\r
   - Can declare static variables and constants ('static final').\r
   - Holds true instance state on the Heap for each subclass object.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Can an abstract class declare instance variables with various access modifiers (private, protected, public)?",shortAnswer:"Yes! Unlike interfaces (where variables are strictly 'public static final' constants), abstract classes can declare mutable instance variables of any access modifier and data type.",explanation:"This allows abstract classes to encapsulate mutable state alongside abstract behaviors.",hint:"Abstract classes can hold mutable instance variables with any access modifier.",level:"Beginner",codeExample:"abstract class Bank { protected double balance; private String pin; }"}];function h(){return a.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[a.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),a.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 8"}),a.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"State Encapsulation"})]}),a.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Instance Variables & Constants in Abstract Classes"}),a.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how abstract classes maintain real instance state: holding mutable fields, defining static constants, and contrasting state encapsulation against pure interfaces."})]}),a.jsxs("section",{className:"space-y-4",children:[a.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[a.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),a.jsx(e,{fileModule:r,title:"AbstractFieldsAndConstantsDemo.java",highlightLines:[12,15,16,29,39]})]}),a.jsx("section",{className:"space-y-4",children:a.jsx(t,{title:"Fields & Constants in Abstract Classes FAQs",questions:c})}),a.jsx("section",{className:"space-y-4",children:a.jsx(n,{content:i,title:"Module 002_007 Topic 8: Abstract Fields & Constants",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic8_abstract_fields_note.txt"})}),a.jsx(s,{note:"Unlike Interfaces where all variables are public static final, abstract classes can hold private and protected instance variables that change as your object lives! — Sukanta Hui"})]})}export{h as default};
