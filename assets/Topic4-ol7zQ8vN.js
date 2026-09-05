import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 4: Path Manipulation Methods: normalize(), resolve(), relativize(), toAbsolutePath()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.nio.file.Path;\r
\r
public class PathManipulationMethodsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: Path MANIPULATION METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path rawPath = Path.of("projects", "accotax", "..", "barrackpore", "students", "roster.csv");\r
\r
        // 1. Basic Path Components:\r
        System.out.println(">>> 1. Path Components:");\r
        System.out.println("  Raw Path        : " + rawPath);\r
        System.out.println("  getFileName()   : " + rawPath.getFileName());\r
        System.out.println("  getParent()     : " + rawPath.getParent());\r
        System.out.println("  getNameCount()  : " + rawPath.getNameCount());\r
        System.out.println("  getName(0)      : " + rawPath.getName(0));\r
\r
        // 2. normalize() -> Cleans redundant elements like '.' and '..':\r
        Path cleanPath = rawPath.normalize();\r
        System.out.println("\\n>>> 2. normalize() (Eliminates '..' and '.'):");\r
        System.out.println("  Cleaned Path    : " + cleanPath);\r
\r
        // 3. toAbsolutePath() -> Converts relative path to full OS absolute path:\r
        System.out.println("\\n>>> 3. toAbsolutePath():");\r
        System.out.println("  Absolute Path   : " + cleanPath.toAbsolutePath());\r
\r
        // 4. resolve() -> Joining paths (like path concatenation):\r
        Path baseDir = Path.of("var", "data");\r
        Path childFile = baseDir.resolve("reports/audit.json");\r
        System.out.println("\\n>>> 4. resolve() (Joining paths):");\r
        System.out.println("  base.resolve()  : " + childFile);\r
\r
        // 5. relativize() -> Finding relative navigation between two paths:\r
        Path p1 = Path.of("var", "data", "reports");\r
        Path p2 = Path.of("var", "logs", "app.log");\r
        Path relativeNav = p1.relativize(p2);\r
        System.out.println("\\n>>> 5. relativize() (How to get from p1 to p2):");\r
        System.out.println("  p1.relativize(p2): " + relativeNav);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 4: Path Manipulation Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE PATH METHODS:\r
   - 'getFileName()'     : Target file or directory name.\r
   - 'getParent()'        : Parent directory path.\r
   - 'normalize()'        : Removes '.' and '..' redundant elements.\r
   - 'toAbsolutePath()'   : Converts to fully qualified filesystem path.\r
   - 'resolve(child)'     : Concatenates child path to base.\r
   - 'relativize(target)' : Computes relative path from this to target.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the difference between 'Path.resolve()' and 'Path.relativize()' in Java NIO.2?",shortAnswer:"'Path.resolve(other)' joins or concatenates a child path onto a base directory path (equivalent to combining paths with a separator). 'Path.relativize(other)' computes the relative navigation path required to move from the base path to the target path (using '..' parent traversals).",explanation:"Both operations are purely mathematical string manipulations and execute without disk I/O.",hint:"resolve() combines paths together; relativize() calculates the navigation steps between two paths.",level:"Intermediate",codeExample:'Path base = Path.of("a"); Path full = base.resolve("b/c.txt"); // a/b/c.txt'}];function v(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Path Arithmetic"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Path Manipulation Methods: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"normalize()"}),", ",t.jsx("code",{className:"text-sky-400 font-mono",children:"resolve()"})," & ",t.jsx("code",{className:"text-purple-400 font-mono",children:"relativize()"})]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master pure path arithmetic: cleaning redundant dot-dot references with ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"normalize()"}),", concatenating child locators with ",t.jsx("code",{className:"text-sky-300 font-mono",children:"resolve()"}),", and calculating relative navigation."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"PathManipulationMethodsDemo.java",highlightLines:[7,10,15,16,21,22,27,32,33,39]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Path Manipulation FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 005_004 Topic 4: Path Manipulation Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic4_path_manipulation_methods_note.txt"})}),t.jsx(r,{note:"Never concatenate path strings using '+' or slashes! Always use 'baseDir.resolve('subfolder/file.txt')'! It guarantees correct slash formatting on every operating system! — Sukanta Hui"})]})}export{v as default};
