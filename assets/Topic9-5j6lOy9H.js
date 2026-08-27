import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
 * Topic 9: Java 8 Evolution: 'static' Methods in Interfaces\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.interfaces;\r
\r
public class StaticMethodsInInterfacesDemo {\r
\r
    public interface FeeValidator {\r
        // Static Utility Method inside Interface (Java 8+)\r
        // Provides cohesive utility logic directly on the Interface namespace!\r
        static boolean isValidAdmissionFee(double amount) {\r
            return amount >= 5000.0 && amount <= 100000.0;\r
        }\r
\r
        static String formatFeeInINR(double amount) {\r
            return String.format("₹%,.2f", amount);\r
        }\r
    }\r
\r
    public static class FeePaymentProcessor implements FeeValidator {\r
        // Note: Static interface methods are NOT inherited by implementing classes!\r
        // You CANNOT call 'FeePaymentProcessor.isValidAdmissionFee()' or 'processorInstance.isValidAdmissionFee()'\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: STATIC METHODS IN INTERFACES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double testFee = 15000.0;\r
\r
        // INVOCATION RULE: MUST be invoked ONLY using InterfaceName.staticMethodName()\r
        boolean valid = FeeValidator.isValidAdmissionFee(testFee);\r
        String formatted = FeeValidator.formatFeeInINR(testFee);\r
\r
        System.out.printf("  Fee: %s | Is Valid Admission Fee? %s\\n", formatted, valid);\r
\r
        System.out.println("\\n>>> Key Static Interface Method Rule:");\r
        System.out.println("  - Static interface methods are NOT part of the implementing class API.");\r
        System.out.println("  - They belong STRICTLY to the Interface itself (Cannot be overridden/hidden).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_008: Interfaces, Default/Static Methods & Multiple Inheritance\r
Topic 9: Static Methods in Interfaces\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC INTERFACE METHODS:\r
   - Declared with 'static' modifier + method body.\r
   - Invocation: Strictly 'InterfaceName.staticMethod()'.\r
   - NOT inherited by implementing classes or instances.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How are 'static' methods in an interface invoked in Java, and are they inherited by implementing classes?",shortAnswer:"Static interface methods must be invoked strictly using the interface name: 'InterfaceName.staticMethodName()'. They are NOT inherited by implementing classes or instances.",explanation:"Eliminates the need for separate companion utility classes (e.g. Collections vs Collection).",hint:"Invoked only via InterfaceName.staticMethod(); NOT inherited by implementing classes.",level:"Intermediate",codeExample:"boolean ok = FeeValidator.isValidAdmissionFee(15000);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_008 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Static Utilities"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Java 8 Evolution: ",e.jsx("code",{className:"text-amber-400 font-mono",children:"static"})," Methods in Interfaces"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how Java 8 static interface methods provide cohesive utility operations directly on interface namespaces, eliminating companion utility classes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"StaticMethodsInInterfacesDemo.java",highlightLines:[12,16,29,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Static Interface Methods FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 002_008 Topic 9: Static Interface Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_008_topic9_static_interface_methods_note.txt"})}),e.jsx(i,{note:"Static interface methods belong to the interface itself. You must call FeeValidator.formatFeeInINR() directly on the interface, never on an object! — Sukanta Hui"})]})}export{x as default};
