import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const r=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 2: The PRESENT Dummy Value: How HashSet Stores Elements as Keys in HashMap\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
import java.util.HashSet;\r
import java.util.Map;\r
\r
public class HashSetPresentDummyValueDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE PRESENT DUMMY VALUE IN HashSet - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Inspecting private static final Object PRESENT constant in HashSet:\r
        Field presentField = HashSet.class.getDeclaredField("PRESENT");\r
        presentField.setAccessible(true);\r
        Object presentObject = presentField.get(null);\r
\r
        System.out.println(">>> 1. Inspecting 'PRESENT' Dummy Constant:");\r
        System.out.println("  PRESENT Value Object : " + presentObject);\r
        System.out.println("  PRESENT Class Name   : " + presentObject.getClass().getName());\r
\r
        // Inspecting internal HashMap entry values:\r
        HashSet<String> courses = new HashSet<>();\r
        courses.add("Java Core (Barrackpore)");\r
        courses.add("Spring Boot (Naihati)");\r
\r
        Field mapField = HashSet.class.getDeclaredField("map");\r
        mapField.setAccessible(true);\r
        HashMap<?, ?> internalMap = (HashMap<?, ?>) mapField.get(courses);\r
\r
        System.out.println("\\n>>> 2. Inspecting Backing HashMap Key-Value Entries:");\r
        for (Map.Entry<?, ?> entry : internalMap.entrySet()) {\r
            System.out.printf("  Key (Set Element): %-25s | Value (Dummy): %s (Same PRESENT instance? %b)%n",\r
                    entry.getKey(), entry.getValue(), (entry.getValue() == presentObject));\r
        }\r
\r
        System.out.println("\\n>>> WHY JAVAC USES A SINGLE 'PRESENT' DUMMY OBJECT:");\r
        System.out.println("  1. Memory Efficiency : Only ONE static instance of 'new Object()' is created for the entire JVM life cycle.");\r
        System.out.println("  2. Map Compatibility: Every entry in the backing HashMap points its value reference to that exact same single PRESENT instance.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 2: The PRESENT Dummy Value\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE PRESENT CONSTANT:\r
   - 'private static final Object PRESENT = new Object();'.\r
   - Shared across all HashSet instances.\r
   - Serves as dummy value in 'map.put(element, PRESENT)'.\r
   - Zero memory overhead since only 1 instance exists.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What is the purpose of the 'private static final Object PRESENT' constant in java.util.HashSet?",shortAnswer:"Because 'HashMap' requires both a key and a value ('put(K, V)'), but 'HashSet' only cares about elements (keys), HashSet defines a single dummy dummy object 'private static final Object PRESENT = new Object();'. Every entry stored in the backing HashMap uses the set element as the key and this shared static 'PRESENT' object as the value, minimizing heap allocation.",explanation:"Internal design of java.util.HashSet.",hint:"A static shared dummy Object used as the value for all keys in the backing HashMap.",level:"Intermediate",codeExample:"private static final Object PRESENT = new Object(); // Shared dummy value"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"PRESENT Constant"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-amber-400 font-mono",children:"PRESENT"})," Dummy Value: How HashSet Stores Elements as Map Keys"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Inspect internal dummy placeholders: understanding why HashSet utilizes a static ",e.jsx("code",{className:"text-amber-300 font-mono",children:"PRESENT"})," Object singleton as dummy values in the backing HashMap."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"HashSetPresentDummyValueDemo.java",highlightLines:[7,10,16,17,18,28,29,34,35]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"PRESENT Constant FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 007_003 Topic 2: The PRESENT Dummy Value",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic2_present_dummy_value_note.txt"})}),e.jsx(s,{note:"Why does HashSet have 'PRESENT'? Because HashMap requires a Key and a Value! HashSet puts your object as the Key, and puts 'PRESENT' as the Value! All keys in the set share the exact same single dummy object! — Sukanta Hui"})]})}export{y as default};
