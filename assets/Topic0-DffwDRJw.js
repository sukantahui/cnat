import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const r=`/**\r
 * Java Core Tutorial - Module 002_009: Packages, Access Modifiers, JAR Packaging & Module System\r
 * Topic 0: Why Packages Are Required: Namespace Collision Prevention & Organization\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.packages;\r
\r
public class WhyPackagesAreRequiredDemo {\r
\r
    // Namespace collision prevention:\r
    // Without packages, having two classes named 'Student' would crash the compilation!\r
    // With packages, we can have:\r
    // 1. com.coderaccotax.admissions.Student\r
    // 2. com.coderaccotax.examinations.Student\r
\r
    public static class PackageNamespaceExplanation {\r
        public void explainBenefits() {\r
            System.out.println("  [BENEFIT 1] Namespace Conflict Prevention: Multiple classes with same name can coexist.");\r
            System.out.println("  [BENEFIT 2] Modular Organization: Group related classes (e.g. controllers, services, models).");\r
            System.out.println("  [BENEFIT 3] Access Protection: Enables package-private (default) and protected encapsulation.");\r
            System.out.println("  [BENEFIT 4] Easy Maintenance: Matches directory layout on physical disk.");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 0: WHY PACKAGES ARE REQUIRED IN JAVA - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        PackageNamespaceExplanation explainer = new PackageNamespaceExplanation();\r
        explainer.explainBenefits();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_009: Packages, Access Modifiers & Module System\r
Topic 0: Why Packages Are Required\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PACKAGES ADVANTAGES:\r
   - Namespace management (no class name clashes).\r
   - Access control boundary (package-private).\r
   - Clean architectural structuring (layers: models, repositories, services).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What are the primary reasons packages are essential in Java application development?",shortAnswer:"1. Preventing namespace collisions (allowing duplicate class names in different packages). 2. Logical modular organization. 3. Providing package-level encapsulation (package-private visibility). 4. Simplifying software distribution and security.",explanation:"Packages correspond directly to folder directories in the file system.",hint:"Prevents naming collisions and organizes code modularly.",level:"Beginner",codeExample:"package com.company.project;"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_009 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Modular Architecture"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Why Packages Are Required: Namespace Collision Prevention & Organization"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Discover how Java packages structure codebases, prevent naming collisions, establish access control boundaries, and map directly to physical file directories."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"WhyPackagesAreRequiredDemo.java",highlightLines:[7,16,28]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Why Packages Are Required FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 002_009 Topic 0: Why Packages Are Required",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_009_topic0_why_packages_note.txt"})}),e.jsx(s,{note:"Think of packages like folders in a library: without folders, thousands of books with the same name would get mixed up! Packages keep our Barrackpore project files organized and safe. — Sukanta Hui"})]})}export{h as default};
