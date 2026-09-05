import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as o}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const a=`/**\r
 * Java Core Tutorial - Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
 * Topic 8: Stubbing Method Behavior - when().thenReturn() & doThrow()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.testing;\r
\r
public class StubbingMethodsWhenThenReturnDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: STUBBING METHOD BEHAVIOR - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. BASIC STUBBING WITH when().thenReturn():");\r
        System.out.println("  when(studentRepo.findById(101))");\r
        System.out.println("      .thenReturn(Optional.of(new Student("Swadeep Paul", "Barrackpore")));\\n");\r
\r
        System.out.println(">>> 2. STUBBING CONSECUTIVE CALLS:");\r
        System.out.println("  when(tokenService.generateToken())");\r
        System.out.println("      .thenReturn("token-1")");\r
        System.out.println("      .thenReturn("token-2");\\n");\r
\r
        System.out.println(">>> 3. STUBBING EXCEPTIONS:");\r
        System.out.println("  when(paymentGateway.charge(anyDouble()))");\r
        System.out.println("      .thenThrow(new PaymentFailedException("Insufficient Funds"));\\n");\r
\r
        System.out.println(">>> 4. VOID METHODS STUBBING:");\r
        System.out.println("  doThrow(new RuntimeException("Disk Full"))");\r
        System.out.println("      .when(fileLogger).log(anyString());");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_006: JUnit 5, Mockito, Clean Code & Maven\r
Topic 8: Stubbing Method Behavior\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. STUBBING SYNTAX PATTERNS:\r
   - 'when(mock.method()).thenReturn(val)'\r
   - 'when(mock.method()).thenThrow(new Ex())'\r
   - 'doThrow(new Ex()).when(mock).voidMethod()'\r
   - 'any()', 'anyString()', 'anyInt()', 'eq(value)' matchers.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why does Mockito require doThrow().when(mock).method() for void methods instead of when(mock.voidMethod())?",shortAnswer:"Because void methods return nothing, so placing mock.voidMethod() inside when(...) is a Java compiler syntax error. The doThrow().when() syntax accommodates void method invocation.",explanation:"Java compiler limitation for void return types.",hint:"Void methods return nothing, making when(voidMethod()) illegal Java syntax.",level:"Intermediate",codeExample:"doThrow(new RuntimeException()).when(mock).sendEmail();"},{question:"What is the rule when using Mockito argument matchers (like anyString() or eq())?",shortAnswer:"If you use an argument matcher for one argument in a method call, ALL arguments for that method invocation must use argument matchers (using eq() for exact constants).",explanation:"Mockito argument matcher consistency rule.",hint:"Either all arguments are matchers or all are exact values.",level:"Intermediate",codeExample:'when(service.process(eq("USER"), anyInt())).thenReturn(true);'}];function w(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_006 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JUnit 5, Mockito & Clean Code"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Stubbing Methods: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"when().thenReturn() & doThrow()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Programming mock behaviors: defining return values with Mockito.when(), simulating exceptions with doThrow(), and configuring void methods."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:a,title:"StubbingMethodsWhenThenReturnDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Testing & Maven FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(o,{content:i,title:"Module 012_006 Topic 8: Stubbing Methods (when, thenReturn, doThrow)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_006_topic8_stubbing_methods_when_then_return_note.txt"})}),e.jsx(r,{note:"Stubbing allows you to simulate any scenario in seconds! Use when(mock.method()).thenReturn() for standard return values, and doThrow(new SQLException()).when(mock).method() to verify how your code handles catastrophic database errors! — Sukanta Hui"})]})}export{w as default};
