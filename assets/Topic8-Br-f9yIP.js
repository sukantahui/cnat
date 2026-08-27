import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 8: Format Flags: Width, Left-Alignment (-), Zero-Padding (0) & Comma Grouping (,)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class AdvancedFormatFlagsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: ADVANCED STRING FORMAT FLAGS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        long rupeeAmount = 1500000;\r
        int roll = 42;\r
        String name = "Swadeep Paul";\r
\r
        System.out.println(">>> 1. Comma Thousand Grouping (%,d):");\r
        System.out.println("  Formatted Amount : ₹" + String.format("%,d", rupeeAmount));\r
\r
        System.out.println("\\n>>> 2. Zero-Padding (%05d):");\r
        System.out.println("  ID Badge #       : " + String.format("%05d", roll));\r
\r
        System.out.println("\\n>>> 3. Table Column Alignment (- for Left-Align, Width=15):");\r
        System.out.println(String.format("| %-20s | %-12s | %10s |", "TRAINEE NAME", "HUB", "BALANCE"));\r
        System.out.println("+----------------------+--------------+------------+");\r
        System.out.println(String.format("| %-20s | %-12s | ₹%,9.2f |", name, "Barrackpore", 75000.50));\r
        System.out.println(String.format("| %-20s | %-12s | ₹%,9.2f |", "Tuhina Das", "Naihati", 125000.00));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 8: Format Flags & Table Alignment\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FORMAT FLAGS CHEATSHEET:\r
   - '%-20s' : Left-align string in 20-character wide column.\r
   - '%20s'  : Right-align string in 20-character wide column.\r
   - '%06d'  : Zero-pad integer to 6 digits (e.g. '000042').\r
   - '%,d'   : Thousands grouping comma separator ('1,500,000').\r
   - '%,.2f' : Thousands grouping with 2 decimal precision.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:`What does the comma flag do in format strings like 'String.format("%,d", 1000000)'?`,shortAnswer:"The comma flag automatically inserts locale-specific thousands-separator commas (e.g. 1,000,000) for numbers, making financial amounts and large quantities instantly human-readable.",explanation:"Standard for formatting banking and accounting figures in Indian Rupee ledgers.",hint:"Inserts thousands-separator commas for numeric values.",level:"Beginner",codeExample:'String.format("%,d", 1000000); // Outputs: 1,000,000'}];function f(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 8"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Financial & Tabular Formatting"})]}),n.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Format Flags: Comma Grouping ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"%,d"}),", Width & Left-Alignment ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"%-20s"})]}),n.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to render clean terminal tables and financial ledgers: using thousands separators, fixed-width column alignment, and zero-padded ID badges."})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:s,title:"AdvancedFormatFlagsDemo.java",highlightLines:[7,18,21,24,26,27]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{title:"Format Flags FAQs",questions:i})}),n.jsx("section",{className:"space-y-4",children:n.jsx(a,{content:o,title:"Module 003_002 Topic 8: Format Flags",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic8_format_flags_note.txt"})}),n.jsx(r,{note:"When displaying financial statements at our Barrackpore accounting portal, always use '%,.2f'! It automatically inserts commas and rounds decimals so clients see '₹1,50,000.00' cleanly. — Sukanta Hui"})]})}export{f as default};
