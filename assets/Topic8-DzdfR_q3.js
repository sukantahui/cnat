import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 010_001: Java Reflection API & Dynamic Member Inspection\r
 * Topic 8: Dynamic Proxies - Proxy.newProxyInstance & InvocationHandler\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.reflection;\r
\r
import java.lang.reflect.InvocationHandler;\r
import java.lang.reflect.Method;\r
import java.lang.reflect.Proxy;\r
\r
public class DynamicProxiesInvocationHandlerDemo {\r
\r
    // 1. Target Interface (Dynamic Proxies require interfaces!)\r
    public interface StudentFeeService {\r
        void collectFee(String studentName, double amount);\r
        double checkBalance(String studentName);\r
    }\r
\r
    // 2. Real Implementation\r
    public static class StudentFeeServiceImpl implements StudentFeeService {\r
        @Override\r
        public void collectFee(String studentName, double amount) {\r
            System.out.println("   [DB EXECUTION]: ₹" + amount + " fee recorded for " + studentName);\r
        }\r
\r
        @Override\r
        public double checkBalance(String studentName) {\r
            return 0.0; // Clear balance\r
        }\r
    }\r
\r
    // 3. Dynamic InvocationHandler: Intercepts all method calls (AOP Logging & Timing)\r
    public static class LoggingInvocationHandler implements InvocationHandler {\r
        private final Object target;\r
\r
        public LoggingInvocationHandler(Object target) {\r
            this.target = target;\r
        }\r
\r
        @Override\r
        public Object invoke(Object proxy, Method method, Object[] args) throws Throwable {\r
            System.out.println("   ⏱️ [AOP PROXY INTERCEPTOR - BEFORE]: Invoking method: " + method.getName() + "()");\r
            long start = System.currentTimeMillis();\r
\r
            // Delegate to real target object:\r
            Object result = method.invoke(target, args);\r
\r
            long duration = System.currentTimeMillis() - start;\r
            System.out.println("   ⏱️ [AOP PROXY INTERCEPTOR - AFTER]: Method " + method.getName() + "() completed in " + duration + " ms\\n");\r
            return result;\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: DYNAMIC PROXIES & INVOCATIONHANDLER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentFeeService realService = new StudentFeeServiceImpl();\r
\r
        // 4. Creating Dynamic Proxy Instance at Runtime:\r
        StudentFeeService proxyService = (StudentFeeService) Proxy.newProxyInstance(\r
            StudentFeeService.class.getClassLoader(),\r
            new Class<?>[]{StudentFeeService.class},\r
            new LoggingInvocationHandler(realService)\r
        );\r
\r
        System.out.println(">>> 1. Proxy Class Name: " + proxyService.getClass().getName() + " ($Proxy0)\\n");\r
\r
        // Executing methods through the Dynamic Proxy:\r
        proxyService.collectFee("Swadeep Paul", 4500.0);\r
        proxyService.checkBalance("Tuhina Das");\r
\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_001: Java Reflection API & Dynamic Member Inspection\r
Topic 8: Dynamic Proxies & InvocationHandler\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHAT IS A DYNAMIC PROXY:\r
   - A class created at runtime that implements one or more specified interfaces.\r
   - Every method call on the proxy instance is routed to a single method:\r
     'InvocationHandler.invoke(Object proxy, Method method, Object[] args)'.\r
\r
2. KEY METHOD:\r
   - 'Proxy.newProxyInstance(ClassLoader loader, Class<?>[] interfaces, InvocationHandler h)'\r
\r
3. ENTERPRISE USE CASES:\r
   - Aspect-Oriented Programming (Spring AOP, '@Transactional', logging, security).\r
   - RPC / REST Client generators (Feign, Retrofit, RMI).\r
   - Mocking frameworks (Mockito creating dynamic test mocks).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"What is the key limitation of JDK Dynamic Proxies (java.lang.reflect.Proxy)?",shortAnswer:"JDK Dynamic Proxies can ONLY proxy interfaces, not concrete classes. To proxy concrete classes without interfaces, libraries use bytecode manipulation tools like CGLIB or ByteBuddy.",explanation:"Spring uses JDK Dynamic Proxies for interfaces and CGLIB for class proxies.",hint:"JDK Dynamic Proxies only support interface proxying, not concrete classes.",level:"Intermediate",codeExample:"Proxy.newProxyInstance(loader, new Class<?>[]{MyInterface.class}, handler);"},{question:"What are the 3 arguments passed into InvocationHandler.invoke()?",shortAnswer:"1. Object proxy (the dynamic proxy instance itself), 2. Method method (the java.lang.reflect.Method being called), 3. Object[] args (an array of arguments passed to the method).",explanation:"Allows pre-processing, delegation to the target object, and post-processing.",hint:"proxy, method, and args.",level:"Intermediate",codeExample:"public Object invoke(Object proxy, Method method, Object[] args)"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_001 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Reflection API & Metadata"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Dynamic Proxies in Java: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Proxy.newProxyInstance() & InvocationHandler"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Runtime AOP and method interception: creating dynamic proxy instances, intercepting interface calls, and building logging & transaction decorators."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"DynamicProxiesInvocationHandlerDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Java Reflection FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:i,title:"Module 010_001 Topic 8: Dynamic Proxies & InvocationHandler",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_001_topic8_dynamic_proxies_invocationhandler_note.txt"})}),e.jsx(a,{note:"Dynamic Proxies are how Spring handles @Transactional and @Cacheable! Java creates a proxy wrapper object in memory that intercepts every method call, starts a transaction, calls your method, and commits! — Sukanta Hui"})]})}export{y as default};
