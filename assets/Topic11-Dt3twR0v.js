import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 11: Marker / Tagging Interfaces: Concept and JVM Metadata Flags\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
import java.io.Serializable;\r
\r
public class MarkerInterfacesConceptDemo {\r
\r
    // CUSTOM MARKER INTERFACE: Completely EMPTY (0 fields, 0 methods)!\r
    // Purpose: Acts as a TYPE TAG / PERMISSION BADGE for runtime reflection / JVM checks.\r
    public interface SensitiveAuditRecord {}\r
\r
    public static class PublicNotice {\r
        public String title = "Barrackpore Lab Timings";\r
    }\r
\r
    // Tagged with Marker Interface\r
    public static class ConfidentialFinancialReport implements SensitiveAuditRecord, Serializable {\r
        private static final long serialVersionUID = 1L;\r
        public double quarterlyRevenue = 4500000.0;\r
    }\r
\r
    public static void auditObjectSecurity(Object obj) {\r
        // Runtime type inspection using 'instanceof':\r
        if (obj instanceof SensitiveAuditRecord) {\r
            System.out.println("  [CONFIDENTIAL ALERT] Object is tagged with SensitiveAuditRecord! Applying AES-256 encryption.");\r
        } else {\r
            System.out.println("  [STANDARD NOTICE] Public record. No special encryption needed.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: MARKER (TAGGING) INTERFACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        PublicNotice notice = new PublicNotice();\r
        ConfidentialFinancialReport report = new ConfidentialFinancialReport();\r
\r
        System.out.println(">>> 1. Auditing PublicNotice:");\r
        auditObjectSecurity(notice);\r
\r
        System.out.println("\\n>>> 2. Auditing ConfidentialFinancialReport:");\r
        auditObjectSecurity(report);\r
\r
        System.out.println("\\n>>> Classic Java Built-in Marker Interfaces:");\r
        System.out.println("  - java.lang.Cloneable       -> Authorizes Object.clone()");\r
        System.out.println("  - java.io.Serializable      -> Authorizes ObjectOutputStream serialization");\r
        System.out.println("  - java.rmi.Remote           -> Tags RMI distributed remote services");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 11: Marker / Tagging Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MARKER INTERFACE CHARACTERISTICS:\r
   - 0 methods, 0 fields.\r
   - Used as a type tag checked via 'if (obj instanceof Marker)'.\r
   - Built-in examples: Cloneable, Serializable, Remote, RandomAccess.\r
   - In modern Java, Annotations (@Tag) are often preferred for custom metadata.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a Marker (or Tagging) Interface in Java?",shortAnswer:"An interface that contains ZERO methods and ZERO constants (completely empty). It exists purely to deliver runtime type metadata to the JVM or frameworks (e.g. 'Cloneable', 'Serializable').",explanation:"Classes implement marker interfaces to 'tag' themselves as having special permissions or capabilities.",hint:"An empty interface (0 methods) used to tag classes for JVM / framework checks.",level:"Intermediate",codeExample:"public interface Serializable { /* empty */ }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Type Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Marker / Tagging Interfaces: ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"Cloneable"})," & ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"Serializable"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover how empty marker interfaces act as runtime capability badges for the JVM and enterprise frameworks: inspecting type tags without method overhead."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"MarkerInterfacesConceptDemo.java",highlightLines:[13,19,26,36,39]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Marker Interfaces FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_008 Topic 11: Marker Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic11_marker_interfaces_note.txt"})}),e.jsx(r,{note:"A marker interface doesn't tell a class what methods to write—it gives the class a VIP passport so the JVM knows it has permission to clone or serialize! — Sukanta Hui"})]})}export{b as default};
