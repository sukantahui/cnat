import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 16: The Command Pattern - Action Objects & Undo Queues\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
import java.util.ArrayDeque;\r
import java.util.Deque;\r
\r
public class CommandPatternDemo {\r
\r
    // 1. Command Interface:\r
    public interface Command {\r
        void execute();\r
        void undo();\r
    }\r
\r
    // 2. Receiver (The business domain state):\r
    public static class BankLedger {\r
        private double balance = 10000.0;\r
\r
        public void deposit(double amt) { balance += amt; System.out.println("   [LEDGER]: Deposited ₹" + amt + " | Balance: ₹" + balance); }\r
        public void withdraw(double amt) { balance -= amt; System.out.println("   [LEDGER]: Withdrawn ₹" + amt + " | Balance: ₹" + balance); }\r
        public double getBalance() { return balance; }\r
    }\r
\r
    // 3. Concrete Command:\r
    public static class DepositCommand implements Command {\r
        private final BankLedger ledger;\r
        private final double amount;\r
\r
        public DepositCommand(BankLedger ledger, double amount) {\r
            this.ledger = ledger;\r
            this.amount = amount;\r
        }\r
\r
        @Override public void execute() { ledger.deposit(amount); }\r
        @Override public void undo() {\r
            System.out.print("   [UNDO OPERATION]: ");\r
            ledger.withdraw(amount); // Reverse operation!\r
        }\r
    }\r
\r
    // 4. Invoker with Undo Stack:\r
    public static class TransactionManager {\r
        private final Deque<Command> history = new ArrayDeque<>();\r
\r
        public void executeCommand(Command cmd) {\r
            cmd.execute();\r
            history.push(cmd);\r
        }\r
\r
        public void undoLast() {\r
            if (!history.isEmpty()) {\r
                Command last = history.pop();\r
                last.undo();\r
            } else {\r
                System.out.println("   [HISTORY]: Nothing to undo!");\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: COMMAND PATTERN & UNDO STACKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BankLedger ledger = new BankLedger();\r
        TransactionManager tm = new TransactionManager();\r
\r
        System.out.println("1. Executing Deposit of ₹5,000:");\r
        tm.executeCommand(new DepositCommand(ledger, 5000.0));\r
\r
        System.out.println("\r
2. Executing Deposit of ₹2,500:");\r
        tm.executeCommand(new DepositCommand(ledger, 2500.0));\r
\r
        System.out.println("\r
3. Performing Undo (Ctrl+Z):");\r
        tm.undoLast();\r
\r
        System.out.println("\r
Final Ledger Balance: ₹" + ledger.getBalance());\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 16: Command Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Encapsulate a request as an object, thereby letting you parameterize clients with different requests,\r
     queue or log requests, and support undoable operations.\r
\r
2. PARTICIPANTS:\r
   - Command    : Interface with 'execute()' and 'undo()'.\r
   - Receiver   : The domain object performing actual work.\r
   - Invoker    : Stores command history and triggers execution.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What capability does the Command pattern provide that simple direct method calls cannot?",shortAnswer:"It turns operations into first-class objects that can be stored in collections, passed as parameters, queued for asynchronous execution, persisted to disk for crash recovery, and reversed via undo() methods.",explanation:"Decouples the invoker of a request from the receiver doing the work.",hint:"Turns operations into objects that can be queued, logged, and undone.",level:"Beginner",codeExample:"Command cmd = new DepositCommand(ledger, 500.0); cmdStack.push(cmd);"},{question:"What interface in the standard Java library is a functional representation of a parameterless Command?",shortAnswer:"java.lang.Runnable (void run()) and java.util.concurrent.Callable<V> (V call()).",explanation:"Classic examples of the Command pattern in concurrency.",hint:"Runnable and Callable interfaces.",level:"Beginner",codeExample:"Runnable command = () → process(); executor.submit(command);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 16"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Command Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Action Objects & Undo Queues"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Encapsulating invocations: packaging operations as standalone objects to support execution queues, transaction logs, and multi-level Undo/Redo."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"CommandPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"GoF Design Patterns FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 012_001 Topic 16: Command Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic16_command_pattern_note.txt"})}),e.jsx(a,{note:"The Command pattern is how text editors implement Ctrl+Z Undo! Every keystroke or delete action is saved as a Command object onto a history stack. When you hit Undo, it pops the command and calls undo()! — Sukanta Hui"})]})}export{b as default};
