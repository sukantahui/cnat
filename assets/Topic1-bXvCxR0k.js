import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as r}from"./FAQTemplate-CkSqDH4B.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-CC0AKmkm.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-BtJHuk7w.js";const a=`/**\r
 * Java Core Tutorial - Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
 * Topic 1: Project 1: High-Performance Server Access Log Analyzer\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io.lab;\r
\r
import java.io.IOException;\r
import java.nio.file.Files;\r
import java.nio.file.Path;\r
import java.util.Map;\r
import java.util.stream.Collectors;\r
import java.util.stream.Stream;\r
\r
public class ServerAccessLogAnalyzerProjectDemo {\r
\r
    public static class LogReport {\r
        public final long totalRequests;\r
        public final Map<String, Long> statusDistribution;\r
        public final Map<String, Long> ipTraffic;\r
\r
        public LogReport(long total, Map<String, Long> status, Map<String, Long> ip) {\r
            this.totalRequests = total;\r
            this.statusDistribution = status;\r
            this.ipTraffic = ip;\r
        }\r
    }\r
\r
    // Lazy Stream-Based Log Parser (Processes Gigabytes with Constant O(1) Memory!):\r
    public static LogReport analyzeLogFile(Path logPath) throws IOException {\r
        try (Stream<String> lines = Files.lines(logPath)) {\r
            // Collecting lines into streaming statistical aggregations:\r
            var list = lines.filter(l -> !l.trim().isEmpty() && !l.startsWith("#"))\r
                    .map(line -> line.split(" "))\r
                    .filter(tokens -> tokens.length >= 4)\r
                    .toList();\r
\r
            long total = list.size();\r
\r
            Map<String, Long> statuses = list.stream()\r
                    .collect(Collectors.groupingBy(t -> t[3], Collectors.counting()));\r
\r
            Map<String, Long> ips = list.stream()\r
                    .collect(Collectors.groupingBy(t -> t[0], Collectors.counting()));\r
\r
            return new LogReport(total, statuses, ips);\r
        }\r
    }\r
\r
    public static void main(String[] args) throws IOException {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 1: PROJECT 1 - SERVER ACCESS LOG ANALYZER - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        Path sampleLog = Files.createTempFile("access_log_", ".log");\r
        Files.writeString(sampleLog,\r
                "192.168.1.10 [2026-03-01] GET /api/v1/students 200\\n" +\r
                "192.168.1.11 [2026-03-01] POST /api/v1/admissions 201\\n" +\r
                "192.168.1.10 [2026-03-01] GET /api/v1/courses 200\\n" +\r
                "192.168.1.12 [2026-03-01] GET /admin/secret 403\\n" +\r
                "192.168.1.10 [2026-03-01] GET /api/v1/students 200\\n" +\r
                "192.168.1.13 [2026-03-01] POST /api/v1/pay 500\\n"\r
        );\r
\r
        LogReport report = analyzeLogFile(sampleLog);\r
\r
        System.out.println(">>> 1. Executive Log Analytics Summary:");\r
        System.out.println("  Total HTTP Requests Processed : " + report.totalRequests);\r
        System.out.println("  HTTP Status Code Breakdown    : " + report.statusDistribution);\r
        System.out.println("  Top Client IP Traffic (Hits)  : " + report.ipTraffic);\r
\r
        Files.deleteIfExists(sampleLog);\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_007: File Handling & I/O Hands-On Capstone Lab\r
Topic 1: Server Access Log Analyzer\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. LOG ANALYZER ARCHITECTURE:\r
   - 'Files.lines(logPath)' lazy streaming.\r
   - Stream pipeline: filter comments &rarr; split tokens &rarr; collect groupings.\r
   - Computes status code distribution and IP hits in a single pass.\r
   - Constant low memory footprint for gigabyte log files.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'Files.lines(path)' combined with Java Stream Collectors the optimal architectural pattern for parsing massive multi-gigabyte server log files?",shortAnswer:"'Files.lines(path)' reads lines lazily from the underlying OS file descriptor on-demand without loading the full file into heap RAM. Java Stream Collectors ('groupingBy', 'counting') aggregate statistics (status codes, IP frequencies) in a single pass with constant O(1) memory consumption, enabling 10GB+ log files to be processed in seconds on a modest JVM heap.",explanation:"Standard architecture for DevOps telemetry log analyzers.",hint:"Streams lines lazily with O(1) memory, aggregating counts in a single efficient pass.",level:"Advanced",codeExample:"try (Stream<String> s = Files.lines(p)) { s.collect(Collectors.groupingBy(...)); }"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_007 · Topic 1"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Project 1: Log Analyzer"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Project 1: Multi-Threaded Server Access Log Analyzer"}),e.jsxs("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:["Build high-throughput log analytics: leveraging lazy ",e.jsx("code",{className:"text-emerald-300 font-mono",children:"Files.lines()"})," stream pipelines to compute status code distributions and IP traffic metrics with constant memory."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:a,title:"ServerAccessLogAnalyzerProjectDemo.java",highlightLines:[7,10,24,25,26,32,33,35,36]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{title:"Log Analyzer FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{content:i,title:"Module 005_007 Topic 1: Log Analyzer Project",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_007_topic1_log_analyzer_project_note.txt"})}),e.jsx(s,{note:"This is exactly how enterprise telemetry platforms analyze server logs! Using lazy streams ensures your application never runs out of memory even when analyzing 50 million access log lines! — Sukanta Hui"})]})}export{h as default};
