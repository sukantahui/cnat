import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 2: Phase 1 - Loading: Bytecode Ingestion & Metaspace Representation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
import java.io.InputStream;\r
\r
public class Phase1ClassLoadingDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: PHASE 1 - CLASS LOADING - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Inspecting raw bytecode ingestion of a compiled class file\r
        String resourcePath = Phase1ClassLoadingDemo.class.getName().replace('.', '/') + ".class";\r
        System.out.println(">>> 1. Ingesting raw bytecode stream for: " + resourcePath);\r
\r
        try (InputStream is = Phase1ClassLoadingDemo.class.getClassLoader().getResourceAsStream(resourcePath)) {\r
            if (is != null) {\r
                byte[] header = new byte[4];\r
                is.read(header);\r
\r
                // Java .class files ALWAYS start with the famous 4-byte magic number: 0xCAFEBABE!\r
                String hexMagic = String.format("%02X%02X%02X%02X", header[0], header[1], header[2], header[3]);\r
                System.out.println("  - First 4 Bytes (Magic Number) : 0x" + hexMagic);\r
                System.out.println("  - Is Valid Java Classfile?     : " + "CAFEBABE".equalsIgnoreCase(hexMagic) + " (0xCAFEBABE Verified!)");\r
            }\r
        }\r
\r
        System.out.println("\\n>>> WHAT HAPPENS IN METASPACE DURING PHASE 1:");\r
        System.out.println("  1. Binary stream is parsed into JVM internal Klass structures.");\r
        System.out.println("  2. 'java.lang.Class' mirror object is constructed on the Java heap/Metaspace.");\r
        System.out.println("  3. Method bytecode, constant pool tables, and field descriptors are mapped into Metaspace.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 2: Phase 1 (Class Loading)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE LOADING PHASE RESPONSIBILITIES:\r
   - Locates and ingests the binary representation of a class (e.g. from local filesystem,\r
     JAR archive, HTTP URL, or dynamic generator).\r
   - Validates the 4-byte header: '0xCAFEBABE' (Java Class File Magic Number).\r
   - Constructs the runtime metadata structures in Metaspace (Klass metadata).\r
   - Creates the corresponding 'java.lang.Class' instance.\r
\r
2. METASPACE MEMORY (Java 8+):\r
   - Replaced PermGen in Java 8.\r
   - Allocated in native process memory (off-heap), growing dynamically based on available OS RAM.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the 4-byte magic number present at the beginning of every valid compiled Java .class file?",shortAnswer:"0xCAFEBABE, used by the JVM classloader to quickly identify and verify that a file is a valid compiled Java bytecode file.",explanation:"Chosen by James Gosling in the early days of Oak/Java.",hint:"0xCAFEBABE",level:"Beginner",codeExample:"Magic bytes: 0xCA 0xFE 0xBA 0xBE"},{question:"Where is class metadata stored in the JVM starting with Java 8?",shortAnswer:"In Metaspace, which is allocated out of native (off-heap) process memory, replacing the older PermGen (Permanent Generation) from Java 7 and earlier.",explanation:"Eliminated the frequent 'java.lang.OutOfMemoryError: PermGen space' errors.",hint:"Metaspace (native memory).",level:"Beginner",codeExample:"JVM Option: -XX:MaxMetaspaceSize=512m"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Phase 1: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Loading"}),": Bytecode Ingestion & Metaspace Representation"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"From bytes to class metadata: how the JVM reads .class stream bytes from JARs/disks and instantiates the singleton java.lang.Class in Metaspace."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:n,title:"Phase1ClassLoadingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Architecture & ClassLoaders FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:o,title:"Module 010_003 Topic 2: Phase 1: Class Loading",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic2_phase1_class_loading_note.txt"})}),e.jsx(r,{note:"During Loading, the ClassLoader reads the byte array from the .class file, validates the 0xCAFEBABE magic number, and constructs the java.lang.Class descriptor in native Metaspace memory! — Sukanta Hui"})]})}export{g as default};
