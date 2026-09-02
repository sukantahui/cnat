import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DjboCeUK.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-RpFLNJ5A.js";import{C as i}from"./CProjectAnswerTemplate-DYeINQH3.js";import"./CodeBlock-XVn6myHE.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-wprqVFW_.js";import"./EditableCCodeBlock-CUsyyczB.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/**\r
 * BinaryFileIODemo.c\r
 * Binary file serialization with fwrite and fread\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
typedef struct {\r
    int id;\r
    char name[30];\r
    float salary;\r
} Employee;\r
\r
int main(void) {\r
    FILE *fp = NULL;\r
    Employee emp1 = {501, "Sukanta Hui", 75000.0f};\r
    Employee readEmp;\r
\r
    printf("=== Binary Struct Persistence Demo ===\\n\\n");\r
\r
    // Write binary record\r
    fp = fopen("employee.bin", "wb");\r
    if (fp != NULL) {\r
        fwrite(&emp1, sizeof(Employee), 1, fp);\r
        fclose(fp);\r
        printf("Binary employee record saved.\\n");\r
    }\r
\r
    // Read binary record\r
    fp = fopen("employee.bin", "rb");\r
    if (fp != NULL) {\r
        fread(&readEmp, sizeof(Employee), 1, fp);\r
        fclose(fp);\r
        printf("\\nRead Binary Record:\\n");\r
        printf("ID: %d | Name: %s | Salary: %.2f\\n", readEmp.id, readEmp.name, readEmp.salary);\r
    }\r
\r
    return 0;\r
}\r
`,s=[{question:"What is the advantage of binary file mode (wb/rb) over text file mode (w/r)?",shortAnswer:"Binary mode writes raw byte representations directly, offering faster I/O and smaller file sizes.",explanation:"Text mode converts numbers to ASCII strings and translates line endings. Binary mode copies raw memory structures as-is.",hint:"Binary mode avoids ASCII conversion overhead.",level:"intermediate"}],l=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 003_010: File Handling & Stream I/O Operations\r
TOPIC 1: Module 003_010 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Persistent File-based Student Database\r
- Project 2: Log File Analyzer & Binary Exporter\r
================================================================================\r
`,d={projectCategory:"Module 003_010 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P10.1",title:"Persistent File Student Database",difficulty:"Advanced",description:"Build a C application that appends student records to a binary file 'db.bin' and lists all saved records upon request.",exampleText:"Save: Roll 101, Swadeep, 95.0",exampleOutput:`Record Saved to db.bin.
Listing Database:
101 | Swadeep | 95.00`,logicExplanation:`1. Open file in 'ab+' binary append update mode.
2. Use fwrite(&student, sizeof(Student), 1, fp) to append.
3. Rewind with fseek(fp, 0, SEEK_SET) and fread loop to list.`,answer:`#include <stdio.h>

typedef struct { int roll; char name[50]; float marks; } Student;

int main(void) {
    FILE *fp = fopen("db.bin", "wb+");
    if (!fp) return 1;

    Student s1 = {101, "Swadeep", 95.0f};
    fwrite(&s1, sizeof(Student), 1, fp);

    rewind(fp);
    Student readS;
    while (fread(&readS, sizeof(Student), 1, fp) == 1) {
        printf("%d | %s | %.2f\\n", readS.roll, readS.name, readS.marks);
    }
    fclose(fp);
    return 0;
}`,codeExplanation:"Demonstrates binary struct serialization with fwrite, rewind, and fread."},{projectId:"P10.2",title:"Text Log Counter & Search Engine",difficulty:"Intermediate",description:"Write a C program that reads a text file line-by-line using fgets and counts total lines containing the word 'ERROR'.",exampleText:"log.txt containing 3 ERROR lines",exampleOutput:"Total ERROR occurrences: 3",logicExplanation:`1. Open text file with fopen(name, 'r').
2. Loop with while (fgets(buf, 256, fp)).
3. Use strstr(buf, 'ERROR') to count occurrences.`,answer:`#include <stdio.h>
#include <string.h>

int main(void) {
    FILE *fp = fopen("server.log", "r");
    if (!fp) return 0;
    char buf[256];
    int count = 0;
    while (fgets(buf, sizeof(buf), fp)) {
        if (strstr(buf, "ERROR")) count++;
    }
    fclose(fp);
    printf("Total ERROR logs: %d\\n", count);
    return 0;
}`,codeExplanation:"Demonstrates text log line-by-line stream reading and string searching."}]};function w(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_010 · Topic 1"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 003_010 Projects & Practical Lab"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master binary student database persistence and log file searching engines."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: BinaryFileIODemo.c"}),e.jsx(t,{fileModule:o,title:"BinaryFileIODemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 003_010 Project Solutions"}),e.jsx(i,{data:d})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 003_010 Topic 1 FAQs",questions:s})}),e.jsx("section",{children:e.jsx(r,{content:l,title:"Module 003_010 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_010_topic1_note.txt"})}),e.jsx(a,{note:"Binary struct persistence allows building high-performance local database engines in plain C! — Sukanta Hui"})]})}export{w as default};
