import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 18: Real-World Modeling: User Profile Initialization with Multiple Optional Parameters\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
import java.util.Objects;\r
\r
public class UserProfileInitializationTelescopingDemo {\r
\r
    // Capstone Entity: TraineeEnrollmentProfile\r
    public static class TraineeEnrollmentProfile {\r
        // Mandatory fields\r
        private final int rollId;\r
        private final String studentName;\r
        private final String primaryPhone;\r
\r
        // Optional fields with defaults\r
        private final String emailAddress;\r
        private final String campusHub;\r
        private final boolean isHostelRequired;\r
        private final double scholarshipPercentage;\r
\r
        // Overloaded Telescoping Constructor 1: Mandatory Fields Only\r
        public TraineeEnrollmentProfile(int rollId, String studentName, String primaryPhone) {\r
            this(rollId, studentName, primaryPhone, "not_provided@coderaccotax.com", "Barrackpore Hub", false, 0.0);\r
        }\r
\r
        // Overloaded Telescoping Constructor 2: Mandatory + Email & Hub\r
        public TraineeEnrollmentProfile(int rollId, String studentName, String primaryPhone, String email, String hub) {\r
            this(rollId, studentName, primaryPhone, email, hub, false, 0.0);\r
        }\r
\r
        // Master Canonical Constructor: All Fields\r
        public TraineeEnrollmentProfile(int rollId, String studentName, String primaryPhone,\r
                                       String emailAddress, String campusHub,\r
                                       boolean isHostelRequired, double scholarshipPercentage) {\r
            if (rollId <= 0) throw new IllegalArgumentException("Invalid roll ID.");\r
            this.rollId = rollId;\r
            this.studentName = Objects.requireNonNull(studentName, "Name required");\r
            this.primaryPhone = Objects.requireNonNull(primaryPhone, "Phone required");\r
            this.emailAddress = emailAddress;\r
            this.campusHub = campusHub;\r
            this.isHostelRequired = isHostelRequired;\r
            this.scholarshipPercentage = scholarshipPercentage;\r
\r
            System.out.printf("  [ENROLLMENT ENGINE] Profile active for %s (Roll: %d) at %s\\n",\r
                    this.studentName, this.rollId, this.campusHub);\r
        }\r
\r
        public void printSummary() {\r
            System.out.println("  +-------------------------------------------------------------------+");\r
            System.out.printf("  | ENROLLED TRAINEE : %-46s |\r
", studentName + " (Roll " + rollId + ")");\r
            System.out.printf("  | Contact Phone    : %-46s |\r
", primaryPhone);\r
            System.out.printf("  | Email Address    : %-46s |\r
", emailAddress);\r
            System.out.printf("  | Academic Hub     : %-46s |\r
", campusHub);\r
            System.out.printf("  | Hostel Facility  : %-46s |\r
", (isHostelRequired ? "YES (AC Hostel)" : "NO (Day Scholar)"));\r
            System.out.printf("  | Scholarship Rate : %-45.1f%% |\r
", scholarshipPercentage);\r
            System.out.println("  +-------------------------------------------------------------------+");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 18: USER PROFILE INITIALIZATION ENGINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. Enrolling Swadeep Paul with Basic Mandatory Information:");\r
        TraineeEnrollmentProfile s1 = new TraineeEnrollmentProfile(101, "Swadeep Paul", "+91 98765 43210");\r
        s1.printSummary();\r
\r
        System.out.println("\\n>>> 2. Enrolling Tuhina Das with Email & Naihati Hub:");\r
        TraineeEnrollmentProfile s2 = new TraineeEnrollmentProfile(102, "Tuhina Das", "+91 98765 11111", "tuhina@naihati.edu", "Naihati Hub");\r
        s2.printSummary();\r
\r
        System.out.println("\\n>>> 3. Enrolling Debangshu Mukherjee with Full Scholarship & Hostel:");\r
        TraineeEnrollmentProfile s3 = new TraineeEnrollmentProfile(103, "Debangshu Mukherjee", "+91 98765 22222",\r
                "debangshu@barrackpore.com", "Barrackpore Hub", true, 90.0);\r
        s3.printSummary();\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" MODULE 002_002 CONSTRUCTORS & LIFECYCLE 100% COMPLETE!");\r
        System.out.println("==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 18: Real-World Modeling: User Profile Initialization & Telescoping Pattern\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARCHITECTURAL PATTERN SUMMARY:\r
   -----------------------------------------------------------------------------\r
   - Mandatory parameters are required by all constructors.\r
   - Optional parameters receive sensible domain defaults.\r
   - All constructors chain into 1 Master Constructor via 'this(...)'.\r
   - Immutable fields guarantee domain invariant safety.\r
\r
2. MODULE 002_002 SUMMARY:\r
   - Object Genesis: new (memory allocation) + Constructor (state initialization).\r
   - Constructor Laws: Name matches class, NO return type (not even void).\r
   - Chaining: this(...) on Line 1 funnels to Master Constructor.\r
   - IIB Execution: Executes after super() and before constructor body.\r
   - Security: Private constructors for Singletons & Utility toolkits.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the Telescoping Constructor Pattern in enterprise domain modeling?",shortAnswer:"A pattern where a class provides multiple overloaded constructors starting from mandatory parameters, chaining each into a master constructor with default values for optional fields.",explanation:"It provides clean, flexible instantiation while ensuring mandatory invariants are never omitted.",hint:"Overloaded constructors cascading into a single master constructor.",level:"Intermediate",codeExample:"User(id, name) -> User(id, name, email) -> Master(id, name, email, role, phone)"},{question:"When should the Telescoping Constructor Pattern be refactored into the Builder Pattern?",shortAnswer:"When a class has more than 4 or 5 optional parameters of the same data type (e.g. multiple booleans or Strings), which can lead to parameter ordering confusion.",explanation:"Builders provide named fluent methods, preventing accidental swapping of adjacent boolean/String arguments.",hint:"Use Builder when optional parameters exceed 4-5 or have identical types.",level:"Advanced",codeExample:'User.builder().name("Swadeep").hostel(true).build();'}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 18"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone Domain Modeling"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Real-World Modeling: User Profile Initialization & Telescoping Patterns"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Synthesize all constructor lifecycle mechanics into an enterprise-grade Student Enrollment Engine. Handle mandatory vs optional attributes, master constructor cascading, and prepare for the Builder pattern."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The Capstone Student Enrollment Engine"]}),e.jsx("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:e.jsxs("p",{children:["In real-world applications, entities like student profiles have mandatory fields (Roll, Name, Phone) alongside multiple optional fields (Email, Hub, Hostel, Scholarship). By combining ",e.jsx("strong",{children:"Constructor Overloading"}),", ",e.jsx("strong",{children:"this() Chaining"}),", and ",e.jsx("strong",{children:"Immutable Invariants"}),", we forge an enterprise-grade enrollment engine."]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"UserProfileInitializationTelescopingDemo.java",highlightLines:[21,26,32,57,61,65]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"User Profile Modeling FAQs (Technical Q&As)",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 002_002 Topic 18: Real-World Profile Initialization",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic18_user_profile_modeling_note.txt"})}),e.jsx(a,{note:"Congratulations on completing Module 002_002! You have mastered object genesis, constructor rules, chaining with this(), IIB execution order, copy constructors, and immutability. You now possess rock-solid Java OOP initialization mastery! — Sukanta Hui"})]})}export{f as default};
