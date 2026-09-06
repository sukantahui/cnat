import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const n=`/**\r
 * Java Core Tutorial - Module 006_004: Wildcards & The PECS Principle\r
 * Topic 11: Wildcard Capture & Private Generic Helper Methods (Fixing CAP#1 Errors)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class WildcardCaptureHelperMethodDemo {\r
\r
    // PUBLIC API: Uses clean Wildcard 'List<?>' for client simplicity:\r
    public static void reverseList(List<?> list) {\r
        // Direct mutation: list.set(0, list.get(0)) -> FAILS with 'capture#1-of ? cannot be applied to ?'!\r
        // Fix: Delegate to a private generic HELPER METHOD to CAPTURE the wildcard type!\r
        reverseHelper(list);\r
    }\r
\r
    // PRIVATE HELPER METHOD: Captures the wildcard type as concrete type parameter '<T>':\r
    private static <T> void reverseHelper(List<T> list) {\r
        int left = 0;\r
        int right = list.size() - 1;\r
        while (left < right) {\r
            T temp = list.get(left);\r
            list.set(left, list.get(right));\r
            list.set(right, temp);\r
            left++;\r
            right--;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: WILDCARD CAPTURE & HELPER METHODS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> trainees = new ArrayList<>(List.of("Swadeep", "Tuhina", "Abhronila", "Debangshu"));\r
        System.out.println(">>> 1. Original Trainee List : " + trainees);\r
\r
        reverseList(trainees);\r
        System.out.println(">>> 2. Reversed Trainee List : " + trainees);\r
\r
        System.out.println("\\n>>> WHAT IS WILDCARD CAPTURE?");\r
        System.out.println("  1. The compiler infers a specific, anonymous type for the wildcard (denoted as 'capture#1-of ?').");\r
        System.out.println("  2. When modifying the collection in-place, the compiler cannot ensure 'get()' matches 'set()'.");\r
        System.out.println("  3. A private generic helper method captures the wildcard into a named parameter '<T>', allowing safe mutation!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_004: Wildcards & The PECS Principle\r
Topic 11: Wildcard Capture & Helper Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WILDCARD CAPTURE PATTERN:\r
   - Public API uses clean 'List<?>'.\r
   - In-place mutation triggers compiler CAP#1 capture errors.\r
   - Private generic helper: 'private static <T> void helper(List<T> list)'.\r
   - Captures anonymous '?' into named 'T', enabling get/set operations.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a 'Wildcard Capture Error' (e.g. 'capture#1-of ? cannot be converted to...'), and how is it resolved?",shortAnswer:"A Wildcard Capture Error occurs when code attempts to set an element read from 'List<?>' back into the same list ('list.set(i, list.get(j))'). The compiler creates an anonymous captured type ('CAP#1') and cannot prove that the read type matches the write constraint. The canonical solution is to create a private generic helper method '<T> void helper(List<T> list)' that binds the wildcard to a concrete named type variable 'T'.",explanation:"Effective Java Item 31: Use a private helper method to capture wildcards.",hint:"Create a private generic helper method '<T> void helper(List<T> list)' to capture the anonymous wildcard type.",level:"Advanced",codeExample:"public void swap(List<?> l) { swapHelper(l); } private <T> void swapHelper(List<T> l) { ... }"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Wildcard Capture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Wildcard Capture & Helper Methods: Fixing ",e.jsx("code",{className:"text-rose-400 font-mono",children:"CAP#1"})," Capture Errors"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Resolve wildcard capture compiler errors: designing private generic helper methods (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"<T> void helper(List<T>)"}),") to bind anonymous wildcards during in-place collection mutation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:n,title:"WildcardCaptureHelperMethodDemo.java",highlightLines:[7,10,13,14,17,18,19,20,21]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Wildcard Capture FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:s,title:"Module 006_004 Topic 11: Wildcard Capture & Helper Methods",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_004_topic11_wildcard_capture_helper_note.txt"})}),e.jsx(i,{note:"When the compiler throws a mysterious error about 'capture#1 of ?', don't panic! Just write a private helper method with '<T>' and delegate the work to it! The helper method captures the wildcard and solves the issue instantly! — Sukanta Hui"})]})}export{T as default};
