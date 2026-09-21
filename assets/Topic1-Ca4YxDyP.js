import{b as a,j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as o}from"./CFileLoader-Clw1BKmX.js";import{F as l}from"./FAQTemplate-DmdkpHR-.js";import{P as d}from"./PlainTextPrint-CS96sBe2.js";import{T as c}from"./TeacherSukantaHui-Cvdemxlb.js";import"./CodeBlock-D970yTe-.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-CBbStT7G.js";import"./EditableCCodeBlock-ZnkKtlGd.js";import"./vendor-monaco-CEXMEfXF.js";const f=`/**\r
 * FileModesBasicsDemo.c\r
 * Demonstrates File Pointer (FILE*), fopen() mode behaviors,\r
 * Mandatory NULL checks, and clean stream closing with fclose().\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main(void) {\r
    const char *test_filename = "demo_file.txt";\r
\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - FILE MODES & FOPEN() MECHANICS     \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // 1. Writing to a file in "w" mode (Creates or Overwrites)\r
    printf("--- 1. OPENING FILE IN WRITE MODE (\\"w\\") ---\\n");\r
    FILE *fp = fopen(test_filename, "w");\r
    \r
    // MANDATORY NULL CHECK\r
    if (fp == NULL) {\r
        perror("Error opening file for write");\r
        return 1;\r
    }\r
\r
    fprintf(fp, "Line 1: Initialized in write mode.\\n");\r
    fprintf(fp, "Line 2: Systems Programming at Barrackpore.\\n");\r
    fclose(fp);\r
    fp = NULL;\r
    printf("  Created and wrote 2 lines to '%s' successfully.\\n\\n", test_filename);\r
\r
    // 2. Appending to the file in "a" mode (Preserves existing data)\r
    printf("--- 2. OPENING FILE IN APPEND MODE (\\"a\\") ---\\n");\r
    fp = fopen(test_filename, "a");\r
    if (fp == NULL) {\r
        perror("Error opening file for append");\r
        return 1;\r
    }\r
\r
    fprintf(fp, "Line 3: Appended without truncating old records!\\n");\r
    fclose(fp);\r
    fp = NULL;\r
    printf("  Appended 1 line to '%s' successfully.\\n\\n", test_filename);\r
\r
    // 3. Reading the file back in "r" mode\r
    printf("--- 3. OPENING FILE IN READ MODE (\\"r\\") ---\\n");\r
    fp = fopen(test_filename, "r");\r
    if (fp == NULL) {\r
        perror("Error opening file for read");\r
        return 1;\r
    }\r
\r
    printf("  File Contents:\\n");\r
    char buffer[256];\r
    while (fgets(buffer, sizeof(buffer), fp) != NULL) {\r
        printf("    > %s", buffer);\r
    }\r
    \r
    fclose(fp);\r
    fp = NULL;\r
\r
    // Clean up demo file\r
    remove(test_filename);\r
    printf("\\n  Demo file '%s' closed and cleaned up.\\n", test_filename);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,p=`/**\r
 * FileUpdateModesDemo.c\r
 * Demonstrates C file update modes ("r+", "w+", "a+"),\r
 * showing how to read and modify data within the same stream.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("    CODER & ACCOTAX - FILE UPDATE MODES LAB (\\"+\\")       \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *data_file = "update_modes_demo.dat";\r
\r
    // 1. Initial creation with "w+" (Write + Read, truncates existing)\r
    printf("--- 1. CREATING INITIAL FILE WITH \\"w+\\" MODE ---\\n");\r
    FILE *fp = fopen(data_file, "w+");\r
    if (fp == NULL) {\r
        perror("Failed to create file");\r
        return 1;\r
    }\r
\r
    // Write initial header and records\r
    fprintf(fp, "RECORD001:Swadeep:85\\n");\r
    fprintf(fp, "RECORD002:Tuhina:92\\n");\r
    fprintf(fp, "RECORD003:Debangshu:78\\n");\r
    printf("  Created file and wrote 3 initial student records.\\n");\r
\r
    // Rewind stream pointer back to beginning for reading\r
    rewind(fp);\r
    printf("\\n--- 2. READING BACK WITH SAME STREAM HANDLE ---\\n");\r
    char line[128];\r
    while (fgets(line, sizeof(line), fp) != NULL) {\r
        printf("    > %s", line);\r
    }\r
    fclose(fp);\r
\r
    // 2. Open in "r+" mode to modify existing record in place\r
    printf("\\n--- 3. MODIFYING RECORD IN PLACE WITH \\"r+\\" MODE ---\\n");\r
    fp = fopen(data_file, "r+");\r
    if (fp == NULL) {\r
        perror("Failed to open in r+ mode");\r
        return 1;\r
    }\r
\r
    // Seek directly to record 2 (Tuhina's marks update from 92 to 99)\r
    // RECORD001:Swadeep:85\\n is 20 bytes\r
    fseek(fp, 20, SEEK_SET);\r
    fprintf(fp, "RECORD002:Tuhina:99\\n"); // Overwrite line in place!\r
    printf("  Updated RECORD002 in-place without touching other records.\\n");\r
\r
    fclose(fp);\r
\r
    // 3. Open in "a+" mode to append new records while still being able to read\r
    printf("\\n--- 4. APPENDING WITH \\"a+\\" MODE ---\\n");\r
    fp = fopen(data_file, "a+");\r
    if (fp == NULL) {\r
        perror("Failed to open in a+ mode");\r
        return 1;\r
    }\r
\r
    fprintf(fp, "RECORD004:Abhronila:95\\n");\r
    printf("  Appended RECORD004 to end of file.\\n");\r
\r
    // In a+ mode, writes always jump to the end, but reads can rewind to start!\r
    rewind(fp);\r
    printf("\\n--- 5. FINAL FILE SNAPSHOT ---\\n");\r
    while (fgets(line, sizeof(line), fp) != NULL) {\r
        printf("    > %s", line);\r
    }\r
    fclose(fp);\r
\r
    // Clean up demo file\r
    remove(data_file);\r
    printf("\\n  Cleaned up temporary file '%s'.\\n", data_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,m=`/**\r
 * SafeFileOpenerDemo.c\r
 * Demonstrates defensive programming idioms for C file handling:\r
 * Safe fopen wrapper, mandatory NULL checking, error code logging,\r
 * and clean deterministic resource release.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <errno.h>\r
#include <string.h>\r
\r
/**\r
 * Defensive fopen helper that logs detailed diagnostic information\r
 * if the open operation fails.\r
 */\r
FILE *safe_fopen(const char *filepath, const char *mode) {\r
    if (filepath == NULL || mode == NULL) {\r
        fprintf(stderr, "[ERROR] Null filepath or mode passed to safe_fopen.\\n");\r
        return NULL;\r
    }\r
\r
    FILE *fp = fopen(filepath, mode);\r
    if (fp == NULL) {\r
        fprintf(stderr, "[ERROR] Failed to open '%s' in mode '%s'. Reason: %s (errno=%d)\\n",\r
                filepath, mode, strerror(errno), errno);\r
        return NULL;\r
    }\r
\r
    return fp;\r
}\r
\r
/**\r
 * Safe stream closer that resets pointer to NULL to prevent dangling file handles.\r
 */\r
void safe_fclose(FILE **fp_ptr) {\r
    if (fp_ptr != NULL && *fp_ptr != NULL) {\r
        fclose(*fp_ptr);\r
        *fp_ptr = NULL;\r
    }\r
}\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - SAFE FILE OPENER & ERROR LAB       \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *valid_file = "valid_sample.txt";\r
    const char *missing_file = "non_existent_file_xyz123.txt";\r
\r
    // 1. Attempting to open non-existent file in read mode\r
    printf("--- 1. TESTING CONTROLLED FAILURE (MISSING FILE) ---\\n");\r
    FILE *fp_missing = safe_fopen(missing_file, "r");\r
    if (fp_missing == NULL) {\r
        printf("  [HANDLED] Gracefully trapped missing file error without crash.\\n\\n");\r
    }\r
\r
    // 2. Creating and writing with defensive helpers\r
    printf("--- 2. CREATING FILE SAFELY ---\\n");\r
    FILE *fp_valid = safe_fopen(valid_file, "w");\r
    if (fp_valid != NULL) {\r
        fprintf(fp_valid, "Safe file handling demonstration in Barrackpore.\\n");\r
        printf("  Successfully wrote record to '%s'.\\n", valid_file);\r
        safe_fclose(&fp_valid);\r
        printf("  Stream safely closed. Pointer reset: fp_valid == %s\\n\\n",\r
               fp_valid == NULL ? "NULL" : "ACTIVE");\r
    }\r
\r
    // 3. Reading back safely\r
    printf("--- 3. READING CREATED FILE ---\\n");\r
    fp_valid = safe_fopen(valid_file, "r");\r
    if (fp_valid != NULL) {\r
        char buffer[128];\r
        if (fgets(buffer, sizeof(buffer), fp_valid) != NULL) {\r
            printf("  Read Content: \\"%s\\"\\n", buffer);\r
        }\r
        safe_fclose(&fp_valid);\r
    }\r
\r
    // Cleanup\r
    remove(valid_file);\r
    printf("  Cleaned up sample file '%s'.\\n", valid_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,x=[{question:"What is a `FILE*` pointer in standard C?",answer:"A 'FILE*' is an opaque pointer referencing a standard library internal structure (FILE) that tracks the open file's descriptor, stream buffer, buffer position, file cursor offset, and error/EOF status flags."},{question:"What is the function prototype of fopen() in <stdio.h>?",answer:"The prototype is: 'FILE *fopen(const char *filename, const char *mode);'. It opens the file specified by 'filename' in the given 'mode' and returns a valid 'FILE*' pointer, or NULL on failure."},{question:"What is the function prototype of fclose() in <stdio.h>?",answer:"The prototype is: 'int fclose(FILE *stream);'. It flushes any unwritten output buffer, closes the underlying operating system file descriptor, and releases internal buffer memory, returning 0 on success or EOF on error."},{question:"Why is verifying `if (fp == NULL)` mandatory immediately after fopen()?",answer:"If the file does not exist (in 'r' mode), permissions are denied, the disk is full, or the path is invalid, fopen() fails and returns NULL. Attempting to pass NULL to any file function causes an immediate segmentation fault."},{question:'What does opening a file in "w" (write) mode do if the file already exists?',answer:"In 'w' mode, if the file already exists, its contents are immediately truncated (erased) to 0 bytes. If it does not exist, a new empty file is created."},{question:'What does opening a file in "a" (append) mode do?',answer:"In 'a' mode, all write operations are forced to the end of the file, preserving existing contents. If the file does not exist, it creates a new empty file."},{question:'What happens if you open a non-existent file in "r" (read) mode?',answer:"fopen() fails and returns NULL. It does NOT create the file."},{question:'What is the difference between "r+", "w+", and "a+" update modes?',answer:"'r+' opens for read/write (file must exist). 'w+' creates an empty file for read/write (truncates if exists). 'a+' opens for reading and appending (creates if missing, writes always append to end)."},{question:`What is the meaning of the 'b' flag in file modes (e.g. "rb", "wb", "ab+")?`,answer:"The 'b' specifies Binary mode. On systems like Windows, binary mode suppresses automatic newline translations ('\\r\\n' to '\\n'), ensuring exact raw bytes are preserved."},{question:"Is the 'b' flag required on Linux and POSIX systems?",answer:"On Linux/UNIX systems, text and binary files are treated identically without translation, so 'b' is ignored. However, including 'b' is mandatory for cross-platform portability with Windows."},{question:"What does the function `perror(const char *s)` do?",answer:"'perror' prints the user-supplied prefix string followed by a colon and the human-readable description of the global 'errno' error code (e.g. 'No such file or directory' or 'Permission denied')."},{question:"What happens if a program opens files in a loop without ever calling fclose()?",answer:"It creates a File Descriptor Leak. The process will hit the operating system's open-file limit (e.g., 1024 open files) and all subsequent fopen() calls will fail."},{question:"What is `FOPEN_MAX` in `<stdio.h>`?",answer:"'FOPEN_MAX' is a standard macro defining the minimum number of files that an implementation guarantees can be open simultaneously (typically at least 8, often hundreds)."},{question:"What is `FILENAME_MAX` in `<stdio.h>`?",answer:"'FILENAME_MAX' is an integer constant representing the maximum character length guaranteed for file path strings on the system (e.g., 260 on Windows or 4096 on Linux)."},{question:"What does `remove(const char *filename)` do in C?",answer:"'remove()' deletes the specified file from the file system, returning 0 on success or non-zero on failure."},{question:"What does `rename(const char *oldname, const char *newname)` do in C?",answer:"'rename()' renames or moves a file from 'oldname' to 'newname' atomically on the file system."},{question:`What is the 'x' mode modifier introduced in C11 (e.g. "wx" or "w+x")?`,answer:"The 'x' modifier enables exclusive creation: fopen() fails if the file already exists, preventing accidental overwriting of existing files."},{question:"Why should you set `fp = NULL;` immediately after calling `fclose(fp)`?",answer:"To eliminate the dangling file pointer. Attempting to use a closed 'FILE*' pointer is undefined behavior."},{question:"How do you check if a file exists without modifying it in C?",answer:`Attempt to open it with 'FILE *fp = fopen(filename, "r");'. If 'fp != NULL', the file exists; call 'fclose(fp)'. Alternatively, use the POSIX 'access()' function.`},{question:'Can you switch between reading and writing on an update stream ("r+", "w+", "a+") directly?',answer:"No! The C standard requires calling a positioning function (fseek, fsetpos, rewind) or fflush between read and write operations on update streams."},{question:"How does local classroom debugging at Coder & AccoTax illustrate file permissions?",answer:"In Sukanta Hui's class, students try opening system files or read-only files in 'w' mode, observing how 'fopen' returns NULL and 'perror' prints 'Permission denied', reinforcing error handling discipline."},{question:"What happens if a program terminates abnormally while a file is open in 'w' mode?",answer:"Any unwritten buffered data in RAM is lost, leaving the file on disk truncated or missing recent updates."},{question:"What header defines the `errno` global integer variable?",answer:"The standard header `<errno.h>` declares 'errno'."},{question:'What is the difference between `strerror(errno)` and `perror("msg")`?',answer:"'strerror(errno)' returns a string pointer to the error message; 'perror' immediately prints the custom message followed by the error string to 'stderr'."},{question:"What is the golden rule of file pointer lifecycle management?",answer:"Every successful fopen() must have a matching fclose(), and all fopen() calls must be followed by `if (fp == NULL)` validation!"}],h=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_010 · TOPIC 1: FILE POINTERS & OPENING MODES (FOPEN & FCLOSE)\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. FOPEN() MODES MASTER CHEAT SHEET\r
--------------------------------------------------------------------------------\r
Mode | Purpose          | If File Exists?        | If File Missing? | Initial Cursor\r
-----+------------------+------------------------+------------------+---------------\r
"r"  | Read text        | Reads from start       | FAILS (NULL)     | Beginning\r
"w"  | Write text       | TRUNCATES (Erase to 0) | CREATES new      | Beginning\r
"a"  | Append text      | Appends to end         | CREATES new      | End\r
"r+" | Read & Write     | Preserves existing data| FAILS (NULL)     | Beginning\r
"w+" | Read & Write     | TRUNCATES to 0         | CREATES new      | Beginning\r
"a+" | Read & Append    | Appends to end         | CREATES new      | End\r
"rb" | Binary Read      | Raw bytes read         | FAILS (NULL)     | Beginning\r
"wb" | Binary Write     | Raw bytes write        | CREATES new      | Beginning\r
"ab" | Binary Append    | Raw bytes append       | CREATES new      | End\r
\r
\r
2. DEFENSIVE FILE OPENING PATTERN\r
--------------------------------------------------------------------------------\r
    FILE *fp = fopen("data.txt", "r");\r
    if (fp == NULL) {\r
        perror("Error opening data.txt");\r
        return 1; // Or handle failure gracefully\r
    }\r
    // Perform file operations...\r
    fclose(fp);\r
    fp = NULL; // Neutralize pointer!\r
\r
\r
3. CORE RULES FOR FILE HANDLING HYGIENE\r
--------------------------------------------------------------------------------\r
[1] Always check for NULL after calling fopen().\r
[2] "w" mode immediately destroys all existing contents in the file!\r
[3] Use "a" mode when you want to log new entries without losing past records.\r
[4] Always include 'b' (e.g. "rb", "wb") when reading/writing binary or structs.\r
[5] Always close every opened stream with fclose(fp) before program exit.\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function A(){const[n,i]=a.useState(0),r=[{id:"ex1",title:"1. Core Modes (r, w, a)",file:f,filename:"FileModesBasicsDemo.c",description:"Demonstrates opening files in Write ('w'), Append ('a'), and Read ('r') modes, mandatory NULL checking, and clean stream termination with fclose().",lineByLine:[{line:'FILE *fp = fopen("demo_file.txt", "w");',explanation:"Requests the OS to create/open the file in Write mode. If the file exists, it is wiped to 0 bytes; if not, it is created."},{line:'if (fp == NULL) { perror("..."); return 1; }',explanation:"Mandatory safety check! If disk write permissions are denied or path is invalid, fopen returns NULL. We catch it to prevent segmentation faults."},{line:'fprintf(fp, "Line 1: Initialized...\\n");',explanation:"Writes structured formatted text directly into the file stream buffer."},{line:"fclose(fp); fp = NULL;",explanation:"Flushes all buffered bytes to disk, releases the OS file descriptor, and sets the pointer to NULL to avoid dangling handles."},{line:'fp = fopen("demo_file.txt", "a");',explanation:"Opens the file in Append mode ('a'). This preserves all existing lines and places the write cursor at the very end."},{line:"while (fgets(buffer, sizeof(buffer), fp) != NULL)",explanation:"Loops through the file line by line safely, printing each line until reaching the end of the stream."}],output:`========================================================
   CODER & ACCOTAX - FILE MODES & FOPEN() MECHANICS     
========================================================

--- 1. OPENING FILE IN WRITE MODE ("w") ---
  Created and wrote 2 lines to 'demo_file.txt' successfully.

--- 2. OPENING FILE IN APPEND MODE ("a") ---
  Appended 1 line to 'demo_file.txt' successfully.

--- 3. OPENING FILE IN READ MODE ("r") ---
  File Contents:
    > Line 1: Initialized in write mode.
    > Line 2: Systems Programming at Barrackpore.
    > Line 3: Appended without truncating old records!

  Demo file 'demo_file.txt' closed and cleaned up.
========================================================`},{id:"ex2",title:"2. Update Modes (r+, w+, a+)",file:p,filename:"FileUpdateModesDemo.c",description:"Illustrates bidirectional update modes ('+'), performing in-place record overwriting using fseek() in 'r+' mode, and rewind() inspections in 'a+' mode.",lineByLine:[{line:'FILE *fp = fopen(data_file, "w+");',explanation:"Creates a new blank file in Read/Write mode. Enables writing initial records and reading them back on the same stream handle."},{line:"rewind(fp);",explanation:"Snaps the file position indicator back to byte 0 so we can read the freshly written data from the beginning."},{line:'fp = fopen(data_file, "r+");',explanation:"Opens an existing file for both reading and in-place updating without wiping out existing records."},{line:"fseek(fp, 20, SEEK_SET);",explanation:"Jumps directly to byte offset 20 (where Record 2 starts) to perform an in-place update without affecting Record 1 or 3."},{line:'fp = fopen(data_file, "a+");',explanation:"Append update mode. All writes are automatically forced to the end of the file, while reads can seek anywhere."}],output:`========================================================
    CODER & ACCOTAX - FILE UPDATE MODES LAB ("+")       
========================================================

--- 1. CREATING INITIAL FILE WITH "w+" MODE ---
  Created file and wrote 3 initial student records.

--- 2. READING BACK WITH SAME STREAM HANDLE ---
    > RECORD001:Swadeep:85
    > RECORD002:Tuhina:92
    > RECORD003:Debangshu:78

--- 3. MODIFYING RECORD IN PLACE WITH "r+" MODE ---
  Updated RECORD002 in-place without touching other records.

--- 4. APPENDING WITH "a+" MODE ---
  Appended RECORD004 to end of file.

--- 5. FINAL FILE SNAPSHOT ---
    > RECORD001:Swadeep:85
    > RECORD002:Tuhina:99
    > RECORD003:Debangshu:78
    > RECORD004:Abhronila:95

  Cleaned up temporary file 'update_modes_demo.dat'.
========================================================`},{id:"ex3",title:"3. Defensive Safe File Opener",file:m,filename:"SafeFileOpenerDemo.c",description:"A production-ready defensive wrapper pattern for fopen() and fclose() that traps errors, prints detailed errno system diagnostics, and prevents dangling pointers.",lineByLine:[{line:"FILE *safe_fopen(const char *path, const char *mode)",explanation:"A defensive helper function that validates input pointers and centralizes error diagnostic logging."},{line:"strerror(errno), errno",explanation:"Queries the OS error subsystem to translate integer error codes into plain-English messages (e.g., 'No such file or directory')."},{line:"void safe_fclose(FILE **fp_ptr)",explanation:"Accepts a pointer-to-pointer (FILE**) so it can close the stream AND reset the caller's variable to NULL in one step."}],output:`========================================================
   CODER & ACCOTAX - SAFE FILE OPENER & ERROR LAB       
========================================================

--- 1. TESTING CONTROLLED FAILURE (MISSING FILE) ---
[ERROR] Failed to open 'non_existent_file_xyz123.txt' in mode 'r'. Reason: No such file or directory (errno=2)
  [HANDLED] Gracefully trapped missing file error without crash.

--- 2. CREATING FILE SAFELY ---
  Successfully wrote record to 'valid_sample.txt'.
  Stream safely closed. Pointer reset: fp_valid == NULL

--- 3. READING CREATED FILE ---
  Read Content: "Safe file handling demonstration in Barrackpore.
"
  Cleaned up sample file 'valid_sample.txt'.
========================================================`}];return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 1"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"File Stream Management"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"File Pointers & Opening Modes (fopen & fclose)"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master file stream binding with ",e.jsx("code",{children:"fopen()"})," and clean deallocation with ",e.jsx("code",{children:"fclose()"}),". Understand the operational matrix between Read (",e.jsx("code",{children:"r"}),"), Write (",e.jsx("code",{children:"w"}),"), Append (",e.jsx("code",{children:"a"}),"), and Update (",e.jsx("code",{children:"+"}),") modes."]})]}),e.jsxs("section",{className:"space-y-5 bg-gradient-to-br from-emerald-950/40 via-slate-800/40 to-slate-900 border border-emerald-500/30 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl p-2 bg-emerald-500/20 rounded-xl border border-emerald-500/30",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"In Very Simple Terms: What is a FILE Pointer and Mode?"}),e.jsx("p",{className:"text-emerald-300 text-xs md:text-sm font-medium",children:"The library diary and bookmark analogy"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-amber-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📖"})," The Librarian & Bookmark (FILE*)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Think of a file on your disk as a spiral notebook on a library shelf. When you call ",e.jsx("code",{children:"fopen()"}),", you ask the librarian to pull the notebook and insert a ",e.jsx("strong",{children:"bookmark"}),". The pointer (",e.jsx("code",{children:"FILE*"}),") tracks exactly which line or byte you are currently reading or writing!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-rose-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"⚠️"}),' The "w" Mode Danger']}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Opening with ",e.jsx("code",{children:'"w"'})," is like taking the old notebook and throwing all previous pages into the paper shredder! If the file already had 1,000 student records, ",e.jsx("code",{children:'"w"'})," wipes it clean to 0 bytes. If you only want to add new lines, always use ",e.jsx("code",{children:'"a"'})," (Append)!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🔒"})," Closing the Diary (fclose)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["When you finish writing, you must call ",e.jsx("code",{children:"fclose(fp)"}),". This locks the notebook, saves all pending ink from memory onto the physical page, and returns the file descriptor back to the operating system so other programs can access it."]})]})]}),e.jsx("div",{className:"bg-slate-950/70 border border-slate-800 rounded-xl p-3 text-xs text-slate-300 overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"text-sky-400 border-b border-slate-800",children:[e.jsx("th",{className:"pb-2",children:"Mode"}),e.jsx("th",{className:"pb-2",children:"If File Exists?"}),e.jsx("th",{className:"pb-2",children:"If File Missing?"}),e.jsx("th",{className:"pb-2",children:"Initial Cursor Position"}),e.jsx("th",{className:"pb-2",children:"Purpose"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800/60",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"py-1.5 font-mono text-indigo-300 font-bold",children:'"r"'}),e.jsx("td",{className:"text-emerald-400",children:"Opens normally"}),e.jsx("td",{className:"text-rose-400 font-bold",children:"Returns NULL!"}),e.jsx("td",{children:"Beginning (Byte 0)"}),e.jsx("td",{children:"Read only"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1.5 font-mono text-rose-300 font-bold",children:'"w"'}),e.jsx("td",{className:"text-rose-400 font-bold",children:"TRUNCATES to 0 bytes!"}),e.jsx("td",{className:"text-emerald-400",children:"Creates new file"}),e.jsx("td",{children:"Beginning (Byte 0)"}),e.jsx("td",{children:"Fresh write / overwrite"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1.5 font-mono text-emerald-300 font-bold",children:'"a"'}),e.jsx("td",{className:"text-emerald-400",children:"Preserves existing data"}),e.jsx("td",{className:"text-emerald-400",children:"Creates new file"}),e.jsx("td",{children:"End of File"}),e.jsx("td",{children:"Safe appending / logs"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"py-1.5 font-mono text-amber-300 font-bold",children:'"r+"'}),e.jsx("td",{className:"text-emerald-400",children:"Preserves data"}),e.jsx("td",{className:"text-rose-400 font-bold",children:"Returns NULL!"}),e.jsx("td",{children:"Beginning (Byte 0)"}),e.jsx("td",{children:"Read and In-place Update"})]})]})]})})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: The FILE* Handle & Mode Behaviors"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Files allow C programs to persist data permanently to secondary storage (SSD, HDD, NVMe). In C, interaction with a file begins by creating a stream bridge using ",e.jsx("code",{children:"fopen()"})," and ends with releasing system file descriptors via ",e.jsx("code",{children:"fclose()"}),"."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-emerald-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-emerald-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore lab, Abhronila accidentally opened an existing student database file with ",e.jsx("code",{children:'fopen("students.txt", "w")'})," to add a new record. To her horror, all 500 existing student records were instantly erased! Sukanta Hui explained that ",e.jsx("code",{children:'"w"'})," mode unconditionally truncates existing files to 0 bytes upon opening; for logging or adding records, always use Append mode (",e.jsx("code",{children:'"a"'}),")!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: File Mode Decision Matrix"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"180",rx:"10",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a5b4fc",className:"font-bold text-sm",children:'"r" (READ MODE)'}),e.jsx("text",{x:"20",y:"55",fill:"#818cf8",className:"text-xs",children:"File must exist beforehand"}),e.jsx("rect",{x:"20",y:"70",width:"210",height:"40",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"30",y:"95",fill:"#e0e7ff",className:"font-mono text-xs font-bold",children:"Missing File → Returns NULL"}),e.jsx("text",{x:"20",y:"145",fill:"#c7d2fe",className:"text-xs",children:"Cursor placed at start (offset 0). Read only."})]}),e.jsxs("g",{transform:"translate(325, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"180",rx:"10",fill:"#450a0a",stroke:"#ef4444",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#fca5a5",className:"font-bold text-sm",children:'"w" (WRITE MODE)'}),e.jsx("text",{x:"20",y:"55",fill:"#f87171",className:"text-xs",children:"Creates or TRUNCATES"}),e.jsx("rect",{x:"20",y:"70",width:"210",height:"40",fill:"#7f1d1d",rx:"4"}),e.jsx("text",{x:"30",y:"95",fill:"#fee2e2",className:"font-mono text-xs font-bold",children:"Existing File → Truncated to 0!"}),e.jsx("text",{x:"20",y:"145",fill:"#fca5a5",className:"text-xs",children:"Erases old data. Creates file if missing."})]}),e.jsxs("g",{transform:"translate(610, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"180",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#6ee7b7",className:"font-bold text-sm",children:'"a" (APPEND MODE)'}),e.jsx("text",{x:"20",y:"55",fill:"#34d399",className:"text-xs",children:"Preserves existing records"}),e.jsx("rect",{x:"20",y:"70",width:"210",height:"40",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"30",y:"95",fill:"#ecfdf5",className:"font-mono text-xs font-bold",children:"Writes forced to end of file"}),e.jsx("text",{x:"20",y:"145",fill:"#a7f3d0",className:"text-xs",children:"Safe for logging. Creates file if missing."})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Mode Summary & Rules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"Mandatory NULL Check Idiom"}),e.jsx("pre",{className:"bg-slate-950 p-2.5 rounded font-mono text-emerald-300",children:`FILE *fp = fopen("data.txt", "r");
if (fp == NULL) {
    perror("Error opening file");
    return 1; // Exit or handle gracefully!
}`}),e.jsxs("p",{className:"text-slate-300",children:["Dereferencing a NULL ",e.jsx("code",{children:"FILE*"})," causes an immediate segmentation fault (SIGSEGV) crash."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"Clean Deallocation & Dangling Prevention"}),e.jsx("pre",{className:"bg-slate-950 p-2.5 rounded font-mono text-sky-300",children:`fclose(fp);
fp = NULL; // Prevent accidental reuse`}),e.jsx("p",{className:"text-slate-300",children:"Failing to close files leaks operating system file descriptor handles (limited to 1024 on most OSes)."})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: File Opening & Mode Demonstrations"]}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Explore 3 comprehensive C programs with step-by-step line explanations and terminal outputs."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:r.map((t,s)=>e.jsx("button",{onClick:()=>i(s),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${n===s?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:t.title},t.id))})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"📋 Overview:"}),e.jsx("span",{children:r[n].description})]}),e.jsx(o,{fileModule:r[n].file,title:r[n].filename,editable:!1}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 md:p-5 space-y-3 shadow-md",children:[e.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," Plain-English Line-by-Line Code Breakdown:"]}),e.jsx("div",{className:"space-y-2",children:r[n].lineByLine.map((t,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80",children:[e.jsx("code",{className:"text-sky-300 font-mono text-[11px] sm:w-2/5 shrink-0 font-semibold bg-slate-900 px-2 py-1 rounded border border-slate-700/60",children:t.line}),e.jsx("span",{className:"text-slate-300 text-xs leading-relaxed",children:t.explanation})]},s))})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-950 p-4 shadow-inner",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:r[n].output})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:'Pitfall: Accidental Truncation with "w"'}),e.jsxs("p",{className:"text-slate-300",children:["Opening an existing log or database file with ",e.jsx("code",{children:'"w"'})," wipes it completely. If you only intend to append new entries, always open in ",e.jsx("code",{children:'"a"'})," mode."]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Always Set fp = NULL After fclose"}),e.jsxs("p",{className:"text-slate-300",children:["Closing a stream does not clear the pointer variable. Setting ",e.jsx("code",{children:"fp = NULL"})," ensures you cannot inadvertently attempt to perform operations on a closed descriptor."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["What happens when two different processes open the same file simultaneously in ",e.jsx("code",{children:'"w"'})," mode? How do file locking mechanisms (like ",e.jsx("code",{children:"flock()"})," or ",e.jsx("code",{children:"LockFileEx()"}),") prevent race-condition data corruption in industrial servers?"]})]}),e.jsx("section",{children:e.jsx(l,{title:"Module 003_010 Topic 1 FAQs: File Pointers & Opening Modes",questions:x})}),e.jsx("section",{children:e.jsx(d,{content:h,title:"Module 003_010 Topic 1 Note: File Pointers & Opening Modes",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(c,{note:"Never skip the NULL check after fopen()! In real-world software, missing files, permission errors, and full disks are everyday realities. Always check if (fp == NULL), log with perror(), and clean up gracefully. — Sukanta Hui"})})]})}export{A as default};
