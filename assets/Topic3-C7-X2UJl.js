import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 3: ObjectOutputStream & ObjectInputStream: writeObject() and readObject() Lifecycle\r
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
import java.util.ArrayList;\r
import java.util.List;\r
\r
class BatchLedger implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
\r
    private final String branchCode;\r
    private final List<String> enrolledStudents = new ArrayList<>();\r
\r
    public BatchLedger(String branch) {\r
        this.branchCode = branch;\r
    }\r
\r
    public void addStudent(String name) { enrolledStudents.add(name); }\r
\r
    @Override\r
    public String toString() {\r
        return "BatchLedger[Branch=" + branchCode + ", Students=" + enrolledStudents + "]";\r
    }\r
}\r
\r
public class ObjectStreamReadWriteLifecycleDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: ObjectOutputStream & ObjectInputStream - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BatchLedger bkpLedger = new BatchLedger("BKP_NORTH_24_PGS");\r
        bkpLedger.addStudent("Swadeep Paul");\r
        bkpLedger.addStudent("Tuhina Das");\r
        bkpLedger.addStudent("Abhronila Das");\r
\r
        // 1. Serialization with ObjectOutputStream:\r
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteBuffer)) {\r
            // Writing primitive metadata along with object graph:\r
            oos.writeInt(2026); // Writes 4-byte primitive int\r
            oos.writeUTF("ACCOTAX_SECRET_SALT_BKP"); // Writes UTF string\r
            oos.writeObject(bkpLedger); // Writes complete serialized object graph\r
            oos.flush();\r
        }\r
\r
        byte[] payload = byteBuffer.toByteArray();\r
        System.out.println(">>> 1. Serialized Stream Created: " + payload.length + " bytes.");\r
\r
        // 2. Deserialization with ObjectInputStream (MUST READ IN EXACT SAME ORDER!):\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(payload))) {\r
            int year = ois.readInt();\r
            String salt = ois.readUTF();\r
            BatchLedger restored = (BatchLedger) ois.readObject();\r
\r
            System.out.println("\\n>>> 2. Deserialized Stream Reconstructed:");\r
            System.out.println("  Year       : " + year);\r
            System.out.println("  Salt       : " + salt);\r
            System.out.println("  Restored   : " + restored);\r
        }\r
\r
        System.out.println("\\n>>> CRITICAL ORDERING RULE:");\r
        System.out.println("  Data in ObjectInputStream MUST be read in the EXACT same sequence it was written to ObjectOutputStream!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 3: ObjectOutputStream & ObjectInputStream\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OBJECT STREAM LIFECYCLE:\r
   - 'ObjectOutputStream.writeObject(obj)' flattens object graph.\r
   - 'ObjectInputStream.readObject()' rehydrates live object (requires cast).\r
   - Supports mixed primitives: 'writeInt()', 'writeUTF()', 'writeDouble()'.\r
   - Mandatory: read in the EXACT same sequence written.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What happens if primitives and objects are read from 'ObjectInputStream' in a different order than they were written to 'ObjectOutputStream'?",shortAnswer:"The deserialization process fails immediately, throwing 'java.io.StreamCorruptedException', 'java.io.OptionalDataException', or 'java.lang.ClassCastException'. The binary stream is sequential; attempting to read an Object when the stream cursor is positioned over a primitive int will corrupt stream pointer deserialization.",explanation:"Strict FIFO sequence must be preserved when reading mixed primitive/object streams.",hint:"Throws StreamCorruptedException or ClassCastException; items must be read in exact FIFO order.",level:"Intermediate",codeExample:"oos.writeInt(1); oos.writeObject(obj); -> ois.readInt(); (MyObj) ois.readObject();"}];function j(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Stream Streams"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ObjectOutputStream"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"ObjectInputStream"}),": ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"writeObject()"})," & ",e.jsx("code",{className:"text-sky-300 font-mono",children:"readObject()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master object stream pipelines: writing mixed primitives and object graphs, casting deserialized instances, and maintaining strict FIFO sequence ordering."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"ObjectStreamReadWriteLifecycleDemo.java",highlightLines:[7,10,13,14,38,39,40,41,48,49,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Object Streams FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 005_005 Topic 3: ObjectOutputStream & InputStream",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic3_object_streams_note.txt"})}),e.jsx(n,{note:"Always read data in the exact same order you wrote it! If you wrote an int, a String, and then an Object, you must call readInt(), readUTF(), and then readObject() in that exact sequence! — Sukanta Hui"})]})}export{j as default};
