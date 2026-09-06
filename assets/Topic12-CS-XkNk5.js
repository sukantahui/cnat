import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 003_006: Regular Expressions (java.util.regex)\r
 * Topic 12: Advanced Matcher Transformations: appendReplacement(), appendTail(), replaceAll(Function)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.regex;\r
\r
import java.util.regex.Matcher;\r
import java.util.regex.Pattern;\r
\r
public class AdvancedMatcherTransformationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: ADVANCED MATCHER TRANSFORMATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        String invoiceText = "Item A costs 500 INR, Item B costs 1200 INR, Item C costs 850 INR.";\r
\r
        // Dynamic replacement using Matcher.replaceAll(Function) (Java 9+):\r
        // Converting all INR amounts with an 18% GST addition:\r
        Pattern amountPattern = Pattern.compile("(\\\\d+)\\\\s+INR");\r
        Matcher matcher = amountPattern.matcher(invoiceText);\r
\r
        String updatedInvoice = matcher.replaceAll(matchResult -> {\r
            int originalPrice = Integer.parseInt(matchResult.group(1));\r
            int priceWithGst = (int) (originalPrice * 1.18);\r
            return priceWithGst + " INR (Incl. 18% GST)";\r
        });\r
\r
        System.out.println(">>> 1. Original Invoice Statement:");\r
        System.out.println("  " + invoiceText);\r
\r
        System.out.println("\\n>>> 2. Dynamically Computed GST Invoice (via Java 9 replaceAll Function):");\r
        System.out.println("  " + updatedInvoice);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_006: Regular Expressions (Regex)\r
Topic 12: Advanced Matcher Transformations\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DYNAMIC REPLACEMENT (Java 9+):\r
   - 'matcher.replaceAll(matchResult → ...)'\r
   - Eliminates legacy 'appendReplacement' / 'appendTail' boilerplate.\r
   - Evaluates lambda per matching token.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does the Java 9 'Matcher.replaceAll(Function<MatchResult, String>)' method revolutionize text transformations?",shortAnswer:"It allows passing a lambda function to compute dynamic replacement values on-the-fly for every individual match (such as parsing numeric values, applying tax math, or querying databases) without manual StringBuffer appendReplacement loops.",explanation:"Introduced in Java 9 to modernize Matcher functional text pipelines.",hint:"Allows computing replacement text dynamically using lambda expressions.",level:"Intermediate",codeExample:"String res = m.replaceAll(mr → mr.group().toUpperCase());"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_006 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Functional Transformations"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Advanced Matcher Transformations: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"replaceAll(Function)"})," in Java 9+"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build dynamic text processing pipelines: computing math calculations and applying GST taxes directly inside regex replacement lambdas."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"AdvancedMatcherTransformationsDemo.java",highlightLines:[7,17,18,20,21,22,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Advanced Matcher FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 003_006 Topic 12: Matcher Transformations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_006_topic12_matcher_transformations_note.txt"})}),e.jsx(r,{note:"In modern Java (Java 9+), you can pass a lambda directly to matcher.replaceAll()! You can convert currencies, capitalize names, or calculate taxes in 3 lines of code! — Sukanta Hui"})]})}export{g as default};
