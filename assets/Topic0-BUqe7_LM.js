import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as r}from"./CFileLoader-DTzZ6-lz.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as s}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * StringsDemo.c\r
 * Null-terminated strings & <string.h> functions\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    char greeting[50] = "Coder & AccoTax";\r
    char location[] = "Barrackpore";\r
    char buffer[100];\r
\r
    printf("=== Strings & Null-Terminators ('\\\\0') ===\\n\\n");\r
\r
    printf("String 1: %s (Length: %zu)\\n", greeting, strlen(greeting));\r
    printf("String 2: %s (Length: %zu)\\n", location, strlen(location));\r
\r
    // String Concatenation & Copying\r
    strcpy(buffer, greeting);\r
    strcat(buffer, " - ");\r
    strcat(buffer, location);\r
\r
    printf("Combined Buffer: %s\\n", buffer);\r
    printf("Total Buffer Length: %zu\\n", strlen(buffer));\r
\r
    return 0;\r
}\r
`,i=[{question:"Why are strings in C represented as null-terminated character arrays?",shortAnswer:"C does not have a native string data type; strings end with a null character ('\\0') marker.",explanation:"Functions like strlen and printf scan memory sequentially until encountering '\\0' to determine string termination.",hint:"Null character '\\0' terminates C strings.",level:"basic"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_006: Strings & Character Array Handling\r
TOPIC 0: Null-Terminated Strings & <string.h> Header\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- Null Terminator: '\\0' (ASCII 0) marks end of char array.\r
- Functions: strlen, strcpy, strcat, strcmp, strstr, fgets.\r
- Never use gets(); use fgets(buffer, sizeof(buffer), stdin) instead.\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_006 · Topic 0"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Strings & Text"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Strings & Character Array Handling"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master null-terminated character arrays ('\\0'), safe input parsing using fgets(), and standard <string.h> header functions."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Null-Terminated Memory Model"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:['C strings are null-terminated character arrays. For instance, "hello" requires 6 bytes of memory storage: 5 ASCII letters plus ',e.jsx("code",{children:"'\\0'"}),"."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: StringsDemo.c"}),e.jsx(r,{fileModule:a,title:"StringsDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 002_006 Topic 0 FAQs",questions:i})}),e.jsx("section",{children:e.jsx(n,{content:o,title:"Module 002_006 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_002_006_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Never use gets()! Always use fgets() to prevent security buffer overflows! — Sukanta Hui"})})]})}export{b as default};
