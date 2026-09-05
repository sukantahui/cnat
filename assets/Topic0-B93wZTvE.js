import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 0: What Does 'static' Mean: Class-Level vs Instance-Level Association\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticConceptFoundationsDemo {\r
\r
    public static class TraineePortal {\r
        // CLASS-LEVEL (STATIC): Single shared copy across all instances in Metaspace\r
        public static String organizationName = "Coder & AccoTax Academy";\r
        public static String centralHubCity = "Barrackpore";\r
\r
        // INSTANCE-LEVEL (NON-STATIC): Unique per Heap object\r
        private String traineeName;\r
        private int rollNumber;\r
\r
        public TraineePortal(String traineeName, int rollNumber) {\r
            this.traineeName = traineeName;\r
            this.rollNumber = rollNumber;\r
        }\r
\r
        public void printDetails() {\r
            System.out.printf("  -> [Trainee: %s (Roll %d)] Organization: %s | City: %s\\n",\r
                    traineeName, rollNumber, organizationName, centralHubCity);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHAT 'static' MEANS IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Accessing Static Members Directly via ClassName (No Object Required):");\r
        System.out.println("  Academy: " + TraineePortal.organizationName);\r
        System.out.println("  Location: " + TraineePortal.centralHubCity);\r
\r
        System.out.println("\\n>>> 2. Instantiating Individual Trainee Objects:");\r
        TraineePortal swadeep = new TraineePortal("Swadeep Paul", 101);\r
        TraineePortal tuhina = new TraineePortal("Tuhina Das", 102);\r
\r
        swadeep.printDetails();\r
        tuhina.printDetails();\r
\r
        System.out.println("\\n>>> 3. Modifying Static Variable (Affects ALL Instances Globally):");\r
        TraineePortal.centralHubCity = "Barrackpore Central IT Hub";\r
        swadeep.printDetails();\r
        tuhina.printDetails();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 0: What Does 'static' Mean in Java\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC VS INSTANCE PARADIGM:\r
   - static: Belongs to the CLASS (stored in Metaspace/Class data area).\r
   - non-static: Belongs to the INSTANCE (stored in Heap memory).\r
   - Single shared copy across all objects.\r
   - Accessed directly via ClassName.member.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What does the 'static' keyword signify in Java?",shortAnswer:"'static' binds a member (variable, method, block, or nested class) directly to the Class itself in Metaspace, rather than to individual object instances on the Heap.",explanation:"Static members exist as a single shared entity per ClassLoader, accessible without creating any object instance.",hint:"Binds member to the Class in Metaspace, not individual Heap objects.",level:"Beginner",codeExample:'public class Config { public static String HUB = "Barrackpore"; }'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Class vs Instance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["What Does ",e.jsx("code",{className:"text-amber-400 font-mono",children:"static"})," Mean: Class-Level vs Instance-Level Association"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Demystify the core architectural divide in Java memory: Metaspace class-level state vs Heap instance allocations. Learn why static members exist once per class and are shared across all instances."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"StaticConceptFoundationsDemo.java",highlightLines:[12,13,16,17,30,31,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"What Does 'static' Mean FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 002_004 Topic 0: What is static",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic0_static_meaning_note.txt"})}),e.jsx(r,{note:"Class-level static variables represent common institutional knowledge (like the Academy name), while instance variables represent individual trainee attributes (like Swadeep's roll number)! — Sukanta Hui"})]})}export{h as default};
