import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as o}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 7: Introduction to Connection Pooling - Pre-Warmed Pool Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ConnectionPoolingIntroductionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CONNECTION POOLING INTRODUCTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW A CONNECTION POOL OPERATES:");\r
        System.out.println("  1. INITIALIZATION : Pool opens a pre-warmed set of physical TCP connections (e.g. 10 connections) at startup.");\r
        System.out.println("  2. BORROW (Lease) : Application thread calls 'dataSource.getConnection()' -> Pool hands over an available connection in < 1ms!");\r
        System.out.println("  3. EXECUTION      : Thread executes SQL queries over the warm TCP socket.");\r
        System.out.println("  4. RETURN (Close) : Thread calls 'connection.close()' -> Pool PROXY intercepts the call and RETURNS the connection to the pool rather than severing the TCP socket!\\n");\r
\r
        System.out.println(">>> DRAMATIC METRICS COMPARISON:");\r
        System.out.println("  - Direct DriverManager Connection : ~150 ms latency per request.");\r
        System.out.println("  - Connection Pool (HikariCP)      : ~0.002 ms (2 microseconds!) lease latency!");\r
        System.out.println("  - 75,000x faster connection acquisition! ⚡");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 7: Connection Pooling Introduction\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE MECHANISM:\r
   - Maintains a queue of open, authenticated physical database connections.\r
   - Wraps physical connections in Dynamic Proxies ('ProxyConnection').\r
\r
2. THE PROXY 'close()' INTERCEPTION:\r
   - When user code calls 'connection.close()', the proxy does NOT close the underlying TCP socket.\r
   - Instead, it resets session state (auto-commit, rollback uncommitted work) and returns the physical\r
     connection back to the pool queue for reuse!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What actually happens when an application calls connection.close() on a connection obtained from a connection pool?",shortAnswer:"The connection pool proxy intercepts the close() invocation, resets any modified session parameters (such as auto-commit status), and returns the underlying physical connection to the idle pool for reuse, rather than closing the physical TCP socket.",explanation:"Keeps the socket connection warm for the next request.",hint:"Returns the connection to the idle pool rather than closing the physical socket.",level:"Beginner",codeExample:"conn.close(); // Proxy returns connection back to HikariCP pool"},{question:"What is the typical connection acquisition latency when using a high-performance connection pool compared to direct DriverManager?",shortAnswer:"A high-performance connection pool provides connection leasing in microseconds (under 0.01ms), compared to 50–200ms when establishing a new physical connection via DriverManager.",explanation:"Multi-thousand-fold speedup.",hint:"Microseconds (<0.01ms) versus 50-200ms.",level:"Intermediate",codeExample:"Pool lease: 0.002ms; DriverManager: 100ms."}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Introduction to Connection Pooling: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Pre-Warmed Pool Architecture"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Reusing active sockets: how connection pools maintain persistent physical connections and transparently intercept connection.close() to return sockets to the pool."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ConnectionPoolingIntroductionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{title:"JDBC Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:a,title:"Module 011_001 Topic 7: Connection Pooling Introduction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic7_connection_pooling_introduction_note.txt"})}),e.jsx(r,{note:"A Connection Pool is like a fleet of rental cars! Instead of buying a new car and throwing it away after every trip, your thread borrows a car from the pool, drives it, and returns it to the parking lot with connection.close()! — Sukanta Hui"})]})}export{y as default};
