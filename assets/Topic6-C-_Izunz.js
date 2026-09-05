import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 6: Linking Step 3 - Resolution of Symbolic References\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class LinkingResolutionDemo {\r
\r
    public static class StudentService {\r
        public void printCenter() {\r
            System.out.println("Center: Barrackpore Main Campus");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: LINKING STEP 3 - RESOLUTION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // When javac compiles this line, it writes a symbolic reference in the Constant Pool:\r
        // Symbolic Reference: Methodref #com/coderaccotax/.../StudentService.printCenter()V\r
        StudentService service = new StudentService();\r
\r
        // During Resolution: The JVM locates StudentService in Metaspace and replaces\r
        // the symbolic string with a direct memory offset/pointer in the vtable!\r
        service.printCenter();\r
\r
        System.out.println("\\n>>> SYMBOLIC VS DIRECT REFERENCES:");\r
        System.out.println("  - Symbolic Reference : Stored in bytecode constant pool as text names/descriptors.");\r
        System.out.println("  - Direct Reference   : Pointer to Metaspace memory, vtable offset, or field memory offset.");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 6: Linking Step 3 (Resolution)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS RESOLUTION:\r
   - The process of replacing symbolic references in the Runtime Constant Pool\r
     with direct pointers to memory structures (classes, interfaces, fields, methods).\r
\r
2. TIMING OF RESOLUTION:\r
   - Eager Resolution : Performed immediately when the class is linked.\r
   - Lazy Resolution  : Deferred until the instruction referencing the symbol is first executed (default in most HotSpot implementations).\r
\r
3. COMMON RESOLUTION ERRORS:\r
   - 'NoSuchMethodError', 'NoSuchFieldError', 'NoClassDefFoundError', 'IllegalAccessError'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"What is the difference between a symbolic reference and a direct reference?",shortAnswer:"A symbolic reference is a string-based name and type descriptor stored in the bytecode constant pool, while a direct reference is an actual memory address, virtual table (vtable) index, or field offset pointing to the target entity in JVM memory.",explanation:"Resolution converts the former into the latter.",hint:"Symbolic is text/descriptor in constant pool; direct is an actual memory pointer.",level:"Intermediate",codeExample:"Symbolic: #4 Methodref → Direct: Pointer to method table offset 0x7FFF"},{question:"What exception occurs during Resolution if a method referenced in bytecode does not exist in the target class?",shortAnswer:"java.lang.NoSuchMethodError (an unchecked IncompatibleClassChangeError thrown when binary dependencies become out of sync).",explanation:"Common when deploying incompatible JAR versions to production.",hint:"NoSuchMethodError",level:"Beginner",codeExample:"throws java.lang.NoSuchMethodError"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Linking Step 3: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Resolution & Symbolic Pointers"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Replacing names with addresses: resolving constant pool symbolic references (class, method, field names) to direct memory addresses."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"LinkingResolutionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"JVM Architecture & ClassLoaders FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 010_003 Topic 6: Linking: Resolution",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic6_linking_resolution_note.txt"})}),e.jsx(o,{note:"Inside a .class file, method calls are stored as symbolic strings like '#5 Methodref java/lang/String.length:()I'! In Resolution, the JVM replaces those text strings with direct memory pointers to the actual executable function in memory! — Sukanta Hui"})]})}export{f as default};
