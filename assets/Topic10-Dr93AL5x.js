import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 10: ifPresent() & ifPresentOrElse() (Java 9+) - Clean Side-Effect Execution\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class IfPresentOrElseDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: IFPRESENT & IFPRESENTORELSE (JAVA 9+) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<String> activeStudent = Optional.of("Swadeep Paul (Barrackpore Center)");\r
        Optional<String> missingStudent = Optional.empty();\r
\r
        // 1. ifPresent(Consumer): Executes action only if value exists\r
        System.out.print("1. ifPresent on active student: ");\r
        activeStudent.ifPresent(name -> System.out.println("Notification sent to: " + name));\r
\r
        System.out.print("   ifPresent on missing student: ");\r
        missingStudent.ifPresent(name -> System.out.println("Notification sent to: " + name));\r
        System.out.println("(Zero side-effects, nothing executed!)");\r
\r
        // 2. ifPresentOrElse(Consumer, Runnable) [Java 9]: Both branches covered functionally!\r
        System.out.println("\\n2. Java 9 ifPresentOrElse() on active student:");\r
        activeStudent.ifPresentOrElse(\r
            name -> System.out.println("   [SUCCESS]: Welcome back, " + name + "!"),\r
            () -> System.out.println("   [WARNING]: Guest access - Please register at Barrackpore!")\r
        );\r
\r
        System.out.println("\\n3. Java 9 ifPresentOrElse() on missing student:");\r
        missingStudent.ifPresentOrElse(\r
            name -> System.out.println("   [SUCCESS]: Welcome back, " + name + "!"),\r
            () -> System.out.println("   [WARNING]: Guest access - Please register at Barrackpore Academy!")\r
        );\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 10: ifPresent & ifPresentOrElse (Java 9+)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. IFPRESENT(CONSUMER):\r
   - Signature: 'public void ifPresent(Consumer<? super T> action)'.\r
   - If a value is present, performs the given action with the value.\r
   - Otherwise, does nothing.\r
\r
2. IFPRESENTORELSE(CONSUMER, RUNNABLE) [JAVA 9+]:\r
   - Signature: 'public void ifPresentOrElse(Consumer<? super T> action, Runnable emptyAction)'.\r
   - If a value is present, invokes 'action.accept(value)'.\r
   - If absent, invokes 'emptyAction.run()'.\r
   - Provides a clean functional replacement for traditional 'if (opt.isPresent()) ... else ...'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What is the key advantage of ifPresentOrElse() over traditional if-else blocks?",shortAnswer:"It allows handling both presence and absence in a single fluent expression without calling isPresent() and get() manually, preventing accidental NoSuchElementException bugs.",explanation:"Introduced in Java 9 to complete Optional branch handling.",hint:"Eliminates imperative if-else and prevents unsafe get() calls.",level:"Beginner",codeExample:"opt.ifPresentOrElse(System.out::println, () → System.out.println('Missing'));"},{question:"What functional interface types are used by ifPresentOrElse()?",shortAnswer:"1. java.util.function.Consumer<? super T> for the present value action. 2. java.lang.Runnable for the empty fallback action.",explanation:"Consumer accepts the present value; Runnable takes 0 args and returns void.",hint:"Consumer (for present) and Runnable (for empty).",level:"Intermediate",codeExample:"opt.ifPresentOrElse(Consumer<T>, Runnable);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"ifPresent() & ifPresentOrElse()"}),": Side-Effect Execution (Java 9+)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Consuming present values cleanly: executing consumers when present, and handling both branches with ifPresentOrElse(Consumer, Runnable) in Java 9."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"IfPresentOrElseDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Optional & Null-Safe Programming FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_008 Topic 10: ifPresent & ifPresentOrElse",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic10_ifpresent_ifpresentorelse_note.txt"})}),e.jsx(a,{note:"ifPresentOrElse() in Java 9 replaces the ugly if-else block! You pass a Consumer for the success case and a Runnable for the missing case! — Sukanta Hui"})]})}export{h as default};
