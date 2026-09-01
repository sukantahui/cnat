import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const a=`/**\r
 * Java Core Tutorial - Module 002_003: The 'this' and 'super' Keywords Mastery\r
 * Topic 4: Passing 'this' as an Argument in Method Calls (Callback / Observer Pattern)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.thissuper;\r
\r
public class PassingThisInMethodCallDemo {\r
\r
    // Notification Service (Receives Student reference)\r
    public static class NotificationHub {\r
        public static void registerForSmsAlerts(StudentTrainee student) {\r
            System.out.printf("  [SMS SERVICE] Registered phone alerts for student: %s (ID: %d)\\n",\r
                    student.getName(), student.getId());\r
        }\r
\r
        public static void generateIdCard(StudentTrainee student) {\r
            System.out.printf("  [ID CARD SERVICE] Printed plastic smartcard for: %s\\n", student.getName());\r
        }\r
    }\r
\r
    // Domain Class: StudentTrainee (Passes 'this' to external services)\r
    public static class StudentTrainee {\r
        private final int id;\r
        private final String name;\r
\r
        public StudentTrainee(int id, String name) {\r
            this.id = id;\r
            this.name = name;\r
        }\r
\r
        public int getId() { return id; }\r
        public String getName() { return name; }\r
\r
        public void enrollInServices() {\r
            System.out.println("  [STUDENT] Enrolling current instance in campus services...");\r
            // Passing 'this' (current object instance) as method argument\r
            NotificationHub.registerForSmsAlerts(this);\r
            NotificationHub.generateIdCard(this);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: PASSING 'this' AS METHOD ARGUMENT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentTrainee swadeep = new StudentTrainee(101, "Swadeep Paul");\r
        swadeep.enrollInServices();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_003: The 'this' and 'super' Keywords Mastery\r
Topic 4: Passing 'this' as an Argument in Method Calls\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PASSING 'this' IN METHODS:\r
   - Syntax: 'service.process(this);'\r
   - Used extensively in Event Listeners, Observer Pattern, and Callback systems.\r
   - Passes the current Heap object reference to external utility/service methods.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why and when would you pass 'this' as an argument in a method call?",shortAnswer:"To pass the current object instance as a callback, event source, or data payload to an external service or listener (e.g. 'eventManager.register(this)').",explanation:"Passing 'this' allows external methods to access methods and data on the calling instance.",hint:"Passes current object as callback/event source to external service.",level:"Intermediate",codeExample:"public void register() { NotificationService.subscribe(this); }"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Callback & Event Patterns"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Passing ",e.jsx("code",{className:"text-sky-400 font-mono",children:"this"})," as an Argument in Method Calls"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how passing ",e.jsx("code",{className:"text-sky-300 font-mono",children:"this"})," to external methods enables callback mechanisms, event dispatchers, and observer registrations across enterprise subsystems."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"PassingThisInMethodCallDemo.java",highlightLines:[30,31,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Passing 'this' in Method Calls FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 002_003 Topic 4: Passing this in Method Calls",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_003_topic4_passing_this_method_note.txt"})}),e.jsx(r,{note:"Passing this as an argument allows your object to say: 'Here I am, register me with your service!' It is the backbone of event listeners and observer patterns. — Sukanta Hui"})]})}export{g as default};
