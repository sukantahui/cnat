import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 007_005: Map Implementations & HashMap Internals\r
 * Topic 15: The Mutable Key Hazard: How Mutating Keys Produces Unreachable "Lost Keys"\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashMap;\r
import java.util.Map;\r
import java.util.Objects;\r
\r
class MutableEmployeeKey {\r
    private String department; // MUTABLE KEY FIELD!\r
\r
    public MutableEmployeeKey(String department) { this.department = department; }\r
    public void setDepartment(String department) { this.department = department; }\r
\r
    @Override\r
    public int hashCode() { return Objects.hash(department); }\r
\r
    @Override\r
    public boolean equals(Object obj) {\r
        if (this == obj) return true;\r
        if (obj == null || getClass() != obj.getClass()) return false;\r
        MutableEmployeeKey other = (MutableEmployeeKey) obj;\r
        return Objects.equals(this.department, other.department);\r
    }\r
\r
    @Override\r
    public String toString() { return "Dept[" + department + "]"; }\r
}\r
\r
public class HashMapMutableKeyLostProblemDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: THE LOST KEY PROBLEM IN HashMap - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Map<MutableEmployeeKey, String> staffAllocation = new HashMap<>();\r
        MutableEmployeeKey key = new MutableEmployeeKey("Accounts-Barrackpore");\r
\r
        staffAllocation.put(key, "Swadeep Paul (Lead Accountant)");\r
\r
        System.out.println(">>> 1. Lookup with Original Key:");\r
        System.out.println("  get(key) : " + staffAllocation.get(key) + " (Successfully retrieved!)");\r
\r
        // DANGEROUS MUTATION: Modifying the department field AFTER insertion:\r
        key.setDepartment("Taxation-Naihati");\r
\r
        System.out.println("\\n>>> 2. Lookup AFTER Mutating Key Field:");\r
        System.out.println("  get(key)          : " + staffAllocation.get(key) + " (RETURNS NULL! KEY IS LOST!)");\r
        System.out.println("  containsKey(key)  : " + staffAllocation.containsKey(key) + " (Returns false!)");\r
        System.out.println("  Map Size          : " + staffAllocation.size() + " (Still contains 1 entry in memory!)");\r
\r
        System.out.println("\\n>>> WHY DID THE ENTRY BECOME UNREACHABLE?");\r
        System.out.println("  1. Original Hash Code computed for 'Accounts-Barrackpore' -> placed entry in Bucket 3.");\r
        System.out.println("  2. Mutated Hash Code computed for 'Taxation-Naihati' -> 'get()' looks in Bucket 11!");\r
        System.out.println("  3. Bucket 11 is empty, so 'get()' returns null.");\r
        System.out.println("  4. The entry in Bucket 3 cannot be removed or retrieved (Silent Heap Memory Leak!).");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_005: Map Implementations & HashMap Internals\r
Topic 15: Mutable Key Lost Problem\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOST KEY HAZARD:\r
   - Never use mutable objects as Map keys.\r
   - Mutating key fields changes 'hashCode()'.\r
   - 'get()' and 'containsKey()' look in the wrong bucket and return null/false.\r
   - Trapped entry causes silent heap memory leak.\r
   - Best practice: Use immutable objects (String, Integer, Records) as keys.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is the 'Lost Key' problem in a HashMap, and how does it create silent memory leaks?",shortAnswer:"The 'Lost Key' problem occurs when a mutable object is used as a HashMap key and its fields participating in 'hashCode()' are modified after insertion. When 'get(key)' or 'remove(key)' is called later, the newly computed hash code directs the search to a different bucket, returning 'null'. The original entry remains trapped in the old bucket indefinitely, consuming heap memory without any way to retrieve or clean it up.",explanation:"Classic production defect pattern and core Java interview scenario.",hint:"Key mutation alters hashCode causing lookups to inspect the wrong bucket; original entry becomes unreachable.",level:"Advanced",codeExample:'key.setDept("New"); map.get(key); // returns null! Entry is stuck in old bucket forever!'}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_005 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Lost Key Hazard"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Mutable Key Hazard: How Mutating Keys Produces Unreachable ",e.jsx("code",{className:"text-rose-400 font-mono",children:'"Lost Keys"'})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Examine dangerous enterprise defects: observing how mutating key fields after insertion strands entries in obsolete hash buckets, causing silent memory leaks and null lookups."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HashMapMutableKeyLostProblemDemo.java",highlightLines:[7,10,16,17,36,37,43,44,45]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Lost Key FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 007_005 Topic 15: Mutable Key Lost Problem",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_005_topic15_mutable_key_lost_problem_note.txt"})}),e.jsx(a,{note:"This is a classic senior Java interview question: 'What happens if you change a key's field after putting it in a HashMap?' The answer is: the key is LOST! Java looks in the new bucket and finds nothing, while the old entry sits in memory forever! Always use immutable keys! — Sukanta Hui"})]})}export{b as default};
