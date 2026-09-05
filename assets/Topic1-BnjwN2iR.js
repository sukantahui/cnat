import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 1: How Frameworks Use Reflection - Mini Dependency Injection Engine\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.annotation.Retention;\r
import java.lang.annotation.RetentionPolicy;\r
import java.lang.reflect.Field;\r
\r
public class HowFrameworksUseReflectionDemo {\r
\r
    // Custom Annotation: Simulating Spring's @Autowired\r
    @Retention(RetentionPolicy.RUNTIME)\r
    public @interface MiniAutowired {}\r
\r
    // Service Dependency\r
    public static class PaymentGateway {\r
        public void processFee(String studentName, double amount) {\r
            System.out.println("   💳 [PAYMENT GATEWAY]: Processing ₹" + amount + " for " + studentName);\r
        }\r
    }\r
\r
    // Client Component with Injected Dependency\r
    public static class AcademyEnrollmentService {\r
        @MiniAutowired\r
        private PaymentGateway paymentGateway; // Injected via Reflection!\r
\r
        public void enrollStudent(String name, double fee) {\r
            System.out.println("1. Enrolling student: " + name);\r
            paymentGateway.processFee(name, fee);\r
            System.out.println("2. Enrollment completed successfully at Barrackpore!");\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: HOW FRAMEWORKS USE REFLECTION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Simulating Spring IoC Container Initialization:\r
        AcademyEnrollmentService service = new AcademyEnrollmentService();\r
        PaymentGateway gatewayInstance = new PaymentGateway();\r
\r
        System.out.println(">>> SIMULATING SPRING IOC CONTAINER DEPENDENCY INJECTION:");\r
\r
        // Scan all fields for @MiniAutowired and inject instance via Reflection:\r
        for (Field field : service.getClass().getDeclaredFields()) {\r
            if (field.isAnnotationPresent(MiniAutowired.class)) {\r
                System.out.println("  - Discovered @MiniAutowired on field: " + field.getName());\r
                field.setAccessible(true); // Bypass private encapsulation\r
                field.set(service, gatewayInstance); // Inject dependency bean!\r
                System.out.println("  - Successfully injected PaymentGateway bean into " + field.getName());\r
            }\r
        }\r
\r
        // Running service with injected dependency:\r
        System.out.println("\\n>>> RUNNING SERVICE WITH INJECTED DEPENDENCY:");\r
        service.enrollStudent("Swadeep Paul", 4500.0);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 1: How Frameworks Use Reflection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FRAMEWORK ARCHITECTURE POWERED BY REFLECTION:\r
   - Spring Framework:\r
     * Scans for '@Component', '@Service', '@Repository'.\r
     * Instantiates beans via 'constructor.newInstance()'.\r
     * Injects dependencies into fields annotated with '@Autowired'.\r
   - Hibernate / JPA:\r
     * Scans for '@Entity', '@Table', '@Column'.\r
     * Maps database table rows into private entity fields via 'field.set()'.\r
   - Jackson / Gson:\r
     * Scans getters/fields to serialize objects to JSON strings and deserialize back.\r
   - JUnit 5:\r
     * Discovers and invokes all methods annotated with '@Test'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"How does an Inversion of Control (IoC) container inject private fields annotated with @Autowired?",shortAnswer:"The IoC container scans declared fields using class.getDeclaredFields(), checks for the @Autowired annotation via field.isAnnotationPresent(), calls field.setAccessible(true) to bypass access modifiers, and calls field.set(targetInstance, beanInstance).",explanation:"Enables field-based dependency injection without requiring boilerplate setters.",hint:"Scans fields, enables access with setAccessible(true), and sets the bean via field.set().",level:"Intermediate",codeExample:"field.setAccessible(true); field.set(service, dependency);"},{question:"What annotation retention policy is required for annotations processed via Reflection?",shortAnswer:"RetentionPolicy.RUNTIME, which instructs the compiler to retain the annotation bytecode in the .class file and keep it accessible to the JVM Reflection runtime.",explanation:"SOURCE and CLASS retentions are not visible via Reflection at runtime.",hint:"@Retention(RetentionPolicy.RUNTIME)",level:"Beginner",codeExample:"@Retention(RetentionPolicy.RUNTIME) public @interface MyAnnotation {}"}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["How Frameworks Use Reflection: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Spring DI, Hibernate ORM & Jackson JSON"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Under the hood of enterprise frameworks: building a miniature Dependency Injection engine and JSON parser using Reflection."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"HowFrameworksUseReflectionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Java Reflection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:o,title:"Module 010_001 Topic 1: How Frameworks Use Reflection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic1_how_frameworks_use_reflection_note.txt"})}),e.jsx(r,{note:"When you write @Autowired in Spring, Spring uses Reflection to find that field, sets field.setAccessible(true), and injects the dependency bean! Let's build a mini-Spring engine to see exactly how it works! — Sukanta Hui"})]})}export{w as default};
