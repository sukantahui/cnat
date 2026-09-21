import{j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as t}from"./CFileLoader-Clw1BKmX.js";import{F as r}from"./FAQTemplate-DmdkpHR-.js";import{P as n}from"./PlainTextPrint-CS96sBe2.js";import{T as i}from"./TeacherSukantaHui-Cvdemxlb.js";import"./CodeBlock-D970yTe-.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-CBbStT7G.js";import"./EditableCCodeBlock-ZnkKtlGd.js";import"./vendor-monaco-CEXMEfXF.js";const a=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/* Simulating Header 1: Vector2D with Standard Header Guard */\r
#ifndef VECTOR2D_H\r
#define VECTOR2D_H\r
\r
typedef struct {\r
    float x;\r
    float y;\r
} Vector2D;\r
\r
static inline Vector2D vector_add(Vector2D a, Vector2D b) {\r
    Vector2D result = { a.x + b.x, a.y + b.y };\r
    return result;\r
}\r
\r
#endif /* VECTOR2D_H */\r
\r
/* Simulating duplicate inclusion of Vector2D (e.g. via nested includes) */\r
#ifndef VECTOR2D_H\r
#define VECTOR2D_H\r
/* This block is successfully ignored by the preprocessor! */\r
typedef struct { float x; float y; } Vector2D; /* Would cause redefinition error without guards */\r
#endif\r
\r
/* Simulating Header 2: Transform with #pragma once alternative */\r
#ifndef TRANSFORM_H\r
#define TRANSFORM_H\r
\r
typedef struct {\r
    Vector2D position;\r
    float rotation;\r
    float scale;\r
} Transform;\r
\r
#endif /* TRANSFORM_H */\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  Header Guard Mechanics: Preventing Type Redefinitions\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    printf(">>> 1. Creating Structs Defined Behind Include Guards:\\n");\r
    Vector2D posA = {10.5f, 20.0f};\r
    Vector2D posB = {5.5f, -4.0f};\r
    Vector2D total = vector_add(posA, posB);\r
\r
    printf("    Vector A: (%.2f, %.2f)\\n", posA.x, posA.y);\r
    printf("    Vector B: (%.2f, %.2f)\\n", posB.x, posB.y);\r
    printf("    Sum (A+B): (%.2f, %.2f)\\n\\n", total.x, total.y);\r
\r
    printf(">>> 2. Composite Transform Object:\\n");\r
    Transform entity = { total, 45.0f, 1.0f };\r
    printf("    Entity Position: (%.2f, %.2f)\\n", entity.position.x, entity.position.y);\r
    printf("    Entity Rotation: %.1f deg\\n", entity.rotation);\r
    printf("    Entity Scale   : %.1fx\\n", entity.scale);\r
\r
    printf("\\n>>> 3. Multiple Inclusion Protection:\\n");\r
    printf("    VECTOR2D_H guard prevented duplicate typedef struct redefinitions.\\n");\r
\r
    printf("\\n=== Header Guard Demonstration Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,s=[{question:"What is a Header Guard (Include Guard) in C?",answer:"A conditional compilation pattern (#ifndef HEADER_NAME_H, #define HEADER_NAME_H, #endif) placed in C header files (.h) to prevent the same header file from being expanded multiple times in a single translation unit."},{question:"What error occurs if a header file containing struct or typedef definitions is included twice without guards?",answer:"The compiler throws a 'redefinition of struct/typedef' or 'conflicting types' fatal error during semantic analysis."},{question:"What is '#pragma once'?",answer:"#pragma once is a non-standard but universally supported compiler directive placed at the top of a header file that instructs the preprocessor to include the file only once per compilation unit."},{question:"What are the advantages of standard #ifndef header guards over #pragma once?",answer:`1. 100% compliant with ISO C standard.
2. Guaranteed to work on every esoteric compiler and embedded architecture.
3. Immune to filesystem inode aliasing (e.g. symlinks or hard links pointing to the same file).`},{question:"What are the advantages of #pragma once over standard #ifndef header guards?",answer:`1. Less boilerplate code (1 line instead of 3).
2. Eliminates guard macro naming collision bugs.
3. Faster compilation speeds because compilers avoid re-opening the file from disk.`},{question:"What is a Guard Macro Name Collision bug?",answer:"If two different header files (e.g. math/vector.h and physics/vector.h) accidentally use the exact same guard macro name (VECTOR_H), including the second header will be silently skipped, causing missing type errors."},{question:"What is the recommended naming convention for header guard macros?",answer:"Use the project and file path: PROJECT_MODULE_FILENAME_H, e.g., ACCOTAX_CORE_VECTOR2D_H, avoiding leading double underscores (reserved by the C standard for compiler internals)."},{question:"Why should guard macro names NOT begin with leading underscores followed by capital letters (e.g. _VECTOR_H)?",answer:"The ISO C standard reserves identifiers beginning with an underscore followed by an uppercase letter (or double underscores '__') for the compiler and standard library implementations."},{question:"What is Circular Dependency (Circular Include) in C header files?",answer:"When Header A includes Header B, and Header B includes Header A. Without header guards, the preprocessor enters an infinite expansion loop until the compiler hits the maximum include depth limit."},{question:"How do you resolve circular dependency when two structs reference each other?",answer:"Use forward declarations: declare 'struct B;' before 'struct A { struct B *ptr; };', and place the full definition of struct B in its own header without circular #includes."},{question:"Should function prototypes be protected by header guards?",answer:"Yes. While duplicate identical function declarations are technically allowed in C, header files usually also contain struct, union, enum, and typedef definitions that are strictly forbidden from being redefined."},{question:"Should variable definitions (e.g. int counter = 0;) be placed in header files?",answer:"No! Variable definitions allocate memory and will cause 'multiple definition of symbol' linker errors if included in multiple .c files. Only 'extern int counter;' declarations belong in headers."},{question:"Can inline functions be defined inside header files?",answer:"Yes, 'static inline' functions are designed to live in header files so that the compiler can inline their definitions directly across all calling translation units."},{question:"How does GCC optimize standard #ifndef header guards?",answer:"GCC features a 'multiple-include optimization'. If it detects that an entire file is wrapped in an #ifndef guard, it records the guard macro and will not even open or read the physical file on subsequent #include directives if that macro is defined."},{question:"What happens if you accidentally put code BEFORE the #ifndef header guard line?",answer:"Any code before the #ifndef line will be parsed on every duplicate inclusion, breaking the multiple-include optimization and possibly causing redefinition errors."},{question:"What happens if you forget to write #define GUARD_NAME inside the #ifndef block?",answer:"The guard macro is never defined, so subsequent #include directives will re-expand the file, defeating the guard completely."},{question:"Can you combine #pragma once and #ifndef header guards in the same file?",answer:"Yes. Many professional open-source libraries put '#pragma once' at the top followed by traditional '#ifndef GUARDS' for maximum compilation speed and universal portability."},{question:"What is the maximum nested #include depth mandated by the C standard?",answer:"C99/C11 requires compilers to support at least 15 levels of nested header inclusions (modern GCC/Clang support hundreds of levels)."},{question:"Why should header files include ONLY the minimum necessary dependencies?",answer:"Excessive header inclusions increase compilation time, pollute the namespace with unneeded symbols, and create unnecessary build coupling."},{question:"What is a 'Forward Declaration' and why does it reduce header inclusion bloat?",answer:"A forward declaration tells the compiler that a type or struct exists (e.g. 'typedef struct Student Student;') without defining its fields, allowing pointers to be declared without including the full header."},{question:"Can an #endif at the end of a header guard have a comment?",answer:"Yes, appending a comment like '#endif /* ACCOTAX_VECTOR_H */' is standard best practice to improve code readability in large files."},{question:"What is a 'PCH' (Precompiled Header)?",answer:"A feature supported by GCC, Clang, and MSVC that compiles static system headers (like <stdio.h>, <stdlib.h>, <windows.h>) into a binary cache once, dramatically accelerating build times."},{question:"How do header guards behave across different .c source files?",answer:"Each .c file is a separate translation unit with its own fresh preprocessor symbol table. Header guards only protect against multiple inclusions within the *same* translation unit."},{question:"Can you undefine a header guard macro using #undef?",answer:"Technically yes, but doing so will cause the header to be re-expanded on the next #include, which is almost always a bug."},{question:"What tool or compiler flag detects missing header guards?",answer:"Clang-tidy and static analyzers flag header files missing either #pragma once or matching #ifndef include guards."}],d=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 4 (MODULE 004_011)\r
HEADER GUARDS, INCLUDE GUARDS & #PRAGMA ONCE\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. THE MULTIPLE INCLUSION PROBLEM\r
   - In large projects, header B includes header A, and header C includes header A.\r
   - When main.c includes both B and C, header A is parsed twice in the same\r
     translation unit, causing fatal "redefinition of typedef/struct" errors.\r
\r
2. STANDARD ANSI/ISO HEADER GUARD PATTERN\r
   #ifndef PROJECT_MODULE_FILENAME_H\r
   #define PROJECT_MODULE_FILENAME_H\r
\r
   // Struct definitions, type definitions, static inline functions, prototypes\r
   typedef struct {\r
       int id;\r
       char name[50];\r
   } Record;\r
\r
   #endif /* PROJECT_MODULE_FILENAME_H */\r
\r
3. #PRAGMA ONCE (MODERN COMPILER DIRECTIVE)\r
   #pragma once\r
   // Struct and function declarations...\r
   - Pros: Single line, no macro name collision risk, faster compiler skip.\r
   - Cons: Not strictly part of ISO C standard (though universally supported).\r
\r
4. WHAT BELONGS IN A HEADER (.H) FILE:\r
   - Structure, union, and enum definitions\r
   - Typedef aliases\r
   - Function prototypes (extern declarations)\r
   - Macro definitions (#define)\r
   - Static inline function implementations\r
   - Global variable declarations: extern int globalState; (NO ALLOCATION!)\r
\r
5. WHAT NEVER BELONGS IN A HEADER (.H) FILE:\r
   - Global variable definitions: int globalState = 0; (causes duplicate symbol linker error!)\r
   - Non-inline function bodies\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,b=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_011"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 4"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:["Header Guards, Include Guards & ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"#pragma once"})]}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:["Master multi-file code modularity. Learn how to prevent fatal type and struct redefinition errors, eliminate circular dependency loops, and compare standard ",e.jsx("code",{children:"#ifndef"})," guards against compiler ",e.jsx("code",{children:"#pragma once"})," directives."]})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"🛡️ Classroom Story: The 50-Error Cascade from One Missing Guard"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Barrackpore project lab, ",e.jsx("strong",{children:"Swadeep"})," and ",e.jsx("strong",{children:"Tuhina"})," were integrating a game engine. ",e.jsx("code",{children:"player.h"})," included ",e.jsx("code",{children:"vector.h"}),", and ",e.jsx("code",{children:"physics.h"})," also included ",e.jsx("code",{children:"vector.h"}),". When compiling ",e.jsx("code",{children:"main.c"}),", GCC threw over 50 cascading error messages claiming ",e.jsx("code",{children:"error: redefinition of 'struct Vector2D'"}),"."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," explained the mechanism: ",e.jsxs("em",{children:["“Because ",e.jsx("code",{children:"vector.h"})," had no include guard, the preprocessor inserted the struct definition into ",e.jsx("code",{children:"main.c"})," twice! By wrapping every header in an ",e.jsx("code",{children:"#ifndef VECTOR_H / #define VECTOR_H / #endif"})," guard, subsequent inclusions are skipped cleanly.”"]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: Diamond Inclusion & Header Guard Filtering"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Diamond Inclusion and Header Guard Diagram",children:[e.jsx("rect",{width:"900",height:"280",fill:"none"}),e.jsx("rect",{x:"360",y:"20",width:"180",height:"60",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"450",y:"45",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"vector.h"}),e.jsx("text",{x:"450",y:"65",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"struct Vector2D definition"}),e.jsx("path",{d:"M 400 80 L 250 120",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-guard)"}),e.jsx("path",{d:"M 500 80 L 650 120",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-guard)"}),e.jsx("rect",{x:"160",y:"120",width:"180",height:"55",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"250",y:"145",fill:"#10b981",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"player.h"}),e.jsx("text",{x:"250",y:"163",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:'#include "vector.h"'}),e.jsx("rect",{x:"560",y:"120",width:"180",height:"55",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"650",y:"145",fill:"#10b981",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"physics.h"}),e.jsx("text",{x:"650",y:"163",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:'#include "vector.h"'}),e.jsx("path",{d:"M 250 175 L 400 215",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-guard)"}),e.jsx("path",{d:"M 650 175 L 500 215",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-guard)"}),e.jsx("rect",{x:"340",y:"215",width:"220",height:"60",rx:"8",fill:"#047857",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"450",y:"240",fill:"#ffffff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"main.c (Protected by Guards)"}),e.jsx("text",{x:"450",y:"260",fill:"#ccfbf1",fontSize:"10",textAnchor:"middle",children:"Vector2D parsed ONCE. 0 Errors."}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow-guard",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#64748b"})})})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: #ifndef Guards vs #pragma once"}),e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full text-left text-sm border-collapse rounded-xl overflow-hidden shadow-sm",children:[e.jsx("thead",{className:"bg-slate-900 text-white",children:e.jsxs("tr",{children:[e.jsx("th",{className:"p-3",children:"Attribute"}),e.jsx("th",{className:"p-3",children:"Traditional #ifndef Guard"}),e.jsx("th",{className:"p-3",children:"#pragma once Directive"})]})}),e.jsxs("tbody",{className:"divide-y divide-slate-200 dark:divide-slate-700 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300",children:[e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"ISO C Standard"}),e.jsx("td",{className:"p-3 text-emerald-500 font-bold",children:"100% Standard C Compliant"}),e.jsx("td",{className:"p-3 text-amber-500",children:"Non-standard (de facto compiler standard)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Boilerplate Lines"}),e.jsx("td",{className:"p-3",children:"3 lines (#ifndef, #define, #endif)"}),e.jsx("td",{className:"p-3 text-emerald-500",children:"1 single line (#pragma once)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Name Collision Risk"}),e.jsx("td",{className:"p-3 text-rose-500",children:"Possible if two files use identical guard names"}),e.jsx("td",{className:"p-3 text-emerald-500",children:"Zero collision risk (based on file identity)"})]}),e.jsxs("tr",{children:[e.jsx("td",{className:"p-3 font-semibold",children:"Symlinks / Inodes"}),e.jsx("td",{className:"p-3 text-emerald-500",children:"Immune to filesystem aliasing"}),e.jsx("td",{className:"p-3 text-amber-500",children:"Can occasionally fail on complex symlinks"})]})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Header Guard Verification"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:"This program demonstrates how simulated duplicate include guards protect structure definitions and static inline functions from duplicate definition errors."}),e.jsx(t,{fileName:"HeaderGuardsDemo.c",code:a,title:"Header Guard & Circular Inclusion Protection Verification"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  Header Guard Mechanics: Preventing Type Redefinitions
=====================================================

>>> 1. Creating Structs Defined Behind Include Guards:
    Vector A: (10.50, 20.00)
    Vector B: (5.50, -4.00)
    Sum (A+B): (16.00, 16.00)

>>> 2. Composite Transform Object:
    Entity Position: (16.00, 16.00)
    Entity Rotation: 45.0 deg
    Entity Scale   : 1.0x

>>> 3. Multiple Inclusion Protection:
    VECTOR2D_H guard prevented duplicate typedef struct redefinitions.

=== Header Guard Demonstration Completed Successfully ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Variable Definitions in Header Files"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Never write ",e.jsx("code",{children:"int counter = 0;"})," in a ",e.jsx("code",{children:".h"})," file! If included across multiple ",e.jsx("code",{children:".c"})," files, each translation unit allocates its own storage, causing a fatal ",e.jsx("code",{children:"multiple definition of 'counter'"})," linker error. Always declare as ",e.jsx("code",{children:"extern int counter;"}),"."]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Unique Project Prefixes"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Format header guards as ",e.jsx("code",{children:"PROJECT_MODULE_FILENAME_H"})," (e.g. ",e.jsx("code",{children:"ACCOTAX_MATH_VECTOR2D_H"}),") to prevent accidental collisions with third-party open-source libraries."]})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: Circular Header Dependencies"})}),e.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:["If ",e.jsx("code",{children:"struct Teacher"})," points to ",e.jsx("code",{children:"struct Student*"})," and ",e.jsx("code",{children:"struct Student"})," points to ",e.jsx("code",{children:"struct Teacher*"}),", how do you prevent circular include deadlocks? (",e.jsxs("em",{children:["Answer: Use a Forward Declaration: ",e.jsx("code",{children:"typedef struct Student Student;"})," before the teacher struct, without including the entire student header!"]}),")"]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(r,{questions:s})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(n,{note:d,fileName:"Topic4_Header_Guards_Pragma_Once_Note.txt"})]}),e.jsx(i,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"A C codebase without header guards is a house built without mortar. Guard every header from line one to guarantee seamless multi-file compilation."})]});export{b as default};
