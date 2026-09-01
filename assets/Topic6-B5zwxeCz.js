import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 6: Custom Fields, Properties & Constructors in Enums (HttpStatus, ErrorCode)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
public class CustomEnumPropertiesDemo {\r
\r
    // Advanced Enum with Custom Fields, Constructor & Getter Methods:\r
    public enum HttpResponseCode {\r
        OK(200, "Success"),\r
        CREATED(201, "Resource Created"),\r
        BAD_REQUEST(400, "Invalid Client Payload"),\r
        UNAUTHORIZED(401, "Authentication Required"),\r
        NOT_FOUND(404, "Requested Entity Missing"),\r
        INTERNAL_SERVER_ERROR(500, "Server Backend Crash");\r
\r
        // Immutable instance properties:\r
        private final int statusCode;\r
        private final String description;\r
\r
        // Enum constructor (Implicitly PRIVATE):\r
        HttpResponseCode(int code, String desc) {\r
            this.statusCode = code;\r
            this.description = desc;\r
        }\r
\r
        public int getStatusCode() { return statusCode; }\r
        public String getDescription() { return description; }\r
\r
        public boolean isSuccess() {\r
            return statusCode >= 200 && statusCode < 300;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: CUSTOM FIELDS & CONSTRUCTORS IN ENUMS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        HttpResponseCode response = HttpResponseCode.NOT_FOUND;\r
\r
        System.out.println(">>> 1. Inspecting Custom Enum Attributes:");\r
        System.out.println("  Enum Constant Name : " + response.name());\r
        System.out.println("  HTTP Status Code   : " + response.getStatusCode());\r
        System.out.println("  Description        : " + response.getDescription());\r
        System.out.println("  Is Success Status? : " + response.isSuccess());\r
\r
        System.out.println("\\n>>> 2. Full HTTP Catalog Inspection:");\r
        for (HttpResponseCode code : HttpResponseCode.values()) {\r
            System.out.printf("  [%d] %-22s -> %s (Success? %s)%n",\r
                    code.getStatusCode(), code.name(), code.getDescription(), code.isSuccess());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 6: Custom Enum Properties\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CUSTOM FIELDS & CONSTRUCTORS:\r
   - Constants listed first with constructor arguments: 'OK(200, "Success");'.\r
   - Fields should be 'private final' for immutability.\r
   - Semicolon ';' is mandatory after the last constant if members follow.\r
   - Constructor is implicitly private.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do you attach custom properties (like integer codes or description strings) to Java enum constants?",shortAnswer:`Declare final instance variables in the enum, define a private constructor accepting those parameters, and supply the arguments in parentheses right next to each constant declaration (e.g. 'OK(200, "Success")'). Add public getter methods to expose the values.`,explanation:"Constants must be listed FIRST before any fields, constructors, or methods.",hint:"Declare instance fields, add private constructor, and pass parameters to constants.",level:"Beginner",codeExample:"public enum Code { SUCCESS(0), ERROR(1); private final int c; Code(int c){this.c=c;} }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Rich Enums"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Adding Custom Fields, Properties & Constructors to Enums (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"HttpStatus"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"ErrorCode"}),")"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build rich object-oriented domain models: enriching enum constants with status codes, localized descriptions, and custom utility helper methods."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"CustomEnumPropertiesDemo.java",highlightLines:[7,10,11,12,13,14,15,19,20,23,24,25]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Custom Enum Properties FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 003_008 Topic 6: Custom Enum Properties",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic6_custom_enum_properties_note.txt"})}),e.jsx(r,{note:"In Java, enums are full-featured classes! You can add fields, constructors, getters, and business logic! Always make fields 'private final' so your enums remain completely immutable! — Sukanta Hui"})]})}export{h as default};
