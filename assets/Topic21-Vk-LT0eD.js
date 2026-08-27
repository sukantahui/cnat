import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
 * Topic 21: Configuring Isolation Levels - conn.setTransactionIsolation()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.DatabaseMetaData;\r
import java.sql.SQLException;\r
\r
public class ConfiguringIsolationLevelsDemo {\r
\r
    public static void inspectAndConfigureIsolation(Connection conn) throws SQLException {\r
        DatabaseMetaData meta = conn.getMetaData();\r
\r
        // 1. Inspect default and supported levels:\r
        System.out.println("   [DB INFO]: Default Isolation Level = " + meta.getDefaultTransactionIsolation());\r
        System.out.println("   [DB INFO]: Supports READ COMMITTED  = " + meta.supportsTransactionIsolationLevel(Connection.TRANSACTION_READ_COMMITTED));\r
        System.out.println("   [DB INFO]: Supports SERIALIZABLE    = " + meta.supportsTransactionIsolationLevel(Connection.TRANSACTION_SERIALIZABLE));\r
\r
        // 2. Read current connection isolation:\r
        int currentLevel = conn.getTransactionIsolation();\r
        System.out.println("   [CONNECTION]: Current Active Level  = " + currentLevel);\r
\r
        // 3. Change connection isolation level:\r
        conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED);\r
        System.out.println("   [CONNECTION]: Successfully updated to READ_COMMITTED! ✅");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 21: CONFIGURING ISOLATION LEVELS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> KEY RULES FOR SETTING ISOLATION IN JDBC:");\r
        System.out.println("  1. Timing Rule : Call setTransactionIsolation() BEFORE beginning a transaction.");\r
        System.out.println("  2. Scope Rule  : The setting applies to all subsequent transactions on THIS connection.");\r
        System.out.println("  3. Pool Rule   : HikariCP allows configuring default isolation across the entire pool: 'config.setTransactionIsolation("TRANSACTION_READ_COMMITTED");'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_004: Transaction Management, ACID, Isolation Levels & Savepoints\r
Topic 21: Configuring Isolation Levels\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. API METHODS:\r
   - 'conn.getTransactionIsolation()' : Returns current integer level.\r
   - 'conn.setTransactionIsolation(int level)' : Sets new level.\r
   - 'meta.supportsTransactionIsolationLevel(int level)' : Checks database engine compatibility.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,r=[{question:"When should connection.setTransactionIsolation(level) be called during a transaction lifecycle?",shortAnswer:"It must be called before beginning a transaction or while no transaction is active on the connection. Changing isolation level mid-transaction can cause driver exceptions or an implicit commit depending on the RDBMS.",explanation:"Must establish isolation level prior to starting work.",hint:"Call before starting the transaction or while auto-commit is enabled.",level:"Intermediate",codeExample:"conn.setTransactionIsolation(Connection.TRANSACTION_READ_COMMITTED); conn.setAutoCommit(false);"},{question:"How do you inspect the current transaction isolation level of a Connection object?",shortAnswer:"conn.getTransactionIsolation()",explanation:"Returns the integer constant corresponding to the active level.",hint:"conn.getTransactionIsolation()",level:"Beginner",codeExample:"int level = conn.getTransactionIsolation();"}];function g(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_004 · Topic 21"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Transactions & ACID"})]}),n.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Configuring Isolation Levels: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"conn.setTransactionIsolation()"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dynamic isolation management: checking database metadata support, changing connection isolation levels, and inspecting current isolation state."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:i,title:"ConfiguringIsolationLevelsDemo.java",highlightLines:[18,25,34,43]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Transaction & ACID FAQs",questions:r})}),n.jsx("section",{className:"space-y-4",children:n.jsx(o,{content:s,title:"Module 011_004 Topic 21: Configuring Isolation Levels",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_004_topic21_configuring_isolation_levels_note.txt"})}),n.jsx(a,{note:"Always check if your database supports an isolation level before setting it using dbMeta.supportsTransactionIsolationLevel()! And remember: setTransactionIsolation() MUST be called BEFORE the transaction begins! — Sukanta Hui"})]})}export{g as default};
