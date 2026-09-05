import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 12: The Proxy Pattern - Virtual, Protection & Dynamic AOP\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class ProxyPatternDemo {\r
\r
    // 1. Subject Interface:\r
    public interface DatabaseServer {\r
        void executeQuery(String userRole, String sql);\r
    }\r
\r
    // 2. Real Subject (Heavy / Sensitive):\r
    public static class RealDatabaseServer implements DatabaseServer {\r
        public RealDatabaseServer() {\r
            System.out.println("   [REAL DB]: Initialized heavy database engine and connection pool.");\r
        }\r
\r
        @Override\r
        public void executeQuery(String role, String sql) {\r
            System.out.println("   [REAL DB EXEC]: Running '" + sql + "' for role: " + role);\r
        }\r
    }\r
\r
    // 3. Protection & Virtual Proxy:\r
    public static class DatabaseServerProxy implements DatabaseServer {\r
        private RealDatabaseServer realServer; // Lazy Virtual Proxy reference!\r
\r
        @Override\r
        public void executeQuery(String userRole, String sql) {\r
            // Protection Proxy check:\r
            if (sql.toUpperCase().startsWith("DROP") && !"ADMIN".equalsIgnoreCase(userRole)) {\r
                System.err.println("   [SECURITY PROXY]: ACCESS DENIED! Only ADMINs can execute DROP queries! 🛡️");\r
                return;\r
            }\r
\r
            // Virtual Proxy lazy loading:\r
            if (realServer == null) {\r
                System.out.println("   [VIRTUAL PROXY]: First query received -> Instantiating RealDatabaseServer on demand...");\r
                realServer = new RealDatabaseServer();\r
            }\r
\r
            realServer.executeQuery(userRole, sql);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: PROXY DESIGN PATTERN - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        DatabaseServer proxy = new DatabaseServerProxy();\r
\r
        System.out.println("1. Student attempting unauthorized DROP:");\r
        proxy.executeQuery("STUDENT", "DROP TABLE exams");\r
\r
        System.out.println("\r
2. Teacher executing SELECT (triggers lazy initialization):");\r
        proxy.executeQuery("TEACHER", "SELECT * FROM students");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 12: Proxy Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Provide a surrogate or placeholder for another object to control access to it.\r
\r
2. COMMON PROXY TYPES:\r
   - Virtual Proxy   : Lazy initialization of expensive resources.\r
   - Protection Proxy: Role-based authorization & permission validation.\r
   - Remote Proxy    : RMI / gRPC network stub representation.\r
   - Dynamic Proxy   : Spring AOP transactions ('@Transactional') and caching.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the primary role of a Virtual Proxy?",shortAnswer:"To defer the instantiation and resource allocation of a heavy or expensive object until the exact moment one of its methods is first invoked (lazy initialization).",explanation:"Core mechanism used by Hibernate lazy-loading entities.",hint:"Defers object creation until it is actually needed.",level:"Beginner",codeExample:"if (realSubject == null) realSubject = new ExpensiveSubject();"},{question:"How does Spring Framework use Dynamic Proxies to implement declarative transactions (@Transactional)?",shortAnswer:"Spring generates a dynamic proxy wrapping the target service bean. When a transactional method is called, the proxy opens a database transaction, invokes the real service method, and commits or rolls back based on exceptions.",explanation:"Aspect-Oriented Programming (AOP) mechanism in Spring.",hint:"Wraps target beans to intercept method calls for transaction begin/commit/rollback.",level:"Intermediate",codeExample:"Proxy intercepts method → begins tx → delegates → commits tx."}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Proxy Pattern: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Virtual, Protection & Dynamic AOP"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Access interception: controlling object access using lazy virtual proxies, role-based protection proxies, and JDK Dynamic Proxies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ProxyPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"GoF Design Patterns FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 012_001 Topic 12: Proxy Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic12_proxy_pattern_note.txt"})}),e.jsx(a,{note:"The Proxy pattern acts as a bodyguard! A Virtual Proxy delays creating heavy objects until they are actually used (Lazy Loading in Hibernate); a Protection Proxy checks if the user has ADMIN privileges before delegating! — Sukanta Hui"})]})}export{b as default};
