import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-CkSqDH4B.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const s=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 0: Trading Engine Architecture - Bids, Asks & Limit Orders\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
public class TradingEngineArchitectureDemo {\r
\r
    public enum Side { BUY, SELL }\r
    public enum OrderType { LIMIT, MARKET }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" CAPSTONE 2: HIGH-CONCURRENCY ORDER MATCHING ENGINE");\r
        System.out.println(" EDUCATOR: SUKANTA HUI | ACADEMIC HUB: BARRACKPORE, WB");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> 1. CORE MARKET TERMINOLOGY:");\r
        System.out.println("  - BID (BUY)   : Buyers want to buy at highest possible price (Sorted DESCENDING).");\r
        System.out.println("  - ASK (SELL)  : Sellers want to sell at lowest possible price (Sorted ASCENDING).");\r
        System.out.println("  - SPREAD      : Lowest Ask Price - Highest Bid Price (Bid-Ask Spread).");\r
        System.out.println("  - CROSS SPREAD: When Best Bid >= Best Ask -> Match & Execute Trade! ⚡\\n");\r
\r
        System.out.println(">>> 2. MATCHING RULE: PRICE-TIME PRIORITY (FIFO):");\r
        System.out.println("  1. Better Price executes first (Higher Buy or Lower Sell).");\r
        System.out.println("  2. At identical price, older order (earlier timestamp) executes first!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,a=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 0: Trading Engine Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PRICE-TIME PRIORITY:\r
   - Price Priority : Best available price gets matched first.\r
   - Time Priority  : First order to arrive at that price gets filled first (FIFO).\r
\r
2. ORDER SIDES:\r
   - Buy Book (Bids): Max-heap or descending sorted map.\r
   - Sell Book (Asks): Min-heap or ascending sorted map.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"What does 'Price-Time Priority' (FIFO matching) mean in an exchange order book?",shortAnswer:"Orders with better prices (highest bid for buyers, lowest ask for sellers) are always matched first; if multiple orders share the exact same price, the order that was placed earliest in time is filled first.",explanation:"The global standard matching algorithm for financial exchanges (NSE, NASDAQ, LSE).",hint:"Better price matches first; earlier timestamp breaks ties.",level:"Beginner",codeExample:"Comparator.comparing(Order::price).reversed().thenComparing(Order::timestamp)"},{question:"What is the Bid-Ask Spread?",shortAnswer:"The difference between the lowest asking price (Best Ask) from sellers and the highest bidding price (Best Bid) from buyers in the market.",explanation:"A key indicator of market liquidity.",hint:"Lowest Ask minus Highest Bid.",level:"Beginner",codeExample:"BigDecimal spread = bestAsk.getPrice().subtract(bestBid.getPrice());"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 0"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["Trading Engine Architecture: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Bids, Asks & Limit Orders"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"High-frequency market mechanics: understanding Bids (Buy side), Asks (Sell side), Market Orders, Limit Orders, and Price-Time Priority."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"TradingEngineArchitectureDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Order Matching Engine FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:a,title:"Module 012_003 Topic 0: Trading Engine Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic0_trading_engine_architecture_note.txt"})}),e.jsx(n,{note:"Welcome to Capstone Project 2! We are building a high-speed stock & crypto exchange Order Matching Engine! In trading, buyers place Bids and sellers place Asks. When a buyer bid meets or exceeds a seller ask, a Trade happens! — Sukanta Hui"})]})}export{x as default};
