import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const o=`/**\r
 * Java Core Tutorial - Module 009_007: Parallel Streams & Performance Considerations\r
 * Topic 3: The Work-Stealing Algorithm in ForkJoinPool\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.parallel;\r
\r
import java.util.concurrent.ForkJoinPool;\r
import java.util.concurrent.RecursiveTask;\r
\r
public class WorkStealingAlgorithmDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: WORK-STEALING ALGORITHM - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> HOW WORK-STEALING PREVENTS IDLE CPU CORES:");\r
        System.out.println("  1. Each worker thread maintains its own private Double-Ended Queue (Deque).");\r
        System.out.println("  2. The owning thread pushes and pops sub-tasks from the HEAD (LIFO order - cache friendly).");\r
        System.out.println("  3. When an idle thread runs out of work, it becomes a 'Thief'.");\r
        System.out.println("  4. The Thief STEALS tasks from the TAIL of another busy thread's Deque (FIFO order).");\r
        System.out.println("  5. Result: Minimal lock contention and automatic dynamic load balancing!\\n");\r
\r
        int[] array = new int[10_000];\r
        for (int i = 0; i < array.length; i++) array[i] = 1;\r
\r
        ForkJoinPool pool = ForkJoinPool.commonPool();\r
        SumTask rootTask = new SumTask(array, 0, array.length);\r
        int totalSum = pool.invoke(rootTask);\r
\r
        System.out.println(">>> ForkJoin Recursive Sum computed: " + totalSum);\r
        System.out.println("==========================================================================");\r
    }\r
\r
    static class SumTask extends RecursiveTask<Integer> {\r
        private static final int THRESHOLD = 1000;\r
        private final int[] arr;\r
        private final int start, end;\r
\r
        public SumTask(int[] arr, int start, int end) {\r
            this.arr = arr;\r
            this.start = start;\r
            this.end = end;\r
        }\r
\r
        @Override\r
        protected Integer compute() {\r
            if (end - start <= THRESHOLD) {\r
                int sum = 0;\r
                for (int i = start; i < end; i++) sum += arr[i];\r
                return sum;\r
            } else {\r
                int mid = start + (end - start) / 2;\r
                SumTask left = new SumTask(arr, start, mid);\r
                SumTask right = new SumTask(arr, mid, end);\r
                left.fork(); // Async submit\r
                return right.compute() + left.join(); // Compute right synchronously & join left\r
            }\r
        }\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 009_007: Parallel Streams & Performance Considerations\r
Topic 3: The Work-Stealing Algorithm\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WORK-STEALING DEQUE ARCHITECTURE:\r
   - Each worker thread owns a double-ended queue (Deque).\r
   - Head access (Owner): Pushes new subtasks and pops tasks in LIFO order (Last-In, First-Out).\r
     LIFO maximizes CPU cache warmth on recent subproblems.\r
   - Tail access (Thief): Idle worker threads steal from the TAIL in FIFO order (First-In, First-Out).\r
     FIFO steals the largest available chunks of work.\r
\r
2. CONTENTION REDUCTION:\r
   - Because the owner works at the Head and thieves steal from the Tail, lock synchronization\r
     and thread contention are minimized.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why do worker threads steal tasks from the TAIL of another thread's deque rather than the HEAD?",shortAnswer:"1. It minimizes thread contention with the owner thread (which operates at the Head). 2. Tasks near the Tail represent larger, coarser-grained subtrees created earlier in the recursion, so stealing them provides more substantial work chunks.",explanation:"Stealing large chunks reduces the total number of steals needed.",hint:"Reduces lock contention with owner and steals larger chunks of work.",level:"Advanced",codeExample:"Owner operates at Head (LIFO); Stealers take from Tail (FIFO)."},{question:"What is the primary benefit of the work-stealing algorithm over fixed task distribution?",shortAnswer:"It provides dynamic load balancing, ensuring that no CPU cores sit idle when different tasks take unequal amounts of time to complete.",explanation:"Fixed partitioning fails when tasks have variable execution times.",hint:"Dynamic load balancing prevents idle CPU cores.",level:"Intermediate",codeExample:"ForkJoinPool worker automatically steals tasks when its local queue is empty."}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 009_007 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Parallel Streams & Performance"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Understanding the ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Work-Stealing Algorithm"})," in ForkJoinPool"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Deconstructing dynamic load balancing: double-ended work queues (Deques), LIFO thread execution, and FIFO work stealing."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:o,title:"WorkStealingAlgorithmDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Parallel Streams FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 009_007 Topic 3: Work-Stealing Algorithm",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"009_007_topic3_work_stealing_algorithm_note.txt"})}),e.jsx(a,{note:"Work stealing prevents CPU cores from sitting idle: if Thread A finishes its assigned tasks early while Thread B is overloaded, Thread A reaches into the tail of Thread B's queue and steals work to keep all cores at 100% efficiency! — Sukanta Hui"})]})}export{x as default};
