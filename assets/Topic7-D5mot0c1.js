import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 004_001: Exception Hierarchy\r
 * Topic 7: Enterprise Design Philosophy: When to Choose Checked vs Unchecked Exceptions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
public class CheckedVsUncheckedDesignPhilosophyDemo {\r
\r
    // 1. CHECKED EXCEPTION: The caller CAN and SHOULD reasonably recover from this external failure:\r
    public static class InsufficientBalanceException extends Exception {\r
        private final double shortfall;\r
        public InsufficientBalanceException(String msg, double shortfall) {\r
            super(msg);\r
            this.shortfall = shortfall;\r
        }\r
        public double getShortfall() { return shortfall; }\r
    }\r
\r
    // 2. UNCHECKED EXCEPTION: Represents a programming violation / precondition failure:\r
    public static class InvalidAccountStateException extends RuntimeException {\r
        public InvalidAccountStateException(String msg) {\r
            super(msg);\r
        }\r
    }\r
\r
    public static void executeTransfer(boolean isAccountActive, double balance, double transferAmount)\r
            throws InsufficientBalanceException {\r
        // Precondition check (Programmer error -> Unchecked):\r
        if (!isAccountActive) {\r
            throw new InvalidAccountStateException("Account is suspended or closed! Cannot initiate transfer.");\r
        }\r
\r
        // Business condition (Recoverable business failure -> Checked):\r
        if (transferAmount > balance) {\r
            throw new InsufficientBalanceException("Insufficient funds in account", transferAmount - balance);\r
        }\r
\r
        System.out.println("  [SUCCESS] Transferred " + transferAmount + " INR successfully.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CHECKED vs UNCHECKED DESIGN PHILOSOPHY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> The Golden Rule of Exception Design (Effective Java Item 70):");\r
        System.out.println("  - Use CHECKED exceptions for recoverable business conditions (e.g. InsufficientBalance).");\r
        System.out.println("  - Use UNCHECKED (RuntimeException) for programming errors or invalid preconditions (e.g. AccountSuspended).");\r
\r
        System.out.println("\\n>>> Executing Transfer Simulation:");\r
        try {\r
            executeTransfer(true, 5000.0, 7500.0);\r
        } catch (InsufficientBalanceException e) {\r
            System.out.println("  [BUSINESS RECOVERY] Prompt customer to deposit shortfall of: " + e.getShortfall() + " INR");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_001: Exception Hierarchy\r
Topic 7: Checked vs Unchecked Design Philosophy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DESIGN DECISION MATRIX:\r
   - Can caller recover? → Use CHECKED ('extends Exception').\r
   - Is it a bug / bad argument? → Use UNCHECKED ('extends RuntimeException').\r
   - Precondition checks → 'IllegalArgumentException', 'IllegalStateException'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"What is the industry guideline for choosing between Checked and Unchecked custom exceptions in Java?",shortAnswer:"1. Use Checked Exceptions for recoverable conditions where the caller can take concrete action to fix the situation (e.g. prompt for shortfall deposit, retry a network request). 2. Use Unchecked Exceptions (RuntimeException) for programming bugs, contract violations, and preconditions (e.g. passing null or negative arguments).",explanation:"Effective Java Item 70: Use checked exceptions for recoverable conditions and runtime exceptions for programming errors.",hint:"Checked for recoverable business conditions; Unchecked for programming defects and preconditions.",level:"Intermediate",codeExample:"class ShortfallException extends Exception {} // Checked\\nclass InvalidArgException extends RuntimeException {} // Unchecked"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Architectural Philosophy"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Philosophy: When to Design ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Checked"})," vs ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Unchecked"})," Exceptions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Apply Effective Java Item 70: designing domain exception hierarchies that distinguish actionable business recovery from fatal precondition violations."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"CheckedVsUncheckedDesignPhilosophyDemo.java",highlightLines:[7,10,11,19,20,25,28,33,48,49]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Design Philosophy FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 004_001 Topic 7: Design Philosophy",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_001_topic7_exception_design_philosophy_note.txt"})}),e.jsx(o,{note:"Ask this one simple question: 'Can the calling method realistically fix this issue?' If yes, make it Checked. If it's a programming bug or bad input, make it Unchecked! — Sukanta Hui"})]})}export{f as default};
