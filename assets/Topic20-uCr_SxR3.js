import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 20: 4. TRANSACTION_SERIALIZABLE - Total Strict Isolation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.SQLException;\r
\r
public class TransactionSerializableDemo {\r
\r
    public static void configureSerializable(Connection conn) throws SQLException {\r
        conn.setTransactionIsolation(Connection.TRANSACTION_SERIALIZABLE);\r
        System.out.println("   [ISOLATION]: Configured to TRANSACTION_SERIALIZABLE (8).");\r
        System.out.println("   - 100% Protection against ALL concurrency anomalies.");\r
        System.out.println("   - Transactions execute with strict serial equivalence.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 20: TRANSACTION_SERIALIZABLE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE SERIALIZABLE CONTRACT:");\r
        System.out.println("  1. Strict Serial Equivalence : The execution schedule is mathematically proven identical to running transactions one-at-a-time.");\r
        System.out.println("  2. Serialization Failures   : In modern SSI (Serializable Snapshot Isolation in PostgreSQL):");\r
        System.out.println("     - If two concurrent transactions read overlapping data and write conflicting updates,");\r
        System.out.println("       the DB aborts one with 'SQLState: 40001 (serialization_failure)'.");\r
        System.out.println("  3. Application Retry Loop   : Client applications using SERIALIZABLE MUST implement automatic retry loops!\\n");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 20: TRANSACTION_SERIALIZABLE\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT SERIALIZABLE GUARANTEES:\r
   - Eliminates all Dirty Reads, Non-Repeatable Reads, and Phantom Reads.\r
   - Highest consistency, lowest concurrent throughput.\r
\r
2. RETRY OBLIGATION:\r
   - Applications running on SERIALIZABLE must catch SQLState '40001' serialization errors\r
     and automatically retry the transaction.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What must client applications be prepared to handle when using TRANSACTION_SERIALIZABLE under modern engines like PostgreSQL SSI?",shortAnswer:"They must handle serialization failure exceptions (SQLState '40001' / 'could not serialize access due to read/write dependencies') by implementing an automatic retry loop that re-executes the transaction from the beginning.",explanation:"Serializable engines use optimistic conflict detection and abort conflicting transactions.",hint:"Must implement retry loops to handle serialization failure exceptions (SQLState 40001).",level:"Advanced",codeExample:"while (retries < MAX) { try { ... commit(); break; } catch (SerializationException e) { retries++; } }"},{question:"Does TRANSACTION_SERIALIZABLE guarantee that transactions actually run single-threaded on the database server?",shortAnswer:"No, transactions execute concurrently in parallel, but the engine uses lock graphs or Serializable Snapshot Isolation (SSI) to ensure the observable outcome is identical to some serial sequence.",explanation:"Concurrent execution with serial equivalence.",hint:"Runs concurrently in parallel while mathematically guaranteeing serial outcome equivalence.",level:"Intermediate",codeExample:"Concurrent Parallel Execution + Strict Serial Equivalence."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 20"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["4. TRANSACTION_SERIALIZABLE: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Total Strict Isolation"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Zero anomalies: the highest isolation level that guarantees concurrent transactions produce results identical to serial one-by-one execution."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"TransactionSerializableDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Transaction & ACID FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 011_004 Topic 20: TRANSACTION_SERIALIZABLE",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic20_transaction_serializable_note.txt"})}),e.jsx(r,{note:"SERIALIZABLE is the Fort Knox of database isolation! It completely prevents Dirty Reads, Non-Repeatable Reads, and Phantom Reads! But beware: if two transactions conflict, the database will abort one with a serialization failure error! — Sukanta Hui"})]})}export{x as default};
