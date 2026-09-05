import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 4: Interface Fields: Implicitly 'public static final' Constants\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class InterfaceConstantsRulesDemo {\r
\r
    public interface AcademyConstants {\r
        // All 3 declarations below are 100% IDENTICAL in bytecode!\r
        String HUB_NAME = "Coder & AccoTax Barrackpore";\r
        public static final int PASSING_PERCENTAGE = 75;\r
        public final double GST_RATE = 18.0; // Compiler silently adds 'static'\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: INTERFACE CONSTANTS (public static final) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Accessed directly via Interface Name (since they are static):\r
        System.out.println("  Academy Hub: " + AcademyConstants.HUB_NAME);\r
        System.out.println("  Passing Threshold: " + AcademyConstants.PASSING_PERCENTAGE + "%");\r
        System.out.println("  Standard GST Rate: " + AcademyConstants.GST_RATE + "%");\r
\r
        // 2. Reassignment Attempt:\r
        // AcademyConstants.PASSING_PERCENTAGE = 80; // COMPILE ERROR: cannot assign a value to final variable!\r
\r
        System.out.println("\\n>>> Interface Field Invariants:");\r
        System.out.println("  - 'public': Accessible anywhere.");\r
        System.out.println("  - 'static': Belongs to Interface, loaded once.");\r
        System.out.println("  - 'final' : Immutable constant value.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 4: Interface Fields & Constants\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTERFACE CONSTANTS:\r
   - Implicitly: 'public static final'.\r
   - Must be initialized at declaration.\r
   - Access directly via 'InterfaceName.CONSTANT_NAME'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"Why are all variables declared in an interface implicitly 'public static final'?",shortAnswer:"Because interfaces cannot hold instance state or be instantiated, any fields declared in an interface must belong to the interface itself as immutable, globally accessible constants.",explanation:"Any attempt to modify an interface field causes a compilation failure.",hint:"Implicitly public, static, and final constants.",level:"Beginner",codeExample:"interface MathConstants { double PI = 3.14159; }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Constant Invariants"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Interface Fields: Implicitly ",e.jsx("code",{className:"text-amber-400 font-mono",children:"public static final"})," Constants"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn why every field declared inside an interface is an immutable constant, why instance state is impossible in interfaces, and how the compiler inserts modifiers automatically."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"InterfaceConstantsRulesDemo.java",highlightLines:[12,13,14,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Interface Fields FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:r,title:"Module 002_008 Topic 4: Interface Fields",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic4_interface_fields_note.txt"})}),e.jsx(i,{note:"Never write 'public static final int X = 10;' inside an interface—just write 'int X = 10;'. Java makes it public, static, and final for you automatically! — Sukanta Hui"})]})}export{b as default};
