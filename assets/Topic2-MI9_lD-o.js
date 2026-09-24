import{j as e}from"./vendor-react-core-BBXbtqt1.js";import{C as r}from"./CFileLoader-BGWjaMfE.js";import{F as t}from"./FAQTemplate-BamsZuNW.js";import{P as a}from"./PlainTextPrint-CGJ_aUDk.js";import{T as n}from"./TeacherSukantaHui-CzsyGExA.js";import"./CodeBlock-B1KKDgQQ.js";import"./vendor-prism-B7oW9GGR.js";import"./vendor-icons-CKN6-nXc.js";import"./EditableCCodeBlock-BgJpd7yq.js";import"./vendor-monaco-sD6ueU9e.js";const s=`/**\r
 * ReallocResizeDemo.c\r
 * Demonstrates Dynamic Buffer Resizing with realloc()\r
 * In-place vs Relocated expansion and safe temporary pointer pattern.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
\r
int main(void) {\r
    int initial_size = 3;\r
    int expanded_size = 6;\r
\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - RESIZING HEAP BUFFERS WITH REALLOC \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // 1. Initial Allocation\r
    printf("--- 1. INITIAL HEAP ALLOCATION (%d elements) ---\\n", initial_size);\r
    int *arr = (int *)malloc(initial_size * sizeof(int));\r
    if (arr == NULL) {\r
        fprintf(stderr, "Initial allocation failed!\\n");\r
        return 1;\r
    }\r
\r
    // Populate initial elements\r
    for (int i = 0; i < initial_size; i++) {\r
        arr[i] = (i + 1) * 11;\r
    }\r
\r
    printf("  Initial buffer address: %p\\n  Values: ", (void*)arr);\r
    for (int i = 0; i < initial_size; i++) {\r
        printf("[%d]: %d  ", i, arr[i]);\r
    }\r
    printf("\\n\\n");\r
\r
    // 2. Safe Resizing with Temporary Pointer\r
    printf("--- 2. EXPANDING BUFFER TO %d ELEMENTS WITH realloc() ---\\n", expanded_size);\r
    \r
    // CRITICAL: Use temporary pointer to avoid memory leak if realloc fails\r
    int *temp = (int *)realloc(arr, expanded_size * sizeof(int));\r
    \r
    if (temp == NULL) {\r
        fprintf(stderr, "Error: realloc() failed! Original buffer is still intact.\\n");\r
        free(arr); // Clean up original buffer before exiting\r
        return 1;\r
    }\r
\r
    // Reassign pointer now that realloc succeeded\r
    arr = temp;\r
\r
    printf("  Resized buffer address: %p (%s)\\n", (void*)arr,\r
           (arr == temp) ? "Memory expanded in-place or safely relocated" : "Relocated");\r
\r
    // Initialize the newly added elements\r
    for (int i = initial_size; i < expanded_size; i++) {\r
        arr[i] = (i + 1) * 11;\r
    }\r
\r
    printf("  All values after expansion:\\n  ");\r
    for (int i = 0; i < expanded_size; i++) {\r
        printf("[%d]: %d  ", i, arr[i]);\r
    }\r
    printf("\\n\\n");\r
\r
    // 3. Shrinking Buffer\r
    int shrunk_size = 2;\r
    printf("--- 3. SHRINKING BUFFER TO %d ELEMENTS ---\\n", shrunk_size);\r
    temp = (int *)realloc(arr, shrunk_size * sizeof(int));\r
    if (temp != NULL) {\r
        arr = temp;\r
        printf("  Shrunk buffer address : %p\\n  Values: ", (void*)arr);\r
        for (int i = 0; i < shrunk_size; i++) {\r
            printf("[%d]: %d  ", i, arr[i]);\r
        }\r
        printf("\\n\\n");\r
    }\r
\r
    // 4. Final Cleanup\r
    free(arr);\r
    arr = NULL;\r
    temp = NULL;\r
\r
    printf("  Heap memory successfully freed.\\n");\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,i=[{question:"What is the function prototype of realloc() in <stdlib.h>?",answer:"The prototype is: 'void *realloc(void *ptr, size_t new_size);'. It attempts to resize the existing heap memory block pointed to by 'ptr' to 'new_size' bytes, returning a pointer to the new memory block or NULL on failure."},{question:"Why is writing 'ptr = realloc(ptr, new_size);' considered a dangerous bug?",answer:"If realloc() fails to allocate memory, it returns NULL without freeing the original block pointed to by 'ptr'. Overwriting 'ptr' directly with NULL loses the only reference to the original block, causing an irrecoverable memory leak."},{question:"What is the safe temporary pointer pattern for calling realloc()?",answer:"Always assign the result to a temporary pointer first: 'void *temp = realloc(ptr, new_size); if (temp == NULL) { /* handle failure, original ptr is still valid */ } else { ptr = temp; }'"},{question:"What happens to the existing data in a buffer when it is resized with realloc()?",answer:"The existing data is preserved up to the minimum of the old and new sizes. If expanded, the newly added bytes contain uninitialized garbage values. If shrunk, data beyond the new size is discarded."},{question:"What are the two possible behaviors of realloc() during buffer expansion?",answer:"1) In-place expansion: If adjacent heap memory is free, the allocator simply extends the existing block without changing the address. 2) Relocation: If adjacent space is blocked, the allocator allocates a new block elsewhere, copies the old data over, frees the old block automatically, and returns the new address."},{question:"What happens if you pass NULL as the first argument to realloc (i.e., 'realloc(NULL, size)')?",answer:"'realloc(NULL, size)' behaves exactly identically to 'malloc(size)', allocating a fresh block on the heap."},{question:"What happens if you pass 0 as the second argument to realloc (i.e., 'realloc(ptr, 0)')?",answer:"In standard C99/C11, passing 0 size frees the memory block and returns either NULL or an implementation-defined non-dereferenceable pointer. (In C23, passing size 0 is undefined behavior to remove ambiguity; 'free()' should always be used instead)."},{question:"Does realloc() automatically free the old memory block when relocating?",answer:"Yes! When realloc() moves the memory block to a new address, it automatically deallocates the old memory block. You must NEVER manually call free() on the old address."},{question:"Can realloc() be used on memory allocated by calloc() or malloc() interchangeably?",answer:"Yes, realloc() works identically on memory allocated by malloc(), calloc(), or a previous realloc() call."},{question:"Can realloc() be called on a pointer to a static or stack variable?",answer:"No. Calling realloc() (or free()) on an address that was not dynamically allocated by the heap allocator causes undefined behavior and immediate process crash."},{question:"Are the newly expanded bytes in realloc() zero-initialized?",answer:"No. The newly added bytes contain uninitialized garbage values. The programmer must manually initialize them or use memset."},{question:"What happens if other pointers are referencing the old memory block before realloc() relocates it?",answer:"If realloc() relocates the block, all other pointers referencing the old address become invalid 'dangling pointers'. Dereferencing them is a Use-After-Free bug."},{question:"How does a dynamic array (vector) grow efficiently using realloc()?",answer:"Dynamic arrays typically double their capacity (growth factor of 1.5x or 2x) instead of growing by 1 element each time, achieving O(1) amortized insertion time complexity."},{question:"What is geometric memory resizing in systems programming?",answer:"Geometric resizing multiplies the buffer capacity by a factor (e.g., 'capacity = capacity * 2') whenever full, minimizing expensive reallocation and memory copy overhead."},{question:"How does local classroom debugging at Coder & AccoTax illustrate in-place vs relocated realloc?",answer:"In Sukanta Hui's class, students print the pointer address before and after realloc(). For small resizes, the address often stays identical (in-place), while for large resizes, a new address is printed (relocation)."},{question:"Can realloc() shrink a buffer in-place?",answer:"Yes, shrinking a buffer typically occurs in-place by updating the block metadata and returning the excess tail memory back to the heap free list."},{question:"What is the time complexity of realloc() in the worst case?",answer:"The worst-case time complexity is O(N) when the allocator must allocate a new buffer and copy N bytes of old data to the new location."},{question:"What is the best-case time complexity of realloc()?",answer:"The best case is O(1) when the memory block can be expanded or shrunk in-place without moving data."},{question:"Should you check if realloc() returned the same pointer address?",answer:"No, your program logic should simply use the returned pointer without caring whether it was expanded in-place or relocated."},{question:"Can realloc() fail when shrinking memory?",answer:"Standard compliant C libraries almost never fail when shrinking, but checking for NULL with a temporary pointer remains a universal defensive best practice."},{question:"What happens if you pass an uninitialized pointer to realloc()?",answer:"Passing an uninitialized (wild) pointer to realloc() results in immediate heap corruption or a segmentation fault."},{question:"What happens if you call realloc() on a pointer that has already been freed?",answer:"Calling realloc() on an already-freed pointer is a critical Use-After-Free / Double-Free vulnerability that corrupts the heap."},{question:"How do you free a dynamically resized buffer at the end of the program?",answer:"Simply call 'free(ptr); ptr = NULL;' on the final pointer returned by the last successful realloc() call."},{question:"Why is realloc() essential for building interactive command-line tools in C?",answer:"It allows dynamic buffers to grow smoothly as users type arbitrarily long inputs or stream unpredictable file sizes without setting hardcoded artificial limits."},{question:"What is the golden rule when resizing memory with realloc()?",answer:"Always use a temporary pointer: 'temp = realloc(ptr, size); if (temp) ptr = temp;' — never overwrite your only pointer with the return value directly!"}],l=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_009 · TOPIC 2: RESIZING BUFFERS WITH REALLOC()\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. FUNCTION SIGNATURE & BEHAVIOR\r
--------------------------------------------------------------------------------\r
Include Header: #include <stdlib.h>\r
\r
void *realloc(void *ptr, size_t new_size);\r
- Resizes previously allocated heap block 'ptr' to 'new_size' bytes.\r
- Preserves existing data up to min(old_size, new_size).\r
- If expanded, newly added bytes contain uninitialized garbage values.\r
\r
\r
2. THE SAFE TEMPORARY POINTER IDIOM (AVOID MEMORY LEAKS)\r
--------------------------------------------------------------------------------\r
    // INCORRECT (Anti-pattern - Leaks memory on failure):\r
    ptr = (int *)realloc(ptr, new_size * sizeof(int)); // Bug if realloc returns NULL!\r
\r
    // CORRECT (Defensive programming standard):\r
    int *temp = (int *)realloc(ptr, new_size * sizeof(int));\r
    if (temp == NULL) {\r
        // Handle allocation failure gracefully\r
        // Note: 'ptr' is still valid and uncorrupted!\r
        free(ptr);\r
        exit(EXIT_FAILURE);\r
    }\r
    ptr = temp; // Reassign only on success\r
\r
\r
3. REALLOC EXPANSION MECHANICS\r
--------------------------------------------------------------------------------\r
[A] In-place Expansion:\r
    If adjacent heap memory following the block is free, the allocator simply\r
    extends the boundary in-place. The pointer address does not change.\r
\r
[B] Relocation:\r
    If adjacent space is already occupied by other allocations:\r
    1. Allocator finds a fresh contiguous block of 'new_size' elsewhere on heap.\r
    2. Copies old data to the new location.\r
    3. Automatically frees the old block.\r
    4. Returns the new pointer address.\r
\r
\r
4. SPECIAL ARGUMENT EDGE CASES\r
--------------------------------------------------------------------------------\r
- realloc(NULL, size) : Equivalent to malloc(size)\r
- realloc(ptr, 0)     : Frees memory in C99/C11 (use explicit free() instead)\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function b(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_009 · Topic 2"}),e.jsx("span",{className:"bg-amber-500/10 text-amber-400 border border-amber-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Dynamic Buffer Resizing"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Resizing Allocated Memory with realloc() Safely"}),e.jsxs("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:["Learn how to grow and shrink heap memory blocks on the fly using ",e.jsx("code",{children:"realloc()"}),". Master the defensive temporary pointer idiom to prevent silent memory leaks when allocation expansion fails."]})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: realloc() Mechanics & Expansion Strategies"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["When building resizable data structures like vectors, dynamically growing string buffers, or streaming network parsers, you cannot predict the exact capacity needed upfront. ",e.jsx("code",{children:"realloc()"})," allows you to resize an existing heap allocation while preserving all previously stored data."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-amber-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-amber-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["While writing a dynamic student list manager, Tuhina wrote ",e.jsx("code",{children:"ptr = realloc(ptr, new_size);"}),". Sukanta Hui pointed out a critical hidden bug: if ",e.jsx("code",{children:"realloc()"})," ever returns NULL due to low memory, ",e.jsx("code",{children:"ptr"})," is overwritten with NULL, permanently losing the original memory address and causing a severe memory leak. Sukanta introduced the golden rule: ",e.jsx("em",{children:"always assign to a temporary pointer first!"})]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: In-Place Expansion vs Relocation"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsx("rect",{x:"40",y:"50",width:"390",height:"180",rx:"12",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"60",y:"80",fill:"#6ee7b7",className:"font-bold text-sm",children:"CASE 1: IN-PLACE EXPANSION"}),e.jsx("text",{x:"60",y:"102",fill:"#94a3b8",className:"text-xs",children:"Adjacent space is free: pointer address stays identical"}),e.jsxs("g",{transform:"translate(60, 125)",children:[e.jsx("rect",{x:"0",y:"0",width:"160",height:"40",fill:"#065f46",stroke:"#10b981",rx:"6"}),e.jsx("text",{x:"80",y:"25",textAnchor:"middle",fill:"#d1fae5",className:"font-mono text-xs font-bold",children:"Existing Data (3 ints)"}),e.jsx("rect",{x:"165",y:"0",width:"140",height:"40",fill:"#047857",stroke:"#34d399",strokeDasharray:"4 2",rx:"6"}),e.jsx("text",{x:"235",y:"25",textAnchor:"middle",fill:"#a7f3d0",className:"font-mono text-xs font-bold",children:"+3 New Elements"})]}),e.jsx("text",{x:"60",y:"195",fill:"#34d399",className:"text-xs font-mono",children:"Address 0x1000 remains 0x1000 (O(1) operation)"}),e.jsx("rect",{x:"460",y:"50",width:"400",height:"180",rx:"12",fill:"#431407",stroke:"#f97316",strokeWidth:"1.5"}),e.jsx("text",{x:"480",y:"80",fill:"#fdba74",className:"font-bold text-sm",children:"CASE 2: RELOCATION & COPY"}),e.jsx("text",{x:"480",y:"102",fill:"#94a3b8",className:"text-xs",children:"Adjacent space is blocked: allocates new block, copies & frees old"}),e.jsxs("g",{transform:"translate(480, 125)",children:[e.jsx("rect",{x:"0",y:"0",width:"130",height:"35",fill:"#7c2d12",stroke:"#ea580c",strokeDasharray:"2 2",rx:"6"}),e.jsx("text",{x:"65",y:"22",textAnchor:"middle",fill:"#fed7aa",className:"font-mono text-[11px]",children:"Old @ 0x1000 (Freed)"}),e.jsx("text",{x:"145",y:"22",fill:"#fb923c",className:"font-bold text-xs",children:"→"}),e.jsx("rect",{x:"165",y:"0",width:"180",height:"35",fill:"#c2410c",stroke:"#f97316",rx:"6"}),e.jsx("text",{x:"255",y:"22",textAnchor:"middle",fill:"#fff7ed",className:"font-mono text-xs font-bold",children:"New @ 0x2500 (6 ints)"})]}),e.jsx("text",{x:"480",y:"195",fill:"#fb923c",className:"text-xs font-mono",children:"Old block freed automatically. Returns new address!"})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Safe Realloc Idiom"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-rose-300 text-sm",children:"Dangerous Anti-Pattern (Memory Leak)"}),e.jsx("pre",{className:"bg-slate-950 p-2.5 rounded font-mono text-rose-400",children:`// DANGEROUS:
ptr = realloc(ptr, new_size);
// If realloc fails, ptr becomes NULL
// and the original memory is lost forever!`})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"Industrial Best Practice (Defensive Idiom)"}),e.jsx("pre",{className:"bg-slate-950 p-2.5 rounded font-mono text-emerald-300",children:`// SAFE:
void *temp = realloc(ptr, new_size);
if (temp == NULL) {
    free(ptr); // Clean up original
    exit(1);
}
ptr = temp; // Reassign only on success`})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: realloc() Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"ReallocResizeDemo.c"}),") allocates an initial 3-element buffer, safely doubles its capacity to 6 elements with a temporary pointer, and then shrinks the buffer."]}),e.jsx(r,{fileModule:s,title:"ReallocResizeDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`========================================================
   CODER & ACCOTAX - RESIZING HEAP BUFFERS WITH REALLOC 
========================================================

--- 1. INITIAL HEAP ALLOCATION (3 elements) ---
  Initial buffer address: 0x55d7b56822a0
  Values: [0]: 11  [1]: 22  [2]: 33  

--- 2. EXPANDING BUFFER TO 6 ELEMENTS WITH realloc() ---
  Resized buffer address: 0x55d7b56822a0 (Memory expanded in-place or safely relocated)
  All values after expansion:
  [0]: 11  [1]: 22  [2]: 33  [3]: 44  [4]: 55  [5]: 66  

--- 3. SHRINKING BUFFER TO 2 ELEMENTS ---
  Shrunk buffer address : 0x55d7b56822a0
  Values: [0]: 11  [1]: 22  

  Heap memory successfully freed.
========================================================`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Freeing Old Address After Relocation"}),e.jsxs("p",{className:"text-slate-300",children:["When ",e.jsx("code",{children:"realloc()"})," moves a block to a new address, it automatically deallocates the old memory block. Calling ",e.jsx("code",{children:"free(old_ptr)"})," manually results in a fatal double-free crash!"]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Exponential Growth (Doubling)"}),e.jsxs("p",{className:"text-slate-300",children:["When implementing dynamic vectors, double the capacity (e.g. ",e.jsx("code",{children:"cap *= 2"}),") instead of growing by 1 element each time. This achieves O(1) amortized insertion speed."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["If you have pointers pointing to the middle of an array (e.g. ",e.jsx("code",{children:"int *mid = &arr[2];"}),"), what happens to ",e.jsx("code",{children:"mid"})," if ",e.jsx("code",{children:"realloc()"})," relocates the array to a different heap address?"]})]}),e.jsx("section",{children:e.jsx(t,{title:"Module 003_009 Topic 2 FAQs: realloc",questions:i})}),e.jsx("section",{children:e.jsx(a,{content:l,title:"Module 003_009 Topic 2 Note: realloc",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_009_topic2_note.txt"})}),e.jsx("section",{children:e.jsx(n,{note:"Never overwrite your primary pointer directly with the result of realloc()! Always assign to a temporary pointer first (void *temp = realloc(ptr, size);). This protects your application from silent memory leaks during out-of-memory events! — Sukanta Hui"})})]})}export{b as default};
