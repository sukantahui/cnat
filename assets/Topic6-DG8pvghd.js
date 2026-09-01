import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 002_007: Abstract Classes & Partial Abstraction\r
 * Topic 6: Partial Abstraction: Mixing Implemented Methods with Abstract Contracts\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.abstraction;\r
\r
public class PartialAbstractionConceptDemo {\r
\r
    // PARTIAL ABSTRACTION: 50% concrete, 50% abstract\r
    public abstract static class CloudDeploymentPipeline {\r
\r
        // Concrete Step 1: Shared validation\r
        public void validateSourceCode() {\r
            System.out.println("  [STEP 1] Running SonarQube static code analysis & security scan...");\r
        }\r
\r
        // Abstract Step 2: Specialized packaging (WAR vs Docker Image)\r
        public abstract void buildArtifact();\r
\r
        // Concrete Step 3: Shared notification\r
        public void notifyDevOpsTeam() {\r
            System.out.println("  [STEP 3] Dispatching deployment confirmation webhook to Slack.");\r
        }\r
\r
        // Orchestration Workflow\r
        public void executePipeline() {\r
            validateSourceCode();\r
            buildArtifact();\r
            notifyDevOpsTeam();\r
        }\r
    }\r
\r
    public static class KubernetesPipeline extends CloudDeploymentPipeline {\r
        @Override\r
        public void buildArtifact() {\r
            System.out.println("  [STEP 2] Building multi-arch Docker image & pushing to AWS ECR!");\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: PARTIAL ABSTRACTION PIPELINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        CloudDeploymentPipeline pipeline = new KubernetesPipeline();\r
        pipeline.executePipeline();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_007: Abstract Classes & Partial Abstraction\r
Topic 6: Partial Abstraction Mechanics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PARTIAL ABSTRACTION:\r
   - Allows mixing concrete implemented methods with abstract contracts.\r
   - Perfect for multi-step pipelines where some steps are universal and others are custom.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What is 'Partial Abstraction' and how does an abstract class achieve it?",shortAnswer:"Partial abstraction is providing some implemented methods (concrete logic) alongside unimplemented method contracts (abstract methods), achieving between 1% and 99% abstraction.",explanation:"Unlike Interfaces (which traditionally represented 100% pure abstraction), abstract classes allow a flexible mix of implementation and abstraction.",hint:"A mix of concrete implemented methods and abstract method contracts.",level:"Beginner",codeExample:"abstract class Pipeline { void common() {} abstract void custom(); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_007 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Hybrid Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Partial Abstraction: Mixing Implemented Methods & Abstract Contracts"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Understand how partial abstraction provides a flexible middle ground between pure concrete classes and pure interfaces."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"PartialAbstractionConceptDemo.java",highlightLines:[11,14,19,22,27,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Partial Abstraction FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 002_007 Topic 6: Partial Abstraction",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_007_topic6_partial_abstraction_note.txt"})}),e.jsx(r,{note:"Partial abstraction is what makes abstract classes so versatile: you get both code sharing and mandatory contract enforcement in one single file! — Sukanta Hui"})]})}export{h as default};
