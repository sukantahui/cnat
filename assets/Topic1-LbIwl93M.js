import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const i=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 1: Order Book Data Structures - NavigableMap & Queues\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
import java.math.BigDecimal;\r
import java.time.Instant;\r
import java.util.*;\r
\r
public class OrderBookDataStructuresDemo {\r
\r
    public record Order(\r
        long orderId,\r
        String symbol,\r
        TradingEngineArchitectureDemo.Side side,\r
        BigDecimal price,\r
        long quantity,\r
        Instant timestamp\r
    ) {}\r
\r
    public static class OrderBook {\r
        // Buy Book: Highest Price First (Descending):\r
        private final NavigableMap<BigDecimal, ArrayDeque<Order>> bids = new TreeMap<>(Collections.reverseOrder());\r
\r
        // Sell Book: Lowest Price First (Ascending):\r
        private final NavigableMap<BigDecimal, ArrayDeque<Order>> asks = new TreeMap<>();\r
\r
        public void addOrder(Order order) {\r
            NavigableMap<BigDecimal, ArrayDeque<Order>> book =\r
                order.side() == TradingEngineArchitectureDemo.Side.BUY ? bids : asks;\r
\r
            book.computeIfAbsent(order.price(), p -> new ArrayDeque<>()).addLast(order);\r
        }\r
\r
        public Optional<BigDecimal> getBestBidPrice() {\r
            return bids.isEmpty() ? Optional.empty() : Optional.of(bids.firstKey());\r
        }\r
\r
        public Optional<BigDecimal> getBestAskPrice() {\r
            return asks.isEmpty() ? Optional.empty() : Optional.of(asks.firstKey());\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: ORDER BOOK DATA STRUCTURES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        OrderBook book = new OrderBook();\r
        book.addOrder(new Order(1L, "TCS", TradingEngineArchitectureDemo.Side.BUY, new BigDecimal("3500.00"), 100, Instant.now()));\r
        book.addOrder(new Order(2L, "TCS", TradingEngineArchitectureDemo.Side.BUY, new BigDecimal("3520.00"), 50, Instant.now()));\r
        book.addOrder(new Order(3L, "TCS", TradingEngineArchitectureDemo.Side.SELL, new BigDecimal("3530.00"), 75, Instant.now()));\r
\r
        System.out.println("Best Bid (Highest Buyer) : ₹" + book.getBestBidPrice().orElse(BigDecimal.ZERO));\r
        System.out.println("Best Ask (Lowest Seller) : ₹" + book.getBestAskPrice().orElse(BigDecimal.ZERO));\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 1: Order Book Data Structures\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ORDER BOOK DESIGN:\r
   - 'NavigableMap<BigDecimal, ArrayDeque<Order>>' provides:\r
     * O(log N) price level insertion.\r
     * O(1) top-of-book lookup ('firstKey()').\r
     * O(1) FIFO order matching within a price level ('ArrayDeque.pollFirst()').\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,s=[{question:"Why is ArrayDeque preferred over LinkedList for holding orders at each price level?",shortAnswer:"ArrayDeque provides contiguous memory locality, lower memory overhead (no node pointers), and zero GC node allocation churn, leading to significantly better cache performance and lower latency.",explanation:"High-performance memory layout optimization.",hint:"Contiguous array memory locality and zero node allocation overhead.",level:"Intermediate",codeExample:"NavigableMap<BigDecimal, ArrayDeque<Order>>"},{question:"What is the time complexity of retrieving the top best bid or best ask in a TreeMap-based order book?",shortAnswer:"O(1) amortized when cached, or O(log P) where P is the number of distinct price levels in the Red-Black tree.",explanation:"Efficient lookups for top of book.",hint:"O(log P) navigation in Red-Black tree.",level:"Intermediate",codeExample:"map.firstKey(); // Best price level"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Order Book Data Structures: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"NavigableMap & Queues"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"High-speed memory layout: structuring Bid and Ask books with NavigableMap<BigDecimal, ArrayDeque<Order>> for O(1) price head access."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:i,title:"OrderBookDataStructuresDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"Order Matching Engine FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:o,title:"Module 012_003 Topic 1: Order Book Data Structures",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic1_order_book_data_structures_note.txt"})}),e.jsx(a,{note:"Notice why we use TreeMap with Collections.reverseOrder() for Bids! The highest bidder sits right at the top (firstKey()) for instantaneous O(1) lookup when a seller arrives! — Sukanta Hui"})]})}export{b as default};
