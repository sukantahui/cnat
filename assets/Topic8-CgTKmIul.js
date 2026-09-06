import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 8: Constant-Specific Method Implementations: Polymorphic Behavior in Enums\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
public class ConstantSpecificMethodsDemo {\r
\r
    // Enum with an abstract method overridden by each constant individually:\r
    public enum ArithmeticOperation {\r
        PLUS("+") {\r
            @Override\r
            public double apply(double x, double y) { return x + y; }\r
        },\r
        MINUS("-") {\r
            @Override\r
            public double apply(double x, double y) { return x - y; }\r
        },\r
        MULTIPLY("*") {\r
            @Override\r
            public double apply(double x, double y) { return x * y; }\r
        },\r
        DIVIDE("/") {\r
            @Override\r
            public double apply(double x, double y) {\r
                if (y == 0) throw new ArithmeticException("Division by zero!");\r
                return x / y;\r
            }\r
        };\r
\r
        private final String symbol;\r
        ArithmeticOperation(String symbol) { this.symbol = symbol; }\r
\r
        public String getSymbol() { return symbol; }\r
\r
        // Abstract method enforcing constant-specific polymorphic behavior:\r
        public abstract double apply(double x, double y);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CONSTANT-SPECIFIC METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        double a = 50.0;\r
        double b = 10.0;\r
\r
        System.out.println(">>> Executing Constant-Specific Polymorphic Arithmetic:");\r
        for (ArithmeticOperation op : ArithmeticOperation.values()) {\r
            double result = op.apply(a, b);\r
            System.out.printf("  %.1f %s %.1f = %.1f%n", a, op.getSymbol(), b, result);\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 8: Constant-Specific Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. POLYMORPHIC ENUM METHODS:\r
   - Declare 'public abstract double apply(double x, double y);' in enum.\r
   - Each constant overrides the method in its own anonymous subclass body.\r
   - Eliminates fragile switch statements.\r
   - Enforced at compile time for every new constant.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is a 'Constant-Specific Method Implementation' in Java Enums and what problem does it solve?",shortAnswer:"It allows defining an abstract method in the enum and overriding it individually inside each enum constant's body. This eliminates bulky switch/if-else chains inside enum methods and guarantees compile-time enforcement that every new constant provides its own implementation.",explanation:"Featured prominently in Effective Java Item 34 as the clean way to attach polymorphic behavior to enums.",hint:"Declaring an abstract method in the enum and providing distinct implementations per constant.",level:"Intermediate",codeExample:"PLUS { public double apply(double a, double b) { return a + b; } }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Polymorphic Enums"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Constant-Specific Method Implementations: Polymorphic Behavior in Enums"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Eliminate brittle switch statements: defining abstract methods on enums and letting each constant provide its own specialized calculation logic."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ConstantSpecificMethodsDemo.java",highlightLines:[7,10,11,12,14,15,17,18,20,21,31]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Polymorphic Enums FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 003_008 Topic 8: Constant-Specific Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic8_constant_specific_methods_note.txt"})}),e.jsx(i,{note:"Notice how clean Constant-Specific Methods are! Instead of a 20-line switch statement with possible forgotten cases, each constant carries its own behavior right next to its name! — Sukanta Hui"})]})}export{x as default};
