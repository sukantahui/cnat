import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 1: What is Deserialization: Reconstructing Live Java Objects from Byte Streams\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.ObjectInputStream;\r
import java.io.ObjectOutputStream;\r
import java.io.Serializable;\r
\r
class CourseEnrollment implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
\r
    private final String courseName;\r
    private final int totalHours;\r
\r
    public CourseEnrollment(String name, int hours) {\r
        this.courseName = name;\r
        this.totalHours = hours;\r
        System.out.println("  [CONSTRUCTOR CALLED] Initializing CourseEnrollment instance in memory.");\r
    }\r
\r
    public String getCourseName() { return courseName; }\r
    public int getTotalHours() { return totalHours; }\r
\r
    @Override\r
    public String toString() {\r
        return "CourseEnrollment{course='" + courseName + "', hours=" + totalHours + "}";\r
    }\r
}\r
\r
public class DeserializationReconstructionDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: WHAT IS OBJECT DESERIALIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Creating and Serializing Original Instance:");\r
        CourseEnrollment original = new CourseEnrollment("Java Core & Spring Microservices", 120);\r
\r
        ByteArrayOutputStream byteSink = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteSink)) {\r
            oos.writeObject(original);\r
        }\r
        byte[] serializedData = byteSink.toByteArray();\r
\r
        System.out.println("\\n>>> 2. Deserializing Object from Raw Bytes (ObjectInputStream):");\r
        CourseEnrollment restored;\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(serializedData))) {\r
            // DESERIALIZATION MAGIC: Notice that NO CONSTRUCTOR is called during readObject()!\r
            restored = (CourseEnrollment) ois.readObject();\r
        }\r
\r
        System.out.println("  Restored Object State : " + restored);\r
        System.out.println("  Is Same Reference?    : " + (original == restored) + " (Completely independent heap clone!)");\r
        System.out.println("  Are Fields Identical? : " + (original.getCourseName().equals(restored.getCourseName()) && original.getTotalHours() == restored.getTotalHours()));\r
\r
        System.out.println("\\n>>> CRITICAL DESERIALIZATION FACT:");\r
        System.out.println("  The target class constructor is NEVER invoked during deserialization for Serializable classes!");\r
        System.out.println("  The JVM allocates uninitialized heap memory and directly injects field values via reflection/bytecode!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 1: What is Deserialization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DESERIALIZATION RECONSTRUCTION:\r
   - 'ObjectInputStream.readObject()' rehydrates live object.\r
   - Constructor of Serializable class is NEVER called.\r
   - JVM directly populates fields from stream byte offsets.\r
   - Restored instance is a new, independent heap clone (== returns false).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Is the constructor of a 'Serializable' class invoked when that object is being deserialized via 'ObjectInputStream.readObject()'?",shortAnswer:"NO. When a class implements 'Serializable', the JVM completely BYPASSES all constructors of that class during deserialization. The JVM allocates raw uninitialized heap memory via internal reflection mechanisms and restores the field values directly from the byte stream. Only the no-arg constructor of the first non-serializable superclass is invoked.",explanation:"Effective Java Item 85: Constructors are bypassed, making deserialization an alternative invisible constructor.",hint:"Constructors of Serializable classes are NEVER called during deserialization.",level:"Intermediate",codeExample:"CourseEnrollment obj = (CourseEnrollment) ois.readObject(); // Constructor NOT called!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Object Rehydration"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"What is Deserialization: Reconstructing Live Java Objects from Byte Streams"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand object rehydration mechanics: reading serialized bytes with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"readObject()"})," and discovering why constructors are never invoked during deserialization."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"DeserializationReconstructionDemo.java",highlightLines:[7,10,11,18,19,41,42,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Deserialization FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 005_005 Topic 1: What is Deserialization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic1_what_is_deserialization_note.txt"})}),e.jsx(a,{note:"A huge interview question: 'Does deserialization call the constructor?' The answer is NO! The JVM directly allocates memory and fills in the fields without running your constructor logic! — Sukanta Hui"})]})}export{y as default};
