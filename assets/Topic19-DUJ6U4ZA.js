import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 19: Stateless vs Stateful Operations: Enterprise Architecture & Performance Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.Comparator;\r
import java.util.List;\r
import java.util.stream.Collectors;\r
\r
public class StreamPerformanceArchitectureCapstone {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 19: STREAM PIPELINE PERFORMANCE CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<EnterpriseStudent> students = List.of(\r
            new EnterpriseStudent(1, "Swadeep Paul", "Barrackpore", "Java Core", 94.0),\r
            new EnterpriseStudent(2, "Tuhina Das", "Naihati", "Spring Boot", 96.5),\r
            new EnterpriseStudent(3, "Abhronila Das", "Shyamnagar", "Java Core", 88.0),\r
            new EnterpriseStudent(4, "Debangshu Mukherjee", "Ichapur", "Microservices", 91.0),\r
            new EnterpriseStudent(5, "Priya Sharma", "Barrackpore", "Java Core", 79.5),\r
            new EnterpriseStudent(6, "Anish Dey", "Titagarh", "Java Core", 85.0),\r
            new EnterpriseStudent(7, "Swadeep Paul", "Barrackpore", "Java Core", 94.0) // Duplicate\r
        );\r
\r
        System.out.println(">>> PRODUCTION PIPELINE OPTIMIZATION PATTERN:");\r
        System.out.println("  1. Filter early (stateless filter reduces N before expensive steps)");\r
        System.out.println("  2. Deduplicate (stateful distinct on reduced subset)");\r
        System.out.println("  3. Map to DTO (stateless 1-to-1 transformation)");\r
        System.out.println("  4. Sort (stateful sorted on smallest possible subset)");\r
        System.out.println("  5. Paginate (stateful limit/skip)\\n");\r
\r
        List<StudentDTO> topPerformers = students.stream()\r
            // Step 1: Filter early (reduce volume)\r
            .filter(s -> "Java Core".equals(s.course()) && s.score() >= 80.0)\r
            // Step 2: Deduplicate\r
            .distinct()\r
            // Step 3: Map to lightweight DTO\r
            .map(s -> new StudentDTO(s.name(), s.center(), s.score()))\r
            // Step 4: Sort by score descending\r
            .sorted(Comparator.comparingDouble(StudentDTO::score).reversed())\r
            // Step 5: Paginate top 3\r
            .limit(3)\r
            // Step 6: Collect\r
            .collect(Collectors.toList());\r
\r
        System.out.println(">>> FINAL OPTIMIZED RESULT (Top 3 Java Core Distinction Students):");\r
        topPerformers.forEach(dto -> System.out.println("   🏆 " + dto));\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 009_004 MASTERED: 20 TOPICS COMPLETE & ENTERPRISE READY!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    record EnterpriseStudent(int id, String name, String center, String course, double score) {}\r
    record StudentDTO(String name, String center, double score) {\r
        @Override\r
        public String toString() {\r
            return name + " (" + center + ") - " + score + "%";\r
        }\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 19: Stateless vs Stateful Performance Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PIPELINE OPTIMIZATION GOLDEN RULES:\r
   RULE 1: FILTER EARLY\r
   - Place '.filter()' as close to the Source as possible to minimize downstream computations.\r
\r
   RULE 2: MAP AFTER FILTER\r
   - Avoid executing heavy transformations (DTO creation, String formatting) on elements\r
     that will ultimately be discarded by downstream filters.\r
\r
   RULE 3: MINIMIZE STATEFUL BARRIERS\r
   - Operations like 'sorted()' and 'distinct()' act as pipeline barriers that must buffer\r
     elements before continuing. Keep the data volume entering stateful operations small.\r
\r
   RULE 4: PREFER PRIMITIVE STREAMS FOR NUMERICS\r
   - Use 'mapToInt()', 'IntStream' instead of 'Stream<Integer>' to avoid millions of heap wrapper allocations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why should filter() always precede map() and sorted() in a production stream pipeline?",shortAnswer:"Placing filter() early eliminates irrelevant elements upfront, saving CPU cycles from performing unnecessary mapping transformations and reducing the buffer size required for expensive stateful sorting operations.",explanation:"Sorting 1,000 filtered items is orders of magnitude faster and consumes much less memory than sorting 1,000,000 unfiltered items.",hint:"Early filtering drastically reduces downstream processing and memory buffers.",level:"Intermediate",codeExample:"// Good: filter then map\\nstream.filter(s → s.isActive()).map(s → heavyDtoTransform(s))"},{question:"What is a 'Pipeline Barrier' in stream execution architecture?",shortAnswer:"A pipeline barrier occurs at a stateful operation (like sorted() or distinct()) that cannot emit its first output element until it has processed and buffered all upstream input elements.",explanation:"Pipeline barriers break vertical loop fusion and require intermediate memory buffers.",hint:"A point in the pipeline where streaming pauses until all upstream elements are buffered.",level:"Advanced",codeExample:"stream.filter(...).sorted().map(...) // sorted() forms a barrier where all items must be buffered before map begins"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 19"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Stateless vs Stateful Operations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Performance & Architecture"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Comprehensive architectural synthesis: analyzing pipeline performance, memory allocation, multi-core scaling bottlenecks, and enterprise best practices."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"StreamPerformanceArchitectureCapstone.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 009_004 Topic 19: Performance & Architecture Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic19_performance_architecture_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on mastering Stream Pipelines! Always remember the golden architectural rule: keep intermediate operations stateless whenever possible, and place filter() before map() and sorted() to minimize the volume of data travelling down your pipeline! — Sukanta Hui"})]})}export{h as default};
