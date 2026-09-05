import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 0: How Spring Works Under The Hood - IoC & DI Mechanics\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
public class IoCDIMechanicsUnderTheHoodDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" CAPSTONE 3: CUSTOM DEPENDENCY INJECTION & ANNOTATION FRAMEWORK");\r
        System.out.println(" EDUCATOR: SUKANTA HUI | ACADEMIC HUB: BARRACKPORE, WB");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. TRADITIONAL TIGHTLY-COUPLED CODE (BAD):");\r
        System.out.println("  class OrderService {");\r
        System.out.println("      private PaymentDao dao = new PaymentDaoImpl(); // Hardcoded dependency!");\r
        System.out.println("  }\\n");\r
\r
        System.out.println(">>> 2. INVERSION OF CONTROL (IoC) WITH OUR MINI-SPRING (CLEAN):");\r
        System.out.println("  @Component");\r
        System.out.println("  class OrderService {");\r
        System.out.println("      @Autowired");\r
        System.out.println("      private PaymentDao dao; // Framework injects singleton automatically!");\r
        System.out.println("  }\\n");\r
\r
        System.out.println(">>> 3. INTERNAL 4-STEP FRAMEWORK PIPELINE:");\r
        System.out.println("  1. Package Scan  : Discover all classes with @Component / @Service.");\r
        System.out.println("  2. Bean Registry : Instantiate singletons via Reflection Constructor.newInstance().");\r
        System.out.println("  3. Dependency Graph: Resolve @Autowired fields and inject references.");\r
        System.out.println("  4. AOP Proxies   : Wrap @Transactional methods in java.lang.reflect.Proxy.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 0: IoC & DI Mechanics\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. HOLLYWOOD PRINCIPLE:\r
   - "Don't call us, we'll call you."\r
   - Application code no longer calls 'new MyService()'; the IoC container creates,\r
     configures, wires, and manages the entire bean lifecycle.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the difference between Inversion of Control (IoC) and Dependency Injection (DI)?",shortAnswer:"IoC is the overarching architectural principle where control over object lifecycle and program flow is inverted to a framework; Dependency Injection is the specific design pattern used by the framework to supply required dependencies into dependent objects.",explanation:"IoC is the principle; DI is the implementation mechanism.",hint:"IoC is the broad architectural principle; DI is the concrete delivery mechanism.",level:"Beginner",codeExample:"@Autowired private UserRepository repo;"},{question:"What major advantages does an IoC container provide to enterprise software?",shortAnswer:"Loose coupling, testability (easy mocking in unit tests), centralized configuration, and automated lifecycle/aspect management (security, caching, transactions).",explanation:"Core value proposition of modern frameworks.",hint:"Loose coupling, easy mock testing, and centralized lifecycle management.",level:"Beginner",codeExample:"container.getBean(OrderService.class);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["IoC & DI Mechanics: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"How Spring Works Under The Hood"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:`Demystifying enterprise magic: understanding Inversion of Control containers, Dependency Injection, and the Hollywood Principle ("Don't call us, we'll call you").`})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"IoCDIMechanicsUnderTheHoodDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Custom DI Framework FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 012_004 Topic 0: IoC & DI Mechanics Under The Hood",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic0_ioc_di_mechanics_under_the_hood_note.txt"})}),e.jsx(o,{note:"Welcome to Capstone 3! Have you ever wondered how Spring Boot magically injects services with @Autowired? In this capstone, we will build our own mini Spring Framework from scratch using Reflection, Annotations, Dynamic Proxies, and ClassLoaders! — Sukanta Hui"})]})}export{x as default};
