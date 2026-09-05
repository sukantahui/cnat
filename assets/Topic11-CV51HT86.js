import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 006_005: Type Erasure & Generics Limitations\r
 * Topic 11: Restriction 6: No Parameterized Exception Classes (Cannot Catch/Throw T)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
// ILLEGAL SYNTAX (Will NOT compile):\r
// class GenericCustomException<T> extends Exception { } // COMPILE ERROR: A generic class may not extend java.lang.Throwable!\r
\r
public class Restriction6NoGenericExceptionsDemo {\r
\r
    // LEGAL: Type variable in throws clause (Type Erasure replaces T with Exception bound):\r
    public static <T extends Exception> void executeWithPossibleException(boolean trigger, T ex) throws T {\r
        if (trigger) {\r
            throw ex; // LEGAL: Can throw an instance of a generic exception parameter!\r
        }\r
        System.out.println("  Execution successful, no exception thrown.");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: RESTRICTION 6 - NO GENERIC EXCEPTIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. WHY GENERIC EXCEPTION CLASSES ARE PROHIBITED:");\r
        System.out.println("  - 'class MyException<T> extends Exception' is illegal.");\r
        System.out.println("  - Catch clauses: 'catch (MyException<String> e)' is impossible because the JVM catch mechanism operates entirely at runtime.");\r
        System.out.println("  - At runtime, type erasure strips <String>, so 'catch (MyException<String>)' and 'catch (MyException<Integer>)' would be identical!");\r
\r
        System.out.println("\\n>>> 2. WHAT IS PERMITTED (Generic throws clause):");\r
        try {\r
            executeWithPossibleException(false, new IllegalArgumentException("Invalid data!"));\r
        } catch (Exception e) {\r
            System.out.println("  Caught: " + e.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_005: Type Erasure & Generics Limitations\r
Topic 11: Restriction 6 - No Generic Exceptions\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RESTRICTION 6: NO GENERIC EXCEPTIONS:\r
   - 'class MyEx<T> extends Exception' is ILLEGAL.\r
   - Cannot catch parameterized exceptions: 'catch (MyEx<T> e)'.\r
   - JVM exception table requires concrete runtime types.\r
   - 'throws T' in generic method signatures is permitted.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why cannot a generic class extend 'java.lang.Throwable' or be caught in a 'catch' block (e.g. 'catch(MyException<T> e)')?",shortAnswer:"Exception handling is managed at runtime by the JVM's exception table. Because type arguments are erased at compile time, the JVM cannot distinguish between 'catch (MyException<String>)' and 'catch (MyException<Integer>)'. Allowing generic exceptions would make runtime exception dispatch ambiguous and corrupt JVM stack unwinding.",explanation:"JVM exception dispatch requires reifiable, non-generic class definitions.",hint:"JVM exception table operates at runtime where generic parameters are erased and indistinguishable.",level:"Intermediate",codeExample:"// class MyException<T> extends Exception {} // Compilation Error!"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_005 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Restriction 6"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Restriction 6: Cannot Create, Catch, or Throw Parameterized Exceptions"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Analyze JVM exception table mechanics: understanding why generic exception classes are prohibited while parameterized ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"throws T"})," signatures remain permissible."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"Restriction6NoGenericExceptionsDemo.java",highlightLines:[7,10,13,14,15,24,25,26]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Generic Exceptions FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:s,title:"Module 006_005 Topic 11: Restriction 6 - No Generic Exceptions",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_005_topic11_restriction6_no_generic_exceptions_note.txt"})}),e.jsx(i,{note:"Exception handling happens at runtime using the JVM's internal exception table! Because generic types are erased at compile time, Java cannot distinguish between catch(MyEx<String>) and catch(MyEx<Integer>), so generic exception classes are banned! — Sukanta Hui"})]})}export{E as default};
