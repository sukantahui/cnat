import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 002_004: Static Variables, Methods, Blocks & Singleton\r
 * Topic 11: Designing Utility Classes: Private Constructor + All Static Methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.statics;\r
\r
public class UtilityClassDesignPatternDemo {\r
\r
    // PROPER UTILITY CLASS: Marked 'final', private constructor, all static methods\r
    public static final class AcademyValidationUtil {\r
\r
        // Private constructor prevents external 'new' instantiation\r
        private AcademyValidationUtil() {\r
            throw new AssertionError("Utility class cannot be instantiated!");\r
        }\r
\r
        public static boolean isValidRoll(int roll) {\r
            return roll >= 100 && roll <= 999;\r
        }\r
\r
        public static boolean isValidEmail(String email) {\r
            return email != null && email.contains("@") && email.endsWith(".com");\r
        }\r
\r
        public static String sanitizeName(String name) {\r
            return name == null ? "" : name.trim().toUpperCase();\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: PROPER UTILITY CLASS DESIGN - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Validating Swadeep's Enrollment Data:");\r
        boolean validRoll = AcademyValidationUtil.isValidRoll(101);\r
        boolean validEmail = AcademyValidationUtil.isValidEmail("swadeep@coderaccotax.com");\r
        String sanitized = AcademyValidationUtil.sanitizeName("  swadeep paul  ");\r
\r
        System.out.println("  Is Roll 101 Valid? " + validRoll);\r
        System.out.println("  Is Email Valid? " + validEmail);\r
        System.out.println("  Sanitized Name: '" + sanitized + "'");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_004: Static Variables, Methods, Blocks & The Singleton Pattern\r
Topic 11: Designing Utility Classes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UTILITY CLASS BLUEPRINT:\r
   - 'public final class ToolkitName { ... }'\r
   - 'private ToolkitName() { throw new AssertionError(); }'\r
   - All methods declared as 'public static ...'\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"What are the 3 mandatory design rules for writing a professional Utility Class in Java?",shortAnswer:"1. Declare the class 'public final'. 2. Declare a 'private' no-arg constructor that throws an AssertionError/UnsupportedOperationException. 3. Make all methods and fields 'static'.",explanation:"This prevents subclassing, prevents instantiation (even via reflection), and exposes stateless toolkits.",hint:"final class, private throwing constructor, all static methods.",level:"Intermediate",codeExample:"public final class StringUtils { private StringUtils() { throw new AssertionError(); } }"}];function g(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_004 · Topic 11"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Design Patterns"})]}),t.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Designing Utility Classes: Private Constructor + All Static Methods"}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the industry-standard blueprint for utility classes: preventing instantiation, blocking subclassing with ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"final"}),", and providing pure static helper methods."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:r,title:"UtilityClassDesignPatternDemo.java",highlightLines:[10,13,14,17,21]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{title:"Utility Class Design FAQs",questions:l})}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{content:s,title:"Module 002_004 Topic 11: Utility Class Design",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_004_topic11_utility_class_note.txt"})}),t.jsx(i,{note:"Never let clients instantiate a utility class. Make it final, add a private constructor throwing AssertionError, and make all methods static! — Sukanta Hui"})]})}export{g as default};
