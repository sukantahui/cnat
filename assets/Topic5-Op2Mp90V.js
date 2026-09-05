import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const n=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 5: Loading Properties from Application Classpath via ClassLoader.getResourceAsStream()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.io.ByteArrayInputStream;\r
import java.io.InputStream;\r
import java.io.InputStreamReader;\r
import java.nio.charset.StandardCharsets;\r
import java.util.Properties;\r
\r
public class ClasspathPropertiesLoadingDemo {\r
\r
    public static Properties loadConfigFromClasspathSimulation(String resourcePath) throws Exception {\r
        Properties props = new Properties();\r
\r
        // 1. Simulating ClassLoader.getResourceAsStream() stream:\r
        // In real apps: InputStream is = MyClass.class.getClassLoader().getResourceAsStream(resourcePath);\r
        String embeddedClasspathContent =\r
                "app.environment=PRODUCTION\\n" +\r
                "app.datacenter.region=ap-south-1-kolkata\\n" +\r
                "app.batch.mentor=Sukanta Hui (Barrackpore)\\n";\r
\r
        try (InputStream is = new ByteArrayInputStream(embeddedClasspathContent.getBytes(StandardCharsets.UTF_8))) {\r
            if (is == null) {\r
                throw new IllegalArgumentException("Resource file not found on classpath: " + resourcePath);\r
            }\r
            // Load via UTF-8 Reader:\r
            try (InputStreamReader isr = new InputStreamReader(is, StandardCharsets.UTF_8)) {\r
                props.load(isr);\r
            }\r
        }\r
        return props;\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: CLASSPATH PROPERTIES LOADING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Properties classpathConfig = loadConfigFromClasspathSimulation("config/application.properties");\r
\r
        System.out.println(">>> Successfully Loaded Embedded Classpath Properties:");\r
        System.out.println("  Environment       : " + classpathConfig.getProperty("app.environment"));\r
        System.out.println("  Datacenter Region : " + classpathConfig.getProperty("app.datacenter.region"));\r
        System.out.println("  Lead Mentor       : " + classpathConfig.getProperty("app.batch.mentor"));\r
\r
        System.out.println("\\n>>> WHY CLASSPATH LOADING IS MANDATORY FOR PACKAGED APPS (JAR / WAR):");\r
        System.out.println("  1. Inside a packaged JAR file, files are NOT physical disk files (new File() fails!).");\r
        System.out.println("  2. 'ClassLoader.getResourceAsStream()' reads resources packaged directly inside the JAR archive.");\r
        System.out.println("  3. Always check if the returned InputStream is 'null' to handle missing resource errors gracefully.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 5: Classpath Properties Loading\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CLASSPATH RESOURCE LOADING:\r
   - 'InputStream is = ClassLoader.getResourceAsStream("path")'.\r
   - Mandatory for files bundled inside JAR/WAR archives.\r
   - Always check 'if (is == null)' for missing resources.\r
   - Wrap in InputStreamReader with StandardCharsets.UTF_8.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:`Why does 'new File("application.properties")' fail when an application is packaged and deployed inside a JAR file, and how does 'getResourceAsStream()' fix it?`,shortAnswer:`Inside a packaged JAR file, resources exist as compressed entries within an archive, not independent physical files on the host OS filesystem. 'new File()' looks for a physical disk file and fails. 'ClassLoader.getResourceAsStream("application.properties")' delegates to the ClassLoader to stream the embedded resource directly out of the JAR.`,explanation:"Standard resource loading mechanism across Spring Boot, Maven, and Gradle projects.",hint:"JAR entries are not physical disk files; ClassLoader.getResourceAsStream reads them from the archive.",level:"Intermediate",codeExample:'InputStream is = MyClass.class.getClassLoader().getResourceAsStream("app.properties");'}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Classpath Resources"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Loading Properties from Application Classpath via ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"getResourceAsStream()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Package production-ready applications: streaming embedded configuration files directly out of packaged JAR/WAR archives using Java ClassLoader APIs."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:n,title:"ClasspathPropertiesLoadingDemo.java",highlightLines:[7,10,15,23,24,28,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Classpath Loading FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 005_006 Topic 5: Classpath Properties Loading",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic5_classpath_properties_loading_note.txt"})}),e.jsx(s,{note:"When building a Spring Boot JAR or Maven app, your config files are bundled inside the JAR! 'new File()' will crash, but 'getClassLoader().getResourceAsStream()' will read them effortlessly! — Sukanta Hui"})]})}export{S as default};
