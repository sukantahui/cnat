import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const s=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 5: The Mutability Hazard: Why Elements Placed in HashSet MUST Have Immutable Hash Fields\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashSet;\r
import java.util.Objects;\r
import java.util.Set;\r
\r
class MutableStudentKey {\r
    private int id; // MUTABLE FIELD!\r
    private String name;\r
\r
    public MutableStudentKey(int id, String name) {\r
        this.id = id;\r
        this.name = name;\r
    }\r
\r
    public void setId(int id) { this.id = id; } // DANGEROUS MUTATOR!\r
\r
    @Override\r
    public int hashCode() { return Objects.hash(id); }\r
\r
    @Override\r
    public boolean equals(Object obj) {\r
        if (this == obj) return true;\r
        if (obj == null || getClass() != obj.getClass()) return false;\r
        MutableStudentKey other = (MutableStudentKey) obj;\r
        return this.id == other.id;\r
    }\r
\r
    @Override\r
    public String toString() { return "Student[id=" + id + ", name=" + name + "]"; }\r
}\r
\r
public class HashSetElementMutabilityHazardDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: MUTABILITY HAZARD IN HASH-BASED SETS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Set<MutableStudentKey> studentSet = new HashSet<>();\r
        MutableStudentKey student = new MutableStudentKey(101, "Swadeep Paul");\r
\r
        studentSet.add(student);\r
        System.out.println(">>> 1. Added student with ID 101:");\r
        System.out.println("  Contains student? : " + studentSet.contains(student) + " (Found in bucket for 101)");\r
\r
        // DANGEROUS MUTATION: Mutating the key AFTER storing it in the Set:\r
        student.setId(999);\r
        System.out.println("\\n>>> 2. Mutated Student ID from 101 -> 999:");\r
        System.out.println("  Contains student? : " + studentSet.contains(student) + " (LOST IN THE SET!)");\r
        System.out.println("  Set size          : " + studentSet.size() + " (Still contains 1 element, but unreachable!)");\r
\r
        System.out.println("\\n>>> WHY DID THE ELEMENT DISAPPEAR?");\r
        System.out.println("  1. When added, hashCode was calculated using id=101 -> placed in Bucket A.");\r
        System.out.println("  2. When id was mutated to 999, contains() recalculates hashCode using id=999 -> looks in Bucket B!");\r
        System.out.println("  3. Bucket B is EMPTY! The element is trapped in Bucket A forever (Memory Leak & Unreachable Object)!");\r
        System.out.println("  4. GOLDEN RULE: Fields used in equals/hashCode MUST be declared 'final' and immutable!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 5: Mutability Hazard in HashSets\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MUTABILITY HAZARD:\r
   - Never mutate fields used in 'hashCode()' or 'equals()'.\r
   - Mutating hash causes 'contains()' to look in the wrong bucket.\r
   - Object becomes trapped and unremovable (Memory Leak).\r
   - Solution: Declare all hash fields as 'final' (Immutable).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"What catastrophic bug occurs if an object's fields used in 'hashCode()' are mutated after the object is inserted into a 'HashSet'?",shortAnswer:"The object becomes 'lost' (unreachable) inside the HashSet. When inserted, the object is placed into a bucket determined by its original hash code. When mutated, its new hash code points to a completely different bucket. Subsequent calls to 'contains(obj)' or 'remove(obj)' look in the new (wrong) bucket and return 'false', causing the element to be permanently trapped in the old bucket, creating a memory leak and phantom state.",explanation:"Effective Java Item 11 & Item 17: Minimize mutability.",hint:"The mutated hash points to a different bucket, making the object unfindable while still occupying memory.",level:"Advanced",codeExample:"student.setId(999); set.contains(student); // returns FALSE! Object is lost!"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Mutability Hazard"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["The Mutability Hazard: Why Elements Placed in HashSet ",e.jsx("code",{className:"text-rose-400 font-mono",children:"MUST"})," Be Immutable"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Examine dangerous memory leaks: observing how mutating key fields after insertion traps objects in obsolete hash buckets, making them unfindable and unremovable."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"HashSetElementMutabilityHazardDemo.java",highlightLines:[7,10,16,17,36,37,42,43,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Mutability Hazard FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 007_003 Topic 5: Mutability Hazard in HashSets",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic5_mutability_hazard_note.txt"})}),e.jsx(r,{note:"Never use a mutable object as a Set element or Map key! If someone changes the student ID later, the hash code changes, and Java will look in the wrong bucket, making your object completely lost inside memory! Always make key fields final! — Sukanta Hui"})]})}export{S as default};
