import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 10: Multi-Tier Architecture in Core Java - Model -> DAO -> Service -> Controller\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
public class MultiTierArchitectureCoreJavaDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: MULTI-TIER APPLICATION ARCHITECTURE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> THE 4-TIER ENTERPRISE JAVA BLUEPRINT:");\r
        System.out.println("  1. PRESENTATION / CONTROLLER LAYER (CLI / Web / REST / Swing GUI):");\r
        System.out.println("     - Accepts user input, validates request format, renders views/JSON responses.\\n");\r
\r
        System.out.println("  2. SERVICE LAYER (Business Logic):");\r
        System.out.println("     - Orchestrates business rules, fee calculations, discount validations, transaction boundaries.\\n");\r
\r
        System.out.println("  3. DATA ACCESS LAYER (DAO Interface + JDBC Implementation):");\r
        System.out.println("     - Executes SQL queries, binds PreparedStatement parameters, maps ResultSets to Models.\\n");\r
\r
        System.out.println("  4. DOMAIN / MODEL LAYER (Java Records / Entities):");\r
        System.out.println("     - Pure immutable data carriers shared across all layers.\\n");\r
\r
        System.out.println(">>> DEPENDENCY DIRECTION (Strictly Unidirectional):");\r
        System.out.println("  [Controller] ---> [Service] ---> [DAO Interface] <--- [DAO Implementation]");\r
        System.out.println("       |                 |               |");\r
        System.out.println("       +-----------------+---------------+-----> [Domain Model]");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 10: Multi-Tier Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LAYER ROLES:\r
   - Controller : User Interaction / HTTP endpoints.\r
   - Service    : Business Rules / Calculations.\r
   - DAO        : Database CRUD operations.\r
   - Model      : Immutable Data representations.\r
\r
2. GOLDEN RULE:\r
   - Never skip layers (e.g. Controller calling DAO directly without Service).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why should a Presentation/Controller component never call a DAO directly, bypassing the Service layer?",shortAnswer:"Because bypassing the Service layer prevents business validation rules, authorization checks, auditing, and transaction demarcation from executing, leading to duplicated logic and compromised data integrity.",explanation:"Preserves centralized business rule enforcement.",hint:"Bypasses essential business validation and transaction management.",level:"Beginner",codeExample:"Always route: Controller → Service → DAO."},{question:"What is the Dependency Inversion Principle (DIP) in the context of the DAO pattern?",shortAnswer:"High-level service modules should not depend upon low-level database modules directly; both should depend upon abstractions (the DAO interface).",explanation:"The 'D' in SOLID principles.",hint:"Services depend on abstract DAO interfaces, not concrete JDBC classes.",level:"Intermediate",codeExample:"Service depends on StudentDao (interface), not StudentDaoJdbcImpl."}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Multi-Tier Architecture in Core Java: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Model → DAO → Service → Controller"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Enterprise application anatomy: structuring clean, scalable Java applications with strict layer boundaries and unidirectional dependencies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"MultiTierArchitectureCoreJavaDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Batch Updates & DAO FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 011_005 Topic 10: Multi-Tier Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic10_multitier_architecture_core_java_note.txt"})}),e.jsx(a,{note:"This 4-tier architecture (Model → DAO → Service → Controller) is the universal blueprint of enterprise Java! Whether you are building a console app, a Swing GUI, or a massive Spring Boot microservice, this layered architecture is identical! — Sukanta Hui"})]})}export{S as default};
