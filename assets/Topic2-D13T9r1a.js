import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 2: The 'toString()' Method: Default Memory Address vs Custom Formatted Representation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class ToStringOverridingMasteryDemo {\r
\r
    // 1. Without overriding toString() (Uses Object default)\r
    public static class RawTrainee {\r
        private String name = "Swadeep Paul";\r
        private int roll = 101;\r
    }\r
\r
    // 2. With clean @Override toString()\r
    public static class FormattedTrainee {\r
        private String name;\r
        private int roll;\r
        private String hubLocation;\r
\r
        public FormattedTrainee(String name, int roll, String hub) {\r
            this.name = name;\r
            this.roll = roll;\r
            this.hubLocation = hub;\r
        }\r
\r
        @Override\r
        public String toString() {\r
            return String.format("Trainee[Roll=%d, Name='%s', Hub='%s']", roll, name, hubLocation);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE toString() METHOD MASTERY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        RawTrainee raw = new RawTrainee();\r
        FormattedTrainee formatted = new FormattedTrainee("Swadeep Paul", 101, "Barrackpore Central Hub");\r
\r
        System.out.println(">>> 1. Default Object.toString() output (ClassName@HexHashCode):");\r
        System.out.println("  " + raw); // Automatically invokes raw.toString()!\r
\r
        System.out.println("\\n>>> 2. Overridden Formatted toString() output:");\r
        System.out.println("  " + formatted); // Automatically invokes formatted.toString()!\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 2: The toString() Method\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. toString() ESSENTIALS:\r
   - Default output: 'ClassName@HexHashCode' (Unhelpful for humans).\r
   - System.out.println(obj) automatically invokes 'obj.toString()'.\r
   - String concatenation ('"Hello " + obj') automatically invokes 'obj.toString()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the default implementation format of 'Object.toString()' in Java?",shortAnswer:"'getClass().getName() + '@' + Integer.toHexString(hashCode())' (e.g. 'com.app.Student@7a81197d').",explanation:"Overriding toString() provides meaningful debug logs and clean console prints.",hint:"Outputs ClassName@HexHashCode by default.",level:"Beginner",codeExample:'@Override public String toString() { return \\"User[id=\\" + id + \\"]\\"; }'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Readable Representations"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"toString()"})," Method: Default vs Formatted Output"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"toString()"})," enables rich logging and debugging: replacing cryptic ",e.jsx("code",{className:"text-amber-400 font-mono",children:"ClassName@HashCode"})," addresses with formatted field representations."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ToStringOverridingMasteryDemo.java",highlightLines:[11,24,25,38,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"toString() FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_010 Topic 2: toString() Method",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic2_tostring_note.txt"})}),e.jsx(a,{note:"Whenever you print an object in System.out.println, Java secretly calls toString() for you. Always override it so your logs show actual student names and numbers instead of @7a81197d! — Sukanta Hui"})]})}export{h as default};
