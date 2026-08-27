import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
 * Topic 6: The Evolution of Metaspace in Java 8 - Goodbye PermGen\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.memory;\r
\r
public class EvolutionOfMetaspaceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: THE EVOLUTION OF METASPACE (JAVA 8) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> PERMGEN (JAVA 7 & EARLIER) VS METASPACE (JAVA 8+):");\r
        System.out.println("  -----------------------------------------------------------------------------");\r
        System.out.println("  CHARACTERISTIC       PERMGEN (Java 7 and older)    METASPACE (Java 8+)");\r
        System.out.println("  -----------------------------------------------------------------------------");\r
        System.out.println("  Memory Location      Inside JVM Heap Boundary       Native OS Process Memory");\r
        System.out.println("  Default Size         Fixed Default (~64MB-82MB)     Unbounded (grows with RAM)");\r
        System.out.println("  Resizing             Rigid, frequent OOM crashes    Dynamic expansion");\r
        System.out.println("  String Constant Pool Stored in PermGen (until Java 7) Moved to Java HEAP");\r
        System.out.println("  Static Variables     Stored in PermGen              Moved to Java HEAP (Class)");\r
        System.out.println("  JVM Flags            -XX:MaxPermSize=128m           -XX:MaxMetaspaceSize=256m");\r
        System.out.println("  -----------------------------------------------------------------------------\\n");\r
\r
        System.out.println(">>> WHY METASPACE WAS A HUGE BREAKTHROUGH:");\r
        System.out.println("  - Prevented OutOfMemoryError crashes caused by dynamic proxy generation (CGLIB, Spring, Hibernate).");\r
        System.out.println("  - Simplified JVM tuning for enterprise microservices and cloud containers.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_004: JVM Memory Model: Heap, Stack, Metaspace & Runtime Areas\r
Topic 6: Evolution of Metaspace in Java 8\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT CHANGED IN JAVA 8:\r
   - PermGen (Permanent Generation) was completely removed from HotSpot JVM.\r
   - Replaced by Metaspace, which lives in native (off-heap) memory.\r
   - String Constant Pool and Static variables were moved to the regular Java Heap.\r
\r
2. WHY PERMGEN WAS REMOVED:\r
   - PermGen had a contiguous, fixed size that was notoriously difficult to size properly.\r
   - Web application redeployments frequently exhausted PermGen with classloader leaks.\r
   - Metaspace allocates natively, expanding automatically unless capped.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Where were the String Constant Pool and static class variables relocated when PermGen was removed?",shortAnswer:"They were relocated directly into the main Java Heap Area, allowing unreferenced strings and static objects to be garbage collected normally by standard Young/Old GC cycles.",explanation:"String pool moved in Java 7; static variables moved in Java 8.",hint:"Moved to the main Java Heap Area.",level:"Intermediate",codeExample:"String Pool & Statics -> Java Heap; Class Bytecode -> Metaspace"},{question:"What happens if a Java application running on Java 8+ does not specify -XX:MaxMetaspaceSize?",shortAnswer:"Metaspace has no upper limit by default and can dynamically expand until all available physical RAM and virtual swap memory on the host operating system are exhausted.",explanation:"Setting -XX:MaxMetaspaceSize is recommended in containerized environments (Docker/K8s).",hint:"It can expand indefinitely up to available host OS RAM.",level:"Intermediate",codeExample:"-XX:MaxMetaspaceSize=512m prevents host memory starvation."}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Memory Model"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Evolution of Metaspace: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Eliminating PermGen in Java 8"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"From fixed PermGen to dynamic Metaspace: why Java 8 removed Permanent Generation, moving class metadata and interned strings to native memory and heap."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"EvolutionOfMetaspaceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Memory Areas FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_004 Topic 6: Evolution of Metaspace in Java 8",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_004_topic6_evolution_of_metaspace_note.txt"})}),e.jsx(r,{note:"In Java 7, java.lang.OutOfMemoryError: PermGen space was every developer's nightmare! Java 8 completely removed PermGen and introduced Metaspace, allowing class metadata to grow dynamically with OS RAM! — Sukanta Hui"})]})}export{v as default};
