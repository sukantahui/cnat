import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 005_006: CSV, JSON, Properties & Config Files\r
 * Topic 10: Building a Unified Enterprise Application Configuration Loader (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.config;\r
\r
import java.io.StringReader;\r
import java.util.Properties;\r
\r
public class UnifiedApplicationConfigLoaderCapstoneDemo {\r
\r
    // Unified Enterprise Config Manager:\r
    public static class AppConfigManager {\r
        private final Properties properties = new Properties();\r
\r
        public AppConfigManager(String rawProperties) throws Exception {\r
            // Load base properties from stream:\r
            try (StringReader reader = new StringReader(rawProperties)) {\r
                properties.load(reader);\r
            }\r
        }\r
\r
        // Type-Safe Property Getters with Defaults & Validation:\r
        public String getString(String key, String defaultVal) {\r
            return properties.getProperty(key, defaultVal);\r
        }\r
\r
        public int getInt(String key, int defaultVal) {\r
            String val = properties.getProperty(key);\r
            if (val == null) return defaultVal;\r
            try {\r
                return Integer.parseInt(val.trim());\r
            } catch (NumberFormatException e) {\r
                System.err.println("Warning: Invalid int for key '" + key + "', using default: " + defaultVal);\r
                return defaultVal;\r
            }\r
        }\r
\r
        public boolean getBoolean(String key, boolean defaultVal) {\r
            String val = properties.getProperty(key);\r
            return val != null ? Boolean.parseBoolean(val.trim()) : defaultVal;\r
        }\r
\r
        public double getDouble(String key, double defaultVal) {\r
            String val = properties.getProperty(key);\r
            if (val == null) return defaultVal;\r
            try {\r
                return Double.parseDouble(val.trim());\r
            } catch (NumberFormatException e) {\r
                return defaultVal;\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: UNIFIED CONFIG LOADER CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String simulatedConfigFile =\r
                "server.port=9090\\n" +\r
                "server.host=127.0.0.1\\n" +\r
                "security.jwt.enabled=true\\n" +\r
                "tax.rate.gst=18.5\\n" +\r
                "hub.location=Barrackpore Central";\r
\r
        AppConfigManager config = new AppConfigManager(simulatedConfigFile);\r
\r
        System.out.println(">>> 1. Extracting Strongly-Typed Configuration Properties:");\r
        int port = config.getInt("server.port", 8080);\r
        String host = config.getString("server.host", "localhost");\r
        boolean jwtEnabled = config.getBoolean("security.jwt.enabled", false);\r
        double gstRate = config.getDouble("tax.rate.gst", 18.0);\r
        String hub = config.getString("hub.location", "Kolkata");\r
        int timeout = config.getInt("server.timeout.ms", 5000); // Fallback used!\r
\r
        System.out.printf("  Server Host:Port   : %s:%d%n", host, port);\r
        System.out.printf("  JWT Enabled        : %b%n", jwtEnabled);\r
        System.out.printf("  GST Rate Applied   : %.1f%%%n", gstRate);\r
        System.out.printf("  Operating Hub      : %s%n", hub);\r
        System.out.printf("  Network Timeout    : %d ms (Default)%n", timeout);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 005_006 WORKING WITH CSV, JSON & CONFIG FILES 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_006: CSV, JSON, Properties & Config Files\r
Topic 10: Unified Config Loader Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 005_006 SUMMARY:\r
   - 'Properties': Hashtable subclass for String key-values.\r
   - Syntax: '=', ':', spaces for delimiters; '#' and '!' for comments.\r
   - 'load(Reader)' with StandardCharsets.UTF_8 for international text.\r
   - 'getProperty(key, defaultVal)' prevents nulls and NPEs.\r
   - 'store(Writer, comments)' saves with header and timestamp.\r
   - 'getResourceAsStream()' reads embedded configs from JAR classpath.\r
   - RFC 4180 CSV parsing: handles quotes and commas.\r
   - JSON format: Objects, Arrays, Strings, Numbers, Booleans, Null.\r
   - Unified Config Manager: Type-safe getters with defaults and validation.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What design pattern advantages does a dedicated 'AppConfigManager' provide over raw 'Properties' calls in enterprise applications?",shortAnswer:"1. Type-Safety: Provides clean typed getters ('getInt()', 'getBoolean()', 'getDouble()') with automatic parsing and safe fallbacks. 2. Resilience: Catches NumberFormatException internally, preventing application startup crashes on malformed config values. 3. Encapsulation: Hides underlying file/stream I/O mechanisms behind a clean domain API.",explanation:"Standard architecture powering Spring Boot's @ConfigurationProperties.",hint:"Provides type-safe getters with fallback defaults and handles NumberFormatException internally.",level:"Advanced",codeExample:'int port = config.getInt("server.port", 8080); boolean secure = config.getBoolean("ssl", true);'}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_006 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Config Capstone"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Building a Unified Application Configuration Loader (Capstone)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize configuration architecture: building an enterprise configuration manager featuring type-safe getters, resilient fallback defaults, and malformed input guards."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"UnifiedApplicationConfigLoaderCapstoneDemo.java",highlightLines:[7,10,19,23,24,33,34,38,59,60]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Unified Config FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 005_006 Topic 10: Unified Config Loader Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_006_topic10_unified_config_loader_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 005_006! You have mastered Properties file loading, classpath resource streaming, RFC 4180 CSV parsing, JSON architecture, and building production-grade configuration managers! — Sukanta Hui"})]})}export{b as default};
