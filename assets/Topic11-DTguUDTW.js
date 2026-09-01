import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const a=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 11: High-Performance Enum Collections: java.util.EnumSet (Bit-Vector) & EnumMap\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
import java.util.EnumMap;\r
import java.util.EnumSet;\r
\r
public class EnumSetAndEnumMapHighPerformanceDemo {\r
\r
    public enum AccessPermission {\r
        READ, WRITE, EXECUTE, DELETE, AUDIT\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: EnumSet & EnumMap HIGH PERFORMANCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. EnumSet (Backed by a single 64-bit Long bit-vector! Extremely fast bitwise operations):\r
        EnumSet<AccessPermission> adminPermissions = EnumSet.allOf(AccessPermission.class);\r
        EnumSet<AccessPermission> studentPermissions = EnumSet.of(AccessPermission.READ, AccessPermission.EXECUTE);\r
        EnumSet<AccessPermission> writeOnlyRange = EnumSet.range(AccessPermission.WRITE, AccessPermission.DELETE);\r
\r
        System.out.println(">>> 1. java.util.EnumSet (Bit-Vector Backed Set):");\r
        System.out.println("  Admin Permissions   : " + adminPermissions);\r
        System.out.println("  Student Permissions : " + studentPermissions);\r
        System.out.println("  Write Range         : " + writeOnlyRange);\r
        System.out.println("  Student has WRITE?  : " + studentPermissions.contains(AccessPermission.WRITE));\r
\r
        // 2. EnumMap (Backed internally by a compact array indexed by ordinal! Faster than HashMap):\r
        EnumMap<AcademicBranch, Integer> branchEnrollments = new EnumMap<>(AcademicBranch.class);\r
        branchEnrollments.put(AcademicBranch.BARRACKPORE, 150);\r
        branchEnrollments.put(AcademicBranch.NAIHATI, 85);\r
        branchEnrollments.put(AcademicBranch.SHYAMNAGAR, 60);\r
\r
        System.out.println("\\n>>> 2. java.util.EnumMap (Compact Array-Backed Map):");\r
        branchEnrollments.forEach((branch, count) ->\r
                System.out.printf("  Center: %-12s -> Active Trainees: %d%n", branch, count)\r
        );\r
\r
        System.out.println("\\n>>> PERFORMANCE SUMMARY:");\r
        System.out.println("  - EnumSet operations execute at raw bitwise machine speed (O(1) bit shifts).");\r
        System.out.println("  - EnumMap eliminates hash collisions and rehashing (direct array indexing).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 11: EnumSet & EnumMap\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ENUMSET & ENUMMAP:\r
   - 'EnumSet.of(...)', 'EnumSet.allOf(...)', 'EnumSet.range(...)'.\r
   - EnumSet: Bit-vector representation (fastest possible Set).\r
   - EnumMap: Array-indexed Map without hashing or hash collisions.\r
   - Always prefer EnumSet/EnumMap whenever enum keys are used.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'java.util.EnumSet' vastly faster and more memory-efficient than 'java.util.HashSet' when storing enum constants?",shortAnswer:"'EnumSet' is backed internally by a single primitive 'long' (or array of longs) acting as a bit-vector. Adding, removing, or checking membership translates to single-cycle bitwise CPU operations (AND, OR, NOT), consuming practically zero heap memory and beating HashSet by orders of magnitude.",explanation:"Effective Java Item 36: Use EnumSet instead of bit fields.",hint:"Backed internally by a 64-bit long bit-vector running at hardware bit-shift speeds.",level:"Intermediate",codeExample:"EnumSet<Permission> set = EnumSet.of(Permission.READ, Permission.WRITE);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Specialized Collections"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["High-Performance Enum Collections: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"EnumSet"})," (Bit-Vector) & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"EnumMap"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Supercharge collection performance: using bit-vector backed ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"EnumSet"})," and array-indexed ",e.jsx("code",{className:"text-sky-300 font-mono",children:"EnumMap"})," for zero-collision lookups."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"EnumSetAndEnumMapHighPerformanceDemo.java",highlightLines:[7,10,19,20,21,29,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Enum Collections FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_008 Topic 11: Enum Collections",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic11_enum_collections_note.txt"})}),e.jsx(s,{note:"Never use HashSet for enums! EnumSet is backed by a 64-bit Long bitmask. Adding and checking elements takes literally 1 CPU clock cycle! It is the fastest collection in the entire Java runtime! — Sukanta Hui"})]})}export{x as default};
