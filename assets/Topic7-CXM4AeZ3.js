import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 7: TYPE_SCROLL_SENSITIVE - Live Database Synchronization\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class TypeScrollSensitiveNavigationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: TYPE_SCROLL_SENSITIVE SYNCHRONIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> TYPE_SCROLL_INSENSITIVE VS TYPE_SCROLL_SENSITIVE:");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  FEATURE                     TYPE_SCROLL_INSENSITIVE       TYPE_SCROLL_SENSITIVE");\r
        System.out.println("  -----------------------------------------------------------------------------------------");\r
        System.out.println("  Bidirectional Scrolling     Yes (next, previous, jump)    Yes (next, previous, jump)");\r
        System.out.println("  Client-Side Data Snapshot   Static snapshot at query time Live dynamic cursor");\r
        System.out.println("  Sees External Row Updates   NO (Cached values)            YES (Fetches live DB updates)");\r
        System.out.println("  Sees External Deletions     NO                            YES (Row marked deleted)");\r
        System.out.println("  Database Server Overhead    Low                           High (Requires server keyset/locks)");\r
        System.out.println("  Driver Support              Widely Supported              Driver-dependent (Often emulated)");\r
        System.out.println("  -----------------------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> CHECKING DRIVER SUPPORT FOR SENSITIVE CURSORS:");\r
        System.out.println("  DatabaseMetaData meta = conn.getMetaData();");\r
        System.out.println("  boolean supported = meta.supportsResultSetType(ResultSet.TYPE_SCROLL_SENSITIVE);");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 7: TYPE_SCROLL_SENSITIVE Navigation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HOW SENSITIVE CURSORS WORK:\r
   - The driver maintains a 'keyset' of primary keys rather than copying all row data.\r
   - When the cursor lands on a row, it re-queries the database columns using the keyset to retrieve fresh values.\r
\r
2. METHODS FOR DETECTING LIVE CHANGES:\r
   - 'rs.rowUpdated()' : True if current row was modified since query opened.\r
   - 'rs.rowDeleted()' : True if current row was deleted by another transaction.\r
   - 'rs.rowInserted()' : True if current row is a new insertion.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does a TYPE_SCROLL_SENSITIVE ResultSet differ from TYPE_SCROLL_INSENSITIVE?",shortAnswer:"TYPE_SCROLL_SENSITIVE dynamically reflects updates and deletions made to the underlying database rows by concurrent transactions while the ResultSet remains open, whereas TYPE_SCROLL_INSENSITIVE displays a static snapshot taken at query execution time.",explanation:"Requires database server lock/keyset cursor support.",hint:"Reflects live concurrent updates and deletions made to the database.",level:"Intermediate",codeExample:"conn.createStatement(ResultSet.TYPE_SCROLL_SENSITIVE, ResultSet.CONCUR_READ_ONLY);"},{question:"What method on DatabaseMetaData checks if the connected database driver supports sensitive scrollable cursors?",shortAnswer:"meta.supportsResultSetType(ResultSet.TYPE_SCROLL_SENSITIVE)",explanation:"Many drivers (like SQLite) only support TYPE_FORWARD_ONLY.",hint:"meta.supportsResultSetType(ResultSet.TYPE_SCROLL_SENSITIVE)",level:"Advanced",codeExample:"boolean ok = conn.getMetaData().supportsResultSetType(ResultSet.TYPE_SCROLL_SENSITIVE);"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["TYPE_SCROLL_SENSITIVE: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Live Database Synchronization"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Real-time telemetry: cursors that automatically reflect row updates, modifications, and deletions made by concurrent transactions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TypeScrollSensitiveNavigationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"ResultSet & Metadata FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 011_003 Topic 7: TYPE_SCROLL_SENSITIVE Navigation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic7_type_scroll_sensitive_navigation_note.txt"})}),e.jsx(n,{note:"TYPE_SCROLL_SENSITIVE is a live window into the database! If another thread updates a student's fees while your ResultSet is open, scrolling onto that row fetches the updated value immediately! — Sukanta Hui"})]})}export{T as default};
