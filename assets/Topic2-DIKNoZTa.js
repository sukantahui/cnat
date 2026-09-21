import{j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as t}from"./CFileLoader-Clw1BKmX.js";import{F as n}from"./FAQTemplate-DmdkpHR-.js";import{P as a}from"./PlainTextPrint-CS96sBe2.js";import{T as r}from"./TeacherSukantaHui-Cvdemxlb.js";import"./CodeBlock-D970yTe-.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-CBbStT7G.js";import"./EditableCCodeBlock-ZnkKtlGd.js";import"./vendor-monaco-CEXMEfXF.js";const i=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
/* 1. Stringizing Operator (#): Converts macro parameter to string literal */\r
#define PRINT_EXPR(expr) \\\r
    printf("Expression: %-20s = %d\\n", #expr, (expr))\r
\r
/* 2. Double-Stringizing helper to stringize expanded macros */\r
#define STR_HELPER(x) #x\r
#define STR(x) STR_HELPER(x)\r
\r
#define VERSION_MAJOR 4\r
#define VERSION_MINOR 11\r
\r
/* 3. Token Concatenation Operator (##): Pastes two tokens together into a single C identifier */\r
#define DECLARE_STRUCT(type, name) \\\r
    typedef struct { \\\r
        type value; \\\r
        int id; \\\r
    } Node_##name\r
\r
/* Instantiate dynamic types using token concatenation */\r
DECLARE_STRUCT(int, Int);\r
DECLARE_STRUCT(float, Float);\r
DECLARE_STRUCT(char, Char);\r
\r
/* 4. Action Command Generator via ## */\r
#define RUN_CMD(action) handle_cmd_##action()\r
\r
void handle_cmd_start(void) { printf("    [Action] Starting telemetry service...\\n"); }\r
void handle_cmd_stop(void)  { printf("    [Action] Stopping telemetry service...\\n"); }\r
void handle_cmd_reset(void) { printf("    [Action] Resetting core parameters...\\n"); }\r
\r
int main(void) {\r
    printf("=====================================================\\n");\r
    printf("  Preprocessor Metaprogramming: # and ## Operators\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    /* 1. Stringizing in Action */\r
    printf(">>> 1. Stringizing Operator (#):\\n");\r
    int a = 15, b = 25;\r
    PRINT_EXPR(a + b);\r
    PRINT_EXPR(a * b - 50);\r
    PRINT_EXPR((a < b) ? 100 : 200);\r
\r
    /* 2. Stringizing Macro Constants */\r
    printf("\\n>>> 2. Stringizing Expanded Macro Constants:\\n");\r
    printf("    Build Version: %s\\n", STR(VERSION_MAJOR) "." STR(VERSION_MINOR));\r
\r
    /* 3. Token Concatenation in Action */\r
    printf("\\n>>> 3. Token Concatenation (##) Struct Instantiation:\\n");\r
    Node_Int nodeA = {42, 101};\r
    Node_Float nodeB = {3.14159f, 102};\r
    Node_Char nodeC = {'Z', 103};\r
\r
    printf("    Node_Int   -> id: %d, value: %d\\n", nodeA.id, nodeA.value);\r
    printf("    Node_Float -> id: %d, value: %.5f\\n", nodeB.id, nodeB.value);\r
    printf("    Node_Char  -> id: %d, value: '%c'\\n", nodeC.id, nodeC.value);\r
\r
    /* 4. Command Dispatch via Token Pasting */\r
    printf("\\n>>> 4. Dynamic Function Dispatch via Token Pasting:\\n");\r
    RUN_CMD(start);\r
    RUN_CMD(reset);\r
    RUN_CMD(stop);\r
\r
    printf("\\n=== Metaprogramming Demonstration Completed Successfully ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,s=[{question:"What does the stringizing operator '#' do in C preprocessor macros?",answer:`The stringizing operator '#' converts a macro parameter into a quoted string literal (e.g. #x with argument 123 becomes "123") during translation Phase 4.`},{question:"What does the token concatenation operator '##' (token pasting) do?",answer:"The token concatenation operator '##' merges two adjacent lexical tokens into a single new C token (identifier, keyword, or number) during macro expansion."},{question:"Why does #define STR(x) #x fail to stringize the value of a macro constant like #define VER 2?",answer:`Because operands of '#' and '##' are NOT macro-expanded before stringizing. STR(VER) directly produces "VER" rather than "2". To expand the macro first, a two-level macro helper is required.`},{question:"How does the two-level macro expansion pattern solve the stringizing issue for macro constants?",answer:`#define STR_HELPER(x) #x
#define STR(x) STR_HELPER(x)
When STR(VER) is called, VER is expanded to 2 during the argument prescan of STR, and then passed to STR_HELPER(2) which stringizes it to "2".`},{question:"How does the stringizing operator handle internal whitespace and quotes?",answer:"Leading and trailing whitespace in the argument is discarded. Sequences of multiple whitespace characters are compressed to a single space. Double quotes and backslashes within the argument are automatically escaped with a backslash."},{question:"Can you use the '#' stringizing operator on non-macro parameter identifiers?",answer:"No. The '#' operator can ONLY be placed immediately before a formal macro parameter name declared in the macro's argument list."},{question:"What happens if token concatenation (##) produces an invalid C token (e.g. 12 ## abc)?",answer:"If the concatenated result is not a valid C token according to the lexical grammar, the behavior is undefined and modern compilers emit a compilation error."},{question:"How can token concatenation (##) be used to generate type-generic data structures in C?",answer:"By defining templates: #define DECLARE_LIST(type) typedef struct List_##type { type data; struct List_##type *next; } List_##type; This creates List_int, List_float, etc."},{question:"Can ## concatenate multiple tokens in sequence (e.g. a ## b ## c)?",answer:"Yes, multiple ## operators can be chained to join three or more tokens into a single composite identifier."},{question:"What is the purpose of string literal concatenation in translation Phase 6?",answer:'Adjacent string literals like "Hello " "World" are merged into a single literal "Hello World" automatically by the compiler. Stringized macros take advantage of this.'},{question:"How do you build a custom variable inspection macro like DEBUG_VAR(x)?",answer:`#define DEBUG_VAR(x) printf("[DEBUG] %s = %d\\n", #x, (x)); This prints the variable's source code name alongside its runtime integer value.`},{question:"Can token concatenation create numerical literals (e.g. 1e ## 5)?",answer:"Yes, 1e ## 5 concatenates into the floating-point literal 1e5 (100000.0)."},{question:"What happens if one of the operands of ## is empty?",answer:"Concatenating an empty token with an existing token leaves the existing token unchanged (useful in variadic macro edge cases)."},{question:"What is the order of evaluation between #, ##, and normal macro expansion?",answer:`1. Argument prescan expands normal macro arguments (unless preceded by # or ##).
2. '#' stringizes the raw argument.
3. '##' concatenates tokens.
4. The resulting replacement list is rescanned for further macro expansion.`},{question:"How does the Linux kernel use token pasting for system call definitions (SYSCALL_DEFINE)?",answer:"The Linux kernel uses SYSCALL_DEFINE2(name, type1, arg1, ...) with ## to generate standardized function signatures sys_##name, metadata structs, and tracing hooks."},{question:"Can the '#' operator convert a complete code expression (e.g. a + b * c) into a string?",answer:'Yes, PRINT_EXPR(a + b * c) stringizes the whole expression into "a + b * c".'},{question:"What is the difference between char str[] = #param; and char str[] = param;?",answer:"char str[] = #param; assigns the literal name of the parameter as a string. char str[] = param; expects param to be a string variable or array in C."},{question:"Why should you avoid excessive macro token pasting in public API interfaces?",answer:"Heavily concatenated identifiers cannot be found by text search tools (grep/IDE search) in the source codebase, making API navigation harder for team members."},{question:"How do you build an enum-to-string mapping table using X-Macros with stringizing?",answer:"Define an X-list of identifiers: #define COLOR_TABLE(X) X(RED) X(GREEN) X(BLUE). Expand with X(name) #name to generate string representations, and X(name) name to generate the enum values."},{question:"What is an X-Macro in advanced C metaprogramming?",answer:"An X-Macro is a macro pattern where a central list of data items is repeatedly expanded by redefining the 'X' macro before each inclusion, generating enums, strings, and switch cases with zero duplication."},{question:"Can token concatenation create a keyword like 'auto' from 'au' ## 'to'?",answer:"Yes, the preprocessor will concatenate 'au' and 'to' into the token 'auto', which the compiler then recognizes as the C keyword."},{question:"What happens if you place '#' or '##' at the very beginning or end of a macro replacement list?",answer:"Placing '#' without an argument or '##' at the start/end of a replacement list is a syntax error in standard C."},{question:"How does stringizing help in creating custom assertion frameworks?",answer:'#define MY_ASSERT(cond) if (!(cond)) { fprintf(stderr, "Assertion failed: %s at %s:%d\\n", #cond, __FILE__, __LINE__); abort(); }'},{question:"Is stringizing performed at runtime or compile-time?",answer:"Stringizing is performed entirely at compile-time during preprocessor translation Phase 4. It incurs zero runtime CPU overhead."},{question:"What compiler warning flags detect issues with macro token pasting?",answer:"-Wpasting in GCC flags instances where token pasting produces invalid tokens."}],o=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 2 (MODULE 004_011)\r
PREPROCESSOR OPERATORS: STRINGIZING (#) & TOKEN CONCATENATION (##)\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. THE STRINGIZING OPERATOR (#)\r
   - Converts a macro formal parameter into a double-quoted string literal.\r
   - Example:\r
     #define PRINT_INT(var) printf("%s = %d\\n", #var, var)\r
     PRINT_INT(totalScore); -> printf("%s = %d\\n", "totalScore", totalScore);\r
\r
2. THE TWO-LEVEL EXPANSION TRICK FOR MACRO VALUES\r
   - Preprocessor rule: '#' prevents argument prescan/expansion.\r
   - To stringize the VALUE of a defined macro constant (e.g. #define VER 2):\r
     #define STR_HELPER(x) #x\r
     #define STR(x) STR_HELPER(x)\r
     STR(VER) -> "2" (whereas STR_HELPER(VER) -> "VER")\r
\r
3. TOKEN CONCATENATION OPERATOR (##) / TOKEN PASTING\r
   - Glues two tokens together to construct new identifiers at compile time.\r
   - Example (Generic Struct Generator):\r
     #define MAKE_STACK(T) \\\r
         typedef struct Stack_##T { \\\r
             T items[100]; \\\r
             int top; \\\r
         } Stack_##T;\r
     MAKE_STACK(int)    -> typedef struct Stack_int { ... } Stack_int;\r
     MAKE_STACK(double) -> typedef struct Stack_double { ... } Stack_double;\r
\r
4. COMMAND / HANDLER DISPATCH\r
   - #define CALL_HANDLER(event) on_event_##event()\r
     CALL_HANDLER(click); -> on_event_click();\r
\r
5. X-MACROS FOR CODE REUSE\r
   - Eliminates parallel enum/string synchronization drift by maintaining a\r
     single master list expanded in multiple ways.\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,b=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_011"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 2"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:["Preprocessor Metaprogramming: Stringizing (",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"#"}),") & Token Concatenation (",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400",children:"##"}),")"]}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:["Unlock compile-time metaprogramming in C. Learn how the stringizing operator ",e.jsx("code",{children:"#"})," converts expressions into string literals, and how token pasting ",e.jsx("code",{children:"##"})," synthesizes dynamic identifiers and generic data types with zero runtime cost."]})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"⚡ Classroom Story: Synthesizing Dynamic Type Systems"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Barrackpore systems session, ",e.jsx("strong",{children:"Abhronila"})," needed generic stack data structures for ",e.jsx("code",{children:"int"}),", ",e.jsx("code",{children:"float"}),", and ",e.jsx("code",{children:"char"}),". Instead of copy-pasting the struct definition three times, she wanted a single template."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," introduced token concatenation: ",e.jsxs("em",{children:["“By writing ",e.jsx("code",{children:"#define MAKE_STACK(type) typedef struct Stack_##type { type data[100]; } Stack_##type"}),", the preprocessor will glue ",e.jsx("code",{children:"Stack_"})," and ",e.jsx("code",{children:"type"})," together during compilation! You get strongly typed, zero-overhead generic structs before C++ templates even existed.”"]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: Stringizing & Token Pasting Operations"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"Stringizing and Token Pasting Diagram",children:[e.jsx("rect",{width:"900",height:"280",fill:"none"}),e.jsx("rect",{x:"40",y:"40",width:"380",height:"200",rx:"10",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"60",y:"70",fill:"#38bdf8",fontSize:"15",fontWeight:"bold",children:"1. Stringizing Operator (#x)"}),e.jsx("rect",{x:"60",y:"85",width:"340",height:"60",rx:"6",fill:"#334155"}),e.jsx("text",{x:"75",y:"110",fill:"#f8fafc",fontSize:"12","font-family":"monospace",children:'#define PRINT(x) printf("%s = %d", #x, x)'}),e.jsx("text",{x:"75",y:"130",fill:"#94a3b8",fontSize:"12","font-family":"monospace",children:"PRINT(a + b);"}),e.jsx("rect",{x:"60",y:"155",width:"340",height:"65",rx:"6",fill:"#0c4a6e",stroke:"#0284c7"}),e.jsx("text",{x:"75",y:"180",fill:"#7dd3fc",fontSize:"12",fontWeight:"bold",children:"Expands To:"}),e.jsx("text",{x:"75",y:"202",fill:"#e0f2fe",fontSize:"12","font-family":"monospace",children:'printf("%s = %d", "a + b", a + b);'}),e.jsx("rect",{x:"480",y:"40",width:"380",height:"200",rx:"10",fill:"#1e293b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"500",y:"70",fill:"#10b981",fontSize:"15",fontWeight:"bold",children:"2. Token Pasting Operator (a ## b)"}),e.jsx("rect",{x:"500",y:"85",width:"340",height:"60",rx:"6",fill:"#334155"}),e.jsx("text",{x:"515",y:"110",fill:"#f8fafc",fontSize:"12","font-family":"monospace",children:"#define MAKE_ID(p, n) p ## _ ## n"}),e.jsx("text",{x:"515",y:"130",fill:"#94a3b8",fontSize:"12","font-family":"monospace",children:"int MAKE_ID(user, 101) = 500;"}),e.jsx("rect",{x:"500",y:"155",width:"340",height:"65",rx:"6",fill:"#064e3b",stroke:"#059669"}),e.jsx("text",{x:"515",y:"180",fill:"#6ee7b7",fontSize:"12",fontWeight:"bold",children:"Expands To:"}),e.jsx("text",{x:"515",y:"202",fill:"#d1fae5",fontSize:"12","font-family":"monospace",children:"int user_101 = 500;"})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: Metaprogramming Patterns"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-sky-600 dark:text-sky-400",children:"1. The Two-Level Expansion Trick"}),e.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-300 leading-relaxed",children:["When ",e.jsx("code",{children:"#"})," is placed in front of an argument, macro prescan is bypassed. To stringize the ",e.jsx("em",{children:"value"})," of another macro, use a two-level helper:"]}),e.jsx("pre",{className:"bg-slate-900 text-sky-300 p-2.5 rounded-lg text-xs font-mono overflow-x-auto",children:`#define STR_HELPER(x) #x
#define STR(x) STR_HELPER(x)

#define PORT 8080
// STR(PORT) expands to "8080"
// STR_HELPER(PORT) expands to "PORT"`})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-600 dark:text-emerald-400",children:"2. Token Pasting (##) for Code Synthesis"}),e.jsx("p",{className:"text-sm text-slate-600 dark:text-slate-300 leading-relaxed",children:"Token pasting glues tokens into a single new C identifier at translation Phase 4. Widely used in operating system kernels to declare system call tables, command dispatchers, and state machine transitions."})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Stringizing & Token Concatenation in Action"}),e.jsx("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:"This program demonstrates expression stringizing, the two-level macro expansion trick, dynamic struct instantiation, and command dispatching via token pasting."}),e.jsx(t,{fileName:"StringizeTokenPastingDemo.c",code:i,title:"Stringizing (#) & Token Concatenation (##) Metaprogramming"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  Preprocessor Metaprogramming: # and ## Operators
=====================================================

>>> 1. Stringizing Operator (#):
Expression: a + b                = 40
Expression: a * b - 50           = 325
Expression: (a < b) ? 100 : 200  = 100

>>> 2. Stringizing Expanded Macro Constants:
    Build Version: 4.11

>>> 3. Token Concatenation (##) Struct Instantiation:
    Node_Int   -> id: 101, value: 42
    Node_Float -> id: 102, value: 3.14159
    Node_Char  -> id: 103, value: 'Z'

>>> 4. Dynamic Function Dispatch via Token Pasting:
    [Action] Starting telemetry service...
    [Action] Resetting core parameters...
    [Action] Stopping telemetry service...

=== Metaprogramming Demonstration Completed Successfully ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Invalid Token Construction"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Concatenating tokens that do not form a valid C token (such as ",e.jsx("code",{children:"12 ## abc"}),") results in undefined behavior and triggers immediate compiler fatal errors."]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ X-Macro Code Generation"})}),e.jsx("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:"Use the X-Macro pattern to maintain a single source of truth for enumerations, string tables, and dispatch tables to completely prevent synchronization bugs in large systems."})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: String Literal Auto-Concatenation"})}),e.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:["Why does ",e.jsx("code",{children:'printf("File: " __FILE__ "\\n");'})," compile without any ",e.jsx("code",{children:"strcat()"}),"? In Translation Phase 6, the C compiler automatically merges adjacent string literals into a single contiguous string literal in binary memory!"]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(n,{questions:s})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(a,{note:o,fileName:"Topic2_Stringizing_Token_Concatenation_Note.txt"})]}),e.jsx(r,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"Stringizing and token concatenation are the tools that allow C to construct self-documenting diagnostics and generic structures long before high-level language templates were conceived."})]});export{b as default};
