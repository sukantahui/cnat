import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 9: Consumer Chaining: andThen() Sequential Multi-Stage Processing\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.function.Consumer;\r
\r
class StudentRegistration {\r
    final String studentName;\r
    final String course;\r
\r
    public StudentRegistration(String studentName, String course) {\r
        this.studentName = studentName;\r
        this.course = course;\r
    }\r
}\r
\r
public class ConsumerChainingAndThenDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: Consumer CHAINING VIA andThen() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentRegistration student = new StudentRegistration("Swadeep Paul", "Java Core & Spring Boot");\r
\r
        // Stage 1: Validate & Print Welcome Screen\r
        Consumer<StudentRegistration> stage1Welcome = s -> {\r
            System.out.println(">>> Stage 1: Welcome " + s.studentName + " to Coder & AccoTax!");\r
        };\r
\r
        // Stage 2: Save record to Database\r
        Consumer<StudentRegistration> stage2SaveDb = s -> {\r
            System.out.println(">>> Stage 2: Saved registration for [" + s.course + "] to SQL Database.");\r
        };\r
\r
        // Stage 3: Send Confirmation SMS\r
        Consumer<StudentRegistration> stage3SendSms = s -> {\r
            System.out.println(">>> Stage 3: SMS confirmation dispatched to " + s.studentName + ".");\r
        };\r
\r
        // Chaining all 3 stages sequentially using andThen():\r
        Consumer<StudentRegistration> fullRegistrationPipeline = stage1Welcome\r
                .andThen(stage2SaveDb)\r
                .andThen(stage3SendSms);\r
\r
        System.out.println(">>> Executing 3-Stage Registration Pipeline:");\r
        fullRegistrationPipeline.accept(student);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 9: Consumer Chaining (andThen)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONSUMER ANDTHEN():\r
   - Executes left consumer FIRST, then right consumer on same input.\r
   - Ideal for multi-step processing: 'c1.andThen(c2).andThen(c3)'.\r
   - Stops execution if any consumer throws an exception.\r
   - Returns 'Consumer<T>' allowing fluent builder patterns.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does 'Consumer.andThen()' sequence multiple side-effect operations in Java?",shortAnswer:"'Consumer.andThen(after)' returns a composed Consumer that performs the current Consumer's action first, followed immediately by the 'after' Consumer's action on the exact same input argument. If executing either consumer throws an unchecked exception, execution terminates and subsequent consumers in the chain are not invoked. It is ideal for orchestrating multi-stage side-effect pipelines (e.g. log -> save -> notify).",explanation:"Multi-stage pipeline chaining with Consumer.andThen().",hint:"Executes caller action first, then executes the argument action on the same input.",level:"Beginner",codeExample:"Consumer<T> pipeline = c1.andThen(c2).andThen(c3); pipeline.accept(item);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Consumer Chaining"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-purple-400 font-mono",children:"Consumer"})," Chaining: Sequential Multi-Stage Processing via ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"andThen()"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct sequential side-effect workflows: orchestrating multi-stage registration pipelines by linking discrete ",e.jsx("code",{className:"text-purple-300 font-mono",children:"Consumer"})," tasks with fluent ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"andThen()"})," combinators."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ConsumerChainingAndThenDemo.java",highlightLines:[7,10,23,24,28,29,33,34,38,39,40,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Consumer Chaining FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 009_002 Topic 9: Consumer Chaining",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic9_consumer_chaining_note.txt"})}),e.jsx(a,{note:"Instead of putting database saving, printing, and email notifications in one giant method, write 3 tiny Consumers and connect them with andThen()! You can re-arrange or turn off stages with zero hassle! — Sukanta Hui"})]})}export{x as default};
