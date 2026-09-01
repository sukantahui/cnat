import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 11: Execution Sequence: IIB Execution Before Constructor Body\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
public class IIBBeforeConstructorExecutionSequenceDemo {\r
\r
    // Parent Class\r
    public static class AcademyMember {\r
        {\r
            System.out.println("  [2] Parent IIB: Initializing AcademyMember security badge...");\r
        }\r
\r
        public AcademyMember() {\r
            System.out.println("  [3] Parent Constructor: AcademyMember() completed.");\r
        }\r
    }\r
\r
    // Child Class\r
    public static class TraineeDeveloper extends AcademyMember {\r
        private String traineeName;\r
        private int rollNumber;\r
\r
        // IIB 1\r
        {\r
            System.out.println("  [4] Child IIB 1: Allocating workspace sandbox in Eden space...");\r
        }\r
\r
        // Inline Field Initialization (runs in order with IIBs)\r
        private String hubCenter = initHub();\r
\r
        private String initHub() {\r
            System.out.println("  [5] Child Field Initializer: hubCenter assigned to Barrackpore.");\r
            return "Barrackpore Hub";\r
        }\r
\r
        // IIB 2\r
        {\r
            System.out.println("  [6] Child IIB 2: Validating biometric trainee signature...");\r
        }\r
\r
        // Child Constructor\r
        public TraineeDeveloper(String traineeName, int rollNumber) {\r
            // Implicit super() runs first (Triggering Steps 2 & 3)\r
            // Then Child IIB 1, Field Init, and Child IIB 2 execute (Steps 4, 5, 6)\r
            this.traineeName = traineeName;\r
            this.rollNumber = rollNumber;\r
            System.out.printf("  [7] Child Constructor Body: Trainee %s (Roll %d) initialized successfully!\\n",\r
                    this.traineeName, this.rollNumber);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: IIB BEFORE CONSTRUCTOR EXECUTION SEQUENCE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Step 1: Initiating 'new TraineeDeveloper(\\"Swadeep Paul\\", 101)':\\n");\r
        TraineeDeveloper swadeep = new TraineeDeveloper("Swadeep Paul", 101);\r
\r
        System.out.println("\\n>>> Full Execution Lifecycle Summary:");\r
        System.out.println("  1. Memory allocated on Heap (raw 0/null bytes)");\r
        System.out.println("  2. Parent super() constructor invoked");\r
        System.out.println("  3. Parent IIB executes");\r
        System.out.println("  4. Parent Constructor body executes");\r
        System.out.println("  5. Child IIBs and Field Initializers execute (top-to-bottom)");\r
        System.out.println("  6. Child Constructor body executes");\r
        System.out.println("  7. Live object pointer returned to stack");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 11: Execution Sequence: IIB Execution Before Constructor Body\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. COMPLETE INITIALIZATION LIFECYCLE ORDER:\r
   -----------------------------------------------------------------------------\r
   Step 1: Raw Heap Memory Allocation (all bytes zeroed/null)\r
   Step 2: Subclass Constructor called (delegates via super())\r
   Step 3: Parent Class IIBs and Field Initializers (in textual order)\r
   Step 4: Parent Class Constructor Body executes\r
   Step 5: Child Class IIBs and Field Initializers (in textual order)\r
   Step 6: Child Class Constructor Body executes\r
   Step 7: Reference address returned to caller\r
\r
2. GOLDEN RULE:\r
   - Parent state is ALWAYS fully constructed before Child IIBs and Constructor\r
     bodies begin execution!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the exact execution sequence when a subclass object is instantiated in Java?",shortAnswer:"1. Parent IIBs & field initializers, 2. Parent constructor body, 3. Child IIBs & field initializers, 4. Child constructor body.",explanation:"Parent state is established first from top-to-bottom, followed by child state.",hint:"Parent IIB → Parent Constructor → Child IIB → Child Constructor.",level:"Intermediate",codeExample:"// Hierarchy execution flow"},{question:"Why does the Java compiler place IIB execution before the constructor body?",shortAnswer:"To guarantee that all default field values and initializers are in place before custom constructor statements execute.",explanation:"If the constructor body references fields initialized by IIBs, those fields must be populated beforehand.",hint:"Ensures fields are populated before custom constructor logic runs.",level:"Intermediate",codeExample:`{ this.status = "ACTIVE"; }
Student() { System.out.println(this.status); }`},{question:"In what order do field initializers and IIBs execute within the same class?",shortAnswer:"In the exact top-to-bottom textual order in which they appear in the source code.",explanation:"Field initializers and IIBs are treated identically by javac during bytecode assembly.",hint:"Exact top-to-bottom source code order.",level:"Intermediate",codeExample:`int a = 1;
{ a = 2; }
int b = a + 5; // b is 7`},{question:"What happens if an IIB throws a RuntimeException?",shortAnswer:"The exception aborts constructor execution immediately, the parent/child hierarchy unwinds, and the object is discarded.",explanation:"Partially created objects are never returned to the caller.",hint:"Aborts creation immediately and discards object.",level:"Beginner",codeExample:'{ if (true) throw new RuntimeException("Failed"); }'},{question:"Can an IIB call methods of the parent class?",shortAnswer:"Yes, because the parent class constructor and parent state have already completed before the child IIB executes.",explanation:"Parent methods are safely callable from child IIBs.",hint:"Parent methods are accessible because parent is already initialized.",level:"Advanced",codeExample:"{ super.validateSecurity(); }"},{question:"What is the classroom takeaway by Sukanta Hui for Topic 11?",shortAnswer:"Building a house: You lay the ground floor (Parent IIB + Constructor) before you install the upper floor wiring (Child IIB) and arrange the furniture (Child Constructor Body)!",explanation:"Foundation and parent infrastructure always precede child customization.",hint:"Ground floor before upper floor furniture.",level:"Beginner",codeExample:"// Orderly construction from ground floor upward"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"JVM Execution Lifecycle"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Execution Sequence: IIB Execution Before Constructor Body"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Trace the exact micro-step execution order of the JVM during object instantiation: from parent constructor dispatch to child IIBs, inline field initializers, and final constructor bodies."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The 7-Step Genesis Order"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["When ",e.jsx("code",{className:"text-sky-300 font-mono",children:"new TraineeDeveloper(...)"})," is invoked, Java coordinates a strict multi-tier initialization sequence ensuring parent state is established before child state is configured."]}),e.jsxs("div",{className:"p-4 bg-slate-900/60 rounded-xl border-l-4 border-purple-500 text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-medium text-purple-300",children:"Building Construction Analogy (Barrackpore):"}),e.jsx("p",{className:"text-sm leading-relaxed",children:"You cannot install furniture on the top floor (Child Constructor) until the foundation and ground floor walls (Parent IIB + Constructor) are solidly cured!"})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-indigo-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Complete Step-by-Step Execution Sequence"]}),e.jsx("div",{className:"w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 p-4",children:e.jsxs("svg",{viewBox:"0 0 920 220",className:"w-full h-auto",children:[e.jsx("rect",{x:"20",y:"30",width:"160",height:"150",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"100",y:"55",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"1. PARENT IIB"}),e.jsx("text",{x:"100",y:"80",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Badge Init"}),e.jsx("path",{d:"M 185 105 L 235 105",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"240",y:"30",width:"160",height:"150",rx:"8",fill:"#0f172a",stroke:"#0284c7",strokeWidth:"2"}),e.jsx("text",{x:"320",y:"55",fill:"#38bdf8",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"2. PARENT BODY"}),e.jsx("text",{x:"320",y:"80",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"super() Completes"}),e.jsx("path",{d:"M 405 105 L 455 105",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"460",y:"30",width:"180",height:"150",rx:"8",fill:"#0f172a",stroke:"#f59e0b",strokeWidth:"2"}),e.jsx("text",{x:"550",y:"55",fill:"#fbbf24",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"3. CHILD IIB & FIELDS"}),e.jsx("text",{x:"550",y:"80",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Workspace & Hub Init"}),e.jsx("path",{d:"M 645 105 L 695 105",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("rect",{x:"700",y:"30",width:"190",height:"150",rx:"8",fill:"#0f172a",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"795",y:"55",fill:"#34d399",fontSize:"10",fontWeight:"bold",textAnchor:"middle",children:"4. CHILD BODY"}),e.jsx("text",{x:"795",y:"80",fill:"#94a3b8",fontSize:"8",textAnchor:"middle",children:"Trainee Name & Roll Set"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"IIBBeforeConstructorExecutionSequenceDemo.java",highlightLines:[12,16,26,31,38,43,56]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Execution Sequence FAQs (Technical Q&As)",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 002_002 Topic 11: IIB Execution Sequence",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic11_execution_sequence_note.txt"})}),e.jsx(i,{note:"Master the sequence: Parent IIB → Parent Constructor → Child IIB → Child Constructor. Once you visualize this cascade, you will never have a bug with uninitialized fields! — Sukanta Hui"})]})}export{f as default};
