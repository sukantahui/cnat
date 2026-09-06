import{j as e}from"./vendor-react-core-Doz9nIC6.js";import{C as t}from"./CFileLoader-Cyf0mDYr.js";import{F as n}from"./FAQTemplate-BHhlgA96.js";import{P as i}from"./PlainTextPrint-C08xhKA4.js";import{T as r}from"./TeacherSukantaHui-DDN87fI5.js";import"./CodeBlock-BLbhA0w-.js";import"./vendor-prism-ZrEUZN6d.js";import"./vendor-icons-DEsnU7fn.js";import"./EditableCCodeBlock-BfqJ1usG.js";import"./vendor-monaco-Bv7hoEkV.js";const o=`#include <stdio.h>\r
\r
/**\r
 * VoidPointersConstDemo.c\r
 * Demonstrates generic void pointers (void*), explicit type casting,\r
 * generic byte printer, and the 4 const pointer qualifier permutations.\r
 * Educator: Sukanta Hui (Coder & AccoTax, Barrackpore)\r
 */\r
\r
// 1. Generic Print Function using void* and type discriminator\r
void printGeneric(const void *ptr, char type) {\r
    switch (type) {\r
        case 'i':\r
            printf("Integer Value : %d\\n", *(const int*)ptr);\r
            break;\r
        case 'f':\r
            printf("Float Value   : %.2f\\n", *(const float*)ptr);\r
            break;\r
        case 'd':\r
            printf("Double Value  : %.2f\\n", *(const double*)ptr);\r
            break;\r
        case 'c':\r
            printf("Char Value    : '%c'\\n", *(const char*)ptr);\r
            break;\r
        default:\r
            printf("Unknown type!\\n");\r
    }\r
}\r
\r
// 2. Generic Byte-by-Byte Memory Inspector\r
void dumpMemoryBytes(const void *ptr, size_t numBytes) {\r
    const unsigned char *bytePtr = (const unsigned char*)ptr;\r
    printf("Memory Bytes (%zu B): [ ", numBytes);\r
    for (size_t i = 0; i < numBytes; i++) {\r
        printf("%02X ", bytePtr[i]);\r
    }\r
    printf("]\\n");\r
}\r
\r
int main(void) {\r
    int num = 305419896; // 0x12345678\r
    double pi = 3.14159;\r
    char letter = 'S';\r
\r
    printf("====================================================\\n");\r
    printf(" Generic Void Pointers (void*) & Const Qualifiers\\n");\r
    printf(" Coder & AccoTax | Educator: Sukanta Hui\\n");\r
    printf("====================================================\\n\\n");\r
\r
    printf("1. Polymorphic Function Calls via void*:\\n");\r
    printGeneric(&num, 'i');\r
    printGeneric(&pi, 'd');\r
    printGeneric(&letter, 'c');\r
    printf("\\n");\r
\r
    printf("2. Raw Hexadecimal Memory Dump via void*:\\n");\r
    printf("   • Integer 0x12345678 (Little-Endian Memory Order):\\n     ");\r
    dumpMemoryBytes(&num, sizeof(num));\r
    printf("   • Double Pi:\\n     ");\r
    dumpMemoryBytes(&pi, sizeof(pi));\r
    printf("\\n");\r
\r
    // 3. The 4 Const Pointer Permutations\r
    int a = 10, b = 20;\r
\r
    // A. Pointer to Constant Data (Data read-only, pointer mutable)\r
    const int *pConstData = &a;\r
    pConstData = &b; // OK! Pointer can point elsewhere\r
    // *pConstData = 30; // ERROR! Data is read-only\r
\r
    // B. Constant Pointer to Mutable Data (Data mutable, pointer fixed)\r
    int * const constPtr = &a;\r
    *constPtr = 15; // OK! Data can be modified\r
    // constPtr = &b; // ERROR! Pointer address is read-only\r
\r
    // C. Constant Pointer to Constant Data (Both read-only)\r
    const int * const fullyConst = &a;\r
    // *fullyConst = 25; // ERROR!\r
    // fullyConst = &b;  // ERROR!\r
\r
    printf("3. Const Pointer Rules:\\n");\r
    printf("   • const int *ptr       : Read-only Data, Mutable Pointer Address\\n");\r
    printf("   • int * const ptr       : Mutable Data, Read-only Pointer Address\\n");\r
    printf("   • const int * const ptr : Read-only Data, Read-only Pointer Address\\n");\r
\r
    return 0;\r
}\r
`,s=[{question:"What is a `void*` (Void Pointer) in C?",shortAnswer:"A generic, untyped pointer capable of holding the memory address of ANY data type.",explanation:"Used extensively in polymorphic APIs like `malloc()`, `qsort()`, `bsearch()`, and `memcpy()`.",hint:"Generic untyped pointer.",level:"basic"},{question:"Can you directly dereference a `void*` pointer (`*pVoid`) in C?",shortAnswer:"No! A void pointer has no associated data type or byte size; attempting `*pVoid` causes a compilation error.",explanation:"You must explicitly typecast `void*` to a concrete pointer type (e.g. `*(int*)pVoid`) before dereferencing.",hint:"Must typecast before dereferencing.",level:"basic"},{question:"Does C require explicit casting when converting between `void*` and other pointer types (e.g. `int *p = malloc(10);`)?",shortAnswer:"No, in C, `void*` implicitly converts to and from any data pointer type without explicit casting.",explanation:"Explicit casting is required in C++, but optional and often discouraged in pure C for `malloc()`.",hint:"Implicit conversion in C.",level:"basic"},{question:"What does `const int *ptr` (or `int const *ptr`) declare?",shortAnswer:"A pointer to constant integer data (the integer value cannot be modified through `ptr`).",explanation:"The pointer address itself can be reassigned to point elsewhere, but `*ptr = 10;` is forbidden.",hint:"Read-only data, mutable pointer.",level:"basic",codeExample:`const int *p = &a;
p = &b;   // Legal
*p = 50;  // COMPILE ERROR!`},{question:"What does `int * const ptr` declare?",shortAnswer:"A constant pointer to mutable integer data (the pointer address is locked and cannot point elsewhere).",explanation:"`*ptr = 50;` is legal, but `ptr = &b;` causes a compilation error.",hint:"Mutable data, locked pointer address.",level:"basic",codeExample:`int * const p = &a;
*p = 50;  // Legal
p = &b;   // COMPILE ERROR!`},{question:"What does `const int * const ptr` declare?",shortAnswer:"A constant pointer to constant integer data (both the pointer address and the data are completely immutable).",explanation:"Neither `ptr` nor `*ptr` can be modified.",hint:"Both pointer and data are constant.",level:"basic"},{question:"What is the 'Clockwise / Right-to-Left' rule for reading complex C pointer declarations?",shortAnswer:"Start at the identifier, read right until closing parenthesis/semicolon, then read left towards the data type.",explanation:"Example: `int * const p` -> `p` is a `const pointer` to `int`.",hint:"Right-to-left reading rule.",level:"intermediate"},{question:"Why do functions like `memcpy` and `memset` accept `void*` parameters?",shortAnswer:"To operate polymorphically on raw byte buffers of any data type (integers, floats, structs, strings).",explanation:"Avoids writing separate copy routines for every individual data type.",hint:"Universal byte-level polymorphism.",level:"intermediate"},{question:"What is the return type of `malloc()`, `calloc()`, and `realloc()`?",shortAnswer:"`void*` (a pointer to an unformatted block of allocated heap memory, or `NULL`).",explanation:"Allows the returned address to be directly assigned to any pointer type.",hint:"void* generic heap pointer.",level:"basic"},{question:"Why does casting a pointer to `unsigned char*` enable byte-by-byte memory inspection?",shortAnswer:"Because `sizeof(unsigned char)` is guaranteed to be 1 byte, allowing exact inspection of raw binary bytes in memory.",explanation:"Used to inspect endianness, packet payloads, and memory dumps.",hint:"1-byte precision inspection.",level:"intermediate"},{question:"What is Type Punning in C and how is it related to pointers?",shortAnswer:"Reinterpreting the bit pattern of one data type as another by casting pointers (e.g. `*(float*)&intVal`).",explanation:"Can violate the Strict Aliasing Rule in C99, leading to undefined compiler optimization bugs.",hint:"Reinterpreting memory bits via pointer cast.",level:"advanced"},{question:"What is the Strict Aliasing Rule in C?",shortAnswer:"The compiler assumes two pointers of different incompatible types do not point to the same memory location.",explanation:"Allows CPU register caching optimizations. Aliasing via `char*` is explicitly permitted as an exception.",hint:"Compiler optimization rule on pointer types.",level:"advanced"},{question:"Why is casting through `char*` or `unsigned char*` exempt from strict aliasing violations?",shortAnswer:"The ISO C standard explicitly permits character pointers to alias and inspect any object's raw byte representation.",explanation:"Guarantees that memory dumpers, `memcpy`, and serializers work correctly.",hint:"Character pointers are universal aliasers.",level:"advanced"},{question:"Can a `void*` hold the address of a function in standard ISO C?",shortAnswer:"No, in standard C, `void*` is only defined for object pointers (data), not function pointers.",explanation:"POSIX specifies that `void*` can hold function pointers (for `dlsym`), but ISO C considers data and code memory distinct.",hint:"Object pointers vs Function pointers.",level:"advanced"},{question:"What happens if you cast a 64-bit pointer to a 32-bit `int`?",shortAnswer:"Upper 32 bits of the address are truncated, causing severe data loss / pointer corruption.",explanation:"Always use `uintptr_t` or `intptr_t` from `<stdint.h>` when converting pointers to integers.",hint:"Use uintptr_t from <stdint.h>.",level:"advanced"},{question:"What integer type is guaranteed to be large enough to hold any pointer address safely?",shortAnswer:"`uintptr_t` (defined in `<stdint.h>`).",explanation:"Automatically expands to 32 bits on 32-bit OS and 64 bits on 64-bit OS.",hint:"uintptr_t in <stdint.h>.",level:"intermediate"},{question:"What does `const` qualifier on a function parameter `void f(const char *s)` communicate to the caller?",shortAnswer:"Contract guarantee: The function will strictly read the data and will never modify the caller's buffer.",explanation:"Enhances code safety and allows string literals to be passed without warnings.",hint:"Read-only interface contract.",level:"basic"},{question:"How do you cast away `const`ness in C, and is writing through it safe?",shortAnswer:"`int *p = (int*)constPtr;` (Writing through it is Undefined Behavior if the original object was defined `const`).",explanation:"Casting away const allows compiling, but modifying true ROM/const memory causes runtime crashes.",hint:"Casting away const causes UB on true const objects.",level:"advanced"},{question:'What is the output of `int a = 10; const int *p = &a; a = 20; printf("%d", *p);`?',options:["10","20","Compiler error","Garbage"],correctAnswer:1,explanation:"`p` cannot modify `a`, but `a` itself is not const and can be modified directly, so `*p` reads 20."},{question:"What happens if a function comparator in `qsort` modifies data through its `const void*` arguments?",shortAnswer:"Compilation error unless cast, and logic errors/crashes during sorting.",explanation:"`qsort` expects non-destructive read-only comparisons.",hint:"Comparator arguments are read-only.",level:"basic"},{question:"Can a `void*` variable be initialized to `NULL`?",shortAnswer:"Yes, `void *p = NULL;` is standard idiom.",explanation:"`NULL` is defined as `((void*)0)`.",hint:"void *p = NULL is standard.",level:"basic"},{question:"Why should `const` be used extensively in systems C code?",shortAnswer:"Catches accidental mutation bugs at compile-time and allows compiler to optimize data into read-only flash/RAM.",explanation:"Const-correctness is a hallmark of professional systems engineering.",hint:"Compile-time safety and compiler optimization.",level:"basic"},{question:"What does `void free(void *ptr)` accept as argument?",shortAnswer:"Any pointer returned by `malloc`, `calloc`, or `realloc` regardless of its original type.",explanation:"`void*` allows `free()` to release memory without type specific signatures.",hint:"Generic deallocator accepting any pointer.",level:"basic"},{question:"What is an Incompatible Pointer Assignment warning?",shortAnswer:"Assigning pointers of different data types (e.g. `int *p = &doubleVal;`) without an explicit cast.",explanation:"Warns against type mismatch that would cause incorrect byte strides during dereferencing.",hint:"Type mismatch in pointer assignment.",level:"basic"},{question:"What is the golden rule for pointer casting?",shortAnswer:"Ensure memory alignment rules are respected and pointee types have matching bit interpretations.",explanation:"Improper casting leads to bus errors, unaligned access faults, and undefined behavior.",hint:"Respect alignment and bit width.",level:"advanced"}],a=`================================================================================\r
CODER & ACCOTAX - C LANGUAGE COMPLETE ROADMAP\r
MODULE 002_007: Pointers & Memory Addresses\r
TOPIC 5: Void Pointers (void*), Casting & const Qualifiers\r
Educator: Sukanta Hui | Center: Barrackpore, West Bengal\r
================================================================================\r
\r
1. GENERIC VOID POINTERS (void*)\r
--------------------------------------------------------------------------------\r
- Generic, untyped pointer holding memory addresses of ANY data type.\r
- Cannot be directly dereferenced (\`*pVoid\` is a compile error!).\r
- Must be explicitly cast before dereferencing: \`*(int*)pVoid\`.\r
- Arithmetic on \`void*\` is illegal in standard ISO C.\r
\r
2. THE 4 CONST POINTER QUALIFIER COMBINATIONS\r
--------------------------------------------------------------------------------\r
1. \`const int *p\` (or \`int const *p\`):\r
   • Pointee Data: READ-ONLY (Cannot modify \`*p = 10;\`)\r
   • Pointer Address: MUTABLE (Can point to another address: \`p = &b;\`)\r
\r
2. \`int * const p\`:\r
   • Pointee Data: MUTABLE (Can modify \`*p = 10;\`)\r
   • Pointer Address: READ-ONLY (Cannot reassign address: \`p = &b;\` ERROR!)\r
\r
3. \`const int * const p\`:\r
   • Pointee Data: READ-ONLY\r
   • Pointer Address: READ-ONLY (Completely immutable!)\r
\r
4. \`int *p\`:\r
   • Pointee Data: MUTABLE\r
   • Pointer Address: MUTABLE\r
\r
3. MEMORY DUMPING & RAW BYTES\r
--------------------------------------------------------------------------------\r
- Cast any pointer to \`const unsigned char*\` to inspect memory byte-by-byte.\r
- Always use \`uintptr_t\` (from \`<stdint.h>\`) when storing pointer addresses in integers.\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"mt-4 pt-2 md:pt-4 space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800 shadow-xl",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 002_007 · Topic 5"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Polymorphism & Immutability"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Void Pointers (void*), Pointer Casting & const Qualifiers"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master generic memory programming in C. Build polymorphic functions and memory analyzers with generic void pointers (",e.jsx("code",{children:"void*"}),"), understand pointer typecasting, and master the 4 ",e.jsx("code",{children:"const"})," pointer qualifier permutations."]})]}),e.jsxs("section",{className:"space-y-6 bg-gradient-to-br from-indigo-950/40 via-slate-900 to-slate-900 border-2 border-indigo-500/30 rounded-3xl p-6 md:p-8 shadow-2xl relative overflow-hidden",children:[e.jsx("div",{className:"absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20"}),e.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-3 border-b border-indigo-500/20 pb-4",children:[e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("span",{className:"flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/20 text-indigo-300 text-xl border border-indigo-500/30",children:"🧑‍🏫"}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-2xl font-black text-indigo-200 tracking-tight",children:"Teacher's Corner: The Universal Master Key & Padlocks"}),e.jsx("p",{className:"text-xs text-indigo-300/80",children:"Classroom discussion by Sukanta Hui (Coder & AccoTax, Barrackpore)"})]})]}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3 py-1 rounded-full text-xs font-semibold",children:"CNAT Classroom Insight"})]}),e.jsxs("div",{className:"space-y-4 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["When ",e.jsx("strong",{children:"Tuhina"})," asked how ",e.jsx("code",{children:"malloc()"})," and ",e.jsx("code",{children:"qsort()"})," can handle integers, strings, and custom structures without separate functions for each, ",e.jsx("strong",{children:"Sukanta Hui"})," introduced ",e.jsx("code",{children:"void*"}),"."]}),e.jsxs("div",{className:"p-4 bg-slate-950/80 rounded-2xl border border-slate-800 space-y-2",children:[e.jsx("h3",{className:"font-bold text-amber-300 text-sm md:text-base",children:"🔑 The Universal Master Key"}),e.jsxs("p",{className:"text-xs md:text-sm text-slate-300",children:["A typed pointer (",e.jsx("code",{children:"int*"}),") is like a key designed for a specific 4-tumbler lock. A ",e.jsxs("strong",{children:["Void Pointer (",e.jsx("code",{children:"void*"}),")"]})," is a blank skeleton key: it can open any door in RAM, but because it has no grooves, you cannot unlock (dereference) the door until you carve the specific shape (typecast) onto it!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsxs("h2",{className:"text-xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"⚙️"})," Semantic Visual Diagram: The 4 Const Pointer Permutations"]}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 920 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("text",{x:"460",y:"25",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-sm",children:"The 4 Const Pointer Combinations: Read-Only Data vs. Locked Pointer Addresses"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"130",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"1.5"}),e.jsx("text",{x:"95",y:"25",textAnchor:"middle",fill:"#38bdf8",className:"font-bold text-xs font-mono",children:"const int *p"}),e.jsx("rect",{x:"15",y:"40",width:"160",height:"32",rx:"4",fill:"#e11d48",opacity:"0.3"}),e.jsx("text",{x:"95",y:"60",textAnchor:"middle",fill:"#fecdd3",className:"text-xs font-bold font-mono",children:"*p = 10 (FORBIDDEN!)"}),e.jsx("rect",{x:"15",y:"80",width:"160",height:"32",rx:"4",fill:"#10b981",opacity:"0.3"}),e.jsx("text",{x:"95",y:"100",textAnchor:"middle",fill:"#a7f3d0",className:"text-xs font-bold font-mono",children:"p = &b (ALLOWED!)"})]}),e.jsxs("g",{transform:"translate(260, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"130",rx:"8",fill:"#1e293b",stroke:"#818cf8",strokeWidth:"1.5"}),e.jsx("text",{x:"95",y:"25",textAnchor:"middle",fill:"#818cf8",className:"font-bold text-xs font-mono",children:"int * const p"}),e.jsx("rect",{x:"15",y:"40",width:"160",height:"32",rx:"4",fill:"#10b981",opacity:"0.3"}),e.jsx("text",{x:"95",y:"60",textAnchor:"middle",fill:"#a7f3d0",className:"text-xs font-bold font-mono",children:"*p = 10 (ALLOWED!)"}),e.jsx("rect",{x:"15",y:"80",width:"160",height:"32",rx:"4",fill:"#e11d48",opacity:"0.3"}),e.jsx("text",{x:"95",y:"100",textAnchor:"middle",fill:"#fecdd3",className:"text-xs font-bold font-mono",children:"p = &b (FORBIDDEN!)"})]}),e.jsxs("g",{transform:"translate(480, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"190",height:"130",rx:"8",fill:"#1e293b",stroke:"#f472b6",strokeWidth:"1.5"}),e.jsx("text",{x:"95",y:"25",textAnchor:"middle",fill:"#f472b6",className:"font-bold text-xs font-mono",children:"const int * const p"}),e.jsx("rect",{x:"15",y:"40",width:"160",height:"32",rx:"4",fill:"#e11d48",opacity:"0.3"}),e.jsx("text",{x:"95",y:"60",textAnchor:"middle",fill:"#fecdd3",className:"text-xs font-bold font-mono",children:"*p = 10 (FORBIDDEN!)"}),e.jsx("rect",{x:"15",y:"80",width:"160",height:"32",rx:"4",fill:"#e11d48",opacity:"0.3"}),e.jsx("text",{x:"95",y:"100",textAnchor:"middle",fill:"#fecdd3",className:"text-xs font-bold font-mono",children:"p = &b (FORBIDDEN!)"})]}),e.jsxs("g",{transform:"translate(700, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"180",height:"130",rx:"8",fill:"#1e293b",stroke:"#34d399",strokeWidth:"1.5"}),e.jsx("text",{x:"90",y:"25",textAnchor:"middle",fill:"#34d399",className:"font-bold text-xs font-mono",children:"int *p (Standard)"}),e.jsx("rect",{x:"10",y:"40",width:"160",height:"32",rx:"4",fill:"#10b981",opacity:"0.3"}),e.jsx("text",{x:"90",y:"60",textAnchor:"middle",fill:"#a7f3d0",className:"text-xs font-bold font-mono",children:"*p = 10 (ALLOWED!)"}),e.jsx("rect",{x:"10",y:"80",width:"160",height:"32",rx:"4",fill:"#10b981",opacity:"0.3"}),e.jsx("text",{x:"90",y:"100",textAnchor:"middle",fill:"#a7f3d0",className:"text-xs font-bold font-mono",children:"p = &b (ALLOWED!)"})]}),e.jsx("rect",{x:"40",y:"200",width:"840",height:"55",rx:"8",fill:"#0f172a",stroke:"#334155"}),e.jsx("text",{x:"460",y:"225",textAnchor:"middle",fill:"#34d399",className:"text-xs font-mono font-bold",children:"• Rule: const to the left of * locks DATA; const to the right of * locks the POINTER ADDRESS!"}),e.jsx("text",{x:"460",y:"243",textAnchor:"middle",fill:"#94a3b8",className:"text-[11px]",children:"Use const pointers everywhere for robust, bug-free APIs and compile-time immutability verification!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Generic Memory Inspection via (unsigned char*)"}),e.jsxs("div",{className:"bg-slate-800/50 p-5 rounded-2xl border border-slate-750 space-y-3 text-xs",children:[e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["By casting any ",e.jsx("code",{children:"void*"})," to ",e.jsx("code",{children:"const unsigned char*"}),", you can inspect the exact raw byte layout of any data structure in physical RAM:"]}),e.jsx("pre",{className:"p-4 bg-slate-950 rounded-xl border border-slate-800 font-mono text-emerald-400 overflow-x-auto",children:`void dumpMemory(const void *ptr, size_t size) {
    const unsigned char *b = (const unsigned char*)ptr;
    for (size_t i = 0; i < size; i++) {
        printf("%02X ", b[i]); // Hex byte inspection!
    }
}`})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Void Pointers & Const Qualifiers Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"VoidPointersConstDemo.c"}),") demonstrates polymorphic printing via ",e.jsx("code",{children:"void*"}),", dumping hexadecimal memory bytes, and testing the 4 ",e.jsx("code",{children:"const"})," pointer qualifier permutations."]}),e.jsx(t,{fileModule:o,title:"VoidPointersConstDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`====================================================
 Generic Void Pointers (void*) & Const Qualifiers
 Coder & AccoTax | Educator: Sukanta Hui
====================================================

1. Polymorphic Function Calls via void*:
Integer Value : 305419896
Double Value  : 3.14
Char Value    : 'S'

2. Raw Hexadecimal Memory Dump via void*:
   • Integer 0x12345678 (Little-Endian Memory Order):
     Memory Bytes (4 B): [ 78 56 34 12 ]
   • Double Pi:
     Memory Bytes (8 B): [ 6E 86 1B F0 F9 21 09 40 ]

3. Const Pointer Rules:
   • const int *ptr       : Read-only Data, Mutable Pointer Address
   • int * const ptr       : Mutable Data, Read-only Pointer Address
   • const int * const ptr : Read-only Data, Read-only Pointer Address`})]})]}),e.jsxs("section",{className:"space-y-4 bg-rose-950/20 border border-rose-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-rose-400 flex items-center gap-2",children:[e.jsx("span",{children:"⚠️"})," Common Pitfalls & Casting Rules"]}),e.jsxs("ul",{className:"list-disc pl-5 text-sm text-slate-300 space-y-2",children:[e.jsxs("li",{children:[e.jsxs("strong",{children:["Dereferencing ",e.jsx("code",{children:"void*"})," Directly:"]})," ",e.jsx("code",{children:"*pVoid"})," fails to compile because the size of ",e.jsx("code",{children:"void"})," is undefined. Always cast before dereferencing: ",e.jsx("code",{children:"*(int*)pVoid"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Casting Pointers to 32-bit Integers:"})," On 64-bit systems, casting a pointer to ",e.jsx("code",{children:"int"})," truncates 32 bits, corrupting the memory address. Always use ",e.jsx("code",{children:"uintptr_t"})," from ",e.jsx("code",{children:"<stdint.h>"}),"."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Arithmetic on ",e.jsx("code",{children:"void*"}),":"]})," ",e.jsx("code",{children:"pVoid++"})," is non-standard and rejected by strict ISO C compilers."]})]})]}),e.jsxs("section",{className:"space-y-4 bg-amber-950/20 border border-amber-900/40 p-6 rounded-2xl",children:[e.jsxs("h2",{className:"text-xl font-bold text-amber-400 flex items-center gap-2",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["Why does ",e.jsx("code",{children:"const int *p"})," allow modifying the pointer address ",e.jsx("code",{children:"p = &b;"}),", while ",e.jsx("code",{children:"int * const p"})," refuses to reassign ",e.jsx("code",{children:"p = &b;"}),"?"]})]}),e.jsx("section",{children:e.jsx(n,{title:"Module 002_007 Topic 5 FAQs: Void Pointers & Const",questions:s})}),e.jsx("section",{children:e.jsx(i,{content:a,title:"Module 002_007 Topic 5 Printable Note",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Topic 5 Note",downloadFileName:"module_002_007_topic5_note.txt"})}),e.jsx("section",{children:e.jsx(r,{note:"Const-correctness is the mark of a true software engineer! Use const pointers everywhere to make your intent crystal clear and prevent bugs before your code even compiles. — Sukanta Hui"})})]})}export{b as default};
