import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 4: Iterating Enum Constants: For-Each Loop, Stream Pipelines & Arrays\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
import java.util.Arrays;\r
\r
public class EnumIterationPatternsDemo {\r
\r
    public enum WeekdaySchedule {\r
        MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ENUM ITERATION PATTERNS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Iterating with Enhanced For-Each Loop over values():");\r
        for (WeekdaySchedule day : WeekdaySchedule.values()) {\r
            boolean isWeekend = (day == WeekdaySchedule.SATURDAY || day == WeekdaySchedule.SUNDAY);\r
            System.out.printf("  Day: %-10s | Mode: %s%n", day, isWeekend ? "Weekend Lab / Rest" : "Classroom Lecture");\r
        }\r
\r
        System.out.println("\\n>>> 2. Modern Java 8+ Stream Processing over Enum Constants:");\r
        long weekendCount = Arrays.stream(WeekdaySchedule.values())\r
                .filter(d -> d == WeekdaySchedule.SATURDAY || d == WeekdaySchedule.SUNDAY)\r
                .count();\r
\r
        System.out.println("  Total Weekend Days in Schedule: " + weekendCount);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 4: Enum Iteration\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ITERATION PATTERNS:\r
   - For-each: 'for (MyEnum e : MyEnum.values())'\r
   - Stream API: 'Arrays.stream(MyEnum.values()).filter(...)'\r
   - Maintains exact declaration sequence.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do you iterate through all constants in a Java enum using a for-each loop and Java Stream API?",shortAnswer:"Invoke the static method 'EnumClass.values()' which returns an array of all enum constants in their exact declaration order. You can iterate over this array directly in an enhanced for-each loop ('for (Day d : Day.values())') or convert it to a Stream ('Arrays.stream(Day.values())').",explanation:"The values() method is synthesized by the Java compiler during compilation.",hint:"Use Enum.values() with an enhanced for-each loop or Arrays.stream().",level:"Beginner",codeExample:"for (Status s : Status.values()) { System.out.println(s); }"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Iteration Patterns"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Iterating Enum Constants: For-Each Loops & Stream Pipelines"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Process enum constants systematically: traversing array constants with ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"values()"}),", filtering schedules, and integrating functional Stream pipelines."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"EnumIterationPatternsDemo.java",highlightLines:[7,10,11,20,21,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Enum Iteration FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 003_008 Topic 4: Enum Iteration",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic4_enum_iteration_note.txt"})}),e.jsx(r,{note:"When building UI dropdown menus or REST validation lists, 'MyEnum.values()' allows you to populate all available options in 1 line of code! — Sukanta Hui"})]})}export{y as default};
