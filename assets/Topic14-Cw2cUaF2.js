import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 002_010: The Object Class: equals(), hashCode(), toString() & clone()\r
 * Topic 14: Cloning Objects Containing Nested Mutable References (Implementing Deep Copy)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.objectclass;\r
\r
public class SafeDeepCopyCloningDemo {\r
\r
    // Nested Class implementing Cloneable:\r
    public static class AcademyAddress implements Cloneable {\r
        public String street;\r
        public String city;\r
\r
        public AcademyAddress(String street, String city) {\r
            this.street = street;\r
            this.city = city;\r
        }\r
\r
        @Override\r
        public AcademyAddress clone() {\r
            try {\r
                return (AcademyAddress) super.clone();\r
            } catch (CloneNotSupportedException e) {\r
                throw new AssertionError();\r
            }\r
        }\r
    }\r
\r
    // Outer Class implementing TRUE DEEP COPY:\r
    public static class EnrolledStudent implements Cloneable {\r
        public String name;\r
        public AcademyAddress address; // Nested mutable reference\r
\r
        public EnrolledStudent(String name, AcademyAddress addr) {\r
            this.name = name;\r
            this.address = addr;\r
        }\r
\r
        // DEEP COPY IMPLEMENTATION:\r
        @Override\r
        public EnrolledStudent clone() {\r
            try {\r
                // 1. First perform shallow copy of outer object\r
                EnrolledStudent copy = (EnrolledStudent) super.clone();\r
                // 2. Explicitly DEEP-CLONE all nested mutable reference objects!\r
                if (this.address != null) {\r
                    copy.address = this.address.clone();\r
                }\r
                return copy;\r
            } catch (CloneNotSupportedException e) {\r
                throw new AssertionError();\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: SAFE DEEP COPY CLONING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyAddress addr = new AcademyAddress("Station Road", "Barrackpore");\r
        EnrolledStudent s1 = new EnrolledStudent("Swadeep Paul", addr);\r
        EnrolledStudent s2 = s1.clone(); // True Deep Copy!\r
\r
        System.out.println(">>> 1. Mutating s2.address.city = 'Naihati'...");\r
        s2.address.city = "Naihati";\r
\r
        System.out.println("\\n>>> 2. Verifying Complete Memory Isolation:");\r
        System.out.println("  s1.address.city (Original): " + s1.address.city + " (Safe & Unaffected!)");\r
        System.out.println("  s2.address.city (Cloned)  : " + s2.address.city);\r
        System.out.println("  s1.address == s2.address  : " + (s1.address == s2.address) + " (Independent Heap Objects!)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_010: The Object Class & Core Contracts\r
Topic 14: Safe Deep Copy Implementation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEEP COPY STEPS:\r
   - Step 1: 'copy = (MyClass) super.clone();'\r
   - Step 2: 'copy.nestedObj = this.nestedObj.clone();'\r
   - Step 3: 'return copy;'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How do you implement a true Deep Copy using the 'clone()' method in Java?",shortAnswer:"1. Perform a shallow copy via 'super.clone()'. 2. Explicitly clone all nested mutable reference fields ('copy.address = this.address.clone()') before returning the copy.",explanation:"Ensures complete heap memory isolation between original and cloned instances.",hint:"Call super.clone() and then manually clone every nested mutable field.",level:"Intermediate",codeExample:"MyClass copy = (MyClass) super.clone(); copy.inner = this.inner.clone();"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_010 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Deep Cloning"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Cloning Objects with Nested Mutable Reference Fields Safely"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Learn how to implement bulletproof deep copying: cascading clone invocations across nested mutable reference fields to guarantee total memory isolation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"SafeDeepCopyCloningDemo.java",highlightLines:[18,38,40,41,58,59]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Deep Cloning FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 002_010 Topic 14: Safe Deep Cloning",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_010_topic14_deep_cloning_note.txt"})}),e.jsx(s,{note:"When cloning an object with nested child objects, remember to call .clone() on the children as well! This ensures each student gets their own private address object. — Sukanta Hui"})]})}export{x as default};
