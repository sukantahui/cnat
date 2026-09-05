import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 8: ? super T is WRITE-ENABLED (Consumer Role Mechanics)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class ConsumerSuperWriteEnabledMechanicsDemo {\r
\r
    // CONSUMER: It CONSUMES (receives/stores) elements of type 'Integer':\r
    public static void generatePrimeTokens(List<? super Integer> destinationSink, int count) {\r
        int candidate = 2;\r
        int found = 0;\r
        while (found < count) {\r
            if (isPrime(candidate)) {\r
                destinationSink.add(candidate); // WRITING IS 100% LEGAL!\r
                found++;\r
            }\r
            candidate++;\r
        }\r
    }\r
\r
    private static boolean isPrime(int n) {\r
        if (n <= 1) return false;\r
        for (int i = 2; i * i <= n; i++) {\r
            if (n % i == 0) return false;\r
        }\r
        return true;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CONSUMER SUPER (WRITE-ENABLED) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<Integer> intList = new ArrayList<>();\r
        List<Number> numList = new ArrayList<>();\r
        List<Object> objList = new ArrayList<>();\r
\r
        // Invoking consumer with diverse supertype sinks:\r
        generatePrimeTokens(intList, 5);\r
        generatePrimeTokens(numList, 5);\r
        generatePrimeTokens(objList, 5);\r
\r
        System.out.println(">>> 1. Prime Tokens Written to Diverse Sinks:");\r
        System.out.println("  List<Integer> Sink : " + intList);\r
        System.out.println("  List<Number> Sink  : " + numList);\r
        System.out.println("  List<Object> Sink  : " + objList);\r
\r
        System.out.println("\\n>>> WHY CONSUMER SUPER IS WRITE-ENABLED:");\r
        System.out.println("  1. 'List<? super Integer>' accepts any list capable of holding Integers (Integer, Number, Object).");\r
        System.out.println("  2. Inserting an 'Integer' into a List of Numbers or Objects is ALWAYS type-safe.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 8: Consumer Super Write-Enabled\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONSUMER SUPER RULES:\r
   - 'List<? super T>' acts as a DATA CONSUMER.\r
   - Write-enabled: safe to insert 'T' and subtypes.\r
   - Accepts collections of 'T', superclasses, and 'Object'.\r
   - Elements can only be read as 'Object'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is adding elements of type 'T' into a collection declared with '? super T' guaranteed to be type-safe?",shortAnswer:"Because '? super T' accepts collections holding 'T' or any supertype of 'T' (such as Number or Object for Integer). In Java's type system, an instance of 'T' is automatically a valid instance of all its supertypes (Liskov Substitution Principle). Thus, inserting 'T' into a list of its supertypes can never violate type invariants.",explanation:"Foundational theorem underpinning contravariant generic insertion.",hint:"An instance of T can always be safely stored in a collection of any of its superclasses.",level:"Intermediate",codeExample:"List<? super Integer> sink = new ArrayList<Number>(); sink.add(42); // Safe!"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Consumer Role"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"? super T"})," is WRITE-ENABLED: Data Consumer Role & Ingestion"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Ingest data with contravariance: understanding why lower bounded wildcards (",e.jsx("code",{className:"text-purple-300 font-mono",children:"<? super T>"}),") safely permit adding elements into destination collection sinks."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ConsumerSuperWriteEnabledMechanicsDemo.java",highlightLines:[7,10,14,15,18,19,39,40,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Consumer Super FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 006_004 Topic 8: Consumer Super",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic8_consumer_super_note.txt"})}),e.jsx(s,{note:"If your method is a data generator (like filling a list with IDs or DB records), always declare the destination parameter as 'List<? super T>'! This allows callers to pass in a List of Objects or Numbers! — Sukanta Hui"})]})}export{y as default};
