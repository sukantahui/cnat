import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 0: Configuration File Management: java.util.Properties Class Architecture\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.util.Hashtable;\r
import java.util.Properties;\r
\r
public class PropertiesClassArchitectureDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: java.util.Properties ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Properties config = new Properties();\r
\r
        // 1. Setting string key-value properties:\r
        config.setProperty("app.name", "AccoTax Ledger Pro");\r
        config.setProperty("app.hub.location", "Barrackpore, West Bengal");\r
        config.setProperty("server.port", "8080");\r
        config.setProperty("security.jwt.expiration.minutes", "60");\r
\r
        System.out.println(">>> 1. Populated Properties Object:");\r
        System.out.println("  Total Key-Value Pairs : " + config.size());\r
        System.out.println("  Class Superclass      : " + Properties.class.getSuperclass().getName() + " (Extends Hashtable<Object, Object>)");\r
\r
        System.out.println("\\n>>> 2. Reading Configuration Settings:");\r
        System.out.println("  app.name             : " + config.getProperty("app.name"));\r
        System.out.println("  app.hub.location     : " + config.getProperty("app.hub.location"));\r
        System.out.println("  server.port          : " + config.getProperty("server.port"));\r
\r
        System.out.println("\\n>>> WHY Properties CLASS IS UBIQUITOUS:");\r
        System.out.println("  1. Key-Value Storage: Specifically tailored for String keys and String values.");\r
        System.out.println("  2. Built-in I/O: Native load() and store() methods for persistent .properties files.");\r
        System.out.println("  3. Thread-Safe: Inherits thread synchronization from Hashtable.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 0: Properties Class Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PROPERTIES CLASS ARCHITECTURE:\r
   - Extends 'Hashtable<Object, Object>'.\r
   - Dedicated methods: 'setProperty(String, String)' & 'getProperty(String)'.\r
   - Thread-safe key-value configuration repository.\r
   - Foundation for 'application.properties' in Spring Boot and JDBC.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the class inheritance hierarchy of 'java.util.Properties' and what data types should be stored in it?",shortAnswer:"'java.util.Properties' directly extends 'java.util.Hashtable<Object, Object>'. Although Hashtable allows arbitrary Objects, Properties is strictly designed to store String keys mapped to String values. You should always use 'setProperty(key, value)' and 'getProperty(key)' rather than Hashtable's put()/get() to prevent non-String object pollution.",explanation:"Standard configuration carrier in Spring Boot, Log4j, and JDBC database drivers.",hint:"Extends Hashtable<Object, Object> and is designed specifically for String-to-String key-values.",level:"Beginner",codeExample:'Properties props = new Properties(); props.setProperty("key", "val");'}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Config Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Configuration File Management: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.Properties"})," Class"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master enterprise configuration: understanding the ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"java.util.Properties"})," Hashtable hierarchy and setting string configuration pairs."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"PropertiesClassArchitectureDemo.java",highlightLines:[7,10,16,17,18,19,20,26,27,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Properties Class FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 005_006 Topic 0: Properties Class Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic0_properties_class_note.txt"})}),e.jsx(a,{note:"Never use Hashtable's put() method with Properties! Always use 'props.setProperty('key', 'value')' to ensure all keys and values remain type-safe Strings! — Sukanta Hui"})]})}export{y as default};
