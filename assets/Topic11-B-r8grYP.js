import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 11: BigDecimal Comparison: compareTo() vs equals() (The Scale Trap)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.math.BigDecimal;\r
import java.util.HashSet;\r
import java.util.Set;\r
import java.util.TreeSet;\r
\r
public class BigDecimalEqualsVsCompareToDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 11: BigDecimal equals() vs compareTo() - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BigDecimal d1 = new BigDecimal("2.0");\r
        BigDecimal d2 = new BigDecimal("2.00");\r
\r
        System.out.println(">>> 1. Comparing '2.0' (scale=1) vs '2.00' (scale=2):");\r
        System.out.println("  d1.scale() : " + d1.scale());\r
        System.out.println("  d2.scale() : " + d2.scale());\r
\r
        System.out.println("\\n>>> 2. Equality Testing:");\r
        System.out.println("  d1.equals(d2)          : " + d1.equals(d2) + " (FALSE! equals checks BOTH numeric value AND scale!)");\r
        System.out.println("  d1.compareTo(d2) == 0  : " + (d1.compareTo(d2) == 0) + " (TRUE! compareTo compares ONLY mathematical value)");\r
\r
        System.out.println("\\n>>> 3. Impact on Collections (HashSet vs TreeSet):");\r
        Set<BigDecimal> hashSet = new HashSet<>();\r
        hashSet.add(d1);\r
        hashSet.add(d2);\r
        System.out.println("  HashSet size (uses equals)    : " + hashSet.size() + " (Contains BOTH 2.0 and 2.00!)");\r
\r
        Set<BigDecimal> treeSet = new TreeSet<>();\r
        treeSet.add(d1);\r
        treeSet.add(d2);\r
        System.out.println("  TreeSet size (uses compareTo) : " + treeSet.size() + " (Contains ONLY 1 element!)");\r
\r
        System.out.println("\\n>>> GOLDEN RULE: ALWAYS compare BigDecimal numerical values with 'compareTo() == 0'!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 11: BigDecimal Comparison\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. EQUALITY COMPARISON:\r
   - 'a.equals(b)'      : Compares VALUE + SCALE ('2.0' != '2.00').\r
   - 'a.compareTo(b)==0': Compares MATHEMATICAL VALUE ONLY ('2.0' == '2.00').\r
   - HashSet uses 'equals()'; TreeSet uses 'compareTo()'.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:`Why does 'new BigDecimal("2.0").equals(new BigDecimal("2.00"))' return false in Java?`,shortAnswer:"'BigDecimal.equals()' checks both numerical value AND scale factor. Since scale 1 != scale 2, equals() returns false. To compare mathematical values regardless of scale, ALWAYS use 'a.compareTo(b) == 0'.",explanation:"This scale sensitivity causes duplicate entries in HashSets and HashMaps.",hint:"equals() checks both value and scale; compareTo() checks only numeric value.",level:"Intermediate",codeExample:"boolean isEqual = (a.compareTo(b) == 0); // Scale-agnostic equality"}];function S(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 11"}),e.jsx("span",{className:"px-3 py-1 bg-amber-500/10 text-amber-400 border border-amber-500/20 text-xs font-semibold rounded-full",children:"Scale Sensitivity Trap"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BigDecimal"})," Comparison: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"compareTo()"})," vs ",e.jsx("code",{className:"text-rose-400 font-mono",children:"equals()"})," (Scale Sensitivity)"]}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master the cardinal rule of BigDecimal equality: diagnosing why ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"2.0"})," and ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"2.00"})," fail with ",e.jsx("code",{className:"text-rose-400 font-mono",children:"equals()"}),", and handling HashSet vs TreeSet deduplication."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:r,title:"BigDecimalEqualsVsCompareToDemo.java",highlightLines:[7,17,18,25,26,31,32,36,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"BigDecimal Comparison FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(s,{content:i,title:"Module 003_004 Topic 11: BigDecimal Comparison",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic11_bigdecimal_comparison_note.txt"})}),e.jsx(n,{note:"If you put new BigDecimal('2.0') and new BigDecimal('2.00') in a HashSet, it will store TWO items because their scale is different! Always use compareTo() for numeric comparison! — Sukanta Hui"})]})}export{S as default};
