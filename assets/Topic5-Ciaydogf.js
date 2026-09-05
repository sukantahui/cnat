import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 5: Preserving Root Causes: 'super(message, cause)' vs 'initCause()'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.IOException;\r
\r
public class PreservingRootCausesMechanismsDemo {\r
\r
    // APPROACH 1: Constructor Chaining (Preferred, Cleanest, Immutable):\r
    public static class ModernChainedException extends Exception {\r
        public ModernChainedException(String msg, Throwable cause) {\r
            super(msg, cause);\r
        }\r
    }\r
\r
    // APPROACH 2: Legacy initCause() Method (Used for legacy classes lacking cause constructors):\r
    public static class LegacyStyleException extends Exception {\r
        public LegacyStyleException(String msg) {\r
            super(msg);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: PRESERVING ROOT CAUSES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        IOException rootError = new IOException("Barrackpore router interface timeout!");\r
\r
        // 1. Constructor Chaining:\r
        ModernChainedException modern = new ModernChainedException("Payment Gateway Unreachable", rootError);\r
        System.out.println(">>> 1. Constructor Chained Cause : " + modern.getCause().getMessage());\r
\r
        // 2. initCause() Method (Can be called only ONCE per instance):\r
        LegacyStyleException legacy = new LegacyStyleException("Account Sync Failed");\r
        legacy.initCause(rootError);\r
        System.out.println(">>> 2. initCause() Linked Cause : " + legacy.getCause().getMessage());\r
\r
        // Attempting to call initCause() a second time triggers IllegalStateException:\r
        try {\r
            legacy.initCause(new RuntimeException("Duplicate cause"));\r
        } catch (IllegalStateException e) {\r
            System.out.println(">>> 3. [SAFETY GUARD] initCause() can only be called once: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 5: Preserving Root Causes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CAUSE LINKING MECHANISMS:\r
   - Modern: 'super(message, cause)' in constructor.\r
   - Legacy: 'ex.initCause(rootCause)'.\r
   - Calling initCause() twice throws 'IllegalStateException'.\r
   - Always preserve root causes to avoid losing diagnostic context.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the difference between chaining exceptions via 'super(message, cause)' vs 'throwable.initCause(cause)' in Java?",shortAnswer:"'super(message, cause)' is the preferred modern constructor approach, creating an immutable chained exception at instantiation time. 'initCause()' is a legacy method allowing post-creation cause attachment on older exception classes that lacked cause constructors. 'initCause()' can only be invoked ONCE on an instance; calling it again throws IllegalStateException.",explanation:"Both mechanisms populate the cause field retrieved via getCause().",hint:"super(msg, cause) in constructor is preferred; initCause() is for legacy classes and can only run once.",level:"Intermediate",codeExample:'MyEx ex = new MyEx("msg"); ex.initCause(rootCause);'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Root Cause Linking"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Preserving Root Causes: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"super(msg, cause)"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"initCause()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master cause attachment mechanics: comparing modern constructor forwarding against legacy ",e.jsx("code",{className:"text-sky-300 font-mono",children:"initCause()"})," invocations and preventing diagnostic loss."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:r,title:"PreservingRootCausesMechanismsDemo.java",highlightLines:[7,10,11,12,17,18,29,34,35,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Root Cause FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 004_005 Topic 5: Preserving Root Causes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic5_preserving_root_causes_note.txt"})}),e.jsx(s,{note:"Never throw a new exception without passing the old exception into the constructor! If you do 'throw new MyException('Failed')' without passing 'e', you completely destroy the stack trace of where the bug happened! — Sukanta Hui"})]})}export{h as default};
