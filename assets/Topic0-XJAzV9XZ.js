import{j as e}from"./vendor-react-core-D9iF7FwR.js";import{C as a}from"./CFileLoader-Clw1BKmX.js";import{F as t}from"./FAQTemplate-DmdkpHR-.js";import{P as r}from"./PlainTextPrint-CS96sBe2.js";import{T as s}from"./TeacherSukantaHui-Cvdemxlb.js";import"./CodeBlock-D970yTe-.js";import"./vendor-prism-SANIKoEh.js";import"./vendor-icons-CBbStT7G.js";import"./EditableCCodeBlock-ZnkKtlGd.js";import"./vendor-monaco-CEXMEfXF.js";const n=`/**\r
 * StackVsHeapMemoryDemo.c\r
 * Demonstrates Process Memory Layout: Stack vs Heap Allocation,\r
 * Lifetime differences, and Pointer Address Inspection.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Global variable stored in Data Segment (.data)\r
int global_counter = 100;\r
\r
// Uninitialized global stored in BSS Segment (.bss)\r
int global_uninitialized;\r
\r
void demonstrate_stack_allocation(int recursion_depth) {\r
    // Local automatic variable allocated on the runtime Stack\r
    int stack_var = recursion_depth * 10;\r
    \r
    printf("  [Stack Frame %d] stack_var address: %p, value: %d\\n", \r
           recursion_depth, (void*)&stack_var, stack_var);\r
           \r
    if (recursion_depth < 3) {\r
        demonstrate_stack_allocation(recursion_depth + 1);\r
    }\r
}\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("  CODER & ACCOTAX - STACK VS HEAP MEMORY ARCHITECTURE   \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // 1. Process Segment Addresses\r
    printf("--- 1. PROCESS MEMORY SEGMENTS ---\\n");\r
    printf("  Code/Text Segment (main function) : %p\\n", (void*)main);\r
    printf("  Initialized Data Segment (.data)  : %p\\n", (void*)&global_counter);\r
    printf("  Uninitialized Data Segment (.bss) : %p\\n", (void*)&global_uninitialized);\r
\r
    // 2. Stack Memory Behavior\r
    printf("\\n--- 2. STACK MEMORY ALLOCATION (Downward Growth) ---\\n");\r
    demonstrate_stack_allocation(1);\r
\r
    // 3. Heap Memory Behavior\r
    printf("\\n--- 3. HEAP DYNAMIC ALLOCATION (Upward Growth) ---\\n");\r
    int *heap_ptr1 = (int*)malloc(sizeof(int));\r
    int *heap_ptr2 = (int*)malloc(sizeof(int));\r
    \r
    if (heap_ptr1 == NULL || heap_ptr2 == NULL) {\r
        fprintf(stderr, "Heap memory allocation failed!\\n");\r
        return 1;\r
    }\r
\r
    *heap_ptr1 = 42;\r
    *heap_ptr2 = 84;\r
\r
    printf("  heap_ptr1 allocated address       : %p, value: %d\\n", (void*)heap_ptr1, *heap_ptr1);\r
    printf("  heap_ptr2 allocated address       : %p, value: %d\\n", (void*)heap_ptr2, *heap_ptr2);\r
    printf("  Address difference (bytes)        : %ld\\n", (long)(heap_ptr2 - heap_ptr1) * sizeof(int));\r
\r
    // 4. Memory Cleanup\r
    free(heap_ptr1);\r
    free(heap_ptr2);\r
    heap_ptr1 = NULL;\r
    heap_ptr2 = NULL;\r
    \r
    printf("\\n  Heap buffers released and pointers reset to NULL.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,i=[{question:"What are the primary segments of a C program's virtual memory address space?",answer:"A standard C program in virtual memory consists of: 1) Text/Code segment (read-only executable machine instructions), 2) Initialized Data (.data, global/static variables with non-zero initializers), 3) Uninitialized Data (.bss, zero-initialized globals/statics), 4) Heap segment (dynamically allocated memory that grows upward toward higher addresses), and 5) Stack segment (function call frames, local variables, return addresses that grows downward toward lower addresses)."},{question:"How does stack allocation differ fundamentally from heap allocation in C?",answer:"Stack allocation is automatic and managed directly by the CPU/compiler: variables are allocated when entering a scope/function and freed automatically upon return. Heap allocation is manual and dynamic: memory is requested at runtime using functions like malloc() and persists across functions until explicitly deallocated with free()."},{question:"Why does the stack grow downward while the heap grows upward in x86/x64 architectures?",answer:"Placing the stack at the top of virtual memory and the heap at the bottom allows both dynamic regions to grow toward each other into the large unallocated middle area, maximizing flexible memory usage without needing to partition a fixed boundary in advance."},{question:"What happens when stack memory exhausts its allocated limit?",answer:"When recursive calls or massive local arrays exceed the OS-allocated stack limit (typically 1MB to 8MB), a 'Stack Overflow' occurs, causing an immediate segmentation fault (SIGSEGV) crash."},{question:"What happens when heap memory allocation requests exceed available system RAM/swap?",answer:"When the operating system cannot allocate requested heap memory, malloc() fails and returns a NULL pointer. If the program attempts to dereference NULL without checking, it triggers an instant segmentation fault."},{question:"Why is stack memory allocation significantly faster than heap allocation?",answer:"Stack allocation requires only a single CPU instruction to adjust the Stack Pointer (SP) register (e.g., 'sub rsp, 32'). Heap allocation involves complex runtime allocator bookkeeping, searching free lists/bins, managing fragmentation, and potentially issuing system calls like brk() or mmap()."},{question:"Can local variables inside a function be accessed after the function returns?",answer:"No. The stack frame of the function is destroyed (popped) when the function returns. Accessing addresses of local variables returned from functions results in Undefined Behavior (dangling stack pointer)."},{question:"How does heap memory solve the limitation of local variable lifetime?",answer:"Heap memory blocks allocated with malloc()/calloc() have program-wide lifetime: they remain valid across function boundaries until the program explicitly calls free() on that pointer or the process terminates."},{question:"What is the Data Segment (.data) versus the BSS Segment (.bss)?",answer:"The .data segment stores initialized global and static variables with non-zero initial values (e.g. 'int count = 10;'). The .bss segment (Block Started by Symbol) stores uninitialized global and static variables, which the OS runtime zeroes out automatically before main() executes."},{question:"Where is a pointer variable itself stored when it points to heap memory?",answer:"If the pointer is declared as a local variable inside a function (e.g., 'int *ptr = malloc(...)'), the pointer variable 'ptr' (typically 8 bytes on 64-bit systems) resides on the Stack, while the memory block it points to resides on the Heap."},{question:"What header file must be included in C for dynamic memory allocation functions?",answer:"The standard header `<stdlib.h>` must be included to access malloc(), calloc(), realloc(), and free()."},{question:"What is the return type of malloc() and why is it significant?",answer:"malloc() returns a generic 'void*' pointer (pointer to raw untyped memory). In C, 'void*' implicitly converts to any data pointer type without an explicit cast."},{question:"Is explicit type casting of malloc() mandatory in pure C (e.g., '(int*)malloc(...)')?",answer:"In standard C (C89/C99/C11/C17), casting is not mandatory because 'void*' converts implicitly. However, explicit casting is often used in mixed C/C++ environments or specific coding styles to make the target type explicit."},{question:"What is memory fragmentation on the heap?",answer:"Fragmentation occurs when repeated allocations and deallocations leave small, non-contiguous holes of free memory scattered across the heap. Even if total free memory is large, a large contiguous allocation may fail."},{question:"What is a Stack Frame (Activation Record)?",answer:"A stack frame is a dedicated block of memory pushed onto the runtime call stack whenever a function is called. It stores parameters, local variables, saved register states, and the return instruction address."},{question:"Why should large datasets or arrays not be allocated on the stack?",answer:"The stack is restricted to a small predefined size (e.g., 2MB-8MB). Allocating large arrays (like 'int data[2000000];') directly on the stack easily triggers a stack overflow crash. Large buffers should always be dynamically allocated on the heap."},{question:"What is Variable-Length Array (VLA) in C99 and where does it allocate memory?",answer:"VLAs (e.g., 'int arr[n];' where n is a runtime variable) are allocated on the stack in C99. They can risk stack overflow if 'n' is very large or user-controlled, which is why VLAs were made optional in C11."},{question:"What is the role of the Base Pointer (RBP / EBP) vs Stack Pointer (RSP / ESP)?",answer:"The Base Pointer (RBP) serves as a stable reference anchor to access function parameters and local variables via fixed offsets, while the Stack Pointer (RSP) tracks the top of the currently active stack frame."},{question:"Does the OS automatically reclaim heap memory when a program terminates?",answer:"Yes, modern operating systems reclaim all virtual memory pages associated with a process upon termination. However, relying on this causes severe memory leaks in long-running services, daemons, and embedded firmware."},{question:"What is the difference between static allocation, automatic allocation, and dynamic allocation?",answer:"Static allocation occurs at compile time (.data / .bss, lifetime = entire program). Automatic allocation occurs at runtime on the stack (lifetime = scope of block/function). Dynamic allocation occurs on demand on the heap at runtime (lifetime = controlled manually via malloc/free)."},{question:"What happens if you return a pointer to a heap-allocated buffer from a function?",answer:"It is completely valid and standard C practice. The heap memory persists until explicitly freed by the caller."},{question:"Can heap memory addresses be lower than stack memory addresses?",answer:"Yes, in standard process virtual address spaces on Linux and Windows, the heap starts just above the BSS segment at lower addresses and grows upward, while the stack starts near the top of the user address space and grows downward."},{question:"What is the purpose of the 'sizeof' operator when allocating heap memory?",answer:"The 'sizeof' operator ensures hardware-portable allocation by computing the exact byte size of a type or structure across different compilers and CPU architectures (e.g., 'malloc(10 * sizeof(int))')."},{question:"How does local classroom debugging at Coder & AccoTax illustrate stack vs heap?",answer:"In Sukanta Hui's classroom in Barrackpore, students inspect memory addresses using '%p' in printf, observing high memory addresses (e.g., 0x7ffd...) for stack variables and lower addresses (e.g., 0x55a2... or 0x01a8...) for heap pointers."},{question:"What is the golden rule of dynamic memory management in C?",answer:"Every successful allocation (malloc/calloc/realloc) must have exactly one corresponding deallocation (free), and pointers must be set to NULL after being freed."}],o=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_009 · TOPIC 0: STACK VS HEAP MEMORY ARCHITECTURE\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. PROCESS VIRTUAL MEMORY ADDRESS SPACE LAYOUT\r
--------------------------------------------------------------------------------\r
High Memory (0xFFFFFFFF / 0x7FFFFFFFFFFF)\r
+-------------------------------------------------------------+\r
| Environment Variables & Command-Line Arguments (argc, argv) |\r
+-------------------------------------------------------------+\r
| STACK (Grows DOWNWARDS | Local automatic variables & frames)|\r
|   |                                                         |\r
|   v                                                         |\r
|                                                             |\r
|   ^                                                         |\r
|   |                                                         |\r
| HEAP (Grows UPWARDS | Dynamic runtime memory via malloc)   |\r
+-------------------------------------------------------------+\r
| BSS Segment (.bss | Uninitialized static & global variables)|\r
+-------------------------------------------------------------+\r
| DATA Segment (.data | Initialized static & global variables)|\r
+-------------------------------------------------------------+\r
| TEXT / CODE Segment (Read-Only Machine Instructions)        |\r
+-------------------------------------------------------------+\r
Low Memory (0x00000000 / 0x000000000000)\r
\r
\r
2. STACK VS HEAP COMPARISON CHEAT SHEET\r
--------------------------------------------------------------------------------\r
Feature           | Stack Memory                   | Heap Memory\r
------------------+--------------------------------+----------------------------\r
Allocation Type   | Automatic by compiler/CPU      | Manual by programmer\r
Allocation Call   | Function entry / scope enter   | malloc(), calloc(), realloc()\r
Deallocation Call | Function return / scope exit   | free()\r
Allocation Speed  | Ultra fast (single SP adjust)  | Slower (OS runtime search)\r
Size Limit        | Small (1 MB to 8 MB typical)   | Large (limited only by RAM)\r
Lifetime          | Local function execution only  | Dynamic until free() is run\r
Fragmentation     | Zero fragmentation (contiguous)| Subject to fragmentation\r
Access Mechanism  | Direct CPU register offset     | Pointer dereference (*ptr)\r
\r
\r
3. CORE RULES FOR PROCESS MEMORY HYGIENE\r
--------------------------------------------------------------------------------\r
[1] Never return the address of a local stack variable from a function.\r
[2] Always verify heap allocation success:\r
    int *ptr = (int *)malloc(sizeof(int) * 100);\r
    if (ptr == NULL) {\r
        // Handle allocation failure gracefully\r
    }\r
[3] Heap memory pointer variables stored on the stack hold memory addresses\r
    pointing to the physical RAM allocated in the heap space.\r
[4] Deallocate every heap buffer once done and reset pointer to NULL:\r
    free(ptr);\r
    ptr = NULL;\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function g(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_009 · Topic 0"}),e.jsx("span",{className:"bg-rose-500/10 text-rose-400 border border-rose-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Process Memory Architecture"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Stack vs Heap Memory: Process Address Space & Variable Lifetimes"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Explore how the operating system partitions virtual memory into Text, Data, BSS, Heap, and Stack segments. Understand the fundamental architectural differences between automatic stack memory and dynamic heap management."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Stack vs Heap Memory Architecture"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsx("p",{children:"When an executable C binary is loaded into memory by the operating system kernel, it is assigned a structured virtual address space. Understanding where your variables reside is the single most critical foundation of systems programming and pointer mastery."}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["During a systems programming session at Barrackpore, Swadeep noticed that an array declared inside a function was overwritten as soon as another function executed. Tuhina and Debangshu wondered why a pointer returned from that function contained garbage values. Sukanta Hui drew the process memory map on the whiteboard, explaining how stack frames are dismantled on return, while heap memory remains alive until explicitly reclaimed via ",e.jsx("code",{children:"free()"}),"."]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Process Virtual Memory Architecture"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 320",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"280",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsx("text",{x:"50",y:"50",fill:"#94a3b8",className:"text-xs font-mono font-bold",children:"0x7FFFFFFFFFFF (High Memory - OS Kernel Space)"}),e.jsx("rect",{x:"50",y:"65",width:"370",height:"70",rx:"8",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"95",fill:"#a5b4fc",className:"font-bold text-sm",children:"STACK SEGMENT (Automatic Storage)"}),e.jsx("text",{x:"70",y:"118",fill:"#818cf8",className:"text-xs font-mono",children:"Local Variables, Function Call Frames (Grows ↓)"}),e.jsx("rect",{x:"50",y:"150",width:"370",height:"70",rx:"8",fill:"#3b0764",stroke:"#d946ef",strokeWidth:"2"}),e.jsx("text",{x:"70",y:"180",fill:"#f5d0fe",className:"font-bold text-sm",children:"HEAP SEGMENT (Dynamic Runtime Storage)"}),e.jsx("text",{x:"70",y:"203",fill:"#e879f9",className:"text-xs font-mono",children:"malloc(), calloc(), realloc() (Grows ↑)"}),e.jsx("rect",{x:"460",y:"65",width:"390",height:"45",rx:"8",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"480",y:"93",fill:"#6ee7b7",className:"font-bold text-xs font-mono",children:".BSS SEGMENT (Uninitialized Global/Static = 0)"}),e.jsx("rect",{x:"460",y:"120",width:"390",height:"45",rx:"8",fill:"#14532d",stroke:"#22c55e",strokeWidth:"1.5"}),e.jsx("text",{x:"480",y:"148",fill:"#86efac",className:"font-bold text-xs font-mono",children:".DATA SEGMENT (Initialized Global/Static Variables)"}),e.jsx("rect",{x:"460",y:"175",width:"390",height:"45",rx:"8",fill:"#1e293b",stroke:"#0ea5e9",strokeWidth:"1.5"}),e.jsx("text",{x:"480",y:"203",fill:"#7dd3fc",className:"font-bold text-xs font-mono",children:"TEXT / CODE SEGMENT (Read-Only Machine Instructions)"}),e.jsx("text",{x:"50",y:"275",fill:"#94a3b8",className:"text-xs font-mono font-bold",children:"0x000000000000 (Low Memory - Null Pointer Trap Zone)"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Stack vs Heap Comparison"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-indigo-300 text-sm",children:"Stack Characteristics"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Management:"})," Automatically pushed/popped by CPU Stack Pointer (RSP)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Speed:"})," Blazing fast (single instruction pointer shift)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Size:"})," Strictly bounded (typically 1MB - 8MB max)."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Failure Mode:"})," Stack Overflow (SIGSEGV crash)."]})]})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-purple-300 text-sm",children:"Heap Characteristics"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 text-slate-300",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Management:"})," Explicit programmer control via ",e.jsx("code",{children:"malloc()"})," and ",e.jsx("code",{children:"free()"}),"."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Speed:"})," Slower due to allocator searching and fragmentation checks."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Size:"})," Limited only by total system physical RAM & virtual swap."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Failure Mode:"})," Returns ",e.jsx("code",{children:"NULL"})," pointer when memory is exhausted."]})]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Stack vs Heap Memory Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"StackVsHeapMemoryDemo.c"}),") inspects the runtime memory addresses of global variables, recursive stack frames, and dynamic heap buffers to prove process address layout."]}),e.jsx(a,{fileModule:n,title:"StackVsHeapMemoryDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`========================================================
  CODER & ACCOTAX - STACK VS HEAP MEMORY ARCHITECTURE   
========================================================

--- 1. PROCESS MEMORY SEGMENTS ---
  Code/Text Segment (main function) : 0x55a29b4e11a9
  Initialized Data Segment (.data)  : 0x55a29b4e4010
  Uninitialized Data Segment (.bss) : 0x55a29b4e4018

--- 2. STACK MEMORY ALLOCATION (Downward Growth) ---
  [Stack Frame 1] stack_var address: 0x7ffd524ea644, value: 10
  [Stack Frame 2] stack_var address: 0x7ffd524ea614, value: 20
  [Stack Frame 3] stack_var address: 0x7ffd524ea5e4, value: 30

--- 3. HEAP DYNAMIC ALLOCATION (Upward Growth) ---
  heap_ptr1 allocated address       : 0x55a29c7822a0, value: 42
  heap_ptr2 allocated address       : 0x55a29c7822c0, value: 84
  Address difference (bytes)        : 32

  Heap buffers released and pointers reset to NULL.
========================================================`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Returning Local Stack Pointer"}),e.jsxs("p",{className:"text-slate-300",children:["Returning the address of a local variable from a function (e.g. ",e.jsx("code",{children:"return &local_val;"}),") produces a dangling pointer because the stack frame is destroyed on return."]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Allocate on Heap for Persistence"}),e.jsxs("p",{className:"text-slate-300",children:["When data must persist beyond the function that created it, allocate it dynamically on the heap via ",e.jsx("code",{children:"malloc()"})," and return the heap pointer to the caller."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["Why does an array of size ",e.jsx("code",{children:"int arr[10000000];"})," declared inside ",e.jsx("code",{children:"main()"})," crash the program immediately with a Segmentation Fault, while ",e.jsx("code",{children:"int *arr = malloc(10000000 * sizeof(int));"})," succeeds effortlessly?"]})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 003_009 Topic 0 FAQs: Stack vs Heap",questions:i})}),e.jsx("section",{children:e.jsx(r,{content:o,title:"Module 003_009 Topic 0 Note: Stack vs Heap Architecture",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_009_topic0_note.txt"})}),e.jsx("section",{children:e.jsx(s,{note:"Always visualize your memory segments before writing code! Remember: Stack memory is fast but strictly temporary and limited in size. Heap memory gives you unlimited runtime flexibility, but demands disciplined deallocation hygiene with free()! — Sukanta Hui"})})]})}export{g as default};
