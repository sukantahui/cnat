import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 5: L - Liskov Substitution Principle (LSP): Behavioral Subtyping\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class LiskovSubstitutionPrincipleDemo {\r
\r
    // BASE CONTRACT: Guarantees deposit and withdraw semantics\r
    public static class BankAccount {\r
        protected double balance;\r
        public BankAccount(double initial) { this.balance = initial; }\r
\r
        public void deposit(double amount) { balance += amount; }\r
        public void withdraw(double amount) {\r
            if (amount <= balance) balance -= amount;\r
        }\r
        public double getBalance() { return balance; }\r
    }\r
\r
    // LSP COMPLIANT SUBTYPE: Fulfills all base expectations\r
    public static class SavingsAccount extends BankAccount {\r
        public SavingsAccount(double initial) { super(initial); }\r
        // Inherits valid withdraw without altering preconditions or throwing unexpected exceptions!\r
    }\r
\r
    // LSP VIOLATION EXAMPLE: Subclass throwing UnsupportedOperationException breaks callers!\r
    public static class FixedDepositAccount extends BankAccount {\r
        public FixedDepositAccount(double initial) { super(initial); }\r
\r
        @Override\r
        public void withdraw(double amount) {\r
            // VIOLATION: Caller expecting BankAccount cannot safely substitute FixedDepositAccount!\r
            throw new UnsupportedOperationException("Fixed Deposits cannot be withdrawn before maturity!");\r
        }\r
    }\r
\r
    public static void executeBankingWorkflow(BankAccount acc) {\r
        System.out.println("  Initial Balance: ₹" + acc.getBalance());\r
        acc.deposit(5000.0);\r
        acc.withdraw(2000.0); // If acc is FixedDepositAccount, this CRASHES!\r
        System.out.println("  Final Balance  : ₹" + acc.getBalance());\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: LISKOV SUBSTITUTION PRINCIPLE (LSP) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Testing Valid LSP Subtype (SavingsAccount):");\r
        executeBankingWorkflow(new SavingsAccount(10000.0));\r
\r
        System.out.println("\\n>>> 2. LSP Rule (Barbara Liskov):");\r
        System.out.println("  - Subtypes must be substitutable for their base types without altering correctness.");\r
        System.out.println("  - Never throw unexpected runtime exceptions for inherited methods!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 5: Liskov Substitution Principle (LSP)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LSP RULES (Barbara Liskov):\r
   - 'If S is a subtype of T, then objects of type T may be replaced with objects of type S.'\r
   - Subclasses must not strengthen preconditions.\r
   - Subclasses must not weaken postconditions.\r
   - Subclasses must not throw unexpected exceptions for base methods.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the core rule of the Liskov Substitution Principle (LSP)?",shortAnswer:"LSP states that objects of a superclass should be replaceable with objects of its subclasses without breaking application correctness, altering expected behavior, or throwing unexpected UnsupportedOperationExceptions.",explanation:"Named after Turing Award winner Barbara Liskov.",hint:"Subclasses must behave correctly in place of their parent classes without throwing unexpected exceptions.",level:"Intermediate",codeExample:"void process(Parent p) { p.doWork(); /* Works with any valid child! */ }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"SOLID: L"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["L — Liskov Substitution Principle (LSP): ",e.jsx("span",{className:"text-emerald-400",children:"Behavioral Subtyping"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand why inheritance must preserve behavioral contracts: preventing subclass overrides from throwing unexpected exceptions and corrupting calling pipelines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"LiskovSubstitutionPrincipleDemo.java",highlightLines:[11,20,26,31,36,47]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"LSP FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_011 Topic 5: Liskov Substitution Principle",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic5_lsp_note.txt"})}),e.jsx(i,{note:"If a subclass overrides a parent method by throwing 'UnsupportedOperationException', it is not a true subtype! It violates LSP and breaks callers who rely on polymorphism. — Sukanta Hui"})]})}export{h as default};
