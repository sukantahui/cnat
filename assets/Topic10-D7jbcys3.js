import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 10: Configuring HikariCP - HikariConfig & Production Sizing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ConfiguringHikariCpPureJavaDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: CONFIGURING HIKARICP IN PURE JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> PURE JAVA HIKARICP CONFIGURATION CHEATSHEET:");\r
        System.out.println("  HikariConfig config = new HikariConfig();");\r
        System.out.println("  config.setJdbcUrl("jdbc:postgresql://localhost:5432/barrackpore_db");");\r
        System.out.println("  config.setUsername("postgres");");\r
        System.out.println("  config.setPassword("admin_secret_2026");\\n");\r
\r
        System.out.println(">>> THE 5 CRITICAL PRODUCTION POOL PARAMETERS:");\r
        System.out.println("  1. config.setMaximumPoolSize(10);          // Max active physical connections in pool.");\r
        System.out.println("  2. config.setMinimumIdle(10);              // Recommend: same as maxPoolSize (fixed pool).");\r
        System.out.println("  3. config.setConnectionTimeout(30000);     // Max wait time to borrow (30 seconds).");\r
        System.out.println("  4. config.setIdleTimeout(600000);          // Max time idle connection sits (10 mins).");\r
        System.out.println("  5. config.setMaxLifetime(1800000);         // Max total lifespan of connection (30 mins).\\n");\r
\r
        System.out.println(">>> POOL SIZING FORMULA (PostgreSQL / MySQL Official Formula):");\r
        System.out.println("  - pool_size = (core_count * 2) + effective_spindle_count");\r
        System.out.println("  - Example for 4 CPU Cores with NVMe SSD: (4 * 2) + 2 = 10 connections!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 10: Configuring HikariCP\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRODUCTION CONFIGURATION PROPERTIES:\r
   - 'maximumPoolSize'    : Cap on total connections (Default: 10).\r
   - 'minimumIdle'        : Minimum idle connections (Hikari recommends omitting or matching maxPoolSize).\r
   - 'connectionTimeout'  : Milliseconds to wait before throwing SQLException on pool exhaustion (Default: 30000ms).\r
   - 'maxLifetime'        : Max connection age before being retired and refreshed (Default: 1800000ms / 30m).\r
\r
2. COMMON PITFALL:\r
   - Setting 'maxLifetime' LONGER than the database server's TCP connection timeout (e.g. MySQL 'wait_timeout')\r
     causes dead connection errors! Always set 'maxLifetime' 2-3 minutes SHORTER than DB server timeout!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why should HikariCP's maxLifetime parameter always be configured to be shorter than the database server's wait_timeout?",shortAnswer:"To ensure that HikariCP gracefully retires and replaces aging connections from the client side before the database server or network firewall abruptly terminates the idle TCP socket, preventing 'Communications link failure' exceptions.",explanation:"Standard network resilience rule for connection pools.",hint:"Prevents the database server or firewall from severing the socket before HikariCP retires it.",level:"Intermediate",codeExample:"config.setMaxLifetime(1800000); // 30 mins (shorter than MySQL wait_timeout)"},{question:"What is the recommended HikariCP pool size formula for a server with N CPU cores and SSD storage?",shortAnswer:"connections = (CPU cores * 2) + 1 (or + effective spindle count). For example, on a 4-core server, a pool size of 10 is optimal.",explanation:"Prevents excessive CPU thread context switching on the database engine.",hint:"pool_size = (cores * 2) + spindle_count",level:"Intermediate",codeExample:"4 Cores -> Pool size of ~10 connections."}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Configuring HikariCP: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HikariConfig & Production Sizing"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mastering pool configuration: setting maximumPoolSize, minimumIdle, connectionTimeout, idleTimeout, maxLifetime, and pool sizing formulas."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ConfiguringHikariCpPureJavaDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JDBC Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:a,title:"Module 011_001 Topic 10: Configuring HikariCP in Pure Java",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic10_configuring_hikaricp_pure_java_note.txt"})}),e.jsx(o,{note:"Most developers think bigger pool = faster app. That is dead wrong! Sizing a pool to 100 connections on a 4-core database will grind your disk to a halt with context switching! Use the formula: pool size = (core count * 2) + effective_spindle_count! — Sukanta Hui"})]})}export{g as default};
