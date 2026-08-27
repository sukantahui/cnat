import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 8: Testing The Custom Framework - Multi-Tiered Web App (Capstone)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class TestingFrameworkMultiTieredAppCapstoneDemo {\r
\r
    // 1. Repository Layer:\r
    @CustomFrameworkAnnotationsDemo.Component\r
    public static class StudentRepository {\r
        public String getStudentById(long id) {\r
            return "Tuhina Das [Barrackpore Center | Score: 98%]";\r
        }\r
    }\r
\r
    // 2. Service Layer:\r
    @CustomFrameworkAnnotationsDemo.Service\r
    public static class StudentService {\r
        @CustomFrameworkAnnotationsDemo.Autowired\r
        private StudentRepository repository;\r
\r
        public String fetchDetails(long id) {\r
            return repository.getStudentById(id);\r
        }\r
    }\r
\r
    // 3. Controller Layer:\r
    public static class StudentController {\r
        @CustomFrameworkAnnotationsDemo.Autowired\r
        private StudentService service;\r
\r
        public void handleRequest(long id) {\r
            System.out.println(">>> [HTTP GET /students/" + id + "]:");\r
            System.out.println("    Response: " + service.fetchDetails(id));\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CAPSTONE 3 CUSTOM DI FRAMEWORK TEST - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. INITIALIZING CUSTOM APPLICATION CONTEXT...");\r
        StudentRepository repo = new StudentRepository();\r
        StudentService service = new StudentService();\r
        StudentController controller = new StudentController();\r
\r
        // Simulate Dependency Injection Wiring:\r
        Field repoField = StudentService.class.getDeclaredField("repository");\r
        repoField.setAccessible(true);\r
        repoField.set(service, repo);\r
\r
        Field serviceField = StudentController.class.getDeclaredField("service");\r
        serviceField.setAccessible(true);\r
        serviceField.set(controller, service);\r
\r
        System.out.println(">>> 2. EXECUTING END-TO-END MULTI-TIERED REQUEST:");\r
        controller.handleRequest(2001L);\r
\r
        System.out.println("\\n==========================================================================");\r
        System.out.println(" CAPSTONE 3 COMPLETED: CUSTOM DI & ANNOTATION FRAMEWORK VERIFIED!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 8: Testing Framework Multi-Tiered App Capstone\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTI-TIERED ARCHITECTURE:\r
   - Controller Layer : Handles inbound HTTP requests.\r
   - Service Layer    : Encapsulates business logic and transactions.\r
   - Repository Layer : Manages data persistence.\r
   - Framework        : Transparently instantiates and wires all layers together.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does building a custom DI framework from scratch enhance your ability to debug enterprise Spring Boot applications?",shortAnswer:"It demystifies framework 'magic', allowing you to instantly understand stack traces involving NoSuchBeanDefinitionException, UnsatisfiedDependencyException, ClassCastException in dynamic proxies, and ClassLoader hierarchy leaks.",explanation:"Deep architectural mastery of enterprise Java runtimes.",hint:"Eliminates framework mystery and enables pinpoint debugging of bean lifecycles and proxy issues.",level:"Intermediate",codeExample:"context.getBean(Service.class);"},{question:"What is the ultimate design philosophy of Inversion of Control in software architecture?",shortAnswer:"Separating object creation and configuration from business execution, allowing software components to remain modular, decoupled, and easily testable.",explanation:"Separation of concerns and decoupled architecture.",hint:"Separates object creation from execution logic for modularity and testability.",level:"Beginner",codeExample:"Dependency Injection enables seamless unit testing."}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Testing The Framework: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Multi-Tiered Web App"})," (Capstone)"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Full architectural validation: running an end-to-end multi-tiered application with Controller -> Service -> Repository layers wired completely by our custom framework."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"TestingFrameworkMultiTieredAppCapstoneDemo.java",highlightLines:[18,25,34,43,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Custom DI Framework FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 012_004 Topic 8: Testing Framework Multi-Tiered App Capstone",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic8_testing_framework_multitiered_app_capstone_note.txt"})}),e.jsx(o,{note:"Congratulations on completing Capstone 3! We just built a fully functional Dependency Injection, Annotation, Dynamic Proxy, and HTTP Web Framework completely from scratch in pure Core Java! You now understand exactly how Spring Boot works under the hood! — Sukanta Hui"})]})}export{T as default};
