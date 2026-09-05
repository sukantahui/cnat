import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const i=`/**\r
 * Java Core Tutorial - Module 007_008: Sorting, Comparable, Comparator & Collections\r
 * Topic 8: Multi-Level Chained Sorting: thenComparing() & Multi-Column SQL-Like Ordering\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.collections;\r
\r
import java.util.ArrayList;\r
import java.util.Collections;\r
import java.util.Comparator;\r
import java.util.List;\r
\r
class StudentPlacementCandidate {\r
    private final String department;\r
    private final double gpa;\r
    private final String name;\r
\r
    public StudentPlacementCandidate(String department, double gpa, String name) {\r
        this.department = department;\r
        this.gpa = gpa;\r
        this.name = name;\r
    }\r
\r
    public String getDepartment() { return department; }\r
    public double getGpa() { return gpa; }\r
    public String getName() { return name; }\r
\r
    @Override\r
    public String toString() {\r
        return String.format("[Dept: %-12s | GPA: %.2f | Name: %-10s]", department, gpa, name);\r
    }\r
}\r
\r
public class MultiLevelChainedSortingDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 8: MULTI-LEVEL CHAINED SORTING (thenComparing) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentPlacementCandidate> candidateList = new ArrayList<>(List.of(\r
                new StudentPlacementCandidate("Accounting", 9.85, "Swadeep"),\r
                new StudentPlacementCandidate("IT", 9.95, "Tuhina"),\r
                new StudentPlacementCandidate("Accounting", 9.85, "Abhronila"), // Same Dept, Same GPA!\r
                new StudentPlacementCandidate("IT", 9.70, "Debangshu"),\r
                new StudentPlacementCandidate("Accounting", 9.60, "Sourav")\r
        ));\r
\r
        // Multi-level chained comparator (Like SQL: ORDER BY department ASC, gpa DESC, name ASC):\r
        Comparator<StudentPlacementCandidate> multiLevelSort = Comparator\r
                .comparing(StudentPlacementCandidate::getDepartment)                   // 1. Primary: Dept Ascending\r
                .thenComparing(StudentPlacementCandidate::getGpa, Collections.reverseOrder()) // 2. Secondary: GPA Descending\r
                .thenComparing(StudentPlacementCandidate::getName);                    // 3. Tertiary: Name Alphabetical\r
\r
        candidateList.sort(multiLevelSort);\r
\r
        System.out.println(">>> Multi-Level Chained Sort (Dept ASC -> GPA DESC -> Name ASC):");\r
        candidateList.forEach(c -> System.out.println("  " + c));\r
\r
        System.out.println("\\n>>> HOW thenComparing() WORKS AS A TIE-BREAKER:");\r
        System.out.println("  1. Primary comparator compares elements. If result != 0, it returns the result immediately.");\r
        System.out.println("  2. If primary comparator produces a TIE (result == 0), execution cascades down to 'thenComparing()'.");\r
        System.out.println("  3. You can chain unlimited tie-breakers seamlessly!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 007_008: Sorting, Comparable, Comparator & Collections\r
Topic 8: Multi-Level Chained Sorting\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MULTI-LEVEL CHAINING:\r
   - Equivalent to SQL 'ORDER BY col1, col2 DESC, col3'.\r
   - 'Comparator.comparing(...).thenComparing(...)'.\r
   - Cascades down the chain only when previous level returns 0 (tie).\r
   - Highly readable and declarative.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,l=[{question:"How does 'thenComparing()' resolve sorting ties in a multi-level Comparator chain?",shortAnswer:"'thenComparing()' acts as a secondary tie-breaker. When the primary comparator evaluates two elements, if 'compare()' returns non-zero (< 0 or > 0), that order is used immediately. If the primary comparison returns 0 (a tie), the algorithm cascades to the secondary comparator passed into 'thenComparing()'. Multiple 'thenComparing()' calls can be chained sequentially to replicate multi-column SQL 'ORDER BY' behavior.",explanation:"Default combinator method on java.util.Comparator.",hint:"Cascades to secondary comparison only when the primary comparison returns 0 (a tie).",level:"Intermediate",codeExample:"Comparator.comparing(Emp::getDept).thenComparing(Emp::getSalary, reverseOrder()).thenComparing(Emp::getName);"}];function C(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 007_008 · Topic 8"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"thenComparing Chaining"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Multi-Level Chained Sorting: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"thenComparing()"})," & SQL-Like Ordering"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Construct complex multi-criteria tie-breakers: chaining primary, secondary, and tertiary sorting stages using fluent ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"thenComparing()"})," combinators."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"MultiLevelChainedSortingDemo.java",highlightLines:[7,10,27,28,38,39,40,41,42,44]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"thenComparing Chaining FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:o,title:"Module 007_008 Topic 8: Multi-Level Chained Sorting",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"007_008_topic8_multi_level_chained_sorting_note.txt"})}),e.jsx(r,{note:"'thenComparing()' is just like SQL 'ORDER BY Department ASC, Salary DESC, Name ASC'! If the department matches, it checks salary; if salaries match, it checks names! It makes complex sorting look like plain English! — Sukanta Hui"})]})}export{C as default};
