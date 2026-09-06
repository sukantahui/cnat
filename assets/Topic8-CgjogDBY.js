import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 8: Static Initialization Blocks (SIB): Execution During Class Loading\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class StaticInitializationBlockDemo {\r
\r
    public static class RegionalCenterRegistry {\r
        // Complex static collection\r
        public static final Map<String, String> HUB_DIRECTORS = new HashMap<>();\r
\r
        // STATIC INITIALIZATION BLOCK (SIB):\r
        // Executes ONCE when RegionalCenterRegistry is loaded by ClassLoader\r
        static {\r
            System.out.println("  [SIB EXECUTING] Populating regional hub registry...");\r
            HUB_DIRECTORS.put("BKP", "Sukanta Hui (Barrackpore Central)");\r
            HUB_DIRECTORS.put("NHT", "Naihati Regional Branch");\r
            HUB_DIRECTORS.put("SHY", "Shyamnagar Tech Lab");\r
            HUB_DIRECTORS.put("ICP", "Ichapur Extension Center");\r
            System.out.println("  [SIB COMPLETED] Registry populated with " + HUB_DIRECTORS.size() + " hubs.");\r
        }\r
\r
        public static String getDirector(String code) {\r
            return HUB_DIRECTORS.getOrDefault(code, "Unknown Hub");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: STATIC INITIALIZATION BLOCKS (SIB) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Accessing Static Method (Triggers Class Loading & SIB):");\r
        String dir = RegionalCenterRegistry.getDirector("BKP");\r
        System.out.println("  Director for BKP: " + dir);\r
\r
        System.out.println("\\n>>> 2. Accessing Second Time (SIB does NOT re-execute):");\r
        String dir2 = RegionalCenterRegistry.getDirector("NHT");\r
        System.out.println("  Director for NHT: " + dir2);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 8: Static Initialization Blocks (SIB)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SIB RULES:\r
   - Enclosed in 'static { ... }'.\r
   - Executes ONCE upon class loading.\r
   - Used for complex static initialization (Maps, database configs, native libraries).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a Static Initialization Block (SIB) in Java and when does it execute?",shortAnswer:"An unnamed block declared with 'static { ... }' that executes exactly ONCE when the class is loaded into Metaspace memory by the JVM ClassLoader.",explanation:"Used to initialize complex static data structures, load native C/C++ libraries ('System.loadLibrary'), or load database drivers.",hint:"Executes once when class is loaded into memory.",level:"Beginner",codeExample:"static { /* Initialize static constants / database drivers */ }"}];function g(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 8"}),t.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Class Loading Genesis"})]}),t.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Static Initialization Blocks (SIB): Execution During Class Loading"}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how the JVM ClassLoader fires Static Initialization Blocks upon class genesis to populate complex static maps, configuration settings, and native drivers."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"StaticInitializationBlockDemo.java",highlightLines:[17,18,24,35,39]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Static Initialization Block FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 002_004 Topic 8: Static Initialization Blocks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic8_sib_note.txt"})}),t.jsx(i,{note:"If you need to populate a static Map or load a database driver before any code runs, use a Static Initialization Block! It executes safely once when the class is loaded. — Sukanta Hui"})]})}export{g as default};
