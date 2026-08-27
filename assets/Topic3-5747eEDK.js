import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 3: Inspecting Class Metadata - Superclasses, Interfaces & Modifiers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.io.Serializable;\r
import java.lang.reflect.Modifier;\r
import java.util.Arrays;\r
\r
public class InspectingClassMetadataDemo {\r
\r
    public interface Identifiable { int getId(); }\r
    public interface Evaluated { double getScore(); }\r
\r
    public static abstract class BaseEntity {\r
        protected long createdEpoch = System.currentTimeMillis();\r
    }\r
\r
    public static final class AcademyStudentRecord extends BaseEntity implements Identifiable, Evaluated, Serializable {\r
        private final int id = 101;\r
        private final String name = "Swadeep Paul";\r
        private final double score = 94.0;\r
\r
        @Override public int getId() { return id; }\r
        @Override public double getScore() { return score; }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: INSPECTING CLASS METADATA - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Class<?> clazz = AcademyStudentRecord.class;\r
\r
        // 1. Inspecting Modifiers\r
        int modifiers = clazz.getModifiers();\r
        System.out.println("1. Class Modifiers (Bitmask: " + modifiers + "):");\r
        System.out.println("   - Modifier String : " + Modifier.toString(modifiers));\r
        System.out.println("   - Is Public?      : " + Modifier.isPublic(modifiers));\r
        System.out.println("   - Is Final?       : " + Modifier.isFinal(modifiers));\r
        System.out.println("   - Is Abstract?    : " + Modifier.isAbstract(modifiers));\r
\r
        // 2. Superclass Hierarchy Navigation\r
        System.out.println("\\n2. Superclass Hierarchy:");\r
        Class<?> current = clazz;\r
        while (current != null) {\r
            System.out.println("   --> " + current.getName());\r
            current = current.getSuperclass();\r
        }\r
\r
        // 3. Implemented Interfaces\r
        System.out.println("\\n3. Implemented Interfaces:");\r
        Class<?>[] interfaces = clazz.getInterfaces();\r
        for (Class<?> iface : interfaces) {\r
            System.out.println("   - Interface: " + iface.getSimpleName());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 3: Inspecting Class Metadata\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METADATA INSPECTION METHODS:\r
   - 'getSuperclass()': Returns Class representing the superclass (returns null for Object & interfaces).\r
   - 'getInterfaces()': Returns 'Class<?>[]' of directly implemented interfaces.\r
   - 'getModifiers()': Returns an integer bitmask of modifiers.\r
   - 'isInterface()', 'isArray()', 'isPrimitive()', 'isEnum()', 'isRecord()', 'isAnnotation()'.\r
\r
2. MODIFIER UTILITY CLASS ('java.lang.reflect.Modifier'):\r
   - Helper methods: 'Modifier.isPublic(mod)', 'Modifier.isStatic(mod)', 'Modifier.isFinal(mod)'.\r
   - 'Modifier.toString(mod)': Formats bitmask into a clean modifier string.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"What does clazz.getSuperclass() return when invoked on java.lang.Object or an interface?",shortAnswer:"It returns null. java.lang.Object has no superclass, and interfaces have no superclass according to the Reflection API specification.",explanation:"To inspect interface inheritance, use getInterfaces() instead.",hint:"Returns null for Object and interfaces.",level:"Beginner",codeExample:"Object.class.getSuperclass(); // null\\nRunnable.class.getSuperclass(); // null"},{question:"How are class modifiers represented internally in the JVM and decoded by Reflection?",shortAnswer:"Modifiers are stored as an integer bitmask where specific bits represent flags (e.g. public=1, private=2, final=16). The java.lang.reflect.Modifier class provides static helper methods (isPublic, isFinal) and Modifier.toString() to decode them.",explanation:"Bitwise AND operations test individual modifier flags.",hint:"Stored as an integer bitmask and decoded via Modifier static methods.",level:"Intermediate",codeExample:"int mods = clazz.getModifiers(); String s = Modifier.toString(mods);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Inspecting ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Class Metadata"}),": Superclasses, Interfaces & Modifiers"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Extracting structural blueprint: traversing inheritance hierarchies, discovering implemented interfaces, and decoding bitmask modifiers with Modifier."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"InspectingClassMetadataDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Java Reflection FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 010_001 Topic 3: Inspecting Class Metadata",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic3_inspecting_class_metadata_note.txt"})}),e.jsx(i,{note:"The Modifier class uses bitwise integer flags to decode class modifiers! Modifier.toString(clazz.getModifiers()) turns bitmask flags into readable keywords like 'public abstract final'! — Sukanta Hui"})]})}export{b as default};
