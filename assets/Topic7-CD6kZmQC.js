import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 7: I - Interface Segregation Principle (ISP): 'No Client Forced to Depend on Unused Methods'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class InterfaceSegregationPrincipleDemo {\r
\r
    // ANTI-PATTERN: 'Fat / Bloated Interface'\r
    // public interface BloatedMultiFunctionDevice {\r
    //     void print(String doc);\r
    //     void scan(String doc);\r
    //     void fax(String doc); // A simple laser printer cannot fax!\r
    // }\r
\r
    // ISP COMPLIANT: Fine-grained, role-specific interfaces!\r
    public interface Printer {\r
        void printDocument(String content);\r
    }\r
\r
    public interface Scanner {\r
        void scanDocument(String content);\r
    }\r
\r
    public interface FaxMachine {\r
        void sendFax(String content);\r
    }\r
\r
    // 1. Simple Budget Printer implements ONLY what it actually supports:\r
    public static class SimpleLaserPrinter implements Printer {\r
        public void printDocument(String content) {\r
            System.out.println("  [LASER PRINTER] Printed: " + content);\r
        }\r
    }\r
\r
    // 2. High-End Office All-In-One implements multiple interfaces:\r
    public static class EnterpriseWorkstation implements Printer, Scanner, FaxMachine {\r
        public void printDocument(String c) { System.out.println("  [ENTERPRISE] Printing: " + c); }\r
        public void scanDocument(String c)  { System.out.println("  [ENTERPRISE] Scanning: " + c); }\r
        public void sendFax(String c)       { System.out.println("  [ENTERPRISE] Faxing: " + c); }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: INTERFACE SEGREGATION PRINCIPLE (ISP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Printer budget = new SimpleLaserPrinter();\r
        budget.printDocument("Swadeep Paul's Java Certificate");\r
\r
        EnterpriseWorkstation office = new EnterpriseWorkstation();\r
        office.scanDocument("Admissions Form");\r
        office.printDocument("Receipt BKP-2026");\r
\r
        System.out.println("\\n>>> ISP Rule: Clients should never be forced to implement methods they do not need.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 7: Interface Segregation Principle (ISP)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ISP RULE (Uncle Bob):\r
   - 'No client should be forced to depend on methods it does not use.'\r
   - Break fat interfaces into single-purpose role interfaces.\r
   - Classes can implement multiple small interfaces as needed.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the core premise of the Interface Segregation Principle (ISP)?",shortAnswer:"ISP states that 'Clients should not be forced to depend on interfaces they do not use.' Fat interfaces should be split into smaller, cohesive, role-specific interfaces so implementing classes only fulfill relevant methods.",explanation:"Prevents empty or exception-throwing stub method implementations.",hint:"Split fat interfaces into small, focused, role-specific interfaces.",level:"Beginner",codeExample:`interface Printer { void print(); }
interface Scanner { void scan(); }`}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SOLID: I"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["I — Interface Segregation Principle (ISP): ",e.jsx("span",{className:"text-emerald-400",children:"Lean Role Interfaces"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Eliminate bloated, fat interfaces: decomposing monolithic contracts into lean, modular, and role-specific interfaces that clients can adopt without empty stub methods."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"InterfaceSegregationPrincipleDemo.java",highlightLines:[18,22,26,30,36,46]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ISP FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_011 Topic 7: Interface Segregation Principle",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic7_isp_note.txt"})}),e.jsx(i,{note:"If an interface has 20 methods and a class only needs 2 of them, do not force the class to implement 18 empty dummy methods! Split the interface into small, focused contracts. — Sukanta Hui"})]})}export{S as default};
