import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{C as e}from"./CFileLoader-DTzZ6-lz.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as i}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`#include <stdio.h>\r
#include <stdint.h>\r
\r
/**\r
 * BitwiseOperatorsDemo.c\r
 * Bitwise Flag Register & Masking Utility\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#define FLAG_POWER   (1 << 0) // 0x01\r
#define FLAG_ALARM   (1 << 1) // 0x02\r
#define FLAG_SENSOR  (1 << 2) // 0x04\r
\r
int main(void) {\r
    uint8_t systemStatus = 0;\r
\r
    printf("=== System Status Register Inspection ===\\n\\n");\r
\r
    // Enable Power & Sensor flags\r
    systemStatus |= FLAG_POWER;\r
    systemStatus |= FLAG_SENSOR;\r
\r
    printf("Initial Status Byte: 0x%02X\\n", systemStatus);\r
    printf("Power Active?  : %s\\n", (systemStatus & FLAG_POWER) ? "YES" : "NO");\r
    printf("Alarm Active?  : %s\\n", (systemStatus & FLAG_ALARM) ? "YES" : "NO");\r
    printf("Sensor Active? : %s\\n", (systemStatus & FLAG_SENSOR) ? "YES" : "NO");\r
\r
    // Toggle Alarm Flag\r
    systemStatus ^= FLAG_ALARM;\r
    printf("\\nAfter Toggling Alarm Flag: 0x%02X\\n", systemStatus);\r
    printf("Alarm Active?  : %s\\n", (systemStatus & FLAG_ALARM) ? "YES" : "NO");\r
\r
    return 0;\r
}\r
`,o=[{question:"How do bitwise masks set, clear, and toggle specific bits in C?",shortAnswer:"Set with |= (1 << n), Clear with &= ~(1 << n), Toggle with ^= (1 << n).",explanation:"Bitwise OR sets a bit to 1, bitwise AND with inverted mask clears a bit to 0, and bitwise XOR flips a bit.",hint:"OR to set, AND-NOT to clear, XOR to flip.",level:"intermediate"},{question:"What is the difference between const float PI = 3.14f and #define PI 3.14f?",shortAnswer:"const is a typed variable evaluated by compiler; #define is a raw preprocessor text substitution.",explanation:"#define macro has no scope or type checking and does not occupy memory space. const variables enforce scoping and type safety.",hint:"const is preferred in modern C for type safety.",level:"basic"}],l=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_002: C Tokens, Data Types & Operators\r
TOPIC 1: Module 001_002 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Bill Splitter & Tax Calculator\r
- Project 2: Bitwise Status Register Inspector & Masking Utility\r
================================================================================\r
`,d={projectCategory:"Module 001_002 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","GDB"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P2.1",title:"Bill Splitter & Tax Calculator",difficulty:"Beginner",description:"Build a C program that calculates total restaurant bill with 18% GST tax, 5% tip, and splits the final total evenly among N friends.",exampleText:"Base bill: 1200.00, Friends: 4",exampleOutput:`Base Amount: 1200.00
GST Tax (18%): 216.00
Tip (5%)    : 60.00
Total Bill  : 1476.00
Per Person  : 369.00`,logicExplanation:`1. Prompt for base bill amount and number of friends.
2. Compute tax = base * 0.18f and tip = base * 0.05f;
3. Compute total = base + tax + tip and perPerson = total / numFriends;
4. Print using %.2f formatting.`,answer:`#include <stdio.h>

int main(void) {
    float baseBill, tax, tip, total, perPerson;
    int numFriends;

    printf("Enter Base Bill Amount: ");
    scanf("%f", &baseBill);
    printf("Enter Number of Friends: ");
    scanf("%d", &numFriends);

    tax = baseBill * 0.18f;
    tip = baseBill * 0.05f;
    total = baseBill + tax + tip;
    perPerson = total / numFriends;

    printf("\\n--- Bill Splitter Summary ---\\n");
    printf("Base Amount  : %.2f\\n", baseBill);
    printf("GST Tax (18%%): %.2f\\n", tax);
    printf("Tip (5%%)     : %.2f\\n", tip);
    printf("Total Bill   : %.2f\\n", total);
    printf("Per Person   : %.2f\\n", perPerson);

    return 0;
}`,codeExplanation:"Demonstrates basic arithmetic expressions, percentage math, and formatted float output."},{projectId:"P2.2",title:"Bitwise Status Register Inspector",difficulty:"Intermediate",description:"Write a C program that takes an unsigned 8-bit integer status register value and tests individual bit flags (Bit 0: Power, Bit 1: Error, Bit 2: Sensor Ready).",exampleText:"Status Input: 5 (00000101 binary)",exampleOutput:`Status: 0x05
Bit 0 (Power) : ACTIVE
Bit 1 (Error) : INACTIVE
Bit 2 (Sensor): ACTIVE`,logicExplanation:`1. Read uint8_t status.
2. Mask Bit 0 using status & 1.
3. Mask Bit 1 using status & (1 << 1).
4. Mask Bit 2 using status & (1 << 2).`,answer:`#include <stdio.h>
#include <stdint.h>

int main(void) {
    uint8_t status;
    printf("Enter Status Register Value (0-255): ");
    scanf("%hhu", &status);

    printf("\\n--- Status Register Breakdown ---\\n");
    printf("Raw Value: 0x%02X\\n", status);
    printf("Bit 0 (Power) : %s\\n", (status & (1 << 0)) ? "ACTIVE" : "INACTIVE");
    printf("Bit 1 (Error) : %s\\n", (status & (1 << 1)) ? "ACTIVE" : "INACTIVE");
    printf("Bit 2 (Sensor): %s\\n", (status & (1 << 2)) ? "ACTIVE" : "INACTIVE");

    return 0;
}`,codeExplanation:"Demonstrates bitwise bit shifts and bitwise AND masking for register analysis."}]};function B(){return t.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[t.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_002 · Topic 1"}),t.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),t.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 001_002 Projects & Practical Lab"}),t.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master bitwise register masking and arithmetic calculations through real-world C projects."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: BitwiseOperatorsDemo.c"}),t.jsx(e,{fileModule:a,title:"BitwiseOperatorsDemo.c",editable:!1})]}),t.jsxs("section",{className:"space-y-6",children:[t.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 001_002 Project Solutions"}),t.jsx(i,{data:d})]}),t.jsx("section",{children:t.jsx(n,{title:"Module 001_002 Topic 1 FAQs",questions:o})}),t.jsx("section",{children:t.jsx(s,{content:l,title:"Module 001_002 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_002_topic1_note.txt"})}),t.jsx("section",{children:t.jsx(r,{note:"Bitwise masking is the foundation of device drivers and binary networking protocols! — Sukanta Hui"})})]})}export{B as default};
