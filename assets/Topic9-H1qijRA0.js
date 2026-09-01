import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 9: HikariCP - Industry Standard Zero-Overhead Connection Pool\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class HikariCpConnectionPoolDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: HIKARICP ZERO-OVERHEAD CONNECTION POOL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 ARCHITECTURAL INNOVATIONS BEHIND HIKARICP'S SPEED:");\r
        System.out.println("  1. BYTECODE GENERATION (Javassist):");\r
        System.out.println("     - Strips out 90% of dynamic proxy overhead; compiles proxy delegates directly to bytecode!\\n");\r
\r
        System.out.println("  2. ConcurrentBag (Lock-Free Data Structure):");\r
        System.out.println("     - Custom lock-free lock-stealing collection based on ThreadLocals.");\r
        System.out.println("     - Zero lock contention between competing threads!\\n");\r
\r
        System.out.println("  3. FastList (ArrayList Replacement):");\r
        System.out.println("     - Eliminates range checking in remove() and scans from tail to head (LIFO removal in O(1)).\\n");\r
\r
        System.out.println("  4. MICRO-OPTIMIZED TO CPU CACHE LINES:");\r
        System.out.println("     - Classes padded to align perfectly with 64-byte L1/L2 CPU cache lines!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 9: HikariCP Connection Pool\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS HIKARICP:\r
   - High-performance, zero-overhead JDBC connection pool created by Brett Wooldridge.\r
   - The default connection pool in Spring Boot 2.x and 3.x.\r
\r
2. WHY IT DOMINATES BENCHMARKS:\r
   - 'ConcurrentBag' data structure avoids lock contention across CPU cores.\r
   - 'FastList' speeds up Statement tracking by 2x.\r
   - Eliminates reflection overhead via direct Javassist bytecode synthesis.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is HikariCP the default connection pool chosen by the Spring Boot team?",shortAnswer:"Because independent benchmarks proved HikariCP is significantly faster, uses less memory, and exhibits virtually zero lock contention under heavy multi-threaded workloads compared to older pools like Commons DBCP, c3p0, and Tomcat JDBC.",explanation:"Micro-benchmarked with Java Microbenchmark Harness (JMH).",hint:"Fastest execution, lowest memory footprint, and zero lock contention.",level:"Beginner",codeExample:"Spring Boot default: HikariDataSource"},{question:"What custom lock-free collection does HikariCP use to manage connection leasing without thread contention?",shortAnswer:"ConcurrentBag, a specialized lock-free data structure that provides thread-local connection caching with work-stealing semantics.",explanation:"Eliminates global lock synchronization when borrowing connections.",hint:"ConcurrentBag",level:"Advanced",codeExample:"ConcurrentBag: ThreadLocal caching + work-stealing."}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Industry Standard: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HikariCP Zero-Overhead Connection Pool"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The fastest connection pool on earth: analyzing bytecode-level micro-optimizations, FastList, concurrent bag, and why Spring Boot made it default."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"HikariCpConnectionPoolDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JDBC Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 011_001 Topic 9: HikariCP Connection Pool",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic9_hikaricp_connection_pool_note.txt"})}),e.jsx(r,{note:"HikariCP is Japanese for 'Light / Shining Speed'! It is the default connection pool in Spring Boot because its author engineered it at the bytecode and CPU cache-line level! It is orders of magnitude faster than Tomcat CP or c3p0! — Sukanta Hui"})]})}export{C as default};
