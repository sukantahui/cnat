import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 5: java.io.NotSerializableException: Root Causes & Troubleshooting Unserializable References\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayOutputStream;\r
import java.io.NotSerializableException;\r
import java.io.ObjectOutputStream;\r
import java.io.Serializable;\r
\r
// Non-Serializable Helper Class (e.g. Third-party library class or runtime thread):\r
class LiveDatabaseConnection {\r
    private final String dbUrl = "jdbc:postgresql://localhost:5432/barrackpore_db";\r
}\r
\r
// Serializable Class holding a Non-Serializable field reference:\r
class UnsafeUserProfile implements Serializable {\r
    private static final long serialVersionUID = 1L;\r
    private final String userName = "Swadeep Paul";\r
    private final LiveDatabaseConnection connection = new LiveDatabaseConnection(); // FAILS SERIALIZATION!\r
}\r
\r
public class NotSerializableExceptionTroubleshootingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: NotSerializableException FORENSICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        UnsafeUserProfile profile = new UnsafeUserProfile();\r
\r
        try {\r
            ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
            try (ObjectOutputStream oos = new ObjectOutputStream(byteBuffer)) {\r
                oos.writeObject(profile); // EXPLODES at runtime!\r
            }\r
        } catch (NotSerializableException nse) {\r
            System.out.println(">>> 1. CAUGHT NotSerializableException:");\r
            System.out.println("  Offending Class Name : " + nse.getMessage());\r
            System.out.println("  Exception Type       : " + nse.getClass().getName());\r
\r
            System.out.println("\\n>>> 2. HOW TO RESOLVE NotSerializableException IN 3 WAYS:");\r
            System.out.println("  Solution 1: Make the offending class implement 'Serializable'.");\r
            System.out.println("  Solution 2: Mark the offending field as 'transient' (e.g. 'private transient LiveDatabaseConnection conn;').");\r
            System.out.println("  Solution 3: Implement custom 'writeObject()' and 'readObject()' methods.");\r
        } catch (Exception e) {\r
            e.printStackTrace();\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 5: NotSerializableException Forensics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. NotSerializableException DIAGNOSTICS:\r
   - Thrown when an object in the graph lacks 'Serializable' marker.\r
   - 'ex.getMessage()' returns the exact offending class name.\r
   - Solutions:\r
     1. Add 'implements Serializable'.\r
     2. Mark field 'transient'.\r
     3. Implement custom 'writeObject()' and 'readObject()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What does the error message in a 'java.io.NotSerializableException' represent, and how do you fix it?",shortAnswer:"The message of 'NotSerializableException' contains the fully qualified class name of the specific offending object that failed the 'instanceof Serializable' check. To fix it: 1. Add 'implements Serializable' to the offending class (if you own the source code). 2. Mark the field as 'transient' (if it holds runtime resources like DB connections or threads).",explanation:"The most common runtime defect in Java serialization architectures.",hint:"The exception message is the exact class name that lacks 'implements Serializable'; mark field transient or implement it.",level:"Beginner",codeExample:"private transient Thread worker; // Resolves NotSerializableException"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Serialization Diagnostic"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-rose-400 font-mono",children:"NotSerializableException"}),": Root Causes & Troubleshooting"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Debug serialization failures: identifying un-serializable references from exception messages and applying the 3 canonical fixes including the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"transient"})," keyword."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"NotSerializableExceptionTroubleshootingDemo.java",highlightLines:[7,10,14,15,18,19,21,33,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"NotSerializableException FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 005_005 Topic 5: NotSerializableException Forensics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic5_not_serializable_exception_note.txt"})}),e.jsx(r,{note:"When you see NotSerializableException, look at the message! It will print the exact class name (e.g. 'com.app.LiveDatabaseConnection') that broke the chain! Just mark that field 'transient' to fix it! — Sukanta Hui"})]})}export{h as default};
