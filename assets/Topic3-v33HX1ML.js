import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 004_006: Exception Handling Real-World Lab\r
 * Topic 3: Building a Resilient Transaction Processor with Automatic Retry on Transient Failures\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.IOException;\r
\r
public class ResilientRetryTransactionProcessorDemo {\r
\r
    // Transient failure exception (Eligible for retry):\r
    public static class TransientNetworkException extends IOException {\r
        public TransientNetworkException(String message) { super(message); }\r
    }\r
\r
    // Permanent failure exception (NOT eligible for retry):\r
    public static class NonRecoverableValidationException extends RuntimeException {\r
        public NonRecoverableValidationException(String message) { super(message); }\r
    }\r
\r
    // Enterprise Resilient Execution Engine with Exponential Backoff Retry:\r
    public static void executeWithAutomaticRetry(int maxAttempts, long initialBackoffMs, Runnable task) throws Exception {\r
        int attempt = 0;\r
        long currentBackoff = initialBackoffMs;\r
\r
        while (true) {\r
            attempt++;\r
            try {\r
                System.out.printf("  [ATTEMPT %d/%d] Executing transaction...%n", attempt, maxAttempts);\r
                task.run();\r
                System.out.println("  [SUCCESS] Transaction committed on attempt #" + attempt);\r
                return;\r
            } catch (Exception ex) {\r
                // If it's a permanent error, fast-fail immediately without wasting retries!\r
                if (ex instanceof NonRecoverableValidationException) {\r
                    System.out.println("  [FATAL FAST-FAIL] Non-recoverable validation failure! Retries aborted.");\r
                    throw ex;\r
                }\r
\r
                if (attempt >= maxAttempts) {\r
                    System.out.printf("  [RETRY EXHAUSTED] Failed after %d attempts! Escalating failure.%n", maxAttempts);\r
                    throw new IllegalStateException("Operation failed after " + maxAttempts + " attempts", ex);\r
                }\r
\r
                System.out.printf("  [TRANSIENT FAILURE] %s. Retrying in %d ms...%n", ex.getMessage(), currentBackoff);\r
                Thread.sleep(currentBackoff);\r
                currentBackoff *= 2; // Exponential backoff\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: RESILIENT AUTOMATIC RETRY ENGINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Simulating Transient Database Glitch (Recovers on Attempt 3):");\r
        int[] attemptsCounter = { 0 };\r
\r
        executeWithAutomaticRetry(4, 50, () -> {\r
            attemptsCounter[0]++;\r
            if (attemptsCounter[0] < 3) {\r
                throw new RuntimeException("Transient lock timeout at Barrackpore data cluster!");\r
            }\r
            System.out.println("    -> Core billing calculation finished successfully.");\r
        });\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_006: Exception Handling Real-World Lab\r
Topic 3: Resilient Automatic Retry Engine\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESILIENT RETRY PATTERNS:\r
   - Differentiate Transient (retryable) from Permanent (fast-fail) errors.\r
   - Max attempts cap (e.g. 3 attempts).\r
   - Exponential Backoff: double sleep interval between attempts (50ms, 100ms, 200ms).\r
   - Escalate with cause if retries exhausted.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does an enterprise Resilient Retry Engine distinguish between Transient and Permanent exceptions during fault tolerance recovery?",shortAnswer:"Transient exceptions (like network timeouts or database deadlock errors) represent temporary glitches that can succeed upon immediate or exponential backoff retry. Permanent exceptions (like validation failures or missing user records) will never succeed on retry and must FAST-FAIL immediately without wasting retries.",explanation:"Core design principle behind Spring Retry, Resilience4j, and AWS SDK client retries.",hint:"Transient errors are retried with exponential backoff; permanent errors fast-fail immediately.",level:"Advanced",codeExample:"if (e instanceof PermanentException) throw e; else retry();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_006 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Fault Tolerance"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Building a Resilient Transaction Processor with Automatic Retry on Transient Failures"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build self-healing distributed microservices: implementing exponential backoff retry policies for transient glitches while fast-failing permanent validation errors."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ResilientRetryTransactionProcessorDemo.java",highlightLines:[7,10,15,19,20,26,27,30,31,35,36,40,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Resilient Retry FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 004_006 Topic 3: Resilient Retry Engine",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_006_topic3_resilient_retry_note.txt"})}),e.jsx(i,{note:"In high-volume systems like GST filing or payment gateways, 80% of network hiccups resolve if you just retry 100 milliseconds later! Building a smart retry loop makes your app virtually crash-proof! — Sukanta Hui"})]})}export{g as default};
