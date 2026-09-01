import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 0: The Billion Dollar Mistake - NullPointerExceptions in Traditional Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
public class BillionDollarMistakeDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: THE BILLION DOLLAR MISTAKE - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Student studentWithoutAddress = new Student("Swadeep Paul", null);\r
\r
        // 1. Traditional Fragile Code: Leads to runtime NullPointerException!\r
        System.out.println(">>> 1. Attempting fragile nested property access without null checks:");\r
        try {\r
            String city = studentWithoutAddress.getAddress().getCity().toUpperCase();\r
            System.out.println("   City: " + city);\r
        } catch (NullPointerException npe) {\r
            System.err.println("   [CRASH]: java.lang.NullPointerException caught! student.getAddress() returned null.");\r
        }\r
\r
        // 2. The Clunky Defensive Boilerplate (Deep Pyramid of Doom):\r
        System.out.println("\\n>>> 2. Defensive null checks (Clunky & Error-Prone):");\r
        String citySafe = "UNKNOWN CITY";\r
        if (studentWithoutAddress != null) {\r
            Address addr = studentWithoutAddress.getAddress();\r
            if (addr != null) {\r
                String c = addr.getCity();\r
                if (c != null) {\r
                    citySafe = c.toUpperCase();\r
                }\r
            }\r
        }\r
        System.out.println("   Extracted City Safely: " + citySafe);\r
\r
        System.out.println("\\n>>> THE SOLUTION IN JAVA 8+:");\r
        System.out.println("  - java.util.Optional<T> replaces clunky null checks with clean, fluent functional pipelines!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static class Student {\r
        private final String name;\r
        private final Address address;\r
\r
        public Student(String name, Address address) {\r
            this.name = name;\r
            this.address = address;\r
        }\r
\r
        public String getName() { return name; }\r
        public Address getAddress() { return address; }\r
    }\r
\r
    static class Address {\r
        private final String city;\r
        public Address(String city) { this.city = city; }\r
        public String getCity() { return city; }\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 0: The Billion Dollar Mistake (Null Reference Perils)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE NULL REFERENCE PROBLEM:\r
   - Invented in 1965 by Sir Tony Hoare (ALGOL W) to represent absence of reference.\r
   - Problems with 'null' in Java:\r
     1. Unchecked runtime 'NullPointerException' (NPE).\r
     2. Pollutes domain logic with nested defensive 'if (x != null)' statements.\r
     3. Type system does not declare whether a method can return null.\r
\r
2. THE FUNCTIONAL SOLUTION:\r
   - Monadic wrapper 'java.util.Optional<T>' (inspired by Haskell's Maybe and Scala's Option).\r
   - Encapsulates value presence or absence cleanly in the type system.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why did Sir Tony Hoare refer to the null reference as his 'Billion Dollar Mistake'?",shortAnswer:"Because it has led to innumerable software vulnerabilities, crashes, and billions of dollars in debugging and patching costs over decades across all major programming languages.",explanation:"null references bypass type safety, allowing null to masquerade as any object type.",hint:"Bypasses the type system leading to widespread runtime crashes.",level:"Beginner",codeExample:"String s = null; s.length(); // Crashes with NullPointerException!"},{question:"How does java.util.Optional solve the ambiguity of method return values?",shortAnswer:"By returning Optional<T>, the method signature explicitly and statically communicates to the caller that a result may be absent, forcing the caller to handle absence without relying on runtime null assumptions.",explanation:"Eliminates guessing whether a method might return null.",hint:"Forces callers to acknowledge and handle possible absence in code.",level:"Beginner",codeExample:"Optional<Student> findById(int id); // Clear compile-time contract"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Billion Dollar Mistake: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Tony Hoare's Null Reference & NullPointerException"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The history and perils of null in software engineering: defensive if (x != null) boilerplate, cascading NPEs, and the quest for type-safe presence."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"BillionDollarMistakeDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Optional & Null-Safe Programming FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 009_008 Topic 0: The Billion Dollar Mistake",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic0_billion_dollar_mistake_note.txt"})}),e.jsx(a,{note:"Sir Tony Hoare called inventing the null pointer in 1965 his 'Billion Dollar Mistake'! In traditional Java, missing null checks cause runtime crashes in production. Optional gives us compile-time clarity! — Sukanta Hui"})]})}export{g as default};
