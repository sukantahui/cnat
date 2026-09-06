import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 2: Why 'extends' is Used for Both Classes AND Interfaces in Generics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.io.Serializable;\r
\r
// Custom Interface:\r
interface Identifiable {\r
    String getId();\r
}\r
\r
// Notice: In Java Generics, 'extends' is used for INTERFACES as well (NEVER write 'implements')!\r
class EntityRegistry<T extends Identifiable & Serializable> {\r
    public void logId(T entity) {\r
        System.out.println("  Entity Registered with ID : " + entity.getId());\r
    }\r
}\r
\r
class RegisteredStudent implements Identifiable, Serializable {\r
    private static final long serialVersionUID = 1L;\r
    private final String id;\r
\r
    public RegisteredStudent(String id) { this.id = id; }\r
    @Override public String getId() { return id; }\r
}\r
\r
public class ExtendsKeywordClassesAndInterfacesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: 'extends' FOR CLASSES & INTERFACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EntityRegistry<RegisteredStudent> registry = new EntityRegistry<>();\r
        registry.logId(new RegisteredStudent("STU_BKP_2026_001"));\r
\r
        System.out.println("\\n>>> WHY JAVA USES 'extends' INSTEAD OF 'implements':");\r
        System.out.println("  1. Keyword Economy: The Java language designers chose not to add a new keyword or overload 'implements' in generic declarations.");\r
        System.out.println("  2. Subtyping Relationship: In type theory, 'extends' represents the universal 'is-a-subtype-of' relationship.");\r
        System.out.println("  3. Syntax Rule: '<T implements MyInterface>' is a COMPILATION ERROR! Always write '<T extends MyInterface>'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 2: 'extends' Keyword in Generics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'extends' FOR INTERFACES:\r
   - In generics, 'extends' = 'is a subtype of'.\r
   - Applies to classes AND interfaces.\r
   - '<T extends List>' and '<T extends Runnable>' are correct.\r
   - '<T implements Runnable>' is INVALID and will not compile.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why does Java use the 'extends' keyword instead of 'implements' when bounding type parameters to interfaces (e.g. '<T extends Serializable>')?",shortAnswer:"In generic type theory, 'extends' is used as a universal keyword meaning 'is-a-subtype-of', encompassing both class inheritance ('subclass extends superclass') and interface implementation ('implementing class extends interface bound'). Writing '<T implements MyInterface>' is a compilation error in Java.",explanation:"Keyword economy in Java language design: 'extends' universally signifies subtyping in generics.",hint:"In generics, 'extends' means 'is-a-subtype-of' for both classes and interfaces; 'implements' is illegal.",level:"Beginner",codeExample:"public <T extends Runnable> void runAsync(T task) // Valid (never use 'implements')"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Subtype Theory"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"extends"})," is Used for Both Classes AND Interfaces"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Clarify generic type keywords: discovering why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"extends"}),' signifies the universal "is-a-subtype-of" relation for both classes and interfaces.']})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ExtendsKeywordClassesAndInterfacesDemo.java",highlightLines:[7,10,15,16,17,21,22,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Extends Keyword FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:a,title:"Module 006_003 Topic 2: 'extends' Keyword in Generics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic2_extends_keyword_note.txt"})}),e.jsx(r,{note:"Never write '<T implements Runnable>'! In Java generics, the keyword 'extends' is used for BOTH classes and interfaces because it means 'is a subtype of'! — Sukanta Hui"})]})}export{g as default};
