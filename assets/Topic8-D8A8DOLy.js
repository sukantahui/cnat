import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const o=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 8: Decomposing Fat Interfaces into Focused Role-Specific Interfaces (Case Study)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
public class DecomposingFatInterfacesDemo {\r
\r
    // Segregated Worker Interfaces:\r
    public interface Workable {\r
        void performTask();\r
    }\r
\r
    public interface Feedable {\r
        void takeLunchBreak();\r
    }\r
\r
    public interface Rechargeable {\r
        void rechargeBattery();\r
    }\r
\r
    // 1. Human Trainee Developer needs work + lunch:\r
    public static class HumanTrainee implements Workable, Feedable {\r
        public void performTask() {\r
            System.out.println("  [HUMAN TRAINEE] Writing Java Core code @ Barrackpore Hub.");\r
        }\r
        public void takeLunchBreak() {\r
            System.out.println("  [HUMAN TRAINEE] Having lunch break.");\r
        }\r
    }\r
\r
    // 2. Automated AI / Robotic Server needs work + recharge (No lunch!):\r
    public static class AiBuildBot implements Workable, Rechargeable {\r
        public void performTask() {\r
            System.out.println("  [AI BOT] Running automated Gradle unit tests.");\r
        }\r
        public void rechargeBattery() {\r
            System.out.println("  [AI BOT] Connected to 240V power station.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: ROLE INTERFACE DECOMPOSITION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Workable human = new HumanTrainee();\r
        Workable robot = new AiBuildBot();\r
\r
        human.performTask();\r
        robot.performTask();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 8: Interface Decomposition Case Study\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DECOMPOSITION RECIPE:\r
   - Identify distinct client roles and capabilities.\r
   - Split large interfaces into single-behavior contracts.\r
   - Compose interfaces with 'implements RoleA, RoleB' as required.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is decomposing a monolithic Worker interface into Workable, Feedable, and Rechargeable an example of ISP?",shortAnswer:"Because automated AI bots or automated server scripts should never be forced to implement human-specific methods like 'takeLunchBreak()'. Decomposing interfaces ensures each implementer only declares capabilities it genuinely supports.",explanation:"Eliminates empty stub implementations and avoids confusing runtime contracts.",hint:"Allows human workers and robot workers to implement only relevant capabilities.",level:"Intermediate",codeExample:"class Robot implements Workable, Rechargeable { /* No lunch method needed! */ }"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Interface Decomposition"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Decomposing Fat Interfaces into Focused Role-Specific Interfaces"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Walk through an enterprise role decomposition pattern: separating work, nourishment, and recharge capabilities across humans, automation bots, and server daemons."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"DecomposingFatInterfacesDemo.java",highlightLines:[11,15,19,23,33,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Interface Decomposition FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 002_011 Topic 8: Role Interface Decomposition",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic8_decomp_interfaces_note.txt"})}),e.jsx(t,{note:"Designing lean interfaces makes your Java code modular and clean. Look at the JDK: Comparable, Runnable, AutoCloseable all have just 1 method each! — Sukanta Hui"})]})}export{f as default};
