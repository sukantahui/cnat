import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 012_004: Custom DI Framework\r
 * Topic 4: Circular Dependency Detection - Graph Cycle Algorithms\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.minispring;\r
\r
import java.util.Collections;\r
import java.util.HashSet;\r
import java.util.Set;\r
\r
public class CircularDependencyDetectionDemo {\r
\r
    public static class CircularDependencyException extends RuntimeException {\r
        public CircularDependencyException(String message) { super(message); }\r
    }\r
\r
    public static class DependencyResolver {\r
        private final Set<Class<?>> currentlyInCreation = Collections.synchronizedSet(new HashSet<>());\r
\r
        public void resolveBean(Class<?> clazz) {\r
            System.out.println("   [RESOLVER]: Attempting to initialize: " + clazz.getSimpleName());\r
\r
            if (!currentlyInCreation.add(clazz)) {\r
                // Already in set -> Cycle detected!\r
                throw new CircularDependencyException("FATAL: Circular dependency detected involving: " + clazz.getName() + "!");\r
            }\r
\r
            try {\r
                // Simulate recursive dependency resolution:\r
                if (clazz == ServiceA.class) {\r
                    resolveBean(ServiceB.class); // A depends on B\r
                } else if (clazz == ServiceB.class) {\r
                    resolveBean(ServiceA.class); // B depends on A -> CYCLE!\r
                }\r
            } finally {\r
                currentlyInCreation.remove(clazz);\r
            }\r
        }\r
    }\r
\r
    public static class ServiceA {}\r
    public static class ServiceB {}\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: CIRCULAR DEPENDENCY DETECTION - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        DependencyResolver resolver = new DependencyResolver();\r
\r
        try {\r
            resolver.resolveBean(ServiceA.class);\r
        } catch (CircularDependencyException ex) {\r
            System.err.println("Caught Expected Framework Error:\r
  " + ex.getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_004: Custom DI Framework\r
Topic 4: Circular Dependency Detection\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CYCLE DETECTION ALGORITHM:\r
   - Maintain 'Set<Class<?>> currentlyInCreation'.\r
   - Before instantiating bean, call 'add(clazz)'. If returns false → circular cycle!\r
   - In finally block, call 'remove(clazz)' once bean is fully initialized.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,c=[{question:"How does a 'currentlyInCreation' Set effectively detect circular dependencies in Dependency Injection containers?",shortAnswer:"Before resolving a bean's dependencies, the class is added to the Set. If a recursive dependency resolution attempts to add the same class again before the first creation completes, Set.add() returns false, immediately detecting the circular graph cycle.",explanation:"Graph cycle detection using depth-first search tracking.",hint:"Set.add() returning false signals that the class is already being constructed higher up the call stack.",level:"Intermediate",codeExample:"if (!inCreationSet.add(clazz)) throw new CircularDependencyException();"},{question:"How does Spring solve circular dependencies for setter/field injection using 3-level caching?",shortAnswer:"Spring exposes an un-populated early singleton object reference in a third-level cache (singletonFactories) before injecting its fields, allowing dependent beans to receive the early reference before full initialization completes.",explanation:"Spring's three-level cache architecture (DefaultSingletonBeanRegistry).",hint:"Exposes early un-initialized singleton reference in third-level cache.",level:"Advanced",codeExample:"singletonFactories.put(beanName, () → getEarlyBeanReference(beanName, mbd, bean));"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 3: Custom DI Framework"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Circular Dependency Detection: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Graph Cycle Algorithms"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preventing stack overflows: detecting circular dependency chains (A -> B -> A) using Set<Class<?>> initialization trackers and early reference caches."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:i,title:"CircularDependencyDetectionDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Custom DI Framework FAQs",questions:c})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 012_004 Topic 4: Circular Dependency Detection",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_004_topic4_circular_dependency_detection_note.txt"})}),e.jsx(a,{note:"What if Class A requires Class B, but Class B requires Class A? Without cycle detection, your framework will enter an infinite recursive loop and crash with StackOverflowError! We detect this using a 'currentlyInCreation' Set! — Sukanta Hui"})]})}export{y as default};
