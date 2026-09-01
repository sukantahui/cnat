import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const o=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 3: Extracting Values Safely - The .get() Anti-Pattern vs Safe Alternatives\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.NoSuchElementException;\r
import java.util.Optional;\r
\r
public class ExtractingValuesSafelyDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: EXTRACTING VALUES SAFELY - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Optional<String> emptyScholarship = Optional.empty();\r
\r
        // 1. THE ANTI-PATTERN: Calling .get() on an empty Optional crashes!\r
        System.out.println(">>> 1. The .get() Anti-Pattern:");\r
        try {\r
            String value = emptyScholarship.get(); // Throws NoSuchElementException!\r
            System.out.println("Value: " + value);\r
        } catch (NoSuchElementException ex) {\r
            System.err.println("   [CRASH]: java.util.NoSuchElementException: No value present!");\r
            System.out.println("   --> Calling .get() blindly defeats the entire safety purpose of Optional.");\r
        }\r
\r
        // 2. THE 4 SAFE EXTRACTION STRATEGIES:\r
        System.out.println("\\n>>> 2. The 4 Safe Extraction Strategies:");\r
\r
        // Strategy A: orElse(eagerDefault)\r
        String valA = emptyScholarship.orElse("General Merit (Default)");\r
        System.out.println("   A. orElse()      : " + valA);\r
\r
        // Strategy B: orElseGet(lazySupplier)\r
        String valB = emptyScholarship.orElseGet(() -> "Computed Fallback: " + System.currentTimeMillis());\r
        System.out.println("   B. orElseGet()   : " + valB);\r
\r
        // Strategy C: ifPresent(consumer)\r
        System.out.print("   C. ifPresent()   : ");\r
        emptyScholarship.ifPresent(s -> System.out.println("Found: " + s));\r
        System.out.println("(Nothing printed because Optional is empty!)");\r
\r
        // Strategy D: orElseThrow(customException)\r
        // emptyScholarship.orElseThrow(() -> new ScholarshipNotFoundException("No grant available"));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 3: Extracting Values Safely (.get() Anti-Pattern)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE 'OPTIONAL.GET()' TRAP:\r
   - 'optional.get()' throws 'NoSuchElementException: No value present' if empty.\r
   - Blindly calling '.get()' is just as hazardous as dereferencing a raw null pointer.\r
\r
2. THE 4 MODERN SAFE EXTRACTION METHODS:\r
   1. 'orElse(T other)': Fallback to eager constant.\r
   2. 'orElseGet(Supplier<? extends T> supplier)': Fallback to lazy computation.\r
   3. 'orElseThrow()': Throws NoSuchElementException with explicit intent (Java 10+).\r
   4. 'orElseThrow(Supplier<? extends X> exceptionSupplier)': Throws domain exception.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why is calling Optional.get() without a preceding isPresent() check considered a code smell?",shortAnswer:"Because it throws an unchecked NoSuchElementException at runtime if the Optional is empty, defeating the entire compile-time safety objective of using the Optional class.",explanation:"Modern IDEs (like IntelliJ) flag raw .get() calls as severe warnings.",hint:"Throws NoSuchElementException if empty, defeating Optional safety.",level:"Beginner",codeExample:"// BAD:\\nString s = opt.get();\\n// GOOD:\\nString s = opt.orElse('Default');"},{question:"What is the recommended alternative to optional.get() in Java 10+ when you explicitly want to throw an exception if absent?",shortAnswer:"Call optional.orElseThrow(), which clearly communicates the intent that absence is an exceptional state.",explanation:"orElseThrow() is preferred over get() because its name makes the risk explicit.",hint:"optional.orElseThrow()",level:"Beginner",codeExample:"User user = userRepository.findById(id).orElseThrow();"}];function g(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Extracting Values Safely: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Why optional.get() is an Anti-Pattern"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"The danger of raw unwrapping: why calling optional.get() recreates NullPointerExceptions as NoSuchElementException, and safe functional alternatives."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:o,title:"ExtractingValuesSafelyDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Optional & Null-Safe Programming FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:l,title:"Module 009_008 Topic 3: Extracting Values Safely",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic3_extracting_values_safely_note.txt"})}),e.jsx(a,{note:"Calling optional.get() without checking isPresent() is just replacing a NullPointerException with a NoSuchElementException! Never use .get() in production — always use orElse(), orElseGet(), or orElseThrow()! — Sukanta Hui"})]})}export{g as default};
