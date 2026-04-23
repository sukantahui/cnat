import{j as e}from"./index-CZ43a81g.js";import{c as l}from"./clsx-B-dksMZM.js";import{T as s}from"./TeacherSukantaHui-GAsd2xdf.js";import{E as t}from"./EditableCCodeBlock-AjlbeKMS.js";import"./git-branch-D7OKREwa.js";import"./index-PEvkwhGW.js";import"./file-code-eIIiaVan.js";import"./type-BbvUXNU_.js";import"./refresh-cw-DzOvX6Wp.js";import"./copy-BjNRK02q.js";import"./download-CNCNpCMb.js";const n=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Simulate a simple allocator with alignment to 8 bytes\r
void* my_malloc(size_t size) {\r
    // For demonstration, round up to multiple of 8 (minimum 16 for header?)\r
    // Actually, just show the effect: allocate 8 bytes more than requested.\r
    size_t aligned = (size + 7) & ~7;\r
    return malloc(aligned);\r
}\r
\r
int main() {\r
    // Request various sizes and see the actual allocated space (if we could)\r
    // This example just illustrates the concept.\r
    size_t requests[] = {1, 5, 8, 9, 16, 17};\r
    for (int i = 0; i < 6; i++) {\r
        void *p = my_malloc(requests[i]);\r
        printf("Requested %zu bytes, pointer %p\\n", requests[i], p);\r
        free(p);\r
    }\r
    // In reality, you can't see the internal fragmentation directly,\r
    // but you can infer it by measuring memory usage.\r
    printf("\\nInternal fragmentation: wasted space due to alignment and metadata.\\n");\r
    return 0;\r
}`,i=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
#define NUM 100\r
\r
int main() {\r
    void *ptrs[NUM];\r
    // Allocate many small blocks of different sizes\r
    for (int i = 0; i < NUM; i++) {\r
        size_t size = (i % 5 + 1) * 10; // sizes: 10,20,30,40,50\r
        ptrs[i] = malloc(size);\r
        if (!ptrs[i]) {\r
            printf("Allocation failed at %d\\n", i);\r
            break;\r
        }\r
    }\r
    // Free every other block to create holes\r
    for (int i = 0; i < NUM; i += 2) {\r
        free(ptrs[i]);\r
        ptrs[i] = NULL;\r
    }\r
    // Now try to allocate a large block\r
    void *big = malloc(500);\r
    if (!big) {\r
        printf("Failed to allocate 500 bytes — external fragmentation!\\n");\r
    } else {\r
        printf("Allocated 500 bytes successfully\\n");\r
        free(big);\r
    }\r
    // Cleanup remaining\r
    for (int i = 1; i < NUM; i += 2) {\r
        free(ptrs[i]);\r
    }\r
    return 0;\r
}`,o=`#include <stdio.h>\r
#include <stdlib.h>\r
\r
// Simple fixed-size pool for objects of size 32 bytes\r
#define POOL_SIZE 100\r
#define OBJECT_SIZE 32\r
\r
typedef struct {\r
    char data[OBJECT_SIZE];\r
    int used;\r
} PoolObject;\r
\r
PoolObject pool[POOL_SIZE];\r
\r
void* pool_alloc() {\r
    for (int i = 0; i < POOL_SIZE; i++) {\r
        if (!pool[i].used) {\r
            pool[i].used = 1;\r
            return &pool[i];\r
        }\r
    }\r
    return NULL;\r
}\r
\r
void pool_free(void *p) {\r
    PoolObject *obj = (PoolObject*)p;\r
    obj->used = 0;\r
}\r
\r
int main() {\r
    // Allocate many objects from pool\r
    void *objects[50];\r
    for (int i = 0; i < 50; i++) {\r
        objects[i] = pool_alloc();\r
        if (!objects[i]) {\r
            printf("Pool allocation failed at %d\\n", i);\r
            break;\r
        }\r
    }\r
    // Free some in arbitrary order (no fragmentation in the pool)\r
    for (int i = 0; i < 50; i += 2) {\r
        pool_free(objects[i]);\r
    }\r
    // Allocate again — pool still works\r
    void *new_obj = pool_alloc();\r
    if (new_obj) {\r
        printf("Pool reallocation successful — no external fragmentation.\\n");\r
        pool_free(new_obj);\r
    }\r
    // Cleanup\r
    for (int i = 1; i < 50; i += 2) {\r
        pool_free(objects[i]);\r
    }\r
    return 0;\r
}`,c=`
  @keyframes fadeSlideUp {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    .animate-fade-slide-up {
      animation: fadeSlideUp 0.6s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .animate-fade-slide-up {
      opacity: 1;
      transform: translateY(0);
    }
  }
`,k=()=>{const r=["0ms","100ms","200ms","300ms","400ms","500ms","600ms","700ms","800ms","900ms","1000ms"],a=()=>l("animate-fade-slide-up","opacity-0");return e.jsxs(e.Fragment,{children:[e.jsx("style",{children:c}),e.jsxs("div",{className:"w-full max-w-5xl mx-auto px-4 py-8 space-y-12 dark:bg-gray-900 bg-gray-50 text-gray-900 dark:text-gray-100 transition-colors duration-300",children:[e.jsxs("div",{className:a(),style:{animationDelay:r[0]},children:[e.jsx("h1",{className:"text-4xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-blue-400 dark:to-purple-400",children:"Memory Fragmentation"}),e.jsx("p",{className:"text-lg text-gray-600 dark:text-gray-300 mt-2 leading-relaxed",children:"Internal and external fragmentation — the hidden enemies of heap memory."})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[1]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"Why Memory Fragmentation Matters"}),e.jsxs("p",{className:"leading-relaxed mb-3",children:["Even when there's enough total free memory, it might be split into many small unusable blocks. This is called ",e.jsx("strong",{children:"fragmentation"}),". It causes ",e.jsx("code",{children:"malloc"})," to fail even though the total free space is large, and it degrades performance by increasing allocation overhead."]}),e.jsxs("p",{className:"leading-relaxed",children:["There are two types: ",e.jsx("strong",{children:"internal fragmentation"})," (wasted space within allocated blocks) and ",e.jsx("strong",{children:"external fragmentation"})," (wasted space between allocated blocks). Understanding both is key to writing efficient, long‑running programs."]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[2]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"🧩 Internal Fragmentation"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("p",{className:"leading-relaxed mb-3",children:"Internal fragmentation occurs when allocated memory is larger than the requested size. This can happen due to:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1 mb-3",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Alignment requirements:"})," Many allocators round up sizes to multiples of 8 or 16 bytes."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Fixed‑size allocation pools:"})," Using a slab allocator where each block is a fixed size."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Metadata overhead:"})," Each allocated block has a small header (size, flags) stored before the data."]})]}),e.jsx("p",{children:"For example, requesting 5 bytes may actually allocate 16 bytes. The wasted 11 bytes are internal fragmentation."}),e.jsx("div",{className:"mt-3 p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded border-l-4 border-yellow-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"⚠️ Internal fragmentation is often invisible"})," — you ask for 5 bytes, you get a pointer to 5 bytes, but the heap manager actually reserved more space."]})})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[3]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🧩 External Fragmentation"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md transition-all duration-300 hover:shadow-xl",children:[e.jsx("p",{className:"leading-relaxed mb-3",children:"External fragmentation happens when free memory is split into many small, non‑contiguous blocks. Even if total free space is large, a request for a big block may fail because no single free block is big enough."}),e.jsx("p",{className:"leading-relaxed mb-3",children:"This is common in programs that allocate and free blocks of varying sizes over time. The classic example:"}),e.jsxs("ul",{className:"list-disc list-inside space-y-1",children:[e.jsx("li",{children:"Allocate A (100 bytes), B (200 bytes), C (100 bytes)"}),e.jsx("li",{children:"Free B → now free blocks: 100 (before), 200 (middle), 100 (after) → external fragmentation."}),e.jsx("li",{children:"Now request 150 bytes → cannot fit in any single block → allocation fails."})]}),e.jsx("div",{className:"mt-3 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border-l-4 border-blue-500",children:e.jsxs("p",{className:"text-sm",children:[e.jsx("strong",{children:"💡 Tip:"})," External fragmentation can be mitigated by using memory pools, buddy allocators, or by allocating similar sizes together."]})})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[4]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"🖼️ Visualizing Fragmentation"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md transition-all duration-300 hover:shadow-xl",children:e.jsxs("svg",{viewBox:"0 0 800 280",className:"w-full h-auto","aria-label":"Fragmentation illustration",children:[e.jsx("rect",{width:"800",height:"280",fill:"transparent"}),e.jsx("text",{x:"50",y:"30",fill:"currentColor",className:"text-sm font-semibold",children:"Internal Fragmentation"}),e.jsx("rect",{x:"50",y:"50",width:"300",height:"80",fill:"none",stroke:"#22c55e",strokeWidth:"2",rx:"4"}),e.jsx("rect",{x:"60",y:"60",width:"100",height:"60",fill:"rgba(34,197,94,0.2)",stroke:"#22c55e",strokeWidth:"1"}),e.jsx("text",{x:"70",y:"95",fill:"currentColor",className:"text-xs",children:"Requested: 40B"}),e.jsx("rect",{x:"170",y:"60",width:"170",height:"60",fill:"rgba(239,68,68,0.2)",stroke:"#ef4444",strokeWidth:"1",strokeDasharray:"4 2"}),e.jsx("text",{x:"180",y:"95",fill:"#ef4444",className:"text-xs",children:"Wasted (internal)"}),e.jsx("text",{x:"70",y:"125",fill:"currentColor",className:"text-xs",children:"Actual allocated: 100B (due to alignment/pool)"}),e.jsx("text",{x:"50",y:"170",fill:"currentColor",className:"text-sm font-semibold",children:"External Fragmentation"}),e.jsx("rect",{x:"50",y:"190",width:"700",height:"50",fill:"none",stroke:"#a855f7",strokeWidth:"2",rx:"4"}),e.jsx("rect",{x:"60",y:"200",width:"100",height:"30",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"85",y:"220",fill:"currentColor",className:"text-xs",children:"A"}),e.jsx("rect",{x:"180",y:"200",width:"140",height:"30",fill:"rgba(156,163,175,0.3)",stroke:"#9ca3af",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("text",{x:"210",y:"220",fill:"gray",className:"text-xs",children:"Free 140B"}),e.jsx("rect",{x:"340",y:"200",width:"80",height:"30",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"360",y:"220",fill:"currentColor",className:"text-xs",children:"B"}),e.jsx("rect",{x:"440",y:"200",width:"70",height:"30",fill:"rgba(156,163,175,0.3)",stroke:"#9ca3af",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("text",{x:"460",y:"220",fill:"gray",className:"text-xs",children:"Free 70B"}),e.jsx("rect",{x:"530",y:"200",width:"100",height:"30",fill:"rgba(168,85,247,0.2)",stroke:"#a855f7",strokeWidth:"1"}),e.jsx("text",{x:"560",y:"220",fill:"currentColor",className:"text-xs",children:"C"}),e.jsx("rect",{x:"650",y:"200",width:"90",height:"30",fill:"rgba(156,163,175,0.3)",stroke:"#9ca3af",strokeWidth:"1",strokeDasharray:"3 3"}),e.jsx("text",{x:"670",y:"220",fill:"gray",className:"text-xs",children:"Free 90B"}),e.jsx("text",{x:"400",y:"260",fill:"#ef4444",className:"text-xs",children:"Request 150B fails → no contiguous free block"})]})})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[5]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-red-500 pl-4 mb-4",children:"💻 Code Examples"}),e.jsxs("div",{className:"space-y-6",children:[e.jsx(t,{title:"Example 1: Internal fragmentation (alignment overhead)",initialCode:n}),e.jsx(t,{title:"Example 2: External fragmentation (allocation pattern)",initialCode:i}),e.jsx(t,{title:"Example 3: Reducing fragmentation (pool allocator)",initialCode:o})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[6]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-orange-500 pl-4 mb-4",children:"⚠️ Common Pitfalls"}),e.jsxs("ul",{className:"list-disc list-inside space-y-2 text-gray-800 dark:text-gray-200 bg-amber-50 dark:bg-amber-900/20 p-4 rounded-xl",children:[e.jsxs("li",{children:[e.jsx("strong",{children:"Ignoring fragmentation:"})," Assuming memory is always available leads to unexpected allocation failures."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Mixing very different allocation sizes:"})," Creates many small holes, worsening external fragmentation."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Frequent allocation/free of large blocks:"})," Can quickly fragment the heap."]}),e.jsxs("li",{children:[e.jsx("strong",{children:"Not using memory pools:"})," For many small, fixed‑size objects, a custom allocator can eliminate fragmentation."]}),e.jsxs("li",{children:[e.jsxs("strong",{children:["Assuming ",e.jsx("code",{children:"realloc"})," will always succeed:"]})," It can fail due to fragmentation even if total memory is available."]})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[7]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-green-500 pl-4 mb-4",children:"✅ Best Practices"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-2",children:[e.jsx("li",{children:"✔️ For many small objects of the same size, use a memory pool (slab allocator) to eliminate fragmentation."}),e.jsx("li",{children:"✔️ Try to allocate blocks of similar sizes together to reduce external fragmentation."}),e.jsx("li",{children:"✔️ Free memory in the reverse order of allocation when possible (LIFO) to keep free space contiguous."}),e.jsx("li",{children:"✔️ For long‑running programs, periodically defragment the heap (e.g., using a copying allocator)."}),e.jsx("li",{children:"✔️ Use memory allocators designed for low fragmentation (e.g., jemalloc, tcmalloc) for large‑scale applications."})]})})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[8]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-indigo-500 pl-4 mb-4",children:"📋 Mini Checklist"}),e.jsx("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow",children:e.jsxs("ul",{className:"space-y-1",children:[e.jsx("li",{children:"☐ I understand the difference between internal and external fragmentation."}),e.jsx("li",{children:"☐ I can identify situations that cause fragmentation."}),e.jsx("li",{children:"☐ I know how alignment and metadata cause internal fragmentation."}),e.jsx("li",{children:"☐ I can explain why external fragmentation leads to allocation failures."}),e.jsx("li",{children:"☐ I am aware of techniques to reduce fragmentation (pools, LIFO freeing)."})]})})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[9]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-blue-500 pl-4 mb-4",children:"💡 Hint Section"}),e.jsxs("div",{className:"bg-blue-50 dark:bg-blue-900/30 p-4 rounded-xl",children:[e.jsx("p",{className:"italic",children:"Observe carefully..."}),e.jsxs("ul",{className:"list-disc list-inside mt-2",children:[e.jsx("li",{children:"In the external fragmentation example, what happens if you free in LIFO order instead of FIFO?"}),e.jsx("li",{children:"How would you design a simple memory pool for fixed‑size objects? What would its structure look like?"}),e.jsxs("li",{children:["Why does ",e.jsx("code",{children:"realloc"})," sometimes move the block? How does this help fragmentation?"]})]})]})]}),e.jsxs("section",{className:a(),style:{animationDelay:r[10]},children:[e.jsx("h2",{className:"text-2xl font-semibold border-l-4 border-purple-500 pl-4 mb-4",children:"🔧 Professional Tips & Tricks"}),e.jsxs("div",{className:"bg-white dark:bg-gray-800 p-4 rounded-lg shadow space-y-2",children:[e.jsxs("p",{children:[e.jsx("strong",{children:"🎯 Debugging mindset:"})," Use ",e.jsx("code",{children:"valgrind"})," with ",e.jsx("code",{children:"--tool=massif"})," to visualize heap usage and fragmentation."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📦 Performance:"})," For real‑time systems, pre‑allocate a large buffer and use a custom allocator to avoid fragmentation entirely."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"🧹 Reuse objects:"})," Instead of freeing and allocating repeatedly, reuse allocated objects (object pools) to avoid fragmentation."]}),e.jsxs("p",{children:[e.jsx("strong",{children:"📏 Know your allocator:"})," Different allocators have different fragmentation characteristics; choose one that fits your workload."]})]})]}),e.jsx(s,{note:"Fragmentation is like a library where books are returned but placed on the wrong shelves — you have space, but can't fit a large book. In your programs, think about allocation patterns: allocate similar sizes together, free in reverse order, and consider using memory pools for frequent allocations. This will keep your heap healthy and your program reliable."})]})]})};export{k as default};
