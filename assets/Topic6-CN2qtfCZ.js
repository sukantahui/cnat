import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const o=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 6: Creating Custom Unchecked Exceptions: Extending java.lang.RuntimeException\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
// Custom Unchecked Exception (Extends RuntimeException):\r
public class InvalidSessionTokenException extends RuntimeException {\r
\r
    public InvalidSessionTokenException(String message) {\r
        super(message);\r
    }\r
\r
    public InvalidSessionTokenException(String message, Throwable cause) {\r
        super(message, cause);\r
    }\r
}\r
\r
class SessionValidatorDemo {\r
\r
    public static void authenticateTraineeSession(String token) {\r
        // No 'throws' declaration needed in signature because it is UNCHECKED!\r
        if (token == null || !token.startsWith("CODER_ACCOTAX_")) {\r
            throw new InvalidSessionTokenException("Session token is invalid or expired! Token: " + token);\r
        }\r
        System.out.println("  [AUTHENTICATED] Session verified for token: " + token);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: CUSTOM UNCHECKED EXCEPTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Successful Authentication:");\r
        authenticateTraineeSession("CODER_ACCOTAX_98765_BARRACKPORE");\r
\r
        System.out.println("\\n>>> 2. Handling Custom Unchecked Exception:");\r
        try {\r
            authenticateTraineeSession("INVALID_TOKEN_XYZ");\r
        } catch (InvalidSessionTokenException e) {\r
            System.out.println("  [CAUGHT UNCHECKED] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 6: Custom Unchecked Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CUSTOM UNCHECKED SYNTAX:\r
   - 'public class MyException extends RuntimeException'\r
   - Pass message to 'super(message)'.\r
   - No 'throws' declaration needed in method header.\r
   - Clean, lightweight, preferred in modern frameworks.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,a=[{question:"How do you create a custom Unchecked Exception in Java and what are its signature requirements?",shortAnswer:"Create a class that extends 'java.lang.RuntimeException'. Because it is unchecked, methods that throw it are NOT required to declare 'throws' in their signatures, and callers are NOT forced by the compiler to wrap calls in try-catch blocks.",explanation:"Dominant exception pattern in modern Spring Boot and Microservice development.",hint:"Extend RuntimeException; no throws signature is required.",level:"Beginner",codeExample:"public class TokenExpiredException extends RuntimeException { public TokenExpiredException(String msg){super(msg);} }"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Unchecked Pattern"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Creating Custom Unchecked Exceptions: Extending ",e.jsx("code",{className:"text-rose-400 font-mono",children:"RuntimeException"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build modern lightweight exception architectures: inheriting from ",e.jsx("code",{className:"text-rose-300 font-mono",children:"RuntimeException"})," to avoid method signature clutter and enable global handling."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"InvalidSessionTokenException.java",highlightLines:[7,9,10,13,14,21,22,23]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Custom Unchecked FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 004_003 Topic 6: Custom Unchecked Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic6_custom_unchecked_exceptions_note.txt"})}),e.jsx(s,{note:"When designing REST APIs, make your custom business exceptions extend RuntimeException! That way they bubble straight up to your @ExceptionHandler without littering every single method signature! — Sukanta Hui"})]})}export{E as default};
