import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{J as e}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-CEPuAfsb.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DGCamHnX.js";const o=`/**\r
 * Java Core Tutorial - Module 011_005: Batch Updates & DAO Pattern\r
 * Topic 3: Tuning Batch Sizes - Finding the Golden Chunk Size\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.jdbc;\r
\r
import java.sql.Connection;\r
import java.sql.PreparedStatement;\r
import java.sql.SQLException;\r
import java.util.List;\r
\r
public class TuningBatchSizesDemo {\r
\r
    public static final int BATCH_CHUNK_SIZE = 1000; // Industry Golden Batch Size\r
\r
    public static void insertLargeStudentRoster(Connection conn, List<String> studentNames) throws SQLException {\r
        String sql = "INSERT INTO student_roster (name) VALUES (?)";\r
        conn.setAutoCommit(false);\r
\r
        try (PreparedStatement pstmt = conn.prepareStatement(sql)) {\r
            int count = 0;\r
            for (String name : studentNames) {\r
                pstmt.setString(1, name);\r
                pstmt.addBatch();\r
                count++;\r
\r
                // Execute and flush when chunk threshold is reached:\r
                if (count % BATCH_CHUNK_SIZE == 0) {\r
                    pstmt.executeBatch();\r
                    conn.commit(); // Intermediate transaction commit\r
                    System.out.println("   [CHUNK FLUSH]: Processed " + count + " records...");\r
                }\r
            }\r
\r
            // Flush any remaining records that did not fill a full batch chunk:\r
            if (count % BATCH_CHUNK_SIZE != 0) {\r
                pstmt.executeBatch();\r
                conn.commit();\r
                System.out.println("   [FINAL FLUSH]: Completed remaining records. Total: " + count);\r
            }\r
        }\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 3: TUNING BATCH SIZES - BARRACKPORE ACADEMY");\r
        System.out.println("==========================================================================\\n");\r
\r
        System.out.println(">>> WHY BATCH CHUNK TUNING MATTERS:");\r
        System.out.println("  1. Too Small (e.g. 5 rows)     : Still too many network roundtrips.");\r
        System.out.println("  2. Too Large (e.g. 500,000 rows): Driver memory consumption causes Java OutOfMemoryError;");\r
        System.out.println("                                   Database server buffer locks increase dramatically.");\r
        System.out.println("  3. The Golden Sweet Spot       : 500 to 2,000 rows per batch chunk balances RAM and TCP payload sizes!");\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}\r
`,s=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 011_005: Batch Updates & DAO Pattern\r
Topic 3: Tuning Batch Sizes\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. THE CHUNKING PATTERN:\r
   'if (++count % BATCH_SIZE == 0) {\r
        pstmt.executeBatch();\r
        conn.commit();\r
    }'\r
\r
2. DON'T FORGET THE TAIL FLUSH:\r
   - Always check 'if (count % BATCH_SIZE != 0)' after the loop to flush trailing records!\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================\r
`,i=[{question:"What is the typical recommended batch chunk size for JDBC bulk insertions?",shortAnswer:"500 to 1,000 rows per batch chunk.",explanation:"Provides optimal throughput without overwhelming client JVM RAM or database transaction logs.",hint:"500 to 1,000 rows.",level:"Beginner",codeExample:"int BATCH_SIZE = 1000;"},{question:"Why is a tail flush necessary when batching records in fixed chunk intervals?",shortAnswer:"Because the total number of records processed may not be an exact multiple of the chunk size (e.g. 2,450 records with a batch size of 1,000 leaves 450 unflushed records in the buffer at the end of the loop).",explanation:"Without a tail flush, the remaining records will never be executed.",hint:"Flushes the remaining records that did not make up a full batch interval.",level:"Beginner",codeExample:"if (count % BATCH_SIZE != 0) pstmt.executeBatch();"}];function S(){return t.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[t.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex items-center gap-3",children:[t.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 011_005 · Topic 3"}),t.jsx("span",{className:"px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-xs font-semibold rounded-full",children:"Batch Updates & DAO Pattern"})]}),t.jsxs("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:["Tuning Batch Sizes: ",t.jsx("code",{className:"text-emerald-400 font-mono",children:"Finding the Golden Chunk Size"})]}),t.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Balancing RAM and network packets: why 500 to 1,000 items is the industry sweet spot for high-throughput batching."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[t.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),t.jsx(e,{fileModule:o,title:"TuningBatchSizesDemo.java",highlightLines:[18,25,34,43]})]}),t.jsx("section",{className:"space-y-4",children:t.jsx(n,{title:"Batch Updates & DAO FAQs",questions:i})}),t.jsx("section",{className:"space-y-4",children:t.jsx(r,{content:s,title:"Module 011_005 Topic 3: Tuning Batch Sizes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"011_005_topic3_tuning_batch_sizes_note.txt"})}),t.jsx(a,{note:"Don't try to batch 1,000,000 records in a single batch! Your JVM heap will run out of memory! Chunk your data into batches of 500 or 1,000 rows, execute each batch, commit, and repeat! — Sukanta Hui"})]})}export{S as default};
