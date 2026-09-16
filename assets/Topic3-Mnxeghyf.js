import{j as e}from"./vendor-react-core-C47mfheO.js";import{C as i}from"./CFileLoader-BZuhm7jn.js";import{F as t}from"./FAQTemplate-D7324Ho6.js";import{P as n}from"./PlainTextPrint-COK-Ppq5.js";import{T as r}from"./TeacherSukantaHui-3YGS5w6g.js";import"./CodeBlock-Cj4eeQCj.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-C5r6Bfkl.js";import"./EditableCCodeBlock-DPqylqAZ.js";import"./vendor-monaco-Bq9GhMe9.js";const s=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/* Define configuration flags */\r
#define DEBUG_MODE 1\r
#define API_VERSION 3\r
#define LOG_LEVEL 2\r
\r
/* Simulated OS selection (ordinarily defined by compiler) */\r
#if !defined(_WIN32) && !defined(__linux__) && !defined(__APPLE__)\r
    #define TARGET_PLATFORM "Generic POSIX Target"\r
#elif defined(_WIN32)\r
    #define TARGET_PLATFORM "Microsoft Windows Platform"\r
#elif defined(__linux__)\r
    #define TARGET_PLATFORM "GNU/Linux Operating System"\r
#elif defined(__APPLE__)\r
    #define TARGET_PLATFORM "Apple macOS / Darwin"\r
#endif\r
\r
/* Conditional feature compilation */\r
#if defined(DEBUG_MODE) && (DEBUG_MODE > 0)\r
    #define DLOG(fmt, ...) printf("[DEBUG] " fmt "\\n", ##__VA_ARGS__)\r
#else\r
    #define DLOG(fmt, ...) do { } while (0)\r
#endif\r
\r
/* Multi-tier version gate */\r
#if API_VERSION == 1\r
    const char *apiVersionStr = "Legacy API v1.0 (Deprecated)";\r
#elif API_VERSION == 2\r
    const char *apiVersionStr = "Stable API v2.0";\r
#elif API_VERSION == 3\r
    const char *apiVersionStr = "Modern Enterprise API v3.0 (Active)";\r
#else\r
    #error "Unsupported API_VERSION specified! Compilation aborted."\r
#endif\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  C Conditional Compilation Directives (#if, #ifdef)\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    printf(">>> 1. Target Host Architecture Detection:\\n");\r
    printf("    Detected Platform: %s\\n", TARGET_PLATFORM);\r
    printf("    API Profile      : %s\\n\\n", apiVersionStr);\r
\r
    printf(">>> 2. Active Debug Logging Gating:\\n");\r
    DLOG("Initializing high-speed telemetry engine...");\r
    DLOG("Allocating network ring buffer of %d KB...", 64);\r
    DLOG("System boot sequence completed successfully.");\r
\r
    printf("\\n>>> 3. Feature Flag Verification:\\n");\r
#if LOG_LEVEL >= 3\r
    printf("    [VERBOSE LOG] Deep kernel tracing enabled.\\n");\r
#elif LOG_LEVEL >= 2\r
    printf("    [STANDARD LOG] Info & Warning tracing enabled.\\n");\r
#else\r
    printf("    [MINIMAL LOG] Error-only tracing enabled.\\n");\r
#endif\r
\r
    printf("\\n=== Conditional Compilation Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,o=[{question:"What is conditional compilation in C?",answer:"Conditional compilation allows instructing the preprocessor to include or exclude specific blocks of C source code based on preprocessor conditions (#ifdef, #ifndef, #if, #elif, #else, #endif) before the compiler compiles the code."},{question:"What is the difference between #ifdef MACRO and #if defined(MACRO)?",answer:"#ifdef MACRO only checks a single identifier. #if defined(MACRO) allows combining multiple conditions using logical operators, e.g. #if defined(DEBUG) && !defined(TESTING)."},{question:"What happens to code blocks excluded by a false #if or #ifdef condition?",answer:"The preprocessor completely strips out the excluded lines during Translation Phase 4. The compiler never sees them, so they produce zero machine code and consume zero binary bytes."},{question:"What does the defined() preprocessor operator return?",answer:"It returns 1 if the specified macro name has been defined (even if defined with no value or 0), and 0 if the macro has not been defined."},{question:"What is the purpose of the #error directive?",answer:"#error <message> halts the compilation process immediately and displays the specified error text in the compiler diagnostic console."},{question:"How do you detect Microsoft Windows vs Linux at compile time using preprocessor macros?",answer:"Windows defines _WIN32 (and _WIN64 for 64-bit). Linux environments define __linux__ or __gnu_linux__. Apple platforms define __APPLE__."},{question:"Can an expression inside #if perform arithmetic operations (e.g. #if VERSION >= 3)?",answer:"Yes, #if supports integer arithmetic (+, -, *, /, %), relational operators (<, <=, >, >=, ==, !=), logical operators (&&, ||, !), and bitwise operators."},{question:"Can floating-point numbers or sizeof() be used in #if expressions?",answer:"No. The preprocessor only understands integer constant expressions. Floating-point numbers, type casts, and sizeof() operators are forbidden in #if expressions because types are not resolved until compilation."},{question:"What happens if an undefined identifier is evaluated inside an #if expression (e.g. #if FOO > 1)?",answer:"In standard C, any identifier in an #if expression that is not a defined macro is automatically replaced with the integer value 0."},{question:"What is the function of the #undef directive?",answer:"#undef MACRO cancels any previous definition of MACRO. Subsequent #ifdef MACRO checks will evaluate to false."},{question:"What is the difference between #if 0 ... #endif and a block comment /* ... */?",answer:"#if 0 ... #endif can safely comment out large sections of code that already contain internal block comments /* ... */, which cannot otherwise be nested in standard C."},{question:"How do you create compile-time feature toggles with GCC?",answer:"Pass -DFEATURE_X=1 on the command line: 'gcc -DFEATURE_X=1 main.c'. The code can then check #if FEATURE_X."},{question:"What is the purpose of #elif?",answer:"#elif is a contraction of 'else if' for preprocessor conditional branches, avoiding deeply nested #else #if #endif structures."},{question:"Can #if conditions evaluate function calls like strlen()?",answer:"No. Preprocessor conditions execute at compile time before runtime memory or functions exist. Only integer constants and macro evaluations are permitted."},{question:"How does NDEBUG interact with the standard <assert.h> library?",answer:"If NDEBUG is defined (e.g., via 'gcc -DNDEBUG' in release builds), the assert() macro expands to ((void)0), removing all runtime assertion checks for maximum performance."},{question:"How do you check for C standard version compatibility (C99, C11, C17, C23)?",answer:"Inspect __STDC_VERSION__: #if __STDC_VERSION__ >= 201112L for C11, #if __STDC_VERSION__ >= 199901L for C99."},{question:"What is the danger of placing #define directives inside an #if block that is never taken?",answer:"The macros inside the untaken branch will never be defined, which is intentional for platform-specific configurations."},{question:"Can you define a macro with an empty value (e.g. #define DEBUG)?",answer:"Yes. In this case, #ifdef DEBUG and defined(DEBUG) are true (1), but the macro expands to empty text in C expressions."},{question:"What happens if an #endif directive is missing at the end of a file?",answer:"The compiler will issue a fatal error such as 'unterminated #if' and halt compilation."},{question:"How does conditional compilation help write code for microcontroller firmware?",answer:"Embedded firmware uses conditional compilation to select register addresses and clock configurations for specific MCU chip targets (e.g. STM32F4 vs ESP32) from a single shared codebase."},{question:"Can conditional compilation directives be generated by macros?",answer:"No. The preprocessor processes directives before expanding macros, so a macro cannot expand into a '#' directive like #ifdef."},{question:"What is the purpose of the #line directive?",answer:`#line <number> ["filename"] changes the compiler's internal line numbering and source file name for subsequent compiler error and warning messages (used by parser generators like Yacc/Bison).`},{question:"How do you detect 64-bit architecture at compile time?",answer:"Check #if defined(__x86_64__) || defined(_M_X64) || defined(__aarch64__)."},{question:"Why should you avoid overly convoluted nested #ifdef blocks ('#ifdef soup')?",answer:"Extensive nested conditional directives create spaghetti preprocessor logic that makes code difficult to read, maintain, and test across different permutations."},{question:"How can you verify which conditional branch was taken during compilation?",answer:`Use #pragma message("Compiling for Linux Target") or run 'gcc -E' to inspect the active preprocessed code.`}],a=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 3 (MODULE 004_011)\r
CONDITIONAL COMPILATION: #IFDEF, #IFNDEF, #IF, #ELIF, #ELSE, #ENDIF\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. CONDITIONAL COMPILATION OVERVIEW\r
   - Directs the preprocessor to include or exclude code blocks at compile-time.\r
   - Excluded code generates ZERO bytes in the final executable binary.\r
   - Used for cross-platform portability, debug instrumentation, and feature toggling.\r
\r
2. DIRECTIVE SYNTAX\r
   #ifdef MACRO          // True if MACRO is defined\r
   #ifndef MACRO         // True if MACRO is NOT defined\r
   #if defined(A) && !defined(B)  // Complex logical expression\r
   #if VERSION >= 2      // Integer arithmetic condition\r
   #elif CONDITION       // Else-if branch\r
   #else                 // Fallback branch\r
   #endif                // Closes conditional block\r
\r
3. PLATFORM IDENTIFICATION MACROS\r
   - Windows: _WIN32, _WIN64\r
   - Linux:   __linux__, __gnu_linux__\r
   - Apple:   __APPLE__, __MACH__\r
   - Architecture: __x86_64__, __aarch64__, __arm__\r
\r
4. COMPILATION HALTING (#ERROR)\r
   #if API_VERSION < 2\r
       #error "This library requires API_VERSION >= 2 to compile!"\r
   #endif\r
\r
5. COMMENTING OUT CODE SAFELY (#IF 0)\r
   - Standard /* ... */ comments cannot be nested in C.\r
   - Use #if 0 ... #endif to comment out code containing internal block comments.\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,b=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_011"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 3"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:["Conditional Compilation (",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"#ifdef"}),", ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"#if"}),", ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"defined()"}),", ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"#error"}),")"]}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:["Master compile-time branching. Discover how to write cross-platform C code targeting Windows, Linux, and macOS simultaneously, toggle debug telemetry with zero runtime overhead, and enforce version constraints using ",e.jsx("code",{children:"#error"}),"."]})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"🌐 Classroom Story: The Cross-Platform Server Deployment"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Shyamnagar lab, ",e.jsx("strong",{children:"Debangshu"})," wrote a networking server that compiled on Windows using ",e.jsx("code",{children:"<windows.h>"}),", but failed when testing on a Linux Ubuntu server with ",e.jsx("code",{children:"fatal error: windows.h not found"}),"."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," showed him how to use conditional compilation: ",e.jsxs("em",{children:["“You don't maintain two separate repositories for different operating systems. You use ",e.jsx("code",{children:"#ifdef _WIN32"})," and ",e.jsx("code",{children:"#elif defined(__linux__)"})," to conditionally compile the appropriate OS socket headers from a single, unified source codebase.”"]})," Debangshu structured the project with conditional directives, and the server built seamlessly across both platforms."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: Compile-Time Code Branching"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Conditional Compilation Decision Tree",children:[e.jsx("rect",{width:"900",height:"280",fill:"none"}),e.jsx("polygon",{points:"450,30 550,80 450,130 350,80",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"450",y:"85",fill:"#38bdf8",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"#ifdef _WIN32 ?"}),e.jsx("path",{d:"M 350 80 L 200 80 L 200 170",stroke:"#10b981",strokeWidth:"2.5",markerEnd:"url(#arrow-cond-green)"}),e.jsx("text",{x:"260",y:"70",fill:"#10b981",fontSize:"12",fontWeight:"bold",children:"TRUE (Win32)"}),e.jsx("rect",{x:"110",y:"170",width:"180",height:"80",rx:"8",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"200",y:"200",fill:"#ffffff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Compile Windows Block"}),e.jsx("text",{x:"200",y:"225",fill:"#a7f3d0",fontSize:"11",textAnchor:"middle",children:"Include <windows.h>"}),e.jsx("path",{d:"M 550 80 L 700 80 L 700 170",stroke:"#f59e0b",strokeWidth:"2.5",markerEnd:"url(#arrow-cond-amber)"}),e.jsx("text",{x:"610",y:"70",fill:"#f59e0b",fontSize:"12",fontWeight:"bold",children:"FALSE (__linux__)"}),e.jsx("rect",{x:"610",y:"170",width:"180",height:"80",rx:"8",fill:"#451a03",stroke:"#f59e0b"}),e.jsx("text",{x:"700",y:"200",fill:"#ffffff",fontSize:"13",fontWeight:"bold",textAnchor:"middle",children:"Compile Linux Block"}),e.jsx("text",{x:"700",y:"225",fill:"#fde68a",fontSize:"11",textAnchor:"middle",children:"Include <unistd.h>"}),e.jsxs("defs",{children:[e.jsx("marker",{id:"arrow-cond-green",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})}),e.jsx("marker",{id:"arrow-cond-amber",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#f59e0b"})})]})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: The Conditional Directives Suite"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-4",children:[e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-600 dark:text-emerald-400 text-base",children:"#ifdef & #ifndef"}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:["Tests whether an identifier has been defined via ",e.jsx("code",{children:"#define"})," or CLI ",e.jsx("code",{children:"-D"})," flag. Used for header guards and simple on/off debug switches."]})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-sky-600 dark:text-sky-400 text-base",children:"#if defined() & #elif"}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:["Allows combining multiple expressions using logical operators: ",e.jsx("code",{children:"#if defined(DEBUG) && !defined(TESTING)"}),". Supports integer relational comparisons."]})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-600 dark:text-rose-400 text-base",children:"#error & #warning"}),e.jsxs("p",{className:"text-xs text-slate-600 dark:text-slate-300 leading-relaxed",children:[e.jsx("code",{children:"#error"})," stops compilation immediately if invalid parameters are passed. ",e.jsx("code",{children:"#warning"})," emits a compiler diagnostic message without stopping."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: OS Detection & Debug Gating in C"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:"This program detects host OS macros, gates debug logging at compile time, and demonstrates multi-branch API version selection."}),e.jsx(i,{fileName:"ConditionalCompilationDemo.c",code:s,title:"Cross-Platform OS Detection & Feature Flag Verification"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  C Conditional Compilation Directives (#if, #ifdef)
=====================================================

>>> 1. Target Host Architecture Detection:
    Detected Platform: Microsoft Windows Platform
    API Profile      : Modern Enterprise API v3.0 (Active)

>>> 2. Active Debug Logging Gating:
[DEBUG] Initializing high-speed telemetry engine...
[DEBUG] Allocating network ring buffer of 64 KB...
[DEBUG] System boot sequence completed successfully.

>>> 3. Feature Flag Verification:
    [STANDARD LOG] Info & Warning tracing enabled.

=== Conditional Compilation Completed Successfully ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Using Types or sizeof in #if"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Writing ",e.jsx("code",{children:"#if sizeof(int) == 4"})," is illegal in C. The preprocessor runs before the compiler parses types. Use pre-defined macros like ",e.jsx("code",{children:"__SIZEOF_INT__"})," instead."]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Safe Commenting with #if 0"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Never use ",e.jsx("code",{children:"/* ... */"})," to comment out large multi-line functions that already contain comments. Always use ",e.jsx("code",{children:"#if 0 ... #endif"})," to disable blocks cleanly."]})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: Zero-Cost Release Binaries"})}),e.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:["Why is ",e.jsx("code",{children:"#if defined(DEBUG)"})," vastly superior to a regular ",e.jsx("code",{children:"if (isDebugEnabled)"})," statement? Because a regular ",e.jsx("code",{children:"if"})," check still leaves string literals, function calls, and branch checks in the compiled binary. With ",e.jsx("code",{children:"#if"}),", debug code is completely erased during preprocessing, leaving 0 bytes in production binaries!"]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(t,{questions:o})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(n,{note:a,fileName:"Topic3_Conditional_Compilation_Note.txt"})]}),e.jsx(r,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"Conditional compilation is the cornerstone of portability. It enables a single C code base to build on embedded microcontrollers, desktops, supercomputers, and mobile devices alike."})]});export{b as default};
