import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 17: Constructors in Immutable Classes: Safe Final Field Assignment\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.List;\r
import java.util.Objects;\r
\r
public class ImmutableClassConstructorSafetyDemo {\r
\r
    // Immutable Domain Entity\r
    public static final class ImmutableStudentCertification {\r
        // All fields are private and final\r
        private final int certificateId;\r
        private final String studentName;\r
        private final String certifiedSkill;\r
        private final List<String> verifiedTopics;\r
\r
        // Constructor establishing complete immutability & defensive copying\r
        public ImmutableStudentCertification(int id, String name, String skill, List<String> topics) {\r
            if (id <= 0) throw new IllegalArgumentException("ID must be positive.");\r
            this.certificateId = id;\r
            this.studentName = Objects.requireNonNull(name, "Name required");\r
            this.certifiedSkill = Objects.requireNonNull(skill, "Skill required");\r
\r
            // CRITICAL IMMUTABILITY RULE: Defensive Copy of mutable list\r
            this.verifiedTopics = Collections.unmodifiableList(new ArrayList<>(topics));\r
\r
            // NEVER leak 'this' reference to another thread during construction!\r
            System.out.printf("  [IMMUTABLE CERTIFICATE] Created for: %s | ID: %d\\n", this.studentName, this.certificateId);\r
        }\r
\r
        // Getters ONLY, zero setters\r
        public int getCertificateId() { return certificateId; }\r
        public String getStudentName() { return studentName; }\r
        public String getCertifiedSkill() { return certifiedSkill; }\r
        public List<String> getVerifiedTopics() { return verifiedTopics; }\r
\r
        public void printBadge() {\r
            System.out.printf("  -> CERT-%04d: %s [%s] Topics: %s\\n",\r
                    certificateId, studentName, certifiedSkill, verifiedTopics);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: IMMUTABLE CLASS CONSTRUCTOR SAFETY - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<String> rawTopics = new ArrayList<>();\r
        rawTopics.add("OOP Foundations");\r
        rawTopics.add("Constructor Lifecycle");\r
\r
        System.out.println(">>> 1. Creating Immutable Certificate for Swadeep Paul:");\r
        ImmutableStudentCertification cert = new ImmutableStudentCertification(101, "Swadeep Paul", "Java Specialist", rawTopics);\r
        cert.printBadge();\r
\r
        System.out.println("\\n>>> 2. Attempting to mutate original list after construction:");\r
        rawTopics.add("Hacked Topic After Construction");\r
        System.out.println("  Certificate topics remain safe (Defensive Copy): " + cert.getVerifiedTopics());\r
\r
        System.out.println("\\n>>> 3. Attempting to mutate returned list via getter:");\r
        try {\r
            cert.getVerifiedTopics().add("Direct Hacker Topic");\r
        } catch (UnsupportedOperationException ex) {\r
            System.out.println("  [PROTECTED] Attempting to mutate returned list threw: " + ex.getClass().getSimpleName());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 17: Constructors in Immutable Classes: Safe Final Field Assignment\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. RULES OF IMMUTABLE CLASS CONSTRUCTORS:\r
   -----------------------------------------------------------------------------\r
   - Class is marked 'final' (prevents subclass mutation).\r
   - All fields are 'private final'.\r
   - Constructor performs DEFENSIVE COPYING on all mutable arguments (List, Date).\r
   - Getters return unmodifiable views or defensive copies.\r
   - NEVER let 'this' reference escape during construction!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What role does the constructor play in forging an Immutable Class in Java?",shortAnswer:"The constructor performs atomic validation, initializes all 'final' fields, and performs defensive copying of mutable arguments before publishing the object.",explanation:"Because immutable classes have no setters, the constructor is the sole opportunity to configure object state.",hint:"Atomic initialization of all final fields and defensive copying.",level:"Intermediate",codeExample:"public final class Point { private final int x; public Point(int x) { this.x = x; } }"},{question:"What is the 'this reference escape' trap in constructors, and why is it dangerous for immutability?",shortAnswer:"Passing 'this' to an outside thread, listener, or static collection inside the constructor before the constructor finishes executing.",explanation:"Other threads may see partially initialized final fields, destroying thread-safety guarantees of the Java Memory Model.",hint:"Never publish 'this' to other threads inside the constructor.",level:"Advanced",codeExample:"// Anti-pattern: EventManager.register(this); // Inside constructor"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full",children:"Thread-Safety & Immutability"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Constructors in Immutable Classes: Safe Final Field Assignment"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Learn how to design rock-solid immutable entities in Java. Master defensive copying of mutable collections, safe ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"final"}),' field assignments, and avoiding the dangerous "this reference escape" trap.']})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"🛡️"})," Building Thread-Safe Invariant Shields"]}),e.jsx("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:e.jsxs("p",{children:["An ",e.jsx("strong",{children:"Immutable Object"})," cannot be altered once created. Its constructor serves as the sole gateway for state setup, requiring defensive copying of incoming collections and absolute freeze semantics."]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"ImmutableClassConstructorSafetyDemo.java",highlightLines:[19,26,44,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"Immutable Class Constructors FAQs (Technical Q&As)",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:a,title:"Module 002_002 Topic 17: Immutable Class Constructors",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic17_immutable_constructors_note.txt"})}),e.jsx(r,{note:"In concurrent enterprise Java, immutability is king. Always defensively copy mutable collections in your constructor, assign final fields, and never let 'this' escape before the constructor finishes! — Sukanta Hui"})]})}export{g as default};
