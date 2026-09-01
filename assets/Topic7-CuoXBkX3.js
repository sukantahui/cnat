import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 7: Constructors in Abstract Classes: Purpose and Execution via Child super()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractClassConstructorExecutionDemo {\r
\r
    public abstract static class AcademyTrainee {\r
        protected int traineeId;\r
        protected String traineeName;\r
        protected String centerBranch;\r
\r
        // CONSTRUCTOR IN ABSTRACT CLASS:\r
        // Even though this class cannot be instantiated directly with 'new',\r
        // its constructor is REQUIRED to initialize its instance variables when\r
        // a concrete subclass invokes 'super(...)'.\r
        public AcademyTrainee(int id, String name, String branch) {\r
            this.traineeId = id;\r
            this.traineeName = name;\r
            this.centerBranch = branch;\r
            System.out.printf("  [ABSTRACT CONSTRUCTOR] Initialized base trainee state: ID=%d, Name=%s @ %s\\n",\r
                    id, name, branch);\r
        }\r
\r
        public abstract void printIdCard();\r
    }\r
\r
    public static class FullStackTrainee extends AcademyTrainee {\r
        private String cloudLabId;\r
\r
        public FullStackTrainee(int id, String name, String branch, String cloudLabId) {\r
            super(id, name, branch); // Invokes Abstract Superclass Constructor!\r
            this.cloudLabId = cloudLabId;\r
            System.out.println("  [CHILD CONSTRUCTOR] FullStackTrainee ready with Cloud Lab: " + cloudLabId);\r
        }\r
\r
        @Override\r
        public void printIdCard() {\r
            System.out.printf("  -> CARD: [%d] %s (%s) | Cloud Sandbox: %s\\n",\r
                    traineeId, traineeName, centerBranch, cloudLabId);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: ABSTRACT CLASS CONSTRUCTORS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        FullStackTrainee trainee = new FullStackTrainee(101, "Swadeep Paul", "Barrackpore Hub", "AWS-BKP-01");\r
        trainee.printIdCard();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 7: Constructors in Abstract Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ABSTRACT CLASS CONSTRUCTOR PURPOSE:\r
   - Abstract classes CAN declare constructors.\r
   - Executed only through subclass 'super()' constructor chaining.\r
   - Initializes superclass fields and enforces domain invariants.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Why do abstract classes have constructors if they cannot be instantiated directly with 'new'?",shortAnswer:"To initialize the instance variables declared in the abstract class when a concrete subclass object is instantiated via 'super(...)' constructor chaining.",explanation:"Subclass objects contain the fields of the abstract superclass; those fields must be properly initialized by the abstract class's constructor.",hint:"Initializes abstract superclass instance variables during child object creation.",level:"Intermediate",codeExample:"abstract class Parent { Parent(int id) { this.id = id; } }"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 7"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"State Initialization"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Constructors in Abstract Classes: Purpose & Execution via ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"super()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why abstract classes declare constructors, how they execute via child ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"super(...)"})," delegations, and how they protect base state invariants."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:s,title:"AbstractClassConstructorExecutionDemo.java",highlightLines:[18,19,29,44]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Abstract Class Constructor FAQs",questions:c})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:i,title:"Module 002_007 Topic 7: Abstract Class Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic7_abstract_constructors_note.txt"})}),t.jsx(n,{note:"Don't be fooled by interview tricks: Yes, abstract classes DO have constructors! They run whenever a subclass calls super() to initialize inherited fields. — Sukanta Hui"})]})}export{x as default};
