import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 11: filter(Predicate) on Optional - Conditional Validation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class FilterPredicateOptionalDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: FILTER(PREDICATE) ON OPTIONAL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<UserAccount> adminUser = Optional.of(new UserAccount("Swadeep", "ADMIN", true));\r
        Optional<UserAccount> guestUser = Optional.of(new UserAccount("Abhronila", "GUEST", true));\r
        Optional<UserAccount> disabledUser = Optional.of(new UserAccount("Debangshu", "ADMIN", false));\r
\r
        System.out.println(">>> TESTING ADMIN ACCESS VALIDATION VIA OPTIONAL.FILTER():");\r
\r
        // Validating admin role and active status via chained filters:\r
        checkAdminAccess("Admin User", adminUser);\r
        checkAdminAccess("Guest User", guestUser);\r
        checkAdminAccess("Disabled Admin", disabledUser);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static void checkAdminAccess(String label, Optional<UserAccount> userOpt) {\r
        Optional<UserAccount> authorizedAdmin = userOpt\r
            .filter(UserAccount::active)                       // Rule 1: Must be active\r
            .filter(u -> "ADMIN".equalsIgnoreCase(u.role())); // Rule 2: Must have ADMIN role\r
\r
        System.out.println("  - " + label + " Access Status: " + \r
            authorizedAdmin.map(u -> "GRANTED (" + u.username() + ")").orElse("DENIED / RESTRICTED"));\r
    }\r
\r
    record UserAccount(String username, String role, boolean active) {}\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 11: filter(Predicate) on Optional\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: 'public Optional<T> filter(Predicate<? super T> predicate)'.\r
   - If a value is present and matches the predicate, returns this Optional.\r
   - If a value is present but fails the predicate, returns 'Optional.empty()'.\r
   - If the Optional was already empty, returns 'Optional.empty()'.\r
\r
2. COMMON USE CASES:\r
   - Security permissions & role checks.\r
   - Numerical threshold validation.\r
   - Non-empty string validation ('opt.filter(s → !s.isBlank())').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does optional.filter(predicate) return if the Optional is empty?",shortAnswer:"It returns Optional.empty() immediately without evaluating the predicate.",explanation:"Safe to call without checking isPresent() first.",hint:"Returns Optional.empty() without running the predicate.",level:"Beginner",codeExample:"Optional.<String>empty().filter(s → s.length() > 5); // Returns Optional.empty()"},{question:"How can you validate that a String Optional contains non-blank text using filter?",shortAnswer:"By chaining .filter(Predicate.not(String::isBlank)) or .filter(s → !s.trim().isEmpty()).",explanation:"Converts blank string Optionals to Optional.empty() cleanly.",hint:"opt.filter(Predicate.not(String::isBlank))",level:"Intermediate",codeExample:"Optional<String> validText = textOpt.filter(Predicate.not(String::isBlank));"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"filter(Predicate)"}),": Conditional Value Retention on Optional"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Null-safe validation: evaluating predicate conditions on wrapped values, converting failing values to Optional.empty(), and eliminating guard clauses."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"FilterPredicateOptionalDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:l,title:"Module 009_008 Topic 11: filter(Predicate) on Optional",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic11_filter_predicate_optional_note.txt"})}),e.jsx(r,{note:"Optional.filter() is fantastic for security and validation checks: if the student is inactive or the user is not an admin, filter() turns the Optional into Optional.empty() immediately! — Sukanta Hui"})]})}export{f as default};
