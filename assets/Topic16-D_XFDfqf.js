import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 16: Real-World Modeling: DataExporter Capstone (JSON, CSV, PDF)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
import java.util.List;\r
\r
public class RealWorldDataExporterCapstoneDemo {\r
\r
    // Abstract Pipeline Base\r
    public abstract static class DataExporter {\r
        protected String destinationPath;\r
\r
        public DataExporter(String destination) {\r
            this.destinationPath = destination;\r
        }\r
\r
        // Abstract Step 1: Read raw records from source\r
        protected abstract List<String> readRawData();\r
\r
        // Abstract Step 2: Format records into specific dialect (JSON, CSV, PDF)\r
        protected abstract String formatData(List<String> rawData);\r
\r
        // Concrete Step 3: Common file I/O dispatcher\r
        public void exportToFile() {\r
            System.out.println("  [PIPELINE START] Exporting to: " + destinationPath);\r
            List<String> records = readRawData();\r
            String formattedPayload = formatData(records);\r
            System.out.println("  [FILE I/O] Writing payload to disk (" + formattedPayload.length() + " bytes)...");\r
            System.out.println("  [PREVIEW PAYLOAD]:\r
" + formattedPayload);\r
            System.out.println("  [PIPELINE COMPLETE] Export verified successfully!\r
");\r
        }\r
    }\r
\r
    // Concrete JSON Exporter\r
    public static class JsonDataExporter extends DataExporter {\r
        public JsonDataExporter(String destination) { super(destination); }\r
\r
        @Override\r
        protected List<String> readRawData() {\r
            return List.of("Swadeep Paul:Java:95", "Tuhina Das:React:92", "Debangshu Mukherjee:Cloud:88");\r
        }\r
\r
        @Override\r
        protected String formatData(List<String> rawData) {\r
            StringBuilder sb = new StringBuilder("  [\r
");\r
            for (String r : rawData) {\r
                String[] p = r.split(":");\r
                sb.append(String.format("    {"name": "%s", "track": "%s", "score": %s},\r
", p[0], p[1], p[2]));\r
            }\r
            sb.append("  ]");\r
            return sb.toString();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 16: DATA EXPORTER ABSTRACTION CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        DataExporter exporter = new JsonDataExporter("/opt/barrackpore/exports/trainees.json");\r
        exporter.exportToFile();\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 002_007 ABSTRACT CLASSES & PARTIAL ABSTRACTION 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 16: DataExporter Abstraction Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 002_007 SUMMARY:\r
   - Abstraction hides complexity and establishes blueprints.\r
   - Abstract classes cannot use 'new'; must be extended.\r
   - Abstract methods have no bodies; must be overridden.\r
   - Partial abstraction combines shared concrete logic with abstract contracts.\r
   - Cannot combine: 'abstract' with 'final', 'private', or 'static'.\r
   - Template Method pattern locks algorithm workflow in base class.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does the DataExporter pattern demonstrate the power of abstract classes over interfaces?",shortAnswer:"DataExporter encapsulates the file I/O writing mechanism and destination path state in the abstract base class ('exportToFile()'), while allowing subclasses to strictly focus on reading and formatting dialect-specific strings (JSON, CSV, XML).",explanation:"Interfaces cannot encapsulate instance state or provide private helper workflows as cleanly as abstract classes.",hint:"Encapsulates file destination state and execution pipeline in base class.",level:"Intermediate",codeExample:"// Complete DataExporter capstone in Topic 16"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 16"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Pipeline"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Real-World Modeling: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"DataExporter"})," Pipeline Capstone"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all abstraction principles into an enterprise DataExporter pipeline: combining state encapsulation, template orchestration, and JSON formatting."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:s,title:"RealWorldDataExporterCapstoneDemo.java",highlightLines:[12,19,22,25,36,40]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{title:"Data Exporter Capstone FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:o,title:"Module 002_007 Topic 16: Data Exporter Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic16_exporter_capstone_note.txt"})}),t.jsx(n,{note:"Congratulations on mastering Module 002_007! You now have a solid command of Abstract Classes, Partial Abstraction, and the Template Method pattern in Java! — Sukanta Hui"})]})}export{h as default};
