import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const i=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 17: Optional Anti-Patterns - Fields, Parameters & Collections Misuse\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.io.Serializable;\r
import java.util.Optional;\r
\r
public class OptionalAntiPatternsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 17: OPTIONAL ANTI-PATTERNS - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. ANTI-PATTERN #1: Optional as a Class Field");\r
        System.out.println("    - java.util.Optional does NOT implement java.io.Serializable!");\r
        System.out.println("    - If an entity or DTO with an Optional field is serialized (e.g. Redis, RMI, Session), it throws NotSerializableException!");\r
        System.out.println("    - Correct Pattern: Store nullable field, return Optional from the getter!\\n");\r
\r
        System.out.println(">>> 2. ANTI-PATTERN #2: Optional as a Method Parameter");\r
        System.out.println("    - Anti-pattern: void register(String name, Optional<String> center)");\r
        System.out.println("    - Forces callers to write: register('Swadeep', Optional.of('Barrackpore')) or register('Tuhina', Optional.empty())");\r
        System.out.println("    - Worse: Callers might pass register('Swadeep', null), causing a NullPointerException inside the method!");\r
        System.out.println("    - Correct Pattern: Use method overloading! (register(name) and register(name, center))\\n");\r
\r
        System.out.println(">>> 3. ANTI-PATTERN #3: Optional in Collections (List<Optional<T>>)");\r
        System.out.println("    - Storing Optional inside Collections creates 2 layers of absence checks (empty collection vs empty optional).");\r
        System.out.println("    - Correct Pattern: Filter out absent values before storing in collection!");\r
        System.out.println("==========================================================================");\r
    }\r
\r
    // Clean Domain Entity Pattern:\r
    static class CleanStudentEntity implements Serializable {\r
        private String name;\r
        private String optionalDiscountCode; // Store as plain nullable String for serialization\r
\r
        public CleanStudentEntity(String name, String discountCode) {\r
            this.name = name;\r
            this.optionalDiscountCode = discountCode;\r
        }\r
\r
        public String getName() { return name; }\r
\r
        // Getter returns Optional for safe consumption!\r
        public Optional<String> getDiscountCode() {\r
            return Optional.ofNullable(optionalDiscountCode);\r
        }\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 17: Optional Anti-Patterns\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ANTI-PATTERN #1: OPTIONAL AS CLASS FIELD:\r
   - 'Optional' is NOT 'Serializable'.\r
   - Adds 16-24 bytes of object header overhead per field on heap.\r
   - Solution: Store plain nullable field, wrap in getter: 'return Optional.ofNullable(field)'.\r
\r
2. ANTI-PATTERN #2: OPTIONAL AS METHOD PARAMETER:\r
   - Forces awkward syntax on callers ('Optional.of("val")').\r
   - Does not prevent callers from passing raw 'null'.\r
   - Solution: Use method overloading (e.g. 'search(query)' and 'search(query, filter)').\r
\r
3. ANTI-PATTERN #3: OPTIONAL AS MAP KEY OR VALUE:\r
   - 'Map<String, Optional<User>>' is redundant and confusing.\r
   - Solution: Absent map entries represent absence naturally via 'map.get(key) == null'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:"Why is declaring a field of type Optional<String> in a domain entity considered an anti-pattern?",shortAnswer:"1. java.util.Optional does not implement java.io.Serializable, causing serialization frameworks to fail. 2. It introduces unnecessary object wrapper memory overhead on the heap.",explanation:"Store plain nullable fields and return Optional.ofNullable(field) from the getter instead.",hint:"Not Serializable and wastes heap memory wrapper overhead.",level:"Advanced",codeExample:"// BAD: private Optional<String> code;\\n// GOOD: private String code; public Optional<String> getCode() { return Optional.ofNullable(code); }"},{question:"Why should you avoid using Optional as a method parameter?",shortAnswer:"It creates clumsy caller boilerplate (requiring callers to write Optional.of(val)) and fails to prevent null pointers if a caller accidentally passes null instead of Optional.empty(). Use method overloading instead.",explanation:"Overloaded methods provide cleaner API ergonomics.",hint:"Forces callers to wrap arguments in Optional and does not protect against raw null parameters.",level:"Intermediate",codeExample:"// BAD: void find(String name, Optional<Integer> age)\\n// GOOD: void find(String name) and void find(String name, int age)"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 17"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Anti-Patterns: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"NEVER Use Optional in Fields, Parameters or Collections"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Avoiding common misuses: non-serializability of Optional, doubling method signatures with Optional parameters, and Map<K, Optional<V>> overhead."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"OptionalAntiPatternsDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 009_008 Topic 17: Optional Anti-Patterns",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic17_optional_anti_patterns_note.txt"})}),e.jsx(r,{note:"Never use Optional<T> as a class field or a method parameter! Optional does NOT implement Serializable (so your session or JPA entity will crash), and passing Optional as a parameter forces callers to type Optional.of(...) for no reason! Use method overloading instead! — Sukanta Hui"})]})}export{S as default};
