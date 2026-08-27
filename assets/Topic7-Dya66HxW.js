import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 7: Custom Banking Exceptions - Domain Error Hierarchy\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
import java.math.BigDecimal;\r
\r
public class CustomBankingExceptionsDemo {\r
\r
    // Base Domain Exception:\r
    public static class BankingException extends RuntimeException {\r
        private final String errorCode;\r
\r
        public BankingException(String errorCode, String message) {\r
            super(message);\r
            this.errorCode = errorCode;\r
        }\r
\r
        public String getErrorCode() { return errorCode; }\r
    }\r
\r
    // Specific Domain Exceptions:\r
    public static class InsufficientFundsException extends BankingException {\r
        private final String accountNumber;\r
        private final BigDecimal availableBalance;\r
        private final BigDecimal attemptedAmount;\r
\r
        public InsufficientFundsException(String accNo, BigDecimal available, BigDecimal attempted) {\r
            super("BANK-4001", "Insufficient balance in account " + accNo + ". Available: ₹" + available + ", Attempted: ₹" + attempted);\r
            this.accountNumber = accNo;\r
            this.availableBalance = available;\r
            this.attemptedAmount = attempted;\r
        }\r
    }\r
\r
    public static class AccountFrozenException extends BankingException {\r
        public AccountFrozenException(String accNo) {\r
            super("BANK-4003", "Account " + accNo + " is frozen by compliance.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: CUSTOM BANKING DOMAIN EXCEPTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        try {\r
            System.out.println("Attempting withdrawal of ₹50,000 from account with ₹10,000 balance...");\r
            throw new InsufficientFundsException("SB-BKP-101", new BigDecimal("10000.00"), new BigDecimal("50000.00"));\r
        } catch (InsufficientFundsException ex) {\r
            System.err.println("Caught Domain Error [" + ex.getErrorCode() + "]: " + ex.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 7: Custom Banking Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DOMAIN EXCEPTION BEST PRACTICES:\r
   - Provide structured error codes ('BANK-4001').\r
   - Attach immutable context fields (account number, available balance).\r
   - Cleanly map to HTTP 400/409 error responses in REST APIs.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why should custom domain exceptions carry contextual fields rather than just a String message?",shortAnswer:"Because structured fields (e.g. account number, attempted amount, error code) allow upstream callers, REST controllers, and automated monitoring systems to programmatically inspect the failure details and generate localized error messages without brittle string parsing.",explanation:"Standard enterprise domain exception design pattern.",hint:"Allows programmatic inspection of error details without brittle string parsing.",level:"Intermediate",codeExample:"public BigDecimal getAttemptedAmount() { return attemptedAmount; }"},{question:"Should domain exceptions like InsufficientFundsException be checked or unchecked?",shortAnswer:"In modern Java frameworks (Spring/Jakarta), unchecked exceptions (extending RuntimeException) are standard because they trigger automatic transaction rollbacks without cluttering every method signature with throws clauses.",explanation:"Spring @Transactional rolls back on unchecked exceptions by default.",hint:"Unchecked exceptions trigger automatic transaction rollbacks in modern frameworks.",level:"Intermediate",codeExample:"public class InsufficientFundsException extends RuntimeException { ... }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Custom Banking Exceptions: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Domain Error Hierarchy"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Expressive error modeling: building domain-specific banking exceptions (InsufficientFundsException, AccountFrozenException, DailyLimitExceededException)."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"CustomBankingExceptionsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Core Banking Capstone FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 012_002 Topic 7: Custom Banking Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic7_custom_banking_exceptions_note.txt"})}),e.jsx(a,{note:"Never throw generic RuntimeException in banking! Custom checked/unchecked exceptions carry essential context like Account Number, Attempted Amount, and Available Balance for precise UI error rendering and auditing! — Sukanta Hui"})]})}export{b as default};
