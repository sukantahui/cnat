import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 10: Real-World Enterprise Custom Exceptions Catalog (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
// 1. UserNotFoundException (HTTP 404 Equivalent):\r
class UserNotFoundException extends RuntimeException {\r
    private final String userId;\r
    public UserNotFoundException(String userId) {\r
        super("User with ID '" + userId + "' was not found in Barrackpore registry.");\r
        this.userId = userId;\r
    }\r
    public String getUserId() { return userId; }\r
}\r
\r
// 2. InsufficientBalanceException (Business Rule Violation):\r
class InsufficientBalanceException extends Exception {\r
    private final double currentBalance;\r
    private final double requestedAmount;\r
    public InsufficientBalanceException(double current, double requested) {\r
        super(String.format("Insufficient funds! Current: %.2f INR, Requested: %.2f INR", current, requested));\r
        this.currentBalance = current;\r
        this.requestedAmount = requested;\r
    }\r
    public double getShortfall() { return requestedAmount - currentBalance; }\r
}\r
\r
// 3. DuplicateAccountException (HTTP 409 Conflict):\r
class DuplicateAccountException extends RuntimeException {\r
    public DuplicateAccountException(String email) {\r
        super("An account already exists with email: " + email);\r
    }\r
}\r
\r
public class EnterpriseCustomExceptionsCatalogCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: ENTERPRISE CUSTOM EXCEPTIONS CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Simulating UserNotFoundException:");\r
        try {\r
            throw new UserNotFoundException("USR_BKP_1092");\r
        } catch (UserNotFoundException e) {\r
            System.out.println("  [NOT FOUND HANDLER] " + e.getMessage() + " (User: " + e.getUserId() + ")");\r
        }\r
\r
        System.out.println("\\n>>> 2. Simulating InsufficientBalanceException (Checked):");\r
        try {\r
            throw new InsufficientBalanceException(2500.0, 6000.0);\r
        } catch (InsufficientBalanceException e) {\r
            System.out.println("  [PAYMENT HANDLER] " + e.getMessage());\r
            System.out.println("  [ACTION] Prompt student to deposit shortfall: " + e.getShortfall() + " INR");\r
        }\r
\r
        System.out.println("\\n>>> 3. Simulating DuplicateAccountException:");\r
        try {\r
            throw new DuplicateAccountException("swadeep.paul@coderaccotax.com");\r
        } catch (DuplicateAccountException e) {\r
            System.out.println("  [CONFLICT HANDLER] " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 004_003 THROW, THROWS & CUSTOM EXCEPTIONS 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 10: Enterprise Custom Exceptions Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 004_003 SUMMARY:\r
   - 'throw' actively raises an exception object.\r
   - 'throws' declares checked exceptions in method signatures.\r
   - Method overriding rule: Child cannot throw broader checked exceptions.\r
   - Favor reusing standard exceptions (IllegalArgumentException, etc.).\r
   - Create custom Unchecked (extends RuntimeException) or Checked (extends Exception).\r
   - Add domain metadata (errorCode, IDs) and implement all 4 constructors.\r
   - Maps cleanly to HTTP REST status codes in enterprise systems.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How do domain-specific custom exceptions (e.g. UserNotFoundException, DuplicateAccountException) map directly to modern HTTP REST status codes in Spring Boot microservices?",shortAnswer:"1. 'UserNotFoundException' maps directly to HTTP 404 NOT_FOUND. 2. 'DuplicateAccountException' maps to HTTP 409 CONFLICT. 3. 'InsufficientBalanceException' maps to HTTP 422 UNPROCESSABLE_ENTITY. Global exception handlers ('@ExceptionHandler') intercept these custom exceptions and generate standardized REST responses automatically.",explanation:"The core architectural pattern powering all modern enterprise Spring Boot and Quarkus APIs.",hint:"Custom domain exceptions map cleanly to standard HTTP status codes in REST APIs.",level:"Intermediate",codeExample:"@ExceptionHandler(UserNotFoundException.class) @ResponseStatus(HttpStatus.NOT_FOUND) public ErrorDto handle() {}"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Enterprise Capstone"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Real-World Enterprise Custom Exceptions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"UserNotFound"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"InsufficientBalance"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Architect production enterprise domain hierarchies: designing clean custom business exceptions that map seamlessly to HTTP REST status codes and microservice error boundaries."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"EnterpriseCustomExceptionsCatalogCapstoneDemo.java",highlightLines:[7,9,15,17,26,38,46,54]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Enterprise Exceptions FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:a,title:"Module 004_003 Topic 10: Enterprise Exceptions Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic10_enterprise_exceptions_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Module 004_003! You now know how to design clean, domain-driven exception hierarchies with rich metadata that power real-world enterprise banking and accounting applications! — Sukanta Hui"})]})}export{h as default};
