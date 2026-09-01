import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const l=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 10: Thread Creation Method 4: Callable<V>, Return Values & Checked Exceptions\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
import java.util.concurrent.Callable;\r
import java.util.concurrent.FutureTask;\r
\r
// 1. IMPLEMENTING java.util.concurrent.Callable<V>:\r
class TaxComputationCallable implements Callable<Double> {\r
\r
    private final double annualRevenue;\r
\r
    public TaxComputationCallable(double annualRevenue) {\r
        this.annualRevenue = annualRevenue;\r
    }\r
\r
    // Callable method returns generic type <V> AND declares 'throws Exception':\r
    @Override\r
    public Double call() throws Exception {\r
        System.out.printf("[%s] Calculating GST for annual revenue ₹%,.2f...%n",\r
                Thread.currentThread().getName(), annualRevenue);\r
\r
        if (annualRevenue < 0) {\r
            throw new IllegalArgumentException("Revenue cannot be negative!");\r
        }\r
\r
        Thread.sleep(400); // Simulate intense computation\r
        return annualRevenue * 0.18; // 18% GST calculation returned!\r
    }\r
}\r
\r
public class CallableAndFutureTaskDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: CREATION METHOD 4: Callable<V> & FutureTask - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Create Callable Task:\r
        Callable<Double> taxTask = new TaxComputationCallable(2500000.0);\r
\r
        // 2. Wrap Callable in FutureTask (implements both Runnable and Future):\r
        FutureTask<Double> futureTask = new FutureTask<>(taxTask);\r
\r
        // 3. Pass FutureTask to Thread:\r
        Thread thread = new Thread(futureTask, "Tax-Engine-Thread");\r
        thread.start();\r
\r
        System.out.println(">>> Main thread is free to do other work while Tax Engine computes...");\r
\r
        // 4. Block and retrieve result via futureTask.get():\r
        Double gstAmount = futureTask.get(); // Waits for thread to finish and returns calculated value!\r
\r
        System.out.printf("\\n>>> Tax Computation Result: ₹%,.2f%n", gstAmount);\r
\r
        System.out.println("\\n>>> Runnable vs Callable<V> COMPARISON:");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
        System.out.println("| Feature           | java.lang.Runnable        | java.util.concurrent.Callable<V>");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
        System.out.println("| Method Name       | void run()                | V call() throws Exception |");\r
        System.out.println("| Return Value      | NO (void return)          | YES (Returns generic V)   |");\r
        System.out.println("| Checked Exception | NO (Cannot throw checked) | YES (Can throw Exception) |");\r
        System.out.println("| Added in Java     | Java 1.0 (Core)           | Java 5.0 (JSR-166)        |");\r
        System.out.println("+-------------------+---------------------------+---------------------------+");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 10: Callable<V> & FutureTask\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATION METHOD 4 (Callable & FutureTask):\r
   - 'Callable<V>' defines 'V call() throws Exception'.\r
   - Returns a typed value upon task completion.\r
   - Can throw checked exceptions.\r
   - Wrap in 'FutureTask<V>' to run via 'new Thread(futureTask).start()'.\r
   - Call 'futureTask.get()' to block and retrieve calculated result.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What are the two major advantages of 'java.util.concurrent.Callable<V>' over 'java.lang.Runnable'?",shortAnswer:"1. 'Return Value': 'Callable<V>' defines 'V call()' which returns a generic result value upon task completion, whereas 'Runnable.run()' returns 'void'. 2. 'Checked Exceptions': 'Callable.call()' declares 'throws Exception', allowing tasks to propagate checked exceptions directly to the caller (which are wrapped in 'ExecutionException' upon calling 'future.get()'), whereas 'Runnable.run()' cannot throw checked exceptions.",explanation:"Core enhancement introduced in Java 5 JSR-166.",hint:"Callable returns a generic value (V) and can throw checked exceptions.",level:"Intermediate",codeExample:"Callable<Integer> c = () → 42; FutureTask<Integer> ft = new FutureTask<>(c); new Thread(ft).start();"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 10"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Callable & FutureTask"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Creation Method 4: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Callable<V>"}),", Return Values & Checked Exceptions"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Overcome ",e.jsx("code",{className:"text-rose-300 font-mono",children:"Runnable"})," limitations: returning typed values and propagating checked exceptions across asynchronous threads using ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Callable<V>"})," and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"FutureTask"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:l,title:"CallableAndFutureTaskDemo.java",highlightLines:[7,10,18,19,36,37,40,41,46,47]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Callable & FutureTask FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:o,title:"Module 008_001 Topic 10: Callable & FutureTask",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic10_callable_and_futuretask_note.txt"})}),e.jsx(r,{note:"If your background thread needs to return an answer (like calculating total taxes or loading data from a database), use Callable instead of Runnable! Callable returns a value and can throw checked exceptions! — Sukanta Hui"})]})}export{b as default};
