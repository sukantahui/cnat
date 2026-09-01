import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 004_002: Try, Catch, Finally & Flow Control\r
 * Topic 5: Java 7 Multi-Catch Syntax: Combining Disjoint Exceptions in a Single Block\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.IOException;\r
import java.sql.SQLException;\r
\r
public class Java7MultiCatchSyntaxDemo {\r
\r
    public static void executeDatabaseAndIoPipeline(boolean failWithSql) throws IOException, SQLException {\r
        if (failWithSql) {\r
            throw new SQLException("Failed to connect to PostgreSQL at Barrackpore hub!");\r
        } else {\r
            throw new IOException("Failed to write transaction receipt to storage disk!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: JAVA 7 MULTI-CATCH SYNTAX - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // JAVA 7 MULTI-CATCH: Using the pipe '|' operator to handle multiple exception types together:\r
        try {\r
            executeDatabaseAndIoPipeline(true);\r
        } catch (IOException | SQLException ex) {\r
            System.out.println(">>> 1. Intercepted Error in Multi-Catch Handler:");\r
            System.out.println("  Class Type   : " + ex.getClass().getSimpleName());\r
            System.out.println("  Error Message: " + ex.getMessage());\r
        }\r
\r
        System.out.println("\\n>>> 2. Multi-Catch Constraint Rule:");\r
        System.out.println("  The piped exception types MUST be DISJOINT (siblings in hierarchy).");\r
        System.out.println("  Writing 'catch (FileNotFoundException | IOException ex)' is a COMPILE ERROR because they have an inheritance relationship!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_002: Try, Catch, Finally & Flow Control\r
Topic 5: Java 7 Multi-Catch Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTI-CATCH RULES (Java 7+):\r
   - Syntax: 'catch (IOException | SQLException ex)'\r
   - Eliminates duplicate logging and recovery code.\r
   - Piped exceptions MUST be disjoint (no inheritance relationship).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the Java 7 Multi-Catch syntax and what rule governs the exception types combined with the pipe '|' operator?",shortAnswer:"Multi-Catch allows combining multiple exception types in a single catch parameter: 'catch (TypeA | TypeB ex)'. Rule: The combined exception types MUST be DISJOINT (they cannot have an inheritance relationship where one is a subclass of another, e.g. 'catch (FileNotFoundException | IOException ex)' is illegal).",explanation:"Introduced in Project Coin (Java 7) to drastically reduce duplicated error-handling boilerplate.",hint:"Uses the pipe '|' operator; combined types must not inherit from each other.",level:"Beginner",codeExample:"try { ... } catch (IOException | SQLException ex) { log.error(ex); }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java 7 Multi-Catch"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Java 7 Multi-Catch Syntax: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"catch (IOException | SQLException ex)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Eliminate repetitive error-handling boilerplate: using the pipe operator to catch disjoint exception siblings and understanding type hierarchy constraints."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"Java7MultiCatchSyntaxDemo.java",highlightLines:[7,10,11,12,13,23,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Multi-Catch FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 004_002 Topic 5: Java 7 Multi-Catch",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_002_topic5_multi_catch_syntax_note.txt"})}),e.jsx(i,{note:"Before Java 7, if you had 5 different exceptions requiring the same logger statement, you had to copy-paste 5 identical catch blocks! Multi-catch lets you combine them with '|' into 1 clean block! — Sukanta Hui"})]})}export{y as default};
