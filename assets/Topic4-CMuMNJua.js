import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const s=`#include <stdio.h>\r
\r
/**\r
 * ConsoleIODemo.c\r
 * Formatted I/O with printf, scanf, and format specifiers\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    int age;\r
    float gpa;\r
    char grade;\r
\r
    printf("=== Formatted Console I/O Demo ===\\n\\n");\r
\r
    printf("Enter Age (integer): ");\r
    scanf("%d", &age);\r
\r
    printf("Enter GPA (float): ");\r
    scanf("%f", &gpa);\r
\r
    printf("Enter Grade (char): ");\r
    scanf(" %c", &grade); // Leading space consumes leftover newline\r
\r
    printf("\\n--- Summary ---\\n");\r
    printf("Age  : %d years\\n", age);\r
    printf("GPA  : %.2f / 4.00\\n", gpa);\r
    printf("Grade: %c\\n", grade);\r
\r
    return 0;\r
}\r
`,i=[{question:'Why is a leading space required before %c in scanf(" %c", &ch)?',shortAnswer:"The leading space tells scanf to skip leftover whitespace and newline characters in stdin.",explanation:"When pressing Enter after numeric input, '\\n' remains in the input stream. A leading space in scanf format string consumes trailing newlines before reading the character.",hint:"Leading space consumes leftover '\\n'.",level:"intermediate"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_001: Getting Started with C & Compiler Pipeline\r
TOPIC 4: Formatted Console I/O: printf(), scanf() & Format Specifiers\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. FORMAT SPECIFIERS\r
--------------------------------------------------------------------------------\r
- %d : Signed decimal integer\r
- %f : Floating-point number (%.2f for 2 decimal places)\r
- %c : Character (%c with leading space skips whitespace)\r
- %s : String (character array pointer)\r
- %p : Hexadecimal pointer RAM address\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_001 · Topic 4"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Console I/O"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Formatted Console I/O: printf(), scanf() & Format Specifiers"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master output formatting and input parsing using printf(), scanf(), precision field widths, and format specifiers (%d, %f, %c, %s)."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Formatted I/O Streams"]}),e.jsx("p",{className:"text-slate-300 text-sm md:text-base leading-relaxed",children:"Format specifiers tell C functions how to interpret binary byte representations in memory into readable text output and vice versa."})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Console I/O Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"ConsoleIODemo.c"}),") demonstrates interactive input reading and formatted output printing."]}),e.jsx(t,{fileModule:s,title:"ConsoleIODemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`=== Formatted Console I/O Demo ===

Enter Age (integer): 20
Enter GPA (float): 3.85
Enter Grade (char): A

--- Summary ---
Age  : 20 years
GPA  : 3.85 / 4.00
Grade: A`})]})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 001_001 Topic 4 FAQs",questions:i})}),e.jsx("section",{children:e.jsx(n,{content:o,title:"Module 001_001 Topic 4 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_001_topic4_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Always add a leading space before %c in scanf(' %c', &ch) to consume leftover newline characters in the input buffer! — Sukanta Hui"})})]})}export{b as default};
