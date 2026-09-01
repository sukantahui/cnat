import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 5: Record Limitations & Serialization Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
import java.io.Serializable;\r
\r
public class RecordLimitationsArchitectureDemo {\r
\r
    // 1. Valid: Record implementing interfaces (Serializable, Comparable)\r
    public record SecuredStudentToken(int studentId, String token, long expiryEpoch) implements Serializable {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: RECORD LIMITATIONS & ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4 HARD ARCHITECTURAL RULES OF JAVA RECORDS:");\r
        System.out.println("  1. Cannot extend any class (Records already implicitly extend java.lang.Record).");\r
        System.out.println("  2. Cannot be extended by any class (Records are implicitly 'final').");\r
        System.out.println("  3. Cannot declare additional non-static instance fields (All instance state must be in header).");\r
        System.out.println("  4. Cannot declare native methods.\\n");\r
\r
        System.out.println(">>> SAFE SERIALIZATION ARCHITECTURE:");\r
        System.out.println("  - Traditional Java serialization bypasses constructors via reflection (a massive security hole).");\r
        System.out.println("  - Record serialization ALWAYS invokes the Canonical Constructor, guaranteeing invariant validation!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 5: Record Limitations & Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT RECORDS CANNOT DO:\r
   - Cannot extend another class ('extends AnyClass' is a compilation error).\r
   - Cannot be subclassed ('class SubRecord extends MyRecord' is a compilation error).\r
   - Cannot declare extra instance fields ('private int extraState;' is a compilation error).\r
   - Cannot be abstract.\r
\r
2. WHAT RECORDS CAN DO:\r
   - Implement interfaces ('implements Serializable, Cloneable').\r
   - Declare static fields, static methods, static initializers.\r
   - Declare local records inside methods (Java 16+).\r
   - Declare generic type parameters ('record Pair<K, V>(K key, V value) {}').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Can you declare an extra private instance field inside the body of a Java Record?",shortAnswer:"No! A Record cannot declare any instance fields outside of the component list specified in the record header. Doing so produces a compile-time error.",explanation:"Records guarantee that their state is 100% defined by their header components.",hint:"Compile-time error; all instance fields must be in the header.",level:"Beginner",codeExample:"record User(String name) { private int age; // COMPILE ERROR! }"},{question:"Why is serialization of Java Records more secure than traditional Java class serialization?",shortAnswer:"Traditional class serialization bypasses constructors and injects byte fields directly into memory. Record deserialization strictly calls the canonical constructor, ensuring all compact constructor validation rules are enforced.",explanation:"Prevents object state tampering attacks.",hint:"Record deserialization always calls the canonical constructor.",level:"Advanced",codeExample:"Deserialization invokes: new RecordName(c1, c2...)"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Record Architectural Limitations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Immutability, Inheritance & Serialization"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understanding the boundaries: why records cannot extend classes, why instance fields cannot be added, and transparent safe serialization."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"RecordLimitationsArchitectureDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Modern Java Features FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_009 Topic 5: Record Limitations & Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic5_record_limitations_architecture_note.txt"})}),e.jsx(r,{note:"Records cannot declare additional non-static instance fields, cannot extend classes, and cannot be extended! They are designed purely as transparent data carriers! — Sukanta Hui"})]})}export{y as default};
