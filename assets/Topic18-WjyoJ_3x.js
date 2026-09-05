import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 18: Null-Safe Functional Architecture - Enterprise Capstone\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.List;\r
import java.util.Optional;\r
\r
public class NullSafeArchitectureCapstoneDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 18: NULL-SAFE ARCHITECTURE CAPSTONE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyService service = new AcademyService();\r
\r
        System.out.println(">>> 1. Processing Complete Student Profile (Swadeep Paul):");\r
        String location1 = service.getStudentPostalDistrict(101);\r
        System.out.println("   - Resolved Postal District: " + location1);\r
\r
        System.out.println("\\n>>> 2. Processing Student Missing Address (Tuhina Das):");\r
        String location2 = service.getStudentPostalDistrict(102);\r
        System.out.println("   - Resolved Postal District: " + location2);\r
\r
        System.out.println("\\n>>> 3. Processing Student with Incomplete Pincode (Abhronila Das):");\r
        String location3 = service.getStudentPostalDistrict(103);\r
        System.out.println("   - Resolved Postal District: " + location3);\r
\r
        System.out.println("\\n>>> 4. Processing Non-Existent Student ID (999):");\r
        String location4 = service.getStudentPostalDistrict(999);\r
        System.out.println("   - Resolved Postal District: " + location4);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 009_008 COMPLETE: NULL-SAFE FUNCTIONAL PROGRAMMING MASTERED!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    // Enterprise Service Layer with Complete Functional Null-Safety\r
    static class AcademyService {\r
        private final List<StudentRecord> database = List.of(\r
            new StudentRecord(101, "Swadeep Paul", new AddressRecord("Barrackpore", "700120")),\r
            new StudentRecord(102, "Tuhina Das", null), // Missing address\r
            new StudentRecord(103, "Abhronila Das", new AddressRecord("Shyamnagar", null)) // Missing pincode\r
        );\r
\r
        public String getStudentPostalDistrict(int studentId) {\r
            // End-to-End Null-Safe Monadic Pipeline:\r
            // 1. Find student by ID -> Optional<StudentRecord>\r
            // 2. Safe map to Address -> Optional<AddressRecord>\r
            // 3. Safe map to Pincode -> Optional<String>\r
            // 4. Validate 6-digit West Bengal Pin -> filter\r
            // 5. Transform to District String -> map\r
            // 6. Safe fallback -> orElse\r
            return findStudent(studentId)\r
                .map(StudentRecord::address)\r
                .map(AddressRecord::pincode)\r
                .filter(pin -> pin.length() == 6 && pin.startsWith("700"))\r
                .map(pin -> "North 24 Parganas (PIN: " + pin + ")")\r
                .orElse("DISTRICT_UNVERIFIED_OR_MISSING");\r
        }\r
\r
        private Optional<StudentRecord> findStudent(int id) {\r
            return database.stream().filter(s -> s.id() == id).findFirst();\r
        }\r
    }\r
\r
    record StudentRecord(int id, String name, AddressRecord address) {}\r
    record AddressRecord(String city, String pincode) {}\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 18: Null-Safe Functional Architecture Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ENTERPRISE NULL-SAFE PIPELINE PATTERN:\r
   - Deep navigation across nullable object graphs:\r
     'findEntity(id)'\r
     '.map(Entity::getComponent)'\r
     '.map(Component::getSubComponent)'\r
     '.filter(SubComponent::isValid)'\r
     '.map(SubComponent::toDto)'\r
     '.orElse(DEFAULT_DTO);'\r
\r
2. ZERO NPE GUARANTEE:\r
   - If any step in the navigation chain produces 'null' or is 'empty', the pipeline\r
     gracefully resolves to the fallback without throwing NullPointerException.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does the monadic chain opt.map(A::getB).map(B::getC).orElse('Default') eliminate nested if-null checks?",shortAnswer:"If getB() or getC() returns null at any point, map() automatically converts the intermediate state to Optional.empty(), safely bypassing all subsequent map calls and returning the fallback value directly.",explanation:"Provides 100% null safety in a single readable line.",hint:"Propagates empty state automatically across the entire navigation chain.",level:"Intermediate",codeExample:"opt.map(User::getAddress).map(Address::getCity).orElse('Unknown');"},{question:"What is the primary benefit of Null-Safe Functional Architecture for team maintainability?",shortAnswer:"It makes absence handling explicit and mandatory in the type system, reducing production bug reports, eliminating defensive if-null boilerplate, and creating self-documenting code.",explanation:"Dramatically reduces codebase complexity and technical debt.",hint:"Eliminates defensive boilerplate and ensures type-safe absence handling.",level:"Beginner",codeExample:"Clean declarative code with zero NullPointerExceptions."}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 18"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Null-Safe Functional Architecture: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"End-to-End Optional Pipelines"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Comprehensive null-safe architecture: eliminating all NullPointerExceptions from multi-tier enterprise systems using Optional pipelines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"NullSafeArchitectureCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 009_008 Topic 18: Null-Safe Architecture Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic18_null_safe_architecture_capstone_note.txt"})}),e.jsx(a,{note:"Congratulations on mastering Optional and Null-Safe Functional Programming! You have eliminated the Billion Dollar Mistake from your Java applications forever! — Sukanta Hui"})]})}export{h as default};
