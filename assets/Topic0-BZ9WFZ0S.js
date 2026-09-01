import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 0: Capstone Architecture & Requirements Breakdown\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
public class BankingArchitectureOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" CAPSTONE 1: CORE BANKING & FINANCIAL LEDGER ENGINE");\r
        System.out.println(" EDUCATOR: SUKANTA HUI | ACADEMIC HUB: BARRACKPORE, WB");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. CORE MISSION CRITICAL REQUIREMENTS:");\r
        System.out.println("  - Zero Floating Point Errors : 100% BigDecimal calculations with HALF_EVEN rounding.");\r
        System.out.println("  - Atomic Fund Transfers      : Strict ACID double-entry accounting (Debit from A and Credit to B in 1 Tx).");\r
        System.out.println("  - Immutable Audit Ledger     : Every single penny movement generates an immutable LedgerEntry record.");\r
        System.out.println("  - Thread Safety & Contention : High concurrency account updates without deadlock or race conditions.");\r
        System.out.println("  - Connection Pooling         : HikariCP backed connection pool with custom DAO layer.\\n");\r
\r
        System.out.println(">>> 2. ARCHITECTURAL LAYERS:");\r
        System.out.println("  [Presentation / CLI] ---> [BankingService] ---> [AccountDao & LedgerDao] ---> [HikariCP] ---> [Postgres/H2]");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 0: Architecture Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SYSTEM GOALS:\r
   - Double-entry bookkeeping: Total Debits == Total Credits always.\r
   - Non-negotiable precision: BigDecimal everywhere.\r
   - Strict transaction isolation: Isolation level READ_COMMITTED or SERIALIZABLE.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the Double-Entry Bookkeeping principle in financial ledger systems?",shortAnswer:"Every financial transaction must affect at least two accounts with equal and opposite entries: every debit to an account must be balanced by an exact matching credit to another account, ensuring total system balance is always zero.",explanation:"The foundational law of financial accounting.",hint:"Total debits must strictly equal total credits.",level:"Beginner",codeExample:"Debit(SourceAccount, 500) == Credit(TargetAccount, 500)"},{question:"Why is float or double strictly forbidden in financial calculation engines?",shortAnswer:"Because binary floating-point numbers cannot accurately represent base-10 fractional values (e.g. 0.1 + 0.2 = 0.30000000000000004), accumulating compounding precision errors that violate banking compliance laws.",explanation:"BigDecimal is mandatory for all monetary values.",hint:"Binary IEEE 754 precision loss causes compounding monetary discrepancies.",level:"Beginner",codeExample:"Always use BigDecimal.valueOf(100.50) with explicit RoundingMode."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Banking Capstone: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Architecture & Requirements"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Enterprise fintech architecture: designing an atomic double-entry core banking system with ACID compliance, audit trails, and strict precision."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"BankingArchitectureOverviewDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Core Banking Capstone FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 012_002 Topic 0: Capstone Architecture Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic0_capstone_architecture_overview_note.txt"})}),e.jsx(a,{note:"Welcome to Capstone Project 1! We are building a real-world, production-ready Core Banking and Financial Ledger engine! This combines everything you learned: Generics, Collections, Concurrency, JDBC, Transactions, and HikariCP! — Sukanta Hui"})]})}export{y as default};
