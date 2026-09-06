import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 5: Using Enums in Modern Switch Statements & Switch Expressions (Java 14+)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
public class EnumSwitchExpressionsDemo {\r
\r
    public enum DeliveryStatus {\r
        ORDER_PLACED,\r
        PACKED,\r
        OUT_FOR_DELIVERY,\r
        DELIVERED,\r
        CANCELLED\r
    }\r
\r
    // Modern Java 14+ Arrow Switch Expression:\r
    public static String getStatusBadge(DeliveryStatus status) {\r
        return switch (status) {\r
            case ORDER_PLACED    -> "Order Received at Barrackpore Warehouse";\r
            case PACKED          -> "Package Sealed & Invoiced";\r
            case OUT_FOR_DELIVERY-> "Courier Agent Dispatched (Naihati Route)";\r
            case DELIVERED       -> "Successfully Handed to Customer";\r
            case CANCELLED       -> "Order Terminated & Refund Issued";\r
            // NOTE: No 'default' branch needed if ALL enum cases are exhaustively covered!\r
        };\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: ENUMS IN MODERN SWITCH EXPRESSIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Tracking Order Lifecycle via Exhaustive Switch Expression:");\r
        System.out.println("  Status 1: " + getStatusBadge(DeliveryStatus.ORDER_PLACED));\r
        System.out.println("  Status 2: " + getStatusBadge(DeliveryStatus.OUT_FOR_DELIVERY));\r
        System.out.println("  Status 3: " + getStatusBadge(DeliveryStatus.DELIVERED));\r
\r
        System.out.println("\\n>>> COMPILE-TIME EXHAUSTIVENESS:");\r
        System.out.println("  If you add a new constant 'RETURNED' to DeliveryStatus tomorrow,");\r
        System.out.println("  the Java compiler will automatically fail with a compile error until you handle it in your switch!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 5: Enums in Modern Switch Expressions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. SWITCH EXPRESSION RULES:\r
   - Modern arrow syntax: 'case ACTIVE → "Active"'.\r
   - Exhaustiveness: If all constants are covered, no 'default' is needed.\r
   - Adding new constants triggers compile-time warnings for missing cases.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why are Enums exceptionally powerful when paired with modern Java Switch Expressions (Java 14+)?",shortAnswer:"Because switch expressions over Enums provide 'Compile-Time Exhaustiveness Checking'. If all enum constants are covered, no 'default' branch is required. If a new constant is added to the enum later, the compiler immediately flags every switch expression in the codebase that forgot to handle it.",explanation:"Eliminates subtle runtime missing-branch bugs across large codebases.",hint:"Provides compile-time exhaustiveness checking without requiring a default branch.",level:"Intermediate",codeExample:'String text = switch (status) { case ACTIVE → "On"; case INACTIVE → "Off"; };'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Switch"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Using Enums in Modern Switch Statements & Expressions (Java 14+)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Write elegant pattern matching: leveraging arrow switch expressions, compiler exhaustiveness verification, and eliminating boilerplate break statements."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"EnumSwitchExpressionsDemo.java",highlightLines:[7,16,17,18,19,20,21,22,30,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Enum Switch FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 003_008 Topic 5: Enums in Switch Expressions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic5_enum_switch_note.txt"})}),e.jsx(r,{note:"With modern arrow switch expressions, you don't even need a 'default:' case if you handle all enum constants! The compiler will alert you the second you add a new constant! — Sukanta Hui"})]})}export{x as default};
