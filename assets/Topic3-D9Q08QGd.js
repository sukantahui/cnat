import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 3: Compiler Generated Artifacts - Canonical Constructor & Value Equality\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
public class CompilerGeneratedArtifactsDemo {\r
\r
    public record CenterEnrollment(String studentName, String branch, double score) {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: COMPILER GENERATED ARTIFACTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CenterEnrollment e1 = new CenterEnrollment("Swadeep Paul", "Barrackpore", 94.0);\r
        CenterEnrollment e2 = new CenterEnrollment("Swadeep Paul", "Barrackpore", 94.0);\r
\r
        System.out.println(">>> 1. VALUE-BASED EQUALS & HASHCODE IN ACTION:");\r
        System.out.println("  - e1 memory identity == e2 : " + (e1 == e2) + " (Different heap objects)");\r
        System.out.println("  - e1.equals(e2)            : " + e1.equals(e2) + " (Identical field values!)");\r
        System.out.println("  - e1.hashCode()            : " + e1.hashCode());\r
        System.out.println("  - e2.hashCode()            : " + e2.hashCode() + " (Identical hash!)");\r
\r
        // 2. Perfect compatibility with Hash Collections (HashSet deduplication)\r
        Set<CenterEnrollment> uniqueEnrollments = new HashSet<>();\r
        uniqueEnrollments.add(e1);\r
        uniqueEnrollments.add(e2); // Discarded as duplicate automatically!\r
\r
        System.out.println("\\n>>> 2. HashSet Deduplication with Records:");\r
        System.out.println("  - Total entries in HashSet (Expected: 1): " + uniqueEnrollments.size());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 3: Compiler Generated Artifacts\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT JAVAC SYNTHESIZES AUTOMATICALLY:\r
   1. Canonical Constructor: 'public RecordName(T1 c1, T2 c2...)' matching component types.\r
   2. Component Accessors: 'public T1 c1()', 'public T2 c2()'.\r
   3. 'equals(Object o)': True if and only if all corresponding components are equal.\r
   4. 'hashCode()': Combines hash codes of all components consistently with equals.\r
   5. 'toString()': Returns formatted string: 'RecordName[c1=v1, c2=v2]'.\r
\r
2. VALUE OBJECT INTEGRITY:\r
   - Two record instances with identical component values are structurally interchangeable.\r
   - Solves bugs with custom equals/hashCode omissions in traditional DTO classes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does equals() in a Java Record handle primitive fields versus object reference fields?",shortAnswer:"Primitive fields are compared by value (e.g. == for ints, Double.compare for doubles), while object reference fields are compared via Objects.equals(this.field, other.field).",explanation:"Generated automatically according to the Java Record Language Specification.",hint:"Primitives compared by value; objects compared using Objects.equals().",level:"Intermediate",codeExample:"record Data(int id, String text) {} // Compares id with == and text with Objects.equals()"},{question:"What is the Canonical Constructor in a Java Record?",shortAnswer:"The constructor whose parameter list matches the component list of the record header in number, order, and types, initializing each private final field.",explanation:"Automatically provided by the compiler unless explicitly customized.",hint:"The full-parameter constructor matching the record header signature.",level:"Beginner",codeExample:"public Point(int x, int y) { this.x = x; this.y = y; }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Compiler Generated Artifacts: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Constructors, Accessors & Value Equality"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deep dive into what javac synthesizes: canonical constructor, field-by-field equals(), consistent hashCode(), and structured toString()."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CompilerGeneratedArtifactsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Modern Java Features FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_009 Topic 3: Compiler Generated Artifacts",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic3_compiler_generated_artifacts_note.txt"})}),e.jsx(a,{note:"Records implement Value-Based Equality! Two record instances with identical field values will ALWAYS return true for equals(), making them ideal for HashSet, HashMap keys, and Collections operations! — Sukanta Hui"})]})}export{f as default};
