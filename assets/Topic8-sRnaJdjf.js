import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 8: Restriction 3: No Static Fields of Generic Type Parameter T\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
class SharedRepository<T> {\r
    // ILLEGAL DECLARATION (Will NOT compile):\r
    // private static T sharedItem; // COMPILE ERROR: Cannot make a static reference to the non-static type T!\r
\r
    // LEGAL: Instance fields can use type parameter T:\r
    private T instanceItem;\r
\r
    public SharedRepository(T item) { this.instanceItem = item; }\r
    public T getItem() { return instanceItem; }\r
}\r
\r
public class Restriction3NoStaticGenericFieldsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: RESTRICTION 3 - NO STATIC FIELDS OF TYPE T - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        SharedRepository<String> stringRepo = new SharedRepository<>("Swadeep Paul");\r
        SharedRepository<Integer> intRepo = new SharedRepository<>(101);\r
\r
        System.out.println(">>> 1. Independent Instance Repositories:");\r
        System.out.println("  String Repo: " + stringRepo.getItem());\r
        System.out.println("  Int Repo   : " + intRepo.getItem());\r
\r
        System.out.println("\\n>>> WHY STATIC FIELDS CANNOT USE TYPE PARAMETER <T>:");\r
        System.out.println("  1. Single Shared Metaspace Slot: Only ONE copy of a static variable exists for the entire class.");\r
        System.out.println("  2. Type Conflict: If 'static T sharedItem' existed, what type would it hold?");\r
        System.out.println("     - 'new SharedRepository<String>()' expects it to be String.");\r
        System.out.println("     - 'new SharedRepository<Integer>()' expects it to be Integer!");\r
        System.out.println("  3. Because there is only ONE static variable shared by all instances, having multiple types is impossible.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 8: Restriction 3 - No Static Type Fields\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTRICTION 3: NO STATIC FIELDS OF TYPE T:\r
   - 'private static T field;' is ILLEGAL.\r
   - Static fields are shared across all instances.\r
   - Type arguments differ per instance.\r
   - Prohibits memory and type conflicts in Metaspace.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does Java disallow declaring static fields of a generic type parameter (e.g. 'private static T sharedValue;')?",shortAnswer:"A static field is shared across ALL instances of the class regardless of their type arguments. If 'static T' were allowed, creating 'new Box<String>()' and 'new Box<Integer>()' would result in conflicting expectations for that single shared memory slot (is it a String or an Integer?). Since the JVM loads only one class definition, static generic fields are strictly prohibited.",explanation:"Core consequence of static memory layout in Java Metaspace.",hint:"Static fields are shared across all instances; multiple parameterized instances would conflict over its type.",level:"Intermediate",codeExample:"// private static T item; // Compilation Error: Non-static type T cannot be referenced"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restriction 3"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Restriction 3: Cannot Declare Static Fields of Type Parameter ",e.jsx("code",{className:"text-rose-400 font-mono",children:"T"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Analyze Metaspace class architecture: understanding why single static class slots cannot hold instance-parameterized generic type variables."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"Restriction3NoStaticGenericFieldsDemo.java",highlightLines:[7,10,11,14,15,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Static Fields FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 006_005 Topic 8: Restriction 3 - No Static Fields",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic8_restriction3_no_static_fields_note.txt"})}),e.jsx(a,{note:"Static variables belong to the Class, not to instances! If you had a 'static T', what would it be when Student creates Box<String> and Faculty creates Box<Integer>? It cannot be both, so Java bans static T! — Sukanta Hui"})]})}export{y as default};
