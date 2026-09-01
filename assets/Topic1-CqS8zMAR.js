import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 1: Declaring Interfaces Using the 'interface' Keyword\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class DeclaringInterfacesSyntaxDemo {\r
\r
    // Interface declaration syntax:\r
    // 'public interface InterfaceName { ... }'\r
    public interface CloudStorageService {\r
        // Constant (Implicitly: public static final)\r
        String DEFAULT_REGION = "ap-south-1 (Mumbai / Kolkata DC)";\r
\r
        // Abstract method (Implicitly: public abstract)\r
        void uploadFile(String bucketName, String fileName, byte[] data);\r
        byte[] downloadFile(String bucketName, String fileName);\r
    }\r
\r
    public static class LocalAwsStorage implements CloudStorageService {\r
        @Override\r
        public void uploadFile(String bucket, String file, byte[] data) {\r
            System.out.printf("  [UPLOAD] Uploaded %s (%d bytes) to bucket '%s' in %s\\n",\r
                    file, data.length, bucket, DEFAULT_REGION);\r
        }\r
\r
        @Override\r
        public byte[] downloadFile(String bucket, String file) {\r
            System.out.printf("  [DOWNLOAD] Fetched %s from bucket '%s'\\n", file, bucket);\r
            return new byte[]{1, 2, 3};\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: DECLARING INTERFACES IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CloudStorageService storage = new LocalAwsStorage();\r
        storage.uploadFile("barrackpore-trainee-vault", "swadeep_project.zip", new byte[1024]);\r
        storage.downloadFile("barrackpore-trainee-vault", "swadeep_project.zip");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 1: Declaring Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTERFACE SYNTAX & IMPLICIT MODIFIERS:\r
   - 'public interface Name { ... }'\r
   - Variables → Implicitly 'public static final'.\r
   - Methods → Implicitly 'public abstract'.\r
   - Stored in its own '.java' / '.class' file.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What are the default implicit modifiers for variables and methods declared inside an interface in Java?",shortAnswer:"Variables are implicitly 'public static final' (constants). Methods without bodies are implicitly 'public abstract'.",explanation:"Even if you omit the keywords 'public', 'static', 'final', or 'abstract', the compiler automatically adds them.",hint:"Variables = public static final; Methods = public abstract.",level:"Beginner",codeExample:"interface Test { int X = 10; void run(); }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Syntax & Modifiers"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Declaring Interfaces Using the ",e.jsx("code",{className:"text-amber-400 font-mono",children:"interface"})," Keyword"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn the formal declaration syntax of interfaces: implicit ",e.jsx("code",{className:"text-amber-300 font-mono",children:"public static final"})," constant rules and implicit ",e.jsx("code",{className:"text-amber-300 font-mono",children:"public abstract"})," method modifiers."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"DeclaringInterfacesSyntaxDemo.java",highlightLines:[12,14,17,18,21,34]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Declaring Interfaces FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_008 Topic 1: Declaring Interfaces",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic1_declaring_interfaces_note.txt"})}),e.jsx(n,{note:"You don't need to type 'public abstract' on every interface method—Java puts them there automatically! Keep your interfaces clean and uncluttered. — Sukanta Hui"})]})}export{x as default};
