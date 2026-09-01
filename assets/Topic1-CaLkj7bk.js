import{j as t}from"./vendor-react-core-Doz9nIC6.js";import{C as e}from"./CFileLoader-DTzZ6-lz.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as i}from"./TeacherSukantaHui-BaJcBHAy.js";import{C as o}from"./CProjectAnswerTemplate-nVUti6lV.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`#include <stdio.h>\r
#include <stdint.h>\r
\r
/**\r
 * UnionsAndBitfieldsDemo.c\r
 * Bit-fields for hardware flags & Unions for memory overlay\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
typedef struct {\r
    uint8_t powerState : 1; // 1 bit\r
    uint8_t errorCode  : 3; // 3 bits (0-7)\r
    uint8_t reserved   : 4; // 4 bits\r
} DeviceStatusBitfield;\r
\r
typedef union {\r
    uint32_t rawValue;\r
    uint8_t bytes[4];\r
} NetworkPacketHeader;\r
\r
int main(void) {\r
    DeviceStatusBitfield status = {1, 5, 0};\r
    NetworkPacketHeader pkt;\r
    pkt.rawValue = 0x12345678;\r
\r
    printf("=== Bit-fields & Unions Demo ===\\n\\n");\r
    printf("Size of DeviceStatusBitfield: %zu byte\\n", sizeof(status));\r
    printf("Power State : %d\\n", status.powerState);\r
    printf("Error Code  : %d\\n\\n", status.errorCode);\r
\r
    printf("Union Overlay Breakdown (0x12345678):\\n");\r
    printf("Byte 0: 0x%02X\\n", pkt.bytes[0]);\r
    printf("Byte 1: 0x%02X\\n", pkt.bytes[1]);\r
    printf("Byte 2: 0x%02X\\n", pkt.bytes[2]);\r
    printf("Byte 3: 0x%02X\\n", pkt.bytes[3]);\r
\r
    return 0;\r
}\r
`,s=[{question:"What is a bit-field in C structures?",shortAnswer:"A structure member with an explicitly specified bit width.",explanation:"Bit-fields allow packing integer variables into specific bit counts (e.g. uint8_t flag:1) to mirror micro-controller registers.",hint:"Bit-level member declaration.",level:"advanced"}],d=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 003_008: Structures, Unions, Bit-fields & typedef\r
TOPIC 1: Module 003_008 Hands-on Projects\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. MODULE PROJECTS SUMMARY\r
--------------------------------------------------------------------------------\r
- Project 1: Student Management System with Structs\r
- Project 2: Compact Network Packet Packer using Unions & Bit-fields\r
================================================================================\r
`,l={projectCategory:"Module 003_008 · Hands-on C Projects",subject:"C Programming",board:"WBCHSE / ICSE / BCA / B.Tech",class:"UG / High School",tools:["GCC Compiler","VS Code"],institute:{name:"Coder & AccoTax",author:"Sukanta Hui",location:"Barrackpore, West Bengal"},projects:[{projectId:"P8.1",title:"Student Management System with Structs",difficulty:"Intermediate",description:"Write a C program that uses an array of student structures to store roll number, name, and marks. Compute and display top scorer.",exampleText:"3 Students entered",exampleOutput:"Top Scorer: Swadeep (95.00 marks)",logicExplanation:`1. Define typedef struct { int roll; char name[50]; float marks; } Student;
2. Loop through array to find max marks index.`,answer:`#include <stdio.h>

typedef struct {
    int roll;
    char name[50];
    float marks;
} Student;

int main(void) {
    Student list[3] = {
        {101, "Swadeep", 95.0f},
        {102, "Tuhina", 88.5f},
        {103, "Abhronila", 92.0f}
    };
    int topIdx = 0;
    for (int i = 1; i < 3; i++) {
        if (list[i].marks > list[topIdx].marks) topIdx = i;
    }
    printf("Top Scorer: %s (%.2f marks)\\n", list[topIdx].name, list[topIdx].marks);
    return 0;
}`,codeExplanation:"Demonstrates array of structures and field searching."},{projectId:"P8.2",title:"Compact Packet Converter with Unions",difficulty:"Advanced",description:"Use a C union to decompose a 32-bit integer into 4 individual bytes for network inspection.",exampleText:"Raw: 0xAABBCCDD",exampleOutput:"Byte 0: 0xDD, Byte 1: 0xCC, Byte 2: 0xBB, Byte 3: 0xAA",logicExplanation:`1. Define union { uint32_t raw; uint8_t bytes[4]; }.
2. Access bytes array to inspect endianness.`,answer:`#include <stdio.h>
#include <stdint.h>

typedef union {
    uint32_t raw;
    uint8_t bytes[4];
} Packet;

int main(void) {
    Packet p;
    p.raw = 0xAABBCCDD;
    printf("Byte 0: 0x%02X\\n", p.bytes[0]);
    printf("Byte 1: 0x%02X\\n", p.bytes[1]);
    return 0;
}`,codeExplanation:"Demonstrates memory overlay inspectability via unions."}]};function w(){return t.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[t.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[t.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[t.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_008 · Topic 1"}),t.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Hands-on Projects"})]}),t.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Module 003_008 Projects & Practical Lab"}),t.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master student structure modeling and binary union byte decomposition."})]}),t.jsxs("section",{className:"space-y-4",children:[t.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference C Code: UnionsAndBitfieldsDemo.c"}),t.jsx(e,{fileModule:a,title:"UnionsAndBitfieldsDemo.c",editable:!1})]}),t.jsxs("section",{className:"space-y-6",children:[t.jsx("h2",{className:"text-2xl font-bold text-indigo-300 border-b border-slate-800 pb-3",children:"🚀 Module 003_008 Project Solutions"}),t.jsx(o,{data:l})]}),t.jsx("section",{children:t.jsx(n,{title:"Module 003_008 Topic 1 FAQs",questions:s})}),t.jsx("section",{children:t.jsx(r,{content:d,title:"Module 003_008 Topic 1 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_008_topic1_note.txt"})}),t.jsx(i,{note:"Unions allow efficient type-punning and protocol parsing in network software! — Sukanta Hui"})]})}export{w as default};
