import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 4: Rules of Abstract Methods: Can ONLY Exist Inside Abstract Classes\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class AbstractMethodEnclosureRulesDemo {\r
\r
    // RULE: If a class declares even ONE abstract method, the class MUST be marked 'abstract'!\r
    public abstract static class NetworkProtocol {\r
        // Abstract method\r
        public abstract void transmitPacket(byte[] payload);\r
\r
        // Concrete helper\r
        public void logTransmission(int byteCount) {\r
            System.out.printf("  [NETWORK] Dispatched %d bytes over Barrackpore Gigabit LAN.\\n", byteCount);\r
        }\r
    }\r
\r
    // Concrete implementation\r
    public static class Http3Protocol extends NetworkProtocol {\r
        @Override\r
        public void transmitPacket(byte[] payload) {\r
            System.out.println("  [HTTP/3 QUIC] Encapsulated payload in UDP frame.");\r
            super.logTransmission(payload.length);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ABSTRACT METHOD ENCLOSURE RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        NetworkProtocol protocol = new Http3Protocol();\r
        protocol.transmitPacket(new byte[]{10, 20, 30, 40, 50});\r
\r
        System.out.println("\\n>>> Compiler Law:");\r
        System.out.println("  - A regular (concrete) class CANNOT contain abstract methods.");\r
        System.out.println("  - Writing 'abstract void test();' inside 'class Regular {}' triggers:");\r
        System.out.println("    'Regular is not abstract and does not override abstract method test()'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 4: Rules of Abstract Method Enclosure\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ENCLOSURE RULE:\r
   - Any class containing &ge;1 abstract method MUST be declared 'abstract'.\r
   - Conversely: An abstract class can have 0 abstract methods (valid syntax).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Can an abstract method exist inside a regular (concrete) class in Java?",shortAnswer:"No! If a class declares or inherits an abstract method without implementing it, the class MUST be explicitly declared 'abstract' by the developer.",explanation:"Failure to declare the class as abstract causes a compile-time error.",hint:"Abstract methods can only live inside abstract classes or interfaces.",level:"Beginner",codeExample:"// Compile Error: class Normal { abstract void run(); }"}];function h(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Compiler Constraints"})]}),t.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Rules of Abstract Methods: Can ONLY Exist Inside Abstract Classes"}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn why Java requires classes containing abstract methods to be explicitly declared ",t.jsx("code",{className:"text-amber-400 font-mono",children:"abstract"}),"."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:n,title:"AbstractMethodEnclosureRulesDemo.java",highlightLines:[11,13,20,31]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Abstract Method Enclosure FAQs",questions:c})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:o,title:"Module 002_007 Topic 4: Abstract Method Enclosure",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic4_enclosure_rules_note.txt"})}),t.jsx(s,{note:"If a class has even a single unimplemented method, the entire class is incomplete and must wear the 'abstract' badge! — Sukanta Hui"})]})}export{h as default};
