import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const i=`/**\r
 * Java Core Tutorial - Module 007_004: Queue, Deque & PriorityQueue\r
 * Topic 4: java.util.PriorityQueue: Elements Ordered by Priority (Comparable vs Comparator)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.Comparator;\r
import java.util.PriorityQueue;\r
import java.util.Queue;\r
\r
class PatientEmergencyToken implements Comparable<PatientEmergencyToken> {\r
    private final String patientName;\r
    private final int severityLevel; // 1 (Critical ICU) to 5 (Routine)\r
\r
    public PatientEmergencyToken(String patientName, int severityLevel) {\r
        this.patientName = patientName;\r
        this.severityLevel = severityLevel;\r
    }\r
\r
    public String getPatientName() { return patientName; }\r
    public int getSeverityLevel() { return severityLevel; }\r
\r
    // Natural Ordering: Lower severity number = Higher emergency priority!\r
    @Override\r
    public int compareTo(PatientEmergencyToken other) {\r
        return Integer.compare(this.severityLevel, other.severityLevel);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("Patient[%-12s, Severity=%d]", patientName, severityLevel);\r
    }\r
}\r
\r
public class PriorityQueueNaturalVsCustomDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: PriorityQueue ORDERING & DISPATCHING - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // 1. NATURAL ORDERING (Min-Heap: lowest severity number first):\r
        Queue<PatientEmergencyToken> triageQueue = new PriorityQueue<>();\r
        triageQueue.offer(new PatientEmergencyToken("Debangshu", 4)); // Routine\r
        triageQueue.offer(new PatientEmergencyToken("Swadeep", 1));   // Critical ICU!\r
        triageQueue.offer(new PatientEmergencyToken("Tuhina", 2));    // Urgent\r
        triageQueue.offer(new PatientEmergencyToken("Abhronila", 1)); // Critical ICU!\r
\r
        System.out.println(">>> 1. Hospital Emergency Triage Dispatch (Lowest Severity Number First):");\r
        while (!triageQueue.isEmpty()) {\r
            System.out.println("  [DOCTOR DISPATCHED] -> " + triageQueue.poll());\r
        }\r
\r
        // 2. CUSTOM ORDERING (Alphabetical Patient Name):\r
        Queue<PatientEmergencyToken> nameQueue = new PriorityQueue<>(Comparator.comparing(PatientEmergencyToken::getPatientName));\r
        nameQueue.offer(new PatientEmergencyToken("Swadeep", 1));\r
        nameQueue.offer(new PatientEmergencyToken("Abhronila", 1));\r
        nameQueue.offer(new PatientEmergencyToken("Tuhina", 2));\r
\r
        System.out.println("\\n>>> 2. Alphabetical Name Dispatch (Custom Comparator):");\r
        while (!nameQueue.isEmpty()) {\r
            System.out.println("  [REGISTRATION DISPATCH] -> " + nameQueue.poll());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_004: Queue, Deque & PriorityQueue\r
Topic 4: PriorityQueue Ordering\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRIORITY QUEUE CONTRACT:\r
   - Ordered by priority (Min-Heap by default).\r
   - Natural order: implements 'Comparable<T>'.\r
   - Custom order: pass 'Comparator<T>'.\r
   - 'poll()' extracts minimum element in O(log n).\r
   - For-each iteration does NOT guarantee sorted order (use poll()).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How does 'java.util.PriorityQueue' order elements, and why does iterating with a for-each loop NOT print elements in sorted order?",shortAnswer:"'PriorityQueue' orders elements using a Binary Min-Heap (based on 'Comparable' or a 'Comparator'). The head of the queue is always the minimum (highest priority) element. However, iterating with a for-each loop traverses the internal heap array directly, which is partially ordered according to heap invariants, not globally sorted. Elements are extracted in true priority order ONLY when calling 'poll()' repeatedly.",explanation:"Classic interview trap on heap data structures in Java.",hint:"Backed by a Min-Heap; only repeated poll() extracts elements in exact sorted order, not for-each iteration.",level:"Intermediate",codeExample:"while(!pq.isEmpty()) { System.out.println(pq.poll()); } // Correct sorted extraction"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_004 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Priority Ordering"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.util.PriorityQueue"}),": Priority Ordering (",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Comparable"})," vs ",e.jsx("code",{className:"text-sky-400 font-mono",children:"Comparator"}),")"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Implement priority-based scheduling: constructing task dispatchers that order elements by natural severity (",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Comparable"}),") or custom criteria."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"PriorityQueueNaturalVsCustomDemo.java",highlightLines:[7,10,21,22,38,39,40,41,46,52]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"PriorityQueue Ordering FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 007_004 Topic 4: PriorityQueue Ordering",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_004_topic4_priorityqueue_ordering_note.txt"})}),e.jsx(a,{note:"Think of PriorityQueue as a hospital emergency ward! Even if a routine patient arrives first, an emergency patient will be jumped to the front of the queue automatically! That is Min-Heap prioritization! — Sukanta Hui"})]})}export{h as default};
