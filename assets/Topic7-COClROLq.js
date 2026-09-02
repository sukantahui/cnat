import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const i=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 7: orElseThrow(Supplier<Exception>) - Domain Exception Mapping\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class OrElseThrowDomainExceptionsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 7: ORELSETHROW(CUSTOM EXCEPTION) - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        int searchId = 999;\r
        Optional<Student> studentOpt = findStudentById(searchId);\r
\r
        System.out.println(">>> Searching for Student ID " + searchId + " in Database...");\r
        try {\r
            Student student = studentOpt.orElseThrow(\r
                () -> new StudentNotFoundException("Student with ID " + searchId + " not found at Barrackpore Academy!")\r
            );\r
            System.out.println("Student: " + student.name());\r
        } catch (StudentNotFoundException ex) {\r
            System.err.println("   [BUSINESS EXCEPTION CAUGHT]: " + ex.getMessage());\r
            System.out.println("   --> In Spring Boot, this maps automatically to HTTP 404 NOT FOUND!");\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    static Optional<Student> findStudentById(int id) {\r
        if (id == 101) return Optional.of(new Student(101, "Swadeep Paul"));\r
        return Optional.empty(); // Simulated database miss\r
    }\r
\r
    record Student(int id, String name) {}\r
\r
    static class StudentNotFoundException extends RuntimeException {\r
        public StudentNotFoundException(String message) {\r
            super(message);\r
        }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 7: orElseThrow with Domain Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD SIGNATURE:\r
   - '<X extends Throwable> T orElseThrow(Supplier<? extends X> exceptionSupplier) throws X'\r
\r
2. ENTERPRISE DESIGN PATTERN:\r
   - Common in Spring Boot / Jakarta EE service layers.\r
   - Maps database repository misses directly into HTTP 404 / 400 custom domain exceptions.\r
   - Example:\r
     'userRepo.findById(id).orElseThrow(() → new UserNotFoundException(id));'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"How does orElseThrow(Supplier) fit into modern Spring Boot REST controller architecture?",shortAnswer:"It allows concise 1-line entity retrieval from JPA repositories, immediately throwing a domain exception (like ResourceNotFoundException) if the database query returns Optional.empty(), which an @ExceptionHandler or @ResponseStatus converts to HTTP 404.",explanation:"Eliminates verbose if-null checks in service layers.",hint:"Converts repository Optional.empty() into HTTP 404 domain exceptions.",level:"Intermediate",codeExample:"return repo.findById(id).orElseThrow(() → new ResourceNotFoundException('User ' + id));"},{question:"Can orElseThrow(Supplier) throw checked exceptions?",shortAnswer:"Yes! Because the generic type is <X extends Throwable>, the supplier can construct and throw checked exceptions as well as unchecked RuntimeExceptions.",explanation:"The calling method must declare the checked exception in its throws clause.",hint:"Yes, supports both checked and unchecked exceptions.",level:"Intermediate",codeExample:"opt.orElseThrow(() → new IOException('File missing'));"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 7"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"orElseThrow(Supplier<Exception>)"}),": Domain-Specific Error Handling"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Mapping absence to business exceptions: throwing StudentNotFoundException, ResourceNotFoundException, or custom REST 404 responses cleanly."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"OrElseThrowDomainExceptionsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 009_008 Topic 7: orElseThrow with Domain Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic7_orelsethrow_domain_exceptions_note.txt"})}),e.jsx(o,{note:"This is standard practice in Spring Boot REST APIs! When a user or student is not found by ID, throw your custom ResourceNotFoundException directly with .orElseThrow(() → new ResourceNotFoundException('ID not found'))! — Sukanta Hui"})]})}export{E as default};
