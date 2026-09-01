import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 6: Return Type Rules in Overriding: Covariant Return Types (Java 5+)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class CovariantReturnTypesDemo {\r
\r
    // Base Entity & Subtype Entity\r
    public static class Person {\r
        public String getRole() { return "General Person"; }\r
    }\r
\r
    public static class TraineeDeveloper extends Person {\r
        @Override\r
        public String getRole() { return "Certified Java Specialist"; }\r
    }\r
\r
    // Factory Service with Covariant Return\r
    public static class AcademyEnrollmentService {\r
        // Parent method returns general 'Person'\r
        public Person recruitCandidate() {\r
            System.out.println("  [BASE SERVICE] Recruiting general Person...");\r
            return new Person();\r
        }\r
    }\r
\r
    public static class AdvancedCloudEnrollmentService extends AcademyEnrollmentService {\r
        // COVARIANT RETURN: Child method returns specialized subtype 'TraineeDeveloper'!\r
        // Valid because TraineeDeveloper IS-A Person!\r
        @Override\r
        public TraineeDeveloper recruitCandidate() {\r
            System.out.println("  [SPECIALIZED SERVICE] Recruiting specialized TraineeDeveloper!");\r
            return new TraineeDeveloper();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: COVARIANT RETURN TYPES IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AdvancedCloudEnrollmentService service = new AdvancedCloudEnrollmentService();\r
\r
        // No explicit type casting required by the caller!\r
        TraineeDeveloper developer = service.recruitCandidate();\r
        System.out.println("  Candidate Role: " + developer.getRole());\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 6: Covariant Return Types\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COVARIANT RETURN TYPE RULES:\r
   - Permitted for reference types (objects), NOT primitives.\r
   - Child return type must be a valid subclass of parent return type.\r
   - Eliminates cumbersome downcasting on factory method calls.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is a Covariant Return Type in Java (introduced in Java 5)?",shortAnswer:"The ability of an overriding subclass method to specify a return type that is a subtype (subclass) of the return type declared in the superclass method.",explanation:"Eliminates the need for explicit type casting on the caller side when working with specialized factories.",hint:"Subclass method returns a more specific subtype than the parent method.",level:"Intermediate",codeExample:`// Parent: Person get()
// Child: TraineeDeveloper get()`}];function v(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type Specialization"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Return Type Rules in Overriding: Covariant Return Types"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover how Covariant Return Types allow overriding methods to return specialized subtypes, eliminating casting friction and elevating factory design."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"CovariantReturnTypesDemo.java",highlightLines:[20,28,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Covariant Return Types FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_006 Topic 6: Covariant Return Types",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic6_covariant_returns_note.txt"})}),e.jsx(a,{note:"If your parent method returns Person, your child method can return TraineeDeveloper directly! Covariant returns save your callers from having to cast the result. — Sukanta Hui"})]})}export{v as default};
