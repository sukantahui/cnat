import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 1: Standard Built-in Annotations (@Override, @Deprecated, @SuppressWarnings)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class StandardBuiltinAnnotationsDemo {\r
\r
    public interface StudentEvaluator {\r
        void evaluate(String studentName);\r
    }\r
\r
    public static class AcademyManager implements StudentEvaluator {\r
\r
        // 1. @Override: Compile-time check verifying method exists in interface/parent\r
        @Override\r
        public void evaluate(String studentName) {\r
            System.out.println("Evaluating student: " + studentName + " at Barrackpore Center.");\r
        }\r
\r
        // 2. @Deprecated (since, forRemoval) [Java 9+ Enhanced]:\r
        @Deprecated(since = "9.0", forRemoval = true)\r
        public void legacyOfflineRegistration(String studentName) {\r
            System.out.println("⚠️ [DEPRECATED METHOD]: Registering offline (Will be removed in future release!)");\r
        }\r
\r
        // 3. @SuppressWarnings: Suppresses specific compiler warning categories\r
        @SuppressWarnings({"rawtypes", "unchecked"})\r
        public void processLegacyList() {\r
            List legacyRawList = new ArrayList(); // Raw type warning suppressed!\r
            legacyRawList.add("Swadeep Paul");\r
            legacyRawList.add(101);\r
            System.out.println("Processed raw list without compiler warnings: " + legacyRawList);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: STANDARD BUILT-IN ANNOTATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyManager manager = new AcademyManager();\r
        manager.evaluate("Swadeep Paul");\r
        manager.legacyOfflineRegistration("Tuhina Das");\r
        manager.processLegacyList();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 1: Standard Built-in Annotations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE BUILT-IN ANNOTATIONS IN 'java.lang':\r
   - '@Override'\r
     * Informs compiler that method must override superclass or interface method.\r
     * Prevents subtle typo bugs (e.g. 'hashcode()' vs 'hashCode()').\r
   - '@Deprecated(since="17", forRemoval=true)'\r
     * Signals element is outdated. 'forRemoval=true' indicates imminent deletion.\r
   - '@SuppressWarnings({"unchecked", "deprecation", "rawtypes"})'\r
     * Instructs compiler to ignore specific named warnings.\r
   - '@FunctionalInterface'\r
     * Validates interface has exactly ONE abstract method.\r
   - '@SafeVarargs'\r
     * Suppresses heap pollution warnings on generic varargs methods/constructors.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the consequence of omitting @Override when overriding a method?",shortAnswer:"The method will still override if the signature matches perfectly. However, if there is a signature typo (e.g. equals(Student s) instead of equals(Object o)), the compiler treats it as an overload rather than an override without giving any error.",explanation:"Always apply @Override to catch signature mismatches at compile time.",hint:"Leaves the code vulnerable to silent overload typo bugs.",level:"Beginner",codeExample:"@Override public boolean equals(Object o) { ... }"},{question:"What do the 'since' and 'forRemoval' attributes in @Deprecated indicate?",shortAnswer:"'since' specifies the version in which the element was first deprecated (e.g. '17'), and 'forRemoval=true' indicates that the API is scheduled for complete removal in an upcoming major release.",explanation:"Enhanced in Java 9 to improve API deprecation tracking.",hint:"'since' indicates version; 'forRemoval=true' indicates imminent deletion.",level:"Intermediate",codeExample:"@Deprecated(since='17', forRemoval=true)"}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Standard Built-in Annotations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Override, @Deprecated & @SuppressWarnings"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Core JDK annotations: enforcing compile-time polymorphism checks, deprecation lifecycle tracking with since and forRemoval, and suppressing compiler warnings."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"StandardBuiltinAnnotationsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Annotations FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 010_002 Topic 1: Standard Built-in Annotations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic1_standard_builtin_annotations_note.txt"})}),e.jsx(r,{note:"Always use @Override! It saves you from painful spelling mistakes when overriding methods. And in Java 9+, @Deprecated has since='11' and forRemoval=true to tell developers when a method will be deleted! — Sukanta Hui"})]})}export{v as default};
