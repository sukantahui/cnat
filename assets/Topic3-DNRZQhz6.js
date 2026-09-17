import{j as e}from"./vendor-react-core-C47mfheO.js";import{C as r}from"./CFileLoader-K-gLT-g8.js";import{F as t}from"./FAQTemplate-D7324Ho6.js";import{P as n}from"./PlainTextPrint-COK-Ppq5.js";import{T as a}from"./TeacherSukantaHui-B_XsiBS9.js";import"./CodeBlock-CA27l_DN.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-Ca1ERgfs.js";import"./EditableCCodeBlock-C06U-BX9.js";import"./vendor-monaco-Bq9GhMe9.js";const s=`#include <stdio.h>\r
#include <stdlib.h>\r
#include <string.h>\r
#include <stdbool.h>\r
\r
/* Structure representing parsed CLI configuration */\r
typedef struct {\r
    char *inputFileName;\r
    char *outputFileName;\r
    int verbosityLevel;\r
    bool isDryRun;\r
    bool showHelp;\r
} CliConfig;\r
\r
/* Helper to display CLI usage manual */\r
void printUsage(const char *progName) {\r
    printf("Usage: %s [OPTIONS] -i <input_file>\\n", progName);\r
    printf("Options:\\n");\r
    printf("  -i, --input <file>     Specify input data file (Required)\\n");\r
    printf("  -o, --output <file>    Specify output file (Default: out.dat)\\n");\r
    printf("  -v, --verbose          Increase verbosity level\\n");\r
    printf("  -d, --dry-run          Simulate execution without modifying files\\n");\r
    printf("  -h, --help             Display this help message and exit\\n");\r
}\r
\r
/* Parse command-line arguments manually without third-party dependencies */\r
bool parseArguments(int argc, char *argv[], CliConfig *config) {\r
    /* Initialize default configuration values */\r
    config->inputFileName = NULL;\r
    config->outputFileName = "out.dat";\r
    config->verbosityLevel = 0;\r
    config->isDryRun = false;\r
    config->showHelp = false;\r
\r
    for (int i = 1; i < argc; i++) {\r
        if (strcmp(argv[i], "-h") == 0 || strcmp(argv[i], "--help") == 0) {\r
            config->showHelp = true;\r
            return true;\r
        } else if (strcmp(argv[i], "-v") == 0 || strcmp(argv[i], "--verbose") == 0) {\r
            config->verbosityLevel++;\r
        } else if (strcmp(argv[i], "-d") == 0 || strcmp(argv[i], "--dry-run") == 0) {\r
            config->isDryRun = true;\r
        } else if (strcmp(argv[i], "-i") == 0 || strcmp(argv[i], "--input") == 0) {\r
            if (i + 1 < argc) {\r
                config->inputFileName = argv[++i];\r
            } else {\r
                fprintf(stderr, "Error: Option '%s' requires a file argument.\\n", argv[i]);\r
                return false;\r
            }\r
        } else if (strcmp(argv[i], "-o") == 0 || strcmp(argv[i], "--output") == 0) {\r
            if (i + 1 < argc) {\r
                config->outputFileName = argv[++i];\r
            } else {\r
                fprintf(stderr, "Error: Option '%s' requires a file argument.\\n", argv[i]);\r
                return false;\r
            }\r
        } else {\r
            fprintf(stderr, "Error: Unrecognized option '%s'.\\n", argv[i]);\r
            return false;\r
        }\r
    }\r
\r
    if (config->inputFileName == NULL) {\r
        fprintf(stderr, "Error: Missing required argument '-i <input_file>'.\\n");\r
        return false;\r
    }\r
\r
    return true;\r
}\r
\r
int main(int argc, char *argv[]) {\r
    printf("=====================================================\\n");\r
    printf("  C Command-Line Argument Processing (argc / argv)\\n");\r
    printf("=====================================================\\n\\n");\r
\r
    printf(">>> 1. Raw CLI Argument Inspection:\\n");\r
    printf("    Total argument count (argc) = %d\\n", argc);\r
    for (int i = 0; i < argc; i++) {\r
        printf("    argv[%d] = \\"%s\\"\\n", i, argv[i]);\r
    }\r
\r
    printf("\\n-----------------------------------------------------\\n");\r
    printf(">>> 2. Parsing Simulated CLI Options:\\n");\r
\r
    /* Simulated arguments for demonstration purposes */\r
    char *simulatedArgv[] = {\r
        argv[0],\r
        "-i", "students.csv",\r
        "-o", "report.dat",\r
        "-v", "-v",\r
        "--dry-run"\r
    };\r
    int simulatedArgc = sizeof(simulatedArgv) / sizeof(simulatedArgv[0]);\r
\r
    printf("    Parsing simulated arguments: ");\r
    for (int i = 0; i < simulatedArgc; i++) printf("%s ", simulatedArgv[i]);\r
    printf("\\n\\n");\r
\r
    CliConfig config;\r
    if (parseArguments(simulatedArgc, simulatedArgv, &config)) {\r
        printf(">>> Parsed Configuration Result:\\n");\r
        printf("    Input File  : %s\\n", config.inputFileName);\r
        printf("    Output File : %s\\n", config.outputFileName);\r
        printf("    Verbosity   : %d (Levels of debug)\\n", config.verbosityLevel);\r
        printf("    Dry Run Mode: %s\\n", config.isDryRun ? "TRUE" : "FALSE");\r
    } else {\r
        printUsage(simulatedArgv[0]);\r
    }\r
\r
    printf("\\n=== Command-Line Argument Processing Completed ===\\n");\r
    return EXIT_SUCCESS;\r
}\r
`,i=[{question:"What do 'argc' and 'argv' represent in the main function signature?",answer:"'argc' (Argument Count) is an integer representing the total number of command-line arguments passed to the program (including the program name). 'argv' (Argument Vector) is an array of null-terminated character strings (char *argv[]) containing the individual arguments."},{question:"What is guaranteed to be stored in argv[0]?",answer:"argv[0] holds the program invocation name or file path used to execute the binary."},{question:"What is guaranteed to be stored in argv[argc] in standard C?",answer:"The ANSI C standard guarantees that argv[argc] is always a NULL pointer."},{question:'How do you convert numerical string arguments (e.g. "42" or "3.14") into numbers?',answer:"Use strtol() for integers (e.g. long val = strtol(argv[i], &endptr, 10)) or strtod() for floating-point numbers. Avoid atoi() because it cannot detect parse errors or integer overflow."},{question:"What is the third optional parameter 'char *envp[]' in main?",answer:`A null-terminated array of strings containing the operating system's environment variables (e.g. "PATH=...", "USER=..."). In standard C, getenv() from <stdlib.h> is preferred for cross-platform access.`},{question:"How does POSIX getopt() parse command-line options?",answer:`getopt(argc, argv, "i:o:vh") iterates through short flags ('-i', '-v'). Options followed by a colon (e.g. 'i:') require a following argument stored in the global 'optarg' pointer.`},{question:"What is the difference between short options (e.g. '-v') and GNU long options (e.g. '--verbose')?",answer:"Short options are single-character flags prefixed with a single hyphen. GNU long options are full-word flags prefixed with two hyphens, parsed in POSIX via getopt_long()."},{question:"How do you handle argument flags that appear multiple times (e.g. -v -v -v)?",answer:"Increment a verbosity counter (e.g., verbosityLevel++) on each occurrence in the parsing loop."},{question:"What happens if a required option (like -i) is missing from the command line?",answer:"The parser should output a clear error message to stderr, display the usage help manual (printUsage()), and terminate with exit(EXIT_FAILURE) (or return 1)."},{question:"Can command-line arguments contain spaces?",answer:'Yes, if the user encloses the argument in double or single quotes in the shell (e.g. ./app -i "My Documents/data.csv"). The shell strips the quotes and passes the string as a single argv element.'},{question:"What is the return value of main() and what do exit codes 0 vs non-zero indicate?",answer:"Returning 0 (or EXIT_SUCCESS) indicates successful execution to the operating system/shell. Returning non-zero (or EXIT_FAILURE) signals that an error occurred."},{question:"How can you pass wildcard patterns (e.g. *.txt) to a C program?",answer:'On POSIX/Linux, the shell expands wildcards before invoking the program, passing all matching filenames as separate argv elements. On Windows cmd.exe, the program receives "*.txt" and must expand it manually.'},{question:"What is optind in POSIX getopt?",answer:"optind is the global index of the next element in argv to be processed. Once all flags are parsed, non-option positional arguments start at argv[optind]."},{question:"Why should you never modify string literals pointed to by argv without copying?",answer:"While argv strings are stored in modifiable process memory, modifying them in place alters the strings seen by system process listing tools (like 'ps' on Linux)."},{question:"How do you implement a '--' delimiter in command-line tools?",answer:"A standalone '--' argument signals the end of options; all subsequent arguments are treated as raw positional arguments, even if they start with a hyphen."},{question:"How do you safely validate integer arguments against overflow?",answer:"Use strtol(), check errno != ERANGE, verify endptr != argv[i], and ensure *endptr == '\\0'."},{question:"Can argc ever be zero?",answer:"In rare freestanding environments or malicious execve() calls, argc can theoretically be 0 with argv[0] == NULL. Robust code checks 'if (argc > 0)' before accessing argv[0]."},{question:"How do you parse flag combinations like '-xvf' in C?",answer:"Iterate through each character in the string argv[i] starting at index 1: for (int c=1; argv[i][c]; c++) switch (argv[i][c]) { ... }"},{question:"What is the maximum length of command-line arguments supported by modern operating systems?",answer:"POSIX systems define ARG_MAX (often 2 MB to 20 MB). Windows CreateProcess() supports up to 32,767 characters."},{question:"How do you print the full list of arguments for debugging?",answer:'for (int i = 0; i < argc; i++) printf("argv[%d] = %s\\n", i, argv[i]);'},{question:"What is the difference between char **argv and char *argv[] in main signature?",answer:"They are completely identical in C; array parameter declarations in function signatures automatically decay into pointers."},{question:"How do shell scripts inspect the exit status of a C program?",answer:"In Bash, by inspecting '$?'; in Windows Batch/PowerShell, by inspecting '%ERRORLEVEL%' or '$LASTEXITCODE'."},{question:"How does getenv() work in <stdlib.h>?",answer:`char *val = getenv("HOME"); returns a pointer to the environment variable's value string, or NULL if the variable is not set.`},{question:"Why is a help flag (-h / --help) mandatory in professional CLI utilities?",answer:"It provides self-documenting interface guidance, allowing users to discover command flags without external documentation."},{question:"How do CLI utilities support reading from stdin when no input file is supplied?",answer:'If inputFileName is NULL or "-", the program opens stdin directly as its input stream.'}],o=`======================================================================\r
C LANGUAGE LESSON NOTE: TOPIC 3 (MODULE 004_012)\r
COMMAND-LINE ARGUMENT PROCESSING: INT ARGC & CHAR *ARGV[]\r
INSTRUCTOR: SUKANTA HUI (CODER & ACCOTAX, BARRACKPORE & SHYAMNAGAR)\r
======================================================================\r
\r
1. THE MAIN FUNCTION SIGNATURE\r
   int main(int argc, char *argv[])\r
   - argc: Argument count (total strings passed, >= 1)\r
   - argv: Argument vector (array of strings, char *argv[])\r
   - argv[0]: Invocation path / program executable name\r
   - argv[argc]: Always guaranteed to be NULL by ISO C standard\r
\r
2. NUMBER CONVERSION IN CLI UTILITIES\r
   - NEVER use atoi() (cannot distinguish 0 from failure, ignores overflow).\r
   - ALWAYS use strtol() or strtod():\r
     char *endptr;\r
     long port = strtol(argv[i], &endptr, 10);\r
     if (*endptr != '\\0' || errno == ERANGE) {\r
         fprintf(stderr, "Invalid port number!\\n");\r
     }\r
\r
3. CLI OPTION PARSING PATTERN\r
   - Loop from i = 1 to argc - 1:\r
     * Check flags: strcmp(argv[i], "-v") == 0\r
     * Check options with values: strcmp(argv[i], "-i") == 0\r
       -> value is at argv[++i] (ensure i + 1 < argc first!)\r
     * Support -h / --help manual display\r
\r
4. EXIT CODE CONVENTIONS\r
   - return 0 / exit(EXIT_SUCCESS) -> Normal completion\r
   - return 1 / exit(EXIT_FAILURE) -> Error / invalid arguments\r
\r
======================================================================\r
Copyright (c) Sukanta Hui - C Programming Master Series\r
======================================================================\r
`,v=()=>e.jsxs("div",{className:"space-y-10 text-slate-800 dark:text-slate-100 max-w-5xl mx-auto px-4 py-8",children:[e.jsxs("section",{className:"space-y-3 border-b border-slate-200 dark:border-slate-700 pb-6",children:[e.jsxs("div",{className:"flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400 tracking-wide uppercase",children:[e.jsx("span",{children:"Module 004_012"}),e.jsx("span",{children:"•"}),e.jsx("span",{children:"Topic 3"})]}),e.jsxs("h1",{className:"text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white",children:["Command-Line Argument Processing: ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400 font-mono",children:"argc"})," & ",e.jsx("code",{className:"text-emerald-600 dark:text-emerald-400 font-mono",children:"argv"})]}),e.jsxs("p",{className:"text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed",children:["Master terminal application interfaces. Understand how operating system shells pass arguments to ",e.jsx("code",{children:"main(int argc, char *argv[])"}),", parse short/long flags, convert strings with ",e.jsx("code",{children:"strtol"}),", and build production-grade CLI tools."]})]}),e.jsxs("section",{className:"bg-gradient-to-br from-slate-50 to-emerald-50 dark:from-slate-900/60 dark:to-emerald-950/20 p-6 sm:p-8 rounded-2xl border border-emerald-100 dark:border-emerald-900/40 shadow-sm space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💻 Classroom Story: Transforming Hardcoded Scripts into CLI Tools"})}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:["In our Shyamnagar lab, ",e.jsx("strong",{children:"Swadeep"})," wrote a tax calculation program with hardcoded filenames: ",e.jsx("code",{children:'fopen("students_2025.csv", "r")'}),". Every time a new semester started, he had to modify the C source code, recompile, and redeploy the executable."]}),e.jsxs("p",{className:"text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base",children:[e.jsx("strong",{children:"Sukanta Sir"})," showed him how real UNIX utilities work: ",e.jsxs("em",{children:["“Software should never require recompilation to change input files. By parsing command-line parameters via ",e.jsx("code",{children:"argc"})," and ",e.jsx("code",{children:"argv"}),", your program can be invoked as ",e.jsx("code",{children:"./tax_engine -i batch1.csv -o report.dat -v"}),", allowing seamless automation in cron jobs and shell scripts!”"]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Architectural Blueprint: argv Memory Vector Layout"}),e.jsx("div",{className:"w-full overflow-x-auto bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-inner",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[700px] h-auto font-sans","aria-label":"argc and argv Memory Layout",children:[e.jsx("rect",{width:"900",height:"280",fill:"none"}),e.jsx("rect",{x:"50",y:"40",width:"220",height:"200",rx:"8",fill:"#1e293b",stroke:"#38bdf8",strokeWidth:"2"}),e.jsx("text",{x:"160",y:"70",fill:"#38bdf8",fontSize:"14",fontWeight:"bold",textAnchor:"middle",children:"char *argv[] (argc = 4)"}),e.jsx("rect",{x:"70",y:"85",width:"180",height:"30",rx:"4",fill:"#334155"}),e.jsx("text",{x:"80",y:"105",fill:"#f8fafc",fontSize:"11","font-family":"monospace",children:"argv[0] →"}),e.jsx("text",{x:"180",y:"105",fill:"#38bdf8",fontSize:"10",children:"0x7FFE10"}),e.jsx("rect",{x:"70",y:"120",width:"180",height:"30",rx:"4",fill:"#334155"}),e.jsx("text",{x:"80",y:"140",fill:"#f8fafc",fontSize:"11","font-family":"monospace",children:"argv[1] →"}),e.jsx("text",{x:"180",y:"140",fill:"#38bdf8",fontSize:"10",children:"0x7FFE20"}),e.jsx("rect",{x:"70",y:"155",width:"180",height:"30",rx:"4",fill:"#334155"}),e.jsx("text",{x:"80",y:"175",fill:"#f8fafc",fontSize:"11","font-family":"monospace",children:"argv[2] →"}),e.jsx("text",{x:"180",y:"175",fill:"#38bdf8",fontSize:"10",children:"0x7FFE30"}),e.jsx("rect",{x:"70",y:"190",width:"180",height:"30",rx:"4",fill:"#0f172a",stroke:"#475569"}),e.jsx("text",{x:"80",y:"210",fill:"#94a3b8",fontSize:"11","font-family":"monospace",children:"argv[3] → NULL"}),e.jsx("path",{d:"M 250 100 L 350 100",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrow-arg)"}),e.jsx("rect",{x:"350",y:"85",width:"220",height:"30",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"360",y:"105",fill:"#ffffff",fontSize:"12","font-family":"monospace",children:'"./app.exe"'}),e.jsx("path",{d:"M 250 135 L 350 135",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrow-arg)"}),e.jsx("rect",{x:"350",y:"120",width:"220",height:"30",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"360",y:"140",fill:"#ffffff",fontSize:"12","font-family":"monospace",children:'"-i"'}),e.jsx("path",{d:"M 250 170 L 350 170",stroke:"#10b981",strokeWidth:"2",markerEnd:"url(#arrow-arg)"}),e.jsx("rect",{x:"350",y:"155",width:"220",height:"30",rx:"4",fill:"#064e3b",stroke:"#10b981"}),e.jsx("text",{x:"360",y:"175",fill:"#ffffff",fontSize:"12","font-family":"monospace",children:'"students.csv"'}),e.jsx("defs",{children:e.jsx("marker",{id:"arrow-arg",viewBox:"0 0 10 10",refX:"6",refY:"5",markerWidth:"6",markerHeight:"6",orient:"auto-start-reverse",children:e.jsx("path",{d:"M 0 0 L 10 5 L 0 10 z",fill:"#10b981"})})})]})})]}),e.jsxs("section",{className:"space-y-6",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Deep Technical Breakdown: The CLI Parsing Toolkit"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:[e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-emerald-600 dark:text-emerald-400",children:"1. Fundamental Rules of argc / argv"}),e.jsxs("ul",{className:"text-sm space-y-1.5 text-slate-600 dark:text-slate-300 list-disc list-inside",children:[e.jsxs("li",{children:[e.jsx("code",{children:"argc"})," is always $\\ge 1$ (argv[0] holds executable name)."]}),e.jsxs("li",{children:[e.jsx("code",{children:"argv[argc]"})," is guaranteed to be ",e.jsx("code",{children:"NULL"})," by ANSI C."]}),e.jsxs("li",{children:["Arguments are passed as null-terminated character strings (",e.jsx("code",{children:"char*"}),")."]}),e.jsxs("li",{children:["Return ",e.jsx("code",{children:"0"})," for success, non-zero for failure to shell."]})]})]}),e.jsxs("div",{className:"bg-slate-50 dark:bg-slate-800/60 p-5 rounded-xl border border-slate-200 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-sky-600 dark:text-sky-400",children:"2. Safe Number Conversion (strtol vs atoi)"}),e.jsxs("p",{className:"text-sm text-slate-600 dark:text-slate-300 leading-relaxed",children:["Never use ",e.jsx("code",{children:"atoi()"})," in production CLI tools because it cannot detect parse failures or overflow. Always use ",e.jsx("code",{children:"strtol()"}),":"]}),e.jsx("pre",{className:"bg-slate-900 text-sky-300 p-2.5 rounded-lg text-xs font-mono overflow-x-auto",children:`char *endptr;
long port = strtol(argv[i], &endptr, 10);
if (*endptr != '\\0' || errno == ERANGE) {
    fprintf(stderr, "Error: Invalid numerical port!\\n");
}`})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Working Code: Robust Command-Line Argument Parser"}),e.jsxs("p",{className:"text-slate-600 dark:text-slate-300 text-sm sm:text-base",children:["This program demonstrates manual CLI flag parsing (",e.jsx("code",{children:"-i"}),", ",e.jsx("code",{children:"-o"}),", ",e.jsx("code",{children:"-v"}),", ",e.jsx("code",{children:"--dry-run"}),", ",e.jsx("code",{children:"--help"}),") with full usage documentation and error handling."]}),e.jsx(r,{fileName:"CommandLineArgsDemo.c",code:s,title:"Command-Line Argument Parser & Option Processor"}),e.jsxs("div",{className:"p-4 bg-slate-900 text-slate-100 rounded-xl font-mono text-xs sm:text-sm border border-slate-700 space-y-2",children:[e.jsx("div",{className:"text-slate-400 font-semibold border-b border-slate-700 pb-1",children:"Expected Console Output:"}),e.jsx("pre",{className:"text-emerald-400 overflow-x-auto whitespace-pre-wrap",children:`=====================================================
  C Command-Line Argument Processing (argc / argv)
=====================================================

>>> 1. Raw CLI Argument Inspection:
    Total argument count (argc) = 1
    argv[0] = "./app.exe"

-----------------------------------------------------
>>> 2. Parsing Simulated CLI Options:
    Parsing simulated arguments: ./app.exe -i students.csv -o report.dat -v -v --dry-run 

>>> Parsed Configuration Result:
    Input File  : students.csv
    Output File : report.dat
    Verbosity   : 2 (Levels of debug)
    Dry Run Mode: TRUE

=== Command-Line Argument Processing Completed ===`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Common Pitfalls & Professional Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[e.jsxs("div",{className:"p-5 bg-rose-50 dark:bg-rose-950/30 border border-rose-200 dark:border-rose-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-700 dark:text-rose-400 flex items-center gap-2",children:e.jsx("span",{children:"⚠️ Unchecked argv[++i] Boundary Overflow"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["If a flag expects a value (e.g. ",e.jsx("code",{children:"-i"}),"), writing ",e.jsx("code",{children:"config->file = argv[++i];"})," without first verifying ",e.jsx("code",{children:"if (i + 1 < argc)"})," will read out of bounds or dereference ",e.jsx("code",{children:"argv[argc]"})," (NULL), causing a segmentation fault."]})]}),e.jsxs("div",{className:"p-5 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-900/50 rounded-xl space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-700 dark:text-emerald-400 flex items-center gap-2",children:e.jsx("span",{children:"✅ Always Provide a Help Manual (-h)"})}),e.jsxs("p",{className:"text-xs sm:text-sm text-slate-700 dark:text-slate-300",children:["Implement a clean ",e.jsx("code",{children:"printUsage()"})," helper triggered on ",e.jsx("code",{children:"-h"}),", ",e.jsx("code",{children:"--help"}),", or whenever invalid arguments are detected, printing standard synopsis and option descriptions."]})]})]})]}),e.jsxs("section",{className:"p-6 bg-slate-100 dark:bg-slate-800 rounded-2xl border border-slate-300 dark:border-slate-700 space-y-3",children:[e.jsx("h3",{className:"text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2",children:e.jsx("span",{children:"💡 Think About This: The Third Parameter in main()"})}),e.jsxs("p",{className:"text-sm text-slate-700 dark:text-slate-300 leading-relaxed",children:["Did you know ",e.jsx("code",{children:"main()"})," can accept a third argument: ",e.jsx("code",{children:"int main(int argc, char *argv[], char *envp[])"}),"? ",e.jsx("code",{children:"envp"})," is a null-terminated array of strings containing all operating system environment variables (like ",e.jsx("code",{children:"PATH"}),", ",e.jsx("code",{children:"USER"}),", ",e.jsx("code",{children:"HOME"}),")!"]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Frequently Asked Questions (25 In-Depth Answers)"}),e.jsx(t,{questions:i})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-2xl font-bold text-slate-900 dark:text-white",children:"Printable Quick-Reference Notes"}),e.jsx(n,{note:o,fileName:"Topic3_Command_Line_Arguments_Note.txt"})]}),e.jsx(a,{name:"Sukanta Hui",role:"Senior C & Systems Architect",experience:"26+ Years Experience",location:"Barrackpore & Shyamnagar, WB",quote:"Command-line argument processing is the gateway through which your C software interfaces with operating systems, automation scripts, and server deployment pipelines."})]});export{v as default};
