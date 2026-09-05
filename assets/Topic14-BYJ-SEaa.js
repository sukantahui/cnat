import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const n=`/**\r
 * Java Core Tutorial - Module 002_002: Constructors, Chaining & Object Lifecycle\r
 * Topic 14: Constructor Access Modifiers: public, protected, package-private, private\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.constructors;\r
\r
public class ConstructorAccessModifiersScopeDemo {\r
\r
    public static class AdmissionPackage {\r
        private String packageName;\r
        private String visibilityScope;\r
\r
        // 1. PUBLIC: Anywhere in any package\r
        public AdmissionPackage(String packageName) {\r
            this.packageName = packageName;\r
            this.visibilityScope = "GLOBAL (public)";\r
        }\r
\r
        // 2. PROTECTED: Same package + Subclasses in other packages\r
        protected AdmissionPackage(String packageName, int discountTier) {\r
            this.packageName = packageName + " [Tier " + discountTier + "]";\r
            this.visibilityScope = "SUBCLASS + PACKAGE (protected)";\r
        }\r
\r
        // 3. PACKAGE-PRIVATE (Default): Same package only\r
        AdmissionPackage(String packageName, String internalCode) {\r
            this.packageName = packageName + " (" + internalCode + ")";\r
            this.visibilityScope = "PACKAGE ONLY (default)";\r
        }\r
\r
        // 4. PRIVATE: Within this class only (Factory use)\r
        private AdmissionPackage(String packageName, boolean isSpecialVip) {\r
            this.packageName = packageName + " [VIP SPECIAL]";\r
            this.visibilityScope = "CLASS ONLY (private)";\r
        }\r
\r
        // Static Factory Method to expose private constructor\r
        public static AdmissionPackage createVipPackage(String name) {\r
            return new AdmissionPackage(name, true);\r
        }\r
\r
        public void printInfo() {\r
            System.out.printf("  -> Package: %-30s | Scope: %s\\n", packageName, visibilityScope);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 14: CONSTRUCTOR ACCESS MODIFIERS SCOPE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        AdmissionPackage p1 = new AdmissionPackage("Full Stack Java 2026");\r
        p1.printInfo();\r
\r
        AdmissionPackage p2 = new AdmissionPackage("Java Core FastTrack", 2);\r
        p2.printInfo();\r
\r
        AdmissionPackage p3 = new AdmissionPackage("DBMS Special Batch", "INT-99");\r
        p3.printInfo();\r
\r
        AdmissionPackage p4 = AdmissionPackage.createVipPackage("Barrackpore Mentorship Pro");\r
        p4.printInfo();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_002: Constructors, Constructor Chaining & Object Lifecycle\r
Topic 14: Constructor Access Modifiers: Scope Matrix\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. VISIBILITY SCOPE MATRIX:\r
   -----------------------------------------------------------------------------\r
   MODIFIER         SAME CLASS   SAME PACKAGE   SUBCLASS (DIFF PKG)   WORLD\r
   -----------------------------------------------------------------------------\r
   public           YES          YES            YES                   YES\r
   protected        YES          YES            YES (via super())     NO\r
   default (none)   YES          YES            NO                    NO\r
   private          YES          NO             NO                    NO\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,c=[{question:"Which four Access Modifiers can be applied to constructors in Java?",shortAnswer:"1. public (universal access), 2. protected (package + subclasses), 3. package-private / default (same package only), 4. private (declaring class only).",explanation:"Constructor access modifiers govern who is permitted to instantiate the class from different package locations.",hint:"public, protected, package-private, private.",level:"Beginner",codeExample:`public A() {}
protected A(int x) {}
A(String s) {}
private A(double d) {}`},{question:"What is the access modifier of the default constructor generated by the compiler?",shortAnswer:"The default constructor has the EXACT same access modifier as the class declaration (public if class is public, package-private if class is package-private).",explanation:"A public class gets a public default constructor; a package-private class gets a package-private default constructor.",hint:"Inherits class visibility.",level:"Intermediate",codeExample:`public class Trainee {} // Constructor is public
class Trainee {} // Constructor is package-private`},{question:"Can a constructor be declared with 'protected' visibility?",shortAnswer:"Yes. Protected constructors allow instantiation from within the same package, and allow subclasses in other packages to invoke 'super()' on it.",explanation:"Protected constructors are common in framework base classes (e.g. Spring, Hibernate template classes).",hint:"Allows subclass super() calls and same package instantiation.",level:"Intermediate",codeExample:"protected BaseService() {}"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_002 · Topic 14"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Encapsulation & Access Control"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Constructor Access Modifiers: Public, Protected, Package-Private & Private"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Master the complete visibility matrix for constructors. Control instantiation scope across packages, framework subclassing boundaries, and factory-exclusive models."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 p-6 md:p-8 rounded-2xl border border-slate-800 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-400 flex items-center gap-2",children:[e.jsx("span",{children:"🏛️"})," The 4 Scopes of Object Instantiation"]}),e.jsxs("div",{className:"space-y-4 text-slate-300 leading-relaxed text-sm md:text-base",children:[e.jsxs("p",{children:["Applying access modifiers to constructors controls exactly ",e.jsx("em",{children:"who"})," is allowed to create instances of your class across package and inheritance boundaries:"]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 font-mono text-xs",children:[e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-emerald-500/30",children:[e.jsx("h3",{className:"text-emerald-400 font-bold text-sm mb-1",children:"public"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:["Any class in any package can call ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"new"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-sky-500/30",children:[e.jsx("h3",{className:"text-sky-400 font-bold text-sm mb-1",children:"protected"}),e.jsxs("p",{className:"text-slate-300 font-sans text-xs",children:["Same package + child classes in other packages via ",e.jsx("code",{className:"text-sky-300 font-mono",children:"super()"}),"."]})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-amber-500/30",children:[e.jsx("h3",{className:"text-amber-400 font-bold text-sm mb-1",children:"package-private"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs",children:"Only classes in the exact same package."})]}),e.jsxs("div",{className:"p-4 bg-slate-950 rounded-xl border border-rose-500/30",children:[e.jsx("h3",{className:"text-rose-400 font-bold text-sm mb-1",children:"private"}),e.jsx("p",{className:"text-slate-300 font-sans text-xs",children:"Only methods/inner classes inside this class (Singleton/Factory)."})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:n,title:"ConstructorAccessModifiersScopeDemo.java",highlightLines:[15,21,27,33,39,50,53,56,59]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{title:"Constructor Access Modifiers FAQs (Technical Q&As)",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 002_002 Topic 14: Constructor Access Modifiers",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_002_topic14_access_modifiers_note.txt"})}),e.jsx(r,{note:"Choose constructor visibility deliberately: public for client APIs, protected for framework base classes, package-private for modular internal tools, and private for Singletons! — Sukanta Hui"})]})}export{h as default};
