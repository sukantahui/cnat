import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 009_008: The Optional Class & Null-Safe Functional Programming\r
 * Topic 13: flatMap(Function) on Optional - Un-Nesting Optional Returning Methods\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.optional;\r
\r
import java.util.Optional;\r
\r
public class FlatMapFunctionOptionalDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 13: FLATMAP(FUNCTION) ON OPTIONAL - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        Student student = new Student("Swadeep Paul", Optional.of(new Address("Barrackpore")));\r
        Student studentNoAddress = new Student("Tuhina Das", Optional.empty());\r
\r
        // 1. THE MAP PROBLEM: Produces nested Optional<Optional<Address>>!\r
        Optional<Student> studentOpt = Optional.of(student);\r
        Optional<Optional<Address>> nested = studentOpt.map(Student::address);\r
        System.out.println("1. Using map() creates clunky nested: " + nested);\r
\r
        // 2. THE FLATMAP SOLUTION: Flattens to single Optional<Address>\r
        Optional<Address> flatAddress = studentOpt.flatMap(Student::address);\r
        System.out.println("2. Using flatMap() flattens cleanly: " + flatAddress);\r
\r
        // 3. Multi-level flatMap Chaining (Student -> Optional<Address> -> Optional<String> City):\r
        String city = studentOpt\r
            .flatMap(Student::address)\r
            .map(Address::city)\r
            .orElse("NO_CITY_REGISTERED");\r
        System.out.println("3. Extracted City via flatMap chain: " + city);\r
\r
        // 4. Missing address handled gracefully:\r
        String cityMissing = Optional.of(studentNoAddress)\r
            .flatMap(Student::address)\r
            .map(Address::city)\r
            .orElse("NO_CITY_REGISTERED");\r
        System.out.println("4. Missing Address City via chain  : " + cityMissing);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
\r
    record Student(String name, Optional<Address> address) {}\r
    record Address(String city) {}\r
}\r
`,l=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_008: The Optional Class & Null-Safe Functional Programming\r
Topic 13: flatMap(Function) on Optional\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. METHOD CONTRACT:\r
   - Signature: '<U> Optional<U> flatMap(Function<? super T, ? extends Optional<? extends U>> mapper)'.\r
   - Unlike 'map()', which wraps the function return value in an 'Optional', 'flatMap()' expects\r
     the function to RETURN an 'Optional<U>' directly, and does NOT add an extra layer of wrapping.\r
\r
2. MAP VS FLATMAP SUMMARY:\r
   -----------------------------------------------------------------------------\r
   METHOD     FUNCTION RETURN TYPE      RESULT TYPE\r
   -----------------------------------------------------------------------------\r
   map()      U                         Optional<U>\r
   map()      Optional<U>               Optional<Optional<U>> (Nested!)\r
   flatMap()  Optional<U>               Optional<U> (Cleanly flattened!)\r
   -----------------------------------------------------------------------------\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"When should you use Optional.flatMap() instead of Optional.map()?",shortAnswer:"Use flatMap() when the mapping function itself returns an Optional<U>. flatMap un-nests the result so you get Optional<U> instead of a cumbersome nested Optional<Optional<U>>.",explanation:"Analogous to flatMap in Streams.",hint:"Use flatMap when the transformation function already returns an Optional.",level:"Intermediate",codeExample:"userOpt.flatMap(User::getOptionalAddress).map(Address::getCity);"},{question:"What happens if flatMap's mapping function returns null instead of an Optional?",shortAnswer:"A NullPointerException is thrown. The contract of flatMap requires the mapper to return a non-null Optional (or Optional.empty()).",explanation:"Returning raw null from flatMap mapper violates the contract.",hint:"Throws NullPointerException if the mapping function returns null.",level:"Advanced",codeExample:"opt.flatMap(x -> null); // Throws NullPointerException!"}];function x(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_008 · Topic 13"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Optional & Null-Safety"})]}),t.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[t.jsx("code",{className:"text-emerald-400 font-mono",children:"flatMap(Function)"}),": Flattening Nested Optionals"]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Preventing Optional<Optional<T>> nesting: flattening methods that already return Optional into clean 1-level Optional chains."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(n,{fileModule:s,title:"FlatMapFunctionOptionalDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(e,{title:"Optional & Null-Safe Programming FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(a,{content:l,title:"Module 009_008 Topic 13: flatMap(Function) on Optional",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_008_topic13_flatmap_function_optional_note.txt"})}),t.jsx(r,{note:"Whenever a getter returns an Optional (e.g. getAddress() returns Optional<Address>), using map() gives you Optional<Optional<Address>>! Use flatMap() to flatten it into a clean Optional<Address>! — Sukanta Hui"})]})}export{x as default};
