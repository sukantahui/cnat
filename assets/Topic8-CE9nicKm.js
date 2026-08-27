import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 006_002: Generic Methods, Constructors & Type Inference\r
 * Topic 8: Varargs with Generics: public static <T> List<T> asList(T... elements)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class GenericVarargsCreationDemo {\r
\r
    // Generic Varargs Factory Method:\r
    @SafeVarargs\r
    public static <T> List<T> createList(T... elements) {\r
        List<T> list = new ArrayList<>(elements.length);\r
        for (T item : elements) {\r
            list.add(item);\r
        }\r
        return list;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: GENERIC VARARGS METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Invoking with Strings:\r
        List<String> trainees = createList("Swadeep Paul", "Tuhina Das", "Abhronila Das");\r
\r
        // 2. Invoking with Integers:\r
        List<Integer> rollNumbers = createList(101, 102, 103, 104, 105);\r
\r
        // 3. Invoking with Doubles:\r
        List<Double> fees = createList(8500.0, 9200.0, 9800.0);\r
\r
        System.out.println(">>> 1. Generic Varargs Generated Lists:");\r
        System.out.println("  Trainees List : " + trainees);\r
        System.out.println("  Rolls List    : " + rollNumbers);\r
        System.out.println("  Fees List     : " + fees);\r
\r
        System.out.println("\\n>>> HOW VARARGS WORK INTERNALLY IN THE JVM:");\r
        System.out.println("  1. Syntactic Sugar: 'T... elements' is translated by the compiler into an array 'T[] elements'.");\r
        System.out.println("  2. Array Creation: The calling code automatically wraps comma-separated arguments into a newly allocated array.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_002: Generic Methods, Constructors & Type Inference\r
Topic 8: Generic Varargs\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC VARARGS:\r
   - 'public static <T> List<T> createList(T... elements)'.\r
   - Syntactic sugar for 'T[]' array.\r
   - Accepts 0, 1, or many comma-separated arguments.\r
   - Foundation for 'List.of()' and 'Arrays.asList()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does the Java compiler transform generic varargs parameter 'T... elements' behind the scenes?",shortAnswer:"The Java compiler converts 'T... elements' into an array of type 'T[] elements'. When calling code passes comma-separated arguments ('createList(1, 2, 3)'), the compiler generates bytecode that allocates a new array, populates it with the arguments, and passes the array reference into the method.",explanation:"Effective Java Item 53 & 32: Understanding the compiler's underlying array creation mechanism.",hint:"Translates 'T...' into an array 'T[]', allocating an array to hold the passed arguments.",level:"Intermediate",codeExample:"public static <T> List<T> of(T... items) { ... }"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_002 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Generic Varargs"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Varargs with Generics: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"<T> List<T> asList(T... elements)"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build variable-arity factories: mastering generic varargs methods (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"T..."}),") and analyzing compiler array allocation behind the scenes."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"GenericVarargsCreationDemo.java",highlightLines:[7,10,13,14,15,23,26,29]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Generic Varargs FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 006_002 Topic 8: Generic Varargs",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_002_topic8_generic_varargs_note.txt"})}),e.jsx(n,{note:"Generic varargs methods like 'Arrays.asList(T...)' or 'List.of(E...)' make initializing collections effortless! But be careful: mixing generics with varargs creates underlying array allocations that can cause heap pollution! — Sukanta Hui"})]})}export{x as default};
