import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const t=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 2: Package Scanner Engine - Classpath & ClassLoader Inspection\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import java.io.File;\r
import java.net.URL;\r
import java.util.ArrayList;\r
import java.util.Enumeration;\r
import java.util.List;\r
\r
public class ClasspathPackageScannerEngineDemo {\r
\r
    public static List<Class<?>> scanPackage(String basePackage) throws Exception {\r
        List<Class<?>> classes = new ArrayList<>();\r
        String path = basePackage.replace('.', '/');\r
        ClassLoader classLoader = Thread.currentThread().getContextClassLoader();\r
        Enumeration<URL> resources = classLoader.getResources(path);\r
\r
        while (resources.hasMoreElements()) {\r
            URL resource = resources.nextElement();\r
            File directory = new File(resource.toURI());\r
            if (directory.exists()) {\r
                findClasses(directory, basePackage, classes);\r
            }\r
        }\r
        return classes;\r
    }\r
\r
    private static void findClasses(File directory, String packageName, List<Class<?>> classes) throws ClassNotFoundException {\r
        File[] files = directory.listFiles();\r
        if (files == null) return;\r
\r
        for (File file : files) {\r
            if (file.isDirectory()) {\r
                findClasses(file, packageName + "." + file.getName(), classes);\r
            } else if (file.getName().endsWith(".class")) {\r
                String className = packageName + '.' + file.getName().substring(0, file.getName().length() - 6);\r
                classes.add(Class.forName(className));\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: CLASSPATH PACKAGE SCANNER ENGINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println("Package Scanner successfully converts package names to directory paths,");\r
        System.out.println("recursively traverses .class files, and loads Class<?> instances into memory.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 2: Package Scanner Engine\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CLASSPATH SCANNING ALGORITHM:\r
   - 'ClassLoader.getResources(path)' locates directory or JAR root.\r
   - Recursive file crawler identifies '.class' files.\r
   - 'Class.forName(fqcn)' loads discovered classes into the JVM Metaspace.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"How does ClassLoader.getResources() allow frameworks to discover files located across multiple JAR files on the classpath?",shortAnswer:"Unlike getResource() which returns only the first match, getResources() returns an Enumeration<URL> containing every occurrence of that directory across all JAR files and directories in the application classpath.",explanation:"Crucial for multi-module classpath scanning.",hint:"Returns an Enumeration of all matching resources across all JARs.",level:"Intermediate",codeExample:'Enumeration<URL> urls = classLoader.getResources("com/example");'},{question:"Why should we strip the '.class' extension and use Class.forName() when registering beans?",shortAnswer:"Because Class.forName() requires the Fully Qualified Class Name (FQCN e.g. com.example.MyService) to properly resolve the class through the ClassLoader hierarchy.",explanation:"Standard dynamic class loading mechanism.",hint:"Class.forName requires the canonical FQCN without .class.",level:"Beginner",codeExample:'Class.forName("com.example.PaymentService")'}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Package Scanner Engine: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Classpath & ClassLoader Inspection"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Automated discovery: scanning target base packages via ClassLoader resources and java.nio.file to discover all annotated candidate classes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:t,title:"ClasspathPackageScannerEngineDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Custom DI Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 012_004 Topic 2: Classpath Package Scanner Engine",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic2_classpath_package_scanner_engine_note.txt"})}),e.jsx(n,{note:"The scanner is the first engine component to execute! It converts a package name like 'com.coderaccotax' into a file path 'com/coderaccotax', discovers all .class files, and loads them via Class.forName()! — Sukanta Hui"})]})}export{x as default};
