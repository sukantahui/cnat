import{b as i,j as e}from"./vendor-react-core-BBXbtqt1.js";import{C as o}from"./CFileLoader-Ch_c8mqH.js";import{F as l}from"./FAQTemplate-BamsZuNW.js";import{P as c}from"./PlainTextPrint-CGJ_aUDk.js";import{T as d}from"./TeacherSukantaHui-VMH_OtYp.js";import"./CodeBlock-Cor_8i9W.js";import"./vendor-prism-B7oW9GGR.js";import"./vendor-icons-IjXdH6hS.js";import"./EditableCCodeBlock-Bte34zr4.js";import"./vendor-monaco-sD6ueU9e.js";const f=`/**\r
 * TextFileOperationsDemo.c\r
 * Demonstrates Text Stream Operations:\r
 * 1. Character I/O (fputc, fgetc)\r
 * 2. Line I/O (fputs, fgets)\r
 * 3. Formatted I/O (fprintf, fscanf)\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main(void) {\r
    const char *text_file = "text_records.txt";\r
\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - TEXT STREAM I/O OPERATIONS LAB     \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // 1. Formatted Writing with fprintf()\r
    printf("--- 1. WRITING STRUCTURED TEXT (fprintf) ---\\n");\r
    FILE *fp = fopen(text_file, "w");\r
    if (fp == NULL) {\r
        perror("Failed to create text_records.txt");\r
        return 1;\r
    }\r
\r
    // Write formatted records: ID Name Score\r
    fprintf(fp, "%d %s %.2f\\n", 101, "Swadeep", 94.5);\r
    fprintf(fp, "%d %s %.2f\\n", 102, "Tuhina", 98.0);\r
    fprintf(fp, "%d %s %.2f\\n", 103, "Abhronila", 96.5);\r
    \r
    // Write line with fputs() and characters with fputc()\r
    fputs("--- End of Student Marks ---\\n", fp);\r
    fputc('#', fp);\r
    fputc('\\n', fp);\r
\r
    fclose(fp);\r
    fp = NULL;\r
    printf("  Formatted text successfully written to '%s'.\\n\\n", text_file);\r
\r
    // 2. Line-by-Line Reading with fgets()\r
    printf("--- 2. SAFE LINE-BY-LINE READING (fgets) ---\\n");\r
    fp = fopen(text_file, "r");\r
    if (fp == NULL) {\r
        perror("Failed to open text_records.txt for read");\r
        return 1;\r
    }\r
\r
    char line_buffer[256];\r
    int line_num = 1;\r
    while (fgets(line_buffer, sizeof(line_buffer), fp) != NULL) {\r
        printf("  [Line %d]: %s", line_num++, line_buffer);\r
    }\r
    rewind(fp); // Reset file pointer to beginning for formatted read\r
\r
    // 3. Formatted Parsing with fscanf()\r
    printf("\\n--- 3. PARSING STRUCTURED DATA (fscanf) ---\\n");\r
    int id;\r
    char name[50];\r
    float score;\r
\r
    while (fscanf(fp, "%d %49s %f", &id, name, &score) == 3) {\r
        printf("  Parsed Record -> ID: %d | Name: %-10s | Score: %.2f\\n", id, name, score);\r
    }\r
\r
    fclose(fp);\r
    fp = NULL;\r
\r
    // Clean up\r
    remove(text_file);\r
    printf("\\n  Text file operations completed successfully.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,p=`/**\r
 * CharLineStreamsDemo.c\r
 * Demonstrates character-level I/O (fgetc, fputc) and\r
 * bounded safe line-level I/O (fgets, fputs) in C.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <ctype.h>\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - CHARACTER & LINE STREAM I/O LAB    \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *src_file = "source_text.txt";\r
    const char *upper_file = "uppercase_copy.txt";\r
\r
    // 1. Create a sample text file using fputs\r
    printf("--- 1. CREATING SOURCE FILE USING fputs() ---\\n");\r
    FILE *fp_out = fopen(src_file, "w");\r
    if (fp_out == NULL) {\r
        perror("Error creating source file");\r
        return 1;\r
    }\r
\r
    fputs("Hello Coder & AccoTax Students!\\n", fp_out);\r
    fputs("Learning C Programming in Barrackpore.\\n", fp_out);\r
    fputs("Mastering systems programming and stream I/O.\\n", fp_out);\r
    fclose(fp_out);\r
    printf("  Wrote 3 lines to '%s'.\\n\\n", src_file);\r
\r
    // 2. Character-by-character transformation using fgetc() and fputc()\r
    printf("--- 2. CHARACTER-BY-CHARACTER COPY & UPPERCASE CONVERSION ---\\n");\r
    FILE *fp_in = fopen(src_file, "r");\r
    fp_out = fopen(upper_file, "w");\r
\r
    if (fp_in == NULL || fp_out == NULL) {\r
        perror("Error opening files for character stream");\r
        return 1;\r
    }\r
\r
    // IMPORTANT: ch MUST be int, NOT char, because EOF is -1!\r
    int ch;\r
    int char_count = 0;\r
    while ((ch = fgetc(fp_in)) != EOF) {\r
        fputc(toupper(ch), fp_out);\r
        char_count++;\r
    }\r
\r
    fclose(fp_in);\r
    fclose(fp_out);\r
    printf("  Converted and copied %d characters to '%s'.\\n\\n", char_count, upper_file);\r
\r
    // 3. Line-by-line reading with fgets()\r
    printf("--- 3. READING LINES SAFELY WITH fgets() ---\\n");\r
    fp_in = fopen(upper_file, "r");\r
    if (fp_in != NULL) {\r
        char line_buffer[128];\r
        int line_num = 1;\r
        while (fgets(line_buffer, sizeof(line_buffer), fp_in) != NULL) {\r
            printf("  [Line %d] %s", line_num++, line_buffer);\r
        }\r
        fclose(fp_in);\r
    }\r
\r
    // Clean up temporary files\r
    remove(src_file);\r
    remove(upper_file);\r
    printf("\\n  Cleaned up temporary demonstration files.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,h=`/**\r
 * WordCountAnalyzerDemo.c\r
 * Industrial CLI Text Analyzer: Counts total lines, words, characters,\r
 * and alphanumeric frequency from a text file stream.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <ctype.h>\r
#include <stdbool.h>\r
\r
typedef struct {\r
    long lines;\r
    long words;\r
    long characters;\r
    long digits;\r
    long alphabets;\r
} FileStats;\r
\r
void analyze_text_stream(FILE *fp, FileStats *stats) {\r
    int ch;\r
    bool in_word = false;\r
\r
    while ((ch = fgetc(fp)) != EOF) {\r
        stats->characters++;\r
\r
        if (ch == '\\n') {\r
            stats->lines++;\r
        }\r
\r
        if (isdigit(ch)) {\r
            stats->digits++;\r
        } else if (isalpha(ch)) {\r
            stats->alphabets++;\r
        }\r
\r
        if (isspace(ch)) {\r
            in_word = false;\r
        } else {\r
            if (!in_word) {\r
                in_word = true;\r
                stats->words++;\r
            }\r
        }\r
    }\r
}\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - CLI TEXT FILE ANALYZER LAB         \\n");\r
    printf("========================================================\\n\\n");\r
\r
    const char *doc_file = "sample_document.txt";\r
\r
    // 1. Create a multi-line test document\r
    FILE *fp = fopen(doc_file, "w");\r
    if (fp == NULL) {\r
        perror("Error creating sample document");\r
        return 1;\r
    }\r
\r
    fprintf(fp, "Coder and AccoTax institute is located in Barrackpore 700120.\\n");\r
    fprintf(fp, "Sukanta Hui teaches C systems programming and memory management.\\n");\r
    fprintf(fp, "Swadeep, Tuhina, and Debangshu scored 100 in the lab evaluation.\\n");\r
    fprintf(fp, "File stream I/O enables persistent database operations.\\n");\r
    fclose(fp);\r
\r
    // 2. Perform stream analysis\r
    fp = fopen(doc_file, "r");\r
    if (fp == NULL) {\r
        perror("Error opening document for analysis");\r
        return 1;\r
    }\r
\r
    FileStats stats = {0, 0, 0, 0, 0};\r
    analyze_text_stream(fp, &stats);\r
    fclose(fp);\r
\r
    // 3. Display summary metrics\r
    printf("--- FILE ANALYSIS REPORT: '%s' ---\\n", doc_file);\r
    printf("  Total Lines       : %ld\\n", stats.lines);\r
    printf("  Total Words       : %ld\\n", stats.words);\r
    printf("  Total Characters  : %ld bytes\\n", stats.characters);\r
    printf("  Alphabet Letters  : %ld\\n", stats.alphabets);\r
    printf("  Numeric Digits    : %ld\\n", stats.digits);\r
    printf("--------------------------------------------------------\\n");\r
\r
    // Cleanup\r
    remove(doc_file);\r
    printf("  Cleaned up temporary document '%s'.\\n", doc_file);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,u=[{question:"What is the function prototype of fgetc() in <stdio.h>?",answer:"The prototype is: 'int fgetc(FILE *stream);'. It reads the next single unsigned character from the stream, advances the file position indicator, and returns it cast to an 'int', or returns EOF on end-of-file or error."},{question:"Why does fgetc() return an 'int' instead of a 'char'?",answer:"Because 'fgetc()' must be able to return all possible 256 valid byte values (0 to 255) plus the distinct special sentinel value 'EOF' (which is typically -1). A standard char cannot distinguish between EOF and byte value 0xFF (255)."},{question:"What is the function prototype of fputc() in <stdio.h>?",answer:"The prototype is: 'int fputc(int ch, FILE *stream);'. It writes the character 'ch' (converted to an unsigned char) to the specified stream, returning the character written on success or EOF on error."},{question:"What is the function prototype of fgets() in <stdio.h>?",answer:"The prototype is: 'char *fgets(char *str, int num, FILE *stream);'. It reads at most 'num - 1' characters from the stream until a newline ('\\n') or EOF is encountered, appends a null terminator ('\\0'), and returns 'str', or NULL on EOF/error."},{question:"Why is fgets() considered completely safe compared to the deprecated gets() function?",answer:"Because 'fgets()' requires specifying the maximum buffer size limit ('num'), strictly preventing buffer overflow vulnerabilities. 'gets()' lacked any length parameter and could write unbounded input into memory."},{question:"Does fgets() retain the newline character ('\\n') in the buffer?",answer:"Yes! If a newline is encountered before 'num - 1' characters are read, 'fgets()' stores the '\\n' in the destination buffer immediately before the trailing '\\0'."},{question:"How do you strip the trailing newline ('\\n') from an fgets() buffer?",answer:`Using: 'str[strcspn(str, "\\r\\n")] = '\\0';' or 'size_t len = strlen(str); if (len > 0 && str[len-1] == '\\n') str[len-1] = '\\0';'.`},{question:"What does fputs() do and does it append a newline automatically?",answer:"'int fputs(const char *str, FILE *stream);' writes the null-terminated string 'str' to the stream. Unlike 'puts()', 'fputs()' does NOT append a newline ('\\n') automatically."},{question:"What is the function prototype of fprintf() in <stdio.h>?",answer:"'int fprintf(FILE *stream, const char *format, ...);' writes formatted text to the specified stream, returning the total number of characters printed or a negative value on error."},{question:"What is the function prototype of fscanf() in <stdio.h>?",answer:"'int fscanf(FILE *stream, const char *format, ...);' parses formatted input from the stream according to format specifiers, returning the number of input items successfully matched and assigned, or EOF."},{question:"Why should you always check the return value of fscanf()?",answer:`Checking 'if (fscanf(fp, "%d %s", &id, name) == 2)' verifies that both fields were matched successfully, preventing processing uninitialized variables if formatting errors occur in the file.`},{question:"Why should you specify field widths in fscanf string parsing (e.g. `%49s`)?",answer:"Specifying '%49s' ensures that fscanf will never read more than 49 characters into a 50-byte buffer, eliminating buffer overflow vulnerabilities from malicious long strings in files."},{question:"What does `rewind(FILE *stream)` do?",answer:"'rewind(stream)' resets the file position indicator back to the very beginning of the file and clears the stream's error and EOF indicators (equivalent to '(void)fseek(stream, 0L, SEEK_SET); clearerr(stream);')."},{question:"How do you copy one text file to another character by character using fgetc and fputc?",answer:"int ch; while ((ch = fgetc(src)) != EOF) { fputc(ch, dest); }"},{question:"How do you count the total number of lines in a text file?",answer:"int ch, lines = 0; while ((ch = fgetc(fp)) != EOF) { if (ch == '\\n') lines++; }"},{question:"What is `getchar()` and `putchar()` in relation to fgetc and fputc?",answer:"'getchar()' is equivalent to 'fgetc(stdin)', and 'putchar(ch)' is equivalent to 'fputc(ch, stdout)'."},{question:"What happens if fgets() encounters EOF before reading any characters?",answer:"fgets() leaves the contents of the buffer untouched and returns NULL."},{question:"What is the behavior of fscanf() with whitespace characters?",answer:"Most format specifiers (like %d, %f, %s) automatically skip leading whitespace (spaces, tabs, newlines) before parsing the data. The '%c' specifier does NOT skip whitespace unless preceded by a space (' %c')."},{question:"How do you read a full line with spaces using fscanf()?",answer:`Using a scanset format specifier: 'fscanf(fp, " %255[^\\n]", buffer);' reads up to 255 characters until a newline is reached.`},{question:"What is the difference between `printf(...)` and `fprintf(stdout, ...)`?",answer:"They are completely identical in functionality. 'printf(...)' is defined as a direct wrapper around 'fprintf(stdout, ...)'."},{question:"How does local classroom debugging at Coder & AccoTax demonstrate text parsing?",answer:"In Sukanta Hui's class, students build student marksheet generators that read CSV files line-by-line using 'fgets' and parse fields using 'sscanf' or 'strtok', reinforcing data validation."},{question:"What happens if a text file does not end with a newline character ('\\n')?",answer:"fgets() still reads the final line and appends '\\0' when EOF is reached; the buffer simply won't contain a '\\n' character."},{question:"Why is line-by-line reading with `fgets()` preferred over `fscanf()` for unstructured user data?",answer:"Because 'fgets()' always consumes exactly one full line regardless of corrupted contents, preventing infinite loops caused by mismatched 'fscanf()' specifiers."},{question:"What is `snprintf` vs `fprintf`?",answer:"'fprintf' formats text and writes to a file stream; 'snprintf' formats text and writes into a memory character array with explicit maximum length boundary protection."},{question:"What is the golden rule when reading text files with fscanf?",answer:'Always verify the return value matches the expected item count: `if (fscanf(fp, "%d %s", &a, b) == 2) { /* valid */ }` to prevent reading garbage on malformed file rows!'}],x=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_010 · TOPIC 2: TEXT FILE OPERATIONS (FGETC, FGETS, FPRINTF, FSCANF)\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. CHARACTER I/O (FGETC & FPUTC)\r
--------------------------------------------------------------------------------\r
- int fgetc(FILE *fp);\r
  * Returns int (must hold 0-255 plus EOF sentinel -1).\r
- int fputc(int ch, FILE *fp);\r
- Idiom: int c; while ((c = fgetc(fp)) != EOF) { fputc(c, stdout); }\r
\r
\r
2. LINE I/O (FGETS & FPUTS - BUFFER SAFE)\r
--------------------------------------------------------------------------------\r
- char *fgets(char *buf, int max_len, FILE *fp);\r
  * Reads at most max_len - 1 characters until '\\n' or EOF.\r
  * Stores '\\n' in buffer and appends '\\0'.\r
  * Safe replacement for deprecated gets().\r
- int fputs(const char *str, FILE *fp);\r
  * Writes string to file without adding extra newline.\r
\r
\r
3. FORMATTED I/O (FPRINTF & FSCANF)\r
--------------------------------------------------------------------------------\r
- fprintf(fp, "ID: %d Name: %s\\n", id, name);\r
- fscanf(fp, "%d %49s", &id, name);\r
  * ALWAYS specify field width (e.g. %49s for 50-byte buffer) to prevent overflow!\r
  * ALWAYS check return value: if (fscanf(fp, "%d %s", &id, name) == 2)\r
\r
\r
4. STRIPPING TRAILING NEWLINE FROM FGETS BUFFER\r
--------------------------------------------------------------------------------\r
    char line[256];\r
    if (fgets(line, sizeof(line), fp) != NULL) {\r
        line[strcspn(line, "\\r\\n")] = '\\0'; // Cleans trailing \\n or \\r\\n\r
    }\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function L(){const[t,a]=i.useState(0),n=[{id:"ex1",title:"1. Formatted I/O (fprintf / fscanf)",file:f,filename:"TextFileOperationsDemo.c",description:"Generates structured tabular student grade reports using fprintf() and parses them back safely using formatted fscanf() token specifiers.",lineByLine:[{line:'fprintf(fp, "%d %s %.2f %c\\n", id, name, score, grade);',explanation:"Writes formatted values into the text file separated by spaces, rounding scores to 2 decimal places."},{line:'while (fscanf(fp, "%d %49s %f %c", &id, name, &score, &grade) == 4)',explanation:"Golden pattern! Checks that fscanf successfully parsed exactly 4 items. The %49s prevents string buffer overflows."},{line:"total_score += score; count++;",explanation:"Accumulates numerical grades to calculate average student performance across the entire class."}],output:`========================================================
   CODER & ACCOTAX - TEXT FILE I/O OPERATIONS LAB       
========================================================

--- 1. WRITING STRUCTURED DATA WITH fprintf() ---
  Created 'student_grades.txt' and formatted 3 student records.

--- 2. READING & PARSING STRUCTURED DATA WITH fscanf() ---
  Parsed Student Records:
    [ID: 101] Swadeep     | Score:  88.50 | Grade: A
    [ID: 102] Tuhina      | Score:  94.00 | Grade: A
    [ID: 103] Debangshu   | Score:  76.25 | Grade: B

  Average Class Score: 86.25

  Cleaned up 'student_grades.txt'.
========================================================`},{id:"ex2",title:"2. Char & Line Streams (fgetc / fgets)",file:p,filename:"CharLineStreamsDemo.c",description:"Demonstrates single-character stream transformation using int-safe fgetc()/fputc() and bounded safe line reading using fgets().",lineByLine:[{line:'fputs("Hello Coder & AccoTax...\\n", fp_out);',explanation:"Writes a complete string line to the output stream without adding any extra characters."},{line:"int ch; while ((ch = fgetc(fp_in)) != EOF)",explanation:"Reads one character at a time. The variable 'ch' MUST be an int so it can store EOF (-1) without overflow."},{line:"fputc(toupper(ch), fp_out);",explanation:"Converts each character to uppercase in memory and writes it out to the destination file stream."},{line:"while (fgets(line_buffer, sizeof(line_buffer), fp_in) != NULL)",explanation:"Reads an entire line into memory. Guarantees buffer safety by limiting input to sizeof(line_buffer) bytes."}],output:`========================================================
   CODER & ACCOTAX - CHARACTER & LINE STREAM I/O LAB    
========================================================

--- 1. CREATING SOURCE FILE USING fputs() ---
  Wrote 3 lines to 'source_text.txt'.

--- 2. CHARACTER-BY-CHARACTER COPY & UPPERCASE CONVERSION ---
  Converted and copied 119 characters to 'uppercase_copy.txt'.

--- 3. READING LINES SAFELY WITH fgets() ---
  [Line 1] HELLO CODER & ACCOTAX STUDENTS!
  [Line 2] LEARNING C PROGRAMMING IN BARRACKPORE.
  [Line 3] MASTERING SYSTEMS PROGRAMMING AND STREAM I/O.

  Cleaned up temporary demonstration files.
========================================================`},{id:"ex3",title:"3. CLI Text & Word Analyzer",file:h,filename:"WordCountAnalyzerDemo.c",description:"A complete industrial CLI file analytics engine that inspects a text file stream to calculate total line counts, word counts, alphabets, and digits.",lineByLine:[{line:"stats->characters++;",explanation:"Increments total character count for every byte read from the file stream."},{line:"if (ch == '\\n') stats->lines++;",explanation:"Detects newline characters to track the total number of lines in the document."},{line:"if (isspace(ch)) in_word = false; else if (!in_word) ...",explanation:"State machine tracking transitions from whitespace to letters to calculate total word count accurately."}],output:`========================================================
   CODER & ACCOTAX - CLI TEXT FILE ANALYZER LAB         
========================================================

--- FILE ANALYSIS REPORT: 'sample_document.txt' ---
  Total Lines       : 4
  Total Words       : 31
  Total Characters  : 265 bytes
  Alphabet Letters  : 209
  Numeric Digits    : 9
--------------------------------------------------------
  Cleaned up temporary document 'sample_document.txt'.
========================================================`}];return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 2"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Text Stream I/O"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Text File Stream Operations: Character, Line & Formatted I/O"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master reading and writing human-readable text files in C: Character-level I/O with ",e.jsx("code",{children:"fgetc()"})," / ",e.jsx("code",{children:"fputc()"}),", safe line-by-line reading with ",e.jsx("code",{children:"fgets()"})," / ",e.jsx("code",{children:"fputs()"}),", and structured parsing with ",e.jsx("code",{children:"fprintf()"})," / ",e.jsx("code",{children:"fscanf()"}),"."]})]}),e.jsxs("section",{className:"space-y-5 bg-gradient-to-br from-indigo-950/40 via-slate-800/40 to-slate-900 border border-indigo-500/30 rounded-2xl p-6 md:p-8 shadow-xl",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"text-2xl p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30",children:"💡"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-xl md:text-2xl font-bold text-white",children:"In Very Simple Terms: The 3 Ways to Read & Write Text"}),e.jsx("p",{className:"text-indigo-300 text-xs md:text-sm font-medium",children:"Magnifying glass, Soup bowl, or Structured Form"})]})]}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4 pt-2",children:[e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-sky-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," 1. Character by Character"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Functions: ",e.jsx("code",{children:"fgetc()"})," & ",e.jsx("code",{children:"fputc()"}),". Like reading a book with a magnifying glass one alphabet at a time. Returns an ",e.jsx("code",{children:"int"})," so it can signal ",e.jsx("code",{children:"EOF (-1)"})," when the file ends."]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-emerald-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"🥣"})," 2. Line by Line (Safe Bowl)"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Functions: ",e.jsx("code",{children:"fgets()"})," & ",e.jsx("code",{children:"fputs()"}),". Reads an entire sentence until ",e.jsx("code",{children:"\\n"}),". You specify your bowl size (e.g., 128 bytes), so it ",e.jsx("strong",{children:"never overflows"})," your memory!"]})]}),e.jsxs("div",{className:"bg-slate-900/80 border border-slate-700/60 rounded-xl p-4 space-y-2",children:[e.jsxs("div",{className:"text-purple-400 font-bold text-sm flex items-center gap-1.5",children:[e.jsx("span",{children:"📋"})," 3. Formatted Tables"]}),e.jsxs("p",{className:"text-slate-300 text-xs leading-relaxed",children:["Functions: ",e.jsx("code",{children:"fprintf()"})," & ",e.jsx("code",{children:"fscanf()"}),". Like filling in or reading an official report card: ID numbers, names, and decimal averages separated by spaces or commas."]})]})]}),e.jsxs("div",{className:"bg-amber-500/10 border border-amber-500/20 rounded-xl p-3 text-xs text-amber-200",children:["⚠️ ",e.jsx("strong",{children:"Why is `fgetc` return type `int` instead of `char`?"})," Because ",e.jsx("code",{children:"EOF"})," is defined as ",e.jsx("code",{children:"-1"}),". An 8-bit unsigned char cannot distinguish between the byte ",e.jsx("code",{children:"0xFF (255)"})," and the end-of-file sentinel ",e.jsx("code",{children:"-1"}),"!"]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Text Stream Processing Mechanics"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"Text files store information encoded as sequences of ASCII or UTF-8 characters organized into lines separated by newline terminators. Understanding how to parse, validate, and format text streams safely without buffer overflows is essential for building log analyzers, configuration parsers, and data ingestion pipelines."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-emerald-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-emerald-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore lab, Tuhina and Debangshu used ",e.jsx("code",{children:'fscanf(fp, "%s", name)'})," to read student records. When a student name with spaces (like ",e.jsx("em",{children:'"Debangshu Roy"'}),") was encountered, ",e.jsx("code",{children:"fscanf"})," split the name into two fields and corrupted all subsequent numerical grades. Sukanta Hui demonstrated how to use ",e.jsx("code",{children:"fgets()"})," to read full lines safely and then parse with ",e.jsx("code",{children:"sscanf()"})," or bounded width specifiers, creating rock-solid file parsers."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Text Stream I/O Hierarchy"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"180",rx:"10",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#a5b4fc",className:"font-bold text-sm",children:"1. CHARACTER LEVEL"}),e.jsx("rect",{x:"20",y:"45",width:"210",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"30",y:"65",fill:"#e0e7ff",className:"font-mono text-xs",children:"int fgetc(fp); (returns int!)"}),e.jsx("rect",{x:"20",y:"85",width:"210",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"30",y:"105",fill:"#e0e7ff",className:"font-mono text-xs",children:"int fputc(c, fp);"}),e.jsx("text",{x:"20",y:"145",fill:"#c7d2fe",className:"text-xs",children:"Reads/writes 1 byte at a time until EOF (-1)."})]}),e.jsxs("g",{transform:"translate(325, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"180",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#6ee7b7",className:"font-bold text-sm",children:"2. LINE LEVEL (SAFE)"}),e.jsx("rect",{x:"20",y:"45",width:"210",height:"30",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"30",y:"65",fill:"#ecfdf5",className:"font-mono text-xs",children:"fgets(buf, max_len, fp);"}),e.jsx("rect",{x:"20",y:"85",width:"210",height:"30",fill:"#065f46",rx:"4"}),e.jsx("text",{x:"30",y:"105",fill:"#ecfdf5",className:"font-mono text-xs",children:"fputs(str, fp);"}),e.jsx("text",{x:"20",y:"145",fill:"#a7f3d0",className:"text-xs",children:"Bounded line reading. Retains '\\n' and appends '\\0'."})]}),e.jsxs("g",{transform:"translate(610, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"250",height:"180",rx:"10",fill:"#3b0764",stroke:"#d946ef",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#f5d0fe",className:"font-bold text-sm",children:"3. FORMATTED LEVEL"}),e.jsx("rect",{x:"20",y:"45",width:"210",height:"30",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"30",y:"65",fill:"#fae8ff",className:"font-mono text-xs",children:'fprintf(fp, "%d %s", ...);'}),e.jsx("rect",{x:"20",y:"85",width:"210",height:"30",fill:"#581c87",rx:"4"}),e.jsx("text",{x:"30",y:"105",fill:"#fae8ff",className:"font-mono text-xs",children:'fscanf(fp, "%d %49s", ...);'}),e.jsx("text",{x:"20",y:"145",fill:"#f5d0fe",className:"text-xs",children:"Parses structured tokens with width safety (%49s)."})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: fgets() vs gets() Safety"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"Why fgets() is 100% Safe"}),e.jsxs("p",{className:"text-slate-300",children:[e.jsx("code",{children:"fgets(buffer, sizeof(buffer), fp)"})," takes the maximum destination buffer size as a strict argument. It will never write beyond ",e.jsx("code",{children:"sizeof(buffer) - 1"})," bytes, automatically appending the null terminator (",e.jsx("code",{children:"\\0"}),")."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-300 text-sm",children:"Why gets() is Banned in Modern C"}),e.jsxs("p",{className:"text-slate-300",children:["The legacy function ",e.jsx("code",{children:"gets()"})," had no length limit, allowing attackers to overwrite return addresses on the stack. It was completely removed from the ISO C11 standard."]})]})]})]}),e.jsxs("section",{className:"space-y-6 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("div",{className:"flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-700/80 pb-4",children:[e.jsxs("div",{children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Text Stream I/O Demonstrations"]}),e.jsx("p",{className:"text-slate-300 text-sm mt-1",children:"Explore 3 comprehensive C programs with step-by-step line explanations and terminal outputs."})]}),e.jsx("div",{className:"flex flex-wrap gap-2",children:n.map((r,s)=>e.jsx("button",{onClick:()=>a(s),className:`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${t===s?"bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20":"bg-slate-800 text-slate-300 hover:bg-slate-700"}`,children:r.title},r.id))})]}),e.jsxs("div",{className:"space-y-5",children:[e.jsxs("div",{className:"bg-slate-900/60 p-3.5 rounded-xl border border-slate-700/60 text-xs md:text-sm text-slate-300 flex items-start gap-2",children:[e.jsx("span",{className:"text-emerald-400 font-bold",children:"📋 Overview:"}),e.jsx("span",{children:n[t].description})]}),e.jsx(o,{fileModule:n[t].file,title:n[t].filename,editable:!1}),e.jsxs("div",{className:"bg-slate-900/90 border border-slate-700/80 rounded-xl p-4 md:p-5 space-y-3 shadow-md",children:[e.jsxs("div",{className:"text-xs font-bold text-amber-400 uppercase tracking-wider flex items-center gap-1.5",children:[e.jsx("span",{children:"🔍"})," Plain-English Line-by-Line Code Breakdown:"]}),e.jsx("div",{className:"space-y-2",children:n[t].lineByLine.map((r,s)=>e.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-start gap-2 bg-slate-950/70 p-3 rounded-lg border border-slate-800/80",children:[e.jsx("code",{className:"text-sky-300 font-mono text-[11px] sm:w-2/5 shrink-0 font-semibold bg-slate-900 px-2 py-1 rounded border border-slate-700/60",children:r.line}),e.jsx("span",{className:"text-slate-300 text-xs leading-relaxed",children:r.explanation})]},s))})]}),e.jsxs("div",{className:"rounded-xl border border-slate-700 bg-slate-950 p-4 shadow-inner",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:n[t].output})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Unbounded %s in fscanf"}),e.jsxs("p",{className:"text-slate-300",children:["Never use ",e.jsx("code",{children:'fscanf(fp, "%s", buf)'})," without a width limit. Always use ",e.jsx("code",{children:'fscanf(fp, "%49s", buf)'})," to prevent buffer overflows."]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Stripping Trailing Newlines"}),e.jsxs("p",{className:"text-slate-300",children:[e.jsx("code",{children:"fgets()"})," keeps the trailing ",e.jsx("code",{children:"\\n"})," in the buffer. Strip it using: ",e.jsx("code",{children:`buf[strcspn(buf, "\\n")] = '\\0';`}),"."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Why does text mode convert line endings between Windows (",e.jsx("code",{children:"\\r\\n"}),", CRLF) and Linux (",e.jsx("code",{children:"\\n"}),", LF) automatically, and why does this subtle conversion corrupt binary files if opened without the ",e.jsx("code",{children:'"b"'})," mode flag?"]})]}),e.jsx("section",{children:e.jsx(l,{title:"Module 003_010 Topic 2 FAQs: Text Stream I/O Operations",questions:u})}),e.jsx("section",{children:e.jsx(c,{content:x,title:"Module 003_010 Topic 2 Note: Text Stream I/O Operations",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic2_note.txt"})}),e.jsx("section",{children:e.jsx(d,{note:"When parsing real-world text feeds or CSV files, read entire lines with fgets() first, and then parse each token with sscanf() or strtok(). This prevents half-read corrupted states if a single field is malformed! — Sukanta Hui"})})]})}export{L as default};
