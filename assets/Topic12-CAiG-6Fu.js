import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 12: map(Function) on Optional - Safe 1-to-1 Value Transformation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class MapFunctionOptionalDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: MAP(FUNCTION) ON OPTIONAL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<StudentProfile> studentOpt = Optional.of(\r
            new StudentProfile(101, "Swadeep Paul", "Barrackpore", 94.0)\r
        );\r
\r
        // 1. Transforming StudentProfile -> String (Extracting Name)\r
        Optional<String> nameOpt = studentOpt.map(StudentProfile::name);\r
        System.out.println("1. Extracted Name Optional: " + nameOpt);\r
\r
        // 2. Transforming String -> Integer (Length calculation)\r
        Optional<Integer> lengthOpt = nameOpt.map(String::length);\r
        System.out.println("2. Name Length Optional   : " + lengthOpt);\r
\r
        // 3. Null-Safety inside map(): If mapper returns null, map() returns Optional.empty()!\r
        Optional<String> nullMapping = studentOpt.map(s -> (String) null);\r
        System.out.println("\\n3. Mapper returning null becomes: " + nullMapping + " (NO NPE!)");\r
\r
        // 4. Transforming on an EMPTY Optional: mapper is safely skipped\r
        Optional<StudentProfile> emptyStudent = Optional.empty();\r
        Optional<String> emptyName = emptyStudent.map(StudentProfile::name);\r
        System.out.println("4. Mapping on Empty Optional  : " + emptyName);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record StudentProfile(int id, String name, String center, double score) {}\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 12: map(Function) on Optional\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: '<U> Optional<U> map(Function<? super T, ? extends U> mapper)'.\r
   - If a value is present, applies the mapping function to it.\r
   - If the mapping function returns a non-null result 'r', returns 'Optional.ofNullable(r)'.\r
   - If the mapping function returns null OR the Optional is empty, returns 'Optional.empty()'.\r
\r
2. NULL-PROTECTION FEATURE:\r
   - 'map()' wraps the output of the function using 'Optional.ofNullable()', automatically\r
     absorbing any null values produced by getter methods.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What happens if the function passed to Optional.map() returns null?",shortAnswer:"Optional.map() automatically converts the null result into Optional.empty() using Optional.ofNullable() under the hood, preventing NullPointerExceptions.",explanation:"Protects against legacy getter methods returning null.",hint:"Returns Optional.empty() safely.",level:"Intermediate",codeExample:"Optional.of('text').map(s → (String) null); // Returns Optional.empty()"},{question:"How does Optional.map() prevent nested null checks in deep object graphs?",shortAnswer:"By chaining map() calls: studentOpt.map(Student::getAddress).map(Address::getCity).orElse('Default'). If any intermediate getter returns null or is empty, the pipeline immediately resolves to Optional.empty().",explanation:"Flattens what would otherwise be a deeply nested if-null tree.",hint:"Chaining map() calls propagates empty state safely across the graph.",level:"Beginner",codeExample:"userOpt.map(User::getProfile).map(Profile::getEmail).orElse('no-email');"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 12"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"map(Function)"}),": Safe 1-to-1 Transformations on Optional"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Null-safe property navigation: extracting fields, transforming datatypes, and automatic Optional wrapping of non-null results."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(n,{fileModule:o,title:"MapFunctionOptionalDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Optional & Null-Safe Programming FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:l,title:"Module 009_008 Topic 12: map(Function) on Optional",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic12_map_function_optional_note.txt"})}),t.jsx(r,{note:"If the function passed to map() returns null, map() automatically converts the result into Optional.empty() for you! No NullPointerException possible! — Sukanta Hui"})]})}export{x as default};
