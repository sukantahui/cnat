import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const a=`/**\r
 * Java Core Tutorial - Module 009_003: Method & Constructor References\r
 * Topic 6: Kind 4: Constructor References (ClassName::new)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.function.BiFunction;\r
import java.util.function.Function;\r
import java.util.function.Supplier;\r
\r
class StudentInvoice {\r
    final String studentName;\r
    final double amount;\r
\r
    // 1. Default No-Arg Constructor:\r
    public StudentInvoice() {\r
        this.studentName = "Anonymous Guest";\r
        this.amount = 0.0;\r
    }\r
\r
    // 2. Single-Arg Constructor:\r
    public StudentInvoice(String studentName) {\r
        this.studentName = studentName;\r
        this.amount = 5000.0; // Default registration fee\r
    }\r
\r
    // 3. Two-Arg Constructor:\r
    public StudentInvoice(String studentName, double amount) {\r
        this.studentName = studentName;\r
        this.amount = amount;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("StudentInvoice[name='%s', fee=₹%,.2f]", studentName, amount);\r
    }\r
}\r
\r
public class ConstructorReferenceDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: CONSTRUCTOR REFERENCES (ClassName::new) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. No-arg constructor binds to Supplier<T>:\r
        Supplier<StudentInvoice> defaultSupplier = StudentInvoice::new;\r
        System.out.println(">>> 1. No-arg (Supplier)    : " + defaultSupplier.get());\r
\r
        // 2. Single-arg constructor binds to Function<T, R>:\r
        Function<String, StudentInvoice> nameConstructor = StudentInvoice::new;\r
        System.out.println(">>> 2. Single-arg (Function): " + nameConstructor.apply("Swadeep Paul"));\r
\r
        // 3. Two-arg constructor binds to BiFunction<T, U, R>:\r
        BiFunction<String, Double, StudentInvoice> fullConstructor = StudentInvoice::new;\r
        System.out.println(">>> 3. Two-arg (BiFunction) : " + fullConstructor.apply("Tuhina Das", 18500.0));\r
\r
        // 4. Collection Factory Supplier (ArrayList::new):\r
        Supplier<List<String>> listFactory = ArrayList::new;\r
        List<String> dynamicList = listFactory.get();\r
        dynamicList.add("Barrackpore Hub");\r
        System.out.println("\\n>>> 4. ArrayList::new Factory : " + dynamicList);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_003: Method & Constructor References\r
Topic 6: Constructor References\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CONSTRUCTOR REFERENCES:\r
   - Syntax: 'ClassName::new'.\r
   - Automatically selects constructor matching SAM parameters:\r
     * 0 args → 'Supplier<T>' calls no-arg constructor.\r
     * 1 arg  → 'Function<T, R>' calls 1-arg constructor.\r
     * 2 args → 'BiFunction<T, U, R>' calls 2-arg constructor.\r
   - Used for factories: 'ArrayList::new', 'HashSet::new'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"How does the Java compiler determine which overloaded constructor to call when using a Constructor Reference ('ClassName::new')?",shortAnswer:"The compiler selects the matching constructor based on the parameter types and argument count of the target Functional Interface SAM. If the target is 'Supplier<T>' (0 args), the no-arg constructor is invoked. If the target is 'Function<A, T>' (1 arg), the single-arg constructor accepting type A is invoked. If the target is 'BiFunction<A, B, T>' (2 args), the two-arg constructor accepting types (A, B) is invoked.",explanation:"Overloaded constructor reference resolution mechanics in Java 8.",hint:"Selected automatically based on the parameter list of the target Functional Interface SAM (Supplier=0, Function=1, BiFunction=2).",level:"Intermediate",codeExample:"Supplier<User> s = User::new; Function<String, User> f = User::new;"}];function S(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_003 · Topic 6"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Constructor References"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Kind 4: Reference to a ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Constructor"})," (",t.jsx("code",{className:"text-sky-400 font-mono",children:"ClassName::new"}),")"]}),t.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Instantiate objects declaratively: exploring constructor reference resolution across ",t.jsx("code",{className:"text-emerald-300 font-mono",children:"Supplier"}),", ",t.jsx("code",{className:"text-sky-300 font-mono",children:"Function"}),", and ",t.jsx("code",{className:"text-purple-300 font-mono",children:"BiFunction"})," SAM parameter signatures."]})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:a,title:"ConstructorReferenceDemo.java",highlightLines:[7,8,9,10,39,40,43,44,47,48,51,52]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Constructor References FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 009_003 Topic 6: Constructor References",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_003_topic6_constructor_references_note.txt"})}),t.jsx(o,{note:"Constructor references are the ultimate factory shortcuts! Instead of writing '() → new ArrayList<>()', just write 'ArrayList::new'! Java inspects the constructor arguments and calls the right one automatically! — Sukanta Hui"})]})}export{S as default};
