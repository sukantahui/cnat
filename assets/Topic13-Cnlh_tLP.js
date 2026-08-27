import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const s=`/**\r
 * Java Core Tutorial - Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
 * Topic 13: Security Benefits of Delegation - Preventing Rogue Class Hijacking\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jvm;\r
\r
public class SecurityBenefitsDelegationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: SECURITY BENEFITS OF DELEGATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> ATTEMPTING TO HIJACK java.lang.String WITH CUSTOM BYTECODE:");\r
        System.out.println("  Scenario: A rogue library includes a fake 'java.lang.String' class on classpath.");\r
        System.out.println("  Execution flow:");\r
        System.out.println("  1. AppClassLoader receives request for 'java.lang.String'.");\r
        System.out.println("  2. AppClassLoader delegates up to Platform, which delegates to Bootstrap.");\r
        System.out.println("  3. Bootstrap ClassLoader finds GENUINE JDK 'java.lang.String' in java.base.");\r
        System.out.println("  4. Fake 'java.lang.String' on classpath is IGNORED completely!\\n");\r
\r
        System.out.println(">>> WHAT IF A CUSTOM CLASSLOADER BYPASSES DELEGATION (Prohibited Packages)?");\r
        System.out.println("  - If custom classloader tries to call defineClass('java.lang.MyHackedClass', bytes):");\r
        System.out.println("  - JVM throws 'java.lang.SecurityException: Prohibited package name: java.lang'!");\r
        System.out.println("  - The 'java.*' namespace is strictly reserved and locked down by the JVM.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_003: JVM Architecture, ClassLoaders & Bytecode Execution\r
Topic 13: Security Benefits of Delegation\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. DEFENSE AGAINST MALICIOUS BYTECODE:\r
   - Parent delegation ensures trusted core libraries (java.base) are always loaded\r
     by the trusted Bootstrap ClassLoader before any untrusted classpath JARs are examined.\r
\r
2. 'PROHIBITED PACKAGE' ENFORCEMENT:\r
   - Inside 'ClassLoader.defineClass()', the JVM checks if the class name starts with 'java.'.\r
   - If a custom classloader attempts to define a class in the 'java.*' package, the JVM\r
     immediately throws 'java.lang.SecurityException: Prohibited package name: java.lang'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What exception is thrown if a custom ClassLoader attempts to define a class named 'java.lang.FakeString' via defineClass()?",shortAnswer:"java.lang.SecurityException: Prohibited package name: java.lang. The JVM strictly reserves the 'java.*' namespace for official JDK packages.",explanation:"Enforced directly in java.lang.ClassLoader.preDefineClass().",hint:"SecurityException: Prohibited package name: java.lang",level:"Intermediate",codeExample:"defineClass('java.lang.Fake', bytes) // Throws SecurityException!"},{question:"How does the Parent-Delegation model protect enterprise applications from malicious third-party dependencies?",shortAnswer:"By delegating requests upward, the JVM ensures that trusted core platform classes are always resolved from genuine JDK runtime images rather than compromised third-party JARs on the application classpath.",explanation:"Guarantees runtime sandbox integrity.",hint:"Always resolves foundational classes from trusted JDK images first.",level:"Beginner",codeExample:"Guarantees core JDK classes cannot be overridden by classpath JARs."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_003 · Topic 13"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM & ClassLoaders"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Security Benefits of Delegation: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Preventing Rogue java.lang.String Hijacking"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Protecting the JVM sandbox: why creating a custom package java.lang.String fails to execute due to Parent Delegation and SecurityManager constraints."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:s,title:"SecurityBenefitsDelegationDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"JVM Architecture & ClassLoaders FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 010_003 Topic 13: Security Benefits of Delegation",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_003_topic13_security_benefits_delegation_note.txt"})}),e.jsx(r,{note:"What if a hacker writes their own malicious java.lang.String class with a back-door? Parent delegation stops them completely! The JVM delegates to Bootstrap loader, which always loads the genuine JDK String! — Sukanta Hui"})]})}export{x as default};
