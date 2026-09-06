import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-Cyf0mDYr.js";import{F as a}from"./FAQTemplate-BHhlgA96.js";import{P as r}from"./PlainTextPrint-C08xhKA4.js";import{T as o}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const n=`#include <stdio.h>\r
#include <string.h>\r
\r
struct Student {\r
    int rollNumber;\r
    char name[50];\r
    float marks;\r
    char batch[20];\r
};\r
\r
int main(void) {\r
    printf("====================================================\\n");\r
    printf("  CODER & ACCOTAX - C STRUCTURE BASICS DEMONSTRATION\\n");\r
    printf("  Center: Barrackpore | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    struct Student s1 = {.rollNumber = 101, .name = "Swadeep Biswas", .marks = 94.5f, .batch = "C-Systems-2026"};\r
    struct Student s2 = {102, "Tuhina Das", 91.0f, "C-Systems-2026"};\r
    struct Student s3;\r
    s3.rollNumber = 103;\r
    strcpy(s3.name, "Abhronila Roy");\r
    s3.marks = 96.8f;\r
    strcpy(s3.batch, "C-Systems-2026");\r
\r
    printf("Student 1 Record:\\n  Roll No : %d\\n  Name    : %s\\n  Marks   : %.2f%%\\n  Batch   : %s\\n\\n", s1.rollNumber, s1.name, s1.marks, s1.batch);\r
    printf("Student 2 Record:\\n  Roll No : %d\\n  Name    : %s\\n  Marks   : %.2f%%\\n  Batch   : %s\\n\\n", s2.rollNumber, s2.name, s2.marks, s2.batch);\r
    printf("Student 3 Record:\\n  Roll No : %d\\n  Name    : %s\\n  Marks   : %.2f%%\\n  Batch   : %s\\n\\n", s3.rollNumber, s3.name, s3.marks, s3.batch);\r
    printf("Total Memory Size of struct Student: %lu bytes\\n", sizeof(struct Student));\r
    return 0;\r
}`,i=[{question:"Module 003_008 Topic 0 Question 1: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 2: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 3: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 4: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 5: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 6: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 7: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 8: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 9: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 10: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"basic",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 11: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 12: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 13: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 14: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 15: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 16: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 17: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 18: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 19: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 20: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"intermediate",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 21: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"advanced",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 22: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"advanced",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 23: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"advanced",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 24: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"advanced",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`},{question:"Module 003_008 Topic 0 Question 25: What is a core principle of Structure Declaration, Member Variables & Dot Operator?",shortAnswer:"It allows efficient data packaging and memory control in C.",explanation:"Understanding Structure Declaration, Member Variables & Dot Operator is critical for C systems programming, kernel data structures, and embedded memory layout.",hint:"Think about memory alignment, pointers, and data encapsulation.",level:"advanced",codeExample:`// C Example for Topic 0
#include <stdio.h>
// Refer to StructBasicsDemo.c for full demonstration`}],s=`===============================================================================\r
CODER & ACCOTAX ACADEMIC STUDY NOTE\r
Subject: C Programming & Systems Fundamentals\r
Module 003_008: Structures, Unions, Bit-fields & typedef\r
Topic 0: Structure Declaration, Member Variables & Dot Operator\r
Educator: Sukanta Hui (Barrackpore, West Bengal)\r
===============================================================================\r
\r
1. CONCEPT SUMMARY\r
-------------------------------------------------------------------------------\r
Understand user-defined heterogeneous data types in C. Learn structure declaration syntax, Designated Initializers, memory layouts, and dot (.) member access operator mechanics.\r
\r
2. KEY ARCHITECTURAL PRINCIPLES\r
-------------------------------------------------------------------------------\r
A C Structure (struct) groups variables of different data types (int, char array, float) into a contiguous block of memory.\r
\r
3. CLASSROOM SCENARIO (BARRACKPORE LAB)\r
-------------------------------------------------------------------------------\r
When Swadeep asked how to represent a complex student record with roll number, name, and marks without creating 3 separate arrays, Sukanta Hui introduced C structures as a single unified memory package.\r
\r
"Mastering C structures and memory layouts unlocks direct hardware and operating\r
system level programming capabilities!" — Sukanta Hui\r
===============================================================================\r
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_008 · Topic 0"}),e.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Structure Foundations"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Structure Declaration, Member Variables & Dot Operator"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Understand user-defined heterogeneous data types in C. Learn structure declaration syntax, Designated Initializers, memory layouts, and dot (.) member access operator mechanics."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Structure Declaration, Member Variables & Dot Operator"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"A C Structure (struct) groups variables of different data types (int, char array, float) into a contiguous block of memory."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsx("p",{children:"When Swadeep asked how to represent a complex student record with roll number, name, and marks without creating 3 separate arrays, Sukanta Hui introduced C structures as a single unified memory package."})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Memory Architecture & Execution Layout"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 200",className:"w-full min-w-[700px] font-sans",children:[e.jsx("rect",{x:"20",y:"50",width:"860",height:"100",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"450",y:"90",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-base",children:"Memory Layout Architecture: Structure Declaration, Member Variables & Dot Operator"}),e.jsx("text",{x:"450",y:"120",textAnchor:"middle",fill:"#94a3b8",className:"text-xs",children:"Contiguous byte alignment in C memory space (Module 003_008 • Topic 0)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown & Architectural Rules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-750 space-y-2",children:[e.jsx("h3",{className:"font-bold text-indigo-300",children:"Rule 1: Memory Contiguity & Access"}),e.jsx("p",{className:"text-slate-300",children:"A C Structure (struct) groups variables of different data types (int, char array, float) into a contiguous block of memory."})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-750 space-y-2",children:[e.jsx("h3",{className:"font-bold text-indigo-300",children:"Rule 2: Performance & Hardware Alignment"}),e.jsx("p",{className:"text-slate-300",children:"Always optimize data alignment to prevent CPU bus penalty or unwanted cache line splits."})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Structure Declaration, Member Variables & Dot Operator Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"StructBasicsDemo.c"}),") demonstrates a complete standalone C console application for Structure Declaration, Member Variables & Dot Operator."]}),e.jsx(t,{fileModule:n,title:"StructBasicsDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
  CODER & ACCOTAX - C STRUCTURE BASICS DEMONSTRATION
  Center: Barrackpore | Educator: Sukanta Hui
====================================================

Student 1 Record:
  Roll No : 101
  Name    : Swadeep Biswas
  Marks   : 94.50%
  Batch   : C-Systems-2026

Student 2 Record:
  Roll No : 102
  Name    : Tuhina Das
  Marks   : 91.00%
  Batch   : C-Systems-2026

Student 3 Record:
  Roll No : 103
  Name    : Abhronila Roy
  Marks   : 96.80%
  Batch   : C-Systems-2026

Total Memory Size of struct Student: 64 bytes`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Uninitialized Members:"})," Always initialize struct fields before dereferencing."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Padding Overhead:"})," Order struct fields from largest data type to smallest data type to minimize padding bytes."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Type Safety:"})," Use explicit type casting when punning union fields."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsx("h2",{className:"text-xl font-bold text-amber-400",children:"🤔 Think About This..."}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"How do operating system kernel drivers use bit-fields and structures to parse Ethernet headers and PCI express configuration registers in hardware real-time?"})]}),e.jsx("section",{children:e.jsx(a,{title:"Module 003_008 Topic 0 FAQs",questions:i})}),e.jsx("section",{children:e.jsx(r,{content:s,title:"Module 003_008 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_008_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(o,{note:"When Swadeep asked how to represent a complex student record with roll number, name, and marks without creating 3 separate arrays, Sukanta Hui introduced C structures as a single unified memory package. — Sukanta Hui"})})]})}export{g as default};
