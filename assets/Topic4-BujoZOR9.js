import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 4: orElse(fallbackValue) - Eager Default Fallbacks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class OrElseFallbackDemo {\r
\r
    public static final String DEFAULT_ACADEMY_CENTER = "Barrackpore (Main Campus)";\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ORELSE(FALLBACK) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<String> assignedCenter = Optional.of("Naihati Training Lab");\r
        Optional<String> unassignedCenter = Optional.empty();\r
\r
        // 1. orElse with Present Optional: returns wrapped value\r
        String center1 = assignedCenter.orElse(DEFAULT_ACADEMY_CENTER);\r
        System.out.println("1. Present Student Center: " + center1);\r
\r
        // 2. orElse with Empty Optional: returns eager fallback constant\r
        String center2 = unassignedCenter.orElse(DEFAULT_ACADEMY_CENTER);\r
        System.out.println("2. Unassigned Student Center: " + center2);\r
\r
        // 3. String literal fallback\r
        Optional<String> studentDiscountCode = Optional.empty();\r
        String activeCode = studentDiscountCode.orElse("NO_DISCOUNT");\r
        System.out.println("3. Applied Discount Code: " + activeCode);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 4: orElse(fallbackValue)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'public T orElse(T other)'.\r
   - If a value is present, returns the value.\r
   - Otherwise, returns 'other'.\r
\r
2. WHEN TO USE ORELSE:\r
   - When the fallback is a constant literal (e.g. '"UNKNOWN"', '0', 'false').\r
   - When the fallback is a pre-existing static object ('Collections.emptyList()').\r
\r
3. CAVEAT (EAGER EVALUATION):\r
   - The argument inside 'orElse(expression)' is ALWAYS evaluated upfront, even if the\r
     Optional is NOT empty!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"When is orElse(value) the most appropriate choice for extracting an Optional?",shortAnswer:"When the fallback value is an already existing primitive, string literal, or static constant that requires zero computation or database access.",explanation:"Cheap constants are ideal for orElse().",hint:"When the fallback value is a cheap literal or existing constant.",level:"Beginner",codeExample:"String status = opt.orElse('ACTIVE');"},{question:"Is the argument expression passed into orElse() evaluated if the Optional contains a value?",shortAnswer:"Yes! Because Java evaluates method parameters eagerly before invoking the method, whatever is passed inside orElse(compute()) will be computed every time, even if the result is thrown away.",explanation:"To avoid eager execution of heavy methods, use orElseGet() with a lambda Supplier.",hint:"Yes, arguments in method calls are evaluated eagerly in Java.",level:"Intermediate",codeExample:"opt.orElse(heavyDatabaseQuery()); // heavyDatabaseQuery() runs EVERY TIME!"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"orElse(fallbackValue)"}),": Eager Default Fallbacks"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Providing immediate fallback constants: when orElse() is appropriate for literals, constants, and pre-allocated default models."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"OrElseFallbackDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Optional & Null-Safe Programming FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:l,title:"Module 009_008 Topic 4: orElse(fallbackValue)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic4_orelse_fallback_note.txt"})}),e.jsx(r,{note:"Use orElse(constant) when your default value is already created and cheap, like a String literal or a static constant! If calculating the default takes time or queries a database, use orElseGet() instead! — Sukanta Hui"})]})}export{E as default};
