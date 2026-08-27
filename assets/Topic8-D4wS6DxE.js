import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
 * Topic 8: Thread Creation Method 2: Implementing java.lang.Runnable Interface (Preferred)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
// 1. DOMAIN CLASS EXTENDS BASE ENTITY AND IMPLEMENTS RUNNABLE:\r
class BaseAccountingEntity {\r
    protected String companyId = "ACCO-TAX-2026";\r
}\r
\r
class InvoiceAuditTask extends BaseAccountingEntity implements Runnable {\r
\r
    private final String branch;\r
\r
    public InvoiceAuditTask(String branch) {\r
        this.branch = branch;\r
    }\r
\r
    // Implementing single abstract method of @FunctionalInterface Runnable:\r
    @Override\r
    public void run() {\r
        System.out.printf("[%s] Auditing invoices for %s (Entity Org: %s)...%n",\r
                Thread.currentThread().getName(), branch, companyId);\r
    }\r
}\r
\r
public class ImplementingRunnableInterfaceDemo {\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: CREATION METHOD 2: IMPLEMENTING Runnable - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. Instantiate the Task (Workload):\r
        InvoiceAuditTask auditTask = new InvoiceAuditTask("Barrackpore Central");\r
\r
        // 2. Pass Task to Thread Constructor (Execution Engine):\r
        Thread workerThread1 = new Thread(auditTask, "Auditor-Thread-1");\r
        Thread workerThread2 = new Thread(auditTask, "Auditor-Thread-2"); // Multiple threads sharing 1 task!\r
\r
        workerThread1.start();\r
        workerThread2.start();\r
\r
        workerThread1.join();\r
        workerThread2.join();\r
\r
        System.out.println("\\n>>> WHY IMPLEMENTING Runnable IS HIGHLY PREFERRED:");\r
        System.out.println("  1. Preserves Inheritance : The class can freely extend any base business class ('extends BaseAccountingEntity').");\r
        System.out.println("  2. Clean Decoupling      : Separates the WHAT (Runnable task) from the HOW (Thread execution engine).");\r
        System.out.println("  3. Thread Pool Ready     : Runnable instances can be directly submitted to ExecutorService / ThreadPoolExecutor!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_001: Thread Fundamentals, Lifecycle & Creation\r
Topic 8: Implementing Runnable Interface\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. CREATION METHOD 2 (Implementing Runnable):\r
   - '@FunctionalInterface Runnable' defines 'void run()'.\r
   - Instantiate task: 'Runnable task = new MyTask()'.\r
   - Pass to thread: 'new Thread(task, "Name").start()'.\r
   - Allows class inheritance ('extends BaseClass').\r
   - Directly compatible with 'ExecutorService' thread pools.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is implementing 'java.lang.Runnable' preferred over extending 'java.lang.Thread' in Java?",shortAnswer:"1. 'Preserves Class Inheritance': the domain class can still extend another base business class. 2. 'Separation of Concerns': cleanly decouples the business logic task ('Runnable') from the underlying execution mechanism ('Thread'). 3. 'Resource Sharing & Thread Pools': a single 'Runnable' task instance can be shared across multiple threads or submitted directly to an 'ExecutorService' thread pool for asynchronous worker execution.",explanation:"Standard design pattern and OOP best practice in Java.",hint:"Decouples task from thread, allows class inheritance, and enables ExecutorService thread pools.",level:"Intermediate",codeExample:'Thread t = new Thread(new MyRunnableTask(), "Worker"); t.start();'}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_001 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Creation Method 2"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Creation Method 2: Implementing ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.lang.Runnable"})," (Preferred Pattern)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Apply loose coupling principles: separating business task logic (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Runnable"}),") from execution engines (",e.jsx("code",{className:"text-sky-300 font-mono",children:"Thread"}),") while preserving class inheritance hierarchies."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:s,title:"ImplementingRunnableInterfaceDemo.java",highlightLines:[7,10,18,19,31,34,35,37,38]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Implementing Runnable FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 008_001 Topic 8: Implementing Runnable Interface",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_001_topic8_implementing_runnable_interface_note.txt"})}),e.jsx(t,{note:"Always prefer implementing Runnable over extending Thread! It cleanly separates the 'job' to be done from the 'worker' doing the job, and lets your class extend any base class you want! — Sukanta Hui"})]})}export{b as default};
