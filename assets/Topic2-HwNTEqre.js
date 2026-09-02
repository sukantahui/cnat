import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_006: The Collectors Class & Downstream Reducers\r
 * Topic 2: Collectors.toMap() - Key-Value Mapping & Key Collision Resolution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collectors;\r
\r
import java.util.LinkedHashMap;\r
import java.util.List;\r
import java.util.Map;\r
import java.util.TreeMap;\r
import java.util.stream.Collectors;\r
\r
public class CollectorsToMapDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: COLLECTORS.TOMAP() & KEY MERGE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentCourseScore> records = List.of(\r
            new StudentCourseScore(101, "Swadeep Paul", "Java Core", 92.0),\r
            new StudentCourseScore(102, "Tuhina Das", "Spring Boot", 95.0),\r
            new StudentCourseScore(103, "Abhronila Das", "Java Core", 88.0),\r
            new StudentCourseScore(101, "Swadeep Paul", "Advanced Microservices", 96.0) // Duplicate Key ID 101!\r
        );\r
\r
        // 1. Resolving Duplicate Key Collisions with Merge Function: (existingVal, newVal) -> newVal\r
        System.out.println(">>> 1. toMap with Merge Function (Resolving Duplicate ID 101):");\r
        Map<Integer, Double> studentScores = records.stream()\r
            .collect(Collectors.toMap(\r
                StudentCourseScore::id,                             // Key Mapper\r
                StudentCourseScore::score,                          // Value Mapper\r
                (existingScore, newScore) -> Math.max(existingScore, newScore) // Merge: keep highest score!\r
            ));\r
        System.out.println("   Result Map (Highest score for ID 101): " + studentScores);\r
\r
        // 2. toMap with Custom Map Supplier (TreeMap for sorted keys):\r
        System.out.println("\\n>>> 2. toMap with TreeMap Supplier (Sorted by Key):");\r
        TreeMap<Integer, String> sortedNameMap = records.stream()\r
            .collect(Collectors.toMap(\r
                StudentCourseScore::id,\r
                StudentCourseScore::name,\r
                (oldName, newName) -> oldName,                     // Keep existing on tie\r
                TreeMap::new                                       // Custom Map Factory\r
            ));\r
        System.out.println("   TreeMap Result: " + sortedNameMap);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentCourseScore(int id, String name, String course, double score) {}\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_006: The Collectors Class & Downstream Reducers\r
Topic 2: Collectors.toMap()\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE THREE OVERLOADS OF COLLECTORS.TOMAP():\r
   1. 'toMap(Function keyMapper, Function valueMapper)'\r
      - Throws 'IllegalStateException: Duplicate key' if duplicate keys are encountered!\r
   2. 'toMap(Function keyMapper, Function valueMapper, BinaryOperator mergeFunction)'\r
      - Resolves duplicate keys cleanly (e.g. keep first, keep latest, merge values, sum values).\r
   3. 'toMap(Function keyMapper, Function valueMapper, BinaryOperator mergeFunction, Supplier mapSupplier)'\r
      - Directs output into specific Map implementations (e.g. 'TreeMap::new', 'LinkedHashMap::new', 'ConcurrentHashMap::new').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What happens if you use the 2-argument Collectors.toMap() on a stream that produces duplicate keys?",shortAnswer:"An IllegalStateException is thrown at runtime stating 'Duplicate key ...', halting execution.",explanation:"To handle duplicate keys safely, always use the 3-argument version with a merge function.",hint:"Throws IllegalStateException on duplicate keys.",level:"Beginner",codeExample:"list.stream().collect(Collectors.toMap(User::getId, User::getName, (u1, u2) → u1)); // Safe merge!"},{question:"How do you ensure the Map returned by Collectors.toMap() preserves insertion encounter order?",shortAnswer:"Pass LinkedHashMap::new as the 4th argument (the map factory supplier) to Collectors.toMap().",explanation:"By default, toMap produces a standard HashMap which does not guarantee order.",hint:"Pass LinkedHashMap::new as the mapSupplier argument.",level:"Intermediate",codeExample:"stream.collect(Collectors.toMap(k, v, merge, LinkedHashMap::new));"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Collectors Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Collecting to Map: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Collectors.toMap()"})," & Key Collision Merge Functions"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Transforming stream elements into Key-Value pairs: handling duplicate keys with merge functions and specifying custom Map suppliers."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CollectorsToMapDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Collectors Framework FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_006 Topic 2: Collectors.toMap() & Collisions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_006_topic2_collectors_tomap_collisions_note.txt"})}),e.jsx(a,{note:"The #1 bug beginners write with Collectors.toMap() is forgetting the merge function! If two objects have the same key, toMap(k, v) crashes with an IllegalStateException! Always provide a merge function like (oldVal, newVal) → newVal to handle duplicates! — Sukanta Hui"})]})}export{g as default};
