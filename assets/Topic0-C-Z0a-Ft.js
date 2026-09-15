import{b as a,j as e}from"./vendor-react-core-C47mfheO.js";import{C as l}from"./CFileLoader-DB2_ZayD.js";import{F as o}from"./FAQTemplate-D7324Ho6.js";import{P as d}from"./PlainTextPrint-COK-Ppq5.js";import{T as f}from"./TeacherSukantaHui-BfpnVddt.js";import"./CodeBlock-DVd3Rf-c.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-CjLaApDI.js";import"./EditableCCodeBlock-CbSIxbt_.js";import"./vendor-monaco-Bq9GhMe9.js";const c=`/**\r
 * StreamBufferingDemo.c\r
 * Demonstrates Standard I/O Streams (stdin, stdout, stderr),\r
 * Stream Buffering Modes (_IOFBF, _IOLBF, _IONBF), and fflush().\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <unistd.h>\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - STANDARD STREAMS & BUFFERING LAB   \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // 1. Standard Streams Overview\r
    printf("--- 1. STANDARD STREAM IDENTIFIERS ---\\n");\r
    printf("  Standard Input  (stdin)  : File Descriptor %d\\n", fileno(stdin));\r
    printf("  Standard Output (stdout) : File Descriptor %d\\n", fileno(stdout));\r
    printf("  Standard Error  (stderr) : File Descriptor %d (Always Unbuffered)\\n\\n", fileno(stderr));\r
\r
    // 2. Demonstrating stderr vs stdout behavior\r
    // stderr is unbuffered: printed immediately even without a newline!\r
    fprintf(stderr, "  [stderr Immediate Notice] This message bypasses stdout buffer.\\n");\r
    \r
    // 3. Demonstrating stdout buffering and fflush()\r
    printf("--- 2. STREAM FLUSHING WITH fflush() ---\\n");\r
    printf("  Simulating task progress: ");\r
    \r
    // Without a newline '\\n', stdout waits in the buffer unless flushed explicitly\r
    for (int i = 1; i <= 3; i++) {\r
        printf(". ");\r
        fflush(stdout); // Force immediate flush to terminal screen!\r
    }\r
    printf(" [DONE]\\n\\n");\r
\r
    // 4. Changing Buffering Mode using setvbuf()\r
    printf("--- 3. CUSTOM BUFFERING CONFIGURATION WITH setvbuf() ---\\n");\r
    char custom_buffer[1024];\r
    \r
    // Configure stdout to use our custom full buffer\r
    if (setvbuf(stdout, custom_buffer, _IOFBF, sizeof(custom_buffer)) == 0) {\r
        printf("  stdout switched to Full Buffering (_IOFBF) with 1024-byte custom buffer.\\n");\r
        // Explicitly flush before exit so all buffered text appears\r
        fflush(stdout);\r
    }\r
\r
    // Reset back to line buffered for clean exit\r
    setvbuf(stdout, NULL, _IOLBF, 0);\r
\r
    printf("\\n  Stream demonstration completed successfully.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,u=`/**\r
 * CustomBufferDemo.c\r
 * Demonstrates stream buffer reconfiguration using setvbuf(),\r
 * comparing Full Buffering (_IOFBF), Line Buffering (_IOLBF),\r
 * and Unbuffered (_IONBF) modes with custom user memory blocks.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
#define CUSTOM_BUF_SIZE 512\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("     CODER & ACCOTAX - CUSTOM BUFFER TUNING LAB         \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *log_filename = "custom_buffer_test.log";\r
    char user_buffer[CUSTOM_BUF_SIZE];\r
\r
    // Open file stream for writing\r
    FILE *fp = fopen(log_filename, "w");\r
    if (fp == NULL) {\r
        perror("Error opening log file");\r
        return 1;\r
    }\r
\r
    printf("--- 1. ASSIGNING CUSTOM USER BUFFER (_IOFBF) ---\\n");\r
    // Attach our own 512-byte buffer with Full Buffering\r
    if (setvbuf(fp, user_buffer, _IOFBF, sizeof(user_buffer)) == 0) {\r
        printf("  [SUCCESS] Attached custom %d-byte buffer to stream.\\n", CUSTOM_BUF_SIZE);\r
    } else {\r
        printf("  [FAILED] Could not set custom buffer.\\n");\r
    }\r
\r
    // Write some lines. Because it's _IOFBF, data stays in user_buffer until 512 bytes are filled or flushed!\r
    fprintf(fp, "[INFO] Server started at Barrackpore Lab.\\n");\r
    fprintf(fp, "[INFO] Student Swadeep connected.\\n");\r
    fprintf(fp, "[INFO] Student Tuhina connected.\\n");\r
    printf("  Wrote 3 log records (currently residing inside RAM buffer).\\n");\r
\r
    // Manually force the buffer to commit to disk\r
    fflush(fp);\r
    printf("  [fflush] Flushed RAM buffer contents directly to disk.\\n\\n");\r
\r
    // Reconfigure to Unbuffered (_IONBF)\r
    printf("--- 2. SWITCHING TO UNBUFFERED MODE (_IONBF) ---\\n");\r
    setvbuf(fp, NULL, _IONBF, 0);\r
    fprintf(fp, "[CRITICAL] Immediate emergency alert: Disk threshold reached!\\n");\r
    printf("  [UNBUFFERED] Message written immediately to physical file without caching.\\n\\n");\r
\r
    fclose(fp);\r
    fp = NULL;\r
\r
    // Read back and display file contents\r
    printf("--- 3. VERIFYING COMMITTED LOG FILE CONTENTS ---\\n");\r
    fp = fopen(log_filename, "r");\r
    if (fp != NULL) {\r
        char line[128];\r
        while (fgets(line, sizeof(line), fp) != NULL) {\r
            printf("    > %s", line);\r
        }\r
        fclose(fp);\r
    }\r
\r
    // Clean up temporary log\r
    remove(log_filename);\r
    printf("\\n  Cleaned up temporary log file '%s'.\\n", log_filename);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,h=`/**\r
 * TerminalProgressDemo.c\r
 * Demonstrates real-time responsive CLI progress indication,\r
 * showing why fflush(stdout) is essential when outputting without a newline '\\n'.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
#ifdef _WIN32\r
#include <windows.h>\r
#define SLEEP_MS(ms) Sleep(ms)\r
#else\r
#include <unistd.h>\r
#define SLEEP_MS(ms) usleep((ms) * 1000)\r
#endif\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - REAL-TIME TERMINAL FLUSH LAB       \\n");\r
    printf("========================================================\\n\\n");\r
\r
    printf("--- 1. SIMULATING INDUSTRIAL FILE BACKUP ---\\n");\r
    printf("  Target: /data/students_barrackpore_backup.db\\n");\r
    printf("  Progress: ");\r
\r
    // Without '\\n', line-buffered stdout will NOT print to terminal immediately\r
    // unless fflush(stdout) is invoked on every iteration!\r
    const int total_steps = 10;\r
    for (int i = 1; i <= total_steps; i++) {\r
        int percentage = i * 10;\r
        \r
        // Print carriage return '\\r' to update the same line in place\r
        printf("\\r  [Progress: %3d%%] [", percentage);\r
        for (int b = 0; b < total_steps; b++) {\r
            if (b < i) printf("#");\r
            else printf(" ");\r
        }\r
        printf("] (%d/%d blocks)", i, total_steps);\r
\r
        // FORCE stdout buffer to push bytes to terminal screen immediately\r
        fflush(stdout);\r
\r
        // Simulate work delay\r
        SLEEP_MS(50);\r
    }\r
\r
    printf("\\n\\n--- 2. STREAM FLUSHING CONCLUSION ---\\n");\r
    printf("  [SUCCESS] Backup completed. All stream buffers safely written.\\n");\r
    printf("  Tip: Always call fflush(stdout) when designing interactive CLI prompts!\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,m=[{question:"What is a Stream in C input/output?",answer:"A stream is a logical interface and abstraction provided by the C standard library that maps uniform sequential byte I/O operations across diverse physical devices (keyboards, terminals, disk files, network sockets, printers)."},{question:"What are the three predefined standard streams automatically opened for every C program?",answer:"The standard streams are: 1) 'stdin' (Standard Input, file descriptor 0, default keyboard), 2) 'stdout' (Standard Output, file descriptor 1, default terminal display), and 3) 'stderr' (Standard Error, file descriptor 2, default unbuffered terminal output)."},{question:"What are the three stream buffering modes defined in <stdio.h>?",answer:"1) Full Buffering ('_IOFBF'): Data is read/written in large blocks when the buffer is completely full. 2) Line Buffering ('_IOLBF'): Data is flushed whenever a newline ('\\n') character is output or buffer fills. 3) Unbuffered ('_IONBF'): Characters are transmitted directly to the device immediately without intermediate storage."},{question:"Why is stderr unbuffered (_IONBF) by default in C?",answer:"Because error messages, diagnostic warnings, and fatal abort notices must reach the console immediately, ensuring they are visible even if the program crashes in the very next instruction before a newline."},{question:"What does the function fflush(FILE *stream) do?",answer:"fflush() writes any unwritten buffered data in the output stream's user-space buffer directly to the underlying OS file or device. Passing NULL ('fflush(NULL)') flushes all open output streams."},{question:"Is calling fflush(stdin) standard C behavior for clearing input buffers?",answer:"No! The C standard explicitly states that calling fflush() on an input stream produces Undefined Behavior. To safely clear the input buffer, read characters until '\\n' or EOF using 'while((c = getchar()) != '\\n' && c != EOF);'."},{question:"How does setvbuf() allow custom stream buffering configuration?",answer:"The prototype is: 'int setvbuf(FILE *stream, char *buffer, int mode, size_t size);'. It allows the developer to supply a custom memory buffer and choose between _IOFBF, _IOLBF, or _IONBF before performing I/O operations."},{question:"What happens if setvbuf() is called after I/O operations have already begun on a stream?",answer:"Calling setvbuf() after I/O has started produces undefined behavior. It must be called immediately after opening the file or at the start of main() before any read/write calls."},{question:'Why does `printf("Loading...");` without a newline not appear immediately on the terminal?',answer:"Standard output ('stdout') connected to a terminal is Line-Buffered (_IOLBF). Without a '\\n' or an explicit 'fflush(stdout);', the text remains trapped in the output buffer."},{question:"What is the difference between Text Streams and Binary Streams in C?",answer:"In Text streams, newline characters ('\\n') may be translated to/from platform-specific line endings (e.g. CRLF '\\r\\n' on Windows). Binary streams transfer exact raw bytes with zero translation or modification."},{question:"What are File Descriptors in POSIX/Linux systems?",answer:"File descriptors are low-level non-negative integers (0 for stdin, 1 for stdout, 2 for stderr) assigned by the operating system kernel to identify open file tables."},{question:"How does the C FILE* pointer relate to the operating system's raw file descriptor?",answer:"A 'FILE*' is a high-level user-space data structure encapsulating the file descriptor, stream buffer pointer, buffer capacity, read/write offset, and error/EOF flags."},{question:"What function retrieves the integer file descriptor from a `FILE*` pointer?",answer:"The POSIX function 'fileno(FILE *stream)' returns the integer file descriptor associated with the stream."},{question:"What is I/O Redirection in command-line shells (e.g. `./app > output.txt 2> error.log`)?",answer:"The shell rebinds file descriptor 1 (stdout) to 'output.txt' and file descriptor 2 (stderr) to 'error.log' using system calls like dup2(), cleanly separating output from errors."},{question:"When stdout is redirected to a disk file, how does its buffering mode change automatically?",answer:"When connected to an interactive terminal, stdout is Line-Buffered (_IOLBF). When redirected to a regular disk file, it automatically switches to Full Buffering (_IOFBF, typically 4KB or 8KB) for optimal disk throughput."},{question:"What is the function of `setbuf(FILE *stream, char *buffer)`?",answer:"'setbuf(stream, buf)' is a simplified legacy wrapper around setvbuf(). If 'buf' is non-null, it enables full buffering with default size BUFSIZ; if 'buf' is NULL, it disables buffering (_IONBF)."},{question:"What is `BUFSIZ` in `<stdio.h>`?",answer:"'BUFSIZ' is a standard macro defining the implementation's default optimal buffer size for file stream operations (commonly 512, 1024, 4096, or 8192 bytes)."},{question:"Why does stream buffering dramatically improve performance for disk and network I/O?",answer:"System calls ('read' / 'write') and disk head seeks have high overhead. Buffering accumulates hundreds of individual byte operations into one single bulk block write, reducing system calls by orders of magnitude."},{question:"What happens to stream buffers when `exit(0)` or `return 0` from `main()` executes?",answer:"Standard exit processing automatically flushes all open output stream buffers and cleanly closes all open file pointers."},{question:"What happens to stream buffers if a program crashes abruptly via `_Exit()` or `abort()` or a segmentation fault?",answer:"Unflushed buffered data in user-space RAM is lost permanently because low-level abnormal termination bypasses standard library buffer flushing."},{question:"How does local classroom debugging at Coder & AccoTax demonstrate stream buffering?",answer:`In Sukanta Hui's lab, students write animation and progress-bar loops using 'printf(".")' without '\\n'. They observe the dots freezing until 'fflush(stdout)' is called, making the buffering concept crystal clear.`},{question:"Can `stderr` be redirected separately from `stdout` in the terminal?",answer:"Yes, using shell redirection syntax: `command > normal.txt 2> errors.txt` or combined with `command > all.txt 2>&1`."},{question:"What is `fwide(FILE *stream, int mode)` used for?",answer:"'fwide' queries or sets the stream orientation (byte-oriented for standard char I/O or wide-oriented for wchar_t Unicode I/O)."},{question:"Why is mixing wide-character I/O and byte-oriented I/O on the same stream prohibited?",answer:"Once a stream establishes its orientation (byte vs wide) on its first I/O call, mixing operations results in undefined behavior until the stream is closed and reopened."},{question:"What is the golden rule of terminal progress displays in C?",answer:"Whenever printing interactive status updates, prompts, or progress indicators without a newline '\\n', always immediately call `fflush(stdout);` to ensure instant visibility!"}],p=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_010 · TOPIC 0: STANDARD STREAMS & STREAM BUFFERING\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. THE THREE STANDARD I/O STREAMS\r
--------------------------------------------------------------------------------\r
Stream Name | File Descriptor | Default Device   | Default Buffering Mode\r
------------+-----------------+------------------+------------------------------\r
stdin       | 0 (STDIN_FILENO)| Keyboard         | Line-Buffered (_IOLBF)\r
stdout      | 1 (STDOUT_FILENO| Terminal Display | Line-Buffered / Full-Buffered\r
stderr      | 2 (STDERR_FILENO| Terminal Display | Unbuffered (_IONBF) - Instant!\r
\r
\r
2. THE THREE BUFFERING MODES (_IOFBF, _IOLBF, _IONBF)\r
--------------------------------------------------------------------------------\r
[A] _IOFBF (Full Buffering):\r
    - Flushes ONLY when buffer is completely filled (e.g. 4KB disk blocks).\r
    - Default for disk files and redirected stdout.\r
\r
[B] _IOLBF (Line Buffering):\r
    - Flushes whenever a newline '\\n' is printed or buffer fills.\r
    - Default for interactive terminal stdout.\r
\r
[C] _IONBF (No Buffering / Unbuffered):\r
    - Direct immediate output with zero buffering.\r
    - Default for stderr.\r
\r
\r
3. THE FFLUSH() FUNCTION\r
--------------------------------------------------------------------------------\r
    int fflush(FILE *stream);\r
    - Writes any unwritten buffered data to the destination device/file.\r
    - fflush(stdout): Ensures prompts and progress dots without '\\n' appear.\r
    - fflush(NULL)  : Flushes all open output streams.\r
    - WARNING: Calling fflush(stdin) is UNDEFINED BEHAVIOR in standard C!\r
\r
\r
4. CUSTOM BUFFERING CONFIGURATION WITH SETVBUF()\r
--------------------------------------------------------------------------------\r
    char my_buf[2048];\r
    setvbuf(fp, my_buf, _IOFBF, sizeof(my_buf));\r
    // Must be called BEFORE any read/write operations occur on stream.\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function B(){const[t,i]=a.useState(0),r=[{id:"ex1",title:"1. Standard Streams & fflush()",file:c,filename:"StreamBufferingDemo.c",description:"Examines standard stream descriptors (stdin=0, stdout=1, stderr=2), demonstrates immediate unbuffered stderr output, and explains explicit flushing with fflush().",lineByLine:[{line:"fileno(stdin), fileno(stdout), fileno(stderr)",explanation:"Queries the low-level OS file descriptor numbers: 0 for keyboard input, 1 for screen output, and 2 for error alerts."},{line:'fprintf(stderr, "[stderr Immediate Notice]...")',explanation:"Writes directly to the standard error stream. Because stderr is unbuffered by default (_IONBF), text appears on screen immediately without waiting."},{line:'printf(". "); fflush(stdout);',explanation:"Prints a dot without a newline (\\n). Normally this would stay trapped in the RAM buffer, but fflush(stdout) forces the OS to paint it to the terminal instantly!"},{line:"setvbuf(stdout, custom_buffer, _IOFBF, 1024)",explanation:"Switches stdout from line-buffered to fully-buffered mode, using our custom 1024-byte RAM buffer before writing to the terminal."},{line:"setvbuf(stdout, NULL, _IOLBF, 0)",explanation:"Restores the default line-buffering mode for stdout before exiting so terminal behavior returns to normal."}],output:`========================================================
   CODER & ACCOTAX - STANDARD STREAMS & BUFFERING LAB   
========================================================

--- 1. STANDARD STREAM IDENTIFIERS ---
  Standard Input  (stdin)  : File Descriptor 0
  Standard Output (stdout) : File Descriptor 1
  Standard Error  (stderr) : File Descriptor 2 (Always Unbuffered)

  [stderr Immediate Notice] This message bypasses stdout buffer.
--- 2. STREAM FLUSHING WITH fflush() ---
  Simulating task progress: . . .  [DONE]

--- 3. CUSTOM BUFFERING CONFIGURATION WITH setvbuf() ---
  stdout switched to Full Buffering (_IOFBF) with 1024-byte custom buffer.

  Stream demonstration completed successfully.
========================================================`},{id:"ex2",title:"2. Custom Buffer Tuning (setvbuf)",file:u,filename:"CustomBufferDemo.c",description:"Demonstrates allocating a dedicated 512-byte user buffer with setvbuf(), switching between Full Buffering (_IOFBF) and Unbuffered (_IONBF) modes, and flushing pending data.",lineByLine:[{line:"char user_buffer[512];",explanation:"Allocates a 512-byte memory block in RAM that will temporarily hold file data before sending it to the physical storage disk."},{line:"setvbuf(fp, user_buffer, _IOFBF, sizeof(user_buffer))",explanation:"Tells the C runtime to use our 512-byte array as a Full Buffer (_IOFBF). Writes will only touch disk when all 512 bytes are full or when flushed."},{line:'fprintf(fp, "[INFO] Server started...");',explanation:"Writes log strings into the RAM buffer. The physical hard drive is NOT touched yet, keeping CPU performance extremely high."},{line:"fflush(fp)",explanation:"Forces all pending log lines sitting inside user_buffer to be committed immediately to the physical disk."},{line:"setvbuf(fp, NULL, _IONBF, 0)",explanation:"Switches the stream to Unbuffered mode (_IONBF). Any subsequent fprintf calls write directly to disk with zero buffering lag."}],output:`========================================================
     CODER & ACCOTAX - CUSTOM BUFFER TUNING LAB         
========================================================

--- 1. ASSIGNING CUSTOM USER BUFFER (_IOFBF) ---
  [SUCCESS] Attached custom 512-byte buffer to stream.
  Wrote 3 log records (currently residing inside RAM buffer).
  [fflush] Flushed RAM buffer contents directly to disk.

--- 2. SWITCHING TO UNBUFFERED MODE (_IONBF) ---
  [UNBUFFERED] Message written immediately to physical file without caching.

--- 3. VERIFYING COMMITTED LOG FILE CONTENTS ---
    > [INFO] Server started at Barrackpore Lab.
    > [INFO] Student Swadeep connected.
    > [INFO] Student Tuhina connected.
    > [CRITICAL] Immediate emergency alert: Disk threshold reached!

  Cleaned up temporary log file 'custom_buffer_test.log'.
========================================================`},{id:"ex3",title:"3. Real-Time CLI Progress (fflush)",file:h,filename:"TerminalProgressDemo.c",description:"Illustrates why fflush(stdout) is essential when building real-time interactive CLI counters or progress bars that output without trailing newline (\\n) characters.",lineByLine:[{line:'printf("\\r  [Progress: %3d%%] ...", percentage)',explanation:"Prints the carriage return character (\\r) which moves the cursor back to column 0 of the same line, allowing in-place animated updates."},{line:"fflush(stdout)",explanation:"The magic call! Since there is no newline (\\n), stdout would normally freeze the output in RAM. fflush forces the updated progress bar to the monitor immediately."},{line:"SLEEP_MS(50)",explanation:"Pauses for 50 milliseconds so human eyes can watch the smooth progression from 0% to 100%."}],output:`========================================================
   CODER & ACCOTAX - REAL-TIME TERMINAL FLUSH LAB       
========================================================

--- 1. SIMULATING INDUSTRIAL FILE BACKUP ---
  Target: /data/students_barrackpore_backup.db
  [Progress: 100%] [##########] (10/10 blocks)

--- 2. STREAM FLUSHING CONCLUSION ---
  [SUCCESS] Backup completed. All stream buffers safely written.
  Tip: Always call fflush(stdout) when designing interactive CLI prompts!
========================================================`}];return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 0"}),e.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Stream Architecture"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Standard I/O Streams & Stream Buffering Mechanics"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Understand the logical stream abstraction in C: ",e.jsx("code",{children:"stdin"}),", ",e.jsx("code",{children:"stdout"}),", and ",e.jsx("code",{children:"stderr"}),". Master the three buffering modes (Full, Line, and Unbuffered), stream flushing with ",e.jsx("code",{children:"fflush()"}),", and custom buffer tuning with ",e.jsx("code",{children:"setvbuf()"}),"."]})]}),e.jsxs("section",{className:"space-y-5 bg-gradient-to-br from-indigo-950/40 via-slate-800/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"In Very Simple Terms: How Streams and Buffers Work"}),e.jsx("p",{className:"text-indigo-300 text-xs md:text-sm font-medium",children:"The real-world analogy to understand C I/O in 2 minutes"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📬"})," The Postal Courier (Why Buffering?)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Writing to a physical hard drive is like sending a postal courier across town. If you called the courier for ",e.jsx("em",{children:"every single letter"})," you typed, your system would crawl to a halt. Instead, C collects characters in a small memory box (a ",e.jsx("strong",{children:"Buffer"}),") and sends the entire box in one fast trip!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-sky-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🚪"})," The Three Standard Doors"]}),e.jsxs("ul",{className:"text-slate-300 text-xs space-y-1 leading-relaxed",children:[e.jsxs("li",{children:[e.jsx("strong",{className:"text-sky-300",children:"stdin:"})," The front door where keystrokes arrive from the keyboard."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-emerald-300",children:"stdout:"})," The normal display window that shows regular output."]}),e.jsxs("li",{children:[e.jsx("strong",{className:"text-rose-300",children:"stderr:"})," The emergency red alarm that bypasses all waiting queues immediately!"]})]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"⚡"})," The Flushing Switch (fflush)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Normally, ",e.jsx("code",{children:"stdout"})," waits for you to press Enter (",e.jsx("code",{children:"\\n"}),") before it appears on screen. If you are printing a loading bar without ",e.jsx("code",{children:"\\n"}),", call ",e.jsx("code",{children:"fflush(stdout)"})," to say: ",e.jsx("em",{children:`"Don't wait! Push whatever is in the box to the screen right now!"`})]})]})]}),e.jsx("div",{className:"bg-indigo-900/20 border border-indigo-500/20 rounded-xl p-3.5 text-xs text-indigo-200 flex flex-col md:flex-row items-start md:items-center justify-between gap-2",children:e.jsxs("span",{children:["📌 ",e.jsx("strong",{children:"Golden Rule:"})," Error messages belong in ",e.jsx("code",{children:"stderr"})," (instant & crash-proof). Regular output belongs in ",e.jsx("code",{children:"stdout"}),". Never call ",e.jsx("code",{children:"fflush(stdin)"})," because standard C does not support flushing input!"]})})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Stream Buffering & Operating System Interfaces"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Direct physical disk and terminal I/O are among the slowest operations a computer performs. To prevent programs from spending millions of CPU cycles waiting for hardware devices, the C runtime introduces user-space ",e.jsx("strong",{children:"Stream Buffers"})," that batch multiple individual byte writes into bulk operating system transfers."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-indigo-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-indigo-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore computer lab, Swadeep created a terminal progress counter using ",e.jsx("code",{children:'printf("Loading: %d%%", pct);'}),". He was puzzled why nothing appeared on the terminal until the loop finished 100%. Sukanta Hui explained that ",e.jsx("code",{children:"stdout"})," is Line-Buffered; without a newline (",e.jsx("code",{children:"\\n"}),"), the output remains trapped in the RAM buffer. Sukanta added ",e.jsx("code",{children:"fflush(stdout);"}),", and the progress counter updated smoothly on the terminal in real time!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Stream Buffering Pipeline"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"180",rx:"10",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#a5b4fc",className:"font-bold text-xs",children:"C APPLICATION CODE"}),e.jsx("rect",{x:"15",y:"45",width:"190",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"65",fill:"#e0e7ff",className:"font-mono text-xs",children:'printf("Text...");'}),e.jsx("rect",{x:"15",y:"85",width:"190",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"105",fill:"#e0e7ff",className:"font-mono text-xs",children:'fprintf(stderr, "Err");'}),e.jsx("rect",{x:"15",y:"125",width:"190",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"145",fill:"#e0e7ff",className:"font-mono text-xs",children:"fputs(str, fp);"})]}),e.jsx("text",{x:"280",y:"145",fill:"#64748b",className:"font-bold text-xl",children:"→"}),e.jsxs("g",{transform:"translate(320, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"270",height:"180",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#6ee7b7",className:"font-bold text-xs",children:"C RUNTIME STREAM BUFFERS"}),e.jsx("rect",{x:"15",y:"45",width:"240",height:"35",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"68",fill:"#d1fae5",className:"font-mono text-xs",children:"_IOLBF: Flushes on '\\n' / fflush"}),e.jsx("rect",{x:"15",y:"90",width:"240",height:"35",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"25",y:"113",fill:"#d1fae5",className:"font-mono text-xs",children:"_IOFBF: Flushes when 4KB full"}),e.jsx("rect",{x:"15",y:"135",width:"240",height:"35",fill:"#7f1d1d",rx:"4"}),e.jsx("text",{x:"25",y:"158",fill:"#fee2e2",className:"font-mono text-xs",children:"_IONBF: stderr (Unbuffered!)"})]}),e.jsx("text",{x:"610",y:"145",fill:"#64748b",className:"font-bold text-xl",children:"→"}),e.jsxs("g",{transform:"translate(650, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"210",height:"180",rx:"10",fill:"#3b0764",stroke:"#d946ef",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#f5d0fe",className:"font-bold text-xs",children:"OS & HARDWARE DEVICE"}),e.jsx("rect",{x:"15",y:"45",width:"180",height:"35",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"68",fill:"#fae8ff",className:"font-mono text-xs",children:"write(1, buf, len)"}),e.jsx("rect",{x:"15",y:"90",width:"180",height:"35",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"113",fill:"#fae8ff",className:"font-mono text-xs",children:"Physical Disk Drive"}),e.jsx("rect",{x:"15",y:"135",width:"180",height:"35",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"25",y:"158",fill:"#fae8ff",className:"font-mono text-xs",children:"Terminal Monitor"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: The Three Stream Modes"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"1. Full Buffering (_IOFBF)"}),e.jsx("p",{className:"text-slate-300",children:"Data is written to disk only when the internal 4KB/8KB buffer is completely full. Default for all disk file streams."})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"2. Line Buffering (_IOLBF)"}),e.jsxs("p",{className:"text-slate-300",children:["Data is flushed to the screen whenever a newline (",e.jsx("code",{children:"\\n"}),") is encountered or ",e.jsx("code",{children:"fflush()"})," is invoked. Default for ",e.jsx("code",{children:"stdout"}),"."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-300 text-sm",children:"3. Unbuffered (_IONBF)"}),e.jsxs("p",{className:"text-slate-300",children:["Every single byte is immediately pushed directly to the OS without delay. Default for ",e.jsx("code",{children:"stderr"})," so crash notices are never lost."]})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Stream Buffering Demonstrations"]}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Explore 3 hands-on practical C programs with step-by-step line explanations and terminal output."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map((s,n)=>e.jsx("button",{onClick:()=>i(n),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${t===n?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:s.title},s.id))})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"📋 Overview:"}),e.jsx("span",{children:r[t].description})]}),e.jsx(l,{fileModule:r[t].file,title:r[t].filename,editable:!1}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 md:p-5 space-y-3 shadow-md",children:[e.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," Plain-English Line-by-Line Code Breakdown:"]}),e.jsx("div",{className:"space-y-2",children:r[t].lineByLine.map((s,n)=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80",children:[e.jsx("code",{className:"text-sky-300 font-mono text-[11px] sm:w-2/5 shrink-0 font-semibold bg-slate-900 px-2 py-1 rounded border border-slate-700/60",children:s.line}),e.jsx("span",{className:"text-slate-300 text-xs leading-relaxed",children:s.explanation})]},n))})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-950 p-4 shadow-inner",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:r[t].output})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: fflush(stdin) Undefined Behavior"}),e.jsxs("p",{className:"text-slate-300",children:["Never use ",e.jsx("code",{children:"fflush(stdin);"})," to discard trailing input. The C standard defines ",e.jsx("code",{children:"fflush"})," strictly for output streams. Use a ",e.jsx("code",{children:"getchar()"})," loop instead!"]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Flush Interactive Prompts"}),e.jsxs("p",{className:"text-slate-300",children:["When prompting users without a newline (e.g. ",e.jsx("code",{children:'printf("Enter PIN: ");'}),"), always call ",e.jsx("code",{children:"fflush(stdout);"})," to guarantee immediate display across all terminal environments."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["If your program outputs to the screen (Line Buffered), why does redirecting its output to a disk file (",e.jsx("code",{children:"./app > file.txt"}),") automatically convert the stream to Full Buffering (4KB)?"]})]}),e.jsx("section",{children:e.jsx(o,{title:"Module 003_010 Topic 0 FAQs: Standard Streams & Buffering",questions:m})}),e.jsx("section",{children:e.jsx(d,{content:p,title:"Module 003_010 Topic 0 Note: Standard Streams & Buffering",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(f,{note:"Always understand where your bytes are waiting! Stderr is immediate, stdout waits for newlines, and disk files wait for full 4KB buffer blocks. When in doubt on interactive CLIs, invoke fflush(stdout)! — Sukanta Hui"})})]})}export{B as default};
