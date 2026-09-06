import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 1: Upper Bounded Type Parameters: Syntax (<T extends SuperClassOrInterface>)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
// Base Domain Model:\r
class AcademicMember {\r
    private final String name;\r
    private final String branch;\r
\r
    public AcademicMember(String name, String branch) {\r
        this.name = name;\r
        this.branch = branch;\r
    }\r
\r
    public String getName() { return name; }\r
    public String getBranch() { return branch; }\r
}\r
\r
class TraineeStudent extends AcademicMember {\r
    public TraineeStudent(String name, String branch) { super(name, branch); }\r
}\r
\r
class FacultyInstructor extends AcademicMember {\r
    public FacultyInstructor(String name, String branch) { super(name, branch); }\r
}\r
\r
// Upper Bounded Generic Registry (T must be AcademicMember or its subclasses):\r
class BranchDirectory<T extends AcademicMember> {\r
    public void printBadge(T member) {\r
        System.out.printf("  [BADGE] Name: %-18s | Branch: %s%n", member.getName(), member.getBranch());\r
    }\r
}\r
\r
public class UpperBoundedTypeParameterSyntaxDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: UPPER BOUNDED TYPE PARAMETERS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BranchDirectory<TraineeStudent> studentDir = new BranchDirectory<>();\r
        BranchDirectory<FacultyInstructor> facultyDir = new BranchDirectory<>();\r
\r
        System.out.println(">>> 1. Printing Badges for Upper Bounded Entities:");\r
        studentDir.printBadge(new TraineeStudent("Swadeep Paul", "Barrackpore Central"));\r
        studentDir.printBadge(new TraineeStudent("Tuhina Das", "Naihati Center"));\r
        facultyDir.printBadge(new FacultyInstructor("Sukanta Hui", "Barrackpore Head"));\r
\r
        System.out.println("\\n>>> UPPER BOUND TERMINOLOGY:");\r
        System.out.println("  - In '<T extends AcademicMember>', 'AcademicMember' acts as the UPPER BOUND (inclusive ceiling).");\r
        System.out.println("  - Any subtype below AcademicMember in the inheritance tree is permissible.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 1: Upper Bounded Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UPPER BOUND SYNTAX:\r
   - '<T extends SuperType>' establishes upper limit.\r
   - Accepts 'SuperType' and all descendant subclasses.\r
   - Rejects unrelated classes at compile time.\r
   - Enforces domain-specific polymorphism.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"In the declaration '<T extends SuperType>', what does the term 'Upper Bound' mean?",shortAnswer:"'Upper Bound' means that 'SuperType' is the highest permissible type (the ceiling) in the class hierarchy. The type argument provided at compile time must be either 'SuperType' itself or any of its direct or indirect subclasses/implementations. Any class higher up (like Object) or sibling classes outside the subtree are rejected.",explanation:"Standard taxonomy for generic type boundaries.",hint:"Sets the ceiling of the permissible hierarchy; type must be SuperType or a subtype thereof.",level:"Beginner",codeExample:"class Box<T extends Number> { ... } // Upper bound is Number"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Upper Bounds"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Upper Bounded Type Parameters: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"<T extends SuperClassOrInterface>"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Structure hierarchical constraints: establishing upper bound ceilings to accept domain classes and all child sub-classes with compile-time verification."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"UpperBoundedTypeParameterSyntaxDemo.java",highlightLines:[7,10,27,28,29,38,39,42,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Upper Bounds FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 006_003 Topic 1: Upper Bounded Syntax",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic1_upper_bounded_syntax_note.txt"})}),e.jsx(a,{note:"Think of 'extends' in generics as establishing a family ceiling! '<T extends AcademicMember>' means anyone in the AcademicMember family tree (Students, Faculty, Staff) is welcome, but strangers are rejected! — Sukanta Hui"})]})}export{x as default};
