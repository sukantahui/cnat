import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 9: Dynamic Method Dispatch (DMD): How JVM Decides Which Method to Run\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class DynamicMethodDispatchMechanicsDemo {\r
\r
    public static class CloudVM {\r
        public void boot() {\r
            System.out.println("  [BASE VM] Booting generic virtual machine instance...");\r
        }\r
    }\r
\r
    public static class LinuxUbuntuVM extends CloudVM {\r
        @Override\r
        public void boot() {\r
            System.out.println("  [UBUNTU VM] Loading Linux Kernel 6.8 & systemd init on Barrackpore Cloud!");\r
        }\r
    }\r
\r
    public static class WindowsServerVM extends CloudVM {\r
        @Override\r
        public void boot() {\r
            System.out.println("  [WINDOWS VM] Initializing Windows Server 2025 core kernel & services!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: DYNAMIC METHOD DISPATCH (DMD) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CloudVM vm; // Superclass reference variable\r
\r
        System.out.println(">>> 1. Binding 'vm' reference to LinuxUbuntuVM object on Heap:");\r
        vm = new LinuxUbuntuVM();\r
        vm.boot(); // JVM looks up vtable of LinuxUbuntuVM -> calls Linux boot()\r
\r
        System.out.println("\\n>>> 2. Rebinding 'vm' reference to WindowsServerVM object on Heap:");\r
        vm = new WindowsServerVM();\r
        vm.boot(); // JVM looks up vtable of WindowsServerVM -> calls Windows boot()\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 9: Dynamic Method Dispatch (DMD)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DYNAMIC METHOD DISPATCH (DMD):\r
   - Mechanism by which a call to an overridden method is resolved at RUNTIME.\r
   - Powered by 'invokevirtual' opcode and the Virtual Method Table (vtable).\r
   - Enables writing flexible, pluggable software architectures.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does the JVM implement Dynamic Method Dispatch (DMD) internally?",shortAnswer:"The JVM uses a Virtual Method Table (vtable) associated with each loaded class. When 'invokevirtual' executes, the JVM reads the object header's class pointer, looks up the method slot in that object's vtable, and jumps to the concrete method code.",explanation:"This allows late-binding method execution with O(1) table lookup efficiency.",hint:"JVM uses Virtual Method Table (vtable) with O(1) lookup.",level:"Advanced",codeExample:"// Bytecode: invokevirtual #4 <CloudVM.boot>"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Internals"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Dynamic Method Dispatch (DMD): How the JVM Decides at Runtime"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the internal mechanics of JVM Late Binding: bytecode opcode ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"invokevirtual"}),", Virtual Method Tables (vtable), and runtime object resolution."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"DynamicMethodDispatchMechanicsDemo.java",highlightLines:[12,19,26,36,37,40,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Dynamic Method Dispatch FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_006 Topic 9: Dynamic Method Dispatch",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic9_dmd_note.txt"})}),e.jsx(o,{note:"Dynamic Method Dispatch is why you can write one line: vm.boot() and run Ubuntu, Windows, or macOS without writing a single if-else statement! — Sukanta Hui"})]})}export{b as default};
