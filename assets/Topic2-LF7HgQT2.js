import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 2: Loading Properties from Disk: properties.load(InputStream / Reader) & UTF-8\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.io.File;\r
import java.io.FileReader;\r
import java.io.FileWriter;\r
import java.io.IOException;\r
import java.nio.charset.StandardCharsets;\r
import java.util.Properties;\r
\r
public class LoadingPropertiesFileDiskDemo {\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: properties.load(Reader) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        File configFile = new File("application.properties");\r
\r
        // Write sample config with international UTF-8 characters:\r
        try (FileWriter fw = new FileWriter(configFile, StandardCharsets.UTF_8)) {\r
            fw.write("academy.hub=ব্যারাকপুর (Barrackpore)\\n");\r
            fw.write("academy.mentor=Sukanta Hui\\n");\r
            fw.write("academy.students.active=4\\n");\r
        }\r
\r
        // LOAD PROPERTIES WITH EXPLICIT UTF-8 READER:\r
        Properties appProps = new Properties();\r
        try (FileReader reader = new FileReader(configFile, StandardCharsets.UTF_8)) {\r
            appProps.load(reader); // Ingests and parses all key-values cleanly!\r
        }\r
\r
        System.out.println(">>> Successfully Loaded Properties from File:");\r
        System.out.println("  academy.hub            : " + appProps.getProperty("academy.hub"));\r
        System.out.println("  academy.mentor         : " + appProps.getProperty("academy.mentor"));\r
        System.out.println("  academy.students.active: " + appProps.getProperty("academy.students.active"));\r
\r
        // Cleanup:\r
        configFile.delete();\r
\r
        System.out.println("\\n>>> BEST PRACTICE NOTE:");\r
        System.out.println("  - Always use 'properties.load(Reader)' with explicit 'StandardCharsets.UTF_8'!");\r
        System.out.println("  - Legacy 'properties.load(InputStream)' assumes ISO-8859-1 encoding and corrupts non-English characters.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 2: Loading Properties Files\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOADING PROPERTIES:\r
   - 'props.load(new FileReader(file, StandardCharsets.UTF_8))'.\r
   - Avoid legacy 'load(InputStream)' for non-English UTF-8 files.\r
   - Seamlessly populates all key-value entries into memory.\r
   - Closes automatically via Try-with-Resources.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is 'properties.load(Reader)' preferred over 'properties.load(InputStream)' when reading international config files?",shortAnswer:"Legacy 'properties.load(InputStream)' is hardcoded by the Java specification to decode bytes using ISO-8859-1 (Latin-1) encoding, corrupting non-ASCII text (like Bengali, Hindi, or Chinese). 'properties.load(Reader)' allows you to wrap the file in a FileReader with 'StandardCharsets.UTF_8', ensuring full international character support without corruption.",explanation:"Added in Java 6 to rectify historical Latin-1 encoding limitations.",hint:"load(Reader) allows passing explicit UTF-8 charset, preventing ISO-8859-1 character corruption.",level:"Intermediate",codeExample:"props.load(new FileReader(file, StandardCharsets.UTF_8));"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Property Loading"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Loading Properties from Disk: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"properties.load(Reader)"})," & UTF-8"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Ingest persistent configuration: loading ",e.jsx("code",{className:"text-emerald-300 font-mono",children:".properties"})," files from disk using UTF-8 character readers to prevent character corruption."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"LoadingPropertiesFileDiskDemo.java",highlightLines:[7,10,20,21,28,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Loading Properties FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 005_006 Topic 2: Loading Properties",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic2_loading_properties_note.txt"})}),e.jsx(n,{note:"Always use 'props.load(new FileReader(file, StandardCharsets.UTF_8))'! If your configuration file contains Bengali or Hindi text, this ensures it loads 100% cleanly without corruption! — Sukanta Hui"})]})}export{g as default};
