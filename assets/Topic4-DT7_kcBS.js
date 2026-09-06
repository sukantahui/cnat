import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{J as t}from"./JavaFileLoader-BfBG3xz_.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-DDN87fI5.js";import"./JavaCodeBlock-BwsLxS3r.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";const i=`/**\r
 * Java Core Tutorial - Module 004_006: Exception Handling Real-World Lab\r
 * Topic 4: Handling Partial Batch Failures & Atomic Rollback Signals in Enterprise Java\r
 * Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
 */\r
\r
package com.coderaccotax.javatutorial.exceptions;\r
\r
import java.util.ArrayList;\r
import java.util.List;\r
\r
public class PartialBatchFailureRollbackDemo {\r
\r
    public static class StudentAdmissionItem {\r
        public final String name;\r
        public final int fee;\r
        public StudentAdmissionItem(String name, int fee) {\r
            this.name = name;\r
            this.fee = fee;\r
        }\r
    }\r
\r
    public static class BatchRollbackException extends Exception {\r
        private final int failedIndex;\r
        private final List<String> successfullyEnrolledBeforeRollback;\r
\r
        public BatchRollbackException(String msg, int index, List<String> enrolled, Throwable cause) {\r
            super(msg, cause);\r
            this.failedIndex = index;\r
            this.successfullyEnrolledBeforeRollback = new ArrayList<>(enrolled);\r
        }\r
\r
        public int getFailedIndex() { return failedIndex; }\r
        public List<String> getSuccessfullyEnrolledBeforeRollback() { return successfullyEnrolledBeforeRollback; }\r
    }\r
\r
    public static void executeAtomicBatchAdmission(List<StudentAdmissionItem> batch) throws BatchRollbackException {\r
        System.out.println("  [BATCH START] Processing batch of " + batch.size() + " admissions atomically...");\r
        List<String> committedStudents = new ArrayList<>();\r
\r
        for (int i = 0; i < batch.size(); i++) {\r
            StudentAdmissionItem item = batch.get(i);\r
            try {\r
                if (item.fee <= 0) {\r
                    throw new IllegalArgumentException("Invalid fee for student: " + item.name);\r
                }\r
                committedStudents.add(item.name);\r
                System.out.println("    [INSERTED] Item #" + (i + 1) + ": " + item.name + " (" + item.fee + " INR)");\r
            } catch (Exception itemEx) {\r
                System.out.printf("  [BATCH ERROR AT ITEM #%d] %s%n", i + 1, itemEx.getMessage());\r
                System.out.println("  [ROLLBACK INITIATED] Reverting all previous " + committedStudents.size() + " inserts...");\r
\r
                // Execute compensatory rollback logic:\r
                for (String rolledBack : committedStudents) {\r
                    System.out.println("    [REVERTED] Deleted provisional record for: " + rolledBack);\r
                }\r
\r
                throw new BatchRollbackException(\r
                        "Batch transaction aborted and rolled back due to error at index " + i,\r
                        i,\r
                        committedStudents,\r
                        itemEx\r
                );\r
            }\r
        }\r
\r
        System.out.println("  [BATCH COMMITTED] All records processed successfully.\\n");\r
    }\r
\r
    public static void main(String[] args) {\r
        System.out.println("==========================================================================");\r
        System.out.println(" TOPIC 4: ATOMIC BATCH ROLLBACK SIGNALS - BARRACKPORE");\r
        System.out.println("==========================================================================\\n");\r
\r
        List<StudentAdmissionItem> batch = new ArrayList<>();\r
        batch.add(new StudentAdmissionItem("Swadeep Paul", 8000));\r
        batch.add(new StudentAdmissionItem("Tuhina Das", 8000));\r
        batch.add(new StudentAdmissionItem("Corrupted Entry", -500)); // Will trigger rollback!\r
        batch.add(new StudentAdmissionItem("Abhronila Das", 8000));\r
\r
        try {\r
            executeAtomicBatchAdmission(batch);\r
        } catch (BatchRollbackException e) {\r
            System.out.println("\\n>>> SUPERVISOR AUDIT REPORT:");\r
            System.out.println("  Audit Message    : " + e.getMessage());\r
            System.out.println("  Failed Index     : " + e.getFailedIndex());\r
            System.out.println("  Reverted Students: " + e.getSuccessfullyEnrolledBeforeRollback());\r
            System.out.println("  Root Cause       : " + e.getCause().getMessage());\r
        }\r
\r
        System.out.println("\\n==========================================================================");\r
    }\r
}`,o=`================================================================================\r
JAVA CORE TUTORIAL - QUICK REVISION GUIDE\r
Module 004_006: Exception Handling Real-World Lab\r
Topic 4: Batch Failures & Rollback\r
Educator: Sukanta Hui | Academic Hub: Barrackpore, West Bengal\r
================================================================================\r
\r
1. BATCH ATOMICITY PATTERN:\r
   - Track committed items in a provisional list.\r
   - On error: catch exception, loop to compensate/revert committed items.\r
   - Throw specialized 'BatchRollbackException' with root cause and audit details.\r
   - Prevents partial phantom data corruption.\r
\r
================================================================================\r
Classroom Practice: Barrackpore Academy | Mentor: Sukanta Hui\r
================================================================================`,s=[{question:"How do custom rollback exceptions preserve transaction atomicity when processing bulk data batches?",shortAnswer:"When an individual item inside a batch loop fails, the catch block intercepts the item error, executes compensatory rollback operations on previously processed items in that batch, and throws a specialized 'BatchRollbackException' carrying the list of rolled-back items and root cause for supervisory auditing.",explanation:"Standard pattern in bulk payroll, batch invoice processing, and ETL pipelines.",hint:"Reverts previous batch items upon error and throws a BatchRollbackException carrying audit metadata.",level:"Intermediate",codeExample:"catch (Exception e) { rollbackAll(processedList); throw new BatchRollbackEx(e); }"}];function b(){return e.jsxs("div",{className:"space-y-12 px-4 md:px-8 py-8 text-slate-200 bg-slate-900 min-h-screen",children:[e.jsxs("header",{className:"space-y-4 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"px-3 py-1 bg-sky-500/10 text-sky-400 border border-sky-500/20 text-xs font-semibold rounded-full uppercase tracking-wider",children:"Module 004_006 · Topic 4"}),e.jsx("span",{className:"px-3 py-1 bg-rose-500/10 text-rose-400 border border-rose-500/20 text-xs font-semibold rounded-full",children:"Batch Atomicity"})]}),e.jsx("h1",{className:"text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight",children:"Handling Partial Batch Failures with Atomic Rollback Signals"}),e.jsx("p",{className:"text-base md:text-lg text-slate-400 leading-relaxed max-w-4xl",children:"Implement robust transactional pipelines: catching partial batch errors, executing compensatory rollbacks, and propagating structured audit metadata to supervisors."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Hands-On Java Demo Code"]}),e.jsx(t,{fileModule:i,title:"PartialBatchFailureRollbackDemo.java",highlightLines:[7,15,17,28,38,39,42,43,46]})]}),e.jsx("section",{className:"space-y-4",children:e.jsx(n,{title:"Batch Rollback FAQs",questions:s})}),e.jsx("section",{className:"space-y-4",children:e.jsx(r,{content:o,title:"Module 004_006 Topic 4: Batch Rollbacks",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"004_006_topic4_batch_rollback_note.txt"})}),e.jsx(a,{note:"If you are importing 100 student invoices from Excel and row 50 has corrupted data, you must either rollback all 49 previous rows or log the failure cleanly! Never leave half the data in the database! — Sukanta Hui"})]})}export{b as default};
