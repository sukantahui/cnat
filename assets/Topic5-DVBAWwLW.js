import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 5: Reflection Injection - Field & Constructor Wiring\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import java.lang.reflect.Field;\r
import java.util.HashMap;\r
import java.util.Map;\r
\r
public class FieldAndConstructorReflectionInjectionDemo {\r
\r
    public static class MiniInjector {\r
        private final Map<Class<?>, Object> beanMap = new HashMap<>();\r
\r
        public void register(Object bean) {\r
            beanMap.put(bean.getClass(), bean);\r
        }\r
\r
        public void injectDependencies(Object target) throws Exception {\r
            Class<?> clazz = target.getClass();\r
            for (Field field : clazz.getDeclaredFields()) {\r
                if (field.isAnnotationPresent(CustomFrameworkAnnotationsDemo.Autowired.class)) {\r
                    Class<?> dependencyType = field.getType();\r
                    Object dependency = beanMap.get(dependencyType);\r
\r
                    if (dependency == null) {\r
                        throw new IllegalStateException("Unsatisfied dependency of type: " + dependencyType.getName());\r
                    }\r
\r
                    field.setAccessible(true); // Allow setting private field!\r
                    field.set(target, dependency);\r
                    System.out.println("   [INJECTED]: " + dependencyType.getSimpleName() + " into " + clazz.getSimpleName() + "." + field.getName());\r
                }\r
            }\r
        }\r
    }\r
\r
    public static class UserRepository {\r
        public String findUser(long id) { return "Swadeep Paul (Barrackpore)"; }\r
    }\r
\r
    public static class UserService {\r
        @CustomFrameworkAnnotationsDemo.Autowired\r
        private UserRepository userRepository;\r
\r
        public void printUser(long id) {\r
            System.out.println("User Result: " + userRepository.findUser(id));\r
        }\r
    }\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: FIELD & CONSTRUCTOR REFLECTION INJECTION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        MiniInjector injector = new MiniInjector();\r
        UserRepository repo = new UserRepository();\r
        UserService service = new UserService();\r
\r
        injector.register(repo);\r
        injector.injectDependencies(service);\r
\r
        System.out.println("\r
Testing Injected Service:");\r
        service.printUser(101L);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 5: Field & Constructor Reflection Injection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FIELD INJECTION ALGORITHM:\r
   - Iterate over 'clazz.getDeclaredFields()'.\r
   - Check 'field.isAnnotationPresent(Autowired.class)'.\r
   - 'field.setAccessible(true)' -> 'field.set(targetInstance, dependencyInstance)'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,a=[{question:"Why is constructor injection generally considered superior to field injection in enterprise architecture?",shortAnswer:"Constructor injection ensures that dependencies cannot be null, allows immutable final fields, makes classes testable without reflection frameworks in plain unit tests, and fails immediately at compile/startup time if a dependency is missing.",explanation:"Modern Spring best practice recommendation.",hint:"Enables immutable final fields and easy instantiation in unit tests without reflection.",level:"Intermediate",codeExample:"public UserService(UserRepository repo) { this.repo = repo; }"},{question:"What does field.setAccessible(true) do under the hood?",shortAnswer:"It suppresses Java language access control checks for that specific Field object, enabling the framework to inspect and mutate private/protected fields at runtime.",explanation:"Java reflection accessibility override.",hint:"Suppresses JVM access control checks on private members.",level:"Beginner",codeExample:"field.setAccessible(true);"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Reflection Injection: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Field & Constructor Wiring"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Automated dependency resolution: scanning @Autowired fields and constructors, calling field.setAccessible(true), and wiring bean instances."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"FieldAndConstructorReflectionInjectionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Custom DI Framework FAQs",questions:a})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 012_004 Topic 5: Field & Constructor Reflection Injection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic5_field_and_constructor_reflection_injection_note.txt"})}),e.jsx(i,{note:"Notice field.setAccessible(true)! Even though fields are marked private, our DI engine can inject dependencies directly through reflection without requiring public setters! — Sukanta Hui"})]})}export{b as default};
