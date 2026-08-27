import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 1: Java Records (Java 16+ Standard - JEP 395) - Immutable Data Carriers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class JavaRecordsJep395Demo {\r
\r
    // 1-Line Immutable Data Carrier:\r
    // Automatically generates: private final fields, canonical constructor,\r
    // accessors id(), name(), center(), score(), equals(), hashCode(), toString()!\r
    public record StudentRecord(int id, String name, String center, double score) {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: JAVA RECORDS (JEP 395) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentRecord s1 = new StudentRecord(101, "Swadeep Paul", "Barrackpore", 94.5);\r
        StudentRecord s2 = new StudentRecord(101, "Swadeep Paul", "Barrackpore", 94.5);\r
        StudentRecord s3 = new StudentRecord(102, "Tuhina Das", "Naihati", 96.0);\r
\r
        // 1. Auto-generated toString():\r
        System.out.println("1. Auto-generated toString():\\n   " + s1);\r
\r
        // 2. Auto-generated Accessor methods (name() NOT getName()):\r
        System.out.println("\\n2. Accessor methods:");\r
        System.out.println("   - ID     : " + s1.id());\r
        System.out.println("   - Name   : " + s1.name());\r
        System.out.println("   - Center : " + s1.center());\r
        System.out.println("   - Score  : " + s1.score() + "%");\r
\r
        // 3. Auto-generated Value-based equals() & hashCode():\r
        System.out.println("\\n3. Value Equality (equals & hashCode):");\r
        System.out.println("   - s1.equals(s2) (Identical data) : " + s1.equals(s2) + " (TRUE!)");\r
        System.out.println("   - s1.equals(s3) (Different data) : " + s1.equals(s3) + " (FALSE)");\r
        System.out.println("   - s1.hashCode() == s2.hashCode() : " + (s1.hashCode() == s2.hashCode()));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 1: Java Records (JEP 395)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A JAVA RECORD (Java 16+):\r
   - A specialized class type designed to act as an immutable carrier for a fixed set of data.\r
   - Syntax: 'public record Point(int x, int y) {}'\r
\r
2. COMPARISON WITH TRADITIONAL POJO / JAVABEANS:\r
   - Traditional POJO: 50+ lines of mutable fields, boilerplate getters, setters,\r
     constructors, equals(), hashCode(), and toString().\r
   - Record: 1 line of clean code; 100% immutable by default; transparent data access.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How do accessor method names in Java Records differ from traditional JavaBeans?",shortAnswer:"Record accessors use the exact component name without the 'get' prefix (e.g. s.name() and s.age() rather than s.getName() and s.getAge()).",explanation:"Emphasizes that records are transparent data carriers rather than mutable JavaBeans.",hint:"Uses fieldName() instead of getFieldName().",level:"Beginner",codeExample:"record User(String name) {} // Accessed via user.name()"},{question:"Are fields in a Java Record mutable?",shortAnswer:"No. All component fields declared in the record header are implicitly private and final. There are no setters generated.",explanation:"Guarantees shallow immutability and thread safety.",hint:"All record fields are implicitly private and final.",level:"Beginner",codeExample:"record Point(int x, int y) {} // x and y are private final"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Java Records: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Immutable Data Carriers (JEP 395)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Saying goodbye to Lombok and POJO boilerplate: replacing 60 lines of getters, setters, equals, hashCode, and constructors with a 1-line record."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"JavaRecordsJep395Demo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Modern Java Features FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_009 Topic 1: Java Records (JEP 395)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic1_java_records_jep395_note.txt"})}),e.jsx(n,{note:"A Java Record is pure declarative data modeling: record Student(int id, String name, double score) {} gives you an immutable class with fields, constructor, getters, equals, hashCode, and toString in ONE SINGLE LINE! — Sukanta Hui"})]})}export{g as default};
