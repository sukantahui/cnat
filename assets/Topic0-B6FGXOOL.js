import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 0: The Network Round-Trip Problem - Loop Latency Bottleneck\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class NetworkRoundtripProblemDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: THE NETWORK ROUND-TRIP BOTTLENECK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE MATHEMATICS OF LOOP LATENCY:");\r
        System.out.println("  - Dataset Size       : 10,000 Student Records");\r
        System.out.println("  - Network RTT Latency: 5 milliseconds (Client -> DB Server -> Client)\\n");\r
\r
        System.out.println(">>> SCENARIO A: INDIVIDUAL INSERTS IN A FOR-LOOP:");\r
        System.out.println("  - 10,000 separate TCP request/response packets.");\r
        System.out.println("  - Total Time: 10,000 * 5ms = 50,000 ms = 50.0 SECONDS! (Unusable in production)\\n");\r
\r
        System.out.println(">>> SCENARIO B: JDBC BATCH PROCESSING (addBatch / executeBatch):");\r
        System.out.println("  - 10 batches of 1,000 rows each = 10 network roundtrips.");\r
        System.out.println("  - Total Time: 10 * 5ms + DB write time = ~0.65 SECONDS! (75x Speedup!) 🚀");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 0: Network Round-Trip Problem\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE LATENCY OVERHEAD:\r
   - Every individual 'executeUpdate()' requires:\r
     * Serialization of SQL packet\r
     * Network socket transit\r
     * Database parse and execute\r
     * Disk write and return packet\r
   - In a loop of N iterations, latency multiplies N times!\r
\r
2. THE SOLUTION:\r
   - Group statements in client buffer using JDBC Batching!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does inserting 5,000 rows in a standard for-loop with executeUpdate() perform poorly in distributed environments?",shortAnswer:"Because each executeUpdate() requires an independent synchronous network round-trip (RTT) between the Java client and the database server, causing the overall execution time to be dominated by network packet transit latency rather than database processing.",explanation:"Network round-trips multiply with every loop iteration.",hint:"Each loop iteration incurs an individual network round-trip latency.",level:"Beginner",codeExample:"for(Student s : list) { pstmt.executeUpdate(); } // 5,000 network roundtrips!"},{question:"How does JDBC Batch Processing eliminate the network round-trip bottleneck?",shortAnswer:"By accumulating multiple parameterized SQL statement executions in a local memory buffer and sending them across the network in a single consolidated payload.",explanation:"Reduces thousands of network hops into a handful of batch packets.",hint:"Sends hundreds or thousands of rows in a single network transmission.",level:"Beginner",codeExample:"ps.addBatch(); ... ps.executeBatch();"}];function k(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Network Round-Trip Problem: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Loop Latency Bottleneck"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Why loops kill throughput: analyzing the performance penalty of executing individual SQL INSERT statements across network sockets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"NetworkRoundtripProblemDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Batch Updates & DAO FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 011_005 Topic 0: Network Round-Trip Problem",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic0_network_roundtrip_problem_note.txt"})}),e.jsx(a,{note:"If your database server is across the network with 10ms latency, inserting 10,000 records in a for-loop takes 100 SECONDS of pure waiting for network packets! Batching sends all 10,000 rows in ONE network roundtrip taking less than 1 second! — Sukanta Hui"})]})}export{k as default};
