import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 003_002: StringBuilder, StringBuffer & String Formatting\r
 * Topic 11: Real-World Architecture: Building SQL, JSON & HTML Templates (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.stringbuilder;\r
\r
public class RealWorldTemplateBuilderCapstoneDemo {\r
\r
    public static class EnterpriseReportGenerator {\r
\r
        // 1. Dynamic SQL Query Generator\r
        public static String buildAdmissionQuery(String hubCity, double minGpa) {\r
            return """\r
                    SELECT\r
                        t.id,\r
                        t.name,\r
                        t.gpa,\r
                        t.email\r
                    FROM trainees t\r
                    INNER JOIN academy_hubs h ON t.hub_id = h.id\r
                    WHERE h.city_name = '%s'\r
                      AND t.gpa >= %.2f\r
                    ORDER BY t.gpa DESC;\r
                    """.formatted(hubCity, minGpa);\r
        }\r
\r
        // 2. REST API JSON Payload Generator\r
        public static String buildApiResponseJson(String status, int count, String location) {\r
            return """\r
                    {\r
                      "meta": {\r
                        "status": "%s",\r
                        "timestamp": %d\r
                      },\r
                      "data": {\r
                        "totalEnrolled": %d,\r
                        "primaryHub": "%s"\r
                      }\r
                    }\r
                    """.formatted(status, System.currentTimeMillis(), count, location);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: REAL-WORLD TEMPLATE BUILDER CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Generated Enterprise SQL Statement:");\r
        String sql = EnterpriseReportGenerator.buildAdmissionQuery("Barrackpore", 9.0);\r
        System.out.println(sql);\r
\r
        System.out.println(">>> 2. Generated REST API JSON Payload:");\r
        String json = EnterpriseReportGenerator.buildApiResponseJson("SUCCESS", 125, "Barrackpore Hub");\r
        System.out.println(json);\r
\r
        System.out.println("==========================================================================");\r
        System.out.println(" MODULE 003_002 STRINGBUILDER & FORMATTING 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_002: StringBuilder, StringBuffer & String Formatting\r
Topic 11: Real-World Template Builder Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 003_002 SUMMARY:\r
   - Mutable string builders eliminate heap garbage during string assembly.\r
   - StringBuilder (Java 5) is unsynchronized and high-speed.\r
   - StringBuffer (Java 1.0) is synchronized and thread-safe.\r
   - Buffer default capacity = 16; growth formula = (old * 2) + 2.\r
   - Text Blocks (Java 15+) use triple quotes '"""' for multi-line JSON, SQL, and HTML.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How do modern Java Text Blocks and String.formatted() revolutionize enterprise database and microservice architectures?",shortAnswer:"They allow embedding multi-line SQL queries, REST JSON payloads, and HTML email templates directly inside Java classes with pristine readability, natural indentation, and type-safe interpolation, without escaping characters or concatenating strings.",explanation:"Standard practice in modern Spring Boot and JDBC repositories.",hint:"Provides pristine multi-line readability and zero-escaping template interpolation.",level:"Advanced",codeExample:'String sql = """SELECT * FROM users WHERE id = %d""".formatted(id);'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_002 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Architecture"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Real-World Architecture: Building SQL Queries, JSON Payloads & HTML Templates"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all mutable buffers, format specifiers, and Java 15 Text Blocks into an enterprise microservice reporting layer: generating dynamic SQL statements and formatted JSON payloads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"RealWorldTemplateBuilderCapstoneDemo.java",highlightLines:[12,13,23,27,28,40,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Template Capstone FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 003_002 Topic 11: Template Builder Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_002_topic11_template_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 003_002! You have mastered StringBuilder, StringBuffer, buffer capacity growth formulas, advanced format specifiers, and modern Java 15 Text Blocks! — Sukanta Hui"})]})}export{x as default};
