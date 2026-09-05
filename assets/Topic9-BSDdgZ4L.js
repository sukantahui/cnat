import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as i}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const r=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 9: BigDecimal Arithmetic: add(), subtract(), multiply(), divide()\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
import java.math.BigDecimal;\r
import java.math.RoundingMode;\r
\r
public class BigDecimalArithmeticOperationsDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: BigDecimal ARITHMETIC OPERATIONS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BigDecimal principal = new BigDecimal("100000.00");\r
        BigDecimal gstRate = new BigDecimal("0.18"); // 18% GST in Barrackpore\r
        BigDecimal discount = new BigDecimal("5000.00");\r
\r
        // 1. Multiplication (GST calculation):\r
        BigDecimal gstAmount = principal.multiply(gstRate);\r
        System.out.println("  1. GST Amount (100000 * 0.18) : ₹" + gstAmount);\r
\r
        // 2. Addition (Subtotal + GST):\r
        BigDecimal grossTotal = principal.add(gstAmount);\r
        System.out.println("  2. Gross Total (Principal+GST): ₹" + grossTotal);\r
\r
        // 3. Subtraction (Applying Discount):\r
        BigDecimal finalPayable = grossTotal.subtract(discount);\r
        System.out.println("  3. Net Payable After Discount : ₹" + finalPayable);\r
\r
        // 4. Division (Splitting into 3 monthly EMI installments):\r
        // CRITICAL: Division MUST specify Scale and RoundingMode to prevent ArithmeticException!\r
        BigDecimal emi = finalPayable.divide(new BigDecimal("3"), 2, RoundingMode.HALF_UP);\r
        System.out.println("  4. Monthly EMI (Split in 3)   : ₹" + emi + " per month");\r
\r
        System.out.println("\\n>>> NOTE: Because BigDecimal is IMMUTABLE, every method returns a BRAND NEW instance!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 9: BigDecimal Arithmetic Methods\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ARITHMETIC TOOLSET:\r
   - 'a.add(b)'        → Returns $a + b$.\r
   - 'a.subtract(b)'   → Returns $a - b$.\r
   - 'a.multiply(b)'   → Returns $a 	imes b$.\r
   - 'a.divide(b, scale, RoundingMode)' → Exact division with rounding.\r
   - All methods return new immutable instances.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why does calling 'a.divide(b)' without specifying scale and RoundingMode throw an ArithmeticException?",shortAnswer:"If division results in a non-terminating repeating decimal fraction (e.g. 10 / 3 = 3.33333...), Java cannot represent an infinite number of digits. Therefore, the JVM throws 'ArithmeticException: Non-terminating decimal expansion'. Specifying scale and RoundingMode (e.g. 'divide(b, 2, RoundingMode.HALF_UP)') is mandatory for non-terminating divisions.",explanation:"Always supply explicit scale and RoundingMode to divide().",hint:"Non-terminating repeating decimals (like 10/3) throw ArithmeticException unless scale is defined.",level:"Intermediate",codeExample:"BigDecimal emi = total.divide(months, 2, RoundingMode.HALF_UP);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Financial Ledger Operations"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"BigDecimal"})," Arithmetic: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"add()"}),", ",e.jsx("code",{className:"text-sky-400 font-mono",children:"multiply()"})," & ",e.jsx("code",{className:"text-amber-400 font-mono",children:"divide()"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build accurate financial pipelines: calculating GST taxes, applying invoice discounts, and handling division without ArithmeticException errors."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(i,{fileModule:r,title:"BigDecimalArithmeticOperationsDemo.java",highlightLines:[7,18,19,22,23,26,27,31,32]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"BigDecimal Arithmetic FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 003_004 Topic 9: BigDecimal Arithmetic",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic9_bigdecimal_arithmetic_note.txt"})}),e.jsx(a,{note:"Remember: BigDecimal is immutable! If you write 'balance.add(deposit);' without assigning the result ('balance = balance.add(deposit);'), your balance will never change! — Sukanta Hui"})]})}export{h as default};
