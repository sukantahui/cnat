import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 1: Structure & Syntax Rules of .properties Files (Delimiters, Escapes, Comments)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.io.StringReader;\r
import java.util.Properties;\r
\r
public class PropertiesFileSyntaxRulesDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: .properties FILE SYNTAX RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Raw .properties text content showing all standard syntax rules:\r
        String propertiesContent =\r
                "# =====================================================\\n" +\r
                "# BARRACKPORE ACADEMY APPLICATION CONFIGURATION\\n" +\r
                "# =====================================================\\n" +\r
                "! Exclamation marks are also valid comment characters!\\n" +\r
                "\\n" +\r
                "# Standard key=value delimiter:\\n" +\r
                "database.url=jdbc:postgresql://localhost:5432/accotax_db\\n" +\r
                "\\n" +\r
                "# Colon ':' is an equally valid delimiter:\\n" +\r
                "database.username: postgres\\n" +\r
                "\\n" +\r
                "# Whitespace delimiter (space between key and value):\\n" +\r
                "database.pool.size 25\\n" +\r
                "\\n" +\r
                "# Multi-line value using backslash '\\\\':\\n" +\r
                "welcome.message=Welcome to Barrackpore Academy! \\\\\\n" +\r
                "               Master Java Core and Spring Boot with Sukanta Hui.\\n" +\r
                "\\n" +\r
                "# Escaped special characters (colon in key):\\n" +\r
                "tax\\\\:rate.gst=18.0";\r
\r
        Properties props = new Properties();\r
        try (StringReader reader = new StringReader(propertiesContent)) {\r
            props.load(reader);\r
        }\r
\r
        System.out.println(">>> Parsed Configuration Keys & Values:");\r
        System.out.println("  database.url     : " + props.getProperty("database.url"));\r
        System.out.println("  database.username: " + props.getProperty("database.username"));\r
        System.out.println("  database.pool.size: " + props.getProperty("database.pool.size"));\r
        System.out.println("  welcome.message  : " + props.getProperty("welcome.message"));\r
        System.out.println("  tax:rate.gst     : " + props.getProperty("tax:rate.gst"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 1: .properties File Syntax Rules\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. .PROPERTIES SYNTAX SPEC:\r
   - Delimiters : '=', ':', or whitespace ' '.\r
   - Comments   : Lines starting with '#' or '!'.\r
   - Multi-line : Trailing backslash '\\' escapes newline.\r
   - Escaping   : Escaping colons or equals in keys (e.g. 'tax\\:rate').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the permissible key-value separator characters and comment markers in standard Java .properties files?",shortAnswer:"1. Separators: Key and value can be separated by '=', ':', or unquoted whitespace (' '). 2. Comments: Any line beginning with '#' or '!' is treated as a comment and ignored. 3. Multi-line: Long values can span multiple lines by escaping the line break with a trailing backslash ('\\').",explanation:"Defined by the ISO-8859-1 / UTF-8 Properties file specification.",hint:"Separators are '=', ':', or spaces; comment markers are '#' and '!'; multi-line uses trailing backslash.",level:"Beginner",codeExample:`# Comment\\nkey1=val1\\nkey2: val2\\nkey3 val3\\nmultiline=line1\\\\
  line2`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Syntax Specification"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Structure & Syntax Rules of ",e.jsx("code",{className:"text-emerald-400 font-mono",children:".properties"})," Files"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master property file syntax: parsing key-value delimiters (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"="}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:":"}),", spaces), handling ",e.jsx("code",{className:"text-amber-300 font-mono",children:"#"})," and ",e.jsx("code",{className:"text-rose-300 font-mono",children:"!"})," comments, and escaping multi-line values."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"PropertiesFileSyntaxRulesDemo.java",highlightLines:[7,10,16,17,21,24,27,30,31,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Syntax Rules FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 005_006 Topic 1: .properties Syntax Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic1_properties_syntax_rules_note.txt"})}),e.jsx(a,{note:"Did you know you can use both '=' and ':' in .properties files? Even a simple space 'db.port 5432' is a valid delimiter! Use '=' consistently for clean code readability! — Sukanta Hui"})]})}export{g as default};
