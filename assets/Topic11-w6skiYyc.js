import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 11: Maven Project Management - Anatomy of pom.xml & Coordinates\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class MavenPomXmlAnatomyDependenciesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: MAVEN POM.XML ANATOMY & GAV COORDINATES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. G-A-V COORDINATES (Project Object Model):");\r
        System.out.println("  - groupId    : com.coderaccotax (Domain reverse namespace)");\r
        System.out.println("  - artifactId : java-core-tutorial (Project module name)");\r
        System.out.println("  - version    : 1.0.0-SNAPSHOT (Semantic versioning)\\n");\r
\r
        System.out.println(">>> 2. DEPENDENCY SCOPES IN pom.xml:");\r
        System.out.println("  - compile (default) : Available on classpath for compile, test, and runtime.");\r
        System.out.println("  - test              : Available ONLY for test compilation and execution (e.g. JUnit, Mockito).");\r
        System.out.println("  - provided          : Needed for compilation, provided by runtime container (e.g. Servlet API).");\r
        System.out.println("  - runtime           : Needed at runtime only, not compile time (e.g. JDBC Drivers).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 11: Maven pom.xml Anatomy\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. POM.XML STRUCTURE:\r
   - '<groupId>', '<artifactId>', '<version>' (GAV).\r
   - '<dependencies>' with '<scope>test</scope>'.\r
   - '<build><plugins>' (maven-compiler-plugin, maven-surefire-plugin).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the consequence of specifying <scope>test</scope> for a dependency in pom.xml?",shortAnswer:"The dependency is placed on the classpath only during test compilation and execution, and is strictly excluded when packaging the production JAR/WAR artifact, keeping production binaries lightweight.",explanation:"Maven dependency scope isolation.",hint:"Excluded from the final production package, only available during test phase.",level:"Beginner",codeExample:"<dependency><groupId>org.junit.jupiter</groupId><scope>test</scope></dependency>"},{question:"What does the -SNAPSHOT suffix indicate in a Maven version (e.g., 1.0.0-SNAPSHOT)?",shortAnswer:"It indicates an active in-development, unreleased version. Maven will check the remote repository for updated snapshots on every build instead of caching it permanently like a release version.",explanation:"Snapshot development builds in Maven.",hint:"Indicates an active development build that can be updated continuously.",level:"Intermediate",codeExample:"<version>1.0.0-SNAPSHOT</version>"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Maven Anatomy: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"pom.xml, Coordinates & Dependencies"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build automation & dependency management: dissecting the structure of pom.xml (groupId, artifactId, version, scopes, and plugin declarations)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"MavenPomXmlAnatomyDependenciesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Testing & Maven FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 012_006 Topic 11: Maven pom.xml Anatomy & Dependencies",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic11_maven_pom_xml_anatomy_dependencies_note.txt"})}),e.jsx(a,{note:"Maven coordinates (G-A-V: groupId, artifactId, version) uniquely identify every Java library in Maven Central repository! Note the scope tag: test scope dependencies like junit-jupiter are excluded from production JAR builds! — Sukanta Hui"})]})}export{y as default};
