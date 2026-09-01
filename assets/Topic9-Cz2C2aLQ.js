import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 005_005: Object Serialization & The transient Keyword\r
 * Topic 9: java.io.InvalidClassException: Class Definition Evolution & UID Mismatch\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.serialization;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.ByteArrayOutputStream;\r
import java.io.InvalidClassException;\r
import java.io.ObjectInputStream;\r
import java.io.ObjectOutputStream;\r
import java.io.Serializable;\r
\r
class EvolvingUserProfile implements Serializable {\r
    // Current Version in Source Code:\r
    private static final long serialVersionUID = 200L;\r
\r
    private final String userName;\r
\r
    public EvolvingUserProfile(String name) { this.userName = name; }\r
}\r
\r
public class InvalidClassExceptionEvolutionDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: InvalidClassException FORENSICS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        EvolvingUserProfile profile = new EvolvingUserProfile("Swadeep Paul");\r
\r
        // 1. Serialize object with UID = 200L:\r
        ByteArrayOutputStream byteBuffer = new ByteArrayOutputStream();\r
        try (ObjectOutputStream oos = new ObjectOutputStream(byteBuffer)) {\r
            oos.writeObject(profile);\r
        } catch (Exception e) { e.printStackTrace(); }\r
\r
        byte[] serializedBytes = byteBuffer.toByteArray();\r
\r
        // 2. Corrupting serialized byte stream's UID bytes (simulating reading bytes from an older UID = 100L):\r
        // In serialized format, serialVersionUID is located at bytes 23-30:\r
        serializedBytes[29] = (byte) 0x64; // Changes 200L to 100L\r
\r
        System.out.println(">>> 1. Attempting to deserialize byte stream with UID Mismatch:");\r
        try (ObjectInputStream ois = new ObjectInputStream(new ByteArrayInputStream(serializedBytes))) {\r
            EvolvingUserProfile restored = (EvolvingUserProfile) ois.readObject();\r
            System.out.println("  Restored: " + restored);\r
        } catch (InvalidClassException ice) {\r
            System.out.println("  [CAUGHT InvalidClassException]");\r
            System.out.println("  Class Name       : " + ice.classname);\r
            System.out.println("  Diagnostic Message: " + ice.getMessage());\r
        } catch (Exception e) {\r
            System.out.println("  [ERROR] " + e);\r
        }\r
\r
        System.out.println("\\n>>> HOW TO EVOLVE CLASSES SAFELY WITHOUT BREAKING UID:");\r
        System.out.println("  1. Compatible Changes: Adding new fields (they receive default null/0 values in old streams).");\r
        System.out.println("  2. Incompatible Changes: Deleting fields, changing inheritance hierarchies, or modifying field types.");\r
        System.out.println("  3. Keep 'serialVersionUID' constant if changes are backward-compatible!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_005: Object Serialization & The transient Keyword\r
Topic 9: InvalidClassException Diagnostics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. InvalidClassException DIAGNOSTICS:\r
   - Thrown when stream UID != class UID.\r
   - Message displays: 'local class incompatible: stream classdesc serialVersionUID = X, local class serialVersionUID = Y'.\r
   - Compatible evolution: Keep UID identical when adding new fields.\r
   - Incompatible evolution: Increment UID when removing fields or altering types.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"When does the JVM throw a 'java.io.InvalidClassException' during deserialization?",shortAnswer:"The JVM throws 'InvalidClassException' when: 1. The 'serialVersionUID' recorded in the serialized byte stream does not match the 'serialVersionUID' of the class loaded in the local JVM. 2. The class definition contains unknown data types. 3. The class does not have an accessible no-arg constructor in its first non-serializable superclass.",explanation:"Protects applications from reading incompatible data layouts into memory.",hint:"Thrown when the stream UID does not match the loaded class UID or incompatible class changes occur.",level:"Intermediate",codeExample:'catch (InvalidClassException ice) { log.error("UID mismatch: " + ice.getMessage()); }'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_005 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Version Mismatch"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-rose-400 font-mono",children:"InvalidClassException"}),": Class Definition Evolution & UID Mismatches"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master schema versioning forensics: analyzing ",e.jsx("code",{className:"text-rose-300 font-mono",children:"InvalidClassException"})," diagnostics and safely evolving class definitions across release cycles."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"InvalidClassExceptionEvolutionDemo.java",highlightLines:[7,10,15,16,37,38,40,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"InvalidClassException FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 005_005 Topic 9: InvalidClassException Diagnostics",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_005_topic9_invalid_class_exception_note.txt"})}),e.jsx(r,{note:"If you change your Java class and bump the serialVersionUID from 1L to 2L, all files saved with version 1L will throw InvalidClassException! Keep UID unchanged if your edits are backward-compatible! — Sukanta Hui"})]})}export{y as default};
