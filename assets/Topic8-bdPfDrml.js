import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 8: The java.util.Scanner Class Revisited: Parsing Delimited Primitives\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.StringReader;\r
import java.util.Locale;\r
import java.util.Scanner;\r
\r
public class ScannerPrimitiveParsingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: java.util.Scanner PARSING PRIMITIVES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String studentCsvData =\r
                "Swadeep 85.50 101 true\\n" +\r
                "Tuhina 92.00 102 true\\n" +\r
                "Abhronila 89.25 103 false";\r
\r
        System.out.println(">>> Parsing Heterogeneous Primitives with Scanner:");\r
        try (Scanner scanner = new Scanner(new StringReader(studentCsvData))) {\r
            scanner.useLocale(Locale.US); // Ensures decimal points are '.'\r
\r
            while (scanner.hasNext()) {\r
                String name = scanner.next();\r
                double marks = scanner.nextDouble();\r
                int roll = scanner.nextInt();\r
                boolean feePaid = scanner.nextBoolean();\r
\r
                System.out.printf("  Trainee: %-10s | Marks: %5.2f | Roll: %d | Fee Paid: %b%n",\r
                        name, marks, roll, feePaid);\r
            }\r
        }\r
\r
        System.out.println("\\n>>> SCANNER CAPABILITIES:");\r
        System.out.println("  1. Tokenizes whitespace-delimited strings automatically.");\r
        System.out.println("  2. Built-in type coercion: nextInt(), nextDouble(), nextBoolean(), nextLong().");\r
        System.out.println("  3. Regex delimiter support via 'scanner.useDelimiter(...)'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 8: java.util.Scanner Parsing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SCANNER ADVANTAGES:\r
   - Built-in type conversion: 'nextInt()', 'nextDouble()', 'nextBoolean()'.\r
   - Automatic whitespace tokenization.\r
   - Custom delimiters: 'scanner.useDelimiter(",")'.\r
   - Slower than BufferedReader due to regex overhead, but convenient for primitives.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the primary strength of 'java.util.Scanner' compared to 'BufferedReader' when processing file input?",shortAnswer:"'Scanner' has built-in tokenization and primitive parsing ('nextInt()', 'nextDouble()', 'nextBoolean()'). It automatically breaks input by whitespace (or custom regex delimiters) and parses types directly without requiring manual 'String.split()' and 'Integer.parseInt()' calls.",explanation:"Ideal for small scripts and competitive programming test case parsing.",hint:"Direct parsing of primitives (nextInt, nextDouble) and custom regex tokenization.",level:"Beginner",codeExample:"Scanner s = new Scanner(file); int id = s.nextInt(); double score = s.nextDouble();"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Token Parser"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Scanner"})," Class Revisited: Parsing Tokens & Primitives"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Simplify structured data ingestion: extracting primitive data types and custom regex-delimited tokens without manual string parsing boilerplate."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ScannerPrimitiveParsingDemo.java",highlightLines:[7,10,19,20,23,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Scanner Parsing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 005_003 Topic 8: Scanner Parsing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic8_scanner_parsing_note.txt"})}),e.jsx(a,{note:"Use Scanner when you have mixed data types like 'Swadeep 85.50 101' in a single line! It saves you from calling split() and Double.parseDouble() manually! — Sukanta Hui"})]})}export{S as default};
