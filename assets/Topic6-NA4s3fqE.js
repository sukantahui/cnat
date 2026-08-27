import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 6: Inspecting & Modifying Fields Dynamically via field.get() and field.set()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.reflect.Field;\r
import java.lang.reflect.Modifier;\r
\r
public class InspectingModifyingFieldsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: DYNAMIC FIELD INSPECTION & MUTATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentEntity student = new StudentEntity(101, "Swadeep Paul", 85.0);\r
        Class<?> clazz = student.getClass();\r
\r
        System.out.println(">>> 1. Inspecting All Declared Fields on StudentEntity:");\r
        for (Field f : clazz.getDeclaredFields()) {\r
            System.out.println("   - Field: " + f.getName() + " [Type: " + f.getType().getSimpleName() + ", Modifiers: " + Modifier.toString(f.getModifiers()) + "]");\r
        }\r
\r
        // 2. Reading Field Value dynamically: field.get(instance)\r
        Field nameField = clazz.getDeclaredField("name");\r
        nameField.setAccessible(true); // Enable access to private field\r
        Object currentValue = nameField.get(student);\r
        System.out.println("\\n2. Read private field 'name' via field.get(): " + currentValue);\r
\r
        // 3. Mutating Field Value dynamically: field.set(instance, newValue)\r
        Field scoreField = clazz.getDeclaredField("score");\r
        scoreField.setAccessible(true);\r
        scoreField.set(student, 96.5); // Mutated dynamically!\r
\r
        System.out.println("3. Mutated private field 'score' to 96.5 via field.set(). New Entity State:");\r
        System.out.println("   " + student);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    public static class StudentEntity {\r
        private final int id;\r
        private String name;\r
        private double score;\r
\r
        public StudentEntity(int id, String name, double score) {\r
            this.id = id;\r
            this.name = name;\r
            this.score = score;\r
        }\r
\r
        @Override\r
        public String toString() {\r
            return "StudentEntity[id=" + id + ", name=" + name + ", score=" + score + "%]";\r
        }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 6: Inspecting & Modifying Fields\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FIELD INSPECTION METHODS:\r
   - 'clazz.getFields()': Returns all public fields (including inherited public fields).\r
   - 'clazz.getDeclaredFields()': Returns all fields declared in the class (private, protected, public).\r
\r
2. FIELD ACCESS & MUTATION:\r
   - Read: 'field.get(Object obj)' -> Returns field value as 'Object' (auto-boxes primitives).\r
   - Write: 'field.set(Object obj, Object value)' -> Mutates the field value.\r
   - Primitive getters/setters: 'getInt()', 'setInt()', 'getDouble()', 'setDouble()' (zero boxing).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Can Reflection modify a field marked as private?",shortAnswer:"Yes. By calling field.setAccessible(true) prior to field.set(), the standard Java access control checks are suppressed for that field, allowing dynamic modification of private state.",explanation:"This mechanism is how Hibernate populates private entity fields from database rows.",hint:"Yes, by calling field.setAccessible(true) first.",level:"Beginner",codeExample:"field.setAccessible(true); field.set(obj, 'newValue');"},{question:"What happens if you attempt to modify a final field via Reflection in modern Java versions?",shortAnswer:"In modern Java (Java 12+), mutating final fields via Reflection produces an IllegalAccessException, as the JVM has restricted tampering with final fields to protect memory safety and JIT compiler optimizations.",explanation:"Reflection on final fields is strictly locked down in modern JDKs.",hint:"Throws IllegalAccessException in modern JDKs.",level:"Advanced",codeExample:"Field finalField = ...; finalField.set(obj, val); // Throws IllegalAccessException"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Inspecting & Modifying Fields: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"field.get() & field.set()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Dynamic field manipulation: getFields() vs getDeclaredFields(), reading instance state, mutating fields, and handling static fields."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"InspectingModifyingFieldsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java Reflection FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 010_001 Topic 6: Inspecting & Modifying Fields",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic6_inspecting_modifying_fields_note.txt"})}),e.jsx(a,{note:"field.get(obj) reads the field value from obj, and field.set(obj, value) writes the new value into obj! For static fields, just pass null as the target object! — Sukanta Hui"})]})}export{x as default};
