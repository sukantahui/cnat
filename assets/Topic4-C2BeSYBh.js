import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as n}from"./JavaFileLoader-BfBG3xz_.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const r=`/**\r
 * Java Core Tutorial - Module 002_011: SOLID Object-Oriented Design Principles in Java\r
 * Topic 4: Implementing OCP Using Interfaces & Polymorphism Instead of If-Else Ladders\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.solid;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class OcpStrategyPipelineDemo {\r
\r
    // 1. Extensible Notification Plugin Interface\r
    public interface NotificationChannel {\r
        void sendAlert(String recipient, String message);\r
    }\r
\r
    public static class SmsNotificationChannel implements NotificationChannel {\r
        public void sendAlert(String recipient, String message) {\r
            System.out.printf("  [SMS CHANNEL] SMS to %s: %s\\n", recipient, message);\r
        }\r
    }\r
\r
    public static class WhatsAppNotificationChannel implements NotificationChannel {\r
        public void sendAlert(String recipient, String message) {\r
            System.out.printf("  [WHATSAPP CHANNEL] WhatsApp message to %s: %s\\n", recipient, message);\r
        }\r
    }\r
\r
    // 2. Broadcast Engine (Closed for modification - Open to new channels)\r
    public static class BroadcastNotificationEngine {\r
        private final List<NotificationChannel> channels = new ArrayList<>();\r
\r
        public void registerChannel(NotificationChannel channel) {\r
            channels.add(channel);\r
        }\r
\r
        public void broadcast(String trainee, String announcement) {\r
            System.out.println(">>> Broadcasting Announcement to: " + trainee);\r
            for (NotificationChannel channel : channels) {\r
                channel.sendAlert(trainee, announcement); // Polymorphic dispatch!\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: OCP NOTIFICATION PIPELINE - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        BroadcastNotificationEngine engine = new BroadcastNotificationEngine();\r
        engine.registerChannel(new SmsNotificationChannel());\r
        engine.registerChannel(new WhatsAppNotificationChannel());\r
\r
        engine.broadcast("Swadeep Paul", "Classes resume 10 AM at Barrackpore Central Hub!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 002_011: SOLID Design Principles\r
Topic 4: OCP Plugin Architecture\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. OCP PLUGIN PIPELINE:\r
   - Engine depends only on 'Channel' interface.\r
   - New channels registered dynamically at runtime.\r
   - Zero 'instanceof' or 'if-else' ladders.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"How does the Strategy Pattern demonstrate the Open/Closed Principle in notification engines?",shortAnswer:"The engine maintains a list of 'NotificationChannel' interfaces and broadcasts polymorphically. Adding support for Telegram, Discord, or Slack requires writing new channel implementations without modifying the Broadcast engine code.",explanation:"This is the architecture powering modern plugin systems and event pipelines.",hint:"Registers interface plugins and loops polymorphically without if-else checks.",level:"Intermediate",codeExample:"engine.registerChannel(new SlackChannel()); // Zero engine code modification"}];function f(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsx("style",{children:`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(8px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        `}),e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6 animate-fade-in",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 002_011 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 text-xs font-semibold rounded-full",children:"Plugin Architecture"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Implementing OCP: Notification Pipeline Architecture"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build an enterprise notification pipeline utilizing OCP and Strategy Patterns: dynamically registering SMS, WhatsApp, and Slack drivers with zero engine modification."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(n,{fileModule:r,title:"OcpStrategyPipelineDemo.java",highlightLines:[14,18,24,30,38,48]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(t,{title:"OCP Pipeline FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(i,{content:s,title:"Module 002_011 Topic 4: OCP Pipeline Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"002_011_topic4_ocp_pipeline_note.txt"})}),e.jsx(a,{note:"Notice how the Broadcast engine doesn't care whether you have 2 channels or 20 channels. It simply calls .sendAlert() on each interface plugin. That is the beauty of OCP! — Sukanta Hui"})]})}export{f as default};
