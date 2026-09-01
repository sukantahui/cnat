import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 4: Serializing Complex Object Graphs: Deep Traversal & Graph Cycles\r
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
// Nested Reference 1: Must implement Serializable!\r
class AcademicHub implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
    private final String hubName;\r
    private final String district;\r
\r
    public AcademicHub(String name, String district) {\r
        this.hubName = name;\r
        this.district = district;\r
    }\r
\r
    @Override\r
    public String toString() { return hubName + " (" + district + ")"; }\r
}\r
\r
// Root Object Graph Node:\r
class EnrolledStudentProfile implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
    private final String studentName;\r
    private final AcademicHub assignedHub; // Nested object reference!\r
\r
    public EnrolledStudentProfile(String name, AcademicHub hub) {\r
        this.studentName = name;\r
        this.assignedHub = hub;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "Student: " + studentName + " @ Hub: " + assignedHub;\r
    }\r
}\r
\r
public class ComplexObjectGraphSerializationDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: COMPLEX OBJECT GRAPH SERIALIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademicHub bkpHub = new AcademicHub("Barrackpore Central Hub", "North 24 Parganas");\r
        EnrolledStudentProfile student = new EnrolledStudentProfile("Swadeep Paul", bkpHub);\r
\r
        System.out.println(">>> 1. Original Deep Object Graph:");\r
        System.out.println("  " + student);\r
\r
        // Serialize the root object:\r
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteBuffer)) {\r
            // JVM automatically traverses and serializes the entire nested object graph!\r
            oos.writeObject(student);\r
        }\r
\r
        // Deserialize:\r
        EnrolledStudentProfile restored;\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(byteBuffer.toByteArray()))) {\r
            restored = (EnrolledStudentProfile) ois.readObject();\r
        }\r
\r
        System.out.println("\\n>>> 2. Restored Deep Object Graph:");\r
        System.out.println("  " + restored);\r
\r
        System.out.println("\\n>>> HOW OBJECT GRAPH SERIALIZATION WORKS:");\r
        System.out.println("  1. Deep Traversal: The JVM traverses all referenced fields recursively.");\r
        System.out.println("  2. Circular Reference Detection: The JVM maintains a handle table (back-references) to prevent infinite loops.");\r
        System.out.println("  3. Strict Rule: EVERY class in the object graph MUST implement 'Serializable'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 4: Complex Object Graphs\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OBJECT GRAPH RULES:\r
   - Root serialization triggers recursive traversal of all child objects.\r
   - ALL nested referenced classes must implement 'Serializable'.\r
   - Cyclic references handled automatically via JVM handle tables.\r
   - Preserves object sharing and instance identity across deep graphs.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How does the JVM handle circular references (e.g. Object A references B, and B references A) during object graph serialization?",shortAnswer:"The JVM's ObjectOutputStream maintains an internal 'Handle Table' (registry of previously serialized object memory addresses). When it encounters an object reference that has already been written to the stream, it does NOT re-serialize the object (preventing infinite recursion loops); instead, it writes a compact numeric back-reference handle (e.g. 0x710001).",explanation:"Ensures cyclic graphs are flattened safely and restores identical object identity on deserialization.",hint:"Uses an internal handle table to write compact back-references, preventing infinite recursion.",level:"Intermediate",codeExample:"oos.writeObject(nodeA); // Handles cyclic nodeA.next = nodeB and nodeB.next = nodeA"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Object Graph Traversal"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Serializing Complex Object Graphs: Deep Traversal & Graph Cycles"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master deep graph serialization: flattening nested object hierarchies, managing circular reference handles, and enforcing complete graph serializability."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ComplexObjectGraphSerializationDemo.java",highlightLines:[7,10,11,23,24,26,45,46,51,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Object Graphs FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 005_005 Topic 4: Complex Object Graphs",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic4_complex_object_graphs_note.txt"})}),e.jsx(a,{note:"If your class contains a reference to another custom class (like Student has Address), BOTH Student and Address must implement Serializable! If even 1 class in the chain forgets it, the whole serialization crashes! — Sukanta Hui"})]})}export{S as default};
