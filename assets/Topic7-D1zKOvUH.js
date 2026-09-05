import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 7: Static Variables and Serialization: Class State vs Instance State\r
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
class AcademicInstitution implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
\r
    // STATIC FIELD: Belongs to the Class in Metaspace, NOT individual heap instances!\r
    public static String centralHubBranch = "Barrackpore Hub 2026";\r
\r
    // INSTANCE FIELD: Serialized normally\r
    private final String studentName;\r
\r
    public AcademicInstitution(String name) {\r
        this.studentName = name;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "Student=" + studentName + " | CentralBranch=" + centralHubBranch;\r
    }\r
}\r
\r
public class StaticVariablesSerializationBehaviorDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: STATIC VARIABLES & SERIALIZATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademicInstitution original = new AcademicInstitution("Abhronila Das");\r
        System.out.println(">>> 1. Original Instance State:");\r
        System.out.println("  " + original);\r
\r
        // Serialize instance:\r
        ByteArrayOutputStream byteSink = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteSink)) {\r
            oos.writeObject(original);\r
        }\r
\r
        // MODIFY STATIC VARIABLE IN MEMORY PRIOR TO DESERIALIZATION:\r
        System.out.println("\\n>>> 2. Mutating static 'centralHubBranch' variable in current JVM...");\r
        AcademicInstitution.centralHubBranch = "Naihati Advanced Center (MODIFIED!)";\r
\r
        // Deserialize:\r
        AcademicInstitution restored;\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(byteSink.toByteArray()))) {\r
            restored = (AcademicInstitution) ois.readObject();\r
        }\r
\r
        System.out.println("\\n>>> 3. Restored Instance State:");\r
        System.out.println("  " + restored);\r
        System.out.println("  [OBSERVATION] Notice that 'centralHubBranch' reflects the NEW static value, NOT the old one!");\r
\r
        System.out.println("\\n>>> WHY STATIC VARIABLES ARE NEVER SERIALIZED:");\r
        System.out.println("  1. 'Object Serialization' serializes the state of an OBJECT INSTANCE on the heap.");\r
        System.out.println("  2. Static variables belong to the Class template in Metaspace/Classloader, not instances.");\r
        System.out.println("  3. When an object is deserialized, static fields reflect whatever value the current JVM currently holds.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 7: Static Variables & Serialization\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC FIELD BEHAVIOR:\r
   - 'static' variables are NEVER written to the serialized byte stream.\r
   - Deserialized objects read whatever static value the receiving JVM currently holds.\r
   - 'transient' is for instance fields; 'static' is automatically non-serialized.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why are 'static' variables NOT saved or transferred during Java Object Serialization?",shortAnswer:"Serialization preserves the state of individual object instances on the heap. 'static' variables belong to the Class definition loaded into Metaspace/Method Area, shared by all instances. When an object is deserialized, static fields simply reflect whatever value the receiving JVM's loaded class currently possesses.",explanation:"Static variables are class-level state, not instance-level state.",hint:"Static fields belong to the Class in Metaspace, not individual heap object instances.",level:"Intermediate",codeExample:'public static String appVersion = "1.0"; // NOT saved during oos.writeObject(obj)'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Static State"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Static Variables and Serialization: Class State vs Instance State"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze JVM memory boundaries: discovering why static variables belong to class Metaspace and are permanently excluded from serialized object streams."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"StaticVariablesSerializationBehaviorDemo.java",highlightLines:[7,10,16,17,44,45,49,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Static Variables FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 005_005 Topic 7: Static Variables & Serialization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic7_static_variables_serialization_note.txt"})}),e.jsx(n,{note:"Remember: Serialization only captures instance state on the Heap! Static variables live in the Classloader Metaspace, so they are never saved into your .ser file! — Sukanta Hui"})]})}export{h as default};
