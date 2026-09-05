import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const s=`/**\r
 * Java Core Tutorial - Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
 * Topic 14: Real-World Modeling: Employee -> Manager Hierarchy vs Employee HAS-A Address\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.inheritance;\r
\r
public class RealWorldEnterpriseModelingDemo {\r
\r
    // Value Object (HAS-A Component)\r
    public static class PostalAddress {\r
        private String street;\r
        private String city;\r
        private String pinCode;\r
\r
        public PostalAddress(String street, String city, String pinCode) {\r
            this.street = street;\r
            this.city = city;\r
            this.pinCode = pinCode;\r
        }\r
\r
        public String getFullAddress() {\r
            return String.format("%s, %s - %s", street, city, pinCode);\r
        }\r
    }\r
\r
    // Base Entity\r
    public static class StaffMember {\r
        protected int empId;\r
        protected String fullName;\r
        protected double baseSalary;\r
        protected PostalAddress address; // HAS-A Association!\r
\r
        public StaffMember(int id, String name, double salary, PostalAddress address) {\r
            this.empId = id;\r
            this.fullName = name;\r
            this.baseSalary = salary;\r
            this.address = address;\r
        }\r
\r
        public void printSummary() {\r
            System.out.printf("  [STAFF #%d] %s | Salary: ₹%.2f | Address: %s\\n",\r
                    empId, fullName, baseSalary, address.getFullAddress());\r
        }\r
    }\r
\r
    // IS-A Specialization: AcademicManager IS-A StaffMember\r
    public static class AcademicManager extends StaffMember {\r
        private double leadershipBonus;\r
        private String managedHub;\r
\r
        public AcademicManager(int id, String name, double salary, PostalAddress address, double bonus, String hub) {\r
            super(id, name, salary, address); // IS-A relationship\r
            this.leadershipBonus = bonus;\r
            this.managedHub = hub;\r
        }\r
\r
        @Override\r
        public void printSummary() {\r
            super.printSummary();\r
            System.out.printf("    -> Role: Academic Hub Director @ %s (Total Comp: ₹%.2f)\\n",\r
                    managedHub, (baseSalary + leadershipBonus));\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: REAL-WORLD DOMAIN MODELING CAPSTONE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        PostalAddress bkpAddress = new PostalAddress("Station Road, Riverside", "Barrackpore", "700120");\r
\r
        System.out.println(">>> 1. Creating Staff Member (Demonstrating HAS-A Address):");\r
        StaffMember staff = new StaffMember(101, "Swadeep Paul", 45000.0, bkpAddress);\r
        staff.printSummary();\r
\r
        System.out.println("\\n>>> 2. Creating Academic Manager (Demonstrating IS-A StaffMember + HAS-A Address):");\r
        AcademicManager mgr = new AcademicManager(1001, "Sukanta Hui", 95000.0, bkpAddress, 25000.0, "Barrackpore Central Hub");\r
        mgr.printSummary();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 002_005 INHERITANCE & COMPOSITION 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_005: Inheritance, IS-A vs HAS-A, Composition & Aggregation\r
Topic 14: Real-World Enterprise Modeling Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ENTERPRISE MODELING SUMMARY:\r
   - Use IS-A when true subtyping polymorphism is required (Manager IS-A Employee).\r
   - Use HAS-A for data parts and modular services (Employee HAS-A Address).\r
   - Keep inheritance hierarchies shallow and favor composition.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Summarize how IS-A and HAS-A work together in enterprise domain architectures.",shortAnswer:"IS-A (Inheritance) models behavioral hierarchies and subtyping (Manager IS-A StaffMember), while HAS-A (Composition/Aggregation) models modular attributes and state components (StaffMember HAS-A Address).",explanation:"A robust architecture balances shallow inheritance trees with rich object composition.",hint:"Inheritance for subtyping, Composition for modular components.",level:"Intermediate",codeExample:"// Complete capstone demo in Topic 14"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_005 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Real-World Modeling: ",e.jsx("code",{className:"text-sky-300 font-mono",children:"IS-A"})," Hierarchy vs ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"HAS-A"})," Association"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all inheritance, aggregation, and composition principles into an enterprise Employee-Manager hierarchy composed with Address value objects."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"RealWorldEnterpriseModelingDemo.java",highlightLines:[12,27,43,58,62]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Enterprise Modeling FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 002_005 Topic 14: Enterprise Domain Modeling",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_005_topic14_enterprise_modeling_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 002_005! You now know exactly when to inherit (IS-A) and when to compose (HAS-A). Keep building clean, modular architectures! — Sukanta Hui"})]})}export{g as default};
