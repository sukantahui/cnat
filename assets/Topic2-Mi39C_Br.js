import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 2: The java.nio.file.Path Interface: Modern Immutable Filesystem Locator\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.File;\r
import java.nio.file.Path;\r
\r
public class PathInterfaceOverviewDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: java.nio.file.Path INTERFACE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Path is an Interface, not a Class:\r
        Path projectPath = Path.of("src", "main", "java", "com", "coderaccotax", "App.java");\r
\r
        System.out.println(">>> 1. Inspecting Path Interface Instance:");\r
        System.out.println("  Path String Representation : " + projectPath);\r
        System.out.println("  Concrete Runtime Class     : " + projectPath.getClass().getName());\r
        System.out.println("  Is Absolute?               : " + projectPath.isAbsolute());\r
\r
        // 2. Interoperability with Legacy java.io.File:\r
        System.out.println("\\n>>> 2. Bidirectional Conversion between Path and File:");\r
        File legacyFile = projectPath.toFile(); // Path -> File\r
        System.out.println("  Path -> File : " + legacyFile.getPath());\r
\r
        Path backToPath = legacyFile.toPath();  // File -> Path\r
        System.out.println("  File -> Path : " + backToPath);\r
\r
        System.out.println("\\n>>> KEY PROPERTIES OF Path:");\r
        System.out.println("  1. Path is completely IMMUTABLE and Thread-Safe (like String).");\r
        System.out.println("  2. Path does NOT verify or require that the target file actually exists on physical disk.");\r
        System.out.println("  3. It represents a purely conceptual hierarchical location in a FileSystem.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 2: Path Interface Overview\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PATH INTERFACE CONTRACT:\r
   - 'Path': Immutable and thread-safe locator.\r
   - Converting to legacy File: 'path.toFile()'.\r
   - Converting from legacy File: 'file.toPath()'.\r
   - Zero disk I/O on creation; purely represents a locator.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Is 'java.nio.file.Path' an interface or a class, and does instantiating a Path perform physical disk I/O?",shortAnswer:"'Path' is an INTERFACE (implemented by platform-specific classes like WindowsPath or UnixPath). Creating a Path object does NOT perform any physical disk I/O or check if the file exists; it is purely an immutable, in-memory representation of a hierarchical filesystem location.",explanation:"Physical disk operations are delegated exclusively to the java.nio.file.Files class.",hint:"Path is an immutable interface and creating one does not touch the physical disk.",level:"Beginner",codeExample:'Path p = Path.of("non_existent.txt"); // Instant, no I/O performed'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Path Interface"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.nio.file.Path"})," Interface: Modern Immutable Filesystem Locator"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand the foundational locator abstraction: exploring the immutable ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Path"})," interface and bridging legacy ",e.jsx("code",{className:"text-sky-300 font-mono",children:"toFile()"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"toPath()"})," interoperability."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"PathInterfaceOverviewDemo.java",highlightLines:[7,10,16,17,24,27]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Path Interface FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 005_004 Topic 2: Path Interface Overview",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic2_path_interface_note.txt"})}),e.jsx(r,{note:"If an older library requires 'java.io.File', don't abandon Path! Just call 'path.toFile()' at the boundary, and when receiving a File, immediately convert it using 'file.toPath()'! — Sukanta Hui"})]})}export{f as default};
