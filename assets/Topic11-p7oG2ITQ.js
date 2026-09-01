import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 11: Using 'super()' to Invoke Parent Class Constructors\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class SuperConstructorInvocationDemo {\r
\r
    // Parent Class (Parameterized Constructor Only)\r
    public static class Person {\r
        private final String fullName;\r
        private final String residentialCity;\r
\r
        public Person(String fullName, String residentialCity) {\r
            this.fullName = fullName;\r
            this.residentialCity = residentialCity;\r
            System.out.printf("  [PARENT Person <init>] Name: %s | City: %s\\n", fullName, residentialCity);\r
        }\r
\r
        public String getFullName() { return fullName; }\r
        public String getCity() { return residentialCity; }\r
    }\r
\r
    // Subclass (Must explicitly invoke super(name, city))\r
    public static class TraineeCandidate extends Person {\r
        private final int rollId;\r
        private final String courseTrack;\r
\r
        public TraineeCandidate(String fullName, String city, int rollId, String courseTrack) {\r
            // Explicit call to parent parameterized constructor on LINE 1\r
            super(fullName, city);\r
\r
            this.rollId = rollId;\r
            this.courseTrack = courseTrack;\r
            System.out.printf("  [CHILD TraineeCandidate <init>] Roll: %d | Track: %s\\n", rollId, courseTrack);\r
        }\r
\r
        public void printBadge() {\r
            System.out.printf("  -> [%d] %s (%s) enrolled in %s\\n", rollId, getFullName(), getCity(), courseTrack);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: USING 'super()' TO INVOKE PARENT CONSTRUCTOR - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeCandidate swadeep = new TraineeCandidate("Swadeep Paul", "Barrackpore", 101, "Core Java Pro");\r
        swadeep.printBadge();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 11: Using 'super()' to Invoke Parent Class Constructors\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'super()' CONSTRUCTOR RULES:\r
   - Must be the FIRST statement in the child constructor body.\r
   - Passes arguments up to the parent constructor ('super(name, city);').\r
   - Parent constructor executes BEFORE child constructor body.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why must a child class constructor invoke 'super()'?",shortAnswer:"To initialize the inherited fields and establish invariants of the parent superclass before child class initialization begins.",explanation:"Because an object is a single unified entity containing both parent and child state, the parent portion must be initialized first.",hint:"Initializes inherited parent fields before child fields.",level:"Beginner",codeExample:"public Child(int id, String name) { super(name); this.id = id; }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Parent Genesis"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Using ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"super()"})," to Invoke Parent Class Constructors"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master parent constructor invocation in Java inheritance hierarchies. Understand how ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"super(...)"})," establishes inherited state before child initializers execute."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"SuperConstructorInvocationDemo.java",highlightLines:[15,27,29,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Parent Constructor 'super()' FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_003 Topic 11: Using super() Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic11_super_constructor_note.txt"})}),e.jsx(i,{note:"When a TraineeCandidate is born, its Person foundation must be initialized first! super(fullName, city) passes data to the parent constructor on Line 1. — Sukanta Hui"})]})}export{f as default};
