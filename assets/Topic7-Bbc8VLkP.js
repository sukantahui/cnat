import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 003_005: Modern Date & Time API (java.time - JSR 310)\r
 * Topic 7: ZoneId vs ZoneOffset: Managing Daylight Saving Time (DST) & Offset Rules\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.datetime;\r
\r
import java.time.ZoneId;\r
import java.time.ZoneOffset;\r
import java.time.ZonedDateTime;\r
import java.time.zone.ZoneRules;\r
\r
public class ZoneIdAndOffsetRulesDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: ZoneId vs ZoneOffset & DST RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. ZoneOffset (Fixed numerical offset from UTC):\r
        ZoneOffset fixedOffset = ZoneOffset.of("+05:30"); // Indian Standard Time fixed offset\r
        System.out.println(">>> 1. Fixed ZoneOffset: " + fixedOffset);\r
\r
        // 2. ZoneId (Geographical region with dynamic DST rules):\r
        ZoneId nyZone = ZoneId.of("America/New_York");\r
        ZoneRules rules = nyZone.getRules();\r
\r
        System.out.println("\\n>>> 2. Geographical ZoneId ('America/New_York'):");\r
        System.out.println("  Is DST Active in Summer? " + rules.isDaylightSavings(ZonedDateTime.now(nyZone).toInstant()));\r
\r
        System.out.println("\\n>>> 3. KEY DIFFERENCE:");\r
        System.out.println("  - ZoneOffset ('+05:30', 'UTC', '-04:00') is a CONSTANT numerical shift.");\r
        System.out.println("  - ZoneId ('America/New_York', 'Europe/London') contains full historical & future DST transition rules!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_005: Modern Date & Time API (java.time)\r
Topic 7: ZoneId vs ZoneOffset\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ZONE RULES:\r
   - 'ZoneOffset': Fixed difference ('+05:30', '-05:00').\r
   - 'ZoneId': Region identifier ('Asia/Kolkata', 'America/New_York').\r
   - 'ZoneRules': Automatically shifts clocks by 1 hour during DST changes.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the crucial difference between 'ZoneId' and 'ZoneOffset' in Java?",shortAnswer:"'ZoneOffset' represents a fixed, static numerical hour/minute difference from Greenwich UTC (e.g. '+05:30' or '-04:00'). 'ZoneId' represents a geographical region (e.g. 'America/New_York') that dynamically manages complex Daylight Saving Time (DST) transitions throughout the year.",explanation:"Never hardcode fixed offsets for regions observing Daylight Saving Time.",hint:"ZoneOffset is a fixed numeric shift; ZoneId is a geographical region with dynamic DST rules.",level:"Intermediate",codeExample:'ZoneId zone = ZoneId.of("Europe/London"); // Handles GMT and BST automatically'}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_005 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"DST Management"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-indigo-400 font-mono",children:"ZoneId"})," vs ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"ZoneOffset"}),": Managing Daylight Saving Time (DST)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Understand international timezone shifts: comparing static numerical ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"ZoneOffset"})," values with dynamic geographical ",e.jsx("code",{className:"text-indigo-300 font-mono",children:"ZoneId"})," Daylight Saving Time rules."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"ZoneIdAndOffsetRulesDemo.java",highlightLines:[7,16,20,21,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"ZoneId & Offset FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 003_005 Topic 7: ZoneId vs ZoneOffset",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_005_topic7_zone_rules_note.txt"})}),e.jsx(a,{note:"Never hardcode '-05:00' for New York! In summer it becomes '-04:00' due to Daylight Saving Time. Always specify ZoneId.of('America/New_York') so Java handles DST changes automatically! — Sukanta Hui"})]})}export{g as default};
