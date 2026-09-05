import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as t}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DerPxfxp.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";const o=`/**\r
 * Java Core Tutorial - Module 012_003: High-Concurrency Order Matching Engine\r
 * Topic 6: Trade Event Broadcasting - Observer & BlockingQueue\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exchange;\r
\r
import java.util.concurrent.ArrayBlockingQueue;\r
import java.util.concurrent.BlockingQueue;\r
\r
public class TradeEventBroadcastingDemo {\r
\r
    public record ExecutionEvent(long tradeId, String symbol, double price, long qty) {}\r
\r
    public static class TradeBroadcaster {\r
        private final BlockingQueue<ExecutionEvent> eventQueue = new ArrayBlockingQueue<>(10_000);\r
\r
        public TradeBroadcaster() {\r
            // Background daemon thread consuming trade events:\r
            Thread consumer = new Thread(() -> {\r
                while (!Thread.currentThread().isInterrupted()) {\r
                    try {\r
                        ExecutionEvent event = eventQueue.take(); // Blocking wait\r
                        System.out.println("   [BROADCAST]: Market Data Ticker -> " + event.symbol() + " matched " + event.qty() + " @ ₹" + event.price());\r
                    } catch (InterruptedException e) {\r
                        Thread.currentThread().interrupt();\r
                        break;\r
                    }\r
                }\r
            }, "MarketData-Dispatcher");\r
            consumer.setDaemon(true);\r
            consumer.start();\r
        }\r
\r
        public void publish(ExecutionEvent event) {\r
            eventQueue.offer(event); // Non-blocking produce\r
        }\r
    }\r
\r
    public static void main(String[] args) throws InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 6: TRADE EVENT BROADCASTING PIPELINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        TradeBroadcaster broadcaster = new TradeBroadcaster();\r
\r
        broadcaster.publish(new ExecutionEvent(1001L, "TCS", 3520.00, 50));\r
        broadcaster.publish(new ExecutionEvent(1002L, "INFY", 1850.50, 100));\r
\r
        Thread.sleep(50); // Allow async consumer to flush output\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 012_003: High-Concurrency Order Matching Engine\r
Topic 6: Trade Event Broadcasting\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. ASYNCHRONOUS BROADCASTING:\r
   - Producer-Consumer architecture using bounded 'ArrayBlockingQueue'.\r
   - The matching engine deposits trade events into the queue in nanoseconds.\r
   - Dedicated consumer threads broadcast events over WebSockets/FIX without slowing down matching.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"Why should market data broadcasting be decoupled from the core matching loop via a BlockingQueue?",shortAnswer:"Because network I/O and serialization are slow; if the matching thread directly sent socket messages to thousands of clients, slow network clients would block the entire exchange.",explanation:"Separation of concerns and backpressure management.",hint:"Prevents slow network I/O from stalling the core order matching loop.",level:"Intermediate",codeExample:"eventQueue.offer(tradeEvent);"},{question:"What is the advantage of using a bounded ArrayBlockingQueue over an unbounded queue?",shortAnswer:"A bounded queue limits maximum memory usage, preventing OutOfMemoryError and applying backpressure if downstream consumers fall behind under sudden traffic spikes.",explanation:"Prevents unchecked memory growth under overload.",hint:"Prevents OOM errors and establishes backpressure limits.",level:"Beginner",codeExample:"new ArrayBlockingQueue<>(10_000)"}];function x(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 012_003 · Topic 6"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Capstone 2: Order Matching Engine"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Trade Event Broadcasting: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"Observer & BlockingQueue"})]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Decoupled event pipeline: broadcasting trade execution events to downstream market data feeds, clearing houses, and user notification listeners."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:o,title:"TradeEventBroadcastingDemo.java",highlightLines:[18,25,34,43]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Order Matching Engine FAQs",questions:i})}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{content:s,title:"Module 012_003 Topic 6: Trade Event Broadcasting",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"012_003_topic6_trade_event_broadcasting_note.txt"})}),e.jsx(a,{note:"The Matching Engine should do NOTHING except match orders! Downstream tasks like notifying traders or updating chart tickers are offloaded asynchronously via BlockingQueue! — Sukanta Hui"})]})}export{x as default};
