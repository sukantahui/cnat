import{b as a,j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as i}from"./CFileLoader-Clw1BKmX.js";import{F as l}from"./FAQTemplate-DmdkpHR-.js";import{P as d}from"./PlainTextPrint-CS96sBe2.js";import{T as f}from"./TeacherSukantaHui-Cvdemxlb.js";import"./CodeBlock-D970yTe-.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-CBbStT7G.js";import"./EditableCCodeBlock-ZnkKtlGd.js";import"./vendor-monaco-CEXMEfXF.js";const c=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
#include <errno.h>\r
\r
#define SAMPLE_FILE "diagnostics_sample.txt"\r
\r
/* Function demonstrating why while(!feof(fp)) is a dangerous antipattern */\r
void demonstrateFeofBug(void) {\r
    printf("-----------------------------------------------------\\n");\r
    printf("1. THE DANGEROUS 'while (!feof(fp))' TRAP\\n");\r
    printf("-----------------------------------------------------\\n");\r
\r
    /* Create a small 3-line file */\r
    FILE *fpWrite = fopen(SAMPLE_FILE, "w");\r
    if (fpWrite != NULL) {\r
        fputs("Alpha\\nBeta\\nGamma\\n", fpWrite);\r
        fclose(fpWrite);\r
    }\r
\r
    FILE *fp = fopen(SAMPLE_FILE, "r");\r
    if (fp == NULL) {\r
        perror("Error opening file");\r
        return;\r
    }\r
\r
    printf(">>> Incorrect approach (while (!feof(fp))):\\n");\r
    char buffer[50];\r
    int lineCount = 0;\r
\r
    /* WRONG: feof() only returns true AFTER a read has ALREADY FAILED past EOF */\r
    while (!feof(fp)) {\r
        if (fgets(buffer, sizeof(buffer), fp) != NULL) {\r
            /* If we don't check fgets return value, the last line is duplicated! */\r
            buffer[strcspn(buffer, "\\r\\n")] = '\\0';\r
            printf("    Read Line [%d]: '%s'\\n", ++lineCount, buffer);\r
        } else {\r
            printf("    [feof check failed to prevent loop body! fgets returned NULL at EOF]\\n");\r
        }\r
    }\r
    fclose(fp);\r
\r
    printf("\\n>>> Correct idiomatic approach (while (fgets(...) != NULL)):\\n");\r
    fp = fopen(SAMPLE_FILE, "r");\r
    if (fp != NULL) {\r
        lineCount = 0;\r
        while (fgets(buffer, sizeof(buffer), fp) != NULL) {\r
            buffer[strcspn(buffer, "\\r\\n")] = '\\0';\r
            printf("    Read Line [%d]: '%s'\\n", ++lineCount, buffer);\r
        }\r
        fclose(fp);\r
    }\r
}\r
\r
/* Function demonstrating ferror, clearerr, and perror */\r
void demonstrateStreamDiagnostics(void) {\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf("2. STREAM DIAGNOSTICS (ferror, clearerr, perror, strerror)\\n");\r
    printf("-----------------------------------------------------\\n");\r
\r
    /* Attempt to open a non-existent file in read-only mode */\r
    const char *nonExistent = "non_existent_system_file.xyz";\r
    printf(">>> Step A: Attempting to open non-existent file '%s'...\\n", nonExistent);\r
    FILE *fpBad = fopen(nonExistent, "r");\r
    if (fpBad == NULL) {\r
        printf("    fopen returned NULL.\\n");\r
        printf("    errno code: %d\\n", errno);\r
        printf("    strerror() output: %s\\n", strerror(errno));\r
        printf("    perror() output:   ");\r
        perror("fopen failed");\r
    }\r
\r
    /* Step B: Attempt an illegal write on a read-only stream */\r
    printf("\\n>>> Step B: Attempting illegal write on read-only stream '%s'...\\n", SAMPLE_FILE);\r
    FILE *fpReadOnly = fopen(SAMPLE_FILE, "r");\r
    if (fpReadOnly != NULL) {\r
        /* Intentionally write to a read-only file */\r
        int result = fputs("Illegal write payload", fpReadOnly);\r
        \r
        if (result == EOF && ferror(fpReadOnly)) {\r
            printf("    fputs returned EOF! ferror(fp) is TRUE (non-zero).\\n");\r
            perror("    Stream Error Detected");\r
\r
            /* Inspect error flag */\r
            printf("    ferror(fpReadOnly) before clearerr: %d\\n", ferror(fpReadOnly));\r
\r
            /* Clear error state */\r
            clearerr(fpReadOnly);\r
            printf("    clearerr(fpReadOnly) called.\\n");\r
            printf("    ferror(fpReadOnly) after clearerr:  %d (Clean)\\n", ferror(fpReadOnly));\r
        }\r
        fclose(fpReadOnly);\r
    }\r
}\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  C Stream Diagnostics: Error Handling, feof, & ferror\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    demonstrateFeofBug();\r
    demonstrateStreamDiagnostics();\r
\r
    /* Clean up scratch file */\r
    remove(SAMPLE_FILE);\r
\r
    printf("\\n=== Stream Diagnostics Demonstration Completed ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,p=`/**\r
 * SafeEofLoopDemo.c\r
 * Demonstrates the infamous "while (!feof(fp))" one-off bug vs\r
 * the industry-standard "while (fread / fgets / fscanf)" loop pattern.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("     CODER & ACCOTAX - THE FEOF() ONE-OFF TRAP LAB      \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *test_file = "eof_trap_demo.txt";\r
\r
    // 1. Create a simple 2-line file\r
    FILE *fp = fopen(test_file, "w");\r
    if (fp == NULL) {\r
        perror("Error creating file");\r
        return 1;\r
    }\r
    fprintf(fp, "Line 1: Swadeep\\n");\r
    fprintf(fp, "Line 2: Tuhina\\n");\r
    fclose(fp);\r
\r
    // 2. THE BUGGY PATTERN: while (!feof(fp))\r
    printf("--- 1. THE BUGGY PATTERN (while (!feof(fp))) ---\\n");\r
    fp = fopen(test_file, "r");\r
    if (fp == NULL) return 1;\r
\r
    char buffer[64];\r
    int buggy_iterations = 0;\r
    // WHY THIS IS WRONG: feof() only becomes true AFTER an attempted read fails!\r
    while (!feof(fp)) {\r
        buggy_iterations++;\r
        fgets(buffer, sizeof(buffer), fp);\r
        printf("  [Loop %d] Read: %s", buggy_iterations, buffer);\r
    }\r
    fclose(fp);\r
    printf("  [NOTICE] Notice how the last line was printed TWICE or with stale data!\\n\\n");\r
\r
    // 3. THE CORRECT SAFE PATTERN: Test read operation return value directly!\r
    printf("--- 2. THE CORRECT INDUSTRIAL PATTERN (while (fgets(...) != NULL)) ---\\n");\r
    fp = fopen(test_file, "r");\r
    if (fp == NULL) return 1;\r
\r
    int correct_iterations = 0;\r
    while (fgets(buffer, sizeof(buffer), fp) != NULL) {\r
        correct_iterations++;\r
        printf("  [Loop %d] Read: %s", correct_iterations, buffer);\r
    }\r
\r
    // Now inspect feof() to confirm why loop stopped\r
    if (feof(fp)) {\r
        printf("  [CONFIRMED] Loop terminated cleanly at true End-of-File (EOF).\\n");\r
    } else if (ferror(fp)) {\r
        printf("  [ERROR] Loop terminated due to physical stream error!\\n");\r
    }\r
\r
    fclose(fp);\r
\r
    // Cleanup\r
    remove(test_file);\r
    printf("\\n  Cleaned up temporary test file '%s'.\\n", test_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,m=`/**\r
 * TemporaryFileSandboxDemo.c\r
 * Demonstrates anonymous temporary file sandbox creation with tmpfile(),\r
 * error clearing with clearerr(), and system diagnostic inspection with perror().\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <errno.h>\r
#include <string.h>\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("  CODER & ACCOTAX - TMPFILE SANDBOX & DIAGNOSTICS LAB   \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // 1. Create an anonymous temporary binary stream (tmpfile)\r
    // tmpfile() creates a unique temporary file in binary update mode ("wb+")\r
    // that is AUTOMATICALLY deleted from disk when closed or program exits!\r
    printf("--- 1. CREATING ANONYMOUS SECURE TEMPORARY STREAM ---\\n");\r
    FILE *tmp_fp = tmpfile();\r
    if (tmp_fp == NULL) {\r
        perror("Error creating temporary sandbox stream");\r
        return 1;\r
    }\r
    printf("  [SUCCESS] Anonymous temporary stream created in RAM/Disk sandbox.\\n");\r
\r
    // Write transient scratch calculation data\r
    for (int i = 1; i <= 5; i++) {\r
        fprintf(tmp_fp, "SCRATCH_INDEX_%03d: %d\\n", i, i * 100);\r
    }\r
\r
    // Rewind to inspect scratch contents\r
    rewind(tmp_fp);\r
    printf("\\n--- 2. READING SCRATCH DATA FROM TEMPORARY STREAM ---\\n");\r
    char line[64];\r
    while (fgets(line, sizeof(line), tmp_fp) != NULL) {\r
        printf("    > %s", line);\r
    }\r
\r
    // 2. Deliberately trigger a stream error to test clearerr() and ferror()\r
    printf("\\n--- 3. TESTING ERROR DETECTION & clearerr() ---\\n");\r
    // Open a read-only file\r
    FILE *read_only_fp = fopen("ro_sample.txt", "w");\r
    if (read_only_fp != NULL) {\r
        fputs("Sample data\\n", read_only_fp);\r
        fclose(read_only_fp);\r
    }\r
\r
    read_only_fp = fopen("ro_sample.txt", "r"); // READ-ONLY MODE!\r
    if (read_only_fp != NULL) {\r
        // Attempting to WRITE to a read-only stream will trigger an error!\r
        fputs("Illegal write attempt!\\n", read_only_fp);\r
\r
        if (ferror(read_only_fp)) {\r
            printf("  [ferror DETECTED] Illegal write operation on read-only stream!\\n");\r
            perror("  [perror Message]");\r
\r
            // Clear the error flag\r
            clearerr(read_only_fp);\r
            printf("  [clearerr] Error flag reset. ferror() status = %d\\n", ferror(read_only_fp));\r
        }\r
        fclose(read_only_fp);\r
        remove("ro_sample.txt");\r
    }\r
\r
    // Closing the temporary file automatically purges it from the operating system\r
    fclose(tmp_fp);\r
    printf("\\n  Temporary sandbox closed and automatically purged from disk.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,h=[{question:"Why is 'while (!feof(fp))' considered one of the worst antipatterns in C programming?",answer:"feof() does not look ahead into the future; it only returns true AFTER an I/O operation attempts to read PAST the end of file and fails. Using while(!feof(fp)) causes the loop body to execute one extra time with stale or invalid buffer data."},{question:"What is the correct idiom to read a file until EOF instead of while(!feof(fp))?",answer:`Check the return value of the read function itself:
- For characters: while ((ch = fgetc(fp)) != EOF) { ... }
- For lines: while (fgets(buffer, sizeof(buffer), fp) != NULL) { ... }
- For binary structs: while (fread(&rec, sizeof(rec), 1, fp) == 1) { ... }`},{question:"What is the purpose of ferror()?",answer:`int ferror(FILE *stream);
It checks whether the error indicator for the given stream is set. It returns a non-zero value if an I/O error occurred on the stream (e.g. disk read failure, writing to a read-only stream), and 0 otherwise.`},{question:"What does clearerr() do?",answer:`void clearerr(FILE *stream);
It resets both the End-of-File indicator (feof) and the error indicator (ferror) for the specified file stream to zero.`},{question:"What is the relationship between perror(), errno, and <errno.h>?",answer:"When a system or standard library call fails, it records an integer error code in the global variable 'errno'. Calling perror(prefix) prints the prefix string followed by a colon and the human-readable explanation of that errno value to stderr."},{question:"What does strerror(errno) do, and which header declares it?",answer:"Declared in <string.h>, 'char *strerror(int errnum)' returns a pointer to the human-readable error description string corresponding to the integer error number without printing to stderr."},{question:"When should you check feof() and ferror()?",answer:"After a read function (like fread, fgetc, or fgets) returns EOF or NULL. Use feof(fp) to confirm if termination was normal EOF, or ferror(fp) to detect if an unexpected hardware/permission error occurred."},{question:"Does fopen() set errno on failure?",answer:"Yes. When fopen() returns NULL, errno is set to specific error codes like ENOENT (No such file or directory), EACCES (Permission denied), or EMFILE (Too many open files)."},{question:"Why must the variable holding fgetc() return value be 'int' instead of 'char'?",answer:"fgetc returns an int because it must represent all valid unsigned char values (0 to 255) PLUS the EOF constant (typically -1). If stored in a signed char, byte 0xFF (255) could be misinterpreted as EOF (-1)."},{question:"What happens if you ignore the return value of fclose()?",answer:"fclose() returns 0 on success or EOF on error. If a write error occurs while flushing buffered data during fclose(), ignoring its return value will cause silent data loss to go unnoticed."},{question:"Can ferror be triggered by a network disconnection while reading from a mounted NFS/SMB drive?",answer:"Yes. If the underlying network filesystem drops, subsequent read/write calls fail, setting ferror(fp) to non-zero and setting errno to EIO or ETIMEDOUT."},{question:"How do you distinguish between an empty file and a read error?",answer:"When fgetc(fp) immediately returns EOF on the first read: if (feof(fp)) the file is empty; if (ferror(fp)) a read error occurred."},{question:"Does rewind() clear ferror and feof indicators?",answer:"Yes. rewind(fp) is defined to reset the file position indicator to the beginning AND clear both error and EOF indicators for the stream."},{question:"What error code indicates 'Permission Denied' in errno?",answer:"EACCES (error code 13 on most POSIX and Windows systems)."},{question:"What error code indicates 'No such file or directory' in errno?",answer:"ENOENT (error code 2 on most POSIX and Windows systems)."},{question:"Why should you set errno = 0 before calling certain standard library functions?",answer:"Library functions do not reset errno to 0 on success. If errno was set by a prior failed operation, it might retain the old error value unless cleared manually before calling functions like strtol."},{question:"Is perror thread-safe?",answer:"In modern C (C11 and POSIX.1-2001), errno is a thread-local variable, making perror and strerror_r thread-safe for reading the current thread's error state."},{question:"What happens if disk space runs out during an fwrite operation?",answer:"fwrite returns a count less than the requested nmemb, ferror(fp) becomes true, and errno is set to ENOSPC (No space left on device)."},{question:"How can you test if a file exists without opening and keeping it open?",answer:"In standard C, you attempt fopen(name, 'r') and immediately fclose if non-NULL. In POSIX systems, access(path, F_OK) can check existence without opening."},{question:"What is the difference between stderr and stdout when logging error diagnostics?",answer:"stderr is unbuffered by default and is intended for diagnostic alerts and error messages so they appear immediately even if the program crashes. stdout is line or fully buffered."},{question:"Can an interrupted system call (EINTR) cause fread or fwrite to return early?",answer:"Yes, on POSIX systems, if a signal is caught during blocking disk/pipe I/O, errno may be set to EINTR. Robust production programs retry the transfer loop in such cases."},{question:"What does remove() return on failure?",answer:`int remove(const char *filename);
It returns 0 on success and non-zero (-1) on failure, setting errno (e.g., EBUSY if the file is open, EACCES if write-protected).`},{question:"What does rename() return on failure?",answer:`int rename(const char *oldname, const char *newname);
It returns 0 on success and non-zero (-1) on failure, setting errno (e.g., EXDEV if attempting to move across different physical drives).`},{question:"What is atomic file replacement and how does it prevent file corruption on crash?",answer:"Write updates to a temporary file (e.g. 'data.tmp'), flush and close it, then call rename('data.tmp', 'data.dat'). On POSIX and modern Windows systems, rename is atomic, guaranteeing the database is never left in a corrupted half-written state."},{question:"How does fflush(fp) help in diagnosing runtime crashes?",answer:"Calling fflush(fp) after critical writes forces libc to flush its user-space buffers to the OS kernel immediately, ensuring logs and database records are preserved on disk even if an unexpected abort occurs."}],u=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 5 (MODULE 003_010)\r
STREAM DIAGNOSTICS & ERROR HANDLING (FEOF, FERROR, CLEARERR, PERROR)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. THE "WHILE (!FEOF(FP))" ANTIPATTERN EXPLAINED\r
   - feof(fp) does NOT look into the future to see if EOF is next.\r
   - feof(fp) only returns true AFTER an input function has ATTEMPTED to read\r
     past EOF and failed.\r
   - Result: If you use while(!feof(fp)), the loop body executes ONE EXTRA TIME\r
     with stale/garbage data from the previous iteration.\r
\r
2. CORRECT READ LOOP IDIOMS\r
   - Text Lines:\r
     while (fgets(buffer, sizeof(buffer), fp) != NULL) { /* process line */ }\r
   - Characters:\r
     int ch; // MUST BE INT!\r
     while ((ch = fgetc(fp)) != EOF) { /* process char */ }\r
   - Binary Structs:\r
     while (fread(&record, sizeof(record), 1, fp) == 1) { /* process struct */ }\r
\r
3. STREAM STATUS FUNCTIONS\r
   - int feof(FILE *stream);\r
     Returns non-zero if EOF indicator is set; 0 otherwise.\r
   - int ferror(FILE *stream);\r
     Returns non-zero if hardware/stream error flag is set; 0 otherwise.\r
   - void clearerr(FILE *stream);\r
     Clears both EOF and error flags for the stream.\r
\r
4. SYSTEM ERROR DIAGNOSTICS (ERRNO & PERROR)\r
   - #include <errno.h> provides the global/thread-local variable 'errno'.\r
   - perror("Custom message");\r
     Prints "Custom message: <system error description>" to stderr.\r
   - strerror(errno); (from <string.h>)\r
     Returns string description of the error number.\r
   - Common errno values:\r
     * ENOENT (2)  -> File or directory not found\r
     * EACCES (13) -> Permission denied\r
     * ENOSPC (28) -> No space left on device\r
     * EMFILE (24) -> Too many open files\r
\r
5. ATOMIC FILE TRANSACTION PATTERN\r
   1. Write output to "filename.tmp".\r
   2. fflush(fpTmp); fclose(fpTmp);\r
   3. Check return value of fclose() for errors.\r
   4. rename("filename.tmp", "filename.dat"); // Atomic swap\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`;function C(){const[r,o]=a.useState(0),n=[{id:"ex1",title:"1. Error Diagnostics (perror & errno)",file:c,filename:"FileErrorHandlingDemo.c",description:"Comprehensive diagnostic test suite for file streams: testing errno, printing human OS error descriptions with perror(), and recovering with clearerr().",lineByLine:[{line:'perror("Open missing file");',explanation:"Fetches the system error code from errno and prints a user-friendly error string to stderr."},{line:"strerror(errno)",explanation:"Returns a pointer to the textual description of the system error corresponding to integer errno."},{line:"if (ferror(read_only_fp))",explanation:"Inspects the internal stream flags to detect whether an illegal operation (like writing to a read-only file) failed."},{line:"clearerr(read_only_fp);",explanation:"Resets both error and EOF sticky flags back to 0 so the stream handle can be reused cleanly."}],output:`========================================================
   CODER & ACCOTAX - STREAM ERROR HANDLING & DIAGNOSTICS
========================================================

--- TEST 1: OPENING NON-EXISTENT FILE ---
  [EXPECTED ERROR TRAPPED]
  [perror output] Open missing file: No such file or directory
  [strerror description] System error message: No such file or directory
  errno code = 2

--- TEST 2: WRITE ATTEMPT ON READ-ONLY STREAM ---
  Created sample file 'readonly_sample.txt'.
  Opened 'readonly_sample.txt' in Read-Only ("r") mode.
  Attempting illegal write to read-only stream...
  [ferror DETECTED] Write operation failed on stream!
  [perror output] Illegal stream write: Bad file descriptor
  Error flag reset with clearerr(). ferror status = 0

--- TEST 3: PROPER EOF DETECTION VS ERROR ---
  Reading stream: Line 1: Systems programming in Barrackpore.
  Reading stream: Line 2: Diagnostic error handling lab.
  [EOF CONFIRMED] Stream reached End-Of-File (feof = 1, ferror = 0).

  Cleaned up temporary test files.
========================================================`},{id:"ex2",title:"2. The feof() One-Off Bug Trap",file:p,filename:"SafeEofLoopDemo.c",description:"Side-by-side contrast of the notorious while(!feof) loop bug (which reads past EOF) vs the clean, industry-standard read-driven loop condition.",lineByLine:[{line:"while (!feof(fp)) { ... }",explanation:"The classic bug! feof() only becomes true AFTER an attempted read fails, so the loop processes stale data on the final iteration."},{line:"while (fgets(buffer, sizeof(buffer), fp) != NULL)",explanation:"The safe pattern! The read attempt is tested BEFORE executing the loop body, guaranteeing zero duplicate reads."},{line:"if (feof(fp)) ... else if (ferror(fp)) ...",explanation:"Diagnostic check after loop termination to determine if the loop ended due to natural EOF or a disk hardware failure."}],output:`========================================================
     CODER & ACCOTAX - THE FEOF() ONE-OFF TRAP LAB      
========================================================

--- 1. THE BUGGY PATTERN (while (!feof(fp))) ---
  [Loop 1] Read: Line 1: Swadeep
  [Loop 2] Read: Line 2: Tuhina
  [Loop 3] Read: Line 2: Tuhina
  [NOTICE] Notice how the last line was printed TWICE or with stale data!

--- 2. THE CORRECT INDUSTRIAL PATTERN (while (fgets(...) != NULL)) ---
  [Loop 1] Read: Line 1: Swadeep
  [Loop 2] Read: Line 2: Tuhina
  [CONFIRMED] Loop terminated cleanly at true End-of-File (EOF).

  Cleaned up temporary test file 'eof_trap_demo.txt'.
========================================================`},{id:"ex3",title:"3. Temporary File Sandboxing (tmpfile)",file:m,filename:"TemporaryFileSandboxDemo.c",description:"Creates an anonymous self-deleting scratch buffer with tmpfile(), performs intermediate computations, and traps invalid read-only stream operations.",lineByLine:[{line:"FILE *tmp_fp = tmpfile();",explanation:"Creates an anonymous temporary binary stream in 'wb+' mode that automatically disappears from disk when closed."},{line:"rewind(tmp_fp);",explanation:"Snaps the scratch file cursor back to the start so we can read and verify calculated values."},{line:"fclose(tmp_fp);",explanation:"Closes the stream and triggers the OS kernel to instantly purge the anonymous file from storage."}],output:`========================================================
  CODER & ACCOTAX - TMPFILE SANDBOX & DIAGNOSTICS LAB   
========================================================

--- 1. CREATING ANONYMOUS SECURE TEMPORARY STREAM ---
  [SUCCESS] Anonymous temporary stream created in RAM/Disk sandbox.

--- 2. READING SCRATCH DATA FROM TEMPORARY STREAM ---
    > SCRATCH_INDEX_001: 100
    > SCRATCH_INDEX_002: 200
    > SCRATCH_INDEX_003: 300
    > SCRATCH_INDEX_004: 400
    > SCRATCH_INDEX_005: 500

--- 3. TESTING ERROR DETECTION & clearerr() ---
  [ferror DETECTED] Illegal write operation on read-only stream!
  [perror Message]: Bad file descriptor
  [clearerr] Error flag reset. ferror() status = 0

  Temporary sandbox closed and automatically purged from disk.
========================================================`}];return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 5"}),e.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Diagnostics & Reliability"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Stream Diagnostics & Error Handling (feof, ferror & perror)"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Avoid the infamous ",e.jsx("code",{children:"while(!feof)"})," one-off bug, diagnose I/O failures with ",e.jsx("code",{children:"ferror()"}),", query system error messages with ",e.jsx("code",{children:"perror()"})," and ",e.jsx("code",{children:"strerror(errno)"}),", and reset stream flags with ",e.jsx("code",{children:"clearerr()"}),"."]})]}),e.jsxs("section",{className:"space-y-5 bg-gradient-to-br from-rose-950/40 via-slate-800/40 to-slate-900 border border-rose-500/30 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl p-2 bg-rose-500/20 rounded-xl border border-rose-500/30",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"In Very Simple Terms: Why while(!feof) is a Trap"}),e.jsx("p",{className:"text-rose-300 text-xs md:text-sm font-medium",children:'The "Bumping into the Wall" analogy'})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🧱"})," Bumping into the Wall"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:[e.jsx("code",{children:"feof()"})," does NOT predict the future! It only returns true ",e.jsx("em",{children:"after"})," you try to read past the end of the file and fail. If you loop on ",e.jsx("code",{children:"!feof(fp)"}),", your program will always process the last line ",e.jsx("strong",{children:"twice"}),"!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🛡️"})," Test the Read Directly"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Always put the read function in the loop condition: ",e.jsx("code",{children:"while (fgets(...) != NULL)"})," or ",e.jsx("code",{children:"while (fread(...) == 1)"}),". The moment nothing is read, the loop stops immediately!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-sky-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🗣️"})," Human Error Messages (perror)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["When an I/O function returns an error, the operating system sets a hidden number called ",e.jsx("code",{children:"errno"}),". Calling ",e.jsx("code",{children:'perror("My App")'})," prints the plain English reason (e.g., ",e.jsx("em",{children:'"Permission denied"'})," or ",e.jsx("em",{children:'"No space left on device"'}),")."]})]})]}),e.jsxs("div",{className:"bg-rose-900/20 border border-rose-500/20 rounded-xl p-3 text-xs text-rose-200",children:["🎯 ",e.jsx("strong",{children:"Diagnostic Golden Rule:"})," After a loop terminates, check:",e.jsx("span",{className:"font-mono text-emerald-300 ml-1",children:"if (feof(fp))"})," → Normal end of file reached. |",e.jsx("span",{className:"font-mono text-rose-300 ml-1",children:"else if (ferror(fp))"})," → Hardware/network stream fault occurred!"]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Error Diagnostics & Stream Flag Lifecycle"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"Operating systems can fail file operations for numerous reasons: disk space exhaustion, network drive disconnects, bad sectors, permission denials, or deleted file handles. Robust C applications maintain zero tolerance for unhandled I/O failures."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-rose-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-rose-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore lab, Debangshu's file reader printed the last student record twice in the summary report. Swadeep suspected a compiler glitch. Sukanta Hui demonstrated how ",e.jsx("code",{children:"while(!feof(fp))"})," executes the loop body before knowing the next read will fail. Sukanta showed them how rewriting the loop to ",e.jsx("code",{children:"while(fread(&rec, sizeof(rec), 1, fp) == 1)"})," completely eliminated the ghost record!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Stream Error Diagnostic Flowchart"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 90)",children:[e.jsx("rect",{x:"0",y:"0",width:"200",height:"70",rx:"8",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a5b4fc",className:"font-bold text-xs",children:"Execute Stream Read"}),e.jsx("text",{x:"20",y:"52",fill:"#e0e7ff",className:"font-mono text-xs",children:"n = fread(..., fp);"})]}),e.jsx("path",{d:"M 240 125 L 300 125",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow)"}),e.jsxs("g",{transform:"translate(300, 75)",children:[e.jsx("polygon",{points:"70,0 140,50 70,100 0,50",fill:"#312e81",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"70",y:"55",textAnchor:"middle",fill:"#e0e7ff",className:"font-bold text-xs",children:"n < count?"})]}),e.jsxs("g",{transform:"translate(480, 45)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"50",rx:"6",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"22",fill:"#6ee7b7",className:"font-bold text-xs",children:"NO: Successful Read"}),e.jsx("text",{x:"20",y:"40",fill:"#ecfdf5",className:"text-xs",children:"Process Record Buffer"})]}),e.jsxs("g",{transform:"translate(480, 135)",children:[e.jsx("rect",{x:"0",y:"0",width:"370",height:"90",rx:"8",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"25",fill:"#fca5a5",className:"font-bold text-xs",children:"YES: Read Incomplete or Stopped"}),e.jsx("rect",{x:"15",y:"35",width:"160",height:"40",fill:"#7f1d1d",rx:"4"}),e.jsx("text",{x:"25",y:"52",fill:"#fee2e2",className:"font-mono text-xs",children:"if (feof(fp))"}),e.jsx("text",{x:"25",y:"68",fill:"#fca5a5",className:"text-xs",children:"True End of File"}),e.jsx("rect",{x:"190",y:"35",width:"165",height:"40",fill:"#7f1d1d",rx:"4"}),e.jsx("text",{x:"200",y:"52",fill:"#fee2e2",className:"font-mono text-xs",children:"else if (ferror(fp))"}),e.jsx("text",{x:"200",y:"68",fill:"#fca5a5",className:"text-xs",children:'Call perror("I/O Error")'})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Diagnostic API Matrix"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"feof(fp)"}),e.jsx("p",{className:"text-slate-300",children:"Returns non-zero if the end-of-file indicator has been tripped by an attempted read past EOF."})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300 text-sm",children:"ferror(fp)"}),e.jsx("p",{className:"text-slate-300",children:"Returns non-zero if a hardware, permission, or media error occurred on the stream."})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm",children:"clearerr(fp)"}),e.jsx("p",{className:"text-slate-300",children:"Resets both the EOF and error indicators back to 0, allowing further read/write attempts."})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"perror(msg)"}),e.jsxs("p",{className:"text-slate-300",children:["Prints your prefix string followed by the system error description matching current ",e.jsx("code",{children:"errno"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Error Diagnostics & Recovery"]}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Explore 3 hands-on C programs with step-by-step line explanations and terminal outputs."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((t,s)=>e.jsx("button",{onClick:()=>o(s),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${r===s?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:t.title},t.id))})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"📋 Overview:"}),e.jsx("span",{children:n[r].description})]}),e.jsx(i,{fileModule:n[r].file,title:n[r].filename,editable:!1}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 md:p-5 space-y-3 shadow-md",children:[e.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," Plain-English Line-by-Line Code Breakdown:"]}),e.jsx("div",{className:"space-y-2",children:n[r].lineByLine.map((t,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80",children:[e.jsx("code",{className:"text-sky-300 font-mono text-[11px] sm:w-2/5 shrink-0 font-semibold bg-slate-900 px-2 py-1 rounded border border-slate-700/60",children:t.line}),e.jsx("span",{className:"text-slate-300 text-xs leading-relaxed",children:t.explanation})]},s))})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-950 p-4 shadow-inner",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:n[r].output})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Testing feof() in While Loop Condition"}),e.jsxs("p",{className:"text-slate-300",children:["Never write ",e.jsx("code",{children:"while (!feof(fp))"}),". The EOF indicator is only set ",e.jsx("em",{children:"after"})," an attempted read past the end has already failed."]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Inspect errno Immediately"}),e.jsxs("p",{className:"text-slate-300",children:["Check ",e.jsx("code",{children:"errno"})," immediately after a failed call. Subsequent library calls (like ",e.jsx("code",{children:"printf"}),") can overwrite ",e.jsx("code",{children:"errno"})," with their own status codes."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Why does ",e.jsx("code",{children:"tmpfile()"})," create anonymous unlinked files on POSIX systems, and why is this significantly more secure against race-condition symlink attacks than generating predictable temporary filenames with ",e.jsx("code",{children:"tmpnam()"}),"?"]})]}),e.jsx("section",{children:e.jsx(l,{title:"Module 003_010 Topic 5 FAQs: Stream Diagnostics & Error Handling",questions:h})}),e.jsx("section",{children:e.jsx(d,{content:u,title:"Module 003_010 Topic 5 Note: Stream Diagnostics & Error Handling",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic5_note.txt"})}),e.jsx("section",{children:e.jsx(f,{note:"Industrial code is distinguished by its error handling. Always check every return code, inspect errno, and print human-readable explanations with perror(). Your future self debugging a production server at 3 AM will thank you! — Sukanta Hui"})})]})}export{C as default};
