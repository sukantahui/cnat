import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 002_006: Polymorphism, Method Overriding & Dynamic Method Dispatch\r
 * Topic 12: The 'instanceof' Operator: Safe Type Verification Before Downcasting\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.polymorphism;\r
\r
public class InstanceOfOperatorSafeDowncastingDemo {\r
\r
    public interface AcademyAttendee {}\r
\r
    public static class StudentAttendee implements AcademyAttendee {\r
        public void takeLabTest() { System.out.println("  [STUDENT] Completing Spring Boot lab exam!"); }\r
    }\r
\r
    public static class GuestLecturer implements AcademyAttendee {\r
        public void deliverKeynote() { System.out.println("  [GUEST] Delivering AI Architecture keynote!"); }\r
    }\r
\r
    public static void processAttendee(AcademyAttendee attendee) {\r
        // Safe Type Check using 'instanceof' operator:\r
        if (attendee instanceof StudentAttendee) {\r
            StudentAttendee student = (StudentAttendee) attendee; // 100% Safe Downcast\r
            student.takeLabTest();\r
        } else if (attendee instanceof GuestLecturer) {\r
            GuestLecturer guest = (GuestLecturer) attendee; // 100% Safe Downcast\r
            guest.deliverKeynote();\r
        } else {\r
            System.out.println("  [UNKNOWN] Generic attendee.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 12: 'instanceof' OPERATOR SAFETY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AcademyAttendee a1 = new StudentAttendee();\r
        AcademyAttendee a2 = new GuestLecturer();\r
\r
        System.out.println(">>> 1. Processing Student Attendee (Swadeep):");\r
        processAttendee(a1);\r
\r
        System.out.println("\\n>>> 2. Processing Guest Lecturer (Sukanta Hui):");\r
        processAttendee(a2);\r
\r
        System.out.println("\\n>>> 3. Checking null with instanceof (Always evaluates to false, never throws NPE!):");\r
        System.out.println("  (null instanceof StudentAttendee)? " + (null instanceof StudentAttendee));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_006: Polymorphism, Overriding & Dynamic Method Dispatch\r
Topic 12: The 'instanceof' Operator\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. 'instanceof' OPERATOR:\r
   - Syntax: 'if (ref instanceof Type) { ... }'\r
   - Returns boolean: true if 'ref' is an instance of Type or subtype; false otherwise.\r
   - Null-Safe: If 'ref == null', evaluates to false without throwing NPE.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What does the 'instanceof' operator do and what does 'null instanceof ClassName' return?",shortAnswer:"'instanceof' tests whether an object reference is an instance of a specified class, subclass, or interface at runtime, returning boolean true or false. 'null instanceof AnyClass' safely returns false without throwing a NullPointerException.",explanation:"It protects against ClassCastException by verifying the type before downcasting.",hint:"Runtime type test; null instanceof returns false safely.",level:"Beginner",codeExample:"if (obj instanceof Dog) { Dog d = (Dog) obj; }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_006 · Topic 12"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Type Safety Guard"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"instanceof"})," Operator: Safe Type Verification Before Downcasting"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to eliminate ",e.jsx("code",{className:"text-rose-400 font-mono",children:"ClassCastException"})," crashes using runtime ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"instanceof"})," checks, and understand null-safe evaluation."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"InstanceOfOperatorSafeDowncastingDemo.java",highlightLines:[20,21,23,24,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"instanceof Operator FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 002_006 Topic 12: instanceof Operator",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_006_topic12_instanceof_note.txt"})}),e.jsx(r,{note:"Always check with instanceof before downcasting! And notice how instanceof null is always false, protecting you from null pointer crashes as well! — Sukanta Hui"})]})}export{h as default};
