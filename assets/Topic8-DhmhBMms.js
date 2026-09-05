import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 8: Overview of JSON (JavaScript Object Notation) Format Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
public class JsonFormatStructureOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: JSON FORMAT STRUCTURE OVERVIEW - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String sampleJson =\r
                "{\\n" +\r
                "  "academy": "Barrackpore Central Academy",\\n" +\r
                "  "active": true,\\n" +\r
                "  "established": 2018,\\n" +\r
                "  "rating": 4.95,\\n" +\r
                "  "leadInstructor": {\\n" +\r
                "    "name": "Sukanta Hui",\\n" +\r
                "    "role": "Chief Architect",\\n" +\r
                "    "specializations": ["Java Core", "Spring Boot", "Microservices"]\\n" +\r
                "  },\\n" +\r
                "  "students": [\\n" +\r
                "    { "id": 101, "name": "Swadeep Paul", "status": "PROMOTED" },\\n" +\r
                "    { "id": 102, "name": "Tuhina Das", "status": "PROMOTED" },\\n" +\r
                "    { "id": 103, "name": "Abhronila Das", "status": "DISTINCTION" }\\n" +\r
                "  ]\\n" +\r
                "}";\r
\r
        System.out.println(">>> Sample Enterprise JSON Structure:");\r
        System.out.println(sampleJson);\r
\r
        System.out.println("\\n>>> THE 6 PRIMITIVE & STRUCTURAL JSON TYPES (RFC 8259):");\r
        System.out.println("  1. Object  : Unordered key-value collection wrapped in curly braces '{ }'.");\r
        System.out.println("  2. Array   : Ordered list of values wrapped in square brackets '[ ]'.");\r
        System.out.println("  3. String  : Text enclosed in double quotes '"..."' with backslash escapes.");\r
        System.out.println("  4. Number  : Integer or floating point (e.g. 2018, 4.95).");\r
        System.out.println("  5. Boolean : Literal 'true' or 'false'.");\r
        System.out.println("  6. Null    : Literal 'null'.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 8: JSON Format Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. JSON DATA MODEL (RFC 8259):\r
   - Objects: '{ "key": value }'.\r
   - Arrays: '[ item1, item2 ]'.\r
   - Primitives: Strings (double-quoted), Numbers, Booleans, Null.\r
   - Strictly requires double quotes for keys and string values.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What are the 6 primitive and composite data types supported by the JSON specification (RFC 8259)?",shortAnswer:"1. 'Object' (key-value map in '{ }'). 2. 'Array' (ordered list in '[ ]'). 3. 'String' (double-quoted text). 4. 'Number' (integers and floats). 5. 'Boolean' (true or false). 6. 'Null' (null literal).",explanation:"Universal data exchange format for modern REST APIs and cloud microservices.",hint:"Object, Array, String, Number, Boolean, and Null.",level:"Beginner",codeExample:'{"name": "Swadeep", "score": 95, "active": true, "skills": ["Java"]}'}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JSON Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Overview of JSON Format Structure: Objects, Arrays & Primitives"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master web data interchange: exploring the 6 core JSON data types conforming to RFC 8259 and mapping JSON trees to Java domain models."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"JsonFormatStructureOverviewDemo.java",highlightLines:[7,10,15,16,20,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JSON Format FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 005_006 Topic 8: JSON Format Structure",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic8_json_format_structure_note.txt"})}),e.jsx(a,{note:"JSON is the universal language of modern web and mobile apps! Knowing how to map JSON objects and arrays into Java records or classes is a vital skill for every backend engineer! — Sukanta Hui"})]})}export{b as default};
