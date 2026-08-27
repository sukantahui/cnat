import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as i}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-CyIG3xbg.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CIaKtAt4.js";const a=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 2: The Matching Algorithm - Partial & Full Fills\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
import java.math.BigDecimal;\r
import java.time.Instant;\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class TheMatchingAlgorithmDemo {\r
\r
    public record Trade(long matchId, long buyOrderId, long sellOrderId, BigDecimal price, long matchedQty, Instant time) {}\r
\r
    public static class LimitOrder {\r
        long id;\r
        TradingEngineArchitectureDemo.Side side;\r
        BigDecimal price;\r
        long remainingQty;\r
\r
        public LimitOrder(long id, TradingEngineArchitectureDemo.Side side, BigDecimal price, long qty) {\r
            this.id = id; this.side = side; this.price = price; this.remainingQty = qty;\r
        }\r
    }\r
\r
    public static List<Trade> match(LimitOrder incoming, List<LimitOrder> restingOppositeOrders) {\r
        List<Trade> executedTrades = new ArrayList<>();\r
        long matchCounter = 1L;\r
\r
        for (LimitOrder resting : restingOppositeOrders) {\r
            if (incoming.remainingQty <= 0) break;\r
\r
            // Check if price crosses spread:\r
            boolean canMatch = incoming.side == TradingEngineArchitectureDemo.Side.BUY\r
                ? incoming.price.compareTo(resting.price) >= 0\r
                : incoming.price.compareTo(resting.price) <= 0;\r
\r
            if (!canMatch) break;\r
\r
            long fillQty = Math.min(incoming.remainingQty, resting.remainingQty);\r
            incoming.remainingQty -= fillQty;\r
            resting.remainingQty -= fillQty;\r
\r
            executedTrades.add(new Trade(\r
                matchCounter++,\r
                incoming.side == TradingEngineArchitectureDemo.Side.BUY ? incoming.id : resting.id,\r
                incoming.side == TradingEngineArchitectureDemo.Side.SELL ? incoming.id : resting.id,\r
                resting.price, // Execution price is resting order price (Maker price)!\r
                fillQty,\r
                Instant.now()\r
            ));\r
        }\r
        return executedTrades;\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 2: THE MATCHING ALGORITHM - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        LimitOrder restingAsk = new LimitOrder(101L, TradingEngineArchitectureDemo.Side.SELL, new BigDecimal("3500.00"), 60);\r
        LimitOrder incomingBid = new LimitOrder(201L, TradingEngineArchitectureDemo.Side.BUY, new BigDecimal("3500.00"), 100);\r
\r
        List<Trade> trades = match(incomingBid, List.of(restingAsk));\r
\r
        System.out.println("Executed Trade Results:");\r
        trades.forEach(t -> System.out.println("  ⚡ MATCH: " + t.matchedQty() + " shares @ ₹" + t.price()));\r
        System.out.println("Incoming Bid Remaining Qty: " + incomingBid.remainingQty + " shares (Resting on book)");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 2: The Matching Algorithm\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. MATCHING MECHANICS:\r
   - Taker Order : The incoming aggressor order.\r
   - Maker Order : The passive resting order already in the book.\r
   - Trade Price : Executed at the Maker (resting) order's price!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,o=[{question:"Why is the execution price of a matched trade determined by the resting Maker order rather than the incoming Taker order?",shortAnswer:"Because the resting order was placed earlier in time and advertised a firm commitment at that price; the incoming taker accepted that resting liquidity, so the trade settles at the resting limit price.",explanation:"Fundamental pricing rule in continuous double auctions.",hint:"Settles at the resting maker's price because that liquidity was posted first.",level:"Intermediate",codeExample:"BigDecimal tradePrice = restingOrder.getPrice();"},{question:"What happens to the remaining unfilled quantity of a Limit Order after all crossing orders are exhausted?",shortAnswer:"The remaining quantity is inserted as a resting limit order into the matching book at its designated price level, providing liquidity for future incoming orders.",explanation:"Transitions from active taker to passive resting maker.",hint:"Enters the order book as a resting order.",level:"Beginner",codeExample:"if (order.getRemainingQty() > 0) book.addOrder(order);"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 2"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:["The Matching Algorithm: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Partial & Full Fills"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Crossing the spread: implementing full fills, partial quantity deductions, trade generation, and resting limit order insertions."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:a,title:"TheMatchingAlgorithmDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{title:"Order Matching Engine FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:s,title:"Module 012_003 Topic 2: The Matching Algorithm",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic2_the_matching_algorithm_note.txt"})}),e.jsx(t,{note:"When an order arrives, we check if it crosses the spread! If Priya wants to buy 100 shares at ₹3500 and Rohan is selling 60 shares at ₹3500, a Trade of 60 shares executes immediately, and Priya's remaining 40 shares stay on the book! — Sukanta Hui"})]})}export{x as default};
