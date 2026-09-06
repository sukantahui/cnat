import{j as n}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const s=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 10: Non-Terminating Decimals: RoundingMode (HALF_UP vs HALF_EVEN Banker's Rounding)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.math.BigDecimal;\r
import java.math.RoundingMode;\r
\r
public class RoundingModesAndScaleMasteryDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 10: RoundingMode (HALF_UP vs HALF_EVEN) - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BigDecimal val1 = new BigDecimal("2.5");\r
        BigDecimal val2 = new BigDecimal("3.5");\r
\r
        System.out.println(">>> 1. RoundingMode.HALF_UP (Standard School Math - 0.5 always rounds UP):");\r
        System.out.println("  2.5 -> " + val1.setScale(0, RoundingMode.HALF_UP) + " (Rounds UP to 3)");\r
        System.out.println("  3.5 -> " + val2.setScale(0, RoundingMode.HALF_UP) + " (Rounds UP to 4)");\r
\r
        System.out.println("\\n>>> 2. RoundingMode.HALF_EVEN (Banker's Rounding - IEEE 754 Standard):");\r
        System.out.println("  2.5 -> " + val1.setScale(0, RoundingMode.HALF_EVEN) + " (Rounds to nearest EVEN integer: 2!)");\r
        System.out.println("  3.5 -> " + val2.setScale(0, RoundingMode.HALF_EVEN) + " (Rounds to nearest EVEN integer: 4!)");\r
\r
        System.out.println("\\n>>> WHY BANKERS PREFER HALF_EVEN:");\r
        System.out.println("  - In standard HALF_UP, 0.5 ALWAYS rounds up, introducing a systematic upward bias.");\r
        System.out.println("  - HALF_EVEN rounds half of the numbers up and half down, balancing out statistical errors across millions of transactions!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 10: RoundingMode & Scale\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ROUNDING MODES:\r
   - 'HALF_UP'   : Standard school math (.5 rounds up: 2.5 → 3).\r
   - 'HALF_EVEN' : Banker's rounding (rounds to even: 2.5 → 2, 3.5 → 4).\r
   - 'CEILING'   : Rounds towards $+\\infty$.\r
   - 'FLOOR'     : Rounds towards $-\\infty$.\r
   - 'UNNECESSARY': Asserts exact scale, throws if rounding needed.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,i=[{question:"What is Banker's Rounding ('RoundingMode.HALF_EVEN') and why is it preferred by financial institutions?",shortAnswer:"In standard 'HALF_UP', .5 always rounds up, causing an upward statistical bias over millions of banking transactions. 'HALF_EVEN' rounds towards the nearest even number (2.5 → 2, 3.5 → 4), statistically balancing roundings up and down to minimize cumulative financial drift.",explanation:"HALF_EVEN is the default rounding mode in IEEE 754 and financial standards.",hint:"Rounds towards the nearest even number to eliminate upward rounding bias.",level:"Intermediate",codeExample:"BigDecimal rounded = amount.setScale(2, RoundingMode.HALF_EVEN);"}];function E(){return n.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[n.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[n.jsxs("div",{className:"flex items-center gap-3",children:[n.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 10"}),n.jsx("span",{className:"px-3 py-1 bg-purple-500/10 text-purple-400 border border-purple-500/20 text-xs font-semibold rounded-full",children:"Banker's Precision"})]}),n.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Handling Non-Terminating Decimals: ",n.jsx("code",{className:"text-emerald-400 font-mono",children:"HALF_UP"})," vs ",n.jsx("code",{className:"text-purple-400 font-mono",children:"HALF_EVEN"})," (Banker's Rounding)"]}),n.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Master enterprise rounding algorithms: contrasting standard arithmetic roundups against statistically neutral ",n.jsx("code",{className:"text-purple-300 font-mono",children:"HALF_EVEN"})," Banker's rounding."]})]}),n.jsxs("section",{className:"space-y-4",children:[n.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[n.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),n.jsx(e,{fileModule:s,title:"RoundingModesAndScaleMasteryDemo.java",highlightLines:[7,14,15,18,19,23,24]})]}),n.jsx("section",{className:"space-y-4",children:n.jsx(a,{title:"Rounding Modes FAQs",questions:i})}),n.jsx("section",{className:"space-y-4",children:n.jsx(t,{content:o,title:"Module 003_004 Topic 10: Rounding Modes and Scale",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic10_rounding_modes_note.txt"})}),n.jsx(r,{note:"Why does a bank use HALF_EVEN? If a bank rounds millions of transactions up by half a cent, they lose millions of dollars a year! HALF_EVEN balances it evenly! — Sukanta Hui"})]})}export{E as default};
