import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 007_003: Set Implementations & TreeSet Internals\r
 * Topic 11: TreeSet Does NOT Use equals/hashCode: compareTo() / compare() == 0 Dictates Uniqueness\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.HashSet;\r
import java.util.Set;\r
import java.util.TreeSet;\r
\r
class StudentFeeAccount implements Comparable<StudentFeeAccount> {\r
    private final int studentId;\r
    private final String name;\r
    private final double feeAmount;\r
\r
    public StudentFeeAccount(int studentId, String name, double feeAmount) {\r
        this.studentId = studentId;\r
        this.name = name;\r
        this.feeAmount = feeAmount;\r
    }\r
\r
    // equals() compares ONLY studentId:\r
    @Override\r
    public boolean equals(Object obj) {\r
        if (this == obj) return true;\r
        if (obj == null || getClass() != obj.getClass()) return false;\r
        StudentFeeAccount other = (StudentFeeAccount) obj;\r
        return this.studentId == other.studentId;\r
    }\r
\r
    @Override\r
    public int hashCode() { return Integer.hashCode(studentId); }\r
\r
    // compareTo() compares ONLY feeAmount (Inconsistent with equals!):\r
    @Override\r
    public int compareTo(StudentFeeAccount other) {\r
        return Double.compare(this.feeAmount, other.feeAmount);\r
    }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("Account[ID=%d, Name=%s, Fee=₹%.0f]", studentId, name, feeAmount);\r
    }\r
}\r
\r
public class TreeSetCompareToUniquenessTrapDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: TreeSet compareTo() == 0 UNIQUENESS TRAP - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        StudentFeeAccount acc1 = new StudentFeeAccount(101, "Swadeep Paul", 5000);\r
        StudentFeeAccount acc2 = new StudentFeeAccount(102, "Tuhina Das", 5000); // DIFFERENT ID, SAME FEE!\r
\r
        // 1. In HashSet (Uses equals & hashCode):\r
        Set<StudentFeeAccount> hashSet = new HashSet<>();\r
        hashSet.add(acc1);\r
        hashSet.add(acc2); // Admitted because studentId 101 != 102!\r
        System.out.println(">>> 1. HashSet Evaluation (Uses equals):");\r
        System.out.println("  HashSet Size : " + hashSet.size() + " (Both admitted because IDs are different!)");\r
\r
        // 2. In TreeSet (Uses compareTo == 0, IGNORES equals/hashCode!):\r
        Set<StudentFeeAccount> treeSet = new TreeSet<>();\r
        treeSet.add(acc1);\r
        boolean addedAcc2 = treeSet.add(acc2); // REJECTED because compareTo returned 0 (same fee ₹5000)!\r
        System.out.println("\\n>>> 2. TreeSet Evaluation (Uses compareTo):");\r
        System.out.println("  Was acc2 admitted into TreeSet? : " + addedAcc2 + " (REJECTED!)");\r
        System.out.println("  TreeSet Size                    : " + treeSet.size() + " (Tuhina was dropped!)");\r
\r
        System.out.println("\\n>>> THE CRITICAL ARCHITECTURAL DIFFERENCE:");\r
        System.out.println("  1. HashSet/LinkedHashSet enforce uniqueness via 'equals()' and 'hashCode()'.");\r
        System.out.println("  2. TreeSet enforces uniqueness SOLELY via 'compareTo() == 0' or 'compare() == 0'.");\r
        System.out.println("  3. Effective Java Warning: Always ensure compareTo() is CONSISTENT WITH equals() to avoid silent data loss!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_003: Set Implementations & TreeSet Internals\r
Topic 11: TreeSet compareTo Uniqueness Trap\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. TREESET UNIQUENESS RULE:\r
   - Ignores 'equals()' and 'hashCode()'.\r
   - Uniqueness determined SOLELY by: 'compareTo(other) == 0'.\r
   - If compareTo is inconsistent with equals, silent data loss occurs.\r
   - Golden Rule: Ensure '(x.compareTo(y) == 0) == (x.equals(y))'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"Why does 'TreeSet' completely ignore an object's 'equals()' and 'hashCode()' methods when checking for duplicates?",shortAnswer:"Because TreeSet is backed by a Red-Black binary search tree (TreeMap). To maintain sorted tree invariants, tree traversal and node placement are driven entirely by 'Comparable.compareTo()' or 'Comparator.compare()'. If 'compareTo()' returns 0, the tree treats the two nodes as duplicate keys and skips insertion, completely ignoring whether 'equals()' returns true or false.",explanation:"Effective Java Item 14: Consider implementing Comparable (consistency with equals).",hint:"TreeSet uses compareTo()/compare() == 0 for both ordering and uniqueness, completely ignoring equals().",level:"Advanced",codeExample:"if (c.compare(key, t.key) == 0) return t.setValue(value); // TreeSet duplicate check"}];function T(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_003 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"compareTo vs equals Trap"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["TreeSet Does ",e.jsx("code",{className:"text-rose-400 font-mono",children:"NOT"})," Use ",e.jsx("code",{className:"text-rose-400 font-mono",children:"equals/hashCode"}),": ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"compareTo() == 0"})," Dictates Uniqueness"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Avoid silent data loss: discovering why TreeSet ignores ",e.jsx("code",{className:"text-rose-400 font-mono",children:"equals()"})," and relies exclusively on ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"compareTo() == 0"})," to evaluate duplicate membership."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:s,title:"TreeSetCompareToUniquenessTrapDemo.java",highlightLines:[7,10,20,21,28,29,44,45,52,53]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"TreeSet Uniqueness Trap FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 007_003 Topic 11: TreeSet compareTo vs equals",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_003_topic11_treeset_compareto_vs_equals_note.txt"})}),e.jsx(a,{note:"This is one of the biggest gotchas in Java! If two different students have the exact same fee of ₹5000, and your compareTo() only compares fees, TreeSet will think they are duplicates and DROP the second student completely! Always include unique IDs in compareTo()! — Sukanta Hui"})]})}export{T as default};
