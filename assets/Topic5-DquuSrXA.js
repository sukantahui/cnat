import{j as e}from"./vendor-react-core-C47mfheO.js";import{C as t}from"./CFileLoader-BZuhm7jn.js";import{F as r}from"./FAQTemplate-D7324Ho6.js";import{P as n}from"./PlainTextPrint-COK-Ppq5.js";import{T as a}from"./TeacherSukantaHui-3YGS5w6g.js";import"./CodeBlock-Cj4eeQCj.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-C5r6Bfkl.js";import"./EditableCCodeBlock-DPqylqAZ.js";import"./vendor-monaco-Bq9GhMe9.js";const s=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/* Custom Logging Framework using Standard Predefined Macros */\r
#define LOG_INFO(fmt, ...) \\\r
    printf("[INFO] [%s:%d in %s()] " fmt "\\n", __FILE__, __LINE__, __func__, ##__VA_ARGS__)\r
\r
#define LOG_WARN(fmt, ...) \\\r
    fprintf(stderr, "[WARN] [%s:%d in %s()] " fmt "\\n", __FILE__, __LINE__, __func__, ##__VA_ARGS__)\r
\r
/* Custom Assert Macro */\r
#define DBG_ASSERT(expr) \\\r
    do { \\\r
        if (!(expr)) { \\\r
            fprintf(stderr, "\\n>>> ASSERTION FAILED: '%s'\\n", #expr); \\\r
            fprintf(stderr, "    File    : %s\\n", __FILE__); \\\r
            fprintf(stderr, "    Line    : %d\\n", __LINE__); \\\r
            fprintf(stderr, "    Function: %s()\\n", __func__); \\\r
            fprintf(stderr, "    Build   : %s at %s\\n\\n", __DATE__, __TIME__); \\\r
        } \\\r
    } while (0)\r
\r
void computeTax(double amount, double rate) {\r
    LOG_INFO("Calculating GST Tax for amount = $%.2f at rate = %.2f%%...", amount, rate);\r
    DBG_ASSERT(rate >= 0.0 && rate <= 100.0);\r
    double tax = amount * (rate / 100.0);\r
    LOG_INFO("Total Tax calculated = $%.2f", tax);\r
}\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  Standard Predefined Macros & Compiler Diagnostics\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    /* 1. Inspecting Standard Environment Macros */\r
    printf(">>> 1. Build Metadata & Compiler Environment:\\n");\r
    printf("    Source File (__FILE__)     : %s\\n", __FILE__);\r
    printf("    Line Number (__LINE__)     : %d\\n", __LINE__);\r
    printf("    Function Name (__func__)   : %s()\\n", __func__);\r
    printf("    Build Date (__DATE__)      : %s\\n", __DATE__);\r
    printf("    Build Time (__TIME__)      : %s\\n", __TIME__);\r
\r
#ifdef __STDC_VERSION__\r
    printf("    C Standard (__STDC_VERSION__): %ldL\\n", __STDC_VERSION__);\r
#endif\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> 2. Diagnostic Telemetry Logging:\\n\\n");\r
    LOG_INFO("Starting financial engine for Barrackpore branch...");\r
    computeTax(12500.0, 18.0);\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> 3. Triggering Diagnostic Assertion:\\n");\r
    LOG_WARN("Simulating an invalid tax rate test...");\r
    computeTax(5000.0, -5.0); /* Intentionally trigger assertion */\r
\r
    printf("=== Predefined Macros Demonstration Completed ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,i=[{question:"What does the predefined macro __FILE__ expand to?",answer:'A string literal containing the path or filename of the current source code file being processed (e.g. "main.c").'},{question:"What does the predefined macro __LINE__ expand to?",answer:"A decimal integer constant representing the current 1-indexed line number in the source file."},{question:"What does __DATE__ expand to?",answer:'A string literal containing the date of compilation in the format "Mmm dd yyyy" (e.g. "Sep 13 2026").'},{question:"What does __TIME__ expand to?",answer:'A string literal containing the time of compilation in the format "hh:mm:ss" (e.g. "14:30:00").'},{question:"Is __func__ a preprocessor macro in C99/C11?",answer:'Technically no; C99 defines __func__ as an implicitly declared static const char __func__[] = "function_name"; local to each function body, but it behaves conceptually like a predefined identifier for logging.'},{question:"What does __STDC__ represent?",answer:"An integer constant 1 if the compiler strictly conforms to the ISO C standard."},{question:"What are the common values of __STDC_VERSION__ across C standards?",answer:`- C94: 199409L
- C99: 199901L
- C11: 201112L
- C17: 201710L
- C23: 202311L`},{question:"What does the __STDC_HOSTED__ macro indicate?",answer:"It expands to 1 if the implementation is a 'hosted' environment with full C standard library and OS support, and 0 for 'freestanding' environments (e.g. bare-metal microcontroller firmware or OS kernels)."},{question:"Can __FILE__ and __LINE__ be modified using the #line directive?",answer:`Yes. '#line 100 "custom.c"' overrides subsequent __LINE__ to start at 100 and changes __FILE__ to "custom.c".`},{question:"How do you construct a zero-overhead logging macro using __FILE__ and __LINE__?",answer:'#define LOG(msg) printf("[%s:%d] %s\\n", __FILE__, __LINE__, msg);'},{question:"What predefined macro detects GCC or Clang compilers?",answer:"__GNUC__ (which defines the major version number of the GCC/Clang compiler)."},{question:"What predefined macro detects Microsoft Visual C++ (MSVC)?",answer:"_MSC_VER (which expands to an integer representing the MSVC compiler version, e.g., 1930 for VS 2022)."},{question:"What does __TIMESTAMP__ expand to in GCC/Clang?",answer:'A string literal representing the last modification date and time of the current source file (e.g., "Sun Sep 13 14:00:00 2026").'},{question:"How does the standard assert() macro in <assert.h> utilize __FILE__ and __LINE__?",answer:"When an assertion fails, it prints the failed expression along with __FILE__ and __LINE__ to stderr and calls abort() to dump core."},{question:"Can __LINE__ be stringized using the stringizing operator '#'?",answer:'Yes, but it requires the two-level expansion trick: #define STR(x) #x, #define TOSTR(x) STR(x), then TOSTR(__LINE__) produces "145".'},{question:"What is the purpose of __cplusplus macro?",answer:`It is defined only when a C++ compiler compiles the file, allowing header files to wrap C declarations in 'extern "C" { ... }' for C++ compatibility.`},{question:"Why does reproducible build software strip __DATE__ and __TIME__?",answer:"Because __DATE__ and __TIME__ change on every compile, producing differing binary hashes for identical source code. Reproducible builds define SOURCE_DATE_EPOCH instead."},{question:"Can you pass __func__ to a preprocessor '#' stringizing operator?",answer:'No! Because __func__ is a compiler variable (not a preprocessor macro), stringizing it with #__func__ produces the literal string "__func__" rather than the function name.'},{question:"What does __SIZEOF_POINTER__ expand to in GCC/Clang?",answer:"The byte width of a memory pointer (8 on 64-bit systems, 4 on 32-bit systems)."},{question:"How do you print a compiler warning message containing the current line number?",answer:'#pragma message("Compiling at line " TOSTR(__LINE__))'},{question:"What predefined macro indicates Little Endian byte ordering in GCC?",answer:"__BYTE_ORDER__ == __ORDER_LITTLE_ENDIAN__"},{question:"What is the __BASE_FILE__ macro in GCC?",answer:"The name of the main primary source file (.c) being compiled, even when expanding inside an included header file (.h)."},{question:"What does __INCLUDE_LEVEL__ represent in GCC?",answer:"An integer constant representing the current include nesting depth (0 for the primary .c file, 1 for headers included by it, etc.)."},{question:"Can user code redefine or undefine standard predefined macros like __FILE__ or __LINE__?",answer:"No. The ISO C standard forbids #define or #undef on standard predefined macros, and compilers emit warnings or errors if attempted."},{question:"How do predefined macros assist in post-mortem crash dump analysis?",answer:"By baking __FILE__, __LINE__, and __func__ into error logs and assertions, developers can locate the exact line that crashed in production binaries instantly."}],o=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 5 (MODULE 004_011)\r
STANDARD PREDEFINED MACROS (__FILE__, __LINE__, __FUNC__, __DATE__, __TIME__)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. THE STANDARD PREDEFINED MACROS\r
   - __FILE__           -> Current source file path as string (e.g. "main.c")\r
   - __LINE__           -> Current line number as integer (e.g. 42)\r
   - __DATE__           -> Compilation date string (e.g. "Sep 13 2026")\r
   - __TIME__           -> Compilation time string (e.g. "14:35:00")\r
   - __func__           -> Current function name as identifier (C99)\r
   - __STDC__           -> 1 if compiler conforms to ISO C standard\r
   - __STDC_VERSION__   -> 199901L (C99), 201112L (C11), 201710L (C17)\r
\r
2. INDUSTRIAL LOGGING MACRO PATTERN\r
   #define LOG_INFO(fmt, ...) \\\r
       printf("[INFO] [%s:%d in %s()] " fmt "\\n", \\\r
              __FILE__, __LINE__, __func__, ##__VA_ARGS__)\r
\r
3. CUSTOM RUNTIME ASSERTION PATTERN\r
   #define ASSERT_DEBUG(expr) \\\r
       do { \\\r
           if (!(expr)) { \\\r
               fprintf(stderr, "ASSERTION FAILED: '%s' in %s:%d [%s()]\\n", \\\r
                       #expr, __FILE__, __LINE__, __func__); \\\r
               abort(); \\\r
           } \\\r
       } while (0)\r
\r
4. COMPILER DETECTION MACROS\r
   - GCC / Clang : #ifdef __GNUC__\r
   - MSVC        : #ifdef _MSC_VER\r
   - C++ Wrapper : #ifdef __cplusplus\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,g=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_011"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 5"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:["Standard Predefined Macros & Diagnostic Telemetry (",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"__FILE__"}),", ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"__LINE__"}),", ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"__func__"}),")"]}),e.jsx("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:"Leverage compiler-provided metadata macros. Build zero-cost production logging frameworks, custom assertion systems, and inspect compiler target bitness and standard compliance versions."})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"📍 Classroom Story: Pinpointing the Crash in 50,000 Lines of Code"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["During an accounting tax audit engine project in Shyamnagar, ",e.jsx("strong",{children:"Abhronila"})," received an unhelpful runtime crash message: ",e.jsx("code",{children:"Error: division by zero"})," without any file or line indicator. Searching through 45 source files by hand took hours."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," showed the class the power of predefined compiler macros: ",e.jsxs("em",{children:["“Let the preprocessor tag every single log message with ",e.jsx("code",{children:"__FILE__"}),", ",e.jsx("code",{children:"__LINE__"}),", and ",e.jsx("code",{children:"__func__"})," automatically. When a bug occurs, the console prints the exact filename, function name, and line number in zero seconds.”"]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: Metadata Injection at Preprocessor Stage"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Predefined Compiler Macros Injection Diagram",children:[e.jsx("rect",{width:"900",height:"280",fill:"none"}),e.jsx("rect",{x:"40",y:"40",width:"340",height:"200",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"60",y:"70",fill:"#38bdf8",fontSize:"15",fontWeight:"bold",children:"Source Code Line 42"}),e.jsx("rect",{x:"60",y:"90",width:"300",height:"60",rx:"6",fill:"#334155"}),e.jsx("text",{x:"75",y:"125",fill:"#f8fafc",fontSize:"13","font-family":"monospace",children:'LOG_INFO("Tax computed: $%.2f", total);'}),e.jsx("text",{x:"60",y:"180",fill:"#94a3b8",fontSize:"12",children:"Compiler injects internal constants:"}),e.jsx("text",{x:"60",y:"200",fill:"#38bdf8",fontSize:"12","font-family":"monospace",children:'__FILE__ = "tax_engine.c", __LINE__ = 42'}),e.jsx("path",{d:"M 400 140 L 480 140",stroke:"#10b981",strokeWidth:"3",markerEnd:"url(#arrow-macro)"}),e.jsx("text",{x:"440",y:"130",fill:"#10b981",fontSize:"11",textAnchor:"middle",fontWeight:"bold",children:"Expand"}),e.jsx("rect",{x:"500",y:"40",width:"360",height:"200",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"520",y:"70",fill:"#10b981",fontSize:"15",fontWeight:"bold",children:"Expanded Diagnostic Log"}),e.jsx("rect",{x:"520",y:"90",width:"320",height:"130",rx:"6",fill:"#064e3b",stroke:"#059669"}),e.jsx("text",{x:"535",y:"115",fill:"#a7f3d0",fontSize:"12","font-family":"monospace",children:"[INFO] [tax_engine.c:42 in computeTax()]"}),e.jsx("text",{x:"535",y:"140",fill:"#34d399",fontSize:"12","font-family":"monospace",children:"Tax computed: $2250.00"}),e.jsx("text",{x:"535",y:"175",fill:"#6ee7b7",fontSize:"11",children:"Zero debugger required for instant triage!"}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow-macro",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: The Standard Macro Library"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-600 dark:text-emerald-400",children:"1. Location & Time Metadata"}),e.jsxs("ul",{className:"text-sm space-y-2 text-slate-600 dark:text-slate-300 font-mono text-xs",children:[e.jsxs("li",{children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"__FILE__:"})," String literal of current source path."]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"__LINE__:"})," Integer line number of the macro invocation."]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"__func__:"})," Current function identifier (C99)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"__DATE__:"})," Build date (“Sep 13 2026”)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-emerald-500 font-bold",children:"__TIME__:"})," Build timestamp (“14:35:00”)."]})]})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-sky-600 dark:text-sky-400",children:"2. Standard Compliance & Environment"}),e.jsxs("ul",{className:"text-sm space-y-2 text-slate-600 dark:text-slate-300 font-mono text-xs",children:[e.jsxs("li",{children:[e.jsx("span",{className:"text-sky-500 font-bold",children:"__STDC__:"})," 1 if compliant with standard C."]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-sky-500 font-bold",children:"__STDC_VERSION__:"})," 199901L (C99), 201112L (C11), 201710L (C17)."]}),e.jsxs("li",{children:[e.jsx("span",{className:"text-sky-500 font-bold",children:"__STDC_HOSTED__:"})," 1 for OS hosted; 0 for bare-metal firmware."]})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Predefined Macros & Custom Assertions"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:"This program demonstrates extracting compiler build metadata, logging with location tags, and triggering a diagnostic assertion failure with stack info."}),e.jsx(t,{fileName:"PredefinedMacrosDemo.c",code:s,title:"Predefined Macros & Custom Diagnostic Logging Verification"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  Standard Predefined Macros & Compiler Diagnostics
=====================================================

>>> 1. Build Metadata & Compiler Environment:
    Source File (__FILE__)     : PredefinedMacrosDemo.c
    Line Number (__LINE__)     : 32
    Function Name (__func__)   : main()
    Build Date (__DATE__)      : Sep 13 2026
    Build Time (__TIME__)      : 14:35:00
    C Standard (__STDC_VERSION__): 201710L

-----------------------------------------------------
>>> 2. Diagnostic Telemetry Logging:

[INFO] [PredefinedMacrosDemo.c:41 in main()] Starting financial engine for Barrackpore branch...
[INFO] [PredefinedMacrosDemo.c:22 in computeTax()] Calculating GST Tax for amount = $12500.00 at rate = 18.00%...
[INFO] [PredefinedMacrosDemo.c:25 in computeTax()] Total Tax calculated = $2250.00

-----------------------------------------------------
>>> 3. Triggering Diagnostic Assertion:
[WARN] [PredefinedMacrosDemo.c:46 in main()] Simulating an invalid tax rate test...
[INFO] [PredefinedMacrosDemo.c:22 in computeTax()] Calculating GST Tax for amount = $5000.00 at rate = -5.00%...

>>> ASSERTION FAILED: 'rate >= 0.0 && rate <= 100.0'
    File    : PredefinedMacrosDemo.c
    Line    : 23
    Function: computeTax()
    Build   : Sep 13 2026 at 14:35:00

=== Predefined Macros Demonstration Completed ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Stringizing __func__ with #"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:[e.jsx("code",{children:"#__func__"})," produces the string ",e.jsx("code",{children:'"__func__"'})," because ",e.jsx("code",{children:"__func__"})," is a compiler variable, not a preprocessor macro. Use ",e.jsx("code",{children:"__func__"})," directly with ",e.jsx("code",{children:"%s"})," formatting."]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Variadic Logging with ##__VA_ARGS__"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Use ",e.jsx("code",{children:"##__VA_ARGS__"})," in logging macros. The GCC token paste operator automatically deletes the preceding comma when zero extra arguments are passed, preventing syntax compilation errors."]})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: Reproducible Builds"})}),e.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:["Why do cybersecurity and Linux distribution maintainers (Debian, Alpine) disable ",e.jsx("code",{children:"__DATE__"})," and ",e.jsx("code",{children:"__TIME__"})," in official releases? Because if you compile the same source code tomorrow, the binary hash changes! Reproducible builds require bit-for-bit identical binary hashes for verification."]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(r,{questions:i})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(n,{note:o,fileName:"Topic5_Predefined_Macros_Note.txt"})]}),e.jsx(a,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"Predefined macros bridge the gap between static source code and runtime telemetry, giving your software full situational awareness of its own build environment."})]});export{g as default};
