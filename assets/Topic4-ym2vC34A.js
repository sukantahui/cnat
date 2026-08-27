import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 4: Static Methods: Purpose, Syntax & Utility Class Design\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class StaticMethodsUtilityDesignDemo {\r
\r
    // Utility Toolkit for Academy Calculations\r
    public static final class AcademyFinanceUtil {\r
        // Private Constructor prevents instantiation\r
        private AcademyFinanceUtil() {}\r
\r
        public static double computeGst(double amount) {\r
            return amount * 0.18;\r
        }\r
\r
        public static double calculateDiscountedFee(double grossFee, double discountPercent) {\r
            return grossFee - (grossFee * (discountPercent / 100.0));\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: STATIC METHODS & UTILITY DESIGN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double originalFee = 10000.0;\r
        double discounted = AcademyFinanceUtil.calculateDiscountedFee(originalFee, 20.0);\r
        double gst = AcademyFinanceUtil.computeGst(discounted);\r
        double finalTotal = discounted + gst;\r
\r
        System.out.printf("  Original Fee : ₹%.2f\\n", originalFee);\r
        System.out.printf("  Discount (20%%): ₹%.2f\\n", discounted);\r
        System.out.printf("  GST (18%%)    : ₹%.2f\\n", gst);\r
        System.out.printf("  Final Payable: ₹%.2f\\n", finalTotal);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,r=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 4: Static Methods & Utility Class Design\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STATIC METHOD CHARACTERISTICS:\r
   - Invoked as 'ClassName.method(args)'.\r
   - Pure functions: Output depends strictly on input arguments.\r
   - Foundation for standard Java utility classes (java.lang.Math, java.util.Arrays).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a Static Method in Java and when should you design one?",shortAnswer:"A method marked with 'static' that belongs to the class and operates purely on its input parameters without needing any instance state.",explanation:"Ideal for utility/helper operations like Math.sqrt(), Collections.sort(), or custom calculation toolkits.",hint:"Operates on parameters without requiring instance state.",level:"Beginner",codeExample:"public static int add(int a, int b) { return a + b; }"}];function y(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 4"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Utility Architecture"})]}),t.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Static Methods: Purpose, Syntax & Utility Class Design"}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to design clean stateless helper toolkits using static methods. Understand why Java standard libraries (like ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Math"})," and ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Collections"}),") rely on static utilities."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:i,title:"StaticMethodsUtilityDesignDemo.java",highlightLines:[14,18,28,29]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Static Methods FAQs",questions:o})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:r,title:"Module 002_004 Topic 4: Static Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic4_static_methods_note.txt"})}),t.jsx(s,{note:"If your calculation is stateless and only depends on its parameters (like GST calculation), make it a static method in a utility class! — Sukanta Hui"})]})}export{y as default};
