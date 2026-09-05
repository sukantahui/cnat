import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 11: Parsing Strings with Custom Radices: Binary (2), Octal (8), Hex (16)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class CustomRadixParsingMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: CUSTOM RADIX NUMBER PARSING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Binary Base 2 (Radix = 2):\r
        int fromBinary = Integer.parseInt("101010", 2);\r
        System.out.println("  Integer.parseInt("101010", 2) : " + fromBinary + " (Decimal 42)");\r
\r
        // 2. Octal Base 8 (Radix = 8):\r
        int fromOctal = Integer.parseInt("77", 8);\r
        System.out.println("  Integer.parseInt("77", 8)     : " + fromOctal + " (Decimal 63)");\r
\r
        // 3. Hexadecimal Base 16 (Radix = 16):\r
        int fromHex = Integer.parseInt("FF", 16);\r
        System.out.println("  Integer.parseInt("FF", 16)     : " + fromHex + " (Decimal 255)");\r
\r
        // 4. Custom Radix Base 36 (Alphanumeric 0-9, A-Z):\r
        int fromBase36 = Integer.parseInt("JAVA", 36);\r
        System.out.println("  Integer.parseInt("JAVA", 36)   : " + fromBase36 + " (Decimal 903730)");\r
\r
        System.out.println("\\n>>> Radix Limits in Java: Minimum Radix is 2, Maximum Radix is 36 (Character.MAX_RADIX).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 11: Custom Radix Parsing\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RADIX PARSING RULES:\r
   - 'Integer.parseInt(str, 2)'  → Binary.\r
   - 'Integer.parseInt(str, 8)'  → Octal.\r
   - 'Integer.parseInt(str, 16)' → Hexadecimal.\r
   - 'Integer.parseInt(str, 36)' → Base-36 Alphanumeric.\r
   - Min Radix = 2, Max Radix = 36.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is the allowed radix (base) range when parsing numbers using 'Integer.parseInt(str, radix)' in Java?",shortAnswer:"The radix must be between 'Character.MIN_RADIX' (2) and 'Character.MAX_RADIX' (36). Base 2 parses binary, Base 8 parses octal, Base 16 parses hex, and Base 36 uses digits 0-9 and all 26 English letters A-Z.",explanation:"Supplying a radix < 2 or > 36 throws NumberFormatException.",hint:"Minimum radix is 2; maximum radix is 36.",level:"Intermediate",codeExample:'int hex = Integer.parseInt("DEADBEEF", 16);'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Radix Systems"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Parsing Strings with Custom Radices: Binary (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"2"}),"), Octal (",e.jsx("code",{className:"text-sky-400 font-mono",children:"8"}),") & Hex (",e.jsx("code",{className:"text-amber-400 font-mono",children:"16"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master non-decimal conversions: parsing binary bitmasks, hexadecimal memory addresses, and base-36 alphanumeric strings up to ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Character.MAX_RADIX"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"CustomRadixParsingMasteryDemo.java",highlightLines:[7,14,18,22,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Radix Parsing FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 003_003 Topic 11: Custom Radix Parsing",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic11_radix_parsing_note.txt"})}),e.jsx(n,{note:"If you are parsing hexadecimal color codes like '#FFFFFF', just strip the hash and call Integer.parseInt('FFFFFF', 16) to get the exact RGB integer! — Sukanta Hui"})]})}export{h as default};
