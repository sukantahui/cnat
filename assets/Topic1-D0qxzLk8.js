import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as o}from"./CFileLoader-sVKljqCv.js";import{F as t}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-DerPxfxp.js";import{C as a}from"./CProjectAnswerTemplate-Dt7ve3pq.js";import"./CodeBlock-BGRh7DVf.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-CH1iX9C8.js";import"./EditableCCodeBlock-DTHr_cCH.js";import"./vendor-monaco-Bv7hoEkV.js";const i=`#include <stdio.h>\r
\r
/**\r
 * MacroMetaprogrammingDemo.c\r
 * Logging Macro framework using __FILE__, __LINE__, and __func__\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#define LOG_INFO(msg) printf("[INFO] [%s:%d in %s()] %s\\n", __FILE__, __LINE__, __func__, msg)\r
#define LOG_ERROR(fmt, ...) printf("[ERROR] [%s:%d] " fmt "\\n", __FILE__, __LINE__, ##__VA_ARGS__)\r
\r
void processData(void) {\r
    LOG_INFO("Starting data processing...");\r
    LOG_ERROR("Failed to load block ID: %d", 404);\r
}\r
\r
int main(void) {\r
    printf("=== Custom Macro Logging Framework ===\\n\\n");\r
    processData();\r
    return 0;\r
}\r
`,s=[{question:"What are predefined macros like __FILE__, __LINE__, and __func__ in C?",shortAnswer:"Compiler macros expanding to current source filename, line number, and function name.",explanation:"They allow constructing automated diagnostic logging frameworks that record exact source locations during execution.",hint:"Built-in compiler location markers.",level:"intermediate"}],c=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 004_011: Preprocessor Directives & Macro Metaprogramming\r
TOPIC 1: Module 004_011 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Cross-Platform Logging & Diagnostic Macro Suite\r
- Project 2: Configurable System Diagnostics Framework\r
================================================================================\r
`,l={projectCategory:"Module 004_011 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P11.1",title:"Cross-Platform Logging Macro Suite",difficulty:"Advanced",description:"Build a logging macro framework using __FILE__, __LINE__, and variadic macros (##__VA_ARGS__).",exampleText:'LOG_INFO("System Ready")',exampleOutput:"[INFO] [main.c:12 in main()] System Ready",logicExplanation:"1. Define #define LOG_INFO(msg) printf('[INFO] [%s:%d] %s\\n', __FILE__, __LINE__, msg).",answer:`#include <stdio.h>

#define LOG_INFO(msg) printf("[INFO] [%s:%d in %s()] %s\\n", __FILE__, __LINE__, __func__, msg)

int main(void) {
    LOG_INFO("Server started on port 8080");
    return 0;
}`,codeExplanation:"Demonstrates predefined compiler macros and variadic macro logging."},{projectId:"P11.2",title:"Conditional Platform Diagnostics",difficulty:"Intermediate",description:"Use #ifdef _WIN32 vs #ifdef __linux__ to build a cross-platform compilation block.",exampleText:"Compile on host OS",exampleOutput:"Running on Linux Kernel Environment.",logicExplanation:"1. Evaluate OS macros to conditionally compile system-specific code blocks.",answer:`#include <stdio.h>

int main(void) {
#ifdef _WIN32
    printf("Target OS: Microsoft Windows\\n");
#elif defined(__linux__)
    printf("Target OS: Linux Operating System\\n");
#else
    printf("Target OS: Generic POSIX\\n");
#endif
    return 0;
}`,codeExplanation:"Demonstrates conditional compilation across OS targets."}]};function E(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 004_011 · Topic 1"}),e.jsx("span",{className:"bg-purple-500/10 text-purple-400 border border-purple-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 004_011 Projects & Practical Lab"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master macro logging frameworks and cross-platform compilation targets."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: MacroMetaprogrammingDemo.c"}),e.jsx(o,{fileModule:i,title:"MacroMetaprogrammingDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 004_011 Project Solutions"}),e.jsx(a,{data:l})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 004_011 Topic 1 FAQs",questions:s})}),e.jsx("section",{children:e.jsx(r,{content:c,title:"Module 004_011 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_004_011_topic1_note.txt"})}),e.jsx(n,{note:"Preprocessor logging macros give instantaneous traceability into stack trace location without debugger overhead! — Sukanta Hui"})]})}export{E as default};
