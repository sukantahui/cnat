import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const r=`/**\r
 * Java Core Tutorial - Module 012_002: Core Banking Capstone\r
 * Topic 5: Financial Accuracy - 100% BigDecimal & RoundingMode\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.banking;\r
\r
import java.math.BigDecimal;\r
import java.math.RoundingMode;\r
\r
public class FinancialAccuracyBigDecimalDemo {\r
\r
    public static BigDecimal calculateAccruedInterest(BigDecimal principal, BigDecimal annualRatePct, int days) {\r
        // Daily rate = annualRate / 100 / 365\r
        BigDecimal rateFraction = annualRatePct.divide(new BigDecimal("100"), 10, RoundingMode.HALF_EVEN);\r
        BigDecimal dailyRate = rateFraction.divide(new BigDecimal("365"), 10, RoundingMode.HALF_EVEN);\r
\r
        BigDecimal totalInterest = principal.multiply(dailyRate).multiply(BigDecimal.valueOf(days));\r
\r
        // Scale to 2 currency decimals using Banker's Rounding (HALF_EVEN):\r
        return totalInterest.setScale(2, RoundingMode.HALF_EVEN);\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 5: FINANCIAL ACCURACY & BIGDECIMAL - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BigDecimal principal = new BigDecimal("150000.00");\r
        BigDecimal interestRate = new BigDecimal("7.25"); // 7.25% p.a.\r
        int days = 90;\r
\r
        BigDecimal interest = calculateAccruedInterest(principal, interestRate, days);\r
        System.out.println("Principal Amount   : ₹" + principal);\r
        System.out.println("Annual Rate        : " + interestRate + "%");\r
        System.out.println("Accrued 90-Day Int : ₹" + interest);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_002: Core Banking Capstone\r
Topic 5: Financial Accuracy with BigDecimal\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BIGDECIMAL RULES FOR BANKING:\r
   - Always instantiate via 'new BigDecimal("100.50")' or 'BigDecimal.valueOf(100.50)'.\r
   - NEVER use 'new BigDecimal(0.1)' (passes double representation error into BigDecimal!).\r
   - Always specify scale and 'RoundingMode.HALF_EVEN' during division.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,l=[{question:'Why is new BigDecimal("0.1") safe while new BigDecimal(0.1) creates a flawed value?',shortAnswer:"Because new BigDecimal(0.1) passes a binary double that is already imprecise (0.1000000000000000055511151231257827021181583404541015625), whereas the String constructor parses exact base-10 characters.",explanation:"Essential Java fundamental for financial developers.",hint:"The double constructor passes pre-existing binary floating point errors.",level:"Beginner",codeExample:'Always use new BigDecimal("0.1") or BigDecimal.valueOf(0.1).'},{question:"What is Banker's Rounding (RoundingMode.HALF_EVEN) and why is it preferred in banking?",shortAnswer:"It rounds towards the nearest neighbor unless both are equidistant, in which case it rounds towards the nearest even integer. Over millions of transactions, this eliminates the upward statistical bias introduced by standard round-half-up rounding.",explanation:"IEEE 754 and GAAP accounting standard.",hint:"Rounds to nearest even number when equidistant, preventing statistical inflation.",level:"Intermediate",codeExample:"setScale(2, RoundingMode.HALF_EVEN)"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_002 · Topic 5"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 1: Core Banking System"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Financial Accuracy: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"100% BigDecimal & RoundingMode"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Zero precision loss: calculating compound interest, academy fee splits, and tax withholdings using BigDecimal and RoundingMode.HALF_EVEN."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"FinancialAccuracyBigDecimalDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{title:"Core Banking Capstone FAQs",questions:l})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 012_002 Topic 5: Financial Accuracy with BigDecimal",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_002_topic5_financial_accuracy_bigdecimal_note.txt"})}),e.jsx(t,{note:"In banking, Banker's Rounding (RoundingMode.HALF_EVEN) is legally required by accounting standards! It rounds towards the nearest even number to prevent statistical inflation bias over millions of transactions! — Sukanta Hui"})]})}export{h as default};
