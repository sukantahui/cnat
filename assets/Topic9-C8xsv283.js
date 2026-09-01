import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 9: Order of Execution with Multiple Static Blocks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class MultipleStaticBlocksOrderDemo {\r
\r
    public static class SystemBootstrapper {\r
        public static String systemVersion;\r
        public static String encryptionKey;\r
\r
        // Static Block 1\r
        static {\r
            systemVersion = "v2026.1-RELEASE";\r
            System.out.println("  [SIB 1] Loaded system version: " + systemVersion);\r
        }\r
\r
        // Static Block 2\r
        static {\r
            encryptionKey = "AES-256-" + System.currentTimeMillis();\r
            System.out.println("  [SIB 2] Generated system encryption key: " + encryptionKey);\r
        }\r
\r
        // Static Block 3\r
        static {\r
            System.out.println("  [SIB 3] Security checks passed. System ready!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: MULTIPLE STATIC BLOCKS EXECUTION ORDER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Triggering Class Loading of SystemBootstrapper:");\r
        String ver = SystemBootstrapper.systemVersion;\r
        System.out.println("\\n>>> SystemBootstrapper successfully initialized with version: " + ver);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 9: Multiple Static Blocks Execution Order\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTIPLE SIB RULES:\r
   - Execute in strict top-to-bottom textual order.\r
   - Compiled into one unified '<clinit>' method.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"In what order do multiple static initialization blocks execute in a Java class?",shortAnswer:"In the exact top-to-bottom textual order in which they appear in the source code file.",explanation:"The compiler combines multiple SIBs into a single '<clinit>' method in bytecode in sequential appearance order.",hint:"Exact top-to-bottom source code order.",level:"Beginner",codeExample:`static { /* First */ }
static { /* Second */ }`}];function S(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 9"}),t.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Bytecode Assembly"})]}),t.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Order of Execution with Multiple Static Blocks"}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand how javac concatenates multiple Static Initialization Blocks into a unified ",t.jsx("code",{className:"text-indigo-300 font-mono",children:"<clinit>"})," bytecode method, preserving top-to-bottom order."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"MultipleStaticBlocksOrderDemo.java",highlightLines:[15,21,27,36]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Multiple Static Blocks FAQs",questions:a})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 002_004 Topic 9: Multiple Static Blocks Order",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic9_multiple_sib_note.txt"})}),t.jsx(i,{note:"Multiple static blocks execute from top to bottom, exactly as you wrote them. The compiler merges them into one single <clinit> method. — Sukanta Hui"})]})}export{S as default};
