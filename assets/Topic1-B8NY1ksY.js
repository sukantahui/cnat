import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 003_003: Wrapper Classes, Autoboxing & Number Parsing\r
 * Topic 1: The 8 Wrapper Classes Corresponding to 8 Primitives\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.wrappers;\r
\r
public class EightWrapperClassesMappingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: THE 8 WRAPPER CLASSES MAPPING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("+-------------+---------------------+------------+----------------------+");\r
        System.out.println("| Primitive   | Wrapper Class       | Size (RAM) | Default Value        |");\r
        System.out.println("+-------------+---------------------+------------+----------------------+");\r
        System.out.println("| byte        | java.lang.Byte      | 8 bits     | (byte) 0             |");\r
        System.out.println("| short       | java.lang.Short     | 16 bits    | (short) 0            |");\r
        System.out.println("| int         | java.lang.Integer   | 32 bits    | 0                    |");\r
        System.out.println("| long        | java.lang.Long      | 64 bits    | 0L                   |");\r
        System.out.println("| float       | java.lang.Float     | 32 bits    | 0.0f                 |");\r
        System.out.println("| double      | java.lang.Double    | 64 bits    | 0.0d                 |");\r
        System.out.println("| char        | java.lang.Character | 16 bits    | '\\\\u0000'             |");\r
        System.out.println("| boolean     | java.lang.Boolean   | 1 bit JVM  | false                |");\r
        System.out.println("+-------------+---------------------+------------+----------------------+");\r
\r
        System.out.println("\\n>>> Notice the exact naming spelling difference:");\r
        System.out.println("  - 'int'  -> 'Integer'   (NOT 'Int')");\r
        System.out.println("  - 'char' -> 'Character' (NOT 'Char')");\r
        System.out.println("  - All 8 Wrapper classes are IMMUTABLE and marked FINAL!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_003: Wrapper Classes & Autoboxing\r
Topic 1: 8 Wrapper Classes Mapping\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 8 WRAPPERS:\r
   - byte    &rarr; Byte\r
   - short   &rarr; Short\r
   - int     &rarr; Integer\r
   - long    &rarr; Long\r
   - float   &rarr; Float\r
   - double  &rarr; Double\r
   - char    &rarr; Character\r
   - boolean &rarr; Boolean\r
   - All are 'public final class' and immutable.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Which two primitive types do not have wrapper classes named simply with their capitalized primitive name?",shortAnswer:"'int' maps to 'Integer' (not Int), and 'char' maps to 'Character' (not Char). The other six simply capitalize the primitive name (Byte, Short, Long, Float, Double, Boolean).",explanation:"All 8 wrapper classes are immutable and declared 'final'.",hint:"int -> Integer and char -> Character.",level:"Beginner",codeExample:"Integer i = 10; Character c = 'A';"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type Mapping"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"The 8 Wrapper Classes Matching 8 Primitives"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the exact one-to-one mapping across all 8 Java primitive types and their corresponding immutable, ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"final"})," wrapper classes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"EightWrapperClassesMappingDemo.java",highlightLines:[7,14,15,16,17,18,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"8 Wrapper Classes FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 003_003 Topic 1: 8 Wrapper Classes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_003_topic1_wrapper_mapping_note.txt"})}),e.jsx(n,{note:"Remember: All 8 wrapper classes are final and immutable! Once an Integer holds 100, its internal value can never be modified. — Sukanta Hui"})]})}export{g as default};
