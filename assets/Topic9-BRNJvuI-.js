import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const s=`/**\r
 * Java Core Tutorial - Module 003_008: Java Enums & Specialized Methods\r
 * Topic 9: Building Finite State Machines (FSM) with Enums (OrderState Transition Engine)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.enums;\r
\r
public class EnumStateMachineTransitionDemo {\r
\r
    // Finite State Machine modeling Course Enrollment LifeCycle:\r
    public enum EnrollmentState {\r
        ENQUIRY {\r
            @Override\r
            public EnrollmentState nextState() { return ADMITTED; }\r
        },\r
        ADMITTED {\r
            @Override\r
            public EnrollmentState nextState() { return IN_PROGRESS; }\r
        },\r
        IN_PROGRESS {\r
            @Override\r
            public EnrollmentState nextState() { return CERTIFIED; }\r
        },\r
        CERTIFIED {\r
            @Override\r
            public EnrollmentState nextState() {\r
                System.out.println("  [TERMINAL] Student is already CERTIFIED! No further transition.");\r
                return this;\r
            }\r
        };\r
\r
        // Transition method:\r
        public abstract EnrollmentState nextState();\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: ENUM FINITE STATE MACHINE (FSM) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Simulating Trainee Journey (Swadeep Paul - Barrackpore Hub):");\r
\r
        EnrollmentState state = EnrollmentState.ENQUIRY;\r
        System.out.println("  Initial Stage : " + state);\r
\r
        state = state.nextState();\r
        System.out.println("  Step 1 Transition: " + state);\r
\r
        state = state.nextState();\r
        System.out.println("  Step 2 Transition: " + state);\r
\r
        state = state.nextState();\r
        System.out.println("  Step 3 Transition: " + state);\r
\r
        // Attempting transition past terminal state:\r
        state = state.nextState();\r
        System.out.println("  Terminal Check   : " + state);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_008: Java Enums & Specialized Methods\r
Topic 9: Enum Finite State Machines\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FSM WITH ENUMS:\r
   - States represented as enum constants.\r
   - Transition rules encapsulated inside 'nextState()' method.\r
   - Terminal states return 'this'.\r
   - Eliminates invalid runtime state jumps.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why are Java Enums uniquely suited for implementing Finite State Machines (FSM)?",shortAnswer:"Because enums represent a closed, finite set of discrete states where transitions can be modeled cleanly as constant-specific method overrides (e.g. 'state = state.nextState()'). This prevents invalid state transitions at compile time without bulky state classes.",explanation:"Widely used for order management (PLACED → PAID → SHIPPED) and payment gateways.",hint:"Enums model discrete states and enforce valid transitions via polymorphic methods.",level:"Intermediate",codeExample:"OrderState current = OrderState.CREATED; current = current.nextState();"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_008 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"State Machine Architecture"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Building Finite State Machines (FSM) with Enums: ",e.jsx("code",{className:"text-purple-400 font-mono",children:"PENDING"})," → ",e.jsx("code",{className:"text-sky-400 font-mono",children:"PAID"})," → ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"DELIVERED"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Architect robust business workflow engines: modeling order lifecycles and student admission workflows with type-safe state transitions using polymorphic enum methods."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"EnumStateMachineTransitionDemo.java",highlightLines:[7,10,11,12,14,15,17,18,20,21,28,38,41,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"State Machine FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 003_008 Topic 9: Enum State Machines",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_008_topic9_enum_state_machine_note.txt"})}),e.jsx(a,{note:"Enums make the best state machines! In our AccoTax invoice processing system, an invoice transitions from DRAFT → SUBMITTED → APPROVED → PAID cleanly with zero chances of illegal status skipping! — Sukanta Hui"})]})}export{h as default};
