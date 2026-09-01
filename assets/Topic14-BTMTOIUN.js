import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 14: 2. Non-Repeatable Read - Row Value Mutation on Re-Query\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class NonRepeatableReadAnomalyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: NON-REPEATABLE READ ANOMALY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE NON-REPEATABLE READ COLLISION:");\r
        System.out.println("  Time T1 (Tx 1): SELECT course_fee FROM courses WHERE id = 'JAVA_101'; -> Returns ₹4,000");\r
        System.out.println("  Time T2 (Tx 2): UPDATE courses SET course_fee = 6000 WHERE id = 'JAVA_101';");\r
        System.out.println("  Time T3 (Tx 2): COMMIT; (Tx 2 is now permanently committed!)");\r
        System.out.println("  Time T4 (Tx 1): SELECT course_fee FROM courses WHERE id = 'JAVA_101'; -> Returns ₹6,000!");\r
        System.out.println("  Time T5 (Result): Inside the SAME transaction (Tx 1), querying the exact same row");\r
        System.out.println("                    returned two DIFFERENT values (4,000 vs 6,000)! (Non-Repeatable Read!)\\n");\r
\r
        System.out.println(">>> THE REMEDY:");\r
        System.out.println("  - Set isolation level to TRANSACTION_REPEATABLE_READ or TRANSACTION_SERIALIZABLE.");\r
        System.out.println("  - In REPEATABLE READ, Tx 1 will see ₹4,000 consistently throughout its entire lifetime!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 14: Non-Repeatable Read Anomaly\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A NON-REPEATABLE READ (Fuzzy Read):\r
   - Occurs when Transaction A reads a row, and a concurrent Transaction B modifies that row and commits.\r
   - When Transaction A reads the row a second time, it observes the newly committed changes,\r
     producing inconsistent data within a single transaction.\r
\r
2. PREVENTION:\r
   - Enforced by 'Connection.TRANSACTION_REPEATABLE_READ' and 'Connection.TRANSACTION_SERIALIZABLE'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does a Non-Repeatable Read differ from a Dirty Read?",shortAnswer:"In a Dirty Read, the data read is UNCOMMITTED (and may be rolled back). In a Non-Repeatable Read, the data read is COMMITTED by another transaction, but it causes the reading transaction to see different values when querying the same row multiple times within a single transaction.",explanation:"Dirty read involves uncommitted changes; non-repeatable read involves committed changes.",hint:"Dirty Read = uncommitted data; Non-Repeatable Read = committed updates causing row value differences.",level:"Intermediate",codeExample:"Non-repeatable read: SELECT returns 4000, then re-query returns 6000."},{question:"Which JDBC isolation level is the minimum required to prevent Non-Repeatable Reads?",shortAnswer:"Connection.TRANSACTION_REPEATABLE_READ",explanation:"Maintains snapshot or read locks on queried rows for transaction duration.",hint:"REPEATABLE_READ.",level:"Beginner",codeExample:"conn.setTransactionIsolation(Connection.TRANSACTION_REPEATABLE_READ);"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["2. Non-Repeatable Read: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Row Value Mutation on Re-Query"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Fuzzy reads: analyzing how Transaction A re-executes the exact same query within a transaction and receives modified values due to concurrent committed updates."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"NonRepeatableReadAnomalyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Transaction & ACID FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_004 Topic 14: Non-Repeatable Read Anomaly",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic14_non_repeatable_read_anomaly_note.txt"})}),e.jsx(r,{note:"A Non-Repeatable Read occurs when you read a student's fees, and 2 seconds later inside the SAME transaction you read it again and find a different number because someone else committed an UPDATE in between! — Sukanta Hui"})]})}export{T as default};
