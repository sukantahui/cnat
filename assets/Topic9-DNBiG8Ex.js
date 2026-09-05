import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 008_004: Inter-Thread Communication & Producer-Consumer\r
 * Topic 9: The Golden Concurrency Rule: Always Enclose wait() in a 'while' Loop, Never 'if'\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.multithreading;\r
\r
public class WhileLoopWaitGoldenRuleDemo {\r
\r
    private static final Object VAULT_LOCK = new Object();\r
    private static int availableStock = 0; // Starts empty\r
\r
    // 1. INCORRECT (Vulnerable to Spurious Wakeup & Race Conditions):\r
    public static void unsafeConsumeIf() throws InterruptedException {\r
        synchronized (VAULT_LOCK) {\r
            // BUGGY IF STATEMENT:\r
            if (availableStock == 0) {\r
                System.out.println("  [Vulnerable Consumer] Stock is 0, waiting via 'if' check...");\r
                VAULT_LOCK.wait(); // DANGEROUS! If another consumer sneaks in first, this thread acts on stock=0!\r
            }\r
            availableStock--; // Stock becomes -1 (Corrupted!)\r
            System.out.println("  [Vulnerable Consumer] Consumed item! Remaining: " + availableStock);\r
        }\r
    }\r
\r
    // 2. CORRECT PATTERN (The Golden Concurrency Rule):\r
    public static void safeConsumeWhile(String consumerName) throws InterruptedException {\r
        synchronized (VAULT_LOCK) {\r
            // CANONICAL WHILE LOOP:\r
            while (availableStock == 0) {\r
                System.out.printf("  [%s] Stock is 0, waiting safely via 'while' loop...%n", consumerName);\r
                VAULT_LOCK.wait(); // Upon waking, the loop condition re-tests 'availableStock == 0'!\r
            }\r
            availableStock--;\r
            System.out.printf(">>> [%s] Successfully consumed item! Remaining Stock: %d%n", consumerName, availableStock);\r
        }\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: THE GOLDEN RULE: wait() IN 'while' LOOPS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Thread c1 = new Thread(() -> {\r
            try { safeConsumeWhile("Consumer-Swadeep"); } catch (InterruptedException ignored) {}\r
        });\r
\r
        Thread c2 = new Thread(() -> {\r
            try { safeConsumeWhile("Consumer-Tuhina"); } catch (InterruptedException ignored) {}\r
        });\r
\r
        c1.start();\r
        c2.start();\r
\r
        Thread.sleep(200); // Both consumers enter wait set\r
\r
        // Producer adds ONE single item to stock and broadcasts notifyAll:\r
        Thread producer = new Thread(() -> {\r
            synchronized (VAULT_LOCK) {\r
                System.out.println("\\n>>> [Producer] Produced 1 item in stock! Calling notifyAll()...");\r
                availableStock = 1;\r
                VAULT_LOCK.notifyAll(); // Wakes BOTH Swadeep and Tuhina!\r
            }\r
        });\r
\r
        producer.start();\r
\r
        c1.join();\r
        c2.join();\r
        producer.join();\r
\r
        System.out.println("\\n>>> WHAT HAPPENED WHEN notifyAll() WOKE BOTH CONSUMERS?");\r
        System.out.println("  1. Swadeep acquired the lock first, saw availableStock == 1, consumed it (stock becomes 0), and released lock.");\r
        System.out.println("  2. Tuhina acquired the lock second. Because of the 'while' loop, she RE-TESTED 'availableStock == 0' (now true!) and WENT BACK TO SLEEP safely without overdrawing!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 008_004: Inter-Thread Communication & Producer-Consumer\r
Topic 9: The Golden Rule (wait in while)\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE GOLDEN RULE OF WAIT():\r
   - ALWAYS: 'while (!condition) { lock.wait(); }'.\r
   - NEVER: 'if (!condition) { lock.wait(); }'.\r
   - Defends against:\r
     * Spurious wakeups.\r
     * State changes made by another thread before this thread acquires the lock.\r
   - Mandated by Effective Java & Java Concurrency in Practice.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why MUST 'wait()' always be called inside a 'while' loop rather than an 'if' statement?",shortAnswer:"1. 'Interleaved State Mutation': When 'notifyAll()' is called, multiple waiting threads wake up and compete for the lock sequentially. The first thread to acquire the lock consumes the available resource and resets the state (e.g. stock goes from 1 to 0). If the second thread used an 'if' statement, it would resume past the check and operate on an empty stock. A 'while' loop forces the second thread to re-verify the condition upon waking, seeing the stock is 0 and safely calling 'wait()' again. 2. 'Spurious Wakeups': If the OS kernel wakes the thread spontaneously without a signal, the 'while' loop re-tests the condition and immediately returns the thread to sleep.",explanation:"Standard Java Concurrency Golden Rule (Effective Java Item 81).",hint:"Re-tests condition after another thread consumed the resource or after a spurious wakeup.",level:"Intermediate",codeExample:"while (!condition) { lock.wait(); } // The Golden Rule of Inter-Thread Communication"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 008_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"The Golden Rule"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Golden Rule: ALWAYS Call ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"wait()"})," inside a ",e.jsx("code",{className:"text-sky-400 font-mono",children:"while"})," Loop"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Enforce concurrency safety: analyzing why condition re-evaluation loops (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"while (!condition) wait()"}),") prevent race condition corruptions when multiple threads wake up sequentially."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"WhileLoopWaitGoldenRuleDemo.java",highlightLines:[7,10,15,16,26,27,28,51,52,53]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"The Golden Rule FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 008_004 Topic 9: The Golden Rule (wait in while)",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"008_004_topic9_golden_rule_wait_in_while_note.txt"})}),e.jsx(a,{note:"If you only remember ONE rule from multithreading, make it this one: ALWAYS call wait() inside a WHILE loop, NEVER inside an IF block! 'while (!ready) lock.wait();' is the golden law of Java concurrency! — Sukanta Hui"})]})}export{f as default};
