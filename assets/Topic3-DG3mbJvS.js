import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as e}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 009_002: Built-in Functional Interfaces\r
 * Topic 3: java.util.function.Function<T, R>: R apply(T t) Data Mapping & Transformation\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.functional;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
import java.util.function.Function;\r
\r
class CourseEnrollment {\r
    final String studentName;\r
    final double rawFee;\r
\r
    public CourseEnrollment(String studentName, double rawFee) {\r
        this.studentName = studentName;\r
        this.rawFee = rawFee;\r
    }\r
}\r
\r
public class FunctionDataMappingDeepDiveDemo {\r
\r
    // Reusable generic transformer function:\r
    public static <T, R> List<R> mapList(List<T> source, Function<T, R> mapper) {\r
        List<R> results = new ArrayList<>();\r
        for (T item : source) {\r
            results.add(mapper.apply(item));\r
        }\r
        return results;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: Function<T, R> DATA MAPPING DEEP DIVE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<CourseEnrollment> enrollments = List.of(\r
                new CourseEnrollment("Swadeep Paul", 15000.0),\r
                new CourseEnrollment("Tuhina Das", 22000.0),\r
                new CourseEnrollment("Abhronila Das", 18000.0)\r
        );\r
\r
        // Transformation 1: CourseEnrollment -> String (Extract Student Names)\r
        Function<CourseEnrollment, String> nameExtractor = enrollment -> enrollment.studentName;\r
        List<String> studentNames = mapList(enrollments, nameExtractor);\r
        System.out.println(">>> 1. Extracted Student Names : " + studentNames);\r
\r
        // Transformation 2: CourseEnrollment -> Double (Calculate 18% GST on fees)\r
        Function<CourseEnrollment, Double> gstCalculator = enrollment -> enrollment.rawFee * 0.18;\r
        List<Double> gstAmounts = mapList(enrollments, gstCalculator);\r
        System.out.println(">>> 2. Calculated GST Amounts  : " + gstAmounts);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_002: Built-in Functional Interfaces\r
Topic 3: Function<T, R> Deep Dive\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FUNCTION<T, R>:\r
   - SAM: 'R apply(T t)'.\r
   - Input: T, Output: R.\r
   - Used for: Data transformation, DTO mapping, mathematical calculation.\r
   - Powers 'Stream.map(function)'.\r
   - Specializations: 'IntFunction', 'ToDoubleFunction', 'UnaryOperator'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is 'Function<T, R>' in Java and how does it power data transformations in collections and streams?",shortAnswer:"'Function<T, R>' represents a functional transformation that accepts one argument of type T and produces a result of type R ('R apply(T t)'). It is the underlying functional interface for 'Stream.map()', generic converters, and DTO-to-entity mappers. By passing functions as parameters, algorithms can transform collections of objects from one domain type into another without writing repetitive transformation loops.",explanation:"Core mapping interface in java.util.function.",hint:"Accepts input T and produces output R (T → R); powers Stream.map() transformations.",level:"Beginner",codeExample:'Function<String, Integer> lengthFunc = str → str.length(); Integer len = lengthFunc.apply("Barrackpore");'}];function T(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_002 · Topic 3"}),n.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Function<T, R>"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[n.jsx("code",{className:"text-emerald-400 font-mono",children:"Function<T, R>"}),": Data Mapping & Type Transformation Pipelines"]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct generic conversion pipelines: utilizing ",n.jsx("code",{className:"text-emerald-300 font-mono",children:"Function<T, R>"})," ",n.jsx("code",{className:"text-sky-300 font-mono",children:"R apply(T t)"})," methods to transform domain objects, calculate formulas, and power stream maps."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(t,{fileModule:o,title:"FunctionDataMappingDeepDiveDemo.java",highlightLines:[7,10,20,21,23,24,38,39,43,44]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(e,{title:"Function<T, R> FAQs",questions:i})}),n.jsx("section",{className:"space-y-4",children:n.jsx(r,{content:s,title:"Module 009_002 Topic 3: Function<T, R> Deep Dive",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_002_topic3_function_deep_dive_note.txt"})}),n.jsx(a,{note:"Function<T, R> is the bread and butter of data transformation! You feed it an input of type T (e.g. Student), and it transforms it into output R (e.g. InvoiceDTO or Fee amount)! — Sukanta Hui"})]})}export{T as default};
