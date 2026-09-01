import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 3: The Bean Factory & Application Context\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import java.lang.reflect.Constructor;\r
import java.util.Map;\r
import java.util.concurrent.ConcurrentHashMap;\r
\r
public class BeanFactoryAndApplicationContextDemo {\r
\r
    public static class ApplicationContext {\r
        private final Map<Class<?>, Object> singletonRegistry = new ConcurrentHashMap<>();\r
\r
        public void registerBean(Class<?> clazz) throws Exception {\r
            if (!singletonRegistry.containsKey(clazz)) {\r
                Constructor<?> constructor = clazz.getDeclaredConstructor();\r
                constructor.setAccessible(true);\r
                Object instance = constructor.newInstance();\r
                singletonRegistry.put(clazz, instance);\r
                System.out.println("   [CONTAINER]: Instantiated and registered singleton bean: " + clazz.getSimpleName());\r
            }\r
        }\r
\r
        @SuppressWarnings("unchecked")\r
        public <T> T getBean(Class<T> clazz) {\r
            T bean = (T) singletonRegistry.get(clazz);\r
            if (bean == null) {\r
                throw new IllegalStateException("No qualifying bean of type " + clazz.getName() + " found!");\r
            }\r
            return bean;\r
        }\r
    }\r
\r
    public static class SampleService {\r
        public void execute() { System.out.println("SampleService executing business logic!"); }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: BEAN FACTORY & APPLICATION CONTEXT - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        ApplicationContext context = new ApplicationContext();\r
        context.registerBean(SampleService.class);\r
\r
        SampleService service = context.getBean(SampleService.class);\r
        service.execute();\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 3: Bean Factory & Application Context\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. APPLICATIONCONTEXT RESPONSIBILITIES:\r
   - 'ConcurrentHashMap<Class<?>, Object>' guarantees thread-safe singleton storage.\r
   - Instantiates beans via reflection default constructors.\r
   - Provides type-safe '<T> T getBean(Class<T>)' lookups.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does the ApplicationContext use ConcurrentHashMap to store singleton bean instances?",shortAnswer:"To provide thread-safe, lock-free bean lookups across multiple concurrent request threads without suffering from global synchronization bottlenecks.",explanation:"Ensures thread safety in multi-threaded web containers.",hint:"Thread-safe singleton registry for concurrent web requests.",level:"Beginner",codeExample:"private final Map<Class<?>, Object> singletonRegistry = new ConcurrentHashMap<>();"},{question:"How does the generic <T> T getBean(Class<T> clazz) method ensure compile-time type safety?",shortAnswer:"By taking a Class<T> token parameter and returning T, callers receive the exact target type without needing explicit manual type casting.",explanation:"Type-safe heterogenous container pattern.",hint:"Uses generic type token Class<T> to eliminate manual casts.",level:"Intermediate",codeExample:"OrderService s = context.getBean(OrderService.class);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Bean Factory & Context: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Singleton Registry & Metadata"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Container core: building ApplicationContext with a ConcurrentHashMap singleton cache, BeanDefinition metadata, and lazy vs eager instantiation."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"BeanFactoryAndApplicationContextDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Custom DI Framework FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 012_004 Topic 3: The Bean Factory & ApplicationContext",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic3_bean_factory_and_application_context_note.txt"})}),e.jsx(r,{note:"The ApplicationContext is the heart of the framework! It maintains a ConcurrentHashMap<Class<?>, Object> singleton pool. When Swadeep requests OrderService.class, it delivers the exact single cached instance! — Sukanta Hui"})]})}export{h as default};
