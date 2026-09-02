import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 3: Creating Path Instances: Path.of() (Java 11+) vs Paths.get() (Java 7)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.net.URI;\r
import java.nio.file.Path;\r
import java.nio.file.Paths;\r
\r
public class CreatingPathInstancesFactoryDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: CREATING Path INSTANCES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Modern Java 11+ Static Factory: Path.of(...) [RECOMMENDED]:\r
        Path p1 = Path.of("users", "sukanta", "documents", "syllabus.pdf");\r
        System.out.println(">>> 1. Path.of(varargs) [Java 11+] : " + p1);\r
\r
        // 2. Legacy Java 7 Utility Class: Paths.get(...) [STILL COMMON]:\r
        Path p2 = Paths.get("data", "reports", "annual_tax_2026.csv");\r
        System.out.println(">>> 2. Paths.get(varargs) [Java 7]  : " + p2);\r
\r
        // 3. Creating Path from URI (Uniform Resource Identifier):\r
        URI fileUri = URI.create("file:///C:/coderaccotax/students.json");\r
        Path p3 = Path.of(fileUri);\r
        System.out.println(">>> 3. Path.of(URI)                 : " + p3);\r
\r
        System.out.println("\\n>>> WHY Path.of() IS PREFERRED OVER Paths.get():");\r
        System.out.println("  1. In Java 11, static factory methods were added directly to the 'Path' interface.");\r
        System.out.println("  2. 'Path.of()' eliminates the need for the redundant companion helper class 'Paths'.");\r
        System.out.println("  3. Both methods are 100% equivalent under the hood.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 3: Creating Path Instances\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PATH FACTORIES:\r
   - Modern (Java 11+): 'Path.of("folder", "sub", "file.txt")'.\r
   - Legacy (Java 7)  : 'Paths.get("folder", "sub", "file.txt")'.\r
   - URI Factory      : 'Path.of(URI.create("file:///C:/app/log.txt"))'.\r
   - Prefer 'Path.of()' for all modern Java development.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:`What is the difference between 'Path.of("data.txt")' and 'Paths.get("data.txt")' in modern Java?`,shortAnswer:"'Path.of()' was introduced in Java 11 as a static factory directly on the 'Path' interface, following modern Java API design. 'Paths.get()' was the Java 7 approach requiring the separate utility class 'Paths'. Under the hood, 'Paths.get()' simply delegates to 'Path.of()', making 'Path.of()' the cleaner and preferred modern standard.",explanation:"Mirrors the modernization of List.of(), Set.of(), and Map.of() in Java 9+.",hint:"Path.of() is the modern Java 11+ factory directly on the interface, eliminating the companion Paths class.",level:"Beginner",codeExample:'Path p = Path.of("src", "App.java"); // Modern Java 11+'}];function u(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 3"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Path Factories"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creating Path Instances: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Path.of()"})," (Java 11+) & ",t.jsx("code",{className:"text-sky-400 font-mono",children:"Paths.get()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct filesystem locators: comparing modern Java 11+ ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Path.of()"})," varargs factories with legacy ",t.jsx("code",{className:"text-sky-300 font-mono",children:"Paths.get()"})," and URI resolution."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(a,{fileModule:s,title:"CreatingPathInstancesFactoryDemo.java",highlightLines:[7,10,16,20,24,25]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Path Factories FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:o,title:"Module 005_004 Topic 3: Creating Path Instances",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic3_creating_path_instances_note.txt"})}),t.jsx(r,{note:"Always pass folder names as separate vararg arguments: 'Path.of('data', 'reports', 'tax.csv')'! This guarantees correct operating system slashes on both Windows and Linux! — Sukanta Hui"})]})}export{u as default};
