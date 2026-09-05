import{j as r}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 004_006: Exception Handling Real-World Lab\r
 * Topic 1: Designing a Unified Enterprise API Error Response Model (RFC 7807 Pattern)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.time.Instant;\r
import java.util.Collections;\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
// Immutable Enterprise REST Error Payload DTO conforming to RFC 7807 Problem Details:\r
public class ApiErrorResponse {\r
    private final Instant timestamp;\r
    private final int status;\r
    private final String errorCode;\r
    private final String message;\r
    private final String path;\r
    private final Map<String, String> fieldErrors;\r
\r
    public ApiErrorResponse(int status, String errorCode, String message, String path, Map<String, String> fieldErrors) {\r
        this.timestamp = Instant.now();\r
        this.status = status;\r
        this.errorCode = errorCode;\r
        this.message = message;\r
        this.path = path;\r
        this.fieldErrors = fieldErrors != null ? Collections.unmodifiableMap(new HashMap<>(fieldErrors)) : Collections.emptyMap();\r
    }\r
\r
    public Instant getTimestamp() { return timestamp; }\r
    public int getStatus() { return status; }\r
    public String getErrorCode() { return errorCode; }\r
    public String getMessage() { return message; }\r
    public String getPath() { return path; }\r
    public Map<String, String> getFieldErrors() { return fieldErrors; }\r
\r
    public void printJsonPayload() {\r
        System.out.println("  {");\r
        System.out.println("    "timestamp": "" + timestamp + "",");\r
        System.out.println("    "status": " + status + ",");\r
        System.out.println("    "errorCode": "" + errorCode + "",");\r
        System.out.println("    "message": "" + message + "",");\r
        System.out.println("    "path": "" + path + "",");\r
        System.out.println("    "fieldErrors": " + fieldErrors);\r
        System.out.println("  }");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: UNIFIED API ERROR RESPONSE MODEL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Map<String, String> validationErrors = new HashMap<>();\r
        validationErrors.put("studentName", "Student name cannot be blank");\r
        validationErrors.put("admissionFee", "Deposit fee must be >= 5000 INR");\r
\r
        ApiErrorResponse error = new ApiErrorResponse(\r
                400,\r
                "ERR_VALIDATION_FAILED",\r
                "Admission payload contained 2 invalid fields",\r
                "/api/v1/students/admissions",\r
                validationErrors\r
        );\r
\r
        System.out.println(">>> Standardized Enterprise JSON Error Payload:");\r
        error.printJsonPayload();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_006: Exception Handling Real-World Lab\r
Topic 1: Unified API Error Response Model\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RFC 7807 ERROR MODEL FIELDS:\r
   - 'timestamp'  : Instant.now() in UTC.\r
   - 'status'     : HTTP status code (400, 404, 500).\r
   - 'errorCode'  : Machine-parseable identifier ('PAY_4001').\r
   - 'message'    : Descriptive string.\r
   - 'path'       : Endpoint URI ('/api/v1/enroll').\r
   - 'fieldErrors': Map of specific validation failures.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the standard fields recommended by RFC 7807 (Problem Details for HTTP APIs) in a unified enterprise error response model?",shortAnswer:"1. 'timestamp': UTC Instant of failure. 2. 'status': HTTP status integer (e.g. 400, 404, 500). 3. 'errorCode': Domain-specific business error code string (e.g. 'ERR_VALIDATION_4001'). 4. 'message': Human-readable summary. 5. 'path': Request endpoint URI path. 6. 'fieldErrors': Key-value map of invalid form fields.",explanation:"Provides consistent, machine-parseable error responses across all REST microservices.",hint:"timestamp, status, errorCode, message, path, and fieldErrors map.",level:"Intermediate",codeExample:"public record ApiError(Instant time, int status, String code, String message, String path) {}"}];function x(){return r.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[r.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[r.jsxs("div",{className:"flex items-center gap-3",children:[r.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_006 · Topic 1"}),r.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"REST Error DTO"})]}),r.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Designing a Unified Enterprise API Error Response Model (RFC 7807 Pattern)"}),r.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build industry-standard REST error contracts: crafting immutable DTOs carrying timestamps, HTTP status codes, machine error codes, and field-level validation maps."})]}),r.jsxs("section",{className:"space-y-4",children:[r.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[r.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),r.jsx(e,{fileModule:a,title:"ApiErrorResponse.java",highlightLines:[7,13,14,15,16,17,18,20,21,22,23]})]}),r.jsx("section",{className:"space-y-4",children:r.jsx(t,{title:"API Error Model FAQs",questions:o})}),r.jsx("section",{className:"space-y-4",children:r.jsx(n,{content:i,title:"Module 004_006 Topic 1: API Error Response Model",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_006_topic1_api_error_response_note.txt"})}),r.jsx(s,{note:"Every modern REST API you build should return a clean JSON payload like ApiErrorResponse whenever an error occurs! Clients like React and Flutter can easily parse fieldErrors and display red outlines on form inputs! — Sukanta Hui"})]})}export{x as default};
