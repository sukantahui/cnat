import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 3: How HashSet Determines Uniqueness: hashCode() Lookup & equals() Verification\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashSet;\r
import java.util.Objects;\r
import java.util.Set;\r
\r
class StudentRegistration {\r
    private final int rollNumber;\r
    private final String name;\r
\r
    public StudentRegistration(int rollNumber, String name) {\r
        this.rollNumber = rollNumber;\r
        this.name = name;\r
    }\r
\r
    // STEP 1: hashCode() determines which hash bucket to inspect:\r
    @Override\r
    public int hashCode() {\r
        System.out.println("    [hashCode() INVOKED] for roll: " + rollNumber);\r
        return Objects.hash(rollNumber);\r
    }\r
\r
    // STEP 2: equals() is invoked ONLY if a bucket hash collision occurs:\r
    @Override\r
    public boolean equals(Object obj) {\r
        System.out.println("    [equals() INVOKED] comparing with roll: " + rollNumber);\r
        if (this == obj) return true;\r
        if (obj == null || getClass() != obj.getClass()) return false;\r
        StudentRegistration other = (StudentRegistration) obj;\r
        return this.rollNumber == other.rollNumber;\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return "Student[Roll=" + rollNumber + ", Name=" + name + "]";\r
    }\r
}\r
\r
public class HashSetUniquenessHashCodeEqualsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: HOW HashSet DETERMINES UNIQUENESS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Set<StudentRegistration> register = new HashSet<>();\r
\r
        StudentRegistration s1 = new StudentRegistration(101, "Swadeep Paul");\r
        StudentRegistration s2 = new StudentRegistration(102, "Tuhina Das");\r
        StudentRegistration s3 = new StudentRegistration(101, "Swadeep Paul (Duplicate Attempt)");\r
\r
        System.out.println(">>> 1. Adding 1st Student (Roll 101):");\r
        register.add(s1);\r
\r
        System.out.println("\\n>>> 2. Adding 2nd Student (Roll 102 - Distinct Hash):");\r
        register.add(s2);\r
\r
        System.out.println("\\n>>> 3. Adding 3rd Student (Roll 101 - Hash Match Triggers equals()):");\r
        boolean duplicateAdded = register.add(s3);\r
        System.out.println("  Was duplicate admitted? : " + duplicateAdded + " (Rejected!)");\r
        System.out.println("  Final Registry Size     : " + register.size());\r
\r
        System.out.println("\\n>>> THE 2-STEP UNIQUENESS VERIFICATION ALGORITHM:");\r
        System.out.println("  Step 1: Compute 'hash = key.hashCode()'. Locate bucket index '(n - 1) & hash'.");\r
        System.out.println("  Step 2: If bucket is empty -> insert immediately.");\r
        System.out.println("  Step 3: If bucket has node -> invoke 'equals()'. If equals returns true -> REJECT as duplicate!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 3: HashSet Uniqueness Algorithm\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. UNIQUENESS ALGORITHM:\r
   - Step 1: 'hashCode()' calculates target bucket.\r
   - Step 2: If bucket empty → insert.\r
   - Step 3: If bucket occupied → invoke 'equals()'.\r
   - If 'equals() == true' → rejected (duplicate).\r
   - If 'equals() == false' → inserted (collision handled).\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Describe the exact 2-step process used by 'HashSet' to determine if an incoming element is a duplicate.",shortAnswer:"1. 'Bucket Calculation (hashCode)': HashSet calls 'element.hashCode()' to compute the hash and identify the target bucket index. If the bucket is empty, the element is inserted immediately with zero collision. 2. 'Equality Verification (equals)': If the bucket already contains nodes with matching hash codes, HashSet calls 'existingElement.equals(newElement)'. If 'equals()' returns true, the element is rejected as a duplicate; if false, it is chained into the bucket.",explanation:"Foundational hash bucket insertion algorithm in Java Collections.",hint:"Step 1: hashCode() finds bucket. Step 2: equals() confirms if elements are identical.",level:"Intermediate",codeExample:"if (p.hash == hash && ((k = p.key) == key || (key != null && key.equals(k)))) // Duplicate!"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 3"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Uniqueness Verification"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["How HashSet Determines Uniqueness: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"hashCode()"})," & ",e.jsx("code",{className:"text-sky-400 font-mono",children:"equals()"})," Verification"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Trace hash bucket collisions: understanding the two-step verification workflow where ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"hashCode()"})," locates the bucket and ",e.jsx("code",{className:"text-sky-300 font-mono",children:"equals()"})," confirms uniqueness."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"HashSetUniquenessHashCodeEqualsDemo.java",highlightLines:[7,10,19,20,26,27,28,50,56]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Uniqueness Verification FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:i,title:"Module 007_003 Topic 3: HashSet Uniqueness Verification",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic3_hashset_uniqueness_note.txt"})}),e.jsx(s,{note:"If you override equals(), you MUST override hashCode()! If two objects are equal according to equals(), they must produce the exact same hashCode, otherwise HashSet will place them in different buckets and admit duplicates! — Sukanta Hui"})]})}export{x as default};
