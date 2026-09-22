import{j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as t}from"./CFileLoader-XRIlgaz2.js";import{F as n}from"./FAQTemplate-DmdkpHR-.js";import{P as i}from"./PlainTextPrint-CS96sBe2.js";import{T as a}from"./TeacherSukantaHui-Bldu0y17.js";import"./CodeBlock-DjHpm_Qe.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-Beb6eGc1.js";import"./EditableCCodeBlock-BWI9JrQC.js";import"./vendor-monaco-CEXMEfXF.js";const r=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/* =====================================================================\r
 * MULTI-FILE MODULAR ARCHITECTURE SIMULATION\r
 * =====================================================================\r
 * In real production systems, this code is divided across 3 separate files:\r
 * 1. student_module.h  (Public API & Struct Schema)\r
 * 2. student_module.c  (Private Implementation & Static Helpers)\r
 * 3. main.c            (Application Entry Point)\r
 * ===================================================================== */\r
\r
/* --- SIMULATED student_module.h --- */\r
#ifndef STUDENT_MODULE_H\r
#define STUDENT_MODULE_H\r
\r
typedef struct {\r
    int id;\r
    char name[40];\r
    float gpa;\r
} Student;\r
\r
/* Public API Prototypes (External Linkage) */\r
Student createStudent(int id, const char *name, float gpa);\r
void printStudentDetails(const Student *s);\r
extern int g_totalStudentsRegistered; /* Global declaration (NO STORAGE) */\r
\r
#endif /* STUDENT_MODULE_H */\r
\r
/* --- SIMULATED student_module.c --- */\r
#include <string.h>\r
\r
/* Global variable definition (Allocates actual storage) */\r
int g_totalStudentsRegistered = 0;\r
\r
/* Internal helper function with Internal Linkage (static = private to module) */\r
static void formatGradeLetter(float gpa, char *outGrade) {\r
    if (gpa >= 3.75f) *outGrade = 'A';\r
    else if (gpa >= 3.0f) *outGrade = 'B';\r
    else if (gpa >= 2.0f) *outGrade = 'C';\r
    else *outGrade = 'F';\r
}\r
\r
/* Public API Implementation */\r
Student createStudent(int id, const char *name, float gpa) {\r
    Student s;\r
    s.id = id;\r
    strncpy(s.name, name, sizeof(s.name) - 1);\r
    s.name[sizeof(s.name) - 1] = '\\0';\r
    s.gpa = gpa;\r
    g_totalStudentsRegistered++;\r
    return s;\r
}\r
\r
void printStudentDetails(const Student *s) {\r
    char grade;\r
    formatGradeLetter(s->gpa, &grade);\r
    printf("    [ID: %d] %-18s | GPA: %4.2f | Grade: %c\\n", s->id, s->name, s->gpa, grade);\r
}\r
\r
/* --- SIMULATED main.c --- */\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  Multi-File C Project Architecture & Linkage\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    printf(">>> 1. Creating Student Records via Module API:\\n");\r
    Student s1 = createStudent(101, "Swadeep Sharma", 3.85f);\r
    Student s2 = createStudent(102, "Tuhina Roy",     3.95f);\r
    Student s3 = createStudent(103, "Abhronila Das",  3.70f);\r
\r
    printStudentDetails(&s1);\r
    printStudentDetails(&s2);\r
    printStudentDetails(&s3);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> 2. Inspecting Shared Global State via extern linkage:\\n");\r
    printf("    Total Students Registered = %d\\n", g_totalStudentsRegistered);\r
\r
    printf("\\n=== Multi-File Architecture Demonstration Completed ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,s=[{question:"Why are large C projects structured into multiple source (.c) and header (.h) files?",answer:"Multi-file architecture promotes modular decomposition, encapsulation, independent incremental compilation (recompiling only modified files), and team collaboration."},{question:"What is the difference between a declaration and a definition in C?",answer:"A declaration announces the name and type signature of a symbol without allocating memory (e.g. extern int x; or int add(int, int);). A definition creates the entity and allocates physical storage (e.g. int x = 5; or function body { ... })."},{question:"What does the 'extern' keyword do when applied to a global variable?",answer:"'extern int count;' declares that 'count' exists and is defined in another translation unit, allowing other .c files to access it without allocating duplicate memory."},{question:"What does the 'static' keyword do when applied to a global function or variable?",answer:"It grants the function or variable Internal Linkage, making it completely private and invisible to other translation units, preventing symbol name collisions."},{question:"What is the difference between External Linkage and Internal Linkage?",answer:"Symbols with External Linkage (regular functions and non-static globals) can be referenced across different .c files by the linker. Symbols with Internal Linkage (static functions and file-scope static variables) are restricted strictly to their own .c file."},{question:"What causes a 'multiple definition of symbol' linker error?",answer:"Defining the same non-static global variable or function in more than one .c file (or defining a variable in a header file included by multiple .c files)."},{question:"What causes an 'undefined reference to symbol' linker error?",answer:"Declaring a function or variable (e.g. in a header) and calling it in main.c, but failing to compile or link the .c file (or library) where the function is actually defined."},{question:"What should be placed in header (.h) files?",answer:`1. Struct, union, enum, and typedef declarations
2. Function prototypes
3. extern global variable declarations
4. Macro definitions (#define)
5. static inline function implementations`},{question:"What should NEVER be placed in header (.h) files?",answer:"Non-static global variable definitions (e.g. int x = 0;) and non-inline function implementations with bodies { ... }."},{question:"What is an Object File (.o / .obj)?",answer:"A relocatable machine code file generated by the compiler (gcc -c) from a single translation unit containing compiled instructions and an unresolved symbol table."},{question:"What is the role of the Linker (ld) in a multi-file C project?",answer:"The Linker combines multiple .o object files and static/dynamic libraries into a single final executable binary, resolving cross-module function and variable address references."},{question:"How do you compile a multi-file project with GCC in a single step?",answer:"gcc -Wall -Wextra main.c module1.c module2.c -o myapp"},{question:"How do you compile a multi-file project using separate compilation steps?",answer:`1. gcc -c module1.c -o module1.o
2. gcc -c module2.c -o module2.o
3. gcc -c main.c -o main.o
4. gcc main.o module1.o module2.o -o myapp`},{question:"What is Incremental Compilation and why is it faster?",answer:"When modifying one .c file in a 1,000-file project, only that single .c file is recompiled into its .o file, followed by a quick relink, saving hours of rebuild time."},{question:"What is an Opaque Pointer (Incomplete Type) pattern in C?",answer:"Declaring 'typedef struct Engine Engine;' in engine.h without defining its members. Callers can only hold 'Engine *' pointers and must call API functions (like engine_start(e)), providing pure object-oriented encapsulation."},{question:"How does the Opaque Pointer pattern prevent client code from breaking on internal struct changes?",answer:"Because client code never sees the internal struct members, changes to private struct fields do not require recompiling client translation units or breaking binary compatibility."},{question:"What is a Static Library (.a / .lib)?",answer:"An archive of .o object files (created via 'ar rcs libmylib.a foo.o bar.o') that is linked directly into the application executable at build time."},{question:"What is a Shared / Dynamic Library (.so / .dll)?",answer:"A compiled binary library loaded into memory at program launch or runtime, shared across multiple running processes to save disk space and RAM."},{question:"What is the One Definition Rule (ODR) in C?",answer:"Every identifier with external linkage must have exactly one definition across the entire program."},{question:"What is Name Mangling and why does C NOT have it?",answer:"Name mangling encodes function parameter types into symbol names (used in C++ for overloading). C uses plain symbol names, which is why C does not support function overloading."},{question:"How do you call a C function from C++ code without linker errors?",answer:`Wrap the C header prototypes in: #ifdef __cplusplus
extern "C" {
#endif
/* prototypes */
#ifdef __cplusplus
}
#endif`},{question:"What is the nm utility in Linux/GCC?",answer:"'nm myapp.o' lists all symbols (functions and variables) defined in or needed by an object file, showing whether they are local (t), global (T), or undefined (U)."},{question:"How do you prevent global namespace pollution in large C codebases?",answer:"Prefix all public API functions with a module namespace (e.g. math_matrix_multiply) and mark all private internal helper functions as 'static'."},{question:"What is a 'Tentative Definition' in C?",answer:"Writing 'int x;' at file scope without an initializer is a tentative definition. If no other definition with an initializer appears in the translation unit, the compiler initializes it to 0."},{question:"How does multi-file architecture enable unit testing in C?",answer:"Modules can be compiled and linked independently against dedicated test harnesses (like Unity or Criterion) without running the main application entry point."}],l=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 4 (MODULE 004_012)\r
MULTI-FILE PROJECT ARCHITECTURE, SYMBOL LINKAGE & ENCAPSULATION\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. MODULAR PROJECT STRUCTURE (.H VS .C)\r
   - Header File (.h): Public Interface\r
     * Struct/Type definitions, typedefs\r
     * Function prototypes (external linkage)\r
     * extern global variable declarations\r
     * Macro definitions & static inline functions\r
   - Implementation File (.c): Private Logic\r
     * Function bodies and algorithms\r
     * Non-static global variable allocations\r
     * static internal helper functions (internal linkage)\r
\r
2. SYMBOL LINKAGE IN C\r
   - External Linkage (Default):\r
     Functions and non-static globals are visible across all translation units.\r
   - Internal Linkage (static):\r
     Functions and file-scope variables marked 'static' are restricted strictly\r
     to their own .c file, preventing name collisions.\r
\r
3. COMMON LINKER ERRORS\r
   - Multiple Definition of Symbol:\r
     Occurs when a non-static variable or function is defined in multiple .c files.\r
   - Undefined Reference to Symbol:\r
     Occurs when a function is declared in a header and called, but its .o file\r
     is omitted during linking.\r
\r
4. SEPARATE COMPILATION COMMANDS\r
   Step 1: Compile individual translation units into object files (.o):\r
     gcc -c student.c -o student.o\r
     gcc -c main.c -o main.o\r
   Step 2: Link object files into final binary:\r
     gcc main.o student.o -o student_app\r
\r
5. THE OPAQUE POINTER PATTERN (ENCAPSULATION)\r
   - Declare struct without members in header: typedef struct Database Database;\r
   - Client code only interacts via API pointers (db_insert, db_query), preventing\r
     client code from tampering with private internal state.\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,b=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_012"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 4"})]}),e.jsx("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:"Multi-File C Project Architecture: Translation Units & Symbol Linkage"}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:["Master industrial C project organization. Understand the boundary between headers (",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:".h"}),") and implementation files (",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:".c"}),"), internal vs external symbol linkage (",e.jsx("code",{className:"font-mono text-emerald-500",children:"static"})," vs ",e.jsx("code",{className:"font-mono text-emerald-500",children:"extern"}),"), and separate compilation workflows."]})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"🏗️ Classroom Story: Splitting the 10,000-Line Monolith"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Barrackpore software project, ",e.jsx("strong",{children:"Tuhina"})," and ",e.jsx("strong",{children:"Abhronila"})," kept all data structures, student algorithms, UI logic, and tax calculators in a single ",e.jsx("code",{children:"main.c"})," file exceeding 6,000 lines. Compiling took 15 seconds on every single typo fix, and merge conflicts were constant."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," guided them through modular refactoring: ",e.jsxs("em",{children:["“Professional systems separate interface from implementation. Put struct schemas and prototypes in ",e.jsx("code",{children:"student.h"}),", algorithms and private helpers in ",e.jsx("code",{children:"student.c"}),", and driver logic in ",e.jsx("code",{children:"main.c"}),". Each file compiles independently into an object file (",e.jsx("code",{children:".o"}),"), slashing rebuild times to milliseconds!”"]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: Multi-File Compilation & Linker Resolution"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Multi-File Compilation Pipeline",children:[e.jsx("rect",{width:"900",height:"280",fill:"none"}),e.jsx("rect",{x:"360",y:"20",width:"180",height:"50",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"450",y:"45",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"student.h (Public API)"}),e.jsx("text",{x:"450",y:"60",fill:"#94a3b8",fontSize:"10",textAnchor:"middle",children:"Prototypes & Struct Schema"}),e.jsx("path",{d:"M 400 70 L 220 105",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-mf)"}),e.jsx("path",{d:"M 500 70 L 680 105",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-mf)"}),e.jsx("rect",{x:"130",y:"105",width:"180",height:"55",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"220",y:"130",fill:"#10b981",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"student.c"}),e.jsx("text",{x:"220",y:"148",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"gcc -c → student.o"}),e.jsx("rect",{x:"590",y:"105",width:"180",height:"55",rx:"8",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"680",y:"130",fill:"#10b981",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"main.c"}),e.jsx("text",{x:"680",y:"148",fill:"#a7f3d0",fontSize:"10",textAnchor:"middle",children:"gcc -c → main.o"}),e.jsx("path",{d:"M 220 160 L 400 205",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-mf)"}),e.jsx("path",{d:"M 680 160 L 500 205",stroke:"#64748b",strokeWidth:"2",markerEnd:"url(#arrow-mf)"}),e.jsx("rect",{x:"350",y:"205",width:"200",height:"60",rx:"8",fill:"#047857",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"450",y:"230",fill:"#ffffff",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"LINKER (ld / gcc -o)"}),e.jsx("text",{x:"450",y:"250",fill:"#ccfbf1",fontSize:"11",textAnchor:"middle",children:"Output: student_app.exe"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow-mf",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#64748b"})})})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: Linkage & Encapsulation Rules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-600 dark:text-emerald-400",children:"1. External vs Internal Linkage"}),e.jsxs("ul",{className:"text-sm space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"External Linkage (Default):"})," Functions and non-static globals are visible across all ",e.jsx("code",{children:".o"})," files."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Internal Linkage (",e.jsx("code",{children:"static"}),"):"]})," Functions and file-scope variables marked ",e.jsx("code",{children:"static"})," are strictly private to their own ",e.jsx("code",{children:".c"})," file."]})]})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-sky-600 dark:text-sky-400",children:"2. Declaration vs Definition"}),e.jsxs("ul",{className:"text-sm space-y-2 text-slate-600 dark:text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Declaration (Header):"})," ",e.jsx("code",{children:"extern int g_count;"})," announces type without allocating storage."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Definition (Source):"})," ",e.jsx("code",{children:"int g_count = 0;"})," allocates physical memory in the data segment."]})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Multi-File Modular Simulation"}),e.jsxs("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:["This single compilable file simulates the exact division of labor between ",e.jsx("code",{children:"student.h"}),", ",e.jsx("code",{children:"student.c"}),", and ",e.jsx("code",{children:"main.c"})," with static private helpers and shared extern globals."]}),e.jsx(t,{fileName:"MultiFileArchitectureDemo.c",code:r,title:"Multi-File Modular Architecture & Linkage Simulation"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  Multi-File C Project Architecture & Linkage
=====================================================

>>> 1. Creating Student Records via Module API:
    [ID: 101] Swadeep Sharma     | GPA: 3.85 | Grade: A
    [ID: 102] Tuhina Roy         | GPA: 3.95 | Grade: A
    [ID: 103] Abhronila Das      | GPA: 3.70 | Grade: B

-----------------------------------------------------
>>> 2. Inspecting Shared Global State via extern linkage:
    Total Students Registered = 3

=== Multi-File Architecture Demonstration Completed ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Multiple Definition Linker Error"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Placing ",e.jsx("code",{children:"int totalCount = 0;"})," in a header file allocates separate storage in every ",e.jsx("code",{children:".c"})," file including it, causing a fatal ",e.jsx("code",{children:"multiple definition of 'totalCount'"})," error during linking. Always use ",e.jsx("code",{children:"extern"})," in headers!"]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Mark Private Helpers as static"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Any helper function not exposed in the public header must be marked ",e.jsx("code",{children:"static"})," in the implementation file. This prevents global symbol collisions and enables aggressive compiler inlining."]})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: The Opaque Pointer Pattern (Information Hiding)"})}),e.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:["How do real libraries (like SQLite or standard ",e.jsx("code",{children:"FILE*"}),") achieve strict object-oriented encapsulation in pure C? They declare ",e.jsx("code",{children:"typedef struct Database Database;"})," in the public header without declaring its members! Callers can only pass ",e.jsx("code",{children:"Database*"})," pointers to official API functions, making it impossible to tamper with private struct fields."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(n,{questions:s})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(i,{note:l,fileName:"Topic4_Multi_File_Architecture_Note.txt"})]}),e.jsx(a,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"Modular architecture turns C from a simple procedural language into an industrial-strength systems engineering platform capable of managing millions of lines of code."})]});export{b as default};
