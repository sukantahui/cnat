import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 004_006: Exception Handling Real-World Lab\r
 * Topic 2: Implementing a Global Exception Interceptor Simulation (@ControllerAdvice Pattern)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.util.Collections;\r
\r
public class GlobalExceptionInterceptorSimulationDemo {\r
\r
    // Simulated Global Exception Gateway (@ControllerAdvice / Interceptor):\r
    public static class GlobalExceptionHandlerGateway {\r
\r
        public static ApiErrorResponse handleException(Throwable ex, String requestPath) {\r
            if (ex instanceof UserNotFoundException unfe) {\r
                return new ApiErrorResponse(404, "USER_NOT_FOUND", unfe.getMessage(), requestPath, null);\r
            }\r
            if (ex instanceof IllegalArgumentException iae) {\r
                return new ApiErrorResponse(400, "BAD_REQUEST_PARAM", iae.getMessage(), requestPath, null);\r
            }\r
            if (ex instanceof InsufficientBalanceException ibe) {\r
                return new ApiErrorResponse(422, "INSUFFICIENT_FUNDS", ibe.getMessage(), requestPath,\r
                        Collections.singletonMap("shortfall", String.valueOf(ibe.getShortfall())));\r
            }\r
\r
            // Fallback for unexpected internal crashes (HTTP 500):\r
            return new ApiErrorResponse(500, "INTERNAL_SERVER_ERROR", "An unexpected system error occurred", requestPath, null);\r
        }\r
    }\r
\r
    public static void simulateApiDispatch(String endpoint, Runnable action) {\r
        System.out.println("  [REQUEST INCOMING] " + endpoint);\r
        try {\r
            action.run();\r
            System.out.println("  [HTTP 200 OK] Request succeeded.\\n");\r
        } catch (Throwable t) {\r
            ApiErrorResponse errorPayload = GlobalExceptionHandlerGateway.handleException(t, endpoint);\r
            System.out.println("  [INTERCEPTED & CONVERTED TO REST PAYLOAD]");\r
            errorPayload.printJsonPayload();\r
            System.out.println();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: GLOBAL EXCEPTION INTERCEPTOR - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Simulating 404 Not Found:");\r
        simulateApiDispatch("/api/v1/students/USR_99", () -> {\r
            throw new UserNotFoundException("USR_99");\r
        });\r
\r
        System.out.println(">>> 2. Simulating 422 Unprocessable Entity (Insufficient Balance):");\r
        simulateApiDispatch("/api/v1/payments/pay", () -> {\r
            try {\r
                throw new InsufficientBalanceException(2000.0, 5000.0);\r
            } catch (InsufficientBalanceException e) {\r
                throw new RuntimeException(e); // Propagates to interceptor\r
            }\r
        });\r
\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_006: Exception Handling Real-World Lab\r
Topic 2: Global Exception Interceptor\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GLOBAL INTERCEPTOR BENEFITS:\r
   - Centralizes error-to-JSON translation.\r
   - Eliminates duplicate try-catch blocks across 50 controllers.\r
   - Maps domain exceptions to HTTP status codes (404, 422, 500).\r
   - Uniform logging and telemetry across the application.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How does a centralized Global Exception Interceptor (like Spring's @ControllerAdvice) transform error handling architecture in Java web applications?",shortAnswer:"It removes repetitive try-catch boilerplate from individual Controller endpoints. All unhandled exceptions bubble up to a single centralized interceptor gateway, which inspects the exception type, logs it once, and formats a standardized JSON ApiErrorResponse with appropriate HTTP status codes (400, 404, 422, 500).",explanation:"Standard enterprise architectural pattern for all modern Java REST services.",hint:"Centralizes error-to-HTTP mapping in one location, eliminating try-catch in controllers.",level:"Intermediate",codeExample:"@RestControllerAdvice public class GlobalErrorHandler { @ExceptionHandler ... }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_006 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Global Interceptor"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Implementing a Global Exception Interceptor Simulation (",e.jsx("code",{className:"text-purple-400 font-mono",children:"@ControllerAdvice"})," Pattern)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Architect centralized error handling: simulating modern framework exception interceptors to automatically convert domain failures into standard JSON API payloads."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"GlobalExceptionInterceptorSimulationDemo.java",highlightLines:[7,10,12,13,15,16,18,19,24,28,30]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Global Interceptor FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_006 Topic 2: Global Exception Interceptor",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_006_topic2_global_interceptor_note.txt"})}),e.jsx(a,{note:"In Spring Boot, '@ControllerAdvice' works exactly like our GlobalExceptionHandlerGateway! It intercepts any error thrown anywhere in your app and turns it into a beautiful HTTP response! — Sukanta Hui"})]})}export{h as default};
