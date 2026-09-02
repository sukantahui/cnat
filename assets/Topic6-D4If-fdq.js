import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as a}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";const o=`/**\r
 * Java Core Tutorial - Module 003_004: Math, Random, BigInteger & BigDecimal\r
 * Topic 6: Why float and double Must NEVER Be Used for Financial Calculations\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.math;\r
\r
public class FinancialDoubleDisasterSimulationDemo {\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: FINANCIAL DOUBLE DISASTER SIMULATION - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> Scenario: A student starts with ₹1.00 and buys items costing ₹0.10 ten times:");\r
\r
        // Simulation with primitive double:\r
        double balance = 1.00;\r
        int itemsBought = 0;\r
\r
        for (double price = 0.10; balance >= price; balance -= price) {\r
            itemsBought++;\r
        }\r
\r
        System.out.println("  Items Purchased : " + itemsBought + " items (Expected: 10 items!)");\r
        System.out.println("  Remaining Fund  : ₹" + balance + " (Lost money due to roundoff error!)");\r
\r
        System.out.println("\\n>>> THE LESSON: After 9 purchases, balance became 0.09999999999999995,");\r
        System.out.println("    which is LESS than 0.10, falsely preventing the 10th purchase!");\r
        System.out.println("    In banking and AccoTax ledgers, this causes audits to fail and millions in losses.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 003_004: Math, Random & Arbitrary Precision\r
Topic 6: Financial Calculations & Double Disaster\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. FINANCIAL COMPUTATION LAW:\r
   - NEVER use 'float' or 'double' for money, salaries, invoices, or taxes.\r
   - Cumulative roundoff error corrupts account balances.\r
   - ALWAYS use 'java.math.BigDecimal' for exact arithmetic.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"Why is it strictly forbidden to use 'float' or 'double' for currency, banking, or tax computations?",shortAnswer:"Because binary floating-point roundoff errors accumulate over millions of transactions. Balances will drift, taxes will calculate improperly by fractional cents, and financial audits will fail. 'java.math.BigDecimal' must always be used for monetary calculations.",explanation:"Item 60 of Effective Java strictly mandates avoiding float and double for exact monetary results.",hint:"Floating point roundoff errors accumulate and destroy financial ledger precision.",level:"Beginner",codeExample:'BigDecimal price = new BigDecimal("19.99"); // Exact monetary representation'}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 003_004 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Financial Integrity Law"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Why ",e.jsx("code",{className:"text-rose-400 font-mono",children:"float"})," & ",e.jsx("code",{className:"text-rose-400 font-mono",children:"double"})," Must NEVER Be Used for Financial Calculations"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Simulate a real-world accounting disaster: demonstrating how floating-point micro-errors accumulate into corrupted ledgers, failed transactions, and audit discrepancies."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(a,{fileModule:o,title:"FinancialDoubleDisasterSimulationDemo.java",highlightLines:[7,16,17,19,20,23,24]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Financial Math FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 003_004 Topic 6: Financial Calculations Law",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"003_004_topic6_financial_double_disaster_note.txt"})}),e.jsx(r,{note:"At AccoTax Barrackpore, we deal with GST invoices and income tax calculations every day. If you use double for taxes, you can go to jail for tax fraud due to cumulative roundoff error! Always use BigDecimal! — Sukanta Hui"})]})}export{h as default};
