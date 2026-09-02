import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as s}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const t=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 7: Sealed Hierarchy Modifiers - final, sealed, non-sealed\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class SealedHierarchyModifiersDemo {\r
\r
    // Root Sealed Class\r
    public abstract static sealed class AcademicCourse permits JavaCoreCourse, WebCourse, OpenCourse {}\r
\r
    // Option 1: FINAL - Completely closed (No further subclassing allowed)\r
    public static final class JavaCoreCourse extends AcademicCourse {}\r
\r
    // Option 2: SEALED - Cascaded restriction (Permits only specific sub-subclasses)\r
    public static sealed class WebCourse extends AcademicCourse permits ReactCourse, AngularCourse {}\r
    public static final class ReactCourse extends WebCourse {}\r
    public static final class AngularCourse extends WebCourse {}\r
\r
    // Option 3: NON-SEALED - Re-opened (Anyone can extend OpenCourse freely!)\r
    public static non-sealed class OpenCourse extends AcademicCourse {}\r
    public static class CommunityCourse extends OpenCourse {} // Legal!\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: SEALED HIERARCHY MODIFIERS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 3 MANDATORY SUBCLASS MODIFIERS:");\r
        System.out.println("  1. 'final'      : Prevents any further inheritance (JavaCoreCourse).");\r
        System.out.println("  2. 'sealed'     : Continues restricted inheritance down another level (WebCourse).");\r
        System.out.println("  3. 'non-sealed' : Unlocks the hierarchy; any class can extend it (OpenCourse).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 7: Sealed Hierarchy Modifiers\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 3 SUBCLASS MODIFIER OPTIONS:\r
   - A permitted subclass of a sealed class MUST declare one of the following:\r
     1. 'final'      : Cannot be extended any further.\r
     2. 'sealed'     : Must define its own 'permits' clause.\r
     3. 'non-sealed' : Re-opens the hierarchy for open extension by any class.\r
\r
2. COMPILATION ENFORCEMENT:\r
   - Omitting all 3 modifiers on a permitted subclass causes a compile-time error.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What happens if a permitted subclass of a sealed class does not declare final, sealed, or non-sealed?",shortAnswer:"A compile-time error occurs. Java syntax mandates that every permitted subclass must explicitly declare whether it is final, sealed, or non-sealed.",explanation:"Ensures the author of the subclass explicitly declares its extension policy.",hint:"Causes a compilation error; one of the three modifiers is mandatory.",level:"Beginner",codeExample:"public class Sub extends SealedParent {} // COMPILE ERROR: missing final/sealed/non-sealed"},{question:"What is the purpose of the non-sealed keyword?",shortAnswer:"The non-sealed keyword allows a permitted subclass to opt out of the sealed restriction and re-open itself for unrestricted inheritance by any other class.",explanation:"Provides flexibility when a branch of a hierarchy needs open polymorphism.",hint:"Re-opens the hierarchy for open extension.",level:"Intermediate",codeExample:"public non-sealed class OpenBranch extends SealedRoot {}"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Sealed Hierarchy Modifiers: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"final, sealed & non-sealed Subclasses"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The 3 mandatory subclass modifiers: locking down with final, cascading with sealed, or opening up with non-sealed."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(s,{fileModule:t,title:"SealedHierarchyModifiersDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Modern Java Features FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_009 Topic 7: Sealed Hierarchy Modifiers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic7_sealed_hierarchy_modifiers_note.txt"})}),e.jsx(n,{note:"Every permitted subclass of a sealed class MUST declare exactly ONE of three modifiers: 1) final (no further subclasses), 2) sealed (cascade restrictions), or 3) non-sealed (open for anyone)! — Sukanta Hui"})]})}export{f as default};
