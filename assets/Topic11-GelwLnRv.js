import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 11: java.io.Externalizable: Manual Total Control via writeExternal() & readExternal()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.Externalizable;\r
import java.io.IOException;\r
import java.io.ObjectInput;\r
import java.io.ObjectInputStream;\r
import java.io.ObjectOutput;\r
import java.io.ObjectOutputStream;\r
\r
// Externalizable Entity (Gives programmer 100% manual control over every byte):\r
class FastStudentSummary implements Externalizable {\r
    private static final long serialVersionUID = 1L;\r
\r
    private String name;\r
    private int score;\r
\r
    // MANDATORY REQUIREMENT: Externalizable classes MUST have a public no-arg constructor!\r
    public FastStudentSummary() {\r
        System.out.println("  [NO-ARG CONSTRUCTOR] Invoked during Externalizable deserialization!");\r
    }\r
\r
    public FastStudentSummary(String name, int score) {\r
        this.name = name;\r
        this.score = score;\r
    }\r
\r
    // Manual serialization:\r
    @Override\r
    public void writeExternal(ObjectOutput out) throws IOException {\r
        out.writeUTF(name);\r
        out.writeInt(score);\r
        System.out.println("  [writeExternal] Manually wrote name and score.");\r
    }\r
\r
    // Manual deserialization:\r
    @Override\r
    public void readExternal(ObjectInput in) throws IOException, ClassNotFoundException {\r
        this.name = in.readUTF();\r
        this.score = in.readInt();\r
        System.out.println("  [readExternal] Manually read name and score.");\r
    }\r
\r
    @Override\r
    public String toString() { return "FastStudentSummary[name=" + name + ", score=" + score + "]"; }\r
}\r
\r
public class ExternalizableManualControlDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: java.io.Externalizable MANUAL CONTROL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        FastStudentSummary summary = new FastStudentSummary("Tuhina Das", 98);\r
\r
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteBuffer)) {\r
            oos.writeObject(summary);\r
        }\r
\r
        System.out.println("\\n>>> Deserializing Externalizable Object:");\r
        FastStudentSummary restored;\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(byteBuffer.toByteArray()))) {\r
            restored = (FastStudentSummary) ois.readObject();\r
        }\r
\r
        System.out.println("  Restored: " + restored);\r
\r
        System.out.println("\\n>>> COMPARISON: Serializable vs Externalizable:");\r
        System.out.println("  - Serializable : Automatic JVM reflection (slower, no constructor called, transient keyword honored).");\r
        System.out.println("  - Externalizable: Manual programmer code (faster, public no-arg constructor MANDATORY, ignores transient).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 11: Externalizable Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EXTERNALIZABLE VS SERIALIZABLE:\r
   - 'Externalizable' extends 'Serializable'.\r
   - 2 methods: 'writeExternal(out)' & 'readExternal(in)'.\r
   - Mandatory: 'public MyClass()' no-arg constructor.\r
   - Ignores 'transient' keyword (programmer has total manual control).\r
   - Higher performance, zero reflection overhead.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the mandatory constructor requirement for classes implementing 'java.io.Externalizable' in Java?",shortAnswer:"Classes implementing 'Externalizable' MUST declare a 'public' no-argument constructor. During deserialization, the JVM first invokes the public no-arg constructor to create a fresh object instance on the heap, and then immediately invokes 'readExternal(in)' to populate the object's fields manually.",explanation:"If the public no-arg constructor is missing, deserialization fails with InvalidClassException.",hint:"Must provide a public no-arg constructor, which is called during readObject() before readExternal().",level:"Intermediate",codeExample:"public class MyClass implements Externalizable { public MyClass() {} // Mandatory! }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Manual Serialization"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-purple-400 font-mono",children:"java.io.Externalizable"})," Interface: Manual Total Control"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Take total control over binary serialization: implementing ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"writeExternal()"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"readExternal()"})," and fulfilling the public no-arg constructor mandate."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"ExternalizableManualControlDemo.java",highlightLines:[7,10,15,16,22,23,31,32,38,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Externalizable FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 005_005 Topic 11: Externalizable Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic11_externalizable_interface_note.txt"})}),e.jsx(a,{note:"If performance is critical and you don't want Java reflection slowing you down, use Externalizable! You decide exactly which bytes get written and read, giving you 5x faster speeds! — Sukanta Hui"})]})}export{y as default};
