import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 6: Parsing CSV Files Manually in Java: RFC 4180 Rules (Quotes & Embedded Commas)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class ManualCsvParsingRfc4180Demo {\r
\r
    // RFC 4180 Compliant CSV Line Parser (Handles commas inside quotes & escaped double quotes):\r
    public static List<String> parseCsvLine(String line) {\r
        List<String> tokens = new ArrayList<>();\r
        StringBuilder currentToken = new StringBuilder();\r
        boolean inQuotes = false;\r
\r
        for (int i = 0; i < line.length(); i++) {\r
            char c = line.charAt(i);\r
\r
            if (c == '"') {\r
                // Check for escaped quote (""):\r
                if (inQuotes && i + 1 < line.length() && line.charAt(i + 1) == '"') {\r
                    currentToken.append('"');\r
                    i++; // Skip the second quote\r
                } else {\r
                    inQuotes = !inQuotes; // Toggle quote state\r
                }\r
            } else if (c == ',' && !inQuotes) {\r
                // Delimiter encountered OUTSIDE quotes:\r
                tokens.add(currentToken.toString().trim());\r
                currentToken.setLength(0); // Reset buffer\r
            } else {\r
                currentToken.append(c);\r
            }\r
        }\r
        tokens.add(currentToken.toString().trim()); // Add final token\r
        return tokens;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: RFC 4180 MANUAL CSV PARSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Tricky CSV lines with embedded commas and escaped quotes:\r
        String[] testCsvLines = {\r
                "STU_101,Swadeep Paul,8500.00,Active",\r
                "STU_102,"Das, Tuhina (Top Scorer)",9200.00,Active",\r
                "STU_103,"Mukherjee, Debangshu ""The Architect""",9800.00,Active"\r
        };\r
\r
        for (int i = 0; i < testCsvLines.length; i++) {\r
            System.out.println(">>> Parsing CSV Row #" + (i + 1) + ":");\r
            System.out.println("  Raw Line : " + testCsvLines[i]);\r
            List<String> parsed = parseCsvLine(testCsvLines[i]);\r
            System.out.println("  Tokens   : " + parsed);\r
            System.out.println("  Fields (4): [ID=" + parsed.get(0) + " | Name=" + parsed.get(1) + " | Fee=" + parsed.get(2) + " | Status=" + parsed.get(3) + "]\\n");\r
        }\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 6: Manual CSV Parsing (RFC 4180)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RFC 4180 CSV RULES:\r
   - Fields containing commas must be enclosed in double quotes '"..."'.\r
   - Quotes inside quoted fields are escaped by doubling them '""'.\r
   - Avoid naive 'line.split(",")' on complex data.\r
   - Use character-by-character state parsing for robust token extraction.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:`Why does simple 'line.split(",")' fail when parsing real-world CSV files according to RFC 4180?`,shortAnswer:`'line.split(",")' naively splits on every comma character. Real-world CSV files (RFC 4180) frequently contain fields with embedded commas enclosed in quotes (e.g. "Das, Tuhina"), escaped double quotes (""), or multi-line values. Simple split() chops quoted text in half and produces corrupted field columns.`,explanation:"A proper state-machine parser or library (like Apache Commons CSV) is required.",hint:`Embedded commas inside quoted text ('"Das, Tuhina"') get incorrectly split by line.split(',').`,level:"Intermediate",codeExample:`String s = "1,\\"Das, Tuhina\\",100"; // split(',') creates 3 tokens instead of 2`}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"RFC 4180 CSV"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Parsing CSV Files Manually in Java: RFC 4180 Rules (Quotes & Embedded Commas)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build robust CSV parsers: implementing character state-machine scanners to handle embedded commas inside quotes and escaped double-quote sequences."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"ManualCsvParsingRfc4180Demo.java",highlightLines:[7,10,11,17,18,19,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"CSV Parsing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 005_006 Topic 6: Manual CSV Parsing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic6_manual_csv_parsing_note.txt"})}),e.jsx(s,{note:"Never use 'line.split(',')' in production for CSV files! If a student's address is '12, Ghoshpara Road, Barrackpore', split() will break the address into 3 pieces! Build a state-machine parser instead! — Sukanta Hui"})]})}export{g as default};
