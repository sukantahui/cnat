import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 010_002: Java Annotations & Custom Processors\r
 * Topic 3: @Retention Deep Dive - SOURCE vs CLASS vs RUNTIME\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.annotations;\r
\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
\r
public class RetentionPoliciesDeepDiveDemo {\r
\r
    // 1. SOURCE RETENTION: Discarded by compiler (Never in .class bytecode)\r
    @Retention(RetentionPolicy.SOURCE)\r
    public @interface SourceLevelCheck { String note(); }\r
\r
    // 2. CLASS RETENTION: Retained in .class bytecode, but DISCARDED by JVM at runtime (Default!)\r
    @Retention(RetentionPolicy.CLASS)\r
    public @interface BytecodeLevelAudit { String auditor(); }\r
\r
    // 3. RUNTIME RETENTION: Retained in .class AND loaded into JVM memory for Reflection\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface RuntimeInspector { String role(); }\r
\r
    // Annotated Class:\r
    @SourceLevelCheck(note = "Verified for Barrackpore Academy syllabus")\r
    @BytecodeLevelAudit(auditor = "Bytecode Tool ASM")\r
    @RuntimeInspector(role = "STUDENT_ADMIN")\r
    public static class SampleEntity {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: RETENTION POLICIES DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Class<?> clazz = SampleEntity.class;\r
\r
        System.out.println(">>> TESTING RUNTIME REFLECTION VISIBILITY OF THE 3 RETENTION POLICIES:");\r
        System.out.println("  - Is @SourceLevelCheck present at runtime?  : " + clazz.isAnnotationPresent(SourceLevelCheck.class) + " (FALSE - Erased by javac)");\r
        System.out.println("  - Is @BytecodeLevelAudit present at runtime?: " + clazz.isAnnotationPresent(BytecodeLevelAudit.class) + " (FALSE - Ignored by JVM)");\r
        System.out.println("  - Is @RuntimeInspector present at runtime? : " + clazz.isAnnotationPresent(RuntimeInspector.class) + " (TRUE! - Loaded in memory)");\r
\r
        System.out.println("\\n>>> RETENTION POLICY SUMMARY:");\r
        System.out.println("  1. SOURCE  : Used by javac / IDEs / Lombok (Zero bytecode footprint).");\r
        System.out.println("  2. CLASS   : Used by bytecode analysis tools (FindBugs, Sonar, default).");\r
        System.out.println("  3. RUNTIME : Required for Spring DI, Hibernate, JUnit, Jackson.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_002: Java Annotations & Custom Processors\r
Topic 3: @Retention Policies Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 RETENTION POLICIES ('java.lang.annotation.RetentionPolicy'):\r
   -----------------------------------------------------------------------------\r
   POLICY             STORED IN .CLASS?   LOADED BY JVM?   VISIBLE VIA REFLECTION?\r
   -----------------------------------------------------------------------------\r
   SOURCE             NO (Erased by javac) NO              NO\r
   CLASS (Default)    YES                 NO (Dropped by VM) NO\r
   RUNTIME            YES                 YES              YES\r
   -----------------------------------------------------------------------------\r
\r
2. DEFAULT POLICY:\r
   - If '@Retention' is not specified on a custom annotation, it defaults to 'RetentionPolicy.CLASS'.\r
   - Common Pitfall: Forgetting '@Retention(RetentionPolicy.RUNTIME)' causes 'clazz.getAnnotation()'\r
     to return 'null' at runtime!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the default retention policy if @Retention is omitted from a custom annotation?",shortAnswer:"RetentionPolicy.CLASS is the default. The annotation is recorded in the .class bytecode file but is not loaded into JVM memory at runtime, making it invisible to Reflection.",explanation:"One of the most common beginner bugs in custom annotation development.",hint:"RetentionPolicy.CLASS",level:"Beginner",codeExample:"public @interface MissingRetention {} // Defaults to CLASS (invisible at runtime)"},{question:"Why does Lombok use RetentionPolicy.SOURCE for its annotations?",shortAnswer:"Because Lombok processes annotations during compilation (via Annotation Processing API) to generate getters/setters directly into bytecode, rendering the annotations unnecessary in the compiled .class files at runtime.",explanation:"Keeps bytecode lean and eliminates runtime overhead.",hint:"Lombok generates code at compile time, so runtime retention is not needed.",level:"Intermediate",codeExample:"@Getter @Setter // Discarded after bytecode is generated"}];function R(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_002 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Java Annotations & APT"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"@Retention"})," Deep Dive: SOURCE vs CLASS vs RUNTIME Policies"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Lifecycle architectures: compile-time discarding (SOURCE), bytecode retention without JVM loading (CLASS), and reflection availability (RUNTIME)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"RetentionPoliciesDeepDiveDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Java Annotations FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:a,title:"Module 010_002 Topic 3: @Retention Policies Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_002_topic3_retention_policies_deep_dive_note.txt"})}),e.jsx(i,{note:"RetentionPolicy.SOURCE is erased by javac (like @Override). RetentionPolicy.CLASS is in .class but ignored by JVM (default). RetentionPolicy.RUNTIME is loaded into JVM memory for Reflection! — Sukanta Hui"})]})}export{R as default};
