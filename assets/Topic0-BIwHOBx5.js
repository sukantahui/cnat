import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DjboCeUK.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-RpFLNJ5A.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * FileIODemo.c\r
 * Text file writing and reading using fopen, fprintf, fgets, fclose\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    FILE *fp = NULL;\r
    char buffer[256];\r
\r
    printf("=== Text File I/O Stream Operations ===\\n\\n");\r
\r
    // Write text to file\r
    fp = fopen("students.txt", "w");\r
    if (fp == NULL) {\r
        perror("Error opening file for writing");\r
        return 1;\r
    }\r
\r
    fprintf(fp, "Center: Barrackpore | Educator: Sukanta Hui\\n");\r
    fprintf(fp, "Student: Swadeep | Subject: C Programming\\n");\r
    fclose(fp);\r
    printf("Data written to 'students.txt' successfully.\\n\\n");\r
\r
    // Read text from file\r
    fp = fopen("students.txt", "r");\r
    if (fp == NULL) {\r
        perror("Error opening file for reading");\r
        return 1;\r
    }\r
\r
    printf("Reading 'students.txt':\\n");\r
    while (fgets(buffer, sizeof(buffer), fp) != NULL) {\r
        printf("%s", buffer);\r
    }\r
\r
    fclose(fp);\r
    return 0;\r
}\r
`,a=[{question:"Why should you always check if fopen() returned NULL?",shortAnswer:"fopen returns NULL if the file fails to open due to missing file, permission errors, or invalid path.",explanation:"Attempting to perform file operations on a NULL FILE* pointer causes an immediate segmentation fault.",hint:"NULL check after fopen is mandatory.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 003_010: File Handling & Stream I/O Operations\r
TOPIC 0: Text & Binary File Streams\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- FILE* handle: Opaque stream pointer.\r
- Modes: "r" (read), "w" (overwrite write), "a" (append), "rb"/"wb" (binary).\r
- Text I/O: fprintf, fscanf, fgets, fputs.\r
- Binary I/O: fread, fwrite.\r
- File positioning: fseek, ftell, rewind.\r
================================================================================\r
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 0"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"File Streams"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"File Handling & Stream I/O Operations"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master disk persistence using FILE* stream pointers, file open modes (r, w, a, rb, wb), text formatted I/O, binary fread/fwrite, and random access fseek positioning."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Persistent File Storage"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["File streams bridge volatile RAM memory with non-volatile disk storage. The C standard library provides buffered file stream abstractions through ",e.jsx("code",{children:"FILE*"})," structures."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: FileIODemo.c"}),e.jsx(r,{fileModule:i,title:"FileIODemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 003_010 Topic 0 FAQs",questions:a})}),e.jsx("section",{children:e.jsx(n,{content:o,title:"Module 003_010 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Always call fclose(fp) after file operations to flush internal buffer contents to disk and prevent file lock leaks! — Sukanta Hui"})})]})}export{g as default};
