import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const r=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 7: Breaking Encapsulation - setAccessible(true) & Java 9+ Module Boundaries\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.reflect.Field;\r
import java.lang.reflect.InaccessibleObjectException;\r
\r
public class SetAccessibleModuleBoundariesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: SETACCESSIBLE & MODULE BOUNDARIES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Legal setAccessible within the application's own classes:\r
        PrivateStudent secret = new PrivateStudent("SECRET_TOKEN_7749");\r
        try {\r
            Field tokenField = PrivateStudent.class.getDeclaredField("secretToken");\r
            tokenField.setAccessible(true); // Suppress access check on our own class\r
            System.out.println("1. Successfully accessed private token: " + tokenField.get(secret));\r
        } catch (Exception ex) {\r
            System.err.println("1. Error: " + ex.getMessage());\r
        }\r
\r
        // 2. Attempting setAccessible on JDK Internal Modules (Java 9+ Strong Encapsulation):\r
        System.out.println("\\n>>> 2. ATTEMPTING DEEP REFLECTION ON JDK INTERNALS (e.g. String.value):");\r
        try {\r
            Field stringValueField = String.class.getDeclaredField("value");\r
            stringValueField.setAccessible(true); // Illegal in Java 17+ without --add-opens!\r
            System.out.println("   Accessed String.value byte array!");\r
        } catch (InaccessibleObjectException ex) {\r
            System.err.println("   [JPMS STRONG ENCAPSULATION ENFORCED]:");\r
            System.err.println("   " + ex.getClass().getSimpleName() + ": " + ex.getMessage());\r
            System.out.println("   --> Java Platform Module System (JPMS) prevents illegal reflective access to JDK internals!");\r
        } catch (NoSuchFieldException ex) {\r
            System.err.println("   Field not found: " + ex.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static class PrivateStudent {\r
        private final String secretToken;\r
        public PrivateStudent(String token) { this.secretToken = token; }\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 7: setAccessible(true) & Module Boundaries\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT SETACCESSIBLE(TRUE) DOES:\r
   - Inherited from 'java.lang.reflect.AccessibleObject'.\r
   - Suppresses Java language access control checks (private, protected, package-private)\r
     for the single reflective operation.\r
\r
2. JAVA 9+ JPMS STRONG ENCAPSULATION:\r
   - Java 9+ introduced the Java Platform Module System (JPMS).\r
   - In Java 17+, 'Strong Encapsulation' is enabled by default.\r
   - Calling 'setAccessible(true)' on an internal JDK package (e.g. 'java.lang', 'java.util')\r
     throws 'java.lang.reflect.InaccessibleObjectException'.\r
   - Fix: Must explicitly pass JVM flag '--add-opens java.base/java.lang=ALL-UNNAMED'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"What exception is thrown in Java 17+ when setAccessible(true) is invoked on an un-exported JDK internal class?",shortAnswer:"java.lang.reflect.InaccessibleObjectException (an unchecked exception introduced in Java 9 to enforce JPMS module boundary encapsulation).",explanation:"Java 17 finalized strong encapsulation of JDK internals by default.",hint:"InaccessibleObjectException",level:"Advanced",codeExample:"String.class.getDeclaredField('value').setAccessible(true); // Throws InaccessibleObjectException"},{question:"What JVM command-line argument allows legacy reflection on closed internal module packages?",shortAnswer:"--add-opens <module>/<package>=<target-module>, such as '--add-opens java.base/java.lang=ALL-UNNAMED'.",explanation:"Opens the specific package for deep reflection to the target module.",hint:"--add-opens <module>/<package>=<target>",level:"Intermediate",codeExample:"java --add-opens java.base/java.lang=ALL-UNNAMED -jar app.jar"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Breaking Encapsulation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"setAccessible(true) & Java 9 Module Boundaries"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Access suppression and module barriers: IllegalAccessException, InaccessibleObjectException, and the JPMS --add-opens command-line flag."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"SetAccessibleModuleBoundariesDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Reflection FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 010_001 Topic 7: setAccessible & Module Boundaries",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic7_setaccessible_module_boundaries_note.txt"})}),e.jsx(s,{note:"In Java 8, setAccessible(true) let you hack anything! But Java 9 JPMS introduced Strong Encapsulation: if a package in a named module is not opened to you, setAccessible(true) crashes with an InaccessibleObjectException! — Sukanta Hui"})]})}export{b as default};
