import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 009_004: Stream API Pipeline & Intermediate Operations\r
 * Topic 15: distinct() - Deduplicating Elements using equals & hashCode\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.streams;\r
\r
import java.util.List;\r
import java.util.Objects;\r
\r
public class DistinctOperationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: DISTINCT() DEDUPLICATION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Deduplicating Primitive Wrappers / Strings (equals/hashCode already built-in)\r
        List<String> centerNames = List.of(\r
            "Barrackpore", "Naihati", "Barrackpore", "Shyamnagar", "Naihati", "Ichapur"\r
        );\r
        System.out.println("1. Original Centers: " + centerNames);\r
        List<String> uniqueCenters = centerNames.stream()\r
            .distinct()\r
            .toList();\r
        System.out.println("   Deduplicated via distinct(): " + uniqueCenters);\r
\r
        // 2. Custom Object Deduplication (Record automatically provides equals & hashCode)\r
        List<CourseEnrollment> enrollments = List.of(\r
            new CourseEnrollment("Swadeep Paul", "Java Core"),\r
            new CourseEnrollment("Tuhina Das", "Spring Boot"),\r
            new CourseEnrollment("Swadeep Paul", "Java Core"), // Duplicate\r
            new CourseEnrollment("Abhronila Das", "Java Core")\r
        );\r
\r
        System.out.println("\\n2. Deduplicating Custom Objects (CourseEnrollment):");\r
        List<CourseEnrollment> uniqueEnrollments = enrollments.stream()\r
            .distinct()\r
            .toList();\r
        uniqueEnrollments.forEach(e -> System.out.println("   - " + e));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record CourseEnrollment(String studentName, String courseTitle) {}\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_004: Stream API Pipeline & Intermediate Operations\r
Topic 15: distinct() Deduplication\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DISTINCT METHOD CONTRACT:\r
   - Signature: 'Stream<T> distinct()'.\r
   - Returns a stream consisting of the distinct elements of this stream.\r
   - Intermediate & Stateful operation.\r
   - For ordered streams, preserves encounter order (the first occurrence is retained).\r
\r
2. EQUALS & HASHCODE PREREQUISITE:\r
   - For custom classes, 'Object.equals(Object)' and 'Object.hashCode()' MUST be overridden correctly.\r
   - Using Java 'record' automatically provides correct value-based equals and hashCode implementations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"How does distinct() determine whether two objects are duplicates?",shortAnswer:"distinct() uses Object.equals(Object) and Object.hashCode() to determine uniqueness, keeping an internal hash set of previously encountered elements.",explanation:"If equals and hashCode are not overridden, standard memory reference comparison (==) is used.",hint:"Relies on the hashCode() and equals() contract.",level:"Beginner",codeExample:"record User(int id, String name) {} // Records automatically support distinct() correctly!"},{question:"Is distinct() a stateless or stateful intermediate operation?",shortAnswer:"distinct() is a stateful operation because it must maintain an internal HashSet buffer of all previously observed elements to know whether any new element is a duplicate.",explanation:"In parallel streams, distinct() introduces coordination overhead across threads.",hint:"Stateful: it remembers all previously seen elements.",level:"Intermediate",codeExample:"stream.distinct() // Buffers seen elements in memory"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_004 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream API Pipelines"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"distinct()"}),": Deduplicating Elements via hashCode & equals"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Eliminating duplicate stream elements: object identity vs value equality, custom object equals/hashCode contracts, and memory footprint."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"DistinctOperationDemo.java",highlightLines:[18,25,33,42]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Stream API Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_004 Topic 15: distinct() Operation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_004_topic15_distinct_operation_note.txt"})}),e.jsx(a,{note:"For custom classes, distinct() relies entirely on equals() and hashCode()! If you forget to override them properly (or fail to use a Java Record), distinct() will check object memory identity instead of business values! — Sukanta Hui"})]})}export{b as default};
