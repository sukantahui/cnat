import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-DTzZ6-lz.js";import{F as s}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-BaJcBHAy.js";import"./CodeBlock-C22pSTHv.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-8ao-0upJ.js";import"./EditableCCodeBlock-B2f2kdYR.js";import"./vendor-monaco-Bv7hoEkV.js";const n=`#include <stdio.h>\r
#include <stdint.h>\r
\r
/**\r
 * TokensAndOperatorsDemo.c\r
 * Demonstrates C tokens, exact-width data types, sizeof operator,\r
 * and arithmetic/bitwise operators.\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
int main(void) {\r
    uint8_t statusRegister = 0b00000101; // Binary literal (C23/GCC extension) or hex 0x05\r
    int a = 15, b = 4;\r
    float result;\r
\r
    printf("=== C Tokens & Operator Mechanics ===\\n\\n");\r
\r
    // Sizeof Operator\r
    printf("Size of char      : %zu byte\\n", sizeof(char));\r
    printf("Size of int       : %zu bytes\\n", sizeof(int));\r
    printf("Size of float     : %zu bytes\\n", sizeof(float));\r
    printf("Size of double    : %zu bytes\\n", sizeof(double));\r
    printf("Size of uint8_t   : %zu byte\\n\\n", sizeof(uint8_t));\r
\r
    // Type Casting\r
    result = (float)a / b; // Explicit cast to prevent integer truncation\r
    printf("Implicit vs Explicit Cast:\\n");\r
    printf("Integer Division 15 / 4 = %d\\n", a / b);\r
    printf("Float Division (float)15 / 4 = %.2f\\n\\n", result);\r
\r
    // Bitwise Operations\r
    printf("Bitwise Operations on statusRegister (0x05):\\n");\r
    printf("Bitwise AND (status & 0x01) : %d\\n", statusRegister & 0x01);\r
    printf("Bitwise OR  (status | 0x02) : %d\\n", statusRegister | 0x02);\r
    printf("Bitwise XOR (status ^ 0x05) : %d\\n", statusRegister ^ 0x05);\r
    printf("Left Shift  (status << 2)   : %d\\n", statusRegister << 2);\r
\r
    return 0;\r
}\r
`,a=[{question:"What are the 6 categories of C tokens?",shortAnswer:"Keywords, Identifiers, Constants, Strings, Special Symbols, and Operators.",explanation:"Tokens are the smallest individual units in a C source file that the compiler processes during lexical analysis.",hint:"Think of tokens as words in a sentence.",level:"basic"},{question:"Why should we use exact-width integer types from <stdint.h> like int32_t or uint8_t?",shortAnswer:"They guarantee exact bit sizes across all hardware platforms and compilers.",explanation:"Standard types like int can vary from 2 to 4 bytes depending on 16-bit or 32-bit hardware. uint8_t is guaranteed to be exactly 8 bits (1 byte) everywhere.",hint:"Essential for network protocols and embedded hardware.",level:"intermediate"},{question:"What is the difference between prefix (++i) and postfix (i++) operators?",shortAnswer:"Prefix increments before evaluating the expression; postfix increments after evaluating.",explanation:"int a = 5; int b = ++a (b=6, a=6); whereas int a = 5; int b = a++ (b=5, a=6).",hint:"Pre = change first, use next; Post = use first, change next.",level:"basic"},{question:"How does the bitwise shift left operator (<<) multiply by powers of 2?",shortAnswer:"Shifting bits left by N positions multiplies the integer by 2^N.",explanation:"5 << 1 shifts binary 00000101 to 00001010 (10 decimal). 5 << 2 produces 20.",hint:"x << n is equivalent to x * (2^n).",level:"intermediate"},{question:"What is operator precedence vs associativity in C?",shortAnswer:"Precedence dictates which operator evaluates first; associativity dictates order when precedence is tied.",explanation:"In a + b * c, * has higher precedence than +. In a - b - c, both are - so left-to-right associativity evaluates (a - b) - c.",hint:"Parentheses () override default precedence.",level:"intermediate"}],o=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 001_002: C Tokens, Variables, Data Types & Operators\r
TOPIC 0: Primitive Types, Sizeof Operator & Bitwise Mechanics\r
Educator: Sukanta Hui | Barrackpore, West Bengal\r
================================================================================\r
\r
1. CORE CONCEPTS & RULES\r
--------------------------------------------------------------------------------\r
- C Data Types:\r
  * char: 1 byte (-128 to 127 or 0 to 255)\r
  * int: usually 4 bytes (-2,147,483,648 to 2,147,483,647)\r
  * float: 4 bytes (IEEE 754 single precision)\r
  * double: 8 bytes (IEEE 754 double precision)\r
\r
- Bitwise Operators:\r
  &  (Bitwise AND)\r
  |  (Bitwise OR)\r
  ^  (Bitwise XOR)\r
  ~  (Bitwise NOT / One's Complement)\r
  << (Shift Left - Multiply by 2^N)\r
  >> (Shift Right - Divide by 2^N)\r
\r
2. ESSENTIAL CHECKLIST\r
--------------------------------------------------------------------------------\r
[✓] Use (float) casting before dividing integer expressions to prevent truncated integer division.\r
[✓] Use sizeof operator instead of hardcoding byte sizes.\r
================================================================================\r
`;function y(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 001_002 · Topic 0"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Tokens & Operators"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"C Tokens, Data Types & Operator Mechanics"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Master primitive types, memory footprints, exact-width integer headers (<stdint.h>), bitwise operations, implicit vs explicit type promotion, and operator precedence."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"🧠"})," Tokens & Low-Level Memory Footprints"]}),e.jsx("p",{className:"text-slate-300 text-sm leading-relaxed",children:"Every program written in C is decomposed by the compiler into tokens. Primitive data types map directly to physical RAM word sizes. Bitwise operators enable direct control over hardware CPU registers and flag bits."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border border-slate-750 text-xs text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Context (Shyamnagar & Barrackpore Labs):"}),e.jsxs("p",{children:[e.jsx("b",{children:"Debangshu"})," noticed that dividing 15 by 4 in C yields 3 instead of 3.75. ",e.jsx("b",{children:"Sukanta Hui"})," demonstrated explicit casting ",e.jsx("code",{children:"(float)15 / 4"})," to prevent integer truncation bugs in financial calculations."]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"📊 Semantic Visual Diagram: Memory Footprints & Bitwise Shift"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 800 200",className:"w-full min-w-[600px] font-sans",children:[e.jsxs("g",{className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"50",y:"50",width:"300",height:"100",rx:"12",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"200",y:"85",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"Bitwise Left Shift (5 << 1)"}),e.jsx("text",{x:"200",y:"115",textAnchor:"middle",fill:"#f59e0b",className:"font-mono text-xs",children:"00000101 (5) -> 00001010 (10)"})]}),e.jsxs("g",{className:"transition-transform duration-300 hover:scale-105",children:[e.jsx("rect",{x:"420",y:"50",width:"330",height:"100",rx:"12",fill:"#1e293b",stroke:"#34d399",strokeWidth:"2"}),e.jsx("text",{x:"585",y:"85",textAnchor:"middle",fill:"#34d399",className:"font-bold text-sm",children:"Explicit Type Casting"}),e.jsx("text",{x:"585",y:"115",textAnchor:"middle",fill:"#e2e8f0",className:"font-mono text-xs",children:"(float)15 / 4 = 3.75f"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Operator Precedence & Memory Matrix"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-xs text-left border border-slate-800 rounded-xl overflow-hidden",children:[e.jsx("thead",{className:"bg-slate-800 text-sky-300",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Data Type"}),e.jsx("th",{className:"p-3",children:"Byte Size"}),e.jsx("th",{className:"p-3",children:"Format Specifier"}),e.jsx("th",{className:"p-3",children:"Numeric Range"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-800 bg-slate-900/40 text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono",children:"char / uint8_t"}),e.jsx("td",{className:"p-3",children:"1 Byte"}),e.jsx("td",{className:"p-3 font-mono",children:"%c / %d"}),e.jsx("td",{className:"p-3",children:"-128 to 127 / 0 to 255"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono",children:"short"}),e.jsx("td",{className:"p-3",children:"2 Bytes"}),e.jsx("td",{className:"p-3 font-mono",children:"%hd"}),e.jsx("td",{className:"p-3",children:"-32,768 to 32,767"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono",children:"int / int32_t"}),e.jsx("td",{className:"p-3",children:"4 Bytes"}),e.jsx("td",{className:"p-3 font-mono",children:"%d"}),e.jsx("td",{className:"p-3",children:"-2,147,483,648 to 2,147,483,647"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono",children:"float"}),e.jsx("td",{className:"p-3",children:"4 Bytes"}),e.jsx("td",{className:"p-3 font-mono",children:"%f"}),e.jsx("td",{className:"p-3",children:"7 decimal digits precision"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-mono",children:"double"}),e.jsx("td",{className:"p-3",children:"8 Bytes"}),e.jsx("td",{className:"p-3 font-mono",children:"%lf"}),e.jsx("td",{className:"p-3",children:"15 decimal digits precision"})]})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"💻 Hands-on Code Example: TokensAndOperatorsDemo.c"}),e.jsx(t,{fileModule:n,title:"TokensAndOperatorsDemo.c",editable:!1})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsx("b",{children:"Integer Division Truncation:"})," ",e.jsx("code",{children:"7 / 2"})," evaluates to ",e.jsx("code",{children:"3"})," in C. Cast at least one operand to ",e.jsx("code",{children:"float"})," or ",e.jsx("code",{children:"double"})," for decimal precision."]}),e.jsxs("li",{children:[e.jsx("b",{children:"Bitwise Shift Range Overflow:"})," Shifting an 8-bit integer past 7 bits results in undefined behavior."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsx("h2",{className:"text-xl font-bold text-amber-400",children:"🤔 Think About This..."}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why does ",e.jsx("code",{children:"x & (x - 1)"})," reset the lowest set bit in a binary number? How is this trick used to count set bits in $O(k)$ time?"]})]}),e.jsx("section",{children:e.jsx(s,{title:"Module 001_002 Topic 0 FAQs",questions:a})}),e.jsx("section",{children:e.jsx(i,{content:o,title:"Module 001_002 Topic 0 Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_001_002_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(r,{note:"Always prefer <stdint.h> types like int32_t or uint8_t when writing hardware drivers or network protocol packers to prevent architecture size mismatches! — Sukanta Hui"})})]})}export{y as default};
