import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const i=`/**\r
 * Java Core Tutorial - Module 004_003: Throw, Throws & Custom Exceptions\r
 * Topic 4: Method Overriding Rules with 'throws': The Liskov Substitution Principle\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.io.FileNotFoundException;\r
import java.io.IOException;\r
\r
// Parent class defining initial throws contract:\r
class BaseAcademyService {\r
    public void generateReport() throws IOException {\r
        System.out.println("  [BASE] Generating basic report...");\r
    }\r
}\r
\r
// 1. LEGAL OVERRIDE: Child throws a MORE SPECIFIC (Narrower) Checked Exception:\r
class BarrackporeBranchService extends BaseAcademyService {\r
    @Override\r
    public void generateReport() throws FileNotFoundException {\r
        System.out.println("  [LEGAL CHILD 1] Throws narrower FileNotFoundException.");\r
    }\r
}\r
\r
// 2. LEGAL OVERRIDE: Child throws NO Checked Exception at all:\r
class NaihatiBranchService extends BaseAcademyService {\r
    @Override\r
    public void generateReport() {\r
        System.out.println("  [LEGAL CHILD 2] Throws no checked exceptions at all.");\r
    }\r
}\r
\r
// 3. LEGAL OVERRIDE: Child can throw ANY Unchecked (RuntimeException) freely:\r
class ShyamnagarBranchService extends BaseAcademyService {\r
    @Override\r
    public void generateReport() throws NullPointerException, IllegalArgumentException {\r
        System.out.println("  [LEGAL CHILD 3] Throws unchecked RuntimeExceptions.");\r
    }\r
}\r
\r
/*\r
 * ILLEGAL OVERRIDE (Causes Compile Error):\r
 *\r
 * class BadChildService extends BaseAcademyService {\r
 *     @Override\r
 *     public void generateReport() throws Exception { // COMPILE ERROR!\r
 *         // Error: generateReport() in BadChildService cannot override generateReport() in BaseAcademyService\r
 *         // overridden method does not throw java.lang.Exception\r
 *     }\r
 * }\r
 */\r
\r
public class OverridingThrowsRulesDemo {\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: METHOD OVERRIDING WITH 'throws' RULES - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BaseAcademyService service = new BarrackporeBranchService();\r
        service.generateReport();\r
\r
        System.out.println("\\n>>> 3 GOLDEN OVERRIDING RULES WITH 'throws':");\r
        System.out.println("  1. Child method CANNOT throw a BROADER (Superclass) checked exception than parent.");\r
        System.out.println("  2. Child method CAN throw a NARROWER (Subclass) checked exception or FEWER exceptions.");\r
        System.out.println("  3. Child method can throw ANY Unchecked Exception (RuntimeException) without restrictions.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_003: Throw, Throws & Custom Exceptions\r
Topic 4: Method Overriding with throws\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OVERRIDING THROWS RULES:\r
   - Broader Checked Exception → ILLEGAL (Compile Error).\r
   - Narrower Checked Exception → LEGAL.\r
   - No Checked Exception → LEGAL.\r
   - Any RuntimeException → LEGAL.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the core rule regarding Checked Exceptions when overriding a method in a child class in Java?",shortAnswer:"The overriding child method CANNOT declare broader (superclass) or brand-new checked exceptions than those declared in the parent method signature. It may only declare: 1. The exact same checked exceptions. 2. Narrower (subclass) checked exceptions. 3. Fewer or no checked exceptions. (Unchecked RuntimeExceptions can be declared freely without restriction).",explanation:"Enforces the Liskov Substitution Principle (LSP) so polymorphic callers are never surprised.",hint:"Child can declare narrower or fewer checked exceptions, but NEVER broader ones.",level:"Intermediate",codeExample:"// Parent: void m() throws IOException\\n// Legal Child: void m() throws FileNotFoundException"}];function E(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_003 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Polymorphic Contract"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Method Overriding Rules with ",e.jsx("code",{className:"text-amber-400 font-mono",children:"throws"})," (Liskov Substitution Principle)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master polymorphic exception contracts: learning why child methods cannot throw broader checked exceptions and how to narrow exception signatures cleanly."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"OverridingThrowsRulesDemo.java",highlightLines:[7,10,15,17,23,25,31,33,40]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Overriding Throws FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:a,title:"Module 004_003 Topic 4: Overriding Throws Rules",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_003_topic4_overriding_throws_rules_note.txt"})}),e.jsx(o,{note:"If a parent method promises to throw only IOException, the child cannot suddenly throw Exception! Otherwise, polymorphism would break for anyone holding a parent reference! — Sukanta Hui"})]})}export{E as default};
