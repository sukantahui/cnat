import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
 * Topic 4: Broken equals() & hashCode() in Hash Collections - Silent Memory Leaks\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.profiling;\r
\r
import java.util.HashSet;\r
import java.util.Objects;\r
import java.util.Set;\r
\r
public class BrokenEqualsHashCodeLeaksDemo {\r
\r
    // Mutable Key Class (Dangerous for Hash collections!):\r
    public static class MutableStudentKey {\r
        public int studentId;\r
        public String center;\r
\r
        public MutableStudentKey(int id, String center) {\r
            this.studentId = id;\r
            this.center = center;\r
        }\r
\r
        @Override\r
        public boolean equals(Object o) {\r
            if (this == o) return true;\r
            if (o == null || getClass() != o.getClass()) return false;\r
            MutableStudentKey that = (MutableStudentKey) o;\r
            return studentId == that.studentId && Objects.equals(center, that.center);\r
        }\r
\r
        @Override\r
        public int hashCode() {\r
            return Objects.hash(studentId, center);\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: BROKEN HASH KEYS & MUTABLE LEAKS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Set<MutableStudentKey> activeStudents = new HashSet<>();\r
\r
        MutableStudentKey key = new MutableStudentKey(101, "Barrackpore");\r
        activeStudents.add(key);\r
        System.out.println("1. Added Student Key 101 (Barrackpore). Set Size: " + activeStudents.size());\r
\r
        // DANGEROUS MUTATION: Mutating field changes the hashCode calculation!\r
        key.center = "Naihati Center"; // Hash code has now changed!\r
\r
        System.out.println("\\n>>> 2. ATTEMPTING TO REMOVE MUTATED KEY FROM SET:");\r
        boolean removed = activeStudents.remove(key);\r
        System.out.println("  - Did remove() succeed? : " + removed + " (FAILED! ❌)");\r
        System.out.println("  - Current Set Size      : " + activeStudents.size() + " (Item is TRAPPED in memory forever!)");\r
\r
        System.out.println("\\n>>> GOLDEN RULE:");\r
        System.out.println("  - ALWAYS make Map keys and Set elements IMMUTABLE (Use Java Records or 'final' fields)!");\r
        System.out.println("==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 010_006: JVM Profiling, Heap Dumps & Memory Leak Diagnosis\r
Topic 4: Broken equals() & hashCode() Leaks\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WHY MUTABLE HASH KEYS LEAK:\r
   - 'HashSet' / 'HashMap' calculates bucket index based on 'key.hashCode()' upon insertion.\r
   - If the key is mutated, its hash code changes.\r
   - When 'set.remove(key)' or 'set.contains(key)' is called later, the JVM searches the WRONG bucket,\r
     failing to find the entry and leaving it permanently trapped in memory!\r
\r
2. DEFENSIVE ARCHITECTURE:\r
   - Use Java 'record' types for composite keys (immutable by default).\r
   - Ensure all key fields are marked 'final'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why does mutating a field of an object already stored in a HashSet cause a memory leak?",shortAnswer:"Because the object was placed into a specific hash bucket based on its initial hashCode. Mutating its fields changes its hashCode, so subsequent remove() or clear() calls search a different hash bucket, leaving the original entry permanently stuck in the set.",explanation:"One of the most elusive memory leak bugs in Java collections.",hint:"HashCode changes after mutation, so remove() looks in the wrong bucket.",level:"Intermediate",codeExample:"key.field = 'newVal'; set.remove(key); // Returns false, remains in memory!"},{question:"What language construct in modern Java is recommended for creating map keys to prevent mutable key memory leaks?",shortAnswer:"Java Records (e.g. record StudentKey(int id, String dept) {}), because records are inherently immutable with automatic compiler-generated equals() and hashCode() implementations.",explanation:"Guarantees key immutability and correct hash contracts.",hint:"Java Records (immutable by design).",level:"Beginner",codeExample:"record StudentKey(int id, String campus) {}"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 010_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"JVM Profiling & OOM"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Broken ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"equals() & hashCode()"})," in Hash Collections"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Silent memory leaks: why mutable keys or missing hash codes cause duplicate entries to accumulate endlessly in HashMaps and HashSets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"BrokenEqualsHashCodeLeaksDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Memory Profiling & OOM FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 010_006 Topic 4: Broken equals/hashCode Leaks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"010_006_topic4_broken_equals_hashcode_leaks_note.txt"})}),e.jsx(r,{note:"If you put a mutable object into a HashSet and then modify its field, its hash code changes! You can never find it, remove it, or clear it! It becomes a ghost entry trapped in memory forever! — Sukanta Hui"})]})}export{b as default};
