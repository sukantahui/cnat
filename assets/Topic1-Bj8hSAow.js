import{j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as t}from"./CFileLoader-XRIlgaz2.js";import{F as r}from"./FAQTemplate-DmdkpHR-.js";import{P as a}from"./PlainTextPrint-CS96sBe2.js";import{T as l}from"./TeacherSukantaHui-Bldu0y17.js";import"./CodeBlock-DjHpm_Qe.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-Beb6eGc1.js";import"./EditableCCodeBlock-BWI9JrQC.js";import"./vendor-monaco-CEXMEfXF.js";const n=`/**\r
 * MallocCallocDemo.c\r
 * Demonstrates Dynamic Memory Allocation: malloc() vs calloc()\r
 * Null pointer verification and zero-initialization mechanics.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main(void) {\r
    int n = 5;\r
\r
    printf("========================================================\\n");\r
    printf("     CODER & ACCOTAX - MALLOC() VS CALLOC() MECHANICS   \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // 1. Memory Allocation with malloc() (Leaves Garbage Values)\r
    printf("--- 1. ALLOCATION WITH malloc(%zu bytes) ---\\n", n * sizeof(int));\r
    int *malloc_arr = (int *)malloc(n * sizeof(int));\r
    \r
    // MANDATORY NULL CHECK\r
    if (malloc_arr == NULL) {\r
        fprintf(stderr, "Error: malloc() failed to allocate memory!\\n");\r
        return 1;\r
    }\r
\r
    printf("  malloc_arr initial values (uninitialized garbage):\\n  ");\r
    for (int i = 0; i < n; i++) {\r
        printf("[%d]: %d  ", i, malloc_arr[i]);\r
    }\r
    printf("\\n");\r
\r
    // Populating malloc array\r
    for (int i = 0; i < n; i++) {\r
        malloc_arr[i] = (i + 1) * 10;\r
    }\r
    printf("  malloc_arr after assignment:\\n  ");\r
    for (int i = 0; i < n; i++) {\r
        printf("[%d]: %d  ", i, malloc_arr[i]);\r
    }\r
    printf("\\n\\n");\r
\r
    // 2. Memory Allocation with calloc() (Guaranteed Zero-Initialized)\r
    printf("--- 2. ALLOCATION WITH calloc(%d elements, %zu bytes) ---\\n", n, sizeof(int));\r
    int *calloc_arr = (int *)calloc(n, sizeof(int));\r
\r
    // MANDATORY NULL CHECK\r
    if (calloc_arr == NULL) {\r
        fprintf(stderr, "Error: calloc() failed to allocate memory!\\n");\r
        free(malloc_arr);\r
        return 1;\r
    }\r
\r
    printf("  calloc_arr initial values (guaranteed zeroes):\\n  ");\r
    for (int i = 0; i < n; i++) {\r
        printf("[%d]: %d  ", i, calloc_arr[i]);\r
    }\r
    printf("\\n");\r
\r
    // Populating calloc array\r
    for (int i = 0; i < n; i++) {\r
        calloc_arr[i] = (i + 1) * 100;\r
    }\r
    printf("  calloc_arr after assignment:\\n  ");\r
    for (int i = 0; i < n; i++) {\r
        printf("[%d]: %d  ", i, calloc_arr[i]);\r
    }\r
    printf("\\n\\n");\r
\r
    // 3. Clean-up\r
    free(malloc_arr);\r
    free(calloc_arr);\r
    malloc_arr = NULL;\r
    calloc_arr = NULL;\r
\r
    printf("  All heap memory successfully freed and pointers reset to NULL.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,s=[{question:"What is the function prototype of malloc() in <stdlib.h>?",answer:"The prototype is: 'void *malloc(size_t size);'. It takes a single parameter specifying the total number of bytes to allocate on the heap and returns a 'void*' pointer to the first byte, or NULL on failure."},{question:"What is the function prototype of calloc() in <stdlib.h>?",answer:"The prototype is: 'void *calloc(size_t num, size_t size);'. It takes two parameters: 'num' (number of elements) and 'size' (byte size of each element). It allocates 'num * size' contiguous bytes and initializes all bits to zero."},{question:"What is the key difference between malloc() and calloc() regarding initial memory content?",answer:"malloc() does not initialize allocated memory, leaving it containing whatever residual bit patterns (garbage values) previously existed in RAM. In contrast, calloc() explicitly zeroes out every single allocated byte before returning the pointer."},{question:"Why is checking for NULL immediately after malloc() or calloc() mandatory?",answer:"If system RAM or virtual memory swap is exhausted, the operating system kernel cannot satisfy the request, and the allocator returns NULL. Attempting to dereference a NULL pointer (e.g., '*ptr = 10') causes an immediate operating system segmentation fault (crash)."},{question:"How do you correctly check for allocation failure in C?",answer:`Use: 'int *ptr = malloc(n * sizeof(int)); if (ptr == NULL) { fprintf(stderr, "Allocation failed!\\n"); exit(EXIT_FAILURE); }'`},{question:"Why should we use 'sizeof(type)' instead of hardcoding byte constants in malloc?",answer:"Data type sizes vary across hardware architectures (e.g., 'sizeof(int*)' is 4 bytes on 32-bit systems and 8 bytes on 64-bit systems). Using 'sizeof(*ptr)' or 'sizeof(type)' guarantees 100% portability."},{question:"What is the recommended idiom: 'malloc(n * sizeof(int))' or 'malloc(n * sizeof(*ptr))'?",answer:"Using 'sizeof(*ptr)' (e.g., 'ptr = malloc(n * sizeof(*ptr))') is preferred in modern C best practices because if the type of 'ptr' changes in future refactoring (e.g., from int* to double*), the sizeof expression automatically adjusts without code desynchronization."},{question:"Is calloc() slower than malloc() and why?",answer:"Yes, calloc() can be slightly slower because it must clear every allocated byte to zero (performing an explicit 'memset' or zero-page mapping), whereas malloc() simply marks the block as allocated without touching the underlying memory contents."},{question:"Can calloc() prevent integer overflow when computing total bytes?",answer:"Yes. Many modern C standard libraries check if 'num * size' would overflow 'size_t' inside calloc() and safely return NULL, whereas with 'malloc(num * size)', the multiplication overflow occurs before malloc() is even called."},{question:"What does malloc(0) or calloc(0, size) return in C?",answer:"The C standard allows implementation-defined behavior: it may either return a non-null unique pointer that cannot be dereferenced but can be passed safely to free(), or return NULL."},{question:"What happens if you allocate memory with malloc() and immediately read its values without writing?",answer:"Reading uninitialized memory produces indeterminate garbage values and can cause severe security vulnerabilities (information disclosure of leftover memory from other routines)."},{question:"Is calloc(n, sizeof(float)) guaranteed to set floating-point variables to 0.0?",answer:"On all modern systems conforming to IEEE 754 floating-point standards (virtually all x86, ARM, RISC-V), all-zero bit representations evaluate to exactly 0.0f and 0.0."},{question:"Is calloc() guaranteed to set pointer members to NULL in standard C?",answer:"On virtually all modern platforms, NULL is represented by all-zero bits (0x0). In extreme legacy architectures with non-zero NULL bit patterns, explicit NULL assignment is required."},{question:"Can memory allocated with calloc() be resized with realloc()?",answer:"Yes, memory allocated with either malloc() or calloc() resides on the same heap runtime and can be resized seamlessly using realloc()."},{question:"How do you allocate dynamic memory for a struct in C?",answer:"Using: 'struct Student *s = (struct Student *)malloc(sizeof(struct Student)); if (s != NULL) { s->roll = 101; }'"},{question:"How do you dynamically allocate an array of 50 structs?",answer:"Using: 'struct Student *arr = (struct Student *)malloc(50 * sizeof(struct Student));' or 'calloc(50, sizeof(struct Student));'"},{question:"What is the return type 'void*' in C and why does it not need a cast from malloc?",answer:"In C (unlike C++), 'void*' is a universal pointer that implicitly converts to any data pointer type without an explicit cast operator (e.g. 'int *p = malloc(...)')."},{question:"Why do some developers still write explicit casts like '(int*)malloc(...)'?",answer:"Explicit casts are used for C++ compatibility (where void* cannot be implicitly assigned to typed pointers) or to make code review intent immediately visible."},{question:"What happens if you allocate memory with malloc() in a loop without freeing?",answer:"It creates a severe 'Memory Leak'. The process will continuously consume RAM until the system runs out of memory (OOM killer terminates the program)."},{question:"Can you pass a pointer allocated by malloc() to free() multiple times?",answer:"No. Calling free() more than once on the same pointer causes a critical 'Double Free' corruption error, crashing the runtime allocator."},{question:"What is the difference between static array declaration 'int arr[100];' and 'int *arr = malloc(100 * sizeof(int));'?",answer:"'int arr[100];' has fixed compile-time size, is allocated on the stack/data segment, and is automatically destroyed on scope exit. The malloc version has runtime-determined size, lives on the heap, and persists until freed."},{question:"How does local classroom debugging at Coder & AccoTax demonstrate calloc vs malloc?",answer:"In Sukanta Hui's lab, students print arrays immediately after allocation. The malloc array prints random numbers like '-858993460', whereas the calloc array cleanly prints '0 0 0 0 0'."},{question:"When should you choose calloc() over malloc()?",answer:"Choose calloc() when you need counters, frequency tables, matrix accumulators, or boolean flag tables where elements must start cleanly at zero."},{question:"When should you choose malloc() over calloc()?",answer:"Choose malloc() when you plan to immediately overwrite the entire buffer (e.g. reading from a file with fread, copying with strcpy, or filling in a loop), saving the CPU overhead of zeroing memory."},{question:"What is the maximum amount of memory malloc() can allocate in a single call?",answer:"Theoretical limit is SIZE_MAX (the maximum value of size_t, 18.4 exabytes on 64-bit). The practical limit is bounded by physical RAM, OS page tables, and available virtual memory space."}],o=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_009 · TOPIC 1: DYNAMIC ALLOCATION (MALLOC VS CALLOC)\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. FUNCTION SIGNATURES & MECHANICS\r
--------------------------------------------------------------------------------\r
Include Header: #include <stdlib.h>\r
\r
[A] malloc() - Memory Allocation:\r
    void *malloc(size_t size);\r
    - Allocates 'size' bytes of contiguous raw heap memory.\r
    - Leaves initial memory UNINITIALIZED (contains random garbage values).\r
    - Usage: int *arr = (int *)malloc(n * sizeof(int));\r
\r
[B] calloc() - Contiguous Allocation:\r
    void *calloc(size_t num, size_t size);\r
    - Allocates 'num * size' bytes of contiguous heap memory.\r
    - Explicitly ZEROES OUT all allocated bytes (guaranteed all bits 0).\r
    - Usage: int *arr = (int *)calloc(n, sizeof(int));\r
\r
\r
2. CRITICAL NULL CHECKING PATTERN (DEFENSIVE CODING)\r
--------------------------------------------------------------------------------\r
    int *buffer = (int *)malloc(100 * sizeof(int));\r
    if (buffer == NULL) {\r
        fprintf(stderr, "FATAL: Heap memory allocation failed!\\n");\r
        exit(EXIT_FAILURE); // Or return error code\r
    }\r
    // Safe to use buffer here...\r
    free(buffer);\r
    buffer = NULL;\r
\r
\r
3. MALLOC VS CALLOC COMPARISON MATRIX\r
--------------------------------------------------------------------------------\r
Criterion        | malloc()                        | calloc()\r
-----------------+---------------------------------+----------------------------\r
Parameters       | 1 (total bytes: size)           | 2 (num_elements, elem_size)\r
Initialization   | None (Garbage bits retained)    | Zero-initialized (All 0s)\r
Performance      | Faster (no clearing step)       | Slightly slower (zero-fill)\r
Best Use Case    | Buffers immediately overwritten | Counters, accumulators, flags\r
Overflow Safety  | Caller must ensure no overflow  | Allocator checks num * size\r
\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_009 · Topic 1"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Heap Allocation Functions"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Dynamic Memory Allocation with malloc() and calloc()"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Master uninitialized allocation with ",e.jsx("code",{children:"malloc()"})," versus zero-initialized allocation with ",e.jsx("code",{children:"calloc()"}),". Learn defensive NULL pointer validation and memory allocation ergonomics in standard C."]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: malloc() vs calloc() Mechanics"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["When writing high-performance C software, you frequently encounter arrays or buffers whose sizes cannot be known until runtime (e.g. reading from a network socket or parsing dynamic user records). ",e.jsx("code",{children:"malloc()"})," and ",e.jsx("code",{children:"calloc()"})," allow programs to request contiguous chunks of physical RAM from the heap allocator on demand."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-emerald-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-emerald-300",children:"🏫 Classroom Story at Coder & AccoTax (Shyamnagar):"}),e.jsxs("p",{children:["In our Shyamnagar computer lab, Abhronila initialized a frequency counter array using ",e.jsx("code",{children:"malloc()"})," and noticed strange counts like 3,421,902 for values never entered. Sukanta Hui demonstrated that ",e.jsx("code",{children:"malloc()"})," leaves leftover garbage bits from previous processes, whereas switching to ",e.jsx("code",{children:"calloc()"})," guaranteed clean zeroes for every single integer element."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Memory Initialization States"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsx("rect",{x:"40",y:"50",width:"390",height:"180",rx:"12",fill:"#1e1b4b",stroke:"#f43f5e",strokeWidth:"2"}),e.jsx("text",{x:"60",y:"80",fill:"#fda4af",className:"font-bold text-sm",children:"malloc(4 * sizeof(int)) - UNINITIALIZED"}),e.jsx("text",{x:"60",y:"102",fill:"#94a3b8",className:"text-xs",children:"Raw bytes retain residual garbage data from RAM"}),e.jsxs("g",{transform:"translate(60, 120)",children:[e.jsx("rect",{x:"0",y:"0",width:"75",height:"50",fill:"#881337",stroke:"#f43f5e",rx:"4"}),e.jsx("text",{x:"37",y:"30",textAnchor:"middle",fill:"#ffe4e6",className:"font-mono text-xs",children:"-858993460"}),e.jsx("rect",{x:"85",y:"0",width:"75",height:"50",fill:"#881337",stroke:"#f43f5e",rx:"4"}),e.jsx("text",{x:"122",y:"30",textAnchor:"middle",fill:"#ffe4e6",className:"font-mono text-xs",children:"0x3F8000"}),e.jsx("rect",{x:"170",y:"0",width:"75",height:"50",fill:"#881337",stroke:"#f43f5e",rx:"4"}),e.jsx("text",{x:"207",y:"30",textAnchor:"middle",fill:"#ffe4e6",className:"font-mono text-xs",children:"14209"}),e.jsx("rect",{x:"255",y:"0",width:"75",height:"50",fill:"#881337",stroke:"#f43f5e",rx:"4"}),e.jsx("text",{x:"292",y:"30",textAnchor:"middle",fill:"#ffe4e6",className:"font-mono text-xs",children:"-1"})]}),e.jsx("text",{x:"60",y:"195",fill:"#fb7185",className:"text-xs font-mono",children:"⚠️ Must manually initialize before reading!"}),e.jsx("rect",{x:"460",y:"50",width:"400",height:"180",rx:"12",fill:"#064e3b",stroke:"#10b981",strokeWidth:"2"}),e.jsx("text",{x:"480",y:"80",fill:"#6ee7b7",className:"font-bold text-sm",children:"calloc(4, sizeof(int)) - ZERO-INITIALIZED"}),e.jsx("text",{x:"480",y:"102",fill:"#94a3b8",className:"text-xs",children:"All allocated bytes are explicitly cleared to 0"}),e.jsxs("g",{transform:"translate(480, 120)",children:[e.jsx("rect",{x:"0",y:"0",width:"75",height:"50",fill:"#065f46",stroke:"#10b981",rx:"4"}),e.jsx("text",{x:"37",y:"30",textAnchor:"middle",fill:"#d1fae5",className:"font-mono text-sm font-bold",children:"0"}),e.jsx("rect",{x:"85",y:"0",width:"75",height:"50",fill:"#065f46",stroke:"#10b981",rx:"4"}),e.jsx("text",{x:"122",y:"30",textAnchor:"middle",fill:"#d1fae5",className:"font-mono text-sm font-bold",children:"0"}),e.jsx("rect",{x:"170",y:"0",width:"75",height:"50",fill:"#065f46",stroke:"#10b981",rx:"4"}),e.jsx("text",{x:"207",y:"30",textAnchor:"middle",fill:"#d1fae5",className:"font-mono text-sm font-bold",children:"0"}),e.jsx("rect",{x:"255",y:"0",width:"75",height:"50",fill:"#065f46",stroke:"#10b981",rx:"4"}),e.jsx("text",{x:"292",y:"30",textAnchor:"middle",fill:"#d1fae5",className:"font-mono text-sm font-bold",children:"0"})]}),e.jsx("text",{x:"480",y:"195",fill:"#34d399",className:"text-xs font-mono",children:"✓ Safe for immediate accumulator / flag use!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Function Signatures & Rules"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"malloc() Signature"}),e.jsx("pre",{className:"bg-slate-950 p-2.5 rounded font-mono text-emerald-300",children:"void *malloc(size_t size);"}),e.jsxs("p",{className:"text-slate-300",children:["Allocates ",e.jsx("code",{children:"size"})," contiguous bytes on the heap. Fast execution because it avoids memory clearing overhead."]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"calloc() Signature"}),e.jsx("pre",{className:"bg-slate-950 p-2.5 rounded font-mono text-emerald-300",children:"void *calloc(size_t num, size_t size);"}),e.jsxs("p",{className:"text-slate-300",children:["Allocates ",e.jsx("code",{children:"num * size"})," bytes and zeroes every byte. Protects against uninitialized memory data leaks."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: malloc() vs calloc() Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"MallocCallocDemo.c"}),") demonstrates side-by-side memory allocation, mandatory NULL pointer verification, uninitialized vs zeroed initial values, and proper deallocation."]}),e.jsx(t,{fileModule:n,title:"MallocCallocDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`========================================================
     CODER & ACCOTAX - MALLOC() VS CALLOC() MECHANICS   
========================================================

--- 1. ALLOCATION WITH malloc(20 bytes) ---
  malloc_arr initial values (uninitialized garbage):
  [0]: -858993460  [1]: 32767  [2]: 0  [3]: 0  [4]: 0  
  malloc_arr after assignment:
  [0]: 10  [1]: 20  [2]: 30  [3]: 40  [4]: 50  

--- 2. ALLOCATION WITH calloc(5 elements, 4 bytes) ---
  calloc_arr initial values (guaranteed zeroes):
  [0]: 0  [1]: 0  [2]: 0  [3]: 0  [4]: 0  
  calloc_arr after assignment:
  [0]: 100  [1]: 200  [2]: 300  [3]: 400  [4]: 500  

  All heap memory successfully freed and pointers reset to NULL.
========================================================`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Forgetting NULL Check"}),e.jsxs("p",{className:"text-slate-300",children:["Assuming ",e.jsx("code",{children:"malloc()"})," always succeeds without checking ",e.jsx("code",{children:"if (ptr == NULL)"})," leads to instant segfaults on low-memory servers or embedded targets."]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Use sizeof(*ptr)"}),e.jsxs("p",{className:"text-slate-300",children:["Write ",e.jsx("code",{children:"ptr = malloc(n * sizeof(*ptr));"}),". If the type of ",e.jsx("code",{children:"ptr"})," ever changes during refactoring, the allocation size automatically stays in sync."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["If you are reading 50 Megabytes of binary data from a file directly into a heap buffer using ",e.jsx("code",{children:"fread()"}),", why would using ",e.jsx("code",{children:"calloc()"})," instead of ",e.jsx("code",{children:"malloc()"})," waste CPU cycles?"]})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 003_009 Topic 1 FAQs: malloc vs calloc",questions:s})}),e.jsx("section",{children:e.jsx(a,{content:o,title:"Module 003_009 Topic 1 Note: malloc vs calloc",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_009_topic1_note.txt"})}),e.jsx("section",{children:e.jsx(l,{note:"Never assume malloc returns valid memory! Always include the mandatory null-check pattern: if (ptr == NULL) { handle_error(); }. Choose calloc when zero values are required by algorithm logic! — Sukanta Hui"})})]})}export{b as default};
