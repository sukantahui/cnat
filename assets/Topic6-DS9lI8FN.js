import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
 * Topic 6: The Connection Bottleneck - TCP Handshakes & Auth Latency\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class ConnectionBottleneckLatencyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE CONNECTION BOTTLENECK - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 7 EXPENSIVE STEPS OF OPENING A PHYSICAL DB CONNECTION:");\r
        System.out.println("  1. DNS Resolution              : Resolving DB hostname to IP (1 - 5 ms)");\r
        System.out.println("  2. TCP 3-Way Handshake         : SYN, SYN-ACK, ACK network round-trips (5 - 20 ms)");\r
        System.out.println("  3. TLS / SSL Handshake         : Certificate exchange, cipher negotiation (10 - 40 ms)");\r
        System.out.println("  4. Authentication Protocol     : Password hashing, challenge-response token (10 - 30 ms)");\r
        System.out.println("  5. Server Process / Thread Fork: DB allocates memory buffers and backend worker process (20 - 50 ms)");\r
        System.out.println("  6. Session Initialization      : Loading session variables, character encoding (5 - 15 ms)");\r
        System.out.println("  7. TOTAL OPENING OVERHEAD      : 50 ms - 200 ms PER CONNECTION!\\n");\r
\r
        System.out.println(">>> THE DISASTER SCENARIO (Manual DriverManager in Web Server):");\r
        System.out.println("  - 1,000 HTTP Requests / sec x 100ms connection latency = 100 SECONDS of wasted wait time!");\r
        System.out.println("  - Database server process crashes due to 'max_connections' exhaustion!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_001: JDBC Architecture, Drivers & Connection Pooling (HikariCP)\r
Topic 6: The Connection Bottleneck\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY CREATING NEW CONNECTIONS PER REQUEST IS FATAL:\r
   - High Latency : 50ms - 200ms per connection creation (versus &lt;1ms for cached pool connections).\r
   - High DB CPU  : Cryptographic TLS handshakes and process fork overhead exhaust database CPU.\r
   - Resource Cap : Database server 'max_connections' limit (e.g. 151 in MySQL) is quickly breached.\r
\r
2. SOLUTION:\r
   - Connection Pooling (pre-establishing a fixed pool of persistent warm connections).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is calling DriverManager.getConnection() on every incoming HTTP request considered a severe architectural anti-pattern in production web applications?",shortAnswer:"Because creating a physical database connection involves heavy network latency (TCP 3-way handshake, TLS cryptographic handshake, user authentication, and DB server worker process spawning), adding 50–200ms of latency per request and quickly exhausting database server connection limits.",explanation:"Connection creation is one of the most expensive operations in enterprise computing.",hint:"High latency (TCP/TLS/Auth) and database server process exhaustion.",level:"Beginner",codeExample:"Anti-pattern: creating new physical connection on every HTTP request."},{question:"What error occurs on the database server when too many applications open unpooled direct connections simultaneously?",shortAnswer:"The database server rejects connections and throws errors such as 'Too many connections' (MySQL error 1040) or 'FATAL: sorry, too many clients already' (PostgreSQL), crashing application traffic.",explanation:"Databases have strict concurrent connection limits.",hint:"MySQL 'Too many connections' error 1040.",level:"Intermediate",codeExample:"java.sql.SQLException: Too many connections (MySQL 1040)"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JDBC & Data Access"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Connection Bottleneck: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"TCP Handshakes & Auth Latency"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Why manual connections kill performance: analyzing the 50–200ms latency penalty of creating new database connections for every web request."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ConnectionBottleneckLatencyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JDBC Architecture FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 011_001 Topic 6: The Connection Bottleneck",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_001_topic6_connection_bottleneck_latency_note.txt"})}),e.jsx(o,{note:"Creating a new physical DB connection takes 50 to 200 milliseconds! It requires DNS lookup, 3-way TCP handshake, TLS handshake, SSL certificate verification, and user password hashing! In a web app with 1,000 requests/sec, opening connections manually will CRASH your server! — Sukanta Hui"})]})}export{x as default};
