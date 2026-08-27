import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 3: Consistency - Preserving Invariants & Constraints\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ConsistencyPreservingInvariantsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: CONSISTENCY IN DATABASE SYSTEMS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 LEVELS OF CONSISTENCY ENFORCEMENT:");\r
        System.out.println("  1. SCHEMA-LEVEL CONSTRAINTS (RDBMS Engine):");\r
        System.out.println("     - PRIMARY KEY uniqueness (No duplicate student_id).");\r
        System.out.println("     - FOREIGN KEY referential integrity (Course ID must exist in courses table).");\r
        System.out.println("     - CHECK constraints (e.g. 'CHECK (fees_paid >= 0.0)').");\r
        System.out.println("     - NOT NULL column validation.\\n");\r
\r
        System.out.println("  2. BUSINESS LOGIC INVARIANTS (Application Layer):");\r
        System.out.println("     - Sum of all account balances in bank before transfer == Sum after transfer!");\r
        System.out.println("     - Total enrolled seats <= Maximum classroom capacity (40 seats at Barrackpore).\\n");\r
\r
        System.out.println("  3. DATABASE ENGINE REJECTION:");\r
        System.out.println("     - If any constraint is violated during transaction execution, the engine throws SQLException;");\r
        System.out.println("     - The transaction rolls back, preserving 100% database consistency!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 3: Consistency: Preserving Invariants\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS CONSISTENCY:\r
   - Ensures that only valid data following all rules and constraints is written to the database.\r
   - If an operation would leave the database in an illegal state, the entire transaction is rejected.\r
\r
2. SHARED RESPONSIBILITY:\r
   - Database enforces structural constraints (PK, FK, Unique, Check).\r
   - Java application enforces complex business invariants.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does the database engine maintain Consistency when a foreign key constraint is violated during a transaction?",shortAnswer:"The database engine immediately aborts the violating statement and raises a Constraint Violation SQLException. The application rolls back the transaction, ensuring the database remains in a consistent state.",explanation:"Prevents orphaned child records.",hint:"Raises a Constraint Violation SQLException and rolls back.",level:"Beginner",codeExample:"SQLException: Cannot add or update a child row: a foreign key constraint fails"},{question:"Give an example of an application-level business invariant that represents database consistency.",shortAnswer:"In a financial banking system, the total sum of money across all bank accounts in the system must remain constant before and after a fund transfer transaction.",explanation:"Money cannot be created or destroyed during transfers.",hint:"Total sum of balances remains identical before and after transfer.",level:"Intermediate",codeExample:"Total System Balance Before == Total System Balance After."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Consistency: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Preserving Invariants & Constraints"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Integrity rules: ensuring transactions transition database state from one valid state satisfying all schema rules, foreign keys, and triggers to another."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ConsistencyPreservingInvariantsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 011_004 Topic 3: Consistency: Preserving Invariants",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic3_consistency_preserving_invariants_note.txt"})}),e.jsx(s,{note:"Consistency ensures that the database never violates business invariants! If a column has CHECK (balance >= 0) or a Foreign Key constraint, a transaction that tries to violate it will be rejected by the DB and rolled back! — Sukanta Hui"})]})}export{S as default};
