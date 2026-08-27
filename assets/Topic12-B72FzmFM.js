import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 12: Deserialization Security Vulnerabilities (OWASP Top 10) & Modern ObjectInputFilter (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.InvalidClassException;\r
import java.io.ObjectInputFilter;\r
import java.io.ObjectInputStream;\r
import java.io.ObjectOutputStream;\r
import java.io.Serializable;\r
\r
class SecureStudentBadge implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
    private final String studentId = "STU_BKP_101";\r
}\r
\r
class MaliciousPayloadObject implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
    private final String exploitCommand = "rm -rf /";\r
}\r
\r
public class DeserializationSecurityFilterCapstoneDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: DESERIALIZATION SECURITY & ObjectInputFilter - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. OWASP TOP 10 SECURITY WARNING (CWE-502: Insecure Deserialization):");\r
        System.out.println("  - Deserializing untrusted byte streams from the network is one of the most dangerous vulnerabilities in Java history.");\r
        System.out.println("  - Attackers craft gadget chains (e.g. Apache Commons Collections) that trigger Remote Code Execution (RCE) during readObject()!");\r
\r
        // Java 9+ Defense: ObjectInputFilter:\r
        System.out.println("\\n>>> 2. Java 9+ Defense: Configuring ObjectInputFilter (Allowlist Pattern):");\r
\r
        // Create serialized malicious payload:\r
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteBuffer)) {\r
            oos.writeObject(new MaliciousPayloadObject());\r
        }\r
        byte[] payloadBytes = byteBuffer.toByteArray();\r
\r
        // Safe Deserialization with strict Allowlist Filter:\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(payloadBytes))) {\r
            // STRICT ALLOWLIST: Only allow SecureStudentBadge; reject everything else!\r
            ObjectInputFilter filter = ObjectInputFilter.Config.createFilter(\r
                    "com.coderaccotax.javatutorial.serialization.SecureStudentBadge;!*"\r
            );\r
            ois.setObjectInputFilter(filter);\r
\r
            System.out.println("  [FILTER APPLIED] Allowlist: SecureStudentBadge ONLY. Rejecting all other classes.");\r
            ois.readObject(); // Blocked by filter!\r
        } catch (InvalidClassException e) {\r
            System.out.println("  [SECURITY DEFENSE ACTIVATED] Filter REJECTED untrusted class: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 005_005 OBJECT SERIALIZATION & TRANSIENT 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 12: Serialization Security Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 005_005 SUMMARY:\r
   - Serialization converts object graphs into byte streams (0xACED header).\r
   - Deserialization reconstructs objects without running constructors.\r
   - 'Serializable' marker interface opt-in.\r
   - 'transient' fields are skipped (default null/0 on load).\r
   - 'static' fields belong to Metaspace and are never serialized.\r
   - Always declare 'private static final long serialVersionUID = 1L;'.\r
   - InvalidClassException occurs on UID mismatch.\r
   - Custom writeObject/readObject for encryption.\r
   - Externalizable for total manual control.\r
   - Always use ObjectInputFilter on untrusted network streams!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is deserializing untrusted data considered one of the most critical security vulnerabilities (CWE-502 / OWASP Top 10), and how does 'ObjectInputFilter' resolve it?",shortAnswer:"Untrusted serialized data can contain malicious 'Gadget Chains' (nested classes whose readObject methods execute arbitrary operating system commands, leading to Remote Code Execution). Java 9 introduced 'ObjectInputFilter', allowing developers to enforce strict allowlists of permissible classes, maximum stream depths, and array sizes before any class bytecode is instantiated.",explanation:"Effective Java Item 85: Prefer alternatives to Java serialization (JSON, Protocol Buffers).",hint:"Untrusted bytes can trigger Remote Code Execution via gadget chains; ObjectInputFilter enforces class allowlists.",level:"Advanced",codeExample:'ois.setObjectInputFilter(ObjectInputFilter.Config.createFilter("com.app.Model;!*"));'}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Security Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Deserialization Security Vulnerabilities (OWASP Top 10) & ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ObjectInputFilter"})," (Capstone)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Harden enterprise applications against Remote Code Execution: applying Java 9+ ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ObjectInputFilter"})," allowlists to block untrusted gadget chain attacks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"DeserializationSecurityFilterCapstoneDemo.java",highlightLines:[7,10,13,14,18,19,41,42,43,44,47]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Security FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 005_005 Topic 12: Serialization Security Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic12_serialization_security_note.txt"})}),e.jsx(n,{note:"Congratulations on completing Module 005_005! You have mastered Object Serialization, Deserialization, transient modifiers, serialVersionUID versioning, Externalizable protocols, and OWASP ObjectInputFilter defense! — Sukanta Hui"})]})}export{S as default};
