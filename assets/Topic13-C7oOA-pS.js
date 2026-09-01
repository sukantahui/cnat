import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const r=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 13: Private Constructors: Preventing Instantiation & Singleton/Utility Pattern\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
public class PrivateConstructorSingletonUtilityDemo {\r
\r
    // 1. Utility Class (Zero Instantiation Allowed)\r
    public static final class AcademyMathUtil {\r
        // Private Constructor suppresses default constructor & blocks 'new'\r
        private AcademyMathUtil() {\r
            throw new UnsupportedOperationException("Utility class cannot be instantiated!");\r
        }\r
\r
        public static double calculateGst(double grossAmount) {\r
            return grossAmount * 0.18;\r
        }\r
\r
        public static double calculateScholarship(double marks, double maxAward) {\r
            return marks >= 90.0 ? maxAward : (marks >= 75.0 ? maxAward * 0.5 : 0.0);\r
        }\r
    }\r
\r
    // 2. Thread-Safe Singleton Class (Bill Pugh Singleton Pattern)\r
    public static class CentralAcademicRegistry {\r
\r
        // Private Constructor prevents external instantiation\r
        private CentralAcademicRegistry() {\r
            System.out.println("  [SINGLETON <init>] Central Academic Registry Instance Born (ONCE on Heap)!");\r
        }\r
\r
        // Static Inner Helper Class (Loaded only when getInstance() is called)\r
        private static class SingletonHelper {\r
            private static final CentralAcademicRegistry INSTANCE = new CentralAcademicRegistry();\r
        }\r
\r
        // Global Access Point\r
        public static CentralAcademicRegistry getInstance() {\r
            return SingletonHelper.INSTANCE;\r
        }\r
\r
        public void logRegistration(String traineeName, String hub) {\r
            System.out.printf("  [REGISTRY] Registered: %s at %s\\n", traineeName, hub);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: PRIVATE CONSTRUCTORS (UTILITY & SINGLETON) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Using Utility Class via Static Methods (No 'new' needed):");\r
        double gst = AcademyMathUtil.calculateGst(10000.0);\r
        double schol = AcademyMathUtil.calculateScholarship(92.0, 5000.0);\r
        System.out.printf("  GST on ₹10,000: ₹%.2f | Scholarship for 92%%: ₹%.2f\\n", gst, schol);\r
\r
        System.out.println("\\n>>> 2. Accessing Singleton Registry from Multiple References:");\r
        CentralAcademicRegistry reg1 = CentralAcademicRegistry.getInstance();\r
        reg1.logRegistration("Swadeep Paul", "Barrackpore Hub");\r
\r
        CentralAcademicRegistry reg2 = CentralAcademicRegistry.getInstance();\r
        reg2.logRegistration("Tuhina Das", "Naihati Hub");\r
\r
        System.out.println("\\n>>> 3. Verifying Singleton Identity (Both references point to exact same memory):");\r
        System.out.println("  Is reg1 == reg2? " + (reg1 == reg2) + " (HashCode: " + System.identityHashCode(reg1) + ")");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 13: Private Constructors: Restricting Instantiation & Singletons\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRIVATE CONSTRUCTOR RULES:\r
   -----------------------------------------------------------------------------\r
   - Marking a constructor 'private' prevents any external class from calling 'new'.\r
   - Prevents subclassing (child cannot invoke private 'super()').\r
   - Halts default compiler constructor generation.\r
\r
2. CORE USE CASES:\r
   - Utility Classes: java.lang.Math, Collections (pure static routines).\r
   - Singleton Pattern: Bill Pugh Singleton (1 global shared instance).\r
   - Factory Enforcement: Forcing creation through static factory methods.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a Private Constructor in Java?",shortAnswer:"A constructor marked with the 'private' access modifier, restricting object instantiation strictly to within the declaring class itself.",explanation:"Private constructors prevent external callers from executing 'new ClassName()', enabling the Singleton pattern and Utility classes.",hint:"Restricts instantiation exclusively to within the class.",level:"Beginner",codeExample:"public class MyClass { private MyClass() {} }"},{question:"What are the two primary use cases for Private Constructors in professional Java development?",shortAnswer:"1. Utility / Helper classes (like java.lang.Math, java.util.Collections) containing only static methods. 2. Singleton classes guaranteeing a single shared instance.",explanation:"Utility classes should never be instantiated; Singletons must control instance count strictly.",hint:"Utility classes and Singleton design pattern.",level:"Beginner",codeExample:"// MathUtils (Utility) & DatabasePool (Singleton)"},{question:"Can a class with only a private constructor be subclassed?",shortAnswer:"No! Subclass constructors must invoke 'super()', which cannot access the private parent constructor, causing a compile error.",explanation:"Private constructors effectively make the class non-inheritable without even needing the 'final' keyword.",hint:"Subclasses cannot call private super() constructor.",level:"Intermediate",codeExample:`class Parent { private Parent() {} }
class Child extends Parent {} // COMPILE ERROR!`},{question:"Why should you throw an 'UnsupportedOperationException' inside a private utility constructor?",shortAnswer:"To prevent instantiation via Java Reflection ('constructor.setAccessible(true); constructor.newInstance()').",explanation:"Throwing an exception inside the constructor guarantees reflection hacks will fail.",hint:"Shields against Java Reflection instantiation attacks.",level:"Advanced",codeExample:'private MathUtil() { throw new UnsupportedOperationException("No instantiation"); }'},{question:"What is the Bill Pugh Singleton Pattern and why is it preferred in Java?",shortAnswer:"It uses a private static inner class to hold the singleton instance, achieving lazy initialization and complete thread safety without synchronization overhead.",explanation:"The inner class is loaded only when 'getInstance()' is called, utilizing the JVM ClassLoader's native thread-safety.",hint:"Private static inner class holding instance loaded lazily.",level:"Advanced",codeExample:"private static class Holder { static final Singleton INSTANCE = new Singleton(); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restricted Instantiation"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Private Constructors: Preventing Instantiation & Singletons"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to lock down object creation using ",e.jsx("code",{className:"text-rose-400 font-mono",children:"private"})," constructors. Build non-instantiable static utility toolkits and implement thread-safe Bill Pugh Singleton architectures."]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Power of the Private Constructor"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["Declaring a constructor ",e.jsx("code",{className:"text-rose-400 font-mono",children:"private"})," ensures that no outside class can instantiate it using ",e.jsx("code",{className:"text-sky-300 font-mono",children:"new"}),". This enables two indispensable design patterns:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"1. Static Utility Class"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Prevents useless allocation of stateless helper classes (e.g. ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Math"}),", ",e.jsx("code",{className:"text-sky-300 font-mono",children:"Collections"}),")."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"2. Singleton Registry"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs leading-relaxed",children:["Guarantees exactly ONE instance lives in Heap memory, shared globally via ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"getInstance()"}),"."]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Singleton Memory Architecture"]}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 220",className:"w-full h-auto",children:[e.jsx("rect",{x:"30",y:"30",width:"280",height:"160",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"170",y:"60",fill:"#38bdf8",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"CALLERS (STACK)"}),e.jsx("rect",{x:"45",y:"80",width:"250",height:"95",rx:"6",fill:"#1e293b"}),e.jsx("text",{x:"55",y:"105",fill:"#fde047",fontSize:"10",fontFamily:"monospace",children:"reg1 = getInstance();"}),e.jsx("text",{x:"55",y:"130",fill:"#fde047",fontSize:"10",fontFamily:"monospace",children:"reg2 = getInstance();"}),e.jsx("text",{x:"55",y:"155",fill:"#a7f3d0",fontSize:"9",children:"Both hold address: 0xCAFE"}),e.jsx("path",{d:"M 320 110 L 460 110",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"470",y:"30",width:"420",height:"160",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"680",y:"60",fill:"#34d399",fontSize:"12",fontWeight:"bold",textAnchor:"middle",children:"SINGLETON INSTANCE (HEAP @ 0xCAFE)"}),e.jsx("rect",{x:"490",y:"80",width:"380",height:"95",rx:"6",fill:"#064e3b",fillOpacity:"0.3",stroke:"#10b981",strokeWidth:"1"}),e.jsx("text",{x:"505",y:"105",fill:"#a7f3d0",fontSize:"10",fontFamily:"monospace",children:"CentralAcademicRegistry instance (SINGLETON)"}),e.jsx("text",{x:"505",y:"130",fill:"#fde047",fontSize:"9",children:"Private Constructor ran ONCE on first call"}),e.jsx("text",{x:"505",y:"155",fill:"#a7f3d0",fontSize:"9",children:"reg1 == reg2 → true"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"PrivateConstructorSingletonUtilityDemo.java",highlightLines:[13,27,33,38,54,57,61]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Private Constructor FAQs (Technical Q&As)",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 002_002 Topic 13: Private Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic13_private_constructors_note.txt"})}),e.jsx(a,{note:"If your class is a pure utility toolkit (like MathUtils), make its constructor private and throw UnsupportedOperationException. If you need one shared central manager, use the Bill Pugh Singleton pattern! — Sukanta Hui"})]})}export{g as default};
