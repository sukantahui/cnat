import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const a=`/**\r
 * Java Core Tutorial - Module 005_004: Modern Java NIO.2\r
 * Topic 15: java.nio.file.WatchService: Real-Time Directory Event Monitoring\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.nio;\r
\r
import java.io.IOException;\r
import java.nio.file.FileSystems;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.nio.file.StandardWatchEventKinds;\r
import java.nio.file.WatchEvent;\r
import java.nio.file.WatchKey;\r
import java.nio.file.WatchService;\r
import java.util.concurrent.TimeUnit;\r
\r
public class DirectoryWatchServiceEventDemo {\r
\r
    public static void main(String[] args) throws IOException, InterruptedException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 15: java.nio.file.WatchService - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path watchDir = Files.createTempDirectory("watch_service_lab_");\r
        System.out.println(">>> Monitoring Directory: " + watchDir);\r
\r
        // 1. Create and register WatchService:\r
        try (WatchService watcher = FileSystems.getDefault().newWatchService()) {\r
            watchDir.register(watcher,\r
                    StandardWatchEventKinds.ENTRY_CREATE,\r
                    StandardWatchEventKinds.ENTRY_MODIFY,\r
                    StandardWatchEventKinds.ENTRY_DELETE\r
            );\r
            System.out.println("  [WATCHER REGISTERED] Listening for CREATE, MODIFY, DELETE events...");\r
\r
            // 2. Triggering file event asynchronously:\r
            Path newFile = watchDir.resolve("invoice_9901.json");\r
            Files.writeString(newFile, "{ "invoiceId": 9901, "branch": "Barrackpore" }");\r
\r
            // 3. Poll for event key (with timeout):\r
            WatchKey key = watcher.poll(2, TimeUnit.SECONDS);\r
            if (key != null) {\r
                for (WatchEvent<?> event : key.pollEvents()) {\r
                    WatchEvent.Kind<?> kind = event.kind();\r
                    Path eventPath = (Path) event.context();\r
                    System.out.printf("  [EVENT DETECTED] Kind: %-15s | Affected File: %s%n", kind.name(), eventPath);\r
                }\r
                key.reset(); // Mandatory reset to continue receiving events!\r
            }\r
\r
            // Cleanup:\r
            Files.deleteIfExists(newFile);\r
        }\r
\r
        Files.deleteIfExists(watchDir);\r
\r
        System.out.println("\\n>>> USE CASES FOR WatchService:");\r
        System.out.println("  1. Hot Reloading: Automatically reloading Spring configuration files when edited on disk.");\r
        System.out.println("  2. Ingestion Dropboxes: Automatically processing Excel/CSV invoices dropped into a folder.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_004: Modern Java NIO.2\r
Topic 15: WatchService Directory Monitoring\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. WATCHSERVICE WORKFLOW:\r
   - 'WatchService watcher = FileSystems.getDefault().newWatchService()'.\r
   - 'path.register(watcher, ENTRY_CREATE, ENTRY_MODIFY, ENTRY_DELETE)'.\r
   - 'WatchKey key = watcher.take()' (blocking) or 'watcher.poll(timeout)'.\r
   - Iterate 'key.pollEvents()'.\r
   - Mandatory: call 'key.reset()' to stay in ready state.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"What is the purpose of 'WatchKey.reset()' when monitoring folders with 'WatchService'?",shortAnswer:"When an event occurs, the registered 'WatchKey' is transitioned into a 'signaled' state and no further events for that directory will be queued. Calling 'key.reset()' resets the key back to the 'ready' state, allowing the WatchService to resume queuing subsequent file events.",explanation:"If key.reset() is omitted, the watcher stops receiving notifications after the first event.",hint:"Resets the key from signaled state back to ready state so subsequent events can be captured.",level:"Intermediate",codeExample:"boolean valid = key.reset(); if (!valid) break; // Directory no longer accessible"}];function y(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_004 · Topic 15"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Directory Watcher"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:[e.jsx("code",{className:"text-emerald-400 font-mono",children:"java.nio.file.WatchService"}),": Real-Time Directory Event Monitoring"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Build reactive filesystem listeners: registering native OS directory watchers, intercepting creation and modification events, and managing WatchKey state resets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"DirectoryWatchServiceEventDemo.java",highlightLines:[7,10,20,21,22,23,24,30,31,33,34,37]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"WatchService FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 005_004 Topic 15: WatchService Monitoring",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_004_topic15_watch_service_monitoring_note.txt"})}),e.jsx(i,{note:"WatchService is how IDEs like VS Code auto-detect file changes and how Spring Boot DevTools implements live reload! It hooks directly into the Windows or Linux kernel event notifications! — Sukanta Hui"})]})}export{y as default};
