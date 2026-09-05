import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 3: Accessing Properties with Fallback Defaults: getProperty(key, defaultValue)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.util.Properties;\r
\r
public class PropertiesDefaultFallbackDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: getProperty() WITH FALLBACK DEFAULTS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Properties userConfig = new Properties();\r
        userConfig.setProperty("server.port", "9090");\r
        userConfig.setProperty("security.enabled", "true");\r
\r
        // 1. Key exists:\r
        String port = userConfig.getProperty("server.port", "8080");\r
        System.out.println(">>> 1. Existing Key with Default Supplier:");\r
        System.out.println("  server.port (found) : " + port);\r
\r
        // 2. Key is MISSING (Fallback default used):\r
        String timeout = userConfig.getProperty("server.timeout.seconds", "30");\r
        String maxThreads = userConfig.getProperty("threadpool.max", "100");\r
        String clusterName = userConfig.getProperty("cluster.name", "Barrackpore_Primary_Cluster");\r
\r
        System.out.println("\\n>>> 2. Missing Keys Falling Back to Safe Defaults:");\r
        System.out.println("  server.timeout.seconds : " + timeout + " (Fallback default)");\r
        System.out.println("  threadpool.max         : " + maxThreads + " (Fallback default)");\r
        System.out.println("  cluster.name           : " + clusterName + " (Fallback default)");\r
\r
        // 3. Hierarchical Default Properties (Parent-Child Fallback):\r
        Properties defaultParent = new Properties();\r
        defaultParent.setProperty("environment", "DEVELOPMENT");\r
        defaultParent.setProperty("log.level", "DEBUG");\r
\r
        Properties childEnvConfig = new Properties(defaultParent); // Chains parent as fallback!\r
        childEnvConfig.setProperty("environment", "PRODUCTION");   // Overrides parent\r
\r
        System.out.println("\\n>>> 3. Hierarchical Parent Fallback Pattern:");\r
        System.out.println("  environment (Overridden) : " + childEnvConfig.getProperty("environment"));\r
        System.out.println("  log.level   (Inherited)  : " + childEnvConfig.getProperty("log.level"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 3: Properties Fallback Defaults\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FALLBACK DEFAULTS:\r
   - 'props.getProperty("key", "defaultVal")': Returns default if key is absent.\r
   - Prevents 'null' returns and NPEs.\r
   - Hierarchical chaining: 'new Properties(defaultParentProps)'.\r
   - Clean, resilient application startup architecture.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How does 'properties.getProperty(key, defaultValue)' prevent NullPointerExceptions in application bootstrap logic?",shortAnswer:`If the requested key does NOT exist in the Properties table, 'getProperty(key, defaultValue)' returns the provided fallback default String instead of 'null'. This prevents downstream code from throwing NullPointerExceptions when parsing numeric integers or booleans (e.g. 'Integer.parseInt(props.getProperty("port", "8080"))').`,explanation:"Standard defensive pattern for all microservice configuration parameters.",hint:"Returns the safe default string instead of null when the key is missing.",level:"Beginner",codeExample:'int port = Integer.parseInt(props.getProperty("port", "8080"));'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Fallback Defaults"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Accessing Properties with Fallback Defaults: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"getProperty(key, defaultVal)"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build resilient application bootstrap routines: providing safe default fallback strings and chaining hierarchical parent property dictionaries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"PropertiesDefaultFallbackDemo.java",highlightLines:[7,10,15,16,20,24,25,26,32,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Fallback Defaults FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 005_006 Topic 3: Properties Fallback Defaults",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic3_properties_fallback_defaults_note.txt"})}),e.jsx(a,{note:"Never do 'Integer.parseInt(props.getProperty('port'))' without a default! If the user forgot to add 'port' to the file, getProperty() returns null and Integer.parseInt throws NumberFormatException! Always supply a fallback like '8080'! — Sukanta Hui"})]})}export{x as default};
