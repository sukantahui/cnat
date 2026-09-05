import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const l=`/**\r
 * Java Core Tutorial - Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
 * Topic 3: The wasNull() Method - Handling SQL NULL in Primitives\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.ResultSet;\r
import java.sql.SQLException;\r
\r
public class WasNullMethodDemo {\r
\r
    public static Double extractNullableDouble(ResultSet rs, String columnLabel) throws SQLException {\r
        // Step 1: Read primitive double\r
        double value = rs.getDouble(columnLabel);\r
\r
        // Step 2: Check wasNull() IMMEDIATELY after reading the column!\r
        if (rs.wasNull()) {\r
            return null; // Database column was genuinely SQL NULL!\r
        }\r
        return value;    // Database column had a valid numeric value!\r
    }\r
\r
    public static Integer extractNullableInteger(ResultSet rs, String columnLabel) throws SQLException {\r
        int value = rs.getInt(columnLabel);\r
        return rs.wasNull() ? null : value;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: THE wasNull() METHOD - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE PRIMITIVE NULL DILEMMA IN JDBC:");\r
        System.out.println("  - Java primitive types ('int', 'double', 'boolean', 'long') CANNOT BE NULL.");\r
        System.out.println("  - When a database column is SQL NULL:");\r
        System.out.println("    * rs.getInt()     returns 0 (NOT null!).");\r
        System.out.println("    * rs.getDouble()  returns 0.0.");\r
        System.out.println("    * rs.getBoolean() returns false.\\n");\r
\r
        System.out.println(">>> THE SOLUTION: rs.wasNull():");\r
        System.out.println("  - 'boolean wasNull()' checks whether the LAST read column was SQL NULL.");\r
        System.out.println("  - Always call 'rs.wasNull()' immediately after reading the primitive getter!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_003: ResultSet, Scrollable, Updatable & Metadata\r
Topic 3: The wasNull() Method\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS 'wasNull()':\r
   - Method on 'java.sql.ResultSet'.\r
   - Returns true if the LAST column value read by a getter was SQL NULL, false otherwise.\r
\r
2. GOLDEN PATTERN FOR NULLABLE PRIMITIVES:\r
   'int score = rs.getInt("score");\r
    Integer finalScore = rs.wasNull() ? null : score;'\r
\r
3. ALTERNATIVE IN MODERN JDBC (getObject with Class):\r
   'Integer score = rs.getObject("score", Integer.class); // Returns null natively!'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What value is returned by rs.getInt('scholarship') if the database column contains a SQL NULL value?",shortAnswer:"0 (Java primitives cannot be null, so JDBC getters default to primitive zero/false).",explanation:"Must use rs.wasNull() to differentiate between genuine 0 and SQL NULL.",hint:"Returns 0.",level:"Beginner",codeExample:"int val = rs.getInt('col'); if (rs.wasNull()) { /* genuine null */ }"},{question:"How can you read a nullable integer column directly as an Integer object without calling rs.wasNull() in JDBC 4.1+?",shortAnswer:"By calling rs.getObject(columnLabel, Integer.class) (e.g. Integer score = rs.getObject('score', Integer.class)), which returns null natively if the SQL column is NULL.",explanation:"Introduced in JDBC 4.1 for clean type conversion.",hint:"rs.getObject(columnLabel, Integer.class)",level:"Intermediate",codeExample:"Integer score = rs.getObject('score', Integer.class);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"ResultSet & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The wasNull() Method: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Handling SQL NULL in Primitives"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preventing silent bugs: why rs.getInt() returns 0 for SQL NULL, and how rs.wasNull() detects genuine database NULL values."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:l,title:"WasNullMethodDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"ResultSet & Metadata FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 011_003 Topic 3: The wasNull() Method",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_003_topic3_wasnull_method_note.txt"})}),e.jsx(a,{note:"This is a classic Java interview question: If a column in MySQL is NULL and you call rs.getInt('discount'), what does Java return? It returns 0! To know if the database was ACTUALLY null or zero, you MUST call rs.wasNull()! — Sukanta Hui"})]})}export{b as default};
