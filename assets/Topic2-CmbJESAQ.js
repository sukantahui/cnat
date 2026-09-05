import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 2: Anatomy of a Record - Components & Reflection\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
import java.lang.reflect.RecordComponent;\r
import java.util.Arrays;\r
\r
public class AnatomyOfRecordDemo {\r
\r
    public record CourseInfo(String code, String title, int durationWeeks, double fee) {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: ANATOMY OF A RECORD - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        CourseInfo course = new CourseInfo("JAVA-PRO", "Java Core to Pro", 12, 4500.0);\r
\r
        // 1. Inspecting Record Class Hierarchy via Reflection\r
        Class<?> clazz = course.getClass();\r
        System.out.println("1. Class Hierarchy:");\r
        System.out.println("   - Class Name       : " + clazz.getName());\r
        System.out.println("   - Superclass       : " + clazz.getSuperclass().getName() + " (java.lang.Record!)");\r
        System.out.println("   - isRecord()       : " + clazz.isRecord() + " (Java 16+ reflection method)");\r
\r
        // 2. Inspecting Record Components dynamically\r
        System.out.println("\\n2. Record Components (Metadata introspection):");\r
        RecordComponent[] components = clazz.getRecordComponents();\r
        for (RecordComponent rc : components) {\r
            System.out.println("   - Component: " + rc.getName() + " [Type: " + rc.getType().getSimpleName() + ", Accessor: " + rc.getAccessor().getName() + "()]");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 2: Anatomy of a Record\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RECORD COMPILATION RULES:\r
   - Implicit Superclass: 'java.lang.Record' (Inherits basic record contracts).\r
   - Implicit Modifier: 'final' (Records cannot be extended/subclassed).\r
   - Component Fields: Generated as 'private final' matching header parameters.\r
   - Accessors: Public getter-less methods ('x()', 'y()').\r
\r
2. REFLECTION ENHANCEMENTS:\r
   - 'Class.isRecord()': Returns true if class is a record.\r
   - 'Class.getRecordComponents()': Returns array of 'RecordComponent' metadata.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"Can a Java Record explicitly extend another class (e.g. record Point(int x) extends Shape)?",shortAnswer:"No! All records implicitly extend java.lang.Record. Because Java does not support multiple class inheritance, a record cannot declare an extends clause.",explanation:"However, records CAN implement any number of interfaces.",hint:"Cannot extend classes (already extends java.lang.Record), but can implement interfaces.",level:"Intermediate",codeExample:"// VALID: record Student(int id) implements Serializable, Comparable<Student> {}"},{question:"What is the return type of clazz.getRecordComponents()?",shortAnswer:"java.lang.reflect.RecordComponent[], an array containing introspection metadata for each component defined in the record header.",explanation:"Added in Java 16 for reflection and serialization frameworks.",hint:"RecordComponent[]",level:"Intermediate",codeExample:"RecordComponent[] comps = Point.class.getRecordComponents();"}];function R(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Anatomy of a Record: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Components, Headers & Internal Bytecode"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dissecting record internals: how the JVM compiles record components into final fields, java.lang.Record superclass inheritance, and bytecode reflection."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"AnatomyOfRecordDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Modern Java Features FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 009_009 Topic 2: Anatomy of a Record",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic2_anatomy_of_record_note.txt"})}),e.jsx(a,{note:"Every Java Record implicitly extends java.lang.Record! You can verify this using reflection: s.getClass().getSuperclass() returns java.lang.Record, and isRecord() returns true! — Sukanta Hui"})]})}export{R as default};
