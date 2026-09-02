import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 0: What is Serialization: Converting In-Memory Object Graphs into Byte Streams\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayOutputStream;\r
import java.io.ObjectOutputStream;\r
import java.io.Serializable;\r
\r
// 1. Serializable Entity:\r
class StudentTrainee implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
\r
    private final String name;\r
    private final String academicHub;\r
    private final double gpa;\r
\r
    public StudentTrainee(String name, String hub, double gpa) {\r
        this.name = name;\r
        this.academicHub = hub;\r
        this.gpa = gpa;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "StudentTrainee{name='" + name + "', hub='" + academicHub + "', gpa=" + gpa + "}";\r
    }\r
}\r
\r
public class SerializationFundamentalsDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT IS OBJECT SERIALIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentTrainee student = new StudentTrainee("Swadeep Paul", "Barrackpore", 9.85);\r
\r
        System.out.println(">>> 1. Live In-Memory Java Object:");\r
        System.out.println("  " + student);\r
\r
        // 2. Serializing Object Graph into Raw Byte Stream:\r
        ByteArrayOutputStream byteSink = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteSink)) {\r
            oos.writeObject(student); // FLATTENS object graph into Java binary wire format!\r
            oos.flush();\r
        }\r
\r
        byte[] serializedBytes = byteSink.toByteArray();\r
        System.out.println("\\n>>> 2. Serialized Binary Byte Stream Representation:");\r
        System.out.println("  Total Serialized Wire Size : " + serializedBytes.length + " bytes");\r
        System.out.print("  Magic Header (First 4 bytes): ");\r
        System.out.printf("0x%02X 0x%02X 0x%02X 0x%02X%n",\r
                serializedBytes[0], serializedBytes[1], serializedBytes[2], serializedBytes[3]);\r
        System.out.println("  (0xAC 0xED = STREAM_MAGIC; 0x00 0x05 = STREAM_VERSION 5)");\r
\r
        System.out.println("\\n>>> WHY SERIALIZATION IS ESSENTIAL:");\r
        System.out.println("  1. Persistence: Saving live object state to disk across application restarts.");\r
        System.out.println("  2. Remote Communication: Sending objects across networks (RMI, HTTP, Message Queues).");\r
        System.out.println("  3. Deep Cloning: Creating exact in-memory clones of complex object graphs.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 0: What is Serialization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SERIALIZATION ESSENTIALS:\r
   - Converts in-memory heap object → binary byte stream.\r
   - Stream magic header: '0xAC 0xED' (STREAM_MAGIC).\r
   - Used for disk persistence, HTTP/RMI transport, and deep cloning.\r
   - Class must implement 'java.io.Serializable'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Object Serialization' in Java and what are the standard 2-byte magic numbers that start every Java serialized byte stream?",shortAnswer:"Object Serialization is the process of converting the in-memory state of a live Java object graph (including all its fields and nested references) into an ordered sequence of binary bytes for disk persistence or network transmission. Every Java serialized stream begins with the 2-byte magic header 0xACED ('STREAM_MAGIC') followed by version 0x0005 ('STREAM_VERSION').",explanation:"Allows serialized objects to be reconstructed in a completely different JVM instance.",hint:"Converts object graph to bytes; starts with 0xACED magic header bytes.",level:"Beginner",codeExample:"oos.writeObject(myObject); // Serializes object graph into byte stream"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Object Serialization"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"What is Serialization: Converting In-Memory Object Graphs into Byte Streams"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover object serialization fundamentals: converting live heap object graphs into binary wire streams, inspecting the 0xACED magic header, and understanding enterprise persistence."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"SerializationFundamentalsDemo.java",highlightLines:[7,10,11,14,15,34,35,36,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Serialization FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 005_005 Topic 0: What is Serialization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic0_what_is_serialization_note.txt"})}),e.jsx(a,{note:"Serialization is like freeze-drying a living plant! You convert the complex in-memory object into a dry packet of bytes, send it over the wire, and then rehydrate it in another JVM with Deserialization! — Sukanta Hui"})]})}export{y as default};
