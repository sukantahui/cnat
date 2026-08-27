import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 004_005: Propagation, Chaining & Best Practices\r
 * Topic 10: Clean Enterprise Multi-Tier Error Handling Architecture (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.sql.SQLException;\r
\r
public class CleanEnterpriseMultiTierArchitectureCapstoneDemo {\r
\r
    // 1. DATA ACCESS LAYER (Repository): Interacts with raw JDBC / storage\r
    public static class StudentRepository {\r
        public String findStudentInDatabase(String roll) throws SQLException {\r
            if ("ROLL_ERR".equals(roll)) {\r
                throw new SQLException("Connection to Barrackpore PostgreSQL cluster timed out!");\r
            }\r
            return "Debangshu Mukherjee (Barrackpore Hub)";\r
        }\r
    }\r
\r
    // 2. SERVICE LAYER: Encapsulates business logic & translates technical errors\r
    public static class StudentService {\r
        private final StudentRepository repository = new StudentRepository();\r
\r
        public String getStudentProfile(String roll) {\r
            try {\r
                return repository.findStudentInDatabase(roll);\r
            } catch (SQLException rawSqlEx) {\r
                // TRANSLATION: Wrap technical SQL error into clean unchecked domain exception:\r
                throw new IllegalStateException("Unable to retrieve student profile at this time", rawSqlEx);\r
            }\r
        }\r
    }\r
\r
    // 3. CONTROLLER LAYER: Top-level API boundary (Centralized error response)\r
    public static class StudentController {\r
        private final StudentService service = new StudentService();\r
\r
        public void handleGetStudentRequest(String roll) {\r
            System.out.println("  [HTTP GET /students/" + roll + "] Processing request...");\r
            try {\r
                String profile = service.getStudentProfile(roll);\r
                System.out.println("  [HTTP 200 OK] Response Payload: " + profile);\r
            } catch (IllegalStateException e) {\r
                // CENTRALIZED ERROR BOUNDARY: Log once with root cause, return HTTP 500 JSON\r
                System.out.println("  [HTTP 500 INTERNAL ERROR] Response: { "error": "" + e.getMessage() + "" }");\r
                System.out.println("  [INTERNAL LOGGING] Root Cause: " + e.getCause());\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: ENTERPRISE MULTI-TIER ERROR ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentController controller = new StudentController();\r
\r
        System.out.println(">>> 1. Successful Multi-Tier Request:");\r
        controller.handleGetStudentRequest("ROLL_101");\r
\r
        System.out.println("\\n>>> 2. Failed Multi-Tier Request (Clean Propagation & Translation):");\r
        controller.handleGetStudentRequest("ROLL_ERR");\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 004_005 PROPAGATION, CHAINING & BEST PRACTICES 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_005: Propagation, Chaining & Best Practices\r
Topic 10: Multi-Tier Architecture Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE 004_005 SUMMARY:\r
   - Propagation bubbles exceptions up the call stack.\r
   - Stack unwinding dismantles stack frames while guaranteeing finally execution.\r
   - Default exception handler halts thread and prints stack trace.\r
   - Read stack traces: Class & Message on top, first app line is the bug.\r
   - Exception chaining: Wrap low-level errors into domain exceptions with cause.\r
   - Avoid 'Log & Throw', 'Swallow & Ignore', and 'Catch Throwable' anti-patterns.\r
   - Document all exceptions with '@throws' in Javadoc.\r
   - Multi-tier architecture: Repo &rarr; Service (Wrap) &rarr; Controller (Log once).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How should exceptions be architectured across a standard 3-tier enterprise application (Repository -> Service -> Controller)?",shortAnswer:"1. Repository Layer: Catches or lets raw low-level database/I/O exceptions bubble up. 2. Service Layer: Translates low-level exceptions into high-level business domain exceptions with root cause chaining. 3. Controller Layer: Functions as the centralized error boundary, intercepting domain exceptions, logging them ONCE with full traces, and returning standardized HTTP error status payloads to clients.",explanation:"The foundational architecture powering Spring Boot microservices globally.",hint:"Repo accesses raw data; Service wraps in domain exceptions; Controller logs once and returns HTTP errors.",level:"Advanced",codeExample:"// Repo (SQLException) -> Service (DomainException) -> Controller (@ExceptionHandler HTTP 500)"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Enterprise Capstone"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Clean Enterprise Multi-Tier Error Handling Architecture (Capstone)"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Architect production-grade enterprise resilience: orchestrating clean 3-tier error propagation across Repositories, Services, and REST Controllers with centralized logging."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"CleanEnterpriseMultiTierArchitectureCapstoneDemo.java",highlightLines:[7,10,12,13,20,24,25,33,37,40,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Enterprise Architecture FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 004_005 Topic 10: Multi-Tier Architecture Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_005_topic10_multi_tier_architecture_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 004_005! You have mastered exception propagation, stack unwinding, forensic stack trace reading, exception chaining, avoiding anti-patterns, and designing 3-tier enterprise error architectures! — Sukanta Hui"})]})}export{g as default};
