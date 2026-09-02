import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 3: Built-in Enum Methods: name(), ordinal(), values() & valueOf()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
public class BuiltInEnumMethodsDemo {\r
\r
    public enum TraineeStatus {\r
        REGISTERED,\r
        IN_TRAINING,\r
        GRADUATED,\r
        PLACED\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: BUILT-IN ENUM METHODS SUITE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TraineeStatus current = TraineeStatus.IN_TRAINING;\r
\r
        // 1. name() -> Exact declared name as String:\r
        System.out.println(">>> 1. current.name()    : " + current.name());\r
\r
        // 2. ordinal() -> Zero-based position index (Avoid relying on ordinal in production databases!):\r
        System.out.println(">>> 2. current.ordinal() : " + current.ordinal() + " (Position 1)");\r
\r
        // 3. values() -> Static array of all constants in declaration order:\r
        System.out.println("\\n>>> 3. TraineeStatus.values() Array:");\r
        for (TraineeStatus s : TraineeStatus.values()) {\r
            System.out.printf("  - %-12s (Ordinal: %d)%n", s.name(), s.ordinal());\r
        }\r
\r
        // 4. valueOf(String) -> Parses String to Enum constant (Case-Sensitive!):\r
        TraineeStatus parsed = TraineeStatus.valueOf("PLACED");\r
        System.out.println("\\n>>> 4. TraineeStatus.valueOf("PLACED"): " + parsed);\r
\r
        // IllegalArgumentException if name does not exist:\r
        try {\r
            TraineeStatus.valueOf("UNKNOWN_STATUS");\r
        } catch (IllegalArgumentException e) {\r
            System.out.println(">>> 5. Caught IllegalArgumentException for invalid valueOf string!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 3: Built-in Enum Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE ENUM METHODS:\r
   - 'name()'            : Returns exact name String ('IN_TRAINING').\r
   - 'ordinal()'         : Returns 0-based declaration index (avoid for DB storage).\r
   - 'values()'          : Returns array of all constants in order.\r
   - 'valueOf("NAME")'   : Parses string to enum (throws IllegalArgumentException).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does Effective Java Item 35 strongly advise against relying on 'enum.ordinal()' for business logic or database persistence?",shortAnswer:"Because 'ordinal()' represents the zero-based declaration order. If a developer reorders constants, inserts a new constant in the middle, or deletes an obsolete constant, all ordinal integer values shift, corrupting persisted database records and business rankings.",explanation:"Store enum names ('String') or explicit integer codes in custom fields instead.",hint:"Reordering enum constants changes ordinal values, breaking stored database records.",level:"Intermediate",codeExample:"int pos = status.ordinal(); // DANGEROUS for database persistence"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Built-in Methods"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Built-in Enum Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"name()"}),", ",e.jsx("code",{className:"text-amber-400 font-mono",children:"ordinal()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"values()"})," & ",e.jsx("code",{className:"text-purple-400 font-mono",children:"valueOf()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the standard enum utility suite: iterating array constants with ",e.jsx("code",{className:"text-sky-300 font-mono",children:"values()"}),", parsing strings with ",e.jsx("code",{className:"text-purple-300 font-mono",children:"valueOf()"}),", and avoiding ordinal database persistence pitfalls."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"BuiltInEnumMethodsDemo.java",highlightLines:[7,10,11,12,13,23,26,30,31,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Built-in Methods FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 003_008 Topic 3: Built-in Enum Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic3_builtin_enum_methods_note.txt"})}),e.jsx(r,{note:"Never store ordinal() in MySQL database columns! If someone adds a new enum constant at the top tomorrow, ordinal 0 becomes 1 and your entire database records will be scrambled! Store name() or a custom code! — Sukanta Hui"})]})}export{g as default};
