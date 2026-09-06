import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 8: Rich Domain Metadata in Custom Exceptions: ErrorCodes, Timestamps & Audit IDs\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.time.Instant;\r
\r
public class CustomExceptionDomainMetadataDemo {\r
\r
    public static class PaymentProcessingException extends RuntimeException {\r
        private final String errorCode;\r
        private final String transactionId;\r
        private final String studentId;\r
        private final Instant errorTimestamp;\r
\r
        public PaymentProcessingException(String errorCode, String txId, String studentId, String message) {\r
            super(message);\r
            this.errorCode = errorCode;\r
            this.transactionId = txId;\r
            this.studentId = studentId;\r
            this.errorTimestamp = Instant.now();\r
        }\r
\r
        public String getErrorCode() { return errorCode; }\r
        public String getTransactionId() { return transactionId; }\r
        public String getStudentId() { return studentId; }\r
        public Instant getErrorTimestamp() { return errorTimestamp; }\r
    }\r
\r
    public static void executePayment(String studentId, String txId, double amount) {\r
        if (amount <= 0) {\r
            throw new PaymentProcessingException(\r
                    "PAY_ERR_4001",\r
                    txId,\r
                    studentId,\r
                    "Invalid payment amount: " + amount + " INR"\r
            );\r
        }\r
        System.out.println("  [SUCCESS] Payment processed: " + amount + " INR");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: RICH EXCEPTION METADATA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        try {\r
            executePayment("STU_BP_9021", "TX_NHT_55442", -500.0);\r
        } catch (PaymentProcessingException ex) {\r
            System.out.println(">>> 1. Intercepted Enterprise Exception Object:");\r
            System.out.println("  Exception Message : " + ex.getMessage());\r
            System.out.println("  Error Code        : " + ex.getErrorCode());\r
            System.out.println("  Transaction ID    : " + ex.getTransactionId());\r
            System.out.println("  Student ID        : " + ex.getStudentId());\r
            System.out.println("  Timestamp (UTC)   : " + ex.getErrorTimestamp());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 8: Exception Domain Metadata\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METADATA ATTRIBUTES:\r
   - Final fields in exception class.\r
   - Initialized in constructor.\r
   - Includes: 'errorCode', 'transactionId', 'userId', 'timestamp'.\r
   - Exposed via getters for audit loggers and JSON error responses.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why is attaching structured metadata fields (errorCode, transactionId, timestamp) to custom exceptions essential in modern enterprise microservices?",shortAnswer:"Because structured metadata transforms raw error strings into machine-parseable audit records. It allows centralized API gateways and logging frameworks (e.g. ELK, Datadog) to extract error codes, correlate distributed transaction IDs, and generate standardized JSON error responses (RFC 7807 Problem Details) automatically.",explanation:"Standard practice in REST APIs and financial transactions.",hint:"Enables machine-parseable logging, distributed transaction tracing, and standardized JSON error payloads.",level:"Intermediate",codeExample:"public class ApiException extends RuntimeException { private final int status; private final String code; }"}];function I(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 8"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Enterprise Metadata"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Adding Domain Metadata to Custom Exceptions (",t.jsx("code",{className:"text-emerald-400 font-mono",children:"errorCode"}),", ",t.jsx("code",{className:"text-sky-400 font-mono",children:"transactionId"}),")"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Architect production-ready exceptions: enriching error objects with machine-parseable error codes, UTC timestamps, and correlation IDs for distributed tracing."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:s,title:"CustomExceptionDomainMetadataDemo.java",highlightLines:[7,10,11,12,13,16,17,18,19,20,29,30]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{title:"Exception Metadata FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:o,title:"Module 004_003 Topic 8: Exception Domain Metadata",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic8_exception_metadata_note.txt"})}),t.jsx(a,{note:"In enterprise systems, loggers shouldn't just print 'Error!'. By attaching an errorCode ('ERR_GST_404') and transactionId, your support team in Barrackpore can locate the exact failing database query in 5 seconds! — Sukanta Hui"})]})}export{I as default};
