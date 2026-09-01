import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as n}from"./PlainTextPrint-C08xhKA4.js";import{T as a}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as o}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const s=`#include <stdio.h>\r
\r
/**\r
 * Module1ProjectsDemo.c\r
 * Reference program for Module 001_001 Hands-on Projects\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    printf("=== Coder & AccoTax Module 001_001 Projects ===\\n");\r
    printf("Location: Barrackpore, West Bengal\\n");\r
    printf("Educator: Sukanta Hui\\n");\r
    return 0;\r
}\r
`,i=[{question:"How do you validate user inputs in CLI C applications?",shortAnswer:"Check the return value of scanf against expected match count.",explanation:"If scanf fails to match expected specifiers, return code is less than requested match count.",hint:"if (scanf(...) != expected_matches) handle error",level:"intermediate"}],l=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_001: Getting Started with C & Compiler Pipeline\r
TOPIC 5: Module 001_001 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. HANDS-ON PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: CLI Student Report Generator (Formatted Console I/O)\r
- Project 2: Interactive Temperature Converter (Celsius, Fahrenheit, Kelvin)\r
================================================================================\r
`,c={projectCategory:"Module 001_001 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","GDB","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P1.1",title:"CLI Student Report Generator",difficulty:"Beginner",description:"Write a C program that prompts the user to enter a student's roll number and total marks scored out of 100. Format the output with clear banners and display whether the student passed (marks >= 40) or needs improvement.",exampleText:"Roll Number: 101, Marks: 85.5",exampleOutput:`======================================
 Roll Number : 101
 Marks Scored: 85.50 / 100.00
 Status      : PASSED [GOOD JOB]
======================================`,logicExplanation:`1. Declare variables: int rollNumber and float marks.
2. Use printf to prompt user.
3. Validate scanf return value.
4. Print formatted status using %.2f specifier.`,answer:`#include <stdio.h>

int main(void) {
    int rollNumber;
    float marks;

    printf("Enter Student Roll Number: ");
    if (scanf("%d", &rollNumber) != 1) {
        printf("Invalid input for roll number.\\n");
        return 1;
    }

    printf("Enter Total Marks: ");
    if (scanf("%f", &marks) != 1) {
        printf("Invalid input for marks.\\n");
        return 1;
    }

    printf("\\n--- Student Report ---\\n");
    printf("Roll Number : %d\\n", rollNumber);
    printf("Marks Scored: %.2f / 100.00\\n", marks);
    printf("Status      : %s\\n", (marks >= 40.0f) ? "PASSED" : "NEEDS IMPROVEMENT");

    return 0;
}`,codeExplanation:"Demonstrates formatted console I/O, scanf input validation, and ternary operator status evaluation."},{projectId:"P1.2",title:"Interactive Temperature Converter",difficulty:"Beginner",description:"Create a C application that accepts temperature in Celsius from user and converts it to Fahrenheit (F = C * 9/5 + 32) and Kelvin (K = C + 273.15). Format results cleanly.",exampleText:"Celsius input: 37.0",exampleOutput:`--- Temperature Conversion ---
Celsius   : 37.00 °C
Fahrenheit: 98.60 °F
Kelvin    : 310.15 K`,logicExplanation:`1. Read float celsius with scanf.
2. Compute float fahrenheit = (celsius * 9.0f / 5.0f) + 32.0f;
3. Compute float kelvin = celsius + 273.15f;
4. Output formatted float results.`,answer:`#include <stdio.h>

int main(void) {
    float celsius, fahrenheit, kelvin;

    printf("Enter Temperature in Celsius: ");
    if (scanf("%f", &celsius) != 1) {
        printf("Invalid numeric temperature.\\n");
        return 1;
    }

    fahrenheit = (celsius * 9.0f / 5.0f) + 32.0f;
    kelvin = celsius + 273.15f;

    printf("\\n--- Temperature Conversion ---\\n");
    printf("Celsius   : %.2f °C\\n", celsius);
    printf("Fahrenheit: %.2f °F\\n", fahrenheit);
    printf("Kelvin    : %.2f K\\n", kelvin);

    return 0;
}`,codeExplanation:"Demonstrates floating-point arithmetic expressions and accurate conversion formulas."}]};function k(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_001 · Topic 5"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 001_001 Projects & Practical Lab"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Apply C formatting, scanf input validation, and return code management through interactive real-world projects."})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: Module1ProjectsDemo.c"}),e.jsx(t,{fileModule:s,title:"Module1ProjectsDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 001_001 Project Solutions"}),e.jsx(o,{data:c})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 001_001 Topic 5 FAQs",questions:i})}),e.jsx("section",{children:e.jsx(n,{content:l,title:"Module 001_001 Topic 5 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_001_topic5_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Always test edge case user inputs (like typing letters into numeric prompts) to verify input validation logic in C! — Sukanta Hui"})})]})}export{k as default};
