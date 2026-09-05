import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as s}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const t=`/**\r
 * Java Core Tutorial - Module 009_009: Modern Java Features\r
 * Topic 8: Sealed Class Rules & Same-File Automatic Permits Inference\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.modern;\r
\r
public class SealedRulesInferenceDemo {\r
\r
    // 1. Same-File Permits Inference:\r
    // Notice NO 'permits' clause here! Because all subclasses are in this same file,\r
    // javac infers 'permits SuccessResponse, ErrorResponse' automatically!\r
    public sealed interface ApiResponse {}\r
\r
    public record SuccessResponse(String payload, long timestamp) implements ApiResponse {}\r
    public record ErrorResponse(int errorCode, String errorMessage) implements ApiResponse {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: SAME-FILE PERMITS INFERENCE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        ApiResponse res1 = new SuccessResponse("Data loaded successfully", System.currentTimeMillis());\r
        ApiResponse res2 = new ErrorResponse(404, "Student record missing");\r
\r
        System.out.println("1. Success Response: " + res1);\r
        System.out.println("2. Error Response  : " + res2);\r
\r
        System.out.println("\\n>>> SEALED INFERENCE RULES:");\r
        System.out.println("  - When subclasses are in the same .java file, 'permits' is optional.");\r
        System.out.println("  - Records can implement sealed interfaces directly (records are implicitly final!).");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_009: Modern Java Features\r
Topic 8: Sealed Rules & Same-File Inference\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PERMITS OMISSION RULE:\r
   - If all permitted subclasses or implementing records are declared in the SAME compilation\r
     unit (same .java file), the 'permits' clause can be omitted.\r
   - The compiler automatically discovers and populates the permitted list.\r
\r
2. RECORDS AS SEALED IMPLEMENTATIONS:\r
   - Java Records are implicitly 'final'.\r
   - Therefore, a record implementing a sealed interface fulfills the modifier requirement\r
     without needing to declare 'final'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"When is the 'permits' clause optional on a sealed class or interface?",shortAnswer:"When all permitted subclasses or records are declared within the same source file (.java file). The compiler infers the permits list automatically.",explanation:"Reduces boilerplate when defining closed algebraic sum types in one file.",hint:"When all subclasses are declared in the exact same .java source file.",level:"Intermediate",codeExample:"sealed interface Result {} record Ok() implements Result {} record Err() implements Result {}"},{question:"Why don't Java Records implementing a sealed interface need to declare the 'final' keyword?",shortAnswer:"Because all Java Records are implicitly final by specification. The compiler recognizes this and considers the sealed modifier requirement fully satisfied.",explanation:"Records cannot be extended, making them naturally sealed leaves.",hint:"Records are implicitly final by language specification.",level:"Beginner",codeExample:"record Success(String data) implements SealedResponse {} // Valid and implicitly final"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_009 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Modern Java Evolution"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Sealed Class Rules: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Module Boundaries & Same-File Inference"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Advanced sealed rules: automatic permits inference when subclasses reside in the same source file, and modular package constraints."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(s,{fileModule:t,title:"SealedRulesInferenceDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Modern Java Features FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 009_009 Topic 8: Sealed Rules & Same-File Inference",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_009_topic8_sealed_rules_inference_note.txt"})}),e.jsx(n,{note:"Pro tip: If your permitted subclasses are defined in the SAME .java source file as the sealed class, you can omit the permits clause entirely! The compiler infers it automatically! — Sukanta Hui"})]})}export{x as default};
