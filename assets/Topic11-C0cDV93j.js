import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 003_001: String Immutability & The String Constant Pool (SCP)\r
 * Topic 11: Splitting & Joining: split(regex), String.join(delimiter, elements)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.strings;\r
\r
import java.util.Arrays;\r
import java.util.List;\r
\r
public class StringSplitAndJoinMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: SPLITTING & JOINING STRINGS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Splitting CSV Data via split(regex):\r
        String csvRow = "Swadeep Paul,Barrackpore,Full Stack Java,9830000000";\r
        String[] tokens = csvRow.split(",");\r
\r
        System.out.println(">>> 1. Splitting CSV string:");\r
        for (int i = 0; i < tokens.length; i++) {\r
            System.out.printf("  Token [%d]: %s\\n", i, tokens[i]);\r
        }\r
\r
        // 2. Joining elements with String.join() (Java 8+):\r
        List<String> hubList = Arrays.asList("Barrackpore", "Naihati", "Shyamnagar", "Ichapur");\r
        String formattedHubs = String.join(" -> ", hubList);\r
\r
        System.out.println("\\n>>> 2. Joining Collection via String.join():");\r
        System.out.println("  Connected Hubs: " + formattedHubs);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_001: String Immutability & String Constant Pool\r
Topic 11: Splitting & Joining Strings\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SPLIT & JOIN APIS:\r
   - 'str.split(regex)'           : Returns 'String[]'.\r
   - 'str.split(regex, limit)'    : Limits number of resulting tokens.\r
   - 'String.join(delim, items)'  : Clean joining without trailing delimiters.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do 'String.split()' and 'String.join()' work together for data serialization?",shortAnswer:"'split(regex)' tokenizes a delimited string into a 'String[]' array based on a regular expression. 'String.join(delimiter, elements)' joins array elements or iterables into a single delimited string.",explanation:"String.join eliminates the classic trailing comma loop bug.",hint:"split tokenizes delimited strings; join concatenates with delimiters without trailing bugs.",level:"Beginner",codeExample:`String[] parts = csv.split(",");
String joined = String.join(", ", parts);`}];function S(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_001 · Topic 11"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Tokenization & Formatting"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Splitting & Joining: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"split()"})," & ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"String.join()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master delimiter-based parsing and serialization: tokenizing CSV records with ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"split()"})," and building clean lists with Java 8 ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"String.join()"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(n,{fileModule:a,title:"StringSplitAndJoinMasteryDemo.java",highlightLines:[7,16,17,24,25]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Split & Join FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(i,{content:s,title:"Module 003_001 Topic 11: String Split and Join",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_001_topic11_split_join_note.txt"})}),t.jsx(r,{note:"Never write a for-loop to join strings! Just write 'String.join(', ', list)'—it handles all delimiter boundaries cleanly in 1 line. — Sukanta Hui"})]})}export{S as default};
