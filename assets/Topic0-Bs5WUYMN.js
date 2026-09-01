import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as r}from"./FAQTemplate-BHhlgA96.js";import{P as s}from"./PlainTextPrint-C08xhKA4.js";import{T as n}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const a=`#include <stdio.h>\r
#include <string.h>\r
\r
/**\r
 * StructsDemo.c\r
 * Struct declarations, member access (.), pointer access (->),\r
 * and typedef aliases in C.\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
typedef struct {\r
    int id;\r
    char name[50];\r
    float marks;\r
} Student;\r
\r
void displayStudent(const Student *s) {\r
    printf("ID   : %d\\n", s->id);\r
    printf("Name : %s\\n", s->name);\r
    printf("Marks: %.2f\\n", s->marks);\r
}\r
\r
int main(void) {\r
    Student s1;\r
    s1.id = 101;\r
    strcpy(s1.name, "Swadeep");\r
    s1.marks = 92.5f;\r
\r
    printf("=== C Structs & typedef Demo ===\\n\\n");\r
    displayStudent(&s1);\r
\r
    return 0;\r
}\r
`,o=[{question:"What is the difference between struct dot (.) and arrow (->) operators in C?",shortAnswer:"Dot (.) accesses members from a struct instance; arrow (->) dereferences and accesses members from a struct pointer.",explanation:"s.name accesses name from object s; ptr->name is shorthand for (*ptr).name when accessing through a pointer address.",hint:"Use -> when operating on pointers to structs.",level:"basic"}],i=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 003_008: Structures, Unions, Bit-fields & typedef\r
TOPIC 0: User-Defined Composite Structures & Alignment\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS\r
--------------------------------------------------------------------------------\r
- Struct: Groups heterogeneous data members.\r
- Pointer Access: sptr->member is equivalent to (*sptr).member.\r
- Structure Padding: Compiler inserts padding bytes for word alignment.\r
- Union: Shared memory overlay for all members (size = max member size).\r
================================================================================\r
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_008 · Topic 0"}),e.jsx("span",{className:"bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Derived Data Types"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Structures, Unions, Bit-fields & typedef"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master user-defined data grouping using struct, memory padding and alignment, union memory sharing, bit-fields, and typedef type aliases."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💡 Composite Structures in Memory"}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Structures aggregate diverse primitive types into single contiguous records. Using pointer access ",e.jsx("code",{children:"ptr->member"})," avoids copying large struct instances across call stack frames."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Reference Code: StructsDemo.c"}),e.jsx(t,{fileModule:a,title:"StructsDemo.c",editable:!1})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 003_008 Topic 0 FAQs",questions:o})}),e.jsx("section",{children:e.jsx(s,{content:i,title:"Module 003_008 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_008_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(n,{note:"Always pass structs as const pointers (const Student *s) to prevent costly value copying while protecting read-only fields! — Sukanta Hui"})})]})}export{g as default};
