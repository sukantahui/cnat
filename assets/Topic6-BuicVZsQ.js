import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 6: Returning 'this' from Methods to Enable Fluent Method Chaining\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class FluentMethodChainingThisDemo {\r
\r
    // Fluent Builder Class\r
    public static class TraineeRegistrationBuilder {\r
        private String name;\r
        private String hub = "Barrackpore";\r
        private String course = "Core Java";\r
        private double feeDiscount = 0.0;\r
        private boolean hostelRequired = false;\r
\r
        // Methods return 'this' (the current builder instance)\r
        public TraineeRegistrationBuilder setName(String name) {\r
            this.name = name;\r
            return this; // Enables chaining!\r
        }\r
\r
        public TraineeRegistrationBuilder setHub(String hub) {\r
            this.hub = hub;\r
            return this;\r
        }\r
\r
        public TraineeRegistrationBuilder setCourse(String course) {\r
            this.course = course;\r
            return this;\r
        }\r
\r
        public TraineeRegistrationBuilder setFeeDiscount(double feeDiscount) {\r
            this.feeDiscount = feeDiscount;\r
            return this;\r
        }\r
\r
        public TraineeRegistrationBuilder setHostelRequired(boolean hostelRequired) {\r
            this.hostelRequired = hostelRequired;\r
            return this;\r
        }\r
\r
        public void printSummary() {\r
            System.out.printf("  -> Registered: %s | Hub: %s | Course: %s | Discount: ₹%.2f | Hostel: %b\\n",\r
                    name, hub, course, feeDiscount, hostelRequired);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: FLUENT METHOD CHAINING VIA 'return this' - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating Trainee Registration via Fluent Chaining:");\r
        TraineeRegistrationBuilder builder = new TraineeRegistrationBuilder();\r
\r
        // Beautiful fluent method chaining in a single expressive statement!\r
        builder.setName("Swadeep Paul")\r
               .setHub("Barrackpore Central")\r
               .setCourse("Full Stack Java 2026")\r
               .setFeeDiscount(1500.0)\r
               .setHostelRequired(false);\r
\r
        builder.printSummary();\r
\r
        System.out.println("\\n>>> 2. Creating another Trainee for Tuhina at Naihati:");\r
        new TraineeRegistrationBuilder()\r
                .setName("Tuhina Das")\r
                .setHub("Naihati East")\r
                .setCourse("Spring Boot Pro")\r
                .setHostelRequired(true)\r
                .printSummary();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 6: Returning 'this' to Enable Fluent Method Chaining\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FLUENT CHAINING MECHANICS:\r
   - Method return type matches the class type (e.g. 'public MyClass setX(int x)').\r
   - Last statement in method: 'return this;'\r
   - Enables dot chaining: 'new MyClass().setA(1).setB(2).setC(3);'\r
   - Used extensively in Builder patterns and StringBuilder.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the Fluent Interface Pattern and how does 'return this' enable it?",shortAnswer:"A design pattern where methods return 'this' (the current object reference), allowing callers to chain method calls sequentially like 'obj.setA().setB().setC()'.",explanation:"Returning 'this' provides an expressive, readable API commonly used in Builders, StringBuilder, and Streams.",hint:"Methods return 'this' to allow sequential dot operator chaining.",level:"Beginner",codeExample:"public Builder setName(String n) { this.name = n; return this; }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Fluent Interface Design"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Returning ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," for Fluent Method Chaining"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build expressive, readable Java APIs. Discover how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"return this;"})," powers Fluent Interfaces, StringBuilder pipelines, and modern Builder patterns."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"FluentMethodChainingThisDemo.java",highlightLines:[18,23,28,48,49,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Fluent Method Chaining FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 002_003 Topic 6: Fluent Method Chaining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic6_fluent_chaining_note.txt"})}),e.jsx(i,{note:"return this; is the secret ingredient behind clean, readable code like StringBuilder.append().append() and modern Builder APIs! — Sukanta Hui"})]})}export{x as default};
