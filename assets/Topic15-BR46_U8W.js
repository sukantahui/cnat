import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 15: Real-World Modeling: BankAccount (Abstract & Concrete Methods)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class RealWorldBankAccountAbstractionDemo {\r
\r
    public abstract static class BankAccount {\r
        protected String accountNumber;\r
        protected String accountHolder;\r
        protected double balance;\r
\r
        public BankAccount(String accNum, String holder, double initialDeposit) {\r
            this.accountNumber = accNum;\r
            this.accountHolder = holder;\r
            this.balance = initialDeposit;\r
        }\r
\r
        // Shared Concrete Method: Balance Check\r
        public double getBalance() { return balance; }\r
\r
        // Shared Concrete Method: Transaction Logging\r
        public void logTransaction(String type, double amount) {\r
            System.out.printf("  [AUDIT LOG] Acc: %s | %s: ₹%.2f | New Balance: ₹%.2f\\n",\r
                    accountNumber, type, amount, balance);\r
        }\r
\r
        // ABSTRACT METHODS: Specialized banking logic\r
        public abstract void deposit(double amount);\r
        public abstract boolean withdraw(double amount);\r
    }\r
\r
    public static class SavingsAccount extends BankAccount {\r
        private static final double MIN_BALANCE = 1000.0;\r
\r
        public SavingsAccount(String accNum, String holder, double initialDeposit) {\r
            super(accNum, holder, initialDeposit);\r
        }\r
\r
        @Override\r
        public void deposit(double amount) {\r
            balance += amount;\r
            logTransaction("DEPOSIT", amount);\r
        }\r
\r
        @Override\r
        public boolean withdraw(double amount) {\r
            if (balance - amount >= MIN_BALANCE) {\r
                balance -= amount;\r
                logTransaction("WITHDRAWAL", amount);\r
                return true;\r
            } else {\r
                System.out.printf("  [REJECTED] Insufficient funds! Minimum balance of ₹%.2f must be maintained.\\n", MIN_BALANCE);\r
                return false;\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: REAL-WORLD BANK ACCOUNT ABSTRACTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BankAccount acc = new SavingsAccount("SB-BKP-10029", "Swadeep Paul", 5000.0);\r
        System.out.println(">>> Initial Balance: ₹" + acc.getBalance());\r
\r
        System.out.println("\\n>>> 1. Depositing ₹3000:");\r
        acc.deposit(3000.0);\r
\r
        System.out.println("\\n>>> 2. Withdrawing ₹6500 (Valid):");\r
        acc.withdraw(6500.0);\r
\r
        System.out.println("\\n>>> 3. Withdrawing ₹1000 (Violates min balance ₹1000):");\r
        acc.withdraw(1000.0);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 15: Real-World BankAccount Modeling\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BANK ACCOUNT ARCHITECTURE:\r
   - Base Abstract Class: Holds balance, accountNumber, getBalance(), logTransaction().\r
   - Abstract Methods: deposit(), withdraw().\r
   - Subclasses (Savings, Current): Implement custom overdraft and minimum balance checks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"How does the BankAccount abstract hierarchy model partial abstraction in enterprise banking applications?",shortAnswer:"The abstract 'BankAccount' encapsulates common state (accountNumber, balance) and universal behavior (getBalance, logTransaction), while leaving variable business rules (deposit and withdraw logic with interest or overdraft checks) as abstract methods for Savings, Current, and FixedDeposit accounts.",explanation:"Provides high code reuse while enforcing strict domain-specific withdrawal invariants.",hint:"Universal logging/balance shared; custom withdrawal rules left abstract.",level:"Intermediate",codeExample:"// SavingsAccount vs CurrentAccount withdrawal rules"}];function g(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 15"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Financial Domain Modeling"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Real-World Modeling: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"BankAccount"})," Hierarchy"]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build a robust banking domain model combining shared balance auditing with specialized ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"deposit()"})," and ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"withdraw()"})," rules."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(a,{fileModule:o,title:"RealWorldBankAccountAbstractionDemo.java",highlightLines:[10,19,22,27,28,38,44]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(e,{title:"BankAccount Modeling FAQs",questions:c})}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{content:i,title:"Module 002_007 Topic 15: BankAccount Abstraction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic15_bank_account_note.txt"})}),n.jsx(r,{note:"Notice how all accounts share the same balance logging logic, but SavingsAccount adds its own minimum balance check. That is clean, real-world OOP abstraction! — Sukanta Hui"})]})}export{g as default};
