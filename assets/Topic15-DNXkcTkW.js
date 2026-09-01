import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 15: 3. Phantom Read - Row Insertion & Range Scan Anomalies\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class PhantomReadAnomalyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: PHANTOM READ ANOMALY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE PHANTOM READ COLLISION:");\r
        System.out.println("  Time T1 (Tx 1): SELECT * FROM students WHERE center = 'Barrackpore'; -> Returns 10 student rows.");\r
        System.out.println("  Time T2 (Tx 2): INSERT INTO students (name, center) VALUES ('Rohan Sen', 'Barrackpore');");\r
        System.out.println("  Time T3 (Tx 2): COMMIT; (Tx 2 insert is now committed!)");\r
        System.out.println("  Time T4 (Tx 1): SELECT * FROM students WHERE center = 'Barrackpore'; -> Returns 11 student rows!");\r
        System.out.println("  Time T5 (Result): A 'Phantom' 11th row appeared out of nowhere inside the SAME transaction! 👻\\n");\r
\r
        System.out.println(">>> NON-REPEATABLE READ VS PHANTOM READ:");\r
        System.out.println("  - Non-Repeatable Read : Modifies EXISTING row data (UPDATE).");\r
        System.out.println("  - Phantom Read        : Changes TOTAL ROW COUNT in range search (INSERT / DELETE).\\n");\r
\r
        System.out.println(">>> THE REMEDY:");\r
        System.out.println("  - Set isolation level to TRANSACTION_SERIALIZABLE (or rely on MySQL InnoDB Next-Key Locks).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 15: Phantom Read Anomaly\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A PHANTOM READ:\r
   - Occurs when Transaction A executes a range query (e.g. 'WHERE age > 18'), and Transaction B\r
     inserts or deletes rows matching that predicate and commits.\r
   - When Transaction A re-executes the range query, new 'phantom' rows appear or vanish.\r
\r
2. PREVENTION:\r
   - ANSI SQL specifies 'TRANSACTION_SERIALIZABLE' to prevent Phantom Reads.\r
   - (Note: MySQL InnoDB also prevents phantom reads in REPEATABLE READ using Next-Key Gap Locks).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does a Phantom Read differ from a Non-Repeatable Read?",shortAnswer:"A Non-Repeatable Read occurs when existing rows are updated with new values. A Phantom Read occurs on predicate range queries when newly inserted or deleted rows appear or disappear in subsequent queries, changing the set or count of matching rows.",explanation:"Range scan insertions vs single row updates.",hint:"Non-Repeatable Read = modified existing rows; Phantom Read = newly inserted/deleted rows in range query.",level:"Intermediate",codeExample:"Phantom Read: 10 rows on 1st query → 11 rows on 2nd query."},{question:"Which standard ANSI SQL isolation level is guaranteed to prevent Phantom Reads?",shortAnswer:"Connection.TRANSACTION_SERIALIZABLE",explanation:"Applies predicate range locks or strict serializable snapshot isolation.",hint:"TRANSACTION_SERIALIZABLE.",level:"Beginner",codeExample:"conn.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["3. Phantom Read: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Row Insertion & Range Scan Anomalies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The phantom rows: analyzing how Transaction A re-executes a range scan query and discovers newly inserted matching rows committed by Transaction B."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"PhantomReadAnomalyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_004 Topic 15: Phantom Read Anomaly",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic15_phantom_read_anomaly_note.txt"})}),e.jsx(r,{note:"A Phantom Read happens on range queries! If you query SELECT count(*) WHERE center = 'Barrackpore' and get 10 students, and another user commits an INSERT of a new Barrackpore student, running the exact same count query returns 11! A phantom student appeared! — Sukanta Hui"})]})}export{T as default};
