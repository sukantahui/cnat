import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 1: The ACID Properties - Overview & Principles\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class AcidPropertiesOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE ACID PROPERTIES OVERVIEW - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 PILLARS OF ACID:");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  PROPERTY       NAME            CORE PRINCIPLE");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  A              ATOMICITY       All-or-nothing execution (indivisible work unit).");\r
        System.out.println("  C              CONSISTENCY     Preserves schema invariants, foreign keys & check constraints.");\r
        System.out.println("  I              ISOLATION       Concurrent transactions execute as if strictly serial.");\r
        System.out.println("  D              DURABILITY      Committed data survives power loss and system crashes.");\r
        System.out.println("  -----------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> HOW JDBC IMPLEMENTS ACID:");\r
        System.out.println("  - Atomicity   : connection.setAutoCommit(false), conn.commit(), conn.rollback()");\r
        System.out.println("  - Consistency : Enforced by database schema engine (triggers, FK constraints, checks)");\r
        System.out.println("  - Isolation   : connection.setTransactionIsolation(level)");\r
        System.out.println("  - Durability  : Handled by database Write-Ahead Logging (WAL) and disk fsync()");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 1: ACID Properties Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ACID BREAKDOWN:\r
   - A (Atomicity)   : No partial transactions.\r
   - C (Consistency) : Data transitions from one valid state to another valid state.\r
   - I (Isolation)   : Transactions do not leak intermediate dirty state to others.\r
   - D (Durability)  : Once committed, data is written to non-volatile storage.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does the acronym ACID stand for in database transaction management?",shortAnswer:"Atomicity, Consistency, Isolation, and Durability.",explanation:"The universal benchmark for relational database reliability.",hint:"Atomicity, Consistency, Isolation, Durability.",level:"Beginner",codeExample:"ACID = Atomicity + Consistency + Isolation + Durability"},{question:"Which of the ACID properties is directly controlled in JDBC by setting the Transaction Isolation Level?",shortAnswer:"Isolation (via connection.setTransactionIsolation(level)).",explanation:"Controls the visibility of uncommitted and concurrently committed changes.",hint:"Isolation.",level:"Beginner",codeExample:"conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);"}];function A(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 1"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ACID Properties: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Overview & Principles"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 4 pillars of database reliability: analyzing Atomicity, Consistency, Isolation, and Durability in mission-critical architectures."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:a,title:"AcidPropertiesOverviewDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Transaction & ACID FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(i,{content:s,title:"Module 011_004 Topic 1: ACID Properties Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic1_acid_properties_overview_note.txt"})}),t.jsx(r,{note:"ACID stands for Atomicity, Consistency, Isolation, and Durability! These four principles are what differentiate enterprise SQL databases from naive file stores! — Sukanta Hui"})]})}export{A as default};
