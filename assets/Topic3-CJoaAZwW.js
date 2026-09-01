import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 3: Implementing Multiple Interfaces: Safe Multiple Inheritance in Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class MultipleInterfacesImplementationDemo {\r
\r
    // Capability 1: Printable Badge\r
    public interface PrintableBadge {\r
        void printBadge();\r
    }\r
\r
    // Capability 2: Cloud Access\r
    public interface CloudSandboxAccess {\r
        void grantAwsSandbox(String labId);\r
    }\r
\r
    // Capability 3: Placement Eligible\r
    public interface PlacementEligible {\r
        void registerPlacementDrive(String company);\r
    }\r
\r
    // Class implementing MULTIPLE interfaces (Comma-separated list):\r
    public static class FullStackTrainee implements PrintableBadge, CloudSandboxAccess, PlacementEligible {\r
        private String name;\r
\r
        public FullStackTrainee(String name) { this.name = name; }\r
\r
        @Override\r
        public void printBadge() {\r
            System.out.printf("  [BADGE] Trainee: %s | Coder & AccoTax Barrackpore\\n", name);\r
        }\r
\r
        @Override\r
        public void grantAwsSandbox(String labId) {\r
            System.out.printf("  [AWS CLOUD] Sandbox allocated: %s for %s\\n", labId, name);\r
        }\r
\r
        @Override\r
        public void registerPlacementDrive(String company) {\r
            System.out.printf("  [PLACEMENT] %s registered for %s campus drive!\\n", name, company);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: MULTIPLE INTERFACES IMPLEMENTATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        FullStackTrainee swadeep = new FullStackTrainee("Swadeep Paul");\r
\r
        // Fulfilling all 3 independent capabilities:\r
        swadeep.printBadge();\r
        swadeep.grantAwsSandbox("AWS-LAB-NODE-77");\r
        swadeep.registerPlacementDrive("TCS Digital");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 3: Multiple Interfaces Implementation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTIPLE INTERFACE IMPLEMENTATION:\r
   - Syntax: 'class C extends ParentClass implements InterfaceA, InterfaceB, InterfaceC { ... }'\r
   - Safe: No multiple inheritance state conflicts because interfaces hold zero instance fields.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does Java solve multiple inheritance safely through interfaces?",shortAnswer:"A Java class can implement multiple interfaces simultaneously ('implements A, B, C'). Since traditional interfaces contain no instance state and only method signatures, there is no memory layout ambiguity or field collision.",explanation:"Allows a class to assume multiple behavioral roles across different subsystems.",hint:"A single class implements multiple comma-separated interfaces.",level:"Beginner",codeExample:"class Student implements Printable, Serializable, Comparable {}"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Multiple Inheritance"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Implementing Multiple Interfaces in a Single Class: Safe Multiple Inheritance"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how Java achieves rich polymorphic roles without the Diamond Problem: implementing multiple comma-separated interfaces in a single class."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:i,title:"MultipleInterfacesImplementationDemo.java",highlightLines:[11,16,21,25,43,44,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Multiple Interfaces FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:l,title:"Module 002_008 Topic 3: Multiple Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic3_multiple_interfaces_note.txt"})}),e.jsx(r,{note:"While Java forbids extending multiple classes, you can implement as many interfaces as you like! Swadeep can be a Trainee, a CloudDeveloper, and a PlacementCandidate all at once! — Sukanta Hui"})]})}export{b as default};
