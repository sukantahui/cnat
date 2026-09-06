import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 3: Abstract Methods: Method Signature Without Body\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractMethodsSignatureRulesDemo {\r
\r
    public abstract static class SalaryPayrollProcessor {\r
\r
        // ABSTRACT METHOD:\r
        // 1. Declared with 'abstract' keyword\r
        // 2. Has NO curly braces '{ ... }'\r
        // 3. Terminated strictly by a semicolon ';'\r
        public abstract double computeNetPay(double grossSalary, double taxRate);\r
\r
        // Abstract method with multiple parameters\r
        public abstract void generatePaySlip(String employeeName, double netAmount);\r
    }\r
\r
    public static class FullTimeStaffPayroll extends SalaryPayrollProcessor {\r
        @Override\r
        public double computeNetPay(double grossSalary, double taxRate) {\r
            double taxDeduction = grossSalary * (taxRate / 100.0);\r
            return grossSalary - taxDeduction + 2500.0; // Adding full-time allowance\r
        }\r
\r
        @Override\r
        public void generatePaySlip(String employeeName, double netAmount) {\r
            System.out.printf("  [PAYSLIP] Employee: %s | Net Disbursed: ₹%.2f\\n", employeeName, netAmount);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: ABSTRACT METHOD SIGNATURE RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SalaryPayrollProcessor processor = new FullTimeStaffPayroll();\r
        double net = processor.computeNetPay(60000.0, 10.0);\r
        processor.generatePaySlip("Swadeep Paul", net);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 3: Abstract Method Signature Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ABSTRACT METHOD SYNTAX:\r
   - 'public abstract ReturnType methodName(paramList);'\r
   - NO body '{ ... }' allowed.\r
   - Semicolon ';' is mandatory.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is an Abstract Method in Java and how is its syntax structured?",shortAnswer:"An abstract method is a method declared with the 'abstract' keyword that contains ONLY a method signature and return type, with NO method body, terminated immediately by a semicolon ';'.",explanation:"Subclasses extending the abstract class are mandated by the compiler to implement the body.",hint:"Signature only without curly braces, terminated by semicolon.",level:"Beginner",codeExample:"public abstract double calculateArea(double radius);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Method Contracts"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Abstract Methods: Method Signature Without Body"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how abstract methods establish mandatory architectural contracts: defining parameter signatures, return types, and exception profiles without implementation code."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"AbstractMethodsSignatureRulesDemo.java",highlightLines:[15,18,22,29,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Abstract Methods FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 002_007 Topic 3: Abstract Method Signatures",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic3_abstract_methods_note.txt"})}),e.jsx(n,{note:"An abstract method is a promise: it tells the compiler that every concrete child subclass will provide real executable code for this exact signature! — Sukanta Hui"})]})}export{x as default};
