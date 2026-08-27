import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 006_003: Bounded Type Parameters & Multiple Bounds\r
 * Topic 4: Multiple Bounds Syntax: <T extends ClassA & InterfaceB & InterfaceC>\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.generics;\r
\r
import java.io.Serializable;\r
\r
// Superclass Bound:\r
abstract class AcademicPerson {\r
    private final String fullName;\r
    public AcademicPerson(String name) { this.fullName = name; }\r
    public String getFullName() { return fullName; }\r
}\r
\r
// Interface Bound 1:\r
interface Auditable {\r
    String getAuditTimestamp();\r
}\r
\r
// Interface Bound 2:\r
interface Scoreable {\r
    double getFinalScore();\r
}\r
\r
// Concrete class satisfying ALL THREE bounds:\r
class CertifiedTrainee extends AcademicPerson implements Auditable, Scoreable, Serializable {\r
    private static final long serialVersionUID = 1L;\r
    private final double score;\r
\r
    public CertifiedTrainee(String name, double score) {\r
        super(name);\r
        this.score = score;\r
    }\r
\r
    @Override public String getAuditTimestamp() { return "2026-08-27T01:20:00Z"; }\r
    @Override public double getFinalScore() { return score; }\r
}\r
\r
// Generic Evaluator enforcing MULTIPLE BOUNDS:\r
class MultiBoundCertifier<T extends AcademicPerson & Auditable & Scoreable> {\r
    public void generateCertificate(T entity) {\r
        System.out.println("  [CERTIFICATE ISSUED]");\r
        System.out.println("    Candidate : " + entity.getFullName());\r
        System.out.println("    Score     : " + entity.getFinalScore());\r
        System.out.println("    Audit Log : " + entity.getAuditTimestamp());\r
    }\r
}\r
\r
public class MultipleBoundsSyntaxDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: MULTIPLE BOUNDS SYNTAX (&) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CertifiedTrainee trainee = new CertifiedTrainee("Swadeep Paul (Barrackpore)", 98.5);\r
\r
        MultiBoundCertifier<CertifiedTrainee> certifier = new MultiBoundCertifier<>();\r
        certifier.generateCertificate(trainee);\r
\r
        System.out.println("\\n>>> MULTIPLE BOUNDS SYNTAX RULES:");\r
        System.out.println("  1. Bounds are joined with the ampersand '&' symbol: '<T extends ClassA & InterfaceB & InterfaceC>'.");\r
        System.out.println("  2. The type 'T' is guaranteed to possess methods from ClassA, InterfaceB, and InterfaceC simultaneously!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 006_003: Bounded Type Parameters & Multiple Bounds\r
Topic 4: Multiple Bounds Syntax\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTIPLE BOUNDS SYNTAX:\r
   - '<T extends ClassA & InterfaceB & InterfaceC>'.\r
   - Ampersand '&' connects bounds.\r
   - Enforces simultaneous inheritance of class and interfaces.\r
   - Allows invocation of methods from all listed bounds.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What symbol is used in Java generic declarations to separate multiple bounds (e.g. class and multiple interfaces)?",shortAnswer:"The ampersand symbol '&' is used to join multiple bounds in Java generics: '<T extends SuperClass & InterfaceA & InterfaceB>'. Using commas (',') would declare a separate type parameter, which is a syntax error in a multiple-bound context.",explanation:"Enforces multi-faceted contracts on generic type parameters.",hint:"Ampersand '&' joins multiple bounds (e.g. '<T extends A & B>').",level:"Beginner",codeExample:"public <T extends Number & Comparable<T>> void process(T val) { ... }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 006_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Multiple Bounds"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Multiple Bounds Syntax: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"<T extends ClassA & InterfaceB & InterfaceC>"})]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct multi-faceted type contracts: chaining superclasses and multiple interface bounds using ampersand (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"&"}),") separators."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"MultipleBoundsSyntaxDemo.java",highlightLines:[7,10,36,37,38,48,49,50]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Multiple Bounds FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 006_003 Topic 4: Multiple Bounds Syntax",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"006_003_topic4_multiple_bounds_syntax_note.txt"})}),e.jsx(a,{note:"If your generic method needs an object that is both a Number AND Comparable (like Integer or Double), use an ampersand: '<T extends Number & Comparable<T>>'! This lets you do math AND compare! — Sukanta Hui"})]})}export{b as default};
