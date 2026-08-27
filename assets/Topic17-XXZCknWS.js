import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 012_001: GoF Design Patterns\r
 * Topic 17: Chain of Responsibility Pattern - Pipeline Request Handlers\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.patterns;\r
\r
public class ChainOfResponsibilityPatternDemo {\r
\r
    public record EnrollmentRequest(String studentName, boolean authenticated, boolean feePaid) {}\r
\r
    // 1. Handler Abstract Base:\r
    public static abstract class Handler {\r
        private Handler next;\r
\r
        public Handler linkWith(Handler nextHandler) {\r
            this.next = nextHandler;\r
            return nextHandler;\r
        }\r
\r
        public abstract boolean handle(EnrollmentRequest request);\r
\r
        protected boolean checkNext(EnrollmentRequest request) {\r
            if (next == null) return true; // Reached end of pipeline successfully!\r
            return next.handle(request);\r
        }\r
    }\r
\r
    // Concrete Handler 1: Authentication Check\r
    public static class AuthHandler extends Handler {\r
        @Override\r
        public boolean handle(EnrollmentRequest req) {\r
            if (!req.authenticated()) {\r
                System.err.println("   [PIPELINE REJECTED]: User " + req.studentName() + " is NOT authenticated! ❌");\r
                return false;\r
            }\r
            System.out.println("   [STEP 1 AUTH]: Passed for " + req.studentName());\r
            return checkNext(req);\r
        }\r
    }\r
\r
    // Concrete Handler 2: Fee Verification Check\r
    public static class FeeCheckHandler extends Handler {\r
        @Override\r
        public boolean handle(EnrollmentRequest req) {\r
            if (!req.feePaid()) {\r
                System.err.println("   [PIPELINE REJECTED]: Fee payment pending for " + req.studentName() + "! ❌");\r
                return false;\r
            }\r
            System.out.println("   [STEP 2 FEE ]: Payment verified for " + req.studentName());\r
            return checkNext(req);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: CHAIN OF RESPONSIBILITY PATTERN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Construct pipeline chain:\r
        Handler pipeline = new AuthHandler();\r
        pipeline.linkWith(new FeeCheckHandler());\r
\r
        System.out.println("1. Processing Valid Request:");\r
        EnrollmentRequest validReq = new EnrollmentRequest("Swadeep Paul", true, true);\r
        boolean success = pipeline.handle(validReq);\r
        System.out.println("Pipeline Final Result: " + (success ? "APPROVED ✅" : "REJECTED ❌") + "\r
");\r
\r
        System.out.println("2. Processing Request with Unpaid Fee:");\r
        EnrollmentRequest unpaidReq = new EnrollmentRequest("Tuhina Das", true, false);\r
        pipeline.handle(unpaidReq);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_001: GoF Design Patterns\r
Topic 17: Chain of Responsibility Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. INTENT:\r
   - Avoid coupling the sender of a request to its receiver by giving more than one object\r
     a chance to handle the request.\r
   - Chain the receiving objects and pass the request along the chain until an object handles it.\r
\r
2. REAL-WORLD EXAMPLES:\r
   - 'jakarta.servlet.Filter' ('FilterChain.doFilter()')\r
   - Spring Security Filter Chain\r
   - Logging Logback / Log4j Appender chains\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"How does the Chain of Responsibility pattern decouple senders and receivers?",shortAnswer:"The client sends a request to the start of the chain without needing to know which specific handler in the pipeline will satisfy the request or how many intermediate filters will inspect it.",explanation:"Promotes Open-Closed principle; new handlers can be added anywhere in the chain.",hint:"Client sends to chain head without knowing specific handling nodes.",level:"Beginner",codeExample:"chainHead.handle(request);"},{question:"What happens if no handler in the chain can process a request?",shortAnswer:"The request either drops off the end of the chain silently or is handled by a default fallback handler at the tail of the pipeline.",explanation:"Ensures graceful degradation or explicit default routing.",hint:"Falls off the end of the chain or executes a default tail handler.",level:"Intermediate",codeExample:"if (next == null) return defaultFallback();"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_001 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"GoF Design Patterns"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Chain of Responsibility: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Pipeline Request Handlers"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Decoupled request dispatching: passing HTTP requests, security tokens, and logging payloads along a chained pipeline of handler nodes."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"ChainOfResponsibilityPatternDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"GoF Design Patterns FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 012_001 Topic 17: Chain of Responsibility Pattern",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_001_topic17_chain_of_responsibility_pattern_note.txt"})}),e.jsx(a,{note:"Chain of Responsibility is how Servlet Filters and Spring Security Work! A request passes through an Auth Filter, then a Rate-Limiting Filter, then a Logging Filter before reaching your controller! Each link decides whether to pass or reject! — Sukanta Hui"})]})}export{f as default};
