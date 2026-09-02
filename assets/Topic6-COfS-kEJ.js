import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 6: Interface Extending Other Interfaces: Multi-Interface Inheritance\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class MultiInterfaceExtendsDemo {\r
\r
    public interface ReadableStream {\r
        void read();\r
    }\r
\r
    public interface WritableStream {\r
        void write();\r
    }\r
\r
    // MULTI-INTERFACE INHERITANCE: An interface CAN extend MULTIPLE interfaces!\r
    public interface BidirectionalDuplexStream extends ReadableStream, WritableStream {\r
        void flush();\r
    }\r
\r
    public static class BarrackporeNetworkSocket implements BidirectionalDuplexStream {\r
        @Override\r
        public void read() {\r
            System.out.println("  [READ] Receiving TCP packets on Barrackpore socket...");\r
        }\r
\r
        @Override\r
        public void write() {\r
            System.out.println("  [WRITE] Transmitting encrypted response bytes...");\r
        }\r
\r
        @Override\r
        public void flush() {\r
            System.out.println("  [FLUSH] Socket buffers cleared.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: MULTI-INTERFACE EXTENSION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BidirectionalDuplexStream socket = new BarrackporeNetworkSocket();\r
        socket.read();\r
        socket.write();\r
        socket.flush();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 6: Multi-Interface Extension\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTERFACE EXTENSION RULES:\r
   - 'class' extends 'class' (Single only).\r
   - 'class' implements 'interface' (Multiple allowed).\r
   - 'interface' extends 'interface' (Multiple allowed via comma-separated list).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Can an interface in Java extend more than one interface using the 'extends' keyword?",shortAnswer:"Yes! While classes can only extend ONE superclass, an interface can extend MULTIPLE interfaces simultaneously ('interface C extends A, B').",explanation:"This allows combining smaller interfaces into composite contracts.",hint:"Interfaces support multiple inheritance via 'interface C extends A, B'.",level:"Beginner",codeExample:"interface Duplex extends Readable, Writable {}"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Interface Taxonomies"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Interface Extending Other Interfaces: Multi-Interface Inheritance"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how interfaces use ",e.jsx("code",{className:"text-indigo-400 font-mono",children:"extends"})," to combine multiple parent contracts into composite role definitions."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"MultiInterfaceExtendsDemo.java",highlightLines:[10,14,19,23,38,39,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Multi-Interface Extension FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 002_008 Topic 6: Multi-Interface Extension",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic6_multi_interface_note.txt"})}),e.jsx(a,{note:"Remember the keyword rule: Class extends Class, Class implements Interface, but Interface EXTENDS Interface (even multiple interfaces)! — Sukanta Hui"})]})}export{h as default};
