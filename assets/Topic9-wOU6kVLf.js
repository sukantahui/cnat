import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as r}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as a}from"./PlainTextPrint-C08xhKA4.js";import{T as t}from"./TeacherSukantaHui-BaJcBHAy.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";const s=`/**\r
 * Java Core Tutorial - Module 005_003: Buffered Streams, BufferedReader & PrintWriter\r
 * Topic 9: In-Depth Benchmark: BufferedReader vs Scanner (Performance & Throughput)\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.io;\r
\r
import java.io.BufferedReader;\r
import java.io.StringReader;\r
import java.util.Scanner;\r
\r
public class BufferedReaderVsScannerBenchmarkDemo {\r
\r
    public static void main(String[] args) throws Exception {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 9: BufferedReader vs Scanner BENCHMARK - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        // Generate 50,000 lines in memory:\r
        StringBuilder sb = new StringBuilder();\r
        for (int i = 0; i < 50_000; i++) {\r
            sb.append("Trainee_").append(i).append(" Score_95 Barrackpore_Hub Active\\n");\r
        }\r
        String bigDataPayload = sb.toString();\r
\r
        // BENCHMARK 1: BufferedReader (Fast, synchronized 8KB buffer, no regex):\r
        long t1 = System.nanoTime();\r
        int brLines = 0;\r
        try (BufferedReader br = new BufferedReader(new StringReader(bigDataPayload))) {\r
            String line;\r
            while ((line = br.readLine()) != null) {\r
                brLines++;\r
            }\r
        }\r
        long brDuration = System.nanoTime() - t1;\r
\r
        // BENCHMARK 2: Scanner (Heavy regex pattern matcher, 1KB default buffer):\r
        long t2 = System.nanoTime();\r
        int scLines = 0;\r
        try (Scanner sc = new Scanner(new StringReader(bigDataPayload))) {\r
            while (sc.hasNextLine()) {\r
                String line = sc.nextLine();\r
                scLines++;\r
            }\r
        }\r
        long scDuration = System.nanoTime() - t2;\r
\r
        System.out.println(">>> 50,000 LINES BENCHMARK RESULTS:");\r
        System.out.printf("  - BufferedReader Duration : %7.2f ms (Processed %d lines)%n", brDuration / 1_000_000.0, brLines);\r
        System.out.printf("  - Scanner Duration        : %7.2f ms (Processed %d lines)%n", scDuration / 1_000_000.0, scLines);\r
        System.out.printf("  - BufferedReader Speedup  : ~%.1fx FASTER!%n", (double) scDuration / brDuration);\r
\r
        System.out.println("\\n>>> WHY BufferedReader IS DRAMATICALLY FASTER:");\r
        System.out.println("  1. Buffer Size: BufferedReader has an 8KB buffer (vs Scanner's 1KB buffer).");\r
        System.out.println("  2. Regex Engine: Scanner executes regular expression matches on every token check.");\r
        System.out.println("  3. Memory Footprint: Scanner allocates numerous Matcher and MatchResult objects.");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,i=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 005_003: Buffered Streams & PrintWriter\r
Topic 9: BufferedReader vs Scanner Benchmark\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. PERFORMANCE COMPARISON:\r
   - 'BufferedReader': 8KB buffer, pure char search, ~10x faster, thread-safe.\r
   - 'Scanner': 1KB buffer, regex pattern engine, parses primitives, slower.\r
   - Rule of Thumb: Use Scanner for small user console inputs; use BufferedReader for files and big data.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,o=[{question:"Why is 'BufferedReader' consistently 5x to 20x faster than 'Scanner' for reading large text inputs?",shortAnswer:"1. Buffer Size: BufferedReader allocates an 8KB buffer (8192 chars) compared to Scanner's smaller 1KB buffer. 2. Zero Regex Overhead: BufferedReader performs simple character array boundary scans, whereas Scanner evaluates compiled regular expressions ('java.util.regex.Pattern') for every token and line delimiter. 3. Allocation: Scanner creates temporary Matcher objects in memory on every call.",explanation:"This is why competitive programmers and big data ETL engines universally use BufferedReader.",hint:"8KB vs 1KB buffer size, zero regex engine overhead, and minimal garbage collection allocation.",level:"Intermediate",codeExample:"// Competitive Programming Fast I/O: BufferedReader br = new BufferedReader(...);"}];function h(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 005_003 · Topic 9"}),e.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Performance Benchmark"})]}),e.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["In-Depth Benchmark: ",e.jsx("code",{className:"text-emerald-400 font-mono",children:"BufferedReader"})," vs ",e.jsx("code",{className:"text-rose-400 font-mono",children:"Scanner"})," Throughput"]}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Execute high-throughput benchmarks: comparing 8KB buffered character parsing against regex-driven Scanner tokenization for big data workloads and competitive programming."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(r,{fileModule:s,title:"BufferedReaderVsScannerBenchmarkDemo.java",highlightLines:[7,10,20,21,23,24,30,31,32,33,40,41]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Benchmark FAQs",questions:o})}),e.jsx("section",{className:"space-y-4",children:e.jsx(a,{content:i,title:"Module 005_003 Topic 9: Reader vs Scanner Benchmark",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"005_003_topic9_reader_vs_scanner_benchmark_note.txt"})}),e.jsx(t,{note:"In competitive programming or when parsing millions of banking rows, Scanner will give you 'Time Limit Exceeded (TLE)'! Always use BufferedReader for fast I/O! — Sukanta Hui"})]})}export{h as default};
