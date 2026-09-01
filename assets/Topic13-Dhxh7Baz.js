import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 13: Abstract Class vs Interface: Comprehensive Comparison\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class AbstractClassVsInterfaceComparisonDemo {\r
\r
    // 1. ABSTRACT CLASS: Encapsulates mutable instance state + constructors\r
    public abstract static class BaseDevice {\r
        protected String serialNumber; // Mutable instance field\r
        public BaseDevice(String serial) { this.serialNumber = serial; } // Constructor!\r
        public abstract void powerOn();\r
    }\r
\r
    // 2. INTERFACE: Pure behavioral contract + multiple inheritance of type\r
    public interface NetworkConnectable {\r
        String DEFAULT_PROTOCOL = "TLS 1.3"; // Strictly public static final constant!\r
        void connectToWifi(String ssid); // Abstract contract\r
    }\r
\r
    // 3. Child Class combining both:\r
    public static class SmartWorkstation extends BaseDevice implements NetworkConnectable {\r
        public SmartWorkstation(String serial) { super(serial); }\r
\r
        @Override\r
        public void powerOn() {\r
            System.out.println("  [HARDWARE] Smart Workstation booted: " + serialNumber);\r
        }\r
\r
        @Override\r
        public void connectToWifi(String ssid) {\r
            System.out.printf("  [WIFI] Connected to '%s' using %s\\n", ssid, DEFAULT_PROTOCOL);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: ABSTRACT CLASS VS INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SmartWorkstation ws = new SmartWorkstation("BKP-WS-NODE-99");\r
        ws.powerOn();\r
        ws.connectToWifi("Barrackpore-Academy-Gigabit");\r
\r
        System.out.println("\\n>>> Deciding Factor Guide:");\r
        System.out.println("  - Choose Abstract Class when: Sharing state (fields) & constructors across related classes.");\r
        System.out.println("  - Choose Interface when     : Defining a contract/capability across unrelated classes or need multiple inheritance.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 13: Abstract Class vs Interface Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
FEATURE MATRIX:\r
+-------------------+----------------------------+-----------------------------+\r
| Feature           | Abstract Class             | Interface                   |\r
+-------------------+----------------------------+-----------------------------+\r
| Inheritance       | Single ('extends')         | Multiple ('implements')     |\r
| Instance Fields   | Yes (private, protected)   | No (public static final)    |\r
| Constructors      | Yes (invoked via super())  | No (Never instantiated)     |\r
| Methods           | Abstract + Concrete        | Abstract, default, static   |\r
| Speed             | Slightly faster vtable     | Interface table lookup      |\r
+-------------------+----------------------------+-----------------------------+\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"What are the primary structural differences between an Abstract Class and an Interface in Java?",shortAnswer:"1. State: Abstract classes have instance fields; interfaces have only 'public static final' constants. 2. Constructors: Abstract classes have constructors; interfaces do not. 3. Inheritance: A class can extend only 1 abstract class, but can implement MULTIPLE interfaces.",explanation:"Use abstract classes for closely related hierarchies sharing state; use interfaces for flexible role capabilities.",hint:"Abstract classes have constructors/fields; interfaces support multiple implementation and constants only.",level:"Intermediate",codeExample:`// Abstract Class: State + Single Inheritance
// Interface: Contract + Multiple Inheritance`}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Architectural Showdown"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Abstract Class vs Interface: Comprehensive Comparison Matrix"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the architectural decision matrix: instance state vs pure constants, constructors vs no constructors, and single inheritance vs multi-interface fulfillment."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"AbstractClassVsInterfaceComparisonDemo.java",highlightLines:[11,12,18,19,24,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Abstract Class vs Interface FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_008 Topic 13: Abstract Class vs Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic13_abstract_vs_interface_note.txt"})}),e.jsx(r,{note:"If your classes share mutable variables and a common family identity, use an Abstract Class. If you just want to declare a capability that totally unrelated classes can adopt, use an Interface! — Sukanta Hui"})]})}export{h as default};
