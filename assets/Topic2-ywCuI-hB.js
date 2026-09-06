import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 2: Database Schema Design - Relational Ledger Tables\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
public class DatabaseSchemaDesignDemo {\r
\r
    public static final String CREATE_ACCOUNTS_TABLE = """\r
        CREATE TABLE accounts (\r
            account_number VARCHAR(30) PRIMARY KEY,\r
            customer_id VARCHAR(30) NOT NULL,\r
            balance DECIMAL(15, 2) NOT NULL CHECK (balance >= 0.00),\r
            status VARCHAR(15) NOT NULL DEFAULT 'ACTIVE',\r
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP\r
        );\r
        """;\r
\r
    public static final String CREATE_LEDGER_TABLE = """\r
        CREATE TABLE ledger_entries (\r
            entry_id VARCHAR(36) PRIMARY KEY,\r
            transaction_id VARCHAR(36) NOT NULL,\r
            account_number VARCHAR(30) NOT NULL,\r
            type VARCHAR(20) NOT NULL,\r
            amount DECIMAL(15, 2) NOT NULL,\r
            timestamp TIMESTAMP NOT NULL,\r
            FOREIGN KEY (account_number) REFERENCES accounts(account_number)\r
        );\r
        CREATE INDEX idx_ledger_acc ON ledger_entries(account_number);\r
        CREATE INDEX idx_ledger_tx ON ledger_entries(transaction_id);\r
        """;\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: DATABASE SCHEMA DESIGN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. ACCOUNTS DDL:\r
" + CREATE_ACCOUNTS_TABLE);\r
        System.out.println(">>> 2. LEDGER DDL & INDEXES:\r
" + CREATE_LEDGER_TABLE);\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 2: Database Schema Design\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SCHEMA HIGHLIGHTS:\r
   - 'DECIMAL(15, 2)' for precise monetary columns.\r
   - 'CHECK (balance >= 0.00)' database constraint prevents accidental overdrafts.\r
   - B-Tree indexes on 'account_number' and 'transaction_id' for fast statement lookups.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why should SQL DECIMAL(15, 2) or NUMERIC data types be used for financial balance columns instead of FLOAT or REAL?",shortAnswer:"DECIMAL and NUMERIC store exact decimal digits without binary rounding errors, perfectly mapping to Java's BigDecimal.",explanation:"Preserves exact financial precision in the persistence tier.",hint:"DECIMAL stores exact fixed-point numbers without precision loss.",level:"Beginner",codeExample:"balance DECIMAL(15, 2) NOT NULL"},{question:"Why is a database CHECK (balance >= 0.00) constraint recommended even if Java code validates balance?",shortAnswer:"Defense in Depth: it guarantees at the database storage engine level that balance cannot go negative, even if a race condition or bug slips through the application layer.",explanation:"Database-enforced invariant protection.",hint:"Guarantees data integrity even if application-level checks fail.",level:"Intermediate",codeExample:"CHECK (balance >= 0.00)"}];function A(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Database Schema Design: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Relational Ledger Tables"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Relational data modeling: creating accounts, transactions, ledger_entries, and audit_logs tables with foreign keys and index optimization."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"DatabaseSchemaDesignDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Core Banking Capstone FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 012_002 Topic 2: Database Schema Design",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic2_database_schema_design_note.txt"})}),e.jsx(r,{note:"In banking, foreign keys and unique constraints are your best friends! They prevent orphaned transactions and duplicate account numbers at the database engine level! — Sukanta Hui"})]})}export{A as default};
