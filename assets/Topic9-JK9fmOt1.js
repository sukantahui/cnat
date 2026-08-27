import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 9: Manual JSON Generation vs Enterprise Libraries (Jackson, Gson Concepts)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.util.List;\r
\r
// Simple Java Domain Record/Class:\r
class StudentRecord {\r
    public final int id;\r
    public final String name;\r
    public final double fee;\r
    public final List<String> courses;\r
\r
    public StudentRecord(int id, String name, double fee, List<String> courses) {\r
        this.id = id;\r
        this.name = name;\r
        this.fee = fee;\r
        this.courses = courses;\r
    }\r
\r
    // Manual Lightweight JSON Generator (Zero-Dependency Pure Core Java):\r
    public String toJson() {\r
        StringBuilder sb = new StringBuilder();\r
        sb.append("{\\n");\r
        sb.append("  "id": ").append(id).append(",\\n");\r
        sb.append("  "name": "").append(name.replace(""", "\\\\"")).append("",\\n");\r
        sb.append("  "fee": ").append(String.format("%.2f", fee)).append(",\\n");\r
        sb.append("  "courses": [");\r
        for (int i = 0; i < courses.size(); i++) {\r
            sb.append(""").append(courses.get(i)).append(""");\r
            if (i < courses.size() - 1) sb.append(", ");\r
        }\r
        sb.append("]\\n");\r
        sb.append("}");\r
        return sb.toString();\r
    }\r
}\r
\r
public class ManualJsonVsJacksonConceptsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: MANUAL JSON GENERATION VS JACKSON/GSON - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentRecord student = new StudentRecord(\r
                101, "Swadeep Paul", 8500.0, List.of("Java Core", "Spring Boot", "PostgreSQL")\r
        );\r
\r
        System.out.println(">>> 1. Manual Zero-Dependency JSON Generation (Core Java):");\r
        String jsonPayload = student.toJson();\r
        System.out.println(jsonPayload);\r
\r
        System.out.println("\\n>>> 2. ENTERPRISE COMPARISON MATRIX:");\r
        System.out.println("+----------------------+---------------------------------+---------------------------------+");\r
        System.out.println("| Feature              | Manual Core Java JSON           | Enterprise Libraries (Jackson)  |");\r
        System.out.println("+----------------------+---------------------------------+---------------------------------+");\r
        System.out.println("| External Jars        | Zero dependencies               | Requires jackson-databind JARs  |");\r
        System.out.println("| Complexity           | Error-prone string formatting   | Automated via ObjectMapper      |");\r
        System.out.println("| Deep Object Graphs   | Tedious manual nested loops     | Automatic recursive traversal   |");\r
        System.out.println("| Performance          | Blazing fast for simple DTOs    | Optimized bytecode generation   |");\r
        System.out.println("+----------------------+---------------------------------+---------------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 9: Manual JSON vs Jackson/Gson\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JSON PARSING OPTIONS:\r
   - Core Java Manual: StringBuilder formatting (zero dependency).\r
   - Jackson ('ObjectMapper'): Industry standard in Spring Boot.\r
   - Google Gson: Lightweight library for Android and desktop apps.\r
   - Escape double quotes with '\\"' when formatting manually.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"When is manual JSON generation acceptable in Core Java, and when should you use an enterprise library like Jackson (ObjectMapper) or Google Gson?",shortAnswer:"Manual JSON generation is suitable for lightweight, zero-dependency command-line utilities, simple HTTP webhook dispatchers, or micro-benchmarks. For complex enterprise web apps with nested object graphs, polymorphic types, date formats, and bidirectional parsing, industry-standard libraries like Jackson ('ObjectMapper') or Gson are mandatory.",explanation:"Jackson is the default JSON engine integrated into Spring Boot.",hint:"Manual JSON is fine for simple zero-dependency scripts; Jackson/Gson is essential for enterprise web services.",level:"Intermediate",codeExample:"ObjectMapper mapper = new ObjectMapper(); String json = mapper.writeValueAsString(obj);"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JSON Libraries"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Manual JSON Serialization vs Enterprise Libraries (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Jackson"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Gson"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Evaluate JSON serialization options: building zero-dependency manual JSON generators in Core Java and comparing with enterprise ObjectMapper paradigms."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ManualJsonVsJacksonConceptsDemo.java",highlightLines:[7,10,20,21,22,23,24,25,26,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"JSON Libraries FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 005_006 Topic 9: Manual JSON vs Jackson",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic9_manual_json_vs_jackson_note.txt"})}),e.jsx(t,{note:"Writing a simple JSON string manually is great practice for understanding how JSON works under the hood! In full-scale enterprise microservices, you will use Jackson's ObjectMapper! — Sukanta Hui"})]})}export{g as default};
