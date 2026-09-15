import{j as e}from"./vendor-react-core-C47mfheO.js";import{C as t}from"./CFileLoader-DB2_ZayD.js";import{F as r}from"./FAQTemplate-D7324Ho6.js";import{P as n}from"./PlainTextPrint-COK-Ppq5.js";import{T as a}from"./TeacherSukantaHui-BfpnVddt.js";import"./CodeBlock-DVd3Rf-c.js";import"./vendor-prism-BKuZ5wk-.js";import"./vendor-icons-CjLaApDI.js";import"./EditableCCodeBlock-CbSIxbt_.js";import"./vendor-monaco-Bq9GhMe9.js";const i=`/**\r
 * DynamicVectorProjectDemo.c\r
 * Capstone Project: Industrial Resizable Dynamic Vector in Pure C\r
 * Supports initialization, push_back with geometric doubling,\r
 * get/set with bounds checking, pop_back, and clean deallocation.\r
 *\r
 * Educator: Sukanta Hui (Coder & AccoTax)\r
 */\r
\r
#include <stdio.h>\r
#include <stdlib.h>\r
#include <stdbool.h>\r
\r
// Vector Struct Definition\r
typedef struct {\r
    int *data;\r
    size_t size;\r
    size_t capacity;\r
} IntVector;\r
\r
// 1. Initialize Vector with initial capacity\r
IntVector* vector_create(size_t initial_capacity) {\r
    if (initial_capacity == 0) initial_capacity = 4;\r
    \r
    IntVector *vec = (IntVector *)malloc(sizeof(IntVector));\r
    if (vec == NULL) return NULL;\r
\r
    vec->data = (int *)malloc(initial_capacity * sizeof(int));\r
    if (vec->data == NULL) {\r
        free(vec);\r
        return NULL;\r
    }\r
\r
    vec->size = 0;\r
    vec->capacity = initial_capacity;\r
    return vec;\r
}\r
\r
// 2. Append element with automatic geometric expansion\r
bool vector_push_back(IntVector *vec, int value) {\r
    if (vec == NULL) return false;\r
\r
    // Check if expansion is needed\r
    if (vec->size >= vec->capacity) {\r
        size_t new_cap = vec->capacity * 2;\r
        int *new_data = (int *)realloc(vec->data, new_cap * sizeof(int));\r
        if (new_data == NULL) {\r
            fprintf(stderr, "Vector expansion failed!\\n");\r
            return false;\r
        }\r
        vec->data = new_data;\r
        vec->capacity = new_cap;\r
        printf("  [Vector Event] Capacity auto-expanded to %zu elements\\n", vec->capacity);\r
    }\r
\r
    vec->data[vec->size++] = value;\r
    return true;\r
}\r
\r
// 3. Get element with bounds checking\r
bool vector_get(const IntVector *vec, size_t index, int *out_value) {\r
    if (vec == NULL || index >= vec->size || out_value == NULL) return false;\r
    *out_value = vec->data[index];\r
    return true;\r
}\r
\r
// 4. Pop last element\r
bool vector_pop_back(IntVector *vec, int *out_value) {\r
    if (vec == NULL || vec->size == 0) return false;\r
    if (out_value != NULL) *out_value = vec->data[vec->size - 1];\r
    vec->size--;\r
    return true;\r
}\r
\r
// 5. Destroy Vector and free heap memory\r
void vector_destroy(IntVector **vec_ptr) {\r
    if (vec_ptr != NULL && *vec_ptr != NULL) {\r
        IntVector *vec = *vec_ptr;\r
        if (vec->data != NULL) {\r
            free(vec->data);\r
            vec->data = NULL;\r
        }\r
        free(vec);\r
        *vec_ptr = NULL;\r
    }\r
}\r
\r
int main(void) {\r
    printf("========================================================\\n");\r
    printf("   CODER & ACCOTAX - DYNAMIC VECTOR CAPSTONE PROJECT    \\n");\r
    printf("========================================================\\n\\n");\r
\r
    // Create vector with initial capacity of 2\r
    IntVector *my_vec = vector_create(2);\r
    if (my_vec == NULL) {\r
        fprintf(stderr, "Failed to create vector!\\n");\r
        return 1;\r
    }\r
\r
    printf("--- 1. PUSHING ELEMENTS (Triggering Geometric Growth) ---\\n");\r
    for (int i = 1; i <= 6; i++) {\r
        int val = i * 15;\r
        vector_push_back(my_vec, val);\r
        printf("  Pushed: %3d | Size: %zu | Capacity: %zu\\n", val, my_vec->size, my_vec->capacity);\r
    }\r
\r
    printf("\\n--- 2. VECTOR CONTENTS ---\\n  Elements: ");\r
    for (size_t i = 0; i < my_vec->size; i++) {\r
        int v;\r
        vector_get(my_vec, i, &v);\r
        printf("[%zu]: %d  ", i, v);\r
    }\r
    printf("\\n\\n");\r
\r
    printf("--- 3. POPPING LAST ELEMENT ---\\n");\r
    int popped;\r
    if (vector_pop_back(my_vec, &popped)) {\r
        printf("  Popped element: %d | New Size: %zu\\n", popped, my_vec->size);\r
    }\r
\r
    printf("\\n--- 4. CLEAN DESTRUCTION ---\\n");\r
    vector_destroy(&my_vec);\r
    printf("  Vector destroyed. my_vec pointer neutralized to: %p\\n", (void*)my_vec);\r
    printf("========================================================\\n");\r
\r
    return 0;\r
}\r
`,s=[{question:"What is a Dynamic Vector in systems programming?",answer:"A dynamic vector is a resizable, contiguous array data structure that encapsulates a raw pointer, the current number of active elements ('size'), and the maximum allocated capacity ('capacity'), automatically expanding when full."},{question:"Why is tracking both 'size' and 'capacity' separately necessary in a vector?",answer:"'size' represents the actual count of valid user elements currently stored, while 'capacity' represents the total allocated slots on the heap. Separating them avoids calling expensive realloc() on every single push operation."},{question:"What is the amortized time complexity of vector_push_back with geometric doubling?",answer:"With geometric doubling (doubling capacity when full), appending N elements requires a total of O(N) operations, yielding an Amortized Constant Time complexity of O(1) per push_back."},{question:"What would happen to time complexity if capacity only grew by +1 element on each push?",answer:"Growing capacity by only +1 requires calling realloc() and potentially copying the entire array on EVERY single push, resulting in a disastrous O(N²) time complexity for N insertions."},{question:"What growth factor is typically used in industrial dynamic arrays?",answer:"Common growth factors are 2.0x (GCC libstdc++ std::vector) and 1.5x (MSVC and Facebook Folly vector, which facilitates better memory allocator page reuse)."},{question:"How does vector_destroy use double pointers ('IntVector **vec_ptr')?",answer:"By passing a double pointer, the destructor can free the internal data array ('free((*vec_ptr)->data)'), free the container struct ('free(*vec_ptr)'), and set '*vec_ptr = NULL' directly in the caller's scope to prevent dangling pointers."},{question:"How do you implement bounds checking in vector_get() and vector_set()?",answer:"Verify that 'index < vec->size'. If 'index >= vec->size', return false or handle an out-of-bounds error rather than allowing arbitrary illegal memory reads."},{question:"How can you make the dynamic vector generic in pure C (supporting any data type)?",answer:"Store data as raw 'void *data' or 'char *data', track 'element_size' in bytes inside the struct, and use 'memcpy' with byte offsets ('(char*)vec->data + (index * vec->element_size)') for insertions."},{question:"What is vector_shrink_to_fit()?",answer:"A utility function that calls 'realloc(vec->data, vec->size * sizeof(int))' to release unused excess capacity back to the heap manager once insertions are complete."},{question:"What is vector_reserve()?",answer:"A function that pre-allocates heap memory for a known number of future elements upfront, avoiding all reallocations during subsequent insertions."},{question:"How do you implement vector_insert at an arbitrary index?",answer:"Ensure capacity, shift all elements from index to size-1 one position to the right using 'memmove()', insert the new value at index, and increment size."},{question:"Why must 'memmove()' be used instead of 'memcpy()' when shifting elements in an array?",answer:"Because source and destination memory regions overlap during array element shifting. 'memmove()' is explicitly guaranteed to handle overlapping memory safely, whereas 'memcpy()' produces undefined behavior."},{question:"How do you implement vector_remove_at at an arbitrary index?",answer:"Shift all elements from index+1 to size-1 one position to the left using 'memmove()', decrement size, and optionally shrink capacity if size drops below 25% of capacity."},{question:"What is a Dynamic Matrix Struct in C?",answer:"A struct definition such as 'typedef struct { int rows; int cols; double *data; } Matrix;' that encapsulates dimensions and a single contiguous heap buffer."},{question:"How do you allocate and initialize a Dynamic Matrix struct?",answer:"Allocate the struct, then allocate 'rows * cols * sizeof(double)' for data, check for NULL, and set fields."},{question:"How do you implement matrix multiplication dynamically in C?",answer:"Verify that 'A->cols == B->rows', allocate result matrix C with dimensions 'A->rows x B->cols', and compute dot products using triple nested loops."},{question:"How does local classroom debugging at Coder & AccoTax demonstrate vector capacity expansion?",answer:"In Sukanta Hui's class, students print capacity after every push_back, watching capacity jump dynamically from 2 → 4 → 8 → 16 as elements fill up."},{question:"What happens if malloc fails inside vector_create?",answer:"vector_create returns NULL, and the calling application must handle the failure gracefully without dereferencing."},{question:"What is vector_clear()?",answer:"A function that sets 'vec->size = 0' without deallocating the heap buffer, allowing the allocated capacity to be reused for new elements with zero allocation overhead."},{question:"How do you sort a dynamic vector using standard library qsort()?",answer:"Pass 'vec->data', 'vec->size', 'sizeof(int)', and a custom integer comparator function to 'qsort()'."},{question:"What is the advantage of vector data contiguous layout over linked lists?",answer:"Vectors allow instant O(1) random access by index ('vec->data[i]') and provide superior CPU cache performance, whereas linked lists require O(N) traversal and incur pointer overhead."},{question:"What is the memory footprint of an empty IntVector struct on a 64-bit machine?",answer:"24 bytes: 8 bytes for data pointer, 8 bytes for size_t size, and 8 bytes for size_t capacity."},{question:"How can you prevent memory fragmentation when allocating many dynamic matrices?",answer:"Allocate all matrix cells and the struct header in a single contiguous malloc chunk (single-allocation pattern)."},{question:"Why is building custom dynamic data structures in C the best test of systems programming competence?",answer:"Because it demands flawless coordination of pointer arithmetic, dynamic memory management, boundary checking, lifecycle encapsulation, and error handling."},{question:"What is the golden rule when building dynamic data structures in C?",answer:"Always provide paired creation and destruction functions (e.g., 'vector_create' and 'vector_destroy') and ensure every internal heap allocation is completely released upon destruction!"}],o=`================================================================================\r
CODER & ACCOTAX - C PROGRAMMING STUDY NOTE\r
MODULE 003_009 · TOPIC 6: DYNAMIC VECTOR & MATRIX CAPSTONE PROJECTS\r
Educator: Sukanta Hui (Barrackpore, Shyamnagar, West Bengal)\r
================================================================================\r
\r
1. DYNAMIC VECTOR ARCHITECTURE (C ENCAPSULATION)\r
--------------------------------------------------------------------------------\r
typedef struct {\r
    int *data;        // Pointer to raw contiguous heap buffer\r
    size_t size;      // Number of active elements currently stored\r
    size_t capacity;  // Total allocated slots currently available\r
} IntVector;\r
\r
\r
2. CORE LIFECYCLE OPERATIONS\r
--------------------------------------------------------------------------------\r
[1] Creation:\r
    IntVector *vec = vector_create(initial_capacity);\r
\r
[2] Geometric Amortized Push Back:\r
    - If size >= capacity, double capacity: new_cap = capacity * 2;\r
    - Reallocate buffer: temp = realloc(vec->data, new_cap * sizeof(int));\r
    - Insert element: vec->data[vec->size++] = value;\r
    - Amortized Time Complexity: O(1)\r
\r
[3] Safe Destruction (Double Pointer Idiom):\r
    void vector_destroy(IntVector **vec_ptr) {\r
        if (vec_ptr && *vec_ptr) {\r
            free((*vec_ptr)->data);\r
            free(*vec_ptr);\r
            *vec_ptr = NULL; // Neutralizes caller pointer!\r
        }\r
    }\r
\r
\r
3. WHY CONTIGUOUS VECTORS OUTPERFORM LINKED LISTS\r
--------------------------------------------------------------------------------\r
- Random Access: O(1) via direct index offset (vec->data[i])\r
- Cache Efficiency: Contiguous memory maximizes CPU L1/L2 prefetching\r
- Low Overhead: Zero pointer overhead per element (unlike 8-16 bytes in list nodes)\r
\r
================================================================================\r
Coder & AccoTax Barrackpore · Systems Programming Mastery Series\r
================================================================================\r
`;function v(){return e.jsxs("div",{className:"space-y-12 bg-slate-900 text-slate-200 p-4 md:p-8 rounded-2xl border border-slate-800",children:[e.jsxs("header",{className:"space-y-3 border-b border-slate-800 pb-6",children:[e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("span",{className:"bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Module 003_009 · Topic 6"}),e.jsx("span",{className:"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3 py-1 rounded-full text-xs font-semibold",children:"Systems Capstone Project"})]}),e.jsx("h1",{className:"text-3xl md:text-4xl font-extrabold text-white tracking-tight",children:"Hands-on Projects: Dynamic Resizable Vector Engine"}),e.jsx("p",{className:"text-slate-400 text-base max-w-4xl leading-relaxed",children:"Synthesize your dynamic memory mastery by constructing an industrial resizable Dynamic Vector in pure C. Learn geometric capacity expansion, bounds-checked element access, and leak-proof lifecycle management."})]}),e.jsxs("section",{className:"space-y-4 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-sky-300 flex items-center gap-2",children:[e.jsx("span",{children:"📖"})," Topic Description: Engineering Dynamic Data Structures"]}),e.jsxs("div",{className:"space-y-3 text-slate-300 text-sm md:text-base leading-relaxed",children:[e.jsxs("p",{children:["Standard C arrays have rigid compile-time limits. By combining a ",e.jsx("code",{children:"struct"})," with dynamic heap allocation, we can build custom containers that automatically grow as data arrives, identical to ",e.jsx("code",{children:"std::vector"})," in C++ or ",e.jsx("code",{children:"ArrayList"})," in Java."]}),e.jsxs("div",{className:"bg-slate-900/60 p-4 rounded-xl border-l-4 border-emerald-500 text-xs md:text-sm text-slate-300 space-y-2",children:[e.jsx("p",{className:"font-semibold text-emerald-300",children:"🏫 Classroom Story at Coder & AccoTax (Barrackpore):"}),e.jsxs("p",{children:["In our Barrackpore project lab, Swadeep, Tuhina, and Abhronila built a real-time banking transaction logger. Instead of fixing the transaction capacity to 100, Sukanta Hui guided them to build an ",e.jsx("code",{children:"IntVector"})," engine with geometric doubling. They observed that as transactions crossed 2, 4, 8, and 16 items, the vector doubled its capacity seamlessly without losing a single transaction record!"]})]})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"⚙️ Semantic Visual Diagram: Dynamic Vector Memory Model"}),e.jsx("div",{className:"bg-slate-950 p-6 rounded-2xl border border-slate-800 overflow-x-auto",children:e.jsxs("svg",{viewBox:"0 0 900 280",className:"w-full min-w-[750px] font-sans",children:[e.jsx("rect",{x:"20",y:"20",width:"860",height:"240",rx:"16",fill:"#0f172a",stroke:"#334155",strokeWidth:"2"}),e.jsxs("g",{transform:"translate(40, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"220",height:"180",rx:"10",fill:"#1e1b4b",stroke:"#6366f1",strokeWidth:"1.5"}),e.jsx("text",{x:"15",y:"30",fill:"#a5b4fc",className:"font-bold text-xs",children:"STRUCT IntVector (24 Bytes)"}),e.jsx("rect",{x:"15",y:"45",width:"190",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"65",fill:"#e0e7ff",className:"font-mono text-xs",children:"data = 0x8A00 (ptr) →"}),e.jsx("rect",{x:"15",y:"85",width:"190",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"105",fill:"#e0e7ff",className:"font-mono text-xs",children:"size = 3 (active items)"}),e.jsx("rect",{x:"15",y:"125",width:"190",height:"30",fill:"#312e81",rx:"4"}),e.jsx("text",{x:"25",y:"145",fill:"#e0e7ff",className:"font-mono text-xs",children:"capacity = 6 (slots)"})]}),e.jsx("text",{x:"280",y:"145",fill:"#64748b",className:"font-bold text-xl",children:"→"}),e.jsxs("g",{transform:"translate(320, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"530",height:"180",rx:"10",fill:"#064e3b",stroke:"#10b981",strokeWidth:"1.5"}),e.jsx("text",{x:"20",y:"30",fill:"#6ee7b7",className:"font-bold text-xs",children:"HEAP DATA BUFFER @ 0x8A00 (Capacity = 6)"}),e.jsxs("g",{transform:"translate(20, 50)",children:[e.jsx("rect",{x:"0",y:"0",width:"75",height:"50",fill:"#065f46",stroke:"#10b981",rx:"4"}),e.jsx("text",{x:"37",y:"30",textAnchor:"middle",fill:"#ecfdf5",className:"font-mono text-xs font-bold",children:"15"}),e.jsx("text",{x:"37",y:"65",textAnchor:"middle",fill:"#a7f3d0",className:"font-mono text-[10px]",children:"[0]"}),e.jsx("rect",{x:"80",y:"0",width:"75",height:"50",fill:"#065f46",stroke:"#10b981",rx:"4"}),e.jsx("text",{x:"117",y:"30",textAnchor:"middle",fill:"#ecfdf5",className:"font-mono text-xs font-bold",children:"30"}),e.jsx("text",{x:"117",y:"65",textAnchor:"middle",fill:"#a7f3d0",className:"font-mono text-[10px]",children:"[1]"}),e.jsx("rect",{x:"160",y:"0",width:"75",height:"50",fill:"#065f46",stroke:"#10b981",rx:"4"}),e.jsx("text",{x:"197",y:"30",textAnchor:"middle",fill:"#ecfdf5",className:"font-mono text-xs font-bold",children:"45"}),e.jsx("text",{x:"197",y:"65",textAnchor:"middle",fill:"#a7f3d0",className:"font-mono text-[10px]",children:"[2]"}),e.jsx("rect",{x:"240",y:"0",width:"75",height:"50",fill:"#022c22",stroke:"#059669",strokeDasharray:"3 3",rx:"4"}),e.jsx("text",{x:"277",y:"30",textAnchor:"middle",fill:"#6ee7b7",className:"font-mono text-xs",children:"free"}),e.jsx("text",{x:"277",y:"65",textAnchor:"middle",fill:"#059669",className:"font-mono text-[10px]",children:"[3]"}),e.jsx("rect",{x:"320",y:"0",width:"75",height:"50",fill:"#022c22",stroke:"#059669",strokeDasharray:"3 3",rx:"4"}),e.jsx("text",{x:"357",y:"30",textAnchor:"middle",fill:"#6ee7b7",className:"font-mono text-xs",children:"free"}),e.jsx("text",{x:"357",y:"65",textAnchor:"middle",fill:"#059669",className:"font-mono text-[10px]",children:"[4]"}),e.jsx("rect",{x:"400",y:"0",width:"75",height:"50",fill:"#022c22",stroke:"#059669",strokeDasharray:"3 3",rx:"4"}),e.jsx("text",{x:"437",y:"30",textAnchor:"middle",fill:"#6ee7b7",className:"font-mono text-xs",children:"free"}),e.jsx("text",{x:"437",y:"65",textAnchor:"middle",fill:"#059669",className:"font-mono text-[10px]",children:"[5]"})]}),e.jsx("text",{x:"20",y:"150",fill:"#34d399",className:"text-xs font-mono",children:"Size = 3 (Green) | Free Capacity = 3 (Dashed) | Automatic 2x resize when full"})]})]})})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-sky-300",children:"🔍 Deep Technical Breakdown: Vector API Design"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-emerald-300 text-sm",children:"Amortized O(1) Growth Strategy"}),e.jsx("p",{className:"text-slate-300",children:"Doubling capacity on demand guarantees that copying elements during reallocation happens infrequently, yielding an average insertion time complexity of O(1)."})]}),e.jsxs("div",{className:"bg-slate-800/40 p-4 rounded-xl border border-slate-700 space-y-2",children:[e.jsx("h3",{className:"font-bold text-sky-300 text-sm",children:"Safe Double-Pointer Destructor"}),e.jsxs("p",{className:"text-slate-300",children:[e.jsx("code",{children:"vector_destroy(&my_vec)"})," frees the internal buffer, frees the struct container, and sets ",e.jsx("code",{children:"my_vec = NULL"})," in one clean call."]})]})]})]}),e.jsxs("section",{className:"space-y-5 bg-slate-800/40 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-lg",children:[e.jsxs("h2",{className:"text-2xl font-bold text-emerald-400 flex items-center gap-2",children:[e.jsx("span",{children:"💻"})," Example Section: Dynamic Vector Capstone Demonstration"]}),e.jsxs("p",{className:"text-slate-300 text-sm leading-relaxed",children:["The program below (",e.jsx("code",{children:"DynamicVectorProjectDemo.c"}),") demonstrates a complete, standalone, production-grade Dynamic Vector engine with geometric capacity expansion, bounds checking, and safe destruction."]}),e.jsx(t,{fileModule:i,title:"DynamicVectorProjectDemo.c",editable:!1}),e.jsxs("div",{className:"mt-4 rounded-xl border border-slate-700 bg-slate-950 p-4",children:[e.jsxs("div",{className:"text-xs font-semibold text-sky-400 mb-2 flex items-center gap-2",children:[e.jsx("span",{children:"🖥️"})," Expected Console Execution Output:"]}),e.jsx("pre",{className:"text-slate-200 text-xs md:text-sm font-mono leading-relaxed whitespace-pre overflow-x-auto",children:`========================================================
   CODER & ACCOTAX - DYNAMIC VECTOR CAPSTONE PROJECT    
========================================================

--- 1. PUSHING ELEMENTS (Triggering Geometric Growth) ---
  Pushed:  15 | Size: 1 | Capacity: 2
  Pushed:  30 | Size: 2 | Capacity: 2
  [Vector Event] Capacity auto-expanded to 4 elements
  Pushed:  45 | Size: 3 | Capacity: 4
  Pushed:  60 | Size: 4 | Capacity: 4
  [Vector Event] Capacity auto-expanded to 8 elements
  Pushed:  75 | Size: 5 | Capacity: 8
  Pushed:  90 | Size: 6 | Capacity: 8

--- 2. VECTOR CONTENTS ---
  Elements: [0]: 15  [1]: 30  [2]: 45  [3]: 60  [4]: 75  [5]: 90  

--- 3. POPPING LAST ELEMENT ---
  Popped element: 90 | New Size: 5

--- 4. CLEAN DESTRUCTION ---
  Vector destroyed. my_vec pointer neutralized to: (nil)
========================================================`})]})]}),e.jsxs("section",{className:"space-y-4",children:[e.jsx("h2",{className:"text-xl font-bold text-rose-400",children:"⚠️ Common Pitfalls & Best Practices"}),e.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4 text-xs",children:[e.jsxs("div",{className:"bg-rose-950/20 border border-rose-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-rose-300",children:"Pitfall: Freeing Struct Without Data Buffer"}),e.jsxs("p",{className:"text-slate-300",children:["Calling ",e.jsx("code",{children:"free(vec);"})," without first calling ",e.jsx("code",{children:"free(vec->data);"})," destroys the struct but leaves the data array permanently stranded in RAM."]})]}),e.jsxs("div",{className:"bg-emerald-950/20 border border-emerald-900/30 p-4 rounded-xl space-y-1.5",children:[e.jsx("h3",{className:"font-bold text-emerald-300",children:"Best Practice: Encapsulate Lifecycle in Pairs"}),e.jsxs("p",{className:"text-slate-300",children:["Always pair ",e.jsx("code",{children:"create()"})," and ",e.jsx("code",{children:"destroy()"})," functions in every custom data structure you design in C."]})]})]})]}),e.jsxs("section",{className:"bg-slate-800/30 border border-slate-700/60 p-5 rounded-2xl space-y-2 text-xs md:text-sm",children:[e.jsxs("h3",{className:"font-bold text-amber-300 flex items-center gap-1.5",children:[e.jsx("span",{children:"🤔"})," Think About This..."]}),e.jsxs("p",{className:"text-slate-300 leading-relaxed",children:["How would you modify ",e.jsx("code",{children:"IntVector"})," to support generic ",e.jsx("code",{children:"void*"})," pointers so it can store any data type (strings, custom structs, or floats)?"]})]}),e.jsx("section",{children:e.jsx(r,{title:"Module 003_009 Topic 6 FAQs: Dynamic Vector Projects",questions:s})}),e.jsx("section",{children:e.jsx(n,{content:o,title:"Module 003_009 Topic 6 Note: Dynamic Vector",stampEnabled:!0,showDownload:!0,downloadButtonText:"Download Printable Note",downloadFileName:"module_003_009_topic6_note.txt"})}),e.jsx("section",{children:e.jsx(a,{note:"Building a dynamic vector is the ultimate rite of passage for every systems programmer! Master this encapsulation pattern, and you will understand how modern standard libraries power industrial software! — Sukanta Hui"})})]})}export{v as default};
