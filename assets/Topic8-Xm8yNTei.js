import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 8: The serialVersionUID Field: Versioning Contract & Unique Hash Calculation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ObjectStreamClass;\r
import java.io.Serializable;\r
\r
// Class with EXPLICIT serialVersionUID (Recommended Best Practice):\r
class VersionedTaxReport implements Serializable {\r
    // Explicit Version UID: Declares compatibility contract across versions\r
    private static final long serialVersionUID = 1001L;\r
\r
    private final String reportId;\r
    private final double totalTaxCollected;\r
\r
    public VersionedTaxReport(String id, double tax) {\r
        this.reportId = id;\r
        this.totalTaxCollected = tax;\r
    }\r
}\r
\r
// Class with NO serialVersionUID (JVM auto-generates SHA-1 hash at compile time):\r
class UnversionedClass implements Serializable {\r
    private String name;\r
    private int score;\r
}\r
\r
public class SerialVersionUIDContractDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: serialVersionUID CONTRACT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Querying serialVersionUID using ObjectStreamClass:\r
        ObjectStreamClass explicitMeta = ObjectStreamClass.lookup(VersionedTaxReport.class);\r
        ObjectStreamClass autoMeta     = ObjectStreamClass.lookup(UnversionedClass.class);\r
\r
        System.out.println(">>> 1. Comparing Explicit vs Auto-Calculated serialVersionUID:");\r
        System.out.println("  VersionedTaxReport UID (Explicit) : " + explicitMeta.getSerialVersionUID() + "L");\r
        System.out.println("  UnversionedClass UID (Auto SHA-1) : " + autoMeta.getSerialVersionUID() + "L");\r
\r
        System.out.println("\\n>>> WHY YOU MUST ALWAYS EXPLICITLY DECLARE serialVersionUID:");\r
        System.out.println("  1. Compiler Sensitivity: If omitted, the compiler computes a SHA-1 hash based on class structure, fields, methods, and interfaces.");\r
        System.out.println("  2. Incompatibility Risk: Adding a single private helper method changes the SHA-1 hash, making previously saved files unreadable!");\r
        System.out.println("  3. Cross-Compiler Stability: Different Java compilers (Oracle javac vs Eclipse ECJ) can generate different hashes for the same class!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,n=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 8: serialVersionUID Field\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. serialVersionUID RULES:\r
   - Must be: 'private static final long serialVersionUID = 1L;'.\r
   - Acts as a versioning fingerprint.\r
   - Prevents auto-hash instability across compiler versions.\r
   - Allows backward-compatible class evolution.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why does Effective Java Item 86 mandate: 'Declare an explicit serialVersionUID in every serializable class'?",shortAnswer:"If you omit 'serialVersionUID', the Java compiler automatically computes a 64-bit cryptographic SHA-1 hash based on the class structure, methods, field names, and compiler flags. Even a trivial change (like adding a private helper method or changing a compiler version) alters this auto-generated hash, triggering fatal 'InvalidClassException' crashes when reading previously saved files.",explanation:"Declaring 'private static final long serialVersionUID = 1L;' guarantees backward compatibility.",hint:"Auto-computed hashes change on minor edits or compiler shifts, corrupting previously serialized files.",level:"Intermediate",codeExample:"private static final long serialVersionUID = 1L; // Mandatory best practice"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Versioning Fingerprint"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-purple-400 font-mono",children:"serialVersionUID"})," Field: Versioning Contract & Hash Calculation"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply Effective Java Item 86: declaring explicit ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"serialVersionUID"})," constants to prevent compiler SHA-1 hash drift and maintain backward stream compatibility."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"SerialVersionUIDContractDemo.java",highlightLines:[7,10,14,15,23,33,34,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"serialVersionUID FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:n,title:"Module 005_005 Topic 8: serialVersionUID Contract",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic8_serial_version_uid_note.txt"})}),e.jsx(i,{note:"Always write 'private static final long serialVersionUID = 1L;' in every Serializable class! Without it, adding a simple comment or method can change the hash and make all existing saved files unreadable! — Sukanta Hui"})]})}export{g as default};
